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
    "51ekWVn2AdJ7M2Hsg54YmxEP5abz6Zbaud2KWzBud14xiDDq1xvzwdhsvr6H5Gmrcfv4yiDv3GaaB2GLqUbeGmEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "inDqrkE12kd8Vh8fvPXnb7kszYitQWdWoiZBPrhk3qK52Gqu5pSq5hk7TyEjYr24e3KVnTvaHERC1x2BZTsf7sD",
  "key1": "3oJT3gxHCbFK7h2Xauu3ySXFQTYFG2YVjSyfg8RXmAQCteBrwrpo7mztdBQPzgAcPQ46oVzWztRv8qvQ3yn5psqs",
  "key2": "3ty34b5dggvnL4kCEHVkAX3zYySUnSKoGFAkFwyTZRVv6cWT4XuxZUAfyZavSDp5dv9YpvYVLHp4HnJmU3EoFZP6",
  "key3": "JZNHDMMCBPCbbEWZbmYPevexe4cuoJJiEuFoEZAaqL3UdfgWCL8ZWNvCNewPD2WVPQSskQdiNHta62XYzZXo6HL",
  "key4": "3DC4yot9ScnZfwmbavgYC2VBbQ6cMDEdKwTQkNXi9PAaCJxCNc9pp5KYKGRQWyY7NvqVTEGyBEqbVPEQ1gijfXq",
  "key5": "2s1rHYYG2j9c7oiP5cF9TWXXZdTizZoSj4gjNDvZB1hhhGg1ZCYXmG9E7WLKj2uQ1Zsj3jdVrt7vShuyeMUJ4jzV",
  "key6": "24i6t3jxTjdu3c2hUhTAxoKin94NCCzgPLvgQnhD2knvcVdMGGvuNGdsopHo9jHUN5UKcgz4Nbie6HGwRtgsoDew",
  "key7": "62zU2Nzc78TSGLcdRUxoMBTTPqBsmYWjUpjKzuWdyQoeUuxeAD9uFZ6XudyKUR14zjV1wveupXCXz2qQwNuu9UcE",
  "key8": "33qY2a6EhsyH6Vj7JVWbJ3U7gCXrvLkoKCxyW2Pbr9Qq3h1hkBvNZ27cMM5sk5s7PWYvWKGTLciTvi3CvJ8qs8EF",
  "key9": "3zMQSYfDCUJLi9bxvFXuJAkPwRHqYsGEHEdrE9FtZ37CuozMdb1XCHtbgkPo1yzhw658x8KM4VT5mCoVp2kNnEG5",
  "key10": "m4A7KzyHamZrKfck477YkEyhZGYbCFaSzZkGWLwq4doVfPXaJik1As8EnZsmqtKad9SvsxftCJJkFQPsA8avhkv",
  "key11": "2MCDy4uvxogQ5Snz4CkvcYCuKcEsUWfEwVVeyiMLnkcmEdiCoWUpgbDyaxALQrdhYiKFNTRmRnAf6juiDttKewtQ",
  "key12": "47q5KBSgdLJSzJFMwx8WhDd5vEFHEgJAZTGjTi4tbkQX3Su49c3UwRFSrxE7k7eAKjVc6rw38YSHQtdFqb74pypT",
  "key13": "2YSnDqqsXTS1G1RcrkxXtfBLdiUq282DqXPwLqEbVoa1mkJCjkceeSyQXdkwBPJfyXmaVdwVGVR5e1MSh5X6Mtuo",
  "key14": "2bwU2yWmLQ3rKHvEyHCVzwXVoaymAdqoLRmJv9Mf8meUJX28HFiMT5yx7UPKYFBjAobdjzt3fGXFV5mUxLpTtvNz",
  "key15": "3kJtS2779kWhcLtj5TN1CBT6FiPAJGfpNgkBySgAjRnCXYvk5gFa8627xfDtLvHVUt5PCh3sVrmrzc7yW9LDPaZ8",
  "key16": "5Yn7yC4FdVxaowi3et9B2Xj5MY2nFYjRnKxNAGtfL1Upd7dDGPy7ArYD5sxUKDcX1GjFNKvNURv4uRZfrZyAWPQH",
  "key17": "2EAUoTi93GnYXywS9dQcdUp6YwNwec49gEMZwhp2TPtGvVFDJx2iEXNqkoLwDpq9rfKzHsr76DvoGjMyCMob24Xh",
  "key18": "2aVTq6vLAmAdfZ18RoYRERwbUmEHU3mCYQ8dNPvJoh6DoeDdZqWhiRdDMkNTEgMmVV1AEbepJqoUtzTtsFk4T8K8",
  "key19": "4QGiT4H3ndLtPHiv7Cw3L9MszXmonKUQm2tSKGffMsW8q2xGV4GpY9d1HExZbnYou669axCTfjgmzmZE1A9YFC97",
  "key20": "2ShkRfKTf53ENZR9uvoqAQweCy5wGZ3qPD37zmPiX9gnUZNtPVXQ5aqnqPrNcbJkrcb1VEUWQ1QpMnB6vTqFUi8d",
  "key21": "2qAxqb7FKJpgUn2sgThVhArbdNKgGNJvskFiWSEcHunzKnsS3dtDMWid3MVEatG4iPhYqKw3ZARsxKPDNJCEihBy",
  "key22": "5PdT3uEfev8S1oGqQgAiwbdt1V86fAGej2JGMpUtV51Z4iWP1BY7dPR9CnRVuS9VykJ3M2F1N3gEbgP6rugfRGqv",
  "key23": "4fHyi2poryrW39gGKRUKCE7gWmyA9WhAdrHN9v8cGZP95nuHbh5kxp9ukRQHHGVFidpJ6JGh9fEaXJF1b5De7bFQ",
  "key24": "3sxTPF1RNBUX6c9ucHVe7yACrRm8YDUedcwP1tn9T1M7ejz4WUMDHZKCHF67NnBqKRzQiuZ9rMpxtQbUvYtN8Hgh",
  "key25": "3RTXMAmMwGe8E7YybWky7ZUvmuu6MjQZ5NUvnMMTPq3k22YycKAML9ejzf2n88zvpaacc74h7AhM8239PdBWqmTw",
  "key26": "3tryfXQLcbWRj6VBrDZEjDYJe6nsG4Mp7CjHr49snauBcAsExYaiqQAN11m11yfTycpyu91Pfz6B9UDzeNeZ9mi8",
  "key27": "2dFjq9zJwf9ao9DmP6mGenSVXhDeSBm3ZYt4u5VE1V4eZLTUmoNHfzSSj732WMpKTgv4KfrvJKEZwdAcuEN3aSkk",
  "key28": "2xhKBqruzLH9r6xCBLRkdhzmbvDJtQ3ta3e666tdLDMfSQJeFbsTmU9KwEP9q8WQpSvwRLVnJeZdeBjYvXrQ7W8n",
  "key29": "4T7G7yM53mXNzwNDdDyWc7KMTH2V7qAzKjNXaKzQ57S48YtfuK5H1foanH44CMD6DiH6bdeURTacFP1KMB6uVR88",
  "key30": "3vERQRSdhHHN9cZaHh7ujYwEw2Q3U7J6WVm9NSKL8BwrqYzr7c1hfRsGkjLNrHnFePxpeoF3Y5DfAzmSJY1PsJu1",
  "key31": "2maTcgpXAdpR2tFejjZ4AnwQkeB2pS6Yi5ycFkzdMHYMC4RSmqWgx93Hy3eXPcWUCQ6SHnEto3TT6tdtSDZH9zUm",
  "key32": "5LdtB9dvaXovwkFxNd9wTkUXA8jL3rz6ySJuJSuvk5R1zaQrqw6CwaduiDX5jGu7Lx6WHqS2uyTcR72EucSx3bX9",
  "key33": "aHWEMmgmrLUsevFxiPKFBkQZQtDkDCe4Dj2je8ijPzZP1qWrh8mayqpCSUy7MuLJyDfj79st815e8uxgTkCviMa"
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
