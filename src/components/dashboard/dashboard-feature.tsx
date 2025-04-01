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
    "57wnGRPABEXhCoZJ9pqDr1dAT9n8DgZrJoV2XeokxEcgDA3KPQQbyN3r3nBLUqk5XLQ6zygSweV7E69zyELGgLEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GAD61Zv5TwFMkxB7iiqJBM5LPLvyRf4hYWyJX4HZiUMmjAEtuqiCYyVtYuvm5d9YNLRZ9J525mdVaZEi5W2pYiF",
  "key1": "7FA7MZNAxVEJS7SpoB8hDHjdkWoYEUrwTzbjk472C5MVFWiE8MUxaT7ET5ct3aiq9Fyauw8dk16CwuJ6MG5YhWF",
  "key2": "3m7ACxtwWXUBciEa88BwocUN3ncJB6ocJNSGNUpP1xwD8Zp1tahYtau31QQrgQUGbXxkWspBSbSbk6QwQqM2BKy1",
  "key3": "2wBzq8VvuSivJc7gTq3BdXCXiPBs5pTHUQEMcd9wsJc8EbTQ9Afvy5Ri2YLUZxLCVDxDdAQkH9nN1rQW1D3ar8cm",
  "key4": "5Bi12cjwjE2qnnhgdv5UCxkFQmFPRt91FzWVH7iv3ddijb9bHNi97hxHmNRxPHxzc27FXNHt9Pfae5wRrme8N6bu",
  "key5": "2wsvkZaZXLNhEyKgSbNFJ4ZeifQwZNMQWSzy6mT5TD6ESFqoNCHVSeqAufnAqGJVfm8qc9gxir5nd8KjubpfUFkM",
  "key6": "5xegxL9w1Mp32be2dLzbiikJje1N9GVAwiWUw6X7P7o8RMP9S6yGpBzYKNGMbr6v8D8qa8XcW6y7dzcQ3Gp9A77y",
  "key7": "595nQ9Jt6AMPzrMJq7TJRh92hc3axyL8iA4quJZZfPoUBuPFmQ9LVsYXxWduugBtw2EAX8uptCZpf2k3ZJ9JXA2P",
  "key8": "prK1NjAuqiPbpJzGZJZyRS83B1377BVBNQBcbcSCKzzuWBNuLXpwS5gYE76F6tTF7YcXbikaqPqDFrRz8KPuH2b",
  "key9": "4tWsakxZPmz89NH3h9W3HuiXmQLrffKWrkxPfiZrXQFQK5ZJWZ7LXKoFQuxiHkGkDNXH4c63Q3gGba7swNcJtr8F",
  "key10": "YQ7FUwY2Y9rXP3ivLTEkVv52FBKUcByaNMVYcb1tMZPmVYzwuw1eDTwNvfuEB6zh5DP39BmTub8Nvs4nF9Xq7Lg",
  "key11": "4LSciYGcgqEnNi6me5b3shAyC5tjnw49WrcSJohbCSKERhnTjRuYAjMDhqb2ig1RQjinjNMhhZnnCWH6X345rX4M",
  "key12": "4wK3499VGbHJHHZw1YgnRwnTBEDyH79vWDELmFf7FFRpwpQZZU22Y8qvwd6XzXB7NgKrGNnsPjdKbWtsQxR7A9ZS",
  "key13": "5r2gWaaUxuMEe36BW1b9KPo3pW2fKBkK6nPiiLibJToBhqGhyQNRFASCK3yGhrkKvyZ1iFQRpW2gMwWyS3dYx5c8",
  "key14": "352YWifFvpKoE4WWDgT6LDVc31vCDT9f4RACH8aJwx3YxJeudgGurtLq8XE7oNgEyAubPL1s2DUbjhX661nZPMLJ",
  "key15": "3s1d6Le7ACJATiFABoE2RXdaujXh6ZdmGctgoBdfZhb7t6XUvLEetxyWKkYH8wW78z5jZ9M7N4RjXsxbAnNNWWEU",
  "key16": "4TzWemu7wBMEgrEFTUKFdKT7nTyrPRU62akWqKTe8MuKfhxz8NLpheFokMD6yW7thYg2WtjnVPJw1Ku8QSAVDSod",
  "key17": "WWdUmG1FRzoe371TtgidBsgv738oaCnCjQBokZF7qSTievvL8yo8vQc7y8iB3zhLk8KJtRYyF8dqxb6y2wZT4iu",
  "key18": "3FMKzWXFYmCh9orxq592usHDrJ3H8sBXQJwBNNV3JipTAxGBFLF8G139rx9VhrXTn8zpUfwvWDdkaGDVigXNJBA6",
  "key19": "bQmTRCA1ZKa2qHjm7TbMqWFnKayFzcwEAYokgwBgvye67L11mKUuWutwxhiqNxdfomWHSj3bcB3K7aitws6URCK",
  "key20": "3ZxZn6SUubsXYAbKN3TGPTGAkfG9qo6L9Yp4LxVfswE9mEiEo3kp2Xq1619GVBqV7PAif6xErd5u74aMKypEaoSo",
  "key21": "3AUMJTDyZeCoFaKaZZdv4vVEXx7bYMXMo3m26wHGERsBPvWY58feAvJt3HqsrXbSStiLE6YDZA1tjXxoHFwA8dBg",
  "key22": "S28zo7a2ECVHZhU4GNfzLZDBH6wboCZn6ooM8rBhAtXxxZ42rA1qdnQadmtRZwfRezmnj6S9ju6orDKgXjfSJr1",
  "key23": "3T7DGvQW6FjZGbjWypsrvyw2A3PnEEm7RiVN55JzZAMQ3S3zoLqpsN58oxDmRbR4JYB3y8nNd4X3Do9d9mvshMkn",
  "key24": "2Vom8WqAE9EtBPpWxGmyB1UVF5DEX5Cy2t9Ne2R3wGmm1hE7bgJL1JRYmqVxtDh1uYbDbtSXMqzuU2iHimpPUHRy",
  "key25": "2hnmPUXCFwefQCetu1rWLQ91GUShTu4aKwwi4Yy4VHbdDhMp6edwxV8WJWKn4omeDzjGe2vY37YmbCB7RV9eSz4r",
  "key26": "5PNtiLE61LkrZspw5CQbJgy7czk8LktWGSrNypUje4xXG8vXEZDiUUUoiBzrLazMEaK5nPGNUg5cGcwMSHTZ9Uqw",
  "key27": "2wgxbRmZfHF78dhNL2c6aGiRai4ydAhbQvcxmxvFaPr5mHzurwxPh8QsMU6FQ9hLx2gaaTE829mvwqwfBNe5cvx9",
  "key28": "4u53ahfwhx58WsmRMDAGWjZsYNkUi5SrdXK6emJbtHRRGDjg6QYNjoc2jbjhmaKwqyy2pUxUh5dLz2Ta6aZRjDVC",
  "key29": "GBv25ztS9MGFNyuZAA5PVcN9fpDYipquC1ioXsQFEq4W9jFwMwSfNT8NTkzv3av8bWYzkkvDs1cnWFEPG6Uvwjq",
  "key30": "5wBgFhBeXTV5bXYtkfDCpxAVM1NJFMnd78HZekvzXdPAYNjia9mqgJwyq1P18Guweajvp8UAWVGvEh6PcJDZ3Qeu",
  "key31": "4ZGyaJUAFR3NQwbM25MfXvuqih3wzB8NmGWdatX9npAFgoyZHPHV26KMWtgsAJbJTacNNY6NybrXEGN3FM2gDqyC",
  "key32": "5dJ7KSBnzhVCiYPD69LJqLdjgUemPszg23Pu94WVUahRBoweC91JGRZ15p5Qtm1UwVjfBsgQTUunpzgEtCo8dLv5"
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
