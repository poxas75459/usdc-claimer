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
    "5LEeNuKDf3LGeCbLbo6VWZvVrbSMf7mpMnr8KA792qTKzYxDN31dHomuNyXQxUHZkSYPBuh2E4qwizj7Y19zsD9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sNqw8xdvaY623L3krYJws6ZaEpqaAMdsRuAfWvcxvm4RGYMxDXnbzACiDKkHH5GWV5qxuVyh27nx6NaELh4T2de",
  "key1": "5nZwxwLzKEiecBuKMqUS1xjWJoRgxX4qUYJudTRo3YK7tuMz2EDMNYNaq1sAoua7m7PrvrkSbPWsk8C77oLbCpMj",
  "key2": "tYJRnmt1jCAG5Gn7dgJjJYh7JNF24dM8Fhfrs6wj3iMCLBWDpFHb6XjrGFeqdBgTAUZ8eZTZaKEmZGXioJ7T86U",
  "key3": "4WajNQPXRGZvRrDe3wCWNhcZgqEBp6iusPTDKbPEEZH4yUH8xod4MfY2Qbm7qxDjAy2USJuukfnqC7GC5qMjNDy6",
  "key4": "4S6Uq2wcjYsANZ3qbGhkGGh6YCyDk9RcmStiovoVrUXi29hTFcs2zqe26SmxSUmX63vZcT5U8sdFN6ZUisNC5tic",
  "key5": "3R1LbsFXiXtPXFh49Et7TWjhbVw7cZntyubUv5WjJ8hVDYWALNpNgutyBcsuJi2N2XvJ5nE4bgLWn7BU79f1f4e9",
  "key6": "67n7UBekameZB2s1pTESHPfRiDEwR99Z7SLBU9dKJtdHXJo2Vu5D6e9XWxzoNE6g2TMomz6J942Zvh785Q5zo89U",
  "key7": "4VcZQyVd2gfMruywEvwasbGJ1jYUPyyTU2fBKcxRFjZu2QBDTRJvZgHg5LcNmH34E8V7DNoGj1F3AtZSxrAFtUDS",
  "key8": "4em2U6YG4HRaQZ7AxP6XTy6pXhjGmgSduv71wJVexzXuup8Mkw3LvyFLEnC9MebMEYpqWR3DXyHH4eFHNjKKR85u",
  "key9": "3xaGQvUV4sJNp2JQ47UrSa6rD8YHwZvfmdZf77sdJwpp9QaDG8LLqf5hDefk25wZ4sb8jWtXEXGssdmV6KJ5Nf6b",
  "key10": "5fdLu833ypcH8g3URopbq93boAmrqFLXtE85Fd6ZA2vryYr8GAbkrgJQ9ncb2KMzUe3wpsBN4uP3NtQhuFmqE8Du",
  "key11": "UyR9Ly97sngmtx67W7uJdaotsALiJfwu9FdHxBmWyrxLDWeJqQhbRQNH54iuvWemW31cMN3FX4cbdLnRkiXMpqd",
  "key12": "yS16RLwWWTWeBTRb4KW5JNmtbAo73CtJmot1pSd5h99mRfwcY2MYBtpEqVzTW2XMR3TT6PtLYVFrhzq2NkKqPYZ",
  "key13": "3s31uCh12NLdY2Lpd7gvnPfKmQLb1iddgkZr7XWb9cwNsmTxvz5VeUE1rerJ1sZGiMyFmmKJEaE5PwHxRgZXtDXb",
  "key14": "5sTnU9cTqWuZuKZKCkAbxXpDUxLfRJzJwh4pPtAyehaeRGTwBLqdVo2ywmk7VHtnqTPkFDhSvKJ2cL3L5aZggtvK",
  "key15": "39ZanxPNevv7yhRmGYGFRYqHQ6Su3cHCKctXiBH9hAn8NM4JZ6ifAkdgXA22iHy1R68Ek8n4UFTtdu87pxx5jNBJ",
  "key16": "26319dAquRg62kEYq8rxJ6hJg3yRAMvA5hEox1s5REdAkj7c34kpnvH8R5nPtgtb4scJ4UQnhshoFdw9nfcvgxDo",
  "key17": "61H42HBForJSDsLRu2ir4ZeFFQCPynFBxztPJBtSsdmkTS9LDBEL9Nv4pyMKVXdRdJ3ycXCNk4kkx8yfaab39oQJ",
  "key18": "Cofj5NN9qVTpJisS6sc7fwPzt6d1p4JfQHr4AaTve8B31KKzsF7H5bMWQo7ooFCV2S3b8qzWwVr8NdByhkhVHmr",
  "key19": "2n1xxZQpWGBBA2tfMzmgqTNBQpyGHmPEdNdkkkTjv6jrwDR3h1d9RWhNbg3T9cUKRGGJbFgmFTPTS2hY4Z6RZ6by",
  "key20": "41WH7Pv8NwU2D1JaRT9MXV5p9KKDQiAQ38Xa94tW4qXP2wWVSGewZjaVZ6xnY6Q1G5gWwaEDRcC2VGDNtir52DrY",
  "key21": "4VsMpdiWS6ERcLKNkBkgmF84D6fy65o1ondiC34XrC9RZPyo33m5Bijv1YB5ap4vz44xtJbkniTmfpe2Uy4qBMay",
  "key22": "3J4gg6YyazFQniZdYYHbZd2uu8rNZszVfH7dN8JhCu1ip6gGNUYEkdjWfW4dSyG3Vx2WDX2vQcJP69sKq9NLtKCs",
  "key23": "2nGZrRLbcQrNA78Hf8sE1jX4d8bP1ioKATpwXAGAXAJqU9ph2wHrM7PtF9GYtrETWx8uUJY3ir9bS6NyajsTbChq",
  "key24": "2cKq1GKDUGsM6WwmMAg1BjLXC7gexe76fHP4SWBTGXf5BqKZWKEavxnRbFShPRvEYSHSiVFz539a9hd13po9JA4b",
  "key25": "2RT1oJVNWh5SbgUmz9Gp85uXjpmXJv5P3MsaLeAqLcgY4j74D8PXMPpxFwNnmUpi8DRoWDnXjrFNCFSZBpQKfkAu",
  "key26": "5yrAN4ibB3CzGtQZJe7cSyjDKCHVM5NXaeBt8qKEUxCYeZjKWNdm2bQzqBougaKT2xT6J2z5RT6fg6ddSbz4gXH6",
  "key27": "4zca5ABGXMzV4SURMhPak4sma8HwpeH14FMB1KnhSbzATKhUALe7s7Z5XYWA5PJu8JxtJZXqi2RfV8wMewUrutAn"
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
