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
    "3RWcPaK5tFEfSXCC9JES3g6WukktMTAs136PxLUzb5ZLTCSLx9Hkzfei88LQ2dxXcgcjChiUWpcmvU1Y9hnbQ8by"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ucHYzPboJqNiYPAeKhZHi5XymYTrXyoykEi3NTAdnHJ8wchsf58pNu1cpebjkuuK9MDNUxjfW3hMDeqoFM6Wo",
  "key1": "4Y4LSMecupvLjwkws2TKivucZfRevgfQFVxsTJ5ddENsmzasRAU2ZoNXocpjAr7t3LRaPceyHGaVGy3hLzsQ6afC",
  "key2": "Fxkr5oU9Bs3xxFJTvWBjtJHAmbZyBmJeszGAxuJ5TSR26T5EzAiFbFLkRtz5YRDrrh4MX8qkRnPg955XipUPNLb",
  "key3": "4ZG7hVbtFFPQPp6p1MDv2vZeDDrFyvQcVyE9GUjw2MwC6XM6HcYjytKudbVYBDuQoSnD7XVArz13k2bEt7Voo89w",
  "key4": "48WjEzfX2FK3LzHiXH5jDpxHMpsYsu7BdYjbQJJ2zPRkAR4w3J9CHRfcRauPvoZAJPHLxg5fBqGwQGdxD9yWtRE3",
  "key5": "4YB1ppamfngqfJhTfDfa4TC5kDsxrdtCTRfACHvKyC4C3kmYjHQMLjwV6gk4PZeXevsdxA6UHgVX1fKjS9fEo4ym",
  "key6": "44xSec7os9ncgAPVEAQABLsy4gY4yK4B68BwFdq6r3o9G1XtW8nq5bxPoM8YT9VShbNAs1C63TpJQW5bCsg7VyVz",
  "key7": "2MgoUn46wzS6vni1Jk6adqxd8mN1vXuHpJje5wqu8vdJiYC9hKxxoTfcwnJXA6jwfPAr6whmPPrNFUaRpawSwLtu",
  "key8": "5zN92FyWyrbz5sSUyM7iJ6cRCpqsurhNxFFK19Y8A94L3mgBQwVd6huD8PawfVrwPSpPRTtAZFbJE4GwtbQnAcEA",
  "key9": "4VHhMidMJzwtSNZyrDSaCk8CDzu7oVGC1tvkxf1iiNceBRQS8JVxuhcrFrMEATVYruZsZnLMPyVzEdDQybNTKQPb",
  "key10": "4ehkAe6w2TDW8PhfUBR5bkHZGUMV5K9MwL3n4CcrGz83TtjxLDc2cTqufJVCkYypGPDn7W44V6vsHSxKtozNPMmK",
  "key11": "2T3Q949HFTM2ELCAhwxSFVkZzUcSVVHNEWweNkJmwPq4X1kPHhHUNpsvcHB2TtFJMEgAZKxyEx4fmK6XMx2bcU1T",
  "key12": "oiYNe9yGKtVRS7ZyP7poKBbkSQLajfGaikoNTRD22jAFsJ83uNvFxuwMfieieGUMpteo2MGjjju3SR8Lgq7ufpu",
  "key13": "3SGZzS191JvULJapSZKSi6gzQCbXCP2CWvx4Ze3AHFuvqsrPfdYssXMwjwVBLdW77T8GfFqLpNCqZLdRjYeAhjJZ",
  "key14": "abTdRyA3bubMxEa8nHwk8kRhyixWkcpYfUwC16CJtaf5RCNUiDhETpiP61ArmDFoJiqFPEWJdNL2qA3qD11nFz2",
  "key15": "2pzrtUZHTSPfsZ65i2GQXasD8VVviLhbvNPPVE1fYdFAxMNzvSnj4zd5cyz4zWJHQBF4EbWZw7Z8hmTTfQHW7BN1",
  "key16": "2yH7a5QtrL9weK4x4izuUmTYpPmm4fnzfiok2NVMELaUchNHvMJb3GRC9y56HY21rQav2RRRUn86taUGn7UUB921",
  "key17": "oHRP75a7hw6ZxZ7PzPvR5LPUxgQbRHvESF65VK8qHnS3vRaa1wi4N3qkx9kQtEfhQYUt4EqyDLumpbGVPSF5aGP",
  "key18": "58pWdjPAdPjrkMpPeCXYUsMijdGPaRkMTnjBTQ3x4U8366e5uPULdzRXDY5HFVLtUfc3xV1opuGCffRFPUCE548F",
  "key19": "4YprHyc15emMF3Mpi6w1EdDzai8L8Ac6qSaaT4MS41u84btv6CUSH3HmZ922eY6KBaganNJxezdE3BzKNqAFnRMG",
  "key20": "3cBQEhEFWXeFBc2NM3GJc8ryUKg1gBChfBbc3VePq2jSMwpYFQyQoKx19ajw6P3j1bAkRPDt9Tio5wQ8ENz3oUhj",
  "key21": "4Rgc1iatWKhN7SiqBGdz1f3XCqH6uS8Dyg5XuUHkR5VYC2HfMHV6nA1JAYB7FVXvHkDBvaBxR9q6ni1cEvkE1Y3D",
  "key22": "2G2kkCwUofT8WVScU1Wh68eeBP1owNSGFrbzKvLxNgDgrRCHoFN78FF6HeVvC4awj2uhf1AU3QjTA2qowNku51cx",
  "key23": "28RaFzzsq3Y3jr7ixc8ZCbpoG4Ps5UctZMxoAEoiwoQ9BmEvtu3u9uf3TduKd64yfAkyEFmfM8Lw2iXiS4K3ZiMW",
  "key24": "4W58vpSyvUnWKkeDuyKLJ8csgcQHpASsNHAEX5tfubELfsp8bSd1SRLLDpdK8xBBjNmkDddDsbYxFG27TMJM4g6X",
  "key25": "4MmLto2nxQWKtZsyQn8LbUUDtikWXCQ8Nc36Ks8w7ZDtGhzNqq8EERtgNLDHi5dhK1XZTn25n3P7UMWuWbHYJzSQ",
  "key26": "3wZUEzn9W4WSuLoZLFwUwKiSBoQLRkmEaWhB4fjnxe77jRbsNQEv8aRHXjtS8c61GvmE4QYrQnrvabXPAdqdGVuy",
  "key27": "5XEBaq6ipzX3znFvLNt3iKLszEgk75No47vCQHj4Eo4Ey58sR4BNzuJwqu5p4q8aD9SLXQihCqSzKzvQzEsZdqyv",
  "key28": "5JwComAowNCFK1inengH6F5wXTYWH58WqFqoH51cNB534gSHZBpLLuxuLU2yqsA98YQAjk94wsQkSJzKtgYbbDH8",
  "key29": "Pqq3Qxu2MvUhS3enjn5FkwiEmJRkGxtLCcQnWphbiiSt6XfQbgbQxEGAEqQnTWL47NZrRTjaESUhEch3wjJK9B7",
  "key30": "YjWQ5aT8JjiY9CmcVGUprNdAG3tx1Buikj1gZ6zztx7jDmHe5gGz7d5uvzpBvFUfHNE3eitEhgjMo6mxkdXEHvC",
  "key31": "HKHyorgngKkqpKcRneUcf43JMjew7SL6UvykvKfgFhNWBdT8ApfdzyXBdZgeNY17JrgAtxjoMGjHMqkiMhjMA71",
  "key32": "3gTJ4BzTKRgeaQv9DB6KEC4EouhUai5R9i4LTAvaMPEQ2jUcjgtqAF1DiuLruZkYirzodUXR8Xr2iSvg3YAH2dWc",
  "key33": "3z7WBWWCHkEH3gph7q3pzexFGRz7fMExY62vSeLmEYf33aW6DyL8f5s4h2HGTDmBTGjtz99XNXAqpNin7wjKUSG9"
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
