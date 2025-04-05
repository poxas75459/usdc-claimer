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
    "3zoAKvwdPmK6eNyagTc6418CfcTf1r1wxaSYNpQQ1YogyvR3breNKSezky7gwyEqetDy1LiR6tcX8XoQMqtbnhTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fxbzrddRexiAo5vRpajZ3aHFEx74cGAUi6H324WokWYx3byM3UeemUXsq6gTpNpzHEVf1YZB1NLQurewFyJBiwE",
  "key1": "652QJ5SSiPxmyxrGNALSTFTCg5h7jaUaXoAP2SSVziyth5i26k6Y6q26ZwsxnSEGWPAgfSVd5mDNTzJ19JNy2WYJ",
  "key2": "3TMVHSTF4MMWoWzowNnAjxKhLKxJWqtDa1NkqCZ3wtnLTYGaRwcGM6Xh9Y9ahUrUuFkXMMBC45btUiEC6dud8R1j",
  "key3": "2P7iG9pVYTNQGDQ3Dxan5UZynJKPcEppnmQXYvS7ZLsMyyuXRrQUiMkiLRnufAX1RNCK5pVmLwGtrJ1AhMnjZLeJ",
  "key4": "41S1wkD3PAnskQjSarbh8WHBXePCCe9QbbqaweEfe8AdDg2Aj3cdsXcfkP5AVF8RmjAAgDdphW9CCX6pyMouWRgb",
  "key5": "RnULt9nRxYK7vyDp3hAeBKxv7UZXwW1y8tkTYHcYnxrhmmp6vdFyWRDcoDE2p61ewCA7ihVLT1YWm6pZJsqm8vh",
  "key6": "4TsPTnUZCLAwdrZofNnjhhixpHsbzB9MRdeFtEMntJY7hEd1p7HerLzqKgVA4EeLD2YPyWShU2J3dTQGSmjBwM7q",
  "key7": "66N9grw9B7QxPuYRRKQWFRmc3mxVESuDxeEVxcXwjJyidyxzpFkPkuLzJbb1gspuPiQEQdNQNaQfmXpnHyDVTzG",
  "key8": "3jCEQTwWfWaFfGdcMRAiXmvTY9o8gcvgNAddiUVtLDfAGetXiSYRvUm9gnNSJXZ1dVTdv29UYbRrUMCp1fqtJudz",
  "key9": "3AVPHJQsxU5bz7zh2heJHXwWzXinsFnt8HB4cEt7E6Q2NsgLYupu5ZoUFgrMpexAHJ2hUfRBvoxWa4sEXGUUzuMQ",
  "key10": "zr3eGBdzxZr9X51aNaog4SxKQJScFfjoDvAx5RVLstt4MQKV94eKDdaCjmZ4JsTfH5ikDi2itr9ePHFcNAmSASQ",
  "key11": "58UxiMq6XWQ8xcfofmw3ePVCt3xBimmffqtdkrU9A2mnA93xch5ouBukHmRZeA5zuFEJPAK9PcBjKB1id8AfYE8r",
  "key12": "LL3nhyKkB8atdmx4SaLHwVGeJzjWf5gfqR4PBn3iKUTH7GZBy6fi72iydRcWnCRsVRX9HbzfBHAoLbQCrHX3YoG",
  "key13": "5FXPMdBJdvGGGKRaZP3eo3DWnQWYsyVRgiCYjZ1pAKn89eXg2fFx95A7zrM3AwrLnNwePdqszKg4KSeKT7ePbVHd",
  "key14": "34eDo8DBVu2ftj39YGJY1myHuC98299tUWqGjis3Z2Z7WRDnEtWfzhRuueuPK2RxfwNA9PC5BnZyqwxnw8nsABv9",
  "key15": "2xbphYWMXiUrNuPYHYiy3k9zdL8Kc8WuiwTu6k63DQcDn5EkbnTkku83H77hmni43Cu58L1DLpw8pQhZQLfQ5a5J",
  "key16": "iiNYsZu9jZKWXB7gd9YYCNb2aaMhLgg3P8yN92jUEMXTJ1Jos8xwkKt5biTQkZzfd138rk7oaHaq17kAshY1dih",
  "key17": "Rmug35CbZ5RSxbdUo7CjDbZeckHj6W6zCrbAbVHPM6tQUEMjgyzhGLnwEPDWaA2Ye7ZdYXUfsaA8tiW748UAvhL",
  "key18": "f1PDdaj8f2Vyp8J6s6FHdw5iDEEiqimJRXL3STxqm7i6PwPiUvrVAa7MnTQYzDXvb7Ydu8cafVJW5466BKavqJh",
  "key19": "5PfFzv57BjFrsQfcqCnZWnGdBuS7Y5fWMsT1J51QjALPke92gKxY2g7cna4Npv5Nxmsky3PJqSfrcymPYrwddp9B",
  "key20": "8GZTFZL2FftDADSHh6FMxUvNWhQLuWzBX2tkGhvogcX4s1rbKPaZtPNjYy7XnUpguq6KBwUiNYLuXcs2TmtTffD",
  "key21": "36CfbgVGEhztav16QkyXM5px43sRyQ356HkPKpbeY73DTZWHTT2UM884Ua7QbaWMExJFxDyZwPATagKzrkoaCYKy",
  "key22": "fwcTYaHq6qwPe1DkYMNv7Pp5jyGeGjbBJo6JGebNNp9yZjwPM1Gjt5Fm9TDTxwoQMjrQEAbb8ipb47TZbPHCWFb",
  "key23": "4SFgQksjqykKZjuHcWf3rx8XwEJP3YBcC6Q3AtjNPYkJghZpR1eGnPE2ngtgQSDQEaz7c93U5MmJXxd7vFyw1dPh",
  "key24": "5iw8GVqWCJSzdTmJFDqXsedpk1fdkMSv6HodYXemSTXjYWkWuCd65XRECEcdBitqpUMC26s8e62d3hB3BEX8MmH4"
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
