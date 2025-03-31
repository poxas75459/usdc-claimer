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
    "xgTXMJmymoUaF2DfBkdRj2415kcnuajn27kQJu2Zh97WwHFB3QV8qbXYFVREg9vNnBjbh93cUrsf2pp8MSYXHzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53sdeJFT6wdXdCwD7wL6pDZXJJrZcVZbhEQKrxMsnmziH84qLv9i737mgAq2JVyPZjhe1Kp19ALMAY3KVcXi7hmm",
  "key1": "2mW9tGN7YXSdjiWnKkrfay5nApqbs4Amicxysp2qmM4uoBLxk1V4rq6Ub8k9uWFLRKjT2qEPvZANLosvw5UocPYT",
  "key2": "2kZ7ZMJghQaCpwNXQVc7Cu4Q6gr9eVw5YYCVJv64dFs7QPU6CP3mu8ia8oKpgedt1EVpmogfwwqn3Ca4hLRQYSra",
  "key3": "3zzTaK9ywVoX6xjvpYzi1rBM63LU8ktBxkmTdxtan4i7VPZo6BEuPFFiQQkjPvJdaWAo8jcE5PDRuBFgAJqPgv3Y",
  "key4": "3mmfohLMHRMknpwJ56JDLPWtepkqzWftgYmbaH6HdYVUKZGjBgoHEcuYWt9zM36tQgpfSRYgT73a7mTp3KWdGZVq",
  "key5": "2ne3zRcFZvY4izceGzAcPPpbvJ3Ssf5otZWSMHVgF7Khu3Kws3LSBsmUnZQe1aTi46yQsUV7AziuW2pmwpxX4SWL",
  "key6": "27suZEejJ8sqDwYU7QMmDNejtU4khbVd5idSRaWzCwBuYvbPtAzmF19cPtTVVyr6mnnWPiL58zKWZ4aiTmztcYNB",
  "key7": "4HCtwtRAsvnVRMEpGZudyJMuWe5NFQo6VMKzcKXXXfq11pYrNefYajmnFULUe4CVs6BCfD6U1ZQ22Vr5bm6buuLD",
  "key8": "3Em8v6ZAYkXonHhg2vtyP4Nj2HZ36VRs2ZPHDKLSJi4uLC7anPfM7HAEyAFzavsmbJU2xtazRYCXJprqhdN7LZjn",
  "key9": "uQvBV8PngeqrxqKeGewfmy8HgfEHe32MF6BvHi6Vzg7rGaQqTJ833bMu1enSxxHzfp1o9YRJRSGpDxg9Wchf7fd",
  "key10": "2HtASuRQZAL8LkwnPLWCxcwFpQfWpUgQWu3sxZW5d4B5oymwWaX3VDS9pps3gN5uD6eyxQcDChZseRjJv9NLbhiX",
  "key11": "3XkBp6iCtTAyd3BvbHjYzT4WDJPoerzC4rXw6cN6i91z4TvQ9C4Xq8GKGFUwoVLY26oBb5HaMtZGDAdHRPctn1hx",
  "key12": "3AD8sybhQ9aLzqY1hme5ZHLEJioRM6Ww3F2dnDMiM8APdTsotFTfRaHkZANKSJ1hh4cNeHXhoqYaqwPVjTYJdEsV",
  "key13": "53RsHnpsBB8k6wDfWmVpQN8SfQWiBeSCjp23rQAtL6qqskbWpDr5ZASNTNMxkRua9NxFd7c68RfyNS46FzFdc6Fz",
  "key14": "21RKohEeeVwUtcLTTuyVnNMz7mFEGaq5kus8A3ja16XCAsXas1bcuDepdQ5CCtzEwVuqJBxrPdGNmgFXGM6cugHA",
  "key15": "9yjqycH6Z44qrBrwRm3jFTh4YbbJRqXuXQna3eWVwbXAkzPRiHT9Jm3E6szatNtBzANfv9MqNPWW96k4QnVE9Vo",
  "key16": "qDCyb5MP7U4CuSApuXqhJqkFGNUhecRbPhShNUVivzgKeKDVrs5GNhiZ41ymfqLx8w62aaQyeTKfzGUZ8ud4ti4",
  "key17": "39Y6EABAKhstecSJaBPHUerZ6X8xgCa9TgTPBiup6xGMST9GHztrbempHgPxoD3YtRpNvU8JkKuRhHvDKScNEkTJ",
  "key18": "4gYLuc8CwsWyu2hLp8tohLZe8iTL9kf7o7QbF4grZSgq1SngPMFzhVAcqX5FzuJoqC2bSFfS5MhMgVPcY9PgHo5U",
  "key19": "2s5UxSbjXW39GW6Js6QPDNywzg8dr2az8kRV97Vcb9ibaUkKbVVUCTCjH6P2f1WaT6q7LbixmhCYqoDrGYWf6hYa",
  "key20": "X4BhrE5nrLuHTRQWu2bDSjTpdYv4rEpT5sfjRAngNpguR8TADGE3qgDtUaM3p4UDVL2QUBQTgJiqvm2gHubNaiy",
  "key21": "2YhY1msWey2EfKqwF6e114CDkPFoqMEbn9fx4j8fapbKPprP5jdBq7PL8cUwL3n1LnX3SjW3gdevZB6TTw5jQ5pX",
  "key22": "2s3TaivtvrfHsY6dF8XDoYcyGkQfXoEr8VtPJEqNy6xQh4mTLhpcK2gVBJAVsFvVQrsrCi1y9c1XHMrVDPDXGGE",
  "key23": "4o7k4puuCE83zvDnwDtxBkpNrFHXeXYMwYXsPGThAmXGoYwz6AKDzJ9a1r9aAPsX9yhNkCqUywdjKeA3TYHGQQMk",
  "key24": "3UszDENr79keWG5CdALxyYUVg7SCdvkxRCnAtkDUvGKq6tSr7x36YVxws84FkPjbYqoxGtUBbzzrd57woPrz6R91",
  "key25": "2Y8gjqFDaiazyqyzjPqUoiNMybxmwhGsUMpxRRUNcr3CcPid54Pyj1TxH9P9bAbLzYRW6j5GB1741SrevL1QTeSm",
  "key26": "UdXQPJRFxpCdu5dFcp7oHHmcuvnyMkFQ6y7soRG2bmCw1ZgGUmopzXZ6SWZ8osbojNojh8pFvmEbkKZGYQUHFQX",
  "key27": "KSpRLqqwxy4Dy4wZgKQbZcmqV2nqDm7awbqu4eScCT9JAErUCgQoZPrB6qc5is2BVREnedrKTF9yNuHoscRPBeK",
  "key28": "3srwaJ64yDFiqHdALT6kwSqhwjQf4VFMyKhpQuz3hJ9x7NxMnrLvYWZbEEPnEB1RFfdMWMWGeLXD8SFuXdfztMAb",
  "key29": "5TdSgcdZjkZkGChWCe6Bgtwr1Q4YLAHEA8t7L3uQs8S28KFwhwKXiAe2vW75WtTB3jnhcPz5A26jWQdsoxtw5wre",
  "key30": "3wzQa9CkjZPLgXnCyThWvHarMXyCAcmR8dJm3u2JkjeRKhdUf1fnaBmix3LtJzgv3hKDwRxBVMmD6AgJSsZ9QBfv",
  "key31": "5p4dfMjubHrWsGE9MPDZDPLDAf9azaMJA4kUeQ4WkdwhRwPo7rKcvW7qboDzDDTQqkiMHoRRgXVnwyp4dvnc5DLX",
  "key32": "2x6fkv9zNEJPkqGz6SuG3XFKs5h3hoGfvv7k3RcAAEJBM6kqyLxkEq5H1DR7mt9KZiKbsafbXe8hgLZfdbF3A4v3",
  "key33": "5iHWaDshLLKr5aBBujaowq6bLoVefDLAZac1B8vMXfg9umQMmvFHpFSAUAvD1SvL8B6S8QdThEmsBsZViEotvxLo",
  "key34": "4SShqg9G8zEfnzTnc3f3Kg617sGRuYgjeQ5Zra139rZ937BFMcd9KH7m8onRWSvGDh3c6KXcVVf223SmWyny7Vtb",
  "key35": "ywiSD5LxgdH9gM7Qnzp1aQrZzJkWqXctNJ6wy4zZRz8krN1DiZrVBYZ6M7CEHjNE1MtNLV81u4sv5zfHYPLpyie"
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
