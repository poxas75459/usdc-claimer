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
    "52rVHnuicsifquHBg4KoodtJQZD3oREk8ByZrBztK727ECoQ8rx4dNP6GUtmCNGov5qZGodorVwUV3zPkWkAsq84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NNgjNTc5vfLWM5zHN6zw8twyWty78wfaMvb5dy71sZiyFxaMAEzPqXewYtVs7WKdfGvscQ92xXhXczbLRDhZdUj",
  "key1": "64SwEe4YTzCsDLWAwUYkwJPe99e2rHf1En5hXGVcBGQAjenkurh9sbJaKSJXbQiNAcF9canbyLYkqRFdnGTvdSnt",
  "key2": "2N2gBSe4SWirFsoXk3FnUbnq48Rgt9bmKf3NPjXYMBCDsKRzukDXqUoSdL7Jopi5sWvgfWYhVzXGiYnKiwRMHdWN",
  "key3": "5VHocKEnv3KR53RwNpESRhwGGL5cqcD769rJEQgRijJkBZWsPhqRepCC2mccdt4Y1CV6YS34aAtdMV4Wm4g67nuc",
  "key4": "2aUK6gu9CCKrQPEar7Q9KZ7MbpzL1BasHNFBBNRpAAtAH4Nb1e5UJSgFRSs7QYx7QdqVR7G66gA1HE9p55GT5c2h",
  "key5": "2nxktJrBjVcT5ousL6rqibFjfAWDADBbrJstefhZmixy9aDmxSrc2cA3E4DVyeQCNRBbamkXNLGxSRNp7mY7GnjV",
  "key6": "4ArquVEvhQERrCSdueFpN7QRXaaeUvAVkDtBzLf3a2UG1EuNw8t1qgPxgT49gR1F9axzVtxeiuE4VVqDRnicy13n",
  "key7": "EAaATWafmazPagEinndYWNoJQbqQHfpdRBckhZ6eYb7VkmQ4CoRVmzajGMLuvM5iG17PNGCPSK4Kmk7YvCWwzhF",
  "key8": "3F48uayotPXyihPgyDFnUxHrFmCnreTAiSE7zfmRpAAF8ZRXYGpaY4HTsyGyVpsHPon361Gxs4kmaqjAWppvHwiz",
  "key9": "4xP9pVEiPXjfzbpRbppwzTetNphEo3dBTbVC1LYqdgGXizGigeeDyCEcAcfokSLggGXsYrPJNmcDWMQ8vwdHGNCU",
  "key10": "5685iPbmmc8ZAAvzRQwxuLyJ3i8CRJnQAbNJ1G7Tx18fFFEch6iXZSYXnq85abgawggYqF29xLLyV8uaaieFgkdR",
  "key11": "4THnc5dADp1bjFintGjJmPpLn8rDX3UZhQpQYHdRDjPZk6hxPz864sd3VneQodyEcK76dzJtxi8exdGyVuX1dCNY",
  "key12": "35s25kYnhM2Ft7Ywged7UN3bm93pVM6zWKJjbej2UrSCv2kxCCS4khGYkqngRCHQox96a2AkycW8J2cBc6CGQtP4",
  "key13": "3deTbTTx93rF6CKTdKuKFAnze2vVbGwm8Duf5nfhgcEBFZ8nh6uxLdWSFiCZgpW2sBnJXC4aRigM19tWwujcJtxH",
  "key14": "AeXfDKeet7VVa4X2U8F4j5FVSzR1RptFUaBvm2UBj83UfZCa6QBUqd5q75cAUkvt2zETPYMtJwVckfJNRL3yizg",
  "key15": "5RWtdJvZYAfCrWXaKGvrgEdxUqrWmFqCJu6TguoXbDedhiaNddtYq129LbuMnGqPtczGHG3FK6v39aNq4u7TvVtR",
  "key16": "3NZEXaAyhR5CccX1VKrLpMyDMcZY8dsomZFhP1ERJ2koQ2JkMVs6cBQKVW9WmnVynzWbD6E94FzM1m8m4BkmSrvg",
  "key17": "2GKyp5VRLCbxeu9YBD3HNRz3DjK1Y5Ck4ezZDK6QB6WBhCnm3fXExmjM2ZrcUDoNPY2TvE6KrHNyam5CaLvGymPf",
  "key18": "vRH791vpYo3EBSKzNTPj1MCLHiGXLRTEvkfswuQuB8Pc4YXmDMufYtjDG3zGKJrGjDZuRZXjgJTBL6UjhsgdjKe",
  "key19": "4VypHhnkGU6m3HaxkTb6NqG1jybKUN4NqQ9p52gk44A3Sf3cGVYjPa5LYifj7UjkcitQhtSox44ssFF4rsDD27ka",
  "key20": "GdoigVBeAEXETv7PJZhs5TopPf25q8QnWKy3FMAjjcrFn8AkZVdQBkkJBtnH2mC59BLBdkzwgELYBJZ4GLGZAJd",
  "key21": "4ht8JNPya167sAjmigpppwcKt2sWZSx2DzkcYNMgcv8VEbEmkb2w6P8SdDnhCy3bhVga5CB83CoxTQFDpA1PLSn7",
  "key22": "2D4onX9a8M3Q11Eaa3GBySgwcSRch9C5oW9SKiQ4bdzxy8wekqwKrZbC5auPhPHH1uHRNYUnq9QEqgjUa1LyuZm",
  "key23": "4JyUvi2SEfby5qB7qGbHXwVjazhcBmA7uCErSRHfk3kQhkK5Yn43BdCQCuCniddqnArhYQRgZDGq8SR8ipVK2Kmg",
  "key24": "4hn4tffHqJUEMzmYLds5fsZGrNpZVQjnCouFbcnnDwMvc594iu76Z5Y21f2vgszMAGByi6wSkQnAzyng2q4mVerJ",
  "key25": "4cRgiYCLF1mvHooeEtjnFpskDFmkaM91rezgR6puVzpf3hUkjVp18VN7sV58FhGg9jVhb4svZK5GxRqTBAUZQPry",
  "key26": "58B7ZeUH2fsdbhFboVMtpV3bqxTFHEHuyaG1XHG3eNdPy63sYMJncHiJzgcAVcC4ZXEGqCNHA3KTTjRYU8w9HKWu",
  "key27": "2hFKserm8ME8vs4GzSjBApCRK4ZEurySQprtfLXneVcxZRT2ceVg3Vr3o47CeC12458QtA4FkNrrjJCzR2L4Sza1",
  "key28": "4gc5HMyTRh8jNFtGJ6dtzwR5z7oKaGFaaedjuYjARmjDSraad5fHrkqKgcSiwuD4ewWriLVJhaALdWAvTUJHLWgf",
  "key29": "3JSAtfHneTaNEswhy6qcHp6mbo3bVYFjLGudbVsCUvfZPiHejG3qetZ3aQBmbTq5MjQ9Xjrt75xwGFDEgykjtU8u",
  "key30": "2293JUsW8pYQBScRSDKnxaTyMcSVHbn8bcMpYe8CgJeGXe1hLdkPvrCa6EDeEezgBYphQvCPCxzLNmpu3bPqowk6",
  "key31": "78Y5AM8oKR5Fj82xTdFhFMWVisegaPe8AZUyHETFevfLsUNHTfHh3TzcYf8D8XJR3y9UNiCk5gziF3NFrYtMHJV",
  "key32": "2HewPfmiA4rbHzq37RV9w6wLCe79dmASv4iEZvHf7h7MjCUi5UE3gjn7NSHfXAZuTqRWypDm6vz6zSzBbqcU5mJF",
  "key33": "MLpX754yUu8v966VpuHF5Jjbe5ygL9Fu7QA5yYponrMPMuErebshwdbPr6GHU9oM6v7DfQHJ2RcVAN4eG61qxUe",
  "key34": "2t7qr1H6SSvH7LX2AuaEbg6ypTir1LRavGfv1vUzgjb8iigfKeRRzvEHt85aKsD1K4nr9PqmBzwgKN2PVwMKK9wN",
  "key35": "52ygwLndz4ZucBxaAoHxTEiN86ZMWNhxYjXxEU17mVvfYiSKjFJfn5cbNpauReZmYcvxfPhGAP5NZh73rMSANQLU",
  "key36": "4no8bczdsUrpCuEpQQQgW1zTmWVrZuXbBxwHW8jAtUzcGx3hZa6Rx7cxKn5K6znKhvhhbvinVR5adUi8FfvAjNnM",
  "key37": "5hYAW771Wze9tTrCdobEqSpvLo8EWuYk25KXsQKtWB4emmxJAtA2QFam6coVTCcxSuqXD6oxkXiK1xgyVbKXsndZ",
  "key38": "3WxM9gPFemyL2HsWNSiR39f37TTTe3LKzaV1FfGgUzyz5B9Pnp64xmEBqRWxVZ7ug2jvHHZd9jvW6WZRmh9Xnmqp",
  "key39": "3TVZRKnktyQUbtp8baJkiUTHmYLEptS3LS8kuh9sKXVzzpFCiAK2tXAeuTegxkDbzuB637pCJdY84tywdcDmoxXR",
  "key40": "PnsfUTPVVnADuLm8HXL5J5Xh1pecryt86ynSLgP9Xt3Gry2AEhNCeKtxbKeJzrj4D214iabctQh34DqZ9Km7hui",
  "key41": "5QU8Hm2iRzFGAn4VgDrMFeQRuk23edWnz2VivdDniJKnDmj1eNAFyYZKbVpn5bptPgcZ1PuTJt7PQaHFbiSML8FA",
  "key42": "57NmdEPQtaPbKxtahYzi3RhD9S7B56EwCbSEfYpfjzPimJe1JsukLFDiTBE3xvaU7xrKXKRNSEQMDVPz1DbZVP3M",
  "key43": "3LR8wqwWs2y5nJmZWX8xLh2SnXRwVsXGNzzeYq6WVxntTjFBi5GMf3EZiQyzuckGnEX6VoyEHHTnzerTcYq6VX8K",
  "key44": "3KZijGhM61useYG3KP4kUGrjpUdegaLqWiLDsxH2jUgVBo3Y1PYjWaUteoH3svuDvsLMfJe6u5wrfpC8Ln9KRYAk",
  "key45": "2LtZZNJpkBwJPEtbY9fPS2gVAvzjJkpR4eLhjc56hTWhX6gsMXfPMMTKoRacMbz3E1QPRn7Rsrb7ThV6FWJNiUY8"
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
