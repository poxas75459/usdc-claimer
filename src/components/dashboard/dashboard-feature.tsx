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
    "3CqASN5HjXjhRWNWnazobS3QFz7PPrNTqG5WpksG1VRc2coeb9FsYeVPCHsHSsmP5N44rFeJc16nVhx4cxNfRJww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3W6Nq3UXNCqmFLLvJS7ykSeXWJRTk1xwz4kiNMmerUcdjj7bgg6MQkWU5yvNMidhcVemDeRyZjmpS2grkE89H3",
  "key1": "4ixkaKeaAWReNNLU9CiMCppPDfLg17tpMKgR17yzmSMxEdy4NPYRi3dyzbMEGUTsSbEZdpb3fJ9ZGgXmPzJPGa8q",
  "key2": "3aQyb4w2jrZYs9CDyr5gy18rhqGkceG5fCo6k9yhYwSdF2x84gaE7uUv6tHT4ccJ34LoqEascKXwBd6iBiAurnjD",
  "key3": "397UdKYzRr8NL8idfwL9im9mKaNLU2N8eS5z6CfHFX9DJDQbj7yJLYuAqzwWNfGbGpGAKNjng7wZaBvHNkv22VWF",
  "key4": "3v72eAiczUkmTd5ZRcvJJdmYTYT6ca4jov6usvgzfW1p86LJWj4HeJ3KMCcJxfF9XWY4Urtx4MCouAJHKqJskUA",
  "key5": "5Gjc4FRcHhMnDATr1qmZpWAbjaWMVQFWqmvanjcf6SWouhW1xdibXJjEvpGVg1npkRb5yfoEtUxmFEAChX9ayw5b",
  "key6": "4xJeWfGr6d3zY1gRM6CfdT3xaJUtufdP1LtgxVr73dZLeu7NMsbH2Tfo6QWUMVVf7bj4kzfYzpvcwZVP4fQTKsK4",
  "key7": "424uL3rqzEPwoYt8sUmDqDrpR8nZK6BZ4yGzh4kZJrdGCWEc9UuweFo9DWP3jy3L5d2vF3y5DYNmkzmTUbkb1ia2",
  "key8": "3qZjNzfrJRySFjLuZ8LmdUxmds46nGNnakPLjYwharjSoFiBhoCuqfdeRMKuxxd6nX2thWBoLEQ4fvBwu9b29Xnm",
  "key9": "3mkcU3AqVWjTuyyBCGB47tySrdePqUvUtQV8iGZX2HYt9Ky6QHhkQuh7LzPfMo3txYtyTayR3CruMJt73NL1ttyB",
  "key10": "3BEfEhUq48iZ9QWBvpBPbnkU1mcippD2DEuvsNCqMY8gp9XowyomM9ekbXEKL9Saj9ah7deHQwVgdTpggviUb2qt",
  "key11": "3FdSCXXj3wHGnQcq8J3Qg4t4RF5Fi9ccGSsZHvFPDgDzggpqAuVApFrpthUDjfSjC6BGoqAr8NPTLNT6pn8AAPpW",
  "key12": "5CVp52kAhyQrhfPBHspjjpb9WJLEce4XPzsszGaXzc74aPh1oKtdEiUQ5nBN3qMDJDsqqPd6CjTeSY1ojG2vv8xZ",
  "key13": "46Yjh8BSKddn2wXYSM7qBoax5ZEHhqSMEYoXh5KLH79mUiRiRZFBr2ttEESnPfMuqmEyUcipBxghARjnjWXgCYxh",
  "key14": "2Wfjr7TGcGULRRHm1ei4J9gLSLzR2euYFhrRGihbT5sRr1rUz7DZz9DVYqFYbmZGEXJaQh1PuKPgzbrwcnDuKWi5",
  "key15": "5URmEagKWoRwJsMLrXD4RfWPBB9kmuZV95sZrwsMMBiTGK4RUSj8jaicy3ZbM2kJZLCsAL6gwxezn58uUzxRGxPz",
  "key16": "23Wza3P4xDFKBYJrBfbcBXL3vjLTFVPKH84acZSPbhr1UKU5pYNh1GzgY1xLhynduGSEttVipXb14147ebGquCnE",
  "key17": "3eokq8Kim5yYkSoML9s7WjQ5z7BVieY6GCfvWAzovXBTwqgF6c1f6ctiPq9xxkTzCMUXyr38BtRKCUXaNVtuytKL",
  "key18": "2bSYBVVc6ffYvDUt3ki7Ho71Tso1j2L6GX6sfGVQARkPGmtUjgazEUH2z5Xp4ximuMd99GNYUsc9bYzhuxyyTzNV",
  "key19": "35osrCvAtxj4nQnJcgfjaURmb11r5etL5hkjPU7MfBt14EjxAiCxnvo7apHkpdhAcJJx3dx6sgQc8QVip1u7wr8t",
  "key20": "5tArfge6RSRH3dduWp74RUz6W1g4dGQyHD9d9bPmBsd8XCSkK21A1bCpM4FeRzzoykvHjxzMupRntsyMKPKRzizW",
  "key21": "4p13Buf6Tv4L3SQhdTybTRjx73GSPcfwfHBt6ikt43G9xySjHGaj8bznHvQDXhANJECToNRpFo2UHVU2zEEdqut6",
  "key22": "5s93rEPQRfgQpfbPaye2oFF2vPbqGzcQW5zEus5jjFMeMv6ofNcy6bBQp3jpTmmLYFzKCtL92PS2FmhXPJYczbyn",
  "key23": "42o46M4HjBVhRfDNasqmJxgXF8VVzKT2Rprgp3KhDvuhKSDdiLvGa9i9Wyc2eupoxWKRfAJs7uxwftw2GXFC9kN5",
  "key24": "LVV254wCeGUEjCUYXDjT3172u1iR3xEUCPGN4L4jNWEz4fP26kKPFcRfu98Tjkb2xdyL3egGsh4oFgx44Zpv2Dq",
  "key25": "5ovFf4Aky7cxuetQk1tuaPssHxYo5w69aRnd7xPNuS87GkdEtDqbAra3vZDnaPkvUE88a5DgMVAcneqH2HqdMM1U",
  "key26": "4xCpjmNLpLC7XAQ2z7EcCecDNTNL7XFZxqyHtrj4b18v5C6ESuEkM33BmanthHezFDEuQLRC7Mqyjz5UqNNbxhpQ",
  "key27": "4ymU5uPZSbeMZJeCDiVKHczWcNRcJ659TXb38JUqQGF4Jja7kzU8uPeL5v1z1ckkRsTSV2RTQAXjV4btQmyRmbzj",
  "key28": "4TKU2G9XwWCXUfVr6TpvzEAT5cHdyvAieQeGYPgTMmE6qurRYNzHScuASVNwf57Fq6jT4C4yMFoisFd2qavVAZ3R",
  "key29": "5bAkKk623kNefqidSf7YL9VZfF5SdGGnEES73VF7ULdAbSUAtHVkmGto47Cs2Qvq2PzvkpV3QR2os4dxhJuXueYW",
  "key30": "JB2XxZJodsbLQV5KsfdP4DSewmZYmY3ogqAKaCRJywNn4EJjfMd7MKusB7Cyg4CgbnZ9rBvxEi5HTEpBNgkbW8A",
  "key31": "3vRNSMe5rZwNfifBqv6dy6sApp6iryr4PLpzYAduqf6XxVsXBtReVFtag7Ug7L6Zy2jLTieinBJBg8iW9hYMBPG2",
  "key32": "4uDk7WE2ohcuv6DJet1UEB7ENKSyuwzqhz1E4AhhLzP6EjhVi4xBzpzxt6qEGu8qc6FwiaNQsZupwPytytQw1ncV",
  "key33": "48Pdmgcgkr8gtedVfS7go9fxvS5czLPxc4UakM5vEQ2YDQEZHTPMeWCqNJJW88QW8ZrdQBXeEkGT2KVZd2QWXFqW",
  "key34": "3VHwNoS5f4S5nuN43F23AYqSbHA9uMCvEQmDAobN6KcH9o72r1o5Kk65hpeXaMykMUGhGxMTN6cXTMmEsdpaEd41",
  "key35": "5fHGo6Ww8Y76oChXZ5uYcK8MEtUUcRxtFBi1UzxwTXZ27nXEx3VMbMh3RMW8n2pNcZSBeuC5wKwpvJuGmR2NfDVM",
  "key36": "2sQwURxEJLDjKrL7ZnvJ9vGG4vhH8DgyjsNyJAjwY88jyZwPDwhA5pUuQrwkLGQfefa8facPLdQkMj6obWC6PA3u",
  "key37": "4sZYqgyxTZtZTtFgzg3Dq4Ncu19Y57wD1zfiTctGQs9TC8XRVfpRXBkgdRYdpmYSkyFUA1zEMesewk7YA3BQhiak",
  "key38": "2DAkpgE9MwMQRqokGTMPWF6E5sd2SpvLv15waQLZvwSGM4j8PygWsYnFEYwSgM6yXWiL3UryzbhWhiJG7kAJfTHG",
  "key39": "J55sxeFKMGaDB9HmVKE2Byb6yM1UCoRa8tkArdna6HstTPaMUJviiqfxEbTA1ddzwu2Q7kqziB6HXWzo7rEDQ8B",
  "key40": "4GD1dBMYQquVMTkWTYNtRMM8CHwm5P8ubyDQErnvsEnjoVYX53FiCaV3n1eAeaxGJQ44LYBZtRGgqY2j7jgL6Soj",
  "key41": "3pDAcZKcTVsspiymnhKfA3Wcn8PMuGP26baeKEXAbJ9SNUpKmJbMkYqjZ79wRzTJJUWoWctGMNpVJTfh1uuFLr8f",
  "key42": "4WGNtVV35AkcuGZJ6UrqxBXwVQLG5MTkwYAh39NfDNniqaurHsbWseEDFThpDeAoptwCZe4FwWx8CuqmAGeSYtk4",
  "key43": "58wwa8BGyucmMrahMqAGZskaLVvfKYKLznWJFUBsmEqWfeuxDUMHPB82gxDezDSDCAydmKF1DCXGicRnKjXarHqt",
  "key44": "2aJhFUskYeJdtkxmixkizWxP7PtSeGzNzR5S3erGXJ1gAEnkpdYuGV46ffRBWCRuztthdAaTq2HNfmvNAnKpf5X3",
  "key45": "3eRJsH9ovrNm9AAyz2Eqo4m3jAcFCrGZ1ehTHaWukLGzUXwjmKsXG5ZnSfrRgWKDNX6GK3AF5tZL6x9b5ZFcwiJ6",
  "key46": "uvYrEUxJ1nkAXxj53BfFXBmotRxm5Dq54KLFRaJpAu8u37bvRDr9mbuSz2EcjMmsBJN3gQgt9xRJAo4bHdidTKV"
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
