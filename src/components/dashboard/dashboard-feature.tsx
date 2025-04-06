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
    "24JdP7rkVEe1bmpGerTZTHd9aM9B14x2cbBQshJY13fpyDSBsAez1mtETqPPj5fWrNN1r1TMpUj1Cn9wTZ27jcdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xUSDoXRH4UmajQH1bMnNJK3GYy14pJVsTCVqXLxyKhPtFPYzUqGM5pwDoaxZ19C65aq8Xs4pQBvhQzXbFjJ1YtK",
  "key1": "4iyGzRRqWHA1sweKXD421sHJ2NtmZibXobCyzz5AZ5TQ2sJBk7uzhh2apiMZQ4j6rHyK8n9hHyv4DYhv5aQFuycB",
  "key2": "3Sd6Z5YccamWigMh38Jpgr1vn8AqRKRgJmcot88aBguaKkf4gWQsU9nJjh5bkjePjoCfLYi9poySCk88y4qUSRLU",
  "key3": "2Prcqom4Kcn4sB9VCNPz9KNbXrkWEUXCrp8b7QLqehVfLajcosLmrBMSYZpZLk3NesUHDT4meVvmo86rC2UHnaDg",
  "key4": "3g1ohEywkaLJkUoSEKyBcvtWFYfEYyDJn89ityrwQ2BHRwXBZYSf9iEXMoxE54E3FPnP5a6zgYAaNwJFe7wCmAK6",
  "key5": "4xDBHCnNtmjLh5UFa2sCBHsrKRFc9wPoKCQjCe7VkPLNWSiFKJT6x4RaGf93Wg2Jm64Ao3RBHqp7ZHiJBkaPGVzC",
  "key6": "253LsoZv3e9gVgf1AvGCRKSfpPh9ZhY2vueyKCcrskD36H2XUg2Mnb64P5rpkeFEauJbeELXNSeYMVEMzdjbnsW3",
  "key7": "3DiY5u2bxzgcwcsWEKZDDbZisCTv5oCSSe35xPYiMoeFo7CnMpEjDXpuTdvi3GGdzSoghNdPaS5LrnncLi622vg6",
  "key8": "2RLZdGWWYZqJXwig97WgafwArKv8ohaeEwTgXXB4LqwxrsQMBjt2WyyyTHavBY1cnFioAbkgomKMWDhFWLVHgMGP",
  "key9": "4iEMMXXdz7pN5GSzE5HyMNs1hfFYSUpbLrPMMXNdtgXhMLdDuagWy1DL8ZmJVPenPJb8djay7T5xM9dPU9hdAjY",
  "key10": "2fDBXeK7d2waNELBVtTbKxAtmgbBnykPACRJ7RugF9uNDzUbbWaASqvdiGFSzABW31fZ7LTjWy2m8iKtRTz2Fhf7",
  "key11": "2c1HJ3sD7ttCm4aN7FN2VzjbPe6K7rWYnatjzwPjJ4UKVA1YfVuX6nBuwYbU1qaRgSgQo1BAYmMCn75cE932wAST",
  "key12": "whXBcwYUu6LvPoLzTwLZzC8A4PBUBptqsDBrWUDZmfS2vmeqWAe9rTCDrqx3RTLTAz7CNLsxpUgsGsQrwa8Umq5",
  "key13": "4CiukqS851ugAUbsLrT8hjJPc8paK3SVdGipvcFvsSEnuQzCTCGSPEaG3DMaxXQKCifyJXT92xHgps4eLGH4NPog",
  "key14": "7AJkAGwpyTLPkGVkivqbVJbhaGw1yTZbWbtoF2UWrrCm7qjC45QUdMBNHE8wFPKLPRNoVFRx94nBRnyciUp2gUA",
  "key15": "5K4JAhDGsiGN6TmT7TWDX3ic79XVjpiRKp4PFcdtMzgvNxNxLfpTBdpsqRDoqhdWDUSzahSqknJYLedHK3vggRun",
  "key16": "5VB3tDngZiD1aY4ujkZMdLdgJrWhKjqLLwZ3sdG4KMfN6U9gBWeUQ7ueAdvbPMEzzZMJLfXJP4JMx8CWG1ZHAsVk",
  "key17": "4KY44NvSbFVCinMYJiTDewZLgpr7TBo3HQCievzzLhSCpg9npsnVWas69uXQoKrarHkj6TSDH9NXt5F9TJa6MWbr",
  "key18": "3enCTPzprgZqz3kfVNiRzBtg4TV531zCKuyuFidHj88YuHceMghrzYrogbT6noLD9ggdNCCn3GUqyRexG8Jz996T",
  "key19": "3G2genG4oTDamoYwdKRLZ6cm2HVuM8qd8r4vNfTFMotMSxGXpvjn5ydThEiw27EZog8KopoFCfLiV1NiXRvvXyAX",
  "key20": "5nPC9cgqsMn3QkbbvgfT7pPGLpsnm9DxJ1rXw6JAzj6SzgxbiVgrKCJWERm51PQbYkkRsa7iu1pr5jqQENL49HKU",
  "key21": "2kgiP8oPDtBMmBEAQTkz6D5Hj5CUvi5tWeHSQALAph1GfiVdKqdPBv7fByLGtKRKJwvx6iqYooXcWSjP4N8p2Jc1",
  "key22": "4zADGecgSZUXwZGPpNHMknHziZRX9iUjKExCPkrjUK4RMtVPx9faRJysfPKjVTck6hS7x7MmRoiRTXRd5i3TkTxU",
  "key23": "4sMmvcRPbotqYApZpxHkC9QMyuGa5mmrNjqWF4whpKLdwU4f3Fw6WomZEF559vXdfzHCUpFpWQzktxrtSaiTNB5S",
  "key24": "23N5aqEgQPSHcUkJiy7KD1jghw7iBc7au6qhgd7GDqreQBAoDJrtKZA4RDtyLHa8St6vJ1xGH5dFrFGoEFaXcEXW",
  "key25": "25LkjrMjacnWbfkygkDo69Ek6AD5ai33LPUJnx4tioUASS4E9NahFZw1zgsyuqhAmNx9X6FPAwZubgXR8kUHRsUJ",
  "key26": "3MSAJfVEPi8P6dUXmZ2aF58tGVV77nWeCVdRRBE6wuJJuNS3dtPXg1bPc3SuUthQfb2otg3dHn3TQNVLNmNCorVi",
  "key27": "2LanVGcTuWg3TYLtLmhHLjQ4EMjSgsgsodZN9s4GDyYGBECsp6Udg5fsZnEcgx2AeW31faMT3cbth8kvo7DViD3j",
  "key28": "3KKhjhdzCg9xsm1J7RMpErSAmdQRL3LegzZKACZsmGc6Kr18qm7JCCi24Pn8Kh12hymYoPQFK7X1eSMHUULhtto8",
  "key29": "2HNM7HPiY8EjmP2XbRSSKVUYnLS4HpH9mNtn8iRgUxCgN5LV1zPH8m1Gs26stHcHAA89RVMCW4gE8mRer3KCcnam",
  "key30": "38DkTUb1wsm9NUEEKeUJoC6eFKyYgehyNWKo89rFFQ3RHShH7DinDyYbvdAk2mTczUbFGhGu4p8DSFyMyC294ueh",
  "key31": "65SaQYo7uctDjkubAV7Cbo8Bjwb9DrGV4CvQ3ChQAvzqPYhzYiZgsZ9rhdqJWHWjgNJKXaWzM8Lo3ASGRSH91K16",
  "key32": "5F2JcgLcfRZuqZ5j2vNNtsuaMmy3ZsyEfusNdJFHmsqKD8w2pEwehZwTkWmBK1jsv8SoPgpQZaMRuV6HFX5rqtrC",
  "key33": "gZr1bH8rS2bKBVCHBioobeGnxLZfREtZXdNhqKX7qLQszVVddBggEJv21vMVD8tbcELPH7iauN9dYRKpBUg7SXF",
  "key34": "5VC4xGWQaXLVLrLpdve3v4Feo4U2MpcnY1fsURHAWtTexLdRLNCWmPSk49qon5R4vvE43UiZpGbirvrjqfB78U9A",
  "key35": "4xRE4mzU4xoXpdw34C8oB3HeTpzka1cCUPLQ3hqvZwGkDU6u3VWA8zBESAXXsM32s8gMWmv1vocukQEXqgBs5256",
  "key36": "253sMzf2RWvb6yQJoftmf9gLuqQKS7Wk7vrYtGDXjvqGtHkQkc8wy8AVs5WWM43D5bpw5dgEZDBuYvqxAm2UHx9z",
  "key37": "4j3BbxLT6uToJu5ZEk9WPmc4pJfWeMs6uPYL3656Mfp74R6KsJamVv7sEHypV7JHjLA1DcoqFMTxqJWByg6XdUCk",
  "key38": "nH5UrZAz1sBd1UrpJnFWNFixbauafnWVweLvkwAzBFZWzwCb91KUrq4TU6SfEaQ6FJMjLatWbtFFQ9Sirzd5ebS",
  "key39": "5jasoQq4cNVtNgnynjpfYVj9guTqkG2qW7APr9RVsx1QtSj7dJ7BmJ8dns6QX1qz1duTFP2YhAbMjs4KaxQa4ZR4",
  "key40": "5rTP1R3aLa3zYesz6eo6azLxyynTwaHoPTziCquV9GFVLmWzZx1wBrmuyHbk4m3LZDbFyZYstr6opT3nDLNBuJHn",
  "key41": "3mxRKbUAPaa8QFD5ocFwJ6py3ePMS3fpjYxsdD8QuaTxheDm8p92ZAcZ7gktfoby6JJtx4wbhLXZ44hmk4Scvyrz",
  "key42": "2e1W8R4zGZ5kjp684N69e4Gk78Dne9DKc168UuQbda5UsVtekRLxHTbVChb5DQMP6xH5kfAtSgP27zy16eVbZt9G",
  "key43": "2y2gJutMTU8HKx5ZsF1EqGDDHeKsb3hK1nb9NVmDxKnQ5i7WqA9aqLb4yK4xP4zeF5cGjMpbKeEW1ifEpPyMeEpi",
  "key44": "Rqi7gN2tKYze9gLws4JYWcW2zK6Tajy3CQCFiP18xs9x6WjUinceh1sYoWorfraD8nUGrV7CALymm5EPoZiUKcS",
  "key45": "535y5kbaN68HqMPRtrbLaqBfmPAyn89WiheKY5orNCf7mCE65u6GykqPfgc5xoFrEU3ozPJKJ4aHgXqFUJgJrjZJ",
  "key46": "2oR1xT3Y4esdGPpjHKbqb1JHXhMHFK9sNs8e77dknmZvS9qM9tzueaqHuwVgKcSZXa71t6FCTSaLNVnpSQNpVV4i",
  "key47": "4sAK5APfQjNbUnC7TCCyZGLyongUoAASTjjUVsJYj5oJvb5fFs8yhtZ7pdTwnSPsqQRhuQVGFao3hMhv4CiqcCT4",
  "key48": "4CGCQKSQ7Dmnh9DTHvCmvBSKfKU6W2Ug1Cw4aaY8PQfvSwqoZP9XRbLvtW9qwwJSWRJbRFPeh5DfSRJv7tMfncvY",
  "key49": "4y4bY3phw4pdFATYXe2GJLnD7SZv26iY8AR93HXdMQ8pbaf2s6v137vFC9KMLy8zPavasWZMUHg24rQ8NwXbbVXU"
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
