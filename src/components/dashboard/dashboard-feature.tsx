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
    "2jPrHLzhcYGtwz6tKgQcEzSft869QJsNgUrjM2NouRzBDzkzZqCEJvk1R4vmPSZ2vBWTtc7WM6hfC9bzyAYt2FZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21g1uTusW3xeRJyzrC9SATyNTn3v3amWWVXmZ4EsMyb66zTLCuLcGiabQ5CjTD59E3Jt24C9ap85MbZN6t5KCw3i",
  "key1": "3zbrPBxa65Hgmwp2tvmCxxU9i24P2o2qqFwpjYc4PryKUxss73tkTwhRnXeK8wWgQq5a3w5c1Zh5sHWKgbu7hc5z",
  "key2": "3whKzQpP8Fn4Mp9dsKypSEYjgJnPNKwiCD9jqeB5SFtyaGdZoRgcMeXMtLCEonKC8HjXMdYr1twQzptMeXqejjMi",
  "key3": "2hngQR1gauj1fBzdAHNf7Jj9cRyndM4kXgrZPyVrTHbVtgdRKgx7V8UAXdAwFtsuAmTH7rhd4jVsrUyCz7vhtZ2Q",
  "key4": "67UdvqaUiN9234qCQzLwtwEGhPvdh8bqqTpeSE6i9fE6RDm5gxppQub5gW5pPiFMsxfSUhKSmkx2ta7yVAkWqMpb",
  "key5": "54yPoqQc3E4L3aFoKAhY4GaBruUVSMmdgh8jLSAvSdgKWtNwLoqNcXuf5HwTfqKjVu3HzcaXPJwc8uPnmtxNy54d",
  "key6": "2DsoCZu8hGdL9HJPwp8SetYa6UbNLpecMYExk4jqGb6uggEkyhqKnJiWACF9AGCg7EU7awgJWSjbzTh1CS2GkG2f",
  "key7": "zw3K7zMNc22PzD7CqGkp2RN5596y1NLki8aahvoQKaQ6VfgjAuJqBUWPRRoQXxaJ48ZzoxxvHhBHSLuQYWcvCbC",
  "key8": "V5zXXrWb8eBWPFo6qMLRZWS25mUuxh6Dutz3qgPxNTCjGScWGVq669shirNCApSb4FmKRG3vv2y76W61wE1sYoa",
  "key9": "ygwaP6DAXHvf3DcQASpPdAaxnUKKQS4prSeFoyHoykdmjoAbskqQCGJ8tUezqiteYanKzgFL8GsjC2aAxmL1gss",
  "key10": "WEm7FJ4aacYkeiq6RknDnVF4z1e4vzBhSW7P7WSwHCtobhvBeBdHnGsFmDNZ4tqMq7e5J5B6rbLGJiJcs9uCadC",
  "key11": "3e8r5otqaVRMukdHqRLm2K8zgmkzGdy7MNtW3GLT5FfejxdVDXfonBD4itCKHUjvGEsMicVdBFaRpD5d7RCWdBgQ",
  "key12": "45UBHJ96wi7uVzmpifGf6whfYFR2EtxHmBGFmCHAY5zZN7yveEbSorJy7KpVfxt9DzS3xEbh3C9eGmC98XnEA8yV",
  "key13": "3mu1CPetJoCmZNP3sHmSo2cujskkf34sgJcye4SBny3qJQ5UDUz6xF6xirqwKhJxp5hhAALFL1NVbbXCBN9XymEc",
  "key14": "4Q9Kfb6Djb2cHUNjcsABD98KrRTNhJSX89WwcKFxxGdMTm9YDQaPrYWkvQVHeGxaVipMjaRGMjyBGc5RoQWteA3P",
  "key15": "3rTJwVetVdjgfy9Zgv6StqCBKSPWRx3LWe3v7JHEh5bAdABNtZ1RoXx4GUMXsVq3dxf6C19NZKPpzMNcNyDMWT31",
  "key16": "3SAC7VMqNLCe5iuiaHZ3mrRs6XhwiWaT9yXAqUE4Fo19y6p5HjLtHoxoXu7DfzChtqWvMgPmQdzoW3vs88TGEQ4E",
  "key17": "3hGC5XWpEvxYraU8hrF6mnaGe9L5MTSpQkJVDuQBemL9m2NpRieNasLnnPqD8wRHXp1jriBez7iwnjzcKPkQx5CK",
  "key18": "5wrWUca7zYCavovtq3atTtjJfeuHbsmfjS7tQ5TTuN8oMuQAnwJtq244A7PgQDMAGS5oBhmGB4VkQH4UbJjxs76e",
  "key19": "2aufWBZLVdR8ZTmjzohLBiYQoqGmpQvi4Z5DkxTquxyHvYQ3nuECcuqdzgEyiDuKMiaBy4rwe6JSh4cy5qZ4P67M",
  "key20": "33gZrxsSLFuEYbPnST2qFsiK4MpjDPacUUJX3TmmZ5tsTSFTKZxBZTwqnH5y3va5BLCenWTdKRqKza3GyJjRM4cM",
  "key21": "5E8EAPMzCEFKhQE5K69h713TLQrsm4oMQq8Q3HSXH91EKV7HsV9vSaUp8zzanUsf8fv2NS8PEWcBcxtsYm42ZHhx",
  "key22": "aNY9cBNE3Bb31zMR1kC7i6BHDTQA3oGFfEoigyXGQBseRKW5PjHsGYEyfEbcKiJab7my8oLW3kMPWrANMLa4GvH",
  "key23": "3pZ7CEZpxLXMfRf9PUrWFiwzJAcqCGF8iETkq9okpgbVbvspfAk7fV8UH5eEec5aVVx7cToJyXWTqKWqmNGUwvSD",
  "key24": "B53X8YWtgJKJzH96NRfKHGSJ5GU4ahKTw6BvNenyH4MuSgPZcSjocqeMyYnCjQLmx3p7CuQ9o5gMiQtGh3tDPbx",
  "key25": "5PVh7AmJgTrALjjJXQbGn1pGZep7pTnmQefKfQBikboFacJGuipTpa5eh8DLxNRfeSCzKhTZqtULyRjtMH5mKTx",
  "key26": "3azWyZm5rAfSbfGzaEtQuty6UFRrFxLUgsxf2Z7mRoEx81VfHhmqovcHmN6xSFK3tMLLa55Gpgniohxi8jJP3oVJ"
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
