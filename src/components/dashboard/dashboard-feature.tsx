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
    "3Bk1h65AeGje33BYjcpTsQ4qXEYELqtdsJhB3M9Y1NCsAaRURn4vscyrom5Y7uzm76daA9Pa5y2bHqwpxQ7WbzPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51rVPzj1r3ZfH8y9U4U4bnVM897St73Xa9ikiH77ojQ2tdqRD7eNLdUoy3zDRhX3zfHzqcHmyUk7B31i6qQ39x5p",
  "key1": "35iZNiewQDBLciQzNsBMytnWMdFwvzJg9Lmn6a8uccZwEtgLqU6YmqgJUHPZihMxNxFY3vfR8T9HTcakxL1C3MVm",
  "key2": "2BJ3qZs1ySA9YRsHJ6yoHMZmLLngnGYXBnzdwBESZqTGeA3Cx1wncJaPUX5ep81naLArFrVZPwQc71vgbEoYMNis",
  "key3": "3SmoX9McmUgWoaZPaR84jHDDJTCymgTAyVMrsE8NDmcz3WUMwBsUsRetUxpqZbQpNGM7gQkaFerTph5LR4GcThju",
  "key4": "3KyBaySfu4vjjpDDJZdbKFxogCmW7rPLhtyQGjXzuXPEca3XQZg3XnqpqCP9vrgaZFqqepB8jdZ6ajMahcsPpQTa",
  "key5": "3LQcKi18DVZLxicHd9pHSb23B1fMSSBvMnsfHs9gtwDzY6LDHWN5VSaj1fWwR1YTmwv2WZ1RR45yf377Be9mxzks",
  "key6": "pyizjUmEYwZEWC5RPTQwffqi1VwTHZVXdhUmuEvAXGZKjBtyHPDsBrhWJ6t216XGrF8ekUtqYxNUBy16uQTxQra",
  "key7": "4ysebgzjTm7zyxicDRi4ty2ESsGHhK6L187Y2BMptDwMy8fp2Tr1WeiiAyZVJfKJcS5S15bEr7CXF8AV5MLooxE3",
  "key8": "4zyjep8rqcbZ7VWYxwJx2qGwQHnzNjK2YkE48YRqEwkm73sSvqHZf9uWzHrQNDFXGSZA2odArXcvRqt6SQQmJmhx",
  "key9": "2voMDyfL7v5PALwo3V6AUJbPW9Maa13erSdDnYVBsbyjBwgn6mFmDZymY2KzsvMNukaTsu12HSfM5fo2io3r5n4H",
  "key10": "5N4WKFTHR6WP2sUVgzw3fog5feDgXEBCDFZhNxSeYJyMnhgCtnXWS5AxJTRAAEW8MQptRqWVtWwNsKxmtM5TiQN1",
  "key11": "3gTV8XYPR4NCVSs2mQ2Lzs7FKUoLcScRpku3kx6nQanEAqRuZTDyU1KPwupJiF19zrh8L5RvFUuoEBkdkMxGH1PN",
  "key12": "5qD3QM2SkMpUZ3A4xw1fkRkpfiabCi1hzVrTtaH3iQuiyc615u76tRdpXsmPSMP2ZgZ6Khpb3zAA6DHMTeRzk65Z",
  "key13": "5ZaPFXePyHFUTXPhs7gsvptCGLGDJXa1nnGEzrBqborTjCRBUP4xYkV3DPitXSRXb8yo96TsFy7XRP1tBbJcV7jz",
  "key14": "AX7GkZCNJsTkCc7ACBzmGKHfkuYuGzuQM2dmLgMsXptwFxxawhgvYaR96VMy7caGZDtz1XB4fP6Xqdc7cB7DrzM",
  "key15": "dsCosmW3YhmtGwNkYBVKRtFxAoFAgHaE4nbuMBj8zTWiWdjLBm4kXNQny8fhHqKvujbHLVuqS2dR51UKFDCSW5u",
  "key16": "3JVRAJ8c4Hcjovwaiq4nCnU9qbyPTEWtxy7o4GU9Ruzn9pAB71oshPYm97DBaYJycs3YTLmWAQUgqqNdaDUdewaF",
  "key17": "5YYiJshkw98TKZkAKt5V2L5kUyfQbcaubEr1Q5W5JvhnHKr2hxWBazGcZz8YxxBuWAsS6kB3pptEQnN2WYGeaU3h",
  "key18": "3LWeBmtnXZ1VXTVmk2m2p4CqEqVd1mZzt9UsuQGKgY9q1oaRNnfpBFco3WhAKdHjCM6Cz9SYesCYfZF6p1AWAsTL",
  "key19": "5kmZasYMF2tyXMbU3dTguNKQSPkpmhLqNs9cpGfHKufatu4vQNUEJGbuT2pS9nEnWfQVKhmyZBEeDU9s931Aiado",
  "key20": "2VSTMSTsYF5kxd1gQFLcSTqv1Uw3pUVjnCKVCGtR5BGtVVyxW2TxjkoRhuyJWFKYVsdYxhKneqq8mLWD4u5W12vq",
  "key21": "4doH8LBhCrYmjUAub8LzhgnxJDgNQCZbPgcpuTmNN951p7nDCt9MvbqnfzgNj7DoyMZCQxnbMw3GdRTM3Tjx9qwg",
  "key22": "2cL3risRVxmaDHxoT1wCxGPtGzQCSJ5fuSnHozLZWjExdCTThhPSSwtevMNegZQ3ioR3sso5PuzGGr3J6fiB5tRn",
  "key23": "2wudD1aCik33tE9k1NeCaVAMKGx5nxHmAh5UURr3FRoobgCGgjpnTqonUrbEuyi7RvMh7Ys6zQn6LiA6wN1rnAK8",
  "key24": "2st4o4i1Tggi12ZJAWwCGxTB1u9v7aAFhAvpDWwPXTQhQXHMxmtgAuptYkECy7ZrdXsUY1x9iEzFosT2oqc8YJjw",
  "key25": "419eNWxWovmpPrnTtkmvE3B4LDCX9P5TyL3T6GnN6XxWzQZ6WWS3u1t9J92orjrtp7ewMqiEhDcfTnt6Za38jWVA",
  "key26": "WaEg4dw9NvjLKmhzcGL6JuGVQtxQiP7n3xMFo1BF1eiWc1FXhaUZcEsEHwqsEBYZaNMVYocT6MQhmid1HQSru58",
  "key27": "Cd57qURbeJyR3vpBRSrxfZ8BEgBcCP8PGuQjwgxMsg1brvafba1FrgQUJhngFcxD8n7yBHHhGMMCwPHGmXJaf9Z",
  "key28": "4krqH6c77ADh5bZMDuDUsKCyip7hirsq2VsFQY5byH62BgCsY7yDids4yjiqNf2sA1f3WMx3MaA8ZspTBp5RQUyT",
  "key29": "4WbzhibEka2f5xMb8eDxvE6AogejLwnzXYkzVZrfk3JMDJ14eM7PZ2YLmWdQxEnD5hNz22M5g7fGg3u1UNkHLrYt",
  "key30": "2XHxVLUyB9b59RygtQG4wdCH9ELBeaxeLpbggctA3tMWZ3LbCaq487qZ3t8xwUa7pgrBf2tYpPhbW84WRai9fwX8"
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
