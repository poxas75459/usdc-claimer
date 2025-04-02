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
    "5EDnncQhXaJUfBAuFTqpSR88zA8aL65sEuWDqigx9L8f5nVXTbjN2eFJN1EsT9Fn9P39u6V5BJ1UyKQmgc5PGsnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sELFxreFodxxqPuBoeVtHKThU8e6GMtakYsNNWVumvnidDzVuiNretvC4hKJHzDZ2D4wdHUjxconiC2zTxvR8iP",
  "key1": "55MKNx9TuxWNbfxDMjXHaaJYrkKrGPvzzriQJJYLDghRcqa69esDNXXbKCztp6aGbHVgXRz754Wt9om8dZmzPctT",
  "key2": "5ESgGh8UPTkT4j7eHmx1mbcpXstuwcEBWS8YdFCmYDJPUm7aS421A31dfkkY1TqQbhmSi4crG8feqUdzZ7U5zfzo",
  "key3": "7KJGEcym5TN4YWB1uUckPRNps6ingawzD2jmSrWKraqaH5pBsvRD6rnPQL8MVFhLKA2TR39JEgakmQAVbnxbtLW",
  "key4": "GJSo4KFmvzXnZKtYyTPPnmdQU49LsQ2GUQ5UgXktgARmuCi95vGJ9p2YCoVSWvcct7CDYYi1nfjqSdbSBfSx8JP",
  "key5": "5mndSt7WMvh6CQT2NXZMAH4g77m1Uw1sFBAyEA1cTdfqZpLQFDFUegAzH9U4jPXPwGbyArFrFjU1mqDZN7a6oRkn",
  "key6": "5b5xWY3nm42SbXdXJdYnzjAW6aoBmLycLgBxq1LBSCowb4QxfFwfDRsYdvQxVJQWTisqshd4mn93d96vJ6uEvE2b",
  "key7": "3ppj3nNJRUzrdG66DSzdELxX8sbmPSB13Fjfq8R5inr5nMS2kAtf7hk9UnGsKv7mVPpGHMCiyCZZjzciH3CK8xBv",
  "key8": "3sYz21UEfx6H6m952wZUPrrGDpaK9Bm8ujNCydpAzqLYZejyG3mDHVshBFWJLp5LhJ9FHYCyVVZEKBBLQioSJNBB",
  "key9": "5N8pXhWYZ9CS2Pd9P2fuZazCyKNzXZgMTRqcjRkZ4Pi5iBRSSwBG3Suy41SDq36Q2AKLvyZQti84na6YjC5mFFZa",
  "key10": "27kyTvKKJJSNAstRp3rGi1Pi9sP5GtN8mYnLfzjtVzR64tzSzz8y4g8N1brRqrKbzBMx8MUz8BRyeDASzuQNoz9z",
  "key11": "5RZDAcP2vSZqchjWZuqmRpKrzKpGtKg9YyH5ezLK6HG6U2mVcSKFAPg4K45XNNcV8d69HYtzpD5zHzYZXue61MY8",
  "key12": "5tZWgTbd28c69Ttv8XEEmmpgcxf1z9Fqay6fJwnP9ANPZ2ApLyG6612EP3coskgD3oRv8LzKN6PZxEAzS8yYCVZb",
  "key13": "2n1H3X7Ct5ZLoi2FVE73FCKoJ8yL8E5xWAYL7V7NzrKmRLb9myquS3x4VWX3BBQ3bVMJ9RDwZaEvNuRAGHCRKExr",
  "key14": "47t5Q5wGXcGy2WWZnakWKMbv8yoVhtc7vcp8Z4ZLFLBUmbYyh4qbQDc6CJc4PEnkr64JLw8B8bM958gMwXQKZ7qT",
  "key15": "3PeguZQeYZMFag4qmyjEqT1AcZPoQDqSqXrRoQLdHyGcxYGq58iGFjRhntxJzSP85mbv53Y7owM4X1tbRKGXGYwm",
  "key16": "dUxEDf2GqVfcco6v5oqgAmhNuE3uex39GRFJeCk7D8NFw83tLVJ9j7j8fBAPaVwzekpavy4n8zpG85goh5AHH5f",
  "key17": "54NAvHCFtKBLx1fZLmxvSWDaHMsi8cLHdt1FwH1jbb8S9gkm4Y8Dti4bHEcyk49SvKZuLiUifFQ61u1WCrrwVSfR",
  "key18": "3yzDaKR7tZcxyaLam9gDTEGTv2NyDHnPCpEdSeoG1Z2v5FF2exarKREFD9Kz5nDFebLCWTtyVdj25gSebp4DyKVp",
  "key19": "3fPf8vvSnpG8wtvyuott1vHtUUoCjhQEgQHRcEk7HuJ7oD7Mrr1dtnpgVW9qFefjbgqW2Y4xaFMBRvvK3v3hJj18",
  "key20": "AFCeK82Z6xRmAQtwhmEry6aQUxT3TN8k6KiwQheCQQ8CbQkLrtR6qrToRMuUEV1vimarVXZYhMCMrkEx7y59fTw",
  "key21": "3MsECD9s4KFfi4v7ubCYLie7dzXMWeDELHeagVSGrn41ibLVqC1J4sPUBwyzE58YcNK2aE4BW1r6SRxwUe3HtT1Y",
  "key22": "5BZhNE9KENb6mA5ngZD5nC43T6XE5vMcXk7yFNbTchbGjntqRyzNFJZ89LxdEPzVRP9Z7hBs5gEW8UFb7Ugfqktm",
  "key23": "2k9VCtm7iHLmJK36kafJUkLiZrtBpkEU3txuXD1y16nP2mTKAj5ntxXREwsJoFzevwf42WBdu2G9JupdRQfJ5wMU",
  "key24": "2H5YM5CVqNJfGoRU6BKCXp6TPpdXHyJ2X9ByYvnqXSEdiATm8k14tMNV9TdktH4Ue9yFdSarqjMJWXDezrNDgG97",
  "key25": "3vebiMK8PkcdrdQ2vZJdnmPudLrN7Zge8HCffdnKhydRmiZS1fffAxkgEnHEEMGrAGk8h5wzn9WoesodEmnxYGtE",
  "key26": "5z2SYm9xLLAyrbGrPwDCCpj6aY891cy1GDfkxrCHRp5X7z6k1YYD3D4AKQZZbX83X3xhLDtLRE4UE5zythPSDBv",
  "key27": "pknnbX9Dy91XjMYxNj5ZCGrV7tPfevdA9wjzequKCBbomH2aKLRmiYoW12mg2MkSLVfrVQjnbgJQb58oGvbnLet",
  "key28": "5meBJxPZtg3nN8UwMLCGjwfpjrLfFhGBTf75PK2EypLFQnqbDWBr6pEw1UFvzHRXww1AXUG7F4Y2wAVPWpB9diie",
  "key29": "3uAH6HC4iN3tGjHkpyQNcSWrKn8tMDzSptYvb5YoMDmwAjgwTJn7aN2EHBk2wVm76GYSpBAGdirimBRPYwYsVY3x",
  "key30": "3VDyDAZ5pCPZKkyL1Hajuiz1K9TFX1oidUromz1NF3VpuYazrKSmWAYzHLnuq7ZWxUt6VXNoojKgJv9vFiVbcG8S",
  "key31": "5ftr3tqR4ZSCPm5JZiKiAoNU2aZ14rm3CBT33XQY31cmHmBd58QvDkEaDTT2uXKAXfWidnm4cskHWGZCmydtqmBi",
  "key32": "3wcsTC4LQfy5cFLL1NNtvYhQD3Z1dDMgszwVx8wzN5ck77DW5sE9hBuEXwM85WCc5A65mG9U4Enx2BmVUgh4NrEs",
  "key33": "2bHRLXvHerd9cks4D3RaQ8HtJTScBGUU1yd8PJdbt5PsoczubZWoycbyQN25DPB71tp4bhGR9fp5KGJyBDXJpQfQ",
  "key34": "4q8XiPN64pHJTKzR5V4No1SD5XmnUbWdXmXJCwGK1PUhL9pFN3FHiC8RNHLoH9TjZ4mqTGu3p1y49LPHT6zgm3da",
  "key35": "2scvjTmrLXBhPvDkiymjhQwnEnYt98wyQYXSKmKxhEDY7PMENdkpSdUBJN8ow99UGAAWNsX5LQ5RCn88CMhGdsCx",
  "key36": "4tPRfbMJJNaZL3JXvkqncwn2VStMM4DQgeoQuJJA5aPWrABs7dt6A9MVsrzaHP62wysmEfqT1sXcp2zacTjpVsjH",
  "key37": "uSkzfxMhaUuTBMub2zTgLb1NCHYnaAHJqcjD6qHkAJ8Xg4spW6iTVRDjq5zGaJEfZQ5DmnuU9FJzB2kcCJBcfZs",
  "key38": "6dQbzTutAx3q766q7VU5saXRMtxVh3y8gnKSYJZ8aY8gRZwwwrHeNStn9iECDPoj3TCZuqXLwTqAtXxmYmMw1yD",
  "key39": "3dmymbJLN5ZxxdQkrJpaQb3ynYzaWT7dHQSdTmPGeDtCQiNjiAXq5TRm2yJkaRohSaQsYpfD4KnyPQMEZULvFbzQ",
  "key40": "fTZts5QGg5CJCrEwLgoBmgzdTJgZcuPJHucXUjpaBH2pNfCuen1pc7xGDTMes5khSRm5CJDCAWuFTwzEt8NSAjW",
  "key41": "j9GcoxMUFr4UrGgDPyi3YeciUvsnrwGLC4eDtYfEVfLT68w4WXnT4L2WhXWPWLparDqb3yBW8BaCxHMyYSqSJYz",
  "key42": "2uN3qoPLsTcgqx7REm2f4K5ppr5ysmi3zQfWqu23Lx4gUjEhWxH7GhKqgGiCUohDhzKHXDRkpPQtjA4phaMsxamH"
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
