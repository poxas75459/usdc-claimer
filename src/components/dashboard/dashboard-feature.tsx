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
    "3zmAGQUuszAJnW1FnPKzBAzidJdWyUMbChtJjWFz6JRMEe9zteXtEvaYxnTL1rTHTCjhcdvdFu9MjRHntPzwCwbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QweSHH2WvSnVjGeCEPtSTjHCn7Y23eYC8ERNtYS9WsG3YDYrPkL54KnyZ3jWJyXkjYzKaXydCyULXGydDTXP7bD",
  "key1": "FQUmdFbpagfxqsZBy2H14L7cyoFzWPyEsdU8V9P5koGbjgXZVPQ8yQNqgZ2e4bMcZVZkYSzc2rtjGbFjF4u7M1L",
  "key2": "4YdhRNA22NWSXNh6t94Vg2rxgEmJYpFdCLD3ZrCvY65BCS9ZocMdff9CHjikDbvMqd3KgGqJokzac8cJFJY7MQM4",
  "key3": "5mJPfFSpHW6jW7RwV4yCVxKzAHSCjic87aMGrS1ma4fL7nKRD9f9Nog6wR5RewR3Xyu4p1VdSaWXU4d7Hix96Xeu",
  "key4": "2hBh8jXZMuCM6D3ZBVdHXuUAXYNtbx1F24HDco54vBzNx3bM3Uu4tevitWMhePyca5btMDs1jmk6Brp2MRbha29k",
  "key5": "5sE2XGpmtj5uqfsVV3Hps4PQxU9ndNRm8onHCH1DjbTr9wQzZBZgxNHTV5Z8EJUMr6bRVSmA3yumkE7BxSS8uYdY",
  "key6": "4RK3jAFQebonNq39f6qXFAnWmiq1q6nLGsqazvcX5AfBRzV8oUJqHvJsQo4gbTfNWHr5UANPBgRFsnTBzT3Sy8Vd",
  "key7": "3cCG2299LHMjWErxFm1yx28dYKd4ieVf1VxJTd8exdcqcnZvwGeVaHYYZTpiPhs4D86A6ErKPbwAeM3FLEy76cvB",
  "key8": "3NG5MLo9vFqXkX7K772G2n1C8YNxLsVAkvByxebt6d2FtTtbNYocSEwJizA8uP9SLtGXxg6SEHVrzw8hRTJdWMxx",
  "key9": "5RH95yXB7RBWk43tubymmCYHL6y1jRhXh4xTf7xpwEQi9MXsFtAR4gdMMCCZ7ExsgcTTkX26DgScT4QwSekqBR71",
  "key10": "2BXqPTUnuqjCZRUmYBbmaByXXwVasmZtLxE7YSKTFqHdGXJViotmgcWDYr9GrdtYW1w2oKNhsbD29FaiVsJXosrg",
  "key11": "3sZgYVxf7epHoVs92tNMPtgvHdpD654A95csxybxX6JvxHv52g5rwv7RdfhFFstu4mq3jiCiqeUrUJvi7zU6jePK",
  "key12": "2kPmC7Cby5kcF6yLjYGxFi8i4X9dTVS6em7PFFc9A2uEFWxRvdnEhjSDh2M1cs5GqA6qGRpqphZCgRGuj6ubAPyM",
  "key13": "5LYhtc7E5KNpQeDZ5EjT5TyAV5pGmrV17bLaAw6KsnVNwMVmn2D2uiKEFnsBYG2LYVxGxdCweAFVixDTMJT71YiZ",
  "key14": "4mHJM92cupFJAocN954BxkxMg2L8RSsiQzQyDoUWMdSYNt9XH7f2yUdDbNBhYbAY3MEhwFsJhdZJi1LSVRwBVqAk",
  "key15": "314sp562YYs5CkPzbirJQe6VosBpGh8Wr8BS6DffYBsumDJNfi4wGbQKbaJUSVhacdpeCyAwYCoX6RtA26mQ5MHd",
  "key16": "4BNXHyC5JVGtLBGwZFpmQ4DK3PwUfb5fmphC8GcHvFFLRCJBGnB4HuJuF4NdbWECyRKeWyre6Zwa4XRmJJKWnkcq",
  "key17": "5amQFrQ7pYkrxMR4EvvTxphGce76VBAhUayn5GnXvnsWfsEiunRTrWQ5tt9aRCYo1sbFH37zp2xioGFYXVQvdsmE",
  "key18": "3jcLgNn4mse7WPzhAGPk2hc2oSiT2zT283W4jLsYLSdVJsSaFHpJWGVUTtMwbKjZqPvA4Sr8wzARBEmhL4qK6BLb",
  "key19": "4WraAYDPpndxvChA3umt9j63U2GXXGeUUNSJ44XQki844oRGkZncn3Fahi4xmN84BbQTJwZoqhfPNPC18U6ELEA2",
  "key20": "2RwRhN4RSTKhDqhQws7tYHZqUdGdzSJdLqm1h3cdbaMfgpnifroVLj4bTGATWQxQG6aJbZdRFr6Hz5km47ZPWFjc",
  "key21": "3n8suU6T3zwGb9NEDJ1AtVvy2sFvSP17BMsP6YxsG9odSk5Yho91e3yZDT7yF5yJLQmmNr8XAp86NJZNEAbxYGKH",
  "key22": "3W1FXixFA1xdPCSZJFZc9MbdunoP1QGE7NNedfvLCWCoFLffziPYn5sk3u1sH8BZUvpnwgKn2eziw7hujdrKeHSR",
  "key23": "owBHME1RS4zMQg5VGHevbK4Etp7kHNnNdL1on1cDAcagzxVMepo8Q8fzvtHhb1z4cXKLzswdSUrBov28R1mDgrV",
  "key24": "4uTV8XSHB3nKuZvDY5SZkPCd3EZ1c7qhX3bTe4dYHKNVraFgyfCezsVjQ8diiHs7hj8QwbLxH7tFWPYHcHqGLiiy",
  "key25": "4XmBHWyZE3ezT9hXCCuW9C9hixPeMs7grs4bHCLVFj93jRx1veSAAL14M49A4dm3a7MNnKf5XNPwLfRSVy4icrcF",
  "key26": "4reR3qKLGjcbMqXJhEGRjtCUedzxXL4J2PAqiaZ8L4egG2f9iruL7zBLvWh9EGE6CddKonak4NnosLA11DGcLUfK",
  "key27": "5ip36uAF6Z8QqLAnF4bvZPowj8duPTbS98wnYEncHSNeqVhYvowaUQ9N1yNDkbvaK8aBGTgke6ePHQtsd6mQVjiW",
  "key28": "3Wz9KhutTF1TMcu2tUzs4gL1cy6hp9j6c5u5MTGweuRQnKdQMVzq6N6hz2oVCU3Cr85F5isAH4y1xMvVFCi68yYj",
  "key29": "2syHcRoeGGW4e6xWDKU4ue91V8kMMiYLQe7X3keM6XmRQAdpE9DYEMeQsUme65eRBrDA4CgC1qcLo1t8BKsfA25k",
  "key30": "KN9HwgAC1CW51TRt7u9Ci6tk184tiTEztbgaQbG31QN17cXtpgHkdC2C4EmZEbu47np3ztRrV843yKwAQ5HpdnG",
  "key31": "24wLicC4FngarP42c2LWnEASJEmHRpmEeUaqr1uKZrMdAjWHjxopfYJ4Lf6FGnsEy1ruNcr7bpH6sxaGPvTkTFVq",
  "key32": "46VpHdroLhpPqmHDjSpQoYjYfTTdtWkGZHWVieUdYGxvxXep2piZpGN3xiScD4rowJNu4qf4tsnEe7LpfvSEA8pC",
  "key33": "3iuAWqAWLkXQa7o6QUy2ZdGGtKd2YSkVSJi6HfhADTxwpYjbB8VyWF9KNQhZgwP3Dig8aEVGCQSD9RsabnupUzzn",
  "key34": "g36yhxFWPFMF7MdEQeLUwwUQkUNtau7njvqbnzJrQ3wd8f3qcTguJbsuBp2BjDFegSyiSchabXX9KGk5QHdBkpV",
  "key35": "2W9jAatLU5N4LoSnZiyZu9jiCjJfMM8QkeDi59YgTeA7HsPqeH9kptCgCsU6bjBrHeYPD1qyosY5GFYJ2ZWbH156",
  "key36": "3W2G2sTMheksprWtJ7wqRmnBjZ9PqjnDEiRuVfsmndnYAG2QrHMNakVkPiu8deHjHeBCA9AnZpdnko7V51wyndhM",
  "key37": "4hp4MtuQp2ToCQgnGTGMVP6vFCW45T3eW5Zjuus48ACS4wxdF7beVQdpHussAmkSGrRgqoqZyPLmAVyYD2znEDD4",
  "key38": "k6qLDfMaCRhowDXcpFKyXrrnHLMeUiGwUzo2M918CesRWcsnFDrNAUGYsntVRW8Q8yWFvMfzVstarmS7mcVU9Qx",
  "key39": "669Prtp5u6rLQ9KaGHKwKqFnqwqb3QDKG2m5JxkBRAbcDKt9NG4GTWDisqstJPvFvkwZa31HJLvy51pdJzPzvm6A",
  "key40": "44iid4eSQvawxHmCS47ebi6cSWCCmd54gZLSnwgPg7BAuL6keZWP1HmidcVeV3damPiH2P61k5w8PuMsbLDaGreW",
  "key41": "362nzsRuxyATEkWVcu7xdveTCa9WPXfncp7baMYPWKkAXtKY8sZcK3WcNsTtkLRNiurkQva4rKz19ECLciQVXVLt",
  "key42": "23FhgJKNVwgvrGRYdmgPjtvrGKepVphtARr1sGQ4W9SA2e2mK34RNi4XKdHoZLtthmfKrnBNxmTwy2MYTnEQmYt4",
  "key43": "44NY3qpbE4WADGpJWAXDScj3eKP99gA2ENBqZ8NSypP7C5GwdkNf1CP6HX2xqcHo4kqWHVKcxVfzHouVGg2QtAfS",
  "key44": "5Y8pFqbjK64QH7LwDMvgKxTCGvRZ9EQhMB5kMhV8GhFPhCVR9waDsAxRRp6x6a8J2vWY2UAJQC8HQumqDuXzL8a1",
  "key45": "2Dzzmm5PVDEecUKyrsJ2acxaEduJ1U7nmaQ2mdYy9sEG4nK2mnpxTTipWvPnsPQQZSmSUhrYFW53Ld3cAnzWmU8J",
  "key46": "4uqWJPK1X4d7c5Lr3MEZr6pDs55TyG3br4sxeCUtRVExyMC6yo17iiCiMavJ9Z8Dmye5sDa938Spdn8PTbjWE44j",
  "key47": "3SFKYTrBWmTgKgpTxR4BG4NqHJPhey1Jtbm6iTgBb8niJRpoCTX3So8MAQFtLjyX5hhRvEj2h1jJpLWz53Bz89tG",
  "key48": "BzVQaf27iHp8PdFQykUqeHFVMwCqCVJMsaoqwgxG7q7sR9yPosXbpq3UU4FuUX55eRbw3Eid3xHR7sMemxKVn7o"
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
