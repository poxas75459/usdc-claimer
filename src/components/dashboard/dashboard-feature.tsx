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
    "4TdohVDF2Zkgrc1WGEi1CYmChQfRfAHdQTxLZqodgy7cFieLyWfSi8NQLWm9KD3kEDDGFUT4TXS2XfMaF1YTZSnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZNuRpSZWryC8DpBvfdhb6HXnzJGnggwtxwrJibeMJa24Tm5SougTgGaTD59pAEqNMtxWHQgkZ7xmFG5wg6LeCBV",
  "key1": "zpsedoSLTZ3A5x6g8L3yCkhgE8SFTuqUVGEixwiimoiMM3637Ty1fbs6cvzEEN9AUws1tuvj4r2JhafsAi7vaA6",
  "key2": "34mwobwA6QxTr25VGtZi1rVNwcv7rQnwKhZZJx8WKGZNLvxr6QHY2YKSwjve6EUT5VqoDqiaUAzLNj3NGpVGm8kP",
  "key3": "31pMYTeB8QQJLoY5YGJccpvDSUujuKxUXsDT4WrHTnS41J3Ajhz7vfnkqmscquZm1uucYmHUKQ6n8gD9x9adaZqR",
  "key4": "4WVsiARYNDf3J78iiEfu2b2FAACsS8KHHqc36cC2Gygkk5fBP3HHxNiX2zW8Ndr5TKEHAqh1vEyFhnyKgW3oSzd3",
  "key5": "4ZDPtxomE8hwVu25U9ijLS9VtAF3XSkNCaMsooP2PBkmmcZTQv7ptUMxd6sGdQccqKe1LYfddD1X6sMzAK83S5NC",
  "key6": "5X5sxg6jmATgw8NsPyhBWJSFTCduK9NxeYm9DcGQdXhhXBW6BNkBKMsA2SUTjfgs7XaV6sw8Sv1aK6Xg5znsdw3J",
  "key7": "244iJWUWceou3fKPZsUPdqpR7FW6qjWcJJUyMYZp8myFzUMPMrEQ6neiYq2BqFyy3ZmA6fu59HzJwwLL7Ww53pEJ",
  "key8": "4ByCYX4A2Gxu4V7rw8vbCefiNKgtvZKqeZsaTBKU8c64PjRp3AYAPLKLhHLqw1Kxjm8apJmbLAGAXj32MCBrnUC5",
  "key9": "2m5An5WmTWmXQ9qQuwQrgcwWg64MytQh6q6wqL8mJwtpviR54Bz1674wSvEAtVypkXfrCnv92JqLecb3EdjBq1ZJ",
  "key10": "3Bj7qAiLLY4cYSTzjTXQPU8nUte3ujzwQDmnZbUVQKnsnYTahjbBhtb4F3sK8wW8UcMvM8PCw2RL9TxTAaxZR2MC",
  "key11": "4ourwkzshzBLmR82oXPsX1LjGcwr8pXTN8zhKqcCUbM3MtnpQeWaXqaXtRGeCBgjtLcpVKrJn3b7YCoG4Wb2ZAEh",
  "key12": "671u484rDfomEBuBkMsGcd9aEoSok1Ra9sL4tNkp31TDBiDNnkh3BEEiUCqrTDbge8Y8wDYrL78koUCKyRnZ8dou",
  "key13": "25jEQU5ndrFVqP3bdayhws8C958cN2q5b8X6sj6yPx9d5o389pggVGuWyVM1WECRiktRRQE7KKHodxK2VHbAvqbA",
  "key14": "YxG3mJzA3urdAjMSj5mxMyk4TfdaZqufe9t3QfdzrcdHKuGCWNJuRbCGp8jHEBy4oKppt7Ti1auZ8g9d23MQjbE",
  "key15": "5gMBx2TuWXkeRxkmDWCjkXdbcBw9hbdK5bBrDbkkvSBHcKJ4jaws1qLE1MBrZepoVcxUhWJU4BR4jhoLpx1yr6fE",
  "key16": "8xCZWM6Z1SdQQ5sfvu6CRHmHWy6hcYawgCk5c4LiFkaUUV5Y9WhpGeYeHj9sWfvJ422LtDMDescmxyBcHucZXKf",
  "key17": "498WqKHGdwX9t2dWSAinNAF2CQE6mWq46hvJsEkvtLmqhNTpEYYqHUcxwpy4EEB96bV1UdmBvf9MW7NQ4G3QdbLm",
  "key18": "63VQHtYEBjwWkeyEL1LPYXpj1s8nA4H6uUsdM8c3ZfMqLw7UUJE7Y4La77kgraPJySGWV4dSVevpDKfaks9YP7nn",
  "key19": "5kbsqi8Kxig21rP4X16ddhZeXpkyb7bYsp1Vt3fv5gBDoQhtqdnKLXwBKaRDzUn87WRYtPTfVBizAW6Z9BgG8Zti",
  "key20": "2j8VWE6FTyMDna9SqMMPWzSrvSGZjZE2NLCHhEtfKEAcJdJrXhB3XyEo3d5JZUJHVSkuSoBbbjwgyL7KY7JraSmd",
  "key21": "3hwMEhfUUb8p8t6XNvRiLTqUYDiztz2wXzMLvbyj5vmXovoYF1DtPwCcgdopJpijPHy1inEZDeLBpriBNVKPqKrS",
  "key22": "d4oEZdpKAsP9c2Qb5rWeSosqX2evNTiESDYZUhMKEDWSdgB4zUx974YoD1QMrF1FUi1a9VRUjBL7NQWFCZgAd8c",
  "key23": "uJ45zuerQLYekSMXYHHx1fryUpoR4rzFygpvxVGrBTeFcQA8FZ6nfLPnqoCwCcs4u3Br4tsyN4EnTZNdbEYp9rn",
  "key24": "67DZpqbStNBpHppVsUR8yRJuDXq45kBeFmQZrxt86jn9GExzqf1yeXRUTC6EWi2DBSDQnUHSWpyuJCVFpq3a3sFr",
  "key25": "8V2bfLZGsHBuw1VifqXaERKftB4uv4xeGArYxGGTpetUmtWMrvUZsjzDhyQ4NudGXG6tM3aNebTMuPCPL4asFnW",
  "key26": "5a4vU6vsKBFBQtiYo4busGvVtTvUQHnffpVMFQtSiaGG6R8q81Bbex4utwT5ePCGbZ7K78htjsCMQhve68qjQFU7",
  "key27": "3r9tDPVWBZDiouiAXiDo7Ghns3yWt9pJR5XpGQAbRGCqU3pztg2UtfPtoXJ4HbLAhirjYNMTmQwLFjGU3ynCbnWE",
  "key28": "2RZMhxJzinEsJmMKJp5etWyts5mLhHBJjnz6Uxp18RXVDR4PeHXEMRyiaB7sq9N7JYMBSnxj1Mt92x7EjyLQuZ3E",
  "key29": "ztu2oL9LFtLjvzxqi13PnTN1gq7kne1YpEVLjcDbBrVv2iWNxBr1aHLSSwfQpZzuH8aeVWdKi7fe1sY5Dfk5DcJ",
  "key30": "2rvEeWH8zGduTYcR9X3UU7nkqM91GiLvMu67LZHVxk78UdFTdb5g4qZTWz7TFvmrnHnSHi7qEfxkwoexXq2tGx9g",
  "key31": "5jygYvcHibQ15Kci5uy48UYUQwX5ZhKmh2KpRW3hS2EXHXsxaT2s1Qjp7iiRbgkAnTcUqG1zgfjkP4fgoKMN76LL"
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
