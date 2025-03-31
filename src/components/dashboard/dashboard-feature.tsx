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
    "3bUNRwHHzNFCXoQfFJNhy1kY8DdSu1krBFx5GAZF7593wi1hUfrz5DhaAtdL3URJi5fHoKR2WGWVR6DHt4XLuKui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WnswJYGsVuXavjyjBTBuhbwt7oLVayc4ija6uZ7TJEMugWfLbEpQiQjDkF3JrQrsBaQsYp5iTxGV1ZgRbBh33Wx",
  "key1": "2QgR638HoSRxnHvWewcB4C8a5XyKgraDLsEEWsBFhh2Z1AmF2yCXwMFLQvQTmi7SjsUquUpN3Wd9LYRboHJ1eF2e",
  "key2": "wRDRvqLZBHHfYdPvSje2Uuz8KPEZ76gSujCkrchQEu6YSttKfpyR6pXB9eABsLHkdn9CCgA3DEkRzRd6qQzD6JM",
  "key3": "4uU4A5yVyy6EuMXTuYia6fGEfJG6o5NTF7m5Ws4SfgoScH7uicJhmMmg8ofDgZ5HJocYeWRpfpZgcEr5EkixM8kS",
  "key4": "4RucmNrAMRF4BjyGkVQ269uSnp6kaw2vUeMXPA5pw4cbaNAzE8nCrs71nFNjW2euovdaeyRQt1SNKd9Sr1sqdZRW",
  "key5": "548pW2eT4ejPQvwse5PSxjjzkzzwf1GhAabnL4GeHpmNz9V9RhL5r1yDctsHEyPJYMTrLdhmAJoRZSeu2NSTpScV",
  "key6": "5r8ahMQzKZ7KYH4V4aAS4k2G5agzf3JcQSS9Nj6iktu1m3Af3XX443w2xLW9KAaMBUSVt1BYye7XW86d4zXb2uM",
  "key7": "3NwxjQuzK59WgAdvdcchoxjrTf14xBuoveoqkTTeoLCkVnp6Jq4SSnboRUdmPXFPLF52cgb66EjSKbjD5m6BX3JB",
  "key8": "4q8H9A66L4jA92g9mEtdurd8ZAn9jTnxv4fDScyLrkikRfEUbydgCdUZHhPwLHA4uqKqc991oixS1EYxmVzkvAGp",
  "key9": "4VipxeuCYy1GZg5g1cEwtM73djMijXanDveQa53ggeFXN1orERxae6rhhCvtyrNRuz3okjebJhkJtG7oFKSAYU3Z",
  "key10": "3t1AyLzADQFsxyY6vjttzW4sy9M3k3uJjWo3H2w71JXW44xozep5nAp3waQM67mkqJqL7LHeR3vXJZXv8f9u6EVj",
  "key11": "s9UFXc5crUjV5oQqY8cuL4cXiEFg2zQNAW66nHEGtNgLsHBkPUjQRT2HPULiuk8jmn7fGNNxsjwxMcXoP5yhUB3",
  "key12": "3LT5F5h1uqQhfHfdaYSamN4aXHEg3eEsddYtXysvWnLzuRFNjPF7CE3PqCjfjujUDumUVnhvYj98tVddNxokF33u",
  "key13": "3Y1KbAQW1oLZCwjumtJBvfPTmSkECJqnbKesdEVstYwZu6CCqDpPp1dkW4L1WsaaPDPwztqg1YqHzyRGbEXgvvDE",
  "key14": "3wiHF9RumRjwh6TKJXmDTZMBsmbgqLbWA1sFnmNNFsrVJYH3tPyiJMEJMCEKL7x9GsAAn3dynKEzd8kdsNLaVQk1",
  "key15": "4rwKVTia1FoRh3mRTddBcpp4CCDb8kibWv7SS1p5Q1bUjfp5zhD1iVrKjQpMSVMXRSnyPJnBJqBMcVV7UAEXma8u",
  "key16": "59qr2Ue5YKArmP7dbd2ti9Cw9FpQd9nLmB6NfGAQ61xhcKaxRKQ7kkeZHdJ8Hw9KfF54XKxkrygjjAg1ze9XqpyT",
  "key17": "47YKdajpvDNd5LZJZcR413L5e7B66neQyW1Si7ydchWPvQWHRsicN156DLNE5dRfRqgUrnFy2Vdb3JtNrPj8XcF1",
  "key18": "4rWRrtBoKgtxwZmNgpX7oY4UwTYwbGHA9QJ37PFV2ssZQFNtz9u2zwjFK9xGoSCvLe3M7ynBXEafcNjKBzd85yqg",
  "key19": "4TJJfaPZuajvkVg5xV6jorHx2Hwi6ax8kbXXoTZnCgKrZ6xnDd1NuXGFjYnWfBSSYUgd2jDNbHZULQENgvxuT7aU",
  "key20": "2DGHnbtKvtz5ZdXzDZnBfsuryANRzPjaG5Q9NShVaGRFBwGKeAsh4cV7Mw35YoTj8eAuXqM7yRX69SCnZPraBZaX",
  "key21": "613r17HWegf83NXPrwk1ZYrcyf6cwkTj8eeiPFGXWfzvAtvrk8vnmJmwwWDTcxRkXVoNJYA2dkNpFp2JGksPcCQt",
  "key22": "Z8ugXRFJPeb2mjkeactmZLg3bPmBpYRiRKdQkEJjWSGkT8mu3d677ZpprbpFZbN4vsBCoVHXCrz8XoywNPRS1tg",
  "key23": "5Av8RjjDMK2Ukts4kvu17uu72E35Ktm3xhdkRaGc6qvQyUC6iEdwMhDoiX91uSsT2yQXETBzf7EVgs5cNnRKMTxn",
  "key24": "5DpTyuMqXBPmyLSiLSrVev44eGSMRmTmiJCbLHwyWEBaUApuA86fBA5CcbXowfzqN8BWcoNHwtYHewVuN2BSUC34",
  "key25": "4bcLBTMCrJaXMB6UUB8f67YsRFVVyZvEhmCJ4wfHNu1GmdeEDnuaJnhmCSLamFkqGzA8eJzoGT54epKZTYVhSWue",
  "key26": "1TnshBRQJXQqMUunaKLbhyUHji5tTCGEhKB4EjYWmyu3bwJKePzunLqwcbWVZFGUkccWMAYjbzMiSJtp3fv2ekS",
  "key27": "2LVoneT4DnhR3i2Tae6nQ1FSEh4GgksRpwwPMKkBmiZx4o5W8aB5in4oQXJvf1G59oFrtUoG9jZHTJzBgMjH4536",
  "key28": "LjMbLihKt97Xa6v63KMK8gquXm29694ALxTTjDYdT2XQw8EC83ZANt4fQBpbYQaxS2Nh6fAeaFZ4uFsp4xgqYzX",
  "key29": "4C1RNM9zCSRcf9wJsP1q84TNxCj79kZBEgovW5neM4GtvgMXXeVEQG1dx9cXAzkCcQxzhqZCPWTrYkMmWm1rm7Z8"
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
