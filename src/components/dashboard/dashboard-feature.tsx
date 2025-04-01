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
    "36Ck9t41Ndv9tfVNnRzjeCf9SHje9RgvtrNbmSnaNcGBRVBmNLZoTJqtSpfWtGCH8e4bCQQ3WXscrav7ZRkYLxAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dykGVk9etAwir6nDpGXZ93vY7C3tSpBNpgnF8shecyxiTVmqo9DwnHwqfTaU9E6KLqRNVxoN19jjrSxkiHbxSfb",
  "key1": "MfQx3qQNFmcK9S9GiDfj5Agq3F1NsCbgQPP5FfPPj6gxMCLWWJXDopLbMRmZc8sTV1DWsj4aq9Ypjewt68AUybT",
  "key2": "65LucnUxMT6kPijLJKSyqA6sHX6AteVadUErR21skmSxEpXVeDSBmryB8iaeCMesDDsdQSUwffbtebrQxPkBGayb",
  "key3": "4EMMhHpagSF9TjDKiyzLtSjCZLs2eLyCU1BYR1bXnvSKpyF96TdTteJ7EbY1c2V6syxwtkq8BCznHqNw73Dx3xk3",
  "key4": "5zGmjphjWsQoJQrVgCnW6FxGjEN7KsFcF4pXuGkoK1NmWrGkah1HwXhpEHdyTACNEpVdM9LLcPMjoDov3a7GPFk3",
  "key5": "K9RCuL784i7VZ2vG4UC4YvaTu7NV2ZrYomzafQoWDqdcwhf1EbqEPh34tcZjFtBUVigMYdbeQGUCGw7DMG8neaQ",
  "key6": "4MBbszcfcPx3tjaHMNckxfUAMLvbATbLCeduoywXddLB9mRVSwXbHJYUTqSLjeiVLv6EG3bSN2pG4cPQtMwtDCBm",
  "key7": "3Kc8PQ71vURqmc4uiP6TDFypBMwicjwz21WbRDW6ZP1MVzk3GGrx9c6XkUVxmKXMPQbZKfvrdxyFaZ5rkQ7hb9N5",
  "key8": "2V9rs9cduN3Df1CjrELt9NHm9oPtD16TYpX3T5DEYWMuT97Fs7p3xYtT2q2WFjd9JDeWPpT88wFYg8mirKXPLKd6",
  "key9": "5kTPAtZvmkLyBbFttoP5Moz8FvBG157K5aNgtys3WhjmVq4UWoxXENRyT81yfmB1Fz2BAwPQVrszgE3sG7CW6ZmK",
  "key10": "2LUA2B1BaAgkhi2DQ5Ws2pzuGcndcjFSeRr9ZkGttUxgL1Q3dPmYcyQJdoKvJvmmeQWuN9ykoYsLGqFrpsX64ruT",
  "key11": "3NMXxvsGmy2PPPXU3PZ1psdpZ3vvjGScApk64p1HX1GhzvwGa59gdwia9g8twYRXzM7FW1eWC84evr5xfUvoyvow",
  "key12": "2hZ3gHjza8TjVRn1wkFdFZfkfhE93FJMuDhbpMnPcpXZ96SHYRJFtKLPTZeLYZwj7AGkVcJEaeGAroHHyF2WWndd",
  "key13": "3deEgbSyLsTiQr622wLvYEtS7Gu4i2ky33iWLvBur93BUvWtQK8dqJh6BWzGwQRmNfnxgTesuhNM2ULHJFky6bjZ",
  "key14": "Fexv6wu12MMv19a5113zB4Tbex59Fe4K6vszaVR9dUEeYJ7T62HBPzcVPHkhoPmhw6LCkiwawfADfHfaUkVxa7M",
  "key15": "waiGE3awzLPaYvPmYHTZdUu37NgN325w5R9GH9GZKzMTcwUTSG7Xb3WrciAp2KkW8cU37bwzJz6Eiu5GXttbY5A",
  "key16": "CfK2NDumVRCztwex2icpXADS7nJBYfHFhnXW5pmnUHD3AHrDxose9BGvSAZyLLMMV3Cn6S6jUsxUXAWFhdefM6H",
  "key17": "4ikka2T7mQ1z2PVKzJovJkT8UzvMXpaE6qbgbSqX83Rzgaqh2LNZgqmQzSs3NedYyrR5ndkRt7zeXKEqpazXDDB2",
  "key18": "5kNU784RgCsXJKt3DMooq5vimG8DLkXt7yMPFJ9p8aZ63pBrDr3n7YcsoQ4nzPmkFUJypC9DTn4b2cEfNALa8dUo",
  "key19": "5Jn5J3HuCrkrpLPqnnfaDmVNS4NCVD6V2MUK21NsBWNrUo3hA9TBsjoJBnqiFrYqXKcjjQG7BCHS6ZAdoZpMojRq",
  "key20": "2UbPhhWvoUDVahNTepVPXNbXPKRNWWtcaNttsTbF7q3HmyMLUiH71CsgLf7bt6hXyguxaniojkpENnAguSqb4q4m",
  "key21": "3v1bqim14G6qGN6Be3WPPH7EH89SXqKn3qWaBXPmfaZBXMjsT8iLmgDu3w6eYYwE7X3c3LT2hsh9s8jzqr3ufbsM",
  "key22": "2kZiydtZhxPrSmp57gFw45MDfGvFsGQ4vWxc4nWystUSRmHwFx4XrdWC4bVfg6q1h1XPT8CNxhJ1qWS9v5ZUwtfD",
  "key23": "3bZd3qgH9HCpP2C5JFEdE3L9t3bv8wznve3QLHJtHny1gqg2WLdtkjyMWmHHuK9ykb16MAabq3yZCLR4PTS7D31t",
  "key24": "3TjxdnnAQtzN8TnS9UeqMXHqPKYfq7j7cCzrAXBo9TSDxZcaKtNFHw3mm2MiZC8J7aNqUd8xM9hSNp9514Mjo2NB",
  "key25": "58139b5NRGcLgEanLpzApzsLtPERNoepMkk8zb4Euk6Z1dtyswRQNx3hKWjkBvX9zzW3DenKowM8cgvCSfWCgmvo",
  "key26": "67pLcbUQAZ1CB9mwBdtxNcdn2Np6PzmGFNAHyJc9uhLv8Mdov8Rd9TXP88yJph8QDdfMJFVwmAui1Mr51wVKM6s8",
  "key27": "4SqyXtQsnuELhmcQXXQDRp6qquuSF6rNshCPu5axcvJkaGbUrJC4vdYrfyboHQD3ZUtfC4aJvk5cYpTXLVgv3Nre",
  "key28": "4txQ7ekN1iAG9F6QFd8Aa7s5rpuZbU3tC3UhLnGPdr1xdzauxnumhzQDQv5fqsh96mPDdxXgk1ErZe5coueDQz73",
  "key29": "sfWLcDcbv2b3n4qhv2H7zZy8J2Jz4rVUip8de37rjo5Sf8e1bpmxF6w71NoF1RZXZbuk7n43h7MB9511DiUhzzV",
  "key30": "jDM2BZswhi2A95uhxUMKPX7q5ySqJDA2ChJXWoBtUGjedzSa4hw1r2cj4KJx1afUv3Cyp8Qe2P5TEYWto3niVRV",
  "key31": "2z2X5rAA8dkkTWm81yq5im7BjLnmbBTffSgbLLrJAZPvymC2BbFfT6CCB6nD44R3HU2ZrnqxXkfguUNPTamZhrt2",
  "key32": "3wMYPGjXCXoPq87XjXaBvECmKchFFbVLeqRqSLzRERaTwHbVMVgng4VxMfsRs3YBxbHZVHqRnQxMsgE5Cfk18FmJ",
  "key33": "3oxSPGWo1k63tbyYpEN13K3PbvfACUwQU6H995MFs44Hc5AMUGQZU1gTxjk51yf4L5M4qYcz6a56tQQmfRZTVjm7",
  "key34": "22GCntkbVCcqBS7HvzPLm9eY27Q86VqLzGAvykf5EY4o9wRActU4ihw3zvrAJGJQXgfRJBJtYvsNpkfmgVD357Zh",
  "key35": "4yLUBdV9LG3vzDUcMcMhq5N6ZvCtYmcCKUyEjKgGWizzpswXDFc2UgbkriWM3d8iYzVTisKmkdph4F8LjuAmA6hP",
  "key36": "4V53GDh3RVyvSekApBLNv8fjrssFY87sCnPG68eCaUpbuyint3v3672hubb1GZEhUXL6dCSRhK2eAXq7Uy1nEJBH",
  "key37": "nJCQ5nXpiBRe99uyVC9wZrdbWm4BaFErmCiJ6AADRP9pjaTJ9o2tSvaQviWxa2vXXUrwBqmS9jozyeJgaq42yYa",
  "key38": "LqCCnJDPSDjMd8sDHaNJTbTdLcDbSSCMpWND3qmbJWDR2KLRSRyTvLef8YUseRgT3RfCL86TBsQUK5C4X3wuKxW",
  "key39": "63GFGmej6gXVxuhriVCDTS6TkyEmxYGTXfWQ6sqNfbCTBReTVLYEm3zKdZiXRZNH6W9cAEDL5ojb8z9YU2Gy61ke"
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
