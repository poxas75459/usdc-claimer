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
    "3iTj3AfpfrxfpFUL5ryU1DiDSMVh6dhVWKAAzmwupUmA8bUFfzoTEhgM9z7c7M3AwgiBUBqtYnhhDR5VnbJREbxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jGwUyRUr4fFx3AK5LSW8WCgfXMnXjFsf3CptcAmJ88FvTHxzKVPEUb5taR39fgzVB6zJsos8MTHL5dxRL3oAbUF",
  "key1": "47qRbB7bjTatPynkD5on5qLKXBdEY65okQn9wVP7LxqDin1VYXNN5zTsC8jUUc3RGEqKgfTSy8fjN854bhfGnuP",
  "key2": "3XECg4TC5t2FyGrTqEBVoGzbCvYbDEhMLutHJhxajkBvE8yUvQdW9grv69fz9ejC36Do9Er1VsuzuCxLgAoCn5Ug",
  "key3": "3bd46nHNagGvd2tw6HPHhxDFAEHuSCCuG5hbvzpvHTexomPYLLTo1xbKooacbcmu821h8prY8PXo2mRjaKmw91iL",
  "key4": "2rBaGdT5PdG6x4GKkTvo82WL5NXnd15JHhzA7bzn6jnnHiB9XFhTF2wuR78Tk1grGytmetxLMr7Yh9qEax6DqF9E",
  "key5": "5vX4T6z4VRRF1N47qgE6rwEQR41FPvhUyKh5sRtFTn9RQcUef3BRimPKJCyVSGJBnqb2vWNgbyJfPTupexBJgkox",
  "key6": "5xzufWpL6orW4g2tUa1zgsFqwKB7HMBJ8C4kvCkBLNDsQKmkhWYDbFZx6ELcBxb69vmUbwSdohiTZweZrYsLjYrm",
  "key7": "3Yx3ZNqxsNbr3aonuVCkLWpwj1EMLTZt6R8BLNhxDShdLXzoStWwP9TogFvRhrrZqee99VBhngPpNq9qkvZYhEAP",
  "key8": "EH5hYe9s38FBrpwiZTbs8WA9Ly1Z9o1vNXAkD5JBNA6gkoRMuzQSK3ND21s26ouUjuZeoM6687wBcLPyS5M4qHH",
  "key9": "2kijR8EbiKEP7RvH3ENYUP3Wask13eQSyEYrM2VgxATACcER43tXLJWeYmeVU1nBUviWzR4jb2TRyfCxkwm2hKPM",
  "key10": "3iVBCLYHheNMryJ1TQBSd781f9bM6LtfE8NtiC3CeK3KuPdXbtfg2shoimx4NXG39dzSbpydateFqgvTPmzTsRY5",
  "key11": "3WLE4mcvLURRJ3MKoexYR27n1f9SrPsqeJtg6WaSoF1Ei2YNj4gAwYpoVBFiWcuk2nFTgGDeV248MWVCkgZMuWQ1",
  "key12": "5JY7ooL6gkeQdzDYtu4kbvjWRs8vmRwEynZLxyxjFNSiJNfZhXWkobVLaAAzKW7G5bLuCiyV1JPc6ruAB6GMvsTi",
  "key13": "9U4GvVc4QrRTcfZ9gvy3eigpbYYP5QgiEpk7aJkntXdbyYCz91tsgzgvdzywhUrfHCgg8hHbdoDiBZRvMEx5PsU",
  "key14": "4QvW3XZxgwvjKf5KdvoSEbtv96iqQcgpcMh5MuaAFFUWYSxFQMDXPWqdTf4gPkwoUbQZYPYYmPMDA7c1iKbykG69",
  "key15": "uiLh59mkfMjmUyuUvnVB9ZMVyS9HLHfeVok6QAwfYH1TtHMq2KLtNLSypJLtW3q4PZ5iRWnjAnWnUhcQhiaLa28",
  "key16": "4Et2tPHvNMN8Td4iu1Ensicwq2SJN3ddHyRVW9A3AXoKwDEpJ7iz51muh7QpVY8r9aoJ1LfJHdFjsJ61KUesV3Hx",
  "key17": "SdGBu6DWEv2vktMFy4hqYe1cZRBQuwNgqtYqJWchNb2zykGZkaR1V2QrJAK1APt35kgyTsCbuG2kuMREHzqmAni",
  "key18": "3T5FKAhuVDPpGfL51ytNHmjrGvDYdTJhZ44QJjSx5HsnRcVJ5ncxjQhqzXn41T6j4fr1NsgPqmjgfqzrgTssa2uC",
  "key19": "2WxXf42LN1cmKDqpzj58xd6o7yWmkMWjKqW1YPyNppHNqzGzaTLk5LVFZwebXMzar4irPq9tixSoQiMhq7c2Q4Rj",
  "key20": "37xQcLRtVNmKsEkhUSHTCUTMk9bcMWWvt5vaUR9ozJuvsovjTmQFDBiwM8NXenXoiW6UtJcj5Tm7bDPnWkegeqzb",
  "key21": "3Dc8KsTw1kuKB6546gZm255sAymz7GHGUustPAzc8zpX3hJiSMvAgpbfDeD9vAZPa3TfnHmzU1jLjepfFo55Bs4F",
  "key22": "SGZw9dqaBVQvygnw8cp3nkG6Zow2JpJPKUugrEAL5y97hYjmfqUjj94F1bfBL24Qu6rU8Pknt4m9JhkS2peC3Zm",
  "key23": "kXXAPsumeCmWtYuN9tgfuGFyy7xD2Dd4vUnoauhX8mLV9MrLMLuLpgv4gAQt3woidAKcqhiRLnPUfmnYfMumDox",
  "key24": "bH8gKddJaS2dnQrxEoDUmJt48U6ZVc6ytjTsVa59hULNqxZ9f795hQXjsRhJVWyV7T4LduPxHibaPBK5rXguBrL"
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
