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
    "255YEuPQs3zQ17C5aGYhPCjrR6dCeAyRM2knPQamJiuuC9VD2tKa2Kz8wQGeL9bZiUZHKrd7zPiZHrJFtBgWfKA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hDQmrTi26ExT7EDm8MmgFFaXJmbVyjujN57XuJM6zDLGmkFSh5evLvvY8dzC3QPf9dJBk7D3XLBrqdSyxEFi3UK",
  "key1": "MxLLLX8MpSmUH4i3MeUKhYLerwDqPeu8asrm4nYyEw2aq79M2xwUBwjpyy4iiR53rqZNhpswK9vAmvAkTs3T6bR",
  "key2": "3iGgmWr4ZzaZ3Yt8CPD5YKU2arCqVig5a283bgoKf83kv5U4n3ReHbLCJBeApVc21pK6XN3kaPjq4SY8nGvDhwNb",
  "key3": "3VGx1iVhpdg6c6E1tvDEnzsdxMBvjrpbSD5L4cM8VetsK9vzjYKvJnkdS8UdfFXHYXwwwATqmtnHfyeoc4M1eJ8x",
  "key4": "3JdeLWqcWEBWy3ApSNoecuFJsiBiCDupEsNTUfC71VyZBwszjvazNk98tVjqJM3YSXKQicMR3ugsDFidjq3xyNb9",
  "key5": "2S4f8BH5sii7VeCewC6hh7Lmc6ezZPd7aJpMqeQ1i9xjEWdkVnYMvYBqzQN2Vce1E75atBcRBCTxxPMRWwuJ1MNi",
  "key6": "5RkCc8RBcTRDEKXphf9yFuMPgZTsiysqpNj1rD65Y89zH4JXYbUZCFfXeZKdsM6YFyFJYAq6dtdEWkgfLkhurzgr",
  "key7": "5NPV6iYeu8ry5WoAuBSWHAt8TZmaBvuruLx1C4gysVBfYQJJ73a8XcpMSdHzDeeCjUga2sMA8f2ScmzwmrCHX47K",
  "key8": "8LknW65WM9VeVtYpFgJEWquC19CfPsYAfGHxEJiHFSg5LKu5bvX8GbyVWHn7q3Q7BBtkq4p6LNaUs7cFGBdVmN1",
  "key9": "2XJ2Xw1KAqhYiYkHREgwi68Xzj8UNwDRVLr2twHGxarvNsm1XSkyk7XSBV77cCeYAtrQKLWt8s5ZmPX5QzAdyBm3",
  "key10": "2vNa8zwB8cVbjaJGQ9BvwgNALmYn2LwZE2spHuUqLYKadyiNH5cDSYdSCEME5cXZrXuyT58mjyxMu2vZtWpi5PUf",
  "key11": "29h5Y3JjohZHNxZLkSkYptNyo4b59yWtx5M6Wg1qpqL3xrsWthw8hTw4FmM4kbcNYW7RGJaXoNuZgLZBoksgqv6m",
  "key12": "51jkKTytmYh1R1vBegadTpsCPx3YDSqQLEvb4E85VG6uh36ZyNfWXgrE5Mggx7g6yeQcwYRR9wrXZsRKp7gTZe64",
  "key13": "5FhgM2VtXXvUDCxFwaDL42YfGdcqUgi8pgw9LXtvkUe5LAvRcwtuTU8Uy5NuqEvJ1r75gXhcQKhUQr51HW8oWAJE",
  "key14": "5WvBjS5AA7z6JizbKdqMAoFPEm9RgTefmNaBg3FscKvnY6cEWBKjXbjWFHGYLchdka7ZCeky1E35P893Q4LHG7Kb",
  "key15": "3PddnbGK3qAwyDR72cGcTZJFL2WSDJozWRWjxkNBRrg7AxwpXiz9rBNtDFnqyPr9v6WsMzo3JaK45kC4WuEZRMyj",
  "key16": "MLYSSzXrTnGds2rzqbnpEpxvXCcha2JDhCSVdHrHt8g5CwmuXQJZd6LjoMQCfCVRsZGr3y5PFuKUWV1q8xm9XN8",
  "key17": "4rro3SyrsjEht8tZTvLLooL1bPNqVpC5ejX2TRRyYu9JFy4anp4g2466JayQf4BpVG2ZsXLzrGStQHvQGgvCXiaA",
  "key18": "4EwPLTTSMomgcYwfaqyiXNbAFWtedeqndH7J1fo6HUGKe1112j4eb5wZZaGZZf39XLEYhkExUsrQnwFLLYJcpLgL",
  "key19": "4MmMa9ikKpyv1LxiH2zzQdvZfLChtzVHV6q7X58dJpnPUUqoU6fuGDH3QUbpnd5X4UW7PRc2nE5raypyDZu3K4SA",
  "key20": "3ckJgkHFVUX2kCgfqjkRZmJ1i7swuuwH4CHmBFbK6qvBn4YL2TRc2gwxZpP68L5VZASa6sC7UcMStaT6AYDTmCJ9",
  "key21": "5VsPfxvD6wi6wzfJEFbKoFUs2E7vHPWoB79EXLTpEGJGZhXo9EE7ReLvJg9fb2PdXQkkM3v7DzGa8bWNLS1HiBBy",
  "key22": "rAMnCBgLrz2uKUghDQUVvyrqBXpHTSdi68uVHQszQDgGQc6fEJpKrnnLJncnTa4FVZNFpVkfuXRc7Vx6sEuBCwo",
  "key23": "3fMd2J44Quc4Ae63L2yYX1jsFcBEQAYZqiPA7o27PSSrV9Eppr5NSWJqirLY3veRm5hTS5ujvMQMtzyK1Hw9BrkJ",
  "key24": "4QBHY1utwJvqm44J33kPQrkAqXn17YYgqiduHLw6CJyMUy2oHhuzmVjmDJGwrFRGQizrAQfXXgaZFgF3xLUAocnY",
  "key25": "5DmWshCxn8FUY4FUb8EKPs6iEV2ASBVFWeztMXrmmprhhc5z17YH5zYiRssAxTFoR2Kqi8N7URV4GmHat99iC7sq",
  "key26": "3idM4ftnmGwkfhCshDou4xixmtevi8oV4Zn3iey5PGqovEv7dvqA5MxcSuVEBRf6UgVoHQTGn8USZaGD2SATVPb6",
  "key27": "3aVpApE2Jegj5QNNmbs4zLVdfbdiM5d5WzitzhZBd7JU2ZMwCMpjmFLZXoNUWipbGKsffLSYfx71VPeJrTP7uq2H",
  "key28": "2WVVHU1XbcaUrg9ryQpf6yALTRcHAPxHExUfWvG5cutS4mbUUSafPiLDV81g9PtWN58nSXTTtc1TXKTfprG3jeWe",
  "key29": "qwxv2iBkXosPYSrkKtHQ6fWYoqWAWo4L6QQwsJajGhBWmKtvCcdT8iLu3x7MkmQanrUyWoHfawcsHVpXeHF3E19",
  "key30": "2HQYESaRMtHXhzJkhMtYur1ku2PMmEBH6gWu9niT167SDREhPtdaf9TmG46fxXGHqfgk3F6169vzRZVsJdH9PY4f"
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
