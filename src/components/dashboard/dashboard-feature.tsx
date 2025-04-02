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
    "4ScF4A2nEJJT2UpUXbQKNxoC7wgJ5JBz676eDd1r6AnFsubzr5u1t35vZ9Jm4UWg7iFY7rVNjws22WyM7SCes55x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVSnt36qGYNNZSiWu9VAp9Dmi63xsdLseEuUC5vL9uaGBuAzj9BfPUq81ZAZrPmXgNvseKoQvsGYvfoZTzEMbtF",
  "key1": "3k8tYAs4LLvHBG8nh8xSShpFAFXfDHAGYPfkupwTjS9JG9ApGK2KFgDnH8EMWzX18BfwPtrgYSxGKUNXXd9UwRVT",
  "key2": "D9TJnXsUvt8yiie5U8qqp2anFrJAkQkViNh76FdK1zPLjTVFZwDmKtxDewn1vVHeTWNs4jEa7QWeMGrmpB9Ex9B",
  "key3": "2bjnkssiNxHCfAALkp6fzqWCWLZFcEJsFWimj2F5q6meGyPXKLT5eTU2Sxi6ap4WKWNqz7zDQWYkXDcYnwj65RxQ",
  "key4": "651KyUcxXUKaeSX87cACRxSaza2Mr6wgBHLsUcTGQsngrhTTp1W6nsf1pKfzY3tQkD1ra6zJxNZjJvqTWHcFjyfj",
  "key5": "mkqSyBzKyR2G6zssxn1SFw4cmNTeou2Zqn9S9brdj65Tz1R5kSzvXNRsJkabUX3Y24LRDmMAZgze1BHDCxvW6BW",
  "key6": "3eQa2U5Y6Se932VNSdCKmkuszYFvGiteQ2L1cHZJgbVszTyKs3LG7XfaX792qc7KESbpr7RNcie6Nx6NyzzgmNYx",
  "key7": "3N6oqfRuc51mhZmEQyYzWcAPSfHyomTvVJ9ojGF59wbFBgshMBEbCxq9b2Ydh7bsyKE8T8Ybvvn1wqY5LPrAjWZ2",
  "key8": "24mDEvLgmA7Wb2TunQp7npUk3aRi1vAdTqncanTSnadc7HFiyY3LYR3JEzhZTe7BGxV5Vwo8aApPm6Qf7FmtapsY",
  "key9": "3bp3qFoFbt7Qau8StBTqaBVeRLjmTgfZ4iQR1U2GGL7vdywPT3Q2hGhb7ttUK4jnJqxCiY1s62stdWarbesw8nhx",
  "key10": "4zN1oNJEcCH9wueNJeu8bgc5ni8ZtEYehGH28rjNEqG4wG8NXy3s8BdSvGydMVnc6ZyPGXtQJvEu8bnVbYjw6xCJ",
  "key11": "4cBExJtea6BHcFZcEq89fcFYf9mBQTxcrECxfr7KEduBRDhiRt9U4QDe2xTAC52GkNWFd85hw9EpXfXfePKyt428",
  "key12": "29TebNygzNqF6HrSGU69YKwWKDTwYpZQ4m2pTCEGbFfDBibiVENd293dGhhhxoXc23VKnXrB8NdweuFHFfxwEXaD",
  "key13": "3rbia4gxEY8xFaMn5uSoq1MEUqZgDcJKxRkZ44tFdVLPSsrDwevE8DgMEhr7gEzG7sHF3gwfUxuqnEVHwMxyGwQ9",
  "key14": "4wnbvRKpcRBJVzvPL7fkEcoeeEFP8DXRgUSk42dpha3WkrTVkrBtvwGE6GTvdVA2AA4SidzPbApW6DT24mn6sSJ3",
  "key15": "3LZwuxxv77revPi98vet4eJt5MKcGw5bpurBuZKRsebsmq99AGsTomjuRPMR4KAwNDuqZgoA177o1M9Vew1mXnVa",
  "key16": "3KuPSLsrU1NUeKXs6TiMmtwCPJJuE962vUkH4P14GL35r5W8qKLLArdaZuRURRbrnLDjKkn72xCmDK39Y661AdAy",
  "key17": "4CYxPadQK4FvZfMnyRK23pNPD3u44BXn5sBQCdYXFS7Zy9f3jUNHPdREXgV4MLxV5TUmfwD9U3AsWQViukDsFUqk",
  "key18": "53kR1wH4Xqw15wLzLhoLrit9vmNcXKLvKcyvMBzkxePsKdwpJhzZ4tChtPU8Z961rhyLKjJjDL7weB2Cvsr1E7PM",
  "key19": "2LqAvY3N2yE7Ezb3Jez17K7A6ZZ5ghRBo9nkQLmPL2VvsKbNph4mxNRQhFq47WeoYamGXroKf4QBQBV6wJKELfex",
  "key20": "56GV9SBKgHbuHqfFTeTwqCVTZNygNhc7ZGnTfKhbRUFTpeYjAQqdskL3MVEwuhmvk8fA7A9M3Qdh2f6dvBHREQxF",
  "key21": "ed2LBy6T5R4RLRgp67x2h6TSceV9Jn2PhkQaQCkxFqUvZeS44yYvfXXtX61nwRrwcKQgMBoFyTfLagfeiYEyoJX",
  "key22": "24vnXGB4Weo831ATgccV4TH3sAqNLePcMhVERdMpfMPhEYi7cWoixP5Cuay4sZUe3KFNnsXLDTezvgCNQyP1SEfH",
  "key23": "4MReano53DzxdRQTJThaCLJBoLH6c6e8PZJvxAAWWBTaMr9u9uFDWf8Tuhvri1zgsCgKRwxMWoNdUyAvWnZKUgJR",
  "key24": "5HTTyaPmwZQ99NEZPvA17TDc4tvogGQke2Tyq8KJPYui4pPmUJ7SEqViz6BjdAXvP1MRk2ncrji3SEnHWhHFeHSY",
  "key25": "2Po6v76FJ8ULu4dEUv57V8F8VDtmrt4SfN52YT8dRr2EjPzzYNTMBuqwdqJi9M577vhHERxzD7VVPE3GL9JajbAr",
  "key26": "4naZTQVgZ21d7nGT7H7oLmRQZ8TfCL8tMvuer1JBxoqLQKvdZ1qdtEJUmUwCVNZBT1B6dfLeMrRnhReNPSJ6AS44",
  "key27": "WfcWQr7PgtAfVc23RHrkHUPiJBB4w2cowbJC6PAc3fqPmNSCkD8p9JLrhWVbSLPnzHNgoWgPBVkXpkL5uCfbohX",
  "key28": "K7y6PBJik6aLd9LGwrTdXiFToA7J3Ngu5HXa5hHjc5cshmWJRAkfcVKZYHeLbnaS8639MxHA8aVJcVAsSoszfoK",
  "key29": "2vVbHJPXUuFgqqNfqryPn1Xiiu9NAzGbRkV6YrWxGaC3ohiLBUHJMkFSmvj3GrwMAGGYor3azhzp2jNKLp16KyvN",
  "key30": "29Z6AmdjRm9dW4KUHuBNePExhFew9CGH1EgpT8vnmKUHN6tVGazgxKtxJLPZDm7V1TTqBMQmQBr4ECWVSinF47co",
  "key31": "57FtnTBNCqvsWfTnF5ZziRBt1jw841zGXsuY6YGqCp7PvFDbg2NHuWs5oQEM9ikRsquk2wTZtyZEwVNrqDxdBYRg",
  "key32": "5176B22CaaRdHnzR77mF5KUiqUMzCU7QLoWQtpErnXVkHh35X7zp1M2Y35rKrQKznM9gK7M2GxicBQQRcFo2Ucp3"
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
