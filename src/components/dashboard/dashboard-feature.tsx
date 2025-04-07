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
    "2Qs7iigbw8dd3wUMwGN2GfWsd7WYbuJa3pLgbiAGiMCc7c6EvJG1ovu2vq1H7zk9yyGbBTBQxtFTvyNd7rbsTYTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zNVBM1PrpZfxjyXryzQFEfo7awAeoGowd3NsckgfMaGMrRRCFYptpvPD1qLtaEE1NF2Khz7rjqiMT5JUjey9f8n",
  "key1": "y9ceeschSCveUAgWVjMd3YdSZxk9Le75eN4qLaorrP6FSrwro4zhmyzSAKPtazArYVsN5raPLfkcb9LcthjB3a2",
  "key2": "3Bt5JHNuz1zCjtiG8PyD13TPJZZzMVA9DpweFfuV2GQqghADFvNpfwgo3pEKexREuTa9CJnBnnwfX5vmaeNXDapg",
  "key3": "5Zf3BDtfWL54RcBwDcAFQRcod5NSY5LRs5W8T1qjgjr8XefKbNjq6ayTUqp5V4kgMLRiKQYbZ82PZwB5wgNsGpDy",
  "key4": "3rPbrvRCkuJHej1s3rbrCMKo4QNjuh4YDzP9qZjxUQV9G4Bnq94Z8tvzx4zkXyCTpRCemuE7RUiVAvT7QDHgkhbq",
  "key5": "5SSqhn4oybnkjMqrke53BvR8p4fdfLDFYZWbsPqWvTSgtaZocw95AhQcG8ZJp3Z1GPnWXerMQ3TzYTKvgUGy95pf",
  "key6": "5rc1Jz1CE8o6hWoGHVkW2h5APBq89cd49ugPAjFgmZtUbEtL8PePq13BKfcVgxUe6UkQXrnyxCLSZmjkF47RsvUN",
  "key7": "5WibjeTt7qPqNUzXUYGnD8vnzrirnw36fFyqgThN4FS937Ef5f5nyrxuRBPzAS2oVp4bT9ANpMAthe8euWUM86Bv",
  "key8": "Y86B3M1spvc1EqeSHhywXzAdsccoN2cLTSpnyR2EGvhHhHoiWEhdJkWPkcez1ByVrFWTzqvzV2UXf4LYHbHSXSu",
  "key9": "28cK5RyCo8CvHcThs3kEe4nBnLPiQTs2v3k5R4oz2vk4uSU6ccev4PcznwtuvNUz2r4PZwkjsgZUbU5nbfJ3JwpZ",
  "key10": "4UCtoCL9iiEnoStAbJZNCKWynatSG9pMCUU8cn1sq96wfCRr7Znm8rnSj6gEC54n9UH8VfeQkfqNr68JLeK2ng3e",
  "key11": "33FgE3bgyjyNoDohv8wixS9js2JHjqaaHH1kWDSRFU2q5S5RSD8phfy96QRVnFzXi3VmavYD6WsTADBCNNTEzgza",
  "key12": "4b1LrifGXyedTVv66SSMZsCzHPYZctdApH3BK2JehuyRH8PnZ93YU3TuhLLGkmNEYrshGdjWcMwCyhSsepVhSbtg",
  "key13": "5mpdgz85ZQw7kEykC8hh3QWcBSLZ8HGT1PryVdK9jMzn93xVCuZwWp49D2ZyFpJ1RChfkrEbAMPBQDvix6PsE2f3",
  "key14": "2y7MbdEfFzJWc68hCZTHyTjR69S8p4cvqVoqi2Nr3A5pKpk4V9xX92MrJBB1kzAT9G6b5ER6oVFcY3qXEwaywNVk",
  "key15": "4vMZYaW9M3ut8WzbV8xNWLyLnaj1dJ3qaXbC2y2XNSM8LfvQJFsL1Nh6QSV8fiwz2qd9GQ64syRHquPYGRytjvFJ",
  "key16": "wyxmJcUdibSSTTmNas9kR1uEdYG12RAoNx186Lb9AyX9o9KPMYtNmFhr5dqcaQstRtX2vH46ZenZTqV65mwLV3n",
  "key17": "43YWRGv36DKdBNX2j7fy88ipe6SA7HuTudhhf6R6Z4K8voBudWaSPgz5SLBeZpTFgWeEF2wVLQdPtz332KEQ8P98",
  "key18": "3hP5FCzohXcUeBPSqgvENJxmApAcGWMc3PunczK6U9aPV7CNnshggJY8QcvAcX74ahuqLfZ958Bfjj1u9zURUPsb",
  "key19": "2GngbTDr55Vaoj8dM6crcixNKHF9WZ5epQ5LG29P8GmNFpZQTMZLHjWUrX4VzM5v9tztsP7rmQtWFJqfvBCp9Exa",
  "key20": "4X98yA8VUVvaUmD2BeXZBmradBCvJyHkCxSNeSMdjXw8h21BosmtLeWrfPPRWQSrMjA5NBVTLf3ccvSo55Vd1JQy",
  "key21": "521r6wrZaSuGWaSogcZEvvJAURFVXZC8fFhcDhbRTQqswv4ZTSLCeuVzkV3ZEVKtca2LhhZPp5hDUKQKyT4Gy6QY",
  "key22": "2ag9hbD2xchkoe6UPQr19oroKFh1qGgji65hTG9MCocnNHvNgfoPcwo2URWBNK3QkeZVCNYP6f4NhtbwseoodC9N",
  "key23": "62Z4p92pNVfSuoy2shas9syNSAnSkcTmvKagvKnJfAip7sTrjcyaxqvBPvkLHuDELAvvqvHvrh69WmgRo5rfYmDP",
  "key24": "33eTBygPsxj1CiXiFyuVfx5K6H2gsRunni5DBRbD1b62VLMgZ1VYQsTXGjNCAyFF16nqyvL8LAhRLw5fPgYWi7KC",
  "key25": "3xNYb8KfLtBb6WQBVgZpyXY1aXmaNVQdA9BFu8G758Z1dn2AqpeSTa5Z3UcG5MUA8SeF62G2oE9mfHYaFFHD4ENi",
  "key26": "62eJhmmG31psfqynLQedoMmNKJD3wEaZpHQbx8QXaUAnoc9mNgRurqUnVX4GvJ6F1jNJXcq1p3TzfxW4CHs8DMbH",
  "key27": "c47eVYHnpf2ATWPdNbL9RzLYekd61nUiXsXrP7KkfG4t9AeEvDkwJUDqEk4oRGAgqJZsU6ztX6jrNg4Hi9JnKCF",
  "key28": "5pkYFv7KLSZQS9wDXM9uUzoduTpseAYGgHU5mJwFpfUfed3Y8H4hbAWjZVvn45R7CCxzGMkbSk5hdfCMj2GtmpsC",
  "key29": "4iJmvEKdkq74UBCd8fUVEd5RW8yhevU4oh8U3Kf8JhRX86BJ9WQTte2HAXLCzJPVAd6nqDQW5HDfFSqPu9RGQjTi",
  "key30": "5LdJhZEwp4VxhUs3ZE28MHzbRJ352CanviVDSTt1pFD9v6yV2v7LAkhE8KJyqx8zhgUirrmvmDA4aqgNjxV3NLJW",
  "key31": "2anaW3YarknR16DsXAXUHpbwxuz7CFK7NEcXbj7zDHATfc4Jsstvm8ifxXfZawj3T9VaAZGPRrgVD5QYccif3WUe",
  "key32": "mvHCL17Kf6Ue5oqWi4Y4HEkxm3pysotPBYNVKutHCyF8oWsdg2tiEg8gq7wKuSsfw7wwV8KXjGkXEDFkeAZfiUk",
  "key33": "38nvsYMsn4mNfnmoeZ45f9i4niasrazd5XMaGcWiYU9Z9upqa7WFAVBNmwwbPn29SBcW3f1NLNmLUb6fTMksbBMK",
  "key34": "2V46WU9JQe3GDqU87QmCXdMZ1pYnmxHvczF1D5LUJv7AUBeYsUxLetbKS4xwf9rSJyBupKFX3P594PwtPRhweaxP",
  "key35": "2baHobHRoP9BtLWZcr8BZLqVJtx6iE4e5WHkptUABVbWDZMx4YTVT5DUgDN4nwQJWEp2zzpQue7irPLEQb1zneyj",
  "key36": "3hMoeudwV2Ksbm8EG7LC7FAe1KvXYE6izgP7wWjfWcc2gjsPEhvKGneoea7w3MUstrV1og94H8PxMhkb5KeFfaTh"
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
