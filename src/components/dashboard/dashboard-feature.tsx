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
    "2ez4PesfVATH9bNLKwrN8TzGKqFT2prMLKemjrtG5RH5524SA7ZtLer9VFaSUuvMKLvrScif6TZ37zHRPxXCUrjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGN8uYzykXy9uSprpPhje3p2SkQpz1Qfsfj1Rrc9TJScxHJ36cD2HKUFob38UjWVJzKdGRhVJQSQ7u1s9bGkfgP",
  "key1": "wgGTVf6Z8viLiPc9aqt25wak7tihU8FDzjwsTuxCVCpykaF9zGkcAwALwYz5JrUgvH8DgMGcYXLrWiafajsc4Bb",
  "key2": "5fUn4yzD3pHGbN1afKqFvC7wLHiXE6RX5E8Kcjo5J65qVCpsTDri6gF6YgBQhPk5XkBntq3Ywj3Rxevwk1WwXJ8B",
  "key3": "2tTnx2JLDyoKqKfCoM3jdStLJstgJkjvPdCc9s3yZDG4ettT8QHvj3m3gukPi3YiPYtiFcJqHuRLfNF7uDF2R45p",
  "key4": "59NZC2rTnyFqRyRxyeLHzL1eU53gpPwn4Cg1VywppSc6meA27Tmo5ponMWbzDXdoi9jwjjhXSqVe5U7McqUYwajG",
  "key5": "57mxQbWRgkJExqA3dUCBJMPU7mJfUP9REYN2ZHGmGFBUU5GDpG2B3jM99LP9QPgxfGaaivQWC5Q9NuTinQdArmac",
  "key6": "GPFti9j1o2dsZYY7pvw5Pax9awRQcU2DfdSA772rNEJh7fQUBmx91XVVDjbKxvR2bzBVxwDAPAJ2hx4zcGm5c3g",
  "key7": "4csRWxJALPdJagzpeUwmtX4CYuW2LXCFdjy3tu3Tuiaj68D4ZBF2GtcGCxBjdRbXW1iXRgSFyrNcF5prPCkHQZUd",
  "key8": "5sxEiLS49sAubhMfW5su9duFL4vza29LMYnvfF88kpPqco4toCqgCr9rWcNi9pF8iwzgqQviRbDJU8L2gyiu34nT",
  "key9": "3WJ76MaRffnXP6h5Q5EuGBqcEmhjcKMXM6bbv8ZXKk3ZWydB9gFtDCmpXexiPeptDTQUHyeYSet3P18yaBAkGUCy",
  "key10": "3qYM5xVZrgd559amT9YbTL2rTyA96vvQofsYzK91cWPS4MKSzcFNJPEF9gjdmNef5H2dREZRtCk861QbrNZhcUZq",
  "key11": "2phdAXARLe6F3d7B8LX53V8NsKfx1wZ13WyPaEzpQfaLwcE83bWuPk5UChK6paEPr34i5SYfAQ58SNxfeth9TP7Y",
  "key12": "Sz3ecLKJZbNMZaHaLKmbxmsxpbzuKN5rVY8Zefr7i24bmHY1ndPGb7m3gWGmQWDNRJuMXN47jvFvZUyJVijC39A",
  "key13": "3w6nwganGaK96jxrUtL9SfRmcHxNzhfknZziTo5oSe2NNJKFTNcZdPvMRCWAze5QxdGZipGvGxCiAbuHU91EB7yf",
  "key14": "Lkk9YBh729E191psv3H5ADxdEX4cdMp3ErnzkKEtxtCFdN8H5g2zPJ7JZHZEenAzDzeaC6oYqtGh4vHaLUEYA2B",
  "key15": "asYcHmpCaG5mGrgpBDn1TgEhLm4oJjVNDuTGzNPaCPYrK81q33r1xXEd6vgiH1XHDgdd1bCp3R1eQ3cqwpD49a7",
  "key16": "2xoYf8e1cVrQwCZyBSJVqZnKYbjQNdJx2yyL2PAUByfsZ2wn5BxSaYwPCvyXjCRd569n15QK3AW8s9Usucwx1HfN",
  "key17": "5U9zTX27zkYnBQG6XBvM3R9SwXMzgNzKTr9TB7nUB5Q7QJQZLKeJ8QWVfMMJUHdcW2AS4u1miGj1b8feKv85PFpK",
  "key18": "4bNhDEAyABW14xCqTxDJsFUx75HA9AJtDxLpcKP7qSYAq93v3Z43t9CUagH369gCTKyiRpgQYywgUYEuGRPp7isC",
  "key19": "2NZLDSLfR14LvouRM9zY2PWLzvQsrkrNWpWkSQm9bFBoG4SVQ9knjo29xtJGbmxnRopLv9JynKeDgJFVSV4duoBE",
  "key20": "5LkSLy6L9Y6xRSHxftNzbm3BGnHuUGYdreip45QLi4DZhsjHDWYQVAkdpHdk2aLcfhbXSM35ysTwn3eenJnPu4EE",
  "key21": "212ZT6FTiKZzPFGdNkPNWCue8do2iRFaZKPDn7LP7TVPXBtcoMd4gHCZnyAGxd7uKJwRPst2Zi1jqxauvegjyxCt",
  "key22": "66fVpLwmbZedDB8osV9RyBWkzKvoKTbKLq7iESoVsJrQn6BbVjwQnfyqfKwdtP1HGjJscG1sw8GhhjtBJBjCcgAA",
  "key23": "2cPdJnjEfCYdiQL4osMrfGJbKfDACU957BCTZWM2mFHpAfZhD1pLAg2fkuvLwUMXF7fKpKsaGCqn8mwcMPNsAQqh",
  "key24": "URZatvfhyWx7udEfKKqyPvnJkbJiK8LP1w8wTCsZcfLNjkUaxmLRirGgAo9xF4t4ysgtxdRe5qv3wiwXr8uErXB",
  "key25": "2t3CF4wLgdG6C5Cm9DDrH65hWAvtzWQHanpRQLPPRaqnL2sqaFAndwewMsJqwLmFKJwd7QypWVx8j6HbYRynhCcQ",
  "key26": "57GXxagvXFRDmwqpLvT7Kg3C3GSSxX6Cs3ipbn5inaVBLaDgVu3P5UMshDc8JRw3EDwtJCQXX3SDY47T7nRXtK53",
  "key27": "32Xju2UMLbTEKteS9ZoeSZ6AK2TvzLdq5cnwp6jBKa471G7u162FvwixY35T8DdaX7pCvFENRcd8U3pkBugvp9db",
  "key28": "5X2SeBAeuwi5cLYy9Mu2y1oALcBA2FhhEwEhD4Lwui4NHAse8SQhZJV2Y1Au56255pzrkeZZeSxa5UbBv5q3ENdD",
  "key29": "39F9HMr1346Bs8xBxhcDxakJS7PTA8yDA1mrXQak14oiHNc4cGJYeuzuAtrrq1iLgqBQif8pSSobVNcgT7gr7FbB",
  "key30": "38oYtXLkRUpsC2JbErbnpZmdawZrBC7UKHpc5AihudmqisWkJJcKf3rJLWqCHK8Vt6nUaki53xUs8CV94rvmKPVy",
  "key31": "S21XYkh8BAuUqbYE1fefmeJfaX7GLrC8c9Pq5fGAtePWFdwAspFqjVHnXXzNyempcT8Gsg8sygivvtQhRzMQnNv",
  "key32": "HoFZCPo1rexScZezdeC71yfUqy2LMnPcFMBnuPTRtMSdNhmkDnzTyCu7dxsdenCG6dY2RfV3gVY7cn7tEfCaJnz"
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
