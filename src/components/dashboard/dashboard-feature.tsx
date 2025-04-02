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
    "2oGRXaZSqdUMhcRaoKgj3tNXrEqiMjKSjJdhYN5QNdA7JnHskCd7iBddXptv97VCSFoVJi2rQPW1KjB1kjEmobnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKb96c5zhhSCntwV2xur25MjS12K6STi1vdcdZHU2ratwS5ANawigPw1dNv13gj7d1DL5gQixANV7aMuo3StxEn",
  "key1": "4zB8f9VYcRAen3vW7VBo52Kx3wnoo4XdigTsFCHoZ2T2u1Us8ukBWdTQhFhgcTeKoDhVNVdQYGtbyT6W8UoUmgEe",
  "key2": "5sq12bWMQS1MeyoFEBRo9wjTpreTrp37Jof4e4iNtjV3aUYVRaTJpUMnUacp59vKDCVXDh5CcN2zxJ7XkqSNLtKq",
  "key3": "3pNuLG1DfMi7FNHoWNxG1rTo4FyEMqNdjFSydVVMmHhbSXPxMtxenf8BMCLiAb7Ynuhoe8FAm2Tviw3iQkq8Mb3b",
  "key4": "1P6mtcHUaWtY7M2jfske9vJiAoCbKB3B9dVJ2GFtLPzcmFiVMsV5o9q21HNUCWXCwK5Phmsf4zaKAZZDwCBCDAe",
  "key5": "5CxwDbmFZ97pXcvfVsPewrjLPqYtg19MEmgV3SbB9gv3Zr6KRZk5ZD3XUnwN43EmYajnKG7DY6hZ664KwYFfKLtr",
  "key6": "3uxJShS6KPrJgPbEFHkCVg92KK3ceUVSwpWuqRbeLNCaNyLR8N5QNbjuKftuL65upnyvPLMEvaYWKfM71KvJ5qBk",
  "key7": "2FhfodyaSyYD5WaHPRkWnSAVvVsK54KjGrEur7q2hPdA12BBCHMYvLqfRpNLJ1RwEijLDqSEewU7Nnja3tM95d6g",
  "key8": "4LkG7whD4Tp8GKQkDJhqEN4fNbkeKQ5F8uT5MvgDkQQNRSPfkjqPy2cL8RuWkJXnPmYBZ8vSfpiunTwrQh7ziP5Y",
  "key9": "2QA4zRk4gy8pXVAMLCUr5fYy6ewbZ1iAoDqXiMZh8Gc5mTD3ZxdzJ4poygTCaa2i5UESWWJecPPyVAuX12ZDG3b",
  "key10": "2uREQwVV4gdmDpKtVuYVGgK2QjcFiCd9gJW5PpyiUzXbV4xmYRe5TmYHu22sRjnY6mRq7kSys1Xm2SkWcDRVcFfz",
  "key11": "3jYamFSjzEbx5SCW9n1Y7DX55Fmzy6VsBpMowLRu8MLaNbB4EGdbn6gsrujq8Bo9Bs39XbtoALK1pityUiqsud6X",
  "key12": "2fUwjm3bRvVfXNAuJ6bzKKBiWfoSq4Wq351vPbTVtDeQC2WEKhS1Dz13yvUQhkuKHL7aittMtbB5r9FPghJY9C3X",
  "key13": "2hAheYD1cKaUcwtUoTZs8dCRALfoWseY9Lfu6LWoXwo8YkhYpWVYLttfmdWEWnqCLahY4LSQZHq6fawRGyv7QpYb",
  "key14": "5H635zmgRLxK79wnuDJm4eT7UekQjvwnEjoAYfdGEqta4Lk4bHWPV2MfNHmphGfW1rVehoUez6PwpVGe2Jzs6LmV",
  "key15": "3p2RjWNGH4ppS5yDUbpVt8s587LZxkjBfjCAK45d6RFiRWnqJF56NAVEVshdfaSKfLZFyj3P6HFyeLU95AFopVHj",
  "key16": "4j8prAPUXJXyV8b1aYhWU69xEUgw6R6znpiRUizW7J9YSck83ZpLxwHiSobisjWeTx6moqJwWqwheVWypCLFSTDf",
  "key17": "5CEG3nCXVaF7ksSucuvFbEnh3pG2WCU6dUuQpcedBSXJDGHzzLbyYX6acKaMpcyUq5v8uCTjmPTvWtoyTvfVnjMN",
  "key18": "kG9RKoMTW1KzpBKJ2DhM6qKeXagR7FxXyPxd4HraV2CgKedn6Sk7s87vXUFd4HXDRDN3P79h9AhhXFuCYU47RXW",
  "key19": "25vvjgpNjcHFujXGf1DA6RJvgR2EnKxHPEptDgrVKhdmZS7NyQtV7fonHc9mH9QaiaMVQFpsQh7G9UuAJrnKnRsU",
  "key20": "2TPJoSqKDyCquEmku51Dx9Cc2jEpg34LCNCmNLZuNuZgSUttesLjnb6oXJNoEwyLeyroXuwUr2Cd2tPacFDa4DHd",
  "key21": "4sACpgw1GZ6ubL3sumMnZa9znmCUgu7cHfwjDtk4NmDq896bhSi5o7JzRAXsY4B19K693sHGuu8Q2a1U3dYW6rGj",
  "key22": "5pQzouC19YMcS9QA2oJDfwnqiq7rVvCdnZ8HNWXRuNVT81Cp1qm5enGys9UhM65SjP6k62GNGdDsg2WgFaDGP3cM",
  "key23": "4hVeW5c9s2Bcu8ZT4tPiJTkz1G3gFgHRGC5HcJeeXntjqSLGiTorFhGEeoKr3SpQkE3kHkNZRDCygjmFXTMTm56g",
  "key24": "5uXLSXwjSH2Vzdw6UZ6cndVCjDoVowogRFjgnWNuq1RKh6LwvUbtSpLjUeVsnQPpWr7N13Cy8FMnDxbpDs1TRo81",
  "key25": "3h78eNQvEz3UUns1fY7ZaaB5Uj4mh6wvczaUUuG7Feond8CUvLvrruocg2apiQtEzUnRuTMQ2wxqHrkHbThe3gYb",
  "key26": "37YzUy5ATsJvG7wUhFXovjxQfKMHsSgVtyeDVSUVA8rYkDcbArDzPZZ18aLGsfzWTkpjZD739CwN92gAhsGccWP5",
  "key27": "4739yQFG6BQcwSbNcWTHQbzuE9mJwB3qDJvB7MFyH6gqitLgB2dajVgDk9QKCEtoEj4T7hKd5M4Q7cGkck1yymvE",
  "key28": "47KeZYewETXSbVL82sTG7jdt8vmg5auAiPXVRcxR75MX2Nxkhs9nKF7ZzVg4DXejZEsEUW5UbbXwkQkW2pQkcBoj",
  "key29": "5J5uPWCjrJFiKnRKAbszSLiASLCT5qqGsNVtNfWnrdFk45KXyjFCajTxwEMckUbUP4eB5ar6VvzYuTyTKubEE8AH",
  "key30": "48vPJFENFecuDujDEpYQtnMP6Umad3jq6rn7u7GrLTP5Y53t2eyM6rRuD4koGfqkLjxp4s2BvaK43kd4Z39Pcabr",
  "key31": "2BiuNHwfxwvXxzhB7LGEevPxtRiyfYR5yMyrrQHMmnm6VbB1y9YyBNKES1HeveQgSLKiwojoc5iHQJ1djBzxrSPn",
  "key32": "351fKCeo5yQmfb6MVsKNqhpoeAGpeXfCuYauNxFKEtqB4GQQMHTUdFWNztq7RhA56PNUk5vQgugVd73qW24DguBT",
  "key33": "3zfcZZ7YS4gfx6SKonTbgXx892iK8xoZM3Ugqrvbt9UnG9eGkQc8yDeKsrTutb3eriRM77zgwk6RaoBuxXBa7f1E",
  "key34": "5pqJ7eEGvEHAdAygH3tZ3i9kPEqoF2QgxeRWEENE5w2wWVkt1ueVDxQvZiDdVCXVAyXhF87NumZsBvyedFUspVL4",
  "key35": "4n7BqRNs2gszwbDPH7LaTJM8nfHMyoS9EhfSQi5xgv2bNabDtHxxs7hcQ5zThWpoHJg4adijYmCREGRU6f5pQzQ8",
  "key36": "4jycMZedwbpepEe397ZndPS8bnQNgQE4XBVYbdNaujNjqxnHRVsS62T7VBiSmKbswvTTzaW9MnX1fczz6nGwhbV2",
  "key37": "3iKjTbnWWdFJvuTLKqwCL4GYKtYrYN47sFCcqXed3RmfYN35QumauT6ZaWu4edJZcQeiQxvbmYugoMM2m2QTPP59",
  "key38": "3kBw5LQgHTMAHG6WmESwHJm48mB4hvnBqmApgLrwyNmqAHXWzZPJgpsmj5ySKv4iCUYoNJdrk4gFJfcpu5ijpu4p",
  "key39": "5yMNN1ostayHQfqbu5L7pPSukFFbhMnxxr7Qk2gDe75QBaU6JZ7NJcRHXMkuZnqEYTbkR3DzPJ2xR917nq8Zgope",
  "key40": "iquqctsBpaYHCpVNfVwaDea2bLYQtW5XvRcjZPC9wDacPRotPvmhcYKangL7wgo175GPk9dkK9tiAJ9i1PJXJ5W",
  "key41": "2fzCxaJdar5iBEEqkghoYcZjbGEvWU1B8bL6b1qqDY6ztgTSkF5k6JRPWvVbrKW5Y7LH6onGK8gedjsJMSndpSuo",
  "key42": "2fM6SWHhN5mu2khS8NQUfWpJzdXjsBK4rRHRGU9pQwb9WtST7apzB2iKVpaznRgjiai5k1kiw8as2zXq934vq5tZ",
  "key43": "3W93ChhUX1Z58bJwTXrLoinwcNnaPwPad1fjJyd6CdkvJc53wkSYpjaRP1SYfaaQzBTqKZGJSNimQuAFfQggkXXo",
  "key44": "QFSZaSzFnoJ9PpW2RNq3iWhQgJPfzezoFS1kQGTvsm5ZCnQVtp1L6nR7t189sFmz1MFoKTejuvu5BtUWn5ownM2",
  "key45": "qQkYKNXkZtf6L7cGHUDTDCR4ARqXAvuDt2rgVVo3qdEXhLkLx4nHR9rJ3mSX98LrDN4yuERipmdoxTQ9WRiNEU1",
  "key46": "2wDtwjMxprGbfWrZ5fH3ZbLv6w68yYaCgsJiMoVXCLKpr3pTiW2jFvWoUNHT1QwK8Laj7tiyw8286TXyLRkSzh4T",
  "key47": "5MuNDuWy6zVyMidVnWqwgzk3BsTTKQgyHqQYEdNMTKix1EaQdRXT5RG1o7EZGTmEVcrdyCvwqsnWBFnXEACuPs3F",
  "key48": "5j6UD59Yj8byQnWHCaPJ2oix6DRzHpcCoAFD84Ny9vXCWtYqXppMnZEsXJRDQUxf1zxMSZJthKXYP6nViaWFVdgS"
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
