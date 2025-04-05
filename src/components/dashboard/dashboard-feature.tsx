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
    "3bRa1S6RiEtLdUnwnfJtdbFi8BxREUyAQsm6adMPaeH22xsVEezavw2je4V88qFHaWuyhR8xHYzw2oue69GoEzcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q5diHcjMQd4g31Hvhi15zWMVYXdi89Y7sRbYtzT9xuWrgRSc4ykZrp6MCao6kYJ8fA8bXunfztswwDY5TTmeZwN",
  "key1": "4YJ2qCRWjnQQVHTW9PK8ckk3sjkbKFf8MvYDgHLjdq5giW16QEubNTTgXkSZ9zufG5jrRAhBu8KkFRX4QJ2P8c1W",
  "key2": "3L9EkX2r8HroHVo9HTWB14o7wvP56RPGN2vew8EvhjHPRx3zqCCdK6PCYo5QGw1TNxoDrbb3mHNFfsfnZ4EGVuNj",
  "key3": "2YaLAJTp8NtxcJCaT5AJoLExfS8HG9yKtu2sr9a8X7Cg9pey7CS2zs1tMSE4vqVNnTfKQBwJbg3Gr4uRhSLJAZsc",
  "key4": "2kQjQoCfHCdm3XGaDhqkDxBX3qgtgpL7GJPL7vZRiPpS3XySn4fuLPeEr8SMqjiArnM5ddSNjDuQU4794KyeYySA",
  "key5": "41K8HUUdJtGcM5zQAND3PDtJFmYefQJPzLGMazYU4TGHrdGqwMJ9Yvgv7FaL1EpQWRoyuxNdbtotCbeCmJRfw5kj",
  "key6": "rBjKb6DoPqcMxyiCE5mHnHY1BuqodoYr84P7gXdJaGWeBv7DY6aLtMdvHkyM9U3j7mVJYXcW3janJiSxRfJ48Wo",
  "key7": "4kaPuuXLMgGJ6aX5UkUted4Ft1FFfzMrHaW1zeiFTKYSdKY84pUoqoL5xjP4j7bnoJ7xrbDBBKqsEHXYTDXFvgVe",
  "key8": "e3vn9vBYA4Aeadxmfm2FyWb84YtqFJPUv48oByTD6HbybocVkeG31eM44MvpMoPQpnxJxFLsWZUnSzVsW5xFs1r",
  "key9": "65gvCcqDUi5ZppyhpPevecVuox8uFaQBtSrgXJHx2Gv7Qs8JiEipf13HAX3maoVKRY2TFFndnhWHceRRueoVA9TY",
  "key10": "dqjAQLYd7jhCTM9e8qESGmx8dKyKoft2qLkkWjtbFvSKtdww8zDFYomyaZdfoN58KFmf5ejPThYjGdP4d8LAJ4F",
  "key11": "3CUx4fdwWzSSPVGHRXLXHt6Qt7EEMxmREjHy5GNfBsYFk42Pb5KzhRWGZXZBZFBsnKSenf3JmMVCF98kBqxJYib9",
  "key12": "67rZKhVR2tzkvAsbT8JW1KYegFZGnKZoQPUiRMDJTCe1WZyD99CALtuYHdFA6RMtKJ2pz3bKeo4tpxmZikqv7yxy",
  "key13": "4xcx2oprwwXcmonYCzzXJDpzD6y91ogMEnu3U3rNnYBHmRL7PgHhQSS8ZC3sLXaktB7X8shSLJYXYMsbVSnjnkMx",
  "key14": "2AALmfLRLFAQER3iG6G3ZDxGJTJWodgh8zAYMceCdGVnS9numoLKmAAGxCXgjSEKCwHoCwnTCYq3avC9CBgBknsL",
  "key15": "m2pQXqELH7Urj4kebkHdiqYpgCArXu3PZpRNSJgxab5B4ksN7sTwShZzEDPDJ7Yg4VHjgWzxiY3wMgoYyEjTQpQ",
  "key16": "EtyyHz1q3NZERdYXxdzoz7qbDHWfiuD7bn2HiCtPvHzF87zxjSREbSaLSEKoxwDFnQTTaGzJUKh7BiQrPztVGsT",
  "key17": "RCiQBcncWC44LVDguHyxQavHDpGQGK7XN4NiuZkuLUi7WmQ871urnLMyRDZbo4oZkS73KsJpXfi1TUJ5BRkkLck",
  "key18": "LZD62LS4kRDeTXbCga594aKr6RNgJqcstkTb33Ta81VEoPsgA1DZ3QBGM88bZ2dpobJTvZuXV6RGVFN9GwvPZXe",
  "key19": "3nVaJhZhzhtQHG9SibVjrwadM3zxtyguCSsF1NYmnbKEUxdtmZ1sQ2cg8ocJitLKhpuKGzFeo4d83WyY7tABepQX",
  "key20": "469dgHYMBSwdRGyByiRkgia4CAM4qK3r8hth16KtXeXKVMqRyGL5pRQHfMupXEZf6qAFSQvaNvciKbdLdbHFeSmn",
  "key21": "611MUzWZVcYTXztwR47TUYZZqk5MRzWdM8j4PLxYtxkHLkSrLcRtNmNJVPLgzAG1CfTsbB4izJAtwommvRkyze5h",
  "key22": "4giPcWSKeNeLdG5P6bWCaYc8aRJcQ5ckeNrQrLfFFj7jiujWYeHJqR6rMcqU19r3dEbrUFrkYm7G6BLT4Shyeas1",
  "key23": "4S6aeTLcPdVKmbg5NUnJngu6LtM3CCNFBut2RPvGtkx3ji8UFJPtRv2jwxaXXesCSCAt7ftHXnPDWFn1jWWKvziY",
  "key24": "2NqD2UEQp7E7s68HvmziqvdLZtErn5QNq5tKfGyrDWBeXeox9EDqgCiUmaFhNmRL2PexJiKci5hPWjHoRCzeti1g",
  "key25": "21VroxRfJeFCJWQwaf9dubREWJtkD3TGYTKAbZoeptstUDYTcDwXNaKnYnj9B2dyfUN5ZF9S4VvSWcSaH77xWGso",
  "key26": "5uXDQ2pmUeZEW9pUFmARdmhx6MZN7oAEHAjbNqAg6LnFV3U9az2ZvQcLacZqvXc9SJVn5tgszVSxS6DMvUeDJkkR",
  "key27": "5xkUZqtnaznZsZ1YRCVisfr5gVrRvZeZ1CSEpUHzdTD61dP4ywwJTzGCnsrT5UN2oRpJ59mwxEQgVQckQ5sm84Rn",
  "key28": "3rSFSR1ao1AaRMuLQdnMVXUhHzDXkosAAENivSvCdBbeupPiX3P1Z7oQPLqGGvZ44A8WfUJaTBtju2nP4bKK7qve",
  "key29": "4j2Q6yP26KaWoXy7y9nJFYH9zu9QjQvzQP1SHVP99ZPKi8tojrP3WYwA7i2JegXKth6e8PD7qq36j83EJfZiQpjz",
  "key30": "2pyYXcCFNpsA6ij5vXMu3N65aFkfoyWQfDe2Cxr9pkNcFX4zHiTzSh6PsDpPGB717NfgdHevXQxytH7zU5HzoXbV",
  "key31": "4TudX8c7ZcAF6D3t6JNnYKVKnGRLCAFxDkbvVH1gPU3Gnh7fx67dbh6d5tE4t6Pn74XRkt1KyDHD9xGmotpQnAsH",
  "key32": "33mA54TUyH3re1TXAnikkqZ75Y4iqkhyjV7f8kVcPeqeEzt2EjekdhZY7rCMJbYXDqkMmZy2XcoyYJ4vvGQSwZ2o",
  "key33": "5NRPucWoCExusuP7Fq84NnQi5mhSWZqxP5hR5smjQ5dXg9goUPYmqnPABuWoSr4fbF7kubETdKQTHsCjPKcAcafC",
  "key34": "4ovNSaZYN5hocuvD7o8wZiPKvLwdvvGpquFps7jvYj7qP1bjGmNPf7uhPi748rXUQyxC7GvwG94ffq7ShSvKUmNg",
  "key35": "51FGZgRJ2KJP6FXNmBXsmFWr4kFtYyTeehhXAziYNeHDbNnyVjLNypGGu2fZm3WxwjH9GxaaUm6pSkVEdWnMVC3H",
  "key36": "3ZoybNrTFS6hpgfQhaAFkpmexH4SRTvMMrrPHFEcAFrWX7LdffPvwNUQRoHEGaoPX68JrSki1XzRum8jSrzdQeyT",
  "key37": "4Y9RrrtfNX4igK6edkQmrXDqZ36mjBCBgdKfgQCX3vrfQHkiuoXSKhm7K5vaVajVxAAY23AEVhmLTBry4u9v6L69",
  "key38": "UCqtCWSQ4w4vpJSuwDw5Lyn9SUFHWRxmYWK69Xu6t2B8pdZVXi2phQo8FeMAUcRB3zLXrR2BQkdX1MSUQyCL9N4",
  "key39": "39JCqomiddVgfbjS8xNyn94G2nngn1CqpvYs2unXfBYfegoaT35zUJpeHJRbmKGF1TaT5bqgtMpTCTbx7YYty3wv",
  "key40": "sPKYxCWxuy5A2f5ZmoAJG5xp9DUik8t7cs9A4wmeeBHDmeY5zgmHJgjbKqtTWHGDpQSghHEM6hMmh1CEb9BztgP",
  "key41": "2Bzq4bkPbfF6BtywTXVmdhGqX7rWNkQtKzNdf6E7EPvU9gQdTjHpAiUjNFsGamHymGcmcDm1YxCs33UXV65CH4KR",
  "key42": "2UqmkD2xmQAy1zSBD1pos7tpTQnfJkioHwp6FZzq5qe7YvgSb5Wu2LN3KeSaofoCQ5UAf57At8QY5rRtFR7BThQ3",
  "key43": "5DDQ36dMj2c66xw2JFAiMxRx9uQUMqboSN1SrJJo5fE65ATVnkpf7nrLFQBs4hEJjdNSzSzRcjiukzoLJj9zELKQ",
  "key44": "MVUJdE21zyB88e8B8Sqrc82Q9zhuTm3tCuk2L9PXrYMjHnKYmSvFYyMamhtRW2zEQ4MSoyZgXgFH5Czz9nrGoXr",
  "key45": "2UzuzhG1bBuZRQD6BY4wZZRxi9hbjypTpKtRbrjyYYd1rKPHGhHDcBigkiqEchydaFAia4EaawhzgvhB3x2fbwCi",
  "key46": "fC1UsxQQ4xKkY2yZ4ZKfyW5mB5fd9iQFEce15kfkG9ZcJA4TVSkrbGExKhXid42SU4dmsdq4urUL3MM5xMBjtvJ",
  "key47": "3d9Ho3ZsFFcWUsW1jxTVR7JHzWazBKqo1qKL3VBw4ebQZ8PNHhxkvbE2rBthTtNABALi6MvkAqchWWxrwwMB6Voz",
  "key48": "4xknsVehiR3SUoB4YJZUP1nhV6nEomDvTJzEzMviM9MA7QFvnUam972pM2XcEq74oirdhmvvT5NZHnHRDbkvsjmv",
  "key49": "4pC7d96yuFrn8WtZnPjwypvXJiakJ8gAmCPxJAQVGjNZYp59Vxg3HigpZHTk7GP2Y4WeuwWze48L48WZZzvwyaqD"
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
