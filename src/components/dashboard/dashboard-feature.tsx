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
    "53sfJjWdKx4kiEDzbu9XnVbwXeEQSRZKeoXLjxynMCQvPegyYvjpgRCqcjZixoAGW7xWYm13fQzVxFykTcQgSsig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BiEdNPSWobgRAETPeeu3WBmg7aMZKfBT1R9WzW8w6KdPjnrGtCk8Q68Y2H8YsL5MQ9if27pMKv15u83cbuTpbRC",
  "key1": "4jjKs9nnr4SxSwFamtwpF8dQoMGDH1fF6nVNvTBD2WinfcdRJVdmGE9Ffz1WW6Cv3FDvWNLdqWzbeFqFWSKdBZJz",
  "key2": "5UucRU9z7C8p6YXsbu8avSX6qyG1HToY2n11YkprZ3NEeHKppQ6LMm6UADHvLDC9xsQtxPyQCu79YRFU9Ufe8HNT",
  "key3": "4LEToiF9kJffWTDMbHXLS2fUxx6xPd3DhuHfue5HbkkTBSxMnVVkW6oZJHbDdrdHZkkwFwCtXmR98VxWE9oPNATu",
  "key4": "5Sccdiqc5mjJS1P2vF5MRhDK6aAxhnZwkxM1EtRvvorwPjE1A1inJdZDYd9JntAV48xEFJuAUgRB2bVLWwjUHAeH",
  "key5": "63Szx5aW8GBy9zpaWDNL9GLmD4sXtLKVF7PzE9NKLD6JDvgpNVF9DfohX2RfYwQLx8ioAVzSRUioQ5dS5nEbHgoF",
  "key6": "R5wBxdnbmLnJ5kHMoxd31vMFAuPGehKSwdQDFyzzLqPdxDmWxpN2QdyvuRhPSz6wzoaCcdK2mB7euXNuVjXGPYS",
  "key7": "zZZUu7kDBH7kNqJXqHcBZy6MHaRZL7E6b8bpwgzHN7XtL85W9XxuxHRXAt8GJpVSAeP5JpVcqkofri1JPevaAvD",
  "key8": "5KLMWxWEW7JRqtHmvW9wxYyw66YdRNoTLjLbCevhrPPuwYsA9vUzKpSGA7kypRjcM9VVtsZfHDc9JksN4bPeoCf9",
  "key9": "5as7trCHr9LqcfE27bTB2vGkLn355jaZvyYomvPfuKz4saJijCfvNLGRsQBUrSQBfoSsYLuykV5XA2JdEazyZJ5W",
  "key10": "Aid8vqWv8fuYKH7ne7aMjSF6nQgKPxzsk32JP9GKuMufdj5QRMPfUZELig5Cj54qaqrHoD7fkQgNr97NJYf6MD4",
  "key11": "2KPaK8MYRRr1Fxazdzdd2K65q4oRTbKB9ES6EyB9wW3PW6Ui9YtXE1YML9HAgYDFnp5ZZ6DDqiEPmvrqe4eTjMwE",
  "key12": "MpEWvTeaB7sKou8gzU532hzvkQngYPKdeuD2qvdfgrsedgsMGvV3t6nGo8nGRwbC5U6RTr2Xt3h4xMe3dT5oVB8",
  "key13": "4w12Dd6UVoWgE3JW1P6yccUH9TV59jZzdwZb1LBKEy6Jixh23FXyXUk1w8jQodzRahww8oq4yLyjsbnD5JzBRas6",
  "key14": "5pUYWNo1vziuZLX6CEwu1JENkwhQJ7BQd52pnCoHmxRVRR3taGo2F9BjFavhvQEKrCQ1tLM2t9nB96JXsCNWsMto",
  "key15": "4tQ55yRnu7x9Hk66TqB9JS7xjSyi9j3n7Qz6eN52v7JrUAhu7EvhoPPYBDZCXoAxGEPXRSvC969tYys5rQiSgFVV",
  "key16": "4mrwjRFLbGmtsGxhUe1CQPo3SWwk7NatQ1xRyxWrq5ADwPhmWjGQLNUnCQup1TnjkbAiCqpvBatmfJCUa7TXNDmz",
  "key17": "5UoGqkiWfihwV4xdLbachS8Ke1NdohZVXx6XQd22kuULL1NzzzXaNHbsaxtF4mFw5jYp1cyVzgmBcQJMWWCnY887",
  "key18": "3wEPARP1ri46mZS2bxeKyWQFHtXgCvFdGd4hqeu1dskjegq9vgfVJX22MB5RDi3J7B5vJkruvwcAGBjbFeEKkVr3",
  "key19": "676jVderwJ7BvNs8QXt3cmTnJCYMRUBYHRiRaP2T5PkGrN9EPSgkha4Jyc7jNGB5h6BE72ecL5cLEhL7T5qwqHtw",
  "key20": "w9XWK4aYJRnWTAWZyHqTzCNdbF1W4oAhyKAoJhMvSpEgHipcuk92UBX33g22pLR6eVVoh4sFox1SusXWhQ3uWFq",
  "key21": "hyT49eV2sEo4iNkGgn7BMtKcLqerdZhB1Y1PDqpSBDLxwFakSRGjx6HKs3zt8Dvozt8o78tHGNdVn1Jw1kfMk4X",
  "key22": "4EqhfXz1hgZ9Lsg5bV8GMNr1iqF9ajrRDrsRp2v4UXdu2ja4pYnDVBBx4qTjx8gKeyRKDeEuTHw4YdDqUAiYAGLZ",
  "key23": "2CCYug8X6Uw3EoiZWkzUXRMjjeFLmYeBZuFxc2T1q21h7fa7FQ66XzxSXo67aPZPE8Xyiebbjx25rQ8ePnPs6tue",
  "key24": "5g1erKMALSt25zBFdbGSov64VvNRrpnA8DaNyw9ucme93xrGp89SvBiHUdyqLuiSWeu1pvA29wCXnoQXpQGNtdAM",
  "key25": "2WhCgGuyyShmeBiznoSPvmR5gjV6X2fDGfB2bPqS3HNnBfzW4iP7iYXBAzanr2QjeELYtYeonc9kyJtx2SuHEjYe",
  "key26": "2orAvNa2Kf38ye5S7FyU8oQK9ZjPE3mFqqFBjx9422Xc7dDfmnnxvpb2YK6HKCKanNjeW4eDEMYv6cCZKqHBD6fP",
  "key27": "3yCnd5VAqUTFWoVwrSzkJh7cjYnznkyjsst9wJ2dQW5GrTAMmSz8auVxgAwQYx2bDs84zk19FQ9enz5NoYHc3vqx",
  "key28": "4hyiS9M69uKeDPoTyRQUgZxeTFuhgMLRfz5SDgxdd31VzxVYDDf1TDMvZcZ8NmEQNaN7ovZwE39V6TFFD5nn56ZF",
  "key29": "wWUBKYi21cQCSpVM7iQRNM7eXyP2LZvT3u9tyEQbuiWpmqjLou3zRbuzDmEscQth8aygcVU9EiTDakr2GY43eJx",
  "key30": "fNPmaZ89uv9uUfZNG3SZG9MF9kfjtBHGKPdmtU2D8BjZWxz8aY418oGQ6Uh6jdMQxiuNGwDth7pB91deF1tCw3H",
  "key31": "RQ3h3cP6E9uiPknLuEkMzpnQyiupKCg4FYK8LTHgYg49jHTrUGGtfZrAYSWbciUJwGaRd3b8r1GSdTpjrkntZcF",
  "key32": "5tLJNiBHtUSPdW58xo7BVFjvUyZC3npUge6TVxS6ypJyGGhukT4CgajhFzpnYWbiNi8wrtvdofRm3vyBkbCvycrF",
  "key33": "3Z9DhMuQgMMBzFrs7mKYPJuXwwNLJysFn8ZRnRRS2DgsumEgvUqmMESYQbuGPGchBNheGgQyspQkS2up9wLW3yZZ",
  "key34": "32JtgaXW1P74yu1gSVkZfNigQn1UupjrKY6jZ5Uz2FBbTCrSBCB3KZ9W9R5AKaewyMqjJ6wpHEsyF2T2yqomqi3g",
  "key35": "3auTcpgFMSeGJhD5or62LkMEJehsyjdoDfzJfPbLJK3fRqm4XVVJoWBBjpVTPPt61nro8ccqMjiHEjroX6wFMKXG",
  "key36": "J89Pk8J8ev6vgFeoJrwMBjwxS1a11iCDBBaykxrQHSFsYVtgMMEUgXn82S5tKQXvSTQPehHUzgzbMFQqK9JuqJp",
  "key37": "9rxBzHvr4j6vCEbCGHkjKDWtAkQd3XjjPLQFqENNaVwd4eui5CGDsgWVpMijQXcGpDqs689c1Lomwsb3LxTaXBu",
  "key38": "5oFqHQ2iGpDP8JHQxRFEtZdNXhQVaPidCZ9FLKJa1JJrwibCP721eShC3PS9cT8EedCRSiWrQScntB5uvNSVFTpE"
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
