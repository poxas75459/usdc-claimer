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
    "9Xrhs2VnCVB4j8RkUwSTEm9TqjBNrRUCZs7cxGhVkwko9qobiz5KrKkrTvndLn6WtJ3ALLqALA6AL6DzsvesrVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Hsaj6s5xJz91adifq3Dca18defF3xAH1ePKXvSppohdqeW72bVKD8VwHpHNQ4dirX51oF3XSC9o825jqondrR5",
  "key1": "5sNyEfHJQJLaVLJVDk41NETpRnvZw9pU9qChsatjxFCtrte9p7AxcwefCHPBhGeTyevjd8rdjwu9xSaUyfwj1nr1",
  "key2": "44qNexzDBpMtYw2V7XSCCcrC45fTt69J8ugXGJ9yXbJ3Ltijtsmu4fALB4exuw7jjqmnv6ABS7QiafpPyxf7Trxf",
  "key3": "tsKKuVtBmPRzdDro2TAXpH2fyh282YxvZdPAWR8KY5oDtHQUqivsf3Li9RXzZ6KZguhLYkdQaxREq9UUGh6ChD3",
  "key4": "3XFnWfL4JcCYiW5vGG2bYpUu6LMFTKqgzokSf2zYZZ9uRvRp4s3jqrUTPA1h9scSUB8Lk7oNdR5HwX9gx6kAeUHr",
  "key5": "2G5oSwPM8Fqd9i9932NaD2ohovFEy9ZoyopQ7w3PVJufQihuzSqu9MomDuxPtW18tse5w6VWeS6ktXrQmGjRezSH",
  "key6": "35EQnRD8Mv3ohQNEcxWEgrCJqQACEVLmEiNyvtjxBm5m65oe1mzymcfhhSF1Rfr71Gs42Qe1m5qhpj62XvNCAcTy",
  "key7": "23LxfXHViHBbkGmpBLJgeZwHxARWmoDnEawLocv5yRSAY8AeMo71AhFQEhZURDbbbX54RqXodcbuFgjW6Gujh8iu",
  "key8": "MF7LmuDgN9ZReeUD8f1j71WwSFcsxGnPZh334MwxCZnXqHvy5XfdKSUuVrY4rSDtuYrGeamSPpD2uHpxAdMNzLX",
  "key9": "5DTE8JRvhXjRSNwcj68PqSn5Y9f9yCoxbNbiYUR1ibDm8W9AprWA8zDu6JeHXjDFhFSZWFYYyEJmGYWxkvg2KVou",
  "key10": "6JdCiTGv914EYEugsbWVqjxvH7qK7HALXkXoU94VDzZnHmaKiRpNoJA3aiQCvsztX5F8mUuVJcq1n2sTNt5iUAn",
  "key11": "2rk9HxmSKYUaXCVRwjmno8XTUgYvRAriwWGNtPE39kksPGhNMjneLbC8FQDytHCykwgwATvXM5kCa94wDe82TV5v",
  "key12": "3JES39LALJCUfweCzqYeVFCTSKfPKBzqhQJdGPBZKVDEBrbCAVNNSTvboEaJJZGzrDftanzmRGdnNQ2FsVhkfhoz",
  "key13": "2GRWb53aBjjz52c8gsNqR63hYb3SBVArfJ59B5AvNekb6SScFnoxtHJkVCEzgfShs3ocKx3fSEEKyvbKF2TVqaCo",
  "key14": "4V1hUE5uYFQyhKEkmshckBMpY6ZZpqTkoDZi5vyr3KQ2ndN9osbmBRnimtNdmKQ8541QyfLenZDB7VRQ4SjaaVfH",
  "key15": "4FHH1pL8NLxp2C2jR7nKVWPkJtB53GpHi2tbLUkNTTYofh6uTs3iQRUEHAXx2m9opDjHyaNSppxP1WRb6D32m1wP",
  "key16": "3BR2w4AMqATkUmANgp6178fWsuGYwQHPwTric9MY4LUsiCvN6cbBjrjjToGJVTawShkG2pAAwGqWcKEyjqjxzJAB",
  "key17": "3vWBUbpcY2XMXLP9kKuMiKqRWoY9tjkt5M1ADPLmCymvXjp3EwWnZ9af12prmoppbi9owCDKsPDwsJ2TDzipTsL2",
  "key18": "5x42cmJjuDoEUsnWc4urp1e2qQ8Bojaitp7HgzE4btnRzscM1rKgv27UCtAzmojU14vJ6cKqDi6uUZomHb621yXu",
  "key19": "2oKzH1zQEttJ5Xqcy6aiF8x1btAY4mANe2j1cg3BnTw1cEs6dRuiu76kZHrdKmzbpLhFf7jTDzsFs6ym9vXWdyWZ",
  "key20": "4vCS3x3oCrPfbEohn2w6ew88YKztAkXHLY1oHVRESBh28PifUnnwrAbZBaGTsNVA5FNqfTBSF47LsZSS3G2MhuFP",
  "key21": "3tRJHPLomwSSkngUyqhDjjmHbXuE74gzQAn5rQw6Z18MzwAmZgy1NPqDGRio9ZBx7KEY6bbEVE1ftqia7WFYtivm",
  "key22": "5JUUU8o1e632WdixSgBbFoKmx74d2ptVQEAUmDreCHwLyNcRJQcC37yz4LikB2ekian4qCi8o1Uc4m5i3vzs5gE2",
  "key23": "6HrqETWCSdY2RsX2x1hPSVPsKQrsbTnQ9Aqv7MQnyUCdseQ7s4qXsFvKgm84wXjQHJM8NifizzoeXsBSZDqMDup",
  "key24": "2ViBFzneg5VA1HuE8sNtLF5tQtMbBjzE2i15CxXviPVJsbSA9F1jeQfdmTzqTPyyPYigt82Ne7ZpNjUpR41xjDQN",
  "key25": "5o1TdYt9iZTKXTKVXs2RgzxPFRKsouEe8BWnW7L4zuVC5BXD1in6fz9vprzxQAjtFWw48LUyD76NkCLMr4eZsjeB",
  "key26": "39tMENJxVtKeSaMrp4DPwu3u9yvNf5RKKK9jBsL4k6BGKhHCezijqmX4cszkjeQBEGF5xovJgwyAzEjVgpMXzVb3",
  "key27": "4MQbkQoaaxXvp7tNoL9R1CxtgC63wj4wxWhkBMhqBVeQUyrMehvxMeWYNzw9caaNr3jhFcPzRzoLuF61PfVW8sU8",
  "key28": "5zangWpEruSyRpkyd9PFDxuQMgkctncgMRR4vUGkJNAY9ycLggBkWqTEwTFupy46mbqxC7bYmpXZdxFfikQBGrQf",
  "key29": "2ywRHyhdimS8Lc5f1M1VW4XepxJ2wXTvm1yQ2pBxHWM7BTYtL8QpLDKSQKXT1siN5smVAswFzXxG7nJm1YC8KXiU",
  "key30": "672AquTrnJG8iJxWs2qPJapjFCRXdvjywYasefHTHF4N9EtgjZAg8jNiZQ5ajcmyPYVtFtAvJd2sWHJNbiDkVm62",
  "key31": "47Ax7DJ7sFthRxxwWYnnk3iqHz9Q9cLVtzGK6W8pTLra7oFtZZxK8UY4WYfYTKTNA779Wv1x7D5679YT7hqsLEev",
  "key32": "4BChmsxFnrkq5ob3AGjuB6s8Wfny7vGHw2Pg9qevKAjAWWuj9jsQngVpbpeFg48UUqs3Bz6VbvnWV17fLGvrULfw",
  "key33": "3fie1KcJDxJ5V5knax86cGrXwPC9VocwpQWEF7PmKZchpU5sH7HpkBzb21szd3HYGcMHMBHUvXuVducSR6ADKmsF",
  "key34": "2bR4WG5mmUwvdvrn8cpkZCpbJ7A6UZedUfsGgYhsJWQWdfGPMe4Rcuw8d3B6ao3ui82AjUK7tBY9n2CfyvWZDzeY",
  "key35": "3Jv8tVYMB9heEQd1CitmS2hKFLt2T7ciHjfxAUffu9M35GsxBTixWtTf1fKFNNGLbY6GGR4jJePHQicWBjvKmyKL",
  "key36": "qx5LGBNYTGFz6unKHHMs9k7fD423hBoCcowLTMvRNT2LePYKHhZAJfotV8SfgTK9dtz8YkgB2qte9FHzbuJsxHh",
  "key37": "C6hckVNzEjhfnkbaNDSEkk3Jr9ygBd6Qdy6t1nRhctcbhzBH4GW8D27gv9hou68c7gWsFwiHSDxiSaeNVeez4tS",
  "key38": "4SS29nvpom9ocSiZeyBkUTDvZoKUDhobAaFZ1NTHC4fbyCJnGT6NUzEBE4TTqGxvg1PjZM5ToyaQmF12NmbXepvM",
  "key39": "4v9ddoPw8wDED9YSwjP2KSw9zFcrWEPHfoMm1u8vkDto2xb2grwcfh1Bh9sdBnBHMz2X2WcSuSSEt6nniEykHyPd",
  "key40": "5KD8cpphcSPkZZdkcM7bTnuxSbcjJwVoMDFdnLPT2MAz7VqrGopX411nNTk79wbxJQVZSi7rR1DhkeQNj1v6Qt2u",
  "key41": "2Q1HRZWjbT3QQaqLY9HdBd5UuGeDMsX2coyYsrqRMSwRB9FYXNwzZkJzwDMxgztKGVRUbhqoGFxFdELYszG5oLFU",
  "key42": "KzvopQ6FgDcYLxv6U18TxuRTbuQ7MYAamx8sRAbguBgCJfqfjLq16SPNcPCgYNNr3eH4Qm4cBeZZ1BEibg1vFuY",
  "key43": "39v8BReJes3jsJnBQuQLXpCY22qyQkFdK3REmKzFSPdFE5zR52ah2LMR46ZpmWMiyo4xLyC5y6oRPMT47vL9gLoB",
  "key44": "5fPCB6o9pM12RfYUHZiPyjYaZykRbgAZSqad44E1CUMhfMrSFStUTYpWuCCGt45eEz4HrEY66eP6Qao8mmfrz5nb"
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
