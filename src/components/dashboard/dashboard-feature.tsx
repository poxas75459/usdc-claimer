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
    "4EMhNbFKb2CqMh1UjyfgkQfjjv4FLjVTQhxDNKyxRajrUmWM5k96S7uzNzSZkeGGDsH2PJ2P9HG4p9FkKbWTJpac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZkt4iPW6Ff6Egs7zEaKv7T56WcJWcrSue6CBBTTMhtdJfvEf8t1cuBfZsKpdCaDcQxjaHzJMkAoS63tnFcYRBs",
  "key1": "5oK1jWphKpsJ1wxWmVh64C72VkNCuwyGyd2DNf3KREfY73AGkaPedAAK3ZdekU4Su4cKx6oCsava9F9P4AeSRK8B",
  "key2": "2hyufbv2hZgdwss5sy6XGnXhi8GH6NjYBdpd2ypSQ4FqJgmfuHY1qA6iEQwxdHwe6EijmvCthS9DEeZASdstwebX",
  "key3": "5EmFcn6nBk4w2bLBXWGQS4aYP4W2EAinmajAVRR89s4CVYxUUPSrLvngaDHbftW6sLEVFzpKvTbUa2yaNLqbTGaL",
  "key4": "EaQNiGT95rJkXRdu5Hiu7EfNxoz93zxGVkBHgyhwJgmrEuijobcvnFcmN9KrEWQMgqChj6V585YziEfekzXX6iX",
  "key5": "3ynJYSAMt82vZhWSTCJuEhA1uR3ECCfRvEJKdt6bkkBchWo5Zv2NUQ1dTn33SosdjsE35PErGc4hJbqj6exa1QdX",
  "key6": "tDCkNvLSc7JFyLzRyaUSQf5aivreyJ4AQSgME4wtACFMezbQGsjkosEpfkU7LzKVmd4ZBqTRCfsBzfE2irwUs1u",
  "key7": "29tweG1BH8juL3afGiV3b77XRAR1wDX6yibSm7bK5CSKbt8xdy1KxYMphshKJs8Ge5HybERtbyTQeLRM4d9Mz5EV",
  "key8": "3go1nZFL9Rc5BqWuoz4z2x7ohB5KeK3Gb6E53u24yYb3Fvaivwb1HqAV8vb5PpADgDEVEDUugo2PmKWa4s6ASnqR",
  "key9": "56VHd8wNmAesanQ5jeTziJ6VDarqZe5P1JskF9T23JMAZ2u35sEmZzx78sHfNzR7aPG5cQEh7jZw4UgPMqBFdPR1",
  "key10": "P1EbfVFRRj7U7Wgs2TKsT5s5jLz9cLNgVsFH1DZ7xuTxd3pWuq5ggAte4J9HJry9zMM8ughJFBGzauBXUwPciag",
  "key11": "v7wwogmcJgFXJ9Rj4XTp4fibDdzRCmMTVVMJH2tNgxQrWgmmQMBhZ8NVUNimMJPYnB2kC1Mg7Y2FcTZGhJMzsvb",
  "key12": "3yhEAYbJUQXqgQRKc1rXQh9kRAATFXwWNE3QArYRASMVrWpDSx3fRGHfe4D9WMW9g3mLSoQaq8iMJdGkDsTB18vf",
  "key13": "G5E7gKirq2egjhz148YrdvH7x2NeUy3F6FZBtVhwSteETcwivAbfYVVfPet2Qp7nRudcrCqXNVwXYeiVB3P6PB6",
  "key14": "2JzewSKf4FRtqyUe34KwjAztKzrwV6y7cScn5f8f7oFFp8USe9pYMGncDm8zz9N7Yis1iPtyowdruYbWqGuQMi35",
  "key15": "4Yd16UvNNspo8nWwFKJK7imFEN4MWmQM9wASDWBXNV4QdUZAjVfsX5woqeTjHg6zCu7h18afKK7tiZocFS8ktLoh",
  "key16": "Be6LTNir9VuVWA34TrLgALbrnXbDEEmEbRM1kjx8HQjk5UjfLW6DzxfV81yyToboHrjPxsgistjSfx8vhPHoTg5",
  "key17": "3g3FbMbSonu664hs3q5s82p6FCgo3xM2YwUhXgb7KQc9MrqNq5vsncZrmCHKAfP76bHwx5fjwvDV9LLeExcJ9TBD",
  "key18": "5B8LAkv4w6ebPzzt2jPNaLMwxPmjDJpZkc2n2GYhCT2QqUqV2Z64waWJCotYno6KpdYcAL18JVzXmv9Fcxxzmi6Y",
  "key19": "3mgxsGKFGdPxiESKMyUP4ze3K5uYuUjsZQGC7D4ARGmKHzjHvnMx5npafPEhquV6PqM8dUv6NsPZ6UJ9mP3kEN25",
  "key20": "32DqpdCng24WsX4goDcXDpLzc2YjdykdeiF5A6YW5LrsK9TacnSGWEcfcVEPSiqthLnNEB7Rm88tRKotrDPiXUtr",
  "key21": "Sk3UVxcUQFmy37XCqhc31u99fHvbcWGtrsspkzMNxsuMVQgYF3Um7SppGchMEhgcK23vQxpBXtSftbwR8YiUiJJ",
  "key22": "3g5vE1JJ3kW9sRh2xE9g5fDcKHAy4BDFc6AvDr8rDPcxRHSJKMYw3NQ96ihuLrj8SHXzmB4tk68BVod8tLgfZnFV",
  "key23": "2x8qGgyVdT3kWvsAVj7smCMFXAF9EAy4JoS9hAKbPgqookRpuS3mTzMYvWiR21V1d5vdQsYiYyUyVvepgiupaVj2",
  "key24": "beAQSA2D31mevxnR9phiPTtmQSd3qqWmCy22BsYetK3sVVafNcgYNsGktdyoc3r8o5EW6GZGQUUnw9PypE9jm1W",
  "key25": "2YT9eigrydaavz2kBAX2HX41p97fU3mKjiCPfVxWMbNCtac1ZLTByNNdA6bSXKPVBx3EojaA9iEFYH24y5Xd3ZRx",
  "key26": "5hzX6jksp5tQSEP3XyXBygMZGRQjfLBPGKdf6Vn2ZSVKLV7u7bnPK2U2HbBQ6iqNCXWMXudg75NVh9UUhVYzNTKF",
  "key27": "5XPzDzpxXtRrwkVfqhwuZvmuZUonjgFZgSAbxmXhUkC8rNH1KPm4iHveB1YsBrKT5eJg7Tq1XP8TMjw1aWJYKqMi",
  "key28": "5MefiydkhWG6FzJrQyFRWdYTWJyMocgUzQRLopZfSMisJRWEbwmaq7cLeEWy9Djw7Ai62KgYuzAmYLm4Ck626bQd",
  "key29": "5mVt6MudEFmsUrXyiyPspZXUjejot7W2P5hpbJZiWGnXaXkTAu24R2MNu61sguE9ZBLhoWpKTn675FiKrVNnz7qA",
  "key30": "5KRe68x7gUizwb2gdoWZjkT8m1iKU7UBmjLBt6jQRG4FF69k2u7jrJAgb9UfdfuFu9zgmiNfk6itULXZPrrwnab7",
  "key31": "3VXmGQVA5YGxGVNHeka88q3DuFDsAbSyRBPPofKeRLeKeGTEiqM1W6FzrmL8H1uE9vBdfekusp5VHW52U1K294es",
  "key32": "4XJZqK4XsABgC2MXkVfv8EJ6WMBQ8K3XAuZkFYaNRygK2dMt3HsnVzCoJBEf3KF6AoCHausYoT3Es1bHoz5t69Qg",
  "key33": "5wD8cCTNubhourCEDv1f3KDcfuXmZSP4xvFY775WeyBYquC6bXSFRTPiP82iUQ6LHqyRHmWFgtCHAS9AKV8fpeQM",
  "key34": "RXCZXLzKa3BMZ2vGZmSgZ3ScM7TsaA6uT5zgmfcR3TcZVaHEh9hyqJo1UHr7LQ57AAULbJ5aitrhg9gfJS3kGUf",
  "key35": "d1QSxub3XpGeMsgxQoutuogm7Fa4W2XzQZxtWidnX86MNoQ2nSwFo2qC36EyFFSe7zWs3S9LGwayJkz8sELtmRb",
  "key36": "3Ms228NUszDx5QLHLyhSHm4AJqf3R8XSEMkSx5cJDtrEvUuaANFDARjLNcx5XesRZzH4tNnmqVKBtGvPor3cVf8h",
  "key37": "4t25ZTQirY7ycB3kDUDK1UUuyn4GHSu62nUYP1iRpU7kPHVuRxu1ZFJPJZXWGqrey8HHkpyE3kccEL4R6zr21d9v"
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
