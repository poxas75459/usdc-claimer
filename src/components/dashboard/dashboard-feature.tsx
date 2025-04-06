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
    "2Lshgo7Bu7U4UbkXsuh7hXypnwyZH6Li92SpP9hkziyaXfDF2q8xA1rXGKbKD4eBk4BtESbxF97LzKmRDWmEkUHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ScT5gMxn5f8bq3wLFSvaa4RM2f4iXWhHBVSAiEG72CtWu5jxYmFsqBnye9LWQ6MLJpnfrJLfTqn9DmDjUfcjXSm",
  "key1": "22w3LCjg6jkN9Mb8eKnzoJtRNgZc6s13kRJsDyCTbfQT555WHsC9z3GZHQ3YFYXZagj1ZGcKtyjfYvRm5woFxMBN",
  "key2": "4W6SiVR2uMBBjLGTBKfPcNozMutptu7mmr7eYfPcNyXXXDRatMNinL6qbf5xVXgd9rxGV4xMyVRW1HiKoyDHdWxs",
  "key3": "5GWxeZUxuMXZbz42NfbJZWzLydvLb99WQdka5XERvEWnCS3GDZiZL48wZ3z1ogMc7iQkDFxBi6cj7xroEvjiCK5e",
  "key4": "4vYk2qY88SR5Yy7yfkukgbSSJawn72GPddm8VN6Mq5avXLiwzUQRWdXaejraWvDEhktV3bzNry3kjkm3Asoy2kzD",
  "key5": "43a7XY79MLBKpdupwjhowwdB9217ybmUAJU7nTvCZTwZCnZA49D6XjnwXLjtfK2pyciLMYrFeo9g13dNiMhoYcyv",
  "key6": "5zyzcjeCCbVUq6GndyJ5b62yDy6atR4PGttf529PAYXDzS4qXjxaLH3V4oS8gfQ1PTK9H6ee1FrgpSKrjiHgV11f",
  "key7": "4T85gf7KMRZk45seZEPmuQgARh5T4ZBcy2UwhiwxPdfU9ibFkQxQS78v6w9N9pBEfak5Ud5DCJkQMX8TWbJRD5QV",
  "key8": "3GnTAUxTHgNAKWBbNpHQHwQtSjHLjoNVo4AbMqkonfRoKJAchV8pxNj75eCScDkeENRJi4FHB48iuc9FEzZChyaY",
  "key9": "4BUjRHEcTzSCVswmJMGpYMVr8K2xLH9kX1ycbiVFPQC2YpEb3HtKCixf4jN9TLUbP8bD9jxMwXUN266SywP28ZUU",
  "key10": "2FRqXLn1WWiPAyLtjk8ZNJjiZBoa5hNC2nQGuYT1rDjNYrjrddTjf34YkNBMQD3TWPNHAJdU7YELTWDwTXs6HY19",
  "key11": "2LD5Q23HLpG2Havnw8RYox46yxNtrH7P9xBGMuqDMoyP5qMe238azi4nUbHVZZdn9P88ypmckDX1923dy357Ax6q",
  "key12": "4fLpAknetS9Mmwc3oRwGQezNQTFhbiREzHkggBCNv6QYKjjNv29h3cYnoMrUZo2L2r2q4np7EVhm33LjsvQZPETh",
  "key13": "32mKWxxw421iMpQvHEXNkk5jZdaCdEL1gg1vVcPFC6oHmjg7AYUgi5xGjhdN7e1v8nFFGHztkvuwZsJ8nugFR7Cz",
  "key14": "498mteK6gE47vn41LoNNJd6FUuXYna9eujjqpL7f4zRt6kckEp3XEmwbZU5dK4oTDjUjMAwkuasCbbT1wdsTGjjv",
  "key15": "2yD1MM7q5qPUXgy7h4VBgMsE948A74eAQtwFiZ3tvhhkiPLC2bc99N5zFxh7zeDXrcVu2magAMmCp5h2w4AtJwk8",
  "key16": "5DxhoVx9G1fNaxiGNrzZFFzx39RTWw5Zd4sGuGoQJRxfC7kgPJjMUTkxSnF2DvSFQnMqGdcDeeD1k3NT9i4U565R",
  "key17": "hBrNfjE5uQCoyiz5wNV7zmYeQnGAbq5LMGp7C6aUr2323Xnuh7LDaLE3pvhY2nsx8NHgFqCm926BYJymnhSGUCy",
  "key18": "596oMJpBnwrxWiykyxmcVSWnkhqnzwHMwTdQNqWA1bpGPNoS5r4YbMjdQ7xzpAWi9UBvRrZvnhxmkv6q6T1NLqWx",
  "key19": "Ke4DExJ6M1H2AHewbiCvUYbF8t8gY3JxLNZLquFQ8vgQUhPxHgd6wrDThbmXiB5FigenXdpJevRgP227LtxBvEU",
  "key20": "55R4dXAmdrrSrhGnH9jH2VAfEejTuFrgN5UtoBrujjkQntFVkMsm5SndbYVM3N6cgnans4pZczgUDnGRkK4djfa4",
  "key21": "2M19a6HptKu95WroG5Y47DSuNMVcp11Q4UkwGHSpaA3PJt33gdzU2krkXjvmyjj2LMNTDYBTwgd5sQnhBFa58Zke",
  "key22": "2LM9dS9tU6BAxbBK9w6bQSUMfPysanAsSPD22HNk6jHMKqenbWzghnyJx9bLuB9JUeprwJrntF2iLnGdFsDPzxw2",
  "key23": "2LYAQfh8iEMqDWM1NhepKvAdFTvkpaGQQFXA2EyU7ghbv4jA6at9trKYgqvY2wYdL4x4dVXrxKbghwoLzkV5bkSX",
  "key24": "3uek56ev2dQwfaAeQCXbSZ4p9TVFsEmA5QKyvqyiMHvTQz2KqVvaD83n19oNy6KfYcZdp9thVroS7koH6mme2Wqn",
  "key25": "uuTUDLqHtujJFErjsqu3xvPrDvrohYzB6prof5YQGxBFAsWrNC9LVnR7kB8rCGceFCQNWhkFXwa4w5ABuhGLAB7",
  "key26": "2qNG9Kn7MuFDcoWaZqKhXRw86JiZXAUtAqf9jLdWrK1qwf6C3JcVbEUQPq1HAViL8dtvZhvwYV6tqDwjUFxDQQNd"
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
