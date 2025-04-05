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
    "DgT1iy8yhJujAhL561TdfALmQJLAf8N3Tj9SxWYLTZhj2N1mCjCZtuQLBawofrqg3kqJYNpqvNVXVkb9tppDt44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JaGDtUwKJv26fucfaA8smSB7aPnb3Vzgh4hvkb4neBV2rdc7VAmoYs2fTyAqj4MYUAa3d1RNX24S64e5s6twCV1",
  "key1": "36B83zsE6tMxQsEDehcaFB5ZPfLkPmo86DkUbTpEQCkkqjrX6iPukop81Fw16EykikVQbLpGHcDGCqRZd79UxaHY",
  "key2": "S4WhumjK9TuQwyhZmeUy6VGdxDtxJWu6nvUonSbHdTsr3fRsBNqADD9RkdrMC6HMxe2toWt8FjLNxs4Q5njNKSM",
  "key3": "5Z4PQdtqjioWAQ59AkQZrAKJYbySR9RAmRpxGSm8YXCEZxzeRKmh162MvaFxdVo1AeAHb7teVJJ4vu3HkcfLhXnA",
  "key4": "2WkS9g9xKr6H3pSECjtsjeE3C4ifyVDyYSBQsecqroqvBmPhMPgsjv9oi7Uc73A5fprCjMLaPxMSgUwaCC2iT1jq",
  "key5": "BWjGXXeVnBWtCasAtUfXtk7iHYBZp5b81YoYoNpGRNPdWhYtnJNKa1cJ5gvh7rVggDtCichAEkGTEApuYJZUpUq",
  "key6": "2ynWmzxRs9rqRTtbSHNSf1LBeKeWeyeuLYKFxz6t4pmMto9CqgE8eUjCYECcHEnuo98AXRNsgtoH44XzK5zMrKUn",
  "key7": "2pEbPGUHcpLfaf1Z2JqSBK1enxwVx4P43C2fVH2xaoVKoGtiWGMEjuCat8iy2iA4jkzezT2i726c3JKcwrnfcxYi",
  "key8": "3KifYoYxooaDsmynV6gPiA7qBXhFAtTWRRN1Zn7FJHAK9gFN38FKPG5M9DXHCK4LXcCKSuZZEhrcT8ogLu8mcckd",
  "key9": "3ioEciTTWe8oFhMu9taBXDeaLgQfqsJqZm1UnU37eDVEPYXD8ZDEXNrfzTDJwhP7PLhR4DoExT71ZoK4TAU5n6GU",
  "key10": "M1bRmm3rsUjbhPb9eGkRX2TZWsm51JyiH4rQdATNGTnCXREQTVczfbDk69Eu7TeMbTsdM4k2zST4idq8NnaW8Xh",
  "key11": "5tPF8rpfEFa7cAd51pHJgSSVJLDiRnvYVufVz26RDxWuGKjXbY6krfV8HpozqbDvGPGAo6KYLiYzcFNTRUU73vYx",
  "key12": "2PCWzqZzCeqFSEss8fZQbvViKpUdnSdq1jAX1qA6Yg5gCugDsWsHZDQogxcfLdjq4tkQuSRDRdVQ5r3da9vJXfKk",
  "key13": "31NDhWPFRhER8wNqtND681sHv9mLU7Bxvzt1qZAgiyXBVXDKCnXeSjscocNf1GvmhbSocqop2nxWeu2dCHbNpadM",
  "key14": "4q8ShHBRK3RhWB884EWSoqaVntC2aCQoLGuMicShzxyyF9JMhqaZrW8cDT2kewv67on6uKVecmNddvnyBHKpcVyP",
  "key15": "4j7GaAFR8xzexLYZ5xxQdkn3CnkYfUALegEKSCMmzWAS7oR3eLnCjh3HDauaVHux36tQB61TbyVxkCkthXWQLTFG",
  "key16": "4YQwdFvj6tq7YDrgm49WzxpP5mBYYExMPp5FvcxMzgYuKspwC2gxvjWRBXvooSKs565swvCDdsGFPbDAbTv9CktA",
  "key17": "3WZdGnZG3utTjMRQTNoWbcx1yK269wLEeheFvymYErhtReQ6MFtX5PWX8hXKBR87jFJKqiYU3LcyhBgURhXkRGxu",
  "key18": "XfRWmVD1dzVMJYwgMTAPHZr7Lirq3fTo699cft3AgfTwAAKhYt8csJquqfp2VJgNBANM7WovM1sz9pQr5rTTG6P",
  "key19": "3QeM3MpGt8M5LhP7YGDdjHecdSjiV2PVw8tGFZpTDEBk4FbdGYgJuNVhhFdDRnruW4BUYuFEx52BsMm8wyitj2b3",
  "key20": "4y69Vm33D8m4gND1XhKGRbGYDBmQfBC6vtr9mFKysBXeqVxgbgWy7KrAGJyBZTiChSBipHtRTnMm3nsL9UJ3QXsR",
  "key21": "5sVh2kgy9yfxk9GCPs3vdPWyeHxWc8uNUCm3QzLgiwuVuawqtAcJE7STtPBf1S7RoUFhcxMUXpWT2SKCJtzPjQHV",
  "key22": "5J6C5Bb5aLSybrS6yHjnHfoD86LrKE9Mdo8YdXsFGspNXsVHiha2n9C92AG3Qat8aLTnUNGrY2aEuJnrAfegp1nt",
  "key23": "5ExAHfKLdF72yHWnZJZq3oucULYCGMs8cRY2hfgKCjXdrKzHFAAKT7CuJgmddwFv6M3rUgSGqhh17cuGXHhCrsN3",
  "key24": "2z5RwEPZSa42RebwUanP3EAzivgDiUJxYPoC9sQvkaMBVHez4MZzKD7fSmH92vzRad413ubN7ptq7j2PoTEoayrp",
  "key25": "5cKYW3v4hSeQEgP8gjUDskkkdTkBDSchjnShkTbYYeswijBdk8ZtwaNTxmhamGRnEFHFrrexrwk35exixTRTBVTx",
  "key26": "b8ikF1JusspGRdkN2ErkCoDezCeMDBQjUiugpv14yqsxSRqpgxyZkEfCzPbvsKgCmfQ8LYXTAAgiKvAEr36BpXL",
  "key27": "RG5PP8vsZPpktrv6MmsrzvPT4gosYhjRVEgFJ3z4jKUakk2k84bcCiY1weCfGBEVBR9q7gzPEmUtoTCwnunCwa1",
  "key28": "2B19DbNzavTmhxPJ3QcZMoMsyd5mSNXj1Q1rFHkNhQQ6aAWSGPwFaWyPAbKYrhhc52r4E62ANBC8dea68rfwarsa",
  "key29": "5uj2AReQFHmYweRtuoqCD6f1a5jsLkEB9KPz2hdQZY8y1WiPVWk6iaMkGXqbixnCbgs5Y4sKLPsUWh9BJwnesz9H",
  "key30": "3gwW7vGqN13VBUinFyPhQiJba4CRgQH35qBUjbYVLKdJ7R7kGCZLSsASkfWi8Ghz6xrWgPa6T4qC2Ybsj4TC9ZPv",
  "key31": "nhN2C1LWmJXynccKvZhhdHUsoUxzuQBstdYEM1EN4d5Tq5K2JHwVZYuDpYcGrQcqv9cxmpWrZdeVQDwp6RrMxf3",
  "key32": "5vXfEhyVBfbn7VUB1Ck3cPWk7mftN48dHzZgYAR7YFo1gZJdUwp1JtXfzejK5mTitxA2qRnWoEtKrZwZuhQ9xU3V",
  "key33": "4xkimT92C4LjQJKDSmqijUVu4T1m95nogEsomT1HjksRj82fLf41sAsHLrhFG5zLF346B6tZSZzZwN8YXNPYadhM",
  "key34": "TAezoigVNBAxTzCaJPV1UJeHtqu4Z1yGKQ73kHRgoDtkwTcQdK9pdcRbvYx65FnS4TbDKZdnejufTU7KLEZ3XSx",
  "key35": "oZmLTYp25iaA4XP7jmVxFMin6tH3tsatNHwmhZgeUwv9pJWZP94gUzpgMs5sh6a2ASm7DRdPa2pnNsxXZ2YpwRV",
  "key36": "33Rr8nEabrksqLpErSt19oydZGVLZ1MJ3ZdUNwvhUh2hrHvd6HeCXF4koktN1hRdBHoCbtcEg4cqUsCVNUehi1aE"
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
