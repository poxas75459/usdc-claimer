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
    "3krXbsukX8RV7MjVAL9gxeeKCmRj77XxsWuYJy1jLdR66uHfR7y12DKD7GEBhnqhsnmvG8T2eNAh3fhm4tHTQRZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kgEp2ermvpT2KUxHBNWQeytMAkNhsvEq6JRnRw1pY6NaG7PRiW1XnS9bHtZGA1rBCNZsJFVqFgoytZbmPLvkbe4",
  "key1": "2fi1u4KmCaUYaJBBxHTFZbZ6XxnJxZetq5poZNVFL6p5hoF2RB4sar7CnXNFJSmgf1vxQzEtVq8cuYco6dS23Agh",
  "key2": "35WPfUZDTvKmSJF6ckAqdTzwWxBa8W6z5dz7G7sx7kkny7FQPi5AczDZtjdWE1ttjAWDWb7AsPUB8zmh9XFCSE9T",
  "key3": "3WkTKkGLacvkhgw52d7Z6WL3VPbhc9dkX5xzJ2PQEoRL2kqChnxQ34PDPhDQgFG7CbUfPbkQpgv5ww3g5ntRTfXt",
  "key4": "4frirzcWsZZwaojPEkA5FiQzTF2NdKCehHP1qYv8URbfxEkpn8p2ZSkmXkoqHQMT9UHyWavx6Z7VBQRxQXPKfFRX",
  "key5": "39sJtXuxtqK4SE2RJKaRgKVb5j8oYtttKkNyfJZRzDiTzh492tYjkATqS9E9B4omApkQZJLxR6hryHCo5qxX6RCU",
  "key6": "4FjGBNCLpAYtvR4jfeMkoPhj2QEHkUBBC2GL755Den9AQhpXz59JsLZMGNGkZoNyVzybxD7Zq6uh5KGcKsmtU8H1",
  "key7": "4Qu9CGeQ619Dqbgs8tnP8UQefovCEDWW3i9hRq5zogFvwJuNkYrzhC3dwjFa6EmDNZCazKobxatqogBjLmC71tSD",
  "key8": "zRKpfSAxfPor2PsLjmb4KDuFTmJNt4Si1hqw6yvXey8Lw4kZyUm3gSqVJLSsncBWoiC6kfxJD7f5DAtZArN2aYy",
  "key9": "9KDJtoFpeSnad2bAdBYi12GdqFjSYCGZuq6FpUcXTEzTNY244jEJq9jwHTmJ1886kpyscb8kwTimj4G2mf5P4C7",
  "key10": "2T5Rqb1sBBBkVD9HbR4ibk8UsW7h9dVdsZnggfBvHVcVE8AXFTP6iTw6urCB6aUq1BJEEntThsKwwP3q6oiULknM",
  "key11": "2ZERwtyF24dr7zsGgi7bmnDPb2KRwbPmjzoLu9YSnxyrwppSgLEwCKSg91WypJ65hTKQKsP1u9xyBMkQrzoH1FJk",
  "key12": "26sgaZJYtqRk1QqwfQwzw5sLamjPNGBgfpFKRQGNvSWMa3isRTvLfBRxEK4MAvXrxGksXakEAB5cp7hLfKbwG55z",
  "key13": "4fH74q7r5DDNoD6AhLTiVeYGRUwfyr7JPdE7tPdJHVqsg3JiovHbjj4jUGpyYhdHcwZkXhMUCrq4oFoot3owhNBc",
  "key14": "22289AgW8WLZGNfQttJ7eKt5Xew4hVxDsYeMaewiKLq72wpqWcsV6eNjN6rcnNpRmdDN6H8BarxJPbZ4oBFe8eko",
  "key15": "5Tjr2AnANzoMfSsqw9q12czTwQeCUHQaYGv3Be7aCigPmvFthag63N1FBYmLzCAcTELunbiJEkxZeHx5v279J7Ff",
  "key16": "3mkpTJd24VJtzJa8oJsFbDQNX1FNaWgvvEmYzhwi3w2jXK1oiD7KZUY9VbM9iV9FCudkZMvP4UkM8grpi95Ad1CC",
  "key17": "5GvyS3JQqAvzbyZrnes5oFXKmdAfDLfzkxv76PWQ5isEub6nZVvSLLohv5y1A89jMtSoqY84UTudCQSz7HbQLd5y",
  "key18": "5eFNnbCR38E4G5EKSiEvWeukXkqcK3adt9DMA5FeNFPCvJKeAMNoHcd1TCJ2K7hz6SVLkNqEsrb9BXEnU5VkDYLc",
  "key19": "4gUQSJbivypAYv2zcVEJZKXYQSivkaDucdgBANSmXHHF99Lkui2mF3bNyULEZyCyKEovZPcZ9vQC3KyuFQSfegg9",
  "key20": "5qWTJR1XSDUY2dw3TaQuUuV8zCuVtwt9QQCNdJyNPxnZJccnizpkb2budAVRWpM2UW1xfohSbeU6aVNETqR1w63b",
  "key21": "4pQJaXNSfdZdNLB9vN7yGLidmPBu8JHNfGhqMkZUPejC5Ym5svBXt3ttxGei9xfU8Sdbq2Zxex8qXrBAx5vfuCjj",
  "key22": "4qfVXfciDnU1wV6P3AKnMnsDREHFrUwFuvp4kguhaXDTKKh8jncbBzXr1Lz4xKcZh5SNnbAQRJxZ2T7csSLozwxV",
  "key23": "4d3xK6mJpDPvcaYm92zNC4oE7q7x2ygw7m9cZLGztC4wzLUYA4brK9amS9W1y3owWhqJeaFULA9v8hREGt6QRXeL",
  "key24": "UZigNit72RTDsrdSdjfFzCeAvdc7ybDNb91XvoEbEpa1Sg5QKJ5E3uhwd81dkJeKN84FSETfv7wX3uvXFf6wPAJ",
  "key25": "2N2rrtnuW53c2ve3T8TdTDS3PoPeXwp9opcE5M1ywjF6dTmLPWc88iU8TJB1E9GG2xq65eoRtUVwVAizgbZ7se98",
  "key26": "4wCvYEXNshThsLU5k5tRqvdSnS8nVBPPknsGCBExkE9YvTJqFB6ubgoxMUrq1KwtpYdWVjFiuXDPNBM5Xojn6QYL",
  "key27": "3rvQAcGEHPEwJHRRNH7bvgF12sfETjV3D5YFJCBCXSvAueJg4akThP4C9vJWXH1un4gjkiYqZJFDurWwYWi7e3hE",
  "key28": "2W66rpekb2SM1RkwWAB9WR4WF1Qi8p9crXRhXTDXNouca5i2EEm9GoFqQBs8AVnikqboiTRGMvkm88yZNtNfDwky",
  "key29": "LvX2SfaajHRaAp3JW6Br8XZceztiHQT6jg3vqxxf8iYTF6kJ4EYRdCTv7NC2jaMaGQPeCYvxofrwvwJdh9nqzQ8",
  "key30": "4MqsWQUJPuCWUj6dAWzbYXf32kocr5Bz8MqykXKqPK7FAqQzC1GcDiGuneyiv7jRjn1EvhtXvoNYqzZWhtHteFRN",
  "key31": "4QNXwtjxHK2HWXCPCLDuVmpwbkSwQK3pRpBzGwV85EEsfd5b26aSMvNCyjzBmANhAjaYW9JpWHD7dzU37FeztNn3",
  "key32": "2Wf2YZMHUz7JukC4bkcKCBew99MP7yYHJGR8ECYc2JrJHPPycaJLuK4vLXumdGr1qTwXJ6x9xnzYRWRm4N5Vxqtg",
  "key33": "2w2w9wYpYTmQX2W8JTXt99DpjWeqnWuYFKDwUhzWrPBfJwydSFyejRqyvfjpVerZC3Sv6tjBwoqgkY78szLLoTa9",
  "key34": "32QhvcBW3btvCoTiyhFAToQpKXwq2jT4ohhwfXFhpfqU7sYKzbSGtZ2AhyNtUNj5eNnX7rW3Cw1FBSNsiXxJME2U",
  "key35": "5wYxtqxt6qqU3hFAbo9moqgBccTgNZWwbzPMtePD7vwhwXTzdREwtx7BEKtiZ4h6kiqDCSXPhgGg5zhF5P7brD1D",
  "key36": "5ytEX8JDLNzMAA65897aLM43LH1BEhwxmYbYZesyuZ6SkFbaM8whFG6HgpgQvCGYdmrrdgsEsnfHtHCkVqNU6rX8"
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
