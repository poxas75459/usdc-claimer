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
    "5ATeuyywUFNCEsspiMJxU5KSQZuUaKye8jvMzcf73snmG44CiqZcaUwoGV5qs88pN7ueAsUmFRwB265MZaxwhc9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DtQdv1bxEBNPn9wojkBHMSSukZHzRJnkkgfpSXMceG4zUu4ioL6GJkEmsUhCN8KVkW5ZSwRT12TivwXKHrCMiw4",
  "key1": "3GnEuczYZhsZg1ghEDDpM6yEcythhatYwnHkwGs4AxnuY3WHCB73YJNK5AyiaEHbqiEHzzy6xyoKozBiZm81Buty",
  "key2": "2Lq9Rd378sTcqyjiDeYhQmtg8xqpQxd6fjNidRCxrM8C3fRya6fhAP48Yb5TbtxBqVX9V1nZSEAGyYyy9wRcgdCa",
  "key3": "4XbK7aTs68JG83Eo7LShtCUF877ZuKUPm1gzXaWwtBMdRCed3991KkHnfuYagBNPLN9F9YRvS7kRwY5iMseBzjEz",
  "key4": "3h479Nbd2KiooRNwuiW9EUWrAg79RmcLs59WQbEUMcWEwfPVmaUwVHF5iD19XHzS8LsnQDPvbfSbevXg2gHg6B53",
  "key5": "5q1ZqGAsaxeiSmWVbpdxg4G4kXBnL8bA9WqXBykfXFTM6yozSChCTpe9Gex1A7UCDTtb9ca4QcFzAcLVciw2ZSsC",
  "key6": "4PxHvrrdu2QgGYBH6UFFzPqHPb5CZV8xnSvRBiNZCVtGxvBHZZXQHxUvh3PyrpErv9QmG3R6XDp8wCiUbCKH7Zh5",
  "key7": "3JhEX4Po5A2fESr7BTc5mFpnq4iZREpL5ZbtSxEuyXu9J4QHcArYQCjVcdR2S91mkRAo8xR4nRBeRucvkX3s966i",
  "key8": "3wNYiEV2UCWC3HxFQEgVgCzrjUQBZqFHGUguDGmUJ1jrdcAzqKKww7cMVZXfrQwGpURZTXdBDa5Hk8g7L3wpuuDg",
  "key9": "5akFJL4iu12ivupn5mHswEfDKYzmMhHCt2s4kRY73X3ZVinN14wTTz5613YV7nEUvYwamKVjtbjdPMVDBBFi3Xs8",
  "key10": "4C42EvBUtVrXjQkUZ3Rw86BrMms8xCanrNqxumD2JJX1esLddGvEFAYYsrBRxSt5YDhTD7bSuHhtVoUaUyh5JC12",
  "key11": "s3JegTLBpFHQXQLGuuqtQ1Ae2gckLk7R8AMQvicJ86t8b1hicYxNXPhW5XB2WnJdAUhwxaa56wqXY38VucrAe1c",
  "key12": "saxpyNECg2KeMGyYVg9KLBd8y1dhWXmsWf8yzjJz4dNXNAumZJi2RRgzCvieiHRFfQfMZ8v9n4G45mTZS4py7Kp",
  "key13": "RmGdJW8jjjQWDu9qwqz6e3GsuyUewHWPr5nRmw1syXjXuRqBh297H24jCN3PYxGGRFszPNBPR4gsqA7EsbWeLYr",
  "key14": "hhJCMZPo3D5kNjZeGXYZtHSGV2sHTdE4WEPZUE525TAGcC5U38gnpB76wpKmfGx9cgWb9cB6nuAT4igwukyiUKZ",
  "key15": "2Qf5PMeMk4WWygWjW1xs4Ki1TxZRBpofUNnXNneKCN7PaSfyXrM9ywF93Mq1CfZuL6UfB5rGuXdqeBY7dk4Z8coj",
  "key16": "2fPwxNFk5qLbct7dMDBbrJcVMF5SjDDcSNSXLeEWjTv1QJeUARjMEa4RAnsGtryNXwJDuucvaoSqAXoy7nf2N6kd",
  "key17": "54sw3AJMjhufTFwGPB495DrFFMF3bMXqVk8P6tkNKq6YZ23JDKqhwFmjtWq4hv5dXwtMNFP3UwRzo1vANNLr1myV",
  "key18": "4uvEq38oVDNZLrGteyLLBrTYLK47MAKRQfZX1kDNbpeHrqiQQdoBRToGZjoumB28xYEVtpUY17xUsMbgCNSyiVec",
  "key19": "5epYvevs9yGnostgtHzrLkdBFBUz8QHxcV9wUjr8KfwC1tXchUAPghkzuTabNLAQZopnJNo7TD1osFaiZUVj9h6d",
  "key20": "5yuFfRbPYmNzjNzhC2Gd8N6pJKYg3632wJ5moYz6gr9hTLsYKRPSHGdbVrr57BcLUhkp1qy5EJvJ3kS99k4bgFgG",
  "key21": "3cpzLkVzBL7hybLVmTLsZWQADjEzcfe1wd9QLjCiV5MjpLHX3qWSxV9QWriJRcSmKJMpoyawoUZDm7qV3DKrWDxP",
  "key22": "4HrRiSjS3uyC1C5SfCAh1gTJALE92G999vqppw1KCFC9aJ5UUfgBuFsUSaK2crXWGbbw58Kgx9QBrjoM1fM5UdY",
  "key23": "3tiVbNDoNNGNMnvhychcTF2HVDuTo1WzmNyEeEEpP6L63L8K4UJaHRtpgVQUA3jVUMSJiukzWPv31rmiBrc2cqa5",
  "key24": "2gR9ZrgWio1VrXBK9YGsCuk8hy544Z3RtBcSXKmgWidHYrDoumbqNxB9oNAYsQJGPBikfszN94H6CZyQQq2PCirk",
  "key25": "5ryMuCQuQirzSUr1EqoDG1mvd2dF6thGKY4JGvKqPBzYjjPg4dVt3xfvRBv4pa7HeDKgQXBKHSdyrAgu72GPtKP5",
  "key26": "wsx7ViAsWzGS9AX9V4sdF5hTK8zQ2ETDFwJg1hnapNJHC7gxsiUzQBUYnjWTtbAQseZyQSdmdQZQ9efGcxigapL",
  "key27": "63N4Xm14CY277ffJV82htsmHyihpYXZWVnraSmdFrPpUBeZ9XkHdDdtUHGy7oSCTP5VAMAtSgtzEE9GW8s8m9Bg",
  "key28": "5oSvLkmkrLxCnbWHdhNpTjvu4sUCuqtbd87Au9sZUeBJqNCyNtRUJBM1uZ2PAt2gPYmvAjMorNTvqJLuQoEJtn97",
  "key29": "4K8mN9f4USMnkQDKc2WcfxHtg9UhL8zsox1nCNFAdZCVuL7mmjZdhmViwFqxKiD8og5woHT6opEpxCFDKxgvsevi",
  "key30": "3Vy4fD9hkRbiDZag7RK5vXXqWgCR4RvRxYZCWktoA4JcfhHShUWAm82F7bGsfbPQPWcqZHLMAVgHoLkWcB4hycnL",
  "key31": "2RJp7XqG3RTQiA7dGKLJp1t8eT2VfGHWzckYjEC6U3JWXYTqnYPSyQMUo7KdqU3xFFFiSwwaEyutCxpFinUiPDpi",
  "key32": "jUvV9W8duagQ1jMUo5Hmwnns82jDh6cXRzz7QymBcgc9fnNQwWn7VJKAufwE7v67HSUyDPJ8MxtTBKDMJyqefJG",
  "key33": "4s7A8GN5fMqf7AV4K6Cvg31XL76Lr5PrGK4mRuUNRjUrYv1p4Hs59kAhM7XjJmvZjyHsCD7SnH3av7nUHWAB1yb4",
  "key34": "hvnHdXh76MPj8Y9rE3u6pxnVCELzjQLdpYNLQLejHyo6cwq68smnCXPmFUH5o7TrkBFwJgrbC4pUbWsZmfPRbMW"
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
