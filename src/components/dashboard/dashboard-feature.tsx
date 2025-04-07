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
    "5aFUm1KiU5rx8tmfySdEFT9Zasbw7BmeowHmxEK6eYVCkKctuwFPGJPBqWeT8ARXpYLtaYtUBxZGtABniY4XtaAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26V2kQ4WfnjpJuL8tcqNgg6iZRkqcJga12rG8TdnViV1eAexRe69rAy93NXmdkDT3KrYa3TuZC2nVCbSTFB6wdVD",
  "key1": "3SZiVCwZi8eva9X81GNGVjWDBom3N54AdiU3o3SMecvHcfxMZcae4bWF1gsnsWEKs2QBs71XibcibE6JgL1XYzXv",
  "key2": "xLoEJ8bWH4Wa9eMwsQnqzWoEHDoih1XDtU7Upx6J1Q21jhui3vpx6yntYAWFVdvFnKNDJke2YiDXkdUPnr2Jntd",
  "key3": "5PCNfhrdFche9bJF78QaqSYQQagjqnjuyFQsW8QoJg3QV8oycm53xBJvByum16sVnvN4qTzCPr2A7Zyt2KcLv8Pc",
  "key4": "3pWMvPto4YwSo7o98PL2U3udX3MsxEKEW5cj7N237UsupEzZSAfKZL4KwfnuToZoZpdkt7LzjLwEjr8PShh93vAh",
  "key5": "F27oQPWfKrt8NEQmkEjNWyzohxHhXueBBb7VoibxtFJnNHtct8XMX5QJynzDkscFDw6amb9n1AaTkccEUkGrcKd",
  "key6": "2LrRpXaSRLmjB3YKPzBcK6QtL2GC755sdZFrgUZQzjzjVrPzzzijobo3uLmNVrUivRv7C5dRmJ79tBjacS3SK6pN",
  "key7": "8K8dDWmebMhyg2rnfDnFzLZsrGwUqS2RApwC996yBDAMUfrbWP789VswQKvWfQKfAwFdEoRkga1JnWNG7FPqCFP",
  "key8": "4uBnmGebjs4BRRhsPsjAbqiEcYL1q9vSV86eqfLV2RwdG3w4LbeCyebpWC32CPztwC2Uctfh4uQcqcyTJwpjhbjQ",
  "key9": "UDGG4i3VfUQjGFVmz6cmMN3pWDFsYhp4utV6yAFKWzBvJPpyygjQGtcGhxg1dcmcQRXTiLA248V9kzRzfvDE9Za",
  "key10": "2XisErv7YKXBcocUWAV7RXP2BQhPzQi8cB52ViyBdedRuMBzRDgBX6LF8SZRyWtVAEYoJKwz9puvzNPf4zUdE5DS",
  "key11": "MmBPfstqP43Qg53EmuZ3TgTqs7Zzu9Ch7qa2ggG77xDwiBmvD6qHGfnHSkaMw6MSnitdsqxgz4244qtAmdmtsNw",
  "key12": "4hmjZ4U1g6BKm5j97nS4foFk4goPZrzjWpJLmHFx9BMyuLFEu5ijHWQeSxhdJR5jidiac7viRVHTUx8FBExpbUUT",
  "key13": "21A8eBbjsBSzCoDETpePhN1Jn95iBfKJ9iR7bz6s19nC2fAKwxe8hSY2Jkd4Jw7wG4k4YvxsksnTMj6GcMeouYqD",
  "key14": "2Z7UCqNDAjrnPHFdZtSy2uCRnsPHPYixLx6NHeDC6PfNtM76M3synSGXWjjzEej1MvBaumv9Amk9erFYUfK37fhy",
  "key15": "3Y31CyXM7jFBA1VUxA18rpmFaF2mxSmSDyAAsDQJJCivfbD5NhLMMWj485Q5oZpHgzDF5yStYA9YzWF8etJHxSM9",
  "key16": "e2oGRJkquLEC9WUXG1wrT4SLoyrQnpzzpCSLkFjM8LmWkBCAo2CvejSHxhZu2RTvSfxEBSikSvjYcf6XiVGaWA7",
  "key17": "3h7Wh4mK9VHyju3VhfxXspCMF9UyBFezuMapeYqHUg3ucBF3yPWZNGHtQEQE5VANQjdV7ZwYSUWBxYk7EQi3Rm2d",
  "key18": "ffTJ8utCXJd2Qrq7LiUxJnsX2YUN7Fq4xCf3mGwrAUUeknqivupsRwsTMssdPz65WUtGbk1o5QRuwkK6Zt3AJAF",
  "key19": "1oy5UUCHuGDuYFWkqU5cLdWzz51SDkj2rmKCnF84txsg61qkh1v4PUwuejsJnnqMzdDhUs8cRuF9xs1EPxzjRMS",
  "key20": "9kBZ3i3PYaxgcSUtzjRezP4fiPB5tDhoUa1v7mzdykDt62gox9jhUVaY4a9j3HYtxxpmkxEeXqvtFeefvCciQCD",
  "key21": "4oc7ELsAfofyqoYGydxSWZeB26MmpvtwRAFnvqkFyww4t6h4rpn23WsP4PUdzLioy2Y4mjfbM4bUS1Z2s1bjAL7i",
  "key22": "5SiZW9SViqNXFJWKDMwxFFfv4r8eCpRzgwyXt8MjUCSMmUNSM98Mk1EvFfFV8RqhTFswifd1LyDf2kZWY5F7BtKg",
  "key23": "54a8rbQW6WPNe8HjGGfbsLcg5gXnKkz6XAtpvC4MAs2emgvoNmx3kTuhjq5iyc4injti5UYCzVdZtJVvrrjRHTrb",
  "key24": "CXyoUSUjSpj59eEho5abozQq2btNaSG41CsCiq951DY96nimkRQtuyzzJSov4WbKmKmhoaXeJVzrZYYLJAugnVz",
  "key25": "ZCFGAtVmJiWHbp3WMbmEB7zRWQuUfCyLqs5dR5j8zHnrgpEkL8qXe1W3wbwNFSqYngGUEUb5SejNvhFHdNsAVtN",
  "key26": "UZhzXUxmz48ppd5LWp153HJXf5TyJr5zTcnN185DUmfbzjZ16Tdz3oSb7BM5jM31xCMc54YyGWschXmkZvQtKEh",
  "key27": "3dtPQiYz8T6fcgedY5jSzQbBYbd7EKYLv6ohvHiVPGQzwaLBeVbsHMSDSeihNfk6dUu8aEVxFpajYxtckdKk2pFA",
  "key28": "5sPtsK9PtUjbEnyHBwdbotaD4iq7ZrHC8Ns6VP9m7kPBMmb3D32UhHDmV1THqFUWXWuqdTxNSDmVqKGszjAvXpiy",
  "key29": "25iugtFWMjZM1kpznqJJTx93Jghhx8Ap75y3JTJuegy8ghrTJomfgXw3ZxsjJFNq1TePeT9RSXJJ6rBkN7pXfwqE"
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
