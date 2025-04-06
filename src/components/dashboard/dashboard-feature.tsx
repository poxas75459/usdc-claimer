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
    "5KSbdLsz41ZfLJtZCAjSXucWxAydnFCE6xT7fRaJ1sGo6NnjuH9Xy19RsL48TtKWZxF7Ne2WRHfWo2borXyLvvGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dejeQfKjpqedsURLAq4ULcfANXHnvaATPjA5pF1qjxDyMSatk4MX2UcTUj1Zrodtswwny62WXQP38Ht7khC2CXJ",
  "key1": "5pXSGAim4rNUohUTJmwgLRPofb4ChGUXFW7hciRV4vKC7GQ9ogp8KDtBTEuC26QWzkPxtxzNgQJ4tQKR4apzRc9o",
  "key2": "cqpbGHFVuhc8YWkp5bD52YRMKpYNoJRCNWDjeFBTCkmnP33Wcy3noTUNXsiuADRtWg24Ymt7rEopV43SVKJX5tf",
  "key3": "2Ew9yWRDMRWvqbvF2icVZbyyKcXq8y5ZymMQDfg5Lduse8cKXcUVffU2GFcY2WoGDTJgWLKHdFU3PN8xuM376Kxt",
  "key4": "53oNZVmEnW77pSU34hp2x5zNGQ45HHb37ZBTHYqsDXUfs1pMz2J69bRGGCNtkywUTPAyAsRgR8QWaxERD6Kj7nbh",
  "key5": "5srAxT44pGSvkCbGWaYaPXF7JCapU8JkcPneYpgZjdV1buJ1QYtrFS2kDbvLpVu9t1yQkuCVxqGfkpqrzbh1MQ7a",
  "key6": "3TQzv9a4TRAa7ZuiDqfFoaqWAk6S1WSmp33E3z9QkekhzUf1qTgDGvzSNcAinsfxebx1Kf4QCjjkKkB9X5T2gnnk",
  "key7": "5z6XwRAgK5cQrKJBiMZGkqp3ySVQwN9EWHzQnTthFZdnJKXUP8XtDC45m3745NPJt4DVfSAfWtJs5xX5MAPbRctp",
  "key8": "4anXbbTgB7CxzHRQFjwAFbvYLpHcwRKCwz54iMvpAkSx5HXoHSfeGLwNqAbDxD6AXsXnh8BSpDgfUucNyYwXJQhq",
  "key9": "3FyDGdtNNi55xmB7hmLX2aSaNKcRuVpVWwhAe3TvSz4GKKERKMMbnnpKBzeGURB1rsqff4gyk27A4KtF3pDai9G2",
  "key10": "5mnSHUzkj5DFXAuw3dKW1w8emjNcw4nhpoBXPLhMDMP7kP5ynz5FdggmJwuEE3nzmQoVEL7fRDTfYH1UoLJ5dz59",
  "key11": "5EwjxXJ2z57nj9PWK1z5GPvTMWc8sq4e93Fk9nJ2PWWdoY6R2kdu1PE7nv54yKhVpWVsrmvZCB2s5LCvA9cFkiot",
  "key12": "53AHJ9cJT3o3eJfWsMYCgBdQkrcKFFu7gQYWWD8ca4PYSg22fgf44n6rkVKV2UbxAHBD6gbczcuXvdhuECTedge7",
  "key13": "2oNxKdaWcKpUFojHCfntF8hG87xQpu5GhcX81rB2dBDEQ3MZVM5NV2WWNUKgMXfYxpeb4evKkcy6hbm6bMqeLMw7",
  "key14": "3bP8fNLSwSmzgkXV2YsBrAcM3Vc8HiDyv6CKY99fi7QBjHvgV95R4FJCCVy7E2EucuLZVo7JMmNS9RcvLEjQ5hxw",
  "key15": "2FkjKtcJnUa8oxjTFvZC12idaz7iQkp6PtsWBeNAumNZGhHnvi1n7fecUwnoabf6QaPkCdyyKdrrh2WVhGqJn1XD",
  "key16": "4TRh4AXEgMYJh1wuExxDV1H5Sn86zfQ4vprD8ByBZXy8rNmZaVgqAQqTyGjAzn9zkq5K4pZ8EDYok6mpxceUxq1S",
  "key17": "2pj3tY1LnhRbMgQ4AVZEF5QSVDf3Lo4QiC7mATETDctD7EAjsp1WUz9omPLE7NVzmkeG637tPG3erjXEALHgWKok",
  "key18": "23YAm86qHQ5BeMCtykZgNnMkKqdJ84ChfXD7tH4u9x87KHssWCkZck1Lx9X1JNoisJjXduJU5aREo8vuDLEMfKf2",
  "key19": "3m2NAstEdffaSC5Rdb8eM1MVKdzzUY6XApU23qvyXhVxyhekM3LWvwmryvMatPAKKncKhjpGK3DBHXiqxGcWY1fU",
  "key20": "8fuTmuCULZxhHC95H3UXWN7SMzzinsmkLxv4DAqVTVje6Py611RncUD6TqvpGYMjCR3iZZfcfiYjqY8ptbw1hGL",
  "key21": "5ZoKymQbe4Ws1R9jsuXUojYWZ9rPUavQbVunrBZrGX9spEATva2MWEtDova9kMUdLoEA9mYkks5pEApWc7ffSGe4",
  "key22": "4RduZVPY6iNFLN7KMtXWotAe2x5KmEjRJYEvTEVf3oGvcjqY7nLunj9YTKLPTZAWAwRkEpDsVeQUVVmrNUiKHn4C",
  "key23": "23cCh1p2U2mz3GPTTkUww4VXGb1x7AqHbYVEkYudfi8DDAXg1casKcYGMuiC8wsLjTEMgwFN1uLAiZKRV5KTPsyo",
  "key24": "4wnQioho9w9ddFjiSdmM6HeZKJrbKNgfvQejaAD2dpe5rLmCbPBTJAyKjjUL2AXpm22btqwE7wAPNxHjnqXKPhoN",
  "key25": "2Wwy7bx8LbTj6MF2bYvWgFoFazdmNKswkmzmhNf8m7LuQsrRo4UkKpmrWgmapzDz5EDecZ7xsLa4GjfYJravN8Eo",
  "key26": "3GbUANFUTNFdb6MaaMWaLWGg6ARtKT7y5oMw8CJZiuHuigXhmUMLFcpMRNSmVLnKrXn47CYxKt8D9EqyjYf9QRkw",
  "key27": "3tkg9XKR7aPhD6rztxqye9CZCYdmxLZmskrRCpycSQ4uWndMEfGgEcbL84yXAeRvvHbmJZpL6c96L5DXrqBGzQKD",
  "key28": "2xweEZRiA2dHZpPP2gAefGqUc6ejkrUHKK8XgVqjwYkYwCbY2TqbwgE2iyoFA2Lkbcg392ms5TQfg6my79B7mHcV",
  "key29": "5ox4nc8LzE6AvJibuBxAw8yh3rr3mwX2bzhu26R8CRKPdPy2uycxEPCRNKy4UvKbHnAcusyokNNZR2y8dKTuFfSE"
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
