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
    "3cmR9y8RHJj6bx45jDiDwZfQ7cCxC3bufY3RgsaTXp2QjSjL9nCJLtcbgFVKx9kysRGRSdxKSghxrJe3SVUoeKZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eWUnrcrJUe1vVzFXAMZig2531BknWpoUdugvPuX18KEvCKJFtv4bV4yxjU5zv57BjMz9n7JrYgxYZNMeGuHEqkj",
  "key1": "2A1YRrDnkUMqiEMppMDDD7mPxVTdZkGoEiQruSa7127sCMx2fjLsCccxtr6wQpp7B2UcB2pqRgKnBCs8hUcJL8aV",
  "key2": "5XuW2ejMKd6QWbw2nVJk415ua384bDqs8zBpL1BykWH6CFVE4bzXW8MHhYqrEoprJKAgCQiu9Qw9F6bVgyLSRKby",
  "key3": "4cnMCBvajFTMAzz38h619VxBcasbm4nkKGg953S8R5pzXeDut9wjhMu2HCEogDFEy3nvHQVBVnZzEvQN2GL6HSBZ",
  "key4": "2L6tZyq54Ge6w2bcmP5LD3sy3MKbuoTpELKPuFMYoPLnQ6Sxf4mn6dyBzKk84YXLmJNj1KcukmJStfTurDbqNEt9",
  "key5": "4fjQRryHLGwAKrdcihYEUqPtgGg6eecfK3CYAV7frAWNG2vfwsaeo6qg9ioXVWwctbPNJ3usEJEDuCPU1XXHy9D3",
  "key6": "66KVz5b7Jr3mG1krYJNATh4BYaJGarSgicMzKvACDEXca2dW7wYPLBi3HQxmYvnyiPNuCaBv1fSK9torYxAKsUFA",
  "key7": "4EbLGSvuJXM81XjV1p1Qfb36MHYAGf3MfwEcwrcT2hg7rgu8pirycroqmmKF5wECerjNu7pg9UWGUk4QTEJNJyUg",
  "key8": "d6mVoV7UAAVgPFqtNDzR7y3dRSKCnQDWhoYM2ZpfnNJ8kxwm4u5mWj3ihiyJJ3yDXHdqzVxkzK1QL1MVz3h3U1V",
  "key9": "5Ew5PQdGd3PQEoUEvpL6VskQdZcwZVaG4WRAatGsesEWBHSjbXR7b8YvqiES8aQCDAq57e2jVk6CPqy6zcaE7gk4",
  "key10": "hWwn93wrg3UCu9DQsf5omJL8m7f5CVXz95U1bst5Pspkv8iDULZyTFmuK4NjLwYWCePSjJhJkrLAzggupKW9fzS",
  "key11": "3NLwjWNW6BNKE32BaW3BtCvE3roNssy1ceNCKE5XM6uh2KbFrywybtb92YFm9s5A28bkrdRLEDNp95643faLFohc",
  "key12": "5tdiF8Qdvv8zjGai9xfjDi7eTZFAHhGr8EsM5RLp55W1LiQv6uCR9LUGNrAbZ4cceitfByrpgGuTMMgi2AEi6qHv",
  "key13": "2Wvk3kW5JwvBDjqwUdXSZEbSdq3SnpfoVX3J9nnbapiGadZo5DrkK8oE2WWvaEEPS6AJW3vpz7V6Yh5yNp39ataK",
  "key14": "3aKDj2TLSs24Qb5chepoFYmhwSe4oLyFdkVwys2qNkyLzPk8kb5Ms4r7fLdGzcXxA66NnqZJ8QuCHBN5zUeoTsL6",
  "key15": "237DC3uEzurBHS8vgPsgV41XeKCDVwqQzN3ucQdvvRYDCpU1fEnBT6iwu1WxEYpeDponXKSGCv4ePhxwXR8RsZVv",
  "key16": "3Xpyc6gZQCybsBMoJJv1hT7LeL1dvQzV5nVLBBu1oDi3ENphi9LwbPNrys3bwJzxnnDfiFTLU3LrU7k1YuhqEcNU",
  "key17": "37xmpFfecFoZ4f7R1rVUsr58V2e4obS8SdhMEbQpbAx3aVRcC4rBUkDE6eFSxFLQqVXFjxrEEaBFBQJ9fKejHaXp",
  "key18": "39CbmUGQHV3ntX6Cyfaxu9KGyJp6acSjFhKovpWKE5MqGJ4p5399EdroWxYHvaZhZVnPrGjpSYQrh41xFgu3NFcb",
  "key19": "5pgLK9HyKWkAknny5xDYzWRvFSNzZ4wYoJ2Gd6xesQZQsFFma9Dtv9Ltcbdx2n5pDted2UEVku6hUQDjggCMpbn1",
  "key20": "4LuXrUpTvfsaRAqc9CozdBwNkb81YmGY8rScUuncyMwCLRywJdAWJx3FGwR4DvECwSj18etAY93hKo74vzcn3FHZ",
  "key21": "3SfuCKyuhiedUkVPwkBFTjqPUxuNgXJwfcFKYHKW27VKQajo1siebMjSCNw7G1bPQW3ZULXVtNTrmsit5rFhN1ic",
  "key22": "5JnoSHKaQcHtudkSKkkmMSUaP8N7ZyitMDpAutE5DENWGarvqdtANCGsSyq9KqUuYkuMJD4MHmWB43qSvNxbyn3Y",
  "key23": "541yniBgDuuagVvbvF3BZiUW36Zn3B7bf1ewLTVg3QrVJMyCgFU5nCeQcB9pcPgYSDMUHwegdCZbmTRSpc9T3eKT",
  "key24": "34WgGVNXUhc2wMhHnxuMq7NYxtfqgeekpSkxjLiZuig4AUMiUzdYbn6P11a2Zamc6cm15Pui2zyorXfuixa9H4Z8",
  "key25": "3RfSZu8ifGNAJb4xevm8QkGoJD6ghiymcA5hbkKGaip4rM8ABFTw8PC3ocFbvMGSrCrgRsavvuAu8aoxfsp8D78Z",
  "key26": "5rZea2y2ji5LH4yXn14WnLrcF1Q5q9p2m4a4SEXhswWoTmRrhXvauSr2kxqmoPqHRHbcsgPnKp1NjGkdYPLk8kWm",
  "key27": "3vQsdxQPJs5AM331KdNZaraabWT2RYzweHm8x67djqzu5YGXjn8XnYV17sTQY3NsTgFbfYSBXnx3aLQBGQvxwPE9",
  "key28": "yXWh7Np1eryeBvFC2n7FYTd1uEhTMESF6rshmq1YBCyoSqmYbNnppJHeUdseLUVd1A1PG1Twed6hbLFxAtWJpih",
  "key29": "2j8MvC5J3xrhcK4G2kebgxd2zxYet6miCmQiZhSXK7TChnGLaNrLruX1BjvV5xj4QBxBKrteqHrdhYXbYdFJ8js7",
  "key30": "42Avyrzk6wLYYjcZTvxj9gS2M7kcQQsrConb6D2Kw2yVec83443EsaN9WaviLi6c1jevuBZBgaYaBibH74pzzGer",
  "key31": "3CChxEcfoamnnHRcu4vStJZccexuDU98AggxqqNqZdbhoNjwiUJChpnYK45fZfvdBHL5W8tvHBPXPuQGwwEtU2uC",
  "key32": "5Wp85vqpaWtzQZSEqKTQUbd4eZEqE8kYUCCbwRqnw4fEYEr47YP7XXp1hriLwF3S233BTjjJBKnZgPATjHTQRmEi",
  "key33": "3LGxwsGUYp26UQqpcNKfz8vaXJ3Ricgu23q1s8tG3iz5NbJjJWmK6jTTE8FY3DfTbg8qv92wQJkVfQtVwdvpqU8U",
  "key34": "2NKzVSfMAmy5jHrEMdQro4rf2YY1ov8xF2B16rpiBQiwL3sMpstsbf4BaquGukqyz3P4vQ9sfoXytXTovz9YNm5A",
  "key35": "36uwnum4MHzVDTWtVbEuEXhSnPrSPTAA4pZTbwM8SmtcXLjxzBrLrYdVBNdqPnp3ZUwYEBP5LYzUrmHZ7CnMioUn",
  "key36": "4tKft5vVPxnTa5QXyD7KbNRvEdcLE8SA42qLMc3vheJHyu9E4AtMU7kt4239eRYhaoy8iBFC99q1EpTP9YGrLWVP",
  "key37": "3bWn1AUyWsZhGpBXjm1gwddP31bpDwtAZpgNedaSn82fcZpUBikVHTjBg55CQ74SEpHW3yW2saVtsT3pAkwJVSZ3"
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
