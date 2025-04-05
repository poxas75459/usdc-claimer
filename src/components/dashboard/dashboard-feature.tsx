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
    "2NXvzLJqfppXoVzebwBCgEfQNhSQa7tcdbv1AxyXsGSDyWad48517Z47Bs2A4tdBbRfCDD1iaNKFMyborMYEq1hB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zYoATub9iozBdf9Ci7knxsL6wqpsg7KKRAHTcsnGpRh8KcPcwpnxMGqX51FAQ81zmHA5mpx2f3m6NJa9kR9JoVT",
  "key1": "Z8DddmFoi5G8RrovSFJgroDo947b9SwCe2DRwncUskm21q7NJjrRiYPpSeQgMhuZpRziN63DMxA4qBvDYbv76Bt",
  "key2": "519upbsSN7KK3QravZzfMFQyjrz1XoQ7o1acuJ4VCNks1yt1GumvmxsBCFm3cnGvisVSPcVVSicyR1bfEUyW89nT",
  "key3": "2FqMpRQDRTqmJC8Csm72FZY9pnvgeTDFUtCueSxinh6yDMkWuWUtmeguuCmAfdW4ar9dEEcLpxGuz7zeDngXs8b3",
  "key4": "3vdZTiohszmqCYs1ahTkZPY7MxZkuqPsbz4Q1YnPJcg6EnujtPNyPYkFtBZnkgLAynjU7JhH1UY7qUsys1bicZMY",
  "key5": "o1UeS156dvqcU9Cd1u7NCVSPba6e9wBjst5u6fyQCKDGUM47ZCpPxWs4dn2VYXw3P8JfWgjxnewHsKZBQGfSfoV",
  "key6": "3MFjHh7Y6EMRESi661N8c4MxFwyRrUNvnMY4V184rR9Fom4UxDaMCbAupwJYsWysxZNc2giUJ18jN5VjsiuTsDAS",
  "key7": "2Ms7XAcvbzbZoVEbZ6X7fNW2bFNixMrakXSnTRqJraVbXA8T83MjpUzD76Qg7maeHuPzZDL5XPBMMq62j9ZRN5nT",
  "key8": "tZ4LSVjTn1qCbfZZVoyo8xDFQSmsT1hEALJ68Wyy6bjK2DxPpU9m6Zkhi5D51J28wWHkPnVts8KmjRGNwwGyZvg",
  "key9": "5qzrMqVFzYn4HCVnVyEc3dGCw52Y9JJs3zgoUmspeADNcsMmVZsk9is4ZsiFHoVjnU7nBktRozKNRBFNRFWpPxS6",
  "key10": "3wd5qWSYkYH1yADXksDP4TzeGKP6BmeeJcyVdoG2nFAECaC1281izWLkxrxEoqYkdFuXBJsAUHD776fY1bSqf4j5",
  "key11": "2USZmYj4kyxNtptnHCCgQxvYNud9x6dDNXPmPc4MEPvqjqbeerd3SUD8BQrSF4JR74m9gmpm741YYWaeYRpd2eYf",
  "key12": "5bSzKqSitcTy1dQRjZVH7KtFTkSvCJtPvwvcPCNHoZLe8xEHrarWEP5SApABMhQFt4DhP2fixHjwQWa2mp4uCL9D",
  "key13": "3FhMxuARfYkL9oi4d2fPz4MTW55Gia5mQAbnom7MwF4GrTh7os16ycdsSVNy8pK2NVZTLm6ZutBXr2sSA8XcFYdk",
  "key14": "2REYb857qJjdGTZDCRiCsoPRqNFzLGra5NQzQAXuzrPiipow6UxtjJes6ge9LSbA6ht2hHJ9ZKtu3kzTW7awxDvr",
  "key15": "2SSHBYC1NMYt6zejDTv2jFYiDHjTmbNtyCTMgyYd5kzS5AQX5LqRnyng6JQ7ydNKHhbT2dhLrUwPCmW8ZSfKs4NQ",
  "key16": "3LNVd5jcRqxU6rKnMSSzAb5VKHr94815cD5XqtK7eLfhctvBHwxcbBkNEi1cHMK4RVYnXu6TxZQDfMx1d4pCsDUK",
  "key17": "6iKNjB2uWwetyFkUaEFrSjStv8o1x6ASmZLbUhibganhij9Pfyh7WeZg8EivtmSFKTGgppRVHCSPwo6WwTD7eD5",
  "key18": "kMcqPHfXvbwvU7yH1wQBHsVFmZagYx5PqKkU1p7xtAbVXZFTRyaumGNFgXV2hZVzsMdTmBwBAuxmLDn4XckGFL5",
  "key19": "2mPNN8f8fe1PLUkujk4SoC5p8mVuorziNRdKgEdkcCAnmtEqoaHRASjm7gjysWKF8z8Y8iMRJN7mSc37p3DdyaTM",
  "key20": "2oEv3dEMkccKkCaAxRtXAhpSd12sYP1ckeXN8ApGC7wg6utnSHSTxwGQxrzGbLsthRKcALn65TNPvZuHagGVPYoG",
  "key21": "5cMsFsWGzrfwEP8EmhMsVtBvPk5XYZqTRxC9UuvyDuiD2PewxTTeD5GULZYuS8K6d99rqwFGAihndbTAuPEppaBK",
  "key22": "3hH1z9LjpVCGg9mTKAz5rgfo7xyQR1VfRPkY1xDaH31RuNrcAPv9wzNKG8mzaSLXKS4o5rQwrvh88voAa59Ex7Yc",
  "key23": "5QepxLjx2mDut8fM5YCbFG17Q3bnh2674ohVH2Jx7UJ9paufKyKUc5BQj4Xe25srf2BMWSkxF6RPZ51W3CR728Zm",
  "key24": "4K2bMfLkE8f4LtwhJ38pv4AR28ZbqjrNnjH9KDxg9FgbNXV7crYhDT3gpxMiK5ju4vWtFnatpQhf71YwV56bavGF",
  "key25": "33WuEE3BrXadP9LudSV4gGdjfAKUfQG6KvprfMktcisQjvo1V9CtcE6yTzYaqZ5X8QGemjUu3SNFZUA9My2Rwr1K",
  "key26": "2UofiWqEftAsXMLZAzJJ8KvTsrnjqdUnDu5LaxLgwyoBNxHV791y9J5ugDwafbQZskvnUuKpAFFfVVK1MTc13Det",
  "key27": "E4EM2ZuBiAd7RVbYbHBvrWVbHgz8yP3tcgdRvqNgXSTPr18PTRJ7irtrhrLFwcpYCaMK2LUz9QFXYJnBobXVCkD",
  "key28": "4Ub6C9PP484b3YqcNT2mgE868hUBE2HX1vDGVPu72jHnJ4QbamCC9poWHeEoHgyxgkHdfj2Lc4QmWntmfQUCR1WY",
  "key29": "2w5hPEAbzcrCogwYEDpazpviKvRxNuTVjQ3Q5CuPDf19b7QnZG9ai7pjC4tY65Bkk5UksNNGh6cb16ZEWp33xugJ",
  "key30": "4tQzZJjy7cDi2bM9Pfw1U4CAmuxd1EgwLP67sMM8mpMNYK5xCifDt5XWnDZcgewjU6eSof8VNUfz4xEyVQdBkQyU",
  "key31": "Xwdbgb71CZ3njEUvduWSYtRotQVowANWvFHarUsXPvMnAV5mYPz7sH9FVgjGA8vvRrVjwN2iKYKMK4wm8ReausF",
  "key32": "2CPUp2Log8FPbf4XPXkJzrYG7uaiXoaQjSBYkgCFTBNF88NeRgJf8AdWhUKab5tWASdvnHgRFDGWTefEDNrYKDS3",
  "key33": "4uoF4HryRt8WrheXNQpLafBZwsyAsEbM85g256wbYLxskuYofEjdUYhNyHF98QPYQwfUnjj6V97ygQFZ1wSr8nKT",
  "key34": "4EEjJ54myDqeLChBg54dwGVzGS8GcHJ5FgoG8JFGvW8z9qAHWqhBsvgHqVmpGW3RBdVxZG7JxQmemdPbxMCbWLed",
  "key35": "2YR46DjdGiVQoVYCToptd4cBSqshJ6Y46QT6gRrRvLL341D94co4XYhNUdFadPyk2ajAez5rYmqbzE8ARUKFHnwa",
  "key36": "2XPGmBB854dZQSzV7Vr2voLWQVzJgHxdgY5srFcAXJbbSfuFnQDyVJJVxNLZ7nuW6uJt7JoMJUtPo4JDQYK83aRv",
  "key37": "3jbPS5X7qyV2R2hPoekbz19qEUuAAJJCoAHeyhxfCoqp2wx2UXkg18LPPwRPMXwjWb2w1ckcyEWrGjw8wNfaGWNz",
  "key38": "5d2d1hHW4GbyRgBE8Je23tqiL997vjHNgrRjTCCS7zGhy4T8Q9eezU2eedGfn9oiux3SB4MztU6JWUmP2up16ufQ",
  "key39": "5LnKFBN5n1wEn1ncAJDugNG34CPuk1xwkJ8bHtxgyfx1yueUg4dSoaAsuN73gKMQ5UEk6AYoGwwcGf2dMmFJFLY2",
  "key40": "2nFGDm8XRL2Y7oyZge5YDhpdbzANLBfgeBCrs7o7B4owRd8WfJZy6ZesNpXhAfzyBV94aCsEeLyZ2zNVFocfDpqb",
  "key41": "5dBjXF87A3bvKLVnoZST5H9qBYZgzWVG3EME8kSiq664EWAutt6vCdXy4Sz8sGfYqABxEjZmwfqeGSsfB2HdworN",
  "key42": "2qkAaDA7uCf7T36nTMrJFUboKuRnV1rRc2LAiV6KSxC1Zs6G2jc1haVnvbGDdqFTmYDKuL2mtpTe4RCFxoEMJWbP",
  "key43": "2zzShemzmxHaVwibhKKt1QTGjCLN6GZ8tncyBybRUHKniuRokb3bgxY2m2js2RVVDHg4vrLozJgmZSZziECNqGma",
  "key44": "5Sawyy9Lb7QAYm4MFrcBCCSW8VodTtVZ7nxrMVZJVGUc5Uc39HyYtg6co8gHaqxc6f3gSvLnsjBLmXfVXL9ZV5uN",
  "key45": "2LBCPUeYg3Z7Vie7gH9b5Yr4JhZtF5MUmeSKg1A3rkCAxxMXnBaSAYq59FbzMTQ3jZuAJDXvuWEyyUbMsQhMCdMZ",
  "key46": "4qyYKnqTVaCBdMTrSTUn8ELgpPCsqJThPhKxQ1KhxfPZxMbgggdJRdsrA3U2vuEtoztopqnMBfowgnxfRzisJ2NS",
  "key47": "3kLYdi9KwF91Hvza6FuHpeEU5t8Cbzi6p82VxvtGSLVXTUgnu4hTEs4Jsw2JaQV4dvpgHn15kwqjjQdmRem5EHfr",
  "key48": "67mY7FjeSAU59trV82sdjFM2TRV7mqFpLdxVB1ft2HvqfZng7aWawsTbJY2TQGiNHk9LheALc8NGP3cTghPETLhQ"
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
