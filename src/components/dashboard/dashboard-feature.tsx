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
    "4eFFF61WB1Jrp3qmbMmyyZ4e6DXSHtBRTQNaGXeX99AB7kqoyxkRA3yDui8fEqczP2bXoUCnbHuab1RctUTHChjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dNZMPpWsPjTKPJrqqSS6Dsi1EiYFM8B6PqBTswRASN3yGpAKTgZsKwrz2DRRZBazcsKHaDtknbjF6PmvUK3hTtW",
  "key1": "5Q1VmbFRDYSpVw4k9bvuLxX5a61JVgr63fsr3bTEPyeG4hKb5ztN7uaiEczufDSZzaDHzqCeUvyopFEeLnRNemEg",
  "key2": "2QhZWEYCCFtXvM4p9WvE2u2PrtS3uLn2ZDXNJbBtGHMN4oedMq8HJnEAQtwXj438Bw5AE9z2zrRzBfCH9vqbKK1V",
  "key3": "62niF3BH4pjAHJH6DUSvgtx6VPq9Tf4w27kZuTZqSkY5XSFoodPJViUsr2bBiyUou49VGKt4UCaBfYaXJdc1dcoJ",
  "key4": "3p1zk9E1pjX7oCFbkTBC6ig1ioydCcuoCtqCP3MemkxFHMnxuPjp9m5QzRP5wA27kcKfRzFKEFX2CQhjvW7k7V7u",
  "key5": "b7rzgW2AMuMKrSfpxK1tnucw9BzvqKq5sikuPnACEis7o2MKuxANZuvYNWZPB2mygQAEFkYV7rwMmqdtwsAcJPd",
  "key6": "8idTWH2YiJX3VDsZ4w9DDii9fGqWfj7LNJLz8Ps9uSPUnzEG5kT93htRuSqsEiS2HwqcygAG5sRZP9uVqRHnRyS",
  "key7": "54Lpz6z2KTLsk6CS9N6LQbJXnhF3XRV8sttnzbSN1NRxYTJfd3XLPocEbq41EC19YC1aNG4hHVNNPLPM4NeEHaJs",
  "key8": "67bPBfALBn6yBJ6265sGSZCrNuZdmGSeTmJZ9gEqpT66T6zeMu5iruy5oAKB5ew8a4NcRka9rcBGWRDuHZHCNq9j",
  "key9": "5mUkcMxwbuSPSgCPagx4t8zR7o4tenNM4ykoUX5xNigYkNQJj2EKCKXKt3awqtCq6NuARC3xLPZ18D6ciQCJhzyt",
  "key10": "NLb7RxQcGUye6u4LzwZJxkpZshGSxLFWN3TDsDryCmdpAhDNqcB3zCvSSRgFv1J8WFzHxh3TY1J8jELYwmtWJwu",
  "key11": "5ooGnDKazVBLShAoRfEAQbhJD24tCvBaqX5QKiQ8WL6bJTgmMoFNq5VWoNJo1Q6MxrX4pMWsGmbqMP1znHzvqhNe",
  "key12": "tXrPiS5eKvrs5Vx6DkWW8sKtJByXc4B5MvotmCNgaKfCXWx7AuLccfwe9QA8s2bXFpv8vWidUxvieLQTovUYNHE",
  "key13": "EHJ8ejHc8Vuhah2AbWm81i8dqCTqfeGfo6yaqUzExonPaYdbrNRBTLx1whSfGqeRczqEgoHiuPbofAeEQUEpUN7",
  "key14": "qdzamT75u3fAmTYeWr2J7DDYeeAi8pZuzF3Qk9Rc6CNpnEo4FJNbX6worpU3bqUxZgifbnyhTY1XDEdtSPMaxWY",
  "key15": "56uLvoiGz3GSTCRM24A2i3TtTQNLoFzyDABoMdvHT5k1DoFRKN5tqPqJsykfV7nrAyB5fEYUjR9kTAQBwWC3Chvj",
  "key16": "2XrYAk4jkJXWN9PK6L5veNSSjFQSg6t16Xoai3vKTdu7kESSuNPsALWm1bc4kN4krcZ9UMKJ8wUGBz5pBfr4u7MA",
  "key17": "2FXgEwfRb9NehrGBhWTbrPgQmw7T9LHqeNs6UEHoc7JYnpq5j4TUERqsFiHPy8D9Yd2HBowEFJ1J9zumFJAMDvKG",
  "key18": "4tMUDpavbqCveG79Cx8bEKKuV7pFdzWWGSwM17oZb4vS2HBPKdhFbxn4LyAPraSoD3p8GmwcHyjdw2FSGWXB5XwL",
  "key19": "4R65MZcjK7dg4jf5c313qL7BTq3Y62gVhUPVeKjv2EeuxWq9urJMkZQWqcFJ7eAJSjmAFTE8Ke9rN8ywAjid5eTF",
  "key20": "4n2C9dTm7k9h1KNqNavZESmwSbHTJe4DKpfGUQZz21pqbmDSvBijUdFVPF7QPfD2TjyFT3wmgFc6bDeyoFDbhPzX",
  "key21": "4g3NgWMsxENTQeqXVTT14dqp9JfCPhB8cAKjE2mTUyiJwdzmzu3kAPMrbYtvqEJcMz125sNSDLKEN19A3n376sfU",
  "key22": "2WoHBrsct4UGmxbbu8pS93fiRaFaWNkiyBprvdRtpsXAtZx4Po4tgxEjssW1qUuXjrygk8CgRSDF54ZkCTWrRZEQ",
  "key23": "571qkhmPaRetxKpfm1CGNCcxvGioGfc1aJgHcucgeUMW8qLvSYP2UBnBKNYnyKE7V7gWZyTkf1YAqxhpH7wo3yG3",
  "key24": "4BvP82ht5Zy5qmQce33oNAn2anf5WpC4XmK8EYqe4DFArXJfbYzH1o14PyBTxjLLXC3NxR5JdsEk9ranQpq4rrDr",
  "key25": "C3fe3FC9gvZq9RSoZazp5HhvXwLiD1Eo4ZTnnTKGxtsrejFAXMpaEW41Wr8nFuMFwmWUaHdDEa9AujFwpHtM3ji",
  "key26": "3LgyUzexn22pGfbFjfBNGc3utAsiV8haFMhmhaN7ykd73tas2Najv8ZPEFJ3vQmig7Tdb92NffxrEgMX9fGYWUqY",
  "key27": "cwxRarjJfnYo3Z2JgojQG6v9iZRG2VvNJU4vmYFCmH2uZ5wSLBm875TBmQxP1yhKudSjiVdR36cdXxMkq6q2ALu",
  "key28": "61yFwgTb7Rm1wLi64LzU2UmwH1mDP37oL8w1m6Zh7CrCFb85ED2uMXmiAgvq9Css4R7jncboDGyrfL7FnsbPNGVb",
  "key29": "5PrVcpNNbZKzKTSk7nJMyUabjUm5xVzhzrQV9mBShbmkWDCSHU93RGGR1SSQTcMVFHUCcZFEa6pR4DdKtTLF53GC",
  "key30": "5mQgexFK7AQyxrpuFqcxXWtFVdC7uVaLYaikgN9rLd1i3mujpWE4yNwtnTBzS3ZKWhGjbunKa68jiStNkXE8XH2H",
  "key31": "2cak5UoBU67h79TTTeFWC1HN8HJr2DJB8BwzARgJFA8jursfiCtr6gyewBsphEWBxBcZN3afADK5soPn5F6Jj4gi",
  "key32": "4v6wUucxugDyoxRp5BWAXxQ7EHHwkdPnrnNhCwqPT6BpjdCmatNERFGzCiKAMRdNuk8oqoq7Eb5ta5JvZyfT3ChW",
  "key33": "5QikZPBKdAXuhf4QxFrrPYucUet2b1f2JTm6ETEHvB7Gkzb9pBUndSWMuQwmQRK1peF8NLhWxZtVB1Rj1SUjYJ73",
  "key34": "4tzQ2QguNLMV5ZuGRacxrDDaTkkT9GRrUFLTFmGRcFaNskoWU4vYpfrhvPasQfx9vvLXwxqETXeG1LPsoiAfEsCr",
  "key35": "4PohrN3UXSTqZK8MhkZ7tGQ6Eg7NCCxYfs3SW8Libt4dGV4tssPZqiKx44RUzUERUSszxDVVsYDjGEcCRukoxvDD",
  "key36": "3gRm3auLQMgjkp3oNksd8PnfkDA4VZDXpuwMQTbCYBrRP6aJr8bdy8mf1X5ijs7S1bW9ZXu6V7KbJvrG4BxUPo11",
  "key37": "5srcWdXyhAKLwdJn6tb1oDHKwv32A6RKyuSvnV65QBbYsrXhnjDFdyLGiJgkwi1wrfyRva5c9DgUMsVQ7j3d5CgK",
  "key38": "T17zrBNd4gwp7rvbxsXBaKE4ZZWcEbjyP2wrV69FWTQvFjN7wv858fUMHiLBVHUtH5KJVLnFug8ukZwYGbuie6B",
  "key39": "277ueQRZofzVqoo7k3r6vw4vye6Rrbj2khzBf299FNQqEt5XXUVUjKUeVTApvgpzcTYjhjQ2F783Px8PNz5rUdGf",
  "key40": "3hkvthFWXp3X2UFczxm2RwEp7vuMXCzUqRZFu5Sztd97GVnACBqe94b4e21KMMHc8iUSNBtZwm4HK6XXVr3YQ86r",
  "key41": "aPZhGHF3MQ79rLMnC6EXdrWT8aH4LTPNvjwjsCgRhpxzM3DqxBRkpqLyUK3Z6DGbQi4Xk6DG6WixVi4q2jnRx6E",
  "key42": "CSHP4gTBaNnAtJoTmA5tAzE8YMwQ7mvnYfQtingEmHLv8aH9KYv3TvFSAUh5dEMRmWqpsZpKVxxuuRMbVYhSnVR",
  "key43": "5cPr72GH2LY24nsFq6yG5ouBKhjy6o7trsftGtg5wGcRFs4Yv3XRqXThxBSiXwNpjKfKwGpc7SHCTjAQWajG9Yvy",
  "key44": "2JNuyevk7N9tov9ZbrGGh7fcesv9mKrSjcwf9bSL7qekEpKh85kws2ajeUtBXKL7SQasY2x49dmnMW7gT2Zq8c5m",
  "key45": "4ZbS9NQR75dFrA1ZYrgHz9ug6w87waK78wcicexosWykg1dgCU82DUFDxW1Dk6RudUWinrUSj8X5mDgzLaVPdouQ",
  "key46": "5BU4wAPzDQg6xyWcmVBYXKoqQQyCYoYBHGQ4AFbopf4GGt8KQSE97Hd3CnyGCdGs75k3FZ2Uh57tfPH2rAGMbRnb"
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
