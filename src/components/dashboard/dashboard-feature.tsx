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
    "NqdWppBC7coiDpepNNK9oe422xDAUuQc1rk5EgRUydEHq7DLS7XJmZ81GCxHJrGTikopb2GizoHgaMXXCk7gc8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eqrwBVxZsWxs81qPPwUyKaGqsc56Bjk2EqpwCpHZehWH8XakPmUbDqtBDdU5YA5YLJ1iJ1JrYxQ212ynkYxB2Q7",
  "key1": "5cgM1EqoQDARixqiKL98f7KCjhpme2aQtLFVB7ff1pWv3yZsSxFBjsnDFt5mvpdbysi5BALqDkfxKFkFQif4JCQ",
  "key2": "32sJGo2Pgru7o6gMjRWYQ3B1KSk1QdqTAPfVervWLnJ7gzBF1pbagnk1yCdN6uFTC5yoZCCYfiBFtqLk5yRHkmD1",
  "key3": "45iJsVGs6Q1kZsxCeAQFSA3wqDAzABvVgG4ouH6pHoERvTgH5zdaB1WpcxGubFn5ncjDvb4prcVF23eoJDZ6FJfv",
  "key4": "3sVWYxa4FHVEoSHUzKPEdWEquhZR4E8xpktXCh5vbpYrybZ2AzR42W7QhkL8MFVFqbv4kjssv4scWz3wwbCRkMhL",
  "key5": "uAF8fpKJf5L6x7vfRKaBmA3MTLs4gPjmVAFpYdKmEcWWzR9b53sBr7bzb7Q2SyMSXC6gkGosT5Nqzf16bSfTrm8",
  "key6": "59JeFysuhw6usjpMCLY9kHFsGdjTDVuojksHJrCFbuvpgbzD9G7mUE6XkdPHJmSKrxvUnB2uwTni75eeH7Zczocd",
  "key7": "U6Rx82ew4rqzehdstLgw52Ye2S6KtE34QhF5nFx55HC9CvT9VisDMASdfA3P2HksjxWqvZYWgdAqAYA1nrJbdKD",
  "key8": "5H7dcPqAb7LYPDwv6ESQXsA9xJRpbdeyUV7KE7JM5ELjXQ2EwEeNJUuD6muEZJ3836AZLzNL8rsNbN4dF6dDVn8Q",
  "key9": "4wPPoUk2oBfcbGp7Ghyss2yH8DKVqVteL1hPzwG4GnmKfJSNz5VHrEFX1BwdgSuVnJkQvpUUJMxAyuvcvgDkn7Jm",
  "key10": "2qpa7Wzsh1dGnwERbN5e3tX5JK9XqgveFcDeD8HyJ8jWwsMFBRF2hRJChWj5FuZ7YJHWhVZCh9iKykuc7xfT2kd5",
  "key11": "5uok1XbvofdWLtWPhUkaxUsrAWiu7JWke1LDgvfgSQuLmR3PGQfF4PFxQ4zWF3vs3nKogvE2QN5XYkwiQfQLeN9U",
  "key12": "5qUTzJgDy7gWkvm4i1Mczjd3KQWxE5CybXw7RunUj68dw8KRSD7VASST5Kb2eCZ53hcL92cmmXgmFmXGPgKHyHU",
  "key13": "AHzeqkPEL5dqFoA5bFe7edZEjo9juvdMinZi1wwcKcUmrY4FfxfvYUU732qv6DrphuFPE7SmhEVr1fGReqZ3pLT",
  "key14": "BY1Ph7xUByNs6m8HEhoXm5io6sDrzckSK3i5iF4qZ7ahmKTGyC1sJD83zkEg6D8A3e3Y8vcfobbFfcjesrBxoJ8",
  "key15": "44mbEqfnkhQGHzpVRogZPVf17Y6jhR828XLJcX6xhZhS1tsusuJVnHRk9AnCDvNrGCJ5LowMgNEzuWCgf8bpwy9c",
  "key16": "2s1RBUsNuFACVN9mEWpxVJANRyRmU4McZuoqvCvuWpDawYmn6BB3p8xDwz6pHrCrf73rNhZtTFhJiTkeLitmpEwa",
  "key17": "4NMJfSGwNtfys28rVNzYqPhzfSfNy2RXUsbn2AS8WnE1JMcRETbJaSFeMus8ohVEaUUhgLFT1dfrw4LHU4vQQHjr",
  "key18": "33uwqqw59dmhWq4CjW1fpppQhPcYKsf4DNL2jL9LkbBfiXsnz3Zje7JXEoxpUwPo37MeK2K6URrdLEwoY7diR9mm",
  "key19": "5btxteSkVfPDD9LYyqkTu2gA3Cun3dpmQZbHYauhrFf3izgEddoCkELfRpW9gMn4xZpwu6DUKmAb4PizAF8RpLun",
  "key20": "5MyyrbKVsQkMGgfKhu4AZEe1TFn8rHhyksdSpFbAyq315BbE4SnqFHYWyXtPiN7FxPcWHp7Dwqo4nhhejuvzNdvk",
  "key21": "21VuXuBsnsJjnfDRBNAL6zCHhvDvKBQcy8cA9MDNh2LjZfym6M8fJ6xHo8sAPdKwkpxhjyzcsJMPAZw6M2j4f1eK",
  "key22": "34ePHCA5Gx7erRCuHgkFekxwzSs8MMJJjMMozNjpQd3t91rsBEWxZ3p5Lo6DkJNQCYW5TE2AqZjbNRNoqCBhFwvC",
  "key23": "3Zk49oDZxkAYfTWirzepzWmuGdsGuWE4WwFkQdLszLNuuFv8SwMBsTJpjbS2FFiuNukWK6DY3ZoQJMc2N8Ycgdwt",
  "key24": "WWhqcLrV4WUjKy427J7eHHdzd6SnqQ5ZfNt9VixgvuzXLvvH3sQW9VnL4tzwErLGhP4GvU74nWjpnSFBjB2LYFL",
  "key25": "4xiAXAvtpEYLry8pN4itE7dxNqSo2dJfN7fzK1tLshqqxpjio8LPNA3vm5iZ25FCKkAhxCdiujuqg6HjieBTF1hb",
  "key26": "5UM6amUa9ak3RVNGimbDbq1ar6mfXiAgWZMeRoH3jb4B8SiLZujn9MDrkGWQbPkBQTQ7e35HTiXdUZSs5eBxxsit",
  "key27": "5XqyHWb7Q5acKrbkPoPh7nDmF29uKw9inBnDjGKZd2ZWHbb3xQRvTcGFZsBGaDaGfDbiEnyU4SqWdgVpSorm8vZS",
  "key28": "4hiR3hwMc7V9jDJRuPoiUqPm5mXCQThn576h3LDSQ1itgVchyK27X2TnaZk3TJKPwhCPDTV7LFk9nyvU5x3eNBMb",
  "key29": "47j1ayrEXaesvkUrPcorBycH9YajwYPZqqx9vCkYaFAC8q91aLViVjg3TKL6MfLiahWHmYZyeSqrGHQ4YQpC5Pzi",
  "key30": "3LK9kH6ydATZZB3V49m2hh7nPrHG346RAtASK3fkLwYX2oeFz8xN9VGBLmU1he3gKvsSyFbv9XSyJMhLYSmn5oNj",
  "key31": "q38P1wPgnxaBUNNPe5SkyAKRVhFet9vfgx5X8CDzB4bMsmkXCnJrWzzJ2vJVjrwyMYkCygAHtoeqHJiJvcndU9p"
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
