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
    "5kkoLsTXdVR19zDyUcnjmUNoutkaY7AoU972eMe3d5e49aTHyu23LPzdeFw8MtTaZjgpXCddTozEho4EL3mbpSqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YA1TWfKxd3Cnkrmw7s1D5BofcRPnFb1C5MgW7iT7teUH3T3xGs3qbwkUDSfrPnnzZMXBPZo1L5B8bD4Xv1K8M27",
  "key1": "2tfbjVm743q2CY2pLGqoykyhANzdj3EwGk9EUGywthjH6EZGLMsNkpoHQrM3tYj9Kn8oo77vzzKRWXCzJzUEsZrL",
  "key2": "5p3jyHEdJg1EYE2b7CkQLB3WGd2inB8efAchgnEqHw5NybDir2U9gamKd5acnP5c9MABxAM6jzQKFZnrquqJpkus",
  "key3": "3vTv7USW6qWYDGpNTq33YpdWMSraiYMhFFw5GKWRKhaTa3M8qkS1gccZBJvGxZJPusQyCd8ZNkLdL4Go5mp95YJY",
  "key4": "5b8Q5RKTuSembSbb7Npr3xdYHyFVneCrZWzzzY7XjfiBjFPabYtihnUQMXLVP7t4Z3MnEuaJUhSfR2c7nw4kxn8i",
  "key5": "5Bfd8m9oj5qhh4RVH36h2axqehjEKj2Nm14L5qfq12Ra8z5AgiM5nv9vzhiwXeHW3ZHPFW2TRGauir6nPUeQ1kzo",
  "key6": "2GVJhRxy2S8hzzYhqiTzu4oDjbQFRFDZBYD7DarXXXFcWjhdM35DdGTezMxncq9BQXEkRf74B7rqHeHtNww2gaoT",
  "key7": "4kaFqXweQ94Vf2knnQVgkFYxhyE7NHvjngYY4W7JwfiDUNH8p5hZgts5ihCHJUMiAh4r6rwp94J3tS9tSTBjmt6X",
  "key8": "2FWwkTK5oSwCT6umJCAreXW135pTZoXg9paKPvWee4rsQpReGMBwkQyAx3cExks7hyi6JwhZi2XCn9rCtwGZjorn",
  "key9": "4ogk6H6ngWdcw3YTFMPhx2aihSa5oXsLfDU7H34XQMMzdpSA5XUMFgJD62phi9RE8bFLwt4Bf13CJ3wH5HK5daVr",
  "key10": "5zQSgNqHGERynU7Xgh1hXtCpSFaw6FnL7ZsfEENvytGKQHK8CFrcuVsk4wGdt1GS4GDfZwMVCJo9VkjaWmKcowNS",
  "key11": "27DBqdDqQWmjgq2SktsWX3QrwteMSipUdhZVRb9K7GNibX29a59pGaoXikaF1bjATHr4XEqW3Fp2jGQHESQ36zhU",
  "key12": "52KuUygHzMyPHLLnvv9pNhKGezDeKceqgCSc9sYeTeyLrvuucPANzPYMVFgzP2cHZ6JH3xDRNrdC8iSXkJiWS6m7",
  "key13": "28MK2StmNtedc2yo5J1c7D2PYH2ck4Qr8jhiwHqo7WfLPZY8EzHJPqjhZ59o7LszUX5zLmZvzivKnjSXpfMYRxef",
  "key14": "3kFxzK9ZJ6fqyhcuwbuUNbu4VPhA9BBNwCZ1h4Xzd6zSMe44pe9bZVeqWHr2d6bjSB1AwtcmDSp5L3oKmc2xSqda",
  "key15": "5QA7CEx9MQAij1Kjuqt5AeegEuifjQx49eFA2MBdb61LG6onPb1tjd3kFgDdhN49M5vmXET5K8JBrdY2S9xCf7UC",
  "key16": "5fWEqNSELVawmXT3ev2Hh6m1Yc8xwpdFkFKQtJGY1A3cwZ2He2hcJZNY9PKxAbfvKw7mr9WSgv6wYNtbS6Y1NJJj",
  "key17": "3fGXPoj5CLxjGDwGkdGygyZRMdmssoqYmxvEVcJHrvY6HPFFzEtPFpT4cgn6zZs5aDRgEWPyiy1duQkPh3s8yyAx",
  "key18": "MknUBYPFiupT2xwuzSNuXGUfBDMBDtC7c9TsjYJrhic2tdW6KTqoY5hda5VL4rpZCgcAVjWYfMcVG5CHhJZab5V",
  "key19": "575g27VG44Dapk9P1Tn1vP2YthLx15RxgJKsCBdiHe8CTZeCxJB18nFBkVMo4RUGyqhQ9YsZSC4jvYYcMpnkGwH7",
  "key20": "4YgcLCjWuoQeDRAdp8h7a6XFZyXe3Q235ERfJMwH9z23UnyBjaKWQtvAZ5rPSpeSKT5X51jk16RRoM9jQmK2A2Dd",
  "key21": "3q3Vy9Z9b2KeuHjeCJ5Qp3eec3ytwEsXcmQKNQfXYo5DBNNJNAeQfXnS9HryKpQK6iDuAD8So8LC11ztyS4pa6tm",
  "key22": "5UBQDAc5Fo2vPc8wZuQPrAwZKoARk86dQECaZWKdqW7QFwWBYaSDodVAfrypm1JVUTKbTczVezoLUnUwDFDCPcNw",
  "key23": "3s9rDws99AKs9nhoa17Yftp66dGRe2wAFq2siwjizVtt6beGi4FUUYt7e1d3brL5tSjk6LSgLYWJA3wcqCfD2n57",
  "key24": "dmBz8BGTWX9aCiN2gjWqwJKeZXJfENzfPtcUay3RWhE4x1YqMxhFtMzVx3XEQjQAEY91U1qcHVgUbVPkZwG3Kzf",
  "key25": "4gbtwY5uL9z4hpM7VyUAg3WXHMRmfhceYv3mzXvLzd7WyB1QxPpZjVKQ8J9pfq4LNwUSHisq4k27sPqg2vhmdzX2",
  "key26": "5w9sfGirsXgNxb1yDVWtihr1TgRHx2dGAmheKTn5dk9HuGMi4cYQZCey4mUWExDibogQX4HwT2pyMPxZzWVVfutr",
  "key27": "2qcfT9aHNQRtzhMVwBxBYcnWRrGqdwrDGDVN2z4McLVTzcBeYTCdJdFiU5qJqyRYwJb2Grcssm2HUKQK8TDXYDQx",
  "key28": "2DwKmNP9gwfhaGASxpveENdxNRnWhkZ4YSQ4deESQXzHQciUc5oUM26LsUreM2AUMuJXzADM9nRuzYn9HpA53xYB",
  "key29": "5NedLbwwjkVDRvb1ExRo5jPKqEBxyUrERz89xp2w3WDnJpZj5qP2MpkmrSVNZjtfAUd7saLdo9gnAC2tkFKmm8y8",
  "key30": "59JS2LSUHGbnFZVMriquafzcU7hqftpkc26m41Lwn93oBXHdMVC98jVLtthWftrB6oLMZTbyEv74eJ5vUi61ss4Z",
  "key31": "3NWgbUwExzoTNQThEz2ayy13hQ4fjTosi5nrvAfGuzXCpzSFiZMRCd22r5o2FmphfDKziRgHo1CjYhYpW6Fr8y3z",
  "key32": "3PpYmeAF7p8xjQPKXmxUm2XhNQxQmYwqthroNaYmqCgoi4apf7edKNMmHAABB2JviSjVYspzC7JkyrYC68ZLoyEf",
  "key33": "3k5tD1bnYqR7zZUiTmjn2RupEcWssANufmxitauydRSFyMVhJmDMJjXLeci5v7Li7bsKx7dRMi95jspE5h16orc4",
  "key34": "56fswimub4BqRFLRfQD6HZ3dJL6qwUhM8Tgm1pfYbf35hNHcsYJscrKEn1MxK43n79ZSnVba85UGzKLmLw3nbSp3",
  "key35": "4jfUwVXjgdFZ6eP9cwALk7KKAPxg7B2F2mvXPTGkAhxzd61hJ29DHDWL1Dw6d1NwA9rGuCeEffQXSdmh4Etft38B"
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
