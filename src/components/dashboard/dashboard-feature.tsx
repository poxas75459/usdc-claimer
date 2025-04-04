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
    "2BavWbovUaJPhZYybUfJS9gNj61giMx1L4cd8Yp9XkiLFbWsVxRDNtgkNDKaXjDjiKWNzZRosyv4Q9G9EdkorUeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWv4yiMaWJJf2dz7okPEze6xQBAPTQKenWk2aj7EWTQeWWqGqRdH6T7MNiVBq33PLYbPLBZFG1WKFMWGCGeFTEp",
  "key1": "2DA5gaNtCkrtDnHnBNu1dCJcSxeNhVxyDGEQZjzSEAN9qvdDgowC3ucRwSRsDwEUWzdQqzK574quk12ABSaaHbvP",
  "key2": "5wRGn1tCJ7qLrNnS3vyCT3YtG1ywPbXxZmygA79mpqrJZYRx1jRwjmnYp9XH5N2K3eXYymEVWwn3FxKjV7YNSmMD",
  "key3": "UzAdWQJV2xwH9bQ7x2WPuSuPS93AXqzTVyTJVndkLBRhAW4RHtRZw24b4s7PDekXs4KBarEAdT7FpL3pceAR6Zw",
  "key4": "32sHTSU8nrm4oU8Dhog6QYvvobexqVZNc3G6MLSdZScL2yuBn724FXyyxbfWhr1PAMnMEGsKSHv18hdDm6zCMfLv",
  "key5": "4xSo9XPM3vpcEbgyLT5YxaquShy7FFH7azN1GG7s2ytKbiFShNp71ScNp9KFHy2VVgQ3fFDWxnYBx92Qt3vtAQT2",
  "key6": "2se5sqifpePZNrgGErdKWGV838ADEyLphuiHoTPJrAM3iMLwt8MQTH84RWUa6u6AquG6jcnAK5wFz3KGBMGjtsmA",
  "key7": "qWPkHR3PdUp64hZekNJmq4R9u3kyHCAvYKhHDVUzbFKBqDQfqfsaHxC2xGjVVF44npHKxfrtPSiTnrZjKFaKrc8",
  "key8": "5dpBEXmpiqjjDUM1sp3Yb2cBKoaB1Sjxz2z9gsJdzoLkv94eQts18ugoAoFkaVjKVGMNCTDzr16HuUmyBknbt4W3",
  "key9": "65kNcR3eFjoZAcJ24WJ6M493XaJnZuo9c43ZwfG2fUzYzUL8XbkETmksMLQEPfcp4XxZBzn1SVbxHB8UFpudKQiA",
  "key10": "2S2TcqG47TVFKw4QLXAgLvQdpn6KASy4juYCtTkKb2RZ1iiUMUX6ZCgdjDyFs1SiaRuCvySC6P4hghjG4cczHMjA",
  "key11": "5irjicCmJC1tsYLAd1HvpABg5CCKTUKoAYGgjihmwQK1dHguDx53iMUvYWn27EqhCeSiMFQpUaDYcYdU9XG9qiR",
  "key12": "47GmV6JxDBsxfDuqEAiphqBC8iw1PeF316sF51LzZnyvJCQ1GSxNFLdQupt6NzifKi8BQdXdy5aYUtzPvPKMBLPQ",
  "key13": "5wSRanJh3488JwwLZ7RZqL5Pz2UcknxAuh2EsfcbQHBVsuNQTfN6JBvKcJb8qAiMGAHyVbvKPrCheGfYCuNrwBEa",
  "key14": "4dww2evuC1eGn66RowgZdrb2Y5oCPpSLJcW9cwLqPY6YZb52W9YTPcas6W2FoQ4riFRx8PbfT7RmGAsjJEuyjGNF",
  "key15": "5HHCLgEmAWgERFBRzvScMGf2Tf2m1xNGxxBUA5Y2TcYLX2FmwwQdX4LBqjq4zLBwQa1uRkYYAu7PyfKTCC2WexsZ",
  "key16": "53wGiqkRiZ1ZWWxgXNM78E8HsAPmdu8egZBwu5qxL92XHP9Xkhf19TTWnoUM9YnEo1wgRoNUSf5yK7bwVY7Rs8Eg",
  "key17": "5dSxPbZZAtnvCU6U98bQgj3yDmB3qq7DMb1CaZCajmwva8PSDfJdYARZgUZRnWfkGTroBXgMSeG2Vf3tBmz4arL6",
  "key18": "xBXMSoDYpqRY97oq6L6BcKUbqmF1vZG5n8acd28YsbFR4Fxbm83K9hvjHA3F4X5QkzUmGyiLZJUWHHCBJaJUXj3",
  "key19": "4HpFmjranVW8sswPtGqgcgkyJg26TCNneU7uC6vGeXC1RTBUpdKTrL3ofyiSZdAeBV1CRt8AcY1erfVgMXhSnKq6",
  "key20": "3UNB6McsF9T1n6jvrkQ3a66ZcfZMg5o9rBBLTotQqyoBMSXQ5psQWwm3AMVLun5KKRCyVsBmXgKXN3m33pXRqUQ3",
  "key21": "541oCtpKnBDGiup1eFiWurBg7ha1B2McjsdSBwDkHxiMGHNgxcgNXvCYsGGLFya5g2e5jf415in7oNNjsVSjghwr",
  "key22": "ABBu3k6noz5TtMQ3kdQmviyLs3sJpZdj8x4e8osxjVqF5y447rCg8FjjVpPr8ZYX6UywPYon3dB3PGo1uBbQike",
  "key23": "5yv3kSmiaQ4B9yHXZU9yiqESjLsvNY1YiewjgZAbXyh7jPdUKstbftUnQkDyGJJDAkbFLTwmQLod2a5qVHBzrM3L",
  "key24": "unq6ouh7S1RWa3UB23WVDSjYHH13pYSVgS5DURyiTpYxnE9fzJokXyy74d4pECsCijHdhLCJ8t3bgftvWvAH1D1",
  "key25": "huhmJsUE1zULrT3CDFUcgbUgTAnB5w4BxGGX9dFX2iZz4SjspVdgWbNU5ZbRvxeK6ky2YpWv1w4pgmf3xUF8KR1",
  "key26": "4FeaSxQrFTR8xUoE3xXp1sN8D245BjTkcpYWGcJ6KGRUVBVW63GavpoYoJBR681TUcrFCjDitHkvxSF6Q6RsZsT6",
  "key27": "h7CWc5UZwP28spmRAbYaE2MRtqvZYh8H4gL7iD58yMr5qCakBU17mttcTNRcAG9CmpzqfJVnumYBKeZGHkgaA1J",
  "key28": "2EyVqR2bD9bMKMBF77zgAmq6rUBgAgdZAeiH5bprxjPny9ADdzutD6KMp2zHcF9Xk5f53tYTDeg8BeVyYS3eKvdw",
  "key29": "A2ukAVBSEbPrC8V7C9vqYJr7hF8E3bmRgcAmcuwnWBUG4KFuQ8H7qQmv3aRvN9pjw1Jcy8bx1oSX3xp5CwEkooi",
  "key30": "4PzKDXrkxtPyb3uafB6cdYm76fgCLC2dkxt7s8xqJJ2dq89aZC1PubQQzeumVAHNK9XyG84UdEWEA6Y4HnuVLHam",
  "key31": "28E89HiZJKKV3TwDjbqcNxJmx7gduRU7WEj9dJqe7fLTvXdu5U7Dpyq8qRJeNCWNpcDyDx189ZSuQW4mVModLcwf",
  "key32": "5Zh3PW4LChu8DQH198wmbVm8daFvmP9AtsMRe3ZA3Z5UtwwpxARAmG747ZsKo4656obQvujnh41ryg1mVm6GvymS",
  "key33": "4N1fkp6FrEwaHsagci9y7PigwukFBevkrAtQnx1KADx2ho5NajGPSPSX71fp5KSpNWner5nsMzUVEkdrjA1LvxEP",
  "key34": "SSZMD7wgot82u9X4peC8Koh7aqoXkWj3BQmBVwmBSg9WkyBp7Ti1sELTi1xECTqzihFE8P9iMKUBkHxQH4ccJQL",
  "key35": "3ULpim7yPtKspKGKmG4s7XvJgPQf7jS29omGmrxi6FAgpNec5fcyTdCJjyYais5UQzGzKCpeWJMXexJA6wku4WjV",
  "key36": "YXSsDnvGp56uDh5gtZobN4zLoyfcY7M4FZnhk6n5dtDnqKE6C3Z1Ekh8hGqEaGz3zvnz2wYcbjj4p45F1xjicdE",
  "key37": "338rV8motcUWi7CJMTevWdKyb52Js5fdxHPaa5XrNpZWZ5nDnPerjkMU4e1wp2NB2zdgTj1BgLP2Zm9GmSeBQbaf",
  "key38": "5MMsFfWEsj8Ae5JZt9AUtHgEq4H81Fj7geVvNQ22z5BuRJ48fLZRKT3t9CZuXxcXT8SdKiAQ5J8zepoq4iejnj2Q",
  "key39": "oFZRjveCPeBDbTEiwrqWznY4Rn6oS7MYG3mRV41kSJMVBSp9kceYUDizHfKKqPLiyNfbYAfQSNtWCAtSEjNzWBU",
  "key40": "6ynrbHmKsEJ6Hw7AjfunNaWYsTx9gja9i7qzrVHnQcG5McN2bFZmP5eERL2GC4FWbzQ7HjBo7zG6R4KgdvQqGTT",
  "key41": "5Dzc2DXJqKg2uDN4XYmUkkZBe6GE8KkHZFKCiK6Nj3M2THQjm32bLXd85jNykDcHctktv2WQYuRkdzomTzyYnafx"
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
