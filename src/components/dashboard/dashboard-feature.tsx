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
    "ssADt7Z1AL4mvxQ1T3LcmdjAodRo5Tqze5vZguB6STQ1vtZvUGSqHsRnrj4DjzWznvjAcX8Wh7CKzP9LDdb2Sme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43yqRsUWgdkZPgnK8LaRb4HKXayWiGWQYZNDEewzBzjjmVs9BGns26MZC6zaSxBoHQP12EXNwo1PonAGjh9K8aRE",
  "key1": "z7QuVfJE6RauvmHmTR4WaDJWQAtQ8EvRre9CbW16ZxiaBhjfs8pMUkv67dcFTLreWiy7Kd3pKKxoejACNgntfPJ",
  "key2": "Vu8UKvonuqsKe1mGkH2KwDhhKQokJDMBjEjkmcFmHRcvx5x2KtxaCwsbycYp8KRQV1su4dtbGK6YhguLXbp5Vcq",
  "key3": "EcwUzgJ5eQqDjeS6Utef7d5P2wX6egzU5Eo1gH3wPcRMyd4CwtqfGM7dwy8TQGPYZ8qH4dQjZioPhqAC11YDD8c",
  "key4": "5sLqJCZN23Um6xEfpXJCWqQBQQvhWgwDNhKM74g3bG7AD4AMjHzt9YfwKfetEQnA8dwpnND5NPT2E38W9vMNrrMv",
  "key5": "TK4fsiTwA3vFQi3ByHRNAszDvkCBD2zpLfiVBXh3qJptgofP3EJFv6LD3Lh9zYayRYJ4PSXPA6SRzyaB6gtk7rp",
  "key6": "MNCTHZYHkHDcin3ThoiDV6L7g9y4yMwnSuD1sAY25bnYEPLUuvnxQ8jDTtSscDE3wDk7KzVk96h3VAjBvWzdZLm",
  "key7": "66kmH72J5Coc9RuC6nKEykw1QLSCb58baSKFYKApd7oSnvMphE33oywNdaNrdgQQuLdHVNuGfRutTCuwT6U78xkt",
  "key8": "2n1qKkhf4nVycA95KvbQba54b4ZR2LmhFTqhJFMmjzNBoEPDwymxFLiFyiWB4J87wESx4QaepYpErkv73d2f1j4v",
  "key9": "5qaFJ2D6FRnnXzhEyrW6w71K97uBEMxe4YwZ2N88sty9KDTUYWS1uNYjuAMg2RFs3EnQ5y8YnNdYv2vrBWg8PCr5",
  "key10": "5FQcvsefG2THRmNF2QggQwRxxJHzeyYXh2jkDxz2LPRG5pdRR1W37iw94q7CiceXnV3CwaPGqwBQhvKbRWfazVXL",
  "key11": "4JaA7GFZqoyBKFF6XjdHM59R2rLtH8qf1TSbxXTdY1hMRkrSwp6jmvk59oVXGJWzXDBEa4CEjEZkCHkKoVoguRJY",
  "key12": "3WeseirN6adTg2NTsqUk7TVyXN2fk2r89zWtjEhmPQSjgnWs6ZAp26WgnnfhbPg2C5jTTRAqcmyDScw2rcdmLrnq",
  "key13": "5itgd6ny8HJAw78Ppwbf6aLMWfRUj99wNQEVpaaEvtPVKHvx7XxByubZLQirpyhsxbb4GZFo2teyxyo2qCTaDTrY",
  "key14": "4Dg9B4nW97T7ZZGzzAnF29gViXsP3n5SxFV7ZSM88azubvhftWpeyDGTTQbZ1CnpNW5VHBdHpUxW4AybhmFbFYEu",
  "key15": "2J8hCkCBw3rfG2TSXSYDrsTPDThxAtAQNmyR1v6e288dbqYwhp1u3bwAWeiahP3ydJTDPdLSYFtVaszLaZAsHUNJ",
  "key16": "SxxNqVYLmsWC9u2WXF5i8VJ5GyWxkgzNgc2HrVZhZnhcMZ4kWET3dsc3Sm5KuHz6SEkwzph8U5ZBTAcq7wmkYWp",
  "key17": "u6JStyiDiKeNWLYoRYneKzM95eHr7NDPewFKq82MCXdX6SKzR6d9egcffntKfXsG2vMP86BBeFA51ida4ZN1wVv",
  "key18": "321M5kqkuvnmcvEucNcEk7vKhSuPJZFPLcensERPRday11V5YAx2ASgMLBwfULofZvPsm1uL969pC7SHaNMWKdGi",
  "key19": "uTz8BZVdcNdoV7BXEsWq6CNYxWNgowFphp1CwuzRc4aPzbpwv2hWTR2LoUitZZ79Ay4ewNAU75QVcPXD9v9GT2q",
  "key20": "5tp517yKiqAd31ZeJVo2L2Rns1tRKqtg3g5LYdRLzqbgEowwY4xNuHrBzKAWr6h4Do83VAqjNm1apCmgdfkTgfzH",
  "key21": "ndgvBCSggn8b5ZCdsA7QNTBh1dZfQwRLdDFFMcN7SpN56kKymgEEXvn4ppDX3uoMiSKvp2EiCqNR18JMfTc3MUv",
  "key22": "29GftobnEMGd4K3egAQFJXeRSjZSziPBz6FGop1SsVwEB7VSRzMT9L6eeBxKMyHdqcMAUfMfMyqQBvvC63GjBYQZ",
  "key23": "2uAd3oxzJY1qfhFd9cPwepazpzsrGrCA4BwkCF8pSjexsEwcGwik3CbQES2pp6hFEcijhSeQPJdHuvo2C5z8h2nv",
  "key24": "5JpVa4eLMsmXPnYoxaTsyixP8b2sem5eBufF2RRk8MXUmCNA54pFG6ytYZC1G2X6hZahJFNsaBnostoDFdsgNAHK",
  "key25": "3QEJxJLDtV7sMPJ27P8sLwR1xeBJ8BM3zSGwV8d4BpD8qteThRfrXKvXbs5cNwTyhL3d5s7GPaCTqnFdLDqcoaZo",
  "key26": "4Shwg4yyVs1fCV5pC6pREXSAKkjuN7rsRyi8ZgUjbnnCyfbECyLKPaqzL43EvQU6WnhJx8M2VjH3e1XecDWHWbc4",
  "key27": "eWzyZE8DFGPtzjQ1ehqCUCSDcJVXNubVKNcSGJ83v2kzYVCrrSGJE97VWYxqFKpo1JSfj42qFYAP7L518hq4f97",
  "key28": "4rUkEgmzFPndiYWZYCcdKjq4a6F5nTtqvFYLJkFKjWJdRvojgvonEmkBKWComuHXqsYHiokwGuqVwhNwEdTf6ZKa",
  "key29": "67ZRF5EK2nmZAt4oUDhKGywof43wqR63zouC3bjCf4zvgJsv4uY8FWqp4N5p14TEMBcQu7Mvn3Y7v7kZUs9UJQJT",
  "key30": "2awVybaWkST7TvBaXUQVPUGwp3YeoSXUqghNfzfHwNGLMPgqQTYEWBN6aZZUuGnoYC6oRzKJAKmaqPoxxu9ev2S9",
  "key31": "4LU8vSs2b48n2tp8DQXovCAjvvnGRCsDsCDw8NpGuxbFeesnwMRnTMXXAg9pgydcoh288aeCJYj2vYpzVT1SUcyy",
  "key32": "3GVE7Zat9aXQUyYje8i965sBTfHMcUKfoeXUGUS4D2vAXkTNHDWrTbYuP3kG9BufHTrgSrxXvTDRY2h7s87vqYcK",
  "key33": "5k32mv7RFHvni1KpC28ryfcuu6cdw2p7yQJFYrui2Y2daxKenCSRt7xvofEHqWBdoQmXuzLHMR5ig12CZmBWjHGA",
  "key34": "48dnunbZA7oyt2HFkmE7Nd4FLjjtAcK44eui4rWvvoaiM77WcdA4cjMDbCcp85jSj6juik7GbKkLMMAdtaSHS6BU",
  "key35": "49DxcSjc2J4XwgUpKCmxsWK8v77t9kCsrSP98s4TQAFpXM2DmSsCjVCLxukf1cXaHbNpBebrUGZ3kbkrZXQhipR6",
  "key36": "PfKyte5YrEttmyk1kWG3msLy4pzGyGVK2t4yYSNFu2j1zkKTYoS4ZMAMVd8YGEnw2mV4ZSSyBcURF8FbYuXbAdC",
  "key37": "4uZgFBeyr9weXDJzLDwhEGeDzMrKvQKxeXufCWk6fmnrBKhfBjoy2bbPVVUsZK1AHCTxCPVAeajWsdCQMdr89K6g",
  "key38": "5XAJtAr8oux5rFAfohu5u2waJm8B9AUehNkJmupT1fBD6xfExDZ8bMcbsznqcx4nyUxzZWZVFmmEdvuiXch7t87u",
  "key39": "3tWUXqhWgcTNPykGosX6Aet4CXAbiMipmawuUMo5iZk2H5k7dTCGcgrUUzwTrZQtHRtXsgckntMw2YzHpjN8pGtk",
  "key40": "4qQgoHuYKzCCqpUKUuUaLFr1YkeSnio1TGVo6yehrfGi515xPkVZ2nigSSwkUfpLvP9ZG3rtuKiJsPFgpDKpdyEq",
  "key41": "fsjsWKGkjzjZp5UcuNwtSospMDBRGKy2ewTgkt2LooTc9rzt4FGHyjJ29LqK261B6FYDoqpSNuU6vq1qHFLwp4Y",
  "key42": "2gVpqMoa2FgvzxHJcAnwfbG17oaFgMwQw1Zk1BoAXjJ7hV6KeSxnEpXp1jqX2DvjroLaEodkRjnUheXfaQUxj61h",
  "key43": "3WXgWHbfmDG96m2QZw4tMiGttWcUS1JXEu5CgFRkkutDtfaGpfpsxteKV8bTmkUm5bvcjC1G2nvuU9nogFYWYFyp",
  "key44": "491fwgVMNHmgHCtK8ihwA7BtVw88Ttru6yfmKjCjisjy3s2rBPUtbGgD4GYBUCJADC3d8Je45FcqfoeLuYEzXyj4"
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
