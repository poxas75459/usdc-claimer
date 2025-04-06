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
    "329t5D78KafKpB1CKHeLakYcPVBQAwSDUc8Ktqwb3tyFsCmiA8GhGUKtPKwd9N4vA5TyRhhGBCnJKWXx83QRM71x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXYpMU9NMyirTFs9Q2mZEUSqNy8cjCBuSPzEyHxERUa1W2rRiyTjx5adfoWNXwudTXtSgWtVo1wJ6YHPdeGj6pK",
  "key1": "5aYPsMmWSLgokwwamJ22kCBiymZk36pgMaDkNwBMTcUvh1b6sAfyQ3ebePWdgekHrMaVY9yWnnVfTBwZx15MMfi7",
  "key2": "5GSUSDmqf7buMQNDMHLgiJprso2o8LgtxS3d3yHu7RoxtjkHzFwbV58d32fzDtUwb9reJEKxkAhPzngibgZn9usA",
  "key3": "3gyW3yCHoreRza1hqWvSaJZLY2kCwXUtr7UhJQ5kovpne83WprdL7t3KQVJDLXZutVa2N7N9XiFH1rAoiDoRRfU5",
  "key4": "3vRgUuoodJt4oM2vgCoKcE72NAui5vtmgDLoYKDFgXZHWRBGQKv7FNbpChsndW5hnWrvsaFWrAJenbdcg55go2h1",
  "key5": "4kZJJ78eX2xVsAezFHr4pFPbTp1Z2DbBeHw9V4zBXjfYRLMUdKxHVVhTm8YJqcVUFoqfwgpVxEva9XAnYfKSAPtm",
  "key6": "2kuNRuS1RhYymeHgTxqRySS2WaosT9NkVyvNaGjT8JNJRcVHfYaN3s5sPyykYE3HjUQEh5oj1XSYzLLTRBj4LGAK",
  "key7": "Yj5Vt6qoz4MyfmhUUWGmHyJnonWiaNgwf8t8KuqjyhMXNqqhhogn2UJvnfuJG4cFoV33Luje151gXpanxmQBpAf",
  "key8": "3BtXGt4xEvK55fgoLSmrFQTr5MbT5gZMSq2UDFtgMF2gHNBJzoSvqPdTj9JT1AMgXuGvnaex85gG8wjEDLsWfidh",
  "key9": "4465PLEiXpaior4dXJWHQPKagYnKGu1QLPvGBz7QLftowbQFeVeYLhAM9FMymZkpCVPP2MHpJTUrQuePtaT6e2wG",
  "key10": "5GbW2hvxiYiVfZfpkhD3EwzSHPGKoGqW6WtKfBhivomexHSZmduMGR62ePcbnqwDuQDyHZzNfLu8SDf6fzVhqZSY",
  "key11": "32wgS7PiuNLfAykSisTsKQgYwCR9rDS5kuefXLqWtra6eHWp5n9NGD3AwEo5NkkZb5RTHwHNTBAqS7zNKpr7B92w",
  "key12": "4uAqg2o9D6xnyKo8w4jXZ8xUrSSgF4VZAgkFa6XNGLhd239C4dR5yLEUnKFcXgZB4TSjr4N4Gwci7Ypu1BEZMzqV",
  "key13": "3iUpH5TTYqUkLJrUdwfKcfSXT9jmaoVsgiY4pD4c8biyvsAEdZcKvvPvUbtQS29VB4y7k4CSp6FDKJfAyi8mu5bn",
  "key14": "vmswusxzGXzp6xMSEbf4pTnVh2ejLTkrpx1rFrrsdRaWwdXnymQFBDPmSSiRaJPTna2TUJnBGHqoACs45xsnGSi",
  "key15": "2xFpuPXx9yznMCPEEGcbrEVhvCstiudsUZ1H6cN39bKwNNtFYEGb42RfPB6McspzqSybZEx8fdf1AE2HmMMgkb2Z",
  "key16": "2pXKxUmJJ5zAoKmphgsV9u4vcit2igejxSawPdXrxK4Lb8bextuoDQsMxU3UHh2rtBiMhUB4jMqfP6FsB2BUNAJX",
  "key17": "4SYwh5fbeK9AinutA2sxYFjFDiwKf6xVpts8kQ566YC8xwVE4DVayXEEJdL86Adxg2yJ9pMXJbF5e2orE7FFAVBq",
  "key18": "2yeBg3ZUCX2jMuMSj54XH5SLixLMNwdc5ZodKjjVjZRGvbyGuiQA4q5SAing4JVVu2oHmXLwuvtUK6VcNvPMG1cU",
  "key19": "nrSkZwk3Rkex5XR2SdJ2JhHPEuWN5h6iU5W1mMC199iD7Ds1x7Dw1PgTKiMmNR6Vh6z2ZRyrcr6o4qhiySZC32c",
  "key20": "2QgzSNytJAiWFKmXfVAtjxVeeQciUpJd9bSqvTAPNKLcgFMnxUPoUTnezQieNJWRbrL9nWMVAWch9mDZbfqa8Jqw",
  "key21": "3hV9HokF2xTQtkmGp39SPdbh6zcfPXEAaT9Q7Z6aqtHJVchubSAZPmD6mCSRM9oEfLDdKvQPhVwF9MQ2M4y5BhHB",
  "key22": "2h6ktr6SmhiHH5ZHoFdPjUc6jhBoMddJ4qEfhyaXggKhyJ2PbwNSCsxi5Dx1auJVKJJwsBHvC4QWr4qM9vneWbih",
  "key23": "5qwUF5CFDS6asiBGsibCc95Zea11KZxH7frqcA4UKer6vk9beygF6CkjvZrkE5uC4yzPMWrKbDfRLiop4u933nqx",
  "key24": "2Z4AioVycMyp8zJiQGE5Ky4isWi1HM2mBiCVj5J2xhKwujD8tk5k9Y8LNgNUeAJQTysgAuixTzMCaPVSzGEsMZs9",
  "key25": "4k9Tp3NWK5eF8RFtuRwFuxChctx92yBvRuvXyVzwspFFkdTytVVFwKKDuMRM24EKzQUq6wDdi4ZrU8N36DevUcsr",
  "key26": "3yaDNXg8JfVxA5jecA1R5jYiM7aZXkj8iq1o65sjbJ37CW3bTQU7UVC8xnD5MqE5WRBdQh4GfkxpykCE73n39sya",
  "key27": "zRYGYGUvHsCeiXg4b2vauf3vko8EQ5FjzhE8uKz4soAtQ1qtFHpmmFad8RHvP3wLAnM9P1LrLYsEu96V4A5xTor",
  "key28": "671dcqWk2tSAxX4X91cXUdrfKgQxLxsnsDqebHfKJ1ktznMhGJHRTQwnxWGtyv7e1LB8KprV6CtFyudbqTzKaFyA",
  "key29": "5JCaNyMWZMLoAMN7jgwYCW7RQ9vmPCFjtXWcXHkPWiNko6GBYuKL2u2SUTzc4zAmuhbRhY6a1czG9KpWZQeEuSfp",
  "key30": "3cwD8sHqZzEeBBZRTJVBMJEdFtuwHXxvmtVQ8m6PTXrWtdPsM3b37cDtApsQ6JfzxuJWwg84XnEUTP3EEygixP5V",
  "key31": "JerUD7zmFVH3X1mmrJdHBA2pu3TKKfH4A6KY5nxc1thtK32SKwqVLYqVMrzQH7vkpdZvY4YDuPv7vgu5AYw2SMm",
  "key32": "4J6P252FMkdKXo12vij5RpkDK7XAANkDcJia8qW2gHnucWj3Hc4MqpRQrKRB9NSHCBVcZBXvgcXG89R6HUrwEwQe",
  "key33": "2qSu5SXtmvf6MdTk9MiabSFu2phJ146rC7MRRLB5UyUg6fDfvdbYKKGVpptGG4xCau8FdyPtu1bLBZBm5BUJiE5p",
  "key34": "fCp6J5wb9YvdjsDaACkASWSMjV8soTqCiXy2edGSZmiJuypW61h7V1eJdc71a9rnVrA4e8B2wrhPJbWhzdkcZ7E",
  "key35": "2kafjAUiUK6Mr13TVx5SuAceCATNriWnMk4mALtUZaRuoTYd4vZR9tnNwvQEPei44wnHoBFWRAYBx8K5QQv7zK8D",
  "key36": "5UkKVeRb2V2eBiHck8wAVvASBjyS2Vyn4SQvefw6XYaHqxPQviZFZcfMNiEJZLwfnsPYkz9zN11h49tXojpkuUj5",
  "key37": "5wzTCD6vq3vBd4d1mSVHMd2SjneEK8QT4yxnGwqMM1Ysj9tuwsrCTwPCCUUyZGEswaUVRkog8cmXoaTgheu9yZ9F",
  "key38": "4g9EqVnqZMh9nuHc7vLaFPEn9Prej5JDq1SQoSZWzuU6NYtif7XKEwXfbbxBxr61FvyKZZJnpTRiuf6p98sRwCGo",
  "key39": "4KqAXYFfd5dtaKVR6SEYRm4Sqbrym1eDfEnLyWr61ooXeXwNG48QiRuPjHPNbBhiNXFyBmpfm5kthrC69RfEutxo",
  "key40": "WdrzkuQeZbpkxT1Ykntrf63mhoFSH7bHsiKmhyzoWFPV4tpRccS2mkkHTqDFfqYMkU4GbtFr9Ea37jDh29NQCmD",
  "key41": "4CpntW7PHCoFS6g4Fu9MAcLfaFoUFd98rXzk51hYMy7P9UbctDPpPNNz33C1vY6uKNhS81ALE2CHRxLWZBcFNjCz",
  "key42": "ie3RhfvPsvD6VhUBC95G572BYNDB4s5Jjvrjc2ASFYKAWPGMfxQYxQQJMD66vcicgZRv8WmYpzVTgK5TLH8Z6UW"
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
