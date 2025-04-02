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
    "2Nweh4DgBQ3SJHDw3bk4UfuQg7Xwm2jUob6AGy9eYbVL68Zui8GD91fGdZuuHFbzhn1wXxxRd7w3vuvj44mWMRai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZhX1FvdBQkFNzU42e7MnCZUfAZBfASgHqrHqUNPwawy6fCwtbePhVskhm6StaMcvRhNQba4GYfUfALfvE8wjjgA",
  "key1": "3H9u4cxJY5xkPwYzSQ6dEQYt2Fm3pX5CMc6cSrax4vg68SERabLKbJJjSaPcPvrTr8HberVmRwMmuzqA7hqS3xnw",
  "key2": "2StfAu8udXox2qRHyJtxu9ywwZHU6td8iLEspatPvjhcZJJUaw7CrTwrzKr1WQwdXD1i7xvsRGydg3yZcPkEDPiF",
  "key3": "5ejJ6cMPNgbrF2ADcqKPGXiAJDSjDqTR4XZRTURrPuBhzj2yhQVjCyuwbUwxBg1J6TmoX2cgKL3UJcgrwXHk35jy",
  "key4": "2yGsUNWebGCrzXT5St5uYZFCCszN9fRPdBSb6tRY6TYSha8gQacpKQLTfKzfygWvpwa7RsP6A4ahQBy9U9k7EK9u",
  "key5": "kMjPC2JYsJ6cgFtqS2Qtq4tUqgaojrWzmJjqCE7bHg7JEhwWCL2eV9xhPSx2ZPuqBefMsTiwDZ6QdW3eYKs9W9L",
  "key6": "3gbscWS4XQDMmhjsJUs1DeH6CZspjqV47nYut8CYzgAs7F8rKPY667Mau1hcyWGqoFEK3mPG569b4Aoqmnuc4CMX",
  "key7": "3agBKtfPswTCymUsbaKzVmnvAtgqMHyK8F3wS7o4su7LZzjXLZ4jMYqjTmTKZi5riDMhBKh6sjzSnnuQ1bUCxBC3",
  "key8": "2JJu2EBexthZUfc6EnwsyU7E5qZ7o8hKCuGihdAs2neAkviHjMXHRZJutsgJaz2vYKtmCn7v9vgjx6HjveKQJyHw",
  "key9": "5yHY3zMgAKQfJejdC2o7LZF8Ust29qSEmBwSRxKQ9Wk66Jc4G4mKChyf58hgpLo6XjU9pkHKaPYyxFVz8RabuZuA",
  "key10": "2okCvHLxUmSQ6rcyJcXN57L8dgcA3DaeWyNxDbYDpNeFPiRi5BoJtk7M5JyUR2QUvgcLvtk4cgwkYuMkmMAaqdxJ",
  "key11": "5KoqqSSvz9YqKM4gA8rCcZ5gdU4pVGUjmTQzyMhdMW2tta1wXsFyingstZffUfMTMDeS4F7EF7XzErSgLUV52Cng",
  "key12": "62LxkqKk5ZMnRE6qwWju7e1hiZkeP1ACSv6mvJpsZ972d9Tbq6ucsATjijZN4Y5DschgzFACjuhmXAPuEGh1N6wC",
  "key13": "52LJHSDekreu7cQazrXJ5EufFYsen9vXUEvSChAj75FkNi74QUbYHLvdZLSNVDES38Ag4JYJAdtJ5tFcbbX26rN8",
  "key14": "4Qh3oy7KZyWqkaz91S98iQXxGy7dAH77ByaiBszV24Vkdp1fLaBP4THi5aQmtKZJEJt7iqeonecgyDincLkS1aHD",
  "key15": "2TgRb6shPMsyznYz2mr617aHVGh6vGJymuenmLNFVmjS4RQopoPK9LKsSAEPziqwFHHw68sDhqYzzFKEsR1QD9Bn",
  "key16": "5Jjv9266e8CGwL8eJc5sXgwGaqg6Bt12ZssPsEoMs8JQFqAYSocPDMEBJvzMQ871b9cWkkij4WJVXNnEtazNE1iT",
  "key17": "4Yv1xZnfu1bSwJjJ8G8AHsEM6wTBCvo7ERLw8tmc3TY7w6fygMyqi4sCsM2BvmsjrEzMu8bRdGg7c8YfMBz6bB7D",
  "key18": "4NJseHQQFZGnz3qxTW8qmGsLmDV2KuqdXpTMcyWiCW9CPhUuAZEFrtrZysMJBWtNCCktyDBd695sq1WaqXR9nyaY",
  "key19": "3PXWkgZa7Uqh5NRjd5DPjNapxZSjDZs8Q5LTtdGobwHukLg7ea27eeSonXtG6Tt2eiCt587GXa5PJPtmwXgfW6Ka",
  "key20": "5K5Axo6PXqUX3vd5vCxLBacGcRKKREQxPNnaUKvoH4k3pF7FtGMf5S3uz87CbCfjMUsUe3PqRZFGvEkH6Q3u6YQx",
  "key21": "3rxaHrZQzqCg7U2fJp9teBpyYGWvayMiMyuFbsyVodBzvZqDq5xA7365An4X92TyVnjBBnv79N5UeQJmnXLiFcGW",
  "key22": "MZX2xtxXb5bgPN7Cni7KxTqSdeJu6zUF4eNXAPuNNYvKBDhx6HKQ7nBZz6WvB2L5RoH5AzeYokzYmoxWRN4m5tS",
  "key23": "4D9zUgm4Pi2saF3G4e74JV6fwKqXX73e4j8sBR2BDKwzdkg5LnAdsJzjX3Hxw2qnMkavJwHjTsuC46qx99ubQfJt",
  "key24": "3DAVpcfPd7PxNRWZhSp86XwQowUeBPSmwLLUa9wmjHQGfQUq7EMXUBJj4kFu6Gyv47uvLvP5LcHcuZkXwWTQE1Jo",
  "key25": "ksQ3kLFznJK759eREjJZik6Hb3m9M8QaZJQKVR9avuhBLafqNQpsTY7y3iKreqgMztLg9zdcpBHM9qNH6qMCXCT",
  "key26": "TiWNtfXiYLVc72z2pxFicNRwMT7i73jUUXhNfPQChUpqw61YJgnQ81Qx8SdGhby6TYbrDtrzB7PRjNxUzoafpHS",
  "key27": "4jrwixVERAyTA3pLKnHW7DfNeu7oNYFePbfLoxMMKEJFnbJa1mJvwEcQhK9PbqDwyfTjQJy4gSzU1fLQBz3oWf2d",
  "key28": "49zqKkJA7rYbo1rEVNnhfZsLAAYDNeSDcBnaAadE7uY7vtJgU4dxm9S8zm31MqyZE9UhU45VRADaE8USXK6t8djw",
  "key29": "5AVJUjFWexhxHaoRA9f9hEkas8RTPvXFxL2Sox8MXsjQ9cBwb8zMGUqceWMjxHnxSMENXca3rgv4YRwemLUeLtz4",
  "key30": "3R2nn9YxjQWRDjUXLZpe9bNn271ok6aFCsqNcSiWXfhgjvnm5Y5RZZx77t56EKzSreNZCEpXVa5t73DVM8sBKuZc"
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
