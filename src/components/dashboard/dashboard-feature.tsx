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
    "5NrqPvoCsRN4h8VkvdsBu37SkZBfPrnGVjHfXy98w3CHAQwFJSSAZEkPH7W9GmJZj7r7KTnnvEdEFsRnEPr71JNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FwpVEovucNfbS85fwBdFGH3ey8UrK3atUmvr26xTGSuxU47VxSJWFc2wQ8ST2UsWsXanc1Mfw1KRCKmV1imP4Ph",
  "key1": "26vYBWGfmxvDz2hJ4FeiGH5Gmo4Z1HTWfXW3ZKhjKsKMJ753T1wn7M2XJyKty72se8xSuWAg1N7tsCttSqL24Ckt",
  "key2": "5zuxpBeW1oTcox2bdcaKwdw6nxFauGDWP3ovdDwQRGFCe4inLaoG4wZb3hYFnLdn1gRa7Dc1rL5GdRNyWFuRoyfh",
  "key3": "5WyFYGVa4eqSAbfB3sWiW8dTgif6WFtQ7naHVNuiRk5BTqExYpQp76e1tBa4xogGA24Z7tAe3BooraURkf7L8P8E",
  "key4": "tyHPYKdW7urGAaWwuBvoJh6d85Y66NWby68f1y8fUP8m4vzbG5WvwPfue7fhuk6M6LzmfcSKqeWwvE4XM4oUZCp",
  "key5": "2UhcPLHPhEmLhXXu1Y3ebuuEb1rkgadJSJoPsbcEYi5mt3sGpsbiw1B7BAL8gCBNkXJgNZNVeZKHBUKwg8rmg8tK",
  "key6": "5ZkKxZ3GxESBEMLp5zE9iABf51uJ7tiiMAEXLALzpJPPwsi3ncLbuLNNWrUfEbnWaYGYfDfkq8WmocEpDcYuLRGq",
  "key7": "2g33pYbiEmzRjErYp4wTKWmHDLNxSDi8ynweVgUrTtBDZLEDUrBpNh6rUGDC73w8cR8mCWvPgZrbo1kMPrtCp6mS",
  "key8": "5Wj8nfHzW8hDKVJhTFCFQQi1ZMS9JUM7YnzqFrAQ8jsU4uJ3vhbiwh7DQUcPAj1U5CTrBA8vMtd9AvKonDGUdwWP",
  "key9": "5pGdugRgAK3R7jswArugHXPJ49sXa5KAQZCWcUvc646XGCGgpn4SYAvhZpAkdqQgwmCMAFedtb6EkBap4iCBZpeA",
  "key10": "3b6kR6Md7RTMkbHoYC83SHxfyXYHZoNxVgk2tDd6Qnhxf5HrTM5uFqi9xnjVuGj7dXJV1yd8C2TGEwoat13UbQfs",
  "key11": "sGBVK46Lcbdkce8c4WNwDKsxtMut9nGUCvxpmwKrFfrXXpEYYzhEbYo5CvWGdXR51DuMcnoDmymRhryPztCTSAR",
  "key12": "3zFFjyqgL2Ui3fkAiSZGhghLX7jWgkn5qvZYSnWPQFWz2u7amSAQM7jfcjeuxE6PiuSZBBoKF1QR54tCXkTWGRLG",
  "key13": "3a1o3SMDGwucwU2wSAKAa6dWsKPmVsRKeHEJaeVU6fYpFXu2JzEqrkke9yEPcDG2f7CtqqhVeswo8P5yxYzJuYia",
  "key14": "5LyrbqoJCoVtVzygbphFi6D3tri2BBSQoAbtq1jWdjZSQd3JCpkMMVsjrh8Nok5PLmr4bn3i6dNHQ1xEra75PjWo",
  "key15": "62DtCCasbyt6gV8LcWVpWaZR4WdhAYVvgYo89LdkfBdRnwSVJbdVhHHfR4F5RjXJJ9itGVDSMocEZGfnWACnz2ZF",
  "key16": "5RrQ6MyZETTzUeVM4v49nSjjZR3jKz8QycewJYS3hrWC4X3MrLZa82R5BJX7HbuhUWPh39aM36nJadmQ5vjyiiXL",
  "key17": "5r3eyUHfDnYfCTkfHgm3vNXQEVyHejR5nYBaz1k3JoKBq1svFVNgXhjBPTnC19zJs6fcY1YiY8KqVHD84xrmmhpc",
  "key18": "47LDMgQB6GbwPfvfGbyMwpBFvy2MRPoUAduASP654xamZxR82xa9HmrZPRTSSzGRWCUAbs8ucdaG1kBATFa97pga",
  "key19": "4cA5jjeXEJU3h1YFmpba3u91FhAf1wNJ7xuH9NTwXGusH6rstEf3hy7i8y5zuuVc8Fam5Nxhxr9XiFGV5LCJQFZV",
  "key20": "5RmYUyHMYrphGEGH1JUnJULhgjPaQfCzDYTVHx8fa4c8YmpjbhAjvbxFSdzCSTPCqPm7c5KdJ1m5ckGhV9KmorHd",
  "key21": "2YsYATh5TEdxbfG4siqyz4V96FHbBj5zZ6vA3TxsoZjDnky8m2urB3MLk94Bd6cqV8HRETnx55gS8r6x9CX3YRzU",
  "key22": "62D5BWNW5weLYdNaBZGoCZcxsKibhF4YA1j5DPZDjzn4F3gksU2Dci374vjd19utrNihhSVwPaqniBCFUAHCPwCC",
  "key23": "2YPncfdgpP6czf4QhgHqGDBmCnupKJagG8RGFCkjL3tZPfbYf9zBnQyTFWtEDQtBnbryKp4Jkn9hTWHJYfwUF76J",
  "key24": "4wNKkP4DB6abgn6MvXmxkrF39tbHoPWYSoHFFhLomjTyrnm4wAZ6JcJd1x9QR4sdKpHWzxiPLqpNEDruTgczc43Q",
  "key25": "3cSoheqKib82BHWp9ccgCGVzpSpoi52jLiuGomWrDoreoF219AHfH2PrBoiLKn4jS4pxuNo8CkJvJN51VNnVVxT9",
  "key26": "4Ea6iDnf6j4CFHgw2wmY3kTdd6GY1s7EH3VKdnJAnoLaK9YdM1pfpHpu5yws5kBuAtWSrBqQePNVhGqzyUNFuxQR",
  "key27": "5qYvki9mwseCpB5hDRwEhp2CYgL6xYD3Nxeq6VmCN9R9rRToLeRmzM5vvZ5WLQ3anHkdZEBfsMbTpNvyzzYGu4yj",
  "key28": "3oZwUQW392LCEtdGpJEVtKG3XcaAgDkAdnDzkWLiuQv1EULcifAf5aBEdfeZj23b9mT2Hd2iQTpyYZPDnYkQcBHG"
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
