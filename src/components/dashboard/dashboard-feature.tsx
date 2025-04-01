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
    "4PkbfzgeT1qE4dBCkRiHKNRvMjNhSLszLUE9G71vcuFXSrbbZ3BJZxCiSWGCHJduoPxrbNgUZDNjB16UGJiYCtt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4enpgiaJ8Z2kajJ95qUsEpMPQtfVbnnJYCQ4VZwCqUDjNFtYezFCD4nWkmAvyHhFKbz3aRQEpRoKpyHzqZ2kA2A2",
  "key1": "2V2GqwXS9RCDHTzRNs8RLyCqU1YfR3vVVi5cNcEbQZx1bQ8bSfEgbmPgsLAX5hWXRzpjNqDziM4Jvypysqf95D7R",
  "key2": "3AwGphWBuJPTMZ9J8s7FTKJRKPGCgo2rPxSuUcveR3KYaNxYiRpU5SAhNfoHfDzWvGeFUDzSAvoyPXs98j4sC6i5",
  "key3": "roTEAb6FurKjVLxokyW9ALK9xarMuxYwdhEtzVVZBz1AEu62q6PtHPCWXBMmsPuLcSh1jv44etwfRuGyc3nDdDZ",
  "key4": "594Fw99dcxqnxyRdxLfWsAAJBLhWmnzkNvReuhWNET6EoomN2v3VYH5k96kdJrc2ZFAPQ7fp75tGiAHa26v6jCAk",
  "key5": "3fMwKbs1qYHzbUkaf2BQxmeppkJeg2UBxk4u4WcG2jMBmQKX7vv3fjnXYiiZT8RZfRhHCmeTNw2dHbC63i8JK5Sz",
  "key6": "4QdWkGiiVZwcJWpbs1jCaciYFVRdLqFWkcBYZV5KKoYH6sVp94DfQJKzzYf64QTEJo9vfzws284bAvzUk2AJVwsX",
  "key7": "5gRNR4upv7FhJHLMJQZuvovPK6gE31PxmbUpEzj2t3Kw1qDf5Ncf48DFxWywKkwSJ4DPMupWS4wSgnLzA8aPFbjM",
  "key8": "Ryy1ZySsAh5vW1nejHLgN7BYXuouwJv5r6KYcgoLzaH6TYTWobJwhHMzPL7U8R8YZgy6VAYQPuUtMTroYqGdzUG",
  "key9": "4EBRJJ74hfHZHvrdUnWnQe4NMtww4ZebfTnh6zjfU3BF8X45HwGbVrVXdovKSUSjfQCYi6eq7Q8zXhaB1VRFKkKi",
  "key10": "N6NUyZtASjp9vaBrGTowWxnDrGsrNQ7Rx6kGkMqG4APYGfxNV5pDhhgT5uX9c2Qx9Ph4aPA88Vz9QNG6djW728p",
  "key11": "2P5jebezppS5iH38sCAtCa6YRhezFwpVNXn9AMcjFzcwyoGMKrHAGrkgnXVv7hc7yjgTiNkC5ZSkBH6rHtifNtEg",
  "key12": "2BfL9cj9PDPnE9uJ4FGBnAfH48bwHjxcWzVidthHRMZJDYEHEkcuVzGHx5vCGqMohJcy3ssHLaDu5TUiMVcA3Rv5",
  "key13": "4EXZtqqrKhKqXRhR9vtbgw5BLVZBBdnQu2vmHqcQu2Ezq82Sd5jKVLDhKZUZ9CqZE3Z4Nx25XCP1Q4QM4wnCEE1c",
  "key14": "4LHrnoaXPJcrFxGw7VbMJu7k3M1vSVjtxQxRH6ENFGAVDgVDdLq3J9gBiPb5CwZ5jtCywqwhsx85bZF5KeTqo41h",
  "key15": "3yATAie8vSenHBAiRzHxrSxYdv863YyrybapCuBjdNHnx349bK6S4bD6SF7EfXzt4H7cJssguPgEb3VidxMJAjk6",
  "key16": "Z1Fk7fXPaNJJLp5n7YHMqfhBU8xuuruYiJLi9qYBxCAVKYuyNtZy4nzK9iWhYf221yY8cuNMwsiqZLh9tkPcNzz",
  "key17": "47wz6mFtwCfEJzb8Utc4A1QhUBdMkeG6WkLUnKqTvS4bkGxUMDgpb2bRKwJQxi2Aa53asqjoSmgSj4vs2Umc6NsG",
  "key18": "4MQ2iBPq1o7u98VHpaabXgAHfLSVVXt2MMm2yey4zrEnna7jiRW72kswPxub8dFBnJxQvFBqNqteQQQFi4UQWsor",
  "key19": "4MLspdf36bqRyVwXXZYc4Jj9Q7tuo9DU24NqdFSGJaDJcQPiV7UQKu3tc3qbqfvdBYYiMGjcbaPUeRr76gNqs599",
  "key20": "5FPex1mdRLMe72juLsoNfJsjQuTd5oZhvvXknNzrFLigmsJruGSkzHCMQRystHvKNiusz27JEJx48vpJ2T9NrX6L",
  "key21": "27fmN1HNq1keLMCiBy7vFk5zWvjhTtzVd4XTk9yjXWPnu3zK2qiqWfkbubTzqJheEzZucwgunQrbK9noiRWJm3ej",
  "key22": "heqMrJy4qLSJdpC8nT1ZxEjvhVJQ4QmNhspyEUw1BSy5XpAFNN32r2vq42XAs7L2KKLc222a2kS3A1Jy4P41uSo",
  "key23": "3g2YdKQKEXHByfjfP8WcQU5Cy2r6bis9XgS66TYkoLGza7P1Ws7ZGm9RnNwu3LwbqvgTR2m131ADwR1brjx1sYPH",
  "key24": "XYudo7aUoZKzLKm8mADa7JxYG4xGQGGzdToyaf5vZ1JaDyTMvbaAMMcwwF5UetMMgjZTqfSmYrsKjqJvzG6h8PH",
  "key25": "593VqL2kNniYgsoeifVmRA7L5YL3GeCN32GHFeSQZnBPefBJvBpezYnneDd789qizdh5xQBTuSUYCYxBZPQGrafL",
  "key26": "5S2QepABUc4v3gN3Mgpro3gokTZtGPQgswMUQUmMCt5Ecpcr3ZMR3miqDaaYmQyM4n7jgeYvDRJVWU4DFyKVfxDx",
  "key27": "gwUUXjcWtS8DPpNRHcwr11wZKwt9h2rgHVr8quW4XMtKao4Wp9bSLEGvQB4yKRngnuUWV4mhMFCdv2jnJdW6h3m",
  "key28": "Asw2bDbi1sFXQBaX96wVGmNny7uGJSG4xoipDd4nMFmhjqasusoKWhUPJZBTYRZCtqoKdqMUzkwXYL4wCaxPkXs",
  "key29": "4bLiuc2gd8jggyLTMKocfbhs8keu83KeKy1c424tYCjzMhdnrqb3fEXDA4x9UdGwnBRdrcVU6SNgF7qN2YzEtS6d",
  "key30": "3xfsgvQn8SyNogFq2NK1jDtS5xjFfWHZe82bkoHk6GZFywDYBppgWaRqnZEHgmviYxNVt9xEa1EdCmJMm4HvNG3Y",
  "key31": "66vXXBvNwSLfsTs2VuwSUFCdNxF5ivjCmmSBnipcipLacjtDLkb9NUWdxWsJycBP3SAoosr2ccXTEb49tBXMXqUM",
  "key32": "5sgUcR2c57xQMLkZfK8UUfGb3fiTZMrxujXHyxibHNzX9fwFLe7NBPydWpMCiqEdVUPgSEVdRG53kka664o7YHUA",
  "key33": "2soErHqxgJQFUEixCFiSzaN52yxYeXH5DEoQRytfSxfnsxnmAzoWtMqji97GVTwNRqMeFqc3YEwhw87XEFkxAANr",
  "key34": "27k5AZMWPqsPHy6QubCTU179JjR3jai6xfxu5C5K6Ebt7CtwCUTJUNrCNRdWz99qXgVdpS6X3NHXkuS3157ywnxR",
  "key35": "Z7V64sHVNvyKV6Y2gACXdaDZfqV32986swA4WZqi3DjXF2NrjBKRR4vZpLHCUQ6qgkcJvs4LUQnRMn9CaEJhBFa",
  "key36": "5NZfhPW1pEdRe8bYnKDNTBY1g2n6WBHdUpEdE8xoZfx8ZUm5iK4qqPXxf1Ar6LAh3425qnX9GJF176c8UdatnA2e",
  "key37": "enNS4dAX1Cz2eVRB4qBSsEEEBcmNjHJvAGeQ9JbqDEtkMGb52hnihL3uUHVtSRp2oj8trzdA8mCsYco5GsiJqUD",
  "key38": "3WiQPCySMJ3BbXpREZjUjYQirmNkg5ETBBv2aVsVEerpvSqywpVLivhDfQi3YCPjxVREB6AjuGu9hhiCDumyCoYU",
  "key39": "5QwaCvgFCw8UE2raMTZkqJPBRCNswaWPS5WAeTpmgAzLEqwG6CiHCxmDNQrCXBoyQhUNA9ATrPooQFVNHzrdTBYP",
  "key40": "2oXnzPEnBuY3XsL6RzjnekBsrTFDh8dbLjzDArDWBEu9SPmqBwzcbNSNHV3tQdo9LRTKScarrdqDZWWxDn5MHQrr",
  "key41": "eL6ySyuVq9L8rWSz3PSpb55Eva7tsFDgFfdaveULn1JoyNbjQ8WAhssqnPALKNj2eEEVh22UHzpdm86uqRgxPQB",
  "key42": "2aWLzmHgcACFdEarteaMRghuLjGTvLe9gz4f4i36weqoVcvjUAjxU7jGXxdw71QfVasPFixjv7JUVw9d5JXNNBF8",
  "key43": "5Dxm2scSwd5csC8wVSnpeFb3rRN3T99zyvdYFaYU1kvUKxLF1ycWLQ8qMRx8rSLsSNP9GtYX6or4z82GN4s77rbv",
  "key44": "4aNoJ6CoL2N3HVhR6VkBetQTmFC6kiP4kqpsrjiSFh6sTyPBLVWk5kPHSZJsGri6BnDi3C653bdUfLRUnmD25nsJ",
  "key45": "2Xriit67c1SpcdX7Ay5RAtKU5uC4wVZHdALgoU9X6b8Z55p6zKntoxkBB14eoK68nbWSPss93k5RFZ3ZTg2q4xsN"
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
