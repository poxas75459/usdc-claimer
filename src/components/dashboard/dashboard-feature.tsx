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
    "2vS4VL3AyxeCGsf7xoP2vNPT1QPfEsvRvvieg1Agryu4j4mH7a44H6DtCLQCR6ph2gxijJUJFfTAnTzXzUaQHmq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MxUrHxhPv6L1zBBtKro4UpiDan6gRcQ6gpT36Fr7xsZiwsjsLpXg8ZMVYKKDRNDNzAiFogkZA9XgGYKebeSZED2",
  "key1": "4jn2GmGfgAJpZjzaar3WmrUwuzqunKZ5cVytqrT5tPTPtRejRLVw3UaygENYcobp6eB4CdeYQfqT7QN2b7RXbVwT",
  "key2": "2nEWvLjGNd8yi9PsMNRo8NyRPBnJXtMhdDRPwDYbXsWYedUCs6CxEd6dZK7uW5AnJyrj8qG2qJsEJpWddED3tK6g",
  "key3": "4SEpUMzdmVxBowCe85SxYv5g8xKRmbe2q1dq4xMHVbjPXxiUXM53juZi6bnb2RCSk5nsW2d2WLnpouyWCM19A5h2",
  "key4": "4gXJwmRLqPjzmgwoxPafLJx9UW4HabpHaUmayjXrgtcKyCMqNcKVJxscNgyVJ2kU82Kx4bd8fydrNzdRq43nQJH2",
  "key5": "4v61XBsDLjE8QTqaT89ZQtHYuyZD6JJAg2LwrLsBLPLai2TfyeW8meyavXYPRsofqz88Xpxwe56taXhc9Geamwcc",
  "key6": "3aZCkVNyf61vJNi6chzYKuBftcSSc9btMw6YTTnpHxcijH4mCekgoGYS7n3pFXXEQQnzNza8qcQSnTEJJJTJKLGN",
  "key7": "5ets3BfJf6rgSDMtWqZdzHT1hYVmHJLkpT6PAX9pZ8Jkq83p3c97WJQeDwEsps7RzUnFPY3oHYafg1cSiwMB9epJ",
  "key8": "529G9pFpAHd15U5v8U31u2ZYpHrEvuFKyGaDHE8W3rsp6DaWsSiVhHTQD33F2Qp3kvXHZs62A6TqYJVq1t6CbnLJ",
  "key9": "39vvf8jyLptGwEM7TwahJEqQsu7Nbq8KD4HquqgHqGEc8mZXPc7RR6Fpdxo8Gs3tTwB3qHPpXZnwYoZMwDoSncJd",
  "key10": "j7dG3QTf3mDPdD2vn528sLRiFg1pD9LkGvEVAqJCtWSqbGsTWgcPnZtC7s3dVZcE3cEJgD2R6nYY6vyEFtr3f1Z",
  "key11": "25KdXrwdXFjbkkq5MNxE5RikoZTJXbWLxgHgcS1embihXwzHZq9dAPGEMvQnjFk1ESbPFiujfLmEXP9PeUB9KvzK",
  "key12": "39m2WKmTKUMAvasD4jzLpyvYTvJeKe4m2pFbCba1whyzvz77tjB7sQCCWYvcYK1e6byCE4bR1Xpn3ADfsGZENLUv",
  "key13": "4Ng5tm9VVtiQna23R4tfLeigrFNsheBZ8D4Z2Lfkh6phZZX3ennY4Nj72PbEpP3MiEAwVbCdJ7PDQYJJyawPiV7k",
  "key14": "4gcLWNXKgwaxUgrgLD6zMAeVZfRwu4dQmXfaQAzY1UNRvFPE4xZwFkZAPSM8baAtkPy5FB1YLCafQRxCpSS63XX3",
  "key15": "4HQzhJZCEnKfYGiu7xwsuD25BQGKymu2jKGif2dmJNt6tkHvj2yoRW14zb86bbusiCNnryXcFfHXuDqLCUeJdDR2",
  "key16": "2eKqhoe9n9YGV795PMFAKR5EaqUj2t4tPWAjfz6pqL3hRc7tCPvRLcSwfrx5PQxVrUCU5GMbf3SuzxrLjDtHy4bv",
  "key17": "31cXgrucJWj5qYahomNTuSTw5teCUboKsH6zwAYcnLvynjrLm2dG9nqdDLnNc2K3RqP458BMKkk8Zq9e1VkoywDM",
  "key18": "5rPF4Zowz2mSwEjGFJT1xDC2Gc63LDUeE3KvtJ2KCZQc56Dn6ZL2Ne5VtV2VGWL7pYcXNyG8xdyag7nXKV7X1fHJ",
  "key19": "5z2cwwKSSVJPpDxjGB4YzSb4WEKzXPtiqYtgHiAAbH5fPVmwG7PJef72cVQ447MLcNYACYyAVogWPwRjUdKhPMXo",
  "key20": "66yJ5M52dKs2VDhMUkchf9qyYiF1FXfabcUxztaPymck8bhi6bYgSDfHMdxdJD4LvAYD5LDZxRzdQM6tPkUWLtsN",
  "key21": "3pZKHTXviWQbrBqZFrfZVZ3S5nHwiMXq69x4nsMN1BhhPQN3fXJwV6JabCJTm8vYXZ5iVA838vginfo7udNTze7R",
  "key22": "3EfdK7qCcT591JA8vn7qu6jANFffMc2Ypd9yp2ebbceGsbEPMZq24diX1M87Bn73LVhaMcJDEu9AyGRtA5YjGzun",
  "key23": "58UY4ZaFBRRBj7hA754YzZvDsaowv82FSX4WeEGFNFkiJaYZmKkc9DtvPVmNeZnpSd5GheQfDWdKVRQM9Qjemv36",
  "key24": "5R6ca9hKQAevwdLifKdbDiTjSc3CA4EeVyN6qWj4LevPL1cVNvDuLbwKF6yinq3NWjM8jPfJT3PJmwcJFX9tcZHs",
  "key25": "4pmDsjEKNxQKS7s2dUdvSNpZFjkm882SkUJjx9irxshz6qFaUjqE4WUXsKL7ve4Ys38fYVsbodbZWdDMrWQ18e54",
  "key26": "3cKVPj9f21bF63eiKE5uCHJQbTjZ7YaS9XcmFvaAVvU5WUmmvwyJXuhSeXL9e73CzxU57CqDNzkawcocibyGn1RQ",
  "key27": "216piC8QN9jxwJj8mg6cUXhjHPVN8g4RYukS2CYkbz9vT3aF2qMkVVHKe9KP8GE2fwnTfbLSf7WwTgsdchuP7LNn",
  "key28": "2AtzVt1ydcdw7DXML5souzXScuH4usB3yAqa2vMmRzmju79ALKSBrH8rjNfdKsPPerwR8mwRByfEovTLUTkcyMEu",
  "key29": "Z3P5bsiHSySKkZUXAbK4wTiVPS3KNwcrABaqfznVm2fA956E5Fuc6JsDMC863hJagMhfQTbL2b6gNpvqgKKTQej",
  "key30": "3xJX3MieRR8DjtFNcFZhK9PVvDEUwzp821cdaiKMtNgDdnejt9U6PyKu3XWratP7avBeFvs2JE6fLRLgoBcyW6aa",
  "key31": "4rtqXb1fXpDkvuQ79C9iHzbo7Ge5ZTh91JRYgMsQfWh5eZLveRAiZA4jeHpr6uzDZ3X3hqx3RH48ayTqesYwmUvn",
  "key32": "Lez887a76fS5aJWbxVuABHhwgbttTR71j26wNYf63SeWackCUJWWujuu7bmxLBYv49gyL5R7BQyed6kC8UL6Eub",
  "key33": "57P6rtZneywS5fDRNwCjmbT7zh2yEfVS2x9LjEDRYgqjHX1gqmGgp7tfiD9M97sH4KjiuhuVtdVkwjFWWpQ5p1Jw",
  "key34": "3M8hby5HvqmYmM9xVNz4EXVmsTWfCB7KtigjPj4asyouoUNQqRT5AJLHSTCTgbmMFxWBN3cjD9gQbjCFYiRNDbfY",
  "key35": "2xYCk8Nwoc2UCHhpZM27hahxZ6MhuuqmaKam2kVzaqyVaQjxbfs4mGppaw8L9xT3gikZTPTfACF4g1JVqGuR3EWt",
  "key36": "hzw6Wv5fU5VG9kA18MCwgjpeZtMJxupQHREE9NQHnHq7RoeMnFCyF5R6w5PNqjWceiW26HaozobGphpn7LKwFwT",
  "key37": "4aQD2QgLmpSrLSAp6FJ2uPYszRMmq4cGBXh9DihUwzb2FHeE274dJEdHdRe8gWoaziJfXTJc7K9Piwf7RWB63KA4",
  "key38": "sjjKhpMPhVqFKhj3oPAgZdr9gjygzRVmtpZvGJqBS5wLeNTkPao28RHn2Wr4xB7etXXdYfJjAo24abUnNpgF9JJ",
  "key39": "2AmsoxfqjEqVmTCAquL4iQZFz7v6Uwi2DkhdLiqVn4AQYxMwoPrmtL7LL4XQVb2jGYEWscYyqCwUPKLVPsAYgBaw",
  "key40": "5tsGzHNRM273cqjBg6tegTMrzFo6RHkvvgVvRnVY9otVdomRXvyrrF2mYDsL3ve728nzJHukWANPK2YC6ZD5neRg"
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
