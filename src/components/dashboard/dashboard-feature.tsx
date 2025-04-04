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
    "3HwtQwDP2dCevsAS1hKR549E7E3fUWVr6BgToCPyreQT9fmbtqe8Mmu257PbZKiCAN4gZCFWd5DGi8r4JiPGbcyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3buRVbjeVnHzZRMCMhtRbnJN1jwh6V56hGnWAA8h47pgE9KqmDzLFZjCx97sHKxDuQpzS6GvYcoJH9XZkhbsuDwr",
  "key1": "36mzZS9ksCWW7LQ3D7Dvbz7Tn7xkmNhyvy44AVryZ7F8zFNmZ2kcCcbHxGtvY8Bu4igKHXGJart4G3gmxDSqm6Sc",
  "key2": "5r1hKmSVaqbjjJAkBrCweyuTBgb9D59rjn64RnZeqVVjpHvmSQ4ooocedNnPUMca179teYbQ7Pv4uCyAU5cdrxPM",
  "key3": "3xLyEYxbWV2aLEPsK37dRrC1EbLQyYwkFUnbE8azLnJDDSA4rTWmHghM7Gi4LpavG8BC6LJE1ofp9gLintiK9hjY",
  "key4": "1MpwgxW73ojPMyi6hLb6hDiNM3zJZvHyXKsJxYCAofCzquedffhrmXFXvKJSvSgmgPNAN7wF3YeottMbQc5RTmj",
  "key5": "5atnvLNYkXW3kPhyAcKd3YX3pAku4ZxczqAXmXxiZo3AfxCJThtfbze6HSgxRRJfAk6nu35AqAsVKW1ELo8zVPXi",
  "key6": "4ENHzweUWdTP3v7bvQyFJTcDuCoVSsfyzeCx2JcUcb358RUuDQRwCdWCMss8eXFZ7eWU9g1uQ3ZS3cydcLsD5hLC",
  "key7": "2j1Zy8Wv1jEizXoSzCQZymoQgTo7ciy4goKi2vckbU3Kd5x9uR1njrWT4EyNDBgHJWnVVKpJ9yB4EDCYQ7NsiaZR",
  "key8": "33iVgbzV1oCtgen9Tu5jHMEa3yqUFrXmA8sRGUvZd4pbbUQucxmCf7o3ua5ZsBiZeJ3mnMvsNWwYnGdyT9mwRG8E",
  "key9": "4WP1KXRiBZQxRCBhUfVUrfm8bQSdYHieTkwyfX6q2Ywe2amzqMCQP5CyVVazxm7JxhABphYNtY4ieqBrm2JgRPxr",
  "key10": "3MP12bSkEreXnzAhRVuKqk3NoxCLkXr3v9daFRQUfZQJ5FZ6kUnV3hhU4jNRef51pEdstCQH42yc7HSH2Vw7t5j2",
  "key11": "2AjxkwxJt83nDFgTJdkNjDZqQnWbvxCtExZfesd9aGG1mbgacCAhv5TwzaJvTtAeSypxYNDo31oGucGEPLqKYnJ8",
  "key12": "3xoginutyR1tejn54Df2WrDQCfuoLaG4aQRQLn463rzciHGDJHYj26v12ATPBcY6MAz1eS6D4ThcqG7HAea2o6Wm",
  "key13": "5dA5AWdPUQFHbHSq4vey9uosPWPSMqxW3u6hBVrMQ5fhcdztBNH9nw9jCZPS9PkHxcbLkFaM5gr2ixEHL3JHfiaJ",
  "key14": "zNdSdJEz7TcsrqNasTdP97yJ2DgPRTeNMFEf7JMaV8nkeE8Xsv7pxN9TTzXMZVgoChezwVeFnumeWwavCbHrrx7",
  "key15": "2SUCzPykCvsaNJJMdA5aDswHVgC2x8u84CamZiGYsHXZjNRFH2kmKi1rTZLm3fceJ7ghQQxDq3s46DGm84L7wQ5N",
  "key16": "4bk8qf8J6UcZ6y5LkXuyZsTYpUfPon9ACkakVsPcgddRD3pTVBKMmEaP7b3Hpxg4dchutdnPEpgHomuCAqewkPq3",
  "key17": "2S2Qt7W7sxdne9coX3eCB8FanNQsMFSADsxorq3CrHEMzcMTTgGb4Xg7wkmrT9YyygNcvzTakiCCEMP4o9Xma2KE",
  "key18": "2qnTo8JinfjCHsU5xXXjSVp49QqVykhfRFnbRyhuCsArFGKHKsL72GcmejEfRZ4gD8uxtSyTsPhodPmhz4fZXri4",
  "key19": "4gGv3RjzvFiPKNjnk8NxPpidXKqLCVV2j6YyTRMEmGLKZ3er5AwV4XqLX5P3ZxcmGKNuA8SNhZJg4xzwVWCvH4Er",
  "key20": "4kTLcBd3tsf6YyiKke7tNYYaYrgZYg46NwdU1CRCDMVyGVxWGfxCuL13bX8mTfdf47x5YLswBcaDe8JTwgH7Jftm",
  "key21": "3zD8b8TQ7z52Dmu9DQjwByffp2fmUHPuzs3U1pa5SD6FiW8CDHT1TYvo3vrEkhJ6phnidu1fWwRy2McNpEMcypEW",
  "key22": "4QcEWbUB7fThPxuMn4NszViscboSCxWeCBiucnaSwDLaaMDGMZjSDNN6sZaKvPC1BLhqNbc44xA4BUGDTTB7Xh6c",
  "key23": "29DVnBhgRqZ4fKqZGTDF2GcDWr2arqRjrNqXV7harQwkhNdYgVbbUtK1PX4MHUtkgELJqH3vCR69eU1iK7AFvYY1",
  "key24": "haJQuMdGYWPqy5jATotJwSxMxp3B9e5rZT68XYNe93iQu2XJHXhSZoB3kUcsF9ryuMjidTtmiveB1f2hNLWsrNc",
  "key25": "oaSh6K3kZbLYibxGQYDv5URSJNHZp878y5GyUC5oNyFF8XELwsaeQnuKjAQpxukKmqAz5fFJLtFzmQTjB9k6gZs",
  "key26": "2V66oW5UakmrzwEE1AaZ34UKPfvVqHhmVWRewiWGxbufhPHAVmMyt4pfUZ4bTE5KBW8ECf4aPNacb6g1JwzkqfAY",
  "key27": "3PvKXUqN9ReL7qfWq96QqTzDAiJ2EUvJ8Kbda2Hy5tD2ZW4D5VK7uJ69eYYth4V4JP2NjC8vFyK4LG2rtk28rNXY",
  "key28": "2RygQ78WbJ4mn5uBr6tovEKsrNLqkWoa7ddqDLNaGqvH2o83QbWGAsQQ7KqueUFHxakbi6oYDUsv86LUJLQHk7EL",
  "key29": "5fqZ1xCmEaFf2v2zJisFeBEZG9tPZykPoYJVtijeKNmTB4JwsYeDJ3P9RbEUKJ8pF6otjY3LQdNCJjnVe6J1zDAx",
  "key30": "4BqSUaTWwqwuy2Ny9NjQiVsPDsUeTQKfbR4VZPwAqZWthqjXWSxkoyeMppuzHkbEpXgz14ZbEv464QoJiuF6S2Dv"
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
