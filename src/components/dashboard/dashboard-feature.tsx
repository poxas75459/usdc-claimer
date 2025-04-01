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
    "3uugxwZHwQo9d8WPA3x7rpKNwqwzbxLU4HKmtbrQBjak4oYC4B9GvUD3kfMTA7L8qwgD9q8Cve74sUG8WtUWSm3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S82VHyCPwibW8BwFpRXLqkJZ14DizA4BQgXpKyJzBmtx4sSGJdjTxSijKj45nw7qNZGZqncVaHJFZTnLsAtHAKa",
  "key1": "2rYZPhycLtkqvP3AmC12zCPN1dAM255tQkbrChNwBuwFi9gRdfd27ghPEQYEhUZttznLbKv7q9NDuU2HgvF3FTGe",
  "key2": "CZdZSmJWbxEEiAcTsLeMGdNe5hWPohcFXpMVYgUNsymzJt4rcUFgjpTsW3EFz5xbLccBMuZzYKSTuTUPUJ7ZMhK",
  "key3": "5mNtDLEKusUVNvyLR8Aqurff8uMYWWaRcxd8nnv1eBTok8nuF6o4JjexYuUc8LedApnCmTb6zJFxQuVhCHCEMCbr",
  "key4": "52yUpHvhgi513h41wQe2aLBdAf6ihpuYsAPcBo2t4n9RMh7XWUqmDZrwQ8CHvpXZK1nuUSKe2TvNeP88e5gbSg8F",
  "key5": "4n2EBTPH6vTAKau769D6h48q6iY7FfJqt99C6ikTFUGAHPiouwHNXMat31XhWkbw1Hs66Gsawv1AzTr3FGZztcWD",
  "key6": "3WUHJqzZavPTvkM6sV6yRahjzE8fm3oSoRbSh9T24xzRaLKdDhC9fg9P4NcBoFTKRBm1f8nk5yCcuJeKPCMWHUkB",
  "key7": "26Rfx6qGTYE9YutVw2NkR24Q3fGSza8MyVuZsvQeZxMjz583zmV8GEBSP21UaifqKx5Ry5jyzT7n6VKpCCp8EVGY",
  "key8": "2Dtqp7YvrEYySyhhh8njp6Ad5pv7K995zLjMXkpX7JteKxUnrhtCEHaH3hFLD2FiVv6BCK5PTcjwhMZLvJHyJ2wY",
  "key9": "bXMKVTV5poduqrLTQXxmnHAiNGhMyjmwY2nQQfmt4i8QTPAQVWpHpUqoE4XwjQ6rfUYpjb3SoXMvjCYZPTsatko",
  "key10": "3pi5kL9MD1fAKTQX86K6heTEPZ7bs4jX7Mhac5rMKWXF48f98rT6YMYtXbfLFaCiAPegwd8VDbXrJM4ixy5WmB3S",
  "key11": "4TUDYfeKpDEGLEThzY898D7SJ9RrdmA7Ts4smhhCU7NkHkwNMt52AS9iu6cLtQHAtAn7w2F6GPbnAGcnz4LbXTUM",
  "key12": "3t6jU6KNddj4e14JgEhjDuF5Y4d9r9pWumyzEtX1d5nkBSTF7XLcmZMKzMHPidJHVCovFWzHfX5dnQysEg2hiddE",
  "key13": "XkGaMtuTQDUu7E77ds4a3TVDXhtzHviv3rxGoE6Cs3VLJ57RJkDYkvGmpwhLiCs5B2GF7Yd4FRW12gALyGSwUCA",
  "key14": "3gTCZFoTcVSdnn5cqMb5abDYvU9dAcssq9RV4JSHeKXqMPBCdhfmhEnVDMkxAfF5PNGetdFp6ZbJRcKHaisa7nWB",
  "key15": "2jNELALf1tnj4PSb8TkFbb5xwH1YuMBrqMxwbJa9rmM1WRJ8vie5r2Btv5Bdk64eoXWf5CLLtKJSA7PBB3QD32YX",
  "key16": "5WMr6f35vk1sEtKCc83RcfzUYvY6XwUwwJKawoVPTyUjuqezpnaxfJ4T92SkHG7yvMqh6ZpAVziAUjTRpfgAiApm",
  "key17": "4Ns1xNMGtYZzD6EyWA61YPBLujiuvvqDkGKXRBeA1iZi5wZTSSyqa9cNkCMDJGKXMp8K6vnGbhE8osi4VG5WeySR",
  "key18": "2edBbUtvh13do7BsSRTsaLc5a1LgfdLjWcZAbSQLRzuUiXymExqU5MHkdsjaR7ZzUhRSgrTiRTey5X33sQTSyqQM",
  "key19": "6oVQp4bRXEEhzy41nLJPXXibD5JM8S6ZNKrshuW1a5EYWEWhSTissp4EFWtmaWD6o89xFL2woQyRtM8SkCvxBio",
  "key20": "eha529c9K5LSxcsoEcWWUcZEyr1YtKvQmvUtqKwYkw4MEmYiHUti4ukrn9rBwpu5G3jGFVWESNny7LKoR6hDkDT",
  "key21": "5SeWxvmbkXmBPob24V3GFmwj7iG3UdSdxAupW5mttDjwvYB39YG4fcN53rkywA4nFtxWJMYSE21KKF8HPZqfA4iL",
  "key22": "2eaK48ngyV2HunCtATc6Tt5xGUryeaAjUXigRz6XUdUPLJBcKbPv2aV8QGNvNj61y2Y7oSzkoM3CnhxmbTFa22dR",
  "key23": "3VjySXsrgHdgxKWrNUTPeHkbi77FssbziawCxEFXTCQddjY8S1izm5SnkFwNwYtod6YDvkkwtig71SU5JHECzdmE",
  "key24": "3rdg8hqwwcqxayFCnAEqp6sw3TQbtQP4f8CcYyHgWkvoak4bEUv7YgvgZXFufzsh6M9dYey2mqo1gd4XqzguU4v3",
  "key25": "47TTnEVmXgFqnTH2yW26iKgZjP2ocNBYzo1MXhsYkG83pj5PTXiS37Xizs5kk9JcZQVgyhoC56BzJems5vZzbv2m",
  "key26": "5Qbd1qyGqtjKrL4HtEngoq5pwiCoyveHx6F2K7fz2njp5F3RbTN7fsEQ9bKzLU5cbCxv4Tvtf7Nz9FYMQnKw3gZv",
  "key27": "4yxDGJoygdHwuk7e5Zuae4csGh28bFyd7yHdq3scUwepyY1zNqbCeVyuyec3eJnzwKWDmTDKGTdwB4UyjGMrbyv8",
  "key28": "2wKC7eEAA1AYSUverUDm8psWz3QLokha8HXsvyvvaPZxcyDQewXnKhrGYnCj2iGsf7wNDyex1ETooph1FPAr6KS9",
  "key29": "B8wQ8HNdEgY2vGAN5PC9bLAqzAwgDiwdzWp62fXnJX3UxBphM3uZRgWgB4dPpE4Q5QksLkSXXqNRzWyXnWpTedz",
  "key30": "5emo6ud2ajgVz7cbzkqF17n2MKtTieVkuM44hLADzzqb84FRdLbJnZeeA1xCW3hvtMYptS2G6A5pwC9C59jRmSvB",
  "key31": "4DAJbZ2jXRE15gdzrk7rccR2G7ppohYS3vEN5dFNfggAmfJURiAndnu4WKaRgr8jPyLRKpiag3tUQWZWsnntkrgj",
  "key32": "2gZCMQ9TGKjRerzLhe3rQ7sQn5DY72aW9pUENKT9LbDn3dfxyeQCXMbvCZ6NoajXnaZhPLwLRKxCjn9qwPz2LdB",
  "key33": "2sAouecQHhmTi25V1kkvfiVzMsM8ANqAiAfp8cBAf9GZwkcWBTweWCMtwjJrzgXjTx9J3haw3rByLvc3dan6vXdw",
  "key34": "2XW6SH3jkS4MPoL6iqUugNGxfU2kfQLgDKmuDA78Lyp5uaCKQsnR6vNTUKZYW4X6jS6kfQipV8MVovA4AeQv5n42",
  "key35": "3uK8CaZCNpyCY9fCW5dhAjbpVSoKS3fz652Y4ZBL24kgxW6E62wRjebFuLxdebehTojBkXgLSvsf6wQXuRMkAJDG",
  "key36": "34rZyYbY11q2siQBJmMMmmNpg2mphC5kiYQZFLUB8fN6mGzhr8eSq5Z9G4HgWUGeocaTdFyJyT51EnyfVjiiwP7D",
  "key37": "4ewFeEogv61fb33FVke9fa7Q8zsfhUTuGQoGmN4jSVnyNnPXqzqEX4AaC9eT8724DV7YkQFzB2TryYKvMAjHEqwZ"
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
