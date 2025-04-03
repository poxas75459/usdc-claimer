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
    "5sUctry1nnJxHmnxFZHv4PyBopxr3X6CUbCsesH9RvQqNpPcvHcEQiP968wmgs6HiC7dWLyVv3yqT22yzCMpWWCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQCqoyPN1PwKxFRxKxLLiEH1xfV79j6C9u8sakmwxcbfZHS5E5LojicBiYwYrptRhRGUHBLvo8Vvq6veeSzJijT",
  "key1": "5M7dxcTcLD4naPRapWiSMHfS4tZov5BpkUUst77Ug6L3Jyv7cBaxHruLwxhif5n9ihY1ZqYmB1AHa46AH9BK2mPg",
  "key2": "4DQWhYKwSGza3HbZSoBJE9we2Y5jDsxXQhKBQuLGiSXMEhjZDJfvA1JwW3Z5zuLPMdrU97g8rL2mvcapPniQ7QJk",
  "key3": "3D7w7iBryEwnweS3gikqYhjx1W6ZUh5tnCRrTgY5KXwoDLAmi82hoPn55foBG5gJUWTWMSa9it2Akds9yogrtmQr",
  "key4": "2YT3fVvi8PwAyrSfh6fjAkWEibyGuWvbZBx4b1ehCwcLmJvqFXGA3TiAfuaLzSxWo4SXytiqbrSrEpNGYU25feTs",
  "key5": "2AYLPjkwxbJ4gRNjEUyoxViQ2f3epQqQeMUFHpRW2YUXocJtYA8HzTdo6L4n92XUwEx9TE2ic1Qe6XExYnid5suS",
  "key6": "54vG1DNHp1etmMhfzB4dvMhcAxRgs4Gmg5gGzTDM1abgkUaCr7Q7aC7FAKonuZojH7odBGLvQ9bzAj65wq1v2xKB",
  "key7": "5yk6b54KNG54dg9Jxs4toXeCoxjSGpx8Zi6GZZ2FFqHXrrzMBM9bhGcvxDiGnAANCXLN9HZeMPwSoSf8xdQkmF9W",
  "key8": "2nbGKQ4VfHrA3EozGypMrzh7wEHLWXe1z1PXbT7r263bYvx3e9dbV2xTbP3fGz8g8HE49EduNpug2tmPimTAh8vM",
  "key9": "3FgMx2JywYLiped6H1GUqW8sQg5ox6NozwSKfJvUQbYVaYviTHy4MjSZknG4eLL3kDfw5xnR8D5iLUrbXUL6Dw6A",
  "key10": "4Z43VbBKPfAfcDzwgUPmz2zn27Hyr1Y3endZkNfHLoYXUvk1PwPzbYEZYQdLKKduUeo856sJqs7QVmgCsRKUNB3o",
  "key11": "2Upcz7ZqQysaECVDV8gAitjvuVDZRST3CM4ts4Lx3ASCdvZqZYKsmCFPCCBnvrsDK9yrUg1GQabEWuSHhy7r1JHJ",
  "key12": "2cCb6qVtpgp8o1iSzs8o8t7DDzFbvAEagxvtioDxysB3Hsks8N7RX4pGmYt4d6yrYDyyPZG3Mqy9tvHF59DyNFGu",
  "key13": "4sE7NFYs7QCkJAmpPUEKE4kEQZXqV8Gpmeihw1b4H2Y5pCSjRyP1RV6fHoUcNcz2XJHrFG4dAHhxouiCnV3BGNJ1",
  "key14": "xJFbuBxoMkHtDXrBebEz4UmnZZjdUiZYFGMTVK2v1JNEAXyczG4hp85bK8ggPpcrGt6M8biCSqDHYTG6u4c1jYV",
  "key15": "CgdV4JKEoHkt83T9bqERC9iruDFoPtwc7mi8yVXg7PiNk2XR6QAwa7THRe7iQd3tXRFaJhzJ79zbMqs8YoPksUH",
  "key16": "3qxCXBpZ4xqMfiF9VJXsnKgV2s7MXuubNVu7SHFj8RK7k4DZJhqrRzoyS5vRASvzzfbHH4gHz1nUJEDJVtixT34S",
  "key17": "SZFVxK3H1m6XqMMHZDuWAoRTZ2ETMXvTbGYaznSmrNfQkdVbKjrayuGZ4hsyvJKVQpeSxMbtB16NzE8rGau8k79",
  "key18": "MqEqvWH9LvPHQ1x4x3ftZQShBeqLpEaaj2cWeTueNLvK9F8m9tz3onDMaWXjijPuPVA3yACyEG4qSDuS89QnLew",
  "key19": "57EvBGJHTSBwGpLF1sGnY7Ge9rWqyYTLuQBe9h6baXGJssDaxCmYQ4GfkgkS1fyG1QguU3Ho1qn4m5Mfqo2F5sve",
  "key20": "csxZJL4rTA39adRayGMAnXj34AGVWBSiu5ekG8mJGe3fLL4uzW41Loi6v3Qqb83aGQBthQC734dFUjBsJPRkNFW",
  "key21": "5UHXBbGnN27pVcm2svj5Aitxab1tBMhmDZjfHQ9f8i4ivHTLvz2MewfyZ7Nh5qkcmufQPofuoxPA3eC7TDNvcwNF",
  "key22": "3NbNA3L4QmwfEmf9Pxo8RJGQh7UXbe2HwWyvxYAC1Wk5xN1jusgYrY3UypKUuayLJudyjzkUPKvh71oQcMLF6YvS",
  "key23": "4Q1Mx7vNBCJkCtxoFpp9HMHcCURFnaScJYeiiWxhsprCcyDhd7uVoXnKSx3oV5QwGaDWJnGaMMm2vnrvwcyvy9z4",
  "key24": "gmXCSUVxEt4zrTtuzme7GdtRu9QAz29fmQyDxjG3gwi2s9Qru6swatE86926Y7iDMWGZShUYcYW7pTAR269URYV",
  "key25": "3dyAujvumYLzyYASKBpAh1a9g1RVdYr9uRB8reGCiQfxTAeBan4FYgqg2TkkummZ8gDGXWz6yaNMmYdQLJVx9nWH",
  "key26": "3QyFySuCFNCgSLyBou3NPTcZqrQuijLYxZfZMrzHBzd2P5YPHEoVFPcuLNkK1dcRBSpKyhyCp9bXH2yk7ixvqQ2p",
  "key27": "21eZohScUU87XbxHv6oR8ufgr17HmFZuYBPF17xro3R5abgYFXCcMwydoLthi554n4ZDGqZN9db4LJHM3nPPepAW",
  "key28": "2JEMxsyj3hpTFibUfJVE2ewgY5xniXdBv4CGhnbQZVMx3ND3mveYohppxR954g1REhQ7bk4SFwhfbKeKj28JC7U2",
  "key29": "2AojSqU2hMQ3BFLscJx55CKHSrwczUNCxAfJJH6NwvDF6mf77DMeuhmu1TPfT7BL54EhXuo6qaa9bN3jKZh7eT1t",
  "key30": "5v5mp3LKz2bCVeSesb83fDAbHNKFrE6EmBjUHfRZdPbRaqsF62CLewJkB4i2ZiMd5xaJVA9H7XNUFMyUCNHS1Jq4",
  "key31": "61hqENfmpEb7Cs1HMw9NKXRbF44RRiYyUYiEgvkWBef3YbsTqrpCYi4J5S32qQ8QbwULket6Mao4Ursobu44C8BU",
  "key32": "2bcSA6yRVXNPrv23XxM6Pb1hU3n35x42bhBzF8D9qBCAVJVNCLEp6izk3vhyw15TiG5NmYnvbBFMqbXYzNrtNxWR",
  "key33": "3GAGGDe1ux1xJ5E9YXhHkqHgfMMSSffnN4dCEfUmZTBvG1LGYVmh8VxFCQnwwY8zFQZ34hjCrRmL7hx9g6RYEu7J",
  "key34": "3ZQJXUotwm6KeXaCdM6PSFtBNS9jSTFcirnaa4NaXsJCvyfKzT95Z2AGh2Uh7bBbXy1HE8yBw5TTuQtc1bvnd61L",
  "key35": "3DDA8BWRstkDvAzZCSur8jyhWRSkxGvv277FyP9JVSz82wyFb5QsXUEX7TR4XtPqQ6UeGrzh4qCrT8arbyjtNNDf",
  "key36": "2ztGeUzVNV693bXSC9BAhBTTXGekLpLYgjcsq9RF2ZA66i6Du9wvAZZPbU2irMXcgQJw2RLZXW32GTtTfneur8CU",
  "key37": "4a4fpoqq697saEedhtUkgTYezqzd9EZkx2mdsywkxzuQ229Ji22LLvQRXnjC5yMvTnBy1iUYBMut1YbJavSfEUjM",
  "key38": "44TKprYi97c8SMtv2RXKgRjxYfZqiqsdWrvmxE7YhvDceifq4FEvz3kvBNtjDsdUmcwanz2VtHEqyHedNuPmZbbi",
  "key39": "65RYDP3h3XcqYh4rKzoupn7ATrpVZNpzoGBhgewfBBvJKLJNL8y2wTRwMRQjwHcECJgmNkNJR5n7FxVgaJL6RFvg",
  "key40": "LAH3X5oUTdE6ML7wyMHeCX4vkVMXcu1FMoPkhVBpsExoxjhpTFoK1jhLtiMXnZ5sjpgsrLGHNj6zuCi7KkpjqyE",
  "key41": "DVNbXKzfr4a9ucs4nbw6yHXeRC4bB5hd8trjcCfYoCeyBQV3vm9GpR8iFLy4sEG3venRGEmbTD9JKbwNJccrB14"
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
