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
    "3aw4YsCNWDrDxwxcNgUDWJxy2QoHiCxLHcD4XncXstPZEc5kQCdyTzLFwnk7v8yesZ7QFRMJhtayB74tPphL1PQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WfTGzyo4foZXqiW4CiS8MSJBzJGhnVHMEm3gP2KoynfEewUV5oP2yBSXNUGjzbbM2qZFZ3qgwueBUpGijXQWrFV",
  "key1": "3t8FHqga375sMMD81XPXETJ1AVjNqJ9qbbRJ3ujcE3WdTi7HTiHfxNc5V9WsUB53e2QYG1XL4T8GUSpfKa6kW6hw",
  "key2": "2DUzgYhZgX9wdPSiiuUVaYNPme3kRjnmxwucJR3oUoeyQeUKPeHhRPmsUdPYWPpAXf8jSZq2wxvkaJ62b3bqvJNZ",
  "key3": "5wEYngbCLWpTqhuY5ZzmihX881SZYYbwyEaRzUiYtiewLTqDEXhFDL1P6Q6HGFyHXjkmNcJq5YhPtUtHhGxtMZjf",
  "key4": "5YvYreEnPHhMRTUQjpKv2ktWULwBgRVW3wXjxUifLU4o6GPVPQGEe9K2qB9hfU6QumRoKLgRZnV7qFQqYET6994f",
  "key5": "3JT8RABXhsotGohCXws4So6hPYahXA34dHKA2M4qrW3iasdZzgeQdbei1Z94k6qWA2fz8zECJDWAhGsbZR7LpLVR",
  "key6": "5TdEZPwkh46NFELXas8wMeaAuD46hJEv9yCegaxb2r9fq6gv9zoDRoL6hC6huDSRErYy4PUqRcQrXLUNE4fqswFh",
  "key7": "5gqZP2rNqBRdt3UkBJDfJ2b5CZ6CucLqbuNPXGk3JrFDgGzcxJP8GPLiM3XxCbwndvVaPuM223MG7Lx7dXXuUthn",
  "key8": "22aGYr3rfKTDaeCnAqm27ko6vyQb154pvEd2PPK5iquq1bgjSQsQ9mqhdAy6hAsFgm2i1dBMHapRgeqAyGEyLhoY",
  "key9": "4tTqyma1RYMdEzHZuWvEB49THKhJ9bZYxhCGGgh63JVimmWZL43ai6vscAvcDgYoYbWspxoYM9jhzofHwiNyep6H",
  "key10": "3J3kjh4o3bshewnrSoNSAQgWpxbLPAfqDkevvMgJLqR2ZyNk1Hj6NYgwHHFp5SEJqS3KSY4zhAFVyWygHydJQpnJ",
  "key11": "4fmSg2fkMqRMcQkZwvVr7iwsNnRuud3ksCN4b9okhQSyapbBEnsV1u3e3GHmUHRVg39aWXgJYqppzmbGVDGtjiGz",
  "key12": "3k1EffH6RHMC6sN8BE7U1Pzmd8sgCjzFhBT1LrPwVB7koARn3S8A2WfpovKNjbr7qVZXZx3PrLhqpjwCZtt5GiRC",
  "key13": "3xF927no5zDPhcyDayafE3aaBavVRUaf63KWUCpjQqpBDH4XYvYWo2L6MLyJWYU1sKxgYh7u7hMjBe4RdcToD5gk",
  "key14": "3VAZB7ycN8BLv7Xyy9V3gozcxUQsFTTtpNXoxLyiqc9VRmmtSpkxMPp8kqogcfcFi1xWeSpLJc55RxVEBHNbxujq",
  "key15": "5r1LQd1U8Luwy3hyjUZUiecbyFoyMBWsm2k5ZpRNtMrrm7c2YaxyDZBiByj2v4Bt5k434JGjgdo6M6vxHhwhgBah",
  "key16": "MTFjsSh9L1ouChgA3M7PHhwzizNNgLQ9yHdSPxvw3918AeRwGesEeTdykx5841oLXFtqgtWh9mRvG9YtsnkxQ3j",
  "key17": "4TvZS7o7SASULZYdirxgmGJMTpBD6EjBKQiqHgh22vpjqyF9oYHgcygie6eYeDHRNqiUpZWXT45NUbFY1r245j1p",
  "key18": "3qGe7CYdHjyY7nHD7JHJXfueKviTyfqxjJ8fDcB3oJqDFR9RHwVpz8ZjF5mQJ3tiUK7dEEMq8DUJ8MzAAB22NmVH",
  "key19": "4oALXtPTuu5pj7UoHRmNYbTFLVJTvgfAXJxLdgqofV8wtTsVTF2Ngn4QWD2bCNJabTuQ94oex8gsVGCDniKpsq6P",
  "key20": "4aH4bV9aEoxMXczr3xzQ5YwiSXEg7Js3sgEhC6EGRfBevb6M5vKrCxRexyjkaz2cLg7bijEAJA1grkvDqMKHZ8ck",
  "key21": "5s3BtDjmt68uMmTaWw25QMD36MrEgFBf25R5vcvUA3KAHA4wZSbYQjVwaTaMe8nvGxB5M1hNBECsbqoF4Bj7sNYd",
  "key22": "5aYbx5ycyqQTo6jkjEzNSVgHj76SdpzuRJTfuQGf1K8QQkABWRSzNMi7nWJdTBHGnJctowtX8SbTnuekr4nx7rH3",
  "key23": "diiNpZVL5VNKXcdpUhgSbbtNrGP2RrovLNyqJrj8L8o47FihB2bqSEgxtARz8DEnLiHBFBx9XQy2GoyyLR8KGsh",
  "key24": "49J7QdRK1RBjt2nVL9Zx7WQXCVSHRwh9efTS2uVRK9wTapvxVgyd2bnT78qsithigdenfF9TLKe24WSSYKe1wLXr",
  "key25": "4P93wc9azVu4AvcxFpDfMdvv6RmNxpEDfpgth9VxiVQ6Dbc6auiksXevWDKReZZ6xuscqtiQ1bBbARZCjVerbeqi",
  "key26": "3mNTnndTXw1FKotVwazN1sN6WTx3Meva6c3CanPFmihP7bVpRnpTzRLs4dtTnHv8LqWPxwyzNHC4Kco3zoR8JcEs",
  "key27": "2HzLLdoQ78nVHkKaS8DzuLQJpje6cmc6XqqC9q3Q4xJNARowjmZyToRBWDrMJrGazivSEcMD7GY55wtvNmpevrKH",
  "key28": "2FMTVt9HbYnnvgXWUAEV52d571hVDqpqek3p8XRgB1L2U3usujVo7RFCbrinxUAZP3u7tom5gWnf6hff7dqCoNmo",
  "key29": "9SyQ5R13oGV1AfjTxFM8fWRA7x7Qe8bkEA18GuSDLBPGcHb4FLRUhcnGBq1nxeVVRc7uU1dSHxYdkZaxBosroo5",
  "key30": "5acRnmRHW2LPShQuN5WXV89HyKUNyyougpBsXaU2rotFxGkrCTFyDqRU3AsjQWWcwKAaJvx2oz2PjijswthTzCp7",
  "key31": "3m9SuCKLcngNBEjiHRoZ2BXa2y6oAh2pk8ChU4LPYmqzqBwKxBmzte6qKvDTshaq7ByakpZ19GKUh3cqqo3xaSNb",
  "key32": "5RYL4ikU9LHzJQjGTPgtaZ1uucwXKsbHNMGunMQp6YYzS6NxBkuTjxtp1pBhGpU7hsxyAbR7iVtDdXeJMHWLUCZh",
  "key33": "2vRpvL2dw2NdRxXmuzK7BkwZokeo9V4WqDmw6GPywoGCXiMkcK5JeudVUU4exPuaGWFiBav4ZvUVrrqRuVMpkUFR"
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
