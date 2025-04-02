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
    "3J4sydS1zQThTJyeK5AuHw8RdEkGJHwFHEUgpCPbdnSPevfdN48arRbRLJ5QvXdmnFNxpvN2Qj4UfPvrzzXrcnEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ye1PY8xnKS5kzVtJ3sdEXb7Tq2aiXvsbAancb7Tc51JQ1h45A4ACxCG2sWBydmATMeWrCXqxtBi4EoQYip9PGgG",
  "key1": "2CFoPFowAQxUJDMeCePvmJkgVZ75G7qT4QLbnHGZ56kiNKN1ErvbZhiFEGDzUXBDVuusY4Car2qtAgJBdSEZGghj",
  "key2": "e8czKv5VEPDbcR6pFfnFdRKrYV9cBx24eYPmBzzhqY5pKyYUtCVkiR3EGtgxUSrY9quaug4SLCaZYjNA7M6fJMa",
  "key3": "5KCSwpNi1F5VitnRKwVUAPi8FWxVneA4CpxySe1W9fU2RxJPCaNRMDLHHqWCiHaRiZEe9uvGMTSPSdcVkbS54neE",
  "key4": "5AwaqQRjjYZPCurCRVjxpJZhiZd9atXM6Ltm1A3JagHeeY3HbiVNcyLJuWK9ziguuMHWZdnoVHmZAD4q9g7hn8vv",
  "key5": "8Xj91Y7Kxzo1DufikHbKSDfPXRjNJ2xuVVZ1AuudZ5age2M4vYM3u5wYAdrBR5JE9AqfYQctoHaKfZKcZ27rMqv",
  "key6": "4iq7eYQENPk9z8g5wp5uxPNtySEqsZqVCrv2wvnxVtY1i5CC5TUqkZrqkb6vfNv7LFNWEjZsr5swqpwDknVpE93K",
  "key7": "2L6SEtfJCWQG7XxRTNfWF8vFWKrVse6CMxoKX5xXW3dqbbysqK9UetZohKmaLaAkBGK8XGTyg3A5oHVbRq9LJ4B9",
  "key8": "2AYMYd77RCwWDT5UTZbq7pT1Xni9hgiJ6hvJAQ6Vw9m3FMa7EPKoVo5XZkni4gG2qeGbViiDUMs9fGR8SuXFJCFQ",
  "key9": "63svd25xyTqfdsYKg6XVokn1Vtpuk9fs82Dg3FnkVZjF34nd7k3BAHWVBpbBadVFJwA1qyDhyC3h9TXyiEu2rZKF",
  "key10": "2o3RaKwm7NpPDiZe6ADJJff4pimDKb3bjER6JzjtLkX8p8JthzMHHWJrvU4WNeHEXYrcpw7mxsJszw1SLDsu3rNc",
  "key11": "31kuw7M6nZH1LPAALQuoJLaAreZF2r36RHs6d7xnsypxU58UuUFdLkfuk4eq2AV3A2wisxepgLnbfUy6pRZoHTtH",
  "key12": "Wa3HUzXvJJTCvuB6rAhsoxb7HRCzFjhgY74XPj6AVh54TDDt9316vtbN4yj2bXqLVxh4iUjCqQxgYohYLd5j6yG",
  "key13": "3MYwS9zxXTHYfZmyY23cLeRPsWjNWsEGGgAubDPpoaeEaFS96uwabCZ27SxEFkU5ZdxhPCe96rD2hQxv5AqcaJ5s",
  "key14": "3XGdJMBhvKquyPNqMMP9j43oPtbJges8zu7tg5LP1fa46gCdTjdZyn7fS14FKwiU4iNxRTrBfQ1HoCNCYc1jzQka",
  "key15": "3bganAXPCgc5ZnYQihLRrSu7naH1aLwjBdjykRQLq1qm6X5Y4eLaSZABmSehHxUzLFQMp7LY1WemYGSFoWUUWfmf",
  "key16": "WLwMafr3wkihMG5htXFQr5qBVcu659J4yXLwPVFW8U6Npdp1jXQkLwu7BGkzuRY1zZvw9EB15zRWyUpkvciWRzM",
  "key17": "55cKVbRRc93Dj5GTa7cDxJdJnwWa2p5CPyCvfNVHnTRvN5nrr2CSJvAmRfeRqA4r14nhLt5DjEaKWjdgPpsUw1vL",
  "key18": "4BTG1WuMa81dWQzwxhPQfnrSQqSWWMxUoMXABhftLeu8AjCUHKXwsZTtFR6mF7MyBCXjVy4npqcxmrcF3y5TPFDy",
  "key19": "3nXTU71DwxPJphxFFvFffjoYCgzAgr1CyKLsWEZeojTmBZJSqVJKxagjzLhLBUYjnZENZ8t5ag5HhNh4MKUTL5DS",
  "key20": "2Zzc84ENxtmvC6eBcusdMKLdEt9VqXCWjamYQ42THvvPYrrSdTfQPKSZcyjeETE6iYFN13PdprX9BqnHYYftvAkw",
  "key21": "2EYypeX11qjq4FPrYLZgF81AixNL2jaa5yDzjtiwpDT84nG5u199KgJkUSw6Sumoi8czgvKui5RVHYpNPaEwkybx",
  "key22": "3jr8W2D1Vj2FuKEM51Sq4WsjWzyXoqviZqoNoErBSnwLbEhaW9BXreFVqswkR477WtD5gAUutKLhJqKkDrGEt2K9",
  "key23": "2sfvegyshJzByVEdeiv9vuNA5Q6hsfiTaQDdHeHME5HGR3cP7civAGjwnuvx6QxopEfykFyKu2LYr2fygxn9ddtC",
  "key24": "Ddv7xTLaqiTDfYDsnF9XqaC9H8eUQagCLPS3HnrDds4AG6uyxmnZNffhCXLEiAV3HuD5MoiiQaK6brWSxnfDiFo",
  "key25": "2QYo52on71bt6XMVVTBDtLiAWEwe3JWonJz2jZGM3LpzCjuGsbUQrUGEW3jYWnMs6BXsxmtvqMUGVwAibN16vhC8",
  "key26": "5foM349SdbMFy4MCLK63ZggLauEt6NUmkFnBWP6PH3H5aqJsWZ1oduJErvhhLgCWCkFY8HA6Zbya92ArKpHQqJo1",
  "key27": "Ax2gisCkJrmZ2aSW2ewuaCGDc57RJJWm1DUTdi3pqbQ1TSLtSFspJGheriRrqPvi767D75aw92wBnhnv9Udxv4Y",
  "key28": "4mXd1iFzSh2CnsGnCArZCp7ffGayEnmsHFESQTKFmk8HGqfi4yjPiNxGwU6bzpyUz8modhDjDxavwaMAxXHvnh6D",
  "key29": "2vb3Hm3TrxV6kN92bhDvr5Vi9oZSu2VjWP7f2KWjxyjhjUWaycXwn3z8mTHiDbiQZ38p3WGeffCPaVYqED57jKKg",
  "key30": "9KorBYHDCgz9avd67StBiMui4Avb5gALqt8ZXSUMPD9sY6HjL1zf1BtDhsgJ3pMafYrkYdCbqqRDit39BRh6fQW",
  "key31": "4KTQ963JVHA7Lq2g8VUNDTDuh4pJqdGLV5pGmnyJufrt7ckexE7t4KubX1oUCdP3niTm55WWZhyeMitLNwsMG2my",
  "key32": "5pEotKDKCy1YsgFD5GSkaE6Vxk7LgmNtY2L8GJELxJzFiDA5wC25V8qDuUD43VQyqtN2zsQZGFuRPTA71h4uj5ff",
  "key33": "5hcRF3T3PpsKnm7wSnFrJzQN38imKb8cWoAmVVXQSgm4v5WiG4xQnjovZkDxZ4QXo1e1BRa1x9Wofkn8wLuvX2Uo"
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
