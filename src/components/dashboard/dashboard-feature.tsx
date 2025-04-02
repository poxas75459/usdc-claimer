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
    "2zGAEJc5d9qWBLnUz73Vsbmha2ZQTMhG31rkbhXuq1tzcXR5CapkmFzYVUTVmBdPsTmzD2Wyigh9BZZcPwNTqNxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NdciYgukmmyfrCPTw9i5V6WfYJBqKQ5SsGDu5ivWG5KNVJPmzjVrvcHVEhjCi2zJ23f3GneKyUERM8vKECEC7Lb",
  "key1": "49159AFagXaZDSQKxwPQDBZtV3qVmDhcZQrbHmY1bwvwNtS6ZN4iLyvPtc6KBpvMYy2aaffpqR4hK2jF8V8Xv8G1",
  "key2": "4eWkvDfpNLJi1D4uHY9zSPDM9WsA77onToWsoPmt3Kcy3gTjY6gpQkttLw1mQonFkhfmojKWvxHEeBdUFTmawT6k",
  "key3": "2Wn24x7Z6J3fX4iquCayLgoSsCeuihujSAPbFXB2NqcujpP7McyjfL7RdLkfaoVMncDkzCG2e7nZ7ed8ide55DWH",
  "key4": "35Exg9qnfntGTEW89yAJWmuX7gzQYYJdqiKuh9T21er5RigWnhxhHDbB6caem5AQw3ZmQXkc57nCzruojXNHSogW",
  "key5": "5PsmJ6yNgsW4gH6DeyuFsEtUC5qPwzk1QwHeeZEMbZV5A6JXJ4TK2g1hy8aLsiFSARKYnzLQeqcoDAZacS5LRUQZ",
  "key6": "bfE9Q6wkJV5haM7Sn7JRQgCtL3aW925ywsCJiUkLva3FzVDmF3a5ZGDbqURfSCGb5UAkTARvwZ4rNkHXR9oPo2e",
  "key7": "2fHPwPXCY3mt4qsdPTjqEzMPt32ppVxnSsQ9YAeC95gjRLkT1R3UJTjMEzxsasr6Fu88qywe9vWKcqcMzRdSBhJV",
  "key8": "3niL9D5pv8ic2mNev6s7nTF5drDss5q8QexqaXycE8Uxz1oEuV9BsMXKRDuEjgRhiTqDaC4TZUydY7jFjNpBp2QN",
  "key9": "5SJVFeJntP9T9WD2muWxkySkHicAeaNdsgXYXckvCCYwwQ4CzM3xmkRXdcEnYguWeSDjiJ5ob4ddCAMxnLwjWehm",
  "key10": "5F2nqVztGK4PTJLTx8N3noCekgzZn2dSzgTfGdBnpww2DwQq1MpJd94emiYB4zjss8Gqa7mdsLD2M3x1SYmbS8B4",
  "key11": "5PtEZ6MDjt2LjgbiJj6mvoXkMqH4ysJS25Zn2B3Abh5XxWEf983t7peuFxsTXAqjM5kzxE6wmJdewxcKSb19aNav",
  "key12": "2ga9iRPCRV16Qbz6FZ4hN8PrDcPgnXYr8FDsMGayVeFEpSBgQi5gqXcS29xgEz45ukwmbuv4P7fcqNUeafHCZ6Lt",
  "key13": "237cfPBTrq63TTUspJpMaTmcxBEsE3SLRCVs8ByZ1mL479Cg7huGRUbbJHwrosM62ha9MNkCkZ9c2B5ntaN9yYfW",
  "key14": "5GC2gPVBNU8v3L5bJytnrPofafr9ZPGM5sJUkk4UwQQaiN4og6axDzWyUqFyDW5Xn74T8VJwZEAfNBezEPgW26y6",
  "key15": "5691yiyAgchhZUc84rjzhUiy7P3obWez6PgQh44qGx9evVdz2HQVbnTZ3MsbiyFQR2n6rvu2wCEkbFGLEdcXyvXg",
  "key16": "3NpNJeDkmDDntfYr3YH7aSDza1nZHNbTL13trZ74v4jAhxX6B3L9pppkefVyEERPs1HDPejfSYXn3DE68Sj4R2pe",
  "key17": "dJk5Lff2W4fK9eWQhZix6sPt9RDB4BdVHctPzHykUXqKvrb5gthscRKpC9mmEQqk7mxc4v2kazkVDvMtzuWJaFi",
  "key18": "48wV5vZxQJ8XnXsDhWfM5HBUS3MbLB1appf7fA4ZHnH7M5A87Dkugb7utT2bH62gMwWraAoA5QdMvRWo85wsP5KU",
  "key19": "4iaEZ7QosXHEcWyZAuBUK2weRxyYcDGv9y1miHFEBJkGcTJwb5uYsbKFTmadmBnLjGyfuHjRzNm2CTi1wuY5MA8e",
  "key20": "3kiNbWEyTho5hr1Hgj3nXh6Xnv3CtuCLzmYvc69FFokXEp1NtAEuXifBKyUFJfUamxu4zxQzUt48szr29BBSq857",
  "key21": "5LTfNYr7NXaVfp7gDvczaitfnyGDdmTuwDwfwrX2BdL4oVNCqz3XuWo64zDaLwSGQTawBXbAdx9Znp2gVVgqejwh",
  "key22": "44a59X3FDA1TjnwjbEpaYPs6Bn8jqeSqpjTvKBcGFVGYVHk8hRkjFxPNz5QXRNoQEsv1UYctVjDJkK6YW8AZjsXB",
  "key23": "582T1G8j1TnKSwr79ZVzD6tbySfQ9qSkN9QLfJ1U9ZiaKvoxCk4kzeaDHCjFsnz9gPwjHrgr6iWXraZh1JUMDZLV",
  "key24": "5eeHkYDseUAjJ8Zbzf8feNF29KShfsJdbAhxH7FrkthhyUpJ9mAczoLtQW55Sov1yR2Srv3EuGgB8WbLPxtwBWq2",
  "key25": "2ET3cEbNQfDbo3xdbSbykSkxQV1kkfQMqo7F3EHVdNsGDLQgPAo9w1wAsaifE7odKW5uuc184cM5JJRQk5qBbC83",
  "key26": "2rroQzXZ9ryQsN3VRTkXEUcWjBmSW7DDiesjKCRBUMMkGzD3WhpWkZcQiTfjEngu3xv2e7ofML1nd79TFkXh5Yng",
  "key27": "564nCzZwFgFCCq2sF7W6EtKRWkHoxaquxMsc4Zgc5gyU2YSrV1zdryVKWZb3fcuSrWKkY9RBuVbU7NwskVbo64Ra",
  "key28": "gNMEufA6dcED7VUGhjhi2mby9W8mvpkj854HDDeD3WUuzgfsQT3oP2HFStUECZr5kMEZfkv1gksjDjorNFgF9sU",
  "key29": "4fqwKzHcxtDXDywryNwhr4x5sshGoCuesRroyxmkk2en94i5R6U8Btb7gAu8QAxY8HJ2SxWRq4tmW3YCuyPwxz6Z",
  "key30": "ukMjWD6mXPFCouZ7XM6UDfZpUGKUvGeP1rcsod8SBZieMmFaSRPngCZ32JoQEkzLm8vaRT7r1z4SFk7rYhN7Sz6",
  "key31": "38dL3H1WYLuBxfzU4b8SU66s1isY2bkMVHywLCm2gL7jDpXRQzqwuRYvXK4dE6K1RPhFGBLDtM1p2LEMzN7F6cs3",
  "key32": "q7821RjYCmHHpD4tvnVczDqgFZBiw55KZFnwsD3Yt5KXNVzZZL1A2X3ChCAwRZ2dSNbqMr3kUiGfDQxG9yusrCu",
  "key33": "415CBr1b8mgpPH3mR2b4AdoWPoByPmue4egstesWMYpJSnWp9DdkJ5KUSWQ5Bvf5hkh5VinC1k1NgoqMjsyp75wD",
  "key34": "2D9x5vaTCMK6QxLKfjpbegqDEn5BTF5f5j1NCravrJJGbQB7X5JozgE9X5k98htDEvkQqporrUw9FG5aswiSvc7b",
  "key35": "4iagadqaumhk6qhxSYHZXdjFktwZTQn9B3pvRjGsMYsHGbcEA4jkEqiKjJTNDoG1bBKcjNHAfJbnpb33ny4xJNG8",
  "key36": "st5MZm8z8KZUfSAHEPagAt3NVCzKMX2GeiAhJThhr9vjNVCWAP1DenPxGyTeRexYQnegGfEeNT7jJdV1b9i9tC1",
  "key37": "63BAoCKru7JLQwDKiyRdDUmhq1hB4yBxPDPWSHKRBhKvNn2UHdP1TUjRsVHiYDL1AabPWWrDLhiYQ4XDfQQbUjrN",
  "key38": "4YvTGooVdctRs2LTYmPK2W7ChZib1d27s8XELm4mKaPKovZ1x6r4e1Qz85w5A1JyiUk9yFtZgjDLg4kepwqNJLeu",
  "key39": "63f3BbCJJE22by3VrpHP6aVHX6c1qYbM5n2wmwkct8L8DhodMERYfmBNwKRcyjJHnMJh2EjZKaGwd9f5L8whvXEV",
  "key40": "4yPKxfPWX6AmRv2HtNYat2nnpPM3Gzd429DqdBVSpCwzsTn2ULLCyLHDPz18MMDumdryKTuUYdoYULddnGQzwtBs",
  "key41": "5BA6EtwFLD14L6emxFo2awzLFwqdPgGXAhUbpiAXvouepBtwChRFPSiMuLi7KCofzRSvRVcBCB3NU2bKtRXmxXSG",
  "key42": "ivFfnhgLi2v853fSCZUqzFRJ6sLcQLJxpzWACYcZFPsfBqyBFotQ4pHhhX921LfMdvmCP58XhyKNEVeTWLofQGr",
  "key43": "2YpiW4oC5vuPzriVgthe4GVQxWnVDojqFHwXK3r3LBvKypmnVkwYDH2NPQRFu8P1h2Dv5bfybQu2GXbj5bjWhWJN",
  "key44": "67pYFGPbNZJVVAENqHiyLcWqFzynQkDXC4n3M7AaHCbDUk3kK55Z2NHbURsFzhwe2Lt3UU7SXMfHnAEQ8oamckjp",
  "key45": "4CS6jgRme6xoXRz12NmhCUxwcXU6jWjDLq3VN7MjJm6rPsHpBDHz8AvjGjRfRQZDaNhv1epJQr25godVVGtSgewa",
  "key46": "3Nb3ZXeriyggJ2pTL2cBipkEpHBYwkE31p8PL1gqSJxaWBJRW4EVcBc5iETWTDmTmKFVVdosfSUtvaFEqHDVBWfs",
  "key47": "4GFq95ZpRRJpGdyE6CjENhHiewK2tAqNYfDtR7NYQd6pNQ1u52KCRqf9BWsooeepS1qpGD3ZYnUorzXKbjnmVQgD"
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
