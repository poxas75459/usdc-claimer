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
    "3fT9UfsrARXS74s8VV2T8REG5298wL9EZ6S6qHQgWiHgty6qkDBqy93ECUvQev5aHowyJ8SsKBgMv3P22izn983z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tgKoJtR2aMCMzPotWSf5fQvHt8e6CK9oJiSq82c1gvsm9tdBt8CrQgJq94TRvzCPQYP5n5bBKCYkQZsAKpED5Ef",
  "key1": "5XCzvjcZ5PKBxidwrF3Ev95pLffL9KnApT8wwWdFDqiBHF4Lwz2TccH7TBBL88GwSetmsajrbo3gLmAU6zu82Afv",
  "key2": "5jas8VXfLh5wg4qkqEPZMH9MMTFWmW5Q3E3oQpXNPNsttaiwro8tFf8JGjQzKvPvKcsvAhbvyyHA2QxiAZ2a6K6j",
  "key3": "3HYvsaKnCKsxVpPUADGUe8eKTphrVDxH6bHk6F9URyfZBj8MrF1jhrVbmwbLZrtjjZmntfz8kdmyHA4RuQh3GBXu",
  "key4": "2Kc3GfdQT1ckKQVK4UreMsHcpJp2UD899M6AfU35egtWtq5TmxeSuTG4p6Gmqi6vy9mzUnsRVFSeELEPDx79Sc7H",
  "key5": "2mKiCS5VgTzjPGoNZo3MKQ8AJ9Qdto51xu5r1BruRaV6fBsbRbCae7SWr6pk3Qm4FDsPqLF86N4Qizcpr7yywyNT",
  "key6": "4XoKcawiWd6y8Vew3Rsk7J5M4d1GqcQvjw5fMFJEzh8nZdZsQRc7YMQo1E6ASEH8jFnwTwonJ3BNifeZBNfkqzkt",
  "key7": "44oscTqsA8mvkWN7vfwqZzSEZGBTJkaooy7K44CjuR8zgt7zkm4gZCzK5ZDTcYDFPZS3yW15cTSuxrK578SJGoF6",
  "key8": "UsMkJCyRw9giF5roNMAGbYQgieMgWcGKFAjLcbdWrkw56Wq6cTV7fqyFnA8WfMiRkpsGFxuVTGfy7aHWKwojBR4",
  "key9": "5omJ5w8m8v4EDY4aecEL6rjnGtTSZUQRaymtXA2kyxJoA9f417m9xXL4CZnWYcKPc6y1jsxnuJHMeQPz4dSQiXgP",
  "key10": "3pBQAuvicB9QpnuSiHW9ZtQrdiQay3ju41XRmBVWxz9DYP9VoR4AmvXtreXfMy4QFxkfKc8szdpaDHMgJZ9MuSn6",
  "key11": "6gUF3Y7rS848rC2wMmpkQ2tbomG8BXjYwkc2GUtpMMtHbQsLjCWzawdk4yr45h5YjFT5EPKMALduVaRUTrsMgF8",
  "key12": "4rz52xAVADC7uTerz52JeeMMUgu2XpBRDxJXBnBzfHjKgD6F4MDMsdCgFG8NJ3P7Sry95Vts24o7CtRsDojQeKc1",
  "key13": "NLApnY3HziptviqNyHhCB7u1iBwzn7jTTHFxWJqKi2xbzmtg74QTU525gztd1iyoDfh4euKzNxqy9TaH18HGVGh",
  "key14": "2eQejaEWTD4Ct5rk78cZrGiqzGoyLZzWkSbmGAtC5PgHAKYk2s1TpN4zwfVkDmpBGneoKhqYg41fgqVADfbvWeG1",
  "key15": "46gZUwAjXo1vadvvH8AW14GLCP1dNbYP2u6SNhvTwU3JzrhzugftYkvFEhbWyAxNS2QxNgbihPi6dhkB5mR4xWaT",
  "key16": "24BnHwD4udrLz8WTgxiZZtC5Dv7VLoPv7mQAEjKJWBm6mte4uvp4DsteZDWYtyE5DMSmV4ekhm7CDLYKguyFtLXM",
  "key17": "2zaDwhWmPBSPoYNWKbMH8GGCP46fRTKmv53qGL3RMpg4p4UZAstyzb3MxRQszcPm7KvreGiRTBatQWU4pgwTBhkg",
  "key18": "3s6e1k1QuA52PpTQpwLABKase8iNfG7vd9sXAzKkUnM1pTqBPXUqbb6EgiA4UmaXRiJLMPevCcs2JbPACbqqHwDj",
  "key19": "3ccY8EBNsAC6T6w2XV7BgiUbUF4wm8hB3JEnwngHkekKUVyPxWQy7eECAKfvDhd4a1nwkG7pUaZu57y9YF7ds4yY",
  "key20": "c7YNSb6ZGJAq8DotUtBT4TBnw42Yf7oLZnNgGHfRShZN58vFj5NkmxWMBd9cyie5zYYqyVW2i9uvhphZm8Eyqwz",
  "key21": "5miVCwEy9sZ9BUTbJcfyYZrM3yF3M7q8PUc7ZSKojBf4L7SnzRSE3Emb9ZUBAJXn8KXvkwM5nLszGrVbcb4MnF3Y",
  "key22": "2vP63Wtnj6YjRBoYiprJ2RCGSHUUHi3V1PYrggUwhX18N66aRtEietzEDWNrFJpM9RZGjBHbKBDKNw1oF16d32uE",
  "key23": "5UjpvVNVobnbNQaPWBF9kr9mPnPVqscJgzyzUm7aR9z1vNrQcYRakdPzyDWaTgaMFAmaJKLhanEgBqc8Ltnwxydu",
  "key24": "4X3SFsoujuVnJzdcGf3vnTcEthoHT2kYrkuDsgK65hmcmWz9VtrKPzWin3GZxhy3JE9Fy9WbcBKxHnXw9DnGfUcv",
  "key25": "4c5Cxpwi2LVWHZCEqv33bLj9ps8zXnFrRA4SpDhxLf8DEtoH1YwyDviPT7D9Ch97jaqtKqTuZWwN5CpqNNSuqwri",
  "key26": "3RXQJBPPfeRgNwiXwB8GzM1Lh6jNwJsECRy8ELFMaGTUfP4n7SkDsvKvm59qxztNGXzMbX6xX56JQQiWRFwshyru",
  "key27": "4phLevSCuqUG5PHvpWrTB2FGR1jdjoPseyggiw83zrALNdBwKovdHUWbKpsqDRRZuB361H4joRQYPZrjpgHbSZdu",
  "key28": "344xZYHzWE46XJqGHFqPfQvwJqk2NsP3SeWq3HA7gQAi8wRqtVRegeBDbocRbBPC1vrrE6pQcnLvje2dpGKiEYV3",
  "key29": "4HtWAv42cx3rr5h5HqYF7xTuCXvNNnmcouWdKqeXsNJsJzxUqduYwRw8PfSPpnBCCjwb9TcgkvTQdrFgYqNk1pqE",
  "key30": "WPiS8dYY7SBWxetSe5bD5mBMzixGeK9YZx73xivd6Hof1tDUxKHR4ujzwUpZBXgWTiNqwtTHLNEEdUBHpbYXDvi",
  "key31": "3VhSCHXTbNxefDiZVr95iFopHW2ufDRd9rhDBA5xJLcdS53tNYcLr4i85F5RRE9APukoE8gvzeqPuxRhfqAE4ZVh",
  "key32": "5Vyhx8Gd45WXsfAcWpFPHSZ5xCivPjwtzDcqtCiiGEhNntocb6mWVGb91NVimJcS3DZcDoUyJirjWDWKBRkuAb4D"
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
