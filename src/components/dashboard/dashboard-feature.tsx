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
    "4ozDwCa7ETYfCRHvN3Te83QMSL8o8jtdReQshFDZwzYdVocSbj34qpZgX1SNGEWQu42YQjDhwPaqakmQGES7or6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53J9wLrW6pEkkEfFo1tADMqtCaooeDVHu5PrHPiEcYa2YdyLH9M6qWP2PmLtrYuNsk4Ww49Y9XxHMu4aY5qiYz6Y",
  "key1": "RAn7xzo8p3Es8H4aeEBz9Knwqivuc166tnYCmT7Z2sHD2qMiEAdXxjRb4LLQ3uLeUMTGDCKpcn2qnrpUkcFNYQm",
  "key2": "5b7jLHVZBUGdrx5J7WUpwgjxivXuzuUHEPQvrzKNNCykDwjmYvtMEM6PREtePGeGMsqbATpUk5yTzwm65Ab4jnbN",
  "key3": "5bFgzLhqcjT2ykyE6LSbbcp5XfkBCEBojHp8qGZ2hN1JFugCbKTbp51DzRYALWY2Ppr9muhT4HMqGauLnnBFUSV1",
  "key4": "2y376UemqfrV36Rb4EHjUnZ94SBtJeVuLuJabDUY5xtG1yzNpdEBoFGAcsH7Ke1h5uBMu21WjtQcYmX8yb87kc88",
  "key5": "33vzyrDGe5zRa8E2oNgYkor1koSSxDSbVRcFJER82JFYyzBbbgNf6iuxLGNqihXMukBpia8E32vvBi62tGwZ4S9R",
  "key6": "2RtnZ95q3X1jmMwqmsHwENLjeqxdAeA2xL1W1gCBUFjH7N6QZTJgaBGWHBY6zZ6MvZYp42acenY8cuRsom8YdzP7",
  "key7": "4uUvmbXtq13BUKbUvJZR2EP5G5zpNxzep1sxHsXN7waQQzoGrvr5dD89J9GVf3SCDbtttYDJj598TtsfdDwMzfv8",
  "key8": "2iu6vipBYf6iZ59yvKASQmuqe9x1auSbnm2SP3p777KvxXeAPkj2N4wisMDRqn6Ada5qysUkZ2ZXrF8uMwNVy6u4",
  "key9": "61o2sL9XvWAyynSTXtrvE6uCdxGQszog2nzbL8qbaGV3afNouSNyVVLaqrQTkTNgfBJnEDn3zK23xszhSE3fLaBP",
  "key10": "5eHaB9pouW8GBKUC31PLCQVueZCaXCk657WTWZxeWt8U5nUm1ER3xrtYHsiYsTNbyRhXDb8KLrEzBobxGAU6c2R3",
  "key11": "2zms7LVoeRvqK4URSKs3Wd2T8FegYThdbwE31hfWbuuUGFQx5XETYiApSSiHfWofinkpdFbmg7hqrDQEjAi8XZdy",
  "key12": "2N8LY1Ra4SzXXECM54gTdB4UzjiuGgFuXYVdXSxiNJk4fbCCNH7pvnGeZ7g4ivB2u2MDxFBCehTb5ZtT44Ctr8K6",
  "key13": "5X37cS88btpmyBaYzX4a6N6aGeR8bijdu8efNHeXU8b8bXez6aLz1gmPYpMF3favFrYhYQaejSKEvYFWXJMn541r",
  "key14": "BHanr8x1yeCjv2RD89CdWPRjdtXSz3Hj6aJ74m3nDsuehcatrE2DXtktfarqUCs3ZhbnszNgmHXF5SYvXdcHSgL",
  "key15": "mCX9FAzVYCPzTRmkiYUq94HAqzDmbyZYLHDbFFCz251sWq81jd4vhrJxx5mhMyP41xEAwoMK6FtiKvk3T9iKDtu",
  "key16": "21Bg7ATbNAvWdmZ9AK13mn5XDQDZawMk7J69AuQsfnkVJKZdWqYjceDHJ4nDvfsTvc4UYA34egSMpW6v8zMqf3nX",
  "key17": "4fX8kM112p8pY8wyWRxShZ1NwzpyFRBtQEQSKA1QAYwgNVejfHQtZYrVKpq1KRx6yBLYgL1CEpsXW3VNqejEym23",
  "key18": "65Sji2ycxzxjJaYFz6ruyM2Ah9yhDR1668QHnofprhKUZL1X46ULAitUGNCBS5R4H9wbAE23bZgtMLkckS8xPHUv",
  "key19": "49tc3kfbd5iX8Hp7L4zYQY4q1j6w7sLxzLfNd5erC5AnnuShfwrt87dWgNfDuQmuL7F7i7FSVnqGY7ibnzKiRGWZ",
  "key20": "4DCCNjWEHdYJHzX2duABy7YtpS5FyUXaXjPXQ7MciHvdbKVNbAVszfdEsa3VqU57uP45emP3ifkd7Lh5WbTAxYBM",
  "key21": "VCdovzjP6eARKy1V8uqmAck7QX3ojNuFQ9vRsVYH9T8VDhpU7obNcMuyDup6o555rTyx7M2bwHDUps9cEaqk6YS",
  "key22": "62J6bTkQ8bBrSAkHnr2oE4HQmursosEWxPAHrfh53VStcuVx6WEc5PNTn4bhrVGwC76kzojVzUb7ZDXVRJ4HUfvh",
  "key23": "4n3aHoeGQXSB7d37be9zjLADLeqvtCmPSUMvdJS73WA4nDcdxTsWJ7T8wH93WfaizKBcuDwjU1ESCr2oGgG9H2td",
  "key24": "uJC3ZBKENgZDufxHkKjYyHS2Sk857ugVmhfBNcQz6nyZKvKwJa3AkfcVh9eYZ5m2K5iU7bcW4aWRwCtmyR1YKQU",
  "key25": "4ctcwUGqNntTzicGHTsb7gPJ6JgejCsi9j9o4W4dApM8f2eKKzFhdcQWdYuKJZkWFUYivFFedrCKQ5QNTqcVyvF6",
  "key26": "4GJhVJRzJnAKnoYor2Huf7AsykEywrZQVogUQEJrKsBvbpB6hz4964Jkz9Pbf4RzRcrVcwWwid2pEQzF7i93vpcT",
  "key27": "4gfmbdui2aKAqDeyRVbpgyeteP4XJ4F1ha7bGXJ54MQ7PQU86yLnzjEeSLDhdezDHf6KXytW1oG6NvE6VnWDdsCN",
  "key28": "2n5oA3dfMHaHbArhhReC9h89mXTnQc6Akygx44RqZAhHZajekKgBVsYrX5TweBiWJJvAXvL75txcqzEEYotVgyyp",
  "key29": "4Aun36E1mqeEcFAxPpicPu1eGCf9yyY2VbSVp1ZSMUSGBwxj1CR7vNYnnBa91qB6h5TmqryqTBnTBttFbMAp6wZB",
  "key30": "4PR98pBLCqX1BoQxg5qk39LBQEnyimmnT8mQhznVXkaKo2NKUFcJCbGgBrHrXR2ApUviTCerynbPgRPHsH58CxxK",
  "key31": "3PYMeFdS6DfL9fKYLb5YCUuDD4QXyusGGHTTm5UxByd5g3KC97gVoEwiebFGMZpr3SYqdxbvwFUxnbEYZa7emq7V",
  "key32": "2kve1YMKT7PGC6artQ1FEsCbSCuUsZiz6iE4YBjMCVVa7ctmstyR5MH66wwBp6nfaHLVY7vbt2HG32zdPvStTaQD",
  "key33": "499SVtrBND38ZDuxjvi4myH6n58s7YdQk1Ga4mop9QtEiEXz7AqZsc8UsrsBe3s4BFBCj9fuJe3XC5gPycSYCnMg",
  "key34": "4ZXuM85xzDYAYxJsn2uFCWVZ1U7thoggnCKMSD8VvLNNaKVmpMaChnUB82UwX4Sa9XBCYRJF1qubQGiLdPhc9XjH",
  "key35": "4XZXW19UxCdWwmLkVSLGq1GcG5bgdcSgv6BL4zRjUMHmKTZS6pDWcKxmyUvdZB68AgSJa9C3ndRF2LGsG5H7oKSF",
  "key36": "5CNQK7Q2bUjkwAEFaUzyEGXbeioR97jMRwkbskFdMJ5ZtaHVoTFnBkBsLfm2yFWmS1e4kHKJgf93yG3dxA7Vixod",
  "key37": "66Rhg7KNgMe1HFmGRT7N9iYiWqtHscwr7mgrQo4MHKqEWbXT9EN8RP6NFnmvRGxsuGnzTMmLmjKDqus8geKr3VwA",
  "key38": "3WRwb1gT4diX3WMD9Bh4xba6srvdB7pb7azTCUzcpT9ph3LyA3XKfmybPhKUGt2kc5PmwsZaJfVjbvii3qxbP8Ks",
  "key39": "64u2trc4tjrLTVWtuETy35EDWhv8hsGG8CVfaZR9VVPzBPdf3Mm4yuztmgsVS8TCTRb3Cs1MxUnq7QnouCKmWFHa",
  "key40": "4zGvtbvBJUJB5RFg9XH23c3U3k4htzmyfDU6fhW5vayjYCd51wd8RaXHAoSGstqSU4WV6nGFVT6DKSVxwB2zMF9M",
  "key41": "2noy9a5X6WnwGcHcXdvWSLcf9FJZYeZzgynhjSp7eQTcVaZJkNtw63oXHVfFjqMMzS1vC1Z1avrnnJnDbpbnyLSD"
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
