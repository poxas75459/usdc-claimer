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
    "4h8Kd1oHRqexnKH11YpqwQCSy2pazZFNycnP1VQttfPU4jMmrYGiRc7fmdT3dfd1zJvxHNnNH8k8qeyHRVCzFFyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sn1aRFedEog9jPUK6MRdzEpG6KuopeY5TwrKBtT8TWdgXyzbHq357iGo27wKrbemGqc937HpsBiy5CmKNCAPUXt",
  "key1": "5UzrPeeU5NNjZfHYMon52Maf3vQyjfNyRBXnQwkGHyMcchGXFy8MbDyP87rhXKnth7p2rNTmbm46Xq5WaNRgqhmj",
  "key2": "3idAyEesgz85TALYJVKeRxk2fKLNCZhzznuiBM8ZaTHYEV9DtgEoiXmyvmJiPvGJbcDDen8THM4h2AWwkhiEFsp7",
  "key3": "42LvDsf3kKZys3eb52EJUVnvmVkNvvfn3rHeeBywqrYZFR4aENWUWvi8VBCatZpPWSWhR2FNZi9hLBkCVmMJEARz",
  "key4": "2PpSY8gmHW4ywuR36LH8WUZ7DQgTpJk8f4w1TrXJZNnfgkyG5hX35SfqY5S3vTU7RYRZnhqviXsZCATKRB4GiQpU",
  "key5": "2izuAQS6h9B4QaVa6F2pEHUdrjB2TtDWpkUuMA7kCcqcckmAqLZJriYAXsAEDvcHtkrfpJpyy18jF17UTCESAuNE",
  "key6": "37QNwtEfX7aHbDy9ftBwbarbpWDvoECBa3MM6haok11uijs37TgtBq2oW4EmMJkidyLD28o7ArNx6t2VH7EDBLUy",
  "key7": "3Z8aEtmWNjd1TKBQUgZBUKWADhRyuXgeRuaEfzxhRYPohWRT6PoNFZtC5XSdKg396CVcZSnzkgTAHg3LYU8EmzZ7",
  "key8": "39mfif2cQ3uhXKWpr3gvTAV2g6BdMy7J4d92FRT1hroeCJt9bxvr8NCYeFn3hbBNZHZoFvp2Uw7zf1sDrCa4jQiE",
  "key9": "4f2NLL3eVyAysra9dNZ8TKQJDcdDUoagyLYpL4Y9MKA9kfvg3fXeyusNv8Ui7McxYFRuG223hasxUC6eoH5KpcZ",
  "key10": "3Q5geyjCqQtEqcyHzREb7DDPJV81gFBNNeKeKki1K63oP8wU8oiiFdeSj1jtET3PsBJZp3Nchn2UoUFyRfNtuTgy",
  "key11": "282e63DmqakC8CnTsnVr1ccHvFN8Tp3YysAgv6uLpB1RtSBheDCjew8NJHQQRGaLADwBqU75Axe7mmfDqnUmAwrW",
  "key12": "2PZLKyFtgdkyy3woEC7XqxQywgHqVE7cjocTe2HxERiC4SBT5kick78FvhNTxCeQh2bp3p9M2cfs2kLpHaxQ47z",
  "key13": "27xDJhLuHtSJeG6nafgYY9LdAgjBwiKrJCkbjwgKeJwNztQgKAFkNwEU4dQiTCAarmxTJHxQCZa5WQKAroSbH8Zd",
  "key14": "2EwKCnGEJrCjUQ3maMSTNX5Wp3CwB6b3jsk9XJAyPukpXHsNqCKF7fX4GHTisCKA8iiVR3vQoC82zH1bNeDHjzuM",
  "key15": "4eWRe7RqbCmtoW94LBk6GVbpqk2jWvmwcbPcaut4zEx2cHnSR6famARmLZT5oqNCdEn3694Hf5GtfLV3rHauBnoF",
  "key16": "2jd3Lb2ihmNcCbBgD7CXcBKVNzzSXRc3X7AmwUK53ntDu4tMNcKvXhfAauyQK9P4NX2BTWFYWNRwwg6ToaXs7Ehs",
  "key17": "2hoXJZb7UZxjTek13Ved5fe98Z5m4fabK8fb7nfdCG9HKHn6ircC4ugS12tKKDse1hSRTb6rfUjHjDCbPMBVqjKM",
  "key18": "5nAvkpUEiArpRzq2mCvqL4g1b4DcvSjyyB6QmBoa3CtQa1bRP9bvkDSnMhG57wkx6oz8C2Nm8Bm3yqhbWiW5ML4K",
  "key19": "4oUHAE69dPeT2zMA5aFa51f7LqcvKXm39qeoYkBfY2nz1EWLnQHyQ788R7BFQCe2UhBURu1A2muNRiCiqhm8igi5",
  "key20": "2LosQXqaPd4rTcuGK49SrETWvyGRSYL7HQjppUaiDJznbuV4nQLu5eScbDzP483jmcAQHcuhyNFYZtsoNKcMGeXZ",
  "key21": "3mxdmTdcMCQSmMx7c1jrLacJ6Ptqkm3TjiGUYUhw1Duxx5Tii3exASN2ikvRGuBpxus918XR7WtcYDVQ8WzpLUnu",
  "key22": "2dGea7ffwdwHDFJyHSAHoCNoisfA2faZhgzK1527Q4k3oQuGc6vCGFsSXh35mp7FW4yZPBmuFHWS6YiTuYxx1Xyb",
  "key23": "3xJDxL2Fw5CYeQsAF5Q2QVLpfgXCxZrA32Xh8LjzkTZCFZnB3fCfWXmVYWzRwVrdMcyjrwPcCgQHpQrKq4ji9eBd",
  "key24": "28ZWy2R7THV6q4Vg7svdc955Ay2CG7uLWatvHPkvCmGf2kskRrMsy2mHPSNDC4CoJ3ExFvU8zvZfo1o3N3FTLKx3",
  "key25": "5XtYcWc1j8Q1M6875qd2vwTBRcQrrKoXYPXrT5oGJWkR1ovZxd6ue6EVcY9SgCiRDq48TCHesSsyqbbCg8FaP8M8",
  "key26": "4Q25Q2LDhMWUKy9g4jt1thnVkvi5uz3JawHzpyQrEeGBYReGqz7N9V6ePmGTxPk5kjNrbvJYbhpt8Ec7P5i7chZR",
  "key27": "2iZE3GQ9LaqVT9KzqgzpWTspRzZExngweNeKmHFB2CVe5LLJRxBnZGjVwNKdxaMKp23Pi3gmEAW7rXNykNLaXuw4",
  "key28": "5GwtqLKi3S7v7oqQHTDcgEWXeVDSjNsfcwGEoX7FQn8wHCJWpnMox9HxjrhoBvZH6ywmTwDvqeDv68nPHn2xCNt2",
  "key29": "36vLCj2CLRJMksokHH5TJSQ3VByidrx5PoQuRF8bZiW4aHQNxcW1pFryu3nC8a3J8gu8bN5Eg8ASUUycsaCLFXjR",
  "key30": "5L6AXQk3ipm6cJSg4uz6FBvApBxZtHZiPY9ewV4VrZ39YuYuxBorkQYKcPk9ZVLwqRomVYPtQf77GpuAPdbr8VTP",
  "key31": "3k45Lqmquw6dFhiS4v2j5i36vZCC2mJBg3HePDBqztYt7Z6Ci7eoFWcQESSEQcZtPJTiL2UCPDaRwHdHvc9Skcit",
  "key32": "5V9aJyuiB9xV4hxv4FmkWQ2JwuXaw58riC1ztyf5RmqS3iNXbEzDAEv4QsjwyjzRLBbgVFyBrG1bC68p5YtmcJSx",
  "key33": "anrLpFqnThQ1aBCdEdt2SrPerrdWdSEEnngwa9Fgi98feMUM2cEGSXSqg5gQgCf1ETSBUM5iAd5emR5ua95xMhG",
  "key34": "3zomvABmohkGU9FsKBJDnAv71zRZ4454WJoFfS93n7JrMjwvUYTaGQSQ1bAU6Bzw8pdSpHFviyr2nSndngKyreag",
  "key35": "4MM7tZEPxAjPymm4tyqSUtp2Jk9nn5xWaZHsxg1VBkgWT5w6ZvL7PiApS134m5MBfZrv9x7KSinc3fpZ4Q5VDyhu",
  "key36": "3ehGffAL7ZETYjmmk1YdmgJyhxpxTECGvBsxgPZqHpadKZ8RP2Zuzu9GoWcxZtB73AjpLRvejhGFw5153hi1WZbD",
  "key37": "3dbuniACYsBKPePpdy1BE1vUbXbKoJPKH8HvgzcxzMTzgkdV2DaNba89EXoindqRvUa9165Yqzp5EJBAkyNybwoz",
  "key38": "4ToSjnW7JKcu3BWGaCAJtperayPWGQkxsRowM6z79zF7hW4dJCHx8GPRXQn4CYVfHcctw5BtuMadgCTTmxfKS9Se",
  "key39": "4o1nZdVBQMdiaT5FZXoDKWr2gkS36gqJiPKJzqmCChxb82SDQPQcveGGZbcciwKZbazrsT27w9VXgtpzAkVrSSV7",
  "key40": "DKwq7ZwAmXhdPkdrydoNahCPN4mvabKSXyG3k8XeJw3dt7CoBNVMZLv1BvQToMyCNrNocLNcS5H2hurjrGYcLTa",
  "key41": "32cKzmb1p3y6qAC9yin178r9Jo9KdRLQPXhE7op4N3kNbdRS5saR22pxauADL7NjtYKm4ruwneUogZ68scvtRwYB",
  "key42": "2Q9xjLDjDTZcu57kqzgWDWm1AuDWTLEh7BGGjMktcKFqbsZW3LV3VNejUEcL9DMfBiDU5rB1FzfGWKeXPS4W6wHy",
  "key43": "3ezakDYKdFLet6Fxe9TvQxB18ZQAjoJWtBk7NEkR9Xxj956f6Zq7NxB1imspeL74vRueNTdpSdpAP5CjecNZ6aFZ",
  "key44": "34SSmPYqnMUDAcBpgk29KnYSWN6zh5c5jhagmDbWyaLbL15PP598VfN2mXMW9pZr2KfxG4jn41M9LE57T73tLdca"
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
