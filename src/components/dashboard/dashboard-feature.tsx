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
    "3gqy2Fkf6LK1tNqzKS6Cx74Pe7ua16cwJa1ynmJDzVWKKvBc4Atjy7w9uXTo3awvBgMqrxMmRvjZjeS244BcyYNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xbVcJndHy9LSZN3WFbAyBC1Jav41j2Rpqi4TnUuq3BfqViqLzVNH6E3e52aLYjoUg23x6DkHm2emZm3qwBf8Nc2",
  "key1": "4yEW9AeDrhxMS9RiQ76psHZ45ynUSG1VGiBDi6CuXdzwuCTG2xWfmsKUqEA3bQDJ9YsKnsyyMrsz5rMLPdwcmVST",
  "key2": "pvzCXALGa6rSM86HuFFAeA76NyjVqct4bWgKaj9vc3o7AyjatjoJXzYnJMcXTgoM7aCrCLGexGQUBehUkZwKTUJ",
  "key3": "4haoFrAPM34sDHEyEeWL1uwaUDWRJv2PeuFhEEtMcNqu99E5wkqQs6YScoekSf2Tp4Ka6EL5Nr165kaHu7FmUuX7",
  "key4": "3f6hVTt4SsTK5Kowo84Q3EKCx8rWcnk6qPSJBTM1GXNHje2sAEmohGq3HkHxhqpGBNMSfwoayrACuBDjNnR64Ao7",
  "key5": "4M8FtGQJiNZGLjMAgCLBhKhVpPW7bfEDykTUibRgfsDrgMQfbtuMuhK21kQjwDzwDe5ANMpnLG9G2XyMHhuhUQNa",
  "key6": "37LgFWeLQ4z8r3v5x1ftcg1bAvx3mpvPBrdLEtZoUZesavcbYR9xERMmtoFtSaGRYmK7i3M45XygFgiCSR8ZhjiS",
  "key7": "3RUUsn45vw78A7VzRHg5kRKmaB7ovdwoLTVEYkoyK8FxqDySYNpLqfGzB2gL6rrnoL5sVqvBbyRqdvyUWLKspfTG",
  "key8": "62rdeE28UaJWwSG3ALh5PBX7MpyrnzsreEHtvqjBMnszGo5X3FRd6j47FjJujqzzWH7RJrX6i6pBPegyPah9Dc71",
  "key9": "3madH2xWvohQeYx8o48peCkKwsXmhWKU2PuyrhCUsu439qjenbW7gHw3Amg8r3JvYTVCBrniuEVyPzLQg3Zi5ha3",
  "key10": "22uJqLGWSWVnhZMpuN6RvqpM7UaPD5CK7RkKjyQhLBJYikB9ZYcoTUXPk93qG1U1g3mH98LaMXLjgn71w2vQvP8p",
  "key11": "qVuBNzg5HbwFMohsSaDiTVrJ1qqQnvmm3isP9bEN5RefLL8Zp2Q73tAL1BN3JNKWbWaZYH8PjyCWVd2pKADF6aN",
  "key12": "3BQj5rDwqkYcRedcUVS3oMYo9jPX9DoAWrBjdT4mj6hcAgsAQ6oGU5f12DzzPMF3zYsqYEM4m34JcE7spB55EH6n",
  "key13": "2LmKTTKvXA64tHu7DzakgxKYDpduMJa4NTanJJXJf4RLixVvKhii42LRQPEXpkAjxC4uJDdRxrviG5bWJvvAAJup",
  "key14": "2UshSQxsGn9DJVVjW11u2RtYv4nmd2F466YwkL4VDEca7fdysWL98YWGE6crT8ZuTeWBVDEQYyhKii2t7RHuGASJ",
  "key15": "HzvCWMGquXnGZQWVmMpUqok5w8TJP5h95YaZ7yM98wbG1L4MoBDkF82PbJUXiCTbP96e6VVqWn18LcNs2nzZteP",
  "key16": "3XRsMFQtM7n1dQEUpDKtu1jxt4hXgNrE5yUDSHZMe9vgLVXxp2rej6su71znV7ZsBxLgZpiiiFVy3rRn8fSo4x3e",
  "key17": "3BwbUK17HvBKTRjj1r5fMw2TNnu5755cwzK5LirtLCCMV4j9xk9AiDDK2BJJKoZytWFcufYxGktQ7tZbvedWbCWi",
  "key18": "4EKAiCNirMpknwi5MoaggHpRT1VRT9uWqCuDcGSDuKzYxgaGNReqTAeo7mz34BK4QFwoYBYWmGiAtxo2QWcwTmaB",
  "key19": "4EnmH2qHAA1cCCEGd3Kgm3u5mVEV2FoGtPqWAzbBcvATnwVHzgJa7ELMu8smDVdMS9fCjjSD18yBwerjUv5rUpcu",
  "key20": "4xTNsgumQsXYEpzHkSZUtQfmwdARVRjKM5LLKkomPX5AqPxjH8BZQA2oqUt8qFFeUDkkdisAZmsL3GoC9nabEAan",
  "key21": "5muAAjPiDh5skHuqQaLYfFDiJNWkEsbf4S7PJrRHbJf8g3XX8Yo25xJfrkDAECMfnTzKLeMeSrVYDNHuQ3ZC9vga",
  "key22": "3GWiz7md7Lf45x8fpBVLnN9wPMAmJ5ykqyQbRfwT3p58VxrrwE56UQQbtWk88M1ik8RUSyTJnnp4d4NHzuABrdbk",
  "key23": "53bJBRf6YWnmyyGR4E2owsSJ5amaKPFquG2pcUwSxbcUoe3XwhomZzPTQb8cWYrWwKtrXn8Uqpn6xYSdMdbv9uCk",
  "key24": "2B4LWKksw8Wy666qg5EDXg9TTZByKZB4qvVs9K8K3WVSDQzBCSybFmag9ygndy25yoNghRhiq6TWdom7AGZ62JRA",
  "key25": "U2gs3d6XtDVUog1dWJVtw6ELDfCVRp6nzBy1bPLcD9F7FXe7uFnxNp3U8SswSovi8Zh1ysUZRCfQeFYBPEnSTRD",
  "key26": "4ZNqkPsXJWuVerptMTA46xpDmSuxYMi1S3EgQ7g2EFCQEc82ubJxCEr8BntZLfgovLzwPRBcxQxDyjbQviN4Jwsm",
  "key27": "4udDwXqPW4fnenVDNxHZzaFnqs4e7WpMNiBHVngoYPmqRK5zQ1Ua2BuidafWDmdkD6wHv8XHbJC35Sv9C28ToEr",
  "key28": "3nhFwa5X1GNffNrPHcPtkkj2zF4Pi467RFVhZb2pFku6XnF8EKVUMFdZX9kDmPG7TW7CXgovNTn9BZA39K3Zrb7F",
  "key29": "F8SVoRrKYLdmNVijJiS4gPjJkTQoY5MQBFaGEYJLV6nbFyFq4M5GAcec3c8qxCHsAASTr6AxWMKWi4Zo45SnYM8",
  "key30": "fgsG4mmw6dyCDzTGt2piSfkZkGo2d6Xh9mCbNwKkEgDs8zTLPxpPoATuHFe8ved3YXbwFodiURMupsUTsbMJHpd",
  "key31": "4aC3cM4xkcRsvZ8kZ3fgugWZ8pMRRqBW7hthpETTJCCRAqGiFk8RZyRTUAHsoViexc1V9fUHkGaszVAvSGQNoC2e",
  "key32": "5XyXTybZ3xPS6UTEzrSqtUxrXLX2ATCGYLeSeKZejUCMxoGJnQNKmqzHJBXyNaPu1scBjpM89Sa3wYs2LL5j8i1V",
  "key33": "4PpmveYpSG4jEhgA1rdB5kCvVNZjwN3BiJ6YKox9Ex2EVVEaFMk2zxu1GHA97NxpZhDnhgiBr56QX84UY5Cnv58i",
  "key34": "4Ro6knepT4zSmKMA3Kwe5mEfkyHrum69BsFLheisP18gD8qoy1AR9srDzerqP1kr7vMvDnqchKyQztx3sRHnK6gk",
  "key35": "5Q6b5FyWCqbJXm9rwgkR4DtGGCiAQHYECAsk1CvcMv2LR8dR1heSKz6VjUrKUnNTJ7Ls4LJLXVMWCHwR5MzfiAEq",
  "key36": "4TM3nC1sGXXfaa9eU5GfztGkBLMDpxBx2Gi6aGXPHomG39mWNviYiTzi9xmieR5cHiBcuCq4X6fShaxY4MqyWcjk",
  "key37": "5qwNkLGVPKPhmHLUtF1cqswLgm17BtKu3kLj7FKZhhomkCpYsonuZ9GQV5y4wEE7SpobQYv2LEpDXK4HD3QkF2YS",
  "key38": "bwKk3TfkWtiJFRQ6F3tmamRBaHJBBnJvgRsSQzE9s9q6m31q4GhSWn5yrM4z57GeR2eW6tK7tv7srDQN1TsiKKm",
  "key39": "2xHsXx3N117dZNWQDosHdjyUcUvuvqnnbJ6n4pF9hkYagVXAbR4U9J4ioYDQKDKxUxu3V7BxvnGmPoxamkkCDzgF",
  "key40": "27cKey3NDbemsTa18mLCCwTX2JF6p48FNWfNcgj6tcR3j1fbPByzbXrNQWLMbDpEMtDJK3ej1dz6vDSehfPXuPQw"
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
