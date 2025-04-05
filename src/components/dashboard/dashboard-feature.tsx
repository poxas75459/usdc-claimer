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
    "2KdkDjw4jtxMc9a6r3N9NG1JEUvZNJSiqDSpEuyQXr9DS1TLb9FUvgBvMWXzhK5rZVE5tG4LYjTmGmLJSWPwdT8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pi51QA3V4aCTcxBj5wp2h6ZtWPzQF7jH7vMfd6hULB7oFNCqhpfVFNbSxgp7S4A4raNwYicCWPSGximPQZg6s16",
  "key1": "4n8awHPX6saq1jXo9xvpnpKGok3UQQozQfCknpGcYxK4zpZujKGZ6ypRFvCJKhiBvHkwF4amdSCLBXPaGZuMJWiv",
  "key2": "4ign76Fwj9V4pNcmNcPZh97MKAqPBgYA6NG9piinocftUuQGcbT3bDppihDzMXZamNaT7XVLF2Dt1xDDKv9HvUU5",
  "key3": "64vuiCjn8xhfcrHKKtLBqJsXTNELMQrD6vyfNfAXHKDaP7USEYdm2WeibT9SKB7cFKNzgH3soiW7xg4Amce259KB",
  "key4": "wCoFp9MG8AtoYJ8esMzZMCmXDg6XhjQwcRegSxdiQwxWb7Z8tpwgdUQnnNra6bMrDJvFeJJ6Ww7Jwirb4EyrRQp",
  "key5": "4kDFCmfhiV3HR1yvzdf22pGUmKmfPAY5Zji9SuqQt3ThGcFZrz5G8x6eNecaRvjYwqzrigTmvHT4FrAqrFECCqvM",
  "key6": "56Q9tkZT5cVAjX3aBWXN5BDfx3GnAV9igUXUofZ1k6rDHZQMJSi9NVZzM4Ft6Hg9zUYpmsLt1LXG8FgDJV8HpmH5",
  "key7": "3K2VJLEWN3Wm8aDa8m7RYEVLrqFcBGui3chh2r4FTMm96xUf6B59Uyd5BFiyTaUQ39aVHNh4WtNePyEJs8oniMCa",
  "key8": "6cmGuRu6KDAT4sWoQb9uQt24Jo4Sn9Cu3M8rKpvvTo6S8n84dVLypn2C543GdLopyb2RyDeKwu6McPnxAuS6bf3",
  "key9": "3XErCacse1QYCg5yKfnx1g5M5TnwQETA3NXD4FbSuuF9E1rNjjTGnEppgEjVqT9xCQZL64e6RiXDGLkHgaPyaAgR",
  "key10": "23a1vFq7k5DgijXieNhsMdvfXJVYqKNCE8ReHBd1Yj1j1S28UetnzwCbF3mH2UJxy5vwadMxih9chfheqXjPKUmm",
  "key11": "23XmvvEnK7tKHWkYr1o18w7xvE1FcqhM52qokqTsmyVkt937TtnATWYEvzNS8jTCqVMihvNABej6h4GuLwqbS6Ug",
  "key12": "2R18QP8PX4eMMtZDJ945FeNwTNgTkx2DYvfjYMTgDiafUeKHJoenvvCzdUPBjZKcV9JQdTALWWwyj9HNm9iHRWms",
  "key13": "385sgBMPdKEzdd8NpCqcXcGrGtFkgGPcdzb3DkHRjZu5DGK5khuTAQQ8NEZkZa77phfb5utfC39habfg16xwhBMw",
  "key14": "3Auj9GfCAfpL5njCfUwJjqpAhnKMDtGdtvpJkX3NTP64f2Zog92J1BGpxLD9KWxazwXwjCTKK8crnoXTL7yz1ypX",
  "key15": "3CyB1GWFcQqmd1Zjjca7UtqXUWkaGkgyXzSmAHKnRaHHjZFsR15m4uq8ZHUkXPLCF2BvEGLsz544v2DDYvWF22nc",
  "key16": "WDGHTiGVJAj8swrC34ykqpvspj6jemSwFrpwiD9idbtkPFQcBoAuN53EgHLDQBFTjcnukmnW3hnC2NYaRPddVdT",
  "key17": "2gR6KixasxTjeamuTGHzGUdyFDPAma2VNbpQnyduQSMQ1K6eZrkZh9hzVhhKUksc8FrSiXuabGTMbTG4z7WBvbxE",
  "key18": "AnP9YYhdEF8q9Nsm35ShwqEoj77UoikvcaUuvjDaZhQeXjbhzAGzQehFe88Fwkaup5XEAoM9sjBS7JX2dZVau9q",
  "key19": "3vfnWGSB1g8Hb7eZT9xGRKJMZUosoAMChVeDpKWrj2bikEVS2jCSp2oFDDxAyHsAzpXhvvMa2mdsKEQvXKWvzz3d",
  "key20": "4vRVrmHSTuyhU3ZuVq2jXHxH5Nz9a8LzZ51VM4qKraRdXtBYZ31TwTWRxB3ndNMXTWDD7wmhHWwkydeXUQqDYryz",
  "key21": "3wrDaf1SNZxb9YKT5gR7LKV2xqDhr6JRuXS92FwQArfE2dtbn7YgUXrhkriYERAnqCjwMzyJbHGWKnSyVufQ5Bdg",
  "key22": "3cS7Y8R6yTgvvEfwP42zVXpUA3GtMPnssmKZH4wcXm5WXc3RrH9TGJh6xjhb2wAPvtifhUntLvym5tbMdDyTD3Wm",
  "key23": "553avcGJ3ZXpsTgCQEzwd1gCScLEso28AA9Xu29eX9yi631aq2dyzcnqxyzjy9xk4m43PN3phKDE9GFK3AM6RLmP",
  "key24": "Wwcbgdym4ieRqdTHZSsW3aBDhTLaEUyWEn7pqHwFfdfHLZF8yKyPAxjKDSDtT6T5jHaDSYLop2Y8aKCqtuhkgx4",
  "key25": "3exbPNzqTg6XM92E6MvGCSKUc245YPa4EJ99EJEejVQ6ezAVnrDJKGdE7yoA51oZTuVLuzxbLiLrsmZvCfoBB8Wo",
  "key26": "5ToZqNAErMQTeUsx6VWidYjCRFedPhZFgZJCbUGGm8rkJZmuLj3WcvJjpF1f3PzDGJzECLwRn9NqQjceZr8poFTj"
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
