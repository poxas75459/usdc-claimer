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
    "3pxVUhjMgecjzdEGPJ6PhD4VUSsMUbuAgmKH2Syq5vhhuUdTLivak4vBKK1qdmNnBoUHesB6TvSNQtRud3NEJTTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6FsJCyrBC8rZrTZgoZZ56z5dr9tCypRKRQs7s5tZDgqBdvfnp9qGHDcMHyJsKPYa6QT5egwGrDKu6nrmLB5sQXS",
  "key1": "2RpWLsh1d3ygx6BL7B6i9xBqre64M6aoXa2ekxdNpVRXph1w4LikcmB1xGabJemp1331tufxMdqyPFLWb7Jwwthe",
  "key2": "3sf7qoDKyjgiS9kg9MuCF8JtzsdXfPfxKHgiN9UAr2jGTonPocb8uuctrWqZE19DtBtBWmCv1cPSuevQ5TevGgFt",
  "key3": "5catkJC1vRr2qETXnWPeb5W7ufikWMTJzqvDBCscnPJaYtpdpB9gRg1cPEX8fGNwga5wGVk7EXMBm4SRvgsNUFnS",
  "key4": "3dyChdyfB6YUyjuC6wuJT8fvH9zy2e3jzTSDcWPD51wDWL9fDkfCMTsdvbk3FfSdrgDUvR9Hxu5AzznRNegcYuQ",
  "key5": "kVMMw2w6ufguMSizFiy4Pbqjj8bqK4tLDbjVZYcw8isnS6Jt3ttcRns3Y115wvwv9YPW4qHw5MBd2Kgq8kS3tSL",
  "key6": "5WEReL5uPwuoa9hcgWWdgae7jzoB2wkjP8tEHNoHaYApZb5nD4HNE8CLfbqALdxPucboC3KN1QpdkWA27S6rfVJ1",
  "key7": "4qnFzQ1BATpe967SseCgfkhZePMb6A4r6jSYbuetznM27Qhu61TbaTojugJrZBHPnMEoRvHWGvz2MT1WqvCtGCL",
  "key8": "2ZkgBjbpcxjTMovUQefF5DrwJj1ycvxuR8GQFnt4sSfguES1LEvtEE2EGvBY2rYxAxvbmduTrHG2ZgmUfbuNDPUZ",
  "key9": "27H6yW3hDNnLFHwiM68ALvETdzLYB6uoVzpLk9nEEyeqzNtVQExgdb7BX4tWhmcfYifqeJTjHv3rAm1D4baegd9B",
  "key10": "4qWU6aUySbwbibKwgzMV9Wjfu3RwzcT73W6WH1ieGUNNdu29oyFEYaBjKws74gbRAJDHd7Xbtb9QCyL7BoER6AeM",
  "key11": "3KNqJic19Ja912g2FhPVctHsATadVZbmSQ3cH6jbQJLRnEUHbyFX1xsakLyPWXxbArkkWTV9DdtSNmhHcSyXZ1h1",
  "key12": "3Bo9bRzi3DRi2NiyYbNSaQKsz1AHGH5hWrnM1LLx3iDUY1V8M5397ojGr56Hy3cLq3rDV9C3GWeDz8zrMQSDpKYC",
  "key13": "3xgNKPiqjgeUSvYu3wmM2Sv13SsBNg2XZ2y2jqv6uxEDLFncNcz8ginu4S5KDn2jGFZb28EQtEPoBz7i9biUpWCo",
  "key14": "PWUjyYicNduJ39ohAaea1bsGVhi7EabWsBXsfwE7kDuRZJ8jsfQq2mN2fDhug1a3iCu24BJuMKdQzEaZCY1PLJT",
  "key15": "4SpuK5w7LpmK8hPfJjPCGCxwQeLvXLG6d7PN7wnuoqTo65NBYUqzcgfNnxn99zpQvidgM8p21aoNi4VvLgpLuhAH",
  "key16": "4iLpwMi6MWVcxE4VMbDA2x32yRdXob7pWiroPaMKxsknTvNrwiB1VE6NVdfqKdikFuNNEAPNS1RLJPWstvRu5E6r",
  "key17": "4g59ZMsQ8K1s9xm7JhMGFfQDrRmDmgB6e1Bw9ifJ1VmVUjYLqevx8ZLSE8tatyJecqn68AAywzC7hMRMz388wUAR",
  "key18": "66iqQUk27jGweR4cZHinjAhjvArZ17NquJyCreASzgkfo1fbhsGb4e3xntSw4xAzVY94wMgqsWtAxrSuvShtk5t3",
  "key19": "45ZSTjeK8GhvGLGPJY1m4HFkHqmDndjfAeW92dtezwdBZkAxYfzsVr8FBtUkm69t4yqkA3Y81PZwmYncPZBYJtQt",
  "key20": "4uy3c5p3zL3JSu85oC5wmkbCmSzF7tm6WHiHFL6LNjHSmsbPF5eGz1DwDDxqAZLmXELXahM9195eJn3TpgBqpzDd",
  "key21": "2Tm4F7MLQ8wqTaGNJZ3uPq8anXXmJv2jcQEtrmSxHyoATpyUYZ6iAegVb2aqwUrZRSiG42TPNoZhzpAMfueyZpXw",
  "key22": "31ivCCwfFBSFU8nQKRagk3wnzVYBWrmhRSXb41Ebodr9fkUVmXWbfbigxELGx3vAZvFMmfXvAWmyHzv5vvNS3i1e",
  "key23": "343iGdoxpXUvaUviBURtHQ49UY1CHqufR6r1YoRQbakrQ1iLrBXYSUsfShY5Vy1ysEekkSHdCdgx78CLioXaYgXz",
  "key24": "G7AyXfHNifumQauS49uDAevj39Ce8JWsVQGbk4E84c3ke6pJjwpZw2Q9C6MmuFDBEiDSVbasKm7oziafnTkYecm",
  "key25": "JeV7dTzzBTuAAV2MZ6FrpLBdjX5mwvNZasu5bstsiQtRcwUBxSmiAk5FXLycFWgr7wcXX6t28szHvupWaK7boCR",
  "key26": "4hDjuGgB6GASBypPSzJMFcfDsgczVrXSHc9w1vQkPrnPQJh3GmoHmYmJLkDu45L67MHD3RDAggffY3G7KTJG7UGL",
  "key27": "3g4nFyBCmaPKz9geCY2yHCoDKxdnAK75WXKdbWQUd2tcsLG1vLuJJgWDXk5SrGQjcjBe15BA5xZKCr9tTmQvHg2X",
  "key28": "z9KQKir9PNaXwwqsM33XEoaxWdLM8HCk2CPsAe241VAQTDKQAxV9YgPCc5YxBER1L6rxgh2WGvbGaNnnBRqUw43",
  "key29": "3gaW1faXSnymSbrqJDv3N1vKdGUE3mDnvb4KGAkFJJ6UrZzsDz91a6cKv8NfPEUdMtHwbQEkxJd1PVoYH6QyFPqo",
  "key30": "4S6DnyYxHXaoKNjZcyo6MLpqgtQUeYSSQ3TJBHuL54eVStE7jeeHZhaNx7Km2V44L5q8zGnWTENFMNdL2egMU7Js",
  "key31": "2Q2zEcLXf2csAG9vyGnmkL3VMnApy8Eit7Y5Y1qjbgP2KFKXthXbKiZJR2PfUzGmHyPcTw6CRtf7AAeDYrcxUxn6",
  "key32": "4Qk6xESjdXGdL8KRPyUQjhqb9gJxavDf9X4n69oGDryGhPFgGJh2HfuYfUgKcrhhPXXgj2oYYbgu1tmHCdwymUYR",
  "key33": "2gYn174CoTihZ7745NKBbsfDW9bs8W8YMB4T5PMxVSCCC25fPgrx8NPdkpZnBcVUBvjcdp5rrZtZmqsEHGJd58d3",
  "key34": "46tyf8gkRShcdWuzCEmyvpLmhoQY8MsfTgwdxPL7myJwuA1cw6pzzzTesaqCjAUzBjxECUgcuwVMbQTeaivUiBSj",
  "key35": "mQYe5UoXnoZLVj8s2ncaQKaQJS7GDaQGCrVSkiEFwf664wNmbV4rvcT7kCLECKKrkyGVvbvASeBUfXim5r8NEVG",
  "key36": "PeLWEqxjPtj1MfpK7eNLdNk5ybYecDQ1Kw8rEgqWmXMRZmMMrekYh4uPQ74iywwxzojTLpR3Mi6V3MdAUYZjRpo",
  "key37": "2ayYSpnc7JAjvBaMUuLHsiVzYpgVzWnX6sVi6f7pwHZuxEGrTUebxBXGGZtjwykkkgGL7wV4abtPFvffMUgMbZDr",
  "key38": "3DRV4WrFS4buyJXUjU1y7D8SGaFtgongBSFBZGuqbANkJRERu1KvAwZgdiZ3GYDLYpR81Zr5rd7J5f9FBDjkRf61",
  "key39": "55J7ySGQF7waq723jrMCKYoRdFEsSaFxYubnkbDhuivz85En7zzJDw7UCB1iWFXPVtoNmbZP9aVT2dSZrXRGMdZp",
  "key40": "2FFUoHaTFT9MEJXEC55drowocE5QnxEC7MUZVmHmyVJNLMNYZrurxbtGFTad32Pq26FzRaQ1PZ2yZGsyyniDy7Gv"
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
