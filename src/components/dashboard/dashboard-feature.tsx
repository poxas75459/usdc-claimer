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
    "4ZfThQMSv7kcdrWFSfDYi3wDXrJ1RfdhikL1SJMkAXps53e4GPhkjYtmZ5NuxDv9gxmjyufJDLGzXvcJ1MbL6Kp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3euQg8ju7SbTZb5Dp1tAkdTzGmbtYBP7trNHjugG92VGgToakvUGvLJ7Qyk6EVTC2w7hbsxsG39FJi6Bqx9o8sPt",
  "key1": "QjKEZMxCLhvJdFEzWCNZHZkircjowb5XqWus8m2EA3iz2DYEy2cN1rf78qyaecS2JCoAzLCviuBiLpRSUjZHSEH",
  "key2": "svU2hkSnKhiLRujwmz1UzEU4PorQR2PpukhBRhVEsQRwcDr1pqNS4JU5ksxGrUr5q8D3tPXonfi9dX2hYqRZaoG",
  "key3": "HDUDNxqYBeKntL1YZiRqP5nzgaTSccXQzodA7Z1M4uL9rCxgFYnKnuMzuQku3XAF3MtcyQvyTF6X7QWPyhuRDdq",
  "key4": "67JkMTdxGALbhkeAUATXMfsGLYTkppyK4B81VtXi1kbYtoupkAK6yTtcxdPE6gWGLfj6biZ89fhjRyiDdpmYtNk9",
  "key5": "41HATMw3YYb2Ywc7628jg34AFrCYatzNVBNYTqAKZMwKtVfceG49gqwt5UksFdxQUTFacgadiRXQLKcJnXmAUJ2y",
  "key6": "xuhu9L6FpN2CApy6HG48FLQyk71z4PkywfKzdAuiRVrfEKvbMduvnnribdWv2HEPTE5sp97sHdU2ns9LDzZjf2y",
  "key7": "Tq1ZVAFsQFgVWADJ3swYLQK8Q3Znw11Dgvq6kekUfzPGbnuqhFVcYaf18sGPPSirZvNkEqPR8J79u2qH3gQmFHt",
  "key8": "57Xwi21DZbGQQnQWp8sA7BZbcoawWEQRi5AXuEnGXmFfrBfKxpPPoeDMiSXgpjaFxMfbkXChpTcTnQ3bSZqWWfJs",
  "key9": "4ViPb2y3zytua9rKRUCze69H2K5KM1dftJwjtfSp55xfam3W7Xhu3Gv19kLCK63NUNqvmsmpRDgxk7uuWHUPni89",
  "key10": "KCP4TxNwdSSgh6fhf3sDMaaFQAPjE7D5skXVt51D9bSsVGSofzLC3SM1wKKA9QVfjSkfi8AiZHRo2yLVGbjXHLD",
  "key11": "xvkaJdKtQrW2HuCcz7szQECb4Cqsi47JUNPRUfDZ9mwXWFX7AfoMXrXu43HVdCmXBoo5i3zchiKGcrBpvbChTBp",
  "key12": "2nAFKxgG9isadLg9aze3BFf96AGXR5MhiSjK5vQrCXkaWd8vP9HQv5KAS33zoxoCPcfhPkh1MJ9eddqj1Y9YSk2c",
  "key13": "31xfZKmappLiYNvjQmkaF6wqYxDEmdgBvdx5qHUiA6iwvAQS6QkXoQLnfyLcccJgZYpn67QaU8nEEVL8MEK1KV2i",
  "key14": "4p7jL6M2c49KeHz1PAF9veSMx69B8CjdV87aN7vW91Ws4KEkV2FBLJeMq9fDXLUA2WrutaCwNC4FCxruHfMG8JUU",
  "key15": "5JQFTFZqoNYUEdWQXvv194vs3mYwAMEAqYmxDZgPbvRcVeYoxWSMWzsvBErcc76mHBNeqUfkKtLFBKsT44kygTKg",
  "key16": "37pYhmaxeEMCieHaZCt396KVPQmGwTUhvH6PgW4YxXrD8jrDxhxQQcsrs5BzK4B8SxMbXvvhHxG3Cqp4UEaqSKjj",
  "key17": "2cxCfgeHv5Ds3xY4PHqJ37XhoifGNLb3S6c4CpvFKFEfauQFrHaXWP5hU4h7yB2S14wpndHGMvvWgZfQyXLgaVL8",
  "key18": "3nF9tk9HH6VQBDKBzhAFo96uGrtMHb8z96naG99KWo27CQvmbQdKP78L9z3HsJCDTCXerUE5eisWrT2G9Un7eNwF",
  "key19": "65wS9e7QU5sVjhRGEbzrQv7yL9zHhEkfHVPH1vE4DtKAPwbYexyynwsdNByJJR4FxK1kxH52zbxcarLX83mhR4SQ",
  "key20": "553eLTymDZmByBYF62ma8PPBXPP9s2qiA2REVsSPKp2upoZEGqhsBNadhcqsSzCZL6G3VxJ7iJ7ZJcNwDKcTzoRd",
  "key21": "5UhXXDr6eL3uxkaktahqhEfXWpREb7j7hDHC92s27eCU5njNergVfr5SKHCc2K4j1L7YeR1rRsdeMUFn4Wf4SjFi",
  "key22": "MyqVxDsCT2vAfWsWrKkp8hTiJrEj9bDo3qe6kzP5oj1qixLsa2mr8QezgzsULxBJqvqmag6osCwieBMZPT9NqTV",
  "key23": "2HaBYxPJQqLNLb1L1YdQZYTajgFbDeP5JovCozfhffKqLgNwW7in2WsbaLk1JEieeP4u6JUmX8DPxYnN7paPUv8C",
  "key24": "4iXFbo1x1erzS5wX2g49qxNLfVSRZmEQac3GRaV9JbYSLsK4mkAo67TsL2kxaUCZfUKE141BPw4iDjVy1YS34qJ6",
  "key25": "3DYU47mmVEyspD4oj7w8MuYY9wk7nb2E8N3iCtFHMHPDgtf4Lecp64zb1pRewau8ToNbjx6FFCFLR2ZpuTAxtU4Q",
  "key26": "21g5qHmTpeQs4jmusxAKCX4XqbhKvHiSvXv3KNnAR8s4NxFXmRHQ79FhJwEWR94TtX9AVyytQD8FCXzfearyAExC",
  "key27": "3VKUobrTdC5M7XRLk7UxjNaXd5KPfpxbU9TfEz75MHSNNdMZ2iUWEqhYAbhKQfGWpS9452MHBCNVW1qMZ5iREcaz",
  "key28": "3rohv36ousGWbWz8X7zhhsuioznQGQEKVZDqkdv5AimTNpfJ7Ef67gPp8jX51EgroLoaxDBVuXezqwgvJhj8scAC",
  "key29": "eicfYe4Bgevv8YAJmd2ZrCmkRsmj8RNfiX2SZsQK4YdEnf94eVjx9sYd9dbkySwFem9Yg2CKMhAhQpM5yVb31Xk",
  "key30": "2ke7VH5rDG6UdhCyAK1XEGLh2rp8x3pstFguXDuDNLBfQ86PiZ8vcnKcAUHfuzXqJLYPaMoXmPM6o77HiYzPd8wq",
  "key31": "4HqLUgJrXewPS8XxpTZvgUWLZ9fXYJrY6uwS9rPteLq183gtcsbqQgvUedUuYW6akhT2Z37X4Puz5L4MN8d9NiBJ"
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
