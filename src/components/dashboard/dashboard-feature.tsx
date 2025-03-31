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
    "4SoprL6EfhhY8zuyMaPXRTmrZMWR6cwHL9PW79rQmHowb7yKBxrY8UhzWzxCKHgztcxK6fRwbUsuuGnXPCmjpTkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XiLa8top8jCSapGoL4umb6fmNPDE15BzSiYzz2W8zZYwcYcrFiy1j7AsvrzxjUP7M4iFQtc7d9hm5iRa5YV3Xmi",
  "key1": "Wp2oBptnP6s7DeBfi38uWFKtcVGdohoXvJe15cDdeFk4T3m6CYB6C6kaKL3WoT72F7DpkMNvkJh9S5VgWu7agi2",
  "key2": "3VTBmGLjNRqpuqECoTRRjfj6skYxAqF1nH72EMDZLv254XrYwQLXHsZDy7kYYpKbHLXx8aWNUYR8CXeHJ3cYyate",
  "key3": "4SUNLLh9pj4xTB6GsJqFomK5Y1wwCFbdTfKrs8aHJMYpc6K7vnwuYBnsF1ojsGbU7LY7cKo1GwHbVxHHyYv7S619",
  "key4": "4QPYnkVvesRbyepE7SH5WAksn3xdaV72iqiJ8S92ycAWGKbup87FZ9LKVJEn5G8ap4C1DEV4BxoMQhQEt9uq4PZi",
  "key5": "5rJ4FXQweVFqthvquHq8914fdgg2gwJt1v2asfjPDuzPaCWSQp9SYzhyrFcPLHuCMNuHbeXSNq4v5wK5CiRhJD3q",
  "key6": "5cELmuf68R8cTNxti3i7fVZZg16ESrZq1juTWKkNDymte66EqsB1i3HeSVUMVjP7RCYLio4VbLeA81H5Hz3MY6n3",
  "key7": "4VGhq3kvzYNoCCRJZ9c3L4NLfyUiEjmUXwAYrXftTBLRg8ZVnGQmgzBmNm8yye3C6GacXkHhGx8xL91i1cSagpLN",
  "key8": "4GnrNYC44khAgoTq9BXAG1dNRRhtDQYybuz15ReHcRkQY5jNg4MhCz2ho2CTqzArjmfonZw1fUTioroSNjDHmJcY",
  "key9": "5tQ1RPdj1HZjHk612hz9K2C4qS7iSr1AdEF5CUkdaHN8bwAHSUdHAReQi5eqoMoUxhtGfn37nqxPmvvEMy1SPGxh",
  "key10": "c1jRwcYD5w9xKZUBM2MhnPHjubnabYqK47PHaP4FGpwbJXYSdgJRxgxH5cFxr3YvzNWj6BWRDJUsScgFesoCpdX",
  "key11": "QmUmSPbodpxfwwhR2YTmc5qhwEKg8LkDCgoFCBbWnRXnmHkSuSK9yGnfqd2TfaGJpcoKgZEAP85VR4y9YKsxQ3J",
  "key12": "2ByhsvtzESxDpw1EMjtzU2AKaupA98wzRQ21c1C8iidEz8bFLL2B1hCHgB4wXDChWM2n6hSi5UsoDHdyd9fFVShJ",
  "key13": "5QJSecpcJgtDanpghduCDbdhz5TKNVNvuVv6bhGvNdZPr7N49eT4V3GrEsqTDeMieLsyypCZi8YSUv2a8TUoYLhU",
  "key14": "2fXjWAfmPM7Hy79bzk28QsDUZ8dzcDB1TwpxKm9dSP85CDQmHTLt1ZCMntzQsmYynTehK3j12AB9JwBZqHnUTVNV",
  "key15": "33HamUWJK682sVoAy4HuGQvEe6BUQPsaHsq751SHefW4nyNbzkg1ioFTjU8kU2FLw2YTmEBFKTAQVqss5TMDWgGp",
  "key16": "3qkmgwoqribheupnA2VdgdVJ53yoruchLPiQhEG5sWXB5chr7uSrb4d3M4HKfwaKoun9GwnmaPBv7R5rpr3Qc9rb",
  "key17": "2zm5ibGJVSJR8kAsgJwG4cBh9LJsyG6bwGZvpTdu7WSs9d3ezJ5xqqYq2i4z6ys6gMzLzpg4xmt1JsUZmKJVNe7C",
  "key18": "CsHjuPJbfLTeXksa8p7xdNRzwrvjxjFo1EntE74FEs3xgg6ThCxfNwFru6DUpf9t3HoNeMqgYuttW2j2t4TrwZG",
  "key19": "5ZYuG9JSshjJrHcx7SXSMRnS85CEp8zUyQ23NQWWu446YhThxv78cTbgPCDmF6pKPyFvGY93s6qAiQ5MJXp3qQah",
  "key20": "3UK4ZmxusdxUSgLkZdXg645xvNg9mV3fLcvwqhNfM5eW5XZWFyJGpozo5Ekwk2YSvjjB296Jt59YcNzx9WQCLmKk",
  "key21": "4ah9uiMxPSSRqGRUfLsF86haaAsrk3jaoaaDY88ySiJbDAXumSUmmHvteyCztF8pm9hfkC4WFPJoXpJNAsEXYup1",
  "key22": "2AXkybMtL6MNRUf3f9F5ZCCxi4WLPUTTJNcJaE2XVRKcgnGt8pvcnEFFVi123TCbueot1nDT6ScpduHjSyK978We",
  "key23": "33Tbfvde428ivSYmpM5Yc4CtdTJkwfVeRZHH8jaWaEXZpeCy5NG26ce82sivNJFANRUFyy38fembXMJEuy2RTEZa",
  "key24": "5q41jT7gbdzRQPYomu4JSZc7h2jMTf583E77Dx6jTWNzPaT9oU8L4iQymYaiJN8aVeRi4wYgTj8QwVuZs7ggEiqr",
  "key25": "2WJGeysVFqaZzRNSpDaNpe6HFNBxuZAtt9stvX8xXkjepJw1xF8PBNstakv57vADktZSt545t5fH2z8UJ4pZjm2e",
  "key26": "3fE6XYZCNzvfiqGgbNyRSpMWQozpVZhkSACm1wFY2WJ9ye7bCUE9jYDv9WgapRE8D4bnCfjDYF7X9jBPLGB13JA3",
  "key27": "66GdHHM4bYUdBo2vZvwmiM7mLnheMkncwojqp8jBbAxh9Tcyt6jkuuTkJav8Uxy58tqWtfxDK2H8Y1YGZ2euSkhk",
  "key28": "kWUZ8Bji2HYtNbcX24Kv33bvZzJpPRg1oqPz3cVMjvwgAF8JQzLAeBcJxjHS8159qS7fUukhDUH4Qj4aGFAp4KJ",
  "key29": "4endTvUPsuzaJZdMXdpfDrqLCjCPFGnTEEn8Ere7QKEo6x4m7TsLpWqzXn1vmUMJ7Q5YXViiLHZR7Hu39k7Ktb41"
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
