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
    "2eYrisg57YFTSn7VST6uQ8ztA8Lmepq5JsaaLN3YhUi7mVL7DXtZ7RHCQthceLZwpdveCd1C5qPuwuxm8VyUKxbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sxAkeEX9bBg3svVSFBVRBRxqcgBK1shL4jBn48fXGB62DeH7KBgxApkS1VJ4mcRjYRxFQ9tC7c96roR2QAGCaay",
  "key1": "5XhyJ3LSpigHf5Nvp12RZj1M3TfCFn7siYGgUWe7iCHXRTXCafWKD2r35mz7yuzLJFataEwxCW1Khx6CidwYn2pr",
  "key2": "snbXwFyqokdnCTKqivXubLBSrgPNG5kiVHcAefC4H94SPvPZvSQEXVtmkNzW2h5YE5CU5osuB7rpQySnwS9dYh5",
  "key3": "5cN4s37Rt9mnqX5QKp9rR3CyTjxnZES7mWkLJXHLDpxL9oiaV4XDxf2RN2HmvdssJ7Cf28FJVp3RmBgpszsmnbZZ",
  "key4": "57fULL1ddMK7nPSZNLE2Q6CMEbi97wUg9gpLiwU5FWqDqsfZcRRRpMRKuCnhmuAdCPMLSgfXsPjbtPK7NAUz5oNG",
  "key5": "2zAaq6Pz9PM5rdAaDS7Jo6vf1UCbuhpVbv2HZ3od5f3Ggp4v6bVHpdNo3J31Vgmn3bP4SfrCNBgTxUBFQ6yALEXc",
  "key6": "4SNfbVX5E1zVypzGxSoXuJxHun8FtAZxA8JWSKJwjGvrT47AC4bS6bCYBBopff6tWgkHEUCXCaTRrf1MFNTwQQcJ",
  "key7": "2tn5PkMR6aVFmFR5p9FbncgczDfzoGHCCBSKzjQYXxbb582gEfMjQhqB3t8hwWFnTXpmDTjF9XRGfxuLB6ZiYGgo",
  "key8": "2yifvfvhYxjtCbEAL8f6QkAjbHcyzXwtB8dz8VY2CwV2Do5Dqi4opDJcD6gBdSBVjf9xZqayyxToeLpD8yE9hrWq",
  "key9": "dJWfDbnZdAW1vsRxfr7wccBsyoW9BXreaniQrprEJce8Dqh1Pi1MgVYdpBUYndihy3pfZipAKHc1Whe4AsbDNdm",
  "key10": "26Gx2sTPYGaS25a9y1C5SakyjQZWGxiLPG61cCkKsVhShF5gq4g1srsmHzQTeyqPFgiRUQFMpmYLEKZLb5Eqjsq1",
  "key11": "3auHVXDB4DWSKE4HmT2S1KZCEUJwKmamEqGK1G8rGGwRTb8ZfusXjAmUyYckTzAqA9Vy3QRDfufLVoefe2QeDWLf",
  "key12": "5Ev9Jd4ED44XfW6qkT9PV1qbaU2qNeSrqr4zRqYm4nLCWFavynvDdxFoL4rB346MBFXvh4xc2GcoDi56pzPzEkVh",
  "key13": "BZ1S5WjwDkSdUA7f1YP25MrgD4A7WoGLdJFczzorGSbSpd5Boye4bHwFa7iV8py4XotoGR9svAqipseuP2ueqhG",
  "key14": "2BU9WYv2tMEC9NvTRzuFskbxyWCNvtCadBwS18U6n8VrSE3sjyMsSHS1PExJSwT5ZVvZqkaFX5farFos7wPS7vpF",
  "key15": "2q7wupkNEKV4T7Dovb5PSDTXWrpB7DCNCeXzVf7Tw5cWu6824DwEweENqD2WYM6vwCU2DqSNEYcSg77cQeCH3JwU",
  "key16": "Ryc74mjBSWpqnZj3J4o9F76Hrm1dcmFFmXQZUayA3XMKiqMPAL3kNjb5MkmHgarqwhk1RaiNw5Axa3QMmTvxsut",
  "key17": "5KrAXvYpw1KtHQAb32wd7irmuUpX3rB3PryCNgdF8k1dj83DzvB2wkkLNAwqqR5XStThJCxnSsi6fjLFtpM8ooZZ",
  "key18": "2FWg4UgU3eMG3VdVhVbSRf29SwurTc3NmqBzzL8aQkQP8J5tn3gkK9PQNggc7trpWLS6NZmdbAfuSjoBAKPgsVN1",
  "key19": "mEA81Dbf2rCnaDJWxNfudJbCt77Co2zgqWQxnFff4i6QUvHuCo5SuEL9DLd5nouHwPo7kLGTpvyZ8WqPLu9eset",
  "key20": "2v9Z876difP1xdtmZ8Lr8tAowcuQaKupvnHDtKcmsnJLZqc2jb4fduDFZNp59G5Ue7YgQWMUPdQkFVHWHje6KoL",
  "key21": "5faTtsKS9az11RurrCuktUhXnbRr14tbm7uNHdikhxw4stZp8rfuenuGDmwCT4PPpwrnLQWsjZUpmEQhpEkdqe9z",
  "key22": "5p1eMgjymA4KTmeJmUdFBq4jcwZkAaBZ8HXn9HKP8EEpik3hSMLbsxjpX1TKt2uVc8XSqVrgjzAoUDiUPGAUkGJt",
  "key23": "5P3JNPearFhaDYEcr7Kb6oWBFNrbA6H7y4pW8afLLDGPRSTNBjL4LzdEpW2PCDVSHZiFt6eE72CmLVE6DE1DJwa9",
  "key24": "5kt9TAVtbYowHGbWya7ZJ32iWPSG9bpgbzqk2594xmVyZ3hQkv3QBaX9KAXs9kPJ2fJybFYnAJ6iHQGzuqPKwnS3",
  "key25": "4aDPdRpRGsWGp1VoY3yZs5Cef5nMGdPJ8iwbpLq3MSquAcNd257cGgdQjmPvWft2oPNKSgbtfcqCAVPEX93i3w8a",
  "key26": "rycnWGQBTcupRuGp5T69qayzvDTQMErepnc2ot8T9fA9bcwHTfjqPhgwXAAf5dibotsTPTtV9eMQvW1EBTwg4Kg",
  "key27": "32yrCL4tfkqGc6PaaepoNvnCGtcf2FuJZzPxBVJXxNTUxV1yFsiRnXuRSmuitAqCwvcHYbDZcVMXgmBmNbzN43bD",
  "key28": "2ZKLVg3rGgrjNXxfrZcrgBNWXmi8WWhBstGBWr1sUJbXjo783YAeMzmVC4En1yDmGpEp5hRBxGnSBMbb7YBZFr1w",
  "key29": "4QEPwBw2grWuNQU65KZ7SKjq3A1mrdPRAkDbiWc1sHV8TzBmimz42VtrpCp3Rs5tbxGELX5ihZdyhhpMDqzv6KWz",
  "key30": "1jwcLMiwmM6uEKotMFbKEftq7jJsJZ28KQqaCX7G8sV6coHJppTcnWZpqzyTk5AGVYAF4Nf8XJ4BxpsjsnwYJFX",
  "key31": "2p3WVbX9KDKR4ZwkAqXxNW7SKkmNLPqSj3rB14fXCWLZBAAGKLP5zkLvsVmJD5ps7vrAFzmQaQUJYVVWB8U5Bupx",
  "key32": "4aM7HgE7vup2BDTY69tpzJms2CsvQVxrYX1hNzQHZppJPk7TkX4XKr5CiQiE4aV3vRBKWkePs81dWETnMZvLSGgi",
  "key33": "21SwJ63EA5Z67JKZYDGtK2ZJ34GY1J6pCeN5d5bAuUjYezkLK5tVV7Drc2TggUyQKpEt5HBP1dRu28HK5sfZEBrn"
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
