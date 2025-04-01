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
    "2HDJJRAXsLadyJmcA6mHMdS9rfZVFdHmyGQ3UxSTyyDNiDctFf9JLYf97mEo7DfhHvuMy1Y5VdtwWJW1QAvjAxbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "taqZB8WgAv4xE9fkvT1npLdjEQm3wwwBwdEiRfyFbERELhvMsGkLKuFrJB73ue5BcqjTLTWLE3jCfToJ5Pm3T78",
  "key1": "32kPuBV8t2KAd2cL5tvN3xKdBum17VrtLt3HQcvia6z9kLWLnX7hewNkhFEaK3FSKDuQsp6chmVzQFwDPQQeCLRL",
  "key2": "5Y7DpMp8zMfJhLmetZA9x4N4Sk9fSwQscEx1vvpSdt42rJVxmZxYMpaCbMSbmJrkRaX9LEAWfVmaGqYCY3aiPziK",
  "key3": "YJ1kYhq1RkWiESgGzVoDjBcq5KJNkarQ6Sq7QKYKheXJdvZ3B4TVoWMmGSwgdZ6UVir8o6r6CyTWm8roCx7wHWd",
  "key4": "Zya2UryLpm3d4QgJCwDuACkgtMso2VqTBLcsVAAKBx5PuULLws6KCU1Xe2m3wzsDVTYxjyC6SonAnuwccssUPAn",
  "key5": "2XeARzt1WvuKRxSMWeCbqGu21gQyTauuopBK7oWKjL1UBLAuWZc8LzCi2BaPJfVCkrsKAxW5JUnsZ8h36eBTNZkm",
  "key6": "2RS4ZSUtEij3pvVQcL6ytnA7zmcDToxp5JGGLyFp5tbsbiDTYMV5bdBFADFRotcWLk5Hrx15FqLJtSYvz7pTqwa",
  "key7": "58D9ghLJ3yFYtRiqAdpCLnyzJpybTBNTTXKTeewaNixvuhTktKD7McRAmnspSjdrtBH1LsJhe7QJpK5VWPZoJLpB",
  "key8": "5Vmbac46PZudEUJYhuzA8VV9dSR1PBpjMHfAkyampmPnPSbErk4uYfaHzx3VxpvZbf6p1wwjChRkkxwEq6nTMut5",
  "key9": "2D3JbYWJmNgLiTm5rjUcMTACeqhW4oemzd9bFcBvpacraZNDs3KT6tYN8F3nGwhcVYkN85AhsTrNJHMdWPSs5Yyq",
  "key10": "542gm2y3Zusk6rmFy6xceZ8tGFcFwGrUPRssnQ1zxVrzSgBwUmqcz9V4oPuKgFLqLpdEp2yP6v2t8uxWSbncw1UZ",
  "key11": "5is8faqq8APxD2TCbbxyf7qX4R4MekgTdB2Ygs7UmyTLQZgiXtgWKHZXxZqs3LzqzVt515BXaro2ag8Khd58Vh2i",
  "key12": "3BhYn8hxwA7qD9UrCmqTqFHdYgb2YZEcVTLbRj4yjKcD6t93i1XrZa5jAX6UPkzGhLpqLhceVEwge5mBczUsiyKC",
  "key13": "3NU6qVkU4rShDZH4yfV7cHagKDT5P9QSaLL9QTbLiH8M9oz82pEso1boe2U21soUVxkBHAqZJgyDTwhEPgZ8bsjS",
  "key14": "3bHwagKHrTZZfENLA6socvCeKZ6TD41BJUZ7zg9UjcHASwUGqiXyfMQWeTEqiHkxPjDvk2timyeuJpLK2rFVkKkf",
  "key15": "4mxYoGk9BRcZoZcMGgvWcSwq6rBkiHLLixPDG7FA1SmoUKUB1Cy5r3M2YiuJh4GvaSCagGh543sbVroVqoQ34fmj",
  "key16": "gSaPWEDJfA4G86Kkou9uXDVfwxq4Tdg1fYkZvdrbCxdmofeohNdPH6zX6zWKnYtMGYf9W3WS9Pjiw67V52zXLxa",
  "key17": "5d7Q16vAN82L7B6Y6MQN7dh3mWBC91GnuPTNWeQ1CG6Zu7CK4jZmjA19yiqqVtZrfGmfszakQAwUJE2ifYg3Ln1F",
  "key18": "5rQpdKVqmSmr9U65CimtCinTARaAMLRt5aCvSQp5UJRMVvXJ2KqXZvZySij8z818cUc2QBGWRxPgwxjqVfMmxsn2",
  "key19": "2PEoVo444UENveJg9qMmY3MucNgQqqAebbXsZsVFBrc3NcdvzktpBQHFLC5ntcnhk1Fv8Ui9Zt3xciYvBtdyxVt5",
  "key20": "3kSp26nCa4PtRHFNBbHXZ41HFawZUw8G3oQcm8PrgBGKF3EuaDChhkr9LfjWo9FH2cR2MhvzcnRkQPFW5hova9tp",
  "key21": "5djHiuPET8N5iCwHD874D7k1vjg58bCsyPChuJe5tU3hUGriu3KYJDrb3m1sB5hqFNSSbjgKtNEbs4pZhTXpsm3Q",
  "key22": "4zqUwQVVt2KUrn2qBPU63r8wAyNAwwMamkRA7DXcRh64aYsJpHxcNiqsttkL6TS7E3unqriKUNT7cGD9kf8d5CuV",
  "key23": "2spBqW1Amkd4DSuG4pJn19aqfCz3VK5qLrGy3esLJzMWohQiedAC4J5LSQsbUyhQjq8owhMQDfMkCSouYBo6YTz8",
  "key24": "2kQP83aB3Vv7Acch6MSHDt5K4Jbv7SeF9Wxdrd9X9hEqhxye5miABA49SqbvCjiEsTWXg6eGxt2gugNSfsx41bR5",
  "key25": "3kAUvmYVtxhipMeZUQE85zHghz7Ps1kiuYgWa8gKs6F9TTZXuQjQeWnugp1rs4ausLadBQxaSWr59YcvZ79uNdBL",
  "key26": "4vXCMvTtsYm6cSenoNTC69F7ATZ1uRQ81a71yXP8fDY2JBVgfu6NiuQqPtZFNToc1qzXxEHFTkRqdcbkZRExUPhp",
  "key27": "24LgBXN1pR2xLGR42Ts3NPjnzYPfV7hch4MzNj6LKcT3PZa9onnEAZbC8m7vtframxwh3okp31M3MbgPQ1etvhJS",
  "key28": "4hzBniJZucoNn6yYw2cirKsZ3PMWU8b8pjkBFNjp118NYcMHniQuFL2HtR9eZ1z3hQUJCsSY4n5Ft39tp7Aq8SiR",
  "key29": "5pg1pKURnY8VneLyxfqeicsFFN4mgfF2aYjK1q3CH4oYdL3vsUdqHJCn7N3TUaCCpnMj6v4HkKcS3pX6W78i7vDq",
  "key30": "5A57qaqEypwqYoaEVWvNqtqNsARKvAMVTypQ1G4a7j58SW4czYUfciy3ziyFCwUnTodGhrYu3bS8LpY7nm5zj4wQ",
  "key31": "8qCMZqbQ9nCfXxN2cpny4hyjy9yEta9x4ERM7kSnxT3gbaGrb2gfSsFiDdat26ZFM5VsLPTymPSE2YfPtWhGeYs",
  "key32": "3Y7LKjd1kZdLWEeMesGeLxywErFGNPB6Z3weaaipdjDAJfG43vwxkVBfKKyaPqwtZRqP2MHrCTY5xTacS9MXEbSF",
  "key33": "2aKnyxBeGukvoqG41iUYd8cQVwvwkTGXK9ZXmgqCWvYWJjDbUDWimgGC8Ce3Spsm1UAyPVtkS7kyoD5HDBA9YmVr",
  "key34": "5ciftC8z2htJpif578RzzM1qMC77HCa3u8ep3PQEyn17wfzrYdHwSS1TDeqTuWJCKiswUbi78Z8cRFqt5CLDQZqX"
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
