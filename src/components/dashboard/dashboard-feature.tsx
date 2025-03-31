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
    "4avUd3YM2jLsZjyB9qWTKn7YV2SvHkrRg7kv9xMVaR6ocAuSpedDjNCV4uy9H3YMNrHZWvRVYGaJ6qnvCEn6cfSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bx3BfGBRb26jiZKcUB6R4sE72tdDsh7pWAy9yWkWnhC8UiA16qo6L5K4qYicCzbTB9kAEtEYG3KsQE9y4Gr9Ssr",
  "key1": "577TRAvPSaK73fXYzA2tB5Zbdn5PGWr4m2hgtppTcmPDoWejdTTFEN1cx9siS1bpsKYAcPQNHToT4cPcWSWJKJZz",
  "key2": "3HLUALCLj4oZwhw8abZdGtqYD1Q8Ax34eHScTX5fQDxMseURzLBvfq8nK882LVSVQ8UKGHnEZKvFkC1MUH9kG9G4",
  "key3": "2t1jhuYNH7DqhLWGi353YGTHDNAuaD2L1y27VKPckhykCdvRrKBqsSjrSGDgwNwDuPNCJcaVhZYLe4N4s3vTm6sH",
  "key4": "29eHE6bJKwQ4GGafa6mawdDxCuLxP4zw9BgeFWEoxNBd2ckaWPSUH1zeDoYbJmnZocjUWCgYKjgufyfi1VjGZhFL",
  "key5": "3uJQxDASwgRTeJzYcmhGPHJC6VzEUdVqvv5vPcBNHKDrADnzY3HutJdeZxLfZHoTppnZ9JKP3vdx55ttKx1DVQBs",
  "key6": "3Vi8t6oMJ1RNe8QKM1EqCHFfsyZfQuygJPLwp67UcrPt1zU4mBAq1Cvc6BKP4zeUbpATehG2XArGrJYg6pTheZCB",
  "key7": "2V1QFX8HytprPH5cyh4kn8kZG7HPvXaFPJF5eH22wrvwTdHF12AgUsfwJH2h9UF1KgvHcRsYg74GfMDGN9QRfM8C",
  "key8": "ehMoY15YQmPrLAe4mpoFJVCz3Sd7WhKKLFDGYKsyQrWsiSFEmJn6A7JqyxUTg7EkYk8MvKzLhoBbCy6e2Yy9Yi9",
  "key9": "2RpF7gS4SjtiQLBUhJC9kkTAv1KGRHTbKZ7EHYzEteDMf8kwcZHwgwrwh7UaVfMqkCGy3JMEwHPAYG3knEAgdSzy",
  "key10": "4s3rAEaez2TSGWbEhn4z3gnvCBPpZwTomwbcxsB1uSyQwvDYX8bVBqvdUZrWRkPJYpZrymBAWLYRkXjnySqhNqNn",
  "key11": "4hei1Mw12H6jDfe6Q3CygtXS79BnEdzYfno5GTxi8BabXguYYCbAYjtEcQepCbfFZYbmWj8EGJcuJa3mBaPFx24D",
  "key12": "3dLzCQFToRxmgUG3yCQ3V3Xqj4JogN5FTqsH8Rvnnm21EPwFBYNEoFfVfuLKJqzWJKs8PZN85Nv1cVoXoYbibtmH",
  "key13": "3UZUh8RxKP8qwfvTDQaG95Nq4Yr7c8MeRJsR3ifyHRP5BDJV79eJWnc4LKGmvsvcfy1EQBd9DM1wkU34FL8CR789",
  "key14": "5iSgeWCG9ttohJikiDGFtB4PHoAp2ykfu8CaNuDuSpvkpTxydoTS2aXkZcvAvKGLesG1pLbFH8efLS26tLhWhjx4",
  "key15": "4MbnHs2sgypBNXAe7Va1itVLuWQJSqpNqKUck8KUUpT1ZHiPWdtSBvUqMbu2by3S8PXVFHWwhApAKfGwNbA9c13s",
  "key16": "5zdrPNBxmTXyw77yciNokqQ5UFb5zkPf79XNDU4oz25gNnRkf9mTz1JyeKU6srGSrbrADhWgderL73WFdhSH2nK1",
  "key17": "3zhV7Y1XTJiYnq7FaJD9V66PdYqGZ9sAm8AL2YHvCUrxUH9kzFJiJT8HL8fPfApzdiNWpHsjtbcmxzEMh6f4Rrz3",
  "key18": "458WvHShvi3XXiyjEZWFVtY8bzjyEYbP7FbaMgz2MhQb38gTyNT2w7aPg3LCY6y2N1QhptHAHCW9VaFvS6vVH9Qc",
  "key19": "53PnB3Yy6m5WDKPBk5qjpEfbvFxZGqSeCTZVEtqTFW6c1KFDZB4CubMQKRx9SgoXLqCtsqw8RVVZKtpmdYMKFiuR",
  "key20": "4dh32dGXxeMqLDCG7k6SwxyakWYHHvuG8TdV9SZ727UzS6u8BriiDo3yoehoTrJtat5RSUVYcsFvAmKogNAgiusG",
  "key21": "SmjQYreiXPP8qdTGVqm1kXUUcov4o3WLXTnzFKzXhkExrEauxpH4XQAZTMndC8NgskoUSiYZH99cXz4Z85f5gdW",
  "key22": "3xDRHnLVKqi1f9ZscGobqkAuJzpVNGs2KtqS9kMGeFMN8pSBouxGznoFfaoAJKCV1CLpkyDc7fYMQEgrP5pE7Gky",
  "key23": "5CwE9cdV5tNXP65vRgHk8vErW8i9mEJ5j2tMdjHtrBjQyuejP1gGYJTqcaixzebNDnx3d2N7S93iQn79T8AdNm2",
  "key24": "5FHC5JxDbjLCHsot1UjSnjCsi5sry9DKCzwy6N9GYyxsrbHfo3ZaZWC1SUd3vZ3yd76PJ3fSgURmeuef4mZeQhs4",
  "key25": "3zv8CWJmq2QJsC6m2ga15foFM5JQbiRxdGXyjGKbPUVxMkek7X8PPCKP9EboL5jNgX45KPikgW65D4yGXsdxa72r",
  "key26": "2dFhmMrD6rHQoq3DTTSBs1BSee3AeJcQYTjFBKRGLdwNpW5Xmcmc9egw8gsihhB89YfmPdCarPcgUq3beArERzCa",
  "key27": "2QWv2YYffEM4EVPrrpDW5UcdDYx8e4fNqqNmWoavm1BoKqeUYLCMstGBdFDFH5EE2yR3uMRvPopc7ZRdQaz8RMbT",
  "key28": "4Gk4A5JgdhcUBVcrAEtTXsU1smg6qxMb1Ud852oh6ZTw5FaBQQhBYgVi6w2nbnNg5gju8bTmnQS5oHhNHvwtAUJt",
  "key29": "4swH2WY3nATyMtWeD52qjnFUmxxGJU2iM7jdxrUsHnq35mBDfG6EFbTXDYutuopi6Rajzs1eaPFkATbDzJJn8sou",
  "key30": "5DrXbfQktb29ccaTqrDPDy5LEzeQ3fGzyBTEep9AkdAsUmUqQUsV3vbGW1qgiPU59WmWBuAwH9j51qNWZ3GHP4iU",
  "key31": "4KsYj5QYj2zzhB1m6yztLKZckzmxsL2Cpc1BDCTA6RDiXRG2cM2VUqP5mNGwPt4XYT41YYKm47vrTNuKX3ibpFPp"
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
