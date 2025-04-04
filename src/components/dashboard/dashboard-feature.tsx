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
    "4Tt4bSWx7J7NhoUMtmvt5A2FQoDk2a4tTPykttgXVrAs112QB3WTJQP8ra7TfLbmr3kdYaWsYhFGRMDN1JxzdkhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DZN3wyWWcKkC9cSbnfVZtkeYrA96gxH4cLoyDaNaeFwPSKdRk17Q2cEVsAgjgAD5JFr2s3kMibDxgWAdnHkbWGv",
  "key1": "5qdXNQ2nQqqC4JcRvcCcN8Mn6QRWApDiThan3A7jek3CJo6tRbciibmR4k5oBSG7gode3T6JgJESWp9Bdmzap3ad",
  "key2": "Zci9ZWXg2ZeDTUhv2Mn7vFydcazysGh1hvZyRwq34gsa28AAFTxwbwdrgt8kha8kcoKv4t8JJxnT9RYnfE1Vf3q",
  "key3": "3QsWusTGkc42e3SHaaSKefU3TWZjuNiwM7Dgh8DgHr7zAdvSCGqFUcfKMmQRQmoYboUpkF77icKqQhK6NTD7tdH1",
  "key4": "2LVB2vgCNdAPZGPethYa4zwh6keDGU5XeZqudT4RajqF5YWS3KQU5MtABC5D5erqpFXv3UDiCjmuDFqiDrALWBZS",
  "key5": "3grAwZ8ZekGoiA9XZm7VZB1uCbsdx9poGkmkzTxvAayLiKoLGMnXsmR2pgnB7AYhbrCJvyRazcTb63UZiHk3xqxy",
  "key6": "5MAu5ZZt99qV59JPVLjqGxUtDkQjyvkSrycKW9vAupdaa6hxH2s2DFSgi5ev3KnLa2DRK2386iAVqXT9bGvt6HZF",
  "key7": "2zEQWKweYYWVPpNtKuPqoeWcXrMi5MhTzDw4RtGPQHLxYfC88PokEGrJdEjYdFjy8jjL42y3sLBND8DAEG8k8iuD",
  "key8": "664F88nT7hoJeesGwj5mZMrCvEnDXwUheQNbb4v3WG5E6PMLwT8qf7HszU9ySzbDaKrGF4GHx7jogNFeKKuVEGXY",
  "key9": "3BjHR7UarwtS9idKbsDQvkZeEMBRqLB3GQZ3kVtTUE2wnEqfWjZz8cW8eECfi4bqGa5bvKxqc9D8t1iLXYxMAApH",
  "key10": "43LM8S6dzbg4Mu18A5WMLBK5bAgBAxcz88Mtp1tzsDCu8xxcrEy7hiX5vet5DF8FYDt7WYMEZviE6r7wL2fV47qT",
  "key11": "3KbyXMh1TZq4TfnjbYgitjcdmZoLveBBG9VFvoBuqzHUzzXNi2DzYjEHRVzZGFusVSNohBJE3zpGkwCmg3eERhsJ",
  "key12": "4H9RBLH2GPXN1ExKFCEnPoVCdbWkDyKxoXRSKpUErfUTY7EzzdGtiVevVpvmCA6kv4G86ncCmuDNy4WCjTCXK7Ta",
  "key13": "2CdFYQsaQpEnJw6pE2QQaFeKCYsMsM85zyfXUDPTr6hbDmTLmMixuLXHYASEUhrxsVzkVhSfRjQ4mVnh86vX7dyA",
  "key14": "gsrVqiYxsw5cEPrgb63kB651oeDMswsPmxrZxMM7gBxpKnaGBCUnnTuJNy6pw95NsEZJMA8bfvUkXCtU6RS2LBa",
  "key15": "8a3D4wm3WK4tkPgDrnhptCvHxuo2mgiFMwEp9YhJsme769G2jeUUGq1HdM9RouxPtSDcWKdNCVvygF7dwAotqyT",
  "key16": "YXpazAnidrdbQxc86CKYMakxPsJFX1Mob3dgFUHT8DZP46bg2YjHrGHcB6DBm3sGWyML2mizLJrHrRU6R7VgytT",
  "key17": "4ULpa2dZJT45mqH3n2uoAMFWR6P8bfbge43WWR4SHnqJYtpVPJHzjjD6HareJJesWFQcc5jUNHMk3YUes5uKas9k",
  "key18": "2XDtM4fKBf59tWzC8Luh8eDzsiScJPWRTPWejqGfhSgESPHXZjk3YdtXcextQFRjKSeixhSBfSKsqQNoHxpy5VqW",
  "key19": "UUxFdNV5R5whuXvmbn9CazuWxsqS5ykSJ9JjWiBaAGqqapS2rh7rDzzQXc6tv9z48tjz67vU7k5FFdtNta37bJ7",
  "key20": "2cxd3pzQ56SDbJgG1onf68MTvf9jCSjL2iX8R76v2y14dmPRF1Jz5818kXRSHtFSdZJPUUSqruqkeWtoa7183ZKc",
  "key21": "4VHLBgyc3BysiuoHHqMrcebeNsSt3svD45dk6mrK3zE61gSCCUEif2C259ANMMuNAeHYXFw76xqPBmfzWVvaATSK",
  "key22": "3MzZ8aEEyhhAjUGrdytedQqujQyk29XefYCoYPtmWwhGxbeRjD1hrkGGFqu34nW2u1rvTNCc9ZuM1yNcMLXT29VZ",
  "key23": "MhqGecYxf7UbX1Jkwc15VXHHCsG7rBeWAi4H9xm3rH49ko7asAHEpHu4govLVfKaLzficZNTjvscZMLDCveRcTV",
  "key24": "4n3k4LsPkGxwFsb2trzjs2nB2CuJBkgvLj3LuH3XasGEEvAKVhRGRwZEE1dhjfHruAt9anzrBpKwJ8KvVSNx4Mh5",
  "key25": "5YGeVZT3p7e95CWqncfxkYRzM2UYaeHwg4vxZd153fi8Dy9h3sQisQfd2zRigErR1LGDDEd6b9LhVT3DpBAijJ2E",
  "key26": "EnqTS5t21VTRP7jJ9Xc7Hpq2Gz2ZPrNiaKHySnkMB3HPEDgbKbcEfEDyrycNd3tKMz6QEisuCcztRsfVAFuymas",
  "key27": "4zBGsXhhmugEqxg1dKYMr37xP63nr6tQYJKjUGQPiPxjy4ygB2M9R1AL7oMVniit1CUa4YgEBdo8rCkVthRm1mec",
  "key28": "5stwe2pqX4LhLnuHcphufTgzmmpbbfm3hLDQPZNczznuYh4H6yPbS7vYq6oJWaAtaACJaWwZeYpHmTzvWse6t1xW",
  "key29": "4Z9VqT812EFYP2j5hfiv7xsuhbDbLUnjNKhBFNc4anmmYrUStk8EqgvEr5RDVoFmfN78YjfDTRngKG7dG6uu8QaE",
  "key30": "2aXkQFPDyx6R36JC99QamPh2t15kZPoEMFvCLNGq479Ut9hVXWEKpvHykAGQnYCw21J1vZeSTKkvTuCgRhZZMbHf",
  "key31": "58fo33XJSG3L93PZkRHgA3byyD5JvHnZC7R8fZdvyUc7cgfa6YW8t63KDoNdV963gX6JT1FA7T6ZZP67Vkpbzp3o",
  "key32": "3s9Lj7fnriscrqfqmvFNzz1mV5KR5vueESp5jKwBE8ECz3MpWn6cZa3RRGQxqvb8fiaV83fxXwWkEC1d2qkUbbUF",
  "key33": "4naEDfGRJV1UWNocRfCoCW4rFMidNUjUM4HMA9A6YoDh28TsbxE55aTqSe9fFsXtdBGZ9XgLPN5kJxcHmioyGcG5",
  "key34": "2a4Smjg5Z2Pk4hRt92Lp8FxWZ2inR5BvXBZU7ERdJW1cddv2KRvpARP6ndNmZioFjtQA5gXwNvWwbgn5S6ZXhyYq",
  "key35": "2mt56eN3rdZswBk92PQX6ZpxRNHFntHX6xzA5FDhNzKa8YpbXnJGChRa1r8y8G7sCQT6aZNuN6PdTjrDYX9SPNez",
  "key36": "2HPakTPgibyXdUrkJ1GzuDuLWKbUEJQMoFUagqQ5PUVjENr4CumKo3qJLAgck6Sxiqkr1DdLczF7kDYXkmaaSzoM",
  "key37": "3iZSQMcoHvq8Kg49qotPN2KJwMDHqtiTJR3P9uUeSnPmVh5iduk7EZgPRxSLmFTMrytgkUExBXiLffRPrXi2fwMS",
  "key38": "24ooovMYJ4eg5sqa5cT2DVzpcT7BK1SMmyssKnKWhNrBAt3PdfZa6SCg1nYY9v9ZJrF4hLPFSAx67ZPdpgaYJVZD",
  "key39": "4x92R546BQb17DGHXky3CChPqKHHAnHM6avnyTW28GLkj7TrFq62qRnrekgHXZx8KNqdT6LJm3kPYVZ3NtNe66pF",
  "key40": "2YkDWR3oTCLDvxTZSbRJruRMpfneTarYRe27FHdyNXW4zim3AZeq1iifLUhy5mYEupqDsAdoiDAhjcHqnfyghYAx",
  "key41": "25S5eFjwbUURQhFgsxNRb2EFSQnH7NFcBRJ2npTyumVRJMK6Q7F6TA8kZiTJWRw3P72gkZY2WoXkFGWgmDvscrwZ",
  "key42": "4UHrY5hhwEuEWN2GEnCWXps7Nk9RNaq74PSY1NC49wAGyRSh88xA5qG5myVxgZpghEKNpfNMHfUBWy7hv5h2wa9v",
  "key43": "3PonXtkUQhDZ831zPFJK971GBmbQvfptEUgb8RAF1wmq1aKtxkKAtZLrtwLtve81aRpsYbTRGXqjrimpvZ6v2RdB",
  "key44": "rBiUu5yyEKS7C5UJCrN6dMhZARYWdiEHVQ8mkpqkW8Q24kMp6poxj3FdkBmBJpwNakvvJ7tbpGzNRhokuNVHX67",
  "key45": "2VMXQv62YBZrC17QWVoccThn6ERPPjpM6hvdVxDaV7UKSHZvYmjR1z8VHPtaotMjfA2uxxuUB7wWgZjTVRAh7KM5",
  "key46": "ex1wijviLkEvrX5eJnHAD8AKkmNcSyjSqV1CbwqhB3iUfUYWgzxtXhoopeuVojV8xhTuMbSLYsA33BTN8Nun3R3",
  "key47": "3U2yu1nrzsU8qshkrdBrmgyE7CM1oK41ZJr641WatQ38RDnYUHUSVttr8CYEuxkr5wsmeWgaHeWuqGwVLJrhRBH9",
  "key48": "4TRjeuG8DHBg9BKyJC4R4rHWDFzHcdQcwyerW5e6e19ATYzeRciy8CoQnRDkF2dAVjH5M37t5VzeQgKgdHq3dPa2",
  "key49": "2buTbDxvMYCERzcy4FBB1M6sEoZkVDqggwaN6JUZ8sKGN7stMw33P9yHmsSSuTCm68gRsEAEPu3ra9DYhRWtBLqZ"
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
