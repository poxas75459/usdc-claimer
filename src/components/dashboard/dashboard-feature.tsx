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
    "522AhAysxaSdBCKcd9gHt8xpMzaG8r3kLYQpdTSuMgMF6KmcZWf18U4Sjfjx45DkT1zhxE5Jtmmpyj3haTW2fQtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dP8AN1QHegq1NE7f73ZTGV4YjCT4qpYMaHtDstJD7hqVuyxktBJ5ZDiFAQdsEBxvfj3UHgPaHgFsTZ4qykXq7Tk",
  "key1": "2AFcpSQ4xcCaQWHKkMvrrN2tRb6jLXCzsmiJPQPRv7LRMDYc5zE2nFHNyC6RrBoBMiGXBQDVZUzQrcG61MQDkKWM",
  "key2": "5erWffHQz38FFfXHNy2QEd1BSWz4ivtiQqzatrQhXoV4vHjvqifqFTrGoW2rRs9xtTMFsxbkvJdKFJxTCDiJfB3J",
  "key3": "2KhMLk979Hb6DBwq9mVNwJ2HPJKFj18WaTA5qzCBirnUFC8msz8jWJFobwDHEkK7TRKgiuauWpBJvDFcwU2ikYiB",
  "key4": "5Eunai4WfJDYPZyAspJcLRqSPyhj5pFEZkLwXtxFpkND5Zoq3LdFMZMH4pGjGHNXzpi4R9qUPqYFW4KDda47PRYd",
  "key5": "dmZjVkfvd3PnM8N2XkDJwnLFCV4Sh87yz6xvfEepjEaw4wBp9mzfR4VbZ6QBUDzWzZWJhxc5i8U4CQzkTHRViZ3",
  "key6": "53bk3vjkMkejxv4foNBDdPyB6BMSvQ9nSWsCtazk15iiTsMXdhQdNSiwCTYgLd22aFMUWRwz5Qi83x3mkWzqy3Xf",
  "key7": "5PUJXSZ2Hk6czwnY2D3JyCExi8fD8H3oMvwmuCrFPa83YEnab62BYSzyCAsyjVqwEwsVfZ88LVD3d2qovH3nqwKG",
  "key8": "AC9BcMVoJbDqtZ7Y7VT22BGxEk1GqmdgA5BFKAeFZxCKd7351LNuHYynDyAE1rt4AgkLVyiF7RNrX5NBaHwS5aE",
  "key9": "5wSxUrM1qBTfNRvapbMxs1j6hMvNWt4ACZFDrtnRwKGMRgE9JcB4rxVyQkw9CKzaKeAmHLt3zXP71fxHHyurTHoX",
  "key10": "4cKZWz6M8g7tqy1wkZZSs8kDfcBGcMprn4y68dVKivL8Chyi6pbFj7XN6U9MxWCMMjfxQo9s8PuXVVXsTeWtyjDK",
  "key11": "4YoawG1Xg9xcQGDXwiJHVptSFDYU2HuggqoojwNVGbgKjWKmwMz88RcHzSkVRGHRJ1mNBhzBzYzUQne69xezK5Ya",
  "key12": "ERGhbuyZpWo1Q6gHeXt7gQXt3Gi73pU7pywd8cCB6gbqS9dBfnJ6EHZp657MDbrRZFeH3CGaJYZ1Ri22bqYhU1u",
  "key13": "2hA3GFZj1H8cfjyNPJK3mvi9f362ZTkxJgAg8QeBriTVZFzKvw2wTMsCxHHTYjUGUPpNQeFkrRMGiSxP8L8Aj3G2",
  "key14": "5jxSNmb3kLWcm8osMgjDuaHBW5Qn37S8xq6DBB2Q3D64s1TkerBHjXnWoAEuosVRG8dQdsSb28tvVY2hxE66yK8u",
  "key15": "4ndyuW33RCFZV6Sq4vpGKCeXwzupzaQ8f3VPmnXRsSWTyXzMzhQ71aXMcTUp2Y2vFRb3PmupBp86Uh8yjdjjiJzt",
  "key16": "3wK7WHviL4Qoi6UYdGacFKNxNAmYXeuaczoBBPdZRNC9nH2oPrwymCuRNL2grEj7wScUe5XoeNe5vHXMtmUWq9Wy",
  "key17": "59ByLRsNoiKwJ1meVTa9hgrYmYXPK9Xt9dSj9JUKgBYjadxVkoLUT8vFH9BzsVUibj6EwQHwR7YSYXCT8i3MJPF8",
  "key18": "CFtBpMMPzofjAaiVxRaLDE4q6tpa2GkSfzdrzE2EGfaVA6PZcuqd1nFonZmQiydDj9s5LWSkVfxz9cQAdAL8FfV",
  "key19": "2MornsXpFpLpdxwDpGsDZHF1riRe5h5ecQ8NNrvEesCdyEUxsqc9CLz1PAjEk7ZTudUZRNietRN5UDm4fb8NUDax",
  "key20": "3iDFoAuFZAN1E3V1wbCqnbEyJ4CAcBvNFcmhmYpQJuGrke3z4nT8wTMCq9V8Hxq9hsRjk8hhg5xCDqiEnXx61mkV",
  "key21": "5GTdqUW3wBhYxtR3ihoMDWYnFkZEZUTrMn1B6YMHcgZJvbiqJYvVLm4WwD1k4aNJsyRgPArAhPBbrCn3GeoNMM4H",
  "key22": "dzL5ABWH6u8zZq7WPtHnLdWExKBXGD3rb5NmoV5MR9uchzq5U7oQ661wqkszWzf9GQv4CJUrnS2BrHGj5chMZAF",
  "key23": "zKTC5pzuU8BhNvTRCkEDYKu4jbQTqzQyLQZf6UwJXCGDzEggiVQNq7pyytQpxxe8BoNU57vL5JfsebHW58kD3zP",
  "key24": "2bvncwGbpVk2ednWTX2c1zwe77aY4GNpHziWHmb9NQBq7ZkNb48hzZ5hBVgo5ckkmCB6MjcVTcZChHUcf1BD2Uvq",
  "key25": "4wXcG9Uxmqto3aRfgd7j7iPyqxcTVPruZez9C2TDGDsVajEserfKuwrC7DWYh5E5ytwUfQSnwDRZrmUHBHGUQF57",
  "key26": "Y24d6yi63nzonaUP8g25mjPjRM37231gEsff6m3TW9sz3fCi2mftMd3hS4pKRZti11EaAgqEQHa5cpQiQ1zk11H",
  "key27": "2Tn84f7ZvR1yajD67i6WuCtuJiZjfSDFe6NnNs2VUoqrhRZRuBhSuNad37eeRABbK9uKLPnFMEtsMURWxCjRsKJN",
  "key28": "2AEBv1NbQPJEE3D4JnNm5GD4AVDgDJcYMAewJngZ8fG7wrtxfxkiJRMwABUfmQZQaah967ZusevEkBd45xpeh8JU",
  "key29": "4EMzrCuQpPFSMFmQa3ZBgV7UR6qptNnKWGujqLA64aFq5PbZbzSYtXv11onetvRnUzr6ALci37gyGd6jjiWq5j8B",
  "key30": "2Eh2b3eSKTzBfjvVaMBYnoUb2Q3iC8mdyhXj9ZKK6oJfVSqjjStK2mZXfmfjmywxVfEEBJryAr9doE18YMaL3wtk",
  "key31": "9SwGBaGDao5FeTChwCiKLhQvbY4nwKREsDz2QTsmAqTKQMGw8bb7eUrkwQMUJX5dQaCmi9HiSzQFVrMVKtz3XCK",
  "key32": "2w2HBTVgNz4vKMGfRskrpfivwRmxUQVqQAKxFyjtc6TW2CvTiB1bwA55EpzXWZ6kMf6gccwDVUzEg32wniLFSLqN",
  "key33": "5NGMW4Wp2x8wFyJLWjwvPgTuwu35zxFV4gLP7LBwejCYpKKyWRQ379z9kzSxVQvnroeDGtcb2bm9uLNmWvDjNkzu",
  "key34": "MM1auoVb223aj69wt7oN396kRkSqMhBNFVkvBkeauV2rSvMKNPyTj7KwA52Gu9nsQMYsBUugD7eD1SCd15GjDGt",
  "key35": "2eTaywAWJMKpcAkt6uQc4uoydDSGb2dDNzgUxjKAg54W3G6pHvJxbvqnqAdjEhtBvUt83VhtXtq6mge6VzMUmxUK",
  "key36": "5nTgoPDWYknzrHDEasidBdqVj5N6B4s7omXgmBjRuJPmLowGcp7JYxKUii8QxSW6F9DjnwFMGd4956YmZm65ZKe8",
  "key37": "4qx54wauhYQCZuqNN2QDLrWf6H9ME6LDhSkjtKEYcsMtXXWwUNEYQXMSffaFWUGJyVVVwD7TBQD6PGeDdNRv79fr"
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
