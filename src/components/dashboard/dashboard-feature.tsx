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
    "4oeQ55sG6JVK1upooAgVnWGN5irJwwUgn9kMhBkdrc8p5KHfvwZsfZtMXguGkpX5Kv2Wja5HeDZjU9g8AzPaJ4iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Npkk2ysGjGhaU7xkpEvNyTufcQDg3dW3AgoWRDbaMoztsRvNc9tu5iWuYoMCrfy1wfWvnTEvzesbXpBDP3Qe4w1",
  "key1": "35hysEMBb2a1wATyVNEChPp97wKyRbRLYs5jMG1aaMt8yNg2uB4hErpXvUFwLSFBQSZwLsW3AKWx5bCbeGEgvSS8",
  "key2": "5a8zNVeAh6bmNYRgTF7ycgEBhGCUWYKkdQ9HZMSkVEV9DA8XjrJR3Yibiq2zUfEscFQLpFGD5voYcgYbQHm23red",
  "key3": "4Hq9x5vu2PrkXBvhugRMyrGX4marcNTkhNzEWLCpH6nuciNkm1aCh5FDdShPLoEjy7q9S8dZ1V6g4RAEwNG5U2oV",
  "key4": "2Yv4o2AgjafyVLzrkYunZZ1sAKw17YfUcASrTJaWUZBe2ekyfBYEyN28uJvznpjMpwwiwMaWU2UhFjw4QnLCd2fo",
  "key5": "5GCK1ViP7TuKRw5QBuGBXYzGiifSfLys86fj7V1DyTLeBhcdmZ1LNXaDJubCeFFc7TegpTubSrveWkjp6mvjhMYX",
  "key6": "wbSWzBxBP2n8dC2tk1WUXEnKmue4H5eVG5nCnmxDSehE1ZvrWLFfUZmqGopB1wjxBhfk9sBkok7RTH4tPosJMM3",
  "key7": "53V3yH6LkY7pJDV3UtS2YH7hNsdo1LnCkUTJoACfRPxXqNYiKT5GwJQCAZCkCYuNrgstTfdiJn7uj8cu6t8oqcy1",
  "key8": "7auw2DaffBxbqcEnBCSuCbVzaJwLtu8kErEHPtRDGXe1kFH1Z7StHxujZgfan728g8apyxhWNLnzPKvVHUA7Zu4",
  "key9": "8yxU69rxYiMsnJnkUc1oSJc2W6ZrdNzcBrtiY9MGsj5NaorVh7u5hiZHJ7iW3W3FiUT3BcPPzz8AaUWZPDr3MrN",
  "key10": "4wJZYVKB1BAWxzPKZNHw54V8CWW8ZHAbrfHUW2sbWowYDFZivBxQUza14wwFj8gaxSYQsXKHcvCFghfwBsyo6Brx",
  "key11": "itc8BN7HkkPs6B9M4GPEr96ixtD4vXScrRzvX1K5rihJdVdcCieVbH6oLTctffQYeZixLNiWWs3TZjvAMHjY8w4",
  "key12": "2HXDv4mo8EoZC8ba2JPvZVGRBKXN3v3hhKp9LiW6HnvASuk7iyCEiRu8315obH5o7XMKWiYHG3rdMuompWU1gmBH",
  "key13": "55EewgRPP71WBDyEmBxRkwS3e8uNLKzAyS6WXjjBhoYdNa149cS5xz6qzCnY1UtQptgYmpHiFtrt4SZBNtm82NVZ",
  "key14": "2H1XKv4HHHtATDGuKACfQkhvbcm6tZMJc4VgYFwq6eUAkVhKj4KVNjnZuezWkfH7fTKEo67t5YNfkjYDYq6dNno",
  "key15": "3BVXYD1P2puCcJLKka3HpZ89KiCu18A1jHkwB3AQDTao6fi4C7qegLEtCmcRUhxtxabVMaZXEnNtpHmssbWjedxp",
  "key16": "4Zg62d9zx7HLHRLGAaUXgXCFkmwzfePke7UjQn28pyNnJPQiGke7goxpiWMG6qHnoaPt72F2XxAMQJjp8tvA3GYW",
  "key17": "4VEZ5PgyUNLzsWTehoaXW9xFSu3pBAFa5TaJowPKK4fxfzkC8v6M5hPsWDrRJNZ6nR9E5MP9cnNg9PBJJttgNrNk",
  "key18": "48GhHrEXG8bKGYqY6iw9ovkZiJaZQwKP6NqJDeYrUEPRpnSi9NnZxnXHqhry4ujAcFVB5pkdY9ng2PzP2FCqKoyT",
  "key19": "sPQh81ZdcXgLpL7MBKytDfB2PPKRxpHT3nP6siYwdDvFogAhcg4LSgCqkUvE88ApcPXQ95n3vbYXDAzgDsN1yTg",
  "key20": "22jHnDeKKVi8WS2yfFjPUaeuWHwNWobsVXhn5tdgHikLRi6Qfr97KuboWoinhqr54EmxDcwopd2ZT74Bsghwtw8m",
  "key21": "53y8B4n4JEaTew98MDDDQpSssWhKDM8nCFoCrMa1YLqQUXZugzR1o2eNM8YwWVv3eZd7VjQjz65ipXNqTQ8gNXJt",
  "key22": "29yYakxytQfdqJzbZjBiD1C6Csg6eaJXqegw8LGMMMzVb6Fjhb5afSxGHzjjRAKEZSu9kNwqZj1VzKxWEsFDQ6AL",
  "key23": "5pZSZKJrPibrhVGDDeL5jMQmYunQHdHRtUeFTRiEMYy4ciMdDKLuAqHrHWJaxLWkb264BeTPdLacAQDJgvWJ3hbe",
  "key24": "2oBtadbrhYS5nybk4cLTXSDtP8UhDV2raUPZihm3oCrMyECoWUh1WSYsT52diBh7HoPTQ4EwVkd6kSZvApzjPWTj",
  "key25": "21gUADcPQrQsyQifTD6GwSHp8XcuwqT263oyE22GZQben74LgofaEDv6HjfD9sUVt8S6eLLj9yQZv5wdjNSfnhsg",
  "key26": "9uVSrA7zeG6EWYmmrkjTaNQCadzprULR48B5ki9MMoajuwHAtRz7DdkkUNdFUp2HwXx5dH6UUToVjAKNb45B7mL",
  "key27": "3EEKoCzv5MJdSDhGc5JvuryUu4TPmAbw84ngFPgk8Gurgrs43tnU1nRvv2czJ8aGV6DtVQNzz73uTgnZqn8n8ESQ",
  "key28": "358M8mK4QeNymMAD2Jw4nM8byTccWFxZHdk5Sv4a3CFh4vZpgvP26U5uyrp8ozkbfkq1jobHyskneCjtRYUJ36Qd",
  "key29": "3XHN6kzSQgpmEnHRiDxWArhTfFn9droD6tY4PQL2NhQsdjzHf1Z8gC3NWmLquwveemqA8X9wGNi77pWHYtWRL8Tz",
  "key30": "5ZDAyJwkw2BpREDprnRcxjHei5QNqkrLDN8PzSTo9Bmfxh1PhrnaCckHBwrasugWA9toyKCUEZrMVMHy4WFF6Se5",
  "key31": "2K2K2ykmVfbbvnwVoX1eRRnsdkvs2R3FGNVhmaSxj8BnngeTL87FsLPxF5gBRon7675VkSp5c17XFzW896AqZLPB",
  "key32": "45Q5GqKfzn44onmHME5eRViPJPzEKHbn6tGZgiq6oAcxr1hx4TrUtUhBJbzomW9nYLgSo5nYiV89TuQnGTC4jFj9",
  "key33": "3fTpS4ybnuAZ7Vvn95DQnim5kgjQQKjNTCvhGkZxb5VMiCpJwcqttDwZYLAWHbBN4g7otaT2a1EykPiVHP3SPsi6",
  "key34": "2dcJt2gFphKgaAi2c5aZzKvFXm5m2QeNHCxqTHU5zGFBbTUwaMVfVn1p7PuRqVAkyvq4VTiMH6obEUW2AsoGrSVY",
  "key35": "42St1mc3mEzNyGBh2XT3HSS5c5BuXV8vynALyfuVxefKcmYvRFTCNhYXk4Cdjor6EHUnuHCNdZo32T8ryrmeSyy3",
  "key36": "3edYxsfyhN3Z4Jkx8bGLV6YksJzgs91KqYTSUvH462ZqrZVsNT5scvC8e6PC2mpB3PadDEGpyjgmiS7RksbXVcKu",
  "key37": "3S9FV4StxUmS518WaUrJfiXG9QxNvUo8c7dzXZHNTwLC7aBV9PZNrYfzJc7TB6zDZFJhtwuFehZjcUa6zBD4UfAF",
  "key38": "5wwNQ3KMFVRpb3vWhjJGPG7u9cmbHWrX1Cr1qB7xnZ99rzWCj2bW22n9Kteuku6KRyjjDmjr6pu6su6vGigqg7GX",
  "key39": "9YKoqQgJPXzqtFBvp2kmrwAg1Tro1sge3jMi5NU3KSSGyTBYD2sLi1AaDHDwJq23uEDogNj1zcPdCiMTiNZawgp",
  "key40": "3KzE6JS5fdU85mY5MTNXv2tLe3hbMENX1B98KVvyDEgQT7gauR3Ex8M18S2ret17qwt4eBJbzf9aGfTwBQUVhJB4"
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
