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
    "2jb3z1aq22zb66gaME8pjtwh4BACwCJiiLtZ1ETAfp3JTj5g8myByLZiArzXGUaXQiP7AEsLVKb3CSAPsejwECCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29UMb3e8KfiAxM1nnBSS6qNhu78zifDp5RVeDGaohMoMaWZnehcW7cn7GzZbLgxCK6EMWm5CRqSB9CtNqX1enLLj",
  "key1": "Bn377efNcksGtqJ1KiJwrWsYwVBkLQx8GQ97KomNAkKNriDWVKjYH7yYt7NX19cKEYtycWDZZXCbiKyFq1Tg7eA",
  "key2": "fS5WZTfPaANdpf2SC89efXSLo4GGSDfh2jhJPw5Sv2Nxs7C6bUGydoPc7Da1qAzkyX5tQHdE4vPYmNRvAzahuzd",
  "key3": "59PPGtkgYiQq3gKyfZA5Baqjvx9hmammHPfuMoWQn724Cc3BF3LeM8GJHos75sPHGuwEEwD4tYMae2q3XneyQ7tw",
  "key4": "4B64QckEhaE3poYQtTX2XxgKGG7n8x9d1zR8K9vM7bD3BFbkkG3bfkKXchxWokF9xSYsacf7GWeLkgFvmDK3b4Ej",
  "key5": "2csDy4Cqfo29pKR1BDtRrktnr3kjmKX3WhgZscEG7694pZTe2REtAhKiC3erHn6mTbjtzBrc8sCneQGhn9kgYQw",
  "key6": "21UCUQ9hzfrXtSL2MvEff3S9pTRTy5ffkWWVGr1d4mYA6jbkAWjUCc8ror7jp9Nm3CL1R1wMEcdqCcbWAftjB6ge",
  "key7": "3RQ46gvzqhYHQqbZdDYwyLPr4icbXxR7iJdUyMG715SFnPDBb9nHqPGwHSEGjGgqVrn3wwRYCo1nkJuf4ArvD8vh",
  "key8": "4tT4CGAQ4sz4HirVMr3wjMZBxi4WJunFJ7TDMA96GR3NJZs5WfatpgFsV8VC9jJ3MvArfYZgMSd3U21LD4t86jt9",
  "key9": "4SR46AaNwXU8QZJS34Zwy8Ekujf8csvxq2eT8RVerauhv6G2nKsm93ucRkE22eHUFVMJYi4PrSVXLFfTUrQQ6yGu",
  "key10": "4YaXqc1Fipp2UCJ1nBGKn1EXGESmW6UqDwt1JnWyuQ8CwJmcbVn8yL3BAra9QEUyHBsi1dvrmxWKsPF18aQEmX3f",
  "key11": "62633qZ8KRiASmoGp26sf6agKz7SQFfxUDw4Ws76nNjKdg43Gcs2UqiQuugwcm89dXge96QKjQghH6EP6u8zz74w",
  "key12": "2V1CxBhKx6AFAPqLirtY7ox7qAYboQxzxLntWFeKxK2oUCUZRHjQLWTNoTR1oFvaTnzzyyFCX3bMgP8FwKQ7rGav",
  "key13": "4TSmGid7Q99atWQTzjh995kLEbVuScpTS9dSSnyr6KJWSX8UDdtsrhQLgK22tVFAW6GN4JswD3sHiay6z8J83s5G",
  "key14": "56H3Bh3q2mka7DD597oveDjgXhUZ6p415rZc73uRGQNp3d5VxbQo2kh66s4jRpdzrnQF468UzPpxJvdHods7JnSZ",
  "key15": "VuHsqbX3bectd8WzLiinLpvVBZtiAh74QPcf4N2Ti2Qv5cgcGBLHWHFH2PpJSNicqVFTAGvqfiYJKonTyrR4UNo",
  "key16": "53wQuanNtLw96WvmTfvYxMxoCkFJvCcCA5HsFjWJtGFwCyyhsFBAPhigQiaWham1NsfvYhqwXHADfQ3tqa9ngifp",
  "key17": "55r6KXeit75WgjXLmXang6TS5JEb7zJ31DJM3PxHHVUoUD24FRTjUVGWnMJZ3fCjfFKCLKKdsdEEGm8ND1BWR58p",
  "key18": "2XsKwPPLRP69XA3YhhbPS4Q2eVp31n1RdVyPr7YCgRXcMLnY2YmkJa7pWxs6tKtMDVvZa85K1X1SnX14Y7xpT94c",
  "key19": "3MgfJifwpmqRNmt74geFSYZh1pUxEYDptvnj7hUrRWkice761caoz7C4L9M4Sfm5mhMn5T3eC8Gg6GHcoAabFLpV",
  "key20": "2PNdb1Uciz8LLw1jrwfyZfYfAg3bdeUMTy9n7VJjmhjMHFixVNWC3UNeaMJLNprip6STcx1ZWtTyFvPDC3hbD2Fe",
  "key21": "41pBUbtvuKamS3yGGXheMfCUiAd2Gdgrhm7uCMrAXg9Z2CDx7QV8hsPSebobC6vWc1zGni5fcAjHGm98HqHygcN",
  "key22": "3zgVxknDsjnCdKLrCtTA4s8r6ndgZdurqXFkAti5ESd8nDKjSjv2ayUrck9st9V3TFQUftDx4B86PwUwMh987BJZ",
  "key23": "4XAu5E8H6bBFdU53VsRn6HHtbYGJAWNS4VxfbM24ekijqsTRGbzP8DcFR9ktCejVSZqQGWvyiztGkGAiKJBDeWds",
  "key24": "2MK49rDk6W8i5LzdvEHMrRC3DUEsoa6iah7D5G656qcd93qm2UysswZtdbzKqSLz9krMXNnS8zVnrU7vdGdXxDa9",
  "key25": "2tC45RekyVPuVgfjWgNa4ZmJqcdPG1xXDCqxHxzS1xQSGqTpE9ZMaV2Nhf4xAdUFmyW5RJ2YzAyWvCrJaUb2B1YS",
  "key26": "2f87zn1U8Q82pXgCbbZYSHJXXdJTbMcBVkDHbPMRWrEkGGRYKhGd2VZwKtrphVEK2WojSgiHtSKjevxcz7UebpRh",
  "key27": "5gvXYMJQH1ZU7SYr7mG3n6S9oryvKAd9rZyx93X5ML7K4hkCv4MsTWfCcLEsoLwcCMT8HqHwrsF7YSHot19C734i",
  "key28": "3tT9V7ZZSmZBBpZzRqjpSEx1aTD1hf3aF1mMkJpp5YTkYVY5u22Xnm5YHvCN4jy8utoqisYMmizsd9iQGRjPYrdG",
  "key29": "4N4Bu8BA6s8Q1WP1httxst6ZfsEibhouqkwCQxwdnPeFuf4HjkW8FbgpPwvVFwgnLnoRCaysHuN2zV81LVMX81w2",
  "key30": "5h9WCvFVk996oDBgXWWra7oULBAvqisJFRJy4yWcYQDSdtbw5rxjeWVsnvok3PD735oxkWfFjNnEC5s18So8L4F3",
  "key31": "tx9z7AJa9fj6uvWENvE5rrjLbTxiJowKg1L1fWs33VngE3o7JVbzaMXoTSVR6ghXrt8YHwV3ouTci2R5WW3EJBB",
  "key32": "5ko4yuWnfZ4UJKmeico8yJmuG1ntzPTpZbp1XvAGXNMSZ2anX39nAuD8PoBddCRQDvx4nQjetRdkmYgcdYNppk7D",
  "key33": "4HZgVfPzV9pFdboi6EkF6qQgt8szXSqF1grXCgYxwTqXN5rnCZJqMWmLfpr99xsQfXp5jtoiM1tf6Hb1FftbfJR9",
  "key34": "4Lnr1f4NgyfFcbsjztD1Beed6kFei2d8aNJXdnXR5juvYtpLgzSR8S9stGsUzFYWC873gMEJSCquu1VZdi6A4eCf"
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
