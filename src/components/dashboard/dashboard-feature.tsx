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
    "2KtCjTFZB17ajua3sYRnEetmcmrvDXCKpPxWEwrKTce8VL3YJN4bnPtzm4fHKaLDz91CbuVGrxw3N7Zm19F62UjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ako6hVrpYEQ8tUgjdDbUACvyLueNRRX34n5qXu2cEMyB4Yi3gVkEaBWRFiJ5Lxp1bssYo3ArKCh612LqAj5FM4r",
  "key1": "4myMHwZvNccBijKrpNp4DfsMkNyKSEVZuPWvtqS1xE1aB6TjEY1EhWBxcRe7CLuwLrrSZHLJ6mFcqany2qNNsxMf",
  "key2": "qiBXS3bcWf73iAeUzS1h8m7bAATPYyjxaYTKJxBCGbPsGkL19ckEvf9eTHwBiGGGiqWYCPTRVXgGuH4dw3uzqzm",
  "key3": "2CAYcM8RXF1uYEHdidYDnxkcUdCpCBmKC2BiXkWpCCh6N44acXZfwHDa4APx9iUNSDBcbqyib6QGhyTjTWVRvt5V",
  "key4": "29cysbFjwcQbmS4joi5C45jwoncdbPdMiT1UedA6HaEGA8ogtXxyXftjv5cryXzUYDoeHyK1YvqcE3q5YsYAycZj",
  "key5": "3R7JB5ehnzQVnbhv1ZboAZYMUSiHLETEVXovUHcyWX17RfEayfNbqVkynui1raLunZPL8cqDQfy6StyLkJyLKXj",
  "key6": "2yEkRhYY5GqnNpPm2XAw41fxW6nuNFGhkVTmRSY2GgXaQjECVKHbV6LZ3vVpCCaQYsf2D7sw8oSpYZW6Ec9G9TKv",
  "key7": "2256wH1maQ7Qsmbw5N5HNhakzqASPX6G4p6kNXJfLo8J7U6itLc8ehyy6bGDPxYJ6DrmCKHV29hF5Nqxtbe1C27F",
  "key8": "66ZhjMRRXHQsvSgHkXc3Drx7Xs9qkJd7fCxhDJiT5y3n1oTaNKxj9na2QZe5Ad1QhqFAbyGPgq7iuBaB8CFVHQoF",
  "key9": "2tAfg5o3naWtGq6FAfX46xc3oNXFCDRyEDaNzeZ7QF77sSUFnXBviYZXypYBXeNhNGxSNjGEjCsooedNtjoWHTtY",
  "key10": "WnAptEy9XY6yRmyGqwtJhPH4U8nrudE8488WhFJuRs6rfGgvjrmx2T4YG2ZPfxJKSPbMgdSjtDgCnZx6HkKavsZ",
  "key11": "43hxaLhAFPMSCqZPT2ke6YYZnAdF6wwzWCGmUVFTx9c9PdYYoDH2j5zuMjc9j1Geox1UVocBDRe5jjZGQp8S5qTC",
  "key12": "3HX2YUvAbDq6XiGBhmMK5XR5MT9U9JBUmWmGGCKhvji7xGtoKXozBQgmgFY74iy3TNPzCuGaxx5QUMhivdyDLUd",
  "key13": "CcFM7o4UosMg2Uv13eFoNThoHD5cDKodbYmQir9EUBnn73AAKRzcfc9ansAAvLFmKSYAx9mQydrgpYgmFSzK6Qk",
  "key14": "668uV9QgzeX1eaSCNYX3rnfNrWbCEEvWNTqRy1qGA5m7hXwVufsXpUhZHRgCJmnmHDQmwqJiaPmkUf25oHHqEa7Q",
  "key15": "42F8nGsTNcPgXQ1X7YTaaur2Q1TpYAjFQK3Svrj5MRNHJ3qDkvXHn2jrtVQhwkEwH11x5DXj4RUzCi11uFHYzhjw",
  "key16": "5aUD4FJEBm3EDtD2pS9ZFVTXnif38RbCncbguB1PGnHkryWBNCZbrJG3nQRAgFMsp8ZYn3ZdSnr78u9pCwmdjYaY",
  "key17": "3CVssT5tmxmVKprv9ypasHb9hTkv1mfffgJBmDQ8GchhpiThmxU5fnjBu66JduzoHJccGYoBxhPi4DDstX754BJ8",
  "key18": "ZzajQAQR4JGEDhKZ3csGg63vJoQc2RCimzhDr8ijf11XkEofrKpL7afEc8KrYfHiqdFdNWbs2YXAzXwEGfgVYc1",
  "key19": "3hJDrmSa6ZUqQRkVa6RCUFSQWGLrrfqPfpEXvGSsfCbR9n6rjYNdyPunVA5GUnKovzfeNCGwNg7M55diGJR4jqcD",
  "key20": "2FoDZ9GA5n5m72wMHDSkJmc67yt7adBe9Avk9ajKxRA9bpLt4fA1VVaz8WNthoNwozGKZUTLKDLg8KtHDheiv9VG",
  "key21": "3eF5aGp1eD5e6HgEkiVzvp3UEhzBwK6N9bGovG4mcyUoJgjRURHUd1ffd49Ar44Mv714aGnCA8zX3AH9RBDjS2G5",
  "key22": "4NnjPSWgEUbGBxBXXaMqWkh1DaeYBAharRd9hjcFeqnZ3RjEDURy7UxZeKBUXv4biFctCjFavqvvu4zY9Ffxyuc7",
  "key23": "3SVdDkbF3p9og7rVBdtFegTYdg8AmQhwRD9zWs97wUNgm54veax6HoyYw6b6RiPZVk417aJDzZsq6WqePHXVUdfe",
  "key24": "2zF4NC8bjsKNYUUCV13FEBGwdMTigdMLGUizV64hFdCLXXWVA7eeUVgvsadupxUsSVkb2KmM7r6F7r1NemqSpShE",
  "key25": "3KNuTfL4No7WnejqPhKxYTx6oHVz8hcwe9cgfy3weBGFroKViAjR4iiQHBgkWatifNJRGVrNe7AGi5VxgSwNfQ2V",
  "key26": "4UKbTKKUAfbdP2a7Y3xcGg7ZuYRp9dejj4JP6jMtSWyFwuqnT4NKo6yNffwHLLkYe8HTwph5cdk68pfmPUaGNaGU",
  "key27": "66VcNQEGLbb8jXbsQULGusT2tz57LrMytgqTyLGYoZLNHQBU3fW2yE279nBjhCqmhR1j4fE97YgpK6vPHAQgUQP1",
  "key28": "guEGQ8L32szbzGPPNPfobTqvTVf6t3E9AsSi86cd3tE7HU7BLYHKEYdJAzgqLVtQC3a6zSAE2tu4NMDLkoTwQJm",
  "key29": "5uA8tujPznSMHeDLiQMFUFb9sdQJg1528JaBA7ZZrzdY582FvrGX5ztQ8UsbBNJMb7vTpgCqZwWnuwz9viF3uQi7",
  "key30": "5QRdXtLFxuHQNHXiEnN6YMJdsVAxrN8rB5a9dJ9otPnogeKHZYbJBh8sfU9rniopQDvRQQKNqXvyPv1ZsP6qZTSJ",
  "key31": "3u9NdXLZsTVH8wLuQTuvASGF66TYLZWLBTqMBnHewQv2ExF3kK3f4PuJb1hrakAiVSQzJpwQnNroDMSKR4fTP1sJ",
  "key32": "5adM5Qh3EwfB8LsnuFccPStsnvoHxjZGnMddTbaXeqSv8rCpzKYm3ToJsKnYYM595LXEFAbFuTzMt5mayJ65UYGJ",
  "key33": "u1Kb18znrVwzwnVoBsaoDohpDExp4n7xcLiYE6yX8k46nw6VKkncqHDJ6HtbqnQnTH27SbjxWfHMmC2FNEciTrj"
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
