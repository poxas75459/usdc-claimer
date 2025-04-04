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
    "2VqPNEsUTtvWsT3H22n2fqjSRy9FEYgBTCB8HyECSeZszgeM5C5HfLTKZ9enkNS4t2p9HdNXXVJNTGBLXaUbMchy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWKubJdVDmMggeyrjL3vJVWy9vdmvhms43GwtBGNfi9jQZYhD3X87MKzGAK6P6Gb9LNKaCM68t5qN8WY64suWcr",
  "key1": "4JX95x752naW8Kpz4Y9d27RYkpZjoinbPJpikFcjPVTNNvnXzAb4HcPKrqsK2ft3TEv8L22jNQwKxyUrfJPxmzfg",
  "key2": "TSUeL3iUZ9eNfGhYs3mcbecEWfUsDsLb77Ln2kYDZJvJefczfYHswBwfhveQxYxKx1gs61okqQsec9xNwpYfBMk",
  "key3": "4463TanLWh17PWSikpcipE6uvqNA5eqsrqXqHHBQbfd7nFLokSgVALK8bfaC9WssyRTnhKEzTT4M455hrDeg8HbM",
  "key4": "2pVUxGsHoXoUcLyeY4H6m8m3mirrJ79uWKPzvN5hjtDiTnBpbaNzABdsEVSbFZfsepsjfq3bNYmWapc8hThjLQwq",
  "key5": "5FqFAjkmcPq5NeH5GSRaKyXQQgyGTwTDSsCbdQBg4pDLVBXtEReZeDZ2FJ7RTzULx4vsRGZ2Ny6c1i1WoYBnNeR5",
  "key6": "5hvFWaEpwNGerjrWNk2SbZWz2fz1yDqLYNP1oHDcAXwXC6jW4dNhiMCZgmcRvPPqaAZBqiNDVPM2wP3mon96o9Lm",
  "key7": "woxFwRneitGAsuWwxraVc5pEu2wEHaVHG7QSvEowsmzqK9Ym7wpSHm7dGhcBeFGQtwr8XZAFhNgQX6HhPnF14Rf",
  "key8": "f9mcAe895wEu5rgZZKGrwynqN6xxEKC46oAPLXBN8ffXPBy9C4k9xKb3ZwjFmibLZ2k8RjgyGUHxgRKtN6gPBkc",
  "key9": "3gfpBdT8FzM5jM9b5xHfXpyRyKSbQubNHewT8MwbPCeqcDKGfPuoCMZPaqmPASzDM7gYXw1fWw7pju8DVYWEn1qa",
  "key10": "55336PhD7PoEAhU5gbU9HLMB457APGDVFJcqjr4snWEPMgoQrPNuYvtA6CevEi6Snj5bdzT5vKXUjP1brAWrgntV",
  "key11": "27bhMbAMVwrQqSkH3HLd1B9twWn9hw7QJA4u2wwQeweMFzTqETd3JGy9hUj3z7QZNDbeeyME7rRnGtDV36QgYh7K",
  "key12": "8FMwwykDaLbVrwv9ZkXfnnirQUcXjA7owV8yiMcEfeByCkVpkPHvJrZuQRLYpbYhPBBanV7TVZwNTswvBVvZpmZ",
  "key13": "XwLBQXV1qcjiiobQBaJUtrLE8TPDcg34999RGhkqgDEeGMLeixA491LAP4vGHti19zb1MLa2aiJynsorAP6mskj",
  "key14": "3tXemAqq5ivZKcz1vbpyT34WivHubix7PETP3kwQDfBpNmL8rKCPsyPrFszxJXh3nreuootvi93pY5iy3wQPDnyd",
  "key15": "3nui6mCAmwgDjAv488GgkbxrYKk3ZCwcv3dJKMcCmaA5SNpq5HXQQPf1Uajdh3MJ414hizPS3QCtXNR9zjYzc8bT",
  "key16": "PY1r72wB83uYtZVPGp9EaJ8Zk4KiuitrDMjrt8sSukSXAFk8C3YxZdsWK3bszc7f8nVc6cv93h7tHJBRv6EvBy6",
  "key17": "66KQPjCyYguwP8YXrfjE9wfztbzk6LmB5TdQTJur8eE47JNwZHPcGDWsshjb3ccRe6cuZ9djtuFNMnDZ1JEBE6yX",
  "key18": "5CsdKxyvyYqgH54tg2EqKH5i4LtAbCWKjLUaAXiEZgefC89dvu6npM9W2mLTjtY39WPqneCmxh7LJTcEnQZCUrcr",
  "key19": "2jFhWpWDL6LzVjuFHWPePYUiyGErJaKMLfn5dF2ztmgxL2vLtTHNwgi1xtsRfqd1U5dqp1xBCL6niqBPmAGMMiNi",
  "key20": "cJwH2B4C4wuGTWtsYijViGbHoj3a1S4CzdvF1LF7XabR6JRgzQv1BT2jBEZCDLmc6VFk2kGtAt87c3tUHjic5gY",
  "key21": "2fmj3awcjrH71c9vSWGa8da77dZKoH8ZnyijWeoNfHjaFsXa4vxNe2TdvQuNN5hvrAbSZLSKHNt7QwEn6Jbj6gR2",
  "key22": "5N3huRCi32w8GHGcLVgtbZc6rQEov8XTKgofbyEEYrUnyi6HZ979AX4vH82DgXMnnwcHJeepP6PD1vnzj1PmjpbK",
  "key23": "XvNLnCxGQXf4uqkA1mLaP3V9gSzmA2px3cm6vLDYXwdLWUdqvMN7FZo2mvryJNdD34T2zSQfERieya4hKH7br4h",
  "key24": "oaYZWptyKZx9GKkcWDJ812UnGMRk6u3v4aTXaA1ACBj6aY16FmTGnM6sTk9HM6oLJQWxbBP94uHAxdy4S6Ffzm5",
  "key25": "QPVN14XeoBpNNwAwjiKzH3171KtsGtYJ8YuTdphS21WsVEh8n9KRqrwr3ZKWtKyeXkcSnx5Vbm1ayaTjkVbC6tp",
  "key26": "5aSPEGruRcawD4q6shHPryxAAabVZwE4wazfQtpj4FeAnwr3NyW6WeR6TKWKxNEJHM9Ycf257RJztAo5ju8YQopA"
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
