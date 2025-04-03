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
    "ckS6xwHXhwKTPSAneaWb9pCHro32SHmEHmuBasn4AR88APvG43M8evStowKHrcEeAmotdsnkB8sjcqBtbXMFJ2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D5vDDFJ73QMn3yUzTubdMpyUZFu7SYffwzz1yQsvng7MvgZyqyPWJn4YMxBvYVHuqZ9B1LY4TfnP5WAp65J14rq",
  "key1": "2qu4jbk21QhDm7FSUo9HAsZfQfqarKzcQdQ6YBBjt9pr9A4e5HTeEFNyLMwKnCJuvAdMthJ94vRyboYRpfytKHU5",
  "key2": "2m66Kt2HtqSmnBtYSUEiz7WnDihAAXPA6kMoCbTwrbuiv26LgPuWyvPYLZGz9WTjgoqQcatWmAsPSqVJ52nNxUty",
  "key3": "23kLB6wcnj87VxmNp7b8FMjB8Ko4GrfwkzaabHf5UX5ANEKZRkikQNcS9UeTAoMfgNS8x5A2FS2N2hfzdXf3nBqU",
  "key4": "4b7mfjRF3Rp68qUxVVu4UQCMBYpS7LCpXN8AECzB25Q9QMmk7oEoWXi7jiSXvZu6JPY3vVF9f3hyf4ZpS3mbDJsh",
  "key5": "24wuEJ37xeXZPSyKUCCiq27q2yHYgbWt8RnueSouYRiE75dWdC4xos4UYAmVhkgaFsgS88uiwCcKjPTHLpP1512i",
  "key6": "2kWYDpxTVXc5HsqJLQe8ihZw2dAQqD5HmMheN8xurbupDG6FcVN77nyUB2Dv4eLBnQwdhxUj96rrd3ATTNW1novW",
  "key7": "5yuTD4VzNUDmvvTFYkDQVn2Jef651nWQtXSeLqihqbJbuxWRZcDGg1NCaKHpAn6LVUZc9rU9fLypD5E2shSDoTnu",
  "key8": "5Q4rAuqnfwdSqxJDRM7xwAfG5KtnsRFrxb1h2Xivve1NaSWygkcx2jAWyKsQdy9kDHV2C7JGtZsugV1ivPh2CYXo",
  "key9": "3z9ipuq2YSMNknakr2oGmM4ZtA2uvAz44PPX73BtuSMpcuLtd8A2ty7qXgTRggQWXrHR3Z3pUFQEZ13XfmAKWK1t",
  "key10": "565t5qt4s1YK7H565W7Zp3utx9gF82v9ECKTv7GYVZ6gpmUHTcgvqCNgRRooee8mosFnehSEgDGaiVPAuNvy8ohm",
  "key11": "5TkaqLQkrGdySFHAQ5ujpE93ErvTkjLgfvrRZ1uL9PmPUiXn87aTXtUT1RWgKqtTVcoN6xwBMD6hD7VyFHH9fJ5X",
  "key12": "7RsfS6DnEvDFmzcykK8wQ4GQD24cLLYbeqyMGaaJcTuRFRsWzcFHDHkDP1oR7N42qeVKdvRXhd3MpmKVptopbZW",
  "key13": "riSBcGWqseKv1ghDdjQkVNvJk7sEvGfFeF2BV7kdGJN4bFgNoUgbxWcfn3ADn7YiTtj9pWv7o9to5yVmrith3d4",
  "key14": "3eMHfzpDb73NtpeDtFYLpAfi6dc8mfGsDxhC87j967YC64UXA5Gp6c4g7kH5nN33BSxzWwFGkT8n7wLtninp6XkJ",
  "key15": "H51Pv2iubGPQXCmhffHHCjb4hrXUT6PfiS9b6CZ44NUc91bt8jCJ1d4KhoDNt2sTqgS9tyh5k8CFqXex6h5AfPa",
  "key16": "2srHimKD7kxSY8vWsTgUHY12a7tkrBXJ8FxpUpWP55ctEPDgNnJTj5N4jJRB4Mbh81exKXFhu7xYsB9wqbVdSD1w",
  "key17": "3WzeJXx8vHDeu2cscjEKgPpRbqzFSfNnfZZSztpPQ8cNmbSJNiZNXVDmdsfeczitb9eqT2Mpy3jp189L8qB1WbP6",
  "key18": "3oUufGMGeYq1P7nwLsGeVkM7aXWfGjBd5hCGFj6X28i7XX95sAfPyErbHwVvKMVXnBNkv7s4HhqGwCn4ZYrqwL62",
  "key19": "4kkFH6nuvB3HaLCjgDP5jcAKwAKn6vwhdkwYEH3orSSiR4Kd3CXc3pywsEJLpeDNSTGap3jfgydjk7vFqozza3vk",
  "key20": "3k1FrXFd9oH6fLyQQ7d3vfvUDGa3nqR9yaS7KsV2BAdsA6TAgn2BxtLTitRV76qtLByzdVMJwNhKjohUoNANLjHK",
  "key21": "36Df4JeBitgGLHJZNUFkd39yDAAjVTJwGAsfTQHz3uwDCBzfPELDKyvkSKh8QUyg4sFowVR35PwvKnYQzacAu9QF",
  "key22": "4ouWwPuWMh4bGrozn8DUfozTpGfNGjoEWUQmXya9pCoYVNLgwgXbjbw6psh8ZeTqJ3h4iogL9xLiENTAwP3qB2hq",
  "key23": "2k29qbUPxjHcLweQdH1KxSGetrL94f1ScMN2HBaRLfEbXrS3PBnfkaqeXtqT2Kgv7oTxMfF1X47XxKhoH2mT7xXt",
  "key24": "4MQtaKc97kjVcRcJSRUGWtVZshQunGy5yhpGEDLzHVQK3n6et6bPbqB3yxHrc19JK83BRxmLWTXaQGBt2C1oE5v2",
  "key25": "4gEhtmAVahbjw18r847LgkTjjKUM7xV8D1JnqKaoyWqwHZbLcrGVLn9BQPwtG9hHsu1aE6Cx8juzhDXsXoT4Xd9p",
  "key26": "3XCNrcamwWpgaLx8Ua6aFukdZUyyUZGiVfdiKFgj2mKeti5HBMVLxtk6mBBNZeG8ahN39agrqXnHdcqVtaFQtmYr",
  "key27": "3S7GZKVdLZvLhqT9qtLxNmbs8jNYaH97UmNpb4x5ZDhKwNgfiCspJB73JkKojiEmC3zGzMXQ2RgG5LaAkzJLRT7j",
  "key28": "5HLP2mGmwzF2j1eF3GabQxg8YJggMjo5g4MwyuRZ3GsT73EWDyx3PhE4w9S6qgPmAHMbR19ukagobzwVu9R7pPpm",
  "key29": "5umiDjAr3Ldrb3XVQt79Kg5CdnkAyNBTCX1EW147955iXkruKytoQZcDgn18wETDbJprtv8SnqH8XQmjpC8LP3Pz",
  "key30": "5WDipMYR8GP486SZdyRfB67pck7CQcib5vQe4NkUHiQZjvkJhqngMqEpwqvFGR5jqQV9X7DrBy9386tCVharU2nz",
  "key31": "3dy3TXmSeGgmBbf2xCExubx2SQSXjdeUUyTZdzG6JUV9S9UvkTNrJqqw7D9kuUhFWf6SMJgfKnYEQRyYUi9iRfyD",
  "key32": "2reojEb21TSMMA4pAZBUeHKbpRagkCPh7xUte4QBms5zNZ9iLC6M5eGrSTXMBt893TtJgR8LhVJ8HKv1CEXE6iTd"
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
