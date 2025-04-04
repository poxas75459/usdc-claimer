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
    "zDe7vveUbRGwBJf9YmB1WPLg5r1nfY6MYt99JyaSrBavNi8tyqGqp3gj4wAAuBeXJzkCJR2djwKpMx3q9n1DuyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qs1J5CZc4KnA1S2oL67chs9Hhhk7rRZz8i2VZ2ZXc3DsEvQxf6hkf8T3sTTzTF2vKvheY97NSaK65BnMeHvvgPU",
  "key1": "2boqX824j9tBxBZMhfM3jeoujZSQ5xUTnvnKtaEQYi7Kddax83eMjXbtqMeWcT7WHfTt11nchHnb9eZCFw2s1YaR",
  "key2": "5hn1VDmCUozBXW9Ftgm76sVzpWcQgJk7LSqvJ3tMYT5BCobmXCU3cqE3uGzNe3Ki2fTsAZgPqjb8keJZzjFyh1GG",
  "key3": "59DX7vx4sVCTVi8rYJPJuuYeYeEvZcvtYKFGoFona6goyUPxvR236ZswAv6d8Kb3PiMiJK95ULDA8RJUkZgPDeoE",
  "key4": "2Bg8qBEsvnTWQssEBExUpJGtocq7wNc7cG6KKyj4obXJmtCNsjqVyYbbZimTRkma65zZ7kNSW17VNUSDybE1zajQ",
  "key5": "5yZJmfoSvasNyM3pgtFx2svvAxTfKdYkQL9w8gBVWheZjCPLgmfAGhcw4fDk91yEw1x8jxUe7CENTKk7sQv3dC11",
  "key6": "a8vGGMeHjSDzwyF9hxJwNpqAxCgv9oKZLbYGY9KQHsAnfBxsVsS1XjL6DrwjEgPub8sZZ9HmNwrAfPiP67s3yuS",
  "key7": "277JcDg7fdiTRoMygm5Y9w436mT133XRRrbyNQq7vUcuvsDtZA5PR1sM5W8z5FPWqwwk5PAqBDcjFE2UhUPiDbKJ",
  "key8": "4i72TCTKfjrnwPr2WP2ti12n7Q6MkaB8eSeYYURjgWxdxwuH2iaTyxkfgs8MNVf8aKzDrmMenEVKwWaPExADFzih",
  "key9": "uPJhPzLohZqEEBryaKG2o4kZqxieGn7aHb9fksjp2xGfSiWwZkbWaPJwUJS5Pjbd513kXQ4wAqQZrGxkFzuMcv4",
  "key10": "4QZJkYo4zv1Jz8iiQeiH7KuFWT7j7CzAQuqnVvhj7dQzTD4wQGwozCwkCHuuFh5uz4MviCRSeVkMX4f47KvKYNHg",
  "key11": "3RVUFhm798rZupk1UxaUBpYbToErcfKfcDzRR6ds3dZxvFkvpoirTj7PdXpzAcqMwdYQeamauE4N55dm58NBXryj",
  "key12": "PLJ4WxiEj1jth3chtWnSRiydyoFuCdvGTPBA5JDTaQC6smMDBUWQ4Aqd5RgMxTiHiZo5fJwjdeBPPxLns49eS8B",
  "key13": "4wD94PB3oTaEvq6K2VbHWgKsf65WNqS854W3xyJEBrj6R8bzPiitfpxT8fRw8FdjboGkE3mtoYSQSQVP7EDf1qBg",
  "key14": "3nvAC52QVHJ6dJoAgHWvZp5b9thFGCn3v8sNVTzwtyd6XicTuNrdL6pzV5nNW7Bt5puA2UWQjFaarQsZ3qtFpAAC",
  "key15": "2a77kDhEYqCuYaddsj7L26rd6xqzh6P1UKTWHX53uTzM6Lnax4Z8S2PGvCfuMo8k4YoPPyN9nBtv7VtuesUpZ4yk",
  "key16": "6WaMvoKYDSK195WnZnMwwDq4fvT8gxoqPRDdkZyDnCTLXTdokC88mvh93bzbtXDeRcG1mb2F3ZjR3mV5uoNKyS5",
  "key17": "5Uj1zpdkbbogvvWTnhAcvagc2FcHg9xGBoSaFDzuQoPaCWwGyKabZzYWHAifCsZYNNj9s9SdHpHeTrMi8s3WPDT6",
  "key18": "434d4NzthbCoErb7eFydBtGkMQPkLVYsvhgwznkjwNNewwmEnPL6qL3qz31yzKEKZjZubwssNu1su2z7SCrxoGrM",
  "key19": "485JHwGGhYNJ6SNc6UFiLSmsWwPzc6FKocu9iEdxzAGh1BsPnUucPWtQBDgMAbyNvB1JPQCiWEsgBypfuLwVjm5E",
  "key20": "2s3vsHP3VBx9tC54oncQLLjrpZUwH5iNmDfEHgEzqwe2UiaSmer2LmUpr8wvsanjcv5w8wbNpMbTMHEsKRAE7z83",
  "key21": "ms5CWMvverwcsZFnB7vR8VewK7fFNDMMk8z2r58MyP3PAoTChkzbKkRti3mLV2b7y2A1sZfkSvXAkcunVCCEpsh",
  "key22": "2qvfZqRRgHqKYhpS2xcy2NcZCRektXddJGasmGw7GtzeK5vtaNGzSAjfqieBXGeQNf4V1X1hTuwiuyWr4JrkDb63",
  "key23": "3AEioNX6gw7h7L8zi8BhRnSNKxsm4Wkm1PWfz6vUmyw9C48EikX5kvLggx6Jgdu5PivQBhwXuomeoGKW3o9L8Qjw",
  "key24": "65MHVjbeA9va6p4GiUsN3gLWtVCCsmuZgvg7YX6t3tomsAB59gasf5NjCimRUmaE7oGCrMZmwvKLs7XF6TVqFJs1",
  "key25": "2eK6eEwrRyLZ9FzgX2WBSqJym4JXXjuHC7FUHWioBtjjYZwAMJ3n4w9HiCr2PduZGMvzr6vTGHPPVkk9LKteiXpc",
  "key26": "4irSUKswN1raLkWmgR2buj7TzTyC1fRQQQjPugNBFg2VpTh9oTbyFjA1pkNKvDjtfTboCAFQs1P7iDa7UoBg9ToA",
  "key27": "TmFDnyQxDN6GiASWwGyhLYuXKg7rEG18UhkYDJPQw2wUWxBL2mFiYK4WSaBc8tPGYxjRm1sij377tsUUfRbwRhm",
  "key28": "67jWPWAWsxDUNAFN6DSqAxXpHT4Sd73EpVCqqja4ZbYgiskyYbmZkXMiS63AUMfC65mYmUkaHFetjVMsW6UhKnfP"
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
