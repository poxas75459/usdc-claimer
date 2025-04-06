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
    "5mjSPZFW9wne9Wc1Pw9ZQie4LJo3ybKKnFsikwfGQ3fWMJSuQKNUTrKHeLdvWzqYm2tiF34WPs8QThmPNYN8wJbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HyeLzS4ehfgbgm9wPB2bka9CMUKaAfJYRbAtiZAH9cBa2xN93BFuW8fjbaWh3Xv9UN7MskYjVNhy1wiEN8kQqJ6",
  "key1": "4cHH5f4RXczcCechbCTr2SYtFc5Bd3gGvp25wYuNAahFVgQN9dD9fV8rEpqbenXVgm9pwak5FWaYAdGAiiAkeZ39",
  "key2": "5cmGuuY5wd45WQXSyiUcB6tpVjVD8Hij4FmfXE7gykLxQ8wzc65vNLfDCFh6WjmZJrCahJ6y8NS4PyUPy3y2AbwN",
  "key3": "4CpuiRjpsSN9ApXfecpALbUKjUZY5fZSpcFSDtw5MCtK8XpVngyHJk1Y3DE5n6FLmcfP1t7GwcpKBu9AccR7dHN1",
  "key4": "KUSAcWHPabBe6YdXxEQtEMtchQF2LVozNV14P6jcFEQnJSY7DEVXS4VZ9v6xqPSNGRWjkCco3uMh2NzjiUUVEhR",
  "key5": "4R8gnU5SsEMWxQ6ZDnoMHPTEM4PjSZqVfECwzvKfY3xMTEYCyimvtZNxntMqoPpduLwyTZZdf5HeG4FG1roXh9Sv",
  "key6": "3QHqjSP4Nok5WPwvor7PjzFMqnGdmnoD8W9ntcXqodi2sgaMh1nLZBK6yvSjsyS8Lf9Bkcove4KTLpC1q9BASxRu",
  "key7": "2bpW9RMYctctFVyVusDMwHSxPBxxHC5WVZgoHHKurcnwXSunkb8YtVjBfv1EToHctuXEZ1KfRayfCLcVFgHSgyjG",
  "key8": "7rg9jrBKQyPLoj3sRrBQ1wGcdoW2Z72nYGXTJSQhQi9XSiy4W919NwmD1ptqq2LUYCemtRvfpf1NksaV4GA5nat",
  "key9": "2xMTo8NP8FgSFmxBRzAeCBJuGSFnfoeyyLQNeWv88natLW7J4b2tTmrt6TKuZN41MTSyKe1V16iBqBnwJNNwAQmW",
  "key10": "4BRneU5nQ7bZ8TaVpaPPn4XBz3fzVFGXwgf9D86cxFTnYSaLRwcKK6t3xXaKJ5WnfKkv9FcwCeYzLK4fbLWaFwhR",
  "key11": "3kLTU48SnxYNcsigv7ZtuvhUdMsCAUrMg7hWwb2HNBoTLaf7zZhxN7tHonkwhwj8xH92L5pS4WFtmaF9VbxeMsY4",
  "key12": "2nscpjdZwLzLVHSjAdyAwAkYWFThx43Bi5XwAwMHDx13mBf3RU2PfxTANvwccw9bmBpimdNcdDdobBgdK1MtqyVK",
  "key13": "3otnkB9mundjFDv4sNtbDvhw64iWJTC8vjXAQY6EvRDNugzkRDVuUsLLB6ySrzNNjBPmXkZt2zsJnVcYDnn5snnc",
  "key14": "5cwRnjvz2KFEVvMTzoQXhGKf3UZf1fEVYxic92fD5svLHLCjjzgES7QuUSRhpY7vsgE4XbxAEnekQctEoqoUZePr",
  "key15": "3GQqZUFgMzCa3ym5N2dXfTMbHuT4BKZ9LXmuwPHwdDWYmAjem6tS5nsqpF8ANPXdjhv8Upcn6Q6m7gySQLrDXGx7",
  "key16": "3vddpBGHeVLCDKUVbRfz3WtgwrZ8rxfKtij6yFUWFmXE3QtG1bevWEPtjAmUdrWLQZwKxY3VHcee9vmRy2ybo6MT",
  "key17": "2QpPE5GECqUrahTsk7v6R4bb6E7AXfNCK5oikMMaqLP35drJ3Tj9aoNCXc32mWnn62iJRyjjhrE4C3jYt2VXUW6h",
  "key18": "47Ka6guiPkNcHpMtSPng57ZXdEDb5RqtFdbqJTX7gMLrGAB1NPYNrJ6uotbpvY85MAfZJVoLqaL8YqG4VsYrWQUE",
  "key19": "2mNVPvdraAnQ9FBEbGDWeKJg8GTjvepU2RnJMBpz1TDWSj3PdUsxrji6iQJFDuS8FYHjAXgLEzrr9noTZa2j8GGL",
  "key20": "3xPzYT1PPSU4jZ1Gb46obML2MfBjALEUY38BhDzv9c287mUJDPPsQjTSAkJ7h8yEx7KjeXk4uCvtJJQtVJCdZbR4",
  "key21": "4jk3BMeqMPgsmWXpsVGGiovUbpwSJxCAjtbfApiqsxWxCMZz2usVPBMNeF9XZ16bvPvdMNuKbJFJsfiUGdrL4e5N",
  "key22": "3CwXiBHfgwsiZ4Y2pBppCG6T9E8o6VQd1gR5D5G9M85cpu5c6B97pT9a97awHpjC246jM9yu5BncfCT5jqYkw6S3",
  "key23": "Nc8V99ftAmXTbkNierLqMKXLveY8BAUihuweQNV4bPFJqAuwU8acxo94BoDYysVxycW7cLDT9kK8csMneP4KHqs",
  "key24": "4HxncSchmffDT1mEZDTvCg1JchU1op3ds3juD6ZMd6EVgHzWpL2WiF1Yc5C6MAidgowu4DPERv4t1cFknEFJ5K1z"
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
