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
    "gwCTyCWeZdLdP7QpKfw6soLgmpCQxgKeyecteNPmzRumN9aqdQ1NXWD9jGQoqatQDuXKMgg3mYp1vwkkUdfefWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HPMNDn7JPSRoiE55fQyxXNxwH9KYGFjWDYHVdACZpvLLLKA8mtQ2ZCv7fuJU4M49r6KVeuXFB1JTGAbFcZhfn9d",
  "key1": "4Qkm7NeqzKPngJNwvj6fD436B9tUyfnsoDUmJa4PjHpQhPUiLqc7vyHw916seWFhrnzAERbfJGZmC91bZ9KmdSwm",
  "key2": "2Vyq2gJ4Qys2Fd1WyM64dAXPjttatybKW1EWPNcQk1xCDJ7HiT6j4huYfXaBrfm15XZRhxy3sTkeQgJo4aKnU945",
  "key3": "4crQb42rnpkzCr4vYNH9ncYSXZLaBdpKcSYofrtnwtku4miQy8b5FjCQeEGGB3L7rMr6bXERvtxrZfTGZijuWZBJ",
  "key4": "5gKjeUPTWr1zeA6cHcXkJP6nNBps826daY1EAGXni9qjweNbfaFkaj5qfAxmUmt99FnuejexCPuH8AZSmSC8zVUu",
  "key5": "4hPE3vqZAHwpwNqybY6BFCdmBu1tUTeVH64W5oN1urkLr5tXtZeuqQxKGBAptbT3Sh1iKBaj9i9tLmdeJdnStAad",
  "key6": "2hhzxHwhDha9Rm7A9HJncXQWCePhEURpxEBzcbrPRuv2n5jXnCctqJDBHje3oCK7sNAsAiybXg4mFHUaAMW5et9M",
  "key7": "2BX74QpYUPCbewjrDvmzD42jSpG63CJmpQpruhRXkMUiBf6zzrgw51b1EuVaZFugmp4isBurPKXdQnkdJioScPmX",
  "key8": "65MWXsp3AccBZV7xFo7QXvUSZNbWZeAbQfzaWWzL8KNMMABBe6tCgYU6b9BB2EV1cFZbz1FiNrbvNnfAcynGn5TJ",
  "key9": "5AhfwJmaho3XswKY8hfTFAQ65nDuxmRD5AeRYYft6Tqy4BkCHEhXzVzMjZrno1yEakYp193vK8jkEzNmfEh3kkZ9",
  "key10": "3yKQQ4sUDeunMHgUEt2ZGvHduBcwAWq69jvZyiD7sEz2SMgqnx7BqUGcPfwEqhAvs8DBd5TzQjFRxr8So1pLmJxp",
  "key11": "2F4EfKYEsKVrfW91pPfhzFwi6LpuRiEMhhu4e1nwVdi2YcNbN322x63HiEGaZWnXXHmmnjSaj4zGGZnKX7TqCQ7q",
  "key12": "43sR2yX8vkMhxUxtDQs3k3DEVAYuLKQXKv5y9H7YnrFWm3jW3672siydgpSZsv1h4qq3rXqmRtrnrAyd6modhADw",
  "key13": "rc6Mj1rcmnyjYVvH1AAdz5AbUutntGkLxEMHxt7npg1TcjVAeeihNUwFvPFWauzdJT2HC9r8v6k3XD4RpaMz2fE",
  "key14": "iMYKDEjc2rEVzkXhSz2wAB6iQ9hoVDz6AjeQqJT9P1P8hAx5sTuQ59aWFJes6KYW2BrNG6RSJ4pcSif5ApSpE65",
  "key15": "5k1ivz8cJFT45KXBJqeFFQrKxjRcPL7fKbURDxPb4sBF4Zev9gWcaZees2aLxHNMdp4UQV79qC2d5sKo3QfoxwLk",
  "key16": "3rR8HsXHUbgDshzUzDVrDt9JvgVmT6rmB59EP5uRuuhVVAzUxNqfMv3J7kvjLGkxH6LAbXgSTiPmoZG6Fe3vgyPo",
  "key17": "n22nukUDwpK2nsWKi8oVsBK6jGFM2EGvh5HQVWmf3RsNooKRYrHKxXWQKgFJoYovvL5dodMX2BpzE33u1EG72e5",
  "key18": "fRv3ujZnDourLZ1SCr76hp7USS9Cx7df9HWUse4AVSQ5g4m32Aqhu5Gegkk8oGgHsMLV6ULt8Suk1NJJXejheSL",
  "key19": "24n9UVvBVzwJLSA1sjf6fjSw1Fo6LnNa1Kop8uM7kfjRQ95G5f2X2z1GEuG1atVtDp5HPptQPTK9RHya3E4kenmr",
  "key20": "ZJj8G21RCHA1coJMovMrQJDW9Vdd2xjuDxdQNTsHyVUPWjcbJUV5y7mWQEnmRPwPYENqb7VRe5eQSSsLzSAdaBe",
  "key21": "HVR82og5ATnBt1921ZXXL4KLjVB2RBYMcpoGHJN7DTnw93eDxJ53gZJStMzEWcQTp9BBfh2B9pEitPJ29H1bx7V",
  "key22": "5cDSoPD7mbR1AGizL9xyt3z5B8ajMM5U21Wms4QmPTckizgDzVhKmKvUrEHFCRXb2mXYKfLsBni2m5gN5uDTsHPV",
  "key23": "2SYmNXaGANJj9bEZtD98yJgZx1uh5cpjRTmBKBjXvh8WCijfpn6Y1L5xJZafEdhT385XLo9mB6Mrd2ctJ2ZL6ssR",
  "key24": "33FY7Xzy9mYaoA7aSV3Si42BAg7xjNR8bPfExe4qbw2p86CRGPXLYcXKoRKqSFdXZwKqY74HoaiA61RRrfRB8JeS",
  "key25": "35wk6f5ksUhu47hX9GFjgARhNgpmzR8wmeX4tYZK6hNhvNrRJFxonLUWp9BaUMCMTpEZzEYwNfgpou3cutqPiGLT",
  "key26": "2fXoFfaKnUPpwNakhhG8vg6o544ruedyujU8sgYmryndLkHfa5ermnF5MMGkTVG9HW6ZgDBQmf8iRVoSuWvd3vMs",
  "key27": "WJtMNQus3W8FBtwQuggfJyzEjr676nKYZoRtQZnwpcTD3GVrZTU8sJas4ZGwJP9H5awMZrFVirKKNBkgNWJNeWP",
  "key28": "4FXZKrReFSMDD9PcoXfE7JEtd1uMH9nAF1UHi1iPzV7KjunpaRxCUYNzq2GjjRBqbBJVDQiFiEdEmbPhEjKPGfce"
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
