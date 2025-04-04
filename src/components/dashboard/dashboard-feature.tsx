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
    "4LA8nEcYsCjLhaHV1KNK1pB3M8pcY2Bma8Uj3LkhB3JWpoXyitDMSpNpYuACoRrLG2iBFgG7kJGWHmk5EmpaGtMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hcSmJDk8TVhWdJWQjs5BkZvU6Dm79RHrc72o3N8yEDnwQE2X5tEs4EZJUWksFhHwmrCvDhtWyMkVgwkPwSsYb54",
  "key1": "2CPWHYMuFHR8ErN3buRTdtmnoBiXsUj7kLXiMj4TAshEQTyfRoD7eRveSdHrg9K93j9d2ovGQf2FsmdLNyYDgKzW",
  "key2": "5S2fEKcweWnsFDGbmQNy8MYmsktGaU8JwXkH3TkrEfkxbinfjDDhKecnaEyckdQb7YTzTzK9tWMDsLYJwJriSViv",
  "key3": "2dGeZ1pcu5HZVkwaCUJCzt3cnUQzJtje48K8oM8SFH672XsEYE2LH3sz4sVkS55YEURE9iQiTuGcb4fuBfd2ChZe",
  "key4": "2wJFSN5H86t7a7rD82msD9G71JReFGj5QZ6gQmQwqGASTWwnqq4ZuJtfdWcgnvmRVH2vpdVB5EDEj24visJX4aiP",
  "key5": "AMSym7zXGBvF5L8uQUgqAM4VovZQWqPtto1uG5eRTaTVD5JxoyUyawQKHrv2B6ftQt3hH9qF4SM6hP2KhXJSvaa",
  "key6": "5En9R5Vqiz9DMiy7Nx4tjYrLA4CrCtmSgM2Vr4GPVk2fJGZjpBY65zkC11QyKUdGg6vgRnkbSjWUmK4mpHrL7QxA",
  "key7": "YYZBsC8Qw98mVPA7Pkh1XPTvhXThr8ydreY5MQgYgAwUvj6iUC7fAZnC3GuGqDGQmoZL4k7spyczWnzatFRwjjd",
  "key8": "27pdqq8Ak9ULmbEN2MYh8AmgdPXp3SoQHJBX97w49UjmJg8LXadS2PPuru9TzA4SdTyeNb3LrayXwoJ6bZFKrKRw",
  "key9": "2W7SDujcCavEMENyB7E6rhNEUFf3kQ3okeBUiCpEzxbXcopN2nmEwmosJ6nAPamJ8Sp12ihgrGUii6XMUFz1bdYS",
  "key10": "4Up6rxiwtd4UgUjKk25PTSp5dvSsGoS3p6ChZyQdRys96EeKSYdknKthL89WofcCsZJd9vx8zfYpCqyZiift3kiJ",
  "key11": "4pRDRJCCVnXZV4qGUDymb9cyTkUHJJknWCFyMtiJhMkzHpviyaUsxSk7Er1LyJJNXPjhsqq8EsDH8wG4EDxdXa5f",
  "key12": "5KxAqUcPo6sBgoiHzBdSZiyvsDYKPUp1cnNH4D4qZnq2PM9Uuh4E6enY74WArtbnjC2SkJeR7yGpGNGW8ZoGxA8W",
  "key13": "o1RHCNRZ9Y4pzS66LnEgduRZWBbXRW5VzEW3as9BMs7wbZuDpaJrJXfiKca7hj4Nzv9ze3TPrcrfzSjnM4vFD6H",
  "key14": "3756t2VmBky4ecP7YyBdzETxUTDmuwV3eES9hkBVqgjdexjzVMF3f1HMZfyYxvk5hyoU1xBwhjGbHfKbCrJUDjEW",
  "key15": "2i6Uz3E31SryYvDNqQ2LwkewxpNbRrrJtJbxFUCgmjmz9AEkkafr3ivA5XRxA9dY2PWoe4k4DNHrJQdsW2TKU3v5",
  "key16": "2qkXaGmp8NdyAUszrFC312Fg9gdQ8ceeupdez1z3C9zu9ihxnXPkEr4cN8GgpE7hCLrFF6nyZzoow2hFNCoGF6i4",
  "key17": "2xLvP3hkE9FtdS4uN2gH6uovUHgx9mDXL6wk4TGV9Y4VKvPxKP1bAZywWGSC9XTHNHfqKEcspQiD5HR7mLeL3JYK",
  "key18": "4EYDg2u95nLJYEWjBynEFrv1hBiEDBaGvV8uQiWYH9zdJ45PCiAzsqFr8Ej5RREok1PerekGurAMjdca89KQ5mEW",
  "key19": "2Fcpuq93jMR8Ts19Gdn2FtQHJGFmQ2wciEGphEWB1Gr36j6mEEytg6o9jsSuvbygTnNResTQmbkbeKAmhL1DdV8S",
  "key20": "5vCwamSh6hKRiorjZHsizLywwiVSJUr74Nje1GeqnmCY7uSMNAvWHkexGd2FZE2sammWEiiWVNA3WTupi6FXJRb2",
  "key21": "417dcEFFWZjKe59Zs5beMv7eemiQ1gfyktdc3AW1wD7RDyRPAiH1yAF6q5FiFKnB6ev8gCKV9gPRoh4raczsE9ZH",
  "key22": "yAE4DiJs5Nkt3jfEsnbM14cK6KF2bdJbuccXzthYcYLTdpMgguaoBAfWW27zNeVLCNmWjxq16kJMzUYUg68YFtk",
  "key23": "3nA9LVznozvy9pArWBxL9uHxfLeGq4oUM4bY8CrjbfxTdF3mhuQ6KmYsV5fFzoZp5HGgs3EEahewwDRq8WUrKBPa",
  "key24": "59PYkdguFsgoVuim1zrfBAdUUGAq9KZrxpzyH1ngitDZPg9K27QhAtJfHHsXvKDg5htcz3jz6Gnbg1ogZQ7oU43i",
  "key25": "5z9A3a1xAGQ2BDxJ338xdu8935PTK1eMVuikvPyDAc3KeRyKvtREuNaFQpDYxHYEPu7YDAucrfQfutcoTUZ4GQ42",
  "key26": "4jtYQtDTCTPkFZvHvXNFmHCinrpVzqAp1iciWiH1vKexRw8RmUf4oPGTaHFTsEx5C1stx9HvRMFcUbEdpYh3PmG3",
  "key27": "3oNfjctrdg38t86e1snex6n8yPBHnkTdp1P593zqicFNMbYCkhuvkZESbPaCZ7B7keXCS3MdbzmAYpbkF1sS2HVh",
  "key28": "3bBjbiDVQpyiWmq4k9BovipXWna5wnN35rni278Sq6aAP3ZXgx8PGq5xFDx2QnR5HEbJ3sAAmpd2f4tbzNwsBHqL",
  "key29": "smD7Nm7sVHc1YsNm46E2vG1o54LU5RtSDNCBjW2tqJTxGCfcrsa83rDXqN3FksDFKX1noZ8duPAtF8qtoZ7RNGr",
  "key30": "3a63RUu8NobUoMZnUs1bFsz3yJmBZ1bxnUuwBJifFfjcdhCg96Ka55onBpyiZt8v4QybvWGUJ1DrZtp11bF7UyAB",
  "key31": "2jmPLzNE9GZNr7y7sDhVrfYFhhHEb8ScATwktKWKbGJoVTBfy9Z8tCkhfjtgZGAEDkALSFXbf9oEH52BKRdhcr4e",
  "key32": "5qp5rB79c3FgS4pvrm3vpDyCjxRoVyrBy3oRj48fWpqGYgkpYeYX8Ewj19w5SUxdBDXbEah7TBkywpSPhv8CkTFu",
  "key33": "59yrXfXn1kSBdYccfRQJmy43EZfvbUUqALk63A296y3hZ1392mk3iVRUfPJqwybqFF1tz9sVzhTdHErnnAEjphcV",
  "key34": "3cEmxPitLzHKkJwChHNT191YpRZHq8fwKb8Xyn9mKcryt1458mXyckaUaBy9pBqcsdVwhmNR85wLbho3zde13TXs"
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
