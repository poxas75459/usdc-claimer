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
    "3UqNeBcsPyDHBvXvTBAsZisCgujxVJnJAKsj6aD1aDW4CmifhkYMzLNtfLn37XLqm12FuxZCupGZnSfJwniHC6p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPggJ6u7FbdKJXCL6vaL4KWreEpe7yobrakfXuYSFJNRQhAuuzr6Luk4usis6gGZvewoMdkjmemy16Dj1BjeZBV",
  "key1": "5FV6vXMscL7qrEM8TGLYN53sFxKr9GJpCCRJvP6XemmRFC58BkWikgXXrzb7wUj8kxjHHL1g3LpeTuVaqE8SRGi",
  "key2": "5Hy8pcnEJoiRwndJNrCAU9UJV2FPYS6U2sunZmJL6XBrmSNQuVR2fLCDgADnAZQUr5F91VtUAemaMxabFuXGhGbG",
  "key3": "2c69dtHkjmtxDrFoCVXMPEATTCGYheWZgFKA8kKGyNH5wvPnTGEjDcDfu8mYVeg6THeJXQKHwmqP4F5cpVNH1g8J",
  "key4": "2arddHDBm6AweQZYLqWiXiB3KEkyCc1Nbzm9tnWCjDrqzjc5cUJdJofmqi7WEyeEWGZ9mAsPwg14VmiYx3ksgq7g",
  "key5": "4kEYdd4dLunQUg8Dobua5p5uCjtxMEzK3t4gN2KfBcvQLxpqrhYeUssfE4CgzkkS9beubA56mKutxtwi63P2ECvA",
  "key6": "22i8a7VrybaXuet8x6VbDaHiKxCA1fvfPUG3UtVmSRErkTkyeuQi1edqzi1wkz7L1yUo6A649e97gF659YX3zC5g",
  "key7": "boTgS3pVaW3pAQt5wcHvF5rq2xMY7qFej2CkZbyCN3G4LsNut26gP2EMjsTgQ2dn7S6sNb4J5BRGWB1XF5jXYzi",
  "key8": "3YKYS7NKBVhsLjnb3Dg4qPQaar6urHsK9nWw6vygkwVgYzw1TfhiABdbu2yZknLFqvyd5isnUTbBFzJhTHgDNXoh",
  "key9": "4zowPZkmnDWDtsT2t8C6DNndmA4ZCqAfPHmXCTGfVA9Kk51yNvWqpk5YVkAKNBvPjqMoy4Tjma8xebsZpi9NLCQD",
  "key10": "3NzPabCufCu7h1AouyurPp1rnS9sYEz6kNWYTdv4M79iiWjRHZUhDnbrppumXmB6CFcjEALDUzSHzCvZvRFk2RcL",
  "key11": "2swdpUf4wAzc5btG5jsFqK35cjvp5fdpyrxmmsNdftcAqx1ReZM14P5BS2UdbhmEpUcQuc8hT4YnDPzXrVdkMMdN",
  "key12": "64ES4gtTyDFmtvodt12JWbHkYQE3r267jTJMcRTA4R2Panh7n1KAnbHLMz443dWm7eC6Jw3mbDwmTqsi8uEphvUU",
  "key13": "aZEpHQuLr9MumpMn58bx7NHiizMgvuLhKcxGcRsXmgoRLZ9Xw3278GfzQhMFtyLoJDziSE2N9kcmGR9NpJYuzhc",
  "key14": "3h9FeM8JGarPkEbAF5eKdzyfnH9hkAvsgu2yHA4ZALEgWUj3tuTv7pg7eLDxKtrfWL6RwoiVWQBNuFid9vrqCU4i",
  "key15": "3WTE6mV8rLjntUCCd339bWyU5xADNXBdsGpQWy2gndsMWsUeR7r7GfJaXLqaztdvrXpkc6WpapcEDTc1eeDzb8wB",
  "key16": "24RrdJAQqaiRwhkNtTdrrJockrhYrvgUzKsp6dUQFAGwFnj9XZafetCWQFGvdiYrngYjBCc8e1HuDa5P2F89sShY",
  "key17": "29KrXz5n6LoVcLEAqvgxxLMrY6d14JabanVLmuNoCsaSR7843sP81JZwhudq7U2XTYu9V5mimtX1Xk4b4pvPJhtQ",
  "key18": "64HzvCmc3nSSzmGoLXKdy5rbv9ozX1ydYeM9sFjozoyVa4tjVKfRBWtYSTVCzoCvCpEVbioXBbEbVEhsrKm7ueMR",
  "key19": "4WyRCtuoJS6uYwGR16Njd9fnx855jcpP35w3i7Dn5KvrvhAhcJ4uZNJSHkrQFqhMq513Ck8c3MBeHrdwh5LxpTKi",
  "key20": "2nKCGorpcysDUi14MnUMDn7xz9iQFiVdnNzfZx26G1aEKHVMCg6YEFifAE4u2nM47k3QBwzDBDLYabNXVqtRgsaF",
  "key21": "iWGDocDW9pETeFjDDZJqgMHQGusNkDowUbPcVT7PXsy6nBBuesxWqgTgCVF9MsvxwtvS5T3WvfrQKid8m8zhWHj",
  "key22": "4w3HxS5aVcY9tY8hFJByvvV6uSYaK2MH6DfuFuLy43Ko3rLQn5PvN7APAuQ2TKQZQcj1qBCXvuPxRmfrTpNqTzZU",
  "key23": "exYZoKMhqrr2rw6kaUB8AT5vrtEffvjmLYayRDh4nFw1FysuGoyKUdCMLbLym7Wihig4UR36FvoRfVD4szi69mh",
  "key24": "5tHanPsDzLiB9mZ8aYiz4JY3YYTVLj3m3zweQYVLSfHAE25tVzCRXjF94bWDAvqbSwFdj55MzJAv4fZBHCQE4squ",
  "key25": "rQdWygtfvsCWpGuX45NczsaAzhsmYscV3D2NF1g4ED366yeSHRNAFcgXKHGvoKTSYKYcHuGCnHnjsKLft2fYJt8",
  "key26": "51vbkcj12k3Wf148rFpxkDiyeej6dD3XWbcCkTe9YYMQbHjnwH834ujWnQc4nt2vLArRtceX58gc1rWCXQwBbEQc",
  "key27": "3WvtwXmvTpPZ61oTqgeyreVJjszqJY1KmiQS1wCD49m6beQAKX18KKaY4DiNuvkj94ytsdZY46fZhk2maD4DNYpc",
  "key28": "XFEqghwZmf5MPGFdauLdf8FTP2zsyrepwzcWg93zkxi3BqZcZZLtiK7vMa5pRAwwSLR2k3SjbgK2CdNduC8hMma",
  "key29": "5brMt33HoH27rg9aRm4gBxbwDLntBYS2Xr3jTHwyZVbECh1DWsQdDCaYYo4rkGovkyAkDuTGY1UwtgqfpxL6jZYB",
  "key30": "2tMswCZ7TXhfz6rK6YjMMQF12VT9eVDpGhthdVUgo2BKQfY5jH9kd4dXrs4EqjQvAx2VEfxLVdTw7WM67SEtNxqX",
  "key31": "zdmEe5XHTd5rhg2ENi9nSp4LiyJN9vdEfj2ioHV49WN9NFZLbuoUqrQNkMzC5KcUUN8yKLX3CHGuZjrqeb8dxBi",
  "key32": "38g7h3uWM7hcWGN1dfAJ7K7NfhyLQ27aJt5CUdWuDyw9Xzbk2AVB8UwtVajdeFKw4WmVSbX93bCruCufjQ1r49om",
  "key33": "4QbZ4fBvDxmMfEsGwL2HXD9B8vfZtMHRuGGyGSEyTXrg2NjGV2VBAVJBAf4372vd2LPRNUTCiMR4UyWJ16kE39iu",
  "key34": "28aADzga7VLT9ngogPoPJuR7ZyTJSrvFhmqxvbCF5hxSnFgdurnfAvPQQWA9mFDy8UDGs1AYvwHQxCWDnwzvF6u6",
  "key35": "4pXWm2j7xw41GJUUchYNkhuKhNASPpHQ9LbYWUvQKBGgwGJzyXE44Vrcpd4UGq5bxeKYsLo38nV36RZ6VpPjzN51",
  "key36": "4dhagL2nHfp9CxkyuZdB5THxkrtk5SMHdR8AGN5jbgva136Eaz7hyAVFddrrj5kT41dK4Xmt5xkSpAxB9Ky79bgB",
  "key37": "44s6g9XgPwp8qxTEJffCronK8NzcAQXG3cdTszXw7Q5n1xmJZYcce65ejv73sLMuc2gsemTYCNEZ4Jndf5yh59Wt",
  "key38": "4smCSn3Y36XPxgo2PCKnNs8Fz5s8vHrKpC8XbErkNJbkKX3LxZMN7zpzsn5GPdeTcuVJnkxdBVTAGtAWpriSox2p",
  "key39": "5FUgMeKMcp1G9JJiEjzQ9XzpGAWrVJvcXy3jG53WXuxMosNXuaBRLtJTNr7moBRjzXiWkBMYTTUXKnr6o9Pnr5ir",
  "key40": "sB5EXPsFtuFwLTVqUiNYjhE2jnjM1z4gEWRe3hp61rnjEZwzCw4mTZrhxoL3ZzaAXmHcwpJB79DE2u8q365Si1v",
  "key41": "3wX4hMcKiZBAbcgtN2h1mBu8vx3znDvPdZtthqXwPPMQZM5Qmvgx7MLRtyBRjyaGZn1UkAKvMG8KgsaGbgGdLgF9",
  "key42": "3nmVXwfh6h8ELJCxU6qPH8T6RThNycKTQbFG1h6Fh9XkhHRqQ8JoWzQ46Kou5ttyfzPWQShmwvCjwEWCxUocFJUW",
  "key43": "24dHkDsVPXkrw4GqCx2g7UGoguZMMEFxEFNPJrSy8SM7P8TZLrEswDyssdZp9cXbSqFRDm5ibry1NNXGr6387rnv",
  "key44": "2hnfPowyE5SkBZZV6ahaR9vdxmsVM957rTGfiwXo85FanDjuHjVrpQbonvMZjruEwD2cxozYk7XREGnUBgxAgt5W",
  "key45": "2oXnpr6GGeY5uZU6UtcVBfVBQAmooMC2gQ43ky2pphkJZFJyzoQz8xUBTwC8uWz9VcTsJ297TkgwgQpCs1vA7dWq",
  "key46": "5jDLuHUdRXM21Cp7qTjtvVXfGi11CZtD5bqpqGMEoc48qEsVkxRbViGf1dUuiVoxoXdhTUPxwhumXqjbwG7AYXyv",
  "key47": "4coL9A1wjzejTn1WKL6Qf2NpXTLoG7uzZyUMNeZycy1YVQXwUfQnc98sWq8bKTodiy63tgUpNMLTCuuNuLzsfPUp",
  "key48": "59uYiH72wSvKU4U9n6gExexCxCVtQwQkgJN6ZsEcSCga8rMabjoyGLQibqbakvMUvsX2oS2qLqH7z7Z1CMCuVdJn"
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
