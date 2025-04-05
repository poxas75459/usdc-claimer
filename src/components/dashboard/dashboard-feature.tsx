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
    "4bUESULvrYxcwDNafLLco1NJvarzpdMJyXzzwn7kfd5LyGh49kihi2JJiJfqXM6idTm5TkQnSNugw7rE6M6rotbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DQih24pekiSfVkabjpmoTdLceYX2L7zGrv4QDbRN7xtcC6a8dL6zvPDXE6y3Xm8jJTDqfee2fkTgPBbGPafJa51",
  "key1": "dXJKydmbm6ZcobpjPUHuGtBfLgx8dudVZhSyCgTCm1GtCCWcRUr9uTLVqbwVdhDUW2sHP1kWWAPDnyraDxonbvk",
  "key2": "4dD7UTK5mE78LrqjCuMmknwHhex2WoG3Pj2bnq9csRyKFop9fQqvTMortmwhWn1dPLKHc58cfRceWj4GsPX5QxFi",
  "key3": "2hHuXjv4vt6CAy7m3fw34EiA9p8MwHsws8YTcJSfLAZku4UV1C81CdSGXVHvB1Rky7i1g2hm2n4gFtYJLkz1aJEq",
  "key4": "4uN9uPPPzEx67egjCRKQDR3rBXSUrPy7diXUHnNuUYseR5DGyBZ6VkLRmYnxo3wNrq3YhLuh3X8J3MQKvjHntSmz",
  "key5": "4tFk64w5NHW4zEDZR82LYz5NMw6enxWyqDA39dYDJZEEJ79JkjhLYDFYkADrptko7dFBPBVPjDTs6HFpqKybadNY",
  "key6": "38oEqcJpxTdyLhoLF1NokZTXvD2fskw2aBzPSpUxtG8km2NjGrpHiG8jFDLLq9RcxB5CK4xyCQDWA786fPvbKwUD",
  "key7": "2CWwa8HrGbEG7p5FS5ebAJgiwvwyd84Q1v8xQSrxRKEPzHtxzYgpHdJi3neQ3gJFMWRkwjUznMzEWyjXUuoRmnyA",
  "key8": "4H2vCVPw3UNvBFh3JcCTmsLhbHwRAQ1i3AnzKuGqhgRS6H2nomLHhM15iKybWUWDapf1gxhPo4mBWLJXkfsJFanh",
  "key9": "3NCRpVEJGW55GjNiPEoJXpwWTf3NrLW9MGNCxeQUnioxpD4swBU79Q6qbx3Tj7nY7qxGSw4fd2UZaU2MNBuBeZju",
  "key10": "4Ry5kgN9LGSx2MRpzYbrCGjaNLZ8tx1NAVS2siKtAWDf7xyLDdmFG27AJuatfygzxaDgC1TroKWP5nEBTWwBPMVK",
  "key11": "2ryqzLNJZH8WzywGBaBtFtHHYCShziSokfoL7PnzS6PB7q8BcLv5JL7ch9LB9Er3wLQKNd1ArZHNF6Az5j2rK7fH",
  "key12": "2h6pVzknqcHfhGdjLM6jWropy1SAqwumLtCEXG4Dpt8zPDiqSrRzH6Nxo6F8L6MsCbHQ9FeztohPg14DnneXdBUu",
  "key13": "5GJ6cNmnuE6Cosqs9ZdWksxz7TBWWt6jGtVAZ4Sin8PiMWMdthseTeqe9iHYaTaHxT2Zs6ZbzRtvGcrSfV7iVrAf",
  "key14": "X7RcZ9WxjtTKshW9Gqv5hSce6R7yD3vzsZnwaL9G9984khqeV8PURQteVJo8oKWvfFb2tn8wda4d1faE8QUP56T",
  "key15": "NzLDoGkehKntG9DQfLssUv5x4eBy2fdSfuPEc4qVtK7kc6xxEQ9DJoQmaLrCHXU5ZRbYoX4GdTXQr3EK81yCeV9",
  "key16": "5VPQiibjDbr8Rtnqr5qS82BKPZ5CkHMtYHnCujktHvfYMZu6QFEp6PScg8NjRfu7oipnKX1zXcYGrtT3tv8YLHNe",
  "key17": "2FyN2dPPWEjtmRJ7cP9cFHhiNEFbuChQF4f91iX2fh6YAHL19XNNMoYR67bPtUDgjpMwXDZsa3e7yka2aSzRKkAU",
  "key18": "5V7x13WF1te8krLq7Ch1hbJ6sNGsar56Ti5yHvFr9QdnGCCPwQTomCKEr6SoZcYipf3o4HYjfLtofkLfhFsevuxi",
  "key19": "ySeS2wP5wEyjCfqB3PfNxZZCwWcS2smSN3zeiHJhrbJSDjWeUuVizj9GakwCcNWgPscddDQYWFPXehvtFBicK5y",
  "key20": "4xAkqV3acPpY8cz7PsLZeH9E7ZTgwhZDo8Tfg18iGRZJEAmp9BfjTZYjfabaj8RgZQsgtcLxgukoHHrmqQFGDqzN",
  "key21": "5uDCuzB1ejgV8qZTEvq9EnUSSpCYResjMKLezdQ4CLcBmfEtonS4MaB84hTbxFxkndgm1dKYZZqWpPm8K7XwvKgG",
  "key22": "34sXwgbJEdXszEjhGzLBdCAMJWyHaHeu3M7cTvAFWeJ8XZnkr5voUUwfa4VZgPQ5iR6nDGdUfai3TU1d1uH1Y1gC",
  "key23": "2WL5LPNrzVKPYviPsMjW2HyACMLtjQoQytjchBPa2jqeR9uZWdej3TBqiMAc6w1aCFRRkVvTXsWR9zmyoppbqZgn",
  "key24": "65iadiaTwnVatKhYdMTupmSJYR9C8stwQXiVTnPMvhkMsrC2TF51vikigf5UFgpheyZPoEMTNeshFfTxgFiuPEno",
  "key25": "mVPKd3g1moawGSrfSewwz76Kmu2N8CeMu3iPAoi791iviP3XijQ6UPdA7Xc82niVGXU6W3Db36d1CF4UJx2nULD",
  "key26": "4DtMQVHJbbpfWXonQMhjNCWkkgVS7rr3kpg8vQEDPP7rMXGvkNyBTKcvJV9H3nnEXTLZdc2JdLQnUmUjY5SrPy2m",
  "key27": "3jpeUU6dnbtEMUqKTKP5gGxNsi2aQ8BLGZ6Gtum57jfjEaqArhFknhXhyU9cndrXr4Y86PEqREKdY2rX2Fs8hCZR",
  "key28": "gcZLGDN4SBhaKwUUczNPWLreZrc36mJqg56dSLECcstbeMTWshCyyQ9TW4j1BacYSEA1rH4TycuZacjgdbZM22W",
  "key29": "2e5juerPG6Z6XpjPLdWjALEQvpS5rh1YEdt7VVYEbNdqt4GvRkRDS5dqHsu3mAQvbtnsxi9igiRKCQ4DLzoAt8i8",
  "key30": "qN3g52iZheLXoA2iwWzSjxF4qbTism3iK77SRxRYWrJQxPE1RJPdjTeB3ACbxybDP27cB8jZAF9iFu6SWTTnEJN",
  "key31": "2G8WKx1nbDSHWGmoa8HE3sPGtGqRP4xLcAdnuLURWp9K22zDgYydaYcT9igthdxbtr8s1he1N7vZcogv67TaJy92",
  "key32": "5HKno8csZR39F5MrpYRXjubFB7MmvnVWb524Z5h7sStuoMmNKGUX6ZTY1qZKkQ94ySdxZxb4LuU6obadXhdZUZHs",
  "key33": "5YFxSTKem9BJJYR8zjTA6ezLk68bBFY4CxxHS5GvGkDdYWvCfHWA4RNmccjcfLFiYVPz4AuJUtYfPQBrwR4i5N51",
  "key34": "5a8ueA7Ju8XuwpN18SuLPXyERhP8XKHbJFzoHCeNL87FSGR7yZiY5Z2AufPsiBNRdrUF8VJiCoLx3cZVnPBsqva9",
  "key35": "38YsoD5WFm77gRHWSet4W6wdgawV1i1ej7MNW3wJV7QbfKstsqDSC1WzdrUJGUy7ekhgNrELRVWeqQHnVn49hPwW",
  "key36": "4qLRWVh9ob46GVZ1ak438oboatfzLRhD9rvMUa11L5HJ197977EsdeYE2rvPLWxLz4Ni9q1vdVBn4cLGRB3KewNr",
  "key37": "3iXz7ffZLRZ84C2XGetijK7hQaHS5PvF3cuhgjhcZaxz4h852hxbyfnsj5VXwCJ4tKLmAxWLduGGdz2z8uVWufbr",
  "key38": "2gvcMenbT2VsxtMd7kenT8GcRVhQxxV7s1iaXcJZckGRKDbXEMBkJz1hMNpf7TSXQVVJSkha23fyP2hWrmQiTW3V"
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
