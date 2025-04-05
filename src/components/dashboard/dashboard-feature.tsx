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
    "4dEAwaMkPtQLPotRrsYg3XPxc2RadjcaTBK6jBu2RTQgzwYCZKHDAJpM2YGbHFCaJvYgwFBtqQ4p5GAJzKh4eF5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NEQWW2C3CRcjshrv7xXBLhaUgLZQxw2r9o9GXoMG6zNK9DK4eDHCpFRyDN9Pw1BSqH7o7XVhWEvyqz5na6tPKgi",
  "key1": "3THbMJmACNGsAZMYdtzzMLGjh2vbgV44L5ooN7HvgCLsgRwPV3UGTPsjoWiX1vsaAJPdPbWBN8rQraSk1jieuLxH",
  "key2": "4BSGLJMvL93wf6c1jvnoYMGhXMeBnV7JSquHvnuTy4FA2aZpPNuFAjeM5gNL1qgMiGSWET48tdKh2NJSfVE2xhdS",
  "key3": "4yk81JpcJ7iHVyvKp6hf3S4W5Dq3uDqtppmHgVzHGAxZ9ecZKfU74X78uMBK2yC3Qcd2sRPTEvFdPWEqiVqnPAS1",
  "key4": "3v2HVecNTVF8mdc2muJzu2L9VeteKGN1vJrwP7YqZAY39xK71jg8Vx3FxK4ZAjyjtVnZSjTzTtmG9hXKoq9c6vdw",
  "key5": "3J1hzBzDrpoEdzXaget1EykviLQ6QtRhXSo4ZzgDEc5pGVBJDo6BHQZUFLPNF14x68P1LEXawCquWrkBKru4h4j5",
  "key6": "4asqdyR4Yd2UTimMCb9TBJ9cmfiBdswxvEzaovujpGpmBVwRtLZK4rZoCLSoouqNLcrLiY2qFouzY1RAT2sLU4aN",
  "key7": "3DHpmTckgK6B6UHsMHDSHWdwSy3KjBAv7DaNMvX7MwFDvdY7coM9JTeawrzn8EwunWXG2VZiVyQgNxZYrNAh3Tw2",
  "key8": "3dT6ymP4U6vqVu6ABBZJjjQYx6pL2uSKwRrPRRwow7JcVbvzzZHFJ2LZ8wFQ4JqdvrvNiuhju1ktAZE8L4yoziGS",
  "key9": "4mdofBiA1BQJmkCFabXeC1N4omwvrdmaUBpZyPYB2o4hNjsvBevZDMp43g86fYxQsnZ7LeLA996n6UVAdHTfxTNv",
  "key10": "5CwmgpSMHnunFuGGHQTtnZNg4EywKMb8pkuDzWgg4NaiY49fhM7hrb1N6RigxRSKrCpiZNrHs9V3RyzKZ3TCpGcU",
  "key11": "Yors5MJqjv84ShaWmuAbPHYX9ciTvJZgh27krxKWtGEWg9TFVkCqe2aTgiZiFgpDRzLgtXXCgyRRoSkYUXLFTuj",
  "key12": "5U2N9xTvG5fSNEMTDHR9z4qnFU5MfsZk1h6dU7TsxzymFsTTj5wMzEEtz1kP8ykAKPnHd4hQHhbA1tCr6B3triLQ",
  "key13": "2hbPmdyo7tLsL2t3DRUiquuCHG6qjgNrYAjZuk9NsnJX9yjUsFdbxKh3CX3SsSJXXjzhwYzYm9v9or4x4sLAs6eG",
  "key14": "4AUUDos3G1DW4aA5yJBF3x8rQ1oUAJuCZwVzxm9emJGHpSDZZ3Bv9RVDq8STfxPZzjQ1qqDBBzGsideLY92MgJnM",
  "key15": "3buFXmUtzCgcw995uZYLacavDtAf6GKXJT5MzJ62w7st1T24f53W3kxKEwbf3jK22biuZuaMYhdJqeNo6zhfBkty",
  "key16": "txSo2A4ztPzFnuqUbxquQ6CtpNkKCcMjJKfCLb2arBBdPmdwM2GXp6kxkb8XHvHzWtXaMpUC3Ktik3Po5FYwNEs",
  "key17": "23SRaRKpaqyLKeLn5c67yTYiNTvVKDczbz3zBCuntc8oMLGjSwruYPMPM52YQgSY3BqSFBxp1qTRmEPhCbyrZfTE",
  "key18": "27qGgeg4SgKfVo3XiDCNUcneV6dkarQF2n6T3YWPNUpoMyXuiuYgAtZu63hihsxzvLFE5KmRteorQDFXTTX6m8Bq",
  "key19": "4HmC1ZeZSGvwhGtLz6mNYGG9E2AKpPuk5JFFedqFSarVosMD3pNY4B2oYNT4ZDPXsqvnJa2hDCd3YXtCkUNN3K9C",
  "key20": "61XgSab9WJEQS3FBdwFUvUgTgMaGyGH1yyjtF4caDBxspEUXKvLTnBA3hZyvHhaZkmFZxTDVg4yEW15MmbeUTt22",
  "key21": "36Z8BwhriQy7GJB8JZGBTUaKc4qCHVBXkRkEbYYHRNM54L9fDsQkm6NLXJg6NoSJt8pLd2PyiUcjAnSC9LPVum3T",
  "key22": "825hQHxgMLqDd3fKKGoaZ3VzKwKxisS3W4afLWTG1jysLXcrXCiKy9fjAqe1vpUn1LxWDED5QmzcrE7WdiD9hCZ",
  "key23": "4sb98LFy9rxUJh1f16seCNxQwfvoxWi622UaVriE3y9yTxzd2VzDH5Wiwd8yuFcPCujMfStnCr8PyCdphZU3KDBb",
  "key24": "2hDs7GPncCJsced66WJpatBXdEmpZP4FiLo4QRDvoRunHxMBAJc3WNp4E4sWtY1TjXYpXePDKms5M6xGvtz7btww",
  "key25": "5YvxR5qNwGcwQb9aiYxohXXpQtzXfbK79jKnYmku1bMAjHVavLyMTxYg4jqCXkG31diXVXTnsCXPx9BvbJL6cTTU",
  "key26": "41jr9nDsLbyP9eMNJSuYeTX45v7YJm43RL8oLZJVgDgVCeTBr1rB3hYWGexNhd73HJQyHj6cW7nPYwKss2GEqwWt",
  "key27": "K8bYW7ZRjQY9uKG3tCocBXvdzMRyUGdtNcBp63EG65fNmVKDBFEoeoainCo31KEdT68eFbxQ21ikudGupXGNJtM",
  "key28": "2GZminvF2kEULTQvd4gkEzoxBZzZBfk7UYEWiuaL9dnVcTvPHyw62KwXXknQW8cVFL2VuJXB8UANBX5YFAsmpb39",
  "key29": "4mkjX8mxuXHk95ZhF989dD5JsK334oxaKsdZJJ1tFLr5U1sC6ixzneQKr9ymZgKvwMh4uRYxyS47GVZ9LMr1cGC6",
  "key30": "9FuLF9RrgPXdGRu9hcEF8CuvjXxzQ9FzZ346kDwH8u8m12dm63hg6dsDkH8p559g11uLGiAUUtieFAeJFXhoJib",
  "key31": "2EKC3rYmbJqcVVsoKMsaUheHRNGdsgGX8m2uWoiKSUSLfqnPeqLLNSxPWdMcaabL6YeqDZDCUMu8mG7khf9RTmHv",
  "key32": "25kqzjgB2pWCF996wrBup7J77ywqBXt3h8ZwCUnQYHkPfUzuDS1V9PPN7Lwa9qkDd9g21ACuA7G8tFkSLfYJcGvd",
  "key33": "f1W7m4EzyAtfSVWTbjgSpacPsdDw3FM97ozfT5cuvEGZJ4D9cCFQWqP9yqx54om6cL4BftvwX8d92BXyb5GkMPM",
  "key34": "5FGQdoFG6XSRwqBNugTfLddBoJtoN4A19mJjpkKBpuLGddsXQvLhQRQQT1QHeqP6zJxbgdzNcVQaMAezz7sDTirH",
  "key35": "3Uw5G6ZDRTkucVkmnfW8FfsY4J15VyUMTeLAx8PacE5UpExmjvznpbGvvNRMjdvaicQULiFTC4hyhrDCDU71Tgbb",
  "key36": "52ic6BYc2xNyB7gbaabGj73iMg1MfswVPgJ9y5JF1ZozkEbGWvqpStYftxtEkvBKD4hvQkSxsAXikb3ruA8ThVKC",
  "key37": "2H1W593Q7qEg9bbCP1xDmrMFa5PtDvr4RLUPkyV4AVyLwVaEnqabckB589c5EGYMBejYgUjo7yNP7L5fgFnPKnUC",
  "key38": "27x41StUNe2zJicywmBKZywQQRhEt2QNrV7K2KUtRGX56zyoU22tx5ve13Qw1FtYkbpaWp6JkDnHVWybzMj4PHLN",
  "key39": "2uDdx6uccTb7etg73W4uhvoGfgMbFpEr6Uczk2wFU7myxkuYBdDdKtbxMcnvGKCk7Qy4W5vjtNKbynGBZEzAYMvb",
  "key40": "2zAnZfQT5hVTECkAjtspYcmvDLqTg8PaM5GXu1bx9Uwf8Rt56S4eNT81rTea9K15q85Npqcabu978HeBdqR325gx",
  "key41": "4aGA8CebzxVx2xqyygbTCSsGb5cVLkfeh2oPedgfGgPtj2n7c1mWkfw3mBQw4eYY1mkD1okGszsF9wA6FADTwktw",
  "key42": "DnME8sBbCGM3BwB31JBpggibeb3UHoKdGnopQ3fWLJDyPACk2UPrjbhgHgtWNFNu93M6KtbjxoA2vWJtFY29gxt",
  "key43": "2BTEsiBDh4MdxK7N4Xp8hXX4hfoTVHaMC3SpgcQJerzrgPvMreKQXfGmBKRbngX53rzWbwZAZLMcjkd2nUXqUY93"
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
