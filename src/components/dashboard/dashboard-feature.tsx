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
    "3w4nSjAUNHCd35CdDBhQCPwYTUM1gjspo4brnPYaJru2r1RgVhQ99Rcpk3adHarDgDNfD7kpEMjA6WLgaPKCtv2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nYLGVK9DYjdg2CX9RukkM9DWWBvrL9k2D3hU6iS9bSTvANYM4pm4mcjg6UdL3GfC3jq3YkZbMS9dnV5ggw786y2",
  "key1": "4BW3RcFgrA92SrQqgSkVSJqDfXMjYuqYmq7T1Zw1UQf22sDK8HZoTvhmxB2gCywNY73MUJaoRadZh9iYzaUg4Xh7",
  "key2": "4HmHe2XFTS5zxMzhRLXvMxbrNnYxjLBZY6zMs2vMYnKPDh61KhJ5PENhdjmEnaJeBuAvAbojK8Jd5FEiM1bFACt",
  "key3": "2zHN7i6fk6GWvkGkxvjXhLK25bUGRiXP4nyCaLLuZUC2aG5xAVL3wbRnNXWiitk145uxV78rG8n5PxLKh5UMDbUW",
  "key4": "3PJLhnEmgCcDvAWVeioNJJWo1KbmF3TbNA8yNeGKMBonESAdsELpA5MrEEkmLTQrx6osgm8Z7aQRvxbnT1zY1tm5",
  "key5": "3qzsYXAueuNPrNTmDL6XbhrG1sLobX2C22vwR1gHkkQy2hHuWhmtCmD6TDHiJGTk99j8H6iB99tfm5RsKjMDLebt",
  "key6": "4EHntYTX1WJhSu3zJHvaw9QqSyPYptu3TSBeN8ULCT8YUXVut5Azx551RT5AoeztCqzHSZsBruLwt16iD8an6AAP",
  "key7": "2nps5MqoHbXB7rtxXAoXfEU8ffJMNzErsLpjxpKHHcgjpFbASUN7TeEvBCcGwCzBGhvws46FGcAGu2KqR8KcPKGd",
  "key8": "cSHkGtqHnFJCZKCFKVCbgmWvKD4SBpBAvhUTKbhVzqvvBEzgvqq4m1XBHdZresuKYRyeK2Jv2dKneG2KLydHTWY",
  "key9": "Ja7wdS2W5HTCPpnfrG7bfg72qYzyX18x2PqvQ43oqAfoEYh8WmnfuHr1sodzf3zvzSarjpsu7LWhSy18vxWZ9VX",
  "key10": "2SETC8R2S4Ka7CNhRJm5Dzz48tuzdKz7bQsHW8N8r8QwXjTAyxqBW18knwQk7D2Nh3CLm6L6dvtPE456HrohQCX2",
  "key11": "2wUcPUFxtFKRc7mNjQUY2PBcJSyo1bCPyeRxcHMs2YDpRUg9PMFSgvjbEJxY6j3ZJ5bxCiJzEwjdemTha63JRcXH",
  "key12": "4FiaAb9yT4nZZAk25GctJpT3qtgzAMfv9Df5CFTKGauEyfgeMaoUp4XTWtodwxX8BZnfQprVVtHeyopp4LUZNVb3",
  "key13": "3oSsVwqFaay4KbouEcv1KQMyK5B5nqUzfvbpt1iPzox3Trb2fKGMxJUukceNYnYtTZvhXnvXQSMbbuTJcRyJSZg4",
  "key14": "45RqHFxXuwMGW8zPyc2yiVuhKEMsuQ3K3M3c4ZA8QH3XZpx4QJp5pjaBnDsTmQBsY5vhoa8DaSU6zxA5H5jeJmcG",
  "key15": "2ZXSEjWpAKxDXT1PwtvAq27z4MVKboNvZagXRThW1bE1na8kLhpT9XGKjmXfTJ3BVWA4ixVDJjTY3EEfVw4LZST",
  "key16": "5tBTmahWjWD8qUTN3Mj6HD7xrSZvrUM3kuCcZZsHdMyuo6gxzqP5KKy2t7fCm6QFPLL3vJncEW8uk8ydfYP6FXWg",
  "key17": "346DXsb8YarGmn2vgm3o98JmmQqrjRoR1kqExMGPxVxFZ3UcjrgVLvHjQQECBDFcBppiZ5eYcS6jasgkAYzLNMsf",
  "key18": "5TEQNzxa8aspyZYpSgPhP6XU723StARTMdgjiCdWsJ1qDkuwSJcKBsksuc1UTeH2BZeJc7dmzVojuDXR64fmr56c",
  "key19": "5XqcspyfKbwnrdim5u3ax8wDqdsV8acqpFa6A2UABChCexFh6djVPsEmVjYHf7YxjJHppJPxARpV8aNbGDhmCvHP",
  "key20": "3dMbscCj3gw7iM5z25ocJri8LUqGiLkN3haKysHDr7oK3RLg8TfFs9TSnge9mqHz6K8AftQCPqGuxgTgZLC1zgRX",
  "key21": "34ERBvBWndfzVsWZ52pq2Nvo4g23sByVTdocqwwk4M5whRfgsrRPjTgKyU1dNYZjwY4aEyKUhbZ8Tbo7MJ3XFHwz",
  "key22": "4bkY9DcQGUjLReP2e5r2DnExhHSVHHV8uKncHRhdt7sV3ZMLuU4AtqhVCat1j5W4kPzF77i94c7mSsZ2hQfhLXfF",
  "key23": "3ZcwzLPHqp4wXhgQuxW2EdXA7aaCyRpZMXLopidoShMuNwjf986Wg7K67jTe5erxrwmey5Uf6gm8oZffxuXrwSLG",
  "key24": "53QQp1Ss2YYbrWXtXfNCWcjvMiX9UrpXGTGzoQKK78SqtbeDusNs4so6dBS2pX8zBq7KRCjKP9RFRYzDuvJgUrqU",
  "key25": "2DCZQcPj7KeEJMDvupXR7WKydBDv7KGHUFK3C4PrGBn4LD6ob56yABM3PXM5gAuW264vtsqKC59WReGyYgttohuy",
  "key26": "38wehEXKaXuNXTeEQ5gFaG7ZuUVdXW3PxjuJ4K1YT9MtLbU9BgrUCZcH5h4JvBjYYXsSrxWQeiTooPxKFCRqGBYj",
  "key27": "5whik5GT9nDogxqyCftsTXC5DEhMN1nyQH1UusSywQCsYUGTdsJ2jd1wteVpKAM34F51Ph9jBYuRTXdmwf5iktFa",
  "key28": "MJSWDtBvJEKdGkc9Z2SZSdij1GgQXJY8txDS9XYivBgZEooxBU8rNJwDYfZd7in4Cp3FEPsCVQL4Sekau9StnkK",
  "key29": "5CSerGDXpaPYdAbAXAzJBpGgsHbz1EEYwoUCsgmWiXRxSCkEi1esG8RGFSrzChA11tz1hixryWghTM4nqdkL1QE5",
  "key30": "3NiVmkWfWbdMAqPNeFXxJVCh3mMdVgQRiieq8yCkrSR8mGs59JrqT6BnpvJvB6g2rkPz4MnXWSUcYuDp39uHVuuQ",
  "key31": "2kyvz4xh9jd7Ca2Shn6AXRovn2TLD3LPkH1pLDD9WQigrQmX4VHf1bzoLV2DGLx3cN6XNsfPzJYu8rdV8vmZRoJ3",
  "key32": "2j4eGzaQL4tajJRNTYr8eM1P1cgA3jcfJtiGZYk3Fp94SxR1ic8fk5qFeV4tYyGYkvNebimP2t2Yf6xQoheD5q3z",
  "key33": "2t6msKjy1vtLXfu6Lf4AEfgMiMtMKojRiWe9pcYaw9WEsRQ2zZ5pT2V9WmHknrb6SUFHVgYhB7f26JKNurmHv5EQ",
  "key34": "DZzaUkPh5x94vW2vZWwoyrQbVNYRoiuVbkqSDSyo6tzhhv3YV6vMov8fXfh9FxTSxRxLCprUAnjkBeBFhchcK1S",
  "key35": "3E4tLQNczkc7Hcuk6UPDwZdqZxqVw1wfZh4deGByaYQikDc16nDQVSag5PZLYs8UWHQCacrW1f8FfSZ7NtiDDFAv",
  "key36": "3DiEGFhKFDTBx7TJMftUREqsCytaiuDDXRu3P5jspZW85t5zJM6hyexXijoVSkryrYFMqWUmKgodZ99XWN3DXiQz",
  "key37": "2t2kW5kWCyayCSFqsdzMmWhTiTq9PSzoGwYqcey5spQ8sfxN7uQVmYFY6FNZQ8m8q1i3P1mvst2uRq8Z3QJbWLqw",
  "key38": "xatRhmmzg7giGG4zQ12RFje4Paxg192MbDw1kXtFyRhwe1cYKDVnwEXFwmeA39B5Lyq4q3uVxHmf7g9QkptCaxS",
  "key39": "5ccRex5xvLWBJr8gU4TJFXw55izLubq6PgMctsKnr7B5cmZv4iCcbww3aVUx6kwkUrksAn8m54sr5SSQ7PVUtyGD",
  "key40": "NEGVHtNfgZzFJAXqKkG2KRLTCGPaC3Q9StsN5Aqgq4QmL1raGAQTNV1VUDPYLQ8NwFozG38rbUWmj2ED6P8WneZ",
  "key41": "4hn5ZZvZymHVjPLL2RrAPPC7KYEjENtkwRgNCFnGsc3z4GaBU8XH6A1utNvw6zbpHFzLMvqgAJss6HjwVMaKqTAo",
  "key42": "55aHuPqqiNpj7m9vfvTbAMyBjg8QCFrT6wZL5iJkU7DGwREJFz7frSNVYoGs1vQf2ZCRNqSGRFiCDHaMYtabPj1R",
  "key43": "4pzUigDrk4iM2keXBgDmw3kGBszCTzFh7p1MiUqJTJkvWrm6XoKFu7zwq8gpvgDq328pdCt3C43F6ehwAarj8FDC"
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
