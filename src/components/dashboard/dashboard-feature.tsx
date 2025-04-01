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
    "izpr6PNctmpehXMukMt9vkWeL3eiUBaRLfkDAfHRibg8FCvWXnhAxgv23dWMDzPPEsvRDodQxoGtsVZqtXY1DgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHbFVSdghyC6DGUgDAmkiauTe49b5iHhWqZ6JJEg5RiPGE87fF87hNffxtMcimothfTwmHZ5Wfb2nF9qKKrEKUn",
  "key1": "2DsP5Qr5Wr5kqW61YhLwAFMNsSegxqjV7z3bCtCQs9TQTKSKTV3n39nCCLCyZi51NB7BdYuLSs4MRrNby7fwHq9W",
  "key2": "2GxPZYqGZw8wf1epgSFbpsJM59BUZNkjquw9wPcSkG3UBYwWgbHxQwkZBE9Gw6ZamayoWzBhrLJBUveAg2DDZhVz",
  "key3": "jXc7Uyv9xCT7MWxXyggmyFaqwrz17tEkBHzNtBfr9HxxUkX4E4uiq14Gv3XCe8hFdzcCDKLRgCckQGKp2FZPtbo",
  "key4": "3vtbDnTy4nscAPA5MeDSst5PyGgX2vQFx2CfBYXoPjFL7PL5FuGXoG7AkiqfUDkBApv9uTHbt9TScKuw6RSscWgj",
  "key5": "4Tb3W3t16Tun3Rj3crLP7EBtGheiXeJcUhUZSUibRaKnYej7o1fuEtqoL4Z3hKpNGETjk7KAdRXtUfqwb1QaWUL2",
  "key6": "371DZrFLUZdwgip4EtXCxnYAYNXTrbKdiWhLzQRoEBLVYxqMvgZQbBGCRA17AupYA2Rka2hwRDj6tEGGQm4NkeGt",
  "key7": "2gHhvBnEXFJpBJgT5Eg7rfLbtqNepsjGixYAtHm8QPnKpkCzXdxb96ZLmXMCx5LuTYfcPJSoYW8X54edWSey8jxV",
  "key8": "2WsXpLfLjCdjdtX2SEJDwUpPxfzWb6d3mywAT3gMUYgL5XS1vYvcwQq2X3AMrhWcHsz4cXV81APmv4Bxok96DMte",
  "key9": "262x1bFNtJRwjjDEfj4jvWRzNVwjaWzsvmTdPiWafN936qyYNoVHQQoe9jghVbepxCMRi9vc2Njs9iuLXDJhfxt5",
  "key10": "5HowUbb8qvFDCUrc1PvCAcSDdYKQ9dNQKyn7bgmLx9jJhSvr6JYtXJQ4Bui64PHaVnrEvGz68UrhXTE8bioLUeGn",
  "key11": "5fCHYtv6cEpakycB1NAorCoKVnP8Vz1Fg1vQgnVdzs17Csvn2Q9r69kBFdSHLZr7fssgLYYKjFszV6eUeEUDLhF2",
  "key12": "5XCHfPUBAwVsMN3SzHUEzbmHoHqi9EbZNB2zfocXEvGwo6WVvLArcM5jkUg9YgWPzgrwyUJvuwA6M56vuvYM2hR1",
  "key13": "5VJyTp3iUYWiHmV5ThypdM3ffXoWAJgt5vF3v2qSXGuTJgyT2Le6JvkE3snEUZeGjVkaz3SaUsvySEQKYTrviaTM",
  "key14": "pwJrxwM7wA38SSGNMsvoS4QXd8XLD9oDv88RjrfnzjTDoiejzSsNGbMywm4VoiDJhwHZ7XgBiw1heiBL3VLSgXm",
  "key15": "2TH4C1mfeCiHzQdFbGwe9fY52sx1MTFx2AXxy1ebP4ziHSRJkpcKEBfiD2fVfCAkBW7QKHfuw3WWzPw4Y3Z88JYY",
  "key16": "3DEsYohTb9J5YCqGYMy7ujjTfQCZT6cvQCMHX2vskb8AbRpVoGVKaifvVyJf8qXnFThXcBTomoTJSjgQ1vT6JwhQ",
  "key17": "3z73CPTSYVooFJ3yZn9U8SmAKCriCDibvK3iVSgpbTED3GGD9A6poFDUkCz4K1cK7FUEiQwmLNxqpvKmuXyhw3pB",
  "key18": "VGSAThSGPq99KzkLUzgtgWLnJCrjNQ7Fr6QSUAjU7QzcUQt1yN6R9cCYdf1B7pN5JMEvN7GUjEySpQxnXib3J69",
  "key19": "3QHyDJUeEZBWea6u9h25APicLjTvn8g7MywXPCEzfjADfpqVZ2KS9yodcdcmEUKGqXnkbob2B3bRK92mx9VfEySb",
  "key20": "5wcADTyAqHf3XSrAYkXJmkz9M9r347Q3TzhjPt3YwcCzezDhwpAydkMgCY7JMUaJQ4PEXzTs7AEVR4DNJSd22Fpn",
  "key21": "bbYYTxg5XGoWM74ewCrJY4rXC6tva24wTyR8cPNZW2DjqDFF5CXrP31kmesFnMoA9DNSiKzuaVL1eeEPEpuSFfM",
  "key22": "2M6coi3xTLat9bX2toNCttjevmf2TcNXs9YCcXJGMGquUJ7GLKVJAy3qRmpCXDHqxGv8gz3zf9mE5F2FTpUoq968",
  "key23": "PMBxY1w5iw1rshaj6sWWz8Zz9pdr2c2XGo2pYCDcS3phVFEzjNmAWFZEtRCFFpKiuNP5baAoc82UfG1sQciaZkK",
  "key24": "HMxGK2Hpxzu1cGmKD9SY5QVE85YSV4pybsWoiMNC9mNinLxdvjrevuBM2Vu7zPZpzp8PnewN2knoXcPfq5ci98p",
  "key25": "2L6HxWZHX1vu6EMLQSoEBwqJ3DmsUGmsRP13uwFQUkuRu3e4MZZojexqAGeCt1yy2zkf5LTKdpzxiG6ephg8WaX4",
  "key26": "5XHx3tDVMCgNK7oQvvbYMmJHSf3zm9t1buumux6wkKzYaiDpDKbspH3XBqXC5bTdZLf9bDxu8uS1D9LUCZ7wBnbC",
  "key27": "amUgF4w6EfMFrFetVHvYzJSHuXbGPDM9YmRtW8Mj55WipRTXzjn5JC7ADm1k3WKZ8YZVaJDJv5Y5J3YLMXPLtBW",
  "key28": "62CDhFneVLtqymHPda37AvcVVUbh6qLbHrcYk1C1qwcAxakEhM9mrUD7a5FEKdeiHtipGak72W6Vi4pDp68zj52j",
  "key29": "37uzrGdzU9cmWAg3dtTAYAabNHkhT3AbJhJuEaaRbeQ48yWa7oKJNvXJoHhErb2HNcsNQ7QxGSssatUd1bug8v5F",
  "key30": "4d5TgueHAMUSTQ8bMFd581shRRwXZ3wLDB5dCLayg7z396cy3G941fj9AWqJm3qfwx7Bpwxq6gck914WJb9pTG8d",
  "key31": "3B8xkfGNgbnbrKB8inVhXYfV8fPXGLxTJEt9MEj1aXZWQEDNRFPQTZLApNR4xd7RkwzNxsvfhuosJukJ3obcTHq2",
  "key32": "2myZ2iMWWtsnXcEnd8igj6NE5JHMXsz5tWhx9gkRKiBMkpZkTspdBGEL2ax3PkNCBWJq6AxaLX3CAn4nAHre7xBG",
  "key33": "4meJkXivUXZ3T6qFgwMM8xDnms3kyxzY6SQcJVTguPrvG1ea78zf3LNV7yworAWKSZ3u5xVzwBS1wf4dKPU9ywLz",
  "key34": "2icwLbzPiAasJEDvf2gwTA1SETJB8fFkXWKTrsZ8TprGcbhd3DQ8ZdDUmDYTx4phQoTi9aTGq1WPikqNrmo6TfeN"
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
