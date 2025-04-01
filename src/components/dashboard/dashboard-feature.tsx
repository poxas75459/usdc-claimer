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
    "53vzWo9ssq6qD9pagNi7frLsYLd35StE2KJzfdEDBS7fHjr72DCxVrvkxx11CU7jFBCwiyvvYxerK8GSrSPxHh4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CrjuXfsmLDCMhS3ofRJWVRPyicPNeE7hZ5EePkX4vZmzPXuvyBacJRAPVWoWnKYoXCRx5rj6J8aZcjxR6dPTxa5",
  "key1": "625uop4EUXdNKtQqVZ663UPKcbjLtuycfTDt9MCEUpZdz4dkkxtLywP2BFbuDMbAxScZBLZqDJb5dzkgKNHuMYT3",
  "key2": "4EkimZHDnGtZeX9Gr3fDPsnc5nqqRckhakdBgYPfTGz7ocX4sFYkJitfwCvhk1CS1KAq6u1pA6naaG8ckpqyjjcC",
  "key3": "4y3ehMghzs361ZzpMn6BaRt5zfwnJh6KXvT1ampJ6ydvwKzx4Nzi3rSGSHdxpbJ4m4qc3UFmEGPHfvRcYND6CTB2",
  "key4": "2J4NzpWGy8SbDowne8BQyp6Zvp17eJ71ynxcQ9b5qoo37Pif1VFmkpTwJL7V5awq2DMhodZbT6B4ThWsB2qCbkoG",
  "key5": "KwBDtRj1s94E3G8s73eaqY4Qi9ZHBzwxDsd5v6thpQ8mJv6rVi1q3JsmtVdbUYLjbe6K46SfsEsosyqv9LZ4Bmr",
  "key6": "4Y2y29diXhobDJDGjkNrRvfVNatiUj7sNJo2yahufEJ4pGdKW8BAQPzEsJXw2o8KEoFshWmr5zbUNYsQAEfuicKL",
  "key7": "3vWEHYDPp3VKZhtpT7rvZdqv4jaKf7iuSf6WbLraFDwhyae8J76TizfQ2cQZKoz9ChiGirngQN2v8bpqJpJxGkzX",
  "key8": "y1mWk9ENSLkHEHopJMqkDUivHjQRYHJP1KcJQ9VRpv5VHtRytZ1aEZwNkebY5eqiD6w4nDRUrnWtEkJjadKA3gJ",
  "key9": "32ikDXYiNMRN2Pjwrdgdmajt19GAVvJPmaFJQcN2NziTJqjFAQT9v34wqnacSfESqGsaSRX8Pq5TwVWduRrtVnFF",
  "key10": "u7comt7vhQ3mpEbK568wVqGajtFyCb1xqdFEZUczp9tDBzvAfyBFsPXvoLTyYdmbxynKA2a3eRTz1v9TK9PQuea",
  "key11": "Dam2ZxAUSrscoFn13cUpM9A6c8KBzxGjSBUkw3EFRr1Bu1E8HrBkki3Kkbqe3dAwuyr5JbvbkYWCsw9kqeSbfPe",
  "key12": "4k8iPyDoKgzGzrFG1Vxrdarifzb49BE8PuTojooeSG7P1oEiKfhCJ8vmh3dotgmmry75PjTRaA6BniXtLQbhKjRA",
  "key13": "qSb1VJv1dfTXNm1skWk8HMQu9vr4HabDB73MTS577kH1w39GiSVDhahsGg8WMznBBLstkNqGxP3mpEieKtgR1dn",
  "key14": "51U996gE98inKCKvq8dpevSZG1ka5MfCxuzvBHiPcXcEr5xxHkkuv23r356bLeXN1rGEHnC9XeGKhjiUXwXzjmKR",
  "key15": "4aBLv4dgLWbe1cvsVbvwLpdyafVE7futwTsVRSkaExq1DFqD68dEJoGma1EAWJyVyjHKYfTFX6fX6p48Cm8vRCFn",
  "key16": "2ECrT4BMZGVqjwgECNGiDCeXZQm59QFioVtdGhJGh4LLCX61gLSFza73mB7Mi1JszPEtuWFe1CKz3zjedgDrLiUC",
  "key17": "mjd6GcteW65kNikfYfEcPrZ5NPpjr9EDW3T7FJ84xQwUJdC4uRhmEB94ftYTGwGUWWRdYU71BD2SgAnYeVLwpqB",
  "key18": "48egStvfeZL6toEFcgD72neoBgHK8FhbfEoigxuqN9TuXEGBT4dNeb35eLKV5U2AnPPuitsLDTXo5YhAbj8xN2cM",
  "key19": "5WoJK9khuH8JnZbRj2KaLdtgJFf1tjLmMPRyww37oM157v1mX1YNyNE5PvhFpahFkynscbSQeL8nK9kejo9nCtbB",
  "key20": "5wLYyi1HEHKE2grpUAh8PYdX8X8NoTeUFSCNpWWvwKjd6DHBcCW52xYtrPhsh4Y8VWNyVUnrzBDNWQ2oYX2S1dDZ",
  "key21": "38wrsBt3fnN4Qrgj6Yb6msHYFRcFJ8Dp94uRdTsjfz8nMJfXp34Z9TnJoszHCfhSu2NUzLhyDXvEYStpDrNFRG4P",
  "key22": "3BL3r6tJzUXgvWzDyFkzPh4i79HrGmsZnovBipRKVwbA1j5NZHHg4sAEiZ31Yokt1XGXeLvWeXqJ59tiLkMtoQjf",
  "key23": "37U1KmwpZXEkhVSVUe414CuQ7FSPEA8yV42rCeWtMmtqYTMNq2HSWwvvCfV9jNHL54WDFspAU8AtsKsFPiH3woHh",
  "key24": "2UjxH8To6btZxCJxoiLRP48PmKuzGoeneNgmP3LFa92yToMRYsxRrkcVDLr6m4aCeRVrbWHbUMxcDzP6gq5ZyRFA",
  "key25": "2ZxzdnyrcT3D6Z6wsVAHruSRjpxf3LoTm5aZGdQkr8Yoo3WsCj182XSsbSah5xnDJWkLcVTjfjLQqkyviwTosADi",
  "key26": "26frTCx1oky7dipqmHBrmJvj4FNh1EQ76U8b7ggHfaj6fQgtFpWs6bPHj8PzbrGrve7QWmedEGBKoKuGBAdwP7ue",
  "key27": "5wKDMbcUZHBD7JRqrrNQSZbL5Ve8Nqy6cyoG468QZdEeomTKjYTeywASAcThyFuFZZfoBeR6pQs2b64mGGqAQTJi",
  "key28": "xtVzibT1AWPn5cmQ2QbtQsLDu8vaLiTCteCVJrcKGsw2wYc3Ly7csfYQ9E75ZqzkcwEZF31wFTTdwwd2yQQ17sA",
  "key29": "5QnBgJZYXumAeDy59vQFpjT5Su7dPxCy3coL1wG4kbmqZoZg6VuMh1UV81snoTrkv5DMbDhhD2KMgEha1u9hmpoG",
  "key30": "27HUJodL9mCUYoMufVQ6HMc8MWwA4JCQXToLwXfNdKhvQeidpa8919RPxo2Prv24vTsxjL7DKKX2GEkY2o1RxY8J",
  "key31": "2M8xhzt2vesbKEBLxR7WaZpY4GUfbRa3LXmMZyFq1U4E5SHwKWUJVGPSUFwdqR9CCSMbux5Nx3Nbthg1Ajkur8fy",
  "key32": "5aEZgmXhieMcNPYjgdkvVqBtH9HzSuUa8PJDhRiEmwfAB1fpktsJ7H62T3KqP8SAYSj63P546DDG4h1Ke3H6rWNP",
  "key33": "4pMRJeQXjFGxQJVG9oBeTZAAdDHK6AAPZkJmc4qDBpVQHmCcHgx4UNkjvutff6RP9LigVRdaBuYD8PdhzBczTbnt",
  "key34": "5aEXStqjLZTtbr1hgnX8jsHHH6KnPnPKDtbjwVCRMih2rGMk3YdXUAEY48Rs57JhY3FCC3pkT7yK6AvZMK1vX9rK",
  "key35": "5o3qpf3FXt1gbTgdoLYNoJzaBMhdmnd5sSiygo8NH8WM2GJXPpfeEfCmhp4tMXRj6aC9BzYmCcc46P1ma4eBxkme",
  "key36": "WbvGaxavhEkSGh8WBeu6etb6zpu34S2kj4afNd2HTHEGvJFa2y6VXKdh1EzkHHGhMphW8Py4KNwcGkxQefLmZGX",
  "key37": "5jPNkb7udAv5r9A1NeaiKDK5zURtkqVtML9GzY8ouYxevVkxddbniRB93hYsYfqePspfcVDJ9ckXmszEo5NMamdW"
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
