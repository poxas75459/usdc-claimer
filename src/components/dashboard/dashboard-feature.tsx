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
    "4b9cDK5Z9pqqnjZpT2DnXTeyWuyKPg6sggGWb1wm55P7Ysrcsh1MSVCb7SeMpz9Fu6FTcELjx2YdtuDHYy7RKAZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gGiH8r3pzFhFiBtazZYCWs7wfS8LvodiEpYYPaCduXwh4F1Jx5k879Yd6PX5FG5GmTjT54BbdceNPMJ7EniamTx",
  "key1": "25fBGxDWvTWWRGJsRXcQKPG2Z1FPYgKGohCsPPgkWfQSvzkiZcxzc17b2xebiSeLCckb2hQak7ntgocmRVyiERWN",
  "key2": "3Fe9fEmZGtNa8Qaq6ErYmKGZYna5y4JzXw7TkeM4Ut8b3yT9jB9CpmFsJP1Wn3u1a1K3Y2nK72RcprmErMrLtUzR",
  "key3": "5HNG4fTYQyCzgEWGqs2gSwaw7gkkrSLWSLBYxBwg7mxTLQnVfrtEraRFDxkTvScvgauqVGZBJQiCFgfKt87oPntQ",
  "key4": "peNTYwAePx8ij9kpLF7tnAmjE5h9XL7t2Zqro7Rd4QaiSsjtZSFAe26eXJYBZmpceN9EMt8djhegS1ePtG82Y5g",
  "key5": "2mkpoXpXapxZt2McbqbaavQkVYcrYDzVtt52BUEMJd7VufGkSCnZSTD1k1iAQctV7xYaLDJ8tKH8cKXPfbbvs31y",
  "key6": "3UwN4CWKoLB4tPgdy3DPMmKnM7ZMUgSFqetHgAH3bhYBcotGHL8BzffgwJ5fxqWSXmHrFhzEEUbRMu6bk93PG5nm",
  "key7": "5PBdisJGRSWoERTjnGgtf6GLXQ3d7yzret2XrDYb1au3drCvwJVJ3iXfaGwVsUP4jAAPyGuDB5Km1DhRrQgRLBQe",
  "key8": "RuikCHmPhZjYnDxQMuFH9ancqHXTjdUXX7K1MVnABXifmDewajgAneeUNcwpFP6ih8TnmPJvG4hbSsKJWZbYLBY",
  "key9": "4wmoGaH4mxsixnBJtZ1pYqY2dM39617tpAzHJcuxmnhxNhDGw2CVMJFcrD7PsvpDK7hgCJ544Ci33bJtxEo6c3Rs",
  "key10": "3CjYVtUKPx7Q1mAGz5Jyu6MEFKnjdu7XHZoLmN9JhQvtKDPYG3GT65Zbt67pX2G85te9pSMjpHEpq8RHWNgEwbez",
  "key11": "4tRTNqmJY6vSoQEDrcMbCr44CuYmqYpKqYo5uccXSAUS1oFL9auG7T8wqnaS3SNFJrMF1FccRy1DyWzpUqxRuBzY",
  "key12": "5vygNWSsjBoF8RCZLNUNn78p8LQfghjN7YpHZn2s3SMs1CEcyxzfGpVaUGoVusYtGUdFYgZU792FZFLhDoq5ScmF",
  "key13": "2EPWrVQdCfkUQQ6HP3m6wpcbRP457Cdgjb4YafKGiGSX5RNRLwWmg45NPx4uBpJaEkyuYXLCuJUVaBTvh7oDYUSn",
  "key14": "2AZtkEVTfKKdDGbf5vPkn2bqn6wsrKRRXJ42mBvRYFqDsXMogEg2rsqR1dhfViTaBTLf659TBDueRWUBT9QkpfPM",
  "key15": "4CKgtkVZrnCP48BtZML7QUBuwoMftDZ1NYLqWxcxw1dGxeBodKnszvEbRaWJRVTHY9PurgUM9TjzRShM1qeajFJa",
  "key16": "D73WaN7CV2PyotAeXTfCi4x4FHxDvQKor6AQKLag6NpAkE55FWwseeNK46JbhLhiMmJtjV43z2FSX5DRb2AQt3m",
  "key17": "5H6qTteQ9ZG8f9BiLAkndAr72aTLJJfgHLDujMrXCjTHSm2iriUSKEE1k1RDtPhtjGwrpYDJsKaCS1Wp8JmLMAev",
  "key18": "5ivWKZXvRviLAqduPhwuyt1YBdLwaDk8jLJcd7hfh29T97VJ5iMBhzstUN5PR58yrF5wowmTNESGQXiHuDDYqQSk",
  "key19": "2DKvoXXcMZqU3buytFz7qw9spWjuR92FLeUYJrWvV8yd6Ptu3xhg96pVnra3R4Mgnm53M1JrvTtc7AXfDXDn9fU7",
  "key20": "34uHbT1ohvd7GNk4uZWyhJbntcXdi9pUbL1khipeJkcoQbzq7k32WVshECETZUnEv9u4scWFHvbwakofqjks7qoF",
  "key21": "5zSPhXGMdZdioJACqhJMyyFNnnCKCdmoMGKcAKCC9LRZrwUKrFNgNqcojZjLw3LWyzNPaBCBGpNBxKuEDqiUVfTm",
  "key22": "5B1RXtK5YNJxnJ6dmQi63FAUWEfVuY1Ywj1EBdPkpTXP4xnDQEeU84GRZBauehFoKgUQVpfz9V8cbhimfbErEFJ9",
  "key23": "54TBzLrieYE23XUbEKNbpzst2a6FEjhm5CcZG4pKfF3AfEAWsuG1CQkszeruxkfT3rXRsCgKWdFUV6vhAP9yCt1Y",
  "key24": "aroFeyoigGzYwWwpCV6SaFG6aQQkxQE8xgvQ1Pa1pZRXjQSH9j21F9CWcy75zMq9h2abJjXpAkmDM16XapgrNEu",
  "key25": "un2oSkH5FUKBkTiWVSH4gyUvUsP3H33nN51nuu7S16jZ9y9gZAVkovpqr9UuAuUbPLooBvQ6xZp5DYqKg9PRZaY",
  "key26": "18DguxQ8v4zZKr9qM8tmcuhyK4kxuqiCuQE89jqVUKPukCJ1QCW2VJL9228UZpKWdRbMhWeAbC6G95jrFuYErej",
  "key27": "2kDH2796RzvrigciJ79EwX383njrzqfxsGUyXs4yNGE26Foeh4bEAvp11QCkuhyL84TVJxobkk6jni2eXDKqeFKg",
  "key28": "5kbxzCDwK3z19VLmcaYjqsWiVp6sWSF8ysHM6M2Cnckasxf5v85WuPj6GgFuyE3CTkWGc21Afe1japTBry5ioSeu",
  "key29": "2VgeT2g12XnJrenV7E5jpGWCYd63HD8HYCfYzg4FvPdo6eWYHDjriqfNHaMKhuRiRKhPMyTHQ5AGdKNAX1gQJFr8"
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
