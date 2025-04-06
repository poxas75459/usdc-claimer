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
    "4FrCoxRLKhCs6TrVzWdgneZE6hzSHqi2NkHdLWajgFkxpWqTfzf83sbp3voVw47hRayz3aYehdPz51JL9f6sK1Zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVyR7jVrV2HVZdbGZYvHFYpZigerM4ykgJPRvijtRSwLgwPYKGYsnC1XKRSGmZneiys2628zZaX9Gbo71xQ75BN",
  "key1": "62s3McsJayxGr32WHydhM3eNxQch32N1A34Vqo2xjdp4sGu2LgRKzHMP9pP9FSisPg76kPxSHmCGZDZv65yUJygq",
  "key2": "4AGyBUCMSQFWtyc2JWtYHjMBpfRpixkzxRWwgUkgJMrEYFXtbVGaz2i9h5jzETpqA5yJYjZw1dCDpaRMb9jn3kpK",
  "key3": "4Yhmmq1sTiGbWdt2hXdfotQ9tW5GZrgacPUP1bbpVKpwvQsAT7recSf6Hwx1uBwxRm1WeWvN1zPT3UzGjpE4hjXu",
  "key4": "2ssNUE2a7btSUKU1YJwMUWR5ifa5TuvkQudtacoDV56esrqhaCFk8ochd6Ln8bJBqAQBUziNB7rW5ejtpsYyMeUp",
  "key5": "5ZCWdFHt74hyJ6hjLyvgvjbgvhrUsS2mPWvGvkVMSfFK56pApBz8xJw9qJBNtcofoEZPhVefvAxFaeRC8dgbqr8n",
  "key6": "3VqvezbVgZCFH2Y73VXW462tboJgGxLmU6JPodMK5euDN5xw9pcvaYJFfFXeeTtptd5ZHDasuyUzSZAYhk3waJJ6",
  "key7": "sQJ21xnGjdrtrHNLSS3xeGUPkBCUv5cqgdQaJQebb27V8XCrS6UshUvMTzsVzDQ5cpN6iogzUiTubhaVch1WDme",
  "key8": "5CZ5fF3qNrjneXy2wZerSMWzBfeCBLZXVRQhjaV9n7id86JDcpURfd4S8XrBsyQ5LzjxXer1uc8GEPRkjUbkY1Wj",
  "key9": "32kffeW2FFdcwp7Y1TML43zgTWTT4P89Su9uGHXRdjy1XzfvD73mqhtKTY4hWNzwSSLX8HEREEJtAgJdrxH7fot1",
  "key10": "5r5opggGQ4frfF3f7XzdbN5GxaQuB4fk4zk5KJZmFasLsMCwyJywi46itG1GQcq17RquE67o2nrpjhPaL75b6rSZ",
  "key11": "5bisjV1vFfcPGa4qoSpF9Djq7nFVdrnFtaYZFUmmxWQ1hYTm5hEPAag3Hb56H9BL9wjXvBjrdufkFujkecTnzgbd",
  "key12": "2o9Hs9oLBc1HPM7CsJ9vLjKB7UY9Rq2NJjAjFHqgFSGs63s4BUym6mHi9awUa5Hzn8h1kwAFmL21xwzesUXQRey4",
  "key13": "4newpkNcgx1MySMc8G9EmpVsMHSPB73pPyxD9pifMXhRM9RRqqsLFtqHx7mPQxbuCb3m1wxntFBL4cfH3EGwLTY9",
  "key14": "3ruENS6bf6CoL7GN9aRGjQ2xyii19u6APv6B5EZGuhWg3oG7LwrjgaGsKLqU31EdVzSYut3dKiaCH5RQRLwYiX9W",
  "key15": "5JExUFHqNfs3kTydahNa76Zzga8Z5yMQJpX86ZxQfNzTTeosKTdfkuiwUw6cDu7TXGrZagZofUBkAnfkqaV4i2ZC",
  "key16": "4nhaYPAx43dS1KxPkjXBgEsZB7cnfVXFZmNFgyYmN6Xudqk2mxJQGxAypFhi9k1N8sS4csYPZjDvbfh8szh6DJ8w",
  "key17": "73wJKUVG6g9fnqkNwdr3yTdkp1jt1HSmNxWLPpWhpkNXxBZeDKXTso4QPN8NuwWTcDJcqMUWe6AKtU2sTb26ten",
  "key18": "5Cpx8uJLuQoXbpeouo97D9vn8XWLvL65Exs2zBTY7AzTgReeUNRokZ9HFPGroeWi86w1KZoKavmSw9dPrZnANTYH",
  "key19": "62T5AcRsPbUcer9xTxihQujhwscUv1PFQQeG7Pbmx6yAmMfiKSjiLqXyTXv7hiNz2xEiDJ2ZYPAS7tSDNhoarzZ3",
  "key20": "t8LbqbXNcFk48R6jodCT9k1befMiyxWgSNEvWtUqaYEUQjaaeiwnymQRfpDp4kpkxUwrgQ6Xqegqm7jzRz7caNy",
  "key21": "2TjWdhUupzs2EDiQGTn5EbmaKaugSu4FmxgDRsYPAcMAhDc9Xj7D8Gy7dVXhGJb6CXWH6MBTznwFFTTidAyswVSE",
  "key22": "3qFvoSN2ZD34dE3muPFfYSWSNqUPh4kTWX4pqX6dVWJDDCsQNsCxrucxbDE5UFMzW7uFB3G187bzMoCFihUFrUaU",
  "key23": "4tA99jYoWXUKTa9vuWQD9vfCi7HCPVDYx3NH9BLDfs2vybnBbJEu8n95uyPUUj2uawHQtiY2M9QQNRjgg1w1ywkT",
  "key24": "3HFxCR7zAgJAVmbqvYP3Kbs28iEz96VgtbfQe7ZvgMVjQMZfZ7jSB3Ao85oo4RExyiepArT4U8fvVTgVLFDPe99s",
  "key25": "4ESsXAvZHJ9XgAVn1ZaUFKoDzZvnAxtjJ2aFFd6RNH3r7CFPZf4a8N467Q7gUHWk6kcu5bZBhgES8cnLbrRyP9PX",
  "key26": "5EfNngZaZrK9K5Q7DrruS5apeKeiGtsmLpeRqdSnnKerXeAE26agRHiucNqxwi63GmKtmbstUwM9X3c4uK5XfSsW",
  "key27": "59us4k4yaiG3BbbKU34C1fcKqdFGfGBQ1Gah4n9FKWF5ao2fGQk2nmCXyhgQgYCWJDUeJ7rHeJraDaipzmL8Mfso",
  "key28": "53q1q2se65NXSA68us6AejXM5AP6rrT8rEYdSivSAt1VmZEQ5nf5vSsu5U4W1eGnngPou9UfAXRzcBFQe1HvjR49",
  "key29": "2vdDidMYhAEiZXBJL9jrgkeiy9zb9iGQxgALpEMeRehimRaGseNrwqmqKNy4r4eCe9fZqZh85HVwdYwxvNoG8z4R"
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
