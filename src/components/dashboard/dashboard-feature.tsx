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
    "3Wg3dko7fX8oLETW2oa6FK67xpwktoCMGDakvPGJ2xvvXLbWcuuAnR6Kq81PUXqQ17f9nVBkoKX9UbnMwbhjoVvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PbWWyhso4T8BsYLRacQ4NGzsC1LtWrfhCVr32ZcDrHPFXfSZNZmnN5m2GkFUWkxXSmk8FT5PZk6yZxKKs1GXrL",
  "key1": "59sfLfHNbriSMtVDRj5oykAwHhBeksZDKNLqLLKYXJ6guYh5r3bixZseKU1KAdngUuEtTUjkw4Wcjm7KL57tXJao",
  "key2": "2rQ1DSbuL45LqWcr6q6Xp8P2xRAeUHD2BcQuu3iTdAiRYSuY3tC2LVsqgfgu35bzEgwvL2SDFc1oQFftaxxMVxcF",
  "key3": "3tTM1onmBbjtxnUS6fX7hoorfBD9SYtq84AzZWq3bpDw7GsgRRSKvLbBzqwDKssp3AGGooiSvoC4QApG3YzrG1bQ",
  "key4": "3vebSKZXas6eaEcg73D4ozAz1TqaNYzB3hNe8SdSjJummQ1VUuDpJFdG17ip5tyCGDPYmCPn576w1v7ZzYyP492Z",
  "key5": "2i9bsgAPZAjBnVYrnknNAdcNZKSGZuXxbn5fztS4anYwYfzdAqNHJsfWffNdDSb55y187roL7qbJrCjndx7nJS3v",
  "key6": "2N7QHPTxnoYPxrgYAyqFw8nJrPEUfc1Vy3Ahvb18xYZ2Qmuqv84HzHnkEuiUzqSn6wjwr5BSSTReAsWEgiHTBwKQ",
  "key7": "55mcPmCAyrGMsegmzXfq5osMmBQ8znXii1z7X9LZVktDZR6Ydx4ByXkY8foqU3inb6PiDDiaTaUpo4w1Nt77r3ib",
  "key8": "4QRr1AzKBNu9TArin2ycTnrCn928h78saBxJQgYKo54cQPD6m4hNp99rD9xko5xHFv5ohUKdURf4mnTQEoptcaqG",
  "key9": "4D3cypSgbb6EYUA8xNzhzbyKn2gMCRi7kQzejLxBSf7ULHYzxZ1F6ZQ119vpf7A3iT3BX22k7JofZvaFkArciFCk",
  "key10": "5weCPb9Y963awtG8mv6JA6xCU6hqjKGgJ4dmW82KZi5EQmgXss4ajDNihajzfH2ZeYExbcWqoUQZFd3xWEgHmEC6",
  "key11": "3WcymXa9scvGWxnwHw4bpWYtxLqDq8Grzk9aDBCDchMo97zeybUozzhuJESNwJrQSykZoaZZkQXYjVQhuVa1SXPh",
  "key12": "2eswwAnnm11F41A6yLw4qXvfq98rZcjhxy28fsqwG5vdBtEVLkqfjaWmbfm5ZCJnJD3gutZ7nDoUcpqsFWCWe8cZ",
  "key13": "GmUyLzFr9xrVHfpUSXLx5XXvcRZ74e8y4kRHd5wAdCpjVb6qYJ9JRfof4avDBk8yhJFb5kDQAagdfhNHzNiJ5z1",
  "key14": "41RjULAUcUh7WDSWLW37LR5WZ19MsgJNUnnFcASpBdxakF14hiioPMjYio3sK9xqAfTNun93hwrXXmgem3M5Kr6S",
  "key15": "3XFCENG3w2HkSv3HUUMohARGNnLkNKPx2F1ysgomZwybYgZxuGXLbnd9RNXCe4tkaGaAzymjrNQYuJ75ZrkEiHjV",
  "key16": "5zapwBx37QC9CztJEEsP8ngt8ybeVJXGwGyTKWFrsk5PDb9VE6jSMwjLPKRxH1sRz3zqbE7MGCrRqixBshgAV6Xe",
  "key17": "3LF1STbJxxAxe2b9vsxg7cuQYKr7TvnyrV6N8SfX635CzqABKP2YPa37QwLcgYRdLeTMVw7GGdvarAKBx8oayKTE",
  "key18": "qQiWnA7AG3QFt84EpD4FADq7tFbjU6TnUrM1TVdXcxvB9uF3gEJ2oGWJNAnCyEakRacrqWFUyQLW1n3Wp3Epsoc",
  "key19": "334Rp9ZdmpPqkhxdG8ANKnbnXBtFaPy9pPN5eir5AKC1tD7qsbaLJv79QfX4FaxHNypowDode5rPaSsmYSPhUmdP",
  "key20": "5M2rgagVR3Kb5Mw4kGzvbVxi5wZo4pYx8MVF4dYzoMtg7njaUr9UWwJ8sGqb1MUvLug58AZTnNHM81KgCfC71kWn",
  "key21": "4AhFcjsScY3bFBMjiTuGs9rFgnWFuNVCDpq7C17TYv9CX9u5Nmd8b1iBV77WPMM3QtkGV88oc81BF8dRXX9jZk59",
  "key22": "4Na6Sb1zp19rsNovRzs1izJkB79FysMMKxjoqDBQgabnDAomFZ8eo2yFccG8MHUM8FkMTL5mRPpYyXq8n4CtUtVK",
  "key23": "5crnRx6ieaHC5E13bmCEhzZPv7NULnx2KzUZ6KAyhSvsTN5FUHbMVXVQFY5P34xU87AtFF69p1kf8TdzJZMbKa3h",
  "key24": "zMTXC3FpeHDeJMtUoZeLuwLMYenpsHQSxcWRwcs9vs1KukN9YBaogA2jnQDrc6NJex6MtvNjtqQ6L51XjtH8yVy",
  "key25": "2iv8ynXugEg9p3zDt43FCjWdJnJoKnnYSnvwvSjLz8vLwe7ESocJTcg2igsf4APXT6Sxyqhy1fukHKnmuTdaXiV5",
  "key26": "5DnPi4mj3Qh524pCXRjknXPd1gy4GmvQU45Hhg4AURUvbPP4b13YtEWyavpTwvtiq6iYo3EYi5h3pDmyu2aNJbwd",
  "key27": "2fM7i9u9wB4hoyNk4y2eXMTBD5npryiP8u9eJ9cCR33qbT1Hs1r72Qeq8WhmfPKU2U3SC6CxDgJ9kJcNSQEEChiY",
  "key28": "634BjYB4UnQQZRbn3AikTPVQfyguBwXwZ3Gq33j2wPsnkx42Er2ZbBKJZ7Uhdy5MWWNUJXzZEpzYXMsHemroY2MA",
  "key29": "CiKLn6F14KS96fKHo312iwCRCzA2V4o6BvtQH23HQTh4BHbB2XEyeXchphYLpdohdPPUjnknpnvWwjCKtgTbtVq",
  "key30": "52cSWFzPatwqA4U66h1zEh5FNUFCxzVFMHmdG69krijvVFF1AjRS8RG4bzuQ6iApqjaCayBoBYAGYZ5WywHufJuX",
  "key31": "tyGN48Tj2XPZZLmMrmFaC2usAjL8myJ1Xy2co6JG2LTnn6WZWXVFEpWfwK3WBSpnkdx332A8gWPjzsoRNy8knCr"
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
