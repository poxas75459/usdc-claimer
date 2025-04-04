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
    "4wp4axW7AwfZ9aMbkQQvhh8YZU4oAGbv5e2H6MqicjWLeADyXiMUFVGhAWLMzufbN1ybGWuyaosffXbZeNeqzJkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57gFL4ebWy3JsbmxZBz8jt6HC1EMJKLVEe1vrNmb9pDfH92tSZ2zgJwN7kQMhz9crgkEAfwjEBtMZw6iqV4BymiG",
  "key1": "5nSBPBEWpahtDHVCMrKwnsSPcnAZEd1j1NWHMa6Rx4vdE7odYr5pooHnxmQxwidG4JW2KX8m7hCTM91YFx9MbaMT",
  "key2": "4Ssrh7iwomTquCY5VDx8xtHB84dGjVoc2zGz7Qh7eSRtBTHgeArpxrH1ah9dCMkBp2zAspZVjGXBzyTFQYqynESG",
  "key3": "3oWNDMPo5LdvfqYau6mg9G41m1pi7vntfZSV6JHuDmmhL9T4DHcZkbeNJvwRF5628Dpmycc2CZ8wU3V1XFkgasZU",
  "key4": "4f1cxsSzWZAWg7TVhNcqu2jrA8jFzoezdhb8PfjBmk3t7h89jdxzbKW39GtX5S9udRhTBCF6GDdLwUk7cZL3QfrB",
  "key5": "5QFXmzDZmtZRwEL4NqewhLAfgSHcqeurTqZDCxmJMjaGDzZuifiV4CML7ERx45DSs824m28sccj4sgC2gWAnUnjK",
  "key6": "2io8n4KyTX4v5Kd3Cv8epWocWj8fRKxHamqVeMZrvmdkzVQRmrEjJey2ogyRuWkcjwiAbkxczFCdwqu9ZcB5Zmo9",
  "key7": "3potW8yQS1Q9BjELcU8TSz9P7TV3bckw6zd6K9eBR5mkAtJKiDzmVAtybmS6Rnh7sJ6Bst655NYrhv99yKdTW3mq",
  "key8": "3Y2pup1hU5gg1WxqKPmyCu7qBVX2gq9WjdQymvK4VUY7A3jhvCa1krYsWKoVFSdAx6SS3rvJzbxsM2e7Q31Af1yt",
  "key9": "2jrX9Vg9sEWb4RP9tW41XdiqkWb1ikaKUNM6VRX1uuNVKsmayZ6Qh8JhC2grdzUVEobX31k1aXumsLLjGqyruKeZ",
  "key10": "3ZSwp8bpJqkjrSWP3rH2RMHJdSS8ABuB3CvNErmnE6FuzJTwxfRmXfSRhtR9PUL3dqZuswgqjU78NQPtfD3nStG7",
  "key11": "V2tjR4Y67X2ZF5pzCtPrJLx8WA8Nvq4qA8brEiNZg1BMwxjAEy1NwgiNs3MrKuZkxS6FAGfEE1JxzVUTmwzyh7m",
  "key12": "4MQJs18VjWWL3zXVfEc9gpDusCxQQVpHVQLLA8cBW9pKDdwu4EQWpgBhjqqqj3roDU4D2t4EJErxuwHTUPEUFYAN",
  "key13": "5g1A4hHximMoTsgcoscdFxNbtCYJJqJqubbjhND8tkFnmxYRY3QRXZAoAqkpZJarRjfoKJHptaeH6AEtTNSjnBxi",
  "key14": "21dTVQCJtg6LdjfPu9qdS1HTayPp7ekqnJurJqUAHXzeYY5U51QSX5bwSadZYk2SMXFEo7NFh6W8DugBzb2ULGQo",
  "key15": "5qcvQ9njm6mEWwQ3gGov8zByN7PTwsnRMFmMXNtjR5sYsZ3cSzWCxnYfuaTfF6KBo8DFbLuAyfs3Pc48eppCUfh8",
  "key16": "255p92wiWqCCaMUmfCxi8EpMMn7fm4UhqBcXcC3MzdZp5TfHYK9JmH6eKnNWCrzJC1MNJR9S7igUcG16TNaKmmsr",
  "key17": "2yKoRY78BuXJmLMSc7Hbp45dXjwiEeuQX2X6fcHB86Eg6FxXprXMYRCRqxPEF4fxZykA1PCPF8Wcvb4ezrXVzE3c",
  "key18": "2Yf3wZhLBFkqsw9iifHsubjysbsVcma1i8HtK49T9krWWryA3PxAKJJRzGyGhDXagAruzTR2NDnXTgFe12sbnwjC",
  "key19": "3hivLZcgxjKru43s6MCzs7EmGiwpZKoiFGYwmwAg39jZaJPNqcphU4N34WhxcvMuMK68Q1WKobx6eTsH1hjM5wb5",
  "key20": "3GJymTU9ypk59s18JRuwX8zh2gGsUFa7R887P4rCAv6iT78juhrrsVHJ53JrQH3Ztd6WQiANQ5xgmYJXa2NgpP7k",
  "key21": "2Emwpv8GsYdFkkQ8AfH79wUcYJAmjiTv6AAkKq9XWEacPxHVdttyanzdRPHWYZ7jgpgcWFfiuWS9Hf5qChqsxEJT",
  "key22": "4rXMRjVRxji3TZ6SXvQqHZRe3eji3HnBHUnRJ9XaiH9bJSeuzkwxZxoUtTcRCmmU5AGzEV59Jsay2SXq1E74FTxr",
  "key23": "36A5rFdEBJaeJ5vWVEu4baDHy1uXE6jLWLojtoxtF3N942oim82cwzkQuNkiw5s9SgpzWxCKoWx23WgF5ZRpX4wk",
  "key24": "2PF9v2rLau1rVMWUzyF9DbDAbScwaLVSKtW4Ny6f4oazjjL9R965c623AJpi8xDscGZ1ZXTFXCAmepff7WbXATg4",
  "key25": "2w7bxtLoMCpSQXRCcVAeDPAWw3YHhYwJ79CETae9zwtNmiPWy3i23SdcShweZ9QW4WxVVNJwa1Ex2FSzG3wFQwny",
  "key26": "2V1H97APh8H7L8zMmtL7amvfEdt7Tu8uTYzNTse1U3juzRVQ41tg3xbrP2NyNCnwWcyXAFs4AQfxkbFQKMjD5jzw",
  "key27": "5Xm3u79JAS2GVW412YmDDhXaq9iiwUevGm7nnp74aXhJLo22KykHaSAxQs9Tvkm4jEsB9WAshH9XY3ztpjBVUHJQ",
  "key28": "4ktnH7uie5a6u2JX88Mm1vX7LqCNyh3tMPrJHeUDgDjAYuudgQTWpihYWxhguNQcmQPddoshgWx1ZbZiXcycjqUn",
  "key29": "45jyEtyidCcgPC1UPKT53AFEMKfGc4X12f3FHcrWAHzsLtugCudvmZp3MUSV9cBeqahqVQTUaCY2LbPP7swVAqgg",
  "key30": "5NB1jd2CPQega8Kf3zhRDRJPvAvYtVtGMGzd9K6RANYAYH3bxKx8CEoWL26TLUzu8qfqaBGwA39FNUdjxzACnmVr"
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
