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
    "4jW4TNtrftBmhmgu7Rx4vrAtX2UFEvJrXRhHb851vzKAGVRHDGoBEfQGQwd9MMYKThyeJqWMmgvh5gLUgRtTRbRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oSD7gjfnyfBLTd1SaBRT677nJojmxeki3ZQkvE4Pj5dsk9UQpfLTLUEKDceqzF4Bts7wgn5SfvMgNNqsEVWdJLC",
  "key1": "3wiEdrMVGGj5DfbhXqPFjhNhN86kaG2LXh9itx6acibaTGAGUFsYMqtorGKWwUazfPi52H4usHHpFp19qa1ZdMhZ",
  "key2": "4sx68sQ3n2r7xu6bNNrZXFrTZxv8nthiM4joxEekfF73fEa6mRiiopkx1D6537hSpEawgmcMoJzwPBtZ7i6RvFfP",
  "key3": "3Y3VBNuXtbiKxCiTNAqYWKJvx6KQSgQW5nUyaStLfJ1LQNCGVS5PwUWHa7biNNTJj9pSSj2KF1uJ16WfENEi8zp",
  "key4": "aAzh6DjmTLfuPPmiCuUQ4457aXCqvx8uSf6QnUrtVm41kYXU1B1AzYL6LwYdoDKvYbPqbnZN8SJs7beCSaRJcfQ",
  "key5": "qLXsr3XEfnXCrmikYH3a9yhgqBQszU2rK7ATkiPQve9S7UABMSmCWR6vfhLmXjUi9mjAFMPCsHmBsKsN14231jw",
  "key6": "4v9U4nrm2BM6zwtFYRBZCJQ3r9sn9nbAztkP8yaEgJDWsWHbrS6RGdFsyoPNniW1pkajmSMkBSfmUtVBYvyyXvA1",
  "key7": "36Y7WJvzkTwibQ7t1J8QEgwza1cPwUbEt8rT2DWrkCbhjDhHCBDPDWJXT67BASzYH4hYYU5k5k3PapsL31U4NYrP",
  "key8": "2GmCnm29FjUd9EnUaiRD5mz5SChvgYq9RbXqRztqHVxh5zaTx7DJESmHVfRVqSHWizRQuAQw71VeLTqxv76gKVMw",
  "key9": "33T5LWWTtUgowS5YCwY1vjhr7ucqCGZHiNVsNr8mirrZwSZ25Hmcr7AKDED4TiMZVXXWNQ4uc6zeXexyWTWm5451",
  "key10": "4s67kcdCUXoDx5kdjdfDRECdGBMEfiuHBjxSTgY8o7rf1dSgqSZdEBQReZUctaFqTLmH4f6ooXPeBuGmGCWiEd71",
  "key11": "65P7rGShrB8VfyJFBborKosYVPQ3Nn81XNg8LdrQASsQGKjFg2fqCPP8E1zRiWcaQGcpVEkVjtExCr6NqtczSSTv",
  "key12": "3q22FKLyrAdY22tKaMjck2SzB463AR43VSTkEgRYsB2cXouiNjygGU7GE77CKoH32z8qCi8GGZ9dho7KWXTLA2Pw",
  "key13": "TmABERKfp6jcBLzaM9PMbZX5XBSLySa8RfsGcDnPxRes65oVAjvXnr6YFCFrxQqgA8iGVyDJUnGYxDkNWuACi2R",
  "key14": "2Uhv2FJUFndZBvx1TeEtFcA64H1Uc6M8ggt4aaatndT9Ss2c2rPeHq4x1QS6T87E1QXt7ikULXjpRJVMzhw6wsna",
  "key15": "5zkUym3NMihX76UQtwfTWZSivGL45cjSZ6p36fk7aDeCetuNxso6W4TmwPmmurGZChpJNBdoJdsMKE3YxbgwZVoQ",
  "key16": "3RdUjdKBs415Zw6dJahczbSwZ2Fp4Kxj3o1axRLUagmVnfKHjRYh3QiQJKmfcSJik1LPL8hbUQ3CG9oQMBRsiie2",
  "key17": "3HLt5tkN9EackGKxNdvNDkxvSTNAPDfELarHBvqYJ9nhQjsZaLfEukj5UuM6hbMv5Q1cLzWhzAu8kvgZq4jBpd37",
  "key18": "2R9z3iFCqFGsGu8sXH9jKK2XQ41uRcAZbn5P6znDPjZzgXGyVsDZx36rdWqdu5DyzWBUyNM2xse2JEh12b6oX86e",
  "key19": "2FUidkW44suVApQDmTceXsJtVdzvgMe8BuVFe7CHjrVpnUdtTZ7Zukr8MHSvuFEHoGLgqHve5fE32rAqnirnkqVc",
  "key20": "nZKaQETUt39sCzfhvR3kLfmW3DVUmnozDy3rXo93kWV5j13Rc56981kxvvADKYDHv9UAmyd118J8pa7igqcJ8cP",
  "key21": "23MAAkPMtZBbqbh8yQbCK6kkcKBWo4ZSDpCokW8KjKgDFws9L3UscLxqoAticTay5woPckHFnKi7rB1pbV9C5mLY",
  "key22": "554tCENqfTQYsev2NtHTqJmsojHCWoFASW39UfjUgQihDMCca7oS8oUFymjuiiZzou8neU4wovEPRRjJewJJgRdF",
  "key23": "5ijGjR8RA5vVcVehvcgrEUvP4rzA24eafqAMMf51SstZepiTYo2rkmTZVVxessywvzmbboiyoeuV7U375W8UPKzA",
  "key24": "65r3WibSK8rocYxGt1zbkGioDaGdNKf7JWuagFJBiDsyCV3ekcL3gKn5A61oKX5Dvg9hvTJkAjtxLjsZU7TPtQnp",
  "key25": "K1RS1mn7Yve7oT8u9nW5vra1fHKtHpB4c5b4RtapHeUATv9Sj6e9L6nEBf4uNYFXh4ZSWmPgyb3hLNV6MSBcrc3",
  "key26": "5kyTLMVCRDwzmDK5VquCwhrdHdyztQ3Sd7EpJYEfGLdx9tYKpKehsTF8wcaQJ1eYsZvzKDzPtJ1YUW17k6DRAKAi",
  "key27": "5LMEtvL1YZ2C7TqJEBznLJQm1XTDSRmWVBvQSNoMtLTrq1NCZdrpr5deD2QEzf9sRRDiDC8ATSkR4ppcWQzWXcTg",
  "key28": "37RjV7FvD7rGVXfoQq31LJWRSV76QHGXToUty7eqxfRPwKMZz6X4z2YFsGvFr66zpzVjsRiN6Zzw9iRbyqhYuhSs",
  "key29": "3ut8dEr6ymVKEARqDsEjmPiRQpNL4X5wEvzCtMURgucrfZ4RG3ov8GPPPSqqHRnPBGSUhfK2kbj34m1DuaWmCmni",
  "key30": "3JAvyW4WAtGScewNtZXXXRj14gADUb4LLZvEJQzcFJ7V2GrdsuQibfNzMkKGcHgq9gsiZT8GgL2HvAmq1eQXkEbK",
  "key31": "3xhAXy2aPCcP1hbYyan5kw8kwibQBUYAL3f3b2HTK5x1nNWagJmawujGN7n1DTiCfP3orf5aT8YbygZMN73atMnm",
  "key32": "4zmLdANE8uEAr6MTP1yBkpBtmbrStWsBNkCfDMJF3k2TCons2byvDvJUq3QnUXRi3Y9WMLaad7wakmZDk5e1zpin",
  "key33": "5ZxAmt1VRCj5E6p2mYX8JPajvja4wytJMzkPPcbra9L1Q7SPb1ZhrzNjsZc32sL1AVnzzni2jAGniHbprNm6j6XU",
  "key34": "4e8V2edJHRBg8uVTPLTrffuHo56k7fCQ24CjpZ9dVCZxyG6aVK8BaJicSn9TbEm8XT32naopzRbY7uRa7xafKtsw",
  "key35": "zmdQHcZX3zXZpVxYxjoC2ff4um5sKMRkh6SpELF9D11Ra2sKm1FML79NcbFaAdVMdormLmUVnUMHHahmpcFmvgm",
  "key36": "wmdqQViqizkfx3fRzwyTxHpX4A16x18k4HPiX8uBfz3sReg7r5w57jeV3VgPxwvdJYiDsEt9993LFkNVop3Uix5",
  "key37": "4xAacPYxvbcQ5Y4hSGsNqhpHHhTSQ48wPwoeZBbPR1XWD4fpFy47auwo7nFdxGMmGPZS6UHhjtwtygDyg4iJ5A2C",
  "key38": "4popQ1KSNjQvgawKGB2SLiUyQtLuySvsrZ2o2pLJDfMD48LhbrwqZNN3CVG3UF9tyEdbQ54D3UCUsjbE8JW7gKFz",
  "key39": "665Av5ZcfzhKZc17kcvNdrAWKiLghksrpYi986iGY1oLYaPdPs6xWkfcNU3PYfVuzsPEdwFVF581GypymdVpvcQx",
  "key40": "3zRPJLRLEjhSxxSJJggNy1jPy2EKvtyYgdekL15rn3H45ATN7dw3ijEFQnAsfxxQSpXNJiuB7zpBFf4hNLthUGwg",
  "key41": "2zszLRtYQ3vvjg5TZpZaaQfZ1jPN7LJ8Zr44SYDfRkkdAtNii7s7XbBoJsG53x9GU3oMTwCWzsh6gNXWs3kvaycX",
  "key42": "2DgLWwTiXEKp5JCcnF1v7EDiq9FYwKCsHDGd6RtYj9R9RvUvyEcQYK45vaMkLXwF4Xis5tBxAXKPmPH2rWS6cryq",
  "key43": "3hNR5Sy6XsXh9oDzhQp2uL9g336WfHRAqZu3yPs13K5cgC5EkJ5SZx6dNGHwqMcN7spx79MhQ2iKW3EUGpFW4f9R",
  "key44": "4EdHkwENXGBvn1zwZnaT3cF6htjeq8NHhsY7wx4cDks6T4AM8NP8NY9xgABBTPYHTdmKRda6Jw2eF3rmmrHwNRJ2",
  "key45": "52bsQQeeM2x3rv93jgtfRv8FRyXoiQt6QZnh3AykCsK5E8xnYEtA4UzzNXQPzp945CfxynTXB27Tq31XCp23mHZr",
  "key46": "3Y8yWg4GQ6qK9WwnUqFsyC7sFG5xxmVJaj51cu8dhsP4d1gCQC3jFUq1bFWFwLJfuUndbKZhpp5fxyruMvM1c4GX"
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
