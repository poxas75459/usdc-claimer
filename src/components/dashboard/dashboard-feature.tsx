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
    "5e7fGnjYy9gZJRD1tRSpbiKHR1QNfWR5Q4AFStQUDHRiYmMwWp6y4jJthN8ajbXFbSjnrgvz5JnFyA233MPuYdhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kn34jFeqCZ99QBLaLk6YWPxYDdD2uVgxj78sLtW41t9aQfoqAppJQC8iJBmBhiDer5EwTauBboA1dovTK71wFqY",
  "key1": "5QKr4m5BiZsbSAjhFtc2up6vuGawN3kLADJYotvJtZbTXb8BvF7W8MDENbfVrDxTgkqPFCwgJnEDAqmgM1CshohY",
  "key2": "4ZkDocbYzXin5VZjCT3q173aYKTzwHZxNcNsLzHBZsus1Cwyxg9uGBphS7GXcdj15xyUzjMHUei38y2BL3kKbMvK",
  "key3": "3Casyii48BiY6AN3mNXr967RQwW17Zqrz4KRtBm8TefcA9P2tTsNn6UYD5UGwjKd7VtwNNEUerQwUf47xki84ddH",
  "key4": "seGhQfK1Uer28sZKobEMTimc7zwP5bSerFDXwKHjwKcCzCd6m3Vnbfifv9mb8Y4r9A9RPRRs9oVr1LwzbtMYcDs",
  "key5": "3ATbbTCL5mhUz2YMGgoNx9KjaCFDpBwe4KyeyJGibneQFQPVFgZ7BnPzRQY1eZsfWt2oBGyUJEiEXJgDj4RvgSSt",
  "key6": "58tiivs3SSRopw5jUwuqAYcaQ8CaQTtFqhEyvu1hPtZsvY9UZ81CAH2pppMjS2QYc9Pm6krBRzjQ7bdkvxkD6rrb",
  "key7": "4Vmw8ZNwGqJG9zCNkW48A6C7yCTN6Uqt3mfR1wgenVUcaGeUa4VjYpYaekkdEr7qcDRTxQ58qETsDBD1kKcz2aBF",
  "key8": "649EPKcdfYtnWiuRnxNq1PAdz6hE9hq6PY6YUsFz51q1dMFncC4U8azhHv1ZU27UqLvoybAW1ETdEc4T6ZU3osy",
  "key9": "3i8oR5HJMbzZC19kz8kyYyr1f7rc22jR1UwLadFPHWQTwjwMXUxM2CY4dHXCwdQh8e1yD63Wy37JjAtAQUG9Mi2q",
  "key10": "4srsC5ZpQ4FtZgDeQkeenzEYRBbR9sHedEA25R15GM9AxFmrPe8YAtT5m7z8J7QczNwKdNRePf8KBv5JzGg9FEja",
  "key11": "33gwwQJQEuuRm18zQud5wmPqvFqG2r9rVenrHWwpVwuPe8Sy2V4ZUveE1HYbAqGKwiMyZSktrhFJcgqrsXoMY3iB",
  "key12": "2wLYk7tJZ36h9JTYg46GsitN4zQe9Gpi7znC3FyFsRoQT1czEevX7MPH6Y7nTe4HWFmf19h4YhTR2Hwuyh1s5ioh",
  "key13": "4F1t9UmohduKmcUcFJ2ntrAVVNDoSpSFjYsKkC8KsWd1KCJ9fJgVf7T75udza6uoQzGXyftNvxsEYsBWLf3rZyFq",
  "key14": "4H8NujCs5McWXUG357zAZWSd7U3dhyYkxP7tDNJqP5w1bm4xw4j252DiLrgbvkvwD1dSVKXWinKyEgdVKjyjQLQa",
  "key15": "4oiLvrNwViFjZj11xnhDSmQre8CKzw7isz1HU2s3LEsUfTpzGFjsCeraPpwrh5RBwecnwMYhJ2ruFTGxhQ8uk4zB",
  "key16": "669Hmueo85HvxPZFKp1cyELo8ep9AkPfgyTvRuc1AGn8Ay75R4sRQbEbxbUGbELR4H4moZ2vuRgYrsD4AzMuHSD9",
  "key17": "4vMcwudGSufbskabK6DrGyB8ppLvpMRZWDQZQPZC357cdSxo5SSikHL5ZQmZb5fMMP55sLcRGTF9wUqPShLzjUoq",
  "key18": "4yr3D82gmu98WfAfUW5TzdQPsJZDBP9JuVZxhDfWzpo3xBCkvnGFU8eLiUXskR59tPLEihjXdwrgZFEAdz8fiwev",
  "key19": "Rhp6z33CbtEGCJ2sLxAjZBdu7UpWD6eqHrAfabjURaxgnzXXmJRfVeQDZZdmXxHwgbLmvJ1fdix3R8t9wA8pTDh",
  "key20": "4b7VBzZU3yVKJ7iMGPqag8Z9B1WLcaP5WkFcic14eQnuG83GBxEfD63ZKYAH7bqovZ1oTe8CxF9q1tZEZzLtX3qc",
  "key21": "5QFktVkCPAeXQprRW9NrJVBAGZchv37Q7Ja7sECrX8tssvszw6hJXyhYpWfx2YvJEANexK44CpuVyGaEMPkpCtbK",
  "key22": "k8KgxJ6xfB9c4JX2YEXy8X7CxSEWFSTknSAg5CDQRugqiLbYHtfhqNp548Fvv1Arhpz5KTvWThbSLRNrnF2MKRS",
  "key23": "4HuaRZ7TNXPuTF5K5WbB2vQJimTCMxRJh9t3gjhGReeqGeGoF73x9cBSn5JGXR1zgheFPaVAH77sc58BAyfrxbqf",
  "key24": "MmKpCx8ooPbfAvJ28paV7wFBDQXvZTmSHF3xyGPXbLnbaPM6iYQs7qiUSevwdwVjXxNA6rZ4FKzrGCpuuHLxe1f",
  "key25": "3r1hpgj4DwuFUm9SLUuyij2yo8sD9pxSDhPMvANnLucHDjYxqbxhoaTdBRboazuifpuqkGQRb7j8jtuZ73ntAqVs",
  "key26": "C91CxFqG1pXUXr7yCyXahoEgN7AGEjaqy6yyEvVaEX8aHvE46qTkyV1qYvEsyGfjkLewDvCHAPdMsTMrMZ5VgND",
  "key27": "3kBBGmbwDKKPTmDy3SfLoyGkk1csCP8Bpy9PJ9u5NSjTihZwgH8wXKSmQAtzoXtskwZNdq8rHEpH8Y7yazynv7ou",
  "key28": "4rVyyTsz6caQcPNRHNMRKjC5Y1RtLDUVBCZ81H1Abd7EU3p6T877vC1vL9eRuT2s3hVUxWjfCPRbmjcPr4uAw3Xt",
  "key29": "5YC8B1jSwv448DzmwEnSrsaYqrEcUzxXDyGUpFcyASjkcf9qrkNwUuSjV29uZgn8gUyybjmVq3xUxPfVo1rgPUdu",
  "key30": "3nNsYDWEAR25E8yCJ6A52VBqQStf6CMteEjjiRksnGoRRGP7gFBsFi5hFAAHaFHoLSkZT6KYSFb9CYH1QGoCTC4J",
  "key31": "iTnEwsK3EtCV933EnxWZySVDo1vNrT92G55uUMsmXYZdTiasnhG3BujioT35Ett7FWhUbiNJffs9YpgNSt4wUUw"
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
