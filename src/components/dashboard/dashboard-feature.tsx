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
    "34LpGpRugJ7XLkSsNt5mFEeDBeXSmTcTuATaJa2vWNsfdvZXthhMoAbkT68V4GCA7SwsbFfUJh7Z3cN4zX5hhnaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5234zNvx5AJ5m1tLcozQgfjgjTdEWXW5mRbNuZr7VaZzrSNbLXoV4Q46HoQp2Q8ij1HSwkrtUPdai6UtmG5ndT85",
  "key1": "2KSuQk91u7EHdSfXUNyw8usyFP8pbmKFR2eAZBPAuShQYMXy8QXvUS4dVvAdrPz2pRkqitgdvsAhm1tNtHTNqNV8",
  "key2": "32UoEfytpJVa3xbRC3LL2qMSwaJ5rTeNPJaaLcmvDzWnE4xZ2vVDFcpRYVeZtbQ3qoi6VZwai3a1kwtzzLoVg9WT",
  "key3": "5hSRz4S2t8sH4dGQ8bMJ7s5LiHHDUSkKwZ9gQRMnU7wG3UC7tEjdAnfKu2ty2XKb4sh3VNFYxkvAzkJLPXrK4Wcq",
  "key4": "2BgLptjT4MW7B3CN5Q6p612ySj3sGHqw7AGMp6dknd69yRKogjt3FkD5DMdtsoGR6vBHz43xrJvmrr2wouoLYYYD",
  "key5": "5sLQkeurHJ1p6HZG2j2tNGuMTis4vnb3hyTBiA2P4nQXKnJPL8fEHw4Rbef8A8JPzqKszTN6Jar6FAS16SvfDyEY",
  "key6": "5ptwoWYsBiyYrQFqkRtEE5X5RVLHmkwoJagQW6Xbv5FcYp5zEUSvCEZ2KJWCsSqTdVGqSPp89YvLkPC8fg3Eoxvz",
  "key7": "3KqPyF5KZZrS9bbLsVoTNZWRdgc9xFFLokaX2YV2X75zf8AC1H8aidwokwHRA1v7eeCDseA8AHrgLDDogppfFfxt",
  "key8": "4gNd9AzRsi1zDR7c1i2y8hYwB7VTQEswkZRfSUoFT2AVbPtFiuvr4XWdycdcqxxeBgge6F3DKns9Cy3kUsRUdr2f",
  "key9": "2UVxzqZWr7FChPM88A82J7F2WKhjNYqvGPCnsLttW1oW5G5rfeTVYYHTLKBQyAS7pPFM9KGXNZ88fqPVuBm3PFR",
  "key10": "78ujgpHxanTXo9qDcEFAr1PZddnUvyQFMpqGbYeEgTrq9BzjGGu4fHb7XBLcgqCf6VWnLJbCSJJV4XMtpka6bir",
  "key11": "S1Kgtbeo9S3Snpqha5zmdErEAuqpGsBvQvJ66aLfuoAE7HNg86uVNB4LFfqRJ9pk4xq82LPC5KjV2FaPY9xpLcD",
  "key12": "joDdMGmiFVEpmmoYhSVWUX1fRGqBXDSgbmesQeCYBZ4DyDS9MG41TPaqHHm8gPk1Lm9qpdyGmMvHeDBqyJk3fiV",
  "key13": "48J87CiGtpHtdjPzkgjTwS8PjZWC5vXj8m93q8ZarttvfuqNry6B6hCyFsaZE1iCUKL1sBvWfqRBdNiwigePaosK",
  "key14": "2gYVw8fzxcazJ4QRBr8W4uCP8oinGzLjVPADLD2t7z7CtzW7cGn72sfyzLDbmtqRjnCPuj4jJt8pdTFgFq8SBumH",
  "key15": "58fWhhGbzXsWqeTtQ8a5pp1XuxZwMppDZXS6iST5nA7kBBQVV8ZzJ1RCB4uEc8vsN6GnGBqiTBeUDnkWwoVn6HHT",
  "key16": "3m2ahyLArJx6gf3XfYk8wy1kdxmAigvumS1An9VmcxEH8aEmbAGwvF8w5kWHzgzjH4B7VN2BqydaybPSkL63y64J",
  "key17": "39Tq4USq25wDwRx85Q8m7yfRAEzHcFrKyGKC38YMSMo56yFPRbppjSK7dy6FFHZ2yh4cPh2jhEhMVeH3o1KySy3C",
  "key18": "4hX48DwUoQ8s4Pfq3h2wBwLxrTCmN3eka87XjiikpCSu9tBbb6m1z7YUdfU94QwToxabVxy398xc17DrcnWca5w5",
  "key19": "4ZcbXmfPLAU4mtHfikKs5zPWpdza7cb3Xh8b5UUcbqbkKfSdZxW6UzPVhrTDjAF4phh6qEqUf1o7guv3KtB398Di",
  "key20": "2AyNTAhBF4deCSDd4jXSFLHRQ6NFyiVjaZ1CXbV7ruHnGxfSaxyMHkVRCUNGjPzYv9RPPAWxTTX8d2iL3jM9SKcG",
  "key21": "4qsAvM6sgH61fokxRZw49asG9mGxMGGPhABttywhxAYdkrX7GyV3NKYCGpZhP97KRW3HaZCEuumt6qSUV95zZZ1B",
  "key22": "4wQyCRxhm7s4N9Hh6JCVS3FqQvEZYwhKx4FEFjPwxCtR3Qv9YBuxcLGCPYwQCea5epWNT1Fqngc9hxyJNHcroXpg",
  "key23": "2H3GFscJHAGJ7tS1UmWNWRBbWUhNx89j9FEuK6qScJDguYzr8xY9J5JGHm6XZ3s7k6NdMvBj2zoPZRc58AXpbuUt",
  "key24": "WPdaeMZhki4iJHVqUEhRbNQBkXCppQoEzjpHYvbM74W1Try9SP35CHdiEyenVVVmDekvqPPk53URhy1aR5bJCkD",
  "key25": "Jt3eYLoafd2wFoCQttEiphemq7Y95aWbp4VZHksngP3i8nCPcPyBnYCkNCrayfKLnqSEzpFxNvuzn9516vvLB7H",
  "key26": "4j6SgRDKNWwgx8mGjXr3ujkVHk7ecphytY25qjsQwRukbMfmw87f5qT42oMkUC9rwTnoYVqcswDKnFX8fPg327rN",
  "key27": "24VZuyeQJjURtwqteA4U5QZttXGnabt9qhAejy8HQh2stpdJcLLDu2so2mPoUSh7k92KnZYjSCNSs4x9tpGJfwr6",
  "key28": "2F885Rrc9U51VqY4ijAowbkggHrXNbw96SDFGLhd69onfpUXaDWhUfu8jDUqYcuojtvF5UsWyK1Uzv1oQQLwxy1p",
  "key29": "24FRvxxofMzWBzZDuhh3QHcBjDM8e1PrTZniA4L9yMXKyKNE3gxgBG3W4HWuq9uTxZJ4ZFyULo9Ehk7njCLcUwzP",
  "key30": "5ww8YEgTDE4TaveYsyTTi6zsWpU36PC5UBXv7jnW5q78UZMyZ3ZZ46CtPk2pooDivsnJHxeHinqhYf8cbcwhJYUP",
  "key31": "pHZteHmVYpj8U541LuCmg4LdUzCgsQoz8EpYoAZSqgMUJeNVyJc2iCdv8wFxVB9t4bRLnGajrDgNUE83Ax5237n",
  "key32": "5u6tkLRuxh6XEX9YT2HiEwzY2oeJNy3hGqcbSWbpbxZznruSSDkU9h4VPCFfgNHRQG8QoVjP7USfrUk6fwPdbR3a",
  "key33": "3Ke2GX65TMn4crKDerKF7xLx7zGNJXBgomU24o8ZBefJvbj8EJFxuE28qTJ46VaUZ1xo3TiL37ZrKHTAjiD9wMbc",
  "key34": "26ZSi5UgteVKrSpes4xZ7RdBdKLXSxvn6YVnaa8seiupMCqf18pswWwDZ8guyUtxUqCXy3EwifEodJFkA3kRvEAZ",
  "key35": "9ZUz4VfyGE8EU4uYHGQaJ2TirPrK9G6xh2Ny4V5LM1FeS241reyuG9TybFgLnM4pC5P9JBHukLxMoH7yobYtayh",
  "key36": "5mBNdrLcLLgxf3KnzBeMxfmxCm3XpCZ8tTkSk2F6iG4HwLL4dnfFEFQYzJMreBZcUn5nX6LPb4XnfpKYRyVmstgM",
  "key37": "2Nk2Magm5fzCs9SYgVXxYPNptUP8379g33hiFiumqGPBz1xiqCm66VnUuhi7oEEcyjWA2YurQc5TZtHXHw9RZCpZ",
  "key38": "2R9aF8AXsdDWY9TnpQSyjgjac7DTmT23MDd5AQ3nomWiX2umh8jT3u76x2igac6KeqPaJhqzTivX3Gt8oS3b3Mbi",
  "key39": "5XSApPtjEucTW6AKAtELGYDjNm3MN6QRw97HMxgEj5Apg5pmVWNS8qkeLD4Nk53bFkGxH1ZghxVxM1XVn5pk65s",
  "key40": "4RyZS1Hn8WMJW4cEtpDECgyjZeaR5hBR9Nieif5w2VSFUqDqdRZaTQJD8NoEoYCFmiH488pho741PhzorDFbVgCH",
  "key41": "4pGqonLHXCtrcKVUE2YrbhzMNeP3ZvkVhE51fJ5XZn7PTUUXyTXYFZnFNqYSYTyi8tKyS8U4K9LGR6fBCpUmUaMo",
  "key42": "5aXVQDeBq3NPXSzikKseebk1DR2SAMHS9q2G7zBzwK2RRMxCrs3ufXmN8L1cQtiifvutVFGMo5Z1xwuHHXNJsTa8",
  "key43": "4ikKfrwWwcFW2QJprsESLkFkzCk3HjTuG7dhsi2i81oC75zVngMk6qL1YQ349Ksf8fzwTJ3jJiVd97RuJ7J1ae3u"
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
