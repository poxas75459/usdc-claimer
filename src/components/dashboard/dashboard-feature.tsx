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
    "2rS9tAU31MdZr799SkcDEsKhE1dh2oUvywUhQBwLB98v1FyECd9wSXoLY2sGL2hpQH21W3bgxYM31DVMiUwdKQ9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irXU29LMWH5czeiku4eH8F3EkjRDZM2JHsRAh1zYggDexFmKgT5di8xvGb3Zh93hAX3spaLcJGA9hnqwA4u8KW9",
  "key1": "393GHYGbctbh43XhEhkHaXGX6atfovrwWpXpWtVByJxSSGUpwXHY8JsaGkUm89QqzU5KotpTNUy5WKySvGvt9CNo",
  "key2": "3R5hY5TmocwJQdK25DKJVjG7i5CYxwvxJExH7dn2tqyzioAQP6ZNSot84ku8fLnGC8pmEBgbafYpiySZ9yREzxvw",
  "key3": "5J5P4rK1dtrFzfzuiqjMs7hpJY1oCiVCSFphaWGH6oeNCHLh1JwpoUrSL89ptCtdndsBkgXt8T3C2xULPYNJTHgB",
  "key4": "EYY5wKEuzKuVLgZW8CwYTDstiWhrc7o3SKjnrGWWWTx1eeuzD4t1Aq1ZZCbPqojSUKeD3jECZQD2R9rRQuAVgdQ",
  "key5": "5GrCRjXnXLmLdoqSBwF3HNaFZWYXPKjBqM83HcpVjHWn66D8pBCRUc1zqi6yJoQzkbtjvXzHp6mrPXNSDH5uQw8Z",
  "key6": "3Z6GxgkhtTNUjtPhTAab2QZr4WLPUZD67FVgXgUX1xBbyFNjUV1CqUNBsPhgtFJWzSr9J5Wr7N9ya6FRFNhPSdsk",
  "key7": "37M28aoAUhAdQKCkSV9FCKqrDWU67a97W6HNkiK3kgvpAsYe7mXqvfABsK7FwMPE1RV5Khr138vzJouanKjjmAvN",
  "key8": "42cuDdiyfz4hnZKyB2uQAbvZsCXA9KtGM4WviYvF2eK3DpTsTjYH7yFfhMyMXKaCGfpLt3aWcZtGAnKMNoZkFzUk",
  "key9": "4YzhuYD4shfCPWwQiJjZhQ1E3xh1cyVKnrs524Y6b7BLC4kd4M8YTE9SAfrdexZDSjK69X4PQBzzsvQoSvf7B1BE",
  "key10": "2nVXvnkdoJoYLaivWkYQBk5vuKUqykNDRCK9dG3vJV8NTJ2fXt3BDJw3h3zUJ4RCTreuUkDN7FCANBx7mmsE8WFG",
  "key11": "4hF9xp5tZMxSyymfEWdtLjHpJqH6yS94URAGieWoAVvfsKN2j1cF6Yns5FuGj2QNJHvCqhckQUkvodxUuaJvhGSs",
  "key12": "2ExJBqYmZ1YL1tvotpX7zsgXnmA3owvzpxxbS56bEMvm1VA2pieGqY23D8uGsq7wLocVN2qx7LTabGGoiXbV5Hmg",
  "key13": "4Gth7aeBTiGYNXVbk5VALodGEQjSAapmMw2j7EqS9FGjS2FqFBwSaP18H6AeYUGkk83Ab2bbgedBq17SufW292Z6",
  "key14": "56oyersc6BaGu2X1do6ECQYvgWne7mX13uEf4KucUkiPRxA7unjugmgKmvdxxQbGqbzYkUFVFG3ogP4W8XugJRnh",
  "key15": "3RaZ7trY9nn1o6wx81eFCfZAy4K64b8pXGLbPJLxWiHfUFKkfeFFLV87xmA9EV9acjRY8AZBrt2mtppgBkYMZ4Cr",
  "key16": "2Nxka9FgiPL3Gs5zZF41XKmtMj6W8KGUDMT2ysHvqKfzjj9Vki9coibpQBCZ7ABoD9oShdseMzJJUULJkCiLB1Sa",
  "key17": "2776D3mms4WSdbCYqWWmCJ7aHQdzLZEyNwwEriNndrXFRMa7E15t2YcnQysFkZzkAv3dARDptKVZovoDAVRbG3NC",
  "key18": "5wdjgtbMRuCyhJk2Mtvc8B6ajxyHXCroo9zTdNwmmpUwj9Esus3KrKgYTHqnFVnuvzzQGFAtYsHAAKDerC34byr1",
  "key19": "38WKZhGRL6phdVQJy7wnw4DedBTBWywoPqBYEvqWiiBfYFNqL83ZsheYeCqkfk5KqBGcvfbWM7uqiazUqYe1yUx6",
  "key20": "41UZpXjUKPjDsLxKdJmaGCYx8prbq2u5dkxprzE7D9Y75o5aQYdkEKPgappjGzjKE6fiveuNGjnFyGK75Wymqeow",
  "key21": "45EdKoEUVyqWAHNShhu6uQLZTcqwvjGEmrFrtRRV9kmhYTVn6iFkxTSXvkjkUw1PP3KYfDNTzZJvbcL9PxUFXZYQ",
  "key22": "5FyeJSJW9qBNbHLFiiGrjWa2qakytJ6xactMVXPevcyXr5McAWeNpF4CPtXVHZKCY1VspgK1ptDmtx52o9A545ap",
  "key23": "4qsJjg6T4AduQHPX2Bozp9Gef5P3ipuxyeSVe24iUnoCe6oP1dmDmfPNrqRw4WetHTqPkDzWc7SiCFcpoLcxreUA",
  "key24": "3Z95TYrd8HnvZarDDtLYAV2UWHMAGvExY46cjvDFYvkeQCCNgcbTrvMkde83obuisVKnaQB8UYdEac9fWf4uvB2i",
  "key25": "3HS6o3yKZHtP21gnap39eHm1JxTVPfhhbu1yPYKB1T2tCP7HUseoFpTgSo5KVmkrPKVS8HYxsVHbHwqEaSpuCoxB",
  "key26": "47zXnJZ4Wpvn7iofCKA12YXGj5ZgyEWW96ArJn7aLqb4NH4L6RyuG7zarLYYDPYkLnJWFmGtbq9Xypnb7HdiQKGt",
  "key27": "J2MA9bfZMiN8NjuCXTuoFkMZrPmogyw6oUtWM4cbYqH7jyecfqRkRZaTAmjbXiBfpC2cTSBQFQMSJr5YKdRWPks",
  "key28": "3TAp9neV9eQT6jD4K4jMXagLAjC3PmTR3Fn2QioRFY2rVLejLUhCA4jkZudCUjdjcjQDqx3VKf8G1sefvBL1RAmF",
  "key29": "4sUEVRSNQt75CsrrK9qH3tLsFfKVvWoypR164SnuoT4LJN7C21coTGBbhkzGAbacDSgqpMX6p7nAGHrWsVwwoM68"
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
