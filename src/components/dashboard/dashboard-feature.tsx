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
    "4NiKoKgnsghqBeNW1qRjnCxcEGmBdmtTyuQ8uYTajXTfGeauEWZxCFFv8BESsX9aF1eV45c6aZQ7X3WLzJitQJYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LeztUzJSPmF7iM29LHSLyd5hv8FS43zaZ56nJLWmu2GvrXgBYsmKQyjJgZJFEDDYSqjf8Eb3sE4UUgPU1UKrENw",
  "key1": "L3ZdDcfwZeRiZUeuC1kck3dwSbEGsSmVNUTdXShTq2nvbtNTHuJbXX5JQ3JsrxZSUUXdwMUAFLv6sgmGfJ5weNk",
  "key2": "4EN444zZJiY1guJDTqmhP6dqQg5s7dFFTrm1CM8xhf9aSvx3gMcgscvhQqU3SSSwDz1iV2hEwg5sTQwvQ4mDC4BH",
  "key3": "kKiLNN3Kw3oC1jTNCQWYKMmDyNhTJeeBx6pw1W1TYzDE4WQZUQwPBW9bWChMMWTh7fVkuqH75UU7PFi4nADPhQx",
  "key4": "3A55XqSEFCG1Lj5QzzNCmy2kUbwNGcYZQgUjZEzh24KEMgbKnpcX7P275oXo3n9TTJFLiF8X7GCda6ecupeFqJm9",
  "key5": "5L4um4mj2MRL7dsg6XQ35dreUsx9bo7NJW9L7kV5iYvFzL1aJPCGEBeZvuBMEcn1SKHuvCwZVHRAAj5W2tWRYjzh",
  "key6": "5rUp8A1bMa8goieUf21cYFwDRRMbtw1JnwZ3G6em2q41FYDpV2UGhDJkSyn9h13777Pj5rSgvBKMoQ6H3ZGu7okc",
  "key7": "4x2JFFo1evTGPi3zCxDfPYeqVULMT4iLaXrRTu5hktDTkXPnrHxbNtNUWvTefmf2uaxcFvApnwosarpZ8BLEzn82",
  "key8": "5FuhMfXe2RRaLD5B6ur5tRYr6bcvhsBU4wBsUCKqYtVrJACMdHLDVVp7y6RYgUo5eagYXacfoAf64RExehUNKoFD",
  "key9": "31vNf2sNKfuRKYrApjwisVTVRtHUToJSdX79WSfHnDxfZVqb2GSY4QsaUHqMci6j6UYSSkCvGphFFRmYTqe7gbz8",
  "key10": "dmaPocJMV3hQmaEsiLzb47j9Lsd4cfC5RQ9isYj6UPFsxKT5HYVzuTx17eGJ88b6yephXHAhoVrJdY6eZLqTXt4",
  "key11": "4doyJ74eakGjW5ycyHVQJ9X6YQypmS57NNGLzBLWbLmMejfMA8DdfuXP2EzyduDyQui8npcqxKtxgvsqbxrSGt9n",
  "key12": "2ZmT936hkabjusasVFmGLVPvqk7QhENdnA4YGKQAsYX7VEHRwhYa7hBm7ArccRVUu5Z9q7Y3rA1FWnBYErEnrouW",
  "key13": "4HHvbNFHqhFLUssc2kgmFaTmhP1N6ybCsQcD1qcqafZW6P18ST5fdWoMGEwk2eV7agLZDV5FbJ1Q9LyjWvSBcW48",
  "key14": "S3dYpDUdQUY2shUZofvq1PhjXPofg4Kcwf7hQE7hz8nxaLufjQr8n9CTrWRoawMueYbH1NzcBWSt7h54SpuaF1B",
  "key15": "5ke1Yh1LiPgv2Gdge6HVBxwEtvKKwERGai9uAMfB3L5A6sLDgUgenBHkpiYC1AninRwEMv8QztgJa7KDSea4Kj9A",
  "key16": "9sxre2QgcqzvbajYcnXLAA4VizVk7rUNhSHnGjQexCqGNa3AQQcLo5HZQTu36nRkq5siBpSq6BATucS4JLfUPfi",
  "key17": "4Ms1R3pwRB6r8nJMyX8DwfvNjfLnK9aEGxFqKxWVDjdHWVojc34dr8oeoo9Pgbkq5rxzaSrRfmy2pUWr5zGbyH1D",
  "key18": "2T1nmckP289Z6XcqZHPbyHkGac41AM16HQR2TVtpfbsWaws61BT6t4XkMiL5DCzDFKEMY1tTGW4ZJwS72NqCe11N",
  "key19": "4G7wuBxoMQUhknfLDhLFDN7in1NJexReQibeDBNQNok3tDx3QC9apXVCn46nas8z2pGp8wGLQQhT2Yip8Zfpy4VZ",
  "key20": "3wRQTutK7ob98vARWZ5CFEJfxgVUZZNeqXZgFpMyokrEFhyaiKd9dJfLyBbvjyVDdJ4gzVCBHpty1Yi9iyZ1M8Fe",
  "key21": "2BzYWZ9N5SZ1Dy5oSgHuJofYbivpYiK8EW9e5VjAUFx8U3H2xMs6eZjtJiecPXg34H6JPTDhuHECJASio7rXc6nY",
  "key22": "FFWUtnbLiWX6BPrY4Hp6PrGkhALAu9o745yqe6y2VjRDofiQPxGA7f36toxYKnnZa4sPEb9ddDonyfSXUEE2sfc",
  "key23": "yFHy8PZ2xbDNrme86MTXXW1B1hTxdsbSMbMSNtaBeToCMrrsBRZezZPvhwZJcEp42Xe5fveL1kp6ERf9vmFNYBk",
  "key24": "3xBavQyuc6u9YNpcHcQVDr6RantGyR673Xp2CjDGsukR3yM3qoAYVsYdECedZtkcybAMKCDEJtuPn3g4r3yP78K7",
  "key25": "jDJ4NpMcK9PFGviRKRqM7h2m3Ca4vJRZaidFRmU37sXjQQmbxLZ51qHGCDCo15M5KSCwufVFnKt81dvNZpvskkW",
  "key26": "4c1HAz7H639S8YRHdPpYQBgzucyjjtcNrmzvpQkW6P1vGbE94fskL3umgZxN2V7EgDs88wEFi2Wz3b3xUbMYgYfw",
  "key27": "4v9xQrkmgEXGaa6zXo27kYzS2ESWf45xx5u9iF7wn9QpQ46HXNiTkmfDzTMpDL9iKjNDPRu6PbBuLPzbwCmGSbAH",
  "key28": "A2aiwvFkZx5qb8Tq1PYRV8xjpDbx4CLUppPTdjXHewVLpEiW7x22b6M1JvLjG5YasD2caSnav86s4xSLDSmBZub",
  "key29": "23i5QmVsSi5XV9ZjGLXSEb3gXxWZkg7SkMFAVsVwuXwCKMkjHe9gYpWoGnCqEgtL7VMHinYzLjvLmG8dfFwpLGQ3",
  "key30": "2ADRxJndXxQ4p3W9ei8xwkbP916mAHmgRi2sn8T9NJSSvX2NG6bT6MCiKeUnjNN69eeSU85qagjius8xqiprRWSh",
  "key31": "46x6M5rXESuriztTiRpt6mMUquujXuiiRUDnYpFvEDZTjKP5vwUCEVdyt9cfLdZHxbpTnYAAAiUpvxKnjY63CvKt",
  "key32": "oSnf6b73Z39nHkKfiXSbi4Nu5oyLTgJWidHAoPVZ2XDvTX89oFpBkpwPNxdq9ut7eJoLGYxNKAGG3i4CspfRP9L",
  "key33": "3M353dw6VSaXeDGkfdGWj53NmgZEbwSqNjCrwmGwdEcEprD9XhHenLxnxYMHqsKckW3o492HnjNt9AcmKY5Y1m6m"
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
