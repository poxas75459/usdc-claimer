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
    "FMX7NDTndwo21fV4tMBC41aWGLDdvdGRgrvadwe6RbkUULGkDVxhf26TSTZqHCnxYRghcqucUKWQQXRatxQttKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KZLpERFnTeFB2V24xFM5oateVrWFUTutBRbAXmCJJvKh3X2GaVnVMKEwMnDXmkSHq4gnMyPpTVxbYpZGdCZvKta",
  "key1": "5qNKRSJ9q6a3K9ynYp9YMVetmt9NUETdBWSsgDEAyjrmAJXVfL42a6xgYy3TRjpem4wrFLXt61ddQfREsNihqQfr",
  "key2": "2UHb2nx7NpfSyQ9PaRy6Tf3dF5JtzT9aBsxM8yYK8fPfMqZ4Gy48K5KMdXTbxYaVNMfKH7pdQnp4M7pCzVfYoUiz",
  "key3": "65ZvtRx8AsS7f5kx6qK5sMniKuWVAzsD9rwdH4qxu1mb7knHBxqheWxnTmm3ops2MPJY295ZpMCapqkj1tD7cqDZ",
  "key4": "463yHHULdpaHiqzy394PcUVLHUc37BQE1cnNfueaesZHjoa29oyKFvtzZUZXXr9zuDf4wuHLJaguEXdqcKaTGxpG",
  "key5": "5roRnLxVAQpnswGYk4vHUCqb467ruLQj98gA4g45VNd7LPRcGyvNbpU4AUbUaoxxpJGMf3HQjXC6Tf4ZwuXV7hSB",
  "key6": "4FJGAZDx9nmERaU6vdqrXbfjnH8gFyWRZqT99JTnXJxSuEyhP411eQMno9K2r8a9qHDDM3Bzoh7eBCDzBtpm6YLw",
  "key7": "5gjiNjQeBGCTAZEvYXKtcD8AeYLMswcyiDKcJoLqih2ZhqvkjTva8CMRkcEHBQMSPP9NhRKoR4SMiYAXUj7DHVaJ",
  "key8": "WE8Fy5UBsMz5iX8MF85y7Wod1GrsAcrq8PUVSqBM4cGHMXuJtfFogdEDcWHmiYcKzAt9ViCyQ81V28jbEV55wXs",
  "key9": "4YFm887KTPRbVAvfsRmeu898YYThqH8tMpAJksc5KZhTokBVx6DfsXEcefgbZckfmobDpzUtRksHBViuP7RCfXSG",
  "key10": "2pAgfFG2JStS2u7fYV6mtk5RsJCQRzau3vW75mPyyLJC33SmUfrkNHwskorvCBTzvsrwhprQDWbxJrLmJVdbSsnh",
  "key11": "3262YDG9djok8Sb7EZBUHPbZB227tmSY2y5Rzo44d9StGuc5PaTDsJMDswby78DB4ZtVnHQZvVkYKUCSZ1Hni5qd",
  "key12": "3jsZw1jhiVTe1J4xGGieFDPTwzEJwJ5TYbjVjmitEApa8QWg5SknoQdGS6CccvmZy1iJC1X8mB43v5vrx3BiYVD4",
  "key13": "5BkuRLCe2cjVB7ivrGMEPdxwf79jNbnm1NiLLRvnoqJgdAq56QEXWbEgp7aEE7N7fbjfSeZoyC1a9wtfFXqwLQnq",
  "key14": "25mKhQhz3CSjxxhXsDA2Mfd4KHq1iQCWSZmmMSiKuHFmmVq3uxm7rkFaEyZ5cUpxYSR9m2x3H6s2bQaqB3z1nrgg",
  "key15": "31D2AGZ1XvfEDsZJVoSoRdvj3rkDU3HhkXmAX7diup8WsB5CRm9EhxzWS1teMy2BTT8itTDm9sKRX1h2QkfioKnu",
  "key16": "4Y9v2k9kKnwLxd2ChTgzMjGsGj9sJqYzd8SGK45GGDrREUJQF7Q6YMtzN7Rffd1Kcmf2mXTUspxqcwezPKxfngET",
  "key17": "5CNEnv3dq3Q7Q3qxNt5BnrkS6BKrSL4vmo71wZVqycTTpiPALBSu8zut9sfYziLYFH5RBz6qzcpnKwyTEjCqLZxi",
  "key18": "2Qswnjm381A4L8bcsd52dWZDaj3u92LDmnzpmAUxuzTYDDtawVYZaiD8eA6d2z24xNS4YLyou8oeX63fdys9QdzR",
  "key19": "QEyaiZXWXDFxoS4xqtqrUMWuKvCKLvjtxSr8isXMNN4T4dKN4c1hvz4RUfG7gTDmn63z2pYNyJJTx8RyyZKoScc",
  "key20": "GYK6mjcW451jUwvMfwT3KgtTSPK887sua1jWnMnx3yaTgKgWHKhc7MhP9qqJyx4m8dLH5jYuWLH2v61ej3dvhfK",
  "key21": "29XQhHe9YbVcEgyJVw1xF59xFibrDQFpYyfa15x3HFxzjRx9hb9SkNbp3GmXiseFRBN2CTasrMQ65USKxfCHDn9c",
  "key22": "nGyfrthZZiG3C9YKzkcVxv57SRHJpFSG1APbSPjdEPoeBQeB9V5Vsf7sPTK5wA6V5PkKJdAkmKUV7NoDc7Zneaz",
  "key23": "3Kd4ANKnP3RAvfLgr24DMJuSW8AmdsnMBCseHV3aiZnbNEMFRNZm3nG1B4KTc2HtNR9BYSuEPq3TiTFbywoFQxk9",
  "key24": "3dHJ3npoNvETKLbyQEtrav4KgS3aWuCCUXkbkT6Fw8LhyP8AQzGntszzzaquM24gkvs7ixiLcrAfvzrk2LLpiQXr",
  "key25": "666mDJjQtnttfvF6e8VRZPT4YJRn2z5mNb4sVL2a14B6cEtD3qgnU5ghVAsZdUyQy1cg9UgvWJ6VSzMmHAUR2PYz",
  "key26": "WA1qv6FqaufjMRBivPhQ1pzC7r9Lv1L99RX6AoJPbV2SdFXZvSPZT4Uz2HsMXmhYAhBjbQ89d25dJY3aQfXJ1Cg",
  "key27": "4wQfsHzt8o9kM67vTAQRKFBiPkCD4nUjLBpGu2bR6prv9BmVajHDHKW4h1EVgBccnUXKoFkhCSz5vSSqNyA8nqfD",
  "key28": "4ti76JK42h3z848cWduUBg8Np9vZuo928LmqNThd2faZccviF6KrFDcGGQ6aVoqjx6t8qptY5kwqJ8i6dnYhjSfY",
  "key29": "28G5cqrmKFx1BE1sjHbn6m4sKDi5z5paboqEB3CQUkVzm8nj9xXTX3pgdPZUi6UrdyTaQeLnaLysoPT15ThpXyF1",
  "key30": "gurRkEH3mvc6wymaBhm75BHo1abAKhfE69YEgxdz6nj3LLbptdECnvD6Sfbi9ajGnrhmoSbedVugZFTzAPtj1BC",
  "key31": "2tsSxjJrrFPyaxdwyP6zNkhZoXQtLZWMviEW4GeM2kBphXBkGchxyKszKrGNYE3dDSkhdj1eu88Mj6TRwSrnpn78",
  "key32": "4s1quaRKCaETimZsS2E7mqqhBaFwF2aaeMu9Cpx731JY4rP1i87KX7rF41qMFJB6UyvktufgxSZEuwKiFVDBj4Bb",
  "key33": "3s5kZ2xqpzWapqWNxABySaDnkjyRCyQ1r4xvVS1B4ewXKbMhJxyfBjps2zTXjJVfpqYJ1na3jKasPxq3LViKGGmt",
  "key34": "gyG4xdKwxpGp77NtgEJr6inPX9cKmZBzL9MGX3FyNS1hpMb7kLGJ6G8v1kpYsUc78vuX3KMX2tXcxQHa7Hy7dNR",
  "key35": "ouaapq9iVzZTD3rUvVdjBo9iKdtKxvt7WJUixQTWzntK1NYhuvFLSezpXy7XLfm7Am7JcG3hkVtNJ2WtW689bbM",
  "key36": "5nqPKdTZ5JjnVuhUXgv6Bc4wXUhw6MmZiqCFD6USH64pU7hKqRN132HS2YygQKPrGHqLUoEHsySxbAwANqnDyg15",
  "key37": "3vz2XdozrhCFkwAWmWqj2dbdHgSgF7nUQHK8bK34Liupsu3ero4D4Q7yvn4rhFgnH627Sn74ELNQU1zDKJYuFmmH",
  "key38": "MHjQKfmUXqsDLqzLCLTTzvXCM97y3c9AaUevEkAqG4ZV7GdmHxQjQTWnhqqBj2aaVh25qTZtK2YHZmB4uMXgePt",
  "key39": "2neWLABiwfvEtLLy4UxYGz2QZMYk3vnFDX4iqShHRSHA26kx1FAeGEe3KCSpqHmJP3akzJg13iu6mLbhW5R12KvM",
  "key40": "o4auU27CEvuWmcvC18fbBh5P6RRZTAEPgjPZ9ZqV9Ho3Z4e59bk7eAQrktW27NnNsN77H3nrGFKVVQZJtYU3wVk",
  "key41": "2q1PednWoNsqpf7mtWoX6L9AUyftWfvQpGN5BaN5EDXSJq2kEfKfmqpZHxefBGDZZ6BiZGdVJyQuWC2SBCyMmYqm",
  "key42": "5kp4fpY6MWgqRz7T2C3uUvo1DxX31NrcH44FxavsUvAiucbEteqhqhBt7u8kL3SJDe4bV17aqpeCons5H75FVAtu",
  "key43": "5Ja2yGaYyBix9A5mvTgESK2k97W7HpggkJGZ6MbVsVf47YxBsjpV1kfevHFLVFcHJtGtmVFABYuPrPMdP3r2Cs7E",
  "key44": "nwHz9ZNj7UQ8bx67D6stMe9NKSbMeBnyRgDpmKV84nsrPE4d2xoEVtnypWWD9jj3qQfyV7J5BDttXhoyJtctRWf",
  "key45": "5xAH8QCGxfXzDAzUXNmzozjEoSNcSn6Aquopyti3tkvF6626hSJVc2AHHrheB4AuUhRCeLK4X6PyQGk9Vjs1eA3n"
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
