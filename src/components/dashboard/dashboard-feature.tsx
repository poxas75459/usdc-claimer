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
    "3JQU1XP7vMokrygEBLj1e5xkaoiqfPxVxxnAuYvdZwCzXPuESzgb3F2DWH355RJ2mVtD5DYujYHtqRt8286XP1Cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CWUyFLLAhCKuhJnjMFLdAsfmw9wwtxPnbdUzHWB3hdvZZHQUPp4ByXLuVHzfaNDwJc8itya8V6mF2xveS379iAo",
  "key1": "4EVKtHz2zD4t7oP2ohGxZFAhfnmyHzsoMw7i73zocBeBKL4xhVA9963qAmaBBsRBhGCpqXtWgmYSMVghphkAAzpX",
  "key2": "d6majVAGzVEU39cPQTifRTbvT4CpCy3ZMVy2R1WbPvWK5dXY6jJZkzVBepjXDbGxp4qc4nzGV1T39dcc7M14uX1",
  "key3": "4jumGN6y4Y35zL7r1Zt42Lv3UApRPR5w3w5JTgshvzB1wDsn4hrw9cCad4reAcGjxRZEdmXqSGgFWYbVLQvBn7Kd",
  "key4": "5osDD3eGepCHiCLV4KZPf6W4jJ3RryEzU51hqp5q6sWzhcEdJWn8FAwFy8uM18cuAZDrDmUNwL7ECob2KcjBu7SX",
  "key5": "2GazWmNQkpGNxkjBMFDFQgRQjd8hBNkS7KL79maqMrAg7F6YzxUw4XFTbVUtkwjWgcaoLn7D5B24SDKWy6sqEuWX",
  "key6": "29kH2P9DQmRhqUke9uvjbhyS8L4VE21nznZUurk26ybDfsHLbwWqcAxkVfVcds6uifNyuMdYa7gGp4GR8cN7Q1TB",
  "key7": "5M8MUZvVhr9pKGMeVSXbY52hRPdbv6pRSjimZcYUZK6nwQm5r36vioyovUH3bJity9Bd5YLv1MrzeM8MxDQyMsDo",
  "key8": "EUDpscK2ADS4uEXdA5NcCaKc21EjVRk2qSY3JtdhfQ6DBM9XZSta7iNxjL9Q4PovWgEBbDbdsc3yQsB9q2WVU8K",
  "key9": "477BReKU7Yz1FRJCa6gTtmk6QXGtJ7Uze6xaSb7upJS6TKnXGRAJTobidxszecQrfH5hdjmAjasWcrKgcJS3QWd3",
  "key10": "bzDv46j5anxUMf3x4NuruwkuwigL679gG7zEK4yNQarQTCkUafmGev1JCbBpydhYnKKKGCC9tYY7AogdAaKFJsX",
  "key11": "4onDFyLpCD1NqeSYbda1f7HNjqThMXhzZkmfPuTuF8TfeCbHwnpPwrL2BB3yHesoCjAksm79D4JfVTcrQTFfX42Q",
  "key12": "3NJTyozEhUPVW4RX6wxSzn4As6kBoUYN1TCd2Djgik8GhPURdHha1FHobU9cx1LbQB6NmMusZAbha1qBBzCtgeRj",
  "key13": "kmUjVAu77WY5mxswVADHwx8J8ssWCc3pcMwRozY2siQ7ANx7Xd85WZzPErUB1W3AUCuX4E1fE76sFwv6Ri5wzoQ",
  "key14": "65BqSyJx3h1di9PXHpjuXFoYZxGD4XAZDhbXNVYwbtQQB4HTRrfrwNB56dHvZbUPnu8GeEPMRcYWYNAXDScb2Zwd",
  "key15": "2DiHUCRiniygBBrDfUsDgSp5nLyRTEU5VXNxHESpXcBf7SrMpL1XkpHthQcTinwYnhcj9LqHyyvEzL5WeR5uMgec",
  "key16": "46rGWmW7aA219KyU1ybZjfWQBACwbYo8pG19xPFCGfsSt2DNYmUkVtCgjW9dav21pjV3WdAvhXezdrwGxStVjFsx",
  "key17": "uy5MFDwZ5LmsbMZoqUFGnvJMu7ra62DRWztGaCL5j9oUACnp22P1j5SNR5DiAQbAMkUzeLFCNZdYuX6vfXsX2h3",
  "key18": "88iPJfkoKbLocMz1KoB54rrpjsnVehm66gZtHG3zeAo5Z6JyhLmtepy26QokfZSgEPVvVTf3qxHHzp6B2WKdu59",
  "key19": "PsD5983nnKUCYN5ad4sUwmaxXttho8T24fPE33jaZDbeJPWwnHw2fij9ZDBSxG8pjMkTfABNSLWstU3xmFH6866",
  "key20": "2AvYC78K2nWQbFBmVVukYPecN5UsZLNdbgQpYDuU2Fpu79yMuwJrTrvsDytJMC1MDNVeai8MbmWo8XqopjV8hXgK",
  "key21": "3JtFDM948FKaLWPj1i3nYjtTTVJBZZj8j1JobZK3Bz1yHYtA98hcow5WeD7bPS1vz4TYEYeMy1Sry1ytcVBmJJ9m",
  "key22": "5bcFDjSz39Po3WhpEMLHezvtC3jmJ5DhkzkPg8wAmtz7ozXCyRJ6cBBHRsnzeZNk6igUPUJaNy9cmagsApPNCTPp",
  "key23": "eCUFMnanKXeYfL5t5vQ23bE2moVYpVQ4mPQ1BsNCLXojRCnMvZgg1ALVWYLwzpiuQN5QZLwF8nXyMkai49jqPAR",
  "key24": "Us1Y7GzTuXNm5MVmku8XNNos5MjkCWrbtN3hGnEoae8bNQRhVG6uBSp2keGNbdymeMoZHVjd5AyBPHwLhwz6TmF",
  "key25": "5LSu8GTqpTVMBhcVHb5Dp7XNCjYu1kZQgH1rupHBPWDP57d42xdakdri988AYBQ1GFG15WCT5GENcJEuUaN1BDoJ",
  "key26": "2NHgcHCufCnjEqqTPT6yEqwVAVEwxvRUx7iCsrM324fcFJejAAd845V2htX33VC9rW9YmSRj9HQrnRzV27kgvBrs",
  "key27": "58BzwoCRYexpbvv3QnUnh2XXLCpoPmj4WhyFVxxfYwoYb7fJy2pexrPq5X3uQcXx5Ad7TS4pqQazvoCTySTJ9zjb",
  "key28": "4ztry5uQqRrMET9GjnQNdDdBu5YzExixwQK7EMzy29Q2b2VK5BecbsVoMLrspVR75A9QoC8YVqRYJahULHrvtwWa",
  "key29": "3bYw5FpEY9Z2aUL7DJREvPgovGNaqqBsSwtsjeYsaLguatZTUrWs7zyNCS1gKMnC3Y1FfYzXbetCztQ2jgo6kKWG",
  "key30": "5cjYjtnFwVDzTELUgHCM9rqTmYxZNPa1LARCcithLExY8cmXiRLNDSYrrEBf45Wf6UUmBMyWs1LyUsZkvMTkwbw3",
  "key31": "SqnZhydK3mpsqBuvNPQThfoRUzvkQmcN3WqXUQKuHLKErL2RgrAimQUni3NKxnPStdiavSudv2hPeCnDTCieLLs",
  "key32": "62Sjt1bRes21HECzZX8MBZzHcQTL3eBQ7SWurwwN5V3x7t9KWa4oWQ961ZkMhVcoKnYU3DCFDqTWpxfSPxnY1Hr8",
  "key33": "3Z1W2JaJkjyCiMTwiX1xDpbydD95qjmmfCa6XsurDBgms9kM31XFdLu3Yu6tcjdojcPB3BvgidUQDhqgcBo1HoXf",
  "key34": "4KHMK3iwfWvR4rQsHNvspGTigMQ5o7ttMygYuAYsKjAgBt6zayHDzg34Mx7fKy1QDJTYVLU88Wyz4sMpvKFN6noZ",
  "key35": "5TWUPrvsZ8yUiFAV3VmDV7H5HhrPooqE25GiGgucxcfQKgBx1qcyxwmmP5X9wbtpkk9iS3AQWUpLC6h92KxwbBXm",
  "key36": "3t62j2piXx7dwus6aqYPYSXXcFXfymjQBntVBXbpxFCsQZBWjgsELgsyFw1mXj5yBdbzxdMnUhZwtt4SSKuczvZn",
  "key37": "BVoqi2XgHdRBrRokquTNTsFGbvWRrERwGFUdGVrwYwvFKFFbZpm1MfAtpadSx69U2cjXuNuENWyNk6wGyV6iTaJ",
  "key38": "3UQrmhchKzJ2RXHN7dPjWYnHDVKc9DQDizypHjLhWQX5jL6JnY6aaQsyFNdX2KwL8BXTEDc6gonjrmPgEV9CREfJ"
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
