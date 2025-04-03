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
    "3pFPGEsASdGQDxi4qfeZWodzTtLGHsThMcGZCgPdwUCqeEndyi6pDVaTzdykSyVQd4FKyUA57BW6towcvtKn21Xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hcJz8wEeczoYc22QeCKNrzPS8LLvJALbDz9jAwX7wZ1mesAV4ezPCQNdya2eBQU2s377mrLBdNNkNW7cSMbb5zo",
  "key1": "5jKjiU92ZMhfdo7zpbLCJfqRuLRLHTWxb5kjv33UUakrLyqvbcQQjHmSeYH6UkYZrXKRdSdUAvkUtx5jZ4mP8cdp",
  "key2": "5KJZvfRVd8oitSTwPysjaUzuUkDXYqcTKj5bz9r1REWx4EwhEZRNqCQ6fh5WaBNPiuuhfXzsmkTUgm1jgw2EasAe",
  "key3": "643oZGeYAyv4tegWVZZekr4u5ZFHxs27AJzJ9h7KRDM3vTsVMEWT64oWZwtCVozikQfvLCsQkyHfYW3p2DUgmdEt",
  "key4": "5NvNbcenBG7Nw8ZaBTDSazqdmGLGiSwR4GiKT6DJv35xgjfm4URFsT5vVY8KXE2s1RtUcV7uM8v5hY2xxqH2sf1",
  "key5": "4fv8JyGzNRmW3aNRJZupoy1aGhW7UnDD59zTWGtZpdjoVCPRFSDNNXjAZaVKokqZBWo5f4bxXaeg78Lj2DcArS9a",
  "key6": "5uEcNieZswVeDhoTu1xSNDxndQgsa3UhqRT6y6V2uEmA8xUbF584nMco3315PqyDQXSq98HSqaMo1t1s66wkvgJB",
  "key7": "33RPeF5peJUr22MDgz3xmCaex77zKKwf5tykgJ8J2wNz9P1jW6ENebcJDNrj4DGWNkmQLProPpqL1yXif9wqV2TE",
  "key8": "F74qjPmvYcYFHEXsHs4Q4hZ2HXjrowCSBQVPfZgRrujoMQZJcrWKWn6PuFax7yUy1CQVbDWYFb9zM5d4MsHDriu",
  "key9": "3fEA9uHqvhEJSLCUax6H2cdXddqPJABMy2mb1iphPE9xp6JHD5sQU41k4ttG9HX3euEEtG5rZcwkiKZaPt2mJQCE",
  "key10": "4KhKuDuncHAdJicH2VTpVWKcXLScBiRK3gJUfQkaeRo7nV9cbFxYCHU7bxbDGNTcdmPmU2zpu87dATsJesmeXWRN",
  "key11": "jrwLD58FqFNcyajUADGrfoAwkZoiHZZBt64mD2heGB4sPSY8BiF83Yp7ZdF1NpAWVi9yrgCvZhWizTA5bSmzJYH",
  "key12": "28jkBxJ6pJKuQwDpJrnkDAvzyrf3SwGsDNogTQMGVydePMPu5fg3MaFS8mcS4HY9e7GWy5FpGdT3h5p2N1UCB6R1",
  "key13": "p6Y3Z7mmccnqhrsyuJ3gfGe8vFjr98ejFQwBQrYdNg6hdd94rNxUXAjR8RrJ2bYyj9qaVX8d4zS93hNxJodvuGn",
  "key14": "2GJRbqpTmhs1db2BCcuyF46eqGH2i7KPYz9p4HYMsL2TUBYekgxC46goVigYaETmuHzgHsxWrDbGyAYyF4y7Pgqy",
  "key15": "ku2jCzMBto7HkUsmpMkf3Vca3JjDLCeANg3uwXSeTFPqn1tK14qLzGDv49SCSxtGf43UbUQ5Ur46YDcfeHP8DvU",
  "key16": "2We7QtGxBdzGam7fNA2s4meWPyBusAu1z1aRceFDB1kbKPL8D2dGvLsJnSXCXgr59p7zTW1YwDaZAjeCARZGuFfx",
  "key17": "4wd43rrifVwSSAjDYJBYatGLxFwmhTQs6bgF4SK7MeKkuVxHrKsPNPC3a4v6HqFHMUkHroa3zwNWfNFDNKSh4pAA",
  "key18": "DAHfEKzG7W8DTDPi9hHG7sCS38XwBt2vTLdP2v2pY9geWNzNxqdVyxF7MKwe5pR8Wbc1ihjUrq6ecsbL4d4W9xP",
  "key19": "4X2yFvdiXTvhEruWm7RU5dNzwv4D5EdtPeRJ6F7CNved9secGCFA5DKQBL1dv5vDVZE6RpQgFvapyiy1GetzAadE",
  "key20": "5DZ4WphhnckGrSU2xjqxKVfgJ3gGihgUSNG3uyWgSwpr9gyiFzYRXvhqmvFnrYksL746LR6whTxgzRmrMsNAE9De",
  "key21": "5mS6ZWFE8L6D14VKruYAPjL6eLoJprMGr7Mz7JWtATLEHryJ6ZZZKXXzoUT493ssW117RXrxpq8Cq6WNJP7Gq8en",
  "key22": "QeiEa1oRGgJBesxvxg82gZ5KA46wh6JuVvJiKfhhr21346o3eeXytBQnJAA5CqcTAP6idWCDs3YJwxqYkE7YoEK",
  "key23": "5dSSerBa9FLihSPECA6c7tQcHathznj8wEiRBkKPqbfejUewqnDStEeaTN4d82r36VLxz9NPNkT2r9zwFJoewioa",
  "key24": "3nY2Z3QezV6fzJkZCqHZ7TREtb89sBy7qBs9w5ZaUsS3skW8WL6tYEPByYqrsstFpao1gnH8x7v2DkWqh679BTq7",
  "key25": "2SyiaNutVHtRPj2qAdVoPnLJWQ3dPJL6arPKKnjVgQD1BBSD5UkD9VGSGJjJy4R7Egz6pmkuf52mftm8e3KAAafF",
  "key26": "V67wLe86gvCzQyRtKWG6Z1j47vCURbjkzXAmSa3MKFfKxG4my7Pyt3zJ1mY8nAfFPpy2HRbLKzsmbrYz9jsVkj1",
  "key27": "foDJL1tFKxD2YwEGHKkCqAAjKbzYKX83Z3UcHa8AjuBQuoXV1HG3KfC7fHrUNd54pZybYrKT2gjH8B4UBvLPb2N",
  "key28": "4hzHppAQbhYNM4oWhDJSjxUB2XGh6QH4Y72ra1PHqWC4VJqVFknuxVNDx4X4AnCxmfth8vkWfuWTHxa59x7WRhes",
  "key29": "GngQ82HZKCbuTSWR6YQe157won19o6cnAi5qYXR62dXC9UtY2bzyxNM7hYKVb6seJXCKAy6EMhxHrxXk4942wqH",
  "key30": "2EAJSPMMPjexop644baeXrhFoCXqKrqhcfabF4vdQC5kSLE4He7hddyyfYGZM58aZ3Jmrd8nGkEg4FFNSVnipTTR",
  "key31": "5FMx7mtVoUsSfRDLpL46qkteDJUSG59osaDsmRXEjaYjwWgQs4WAPaznUWPAtqJaLJtuWoJ8f9oEnUdS9DvM4jPg",
  "key32": "23g9YyfrmVusF37FCu5yR3qYbemHSownmSCpv2hfuqDzUrqXcVUbu5G6XgA8vuH3BXu75Fxj7X8dLhpWkZgmc9sW",
  "key33": "63aD1Nk2an6z8HoXfW5RBNDtx1SmHmw7ZktQeMa3iRH5S65k68RSCnNwrSn7m5N8q9gQSKn4efs6tfFgh4gVx5f2",
  "key34": "7hZf4SDnsMEz4Xv381bRBCqKrgZNPE5N3ip65u9DW7J76Exy7YcJyg8rAXCCNmjGTdF1x6Quqw6UQxwWk2PRDq1",
  "key35": "4eZbbErwJVay5n8oTLMQZgPdvSNYZ4LQ2DVUpzSeDZ4v8eC1JW2KxxB8QojcWncFR6n1tNZFAABBWkTU1JmGkCFE",
  "key36": "2t7a61htp2xZuDrwrHUJ3G8o8SjeTgn8cbUvPmFygmdWvX4nJUxHQSnLH211vLnTk4GVj1i6hcL4BwoNYzyzWWUZ",
  "key37": "2bo3Acu1aKf43g5zmLM1FGKQQ2uEvSJ2d4jMyHnGkJi4fUukS1wp3XgjnkLXA4Ko2DX1WW3iKE6XMqfAanFDD9Xa",
  "key38": "5LpNEA2Nm8eCtGMZRBjswGbzeRVDXtoz2r6DGYUNbzq9Sqg59ADkgZ6qtPbqWMTfZeCRF8MF7Z9Gt6dMaMt9pAaM",
  "key39": "3Mke2uYpypUWbE6vsavrtPxJw87jmhVB8BAQfqzDhXYSkPhwko65FLMgR1qCKvjaS1Ra2hQtj2aYJ6X5aYGXzVM3",
  "key40": "58z8AzRqRVmZDyfwoiRL7vSt5YexG6EeKB1FRtrWM7nn77dP3ko7D8kJdhma6DqN7dw8tbPuJjdK3mT9PQioW6AG",
  "key41": "2r44sNjYwEGuoJB4RzeHjZKY9TqHHjbpTxcC7aLtY9JNGjQBFrQyPmsfvThKFLoXK1yybGTTE5BMmhNSF9qwdjZZ",
  "key42": "2hwKCKUurSUee5XT1pebpQ7FD3xJmNMyinMYwKXwJkXK4bULh8RNnA5cn7AxMswkSffCitiLbqTrH1xD8X3RtvqN",
  "key43": "U2f9cmadEoqR96JedcoBFFsh2yAUSKbesNL5mFJ7LG8W9nNTKNAdNgYY2eqZTiMrja3hvisPmo6nGqqCGMQ8akG",
  "key44": "5kbLVsM19srXiDYht9D9mR6cRJibNXGvm7NWYyDSedHxnKVNtzHXyrfpCuVTS3fEPCun1g8wefQzZJU3NsTeHNny",
  "key45": "2LETqidgdcWnecmn1LHvrFMGARJH9NRvcUYiroY1pPjw6bEN4M4tzb5rVcpRZ5sC1EJYKYXH1UJbpdWzdfqYBkYt",
  "key46": "5wnAPBCVcovX3iDB5sCP8AnniurmHAJ8BzdG1M2YkBdp6NHbJpqPFyKA52szTNcgiNeaH4bXPw3VQqgCf6uaZBwg",
  "key47": "3n4MetPyCNWPqy9a6TabRESvSKK3jzf7Rfpw3fyQe1jckh6CxX5vCQwSbN6NVJSbMwsnHFgGEo56mKMD2nFaE6um"
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
