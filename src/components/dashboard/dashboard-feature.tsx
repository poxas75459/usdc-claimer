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
    "39GveHmE8bTifRgBvLF3AEEkGi1mdb6tFEMzL6VYfDhycMQoV2Z56dZKd4boS1rWwT7saz1fbodiHKdgPBfPigQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PPCkRXjyNMBk7u4C8358FcYvqFLZPnix5EYEA2mVrH1RLV5zyHtvUCgYR9f5NvBy8skr3YhFXV9sdy3LGVBQnwf",
  "key1": "5JskUZGu1S77Ubi6MXVEMRdh9Fiw7xZKgzJ6P9rv73G5xnacmhL6qnGZ2gBaSc9pMbuLA7qy7cmmipknmaMPUTsZ",
  "key2": "ECM3FCMU4BizPKCiLKDPe2wAX5XGokdKTr5XiWhkyQ2Q5xk2uMCDNnfi3QkbJG6KAxX6kqoT5K4XQcheyjpopjW",
  "key3": "2tgfpVMKV4tYyVLUjGDZPVK1ZF5MmzrLhfxS5TLeYVz7is8CrogZpdbMNXudZ8y6sAifLUau3bNwzVETACa5savh",
  "key4": "4P5KWH8Ze9yMNsvuPyKqkBfTz4DpA3GnPffKd1dhdvEvD6UoLLFXTdqfcgFxTnRTYJ4JDsvofVUf8mpqCfk6D5o2",
  "key5": "3fDRVStzGWdvdjkMjG4Udo3HbHGRUHriW5h5qifgc9hwxfkRvhTGVrkvUqv7n7UDAwTGbDUrayhYb3vDyjrcmY6c",
  "key6": "ykaLxfSYEzQbmqCHBBX5YkdAkGjwvzoiLQDHVwogM88fpPuNJVgVfzUKSr1Sy8RFU1zFGYhXVSuMS7dA9qCLSm4",
  "key7": "5ewHScAiLYtjNDqhmbuvwV4uoSZfGEUnV69ZJRnsq61zs8s2Bc5MssWEtmCQLbW9iJYLmcdut54VREk1nGsLMfaH",
  "key8": "29NarjvwfPTN6AEF3UMUQEnooVufWrKwSEJCVtHZmC14AENkBwmAQ56GFHinyQTuPngWjDhrKsRegGYGUJKTXq9w",
  "key9": "SeAVYXBikBfsGHavMGC9XZ6NDzNKRDFFJGq4hxfy4KHWDjerTaSTBbY7zHdQLBufuomPeiciK2tdgXJvuoEw4eP",
  "key10": "5JzDQYVKPELZYHFM8putsMf9nTujTPoQ2Aqs8iALPnpRUScfSurAxS8uoZd1DPzSkD2mdsmeFHoVH7AU2VJBRFuo",
  "key11": "2HqqjFPf45KJKwq3buLHJCBXgqfvtkhMVvR2PwgxtCvjQPCQTchhFLzFUzZ9a81scKnGtgiifZYPyhGqNexWBddr",
  "key12": "Tzf3i3Lnauq7YKSV8hY9oeoVDYjyUft6kJxPRyEbWQrvNUpLWcVPkGj9BHwrEnEtj563YgPatB7eUHFSq99DWaV",
  "key13": "4AYTMf3MJcaxD9jjYuEeHHv7xvTCnqmTkxYvf7p2XH3kkYjGrFbqeE9FVTTSxkGDMaZZQs1CxeoAScU19kwg62qv",
  "key14": "5r9BA7q3PRiXPMRSzXcmSzC5AKaTVM4cL8k7dzxWoTuQ6KN8ZWWXALSat8jxqUhqwRbpw4ppQT5Dw862SdyR2beo",
  "key15": "42WAKtJnsAC7sT1UwfbtZp4Z1iDSBH8fCthUyBJNKcrX14G8AV6MajMrVn96NXeYvhsZTE5p33W7qFgBP6Q6syCj",
  "key16": "4HwA9sC68vEAAykZ6g9pnBLtfwzfC9E6B4wXF3f7HR7ohaWz1cmP3XRAQG523kn5okGwFi9qnESyRwnXgGnLC7V3",
  "key17": "32bBweFmvFiC9SNHxjaHU9FtLTDYUsseH1dWinyFWGhsP18UmchpvjGiQAtRpJZRNPDLcjrn6xy4Ma2YWmiLhcNV",
  "key18": "3dpy6ZG4Q7ZQYE1V6ggT88ufKk8ZmoGdfPFMrq4njAN36tnpgzFDJuK3URZAG9srZJgaX7H7PfFVSvd15eJ1JjFo",
  "key19": "2btaoSujYih79dP53j9pSXMaLZrsbf3QU41WikdBXtgh72wg6TyxRzSJ9paJrKQqfNovtwzTvFmQCwF8aS4sz436",
  "key20": "627cY9bhyNJY6vCDmw1GmzR4Msmkp2QJKjwvjzYPJeiBUU2qdpRS6RkXKSUdyXR2Y2JDAq2Cg68PXc681KrqDvq",
  "key21": "XzpwaSWvEGihdHrTsCA17xgZnhEnqXnrqUbu9XHDNyDGzakpvpU2b4AMaAnbuVfpNiQrymWpAGMTUejXBHSBz73",
  "key22": "2sPZTePGwrWrLy3jwTYUNCNkxWQCMwA9BAiYp7U1VYAdTW4Doemw9CWivdeCJZs7dQPbQ5jKDdmDUQWfaNrum1PV",
  "key23": "4RL7d7f77rYWw9fgvEhdnLKhmxXaCduxgtMKq62swErvSakQpGp9cCeDQGzGBHUGjUBzvQ1svxyu4RNvUDhu6MQu",
  "key24": "4GB5U3ZXukTQcK3pYNu6J6EQSryZuhtQMqXGkY3rFFvALUmQD4XAmeszkkFg82KXo4cgCf8DCbrkYPbvNJEN6T6P",
  "key25": "2G2fUMvBsVnFwGjL1oA99PvmFgHK6TRArPd2p2fhXbmDZdHd5d4thpgGZ5Mi8CGoJhf46D29rRDtkwpxmeXBMXyL",
  "key26": "5Cm6ZB5SKy39iGcMhtZW7ySFosfCoW5xccD73tFXGYXfMUYvenVrs1Tobpf5w54nvz11ek9DnnJqL3SdaaCKb6Wf",
  "key27": "3VxN7JbMdawALSzHfEVG8riiohThdASZ34G7TWauDoTESHGaZABEDqNdx9y1NwQ4VmH3duUFASng61C644qouZAr",
  "key28": "3gp1AFznnzUBN4TwXNUQo53ASd9m224mD6bsog7J3t1LSXzJmz6iQSuEEXh28ZrbnfgzaXvAn7DC8fvyagu6NvZE",
  "key29": "4oA4FEPmW98fVqg7btjzeRLvdDty4JX3u4EPDrZ7T2WgtXQaFxyYZAu9RtX1mHCpgnis4nPii17gNagDUXSY1k7K",
  "key30": "4Gz5Uqvivvy41ZUXnHWRtdoMhoWGzoKr4Hm6ntpka2gYri4VuRbCPgaMSR3Bspy5WZ1qoUF2ESAKxMaNbo2r5KXe",
  "key31": "5KV7zH1sdCbAyFFHCzmibrVMgFkCEw225a5bHAUCN2MYXo62wrKVeNg575y9X5DJc9zGwB1pNkJc4PAmU7Y46fo1",
  "key32": "3RkbEVa8pJwQ3e4M9QzoVzdF91HWqoibB8npdZStqTMYqjvvTncxDfBafdFP6cqg4LG6XZ8SNK16S7CsKvo5ijnC",
  "key33": "51jTAYFYZS3TQsgZG13PQ9caz2sJ8x65QAWyNnZiuUNB45F8xjrEWwhbZnNymhXdzQ74shA4evDXF4eUBrcXb5ve",
  "key34": "2NFai6MNo8QYyg3jpL5XzEHXzqLUVSG6cBhCcdZrm5ooQLLax4qP5CZtntTfckf7QSrFHcRAjWGYnjbvfgZWJWES",
  "key35": "b3NQyv9DsDfqq7SY1gd7A7Vb2wWjuZMqDWpj7ZNx1B5mFPdm9pnrbbD7s2pCfx1ei8tY5fs2gtCpHw6xzESVJeJ",
  "key36": "916DdfP7EsrGrDWktEyULCuikph2iqJzNy5jpe1WPhdXDu1BhHye1N5wtHqJ5CUkStvFmuxVnPRStUe1hKejGhC"
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
