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
    "2x7bJyXjAPYx2WtfhFkNjyxv8XrUeHL3nY9ioQJ3DFqJugUMj8jc4gaXMsVCeVUAEataZcfTNmgVXWnn3Doh1DT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VupNc5PQ1YPHnRKKNKq7vtNPrKJcZVvPan1gTHpRQacFaPyXPUNQbXRphYAMNsdfZXKvAuqiwXCK8g7LXagDyjd",
  "key1": "2tZtbfQiL1PYrbD34XNz3ucwVudDrromkyJTye6ZCDC6iPr1RstWrfQySJ9DMBANKLWULcALsDgBaHAtSNPq9fFr",
  "key2": "3Hz9XiYNSb643yKh8PPnvzhM9hqrhRbx5D5Rra3TADa2sQmAC8kSpYGRJrQCb8uHoj5aVzg8Xxyoedqw28wHCXbH",
  "key3": "4yvU5CZ581rW52AmALREu6SNKmvZ7gtsyYhAsgeUhftZKNYEn329xdv3PbFgJWwzezgzTLTTsCNUgqSeL1vZi63k",
  "key4": "55Vta6uV9y4Cxs2iAoVi7xftVLJ1hBzRrZyp1JGiUoutRPmra6FvRFv5NfLmiLKAbRHsRiBc7jpeADqUvPakdXqG",
  "key5": "5oGcanrPHpTRTjwUQcEA2n8RygnwwsbNfdzfQhCSQorneFmjvktfeAxQmRFQ1bq4yKyXav6xemA7j592cUvaW51v",
  "key6": "4jWq1TKTTPHVFuQtEVAxw4Hcbotuz5EYZdKnSDs9qpCjB9c9PBvKbhNZCPt7U77orFfrQyu7vfPvps3iiqpRaDCa",
  "key7": "iiGxK1ztZbpUNktjcCDAu4ofWtMn64JPr28BsWi8sRJCxC2ixsQykNdRgFYq9iVkvaMrvpawXq2UoNC7m1D7it6",
  "key8": "3j7JL53XefVgyjjCBHjWECXCZmqHAQqGkKN2nFVR2oGN3bFL96S4HcVZgMTQcR1NWGqZd6ef63EJhbU23ks4viHy",
  "key9": "3GT8pBoMUdZiEjWGB7EiLbQvRKhhJjbFMzmpAZFcortWy5omcA6eFQgrBbx5xKuVGv676hzEW7rQ6exixbygo9S1",
  "key10": "5rHyKcntu4zTdENHcWj623P3Uv7wCX9Pc7ZX8uzJqcx2iaqxCBz7LdomQNvCGZy11tmJpFwyqLT14qBBpoCweKtG",
  "key11": "5MYUPuppZBnqenxKnyXsPFdXYykmqZWBVG3HYxuknPVJgqjV4XKcyPhfC56zMrwijWqZipNybvE5H5ver2gdikiW",
  "key12": "5ACWin182XvN6St4D1XE4gLvn5uFaki9qRhpuGwi6BgjsPPCsH17Sp3pAqKLwtgfcRbEo7MgEK2CpvwCUEEYqtUR",
  "key13": "DDBFU2Xooc5iZKEFggmmeF2iUaPHYiZ7Ub7PEVcgcxtA9VATgmt4GmZ7JcPyonthQomeih4HTVbhyiYyjBenqCx",
  "key14": "oPRaE2kutC6uVSFm5T8oBqvYqo8F2iE1a1nHoFBjKrzLAQ3RYSvUPfQrJKc9LgMHuzQfY49mnBDQNvMkJ2Hp8Hq",
  "key15": "3gSJ3FdsH8zQGsbbXxEdXQtiooZip5LrTcNnHdCLZvfSbgPGz3iAoHMN9K88ZULeFzeUoZ9QNd4GcAtsUkmVyrL7",
  "key16": "5imgPMGSkVCMdnkAb5et4LwGqK7CCKU6GhkK77hRV2qhFWj84QeFNzQGBTLbLBpPuj7sSyeqg2ypAbQc9Eiybz4e",
  "key17": "3nYZA84VqCjMMCPEFD9TgQsCJdPd6zcgLQyhoL2Sm4mwXjfqJZ7pQMWmJkT4pdGQa5que2gCwo9pHkpZYA2vc4nh",
  "key18": "4kkgs1MbMnmjRNafqKj6zKaVbx4GmsinLJD9vyToURo6zq9qogWoHWvEm4VfJGUrLXN1hdoTvH4aGAuR7j7cftvM",
  "key19": "53154z3pbngpHL7Z9h3A8jQTFmivmt6kqHUXYGxZXuLrrizPYduoF74SfxkHaKNhquzuJd3QTgEueZgj9JCFhCLs",
  "key20": "5r5vXofybASVsWVWJ1CYyGXYqXGh26cEJYpwXP1rG3VKZo8PrtyeoGYf2X2i6pfAqfLpqwGc4us3BnjDQshCrcoM",
  "key21": "56iuhyJYJ2PvA8pck5MJg3xrrkvfLujWF3Uy7ub43XQhbiv2JkyJFWxdGbVMGtDcpRwLMvPU5jZnn19M5TS4QLYF",
  "key22": "5A5FXxmRFpzET3KxNZLyNEPn15iPXdJVsFu7KPfa2ZkrxKzdBu1Wb2P61fybCEF9RJJ2ZrbhaB3bZPTEVgJgVkz1",
  "key23": "41v3DNHHuzvpt4zceCcDBzdY7BtkuAd9iLioNiZfXkArMsiCan5ZCuXncwH74xKNHJKFidYtuNX9SnzHMHrDhM4w",
  "key24": "2vTfvrhoycojKy4dQ9gg5ScDdowYZFbcjiLyoEEYiqxMKQBKj3uTj9cdtRVuDaYRuGw5uDn5pKRHwyYSRrC3eSoo",
  "key25": "5m8qRDxFHvnSyFY4gknwgRCrp1peVcMYhckjxgBwKRyQ1CwUMnYC3hNdUq1T5GKuHJRTyKaHYy8iBAwQHBdJ4dDn",
  "key26": "3XryBYFt5Tt5paXQwB2cR2yXHapaqiZ8uoDphJtwJ3rLSaCUKh53nB7gfAkVQyXNLAf1EWeQD4Gjtg4kst11s7jz",
  "key27": "2aoA4jRGFxSc875RFGsBAX1EngdAe6jJbfrsvEDeiH99ueDbiRmpYaoCHS7cNKwmmu5HHwnPzuvwS566cnXUgixx",
  "key28": "59noQgXJ2thGtb4jaf6fNs1QiLfTX4c18Dj6BSMc1gVofHgdocQ4yemjK3aKZL6Eyb1jQucTHuMV8jRULy3r21cK",
  "key29": "4q13bE3vpVPExParLBj5vGMxSLXJD7AdmSiPtHaRPuzgkCMTNJHNyMHxNbk7yUtecmSjhhnDb4PAHBBYJRYjTP7Q",
  "key30": "4FSD4CUMyU2CEHp9eFUKQZYtvwUWQZf73XjUyAkA8btmguid7qzr9zPZNmqPEMRk6RzPJukRhgvcDJAZWtZxVeQJ",
  "key31": "24xD4a5NyWo7c5mBDS3monkX9hPxsEAArVQ26fBQHbbHnGr9DS8xWexHwDwi3GSi6vJTT3JFhXhztedmNhsRmfzf",
  "key32": "5Fyp9VeRR36iQaatsA82n52m31GSk8yYTKVckcog5xA1gLm8cmcV3QJtuYq599YRb89Ki31MzLuUBH2fppgj4whQ",
  "key33": "Qb27MyUxveUKVmt8x38JcRTGjB1dLGy5XMsGgQyHwC655rFp8PhePvhYSQU1okgQRXq5jeL38AX1JJYzT4qScpm",
  "key34": "5YpMhLSbjhEWDY1nSebEPn6PUh42omvXVJkzsq12Z1qw6vHLdWLg7x8sxTWA57W1oYVis91PtkmnY5fiTA4Zc4C5",
  "key35": "5bCPWvBywqtir6nLpEsv1Ec9LuigV4Bb35e32btLBd65JJ7HWzjovo7xQ2HLUdGw2nqHtEDmefJduNXeFeGEKowF",
  "key36": "VBWXq2SbGgDL6bUXjzsFUzsX2XaB3gmrcxC2fZjdfr8wMEo99kzttKnMCCt6AFjNg2XjNAhJMgPUzrKS9HFBnAN"
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
