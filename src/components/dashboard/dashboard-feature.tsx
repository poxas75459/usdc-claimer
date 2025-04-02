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
    "2iA6VzBhxAcoQsGkFSwcquvAQEnHanodQNGQSdyeH4RFqygXM7G8XC6a5sXZNeZcf9EZ7rCD39CWj3jMQSw4LBZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHYtBLLExP9fY8vWM8aQY4zsE91HWFNqfKFH7CftPxxcXhQnwyndBAQ9w1XfydqUmuR8Z4DvAD75BbvognrqFvE",
  "key1": "5PQyZPs5aQeVVP6UXoMQT1U2uWQfeGHT58r4fd5R7KSEeWg9AruRvmkYZHVSfSSwC6ubUyaMFdSLpSAvgsyCNWXK",
  "key2": "5BjZCihKY313q7egM7jZQRt46L4BDXWdi2PDmFCZDP5SC6mPLCtXeveUdHJq3EzzvXDWcyaHZw7kJrF3J8PMftxQ",
  "key3": "5c1ZwEzNQEP8QScTRRA6uPbP8XoAYH7ZSdizHGX3cJSD9kuZNjszQGGjn121SETv73KXG3B5V9JZrk3Pyh7u7Kf3",
  "key4": "3ikEQQ4yQpgCoHWCc3mK1HvhpDC7PdcdSVRXDxytc3mByYgt1bpoUegsAJWnAmJWEK4cSzoLPaicPaeFREuuZwKj",
  "key5": "3imqNj1bLqBxxKGNE9rSQMLC6xLUCLYKatScdjo44uDFPQm6FD6JaHEUZfijuYZcG9opttFxHMhtvNpJiH14wEJW",
  "key6": "4bCUbRERrjYpW7qehGvGNgZeVNTkGaYgr9j9L7HjqCFmbY8sBJrSpkLJg7pEga9tTeVuAYDknLe7V4WNT1EWnBNj",
  "key7": "5QxGhRVMNKR23h2rbKpVsJEAgGBWoS2KnEtZ2xCxWNGXeNNWRYX6sFsNm65QwFMMeWaUqjayZE33bLdHuu72pJcE",
  "key8": "5ZDPAiQhgiE5hyT48AtkH5r2QsPdcndPKSSj59u9BaHwDK6SBFL7HLaXQkuwFJX84oKEcRZGoSXiwK9bRA6jhgso",
  "key9": "ffNQ5tgZm3To5vMhUzaPcnGohYKv4nPijrEXpod96hMo2br9hNjWgtNLMmE4pA4tdVJxQz21m6eyq835AVTxNxQ",
  "key10": "2ZSAfxGFn4Yx4Kp8wbAvnB7JqJbTAw3L1QJMzFnr25X17TRw9mR8g5Au5LNzUaPwfmNZQH2nwCqethK6yi2qEnGp",
  "key11": "2HsBpR4NdEKemn485KzWKu5GXE2eD2iQWAifuDLcb2CE2tswJReNHzfFmAvHVscFTEr7wUD3n1nsvRzEZ93piR63",
  "key12": "4b1enWWrY2MTXyFTr26eFGdEtsXRjQMxszui6UNMRxRie2MfuDbLnSQULvF2KDcsFugnpw2q4kp1c473sDzyik1e",
  "key13": "BJR26iYqBgZuaqwYGkabbtFkhoqcKkTJbPdvtH5sx4BLzLqu67HtBUZLHtuwYHGQBVKZ3ERLhdCafoNFabouV1W",
  "key14": "21KuXzVb3mPZZdLghpCj1vSKrnq9s8AeqADkR76VSvxGb6zwBnBHdYQtysUEjb17DAMFEgAfT2ptk8XMit3eH3KT",
  "key15": "4LPqCHAEYsis7ymJpKBPnoHwbKMRMynfy9et568qoYiEbzWWok7ANqh83PK2Z4F6JjYDeAiiYji8Pib3BqYE35eM",
  "key16": "4KDQrJt8GesMSbkkPh5PYDRFTRPzBaCNTdNYV3ma4sU2vL7pJu9swZyH4g8dHU9ARJZXcjnHRqnkRmAQVRuttM46",
  "key17": "9WY4h2DeLSPhZL4fefYnyyHffVwN2pEmKKapiaB2qpRJSFYvopmMMo5t9i7YsGVM9CR3rH8eiKRKTFgoC2FG7YB",
  "key18": "5mn73Wb8cGjQttmxVQyLfHH2JA2gEifcYTb5PAzC5pt1an7UYfg2bJofgTCDUXcMMixNwM165wjmmUTFNYErZcxP",
  "key19": "28iaSQvkp5JQhSvGwBZvDkbLJj7skgXxrBkGFjc1venM1NqTyjL9Tsxr7bGpkv8h7xMV9EnHkNgmRajTqqkz1mQ1",
  "key20": "2c6HvXK4CvThecsf8DrkL8Q95U14bVZngXgCJufqSJvckQswRjLpsUbp7KeQRoVoTDcUMiwgyQVxmxuyLcVtVCiA",
  "key21": "32uitjn9daG1Z8ZPWPMLwLucYSfbYJpTA39NFGK7va34QqKhHvKeX92MaoT8CfSb3wA6Cz732gt8GSiZqcWUjUzk",
  "key22": "5VgtJ5XCVwLFLvwWD8kEKcj1moan82dC5qoN6t2iQAJDuHneQaEZ98ZgAcgysvJAP3XmZLDBRLssZkSNzyatyUbv",
  "key23": "h57Fk5a4o54N8ryDTyNcVnZqc5KadquWxs1BHCnePPiw5Ft5bk49jgw2Bd88snnpLMEDQJh2AC4BtwN6WF9CucT",
  "key24": "3E1Acu3CXkprrZvfi67MHyovzaW3ZmH6YcWvWHwWWEEA6qqNS1KWJTwNTxtQUwLFzpNSJLBXvtN7pJQhNmmGbrtv",
  "key25": "41iXftmBbgH8VrCtGzJKHAwTujkxT2CA1ccrHJEHxUuRD27Nt7SRu9yWeY19LmbNstH1qWT3hEDuB7A2JZfWyNqV",
  "key26": "3CLDErdZqU9AvbzyBFCoo9f7vgFw83xoV6tueTAfQkzubF4cUbZVRCTLxHY9XNxGhUDUGZWLDWzcsMuQjqqVZYfG",
  "key27": "3B2xTAjPJak7BWRo8vCLQRnv7B3qDku13cHeFaMKFfBU4q2UU328kxYn1Vy4wGA7Cy14yZnAn4NWcky6CnhbLkWr",
  "key28": "3xWUbHivHgnhzLLqhiC4DTsMg8LW7p4movB3dvJisAhQsBiqEPvTJmEgfKjiXYjie5Lh4V4Koh6HeDWxQHVYE8bn",
  "key29": "2LvNhF2fMdGJhQKBibeyPFfSFXA1zzmUF4TQYKWGL2bVSSoiaR44TngjsuM9yHXtR81oFpYkCR2RkqHbWadhXfCC",
  "key30": "6iVGHqfSVBdcczGbyMYFeTXqTHD1xEcfZhdYRf35rd5P3NL6z5qZrP3jnkBu4jQhQYtepYwjW8FxqcAS67Ua1Q7",
  "key31": "3yB58fs9V9BSDvee7y5sFUzjPErEgaxdHnDCaWzX5bvcUdhoyBEV91pDKAuuBiZYPZvYMcsKkEC1RYCk5CPFNKhn",
  "key32": "4rfwaFaxEpvdaFGW62cM7EWotJUJUdYaqi8A44JDjdHRrC32ugH9CNt45fm8aNeZouPbwgXcaZEuMHZiCxU6ZsYx",
  "key33": "3CFHUJ1kTWSxWmZ79jwiRYHRAZuwud8zQ8yE3SM6N3DtEkTUf6UDQY1jGLWt86h3mDuNLY5cXFNEjBMVD3VvBFcR",
  "key34": "xj6rkDJBkQ3jGrESnA6cM2z4d76tc3HEpzZkDUuxaeuMdXRsrgwSfUUpBLA1qwcVpEV3BSWtEoNngSfiWm9VtDo",
  "key35": "SkuroXvzE5YBoQQCmXNf93fqguCCwFXfyFpBYzyqQQSoUbMaLiPsQpBtyDa92W4Xf6NAey1XX3cKurKsyH3Vr7p",
  "key36": "4r9L4ihNkDRyivVCZ3BE8Csisu8j5xbATDVm6qFDK3bQU2iykSdEfwR5X4Kv8v389NpKaGiCzbPqR6fXw2zKWfLb",
  "key37": "2jYvdTonS34MvY2iAFS3VCHg6sphUbM4dhp8AcVYWdfxCeJdnuzvgpK2fD2tfuC8cN1NAvxCbSopamwKEcxW48ji",
  "key38": "3fj6sLomLZs7GQMRdaUYJ86z3RR6Zrbc5XcKrkhiSfweNavQtx38FjKZUJ8VrSqn7m6Gp5RpsEkWgmQirH4LGNWS",
  "key39": "3Eh3Ci4y2YQrvAMeyspcGcQuftrZUQ4JEYZUaEDrSv8NvJkjPcbs4wKGtQEWo23L9KL7xNGnm17QnEZxxzwPxT8Y",
  "key40": "3WxM9Ee7pTqTFURCyuW2LAGXdFqPNCRMerC9USBCbFf2dx6CxXZn7yRcTKcfurmkL6TdT9XiRK6F9xoEeqPYRD9f",
  "key41": "QuVXkB9buTCE1b2XqW9ij7Fri1T3dvdKireADVWfyS6vviQeLAKTKpJQtos5wEzDRbj1ahNxt3sWQnbDreX3XTD",
  "key42": "3VzmSftjEPWu9gj8M4iossp9r2Y4cLSWtfGBNaumu6oRsFWyMayt9LJcmoZwtxHbiCwBHQ1Y4gQkvtA51uVeQfMA",
  "key43": "28nhjifaUfPysiFXFrgQMQm9G4KX39DHpmSuSd9P3ubumS6bNp9SDSqxuusASEMnno5ra3YCqPtenEAveKtSnqzx",
  "key44": "2U83ErShxhZJaFoaFpg1nx8rMF5b9g5PwWMdt8xy9GFbm63crgjKP1w9ekvYJopMCKMTjMbgokmcL7km69DLELS1",
  "key45": "3FVTZsP9essxwexbaAd67KnkPAQNQTfnhJHjYAscWJHERwE6ukyHJfUCGx62o3u3mx9mdzzb3gpoL7jKA2FwSQag",
  "key46": "5N6khW3pvpitrrAz1grY3tDFpgr6CvPmJmpJzG7ExBrH8Yf88gft9z6yDybX31a3TWn8FgcqL4eMhqMVDJzej1jy",
  "key47": "2VhHxEMQm8k2uM8bthTMF1oZ1fUf7JDTMJXrg5WFQUWJj3FhrhtN678BD7eJJQH5K7YqwNrPfovGMCvCxMtNSLcQ",
  "key48": "2vpb6359ERLDXvCsQU1WbMaTbK7B42Jo5Xdy6BY7opAwoCgtncthuCYT7SfKTDSp8FXCZ8aubShEhDEYk9SacH3y"
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
