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
    "2SrzibBHSfd21tmffhScU1UsWofoTFx2fd1iRvquhZE6hNS869HtAc42ttRsg798hSRQS8rghVLRTRM26EWqngvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NY1EyRUMhJnnVHLSzUYRhLkLQzmx3kyJuBq8DDny5XwG6jqoEo7XqAkACVaNZR2wES7UdFveDvMYa5U7a1eJbHk",
  "key1": "65er61TU4KcPPPdmd7Mz4gUd6Zk5ZbsuXjvVWBE7tk7wTNbTi4fVNmkVhEsrTqcoCWWgxFqCMq5Rnxy7DgjKw7Y6",
  "key2": "24zKj9fGmc6Fqy5FMXJiJWe1WvUURjYwwpntNtj2H2cd9GQJQ8G3uRyRMdRCsMd3dpLRhWjAtECtWdtqWAcKVg5R",
  "key3": "5DkSa1EALxmSgXDHqbA2AFpeFC5gav3JJvSHZnJsgYQFfiVdXS1oHGoHmsSwcuaWhn9byGT4spWoute4VAvxyr6x",
  "key4": "2GLb2Jy4eP8MMMvzZxH9KPkeVH345CF3x2GQSM9VYU1uyGtWfSfpUbgxQE9rkUGLTwx6hJNFTcNqKzj1K86yBUUU",
  "key5": "5G2Vx4fUjJ7uUxEmrcHDQaYpcaqawwx5mvwGu8SMvpBRALs9aP5j4CKWSoFzpHHNSoN4bz4PPx7knM5UhQyBMdpX",
  "key6": "A8mdKfFzxjuT9Tqxow5xMrYe8mMRyuuxqwXAJYYUoMUrPGaCeuBXt5Ld4KoQ3CY88SbWF5zWhST8fgQb4gHYmb2",
  "key7": "33fqkR8pbPByBLdw3JdKWVgcBpvijQLsj1Xkevjb1He9pX1B71jZ9tVYg1BWdXB6YDQ1jetJeuXMqhCkru1TQYuW",
  "key8": "3sFvy8gK4hhL8Yjidr6oj3ML5DDAieHdkzevxP9f6KgbkX7qvznhbL8TVWjrZ5LhwXciFPgK71d2YyFcFZkF2zBA",
  "key9": "296eUyVvXyWW6dwQvUmkzrf4wLTkqBLJY54aox9WrNpHSWmh9hvk6bZJ4fC6wKnvzePajcbAYUPzrHkUM6PR6ayb",
  "key10": "2N2AXhK4abA3xH4Xg9VuAka7eEJA3huJ8eHASymSFh4Hd1wSJn4m4EhCvCGdQbh6K418EcVzzgpFx5psVTL4WX7i",
  "key11": "HnTzcbFfYtDok3f8zAH9q1TfzorF2eFecbQjMusgxp5YT8agHUoKwwGjVrsBDgSZCThiCXsuB7zveSzDwy8Eg9H",
  "key12": "2UwXw78NFnVJqyTy4xuStq4bN7mGep5roDyS6ScS6FV7TnPAsueYN5VTSoxaiBdnn6AsJTu7JVNLCHMA542ebDZU",
  "key13": "akusELWNBfYf5wSczCkfkgs5yzsxo9taZ4YbTNcUiAiKnmXELLLEDZCWe5n9SFiqFum8npXeNWTtJxXgnrk2CgH",
  "key14": "3EZB1mhiGQehD8aoy71yMRdR79A6P6DCCWGdfZJSy9yYj9XAAJNQA2dgPGAbG4vPY39sTpa4WDhCJ7hSktwr5foq",
  "key15": "21Jf2oM4wSdjjUBJVCcJ7zbmggjVEECcDC75VSLy9xBU2d77rpD5Sjh8cRxSgv4GXcNoH1FPzMiwwnL2sk8ny9ZD",
  "key16": "5J2HHou9VzAyuhuF58S6Xm98RHLz9SSmA5JENwDtat9R5R8Z4bgHxjBcbQnVJWqB6Th1oWeL9n5RaLtxcnQ7YRXp",
  "key17": "f5QWD8wpntxH81R781WEgY9333rRgQignt6UYUzDqFa6YB5EmSH4yxA6GooJ9U5RGT7Q5Rt2Cqskyzax62xbyRv",
  "key18": "66Wu235Mhgr93A7rE8XvC9W3MJxhPRhmSgfaoboYZ19e4A5MySKfEY4WY4Grh5gNQMsYh4WMLsP2K1oDEHEeF8gv",
  "key19": "5AVucQD6gZSTWRfthV1PShg2d54MMDHuD6Lokx7PKtgGjjmUndf9G7FsLB9oq1p1mWNjkbNPhiFPSSVr4FFacys8",
  "key20": "53LsyjxNwy9GRGB2U3Lsr7PvQq623UAJUhdfCDJc8dnEe6ER23s5AkrEn4t2gcbmRtq2XXgCsqPhPDMDECnnffPk",
  "key21": "4mfpE8QkddYGP5HXVGgWccsDWCivqLbsXfHNbU8tPwH1GZY59d6fkYsNJRBoqqFAJa8ErcjeB2BRpAwNgibnhfMr",
  "key22": "4sH193LF6Y8imJwaeA2HWX8DN6RAJwXSQri724aFcwC1zQ4i5tT9rFn4ahorwEuydNuLffwwz9xRagnaSupG6B8B",
  "key23": "pyc9ZwvqFZiDhXtUUXKEfguTyoGhmcf5S39M56gAh1VhUgq3T4P2cRhhzUie67UoAnrYjy6MyDULd8Qdm64WMXu",
  "key24": "2g17KqceCRfnFyLNojRjk7PFiKDYm9eFu6AAAD43ASzmRyP7uSibnFMNUUmQJLMn2urGXwvzftDeDvSqQqvBHa1C",
  "key25": "hyeGRe3LHRCZEtWJ1mQGpuJXSSEFko32kMGfk4YA2uPLGS5VEHjwGy8rqyfV9o7FoDbqoi8kBfehFyVUbqkps2W",
  "key26": "3EX2WtaUVoFrNNQ1bwRmeGVUdmC9u8Y7JRTJWswwH6wyqyUJ7y8YCnxzu6WC5MdGMpuUnD8A2X6arhdXukNYEerQ",
  "key27": "4fyF2QqBR7oisYJiLzm1xZiQeJcHqSwASDUCfVXE4qQgHuCP7au1rq6DsRNahVcvZCaj25rVUeTrTxKCbQFzyTss",
  "key28": "59yXSJAXH3H5MVKMywhwA2QLCugY4AKG3bT4dn5wewWUTA7vxhsKZTbYsc2m2ugbWXwsXejRWmCzKvi6DHq3YcAq",
  "key29": "2upqrv5CZBVkumdfS8rucd6pbHnFYnQNRVAacJf1CyEV8uuVtCWbJdFrUgbYVodmftaNZELGK7dpwLgQNLxhy24M",
  "key30": "5134B6WGTYidgr4q3ApJsaydnM7kRH7xPYAi2tEgSfRoyzeLhcbwcuFkSAibsZfNNp7cUvfhWaPfgCtAdxeAnZS4",
  "key31": "2L43RRC3uHDVSM12CCN6s2Fe5Tc23GaK96oAXZAJgFa69DjJmpHCyB177YXUe7tTdQKaxfLMtezhgisQA26XGDBq",
  "key32": "3WK3Ms7UCxngPSY4X6fms6k3nzQTdMaioeA5c2DonDgvR2jiqXP95GgcCYA1Y35w6gRYgSHQYg8BQRJFbhfP6QGk",
  "key33": "5EAC4MLprPnNq3EFoFcecrHn9zXmJk3eaNqS5pzGqCzqU1mHzwKGhtD2A3z3s1tNM4Hbok7Rhc94mNn5gYBhiZZs"
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
