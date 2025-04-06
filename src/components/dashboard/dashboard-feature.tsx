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
    "2JHQyTJAoPZ82o5wZ9KUojAUbXqZGuegEcfMBpzkXNPkn5R1ygMdSdH8yN6uUttKq5GG87vNtmrqMhnatorjLZWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxRU4pwVasXw9N1EM4cwFors63ny7RQdyAfX9SQZXwqvu71mF99sj5WQ2MfXg2nQ17eZFiyuAMBd5zLUswbmhJw",
  "key1": "5JnHCr2YkrhZ2bTVFs4fDSPwxj3Z1DTLQwCc7yJB8xBwbUsCdzFgzDmuiNzQfCJ7oh2QkAf9vrobQ9xrbwyzHQsd",
  "key2": "2gq9A13swYUdTyGJNkUfCH3w5fDYvcd89BSes1najVc2oVHop9eAFaAv6kWwdAaeCbXXMqr8vvLmpmBjp5MVeTwF",
  "key3": "5GgEJRjiwpdifKbQvN9pbc42ZGR9tFD53QyBTX6QkmjVsF1JWFMMHxTxw5pp67rUFiXZmGYQXTTeBLMFgZNRpufj",
  "key4": "xB3tiBjGcNMXitGEYmJgKxt78Mc2xCgTjJ21nnPfiVNtTfxEdfDorBKhXG4kwz35L8WnE2kYZymBhWfvCumyofX",
  "key5": "3PS8w9yWYpU7XoQgWAgUVsZGcZaYyDtGYWFyHQheHtEUsL2av8gdXG3TGapxCasKGeeUvDHuaJkDRuCkt13nyt75",
  "key6": "JU8VtUePG6pWDeuii69MPNuN9MTL3tG21XW2HJgfW5Wn28XcV17xXxUxmGEx4JuHN3mPKqVu7RAEFQNpZifaUUo",
  "key7": "3KvuCKgURR4jfRU2hfLdtrPnMC2vXDvRLKQiUcQpXFXGdfrFqUm6fHTGtAXUpQhczFGgNRvmtpwYpJFYGYwez8zD",
  "key8": "5SRuzrbGdUTWQDPPdWnH8PQd937tqc4cGXj7DCyD26JkSGStsooHdXAKhVWrKngWRpKkC6WkdD5hH3yoD3QfgB9v",
  "key9": "3LtohNnTdnpjcc7WawzFQpLcAJscBa1JHsUF5jBkpVMEgjqy7SHQyPXH7w3SRsfvFRC8S9wMLpxaRxFfeBLUT7AJ",
  "key10": "HmYNbCGHRtjAqMBw5qnVafiGmUsnHHQXmVgTcChJaFiiLFU1Hz93JkdZ3165DmWknMKoupKngc6G5v5X5dU1rtG",
  "key11": "5eka3cGNTQLAEFAZ2KVEHpaHRrV7xcDkg4aQPCQ6Z3sZixPkRD4tZQikUw2e1WmEGB8G915jw13cvFD4s1it8gS3",
  "key12": "SdmKMybWKye1cS73yMGCrjhdTFSpZbA8v8jdq5cEfeuWJ7T1nc4TkdnrafXMwH8KSyRpsAn2ETS29xCKFe2a8Tg",
  "key13": "nG9mXjtQx4EwD7ftSd5sVZNyGnRau4hvkMSrTL6Bpp1wwzHsXfSHwki1CboGK6aWAF8Uh9FNYZ9dFPBDhCVpzEq",
  "key14": "2TwgCiV8ZAXwpN5RvD6uxrSpBx9ouhjdr3ZxXqjBdsm2C1ziRG9TLC4vjawxQSR1na3kQHjbxDr8kZJkkLrMJ6DD",
  "key15": "3pktLSWR8AHmtSMBvNVH1M98XauPsXVPyycEmEiSzEaTAM3P7QVft9sHjW7ASwNpL2TxvczrhXQ1EFJ4EmxZYuvD",
  "key16": "4AjPx8gifCVp18vZeeepMFvs4qfShUKmg1GRM5Q8W8Aw22fxvoF4voRv7Vp9vWiU95m8EyLoeYtSbHvzpeDj8KoD",
  "key17": "5PmHH1PoN8HpychUiTvQLMqdr1UkQW2CUD1K4xKQtSPE7s3mucEa3ZEWgWHUj2eBJ932SZEgH9ttVn8VyLuvBYMp",
  "key18": "3WG9gMcJrhhZEdPhhLx3nyc5td1qDEk4L7APkppyYL664m4L9Z8G4HKXVmQ7XhWdTvw26NDa2uXdRoGAwxcDHFyf",
  "key19": "LupQdgGp6ZJKfBaJ5EuQYR3MFe5Zq6S5JKaBByRMXXCuVoDA8BegsBfmxwieCjP8i3KFV85WsKQot4Qq6cjZ8Qo",
  "key20": "22FhLSxuEU3qcqiVDaGbCAEY9aG8hGesKsasBSisWepLfDXQS25Mc455NG12tnLug1xSEejZjyhMDJ9QLznGnGNh",
  "key21": "48cR175smAYftYToRviZGY89jYiQeyVCwPXZ1ZMjui3NZTsFNq7Hyw9KDzzGodhk9RTrWFTMFKdiymy4htJJ5Meb",
  "key22": "2n4z2tcz3YzFYbBgj42oYkEf3mj2GKQxtUWcSjkZd1wqcbRTYPhwCE75AVvEfZh9iPMgRbhMWRkuHcvHpWLAdUBh",
  "key23": "59gARutXoUbrjDHV3tdCGpL8vnj3NTrYFCTeRBTXorDHRHRmktFCVbz1BviJ5oMNKuRNoKe7APCbzgFMJ8MZk4uA",
  "key24": "4u9hdtKQcNaRhp6RmxWv8RsMvcXWbcUxz8nhP91eWiMhSTfiYDdm2PfE3KdB24GRYdT4gopTEiDG2T6CKi2ZbRux",
  "key25": "4HPaJR7ZyDgm1GszunyqPdQeaETKi8GGos93TowhAiSqxvxskmE53tbHLHurSPvzbUffzMohYMXbyfdZasBJnWiN",
  "key26": "5rpLtMPbcqKGDAke8MZtVT2y95eq5NSKgqXRPxnSPRHGi9nEV4GDYvjCytRFotNMp6g6GF55AhrC8yqsTXNKPNgT",
  "key27": "KzuFf6gEfuskwwRgvemjrqoGAhCzoVCRfnBXq66CqJHGpP3EpnpTNcUp2mF3fLfYwUctuhz4gZv5GBvFxhiyp54",
  "key28": "2EgFq1eAX663NysuXCq2Wu7dYDzFvUuaYkhyy5a2y6ZU7g5LizZyNncHuQn4TvVTFC2gn34E244niUXdcGcWMRWh",
  "key29": "3cXUEsJcXau2M9K7dR3y4KUB9dWVzVuadEJZJW5mrcW2Jw1dYhBNpMfJBerHGUiqmEvfRWHGmUvMrd2u57omcxsU",
  "key30": "5n8v7PZmRZp4Qm9tCxpJoDYVsEbrsmmyu7sjmZdTxptGu8W9NZ947WpieXLsanPhwSDzZ6jumcW6og524B48Jc9Y",
  "key31": "4Xkej2cDbukjKzo9fMGVX2Azbxe8ooixNH4np8RqUzBUf1n25k1EaAxiqQqK41SkNEYAyqa7MCWnWBiDEHJGMu2d",
  "key32": "5Xaq9iHnUypmqumAgcuZZzTddm4FNYXqx7iHdGWb45wtnPqdmC36k5dM8cuyT5bcisdbCLw73TuGHbDz2VgVxMbN"
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
