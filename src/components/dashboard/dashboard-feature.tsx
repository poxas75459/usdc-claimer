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
    "5LcizWHLCZGni2SjpYaHKQDjsqHB6rnCqNokLGnvzp1dgU3LUN7nxTTQpPn5Em7imXMzEwfNGcSh99taXQdB79HY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GyjrJuUdGm1HhtP2wAQxqnr2i2o68ZkMqmfwXRNDYd9qyPTsg55WnmZGTfRb3QQG6LWdVx7PGEcS9y3F3KRvpSR",
  "key1": "5U6cD9KuRDjw72k6hZ5ASnnA5gm9AK1hFZvgsQn2uNKN9svta9WNuycpSSoAA1fyTqtsMQNKbMKHumCPuPy38zS3",
  "key2": "5iCDKyiGh8tbSoU5J1vp8o59GuZK2dmxYW9YzRLf7zTR8sK42T5xKN25EwLQyiQ4fNNh634BEfXNPhP4MbH6Hq4e",
  "key3": "4Bqh6jwcqGGrS6hXYSaRwZWadpWAHbsayyeJRgLyYRcsZmX29fchCg7R2XtNyEQiQZQBYAGvfhdDePaJSXY4grRF",
  "key4": "2pi2QrFBPWKXoSRFrwJPGjHrzQ6aHCwxHbHasRjofd7y1gNshqvfCNxR7f8LmgiqsEsWq7xiNV9GwBaMm6ZNv6bh",
  "key5": "Cf5q6MmsxLFYixCsZbscRjE8Fdsj5oEgXhmNv4AQwCEVzRAbwezRFRei5ZaTzN2UoVPFnmFkKGdm2bHyScjrVV3",
  "key6": "sR4XaQmrsFQLKovwBcDGmJj8W2wE6fZ8pj4kVGJSsSZZSMwrJPMK6s6n2n4jjWczvKKMiAjwpLSxAaSXyTVvpcD",
  "key7": "2zXsw9d9NYYWDhWQUqaYfCwxqTB1mqimj8irQYevuaRX1G8ypfeQps2qvUKUMyc9P1kD7zpsV5cfaUKvWTczY4Hq",
  "key8": "3eBp9YF4gYrwpr92KGPbkxZrDinVWJ1dAhMJUSCoGyVcAWTzKJhpe6JBHYaXwXGcBEebPgzubA4C4SjCP5KJ3ceC",
  "key9": "4XrZb4qhaK252M9sHJjK8Y8KxfwGTnPJmG2EFwT4tZT5C8uTT5ohygmgbb3fPsX6tUK834n4xjDmmh5ZLyVVLxr8",
  "key10": "wHQ8EYFqPmqA1WfqsvsXfSZ925irwvNxUQyHpHeQk1tkeeCaRxquTXe3yhHkcWSs3iuWcMe8hUeRjYJD4AitgFK",
  "key11": "2udentym3nJPvXz8MGEVWc6dn4LWcmsiPVaWprthjpSMQEmL82x1fb7mQnt48p5yiHetobq3T5jKm431gGvBFet1",
  "key12": "4XXPUapSGMFnS7yTYhjkhgZjKqhFQWv2T6AfkCM2SuSs9EuiwcGmdwGDq4vSDFPNNptPC4UF7BMcTeBfortV7sq5",
  "key13": "4uJvuG9M4WRr5kigt9BXCY8fGryM5LoBbGG2e2Sw1GPXS3mGY2sRL4mxu3nHfLirsXgADqhwd77RN88k1t8ZSxte",
  "key14": "2cWiggq7U2W3PG9Hvo7RGb4rz6APe4tTomrzmfRmobUvupg7wwEyNchtCeLUnJaCEM7EEF8FJKzv2dTH4xsMhzcE",
  "key15": "2mFNQdbjr3J93DPQfc2wDYTooVzTWYUGpbQEZMrM8PCoXQPXAhCPnxXVWwHKJH5V8wZiNVY4KGosCg6gL9emHzG6",
  "key16": "5oNeSXHt4BhZYsjkEQjcwRMBVstGp7zPwwockJkbhqJM9x2p3v185RZBETu8Y8PR8efLxZSgByR6nSBVpBuFQ99E",
  "key17": "5kSY32JtuwPRt1KTzS4yQAdvwEywEPu3VcgvjWGTztCgcHaRKvLadQhoacsQWJYcykLpLe5rMdSLRD11ieG5u9fk",
  "key18": "45sHVcXiq1zHANhC6hVVDEdesFaCsYdZB1vZdK39MndhH8SpBu21gL6LDNpVgSrrcUoWYD2CsiTeiGyZiKM1P37H",
  "key19": "3Us3L8wqNG55XAPqksz1DL8HsMRUMd7HybTfPdLnrp5sd1Kyz5uCfvyDgSqarcFXvrCd66xNvdv33Q9o5hQa1zx7",
  "key20": "4P7dLFdvNFUvC6zHSywLdHVQgjcdNgESVh25VGMfhs7q4MQM1rVKM7vEhGMv3DQfnE42Z91cD79wtdjyjwSGjCN2",
  "key21": "3ZtgL8Dh14aw1GmLiMLyVKs7ixjdX312rRFC7Scs4b55QA6i4ozsPsh6jywF8drWSWFc6qbSG4WyqjDggtszfmjy",
  "key22": "5YY3gDRHoC4iEk1h62t5rCuKcKoRSQ2rzE9Mq6SzqDys9KbPvsqr7oXT7QZyiWuFtY1poidz4SakjLeH6a5XtqCJ",
  "key23": "63tLfwGwqv258jM9RroceaJHd2ehC8oWwSEo7pUiYftbT7woGyodSn3fPnfgN3rDraPBHidVfM9KrwnfkmTURhTm",
  "key24": "3BP2vnFEUUWAHS5j8nZEGQ12ECNAcfvBBdVBWy6jEShMFKyVZGLGrGRHGY2y9PiQL6ZBf46vjMcPi8UFn4hRqgoM",
  "key25": "5HBjfbhziy4BA3XkdCwhuUviAgNQyrpE5uD391nLg534UvhDASKAqoUHsWdUYb2ina8hYdmxNYGRxzaiULD6SAeE",
  "key26": "VtFJwFdG7vVHTria3Wk4cJxxtwR9437qQ93cRD3aW9uEnXufMUqratcV6Qjx7frRUrTf4PAgJwBEi8i2zFtEvtv",
  "key27": "4XoteUe19zMxdvRyELVKnyU1hCkGhm1xRrwqceST64fQXW3nvWaoPHKHV8tmtVLappfZ1V72KhpGm81drBKAq7Rm",
  "key28": "3rrLUhsXTH3wPZjCjvxE6xsYAWxc2HLaCFKjAYdRZGceLVDXiVdfw3wgxK5xuW9qZfnwca5qdznHNmM4dL6zr5qC",
  "key29": "5n63cHEmZvp3GTvT2krMM8uWMLjgPjD9t89b8Naf8Dx2bQpgNAbtHgWDtgQoSTFyySUv2pL8Ft6jHNXCgpB1WP6C"
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
