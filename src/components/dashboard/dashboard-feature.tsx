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
    "fzQGUoKUW23nkr9uFqTDMQGkBpHveWC93679M2fCvJbgZxKXApdLeC5WzJ9kPv6QKuKovQTm76EtjRqPcTY8oGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sgxvuHzSXUWWWJKDo2P9EBnNumyWRL3FyBEfwA6NocTq9SmfbgCy4vjkwUZVogyiNENc5F3GCe5KhehrXfvWbJp",
  "key1": "5GygEosixcCBX28oYt2FpLgeUPsAbB3qzrxjLwN37WJAhPHPEZVPLCnX2Wh6WgkQfF3SqJ3CBBeKxP6f2G3ydTas",
  "key2": "33cLmDQNWvxLWsVBjVERc3hQeaV4f6mqSBsQQr25xEzBTqStEYPuN7iCZj5Wyy6WtGmDVU6rJRL6GBDYMWxq6MYT",
  "key3": "5upnhm6bUfv871Q7HhHgnwHbKvDURJUTk4ZtdqeRTatzLFRtxNjQeAzAkmrwPnV7m7QNiY1XsBDYk8qyk3zt4KER",
  "key4": "4c97HxYAwyZA4ooyeoTfh44FiHrb1xDv4QtiLbnersKpGaqjPsBee5xtX6cqkhQHFvrDb7kGqQR3U9RVw4fPwita",
  "key5": "QYS5dJuwVcd4ZPbkxSZbhPGfYd3gGJ73ZiFDuaMimbiQepgXZ4zR7MGYVYizf4q1pz5LdsD3N8vCviaHgiqhnwy",
  "key6": "3zRCWBTM43TXDHpUut8bTGVpsGbxPyLxAD7pq2S1UkijzZqerxVxvDNJsDz1zVWp1GoZ9hd2RKGQBa7KzvZvTiar",
  "key7": "saVYz3AgCuL7Z4U3KHdkMvDx1vXYryq48C4kFBTaLjp3GiMwiowxEnCYb2B4u1FHP5GzhsRzfkEwcByc7XzqqpX",
  "key8": "2cqxecxF6QmrCXtz6JWszm9FALe11PBrCGzJQjUPqv4UJhAr9w8dXbP8qwbRrVjvPmP8enLDSbLA9tr1iRfqagHN",
  "key9": "vh7mFGwMebP9XQgFvwqR6K27r1Gjf3b1dZ4CV7pyWSqNJLKHH8h7TtLvCNxiQi7oLuRoYcTy9MCJuJDGmg4YySM",
  "key10": "4Zu7yjukSCwmrHhvGmJyiPbf462Uk4Y74sye7JuK3CdYEjFCYMo3xLqtgLCikmq6KAhWA5nLUKEoGadeFw7osf4k",
  "key11": "4ugxwP8G6ETbt8GriW8FQgr31u2UtQbczs8gdnnwqUrhRWSr23BHMqhdtKUuHEr6WbWaH8EsRiVgyYSvMnedDFAE",
  "key12": "2EgCTVj4wAYsxqbgDBfbAR2o1bqL2itfv7TJyDjM6bzSBGQCYZE2UU1zFXLcVix8aGnChrL4wNFZrp757fB9gyYE",
  "key13": "35DPUe85jDXeovsB3nsVQU8KRT7ib3CS4iH98U7Dk9m3Qmq8BzxDhUKBvszvjrwJ2YjECXsmPMF1CDoGn8o5BYEa",
  "key14": "4tgf1fkri4Evhx8rmV7rWBdsy3TG55psTcKnWTEbVsqvdDmoF6xiDVyVvcPGY8ELi2jnis9WXxsYgz5edHpbWfch",
  "key15": "4X8kLHSvFtwKShCJbkfxL78Q3Tu9q2txYeNNUBEJj2G5m6NpJiMQKt4BZutQHc3Wv9ZJnmA1S7BjgiUSNTbZaq2n",
  "key16": "2iVMq9u9ruoAXV8sykihNJcoUD8uJVh98hbvPYo1JbdTV4YBkicARgjdjND5XTFYAsA2213dXhv3iqS8XAmKkRvk",
  "key17": "WdiL3xaXT4s4Hg4mhNeiDn4Wm2wemnL8HbiGX7LnP3HzU87YMci7S5pKMfs26Mj6GDo3CnikQbSEhZvzfJJNryz",
  "key18": "61jHD81mCDq686PnLbwwYra7FaFNU6te2o4MAztJ2LgE2ppMhha2viasUtgTg4ZzBbeNFpq1ssXUSVnnzrDnLHyt",
  "key19": "2ou4vBEZQQVaKxdNNZkEcq3QxKm3GYgTWbtDcsrrhqpiSTgsRmsGXYssooo9o9x9oY1rHyp8nHcqf26tEz5ZyYNB",
  "key20": "Y9KK3jwic4npWfiCXA9ybGF5pM9hS2TccvXKoZopgaW2qoBTJCz1oKpSaTDQeYGGBhvTw81chLaBaXPK68cVjxt",
  "key21": "2PJTcvZ7DEgF4VhYLi5A7ZPjAHfL6m75BXLEjf5S16rvRoobUikirgJUdRFnsYF7E4FZBAhXaBoXyXAMVdDX1GdB",
  "key22": "5fz3K69RLkPCfnhyqyhki3XCqN8UnH6t3F7xEYMx4favaH9CZbKF6Yb91M54YoiWK1Z2rn4zo5Esca17tShWVfvS",
  "key23": "3pWBe7EecXoG2ggBbDsiyUfXYQYtygfZ8MsCjec8zGUMVRjUSL9D91uesbZcrv8hL5ETgeyDLZotEj2FULzpdU6f",
  "key24": "36d1jkL62zonj5uQyUHTCduMSfUs5QTqfvQWWvQWxkU1ySYXs1R1ohH86Luwc2nmxi7Zvv3fCzb6ohdX3gVmiPj5",
  "key25": "5U1NXSeQ3u3cGS5LdMjGBuwM3PPwKxkPcMX75MSQ2HknXx549dAGZyhTZNhApu68FpK7ryuxh4wQPrwK3PA3N6ax",
  "key26": "3zbsRXXzFRrAV1JrWiKdbsJjZ62mP6asNwpC6i6sjmawXWDgAcvhiTLe3z2QdTeQmgDyXYwPb82zn2SyhFoh68PB",
  "key27": "54ohHjWuw7eymimVLZHC8xmCUoQYJ956Yyz6TpRpUtX8Y15DfkXD4v5fCWmRzKYNHqtM17mfWfiUZSk9JG4pJWYw",
  "key28": "4Ny457nXjiMF5oMBp5fG1BRDHEyfpgyRTwtC1baUAChBxcFv6mp8kmLwAwYmBQDucT6hTcLFuYR8mXp3FwZXd5BU",
  "key29": "2KpPKAonH7aXWdcCAsbJ8eRrZDbx7MT2mma9grkDoU3BsNaX8munhyj2jp8imkSfdtiYUs2bo95GBCncEkWZPJbA",
  "key30": "2vu5G4eb6xTWeuSPSRV4K1fWUGxiiX2K8Fa2sr5Tj1ULMyNMgY3dhjtAyqHu229KNN94ApCXoPLPZdU9GUpf4gEt",
  "key31": "2vVjzT4gEJikhYMTuvukbeLohQEeGWT621qnDQoGar6qGQv1JpXMqnFzEPjAskVtezEHpXJjaC6WyQsZ7Bzqac5e",
  "key32": "2E9D9SP5sucJiGCtdmP8vXbpqND5uFQPuUwH7hZiez5LhbccqU8s26P8EXURtDSg5qCwxUSBM7WosJLYqxJYnMLp",
  "key33": "2yw2bRcKNjscXaK4W9gPnV4223YCFtiShgWtSkjV5RTRZEWAtzcp8jcK6GLUnfyBjQgDzcsJh2weMatVocFEgNo8",
  "key34": "4y2ZGRHEqghKrHsBq5wuoYLCqyAWpFLwzimhondJdwvqr8h1tsGmF2hQmNLA5St7VqFL5R4C3Sejg3hKQ4iAtZ95",
  "key35": "Jhk6um7QTiy6AtYheVqcsLZkN7fLHnRksREBbvWxnbJNs5BEJzmVpZUWPddSq5WPSQ3n3yaPGotSUihKSTBkMfE"
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
