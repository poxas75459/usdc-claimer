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
    "4zwqrjYK8m19h7Rp3tcV7duP3LqdcQuyrLs63Bni1QryvbpGbDkehE7mj2fJbGad9iGLsXWyg7k3XxSncFghcTxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S4TZHA48FPyaVayCkHTmtNZMCRn5ivcUXWrdjWB5Lsr55fFR3RB1EjUmesTCk1TS6Xm61kNDnkVRovRsodYyeVz",
  "key1": "3mFczVH48JJx9Umn6hd1VhB2tZb5r9RzL3TsVYNHC72HYjS37F6TQSYBn24cDc3XXftjx4Pck6WoC5NFXbxWGpHo",
  "key2": "359ehSrTbM9vQ4HfNJLUFRGEopEFHjTLC3JvnGTuQZn7Dd8ZkxGfa9ZEzF6oZmjpVu4Zv2y4fy42sCkuoP9DN6Qc",
  "key3": "5fc7dtfbSiiKaTjo19LvxPKD3GBr9bRnsdCqfyWoFEv64X7ib5fTxonqxhSVYXqghc7spnkNv5LvsWorpSyTrUnS",
  "key4": "ZskoEVu9dWFojorjavhrciQTGq5NoUxxZEVYRgY2FSHYwEodRtzbXZkwudU5VDX4PQPQUSwid4turCoWTosB8Di",
  "key5": "NEH2L1wdFNMVixCfV6nX13Q9yQrGKRmuk3JtmvyeVyVWBCfsb12ZiDUebuVvSQWtg3haqFnzPBXswQb4dh3Vb2h",
  "key6": "3VVZuGTAY98pY3TqWsujDHsKZawm8EjX3kXbe8cuQPzvGZiTQjaRTeRN8VCEoWVferSuKXPC5kxVfDaQD8cv7Kjm",
  "key7": "2BFkPDe1hp4niKkVmKjfyd3uf3PcE7nhy72vHYyQyUY7yY9MdaBYCmqDMMLJyJEabcHWKCPR6z6VPSoJLn7maD87",
  "key8": "EkZ6mXJsvnobTwfrWs4GcMgtUxmbQQVHFFfdKbTbzo8UhbCKaLvHQpmEzk6kuHLsEdQJeGr8LywoHCxrq3wStoD",
  "key9": "4Z6ZbxN6vKPNJppAkRuPmmRz4Wdakk5bKifVoULDxowsuoam5vgK5NEnSWMw1CnFzNRFrnUQEJ7YQJH4grZEgCNu",
  "key10": "4JJxhASkqSuszeNPZmE1jVrK9AxTTX6uSTreyFGRdGMyuPc7nd34LpkERfKJdMnNnSjcxKzPqQKY2HQK5GPWxaqf",
  "key11": "hQAnAbeWt8Z2wUfuLEk7YZixuhhpi7d6w3HSQTPpqiAuZQqgqCubuirMNMikgygBSmmN2uZ3zVgznR3ZAxY3jfx",
  "key12": "X99kpnFMN7tiXB1M65kNCphq6E4KJu43zkisQ3Paf3wGuTkmmvsVyupGqPHqZqkrZXpWBfeELmrs2uz5CHbHVaW",
  "key13": "48d8d5mV6nYCc3s1cTHCWW9DCp5vJTmkb4pfVDbwvvkYjix8D5YzgeZmRJsjed5oGqKaMehZgDV5oruT9b2kmZsi",
  "key14": "3E2hPouzD3ry9i72kis4bDqNHMeBMaxC1w5Nj3AY8AZV3VX5MFjofKtV8TfVssodiEWGdjGPuJQ3mku3id4MDz4g",
  "key15": "3UFPRhZGcnBVsZPtLFyWtkNyMYtKNP8XiibRG13xkrfsi3YebapmffX1t32PKhjrdPby5WLZrZKrtLr44eECZSzb",
  "key16": "2ZV8BzgtwvxKC7SJW4qzwRVESKTcc3RynwFUZufzxiv7RFXEKpHuQFatTR6v3V4vn7Myiitkzp5Pgx5bSbzDJP3m",
  "key17": "674MHoX5vZjrr7me8obkZESftv4u9cCvsxAhVVJTt9wzbA7ngitATpPquqBn18ei43xF4EMNNWdjXtbqwu7eggsX",
  "key18": "5zwHb9m5qGYM87K6eB1WifiaBgKGddNQtRADEerf3iF59wuwnbFtRTaWbrTE6JdqazwfzAX3Sg5hhyqDnchWgxZ8",
  "key19": "1mgugRq2fVBhVs6U5zDWCY3jT6TeCH6UzAZoVwcnJzkZrKYaN8h6fyiLgn7JGnCZ8qsD9Xmg9RoLjHnEtgckm1S",
  "key20": "YdZ2ovsresx6Y2EzWkfGJaSbYExq8RBjrq9q5f9XKBuqThzasPNHABGWuLxHHC4E4iczkJub7PMKr54oiPidpvT",
  "key21": "2UJTzjhzPVuT8PTGRUFoLNAWJe5LbRJEgqUmeVV2qmb8zCvBQ4kow2fejmP3tCT5s6kaqZV6f9PxdgidCwShAweS",
  "key22": "4ervurhzT9ANh8C82js4csJPbXYNfMK1H4xoaLDb7BshnmsSVtcjgMNd9oWRUPanwqf4UnaSjghzC4tWpAcMYMnV",
  "key23": "3TVTGVTFox6damTGUDmbaczgAUeyS2dcYuPHR2yGYgQUKNQU25bhR83aMSiCcAHh9pPaaAKztRJZqupc5WUq7zHZ",
  "key24": "4cwXTh8wXTWeqdj9EgXPRAKERxCzPTT5SnhVuLB37RKDgx4pzEhExdZYpyxsHphoV9kUQc8NNuMxKLwXg7MBN6r9",
  "key25": "2kyradyFRGMBCdbB681NYb6agaa9buAwPRBuMtFBgbGE1RUUdSsFDAhVBWaWfqKv6hSGVBXDJhiCGUCW5df4Ckj2",
  "key26": "zecBB6SbSCGzrDPLq6cqnjhqpw2iKZuEvzQyvnKo5R8aBqm3PUbbdu3JauTKFsBX9Rs4rnCzbb62hUA4iXqkmAT",
  "key27": "5LLx3RJYBfq7XmxiresCjCcVgUg97RREh44mS5hp8KdpfULy9NGDCdZkBsKbynHz8AkNuYJ7DyWLcPE1HUm3eBz",
  "key28": "5SPaxyNhZ5VpUxwVkJMfDYiz85o49iu72JzfApkUyjBLTfeu46c8h1CSkrjgeXGUBc6wfpcsZ9zKM8XuGQT7LExP",
  "key29": "6hNYtXA2T1ipwsnd8ySQMo2xW8N3ust1QdyTMW9L19qZGNb2319KSoQEyqC4XPT1wW1ii8v8kVX1oQFdbBXfeBp"
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
