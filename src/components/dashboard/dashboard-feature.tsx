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
    "5hK1CHYuPQ5Ui1sX77S3dbnHbt7V7HtdiCSBGvhpstVX4uCFFtV48qqwPcXjZh7sWg1wrPpdgNyFSUqufLt2FHxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TdpB7EXz2aTrAthL5rD9iffrdctw7UEraBM4hGDeYpKuE5VpVruknyReHfFQZ3okEYRXDFtL3fdEgm5i1cvRUAd",
  "key1": "2f4rbMTzQ7W9n1pws3bN4WoUzyDzuUDetjFWMzZnLvevvNoL3MEZrxbt7UvWfNg87Sa2yZXpT5ncF5PwgZEGGuiu",
  "key2": "4huAVs3SvVxmwWghjd4cFpUpd9gzvXYvdNqgwJYHHaX1fhcEwnwoAmBjbsB5DcPNZAJxFn9NcwAP7B49ToRGMbWA",
  "key3": "4g1JVwTZToPVHXH5M4xVcYPHJt2h78Wea1ZjXudEDDEC1cY42g9bvq7vjrBfUSv6sBjFEzqqS8V7C7ie7JttduSH",
  "key4": "4dg8MzngCvJW93jUprBoiArqE5jhfCNsEwQa1BSmqN6DSNkNxt2Fhwmr8zAh3VYur3nYNREFRJpfukhx5Dng783c",
  "key5": "2SCNLgeEZiJs68zUGYd1ysdrLeAatLNH2YKngrDKGa62Ks45kmrGwmzNHQEfX2p7xM1tjeeU5oTFc2SHgUWYXHeS",
  "key6": "3obTAoeafjq7VNk5L6eS4fxkJ841YtpJvap3NEdx1PxsQ3YKTbwS8BsAyxRnM5F6yxWBxpaT3tFK21xotT9mELfm",
  "key7": "3zHr3amc8bdcM1HVWckViB9EzWqWHK46R1gZAssxPjkTk3N5t7H5mLaek697vn673rarSaXnaTcFZHm7hVvN3w3p",
  "key8": "5nQdj7Sd2YNNfXtGeccfeQ7c7zugkQsEoVQz8MTNj8GF69ARfmmCYQNeuYxP4pT28HQ9TXWmXQa99cJRUtiTz3mz",
  "key9": "mZe54qwVHqgHjDWmw6jiTGmJSMdYx1ZgbBwN3oCSBYWF6JtwKZH2WwFQoRU796rykMrkrr5bUtCnrkPsMeEEPG8",
  "key10": "51ayZrLUnoSb6C1etCis4xirrNA5RF8aNaL8KyjZpAqXR9KTuKwfhVnkDMMYULR8veTbTB77gHQ9ASCcUkQZTp8",
  "key11": "3eBcNAG7ZLtFAQxhqYYedQ8oHUwe2CQTyYpdLrsKBCHgS3G6bpbvVMZy9AyofiZU6sGmTFn2YEcmzDofZUyw7Uyh",
  "key12": "4HSVdi7FPTkPM7BR82nzCvz4cy3bCyBhezSieRhAWeL3b9Hv4RxhhwvwEd1ikShe6Q7XgCWkos7a7aFyyzPpvd66",
  "key13": "3i7VR2CpyfD8JS8hbJh1CYeFXSmU6Wu9cKpkwaMGpdocVf8ucwTceNEPnZLRoL6MxaHXb5vuSyTppLE4JB5ezGNi",
  "key14": "3B6UMy4f1W3v2ptG2c48SBLZK9oQjS91MfhZyHs8svbA1PzEPYmkrT5C4S3BXkS8njr3VVxeqYZm6SRNCTWrPiv6",
  "key15": "3goeLNxuN2aqFA1TYLxujxmiSkKmxf6oAX2BzT2pef6YGkt2Wj3RqsDVDdwcvayehoo8TUNqpZvSmhtYX6yWEG1s",
  "key16": "hsBmmW5kLCacRLAkqw7zGwKvf3tTETVbUpREbN43yzDseTLGQcZ8RHY7YaSnydp66KFdNuy8BJmX5av8rVpTwvp",
  "key17": "5PufhVsrCxkLKiFsdJgRyMR4Pi5jnFWpCKfvGD8jc8ikMYaDG3ATMnFUtXYjLVeKGyWPq6dUtXqQt1WXVuesUVPp",
  "key18": "2jFqWvAhUHG5gau13GXrQHt5LQjCPRq5TB5xAi8Vqm3LEBE19bh8d34m9G697Vv1YzARvvNMYqnYwHvkJMrdSwhf",
  "key19": "2LFsp89ZfH5opce9uQbwdM8MrJ2zbBEyKoWVG8AQQfCRWNyHgpwkWrwUkYMzEq4fUY3NYx6cP2y65RLEmvkjCWGt",
  "key20": "54u9aoMU8pu452hTpgSh1YGWJwfCPQaEvjdg5fRbgrDehZ7igsm3qv3Cq8LWx5jGNJ7vjadBFSU9ujQdxY6ugU4y",
  "key21": "4AWHQr79Z1vQhM7r2SWyzzGwTBfYau5oArYSkgZ36PattMKySrGi7Bzec4bUcNTDXKzEwoAujbFhzggGqjohirUw",
  "key22": "4nhNxdCsoYd3GWtxdAPBa1s7F7ZWMBVqpzam6jbNLfr1of5eytS3tj5LZ3GsW5e7MgCgioHSo5KirnEV2WusTzmZ",
  "key23": "2uxgBRvasZVmjvTvikhUCJwcFsyr3T6HB3X1WJACtg35qZcJFCe6hoDjdVduPGRNXmCkDrtVsMeKShicinnnL31f",
  "key24": "22RogCGRpdNVcNuR52u78QPpqdVm4wC7czHCXJA1jDKfuAZipQY37bzhqHP5J1VdM8WrQ88LNfwnKYohU4q7t85t",
  "key25": "G3kjFZW7ipxwZs9dekiy1xQy2gmx6vbd53waTU2Qbdvjg1gB3rs9aS7bqaxBfURvAMgcbdoECpGUPoosw8Mmr1P",
  "key26": "2vkUc9kCfQZjbEnqMYSC7Zu1mBju81GLrFYuiQsnLGXr4w2zfcDQF8MnzDt8kjegBgnDmTM1Ypt8LxFBUqmq7iPB",
  "key27": "5q4KV3kvhzwWsPsTGrtXqcDFJrasPnax8RvDT4WFrMBvTuW8soC2vEjPNnXsarx4hyDDfzNUXFnY1e5tUNrzjzQa",
  "key28": "314vxh9sF7eNtLKzLZJQ3wyCUdTsHtSTnBYEbRg6EgwJDfK7NQfiCP6u1ZxFUvcMDdYHChEX39gyuBHdqD2qNp7g",
  "key29": "FdS878m7uNBm8xmDMv8MbFnhthBumR7SUweXXq94YiPrgznX9DLSBuTaoGpYSdM7XS79Dc7yzqW4uLf2sTC2Fvg"
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
