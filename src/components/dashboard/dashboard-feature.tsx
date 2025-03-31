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
    "3yGoiC6w4UU3QYzMPV8KvKaidXtf42jtfbmBTNwvaXTMh67weZS8GxRuUp4NYoRW9uttCkXbzwJjxGV134RaE2Aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JMwQD4nb7PRGEh5Q3DfXaRRdbtcLExZb5ypGNpm8agTNbeqcUFzCRk4hbWLcBXDM5BrCBM9WZWRZWpzdAsi73Kk",
  "key1": "5MKWiz4kEDJVdWQkCuXioGeWMBaj1iutrqwEjTEMVVBGKkH8Fb4YX2Yscf5AzxR8PFQwfRZMU126v17s4hQqDy59",
  "key2": "2ArPa42yBDRCatNR4qENu8Qa58zKc3M3e23TEi5TVwr35aRq3d6RTBJbQdyEqcpEzxEYjYJJB1rcTy5cTn8ANiKy",
  "key3": "2KRnJYrWdyP4HyiQNWxh1GQvKwDihribv2QKBr7Vwgpu4bu6XvVRLyqtMLQFbRC5T76anwxuGEiLr6mo82rm15z3",
  "key4": "4jc4Sjv4BmAh87H9LuwrCeNkKyNtjuazXmsXHLaxwdMSN2S5sBVtxbBpYxCmvdjjNZ6P8VjB5Q3biyoTVb2qhEV2",
  "key5": "63sc7SyxXfDhJnGWn8rLod4QYdsFPxCAngxT9xGr2GkU9iRU9aCzB2s7X7zQuQ8FUU2v8hhqPXWFQdk9i7ea2hGf",
  "key6": "5zeVm3mD61obSPPokHw4yLzCrsA9U8oijXqen9TSsJZ2f4VZe2tqxznEhuzioLAijagBCKx3NiA5nxjLKaMX4Qor",
  "key7": "5m5rVqFtNabsZmHXtaDU1LuBqPgD6t6HXYG4yUYkjiuUVZPvqCevXLbTMuuuqHcJgFrvCjD3PgBCEkn8QaPPL8VN",
  "key8": "3XfHyJqR7hqP5cQzfwr9JyK5um4nasNhjzXCSAmYhYBRCUvJyWUnoKw1VuLRetxHRmm47FAjFUs8AcBKRqjUjwC4",
  "key9": "4HiK6pVW3qmuGjmLsxTFSX6D4XN6fcyrwQJKyCYW69o3E1UCmeYTgDDgDZbV7Pew3BvYY6jbvU8RpXo87VRD8rxh",
  "key10": "MHRFSRzbr86uK3cNCPG3DRoGcsssSnKB8eKdAX2Vxde8EHmSV437EdzL9BWd1uuffvmGvi9Q3mhyiXHAqHWcVQ6",
  "key11": "5ZiR1doq7Q7LKLorudKGxUe4YT3QXroLCBUgXGA8dS2Wmg2z9Eg6zcvVR2pPzmBmypx1fBCXiGpE6k4w2P3r2g9t",
  "key12": "3JVohDc9B17Zv3xdhryozocvYMjUcjqX5ZS3m5kadAEGFciKvewt1B5HQqXNfRHPruTrRxoP66Ro8doXuz2C2saT",
  "key13": "4jzrUpmocarNanmahpxSGwB5W1f6wukVv3VJr4Gfc8648sj4WSuLCrsFKmHM75DdeQiDXY83RXdWGks9BKT2w7BH",
  "key14": "5UUFHx2T45yrav4skWPCkUpraNgXB7C2KPKtLte9B7UpLR7jECgejFxUS4TcC513C66MdTaiHzrQT1dmZKGEf8jh",
  "key15": "5gYbkD7JzqTdVtLHTbaSV9RZaNTShUNEvMSRraQPXEjaYd3PaybC2uq4LzpCK9WNgWpsSuCJ8CicrpGzpk2HmL64",
  "key16": "WwrMkkgMDpADnJnxdEvARzcKWSVKA95BqXeqRCo2zKXfBzgUFLXXyZGwVDdRaAtsa1kePFRLAeRZjpuH7a1L6bd",
  "key17": "4fETDhW8qkobzY64YSJAGSAzczGRHcc5optQAmziw2QFkDkTWvs1QnmVUiR54iZMgutV25B5frBsdMketxRfLGeL",
  "key18": "Pvmoqt3qeWzPKefbeVFbG6s1jfcDDPWBcaLZGUAjwbYCa4bsTeXDgRFCWmN48XrfNVBujxqYWCZCuoP4ALC7YhZ",
  "key19": "3o7GR7WBTyYByN6CLSU8oWRztQ5FYzD92s7dgLaCVJKZWTLfxL8M9BgVhjgHWw2umFP2MKqphm2w7KMvaWYST67p",
  "key20": "523W5ZECRfMUQgyVBm6iqL4r16SW84ZGR5t1VHzzPi4Beo26Ems71Xknfe4nQsqUPgo7tg3k369YNURGcr3zPAgz",
  "key21": "aeSoiWHdaPCePMntMzfq3Qvg7ob3pdFsYs21zg5V7GxDBGcyGyML149tXp5ww5rFtVEj5NhHgesy3Vj1hubn4xZ",
  "key22": "34fyqwXdA8VBaTbUnr5amsWjonrj5MXxCVjq25YJDhXcbre5yPHTCSDUiQ89MmBrvseQ4xBa3YGJc2rohbTTsGzK",
  "key23": "3dasLm4rNpZGhUhdmdPHB2GcCC3qhGvwT8fDBREu1iYJitRRmR4DMGwc3t7pXNFsm3Cmk2qR6mkYV8AkBiRqwfe",
  "key24": "4hcEgZdXNkhfFUTTHRhTg9KyBDbsr46eCnpYuwSXZGwDTRxcjymivgFVY4KZW8izvGFL1gHquPVjyVw4vYb2Goyj",
  "key25": "4LQSCcFt6o71CNUMEhktFbdPZd8V2X2Ba7sW1kxPjxpniqEDVaPdmxEJjZXBD4jFMpYpbtRK48cpQAGXV6RraFVY",
  "key26": "5SwkWsmh3EEsT4dw7Bh63HNdr515kGVaSbWDGFSGMFCYbE6JUEsVWGDdiPGc7wybYMfoJJ9PQ1ozjcYSd5hR72Ey",
  "key27": "3MK7T5QtKYeFKBnsvobU7DiHEwZKHAdqHEtSmrXpijPX3EpDQbnkA3NZq39fNyju3uJGD9rAfW2q59TcKpYZaQXH",
  "key28": "26k6fVXfyWdSHvbKnT5zZF48Z1bdD3Pv5Ka5tydFRid3TzoUxTjLy6jRWBuF5jNud2DuRJpqKTt4arYipw8wcFqe",
  "key29": "2hJY7bU7hkmZPJChJadAsiyjPqo9RK6Geon94y7KNpdsXW79pe2NUjJ9PE6mMCcp37iJxfm1zQkrNfpgAzSmasrm",
  "key30": "2wqaSrXSKKSuK9UKcjsQcsAE8CoytpjrToRNavHQDAQGQiEVSVc4tcnTKazrFn6j1c7dcgewAUMPTUgQaCBD6dcc",
  "key31": "4gc2nXShP4vcZ7HwLCySv64JxFiVYP5FYF2UxdTuX4SqPMJNdaxb5s8qRuVBB3panFxPitxNcSjXFKRt1xvSz4wn",
  "key32": "2ypwP3BuHp9oJ3z2uvHigbHmoxG4v2CdE4exZKqamNLkFARH4uHV88tnrr3iZR4FPcsCAP5dVnKfum6LsWijiPeo",
  "key33": "EGb8ofZzrDx3QkxusVfjCh9iS1rFbRjiSCkES7z8kcmim7h9V8ud1DC9DTLyLZoYLkNPTLc8ujRuZY77sPDgY6T",
  "key34": "3D8p3bKzCMuNJyQmyByLzCGVLwfEUiZ9VP6jyG9yc1ysYKsNPH1pEWYsbDMwZx6s8o172rR17iaJdKakvoetBiuW",
  "key35": "2dFmFtvHAtxYn9P2K9XTbW5frEee3psqX21swBocoSZ38v3L3hUJNAJ3LDtm239HdzbNEBnbWUSV5Lyry1bZqGV1",
  "key36": "3KNDGQL2jNBSVVC15fqQynFpHrwDqhWrYU4kMWwEsvUp8doCtQxaQAsmGiCdVAgk3Zwj7yYfGD7oimXtCWxe7Juj",
  "key37": "5Ncdbdzxj21aETCRjjBp9s8uBwzJA2UKzfgttyxQqaA1UXA7EEkRynfjR1W6rQ2mqRah8wB7w61P48wFEyroibkH",
  "key38": "5ohFkiMd2AGdG2zHGchccZCd9ep9bWW6e93uvM4UMzYRDCEUzyzbmxwRNNFCVA5b8J1rNSZUZ1gkMKVcrJpdqGHw",
  "key39": "3GsVb5RA5quoFPpufZDZCPuohemTMXSPw9rMvzvGixKC5BQoqrfLjou2Ci1FzN8wiLiCgrQbQEbMtSofQskgr4Uh",
  "key40": "ovVzc2GSrnmhHr5bgcejL6VEssBzA28k67ru56zkoJT6kAsPmF2PGsPzG1KPxvdoURfL4LEwRHMak2CqtbJDf9Z",
  "key41": "4icfjTcgu9n4wXFH4v5LBmQmrustMZqzwZm3PZeZpwQhmYYw7GEjEqBAg67cQAGGo1wYzJt7x5p6MdZ6mKnwViv3",
  "key42": "3PVNYqT3BFcRASxy1SUNJ1ctVbSteqN7LfJ3xo6XTKFn5Z4SwNhRGiP76uu1vYVw6etsNNg38MPkCE8HgmA18csg",
  "key43": "234UZJ6BukbhVdQzbVHqVRzqePofuT2fAbfgTq7VkB5MGMEPh1YJTudFMCmdVEwNrB2Uat548VMbHXSHyCHbwFYT",
  "key44": "3e4VdsYzwMZnM1JY4ZpcbqjWvuh6xGpDye3K7hEdw1HC2j81RP6tW4WrNmT1EKiW1A1Yp9fyQdPqPU5w9WfZJrVu",
  "key45": "3Hx5YTkxTw9UQQ5gnz7gDc4qjBJASgxaB7sUic1uAWpAVwtrK7zDS1od2HaV5SGJMB2vzjA3uLd5SkzdAGejSAS4",
  "key46": "ntm8eAL2dP2TQSyHua2Yd3QbQooP8RrSN1dhB4Kb5ksvJTM81d3EemzEM2zqpYNnJNxjWLW2zv31zTKToUqNbL8",
  "key47": "2K2PYCqv97xHs7WUEjpuVNj7TNwARtsJJTN5Ka6ty7jUKfgGBePJRA7vjRAZiqf7PCokBDSrNwTDFM4Xzy712vmH"
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
