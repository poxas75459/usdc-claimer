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
    "4wJzpRGRt1wc3mqySHiPvFPYjTDpvgXcaV2wZKfcpKck94ZSm97xTcU2dsazxAuxSQMRyLPhGseKxeSD7Pjov7P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S1yE6tXiUkNDVKvFtC5u9qZjNSWPwpHVH4PMpXHxd7sKY8dkYoY4GygwQqtSEceTNjwUQWdLeMcooiQpLXGBqTz",
  "key1": "5KdFk7zRgrjFNR9gKpbWNEnwUretPqZBsf3gWmZeYVRhaegZdjAD9HT43S8NDmVQUET2szzEmDTtD4XnVQaccvrt",
  "key2": "65iYV7KJrEdmyDpepBzfdkXRkB7M6PzzJfbzv8H8kkFiuQHwf5xFSX65Y25b2Jimfk1WoirB2Bhqs2LwPSrEhHNp",
  "key3": "3A2XUMY9XJvdksTLYjDC7DmjkkQU73iFNNWCcHpBKLzqoeinqukitqZmb11GbtmA9WuFq2GNJq6aFwmq1x4BFnoN",
  "key4": "2hXuggY7NaCboq2WBki3CYxD3Xm6DdJKc3PD96Lf7P8VfSUgxUxEdXkyqF5YNtzVcLbyMubbYjHmUdJQsjXmgtJG",
  "key5": "2MsejVc19mZxb1tdDgFvtCknCieSQ8HgWsRC6Aub8QiwfqShmEvuMAotgGVRV3EwhLTma9RGXtYa4z4zfvF7VVib",
  "key6": "22RtJHuMfMHJk5jG2ZWghdun4PGaXdknwME526AWUUueN8PdN471i3tKaRZRund6KrQmDQq7Th41TK258AWSHZD8",
  "key7": "66D7RMcwws1n1aVoiH9X1gojeXjzYhxRX2gRHvrN1qBGQutLtptAip4WZrYP5LWPNLSt6Jf1R1tZAyK8sDvtiYuC",
  "key8": "4xyvmFHtoprdnU1WfcZprddVY51Kw5R68JJ3aJCa38ifVJpj92HZAmAE1mocqubZpgwobLJpCSQaq61zUxGfEEE2",
  "key9": "57gn9s1ZpcVaRY8Cvwr8v3QFXUMaBEVyXtLXPVZTKePapD5qg7VsdNqNqKPXDe2a3uNp49bDrx5XMASUA3bkh3hD",
  "key10": "42EmV7VLvyZGQKL3cKku4jgrNbjsYqfKmJmuoBrqg8hDyLj53VrHBsS7Ydsj2G2enVmDY1Vin9hijh43UvdKD2PN",
  "key11": "3daFGtYe4kK9vVpCX9UycQDnLoUuydNd8XG1rGtLTVwPVSmqHNDBQGnEwbVedvrkRZPLiXAuqL1xP3wx8bUy1mrD",
  "key12": "38DkhX9Xr5qT5xAVYg6wQ3Pz9aviZ8Snt1skEQ9KivvXmnzD618JfjuLNu7BEDf83mjTcaEUBnpbVKFjSf8FQn2K",
  "key13": "2LAxquEgQnf4JrZYTY28R6DPGfU7U4GgBseReMK1FTpnFHqMBojZZhWNKzEsJUTzt7NGEVXy9H3qvv74bHVwg6W1",
  "key14": "3SN2pBimPvmWtKdqdXQHRXoyr7Pr6fmEVK2Ncj6k8cZDVSgGjHX8htasmJ77YRuz3mFD33udezS56s6tf9CijSMp",
  "key15": "3ypn1bgEBppNnavTG9sXGijRSYtYj3JvsusAVpia2mXEzjA527nSr7FssrFBd7h1FrBJKjAciWkfDoycBK32mBw6",
  "key16": "4LQEwiRp5EfKW5Hgbi3nmRmSZttTgif9eZUN8qid1y8E7kmSGSHp2fMoXvitixuJnwcY3dMtd22gVJeCBrRcH74p",
  "key17": "4N1qGkcxDM4k9gFnjUu1YSnKugDFrX18MPoxjbQZTnaLnaR35FrHo8gBhvYNKuPkZKxjwXzkjbS41TDxHdER6f29",
  "key18": "5wEWaKuSzbwzrbb5Ash1abzYsMaJStv1JLtHEvjfNCQf6D7eDMGF6craHs6h1CfMcQYQfThMyqJzebhM1qrjr8Fd",
  "key19": "4SWt8zin6WLbrJ3UjiqLbtS7X6Rtbh1Lv8mdXmufBYemitoncSqbWxbUCtniMhwNZ6jx3HkuxCwnnbPR2K9Qhqsq",
  "key20": "5QBLpNRt35ctB4PqkU4cjw9HPHycUQK7GxipZy8xq1nB8eG66SCS92x6cPtVQcbjoDdPTC8pdNVF5YANnYVCZGbH",
  "key21": "4ALTgkv2YyEsB7gPYHMVxLRYHQGUPzQMtN38sk7oHteiB9EqkzrVRFwjp84RBDjkMr1r3cWjwD9FGTfrAVxZFDsB",
  "key22": "k3tQZczavV1pV3Bk9ok2f3nmBUWtAvUHyBjaE5UfPfcNhGac2MhtdoVSvkBtPgeWtKGYexHaNfzxzJLzvjqZGrK",
  "key23": "5xUDRWUVamSK2xAJvDj5NrELQ2nUb4ZB8sbCMJqs9HKZD5KAhmZHwdKRocuSZcnNSGh5mrUGjuYKFmQAJ4LYWBqT",
  "key24": "4GghvcgzvNC2CQJyAdytELVZi1oBFsdz2SLvjLNDazUdRGoc1zwSMyJMabNkQaSVvRFxhTYYefbC2VWky9DzFcUp",
  "key25": "3QtoVw6NAyjJ5qwB4cFVKDPbw9GtLFJM7cqgc7FfEbCfTRkrZ8d42R2mzixzZACxjErG5nnJiahyaCN8bBfnHnjm",
  "key26": "2eY8GQWXvknyG4Km99N1VTdc9cTkvWEgm5jAgEaMhpYaQyJ6g7p46qP1znWeyfepx3Mu34faQKt2pcRK8NsYT9dp",
  "key27": "2NKCE6oFtK7w6DKTyc5vWR5rz83uRoA6h1ErBdGTDExbxQKoEEEnaL3ZjEud2WHFNSzHJxQHobEHTcamB1ENK1Dv",
  "key28": "5b6XRzVdjDKp3gH28tVZgvBHzdoBoFGwhgH78W7WAmwSKcfRnarssL1DLoq3wzovkDjw56pV3x5hmkxRRjihaeax",
  "key29": "2oog9h6TS69z3TiCwxjouyLNY7sYxy8bmvMwoKZwg27hb9BLcrkvJ3KU6p5DfYoz2Y7Wk91kNBamWu9akFkWf3TR",
  "key30": "4nYx9uyU9iDcYmJ3WyPBufcGnq3vYvWTXFz3Y1Jdpz4JydS4wooa5pJ9hY6bSarbdsHcyJwgNsikEJyg46JLQWJk",
  "key31": "2bWrE8sPKhMyjxAyRpSirKYvrYYKf5mKE48tud7eYK4ouLJZ4DgCnk7m7PmXD5cMLkGiH4hN59decR7yXD72JHJn",
  "key32": "61GuBiFrMKrHZeUarREQZe29StxVyb3EzQwaraQpL6a2pZ6bM9MMdErvmye67jYoeyRsyHwRQB2magobpM7yLtJT",
  "key33": "47f6sJfFALhxex5sA6NMZfLwn7B1diZtqNg3giHtFHxzVzUvsijpo1HkVJUAE4oECZZaJVVFbLVhRtt1yLgqt5Cd",
  "key34": "iHyMSGbzsyd9JYenZRvcqT3HhDvN1kMch7L7TqEmVPyQQJ2hAbTUZqYVa7nEgxcrcMBab7mxVPenEofJNsb3mid"
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
