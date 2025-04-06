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
    "5UED9Di7uP4GypL6FY3pG1BJmmWaETULHH8LbZh4by8PNQXjsi1smp2e3mnjxaB1yAEoCyZvyMKFajk9Ry2wZ88f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WD9f2bc1xxorysU4LiwR3dVM6jfsXNnrPkwZzQdySRQGt8hmAadTDB3nJCWm4cb4R9NhSUBhAsWy3AzhkH3pqjg",
  "key1": "3YeXQ99WQnBsK8MwLUqUgqFcoqWYKnDfRqLjBswtdj8J8Ca5nDMe5vnmgpeTcXdS6FTpftJeXGditP14t9bFGXMj",
  "key2": "2bvDsancJZTsSBpNWYAyjgJKWgenycXqaBRDy4JFfkos8oJQjhncaxNNDT95GaFJQMqgj8pykLuVb3a3GwiWzgMH",
  "key3": "9pUnQevhM6zAJXxdQwxD4bdeDe3GYxUXmaBBLs6kdWfkSfC46ZnmxmnDRwSC2vTLvJkoi6t8bD6ZG7nAm6W6JRB",
  "key4": "5mxupWgGaTkCxbY5r7Q1Zaksstd9zNNg6vyt2TJGTiZUPw8kbYdu3wtqYERwBwLVSEzFrhySM5qNH9P4CenQH2bQ",
  "key5": "65iW8d2dVGUzHfXJWrJBayUqp7Q5jS7HSaAkd2e8Bph8KYG66VAd8nQX3pX7SXQjc44B3dzHMbM8hbDWwwoxkWzU",
  "key6": "KyoAgBJP5XmBbzt54yV69iPCqKk2ASLmBqJKwB1cGcZH3ZZjrAG3uW9FsWJw8KanFTY5e6BJ2UEGLkwXh6GbqFC",
  "key7": "27K3XtHTbvYD3kR6orbVm7UFxTyxFTV35UGpohm9aattiJciaJ9msL5zhXXx15kocnoaoo1sKmMJPemuUWhoXnCY",
  "key8": "2mGaYfYv3Qn4NHLxooYeDRweFhbvv9a3FpB1AFm52fpHwTXf8g2HFi1xjjjG7De7vNdRoFrHFaF7nS41NYpbkQXx",
  "key9": "XwPLd1yZuXcBkJf8nJuyVWjD5DiRH6mnAqAGKK4LYrRAMhu1R1gKu26URfAwE26rGUP77CiYteEbpVvhuW3DUgf",
  "key10": "3Lxp8KdCg49vePdUNG7UVyaLyXybwNXjaHgtJ98DsYyY5g2TgYsFUoWNaJ3ZXrJWzhpcQMzmhr82pq9zRo3SCpi9",
  "key11": "37ErGcXVU92CoC3e6eCndjZzPR2J6kKcfqfrkSvMQDmoHPHccEKRRFN1JgoLCjrZQsuXQDuLFYiHWJ3Za1Ls1oG2",
  "key12": "4j8Q7fqSUvBc4XTxuK2o3RxkcLyC6G3JLXYGpFF3bqTc2qLUNc5pzA5UjmieGSCsLv3V6L17KSmggKcxfPtcw1T2",
  "key13": "2GnZCFnD5c6KxdaJqqgztbeDWvkKwjFn1qBN9dYnizffeE4UgM8VjS4KzEuVHXH79kVU3MFCLAKdgnh62pkrAraB",
  "key14": "2RGZbKdmuasb9wrHeRU2EnqufEeRLA3Gcqz9ztx68oGXt2ksqvVArWqRas528iU2kTBjhEiZqsirGhn13vqJoD3U",
  "key15": "4UL6ABG7ufT8SbDFgTzCXpeiT4TPz34kzPZZHJjfndrwYEKxFDRHWcrMmC4NDCeXQq6Zm3GtjmWyqPV5gpiwFQY5",
  "key16": "3RjkvkRVaBrzS9zWVYq7415S8kzSSJ296Dxb3DKyHN4yQMWjnNKZS4tvE81DFgY1Lym6pYmbU6w24Z2WifmqRi6X",
  "key17": "2oPg28b9TVwcP6E4nNH5cGQSQhvgbSWvUhQBa1YfwDs38MnMi25F1uHZWsK4B5EYNL4cmghxfG7ZujMw5rURXX82",
  "key18": "5EfbtArNYCQrcSbkkKFZUTwoHXowRyv7rtPwrhdw836ki2DFAuA8ecjFmKpXjAJ95jq6v8zs6W77bLMMtT7R5bHG",
  "key19": "5F4UsJd2XzRezZhrZwaV4ZDKznC7e3wye7xv387wvypPuJ5qiujD6VC1FBdb7kA64UqoSaWvbwV9vWQQ3itB8ppQ",
  "key20": "5XrHQKooxV4FpXnvQYyBjFQG5EutsnwMCGrNXdBMqTNnAqZ7x1HnPVQggobn4HhUjzt6fpi6gezhVoqjFfDGiHPK",
  "key21": "5pWBjuJym97GrKR7ZrcDntYrmgN6GVv23QpjVbrRoZz2yfdYTyPrKowedQyq2bp8eoxx25FXyD8FEntKbhzuNcBn",
  "key22": "4qvFUUGzdjng1qbLEGYZ1vK2JKgKLrcDkFTWFAJfWsnX3FNv7B2hDW9Xd9Hq86ZL1nHwy7RiCo8nXVpKTTtBrtJt",
  "key23": "4CihXX9T8uYWntBFkvfu2TdedXeaAKm1q21Ft5t1K1Mb3wRpjtcXJCcz347pdEGLZ3vjrusPUGQoS7CuPnEGbb7m",
  "key24": "3zVLrjzt9whmNjxdyDXicw3HRFALV6iMtxd9VJvZa21FQ3UQ64RvG8RSXquSXy59yfTWtreWwjiiCU4pfTxceRJy",
  "key25": "2enNWNC2BkqXRbKJNz4hHaTbeqCWSSsEiYynMHVEMWZR7REzUrVVYA5WHscynjN16moxyo4xPJw1S6Ey7CCsjE75",
  "key26": "2LqSnuMGsBAED17zEFzTc8qbaJyjzdoPoYL8XWMpVuDxQAx1Y7ecRH24k7PRkQwLcZXcNLtQZWGa5wyqsV4L8bh",
  "key27": "64ZbjQ3SWBJc6s7AZGRH3aaTd9az3o8emfs9w1b5tKC4g2wfCKyCzeHGTYSQozoBZNbh82uLsbEwbTMzQqgtqcAs",
  "key28": "3oCUPF53mcg2nF5X3yHWS1DQ9qeFDYxH89HidgG63dey3NJWNFytZTtkzERh2xQHJynTM7vWGDzu13Y73ReLmjxK",
  "key29": "4NcYMW7fyxxUhpAmXnJog53bwdxTqSw7Gf3o1VdZzc42SgbYkrij6VoGXnYdNY36PDJktpg3ChD1jbTDtMPKiSoa",
  "key30": "2GujFUFAfiE9xXkRrj8Q2LjXFgLqEjiiwTGdoyq6HT7Fr9Qj9CYfqWz4vbMJVjXYn9TejbwLwYjgshFUSLQ1g8f6",
  "key31": "3AMjq9PowAymLshdvobRKoG6YunkWptFPLim4zxk394NdDjamWFoJEo6J4Vzy42NLjnUnXHBYYx1AoKwDuodgfkE",
  "key32": "2bNDcSUXeB1QtQXh6Ys4ugWh37eagRDnUHBXLSfHdJYjPaqhiyg1UnHL1Ku8nJbgswPypMK9Dq6EQSuop1ikoaRN",
  "key33": "5FmKHRdEV2W6yCsRVuCo9RvoZb49niEU1e7hDz64pCkpW6bUE6gu6dmTgmWQiYecwwoamRRFpsofrxXWH7MibaqK",
  "key34": "2CrqjD6kEospcLq2cyKr2nJX5Wrtr3Qe2nyQQk6WVCxus8Rj9Z4qZsTXJKm3t6d68sCK5SeSzDyLsop99BcGcQwU",
  "key35": "Btmg9ffPsXdEYuvKsh3V7Nq1GzBgT13Bh26REME1MTHZKEyjqC9Jv7H6REhRqXMEtdgRSFzn9DBXz7JxBxpvnrv",
  "key36": "2X4nuqrYz2LBNkgryccER9wZK3uZUscs1sHz4MZpNLSAbieVNCQZaxjZWrrK3PzEwCUbHezzhRmjPqQch41SFkwG",
  "key37": "2uAJgP61PgEKvLWpYtYJ8KYXofDWdohM6f4RwM1miQnutdhu5PunBC59gSmCrAueHumdPSkj4se366nAMapQW63y",
  "key38": "4csiZ7D2xVPd8jizNiY9jinBQc4atWrKgoLo5xWbLrLSNnoXYvESC1wqpb7XSMCMJdgyjaGS2drjxEBmVRtYDbHN",
  "key39": "27Frd4FsvAYM74Hg86JnTjncAUpLquTNdNsYMT1iJAYWMh4eYRZNPKSjW2STgv57JMxiL17ZE4v4K8fqZvfxX3m4",
  "key40": "HnbwvRvwpiBpYVxRw9fZJZUzp7rG3w25J5muiHYAvPPBiQrtCpEhvUWKwe1dDNKso86i3nbpTj7Y5sav5YBTx9h",
  "key41": "3qBAxnUBVTadMhx9orW9ARpTvFMbojahasvk6k3wMxBcjfZp77cNEry4nmwoAGSBXpiXPS9UFLqSg5XyHewUJhaM",
  "key42": "rFCZHafsaeJunEWB9pGGFHg6gGN4ZyeCANATkMs6bo4ojErwR7aXuWCh9E2bnTYtdowyY55K7WqisNBsdiMbe43",
  "key43": "fuqiSu2KqAYXauDacMBk28kC9qh8NgzoLW9AKexpntbtepUkV1gQauD9pEFvYALRG6DueKHtNCWkik941dSpLBQ"
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
