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
    "52vvjuYSYr9ppwU7dxuZinJvH9dLnoeat9qBVbYgqmqqi4urwHCmcE3kRjhA2KNkDmjQc6qrVgrFe3nn31Pjq5zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhKZpNyd6bteLrP9JB9VNSWVUtj69xxvzvTFu17JAs6avg8SapN79JRjRu7gqDP7pd7XXrSa18rqg5WNzcjSF93",
  "key1": "2hmacGg9A2ZVZbEXSLEdLKHGkk4fnzSzfKfihS4oiJyCYwys4PWHpDvEi1nz3noMehaTiNypUXxPq75Mpb8BGHqN",
  "key2": "1z4cQnNbFNKiJ9pUaK3eYnPhepMZMNCMADr4exb7w3ZvAKw9TJpqYDanf8P83hAL1cKhQVdnTtvob5SVpnqdpHh",
  "key3": "4wDk8HmpNWjA4hsTr1oUAb4ViST9gajErxizMbHPUFAQb96LUaXdhKawfFocbVuf7a34mV5gD4PfXFZTHxxTydP4",
  "key4": "fuQ8Kuj2q3VMbgUFb8yQfMpVcwZKmGwJAGdcTTramT63z61Ro7fb7iS4Z7r77HWtXCYzMQey6m5NNg5BW37aUwR",
  "key5": "5nH5MCfLbgc6EvurR18qxEri7TimSHbgQd6N1jW4ryBYeDwJ9HACULm87zrWmY2AUeyWo3uc8ghoNRR5sA4yQqgv",
  "key6": "4z586Jdz8JHTiwfo1MPEMpudoi4891CN7fCf3z7gpsvNZpSwoWup2TY2pmFZQu94k1ygJpJyY7BKh6mkD8xkjg9d",
  "key7": "2QV3y5UdzVNJDbELwNHEpdEXRLM8rLBDUh1Q7nkPkFiYiHQDwFGfVhKXqLMtvvZjUTjjPmb9FQx6yWqhRWKBrs5Y",
  "key8": "4qTetY8BRnK2B2YxN9bZyrBGra9F4sCotyuUcL9q4E6wPAALXMWiL956wSPybGGEeHttuUx8Uy2q5z9YNp4pQYUD",
  "key9": "hnyu8N8k4VsyKPS1W3GxnKWyLvSEUXDouAWJRYhvrekyMgKrbdxjLmx5poZjoKxUmGW6dmsgUBDmoLm4Mxtr8FJ",
  "key10": "1sBddsefrjqvJKpZ5kH8o3DN497KE9eupoLa2JHaJ1B9QTNbbp76cZWFP5w7PYJSbyMmjrnfJG497Z3PxfRcTbz",
  "key11": "5gXrTkv1fkvNBMcxi7edQvpdjp5m8FinBirgpAcSDM3cQPB7rQ6RauxqDTs19KBAJ8QJC9uFU63DPyf7V4yrgX2P",
  "key12": "2HDkbZNeDe8pbwnoo4SE7P6RTUSFvEjR9p3kk49fN7wqfwEqtyb8yrJSrcYkq1ELwsmT3xE9q7pdGLgynzFmhZst",
  "key13": "bB4B6Sh7HTdn8YNB51faSHYVRaBtRe68nN2fcNXhrq4Cp6Pd4VfRDzSjcRevAtS45q9QBXTWxCC7o61XLuNWy8o",
  "key14": "2XfwXtXFtP3JKy6XjkY1mm73KkiLohQdgMvMYKgDHRCsWyymnboQZGKCHFFD4zgRpdDeoaZbN8vSrdTTuE9zGFvB",
  "key15": "4dBFU8sUrSaKJ2DiyJmq5HjiJRVdpvZ41i3DWSJx5mUjxfkFjMjTXBLTBZuHyFJ6At2eqSutB2exXuvsi3BGoBSx",
  "key16": "4XxYyyBZzGHsA98AjGS47ZLwyDGbjdXoSB15uu8kiMq6gP4s9hH3FcCNgrTJjJvscBgTWnLDhwpPCZ1FNhivG5Nu",
  "key17": "5iesuCS6kYQmPdsk4pUwwuKimoDkviEFkK196v4ZQ8qjPuHyhsvsyrT2y5wf79t4dPPRukdqJHNpEWEc8wy12WH6",
  "key18": "4RManrRxXE1uMhhZcVNpWLsSLgqdYtyw18W21RNjWW9C714M9GfCcQyMSVyNuFt9t7teyF2ZNiSwEDVXa6HHjty5",
  "key19": "3rdiyHvvL1xM8EPVMR6KibkkHqZ2QRgxaaomTuw6fvXz2ohEBsTa6tFMmZHoXYeUSRZyumV4ikXgGVowHRGBjEEF",
  "key20": "2rJ8H689VeC2HYoVZazxZ86zwRkDCVQnptbHR1fHHzjtKejy3PGDzyUjwJLsbW9j8iwh3ubJVqpMSJEucy6ExC2i",
  "key21": "36AJuC2i7YNNz4rPAnqNHor8KpwrpP28VGTicXFVx5A4XjhVw7x5EVcsaTD2tHTngoVu21wkLynDxTHLWRu62Hhx",
  "key22": "gV94rkALoyhA2Y1MchJHuBSc1TEYavenGW4mR2nMXk4M9yxsqTTxZDbEKTVFFRbM75HGkhBxvTHjhhNbwhn3Jf4",
  "key23": "kqaiZrz6gJxphnqpXexJxQe2VywaSmVEkzKgo4WJ6dUDtwpkGDehJfbVc1QbWSWLvPt4nhTmGymWstSqq4KRKpr",
  "key24": "4mukti4eDrGwSvsVXREajrKrbRwcGU3DQgGqYdWxzp5pbWPg6fLZRzUZJKDVgycFurAKm9q8CjMrxJN5iqYPbCh8",
  "key25": "3WyibLzEgb4iPRpCRWHebLS1yzNgbRchbpzmbszr4t8qkoJhBCv8MQTcnZPmqH7MqYNgjUtTJh26E4zAqSeNePwE",
  "key26": "3jka365tvhzXfp6c13J2JK19aqbXJwBHfZqxoaQRKMtEXhUD8vanwCBiai7mz2ndUBUQXW4rnLuf3J6NPP9tzjtF",
  "key27": "5ky4FgR49xYhkuzn1uy217PWa6j5kTzDPc79JnsN4voC41o4ennGBdUndbmh8HSFKpvbV6uFrttzfRPqziuvkTKU",
  "key28": "3pB8dk1hYTkFFY3gmfqbLc1SNG7GbBSsbhSaQvnj2Ed6jUwKFpn9xwtJBdsRAUQeeyRVyN5prYsZ9HqN3VNQSXsH",
  "key29": "5mmG7zDhDosrsMpy2QjeRhNCajv4kECwsmxgLFGpc6xr5sF8HDqAYAsdnf4RoVYSRbcgkGr3s4yNpGci6YBgJFFq",
  "key30": "1K84VgqL5HAHKZx7KEPNoFZW6d3ay5R9xGaCW7oJkKBDFpAMgTNmiewbws77EQyicZNvzHTNtGLnMp2NJ6bPx8U",
  "key31": "2mCi3be4Mt9XtF3e9CAjNs278BQxqzgBoPzBwCooPQ2E9LUqpNMPRBMYkUfdaLHrhvDtMoX3VXSGN7dqYMEFPfEJ",
  "key32": "3fRv63Btk6YVUsCbUweBbDxnCssJ8uNtvUPLPcB9kgrKXcJtA15Djk5aPYUty4bJS7rtEq6w3q9NBGdxQom6mdc6",
  "key33": "4enehGZybVoWTqYTCwrJPCW4ztrbVN6pQt8FtT1EiHJCFwErvyE5c28VteYzHPTr82YHX4QsbaHAaQFwtdsMKqXL",
  "key34": "W9H9npqjaYe6KZb5Ep49KKe5CTnFKbdyXuSQGL2HKEZSqbyokpV42X9hngNhPwf6ixwHqEYq4uTKYPhTJM3RBr3",
  "key35": "oZjpgM8V8Cro43wdQBncTYr6A4nKiugrGBpXycJeUCzbadzpqYNbedtnaUuwePcnM8DxJupbvnJSAAAon8zeNWp",
  "key36": "4rd3UVynDw62gvqg6q4rtmcYXSFqYiGhHKvHWQNC5jufHSgLFphmrcxQtpasyMZ8us89MY21v2XnnbaCfYTaCybg",
  "key37": "4FVAZ9zaE29bPd6rTTGkQgj1A8jgmqQiedsr3buAaFvULjnztskwMskFNHEpJARxgjQdms3rEjHDM4dF75EUUTpd",
  "key38": "5Hr1EEzqT3tc8camtezWMHGkNTV3ceEWU9fjCSQ3NY6M2mfCcdvMHpPcmQokgz9ZSATXDeK5zndP4pEkd7nv7qxh",
  "key39": "3KsgCPQiSTXt6goCiTwZDmoYyiM6x5EGcTwVJvSVtiEKBm6s46PJkf4mPuPTTnqJUMGFcsC6hEtbNTYWnnJZCY8o",
  "key40": "5mBh78PMGjZZv14R7KyaLyjprSkWeay3LNJBfvcy7daMT1WH1nK4kizGf1CsBSaigARpeCxqG2rFLToJC9aGEc9K",
  "key41": "4rPyhUkN1p9XiEXK7o4ndKDfuocXQcyntozkr8Nf6Jj6YU31VHBNPH87APSrRjVbKFv8s9Ybma8iAnSqo5UNz5J9",
  "key42": "3STn6FcMqmBhApuxzb4VFKHjNvagJCKKHD2yTfejFNx6BVfRg3GfukA5uPwfysgDRJXQu4b9B6FmM9CPruK9KDAA"
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
