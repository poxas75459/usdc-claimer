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
    "5d9QtnpGS7MvrH6GP6N3Z15sEtnZ926GBVcjc8XoLqVdMGv1douGk5kqR6q3LDsv8YQa1C59Bkp8JssKt7cLuUFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVo9w4Gx8ehgr3AANcT7c5uUfJCrF9f5FE1yazwGFFRq8XXDuBf7dPtBHLQBENhGyrDiyQjCstRQ2jScPkXEFMC",
  "key1": "4DcwuLX4JfXNa4qpa61p2oUFRzswoNUt3RmLTqCDUu3Xy81Ce7UhGqHJbNEsFxCLttFdeWJDgYXs7qLSh9wQpGha",
  "key2": "3ojJnDyR8SXHcDovusRYF4LFSTi4AiixL5RNaUpXB7MQdon2iEkmEGwS9URFgtyEKrZy6PAVR8uPkwsfNpwr4yFF",
  "key3": "4u7VFogkPkcoRoEug41Rnk69kavF7hH8CFkpFymDbRETLR7r45KmVzKR4bfgLmmMN8q9oB1x9mEJmDjxkkEALRL7",
  "key4": "2si594DHvvT22srWWzwoXRdyGEmMHW6yoHzRdCP7JWT6iwtJtsEMY9vLpjoRsFvgyeu71XE2PvBJ14xzEmvoU66a",
  "key5": "2dgviV7K87wrCpgQBUWkvH6Ym8UNqAAXLvnxWnbRW47QuJEAn6o4UWuEQPEx54ierhjMTJuhzTH7NN68ifGAqgai",
  "key6": "5o7Sc4ZAvFmpMVnHfMN11gGDxmLWqRFUSmQn7wTp2PtSDLn7R2mBSgmv1naw2CozTNNrQooaPbvNJude3suEmiSa",
  "key7": "3KAyf1hHQaqM5fqhdUGYhdas8ScCuLS3n7vGFhKPchaF8ALSLjdT9bTcWSyxHrWJjYNWixyyTniqjSgBmbWx5AVW",
  "key8": "4qQMFJRLAUBMmz4mRrArzfDbja24kiWPd3D5LSAdyS1QoE2HaHv5jLbL9dEK2gGhFiXmEVWgqKqgaCn1P2GLQb5a",
  "key9": "3hHQ1okSj8zQe63t72de6f6LCqeV6Cn9acusZXUv5FhZ9DmVcjUbhYtGBMLNTQjDjeZidekazZ1xqzzctUQcZg6n",
  "key10": "5DEPuLVodY2HcVzUPeMB2Fsy2yzbUxcYAwPbEDAVELtbRrcNRLQGVuynXemViTpEM1knHeK5UFuDqaSzVxWoxZ67",
  "key11": "45nn8UPpLhbU5oj7b6WDrXKCeitHzZKtY1tLVzB3zAVmKx4ur6aYePi53Wy38m4mmy9pi6ro1oCdM5rhcWVpemq3",
  "key12": "3xUDtk173xGeyCQU1Sw8aKyqdRAa9iTTuKTMkApds6dPWYGpExnN7THRwVa1mT6KCNx3mvrpdkxTFmY2VNooQ8fS",
  "key13": "4gBQi8oafz4pUXjbjzGKvEktXXntELvgKYDHpvEX8Ba5tKNZXDTn46gzpR1bwKpKqs9YJTa26M2iTDMKSVADuhqi",
  "key14": "3yqxzHXDgPFRTuR9s6jrkcEavNfXvifGC6177n4D5XE5PKrPC9DB5CXGdcPHZ2axiLLSe8PhWEZ7m65iAoR9bemu",
  "key15": "9RB5m8EJvCsTCxuT2HcnazZB1FLJFzuufZdjymG9x9s3rm6L4i7nZmP6NPbScN9m7SpXiugSn3qg88YARY85zYx",
  "key16": "3B2peTaPUXXoxRYgk6rwcQRMvAcqceDLTndveVcpNDFoDQ4RQqKZYP4rPKVAR4MgQNZ6Cp6bmMnYvFpgJxJyhWMH",
  "key17": "5Y7U991SMjUtaXwKto4x2hAH8TM3bN4N9mLUDnNZ2EXiDk7gKtT1dofSBQqGfSEPXeSXDA28eQxMTPJcRucecZPy",
  "key18": "3oYCoCJ6iaxheWa95Gkzpt9wBZU8o87kQvqghZm8ubDyRPnzs4mP8ttYRePZHAf9TBFPWBWrVafD5QmNMpmXh7WE",
  "key19": "23zfieHAHu4dArgW8p9BUyPgHkMFUXzUGyf16J8pyL6GMnd7DNi1CTrwZ5HJv4AifF8nQaCnhfMPm7tek87RjUeG",
  "key20": "3foYAMjdYvLpds2TaCwfaXMU5SfwRYZqivGawfQwvGdRcCNmyQmmrwcjmYqpmWtoZqz3mAmKcDiCSrgVgPj9CcRu",
  "key21": "WxMZuwyr3oekrYytSCDjx8pdD95jGkJrzE1z8PzJmSvo7MjhBadc38ERzAHjMw7CxYemTfbhnEZ8tfs5iiHCoBA",
  "key22": "5qjLYdjUfUWPLi3MdLV3cDD1rpNbY1N86fxFjwYKTEFzvSMUgNcHuFf6NdxqNFwnxroKJdrzskmh2xMYDUTbWUBR",
  "key23": "FhKYqMGxXozdvEKjcCWSiH1qjCaieHbpxm8kAaXFADdcybAtDWYYT8k6j6EdHtJi7BnNU4fv3YwP7mut9ALKzsp",
  "key24": "Kuv5Tp2QRZWKnzCbTBdVcSLwrrnuBKcKmBoTYxuURPkazUAGx6GMGHBttheEdiZiDVQur1XY4ihfzhdFKVLnMBU",
  "key25": "3PYSk75UwdNosn7BLj1spwXFYYjr5gdyQ8eYr7d6k4JTjxF5BHHWyeA5KZzNd6Gz4NMBGQGAuZv4KpDTpuhKJEW1",
  "key26": "2aEM6MqwxwC5hPWYHFHzRJnThLYHxztsVfhf1UdE8BTYfQV7df6zeMpUcX5cdQCSVw3zFZao1UVRfRciZLN5CLhS",
  "key27": "3FA124B2gBsDgVSjHgaDh1RJcq5QLt6b6JT81mwRJQ4bQdzX2hJrVp9643qzu1EczLzQECtTqggEGas6GW89YeM9",
  "key28": "2YnvpZNkYWFeC55rWTGsy2k93tskeojhCJKX8TnDRdxaB4bMDeb1qGWzv93o3QdaxGygEjtmbGEyYRWAR6b6GJE"
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
