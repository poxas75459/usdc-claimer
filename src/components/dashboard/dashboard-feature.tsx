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
    "LqLHNGMjAUBgCB6spXwmtHjX6yiBi1CjgrNwmWYLQy1xxS5ZH7WgFd3bffwr5zJpVuG4quc2g3MVupJEtDHiKpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oqxZqUxkv26KxRAGiTbzPrML4HkWZ9oFWUGzgzv3KjeCML79rs23yfraf9QUnt2JjUGwCh9ZHvEMVdW5so7DqAv",
  "key1": "3v6x4KYWNox2fTe4DDok1Ejh7eaFjo2cepXyqv6fnj6S7PhRJCbh1eBSWf9qwid1L79coXSZqSWUqksdcmCDRzUz",
  "key2": "5DXv5nSGgqGULPoe8CTrAZjawHft8UdULNrNEh38cBaNfNkhaRpGtMpb1gVPLKBqkpYh6ZgjgVgHqSxHD4Grwx8P",
  "key3": "4i3SzP9BwsHYauYgDK5fUtTqpedSRDngrip113982zHphyJJZgShKA6HGuPyzknpXUqVDnLogECr8ViqFysrWWyt",
  "key4": "4J7GdvcRHQXCrfXfscx3ewgLsXKFQdaDBiCgrRPp6oRjpuBETj9xDdKbFYyvCcHmgCUvf9pZuUsXe3ihLJZg2WX3",
  "key5": "4YyTnUpmo4y89VnYmHxPxVohF1cvMhhwCi78rbJ1CCEHQvkBhgtNJBK9XxfchAYrvzBNPRG4z3b6ouMNBeN2PATp",
  "key6": "5d9K3ipEoBfiexsAsdTbHjuZdcwuAmjUHxk4BquR5UdCNxK2Jh7d21zraYBhbniRsYq8trccqFKXDjjYxxqFfAfy",
  "key7": "5bmeK72CMK3PnmzL1GvowbCBA91o78WpGMANWszND2wtM2aqnAmo1MAg7zKqutPny3PGdbDA5SYwdJ4aGkkV1rqG",
  "key8": "2L3tw7JeFsh2owx8sZRJTyR7nK3tea4DbapKrvocWZT5zm5HcVBb34e8GLcN6jEWFL4zbwfjCauLLuSZG4HYcWw9",
  "key9": "aGSpcrfHgw8kahdofrjGBneWqABNnkWGf6nitHe1x7vdYfgjzfig9ZTm593s43aZYikTpfFmJNSd3R8HNGY8jFv",
  "key10": "42TfAMMixucyvN2wHYkws434CJSTQ15ems5yrDWr7J1L75sTFTo9VPVoVkeRVPrF3vttJPn95aJnTpnBEppWTCuY",
  "key11": "2hv1dvmp5fcVwQoemGZATk8DkuMSwAksS6KxFZD3CfthLKq3gWUvZB6uVhACdi5hoJ6S63ViwYXduxJgEhANh7w7",
  "key12": "WR4BErgcLpq1vaa6vQS6a5YRsgmtoWVsQwSA59nY3aG2CpnEguA9iGvsF7Te9RGdSy13AjD95mmwDYwwAixUqPa",
  "key13": "gZdVGx26GbzaJvxbDxzE1DgEVo6YaHxeHuA3nEH4UFAfh4N3214s7vkhexvUsXnTejSqa21ByS7Nrn4NCawEoaX",
  "key14": "GhXBYeCPVEe71QeDzoj8kQYZ9epyEj5N3CYkG4c4CAr3T9SHyaeYUZY7qy8aaVE8miJMXeRAb3vDzuEicKgJvm4",
  "key15": "47g9mkKgD4fihmV2idxj68ZM1hcUw9RBgH7kWuhubGaZaabHzjosiD62hYon7Uoyv6n117tnP94sLpatS8Gfj94C",
  "key16": "21zRfqy9LUAPHMVtD7dNjvUbKkdHaT5tVQmVmK2AT5qRP9p7FmqLyBjNoE9zFQk1QRwAZEyhaHPuDZnQsPQFnDoE",
  "key17": "5iiSegM6Xm9Fhs8pB8SNZ1tZMa2pskNpHzmxY5a7fsys3zHTrBXSBc6cruycwuKnuYchUKCGg7Nndm4w8dL8Psic",
  "key18": "3jCFiwsFU4kfjBta19kjqqzN5XgYcBESgvT74fEbuJxaq19uXDpKc6RYEUpLrAccWtqtJBDPdr7WQMJw3cZodrze",
  "key19": "31jT3kVomZwjMG71bHnJoDnqLM3FjTE9V58isFsTaqu1h8fTe2y5CFhf3bfZYu2gQyoQwsySh4pwUEoJiV2LEpyU",
  "key20": "JfQ2t2YPnGQ8KbsbqnnF3PT3s8Vc7paB3ocsrmq22uTWUYMwhCWBGynEtLTRMyc7uc2D7hBjq2Gc5ByqsxufxUp",
  "key21": "2BHPRNXdowteujDV9jTDegxr4csRLbZmh44zH61UTjwKQ5SdRYB3PV8Gn5DneBYX8NGBgA4fxXCcgCeqBWmb2s5u",
  "key22": "47FuQcEHNRgqxkvNEYBreXLmUzNuGCFTPGdsyCFPZ8Do63yByAHsioV9jBHAvfcDwaB9F3V3e61QQAdYLzFgM5q5",
  "key23": "5Xu3mpKrmCRFnEmgYL8kTT1ooprfwP97mu7vBszRUpTamEV3c6ZtsBXDT5yxP2Tw323EMXsVAEaD773hMepiitq4",
  "key24": "5iwV9PDf6EoiKdicm9wQA4YJqKMdVQu4pDQEMPwVPaKBLT1d9bD1XYADUb2Xk5ZDHioutXJ8dnbfc8QqP5CHMKsb",
  "key25": "2Zf7rFRxn2dTEGiQ2hZPF7jZJAFViY91x1Ft2YfHNeCRGpEDJ82mgWKMNgjJf7pRhEGB3qjFU49Fv6VKStM4sVuP",
  "key26": "gA6GQ4F1SYg4ZhsftLwBFvczt8EjQ7RTZFTDyVPXRXdpycaGVWLGt4RYzEaTHyktCzZXQM6DjRKnALgxaHWPZeg",
  "key27": "3tUft4axNgMgkKeuou4XVHBBDixbWe6Wv8pJuqk6TjeXhnptj9mFLYevNqHHjoLsmUExcrrLBYMB1HBiB8o4typ",
  "key28": "4hLzTzg1vMux3nAsFL4DRgBJzw9vYkHL5k5QNzWReKMa79NqmgS2pmqePis3RXWSx3VfpCYqGWtCGqNWyPcWvJgc",
  "key29": "5U6bqH1GNkqAVDteDXBVWJoRY9eRvdspF56cKDAz3HDCdM7ZdZN1eiyXMJnsawJRoabNdtcy35eH2imBqBx1yCCh",
  "key30": "4RyjiLhL3m97NkbLb7TRiaFPv2rj5LhAnEKfg1CQpiKS34YWwjNffVvhRhbXfEqYngPZgQ4W4ohgf2PnMPXgJWZt",
  "key31": "3869LKBE5qd99SYa3DhWzacBf5cJ7kLcZ6RXZAavSVLyn3pvQwX7Evikmn2F3QQnTk3W8kYdgL4yeuccPb5o8nLm",
  "key32": "3wHgJZTMctDZDsZS5ezqAsRoGiCXrqhN5iv1qRy95d5FmzUmZfdHrgfmbbNVnmvkpAd3d9p82Ma49G32AYbPjKpD",
  "key33": "26m8Pp2RfdUAM3gaNMHsfMRQynPwyweqvh5jJU5uveKHZyzvMpXntLCo2sBtZ4AA5P8T5U7HKxJCkhss1PG5asDq",
  "key34": "RCMcETrGLB8CLcMkuSdKA9qTuu8jtSybw6go8Qmau1WAvF8uKLuxJZKu44GiVDfmGsWBUuuEDVByirPXfyTeYMf",
  "key35": "WHWsnVEk8jgQQbNSErjz5EipGp5AozB9edwJHSzvB1KdBjAX5XjRKrFJS4X4JrQbtmax9jTRSbX7C3FWyMyLJUp",
  "key36": "34TkSuVYdxWWLD2bxFqC7V77QPZzwY9awC4T8HpMPy3YtHU4LkuC2zPeBYJPTLpvYpLGDHDZgNQ6Cz6p7iK7MWg",
  "key37": "9YaRyg2fcQVEz7uEoZuZeRtufSgfqzUKFAMgUwdmRiC3jBouvjtyEr9hZEBPc9DK7AZtsknnbYmPvnEZiHS2hmY",
  "key38": "33QxMRJ96ChFRckJm8RVs5Jos4twbenxApED1FiZ5d2SkU5id4v31aCUJhefXVHEM7CyqyYDauBSFqDR5TsnrfZn",
  "key39": "4kQVEjFAHjeEzQR4MFLmi4noFgL9wqhtXrU8N85pSkA12eM4USt1BaLCWGVEsaxGf4rDW67zgnBDQX7CHHqr9o4h",
  "key40": "kPZ2ZpKsMTgUqduWTk9Li3CMQBKWwZEbpoeNf7ZVXGtkwJPRLesvp7gEe8qTob7nrSiMb8P1vJd4HoYuVP9xjN2",
  "key41": "uZjfuDYBiWtV211mDumnPrVXnhJgp9jNKb8h2VLBjSLCMjDq2ZFX2ivmEqYZ8Lzy8qoEsU71d8domihjxxC1Kxs",
  "key42": "2yVD4azLw5X9VGm64F5iCx9h4TwS6LEsGeoq1G5DrnMydEkZdQe9d8FajpZ4EXAkja2z1zYkLesvtYfuJma2ggXS",
  "key43": "66wb32vtkkgbqDDTY9nrf5Mv46Vam2qey5kszc3MuzbtPPwUcAoZ3iPw6t22RTwkwdHnRJxaQratPeP9xhV2znEf",
  "key44": "DnwcDrxGtHfJMKtGeANPh5xncm3sZdbz3rq4sVWKnSV8xp8APd7TARh5HEJEGS9gAWpddpikwD9vbxC3gpEkKay"
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
