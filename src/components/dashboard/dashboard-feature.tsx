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
    "35zBpv2rGr9RgGMPDDWFjToNMejx9u5dmQQnY71RijsMz6gW3j9ZbnUhZchFoV5EA4WmCYo8zq2qmpKt2brrXQdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r44w73LLZJLh8ZJBreHxLQ4uq7P9P4kTsRrqiNCKAA9ZRAWqPmCUqJoULz8uqK4NPwpHMu2YNiFZbrsMiG5x2xn",
  "key1": "45XMe7ppZYcGtHV9bDRKCvzrmXxfZ5A9ZoLtfhcGkZ1UE1wLXnU7CA6PENJYG86B32yEVDi6H34Mey8eQgEzbuWt",
  "key2": "5Yd6SdUyuZjoccybXJr9dNH9b5Q1RBqZZGFvjsANfuapmpLNkCTMprc7rFqvR7p7d7z5eWm52YSbtLurisju3Jka",
  "key3": "66LkMXoWUg7t2yzqjzZUiaFzjoHKGCNgnYL5zRqR2P2GZ8an2hJxffUnUxFCJstem4mJ1nzaZLt6oqHDMfspf761",
  "key4": "3hu7m5QCBSR7wULC7nqmsGhPQpmGftoJAzAcXZYN56fuR5beS26USkem7FVZAvVGmYPhw5sh9uECWsfMRb8cubc7",
  "key5": "53rKotxV7y9aQ2QnjKikyAp2mpKuMdjCnuTWBVBydPHbjEXcxMbHbVuQhWKeaxvxEKWgoF6kvc2385netL5MUocF",
  "key6": "4W6qV9UPacuyMwx3fww4jvWVu8Vjv6aa4nD5s2H2s2dSJXEvZLsAFjQMHcCZMMWYfPGwXnwQi1y7iVJ1tXZSMm4u",
  "key7": "4tgeNJRrSddum6M6H9SBCtyPy5YGxAMjeYnqnCnAHt3dxRtEFGMTL1KoVpmAdLVL4hFFKUojxdqt98RvSBfhtscK",
  "key8": "4KRAxWBBtSVy4mG1UaCuv84xQzjDmcZMDY6nbVs2AWUVPKkU6zeVedygkjLgejhDNDgAncXbjnakdwENERajMqPy",
  "key9": "4p4FaPN5MzQZWu1muFcPuyp3iRw8ANiHHh6Ktq5Up6zpCCVM767VfHY81fdC58EssH6gCuy7LcPHB4nbEr7neVWr",
  "key10": "5yV71aGWvrUGuWAwJtK6494d5mQkNZXhXzF1VV1Wfkw4p3zfv9KYdEAKf4pdxtH68xiZYMNbspsgXPyRDD4kiebZ",
  "key11": "4mgimFtTJ2WA4jRA986JATCXgoAEj685nyuWpJZmgr89dZ31hCDdA9hD8daME5rY7qBnPXEG3khr7L3HQ1zYCMSM",
  "key12": "4xybRUFfbLyvaVCdcx2e3DXc2LNq6y1ebtGPmbZ3eWKxegy7noHRaLL9jJSPvx4Q6GxxHCnsxqeUr7xuoyuQNMbK",
  "key13": "3DUToi9KHgrPDznMVa8UCy6aE74r8Jrkuor4xRHzFKhRzH4mQoT9LYde1s5mQro6Ku7qzb3NYQmo3ThgzgFf2ii7",
  "key14": "4p1RnjJkNhJqoy8sHWkg97W2ZbkvkRUYgWobo6EuF9JdsqR5QHhuQ7FxCmHL96PivwAXbsgRPKit2h1hedhfuQWz",
  "key15": "5g6mHbnD32bYQ1uCVR2rZFDJjdKQ77jfR53bRP2uCFpjpkFbfMvhi8fA9kG4Qpswz1P82uP4Dyfa77dXJaNUhup1",
  "key16": "4dM2gTJVtzNw4j46HWEd5KNDvMFKHk1eTb5KELWJzuSRbES1msPWn77MBFuWvyxL7DCD3pNUxsp3T44pULUM84nE",
  "key17": "4iv1SJQwZk8tGsHXjEqqwtCUQDEetQZPXVWn1sVdAWw3BXSek1GbhH7UBpu8xk8rcBA65BPB6GuFfQhKanvXmkut",
  "key18": "47qnrD6sTGMryy3Mmq5J2XP7zMTarMRicU3SZPgtdzPesPxp3jjpgS4uZBM4WoeS32pBVEQgpVBAQAvPsdZEREzC",
  "key19": "vywkLKuWKQmti9YVdTNt5FAs3Q7KEvhufRsbh4ncAWYJrSADAWJMmyNPs5UXE5XmKBFgMbXPLbYkDugVZpReeiR",
  "key20": "5qCqFyjrvmh268ABGjuWoAqShBspMcYuLskzGrXFAiYa2cMUDH938yCWoarZmHqm4AdeMWYsgwwJmB75JqLJyFW2",
  "key21": "4jCfav3z1sqwBPkeUsPMjDUBStAXbUcCPd7moqhXNxLmLr9w7TYLpYiKAr2HRLv3xmSaywLZdVMAuEbBKJpeuP2v",
  "key22": "2Wf2R2vSKWYr3tVvgMjKSj9jvWjWXcaP8vYcuAm3bvHbNhUobazmtjAuB579AiXXkncc5PBkNNHAoz3rmZUfH5bp",
  "key23": "4euhxYsd8nshAAdTZUEfm9MVRH674s9BqtoagFmSMVbswGfAn8bmDqBJJisEbiYWs4oqPYLsizd5wXQWHwCmzbxd",
  "key24": "57ufrV9YWdKFAEsX48A1UdJD4y6XjmVFDeW3KWrY58GHXjfyXtBU1dsf2HxBsQzSmkNi6kZdqnPrx15yfh4v3FFR",
  "key25": "3F86FajuqoSbZtffC7YURwisyBAH5fkmFSdtoDhkTrS4dL5cMxmsLgkHMGMHmzhVsFpBoFKyJr656nd64XqYqYF",
  "key26": "5g35t428xF2qcmPP8Aqhtn5TZyQ6siXGmBXfVRqT9UgRGKrJQLWQWrSkhZF7PRFqkZdmGxyPuVNgc5YSXAQkwFEF",
  "key27": "5GR6JsPDyjhhXwg8rV4vpeK3BeEJaGpgBdR1ivdDgMDEZZ2GecPPm9CKsvVDPb1pyd82jRCsCgemD73HMD3EUmxf",
  "key28": "2857eJx1JTDNqY1fmwd6QAeiBmEqUWEieyPAVqPtenJcGtW2pR9g62JjxUfGjq6YNQ1mNv92YAi5uBtPie8UMPQy",
  "key29": "4zjjejmAr8VrgXTpzxdG4sGqmCjHviC5MTDADGTNo4Hz6zDPFUir6ga1ZsYxPvdd2p7TCq7EdjSsMoYYaw8eFCwT",
  "key30": "3WjWCB8bAkVA7xtpebQuHvsh6BQUASiNQd8ZYmLGLgbrZSSq42juLNTTQw8mk3apKirz2mTHj9CjqcPt2rEC4hXu",
  "key31": "4FvPY8zUTvpPHEm4SELEqNVAEzh2pYDNcaFuv6mcGKcxG4L23CXjhFFX77Bx3AyxJpMgqofPXQ1JTZPwYp9gjh1S",
  "key32": "3hBvS9xfEfVxDn9Mhpj456AUQcakJJMDcXCCgb1PkByh6LpJ1rGTZEzC7K9EKN6tjw4FzrSqQF45Fs8PJwNZznc3",
  "key33": "24oozWzzHzxT3Q6CcY6RS9FpyV77RHwrp6xSVmMNnWUrzuz4DvCo9AHPVaJud5DPtjK8eFjZazk511PLwjLpdgrB",
  "key34": "5ruz1KSAVAfbvcssWp4csh3vpfgpVkDG7BF83F6iqG2U9M36gSQEz1ocbYGNK7d6fSM2wCqQP9cgb64TZxyBkVTU",
  "key35": "4BbVEcQmhdwgVDBRBouhFXVkgSpu8Lzp45ECaXa3mCfs6aAAq729sr4DM2UJbRRK8hLvGjGuRPzqJY9PwEUSd6kP",
  "key36": "3MRGQMuQSbtRL3tZCDywjrGYkovGZHXe1Yzcti5AoqNfNEizNwN4YWvxTiJdV7qgePXpJZ8nT5ywecmQ2VXrVjub",
  "key37": "4xGtM73R2eXRPxc4txBU5EcWTAa5YBQKXY8J21YyGcG7bTi74WygbceoLMMcC6381nG32HVTs9PdeoC1LWCJ3MJa",
  "key38": "51mKGSCYHrt14VWVxSNedDS9ytwWJxxrf4swp85KmMbVe7y9t3cPEsR3hoLsh4ber5uh6W1i3LyytVdJTSjCugjv"
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
