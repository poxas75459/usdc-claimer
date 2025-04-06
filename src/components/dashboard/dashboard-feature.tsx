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
    "63bY19nbHzv9YAMxA4bA9NCMQKpSoxGRUc7VyfbD1QMy746fUhvzV8nERvVkqCuSGgcrhWppEfk41Ft9gLn4rp5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WP6BGfcEv6SEFbhKs1kq1HyZXAUfaW1jC1Tm2bkyQY3ddFJrcSNVJnDGXZA4tZwcbJBBBK5UjP8Meu4JWJVPqmZ",
  "key1": "5Yb5qBATLV1xM3LjG6aYBrcB8Bu2KK7sxiBtKgXDdtLDWu9C7Xtgd6AWbaEU4Yfi4eRtyHpZZxEBPmSpbHLwtUHM",
  "key2": "4T9RN3H7pRdF4X9Qh71F2MZG38N9J6zn9Hm9fNYVXm12ANaNcAXjSvaVhLmiq5hKtY7Nf2U1ZVnaWiJcpCAx8Nf1",
  "key3": "dvHqfFmUDzMGaZ8AFP84tmLSeJwVm21oKCvudFWd5VfhQVkny1hC8rPRmNUUv5jRTgZ5KNasXSQGarT4kAthGdK",
  "key4": "4BLrvx8T9yaREbhVvo4Ttxjg7T9r2FUfj3znhT5kaKZLhqoJgV5nXuVm916eraduzHZNiuJrySTWzGN8kPgGEz37",
  "key5": "TqMXQUajjRWHgjuSUT5iYWQgYcrmq1ncVher2ZFfHiAx989s1y7tMGyN4Vjzx57YvGCVgJQMcAFvcsttYX9Biyz",
  "key6": "4p4brMYhnA1UBqkyExYF5BZN11VoSFnNGiKyJB7f7oqYTuHAFTSVAJ6Q46Z4Kw5Yhx9nMuBDGU2ALK6n9eahefAf",
  "key7": "5qreF5vFcuUeEdU4nhSaWtj2TzXFg7d7aPXz3N2k5i2E1jUN7S44GyTMpwEtc1AV2gzYuq1jtb7gkQZJjnKoskvg",
  "key8": "22n8XXEsoc2mHiQDkdPbp39aR6pFCJrnWkftS2Skw5UDYPMs7uCyLvhtdEiMXZXUTKch6c15NYrXrWFbsfzVDcY3",
  "key9": "3ED237DytaLrygXsBvaYAGwqFLcTjYnZmVsStgMr6uJLGBGBxtM8zf1ZhvCKULtte4r7phzYmrUcjbWurTuDQBzA",
  "key10": "4DntYQycqaf3Z3qWAFtmBhUN3m9wkV8SzJkkCGsDUDt9g8ZD4WMnip87E9ZqwMp7RjhhkaGpq83NkMQrNWDcUgnQ",
  "key11": "675ZRtVd39SqzsJJikeHFkjYjJD7CnhgsEq3itHQkvtwNxwezSDyK1psZfvwuQL9WbEfvGoarF7FxDiZBodvUZKH",
  "key12": "5e6j5pXqGnFQz7KDRWi3m4KXiyhn2SrHeqqmQEneimXKgVZvqwpBUkSYrnPXgzmBMD4NUHZEspVdTRGfwZYRUea7",
  "key13": "45QffECyrEV1VNKeXJxmPGxxsT6mQZGYTKpPWBWPW3hbkKtHsAnxqj9L3MZgw3RjHbgW84gDFLR9NghtYF7YxYY9",
  "key14": "3ABtziHfvynfGmRhMjfRgB4rZbfibkjSaN71aQxpWjVPP24wMCnkQb1sPqoG7wnY1bKGuvLydhpfKX9YQk6k9bPr",
  "key15": "45p4JEL6M5kcVKr5eAshxdfSuWgDnYGeaMQfnYo7HZwwDHLVWnwcSuaef526Bq7kWKRKBfpCjzBanQK88RADfwgJ",
  "key16": "3GRdcdVLLav4Pa1Wph2VCWtMSGK5idA8DyJfGsHaPXz4V9n2UKLTd2NRUqE83pXNX59xCxwW9qe3xZoqwAJ892dz",
  "key17": "42QZMpLfNeEgwc3qHdQuCHEokadHwtt5REc3QJDpBG4BBoPGPBqWGBrh3PXsTF3T3h1DuL9kJ24J4dUFbvkyATfk",
  "key18": "4ATQ1giSGeziF3B3gvR26w8Vz6RChsHP92UWSjPMDyr1TWy4SozAiQA1R7sZ5cVDrXdwJW2YutDgz13in26Mqg4J",
  "key19": "3ij2rn4SpGXuyUzyFBT551c7wWddYnsSemcRpCKzAyJwntJKHwTYDdkS8sRynvukssv8oA4RHAYXtzJ8w5SvvQNP",
  "key20": "29zpQBUBN3Hi62P2tq65JcZgCHYp5zAri9vgYoiKMJdHxUr2H3TbnYNDAVn7hwToEFzZu11Nm1kcCey6HoehTPRC",
  "key21": "5fXuQRmUhLLdgJXXrXhfrLHg8JWZJUqnBWvspANSW67EazY9K1jrMsZE72rGbQgby31ugwUSvk5RD3PiEYLBFvzD",
  "key22": "52kUzqBxSRjF6TDhTUqKKt4btVYxqqUciGuYXKveLh6zWKcM9c7BdxsNU1veubiouvt2wge9ZSz7ZCZZy1DWsC2E",
  "key23": "qWh2ny5ANNhUX3gmJMsCnGCqfqB2FSKMXP9aj6bDYVfKg25n9WYjvPFsbd3r3FwWqJ9GqYjdRoBPQU2z5orjLJh",
  "key24": "3Pv17j5ZRcbEv5F7DeTpCiFmJdkh8L5ji41spetkcfEbEHDgg7TAA4WSLop2qEoCVRjLdQUPzjBKhovgZgUzrA3f",
  "key25": "63vJVcwcCmWfEeTGGCQkJ2RiDCa5YFLpHb8cvQLqEabrnEVx8nWDut22d3TEUG7nkNnAqPRbHtt1MMFhCZqrD6JQ",
  "key26": "2Sk1sRzvtCg2TQgAvxzuxFMRypVd6FW71i3Ahdr4gXQMHynk6mam9xg1a2CrmiR3RVuD58z7BuBWevhUoVoCgXwm",
  "key27": "MQG5a8R64LHCiff9b9z8ubn9wRfq49psJGU1wUixnTJYkoMfjxLoAoDuFZijpEqwppiyLxs4EwTFV7o4CXMCnj3",
  "key28": "2Vt9Hyb2wLnw4KcVwBbKSd96Nebx5nNCniuWiNmsuwvnGioDnX5m5G1KtbUdeviigDtLjbiABSBG8vdZUmzHmWFm",
  "key29": "5zhDNSay97WBcgt3Ts28Mxk47bNmSH3srUqxDQURz1PusLpqhzwitt56JBfp9XAJdQUenWVZxiiDh9mHvvoen9cx",
  "key30": "399f3UqRUHahBpZkUuGR9ZpW4YV1dpq8dyTtQU2MVH7bpsGTfLEgqxWjWLAmesrtgFbJX941S4PCFoyw9H7LGnjk",
  "key31": "667LmQ3Ms5421PB6rsQkjJvf5iXqbNFiJMLqDPVfxJVZiAjntLi2sHwcRybQHyPgo315EQ5YCZe2ygL1Wg3eRSuB",
  "key32": "LaDTSbX7GmBpqgVWgAhe3TnVBcfgJDWNHpDqNuZLZXPXWwjVmwHUuCKuURRWnvihWiCD1uXK9JTqDV9Jne67gxM",
  "key33": "4uQfU5shkVn2rY2o63K5NQhah7Xo4dn3zjwbsSc1m3EMBAbSXh9BE9P7PvyZpFtqSAnXDAPrzJb8q16KqHqjPBL1",
  "key34": "2Hs4BwPmmP83cXMSR2jPdXYFGcumfzBRHRvLcPqsHb5bHSXme5Un7zjp84MEaL1wkfVyKiCMVdDEE9emw8ugNvRX",
  "key35": "vVhcMKEpm4G6EkFT43uxney2AQPh2AF6bKznBco3JaqDUWJtwQtnMbwVa1QBJKHtK6FhS9VwasoEywSkgirbRXv",
  "key36": "4NDfVu2aBWar4tQcwbm7oHBwf4h5bjRdmtYt6bNnevDkDect7q4vAeSCYgpVbXvmQHqVo3d64icjhS1w1gd9Y62j"
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
