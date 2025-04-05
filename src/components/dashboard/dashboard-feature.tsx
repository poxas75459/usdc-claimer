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
    "Y1g39oj8gqmmbUs79HmyMNUxv8PiBZ4mufRfZTcQAWAP78D5cvkwhV4jP3tBUJZ7TH3mPhbiVMepTWJf37p779B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G1MDg9pq19B4Agn6W5uzGcRwthqBB5rNX3okKux1PL5kbebwxNtpfXgCHCngn8PSZM9RMuwLdTfaH2CMXmHPvJA",
  "key1": "2MnDTHQh8zQRgfPfvRohHravxgZ7gs6bWkdCpJDqEj2FRtiSwSvqQ9q7qNvan4DFjMm3ZgS8sTtnfiHKbfNHGhLj",
  "key2": "4Qjdq2g48q9gEX5CCeZbyWM95mVR57d7HVB9gyytgRnM5t9zEEzkvbwHQHfMjVcrZWsbJBwBMPu2aH6KwaPtV5yz",
  "key3": "GzbNi3KfDNSQEtbv19v6sjMXFXzF2JXVjtW4tT1pahbvRriBwnwRpDLtQ9CoxvRYearvqRy85XeaBE2yABURAWW",
  "key4": "4tzZMX2V9rjcNtw6pqQTsquUXNL9u3gjsN9YAPcDmAqPNXZfLcSRyiv4KNtjEsWbMH2WGEJwD6ADZEDykxfnhqdW",
  "key5": "56hUZ2Jm9gR9vqWkRvQ1bcKaNnHm8RgUaTUGmwDpUgdFBzsSTPTwGWN9mR2ws6kJqCZ6zgBAgcs9Pb53XsVnei1o",
  "key6": "35L6RCvy8eXHMvwWJ3ke1To7KhYpKQWHEKdWN2gHGdi4U4k6wZmvfK7GxYEZJGPYd7GR2Sb3rRqhS9XAvdpwLvJ4",
  "key7": "4tZsavGT486fVvQehFVoRGhEoGSH85miH8WyQ1Q89eWA5nAm6E9VUv5StYRmGLnTYDAWjwgdaN2e4ebh7GvFU8ko",
  "key8": "2yvUzhgN96H3uqsGka6hESsrBoL2c2LZCx9aHnqFzcRFWQrt6vBGMtWB7fHXgop5G4NUCfPcreeSr2f7aGdTYjLM",
  "key9": "2SNYCWD7kM6LnDesk2qTMj8QAtXRRqFAgEwmzCSs8WfWX4FPFGpW2rMfTLq47VfxMqCkGxEjuyDSg2ZsY1tnXmBV",
  "key10": "4TydZpS3bZkx2JsufVdoBWK64QVC7z5PrXfQARFbnkmhMJmD7AJyEHRkhpJ9aBVkMVnn9TohZac2ep2XwHJVBgXc",
  "key11": "4tJQrsok4hHmwiJy7CdMQ2wKoepm8jF1MA28mpycLHt5UAdsSgZ7N2jynSv37tm688YH4HuSqaTGGdXFLMXufJSh",
  "key12": "2GoeBdZgXrSNYdhPvh2WTrgfC4CRBZZXhzQSU3M1bDobiDyoj6MrrKtUbszpfu4AULFKtKv94WUXs5Ey7JVbiLUq",
  "key13": "4fH9yqioV6PwBy3SZ9YrJs2ewqcKY7mB9L8PkfGGacXu9vXPJnhsUQPoh9PiDHVGEMnN4wsibCaDnbTqnkhDKss1",
  "key14": "523cqvYmsJwQApLZ35w2RE57u5JkGmKxRrb2WN1crf71zQ7SgecKCaSSZvsjqVY6EhjYfTfBq3wFb7KdcM2tsky4",
  "key15": "4JvxcDMkpUXk2N2XRUDuJaRn4ni6xacxKZMjgPjy9uozdU3fuF5GmaCMVgZVVRZH7FP5svGRkE4VSGuvDQiHwHrz",
  "key16": "AHmMpuVQm6K9cJWQMDFnzoVUcEyQSZvP3g8sAGg3FHv7msXWFXxw29qtSTaHU9mcmBGPyMQuMvMNrSmHrWsbsbk",
  "key17": "F69c2VAei4TkhtMeYefFxCAQpaGnxUXefdJXGi8WnX49Q3xZJfdX8JTAx8mD41zoxAK2DeTrq7UaZJ3GV5JrKJ4",
  "key18": "2RwuZpC65RDPTcEtgj21m5ZLJYK7KfWn7MYuNULTjg1dwpXMmLZwtguioSkYKWjMpaGFW1GmeiatejNNt3C5WTtF",
  "key19": "4tsk3X3P9bRLkLJZ3qjVK3ELwtR3DnShdtQy1SuSXsr3PHs49D58rdofBGTnTPSTYMT8Tde8dcCqAaoM7Eqzgory",
  "key20": "3k9dZVd7r6yc2vLk3J6sGrEho8EL8J5zdeQo7P1rBLSBR3Av1BZntMhmHXzhWvmn3HNqxVN3NR1LKUYGfs9jE8gc",
  "key21": "3TjwkD3c4p8TsQ1nqEHiNpTMTmaPKputdKdp3CkLdYTmyzAmqHTM9F4RhKd1qWR4satDeKbq4NYtdH6vAbP6stX5",
  "key22": "4VjVh4TqAdKuy7BQULN9ZbcGtPZkBRutnrCtN5WUPEYdqUjQwgL17ZnhKUT8PEPt3uTi3VdUh4jj6W7MqUiUG7rN",
  "key23": "JDCyAyRVvnyNsM9oyx2Zi1FcRgBVJTKcbY5vbz144mzUTNqKmGneuaTEV3pYZZJnBU69R4pHcqh3Db2tZdZYjh6",
  "key24": "3tn25AfJ1DSHYWis399JPGZk6uqD2Gm2hfRgHaYu2vy6kBd3eECuWmgyC5n5zwV6QJV2c1E7HLLNiVhBJnawnTbN",
  "key25": "59EfbjadrtowMZ2XfhNFrBiPRzh1vcAoZxriJrhAPNHYiUHW6FG8ki5HTmZ6zMr5Bx2E19hiXvpfhmPDKz9PG6Ud",
  "key26": "2y13yRzy7MAUeEdvi5BucZYHPaXWKQhWpDLjo59JMcfTGmzqERXGQp3foMjvWam7YfqZcfUW2TDektuAzQZuKTR7",
  "key27": "43TcmQyNb5tdbg62tUsN5dFCqtpiFWDRGM2bW74qaWComtrdgXur8FLwujt2pswBRQTcv3T5oz9b8kFxU19uf7fN",
  "key28": "4F9gwYUFnbwXWYio8nVtkwEP3KfMD9hDp58nwd3VtXtLrEZQzib2ktQNDEvEZALff3GmvL5HWLZaKC1njVEqALb",
  "key29": "3RAwR5Hx1AmLWiakUTNMMJGF1LhVNV2LtJo12G3Tpjvy9mRyf6B39yR6QGR3y65hG4xHCgC3ryXgibzhcLtdj5N3",
  "key30": "4KbNkocTm7sEbB424bNwW1z5uH24xbQNhnzJtmXhEGoAY5T6jmNsYfdZLEmXn2yBa9weuZbeLyMM3abFFeg8Aq1D",
  "key31": "5uykhVGZvPccDbCuSfHMASEMPdGmjfLVzUSAXQ6EMTBUGeWpUQGBnzhL2MX74F68kWnk44YP1SApu1MGi5ym9SU8",
  "key32": "3tNGVksx48TeTbEbyWseakkkYZh8o6XXtZpqMfpLXujj5dn5kW9v31jrab8Q8ARB1X6YaEzDSwDhG8ZRdk4iq6us",
  "key33": "4YmnkYR4meXE6qtS8M3etA94BurjowBqHiKSUDuNf3n4L6YbFyjXnfNfYp2csBGixC3iUabTVFyARNt3MuJHAfCq",
  "key34": "4qxBHYBJKPcnFGiX3LdQatxkA8Fjhyop5z9RXt27jrcRSzMz7v7KcWDWwF5DVjd6eeehs9xeSXnSn2VfrDQHRSM3",
  "key35": "Dq6PL4YEEDQWd5LskDT4WGwvyb5bGZH6tmPfPzTBEx1MSSgia9tBTNjjxgJ2RJvBzQFoiMYspWSaNktXMBLrvv2",
  "key36": "Xy1N6Sjmqb281f9MPsMxUrvgQX721kBVqhc9UJWqowkJwWt6iRfVvFbT62QK3T3re1GV132aowdfUJnj7v3JBv4",
  "key37": "59NM8DajYPbMZFYmBvBmemeaKdURHfjyEcS6Yb93XDtkuacf55M3HrE9huyrpgmL6VdhBAJpEbWU7YYVUPFxLedb",
  "key38": "3skptWdhgzZpmQw6W6gTtoMZzxv3Zg2dFLiePz5mvRuJZFQpJhRBg1QtZkiThcRJhiFTMvAGobkdixRzAh38HgPS",
  "key39": "22NcSV6aZou6TPMKZCst36RfP1FX967YmrwjNeDtTyvewcFx6ofw2LM7uAUfSKCYRVRYvJGJBVD6hZQ8wzaAodjN",
  "key40": "2G7Y86wxHiBy4WtmSnjuA749SzTJ1KBTUY5sfbNXzq7RFMSiQnu2Kv2XGSe5JNyGxyy9DRby8qEVsW99GHBy2BYx",
  "key41": "3ZdBezuioVrkcxVTWnJJdtN1Dk48SLGb6TPm9va6fN57BhaX6mHcQ6rAv93pewiJ8isT17e4QWa7ZvqRhzwGTgSE",
  "key42": "HHfCGeBXDyH3hE7Cm7Yk4s2DFyziKzQE8wjxFR3GLheaNe9HhbDS8xNeUb3DdMzwHgC8NjS9fHdFFzymKVD7aVS",
  "key43": "tYmbrFMzjuMHAYZWaJsqzjw9mhH6ZXMmo1e4UUZM8bfYkXLWwuu4CX1cFZUnuhysmBCiJ434QcPwRN2weB3zV2B",
  "key44": "2QRe27WVEcVhru2vyJNwABipoiKpc9SH49DWpbDWderxPDGsnA1Q5gdyFYBu6bagq9ejMSYa3i1tQ3tjEWvNVYGc"
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
