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
    "58ktX8SziEi4DBkt6bE9F3VdoJ6fjXVsfmTXtEN6yFHJzAA8XAE7CFnDQKH5fjtK4zJfspDzDMGVq7i3vNmvDdWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FBsq5crJkZyrdFB6hJUeDrJjZQ2JHeVxkcbF7bM9HjdQ9PsuKZGR4kJ7aYF4fuMF6KgnMsWJePYUwKCe2RmGtqT",
  "key1": "4qGfkdGGJAGJ6r9VPa87tQkdrCBXApLeVGdtAZihwfW8eeiFp9j6oa9saujnKh15QG8cHBPhDYjffWg3dzn8zqJy",
  "key2": "5fXEwR7Y71btEV77CQo5qZRUDFijwzaEoB7RaEVHspLidKAnFJNkdg77DZGS61TEquM8qYd4X6zcHAXSkdjHB8KG",
  "key3": "5HzY2bCc5ULU4umdqiJKpvS3gAGrKGh1hcNfZ7MGpUQCaCD8xqguNw2UZKJeFHK1mWbiqWAk9hy3nHbxnvkLUCnm",
  "key4": "3Ey95FcWSjvzmnTediasXg4wYjzouUgbKfshawcTJQKaE8v8pUYGHXbpRLA11WCYhqmPxsBTZVfz97WBLD9Xeyg3",
  "key5": "4HT3wfXukmfvuygsUxwWShKqyGUaKHcms9jpuANHZ2SFWDWfte9qmArPP7KoKU6MDQwsfpwEkWkZDV2nyR86C27y",
  "key6": "234GAXiBejaoxEiTFejEhk6y4BUZxFYLrrCqTfvVyJ7fworWFmeJLBaeuekMT4h4XV5eHi7UzQFHfarmCXyjTbwe",
  "key7": "39jFeUDsEnv6JLu6Hp8HvSjWWmg6qXjURTGjy5exnbN8ZdWkQezKmUhMYa9e2pbAYd89iM3DvpudE7HRasaBUMZC",
  "key8": "2pdsuZseXqdvWcRBPTnSutfJD7mcxRd7WShMqR2RvTqancV97uGgmzBTY3eWjkDYyGawdqgT79F7BdjW3S6ksmCn",
  "key9": "27YBEUrBoPzsFy1j1W5aNRE2digytRXbmwucUzUvrFkLv4L5yejYQwQzdgYajGFh67U7S2ip4VSF5VBabPoGn5Ln",
  "key10": "5ufmR2T4AZxheKfQDpejcNoDAYtmTXMS7BFpF3mWZiQFUDDJeL6Hze3GKqLp8tFnMRGUgJppAr4p4xTBeZwLusnV",
  "key11": "5AEue5rdYLrAcC6WbEsnkwBxCK28t8HZzEC7yzWvFmuc4CNwN89ZVwyTSx9Xh8KsrLmcwwvJ3K2cWR2ZA27Hk3bB",
  "key12": "2PfiNi5bGeW4dhzKjBsHjU4bRAQjUC5VhUamyahnE6nTHUsTo2KWNZKgbqw4eMX8wcJniBtco2r2fytwCuhkGyg1",
  "key13": "123ZSDaNhg8MFmYzmPZr5Z7cPCzqVbWfbZk6eQuYQEcu6rYgeWvHh3bjPidwdmUwzXTdSwT33thqFKcRbUq3M6qw",
  "key14": "3JeR95kjtXE5TxgxhNVivaTybeN7JryoGakDKqedzh2C8wQQDBxH4aXXQjVutro9heNmbPQWNQwKBHejrUPyh4po",
  "key15": "4td2FcrpW7hcpN79zzu14H7QTtgyLmnFfaVewminzsAFniHHWw8NL5sPEFMZs9fCRJcKsfrABzECYQ3qr7hLHhCN",
  "key16": "GUUW9h4JM4dqxgaH7sFKygMQyJ1d2UBo22xbNKMuueGiZ7TmgufeqxmR4NaG1UA47Xk6MoeU4yWRKKZT4unW6Vi",
  "key17": "5LAYpCG5mZQsHDtZFfTJ8pCFfCHLMFK6AhaP8sw47Qzufw3RPfbnbpHZHtfPysPt465jiiEvVmW7zdARKLZdjCpU",
  "key18": "56RGeJ7j4u4bwEv1T4Y6qHJYYb879qfBVLT9LiJJ9n7w81WJtArsC1t2JtUoeYa3t1KcnJUXs7y3zYJdRxXRQoKd",
  "key19": "3hTYUD8HKZGt5rTbKvgPUv7Z4bCnXzfnS7mFv8HEThmP3Xf8X7iYTCYofyhfibAzf8535QdFSCS1ukUgEMA29tK6",
  "key20": "4z783W4HhT8Lqd4EVvyDSQVtJBu7XzDMPw1BcF4Ug5JQ8WBndYM83XjrfcnrxSYZmzRb9nTQde6f8Q8nFKZGy93W",
  "key21": "497cynTsn8xXkH6CDPc9ytMADD5K6tWJbnWGHcVZQ19iPGq2gx8CjFG4b67mbjVU6sq9N1iFkLaNASBV3m6pD83P",
  "key22": "2TNb3gKnPoV7AfPUTHqoNNZFJj16xsxrPr4myDUSgXCGHKfTxDMTSp3nKb68HMS18dNGXfK2yB2wnwdvFAMpNStk",
  "key23": "59cwzSQBxF2iTpz92M2pwZaKNN9c1sLS6y6r575PusrBGUGxsEVe4M116mQDq6NANrohC1fEfLe5dEvr64vzfBrZ",
  "key24": "3vtHHnLNtp6QUvp5vn5SiQ7bFXea5REGGVuWK5tt3CCrBqvJiBwUybCjohHqREv1oQ8r1FfTPV1Tvzas5JQyUvqU",
  "key25": "24TVUWbQU4NCUBd9CPrFnkvxN75iWeWJnBanfek23rdobwJoLfBqdQZR2bkohJjJ5JgZbUSX5mxYmWwntqwfCioZ",
  "key26": "5QWFVzMbPD1s1oZdAXNSDw6yfM2JAURRhFVei49S6WW8jj9QQcWs2mCJfErQM1SmUwoAfmaDaUpi3NXxpvCdUvH5",
  "key27": "j7y2CxvQpRZbX6RhDtknzgw981owipVyFEWyEqceXsc7Bjhw66UyMvLC1VsmeWvT69wJCxNooFY3z1597baNKBT",
  "key28": "4NbL2H974KwVfLAJ19BaeKr2sK5xH4gxJAxC3gJx6dpuYZFqwNKtuZPG5ADwp2HsXSGjsTPBNCw4Y6RvbWKt36X9",
  "key29": "3LN1Z1LZMnwANrKskGwjd3wH8mvsM4whao5XbdA3vmPiPZ9Wx6q5M7zLC1eLnJgDyPc64A7g9JonRucfFqn2osqU",
  "key30": "4ziXFEtvEbes7GzadYHUW6Kxq5FRDDXmvt1tBwNyoKPvXCHr64pyz5xhBboeFPb2q7T7pDPvtKGuUCkc3hyFJhoK",
  "key31": "2Lurc8ZjW8jBzkCZNTqs3BdFavLLeusCih9141X8h8M6z7K7VFgfGcebi2BwvMp8adbtyM6W7r1ienHC1HuuaKBh",
  "key32": "47va7HpxA9s29Q3dvjURmd7pvpngVb17Ph2D4PnTGUFVKH6DgGnwgtMGfUau4H5uVp9NNAcdya4ahttQFHWwr2BC",
  "key33": "4hCY3kmX92H1Dmgw94GfPQyhioEL7tSM5dnzgZSMdqEZEsYkNAx2CNeae5sF9fqX6y4fQnpsE1fUdXK5kcq7DcmQ",
  "key34": "yhxx6iXYhgLg4JKLKkTA3kweGan7fVRNhG36VjSV5S4nnYNMnBsTf1djRsccKwP2FZj2uDTZQnJsZtBoHSuZdPn"
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
