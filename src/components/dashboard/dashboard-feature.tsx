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
    "5Gq5QQDW9rrDeMdR9AiwiVnpE2vmLibF9Uv4Lo99TpFhQkXPygbg7vgPGUJL6mPfVqVcCHSSJJwY9TeiFNNCc57F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "572kxVGkyqQ2F8M5CwLsieDrqxujeua2C72RyYz94oGR1juuJKnWqvc7X8X1gHPxb3K4rvJpbBbJqffGMGA8ZS7q",
  "key1": "3PEo2ekcLZciK8U3Zha2UdZbUoXAywH9B5d4JN25rLxPiqJBhAhYsCP5gxM7RnMcDi3a2wzcjfKJMQ7k7RHDCaDT",
  "key2": "LwDtvcQtpu3h7L8886S246CZ3Pgsox7qVaDjBfVtf4oQmGZjWePyuXzp5H6S4nhTbbNPWr36bvWLrXtoeuM6oyq",
  "key3": "35jecKPTBpbg9HbnXYsGpB9DbPiALMXDRZ7hSqTq73BjzEeFJLZknBCazQJnQ7Myvdnazh6ECEfHGnb98jxA9QGQ",
  "key4": "5vo2dTYw9kXaa6383JUy5Urf7ypuv77zTJ3tExdxr9NZPeKhXAqoSn244sibJLxhKv2ckj8ATN1BeHhGFY2Tk3DL",
  "key5": "2QDVgG81wScwwgdT1SF5iHFTSTgsFQbXg4kHWpWfgGDrRcjd1qViXuPzv4jZRFcmCR4dEAEZGtr62A166bHLjPDN",
  "key6": "3LhPJrEdQY9iQHgZJwAPqrueM2q8pYs1JiXndhgvDahc8jXyjuZMPiafsT8jrUdRbjiTzj7apUeDi3cw9su7TDrg",
  "key7": "3uYFwc4HoL9WkZaUkUDjwLAWnj83hGwRZHPY8pgB2nDKwdmHS27Ae9o7eUnCCFpQrthHqA5tfgzcV9fic4v1Axdg",
  "key8": "FJz2n4ux8s5FRQpuC8pGBp3Zmgooi5WmxJpAj58q53rm3z1NqMJ4aHszMpvpMx3SJbjrYiVPrS3LNQJwvr4MCVn",
  "key9": "26gBmgXBPWQw7yy8qy3VaZUubiBgXHNjX7WqfKAQbcW8f65VAmTbhZmSKTaccT1URVTMmRZPMJAc7Gr2Ybszisdk",
  "key10": "3An9vT3gz2H8GZQsioY9UcaJ5yMmXy4XGoqMegJCS23kGHTah5vnGjcXjhUeAT9eE1TQuxEh2RNEFA6DCqWyjazY",
  "key11": "2QyjdcVRKWYZ6R1FHLDpjweNEars8wjAMEZJFJQMKCuer87qeKuhzeLSimci8WMJtvnGvcecGuRMU2tcturmr44B",
  "key12": "oiKuXRngVgM2CyN4NPh3wVCisqzCGcEufiBJZcVX7EsNijJpamCJnrd2acFnCbVdZehgFmbX4wovdiLPaQXyXuQ",
  "key13": "2p8geRanneE3c9KrqXDjqc6whLZcyQN3m9mFKcJ8HhzZszvsWHQ7pFnrmTbAkHru86kqtUdnNPadmqgeH3vtHoW2",
  "key14": "4unaJPXng8BW94hJDt94RgPMYKXHab5vnCYLBTeLBfGuamDXhkuFRzkxzMR3xXMcG7N21t495t8GqU7Lo2k3zze5",
  "key15": "88bquDq4bdPZmR6u335hKbPvtCsp17BhzgXTfMQiivt2oZ7bs32Prc7heAU3FKWktXtPTEhiMLkcBoShZ27ikWD",
  "key16": "ZDkkEn64a1iYJL5obZB2xeTLbj7RH7CoBTsQGBtiiL6RdKxoyZPSAQ7ATt4TyHbemmoTWuVcNZufXBr2akHZd3z",
  "key17": "5Y74MjFYFtaapBHDLpkLYvyvBSRVejnYDgNsVSRFWkXATdCbjchrq4sTrmzUVQzCo687C4KiQenFniv1z1DCxX9d",
  "key18": "2t8Gb32Vw2RdrDR54BuyGAA3SM5xunoj6WaJQvmp25EzEUw12e1smuWjPzA7XW5eKMFL1tpgqSktKxiDfGcHg7BW",
  "key19": "5pxZdagK7RDJ529xJ3TK4dvSLJXaxPjtEzCCCWy2Em74HzpoSLBm2qY6YBpzqiVYcrTYwERpYH3A1uHUggU67hMS",
  "key20": "2Y1xhD3b6eZHPUmz9n8PojzgMErRC6XuXqcANNfHnW6XNpSDuWw2kTfmvvWrB3FwuD7cbMyW699CAH9umozpAAbB",
  "key21": "3khYFpkb8yMwnN9LAbKBMg8SVnPuRCsS7CpiaqMWA3uZU8JdpnJdnxgv6V5La1dCazj7XPzZcvDEXc5EqFHC9MmZ",
  "key22": "2HhwKcb3hDc33hdJBB1Dczx3b7LyWdejE1wFeDbbT2EzCa5U4P6wYSVsiPTyKNdShSronxG3fvevmEjEtywc2uiF",
  "key23": "495GeV3qwzoNYy9K1Atbj322B38HHRuaMq3svYsH8nNmNx3HBrxkH5KDrrWmDKVP432FwKB24iQQxT2mwrkAArTX",
  "key24": "4UgboRTPkdZyFYqXkdGRgs7hSHcxanDs9xobiXsbSUzQ5HU8HfF5Zu4A8TcZW91QCzWDoVHcAVWMcMdbxtBD5tUL",
  "key25": "3EE8yXGrySEc2oqMrP3PVqzskz9paqwS4h553u8kkTmPZ3Ca79qR83qFrnag7iNsDMTQaAFzmP2roacXmRfB1RSz",
  "key26": "4otg5rjzpWzZR2hoEyqJZhojxnw5KEjj9oVm5XxH56df3QgjWtLQscPc1RSVn8BZ7ZW2kkGm1mP6zyxzbvKAhkkc",
  "key27": "TFysvciMEWKDmxBkc4soEBHt2RvupVncBLnPArPPVgEqV8Tm4PhNecfh1e9ZiapfaWhDJg7kXBprhhhwoHmXPLA",
  "key28": "4PzB9UGhLJEzwWaH93gCKrVw3ECbExVHrqcqtz3qbugQw1aWsV81XxDf41t7Dhni2fvk8uMy6Lyvq2Ck348wAULp",
  "key29": "4QoPYToTNW8eb5st43S496GSFWFZnEqAe9BuhBvU25zvTmx6q6bSN6rgYUgPgGzCMeYbwHWy3UQu8m3MKKEqWcDF",
  "key30": "2DgKtDNFReS3mArna915UUi49ck3kDiEvpeDbPE8NMVgZwYnN5N18q6cPhZW36emu5pSctoAr5coKMQjxftYuosq",
  "key31": "BPS2SCkmChPVqxmEujGce8L68h5ts5tJ984Pn81J9t1tQa5xSP3WdKi38wqoq6EmS8fccH6LpudEH6aULkxGeuE",
  "key32": "62At5voHAsY52nGoeaCtY1w8QGsoPeNLrxUi5YbrmHqddckhRcqFk4ztHDXz2aa4N5mjVZJfrWGN6FpW51x9ECGR",
  "key33": "43hGmcMTiQPeZskDH8u2rHLMzy4hRHcW8tgz6dguXGCaZHC2SRU6ag9xy5CRiQ1A5PqKX5bDrX8WcVXJ1DPTFSL6",
  "key34": "5FuYt4FjK7n86Ze3y58P4ehkmQDEp7pefJ66ZwLeLTtyvR1xbNRnhpv3xwXmWjoFXBMihrMxcogZmoHYXWRZpEQ7",
  "key35": "28WYQn9vqeeRGVSbVAXkWKM4nvHhVP7zUgWPYkEgLzZZR2ByjeYnuAXzra6a4ninEUvF6Bdvc8gZ1KouBq7uU73a",
  "key36": "2heCTssDCeUFCQK4mRCgo1vaDGUK35HUgAETP9U2aBpcWXuosuzFWACSSd7x8bvActJxXP3rHtsyXaQ8k7QAw1UJ"
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
