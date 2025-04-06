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
    "4yqdGhwh1JaYuoomoX6pgF9z8tEmkYqPV1HkTn1Z4xPGDXgtpSjQ4FrbFxuzWtKju9ZT4tfgs2dQ7ShHe3wVYVWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54EtcQvuvNgi1of9MgbGrAQezqyjsHpUT4Zf7niuFswAzdbc7S4NhU2AYLw9P4et7TunRqH4HhxEQTo2xLmGNYd5",
  "key1": "esDa4eeMt4P7tdpAMtBHwdvJuLH68nvg6fvnnQssnrCiQy3kAPQKio7RG18S2GHoyWfwDGAxzCJuf38bwQGT8mQ",
  "key2": "3CG7GaYKLG8ik6TwWYrLXsU2dLJSjQ16EuSAKnwhgh7bkXRpL7ZnQBiH1t54CYAqkRrV2qDJ6Thdjrc2mVYBxDPw",
  "key3": "SDmpSgSyMEducD8xGcn9Nb2VbxxJLwVskN3vHWRepzt2RbiLAnmyxN76TLgHLZZoMDXbY8Xqqa3AwoQD3C99AQ9",
  "key4": "2cTW2ncG8abXeDnEP5NJQEfYdNoLQYxakoWct1i2iKYcjfARXS5zssTAhcSq4BCGkzfcf98uikbwXbC5TdchGqxw",
  "key5": "6q1NPN7GfpkH4uN5sv5yeLWUKo1kUGhdwHN8KL3pJdLYMB7zfkwk9A6hAjniFxSDaXQbE9PZy4x2HfmeL2ijMMr",
  "key6": "3iNHcB9q6pV2pdP1aUQvzgXir89sqfob3s9sC65Xv1s8MtbWNwuPTQtojZYf5hgaskWuovoxvoD83g4m2dQAn6a",
  "key7": "nh9zfqCnBLAB8ddYguP6T5kvk6tJ4cVWwncSVKjkamTST4RPi3kH3d3a6DDznouDi2PqVvbvVdZ22HsjCvSrK2P",
  "key8": "2ggz4p4RE8e5m3rDg4JsGPd5xGiMTf4njUrFQgXcz8w2tkxbEimneQVJMGu8Dhq8nqZfv4Gpcsf4HqrkDucuG4Gj",
  "key9": "3hReK3qE8cy3DBZXKAq6GqJQs98AWZJ2xKY1LeHPxnb57HCGHxhzMYZAqXz3314d3xMwnwoQzKboqdTdYJyHTCK6",
  "key10": "25iQMXiAYkFBhwdHSN9sUzEgDvADFXESEL6ids6m77vARsj9DhPFPdUbScomVE5YsgaTB8ng8Z3RPPGjoGNeDGty",
  "key11": "2y7oTEhwX8arjBrR12ziJfYg6LPCuraVqbUquJf322Pe4mQa2WcVWQWgYCUmYsnsZ4w564WNcBdck3HPkr6VJGEb",
  "key12": "3BBBvGwV5pSxLBhwGYSfi5ixx4Q4BDaHgrgoMsbqwcTmYWUgrDTXuubPsqPDJKumaTJE8vVo3zfMkSextiwgSrDr",
  "key13": "3aGJHuJd5XZUBmj3czbpkNXcrtt6Sm2bnBNqLPCgRHAnUsHRw3ssGQax8EY8XMvWGMcewXXvyBJ87GhJL6C13Ck5",
  "key14": "48DA9ZN5oDqdhnPbXpyJiMDDbrefe5YD4npzHHMb6rVZuXjJd7WViXL6Yozx5LV3pXiDMtRSqwG57A5U7JiVaPJB",
  "key15": "55wvhEu33w51XTBF8Ri5pnVERxSvCC8gP47c5kZWLF7mLeKrDytEAePM5PghKAJwFgeHjqhwBBQuY99A4TANfso",
  "key16": "4yH8dKx8TtaD7XVj7DGXq5BV5V4BMwUyzGBTGwLf5EQwUBsP8WDhixc6wD6aUgj8fGbh7xaXkNcvQzEW8vCacpfF",
  "key17": "1zTkpbNjAV3z84eRpS7LGdftW3KfwhZSvCQ6szEtv4GZ5to9VhsenoFFubweZ1J6UFcD6rwG4tCGLfHzkY3ZQ3S",
  "key18": "3ATFEm5kt2bDmMWutcnhCc3ugF3JQV2nHJbsbosVVWRyJd91zUuSSyzeBW5jgEEHTtWFcGR6paa6Q7pbQK3ZzNNv",
  "key19": "4Q3Ktxqi56AUSHuGQzHdsWP9hV35mLHdmNvxJx4zNxfCygrCM32opCGXy3SxKjzmFPSBxVE7nLyfT2gpa17ugD7y",
  "key20": "dT1ntpwU6o8neq2vaTGbkSucFvRf1wUbK9FXrrSS9VZjCnrGVQu9oBQ6utt2otebf5o9LFHcqWXPm2NxeY3cuU4",
  "key21": "2p12PdcTrRtKDvGM4CYHxESyX58fw5ny47oZhaKgyxF5hVyq4YTph3HxkWHSPNmfnLDkrm9rN3gC9n5Kgry8zCxC",
  "key22": "3FWiCUzPtVcWv2n9UnMfGys6kSsHMsf6SPUhkpuwExGZxxJ4pJYYF1n47iDJyPeVAMH7oxQqiC4ezBgtZDApMLq9",
  "key23": "3999VezC1Uczi5JFWY7WHzv64CFUNtp4zXBLRejUDL2jiCaTUQoEFos69vq3kwhG5SarWJwXxmT4GRoXET1PBkCE",
  "key24": "4oFR7VF8Hm978HSfRMXRh1RyqdyiQHLT7MzevQMExRyJZuX4WKpNawqd7o1GtAeXkzsPUrRDTFW5LJHYKa1FAHFY",
  "key25": "3Z8pBBeMMxXVVeHiLL6znEuR7y3bk2M76nCUWKKo6JQpinuzjqPLan86CtfrqdjrVH1n547eUb69bRUUdeUH1cGJ",
  "key26": "2pJW54QDKMx4WFDitvA9mfoYGRnXrMHMFoVmUCeFu49AfVCAhfFedH78kDUjgN1KQLa9RtkxPMXNiiF9dKJKpPrb",
  "key27": "4tUBDXtvnHbyV3bEMgkN2GESFR2AbGbV8yJGxNgrmhLhfi785Br8MyuAHpg6AJYW8QzsmNDyzf8cDA9yK4bT9Zyr",
  "key28": "641VdJ8YPLVmmEWvFAGrwy5nELWRtMW5kAHzXzVSwV7ytYs8xUggMnsEjHPim22rSnBAVZT4yb9PNqHMYvxuBbv6",
  "key29": "h6neE51xhJDk1WccyhjN8QkiAr6JevzgbxdkaELDvKYAkFZCWGUgbtnPHrSpxGJQWAiHpgbRfaLU3QKkFNapCN1",
  "key30": "5cmESNktmHuNwR2ivniM33xM1hwWE46x9udHk1KrSH8hgD6z9PWTjPf5C2qKCxJ2PEzSd1vsqqH7um3LRDErynsq",
  "key31": "24eKwUvz8Q6XZ4byDmL2MstmAE8NQE9w56KL3bxgjncYggysV61QpzGHvyKPJ1MFstSabhatEZLhD6h7UxrJnxaa",
  "key32": "3QQrwVZf9VjwMdZpTwZjEN6TV2A4CSrVfHrGFMWM3Rim6tVRT6TV9Mvn5Ln6c9jt9vUTpXiBh7hbgsrHFDwPh8as",
  "key33": "5RcD3LPi6rBFjrNvGYrJBNxqawoMwHgZrEnLdJj6agE3YnKo1HzYLxWLURTez5sVQZDWUWv76iBDs6TUsu4wpFRv",
  "key34": "3DLEVzFDg5ZP64YtYZZH11SuB1p6n1RCPno1k1fXYm2kTboQhVNtEGoTDxy7hYHGBKtjoymVrGeZd6i7s7rg99nN",
  "key35": "23J9mfdkijG3VbXX7S7cWwhi5KqbA2xEEACKC9cehMQP5mexpvtdsvFD66LrDJHMMjDGJPS5F6nW23ZyoTG9bPvu",
  "key36": "3tvf3QYjxHZPhoUvcvweExZHKUFfgdABG42HqY1PcptaPkmdAFLboN5gzn1aQkTRQY6VfEvzvNcBLqtEVL9ShN43",
  "key37": "4rezdrSAb98WFAyiTJq28k8GRLA68vQhRvnqgMAg7PF3WaCFAK6qpmYv7x6HtYfFKTPCgxKd9ER4y1vyvxabWCLm",
  "key38": "2428UdUCrixH4T9NFzACAW3dA4pKuSfhMw1Wy58nmibJSghemftBy8fUXdEV81ckDjJe9j1G2m4TuEzQxK6SiFc6",
  "key39": "2cRoo7JRkPf4pHDHMSFZcmQAb6DYRV8g7PadEg7Njobpj6XcoRDapcCoaRpnTu8ZtygGZBjRf4836Pysbb9qrjY1",
  "key40": "AKeo4XPUyerSASwM8quJuajuk9N5CTk2jDyKdq2iks9Ez3tDAdwvgBqRqUjh8nujy8JsW7i1wLP5r6kp4xUUgab",
  "key41": "5Uhmoyko3uMV54jfxp9GbuqL2wjo9kFEdRB3HeduKLf2iyjRRokVBaEXHjAa39CegSx5zrYNq6Z99r3gXGJoJQpW",
  "key42": "2RHMFLzKd9sWpzapc6jMfZEjBQnT6fQo6phpAgWUmN7bortV1VMWJdmx29SppbF2RwJhuFirukLwF5Wqg2jHBngM",
  "key43": "29earQp12oeDutWeeVQUDK2os9NeKwWWfzBwULGA6E4P3jafYBBqu2SEADoMHk5eoHEj37bkWHKV41XmHQ6vDkXv",
  "key44": "4FeL9VPkkjkU5XVN86opwyYJqwjkpKyAV8vK77t9svatGo7MKDVBfjtxUFPHoTZjLs1Zgistb6YsQT1DEWGhYTiE",
  "key45": "yUBxu41w9uqe5Z8KYqGwrds3M6vSVUN6VCHUs5YSrYzatNbaktHB5346Tu2A7wrAH9DLK1BaFpKUgVNCuB8Yphp",
  "key46": "2tftUHzEdaZeZU3QqJm4mFHABX1YGQSFdnXETUYZoHw58DW3LheMBqP4FzptvfcYp3kHAKcJFCE1MHxteYDRVjy1",
  "key47": "2vkL2Fdmxh26R3ZkcRaSyB4iFhtv5GW5RqoPyFFwxFU1ZGTUcuSFA7fAW8sRVkHBiTDtuTZNV2hBVuQheiFsgmD7"
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
