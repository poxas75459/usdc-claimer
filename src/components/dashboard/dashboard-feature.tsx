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
    "3Q8C8v3XYKyP9HReAv9UQQHNBbogfydQKwtKnZSXDToBcZq3i7wRSfjCDJoWYUEf3TW7b7UvCN7K9ZHt3F3yqCgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ht1GzjuzQmF7zS6AJ59phW5GruxqpG3R9XvzRasXmZDfCpM6fJBMMRfb1qZ7JEtA9w25kEhqJSmpm4XSngSL18J",
  "key1": "3epZs4WYTMnHbAYZM9VkGc3U23EZ1AcRGPq388tC8M5skrguU2aDL1mCzY6CBYoHGhp5C3supHKnHfH7msqnrVVN",
  "key2": "4eEJKkrkutuW9Udn1U2TBHbs8GCdCrB4vWdGHDfGm2vRbVaXqyjTVKtBqk6BNtrPEXv8eTXpXLwSVzScMyzLA4Qn",
  "key3": "4KKxiVAByYHHcQYtFRj8NrTgJmYabkBdKzYmzbeteRS7kwSFwsBU3PJcAKrThNbqtiQcFUJCpaxM2yLiQ5XBoNxe",
  "key4": "5nuLsxtgN6aYdbnvops8CJ9CCys3HWcG6kctYC6nNoPiugqD8PsjJCiMsBQb7Rzss9ouy3JacbWfagRP3h9SCFQE",
  "key5": "3Q97njkk2Vj66tB46nMb3MCzYUJffV8Sz5e3XPnLtYgwLc7dw3Y4nu5aC6BHBiKjwqqAmCjgcpDDi3ccCKD5qT2P",
  "key6": "5VnZLRyj9Ui2JvjasTGjBqHDLC5hDGJKPUCnnvd8DtpXy9KWFm4yvwpcUqx9QM1dv9s5Wo3Ji3QyuaKXcdTuqPoU",
  "key7": "2brMmASHzVwjz34kpz1hj4tc99QW1ZrehDKjo3qL55yxPH4gQU5xH74kDbqyb5t5c7ro4VH3LyT7oUmo7FW27mMU",
  "key8": "2iv38GQhGbcN1G8U67sVDNGkfEgSb6wrQY1CTDVSYtzB4JbMAuiVPFf9b16HW72FGYzi74wB5KX9vH6T1AskzSS",
  "key9": "kkFXzDPFgJGsCZUTTCGkDqpbc48WzhWfp7D2JRQHP5RmFdcW9KQW9qqAVMioRwFg9MWidUkSAgZqLbe8SidJBLe",
  "key10": "2hmZMmn8ATuEy1LzS9tM7QUM5dfLHNZDU7hWxqkQYLW44L5Q8AXKaE8vCBRHHGmQQFCRe6ZPRTF6VZNbDXjVR92Y",
  "key11": "3iJ5vNKSx957aJWs1WNeiDGhrsBAE6Rmwinx8fJQhMD1X7wBNcCEN8Dmqg8cR9SLBREeUKpBEVCAtVvxN8Bdx68v",
  "key12": "3zHGDdRYEc4vdRBk6jZVq39FrvQdRcMFWrUeV2oQfGuHLNQDXiSmE7hSAZqPCKeL8qqTeDwC9BCJzsPu1MqioJdn",
  "key13": "3grGEPwYJn5q9iGq6K6X5jJtHA9Fb2916wqXtRVKfN8mnnT4ZRKNi6FD8P7RoXQiVGqUQRytmezDTCx78fpUiiXh",
  "key14": "5Kvee5e2mUpJBRYTkwiBeVrE938YM8cntAx8gtGr1A6goTAUr8BNWb8EPLumkfXwTsTu7PbykeSVRfWzipcWRx4C",
  "key15": "YmkyQXBxjjdZ7Kv5pQ4dGRycKiw7d7MHD6MKNek17u73YXa73xQaZT8CJc79MgoQK4NioJVhLd4gsu5kjvpWJou",
  "key16": "3MPnmFL72DBJEx18n54ao4H7sUinHwKYh51FM2BjthMQ959xC9QrAiMkQoboTN2YTofSsUk5sXA6BPS8siej6ACL",
  "key17": "nPGEU9Wz5aN4k6zrVzMJPQm4qR9n1PMwMpmzaAyUTeMxqCMyuji2ofk2d3NQVBtnRDnEbYMGPmpAxQAc9HF1hZq",
  "key18": "369uA2qw5GawtRUNcYa4Nx5BGpVzninhD7pcpRrD1DJ7ubUo3oKkeQV8chucprpJXbZHNQ3LgRrKmGyw82eVTbnk",
  "key19": "6dM6hxXJUfqmtKy6sSmBxaLBvr6yVR4eAXvsFm9VEFXiRBC5VAYgt9Mn4HGGZEy5ed6N2TK6r2NPq2X59mDV39D",
  "key20": "R8Ky2yAtiRe5i3nfspbFh8zKpbW7L6tz82MrYegmUsq7VEzh8GxFztpupcV8QB2s1A5rNksuh39m9Z3AXFTQvWm",
  "key21": "qoaNCvUQAJURm1h6MY7Ruw2XHLsmF1uFjv6bWD5ip36r77tNaukj61io7nQ6ZFdESvVq7wwgafm88GQYP1FMLw2",
  "key22": "3jCYGsTf4HbqSkaRsrcZADg7dUaDH6Ap66A7Jv8wCoKtBLRg6omAurrecqwZoSHBswE2Xs1fXNu6J7LK1V3gTLNA",
  "key23": "4TWWZh3sFWeiPMZGvD2fRutCTHLBRaeaf6LgpE3bLx5qvnijHwUuNpru4mqibUmV8G63UnTSvGR3Pzq3Tq33N3Fj",
  "key24": "Z1ncaw9sJmuv1Sv1sReBJvgGGVrZ71PBtBFuTsvUkBejL6Kh6y7246o3kf2s6jBTdkBKMiY2Mx8ifnvQ9CpaqhC",
  "key25": "4PJxDkqujc9qcL4a2wmqmDjzzXvbp4N9jtoL1BKaFU2RKJNZP3iTgmDBLSK28tRYy2t19JjaWxeFZzZWcfMxJVHG",
  "key26": "oE4DPZ8co7c3ULX8z6XnxWeprEsPH21md3t5qhM8rVVKGUFSorcWH4A1eJgkL2qjus9QHZwgGqWaL2CeY325aat",
  "key27": "2oL59fdYoBYmmQGnPBWS38A4F7fL941E8eZSoVVzcMXUB6LPLtdu3ZkU9gjfUBT5No9AZdvuGjmHer4udcvH2g4R",
  "key28": "2xrjKuYJDztSryjpSyZqvwW6GZW5uWSVGCj27sAicpWvxMhZWSTzFBtDSDnCNYomGqsPotNCDUqhEf8CYnTSL4hi",
  "key29": "3STE3BsZVguLm6CCKuYv5FihyFM8hTM7rqrz78R5xH2Y32vKswjsQoW3yhvXidggBsE4tUomq3foGnzBfCD8R5Ud",
  "key30": "2FShvMCuQrR7du8r3G2zEHaEY5XW4rzF311V5RBxnrd5kreDiEniwbPEQXB4uUSV1Fe1DiSitBt6TGVSCTxGzrap",
  "key31": "4LGjkvT1QRuwFbXjUFyBx1z1G3xMmCYtnxteqwRvTmcE5JsCHZYLEUpbas83ynTKCRZXto9GehwbmPbNneu6XSoc",
  "key32": "4eAERZYongxcki1CH84353fkSoL5Q4E19MKBnwJx6gCPGkWrWvYhP2N2YeTkoMPyNLyJKQV1gyumE5nZ6fResuA1",
  "key33": "2WMxvDsuQPnHwum8r7R7ZVpTtYcQwTKxDP27xc9Repr4iYCHb6YornKP7fhfApW7e18ykDfVkZFNH3v9VatqPYvh",
  "key34": "2Dzn5Uk9xWYwFsKMSCwwUGR6N3oJjNJCDS9Xtb9x5KVULAp6qhSHvXHsahTfNMQ7vVg1i87eFhxQAH2d6ouB7CdV",
  "key35": "5cxFFgrHkRh69oFtNjNP5bDLgsGudsy5GwVsCwLLuT9g5XPwTTd3nAHoRUUdWdbG1zGA9fdhbYb1axpL22MEkSm9",
  "key36": "3FN7Se34dx2dAiNrDAi4tsDN3QKJKToRWexxPzywpDUeyNhYeh43qGcF5cFGksRuXFFecdZ38k4fs6MDHne7mxi3",
  "key37": "sKZ3eXyxdzpKzJ6bSGfY8rBn6Qbvk3HoE43AmyhAC5SwnVie5ATHdLJxvPVPwXZAdrmMGpwpxyv9VETQSqEhN4S",
  "key38": "rEaLNmLodhnabCW6Cem8qb82GRrELojkgoM8PxwXM1yfJx2TF6qYqaTtCz3SErkssaqi1PM9GfUGAgo6N9qsndx",
  "key39": "3xsegzeMJGcaR6SavtdVyfncXEE1eEH4tKf9iemwfKeHLp73VB1g5P9Xdx2GGvxT4CMgUY3NiFQXHuuUQTQFseTb",
  "key40": "3S4PrXuMJHoyhg5xew6X23FgTx8N1uJ6XjsajmYUoNk9R6VeST5tc1uzN2jQ9dKZUjVz5hgFjS1kqt8Yg86kzLbH",
  "key41": "2UCyx2UBjppiitj3jc1xshAuMEm5TQU7EaaaZsEV3hCKE5MpYEhpV6jGwk8SqSB18Tq9XNx6n8C3qdqPvF4hNNH3"
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
