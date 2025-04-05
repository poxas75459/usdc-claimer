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
    "5S4dDLuHTyTzqZ5J9MxFDLNqL1Y93PAaqYdANEW8NtHVX8rFMwY9nE9nhDiBRX6268p2NiTeZzeAdPB5d33MxgQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b5uVfnrmDBMD7D2oNLmZhYTFAnETp65WCv7zZhbGqeM1rSZ17TyfN9Ain5z5wB3NMqtGdigxyRtHrmJUBWwSgbE",
  "key1": "BTWT3eG48BMsDen4ezQDt7foyjrJ96PLcXDMQvNN3THpD8Y8AKw4hKnhGtrVMy29b3isj8sAbFSzs3vABmB2six",
  "key2": "4CwUFXJiEwofT1RjdZJqi6t6Mnoyr6uGBtqs9WL4GSfnD7nTfWvBAM14TzReo7jtFM7zMJHr3zgvqHjT8ie2vQe1",
  "key3": "2Lwa7WweRqt86BVGYG9rWfXAk18XQgeNZ6jTngrC4vKVYyYQ4M4XkZmvpkGM9CCDvc1NpWKyBapbizXBARpau4U8",
  "key4": "3bsszQp2xUBbJFmmTrF6oABfJiHfwkTm2BVNjPoDXa3XsWrVGEGNWAQvjsoAb1RUyzH6QmBhJeVoNiSbEfMauG4Y",
  "key5": "3UUdLhpwzo5L6cJfxH8Sbc9RUHP6ofh7SbifNTTPk1CS5K2fbqRuuuNGRF1Z3Q4oBFK5ntonbwzBsiLErMEyyFye",
  "key6": "3koamsASsGvytoxRLusyHh3oHcK45XBf5MMrnNLDT2m3FxMSq2WXZrgmzHCiqSdour7Cvp1M7crrTrDbSV1Sx9ub",
  "key7": "43oRkWdkA4jWc3nVDDBmgjW9ygpajAREqXdjuPmNr7eCe1qUzXj2jx3tVth1PEH7VAFJ6miieGs7x9TnSo1jyFJJ",
  "key8": "3ZBFZC1XdYTT71Tqoe4sFAP3GdHbPZgaNq6fFhQjvPjQ1DfFH4KAHrKnZexyS3ufPLUAdYKPPvncn199YuxMHMLV",
  "key9": "jdtzikD1jeUFnEidwp3GYnK3PiFwnZyr2QoQ1W4DpzZosmF9PCopS3iUgi8TadqJoaNJ83S4meQSjhwNxCpRFEp",
  "key10": "oA6pGKntzMsgs7fy5hJQChc89rqf3JCmx4dVisy3BRNqP3Su3vFcazqhjzaTmV86aiE1uSBMDXf5vmiZ5c3n81b",
  "key11": "369pWftMCK4sA6wg2QWqSKwFMhvhTo2X2eZDKwW6kTq9hLNtuA5ZMPmqnC47U3u5iacBb4L7vPGQKZWewX4WTqRB",
  "key12": "vD6FE6235A7URaN8NU4aQD4RgKCw9VeW9QSuJqGhYWRA2Cje7bw5S6ncDpUsuywb4zdQJ6Ydj9TozFwG7ZDDyGw",
  "key13": "3LxbfzKVKu5rmdf1vbPyeYv72SF6p7sFhMfwkeyBJvaz4Tc5sfJuD2sBXa6KifvMF3LtTVqo99yEXLyoD2bpjqq5",
  "key14": "66Pt9Qcr4Zi23eViBwA5ZjrP1wToNAqHo9A6TtN6Fd6Kvnc8WTegRRT9sCLSRjzcpnjrUrCyQoRJDp7UHyKgzewc",
  "key15": "3oU1EkN56ifen1MoDyAMftjYDhSZjBJg9sPb9jodXuoU58ikbPHVJmjSNGJAk67mpPvpN3V63i2p5WxWkFR4qgLn",
  "key16": "5Te2BYsP3BEEAq3twQMcM9eWZKY7QGhZ5UCG6HSJnQXq9AjoWMp3mYj1iViVCtUT6ZqVrjvq7yJHz9Zwihu64ovm",
  "key17": "35wg1xoCCQ622k5cCVUycb7hZbKKgfMLkmoXgqZYE2LQ1W36jBf4Xrv8ziwP3bBmqGZqyZytvRUEspa8Sa78Qknm",
  "key18": "5eFxaz9Mh5TDgNac9pwDCmWBW7WAMVgihEDzGWmXspHKyXER3DUMhwrQs9h7zj9EZQyKfudHyboL2WxNWNVYgzFX",
  "key19": "2YaMGihkgJH4Q3ufuyGC3cWtLaMWHfKUeKM5SWZAqomkyuXKYLKyTvUEB88LZCgX6LDb5q8GDvZmEoxPxvq1Vxhw",
  "key20": "gZT8CCbXBABff5uf9YDWjFh753hUQpmqEwFWse7dhbRPFrWGz4zza796geR9GcNgWXzSLAmfrBJp1TBdib36UQj",
  "key21": "3UL6PRMyFHrm2fsAN6aby2cyv9x12KNYhBm2GG3o2PXAosgkSZa6w9AaWUtQP2w6xCYGPNCAsbkePCZb14e4xSQw",
  "key22": "5vAo5VnBviSwMSbPqUR4BXQaA6YmwHjMh2ALvPMRiW3ZcjhpZUHW6WtUcQrFa4UcQX4xwbyw8kWRaiDEx3nXXfCH",
  "key23": "2xB2V5RhTRWkZf4A5j6wad2Qg9bMceKFBdeVA1tMKzi3LwVJv31edVDFoDmqLksFoyVDM87NKGDky8BQ5FFEWPDh",
  "key24": "ewsXTUoVaUJJpu9F7TjkQVASyPjXbL3kDUQMiVoYzEZvp47Tzy3Ku57C8ZrqDaeKFguEwZBnr5PwHvQGuxaZvvz",
  "key25": "3Ae5FEQgsSRZctU7PVvmtxoJoAjfTA2TLqZ5ysmK3iHLjiA2a4GgKDKx6QYGUkoZ2h2cpKpDhgqaPDfqy9MK8MEh",
  "key26": "5jTCaceL9c7kRMj7ojCigFRJtL2tfZKH4QS3ggrnt2HnMtBtybQAnSysaNghijZVrR2CgPbTUNxSCsQP598HvxxA",
  "key27": "vM8JCAHQ4Twib8wBsLy9pdWFYQjBbeNXQ7D9bX9qkBayHZzZ19SuAy95jrBp7f1ngV7iRKhuhSLfyyWTnZuXVjh",
  "key28": "XSjNNA3LaYHSH8hpVjxcws6oaoxPZipAanyWncrcu415kvG24tT6yq5HiDdH2PjGUCQWpncZbPduYGqNkD2HoWb",
  "key29": "5dF2jXvcKzQpEW2QXAATBSidBBta8dfjUFteNGAX8hvrzcv1g8pwMb8VWoh8b5VarzUrQHWZvK66F7nFvW8h6kCb",
  "key30": "4Bj8EGfvUG6YDb5ZVKJrShrE46Hm1v5gQhnmM1GhbqFWn8ynySZeBSkRMgj76FnS6u12Qo4m4mvwR5BmqhgLtGhf",
  "key31": "5raayfQt722qwejh4ruKZ63u8qA5HcdaumddmZBSvpakEutwfXbfuvQg8pWWenmTHSaJo7tXL6tsUFureUcuS4SR",
  "key32": "3qsVovXRkCUicxWemdjAKQeYf5fCNGjYbfUoqvxk2cgg8vuLG9ZaYR1w8REcS1NDDtxMZWhJj26TsULcoFVxnTbi",
  "key33": "2nbh2rKYhjdzNtgzU9334HSgTsWqhZRS935wAzunTVGGQBR2TtKUVqYwxHqiVb175MWZEubLtx7TY2zKQtdoiqaK"
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
