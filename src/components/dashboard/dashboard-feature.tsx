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
    "3BzHAhWPPiuuDyMkLTg2gWA2jd3QtJ1XCTzZwmgifN6WeWT1bvmZ2B6YN4cL9YE5ndkKy1enuX6Wa9ZDbSJmkXiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aLQfUYTU8TU6VrmzCWuNaaQ9jTfB2eWimPvKgxeBUTtRH6n9aoMGtHQk4WbmGe3FAPaVNP2C1DU4ci436Dp1j7i",
  "key1": "4FDoMs8k24Z6C4RPnH8ev2yFU1ChHPSi5QtCGQjRRVNav4yx1c6xk7idLGpoa2r7Q5vEBojd2X4ozZAU8vthE58Q",
  "key2": "theVXR6oSpeQfUhRUEZtuJideb1JBdLmnfozNUdxBN9x1CxSRowokiBJc4Bpv1iXJAytJAq6RzSsSmYBmvKeSMn",
  "key3": "4ygXtqw4CWcWf3zhPxJunPdhAgv6LAjoVfxL1qYij1n3seXoFktGzvzrQ3FpCSxDQddAcUJ4mfK7G73cZ8RsBczR",
  "key4": "5RLZwq7xtivWKCCq3oFDdw6U3KJG8x68zZbUQhjggPQZLWkwfYWJnGC7ohCEPBEN4Vf9CL4i7ebBKyq7adeYZn14",
  "key5": "3dX4fmJjCgH71W6MQgeYm2xd5E6fVNj8rJdP1mRH1QyLfWCHHHJ52GvYy8JZpd1UhffzYiVmJSdmWBzDEdLpuLHv",
  "key6": "KHno541wT1kP52KuN21REjZrX7GPtTUsZp1i1z63hhgBA9cekeMqhjN3ysNEoyqty8pZR7MzHdMDvYSxdrjfFqf",
  "key7": "3STYB7LA7WFjgyMaexA99BTFiCeYsozL1gu84RTMrEuhPWYoUNUfYBSs2RHXAV5Uujf48e3XhpqHCpnJKfXbdaRs",
  "key8": "3JPVMRN2kDt8uhABiaFGogpFverdo4Kmm7EmtB9FYMfnBRAVZrbnfG6EMykNKWNxWyoPP8QMMWopVPjYAk3qJaxc",
  "key9": "41yDtS75Qe46RkbKrVxr83z8dEppFELZCMJw7oAZA1GVhKtBPjivft5VDz8sy5d1oUVAxENXQwKN9ky4r2KWDNGZ",
  "key10": "2CoyJJQE15FmrUeRhK1VVxzhJjRD373QvJ2UMZ5HTh8PuhBVGHf8eDNTuYz4ueBfFDAgUE6X9qkEqsmRwH9tVwtT",
  "key11": "yjFVaakeg8ExionSkswTd9mAuKUafC1w7SUDXTDmWEQ8nnDt88DxzSVAzFhrCuvNmYF9YCPfzbr6tX3RQgSz1Qx",
  "key12": "2MFH42ECXxV2HeFT7TTVRYMh1CYi9Rjv9fM192e4a5f2c6AWrC9fJEzvpztNacaLSM5kuJmgLjc6nMTHyz2ZygwE",
  "key13": "3W9FuVunNrZ46253tMpgQXyda2vXnEw16cr3oaQHKgCAE7VTbDRedEEgRrR857eUweLgMLoMVJ3WLZKT6H5yBRJq",
  "key14": "Fn7JeybVEjAjYMJ2W7nb1mEMMwNARG1QG8UA28wHi7qiDXbBjPXTNqVdmyySaDxKz1E4huNe24MBTm62SPnW4BP",
  "key15": "4vi8eKBoEMErW5Yi8AXp2Ry9B7fXieyUdRdnxKcvD8R3zA4c6KKcoUoEL5As2bWj3hZdQds7T8UWhxKw2eLfEqnh",
  "key16": "3YznhrwRP6pgvADcy6BbYFejyPr3pcQgoYmnq26bRWVycmUYVH2hzvQK3UbQXMCG2Qq6YgWuLovggdAVxFNRUQcr",
  "key17": "3xEv1euLF1sbSnnVVAj5kPzr57fbMJbhuSZPAmaafK3vrLNL28Pc7GkE1QNMvog4bVjFj94khm7iGRGULr6GChEQ",
  "key18": "2M53kt55AqCQWv8TDyXPXwRSmgQ9PsmhiiMbHyEM4jZXd6gqyQyHsrnDSR98Lp5ywrwvoWEh8CULoop9au7yRsSW",
  "key19": "8ubXLgjPeBoh3N2yVvujTdJnzzKrWcRWMBgBirv1ZWQjzHVMUVJ26Erum21o7k1r44PdUAJJ1motMy4GVYAopUp",
  "key20": "4adFxNSb8nHZ495pZCCbJYdWyhZQRdDyNutv1VniJJTMRxTSusVvDv6hY3pPrxuuyub7vEXPwiycrXh8sgVns8MZ",
  "key21": "339MQEQy1f1suptBZTn6JTjd4UhC7x36539aNrqWemES9dDMBZbwyJNcEF7hLNbyVVn9Ce9BGYZHhjWgG7fZPL8j",
  "key22": "2xbe1A3AzpefURN76G4CcAw61s8CZrRHQ2g7TJKVEyByauW5JFszfca7X2QC5z1SrGS5WMi5g5yiy1oSGTok7Kip",
  "key23": "3VdpErELE1KVDB5LKvjpRkEUNN1oiKdc2vnRJwxxujZ76V1npUR9CjbDrKerGW6NFcsnpdnt7vNim9ou9GFZYn6y",
  "key24": "adBWRkhwgHXM9wfzCCV6j8YkmLPs1WFfEiDkpjmGf1wgVuxDcZ6GhBifH2yFLUP9rxQJgwNVZNRmBvKsLHsoQzN",
  "key25": "4irNTCYhoQ4Y5ftEqJUkRpTwZLiLH7ZQC1zuANYxsj2rxN1Up9c7A39Y58Gbhc4ML6GETbPWwMdi6rUFqUk6E7Tt",
  "key26": "5B7PG1f5NPSvHpzSgZK7e1fzwvcGvz5BcVsB6iWWMKuPY76U5Umz2ZzfZpwntEG25dsdKuv8NWzrgCtJKVwGkyqj",
  "key27": "4jXjLGqQszQbbxhs4Eeb1ET3Au8NDZfvGHG1xJ12gjPMbaEsS11mjq6PBkk1RNx9MxGnrpH6GWjm6HvKJ1nGKoGA",
  "key28": "5db7r432h8KoBo7PaTk2XB3aMaeYi3vXNMnmKVhzpg8cYbwuK1n4LiRRb6GmDmBvWFhtk6AAYnNXbbApqwDM18jy",
  "key29": "67kyx1nxmEnsG29cDMEbnJQwinEX6Wu9TJrWsyn68cPAoewS4ZBs3pBhXeuCyHnmg4cLaFLUzyFusnEfHa8CD9LK",
  "key30": "2GdWw7mX6csX3w3SztDSuMkVSErQ1rMnAxtSd6PhaMBA9c7YxKoK1MWGfXTqvTnx3xy8cb9GEztTE4hrSEyxeWsz",
  "key31": "4sVQ1RdmqpmYkT1is22um6XLX3CRLQEQQLwSBFkR72yBZkku2f3JpPoi7DSuigAGTfE3H3FFh2crYbgvuXt9i2zM",
  "key32": "2e5ZG7Hp8ybqUKf6BkCdeyWjdXmqw9htEKNzRJacsSAXviCQR3kYPteCbYY7aknWJ3dEbZYQaPYGa42rRNdNgGVa",
  "key33": "3gTEUv2tw5UK7aivcj4RVmk3P1nGJDbg9vweT8xn4D37adYXtUcR1d6piWPZUjCfrLu1uRYjjLA6K7XzMWbA88kC",
  "key34": "4QFzuNwJPnwLcfmSA9UxdrjUF3mpK9U6VCbbQyEV2mQZ2jkPf5pfpo9vuB6egwWFvNS3MNg5Wpd2pqmPXrbvhx1V",
  "key35": "3Y4VSFNsbjk91C7LWSJzuPW1vfpcWaUvLRGh7pSCbGYYThJuB9paErhpMTAQ8FKKmpRVbKPfbM3Wh2P2SzampXdV",
  "key36": "oPLK76KFJ5vB1DHVm9zBibRqtCrr79HJdYGLg9YyNyLRhj7N8dkNP2Hpb2L8fgkgnCSGm3U47JBtj9PNfm85Dsa",
  "key37": "3hYNmc43qgn55ZkMntfoDk4nd9KevC42sMTQtXwJziWVZyqE2H5HTYrypV96Uf8x2FQ6CKNhqNTMb9NynDd9FJHE",
  "key38": "3WNru4zSp73zLKjaUA4hHXjPg2wrNwLcZBLZZuA8wHuyAKQLk2qcSvakaQPUg6vroDrLZUkRNCG9DbBKhSkdjpXD",
  "key39": "5m5vsHnuDQkcF2cmLaJLWcb9uZ8Y43yMcYEd9x283Rkz8We2vzWwu4hFBHQAJ9F546i9uoTXsfpAasz8uQaD6rPh",
  "key40": "5b7P4qxdSuDdZHUthjaKbdwywPcbm33NLJaCF2vGTLUmsYfRVm2RYP4FR6EohHJ8MLp6ySnBNJbXbUQGjMDkdciC",
  "key41": "3oirYCab8edLWNkoiJCeQAxwzyg9TUue4SJugkC7wWVNXudUFTwYKJ9YWbCcxepPQSnkayiB51h6aFx7UvrG6m41",
  "key42": "37myEvRsFNGxFzsTiDNuKtdgwkthApfLwCYUPLikCqhPEPUS9VZhxuHqGuvM7tsUpGcSZSVKcw6GmKRJ8j5mHHz3"
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
