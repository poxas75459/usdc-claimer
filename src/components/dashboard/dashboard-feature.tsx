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
    "4TSg66mFs8wtk2CRnSUG7GzNSAQRKMCpTHmVhTxmHaiLCoDzpxp5jTWPF6L36gPgKbS28Aqc7LZ9rzzNAcrL2bKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YWj3QA7nKCGCU59igyNPTv1WA3SRsw1FbSe9oLrSuiRzoVhkbXCnohsx4wYfZGUsZjsasmF2V6K5txxMVFfCDX2",
  "key1": "3KCNMgESqya6dqw2mDWTJvncytuVTjcgY3qxjoJgxyUBubrs6rr6xentABm2D7vvgcfHXu1TN5xw19TncjZ1pB5E",
  "key2": "4bZPowb7Kw4seU2CXRt7hXPJKiEXuBKvaMAd2kGXXmCGoBSfeH6zJEvYVfkXXfAs3hAZAtKvNYAdrzTxxdJ2CX6u",
  "key3": "M1ZXxDXkHojLqvSngHv8f3oNgoGmZLFF3zeVa8qEHYUjFwWzzRHV63rurrnK1pHZuFLzfMinCMyijrZeVfQHUHK",
  "key4": "2AJgugqM8VpsCqYsTJajKKx3UCmytou3vvAP9GHZzb8hctiHm5fhUvNWAuiaN5NSKxJUiQCpho54dagZP6RqkkjG",
  "key5": "4ujKbJrV5tMkU5TZqZJk1WDuzKMxqmNHtzFmSKRfVmVTpmXVyTFEQHgAbqswfkmM4CZQM1uwt4rv5tzZS281Dyz9",
  "key6": "5UqLLXyTMvLMQNk98F5vP4y1CJKoUUHxnZSjToMgfZnc4rZB1P49uGPZRPwgnzZ5WN6NczWCK1DxkJHzfyJrho5i",
  "key7": "5ayKoveBxjeGeRo72Lj7BkEFefLC4iUX3axHRRLE94s62JvGFKzcFHBJyHRHRzP9JeaajX2f59zrNBXjHCRPVBTy",
  "key8": "3KRZQSeTAaXHmyqT8rak9d13Ud6CwYgy4rHFgm58N3RLSUHfow58B452ANw55Y5e9QftfdnLJJVJ2Awypo8bT9uS",
  "key9": "FpDwZkpMZ9RUYUpukf4C4WrcFuwKoqhuxbNdWUfNYVGeTZrG1vz8BQ7nNmRKoXiNJapkK8BmoSrZkA9KjPnL2B9",
  "key10": "7gV2buNCKkYLdRKGUBzX613wZuSBJzBBsetdisyyKysFkd3kwfEgZE5sJY8gt65sStnuFp7TSQJhCS3dVxJi8xv",
  "key11": "2wQd7P3z2efDGjcgNynpfpXNvVevhwYMELqtruQTADswqcZJ4hYk5ZaXDXfhbBN1qty7gS8L1vEhvfiRrMuR798k",
  "key12": "4hWDW6ivNsZhiXHqawH3J6rZXBMcRnnk1bYLQLpYxdiPExepqDgDrV3zJ9YhPL68nWRJ8mQcx9AznauJtk39g1XQ",
  "key13": "4W6Coez1Vig3HQXzFBcFH1wzT3jSJkYwTUp3CeRsPQAPMgkg3GTKnyMm2JfvoVak5KFNR6z1y7vs6XmkwMuBmX9x",
  "key14": "24vXsN9XsVaQ4q61r7spF1NKMKXTiG9UQtXzU6pL6qMtcvWGpSYQxSxiE8Ypzorgd8kRoRNrNTNVy1izooKNnFdN",
  "key15": "5trp8K3ZA3Zn6CJ1WGc9XEAQqzRHvU4YYYhvD4g4rBiUuZrgJpwgsj8xGZju96RW7uzVvoaL31aM1L9uffMHxQWD",
  "key16": "34UeSTXejgsnsNyZPC2ipir8RUuguaRjcUF6nzvbsMxTajp9VT1AcxBjop9HPxWTeFxU11mkUS8cTtmPmU3hCJLv",
  "key17": "4h3CRF9QYE26XQoCdYrRaUcbrvJ3pNUa4ecCKDxtkmdLArpTRHpHhVA3p7ZFDtg8414G4A7nbfB1RKVJDk8L5F1G",
  "key18": "HpdrW3YEkbSLiRR1yZ3ayp1mLYLQaafPEYUQqgNKnEJhqpPwKKgHSGxBgXVaJUNmHcowvaqieQLhnVPpGAXkPgc",
  "key19": "47Yp8d4wDsG3eHH7yt6XonjCG3F8JSbBYohQsQuvnRM7bKraSo2qNBUt7y2QmCGyJ4u9sgfdDmMm2AaQZ2kmijWf",
  "key20": "4stp62vU1zmQaiaGVzsygnPfWijeDgG8Bnqkoh6ZKMn5cgYCPmuwQ2bhyg6r7g79ARuWWyGX1PiNohULwfC8U8CZ",
  "key21": "RpXzEUMa1pCokdKBZJWL6qq6WQv6BZuLZhSzuKug4XfoyPLWhidvn78fDXAAop5X8jb4EsMgSVBia5xgyvroWht",
  "key22": "59JQMumQqju4gqGkJhEkADL1gH2ytUkdLrBvJzdTHpC1iHoYByMuvnx4dhKoswxTS4Er9UjSSFBr6G8HCnL1pYea",
  "key23": "3BtNjNnVPA5hhWYzvQskQ4uRkYmeHo43yuReMQW4JGZusmL36FCGqWKAqVDWg3JmjZSUXhGUFHDoSKbEc69hLVMN",
  "key24": "2kE13FhaDQsR7qMqdFFNzJAEcGUqQ4Xh9NiaPNrFvSvxhsAqrFruk1CdMrWoTtXvVjeyLPuMpbmdKytgVw4jw6eJ",
  "key25": "3fP1BiEbw6NKW1bvrvrDq35nzpiQRp3kL4PuBc5ju6wPVKhgd6TiUNgFwVpn2crTSh3Xhsvyv7poijUBaNz9Fksf",
  "key26": "x9cBo1rnLvUC8fLZL4xfA4QpZoLiqJGCgoGLAJbWaQQWZKv6zQY5Fj16Who2EexbskxKDFZ7Y3QmBjA5hct2rja",
  "key27": "4Tccaj6V6d5QhRcBYFsyCfzHMEQ5AXdVg9wb5H72rZ12HQEmHsjy5PfHoGyqqsifSbkEU5X91YFdHUXXgD5C24hX",
  "key28": "4bFqoTARpEJ6yx9mUevCrVFfqoBR8dp35nNRYUoLdE3GYkBDHnVFn1aBxpD2eMneTq1HULVsWRX6zd5GCjPwYYEd",
  "key29": "4dfKaMC9fUCzoiajgQ1uXh9te1KSiNjA8xUBCkv9txR5o6Ynqof9WhuHfVtfP8SPd6ZSdBbC6bYBFi9LwPZzjELr",
  "key30": "2xeFHwUF7prw3kQAbMrmFNPhcnvnX6wgXqtje5ZJqAZuqAfLJw39m6cXgJ2QzyssvDTaiCJ2u2GSCQEhacSMH1V8",
  "key31": "26zsHmeo4UZsBX7Ke1ujFoeRjyw5QeRjMQQvo7DHkM2wuBoKHse9eUwKNfsafj4M45skovSoZfc3sDweyvXXJ82m",
  "key32": "2PJQMoPyJFyQMZRX7hn48vz2ft2ofPUZEPdV19nRrq1akVdvAe6KV1qrzd6wuvDTjrzUqiHHQVuATKNc9NRew4Jj",
  "key33": "3WQWdLxqbnE8QwbSdCpwf4oxaqKW1bLNyQDZ1DGJSaBUodVNCiUgyvctziEMrr2ZuYCfYZxqw4RLNuUHquth6KwV",
  "key34": "4dCkX9XxWAeJHXQ5K3kF54ghvCe4RDcAGthbJZG61FHZtCknU7f6Ccu1dPTFCePJX1suizjHo32pJEPMAiJrgHKN",
  "key35": "2ZoeCbCqsS1XrB813oUb5cvq7yF8SYVL7S9EmxttaZnY7VwALv3ySkNg37Drr4CLfpa8brVgvRvx1xqTSdpRbEMC",
  "key36": "2fQWgm7iEZLf7tMHDrm5xhG3TW5io3Gpyqb3crWGjF568pWHS858WxrBPYmNgnjy4uqVzZtN4EjLcYHnjT8isehe",
  "key37": "4jrKV8KU2TGUw9pF1UpowmrGL5MnuYWwqoxxusJ8QNkFf4jqzDdqHnjTGHT1WVgXpjffNF2yKM1YZVYJNh3Xiitp",
  "key38": "2SzJFdWB72cFSiwNodYR4GSsYV1CMGRXTw64sWcxspsi68wXTJF7HMhEFUkRf4WC39XKPgMQ83qFWkGArj6jFmv1",
  "key39": "4Zb27zUGH14Kq7honA4mkYKVrDsFnQbiLxWfmXP3e83MCRd7rfSbZ8NosdaBEXxRemrqZTb5vzXVNiVJmub5wCJp",
  "key40": "2wpS5PF6NM19enMaZZ87aARNasKC86AMkncBNd7octC4gRQ2BaoQAWfjQSCDuJeU1zSuFfg274QCTdDtaY8DUQBo",
  "key41": "Hij5jNjy45pcWEWmG1Rrfm1Yt16vrV4Jj1hpj7JistrB4JUsJBPKMpP7XFu4ktmJNJ71DuAo7ycnVdv2JXyhs8y",
  "key42": "47jdRspgfpsAmyCKk2azU49xEUzPqgQ1DLRwcwemN9XfjZh7ybpKXSMXLJSW5FWiDfJcu9Frr5JycJbhtmERVX1b",
  "key43": "59EYgMwCTFMkAZBNyq778G19pZvZNe5ezF8ByMd6mPUhj4unQ5VTyQKHXqH2i6CVxVmsiWsk4cPYN3wZPkgZfA8N"
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
