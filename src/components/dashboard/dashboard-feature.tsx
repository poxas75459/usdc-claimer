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
    "5iFjfgwkRe6ime5N1Z4P3gTHZntZJ8uxrT5RL6ipyLRnJThRYtiNN2gFwqHRws26kTFYfmY7opB4AG33PfSFSJYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DjxQaTZ9y5rSWeiHNg8U3r7q8v1BprP4YHkAymTTsyhmxERh4SgY2jazX3xwArYWZCzsS1Yjx2hA81rJKihLLVy",
  "key1": "A9HLgYnZ5LTiCZsgUzxFwGWAhSQsBqRjD3KZS3T19NQeqntXkLFCFBDhMPvp7G1xq8sKrXU4c9ALCyao8s11iVS",
  "key2": "5Wj1Dgztjf4AJoQoJVQxqitvoqTDsVfCgNRkp7njTfgre9PRdJ4geZxK8EZEmCG3cp3QPFcXhFUCre6rpRK6kbci",
  "key3": "mbzL9SnhmgeJFds5VJnJqKFUgnLdgLx8mpPDNRoaMpDQAnLkRwonCcZodQbnfZBioKF2YL7HC7vD1YWHjyBHZc6",
  "key4": "2ySk5h1Zm6715vbpBDGvpg1wnQZADkrBtViv66LEAHaT2jDDpQXgTQn8PWQgvbsGDhGeZMCHJB1LhZeAmaZgFA7g",
  "key5": "4xNEqnGeMZs7SmF3xDjunW6y4R8TXEv4TtfUR6FRdQ7WCYQbBBtoHtaQF3hCVoL7UzMjHM7LmKMECuE5T5vxyyT7",
  "key6": "3tiugdauAshFUL7KU6GMoSJQDd1Ybx9te1ZJxvsn9uMAGaxEgmmQra3A82Sc9isWwZwqmWikwcrGak2pz3kfGQBE",
  "key7": "d3Hu3gfPhBDU6eAc8BPEHvRZ2uyvPN7GCz2fDFfnu6VqPrw8jBSaiQ55cBKmxZbXY78hgdPuXevMJYqJ7QBx83X",
  "key8": "36Cjks9MCK6Ate6FcPn5D9myjVxR3gRhRvvzuq4avECapsEES4RbEspwQPCTUGKoefa2PV9JqP57Pi3CGM2o4GXN",
  "key9": "43wkjR7C75ZCbkGdfDFHYjwXwzSeV3r7QAxCiTnxPoXmprvYXvAEtPcAd7chD1wScc36GFnUmL3YHiLCjXSWvUWp",
  "key10": "3VzcpjZ2wTkEebYH8Dm3GhbSQx7CfkkErQdfxcjQVxU1UVLETwJZdQu54CKCkHfLtbEtydrvW7vKPVUC9LTHCjnX",
  "key11": "5gj1Ceh5EUdiNPBXURmTgDffd4wo4hznzp5Jnc5kdfwdxbeaLoYtr74VKNegQZ3gdKorKrg899DuNFTwt75h8whW",
  "key12": "22BWknYgGDYiVgJqEUWNqx9BRvSkjE68osBjsW8izCFViK8R7iiKrBax1GHbkND84MwuK9bnt2tQEWPh6Y8teDs1",
  "key13": "4eosC3MEXUzn9rxg3GL2bBNAM81GsPowHtBYTHnugNTKJX58d8prZ46x3N3wZsdx4HdJs99W89icVbuMwV1htPze",
  "key14": "3X6RJGxLEXUKwzmptq6ey39FsvEzTDoWC2v49uxuMerzMxDpvmDEsPGq8LGQu8TgKSXr34oT7yE7LVvyAw3pRVxT",
  "key15": "HK1JMtB756k3d3moZJC4B8CcbsCmkognj59XP1qyZrjxJc2hCx75LN56EFMmJRyPEbXYvhNvDEftcNowWw4X5X7",
  "key16": "61vnx4eFpKYhZdLpPJX5y9ghp4swtqNFgLujYYtjqWWrHKat4zVBsqf3yUeKrpa44PqFrSMqJ5FEhxSBkKE7FVcG",
  "key17": "4CVkyJfEjEWyZd3u1yiZvhkG84DDBvcSfqwa8wWzcVqjuWHMbzBkqFuGBnipfsDMYNetNqfhjJgxnjVRDJkUiftj",
  "key18": "34mkooKPm8dgKgbSkPLTJrjFWeqnCh2wFrAcrmdHuu1kX8Sn5TvtYMvKPkkN5m5Xx1MHafmheew2X6hpyS3sKSEr",
  "key19": "3FMS6hpkw514LV55cxNLvnXMa6y9txmTPCWjrHYf3t6U7c8onDqPPUgt2nyaWV9VydGfaWvATWyA2BEWpE1qJDDY",
  "key20": "2hkRkyiS2t7amhkpdrwmd8qvcGARocGsihbppvHtoNLrsaTkcbAaAGqx74nZCUGUTcvK8TDhXYZm3PHCX652YXNA",
  "key21": "4ZbX72hLkN3v5PCuoXbeeADdv33r84eR1DTRKXiRnS3pdJWZqBwFWnrjdrDVQYh1R2Q8SmRyaVEdfwLbXF191id8",
  "key22": "2qwquqkk1XNutGUSafTq8M2oQox3678jKQVDsUcpG2wLx26vvicaJay9EDY12hJSRFRpRX1FxNKBMsRhrTV84MR9",
  "key23": "23Zr5gBkJer7nyqzF5dbwi3SQ2NRiBbA7v9cb2YQbZEKfPrCWPwRiAeUyA37VwJSK8oUs6Hch8SjnjPbbG5HCTE7",
  "key24": "YBer1U6iiYTknSf1xTTcsATRm7LhaykYaUCGr2vtTri2yvu1JdBx2gtNXFRf9u59U4FH4Wk4aUC9FnRgo1JAUYd",
  "key25": "5N5Lna6bL5wzY8Gz9inu2aViNCVtEuhu9MSSqV547T1eGJfW8S4sbA2tQYCYLPcKnhL5jSGqcZzYGp9ec1toTwnR",
  "key26": "4PTt4pZd4RDVnFBWjdYKTmj6iKXrfV2zco7QzYuRACAnQNz5ZoWxQiDLnpNvD9koLi4zWLLMkqHoah5MePb7wHS7",
  "key27": "RAK4CXQe9emAuTcF5426HJyxiJx2ViDnhZYAjudnxMSh6ZBJoM4U538FKzRm5r9WgTmqWmmRwwNCZa4fRWRBydk",
  "key28": "RbrpUxaS94zv9spf7CnNGC5YqLjmKbny7sC2kqozBo1s35Q22M9U6u1NutEXJTq84C8wF8R9HSorxRnbGXkNYWp",
  "key29": "29MZWFmQziV2m78jjtFi7rK6GBqPw73qT82AkpSjQ2V9zaBM175ujtCddYLKwKMCdGbzSL73eAGMzhGyfq7EMKMP",
  "key30": "56YqeYpM8m8gjMt4YZHLid3DxCi6XvBY93w2vXQvqypP2JN8DRvN6jaDVqeN5B7YxFyKcogE9RXoJtRks9vnRJ2k",
  "key31": "3cXiNNkvusvZyea2r3Gc1HwagY9DRn5XS9ah86cgJvBoh8KFDJPyyVmNdgHoD2sK751VyMgLZcAJzHnixYhhWwRM",
  "key32": "3tQ9bqzR2szVb8aRWZX9WmhyU3UKXmG9NMY2VQccpPbGBEzWnseZV8AhAmCe97wfwvfETox7wneU2z5hpDUvytDj",
  "key33": "QaNpwCiHKpiRwrMU5xP3uqJ2qFGJv8GsWf2P7TTk51ZJsft8fcPFj1LDpYNbyJosEy3voMpobr6TRPS7dMyn2wt",
  "key34": "4Yf9xT7EtVvJ3E2DURed9d7DTMs2kzKEUjb49tTMJf6vqh85WL4B7jKErasRgLsKU8tZoUuokbvytcUGq76ABTQk",
  "key35": "3uwc76sSkoV1b3wGqGcngUH9xtHP1vncnxThSo9LWekjdSkcYo42dUwvAwcV1b8xrSHuAoDcjEok6C1b2cB7ERpC",
  "key36": "MnjyqbE3u5tPtCFQPmVbeF35PFH8uSE5LdFs9UqZAkWoEsePjZRh8aGSVMsiGXBQSjB6hFN2YG1tGr59ntL7K1c"
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
