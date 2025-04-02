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
    "4LMG6ijgNDeVGYzYo5gHbTDPaqVwmQMvqMpwCRuG9x7HiFw19UU18XmmjJUY95k6tbs6Rv6iRSgkZqJ39dNi6iSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mbRq1s3H4a5QJXNhhx5Wz6PAuBUEcX1f8hQfhk6VCwv1fv5w4YaWyn8Cqd9Vmmrdkgg4DkqWzBgbFKAUe1XieJo",
  "key1": "2ni9JDmMPg1QufZGrGgM8NJ2Z3JAgov4anYK8aJRWCKzeFy6g7ZSdg1685T4tRtc3WpCbKCMxDuoY6CswotywLWV",
  "key2": "2LXpvQvuqQAcrG4Fqm3kwseTeUBggPGbC4VjTCX9iGj62sXRGTNL7KkUiWQ6Ng4HkaXw7jPgN37UQysiyt9wAgYh",
  "key3": "32V77n5oRgQDaA5o3NnWPZuZtqyqA6qh2J5HjNRbiAN7rWcaQnEYXSUFFg9wx7faGko9AJq2F4fpKA7q6p1j5f4d",
  "key4": "6V6xnrUjsRKfsPJuVBbi4zvNZaiR8M62nHBgtrqTdSGbwduxHmYPvzip2Nsp43HskZCZ1piVi4WANbjxeitzwTE",
  "key5": "21sdKHR6YKVHDS9PbZpW67c6EZkmE3P2c1Ac48xBXsVAQ1ZtZ51w2YCWnLHEv7enE98DYFNJMPpi3y3bTrsXaCy5",
  "key6": "3b181deq2KJBg8yWUUiXKiz8reSSBrk5RPWy9hXvyEuwGeRhNcnDX5EXLQevwyChPgn2cU6JNLRT3cqJLSDgThhe",
  "key7": "2PxUhMVNRfWL75amiYG4NjEWyhFZNsoyebyDDtmH91xnn1VFowgr4sGxs285HrQpPrCdrj73NQPXvquLZVDTdSbf",
  "key8": "4tWRjU49D3CtwntbpiMJYpiJnmgR5bQPHgiGz8CZ7cXrjrdoBGsirhou1AKa3j49UQFjFSr1GPmk3NvccTsisWbj",
  "key9": "2C8q3pNev2nMQGtF2pdSvrgn2RyeCPEUczzfRACFdhi5tiqmsEbep2M1B8zLZX4bqtaEjAPZK3c1SxxrFyHexZ3M",
  "key10": "2EocboU5JxKu9YH2RWKe6dqkQF9TMrxvAYS1Ui3TxCu3bLkPQhoPNbhNbaMQNHFH97rhHb1mEfBG7N5QNrFc8UvD",
  "key11": "3Xm28LLBn1hNe6hgE9axbzi1VzK5GKjRnSbaneo55dgz7LqJAa1zQ5cG2xDkDkvcMoCXDZbo1H9usu7HzpLaEYiz",
  "key12": "TTFVwLaSq2WpuanJHeofqS4YMWtKq4tsEQPU4iLbFjkxdk1AvUzaNs1BCygojMMyUkt3zLC3axyeDRD41QPotmV",
  "key13": "3H6SVn31KvARqP6RRcjqrQPvCLQJwTn4quMW2DoHEdmjpmv7XYYxQ3P1d9idHYYTq93Gd8h15CE4T5itxGZTy9dC",
  "key14": "663J8vNsfT3ojP3D4G7CHCCbztoawd9VDijfv76g5KyPaZ2FERXHUdiGBS2DMx326mxsUrBxgxoueoh9Wp8rmqv7",
  "key15": "4Ra5jkEHXaWWJ5YJx86mMps9fHH2wYch469uWYzc7HLePfdKsuAcDpaVR6163JgS1Z3qHuoeNKXR4ZtTMGDB8zux",
  "key16": "s8bmPVKJBpYW8GTCjfFFQeoM4W8WuYJCaXW9SR3xEFVEGM1cgxyNvwmYPkfZe3NfFXBTZmBPBEZePdtp5Y64rKG",
  "key17": "5PQ8NksbTaszNEeASYXqByKbyBFQuDV1KVcPJSt55ASMFvDdmbckBSFtLDNY2tJtoxuPRN8ENfNoaw21cbDiE2Zj",
  "key18": "57JAwv4JbV8jTRC35dXTkS3JtHC4meQBKG73TRpJtApKYdi7KsYDngKQc5BeHvtM9Cecj1vTnd853nfaak2NHYbW",
  "key19": "oVeT8b13kZhBmXV7gsmPAyRXjzZJ5sFeuurkqNkkGctn9kaAdEFySvQpsDF3wj2g6yUgxKJTXuP3RU4yqMqT7Xm",
  "key20": "29sPEjrzc2baJogzmjpPRnHHkwEHNKBJZvETs8U7L44yUednDZrVLRViad5ChD4imA3xNzMZkCgtXaTquiDHtzuG",
  "key21": "31giFuAyYDeNKAGpmrdtTYscQTuSzz5SmXRfRF5293EcBoj2w2hu9wo7hiaMCX2ftXFHHgDHEEfg8QuXeuem3VE9",
  "key22": "5ciiJRTAvkUtuRGnru9PyNfuE6XUnJdrSbuhQ8yWqbkiyWu2tGscRwkk5BbVz6bx7scpJjtfwWRhSvdGHyDh5e81",
  "key23": "4vui3oX2XVJnqsK1bHrvGS2FBAcpHWM7KnHT97GLaeFRnfDjGEXp5GxDQGXosLc1Y6aERvsNQSCTra5C2aRny1ZB",
  "key24": "5v33yFkcNZE4Gmb6ttFyJyiTR2XSYSSujcK9ez6QxoCTwFvHg27AosefEnnywyPLjmSoNiNFPMDTFrBZf6Hume3s",
  "key25": "4MUBZmXUPHBcTT9wnYZEcCuRNK8eybmnNanBBA5XAxd2ZFzouqmb3mJT85NeYuUtTUV9xEJhi59CnEFLZdq5WdoP",
  "key26": "pa9w93H35FRTYdc3dUquorK742dcqPeRqVG1rD7xeLgxdtCWyhDDJaC5dduSuuBxKP9NUYEJhdQDmUJdjTRY7bw",
  "key27": "5jHaFnTyTUTut85e2ejbCCZyLEtSQEGdtZCMDv1YQzwoBmY4HPhojtqeMgMTbj4oEHDW87GyFnoWaL5yndcZTsQK",
  "key28": "5nBqo7BnC4VdQ7yPBgEL8oXWgEsqE5Uv4gCbeU5MKDrEchaMJMRCPC4W9SdhWjQiJ5CAxyJSCNPYm52dNFW1w2FF",
  "key29": "2sfMy2nbRPyEQi7BCvBLLBimj1h5D8ScquR6U9ryUmG6Pkz6Wr74gaVGwuJUEM47fSRnsqXPYYVuz2ciHNx4jjRf",
  "key30": "4RahogK4mTkjR24wGATkno4T2b1sUypUDA7FticwVXvEftwSAQKu9ynNB8M62prUcBfNdSRkmZbySUoCNaNRjqhR",
  "key31": "L3si1odcwu8gmcwjL7u8xzfJQJ95b4YnSSvuXrZUMBFGCwYhFf2DLdELvZbj4bA7jYaSX5NFEnsZVCyrVVzVKUm",
  "key32": "3M3NRRcmETdZ7jnJfbEvFtojUxvf5zqfDmgV17Dab5Spp4NGskRBwzQ2BxpK5pCZ8B94AirwpqbvECNvN41qzvTE",
  "key33": "45kbCdUFWUQGesgLW9RVHYLYXaaKoK85expAJ3zez86wQHK2WP9SPGiHE949o8QxjCkoKTNaB3fBvSab7eJdNani",
  "key34": "67jCL39sQtJMCgzL34w9CB3EqWypUfpey1V7ftYzt1umDjVjQUYwGttBh5yXKGSYukggbmS1W31etESmX96ZieXL",
  "key35": "kxssjmPD9brtqiDQUwTVj1QwLtLkD1QYSqFDxJy1Et8y6eNiXkm8WpAUpUrUKGfu7nLnGjD1iPThxUmYmkv4QhC",
  "key36": "34uG8aiVQZhVTSy3nQfRJ8rvNaYYMPAZuCQENUhhfHshhGPa3magHmjaXHVwh3xKkP4BXCa2rWNc6QgzorgDuBxs",
  "key37": "TbyjYhGDbCMH5wVFLYW3hyrXcEdV2pMQwwNodNvuCzjN5ukDUQRAeC4o4dk92j61gmn5xNkvfmEriufH7WbWjJs",
  "key38": "4TZ857QsYg9kWHfMpmsEQZoa4yGHnqYjWt8qtQXYyxtWy4xttJkPMPzZG6iJ3ynwSgGEib53BfASMvbQ8jGBK74V",
  "key39": "628vqWx5VgfkZJMFWMBWfdongQoShhoWqBHnAaW7RX8inmpZFMBquTcQX1jmYY8TCA7EyJ7GniztJ4ZBrPMGTrgK",
  "key40": "4jyrvmXvyZopB6PstVjKX4h8SRkkfHkxb4mP44BsehUZJBSZmPx4sQD1sP5v52QUF469T2PNn3AspzWQK8X4k6v3",
  "key41": "6HnqcwakVeV1MXWv2e9S2zZu61Gx2rgNj2f4MM9geWyTy2Khb6oy4268B23ZkcGzSLEoDBXdT1Wxcb4vyeJQXVF",
  "key42": "3pC7XnmrQFiNAqnZ9h3aXQu1dXbFRvgLLDGG56puFufCf7Gg8FNNAQj1JXbGd6d6RPcFHA3Fg1SV5Lh2G8HuxVD5",
  "key43": "5mFmgSyt1nMpXgrZSxj3gHANPuiXjv2fAVeatyckYDSLWg28ChYPuVB1jv7zRyexPBhJBR9M9Xm8TQ5wZu32sZhc"
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
