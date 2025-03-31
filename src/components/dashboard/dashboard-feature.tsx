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
    "25fGjj1tnxDXZMmEK3Tr2GpoYrgEhoKaXnMwNgJn33CPsJeZ4c8ebMKjCBGk87hYGWrk8WFp7nJJ9AVkzsgeRgtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v6nVgEmv6jL8rBzGypJDgQQmE9TeKsdKXzoD96Ym5689Gv5oW8mQYUT3ZRz7954L1EJW5LL1Peh9RzJxiq6jE6H",
  "key1": "2J5Zqny5GK7xNeEgHcSMZsFBRLaVFHv7H6hEn4idxXe5XZsFCiYcDNMELRgGKJczEp8tYVmUtxUifCHAjVrMM9Q3",
  "key2": "2Pg7KsSkJuY7KsjemDXLDdv7Y23xaeSqFdRVvMvT6XKPe7ozSsQxbthtz7VgiDr25s2EMiD4LoJsQbvh89QCs8Ay",
  "key3": "5DsvLcG6hUGTBCUvDc7jHNc2Mz8YwHqYP675PM1JrUQohhTdxt8xZm7yKGoqbULh9KJH99GhAeZB9nBTfCAND2pY",
  "key4": "ztxZBy8QzxYwNyQkPhHQV5ZfBPWeeQ72fru8miqPy7pkuuAb4FygxBifmtKMj3L86SnRRb4aqczvYZjyx1MBjje",
  "key5": "2v8RKvweXjheD2F7XY9HTEmGUPhGjikb5xyG17PZ3vG6YFxWRuHjXJf4L52w65cpYtV7jsne1GU2qgAFrBwgec6s",
  "key6": "42oSbHFEeRkj1K4fSLo3G58FEvD9c6vHtWH8FiWByUm7TnH9PqYR7wKQF5Kbca4sGSU5Pt9r3ceJtGTf8Y6mmuyA",
  "key7": "4UbfKfff6EY3KzvR3xAB5YkTirTYLjxZWUqcPn3aP215xm4geGQ9oec4L92emJiG2tcb5w131n93RH9Er5xYkK2z",
  "key8": "2cTCXaeK6Wpn3gTmk2EfaKyG2r9KtvEwqBrTLrXQjDW3kDvrTSJ3kTUUih4fhtDWqJVrxPHHYaDhyYVZnF35Bdu9",
  "key9": "5GRQuWFnmfKmW1EyFK3gGYXYd6LhgLPydTeaCsBNCJdYwR32PopUxs8sv7A4Yv9xLeYQxDwqcrVL3dMs4X5pi3tS",
  "key10": "2ZoncjtBhQPrSYrW4m7GjSdTJM8bYkgK4Cx6U6kk6jU3wATxyro4cw3KrdHYbQUsUKA7HxTBmaBAfyhJYS6meWdX",
  "key11": "4dz7VMomqwU4o8m4X7jFspBrfggjgNfsqhdkvBd7HZwWMqVQFqFhR6izLhonH23DrNBb99jwCMtpnmPdsJScYdfn",
  "key12": "25wLhk1KALXvX5RaC7xE1FeKiaDPx8GBduHZiLPSeaPUZzvQyYBqr5ScABbErdt5T9PQdUAjXJUF3s3Vo6bc8hf4",
  "key13": "5SCGJfbbeg3C12SVRA2i9sVDd16n9Bu6NyrCnqcnSnV7f5agDstgu3yAEqbGfJiSX3ULf3tjEoL4Ygd3A81UaoJr",
  "key14": "673PjkV6NRBA5dHCXm8HfuEGoCQCsEFaWSKmTvSTVxPF4gU7anRwiRPeQFvYeGvsLM5ZdvRChxEtLEtM8cxGeehD",
  "key15": "qan6G29oXYZjhM7o2fNUHmsaccv8pAjTWzCi2WxRHfYaw46F6xs8vmxH7VrAWN6KdU9BpV1EmTWMUQsksTRuGDQ",
  "key16": "3GD6n7xTdE4ZjTodb9h14z923HfGSXTLmSXnkLi6skHt1DjZXxgLVdPJyRTT5X6NKwQgFTmqfinRg4FvM8bfv667",
  "key17": "3PqMD2sed8Cn8kehMb6rgwoRDjWLu6zrJmobpbsC69fuAoJC1LgDD9kEddaQYmtW2tLeU5wWy8dKRwSytdyQ1rZa",
  "key18": "2gmuottnwvXGFDwe6stqL1UwhitzpUmkbjyTiK3n3Z8rXBfK9yxtPtfqZvF2NX8ZkL4Gex8AobyAJFqNnvHmPs3d",
  "key19": "4gJHn3a4odPaefYBNSaRbGvMARLknyQKVRcpta9LmyEgec8TCJVpPf5EouBfFq1rvDjCJ2BEYN3Q5QzRwbrFtgAx",
  "key20": "5YRYbkE5NoYcZLDoXwdSzxYX3CYXw1CxLRQHMYaYduYV7sHvo6zE9izyKfq68F1naKtBk63cjw9NciAesNFyV5sX",
  "key21": "5GaTHu7mJmDkeeE4GLJ8izRF4AX1Q1fEFEnHwtrc9fA8f5fToMJJpWy5UkpJdcHy7LnGXKoP7E16BTaH8DJjRqHn",
  "key22": "5j5HDre4xNSu2Dx6TtB8GHwLAvTtf5dpHmPhqAP3Ee4tYLxzioQmFPXnbn98DN3QA4J6QbHcBa3idkBzbo2QRsdF",
  "key23": "2jDxgKJR5hrGFWgSF6MxJhwfUxot3DPdMahmWsL9CyexzdywGbtALCY85BYdTFfAnohojDeFnBCTiAg3LKETq1BC",
  "key24": "4GJRoad1BMD7QhmCCqmgvQfvCpUvvbv8AiyFiCwYD7GxpLJNy17kaTffHWKE28DVch9Az4SFYVXLRUd3p5HYtwsi",
  "key25": "57uVcdK88mcLK6XTXrQ1sbpC5MCbZ2xDew4EqnqUj1VsxL7LcT4wxZswquPxhVHfL2edUgVfbQeSqBTAZLwFy3Xd",
  "key26": "4mZaWW3cA3mgZ9kk5bjbPACsyXnAPggcTbr5Uq9wMT9Fxui1vAUyyeWFmiyyLqJhY11wk5oqGJ1gujyQ6eo3NWda",
  "key27": "A5zFdMP7gvmcrbLP51N2VpDdAULAetEHu5FvrAi7nSjbD7vL73Yc1cs2CfMVQCx2AMQcRyHbqDA5tGRhiwfwt7m",
  "key28": "pjsYW48wNQ8LmrEAJsKg6iyhwTMCQgn5gNE2eC6Twng9Qx9YTXwkHnUZXEXLYKk3kcb9tEmzWZyU2kdWgbVCtxB",
  "key29": "4vjFYpcgXKkhSjtzXu6gCPog8f7YUuGrftBktV7HvpaUUa4dpdmsWiHU7ZTRAKGJHrAaAr1XQ6zGECWQYKFaKunr",
  "key30": "5MkLM79UMKDrzuDuvMtePVAuaEY8sboGobqArra1ZbdUNu6omshTRf1X89c3BUxSDio3WGb55kVTtYahwkYh6jah",
  "key31": "239owrkbuRMR8AcMqAzZNUip7Hc16LwL5aRTmPW4LUMtB1JwULLqG3Gd7vYaq2FoFpwRQvG5CW1sdSr2PyVftUsw",
  "key32": "5zgxaXtNNebSbQQ9NDd5xKJ8x7sqKXDkfuDMxMd2VURHHTSrWboY3dn3XdysJcRVKkqbAfhBEfC26Hu1QnpPdxar",
  "key33": "Y63sqf3o9mfVybbQwJP5YQbyuzckUbf1NEn3xZkLzLiXRL2wMLqAXm1fjZk4cUG5TuBUJ5P6pTCphKLBJMw3mAJ",
  "key34": "4XonTaU89xCoGVfeA1eVd8urAjxWrqWTzaeEANVPWQPCWrat6rnUNUWYqAi7mXmggkckxyE3aoJVUiqA3zPXN9e2",
  "key35": "3ob4NaCayiPPMo6EPLsMD3GKrrkpMzNjs376GFk9sBzkatcAzXz5pBFAsqXT1JBAqS3RKRYKFeWfnkD4maEDqzbv",
  "key36": "3Bfwaua5HVMQHXBbd8TRFdMMvfrqvZuSh24PaK4ZsHrE5Y5TYHCarV1H7PspNjLbN7n5i3kY7BywkSKzbzaHfNTS",
  "key37": "4fMHXZ9ZHKLTXMZVcyDf8dPFvPB1mz4XL1UHWA21ZNymtHNUdDX32z4mkQYZjpDaLJVtbba4GwFjuRtyqfR6c4Bm",
  "key38": "4coaMCU8QNqPakqrsK9nUtqLDSQ5RodeVS3KJL9zHQAeB9cHCAcHgWLh1ETfw9f79v52fi1SVrBs2oBdgV3YmkBb",
  "key39": "4q25EbdTncvm4YeLJxGWpEfju7psr4LmaCtoFiRiAUZnn5bwsgw6anrJoPocrvjpH2USSx9WxFiJPUrV3wcTwKhy",
  "key40": "4Yyx1UwnjFhmZKTnswMqYyVcHjhD12muKCabdXfmmNJqK6Z8qnQ42A5UkehJdVT4NcnccGxnEYT8WDsT3K7EPDtX",
  "key41": "aDsgwKEcfMNqtuaZime1zVwGevZ4hnUKqhCXmw58WFparHigfGA7BQYg54gzSBgxdt8ropUYSD7bbpGzZu6jJbZ",
  "key42": "24m1uLBUdULq5sgsCAHYS6PsSdMWUKPfYsZhm7txBpk6E23n7fKeXijMWuhbtu3JiLTrxA8rLwh3PoKVoseaCuHx"
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
