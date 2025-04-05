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
    "2KHpEG1D9NqLY9miuy1mAgFR7eifvfYdVFn64G7LtRMTDK3drxJ1Lb2rXbJHwCKzAJWUomHmHHj4XtCdB6riUiFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YMQgrDCsmBdEXeyv7ZWJaThV2BQTJWdrW2ShgjzHPENNX2TaRotmHjBnJFtGfsbsyBj8ynxca5cML33gGuMdmrV",
  "key1": "FoGJ5B6RuTUS1V9MxEAhnxhT7ArzGw8gjvVnuaoqDj7GLs3zurGZtaouituiKUUxHgALH8oo9Qc7j78jBRwfZRq",
  "key2": "3xkdgCubR7AKj1kp1APfAZP7h7jQvwBA8gZZ4LG5pZaMmazmZKmCVCqjUFkJwgAgPvHoTgYBqdtR4tZNa73JA8Pa",
  "key3": "pQ5DkWnU1APFGbPR3RqoDTVn72VvhCtdb9s6pW2ECdYcXB1rr7ZqHSS4dpvUp5LqG97cNuNGhLpRMfUTbyWeENn",
  "key4": "9bj8Ue2f3oBbV33ngHLjUD4xQr9iy4p4SJdiy98ZcfKuTW81HYsrDYEQf6wuMwxr8FhmmNZYR9onZL979Qfpyn3",
  "key5": "2VNGs2RgBH9RSuGobkzmYuR8YKKc3miCMf1jkrmXC3avH8UbWMNsegR9XtxbSm7ddHFQdbNZx7NxnSCpuXuXBb7c",
  "key6": "2xNX2rzwPf34NNtKDpTwX8NTKCtW6NmxSuVMxuA9piXCiujSjzDUazSy8qJaS37n2AEVTN91Hix7ZEKTLw4HpSDQ",
  "key7": "iqyjpYLamCnVtvsjx7tGndZ3GisrfmQMGKU7ptYuMoXxXWug2oEgg1bxNzujSbHLN4Z1KTfHXXB4dYZY6d927D7",
  "key8": "91dYdQ7MyxS6Z6sWfhm3pgtDCE5s5fyWcHztZ4ZAcF7DPM7cNR2uJ61omzNMhzhVVb5jY47uJ38fZyNYgkT2C4y",
  "key9": "2bNb2KNUi5wYZdTcgPr6o875VtEubU6SgPBradJGPD5228zZh154ZXTbPkW3w8WfhTAePZmJq22cztozqY1iaUz8",
  "key10": "3coMKC9mhXiY6SWqb7YAigujfpDZXSJ15rnxp5RXiEVXBEi5agidHMSz76KbBvm2C3MjUek7WXLuPhbxPeTLt6Hn",
  "key11": "5Drdh2himpmyBdhCK4ND2mqM6Ljk7che1JcoNe1LbPQz7Dk5Chq9DhaVDMfFKu6Mw3XWuG1Xq7wQuvYomDH23Npq",
  "key12": "3vDuaFFm9vnHEv19q85ro8drcz2xYYUU8UqfAiW3GCPSQ7WEEGBD6MNct6spAQQAVqnKZR2MHChTGwJjDBLX7A69",
  "key13": "cBNMcMzuVNUohbGAUaWoerdVjPgFv3FYfMvTLoC62fwbXVky23oKzUsbiC7GBUsMWbYfhy5eu5azpNm7zw4TJH5",
  "key14": "5ofhjrY8duunxSkuC76RKBebnRyZpzvZSLxsrLLbB5SXfc2guZCvks6HQTM6ExadfyAsi594hks6fB9U8ASwWZ9U",
  "key15": "486scZQyk8UonoXiRNwYGT5Xt47XRWokCa3VCxM34J3MMm7JAmErg3RqjFv7YB7ztZw7mSSuDEPb6PDa3gsmaxAU",
  "key16": "3FWkppmxbKfMhk7mCgNeQXbYsNLvZvAKtnDg82c5rLU7zKnsbAtNU2AZq8vVTvAbY5VwziiyXmrDdookNCeZ9Zse",
  "key17": "3yvjxQaUquEbi2yRuawYMgFRJC7ZeY4Je8uXJXFxW1v3t3KcsJ8k5SFzXFFtpfbtF1Dmq81woANehYsx99sfreDu",
  "key18": "4TsyDpp5jLX3Lk2s1J4PvthiiHZCwqFLP7Z5eMErPBrYAXzapWtQNWNVq82rLhmpaGuS7zsFoEQaeU5xZtdisaKf",
  "key19": "3p1MrciB1y4HZC27jRpP8EDD4GcXwHrsfq8G2NWXT9qggqqQiW5yrKQC88sMSPmm1DamedrXBw3FQuW4xe4dDH4x",
  "key20": "4nPgLiaRD2GaF9XXcGQtEi1bKMhuzZzMuimgvsVWDQoexF4jPDzLkAqepCTnUaGDkmQy3LWFmbNdfMqNT2yjwxyU",
  "key21": "38fSnjSum2KVxKJmoKdzkWiAbgtSSazTCsobGGWsSrrtMxnJ2HcjjJLCYMC493Ybo6jhvVJMNeerrF2NUFbrFpzN",
  "key22": "2WBhNKd6XRhSXmSDtE9yKqw3MmrHa1rypeTSWXRwMAwXfRzq6aFen621vdKxNJNaKMSQs1nvrNxHAMgEZNaDefpF",
  "key23": "3yPTbd6D6iyukgUg6JQoQ93BvKwcdA3MLvDCpi2ZZN2yW416QmHecAVdCTC7zDiLSiEa3XHZUFESrBFuuBdiH9nu",
  "key24": "3NA2ysAPHLGpFRxcmGahXWZXpnWMDkhZf4AtLudAoCiQ9XPGEart24exMgcbP6mShZ1WuWvjPZVCA7pwPeVJ73u",
  "key25": "4kkMv7zwxBD6ucQdK4iMcf8voGa1vqCwLjprKdsKpAwucBzhLYK7UwEr1iuFF9yFJAdGgjANk2r7Rf5VsmegVdtg",
  "key26": "9EeFtXNVMCTV6UN1yNETXi9S5k5Ew8qWwdqAsZXNJAMG4hgta1S6nGN4WnY9PLPmf1o1eXJQwncYorBsaQe32U8",
  "key27": "Anmvk7Kg44ouSKFyjJASejoJkNkSG3zEEh96CpxX5ehifbfrAR55nFtHtNveqPQg89Jqh4Ma4A3iP7gAoU92xLa",
  "key28": "5AzaKoT6t9tWQJ8aWPs4d9nrMvYFRyctXTZugNewJfaVCTv3Y8GfuFMpVhJWyEEFxEuTJ5p6jKxgmSUB7Cxa14Zy",
  "key29": "3NnbiT1xBF4bSA6yFm7DRV5Tk1eDbyWhSUKt9mc1QZjoTqEc7XnPSguaiX5nhfBu376YPTD8Xups4JM7H8h4gwpL",
  "key30": "2p4FxWn9bZnz6Cz4MC5PEQJccavz2rUr9rQhHViXB3aMLMJcfpDbSmeNUmdtsEbLcbCFouDLNgiyNz4hbaCCyKsQ",
  "key31": "3bL9N7wPYuMapCYwUhxkpetBW9JTAvi7wCPkWontomKm74QWKnMrdrGvMMAuec5D7N5dS3NGQjcewcMSqExoaWFP",
  "key32": "4xq2WFccLWALuL61x82N6K2ry6GiKBYqL3YKUDGwyVtAYkwx6kxEXBkWzwmBaLjUho7CdxmtNHg5hHgYAFatzRPm"
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
