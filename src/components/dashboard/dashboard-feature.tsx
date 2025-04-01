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
    "4XP6YufAQxyb67YSemdLid39X12haB6mGagpdo7owdx3MYwrnZ7AHEQARoEaHfqWMGY8YxRGcfAURczncFumkXiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26D2GiFR4Sd2BWpg3pscpn4P6qWnsjNAYui8vQv4MgcXYma1bHhG8kVXfNY4onBQ5t8ZTnSPC2uvkN4R7MExVDoj",
  "key1": "XLsf44TdjbLF1SwXuNc2JVtaXroqcu5pkgUnKFs3U9kXTS2garwDjCNA4MviRQN69xnqRm1BnjSn9hQhJf7b8HG",
  "key2": "5wPJGg1r11dz5umbpG4RrVj6MRjNWAZ5Dk7ZQDcbVLzQZPM7nRHRZAdVZGQEXJbYEqCJUAhd89Gz1oF4i6mhF8fT",
  "key3": "5RGzq18NBnPj4rEjbqea4u9bP2f6QSQPYD1YnCDyG5rwDgMAx1VPhU4pM28JtZ4TgS3X8vZ9ksjcS2uggoRvjCBr",
  "key4": "4MHX72yz9vfUGPMdcw9YikZTdD3DhpzzcSvfASjs7S5NSUUr1bdHjTtzDkt7wUUJCkt1TamLyC7y4j4TmWsN6ryx",
  "key5": "3Cseu64XC8wk75mQ5KfHfDs1tsGAu1b82VwKzjmcPAge1PSW2pUwgNfYZLDEE2ko9KnGUHJ2mP3m94h31YK4Htwu",
  "key6": "3cLJQ6aQxMBTNr5eifxuvjeR3c2Uk6jaAgRADhLAoWtKDxur2MwsSYSjAvtdvitDDhQKuYUysqqvLbHHUAkQ4Kn3",
  "key7": "3EUQQuR1wAcCYJcK178qyNEAn8qXPXPRvgo4kkv2ncfMXcm7xokwH38BLMH7DXJevUQeSP84GEtouX3UvCkXFUcG",
  "key8": "2ugY9ed2mNF8B4uMSXYNfgzFXWZYm6dodWtTynUgW8erf6Q8bBpuBykDVHcoHTnK9DQNseXAeiFER3C7KLAciBmw",
  "key9": "BstQYBNFP2fntNu4nZGBULvVveuv8JHSMcw4J9qS5p1jf9gPTySb3L5qs5XZNEuWQgG5QaN1ez6h4tycMGyDjDE",
  "key10": "5UKZ16EidkjSDJp6uKF1tBFVYheDD7Y4JMXZpjWxSkdsEVZEExcgxhoo2omxJcyn8A1pemQAgUkZXPUS2EKczryd",
  "key11": "5HUaN3nij7dTUtfrDJcogCpm7CpnFJomDMxV81696rpW5fkqwubJZuRV5Z2NJYnRynDzSGmx5TvpW3k23VungZFC",
  "key12": "64b4fzLeqkdvMcsJstwUhJ1ufAy66FCESGvDy85yi9ZQAAdP7NFYRawmMNUDMZZc2jZRzRSo3kVzcLUQJ2gdrokn",
  "key13": "379hET4vypYTRvAcpyPGEdzzhSQtDVdD3dnSubbQRMn3WkFN2mWvMY6SW1FRzRgFV9acksRYf4h1KjyDh4f21PP3",
  "key14": "2XZwMCpkJokeSBBHrzfeJqvfnF2vxLtWayxdoiFLBbwmPfLDtfMsiV4sRh54D5QzFNmRdVZoJ1F6SLSYiJ4pSbKS",
  "key15": "zVcd5YnSitRq7VGHro85RQq83WKc3u1cGUgoVXnmCj9CDoR5VquQR4Xvof5jALFsSjBSsru7Ar5PjSt8Qpeus4b",
  "key16": "5QaSx4xg2Pr5vEhxwPAqxgYEEwxugyfkAtgEuqSQEAHwKEqaFXytqWhne97ndJB7W5nxkVXuJkRLzqzVkq94q2rD",
  "key17": "3FNFVB3kyvPf42GBHPHw1zP7dVsusTE7x5Gq5LXhLy9Yeyn6NS2HGwWcdRuPpyeMXHugVEjnfzs15uCFq3GuJbaK",
  "key18": "252TKAAY6q2972d1z8aoShtuhavvaZsp3QmVQLHBC5SXmHGpFBUmK1M8Bu8255tbYvB6vW5NjFWXR5wEfN1SAahU",
  "key19": "2vmQehuMZGBMw26etwfAhg8Tcgyb8Xx3CcUgAyqyWa2Jn8evw9SX422E5Le5fQCtHeA8ZmSUQo99kYpRhCC9KPZc",
  "key20": "3DHRdz4Qrfek2TkVguF1ZdeXK2EGThTaHNGxRGgfVTNq6NZd3VfyiPt7k4p7nS4M7u6DRcR1qtNfBwjWYvt8JJDv",
  "key21": "5YU9bU9reQ73GKRXMJ5ta8cdYsYSLePkC43ZbWGsfYmKLhvxPiETHMybXSJAqWtkSaAoqgjCTsg51JD2JA4G6Goa",
  "key22": "5gvjJUzs1SgzgC1mNPKYqA8X4Un4iCW3NdrcsJ7ou1iAUprAT6oUJPckhbqv5sAwdA5T3NfgbR3CXGVVujB17QZv",
  "key23": "5HJfKU5DZ3htu47G7GEYriX8Uhq5L2uJRyEzwCstWzp6nRUzXjk12fU8z47BjQQeTYdsAmRYQundkzecUbt6KTy7",
  "key24": "QdLTCS63LcmE8cY5LY8n8SoG3C6Gvjv3pSSUMqaKRayZGS8Fq5Q28Npw2Zgnxh3YjuL2RrYXRNifn1PceZ4Kt56",
  "key25": "4dvBFyAAHUvYTakw2LuvVRo1XqHm3pyWE3znKfG2WcqtkbPvPNhvS3M3k8b3ubexMk6e1yB76adi4cNX8dQSU7Lr",
  "key26": "MNUrEnxY76JEJRYHEqHPqKVasbQDoBguJT9eEZsyD5qUbWqAeq7FBas3z3z2eUg1zBtHzT2kQnRJ1JD7pgRQ7JN",
  "key27": "4Z8LxpqXr3tXfABtpzVEFcHi6V7XJLb6CbbrA5PpCHUaG59ndJqvkRVCs6j11F9kUpTLSHTfWBGzAtb3rX8LR2mx",
  "key28": "3msDzCyWmEe2snunvo1tNhYeJJwikdzGimQ3RnhB2dymtM2QGcCoiUgYwf5RV8kMcXF6G2KhSWQwvpxpffCjBFJq",
  "key29": "4eUZZwotRLPSvYi73HkK7bE3xJozPn6xXNy8jyggj5FSRkCpxetVj59r4aJLizEz96FMhvcnUD2gqJenLbVjwmjj",
  "key30": "37HPxsJdXsjqar8xWEYX29HUab1FAorSqgVzqEYgEUUZZ5A6TWywoiSrAfZcBZikFQeLpWVKCU7tzGvaitV8cd63",
  "key31": "4SUfadYpCgf8QiXNeoadLRu9fvavMcrRQGPgoUwR3LV9MKRd31PrvGVnL6aAzGLazcvy6C41Shm3RF2Bd8uxNygA",
  "key32": "57zLPkDwDY5SjN87YFGdNRukS4nhkrZgHWGyVJUK7mQuNrDd9yv97EouBmkkQW47kpULQErx2rR7fMoAvveiFSwm",
  "key33": "5PTNfUXa6513vYEMGqshubxvissWD4mnwdZ8EoKKrNkEbyJpGhuZGWYxt953mKvnAVSmK8rnNKzV6FNCtARt3mBq",
  "key34": "5fBEqEbHqg5MQyxpoFjGsZd29N2PpAWfMSgUfcvCjcyF84vzxTiy9dmt6S6DRpSL2cKkPuckDrHPrr81fY78FY99",
  "key35": "4nJLzwtRPZrRhHHc4yc8cndDN1GG6fzCRXmnM6cfF9mUcNrBLT4aVY9b3k6wnc2bV3NXnU63s1Tpn35J7ngbhZ4f",
  "key36": "iBJGp98mnVNYXkVqpFQF77hDMdrTraiSznKgrvdeRoiHnJLCN8V3EnrAX2X77VAu7Fcxq9f3T2pKbmV7SQiEX8T",
  "key37": "2rNLP3RoKaxdAcP3uqNkP9LBUWF98KNyMtqg5tgHQGnJt1CuGutS6sQfedvWjNzVwDinzu8QVDHgRpnhepZ26Pit",
  "key38": "2Tt9X7dQCYAhMiZCPr4S9JuZT3NwpAW3xVQWNoV3eBV9YvP3uLrnf5JsPpagyjYJkruiZekhmEBtd9KnN9NJQMYS",
  "key39": "2CzQzcXqPLZnwNJDP56xTjDArRhDPwXLUzTWCjQrkWAahE4bCCncXB9fMywpqpyorAzvKkMkwvq5PqFwUtfz9cc3",
  "key40": "xxyc5wo6b3UYdha6cmjepMyfhtwUkGymnErX9Kb46gE8CQQYpVMfaGyczSQ8w5Acqw2qqp6j3n1TSCfD3UjVbwa",
  "key41": "2paEj4a1e1Xs9gSR3ioeQRXUue5HmbwB9wvfTNxd4s83Rz86HcP2SxbDCSpX8WGwTszvum2NLW36izFDg9KWeGfi",
  "key42": "4t4DRxWVdc5BDofXwQtqFj2Ywieb5M6KNtKw4VQHnt3CwuPfavGvwCnVviiuRUGTNZ9oSY8gFphjMJE1DNgQoDu1",
  "key43": "2zMRiCgdcToerBS898NGGMN8EfSie4vFKJZEFjMSP4SQPEFxUSQaS6zurq2y8oYGrxC9AsZYN5btEvQistVrbcPC",
  "key44": "5zCyKMysoVdt3Cdd7UuRfp7FM2McDDWzivpXzDVEmVWVmdVziHDwJ7uSxbTM1bmTthhdXj4kVikW3JSBd6JWEwSH",
  "key45": "5xKbVgXSDPmUBpYEuwa1TubXmJTJXa7X1EfLfSNDoRECYtcDdCFZf4dWMexhqt9Xn9x8wZJHF4p3ZUKgrBSV5ZnY",
  "key46": "2jqPWT2SXKYTtWQb19io7cSxbk2CDcouKkadk4eKxiVjYzuvLNkZiVExnZUfp7deJC8CrEnDPhk2ePGxajXkQMst"
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
