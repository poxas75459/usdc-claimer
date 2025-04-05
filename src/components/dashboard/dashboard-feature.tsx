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
    "3k8UPvbnHhpbTCecTadHc61zNTjmphNy5tTLtH9qbcG8UPSvDuP5PDWWP3eZJgxYGEU1Yu8yVnALuEnnFYpyGxLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E2t6Un59qNC4sSudUCRqbVWDaD4rYssBJzxnVNbvWypwVjT1YmqKwfmwGTC5FMxP2j6pWd6HY2TyLUNxTo1a1L2",
  "key1": "Bb8euqtDUvnYpT5NXMjfJzjvxwjoFgc4wse3yuZjHmEgBcykWiPRUbYwcoMdmwJCSTYU3zCRstmB8npJvybw51P",
  "key2": "AtTyyvAf1GhVcc3c1AJbsKNfNHUA5TmBQo1zgXZNjoCLN3aa6D6uTWckRxRv5nP9WnzHrjtbni5XtVxd6uYXQhm",
  "key3": "4UPYXmhQi2RBUHhmRjy34w9BCBXBrtLHRQSWRH11WM9JUMcL9AxNUsnRN7E1rXyAixGDotrm8tpuaAMp8pZLmHuV",
  "key4": "4coz4qbaGDpVHTLVNUXifhWNqv7epsRPWCgd99gAtkTC7bA1BTxJCMgTPEevo1c7xwUu7PBbQJxLak5zSZMgS52W",
  "key5": "psxvtXPVKwH1XSJqdvUvgeAzCpb8yBExTNsp7BAXxKRcxvcbUvjf5QYVcowBNJfMDxP2on6rt6MeNEGxD4jGLbQ",
  "key6": "u8EAVAqK8GysWi4JhjN6DrTG8f5ZUhPy2aj1wYHYwxDmLX4YyideeGmZMKu6HsLhvSJpwcmz94dqLeN6wvxRe6y",
  "key7": "2ToKxuJGYj48kBbX2NYg3BprsP2pysoSrPMLmGig1qzoz4JVTKzoXon7skyfJuXBmyfZxWhykba1C1BHfbky72uU",
  "key8": "33izAtXj3daehYQ3yruyEXZYgmuJR1CcbyoXqiB1ECMRMFH7go2wwDEkEZ18Wez255S9eEj82F6LM2Q3WVrqwhbj",
  "key9": "XTFXHP16RAHuoFUSwj4RWYWNM93pnwsciekYv4BzWiLpX6r3L9JjJukGzknZHUvT8AnTZdMrXufJD32BFuiyAq4",
  "key10": "5fcXFKL7vhy3wyuwQiZundBsbT7koyHDTszc1zS89p5WgT6XZoXHwAxq9rDFUgPhxysJ5GghoN1xWZB37YoHUx29",
  "key11": "5uBbKxLSGV4TNzJyrXKAAqaA2TicnmrFYpRnNkZxPTrCXqnk1bjjBVEG5N4BVZ3Qk1zkpansmSySc1yTay1LkYZP",
  "key12": "3SNRAdgAX3QpTbPb9NwSj9c75tZQLG8bT4ZLP2afMnZaVdu1Jwd9QeAk2gCjKVMdnSgUWcoxHZ19vKfsXgrWkErf",
  "key13": "xCcWok7TW5gyyBZRYuLNQB4JejVdWx8MT3EuMqKifoftsUS3TCMDrSE1UcKzFc58J6cnwMazv47fxUc46JYCwPY",
  "key14": "5kCKhtHLnJjZVJ6TJRmYL2XHkK5eQagsXCkBVtV2zhubZGEDcQZnmRiGB2dHj7fkc953tEq9bgJNYyukuwopRthy",
  "key15": "3keKGw71Hi7sS2Fx9ou7hGctKLjKxAax8eCPYbeZzuJbrkPgvKqYWEgguUnpEQWpGMLor9Z69Zyk2XiNXgEyS9c",
  "key16": "4QtXubQKqr93jGd9majJP7ttaSghoZ4Wa6t67hDSEocjUhxpjkMAgqfNnmhHyUGZLHvcx6JkDTSZHmfvetsq8YSi",
  "key17": "GjAcfucD5vf1BuhxEHkTSKp5mKmLxLtmLkQ17KNCTTKX6YoCf3kqMF8VGFwsuWu2TVwvmNX9mdaRjAoNxHnQgrd",
  "key18": "67oCiXmfFK11c5vJZzV4dek83L7Rdo8pWaw5T39cgaAhnt78MngjnCjLNwCR9pJQihgYkEyvmST79D2YdWZnKwS8",
  "key19": "NeSJV1HhhyckvW3fWjD6NKDSSne7CaDewzETF65jxVRm9VyKsmMHfe294XvT4TM3A968WHT8eRp8F31cDmRmajk",
  "key20": "5soAkG7Y3ZdvKrLDdAHbsHmbiisLUDgQ6YSC5j4VvoRAc8MhsTiTBaGyLmfgvNkyLN8DE2xtDPF6eq1LcuU51c59",
  "key21": "5FBZ9YxjSJGDrMqKeKQFJb3fBATQrdzL47jSV7WRZgNtzeVLpTDtFLKZDjiYnj3bWt72NxHkYCVqbtaR2v4wX4Gw",
  "key22": "5wwiYMCS5j6SsT5r3vLPG3N6jwGtEmc8fG3ZGZvuTfVHXq1NuXWSszfPTgzajVfQq8fGboATSVZYbc794svtpFZ2",
  "key23": "yQ8dQyDidNYw5RL8cmkfCCwYrszAWpE3MBiMrhVwE1vNAJ3b6iSMrkvBSuZE8os1GMmkiAeQPJZ8qho74jYAHyY",
  "key24": "7rYeLnHqKexAj38QCdvDqhCnA7SaUGurvo7zcfYc58vuPHaDGrL89QEh2n6Ugn7JFS191ZmK9zXmDLUDbh6sWeQ",
  "key25": "3B6T38HAzksSoTzjGywVN1nYApRrKeLgEiCMKU3DgYrWxw1V2AqsMMZZC51ydu79C8BjYwi3fSrT6Si9N5XCr2rK",
  "key26": "3UCVbKMEbLX4LyufzM9hZAry4EzbEKa4CDiEXLyXwvesLJsweWtZBzGzUgBmGczasUt7vhCiR9Vz1Tfy6EpcxzEs",
  "key27": "3KahfHQKbfqGJrtuxGKrzYgosoofgj8aF3JNfKXvYqBzxjCjZ2pPJYBy3Azceo8h3y1qZQvyaDqeXb8nTzvTy1tv",
  "key28": "37SYhJUL3h14ippgaYttkx6qjXuoxsHB46iGUx4ThiTD4wmfLSyBsDJ7Ga9TvrqxkZMA1291wgM3PooxYeCrULzF",
  "key29": "AVEQ5i71T1Rg88zyymce4oMJPZ9dQ2i8MUZEuf4rmSxJuenVm1yY5vUaj2Ke2mgTni1FFy1w6W22wLjeRSWoynA",
  "key30": "4ZExDYL9UjxEsrzjR5zHkwTpy1tB6beBzv4kxRftdtw1kfkD1MQ8n1ijXnvy4MCshX3tLPHTcEwMh4WgUoo4BK8j",
  "key31": "3AL23Zj54VUDCJKooyM1eeiUZUeACbvD9agBDyRyPjNAHVjwvdg2uX3ksHLdBSq3F3UikZG3yrRyKJeBAksHmjKn",
  "key32": "2jTcffBd2VfnVVEXuAFASBLEY6BbfyDxeHzbp38t6XyHumq5V4RM1r7Ar2NzUwYSbGPWMkxbfbtKcM6jNkWupW87",
  "key33": "8HtDG587iCceZxcGwB5RirhXatUmrsf6x5PhyL9MjpzcGAAy8muctsHrw8NR6j9erXBucCJsbh15rjcdppVTSam",
  "key34": "5k3Nk9AGFszWw9qgMoiqbY91nPdcxPofdiut3AFmvkPzX8XoHfmv8rv5k6JCVSa5Lm39x9XyHrwi6nGYfaDcoHLT",
  "key35": "5yVaG3x6UKR62k3xC5JmukwwbkhRcbn81duzNv55dV9GyiR1Kx9NcxZiXHP7eayvzkLndbuVPLesRW9Qhwbhb3Kc",
  "key36": "uRYDXpCk9RVithdJqSRUhgUCrAjTV3LL9CfoJTaogixCgYjGVFb8icyEDT7CtHizqubQECXhaS2pLLDHt2gMZA9",
  "key37": "2JxNoBvfXtwq1aqJbVRnGqCtvbvLzydu1QFiAwag7eEbWiNqAvkMQXVey47Jv5ZbDze9WYcACyL28sBNaGJipuyf",
  "key38": "4VD5HdzhhhhwfCRsJuksCTxgt2n1uc3uSv57wv2E7RGdwxvfuYmMTDr3K6XAFwszFk9zuLY47wiXD8Pks1eHaUti",
  "key39": "vNHYEH8ruszJhhmd1zPA7Kec54NSXr8pFpbSqs7b2efTTGRRd91QCzp6BB1NSF4Zx9iEZCsG92nUpPUZ6wNSgnn",
  "key40": "44Ni92LHX5pQAw3TN3rwQqg9gtnttdEwztGk1ycEF1Z9uqZaj3Xrk7oSM688nduoobsDNDu48SGbTDpgYSSu6SXM",
  "key41": "QktNPfk8SZgCRDR2ChMeXWEjeBe5JJ9P6r3rmLawArD64pQv12qkZoyMoMZiqtfjSNekp9vKqeaVsMCZTQYiEqV",
  "key42": "2oX7hFrcZ4VnPP6shZn1t2E6WiAd5EcfZ2eY8Pd44YYxpndpreUcE41H63zB9X8eHyrS8dmPgzTGEbqkVZNJ6LAk",
  "key43": "4Yr5prLXr8za4zNN1TroRax75b5xyEDkHYnsAxA7Zk4o5YauER1giPTC1mUJvsDNwuKdp7E8srcM1tJ4hrC7Lti9",
  "key44": "2oeDijcod5MKPf7yQPYtVBAwArGn7MqqavjzgCPfCqCKV5N847AYg8eWwm1nqv1wpqiLSadk1NyYfZdxkCuQfn62",
  "key45": "5GsZpJ7wGvQtVLiFX5VwebqpCYHR7cvCgRgQTnojTmJxozWqLs54Wr1o4LS9Lb1ZjByZKDTWbkFQRe6dtMkDztb7"
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
