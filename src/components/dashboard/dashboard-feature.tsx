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
    "BbZ7w8E1cURZkWk1WmkNbR5rgGGhiNLW2TWAfqffpSyJzW3LnD8AHhdvnyZ69khUPkoRW6igMaGcVdiZwE9oDXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VtpFaYPJhUmVa7cMStnaAuHfNMsH9xzJyXtSz972VbAQhanWuwi3NU5rrYEXVeF12dpH2MJFjaywWefMyz22Xvp",
  "key1": "3heaPMRp8F8E2ywWnhFx57eaa8ep97J3PPBkH9gubX3zkrJUAPANWvGksPdkNS7VdD8j6YazR92Hci552yf7X1pg",
  "key2": "2XSieyyV8WZdqgswk98LHHzUzifWadwGFyYF8nMZS1SexJfh95rKKuuzA4ysiVoNQutYVRLeNJj6RmKNCZHvWMCE",
  "key3": "4Ry8YopgUam1R6oXq7p2VXA732P4LzHBwH1yGQi6RwXnSyQESBZenWYYN9dAEXZ9Ze9w3Fey4J4oAgxyvBFCLvhg",
  "key4": "2TsjENJ1ac6gdh994jcJhqCdAVmZTYiGKMRDYqRd3nsbMN8ePvn8VTUkZZZYA7yv48S2z6oNnZ3SUx7QxCBAKoXG",
  "key5": "5DUSqWwBozh4gHDbqGud33tGm9wBmJmKmuLgZ7P7MpMw4HxLgxFHoZP5BqNtA9HfkLRfeTackSBi4DHAou3jFVG9",
  "key6": "5MEiFN34nvPdPdNBNbSehnsHbzUs6UUnsQ6oTyW7Lj6W4wZpztkqmn9TxNMJGVyJdsBsHwn3zKgdC1MkDJu4guz8",
  "key7": "2mNM5ghbqFQfKQBJ5DfN2Pb51BJjAPdsgXs4K2dBoiToZaHAhz3KmHy7txNjnFsouAm5KmtEghtYTmFqHz5yJHtq",
  "key8": "63pto5QdWwaECxSqKJZZCXaNNP6aNxzaRByzBvwGUaxug8p7y765Ym4zyqQTsm4jGT2tbdZBG62jUaDaYCbPbDuw",
  "key9": "4UnWYdbDXd2E5iyKxrsW1WvGyFGQmBzyrETDVP91c81ZKjGESDrcQHwcNKLHbA5khKamCX8MyxiaSN82pBw13ZxP",
  "key10": "433QiFAWeVKWGPFCDrQWNkFWgtxgWRBz8NkoLhA3AQqMtvrTWR6VeWZDp2DE7Dryhar1Z1XyMCaGhK6X2krNHngn",
  "key11": "apXF7B5GTzWLGkCkbu91UmcRjPueSSeL9DxED6SEL2wW7H51cQuNyzBu5joBgBXbBzeVVQcYuMyR2c2NR2rUMUH",
  "key12": "3jCLAgVCUoVEtCxFoS9832CnwWBBbwNg2G1BqndvoDkWV1U7r8PGH6LgncL2JguidqKoSA8Z2kEEu5ezdzojEnoE",
  "key13": "5SEnp46GG8s4LW3GWTSpBRQqLKhcB9UdKqLuo7Z3yhfaFEPucfAScrxmTJ9oCzByDc4wNEb1nkHSHjxTR6t6aLii",
  "key14": "3J9CkQYiU8pxinNA2DmagLuyh1tnftuG8cXDh2St8PQC917ZvBuEHH3NuYttbQeadepJQbiiZhsEswjbEFJtSwJL",
  "key15": "26UagozZ6mnmjbjgs1ArsuYLyoMXXg1cJcJeYNsRssNUMQVg8sC9SFjcxg8Cut1ABeSKkM8nNwxxZXPLwvRaHV9t",
  "key16": "2xNhf1c6kHTkCfoJzEqyKm5qXZwX4ad3gZSDtP1Ry6SNaygaLC6WenKju5sFH9GXe9fcFZ1ijxpomqU6D78sxKYi",
  "key17": "2q9HK71KiS8hyZdwXTh5SfXGhXbTEyMmQtbaVjtf5rWbpSQeb8Kp92z579YqkuBnFwQ5m57ejSZ98ZtpsbTpuck",
  "key18": "3kktxo8HbQ2qHmV5tHUWxsA9W7fpzmudvaxyNwDHyDqVMm6xBJ3fV9jvzEjkkGmJs5jSX4icPdrWMcsLATYipBU",
  "key19": "pX7EJiRZeaewWH2kodRqpNwJ1tKYcmiBu2RLBwLsKGEJae8tYLbD2o3muMbym8jmvF4f7NBAEDxb7UQ9zUqNKJU",
  "key20": "3Ey29vUMFifcmp9X4N2NNr3CYGfjnzCyuqtjF4Le2jBpj6jsjeNPqAJKPyiuD7qgxr9YLe9aKYsUoQryfqfF5zyF",
  "key21": "2FzYpKhe691NC8SRuFCLqPzUnj2wFj9DvWyo7BN76Pp3zY8ceodpmCWTiBcq19PUeqUXEi2mkHgnB7vYRo8coW4u",
  "key22": "5vsatTjSg4sGYwfDiY83o2bxKAgHRLEi8LYAvx7zSVP27gtTR7tvT9wFJXXu8dT7G1n6MKQuhNsxGiTGUWiewRx2",
  "key23": "3eBpe3YYcRoY9VNGQ7hJWQgnTbAo9TDNMMqL6cdaESWDiMXt9ZhJkdt4G8UoCFboPboZrKWAqAi7RXUEC92Kw3A",
  "key24": "2C8yasrBYfme2h6fA2Y97vCeuj8kuyQwaDjMe9Qq6TpKFFTYp6bmFyrxBvrrm85wt8BMLKt5M6YMwKD9dbzYihoQ",
  "key25": "2KPhg78UyWKV85NjEGGjubRtxudPwxZBYMTxNy8ewz6mZN9VxdgEvVu3xE552utNFmARi5kprxRdik8rYnUt6RMC",
  "key26": "5Dp4bfFdHDSrv21VxKARvDYUX8mMNWNfWyUxpDPQVTUH3YHGbupDWeSwxmrPpLtrJUE6DmrD6Q5JzXzhQWBGUjbP",
  "key27": "4crK5kSest22vFDSa7whWTDTNLzhe6HSaMcC6M1TkTx5bkjdfkvDLjopy1xM7paECBZLYmAZ1qeD1rQ2SdykwAZ4",
  "key28": "BjwUpxsLWqWN3LoZN3YoSV146U572NwiDS48ZSfhGnG7JRWPRjxtoVxkvYHyx7gJDV2Qk1nJX8eyZpJqH6hxb16",
  "key29": "3mYJe1ZuEH92RsydgBbsBEpYgEcGogkGE9XDM9QZjnUV9S5RiyL83iy3KXzsjpnv8UVTEx5qWAX2EVMQBeHsRn2W",
  "key30": "3ifqmeEyTKDTnmA8auW59if6EDsgcmm4Mb78KK5miccWyAoiQ8HEwnJBuJRuWLAUvKqJErLp8vkWRD97FcFmcZdw",
  "key31": "uMgriGVV913GgNPn3k4tNxcJMJSibbkeUUiZKFHnPRHTGVEiB4iK4kz4AJyzZH5CHrk3MrxC94zzZZdkZ21sgGs",
  "key32": "4FWVchVekaTHnbnTXnbTLRmFGkKJVahzjxSWUtHbsLQ9LpNBfCesMz6ABjyEyVXAKs9dEFkXvnUH1EQpc7xtpucm",
  "key33": "QFzHbrUEWE2FQ6q4Tn8Vgeibfzv7mq2ba5wdPGFTDEuRzG5yQ1fU93fYU8Dn2fAtS6SQQtSE1FiCTmmm4DmBVxF",
  "key34": "54E3MyA2pXgcgjeqXtSt9xB5oAe8xTdnJXxpcekN9p4bL8y6ES6ywmcDJfj2iCrgucnLowL2fCUMWdDGVuz93uur",
  "key35": "5KEJkhF21aZBZ6ADvatXgijenqMwYKEjPVuMcUsDWrLqVka3eZ8rUhEvGUMuMwZBC7fUNsRrsPuDS54pK1TyB3Th",
  "key36": "5JqR6ARE5zbT2aAFvoZPgL8NTvUFpLoUPecAERHT7ewzunGRk5w9CHqvBo4xPexUV9NRcEs88sAWHA9yAa24uwAL",
  "key37": "3JjEN6qgEZFXe3iFdSWc25BuZMnySFJLpj7W4xsVSNMRaBcQLXgqbZ6gSgTDWhkJRarQxjwm1bL4Q6L6DkBRvzWp",
  "key38": "2Wa5zvJBh7V3gmz23T88SjcQaFAxt6UtjjjrWCx7TT7WW6Zz9jwF9Y7WVvdiraGGBoKFpByu5xgFqCM8LgcaaBHu"
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
