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
    "XTikzuRJbYnH1Bp6zEqRwkrctWsdDt5gVy52a1uUXgK85p8r4LSXwPo4PRxZhKKiCX2Ycy8km1WDj1rTKcSuavK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BxYrLzjQqdAeBoWFagvGMye3a2ZxCrs9qqJ53NcLWL5ghv1Ri3JcjtYW2TcrJZUe8P7A8HXdjgLh1viVsEH2LQd",
  "key1": "5yAESeGrqmDn4GhmAg11EneJWKtLE7WYfmAzqUK1iNT6qh8353EVr5YQfC2Hx761FWsUv7j7W2w3bQbkdpwt6YWu",
  "key2": "3Nzu3uAJbCb8eeEq7rc3nkzsh4zpCpRDvCwbwqaRGJqhVKKPGf16u9i1STdqqktAgH5y676wDVxjxg3TtHs7yFoZ",
  "key3": "2eCimzfC2UL2SQALfJZMyQ1ASrLawXwNrpJRk7KRcbwga8KkGD2BXmtFJ5y8pgA5vLR6qfc6tcVyYruiNou4v3pG",
  "key4": "2v6NLNrub6HG98L9CvuRriKPptd3RgBH9WcgMao1ZdX6Zp216vZzXaWDd9gBGkUxpDNtndikekzxCy1dgFTxYRpr",
  "key5": "5k2pw2rkZkpj7qXVs6XkzNzRJvjAVkTNeHXpjadZ2r3MTTZKHABBzonz9KGr5n6WUX3LtQKJeYsHfUPQjzftvkcC",
  "key6": "3pFABkEWnuZWWoVhUgMJ5tX5erBP9kszamiVc37pp2XEkiTK3zysiQuqiM5CWAHCyp7NieyBAtNfXnx1E2qxbQ1u",
  "key7": "22ZhwsniGow8veViaKnCGwJnehfmrt1s6Dzq7hL7YBqao9EsyvzyQVTsNLT3aiMEAGFS9CXydg6TfZJMoDwfjcxA",
  "key8": "5TACnYWmng9kfhu58zDdACgHEDuQ3A5vUEvqjnrtF6z8d5js5A8UWRD8VQk3DzQJgnRyQjmEjEcN8GmRrZhY1p8a",
  "key9": "2oqHj7M8ik2bg1NY2r51dowxGUcY4mqv8uDFLv3SCayJ2wiSq4cwQAYiz5xxSnQfqhZbggWqDhqHG74x6xP1oYZX",
  "key10": "31Nbd7o4yxANKfUKiLVDXN7Ptx84kZXiW3mw495LRHhMW88WzdqLLLBtLwnyW5gRaMmyszbrdfj5Wcshh1yus1Pz",
  "key11": "55UH89EbgHgm1QEkcE688UoChEt46KoiJotaKrwHiMAanCrBrvy12NRBpLpNkXdjCnLyKTKWRw5giZG9Z9JuZGFn",
  "key12": "4AtGH4rAjEMDfJPHdmrpXrQajgLDV7YB3nZHmCQTHSMbLcYFfFyHKwYT8KuwMqW6kUk6NiGUxqLLxhUDVRhM5jtB",
  "key13": "bUmmvThF5YPcLxpg6QD9pnybtgbUY31q7MZ85UrRKRJgDFCPDnoja93TTtw8ks8HYVgadtLqXCLEg6LVAyVoQnK",
  "key14": "5KgPPi6eu1igyQHLnkXMQm5egcrN3fkh9BayCaiEm56DxpsxXaNfPU4hFxLqxLLJnfF2Lkb6LT1He6UhWXd1bFzn",
  "key15": "1tjfPq9nZWufEHgA54DGKeXY2pieAnzqabRGT7CB63b7v5a1uviEQ9eb9j69a2J2AQZ1e1ormw8bjxd8grCLpm6",
  "key16": "4C2QJEEg4JS4VSvMajyHBf5wCMGrwK3J1Rz6pn8g8VFZTcFXVzBTnnKFgZL3xiFWfmGmhVuKaKTqGPt8UARDRH26",
  "key17": "36GtqDvkp1PoBR92W5dg6RwNLR8e58uGd8byZrNP1X2ZB1bkdf87MNpVYymwfeypSqJZgbgD9uUs7NMZCU92otSJ",
  "key18": "2aSMVSupp7yMwTpf5AS3dwdpzMC4329eZyETkD7cTndJZwu22cWpb4ikpKsG93qx4zXcgAPgBe3XbioYdtE6zcHr",
  "key19": "CiB3pbjFsxgM46FtQ6e22Hbf1yZK8B4Wzf9N5EM9zruBwNw6wTzxhEC5DjzSViurNKWLY77PXYqLZzSZwFWFS4e",
  "key20": "4JYoedHaJtWiBhjCyefkgvcYy6GfFXehEGWByn35j7Ud9QA31D9tdbJqX9vQ3zi57H3dvspJMifub5GeyHYUyYRF",
  "key21": "2eDSnDLR5PBdGBEffySK1VL1tWcMaBU81UYWvG9fbZf2rueELGwKL3NjX898TZD4MmSXgT1MCmkfCDvdpgZnpGZk",
  "key22": "51RV3pBdDtqdpCBvUaqytfzvNppK8qPbXbwUwbUZQQ5BfcZXxHTVLfpxeaMM8pNT12yptP5eiT4AJToLHu39HUEu",
  "key23": "21r73KAArWr5c6oyzoTKjj1unfGsH1Gn2TsHT96VNo1y4pZFVwjej27Wt9LRAnW3gDBvABuyhotbfHD3r48uq8u5",
  "key24": "3JGhCLQZGsHYZsqxCTfBmAXFbi7Wbj4VRh7WmwZaNUrB1XGWvZVG3susknnZTyo1fmBF2GSxANiuoVZXUCCP5Jgp",
  "key25": "4xozbTKtxVkYU4jmQWUV9GE7He1ZciF32gG3cq4aCztptDfjM1bCgWw3Cnw6vVwmoQre5sa2hQiLA7kuWyaKjMnt",
  "key26": "5xbvpWwvKr6gqTGqYVhGEEYVwQqCc57W4bpYzMrzAREZZAZDw7uMmrUyyWbLsJVzRJdo4ENLuM8LxCpReTUqZecU",
  "key27": "2Z2qUsHv6S1YsLXUEzcf3kVcb6EpQyw32k1Q6nZimEZNrL6UdQHBueTvQyaekf5GFBKpBhaLQ1yH7XDg6V7XtFHL",
  "key28": "58fdbxa93z6GSMLee7hrS9U5MPtDmFEEw7EcQWvxYDTNaNWuChGVnf48PnmSCpHfPyEuY9ia7EyNRaM9jPWnyFzb",
  "key29": "4u9VwBBktoSEuAV4u31iBkhFcg5hG8ReCPV4UjuFmvbF98z8yi6uy9vS8FnKoUzymjxNWF886MQMorUdcjVq63es",
  "key30": "JK37maARmQQRtjWkh2d7MJpgE4EV3RizSyMTZYt6Evc6FTcnmZmeiyNvD9APt5vaMU3sagE4aa785qSRYs8ypCM",
  "key31": "47xaQoVGMvH6GC6UWsQPCuRCBoTr3zJhfH5tmS4pfCtLWhVrdmMUJrAnALfFcv9imf1FWAUhWDbJeSXkueVaARso",
  "key32": "2vuMzUAPNpeeZ34C9iDaLH9byZp9rhVtVfRHHsMrBY4HCGmE7KyMfzHMXVfkthi2LpMK812vsNx6TyjiJ5dnvCRs",
  "key33": "2owPFdP9GHHhdJEV1q6v4ZBQFydDP9T7oxXBLcDaqywnqvQQpbK5UJRrFa9NLrAfhqX7cwYeetX9CxKJcNkuqKuH",
  "key34": "3UxKpzFqNbcovA6ZKu5tkSZiWyhJZJwxyUVvfASuDYxrQn6tp7qHdkyCxvdfxcnXtpE586711XGTgvkX3PscBMv",
  "key35": "3RdDHi6fwKbuEqFwf4iDRgkxuyPvqNC7NZLuLkEMeo2FWHc74KaJztE8k48UGtpsikY8Wpk7hWdyvALU5PywDZZ9"
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
