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
    "2QMfNWEPJ5wNYYGkQd7KNyJMybgh57D4TftBdMGvNKeMKPULSqW5nkzwhsbnKK7wqDMJR6M1QcvnvjLBVgW6oNfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8UXYUe9fD4vHSrJ4J4sHAZS2z2gXtmYV6VuhT1DWEMUgqfyPWrrZzSgx5XMa38zmzVYUon1kFLrnVcuPrBk5qr",
  "key1": "66P6DYDNPF1wJmrnmJP515a9CNipp9D9K6rWcczcTy6gcicT9nQDCigirf8Mg5oNJKB1PZeRqqu3cGiDRi2QWWZD",
  "key2": "3cxfFuvNV74ZrZAVxRvbgiikFkrvVToDWPqXZfhY9ksBU2hio12ZM7aNkF5QFJifV4FMZK33BYCANjaCRUt9xP6T",
  "key3": "2VXdcnBGt7iR86dmWs8bbQz3wx2ihwJcfFvnDEm1nCH7UMxyKKk9e726xYqhqaV8VwCh1vES7mEHbbpuJwKqp6T3",
  "key4": "5iLYJLYBmikspvaPAozgPrtKfG2JvZvw5nufCLmjhAQCgoJktyZwiy9vf7xrjiEQyoAA2kHuXNj9z731Uw9kqpzh",
  "key5": "4Q7vntVLgD6A9XGeYirxhJncsQ4eAwP8WfNNxVg65znQYvmEGdJkhz2uonCSRGfvajbRjwDDQX5hPvupt7do1E6N",
  "key6": "38qYT9xbqoUQ6ak9851ij4FTn3cBkhj8wV2SETpryKSF3iBCSXMz8D6KW5tpcBLZZyCfjvrGe8KDo9LD4jzeE38E",
  "key7": "3rLxC5wWi3U5eNCWxzbEDuY6Fpkd4pM2aDNXyHppLsPh5TPWo2PqE8HaEmVswudyca6CSYMvsaWJjCaL8EnL6wE2",
  "key8": "2PokivUp3UEiFxEGtYr1zXUfG4Jbz8iieZvuJZ3SHYgSqiue54sxLN1AeBMUQdRQUArDiVe8pRn1kkjSyQF8bAXT",
  "key9": "5F8yRnW842v1FJC7xH49rYZhVQM4dcbr1V2rz7XA54smcZCoPnn74V7PPJSpXrvHftPw2ukJHyXPHaZJDNW3Ww1B",
  "key10": "5h3D1SsHCLGU6pMxiG1jCG2YTfF3rj1beq9fZhrDfLeuwhqGJLfbSjU95rNxasFFujhH8aHBbhSFshhnfAL1GYP8",
  "key11": "2Dk3uJ9zFUfBEdywy1vcBLgedPmAnxbSufj3JQjdEHWAnejn5n4N67wWbBcSnfnYJLXbRLFJKR4AfQ8MbfN7b233",
  "key12": "5FSET524eifmwaEkuyypTpeJrC5SWSnktcfYBxVY2QnJ88wiXUERF69z1kdDU9p24rB7H6b7ooHo4bGMf4AWoWQb",
  "key13": "4ChrFSaUMGzU1PjWK87HB4wqN8XP3pvz855qgqQopBLJ9LUyBXJDy4QnzndytPPUpcXKn9yKLjStEULMRs2g7ze2",
  "key14": "5wsexNgmVVRFLE4pzKzNskk3uopoQmoXeiwz3J6qV7CnkFWUVFaa88crTJyCWa4oc8Nuegqv8q9qjH2mtFXi88ME",
  "key15": "2Sg5yNv4NqH6VjVrnGUPq69GK94S1D6VHHtbC6BgLs6gD33pGDspgTUZufdts5QR8iiqaP8EwXzXvP7HY7JQDhPQ",
  "key16": "49tMxamBRdHxSiWMCEW7tLF3AZWLhHS4rmXLssMvcEUkjXvHYgAvTpTynJMufcv5n68TKcMjZvJAU8DXGyBF2TeK",
  "key17": "2R7t2JZzc4TptCtdgipkrwCNhP68ZDy8tHQPcXF8mtbAqfKttpaFu2aNGvdJuhkNqEdEbiTwvdtyJfCGHBE9gkuh",
  "key18": "67dVNGyTFsPAZd8MiU5tRsyuYw4BJaY3k7NoR5CFVT8XjdPT4bW4HBJkNXS1r37muVystimZamWmJ6Cjh88pTBUK",
  "key19": "2cfsz2QgFNc6RbkQnbNb6BJ22e2ckd7z3XD6uwXdM2dXDTCGG5dhuFZLU1howJZFG7qfxWtD9hJHKNVo5CZBGG6z",
  "key20": "5kofp4SxzFA8UCsa75V1f2sthQ8MWycajySDmcGDMf6A5vE9PKR1tMWNXjNLQBznta4bVDsuHhixCotYrg3QZpmM",
  "key21": "45he2rUmuWvktHwXw8Ai9v6XtS3qKyv9uMRgrHt8kRjdBazNdLBRZdJ7hfF3yisA2oBRZuhtowyZoNoKUaAiW2gs",
  "key22": "2HYrHFrA4NMUcVFGNAToy6qdtZpdXumc1Cvj8TPMGf7uvbqJ5yDBdnxSM2BZoZhmZo73g3eacREvw5td4KLRYwx8",
  "key23": "46bY2dH4xCtN8zQRMAje7c8xirwze666Bp9Cg33cNCwBe7pob5ZL3WXwAJuNn2bZnhwjY5H1wa81H7WV136DtLg9",
  "key24": "3goZ2aB6ePgrBR7aRdGEbtd7h49vHHBezaDpg4uGvn6Zq5N2czYWKcXwPqBv1t7DHXCq8kxcYJgH2NYyuo78H7iC",
  "key25": "5nhZJYSi6JnAwGDsAXtFBqVruvf396YEyNWFxBs2jWBayNrQ3PS5YeSXxme5fkgbcv38saRwd33ysukkcucNZLMV",
  "key26": "rMEVMgXzfH4iX5wWFLviZDxbih4gBwYWswRAvohLSGcaDSo3UUJW4dQgkFMQkGp7BEz9eYuRpwFmPzEmzh7Y7aW",
  "key27": "29gSqsdjNMtpAbYnLGmy5WjXtcwqfWi2tPFwFN8G6W4fQS8coDkwrfyJUh4xzD67uQKFHoJCnZSghLeyKYqSZQUq",
  "key28": "Viz5Juqo5mckrx9HrD3rfNqR7doDxuzvBGdqM58mmGoR1ruhzJ2rY8FbnX1w5hW2DZe1XHurm6GZi1vGBj96Pnr",
  "key29": "3QaNM8iQ2xdMRF23QY45cKPdxAYYpcaVVy63dJRoh8a2J3pvMogaw2wCK6QLkk754pixQnaHxowMwyWnyGvUaUkv"
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
