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
    "57tQyoNj5fvh2LRFbPUhWUkaaTEfdMkB2Apkpoap6zHbDk2PyoHL6VpvwCBjpQRVg8rmy7SN73MP1FS3bBy5vEQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wbG9jQCdBa8Xi6zHv2y6hXGrx848xqAqiu3csnKbTXG9xkShrLr1nJzxjgtRNcX8tGEq4C25hJeT1b29ffBGASm",
  "key1": "22f81SoUfR2CxsjhVnMi61Zw7aCWyb6yxQELTmc1adJnE6nrPyajLBDh6fo8KPLf9r8X8NTBcAMDys9c9AzEdqnL",
  "key2": "5EayXVwxA6oRs1yo485XK31HPeZajNfqrq3mttXbMUy7LaNEkwUAwicFDxXHfWxMDyhxT6bgidPHTYtGwTfa7rHt",
  "key3": "BKxjzu1X7eYSu2KjgzncYDzm5NHakwBdCoiBSzxisGVHpmyULX3QCkHyM5Xuz6Eed1eHWSkSvrRbuxJ8zRtQPa9",
  "key4": "4ZMqHuAtzsWriQcxBzN8xQ69jQNp74m2ZCNi7HRHrzAH88dUC4Ff7q5tYkPtXSrBCbwVuijWK4oedJu3rSzv6RrB",
  "key5": "2myRwvUgoF4zSH13j11m4egVxY4MKVTMsWNjvFHuokpzPFMM5wgCXKVjhNvZrUaZzhsasb3ToYpMfwX9uGSrANzC",
  "key6": "5XZoTbKovnM88tgPW7aAS95C8CD5u6WkiTP2XP57AyxzU81zUCXZc8PRUoEw5pqXyMyYDB6rcmHR6A8BpsiLETj7",
  "key7": "MjXsCRBqy9Zi21BXB2Pq7AJYAAfU5JzmMsAyJY9UHZd5cMqsG2oGnSJLjpUAKyYivY6DAGLF7CzsM96dW6s52eS",
  "key8": "2f3oTWmYqmsZHKWmmNbQgj5wEkhAaXJcmbJpNGceicAuLTTenSFj1WrfgGNvpM3YRvRaP7rFdDRP2gNCppyaBTot",
  "key9": "4Hy5GQ9mNhMtFYxb2ayKv7xnLYqdrcCSQzNyAb728mNcLAsN8a2MGwuh4qv3DBJdQKLV74pX6TVdEmez5BqyqwKp",
  "key10": "48RCDLBRf2zerQfMGweLMxdSciJvmzhnmb7RhcDHV6xNgaXRkBkAGQRRGTzbisEhAJQ56iwUcSbtTgcdjehpFLYD",
  "key11": "2LRFaDAPL87JmxSfR1cWajNzuGNphKmNVFYbRkjVtLPHh9trrUsKBkc2zjmmTSd56yodzJ9WRaenT4KMW1v7hmaw",
  "key12": "4UucaV83rL3kXRfsAEcTz7vRqaBJSMgbkN2K18ERtC49z3LvNout4cPvdhnjuXDoKRsMqtUQTmwrNSUrHNxSYadT",
  "key13": "3oigEWFcbYVFtkHSvBJUCkuwehjWDZDxDiJxFahBZ3A536zWJ9SMCLk2YWz5FACKL4tzVE4pDhmTHyGyadsQ1Msr",
  "key14": "299Ne9bRfZFKBoBLKQDZRRvkWVEPW5Jv3mvByj37mGDBUmWcECoCQNuTNPwZTjwZqsategLfWBsYhV8BDVWVhMey",
  "key15": "4hjVgwQQFLSyHcmmr1tSH4QPbe8p4M7NVV7PVbof6uPWogo8r9dPuXdCYkR2r2v88XXz5tCBAuX5yRkMdKipRgsc",
  "key16": "54qQgy4zbSgF9dTdcHfdnX7Vbrb1UCfUEj7v7YZrrmYPpBXJYAUZGyJVJZj6WMTSifmHp6FKhbNShy8jUxB8d17U",
  "key17": "26nmG2CbC3jaVpx4vYhavyFJUpD3ZizmQK69PYvApAVsqpfbTFQWCnp6Hh9BczbgPVw6z7NQDcTN3vs3Gu5urPYu",
  "key18": "2cLf1k4szEPL7EPkzpFbBK4CiCG6fKA91bwTeVAhwqro6GKxyF65RW632XEF2t8uiTukvhNAeoMG4kWLmV9rUuxW",
  "key19": "39CJGZRgrGrHHjGxahXbcijke6dZMh7kffxAS5GSRi1DmYXcFWAvJe4J5dJckvrbLxms1kuoEijpY7UE5DiB58SK",
  "key20": "5EvxCz8m5EnvpDEaBUxWyykzBBCQiHMbMQTofdE9xi7HSpziX6zsqKBmotcsKyxZ9XCShneY5jQ8hNVJVx8uNMXU",
  "key21": "2zZYoXL2nP5ECNussH8Rkv6p5HQob9EkgkthjPXA7xZvGXwwoyQsKgfRuqkjLrNL3yfBQ4BFd5K4ftjZbDjGXZdE",
  "key22": "2GnFrgWf7CWWLB5sJtDZARqnuHHf86Zyy4cLFjxkfR3GsdBwy9MXM4SritSZe2jkW4aAJXhsNvbcVdSCRVofe5j",
  "key23": "67d1dEFwZkUtuXe3DbTsXtxwpHCSW3A1CMcjeGzD514wxPkinkLpN9DSV5EotUbaLisLb6Vx3dsRRoJ8pNsQ4uCZ",
  "key24": "3qM6VmEJdyAPhpAG2dLaJqwReh1aeWWiTaDHT2m9B66bpdQsyoj4jLFZVdetSz1zDDB2iae33MVpNjbdXzgsTxnj",
  "key25": "5bkvyjjUgGBBqqPYxCpxFjerhaA5brDCWAf2YdHUt4qTaXeMahEBkdmezpeKpZWsaMRjMBBeozLXvtk8Cnmysfbk",
  "key26": "4XJ6c8CpQSMRJLDHzvvYaLnTvMbWrFBr7aFvPQLLH8PRuYKcqj2sJ2cs5bVzfB6N2fnnE3EYQo6QVgdnCSVsp5xx",
  "key27": "5w4qUoWyMYEvXKfGzzgmvckePGrA9Ga61PRs4pTwZUJ6tkdufurDckHVYs3puLyC4C9psnS7kcDEivMgN2LgJ9bP",
  "key28": "m1Gi5gZGX5HkqxmUcQnagYpHJxLS66VTdtjv6arNWgicfb49LxMM9dDqVRPbbAEu3MoX6PGpZgL3xX8tUWVYqHm",
  "key29": "4ZeNRL5o3Za5P9hhWo6izFdZusJPT3winBYww1TCYSFCG3YcJHBgqauheswpzsqU7QHQQqmgTv64epXReDL3FFxj",
  "key30": "34LZm5GosS8JDN3x9ACyb25zhesUSR2YUhjTg9gf3ArWUsnmDE6MBZBiDtwSaWJXe4xsVL2s1mjMuHbWhzWwcknr",
  "key31": "2q2s1WnR4rDo7kh8AiLPbVgduuaoBUPQTznAGxhjWfVAgw7rAcT9K6D2xs2gchcPRag3szhX9cgJRagJqcgNZDNe",
  "key32": "5YKFmspzoCHbUxDg8KxfjHA1whrVCJnCdDW2a6PJ5XXN6y6HjicNe5cwcENzYcc4Hth6zh25Y8uANVTYzJSRaYjG"
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
