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
    "2x24CHTgcx6EgHYsReJnAwPZYctRwNY6tRqcnhFiZzkNGatF2q7VG91sEQCDYJwkb3DsWFXrCBjDqRburVc98Q2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxmNjf5G5tk1GpLLndzwETXgAhcrLtbRDhBQMs2sF6zXJQzzRLdPnkAXtGNvdz1CdLzuyikUHdJ2ywG8REbaKG6",
  "key1": "2gtZ1EQyHKwTTXC5FLWfyoA4VG6th4CA32fQSwhKqs4r29kAUz2UVebnP2ji4dr9ZR4f1E48NonfrF4ahLHZRACD",
  "key2": "5uvt8eABqyz75EC4nC48iUqis8ZkWZ9EK6sGtZQTmswKgP1yfA2et1YopT8ieY1fH3mwK3VSyyWtHzEmb3QAW2Lf",
  "key3": "UYA6GB5uUASuaPL8f5CAZYLc3Mz2bNk52g34UbLDcU1RQmq4vCtbdqP5nqrPSGpJrnBcArVE4hqShoYpCwqq5AY",
  "key4": "AcHnXRN9MERBcqw6oDFmSXA4WyLwVxGz7rdmXzhNhugar4DCWZsqTpdu4Syzkj7qbkHLWVBkmkWtAynyJpyE9y4",
  "key5": "5SM2X1te2mGmkLL8vDk17SD8AXgohbzGDirAEiUq82sPmLavCoCdTimS7BprG9BSjdtmJLwo7CpcJXgPLKrKoD21",
  "key6": "24qoGbhXLBZ7FeRX6RL38v3erwUXSWpiepcjPBTaVy9dmoFXK3P5aS5XaqmoSNo68n7dsxb8cUoL9yeU2vkcinjW",
  "key7": "4GhFStVQvk7raGAtCRYQjVBpX6o754yTAnfTZ6S544xoqRNYDXXDiCdQtR2TnApTGYLKyqksRQjmMzCvj3oSevKV",
  "key8": "2rPN559e5uDuidYjuBm4HCnecdYaHsnKCAdPktex11WEoaZkpPiYXBH7vBv8iXhS3NBGnXgZwKwtbgLzgZxYpWs1",
  "key9": "4DeXETjZvCNsqQFJvsEERoUk27qQZ8PGhErBYnbSkU1sGVraKPSc6BMVyVLEhwe6jVYLTKFa2vbocE5dEF2nyUP5",
  "key10": "gLpAUA3tgGjg6Rr72Dawcv8ZR2c5CRDs4qq2fJW4gHUHk5Wmxfp6VQwX1h1B6oTiUTs34Q2WKYhyK28ZTe1sUQA",
  "key11": "25PjpwTxd12mkvuFGT2q97ChvowNVooVZW4zPXqacFBjVAf8HM9Y1eKAe2NSenEHnU7U1RhV2KhAmaf3uoShnN7Y",
  "key12": "2j5XkBG3GL2xXTTMVUPrV3jVQZcfNjUeW7HPLuUKgueNtpyu7Hv2iFLYn11mJzHH94cJ9aQo6eWBs49g6DwWxQAM",
  "key13": "XU5h5t5E4NwKMqnMamY54dP1QUWX8kQoUJeLfMk1wTBBEGE6ZSj3hz9pu6cnv1kEJz6oNa9WiUwVjZvzX8G8LTT",
  "key14": "UGxRGSYsB3wE9znseSL11LoK3JbnHzGipMKJKWRxVJEmAPtDQp8Kfj6TMEjR6oqfdsd5Tq9KVU9W1D4Da3zV5Hw",
  "key15": "65RrPrVjwpMVi7oKUuGo98qemvPfTbcozSHXnTyqkYKh8j8eMZvgoX9jZhefjDa9Zog91oKzKMVJJtLK662zzbEX",
  "key16": "42167HxrQVCxQJ6Q1Bx4hZQ1T3SAdZcENgCEtSzi5xzoVebKYuvHYTEas4XUqMiK3wJLaMNv5yavBpepHTuqb3qK",
  "key17": "Bd87KgJRnakZJ8x1ARRgmyg4YFAZeNLxP6R1dy6ASDUhTYSvja5id2bRaksB3jY3d1A9xgUKFp3e1epHm7qD4ex",
  "key18": "2EfZxsovJoGtG6k8dmjDEidsxbU9ex1xFkE7ZijEuUqWgj2vAV7mBQLSWYMKLLbNxkcuC4bHctNCBPyC6NAop5vm",
  "key19": "3ciUQHBCEpuRzAiRoDdSTV58srUZ8sxtzgjk1txm8oewZnKvbNSwfiH1de7JmPb2wdCjzqv49PgcEAghz8nFszS",
  "key20": "vqT8FExL9bYL8aNg94aueKzA5Ff54v88cRmr31RZvSaehMhG3aumojFSorXT3qu9G6DkNmwZAJgkR7Wd2et2zLN",
  "key21": "5ckMU2dsLt1jadJXWUN4P31XRLZsk3tQ3zsb6CbEq3aDZemoKiTzQZZvd7JVb8wWZcHhgNoxCnuPaBVMngANawYz",
  "key22": "5HRi4qCTinkEYfTyqK6TP4M7TQvjK1FZ2Kc5UPxmo7hhwP9WAzcutxAnKpTiVyPR36XadjwDEH44Pev8G9eLQ9U",
  "key23": "2q7xa1DhKpZizyZ2JATvkCpWL2DaZzpM6paH611CUxiUzS1JaXnQQqpyfE4cs4kJnek6JWyQTCw31vowk9kn8NZb",
  "key24": "ndfh6w1J6FTGjNejYpRGYXU2cAhapijtdhm9jbvFDiWvhW6NpUfuDpR9fjzVmTKUbJ67EhDRbNERPy1mrshLdF3",
  "key25": "PDLdqqaQv8pKHPUvrpSvywQWixKmKKfdYBr556aRqBJkmhmHZchXKFnEMuYDHnLKbR17ugS443K9dGa1fMgZJLa",
  "key26": "3Yd14G2BcNHiBheLzk5kaANyh7v3u4tguVGmM1oLAY7z9H1TF6WebJ2KKUfC9tFaFoRzkH1q1UmpWM1KcrcGQFSy",
  "key27": "3XfteEUqTjk1TmdMWcAbBs1Pfb2KpAoRgsf6ctATt8Lfiv2ZbVttg9SuEs7tUdBurerwfb7tfBRqx7u7iiNc5i3k",
  "key28": "4a6v437mQeKkuoEmEB4DRfk8DKKQ3Ggn6FbezZ19Cre12Ft3YNHEvdWhoifnbq9rfLW7yUWr8PpgQ5ZMCDogP4wk",
  "key29": "674vnRs5qfZJR3jGwT9vmsweg1jv6UjTPZTKMiQzZz3XPUiPwy3NszwePhjutG8N9eVxQC41Zmr59VSsp4s8Bunm",
  "key30": "2Whq2Kg8H97BWJiHC7nz64RdGPRhZnzqRdqP1YTTuiiKTCqDkwEvXqepvWctmcx8nbguS4SvbL2grs2zAZRE7FQq",
  "key31": "WsyuHyLQV158fSHFvtJUmoxhVd9f5M3TyVGKwWwHYxCrnKhDybMhquu5zgr1p1Z2vGWPbd1A3SRhexx1aVRFkER",
  "key32": "5Mh3suK1kri9zxZEVB4txt6z5DUMY2GwHpuC3uGd4KwSwiWpCbnTb5ECLY5Pky9JCb2svidFAGaMBwnr4PHYqhJo",
  "key33": "3XUbSujM1Wp9ZwAUJp5WdwKxH5HYkF1mP5ivJ7aniVPBxNiWnz7zfWQVWXPmHdTfUbDggSFFchXNnm8HQ5JhumQB",
  "key34": "5GWkTWqapm1Qrv7PwZUwrvdxnuGxaJoRWX5974yZnD1WZtG3gEpDRGdyoqjYeGf6qLL8skkKScGLCCjqHn9grnx3",
  "key35": "3uXrqdu55RGojFUgAEmg54QpBD1SEQRKECxSJZJZbeiSXi7odiwxgNtGkeBE78yNtgScp3iEVR6gVZj5CpV97ZHV",
  "key36": "44EbBisGWnH8t3Lzap3reLJmhjGFYS4mNkjk65FB7ErLmV3rPxvtChrUWujrTD7JwJffPCEdRWAEDizs72oN3g2K",
  "key37": "2askjcBBHjXGdMDHFevUtmB7hYLwzzh84C9g2RXrijAENiDCzWaecCgKmLDQHaYNRZWrVk6DiGNBABCaysfQMEmV",
  "key38": "2NAZgDbh7f2oasvEAKgZhhBcNKk77XgCBemUVPaV3dGTUXPdEpsLT7hHRGx9bEqWWgFz5FniAiQbqvg7aoQE3FTb"
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
