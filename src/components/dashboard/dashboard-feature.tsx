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
    "5fyK3AjaofyEdPsLnURNiJwMKAcGCJFHKpk5mKgorkyNU6V16Zx14pdWy9qxSPRv9kXa4jxD14eAMRZo77Y5MhTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZqXS1eyu5HjRKc67dLcgyv1TwgzWdioFvvqvVZYP2H21AgsrCWUh4ePuqEM6z72sxwP7XsqfTLAiJ3CC4CnUPqr",
  "key1": "62PEkeiVx2bCPZSAKkzHywJyeh7dDKpb5KktdRtiLS5kR1v6V5jaHEMsV9GgFewRednvbW2rdxfbZ7mv3EFnsPjn",
  "key2": "2enDGb9xGRtkhX6goTpfV5en5stcKqMKC1LFuYkamKedSiTFHBeanhxXzPLDnuq7WHZXRWYSbG32ZZZ93wBQDL8n",
  "key3": "4JKRexHnVHQnVZuPHe2bc9LgMf3AXHrwrdmFyLxxbyzsR5i8Mqk4r9EeorAeL6whJkUs5TpWtYQ3FcotPJpPt6TW",
  "key4": "2fYGjMwznDqZLyWt68eEgyd4RAXksGhsSJvhYgYUeM7Viz9dKj3xWUumMcrh237pQFqx9UoAtt21tEjZPGA1VNvK",
  "key5": "4kMon4Krrb6z8VPzraWu7bSkGwrdHv3FcMh9ueC72NsM39w7hCKmvruj14ctvmwZA29EENXEtfYZDN5uyQyb7731",
  "key6": "4GFhanqUk3tP8GG3ijArqvHjt6ovZueW6MNtderDoWtxw9oAvmNm2HEoeWbNFwjq6FMFL9PsbohKM3CpJ4oUfptL",
  "key7": "CGVsSNSJhT3mJNo5DXJdS5iciNMaQseBZJCHsxsNvvnBakY5rWYsuLMgP3WycrraYmYjiyxQWtfK7DBVXXKX6pq",
  "key8": "44q9wNTuwQgNkhhSsdpRPb7gyEPnQnW19V8hVq966t5mrym5GGo5a6u5pHm338SQiAzG8foVs9AAu86FkCbfXcvf",
  "key9": "3KXXsUqTX5DAYXM89e1cJEqtQBkXtfe3HhsmnAM3rDAduS1aRfQ2jwCKGrnADPkAn6fUdqnN36z1WS7mVzRcMVxK",
  "key10": "46qaDYW7a3XLnwaVGaZur98UnmJUKYdRHsmrJaehp81G7zJLzq4DBXDStGShETuqUTUvY9Y2oxTGnSfwYyQZ5ECh",
  "key11": "R1rsC8u2zLRcTRMbFKA576ZaKRNGVfZ6MZg4r5hUv9RrL3K6Wus6cS4QsFPmYrZNPxyYxTs4ujktU78MmZqP7s7",
  "key12": "59wDJJCtCkLuR73bjQgLFPR8pop6smhumKXaRqi2vM4Pn3aWZbBnta3nYkvSQsrzfCkHALkV1R8iLajUu2X2tFWc",
  "key13": "5FQ71FdCWeDZGqR9EJfRt22M5WuVtkRmqYzfqhRs1tLFNMiYkb1QD3QEB9Gcf3pxUT3iUNXhikJRp6b8Fnys62hT",
  "key14": "2tRdU6K6WnjVQAp9AK3UwE9U5e14x5kf2MwXY8PY2yiwAXM2jNQN5HgShCjRBPjtUJV1zR5JK4745QyK6F51LCLn",
  "key15": "21FCwZESqS7TcZ1r127xkVvHFpWozYmK7GjhXDPeexXBV9U1QUpZq4kAk4xVugypmEVi5BeLVbKWdefGPqrho1CW",
  "key16": "55fAq3yymb2qMbeasi9DJG27cRzyXGx4UR9NWqb3BaX18nNrk2biCqXcPo1F4JkdHTH3Ubbd6ZbRFE6XVxD7wTHw",
  "key17": "2Uxu7rqC1u9uXtTymtLBRVoMYpF6KrTDJzNRNsK9CE8oqmYAbWnwdcWeAnqaYZY9z1dGbyUzWgr1LYZfKJLfViem",
  "key18": "51pNuuAhr48BnHSvCdQBm5KMc9efy3JvsRLkZaGFJBPyLvG1K39RUx92FRurazL3adWpH9DDaA4njzScWPYAxW2S",
  "key19": "2VnuaRuURJ29bbS2Zsa6827PQ5AB1qj3qQBdhwwyk8LCD1CtG81Jt7w9FRjP647UcD3KUxKGBpnBTXXK2fLWsH56",
  "key20": "3wdP9R4sjRYKHwrJEXytd9tZtgdwXuD26WUNMnA7vJsU4CCD2EaQgVBpKf62sAdHicTs7SttxtH3gPt48iTvZVrp",
  "key21": "4p3J1FrxtUw1aCgwpGe6iefPqgEKGRTkoTf4f5rDMRxpbPTmdGxPfeKQQjdS8ThNVfuoL8QBaEijjo1p2qCbkjtP",
  "key22": "3ztWgy5akwDHEg5T4pPoC4xWRmipUcAo8dr5ZBq5pGd2WhLBjNUkMULx21NbFkAcvGj9Ht41oJaSqipasZ4RNfZ",
  "key23": "4L651G8ysHFcou3AMG8BrNgRLo6rT61Aw29GSBeEdKpMjy3EV6YuoAqCvqURiTrPpuTcWaiNErH8MBkZLXkyNAkT",
  "key24": "4PT5AzbRiPbjrCPwBkQDTaR2ZkPwz7yiiCRGtcvtaEsJKrS1oq5dsWBPJzQS9oUHFVmBHTTRoKyej2JVrJJN587X",
  "key25": "5bMCU8tzXgg3neHXtA9pyt2xmQxJ22499uJqzibpz8NS7yhme82EfSk4y1hfGD5aXJgTcTqb2kRcPH9Lw5cuxpkQ",
  "key26": "5mvRZmioFyk5m6Le2sJEGY18ijE1KdzHiY9JnMnrkZBcMxxGp8BaZAGMG6Dp9oXhuj8X2FLVJMcTSHSFPV7vh1K6",
  "key27": "3qHXxAcSb8Gg19ce9LLuQgPLezNHs11Axferna2Y5rSsBHBaW3Mc1khGZ9sXa8fMXoC3pZZ3te9pTVtHWbHAaovz",
  "key28": "46E7paSsyJhiKkbfomXmgqJQt9Rbc9RsfcHFVYXGJFzQJ15YUfB1n3C4oKwWdxNZ2suDzUwL4EQxDLpXGs2wQoPJ",
  "key29": "36SVjhN8NuceFjGuWnHdg29z3y3nM16sMPW5q96sTQHUMm1n7iM9Z1QEYa1DRTAaVH9UnWd3Vwn3FYuAo77Ek6RU",
  "key30": "2CTLup3GXxaDfoB4F4uxMuSqnHhDbGpGyRJMnWyFzhUjxa1ZmQHzBfefAjPJ1DqHHR4PQeDfBBmBbyNTvpMZeABf",
  "key31": "2fbb6Uw41C5uKBG7xVsvWfwV9T8DxgMckhtQEETQJby9juqRUopSrtgK9v3r8AN5pgC6sbvtgxwqzCwP5gWmqeya",
  "key32": "sBYAjSosLhaNewhrVWCyg89MfpuvNkJHRfPvzLV6FSPnmPTBg8z4Xaf32aqU9qJ9gY3aqZ6Rskjptwfmar9U5DR",
  "key33": "2hJQnmmZf5qeAPoksropjUP7gLYNZoksFuqJsCDh23LtJTWtkpD6HxYdwzMnutSi5rX5oVNFJkCjXfMixGQVe7uq"
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
