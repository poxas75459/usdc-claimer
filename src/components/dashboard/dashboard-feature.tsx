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
    "4AeQ1mnB6mXSR8MHdDDzoSUgbuhSd859UY3J4nQmChufMQZ7ymfhBB4p7gv3pUjEimfbd8xKk7DBt29XPP8hLKDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uruoZ8hDvvd6x2obzEYFuj7KVnTZRWbY4o7w6JKj6UEi15kKgTo2Nt9RPfhHXPLvDquLqradjchDPzxBkmskny",
  "key1": "3Lg2pyrCJCssszXfDhtzUkpZYuSyKBcngRuiFtx37gU9YRmNVEzig2PzY19MiJAAMbgqkPLS1ZfToGWY9EzPCEUv",
  "key2": "61UjmK33t57KqpgppFt3X7oQhYkw3muyfPQFrmELJe58VgSnARpkwNjZU9Kob5Q2aHgg3Y5mSRWyffwTAWVPqef9",
  "key3": "4jizQBUYQ3JmNgAFfjvrT4SdzP7QCJEcPmAfJvuoNJzooqBmypW1564Ba3LNpaUmMHdGdPCw7VcD5WnCp2zb9CF9",
  "key4": "3vDMF3PzD39nXAzXUWdS2vDV5vYLSxaeKHbPgxKGQxSq5GqwEdQ5UGqt3zFXfYLet1tPNdKdSdVqfuoZSA164JeW",
  "key5": "4m3miAuZAvbwtxDdcBmcidmdtqMWyqmnUFmvsLhwGpVv4yW95H6UWCkuRMwVr6icKHsDKDYwst5pvTJ93zx1xseq",
  "key6": "3kv36phAxXuuzKjD6xX4ieTesu3aDVYhPYnDAxWS7uk4Ra2hvT2DuW48NkkYaEyBPVt6XzhH64BZt2et96MQYCGP",
  "key7": "2HzsK6P6Psta93S7QP5vVEnbC9xisxnpF3jq6UKd3HAnfFMiDPossgWHT7YsiY4VEWH3xm1CKKCnq3Hfa2mi6sTT",
  "key8": "4bK3t3FtBE4PuXALL2mHRbBHuqMWKb5KPeYtW39u68HtNBhdUtbT2tzLiAHMNBzhrAAoP5BLu7skoh3PpKkS1ruN",
  "key9": "4fqUdsnncbw9QwyYXc9GN5Lm7U6bs2j2LMpLJnMzvj7wW261GLigSaeW28AyQWyxvyFBsMzY6CPMxCq9WsNCSgqb",
  "key10": "4c69F36XcbthrqsS1SRPHPBFnRpdzeSyqvNcxET82uoSM2e2Q1hYXYMVue3kCUKPhzw1tGvS2JJCjScGNy6uxvo9",
  "key11": "weqKHduf4QcGf5WY4WuXD661ZgpRrdM54BLfF8PG8Hij6LMPfP6WmTVohesp4qJrsbPF6Qa2o1vAjY41yQqYBRd",
  "key12": "3FU9SAsyUDY6AzJTLknM6gmE7L5YZCGbJ7GM7qvQk4MHZsL4PKaTRJNfcZosQ4m9RuXTHqZjrdhmfrC36AuAhTeY",
  "key13": "51qf2Mo7muv9X5XWzxq3abwinfNPG1vsW4R1S1jFQt7UyMv7XiTXbdSRhtiJWhD2Y224TrhTBbFjsXFE3hQsYqTF",
  "key14": "5jJpGfi9tGC9W6eHrtNfbxyT7gyYq5a88gWzrR2Tkv6UWKnmJUNGrxUoxTBQUZjonAxVkyTM7Q569293wqkbLRt5",
  "key15": "2S2guDfgLzHtEjPtWtNgrKngSJYfMEZD7hba7dq87vumAA9kq1JE1tomGGXgu41JGY8Yk157KBKVSw26RXu7Gxbn",
  "key16": "JwKrq5Ww72RAZDXb5xzHYJ67nAC3m2DxmjgdTFadGBt8qZU39JRmSPxA14AAMpV4nTbXhn2dXrE3R6Bk8tbPD3y",
  "key17": "2vth3ZuLWtJPi2eqy93UTrXNDXdrPbAwcb6JYPyPk7TuNDKux5UjUkZR8jqajuVg6WjX9HB1CzRqTuF2GVrvq3PR",
  "key18": "4r9UhUpbCA1yy2UbumMoEBYWfuSQgdT4J8xdYEfuhZWqKxYbEEzJkDX97DhQRygiGbZPQARGBj86UrUnUZeSzd4i",
  "key19": "2EaySREUyrVd1HcmxrnTZpwHodf6LLRsRPN1giV2dLHsBFmKU2Hi9ZkDwXCpyXxjZdAz476FdqeWafbKEzBTkhaw",
  "key20": "5fLY9UAGJ4WaL5F2QJc7J6iBU2uCJt6JEzyD9gLMFTPqJWWt9mBdMYMfQMs4Aq1Ck6H3r8jvqCgVRESC9SnwwT1H",
  "key21": "wjve32cD4rHjcv1LWyUbeVG8fp3Ej7zyDVCbeYu8bwyQ7451Xef8m7SZxCJJnreSSs3qJwk57Hh1eRC7yDtZ1p9",
  "key22": "55THr2qcYznMMfuMrya57UywaCDCrjN77FS2xV6A8hU9jGn9Jk2dde4zyo2nHpMXZJMBJZ3N83FvdCYf2h8E7jLq",
  "key23": "4kK2SzPtsUWtXBtvj43UHhB8rK99FFQgqV6GB7eoTghgAHEZduySDa5hNT3nov6AaLAhmeny7STq9EsbuBBsStvs",
  "key24": "5Yzah9sddVN9trW64NkyLsp6oMHrhNQh32CSkB7QLm1WEGZBXnLJ1kjdmtq1W2qdeRSYSrG3LZdqvQiUuzXoUfZD",
  "key25": "4ar8p9gmRPdLYKE3utCKGCcsLBJ7yrS8114Vsrgt22PnUQ2HC8x4nTWo9B1jMmArzDSVfbUuGqdjV8K2PY5tbDe5",
  "key26": "4uNGqa5SQxSi5DJGP7c6WA2R3z7cCpLiQGZpuNT3UkGfAsaZkrDsT8BaKtGkpbHfMQqkXvNpuo2cCxmhey8FbUSo",
  "key27": "2bhM8KjMu2iuEQqD2g8NGccQEQhGnkbJPoAo7oPeo7YrreNMX1eRbbaxGXzKFGXmXdmRGEPFvjzdJUDyXpvUcoDi",
  "key28": "2Ux7dC1ZXKHJYEFQGyQKGVW1foZPFin2q4U2xvkgMjdxjNWTukqkRJUjw94fTo6Wn4kgQA6Lk6iWbi9TT2tZzbdG",
  "key29": "5sKgqJcXagVzUVB7JYmQW9sH7tdBe8koE1bUgvb4EhFFoiuQkDSLifSMjhJFMowQ4sWJubVbjMCWYtFs1EC6GhZf",
  "key30": "5kXf2qyAUbdoMhaFfuE3gZAio9my1aHZJs1qUey6TDZjwS1qhnYwqPakCwBHXsPEA68sk3eqCL5uimnQkrkMHZyP"
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
