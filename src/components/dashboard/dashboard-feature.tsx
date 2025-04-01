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
    "3yTewwWR3SEvP4hMSets78sz1d2krm4mQvNsqH1Ynrf1WbGtLhCot8jMQ6yF4qDZxqoWQPvGE4VTAkCosLp8XbBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GhTkHECjsmTLjPSL5DPzWcku5rFGzNznLR6RhLmtsfRfrfhS4LAEFKZcHaxhNngeZMF7sEUocTJ5NJfBXsi1FH8",
  "key1": "sBCHGABsw7eR96PAdc4dswmuzPg3UXu4fH86i5ALL336CrcnCdphgDhvGtNS2nmruWYH6KNUTSRHqa92tszRbcD",
  "key2": "3DFGZTXwJBQ1yrdzi426D2Z3YPxmrnyeb4879CfMv8ZUqXnHrzYfteLB9ZC2eu6j6pvp9BoBhL6VKCaXzBGPgVYp",
  "key3": "2VRcrDQvRo7C5e3WuYCF9kt1xo8YyChaxRzRzdpYnKDUCipzkYt13tgdTSftVKg9JjVpxZvSzXE7CKeZHQ6prmD",
  "key4": "LXb9Ea5uKS6DcQreB9W77G9LGbDBNB5Q5Q7TyhrNEHGAEwYFDJ3NbtpvgJTPGVWVXqHxXwcJLkZJSkg4X9BfhHe",
  "key5": "3PRZs6EFrFkgdS7adYCF7VHSbP5mft9TcwQpsLHUPysQ4A163xRAXPVazeiritN9EbAcQPuACRsuVNjtE96KXQBi",
  "key6": "4pAQ6gruJz8MAbzxKWrp96yqt3ZyPejoMbMzVPUgLLDgWDiYTc3EKTiJDCBG4eHbgvomhgtrhEXeJ2pcsDoZiau9",
  "key7": "25G2yZJGdPx3nKiPerfMxQfcrEwG9YUHUxMt6kodqBcBs8trYmFzAGZi3LZVC3rECYudRj7A57h9G5rpwzvntAub",
  "key8": "46bQcNNkxnKQpoTFBCRu5mP14UP23EQQqWopHR274aB4eujCAitUYK3W73fMM4pa9VjU13aSxAQ2JLmjgJupYo59",
  "key9": "61maiuY1jVc6jE4nua4LTu6YPLq4ZkxdQRP57fYsfLZzZTidMwxKYdtxGnLp1o6mqWynD2J7yHPdfFgbHbcTHFb",
  "key10": "39ZicwchNkVEmBYf45BuHWpZENYw8dM8K3jVG9ivFHK4EdVcTWzosmY9h8ekbSvmRxY8jHyrSJkCd3wSB3VqA4gU",
  "key11": "41b8CApDh9JEMASYiHz79AfjKdFyTQRAhuQ6BjKjSUB4AN3vDaPTeDvzkBgQcQuH2GP4NHFtJD6fRQGYt4mXH4Hx",
  "key12": "5CyysLhSaq2Cuu49BC5PZd3Fd4oYscGrUvWaFbbiVHG5B8UBrSEEEoPdCVVxcwp6jBkkb1geJhCGtLSm9HC7Q7yc",
  "key13": "3ELtSCAwcvgeuXpFzzBqa9Ger7JPYCJu16vhBmbn6a5vwQfcnELR7YDYfK5tnaCw8Qhgdj4CMTQGKefsvoqCshyF",
  "key14": "5kkEGGJq1HPoRvmDPhPpWWgueNgJXKYZUapqjucEzjmQZxWdeVypiusAgncK2Ey4Nj56eFBfXXgvBLWQ4gKhnU1S",
  "key15": "4pQHxhWtncLzeLGoQt8DU3tXspAgvmcPW6X4yKpCsDYp6x6eRZfneUbCVVnPAvKouKqPdQtx5QUH55o9LgERgAUX",
  "key16": "5VymzdNYb2jBTP6jdh8HN2naaZYaL1xXNi8nVtSB4sezSh1hS58hmQaKYsMrqLzTgAY9L9w9GzTwy9TZ3ScXpAnW",
  "key17": "2DN7BdRCmXkB7TLXWfqf9LYwmHCwwyXTQqbgbwUMR534nqYPQe3rcqxSA7Y7Ct1nFBn1cu8hEf8tVa3nTt7pzCi7",
  "key18": "2HsGxApTLknrbEk2UTK9HyLW3QRP6mK12A7mwV3J2H5ZtMftvdsi59UqABFD6ZKRf43ZC8AZzA6qQcz5jUNh1b71",
  "key19": "5aRajTnSyAvannsuHSXfaHE4gkN1X6vKuBYWvkUAwY3sf4yCz4FsubUWbBdmH9U49S63wb4McmBLgjhZi8eU4cTg",
  "key20": "82kY9Z6ap5qhJd1HQ4ex3LFdeNm9N6qdARCJxoHb8coQxheKpdEot1RWDYCgdmFr1FKDGKWVc4stQDCCeaGyqmx",
  "key21": "423oA9iB1sAz1QzYcEEv4gGQy329WsbhCmAoexSri7Ds1nrACjx8A4hEbNPJs6o5apVX1rw9B83vHCk8RH3DUD3X",
  "key22": "4cGeE2vwmj38i5it2XRJneRh6xdeSBzznBGdMkpfpFKYBUUpY1Pozt9jD1cYZyGi6oqy5SGvytvCCNEAkfhuv13s",
  "key23": "2hn3a6bSkkbjgt3pjhqaYdjvybS7KXaeacGgMWj9ecKT4pd3937dnbxrbMoU8E2VLfP45D464Me3LUcx7nL6HXDS",
  "key24": "2HEUvHgaZCHReQ7DYCFFCqNJ2Lj5xukqVecPBYLUNNBwB7CtNnofWm4kLRnRZaRFeLtQK6q7D9rTrXsYpGWAkb84",
  "key25": "4cjRkX8h35V5sh8GdbJqZT1PdUWz6wDMt7aemz7c3qqVo1oAAVGgbqwexhBT1e7EStH1Dihx414CEGstpJZkaCPu",
  "key26": "39V47LNKHATwWhyBfc5HRvwGXuTM5yAteZnjSNQ2FwfXnc595Cn7c7X3awJjiMLtRiWPv69YeuFumiLJvUQN5jW6",
  "key27": "gSV7b8ybzmxhJ81U36tTzCkfDiKzZF8pNgKLrhqBXZZmBoa1r9NfkUAqB274GRWNipmMvKSXMKDVCZ2k6afJ6bV",
  "key28": "5cqgAoao9au9hFQVWtRq1GdYEWTdMKcDtaVXHRKEaezW5oCqKQMbde9BzFgHn5Lff2oFJ5xEBiepecQLEVKcTzvv",
  "key29": "55CFQW9iEUEbUDrSkomr4PEAs2PyVyPWKy9bZJyYgjBbRXgerGbk71UpTfcXbgEVLRzeJBANme7uh8kBMauV19ng",
  "key30": "2n84bzzQLf5UBRQCGKWmwuvshjp4pvhzZFmkuY2RZ8h36sRyMZMiheaz9gES17Dev6NRyC3ePxXMEoQQxSQ4fjD2",
  "key31": "54JfwynG3FhYAyYFMv4hpktRzNSgrWf5gtBmdPCdnuNEVBQpZF4qe56PSiY1HyfZ9eDFXL6UWS35JZefpKRei9D8",
  "key32": "3qTZYD267LTraZTQQsVfQQvoJXoKje7o3Y8sDhMoPi1auwbNf8eb6ukGZeRfx1SNB6dBz5y5Tmq7u2ZUYcLcxTt8",
  "key33": "SXQNasDHZFVwMqFo1ipUeQNMWXJTgJhfL8dDQiWPVxjQyaVyrwzokwtaRskLVTzPVmBiQd28rUmvNswm1iRnePJ",
  "key34": "3amp7uwc6LNhwW3jU25JVDrKfoj5GrmMx8exviRnZF4XFfy5qveJ6y2aT9x1rgBGtqZUogFJQJYjwZhvYeztDrjb",
  "key35": "9wbfXf9tN7zVrGtLC6pXXA7foxkx1zYXw84syJXKy6bQPQ3XmSfdGpEFoGvksaY2zjRJZDGHztQria3RbVrxChU",
  "key36": "4sY2pyJoomKYPRMm9DGDxoH52mrVq59xpbdmt6MDG5no4dzjcmiSwb4X3Lht4BvC3YmAsU8v7UEGBEMbyTF3NU5M",
  "key37": "2LKPPRrwCy6dYLmCqrSVx2yP6T71m6RTVgbFdrC4b5mW4AbogTPELebMdrB6gkHPqbY5XgtRX8rs52sq5WeurK1C",
  "key38": "4TF27pDEFbkkakxYCZFAbc6TsiD9WUS3by4NrXm5iL5nCMZLAxHhc1ffrmsFBd8BsaqdSwnSeNH4AC1v9shssLq5",
  "key39": "2UoPLWGowZm1Vt3ov7fuwmwRmfAVFPsGrur3HkyTf56wfHkPUGeZovkEuBmHYYdEVE7gGKduYzkKroyqtty7LPMX",
  "key40": "5gKHf99Ew6hM6fQqtiWm8j4U144whKHzFohDYz6W67UdkoQxvwYH4RW7UmYqbcLfYrgxpN6y7WuPaSLsoHxZvVGc",
  "key41": "27TMxFjdivbZV8STr8ymeH9KPbsTPTweYSKWRH3M1kGQ9wBV9pSnqH9ahzhTN2nhafoqpcfr74JMNDq7nY9gLf65",
  "key42": "4A3bdoTktLnT9VTaSKNR8VZGGQB5Q6oLfifakDyo5oaJW6fthC5UNv2w25WCPdwUQGG9XdYTJnBeeSRHxB6BAwTT"
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
