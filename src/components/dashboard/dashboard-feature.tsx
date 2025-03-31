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
    "4r9ULWToCBaCmBzk6goMp2u6nweD9JDWKoue7HLHwp3oBox6sb26VcjnZe9gEEPYXJF1DxzWjtjm5eMaqv9f4sKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MQKMSDMWg7RxfCuBrTso32r1xkXM6f1qJKqx94ggx3KcMjQJE2mGbMjWBkMtvDb2gAuB9GHARXPAo19G166ezgG",
  "key1": "5q6xatDqrGmGMuPMSYnaLuSaRTkRHEgbFrGhM4QAiFs8W3zMxwEWkWiYoGiogDeHU9fG5objNBo96BLCzgAqs3bC",
  "key2": "3YB4zh9LT41JT3B6t7am4TY7gGw4zsf1KLabKmjsnCGp62jijyvNhcuEdoYdJAqX27qDJHG9HyPqKJWg2SZYB1N6",
  "key3": "5dJgEnnngcG3iaX7crzGPzjosfhgR1SC3rhS747zUxjzbQi7E2oykN9CJh5VeBiJxkLUdZcKHuFYP6y1y2CMDbXh",
  "key4": "afzTCeHfQg1bQAffw9Ko5wqb3JkaqpSY6pY1hGDiQdRP5dBj6M25ZMwLtHJBinzCLwRwARFsrzgQZpNXCfLeA7d",
  "key5": "64qyRcrjjhgLRoZoHfSoQJ4YPNyYotkEV794bFzDKG4kLQDbXW1HPUSYut4b5ao9kgnw3AaELFC6P241y13ZpM7v",
  "key6": "3tfwQQ6KxdASNrdM4jRKNwuSkG7QruhiimTG2n57quewWMk1VdVmjtM4c9PZfJ7CTXhygRW2cer9kxgfXhzfj1EE",
  "key7": "48FzPv3zoKrUPmCLLHtuZayBHFzv8FfbiUeGPZHe48g1zhnRAfSTncxpCLskHJD3TMCAfYwLcJoFrMYHEJtiioX3",
  "key8": "5JapqPcn45DFeYoH2DvQQ2hoPoMbmL8Wj7hurLXCe17sLWKt3VP5hBo2RDQZ9XgsGqoxTrL77puZCdHzZe7FHqcb",
  "key9": "4JpNavJ44SEMCJqkNRFhCZEviAAS9349JB7UzpWuMUZ6XhMP4MZqQLxqMZuuvjXbQT6sz3VgCH2ReSt3CNm17uLp",
  "key10": "4W6q6SLDFc5mEjUDbRDM4SNJexb1J64viGxbd2WQCCkAPeFJdB9TPa9NakiQgFw4RHHNFtghMoZqjL7BLqbRGjqm",
  "key11": "4nkxW5NRAv8gGXd49k2Yv1aaEDv9Xpy5zqiPzXZueEL1BrG5AHJqt18B5TTVyktadNLGzsv9GLrxzBD1V7p5gq2b",
  "key12": "QtYz3xzu4M3Qy6zTkktsWAZ4cEVAaXVZSaoGyothEwzC3wqhgXSkqbirh8z1tnmykBoFg5pr89TSTdyBgYbyqno",
  "key13": "31CpFXb2eRAiKeiQM5draks3Z6BqrWeWQXoYvJeAb4ffK9wNZ8zCGdNXjBnSEYJYgKEf9ZQHvQdGVxJChxrF7o2r",
  "key14": "3W2NfZAPzLsfu1sPu4McWT7rNjbprdFEvxkXSLpeJjJQFYduC6f7V1Rigi5sJqSYLRnjZ8k9SVZNGivd1XFEo3Gq",
  "key15": "4kr2s6ScMiAzbX4e8a3gc8tdUdm8SKwofcXntyosa3bUNhWLGkfpJZfCe6BCxaghQ7g5JoTCkM4LYztUo5uKrU8f",
  "key16": "5tz1g9Q6eRmcybWUZass4usp4bwR4iGEYbjdrW4CXDQ9iWpPF7X9ZvNF3pwFi8SE2mEVSNfMSGWYM1tvh7Qv2kQ",
  "key17": "2CMpp9xQTgjahnA4PS69jC3YRwPkzt3ESPmWrsSQ6pLs2YRLTDgYyS1p3Q5MLusHCP67fZEWAmS6AtzSPazYq1WH",
  "key18": "5ehLL3BFtbBp9RQZhjb1NY75T5Kdg6hwkkU49q6udBZ7QFSmr8iHKzMuGB4tPH18iGgBydvJn8f93EuWcVgVxiXh",
  "key19": "3FLccZzEdyNzkGuqcCgryuKhV5X1zvH88YfJG369pjiLTLy6nDAE2oj1WPkZBdxPv8SjrxjNLYSK28LLnTEkHjTs",
  "key20": "34Q8jE6EyWWVDCdRCmX9bJsjQqt1zqP2ub5MatLiZ31cDxNGLTJvvTQVJhUnSz5ufUBzwnNw73Q8wErnHFjbVQqB",
  "key21": "38uXqGaBX4VrhT8WvhNLo1YTb7kBnyNicmEeuBogVY1JP2XAByEmMidJA7VR47rpJ6LwTqfCdAvVtcSkssjthBTD",
  "key22": "y57ecBu4mTm6xALxGZg6fnukWXtbNgSQuExJihAaZJGVAA48FvkXtBiaF5qfarRWTAXUvuZwBPEnkoNxcKh1CVc",
  "key23": "1Qa2swPapPK9NuFoZDKdbEy3neQG8omaTYb9CZaeN5KuMfmyKLKiwijXj5XwFCA1W49Tt1JYRAqHxV7kThqjsjC",
  "key24": "cqA3sUJ7dVZBnAmBJN2Q4SSVjkyta9L8T3kMVqpp8NTJ2ZzFbT2icwaVEcP9otxwDvF4d2Y6XRVfeWUuc1zHxcV",
  "key25": "2FPxTz4HsvoGLvnqk4DGUza6akLBnLt5BoMsFHyuXu6ETnvXPbjiCiUkUaBX5hk1KGjfWdByXHrLtaxUYVjam5Pk",
  "key26": "2C2uCiveJk3zS5DkPfpAzLU2WGHLAwKdp86JdtW4LuAoyYr7GTF1rAqSiwUkr3LbcKNtfnVzdce5Axw6AmAsAQDZ",
  "key27": "4LNBGpYDDRy3SZsLMTygvnUWbDQ4PoQG6HUEcNoRKbRNiGM8waC14zH5ha7i544iAiJf9MtTV9uZXUzqDTXCoUr1",
  "key28": "5EiUc6d2spKMX3CMmk3F5iYJkdDgusQx56jz58A6ZFtVw8kJbKQgcq7nqEnzfBW1HxSni1tvedSQp6U5dGfubLsv",
  "key29": "2YNh3Z7xM5Hs8VMcPqabuvqJgrGceuVpdtt8kYwqDnHs6JJavDaGzkF4bRwmDPBbdCPxbtjPQPnLtN6TtuZpanxN",
  "key30": "5ynNnaBCrEFx2J79nWC2FLqoUFTHu8uz6LsL9ix588uUbCjiijn5f6U7MVKwPB1bPg41W3ZYU1umhSjQnwcXSZ5D",
  "key31": "5CtQVUxiQvNw6VqZJka22mMFdAiDukNgrUSZg45gsP8F7aX26zwfNWn5uwg7GY3Jn9Jki9rf9c6Urksv6eWHuimd",
  "key32": "2DbpC9vuFjHPcj9cgQJRoAeXTXvb5EmNHZX1LbZ1aT2tfUZCBrfMQrjwYpCBrvRmv2M5pgWTJY3NussbLUsxEtsA",
  "key33": "21WMySweSnXEMj9ggVeGEAFNKH7B6HxNa4hzGpZFfnebQsyU2tokZYJXbXVL1UUqkdYYYM51PEaqUt76Z16dSQP5",
  "key34": "p2bzbPbUG7C5ZfeM88ieF3DctpvS1DDbe9Kg9oUpRXiBz6ecLCqGHBCYwPVzUkPuje18CpQbvXkKzu39Nn1wbSv",
  "key35": "645bats7yC6UaEn51v8cW4yMeJCDC9GPfW9L9xksq3Eq9pmArceRtFgsfb971uTU6RLXP6GpqjeSASgkWSm9S5dp",
  "key36": "5ut7TkNPT3KFNwpaQZUM5yGHqVdVuKZw3Ncd7KM4ajysAqSYJ9M7AzpsYKmqsvySnW3ngd6Nw63rpvv1xBJqK5vS",
  "key37": "sUCkmvc8MCxBTc8h1yEowMeEbQHTYCQkret365PQ1oPmFq9KWeM7gq2HigWnYsXQvghzf9cdRRbdv1HSEQuVt6E",
  "key38": "zcKpS8Rnk91anHV6C8qNYPrKHfPApUwpW98MhJXCJ7aj8p2QAYm6E1CKK14qRukEV1TxnnhsDv64pMcYqbXqcWd",
  "key39": "8XyLYNFgTisfogVwY2DqKcv5wyAKkXx7wPZ4UE5epq5QHC8HzbuaqJZ3gFpoCKTm75gNWf29AB7JsDbb81hcmGy",
  "key40": "3Y5gierxDibN9M9u9FNW99Vnzrrjd17fwvw6B17s91UtEXM3Cz9Z8iKF2xU6cxcR2gGS5ajaPGwBJNj5QtsaJwA2",
  "key41": "3jhXBEcDEKEooVDsu9ngEVFTP1w3zG6LyFz4q5sJj2MSmMTxXTrxe26gaAWqpgg1t2DDZhizUMg7DeYj3QpgaR4e",
  "key42": "3qLRCrGZpvGdvUVo4KBKtkeHHBqfhqTbmkfxJQLcpHDABqevbsvFTPxNBBoK5fFfSEdwWxR3w9fTMWxfRJ4Dn4v7",
  "key43": "34GEskFRr5jXBQBqw9W4YYvqwHVa4xw8nPCt223HwWafxUiKwBbrTg32ybp3ZEcQyuJhM61GPjM4c2m5U6mzKQdN"
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
