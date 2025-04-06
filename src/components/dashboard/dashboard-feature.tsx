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
    "5ZsNmUepiZpqQZEXyF1duU6Jp8pxj4yUpLJpCWqmyZrBRd4LNEArunV1if82afnLEWKGBmV2G9WEEdr54pMk6z7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65gKsXesCsxGGr7TUXxPDvJ38xDYA6KGtyPD826mWkTuv2Hn8SoGp6M3v14mwajtBJUYRHgbPSBXiggSyZo82Ruy",
  "key1": "4uzNXMKefjAxrbsj1rVpq4TSqCePeBCcRw7ubbFsgaGgbhz4qEqKVJ9zJ8X136v4u66vx43K91dBkxHnax4j3xEY",
  "key2": "2cJQgtnHLXsevGeqrJmMUvKqnPJZaZvdrA6pLCfV6aYohaxEN7ZPo97vHz6mnpZjWDRw5YoRDHtYEWujzaBzimBE",
  "key3": "mAdFdKk6C92uDwagGdBdeAkqYcj5LQ6tmCTKmJoe3z74Tz2AWcKpvEAafnwRo6E7C6V8A6iszaEaVfqEC1FpWDo",
  "key4": "449NveooEjQw55j5KXZd7c1gtNb3FMk9PN5T3i113itzJZwxjJPJzwM3QREVwLBgpbG5Z9UHiJvB8ruYjtRL48Lw",
  "key5": "4LRK1dbySyjAje9sAjFzP4bfPgFFfeATRQZA3Zk5Qv6fRx8kkveNjPU7gqST2dLi1YodxiJRxRV5YUUDgyqeWM6u",
  "key6": "So62GtE18R5Nik9tDLWpQ4WuLJEaZkC5Yku8phwMc3Z9QLNtxS2WKsKERgCb7GWzCtgg5oXTWXjhyY7uo6VutNS",
  "key7": "5KgiHqoBmggtQVTLSgq7kHbiWNNunKcjL6bi8VSGmc7KQe35eTDrUvK11VJwfz97gtYSF9YJpoTk3W1juSUaboM6",
  "key8": "3WHYtHF6JzDPmhn6sTDbPej3wQNyBtGXPdCd27RMpoBVuCxmZ7NMr27yVSpeFtTLtnj2tWXj7fJTVXgPbqKiDvpH",
  "key9": "g2F5dhzB7Ra89kS5dP19dHsRp7XUYdyoKyv1JyCYEGwBS8LeENb6zC1Tn23hacSuvoKtvWqmtFPmiLsLwokVLE3",
  "key10": "3UZg8SEWzo9diNdyZdb4Ku3JhMRgr1cEukAGv92BSxKNX8jBG5UHzvEbg5p2NSZU4XMLWJGfMURYBVfJM6HLpv6E",
  "key11": "5PDMJA758MXSckzXgfVhz2B2S5h9jSBcknPqp7PV6TsRtcVabyFCc7quwExcRmgaafoqVsT9nWA7VxqggxACm2rq",
  "key12": "miqbWqb53wtnA45aToTBTNZjYyPL7JyknHbBJD3cYjB6qCG73Ap5QjkykApGTStKPRvrLqQXVoxQqjYNbrdRJDU",
  "key13": "31qW3M8BEBqtJUMgy8aDE1MyHgtUPN2nVDsAWvhenXAuxGiCbMaS55tu1yzNpNe8RnTzxgCNNXu8j4y4a6rP8xeW",
  "key14": "3LPjLEmjrt5SvdYDQpps1r3RM1jiKug4H1pRogJBaAo3VpZHkoNYfELvc4yurbTPqNVsSyXtFLqWEhcXydm8gYxh",
  "key15": "3oKHE62uyRjmNarEeVhJxL5sr68tMTZEmi7BioZbjdiVVUxw4F3vKS9aMMJKWLNxuchK5ZosBiKPnv1NpCsG7bXK",
  "key16": "5zkDC3dfU4cQz9v25DRnYV2ovGm8euteWjh6bUki18t9RkJgMT74QhGRKsuY4P3djVWYzZCoXMxddgUHgEdt7zap",
  "key17": "xZ9U1MbWbH3x6hHvJwutgMsSV9rFvYiAzNNU7oqLg5gG6woTPfoSSxg5uRh2b3H1VstWm4UiXPEwUnrZibnqFkv",
  "key18": "3tw92BKrqcDzXsBGnxJHhqNB4RmD3LrjTKBUuXD9jaRzmH2mXTn1WBF9239fiiGs1HRWCjMfLA3qDUXPCxzX3Fvp",
  "key19": "5MBouc6nSwVow2rZRg5bdBdpkxnAxrtULX9Gx4Y777i1UD7fPFHbFeCxPML2kFSa2PWE7AHUKVepz9JcRjRsVRgX",
  "key20": "4TQJ5Z5aT5WF8XwfYyQpgu9GXfSQc3ksCSKi3fJVXCBvo6q7QzDxyrzFoJ3xEQpHCxijp1Se5j5Q5xUdUENXM6J8",
  "key21": "4TDwbym7QvMSePdvGvZjWUQtg8BHEpZUAmH3VUppre12gnCKcMRjQV9t84TvZ3batxVXRCSMRBrCY3LsAaWB1AFc",
  "key22": "4XcSn3fRVG2iUwekorpsmvxgMG5npEwCn8TBiQFSDQanMHTroxUXk4t8yEHo1rYA1LJK4zkhJTXYoJcxnMaahU2f",
  "key23": "2ycTxtaf5QBFUpmtY4gjhMTavMJVwWqSAW1KW7dQruVvh2oCeKesSUhm8kAxYnS2TKgNFRkM7fjBERn7ZhEdGBVh",
  "key24": "2FeSmeXDhCedLAxJTUJct8mcL79HzNj6U8nvGoYumhHhgXzvv8WdWLthYfdR8GCQs61MXm1jDdTmDLJU1qprK3jU",
  "key25": "4MRLWvtpDum8ZVBHEfk6QZkvUuQ2uHsaRXXwCn7uJ9AQSaEDDCNF8MZV6qmQwTuigrwSDo8SJiLXofLcaMbjyBPT",
  "key26": "5Kg3Mwsjt34W6P3rKXUFJAAGULCbj6EERjy7vYpy5kYdGzr3cC69tquTP76gvsmYmegR3gmiDDpZsQng8whqsVSb",
  "key27": "3n91V3R9MjRp5orF4Hs94pxEjEfC67MauED59vZZyCTepsSjrRkBNpGCR4W6YeiYXuD2k4VYdqbEZFbu2BkNia4M",
  "key28": "4VLo3t2KD9aLMHrrBCLjU5bNFtiZHMLMGTPMceoR6DiB7gVMEuogf4uqRrF5MvdjuFvvSv9TtpV5zWWbCo49NXxJ",
  "key29": "5sYeP9tKvj8iGAkMsqqXXfXwcWxt4d26HSgqhBzFk5zKG4b9VQz1REzGj74xXutZ7PpJ1iwCoaNqHC9yQAYDB2ms"
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
