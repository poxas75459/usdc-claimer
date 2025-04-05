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
    "5uxNJLug844VEUSBw1KpzqXYWEYxZSQHPdo7JFaqvKPF9my9c2CGKkMU6uqE1a79YNpE9ELeB3wNsxcFJq6Xzxcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHCpmNvmVEwCVqkC8aZS3DWuV4tRgCnEsMu35h1y4uCnqicWaXXK1t9sQ3QFAT6dE7T5hw58yNCDwERYfHV9wi7",
  "key1": "2muF2vDGWF127nGDkthwr1SHnTSUvBky8UCP83Ay4ZugK2NkW5ksfKX6hmmeJTM1Gqi2QvtuYYZPx8jjAyGPTUiN",
  "key2": "6xKEdnCK5ZgJGtvaCLBMp922u6Y4T4BdaWd82oMrEaNSPMZx4KVcxTRDq797pfJv2SDXZo6u62XCLhHEJpaedtg",
  "key3": "34Cms3xDYCgXnA9jeD8HKyfYcezG7vnuhG4JCMEheje93Nc7xuknFagPnkjXXEV2Kj5mPdbdkVWcGB8r4BS3fJDu",
  "key4": "3s7pYaVeouWkd9vNgufxsDoT1C8mRpkqpp3t2iTa2PqFMSuFtc9dFPjdqbGLhNvDdPYMQz5T6bprVNjDLzz6gXe5",
  "key5": "65R1SqS2aYFicbrfFHjmn6ip4byPWiRNpE6eZxi7CRzgTv13854iTG9skmoVNc8RDEcJuBif6Dky4c9WiHL18KJ4",
  "key6": "31PViSBMvNobC6hYmVDbYTSq4rgq9h3Js4Zoh4vtUgyUi5nnBGosLUSd6fHEn14qb6CQ8znoaiGXXqMpv71T3hM4",
  "key7": "4pdmDSvotipN9248Z3pUWX5QdnAQRfT3aW6rGYtNEAreJrL89BZaVXCH2iY66qU7rSs1iP6XVLAhBqhe3ZiDDhYB",
  "key8": "uJNFMukx14dCyAADK4x1JFp4G6XZ94ESBQwozvKpdHFmkA3nr9NFmmeCdRz8inKMnuqgL7gHNhUiwxgA5CRsSVo",
  "key9": "5QTKCMUga4hekzUuHhTxuMphigpicH9CwKZP6MrY52QfWMxWy9iNqy5xT7Xqtppt986TaVDyL3wXHPLzeTYJ81eN",
  "key10": "3Y7UtMWtqbpBF9qPPf8jekByLTeE3mrrB4wZ6hwfTkgDQqAhLR1HU4KWMe5MPfaaK3wVBYNTKiFsjxXT5aiGvvmw",
  "key11": "4M2Pqm9qXDzu27LnjtmJuyNiSbi77GTTYUsWPYbFeZQVyKpZH8esazTxNWoR2e7akrDawLNKGngN4mwWKyp2BLU8",
  "key12": "Sketjt9bMAdZUck9wPKVPA3LobQJ9seqJrHfkhwYiJbNUuzEzDkkrghHPCh2CQiTL4HWwc7p8xfU55o9cfvuDdG",
  "key13": "5aGS9eYUJVjkm9ZqWLxvkbWKDp1PAeSEdmXw1PbD7Ae4c6peLHtLfJfUkiHtsiQZA55AbbFjSB2JSwWnW9YGdHUF",
  "key14": "5szm6iD57fNraxEB6dhgxnHNyyb3uutFSgxtrzK9T5ewnihd4th7uP9CCdUpQYAF8ckaseonn5qnxKYMR1X4ZfTP",
  "key15": "xHQrGvrVB2wa9wQUr2wEcQq3iTSYM73ZD4X7LJGe6DeBu7NGfQTJcXjTY3faWWaeuhs3VzAByDnmmuU3f7PegZt",
  "key16": "fAfwBRfuWKttzHa8esrfywsGJUX7vTngVwMmhpnUkE59oQn4iCcr75KwkBDTia6781oPosbpweZ91RreLYceTSD",
  "key17": "37Q3Ahh1E4BkqWePBG8shiMacSVFnAVe14VbzE1VYEr5McKUXQ7BgKbqVKNsxu14wGKAqRdUnnpXYFxD9Jgq7YCp",
  "key18": "yzdFRgzkiN29NxgoDgToXNUjQZ3BVEiixT4RGm76kqEyQwUY2txjj13XEmfHWd5xxnvaEkgSPjL7rPXKxup5LW1",
  "key19": "ZyXJE6VwnkZABuofQQBB9VRXGmDMex5NdTARyQ76UuUNf8kXn54XKwczrh853TeZbnUj8wHy6YU9UwEsPG1DDAv",
  "key20": "356qwwEouMUbYSSruPm6KL5AFet8kk6t78YvjD6pm3nTiJZidQWkKBgQWwXX2qLVk6HhjJi2bwVMHLLb2qtDANFK",
  "key21": "5msPtznMSfM6cZunDWk8QVLkaZa6xNY1yij63JPnMNPwPXbwZwzEbDQFpthXM4CG6w3DXvMLEjyyvzrJSDkYyR3d",
  "key22": "5zezVjaCH45ELnE5QK2RsxmtJFYscdaQjksUEtodeFMV9EgbkFnPoxfhP8GaJWMx4ERfm8BDBUHLW2tCQi3tqUas",
  "key23": "4Xi1hCwkd3hjxEZkzJoNB1UhK3KLUGKsV4JasAvcHZT1R3rALQF55kk3XLWALCvs3TTEfCdjjvgpa9hc1tXdv4EH",
  "key24": "5R549u4LJAXiTqLVaqEyGcPvfuTaMZCWz59B7SKbcwq2xojyLZtxd4irDS6aKmp8VLaXsFYNdGmNv6HUVr4TuBcJ",
  "key25": "vNMJ1cYt59dZMWoWKfMneyaTLRkK1vKrAWnwJnnTfqx5c3pdDrKrjmZ5jvSGPpoMKgSMPyph9sLD9jg4w3gCnKF",
  "key26": "4s43ghpn35cFxjDQPYeNwCxuTyLpRNBQvsdJg24mtFNfoZ2NsDCtm6ZnGkrn79XLGPu52psDMab5WqotqTVhccVc",
  "key27": "36tAj8J8RCqaBFae5ydybeNDQKETWcpQpXwaBU7AWxReKvDRkEqsbGYm9BTMzxvSaTnBaU4hSE7NTQHoSwsgmwGi",
  "key28": "4PakBqzrtGZsFLZfq7SNavMh6dTGrKbGA9djBAyDLEg41xxbtnjCon194x9XXdttvwn9zDYwtbk42w8k9TdEZ8BP",
  "key29": "KRvMxaPmS7gAG67Bd2pSzYGNqWdSdh7BY7wK9FqLp2LTh7JPXXmWEJ6pznH1AVyp2feegVLrKebbQdDbDtqh68t",
  "key30": "VDWMQC2ZchSK2PK7g51pdDGYGF8NSwvEsLTA3WCzF3QK8wMRHcAX4EuvLkbs7jH5hPuQTbd3fQqbB1GYfB6Ub4U",
  "key31": "261qwhh8C1x9SKR8jY3aQnuBwS6qXoCpc13vBUgf7ka1zN4kn4jeVB2CUVNhgnfY5qmXpfRvSFq5F9UHtzNfjMnQ"
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
