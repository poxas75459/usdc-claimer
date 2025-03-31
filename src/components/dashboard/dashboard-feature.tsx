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
    "5AWMeTLZFTEHBTGxUQjhCNebT1cRSB64jeaXyiiBP4SiRJ8BJBjVn2LdRPkXuvhfoo6gphSHjT7tHAzyB31VW3qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FJUq2wPuwNVtxdFhHuHt4tY9vDGN3YGrNRanhojhntGJArfQejYGLRJ77WpGT8eB4CAjAGFbCVHYkrxVv2z4yL5",
  "key1": "54V17fXcL1Dk1EuVuQjgmeATLkDN4N2gkMZWyv9HfjNG7C1ATWAvE54JtzFpttjxXLvV9XuNhCeNQi5ALtVAFyMJ",
  "key2": "3gvrSn5SMfmXtYsHQnvxCt68tKy7VpFDJrrLHmHRBbr7QKD691booFtMqDrtGaspf21Xx1tXwVyYdk7Qsk9N5bNN",
  "key3": "3U9Mgt2yAd1NtbgXzEy8wvayhEVyXvjaUhfY97f7JCizL72JGdCmtzKLawUdpteq9Z3pFnRQDDexHgCNJUbD8AYz",
  "key4": "4szTT9M9t64xu6MeDLnJrm4B2W8WZ7EepW9mG8ouoeUvweprKBf9H9H1NNYRdv7SzDpDqC9tMhJRWLP3XEdLAy9i",
  "key5": "67midhSJrNakSLGvwunnLBnPsGcziqAmxoDSp7j9JksWTSzaQZvtB1dk6PaGVWAbNB6ZyxBaKYxpkKsFErZwRJQ6",
  "key6": "jLcaGLWAwZ3AjQh2W4fDauSiJJNnRGysSAaAG1E2AJGkLJdYimy8BcgfP9SxvzURrXk9PJhiPytpv8cEVXjN1Gc",
  "key7": "JdchGhsvVnM9NqmqLBPEsvsSmaURXNv4H5tqkGw77qNfW87Q5pSEee5thFnJaW3kSY6XUkjDRyGBWb7XF7jJ37g",
  "key8": "3hhMdzFWWBwnnzV4674ZCWTKEgcuUCAPQxhShky3wVcC86D1oV6FS8gr3aFSsJRZB2XTwp3ezrZKngAcwt2iwmiX",
  "key9": "3KbM8bpHcL4JNeRf2CAdWyjCCgdtfEu16eLCdpeWuQWTaAih8gMKJ25joBzp7iZBanP8yTwdFpLQ12efh6hWZ1MV",
  "key10": "2dfdHa1bhTTs98c65GjGYE9jawdwrN8SX9hpxYsdC4Xop7oer9oT6yk8vuezjBCjx6u5B3Ms4LwLXmvCZiofvqKP",
  "key11": "3cbam7WJkixeFshHpJQvm7gqiofGX6WSvkqPGergs4dGwSqf7fgdYTt6LqGqvV8zvqkjuqGUayWACZYGvq6L5Z6g",
  "key12": "59eVZqXWgqK5q7tJkxWkjLu1FCpP3gngJi6QkZqKH226SxasRMiSCnxxWn9vrrmcES14STcz4jUL9H3ZuXaxRUgH",
  "key13": "58XeavQiwAWfUaHxxyEMX2y1du2hcZAb2KPFMrJ7DoFHKc7nTfMqQHBFbW3y4zGPdskxR4N1ft2M7FRbXUc1DXyB",
  "key14": "64b7fKzuvE68korYzFh7TCWtvhx294qBwp9jub7F1BX53XtjRHpjYgaUUQDgA7hi9G4QV9FoBvJaBQFFBXJz7hZd",
  "key15": "2u7PVgubArXbHQXMY5orF2o72edfxURqdsPyPmHnfHqi2zvexsdw9mzYdVJVjT9uJQX5KvtptKdDcXw5BgwchP4E",
  "key16": "4JxL8DrgeTgFuKbepSBfGhScXCF7mrPSbgJjbK2q342yvewXUPfjGJ257WBCFb9dwrMmXDM1PqGMZ2PtF5JvoRGo",
  "key17": "HeXx5Q5R2bixmJDCXZ2EvuMdSoVKiuCGcxLXZZH55zSymdpBVZrzgkxeTYmptwMjcQaptxcGiTkhhUnSRs3xgYz",
  "key18": "5qfjdug8KPeWtTja5sgbgWuYA7Lgex8kVdC7ZaHUonetrgbWwK8BvddMbwp51bFFyA471VWJfYkRDe5dW91CmGvd",
  "key19": "4gPSv2if1kzVnV5igBjb7yw6hwoVHkniQxL5mQeAdtYXWfB3uyNRs9pT916rk5jjQkNNRwNGwBn8D3SiiPynugQv",
  "key20": "5hFHaagj8YRjgJrAUGNg7gymo6Vhzmhm4pfCHQw4Jp61T4gPdutouU28WP1SNKhByuxs5HbmQV4jeiASoJimZsXD",
  "key21": "4ucovm2xKTvFoVnW7SpY5CLjq5R7Ke4q231Qu4u8j5QHuFue6Q5QQtKBnMKM2HFfR32QVHRykRfgVKf27wxHTVQc",
  "key22": "3skvvf6ckfkoknWnh5z2VxefMSTERCYQTTbmoJHr1wMTT8cvqJ99mfn14nraCfuipDJ9D6XvsL1q2LsKzQNQ5c4E",
  "key23": "3asGYvzsKGAJqscaVv3Xx2amg4DWkefxskLNVcjXL3KHQXdax6bMEk2SJ5AHPobXBY9aY6MTGsno3rLSfP6kfX57",
  "key24": "2mmvWnRHE9tzdWt99LgQeijDgZLhswkLq3i9ZXTMjkuJRxx2S1D31ZLPECcAy5j7QEHCaDwMsRtjcdENFG9ZZnv",
  "key25": "4BtwB5VAR5paPnf6U2owFMckCJLkh5M1zdu2pEJ35mqTHryLmFXR42MdXmZkyKvzuTJ6iZxZg1gkxEjqXxoHx7qL",
  "key26": "2CqsQWcgBcFJbwpABpRjLNxFoZujs7ks31aaxa3faNowkAQuxh8fbkqWT5VbMcrSnf7hCkm67RDVVxvjL3nTt4ew",
  "key27": "5aasT9hQbmqZF45tRFjNXb46EpGWPTn62vminws69A6EtF9Di5vSVWNwKaMwJFBenffuhgwYgyoaPRQpZUDozCq5",
  "key28": "4Ee1QGaZAuhQc24B9ZBARa91kgsZTvMhnitriPA4G4TvqaZdqderejwt4vZHnG5D8dLiE75CAGgbfbfnDSuf6wNp",
  "key29": "4LkJTwew7gETD4X4PG7zJhDkVsqmd6AmsNY2pW7QVnNniicQt6MAZhZQp5mEjeJnpwS2dJES2XVD6sRbZimxaTcC",
  "key30": "2e1uG4h1C6hMT48mczMeCZx26frhTnPe5fWx8LnmmpmrHoQNXTQLjcW2hxWqWrWDb8WmmEozoHt7x5uHvLNFb3gE",
  "key31": "2jrbAw9SB5QKKJuU3ByapYDXyDZnwMr2Njwx2azKagp3Kwb6EDkvsWmBi9hwYFu8KJERxhqWrsn2d94YqBYQnUUn",
  "key32": "5xxXs6KXQiXKF3sMTpBUaE9mUNAyz5w2PqX7QUCHUDKz5PSVJtvSDWJsjjk4DmSk7uTZFwcP3qrUQKp5P4rcS8UX",
  "key33": "4vFao7aVt9a2VABMtE1uPjbG3QNh13CvTFyVWVBRpiqHG3wJmWumoWzbzv7d8n9wbysHVw4JMHDsTENdzmuxyLLe",
  "key34": "4FYYrWwHfkWof3A3TUyEWitMzBFzASv2Tebw9Qn7vfj5fM37hetjFTZUBXTUVRRdyZfjZvLDF2o3xq9MtrqYD8KQ",
  "key35": "67SggXpZddTQowBAvNATvB3ToaWPuf98mw6JV6rFSPLyHBaeDHpqHa2UYZfTKe2qTJUFiK9f53eJyne7BU72G5Ju",
  "key36": "5CgXQ6wTSDrkbwiPZJ97oii2atKHtX7cGJdTRLU8JTVvLizpgb6dTiYsdcPVRRU9gCuZmSY3oPk8C9ZeDuRJT1Nv",
  "key37": "2rv2yvyF1cD1tSdEiai6wvXHWgzn9nRY8FS4KMXA1XgBM6NGerzFGz6vrKLj4hHCGKRFbTouau3VEzoDTF2KYzhg"
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
