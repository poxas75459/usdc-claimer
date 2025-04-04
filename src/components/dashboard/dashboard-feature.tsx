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
    "4Tmi1G8fMqTWv8Rq7b6EnNtG6rT55myrA5v6E9TdNpHjBiJ9SMUky3VZMJcDTLQLmq25aJQzxNKuzoagYRGr4Gyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b5MkY5B4cYuS3Rq8kPKVwx61hXsULJdMZ6rYVkdjs5ex1SPTLcNBYs98vr6DehnsXrM4mcnCGT6fHBB39WpUHzB",
  "key1": "4S435EaUqXunh4BxYNHtrCQer6thdBstYASUFJJs8bDBdFytNAEh3fBBATUxPAKiUeuaPnouM8BF1TCfaJMAHRg8",
  "key2": "4Rs9rN6qVC8sUjD6shXzYHkCVEFqZGQVHm3fCmiVrtBY4jFNeL7e89WW58hJzwMtznQEeEBndeuLK4oUb33zjDXR",
  "key3": "4Bmne5XYNbQUj9VSM4V6d8oUJER79raop615nAK1Fox9PBeKPpA8X6v5gP9adPFvpTxdE6vmiJBHec1FRY8Ni7Tz",
  "key4": "59zjwtvjXkpjGUPKm8UUaHxxjRiAsQsvkYSPnmW1Zz9EFaZQJuwE4WK9989N5b1ZwfekdfegiA3X4kmJAwdFvmgv",
  "key5": "Jgj4UKutykcHsFD1Zpb6ieW9vrMnkKk1vXXqybeMQBABsjAtd2EnPRQJtb2kY4AaC7GqPfq6tmyKQgpigUjBaaf",
  "key6": "4BqhJHgmo22ZZVLHiMAxQAsg98w5THTkejf17qAzAUcd1EK5kkxHggHYLzEJ7VM8ZSrJAZxtL7LaHFNaWiX9opFd",
  "key7": "5HhsFiAP7eUY4He1ZPuHG3QQP9Ut1qTST1wUBp15k8w4d5VQE4G9AMKU8Wy67GFwN2n64E8yqVbeZQuh32dbp3aJ",
  "key8": "3Bm5GAuxeXrbgwhT4jPeqx2p8rzM5xqLkdP6UpP2zzSP6jFn6EhKJTvgBY98w7aKg6E4bQcHozXg3dxfwyXSqqrq",
  "key9": "tSBZeaDw7GqKvUr6HfSfYfHY4cV1ngrhAcHCwV1LLExS4ik7az8RGySYHbL6hi4V3FFi6gcVRoza3VLRn54idLs",
  "key10": "2m5K3uWkKwW1MMSsjyfdjgFDDXcFahgnmTNVGTqvFxUaCWKdPxp7UUF9sBzRj8D4s61WTTKJJ1moCSSzXXchszB1",
  "key11": "3txTLRXHUauw5CqHPz9dpdUkF9XW9LyjT7NKEizjv8A3zYC5Bn6jktBEaZT2zSw6JPyo4qm1SMUkFzw37QqvsrNU",
  "key12": "5Kwb1XXtjCF5veTfkeBycTaSuL25j7Gb74xxdoEzSgZ9m2akYTEiwPLjqemLJNrghue6CVCQnsPzXFGb4aYv3KyS",
  "key13": "41S7JEppxo86vRfpNRGFqHrC1p4tcEbq7Vy7ZW9x2CKz5qpqcW7SQUSvgoY2sYXEPDtuK6dh23LLMNWQwm1kH6VF",
  "key14": "51Jofi86YQxmC4jyXqPGkxm3ZAtCtKFRE3rsRsBRb1BZxndHQB8f2XfBKE9EfUYprp2m6hdHjiLZ3haATdhJGDcC",
  "key15": "29JnJLGjSMNdErdzsrwmRcjG6XoWaFGviYaEry9PxS5sRKi6Y3RNjFD9EoiG6TDA8nEZpbtistc18fvrzbYZzxqD",
  "key16": "3W6mTatzy7hF3K99rJjJkbC1biCbCUdr76j97AWFMDByfyqmbvYuaSGXYyXHp2BoyeKE7uTNKk68fUkRD2HRf88w",
  "key17": "5WbWRjBEkXFZg3YjzfctwxS1ojPJVvjFJH2erd7GUocvdXBF8HXWEEYc7EjLjDgK5cf2wdK8ZXcbPbQK7yih9orS",
  "key18": "55zpad1XoNwiHw5UByK5qGV7ZuHc5GN95x6q1WuidR92jHg6CgQgdhMQqhE5oZWfpJU5KbxGTdh7VSg5omLPnQTw",
  "key19": "5mqsnWxm7XBuZbmShNjbAFPNRwNs5GXKT6tiTs2hTpygBvr5Ri2fPN1ZGYhGXr9AUhNpRHw2FJMPUh28US6vLsS9",
  "key20": "2h6JtbFwjUmMgkkBitW4he9Td4SjtU2YgnMTfSXEXTd8eWpV38mhER1v29K4EXPxCuvUpsTFeqspEgePAYZHUsdQ",
  "key21": "4KtHNU1dfaTM9NWtiV9dCBWx21pD5ae555JkatHUS7qAUaCy4LZsC4U91bAc1xzQTmMg5yQHSQ1pDH4FDc2HJGt9",
  "key22": "31t7DKfmF922iixLq7PQP43WuYvcTHRLcwMP1Z7vC1sNvSfjFfUvQC2CmcABznWie8BgDUECbmcSn2tMzP39Sdtg",
  "key23": "PgESmxRiwD2jHatEwEwjsugXJzG29V11Vux8qVfNyUjqjR4s2G6ABRSgiHNXr3CW5wwRFtNanaGHiXkbwupTUu2",
  "key24": "4FC2qfWqXne2AgeA6XyWpSGDMEgnzCzcaayS5BGiAa5s2B4qjAkwA3sCkyzgdj28vM3uzyb5v7z2q81jzvxg1pyX",
  "key25": "2wLWeo788Mcsx8oH1r9cWxzqAjjkv3PNTXtLHYw1KjcueYsk17KTSJNikF16Lqbo2PpRGtjdNgpctWmVzmaTbhN2",
  "key26": "2iMvW5xrKLiGE6pgKYHWZ7HbNx4gJucbVfsCgRoCqQwmCHpjKbcEQVzi3oEJXnvXAikt5JR15oNA263Nmu4T2ob",
  "key27": "2LqtinzoBBTpH9rxwx5YAuJ3bwRjAcwxsB8UixkqC7m5ZUqKQ9ZrKBXMA6yGu4dKvV3q4f1zeA9d9dku8nwvWttq",
  "key28": "3iYwyNxifpa5jeqzK7MdJChv7Mm2Br62mXPNDU9o6v7E2kJgprQp5AhrEHbugjYGpMc4xGC66EVcmgA8uCWUTKuN",
  "key29": "2YddhMQMfiC1uMWXJurAxobrygJ8SFgzBPM3LAZp8nCj37DneGADh7TdxsdPMXBhirEC3UuwhyRB1PgqHMHWVHZc",
  "key30": "fvXzgAoktJAtdbgNt1rVqopeBRLDXhS26x8ZWKb33tXAf3fAwupbUNbALjUepugNmRGfKAp4NyyFkHKUhY6gHYM",
  "key31": "3jqHg62s3ytwAR9i9v1Z7kk6de5UfyEFoZHFvDYtAFSfShX5NBtN7aaaz6G6CeLaW4yRzwZf614Dc2fRkTT33Xaj",
  "key32": "33QTkH2JmnXdv3eDV91yoE7aaodpKm7L5TR4H8duYhyVSWW6WjwpoKaWezTwMcwohEPn6VbjUbBtUkyfVWAQd8Rk",
  "key33": "5icXBqK1BEG6UnSJMBzAtx8K8MtqZMyAuNVakZEbw1vj7jBtCnFDVQnaPsr6WzonicAsdstUjiAz6qz39Wf3CPvm",
  "key34": "3rMTcVdJz9SBpcYC5K4pgGMXwvUqbEDCSVehPbyNim4izS47VJArPqUXVRVzUWUTwuELQRiBQLy2ihVvfPmWj5d1",
  "key35": "3A4eYgxrRwVBWZNmGfzW43vM95hq7ZnsFtFYporePSTA9pWHSQh7UnmyiYEiUFFGcPum5AM6hZf2HaxhPvjqdE4a",
  "key36": "G8CskVddXQmwkbjTWoYY9FLsyfjFFjD5cyhupkDEyBEBiXWraiVMFMU46NLtF6BZGAQHQUuGtma67tx293fSEeR",
  "key37": "2xR5kceqQniUyijfkg1uUaoU4hV6rhcMAXJhHyjwZBxXKLie3tfL8CfR2WfSzGXzds83DqmQ4AhCkTqDCW857U8p",
  "key38": "5Tx6x4aosKgkT4yQABf2jwZhzCy2vum6mt6gdneVuaoUsbwSqctU9j5AuHAroepDJqewxpxgAC9gzRdSqBuMzj5v"
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
