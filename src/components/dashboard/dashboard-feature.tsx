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
    "DzSfr4SKkSEpvkHzbdt4vCDsnH9QQHK1Xw7nJcF8VTjT1pQLG3rFsnf7Dui9iRk7LQveX3GMBqNg4jNKxUKsYE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z74tGWw74B5PkQJNhZY4mFysHnHZgAzczgqXGjW9U3BtALco2ftb3Wr9yoDjzvYWB9DbX3hwmTgwGgQiG4Ls7Wm",
  "key1": "2iqTqBmN9LpQQ24rEYV15f3SX6XFjrsR1LfmbkSCt3hNXF4jA9KSMD2ZrkTkwezcS6Ev9PytxakXEawmKdmJ33QG",
  "key2": "27os59DTQoKms4bHeYKQktyuUmnTQrgnXnQoNGFoqz6FekT6Hfq1bDGXQAE3gpuSbg6J4MJ5yF2ckg3dKLZmf9Ub",
  "key3": "4WGTgRXaCyZ2RrVk95HAYBu1vMcgPg2L14WVrpWwvLEhEv3itS6QK7fC4UPDi6Ufehu8bgSUYp8rNuMGPZJyMovq",
  "key4": "5APvQJHyFfFzNWBqsyicwrrsABmjdGh3n8wEKxHyC8NetAHpZN4uSL4aMuCc5dGAAsNoWqysLt1hgg4p3VvwqpEv",
  "key5": "4Qsc6jW3GVypRbTbfkwj8TkFbzdipgHojhmXvS1264ThtBZugFqjDjcPBL1ZcxeeNGr43Jr6aAkFoSYnKwF8cVkj",
  "key6": "647BCHL9FnPFfW8QN9EGR4sdhVWED2i8RACZKA59aVritNHRvFTKb8LgAgCoL5qUb8x8Hfy4tk5E5eyFVKMD3Z8a",
  "key7": "5mWgUSjrzvS4j9hqPLSTHpnETud6YomRxUa3nLtrDmV31rwqK4d5DUvtPmQdRSrHzM1UZs9vLEbBcQgxFr4zMweh",
  "key8": "5mBCFKvSYUDgj1k53pQFRbF3zTgEHdADcWZjUDFyQHF2fMq97wVQiKqvm28jE8zwGKLBpmP8mohNFLQDvWDxenLi",
  "key9": "52BhkysYvRqpwUAmnM6KwTDPR9piYtKVF8iQLpadwKN5AB6msQRcBGiwh3SLSCnmE2Rewtmobi2VxoeXGCGMtGwU",
  "key10": "21C9sJFpUPM7o7wFcLtgY5QhQvdxLkhFJTLr5S4NuuHzDNEoeBiPKeJW58cS1cUjXBcHywW1BYqU4UZoWLarCDNj",
  "key11": "61ce7et9fE3j8oCHyzfSYgQwkazbAhJeQV8xkzXfSeHCHYMLwVJUo7JPZHaRY8qjRm8jGZEpXN1Yienxiygwj7cA",
  "key12": "3sH3eTfujjZmdkN1PSCHiMDSxiD1hs1v97naYA2kT4xvmEbA9e5qteQXc7cjkYMypFQpb4ckspHU1LfU9vLemxdQ",
  "key13": "2qNFK4VwQkhSMiyH6VUw4LiWMvVox6SWnQ5MCMrJJy6Pdo9JdrowuxCKAtSQRoBfugb8mgu4ec5n1YSYuNY6jRPQ",
  "key14": "3evMSixK9p2rjiRZFY9UZZ9X5BdeLtNJBLu3o8npdEFkyvMeo1hHJCABoerMurf62FJc3Qg2gN6SDrjtJEi8JfCu",
  "key15": "3geY28i8bj8ZZYGkzU3F3LxFPATunFpsMytMNN3cETyMhgdeqCBe3CbhJzZdnGuyFfTdDprQS8nhfkp1fxsCieNv",
  "key16": "3VynofBg9VmovdxkywSypUjHBEPg23cznMgDDFwebfhD66eRGfYagRJyTDxotZAsrhGsX7Bd2fCjksom4QooY58N",
  "key17": "3EDzgx4N8MLMvRPHwW3BaKpJu2c4VduE1T9tRtbeCMuNZidvCSum4SqnEHyva841TkLTt3kynXMDrqaah8ZX4gJt",
  "key18": "5hYV1dsqV2yPqHx8SRh1nAvu76aaAsp8JaT2wxrXZBQsiYdsLEQ5Q3kaQPetv9x3xEbuYkmo4xZLvS7LtRJKwJ8r",
  "key19": "3ZH481CB8cA6XHqcba8KT9Qkii4eiTULUF8x7NgikF3BdWcckaBBDkEtZwbck9LohkAyEvKRgfAPsEjM8j3WXTcD",
  "key20": "3X749SRFQ7EQLbbjJW9pJeusFp3C4MihttKPL8SboY6cbwTiwsJifgzWCqHQnGb7WJqguyJtymVBHCRMrPgquMK5",
  "key21": "FMCuZzCVcdgYdp6B6nYowto6MaA34F9nhaESNwZLHC3Ve9pwbR7yfvprj74HMWKchrF1hFsge78pUGcyVicAPCE",
  "key22": "3JipgFQK3g2awULJ654oFgeGDAbFAhySB4rexQMeWtX9dPjYC4U4rcp3RNgb1MayiQvKXTws9nHh54X6JcJs7Dz1",
  "key23": "4BfUHfnn6jvcPJ63bdjGRWtmJz7rP1wM8m7gJUMQmnTtzAApmmc7MCxZVXkBdoro584CWsHL1tbPCPC6i9y4G2va",
  "key24": "3j7nqrzDK4oWi1vN12UptwLiqJvfDmmSRoxZBy9QPbMTBBVWvYk3XGYZkKyh1EbrETQS9Qn8LRxfuT2MBZfa4yE8",
  "key25": "3szMUecCCXzSMV1pRXpDZ2bbHoNa2i3QccTb9GSSNCdurnCR4jLWetCWa24vsFYcnYCES2EXKo3bvTdJA43doDkN",
  "key26": "62yHNXKTreFMALCGtjkZgPfU57UigMD2Ruu4QMsAcpBgxYtemgPAW5QDaoEjvDJH9SiE1GWjKj7EB16oGjZy3E3M",
  "key27": "4GyQHrVJBYTy4gZRYTPH4tQMQYM3BDfjrREcDqkYhAhkN33wiqGTZanr9ZUpNQxZ7KavQFF85tVB391yHjbbJJj6",
  "key28": "4iQr1JWWxbZKDzi2q49WHmqzYC3KLSq1Nuq1B3id78ehp3SNkxfhxoXBYx39LtEWpSxGB1YZX5esxDkmPUoXhgNu",
  "key29": "4AaAZWxm2rJQxqeNmxrMudQUsGBpnx17M2McU7ChLRgrnLnvex4oYqd4JxmLkC9MdwyyBAUNLzDkRPiYNxt8Yn1f",
  "key30": "35EgscmNY4qA5jMGCgN2mrJ3QtpWCzXTfgFz4Ck1dQ8mPPiwzbL5azVToVKAVCDZikJurFtqj4b5hY7CPW2FnMwV",
  "key31": "5h6fb7FNHFN6WAuNiPyk1LwYzE341UEAoGfS5oeWYgVRzSgif19bbdfY3FbQDktj7qHGSBmt7Cf6uo21T4iGujpy",
  "key32": "4cpQf4ffSFA9PmBZoyjvcuiVD7WmuRnfkWM9isiVaaZ4heWFTKx5NgNHNk6Fv29rcR9ooQqVRaTLyrN7Qhu1wixZ",
  "key33": "2tyDqC6TTeJ5iq8GYADhvUsskX3hLxD8kKrGG1L5TiK2BMcX1sb2yEmhdpy1LEr9ncnPzZwiWTt5y1csroHEvmCJ",
  "key34": "RkWS38hz8SWFX8gJS4S5hy9dKpp4KQjjsMmANtNrhnrjnXXJLbcF6B3R1vULaQWmMS4fAz93T4vMnZNQUrVV4qU",
  "key35": "5TfJbv82FynaEtxgb9okSabR9vRfqPF4HasbnQB3wD3G8kBU46FfXEFiSibdAaEYrtyPxE7kkYCLQwUBgXdTMN7n",
  "key36": "V1v43V2wkC6LwQqwAyiGt2vXfY1kiZc32B279nbELMTzzNmh5NJQtYpaTfiAkFK2HofBvtSr19kFvrTQTecLWnt"
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
