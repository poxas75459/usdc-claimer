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
    "62bF1Vu1TSx7XG5tN1XoePJPbuzQUFwAGMp1MXC7QJxgdW4mu2bEA8wpsXiS6XvrfxpmJHSLJddejwpf1CTGiajo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7FVr97RJooP2jxAR9o6dbVAqhRJ5ftb4Fofhc7DajkFV1HB2jA289pKB3VQW4ZnWgWJhDiSqBSXJ5n9Fvo1gtE",
  "key1": "51Kj2xJu8KejZ8EfwQPs2RD1xyYWEhj4pXbAShiMiNz3tov4bDBXVApawPJ55Vtysofp1XJs2Fw19VuZNeRoQ9fR",
  "key2": "WDi8dZtq2YLCZLPKH3PUvhJMwXLr1TN6aKq21JBNmXgiTgAs9db4gCa9po4JWtp49S2irof99LcUCkvwZTiEFfr",
  "key3": "2Kv5jrKfiKU2kgoQUtkKZV6DvzEcMgUpGsKYAt91B3zqpYLb7WAn1jpuBLpbjEHMLftKfF9yLHNnMWZRJcNZuxy3",
  "key4": "3kcMmf6KCBvTKe8AJ6RBWhHrETNHAAhPhV2XwocNgqwzZ9NAqdjY1DLDCyFg4bDZwbYX3pDr3o6aPyWDmiRW2HPD",
  "key5": "1ZGaV82wz6QCrG8GkhrrgkFt94ysR9eTpnrJeVvTmBaF3zZ47EDBZv6CqT5Rhb2dNjYnUdjmyMdwZziY5feAdAn",
  "key6": "2uX4XEhQTRUqGhyu5Xznm6gdGyrvYLWwDWQoQykGCFKyP4QNtU5jnQLYVWcpNWjPUTJrAC8H4S912H6Ej7wMZ8Hz",
  "key7": "2z9VHFgEtcopH6hgMQXDvsqcnuJ9R2255njwxgYr7RUrtqrfKdxvEz2XXU5heabY8uE4Aiz6yrLuLz193gMt9RGh",
  "key8": "cwRWfzyoBDa4XuPMZzxm2JdwAfbTow4MTD5fKQMuS8Yt9TpEuwAajFkcPJNq5cq5H1e5mrU6NSCAn8t56UJY2Bf",
  "key9": "2UPuZNGvTxYgZPnCxEe85ZCSAvjJ3RwiUoQ3Am9Ne5kfvXCbFPKTKwSor847mk4V8Yjj1V7Ysqw6uZV7mSbafqMB",
  "key10": "5fX6qSpFrwx79C9e9ZjwFd8rJCRGmNdgkE3BhJpKz33K4ZoH7uEwUvANLFwS8FS8VRTpw9hM6fXPWuNhPrkbXL3Q",
  "key11": "vNQq32uVsfQ8Kop9a42TPaViTQ1dbbrVLrw518Da1UPNQuvTSDwtcmFBap2acdbVv6GGxMcWwG9tuej7iwhBwoc",
  "key12": "24bfsujmjmWgDA2HrMHQpPCLN3vwfWNEXzL3Z4fGKyoj2kUCJBNqLCRYV5z2DdwttBT91EzzUtvAPSSQJKeAq6CT",
  "key13": "5zrdyMJ9c3MUZVqyjKonjatA1wXarrzBbkHkfWUkaNbTW32qafVRRFfbqNhibi6nNZJ76fNt1jN8CMVjJoBNNVL1",
  "key14": "4cmSUhHtZ93pbBTf3M3EGzVEQPxRSAsZjeKou3CXHq8iSR2x48Cqb4RzBjTBHw9Fprg23YeoX8hbKehf5kaX4gve",
  "key15": "3gTP3VjSc6N629P796wv9bD9EDv4cpZ7L3wRq7AzDi2cDP49gQRZ7mjmCknTypZZTJ7isUMMv9JhBawFTcQAjjKU",
  "key16": "2VLxwGUxvNHYR24ceUrzRwSqA2qxT65x98r67EekrpDiCmPUWs41vK16Nu2setBGRJcbFBy4qZfperWW5nxNbboB",
  "key17": "5cT32yRdNMu2Nk5RpTKYyrf4vNxozb7zQQAf7y7bEMPQH2mAcryLhvhwG5UZQG8r5AfdittPSopubUMgoo3i9eFp",
  "key18": "9FFddQAMVz4PcLyG8DJhk87bxDPvMp5QNJLEjL73yCnPQoqjmDFm3wAkWjiB79MRaecebUYw9dFPxJ7fYTtoiXC",
  "key19": "JXr6ERrpZnuAvzuDkWGbc4xZc7QsnDbFStL4NZsiWrWegGfv4Jy8XipKNzHTwsJjFhsJ2szFarabHuZnCx6zyTw",
  "key20": "9wt8jBx2vVcgMRT1E21TUMe4duZcToBm5g4umqe43NjUV99ACRmJJ9E8buvwtiZQsARVGs1zEZgYWc15HJxfyuR",
  "key21": "JwbhapzsLmN95vVgsvCXnCLfgHHmbkJwxQTGUrPUHuWWRzJNzwojWZMcGPk2gJYgAXDMUriARUEAKF6E9nuT8DJ",
  "key22": "TovF9ks9f7wmuVNhFmhpDd1QsBAFeicNAHb9ZiW4g2GYPuG77SRYCejnMT5bR8X2Tm9QcFYjXvqBno4MyeYQ8n8",
  "key23": "2xExqDYvTKdn2bJuBBfUFvKLbTWYamB1YReP62cWCkzCm7JPxvjvWvyGWeN4DXZEMbi5rBhUw8Yuhj839pMB1c88",
  "key24": "2C4nX91HwTCKMxuRWqZVQuLDzDTUhVA5cD82UWpMG8uh2uvjBaY9yz1Dn8bHFQhju8Jqp5wH73fLyRPTs7Z4MWGH",
  "key25": "5pHjeNqwy1QorrQe51fCvWrG6myAUcRWfPTyRiQfqDgvxrTuXUz3VvK9qMhPyndrCCiHEwL2SQmLJ5TVsyoy48PX",
  "key26": "2r2CuH8KQL63N93SAPn87qigsgRpWP9XRLy93n3TYHzTxqEju66163SvMDoDN2xC7jurXFzFGT3vbUGJmyib6C6W",
  "key27": "5stKUyj6aGdMp1EAYuuz3bHpQTyFALLzURsUwLk23BEpBzkPiQzgvpcD85StobQdURTj6Ea47CC5Wdq1BpyW9Zgj",
  "key28": "2qc6AGwAzkatjLJAuhVeBvqGP8o9MtbnAyQhpkYa9oivAojTYVqJduakxz2f7n4QMCbLFJERKy8wbHqfAzxg1vT8",
  "key29": "4t45AUodcU9iayzhu83gie5N4Cne8jXycr2Xpqu7eTrbNp7CAAjNhHLE6b4EoaRwmzbtr8m9dQVayXKhgaykzP8p",
  "key30": "4fz1QJRJUDyB4P8B6ti3JCL4GbQTpXfdDum1vxch18cnq7EoxMWqW1S9LW8ctzWDqqdaDzQHbe1H3NY6swsNtVPn",
  "key31": "ppD9q5ZQ2kEkAPt8nXtRPtXcBdS2JkUUnwv2M3bUoiCGPXExKnNRDrbpCxcZx3PPFVMNvPZQA4zQ6NEF7nafRFa",
  "key32": "5Xe7HfK5qhsAHaKC5AgQuo2uNH6Bf8XGKAfVg3PWtpaScbepaK7MLtWQWqrMkFY6hLWj4K2VcuzewV4j5rcLRFwm",
  "key33": "B8sMWu2nWt9cvpbTg4t1AUqC93Nr1dFydLdU4VXHHH25KNRjntMYWG8zio8vzaexoXZH3pjkU9M6nu7nTNNncmT",
  "key34": "2z43bdLSoUgTNsxRXUTiKuWyde7hLw75SFG2tx7gx69FYpMc4ai2Bp7H5hRu99nvfe3eKniWr4o5hPZQeTgP6WtR",
  "key35": "4oTFik7NVe6Gv4G51wDBQALDqyp2Xsuo99YH1EHvP6cSPFe2hrg2kBPoZrPkwFS5Q5DUtqjCekUN19KxU8zBxuoH",
  "key36": "2PyEHfJ6YtoYhRTHnyrMVw9SebGPjHJomeJVjzNBzfTAYkdM9CSzYdxbXqZWNz8pKorx7obGGHhvcrMHiuJ2XWkF",
  "key37": "5Lem7K1hEjXteeBSXPTRZWduUwH93zLwQNtHPxGbJ6wCypDCLoDCAJvzUdkVcvuJmhJVxSEhG2hEj6fh5ZubdYcJ",
  "key38": "2ZTCgrX6Bq1HumHa3h1dyqbHHEMiPkS5nnQ8AVDPhy3qHGEJi23sMa4PpYgjt4ALeiku38Kd5fsfvp4tyJiuxR6h",
  "key39": "5fUQXYF481CgN98ap3idnfLVTp3mSEiyg69WdnyvRB4ECL8t7nfP51MGHmVL3mQ6mqunpBwRXBZjQEEvzmt8ovSD"
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
