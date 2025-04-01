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
    "3wwe4QhzPdBuejgU5bMkEcFKXMyLnh65ykhRKt5pCk2AqYL3JeeUsnC3NLDH1mQQWAoFrdgGA7b6kLqBTaGyxXF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tLJE536o6GyVTYRNVyHmLmUWiMZMqpD5PnCTVDRyY9rsaVBQQiW2zPyzPWt9obsdjA1DMhGopKbraQkjuRfsa17",
  "key1": "5vZ6BrUgirENUsjKM9uBdnz5hLkwAHJgBjEzjDFoQe9X4GkrRarTi36DFDUzzugrS61z7Yyssh7qpEQ3qTCm2b1p",
  "key2": "34uDDk6Aa3N7vRjFcpSUQ6shBtAMMct12oDYPQPAx15cpQb7Jo8nmb5iQbGZ57Q8tPWVzt3PGYCu4Y5k7zwn3fts",
  "key3": "5AX3AsAKnBjq2mYcLtTC89XPjW1tX9T9LcHrVETdA8LLin5pfQK3PL4ABDgiPTJ977QyhT88oMQqo9sMtnJ7DkP3",
  "key4": "5dXnqsCjtoF6jh4n2oBmeu58rSB6bAcqGeLFzLuMVjhmaey5rmSt8rfHJiXrSLgzLiVG6sdvwft5Tx5CtP57DEAD",
  "key5": "67JYPnscoSAj1J2iagAxXYw2ZzgY9X7d5oqexRTFTBYyMPjcEC2Da7nJajCWf1GrB8U8iiBJZDTSrUMPaVjkdZ3A",
  "key6": "iYJnipBokAPnQBgDbYowaSMwFAPtEoRHu8E1fqq8FXWTQFd5QaqA4qdWb4THmV8YBnoUN8SCQyamdJBDM3UGDqS",
  "key7": "Es1KPUsn4GPuozvXJBTMNoaUaVhuPwtgygK5o5KsW15Pj6QSNcUf75cPo9Gyb6G2WrP5o6rCq9a8hR97Zd23Pko",
  "key8": "5JSWtJ73DjEouHPaHWoVhkJiTHaDmeiJaUq8ewpBkjpLa9hsNksFnjHtudKhuGJ1kXQj3bvyUcAJzGK1xPvLzzmi",
  "key9": "2kAhcdmeH8JwC71j4EPxVVguhTfDWiAhSS8FLSXAc5Pu7EwSYKCiyaf6Z1WqKLPyT2HoFZjsbq33MmL1SjDFWNWw",
  "key10": "2Ai6YjKCFZ38RcCHxTVYnZp6RkNeipdUmxkmTRLmsQmgvbtzLHgw7VNVDK59jYTJahus8ghXUzGUXA9Tn2nKfQBc",
  "key11": "613pAjhVJiFzHMbJWahNw99MdygSpgueev1YAMaqL9KaTCNoFuW8fWWFfEa7dgNeUhrvh3wLq1T4YM7vJRn5EXTZ",
  "key12": "nckV2YkEmSaAAqy6scVCscFzHdczBB7NeqgtzyXjLLFaQKRtoMuPKe7goZowASB5dBTTSkn4JzE38tDEkqPvcre",
  "key13": "4J2nceJcoESiUmiMeX5CRHCuZyxw4MWxW9LVfVvKu6s1n8JctEJD5NK4wa6EnVY5joLYBL17u6k9sZuQsF9vTYPc",
  "key14": "3bvLofPCuPhpmM9LYYWdCdxZZrhT1k25kMX7BR7cCbqZzfcJLd7uncFe9dW9tnpABBa162wSU3mRftCDMCfd7uiM",
  "key15": "doKjE6Ai5jN6ZqFnBcSw4Zpj2qDSmR2LyCNJmyBbtEbsCCSUt9uiGnB5qEwmwGgZg81C1i22BmoyEoT7bmVKcJk",
  "key16": "znUdbJS5s8WxHLwQxakTEEqC2VkhMss6u7nRbXh5728jksAfafWQjcDuw33TQJyiRQcpLxfyEcDMsBDKuk84Lbr",
  "key17": "2Kc1cGGAtqmrnTzo4s7tHABFkVKwenfi3bXa7qm2AWQB5CWYCrMeu1XkCdBPdQqG7etT7EJYZSRHWtZ2tXVjNokz",
  "key18": "5HrTEEpTwpaVdpAhurH27Qzhv5xz1N8gGjwSPja3rqYMsGHTEetprarR2zhRw1jeErEsFEneVDGkvRMt6YnqPHMx",
  "key19": "3cjc38kpf1KJ7vD1oCUMz7TJmqhtmB86TJ6zkXkFRm86RLrQ5kvgmonDZgfypTcsV4tiDQCjKC8vPEWMKcGQmaAR",
  "key20": "v9qHzsdayHJ1EtX6iVf5Q8zJwY62Z7d2TF88A6NtVEEx1FRNMKe7yDZ8RH32h9G73MFgwugJ6NSL5GFr5iXkVAw",
  "key21": "4QyLHgXJDiLzWcUZ8BBXrn9iwS8CU3rAU7EJKeQa1qkRbL2bE5Go7Zp8bxWeck8jhA4ZK4Hja4yyW7DKBGftSNrQ",
  "key22": "5gN4dQgFhMRCFpgP6JhnsJCFiRT9HWZxKfN4yaWJ9s63us9QeqZ7FciDrLpWaJxbn2iFP8oW2KjjjCPyzHEFU4T8",
  "key23": "5Wy98Pvy8mjaFTUE8aAaa9c5NiXjFKZiRG6pj4DJeYbpsi2bz3dcrKfM5AHpL2URtZLS446gdWRYY6ATgwkfhupk",
  "key24": "3z5bNNBgRqFaRvBBB4MDnDAXV9FDavCMG3sic4jhHyLtCh4r9tBWV4zFNiJrmWHR8NnBC6uS5Erx2yBbVGe2vaaW",
  "key25": "41mbx6JQ8i7cg77GZ31BYv9JgkBRjjm2UWExnoS6JD6Xub8cKKtFCCo6uKjtvLismXaQ5kTzPh8aUzV4RbtMAvfb",
  "key26": "3YW4ECA5zWxvPTzVhxHNrKJXimKYx7ZpjPYU1V5Nry7EZEmPKK4rVhZ8jRFVEVBFrr34BeUXbgxwgz4xScWdevRB",
  "key27": "5fXf46pJ4JK9xeACBNjpi2KKKdE71etPZjhd5upGVyhkzkKshh2VU8XgEeZgVuzzZfgva5qhEfX5EKwCWcq46Sif",
  "key28": "4rgv71k2n4VUF4NEsgXLqZ6ZF45dX1GZqK5yrNns4CXtVVJJvrquCthhMPL5FKch9ADNFqeG5ucQgezZ92MYGZQ6",
  "key29": "41vT993r53jVZLE8eHtXnXSKABquonYiCHRWeHSDpjtFV4KJEeRstLzbNKC9c55qdJCXyCbwaMtZbevPV4jsrEc9",
  "key30": "2FaKTZGvTA5mLpbmw5LSPNEJpiZ6YA4f8Ucx3WLZ2VsAWDUPJ5DSCbi4wPJTgF46Y46srW4cQRvPkiz3M6ncdabq",
  "key31": "3y4iryXN69Q76VYtQchF8CsXM7t1FCorQQ8g6sLx8ku137r6Wpofvdg34KJUgFiCrE54qzvcWu5WU7rg7dkueFW3",
  "key32": "3FLb5MXwnPxQDVPD138fKmZbJvYpZoE3DV5bpX453kt5wqQNyKqrgW75xF1j2e7jzq6YNnPNKM8PpLNZuko2FhUM",
  "key33": "oyjb7VziiYJnguofnrG7E3vRyB7bcjF5SSDSUwhHrpxQgJt6RJLQuhH6ViQwVCyw7f8MrR3Fqfh4x1jcZBYzfAM",
  "key34": "zMNgfXjGWy8UdqUbyr8mN9aPGfxrHX7W5pgPdzQiSiZqpuQEda66acCpcLdxpSAFxAadE1oRQqo69duv53uLKEm",
  "key35": "3tqJPkvJ5yv8fSiMggDkDLiZ6iBwZh5FpD2kCbPXMj2rdjFTWTDCG74HhN5f5S6cjmyZZbsz8C3M8HaXyeHVxF5e"
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
