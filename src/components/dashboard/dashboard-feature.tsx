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
    "5goYijTckGxTirqqgYgqFZmZh8zX9gPSD1dpYYnPoGEVbd9M2CB7BezVzrmoVsQD8pJs6sHcQWBPhnqqjeZaCqdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4jfk9nGg8HpCjCie48ZoEzhq84x8BRj6uaLVWsEUnkAfj4imsHJ5oJnqkvrBHEpX9HrUQuDUUogS763JwU5unB",
  "key1": "2HMfLvwP5RFCTR2ReuQrTJKphz3gEYNjhTE5gkYHLk2oAYjoNBUay9L3HXKCxF8PrWs8iGPm5fMStvv3awZhhgWa",
  "key2": "4LZJyF5YiMYNpywnbL3qgwuV5RcAtyFA1UPFeS7SnkeTHuT6hSNG7MBzCh85iiDXvwxRCVVRqTtT8Ukm3XP1Hw8q",
  "key3": "4Yhv7Rsd9j75zH7BRugg8ScAf6x3enSFD5rdB2iGvkbip852pGuwgE18ythYuAFwpeJuF1U8K9sErwvG7ybNJZoA",
  "key4": "2CBLqdjndybCwLT97kwUVex5PBv74dS5GfNSRW3aCw6u7u8QApGYGpWW6muE9G2wtpGP5pAwWSuenCooXeLWhA9S",
  "key5": "Wr2P5Uj4gofZbcdARA9Ja5fmC18dLfMGTpSjXsrvwwopq1YLXACJ6KzTH6uixzP4htAuob4FhKBqwv5EdqgemBT",
  "key6": "3yRT5XtGJzKKjuNjbyn7U7o9gt2sUP51SpUCC3DqZfXqHc6FEm8xo63EJsPzySL5ZB4SZvEz7DDcecxeBB8SNY8C",
  "key7": "rpaBhbDgVFCtraiPiQjRhbC1rYBw4vFev9XLLpbtpdHVYxVBmNfzG8upYAHN6WAgUtKNUg7fLEonEZiSWGZkxgm",
  "key8": "22JEZ8kVSvsPQD6xw1hYB8KSE1n19KCXKmHB8yAtT4swi782KNxH6mUGbK4iqWsWUxc2hFoDvZAvw3ttzuD6hsXG",
  "key9": "7DUuAjvEMZVVK5eQ3Mpbc2ehiBMnEL61VXRCiuuLo6GbqMNW43thweRHzBCVbr4VyUmn4CdoYcKG829D4RLavWS",
  "key10": "28xcyUN5FnEhmwKrJDZML4WX5e8Z5eHBZJ1Q1detMV4rzSxZi7MPSYxaLArquLJCGwakPVjTaqJ6ZJTnyGhwGXfi",
  "key11": "2us4L6i9nBpZCdpNpFpaEi6JFwYPLvS6M4SsLhjTW9iwwc4aE6i8HomLw42qxVZvMwAFcjzf5k43cqn1f3ikpnRs",
  "key12": "2HvoLmL3RCbapM2ygnWutgvjULLuo8nBrtVLQhSPYYZx6NsE8Fge5zj4WPqSukamEYvvBTmwJyaNJaBdiBxERTFF",
  "key13": "5wdbjzLER7BNwnjS2gS2SZhYhamtZ4NtkZFb2JsRm2riYr67PTM3n3mvhiTVingYe3kdU3kyVap9Xz6gFJs6aBAq",
  "key14": "3oAk9znwjdL7do1kBihJwfMFs46rCpBsh2iRnunLXBuYAqiEd84Ewhk2qRaxMY1RqFyaztfJ5rkb4ntZ1YPsKJFL",
  "key15": "5hVEiZ1pm7w6w8uVJnHUCiDQe4hEWuLXLFeYHvDGhfTgpgADX9cZogNLgBhy97pQsYZjyPJE5yMeht8ibf5r3sQ6",
  "key16": "35gF8DjRwDpdsV7FyVACuhrN7DpBWUWy6dYZbEBkaUyeQQ699gtr5mAKxqUhGxymWhtjwjyj4dNQJwZDT3EGHvu",
  "key17": "23hKU9fQzuERoR8JPxcEe1rEJk7m9DmYTbDUs5j5J6dqwuiYmtwnHbABNK9MS3AgM6bUmAk6ZtLn4UZAsFYpNFXW",
  "key18": "3ZRQ4myUniaxC5jE2fgoNyp6AmPnFFmphcURAuGFJQk6MTnyXB1UQ6qtyCgiVKsD7hRWSUVNQWNXLjcmjKgFGMfH",
  "key19": "5TuNF8xytyYiH2McqNBFA2mw2kBBfR2DEDFrCZgQEnN5SZnCmrYbc9kC1jhoV4V4yoPXDuPV1GG1YJpKkcBfxLV3",
  "key20": "2zk5g6CH6wTbF4FQzs1B3a5yF3HJayg6TQ5jFViJPxde6VmNgSPaXJaWCwfERFur3Z5vffmr36mFeRCvNuNLzCdK",
  "key21": "3UWbPNZdsGzKKxZ6hxEcc2UT3vEsHdRLXQy3LhMj2U2mLiaBbVgHuJyzggHU6RQmgJ3zZTcQrAzJpTtYZfAHiUd3",
  "key22": "4aKHbQ8GpBS2YHxY2ufrsLGZaVbrGfwMs4pfJ6VhNAdgbYEQykxv8MjVQVZv6AmX1LDUTDRojPtNrhwyF725Prmf",
  "key23": "2W4aV78QwUUsFwBvBykG2jMsjb82uUxL7ZpG62rF7868hrk6G4MF12chaEhnXoVwuK4oVWnCWnHuV9RN4dgdTubY",
  "key24": "3wHD9UiMU2ivm1xSuHdsxvjqGRGbQ2FEjyfUnrhKercS3qGLTQtrDogDPjddS3kuHwqhsHuEU7ocepJ7GZDvdqVU",
  "key25": "4DvU8NC7bBXdjz8zxfaC7AbzhokYZp5dPSpHqKxp6AudCSTYWiafptd571VDc4VnPHaQRG9aLdgzTMAa3C4beWok",
  "key26": "4KAR6GnR8hcdQZuCmCRu95BQgTNxMsv6uvffdGzSHP1peK3XzqPTfmkjytmdF8CgufXGRS4w7ox4dH3nJxjX2RoF"
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
