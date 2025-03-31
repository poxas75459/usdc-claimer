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
    "4bzubSXLtaRH4n7NToiyWo8wFSmpm6qV3gB3JtcodiLuTD3fimDpc3WSzsVuFAsrHMGmm1xC72mED8TyJfKByDQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48SVdtP7ETxv1UBoecKSzKWTBLqLP1172DKYPfJ2NQxHnPUSXnWXuz5wvqraxWAA7gAM8Cs4n3qxCA3jcK4baF79",
  "key1": "mg3JHUuJHRDiFzPSG3PJGwYeG8eESb3vSubsF22GEibwjfMqT8DnRi7iE3d5YQnLYYxukesA1ntuDXgKPrQucGj",
  "key2": "53ZkEJ3Gd4SqkGp6bfjUPdcbxquYv7VUAuzjvyT5NvUKTYWGnFuWQTQTPJ8m282ZnFqwwAdziBuLw4zpvQKqnruK",
  "key3": "4pS7aNo3LaBX5WtoPjbsrmNxuCP2Hm43ecL8zU1DycFsDDHczye6Hrtqaz1GgmHsWf39tqnZAWR4b53WJSx6NdNJ",
  "key4": "63s15ed8saucH5WXbUbCwYpVZiBdo6FEC8NB8b2fy46snJxyy84nHtBqxZQ45UYigCC3mxUo1iaquUWEowTfL4LA",
  "key5": "49fU35QU4EjgpXHF6g9pbkm85e8D2uApShWgs2NHmcqNevWV7badxQwToyfs5hheL6JxbUMdqQXvV5Amv7zyt5ZZ",
  "key6": "Bjo2KVDHwFu6jfUMm2ENaiBiFfXqaHjJHCLFgGD2rdtRF6QMpZYe1yeEF1WPZ9nb8dC4TjQnxKQYJFPsy8LteT4",
  "key7": "2gRbp6Vi3xJ9T4ettZCKSDdW8gkchos4NPDUm72B23yVEBjkrV9K6vnhk1B72WRvHQyhi5UtEGxTuA6Y6eMU2yjw",
  "key8": "32HdmxGFq46k6Yva6QFbmaAbjnE8q5ETYLWGWzYEP7oanx9bn1Zz39DT8Dm9JeNBHdcnHL6SVR2C4vZKEgPMm1iM",
  "key9": "3fTDA2kykxmQZRfYDJRGKYyEx8fagDZTTdkqhTqW7eYsZpJoWZecKytVGjLxwvEfuHFQkrHhmfe3fC49jWDnb3kV",
  "key10": "49wm3grutWrSwt7vkaJmbfQGUgHnEnGtGtpichuvQNCUp254gud8Wpn3g7yDTw8W2d7myBNLgWJkqigtxKW1Hb2o",
  "key11": "4q4n637ZfpEMzt4sosTD2W8qjzUe1a3bLHfVw6a57VyeGiZbiiCUDmDNS13QeMHXD2KxFixp9kPnZVMQXVTGD4n3",
  "key12": "3Fes6Gig8vtCxhMS5aaHADVx6Fzjyc82j2XWd8Rz7FgDcMhXvdD2HjAu6arVRUqoadGkLtGLZpHCQkh7JFTXouYp",
  "key13": "5goqNsH7XLn5MzoPrZ9n45tXji7AkHvt2m32L6qLu1cVzKo8T7tCQjzXqBiDjpNdf3NBnPPoo1x2EzaAphMocdkk",
  "key14": "2wGBKTFyFpSs6mAQsrgVquDqpEkwpjLHbPVVv5h6wq7wVEjeuBRQLuRGH16Su58DyMVL7YfYcVQFEmqCQDz9buX1",
  "key15": "3Jr3DfsQQpwfEtesDij3U7M9BBc88EabnyPd5W9xvTQhLyfgfT2ff2wWheFvgAbHS93ShageoPySXqgbN3HcJ512",
  "key16": "59GQkaCbTnDnHbjbixMUXKwiYu1gbCiYmpJ8sZYj1TmJg6diNZ1USUPdCNuvmYCUogWshM6eyg95HW6Dvoespe8M",
  "key17": "3BiUPpYe9XmauRGbiYiF9xgU2P9zyEWdEU6QJr6UjJWqvReXVn8mi1Tyfb4pcg4vHvqsPKUYPTSXmCDCh5WJq5Ft",
  "key18": "4p4aboi3YQdza5tkEe1FbtanF5PzBDB1kooyDa9VaQjaEu73vu5Eqt4tQQyvHgCgzwMb9bRKaTgTVz3fkQpwM8Cw",
  "key19": "5nvfvAQeC7nEQb2MaQBRXU2VeLjSMCUxobmibneeNf5ycLjBm8fMTxX2QHW5kbiDfffndqMSKULa12DJMN2gJtgg",
  "key20": "2Xfa3xbUEn2BSX2fCDF8e3BE1ejRC53giqMHmc5jtCDuwq6b6dGxdbesoQReLeAUT9U9V1hnnjSmxiG3fWyUjDZt",
  "key21": "44gaDPpNXjLD4wxKSeqnZovUxjxSLyUpD4HxkxDRvXxfTYZoSygeS3b1abfqYwpqNEDQDCQ1kKujfD7gJQ7p6iay",
  "key22": "4Gp5FcRx7hTMgkQAUUTnjoeESXDzpvvsDqQqUD8gPUPfeBmtDHEpfB2KvHYTnvbut83dRBEcmnPJDb11MYe4FMxF",
  "key23": "5vcU1ugxh79V5hW1AKVi2U63r7oBKHnqPfJcKBnUpDmWGEMfFvTTx854Jku5zvm8E4vQN9WUVhk5XD8k7bWrDpiL",
  "key24": "hmKprsNuzf1pCMdJH19Vqx1LGqWuJEsVjSVBjXbZ3pvXHj9j2kvvc8JuUiSp49TPwbFh6vV8hmaYxoW7G2NKxNx",
  "key25": "3P8bq4nC6aYfrhxWeVz9e8AoaxD5WgRqftwpegsnbfErsPsjEUtKzrnpvyEaJwygJE1FNkZG3VSzoi2vh7EQBqE6",
  "key26": "3CsVUvbSBnYPPDriW4tYykGP4BA7XRhYcDTMqFykq1AqzXqDZYb4MfR1aduaz153P4NiXUzK3cxCbRfLiKHbFVP5",
  "key27": "5cb4fVzBGaSN9qnDX6SWQpT1M2v7feWWojkwsArQ2wyggfo3FMWpTTAWaVN5pxm4dcHQhMGDcWheHUcstu9Mhx7X",
  "key28": "ts2CV9r8eaZAiN3x7Prcxzno2MvwKNTY8R4h1FkvQZ5Pw5KAFbkaF248QGynanmGBuvRDsxviyYgfaKG7Jze6Bn",
  "key29": "3fonKutroigqexYyiyw7PJ9fQkg4QP6Ctjkbx7MwcYb118inbKuzsXBixGWDCQ4U1BheGZotYfbmE68Qja58T4gp",
  "key30": "4QbF4K8Jqfsxkjfx4C17yg1W5SqcvktyHpQJiwyGwnesLPAnaEKVJ3yLFDBaYn2d11vZ1HJD8kPwj6SFVpvXBoA9",
  "key31": "3snDWeS81PU8zyKy3MrMy75jDS9zQwGBsYGe2Z87rLwodo4neS8nLX3195cYW8wbtAUBbLPAuUTqsPmxACCf3auU",
  "key32": "4pRwEK3eN2UTRhVzCcmKhe65wS2g9cYwNoAeKQiPF5sqUkSKRuditdkHPAhiko74D3Ye5kMaiGQea4GjkGHmV2N8",
  "key33": "45fwhK28iV1gPD1GiZuqZd6dcfhyQ9yt9oQTKP4Q5bsTdke1kduwbzapVLamm6XziAWPJR3LAYvHnV6XnxQDiMzb",
  "key34": "5HizyzPwzaKqpoKwwS5SC4e6EoeT6A42tMv58EEPdAyscDFtgi5tgqsfYfSmQFBkEZfkYcZVUaVb6ii5NqkVcmgq",
  "key35": "3zdXiakijYZnHZkPGiHN1ti7d9YzaPK2mzQ9hzZPedAYcP1Ruyi7hw4re8bwUxMdxsvjyRk9PjcCePVREhtZcWbM",
  "key36": "5Tw7P3DcEwpUMZbbBBPq7vNcH7mXSXvbqpYmewHVpLBYXQ9ULQSbo2fmrAFUdn6ftnSZ25rht2khtV2DXMcLDeQP",
  "key37": "233GP68UL6ULEanLuep7JCxe5B224pGbuZ5gMubVvws4dBqUKAad6symi9qF7pRiKRkxyhPvapgE5BHvkLTUdKvz",
  "key38": "4uSpL2p4vnR2NY9KmPamknrQZwji9YAT5yWNDo8nHrzgro5gndNcsRRuiDQ5VTUcpzfxA6wqhTCiFWR3C5EWNfTW",
  "key39": "2MmB2SVPW6kzc9MCT8WPHEEVRFdjN2jj3oPVuovQuGRHvZaERZrXFpPYfuRn2PPsYbtgzqUPZRRTSxe8rMP4J9Xm",
  "key40": "3a1JRqbWMTuKr9x6afsXp4EcJigYSAGcW2nYyEbxW9LXhDLGgUFxZkWkJjaYMhPvZYKofeA23qPAfefduo94huRm",
  "key41": "2qn4DrKJPN7b3tHEPvK2yBZEpza1Q2yv1Pji1yy29rD6jc7EfcybPC5L4U3zHYd8jkgCmSBpMZkuDsK8jMWp6BtR",
  "key42": "4LPWjRvzBT4DqkYRhSbRQBN84mJbBDfWRHhwT5yhj64WzskEdv5F7UH5rE2WLdyBk2xv5g2GdAdqE3bhkPgxs8u2",
  "key43": "5j1hqnA86B6mFVvMJEfu27iaoP4Uwtr1Z3eJ3N8pXgTBnueCtXZdTedHb7oiXMjExSok1zKi5dSuAkqygVyXyBfY",
  "key44": "F3V6qwvuMxv9VkRXoVPAacanzWTMxRYVtuLePHDyp3wRLzYdsP3ygZYGvDgt4jfNFCTgSe5Qg7wRWtqhKr9GRbX",
  "key45": "5vf4jjfqUdaogFBMjpCwRBk7kTX5MohCH3mnUMg267heroV5KAE8PKjW79JwyJuFTPycoWqcquPqMLtNDasoDKek",
  "key46": "5Dfk4XJiJELj9JY9U5n3436g53aSrfVzHiRuwwvv2cMioQWhZsCM9WUXRAJiQLF3T4V1xPcZEFFAY1syVGmo182h"
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
