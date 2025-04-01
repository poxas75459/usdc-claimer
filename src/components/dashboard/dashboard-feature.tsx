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
    "4PL785T5ErSVMZsUXxximuPsnXC3zD2yKBKjGv3tccALo41fZ7krrV3TbCBSz1EtTXTHZfQ5yz96FCUMPxbW16w6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcHCedmcdnUQahwmjSaE5Mpend3QVB1p261Jrkt9W8cnqxhsf6jU4r9fHe9CpWNuEXwq7ca9ZVQhpGyFvJPW4by",
  "key1": "3tH3TFaddf78u4xqDtgJ4aKjRQQrSXTsbbF3t4Q581j9S6fbeTzxWwuc5FMaLwBqFjKvwsLCFeiiiF21SLGrATwu",
  "key2": "21aDEkMJ97g4RK9U4sgbJsofQX2EzDgDMRyEraugj3nynN5YMjsPX3kBwByUiJJxCrQ3DPD6aZgj3Hj7LS8YWQWN",
  "key3": "62aBAuV73TFeYya25ZPNX2KW4tuSNCcnah5cwM1FT84qPyT4PCKeqQd4rim6BL89jGaSMPCMyYnQSKfpft4u2bEN",
  "key4": "2e5ckFk4pu9HGJdG3Qi9YAL8zourb1cebEuHpPzawB84iUG9ybXpFqrJkVjTRsb24SftTEBNNtHSUqygUSBARW9H",
  "key5": "3ThMRNSpzfDD3nH2w5CjUWikk2Wj5XD5VsBqX1MuKTEZAYnbmxaHB7vJWMRVKfkrmULW7udJsZ2zxAZgKKgRNzKg",
  "key6": "3SMDzwm1pgoqJgGpkycbDsM8qEXrTbNaQ4F6J2Jy6urJfed1XfGirtshbAnm77vhA8qbHvTgsYRt1U4qsYAAK2aM",
  "key7": "5WHzs2br8T1ucYAP5sJbnNJuU4ex6CVeTpu68oVybfg1V9AnHMESWnYTSehcVjmjcpm9ahBkC1AJHhKcryLgovsN",
  "key8": "B699rEE7vqMzUUvjuD3LHytb1eUJJsuNJW5r6v4Nw1fWSHQHsNgE9VVafKYPrFkTSyf6ybWYuWWRjmzWX6UhdzL",
  "key9": "3WMViE9uqtiauFmp5CcgRKoz2YZujcx3zYMELVLmCKAayu7uqPGjr3mXsKBXAfntDw8qi3nsBVapngXr5mESbHTn",
  "key10": "4Y27w1QrGUGsWPbGAmQo3zcfBBrYtJP8EDTN34QTD96Yn69c5Nm5vzukRjee3X4CXB1cSqrsBPV1WVyaXcRg44AN",
  "key11": "2LU3D8yRef5nSqTBVBMsWrAp2ez7cgmwbFX1crtZngrNhnNF78efZ1y1Fx5q8zXwFXwTkU88Hb5Rh7v5SjhyxeRx",
  "key12": "2ACYn3Rgpt2tPaSHW2J3qJxgBmU3JU9jA2SyQNuPwq3SZV9uei8ReBinhQ2dv4vhXQwcea6MdHqUcf4KLyTq3SU3",
  "key13": "3W1gzDCMooGkBs5vmWc6FUyWBmHCbRmZQMq3vA7HG3KPTxpf4GcHgyipcvR8JtTc59VUdPJX3J77nR81Tu3ejSCj",
  "key14": "3iiNSrximUexiHPTxZHBtSft6LZqceeme7Hm1BShb9dZoqDcEt7WsvJY33YgRyysfQ8K9RUryWkMwaRWqoN4uJgN",
  "key15": "3FDzuudcyZiowcm9YSY63wdrEwtZDZNt3T7Hj4CEBvABcThRbyz8693Rq5wTNSrPr1gMbeu1Ah4QxRpEPGnr7vK1",
  "key16": "xMFZLXajuveKhnkp9ZwU1Tf69ihPwiSbXpxpnaXM1d6mjEGJTEXPso8UaYVc7T8zLFFi4i52wJoywi9WjtDKZBn",
  "key17": "63SE34pNZ1iEgqaTVJ45TNeeEGQLJn7FoqZMzmztPNatvX3M1GQinVsP4q1hqBsWMof9tmMazmy7pxyBmGR46AC8",
  "key18": "3gUvztduWKinVzSsW3BaVVUG3c2ckbyrx6PrsttpoQjwtJruYVx94Le7yAHpo3JfkaJctUK8MYzrU7AJ62eo6gt8",
  "key19": "5K9z5Jukp9Uj5U9r6xUFwEnChYq9FUE7Qy5ymJ6XavomDEHU5ixB3uqmNSGXaeFxxnCodej62AcVB8WNqSe2qVhT",
  "key20": "4Mv2UrfT2LePscGxgbuFTZgPZZRtryBrVysct7qd1BVE62sCv6YSvnpkPiCuEyW49w7XKJZejKGwsAemDJ7Hoikw",
  "key21": "43qPzFJuX9Lxg6uMDVWWSR3w4RYgAUkNgP28NdrztjuUvaJXJrQ3VRcRbCF4jUQ7sfyKtz6xFD36Mn1LfpQmiam8",
  "key22": "tWEKDsVYLFc8GjdjfErx2gddZaYLs84YYhUZBVMNCQgu4Z2msM4AuFrMeHawJec34xtMw7LmbhAvLKMXSJ1sttt",
  "key23": "2RYbSkR5QMdN5PAqjz6VbPtVKQbubHL4x4YyjhdnUWwdSZ5ZZmSeQn6AT82qLLL1hakf4cEorZLbrtEkiP7xmdmT",
  "key24": "2mfCganKrSJcEGavAB1DSMwq1UsD9Tr9jruQ92pZ87DS85xiLmqsL8FqC1Aadn9nfTX9hEJCNoyBpxyf9wfU3yp4",
  "key25": "dSAwJuE29kboSkgkNZSgLLYuwpSq1vWqAmumLXUEf9rDAu5j3KyTutncG9qGERqfCSih32PpQJ1dGp5jszkAbvu",
  "key26": "2yAaZRAxiBAh8uQHMuQHMethapg3k17tD6VjvKXGmadjobtbZtFT1EUtin6uYcZJUwE7GWrzU5WWyH3aQPm3tYXP",
  "key27": "38QHTrvmG2GoafaX8dbNPmdamjtkmeZ9QCGjibpM9B4ZTFXoxDCGLTAAz4higZth1vcs2bmHU94kceMyjPinMrP1"
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
