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
    "2gRxaZ9M1LdWYDT5GhojhRbFMKHopqaRcQobBvSNu4c5YRzDrMKPmTSJTzLZniA9aRR4zV2f2KJy5bFmfkcRY2yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217vRWH42QD67S5tdfT6VBP6CtJGcishtiUp87rN9Lxkan8Fq1DBriLowSuJJZt4bE7VuVaBZtSQhYKFVUsGxDgy",
  "key1": "3bTnpXFyxKwHZGX6jNaQHhdwXJzJ45UDEFNho8Tv14a6oD7gFofeQkZsBjcdpEywrH3bCSk9GvaNJmoDZvGW3Nm2",
  "key2": "2vkPUwZjzrfVusPDYxf8LbkUsJgh4U3Hz3MRLNLLqteNVkfyDRcSd68ETtyk2YMuwQCaMdVqFgBe9ERRzJXjLof2",
  "key3": "4CZUqHuGfUWgipgiUK9M9FEQemkPd6bx3YmjEn94ztWNnbmtaEeC6anLuUCnRd2nG6xaQ3KeFgMug9fVCVr574Qi",
  "key4": "cJMdk1RYNwVJJPtGqyGLrACFRfFtW6GTymYv2wefG9sb2iksRhKneNWaJbHHWxas3iL6FChF1S2ZsFXVWtDGyRT",
  "key5": "3yGhuMvDtFJ96vvKswHh1iS3jfEHm9e35kv5t161cHJL1yF7JsCxuw6YFE9kXncugeKyzcskgJ6jtR4bmjJQTcrQ",
  "key6": "4ZqZ4hixJpoH4VjE5sFmNFvs74hf32h1CbbtJWvXUTn13cMiRGz4HdzfpYgEdaG37K7y5igGGKydkAA1jgDtsatS",
  "key7": "5G9kyBKoef974BGPTmFrAqhGoWJwjyf11wrdHuW8igTeSCLdbRvWGEawTZMgwAkH9HrBV87ombBQYJos4iZV1WGN",
  "key8": "2LRgscxYR4y61arRiqSgYqb7PNGKK8ErZYhGDwWAsZC8Jhfv4guprfYV4a5hvjuMy9hQuehqc1HFdW4jHiQPSSXh",
  "key9": "4cQ8xwoDy2YpuRhpsRA7sYNxzZRm9HcN3tZ1oAhzBt4jxmyN1adEj2WKJBswQosTC2wutSLrqQsR2GSQ6BPFrf8r",
  "key10": "3HApcA4MTvyaUs5dZ35agQjJ99xQkFE65bfwQ6tujJZA2Zqdogom1CAMk6X9mfDsovStoUK2qsaN9zTGox67rZex",
  "key11": "366NzJS9WK3Exi5xL5LfTUjaMhuKubLLvv7jHf1qLRepwxAGErmnQXtSK26U98xyxh36KxEmnEjRFutRd8hiwKJT",
  "key12": "5cfh4ytd1zR9rwX6oHfkehff5fkXwGdqiXSS4xE3dELjjxpCgjnUkKvcbA99GVc2Yexy3kgVjfpBw24pBydSdHwG",
  "key13": "3QCzZEa43hBFZKMxhoFbtzK6bcvnX911L21KBjcrZ1NCdqMLi1cJYRrNfru5thmqqwLvFBnMyZuiKUsHyBQ88siF",
  "key14": "28CDSx35ho2xT9PfKzDfQ3w1pVTuwFdM98PVX18oa86J8fjbLYYKf8WkUV5WrgLhBvoKMh4BCeZFVgzuhm4MbnSu",
  "key15": "2D8KrVkawug9NB1fm9865oeSj1CU2SsX9nHXEqzbkkqpCt251NNeFUjEqjt8623TSGRchRe5NhJyo4M9WV2WEpuB",
  "key16": "4x9GFXZhkYCRjaP536awtipaGRzGwE65nUPLoZG15XEsKX9k8mpQivTsCyi3F4AjaLLFVK5hALTaxNj4XMEupJpA",
  "key17": "45678b1Gg7oTBFXjTife9sLrqv1snXNZbNtm8tTNQNY57Bxkwq7h1MMpJ8w5Ff54pj1fXh3VQmetdqn8ybq34kg6",
  "key18": "5ssSoFT5ciQm4FH7NJvJQW7yqp7RNbWPmGMMiotWEcJYHo52uL33pLEbeyLWadMPRHeVQSjxrq3nmi7Zkg1PK7qz",
  "key19": "29ETrN82kGqfqxbpRTLQxius2PA5kshFm5jcCrUC7gRAKBsiuEy9AFjncFftScTDBTc1g8kS6dRsNx8ktN1EdcKF",
  "key20": "44fBfmgpkxKLsjUpqsscKi7xTZ3XoQM6ZneYrfqZL7Y5UAoHPozZgfSxXT9Fqh2qRRHWwd116B6NKCkrFBvrwcxh",
  "key21": "2xRXx1X8RP1w5uDG4kH2bfbSpTxCJsTbfsgG1ojJ1tTVBk9p8widiP5DSzupbk7Nwbw9LTBbR9KvEvNsewaYrCw3",
  "key22": "5A2nH67tJmVKBcSVweuLghtzxh9nnpqUcyLU25Mwz3PYfqLb3M17cCzQHtcKCEcCKa8Mfyf9iEA9FGhV2gmyHAzR",
  "key23": "4Yqp6CAcEdFoDzgvq1nHBjJCZpw6vLYJ5yTBZjgHFHmJKrPpBZUmjkjNK5HWQSkkX9VUkqhq6YMYsSLH5mQdMR7t",
  "key24": "4BjDfF4uqzEA3jLL7S8FVSYVmAwHZGBkZSaWQegKYcHuViKviaNr5J94YWZjTiAd4JA3FyX14qbFdaqX5zTXR6Ju",
  "key25": "5rasqX1RfR9FK6DEPc3sjfrfnMMovigzm4GyHbkSrLYiG1t99zfAs41VJdM8ZSJtcBRg8gQxyPyBhu7xRQTW6kGn",
  "key26": "3ZsaUxq6S9PVv7xXiDqFiZkHMsZNYmmU5gU8CC2w3fHF8MRhn8DB3ycx4qscNy5L9BCBW6mv1x89L822P1gHoMVB",
  "key27": "2xnm4TJJPXKxRxK6Doix196egrWUrC5E6JkUioLF3dyqhE7i9VofazrSvBqpCYiwEhh5r2xxSKTLtnoTiknbWb93",
  "key28": "4mSvgJXeiqNGjMCePQXjwAfZKegYes9b83yQWa8e2VguPvSfdAAEjTKAzfxUxmfx7xfCpuRqz4N2vg8F6sLdnYLT",
  "key29": "46GyceB8rH6Lxzo6pYBzSgcgNcjtqM7M7NKf3RgiRVToztVVQQUodBjZbnCg7WFvxsVs8BdQR6rChT8RgsDdmrKX",
  "key30": "3yZDjVsxStByxvVpWPf9E8x8MeQ6RtaG1UfTKmPQ3ASi3rVZRR8kuMbtsqwpUSvRKhtqBexjmkdyYGjGXp1X5Z9h",
  "key31": "vecXpKazf1Lj7rLssFnxhjnAkKJXwZXYgX6qshF3kpauVxvU5KBsAv7eKnPDPHjzXdukGhM1BC94EGpfouZfudQ",
  "key32": "3gRK65c2iAYLbrh9FnEiGSARoMgv22g6TDZzwzxBmT7gx39wZ8Up297c1Erd3R2zPcBPa4yfke3azHzST2897BSX",
  "key33": "2pynzPWoFJYeQRktM2PTD9TzRJuYMmHJKaCDrT5HtPRiGuoRoeDajmffwmkKUvqFH3eHwLS7BFLvEwjNeo3oTggu",
  "key34": "28VnhECe29v5jQmCRRDmk139VSh9MW44x4Ke9P4hzYDJMiyn64T82SEQyMS6Rhk4R9PxnhXSoZiDpwmtHphM2VKp",
  "key35": "5EyuN784xQyTHUSGEncqskVY5dpiARCTy31ejpeZdWQpEhutREuUiC3mKChngh6HvT1HCvgcy2XqxLtrEWLxvh1z",
  "key36": "hsb2VVszTM3emTGwCiUGTkeKjMqJ8pDTQxrJvwWaUiXW76TKWWa3EzD9VFJ7QUwTu1EgRNrqGZrQdzhagSiMuWY",
  "key37": "49QBLXmYsrioTNknKPtkhW4btxf9mZLTUsJqn1DyGs8NWVh1WZa8LMrjHem6KNRnAkrBszFaRKK7Av8h9vjwxYim",
  "key38": "3FFt4dUD6rwr2ES3zHSg51CwKqTisj8Z9b74YqwSAggJqwdbNhTn58o72pZy2xcaQnpLCT7oi4RcFHWVrMb1tcTj",
  "key39": "3TAFAHhqE9Y7TAEyZmjSSvsXfPn6FPS83HqYXGM4YHiAgyhN4Uq5xu2qiJHgo1xwfqgYLVHd87gtz6gsmn4DJzgs",
  "key40": "5SDmVPqK7fbTokjRVPHN2CXQsXK64vQuy2TVgzGwxoGSXnpz36LyBCg4pnkmq6b7BbT8vKS7TyLnm1DFL15nj1f6"
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
