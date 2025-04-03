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
    "28mwf5bMir6L6pL1YyhutwpFS6xQJVNbbgYD253jcxuKaKmDGVs1C76TYM9s9kna3MkXfk25UGTy6jzpooTMHSAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61MZb1AcfeEzbb2eXsvDaBPHkcrq7vdL5QNzh3pDwKcKBhsQEhuZxJVFXq8wKqhpUukErjVpaq3M4DeVLDff2bp5",
  "key1": "4HYWFYw7Lwg5prUBdDabBordVWRsfV5bQW98oHGi3nnwjyqDJtAo9YV1jtP5grWyw5LWpt9M3scBMMjL1kwng8nH",
  "key2": "5fMvJoiarK48qnKCnXSABVingdhD7xagMjiDtwigLXv3hGRoXbX4X7swncyfwk2Xi5S5g9XWS8W89Pu8YQUgX9Zk",
  "key3": "3GqC4YBPPbyZ7bLCfjCL3oPm3PB94RUk46QuQA9DgUZFwWkpHcvKRSnmeGyDA2cVdLLDWd5Ny8N4H6ZFHyL8ZqsV",
  "key4": "3oEimdTGsysXAcLNUj58sKLY24cWVHvdLtoHRvyF1nTcujLdifaX3nNRXtddhsWBjFj6yHcvseoe8HViXUV9oPHq",
  "key5": "GxaRmmN3SnGkSakThyp468iLv5WY6qQMWM7FgVea72XviRRxkgWyTaetAFam4vMXMUNKbMeM7FDbALqbAoeT4HL",
  "key6": "5kvwCmD4MvFL1kyE5RPGDcniTohcSH21T7manZtCRuRVSVr6Ti2eQrZjPFqexNYfUDaSrXLg2aQPMvz9GJf62SAo",
  "key7": "4gXu7XY8dZWcaPdW3fYQkX7GwsP7mmLqomGQiNqheDxSmyj23nJ18z6Yn5oLXLQhgWRyeSvVbkVfwR5zk1WCfDns",
  "key8": "4QQPRk5epxgNVKshDbL3udenBWdCSz1vjSrpXPMw85D9aW9tNzNTdpNgVWRhV9bx5oYTFb45nMsk9tGgSwZBPWwG",
  "key9": "2ErpWuA5T1PEWPzwdsntE5g9sGXap45f5UcyTazUVPWaM6LWvN2EBQMvRepKLoUmdAkDAAFJ7DYqpz9h4iVMX5ua",
  "key10": "tL7ThKripKBF2NWDovF5uuT9sQw7QzYXJJwfGhPrKJdB9ak13qFLCwTo5VKmwbsTV8MGKPqmz3ieL1mKon1qM8a",
  "key11": "kJxiTpeGAKVNLWKzHxbxxzMeVZnuSTqaRMdkTJGM1kGnkefDmqS32RTpzqVnWdbSr5zc2VHQpbeptEJxfCNoLAw",
  "key12": "4HCFnFSE1UGPPMUUBGKqvWJV3QVQvPEWAumcgMSw2y24c2B9UkDjLoTTjSeJPEk4UEPf2yWMJrs6CqdCWdyc1xcN",
  "key13": "4qk65ofQ2b5WMFrmWFp3YTQZ9kYDcxesAGkZhKYNJBC1hURdTRSjfBAwGKCohrN5YfCuq93Waf4HTV5TVnTnNEMc",
  "key14": "54LQSsAbo2jHf9mhUSCBDVaBXyB12ydkG4cgB113gYzTQP49y5a1Hhj5ydzfjqzvVVL9TyYEcUq9XxUASvC3ePHS",
  "key15": "24LDUe63WuktHfvUj9rPMjXjesG1P7e7saHwgiNYbEHrYfVjWXA4HjxKwdcUGz81HqzUNvYfRVB4SW9q27vfRSCE",
  "key16": "5jWKhU2UJ7q75AYFyQems6nJX19n67ok34offyyvnzDx3j6GhiPhN53HKYsH29T82tqY7dYdmtQuAs7Zywtqw56U",
  "key17": "MedY792C9yBH6n4Lo5q2wkTSMuzgMFTqF4jta2nGZpxSnS5wtyednahut3P71SheyQE3nTpBYo4ppGAX5hUxjK2",
  "key18": "k7wAaBPwVM8kYtVTL2i3rh8UGYGbX1QjC245PYNhukFZBGrAwAgeABSvn54GPARdDVLbHKvbmH9DDt7T6gjtPdZ",
  "key19": "4ts77MkeYyptuac2GJAoF4DZRELSJxYEmWZmSxLnDuPjNqAhBJt38rWqisoJHZEhJhn3HR5F8Sdo21Yv3wP2zb2c",
  "key20": "3pdSV5v27ejdF6NoEySdqnTa1FQRYrhGAGgqdqACH75jPK7uAza8etUC9jvRQMtqbgbxWF9w1xtmVdch1JXErpc9",
  "key21": "KSEjKqxt4QkELcPeJRDw4Wt73PugFnRXdy83d4n8wkNQ3LkmrUdLVg8qWcYtTA283reNoqaHCdkGmYPgKtygPbn",
  "key22": "3Tv4kLsZ2XnNVv8ZzJJ2bEJk4PQGJA3kjQ56YWzYM9sTZwdyerX9jBCC9TfJ8jSkCPgnssr83bJ68ugxW3wVngN5",
  "key23": "668y7JaFurLPXzhG6ysrJwJkDVhT1o5rRQTTETGCQMdWxqpFtYdzmMfo4GPPhT9hXsYyY8baTCSLy5u5G2tXFheN",
  "key24": "4XeMEM9pDjssAuifBv37zCGFbUt5u8ud2B9JftmuSVQqWSFUntnkamv34s59du2T3Yh4gybDYThLdek6eToYi598",
  "key25": "Veg6Pwj6zUKJ1LEgDfVEK2esV7CLTpm9Y3XRaPNRa1ZQ3K6gSBi7ZoDDLGiPbPM6nqbaE4MzkdPk2twyf5RLdzV",
  "key26": "662QXFYVjC74bhRaNzioLbPZiySRyM1JnFUE2kEbdwzct1YvPz2ETfbDjG6wP6dDZqzjjvjdKbYnKTfuHb58DyBA"
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
