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
    "ghmm1icmrHVU73UVJgKfurQYDNm9hNpHFtpsVBTcDC67q3AaXYgGxPLtihS6EJC7yELcyetKsoRwUEfvseXYysB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TGLjrNfD78dCPYmRcM1SQCcWjipmM93ds91B5EgH8ow95z8WmkKjKZKX5qtuW3WXCo1NJfuSpYe2e4fooaG2iGN",
  "key1": "3VFgYorNNwevf94QXFEnpJGRYXF1wHj2k7Z9jHbTKrCRUYhTUSPGeBJyoSogDFhdghkUitUjHwpuNHeTgHQ1ePJf",
  "key2": "5wXwFexaVsNXbpjvTzhFBEJp4gY8uutWjyvjtSw6kfS2X6ZyDX1XvCH12QAZJ2XB7mth7ptjbHCUGunP7VCsBA41",
  "key3": "35hDaRUzZfVgWMKzHtKGGzguepcRqDs6mdfAJXX5GFqApvGKvP5G6RuHQ8TCA4bC6USjwk5uHyvhfUjhJWmRHFnp",
  "key4": "51eRvW35h98ofxbcJMVuR2YK2siAFXTPJpvXdXNVSY6kFeNU1oyjMZ915AbJoznanXgnWYamcvUbz5JFpgCGkVXf",
  "key5": "58fP9LMfDHcaV3AZssrXzni6XboXg1y1k84cKvur9oaWgz5V88JR8CurdvTPEAdSeUTgQBZidVTUAH49sA89bwoR",
  "key6": "5MLvNVSLd3dv8pWHTJnTVVsCQDj2bfqF2kNX2LMrJ2NjNiHydqkpdi9FXSFsgLqw9Bm3YP6ESkjvRgarE3bbULXu",
  "key7": "3YhKTwbPbJWd7zUz6drSqYwwFnKBAnc1qwseWL4EdTJ1wxJdVi5hMKMNLpdH4VqhXy9jumEEe8VT5gqQXkM8iMSf",
  "key8": "259zr8RD47rwPAJi3H9u96xGy9awb7ATDxWMkfeiySpEurEyvA3UDaYHUSH57PHWHPsJQUfzLrV1XxQZsuEQVZsr",
  "key9": "5cyv3N495sYQ8q7rTEReMjTeuhVE8bXU2WFAmLnj9pAgoKqoKW3AKWnYwW619FncNffCdQCEzx6mvWQZdhRfQgZ",
  "key10": "3Zme3r5DLVu235TYMR7CovedXF1r38vkZ5pFabw9qckfZpA2ujG6wFpmyQ8xkUHuFrzqAhLznL7kuCRgPM2HXdkT",
  "key11": "5fcw8YE6UttFiDzfbQ6kzSRZptHqQbbiAeHyEFAMZSmZxtCPbmwgeUxJa8pdi22sui92MCiJvWHSYrxbNUHEomHb",
  "key12": "5hMHhsAdLtvswvuRPevBg9XnZCu4hChxeechvnWS3jD9nZHfGYANMSZUei1y3kwey9K6Bkzupc3Q6FWeBGrRMkCc",
  "key13": "4VqPQPoqgDVWMeoKfFCpzNVi5oLfwVwSEo5ffbCTQmfSM6745eTX1KjZzYwdbWenJPe1MTez9t7jdmYuw2DQFSr9",
  "key14": "4K1dAz5qVKt9QB1auvVYc4y3oJ28oMDZ3WPdGETVLxgSfcQsgHLbBwUEKXv91EgHwUENwat36EJoQXFmpyV2Wunk",
  "key15": "5TdTnJEvftZDVVuQeQHn2ip3f5bwMpnbsWAAhNfo5YYXXmHV4XDfZekwSfN99XAneKeFZ6UezdvxyhtWsHhHyEPL",
  "key16": "27XGZ8C1tJaGAGxCwGWzZsnDRW82L24fyku5h98ZeHipN3ytXQ8gcq8XWXRs573iZ8NRmer5TvefDyEh9gjRRjSg",
  "key17": "5n4fgY4qgnR4JzmdKknLvkxbj1fW2XYQuAHYQ6TFaNFb6aqBLJjEijDwukgFUqonPtcwVKgjirtcgyrYkXB7z9ir",
  "key18": "4swoDys2YLorpKErh8ULh4NgXqKNoNSpVvzL1sBuikiyx2D7KjXF1grv8vqNvzQkRFSmUEGAgRJq4g18uciK8G9D",
  "key19": "37LLwcudb8PNqaj7yT7bydMH6QWcR9FKiGCvK5TER9EoP9NtaYXsXaquPPXZNZzrs2WC9PAxUrUZHd9F6CLm6xuY",
  "key20": "5r8xrUEvbuJuDU6z3Hj24psR86JuisKWaqG4Yr9MGnzTPAUVtDtwgnyQQQTWFbDF4TBZNvNGJJeKd3AT3g3UYQG8",
  "key21": "3o2ENHvqaAAMMrbgyNYDQEAtnRzNdq5GV7SnQ6TZjPEkqQP6d1zJtq6uQ2B4bh7Eb7z4AuDsUgM7H451nDzM8Ssq",
  "key22": "3dLqiMG4hKSpFHWgx2jvCmtwhKmnveJR2obwSxXpRPRm5CbMEbmb6ZWotoNpREgdRzCTULCV8d8JWEaxkpwhcyKs",
  "key23": "25xoKBKgmwc8heEYRsG6tt8miz73qkiiXyUdw81PyJ9R3AFVi5FeNonmAEdM4Ey2p27fuaY8Kp3R1uve6NnLnAgy",
  "key24": "2Zm7mVcoAsC6B2c4hXy5Jn3CqQSSZSnAy9cZXbk1hjYd2HZqPmVTEvpdPU3Gqv81j8HuDJW3dVP4MEtLwaXqynZY",
  "key25": "62qX9ZUi8WokUdw1mH8Qk3P8WhfP997iyHyJ2UB3nZasz8PLaoiDBhqBZqBL7PGnHNqBzGoWBgZb7RBCELaLZztb",
  "key26": "2pypcQ39QsStq3nsfemLT6cjdq5rib9LmwPBRqK8zETjABUcDW2Tjxjtcw6VXvMLn9kXiW38YGvQwpGPV7njzRgU",
  "key27": "3aWzDBoSEGFbN5K8C6QKKKmdRQQPXpPMnbLpkN6nrhKJqAiP6Q2KYmjmLgcSX5GjPe3UJYvJvjJBnBtCw1nX7C82",
  "key28": "4gyvmr7L7RSCBKsgJq7dmHv7kmskF9zW3aUr3JDG2NrfFGuKB5dcqPBaTShCMjcfPYHjrq36fHVvGMY6GmJ9WPKQ",
  "key29": "3UiGGMixCjdgzRtebz9r7wD5jZaZg9XTYtoaaDQwNVJHLkoqiWDt265EJZbduQpEWsPdoZ7gJFPeP8bZZTDUMvHM",
  "key30": "4YmhUGXLby5L6qq6MnSfcppHHvbHJjuJz6Kt44KUYP8Lg8qTAHKJWph5MsQ2jqSavKEXMWpemBkhF5EbeqJQWeAB",
  "key31": "4qKkCocNNWwykvAi5D4enKwBqm2AvqGcvXL6TqDZKz5Mk3ZWr8iPFF1CuAbHdvt1LXSxba4xmEdVQVjeafTNdALH",
  "key32": "3UZh4MpSoV4iRvGREYnFo5fQSm3MTJghsA3QjafmUfWEWmHBYpj22x9VTrdPqpL4pmFFDHqBd8hAhcZkMzawijF5",
  "key33": "3rCMaJZ56bJet3W3HNYvBpwfa4CTKBjdE2ST7zbUAMM3Cki7FZmG8F2uycoXVZKKr8SuPxTPZvut4XrYqLc859SH",
  "key34": "5jJi2Z36QLQCAgtek3rrApLcAqpNRb3f1Kfi53n2ZQP4xVBwUJcVgZ2fRTxecpFBhKzx7LUsdLMfn3ZiHX3h85oC",
  "key35": "58e41GmiDdpktruKndDq9JJ1FFgTv2HEnXPz6PVLkPUoV59kPssqXkNmRg5ELbSjtwTMcJ3hEkBb7n73onHsMdrk",
  "key36": "4SE7nbJH2eyuCTriVDEPvBrqSPi1caGJyXAJbrTsomVfUokvBx6Ztg6ABLp7ag4DUuLFFSq6LhqL7z6fbUdthdi3"
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
