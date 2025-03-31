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
    "1yuAD96J9cLYjGs7XrGE8xpL19a6DpQhhpLWBe22wUDJb7pkEqwugTyU1iVim1TwxLmZBVKdWPES9RqBXowmtG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vq1jP4FRNhHLMcT64dGwU1G6hSXfd31XUCnBYyDXd97mthXUgsKWRmmfdA6iMLKt9Yrbf2nv9DVMMEYry2xPRuT",
  "key1": "2BPqRSP8rGJAxagFeSKXLgEvtxedUhVjbRyBmAyvQx9LnQPAYophRMfzTJWW2bp2ZA8z5BmNrg8BUPSfVJPDzgBW",
  "key2": "2azLXDWfogQTz7Hm96p4EUPBg8v3TXdWhuGSji3nkV4Gg4Ck1iFpzdTM4T4pMNKK8MLaFyMfGKTpA2tm5LZAKPoN",
  "key3": "2CKN8GzNPTy3vwL1gUqFi4GtLqg8ReRruLicUMLZni2N25ZphRQFpyqbFVBxujR7pRAesD6EX2cqJ3kwhmHSqaqL",
  "key4": "3WpLcbRNZLumDtep6RYwmmhZM8HHocdZohHVHFgKyFbpSqp1sGCchakNkvJzzMRqWhSa8eA4rk2Leho7jnTrXNBy",
  "key5": "N5cwxqGKLmk8CNhHPHVEv8fx4rqGySfzECF1A1iseFYLk31dARtw3PC86XWNCpaCHQp65QL6Nr78b9SC76VypWZ",
  "key6": "3qXBaV3qQTS1tPLs6JzkPg61jwYu7Mfh5F48Lq38NMDsf7AwM1GRkNJgQnShXwnJ8BfpyNTTU5jwQDTcDcj9Hg8s",
  "key7": "3F553ZwprYRemsYZ8cQ45GoWGwVXCxKbmUPA6h7Vf8fckmJuqMaDKkdXmwKbZZoUDd1yJpUfoi3QJkXgJi5o2ViY",
  "key8": "3kQ4mTREfkLyFz4utNHKGoWt1UgZWpZ9cAYTgYJqJ5Gkh7THNq4Ua44oYiYaQmjzTrxDB5mp1YtDiEQh352b3eE9",
  "key9": "3Th6PcB9gmdpPaUWm8LbPggphvv5eKQmdKc8xNyeWjboNYXKnJyvXM6FZPk9fGs1htZ3Ub7GHDKBEUDr1cakGoxG",
  "key10": "3LWpUqSt96Fg8MhQTvSi3iogyHBF9tVjzkFgD8qxWtKKDXS4eQ4uuJTachYJZ29VynjLAPRZzV9CRTmPrbSrWUmv",
  "key11": "31FGbf7E7vNWuvrbwA8FnvCaoma4Qod984drUBe1z35HyAP1456fQUpYwRHNvFydMqLVA2ayafH6kmi3P3sG2p85",
  "key12": "37co6H52xxUYUzdb5rNJXen6FYuMEb7xe44iFrL2xMxuN8BZcZbRyQtjWt57EeERpzmdZqe3uZsVbRGDYsKogw2x",
  "key13": "QKtnuJhWnbLNiBx7NTMEmqCS7Pxumh78bAxYz424Eh2fcXzQs3udQfwXnNmZNPDx5yhnUReNo85jUgtaULDZLQB",
  "key14": "4ogKirRzZRhfoDVHrgrwDJvW1N7ry7HsAXUdBthDqUiUWMjd5qaX7GK6pys1nKUVKLngiP1azdpF4hyWo3W2oNRG",
  "key15": "4YG3WJsjj2U29LAtuzV3ebUe7U5Mxph1oFLyvzoxUKkE8L5uheBPRqKhZzkm1KVJeiFCKp1DAfYgVbcrqVbofmCn",
  "key16": "23pE4S7ZTLjwcnwfNXpGWmTDEAZJrhbU4X8osKgGro2NSZe5icFmLQ4Eiai5a1nAsaoMfSVrGvuRXvJbV63mnUca",
  "key17": "2JXaufd9dD5cCiY5bESdqz7x99j8GyWY9PEae2FyzKPeezwreCFH5Jtm9pAk6ntL7j4aVbNgNe1wAtrNpmfkGZBm",
  "key18": "2DjshudHzg8ra71HP1px1yks9hQLA6WboQzcFA6DWbhcB79k5D2W6qw97ChPfhL9RCXLDUinefj2rTehbTy7hawH",
  "key19": "23eBQkhfXezJoUFCFvNR1MfgYh9WpShsz2yiLXVuiR2gvFkaseRCfxsKM2ksDBL1RiJL5bhmK42QVXy4oZfRypnR",
  "key20": "71G9HaC3V1nDnXSq1eXNNpCcLtfWNUqTrziF14bBf23q1J91XhwtJmjZZ23U8Su2MgyzhymWKtSy82eL6Y2YKXF",
  "key21": "643K7EPQLcwf2f3TGA1AeaiWYeBZX9Vzt3Tm8mX9LUsPL5jKRCuLhS7HNA7xTsydkjyZTMhzPei3Sobs9MQBtwNg",
  "key22": "3WudJUXMRACzdSVuNuoWTAKKzuaZ7gzVfDdHde9Cjv3pc8hEvGqbmUUCDpgTX1oZLhm5Pq4ykmJshP4CCv5g2DYi",
  "key23": "5BV5Gsk2B7YnyK4KhU3XPD2sXaZD6vgtnLM5fq2Va2rtxBXT1sQE1yj9egaUs1USyy1xw7t68ViNA9K9ushtLrax",
  "key24": "5DdeycbWRxE9MTxgr2Jx46UvTQGHSZSttKoh9u8dc7odDUKa1brnZ4pmfDpxvN9bbe4uZJrnBg2V8icnfa17CxzQ",
  "key25": "5xDUAmnnGPwjMS6QjW4xxC8SHtDKhwfcGJQFJBofpoL155d2Qj8yTY8N6TxF6LyMqJ27tRS8fQvweSeJhYuqfXq9",
  "key26": "5FX3QNJ7j9S5PGCQWqLBdNYR1V51uqTaU9AMDfDur5KRarrNkigYVkhEMZYEAdmMg6cQzGu1EmZDm4uR5BoUQ8VN",
  "key27": "2KoRYB3bVJB9pGCe4QRRgexeXaS1pf4fWcovRN533ZmvmzRyngPceypXZyDnSMxiQzWBZP2GsvuhogJE73aMsN8n",
  "key28": "5FTED8yhzM6kEDQvf4Hj1tL3J26ukjy75VFY2zkQAujhP5Ec53dnMPDhKjeGuiz3azU7mpzwJUJTKq6EZhsFD2Y3",
  "key29": "28vETjiRweSyypxnkVvtLe64oTuJphMQDaQxviswyeuhuFMyXxuzjFbbbrZuHo6ZWz17xcND7bV8D47GJC4nEpuW",
  "key30": "2XzVxCDdeNRqdFqCzMnmCg5jVyKf36WrUMUoEjZvNzy6hS6m54pGjFuuTJxLZszoJRvQJSyXrUYJCxrD1SH9PfeX",
  "key31": "E9rfL6VcnnETfosYKammfxH3ivEUDMfPoJiXZiZevnresb6QKnzpG4p4pBbrEnVVX7iR65f3CKqVuyZ6Pdg3AJy",
  "key32": "5RkQMxS7yuTX4dBBaj7tMJTNCmCHvprCKSQnLDMhBH7kEk8u83DGVZEghvF8MN4xbG6PV52m1B7211BA4niRY24h",
  "key33": "3tW1JNbD7UG9sBafHLB1qKv6w6kLkLexfiMfmok9zrvzSyE74vh7c1on4CTNCFTpBdQQCigoA4f2RAJ95rbECJGt",
  "key34": "3ySwsGSwbjiXs3tsFvDcqqiYxZo25toc4SQsoqqYe6w2YaK6BtKZRSAaWswgNnWqd6Zi9sDr4f5Yp3cafF6rNGns",
  "key35": "3CyBHc3f5ReMZtkDmXTBPZY3UkejLyV537zd3DX3u6HZ9chwNgUDmLQWYpRGAChRTkhFUdtGdwxiRDzEf4CcZPsn",
  "key36": "6DkPJawDMtcyMvt9UNTzAMjx6Z357VMHABehcr32b7d58QkTPcgfLAcZjXyEmucXiyXBBHeP1zNmiUxFuVM7FTN",
  "key37": "2f9hYcEZdUqw5DYBYT13nC56bXHupoNbK72C49BmntCGws1D2RX7jzctfnMG1gKAmHkAGWAwSWknx5eGu2WvvRk9",
  "key38": "X7RG2KSPErVLY9zUPTQb7JD6o1m9VDvfejM1tz51Htq5qaBi73rWa7xr8qa1Sw8WhxbW4hQoAUYaMihGTmibMmj",
  "key39": "2FAH8CDcTQSekDmufL268VLHuzsyGtB9AeVCfg4Y61ETyraA11GUdUVjwobgT8YCw2CTAA5NbzsiyE4HoBEZCk9s",
  "key40": "3jyH9GfZGQqYs2Jxwyc4R3P4Y9J72XW6BYrkDnYESa42Mh5JjDCXFuZaPYskiPA2bHhZyVeJBeGdiCK2TbdXB8ZA",
  "key41": "tyemv1oumFiSNVDCWAXrqE9M4mNamwvgUQHCEugYbUY5zbRmdyVWDvxEjKtXNH3yHEwA6occ5biB68X5W5QWZy7",
  "key42": "4ukDCKqZ6UgprGBDuUzZrXYUqBbaQYtYVw17wv5YZ7NFSwQYCLWgjG157pSaiNCzDbfohz5LR78stWUo9X4fDh1i",
  "key43": "e3ipRmWHLXX2sgzf5SN8X2e774MMzBffkK728DNzbfuC6ZccP9W8fES5UtD55wTWg8zapRGQMA6iiDLcZ4tFqVa",
  "key44": "xTUNazeD5trjSzShw69yq3c7Pq8AttJZdcnWWCsWkPY3TarZjiZnMxACrvvz3K8rpmTHeCKQQXFNEuc9VTWHB8y",
  "key45": "39rr8xKNzqdMRXGQcE6JMdy5Bu8vqt6UWAMUtd7CDKTdsKSnepuUepNnpENHQZrp8Xpb1KdYtAbJvrvNCDriqx9A",
  "key46": "5HDz5PMXrqbL4rq399qTH7ZT8xKT5LAnB4yv1Hu2KhFZUXZ1r47aEXfAtdRyn64U5NYGVQrh2ErqsiNzuuKcNFFL",
  "key47": "5n8fgWmpLSsKNRR9GMTCuVd7QxKZthxSrHLQxAJmUYkFq21tqJCDZGUJLZ5kuckuuV1nTRq1VCo9z24kUxy7P6E4",
  "key48": "3owS1Cuyv3hDu8MpuSkg2Q1v4Z73z45aEsyEDdVQPhad4mRa7YLay4nCcExd2Ce6fADqgsXnhCmiRZyzcDBUEhDb"
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
