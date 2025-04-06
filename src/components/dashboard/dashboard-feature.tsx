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
    "VFdv1fq1Ki3cKAEWbDFpTbHfVdrPE85T2938iM34EANVSvZDJd49edGEEHyyvsuHvzmZC8dqPZ94Zc3hre7aPcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "etoRx3whwwYxtNV9eWXVNXv8NQ9DegPS7HZMiZKErenn3Pmnw5cGv3tpejJzpABgWTXyenBx3e3G5NA3ziQfHLy",
  "key1": "5EPNfeU2Cm18tt8WiT3i66Wi8zCFxwaCDf1TtBp3W1i8M6hLKhRwDYyUZEka9RU4rHdtmLxcDwqmZUhrcopVHWZu",
  "key2": "4HeXchN7GjnWkGU1rDh3R6FvpKZHiPmjpETs3UZ1CjMuJ9BRxDFNg5iEiiwiifKQQfHTuRSQV9911n8VtmWNnKLK",
  "key3": "4jx3G9CymWjhHNPDW8pVWHjqhMKG1qHzZaA5MpByMySYEAHztnm22Qzw6kBduggKiMSdZV1RVsAQukc9YCQTnuWK",
  "key4": "39RfAgKaSUBEpLXpUx1YYeym9HEtoopiGLVMQF8WXfoE52mUBKiKxtqeJscRycv3ratp4rZgTqpfbSt14vJj2jFc",
  "key5": "3PnPFGQXbVxeRc7zNkLjXx4JwdiQ1rUVaSmE91oy6MnfDRsXtVj4jTSnG2CCLWm1cPqcAwGHDXE65DpxsvtarFje",
  "key6": "22f11ZxP5LN8Vqjx9cWLZbmmXMavppYK94B9hnoEuZhJkF541o6BZ6XYfN3W59D83CaYdzN3SHWXsnxu6PsLPiYf",
  "key7": "2kXL4WJhL6r6F16wft61A3V3cafZYcQiiiJrTnGnm3QNqpbhVZmmrUQaaffKJ6rD32WkjS38tZ6BdYZPjBD5vpxS",
  "key8": "qffMBEkpsab7exokGNwCnkDSd725vQiMkrm6H3bkW9D43crXE4jWSF3qxHrmotZhTYXZTSiJUyZenGupBiodZYe",
  "key9": "52xZ2BpNL5SbG5UEvfNTCEEZL32aQZ5M8EAdXNCdGVcopSJExqqs2TXRZ55wXZc1aDf9QvnXLiomdFo77scPck38",
  "key10": "Emf1NHx7WUmLhTKfdgdcssNsBEXKgT55RSqs8mywZChn22hDf12Daf6iUxLi9SPU2cAorpFXhvmXGkUC7qYW62X",
  "key11": "3uVSvjGPvgEzWFF4KhrSqa1avVj9hrVZ3rX6SHr3jCqHitigoyEYBUhNVqj5eZxixGoxJucGmkrfhJQp8Vv8FQpj",
  "key12": "5Axkxm6t4zXaUZZp25Ha33mBGJ97KdHHR7m4ZcpEXHug3uH2WqgYpToLQybDyaRKt9Fvsok6dpfMzv3bjEajV1pz",
  "key13": "2HzUWsmq3JKAa2KEHtEqkSBHTcVbjukBqzvZdnZjiTrVw5DmD3hwxy2iFTctWY2u9nWG6X2GeCVFkZUz8DnGiEnt",
  "key14": "61qMXDAiNdXdYE7m8hE52VhEb48qFSeh7g7sTGrfG87STJfuExDf1gzokUhif7oQEavgqpLfTrm82FiX48qa8T9E",
  "key15": "5txtwcYE9eQx6hQ1mgEL8C7SR4TRvGphuprhHf6Nd2GVWdjmdQgbPHpbcnyZqDeVkBBNCmJqLJEhiw1huS2YdGBq",
  "key16": "g8RteesfsCkzDesQup2MFqW2cgJYWSD4PwpJavZTNGmNgPaWcCnQNer6CdjRXDAWMYyBGDDhghdv2yTvo86793t",
  "key17": "45knY9PgmeM7xQJeCRRXKymH6J6Ymn5Q4v4rLTPukTdddKgv8J6CaBKbDUjygT4N27Zn8GkuTbcfrfNaTdWu9uff",
  "key18": "2tKyYPkXsWT7WxQN9PgLLz61W6XCJvseqpWJg1AqmhHsMx9oRzbvKUD1AV1euTrsgCempb96wJe1tMZmqGKRorp7",
  "key19": "4mrJa6it5GBjG3uFnZ4tRh4mDUj7JPCEEAnaLVjEkN2KzoDLLS7KafdsU2NLYnUTd1svm1qeRFB5J5qfUxvGEafj",
  "key20": "qWJJfBPCTgLSuAWw7TYivNq5YNqbmH5TNGXXYxMQqs6ADDxRDZ8Rm8preuH35AVEjdfge94NcEmDjW7uuYHUANS",
  "key21": "5e7BujtNavSE3GN5oiqFxyzEzubxtuWRLu57ye6VpZpEkoSZ5GDCSXG4DneZFJVtrEKSTi8JTrhCGBDoHnQGnQ3X",
  "key22": "4EXAdnQb3ELmeRmDE9KsBwqytZ4Pkw5EUWieiy35sucp5V6oWhFFPTK8eFd845R6MYDk6dBebSi8bppBZfLKZTVe",
  "key23": "3aDG1yBu9bxHeWByAQSvwkc2PGqSy8FWMWs7P92411yWB6mGNiAUF7CTWe8R9sv8yCFg6q7L81YKK37BZfZCK36w",
  "key24": "4aFps4NFB2jkdFsa6UkZbayGCW38jpwdVZaYPLPwnTzMt3hCBfHxKcm81Uwof1BgHTYxsUbLiwJiR7LTJ8ujtJmF",
  "key25": "9n3kEqkrV4i8csKZCGCZL9xvjZ1Do2S1BAruJUGD6Q4p3TG9AGTMeBsqA4U7e8bS2fnEstXqVo6ePUbPe7Lz6ZV",
  "key26": "3TuQ415VSpVWgs9Bixs9BDtuKoGNcVhS7FjxzwVPFMpETG4t2MFN2UmCT9yTzXa2Q8E5f9PZgqrgQUCxDUz1RQPo",
  "key27": "LmVLmBGqKTQZ2czHgPVH1ZVRDYqZxEm9oAZdj7FFHuV8WyyZgRaTZb9d9xJUXhNorSo4ox7tFX4qvYrJNDrpkUq",
  "key28": "66yXeQxfMWiEYcARnHSdfKNMTo1R9AKuQtenT5WA7oXY35XaQs4T8m1DYbgZwe4h7JoLUnzJvTCLeSLtsQ5wBc1L",
  "key29": "W4Z487mQ1zpetzhZSYH9LoFwgdRBx2U1KN4zH7M3DyUZ48aCAmnZZe2QGYvkyQVKSfQwqK3dys97C44xKEgubFV",
  "key30": "Ls2kDF5wFd7krTFxefkspEwP5QReGTUTkKB8t5Wxb9vFhfB9XdLjRTsEK54BfmLnmN9zci8FMrc9jNSbDbPzUoN",
  "key31": "3YrAKXPmJrX954bVxqAmMn8fJi96Q4VqRZbgzm2RR9baoZekNQs89qp3ER1nhpZoA6u77NXygnLveN87tNCZXbci",
  "key32": "5uiekfp43NRLDhaVYcQHxVFJp7Tz7aXGm5J9fUz8dxfcCry6MwRgXRX8qtbvygtsr3j98qnAjG73Ak5WqX4mD8Nt",
  "key33": "2g9a3x3TEoDT3P8CYckuRzadbr51V9iN7zG2ANbK1jRtqxevwQ3BVNM3itQPjnGPHXjH36ErdyCgbu597C6xNY21",
  "key34": "4UNUKjMEvXpS1N3WgBBHMZu7a42TQ8aCajCufRyW4g97FsGsfsSpMQGeFxeAnw85ks4mHjN4cYyk2xGRnPy9MEMv",
  "key35": "53PdmNNJJMMZZnnJw6ya99Y3BTcfpAF56FmXrfsWPcDRLM89PdxB6rmvCPpM5rQ4aJN4hQ7h8j92hEJd7YAnuf6",
  "key36": "3ZKJYak9Gz3QPVsDyd8fQnhYf7mxLk1Tq9yF5MJ9VzGDZPk1NrbopvraEnFUThj35hFi1m9BHc4FyfBAoEZRq6ey",
  "key37": "4JCwF96AvjQaQ7uEi64D189fNYWfqLiwawoBbWA6AeH8ZChEMUobSwX4dCWYCSUKnipPj29uNb2kwewgqoHS7rPm",
  "key38": "bnL5q89BiGzv8DnL5i3fD3q9VXYqLfMgDXYzumGS59m2wr1hcySiv1SR5CLBYfaegiCJ5SCNqvkGn4gUCwXEBHC"
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
