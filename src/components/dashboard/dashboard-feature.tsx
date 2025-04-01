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
    "2PQSZaAZ57yGwgRjfu3bqEL4pAfSJj52Sp9BwDpLiBM15Z8EZ9jmHYvMUdmuAUgYFyzVBvBMGiwiX8qGy51WbAsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27C1RXWhbnAVoWzLnHQQySqvZrFET2UF6wWBq6vCKu87v5Vju9zrxhfWFtw965qXJhY8Rg91XbnqQGJcm3ZDhHQu",
  "key1": "4wWBp1cLXuUVLCKi1wk6YcKKYZcs324AENUPJWWncTdLL17HAu4ewSdMzF6Gw6NrjpwCnYcxzcBMwvKd5m5LLgH9",
  "key2": "2refw2nbiHSEsAcZiP4PL2EbZqmz7H187EcYtZUxRwKY8tvFRYhyt2W4fBR9Y2qsVqjzBT6sWpaudbS4gbbDmUE",
  "key3": "23DE5xnyBwuazzH8RJjL9UM2KPpYP9bMA2x7rbYHzSYWGtpLwnbtgJ6B71RwBzWbAdURQfqAEChL9Wnpf18ck57E",
  "key4": "44vLXpw4qH5FPKtWkWsiywqPdqdXEPcqFqMmYbPuxLwiNkcUTPkc5UFEKWEF3soE6HggUnTEU9BHdxixtz5w7JGy",
  "key5": "22KvfPaRUMX1r8JT5hZbQ71oZuUuk4eAn14XGs6EgMiPVTLESLeXE7PGBT8c1E7R8J5HWH4ToC3mtQNG3EAmPo8G",
  "key6": "62BNE4jAciSst31yMQkkMsfzpyLtKbMbBiQaXqeP9waS2PTt5aBfSJHKcJjZ2yzcVnKziZwzuKPNaHSB8VuUtLtP",
  "key7": "9MWnG8cFpPwPKXBvJQD8v6HQmEUwJWm9HYyrtETFPdEVRxsUCdjepPE2AhqYm6DPxkxWvGRHoKq8s5sXoabA2cN",
  "key8": "4G3viYRUqBPLfHBjVhpMGBb65Q66mGptB6z4ZLMPtRHaWeAkca6uvG1KU3KetCwCjqYeYZznWvqFBbUdBquVdAec",
  "key9": "fDv91JzFd778M4jQQA2ooGCUXTq54hB4m7ijUeAbhq3S5LNHQUBJajVN2im86BUoCKTRMWkdeWex84AgVdh8z82",
  "key10": "3i1CmYcUfsjyGVppwqmRqgJ6hJUKwgxrFX1TqwGmh2o8tQbNHnM7cwQqrfgLPfEJoSfVKWLdzTq8L5pEHrF3SaMr",
  "key11": "3uAmGo7snFN2QXxhxK87AXbAU7254h4HuBhaGDU4wZ35EV2nPKhP8D4nKEzfxhiR7SnpXFSNLBV2mWRC85tMtcHP",
  "key12": "5UiJQwQYLakKwNPZTxmYCc87rSinXuCCkQJCLYr8rU4FfUihnKN3JqxYydVVFdRF9SLPQ1gGc1QQHyeqgiGz64ZQ",
  "key13": "2cMi9tRWa1q4ueawN1kmjq6BLvh7hp2rBEiM6PCr2BYDnoexJa8EruCN1eofzGpYBjiBf4aErMhiDj8JEpnXGMhU",
  "key14": "2BB2p3DiFa5cjVwnVAeyYcCSkwJ29iaE6zRPFY2k9EiAtMRWePSrAG19yzR4ScKseCKpHSWaL2Dqz9wqpLidVZyY",
  "key15": "YSxzcogKLLAjSPTJ96xdSgWdAjWRaqQPD1fhY9hgTorSfh8oZJDQNwcXcdaAoNQjMKBwe44GDxQMm42j9e5ASei",
  "key16": "2DaB1isZwkxMupe2Rb7F5vBn2A7Lnqzd5J2c5EjaU1fvY1deVdLCTaH2mBdtb4wHnDQmd1zBj1vfmxEUkTLT2wCD",
  "key17": "2yNWWNJZnx8Y8YyXa84dD4n3Fo4wNvpBW2R88c8c4HWoX55ATVc4XkXsXhK56Df7fD4Z9u67tZCoNtaCeFoAQT1P",
  "key18": "5P3kgX2uQoqXrpstyTHsQJRBuJdEjrtkfxVVr1CQsSBuhoCp2BG8WNbpUy9gh5fn8M37Krz6aoBQ8JWbPCm9RNTg",
  "key19": "5GnJsnPaNcmQv4QLSWy9ZaFEnFwEiAonty64xtPzBPDrZwJaCvJL2QCTy2vNrCHMp2QiJSffMntGMkNc8RmyRsrN",
  "key20": "5TWTVf4myjCJmVivz8ugHE4VLfYFeDiE5KgwV6bUDFw1iNGW1b72jCC6xaWTMKuLdbXWR6kXSmZrmgCKaQKpAdQw",
  "key21": "3ndNoMQ6NZPHwG9B2j9DK4iRbs9ZHRV7Zfiw7wRuGvJV5oq3VWCv2qXX3W6uJT8EnCR8hjo41UMPyyA8P9Tn3LLg",
  "key22": "2582ZMdi2xkXdAXHHj2BaZsUn3JWGfaEy8P9ozFqfKxC91o87PJYVBQZaVLXuNBZdWHWtpLp6oVLz28vVC2KBbhv",
  "key23": "3UUuCHBHRSqpd7ECvMu7NiyxSGMxUcPj4SZ5FjMhAr2FUnSg8nVsUxZaXn8xZbA3uTx7ynfN22JcFJwdFHR8moJc",
  "key24": "5dgtRgdAAt4bEg3iMDhoMUsXywYgm375u75hgFZPhNAzj5byRjMQQhzdRQ9qUUP5BAr8hHn8ot5uw5StVLnfxH9a",
  "key25": "3udgxZREFwqD5mwRz7Dj3gNHtJekR6SzWDwV4WAFJRjpGg8UgXrhuQpn6n2RaKrfxZNaRP3t2PtQZirmho4Jo7RA",
  "key26": "2owoarGHthVfPCWkQ3szAdZq68azRNfx8u33vn8xaoEtL4r6mPYC1hUeXuuc78c3RX6Nc4c3qRXfFZs3giND28bb",
  "key27": "2yA71kQriuxFK2WAaXeQLDNKiUeALhvMGwYTK1XY617DeuqYoe4dduvYr2Zk7Mi6DtkD3WkhG8v31rvrAzT4ejWf",
  "key28": "5JGfmsoBp8YpP6oc9MCZYTd18ZiigukkBjkJr2L1qFJKqyJrLojdv8gY7ka74DPomfREQUuj3suGjSHezK39ZDgC",
  "key29": "zHHtvABfk43b2b27xJTCurA7L8zLEmdkoDcx6WwdP24phbxZk1wDjmVZDoxvVVFD3WhCS4gJVA6dJFqDMfhzLok",
  "key30": "4uXEUXMBxrEA6xTBqNWWafZxG4BNgZiLmiRZddDZJfvxMwh8mDHshVMaLRPvgiLLjsSubFoMmbD2WXUrjtHyPYiG",
  "key31": "CqWV5ZTyiGx8GgB9WEEpayH1N9CCUmcXpZtsjFgwLwUUn2sbXjGaMoABaGRwsZWvYN9kHTwcxxetBMP4QPjmThz",
  "key32": "3LmzFtZxYoa7sNz8pm5Jy19uQfwzUQrZw23TC58AoqW2efUPWYjk4aoEMrTSqmVLVC2mLM4s1XGzpSEAz4GMKGom",
  "key33": "3HbPduHPPq8kNg9ZUAuVk43J6Bz8fDzVYJKmacDSqgSWudeV2g4iicXiZL5gU9CATNQNbrPmsmAkVLBVfYZ4jN23"
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
