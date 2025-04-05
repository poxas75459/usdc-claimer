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
    "3YEiJFoqXw71DbwDmcoLqczep3whC1TG7ufqs5cxXrMenWZtBMDipEhroRW1gqVfVAwzyseqzW1DGhKYhgXx7WYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P4iGz34wqRcV2eQEX2wBHwfWceccwv162tUkUBPesyuKK16EuhW8ujMHQeBhWfCEH2TWZETsWCqxk2Pn2gHKmjG",
  "key1": "41QAhwdfmtiWK9kBL5BgDcCkqa2spkHRydHQHYRkmCZoPVCrDW2SFitpvgNZ7fSsNqoCF6FtLXufztbKA64moymC",
  "key2": "61gxWBwpZCV7LDqyuSVvjWGzia48UteXTjFbGJ1SvW4ATsESwEXqSouBiGyYq5t8HSDuPae7yLfGQhAwUAgUoML6",
  "key3": "hSYx2mJqcXWD5gJrvBckiH4JbDTFEYSRpfZwQsMkKSmU8QRpQpCPYn82aktCp5JqGA2tRNQB5hRYShYN1u3qcAM",
  "key4": "4SZ5PBea735eHyLTLkvzhQEnYmNfZjKjQuLPQSot9AxzEi5U6iBF3Yp24kmC98f79NUbbVkr5AeT6cQe4vULbW5m",
  "key5": "3rFpWukQ1PkyfHwULKcsWrVu1VtWZeiaedB1qaZMP9uMycgzuqRDNfzZVT3LCZAxAgsEXKHfDGVgz8c3XkGGdtgN",
  "key6": "2HXigapN3xAQFVGsGWiSZVu1WHySXdP7jsCAmHU6qXK63iHp15DunKLd6Mm5rApdFyBmzUgpZxDecsH3JH9BAZgA",
  "key7": "5ZNw1MQprmhbNCv1MMvTSLjoiRf2YmTWkrdVCYq5g7muHEaoFhXfDvs1ZoSD7Fo72fesAAqquxMzEA5tHTS9Fveb",
  "key8": "2intwU8n4VVekCkKtvjNs28nweSVGP5mkG4sa5Wvd3oh7kiqszcRGKeFo5wZBjF6rx4kSK2KMFSpmB8MTd9q5t2Y",
  "key9": "41cXdQPaqv1ivccdUWi3ErP5CYygb2yQHvifkECw6mcspE2g1AGcmBj34oEqSPk5EhjQPiF9hrKnPZEDK2MaEjv4",
  "key10": "2b4AHtgTTxzL5qh7tpjN3QGagJduiHfrQfmHbBjaH2f2YmB1oN8GvJ9n5M9tN8j8zk1Qf1Zy7gqM8ENwjE6fQmmY",
  "key11": "2LrTioUbcjpBTERF5dEieSabEyQqQzWSeJF17VnRXhSNwQfsFpA5fk3SiT7LCHTQmQnx3bo4ravy58zVNgDwz7SQ",
  "key12": "t5hduvSrkJAGeHWdxCshGxrcynYVHwsQBq7JhPJQPzAH8F3wRYS7yymN1NSqtMbUJrm2mKT7xN2Uhgs6AuGTWSL",
  "key13": "dkxT6AHwbrxzpJnCRdGXPJAaEzpGFoGeJbNFc6vSi9rZRuQv3zDmT7ALcYsoHatHvSgZuBzhBUjTCdCu5ZxXnXz",
  "key14": "474NtdYZjAx714Wq8bMYe9aFSbqPgF68kbfCRq4N4btBwYdnzjDw1Mq3zWbzENZ4GUoe54xWXhebKQ3WnHAWNSgS",
  "key15": "YxujrXPDa84LgZ4q64d4fjEJZcT3CoLk9fzieEqTYD5Fa9XTywEMpcHasrNQS3Z8aNbL2pJSvaKYLpqL572c2fk",
  "key16": "1T4UQrUNPPnpa9cjBgydVgTHC5anHoReS76mF8UPnqAvrHnBQUXt5N7NfeMprLEC7kRJLCQC7AkN2tt2PRC5v2A",
  "key17": "2qgvR63TkgXNjpvgzPY4jErd4pcVsYmkqyX8L7JpJ1UaqaaNTWL2V6xosULySmFCUX9Fcmrrn2GZrgwfUSAn5UAV",
  "key18": "45tL6fMGUa9StwhLU36UtQoWHGsARtd88BbuVo7vHnthqgQufQYerZg9Fz51HqPRRyyBnHqrrHbFvutTdAn79kZo",
  "key19": "5bt2NStDCJ1VVQR3wGH2w1M2DnKrBgko13ouuTEGkECBuoYVqxu8k6KE9wKRpWiRb7TWt9hmQFDPNbwprRX79ZNP",
  "key20": "2cJbatW9XybTsmwUtUSKd9k19ibQL52sFrqNmheRhywdQmjs7yHZTsSKd6vSoyoJfDji4Q9LgLj5aJwpf8vgbWUS",
  "key21": "4YKb4yTspJkP1MD4vmqmCnnh821irtd4aVuhUjPP86MsxtSsQoiZXVzW9uBk5n9KRqrm2ozk8XksLwY8FDLdd5vx",
  "key22": "5GC626BrokFX6jXXg1RCZ3Pcybubnjxrcfbtg2aUmV98QWKWLYVSvZmoRp6EaRXRYeQGdkgCs7NBFG7t1TbjuHBV",
  "key23": "33vJMwhx5kbmGK4SESdKH7pKpN7J8HKPdwQqp3CzgZAYtVEkH6fczVF9HEyLMWgSdyjfKntdqfgThGwcRodPMtvq",
  "key24": "bfBNfsTmE5kWuXiXAKgiygccKVLkVTJ7aH7eZC3h6NykqEFYJ7EAGcKFm8kPPWbXsPrjes4EKmgJRdBfQeV9wAf",
  "key25": "xrkH4oo4E3gT7dr8CdJXJhjhpJZqBbCizL4mgSRDCpHG1BUMpLazLxBhmbqi4pgE9b3y3TG6KA4hCbAzw4h1pxD",
  "key26": "t5Xmz4DJunZZsPe7fWDMKdNbVNtNSv5753TbaQhuJA1CX7HQwWtkb7CpXtjyDPz9KfXq91uzCYSaEuC6EGqZ8aP",
  "key27": "33jd5CTDnjkdBbpLYKTSt7kV4omisQerMtBvkEMEUh6cbNEDXJevfKzppwdr3ZMToDCvDyM2FbFM1r5KjytwNUsP",
  "key28": "4y2CTTQULtxcvCbEdGMHisjzF2VVFEUki8EPMvrZJXVwnfLJ7ugsPin7DYcLLjyEmw1aE2XV3nwnr3FMWWM4LXfc",
  "key29": "5Zg1h3xgfEXfumK27NYVyjPoQhsGfzwa81oDMuzaTVsaGPCKPNG1KH43ct6hUTKvsmrd7BCDfyMTfCzYcwqVjZax",
  "key30": "2v5bjdR3Wsyg3Yhp2zcXUQAw3dexLUTuK17hZLLFQzXDAN9MKJZrA3NJj1gWdkAvTx49kiCFYQDRB66fdpqFzX9J",
  "key31": "4quQ9vtYstrciM1AWVhM6NYS6f7XwgWBAFSDWAQubMeNGAq7bCSnCxgr8jcQEuYq2zCKoZhigMpwi1A7o18thSPH",
  "key32": "5R2X7LGdtxi7dsme5NTNiLyuDzbcYvn2F7VSdt4kMEWSSE7F9HVQHfsv6NyfsPpJ3e3S9MNTwdQdJiAeugq78pY8",
  "key33": "48hPotgQcWy3p9EXur9zEdLQ43PfwkvWmMgx5PcpWu8JfS5Zf8tef8UkAjnYreJ7Ub3jQFpoffn1VmSd2srU2tbM",
  "key34": "2e74qLbZszPHuuiGCEmqK78uE4HpQFQkKrU1Pw9v25cbXQdZeanCDLX4SZ3R6jjxnkccqB6jmc6yetUCptJSA2Ts",
  "key35": "3PVU5n1GnuCVZnWjxfP2C9Ce13h6uXdESzfpi4LDakA8QMqjMETRHsughPTZ6hRCqJKwAwpnjtbfLcTbmNGMZzrV",
  "key36": "3Zo3aNgrgpN8XkTmtMgpvfhE6KeD2pdwMVqZ4iJiinYqqjLyT2MNSXbUzsvzrjSZWVPkQJtwBKyK6qDj2GtbLpjr",
  "key37": "27NFPJXrWV7a7FsLNAJw79rJysBxVrftSv1P9dg1UemzqzKubZu7V1AzXSFrM217NWt1xDX1wAHsQrRQayP8Sw51"
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
