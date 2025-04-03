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
    "3uu1dGicyYoKSFea1cFkbh7C3hVACt68P4MkxX3nfqHyS95gJF9TKWk63VaokLt98b1rohahZfDuMaZ18P5M7XvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QVtuKGa2kpFh8AdQJyVBrQq4q7p58T8LDfSWtjHVZD4Ujd5tCcnsiYyPWUF89jcMKhQ9cUDU9XYTF3vMaQhPnx",
  "key1": "21ZZJuH5c64GD86zeV4j9SuUn7BNuzhgwWucif4LtA8woSy2nSdHmARQEaUFAcVAMpwiFxfSS2GrHE93AppPHJr8",
  "key2": "3Deqf2KkFGDAqJzvNU7eFzwQMqpomAfciAvgXjgJ5YWi9dojnadgJwJFjFpGTHsv6S7h7vi9wJ1kv9PGrs3PV8Gv",
  "key3": "58YRfTYEyxUQ23UjLozpAsotdtGvmqKQuf9DKibYLras7jSZK3HqAh4TrSwcCo1RqDXpJRkswhFivKYR743kUkTQ",
  "key4": "3ex1HwpYirmXrTbUwxiu5wMkBrHNZAHozS1QWyLrVjo7ovgz7PW7kFf6HvTPF5DYsHpNsRKJnGWf9kBiS8qgCuVz",
  "key5": "52zkxCvK42zTBpZtuDKXyapQavD5d5DRQzkpnbqgrqfXYJfguWV24xH6xbzACofb9yAzVwosjTNKCUYEYXsWJDSM",
  "key6": "4crm6xWnNfkMWAiK3y1nhWA7jY25xafWagYUXUqCmqPeQpKdPugco46PcVDzvP7MATMA7CZNrDN2pTGdGuDaRfZd",
  "key7": "yLz2xaxL3LAUQP3G2Y3Pv89WAXkfpajWZDf7izEaVfe7P7decgTnuNqRdb1PPyDrNriPz3MzRUBHVgNr5QVr8xM",
  "key8": "2DZGZo7ZZ41dL8cPupBdg4cY2v9TBhCEsb1JjZ2v8YjdrzWvhY2eLDpkWY1YX9mnDsc2sizfYvusWXPbJ3hH3U6U",
  "key9": "4MwBxfJWkgKzjrrEEgsNVVxBY2DXfVPAdLQbEAsJLY3NBxHV9zB9Fc8uULuXeGxPiM4XMtjKmo3Y4rjj4VEbUN31",
  "key10": "3bsAh234VaVXNaN5mcr9f1ZTqnFjQbBmUq1HresheKR73Zd1yQEbdyTNmwS53DsxDCeMWP7Ce4FcBbmAUxfWqy8c",
  "key11": "2kzsfUC6wtxwybugkG9JnQdDEiM6mQeuzrom4ughse4NkWamUrrDeuBYqRDjyKCo6jiBW11DA4WzbYKo5HRdPibH",
  "key12": "4tFpCq2eesu8s6q84LXUijeehQLVWN66qAkijgv9FvSd1z672MePaoBpiQ62pHeDkK4rtwQv9ywoVd4SAEkVGqyu",
  "key13": "4sVgwMMcbACyywcJtEGGj5rRJUeLS7ZzvfvNC9sAZzkvntpFjLmzKPt31CpVVyv7uocG6zpBA8tt2yE48m6Veikj",
  "key14": "4pP4ToYbKoRcDkGyJPVqjVwhKBm9zhGiUxJmg91SvgeRU1pWnXiA1jUqVoUgHCVxsBfaPhAeQCDWTmTg3a3xNSK3",
  "key15": "5k9MJFu4vRpsaNCfw39wG7zR6CfyYKW3Gwst66jEtkdZeb8qfyX2fzktCSf8nV8CDypzKC4FQaC7grcNPygMToFU",
  "key16": "5bgqKJq58EgCRLrWkDkeY5QTs2sTZ5TzzdTNqAtH8mxHvKgtRF3UhLExYSryeJPFfYSq7Hk8YAH4mTts5cihff9Y",
  "key17": "RL4eE2GzTx1u1WQi8hEfdi7oN89BSQLZgykKxpk4avRDw7VRjo1Wqv9nk6LuGzVoR3ChY7CeHJtAtMiByPCTTZc",
  "key18": "3VSwKfm2QQLpSZhcQxPdGo6aCXtdqM2oqsAW2NAKs6K9kdiCREk4excg4RbXrhX4hXtutfrZtjNyMYMtGS63szS2",
  "key19": "4hSzmNoMx7JqmCcxfXM3wCUyowGeZL167bGqHqFRmTgcaGJhsCAAL8TZs857iaZxM4KTm8kvwMEvdXrJVqskJwzD",
  "key20": "2JekhCPR8YHgsJ8eRHQGXzzPku5QkECBKwPDFJnMxob4evyzTa9QUTYMk1MgrLVF7RMGT2r2neun87vMejEzP9s4",
  "key21": "57fHjYYGBSre4gCsGc81zLoGERwpSCqiuGsMfE1hh7YKG4Fts4pegR1MR6fprHBUwJ1GGW7HdwLUqZ9RruhKLy9X",
  "key22": "4YuLfe4Wdqbdtt32c5x8Vsd2Y6idmX5wBnqh9KdmDSAKomEVgNoewmC1f7zKh1QANB55PQ1b9yoqWY7ZgDZH7Ed5",
  "key23": "4HTPhcT8g5575uRM8PZCb7tkncemuuVnPb4ZJruxamqJ3hfBJfxcxLKhuRTUQDrgtsoSHaKBug18VZEKhUGU8Hvy",
  "key24": "4R1pBnTJJBH6xgBJGVr8qHJgA77xVzzcodcDBbTNEs1U3q9ZDw7YGPHoCFTojZFqYX5caSEUk5z7Mhr3ich5vThL",
  "key25": "4R9fBbXdDVNSCtigfATG9GnyTaqF5Tf6uH36EhkTtYCEcdTpbBuGdmajf8T8UrkyTHuZPd4bJM9u9Zyi4HNYGGHS",
  "key26": "5WnHCsRr5TVoUfjmB6qX95rFjg5K2FxJaPYVeiXBTKR1XzmgtMowVE6bj4JZKVtNKYEKeZvwnWzTfGTRG2ecin4i",
  "key27": "3VMvQnAGBzJMV7NBVc1fx6ya8rve5K8UdYAeJuyxp7TnZsN8CaYgA3wYyRvj1J4gA1oYxehwZAhnj9RJWdvgXTwk",
  "key28": "3QBGRKNF1gHYv7TqiFQnoRfKiUrqyZREkM3jD4kjqwZtEnfmaNSkZcohNkbzKggA2nD5BAPFn1UscJShCKFxkpRV",
  "key29": "3rVic4yiL5YuuLSM821ZCU8X3CLC96EHLaLed63XBviQFTziPwdBcv85TxKijGnEJuqqDuL5uUngkMJjBZwTEQMe",
  "key30": "4NGPg9EeLCjjw6yVfTXC3qiFvmstnxU8FeQ7gNWGhWvz2SdZWAwoNbpJZ2TNdUX1eDLRNJHKDsbd7JEk9MroFsRZ",
  "key31": "2VnYQfyV3Jn9oBabmRJ4Dr3rhF8rdLSc2cYx82HjBkeGrmwuu8EbvTxPixdTzstc3AQDUCRZzCtygR8ssUkEJwQk",
  "key32": "2P683mNJy8XYMHNhBNW7SG1QdiNwyLVtUxWmJZPMYpxGEojwfF7gUWVeQt56kXS9vckDURmWraYCZyzZL396Ewdi",
  "key33": "w6HfQa4LBB5PseU1VbBYdJzx9Pxjiaxj7aMUyPGsxbPwgTnYibU8hQivFCa57vrNz9BYZ8X5r22Qew1yGsBBQR4"
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
