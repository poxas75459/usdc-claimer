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
    "4pDgJ1t1wWTJBiHu5FrzsxmxAUSpPw52XaTzm6t3ToLsCLuWcovgznpX66nFK6hcJUqZ35BLHrEBKTHcJbkyqVie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vPvTUEcSdHt1qqHuWUEwAcPMfHdEj7n4VjBAYsRpmQgT4AEr5Fdwep2YNYqKFVvUgub5C6VVEB5MoYkf4FwQKTe",
  "key1": "2qsaba4NZByEfASLxjwaYM2pwhZYKdYusYe439EVbMAghJHj7K9rhjnxRoSmC2bKHYcP4QmNBjfhz68y1EvLdFy9",
  "key2": "2ca7Ky8Py9rko5h9rAiwWrhvzq22aU5auhL1p4TuDJkPm8mD2nrn3DkuHXttBHBGDhg58zrMCUZWETSiiZqW41RS",
  "key3": "5FzYEpifZXcb4BTqm5zbcCJxGc4u42SWxNGGj1uptaaQcF6qjVqYD5gCGE8jHs145dehzCeXmYgqTQ5xkrMghXUB",
  "key4": "bQF34Ei7iptq6WQwkZTjjY1KbM2Hcigj3GfQCe45VtNLzLqeJwqxF2R7qUpxxbassqp5myPcHP7dqJrzjLApX4H",
  "key5": "3QC7uoXVeGkGKpNxcY74PqdhCjqGnFwKm41FuLYorFucpHXKyt17GBPoc3rhxn6DP2huUHQxWGvApgtkc71n8MjT",
  "key6": "2rwZXTBAQik4r5bFkFiRh5i2VeErFi18CKRnS9EqYpZfqYaB1trEBNhQhYMDfUWNeCKS3Qe9EGDcFLqb6WZyFxQt",
  "key7": "2uGUfzuEAYmbSE1EmvatngbmatQdnA6idZciTc2U6xbBs3pEMnyG8YzEMPehqZnwRLYuiSQgBNyWsrojpy3wjF6q",
  "key8": "EizV5U1DDZXzqqkae1Qn15GhHFiBHHXfrgGJgLxXAU7hqJQQ9n5brgiFtDtNhvoWtDqxrwX6Ufm2MySo9KR4z4w",
  "key9": "4gBK6qX8iqijpFCB7gNerkH5ab2TrjRUWaVa8jF1DBh6NDoWStVaTX8N1sxeKsoWeXJQ9a7KX6oieH2VthULbAGh",
  "key10": "3nbZaD9roCVsf8AEJ9pCdF3iKWQv5FB3z4ZsTeF8jF6m1W3kqSgfGy9yWhDmj8TXp7rP19wV98PRMtjoKtQFxYQA",
  "key11": "5HaGjXcewtmuYFXPyY4n5b3hafNqJ4gPwSZK5VSNGc7CcJi1TVQpz8dDn4qnZcZQmbQ5u7UJutemow7j8ZKjFiai",
  "key12": "4AfauX3hQVkiBo35ecQKCjEzVYk5MzTVayL5aVqos7STAMVbkimHbrRQsF5XQDoNje3ntQYd7ca9ZPBDZgMfqyqD",
  "key13": "mYvE9EmS1c3qh8LmKZ1vFdF12bctegemZrfhtYV5ntZa6mVC8B452hJvKsdTkvriDjD8UmsgDF5rien38SLNHeX",
  "key14": "4pjk5cc7uyQTdSH1VUuLXpHqc77krXnLdur9qcboyF3SbCgdQwGjpm8xxEwxvespK1FwmdLBoDQN7LYX7kWgBjzq",
  "key15": "3yVaiAZ25zXniSMNWwtjjxjRYp6APAaWKyeJfV4hL3htmFNwhAj28eGvH2M49aXTHB43j3Rh4v7in5G8pxUzQz67",
  "key16": "4Z9PrGJPU7TCh82pNjBsFpttoB2nUnsJRfezHwAnF8SBSu5rf85xk9aedGcyRzBCV2xYxtCJyANv4o6bbanyxk7c",
  "key17": "2QD6AV92HgTsHoac6cK4aG6cS7MuuwGSLNbN5RZPBkKcrBpQo5kd8BGcgoBcn7SuBcR6cdxNHqep2ASZNQUA7czB",
  "key18": "4bsPiEarmgfAQ6w2DsDhwd8mrPSg1K3NRXFU64H1HH7jHvUSe825u8p2EXnPLhAB8naoDUZhuHzijZ3JqBBAiuoe",
  "key19": "2wCMdLhtFG3RbNk6kzVQeWv1kiqCVE2PHtXjZz5YtCzezgeWiJMCXnYL822mCSRLvDC3ghNpY4kpiwY6YpFz63gG",
  "key20": "3jGZUWzop5b7NjVBETFpaXbYUCu8RoxuC3tuAtjxcSWd9QNbBXgU9ZRraiLsGqmSBLNjfMbppcUmBpArUtaUhyqQ",
  "key21": "5io5PA3znbDRbxD3WeNnc8Uj3wEyuDBvfeEfuNpFbvR3F2TvjVZNnAkaFZBZXPJszBsPLvkeCXvzHMYNmt3yJq6c",
  "key22": "679HuywmcmE4eMCZjh2PfnfWGrqbryY4fgzr98D1ZUMncksf8kTGqiruxPGzZvDxUhQxNEjZSfhmpoyG1cdtTnUm",
  "key23": "3uEPK6a1Siy19JcEETdDrFjNNLXNQLN4ztXAk64BdEThS9ByDfqTtZuNxyteudKUKSXEWHGCc6fSGihZSyVwFrFB",
  "key24": "3qQUJch4Guv8pY8wpjpsQafqK27KXvsvRdAwBwWMGbvGWSdAuYdbmienqgDg7KrNvjrRmKTUGQm8euvWZZWgZRmq",
  "key25": "ga11PTm2LuDfoamJ2ddxbfRv2WwGNT3zM6CksKSmBxX6Drwsfx2gW78ESwNA2Y6fNg6JaPbBRYvQRbZevC82iSJ",
  "key26": "2vyJiHf8NQSPDKatv8TcAzhwqCC5DjJFBLM1zGW5fwaWUcrowPtKjSm7Lg9WuVvcBARHtKdcdHGQejnXcxBbjUkB",
  "key27": "5P7jmRveYUwArEnzMCpgDBPhD5Zt4wRvdZ6E59icWZQU5WLJg8MQAy1KFrNRB7sd5gSzuufY75ftW8ezhKBnu8vD",
  "key28": "2bSi34Vu2dTQdJcstvfC4hLyETqeYLo1jLnumckqtNYhaUDcWsFiFU27oyQfwUksQi646qSEr1NJkbwSGdSXSyrX",
  "key29": "55MjMKDQzrcMzvf5i9zyoiko19feqwVtsqCdv5kHxbMMufBz4KkQukwbrxFPWhEPqUWU662ZQVZSynV2jyavG3PR",
  "key30": "3NQ5nX3bLf4MuFRed6gGQzhD9F6nFt7A5GutucZBQBcfjoVGTbTGEvs27mdEb5RGx2kx6yfMkyb33CyREm93f6JZ",
  "key31": "3TEFKAWUqsC9BDCTFPv9dvYh1XeJ1R7oKLBdt3ix4oSMEyUSLb51hNW3nSjB88Kae6ECDGk75R5LnWcJqc4pVMPZ",
  "key32": "38EqtSe7rjWMuaoERB8D2nMPW2doHeEStEdJbPvSRVh5CmTnykUJb21aC91GARguvBjaHUk3AAX5DvYsHF68RryH",
  "key33": "64ZmWi78jjQKv2Qgj4tZaF2XumtxsDhttMdMYeWHKRsobXLmziP8DYgEihtkVNMAUu8uF9vATTmYJn5eVbryU4hY",
  "key34": "34V1qKgo9v241aLpFgJq51YfvCgSoGV8TsNhv5iewUpqGTYFRusJd7SJKHdN3NFisv3QkMVnaVBzwbrRSBuNj6xX",
  "key35": "5v8JiJhUx5vcQGPYwxZ5E3soRPJFMu6yGijeUJ3XtX1gWaJSgnAKfAcJRueoWKyLhWf45UQ8oimyL13z7Gxnh26Z",
  "key36": "2PP4ZwZZCuUpXxgGVM9tZzKbt3vhtvsFkv3fEZMKeHC88hEjtxah3q96yJMnhq2NsuGtxpEX92pQM17KYWakydFR",
  "key37": "423GwhrwiMtXDacQ3G1F8y3qbmMz3JVPpz6rugjs6sEZebEouHsdGC6AfPHvmNYTfQ3dPt77sgMVMm3YJsBnKtQx",
  "key38": "4RQzkuf2CyVMrJ8qsJUDZ2pTTE4odJ6KeMaos3upVWV1mEyfs85nq2uSa91AF9wRGYsQDvmFnAqcAukv7LsDrBoP",
  "key39": "4oQvq5SBX9CVTKHbqGziNAJLYe3uVyxBvjJpXfUSfhEqJgj1PbFThNd7spuQK8CNADT9mqBQRGJzgtALrij4gbCc",
  "key40": "5zW4gVxDGPjfHemwuyvByTVgNduKVyxtcJNTEVqDyg3sKY6FyLjwmHLPxHHCM4dETfDzBRn5rz1CpFTrrLdr5eeh",
  "key41": "5bGqiSy5G9kVaRQtGZv2tB7UtmSDpi9esQhH67Tnz5vYmAocrb15FBX9dw1uDd3UbQhuDC3Fxvn1pMhogomXYLye",
  "key42": "5E1mZN1TeesreEjWXNCDA6CV97c8cwTuKgHupj2xwZ7kt34Jo4LsXnXbSxeaU3cDbHJHMddMic929hnjU3LKaY5F",
  "key43": "3kbQ6e3hKTbVNiYRkX3wGvcVHDAda8uFr54Xe9fKmPsFns7wwUTwopDKcu1WcRbjZzArQ5r39JKSdkXnWdYYVbu4",
  "key44": "CkMt8mf4kKQuCDB1HN86MYJeMcDAVuakT4xPNqCnEizi6jLGnCZyHBhYs8PyNV1LKLXkNdGXirRBfQkvNwbjV9F",
  "key45": "58jE82b5yEQCHHYvmFtcGGj3ohxrX9tcXeTMJ1ekXQ7BoiVt9Ru41Y8CossqBTzwphNd9BjemX3nPe8ZqBZstDud",
  "key46": "2didCCubaTGU5wJKyuN8FAfuw2uTeLgZBZ6kgKBXWHgSw7gEcw6EbcGXrXnzkVHtfuJ82LEQddUUYLjHXsqYySBk",
  "key47": "3sMYcadD4DSZ1E9srSjoFqMuFVh9EGR8rz4YBTnoFwXgpPgUoCELs3Q869qyDHEsktG3MCRewG7wvsivkCgXnwVB"
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
