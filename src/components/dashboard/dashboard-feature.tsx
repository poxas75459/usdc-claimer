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
    "5h2g1Dy7b1rn2rXmEjJwZmz48m2S8vAK9jQ3avWqWGDj5BbnY86HvSkLyhu7FTrLCD7GtwPviNXyjbw8c9DqXJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SiamF1zvxRzuaswmnW1ZDLo3pL4hVdSRPmGL2p3ufGygRa9CXq1j6Yeh7ueZxS6k3JQFYTTspjQ7LHHdTW2HCiD",
  "key1": "5VcyyVvhEgVqeVwqYANnhY1RfCfpfWLHmma9vNc9TCRUeY55qcraY7mszRsXktDBbdKjJEvmXBoCTY7pRriPFFNQ",
  "key2": "4zKApmAnJHLUcjpNmxEDXjFzVuUw3KZYjXSA2bRLnKMR58BZa8YybxJm2p1Nb56rSM23ZKxydr6EbbVWZTYtMnhi",
  "key3": "Jrrkxx72h8qbpEyxm6BsFiuibJD7fbRsBxxAgDFBmm3xh2aeBzPhq4aDNfk4wtjQa7YXLbCfQ1ZXKii5znzHBxD",
  "key4": "3UEmgbLhqsS5hbghTGqTMbKagqTiApRpJJQPhYFbQ5PJ1X8ZtjJXvZrW31Q1WAN43opz7L6SsEDnGhGjNZs8RnJH",
  "key5": "5cxJzGCoJxYZvmKrCv8LKjMctMaWEet4jTgmzvFDSnWALuETBzfdKxy4wwLF6tsCcuQzWMCe3FxyERH54BHqdh45",
  "key6": "3eu5CF53ZfMzwBdFGDHJhECatxjVspiahZW79WfR7bEm1ftChPkjcN2BTPYgJVsSFrPJqiWZFUXypD1ysocKkXa7",
  "key7": "2TzrcifRhG8646ZfGDZ19yGGbeVXxmqYwcSijJWDF1xYXfXrTdai2MDMLfyYaVVdse1Dneykam1whaVZ4pbgzmsc",
  "key8": "47xXeSHLGWcBHnKkZfuCGLhfnk192ZXQxYvdxewmVkArA1wzqLfmqw64hiBQvuqG7nhfpNyNKEnoH3BCQUscarPZ",
  "key9": "2EG272kW97SZNVvYyDa2P7YVL6MbFuNSpzkjjGDyw1MUGq1kbtJFXuhFr2GQrkfAmQRZgZZJ8dQ8f6XPqbEYZtJR",
  "key10": "5f8LpVGir1Yz9hLRd6G6VVwaGwYzwjh7DVBArP3usiw4TMzPWud7pQNkJQVsKCH2tvb5pFZ7LGnbKWruemmAsWJA",
  "key11": "3S5UJUhGxpSVmhA88d29gEYuAaqRm652UFxVu1bJPgd5HP6Q5oPaVc6CJzG8prCxYuPDbR1er6H8zPqijmpDrVz5",
  "key12": "23jRe9FoHYT1QtRjcVjMtdY795aqhBepau79SeAhAewvSrjjsZCdZ1fs2vPHEwH2rGBAD7Xhq8bysEH3ibcoqCqC",
  "key13": "4enuKYympaKVw8KTkcphny4Sgt4Ei2DQeDhJJ21jBt44rKPypDzDECsdjy7uTzJQBCCTZF5mCJRL4tP8PKzFgDW6",
  "key14": "2Q1iTyXzcRHYkhGEZQCKQiuR1bGG9yTbZEVFmJR7kBhY8T5DGfi6wmnGuPFK1exuygn78psk73iAaAJaDuyK8qUB",
  "key15": "3kGcqQoHaaEgZVQ9vDkCcRKYEpee6eU84jpQyQxDPmCzH3QbcJnVAqAPqsdwguP5MSmc5yMpMuUxzKGxLn5PYqed",
  "key16": "5dYaJPXsfJ2iiYCpoJiB7As8zVifMxip2oNddvx6btWJwvmKyVXnVTApo3EhDEWDDZf2F2B1tL7VXjkDL4TPFP58",
  "key17": "4JgYdGx8GBYLhsaCmzQzeFJuTt1hXQmseSC78cMY1kpGVPEZfieAaCQJmbSHjmCdKYJ1DTUTyMvHjfeTSay3d8kC",
  "key18": "4MoxDoTmf6WqLJxg2XfKDq7JjB5VgDcEYcur8G8a5ovcBx9nDDAi8SKFhVyDeoKvs15US9bWDQgVC5by83BUrAMW",
  "key19": "DAwfrRc69NFrmMYeDouso3eHvSdorWa2a2v6m4k9nK35F7Ns2osBkTqms1Zgs8i4hGwEtjTCd7HZoiH9FjdRuYd",
  "key20": "3W7KFGDi3RFTLAPFTVicaS8fHuzM8B1CLsY8EMYHFT8yDtddSA7g9MGeYSMTMtH5gBazkevmFf8gV8xXZroHrzhc",
  "key21": "2p3qgn67Zpi5r6fLX3Ke92vcCfJFuuHnVNNXFzEE829eHqA51dNHWoHM2pnrEiH12JaBCNQFLwXNS4kRaqAVHVLk",
  "key22": "3DUt8KMMhKTzacf5rE28uw3Xt8zQqyRjhtcwEPsByucw8WXni6NKmaUL55YftsrHyR6fS6u1LS2uZ5Q7HHCCxnr2",
  "key23": "2B2do67CRyido4qzfipMWcx95pYdi9afBpuWgHWFjutJJumyTjSaPxw9NGBUxtDWxXaxVHoAWCxiYA1dTR5cEVpY",
  "key24": "61ekJzEbAfDQDx7KWgcq193hdH6Mw8kutjCEDXvT1LwXjuhgGNbe78D6gU3xeeQi54D8GzrLLnUSZ6CqeB1TkMsV",
  "key25": "4kHzLdMPT49TJBt1QiHjFpxWUxKE1jXzkAcGa4uRVSbAvMw8HhvyPfBfLXknkLkGPbsj4hQssHSDuZAE8JC8NToD",
  "key26": "4gwcJciXFvLjEx79e2B9wTxLxJkBqGQRt8MgDzmTGR2VkFaSfpsff51ct4yT4y3J93uQmoA47DNDctUkVKirCytb",
  "key27": "3hNw1wjoK9D4bxyuv4SzwLthWgceaxmDa4aoMMG6MwLb288BvLy6UZiKxkVnE8SZtToPGoV9bq2XzygCAFrTV61s",
  "key28": "sZkidskTS4qBCZj9h2QnmYjv2AWeBBPgiNDzjqMfs54TcZoY2jXKR7wWxzRo1CEwomDTRaHxMBpsaKdLLHH4PaR",
  "key29": "C7rBPAjAQZH5gCdUoQfwUz8Bz4iWxPnJduYNqq8K9a6Ck7wawo1DKaSNLoDXgUpsTvAicWi1KjhTwAg5tWBcdgD",
  "key30": "3B5YJQRvtssoCjJUDmTZ7kct2UpxzPms8FAusTKpBc2boAPSbuDQJJzCvrawuKnUVxVdGKCehxvghREZo1rTqZp4",
  "key31": "3cj7YPLmuWGfbdCfZBr7qxDQKrJMcP7f654xNAWcixpXcdXk3psJLN3JgqUseZYT9J88yoeMnfF2gZDRss84EQ5S",
  "key32": "2KL28zdQ2hpdJoXYGCLxa8MM4Pf4qMKJmdW4PvCxA7XQAKZHXDAEFFQQLjm5Hx9wajR99UuYqgvof5iviLmMm8Pk",
  "key33": "5bFMhG6ugyNAGCJDGo2Pxe2728ALe62fnaxvUZ1o2PAqzrZyWUqwBsLRpdXyKSqnmtjbsMcAHvRKhW4TK4wAUnkL",
  "key34": "58X2vjokXhGrTzBztrKaL1n83kcpHTgA7V2Yg4X9tL7kgWuYC5T3WrNFS2vQsycbz8Sjn5ST7mioVPTBNX1qBVvd",
  "key35": "2WHPbhNMnxsxGPP8TWJtjcnXCBSYLDVX37Z1ZNLyZZYAHJvCZZb4tymm66ufPmyT3VJDts99A1BvWUjJUSUf32go",
  "key36": "2oXNVmy4FutU8FpGRrgr8J4wtFWNR2WYVNosn36ScpmBsferJDzJby4CFgBpF3cVLHGVFV2XWm63BQfLyhBaYspU",
  "key37": "4N7xsCsqp9MB89H8Brug4YedeSLzPTYHrU9rBtRt6swBJKSXMDoWx5shDcreyWK1j7i6YZ3L1e9yX8Y1F9eNtKBm",
  "key38": "5LoPDh8MKnZdDLT7B1iNcTjDAUmeiUKFGVGgt86d5i1kKUcC1bVMXSoWoYsRLQmYPf9K97KHYJGzbkHtZvvtbaFj",
  "key39": "3sgzPsRaRGDsVm1hncdXSHHVTVzBqiLtmsGNziFnAkDsFY5CSXKjemzmUUoCez7A8Z87SrT7K8HQsiV3KLteKuZk",
  "key40": "XAk2GkNvSkGL5y1jSpAtJcLxwh7LCQG6QbgKD147eDawg6VMn3n8JanBev9ZV2FCsnfRZce5ctQs43Tr3Jv8cTF",
  "key41": "5wwffTEX2qtR5Jp8mXCTLKUVxx7ZnFszWTDDvM79uZGyxhATzVvibBh6vmHeHtMiYgdBp4hHRKnJtkZAknvNgW4q",
  "key42": "4hR9SXEk36tZurpWHosJsUURKrqPU6rfVvstaMBkGzdMumqCpwwekWbAnEHMFLwHcBvfdeCLciduH3LERXSV6tir",
  "key43": "43WmAX1wNVfUn7tN6BRx2xbtYCqMiEFCTKzfWZ4CcYEbbebbhyPF9d9Ydm7jiE5DVLP4wHF7nnjbxNdXqpGEy6Ht",
  "key44": "3U6YxeKdT19VuEaEreMq958XfLRhcXrGYjA6Ly22m3rmfLt4ydDdk3VzxchAtPYWBxddmTR7Y5f6aj75e37bPkee",
  "key45": "5eWYnzmp18Ti7v7FTBodBZEscBYf5eFd31iPdfopTkZqKgwnohW1tdHJ6hDJCWEV3NfcSQa4BrBtKkr59JG2muxo",
  "key46": "66BoeCgE9hMkQGSzjjwGXJWMVfUXYRZmMSmvQ1DQsRw1SDaUZeBGbcrgQw7vcAiWJ4DGzPdjx4SDz8EvyGGm3cYu"
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
