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
    "5NNx1Jr99rbxxzUnPokLU9NjXnzR1m4XeUtGkUeT1VmEVc97MsVWgZyrWSReuRewG3WGm4Q6Sgzg3Ru9Vt83ZVbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mzPguss9vbar5uuuFX14MAHAVvbf23C7CGo7F82jANNt9LPzjajeHx7HSyHsrrhYcXHVihxjsRkfP4AeQP24wQz",
  "key1": "26gEoW6FQZYAJrijsAUauoQZBHrBqDBUv4YHpC5B8UadS6HdQbrUKtHq7AgJ71U8tYPCBXocyVeuTaib7ETTdqbp",
  "key2": "56V4kLWW9DY79x5ujJXCysvtRVtMBJghq186zM177oBdPzK1CMvF9hWnhD2hDXCvCYosRkXQttaxnAzX5M7rTGie",
  "key3": "3FPnAthU9ZXDu4jeCjSZraYwWzDdD9TZ5tkkUB5LP3gCWMo5g9Y3Y4aDEois2Pjb4ZspXw8U2NJrRzTGs46uSWYs",
  "key4": "5BzbaPgfq8jtq1Brfdyr6h4u6FRiVCxuD7gj7RnQWxsPPEK2t2bY5WKdKxYfASe858yKGqcwjAGqRDoj3AtdfCKi",
  "key5": "3xr1uB3yR5hma1BCwYP8fA4T6qRx6sgMNmrBm4Nnxd9Zkhc5zXrvz4ZNb5LHqESdujWEWACiHE1vPxLJsNKfWfDL",
  "key6": "5X3JkdWv1d9ZTSnTKFs2sJDEyE2XFgtDNZwhnzdK8uwiLoVgCwXoZucnicZxB9DPEmiPMFU3GxuyRSJvXkqbUs2u",
  "key7": "uN4U5NfZB4DWHQe7We8cXvNhdWCWUcCrUYZP4fiWTMLseYPZpoGRjRz9pNtzPZvczYVUE1Lcgxj1K99FPYA5JN1",
  "key8": "Rukh5U9PwXfTrEmoT4M6Fo7Qz27JYpNnnHm9TELJKzcTSX1jSZUPNh5AuSqSz4Bs9e7eW3iSP5x5GrHBQvQbscu",
  "key9": "3yVQAee73sTPGhcjWmRYTA84Cc9UqPHN6iuhhhb2Hm3KmBuvDrHQyu3KgwSwsGUTHMQwnaRBoQURJfMYg1ypK8Cw",
  "key10": "3cvxsLELCCf1z5EcMtzLjDETtzMF24oJCPMaPLWf8nHmAHtVns9UDM4xDVbkfz7mepN4kVnsXwiVtAPzNpiu9Ba1",
  "key11": "4VKzWCSW7j6phjCgBfPd45tu1sAeJ66332EMk5UxAWkztPQc8R9kJZhiv4z4DndjoEbNYDwpbC9iQ73Scu2unq9P",
  "key12": "qZnYYTY8CuZaFQ4MX6tNVRYPXKgKhqGvi9uEz6BUcGZ11oFn1pJH462MYW44zvsYtNUMWJhCkn3xNPS2vCFuF6q",
  "key13": "4TzDsvA5i2Z26tM3Epv91JyfBecbeqifzk5fzoj3ahUyDHqsxbLUkYfg8zJ2x59KGVB9WsQXzjYG7FA6demNWpg3",
  "key14": "5eZxSTsrzQfitkFK8AxHHYB9zUBjTKBYLuzibbBCk39jRdrVtoLFgTLgpk1dAHf51a8KGhUzsV9g7e2PfQM6L6WB",
  "key15": "32Hv6bp5G1mxdNtxYMbqJ3ZJSc2fB5k59QQxDGESRY5JmdC937Ljg7rrdapk4LvyUmu6fFZUbDz53FQnUg5kqGn1",
  "key16": "3aUNusqBNdsATT4Ce2pazjgXM4QEpLTQCjnxozJjyBpd7TTnXx9PdbxzU2hVNj5xoVQCMLzRYpSgmmkAy9CeJuie",
  "key17": "3NFFWZu4rniwGdaRgtJKp2ubZfVoDCDxmxiGWiAs92JPp8GLXCWyCBE5Pp2vRQcRPQe9cjLBk11HHgX9AizMPd4N",
  "key18": "5hoceDas5AKV6xsq41JRXM69zRqu8ti4832soV7gy21yioMMchHHdZKHFgeSRnSKGue2YhrkcGuNFDDuKnxnLo2A",
  "key19": "3Mun6C5ucMmWidVwgxQi4t6PyTEYqsUPePfGNDRZMQTEmtkM8rXAsZPi296ZLhKuJgFmFRdzfL1aYLC4gZETYHhE",
  "key20": "1kXiVUR6REgWi4yXxKEUWKx7G89HCcY5z1fzhjLnWXS9CRS954wQ1q9UwXxujcswsPMzs5mRQC2ZYPkyYnWgHA3",
  "key21": "rMh5DNGoGraavXZUneaJxU6Gxs2J91fyDY5pRv7qPUkw3w12ghEcsieZStxbjitZMPiSn84DWmAQj9WJZYCbNzM",
  "key22": "3MpPWSha37aU53DAPqRBfp55s4Nd7cZpKUcBdTLkg69HMUyuWRSJ3ZYLLW6nGW4VUw8jRBo9XJHtt3JtdNCDxJNR",
  "key23": "zWZ5JAzfdu3FsewadcXgVdKHhCEPLMDuB4vCr4HheubRRSbsoCmJkmwRf5WJfUzBiA5c1yiirKDJrZNDKbh6AMG",
  "key24": "5Ln13mmKTFqLb7yJNyfY4DsGXQHyi7p6HmxEoQ1C9ctmhHpZuCdF6C8reLapiRxcqMwKwhAjDxz5moXgT9KgriQD",
  "key25": "57fNeSNbXpoarNS3K83NdZZqiSa5SYZr1wYtX1hj4Ge5XKipAKj3ecX6jfHDZs7mR5RSSa9XErSq4HshgWyNZ3F8"
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
