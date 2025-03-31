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
    "3uP5uohP9qcDpQaaBxAss27kVjWvPdLwjDNn5FoRU3idNkTiZ4MQrtf3Bp3PRYPviCdygAQo7RZvcxfH1gKJb9qT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MEbD5BhGVakitAHX1bKtAwfhTaQaCHnYPMp6g3W2JJScBAV51qKBb6Bm2eUHrXtv4SCECyWhRbkZ4xGeEk4Pn2t",
  "key1": "3EqigaSuHu81bYGCMGMH4MXdUnmzxvYxF8ZdAhUmFCkkNA1ykuC5A43EEcYvjNR9xHiHi71UQNQkyRSg4in9pNQm",
  "key2": "4SQxzHXrLL5YZ1J9QpMzfURQrtDYt2MMCyLtfhu16U2c56dLJATUJJ2UuBfj7KC3VrHSuUdyDSo1kRXNX8iwcqLJ",
  "key3": "5SKsqZnSuA6ZYrJWcFQ43WdprH2mjTc2swpV6iSux2gpSaicurrW6qp6Q8PAeWRnkPaswUodV2ei9oYSZPgKTLsg",
  "key4": "2egkgFh7FSqX3t2Uek6VNxt621LcU1rwFovWrpCciwCE6pgkZFKy3XA6k5oggSMBDyLgSTgQZhW3xMgztP69Pxra",
  "key5": "5NKGPek7ZmTVycA1oda3H1LsV2o8KitAAajK5ejuh74XV4rnULjong1ur7Q4p8dkumH1Xz7qSbfWqiL1TqDYJbN2",
  "key6": "LrwjzjJ8U1RHYR7eodDaoQtxJc94vYbf1PsVH5XMMrjCn8zCTBvH4eGS9siyWtpy1YSbM3RaH6A4daHtiox3rrb",
  "key7": "4nuyy2ivEVVLxWtYsGr4eH2uVgqKP562jyQxStRM67HNC2XbgfJsT2b6r5sunvWrt8pZ12EtjtLAAS2J5iXdbU1X",
  "key8": "3G1yU3qtdqQppZDjTwd1GWg1PCMo9pxB2vATUmftnb7TaFYgJXZk9d1hrprwEkhiz7M2LX1b6hSqgiviWfYkCFFF",
  "key9": "k7kTe4GLPkXJRXeV7VDbK277TAsnrDAnizpzVLwJmcc8NsY6AuV1eerzVFG7RTfpbbVGpGidixwFVeC8nrt1cJk",
  "key10": "5DpUoroUvEgQK37AR8DqD52RgEAZ83k6hLaf4QTKHijj5LeiKR7hp6s7PrRyR8u19ZYaEVvyobgTuJJfANG6wfGg",
  "key11": "mzWeq7hXkafCDktkPHnTPD7UHuXrCaajo9AjCFqUqwNnn56TprM9ze2KsfAxbkqGtftGdHDAhQZZmyZdzcR514C",
  "key12": "2VZonhyWF2ihkQKBydiVJ2fjxfixTcfLiqumrFj18Y6tinkjmYTxsJ9tLRG272pfmVvV5tL3A33WBKqdLPmJyZmn",
  "key13": "46XHT7SMVX4Udu25AgEREQTVFZzGpmiyyPFCwjHmwfTML9KzMCboT1zz6moevEKTGdB2hv2e8tKsUGgwjvvSJcsd",
  "key14": "3V4CxcBciSvsB1UXZ5kHLGHxoJrngEyLH81oSC8A15D6Eet4CeMDdMZmm3YtjMWQqeHtFpxqweQJCqFQudc3fqPM",
  "key15": "23bnqrzKsP5Pta7xwCqifKtDSNsGB1UV4C258Nf74TSwCbEEh8Q7aV9Toaqd9mYYwTMLXEuiw3HrWn9ZfGTV5gSS",
  "key16": "2zxjEa7bxkYJwhnJSZgRj9nRMPtzWjVAJPWgiR2kyKoxUxPZcvjqZmXJVp8LV6h99QUWhxeW2BaBuRoiRqqRkoGu",
  "key17": "4FUi4mgGriysYGUSptLu6Fv1mukPtpra6sSDayxBnYgd7pEM4BzNCkbVNHizGQJv3h3zFpNw6ZiKqxioiKt7uCdX",
  "key18": "3dVRCwDKz3BND88KAhsHovV5dYDiCCmYmzrF87rXmChuKjraQJBEoPEBpk1KbikejXDvKSvop22SLKShqvvYu7ih",
  "key19": "4Dr9hca156DXaJ4WJjGstmn9E5C9n3aLU99Rcjzb9548wqCU96xEGxhLGYhKmm4TDoWU9niva1z5MY3363YXdHg7",
  "key20": "2P2WGTnp9zU2S1hM54WoawsdTxa1Ctytoca8tVjhbpqxWPkDGMNfC9tWqaxD2v3j5737T4LppgNiZHPPusFkBgEq",
  "key21": "4s7nqVdZJCtPzVbSHhxsrMBVkjC4DRc9PzfrSidWPcWg9ncxgKJYjknEnpj7CNnV1pUFtXKCi8bxjgpboNdSGo8e",
  "key22": "4xF3vkeNYpJsrh6ZXz39StdDSQLWjrodjV4anAXeozD793nokJeZJB7uNpgXxbdx2XK2CGQZwcxM525GDGa4hwm3",
  "key23": "47V3vcHrSqeL4UzBTnJpurQ4FDfGgJ8EP68iQyGVB7EmsYhUCpQRMytmeVTmydXcVwUaKPS1ppwtvm9KvBgQxnzW",
  "key24": "3ctkAptivU2MbDLAs7fAufgFNz2jLUaZLe2rn6kX96bGjXZX7VzJ4f1YVZ4RkjvzTcdGKcSjB3sLFuccaTTdxm95",
  "key25": "43nJy8eWxsNEhPqCXB6MfEU4Q239RbjSEGWFjTCvMmrx2v2MW7LtR2LqRuxJAvq9LPCsHEXw2bFXaxCTnHPZT2qe",
  "key26": "4uPw6M4Re1aw6qdK2k5J6gBaKKuDWFCQmuVvMS35sR1G4bfhbFF2BEcSiSLrNtuDrzHmJg3hqS2QqswBk6uJTxae",
  "key27": "3f6X1iyNt9TaBBun5mENmeHTqUaUxaEh5KxHq3H1VZmEByVa9AHnMBgGc9LnEFFvEBxU6pYRfHf7qoUH3AreHPmb",
  "key28": "2pJpPNZgs9RejWbpYNa8CVcgPPZQmFeVJFZFVFwNifsVb5Y7J5a7aKkbhGrfsM9WVt3xuV1WUUHqwi3XknjMrHq8",
  "key29": "5ZskiXMZacYa3EENTurGZhborYm4huxncu6PZjZ1y1emfxrATYYVTGD8HofX2P1AJAuyjbFkK4izoapyNPrPmt6d",
  "key30": "63aDYEwY3YBXytyYhTHzcZYE9R5Gk5rhzZ8msw3VNp2jAkmJgaNNRPV3dM4XrUahwaxAMADtaiXD2gwVPiF1uHVq",
  "key31": "122n2AqwULfKPNYcz9Ha4z91fBrYRsmeRu8p3P9KC66F2HYrajxfUBiDwtwNYAZeo3AnPcgQ2KfjuR16YGntxbfG",
  "key32": "2Z76zngmh6ktBW2mX5P4bkK8WAqvuapdhaPtZrd6kdpMxdMEjRrqRbxUVAV6hNzYoNVnBDk7jJ91n7fkMFUpUjJR",
  "key33": "3UqKmZcZz1euCtcZkGBfx6s2uKBjzf2Yw1GzENe7atbjs8XdKY6xBjNvibcWHRvcajYHuqkKEr8gnMf1GWCc5wZh",
  "key34": "3EBYYDvzRf9MLZzEyr8zMQxMK3TsmnpshvZP3GhRqKn3Fukf9Y7F3rps13LVgZFYTKK67xJDVHxK7x52tKSjoBMx",
  "key35": "4uvBFGpfnREGxuCTjUMRwRrdtc5m6FFjp7RTp2VZnXaugrnzyFVEsytL3iF9MtARtLNZpj7oYnLPMWC2udGLoqGm",
  "key36": "5b2TjrZo1JoQZghHUE6Tv67Ed9hSChbYvkR7zYLkYgY9zJ7bvxsRRYbrfYtRUtTJLSBRq5GAG6rG1hMH6AZvV23K",
  "key37": "59dnELDErKuLGFrh9ZesV24yQJ4EsPmHbBGDe8ttvUtyrNsBrb6S2FQRNxt3eGkVUBC1HHkMnU9k1U8XQ4jm9PGC",
  "key38": "26jq6KoniJiZZw8iqeAE4mELaPbVcKRwYH6EtBiXbxV8XwJn6vS6MDS6M1uamHZ3Y1UJjabyE6KjmJ4jdiUHfY7t",
  "key39": "5QFqob9dS8L2b6TA8WFs6wB9jZiYLWBPJzYsgHkvH4wSDgHrUeKARh91QqLPWhxQ7JHHFZeqCQPqPDryuBr2Rg89",
  "key40": "5XgTJUcqbPB9xVSByyzTjAEuvPwncmJ1UDvja4gNkj4X3EihSkhZVxPNUdXnG9uVdi7xhTLtmu1XzZhSMseuJ35s",
  "key41": "3PwDRmGgKggwqWEktRt3YHJthaT8UgwZHsoj6trF8UPueUPohDhy54VQGs4fB1sH8GhJBUQ3dcyouB4M6KTFz8LP",
  "key42": "R4ALjeJyPb6UWTQEMTsKgZdTKbbRnXLKsPyhmehLnT4jEA5LRbp1x2W3oKMK24gmNKDR35z2f7mdvpgZ6WLyf8s",
  "key43": "3XgMw2Vid2PfQDjAocjvLXFJT824XqwVR1svhXZQMYVTetRf8LFPUu6ufTEF9ohp5DoRpxgheFcdFj8s47yf47ek",
  "key44": "5c918ApkaSeHLJ47E7zKerTkVBQrRDmjR5tFv2ugNk4rv9onxjuVz81nZmTjiqzbJAEVTB3ynFJj2Ej72e3DamVX",
  "key45": "4FqrC6mZRfFbotkoxbGuVQPkGSw2Csfoh4s33bhWkKEMPhds3FuRu3YWvNY7rYyQQEVQosz271EvE5aXFdBFCbHW",
  "key46": "2VgHPAtXwTjWt8EBudM3vju1pLjwTJyjZbcLw9EtMYdZ86zfgpFCh8ZG5J8LsHDQcCH6GY5dFnk73v1xnM9mt31s",
  "key47": "5KmYJqmKiE4wdbiEBGSTJYsydy21CqWUHtg4jeGRYbRnZco8GuyWdUSBCg5nKYjQzY7VWzuG4CBeABeDrZat1hBT"
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
