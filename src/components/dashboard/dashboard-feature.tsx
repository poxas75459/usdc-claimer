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
    "2sM3QQoKNCt5MJh3NHuKrHRd85kS9VFsibjHiEjrrBq6ge7nXGtKC6aTimFUdciYxkwYSpnwyQDTveqUHNyVarBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vgUDn7MfeDC1kwLp23NTi5bLGMhXXYAQmkki52vjUj6Y6xQgGa6cK5NGuo2iGWoC5NS6cEVJkkSPrucuCt66sH9",
  "key1": "m8op53fjq73yAQjfMEoexRjnEAWB8DesTBPKo65MSWcJtXhFEqnfC6QhbbYC6cyc6CDD1QGYHB1nJ1jYGB23mFw",
  "key2": "5LfUkd3wVhY47JqyevSSiMEYhT1VABzFW8P8od48TFMNBKdG3o7zBCD9fYNPHeRcDFXZNMPFeV8p1Cz4QtfKiSzo",
  "key3": "21RcR8QmhtzmE1vd74pnaJE6pDPUW1D4zQaoMVSf2EhByhmrnJjHh5eKTVKRnJ9ffADYqG8WWxqEamiGyN5RJknz",
  "key4": "4C9inMePxHk6rkJmziQoABwrEtE55KheYn7aGE1GLFYEbGKdatUKxtN96dgKGTipc71cSXr2vniLXGosaCFBXKC6",
  "key5": "42EKRDVjRms4zpqjr7fqwVT1wNpN84WLEJSSerJr5YqnsVuZw1snKJh1sn8qsRzHd8qNwUHpvqJ5avXbAdpj6PK",
  "key6": "4qGNahf3q8FdxLNwhhjFBYC9gwpCDkMWpMABAZcUPdVWwFEWemMPkZwTPuKAbfqr7SFB7FrmPu6j9YC4xuPDmcNh",
  "key7": "WTK3nFCyocBo4k7oL1HS1eshjB8mBvPAHLLNRtf21xLDxMLt25P2YPzEMHVDSN3ztBVSJsoUvbTZJy9bCjMkVSm",
  "key8": "5MvMhFPskjyDJA8mjoDAWT5VYw7erEkXHSSF6YukrQEZAT2d1JDa2MMiAbbrJmjfqcrD9wWvLJuTsLzK5iHYnz85",
  "key9": "jybkf1imtYyv1jzV1AXisRun7h1zQ4JK37Q8pMM1PFUGxpr3ZmRNipvc9276EutarwpkMrn6KtAc239NbNZYDAY",
  "key10": "3A2hvM5nDmXLX3JZvmTZcesyXymXtoqMxJtDmEwoLSkCwozPnJa1Lq2mxL5nESRXk9eNRf7WFwTwvAf8cCkjcW3s",
  "key11": "RCAGQxKKPCHhbu14bygapuKBgm71DoukM9CYuwUUftfqjhxscJb9caK5oMULf1uRisaq1Lfd77nvm7z1ps1PkP9",
  "key12": "4BUpXcNZ4VxnDSj8gWG14bPsUrDc6y2rKkfobphuCP29CR5Z2NRu4RsbCmfLt9mXTcmxDm8Cd22iaN1CRjwTPiop",
  "key13": "49vSMqPyeo9Uc6nUCA9HqACn84RLfdnNhmbyDZxncSYr61Gihg8Xm1SeP5jpfyHxgZgLTLAyqHYKJbm5bvnNUcef",
  "key14": "fmV4YGyiU6h48PX7BeZgBVTYzQTPZpsA48mVnQkAKrMcnzan57UNDJZwUGqGRCLjLCZ3aS97z4Cz3wNrbKijkyt",
  "key15": "5fdhG9Fs3weCFizpRP9NCTLc1Q2Jt5f5hS6WQCmkFe5d4U8BXcbRYj1MyHPRCdagp6rGusHbicrcREH6jaEnknLR",
  "key16": "5qQMHyoxYQUHGK1GztDjyvxJBvSoKewEWV23kgsCfEoKuQKSwoLSmnSFMJqwtHQv6HL3GKDQ3yrpoBZs8x5xgE41",
  "key17": "4V7uD73M8mjMpejo576ctLthr72emxQvi2nbTE5ScMSVD6zhGVL3c8uVQoAL1WBeYQYNmDYCdRCd866Zf3Bimcze",
  "key18": "5kEo16qUkVwMmvQas85pA7fnbddNbuXRuHnLxaPa75QWUiSRHKWmEhJQgNzLti9DRYeoLwVsdnFCgWponHKNaNMH",
  "key19": "XTLrPU3NBghMT4WRZoqbUrtVyicgDDfntk9tJFH6s9v8RNZvdKgEieE57ZFQSpkBWvbhf5ksGbFdb6sYXjt3Bho",
  "key20": "sthEhuxwR7FE3WnCAJVoF3WUtbXnrDXKP91rr2cYdeeG1qbnMZd1o4cZWFA33d1YWnGVJrzGpKFxScp2a36QjdH",
  "key21": "3N88SEAcbawahR8SrFWwQfH1k7pqgRLCb8WRZeNLEAZp1kAp4XkP1NSMF6m5CsNDCQAR5Apphf5hr4NT3fkagMx9",
  "key22": "VcRVAScnFwmZuZ4H4VvqgX6WJquoUHAgawgKqVj9m97RUKqsSnynTrD9nbeJNRCaqUAu6x55T1nZjSPJpNzmWyo",
  "key23": "2fQ7vkojkSbhMtybFQWcG8i5qUa1cVFZJMn65DdzowBYPsv86tDmcatay7W1jtAV2WV9rNXnXjFpJzShcpAydg58",
  "key24": "4AEz7nDuQiMKW18BytDA4Ru8iBtFUuhhppB1DzUUxspY9Q29vLu19h2rQQ3c8wqLbeyEt8iRTKYmmxXs97Kuv5z5",
  "key25": "3g3XhbYsZRRoGoqeMujDHtFazL921Z3rbQ2Sa1g4pbp3JZUEgTW6HCCwkTYqUZbVD2LjgSXyyy5UdiTewwg7aLvP",
  "key26": "3zuYbBfjkZqUxB6MSgrPiXPri897BzSVzEKDbj41YT9FQah3qNHFBo5Y5ZXbQdPbks5uuvgweeD52FDjRV9DQfJZ"
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
