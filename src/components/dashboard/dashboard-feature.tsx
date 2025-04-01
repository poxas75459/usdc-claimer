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
    "tvsuYcKA64anjX2zkCfUpBsr5Ti3otBkvbWytwa7DNKZi2rxgSQULUt83oU8ogBoPe3j25EFc8N7C7cXrbFYfTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ThibwQEXSieEU9eMhekGPonmMckHRSCcauRgPPTDyiX1dEyXGYhk56dG8nwQ7xBUEjWH6K3U3fvs5nSrtx4myn",
  "key1": "CT1kpxNDw1pfHWbbRAG2gyi7qtVE6w3QjdDVKbAYKiK9Wv6SZDDTmG1XgjAgt1AmUAwwb9WJb4XJPNbTkeooVAy",
  "key2": "5xFXwGjxM9SydHDGGpEdSNq77FfUWjc3CFNMZon6tqCykMckD9UzoWPCnrq4wahDee3Ujm3ggcNqAiUxnqkLedxk",
  "key3": "5W8WY3NCKzYFUeU7uNqdQpSo6Zy2imsPnqfGm44YoczDekR5UJDudTk4rxowJWvk49Zq5iTrZD788dZb7ePdDCjM",
  "key4": "67T7bgGwoJrqfGDsW869Tucjw358MZ759wF7ShZzJiWNJF4C4rdNYsU9RcZ51XVY72ktZhiyNEAaYXdCkBNRiGWM",
  "key5": "4FfaM36FnccW4sD4zYAveTGxoKUgGnhV5hXhSxPNBsddEfNMmHxMDWcR1JsGbCebYLsSceQsp7n65NQimSba6RBX",
  "key6": "2WmS6U8H5ekfZjCz2BR8pG9eQceo71KcywD7hNfJDZmzEajpBtchJbSBh7tosfm8WKYsfsQYxuccPwU63CNnJpUZ",
  "key7": "3tPfXLx53S2CuWswKY7fwuZ22yNuciitmAjRGanEo6T6iKcYFyLekPDWub8JsnvZ38XQ44sVd6Xppv3xkukUbZLx",
  "key8": "318Ru7dVmkHmr72cTwvyVhkZmyRx8XTfJ7oHcKAzXoz1ozFtdeGHmKapDPSGU71XVXuqkCqid9YtepyXWYVRoQag",
  "key9": "2dLAVn4stMVeTGWKwjch8hEsVWJ1PBHa4YzWjn3rgYtPEtPaRwRGoT9MQZMnHXLXT82Q24KANydFTJhbK9kFepem",
  "key10": "3vWFuHJGvw2yqH8kyvvkerYRDUkcDTKV9rBxUgJoxkSfNc6YVJcfkSXxwpQ1eEATjcPPwEuF4XqeNW1cy7hZaC5R",
  "key11": "5mPVZtxa5NFkE3wDx2gnZpijiqP8NnDPUdMciWkekstL8tDPfn4d4gw5NSC2mbTZDk6dEAsE99ruAff5LUob4NLT",
  "key12": "5LGgDHhd7QqbsnC9KbYB7m2VyqWrS8QuFQSCe4rs3LD2qap5so1PwVJ7gnz1GCwthdeMxj4ApB3GDYbUMsk8UGAc",
  "key13": "4QDNqg9BuEkbbs8c5u6BzoJEvWXpnsA7ptw5gcKSKmNtX5v8C7M8KRbdNwBNJaDFFwE8iEgt36sf9QdFAmu8wdDF",
  "key14": "5HcuPdEnfLyUtL1aFVJ747MDVQGM9XJ4Skvmcmbjj8tuSC7hwGT1pJ4nePb8Fmb9oaimQ9E5BqLQ8vEVLSLrrAQq",
  "key15": "3k5Uisp4gG3P1jE8KUuhFN9dJYiM5CW1hd1T6gCM1UWarh9M2aZytrmMhXXuJqNn78CRtLxc9BmxWcaXAToQToKo",
  "key16": "nksEJ2HCfH1FQxsEyHK1C46apQKN6KGtDzHDC9upwaUNn3QLbHu8GpfHXJFTPU2U7epnyowHKPAi4dw7Dwa7ojL",
  "key17": "5E5XusUSiungd2xfQQAsrM9kPQFCJWAadcXcXvQhM3EfH36ZPZSCHqH8smLgMFEKQqBw8mLQHyUE1dAnsUmJvs9h",
  "key18": "jeyZTgQNdFmAQXt7SueegszofvfUguRGusgRNGQjrX3WZpKxV6o5f4KjNMgfxEMB2GSkCjbJwoV3wJKgpLoTHBb",
  "key19": "5nLK9wZjoQktn5xPkv8ywMfNEtTSgtyLsUtXnBTSQCaVQPQ3Q3u5QbVi48hEqG58xMMyTzXh7jFvwVnSkF9ES7YH",
  "key20": "3MkA8mhq7JiKNj2mdqAJQF6hx5R5XTmPzyLEb14LWfR75dLRGcnWa5ByUZFcwSxZ65G8jot9ramPtsU8GXi34L6E",
  "key21": "33mqRYb8Y3WJqXRsePwtmSCsa99AH1BiuzbZ7MXUk5sdKn441ETZ2Fu48nmz3zUSwy8ofASqfH3x9Enp4eCq64VH",
  "key22": "2NSMkxPu6NsgYEziNjwpU85oRTQ3eXiB1AKTKzjSS1D8eLKGtHQVwMryHw69JrCxghFx3iysEHYgpvPYb83T5EEG",
  "key23": "52RNC4nx4vJV6kXePn4aV8gtaK47V22MVwUXFW3y1sjz9ufZZpzYaijH6V9pb6Svqyi5YkpjffKdRX7By3kMSmuo",
  "key24": "2egDULgSiKtk52iFozudSdeubyrZRCtdjoyfJwYDjeBnwNBT8LEu53QJuX8nK6wRB6z1DkmYmvZmSfcPv4KUwMTJ",
  "key25": "2yhodX2VCRPz5dmoHJNW9RsVtmgViqUWByDr8TmEz7jbhE9Y7U8H9NhV6TK7GySrakddHvG1xDGXKEdBR1YAbTkp",
  "key26": "31YRMEKE5nsrYX8oW5ANnDbcQhdS3F5YjZNzeJa3s5Hoi8URNKNgrPx7MQ2LY7hcqrvNtSftmN62V7wXANydQXuw",
  "key27": "26MBjJ9RvGp7GsPRDLjJcdyAn12W2QJNkejVGBhLWdAYQ7JpNrSmcfaiawrvzxSqdvD7Cv8L48ktmHErgroraF7b",
  "key28": "MCxWfajntUwyBr6fxsHMXETdn96G1LgS3ckXQ1f8X38enXhsKjhEYoetQVdFd5HR3dxt6RPZ4Rv9rwedjYcdPvo",
  "key29": "5btL1vskQNqhfX4VvHwASpXi7fkiz3HaCu3K8yDwLvoTBBkijvgCwz2D68CY3ae73AoEGkHtjPHDH47kzgiiYfx1",
  "key30": "27Umeb5qZ9HkhHT72xNPgyBk72QQj1W8aucThMXL95aQ13yqy6dswgyorspNWnkex1LX2h8WTdUkpWNmUDnMbX2D",
  "key31": "xR5DwqV9j6ReRu3FSb4X7GcXMA1j58mp2BjwbEjseGnKerCLeqbz9oP3HbxBhAP7BZASLDXzdpBWbQCRpCE8erN",
  "key32": "W1UDpBdw8nAtKQrZWEsijGb7he7Tu3pZibo78quWSrwNCpanQBDDnEGb2kS9R3RCkWtTX9U5UJYACRr9vMfByb2",
  "key33": "4H6fNA6SamQ7k4FAbX6ByPNEKjykAhTiCApRSpKJx4XTeRG3grUcSNgqR8kMsLeSNdDjXx2Wz4dcY62fhZT6aawM",
  "key34": "2NQpHG4gpP8wf1gF3Q4wri6cUdexSLzUbGuLLkZzycsGV6468zsDrivAApdXY7KQvFAzdP3LPqPUkBV1uy4SpCdR",
  "key35": "5LwVikm31zKCzJLZo2QKYZuqnJCfZZLD3ArPKhFaVw9E42UAuzRFPsQLpKPE7pyK7Xz6RSwRdiLu8ahgKQFHzERu",
  "key36": "3PAuHN2t5GjWVjR9zCFYPpk6bN7Xbmgst1Lmmm37XQiCKftZVZ8S2gksRhckhYsrwjYz242Zewz4URXr3XmuUjWW",
  "key37": "24Bz7J5oYhSvCNkHMSXMggcwE8gom2krfTwSL4jX4ay4gWQCXDypn9yzaJCXPaEHGiebGu1PoumgYZjVwnK3z6Wr"
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
