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
    "5szmvUFnLRzRtYTN5RcLofUDpn9cXEeX6d7jWRg7dKL4iRJxiibAq8jKY8jXktJJnBNkin2Fk8W5qbQpBu5dn2K2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545A73aGXGztDDmYT7HaTLY53d6AAkQGdbh8hQbdytLtMVoiH2w71Ut2BEUNJJiEqQkPCCZsyRDYQ2HpFDmxh4CD",
  "key1": "5QFc1hvqJgxbdnCYgVKGoLBnLHzEVLme6i5JufQeQcUmyNFXK7anopGFJG6duvuYwwDLp8kKYePmNrEYcrMqm3mL",
  "key2": "3VNfXzbyjnV6rHGHqkZkFUQb6yyt6RbyPC5cygfi5p9RNKYsPb7FozPU8jNtXca2C13SjkJaBuMKMqFjVmTDM8jC",
  "key3": "4PiwLoWEGDGo9bNSxqHsGvG6ZNUWhdn82i81DvtrRrpWzUKTQ3zqrB3dwBJN2CgmENtP4Pvo2ZQqfcwJzUtErEjz",
  "key4": "5j8b6UeQsXjPYcV6UuADzYjjGWfc5EV83RyxEQKGZesaZSva9F8vnu3VAMdVvNTx3EG4BD4oTVNLsShnxQQHtpUu",
  "key5": "2K8WzjPqHHHHZdUmA9GEu9wSFGMw1HdCt1EZkBB9eFiWc3qAy3xaFyCmKzkA48N9eLJH8FRohLHpn8cn98rSA1e7",
  "key6": "4kXXD1USHXsGvoeeVaowcojJn35XegVVguZic4CXGLNNZ7YnD13m9ivU9ZaEviYAj2Yj3UVSAT68PmDNMnai4yt4",
  "key7": "4pkUUq8gzD9Vt5kLjuqzBpvsnFmTwrXyMZDhyZjdzvGA3jKBQUEGsiMYvC1FoZxoY3NKJVR92RXvNYda5VMnrRT9",
  "key8": "21E5R6ParakywTfZU33GT6vmhThkJkYbwYkfQNEFacPxViedihVDJAjpeyj5gi1ZiVwLVQMQVBZifMRDXLqmLh92",
  "key9": "5mmVTanK965h4RrAKxKDLwkJdvJ3SCkSQboUCaSEQ5ThtzYUKSBHWpM6pTH4dmK5TPvYnchLztssUgGBL7HAedEZ",
  "key10": "TF5rxJ69bThkzKHpD5to8HxHuXYDvw7wYhbgDA1wHdxxbPHgFxRYdMXfgYouvVzYVFdfn5QBvsFwZcHXXEWfPzr",
  "key11": "4wVCJQB5MQfWsWhDJVEsMAYUUKPfq8pg867zGSskBSmhhuW1KzUgjik2md29zLn548ZbUE9Lt5eg4fBAYAsUEXLM",
  "key12": "2vZ65TWBruyF28mZCMLAVXiRXmdQW76CHctnnVdi2QG7665x4TPbgYeucVHaXPmnxYRKFJdmL8w5XGyx2Ny38g8g",
  "key13": "2e718QJz1hmUcsdM5gBZRSWNQcrPsFF6fEwpT4wGL1UTQAJcwRjJcXzXLeKFrVM9xFQqVUaWkF8q4wB8vERQ3Mmd",
  "key14": "ZrgLo2Y2cKMxVZEvJuRKGE32cQWNEdiWaFRYE7pdafqtTCUn8BjmEfshkk78GbX5zGiHSRzuK6RyJtHDWkShGxo",
  "key15": "dWQo6ib1h6yUn4ckc6h1TYjnjpvsLfbrh6PT77GNakQ6VLHXzoWDHGL7za4m7b9dfwbdcf41iX2sQPCuxvb5x3P",
  "key16": "3xJiQ9F7HDbbP4Gc9eBEYWzSy2FSz9aV1amJdw1eG7iLvDRbVryQQjTTQ8SmU3iJDfTZGBbTyMWEpomGN7UtiH2o",
  "key17": "2LunFecam2h6ZVGWgm7rFHJveAfudWw18bhTJAWXsfrwXg86NBgB68ZUQLg29S99wRW9QCmBk7SiFYWLungUuNXo",
  "key18": "NjUED8bF3XP21jQCNvU2FbaGfakoroE88dLdY97b9afk33iyGm3io2fU1q5QTyfZB1DSGSwtZTm7GLnJdzw49XP",
  "key19": "26zQJtp53CQuuHvfTtn2aASUZ6hp1g7zxD3G87gCzfKKVD7Xmy1YakeaLzg96qB1ejdNKCQam7e3yxWYpDf4j518",
  "key20": "TpJHQxdVKimXxrTFQG7XAgRyiQ66yJntnVbNL9LtWwGw62yw1gEsYMc2viiZTKZxYk57Jc2b8EAbdrB3dioR6ns",
  "key21": "2g4c3fFtoPvEvosGkGs95MJ89nRzQYMQdmpHT8agX33443hv4FQXgNaG25CQPdrVzC2qSsmpRzFFxnVrMTZkTLrv",
  "key22": "2gYFTfc3WMowYciYbccz78X4j9GteR9nofY1Gq35eRU2TFQALrhnKhjXgA18azTs99gSxgnZNFmFMesZH7g7oZR7",
  "key23": "5BPB3Jq79x6VQ7r5zHyxCML6xRddi1snBUrwZiBFPhzBceng2ZQbB4P9KSFbEeSu4x8qYYt8rAcpCs8oSXST3T2M",
  "key24": "tmtVgoa61uLgpa4Ghwo97Rz94TDuy7LPdDWBC7fjanpbg4XwDYQP51fvrZtmwULtftcMysK2kjkwGSdUbnXicep",
  "key25": "HBY7mjkJKSm74Un4sRKVN5r1cHu6QYCDo5cvmjsjWoYcLHGp1wWEawYQjvtPLAJYayfJdWmSNQnJChuZcMDrCJK",
  "key26": "5HrwGiu8pXcn5RpecQjNrTW2D23ZuTG3EvCxNMsBGqJTtf73eaSrawPuqwVfuVGkDpkuahgdVq25KtpWQijDdr2y",
  "key27": "48buKmstVsq6XyUGfZBe1d4Sutt5NjdhzjnGA3XudEnAxwZvYXHAjKhpeUB5SDL8CHYcYeqT1zHHQHXjF2fudc9u",
  "key28": "29GoZ9w7YMaT69vJqPk6Xtt2jQsywiRk5qUozUpo9KCwchEkiH5nMUK1f3x3NcfGAN5HNDoRea64y1V1azENMra6"
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
