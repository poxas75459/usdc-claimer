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
    "5m6x3aNkTc4ms8cj8DdGe1qutmQ8XfzA3qypF3GXdE7Qca1UFkfHyhXvndutoTB5p4KAPLshABd8mjVBtX185Txp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPBWhy5GtL5e9cYyPuA6Hj8P8eFSuzmSDTKe9Sf3KuvWfQHnQZFLPRqgG4qsyLCgaTzKexgaA5nVT2hWitXPLks",
  "key1": "N9xKfD7QttfdKjt5ov82q3hH4kuqiUcCnXu62yvq3j19xMUXS3BQjMtQRFkMvkHYfzBdUgNoBKmaB469MFbbBAh",
  "key2": "5KyH19eTKuotcfCFhPXbeexE8AHSuxfjwikQ8Y8RpurUo5nSpWeXCMqXpe6rU2fYXSJHAg96yoEoSzkdoinVmphW",
  "key3": "2onDRGC99eBDAsThjxjBdRALqXfc8EuYXYWTDcAzHYyYxxtBPZrwsD2Gs8zok3eeerM97wgXDN4sTFngwFd6vSt4",
  "key4": "44Augqs24yVYczYTT2XvpDSUAoyYVmp6GJ4Pb3BtABPurf8gK94tDrVnsqGH3vaGErEt94XCxmmZdrpav31FEk62",
  "key5": "52htMrjewRJpoBATLP4XFWafnL3aQBjPzKpWfMYd1RdreJ2qcJHDq7ZBWi3yFnkeZwC9WrPzTLmVepnSabkcyoey",
  "key6": "5B8kkKcJp3XdC3pwT9wtzzX9QH8LDbQGVhymNrkfg8YuwjF7JjEwfEyeQmEKuhgi9BNVqK8UTdck4pow1g71E9LX",
  "key7": "CVgVFHV8thkqf4vtL4VuqMKKG9iL7wAqQ8QfG2My5zH7yjm9YhjTpMy55gHHfUHzTBbZnMtzqY8anSiH9yZGeTf",
  "key8": "qwKxnGRonGr9JSD8zZhdHQ23stLc3AMhnd6xhj5C2VQ6QT8d4yr4gFPuyPsNG1tXfTPLteLWoJwf6guJFuozkU1",
  "key9": "4KgZTyZBj1UpJfsXxxNB15Tx54x5n6q9KjdQf2DiJo15BWdygCejDjTUHo8EEXYquVUWEKVw91eVSbaFLzqTZgfE",
  "key10": "4Cigm1AxLCgsyucU2CJk8hKYM2Ht16ZKbnztpw7KkiiAXPhoKXhVMYPTApffzQEeFzrxtyf8sP58ByL9Sr23dRWj",
  "key11": "5LSHYU4cTiVekBdHRxRV54iQpUdHdmDtDNw5yEW76FhngiQ6uGhrD43xv39rxyVqecjbF4Aa9qnAyjLWF35Ty6zU",
  "key12": "K9w5YFGDQdo3jjNsHvySiFXx7BRYvL4yN56cGiBCEwf2AT3YeZLNWb3vS3sTEwDUTEvPVX7fxwtC9soyMsv1bKe",
  "key13": "4f2q2F7MwvokXtnYu3qu5Pwf8uidsGtecLuyZuewQarhZxAb6VGAFf7zFF4JZ9zoonZ5CviGxWpSf8spxafmy1pH",
  "key14": "4nUksEo8FqAm76FtHcAEqMxAizBKGRyvYbPBaSzC3ASV68VQk72e8k1g5opL9gxHPeCdyu4Tt87hRTwEEmGMWVJu",
  "key15": "32KXBqfeQZ1RiTcjCpshqKkLbFvtXmX1MUYutBBcmNGNRQk137ndfQjo8CjvNNrCSmf5vK3141Xavj2MAeFK1Uhw",
  "key16": "2M6MJ4nFPwtgwTRKyxkdLUan8X6C9NXHjEkdXppxpBa7eG1NjGTHydVfFbQePZHtnbzUiGsv7QUqUwfQ6BVA57t3",
  "key17": "3ob1sjMUaD1sFsPs7ckqArQQbxaJk7EmePLdfbZ2VXwtfgC2QUsV5vcHSSyBqiEUUASHUGqxyUGQSeSWGfFyF73Y",
  "key18": "2URsXbXcBiiCCSqP5MKdAQt6AiXGMUHb8PzX6XjhdByMPLprgZReMKDkxfguwkowBKPYEvK7iGCTnQ4xEaaPDRPp",
  "key19": "EZeDqDmUBEQd8TaWYNKTikh1fSQ3TarqoYfDKHsFDMJxxX388y6edt3Q9dC5QE5qaAhdMZsBB5wjix2jqSCp54z",
  "key20": "3vdam5Jc3Scct9vv2hh44irbkHHqpjVNXCyCMu7hJYTomsvWKJUvziHm1KpnxiNNpbaqAjvPhDErxg37ENrqES54",
  "key21": "59qKQchjzBCxJmqLEj9aQDHZQK6V3ZuLAAJuuedYY9d28wPoV4xEMSroc89ZX6KzVZDwpEaDBn73S3UZJ9wXY5Ce",
  "key22": "46q4Qw5DxyXKYnf8r8JQTMUwQiw6wLpeB29HcVNpcErCLVcFrAVqVv5tnYxNe3J24ektVGzUtLm5hXCXcd2cRxnz",
  "key23": "2Y8rBmfcUCuWHYurCEW4FgXKkUoVPRk9Q7FrbgVNRHMTjhHcqRiWYpXSUN12wCdYQnpwYb2ZF7T5vMVTkp9BHcar",
  "key24": "2y3qhtG3ssKombQDqi5z23wcmVNgppWusGqRJ2BQpgSVLdi2ydP6bLhJKQ5qznFPVvoUGW36uL5w3EgxPncKVNmX",
  "key25": "C95bfoXcMbSF2Gb8qfCipB2eDZxkuyRtz7kRq8hdtKFDV2v8M1Q22o7VqfeMHaDjydcRwDJbreQhtxUjLyW4FhP",
  "key26": "3f2g7wXYxeoJEojVatnJro6oiPz9sifZr9udbg7N2d48anHM2MrPpDQma9ETTsbshX1hGLY4DnYY5HvtEyMQFK8F",
  "key27": "4iRRNKVm9DisjNXjchDr7rbaiJCP9uC1vPN2RUUbhKxKNi3JJhVLV6xmAagZ3w2F6uGgXCDKzAG8M7tZJwbeWaVX",
  "key28": "546gmWiZhfcKYStKi6EC3262HesnXVGBa2MuvumWfDjbHUB7MKHpwAWGjwguPYYP2iEMdGAb6U3SQdX61GH4MXVm",
  "key29": "5EikMrehKhqYiQef8ZPKPeu1SEpyEK9BoXhxVDy9T3gu3kz33P9btRLp2znPZ2F9zZpkbtW3fQXoa46JEjKAGLUr",
  "key30": "5XbKUFrG5ZiQoeuscSsQYqpeS6dbbWLuX1ecKUCqFzxt72FaYRkLfGhZ5w37jxg9BAZt5hoUeAw7VgJR4cQDfHbv",
  "key31": "5d2BWCP8D8AW6qvzPXKm81Xy8JqkwXTQGNyx1m7bDBzZJoRe7Y7bnNWbCRxCQn6ny65RYdQYyPkMy5Xbk9MJcVmd"
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
