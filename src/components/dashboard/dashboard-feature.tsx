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
    "3sG9tjiAtLVhAAix1MmbhEy1YYCRy5WTrQEX45T1Sw1oVqevaR1wKFUAzGgPF2fc45FPJPEg28vYsA8gC2zgcjmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3384gjpypawKjX4rdrN7dE355C4yAfowDUJQHTGtHPWKM7F5daTAkd6dHyLzGmWdJUHSiPDSSB516Q2nraXLkbad",
  "key1": "2WX9gTAPY5h1LcBK3Et3bkj83B6w2b85V2NChA9hMvDkjLPjUrwHGrsZaLBRdu9Vgq6i3NqXGky9faXHuyP48DCv",
  "key2": "5d2cwYSw9dRUgfi99X4ESymKmJ6DjNKxH49DwzjSbZ1M6oGkHHtgb5acwnihyt24nUmp9JfJL99YmLt6TSH8GNKF",
  "key3": "55qmdzQt3jVPYKrmuwL1a8tnVm551m4CaAg6uVQwVdbBt9kF9gtVEmwUYrpGh4sj2Nu499RbzjgadwZ2bWHxt8C",
  "key4": "67BMoikGe1mcU6cUrShRPcX8DpFJQqYek6eBYQdMJiJQoCBWjzeUXHSfsK2eQAXXmD86LY5ntx6dCFHzDnWWNNZd",
  "key5": "2cGYEkVS944fBwUB7H6pn113e155KVqCUTGhJujFzf2DCnxqcvmUJRL2Bn5y64aq2dH4RMbYkt4THJUn5hjJnBZg",
  "key6": "2KysWkwFtcffYXvkLTDBGD61L8m9YnHrLS5NUWRmGReH9HuP51pVj1DEX1jgjZQbRjQcMEJXzjRxyk2tRSY85Z8j",
  "key7": "4saJyR92iohKU9aNi2K7bgaSvju8xCFisFrcJ9XHYH6wWy1984co9LJMDefbLcCnLGmQMbJKmSKbLVKSAdSAe5W3",
  "key8": "tPKHtBBzpy3AZaoNSYjD8FPymAXkmjxvjLmUruyLXzuKXsMRzFwmKPGxxwdH36fhKF1vchKQCMz2etTq5PcQCty",
  "key9": "ekvLAY7SMy8Los38j4MvdH8AB8DwffVac9m7cKXajWYikrnZMmbriTGtDStNU3xb8vWXxLaoiRGPYRA68LqRn74",
  "key10": "2wwxLinXtvxBitxZDQqu3Kn5fpY7gkdZwC2tajb141W8KW4sbtuVkYBRoyuCqht5cuhaTdp7b9tVYbQNkz9CEp1e",
  "key11": "2MJrkzXyWSQ4hXJiibn1yuKP8dSqXDxtFvwSqbM2kEFPC42aQ5qJkGYNz2qk2k7e5353MD9RSwbs7b5Vhs77aKnn",
  "key12": "61ESZ24gJnowRvxD7fYyb4rG8qp44wGeupiR3JL98QwbUtEWFJrFZMTKS3L1Tk6LUbjWAf7gFVKhynU1AmgsH1yz",
  "key13": "2D94sB2pvmBKY8tczSDbsN8Gy6PxnYSCM5qwNbFgacciGqucMkniX314ByrHS7qE2agUxbBVhuYGAHwn86TBU9ga",
  "key14": "5KvicWujLMULNsTgFXYWQmjVCVeLBF2KFvm6MqcA6ztwxWcxpziSYRxKMVWtUBWpdVqi8HjscE47C7srDf7EAgXJ",
  "key15": "2pSV6878dM7Qu3QvyWXv1PvtZ3LKtxCV9ATc4Y1Lh9CuxdTjsTygtHbj5NBiYiUWeTaW6MuyLYQAvNYNSX94V8Vz",
  "key16": "4iY6AayBauSmc9D2brtemWwZFYXYfASpJRBs38ydKN7PK8rpUoRsvsswGYZsrKe4xojUdtRfB2Gf1VzMZwYs5xVQ",
  "key17": "67E6BYsrzeSDHwdh4d6zgeShnWFVuYQBuCGHgENXiqbRib8f37r6B77Ywu5VfWPebaycAW9J5Pniq8btSJoX248g",
  "key18": "2xetUZFeGSMYUBeN9vCYtP2rmn93oXaPHosXJyb7UvkErU3XHghmShdGFxiDVEBHoMWVEe7DLW6QVnrZiAMesMzi",
  "key19": "VPQS5miq8GmUPELwTheVfx39s4nphYXgheV9yFxZNPDm1qm869fuXZYwmr45qdQHfmk1Nrsnqx8h5pgh8UReLre",
  "key20": "32DNs8HuBQ6xf9p6NPUpk9hpP4A5EujPoWTHchkgPkXwWYrmJPMq8o2yehCwsPN6L7Q6jH16nMjb995ZhV6LSk6m",
  "key21": "FcjCTGbDDhCRTdBro3NFNsxtkgHHKUtrRMMm5arWp48cnN6xC6VSKDw1N7frVTND1hdYojijQdoPx5yWo4nLSxS",
  "key22": "3jRZQzr8p3Pnj4RG7TxCCYmbrRe4q3spTuGyWgoLS5FxensE3cbRQXftpA2FXiCd8RiLZ76t2Zz6uWfBJUPj9QUp",
  "key23": "4NjoQFo8BZ6GtHL6tHNdE7rLWQhvtU38sYDMTKHBXsUJXz9F5rgkvMH7YP2M5ErLpi4t7ruKLhZLEX2SeVvAyuKW",
  "key24": "3xEB4ZSSMXizLNiFaaexYGRD3veSJ6F3Q84Gj8S7635fPhYXTdbD4G9AstZmgPJ24Rruf12ESUu6L4hiuHMQHX6B",
  "key25": "63ZRY7AbytWCdk4Lho8Py8wrqadEGHdSWkdsqYwAZqhDVAnVvqwSSSgYbEnvWhHRTrHQ24JJBfdkqLKYaCM2r8F",
  "key26": "2cHcQahFcR2gFjfvmLptmE1igAZbU25MeZwd1beaBVtTaBFiKgrHx88rae4JGG2KQ1TL2z46QaHrngrJYX4hGoXZ",
  "key27": "2Z7LPCDcyLEh6kZ1dRtHCznEq9TDt4uNAc2CrbANBXetsFjyitYGbrNTsgAoeT2vXe7jv2rHZmJCMj5vDQiTEAyC",
  "key28": "4QHUQvjFBSboh2uadht9bqyyj9p1hYYxL4cqdJjr3C99uyb25jyDNwkq5CRz2p2NgkrEFuwJCNthA3xw9xxxQEfE",
  "key29": "cBa9mEdpjSuw8BCHzhrUypuUsWDDKZLcat1jbm8LVZj5PpWauPEPm3xNPueokPKsRBw1vnFrCxLoxBtmuLPtckK",
  "key30": "5MWhv4rsXmfhNjNg5rrRuXtrtpeQtV1pKMQcR5uByKPEaHfJtaSi6Z567ymEbvJCgwGGZDXiqvoHzn25mMbpNboD",
  "key31": "3uTuaqnBpQKw65ShtitacNjWuSdbEEmULvADqpBo7ry2guRuHv8f5wpdh938jQX4JiKJ3gTqc4smKb8sLFLvdpUV",
  "key32": "56Viy6HGqyuQDcKDitcKcTfFyEVYLbc3pYpfeARrCXPouxcbs5kQEgYFrZLLYTErEj9URdJQynESnsLCXPJWaapX",
  "key33": "5RMjgemx9uUFALhZQtqqjDq4TCGaS28Don2fhy3fbek7rPHwB1wTFUoqJNApWE6Ytz8t1qSav5V2eCNaUZVE1Udq",
  "key34": "8FtBtKFpU2BYuPwEDemyC8mnHXCkiF6QmxVbtAmQHoEYeR1LVf5LLiMc8xThfJpxPfT5JgqhpgnGzjzpLgPMUnt",
  "key35": "pntfnijqPAg5Zi3ifnrn6mnMyr6bmbb325SXBda4FUH4Dr9DFZxvMsgfCi2PdCYdmVVQAEbag7SdJqDWB8xHUjA",
  "key36": "5Lhybr6j5yUC51eXQN7xmKhCV67yrbW11xRBQW4Kn2bkLbm6Tejjdj6iZPDaCvor7YFGrxMyQorsybSjzwZPK2up",
  "key37": "5K2kge4X6925AebAAndh3oHEP7xxGbwupFRWg5HUkn1FRQizvkVuZSwyoMei2NWQkid9jp5DecMoMYXVekNfpKck",
  "key38": "3WoSAodDgx5rakEfMT9ytaSaUpZ4gLN1iWrfK4cBapjEyX9NpR3YQX9noFyBDx9dUjmqxtAWKEQaqaMxQwKhvDQx",
  "key39": "5wFUaLuo6oK9Z2ZPxJQNbBggCyPk7fWB8PS5ZT9M9Zmtq4k7DC8QVYNbzSgWY7NZpZ2774TotQ3eZa21f9XrJ2s8",
  "key40": "3H9EUu2tXdmLFEyxgANxGb8rXZ6MnYrPBEmTaqj6Xt4GnjF1AfziWFZ4aHiBwXM6q5MfNJANyY8uzGv7pdDSTnXN",
  "key41": "5a43GuJYy6qZFfT48EFjyXmRpshwGem6ioNBYyjNeqBZD81o6Bwh7HTKtcGDhNYrwN9GBPwpG5KSaz4joWue2SqH",
  "key42": "6FFcGue8qdnukBqFUTSbmgASRxYtYPqFb3TwTGvBqNdYd7vNxzseqz96vJwWmvNJyVZZHPdQ6uudNg9MWhLgvNy"
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
