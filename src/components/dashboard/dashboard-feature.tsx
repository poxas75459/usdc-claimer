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
    "51hgGzPdHjVktjrX5HNnTgxpGQf29qKwQzYLsY6JUAkmDs1sY7TCTn7RBUEVXL2BfevNZhmrfxiqvaFhSfSK76Gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nhqgq52QDjpumcZDNSGh2zVALJZWbkfmBv8pxhc1XWp9Whgze2TKTCPa6qtkvB5RJ9kzcFGbo5J81Rqh6qkQLbR",
  "key1": "9akyq9KF1EvYMbuFQr64KW3uzgQdfV1XQ6dtmoHjx6do5kXMRJReDyVvuMyzaS2aYhb9udVgWbK8T71zWFLd9zn",
  "key2": "2FV5zmH7Vv1weLeQLk2oTDBMhW94Vi77nYrLYMakhdHpp6HDdTWr4PJ94G9NvJVdZWVWbeDL9wcp865mVp8SN8pw",
  "key3": "4do6J6vKtnTpfsq4Z9QnH3jwqpb29y73TPH1K41rkx2sBdqxxes14hsaj8nSZjMG7RgFeC9wNV4ExfkeeaxK5bCJ",
  "key4": "3Hs3qHrDjfjaR8g5ZN8BMqYCRgPQjpge6C9hNkn6VEfetzvdd4jQskc38aWVoogR7FfaKcZHWWaRTz3RcnM6QKTJ",
  "key5": "4KH8VQv1C66Zc5rmk77xZKQJRvcQX5PhiEPek23GaUJhz36Ke7TDCFcMgAy9aeKHqzizTZ3C56tm6U99XX5uwkux",
  "key6": "3DauNy8GS8o1dwyr7Mdu53AXXmpJAtAXmDbJPn41WPdF4hn6dvV2EFwpxmcfY1LfC4PXurtQG5jUYVpFK5m9ULEG",
  "key7": "2HezXkDyxf2cG6ur9S1VchLwJQvunJY3rKF1HnaP5qFtZyFLcyKz6wdpCFyDS96SGuix4uFpjFRUbsun5Y6d7zFk",
  "key8": "63h3EVuyh9STmbBNMqbYZiWKXfVanFGcenXCt9HtHWnnva3kxZ3vNeJKqum3W58EGu8w32iqLYByK91sSocqCB9w",
  "key9": "4VBgWKyNjLZariqrhfDp5thqqkf7BNRtUmwjaKD1AtyW9DHjNt3PpFgR7ofmCGCZdjkbMo7Zth38548h88FXC21s",
  "key10": "3jcEPECsZbMdNZ6p1y4Jg8ksTyvVuMUQhJQ7PSHavyUgNyXFP4WFsyAUyFdJP4WuNFo4yNWkJCJRveaSgHN1SYYi",
  "key11": "39zB9wpZH8T1dWX4qfvxhzuZe974SCqAGZTyo3UeKGa4U1u98An4nhPD2w5NKtAofXNdUfLekJdhWSY9tRCqriVS",
  "key12": "61gSuQbrqk5xoZJochjce1vpaebkjvppRmni7Awbz9QXdnfWdJRW98NbLbmZrEzKJ1xXtsfn8ebu1rKVTEfqFqfx",
  "key13": "2BZeo5ZwVpcCxBdFt9F1emGgNaed4bQ8Dr7tLRTyCdG711q1nahZSu3PX4oQ6WtPjh6damGiT6JkdKCDVMvi6sq",
  "key14": "vHsW99a8FksfBndo8rnyFNaL9Nx6iXdTJ3AjLrMoCLthVQEMjz9jiwwAWRLrWbNSdjcK2eGw8HTzYGYVC8WvHxz",
  "key15": "2F7EgspFdNdMi6yHs7WsNn1B7Xv5zdSN1UpqP5vJYV4F4Z5YttC7NnokcGVo9w5aporYwVFaGr4ggyi7pJCdK21G",
  "key16": "4FTJ6Yo2tBfNUVjouL19AWJBxyBpZNSksk4zEmmeJ7vuDSdHPGeqXAxJJKFdK6qGdXzgHPRc5SgEQWj5TYWQAskZ",
  "key17": "24NqCU17VENkLhZCvc6KqgPnjuewmiiJF9wDHvEMaEbfococxPboTXpDkwrss7PX4tijkRssfcsu29PehsKKC569",
  "key18": "62S3CM5SHr4uxcvdMCC3kiPH5TTVPgDHKuesf7BdDeUsCSr3SUSV1tydwQjdGoUDpH3jZbTpTiyXqr3Af8FHpNrZ",
  "key19": "PikgZiUqKLo6Ft2xzuzyVmqkxpEhtWe2ZumVX7MGa7JRbxevPsVdESqGNgUYatHxPgbMPLDENufYTGdWWuqGhjC",
  "key20": "4vbHvg1jEshPKWQSvffE13VL8p86R6r7p3wte4JPS8Pyc9ZtAPksZqNWPhdN5XF7uToCJVwrcHr8aqCQjLtwcWEe",
  "key21": "q7iTgfUjE1MwMs6pDnnN2bvw1Ld2LRLWo8r3RrNazNLNHGrWmAH8xujaxFS6RcwuWVgcJs6Q4t21LnQ3o8j3JLA",
  "key22": "2RZrmdUuBtkurwCzusNseG3haErJqgKDXH1NUE8G6F2jCq7hm9ysohwSHzhhpgqy8X6mWauzYQqEKwomMNNSYCsd",
  "key23": "NzXgukXKFFJLzqQSAjDg9byfxiyyNy7eQWML9JfNGpHv173tmfqaTYzZWVscE13cayHRncp644BHnANXLybNvqA",
  "key24": "5cvTt9gLht7uNH5yqXYshFVZSKbWHdrhPUsJqBdL8RvExbKkULmB2oFiCfaVfK51xtd3QJQAs93Kp3f9FaR45awN",
  "key25": "3qRasDQiWaDh5PvGqutmsshtLKNhS3GLg77W8RUxRwshzErXrwFazB3TRebkbgnf48ZAWUQVMQDecA5JviS5pnCe",
  "key26": "56eQEksSpmnewEGY4GEhrL6HQyrrAdUPsjFm24yeZFtfTaytcPhm7gt48QaxRsiNGBV8SE5d2yVdcoH1v51HtTK7",
  "key27": "21R2Kfp25fP7BWKzJXhq3rw4Q6AVxoTSWG4L7CAAm4jKZzMYTB13NC6KUv1Qj4eXaWX37VgeY9DQx24khgsWLTLY",
  "key28": "2tKjfHcPE2Qq6tBBxffHVtLt5sCDwXX7aEZGzJzmNDhCnNTPHVHtkF7aZDam43p4cBcumzBF8aEqqTwyPyt8iZXj",
  "key29": "3YCtSFX2qUu3d4xqh1RjgmRFTv4soAeRDbsFcmtQF6XitRiXCdbbSL6UChpqoYexJevdKb5MzKBTCWoq156rXwTL",
  "key30": "2onP2GFA35kHskiYEgJ4QE1vrxEUeiFRsqcVxAPdJpfjqEQDc6kpih6C256rTzSiqbqgmKpYB5QbC7Q9H3h3KVen",
  "key31": "5o5ekB2b22VMDL2JfSKc1K9HxjfpfJtqdRXFN3DAYb8N7jqLW9gdzEwZQfpRCSLBLBud8C77guLk9uCDqAKXXvXC"
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
