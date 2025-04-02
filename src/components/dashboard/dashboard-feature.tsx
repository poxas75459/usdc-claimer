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
    "svdGDWkrfipkFW7RBVUGG8bxQnevmJek5sPsU5LD3tovmULn8YATGYJ5CyG9KHHEfnQNoTPRV8h5pVGQA6AHUDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Vo1xpFZh6FBgrKioU2XbTXs2LTdXNXSJnw1763fmg8851mi9vvG8ZcJnzLGfZidhWrykpQd4a8yt6UZpVxJ3Wa",
  "key1": "3FqTLvZRpbA2bkjiD5UKiwUovjfeJnAed5dH3n9oSgYcFdDX62K3JZACYyvMiKti2m5JEZq2FHjFTGisoGPG4E5J",
  "key2": "K2y17xLv62cPHgk6jUqGhqmS5hXY3bQx8K3uezeVPebjwJbfrseJK6eSMaEkswx9nreLrQTtrmpFJ7hbozLQwVw",
  "key3": "2pUHcCM5Z2Qciew4avociJwUStBKNjsfAciGtgeJwPVw8AgZ9kjZrwhDU2raePv6hGB5xzGwvzZRA9MNTrvB2Ezs",
  "key4": "3K3zeYVkX5Y48uvag2B3MDGo6JWrHksm2RXydtrzFTvdMSwLTeVzoBAiGfVpuxJrem8YG6WY87QDKc5qfZBXHxqK",
  "key5": "2jdhkHVoQN7sTEVXDj6Ef3uzNj24pRQZKzvB3ttdsjDsRehKW5Yg6xBK96C9XvJCzwK1LK7aBWzecsWyBQxJf6VK",
  "key6": "4vraZYPJbLYDonGuSQp9gQZiRrR1uD1z8YHJbgqM5PK4q5VesRCBFu3bx92GwwWZKepwcUESoPoUi5MfrCqC2hz8",
  "key7": "3NTVTwmbSmFueaey9ZDmSrRULcyuEaPCpStCDo38FSpwezagEmaoz54uLfgs1mAgk3yNCdtBaXLXhAMPw3E8rK9T",
  "key8": "2mJV9VeKcSbd6bvUo8LPeC69T9rK2u3g9QvnmDdZ6SZoRANtpU4bgC8p1GbJQc1qAEcX8HxodTvFhaA45TuhmoNP",
  "key9": "eyS7iJNwhRZQWnjw8AjpzQEm56g59XzJ8czuLFziviDTsm5pcZUPuG5HWGWaUWDvqUmz4tXtXYCPvFKQGiCo6Cp",
  "key10": "34QbrU59MG21AKgx8zVvM5NMCdNzuazTnGLRohyanhLevmC6rk89s6CBCKYnMRBzDA94brkAU9CsUy3fMLyZN1bi",
  "key11": "3H8mxbqeiE67ZQBQPR36nHsxLxtaUxcLKjta6zaEFdBCnxoBn9V71cJ5cWngNeaanqjEMjDhMM1pTtDtjLpzc7bt",
  "key12": "4rCdgLUq8SyscoNjzjvJK9hbAi19HLM3etcxKd6mnJYLEinTayQDQWJRM9KesLzxip7wMNqhgTg4eWZguJPKraAC",
  "key13": "5hs3AwyhJ8ax75kJQsWH1V7CHFohoHZgDAUySm7wMtuwXe313PurTjZWLV6o5v95qqtmAjTUhqVcVsB6Luqv45mV",
  "key14": "3uVLn7Wc4J3Ju8XF8saTXyCYtJre7JvMNFwi2FzVwVG4vQTGkpWug5HGosD4iMxMgqqLTCY4kKnXsKvvAF9ZVU8Q",
  "key15": "W4R98ZtP63vdDH71hnGoCLMueH11Wg4tNE6mngFrmL9bMjNButc6w1fjchiZCyKK59psr2j7W6S6UzUQzC29Hjc",
  "key16": "4ddLTBE4UmHXWYv3sPbPsnB2VNpcPms8rKCw1BWPGY2Aot3sBnTwCARSsjhxzQFf38AfDWG9K2kt7G4KWNhTbgkt",
  "key17": "4bbe8DUuBaknU2jpSFcv4BhyaD46vfMGBoEFGQrmbSr9ipRspUsXkvjJ5JMtzismgZfTW8KvfFgER1PD4ajTcKRe",
  "key18": "5Tc4kfM9o6WGhvq3n8Pe25XDaVM4EKtadZEe7oWrXhtmp8MYiueHncNgSi3FNuYBGcAvFAAoQVAo4mJEu15tXPbY",
  "key19": "kvbT2qGdCyBiQL98tujxFM6z3g1qYNXVkYStdcHW2m5HH7k4dLDRys9mA58SvuTsJtmjtgheuphMhRLQocyuQVG",
  "key20": "356DM26EunE4EbWjcVRMbbVgg1LD7p6WScjYi1sfWC3dZ7kkc1uT3gcTikdxQHtDULgY7X1Bo4keSBt9tYJCj8xM",
  "key21": "39o1Uq6nnKSdBBMHQrYmi5WJWLR8aYu5d9jEM3meorAp2mEVeBYwK9vLYansTJQwbsRBgnzoAuhe3wVZzDXyx3M1",
  "key22": "3DVSYzySXkNG3gn5uqgebfwmKzxmVBe29cCKMQuvodJeXPbPDX66QkkpG6hoEFjEoSbsmXNMZ8xTgoMKLaje5GgD",
  "key23": "43y4YQxb4YM2UrBrwQw6nQg3NqXvCxzeas4tzPcMS8G9JAMCnQ4ucTk8q8uNQZtU3N9xrMeRZfaotJTnvpbNdift",
  "key24": "21u7913pyy8w75wXraF1DGGjrL5N5rZjguWjX1aw4UAVAxKeADEzDqxBDhfM2dzChnBdEsM6Zu32pqkG2udU7Jt5",
  "key25": "239juEdWSA6soA54gbVummt1B8azyJWBmT8puxd4CVUoQAdXKHKXSgQD8GZVFqsyPokzTGYcQbKLcJCsNqSiCBiH",
  "key26": "37NsUawqYLqmhXfGV4cXrRZqZzP85KjqBxHgHxB2kmSRHNw9CeJQ7NPoo8MpqVQzRpj1Vb1WScnesFDWsiargNL7",
  "key27": "2Aatrfkmq68eM3qceyFusuyz8j8UugiTxZQxoZqZonyQWGaFC8fiHvQaNDeMRJkPVdxAGd4xutYQ7qznvd2QbaZx",
  "key28": "AgAwRgARFefrwBRrFhnZo9Ux3mLYMbtxhBWJ2ruGu9nnZc5XgpURa1UoWRjhafa3gDCR5ZWfKK74fB3eZD32N4x",
  "key29": "5gdorEspn96rBTfRTbQR8J96mDkbgy383VPdS4sbRFbbmcq3u7AKMSUYuqLsGoNzNQLzpazZLMXUgCiE2PrjVgLa",
  "key30": "33Vp5R42g7aksdYYsWtu5pXQQZvN6PAzFsGFdKzoC4vpy49Nt2MqAUQtHGh5Yw9R8d8r9CWVeHunJbrVhgEDyFdM",
  "key31": "4zugNsKMHEA2pkxwjF6SNje3H37FnYUYw8CbDWyKJDQAQWU6F537vUcud7M8k7qhWuoqmESMtMfm78sAvrnKj94n",
  "key32": "2Fraxy41xbBX4fFmz6tDfQGKfSMU2AJMh6S24pbSiHgntLZbo8bwGgVjNRzdpQzKG9GkvmDKdtuC6XdiHov9ghy5",
  "key33": "5RUujYsTCFLMTrSrP7drdnXcpBz8rEsxWziv8Ay7vFFzWBRDri8XrF8BGjVu4dWv3K2aHWAc9Yrx6JZfdfH5hUCe",
  "key34": "2cDMnnkoQ5YaEBD1t86pJKHtHxdXNU3vPz61mpwKj2wUVBjPwtb3CnEZfQUXq1ndfrb8Ni6HXM9J9PCD16gitiy2",
  "key35": "5MU9G5RwNZa2rRNBHtGoFik58X4cZPmWKkuiTBzoAr7HWyxscGCBrsQ5H5VFioGoi3iewUCChpUmUEqHsLGRXmXh",
  "key36": "21NTuor927EDa2bGHesRokoo4KcRDxQo3KBTa7XfvgBsTfeFspcswQPbnVowC5Y8mRJ6zgFCCUdxPJoQQrNqmzsu",
  "key37": "537UhxqAdR4Lgu8nqaeawG5Rv1TXPArbZY5FmatViJxKGVp92vAKG4Ephim5ZqBTJKLPwSrhxS6mrZ3DEoQDYT3e",
  "key38": "gPARaVCuz2oFVvdDQiJeD9pbxH4jop9mfL4YaXaNz8mPNtnvb3zb9pKS29NqYH7jGZQwaxHkvtCWK62X5FSPR3g",
  "key39": "2JBtJHWvkN3wtLnJidf1WheggWQhsqGH3gamE2ARoQ2Ky1GDPpMKW5KQPGJun6o61etXPV5Ykj7eRpjbGXgBd1Rj",
  "key40": "3fqiKFm8My6tcmm1SPbcLbHiA3bdFDQbjgGsrUUB5Dhgze7CaK8BuSNRS1nBZZokNgT4zqKmxWn5d9qT2Ny1rPMR",
  "key41": "8kBh2PjXUGAEmvwQb7gYoTEnWTVsSxQTswFoevcwCD5d5Hb5mt1g77CCLG5gGpZCg1urNQYmReFfwoZk5YTX8qY",
  "key42": "5xfH5JEmSodpe8pZ4g7swLnFmH1pgk3cGFsQrGV9TngG1RvZEyCD3ZHgqgxTtm6Z1kDTwEuiQ6svPYvgZTcSX7zm",
  "key43": "5ZWbaRgsM3cRcvGe4BhBxDHXLRLL7TMzhZayfgbBpCp9RPKspFpoKYTx7AWfPW6Xfz3DaZbL1kLByc9TjdPmYLC1",
  "key44": "3433Wk8YZamyp2gdDowKhDyDhiqr36SvV4cE9xPFC6F5R84Rx2sz1jbNKXZwCaA6DffASXhLoTXUWr34X3xRgWZM",
  "key45": "4Km75aEy4egFAnk1LEJmu8VG5svktQ9Q3KcXUUvBjsVm17PPMwmqqrkV9Gw5n36dvw9RhiHbG838k3ekU6EyLG3b"
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
