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
    "59rVeLw1HpXMo2YrS2FbCb9cp6QyZWFBzeD6NRt1vbxHdBUpYRYhNrgop81PJ2Ym9pjWmEr8cnk1mc6ok2a3eWib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TB2PBYg8xCae1dAUBkGZ4pyDPYgAD2bkkZd7LTayKsZiYWyAe4FtJfAbMyx3Uy9pXowjwWJzsjku5D3men6bhNz",
  "key1": "34718h6cYvwsyTgt9fDwWjBauVGUZ3AGQtbYKt6NkHr7PpkBu3hhYvh6B9Yx3BgRCw7Q6u86jQauS7kYmZedBXw1",
  "key2": "5n5ecqRdFUTHVQznNS1WKDsSbPAKaF6UJxc4BUgrfDutQfY4VavzcRA1mTiRYmNewmWHK47sBzzdwQMaJCiAdD5N",
  "key3": "58qBxMEJQPDEUqv7dZD96YWmZi9XfBZ7EsU929tS2Q5GnHS64pYYBcy5spLVSmzcssPKSxKyPNNfNTA6rmLu8Xfq",
  "key4": "VR8jHcaHxxuZe9gWZAJ1vT4ESEwpUm4f4vExhaqy4xZ2Rq1cTaZDQzJJfuxsANsYyAkaYe9W8HSxaMWx5VxzHRe",
  "key5": "3Aa85srnkr7YvXqiVZ6AgHdcfcDpkhfahKS83bR5asWudtMggdVw9NSpv6o1dWYjMhdmo54GTompNNFZrCJD7dvy",
  "key6": "4C5L5Ddx3fQKm8pWaBjVBfmdUSZQaxfN2E1NAHg1dBrEysgN2ECo1cScFAmbsb1pUGAr1JoUBcJLAZVrVdgqHYjZ",
  "key7": "2wjRXp9uQ9aKTr7iKWwjkbwJ9H8Ziz9HCQyxH7Ct121z7MTMhmrRmP4PZLrBcFjtAaJYJYe5ZFiuzRop6oaEoLdd",
  "key8": "4tcKgBWpkh8yLuzJDANFtMBwnMsLxoXco7YEyywLdqGCjMGFmE6QGfqbDLCPWafRNhMxaj4Toz1RL8bUVhDvGsZ",
  "key9": "436vZ9z75Ke39yDMiRMjShrhehvvgJBWPGB5jfF7ZeSarTXgJWDYM4NmrXbJ8t4tG93pLSzUSJ3DvG8HoDDF2q9h",
  "key10": "5cVvGPeFET2QLn9bDRCKssUSZFsffwW8aviNmnBHDAsTs8WwPvFNHKiVkb6JmLXjDFR4Ea2U8cbFVCHoz55psH4D",
  "key11": "qPF4NX2hEySLwyJjihM35mct1qfzWszrqowuHA7apJ5PJhRJChtrsQX6ko1YmgQPT1C2ddHFXN7fYC9ymtUvKkz",
  "key12": "2PQuAfdEhyTdUfRKt5MqceQv6RmPuUBxuJzkkdSFpBuyJjFeMrqhkZ3RUjTzFJUYcmornxYNUKbcMzYopZmkDXiN",
  "key13": "29tPXPp1HoedGeEpDM3C63t8oPwnM7FZQA2TvE42d7dHuq1qDJkaEBpN78rLgn4hMSe5RcTKfz61x6yG8vxkDFmx",
  "key14": "42ed2mbF7Hh2SvCNJW4FzHz9grhNQ4YaTnBJZsnqzu6hKJXPCDswYHjpGd81ssPcBzZQZwoeL8mozjpJ6XR4XcWG",
  "key15": "3iyf4fUeMXibS1zWAGve524f1BkNmbG6j3nS1iV64Uuzm1MGV4hvQs5jz5z3VLopLDJqifcr48Et31JLamRNFHw7",
  "key16": "3dShwjjYqbqU4yt9gYytGaXLqcPfKz4ddcZuyWGywZgMKyBU2qhgr4Sj9aGMV9KUGVBeB9o3JAv6FXZHEApaCtFj",
  "key17": "3SAjfzHHP1qUZZAWsSGDMjYCo9smwsMGdGtLBTGRMhBQRHgy9NeZ1JctvRwd5ZUTvnqVYnZBqx79B36EAHASD6LQ",
  "key18": "2CMyzJkBE5TmrkMgnQKjnhebpBENyTyLKDEjK2uSCoEsxBZxkK7twPi1nnkRnDQvWkm6rtQ1PRYTYZ8yVCcWnskx",
  "key19": "gWn4Duodry2Tew9CwLEns9DzMV8r5cCVa62F2jaRfjw1j8Hahbmx5phs5haU3DfyLgZi8k6LADrnrNgn8awQoBf",
  "key20": "4V6gQMekGoqJTcEiWzT5gxt5i6FDbMGvZEzngxyNVrMSTtoiTDvr86b6dbBjcpNybTwCxcBUG7p8taFvVHEL3Khh",
  "key21": "2h7Jn5uxrwA4iF6zE6CZXvGVy3Rs84F5ZrvXLVKimZKoYsuqyV4HbCbGkBinvwca5axmJYFUUe4a6wfxYRqa81JV",
  "key22": "4rtfiC6bHaHf41hDePmqGQcvDRygCK5mYpa9jxktdPVKABFhBLLA351EhXfJJXGEg8mzpA45g335KnPEyrG2Z9SS",
  "key23": "cqnTZLayqogekhphFuF494RRdUu9t1RgF3yyevZr4TxR7CZUTz3p33N7sQtwehEzXbqfobkXTeawXjunQkAvXhZ",
  "key24": "61QtoWQxmdeKyLVbCFDmjQFWFUhd7hiBmEfukmbqaSL4AkgBcq3Bdw8rxiCeHTk244zagRc39fWJThQeGVRcKint",
  "key25": "4RzMHBNDMkSa6RGGwNU2BxcWG1BYy8X1ujc63ag9V8qfeC8psyC7HBJ5w2AAruftjdLtb8ierpnFtwXCEzJsXagZ",
  "key26": "3pT7ocuqx8nfrkwFX9tpX8gUtLBvHXxWQNP22m8NieydRAE2raGu9ngJNU6F8pq4F7n5VWQKKPhREkL1VHrG1nLM",
  "key27": "27azgpRQdzZP3tSZAWYRi3jouAozXs7NRvWzTmr8SxLLCTrnmBz2TWxu5EP6tciJPMy893DgQqERbnVsLP8Du9EN",
  "key28": "59Z9jn6M3hsSF8XKbCAmYXgVuPALrrMi4bJdepjKhPpAo3UxwbGNiMciTFu8nYZkog8WvSNvmUFi9ftxAZB7tDjY",
  "key29": "3rWR24BYU6w1BKt2zv1ovabGMWmvQEA2Z1hPgv1BSgG6tSjx5nzVc4E8j2ZSgCwhHbkVdCJsA36cDAnu9WnKkonZ",
  "key30": "2QQZkWmfVPwFdDVhfXrGxNEU1HmJb51VofMhNApD6fE3zhbCTtj5L4Vy3hZ1EgHwLn8rP59JKseAKNTUqvSzbQK7",
  "key31": "5YX8afQfXaWtWBfWV7KeMPxMZXA6jbqoUCzUTnCaLEhw6CJHGyeYRiBdtZTK6crSzs2yswCGeuGByue2bCJVXn8f"
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
