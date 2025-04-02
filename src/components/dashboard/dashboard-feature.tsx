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
    "449oRFrumbMNpShRgjm3NNWTt414WbVr568ULoc4hJMYkrKuCBPbAPeGtErKvZxGKV2YozAaPcnWBDemuZs3XQjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEdwPkxB5s7a87R6UCsGHXeg96wm9GroSoxKZqMkX9xdddXXhXMRHpaXhqUDU9GyMpm7BYtQDmZ2y45xMvsddk4",
  "key1": "fhSQe6YveCXH3TH9kz3oMCfE38p3Wcqo7E6upRagrGiM8LFwzDa4WX988ez3oMAizcV9mboA8JFQiwiZVpoq15v",
  "key2": "2mu3oztXweAM6n8f2agNkgRQVWJkknDKeJkR7G4dY94gYLyrbPNXrc5FAMVKQWaChXagzmcvK4E6GiFYdBLsXzs9",
  "key3": "2owjTZNBN2c4W7NdiVWn8EwWPakxRbmWQurTjjMKkFUNxRRUAAP9cL7wAUDWaNMtC9MgeGBrNx2dooAwS1Ttfaa9",
  "key4": "aaFJfVBUP5cMJR2RvkuNiP6hGKGyVExdWEd7Skgu6vvMFcP18sXkNWJ61XW3yvSYGtm4aiv2RRLE5UiczY5wtrb",
  "key5": "52mLKvyefR1y8JpRmMMEbtHP9VvfYxUFHjJs3niqZKtKx6PsS39jfLUkgZBn6i68EooCmQNiV4SMfxTJphf9WEc9",
  "key6": "M7sK9Dbq8g9uWNVtyLNWts13Hw6pvF5QJqwVtarZLPdrPwcSJN6FUDdAojJC6WnSyDYLN3yZYdFpEw5ZtGUB2ZM",
  "key7": "2fCv8taA9jqAwWYbQyRT8iyPSyH4zhgAoAG1gw25TDTbXsMAqhE8xJbNqwZM1tpjAgducPzvRNGUpfZBjQtDTHfD",
  "key8": "37YpCPv78y4L4mN2qRWXo2U6RT5an79mhn7t9NAxn9grooGAQFUYUapQB3KEirp81QJtbwERyGMJzCUCHS6d7jmJ",
  "key9": "MZ7kWxmiYVXH8UX9LieMzaDNPJLjrTek1rQb2bfkcB1ifHfdUVcLsvHbMN5MdusZ5iJPRQEYx1c8FJ4sHp6qL38",
  "key10": "3wTz5oYv8hsC7oLme5n7giodq2QFP7grNq3Gvvkm4rJx2YHkKAZ2yYvSnxzUTspC72pbsN7qJsZsTNhss3FGxrkH",
  "key11": "2KTLra4Ph3n2kKAAHyuxRajhBrAwWAZxRCc4Y3KKeCYvkWtJDLcvmVBNQcYz5sbUoVjrJeWPK9JST7KWMWmfJxnx",
  "key12": "62HRmXq6qgnhVwcXTUFLiDD9kZjMZPg2KjeVGY58qWeVTDZ2H69gX8EKNc9QwT41vcfv4aZrRPbc9k14vFUKoG4",
  "key13": "4vxz9ufBnk4MnLy71RQ8QrrEj7wdvWEsFBUU1nUNPQUGXTNC9edz97reXknGkPUy35toyZMqNHL6KLp77hycMjTp",
  "key14": "sTrrNFQ4AZ8iFton4vRko1khpxUDMGcfDGXagcUxksrbF7ZGFvLuBc4nScDrVAs3aSFa9AwMjMRCvcyNuGczWWX",
  "key15": "DH8nm7rKqxkj57dnDUkDnL7wa66PXXypZiaGdvu3pZKh8aBh3XdRpbwKzMJ8RQxfpjHMq4LHpaN8mvrxwsAezkr",
  "key16": "2LbpkaRQA32zbBeyJc9ZsYoHCVHW2745PQJJGMPMEtxTsucFY7on2uVak3VSsmKTvjE3CxikE2ZWRvhNwgnCwURK",
  "key17": "5a5KDjkk4gyk48iWUEW7hMdvoaBkgvjGX1B8FXZCu7PpAXBDPwRc4ck9TiGETpfpPo1LMoFJiGUQFW4EsKF8o8ad",
  "key18": "2X4JifppAJzEBFc6go7FfbKy33QKfWEeQ9d5LM69MzVkkw9NZPHLQMXSvrCGDKHKQtpzYSeTsd7Kzxpq1c4FSgMk",
  "key19": "2QxDT9ebvEjsMixmh6idC7nDDdD18uWyAWhQiQw5TDd2FgA8pXtu4XgADmNFSUVVgbJ6yoF3E7Drt3QCZkgnTUy6",
  "key20": "37rv94aStxUw6YzoZ5n8Um9J5XkEhjQasEvgnpaQfXrJfWKeVLyoHhYxrXxti77Cgd1nyFgtuD9hgQwSAut8xiyt",
  "key21": "3ES4SjrycqMwfBJCeTqF46KbjdfwPxJWPJjfnUe6WRzHwGUCYi2QN8uKpjBrY9bXMbSfMDLqTTqQo9p1hAoE4kyf",
  "key22": "4hrtHD1A8qGfgpZMx48FyTowZNcXp6SoYVLHXzgvTUN64GW7NoGE9wkgzZgen9jd8eQFuSNqNujnqPhMXjPvCtDT",
  "key23": "LFD2sPsk1R3uvgQFfDKbJx6i27HcBRnknAGB5fmnSo3EeRwib98Ye4SWUSuWCKWdN8GcyKwbWKMLgmJnhRgwajB",
  "key24": "oyEnSHRRmEVk3c5kZxMX9VLPVCP7HAhgKNucazfh59CLnPD2KZBM2fArGVgC4csGcjaSwMRuFLSkiJV4sErZJDT",
  "key25": "617HvA1FNLFjhHiRhyN7UhRttz5TxDtHYzD1da9zdzKC1HvwjktvnhW1EyecmBJL8D5UsN2H1mZyVGhnF4Rk8UBS",
  "key26": "376n8eKN2oujqiLhgz6GdRr8EHcUiAEkdXc7E9iw3Ga7ZXUp7a6FJGBVkqcw3vazP9TK7f9Q2bmATFuY453SPLCW",
  "key27": "4QnoUJzR1t54EcVVX7Cg7zfEqHK9eAnREyEf1o9wQA8bwx2dkVYDb3GLA9fWEhv3urrbEUCtFePHEdpa6gTVQS5b",
  "key28": "4ejHskRL3pbQvC1yVAA1ZoPwgaYWWosfveSnhbsyWeVyrjzK8HL7D54P5fwU9qyXSDAfm1SXquC7gUmZYL1NYC8d",
  "key29": "5RutST9DJ9G73QeiAzgJkR9MsA5ETjy5DicW94k97vxQsNHHzAeTox2GtN8pN7v4UGR6VijPTbRjbhyHiqhJDKwX",
  "key30": "4GyxuphjjnmmUPkeo6EDDLm7fDJhG7Ecd6UE5QhUy4Y5UyKBVGP9RPscpigmP75i672DatFjpR3Bd5ZtpRwdm8tC",
  "key31": "5hkyNjxRrvF8Rd8RWmZwdHQaj7DFnAJkxNc5duqcXp5siu9XZtyaKesnYj7TZYVTkgBZz3T7e4wJyJ3E9QExPZKR",
  "key32": "3BxNfqunNr7mjyZRQ1FkMw4pygSQKu1jRZFbWC9UK5XWAQ2neGsoqhgjFxA3rAJo9EwsSaG9AcgZRa6AwwPE9KFH",
  "key33": "2TedUJHn14DYqeS35tpmiu5Xc4e4n16jLh3rwwozEB5ZqEUDWqvVnUHcC3rwSWbDgKmC9KTgkXrmd9ecQMV6UkGQ",
  "key34": "qFT1VDX3E8UCs1gBF9amey4K4pMq6cLFPB6szJyQkd6ZSt65dQSSqYLWEsf4QuBzPDvCTQoV7gHX1QXqkWdNCfq",
  "key35": "5KZ2zV5gNTfFcUUKhx8ZcXMs6mGnBPbWokt7Q8CtC68sQwdXsZi5npCFHqTwvPjyz2NLZ7TUWRBHYPo8uRLG1dQT",
  "key36": "55z7Mn2TiBz9co98TQrAojx3kQmwB4PFXoksQtByhXFnB2ixKiBKd6QHjB6UVc2uKXyFjesb1gBbK2SHoiebY9F",
  "key37": "3rRtb8PpHLcdyGTBJX27VVFzCRH6YwMova9VCUGyRzdvB5oY3R7qvPGVhu41kzHpfNq7wNKdojHkdRfUiEWVdvPm",
  "key38": "h7GPdT92oEc8hztAF5ZWszHoi8HjXk3iNA1bxyAW6mak3wKzJFW4z7Sr4SDVtmkwHwsYrn1ybNZwJ4UyHHsgZef",
  "key39": "3utSMVF9Tms5yQyq3oR7nBScTKenaS3PFkAnCaN2WYvSAeZAwZ5DxCkEa4HXwfxpUH6bU4pDmo79vFMWtDMXwL9t",
  "key40": "3T2F2MjgWPhfNLitpuqLZbUyb5VWDDQV1Dai347hAfUcZi3LFUmAL7QYpgqfjMTcRH5RNUZDPMw3RPaJCEfpKAyc",
  "key41": "4hFGg5qLGugY8bm1aQfnEePKNpqbDRroVtcDzEWuMmpbmiGycga3iTHUe1dQNnvGbbtULWMATnnEprDxGHsP586V",
  "key42": "2gYEC4kNzyUzdoMibTbvtkUzpbVhrW8o3SP5BCs5PeREepQ1r2DqN6MXG2nSjbWqBxxfYNZJke1cUS77whz4H7mH",
  "key43": "A51kfm7X9MaXSAjUQfxnStEC4corpKHHF7bRHaokhn1TWDYvPhccu1RvNSc95AmaQD1kbXW7vcVfeVawQfXKEqq",
  "key44": "4wLKUSHuEGhWzWhrmr46AZxSGyPo1xXNqrnP4xBR7nceALK3GijKwAqu1zeBVBCPEUeXQvX1L4hdxWFQrezcVtDV"
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
