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
    "xU5sRHnbSvb6aWhc7iT83Jr9RxV7Wn9xmFbXUeJ8VaHERSJ9xFgRkQa4pHCxM6UbkiHzwp6ztRgsaX6nskqBvzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GFYRE4YYDSy1e4XN4sH5CmZkDnPbgcPa1Y8e6m82GZ7vGQEFG5TokRJg3Mptw4TuBCdf6T8svRx7EeXysHD2Fkb",
  "key1": "5G4N8Cv5NPT5CBBD7wWfDW5gDDZLNL4f1qYofyJvycUU5hdJQYWDSWu8yLyHDgJxFFLLw4eFWGnxY6H9ttXCEiDG",
  "key2": "3ckG2eaj2nedHj6u6q7yFntvg3m78Gro79DTyX31Y6zGavo6tkCu1nY2eGinHsGrD4fLrBYtgxS5DM7khbxUTRPi",
  "key3": "21DtZjBn86TJsgBTMPLMgNtSDDJm9o53ohWAQdFCNTMEdHAajkvPgFvhVuv5hiHLXS7aSxhUX8dg559KEswwGMeK",
  "key4": "V27DeFHgcCvJxAEnfC7R8a2XurarCMzf4Qa3uPehnx85vEkEkfzptiHXcEGk4mzpDe3dZGnLVrz6vpLjw2fsFEi",
  "key5": "3CfkgPqJNGx5qMLEuUwEmcMDFkBYGmJj4Pqcm56Qb81ArDmRYZzJirBFfyZ71fpaEkuB6zYTwbfPzQ1PUMH8c3rM",
  "key6": "2AVHMcosKfvd4pTCeSrTnBo3cWj298AgDpegftpC3fkQeShnqFcNJf32sjPLKJXEuZRB4JdLZ1PWTgoPRUH37bxu",
  "key7": "3ZcQr4pX6tHMEns5MyK946GBquu8G9YHV3VwxrcaWaNAwnfwGV7hqYCCcYpSjfMsBqb2KnC91cHNDhpVn4R64ewG",
  "key8": "2f342dqdtdUdjBuRmv8vcSk46ZkhStBo1ShF82BmWD1ZkFHJPeHHr2zVrqFfbQ7NhE6jcFFvHhpntnjWY34SQhBk",
  "key9": "4gbBSSNjUmzMmTZLbjcmJ5Csu8xxDr44KqF9yUgCykmS4Jsjosix6y646ygHGQcbCvXCzoCAxAWVNgfw4iDwuXHJ",
  "key10": "2QWCDmmAK7sxx379Wc17u9Vycr3B7S4J4hQNYWikQzBhfW3xSUsXY9rNzYSYyqc5upep7iHb65Crw7s58WSXrhYA",
  "key11": "2QFkGM4icYVhPMLNdibVpms79X5JFgko274ZN68m1ZCcYQixFnFR1N4s1psqKzhoiT1SzuhtwcmtTy997nqPeb3E",
  "key12": "5qb4WyfEz46tLWJGbq39tppTiQwJwduWHKQrQLNgphk3v1GayY6aon5YH5Mk9rTXTzGTEG9dbDxwGBhz5LBkgf5t",
  "key13": "46QVFUgNdCymPeU2nXN7m1Gczd5H5ELmaVBEBTGQNHrcb6P5GzYsBMT7yxTB4G8J3NH8LVdDVAtQiruPEH3BUKza",
  "key14": "4QWqsWkibV2ifVHESrufquoR5k8tVQ1ka66Ybud3iHkw9pqZvrB1WsJjzULzGWSi1nHyZ8oy9N3nnp8JqtEkvhcD",
  "key15": "oQbcjjmxWWZWiyTsG7yKq38s7FK4FBsbBJ6KyWeWirNGuihFACvrjCeU6wvq4NiGCgujz1cRawnYnPLCtdwpKLH",
  "key16": "5tWEk765MM8evZSheSxMJcF4dKvRxzPZmnJzu2V2nBEgMg5o1sSYvuSMVtxsGZ8BSbwTVS9BSH1ysBkkujoRH988",
  "key17": "2iaewoq4k2aXoX6okZ2BQ83kGW7XG5jp8cLGUwKoz6vh4tnn63U5Ah3iZQy9qcE9nGGjSwZbggmQdo6xQvSeJ1pc",
  "key18": "3RCMbgEzz8dySJ8Z6bMU3HMUeAYXcXsZDTYdkqVHacHML8jW2goSoxtgFvTrRfQ98D8bJkRcQJbr68svDAVfBQXM",
  "key19": "5npLEMaSgdCabDVWAQrAMTFe6VFT3CJb1vgf64mj7f3zeL5Me29YRMR5zjJiAR3kFmu6ZEcYqdT54uv6JubuMguW",
  "key20": "2BvFM5tTMBJ4uvoU7pjhdupa1yf95HY9QzdL2bmBuCAqt1yA3TsSceuZVLFwdpzpW7gLLBUSi9LsdePuwzeeLsf3",
  "key21": "62Aofxmoj8b6WaW57aHriNHfWWrQAsLrMzALnsQFEpLR4Gagp8paMuDjTzu2oGfvQTmbaXo8ZyX6GHAVirAZUSRS",
  "key22": "31Xcy3DqgkErGmTVmc1UbWw7RqFzvnNwW1DT8au36tVEfCdrUUubaTjx9ayvtNoV1CDsxhSrfCAN1iJABrgXABHv",
  "key23": "5Qor1nd3Vn6vvWgmPpSRN4HdczDB8LE9YKdrTD41c84AqwE8YvV9eNGr6yTCd5qPsVHmyYZDe5K6ySKAJyYrbWN7",
  "key24": "uuvS1JfdXWjCtVWzmJPhh3WDkqUJXSeg6SU3w7taY1J96afwFBEFqVJg46xHTtcTHrTML3MXvais9LcHqnTFwWA",
  "key25": "4VaWxviNYDgf3tojt4JPns8rWuYtUa48bmQBhnMv97ARq14ZF748ZTv7XJVtPaFqJWjYyMTchkSip4HC4SKaDBmF",
  "key26": "4Zk2mX6Gzmo8TSB9TcMJeoLDmHvyjfqeKGSEiDQpmskPgfU78eDq2JQcfzHwHGa6fM9GmasgoBcP5YwxiPyiZV51",
  "key27": "cFpjXNEoBHC8dNGkC8RopABoMcX68KEJhCp9hPpA2zKYCo1gq776NQR8zrojaCmXKT9EJ6ULM4WVQJJwxHAbrzF",
  "key28": "3a8SdTGkTBqdZ73mG8t2mGJReKmp6dkkAGc6SKmQikHJLE9EzVHnM3AeeeS5R2wcT1oxtwsna7Mf6fz4crZ2DTiZ",
  "key29": "2RmJ3MA5pTwi4NSoBdfa1QJF6ZEdCyF4vjnqbXPZCtudehqmC1NKoxNtGub1cbUh2tvW1fBP5uPVAGdwRGMnwD1",
  "key30": "5mUyZCuFH9JcZzNzneDikk3W7R6HEBHiuiMmKkFcwHtCxdEd1tjE3mNVbin4XFr9oGzacpjdsh8JqgsoVMdsMtK",
  "key31": "4QZBmd4bc2BYcW2Zd1gJT2m4zaXCABAKoih82E2cpZ8nw583seCodYQG5eBgD3wrsqbK3CreHqgwhpiHd4z5pPMv",
  "key32": "2o7onBkwxZUsor2wtFwh4ufVqphhGv1syNMdBziVtA2yrGaSiomNKDXGi6JmBRY3w7T8rFM5JwpvJRkTUjxgnHxp",
  "key33": "5vo4QvAjpohAgxktw1dKeBMQN6JL8n1puULjV4zRkcALe9PZeMFwfZDSAL64XffiUgZ9uhoRobAbiPpBpccYYCYU",
  "key34": "4GLTBSS23AUajFxT3BXGRDGQRvESgYgYGyNN14VHmyQcGtFNiAE4izijSWAhs7gdtrvrj7xDAUQeDik8LR7LAPyP",
  "key35": "265KBEVR5Pen1P2Qy1drfqKPTEqSu5DfQDX5LY1zVDFZoYUD8RasPLmRhif1Ub9HHscGQUt2s4K4XsCE75wzvPPH",
  "key36": "3NaGSUNiNWsy2HSErrMzHqpYUnGKrYkvtFkmvdGoyHBJFfC11NX3dPvgH7LpKBwLTQLswkUCBFgyhKmEdApBMYnn",
  "key37": "3pE96tqaiRiP1xQJGcoh4Cz7CfWNx6CidQ2nTNSxndfz6cffax5xGvdfCDKGhJfjy1UfZ7AzYECqHwP2n1PjcMWa"
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
