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
    "AodrUUCQfGW52z8AoscThwYf2wLHHKM7GFKGh3Xn1ZukYB2LEYBR7Btc5kWhY4TVwgaPmoKsCz9UUjk5pQkuKfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m8gjLZRx8U9J6pMA3v2McjGoPMGPTvrYnJYsPcjuW9B2njBo3pWZJZTtJBBwSSej34fmdecGj33BfiZskh8y3jT",
  "key1": "5y2aQFWXsH7saFvKPcEjZn571KREa7EGX7X5gQoFUV6dintezLEyWFj3WDT2NxCECNWzcH96THXmHbu4hRrMLwdQ",
  "key2": "4Ck1c5cHjChax4GWMapyjG98L6fgenEZQwa7u18tMXYeGen8qoqvqBsxuwjLjs7EUKn8oiRMcCYL9XY8rPnG1xQk",
  "key3": "2mySJKaFYVMMeULskkuKXEBLD5cLHT3EXU4QyALFGdtFFLoyHpnddfVJXBgD5h6j755CHrLkLCnwQCMmto7nQLm9",
  "key4": "2vunznjgFeMGbRQa6hdXzLDBc2vLo2JmpSp4K7FzGhs4xpJakegQZs6vpLP5W81eYGkpvo4HjtrGA5HgSN4Hmcjg",
  "key5": "5DPc3Q8hcAnhE6hBjcGum4V1Bs6x81nQXPrbJfskjsYEWcZRshVnEvpWg6Ex5dm1JsVpE4WU3tYnPRRZE7qgYMRq",
  "key6": "2hNVQaitgbnc9PeLm96acsD8WgaJ1eW6D1B85k7ie9CDrayCidCaMXZpRcfBQQqtWJd5r9t2sMb7HecVEssgAsmT",
  "key7": "5A8Cms8ZE4NnW2gdZG3PKxfkyRWKwEcEi6Pj9WLPJJi5iJrBxRQr2sC3NLQh5RNNN8rnM1XCAYNpQtJdfcm1gZov",
  "key8": "4EyeJ52YSADp9rRTwXCkq6r97EZaCuvXgGN9d8HWkdgRCP8CkBtt2f5G7MV82T8dCJS1ynN2rB9U791Q6eKXxeDY",
  "key9": "9itZEwfJrP3D7GFE11FaGVeWUxXezgwjMWdXXZWUynsgGNmLuaszmYwjqVj9L7AUWTRDAMr12cqtTx8P9xtbjnn",
  "key10": "44aMwbwL2JGNfmyuFHQHZwow8ndNWhyFrKc12UtdTXyraVzxskjvj2t4HkJ73b3KmUYWbLZskEYBqRk5RYyBryPD",
  "key11": "54ZpUe5oKxXZWdz8Xu418RfTUvHVA75oF6cnZxrwgQ61xBbpg1ECHr2MCiihpRHaYEktkcmFVJkwgxX4so5NmRav",
  "key12": "nLkxwkvZqKdqMhGGafLCky1he5WpUwjUm33MM5dsiEX5nr9puGTXywPeHJ41B7rPBxjtDHgyhcZDbbrXsKEzocS",
  "key13": "5rBuTDUQJHcuSUxxg3G2P5XZChD3txULuL44nwWe7tvWdzehncMxEW1bffcJQ1D1W3HY8mbPERPtRPoYwU7MXyr",
  "key14": "4sEiDSyt3WQx7U2ZEDEoN3WdG33vkQvcZrSdyw6mHA4z7vEVJGESuPBfn8ashdZN5emUaAtaLGSoDGPpp8vwoT68",
  "key15": "4eVypTnPQGxT67tdfcULAQqo2Us4CSumCcTjmYEgwqBM9p1MKZ63FjtBtfiPxeCLsazxGb9wBeaNMz2N2JKWdqqP",
  "key16": "2FpprQcDzYFrxK1J54kZW73FQwreCnTewCo3wNFnDd8o6ANDztiCNyzTWBpEjUfhJV3N37vHuNrJojGt9ZpcsQ4Q",
  "key17": "2wzL1JRju2NiFmcKovWNkWkYEMCKe9xniiHSf8XHNvaKqTAyvb6VnVMDubPdE38kkpzfbEpydHabsfAVgxVixnEu",
  "key18": "4bzhaqcXGJMBUvd4mNHcm3ZWSBPTHM2ytVnTAh6HpqpuBqChVWfsFtwe5BDNfN27XijcWG9KQSAS5Z5NrmVnb5FE",
  "key19": "9zFmyEaZMbXSCmQv2fTB7mznfR6edN5txXbKkwn1wNq8Mq53r3D7hyt7rJ5y5oydcC7c37Nt6AXiN5SK36t7mZH",
  "key20": "63cvyUvN6dJew3hrDUHTZGziYgrapi3UAGj2tQ9m7GNdz8ToZmShRJFPoQs3GqNwi8P7WXKjjxS5jwmMrqKNwqBh",
  "key21": "4vZ2fcevEWCjjDACVvkedQ7swAXWu1s57siiioCUCuSq9tNEPnw6W17QR6yNyZJ585DDgMs3Kx7PKVdCpHDZZzjA",
  "key22": "4q8jkwwfZEME2VjHMjaZTdkDjE4Bwu2v5GLBqY3PfL2DKbFjLSzxW6WpPigvFPqGp7KJuwSQeozeZ7BHuFgfEscr",
  "key23": "3dJppQW6dRMdRk9BcKMnbks1qV7ZH7FTvhNUsPfcnhLPK9Xhq3mzPbmdmybtnEa9fzBfTSAE3ant2WDjVoekd93T",
  "key24": "beoedRBh7yZWNm5pqaM4XWJzVRicfizFGz4swERc3Jiehrb5wz4LEsK6nF5qAodUERtob4f5NGUYngCgkL9Bq9M",
  "key25": "3RahumrnCmbvyteSAm5zXPk7aLtcneVXUG4VKghxPGZNtMkwDcBraXQrig5X8WYWfc2HTuX5oxb1PMVahbxXwq3X",
  "key26": "3uUWPXB4dycTWn57FSAGbASRAJPjpPGW2ZE2aAPoVsPuWmuvJL6ZCXc7t8SJoQzgVpBLZ1qyhBSXy7PPAQ6QMZqE",
  "key27": "2zcVZN1sn5uWfmpS51nUohEho8V9GgsJtCL9FBUTuYh9HwN18Nv1ztKC25bdu7rDknQrzscdfdpi9F3SMcmC3gjo",
  "key28": "5Bs1TrJvk9Y6fVC5fDn9fGsJ9GKK9m2agcKvehEFAR9Da87k6YEWpXfaS7rd5MMjWCapZAGgG1uiojMCobKGaRbM",
  "key29": "4ZpgZF67zBQ5QEtU8wdCz17SuUa7uDQtHyHxpQ8MXZ6xVhyTNRvyjBrX2BYLSoai6jYUoKjSQQMQzTaQY6moybJ7",
  "key30": "zAQUTyvXCLzEBtoF4uEMZEjgBVgZKMGXUTy52nHPEYyePpL2tPv6odk3HwE2AjawSrApXdARnSqAK5bowhHtPqw",
  "key31": "2rwkrZ6Hn4wH7za1P4Fhi4QLW5xAHqcMwEjWN1FPZ91bM2NVnEMfs1xsAibgK8tcrhmYHVsUdMVets8zA4YwaRtQ"
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
