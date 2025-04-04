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
    "64LpgRK7VFo6GdaWqra3WbJdtdRqxDqwQzoQG39bhdEs3WhpuNTzmBMauTTPZzfDFpvDp74Pjwk9Fto1WpjLTdz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dBeToe8A4jdCsnGrL6nYFQZjGhaUHFV4Tp82aDogAFxMHB6UMcKXs4yBHcFatMCWSJgXNpKwtWFTwQzsaySq81k",
  "key1": "2jeQzYiimRj7cfW4GkEx5EKwytabr72BzEHgX9S46J5xL4F2AG4zraYHumHg1t9twzUpMB51cFJ3TUkPWUTrgvTG",
  "key2": "15RjK91qUn8jw6imf9BgUL4JSrY6kqGgGcreDEWCwo3N67BBhB8BZzCr5ikuMBTBibtBAjxR6JHUw3xezfK2xiK",
  "key3": "38xKMe5YhuT4xFbRkD3pQfSN5Gv6bckC9dX5jSUVD5WnnEW4KxJTgbvuppgFiuSQvHEnjrqDp6opNAq3qjPxh71X",
  "key4": "5sAA9hsM6rY8uFufMKS9FFXWwo6EoTM1RSeCWaoGPfGkkQVzBtJd5Xr8jRJ9HRJUdae5evh1BqT1mJLKVpP4CcXV",
  "key5": "56keTBYzUeLz7mA6bQ5oUzSE5Saja3oRzEE3e2MZRWLjpvAaYM3a4iNnpgTAyEu6odHd42JESZJsGmqMLx42xgyZ",
  "key6": "5WQ2LBmxrhsutqZVaQPQ1giH1fJQPhYgPEqBSsg8BwmYsNz9p9bf1W3VJqTrgpohvGHY4j9tRVhb3Ha9iZS3SuoL",
  "key7": "3E2SnLeNz2DBcDXDgL39AxvicG9gRNtaiWSzMkt7pYTRvoZRN83A7AHm3a5EfNB4LemEH3GCGS6a5NKbBsapiQGv",
  "key8": "hmg7BFGaspMEZbv9HRab5b2cWNPApy8cqBnfQGNSZ5Hou6R2xBTiTVZAax1dHVwd5X1MHNUWCTFHUH1dZuxJFqo",
  "key9": "cqAiJDGCj5u9ye2VSFbqzLUmvDvN3LKVcygav8RfYEvyv8zsR6bjjT966JMQRrauVNfq76E9GdLW5zZBQCDXbSM",
  "key10": "32T9btodoBTqGdtN9tx27EEDC7fVvuLyq1gDt79UD3Mo9SFZfjGFwvgNMFrNtvSmrphKRZXP2w95FFuG3MD1AMv3",
  "key11": "2XssAB3vLEkiKv2U4UrTVSRWz9wEwVnAPWRrZAd5ehAKNyZhbLPc2cd3hRL3HSC2M99kHFjV4SXmZmUwmrhi97kr",
  "key12": "5ZpKVixJgjLswC3WuBaiRZXf6iJkiN2h1W2bS2ftcnmNe11uAGBeyVyU4iHCXAdgqktzm6MpGw3mexMHb1y37HTg",
  "key13": "5DQNP4YNjbWZwdVrtcr8yisB7yXZS1M1iZ9FKQB1mZ8WWzbhqJFpbvdqn1QSFgvUpujUbXAj2ayigdDCpMFCFNM3",
  "key14": "3QJmcSchmfq3AsSJKEUbu6uoLgeVHeXDM948N2B4UeEPvvxXMdtCTPrqhECeYzsVq1mvwNrC88YWf2csCKPDffth",
  "key15": "5wcWPGXxCpLuTVm29CjQ14f8vpyAtXFt855Toik8BQj9v4jbbArmUZM1Mjmmpcw1hwRwiKbf1vcpEZ7EJ94pRuP8",
  "key16": "3ER8W4NN8J6oEhPthnfC23NLMK6uL34CBwkM3mVdxu87Zsazh2mRs7AoxDmXZLkVwumWLYuGBwTsJsYiWibX61Eg",
  "key17": "2WzW9cG3wmZQ1BGhfx2dn7Ysc7FCLGcgn76SAurRcaGBcELWijCtgFKU3hZmTDnwH8ZwH1GoUyJN3sd6UrpfKVbe",
  "key18": "3SuB4BjfkLtkmXM6RWhFraLoMmbQ36T6NvE9AFnC1kkXaPqJESVuuTf8xFyMG6kumboH3ud1EQ8LAiuYyJANmb3D",
  "key19": "4yhdVicuUBdkFzyn9cE6CrakDPLNfRkMzGvK86NH9xWrsYnEuc2jRrG1yRRJytKWQEg5q6iyDgoaDHh5k8R6XhJZ",
  "key20": "3HycQ8Yrrd1AJMrwmAhbPhp4NBB5wafnaxgrHJ4C9M834jS9ZtWFJKZFU7ZDqpHxircDcUs2Ch4WbVr3ZVeJRLKx",
  "key21": "4oT4GXXDLYtoJy5CgwbvbnTo3Fpvr2PpuyZzWkxUe7YFnExkkwrLey5yG3amEmb5PDpZuDKtZzNibdaK1B7g5bTz",
  "key22": "5Xz9Hj3F1eL2rbiqqsBAc5aZWwfVG44XEcQwgYKLzM5ky7GmRAH3zWVFJhcWLRqsU6mbNm5FwzxkoJFHtdn4Ecoc",
  "key23": "5DGExtoyudsNhQUUC6sQrqCixCA5XX9iAKkxGjJjf3UtdLys7dvz6GS4H3eWmiVb8o7XZPeiHVL49Yx8cV9eatDY",
  "key24": "4NgFRiHNhtGUdvkN3m9mtgjqN8rzYmMzNqGHTCkhoXZezRUU7VoGh4YUfiTRNcT8ceM5RgwTKM3Xv1J1m9rrVbky",
  "key25": "2TiiTEENUM477HqGWtCLhJ91LJLL9QUbNrC6ay468ZJkYfx3Y8m51arTHayRAE5KHqnXrxWaStXVT161xRXqiJPz",
  "key26": "wwzG1TdQA7M2c1rVudm3TqAJtu3TUcF85RAgS2hNWw1UjmZt8xVtgrdvd39EZnB7ZUDAvDkDL3gUmiCMXS8aCCQ",
  "key27": "8tmBxGAg7tyMk6DnwrzSDVFrrLLw1LG63s9JnPjUeCNtynrGDFpCLUb2knhUShZPS2FWDy7wbJPEvjXyEGhmTz3",
  "key28": "2XPvUqs3kVsSZ8qPNgA37bc2aEsihBEZqLLYsVbxUeRrHxydtTZaipGGwAcdJ9ahoQnDUMDLU1wZFr5SKdtT6emh",
  "key29": "7Hs5Ytk9UyR3C7xaqDdF1pAY15fnxjzrVanbKcZyTm3NQgB54nKyppdQ6uki5ds7MbcFafBLmAyV5keqLNfigqK",
  "key30": "QAgsjbdf1nbMsxJaiNJ5vDCh2CSkWNkEKMzg5egEg79SEq94AWmZmH9XHSy189FU8tTwBvU1tYxDy673g1YQ7ev",
  "key31": "3iVp7Wc6R7DMx14sBUzZqN3PBSKHZgyjgy4ibuzzR7FnYnne9WpvN2zfp59zqtYpdExfUGnosGhGStdToMczZzK5",
  "key32": "3swRDNgNvURdhZAnM8jKHUvz8Bs2UVgkr5PMEMBCzqNZZy2VkCXjUbWSkMRvak8qupqhX3XSqWAx5Ttu3WgMCBze",
  "key33": "3qAvGe2ZKJTU9GbH3Bk9HaojGDWe3WRJYEWQc9L6xsbPumtHF5z8Zvs9R4UHY6gYyX9r5mjUs3tPceNSmtiAQCWv",
  "key34": "4FiP4ThSXpT1gQXQvwBZN5sGyZjMZ18qzBEU3PxRSQfsrjpDvHeX55HxaA4zTcpv9fbuX33hy2nqTPaWLDxDh3Kq",
  "key35": "2TUffmo16xYjLa2EhK9EBcnsQUifr8wKzGnkeffEU1tVCM2uCwigCypiMR73493Gsb7TRerscVg8L4sE5yxsBxWd",
  "key36": "4tsb17wdbNujXxhrwgaERxz6sp4JgTrFX92eTtFRJZD9doaGCLz6BhfXfwS5fQnU2C264ptdg9HLcejUFXohb6XV",
  "key37": "31s982rJnvVsCzMkdFgRxSeTJyFAMW4F2C7ig9iGqwfx5wNX7yCftSfdsCU6uVTqmkRansaKJyWU7adATGWSD8X",
  "key38": "HzCBMeGcVQTGdmdmwyqHvsWk4gS9Xb6wg7DmFdcUFB1qhdBrTWXpUiTrT7rL4PEMcRFqMYAuzwbsncY7kVFSLig",
  "key39": "3YGdHE7sQiyiarirFmhJYRqyGAxYwBZiGo5Bi4XCYBgUdnsXtvu3dRHp5U8EpjJL4CA3Swb4Af6uXBvAmue6HFZq",
  "key40": "5RaZjP4s46mNisYmodTP1wtAfAhMDkLnqcitmbCAA1QsqdemD8Sw7wTrkoZztTdv4snkmQjDfYq4NpLSDynBiLiM",
  "key41": "57oMUsBBAa5Za5kjWx2KMmTnoAYFemgGqPjEaRPiAnGD5kywaPLgRBNap37ixKpr7vQ3E1NRgSSz9EecwPv9Ta7V",
  "key42": "33dVgnKfBw7JPtiLjFPMRczJWxAVsGRdLi6iXAG7VRd6tJjUnRi8v6XsrXTg17RjP9ok712PX4dTSufTTTKfM1ys"
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
