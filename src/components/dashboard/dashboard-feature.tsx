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
    "5YcKJLonNNpRjst64H91e1JZhequTMyzTQ9YJX3R4eJrePECMYdvyTWpa3XbF6Vs7jnNdkuoWpurcgPA4Wxxjsyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ELLdajgcqhM5QFoGYnsBoWQboLTCmQgCK88wZTfhaeXa7URwHgsaX659FA6Yj5HXNm73oGPW9A3DJVYkxooUj4t",
  "key1": "53yaEYtfA8vACzgVepZQigMFf4BNQSe8RATShDizWomB5qPAFmU95o89AAZidim1LW2fgAbfWu6X1VX78W8SjGvo",
  "key2": "5Ad68C8C7ciUGvg9pGkbQX1DEobWnQQGY9bYFXrHgnHtvVgorDXKiEfRDqQLyDBfrBwfJtZ6LKLowLWekcCL8gGz",
  "key3": "3EgEBAHzaoK5btX6FC3h9bjd14JGdX6tZ7icMzK1n5xtjt1o9FDYFF53YLW5z6N5izVQL2BpFMt7jJYs9UtisQqo",
  "key4": "5k14dFMQ3PhutzvWsu8eA4VouA2DJfSUhFx619mV3zuYaxtWxcX4gqpgWV5LtaNto54FwyYszNPrdAqtiAdN3eyP",
  "key5": "66prVfoEwPfpfZ3DtXbgVMFz3rdbRAhVi38DLb5mZnqiw5EbMFWr3Ya2hKhsC8wu49qAnQMvfcchiKi54WgxJJix",
  "key6": "5FqTrPcLATa421gThQeMf9yS1RdaBa7cn21uPA825hWR5skgin9x861o1nVzvqdhCyCiPqiFsooJYjtdQpjuJytg",
  "key7": "38fCB3hfavcD956gsXpm2KmY4vAP38EFtvLhqkwr1jBnNevhSjuyM7rn4eQibo5ZWkBbvSSnciCTjLqWQBeJDmFi",
  "key8": "XefipfARzXqK1FEZX2UKzqmC3nnMsyZjtNLxWKpSEFDs4iAmYyrsmpf2YUW4VXyMQZs1YUpXdKcSLQwNHGz2Zts",
  "key9": "4pdqDJZX1YbXSqff9j8G9D5d16naxDNQQjVnKr7W2vcMrCTVVB7DTJbhpCgauQyTJXbeLV4Uze2kMp75BouPsb8U",
  "key10": "2gLmXjxoh9UK8HiZw13Bar8zct4frk3jiEB2TGPsL4Wcm4TShsTwmPP7cGrm6AUj6GVqgfpKsf596h17DTTyatus",
  "key11": "4KcMw8bHxntsqfYeyEKanRRnmbaEAusky7K6E9u5zbGiQ4FCQFNwNBW1GTYg8muPVtvTqhFd6tNh9iz6nMA4Zta8",
  "key12": "362Kud1phGsZmUT9jU7Zy5kwr7wLqXFp8cKNUUUo8QmgdvgPkELg5pAtxVWEu9nMEFDm1Ac6diUHoyomVkPkMjH9",
  "key13": "2MPRRxMVXmhbhrRmwFFsCuiWZeJ2TtwKcCV3AAQJ3V1hHzQ28qLGN8bxn2KCB7nMRsExBZ5ZzrkcvQc7EZV1rrYH",
  "key14": "FAASWHMkhp5gTk1RmLSsDhKHunrBuAkAD8irV2Vn3VUPRAeDiygohp87RGBUQtRUCcWfPN9e3WntUjqkmG4vYyJ",
  "key15": "4fAJGjDrmS3AiXQNwm4pShqZ6FiPySgHo2MuoSdTr7x4aTpg9dgv1dCQXWAjcxqpnEP7kStwNnNZW6e51jSi6HCk",
  "key16": "4HkZEguqAC6Nn46Xh4QoN6QR47hekdkqUtN6gDZxXrnfTxCe3sACrDdhN8UfeBui9L3YKnLe1wDp4ZNHmPqdvs4G",
  "key17": "ZP1nQ3iva7RTHGZ9TwCj9JNqwL9JrXH6nkYf64CpNhnQo6JZfPSWnPMwFdiGpw9PktD83jkg17W1vuBe5yyPw7p",
  "key18": "4FUbGb2kJuu9hAoJd8jEwyVDxVbf13xA9YQ4rnwEzwUkeMpM3k8J1Ynhkd5GimyUYyGrCzFf3SNqvWQxzfDuRRXQ",
  "key19": "tkK1hSKRLLHhMD6XJDb7xcuocQBqxbFqTrFAhVuDyHgyPLpLqtnZvqf4YK54HUxQD3bYFBYstGNQwujdUUvJSJc",
  "key20": "2ZRbehXWuBK9CxvYnPQJosuTGExbRxNHDErjSfk19qJCqrbPaaczJfUuiGzGMKxNM4boiFdqHRD53dRB58sxQoS3",
  "key21": "4UWYaPnsaCAA86izM5TXWheBsDCCQbMRc3wQfbkkB92KHSLLkNmYpA2BaypiwiSgXCDuXJ5D6AJVAP3rVDpgBPgu",
  "key22": "2eukVbnhPkbhBNc4BZ4JdBRUdYernZZnA8fDr1MPFjP1UNu3UwxBQfS2RQD9YPJAX5XbADN9Gi4LbhKjiHtPKSTm",
  "key23": "PRd8kimV7LDdoWdc4xHfh9Q626RD8tTvnk8crYKjzreFb2d7eApv98Jd8rm9fGQcyznPEzhw9FoohzwRay1akBz",
  "key24": "4cFf6HJBEujrvM2kPfypJV67qtnVsSNSinTfmSJRY3nzszdtzAbBPxGwWbMssCxnNBBm4a5tyW9RpUBuzMRWaoJi",
  "key25": "5WM7Esbs22bjYtJS2DpxKAsjvzX8bmoWvvtBVLu8e98ikE9mhYnd5hXRwc4LEFPwJ3PAkioWZmgmVQ3w3yE5EZqo",
  "key26": "1hRVd3cz4x25NcrEToLUT7XsB1qLKb3TbmRMKCQGjQ3C6osJXXLQnWR4vE5kSgKuKbgZBYzWwdkdSWMGuC61zFr",
  "key27": "Qr3vQU5pbH6yBmEpuLwXzin6ygJ7oRRH1L3s2wMhMR1LNgJbva6fKyGL23GEt4SDCSXVb9aFMUq6bEujJq5NoPz"
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
