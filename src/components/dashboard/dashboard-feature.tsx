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
    "4bQoEDCmKzbdhS1jFixz6Y1xQ6PJVdTdMKYqXHcGm4R1wyxp9fmAwPwjZXFMttoUme1zkkTJt2NMLgCcST5KMBzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32fD9RopDnJULh8cZYbwSefu577kM7eSjMwidDvotcqTbifR9BRwLb3ZzAYpmYe9VLJhRMjrHxHHvCcNS8VtHrWS",
  "key1": "YJb3xZU1ARSjyx1hu4VUvXjKb1Xb7h1pzQ3NRWgee1E61kGLiZaavxu2bVrbYEC6RqeMc7h1PTHGWW9yaC3utmZ",
  "key2": "UBNFzZCPaL3XNMfNNtEPJkhUSbmEvyGGuhuLuy5B8eFmumR9Qmwoys7XhpnvawN3CEaNMGvgT1yQgyXCiE2uXr2",
  "key3": "4mogc2XL9bwmKuvJYg1exZXzYtEjDJWdb5nNRz9YEbqpcppJS9GKQHc6MZ9kVNRwF3VpiHJZt1yHvBDBuv49h2v2",
  "key4": "2DKmNKDTz6fS5L2nFoUR3YSMpoGicYtgMKK4BsZtR49iwmBQxBTXKG7piySNGHbqcx8662Qq3qnZVmWfzLf2ZWe3",
  "key5": "5T2UEUKCEzejknKwdr57DRayuF1ZJjWXaXa7f54b3UytMxKGGDyBfMZgUjEdt71D933n9omSPfEUStb2RVtZ727t",
  "key6": "5FbxEwsAzpYMqkFSnN4eFH52GsQ7MwPhX5MyPAHnVdj9dsh7RtXMXFz6FNHitSCLRuJc5WDQ7XrVdeGy4csZfXCn",
  "key7": "5e8tK6hYnHfWJnZJmEjwB5YQ1kaLrYwp3s8sYpjNWZkcqvQ4jFmHNRH1raNN4Fj7G7UNENqwvuq179LWJDPynh6D",
  "key8": "2FLnx2znydWeELRTzywRnGftku5SD7YHcLMKwi3Zs5zcupQ7BKcG4S8uT3ysjuN7PDvHGxT4jfYwCij4b6m7UK62",
  "key9": "3g1uUvuYcK6TWdCDuL46bzRAmiSz3mn4nYrnk4Suy5ReJ9hTfHkLhHiHymkPdhf3xTf92YGAeXU9KECnvwApViXd",
  "key10": "2TCq4JHBJndype2384WqnR3dBVAoZtnvkibCxyGRCQc3L9XCFAMNcnK2DDTCiAe3gSrEy9LtkrqBtxX8qZpsSmar",
  "key11": "2uki5hdQBTr35cFvxVcqAt8Xqt6krmRVWByhwFUUWc5igeDCsvT5Qfu8ZPC23PhdGwj3F9od2QDVsdv3Fnp1VwrL",
  "key12": "4kBYYBaz3UhpmWbyqjjZHoecUB2btRaAJN2FWk8rkvyCZwFVVgCF7sKugbPrdNhsXo3WrgPSeHxnH1BzTEEY3dNf",
  "key13": "W4U9j6rAwGZWa2DbvGLRPSHyEpVMS2wd2XViSiqmKMRCNBgHRhLrHbMQE5nqBsUwrVYaswz6mutv1535AP7ABde",
  "key14": "34x9SH7ehQ9RcYbUFLVwy2CyK8WDkXSikyzb3Z9SRuHJBmN8yHAyEaf4JctPBBDqoPmx5SPKcfGq4mYLNt88jK6k",
  "key15": "3gFJ2F4o1pYGZtLEiRG1yrdYimgXzP7o8afZw1gNUeg9gsAB2UfMCUXqmYSMpUgBE9G3rMoAVSRYstoMJsawHvXA",
  "key16": "4uCaMUH5GSRsZ3s3GQ1dUSV7iDzdrYmUUrXEy167euRKX5PAQwMdt7pzVyMFRey9pRavtmD1ioDaog2t4sjZUGhD",
  "key17": "56C5DdbUy5c1iY9d1sT2sXSr2HrqNNHpp9SvGQnFXyQ2qobsJSjRjRDx97oHC1nM6TQ28Livk2WTHTqYLumebN1g",
  "key18": "3RZYu28xiu1wigG1Fk3HqoLhh3DR4ND2BjeHNKaxtzKTYpwCGm5Qfm8hrbehh2GJec3a8uzc92NUqjTXHcLDA5pv",
  "key19": "XL2kihWMKAFUYBx1zVJkf9NoC7YTYppwxrUCaNXSiMuRBvRFR6ZVvpxPrai8q5aXso6x5g7pk8HvrA6BiNLsT7e",
  "key20": "FRWR2R6njTCJCuKzLGRsh2D4MEx1CCncsjxSwKdoevq8Jf5mBRp3DGkUCsHXL4oyiSyn69nhYZFsxoFd42Feavo",
  "key21": "2kR8cwH8RteEHseF3bLgdjDiDqNJK9v4unhxorbPYx1DMnpvCNEThsX7BoBrhQCgGcVYSBTWr5PaNNqf7WygHGDQ",
  "key22": "3uCSMPt2JVExwvY67S8y4jat247BETL7EmG5D2GYvLa3N5d1Tgjnub74RkiBbgbWQ14h5Cfc2dCLBJ4q65Npp113",
  "key23": "5ALCKziLuLU2MvcCS53ZJutD4Yj6WmfP9EGdtxhcV9zZHENrmMsgP9Z7dp59m4FuWXSTDsVc1gHAYVwjNzDuppBq",
  "key24": "5i95zKqdba1UCmGs8HFBy2GZgQph3oqJAbbefisjpKJTLoZ8BVJJM3nKTbZhcSU4QeNZAzzeunYLqPqu2LTfgm5Q",
  "key25": "5Z7hy1uGeNfTv31obemW2VcwoCmWFczo78VQtFRyvHpqt8vgjhmcuYQfd88vNYcWze3mDhwQVGRUnZx3QXKX5ZLi",
  "key26": "dZe6LvnkFn5W3Fyeqe9BGqk3i8S9EyZx2TuJSg6UeFB68aoCxAw2UQv1h8EpNCePH4axf7D4L1AFRWRLKttVyaS",
  "key27": "38obfb1Qs9foedF7epYMFtcBSZWk7kS8GYoBDSK8E6SkkiuMAPNfECL9qsvaBcpL6W82bkxr3WxReKRj5TcavGTL"
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
