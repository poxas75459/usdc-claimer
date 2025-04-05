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
    "1Zjq1H1Bxtp32tBKyD1CaWJQFg6NJqMGwvqBcNaxY8M1bLvnoXLXL9SRnzZ8wpew7bTdk1ZW3tYfDpbLxTdEnnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wSBpYt6PxC1A8hy2tyCT24XQn1FMUTp4G7nctNgTBvHvyNup9QhD6vBDpU3etQU8s25GZbazTdfp83gJhLvJ92D",
  "key1": "5gLibdDchZQySeb2LNC9ueDkzrKJoiFfmeCTMydVTHh9WfW4HV17fnyB6vtFaRRYNu3HgTTUsdPuCbfiULpoquAt",
  "key2": "4seRo5GNFenenEyKHYiiEKty4WpRNY89fYjVf7bcyq5SBJUaf3w7vz5PizV4K8LNTCzhR1vKknyHcHzHLuhdwGxc",
  "key3": "5Rujyvm94xvnpjZr7BGSUDiCDRRwjYWiek3AfkqRAYHAUuHuZ5bmaJ3Zb8U3Hrgun5yRMxHv3h4bMeRbkbKrigWY",
  "key4": "5PMjJkaGZexfiEEr9MRKzfjdFnCm2ygS2hUTAAHAHjHm83jBTQoEQYpJ7VWD3rjrxWRbkbP3eCRaG9J7gURKsCtg",
  "key5": "3AVKtRKonciwGenvmNCL9Rk1Qkxebr9GYcnaHnixPwgykZLB4ogK9JLTzNeR4RvyoQdYkvcxuszvq4gpn2Ak6cvw",
  "key6": "4aMubfNvAibTGc1pSQf9inTxPN3nazZ1jw385h6JzLKZnBBc6x1nAAqKCuhbBGXmrgvgXAQtuM3ZYEssagC2aLB3",
  "key7": "4P8CG52dxsU8JU7MSEdDL6kp1VPWYN6MCiTGhpcnBrGqtiNFaRAn9cAyQQkYtVE3UXN8GDmogJrixqJqu5WErojL",
  "key8": "8N1xrskoMzXj8hpsqYwkSMTi9DDYHNC9YkEVtFP249oKZ3wgXTSWXJ8tpHuEeuFCSFPuDCfVnizYHMgLMNXAqvb",
  "key9": "29HApNVM4SKD21MA1RCqCPkqjUMtEtnxupW1z8XuXaETLLqxACh7XvD8PLCk99THsFR5bVnBiCUpoBaESFhjHAHT",
  "key10": "47Vb2RMKfoxLBj3fRjrS5n2CCut431pPcTRDUHPEJnwBh2sDAKLBfqu64kGDxaE7C6m7Gjm79bXTnYGMdgAv2PZE",
  "key11": "2fdHfLS9iaLVK3CaEJ9WACWFA32iELpYCJogRqLvc46G8yqTxiSCSGDjUWz4JDBeiBepV1aGsivvxnESmvg7A7zH",
  "key12": "3HoQqhE3BxQNbidtwKKdm9QvU9XjQcNZCu73UKDaQ3EL9aEyaCmwx4e58pgT9qyvUha7kwoCBMXx2SCFA7dfxGW",
  "key13": "3NXcGobau1uFYJp5xtbhEjQtqXspK93UoLmFbeZtcXNbbyJ53K1f8vpsQntEB4qunsoSHTdhdooKD6Y9c1XjxYJE",
  "key14": "XfUhr1RVUbsnkJufr9H9tadChHkDcKrsc9rcFu4UYCVLx8GxaErjwJiPxPbEvtzTEUzbcRS1e6M4y5ozeZCuqWR",
  "key15": "4aoMpLZZSCAmTzNEVeunfbCPs3VfmP2fx3oTJXce4k8QwFxjFMWLfiagEN95N5vSLx4TU4jxrcy5fGNoTnVouLNe",
  "key16": "5Yo5ZWWFQ4k7FUh2Him5i7XU2ojKiQ1AkFdwnRZtUFRaLnC8snR2azjADviNcM3yBDszhVdT7ScbHpfMKH1B4zHp",
  "key17": "4t7b8FR2NBVgtLkbQ6Q9CHWynNg7gqJeEKZ2RMb8mEEjoDgxTEWKh8jPQwjb6P1t2tAv8wCKAcYqkRpJc9uhH1bZ",
  "key18": "ns48diXXZqiKpoC4FMHtFi3vxPTamuXZa8SpNZcBRLnW5moLMvAzzoMP7mqFmwas98zP96GdepLcziuZxoW8oRN",
  "key19": "4pETQB7rwHkbFcKfrKhQ4brSAAm1M11RMg587XJjkBjmuTQtrHFNAcMuxcH6EW8PgDXup8Kaew3ASc8yX33K2VVo",
  "key20": "2VNCW2ctDgkfJuoFEfn6wWwGmudodc6LgDZknjkuERHPJ5qCNcq7TYkVzeagDtZbo4yPcvUJc4Q3aSvimsL7NQsq",
  "key21": "2BkcFRLVXz7YUsV4V5fsJyrzTCL9iVvXWnLFV3XD1NAxt2yVM3CmYJppD3cx74arpjnEPSTs1zXLbBk5CXZCVysa",
  "key22": "4e7BUuvKcL44DUWPxf316Q4BfKvgqhMA6kSKGAKZ1Ffv4DTa6aC9ChpEaS7CcXHUKPdx4BALExBgroWPjbTeErTS",
  "key23": "3ZdqVzEhijUEPHVDRB8zaka5zWue81DDXwDa1KRt9mgcX7Af4ikXYb4jdWF88kUs5LMZjrw1uX7X8ZJiMCcJNvjD",
  "key24": "4z6ynbkP4Ca2Z2Wxcbrhg82eQBWA7S96Y872VuthGt4ZffYfCkU7Erdbsfs9DK5BXk6UDdNxF4tXpe7LfYbgsGtC",
  "key25": "3ppMJM5oUSHEjSyM8tcDDpuMLePWJW263oG3Q1X2JSdrccfEf4bhVogDi6VkdG9qtirq24rNduZPb5dnPERgV5Dv",
  "key26": "dRge1r1D1MGRW5a5HbZ3yoGBqPm42mPnAdKHiQNPr2EDMfZwZ7pGKadNYgDL5NAyk8AoG7VHijV3ZgnYopq3FEV",
  "key27": "3z16h8kEqv6Dwtn1BaAUKBp5w3kgN4o91WHMpmFvwvwLo2FdW3vFmoMTgqv2jKzbHDp2JuL7M2nfPNvMXjR8r6ty",
  "key28": "3mP1zqq4LhHtr54VaQF1nZBkJsj3B6A5ereQqhCvfnBrcPg9kCfQ2iaz1PA3ubWxfxaKAusbM89Un4ho3bjqz2q8",
  "key29": "5XXdAJTeGRDB7FgUWyxaoqun7Tv1pLvkmxp5g42erhCh2EWuMVwSKgELYBV7aeqeU9ME5jCxcciCi7SFFTQ1rW7w",
  "key30": "YmKo8HApjRtXMQ2dcWrRDjTBj4ANXDMQHczuQmt5zSsZ9Q8u9sN4FrX6XERx2j1Vf3smfmcnUiWtgByPNujXfRu",
  "key31": "5YACpmAhNYT9kebBKXJSwooZ6MJShuzZhKmRMosEpcBe2zHAWBMBoehCeiJYBduJMva3AjZQZALhegprzt8G7tLb",
  "key32": "3YnudtNBHt2xwaQtZpMPqhggcmY6zdzQKbsGhjZLDRETgSFeXqM8PDMU34F1B7ZJU8VViQW81cA3sVZ76Zm8KepX",
  "key33": "4JBaWkX1AP17nH4f9wEVPh1oXQm3uvccm3PtxFbeo1rRB2rpEt3T2L7SbWbRYib29sdsmh2f2xCVqcAFKtPD6MrR",
  "key34": "C5BgL3e6Pkj5bws7oFqZTRSSC6wLp3fQvBCuZsEaUX9qUyuNkVNJ1RJjBhMohv8o2pgTZWhbKAxoQE4KMnGU2Jw",
  "key35": "2jbMSWpYvKg5XWvwi4WJrJZcXz5xVRh6vA69oDZLw6yN3SyUiwcx5ytMinYK2NacrT21CGCjfaDETi9tzWEBxiNb",
  "key36": "3kDomK3KQx3fwytCNztuivJqb8FuSTYfGimf69WNshshLDGLXRNC8Zdsb1yyP8aVErdSu6KVUUMinkfjiVo1p8Hd",
  "key37": "2ee3dGM9N1pFw43jY5dck4vABvC3bxwn1ZUXsbrGrkgupHtdmg5RR7Z3fjAv6bTTmnfFQVBqKQRNAdahGRPqqAc9",
  "key38": "4Ujtz2ECKe4XSvwCt8bNYKzmNvwdJwtTXnhzeF6iAjS7UaDv59PNWdq2nK32ih895zwopxaJTyuHVUeqidj8DH8Z",
  "key39": "3TvoJUeFfQagwRsxBwTJ5ivFBhwTeeEG9yeozBVwgNwmiHqQYeeqzYeWpCHmb7cfRDxkYQ59PiDFvRbLuY9Z5eZW",
  "key40": "3ucFZd7mEa34WXJYF8ED5v8sRvZkiqT3ExArEhQ8gF3bSxDa175VFsYCBJrDQEbnPg3EptwKsWGcT199jcpiFvxu",
  "key41": "5Gxs4gEJHzusMkR93Vwb9P8Wu9t7wfr4ujbNnZm6V58AVmGRbxGQLHpPgYXhjGdvG3p97HynEPzVeFttKqzr3CjH",
  "key42": "4ChjspawjiGZcrFukGkDLWcjUcSQeYREQ2hezpJA51j5ckWtWBVD3sDJsxabUKc4vJxNkrFMEnU94CQeiuRfGpU",
  "key43": "mvt6N3FLYXVUeZZ6gzW4J8kxXu1VvmEu13nHL6JS9LtSxvHV3HRWXreYPR4n525QUZVyK2KvPYYEdwg53eWwnFC",
  "key44": "3n6oy5rHC591aV2ufRPKkxkJkdZ2v1Qn76hJDxrZ87dd7nztdFW8rFUxGNMRyvGH3Hiz6D2EWNhErPTq6WJQ4h4y",
  "key45": "5ntLLyc8sfW1wMRqUvUNzpGk8FpwVRZmHXsnf6rWGcd9JPVd8KyoWsQuYdoh3vffKk6mFSoQHZnQaYXwEXw9XfK8",
  "key46": "1243FQAcmo4hCTSi7gxmRoks63HSaSriPQCJ22FJffFfzCHfXocdibsJbrnsauZxW29gwQUEHf7ZwYnsJPvZKojg",
  "key47": "W4nRYLqmeSt8SW9oiRxsAMB1qX2Gb5C1oV4M8MDjgs4Nr3JMZQG2GzK4fCTAPWbFiDsNFNFtNsp63JBfnotrPRB"
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
