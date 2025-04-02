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
    "5FAyFMniTRp2gnwbjvBWA8zr5di1j8GHAmBDpX17Tzj2xstU6X11VP4BS8FehWEYArj1pBfYJyvRba9MLYNY66fZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ysVdBLLywaEAg2TmZbadHbKxqZFXzoySHngrDMDFdPUa8YTDpi8Y2Mp4UhQTQ8aNrZ2xeyx99BnVR3DtU4oLnPg",
  "key1": "LFhD3TwA1pKhEEwWnHsgaJ1pwJxVFjmPMzWyVCXoGeQVjAXKaD4p287JibFJeEsyoUdXkXcLqdon2GD5s6TZLpr",
  "key2": "4A8Ri84ubibvGTBsLvjiUWm2E4sEB6zxVMskqT8BXehXUE1KGareHLtAnzrCeNC7czaxwUAWqVNfRNnvNprAfMjr",
  "key3": "GdEjTF9bMbr4pjw4s2uGzYZ7Pzs5Qof6DGB3Ww8RRpX5BPLgFcXZs2yZxs9S2qN44ZcuAX3b5PkhkAXzfxeQGJw",
  "key4": "DTQVUhuqW1fUi8oHpDgN2WUcTHyZNfHBzqLnBrbu7cw1wdPwLppNUeHbiJPCkXsa4NzhDuLnqMz5MMBccbS7tze",
  "key5": "mNxvfkrdFMKp3J2LXEFcHpK5moKReYz1wYAk6ZfgXLtuhLWjbBPt153t7ZYjjzD1oXVJb6L8TXjFAXHiLvBhoG2",
  "key6": "2KZy85dA8nKLKhvjoHDSmNkkbHArfMPVGUxjw1ExKcT1X17a5AFDQ41kj3GcjZrEERiS9k6tRAFKg5ExFj1NPer4",
  "key7": "2qRrassdMu4rHuhKENX4E8cy4Attybq2KMP2TN3nc32WSdpq9K8v6QBqRGc2tzi4xaDELcS89xniSAe1P1XT1kGG",
  "key8": "3vhxrLnDYznHwvdiy7riB6QnZ8EWiHm3fB1zJCd3K3bht7bV17ezKYMmB4LkNcRrfgrZpjKpqrLo2JQ4xabm8J9j",
  "key9": "3C59TQbcvV8Bhjfs1Ba5mhtrhg7v5KcacPGDaUg66CAwayRYA81rfaKAT1ZzKbKeiRdebE8rBt4BHJYY25v5YGhe",
  "key10": "2z6AAKnbN3KPhxgQQTPA125Kq2WN4VArwVfidr6iP5UBnVzhjQSPaoLQpujipsAY3rrpydHQdWvPDKbp3XXtsNgN",
  "key11": "3tjPtLCdKgE37fiFnTuB9HPbxXE2wnExbfAZzCW4tEAytFQvqM7HU1v4E6HmctAXWRTn4QV31sCPwsYZosj4M7X7",
  "key12": "2SgaivLPyfGkZyX4wdW3LfdNe4tHb7Z9YtLUhNPDjeJqH1XThc25vrm9CyzmoVM9Yn8xrGTFa6E68Yop85AKrb8n",
  "key13": "2dwEY8pfgi165wWNXQjsEkqGE1duNnvoj3ydxSm7JTYbaJqffp5kzC5XMdMMBzyupQtVXBNhvnPe4HoQZj8sYdDd",
  "key14": "313qiC5zuMJuLyWgGFBtjEzDQNvGQaq65SwVRtCKy9BDeim21DbWmubgbegFj5cMeXyWM5uJWHiAJp9YCm5pDBgH",
  "key15": "TiDkRkLb4sZEK3mkVv1WwJaYX21LSpNMASqdZrSntph2P4av6FdXnZeHAPmAr3gns9Q4uB4fM3fB1fmVQP5raPi",
  "key16": "2rC5WLRB566N1q4APu2zobwmDwy1PQLXG58F6hfaHTA8AELnDeAiwXNg92bsufBvZEfp2TqV45Gfbku8QQK9vHtN",
  "key17": "3ggnjVc9hLH8YJNDhoAw3kcB3PEo7GN94LXj84amM3M6Jo1kaJAdQm5cCwxvu9DNq4dMtTimzGQH841MF6NauHWT",
  "key18": "4FxxRVg63qXfPCdVXzmCsz4PshjTKb49uSJiaxauEpdrGPjXTdjPAd8PfkwKt3yqtDvVZFXawR8czQ8RN4puiJLo",
  "key19": "2q4grEn8xJ7k3Npp8gSjxTUdJLWXrXmSUv195MwEnEhAGJji2kqKrGEpoaYy1q7zkhBxh17Xj5p8FK8jvbgZAMEa",
  "key20": "5YfKwyrG59EbYofynJoT6kdFNvjageWWzfmEpJ8bXCSrUE2HjGtjGZwEKzFfKgrizwyF2wqFwcwQ39gVfBuLiFGW",
  "key21": "4gVLyWujLjSr3F2hi8MMNo4E9cCJtRzDJY1BXMW6DoHbmXRi3qFAngWhkxdeWysAEwgQd9V3Y3VtqAoyXWE7Mfiu",
  "key22": "5RTfSKhX83H9UXxHQ9HAtYieW5C66eYRsMFH7QVvaunhMMnkAKhLoQRAw1YrjGTJDKE592Mv2CyeyuDf9qwaELQW",
  "key23": "jRPK83KHuV6TNBooRZLSEfMBKedUQNmzbJkSnPne3KgL23Rid6FYXGbJafBfQCcASj8pmZ6Jo7jWzhsAyVYvDzb",
  "key24": "3HwEmTRX9Y6sTwXZM3DGhXHcNJexBBCG38x5rnrgefnmGzNt6etso1jfB3Tnci4hAmxKv5FfsbhbDTiMztUH4c1b",
  "key25": "eP1jrz3fuA6GvFMH1BrXnV9LJUxUtQDbXrvhPSBQ1mS6c9zWewP4ASGVDWnCajtADtj3BeJntVo96sxDmwSVeD1",
  "key26": "2dAd1Kh5f8TMmQDAEk5eeQ1obYVmX7A158dr1NQmEuwXfoXeDivc9JtB5gPyEE8kaxz6D2YPcntFqyCntquqT2g5",
  "key27": "4yiEPa76GfTXfK2ve4vm49VjHknHfRQ1EdQYcF83rUzXAQbx5FHZyQu2n4TP4cHazmqb55eKneE736UTdtZNNrAa"
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
