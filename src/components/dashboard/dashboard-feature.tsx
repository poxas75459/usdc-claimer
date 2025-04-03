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
    "5NJYCQ2mdgDfYoVic1C1x4L5VcJphAgvFEV7pp9aQXtDwN7nLSKsMmSaBgVxc4TftZ7GCac1EFBrPAuj4CTMSxPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4iN6NttwQV7iGuky9KKahDkUM9GiP3pNHWub7fT8ZkUhNHqufANopnsmXd2fLYyeuSH5dGnU6Rvip3MvT4bynE",
  "key1": "3bm6XyBaowkj8aV4j8D7pXo5UHB4ros8pavzW3jiHQqSBxMTv6tVTHcEngMANWc5YBRYfWpkmukdTrydiy1Hw687",
  "key2": "35Wz3VFDDb25wtv8raZNKkrNERy8Y6UUadfqukqLwKxooavpbbRdXoQ9gHd5nKvXuMizcanW1jPBsUGoFJyMCjjm",
  "key3": "4fAxe9EfxHfvaBHpj4fRs79DLvBL48Hm9M28uyejTPGdVZHErwt2358nuWGRdLTCJt1jNXYZ6RGAPNPPEMTS9jL7",
  "key4": "4nEqFTv5JhNigSieWQRqnTp9Eic27DfdZ2YZ8wnNREbW7x4zfzpFzAfdbMDHbcjK2Be1Y1dTiEfsfHLo7izuWTrN",
  "key5": "4drhgeZFkNToVE1vLrxK4MDuNQsQyR3fstSjhDNLLXm74NXSvkGxh1FwceA563WGxSEiJbm6JSc4vXX8P6YNKJqi",
  "key6": "5LUKNSPwgvMRM5VAoWaNYYJrNitHcKyGFwwij57ADvsXp5FiNcFtsWYzFBrxh5zSAEyfubVtZ89ciibnj3vd2K2W",
  "key7": "2QVWP1Bmg3zGJibsEaw7XHS7rrzLCySPMRxRGt5RXDg4uEx84zL6hFvf5Ms1LDKwtw1uJBWSSUS2LM33LCYYKKof",
  "key8": "5yBeaT7HEJGSqBSnmASuV3P1sGTSKmFfUkoBSVKH76xjnLyeUrrW7r78bWqfyKgZBPQCxZMJ8b4nibfP7dPre43B",
  "key9": "5VQDGpT4JRaiJrKdPqBWYHNUXXQwZGmVE1h3K3QMiMr2QRqJpoBaj9gz2bd7ehCPAtUPoBrzNTTXF4SvEqcDyUVg",
  "key10": "4cof11oXWp53m1S6czffi7AJAZdVwiNyxhL1aBPbUfTekkUdj5dm5aejdDzUgPxdMwyeq4aqDk6xZmCCyYuAgQqT",
  "key11": "2RsFcwoVhL2C46fjtsgs97E8cH95Tymx6b5JJaCPVkiu6yhpYqGh4tvn4hwKZ8Ko9Bo75koAwwzRF96x8KcAt25y",
  "key12": "5nwoJNmPJAP95FeFWLvBNeegDbhbmFUkC8PVXq4FHMXpZTb6DS8X1xhP8y254WoaHJqkDwBmsDguLer3R9KNNxNk",
  "key13": "PBcRUmLKkp9Pd7j5p1kneE49Fginmd4iwT1oQNd7Z6QF6QoCHiqfjGjD9v8yruMjKxao3Qhd3L38V3EUMKkAPFF",
  "key14": "kNWaeMAiGmyAj1K9SzK12rhPiVHYw5WMSYueCg19Xy6wxNeaHrH5jb3FWLLce4haADw6rvDehZfF9aJk1ZSVG8x",
  "key15": "2t57fXctLfmbfAsuM4wqQysikR89VYrrpwV3nrjFQYijrHvVRo5giC2U9Q6oVWft58FW4rWCfVEvVaYo1zUk7QL6",
  "key16": "52w8ivZfRLF41HgX58nFbziH1ogiE9oksFuzJntHgtSYEaqQvkAc9quEidfLVi784pGV1Xbg4re8Tq6WPcCd6wrk",
  "key17": "5zmvEkqaAjnBAdUJKtHTdgTPUdgc8RfiuRgTsJEZLK6b8WDowqsQMVWScPJPigQx1mGYnZLfXkQCaSiLjQBRxsQh",
  "key18": "3QZhCgXiSsGmhYNGvTVe12tcdwuPzh8hHTHhf8fhgo9sMUjUSr1SpncSdwSik1fVML3XgubjKNYURM49Rf2Emt6D",
  "key19": "4Sj1mcZgDGeTBH4UZqfxNR4bsnx17ANPCzkn5CRpxJGo4SRUWdiuBG7FxbHSko97v36W79iLWPdYAJLHjEGxbMjb",
  "key20": "2ChAAukVzHmrwSqTjgWSPf2N8bGgBj2uGmnagpHktocV5zFGAnM5wMfK3A5QDrs9s4HQeUaSGfW9DQZcXMnsReEV",
  "key21": "4RRJ5REdFEymMjkLJJHL9hVzJkAeBFv7GcDnANecPCCLfLdK1gUdHFBk8brNr5fXTf1cMrcbqgBhDj76Me35RTsp",
  "key22": "4wnaaMLZu6Zib4tnUHLytzuYgyTKAjieEhVMi7fTZ1NZr2BaoFbkuBkqisJVQyUBcTb2CSkLwG5RphC1h2N9f1he",
  "key23": "56oyin2ohPPcAFZvxF2CXQXtxndx9xypmqZc1p3JF3gdJgrFQMuNXykw9XMiJC5usFLpM7nHSyjdZRmhRkQq5Wpk",
  "key24": "sHXrZg8NTtMRzWFxnnAu744xJCTwoJrMjBDF7qq14KNmCGSKeRuzHZuGiYJ3ARXDHMoHLGkhr8LwzoPTGiwgK7a",
  "key25": "2kjnuGuRT95FFi1fBdtmKFozATckq2EWm3HRJwtrhdTkdxFdvHDZJTHXeREt5qPxwRcHzfycnLLkQRsFst1n5Qdn",
  "key26": "2e7cuHvBK561nDSQabMjqstUD1J9ugPZuoYhy7P3eDjQLBkPobnL6D1mGv4h4yj3W1XTorDKAViyFKTHtgRkySmt",
  "key27": "3crXCMcxS8aTJx2DQj5NcnuScoT56XZ3AMK4BtuHaK2PzarmCv6V2Sd9bKkem6XNEE8jUJRvLkqym6bSf4pEw3ug"
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
