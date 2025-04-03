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
    "5TEQSi8kxTYKmXCKfhBrrcfxfp9w1fwvr5Lf3NHed7tAimYwGyNAbxkddABKmpa2256mwDXRZMmtXWEh3rEMqUmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSZUTMB3CZK5Fh3q3dqqTRjkXUrUbai5ejAVKA4vL1cFJoXruRtp8dPbz1PTQXjJSjzpq6amotsWy4unVQvyqv1",
  "key1": "4Ei6omQqioU2HFVmh9HkwvjQgBjyPHkugngQsmNZjfYLJBGydn3DdY9shydzUtP9TZuNvfD2S9ZrcBWPvL6sNb44",
  "key2": "X1PQUPJ6E8qJVJio14xWHdVekZH1CniCAAyUbQzxjUo3RWkVT2fkMsStTMD8b8urQy4n2Egd2is2ETd9v7zSbyY",
  "key3": "4HLoh7Ft5LUPATSiPaeSWLSBLs44cp4NcHteHCKPW44us55Rmgcfzg6GW3TjK8EZjevHrfL4oV2dneaXWtBXRZGj",
  "key4": "3Sp7gXdyMfxXyhpzaEJVrn4NDWuwRN2W6ePNKvihDmniUmkTkDvGiEotyLHFiw648xtKZK7rMojDynE7dhEgRahf",
  "key5": "614KidVgKGzYppiaSUs2RhAcFNqQxnVLcr4nC5AnSHTNhvqjLTW9y4zA6wESmmEsUYH6d3Lj8w1xbD93EHgYVrQ1",
  "key6": "322WAu5Y3piKxfeiP3SnE3P8ixn2wgyaJkRFjZZeJKkEYXw3yEtocLp1kjgvg2X9BHB8ySsBZ5WQLtaeb7YzJ2Y6",
  "key7": "5Bd6qb32zNrzZnap36FzMRpefAtpdtzwjCWPKt7rPw1KixR67XFBsRYvjfoSXBNwcTJ2qGsMkzcHVfJo2JHDEyKi",
  "key8": "5oirsjfdFgERtms6yYVeHuiWhwmaaD7aKud7JV3chbhinwL7ovyz14pX4r7r9vMR5pjqc9VdWVZ9VMY4eX57d9jC",
  "key9": "4Pd465Vn2hNyHbexVAdnn7P98DC17VsEGbqMKoYE3oWYHmJm9pBer4zEAmSvXqjpv88Mj9hBJLKf2QeFxpsnBQDx",
  "key10": "4ZpSmT4nDebxvARibJwLTm6jPN3hKxWS85LtRfQqqpwHttbJdPVakBF6T3ZhduRdPvc5GYA35zDJsxYKZaYAZP27",
  "key11": "2LvopauNi8oTcMcXVE7pG8vfAuyX3T3Z6FZHkUrdv34e9EueTKeDxAfdSWjNarDRQf4M7aB6iSqpunYmri4PZv5",
  "key12": "2GHG5A2V6VUqMEVxCno56V8s3Wdxw6vScgJdHA8Z8eZEnXEhpymSjotdCMjS1PRxD9ov4DR9ehjEV9nfce9Y8rKb",
  "key13": "PDTyyNJDG4vCAexuVKLvMzD63qHMgRQpohZzjKagAsfD4H85qHJigZ9ri3RVR1f5NEeqMd6zSJGBPKpbrf5wMBQ",
  "key14": "PA95r4RsDqfaQuC4B6zCFUbELZ9nE7C854PwRy5MXvGUJfC16A2zu4ivP8T1QgeaqZFX5LYxpeS7qcrirjJqanp",
  "key15": "3WifH1nf9CccJJSAaotDPuDKmuDYGBmhTKpQjevJ61Pojwr1SGmqYUb63RY8o9AfwnzmzKz1SQhwLXTbcvgBV4Ko",
  "key16": "4TvcY6okBRivzXio46qXr1aMecSBZkNmWLWrvr5Q7yH99Qb1NFJDmRyNpy4AMuTL7aL7t7ftagFjKFjWZ6AcZu6G",
  "key17": "5UcjuABnEdfmPeLmaH8K3g5RApbsfGaaUFEFzTTfzcqJYfX3dU3SuRWrdJMf16Mch5cLwdNzQaqX6TcRQQnqnuhu",
  "key18": "4AsHzABWXuosWuHSuVVp2zUXudyqY22FSZ6dY9wmWSFymhzLiPDbVp8EeYxuEFr5hYToLCPycrZHs1keVM3p8wmw",
  "key19": "45WeDf5gDwmNM22rhNiefrukutmghZ2kTTxHBwuaHCaFc21gSw75CdLdu1NpHi8HBQbG1S7jAj4pH4h8bmejUWvb",
  "key20": "HuogDLLE8A9pYVWUt9ZkyyfLGxqCxwsrUBKf97eerV5aTxLe16FMKgzuvLSKzaW31zB68ZpaVSuLCRRLvf73GE5",
  "key21": "4wMQeiVXduGmp6rYgS9TaL87nbbobViqAsJq98jaoZ4WcP8sjy8rV8ANvuKzacE55etFzaLw4AbuKCVfMa9w1DZh",
  "key22": "giQtRYPxsCkydAcHabTzkTYGx9tK1q9y17SjAEGkwnAoho9FLXaFPUkNRwGWPaErSnzcQw9ZmYZjfLwUofb2Aur",
  "key23": "5sBA9Dfg6Rbp73RwrMmG1XokHecHP6L2vzxibmUi4knKqcPJ4MrErj5dCunmAwpsSW7Ac19hdAU2RHrZBSLo1rkd",
  "key24": "63dYXsaTGwUWhmyXKksci8dsPpFri1GKBr4Q1fuSDbqfVEA5M58p6Awkv5CfYRCS7jyqYrcrGGgmTuXvELZQjsXk",
  "key25": "4cp1gAcvWXd7ATmEwDKqg6ms6K5ZQwuDnTRKUZxjzr3Upft37JZfLRA9hc78KToomKziBLae326MaesJLA1zTNGZ",
  "key26": "2eYbDQ2NyMkoVaJ7RGMeBZBGBcAA8bamraU3eYLX4gPNq7dW21uA77Fa5US1Rk4z8QqvZZp1RcFnSFVboyWqAnM5",
  "key27": "utJsuowsYn6NYkNdE9pKVF6H4kGH6s7AeFc6CfSAZ1AbtXK9cpBqRLZNxp3VaTgFDM6SG7R2tfFjX56MNFoBn9B",
  "key28": "4etgaouq8BmnQJh8WPCAqD1GXL1BxS86623evzTWeEbr6v3ubL5x14TcUdcZRtAG3bZry3M6pHuw1jq6dTyCe3x1",
  "key29": "jz5EuA6Mp4b1VBYZpKiA1cEadwfFYc64Awmnx1XtZ4gP1PzLrjFdjYtBdsM4efq9S6RutQAu3xRUNviAEAejz8g",
  "key30": "41zy7pip8ZxdnBxw7J9zQkocsUwLkPGo7Dcg7nxZaSoDVZ4EesYzPps1QWfHkMSHNezdNY3kkneb9apLWSpgFuAE",
  "key31": "4u34jgLPA8D9j8Y8uBMwSK4AFZtzDHV1T4yP1RW2u8BT288JH3fSxz8yyDEQwFAFh4D4K1cwqxsAZYhyj7bP6Z8N",
  "key32": "3zs9fuhBcjZ1w16wBJ1TM4knVgDMzR15kMU37hyP3TrBeoZkCdwWbWGwyAXojN3nP1muUPtrJXmqp38qnHsGVcpP",
  "key33": "3oNp3ubTTGG4pF5kopzuEmgFVgdDRpCrkLmdoHbgXcK3NrDKAxitWm1kmz5HBUscsKqhGq1kXG4o3mqJXb2dDRKX",
  "key34": "2m2UdKHGApTJWsHbnzA41HmLtnL5SKXmtgSqnNStDPNiZEETRoogTtG8eteTmGEoAwACJhJjvpJMh6AQCyhGdmZw",
  "key35": "2JN4AHKMwfmNGfMih3njMk4N5qbMcf7ZVUHEoJbHi2P2v8Yr3cZXGppVGnSEwH3MEfiBCzC64SM7J3GDs7qcv9hw",
  "key36": "3zoiVRHQkqG9XLwXVBBatqYVxbpE1sRJ1RcMPChCsRqRLj2yQPLeWVVg8kMQxjAPUTUZZAywu6Ssk2xUUNu8cfbT",
  "key37": "5xvHAubmRaJhn9yfZT5dbhnU97hecsXpy9LgAAeq811XgsEfNSCpTiQha1bVsaaXxxvNa7fTTVDtUnSnvnERiJKF",
  "key38": "5a8oiisfuXhAZAkNCP7AB8hLJEr6YeaQekLwWEYN9wLFepiqapVvKvoaTaEY4aJvdq2DcBRRb7AJLAQaW5FCaQoH"
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
