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
    "5e2zV4aJ1Fc5Jb4TtXjuo7XDWPwLDMazLYrsFQexfwbXaUhi7i2aeTKFndpk5wt5fK7SogXAQeLpoMjUxXawK1qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gaVfoXMr4HdA2NoQ8bm7Ar7p9MmzbuW1CHZ6iZaVVXGt4mZh27uYJ8tozA8cvGA3g7fEkjWC8vU9282QupN6Mbo",
  "key1": "FhqvevWqCT42o6TdieLzXbQYwDW7jnNaBHkzdn1YkTTxEbCacRVUyKJuJNAY13aC1FHSRnT9VemFk58uDdmBbVP",
  "key2": "X7uNGe3QirPHnEWnJgp4erjFQKYZwDx1JgVnxEnZMcoBUAqbfShM58QxRi28k4McGFFbcvUrs9bs7PvZ8pWnpAB",
  "key3": "2Gw9mrmRX6f8Pme1ompdUeRHja4jLhca6dpCdQS9bzC8eLnRTfFFjTa3Q9vZB4V9PMVGPPs8K7oktEeEURyzHtbb",
  "key4": "39KfQ1pXd5LEdQuo8s5WuivihPUZn5Yste564bnyrxq98gj3KY3u86wtJceQJAW2Rk5qngPmpd7QiLF8BJAGqDYN",
  "key5": "5a7ZxVYmfoWBagWH395pztMozxuUzr6VvQSHzxuX7s249DayGKdYWJps7xgdC6uvsdeGSC2BwGrFCVMLu3r61wtx",
  "key6": "3UKaW3qRiy4BVsbN43yCmQvvSMX51sVwCsfMafJhAfiEuvDpGSxTPrpHqxLLCAw7Sv3DA3KqaPJSt5AtqGAzJTNB",
  "key7": "5LwECGTUxTChDoea1kvwRGB1NZ6SNG9KFr7B9r587r8Vv2CBGV988ZdxdZDVZvbzKQfarU6pnUMFfPtvCgjMGauu",
  "key8": "5qAgF6sEAcx8qCriuFbsREp1UyYP4fk9QCBXprhqvqVC6kJEuq5F7M2tHfNcoMBn2SeRPCH6rmdEZwve4WK68LXK",
  "key9": "Z4Cnd8DD2fvdMYQQnE4e7nNvFtXSpKjqJYFZibHaGBTt6tUBuDw5CMNJT7NNT7WeYxLSHXxMNzS7xqiXFwQsKv2",
  "key10": "2GePEKbrtwUar9QteimagJzx8uT5ZAQ6wqcUiUVZrHnffmHmsRe5rY8awoFJBvdB8Yw47obLGuJmJ5dFEvaMDejD",
  "key11": "GPGzBVc21NEF9mMh5LXuoC9ENJ6LMZGb2WhNuKsUo2FpRL2swaSvekjfJ3RCxJLT6pimjRFhFTaCmVoemAiN9p1",
  "key12": "3zKtLfLWvFQq5QjhrJosVkcA4rQGyxnVrGjEURMxPChbAassyaUpbibeij9KVDVT7MXSGzpQDRpSXNGk9fRamR3x",
  "key13": "4FWrhZc46QKYf35kFGVZ1W5ymoUKX1cULniuKA4khpacmdP9HvGHJuY9o4JCvtCBVDP7tgfTgaBPpKr4fEmcChvq",
  "key14": "4D42cULumE4Ae5i2S5BHCYg6DoxZjPFvzvdyCTKFiE3ReFqDW4N9WfHTZSeZuDM31LSWyTfMADQMSyoq5nYU9Er5",
  "key15": "auig1ehhFCSoqFF9yAZADAjFY9JgddvgBcmTfanCr13AizFDPY9TSshAQrp1oiQjQFQ6CwFggjxjnU3MrgbWsu1",
  "key16": "3tXwWESKnCWudg75mzoaswa1uhx1vx38or5xniUJJV7TyxYaUYeXFBVcu1jFYWau1Lc1oZTgkG9Co1ss4a36eNsh",
  "key17": "2Q6ZoaojJkRzAB2xzeTdnyK6MEwY4Q6BkMkrNSYWX4YAeB6J1gsakxFb6Y86B1PDiceRMZAhibgfDnvqwoxd2Vey",
  "key18": "2otqTQdCr6hS8YEmHvBNEyqW8H9Lw5ypwJEHJ68t3n9cB9Aisk7BCk6cDJfVkCXk4oezgy7MLTQuGwPfB5kHBcnh",
  "key19": "dKEbQvSbEydQ1e7iSqyq2BeT8UVjZD9AyL1KZzcvjpcrDLesuAbMd6w7e3ANMu6gXjFb5h6okb2VjgPDxfRLHK6",
  "key20": "mXHQWARSoCNQZLAxDZp8Q8oyZfBrEEVET3DryNTZFcF9DDi2qYNNdcTAEJXWdxRMGJFH2h4Ar2nJfx9VuKg5JWL",
  "key21": "44xptVmcPQVF2m8T5qgSWV9DbUoATnJ9oEwpyZ1RhNABdvM1FXmt3UeSpSAXXQH3XwGUX5CQSwMGsEvT2RTaFPpp",
  "key22": "2ZAqozGDsbynAGVRgV9CjDq7PPwCME8Mdz3qUweTKMTT29YjrwZrsBpQoPSUeKXVNsvX5n7tyozsdNPnSfLRYey",
  "key23": "3FoV8UNxZK7g5Vvt2X6HVq6N4WSip3nuuM7erNJEP5bWHHmdrDcnPh1VJFZmNinK1SNvbjV6mb9soAo6v7rzSKUv",
  "key24": "56VRb9dB5bHCK1rWhKtMLPEqxssJbEgiamWpzcESd6icTnTvG8P7wTxWCEBkJoMwWpESJ66Un4FPqkXCBfkoRGmL",
  "key25": "2LRd4zJ3GkBNVdi2mHQDXUWRmniKN57FVjAB1fyLGgjMYUXqvG3jnm6JkNZHW7poJXEqQe7UmsQEbSaiK6Rg8iPK",
  "key26": "4jXpQXZur8eg8vsLxGRetzhSVUfuiiioJWWHKsEXZ5mLD5SrpVaXcoTtgzSjqMZqw51TcprSGoWTKE4jV65XqfWC",
  "key27": "P34MoFK18bZVDBGHnyy22QX4udTZcCmxhybqseQdFercxv9ePeJvXvfNSdVsMjLmusi8b38fNeP7FUD79bniYkd",
  "key28": "Xwzi8Pd1BA7qTFsirLWeUQmRmLi6teUGEBBmWaW9qBiJ7rwsPjZg2zvgLWusGhovGmXtaJ7ukYqTviHRxJBMZcq",
  "key29": "4VFrvh1TQwJJi3RSTnpqCTVsAeApcvuMEZbXf457sjkovvc9ZVNB51osDxy1csPXjgHcY85xk1snaUTDNQxHEBrd",
  "key30": "zFuCEsgynygh4tSeCxrQjwFi23Knti1HztwqdTA5cYYNMVCP6LDpyWRVvHPmuSCxE81VgcAFiQLTSRtoiike3GU",
  "key31": "5DMj3W8XehHjKJ9msxi5e1PDXYFGftvpM5mLyBr912ZJzEsfcqWcTfDtmPbgtYvTPymFzWgAWQYsEjw2y9NmbZua",
  "key32": "5pkfvKC9cCr9hw9Wf8cgdX9eHT3RpWHFjukrg6S8K8MUYMXZwrUVxkTxrkhSTX32S9yv5uxTEe5dzPiPk6iUXxnW",
  "key33": "3LkJ75YZ78ngTPcWCMXE6nLivs6fv8sKK926k4zTLr4Mkrjc9UznUzKbusFZ7V9S5BuhGnupmKoMGUfqgLFa3S2G",
  "key34": "3yfui8efCBmR22CGQ8W41vhus5j2JT8CjLcyWf5b8DCF6nxqg9KqiREsamMvgcQQcJY4EuV4ZMV6c85jqsLBRB2A",
  "key35": "3JF6gQZYWCRzUqWyXy5m9WKegEsR7RmuKHmKHJykR1tY76afLhvqM7B2KZ2AE6We6YUtfG8Cti1y18B6jVH8sT1R",
  "key36": "4HPSC6SpfmHiN8xRiR3wR7DHmLd1oLMkosPsm4bWd438gWcxYVuW6U54nP1kpvPqXkKp8y6zrkxiAieQ45bdi5AT",
  "key37": "3CXxHBtmrqUapAwmDZhs5fAAgykXkDtDErJbH13pcrFqJWZBhSbowuzVPkFsqugSi8HYitdRFkuSGPpUxvZobnRJ",
  "key38": "4pAh11eDept3Zn5Fxwn56hkShHQzFb5wxMHtNMaxVCta4RQZ4Tkb6EG1qU8zwzShSL45LVEdERahy5psFsrDpBmh",
  "key39": "t94YzYvJKjJ2GDWjMt3fDmQ3zqdBKQmFcGAKgvEoe9pcWQp68YhMoDwmMSDGhTvrPBRqWiTkVkmgbkCqWF3aQzL",
  "key40": "4oGPf3hnc4wNZACa67PxiaYQjccN5ymvbDq6hS4mmRRL7pTg2qCSMVu4hiwgYcNu9CkTBa3wfRS3G7jCJVZKvoNY",
  "key41": "2a278AygNwuCzoL3memY9Gxf4fVBvuRExYS3cj9iKCVjxNrKQdqzXb6AxwgwPsDr6dreU4iQgdzd67FDGTMfsREB"
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
