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
    "LbZtZiRwaHfdc2Pi5gQuYhRQqyB2E1UpQQzSqEZ7frZR8Tzcn6JJF93oNhxtpdowQHDsDtmPF3o6JWQjUutAbxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wVh7GgFzw14gyHqW9QytkWsHr4Qv8Yx5Zuh91okFa2SbJpECdgpvALTHgNhEr1wk9BXYsMnNQCSkVpVF84H79RG",
  "key1": "538tn2hf93yVne2TxvmwafFSdrsTCtiiJtrAKqEhmV7Loax1Ka3CyXrjaP852gAQ3H8TvowiDGtPUVU5rmkFnZ95",
  "key2": "4Y1retDncxnQt1LpqkZqmQfCGzsC89H3y8DmPLmZ79rfvgPWwbd9rGV7SfVV2mwiiBY2fAZZNSrM2R4ARgh5sJTG",
  "key3": "2iup1fN6ShZmCThT3iyqmqm7MxwjzYTZjiiCxDs8zD1vqUuTFCmrn3yWCeauMGHabeFmBm8uGoH5koyXuzdAqbYB",
  "key4": "4T3BPau4kh86iPuoKd4nLAEcuWCA674RsZ7yoYtu4ZYVpAj2VWQUge8RqbJSkATeoo6rkhFEJk2vC5NHFdZKDRgC",
  "key5": "4dzgeQsnTnZfwigSukdAHFGRuvMqEA5xa4rY2NNjNZEC6rEQ83WF8FovNmvzSLZSiYXPJbfXA7Lo31kR5EAEUbzw",
  "key6": "5982roN7XQUcpEUsRYVCPze5ChJ9WrspM8vtkDHwWYGRmRdiugPRe9bNDfsxGXqkFgBNHib2uqUQKhrNDKZD7niB",
  "key7": "46wKYTeVf7rKxSRMhx7ZzxHW45QGfUGvA4T3FwsmvZvnmQpEErCxMZyyVUHXALzJLbzYioT3ZoS2RvPHARAyJSu2",
  "key8": "xDutKsPFWrmSmwBWRiqp4sPqMoZUkfnXiQ19auEpBac6RZcEUy9sKcUYbjZawJ5dZ4CWwWr17TmFUSKJgsmDeD8",
  "key9": "ftckYUGabK6onM5U3YoEQfCk8gLyf8XiwmPAtAr2Zuz1DKy1dQnNqpjvAjGXM11p8SQ62qtTVrpvXfYcGMZEfgG",
  "key10": "59Dr9xeVNa2utDYM39xKxH6HscJpcHvAdF9jh8GNGVzBz2r53sfrfXYY3bEFVSUD5nFDHniQpVJoabLCKfWe9qih",
  "key11": "31QoH8nv1QBPR7wno19jtwyXqkUYGbrCxL1XhzXWfxG7NhM1PdMsLbCC6pNjs3f1oXcB8BUR522SqdmbiCRCZ3M1",
  "key12": "3iQMXpLYVuMTxahkMY2dFoXFZS1tk3fyHizBTsU8NSZbVrx8DYVNLyuejoHgz45eEU3bc16Z1DyKzn7AmARyeevc",
  "key13": "2CRHnRnadvVxQaenVBa9sZVdpQJyGfQYjPFZsD9AR6QRnWRB42pauy3C9GAD5UipqoZ1n4auLQzNPzeH1uZVqJv",
  "key14": "558m1aG4E5RfGzKxXZXzmm78obss9b1FXeJstLZ6Levoa31MTP8QUX1baXmxRwUAKetNjix6wAzPwBX5HAW9MDnZ",
  "key15": "2btGPcQgvbgDvej6mGQ2vdNx3ePqUvDqahVsUuREuN9Lu3pRhBZFGVz8fK1bPZDoFQvhxdSULRXM9RMZtAfkVPnR",
  "key16": "51Cfg3MoGJybTimA6RTYSfYZQkFvvTP8RPZefTWDXiWVJL2wTM4H8whYrCfSjVTypseDPA9QT1FtvRWj7pnaDpdK",
  "key17": "5YJptfFuGoDM2QAzRh8YU7rUW5C8LiHDyzq8uvTskFNtCE7s893i7Nic5yPguCUNCMto4dq9QT25qw3BX8Ni12mC",
  "key18": "TZFEogQrpCALMQdFYnPXgw9vRTkxrHZqBGkpDpfhiMwx7j5XYihegXMDnne7u6k8R5gs1QLfAydMxVavM5a7YwM",
  "key19": "wp6QVBh2QLEGaMTRA3nZvQPQuLzv2npJ4WBTG5K37frTdXAapZDFyZAsudnJUUiaX7QmbfQKwgY3s9RyfdGxmbY",
  "key20": "AGjhYhohkoipNKUQm4PJieNH6zeC89GGgaqSY7eoZkF3DJpbgw72gotk62u9afKgH85R7GcAvRwHiicpg6N4dce",
  "key21": "286jjtJKxtzDYnHNEZxBW5RV7TsbgCJfcG4233sERLPHzzkafGsyywsyRqDbxp2eW58ZadFmSwj94saeCuo3n3YF",
  "key22": "2xDXs8WGETLE5LHxgWipT7tUSXUSA5nCgLfyvyWh68EK1X5eX8hMttcxzTiQA8SuY9C1DDLUbE6bX1DPnKrkKDtz",
  "key23": "5KsgfbRucZJASgrQvQ6zV9oWBZRroQyeLsVuFCxcWvqnS6ouySbdLScsG7ukV9KezbAbgdsh2VNrsn2sGKNC3yCa",
  "key24": "2juvPNQ2LmizvekAexk18qXxaMb34U1URJZVBTE6reGUBjs1nBfDLTA2otg1sg8WEsqBYT81PibwkChynAHpM6e",
  "key25": "2QGjjznpXaFm1BSafFFRmFqevvTDPpb1GgSQmkbD1QFd3yjfZy7EjeRPaxueFUPWwc1TB3urfeg3qwX4xMLVeg8p",
  "key26": "2AczRQUrQJn52yv2yFWZkZYWrbHBrRGyw95Gek1nDV18dWCthSytcjtix5XxA9vvS9YpMddPwtS45Th2zih5fUXr",
  "key27": "4q5nMtdMsVbkLjH3w7X7JoPDRE3p4VK2Ajq5ZVLmoubwsQHFsrtPx8doPh2Eb5d1ypnF8bDfhkmGumQPnYEHNyq3",
  "key28": "43GsQchhzG5K4MpgiaLgpfBvX7wsYZCr9UpqgWFbdPVF38odpucwi455y9qE6yo7RSQswcGD94QqSbaDWoxseh56",
  "key29": "KVg5gCfum6DtQsA9mtFRdY2a5a8mExgkwyDPNbRAzK3LqidzDNGvkMTmUp5PFjcEVBoJkdEp6js2PEwWqAqNZAX",
  "key30": "5ewQZ1aWub5VXxmhjQseJ3w5ytdndMdP3ddw4e9zYyHkJ4SXpTJ61WRjhCUxKG6vk5RiWxmFdETwo3aybuyqN2iX",
  "key31": "yuxXYyhKfVxyPDHPFnCon2VssmdkgFTV7AfbQdr1s9FYcunwKoL46zTcn1LH2ajBppZbNLeSxDcnWcCQodyvZ4A",
  "key32": "2cnyEbr1zqwjTV9tWvRvZqKZ9xafwH9M6gbP12Z3d3HArcvxRCvN1zDVQJnjL5vDb3pwbWT52FUzRLrvDnHBzCZV",
  "key33": "2ywNqHUTSLJiNBpFjLRgbT9kv9qEkbe3zDKcK6qyA5v8BfCnUrbz8pc51LeSAyZ4AQfJnaSXKCgFk4RjgKRmeJkY",
  "key34": "3JJC67q1b9ei4QMA9ZABL6LYvVYQZbyRbW9rJ6iS4qKCpVXs8dhi6gTzMV8y3n2FMAxJvC9iYB1akPGzgB1G4abs",
  "key35": "36shfPF2dKPdRkGvssZRmyfhKNC6MtP3och3qpo2rExmpPpQLn9RUd4q2VZ1ZL7MmA4qazmk5Tca4qUVpQxmGW22",
  "key36": "3NMeNzKy5DC3hjhtKXT7XVarcRr97zjVfysSCiVw6Sqg8Vbm7YqM8cbVeehk2nWBnyfYPPP5iDvC6dsQaosfw2iz",
  "key37": "4bdzPxbT7b66o8xrS9h3ynTMz7nMYGsCALmU6iYZcQyxee8R14bi2hDqaWeK4VSsfWW6uHkv2vZXFhtiHgU8sHZ5",
  "key38": "2tVfSrNAwGctNvhFRLJvZCNA3cMEm7eYigp7eDdNTtDWvHy4xJAuAC4z8A3qhqEBN9PRVgYK1mnxRgZnuk2qknVi"
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
