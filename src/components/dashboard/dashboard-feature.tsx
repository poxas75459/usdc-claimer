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
    "2yWew4kX4Y4Uz51NA2EXxffwN6cAYiwGndrfeJvQCMhEmTF9X1n2i6bXf9kjH2UugT4NkEeqfm4RPoStv8uBii4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvywq2YkbSyVB6JNRtYX9BAyur61dFa1GuEp8VQziAvgYQoztbhZ4CWThhcDNZmLW4ay6ndZThgyAHNhCYnNBFA",
  "key1": "3CBTq4S27y1rpmdKxGpxKeTVw2FVfgpM5LvhJdffdQTm4yTAinMMhkarSGZP5eGaTuQUTLuM4dQ5kQCk4oRrfuzU",
  "key2": "4zZgGf6TtirWHG1im2bjLZpeN5x83v7FWtqbZUdEooeT4z8b6X1xXUaeikUQD15Got7Fv5tbR3XaTaG6H5niZQFE",
  "key3": "2zBxRwSWxzSjXzJ4Zh9U1rvocyYP1ABhaPjLFPifVefRKUyjQMuLMnHQKERQtemknLEwBZRt9DNX2Zds7ffbabmZ",
  "key4": "2rmenXdh7mUhaF845pJE5G1WeLARENS1UQwni4gt5rmxAs37By1v9DRW78f14h5jhndGKdpK2R1ULkyGwYcKBQV3",
  "key5": "4u48P8iehcwGsT88xvCeZsSsPt5KtVoJfq45NncPmsZNtkJm2cjt8KoKPTCMNVSjzqvZjhBAoFRub56bXSJu31Rv",
  "key6": "5f1HD41tpU87ameCePxTQMVtXREtQTnb3ubDcKD94Rvzggvc9WYnrUmSuDQ8YKk1WCZjPMy4XrVM1Ap7GmbLMVCa",
  "key7": "3g2JoXHMfZJzXGNac7jDJL3jMNgUPuGT92w4msoNMD7FWYfRDgT6bH8xyvBesCumdhwnL6zHwYn2hWWZt3mu9VxC",
  "key8": "3uPxXfozZXjD8mKZ3YNre89ea1RUD5h7TXKihxoDzwtt1Z8UoyxQw1vJtJAF3w5y3nbc2eLHweenyd4q3foHVWQX",
  "key9": "35JXtd6BLkqcNqR5p9M3fYX5S15k36xc2dNQjMWgHPCcZxXtmrLkXvCAS5Uiiq4HtX2PvFRYDmDNdWXSAexVGVPB",
  "key10": "GTr6zJAaeTi72riNghRvzS1ZZVetQDugywSFK4m9vTHVK381xzGv9cvg8EYCGVHkFeaLb657fpxuQgurp9WyjoW",
  "key11": "3GWFwLRTRbQ2Fb4K2Pua8BHgHM4SmkAJAZdBZhwSDnNJxnyFdJqNtLSkPQYaA8GgcZnbhnbEh9YaLvcep2cLHk6B",
  "key12": "3Tfr6G6ApPBuHa8JfdeAQRYZMtwuB37joV1PSjyLMFPsQw3hyqoJvbsCbTqya2fPGqu8jaRPBGkUgGdPhGujY3UA",
  "key13": "2NZfBR9iZv5aUq6sQXYZP84t7BxmBocUCKvtKpykZVwtSvvQPiMZoJX6PhBWnDFnCVBjxn8z3LSJt5zDbSJyuGcc",
  "key14": "2Cm8dhhfceLNcUoHesvo69HbYSqzWU5UF2Ttvoysed6GoN8JyY4ygg9TpYigEKgczJGTbfQ1B4ptFLpNmPvzQaLT",
  "key15": "4caH6xurpgC3ju1nhF33HnnEXaS12FQuVSHtBAVYLLNstF12VJQ1gpgLdcxvCSm1zVL66HEi4qJvJ2ZStXWFamFb",
  "key16": "2c2RPQV9rddKjhtKMfK3ZzPYHdTGaujpkJHbvw6563Ljk9dhGJmZu7mUmzJGwk2fZQei1PTcV9k2atExLu7aC2kp",
  "key17": "55DHg3oW2rcyazcfpL51xkpM5utQY9a8s3iRmx4ywrCjGFpaPiJPqnctTf1SwTRJejn4ihDY16ZBzdFmkimvFnm2",
  "key18": "4r8AY5zauchVgLD9xvYN7qVjaGVsHYbJSjoUZA3y145qe3ktwMdgjW5uceJXsmYwMiPkk78yrwnZax7fyw9hKzTt",
  "key19": "23JB2obHeXUxeTijqNWbZVFYNE5Z7wvHmJbnbTLkaCnA8cFmCK5vVKt5o5ATEuES22JtjbQSXp5bkGPZ6U6YguYy",
  "key20": "ZY4fekaUNnu9JJRoAdBGbWfdryJCQNXF9Q6JR4pEkT98WaPzaYhEyD73Lic5Z6o6A1dWhuaz7bAZipvam9fxFBh",
  "key21": "5Gt7dPi2dioU2834HNnDcmzCaDQ574D7AKHnKNDTKW2rZhsz5PnpqtwxZ8iZVmuAJ9Qu774QHDzdxC8GeSaDxCUh",
  "key22": "3oghyXwCxT6y3WPRh2qLeqKHbtNHz2AyxejmoJxKFVYCswDyy9APUwgZBtsD5jLh7xsXt4stu9j8aMf7PSk4eA4w",
  "key23": "5M8cEmcVsifz5vCYud95L5SX7by3FYkXuKtXCXB9g4ph7s3UG17HzvCFqBsbcbf8vrKnD5J8uDRUp9SJ9jkvnFW9",
  "key24": "4yVUzET1JLNWxX5NmKY49rvU99dfqGdH8YvvWUuax9DDUcJrJTVpbeP7YP6n93TgdQpNckMaywBDrv6y4JrCJeDP",
  "key25": "5xTbPpUxB4ZHZZWFtgx2SaDBAEJSPWpFg21FhD4eUoe72w6hP6osiVba4Kesm2hLFM3sxRWMrSzB36sDcfBwe3Ym",
  "key26": "2WViHPpsXjn1VGzYRk6bFEsE249ymdGqr1JUvgiA9KJqJJXkWgAdBt6huWghbd65ppLYMRFDqAiwfhRtGahpSo6d",
  "key27": "4F7oDCtunXU6YRgdQrZLkhArY8p9vW1jWeMbxnkaJToHy8BjbYUfiQyevg2g6B1yqna9ACRYXiSPkgZeatPpseFK",
  "key28": "3kvHq3UEjhu9GERh443MBSR3r8rfmKfqRDZA3yv89qqUptVcEuGeU32FYGZPZK42Azy2GfjiHwhLnb4ccegEMhtS",
  "key29": "bRoVnmLvSsapA7JAPyfHzH6PHZpBDiMYfVrA9D24dLMLLiqAXTq3cGivDR3GnJ76SZr5dixwgWwpY3BhrR8YB1A",
  "key30": "3N869HNsPWJ95U4MXx9t7FkRHTNL8aB6TD1crDpA2x4oLwQkySfbjXmCcUc2XGUR5jfgM8bKEa1f7uF2uhhGn62A",
  "key31": "4SsRiABqEHQkciD5d3Vv5mnCPvC4o44WNwjiK3p65XQsZWjmwg25pSu3KPcig7XVTBZjkiEBC2Qz7w3icD57jUH8",
  "key32": "5bYFvaV8hNYaHnmdVLa6HhiAKLYk27Tz9FoJynsA4CwdvVeauH856bcwaRyCG1xbactn2J4nEhn8fMc3goGGjpwN",
  "key33": "4TnatEdkA5K3pZrtZL66qoHRDBoG3KEF357sD1R1mkyZN6ae1fTBpmV7r8K4gd84DnTj73qL4Am3FnGi2yhuyqBp",
  "key34": "2rAQgbKw5h7421fupczx2rFizLACkVWorfcCZvphm6iPWtAPrCHuroiEwL7SXumkas6ppgpGBebP88qKiRjXzP7v",
  "key35": "4m1rVkjEn1VDjqEPeoPT9YYyQVdSrZJc4qyDrJdtgC16uTP8DWbL6gn46NkwRMZPFYMJCo81vLC4v5evsroorTJc",
  "key36": "4peXgZKEjRNfWN7GzSQf96wRwybvCSUyFHqLWUwD7i4UN48HdxTwMZyUZhHEy1xJbhyCBod1MF4cCSca5W3P4bSs",
  "key37": "66zc7niBucLTp9458EmUjZ1YfaLjPscR1F2xsHXRRHuMRzNgNEzYhT2T3jf86owP1sXbbsZqgd96Ma7kkVCXhden",
  "key38": "2rXbJkTk7ZKFGuNesE69DXK46Noa3v4UxofNT8di7LgFLgvS74uPtn6Mxnb3cjtVxSGTCrHJV7TrjQA6rCwC7Gn2",
  "key39": "8Uk9cq6V6KEjYBFwBs2vxmMDPuZHxVPChM6K3d6LLkArZLvKyeWPkvruBE4m8iotcKAKzz6s2YBsqpLaUSqLGvv",
  "key40": "2rYryYJWktXYcfMJxZ6b4StTwQjEEBeZHHZPnGiH7Yp68Jtz5La72zVYLhPTvb7aiUAdkYitTTEjgw8xTWvjgbit",
  "key41": "4j1dTTLesfb9pvH87DMqu5oEXD3sc9AmNk83oVEkgwWKxi5AB4f29UZgw2VS1h9rBEQhx9zuTgneimn6pvqAD1k4",
  "key42": "2HDTZDbaLcSiSxxWgLjCCGzbqQsh3Pp8maJpgARYmpccgT2DK83mqm3aPxKmXXUcZ3kMA14LpLfUapZRNsTs5P6M",
  "key43": "5ZKPeVwTM35wYwMdwXErpKQFz3o2kWw272yy4mZpQspYz5V1CaB5BbL7gdG1QM1pnntRraZ6LbuxhPUmhDSF1ixX",
  "key44": "aws4C9JyrRBPQe6qGWnjnqpc5HStPDMmmQKZJeVd6p46kB7UetHihE3Gw8k82bvdzKPe41ykn4T3L7vHH6gRuYZ",
  "key45": "3dcYZLMnJdnpaGjDBUPuMY4zukRdfqRgHBbkwAYtpUNyGWdsDixqAZKoethmanqn9NRDfdzzAfASGC6TL5zsQMwU",
  "key46": "4ZHqGM29tKHqy7jf9x8cn6ooz5eEJNHfTyPJz46coT4hDo6B12y6TLifcVp6V1BSfLyrv9uGmNJqAv69m3WPJYsn",
  "key47": "49FJ5iBcCWYxKa6M5pPVE8vQhXikoqyRow8Z5LkvUNWyCNjJUdsS9Do1rtGVM2M1q8XiJy3WeehqKtR5qmC8SsGs"
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
