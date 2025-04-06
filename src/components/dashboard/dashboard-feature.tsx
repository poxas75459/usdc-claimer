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
    "5LDwoaUsNx1QBuzbYhQyeAUs8wfcjwWvjXJWSFkAQQSHMVBSn4DqxmuCoQHsj1pFJiBfmac6pYXyYt77x9tRinxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C8Kz9NRsa6YbHWKMTf4ru23k7WB9BTdGc6uieYgXwAbcqt4jBnXBAhuvu4FLvAnnazAEXFTtFqkiFyRtQPpQfbM",
  "key1": "xXkTEqXTeSCMu9UEz4PL17Xwhmes8FpkwjmXt2uzSzkQq65vcz4AnNRC8mDH8FnzNCXtXU5NPbP43rnBZP3HAiE",
  "key2": "4Cq3nqC3sjEQhH2sZTfrVU8HQPdnnDc3QNr1UrfwqStXUkx6LzjAwJk7n4goPdQUbcA29RgLxZ5SEYtDTY4ZqRKP",
  "key3": "658kzbegQRxapijNioraUnzafdnYvSMDCvECg4mDPWEUqiwMCtELo1jvW688MgCVWb4jSd87Ly6wtTiHguqVxgjk",
  "key4": "4jc9doDvQPsrdUU7xqesQBkhRppgf21FgrTg8gcfeEzJ96Fjkt2U1Ppq4q8x8xfkN8fSeBmGG5PD312Cs4inhNeM",
  "key5": "5q1n8rCZLqvNREnoH86tsMi1Z8ZjuqSDEDRJ4UZf2HVUA8RZdhMEBVw9Ui6A4BQHtC67i4VRfPihHSAgADxpKRKs",
  "key6": "BFxbs9ZHZWnFeioiYPyDm1sxdYXeYWNoyMKJmtm7Reno4R1rCsCbdS6XcdtLCYQQuSSp1bZSCa84njo2331kjvx",
  "key7": "2FBwQpkpegpfersWhTFpmRqsYbH5jKiojvGHohkZefg8AUmPqq71bXYhRNH9KEUTN1X1os4uNmuEz6Jgs7XYkREf",
  "key8": "2sBx3PUAUUjDBza6DwXoiYUVYo2Qz1AYbvqL7Yxi42ZpwXrRgZTNJvdVb4R7vvyKiKJUA75mbr8ZKWSkzQ8L1n8F",
  "key9": "4fiY82QfCxEawyGr1APcJzDw94Jeaw7xki4pUXPheNNMtrmfposF7zQGNWbY3M8f7iKWpqgBb7zvXvodDWHfGift",
  "key10": "3X5Qwkr7obhe5brzkkqgD4w472x7CWPzwm7rifBKhrMqDXQvo4dSatqA2NEiZBPAVhknNXtGwdM2JT1xAiHGEtnj",
  "key11": "61UeqMV2jg3bbxw4qPRz9uEj566UhR697z8w8Er6zy6fqeV5YtEubRuPL72EepDna6SP61jEvHM1B1KPhKt21n3K",
  "key12": "2Uxhm2FT1p59ZkxyTbVE3JDWgimsqzQ5DYYpAuCnkXMJKNt4vmu9e2gy56sbMzZjZetx85VVoZ4sMj3ybC2XTJBR",
  "key13": "KEfobfG54NXhRUr6Ub463Dfw4u4yBD95fikDYAXTMDnowKeMZox2cd8Sf2ZkjSZBV1jaHkfWM3xFPMBEQ4b1Piq",
  "key14": "22GQ6gNk4PLqhG4X7eNYD2VXA7c42s6F5b7tXkmAneuapMVxc4jynHYxjqsAXR65DwnRtTrLo4KpVYw1Gr8i1m8E",
  "key15": "2W6GubakykMXWtSrYQyPMFHgdjTgp5JJ39QHxXNLNu7gSCVM6EuN4q9KH6pva3MpgYfp7kMWXsvwfXsru5Cdjonn",
  "key16": "CYFaKjRgfRRN2CBLga1oGH3rbm4kSr1Wp4qFHjxS3Qvqv44HjF2cSVE5fbRYPw2b1hVfd2TVc2c9wvgTo6xy1A3",
  "key17": "4RWHyynF3ubLvfoh8qF53NmYwMyvFP63mCifFHCzNqu2K29SpktUG7j37CDZv3WjVGsviYcEYeax6SfvVkpggzVA",
  "key18": "2yse2STQEDnXRnwzAnHZH8NkVfMnZfzrnuNn4k2WUea8iBvr5XidwnRMBpzWyA1fdnqjoCiw3AKypRGPfx6K4Ery",
  "key19": "5FTYfdGZmUTPWrS2HBm3XvuHsG8ofKtL44qgh9gAXD6tjghsHW7BWdRu4cMpgfP8RDvDEzX7dmjKqcckqLu9y8TS",
  "key20": "fCi8XTBnnH7SaihePdTcg2LwozpTaDVdTe4A137Rf8UfVgi6AptB6f92iKqK8qs2quKuqh7vbuQF48xkX9eyM6U",
  "key21": "32sLjZ27oGwXkRzyAuDey6dnfTHvzULwbEwn5WQVqeHTieWmNYiM86ddZgjGTKTdDcoBRwxKtsHYG1qmqeSWbfxh",
  "key22": "4Kb76yGzL4CLL78MAmiFD7e2uUNrvWLBSz2AgoeLYMZBaSD1ywWkCQSj11Hs6Y7D41YrUxVTD3pikDDpDV8YjSZz",
  "key23": "3wLcSRuFBf7cnUiRi4NXHS9t2Ko47VYftTGC8VGWCQq12JPnvUWSDryxNzA6KRdCE6xmrh4dQ55XK4KyjyeXBVdx",
  "key24": "4o5dQRxbLwhoe44daxU1Xzc2Z4utKhXwXGYwLykfTEdE9JrYT1DbfCWYyfsNBUt5HGNKHtacWZxftQFM13exTRbQ",
  "key25": "2xcKqAX7TqrP8QqaXUrJ9tYTG14wrt98KoDPM3Uu4a5oZ3h22hAF23HG8WWYjg72QkzrYjLHPQn8rnhEwfFeKZrD",
  "key26": "5VxgCGrEPZ3m3QfVorzc6hrwPSm9Z55HaM7mZjPafDfmkqYr3fkBHb4aveAeqkXHBQf4ZatdXyfteKJAP8BwfD8k",
  "key27": "5zZvyqrn1Zgm8firvKA33kHgFp91MefHGBCTxojhAPb8npt6pQ97tLQgJB7tifeXAMv7cz6fAFYikJM4HkjVgMxu",
  "key28": "Do2sRnt37uDRzADVsi1Fvcfkn4PLbYNmZzrrdh84KouioUK51D5S8UNhPSgMUYj93eJYfDEDBXSYSpB6Huf7QUj",
  "key29": "ii3GRghtWtXGSyGk1f6oF2sWLKVUsSJjpfDHZjrLKn96c6zd5cwU2ECoG37i1prigXn6gHAYgPxNdpadtt1sECn",
  "key30": "3EZ9DpxarsqSz36M7wvwYNcxT9HcEZdBxjzMjCvqEHZcA57pnJpfT66mYY2doQo3wd7T59LwQeQ8pKTBPTMHJ5BT",
  "key31": "2P62h9HtQo6X3UpqkeNixQhcbvj9RhUW2JEB8q9vyJGx6KAkg9efC33PzjFFzR1KUBjmMYn4m3qz4X8GYpjbtSEN"
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
