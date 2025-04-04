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
    "4zDnF3ByYvuLdQtr9o4RpxKwadyPYjBw44G6SpWdQ7jdEq7g7j4cn4zCPGXf6joUqnNqJTmTHhV3gkbdpEJKieQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zSaNcEsVySeC1xYtSVExJSS14oqvXbL58rT9bC3Ep1RomNsZEVShH3haJmpoMGfgtMzcTevbfwdXSxfKhZAJXAF",
  "key1": "4TCS4DiWMRRAimHKnuNbdqWz711woackrUTwYzUp7ihfMvbowUzYjistkXyPhFP6SPx4DQZkfRT7oKZWYGjjYnPL",
  "key2": "5zVWgTtV7K7PuGZSpPvcuGg8RdS7KPNY6JuW8fjaJNYMKgjdWQgSppam4MnjqSifLUAEMBYRa7yCX7fub4fcKJRx",
  "key3": "BAB6xiM8pkuoiE53jRoUtSTj6mVvFskPkbWVfArK8UurNPKBTNykspWjJAaiTytV3y6CgMrzy4XgrsXkVismZsr",
  "key4": "2dX8aQcvaLPnBQAK7Y95VrpQMBWXHEkhgFwKHjZej3vXHp2T15nER8HLEdRqS6rseNTDC8WMRQ5oC747VJv3d4u6",
  "key5": "4GxGXHBhAm71ynGsdGZSPU1iWdjrksHrSRUR52RQdZgvZzwpqPmqXAPjnU6YqCztbPJd7zK1PAc8B4ZmHRkH5i9A",
  "key6": "34Bdu8sZtBpkrMssCRGjMMbmU7vsUvnLXsbhh4JkFFvn3RFxrhGXYZzacjq66DRPrs9UHv3KWYFemjh5TWX6HkME",
  "key7": "2su35EsFZMEkCjzxu12cJihNSLZpbfytawbFGYAsex1xda8mbyrgNHqsY7UUdDGhYWfDTkcHFaHesYP6BVunfEaa",
  "key8": "5M4D5CsviyrYcARLKN3oQFocMZG1F2RdQFuqH4g47RCmbova9aoAMHQxJ5HhydFVPp1RL8BKMHFCNbEeiJ2CDebF",
  "key9": "3it8c7tzucV5T3HeeEy3CZAhdeZTq7rkrqksgzb4FE9CY4SsaicvSHgggaEY1GeYKHRuG7TcCez7g7iMD9HzatF4",
  "key10": "5BmPVLA4cECBckMEd2xQHWEbwj7cY3X2gKV3Ptosvwp5deqjRQiiKhgYr3LZd7hPhMewMzWozUXsskCbB27JGPrv",
  "key11": "43bUssQfxXEcGDx5UNQfVedSemGdZoyBSEWjDkTh1U7q9QdAZssyyDUGrwQjjJhQZg6REU3W91aKfMcsLrEAVFHh",
  "key12": "2xjChYuvgx48ZC2THziFkegAfjK7AM37k8zrh5tMXU6QZamZtVAuHorZhQtnGqQwQMrjWdJwdycem7KuerWwwXHS",
  "key13": "3FBh1tEJiyicVrQiTHHLNnsJT9HDeUhWhE7mwfunznhNxWNdffQKSsgZtVjVmdbv81hKTrrLdaD9kEoe6nh9xPwG",
  "key14": "5tPELMztRKa5mFzWU7SAg3SwhP6Yoj1xFFDJnvtRRAbsZfa2oxfXZB3wEVofxu1YG7kWWrruakfN7xjfKbqeoWgH",
  "key15": "6iuCVJtdBx5L2X3pFqkbJ1feq3qhqPKtLbvfzXmKFSAxNF5ZqLCbpS4Fwf84Dge7BJufchcTDqHtusMuvBfaTUs",
  "key16": "3f7nJ31KFSnaqiKQUBVJxLbZPWPFeYqQ2dhyoPrJkCHS7dhtneuKUw1mDop4Lead9sAoaXT2tW1k7z7PtnMbpKE5",
  "key17": "2UtPR47zvXtJjB33VHQ4W8M8NVTzTkzujQFdFRrwoBzrcbmprAtGh1xz3CPFo8sCFnKSHPFzCEuYXUjjoLX74Vz2",
  "key18": "5rQYPZm5e4SS6nZpdRiXijzdKXvWrVpYPVYgSwUbqUMw85Lfsgxkfsyxh1EGfShpfK4LZEGhagQm6QWyQK12rGzd",
  "key19": "2DbYice9RJFDg4r2ic9x2jvuRkSh2RF1JLN1bZVbDrktM8veYf8r7CAWrL2MuGCp98L6nU3QY9taiBKwrvCgVfYe",
  "key20": "4QkQirfMNFuJ9ksabxARyKogmTKiJEAABtxBESnA13E1ahnS5CyzRzTSqnTHucq7EfVuMkKB1UVDb3s1WzfPLf8U",
  "key21": "2vvdEU2xeEyRGef8Q4APeduUuLoLJm6LpCuArvy3ZPbJsTPH8qHEdf2g7p6VUSmHkxYV5ef8f2fJDgHPaK4A4xtX",
  "key22": "oNJe42xntjHJrdZF99x5t9UKSzvUpZrR6qcBNKseWoh7U4E2fqzg7muTkesZWM2PHkVScZDq3b8RGakLES1q6B5",
  "key23": "59V5SvUcGoMTuNfrWPASX5FWZti4tFHUdUUoAp8U2kuovjZNstMHtXfAeTjCjTBvDKE6nTTQdNEiZW3NguJ1nPXn",
  "key24": "4XM7c5D9LEFdosPCGRgXQNTrHmYttDmcCT4YSDLWs994SrUTzMY1z5zuUg7ZnxtM9KqUJgdCYafnqXHFb8p59noh",
  "key25": "2zyT4XsxB6JDxgnNjXrhWTr2Wh6nCe9fExyz3Srq4VpYBQvtZnyym4k6kZUh585cJYx9WCnsLtgNYJcMhzk5pR7R",
  "key26": "2Lass7j5YFq5EJ8KmbfXHGG2nUrNcVopCsVnm5fR71cJzwcQGgfkjL65wCJa5vvdEnTThawZpyCcxaS4Jb7R3mDr"
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
