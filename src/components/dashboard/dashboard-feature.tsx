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
    "52HKdCstDkbQhDkgpSV1KGXptvTUtTjxTivEQeynGGToXi6mzYSvLH8aD9WEBE4eXoK3srtcJXTsEYkPNqQrvphm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fcxn6BN1U1hyexMtuS1i3433tb2Dajs3eVxgEUPyYAHHiG7bbbPnT1jYTXy1YX8e258nmdDp58cfaCt4h56Fi3j",
  "key1": "5AakfWBk2Xn4AugV6v57XkCXVz81VkUvtwVrAVJ8zdZ2CgZHM5PpXtLowH5Y5Ax7hmto7SoKeHoFpgmKccPtWCdJ",
  "key2": "2XEJBja1Din3ADzDS1vu1nadadjfRkkSo8tp87pbMkQzr4ExhUjscc8axXFwsCJtqessDF6LENxZeFgYbwC3SNCK",
  "key3": "5N1bBjGxFLi16RH6WUbVvTwNKpPss9727hWnPKgb9RX4xV7GPVs7Vgo9Wp7Nz1jxbRA25nAbZRLaHNKGoiWWSQ64",
  "key4": "3HQNBb1deEEnGvngogYDecakmJrRDkCArreEKHQrqae5ZcNjT8JyXi5NshLgj93APkybkTjJzG2XJyQcbWVfmhyx",
  "key5": "3fV7ofAXBAv6eyYAmX6vfHCAirsWb6pvqjUhBzUp1Lok6No7ycsXx7s8AR53KDVmFMWfGFA6SMZ2A69BoGPzSwnF",
  "key6": "5FPvRT2pAPuS9YHGLfVDSpqKf8AvUc7RK717fybsKfirhV61aPNonegu2pmVeuJpphf1ZeJpuuLLJwRaKzyrG9td",
  "key7": "NYmSyvAKAdNEZp2Hwz5FNawA8iZvkUMrc37Zm6rPYVYufehJHxHiUmouP4yNugnKXKXobsmPtvAT4sMKJguRoAz",
  "key8": "4i6aN6sFTDmvENnz2jSMzFUgPGMqs8CrN7YH58aiZhyYkwCi82qaPuspcEXeJetpe22M35cgnFxF411n94TKqB8h",
  "key9": "3Pz4WFKJ5wVo32BEuHf9RfT1mSWjhz4m7EmVC4dqBmp5TASa6QdeSv9HHDukhFjkVCsCxhAcB89VQdLhye2NKshQ",
  "key10": "32r91jQNxh3tosSnp9SLyfFW6WEZBXaJ8aMr7aY3YKDo6bY9PYVJ4QSgDdUm1Wg56MpDebw573x3SipzBqMD9thp",
  "key11": "4mR7XbtEL1b6ucJ7jSo1WeDsiSDQEGxn3xwr3zNWdaFDFpEA8K3otqxqUqLJxLjJ8rYodPqvPLrwxhS6XWn8ArSg",
  "key12": "24BxnmQq4Jk9AuQgPborGmXPSP8fnKw4SvDohWVH3mHpBK17TgoLGD6qZAXNL45YTwRNqzrW29WbYKGZiqeZcvAj",
  "key13": "5gDB6Neo6puii2r4tqKgjv9BohzSiR4SZinPV8a36enW3cWFwMcm6tPgr4RKnRfY1cHg4xjCdFLwaNhVCexjd2Fs",
  "key14": "4rdDxZpkzfRMqEMnkdmvrNW2zQ9JcxPGn5i8YLt6UHG4B7TZK3SRBpE2iaWsB57MHVJkvAvp3RDsBcG2csJzT4oA",
  "key15": "5Z2vcHvkB3LVPsUSZcRvh2r5WCvHt7aQPPqxAT4xYVTmDV1qRuGvPsh3GxDCXjFMxuvH3hQsiUQs2P5GniqU2hLU",
  "key16": "2fKruWoD53n7KmmckEaD28A6T1CcFCbJpWbRwy3U9HUjCD7JVg9ZKa9WSbLBa2RPGXSd4U42KSHand6x1NoaqMFT",
  "key17": "5y7zke8wdx1DciRWzPeKL9UocRWgyv4er3Bsk4e4oKd8pcDTKRFYtywDsbH3HtC5i3TjeAQzUPSprRqafakDM1Ba",
  "key18": "3yVwBeHVWsdBCgzoeroNeRHzdYqpATr5E1F19BEx1jTNaNxqaP6pw4J77rhUrfff7kDrs9k9SyRbfZRoYL8PEY7j",
  "key19": "5FiZ8v8hM4G7yCxkwJwMHjztyc9jV8knh76AfPEeXGSqVqsdP76djJVHRApzK6sKHcsmvpytqs5puqSNJCnoMBGh",
  "key20": "3CxeHuqoWF8UbKm8bshVWLLCq63jtu4Nf2kDoG5k6rXHZKnJvbdKwrE9hApPcLFz64j3yxL2Cw1eZQsArvWvjwjd",
  "key21": "3mZgzecGvzRDZRG81L6YtjRZj6qJ7hEJ8y6ihskprhd5wjWbEHy2WfYU7X2KgsJwe9aYWJKJkWN9Bs7Vx73B5Tmy",
  "key22": "2J628UtR635ySCC9kUipRjoj97mtsz6HZ2gcEDapbz9dJxnkpoCCK3pS1T6WZUyRPQNWb3QXw8kBFHSWtNHFjhc2",
  "key23": "5to51AFo7vR4893cPGzgRCmWnBUyDdcbwdr9a3bGtBAGMdP1xmQ3U2TYAnK52gmGg5aj9KUDrjimQUJuPCMpyfGX",
  "key24": "8kvjTdkxL1gB4RReyW3YeikrKCeeX9YVqpV1SeujZqoJzVU9xJTfmirMbuJ52fm8gw9WjyjofsRFFLEWRES6uue",
  "key25": "5k22UkirQJ9djd661TA3GysyXvH7ndtiomWLKNdG1idLUdCMaEHYEmvPz2ttjwYgpDmbCD6fVRBLbwvDpYQefVnB"
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
