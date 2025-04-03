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
    "2qtcfsQ6UwztjF5Su45LY8JNWnCZuRNUkCDLUFNZgaW3Nid8CUj8gdcJLkoLZ6rQ8DTSdbu5csab9B7y56Mt8Udc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zJKACSJ2t9FomYxnXJzTy7Tdq7tpqzcFAhx7c9SHBpL9ptRpEK1nbD3HSRXx3YjEntZRq44wr8SeU5q9pJvXJ7X",
  "key1": "573rWu5MsjxS4nXzwVKKqyFMd4kUiNyRGV1UMs4wQbyT92wXkQx4xtdZS6RyzmPtLxbHyKYu2kbeAxYPCZRPJ3pz",
  "key2": "5ow6zxZPA1zNxycWE97nSCpBsuuUcmjJkf4ZNNnDe13GRHg1CnBHXuKTAUFUDN23kXEWDVBEokU2ToZmUL7JSeZh",
  "key3": "2XjppH1uyq8X8gazhznKj53D4H3CnyBJnxMjcfHjwg4yjFVMg82dHT3RjT8GCSmXo4qebikMHJF6B7uy6DBtWBJM",
  "key4": "2gCXfTMKZAiMwsu1emb2jLPAfw6EWPKxbnVnWNkfGEEtUvzUrHCuKzwQ2KY1M9GJiXmfyNiGMhAiopQoUh6rAdhx",
  "key5": "2ZtfpwYzq4YkqGoGs2Zqx3i3vhyf4b763G5wCgyiMZGV2uwGT8UYyHUYyBiYzzKaq25RWXprFFdwXMjkzruXCm4Y",
  "key6": "2CLy4eCGWChURn8BkdFBxduU78DV1hYcsUT2gWeQfbVfsS7ktPYLKnVicy7SZRb6kpi9qnBFdGcUxp4n6Qg3FGzM",
  "key7": "4FpSWWxdwk7zMrVDUJszuaaECcX6Y5qZMcr1SpDDdLyL647qUTPPnoLtDeVWJqim5f3jc4uorqdmiEuyPjR7KQZZ",
  "key8": "3xMcZ5ivPLfVgh8oZTPRThrEp1rFH74Tc94dQ9BVwqWj9WbLKLcxQjCxfANHpALdtQWhUF2PADpaLqXvFYhP6D2L",
  "key9": "dhVXuonh7USQ3cn3YrNcsXren8e3g8xDxeqcoLmkE7jW6wj2a4Dw2hypy1r8hfwQxoyErByrksKvmfPg7oFYqeJ",
  "key10": "KAs3XtknbFSKY4HAwFnXS1ga64dEA5RXtXwYPXnkHbQts3vJiUah5qY5P7dNrKByMip11ffZUBuuKb2SKA3UUTb",
  "key11": "4pHW9Lnm6VojujhEqkp6RzLULu5mrTMQWSXg2vcajVM3fdeBKZnPkaT6bNTBf19MWnu289qp8eVLj846Qw8aoy2u",
  "key12": "nJKBpYVy25HrjW3TbN2BCUZH9uwmc3Duim8mJrPqKMVJzSAZqMALJUiD7FthnJ55tDHRBXEbCkKdVaU2fEehFXj",
  "key13": "2W4nJW1ULzVmuxBtQeh3JoogRJVDXjed8zurafP8HBH1YKnqiGxJa8LL5MXdJ4U3sH8fJNfvN4v7uH5Swqvd3u8c",
  "key14": "5xrAA2uPUWfdrVdWw3zjkPrnA1Y1YMwPKfyzoTeZnQmQvwsjJRewhpaK4QqtfiBFJXUbAVwd9NBBsfiQjKLTBTqt",
  "key15": "3QxAdbJX8JMk8C923xwiHoExbKhit5zpQfqjpRTJ5RapPsXGUDuXzfL95P6ntPMUns3PG6pm2eAbgr957xD16pSD",
  "key16": "3cDb6crSfMbMq4YtYTxQ9CEiqwoExuXRznhNtnN41Kbazcp7QBLgNhjQ1mds6oht8FNXGpni4aPCunbHmrY31s3n",
  "key17": "5T1HwSd4nbFfuJshEQRkeo1NZGxzhE7eFEd3W8QRHpScZUKZh9mwJ6v6bNiB1hthCXPYqsUMj6RaBRe6rJEkp7Ay",
  "key18": "5ceRbfqx39MLbCp4Y9gYgHQ3b6aWychohs8z9V5yavSh5CTNeKKpPZLGnc6SjHHHQ4wvZfBDDVVbWiUdUsQSR8wL",
  "key19": "2ePyAj6xk3KsscaNsYkqu6SpRXopNdk3eL1XefAtV1pKaTQMh1MKnZjA7rcLVjvZfTGG9tmHfMsUvLJUHY1STrJX",
  "key20": "5ooymZCWHZTgULnhPyB4EPh2boypd47F8o9oie45wkDcx2UjLcoXdHcWSkvVmxv77QVsZYaVAYfUJ3doYCH99Q1H",
  "key21": "3MKFospcwfg9Xw4252hGdMD3Ar4b3ji6gNhfLiNLwusQGH76vKxTW4jFKVkuWJ75dnSF2jsSVqwU4A5C8Gt835ZC",
  "key22": "4NcgRdk58K9N4XY1X6UhqAWwRTxuAxHZPBFcuHD9UAhNDTTYoc83wMnj9JH6BRtjFY8xK1LZG8HRsX5q1JdsD2Cr",
  "key23": "2dbGhuA7c95YSfy4683suGCz7ZiTbGHvJm2YEimjBABu6N1qKaT4nhzmmMXbUQ6RT9HrKn5qS5C3yDw8zFFJi4HW",
  "key24": "fiSKiccfc6ot2CVx8CRwvXDF6ntsW3EUFG4pAW5dfqjmo3FJdXrNK3io8339HxHf5Ykm6mF3ph8Qr8SrheihUwM",
  "key25": "3CjiR1v4tjtTAjwPjp6qBRuZNCMYhz8fcH7wGjc14BDkbQAV77NQa453ES9dnhWqXv11fce4bxMDTyMLnJj1h5AX",
  "key26": "2oer17V9UhDTkNpPvFPNfgF97PH6BWMTYbC3i9LrFnnE118uzNNJFHPJZEpRs6xF1UgARRRea9XTbqe3wqzaCugi"
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
