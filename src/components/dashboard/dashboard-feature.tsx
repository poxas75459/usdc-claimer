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
    "4Hxw1ymtAUM6yifL4iFMxg3htSFW3WeB1dJfFiLc83gEjnj9qf4uh3wq9x64mU81Dj6NLejYppt8ZjPLgPrfRDGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ixmAP1CjbcmijZDzDJ3q2tFCqm4pknNkeVH9SvS8vpmj7KfM3t1mdj8pBvUG5MM9dAfAHjDbHU4gRSV3eYtyYJR",
  "key1": "4BtRRGuPhWcGq4DaASaSo8uE6eDuJyuL61a5XFaCaDNQUksiaZobvDMTzE7rKF79WN5WJhDJhnj283BdC7Gk1yp2",
  "key2": "5hNvzfyWboJztCWSJTnSXDvsCa94ZeTnrPGkCcKxNGhxsUJerq31CBvyh8aKRiCT2Vzn93k3nGQGJui98Q27RimA",
  "key3": "3bB3fwEdJurp8Aw9xuydze5nUz5ACmjwKuec4k1yfWyL7NYAVxSw3s9PVruMXyLZy7jmufHYe53neHenWcPWUhS1",
  "key4": "4ZZD7Vx7MPRCP38SuUjVkeHG4CbnCDYAQoKTKTx5utTabSgg5CPYd7jKSFJUp21Mr5M15JJJKHrv8ndjkpQrzBEB",
  "key5": "8Wh3bExv5h9AWW2qoAP127z4W3C9gcV53iBJBtmA5Q4vPXrN8Ue56yJaCZqXTzk8dJWNhrs7gHP3ZYnM1Uzp2kq",
  "key6": "2vBpidpPS8TxTKLd3uveSDCthK2LkhGxt6FUfyJgDbWbi46BGLfyNCQhtXoSQmdyU9Tx3HUUeRLjVjo1E7Bqhpv5",
  "key7": "2EptPrfL5LgRApZKzwLTQwCXfcrkhSx31tDN8ejjbsmWpmEB4dnBaAsQ3jU9rAW4b7nGqBdEgTMUhS2cXjtJzDiW",
  "key8": "2KWzNrW9wD2nRvLD2vcq7JJ6AkLsHa8MqAy1sApDo8xZiHNKkvtSGMXvVxExhdgXZMRvp8G8pnsGc18WjPQXFZW2",
  "key9": "ju7ViNmtgKGRYkpxJZbavH8eAyLJtFXLn6iyEs1zk5G1AAkaoea4Ve9jPbA3Me5mqRPHXgWnp6krxdXqzk1LkYp",
  "key10": "4gL2THkFrwPwq7tppVqq3FgFgnRoUumWiML4mksyfXmHuC3Z7vBtZZatJomRqgL8dZjcgWX78EU8ubPo21gw9eRn",
  "key11": "5zqDhsYSwzGYtCJQokqBeUnkaYEx493Qzbn5qXULtajFJaQxUe3K74epknJQ4itJdELhYYT6XXFP6kE5mNzrWsdE",
  "key12": "2PzGGSRyqu5xzfTkP4W5yVsaJneaqy1wqzMMpjqYUXaG4ECgjtmuMsRCKCmc9zLMZrEZh9WrxNhj4bnspmKAC5as",
  "key13": "36CW4qodiKVvZFibUMUgSKrpzgwr3w4YZpA3FJm4Bg4nGM4vUN7M8Lgw7arTWNkkCCrTCpfmBiJPp52jouXpgeYe",
  "key14": "3xAwUiHa4gvdcuLz57tyUP6xCJpk5zS4nXmLBCrmXMHMGnuychsySpdpMW7qABdEGxC1FxrTtjVXDojMRbyrmFHS",
  "key15": "4EJqeGu4DoMhtUoFiwCmCdckwSwvk8C8whTrcsq4BGC5uiwkyHQXiB2hZA1K2HEKG4ktdvBja7bxTwyu1oPybYGz",
  "key16": "4aJWf2GChwdhV23BJFivXgRxgjGT5f7n5xCH9qQVpw7S82cjN23nDAM4HwFJWZza3XY4QRvLqki1SkqMNZqxYEXF",
  "key17": "jDxHm8zV7pRbz4fj6f8qj3FH4tRPjd26uMtR5EhgUy42XT63X6fvzem4HFgSoeRyoX792AuhdyCUW8YeD9JFRRG",
  "key18": "F4bfnyZCLBHLovw85tn2iu8Qm7pYGkDd4xt7vqomVf9rVU1HnsYvienThx7fw4ZKL8AU12VpiYrVDwJhuzXgHqb",
  "key19": "4fhge9fq1MGw8z96rBEDGXvAhSXGYj6Z34uw6rVZ5Ad9nAtcwkjdo6EGfz7rUpdXsWGc7ggLPT3kvQQs9jGQuHXe",
  "key20": "3CKtS6JbDDPJGs3uAXzmbJZ9cnpJJPbvchWWhznNGQ5gFBPnyCTLK9X9mvxPYwi7FFdVwrXCyrLxXJt4pD2EFkVR",
  "key21": "7bvoT6b67aTPy6d4BWo1yiSWWKb5c49mAudThg1f6mqUDeH9NVmWwPvALkY8c3AVpDuJsimpMuHjtuvw81GPCv6",
  "key22": "56woR8EHdFVyERp534shWv7EMoToUuf8pL9pQ24HhttwhC5xNW7jBTdhXGrmGcU6ThNM3fpLRBASRNeHquBmSHrD",
  "key23": "qYEFTbZRPF5frouycMx641ZCAtVBU1SmH1vKH8oQu6Aj66NFipWL1LeMZWFPdqcSQEvDRtQhfRWz95SmgWHp2Y7",
  "key24": "2FWPTMxLj58UkevxKFs5Pgr6CE9xVTfR8AhC7PRY6df4rLu1r6u63kJBbwAXsc7YKSGBnHR756YK67WEsJHyDhVg",
  "key25": "jSAYQoKofgaXftM2U34FeUhCVw14PqVsgSn3eSW8dCuY5q2N8ScqiWoqGJheePpyHsAbRV5AknwGj3f1EdHyyJX",
  "key26": "3x5H7Fn5mvPyR82KwyLymzbS7rM6WkUe2dbLqzD1UmZioaJyV9PAfzTe3fAveMxDHbRi8mA4ccX1DSxBZ2Soo7Wb",
  "key27": "2z6eq1DwDP95fnteoPUdQf6JZUvkqXyJhkSoY873kFHZ9cpP5bwrS3kZb7LDTj3Fv3RuGc9tegTQ3rzEpsx8dhVA",
  "key28": "2rXGQ4eAGTwwKY9McpGbJFG9yTGaGJ4JWMhRUf5uTCTX9WbiKmADTPsVtQ3zTuaFCHd48aADC92Fiv8NT9kaj2mQ",
  "key29": "53sQtq8rMm1M3H4C2Q2Xwkhn69YQ4vdSbgiPvxY6FxS4bLCbMTJQ2PfsuTF17TDi8Fax9AMcPx9skXcKvsKoV2A1",
  "key30": "351fy4DpHAHSo5ZyuQDvw7ZhcEG7YLuV4hHg113JzPWhnvmEN36bTeaaVgDH7VKhUc1WohvH1Ji6GvqoFwhnNtya",
  "key31": "5MuZusz6RYGvBuPyDhGW35ckZ6pKZsrU7rxc6dNnphLbPKf51ijVjW4PUMWLys6iFjwM93ZahvXoooiqUWJmYaK4",
  "key32": "3zmM7Fx8ihboA7KfE7fzdLaPX5L3S1EWeen7niMPXZ6Pm2PLS8ZNdQsCcNG9FBHjX7WCPEVGGeWBkVFoZXgbMCux",
  "key33": "3dMxWJgQt9tGmbkVi3BKQULtnqkxR9pMbc6S4bXrBzfbgLJ7EQCPZUDWH6AQsPfPCu4w1jM7hCEzkJeFdfKDt7Md",
  "key34": "4wozVupQyMNH8JLpzW2wR85oaMwoEbJGWXTSonZgD5JQrTVVP6otWZ6fhTDoczob2sm85rbmZHWiWnXz232wwr74",
  "key35": "4NXsNo4A5QdMDBdqAPPYcMKXEHsNeKpSEX7ybEUSf1uwqraYdRbtGgKJJVdJLcifh38gzsZz1G8SZRg7sQXFvR2Y",
  "key36": "5bUnwGEU2WdCTPQhjuPbvwiuSSrWZr4ZY8VjX6S1WWbaPM1KtSXxtruyAHscFdS76Wc57amXR8avaAAwXupVXmij",
  "key37": "5TKrPSEf7XRnAmynqV6sjCePmP92zXBe3jMEkuegtZZJTyX4AidA9bc3mwAZYdXYQfNqpASJj7n3XfJ5nYNnj2w4",
  "key38": "5bx2jgxWKwwZi7Q1S8JZjUBYUsQRxuogESXQwv9YXjxuCfVrJ6Eqg9AuXE9Wt7xYHfyqQu8d86fPeNLm8dNkBUTf",
  "key39": "4ZCqK8cWEY9YDXezAnA4StXrU7GDp6P1m24DGGzLvmbBHu6vEe66nno2FDHf5hSMbjZMRWqUD1qgm2hBpyy1gfxE",
  "key40": "3nEsTcj7rFJU8ciNqQmDjvxczyZyJBte3xeW6bp7aonKFNsPAFvRP9zEMns7YKNvFoYGuGX5z5yheQkb6x4mCbZe"
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
