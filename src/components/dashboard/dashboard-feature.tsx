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
    "2Puny1kzuH3ovdaZAquuVzemgkqfqB5Pm8k5uH7EBsy1qRogQtiywgYDCPkTwmyWWQv54BgZ97dkrVHZuywuoNeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fBDvvvpLtZW5fvttGLKrtVAQV5fsM6sUVzrUdDp4yQsZqZq4HAkNBdxkvTiGRTZY6MjW9ZwcnLjrrCLLPnfgBHZ",
  "key1": "2eGu2BCtwMG3diRDCwky4sK6V7gzMTo3tRwwDgA2KVdbNk1ByLFRuCGy2fuBiJkgmLFTg4AYRmSSVVR4QFLoQuL9",
  "key2": "3QEoVYzFUaD2x8FBsUGAXkPnt4GK7PftuHvtRjn83Wimm367CHF2siWKyd7L79YqjGQ2mTWL7ekj3DRXi9McqWp1",
  "key3": "XqYN7br1kEaDP1tFTRKRs92t1Kr9aRb9HTuGKABWG6sBGaYhQeDsCEtojLdgTwrRzEaS75NaqVpFkA5FFsakvYG",
  "key4": "3CTSgy23VSLfL53bcQcd8md5jnGEhVLQHw3WrkdnZUJ9gJ6qP69bS2YvweTbfe257Ex6nDqWC8FMoVBkbjiBt6fx",
  "key5": "59C42ubq9es116AJYEDsxstw5saZFVWwBLBD2WTpPaSRcHBkyiWrvjo9cH9e6j2rQ1t9WifczUzYWn1mSXBs8ikA",
  "key6": "3TrqpcYv1jbp46fJaw83Mc5fVAcjQxXVCh2pZq5yVCaZfqeTZ1oqCRaL2sundtKGMUJJRiM4W8KQdXTzBoyLpXLV",
  "key7": "3jtGHW2esDSPutScPPGNTesLTQVjd7Xv3hBNqseUxPYxUkXgCkfjfNfy3rnyarNN3UBHVFRVX6sVFcshy93r93kB",
  "key8": "5iV1dpx3qoPErrN4aHRbjnEaN8emQyDXPD7QWuwJ5wFdfU5n6yHCjzTvDsxzus1cJu5eQ8B8qzRsdKqFqoTdudfY",
  "key9": "4s8E92Z992KyEcPFvaXuRVHzXPW9qKzs9DJ49wpXY2n3ACQ271yU5doCyF9kW6az8JqMNYxGERkt9PtLeMpdW5Bf",
  "key10": "5icn4HLHC1gCgfkZcxyRZ22y3V31fKmELJvcPNvMM2jZCa3e1ryzZcwsbmDpfAb55BnSXpbTQVxx7U9WRSFLsExZ",
  "key11": "55bcGoSzWPZ9Q7hpLPawjgXZFb9uSqxrUY8mJKxvRJEATpCtTSiKvbiHZV6ARYJyCZhg3U5uvHE1F1neqkhxAy39",
  "key12": "2Es5Jwi2y3HdSYXGCCFHCEESM2ccXp7g3fctWj1HPnCSkszEdRydLV247WhTMFbdieWKFy5btFZgU5hBYLg1i9ya",
  "key13": "4DYS2cLszFCuZifvJvMdg55f7tZY6XawDDY2R2JQeEJWJMsRTstVN5B2DiVvpjNbqLLnxtfVvud2gg4xQuwxsf1D",
  "key14": "ihxkKyejVczULLBPncGvGG3iNdasrPq43k2LYrzZfEd77LT2YMHMwejsmMUMZxV7MgTne7j1F2KXptRd4aA31uU",
  "key15": "2cQg8Uxngt2VQWjwa5XF4GwhSYXkAU8NZVvof9352ALugk147qq1XpdmpamfWfujFy9XjYzyQU3FXLbPf3nnp68s",
  "key16": "3jmjuQSsqKWbDtyc1qggMjwEhoqiciRtjSZmgFP4RK2wMj2QeCLrBd5sTmULojPenWaZJYU73NYEdGJatXULnjCX",
  "key17": "PevAbMKQvomMTGtrrMBUoEC3Ev3253X3mx6EU8JbfynG9G8e575JNhyUpiNGdJiUCnfrd7VsUEvM3jTyb4vFGLU",
  "key18": "2TNL2uH2QC1r9qPokN7urq6VhVmQzn9aGotW1ZjVhAwsQG3wpQZAN3z8AeNm9FXikvbwbudGgqZQ6A73pA9TX9x3",
  "key19": "4mK8fBRwk9WtSutvGeGAPAm8cPCyXyPozhEgxhz6g8cJe8mAgbYY2oxRBHyzqHjDEELvQqwdS1fryHauFNQmymJ4",
  "key20": "47Vmy78yA97HJUZKqa1cA5eAnmZMr8yd9aRufCPsNZZboRazH6nUBNhHQmvHafswe7SrRYY5so8woCW58UYZ3vBg",
  "key21": "3P8cutZrEwTDxEeJhhroZS4b3Av1xgCSn2LJZE1HgiJ83gEu3kwNWxac7KQgyKPKmQbxhotUmYTd6EVoAvwdhFSE",
  "key22": "3Xd9twU7n5PhPp1qUxQxdu2Xt4FgBTSnQztFh6iPB4xTQZt527T3zHjWUP5wSoC9Nufk6EEWCR8DDnfBy4cZnwSN",
  "key23": "3UcnJJRqN5DeLM3uELTbJoXBdhaRg7jgjiZBYDn6xTtadzwkLmCKyUJ8wL317ZyJHKHp1rJyMAYCXjdxtKeAkhTp",
  "key24": "4225at1gLgYkyaBgvAP9vW3wokLV6zk5HsmqkFLeAQdhYenHjYEPpag8rLP8ZqPp7xhQr8WuyiZ3WAXygJqKg4Ms",
  "key25": "5fZ8qprXdsfqRkeHXBRB4XDCqtnufVE7PF5vfsdL9CDGAZCWcL9g4HySxagGNNy2VtHw2ddFVnK9oZFVCtw6ubXm",
  "key26": "2eVah5Ung7yX2BMjZVufReuMfeqo86X3VSZgsy2bYijqpbGATp5jqJ6ixVfLssDuY8rWqmdXoSjb5pMVCAx2arXq",
  "key27": "2TzhQ1ZLkCPkhoCNcsB8XFh3UBorBA4xjAyK3m8UvQvwT7bhWxveze21B3zuHHqNwnddWKi3VSRzHTsBZRRtdSZA",
  "key28": "T3jigJHV5dckXujQDTJyd1AxUekQbJfZsoV2CZMHVhfiet2w5ersVEpEcjP9JfDFdLwGPbdrPtEWd4X8iiWimJb",
  "key29": "27tQwxjr6Dgcbsq8N36fBLgbVWVR8tgxfAQF5hHHhurxt1M9dtMANd3PaFXUNowvBzpKiZC8Jgv3be8PtHCTfySu",
  "key30": "2GJ81K6Xh7mLNf8PbGp24Xk2V7DNRrvxDcgYQqtf7qaNnPfb7vo2Ysso25gDysppK7mX1AY9aYKApk8gQP48PWPg",
  "key31": "2SGcpwZnf8QFaaEuMU6NsHBE1Mz22VGXv25M2SrYmFyT9cVXk1tDJUoYVSx2uz66a8g1Mf4jk4LYVnTVQiq1u13S",
  "key32": "54WP19fWFkzduz5ZphhKA7jhgF2NG2KDoekQ2r9LsFc1xbxswTEmWbX13A7HzG3eSGXgXcipViXqxJjeZTsKiM8E",
  "key33": "55nmPwS4qf3kjbr4j8k56tenRTKWzjX5Z51Ens2jR7rjxHzTB8FyAp7adFAk1orSMxv3fYxUogTTV7XyuRwzh4cK",
  "key34": "R9PYmsaWvbjZUEK3cAFN7nRi4ye826ffM8daTWnBp6njpRkvPxwRXUVxi9njcsh2GUeEmGPkCf1Rz8mProTuQ7o",
  "key35": "2dEWcuvCwUxVFPhCPY57cbAgy31i9maAFeUKrd4LS66V4iYh6jaXStcFmm6wpXmuyzKAK7MA1s7DhQdtr3ezkVjp",
  "key36": "21sVp3pWrK9YDB48yN7s8wj1wHaoDB2TkF3EhajbiJG77iwtEfhcLcXbYJhq29fjUsxKoAUEHKQPnfexQGx5Ex7R",
  "key37": "3erh2CTeK9nrUFvefSgXfMLYbsACL46NkMWukE1guU45JznXpk3g342dCbSJyeneoeMmzkn8PsfnbBGEfqhRgsYq",
  "key38": "4TN4RTvKDvYUWQ4dGMXGSJLWiRqy61oEUxhEzhF7iSKWSoefV6WBgmrXuFW9o9PR2jhnRFcEbGZPAh9cKwFr7tVg",
  "key39": "4GwDjed6p43Bb9MLYtn9o4oxwaANhfF3tP3G67BwH1stAaZ8PkEVQNV4GTqK71v8YAEPDGHvDwqCDseHbke1u77Q",
  "key40": "2nMP9yFeemQAwrTLpVyGH9wWmENdxhZtGvJeKezPkvXXhqp8pYCgLJYVmD91ZYvkba1cJkEPGoKzW2VJrMjFNn1V",
  "key41": "2SXHj7XtZp8prhkBVot6uWwYATqVKod5LuLUnre33GRFoUA5QCFeabHpk96rf3q93nPEgWKA7dkxAicux4oYQS4s",
  "key42": "4TgYrqu3du1RFMvKmRAVLAWvbgXCJHyzENaxEtvW6V1FtDBsAbU4ZP8eTmGocA6jg1yahZpZ65FWuLVEQiwQbmFc",
  "key43": "3iNkqMcy6YPG7WDUBzuSCab5BfxaHpCGG1eU255zdMJAVj7MsbZjbVTfwyni4CXakvzceB1aDhFFD4rGn3Gb7sN7",
  "key44": "QLGHTW4jXRXmZopta5fBcEioQ6iKsnyj3h19U5arjA9uMpecYZN9hHSVyr8JueqMT1YfqV5kBs94vUhzRhkVsmB",
  "key45": "4T2ZDubsTeQPJdVuFmHfaSqFsByYKgdXGySZAGKWQpqBnqCY7kyyzgRxCB9zwQZ324QmDuyZJXMUomZ5Pd4tmTJv",
  "key46": "2wiQLCubUpNTEKWFVKk8H8S1gYStLz67xAmzJ3DBwnyDvsqqY444MEYWSQe3uu3hQr8YdnbgpjGiZD1Ytzjp9ss4"
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
