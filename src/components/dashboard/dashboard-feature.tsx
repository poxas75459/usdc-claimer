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
    "LKsQs53vZhov2d9qHUoSBKq8EwHBnygqEeA6Arsg8tfMhtrAGn8nGdjCC7WiGh6uKKVHEDdHHzgfixyrqW7f8Jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z2V2CSH1HHTzaxeQFVJHAidaNHm34idsta1Rse1QoBPWRcvuhE7C99BiTiFUcnEjX71wweUz9MQ6HrRiRgvmad2",
  "key1": "2JNtZKh8JCuETCiiT9URUEMkSQe9T2MGnFykrMP2SQPqcGCcbCqvzF29mr6ZdXspxNzUJj9qtejQRKhutKBGzUtA",
  "key2": "4wY7GcMwzjZDkKEJaGBkSQ29AxipifUu27bMYqkwPkRqH5JYq3LxdgBLjkCF5BdyqxiGns8xXtPDFKJQvFHpM34N",
  "key3": "2K1nMCj7raooTopprhiJojdwhJQhrEWyt555kd8B9Mr315KrCsag7Y32tjeQfzKetEGmukLuJ2vnCBB1UxMXNQyj",
  "key4": "4PMWMQmrZb1q5KxcLba6jqBzAQhL2HAzwshnPideX1ySWC4T5UpMPUW7CNZRDtmNyGP51dsv8rrPSQqPDUBk8VT6",
  "key5": "4ypaBT1JMQ9KQdMF9Bk4rbeFA1j9jPh85sxmqohkzCEkvJJX7n6JhsiyQFpNR3nN5F51yQiofopSK6dSzMSkJaUh",
  "key6": "3YeqqQ6xdwKHxnkUCAFSTp41HGMRADggU2t5H2L7nvMqWuuFoYGHb1u8CztUcfpE9upVpvhoYGM3qK6RW4n6pkZ4",
  "key7": "33NrYJ4tbCLdw8LmS4DneCq7ZrHN3zuyqWr6HfVgThNyBwimesVTBUiae2pCw6aBMp2BpyEobBCHcShZn9uAusmB",
  "key8": "2irGpY6pU8ov5bAPHna6svK23UXdK3f8KiXDjuhVSCST7ReHdUrt9nBXJxFrUYfRyreG65MuhdvNwQTpbhhgkspK",
  "key9": "62nhVYFsMfKxiabc5byyEUJm7xeH62icihU8EonBx6DTxYMheB1TgdiEgYECGFnLtioReNNzhx6uTed7A2UJthyJ",
  "key10": "5SMjKvAX6LsRZfx26zgNNY6yVgKmrdLEUWWR8FS9gZxYCiMfQUPoMhVVo2WE5ruPLmWis1PGtMQa1J9rr8FP8PFR",
  "key11": "gDHTrNyrzTCV6GJK7WUfHtB4tR5SKHstmntZoUbcvNn4bGfY6AxPX2e7WrxD8p6F3ZzNTw6CP8z33SNBnCDrhgs",
  "key12": "2pxQ7kAwhoCgYuz2S29fcLZaHkhHPzHVD6qhk1JUZgBtM5H1AUEHU9dNjJVpT58hmBUMVtbkDCHkbtDNCynE3eaH",
  "key13": "35PzS84pohB1bc3uWTk4MHgVBQayv1KU6iG3d3MUtDQA8a8NyEAM3pjFgoWSrmJNPu1SpUYAvVhJNBECfTbKswA6",
  "key14": "22RKxoj6QJCQoaPCUHd3J4miVts9X5Fk6rmKbGjmZmDKHHXPBQpJNJwd9guwWh2o6X4tRUy7AwR6N1W9BzTB385N",
  "key15": "3h4cTPZkrZGWUJ6R1gRqi7rfWMQPQfcxm7A4h8AcJDWWhLbZ7jSRjotasY7CaEyWBjC3q5o3gTzVqJWNX2qtLW4Q",
  "key16": "QHFZDqt3CpcvmLQNtmHnYfNnkzu2RLVVdFgxoXd6akE6jdQ3tUUXx49upwe3KfzdwXeadSL71WJWnE6ZXEpMD7Z",
  "key17": "2udbXbgs5bDkEWjZLeVwo85Pv3nEMCNe7BnmUGh2xiyLRG1LEbprSNgtneR4j7258X6u9p1VZpgzKHYYBzSfyUQt",
  "key18": "4sQnLdAZWurMqtTBFFxHn2JXYMmbDKn24Z9npEiD4bzfbVFaQPtDYERFa3AE1Bx6rggi1gdH8e7jx11Dp9Ek5qka",
  "key19": "19R7aY2iS2GaXoXtU7S5NsyZc3MdZkxZddm2HeHxATc1GS2yY8ZjpyjgM9GEQjfsq8CyAuNrepFm8LJ7hQtrGBT",
  "key20": "2LECSoMoZAZSQXZymZ9zPfvtjYV2UzgbqiFnAAu2HroygK3kyPTrkUR26ePQ43qzKm5BtMnSaYR2WhDy4BqHTX6S",
  "key21": "3tGHxm5LPozgqakg5EEY2a3hmrsTfi3oT2Eko5r4SJ4CrVhikDh7EuxEMKmGmVFeNt5etkVvvGVJ6HGnLEwkJsWe",
  "key22": "54WNo73KTxTeMBCQckCXtHHMWBJf5jUKx8242UyYHMWzUAabTQ7o7dJfKLFEQmqv38xUXGQTBvCoqmyfUJhgoPX2",
  "key23": "3LtBi8E3TVSoCSc9bEyWeHU54xJ6ChKiE4h3YcbWeCjvyi3eoYyWwYugFL53UCXmtmr5otHxX1Cf2V4FVimkimhF",
  "key24": "3LydBo4sbvEbMhKXL94L7p4SUq6E8FWLipd4eJ9CZ4DvAjVfQ25a5Nhp2snh9owSqT9ePMzgTLvwzGZhmWuK7QiC",
  "key25": "3qcjCEcaTYqQhUY7SrEDTuQ7jwry2MRpTCkxSSe6gd7RzCrVQsPSKQQU1fxpjDJtg5fbVS3XGpzuCB1RaupH4mXD",
  "key26": "51WNyB8U8MZsUs1noMGYrrr3V32yrha2wTjZzWDwErkjSkKbCuipNb4CVQkcoG66M1SnEWwqFui2Zsha2qb4enk2",
  "key27": "28WP5fqZ1c7iWgiwgoe9yqz7n2rJS53vzSNxTUercngqr2FWSD4pgWgBLYKHV4pLA2aHQV21V4y29DyUA5pzvCt7",
  "key28": "3XZPCgqm75QvzJpwMgtf8t3eWKjkRrFQs4ZSQz5sGnu9GoSvSsQowpK1YoapxHGdiyS14CffAS6a5zsn2Viiuk6s",
  "key29": "3QoNWUENx8PFjK3ARND6f1E2nwazwZV2S4iXGXQSZv7p9QppGUmyyUKHfZwpgy6C7pvRaEVeohTLk5DqCn8VfnFP",
  "key30": "nNXTuW6e1hVvkdousBRmnUTs8bj6G2gpZmoeTqwyuTN1FTDsjkGik2czzSPFy9236LjTn4JC1bnGw3pfvX6phXQ",
  "key31": "4mBiSVbkGfHeq9L7Togqwt8XvCAQLho377WoXQ5bgBQLMcUbb6PhfBjyBUExrgya1QhjV4zeJLFoY6pBNDiXNmGd",
  "key32": "5XuRYymKAtrjdA2nAFrw7qJNcjKwm776zYJ2BSC37W9tsCnh1srUeVWknzX2pX35Byd8s1anHj8v4pFraJs8aqjM",
  "key33": "5RnZt11iDE2WW2RcDEmcN9ZUYMDSMoDeDJXge1xsVMjUBf1Apr4tcyc2RKGgyG4PjS9sKKqbYGWHE8Dvs4XrP33Q",
  "key34": "4gRSefQ6Cw53EaHgHT25MNGy2PsWryDbeYtdUUW9bvGMFmv3UefFC6Ni6PDqMmny7qHzD8EgkYMpXXuKEyi3khTr",
  "key35": "3DxPveT2tUASkX6jHJPfdGVq3eytpVM2iz3XC8S6VACvnsoq75USV1vsE2yajQRVfSK2N45ehwSJMtDRW7RAw9sj",
  "key36": "2JnaxsjGMajvR8KuBqAKUoGXevdf6EFKhxjp5P4auos55YvKxZwwxaKbr2SqzSFHgrXnm1Yqf3Jy7mQN4pzoP1p7",
  "key37": "571LNCkHSU5TgcWZgEFDKz8eD2v9eBM7oRXKsnEz9v7UZW7xe59qA1LgmpGXQzw1aZi8fk3CjYNQhNpmyjw5Trs8",
  "key38": "2i516TmxKBomkU7vwVV4y4kWpNLnypy1NL7gQKjWHb7qrfbi4rB9tgf8msoSAAMDHjrXoPPe8oBRuBoekQpKKGWH",
  "key39": "3PpbuGAnv3FnnPKcpzwQXJBRo6uSRn5qgjTuKL2kn3X7duTCt9KGs6kQCQ83K2dKd5stcK5PMgdfM5BV8gGbXAg9",
  "key40": "5dTsY1M42wTtefXAirp6SnTbWjZcsG2YK6dZRNWeL4pF2fc5casLPRDJiFZ6ZL6PSK9NEUt5fvzE8y2XHzgTPFrN",
  "key41": "5AfuBefijdosUMBVQAAuH1CHnNzekY4p5mM1XpiaBNLhcK6fLeTBvjWvmMRhmjr8bQje6rcX1t6qETZwwwJVV26z",
  "key42": "3zLkJac4gwgSC3PbQcAQyaZJj17CqPmNd1VbRtNSmk9c8ofkSGW7xvrYPZP4jneT27BH7wX8Ekfn8gifpMaSVDk4",
  "key43": "sMnAUWEXRX35HCDBSh9uACDaYiYwhzjzyoy9g8UJeEgLmVusB1Uv21zFHYtiSZ8DDHgG7AqcysvvN14C3neBJuR",
  "key44": "34HFJUiSgVkKUYJDQeTnXMuWuvhhQ8jUn7wA4VS6Qa2SrWomyTCLH6s6zBt3h5RghjxuXUqF7JDqqt7ZE1Tgr4KV",
  "key45": "2haf29xHBLLVYVpzjL18Q2XJk1crgRNmb7owfv3ASQB5QZzTxDFVh4R9y5Zj7tMgrN6Gw5XzwBcnaqHDLzcEHWd6",
  "key46": "4mvLietvnpme11NdxD9qR1RBRcgTJzUoNvvRCWiAFuQ5ZVKW4gFPgUq9mJKNXyksGeYprtKEtMLdEZRkJiTG6zYj"
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
