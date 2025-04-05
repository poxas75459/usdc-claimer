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
    "4ZN2UrEb452YyU6x6SsKY17BNWVQL3PBf7YpmAh7d1hRXi33Umt1D6EZr7TbCy6CY8eno9NsX4ySDx6fqzR7XN7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JXJZP48ZDRxSbYpMYD7Ku9jBKLnmqHFRV4on6dYPj4W5yqK5k8ZC3noPRe6ZB84LQk5aMwU42wkUhwUgDDnbT2u",
  "key1": "3wRC1Jcq3JhHvZMYo6wz9fjHvoV8mcuD1ZKg6JGAuTvwWRFLCukKiBTiGYaF62vZ9yG3n6Mvv21Srb1b2sb85dgL",
  "key2": "5CDbvtzKJR5w7mTXkXiquZTYKkoAzycxpebovqqf2H9wq2Jdk4YX6jy64ZyRLDZTeXJzDgT6ju1CNwKZFTPVohx3",
  "key3": "51GYYvYhFKfgohEoNnm9ofR3dYBzK58sqMdMjSPoVPjHTR3CJwhWkuAy8ABSzUzVFWb6bwT22ySffmqxrLrwsq83",
  "key4": "2NV2sLQF3K4EGjGSuSnyNqy34j8JaYLBsTs8oqi7rzFY16UbycRc54FLhHTfms8YsoYFQpuphuboxn7LEwS5JtjJ",
  "key5": "4qpm7jnQo5ZybFsw2fZpcqtrYymuvME2EcoKjZBdNrtgxnBTJddeEMaYXw78EFvPJfTAR63JjZuCkywvGcSWXYGU",
  "key6": "Hz6rYQPz63zQzyzYZTAwNNMC4SFLhDDBFmUN7dZVFyYpofmy1j6aNnjRKxuGT3Q3ii5YexkjBBpn6rQ4PqVuWBz",
  "key7": "2eXFQNqbvBm4ebbEGwXBXsQUYjWv26mtVwQrvhDZSufTgUYUGkS4MTxTZMMMsXuMNrMCD3FQRsZ6k8epnTGT2n3t",
  "key8": "2KiFLQW59RFq5HzGUvkXAe1RUEeCfodrntaCbNoQGSV3AwM8EMecN3gDmFCLZwRtJ2NadaLuzZ5FyAB3CuRo7aSF",
  "key9": "29CqEuZvLgmwZhqCdc2JNg7P6PYx4rCRsiuuZV1Y8jefTBkz5Y7boswjzJgAcZRpyth8i6cexoJkPqAYKHbW7ViF",
  "key10": "2EBXxAu1WnUbfhqLg2XDa24YV5fCT1KwCLWAZve1GZczSDdQ4bGsTps6rgYsuPK3h4upqrSzv9ykdLJmKramj4Ar",
  "key11": "41Ra3fKEFvEVtHRhbJzioZMhEVR38beURP49LXfURiNmteJp8ynG6msBGzgAKh7K9U8TmMgyMrtt6YHv7y9UmSk",
  "key12": "4hjkubMdptcik4vErxK6Tg6bp5dMmeHnu9AZzJsFmqS2pGmwfr2nzWJ9HFfVmo1RA3YmHqEbfWjLi4aTqSLE7Urc",
  "key13": "67aB1d1nGWZu4fbWxr6JLyq6RMKU7Fywgri23jP2eW35pei9wgjdVP2jSkxdHzvrjJ3ekTvQFB14RvqXxi46G32V",
  "key14": "2dTTQWNQ3uwWNd5by8cvnkjLwNibLPd7dYYo9SPNcj6FPu6qTeay3pXUhvE2wnbsbwzu5gFkhdMHdZ4CdSFNU4JY",
  "key15": "3hwntfXRUY2pXN9sg5v2vPBDKmsSbpPScPiuhG6Ly5kpPDfh91KL9Jt1BDNr4BC735jJs1SKbkuasaVQ1C64w2hE",
  "key16": "2FPyKCe5jQuRK6uedRvvxWPR5p15dWa4RrqTo9XmZz2QpGDqA47PzVmz8fPhY8KZDHg3bPqvWRKsjgUDaxwndsHe",
  "key17": "d5s3ZtD4dr6tWNhJJfB8aPPchVskLPsXXee852FNwLDoq2wwhjPAAQRk9EMi6SM6cZRjnTVaqEYMLiu4mVoUXXs",
  "key18": "3PjriWQs3DKbH6swuesJ4sb4EnpAhtz3cXNpRDx2gpiCPJYKYY7V7odNkjHBGjN8erCYUfdQVF5YAMTTb11RBJdr",
  "key19": "3H7ExvHgSvEm1xUAPBqTihgLhTKT7irsozb2qNYqCAiwkqJFLi2Vtd1beQLUvPAmwnrFr7JwHPFG4W7H3oMtix3j",
  "key20": "mkRoHKv4p2HeFhTGoX4JYrGArws6vEN5VC9MV3UFomeynPYJMWXxmA4gY12FeUeBeYKsaiNzMnK1QcRsfL5jh3v",
  "key21": "5igF4dS92rgnM2sRDZLk5NoEvaWptmdsejePEdxiobQeLNNF4ZL7S5fnQG1ujPp4HyJcnaV6uFKXxJ5MKPyy33Lk",
  "key22": "4RWb5NMuZJoyuKs4mrC8njU4FDVkqBZfqpQvyHTwHBcMjunC3XqreAmTmQSk9sSoiekENMFsdSeR3Kb2tig877ZE",
  "key23": "yn4QZwsHvnYEhU3xm5nRCT9CUhvp2boXSEUxcTyL7VEEEXr92feULfhqzkBUK5y5DV4oo6WD5idsHn2yenzrTEN",
  "key24": "3XtvYeGQjzFg5QfCxtCUqgsXZxhZrhDCpKSUN3w8n3yBVTQpVXKBoqeBHSRMjF3aPujXHojQo1u6DmsJh2bkeHBF",
  "key25": "3L6GGSw98UpprpgufCkmdu64yQfdn3noivenVSCsC9k7uocrbqZP699tCiJ2HxuTzAnL6QEA5d96hmDCh8EG7eHN",
  "key26": "3rwBaShFkW5HDz3LcXkBBwpLqafcQWYXCoFkWJdVLmZ3asBRwBLDKRNQsrW3xYqDkS4vv1Ke78UqexnC2k7JSwxB",
  "key27": "4FgwuSWXk5KXhJ4YZdVwBEPADkKKN2xaEKfYXJ6EAGwtHFRdHQ9gnbo3TPvTo2m2jMfvyx5DgYxFbfiF4sadfDoC",
  "key28": "4QRkDRvS6ERCsogNtjK51N3FjdArTwcBxCfepreVCbqoDEMCQcEuvfMFLrza9hHmbM76cUgDqEdeAUHqjmbmZVyd",
  "key29": "3BpzJXtQL9UaoPFah8thKeiQ8ehbvcHXvgd47iony5Dff2zxkeYQ9LfvMayuBTnGaTNYUvWYmqk2oC8FACwQfedF",
  "key30": "4vE5TzKWsoqGNnJUbZTqmcjwPZTqZZxHFDp3GfR2ZU6f4j4Lg34JKQE6KFG5AMwdjWVARc2ewywqnfeV3pTFBdxB",
  "key31": "3SuoPcUkGpcUdDruMEA7gD1k3t7RDEct1MjKmFfe6idnJB1FXa2P54zbqSesJSJT1DZVPJeqt7f21ne86mocjn8Z",
  "key32": "aPmeRctcha1f5pZPMkxF6HbjpcixopPBGDd7ZwGjKBWBR48U6znX7iMFetXi9qkSGVD6uR3Daqfv4fMQnK6Zcjb",
  "key33": "46xHYcNM9MNxNXC7F7AhEz3jPneEyMrkmQS8y3vcPUFWuuGbQnFhzjYd61MQdNzZNdjBkxc4NKimnGSEUCLf8mCZ",
  "key34": "7zp5fmrESkYTmM7eHVfVscvQGLmmdDaP948qTVdNMdK1jbxtatmNM8RGLHGD3vZpKcnuCLRE42AiQcXL9hQm9sx"
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
