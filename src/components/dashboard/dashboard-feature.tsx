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
    "XtkeAFaKFBGwgurUhdbhs8KAMRTNYunDfenobqSAU7diVHCAcBd1DgYrQeM2k6hTK6e2aeDRtcgGLZJXbsD36NU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gmhu8miEYp8B6mBJFDwyYTiyxdkFHFocpjJEbAMSDzMByPNhJhKqmrP8KpjcDBxtU121Wn1ijX3qFt64xkq3XEL",
  "key1": "4G2cDFH2g9TYoPPNRjKArAzwXaANenemEx26gpCTTWtTtmeEzEpPYPV8K6k96h6DNCxq54ttCve9hV3NzwCxHT3s",
  "key2": "4UQ7GimtpwHoezVEqv9t2b38DRpXRdSWEb86NCNBpiXdsaLj7qDUTo2KbvMxh1P3ApZiBA6oEBzw6rbfmGrP5J2s",
  "key3": "3mLvYpxmxTFedg2EQQXTcERPP8knf1FLDojwy2uU5Y8cnV7nZijCqrJowv1jZC93SgndinB7DJcKT9QQMsg8EkTt",
  "key4": "3sBg2zm2N7RHWzBAjkkeJNQaVGYbNptN8x4JYmnRE8mVMpVoAyKFS64oDx51LX5uH2ursjxvp2QUxwtAmnV3z1HA",
  "key5": "5QQzU5KV1TPxHshe6vx5VSDmLokNL6jzNxKojmRziwT7SpdLaYQs1DD5NKLSKFKyBgHtoGdN77uN2qYm3uBcXZ7",
  "key6": "2rVfsnSYKCCJZbXiHKiyDg9KNXTj6P7XCqxnTjdxYUiYsF4qT2CovaQdPzGQpZAXEEcY3VegnunLP42ZVRULTzxj",
  "key7": "23m7ME5DcbC8MjNYoyPj5cefHsKwNH7jxmJvfPF3UgtSa1N4SpP4ZwwcW4nKVWGAxyN6SPYMDc55yqznWkb2xP1v",
  "key8": "4DabYmWEEUEoTKVkcn6YaqMVpNM92zZQNvTSo45tUcgcuKq8csypvHKVKTjWHWUQNAYqC2x8Ry13daMaFdWKwfrx",
  "key9": "aDCPcjbsuG1H2cYAUoUuMgxMFxZYE1Lk5GkfqggQKmLHm1FpFtS8ej2eFefZwMXhoBgj4tJTZ6bfWmqRzLraNb8",
  "key10": "4mSjP9jNwfHm41H17aiWHVfE8GhzkYF1TkDZa5pFseGZZMEn51UD6fPCdcDZEZ5AHRy1jiidH9fcDCHYCKjWWEmi",
  "key11": "m8QfqCRTivoHrna8UKnfwSsBQeZTm3abEnUCU5C1mUFo5FKCKgXHsnyk3gcUnjavbCrexgGWc5rg6Qtw4X5Keck",
  "key12": "2gHQY8Qgo8CqC7uZBNo3oLhNZ9MNWEEQTGx3D3bFWw6884LbEiabh1EuR8dJzX2EgqoUYUzb4hj7U5dnPd5jXe1U",
  "key13": "4kBLwqwAjuqPA14d6H6GG6Nw5TSr9DEWSAW3GLMsuAMT22kfaX8UqzPXnooePB4Ub4b2aQxzYQ9zZqsUMNbHUjrJ",
  "key14": "3MqGMiJq13pK5k7S2rHX6nc56aJNeuQykCtgixiLd2XDo2yfGVaohM1hKw4HBqBgt6vaMSA9Rcj5UHMdi4UdWbnD",
  "key15": "2ft1te5VaUdE1a7yPstEKXXxe3NTEaS48LqECRRt2HMDsUNckVrYzSSzfwpK6wkSgLnHhbErdTRgyW91jq7cCAzA",
  "key16": "5cr4o8FoNSCAdeVa4w9YVwYFK4Ha4znnJiUjWxqV3H5aTAADvnXAuiDSvAxNLDLCjMg3wP3D7H4wooR4e9KvjUDe",
  "key17": "4rwxnuSxqWB2qEJygG3ZfnGSCaFYfa3hrRqMesf2UzaS9gbHWeHcyzJsMpkvPw5VDuSdz65GzsPoRuBSx5NrDxpT",
  "key18": "4Zfp7jPoZbXTMiaC4j5PTQQuHcP79fYQFtEQApyiwb5djWujHuQCJKqvbUtmDSh7QhNyPCNGoaKwQk5HHPK7xrtw",
  "key19": "5fdzBcwz4LQDi9poVgeaU2XF5RFRnVvjBThmK5G7QZFx9PJF2YPcTa2hTx1ZYT83wVBgr8kqVQaMKZjmawvjGjWU",
  "key20": "K58i8seWqQZyJSRwvqCRSqaxMvS77xRrUE9AEPKA1afvEw8pXJqAWcfBd9GgiXjCxa6fGL9YLNA8G1ZmYqSybPD",
  "key21": "3NVPHUYcLukEEu3hPRv9UamTJktfdnvvvoF52xfN2XrLdxwdG8BBAuF7wjXvyrzhzGX4VYtHj2pXW1MPFaci697V",
  "key22": "568QyxGVgH21Y1Z84puW7cuKqrtkr26LdkW4SgXXVdy6ryaZPbLVuwJ4zpxhYZR1UDCgY5cJiK26kEaSqc5Paijw",
  "key23": "36D9tJwctCwRRpNJSQzaNB6tctiCmKpu7merves9RZnZuLCb45bVrg1ERVyiUeuJFE4VNsSuoQcQVYXVKo56oon8",
  "key24": "51NESFywztH8uEZGL1UpY7gWxnAserMSG4xhe1KgdEMt2bziJT785Wk4U4RnAvV93b6qXrDcGwkbUHtEXiV6HVva",
  "key25": "3DLV2R8A1vd5VCEtiEnrX7C9pkz7v8CLwq2VAAwBkgPp3awZE1QggjntSWUoZKJKLHVKEskgebDTXobX3y186EFo",
  "key26": "62qKZwsus9QQ9Tx2egNJCDmciy1kwNpKbZW5iSbFvZySemyKVwwkvM5XyyC9LUPWwavCLCawGtE3t8aimhjbjgYj",
  "key27": "2EtrYAPxVgvmgF4hHkSibZfpq3aTCTQMV7n8vDNjUyPBYXXeFnwmagwwhUkwchiTpA1LoF9NUYGvAy8HhiHhHLmE",
  "key28": "aaZ6GUjYAb5GLcKu6N5ejRRhQBkcLotjJ3kfaNPv3L8WZd9KnGERBZoYziMQBxKFeM7LC3XHX4MbJSJf8A97Qx6",
  "key29": "3KMKQ2ZunFZycJAKkFb8TbSVn2RsGKZ23jLojUkvNgTw9A7QuzVLeF2AZPtpxvvgH5pJFjzwJwtrfYF3gTR9uoB1",
  "key30": "5EDSm1MNuykoSbnHJEBzHsyz6VWyCANimYhtUwygNn7zEvtG98x1qgjbVoMi3xkcdacDxBWc4z3WqT3QveBNoMVR",
  "key31": "46ooK36q7aN2ituGHxdbMcmFCJaTZcz46xUZCpa6tahxuydHSjF7gwU8YuKAUC31cJwSvjm7WqSWzpTztZbzcYvk",
  "key32": "57GQyJzV9D2DgDTWHSmDLPRPN6Kj3AZthcQjvkwVPkNiZ3XJKkwX7U6HNRkTycFiSf3WR1FnhYQRpiznVxYqA16M",
  "key33": "fU7WnvKc9U6xhNtbVFCmqUfUUorLL6n3L3itwAWA87Ecpq3i1vnaBndSQ41Nqd7txKtvyAirrLVNUgoNU7CM1PM",
  "key34": "6BSR9C4XyfNjesYsp3eM7Xpet28q6yETiBNUCS4CQtwE37cWjYHpAoYYNSeR9FbHTY6afYDrvEN5j6jrhM9wABM",
  "key35": "4RE4fqVYEwt2xnJkq14CrBnsf8ACHMapPYF69Pr1SUcuEirbs3G8uw3xRhWxXwSGeV8Aey4Nki4fvAygqZgx6Ewh"
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
