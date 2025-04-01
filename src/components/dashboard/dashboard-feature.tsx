/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "JQuwV2XuKFodZTDv36u2HU4uojLy2fP6DjXqvW6SWAHPxTNTZbao41wnrtFnHmu12JoqUyvypSP3GHJXfotzDtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJh9dHVsPLtExcSAfBa5mdodBXi182Ur54wmjT9VwBhGVz5vp1NxqjD5qmdKj5q9aAewCZDeyfe1E7AaR5LEStb",
  "key1": "4DLFkKKroMWb21nChoGejVi8ij1eJtxCdtEcdCaQQXnEhzYVogYaQAKcdW6cLWhAZTavhuqvBUEhD2cGbkrPaxF4",
  "key2": "2AzGm5cMNySBqdQkFaQxCgWWDrUbuLCiR7NnsCPDqnRpzMxJGKR6uwdk8j71dhyDXbYwpYioDp5XHoyZrqQbC1ev",
  "key3": "aTETC1iLQqzc6u75bxEzkRisbJhhxwVwkg1SjacCkq38yhMRHMsinDqAZVUKZhnDQCCPDFavuvvSRWPYq9mukyj",
  "key4": "2Jeoa1vmjTzvMmbpQxgo8aGu7FhRmPzvXjhBS76ocgzg5dCfFhtcHbW4MCE6zH1EUFp4a34WCsHMagHECt2pnLqc",
  "key5": "3xsv7hr3g1SjhJ14sSV2hSfLDWTAyJHZGGG2GyHZh3toCmBCdsjEv7dtXWEuNspE313JAd9Ym7o68LDTZkib2VYF",
  "key6": "31rrpaZKbPrPDtfyYtXZt9taTF13STsV3sjm7hXs9SoQD5eMpLhv3Kk9JsFNu2GV5wy85DWNyNP77sHADpubpkE6",
  "key7": "3hrpktmzupFbP71zu6A9Yvk8dYkL8RYwzS7RPPAEXfu1hvLJgGPw85fRbkhEUUBCgonfm1KoAXUNv2RAzxEqBUZa",
  "key8": "45fnLGSZQWfA4jTwsfvesMa11Qf4NX3keDU6KvKBxr2eV44fXfCrh4ut86Mu9cGNYyezuPcLzPLdodyetUjm4Mdb",
  "key9": "4PxeK7R4ambcnR6qjjrxjFF91dxfyYJiL8QKKgQ2Y9nRUW1ibjuVZJK2pJvZoJLPSs7DU7VfQPnXJGFUsscSJTR4",
  "key10": "2ysGtyZDQGaw2mzmrC6r3SmySEPKCg9uGBJjsjvqkUyjzkTJD4EY89DFRMhQsVNHS9HfMxPnH8mQ6Gr33t4USwHS",
  "key11": "4krMJDWyECAyxGuadNQcebKeKEyZCAWgCUMBWevVRBUyrQR4cLYRTJsvQTGpukcARFi6mRdXymaPY1NTSgV5NBe1",
  "key12": "4t9GL1ngbrkEEcNyNpXKxJbapospyAumWAnS1AYdJywxeaeQU74QhCvbkrjRHtZ6qbjiwrm2RWb7eshium8HZaci",
  "key13": "4Rj4t8F7sze3Xe4K7qnp8YaGDN678LpxwaupBwZ8ayM47RK4mm5CjxU76oT5sv44q4R25gpuL8gXmjs3Rje229Uu",
  "key14": "3ZfFYVMZ5nALMi21h4LcSj7MR887vaRo6HYQSThKiRQGwGSSHW7xQstGypFz3z2UJyPMicJmLWtGBTWVzoeqYAfG",
  "key15": "4obNdT16dGJxfPhz3tkYHjKiNJwd2qxu38Anrhphma1ziwWcPrqNhohA8y2VF4Si3d3Cxa68FvhX6M1vSSy3gNAr",
  "key16": "2jJqwf8Tigcdj984hBqn2Tv8vPr2zw7VyRrjLvzHzashftPNAenkMEXR89wwKkoPjbsTxRknd5gsWjCnMt6G7cjK",
  "key17": "4mCbdjvXqzsWNWpL6CEFYtDAfxnWW25DWRyd8L1nkLLvFyNedZUbmdCH4zsGr12NHTkXaD7kTwodpgL6BnQpj4ny",
  "key18": "w9ZivC18uvAzKN8UWafunYEwwSt95d4AYqzXd6gKBmqSzZd4FuqG32F6UfNcLJcRYVWyVQzKhw9wS9VmJqKPnf3",
  "key19": "QTy25QhaG8r2YrLfWan2wKm3G7yCrnzELKPCsC8dfbkt3MXzKk5AjR8KnciVkLnNSgtn8vdnENWm7J6pxUZmave",
  "key20": "4ccaDp7ycbwNwX48oGxDEWNTcQF6djDdMqmAJx9sfJnxcn1EPDRsUy6cx2UTUktXXgpbcCdqHaAr8io5szYp8be7",
  "key21": "UY6R2MvVoQDy8rFZpK5R197ivXSEBQR5btjykb1ZS58G7q4MP6BRkWDWjSHv9Z7pio3wJEXXXzsUHrj7RV6yU8j",
  "key22": "hAxH6wfDs2on84M5baPoWGysmNNwGRzkto4VM2bVzdcUvXfHxufw52A6PHyM3XtmyrvwbCCa6HpgpWQBWHrd8r8",
  "key23": "4J9UM5BdxBuzPisvg4g6YVsdyaRhPjJFWBWbQ8gjHkaapk5AQusUhztfhMLPThUeYsngKRb3eteHNu31CUrkag41",
  "key24": "4nh5uc2KTxvPmuwKvsG9jCe7QM5thJARkt8QJb9tDDRWphMT8p2Aw967q4P2nYbz3u37acZ7U4f7k1ZdWZCmsPg",
  "key25": "ZV6V5LdUPJGLC9uADEBWViV24VhBDmaiZ5RBP4KeVc2ut5VppGWvDiwmZdymFWiYN6JgwHxSELtvfgY3T2tGWnp",
  "key26": "2KM9XGsHFx8Jmz1RsZgYUqqr3rn8ZGaVn6SrmnFUiD4sDSZX5Gfvm6d1yCW3F2DtCpkbqcAi9yoqhA4oJjFYEqdF",
  "key27": "4iCEtZGNhC8toqJswqtjVRMXMnBqCeiVnQouQCGCCyyb9pJWQn7DMV5VsmNMwuB8L6nRLfpJewCDcYDvHkDwu6tC",
  "key28": "2rJugP2xtRmCWSHxF8HbJPF5qk6vNor7HZ3DujkDDg8ZgvhungLfREnfobbTbANxwEyaHiKdRYFAkhcqKqTsG322",
  "key29": "4Sae1U6CBFDehcmt2T2qXSXqfNTqk3mKqYp5QHmKw47t2jbXnbzJNScYed9wWnoJrSw6FdJQuTnCLMMCd8eTTTmf",
  "key30": "4mhGPB6sg6xLPNciDmLtDTopnm9oJA84DuDHDVTNcMYXGir8pwepCY1ButUB4MVCt6AbCQmJt8uiNBj1Apw79iBQ",
  "key31": "4TEase7ymkWF5zgXa3dcoYw2FfcGM9c14pCwpUeF6hpVDG1hoZ7ZM3bAiWiiKCBKMbAVK1VGjji5Fn9msBoATnPK",
  "key32": "U3zczLc6FmAAkXbi9AL9NiSAn31xAd9efjo85aeuUVeYcBrqWAGYg1VthiLjWezqgD9YKQ2aDd1nA6tiiDXsefb",
  "key33": "3cMUCGE5MFWYPzzprfTbMzh7QPuomypySxnidr2FMorSkJCZmeckGyZK7Nt1xU37FqG4XoaFoHeLCCir2UbdHx3P",
  "key34": "4734H2y3swjtWkCMYtaGNT9H9geNJwLtLkQwcYDNBcei4z2tjk5UgskMqyucQsrveneU6AKHwh8rTqvRvF7ME6ZK",
  "key35": "5vSjeX23G7RWA886kq7KdLDKPNrqkduBT6hSDArc6Pq2JhYW4HTLgBSNTg8SsUz5ohWg8SmTouirHXvYwG3cedLu",
  "key36": "3csfiVZta5fF1n3EVhFBqFNDa3eCHntgXVCVErKo6Cioq8QC2zw5uu9M7bCqwYkU1MbRsuhMAx5A2YtVHz9s8BPt",
  "key37": "2KtHLWro3rdQM4UmwG4GALnuNtezJrAygoXQStzoe3VoyThsFScXEkaxdnu7hDYRVYdg5tmFMe5rnkRJLuffVU31",
  "key38": "33CVizXmavDzS6cSNqTEJrUmGuz2EC8WWvmYs8MmThfJsXyCwVm6XioWh31zgmu7dz75np3PqJmj6NEoy8e9WxTF",
  "key39": "aPyCKMdrctcnzDNZrXiSHvfbcJXJbTMSGhp5vXSCZGnFs5q5qtCaKcXjMqL9jt6GQGh7aSN27GxThErJJKesVvt",
  "key40": "5UPUKBqFPGS4DdtCPmkkQU7fZ7PdBSEuz3RdvjvAGPXWuVewEvVLBtzre4VrEpHCtniR5bn6Qr9Uy7svHmjq8bbG",
  "key41": "648qj53FkNuXTDydaeF17HoFKMyJU8ZsENAJQQ6y5QgvnPqtpoe7PYsKEYzbAd1nDwsXS5AFg9LF3DdRXXyBRY1a",
  "key42": "MNUKD8u82bjEB5jcpJyu6nWAJ5H65w47nj9641dokYLJU2xiTcqst1eUk7q2pukJrWF79DxZcmAURk6cG8BBHtE",
  "key43": "4saM35UgyQeNw8zCV9Ua87m8sxZjNKMXYMFqQwwGP3ALVGEoghbNcFZKiTFY8eF1zfAGB8uw1bZAJHFXP3brp8FG",
  "key44": "3iYP8kJxC6fyffTG2J4n54JZwYexy9RdvsLiJ8biEAmaAJ46ANthKdV2daVDXq7x4KQZmeyFgdgCcm6dkb43e6BJ",
  "key45": "LFZoxZUtg4YxWDmZYTiSYqmqaD9CGBtoZz46LQTF8SUayzTVRQqqzBF1Dtv2vB3cdV3vCL5CbnfYUktUYZ86i4U",
  "key46": "5YyAVFqrPVvYqT3gYUe7hyPfEsspswtwzsScNYjWs49iCjWo7A1DAZesR1KuVnFPEHTbUCXSZr78b9Uja18VVagm",
  "key47": "u7rnUK5RT99REpTXwVPEuCAzyxCUyEsiwp55fC6V3vTShpFMCTT9XQfe9v5Hfsmq4viyYPpzg6iAzBAZgQwznvJ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
