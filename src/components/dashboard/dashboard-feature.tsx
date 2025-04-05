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
    "3koeUehaMRRKBfuRnXNn6ZvLmPycTh9n3rH6j993FgcZr4bbBLdKxevTfcgfDZw8JrKsGH7G9PPPMBXYHqYZcGrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KJvNiaGyCMGVkzJc9V7KBV9eJQ1rtT3rNRV4cdumphEUGiDDcdUpEh6gSxMQvZTpFqettJUdW5JW3yzrYDwgvCc",
  "key1": "sfkRvNJhE4z8FNSh6EN5WuWNistEaGN4GKkdwowTmnS7pp4JrQjewvU6X81XSZS5U4Jb6Z3dgL9g1xTBdzNESJw",
  "key2": "3JHfP8QRofDpVgE5WYGBUxHEQ2dw7rhScPE1nYbncqiZHKk4nFMqpMTSE7pj96u6KJtEkZXHibmr4sVaLxfbqtWS",
  "key3": "iNCG236JxpDkhRWJJS1YcZm7dvYiubbybs9w4zgYsuMiAPtoaJxr27rtde7gjZpVxxXojpoCGVhEJnDZGe5XzRv",
  "key4": "53JTE1mMiYd4x23PqecLJ97PN2eDoGLei4Ut4msEPKR5aZAi1ae8z83f2B2fvbRTH3ggPuEFvHBYE1XLjnwMXF71",
  "key5": "42p3n2kpi6zWDK7beVRNVY2LWofKYfqNVSFTpaYemGn71g5SMvF2hHfUriVx2zCrmYNYYgpdVqw8tB6z5Tu5rhWm",
  "key6": "YhpMfRdjYCm1qCGF6qyu18CShxuzvCGfSwNeiDEJ2xNNuLLzRUCZbiFwRrdwnmozN3gqXam5cvjMH1gzJzaatqg",
  "key7": "3k6UL1Foae9dBLQxpCXURBLoAmzFxVLZnTed66Zm4a6J9GXprsRJG9e28JPKpo24akJZDqQBdYgovESAepsvxcNm",
  "key8": "gQHfuR9kpsMkJdeeyaxFnGZJbgfYntYBrvHnUnwBiKNbRHna5NQVMvMvxvwmjcnkZtxWhHoK1ndTt8JBk4qB7uh",
  "key9": "BUCSRxK4gUamU7mM8HeQMxMTfzA8pjyc2U5j7ca4v9x8rDYSRbpsncfUwSJTgbcnZd5mAQGq9HZRgwd5cBq2hJM",
  "key10": "4UJQDx6B8EQZHskVRTmHYKFJ2rxHe65eJMWUXQmYH7tkn7uQcM6mWZxZMm1SpkHgxDm6EUvb2AE2qELv9jj3Mrj",
  "key11": "2dqvqRhatb7xSat4hk1KzDYF73psFXcBhqWQbNm9QR1WdHWtbtPkVNf4xRk5RSs194GJMomvZ9XSgHzNy9BGJJL8",
  "key12": "3toHxG3aEr62vU2R6F94ioRShrQ8uF7gd89kszVHLR55S8J21m72tUT7XMhigSotNe1rSPmB8y5BVxyhQ6Nv2ojU",
  "key13": "2TygNRcGX38quEGRTvmT7bqKrokT6pgvYbziUvMp4VAAxFeG6YBpKn8atMg7wETWT2iYDppXCDmgp1WqV6mvzdMV",
  "key14": "5tpPzGNoCDFCxfAB5ukL3yfjppZtNsuU2SZ8L3cdRMhZGhHRHhSGcpYtaqNXaAK7hBiiKsCdZhF3pvisq7AdaChD",
  "key15": "2AYrr2sww2hVUHKjB4XS54pTTRZUY3omUvEVkALeKgN1b3xHuRTUQ3FcNWSUXzZDD8Z25R1d8o4x1czQBqogQMjD",
  "key16": "3ebjuy6zbyTbfqD85ZyP5hfkAMynwp7pjt119w5GUocqvTkqda2M68ChuxtpMz2qBcUbZXS8sZZUyGyxvWbPUaf2",
  "key17": "2zaNbyVxaqKs6XJkyg6Pfczg9W6QgYU7NC2JUR5spLTCqK5rxQXrEWvpYB8daUGpRGLmkzHSoCZ1L2eJWkYtd8jB",
  "key18": "LbLHg4mn4xsfzQNPnwSRVPaiwSkswKsafqXu2A6yjdqcPFdUnWAzxV1Kj4C562k6D4SmUd31ydyhXkdhvgwVzQU",
  "key19": "5wLwuEA5noSTWPMdZEEwPti7WvY8KQTUtp3YjA4smKCEbfXPTYvL46NSa9JDkXHNfEvpcHkRJgHnf69kQNpX6CiP",
  "key20": "5n34LyC9ZUtt3iJyQiyZAAfuiuxgcFSb532kzG9adFmTuFFgGM1D7gFkWTJD6f3vKtka9ww2JfU5AemvbHgz6L71",
  "key21": "4cCgpYcsvk3w9GdXwasVuYcE3Xa8vAqgSQiRYW5Y4R56TpGLJbzvxTHC12cu9tmmFBxCJebmE3pW9douWrocYk6p",
  "key22": "4QXX4ssVuqFwakMy98DGFrVtqd1nTQC6kADZzscSdpTq8RC2TbXkcLPRiFzDUMAspqGmd28vNwV2rXHjZP6tTbZz",
  "key23": "3naoUMinxi148iqgqskJaquFUdudUKeY2f3osKNF5m1HbXLyHGx9QkoAPGHKiK8HsoJsKyPPuftSj5MHwMggwkRq",
  "key24": "36J4fZWxZzgYCknhj4o7B9qo1WDTASTFuahX8BkkMaqAma6bYamXT6pzsvNeNaWK5e3RWHbzSGFcbWWCrLSj4eoZ",
  "key25": "4MTxGCzz5g4SnhwRojfwLJLgRukzMy6icqSWhXs1UK8PeeKUnBpn2971jvHPSbswkNhEtvGHbzuYQ2HLdYrnCjBG",
  "key26": "5ucNkvAxziSeSc561Ns3GmxonZrhrNJiRUPPgwNF55NPrZJV4xxNcxVKRUZbq5nLx5H4Vm1F8AkciTfLYVuFkDvy",
  "key27": "3mXSmE4G1RrmHTHfK3sNqR9zLTpfEfgh8D7ZAyUXhbVyjFKuNnmEwgWN6f11ZgvfqhHkPEssRHAJVE2s7ibBk5st",
  "key28": "uyU5aZKTsoQtuBuMiHK6x8uD95xNj9FB1hMkBAfhKhtXzScggow5RNG1uL5LxSv5bXWPkjiBso1FKmhZ1q7BvcL",
  "key29": "5xqfYfHQVPFjk7VzoysPHZoVtwsU346PnwUEprBFBcKuKGSs7641R9tbW25VyzZmarUww9LFWAizagc1GLZ1QbYo",
  "key30": "NfvqQ6m8Sjkn7XvhNZahPEUpeU4ehhwSEeB2sAC3VJFpGmqXVdcsxXjU4w3otEXJRnLG7NJvqcVqJMoz3XJS1Dr",
  "key31": "9BtV7FW9kDJr7q2MTu7q988GSswAXBPnaXHBnGXWGt68kWTsbuk68KGsAeHVdoKXQ5Mc6Kmjnjub6RPdW75uSWv",
  "key32": "3sS8N2bKjBy31BiTpPGwKev7VHWY6GeV2XHHkHWLKizGNfyepH24aAZmh421S1ygSGdMg1XktDVCXUcHyLnNfx8x",
  "key33": "4XzZQBEREyUcBRHqN3F2J24PcDTEuMyJV7YQBVxKi4endYBLcWr6k8TPLjD928te7F6cwQsHDMF8JZqQz3PEFNXP",
  "key34": "5DoKnWbGVxKPefip3BPcVtPA6twZVcsUrRF13VRKaNepBybkZ2AXwQKc2cJ3rv9kixQuSwWnAqTziAXE3BorrNAU"
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
