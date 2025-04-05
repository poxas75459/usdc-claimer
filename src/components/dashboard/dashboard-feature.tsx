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
    "5PAyWfZr4yHwT8QWCgX8ygU9Jp3zmoagjdFTyvWSFKwroMv5iRyBWfSGCuTa24eothDHZqJ9q5Peeq3z46W7dZgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CC65MzEy1sa9fB84k8y6dgFRpxT3wnP198JxeKPj2oSE2fpgYpbHQbzipuifbRh5k9r3hvSQmiSEaBFuqkRkkS4",
  "key1": "vSG9LrG2euB88G8zayysFpviSFRLEfTFVk4WMfUkWp3rY2wPo8nnFcQc82S8QUVHKR5j6oLShc8oKwXXC1a6YWQ",
  "key2": "5369WAk4xxU9BMfzuteL1dxvPUihT3TgG4ka1FkWfXeWysWgV1TEEMotN6kLv3pQYZZZVZvVuN9mwpWXr2UqFhuW",
  "key3": "3szhvr3boErnT5jeRQ27NS2QE3ZhVQAiAqv5YQDKkwXwRtpMWY8Aff8fC9TM6EXVa9tT7sBxEaYjCwnn4eBS1wjp",
  "key4": "2r5tVDHCXv7Kx7qdUjaaYNi5FoxiUVvx1AvrmWwm6L9cXMRhhZ6f11Gs3bHEsNDib8UZwuv3jvj35nXmJdeYyjxb",
  "key5": "3uqCz7zUSDq7HHkBbFRGpUkF1x7XziAcmwm4EKnmfmjBSnX69pdnzp7ivuj8JayJXGeCyhrkAoHkzWwFFL5VRXzw",
  "key6": "FMkupYZ5pMnNdjQJbmkJWQzYxaJJvxYP9JjfPQqPcVkESqF2pQGTSKBiB673FcudMtAeUyXtMmkiDqz1CpnP9sr",
  "key7": "5mt9ETzEp2CoAwhUjwWJYLZzEW9TN1oEcqAx2rEhr3yZCgPeM4mL8XUtPFoNXo3YMvJgESU19m2ZSnveDmmqWNDs",
  "key8": "C2kz5ANHnbZRwkzajzVHoqWu3xnBAEx9b1Fcr4Up2BRro14i2MRFhdTQodVpfu1C1sPdqyGcfMRYdeXWGcQZ47m",
  "key9": "3rExEZeUtNGGPkKYSUmLPnCfJvaHTm7TFkcuWqqA3zd31hwPdiPr2NoPGs2iXeZrK8m9zZWtG6bkdHcnvJJHGKKh",
  "key10": "nCU9bQq4G3MfEuYDru8XFRVXeQoMikWC37npALzNqVgA4cxvfoE13XgMVDFZezpzXak2bLZmG9pzuizgP9uRiJt",
  "key11": "2Cq9RpfvAV3G5YpWXgyWwqbng3YcymYnw86M9H5tAdZUTTq5jUTminPBbx53W7haycu2ct2nUhHKrkJCUtFf4PGk",
  "key12": "4CdUGeapUXZMJF8xAWEYSFDyH49rEotYn5DBFoZiZzanh5aWzWdcwGGe7AKMstwaQTukXWQ9KzLfokj1qtCkJAaD",
  "key13": "4TWcAHYfZB3YMXUCfdbgYc9C3FU6XC5xKw4mcwR7N3DTcXZNWtVAoVDxLvqQqCTDdcdpFEkCsj2KYwZBHrWPkvtt",
  "key14": "5ZdtCiDuMouFf8wMxLMSzeG8FSc3cJ43gnizwSKUG4RDqhtDaPsNWsEyiHf68eCQWKQeBNXAJzgpJx7uvkyERVrH",
  "key15": "4BGysee5xyBzK3qSehC1q37veYQeprECXydBi7PsTuH8Z4piHMZ7gte4qLeqJzvtqky6bZZnguprd3JG2F8CsKAq",
  "key16": "39mzb8yfo7LobmYstrJqLcRpm1vTzP1nuZWquD8AFiFs9b4FQbY8Ra3VrAziMoytykeTg5MupLs7EPtRPMccMVbB",
  "key17": "5q9pC7idXgd69RfPiKMFsH9nu93uZ94EDR5u2FGjysomFbvgDA6a2Rz2C8KNaAQPARVqTKgFJjjzKmAYsRd4hAHw",
  "key18": "4Jw9Vv7Tx3aEnVdgjypnBtFCJ4UYY6eqQ1E5MKC1Hxjejc9BWzVMnaHR7uVkigsUnDYZWpFHgaa9Pb5z2ejM1kqY",
  "key19": "5NwMCL3Woitu9vfMRhyPiZgr1Ugs3kT2yYxSm1FdfqrxVHtJm9fJ8SfNhVwUF4zt4Jmyck7p3FxTPezwCXouH4qh",
  "key20": "tbXH2xES1vq4m7ZNxj87U7X7AWs76ggrtuSuB8hYUmXA2UDbPxYmH22ARE5d5pQJJEkywan4N5UDzhSC2qNPL8G",
  "key21": "8BKyVCJ4snySBPhbnQgRD1dfRicvxACLhrYNjPkbAzMZ6RmxXMyoRvRsW1aPQbeVRmcZZM5iwaFsbruGUXM8yPW",
  "key22": "3vicArMUR738r1aVX466fuC66uAryqTbHH1bvZCp2cY1h16FBGWNDuwnkdnHDDFGUw9nAxRdnWid27JZ5jBGtHsB",
  "key23": "5rs8yXfHucGUDms1DfpKLgqfqy6dAx1dqpbiURVwubmR9M3U122FFq93GXmtjZk23Cv72BeeZfxoWK5mqSpUeJx9",
  "key24": "5e1B5MTZvrAfxnoanBy73wAY5DsCxQzpBJZDoEYq1vykMWrWu6jJar1ocjgeWKx439UXPhc3KJTrYkBxRaqaxsd7",
  "key25": "fV5QKRxFfoMGv1EA85seqJBYRFVi2XkSef8cNEALn5xW4xSsdcRdzEQomGFRbGgjrcSTqZJM515L5C1sJkYyVdr",
  "key26": "3PThAFSYmQCVwWQFNLV1n1H73eZNqeJmuurgEVMW13vPKvyXH2mmBV9gc1DPLqKLKBRsGYJNWygnD8P5cuTAfNK8",
  "key27": "jg16Rg2inWMsYYr3fN187k3rceTV5iMmJRexfLhkJKXSG7k3Wk9hwvWMGNMzMJpNQ1pSE9DjLFodJrc4jWdsVh5",
  "key28": "3phR4M7RsbS2B4agzxruVkTBvvvkzpLSjStG6VuKzYKjQPzMtMLMrWv8wtaoc4tJPDjJi4W88mdtZEu6TiFz53a6",
  "key29": "4hUfiWQoMiqKL2puTWmhPsaNLP4RwjDoxHFAA9Y7nZMGBPa21Nr3nyKpZTkbtsHFwy9Yr99fknXZF4am9Svg93dJ",
  "key30": "2MD5S7NsW2s5caxi8uLUTDYVTN9jZTt9BwB8VFj3Cuaebk3G3pk6hgo99ouFR5vAdZa6dg2XxHBeh2yTZj8bJUok",
  "key31": "bmKnwacKj6bjcNErcewJuEMA5qo8HndiSm6JVM8JmEyyQTbesH9i4B6JLAidDXSQqtQJD6vDW8rLQLizA6vuqmD",
  "key32": "3Wrm1ZEoWPvFDXVyDbLjZuMCT6PRi7gPKuXYu1cjSqeRHz9KsQL6LURKQcBEBYDc8aqRjsigcaMr1Ma4Q3JLJLju",
  "key33": "67UVjD3TKvr1RbC3PRCjAJWQdXGrDY9nfzJ7GRyANDKTYdS5n9LKAfVX6Sda11aJaBphdX263SyEB7zW2k9itGK8",
  "key34": "34W39TgPLR52ThQL2MzsGBMEMoBcqLxASBrwWt24AxkFLaXZyv4t2S8jkroECx1md1xcrbGhfGmCHdHychvquJP",
  "key35": "hkoLXp5QWMFM7DGbmMcRfR6PoT14RYZCxPSNthZAguvhEUoWQ1bP6LdsMKmpDFSYndhaP5MywMohKaskbDtkKrg",
  "key36": "2G2vQzXUJrrGpg2rdgzoXUyoHy8ddz4w96D9wvZtmmbHvL7SD25FJp8v7AtDNQNiRyvNS1MpJmmRDaaeaXoQFMCd",
  "key37": "2bUeoiPBVvTJ4XbNKtUtF3NJ7eYWmHwyNTevda3f5rwSeJMNmQcniyftdVXanmTeFP2Yr6zhvmFpBYpPAPJyUBpK",
  "key38": "54m4f4YURqUovQRUe8r3VdkrmUWbRCrJrLcu6hk9N3ArRh6jT4LivjfWYSA2XKuWLsn9y7P7f3YWszW5tT5eGoft",
  "key39": "31UVwj7wQN4PZirKwGJkXvW6fJRMremtEkFnuCVkPbHUcZQ1tHjc4Pm7PoASoMHEqoLDrGufUnLzUuwKMtodj4H3",
  "key40": "23fs8WcBgKVNvzt4ZmzVJAT3hi6NBcmE4g78aNcUkXYXFXkTSZRYAfs3fH7iENonh7AsoDffwxeYBEb7usu5vNzS",
  "key41": "37gA7tjwzB5ofTFudbxYW2wHx7cUiZtokKssoKyNm2uSrKwqFHTXhLBdhDNbQVSWuH63vFgaRx2fQELa917T9X1p",
  "key42": "29XU5wKQgaSK7mGYLnNMRzC9oQLxyHTGxgCmbSpVNkWjkaySPUvUDhkb37Q6JraQxqR4ToWCArt5h236hbooPCBZ",
  "key43": "zZ9tequw8WG2AAkQuCEUhJyyVV3XNWUdHwPGh6gZURAXYpSL6VmypZ5jMxGovvVrpseCFmNHxpjzg3Ke1cexPQd",
  "key44": "3TWJx8gQsx9tZ5ng7V3HwEj7p7AEpzsHm8PGJChKuieEDKqwKmxwP3Waw4Pw1rRfpQcDbcUzoF1FaEsqvBYBPoJV"
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
