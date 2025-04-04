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
    "596gmLSBYPwjKfqdNghn1qG8GKfmpws5q4zHwK9BQyyHxsjT51YnBozouAeycqnDGCt9dJb6muSghvbpMjRehPAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wgZm8i5mjnKmncE3cPop6KJv3aRjomV15eu5QEy9C4FnEHJQFPoCEY1wgF9sJwaokdnCXdzagLE7YkX8vGd1Z9p",
  "key1": "4xksfdsGqcuPd3YXTTesruLgPLXNaykqH3A8RD4ne6KwdEZUyTLf1TjNCKhY7uTMRMrFp7oEGftfKoWX4NQ7KMjE",
  "key2": "4vmN6Cm8JLoQfy1DMTMfYPNppNxeEw2RzY6rEHs62gpyJ8ZMHaTPHAkQYipcHWpzNtRwrb4LsqtZ1SpL63RwdQTw",
  "key3": "4C9K92xuvY8ecjmzJj1ZfCLTE7tpuk85afurH1QCWEEKaCaxvcRiDwSyexiKg8PgneFnJH8R1wApG2ybxGxMQAQK",
  "key4": "aPsYtejSCnUqgszUAAYuWaSdfTGR83rbX3ydy6f16TdYvt7HH7Ru2FoS38NGxinsWe8hTuB9NH6BTpG8uiQL4up",
  "key5": "5kELD8W89dZvyDx72prRbcB7Dq5caBLUKpgBV8YFbarDjFJ8ZRr8SL9RpGWQHyqmbWNxwaQ8cU9hdqiKuYvAQQQJ",
  "key6": "27ihQphiZRbg3cnJeg5m3AfxM2PJ7xmzGBHXwmH2qDA5bQ36Z9VT1suBzZ6A9m29aKCyk5qZnu48NY8eA5WQJ1CB",
  "key7": "5sM7oBoBV5FhfSXJ34gLdFk794xKffGDsTJGFuHFbx3YikABdn8J1x5riivWMHGiEQGTuKjfJPAEQJzHZAuHDzTH",
  "key8": "2cWrgGkwXFUM3xdKrdzaUCesvrFhEJc9hwVFMxVyxTcfrcGeMCsQDrMBaNG8cPM6YsJPcREVUT3TC2yKVpzSrNs1",
  "key9": "4VaCuthbDtZHP7B61PyEa2he8QMRFjdZBB2ycYadMJR2guF7GMtMSxzR2c3Gm4F8y1Vggxr8srpvduuPQCXXQhES",
  "key10": "5CqMyy7t3JWmNoa59eYyZpi7s1QBZ3HuZwhwQikPUuGKP186ERw3MsHH3yvKFMmYbqnru4yG1rkeGZVwvHMMBFs8",
  "key11": "x9YzbgxwMVFYrisKpVA9poQKAQ9Yoj4BANSWQ2MR7VSkq8bqhVTCfYUqMjvxF8sbWZb3gAiiL21CdFdGfxo3J8G",
  "key12": "5Xx1ae1H9gVruLtfvbyoCEqznunuHVLbpwsxkvr5FHpQsvqT5TZmo9S3qQetvoi6Zmx1cmVVX96obAPnwd7GF4xc",
  "key13": "2DWqEMQzA1erT4EW8wtkhYZirUXXrypag1AFF3z9cqoVuQ1WkTQWocvFBv3a3BLoeWLXw9zvUPSDM8WAE6fm1rXA",
  "key14": "d317BVTteGxBGyDMErp9yQ7H2QZ7deczo47RC2L5hXMXp9uHMM17X4LdmVi1PSsqARpuuzeNW1a2junYii2VaK6",
  "key15": "2TkbLzCEFbevB5qKj2hc2XksBUMNpJogTeApEgc3D5U9fBYJGKb4e6n5JtSiu1YXY7DJzFApQSbc6CFYXVYXAqHB",
  "key16": "5bRX5TtX4Ht7hL8ZAjy9Rn3oVXWvvkdYEhNjyYfLgSi41WtR9ikasT6dg84vccPGXDSmrDddAm4HYBGDF69puNGZ",
  "key17": "3GErAyRF6RCd7aegcyoffBVg2Bu8wz1tfj5ZWVP8aLbuX6Twj7VejLTyAi2MLy8wLkVSThp66GKqr5yYqGmPhoGD",
  "key18": "2oULiZjJ1toCShyavHbJSanSZoTC4UkVs3tt8Ca8SBXKERa4NNwPCG7PPnfvF4zgtQTaNBz5GRJvptoJ4ttrq39f",
  "key19": "sJL4yt5GaQz6eoRREkgYwbWnr7TJP9H1vGXvdKZa6Lco2qGXMdSLqDfuZgRLTTB9cDBHXtasusNWEBySC4en6wk",
  "key20": "26DyEjpmfkorticnkA2YgzbgpotXEoBFKxY8J4aPswNSj3sKv2mehzor9KUXDEVLmzEGqLUBWZqE3oeLY2gqz2id",
  "key21": "4kujhGaWYmsv2Qj78yS63hkJjrVB2zVamqSxuXkvfqi2bt3quEWvFHpkBCU6QoKDq3kXctkZTNyV8TsrS9rHbEXg",
  "key22": "3zxzTE1apqSKXHVrZxG8yibs8Y32ewoj7JNpApMLmkH2pCTwEkbeFdwn1rCSUYeSguj6dftjpYaVo6XK52pPuKJU",
  "key23": "2LCiqYuMvjxT6nu6U14eiou5SKv5fjJQpeecbzSiyTgEvouoYWriMvnuXXMSexjySPrJ2mEJFPr21S3i2ooP72kP",
  "key24": "23YwVLX8P8fypqHdemoADTYXAYek3eMtsU35Bz6wtZB6JaSMgyVgZ3HyMwFRJXKHioSeQZ6GqRvPCMnzuoWKRZV7",
  "key25": "5PVNcL8WzX4TQMttm73gTJ19obfMgPz2Vvz4UH3iNcAkuKRbgKM1nhTbp4TRW9ShdJKPeuqs6K7kJR2LG99YeQvg",
  "key26": "3229oqkzHtFwzwpWWfvVmtcL6yLF6FLiUh9B4NEkFuKsKRiD1vKoChUVrbhXpBYSWKMBecP4Es8JrMYQy3Z6Djr8",
  "key27": "3K16g8yCeJGALQLCnB7YXUcPUi1eeL1Gj7VkiozazXjmQud3k6rhLuq1RwGbjWxkZAZd76uWgZrvzxFWG5iUJBFb",
  "key28": "3WixqT9s3zGFx9ue4ehRCpWRN2W1S4HynRPPQuEojaBGXPuxgY9HRJNEAwtzmQSDsWcviEkEeHte9o2qoHMBHZJX",
  "key29": "44RGttBs7ec3HE7V3BzapN3xxUMEveipJaeFri8KGxWve11Ntq5SuQrkQSJckEnJ12UaRbhk2TmNh1HihSzcGdpt",
  "key30": "38SH4R7FGu1i2HeYShZ5paFEKcNHdBLwPqk32vT2MGenhwcwbUtYFRNywcNirffonrQkKSBfPMmQwhLFnQ6nadxN",
  "key31": "hLF7vriwx2ZQnvx3qWaAdSLxyuQ2bUQ8NRSzg6LsNbUVoEruyxDYbScRnh9CbmE8SJbm8mCgaSpsHpi3XGBfqRB",
  "key32": "3nPNwQx6tYgXmBZ2iopjd3FEbmmiGZQs7mjWgozkMuv5sQacC199cMGEzuzF1ThyjSyPsSY2Q3abyDD1XVqE4EBH",
  "key33": "41aoxUm2RWA5nn98tcN8CzN7Z2xqxtoQ5QqhtPcukzafpfbwdJumg8rJvKj1wbzQLbNmAZYYUuLdwVuk6c2GvXGd",
  "key34": "2xFR3b7c3uDviVkeEJVbBYhNKwAFEhCAveVAwUZNncTYH3vQjExGr6CLHX48xGZrx5w1i6xtDw3yKFTVcj4wPxJy",
  "key35": "6mszPBDRm8nVaDKuqkRmSvXUwJhB94XQjLvVpTWz8DvD4GG9n3XaU2fp75N3WS1RsRLVdXKKTWZgUhAhj1zvma2",
  "key36": "5DDFDTbQ1yVWw6KTxtX4pooomqRUV85fksrvbVf4FgY25mXXLFmEb4huiLMXC2V5RXRXgK8pJqQxLWCQ7ifyL71d",
  "key37": "5oS3H9NZW11aKaSiVi2SQ1fTZKYkmpSAMb8ihRrqtYcMakojhk46rtJBGih9mvvNiK1ZMJr6f8ufkrevvCGZZ6x6",
  "key38": "5uDobxrjs595k24Bm3ccfjF9NAZf5EJu74rhrcqgmkCDCM3nr9eQWwNYzBgCoppy1RQRxVnh4FycXzcSgy2gXSj1",
  "key39": "59QthsCqJZMU1mVSpcHAo1gFXLJdbuAsCtGy6A1M2iNJ2isHmYfJTJhXBkQYGJDLoso2mRnBpGWUJtriKxzobyiM",
  "key40": "4CcnF5QDQNihHyk1LfRUnG3Vb6jnsPxX99Q76ZGbHEDaNLZwmkcVXZCQVQxh9aJ8cXW2KVS6NEtdNcepA6pHZ9aQ",
  "key41": "5u7RqXxCH7Uz3GoAwP52U9J7cVdCEtSGf99nsaL6JxoZ2W6YXmEBmgVJpw56roT6dNoW1SRx4WH6dKfPmV5s7YKv",
  "key42": "4cFF3JvWoTxuu3xis8mUitUBH2DUXJ31tNt3oGLyXj7TuGS5zM7MbFH23DTXpyBo54ARJU9C6va1zCoT7H7fDxvA",
  "key43": "5x3EX2tMmToDMRZ2UpkpDCs8eXHrRf9GbYm9wzKTkCjmrmsG9kXpkgeZ8AAdnV1me6XpDTQpGhrCqk1XZnB6qXeE",
  "key44": "2zBRxMfWmiaV6TQn2NznSkxENQEUUHsFV7w6c4mcti1zqN4vyDHQVr7khkxRFQuASSvpttEaSypYemqyHAQra5Gs",
  "key45": "4mwYx4cBQJS2PNrGFFPSGp2zf1Q8txne25reBBqHaZ7VBWwzWRxjr8zKs9Rt6XPMfSSwUMjJakfYZVW7u76pZihm"
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
