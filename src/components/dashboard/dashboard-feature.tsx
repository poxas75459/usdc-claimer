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
    "4MprgFmdPQL1CchP19SMAJt2yhy7Bnk9mtHaXMCU7ZrqzEz1iMgkfe2f1EAZqZA9c4QodChxFw3DiGw2UJmNZbQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fiBFV4Y8xb2c1rPB8rnurqsfykDytp3YcMaddXAQcmJaKX8ajzt6GWAgGk4D1BqrZcZXubX3HdsV4b5d9aqswcR",
  "key1": "3NU1iQMggZhzG789o7BgCjg2gdHke1VJ6APVZRhsFzcSGuesZE7LZxUBza8JLW2GzaFhcveTTZVhEpWETgZYDPbh",
  "key2": "2QpUUZeXrA777KN3DwZP4LsQdGXBWV6KRaZ5kjeQ8KUMDJfaHqbn58SrwudsnGdim6tybHAvpUrNY6xNdy2P1F11",
  "key3": "7bNM6bpM2WuKjX8UMsS63r6PoLwJdab5nvcHuZkdKJ7st5adt3hgrQNDB1xu5RXr35N7pJspw4L7bsX7rXW4HTJ",
  "key4": "3Do7zcuZAU33CauxPK9r6dGLJLuFgx7j76ZkX7UeqoCKYG2vzyeb6KUUfAYPoopJaHJPg31yTjJrkJXHLEukA6pj",
  "key5": "3K9P5PhJvcB5oKD9mtZUfMQCBQR6Z8RuQFddDuEr8EXY5NrsF8oh97MeaFK9UX26imyrFNH5opKNKgMhLSz1irym",
  "key6": "2DJqnBbWoc6nFbum395qLdkKiFbwUyGeqfK2TXWy3T7oitMvB7QNZmjSDwc5n11tSwtN71zDbjsUdiqLMEq7VMQQ",
  "key7": "5x4pZjiLkSDTqBm5YJvvQqhPseAHMqDzrcBqFcgRv7W3vWW28JpTgzX4o1fYNXgoowULAFnRKrSJtgsrFgRmjqab",
  "key8": "3gDj3ev5TnQzch3VwP1ppRMwsERgUttbiRB9CyRNzhjPFEqH357huj89XtkVDc51VFu6SSub6r9jeEMGaVeSq4AB",
  "key9": "8jtRxg6eLtnoxVWqAAYfvEbXcgTSNQDfNojKuExBxBS7XEJbKZ5LC4VJi3Jfk1VuBoJS7UrKLCWC9g9nYbi4UKT",
  "key10": "58iDpjEkPXdgMGoxun6wVnf1kSkqjhPcxTGU3wjvkeBg6A8xd3kn9gurqMnVgjxBTWPCFbuhCXLZhm8uUW6yN1PM",
  "key11": "3nYB6Fo8Exkitj1QULQdzom7s4oGYZpWeZUaF6Uuf6ovktxxLeuhnV1A1FGofnxM42Zthgkd84K5rEM2Csqb6QbF",
  "key12": "2xttEDuU8yRgMy8rXqsbDaM3irMWRdeVjEUkRZdGJtuKXgfLMaJncWe8v19pazZJ1vmRMDkWXSRSKjPRNRay6KW",
  "key13": "3GSm1LPB26oQVy4PLH1J2tJzpbXYUgPTZ7CAvwXubEBi7pYZFod6VUZk8etogCQtnE8D5MHwe6fRxnXp37bDFmoB",
  "key14": "2FPXqEnFddUfBGFkTTQZvCLxrDYFe6ci5dzQVcJ8ZSeJFwMDUUYyisYi4K9zrJFtUu7EzgdEd4R26A2cHJabv8Sy",
  "key15": "5WKEHzP6ta16sbbwdoDDk3ssBWJWN1g72CGtG9KexNfGaNs5xbfk3t12fCNqRtDMDuZW1WniJs6dqsaaVK2UkCcu",
  "key16": "5CSjWSGJZHtogLWJ8w1m3h4S7Mk2dGW1xyQpALrafnNTwHeXf9ixUB9CXhEkCVj9dKwPhpYP13avdchUBX2MN5mF",
  "key17": "2bQBE6DFTqT5tHeKYwKx6iYzKghN5JfAY7koVqidj9AgXKvi8KsxzuAjdsUdVwbfh4anort4MyqCpWJF69Zx5pYz",
  "key18": "5XRyGp3EPV5NXc7Zs8AJEHSrS3SKH3UwDSQjTRJWRcLoK1viqwzBkMrkBNRCtX2y7zLBN1iQgc2hz7E21mefwxP7",
  "key19": "4zrqq5YGgwdiMkNSxtSiJ95Ui3CViRzV6BxrH2NZaXnVEFehUvkhnuyp7k9bFZ1ZJmSGRaHWLCjPDiwWg9fcYtxe",
  "key20": "5Nh9PgaW11Q5LkMBAv9vQjgZeHDQPkgBEo4JsX5UARxfqFxyG5Z9ekQaQAtPzpvoEHVwrfgKJ24tteC8kqLVnvcE",
  "key21": "jvf98oXDTfeH82HuLL5HC6JAP9krfCSngNZvr4AW6Gyb74UsiDTnkzQvpZ5BCm5DDy1AFtvFyMe42Qjve8c48YX",
  "key22": "32rwXribYPhwp3RGXfBqzJ9d7cjqpCLaxCsqzR2TGwuuxgjXW6yWoY8nqaAgcJmQvW8tUDr1ZcmuDpphFzAyqhnQ",
  "key23": "4kf5Fys7HphhBvSs3bQafnK2BPDTFvvux1b4PQny1Kwip9Nvoj8a5zA4jrKLj8m4enqSky5L2eXD1SZArALAUZkJ",
  "key24": "pQZ3VYuh9jf4mrNhWUNYZ4Na2RSGArmSKhaj9crkBfkbUrFD8CK1rkrXXasPrKih477DLqmFdpHRuQVkvXSUvLp",
  "key25": "5byFLsQBftT5Qwypm7Qj4WwhSwnNps4ShyDm9bkAN4nJREWQKvWWiiDW1Dra2Q6anK2i48bRzJ4R9sbDGSbF5hRz",
  "key26": "4UUFUtCtqG19xhR2frgoum3p9xeiAHTG8Sc7Q8QPRUT4grzoNSnVbtnvRYnxt2BgNbQhTVFJh2y98PAj47grMgya",
  "key27": "22hKKXBEhgeGn5bqmvHXHxZh4ifk5UU1nckbuE5A4JxfWKiHwsmscNJmNJFuPMjDHsnNptnLHyFXZo1ChaUUemvD",
  "key28": "5bf4t4Z1WtgVydyDYQ9hV8VRjbRUPmxMbtcZ3qDzwoznUiLRXbhnuoyTCSB4TCDnB79CWe5U7a4kJBQ5G68nczNP",
  "key29": "3HMbA52MZqMDC2cmziqVq6ADFSLS315NWRmVAfQ4jZ7coDYF4HVKFkkR1cJSUbtn4JTRRW4TxT3gFyFkLT52sRCB",
  "key30": "31G6hkUg6omzamF7NZJaTe16SbLJvJiTR68fkVkYTowvtAPFYh6s7z3bFKg95dH7sBL17R3waQXz8HQ8o89NP8XC",
  "key31": "5gq1NJMMrjhNJcWNH9xNb4MoVZWYhJm3dnzdJh8ubfkonFLceGy5enth8g2oa4an5i8CkBGKc6XFM1Xkt2nSVTXt",
  "key32": "DDGi6wHLbYnjMXZzE1bTpvL5P4qJi3cTyKofpEiZq9ieQepZPX4DeGivE6mpvCGV9HMgphBJ1uwEP6N7D5nPxkX",
  "key33": "93JXzyWLCfNHAXN6mv1mE7tuRVmwQpHiBCNj898CeUcB1uWTD16Ayrgy5gvAgxyKhUctJ5anv7bgeWe4EEWoDua",
  "key34": "3tHzethqCZTZgjKdFxAnNyTxFRuASaAGzSCLmsZwLR9MjbKYW1TThTWVb1UuWjx5PD2rvcm7khRug9tEzrmxLf1v",
  "key35": "38AmT8s47cTQc1v1PWvaGSPqbu3FeTgUAebxDbBk2a5uCcu3jNzT1EGCugM6VjnfcUjJPUHfe2RE5imGi73pcNno",
  "key36": "3MSmcQfYg1LgJfQg8gJVEe6FZmWojWD8bEL9QAAxwhqiu6ANWhg2hpnyUg3kwDxiECoXCjDKZmqTAaWQmcwuyPhi"
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
