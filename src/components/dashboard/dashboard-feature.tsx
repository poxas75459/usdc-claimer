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
    "5c8D8mJCz6eq9Rw7BFTsz7SV22R1LEbMNcbEvV6ieJozLEKo7BCSwpXT3NDZow3cLjvNAnbb6GAsLRHMdTT6jCnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44MKzQt92EZDRjKkbPZ9cBY6qsEWZe9pKQL97RfoD8eTFLn4fK63Zy2MkaT1Ab3jvUBk6rD3xUKzGW9oYMR2bPea",
  "key1": "3JtqmAZaQtfMm1NXE7JrgD7wE1djQRYq4qfVN1iGyYStVfgxTYG5J818mvVq8U1xVtGdKLiiQwsmCtYYqUuyAZme",
  "key2": "4KpdLYHn3yUvs2c6LWDLSBwbPdrLenrpCHSHnigkQZr1RGBXbFtBkGS9VzstRS5vXXHuTBxdkzCo1xsD1ZF11dQt",
  "key3": "2SonjBFK19mrYnUELpZrreaE7ycPY2qG1QKq5zVVS7HqpM5r3HPNWLXBAtfLsCR7SBEqFu6PHEWQERikrqHsMLKc",
  "key4": "5pWyr76G2R6GDTLT1XtJy34mujxHszLhMiwbxuiLJStX5UZZ9U9sTfthaz6QVFpJtXmyWUqdF3FK8pvF7xYKenct",
  "key5": "Kyi7aPi6ZDJXyQEKCe6KasVgVLGZepjfbnGRgPaGUqh9XfnA8f3zjhrmTbjfRAi7AoGd56qSeaKUEb7uwt3okdv",
  "key6": "13PQSSbNaSVRF1WfuH5qGPhZUnSGZC9ei9DBrJmE9mvBDRQPDGSx4ccASv6ye5e4xGXB6UBPGjPEFFjQEWQNUp6",
  "key7": "KUaPsx9Z1QSqfd597cW3eaabF7mQs6Dk2NfTLQnGqTegPG8NyXoyGQu7Fr6PKxKJZ1Gn2bocSap6oMExWM1xt2q",
  "key8": "3zc7idMWTBKb7GZBpVYd3TYmDrQSQFL25jyHbCysWhti5Nt569m7ezDmaMSGW6D6SznxfHxhUJZDQ4wUVjSPdbuq",
  "key9": "HpqFbqJocBNrjKccVcGFi2mRnSZHtD8t32q6tMD71cDzxWCG7F7JbRLYAXmRzr2oFKewAsUrFQNBNLDuZBNsUwx",
  "key10": "2t82AoDwSbQxgcny6N3nGD2g4PwkM2TMAQAa9gGu69cD1qhuWqb6Wo7yzxM6WdVPUdiaP7a7i3CYcj88Y2XpPXMe",
  "key11": "3vyUb8BXcE1dQ3Tci7hN7ZFZjbB8enSm1SW8nF73guaM8kWTnL5nfw3QN7NZQqSX6zEeXwSDkudngPnXcpFz8ekV",
  "key12": "2Pqh3371uqNV7XjbiKo3RdN6Wx1co93WaeKukDv9c2SgA3i9MCcTZUhfgLUgGfuXgeYoJiwDEWfHBXgQRF3HvkYU",
  "key13": "zNMiG8Cu5nP9Lhzx2BdWmqfRNrT2NaCr8qUT4ZmoHrwyyZMwkPaHoEGEB26YyJEJYUnnCm3Sn7HhC6zrQNtyrtU",
  "key14": "Lr8sLhhGmnrkCSaDWbjowsJhm9LfP3w8CWQHgw3kAUsMUxKKyzXf29Jibbg4vGycKaTqAGM1jExjRhwYTd4HZh6",
  "key15": "2QE4bUnCmcowtaz8jVjsX7TCqj4r9JixF6vJxfgtHs4JsbNLwxofJmx3LtqXQirs8XBHkRmEDiBDoxSJ7CCWzra7",
  "key16": "4D3F1u65E4epXzQFBQwSMs5cSZnJUDmZ9wGrqjjHV8Yn1YVypuGheGTqVCnWgpxYq6b13QY5btnaQ55Wf2vTwypp",
  "key17": "64TgTvFACLrazghKDk7HpWvcpRLgB735bV2DiAzpPukKg6ojA5iR6FnfPg697hSJ16ixF7u3bZd9JrK8Qm9dot7K",
  "key18": "xSQn2oFxY2EMq6PLLLm4VetvrJNNb2ymnxRDGaVAH9pfBhtQ46A8LMrJ8abqrnA9sGjvJ3gEcAj3q5VMXSMxEEf",
  "key19": "5uU2idbiQ9mkQPnu5Jr1CiuPoD7hajCPjY1xaBFCimfqhZcpVcXxB1JtbnWLZypZ3VV4SubPDmNch3tXjT2Y8KY4",
  "key20": "47ritkEBP3tBr7VfWBdLsgzU2wh4h2BftjjWbNxEcPWKcXa2PqHnzpfzLLFz3BhGpUwoAstv7LjcDf4XhN3J1mVC",
  "key21": "LzAdEoshyZYib3q95afhXJo4goxXWs3FgZMYwnpdfDeYGJop6DaELVJLHH23Xy6J3Xsw4Umt4mW4VZXPYcvPVB4",
  "key22": "4xVuVuKZXEa6X9Urghf5thYG1GvKeRjCMVZxacmHjSkUbXcscZYRZGzNzC6iFFnvJ1WkT46uXmsBwePhMyY3vLcG",
  "key23": "WBrXd2CcKoFyhUg9fsn383fcNxCscZFTxZsNcBHeHd9D5V4WC5tqJE4X2gcz6qJbWuUTVHAXPf7jWUh9wcuLaXd",
  "key24": "5LMALUxDpcerHg8e1Z9P1eiPTyBMNk2QyFznim3YGF4QVxWkv62HwtE61cjBEMQX29i64dAvFm7vbV8uYokRgNF2",
  "key25": "Jz2CxRKLMh4UhVVC9DggnVSEYXE31VLGtuw2sTTEhqZAvWp7pjvqAF5X9DqAxyVQCr9yAGX2aKXzaiEkTAwdnMz",
  "key26": "2kKwhPNMfyAxAXJib8n7XjsuuYVPpycH6WYJcKVwrbNqUBZ4WLRFD2rYz1AoXctpNPoVYZeaaLn9V1ecdpSqauDd",
  "key27": "4NpApQq5biEYkq1AayGdFWfB4zPvTP6GDXNJyZ7nBbrvhbSKUU3KSXnAmqJJJrjmwb1ECnq9GyqeVrTJDxmRst71",
  "key28": "36C8tcdzUYC93LbK25RPSwCYDbfwyGyaZEBG81AzfG2DwPBrhYtq8h2TV6jGXnc7Z93KdB6Z77a6A2vFANxgakWj"
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
