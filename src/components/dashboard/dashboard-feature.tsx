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
    "4KEMGBhKWtFAZfH6c92iGbXAqtTviuPwbUPwMScqbyMLhbBaLKxVwfgHo3jVy7VEUyuayQod7w9Xg66td7Jzamja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gma17vnvtAVS3YmN2hHJECbCHjoJosC2C5odX3PHtsd3wMd3YfBpYdNZBYn2iXhrzAWbGSyhU1YSYCrBnMBgc6N",
  "key1": "123c7KgyKhk3U9HvfLX6gJo11SwBGc5Xpoyvod7uMAaeutzFwxTcDkEbkZRoXf5aWb2cC7jCrKAVstE4gKbywbyf",
  "key2": "5tkWTu8MYD4L473Ec2KyLfoDbK4GCvN4QiHhWi531bgVtfzi5REabCNTsdUE2ay3eAtgLbbUyqmcsnRN5mx65Cmt",
  "key3": "5fEgDeBhurVZ6X8Lwy1EFU7h8uY1bu8cPc9D4mCDfaJiX3u3m2piYhwSuGZSaZ4CDY4DfoZ7YBYn5TpwHKw8tb78",
  "key4": "2KjR2Gy8J8TKXUSyR8dmAEugPf7AymHePxPxsWLZX2NQXzwws5sGBabWHBUuevSuqNdk3WChvZagLr8N1eGQ4xCd",
  "key5": "3VurFJ684CaCzXpZQxA8Bk5Wbojz3RgTojWsgr7Q3Pp5ECQW5RKR1GNyCG4WM9cHz1ErV8qQNMarMzq8ntjQ4B9n",
  "key6": "QbQ5LEK9t1rrubrxX4ujuX4qgxAqKyNZ9qbHVufWGzuxqxyuBx91RKCpcF8WWPy2GFUiVXGvUpJyLJ1KNdV8D9R",
  "key7": "77iv8sJBcaHSttSy3QAjRYn5uyGsXs6H2KzewvPuwTLWnB9m9eCXXR3EusJcKcWGAdcY1tZPGJhAXtFbyAmDg6B",
  "key8": "2SNp62sGTEP3aBY4MnLH4dtvd4VhGJgGQuznEJ2fTQcYQiqKFo49XSSucGMcNawKYeDswt39n3iiyv4i85YFaEmb",
  "key9": "5GQJhc1ZX4EKxjwikehHZWcHXqQByHnj3SmdBNTeEHTDBZcaGtjpaJS1ZHVJfvbkgqg9tyKQpRypMRDGLqJg79bM",
  "key10": "5vDDbHfbXut3qK3t6Cgm9BZreFm8Uo4ZZQ1MBBfhuVPNtUwicJDM1rEFht1tkahDR7uaYSDbuD2xW8GqfAoKpHNQ",
  "key11": "2jaS1468QiWStPgZffD5ab6Kt4MbuFHt4SFFKHL2aYyRY1npUdpwvTw5KMLM2cTMqpXc8b9BuRMfGRaN1w9v6Bpj",
  "key12": "3N9GGHeWs4MpmQLPZotJS6AjQPLZ8V8aMucB65zEYLDs4koi4zKDAKriSh6DwVjaZtnq67i4KogTUA4QUTqYjW5L",
  "key13": "5E235hRJw3hYc7Q1fjSBJuoKg4G6sAg6HhdnCM8Djq9Y2H3iQkkSaavVaZcFdVQMwcd7bws9rR7JKcAZeaEZByXy",
  "key14": "3yH1pyi2ZwWWcvyh7N3aTWFBzC8NdECxERoRU98FKHSAzYazft24bEBfxnz3A7M7S4cPEybuLgVPMAQG8uTA9FLq",
  "key15": "4rQLWLfesMtQ5fYKPJMLDMQzmk96NnT54rRvaiNubPs6TVdawyKLqojfKRJvzicwFesehJPHdYKn31BzNo2A1fLL",
  "key16": "3K2exYvQqunB1KoGeuqs2W1R65mSE7suz6CHmR88KpSuYVRjxBMUdjAuCPnWBsyrj3a1nwuhnRmw1yVeVzpN6Wd6",
  "key17": "3UvRkEWHJuNup4Bxes7av5ZvHEY3YbJ553sKyBRpRKX44iqCLgZNFqkoeF84LVE8BhWkP7mbPAX9Tkcz19GsQthf",
  "key18": "2UxMpM78K6bUGHTSjfznTxYA7sQtDquCT8cqz1NAojTghDnag3gkkWCrvrSiQGeQD883JPrRGqpgZ4qyKWCw86BL",
  "key19": "3PseUMeR4ighF6KK4mUrzX83ZNnPCK3p6sd975nL3cJE8c7LQJ2hhnrjDPfN2JmtzBSJPFjXMB57Dy4kTuwtGa7v",
  "key20": "yQ2FZeY8iiLoZAYZivTRY4nvRkRipUff8fv1J7ksWLbAZxgXkbDJGUmGBcpvvvmjnpjkdeUztqpNdA5Tei9t8sV",
  "key21": "3jxjwG3kMxPwDPYWbQRU6GVrRxh2RkiLLUsRZQjZHe4YsNa7VGH7Gkj5bQAUHoBzavJjXw2hnB32zc7P9vMaShtX",
  "key22": "3rct9KRSqJqU1BZ6f7hLrFXUwQsAqKEnida8rNxYvN4maeXyZ8qg5ddRbto6b9WTXBkRQkQf3dyeWRv6UV4p6vHA",
  "key23": "3radxvzhQjbY1hwTzWvHBRgAdwnNiy1Kq8DnmEuygzXk4BL3Uynx4AKZnAfd6qoaVRgfsnPVdjebvpHH7tSduF9Q",
  "key24": "3QWEML9odY4cnt26zVVUVT6PbKMvoCcixd8BGBvJwUtYyfwg65Hym8g6QPqL3RPhkUzb133PYoTui4wjcSD6wEZq",
  "key25": "5gLUr5j31grVGDf7onJvHJujPnMa1fXfpUtNxiQNoxv5xYSFDNcjp1tquvXV3UiDiTo1QFdbD3TnuTkhwa4jwfww",
  "key26": "4gAJEZKPcibPY5JE5oRxpg5GJXceTBPhizA9omTKEqREBY1zrysxxKM1fEvsbGa9nHBEFHZNVTKAhdeSUCfKicvX",
  "key27": "J289kj6bwr5UA5YogQZuHRB3xjmed3tc7VZ65V28SXgq5F9omV8XwqDTYFWwnRYNpBbfPhbkRnejeCz2sYRJF86",
  "key28": "3F5sfgwF6WFQtSztQQxFsYTxSN5TD4mpDJAqQ7kCm7epFDhwVwP7nCjftJKYP4Q5ay4ZqsnTJLxe6mnhrrdjvXRi",
  "key29": "4CcBg4gWFi4jhhtEV6pCSUKBrFSgzjaHYBXsFmLjCBSu2AZKhNx7GJdSBJSJ2RxjMCC4YqHNDhSAYa1hGzNgCLM5",
  "key30": "2E8c5xeruEx9CDhSXoM2EQMjy6hesM9b1eSyWdjraZXhFk9VyYaJepWAdvRptCFNidYBCphQkAQi77zn8wgnPt6w",
  "key31": "3rnKKbhXGHnVSYWUoeskXN9gao7JrZUUM5QjS8tStixYWPbbCchiceqPpGC1KpWRQv6LTstQPaFgvxXTYQqJoHn4",
  "key32": "2hm59UipFSoRMuEXV1s72KfqyfmuoUxF2fLiNE2k19iSsKtPLYYgsmFZEiVktaowva52FB1gpGDEyMpyvko3zmqP",
  "key33": "3XniaGQcT4ma1YT61jWErJiSxgbGA9dC33eQTHHsH4kTAkNuaxytncmxuXc29WCdGHDzVBSAQ5KRjfE88JAK1neo",
  "key34": "62eGKDycvMzp4YcTjE6qYcs2pgz4dLaYWbsiPMfZxXG3NTZJD8Yk5V6LdwUigxZRTViEUbuKSKwRq3MrU9VGtnAY",
  "key35": "2MbJRmoP6JX3DWJQNUXmBkU19xT8qS7oaMyPRw56MS4Gf5cbxhika8NQv4evPtKrFtWPVGonxi75cWmGQXoc1MBB",
  "key36": "3gF1qG7htWMTT5p1utQP2MQuy9WH7oN6maaHiCr2H975KnoBuF3PT5EiR2gBuR1r9wXoTN8PGKvMu5ta7q5hxSWC",
  "key37": "2BrXUFMnjKLwNM2c4VgGLc2V31GaEnxWubDshVVRipm8AGJkpffCFhpZNLqZESiAqhY9CvbraebbDiHWDLC4ngsF",
  "key38": "3TBcVx7c5yyB6Q9hBfUTPEaewWUxUk1gwcmWTDN51shdzRrUwnLcHgbJrD9oDPi7JgGMjP6M4jeDjSZAtCrYCNun",
  "key39": "2xaiui5CJBJcNKTzVJxkiLNbPhJJJRtaN9wEWCMQV4Ze6E4xfjfus16YYuXLbKKRYKDE5paFucQ8vaw2eouFKDg9"
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
