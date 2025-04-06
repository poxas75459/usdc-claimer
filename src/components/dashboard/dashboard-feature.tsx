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
    "3MZfgvHxDtasMtMYYvpBk8JRYa1KsiwwErWZz4rmmMz1Jhs3t2NA2Y6XtHrVWdcARfCkSRa6HUa2JmRX2rJEF8Le"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWpvXsZTZPmhJrzTQdSkUu9A1czaUiCwvQCRNLD35nAg93k3yMmtVwcUetzcwhDQH3JuMLErLTazs14aFLjH3HQ",
  "key1": "2sdbQ1uDG2TZ44nSNvXforvf7riBbz2sjSkUEa7iiwAJb2mzjJehcQxzvUqi6KxWRWfuxXbE5P8FshGqAsfE3P4T",
  "key2": "4GpYEduRXMqX6H1TNdcpQKwFgSQ9gfzE7pedkWBYfqVfHCgujoAS1MeNnivnBSmzZV3t72AatEZJ1ihZ9h6gRU7X",
  "key3": "5m4mFCPQ8DXyhh6t4kfhZgFFdLvaBMA4MPUzs5t1gL7SRe3Jz71DDHxRWHxvU3eJLbFoKFRxa69ZwDGmq4JFoWb3",
  "key4": "kcMnp1UB5aKZt3TA3JEzjxETBVS1NrC9ANnxLTN6YNXminL5wT8pGVxtHAocF97atUiRHuNUsTmBgJzrX7HDU9G",
  "key5": "2kT1bTpmwvfXwkic2epZDphNspFJZ6nVxHLWuaDgMp19qac3iMX8YSwtSspWvWGq8ktWPxnyeSAaTALuP8t5aV16",
  "key6": "2Z7YnqcTTGkme7toDnrbeHVAYmCyz9KU6SVtwH8idyfX9PUbicNDTqKw4Pp8rUbpXqkwqCNB5cvLVpuHMDVrvqZM",
  "key7": "22WGW4vC8pgnDY5a3tEYCDkEePEJRtRCw2NkS1r1JiS78bTJyHuxLAy3xbmxQX8AggwXdDTtDNKzitWfiRrnVmHi",
  "key8": "2kHwfFkcKu81Y1fyMjNjbi1ZNqLyrV91jmWZHdRt1nAXcy5aY3p9GPYmiiuoDYT1kyWF5dvZKrYUSRBGaxtHeKe8",
  "key9": "5fN8G8DpiNGX21vYcUjHdiySJ5ogxYGKJyeyMy95Fv8jPdaEYktLLxx4TD2FNQhjq8GdssqvbcHpqb1hFkgrauWE",
  "key10": "LXjFDPfhFqYqDCZkTQgtXAkzpbfCkjXS41hoPpmJbCaXq9pehzgDneSbtpy21t6ZyE9XhJeJm5fAdAZwYQzXjLZ",
  "key11": "2919QmUe9EQAyJcyxNAPTjReurnTvKucPrykJH85QB35bP99Pz4zfTmquZozgMZBwprNDTQbnixJhK3asaH21g1L",
  "key12": "2m2mViCWtP4H6F9xRy63jZTiz5TN9Q7P2tYTbK8moz61kma9Xt6Facdur1LoV3MTu1oTVskQhXWwv2gLNJeE2PZY",
  "key13": "ucYFBBCpvNWRK5DZ8uZVNiqdvjJVfEq2XazUkfyP5VDE9oM1m9gx4qV8F8bXDxTFWUUu59fATt3deFdyezCT8iJ",
  "key14": "wxktVPV3GtS6KZHWHVEWH6PcVVF3FD88Hgf3i4XAiQZpP3tAAcFZDkN1HpCBFFHcSWhNBBaHq2Schz1kuygTgr9",
  "key15": "3uhfmtmWvk2GB8toDmUxzTT9CnrYwEztQ7Ldo2q6N4K75cNWs8ozhcrL7ncb9PFNT9QXvpcxrsHhj6mpMUpU8MFZ",
  "key16": "2E9wNNm4jggAnsVZ3zhSGN59mPXgygP6uRVvKwWXSzTPjdCeYu9UBwP241d2UuXH5C5xcxDVaxXg4Cu5queZsAmT",
  "key17": "4FgSB8bcDcaUkKtw16sfux9eJUZ2iS5ngnfuBrJCg7HmL48Db6pZQjTbtLuZEHu5vmNY2aLFPJN5esfcB6QW5Xtg",
  "key18": "5b36VEYP1RCWzhFomwiTMw99uUnui5HgFRWmebi31yaek1SdutxeG6a5hb7wqD6bUcAVjhc1p7upycN6sMK3V9K9",
  "key19": "5LNsF4QZ9gTjC4CxMqXpPfmCfCLMWfvsS7YnvyUzfKGMNBoSWcSRcn8oo5H2UEx5AuFCmyN4583CCc5K2vmrb2pR",
  "key20": "5mr2FUSdpAE916q42yeU38St4M4eLrmdPFraHmQNMp9cdSPxEifGuHfEBsy9GJN6v4VNDcjoTBuwy8DwEffpjztp",
  "key21": "2sJpP8EbV5Chjzo5uh3EKGLjgCfFChaQSDbZqZKUj5i2qxACoemRraAP8wiJbKtaCuTvVHoTDjoGUdthcPqbfNKh",
  "key22": "bS9soFtFzPZVt2VCkWaaKYcTp1YPTvFetwUi5kZGMhToKLyrKMoqRuA27fsyvkLx6P2BfoX6oC1yVJSUghMKe4a",
  "key23": "3NUTHkX6Yxg6tTQbWZ29Mgp8ztWRPuHjgemzWWBNhH6LXUatZkffg7D7ozB9LfT3LLjxpR2sDMx1nVN1ghLv5Xxr",
  "key24": "4ySTGWnt4D2GNAwuh3gqyYGgFdCQWfxQYhJnBZb4RnMbg7mAMpTroHpK2yx3pYnjHFQKfAD8RqW6hyKn2cabAWsx",
  "key25": "A5E4sSQxXYdHxQBPuJqfmj3GV6rsbRfRHxjkrFRAjDktPa2D7EcdvZHhnaES59WFfqohmnwyuyZUGifzwhRZHLY",
  "key26": "3TCU7r6iSZArXv4tRSLSWsz1NoAXHLSjcR1XEr9bDxsvHEFXpte91ioMrqJchaNCoHKHwqGdti5D13NbCpVvvw62",
  "key27": "4vensvyP2YRpg1XJzdaampiuez2zeCQ2CyVMpXFi5kE8VsCQUJW7vg7MoQE2UReJuL2ZKeNBppHJ4SJtuUJXtcaY",
  "key28": "5A5uJe75TVBLhPx7DcLaiH4oVcMRbXqJEvVgt8jE7etCrvfGoK8uCzBhqrRN3oXgvLzqMo6F9Zrnu2C8HkqEi4iW",
  "key29": "3xSqLGXVtNgjqJ3gMmseT7P4es84awGbTgUVKQ4oRrft2arrELHr1b7acgD6kfTXHiBRsZgfuQz8ksoVw3zCqmp8",
  "key30": "4Y1JtgmUV5jvJFRUo8qGG9F7mWQhVU1iDZCccwJTV28y1YaEiKbqM8hAfkVHV87uJWaAyUFUC6wBTxftNbQ3bLVz",
  "key31": "3pvQmNb8XoSmtZeWYCULnu8uPkVzpBqU9WErKHEmzDdHMYxgHRon7dz37k2kjGcbSbMwC5NQTNvVPHPGWBV36HVf",
  "key32": "43QGDdnz7g5HkuZUf3Pzjd1dDYr2xrACTUdRa5bgC8fLpu4pMnz2vm2dUvAiXnzvrpTA1GXRGVNk4r71HgXAh8ZZ",
  "key33": "4mEiDKkg7NigDANban8ifo9ZpasAXGLASnJfQeRamBHtzTxGbcCUMfCyTBR4NQ2ZGbwpJdERekGMHw53rnXvfZPF",
  "key34": "4mqgggsAzC9bCxt8HeMFisr7ttG2dWLyRFrjUqXZZQCJ4wt2Z2dAe91nAdcpDPEeNv1kNVSkShQfhEBrucaYE4Ke"
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
