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
    "5Ghhp2M5yRg6WPLePEBVeNS9DWdSSR3QNJzu2s3bcfDACes7WKwqNM5ZmrZGprEbJU9FmtQnm5dvfqon6xnWUR89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ut62BvzssjBSBsuNVz1mZubUugiQRZbwEDRZPHcTKDoeTiB8hgtSbDKXiQqhmxJAtWEaC95zURfPZXyNvBEXvF",
  "key1": "3MtvXeh2xHSTnj5yWPgoLciRSQAkzhcfMi6FcUbsKZTxsgL8oEXtZLvyyuB8MzHYtyEZm3tUro3AWkuf9QaZapDB",
  "key2": "4a2btH4G2vPZbpLBkzZkV238zhtVqQ9DG5h7Y8d4zCRNyWnFVuSwP8Dg3AvyWzy2rZMuBNhPu31HS4NQQzE2bmjL",
  "key3": "3AYKtci5TLiv3uuAfvJWiCFp6LWzNTAHiC8EZtsm4C17s1ubPyxdDB4rAJyn7v4R6FQJ5VweNruYZ4E177mfbWps",
  "key4": "2n3E3QKqsnoTQhpocyQLuyn3MckUy1v94AogxDMzHV2SgWF5QxmYHVwVDbjcrFZMhY7X2rtsy8jLqdGMXCTqRiSF",
  "key5": "51dTJT4k61fzDcYcNRkAxiWeYNt5DMSzfDzBvB4LGkeRcGevUGKJpx989aYepddTgXRc6o3dTLzXqTD7rnJHHrK3",
  "key6": "3pqrP4Q9vVwxNGyDvhTvfmJMyCmr6oYiq94YJ3nvkH5srbeA7jQftszz4wWNxGGmfheAzL3nwM78o7nizrtyfrqT",
  "key7": "2KY8PUVJ9iYCmtj5A1hdTJp9UrkjwyjmwJ6sa4gotz6efyh2FsvhRdAcqFBHqXdUiLNZU2MyCYQJ8HnCnCBQw2r2",
  "key8": "5FsDrohXu9CYnkRpirqk6NqWfUxew33exThQJaPB5jrBYxGuywWDUC4zRNSTWLhZrY9u4VN2DFiPN2mMKkZBp7ZW",
  "key9": "5J644SgT5Y3iuj7dFyBgsjXv5Cja2DrwDBkgyyogopsQrHQJJbjjo1awuNWU8WQasCWKoLLbav41TCegqAMgjcfY",
  "key10": "4etgXz1gcJHkXvv2dYnFc2oBYbfpRKuXFdj7Hyewwe2frTJc7bHi3wfzvRNV582SMqUiqbYH9XyP9tfQVhGDZDL2",
  "key11": "3HntoXTHV6xV8H1o3Hq8mazgRUQR4nMLKn2WXtKn5cQDS3LqCtovSDdDMrCDD2KDtnM6RVkPQgvNX33XwgNTiqWf",
  "key12": "49GtughxXK41NALvXgXmJcmXUHvYE4sE43JvdZwtvUnRmKhq8tTfLVDR62VxscdkjraF6oMATyb6r6xApiPEAN7E",
  "key13": "jnCrx2FPvxGaHUw4An9BCkaehotM97MRtSbvnNQLKEDc1TmFj5Fx2GJjBf6BDwzGoL7znDuD1z9G2dsXAKi9jt6",
  "key14": "3Acodn2mi27pe6yugk3z1AL4Vwz1pbzP7318mYLZg7dYoid78wTRdTTcMKHRQDAmibbJmpULSCUTYmYGL1Nu5T1g",
  "key15": "42gKn5QYgnfVdWqYY5p6ji7cqkRAiZDePqVA4CAuaBduckRxMuxvFuNzD9pEgTHMHDR3M6tkhcvoLwcsKmwbK56E",
  "key16": "Eh8agziG2U3dsTYvErDfjZynSqPEfBtF2fwXLJDxU7u2Thqo6rBxTtVFpszGdcAtLhyxtPRTCLninmHZwNt7CJ4",
  "key17": "2ZkVmWLHKWFtNX65xazCoooPcu1B17ZzdrtnrkFKZhBng6utrsexNHjC9CAxvHNPhe7GZUmVwssreL967ntHMNFg",
  "key18": "5oKXHCnkwf6TkEHkPV6SZMmECcHeiMfZAxNKfn53JZbfgmf8uyPf9umUrgD3XQjRSoDfbR9DcYKq5pi6VRaK6TZL",
  "key19": "2iQzhCyR3zHv3rzBuy3xTc5K1qBFrUqB1Yrg9Tugf2KDqAugzNzhRHzN1kzJ6CPUV48o7ZnQyMk7EF9e47kzeKMP",
  "key20": "2x7RKWH1a6cyEuHFyWEPywW8bnsPh1PNSNEYCFHonRuH2bN6uqqqnzkzN4mXcwLLhAWkLNV7SENQBdg8V7dCWc8z",
  "key21": "43gdeKPXV8sewUmytVVYdHi4geu9kpSgDnT6iJqFyhShXq8U5PCNXkn5wZFbKVoofrMRVSsDPq46sTeDxMq1mzZv",
  "key22": "5vBf3QbiWN8ocsUiBiQws7YR2Um4cw6Xs4BQw5vqy6NHJT3gRc6stEWGV4j4pCG5GcWq3EQxRwzazxYwJk3G4rK1",
  "key23": "4jioD6p3qNBD5khgKjPonGEY8tXsaz9dqSLnJ8T9XbdZcigesSGEm2W5Se4dNLAGM5sRVdMMkJGweqaXeHduTiwo",
  "key24": "22qm6F8KRpnHs3TcuULzUeqN8bKCRUkpaesDpUbH3Uv5zWQG95BkmANqRZdLjKzTTGZ7JARhjgbfogfMYDy8Vstr",
  "key25": "3DQBjmDD3U78SpDbAJ4LX9DbyV8QzkwBLBvwpVGAsh3G78jpdDxyqfgDgVEE1mLSpre4yHjftMbUcfRXZV9Haxso",
  "key26": "3JNcNmJTEGG7FFdYykn7rKSeZfSoh67NDkf2YkyphwWAnba42qVNWnvKCbWcgqQZkkzANjrtFftaWAMPTwNaj8YP",
  "key27": "n7jfP6wCAmKtaLRbSmcm1uRyo6vW1Qg1J9xuoLaoQHXSHsDqHYKceWxR4AyCDst3aGXTnZR1JnmwVHSPCV2Ydbo",
  "key28": "5CK2TJusidPaHwxeWJ3w6EPQV1Um38BKVeB11HfanBGiXGETtpfNk8fbbJQWuDBur2TbWoumuPEdNZeYnv1z7fiB",
  "key29": "5JmMp6dKwbP9LFr7S5HGr5ShcKwFAg6K3nQmCAGhQ6mDimNy145nJR64j9wLb2SSs3CoSjA3mu4VidSdLa47XhHk",
  "key30": "3GNsnsAkTZ2S1suaJCkEuTTqU8p9TmuUTKie8QCfo7aMJeRGbwJzfq3Ae8p3Q7BenBwYBEYc6kdpi1jUYi3PvVvF",
  "key31": "5rXiKDrAyWiPBPU9doBpADLttzrhJmUFzMJfP2d25AMhnUyraWngZTVgDhiGsmN5iswSQGGsLUkcf2ZyTpXRWGmm",
  "key32": "3SaEgdoYTCgEZdGcfTcyAErHa78aaCYFJXzDkRLEiJgHhnEi1qydNs7zKdP55WDDvDG84UcgVVJtxbYA34V22WNn",
  "key33": "2qagxPJjqK7am57yvNK3V6xSQ7eDeWD2wx9a54bdPoHPGPTbcvGEnLa8rUf1oveTe2BQuuKTPaCvpMMcGMBBkadm",
  "key34": "3p2LAAX3pP18pmQuENru9u2nm4VrLuyFHm167DCYDBAK4vDg6x61gkC5g9gSxSNcHYzTADzkoxDVc52K4saiznoi"
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
