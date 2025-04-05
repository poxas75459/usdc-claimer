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
    "5N4MPWzec9qiiebQEbzhBRh9mqj1TyYpEaq4PRc7p5MFcAHg3DejPW3rbptyVvNnEGT4DCfTQ7LmrWUwrQk4UgbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fu4MQHFfwWcEvuw2pN75mTbTMdXZNMnoEi97cdvhGXUT6rqpJUe1wqCHzJXuzJ1nwF797i7WrvZcAsmFAR2jigg",
  "key1": "59t28vSCfZZGNgfBR2QLCm1toJAgRPd76wmnomYR5AHfxxSyGkmuspsryS7f5M6rXFxNrBmh52DEtGYbJL89UZ8c",
  "key2": "Qs7s2Zd6npPM22GpQRC8PyfFwEUmuGkZfk4a4RKuTF22ivDUEKFfSz31kb2wTz4fSX1fqEeLSdHfctcvEiQRSiV",
  "key3": "4yze4LBsJ2NBvvaqPzFS6oUtCrb59ZbULg8iaegkwTtDij3AXtPkmTte7jrQxoe7MMrDbNf4QkaGWutZhYNALGbC",
  "key4": "22egBBeKG2iaFNbuf2DU5kjEP955J1rxU3137Q6PwmcKh4p1FKXeL5QKkUSc82Cs1uEDTx5SZLFeSdHdr6MrXUyp",
  "key5": "3oMBoCSn1wmCRxH7vCXhQv6b6ctrrGtncPS8afiWJP1F5PmWXjfvGmDPRWHN2zn2XwsKqwE3rqwNFJUkRZU5Krgs",
  "key6": "n5XWmy22eV1H6hRLzT7AJbRD6vQeJtmVPvFJVueZ9WeZdnYqbG3j7nkwChbiSYPJUM1bjrR9tMiiYB3MhF28Kus",
  "key7": "5z78DZUR4WzDX57eiVX2wg4CTKophuNtTGkzAZ7QR2eFUULoyf7NHJVbDvstJi6gaDaMvYZ6JGgSrjrxwqbmr25E",
  "key8": "325yvjd4Hk3KJ5xCWAx22WBPRK4kdTh31ua1m8Er4q8Nqf3A1k8HmmLa2fw92JF5yTQytswWkgbsEky5RRD8hVBe",
  "key9": "5mwwaJ69xNWKomS91UQv442a6BMD2sr6HNhozsgQisRBpz233vZqqGZmPrpT6TDPhfLRNxG5MjLtfZbQTnUnue4T",
  "key10": "5MGgDT2isRDSiXxv1wzWK1JRQ5HojXbr6h9Y4LS5buvQxrXkqnb6AK3w2HpKER7hSzR7TdX7yAeEr2oA2YTGAQiP",
  "key11": "5xggtkZ94cExJ1Q6b7zBVayZfvu4YcifqgCcw1p3w4JXaeBtYgrKyeHic9DNDKpqgSaXaX7ss5nCDb6nryFUHs4h",
  "key12": "43ZiMUgDQrRUqq115PjQyzWBgrf2N67CKWbe4NNffkq8nc34qaxHPewP5u1fWvFCARxJCTeQt9SHPvVk4QReKZn6",
  "key13": "43TUgknUcV7FZNJ8tX8Cs5fbPkn9g9cA5Nno1F9UotRdkGVto9BMuVSfB8TccStno1duL9T4pjtuqiVMteUikxQ5",
  "key14": "5KwVtBowxaT8F1oLCsSPUXiA4FoDwcpfkuUqVLhg65wmzz9vM9cvfPS6a4t2K47KUyjeVHTeTU6qqWzhpap3vGfh",
  "key15": "58EfeKQnuvzhgJDUPaLUwwdWy3Xr8qjZ5ujY4WEEmQaW7ScZ5mJBphNQonMubKWL1dJMpY5uVXyUbdRDWNQMmhNh",
  "key16": "3t8tZRxgpJGroqA21YmD4NKGc25TNGiHJu3356jTiL4AatxadxDmvks9EVqw17DcZ1yjjY5WiBrg3Ba2iZxGf8gN",
  "key17": "rj5rPfABvPzyvsY529AzAqdbteWmYhjv8B9xDpvnEs59Nw1y56ibf46GE1U66BLkCepTv6jjtQXERMxeXe3PGv1",
  "key18": "5wRbtMFE9m2M86i8QHCoPcvUfaUvNxJoNsEtgmE8STK4eCvzsQhDDQfJvnbbjrUsi1L8UVoU257d5H3hKzTwnqGu",
  "key19": "3wmGm5Gxjxfxi2XxnPP4eNu5roQSAK5WQhEzNCXbmnk1ta3VLRZ6EkEUrsdbahf14NxpvR5f2kFdHKGxVq5uMb2P",
  "key20": "37TbvxALFRRbVHMtQJXC3KxhEqzAb4SVQ3Ax2KCWnoCRcrihxXc82y9JL9iHWPp6dUNXmnDN2Wikpye6YnYvLLny",
  "key21": "3LwXEn2Z7WSVxKN3v8HjYy9HQ2JuYwLEY6wA6sHXw2urChZmw3eSfSK3aYqBAkUxqsRYQpjPTdrFHrwQwBZ4Lgvw",
  "key22": "2UuYNFDF92tDs4DV79uB9Y9uv3Cx36pSxg2yS3gvZabHvEarNkifghWeCsRhQKMVSpjTJzNUQuCEbwxsHVSNVXXd",
  "key23": "2wuixncm9REzvwt21MTtxhY5CfcBHbU1kDJiotbcStSdfDiuDB2yicJwY1W69LeengGzsbocAWARi1xcowWHsbhG",
  "key24": "33drAX2zcARe9XGMshpNUq3F4NR8KZA2NHtewC6skwKrUtkDTJQbaUfjmTRrnukj2ZqC8bMQVKedzWDCTpCiCg4n",
  "key25": "4u6WN1KHcfjr4kUsuGDCoUVjf3UJjZvvnYbZBdBzc46yLj2im1njNt4zd2LfBQ8XGF8eyCLL6VTTYZW8AXbq2i3h",
  "key26": "3nqTYDvfFo8xHbaByXgT23fTDWaF9kZYGsiDFQyFgyyNxBTVMUnfZAi6zq41Hs8GUTyVYpNiGJxD2G69KYTUexpo",
  "key27": "3cyKGqbnt5D6ANvPzjQ4WBs6jj8hUsPtUVADbryebmoXoj53Bfd67LGd5jg6zLTi7w11fuwxZfBXdofsJTac4318",
  "key28": "4KM6TyfckAn5Pm9iWWnc98tcT1Rj7XFrK5t2NcmhezXWXBvfwj9wEoFQBgjVpxo8oqaPuX1dZf4WyCgcghhoseUY",
  "key29": "4HzAvAWqxCKFgAB77XgYV631pT3jWT9Dfsk5biv6oHLjLrEb3tG6C5P9R1iP7At2JTW7cJ8CWtYLRV2VFNPm2ytM",
  "key30": "2MFeShpr9QfmqUghdRUVbD5HvRS4Dnpj9mUgB6TUFU6U9FT8W9nAS9NYEuedtjThbg8TLUuTGvYU5ZCwWFMMwMfv",
  "key31": "1tUbRbavJxiaYLVkPMm9827dLuhWAZv54PBE2om24Jh27uZzBfrDAg64Jie2t4M25mWc4fdRiWBSEZJGfKrG3WD",
  "key32": "3E5FaC9GQonuF5pkGZp3UdMHM8KPyha7zdWeSCRTrfpQ71VJrbYgJqUrEg5YBjzLk3Xznn7hKx2ywejCREhS16uq",
  "key33": "4m4M2BwM5zXTiWDX7qJwoe7nyujvYv2og45HUsNekuGvA1tNwziqxWmrXKYKXYGBZnQTVMbuEyuYNYjqAyzAyAPk",
  "key34": "5H47h6TmQDu21XhpySjobp8E9bcDBd3QD1FnoxvPQeoBR4D41kqJ7nryqoh2U2mc7rDjkwnHFpUtd2cERHq63DBC",
  "key35": "43zNh5pKCMqcBZC7jH7wDnyHMszEbqFp6nB2rgoYidT19o9DfQA66ibU3X5Qo4g7EdkjGCcCezCt63SUB5wHjWJ8",
  "key36": "5NMR6hjr8gthdb3uRh9PQH99j9gnHb961hTFnhAK11dYuyMZeahoXxxuVBroUwMpbudPCzm5ofY6E1yoQVoWUn3s",
  "key37": "5PpfRmF1TyeRvZ6NimCwAE5P8YHwixNUpu8Wg5rQZHPo4orve1hFrvGbrQxRMMD2YvD9BeKLWYX91ruSPNDQL5mf",
  "key38": "2tpNhsNMRtNGD8wWzScpsVsvb7YqDoo78JgKfp9UwMWkLF7EqxeiKRYWni3oSeZhXXntgbPknZbXNJR99Y7Mr925",
  "key39": "3j3YsJCZi1yo1AY3QKPKunPhfBj3qr7Nbnr65A5YvAG1EoXVSBJXgLofSjVnYwVkeH5MbdVDkST7bKj1cfPL1pvD",
  "key40": "3WkFc29LUchbnAPbq8RmRFWsFU4h9iPeNU76xBe9JnjtnwKxNohWmPKZpECKoYe16EsDaHZgkFnV2c6SUxbz8tzj",
  "key41": "4nMmZd2uNFCrFqve5gyr9Hr9mz3bo3cpZKP6XTjUCN3oc3tzwCDTHwhA7oyvA2Ab74EfSXwktnjGTL7qaTTRfLtu",
  "key42": "58zqLEo2egaZgsueSJ47mnUSEaVhKGnBbytuSEkTsykR2w4EwNrPASD9cAmMg5fBMpKsWfDVuQ1RRsPMNDKnNAer"
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
