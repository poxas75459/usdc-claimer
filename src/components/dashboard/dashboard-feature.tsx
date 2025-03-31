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
    "5rHcV7jSe9mXWPDnXSdXjou25f3jp4sVonurfhFL4fWFSLxG4BSrwDaAiK1miiXYTqnv4t9oNeZiu8FMNF3c7JwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p1Kqy1grpGUgLthWnJMRtmLDqSKrWaLa17CsLJd73H4Ydb3WbrBh7F5L9v4iTkx3AiShHmevRCxYLF7g2gxPkNF",
  "key1": "28inEnFFdzw2f3HGy7oxQY64bYsVQeiXnQZGJhTrPhrNVkivTotm5Un7xV2MTAd2mJBxyoXGdicrXRj9w1Q2zjsQ",
  "key2": "2UryZdwX8CzwJpQcgDLwjBn5dDroNmXJsyUrdxVhj6P7UT36hyfKEu3ViZRjX5ufRRtJVS7Pu3Tt7pVSTcsiN4Ag",
  "key3": "2yJnLB1UcPH16fFKwFePKRS4FNDqzXKQQgXi8jRxeDwKwf4zqyQFdvgLGDjGAhpDDQ5bauC4mF92gsbDQ6Msw5c",
  "key4": "xePSZDCZKHHQwezfKg7Ra3M834QV1ap7THcLmL6Lug9EV7YvTxzSQtmcVnj5xvbHEr6VRczQ7vGXbtkyFrZ18wE",
  "key5": "52obxpd8TWELajWeYZdf2qTzQxgjsGNCvbEwvZJQdPFxq9jKswrjoaHNijYNUrwJG7ecEyZdxrC5ccrCbvF2dqxg",
  "key6": "5dRjaDctZxgFJZnEErC7rtnYNmAS6LvyWTrzA8TPzHTa2WtQkPwzTyKWpGsV3ESZLeRvSTJryRQZjWG2MmmU8QgQ",
  "key7": "426xUEX5ePjKYsaHa1jK3oPGVe4tMtMtvR37MBiGy7o3neK2scA74R2NHWoS1Kdrye2X49EuH8uK4NMSEfpDkPFz",
  "key8": "NdcuG6kf18yjwY9wtn54q232yUq5kpHhgFpKFpdgTa6WaqPSZQsHaQjetRjvyfnTCHgewbSU7RQMmpUqCD5ivCe",
  "key9": "2kmyNvFKg2WnTXG3scQetTq7sxuL8nPYzcRysgqd2Mr5vHr9rRE8tV5ptqzD3Bw8gU5Xub2AbACyghsLHU9koknn",
  "key10": "DWAkf6KHvBDgHcWWQnc5zfXfZUByMZDLChhTWQGKFNL5JgkFyF4hCF9DcspW2y11gSztif7W8ZEhpEuA74heFFn",
  "key11": "3KbMyoCoB4UX4Dzf3MZFjuLYp1idzPWSqz2M3jzDn8mauGpMiiZDKkGT1j3UFj5WEmHAiXFG7GGTVk2hsCCJV4dP",
  "key12": "2ASn37Uk53jFaMorK9BitVh6Vr1X3bmgzJTYxTce1qYYzpmJ87kZdKPA5xmfDxQCbLKBzE7LQg6SfpZZ2hbq9uBc",
  "key13": "2ET57sJCzs6NfsczSwyLFM8kCCfQ5BKiYDNVwiXF7YSwFgwqWZbQ5t6mbgeaDFsefZNPtLWsncSUG6jUGswbtTvX",
  "key14": "2Y6UARfNtfLygHp4T6Tgbvz2QwdNjt7LDFrfB2S6wBCGu2tqrKsgRSoBWR8ehuPaEmqZFKBkLfEduy53ofPHhVkB",
  "key15": "2K2CpeBYtQuta6heJ5ACs2x9vMfeqajUATyuox5YXfqR4jJnwYvJwv2kiTsrYsJFBgEpBTXcBNSPFAS2YstwE2QB",
  "key16": "29LfE4wkw4v49Q9j5JNMrzJVFcSz2VYe2Qa4B4HnEA98MCYtML3kaxjTywbzfngoTmDmNck3fbTWRad8xnBC997k",
  "key17": "UfVxQYqRU3Xvh6HJEVYJf9jpFmkfRrqKoDYKs7Zox8mGY5MckQMH6pwE2BgLmkeoGH79M9hVzRYyDDRVYWeNm64",
  "key18": "3w86MBHUGG7iSfvYoqHemBgy3zLUTojqaxu2dcWJJ3AG6XE2ZEFktLV2byCH4KJziue1LNpX3yspu6pckgUYhjEq",
  "key19": "41yhRt2XNUXZE2W6S8SqNucPYhpnHvWHVES5PhetgH9aUnhAZEHgmX9ZWV3jZ62Rg5cw2F4adSwVqtFSUk5fX7MZ",
  "key20": "2gN8r9mpanmrmXSEob5Xpj4gnCoaRNqJsxo5pybPjnHAqV1AbxcEGJBG6otWtQocAGDFhpTHpjuDsEewjoYihNZz",
  "key21": "fNKCnKpiM4b9NXomt4bnpJ1z8WqyCjfTUxQLjSgwH2oFpL9jP5b2PaDmxdfCoHrBFhkBa8HWTdNgkc1RRH9pQuX",
  "key22": "5RQJtey8Kgv2cWHKuEXQQKSyQJKozkz24f4hL53cH2kA75nQ1B9MjsSVaqRCCHKyp5ba42Jbre4MwfKq4bHfAjiz",
  "key23": "4yzh5PpGMj9CaraaHaPUX64MEQHkNpnYFwPpRSvbP7PwUsoGZyc1bsnwbimxaZQrpv6f8Y4czmQZ228TeFgjUtdb",
  "key24": "3nB66DTHhscbnhGJkiaGAQrPpYyKk7NxquNwEuUh2mj5qYUVfgdVXBf8QiDoCDPXga7wD5U5fkqyPmjrc57pdMNR",
  "key25": "3yk1tnydLipeELzVcp15uNahKPnRXZWedkNxUCNaTfJQEVt6hWBFHz5gxggwC4Qjpg6D44V1aGjdsbXLcjfwMGua",
  "key26": "3EpgE2YjjYGfoWvecSihTGZwAJYYPETed6d3csFDmpTU4gbNAjYbujDkMsxngykzU9BAs9M1WWLiqskKnLXaXekW",
  "key27": "YDmbAD5VfWqecvfu7gT8gjqJBuMQX4GNgjFtj2PvBXw8xoads9RHpXtKoFXLtsFarGVwhnXiUnnuRpwh5Un1gqk",
  "key28": "2c45NM66sgEH3UiAhLgqNEvMHUSmk3YZXsFCz8MqywkreW4V6T6BFvPC79LHzMsRbbexeZMJ3U2D5zCQ2qGye5X7",
  "key29": "3PNZgD8WaemSEFj8psKwWmdozgGfJypkKpvsziJ8MgBJTyNyeokaYfNgunGMdvtxnX79WVgqBAxsta9dinnMCKJK",
  "key30": "5ZK61B3dCJ4FYqmw2Y9ZW6z5TNzAmcyDb9gfJGSA4YJWD93RGC2AWsrmMS1v7ewaAPJr76VVKYU5VSDPNNshFaiN",
  "key31": "2bC1kNFdfyWMbm4zT1YsWJ8YSbkybArRBMSnboFkjCANUZNUPdsrsQC3RC7kP3fwAKAR5xZ3JK7rf2eP25JuEx67"
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
