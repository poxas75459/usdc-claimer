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
    "54sZVnH8ZziY5kMNM7u3tG9n1w9DWw7sBz6yptJvuh4D399sMStp4Daq8Xyizd3vxn1axcoQajC6LidBnUSzPcjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DHL8DCZG3bbjUHVmF3gM8dqvgycQH8b2fbY2Df1TNZfeYqYM9WU9JWDFpwi1ohXDcsZsM5JYAUN6dxDwqHcCs6Q",
  "key1": "43gK53ctPmHkNZeLJnqS7Zk9ootMVRkXzrfhuDvSZRT63i2dpNkue44Ug5jNAjtoac5CReGt4H7w553hVbEqLM4Y",
  "key2": "59Bf2ES65DgzAWavvJR8vfQnVdi6Jyhn6KBxJbomKHm9BgX3SvQ7JLDv1F3N9D1zQoShMFyifvDzm9AKmMS1f5pt",
  "key3": "5oWDPj2fbAWKgcVZVaizKF8Z3CyixmfCakQ8aM1BbPV59VQY9EpduZxENGknJRn6Ji6pkCYCrbAfYsN69Vhtd5zR",
  "key4": "skFx2id25AFAHqwa5jUmoHMnUA2YinA87eXogexddw1LRdtzzCMAc8Ls36fe3jeANKJRzUNp5kEcofS6JdaPpf8",
  "key5": "2zbCVAKbwJb71CHqnktrbXPczTPF1i63wHRH8CanCbh5DJuTidQTzH6mMX4PU6V8DGs4JbzFyRbbBUwmUCtYcAtY",
  "key6": "3Tw59Q7TpsxQEdTrhRnooaVpTZaqJuc6MD1D7svxwgCcYTd4ZovX8aJiZJtT9LQwXXcWyHK5zLKa2entMJwiJ1pR",
  "key7": "2AnZZAAb2gLHaNqcy1YiymWbcKAM4Xrv7Yu6RKVeBT2C2xtxCrjeQr955n61z43nDBUANmBaaWMuSQaUMDTWk3WJ",
  "key8": "3nfsUKNBkMz2wCiX2CcRtx7gC5WkzG4xsxBFGZHuxoLkLpYDQKtbRKAE5aVJYJpMJ6tg1yKHMQtRfLa6ZMWg6tfN",
  "key9": "55N8PxRXd7myk5hfdNFrE7z2L4TGwuJQyShenpHYm7aH8FnsKDQUWmNfWA69ppnL1qE3Bputxns7WwYrtWA3yxRX",
  "key10": "3LrziKe99rSYXaLdm84wobZQUWCgoyf8MdWkFDYTuznA3HvtMVCREc8XMKWX4PAECh9uvS26qXTG7qxmfFfQrqAH",
  "key11": "5iFUCstTFXBUhc4ouuhiGFVVvGLW69riZ9oNWzpy2ikmkMygAG2ScjDCsKVtLChjsqzJbzqsSQzEDcn7HMnpn4wo",
  "key12": "4iSGFN5KLQbgY9kBTtsdUmMpkjBAXS9Wo14wHfstV1KBbofojHtwLwxUD4uxzMmhAKuB7sLtwH2HYFq7geeq3B8Y",
  "key13": "5aVt6NygznvLdNHsvpmfRmjfaiJYKSUVaxmbeJ2b7zQeWM2a9xuxhZ3kf2pfPn8xthh5nN2rQcjteHpX6fqMKoko",
  "key14": "pzzgN7gn95uaKwFzWcTZuhkcLJ2gWErgeNFArzZrykEXuFWwxLBQn1TTsUyMdYmDA3YYi8kdL7PdAoPcXYYN6vH",
  "key15": "3KB5PLsvs7Qo7dd5628YguLwLeU62Ym5PJwCfN5DKbU2Wb5sjJFq6PyGi5tyUV5zxJvm2KUoY1qzZiU8H4rmeW3D",
  "key16": "2Wz3nPEpSnhymuEuFMhCfZytdEUt89hJVeMdvtyShc8upDCSdQNw94fv9Yu3v3DFP7V4qMBSEXLAdbiXRx18YgfC",
  "key17": "3gFXy8xk1SwSuLhbxV3iGa7tc2uRJgQzPBRjqj5EraC1yv32J8WhZNoYfXJ2vdMgEvk2FLpLufdt6FErboZw1mz2",
  "key18": "RJynW5zyF8CE5J9MKySmy2KjM9xU4NqY8z174EViPN8VojXo4nXSVGgWK3FRgqndbEY46L1BG32SVzvVFR5XJTa",
  "key19": "5q7D2oFAvFz8Zu4bQZRLHT5TLgUPYkn55di8XTNfB5UCwetoGxZH7VP5KTqs2ubPZM7HiyEaG4qnPNjAHExLbarx",
  "key20": "5YJ4HE4953URdZHA4zgAB4vzWZPpXArfngzwCnhJBm3apM6uUu5DVt4sHA4ehh9hcJ27hd4T8wRAVpgr8kmFXsba",
  "key21": "33STHg4gJAjo32WcAghM8HqL15QnMd28yWNtWXyM9XM5YoGAqQZ4ctmkfmbX9gvwe9qTPj49NYdMFXWkTvridcUJ",
  "key22": "22BhbzPmnuiuVLqqsY83WjZaWibCkRfJvhRLYDZcQWsDgBtqmLbJgtT7aHScA4W4dTH59M8DQ4ZohoKsNhVaSHKs",
  "key23": "3xs7W6JoV5STs187PZCkmUrSL5UBgvApiYT3efoH7uhYxsjN2o9oRwqe7n3NXt6EQHDcQrV1iSG4DZvN37LMqMMh",
  "key24": "33jgHzPCgg6Y8cmpTqfaRr9UQPzjV1d6HkasThoSYvaTZPgm4T9KxhDqusWDr9rHYb2ABQH8TWpU7WFFJxzjR1CX",
  "key25": "2QrmyBDEQapBFRxhzo7CKLqPzaKVeEsDWxFS2s3tJ2EdNJ48imY7fuqaBGYH5UhicMZSJfd8YY5ZEE55zQr37cip",
  "key26": "b5xaT2fa2quw6Z7WrKXxa7Cwe8c9LuZTQpVMocMxDXnLWq4FJ7M97adP1BvZPVkmUA7xi1De2dULnrUq7sKLK2y",
  "key27": "2Mx2JoUfYDSGdMKHgLte411x7HnhnKgVbF7ckQWsvsExU5dtTsQiEa1m3rgZhHHzJNVrG6dkEXLJJqqsssCd7fgF",
  "key28": "5pYsc6EoL7HEgDrgYwms2Y5Wp7Lg9xtHHzphnH545dUy3Su6DQDbZAvLmbEEn1GpogQ7CJZxDu3ypYqnm4RNg7eN",
  "key29": "2SWqL9qpYBZaBYyJmn8xHbZwuUMGdjLna6LcGjSNVsCntfzYabvMaw4EjmhATxpCKyejhG4myMR5Be3sUE3woiDF",
  "key30": "5ijx2Rp25Cju7FnpKj7jDgddPWQHpQvqnKL6ZfrT6uG5rrVbWRLK4ZGcyxMPpxBtWMX41USKr7FZih7G6jTSo2o2",
  "key31": "2sfFCx3otJYZqbpBgUmNktzNwJdNDddbYsHvJwdBLZ6JnxpNXELkc3PsURetpjiJ1tfNc16JmxXQegxVktguApn3",
  "key32": "4BZ5FR3fCVdM9QmYQipjs7FFWznnLJ4w7fYLrBuTNzxePLa85DNN8ie3DwUp5Zcarec6v6U4R7KegL7MhdL82BPF",
  "key33": "2bsWKBfNDHo9DQMc58mJRReJU9TvLrWHuzBugTPZ9uCqtnX9bEEmNsHgzyRPAArCNVnnnYQWtvjm1qzcBXSDBbEx",
  "key34": "dJhRu4nx9xsqcCfyHM82fkyVMfsSoncryWRUbPqYfhdFDLRJuYsM2jo1zqeCo83WYjzaorPZXs42ZywxVWdzdgo"
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
