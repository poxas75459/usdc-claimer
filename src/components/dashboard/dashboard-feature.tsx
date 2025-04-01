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
    "5DqFoXuG26NtSa43ocNWSCzjuZf9wFNPMiYD9PRa9NXaYue3NR4FXpHwr4yXAs33JphXUAsTWYMN26Vsequ76oWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dV7N9M1EHayZ9K3ieQXNMU7Tx476cknqva2gUNyU9GoCGC8drkSc5gYa2VBSz7CnGYT9yMsCWUvcUNY9ZuJ25dS",
  "key1": "5xyQq3bWxyJavA4NGDDCDZXXSXsFgkKY1ptpUGdueafQkj9KW7B5NSbXSw9SPghVVxUpbq2ex68gKMHvpucVmRPi",
  "key2": "4zGqLmtgjH5Pairr9WaT23AovdTk6a9Ps94zYTHhEqWf3VjHjxCDeno9TnA9eKMHS7AYDFhGSkvWB89JMgfadvU8",
  "key3": "3FC9dtxV14iNuWiQJQMX1KMayZ6Vjtugd4L1B9FCjzMTWGfzUu3tfR529SLwCaiDzd2GJCiRr9rkYo6t9QYXEGZb",
  "key4": "4nkzHDrdNMLD772CTCLKqcZdKDA26t7sZxmn3msRopXcfTKV7jiu969adsNAYv9fUTofiR3vxk6m3wYM87SpfDWW",
  "key5": "5Km9fC5umCfEyN8HnCgapgyvbtSo1V9jwPMq4sCS5QinVirZAFiBPFanr9FKZRkBndcBB5ZskjJaCbv51nCg6BRt",
  "key6": "5o7ADdFpzBK9t2jDgb8dZfK7fRMntg3FDfYj8c1darX8S6zQG571Hjik9rFfRbkGS6jTJsgp7KNrZFwSLSgPXKjR",
  "key7": "2kfsZFWmh3KjSVbAggnFMXCqk8miCTuF9yraA4SeXZZ1D78C6uKu3Hy4xQMHPRPMKCDZunXdJW7VMguZMGuz7use",
  "key8": "3fkGBGQckPDRXtM9t3VTHmeV5PaQx8CKcmtmpd74V84BY3ZSG1VXDeou19RsWdP9b8jDWyUMPpVDcDMGedJgpCp5",
  "key9": "3XKYiAJBM4vDpcZPBWaCHVHFs4xWp3G7eVWNeYLbP8TS9sfwM4znxDXAmB1JoJvpagnAc2M91LC2TcLS4VWgEYP1",
  "key10": "5Bw8f8q1sm3fAtACsLGRMRjJ4QrWGb3o7Ejq8vWmFpKeJjRftzaP4PXh8kvTcrBSrNhqJyCAuGkQqChFRxCJta4X",
  "key11": "5jvjV3L6wHSAxkiu1BDvsnoMmwR3gEzp6gXguZzyPxQ99KH7VCck4pTE8ZvVrz8DMb5ke2a84mFKYvkPBicn9rBq",
  "key12": "ndW7Yx6dHVDyQu7NEWEeVj4PMwwqCpjTQRCiPLWL4sF6Zj2QF3epGiAbf1dRUZksSpRAbqS2bgLAocESUE6CPth",
  "key13": "4s9Xo68Q7TGC5NHzJTBxfM5PuAFWywsSZUvZyRB2YHY8dKHdPUTcGoAaxrmEPKAVizHW3YA3syt6vmUu9F3u7egE",
  "key14": "3LdHFjeqchaNyerBoELirUkQMQk9pVLjXJj89W2oF3us1o1hsdNn6MS2jLTrbQuD9US7p7MincqHWoJuJzVDd95Y",
  "key15": "27HCuuvY93T2fagzvchhMEK5kNPiDP1TJDMCVVPc5jUP4kvHRsq36GoXoGvyDJsB55vWjruBjVGeVKtrkoyYp8hK",
  "key16": "5gLJKTEgV3VGdKp4fYEoHKTiLQB44My7Yj9HmMZ8JHifHE1CxCo8Fp6W7R6ULcZXsuuxqVNjq7JsWFybsKanrdr2",
  "key17": "262sLD5obzAt5VhckV9GjyQJVatWpbAa8xrTEFK71z42Vf57HBqtg6oNM2dMVHsy5rfFhUz2ZNEVhL9nHpG4nCcj",
  "key18": "3Mxe13AX1Z5L5zwMEDm2wne8PG3PwSUnBUWyyWaokibPQmBQbpyws6NFPiTJzHmSqnQv1AEmvh2izNfKqACqppEE",
  "key19": "4JqDQULt8QzNEZBDXUig18jQ6j3v7tGKAK34oMbhy5AiMdCWNj5F3q6r4n2ma6nWWG2XmFnKxgfGfouyMRruNtjL",
  "key20": "5vz5RBKKyC1PNUw6M3Tm73QAgwfZoQe3vGdjAoFnzFRG2B8Yc6MTYPWFNLBw27hoP46VjVT12qmezKyUe3FDhn7a",
  "key21": "tqCePvkiGZ6yA6D9cRRVT982sCrNZEitvGaR4aX3tyUnJgAhTNPfA5ZqSjTyQr3v8HmVjaaCFt8D6ZNwqAJXqZE",
  "key22": "TdANx39Hzq26ndBiagfrAV42g6GkZrjjfy3iBKGVM1JUbLk6p6XYaHET4wTw5cNzkLZetdHtecnrTzSVFWnyMEh",
  "key23": "54NosRktWTFueb87BNnAB5jJSXcjKbsBFWWsZtepkVWNg39te3Kfv6fuqHr5qKYaW6uJQD48b8mJJAwyuqPkDmBF",
  "key24": "5QjZa6YaQYDtzBTTnSzYHXXLsBcUXxf36gHwTj2S16BJZsNXyJXRbKmRiXMgjP78Q1PnuDVbuxUBcAmMKUd5wpSi",
  "key25": "4SZTwfJYe1Wy6WaznPJgtaxzqbUdYCgo858WFk1WkKLr3MmXXst9fn1MyxX1Xxf94ugXcmvh1BuVmAXwcvxPe2KT",
  "key26": "3muQgWSj7zpeG7pHYW8TPdhJ52qXhh68i4avzuH1qRSxx5iqmPL9r3sqimvB9T6rGiYj2JHk3ruD3k7yXKb3v3W4",
  "key27": "4hGT4dkubwRPVL5XXCpTiCzxKoyUBqi8BmfS3Tu1yWch6iAzL8UcBBSnfJG5aAtjbWq5upCvMJoNWQxsaxnyHNbW",
  "key28": "47YdhAsnbsL3DCNyVGSigGtDSNDtSfC8A9fjb6AoinZyQPZQBH9m9qxWGWhgkdGaGuntGTrW9L81XqBDkKziCC11",
  "key29": "nR1YDgTyMPzT9dJqq9Q5w1h1WMLotFqavBuZijr8ypXrzL7hiJTWSAoe8nuivskYuNhPn1iyydaqujSc8H7ZyxN",
  "key30": "S2Esrd6vFg6UtWXims9snv8utvTtEsdcBkinfcRFSr4cGppBztBEQqeffeMwhD6a222pvtW3cYLWz4MMNNuRtFG",
  "key31": "Dd8rHUj6bJKjnomNoT82HsSJivGB6oXGmbYuuqrzekhYjbKXTLi9Q8ZReLWsWrmC3uutEQxZAhGH6ea9zt7sWBV",
  "key32": "5Zgibobxx7VBJWz1Z9Nxtx2NKeoCZonzUmSH4kNWpD9jXgMWW8indLQWDdw1NHBQQNBzkwNhA7NeVGr3oWBZiQ9G",
  "key33": "4TfodFpuAXGKHYnP9KCiCtLfvxqjAMB66ccffnwb7fakGWKUKi6tk5mXGShQoUSwRMNAWzL657Dg25wQp6H5aFW8",
  "key34": "4oyxhL9y3vCAcfDXWqQJzEaYadJGguiXsegv4imU5mjeEGdCaCgapbturLohzXr5RF1m81H1hChdDWjzrTUj6eNY",
  "key35": "2QdQD1BHTGN35Jqp6bkUT2kX6ywrknmMwgr6HXcf8a4b9kD3bf9nStSZYsm4VkSTVxS6ruSnrB23GbxgD9iR7yva",
  "key36": "fUsRK2YcGxaNv97rnu1mjQXsHz3iN2pRKQ7jp2PLCF9YxH8MM5bT7H5Fbp7XvZ1ppKeKfbArY6uAJZNbUq7h1Am",
  "key37": "3pTSFiQFfzNcUzuPUG177cUxs6syX69BxD48vLCmK9pUASVGwY6pxqYZPf2xnink33U2fwAeQ9gnR3B1BXxc8KA1",
  "key38": "3av5C7ktykHBfviEXLurksy95vA7iC335tMrf4XJwaJGJUou3kLoYjJUDPyQQE9YyUVUsLxbZaSxfJugSd9Ev13x",
  "key39": "57pbfJEE5TxhXd7uquZdGpiu5vmiKou14hU94bwGSGFPDe44f5kWxthHDNoAS8MCd5WetFWptcLEcjkWv3ExpynJ"
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
