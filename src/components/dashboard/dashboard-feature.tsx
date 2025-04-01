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
    "4WFxPAzd4vYqV5M9JBfJBNsA6p5Mmy1YHgYp5hPT7TRYMeFzNcX3T49yxbLkLNEynGf36tqwCu7e6iqRDYZEXAxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7HhqUNqY6dp7en1pSTVd4ejuyQ7RpcB7zNpvL6QmC9Z4Abz11HyXPDMZ8m6Xri7P12bULrheaSmjDAMW71UvnS",
  "key1": "5ac8xbJhbFojYPdTQaoyaVLsUTex3X5fRkJqjighttMRTKDTqsvhVJLyiYRxAwAmGFkotqUjhW6LmBszAQf6DDXT",
  "key2": "5HLFW8JJrarzV7EVdtEa62F4RfQEMsvXypWpCs6rqFDjKpWXzGWDrisBkxRqVwYAqbXYEGcmTCHogUNKAYaLwTjC",
  "key3": "a2gLyvKexrGNPHFWmoNqrSQAVnzX6kUEdeMkY74eQRLphCv4BSnWbNtoSJgkq482f64xBfPtBkfUBnofZNBG46u",
  "key4": "3k1ycoVER22Xmnfa4sDtgYr8vkJd3kzxTc6KrZtCezGzBSi1RANnGHNE7w3M6UWmSGUZQkTEXCiZkUJu8nGmfbJi",
  "key5": "rbnCWvte16GyVZr2bKb1cyz6REnsDX5YGEebQ1KrUbcrxyHk64eDU672wi6EuXRhQxQKgt9vRWzpUwBFLiRe1vJ",
  "key6": "cz9LmTrhTTpFdifCTL9TfRFZzWkgyqPtmA6pUq6Vye1whUA4UqZ3fcKETwfnLLXwkcqiMWDj9NTHmPJwX1hfwKB",
  "key7": "5zJ6yeA6bQzJVvvXu2nJBufdWV4MrycM5kWtXWvYk3XCd3qPVESsJT1wDGTzk7YA3C5Bgo3yPkp7XrJucA3RNYWE",
  "key8": "4oVTGWd1wTgxxrV3fNdgUYqHaQ7h5jAH4RTRD3bRJ22gUbHrnrLxqpr8kvJxTw9HyUCE7jyCq9B4axas4ejaZFR2",
  "key9": "2gd3dUVoUURyioEjPL9Wdch1trR2eQh24vsjwPc8W5NVEEXvV29tQouKrCs6UPR9YMxyqvsjAeAZKqeKtfM1pRt1",
  "key10": "5G8PB9R9WCQ37xJy3QVB7SJGMepqerT6Pnm3zBuSc1xYm6Rs7RNqYRp9AEyUeKYe6Z4vsHJAcUTvpA3sSfkkWuTP",
  "key11": "5CqDGNY6wnqVg75pm5Fq9JPjC318GjmtERzqVjQTHnV6pHuTzhxtEcm2R3zuqWfYEXxVfpoeJuEcfevAt9Aeukz9",
  "key12": "3snHW8rAbEKXMCratRWbdczircTZpNypbzqpZUmeCt1hN762FSe8m6XB6Zpdsn1Mszy51JNud9ZXjyTAL8Qy9zBM",
  "key13": "4M1Xwsac8kJ9juEV8SbCTSKJgxoWqx4UH8odsk3tk4KEiRmeDePYJqanA8ZqUZaYZWaC9V6rMpmqfHWmVAyBXL4C",
  "key14": "25fRFnsB1r25YgYrMoF6WV3aaaFBV4u1oJqPREkwSR9YisfysiLQUnx7F5BBAPUxeKr2FBCnx7QKE9MGoEqWf1VV",
  "key15": "52dUA4VtysT3QjkEukaKPwoLdPSKrspxbSBgjMFSKRk2P2VBTaVjdqY7PxR9xZSkNXugTtJSUY5mxgCN2kEg2oZ3",
  "key16": "4xjHtLMEcvLdxsckaK9GRqFc2tPWqN1bt7Qjbvd4HCdR9gpTiii4jwUtQJ2QBs6R4hJfDnkjkhpFUbaLFhr5Z4qU",
  "key17": "65YzFwZq4ivNHuEyQGLDvhBy4vDNmtn1DhcHzVmc9gwcxqAC7as5Ya6HC9afESv6TFQQ4qMyfEDxtqbJ9nFMFVXF",
  "key18": "5xAKm41h8FatcHEW3W8rRq2XRBTwCnnyoiTNebg8t6GEfs9j7188H4B3KBsLBXCmNouvbrc9NjPNYQJ1VS7hiR76",
  "key19": "3B488gfHuX72bKJxryvt3T123NiXbs24Btfmrb3sQowKBvUFiR59FehmVcsGuahubHTaX7dhC4raswy8hhjmwXQg",
  "key20": "5zwv5Euf6nfC5dt1suXTZy5NCq3VMADZ1t5K1zyxirHyhR6Q9iAxeU7LfHLBAPVU3f1BimrYW8qsC8oWQyBPpie4",
  "key21": "516ppdZSKvjAb2yCP3963GYzQCsFyxwdCXHPp2vRxo3p9KWZyiwZQi6kU3PQKzPjTgzBQapzgHV6b5RUHQuUMrhJ",
  "key22": "1eJEKjYa2F5etT12RnEz2AeftXuhDsit2ryf2mxs6actveiTe6qyu8bA4mo3hB86CUXPWR1fY8AaXe1maVkALqj",
  "key23": "5rwvBgzc2d3zPC7nDWviscy3VC5oy4oi17GrCEdoYAQ2tH7Uj39zdqSqv5RAZyf6YjhDQofWtYqWrcxScjwxox3o",
  "key24": "SgeUZ67f2Dtv8rdewzJUyDEChqVFwac3cgUznagjLD6AEHD95inE68GFqS8TLmwVtUaxYDyEQS6L8xgurHmfo3H",
  "key25": "468LTzUYSxaA9C49HbwwCeL5b2VNJYJrBQd8smn6y4AwjyjWKst5mnS35qshDyXp4PFJWy2Nwt1nbZBeYWDXgAzF",
  "key26": "4p1Do9bbwL2LEJZYqticzQW34Ax2ackz7xuPeQZGHZK2X5TfbxUq51DNux9AkgixgYa98rjirN5xkALuUPaMJctv",
  "key27": "5DJLUZo6gynp7kCkKP782nYvbzj4Cb9fi3UFXpZNwmfTScZRyT9eRS4SdNNM7iuYPS1yHpLWVtjVcvZeARpq7bbs",
  "key28": "41jmAAS73gCMmsu7LammdEkfBP6wDFEG6UzfCYbNSJXf3x8RTjfWf32V46oBToLD9PzrCyotmJK9jLq95q6DbWSQ",
  "key29": "5urS7utzXEPfQP2Qtz7yPipcZ7NCwFBqQekk5KDFb9bPZgmCqA33ueyyWhMMZ6bnxCMZGuPuR99ZMrp6JcBnTKSJ",
  "key30": "5hzuXVCuDYAUWQq91jLJGgEGNye14cFGEXzMyVpWDZwULFxYBkRVSV2AKkHwxArGzQUCW2QhMoXsqNiqbAcWh73X",
  "key31": "2J55GJx2Ed8hPt8B8GhnKKQiEA9JJEznH4KpiKdqo4cmez63ZdDPbj3hykjrtRVbmoh73ytxjTrRPbbUKZe7zsri",
  "key32": "29Kj9XZczUumhf7hykyLUdYtArpRZNyex4ycjK7i9zqwaLs1CT5jQz4nJGKHBAm9n3yF2GC3QiFX7SMW1yCus7Cq",
  "key33": "3CbJJXoptXgXWFQ2pwWmNPw4GR5Gi56qpadnuGH4g85YDFDtuyeZF95exJgshWTcgtDHj8p72UMBFLr5W1c3Hzyv",
  "key34": "k5Jh4LDSmoQqr1CzPeUHQihwQaWWdsFH4diqBJGatgr17vPiPokdPiFaXFXqMH9wofz5imdt5sLdwxbm6GDKCSu",
  "key35": "5XbVwaVmf7Zwb26sw66ubyiETZi7TG72emvQRKg4Wwinkt3mo1kJrfPqpEjcW4rH1ha66iPAB9AiTdQcYf9gsKk2",
  "key36": "2ckf1KzLa1YgSEMSv6ibsYqR95h9W7GCUhJC2B5wGwtEvM169FHUQsNdUaJdVeMSGW1Qo1je9V7248Sb6LsAiyAR",
  "key37": "418S7JyM1zA7F7eKFv29jAZSH5sgd1d1CvGRaPWcb6ZzSxrLKNJhTQNT1mvnwMjmLKBB6bXo2UtZhhyKo2LRE8tX",
  "key38": "28PxAgms3jAkA4z3ZDc8qoiGAepZ8wEdQypNtG815oTkXce4xgEomqQzCTMiPv4efVhSMvNDWWaiffWhyogy5Yck",
  "key39": "395psuWaDycF2VJoddCvX6RbGpdTD5iqggiLp2ftBT44CtS8AnivngRu8dQGypQCzZDsnpUjMX4ahPgQvRQJgubG",
  "key40": "5fdjR2DxMyLq1YNMtUG7ptWAUYva7Y2E5PuNsByjajoeV4CKXEPmEyGJckB2fvL4GHSHwQvZdCexicqbYPL1kvt8",
  "key41": "3AywM9UBjWGPGRiNV9G8C5NnCoqsGaSePMobEXjPZ8eH567Am2givcaqEpuv6nj3hK7LgMhRayeAdhpkpwzRrted",
  "key42": "2mxhsWhzam1fR9RWY8EMnBDqHGEciCbveRPHLpKi78y4oDk6vU1BXAUqvtYyQDhVDgp5cmtjwAA8kW61NdvLFq7F",
  "key43": "39UyByvcvY4ZDG7FjzMQLLSXbaasatAjkCW1docrx3ZJD1MgAEnnHwz3PZsr5JYT17vF749CrVY6YYNsBn3g6XiB",
  "key44": "2m3t13kJVeb9QwtxQGxNFAAbP2fdAezswH7XDSsnqXVbj8ctRfS1zfvpxrRnEeSVMUiSrtGBRCkDoUBCCMJDW9Gv"
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
