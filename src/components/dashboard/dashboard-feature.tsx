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
    "5dkJPTbCWavG28pdu7ouc8qgboGaE6AnoJgYHkuGyfKVXqYw861FfMntV1L7NVqZsSa2adLz7LpNXTdBFQVXmHK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rdYfNaoz8mfk8TXjyvBMsZ6bdqwsec4uuG72GiHYaGXXoLKoQok8gWMxr7xMi4cTau7nEJLKSgveTQ5yNkEL8Ek",
  "key1": "47GDBfWkQj1gPnhEcpEZQJC7zdsh5h78Br7HHLDViTtfX5s2cawKspyShgZnGKiS9Et2EYaz2LKnCRrQrMyeTrg2",
  "key2": "2Ki477QSDGJNSgfsc4E7auArZSYCqmPs5PohQtQYgfRzG6uP5Khzwdps9QjLqwvRtuRmW6KNjKbnM76aELoM6Z6n",
  "key3": "5PmwJbA7h4beD1o9EbRweULmLKgRx6f8vaR4Uebzhnb7TdbVJYCp9SJnDebmP6M5ZUZtE9hjPaWjuPAPCnRLUkyh",
  "key4": "2Q9yaPg4Fti8sU2jVk6SXoogDgYGaGmB6wtnBKq3AKSY6VZHGJU3GUppdYrdR1nwF1HnQJksJKjcS14dRhf6ceEd",
  "key5": "3VM9wBFQKqsnU3bM1sVwfjVxUwSNSeeDWYSj4vsN8oMBGo7mc4TgvnVCy5Nr2XVjULm3sYgNimWiSAei3d9dwoHu",
  "key6": "XrxMCkutS4FhVRoj2RWZdQyZee38kBdqj3VuQSdEZUgGz6zXJzrAypY43fTbY1YKjCmtFYQt5VJ6FmV1MmkXBzP",
  "key7": "r7VPBygdokUfUpfAPXF3zisGZJWfABgToFHveq5rr5MQMJXMjKPWQKGQhobMXzuXHS4XtUyFmTED8NDEhaAG7P3",
  "key8": "vWci5zoJpJx6PTZureSJLuT6toGBQ8nyBbQ4RDyR8RMXkrE8Gi4xBhNa7BPfXzHCFAqwva8qkHv1Ef7ezyfnzbY",
  "key9": "2xfBwYN5wrjXe1SD1jUSdSd3uSYmuwDNys5wqmHb3qykUxw9y39rxg8Ae5dsnZ5AViyk35REYpvmpJFfxWPSqJL6",
  "key10": "3h9xxtMGi4KAD2UHf3TgWfmrfP7gK5foD4gL16pLvH7Wm8eXL66RFKveaSjCqFEUqUVGVpJDEdWpgiQ36NqXhnsw",
  "key11": "2ZYtfPjVt7Fg4q9MqUTQyAbuiBmmWCMHB55PtafZ9EbCSufoL1QH3Km8oVa2oc5BNCM34XXTjuw9Ffbrvgdd5iFZ",
  "key12": "eYnsXx4XGGCDnmRxu2yhhy5gkbs597RTBFhbyQYh4E179Jdyf5yG4yg3pJBaySWtjWNMfGdFarcQqbEozUx2u8U",
  "key13": "47EiH121aabR8e56VFJ8pD7fN817JDMXsppzeWJMeGuqcUHSXepJxaUYwkcFpC8y4ma6tbXJqUy4bLW12wCAtYk6",
  "key14": "2HbFj2a4vus6aAkxukqhUhStoVLezXN24oFdaBS3k7ZqxbHUfgcvQANN5hZ9Da2oFYMcwxTvTQcRiwfph2uDNRck",
  "key15": "4Sk9RCyFKZQuSsF8douqruBaNG8PtGiqYmSCtAmh6RBVaJrSp23ZF7k82Gkr1zmSE6rmF4s5K4rnvsJNLx7vtk8n",
  "key16": "4TsVraVhxJ5LzX8BKs8KtzPxmkRoAeGyYShUVTwVEdkpwKf9EGghkrCVyH6bFooZ81mo5C1qWaGryfMdychxESy",
  "key17": "3QL3s7P8dppcX4JPSJRFwc88wg7vNuwmLPrr1mFggdzWBQyJe4qPsdCHQu1fkCeqJZYguLaPYjhMNNzc922bSwGW",
  "key18": "QTjKHfpmrqdhcz8CVmVdfQaN7GFra7Vw5LAuHAVrq6k2iu68Vhs8X62qJLaee2zApXPiRfpgEMdZMDVc9hedY5h",
  "key19": "3c6YwbaqXw9UEWVbPcSYKYhzr8hpLfCiH9ERdouecvPqhzqfa913L9bbECWxPdagr9h5Qdcy7sUDpbPKqY2MPqX9",
  "key20": "477BRWAZYmNT7WudQCDvR3cdHTrv63mhnYb3Hxg1ryTxNc4HQoExBSu5KnWTfuhTfqfZqF9AHogKFunE3mogqAtA",
  "key21": "2ojwFcpWH6h1JNG7Fi7mKFnrBBjpHsWQCp585Ey5VLeKN69YAHkQQAbsD1JiKzzgRPP943V6BEzrCTyuvtZvbPsu",
  "key22": "2ard5zD29ZzbJqtgdWfEN7SEZymbTK1FwAfpzqbMek9oKtuoZuorHFMHm43GhWqfuU6M7EEfvCq5Vx8Dz72LPFbe",
  "key23": "21QmDDFRV3c9X5stELFvikra7nx43TSpJSkGMukDg1Nyr6J2P1reTUsygqEeY5qHzsaYcLFoPtD6umLRZCjFXLzn",
  "key24": "5fACThPadJVgU3CkY6gpd7c6ArwtDcvg1WJZEyRsBJgZaiz82hspSjmd3ihZbPE1uQ46P1fNP4tuceqeSibnozta",
  "key25": "2jpdSVwvMbya2yd2fxqSyZDovvQFFbkqaDsnYtzVRJqEwUBuoNXyC9aDTDxUjVHgJ3zZAGBCeqtetX9Z8iN58CNF",
  "key26": "4GAQEKKxVRfMr16PaPaaVqcvHB5LRXCrFiA2b5BMKk4APrbKhkpyrovc8VFAGxrhfYNsfHVQ5p1rk5az4qYC6Wx8",
  "key27": "45qRRgh3B6AvC8nKyWDggUkrgRwVaN6gPB26ocWSivdqbP9A57DtoysunzCZDhzeixUttzrYfLrqHnjVMWUnLEjT",
  "key28": "3LDWjdyCze1KAz7LdF2teVB7SqVcuVkJCZPmnQsgXSvd9ZxJQhVFLPpBaCqtSpETnib5zV5bwH2dW3qZ8EQG1Qa2",
  "key29": "5yfgXpGHZUcxmFdz6CdLcJfsHMWuo6xjbJ3QaGkeCQkhhaghkci4LYRuohSK4Dv3tVxj8yAxWAg4RrKd86fEzvg3",
  "key30": "4LjhYyvE7pid9VuXX6yoyFZMsCDtZDK5WjyquZwQyGg526DWKudMbBqFsAayXnDUbY1CmCiauWKyDCR7ttvN5Wjw",
  "key31": "5rqkHe3h349bf1aVGPFQJLDgUYEbtYA7TNpQLFEUAYoJuDmH3Tqvvv7zT43FNJujQPvrA3SdW7gA9RGaJARLhRZS",
  "key32": "2KJf8RBDCUuzfuuyaAWL6vrfkdDNnzwy5Fd2ZvazZUeq1ebxpoJJ4ZG4hw5tUeUQUHHbHuYhpk3yfiXMBFY8Xcyj",
  "key33": "2HuG3mDMzkNUvjFLwUJskTU8LUgX5WHe31ApvCHrY35TUhK52JnaiQAiKy7uJYLNxfnz8XFjLZzWWrJoNBVz1tdV",
  "key34": "3Ko2UvXmycXofrFF5shXCJnHGgBMUofXjYAd1oTjnZgLJPvuyvcH1dSv77SGbXZ7NvBBDxKJ5LP8ARL8zFhDz8WG",
  "key35": "5JFbXwue37mtNSe9Tdu76r6xsWXzwHMYryvNo5Duony2GeG9kK8ibE6gEA6GXQua8VSyCmmFjbKQvycFgFzhmrbC",
  "key36": "57oJ6o1vFcJcaYpqYQhGwHC5QSmkrWAGtEnjzU5XAJDe1zJwQHmPYnRF5Cjzhw2ccW2hxWnpZTUiS7gPi3XCxaDN",
  "key37": "4q2LE5d8vHx3SX8AaX4TUCnwRs2iYtxoFZPhXzXNY8P12gX6LHjEdKaXofHNmna7WhnruUsy8mUysu3MXiZzipcZ"
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
