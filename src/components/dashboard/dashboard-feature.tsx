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
    "4rUx5QN9qCqL5YZ899BQx9Pk2ts7c9WFSCFifrxFvNDPhQBRMqH5NSTAh2SbAWTnhLj3rZNd6PCquUUep9QY58M5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4myzLZbNtbt39QxjvFuCFSwJqctcRX1XeqW9J3YuCPwsdbb1Cae66qCcjmQxW3ENuGXqz5QdQkYD8VZNKy44DTJ9",
  "key1": "2cZkPDyjZM6c9wBZfyg13XGHfhSjAGxoq7n2cg4iVPFeayhNhWBexKgfdWRUHmuV4ACZ4CNSX7AZPVcWrvGENNsD",
  "key2": "3tf7YBHiiT6LhtFMBpugBoCKvEzkF2R6XYXjDsdqA4VWaNz8FT16yTd9RCTHU6ybkwiXnWW194XkirTsKYX4C69v",
  "key3": "3QCHNhK3DwiLsx8dHdJ5QqxbdwD1gye6LmXigegVSWNLFQPJvG6s1iWj12mh9SEX3bDbT7X7VZ9KE5wWyivJMaQS",
  "key4": "2JMzwureWxDpd6rSXuSSqcCe8zNBWrmepVrJjEUUNwvWnHgs3p8NQrbY3YjJAYXL9u9LFbdmeppnZgKXSePbjfNP",
  "key5": "4SD7cVEjiu2WHbZWGRcNRwENm47fUzMc2yDaLoQGEnuryh2RF8pHeHnx7hhqfSdDdAvMup36sGqZ3VFHbnWUhcVj",
  "key6": "58NJPK3KNYNFLeeecjhpJ1f8Vi4f4ZBqkSda7eQ6zvt3fmNozyL9N2QGLijjpxVtXDVTnpU65vicdiBFyGwSqd7k",
  "key7": "AiNQCUFSTJwpR9GLuY6N6AguXTBe3D7Dw1shdpGG3T1DRr7g5jVBCZtCZax53D8znHFVwKJqqjBYwZv8Gj1yY5e",
  "key8": "4Hkz2wqAjnZ5D3Z2SVhsXamWxAum8Db4UWZZ1TUY7ecFPzhXBccnEdc8CC5UeUAgZQWtUvBksu48j81ULdJr9cXb",
  "key9": "5dWvj3wHFxDHKe14JsDq97mJY3WeHE9uXsjUjJ22ZXQftP8C6nQFMiVntgrRzKRbmJ46toUkxeyLRivuXi2nKSzQ",
  "key10": "5fcgDcoy5PWMRPzuEAapVxBqDggZSTxPSsxhu63BneXEu7g2fUd45mHQXW5btTfxEj41DeUJGbSxGT31vqpcipBx",
  "key11": "L3Us7GtgQ1HGj2GyyvnwMJTpkHgc91PzaNVPCrwLufCunpZx56aXbbHRdhYgDmypM1BGjnJqwJvmHWt1pG37sos",
  "key12": "2tNobideJuxMc7J5EMQEqFpmSdNtwB1EGiXjMWV82gNMHsCa3xpwHVPs1Ju32ZprXZeJrVCoT6x7PiFN5YCtHTvX",
  "key13": "2BKe9QG3Avvr415WNWKYWiDdfMWFcYkaYsiZfzzJWVvevdU2Pm4B6pVJBzkgZpnv7wFtQjsGRNNnykefwKMcC5V1",
  "key14": "2vaLs65LGQwZhocdcZKABJPza21voxV7udnDsMPpX13C8J8TrzX22FLm7X7yiojbHuvazabRVubr36qLzNcCRRLr",
  "key15": "24QkprtY9z8HRDiNLV9fftEUeNkyTnsMbQ8iuR4462rQbeF4d2EM32dbjnac1fz9czrN3wexEJqmxtDrNUucRn4U",
  "key16": "HTPp5PjyL1Xt3CDS4QdRJFT89871AS84XbzpYTFzaHwH4dxeQ8fT8FRoFx68S6atapCvJ6DnzEspmJ8NvXmfvi1",
  "key17": "5HHZtvWHcoGWwSknxEKWEMsYHDVAUcqSiCRkqFd6cD5MNpezVkBz9c2kAgu8RJpTKG6YQB61U6qgJgTevHUvbSQK",
  "key18": "4uhqLBgPFJL84azDajaByUHJwxLivJzhsqR7AJCqcRaBCUafi9z5idzygk1FpvpNGCbFfRhNL7AAgQSmYuUW5Jnu",
  "key19": "4rDYQr3gBSAGbMcTnW7cuLagAy3za7Jytne7UymJXj7Xr6yFTqJus88F598WaZeBrfyB7wPVDYf6CdQBHEXGkgAo",
  "key20": "64pPZKQTDSb8NWcc8QAywRzM7wZQPiW6JwKzKgUqV2E6L57qoyQbHkzAX6KTsLkSt2JYhe6AugiWHzhhPA1g1LMc",
  "key21": "4ycHNy6E6iYzPsNSpjHxyXnjyDVydqsGVEPYg4rg5oHgavn21DZXYSyzmL8z7WUnp73ofvDxcTrk87bg8MsXaxEm",
  "key22": "3dGXWnoDsvw9cvz7g61qBeJHfe5fE8nvRz6TvrEs5rqe9j7d2Xyg83b2LXsaPN1q6Xc3XdN4BP1FFFzzeirHrYU8",
  "key23": "3h7zkPKYBLEbCLnyHc4nvUe4RfRHDRSGpADipqy3X48eoX73dSkDbmvVdy8sMmjcHH7fy1jjUpCRW9eGjjSYYwtX",
  "key24": "X8iB8mqArczcaQwmSrMhd5UXRHCimdEkDeiB3LX9413iuoU9ocDg2A7ZAYvLkAkwJE93kxWVjCRvYpMghUAx6He",
  "key25": "RwX4VVZetaZ7jXEKB4LBpwNJd1WWxBZcUn4TQm5b47REQyzGSnveufyhQHvfi7g4G3QceHqwiruTbnfRS2qcJgM",
  "key26": "4fLT63pVYzDcScUQ6LqmEQ61ykzZhEZAnvBTJwkpoZmVEPxuCM3dCzSnbJ2EhjiyY7FJAUBhPw8rCTdMoGwV8oih",
  "key27": "3RKzmPczK6BZ9w3C9UhVVbwguCxqGUgF2kswJ8fiztsgPiB6fPzXT7wRchWbGd41FJtmz6TNvisJNwP5GM5RkHUS",
  "key28": "61cWPbaqW5Y1PFQmqrRKFrcMBPdQmZtgdDmBGHxqJB3XhaHp51FAeze6N7coNbBu6EfaAjwUDQvH3oZ1hfpKWLCW",
  "key29": "yjP8UPjvALq81JGEd6xJs4bhUCJnDEbPPexRpLpnHmr7NhU3AQzqBKhTRQpXDefo8n8a55V7NVPcfuQrgoHGKcR",
  "key30": "2Et6JdumAHQeuetV96iqgP1VgE87ySj5mzU1oa7oawYHrkVNBwtbfUqS1V7xqGXyDPcvBoBGGvhDcLgAaSTQ8FQB",
  "key31": "g2i591JZxTyDqe4cXgB5x2TJh1ticbPYea6VExzk1z2udEotPvNFmsS4zsf13kCmiWyd5pWnomSBqmMRLcAPFDP",
  "key32": "yXkkBdJKJq3dCYCkcEV2ToTX6XkK5ZMCCrweTjSs9zypqZhvwYRb9iSy8jYREYY9zu9VxSXz4nNbL63Eu3Mt2J5",
  "key33": "5YaTjCXL4LN9xgfJyLAVuRYAZcknYdDQ4Va8dTMRJmAjr5k9sidFKXARyDM8Tb8jToJJuxV1DGj5HCzwnJ3ZDbsU",
  "key34": "2XRrzoxNmhC7Uf6EJ34X92Q3bLxRYbJAzDpW6MrfZYWqmnU6iYh8Nr7hvRoGJhrb3EVbYGwncNp4BQhd1xLprpod",
  "key35": "43PVVSgkSzu7Ng1Mnpy8PNSy6zniymbCMrDvDsfpnktesGiRJx8YTBVTgPqxQ5YhwoheGfwiooHcyXctiNmsxyur",
  "key36": "4Hp8v1GYeMHQDDFdyMjFw3xfJkB5iruXBpfeHv67YCNmuHjNi5Ps9zQxjzD3f15vMBj8SE6myJK3TJHzKQnbi86X",
  "key37": "5qMsW5wbeXHpHsDCyB2LvqbVrUds6xoSFvVukyKfnZ5ADgKCbVMp2kmM9G6jBzbk4ErqQv15SkwEvydko2FYAnkh",
  "key38": "4QRrRf7fvCw3UXnVvrcgSoLg3gKSE1XsLRXPm6uNkmxopceXUiwhr3BJmw5vXotBu5FV7KpQo6xEeoj3GdQpZhbS",
  "key39": "28aNygFyNSr9ATKUVFDJpcELeYPyuHXpGzQpfVrttbxnJ7eFffBoxFFgjfLXXagmUz2ceUj9NyNAqsvM92193tug",
  "key40": "7LSiUpVwYFsrKkkUyA8PvV5TnU6u4fUS7YbZRRsxbRdxmwiQdFBWTSCtcfgnGe6hDpqC3x1dgGFLjsb29HPYgoZ",
  "key41": "5YEp7Z4QaKi9aaJSXcVLBEEha4sN7mgosFxQkoeLLv72HvE4iWV8gYHrpJntFg385TRxqhY51mz2pr2HQCFiyHJj",
  "key42": "XgjxqWZCeeV63fpbKYDFfnKHxJGndATUcAZHH6ZwnHDhgRVoWNdRVcTEQ1de35xn9B84oZb8aaUJgzUNrvPsLX3",
  "key43": "5y9gVTXHqKKfCyWEFGeKERY4hQuGhb3wcLqLYKodCCiDg8Dmvk91cZigSvv3HKGonen31TXVshfjxF16BYzS9pb2",
  "key44": "2XWSx3rTfYFezR6AsUZh5qtwVo2FhiVThD4CsMrcWF6Qzs2k1q8KQfHi5Sp9h3dLvJ4E3ma9zdQhr4wm5wQJPSxD"
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
