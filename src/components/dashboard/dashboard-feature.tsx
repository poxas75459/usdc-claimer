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
    "39PXMbhBfnYFoWKoQJ2BSVNynZVPnWdCTdk3tG91Xm3siQPuZUztFvNtdYxyUo9ndmCAabwbxsw41FVVYEuSY5HQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4Dik87GTRjCA5aEiWP6JDrqsMHRc16XgVchbfWYpk1EoAaKXhcgURWZ2Ssewywsf5CPkCMEYNWXGfFnHsgh8Ro",
  "key1": "4na5gV7eR9hvanuunwQ1SyB4tGbujNKfDFXQiNuMhr51XB2TKS4j7AdvA2G8vHWNJsqvUbu6EfHkeJUjfXuEiMTQ",
  "key2": "3SdjUfpCSbKWmuJmgpWu9KSjKJsW2cMHrb6kbJLmMKVTJgfEVZLybUsR2Zz3BJrLJzM6FWxAmPAexp6X3XBFaXLL",
  "key3": "3XpzTWHAJfyLhKUx8vV9ZJbMyWkth4wBvrdQNrCnznN6TFqGv51zXJezc9W1SMVkqAgb9czPvggtQbnWhG4Fq5W4",
  "key4": "5VveedZVoUPp6moPgR6GRqfgGM5Uwssqznfh8CX3DJB3jeagAhdphLZa3Nvn9V1RqYKTxXRGZ7wtYg81erwD64pH",
  "key5": "3DAE4QqZgJG2UxY65o63QRCyR3La71hkhw2gHJi4f4T16HiB9eNnCAnZenkUxjHmjdCjk5f1J8BmsbdoHtfYmwj",
  "key6": "2NAY2thsvkDKysUSRB5syVpzaWWwRNyR3Va1Ssjedbf7ZUdZTftaAbhYeXyZRJRD17VbsMFkPrT23Tcr4uScX5Gs",
  "key7": "3MoTQEtZigtzeKXop4KTxvLrhnTpJbLGDKYmVvZx3GcZWFAqZnntBLwDodhjAmAXxmdnJJbGrFY3mbPDbxuzMB59",
  "key8": "T24J2yUxJoQQmaStJf6sCFA6j5Ggcw9XQDpj5QcF8ShYavmnjEeiumZiui5QApvM4PEmFzDZsqpZQRXR8vbe7HZ",
  "key9": "4yYFrFjedetpi7vqSmsmFRQta3p2FUQr7gp5rRN23ooMrHgjozsYXqrQtRKZMK5Yq5fdvsksr5VUk8NrXHHDc76k",
  "key10": "2XynCP2vkCE9ZQhj2s3mSe6psho79k1h2VBU48pww7KQsV7xbvNNFRMeAsqQpeGktkb3BYhfRKrjbnt6HswrXGuW",
  "key11": "4i8uPxkZEqUfLpPPGSixkaHJe3i3ersD1uoEKbjF96xvnZBiHEjcXh1rZSkqKZnFirgeFVHctEBqaojLykhZqD6z",
  "key12": "5HvWespnMB7qFwsqLysZou8KamsRsR5p5cW2sGCyv7mtZ39jB8eVLDb7C7TXZXxfcVB8gFC48qDio9gUbVk9xyt1",
  "key13": "3E6N4pfioaZ7gWeA87AZw7x25jKbiwH5MYMG4gtA1dJszC9UdQfRetG8siQ3F5UCV8mse3W1WuNy4jfQCK5zKmze",
  "key14": "4jehiEmz58X3cGpJMCyPpRkPrZBC6B1MCwyLr9suauG7rEKmN8jMtciqLrHgtb3siE2yicN6GxfL8nLjfLRjN5c5",
  "key15": "63mjMqeiYBEETEkrNzx29jPzAsxEJfKu5oXvWp66a7fXgv5idrqkPqBScBHxccbJFn4ZijHRQh78uh1q33v6Yz7J",
  "key16": "2Gz3RZsV84t6eaF36DdCTTFhUL4wFRtTW5UcWYinzb2PjY5xFrQuQgEawkuhCJ97pNV69E2j5WAxycF96uc78fXk",
  "key17": "2Cg8uGDinb3STvyeK85rrWM4DTmCk6HqqsK8zWcVN2ZBFozt1WXnW6yhNW4xqvWsASRkJQFAbVq4fJrAauiTud4v",
  "key18": "4iFyuWDtevyVe1et2SgNHdZh2k8tTb7eVZQBQnrsf94MMeDuX7pELG4Mbrf5cABeHtCccDabq8oJnSNmfCUstqjV",
  "key19": "5Vri4hQzpSkQaZNAxPLHrhvPADRHhqZw3DPC2DUFqKqwmWgAEsMbQ1seWJY5DJGPjDaMhts2bSYdrxPr7v7cchir",
  "key20": "5HPmEfSdVU29JFVLBAuUH493V5ycbWbsLcH7ifyNwcxLao9Fhqp1MuJLRQhxL4k9PWiwvDBxTfTGKQJYFCL8fBY9",
  "key21": "jpY8AJT2oTegARpP7LRXB2itNQ2yy6tQCA3zUAWmoAKJCPHmLhYoizdgidWU2AJd3X9ZPTrVtQ2y2Kj84xRT1rE",
  "key22": "PPRG9FdEuGvb9CBcqZUCwdpBzwPQhsc7vh6Fcc4GKuHEDzV5RmvXJ2Vs5GQTN1eJNF8AjxQuyKtcmaBsFKsyCkJ",
  "key23": "3jmcc51R5AiBjgMmiovkfmf1YNyGdR8cvmSRoXSsH7N7rnaM31HTgMpudEyHM4pr8DHHDqhM5J2jZMd5FDQia8fH",
  "key24": "64rWgRTwmubTXUrs7udTM52p9wGT5x2V6PKXwGLHS1HqWgnQgcftxLG29meaUePyrvkM248wVrAk1obvZa7objDV",
  "key25": "4LmWHmk99L5mdyd535bH8YQXrS1ojFfyN1QhPucFFdVk6c4mPcYeEwEhpGnbmbVgojMButMJJPbeAN7wa9XWk1q9",
  "key26": "3qckv4BdMuGYLs8s7d2xKFxNd9GxGAYs3ivg1W7Vh4xEyfsU4Pn4ygEnRHtxoht9sPkn1pFuFuY9sfpPeSYucDCn",
  "key27": "2zjKVbEYp2Ggi7ru8ZVj1yUthjesyLsKHdZJwjarTkuyzYdFtdkumxDLRGGSeHPPb1w2PB7NB4GxMMqbYNEQZftn",
  "key28": "5ZPmxDKRtX1VUcjdUb4Ki1aZVE7dTznqPFNrvRN3i3AEjqTfAjsaGJ6AT2WXoL7GL1PKjDi4tZ9jATo5gaA7gn3P",
  "key29": "WKZM2mSoWDhx55JkG8tZQc6eRUM3h21yCjLkTs8Kp1ZgysSgFobic3t6xAMBJrDedh1gtuciTcw9LLErsXeYxZ7",
  "key30": "5jNHUsa7g1MXsq8BByFwt8Hhh93PZuCspEN8h7bsozMThHiG8BXGtzmaCWrPggqhnLKnTL2WbDAmPpSD145mfibB",
  "key31": "nSkU1DGzNXsiojaY5xXYrtGKFNTs5NW9tp9MNoVmhrL7qH3o8Lcabxii48r6SVaQiJcQDgw11FSjFadQx19RS2f",
  "key32": "3q2pSgN7FieZg7zQREQfNyBFC7HtKYPpsT9AKXE5mkK3Lm1wKSp2qYep5KTxRQo3bStrcFUdsGtmE5whhQuwHp2K",
  "key33": "6PdUJBNks5edHCNUBayF9BJwNNekWwe6Y4JL9qXc9d9vXrMs45NB2BRWu6PQizBJWU2E1iC8SUZ38u5ci9xbZR5",
  "key34": "kayP8DR6WTVv6BSwvt641hS3SfAuoBFxUTEtdhFtceatRaUwL5zC3a4gcNX4cea1GDLyrPgXaNi8gswSEWYcvma",
  "key35": "5LyCc2SS4enan4xYPALm5q66vsa7mtKs6JtnWYwJ1yeRFuUYAVn3eC7WnPhksiC4WzEo9h43MJeyzKnLX66kA2qx",
  "key36": "3VRneiMkDKHTGhcsAqtGMiYapYpVnJFiK5LnXMGs9A5SBDAVTi498pf8Ps4rWr9yC8X4Z46P45Cjyv7kcAh5uMZx",
  "key37": "Nbiw1L5RucF5rsQwES5UdLXRG9cL6ptHZ9ieqpMZqDHQXnjAGL4RHKRZ8M2bnJyEFRU7wiYdvS1xmVGTX2cqmke",
  "key38": "UB1iREE4isi9gCNoqcmqZuQPPHy6P4AHePrQXkbaKywtbruXuueyUfkMccgEXBHveNCiEuie9FDYKwRgFX7JSbu",
  "key39": "5r8eCBzPaifzBdXupa5FRA4GY49xLiem7r383gowFNSVT7CNLvSF9QtSwEQ3VHKENAmHCy78B9fboDsBeP5HRwua",
  "key40": "E1cRYbb85fi4pD9YDAajh4ZC4C9wutdbnJcNxjjC8zxksuq7Pm6mKsVHYNkfTAMA4mqpT3Ja9ef59YidoHQpvJn"
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
