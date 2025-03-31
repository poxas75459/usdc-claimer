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
    "5d9NU88F5QTBwim8xqzGBu2kqnVdfyGpcFqsJHB9Y4oDrMVm9n4WwruWaRa4zyASg5uoz7Qi4TTSmgMzY2cDA7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AH9cWdrJEjPeuE3i4tq3FsoM5M3Tcxyt9ms1bdEa8rxiLjyKmo8hFnaXxapTmu2FUdefsmEMiMUNjdndr6s1TzE",
  "key1": "4949cezpTA5AQxP1XEuAFQbNMd63x1VLTwPkafEoJpNQudSgNjA84jJmJByCbQ4uKX2MdKqkQFWRjhB3BPzpi68X",
  "key2": "5HyogwCMRk5dUHZezzViiDEqt64NaAuLdSUXeM8m1tGUWJr674hmFvQrzUB34YZp2Boz86zFU3WA9ZMXHsDtp3Y",
  "key3": "gh4FURkCM3y3yMjrrDY5XTfVJGMG7Kh1iAyRQMcxn2Jge8tLWaGt4YShtB1uzQcR4o48ggvuZ7D2arHy49s7UTM",
  "key4": "64rscsT51UQFsNfvjNJ2yiTPUvNcjWYyU9Fd7XtEux4PbdZhysKavyoGTuEMBb8QUA3zrQNfjprJpoLWBSghENPa",
  "key5": "23RTa9ozysdHbQcan4thcw1NLEyDo32KMmXX4oP98bS6cyQYRhzLvdXti1Zx95BmUQcqdMbnseyYnqGuJTzttGT7",
  "key6": "3HYuWNx9wHuYQ8kE5s1Boo2coNcMy1CsWNmQvhXb759hPMAmo1ZHTLfGwzP82tru95vnYeqMYvZSYKzndV6WdBUP",
  "key7": "2GnFReEEkd3FviqjA4uH6bTsAJfyoRMPhMPRhDNAiaVXhrF3sqLMVKrZnxj5GMYcgvryrX1MBT9N1FnWjEsUqYGU",
  "key8": "4YcVqojGbF6xXzqq6rijWvjTD4mgKPy6pfS47qqVZHmBZEGv4VsThDXva2qHp2xAvfzyj2rXkiVCFySFtKEnd19n",
  "key9": "3YiLdySoC8Z6VtPgvmrBkHeWqT9uirM6CQiQg7gtEwzGUvYA7LG2MusdMY7EcHFbdpJzRGrosxaJrGgBv9utGamz",
  "key10": "57udZbDU1rihrDhP57UMqBys8FGzoCJJaoMExCkz414kVUgV2FxzouZfnQAyRaWPZeH75qMZztGhz1U4whaoXAcG",
  "key11": "4dWYP9DK5EmccvmJ5DvnugmMDnPzeo9BpxNUEsW6TvFmGbaALG4EjpxJvpZyNgyLJkk4AcdbTUdDNaQiTiKhaXvN",
  "key12": "4TAUSXDyGTqrSjEajggssedDUsXCd6WNunezHVSMZkv245bTqwkCuMnqHG6adp1iPLygzyjy2dLJ25BeBBDAj1Tm",
  "key13": "4UHbxUMe7bQr52s2n2d6G17YhGfX5Ra9mMmkiT9CuPohciMzudvW35zPm4mjPKniN8CGK4JpK5miV79AmqKGaM8g",
  "key14": "2ZBADQ9EUNDhopPeoP16tG2uqtcUKar6XFN4SKqdQWCM1FYzXVNZRGCspMNKLfAKgCG18BXMSHWQQ2VPgvTQ6pum",
  "key15": "42uWHnvVNhnbDpnSNPPs4bdtYPaifqEgjLtL1UG2pQwYSVGnWwEVq8mvTn7hamD8XDykDSNbRuDHnMFr4ShviuAA",
  "key16": "4ERBNYSXxXyzcByTr3r1MYaPwbs1WkvaDvHSPLbQjYi7AVZYAmNNUyUMbRRCYyYpjCxHq2nSeAfvm34r1Q2Po4tn",
  "key17": "4oSrz7MyjYGo6cxXzFv33uuiN1pQi82TaTsVr3a2KBXTmz1ECnQKnx9ntcZCRGsA4CsxZCLXZ8X8kVEaujZHCA92",
  "key18": "2S3haMzy9dhBjqqAXZrezSEmWepeBa4U3Ptx1KWhtP2ABwxNbTkWpd8epezB8ixWGdJtEkR56aUSpekPFgVdpnoa",
  "key19": "4CR3yQmqizsZSXZHh9LQz134cwm4KgmbgkwUFSV3PPcAwWjf4dqmb2twuH6rBP2dWunqEvdgiV1w9ityTKqUWKaY",
  "key20": "33oec697wnb2phpK4p39ADUyYrZXSih6HYbXczdvrnLwN53oKydmmAzhSY9fqRHhhcLp46YuKGjw4M8eVsWseBUS",
  "key21": "5yGWEbefC6qwMqDrzitEVVvoypKUgdmbybyn1MVjtUE3mpZSt5uqBcr5N7bTHXNtZ7z979uYin7xaL9xFCCkhczU",
  "key22": "6Z2yqAyboKz7CYWu4Lc5BK4aQx7DjVmC4h5yHL47y5ECdA7Q1t1NdhtHHVb9ZBye1pEzEbEnFkbftAJrk6gWtJk",
  "key23": "4whJmeYx5EMrP3rVUgHv73jR387hsmhGe2rU161i7bjb5xJzbPxBhyUGW1JTtWfYrT4s6QCAXy85UEcSFM3T15gn",
  "key24": "35hawBTdZB75ZRZnWRJgCaJ8iAUsWxqWsNHTphZAJUJoyo7jKpG33CqNVdMYVe7kPsoTEAdEDfKayesRZNcJcZzq",
  "key25": "4HrK9AEpf4Ta4LsNNREtj13SB9fUj6rHwEQtMhgKzv6kTxSpmNRSBPeC99uBtFtj7AFoLZBDXeqePDWdbNrFv6KF",
  "key26": "WnkpNEraWUzGefJAgMqFrn5bEYPN6C8ASD6uPyMzoAasUfqbAJCyH8bze1GQ3rdS7rBLChQaRkmz33n1cqEQGM8",
  "key27": "3KgHAYX2T3DFvpyXeP6XE1dCDHJPj61ebPZyqiCMG1Y2GxGnvmYw51b52vDr9doCeAVTEhpBAXhEi7C7haHWvYdD",
  "key28": "63hQ1N45nYinPeQLEWwGHbA8TjRJG5SXKNEFS2rQSa7UZD1GA4xqMYbKShoioViJaXTgb7sgUHMdnJAwDZHDVj94",
  "key29": "3QibmuAjXWHeavfoRdsWD1Zo5N8VRRGBRpUXfMJhcuN4chse4Q1ciEFpi3rFuqQ3WPv7wKgtjAxx5QJwLKbm4YUV",
  "key30": "2tY6qLVG7wqrwrPC3Teb6VnXQCQPhXyWnHf3mkr1vqxBo4zh9CBZfJeZdgntN5m3vafuQNyv9sUzGiZLG97xPUn7",
  "key31": "5MQhNeNc1xGAkem6KkcuqtcmW9XXQorEUNt2vcqKQ4hbMMgx4cMrELzNDcsLWMR1pmvyz2JUHb8CQHj37k44iDDc",
  "key32": "3ipB91eTxAwDfnjixxNqG38pCoBUvceVkhQM7xKSNqiBV3sb7TzTnNTaxL9mFDo3dC2Y79Va1RZUzK8fwqziKfM7",
  "key33": "2Yh2GhcsRoHdwuePNykskBmuGfmSrnf8nE3jQFu8n8ESMEv531BHvf4k3us9MNSwWk6gJVrNZ5CxweNe91WTzMk3",
  "key34": "4exuyGM4wopxyae5Yz3VGPPdKfjTLkQxKDWgP1DTSnfLmdwuBrQ1rD8qQ8mnUStktDfoKkZ9HGqshhVygQ4zNrwk",
  "key35": "58F27pwLE7vyt94vxu6XiqWeYrqnW6oqNkYXx6Q1CXeBpaK9sf231sTupNezmWh4g1YutaSv643J2EXnETeA8Voj",
  "key36": "5obQhmqnQXfVTo72dYFf9n2bFuz2GYxL1r3yJwor4DGS2svct9agtdp9tXuYGSeJXex3DgbopQdFHiyXemp91gzg"
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
