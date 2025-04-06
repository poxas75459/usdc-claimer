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
    "2Pk5W7fsTRnKCGfNXXFF5HmxLD466zLDdMMuNFoHroFNFk5YLw1qNd6xdkPEuaezpL52XkxzGdBubRrCt4eeFjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JxdPnEyZVyhstiRheAkE4wTjUUy41RBsxAKU5ofjp7Ww3MNPHdKiEpyKF2Cm57ay5WT3xQe16pidsBN4MeyUKFK",
  "key1": "46BTdi9m8CGcT6jzw2gqWd9rKTdfokvM5TW4E9YSx77W6D6Y1XLGXJoonfFrfTfuDAmfJuW7jVp9L2XdaFoxKKoi",
  "key2": "JaeEv49wwtFnBwSkHuhVFDaZNybMKgjdVzm5iAqpy4ig54EwLCHLH6aV5XwrLMWeMeFJZenVMP8ozo5XenyNbUY",
  "key3": "61KK7F9fqkXS9aF6g8GQxA4WSXKMtFRbjWMQrLBdwQiL4JZwrJWyHBBgpdmGHDPD5TWrfj3f67vyR1JQZK8wjP5q",
  "key4": "2dcx3HN7xDmndWN3j8SsdBe41s4v2AtQgXUAMD7yUwizAdorYEQHtPZKXbybR9mUdiDm92Xtxw1Zw7ytVkBvw7ro",
  "key5": "4V7pT9uEQBMGjfmLEJ4TCXL5cPvt7VjYwKiSqVWKP2kAUMyWDJq7UMLESyBreU55bU8QwbthPKY76WNPiuUgqF2J",
  "key6": "4GTgKosGXYoRRLrHxafAGnnDdUgQFM42JsavoXDEuvJHzb3QiakgyC31wG2A26dAiQk5ELQWrsMf7R2fn8R1rp6S",
  "key7": "4t52Msk4wMjaekqbRwWA3x7H4dN3SLNk2TKtpfrMkS5c6H8QJsJDpsspMXqDtBmgexkhQY7PxPfgiBffgcBgm465",
  "key8": "5UJD613rvwLp5Fn3ZmWR2Ye64m1Z6ex1aJbcHzNDg4uecqxXbi37eWLnM64xNNxwXLYYdRZnX2X3n86PzJGivyv8",
  "key9": "3Bg4i4fyYu5VTfTt4b88859iXA1xutpLHCyJCTVtJyh7sUYBv4bVzK8wXmqgbyKBYzg9osLkNeH3kV2TccSpA8z3",
  "key10": "3TL9VZEJnLJRBqBQnydCYAtcfvCAGTxE98YTYmgNKrPz2m3WkAqhYWxtQwKPNiD4vuLDQTHWwMnupvEJDPX1pwic",
  "key11": "38DDAUuWycX5LmNPgNTi95maExp7UUVftxHx3jJSXph9vbYek94kirJdQqSEppddNaxS99eiBeDHC8KHAf1i5kgA",
  "key12": "3EJLuVEC9qfr6JZEEDmr3vejzt8EXLmnEWzTPGtDU15zJUXnkvF2QDZf4xN52a1PZoKX7REMrvoDK6gBPoteARhn",
  "key13": "fLQywxVtL1t9YAqqG9aUMk9AYcn3LLEnDKagwMejGZpp9iK2dQpWp4Ux4TNcDKEj5Pr6kDh6a4EJEcxsnRXoBbU",
  "key14": "31XofB9hxJLpMzjqYQaC4rSNC4eQcbfz75JzA1scNTYHoFYX7PktadFmTM9DqtJyBuBoBaMUTfqyePXCeW9h5dyg",
  "key15": "ayy8tzWqSXxeY56816DVcpjt95ZRb4JXzAFRZUguiupwQLgW7jDgVhJGdm687CbTMAqaqHCnoDWZsN9LQUoMZBx",
  "key16": "41sKEFCu3s163iVn6H2ks52DdSKzKtwbmPca5srZ6o4UuCtadU5hxfYFsz3bdZrbDnXfNSLhfyZTkehGP4BMHfqH",
  "key17": "5M5ZUVpEKncVFFSqbZg9BZ3T8EZa3GVGS6ifHrLyhaeUWeAHmpQXDwP7VhTZGLwaHrgXmtpBr1amyvXDce9mGB96",
  "key18": "2FZrTK5zCYu427BHXh3iCewekSDhVUgvXYTiwzJcHmYKTjfegMJ7PSH5sZJJgffGrmqboxfjdBA5acksTvQ1FRho",
  "key19": "2pv6m7zBGELw4jAxu9kGS4pQeDg3HZrZyRpumMmwVugkeVLzQWnu1hnmdoZYfoiFexKuy9sN5SLAW9KwLE7SVDM",
  "key20": "yXRDwnqtdGKjoHxD88usDLkC8unzzYeLzkfJKU5LT81E23V4GMRcPFyBLkTQmwEqduibE1Pp25zngBz6pyke7up",
  "key21": "67XmpHASsHY32ugDisiP9sRCdMMmic8KoeQuwMBTKNXoC3sZLErzxR7S3q2BHDKb4SsR6h39zQ7zrgcP3YNUhgEy",
  "key22": "5tsTTuz8AuCJBWeWbucSDw8DhM2ZZqhNqZsT2gp1YRR7pQ1rRFCFPkxkDCWMKKtkq2mCMFXdjdLUGXaEjC3hQSmv",
  "key23": "29GREzzwypLkJAoRTGvDD8qxy7XzkSuX5dzaukmzGbT9bopaLQbSqGvMQ3mbrxV6EvYceM5VZUag97a6czhB4HjN",
  "key24": "vA7Lr8HZBtjXrXuuemJwSc1aBC3pKd7EsP8RCpGRiRwyYw8dNcmnhUK8pijyPgevfG8ZrnvSBKz2m3XK3RVQvj9",
  "key25": "5JjN6DGU2dD8JBXToNzCqfr2mqJHYMcRHgSfh5ePAqic2oTgAAr3acJxgkfSHujuUimKQJdPPx3gmkVMDgr8C1No",
  "key26": "3DsSBciC7d2ioDvpQGFeHeZ5bnfK3Tdrznq7r6o6X5amNZP1niL2fvBNH7Jh6bekhhAWjvp5Fb9c3B1M9r6PaVGe",
  "key27": "3v7qtV6bkML6cU14v1yULWGLyF221Cf9w6B6Ui8mqcZAPTeHu5feJAWSQtgAzXf6bSEpfs1Kv7DM2YojNPf58dcQ"
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
