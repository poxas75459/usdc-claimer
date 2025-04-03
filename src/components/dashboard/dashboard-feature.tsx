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
    "3nB5CdUnXyjCnrbcX9Z5SfkD4XVboCbk7erswCK9719nc13nTa1d9QADipqBDNF9twjF9B6VKYoayaiyqAKKfzT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lbr5dApsB1tuoLwCvprcqnQVRaC9dyEx4rFiqwwThceZ3CQSBzYYN81Qoxz8yn2UX4vdxM4Np68ASXH2vw2oha3",
  "key1": "64tBBVpR6fnUR4qPoLenmGd1odE5np6xQDEWyMBGrLxhTpyFJnY5HTWFDLKPHC3Tad7kCBcZ73DsfBRqxysJZepK",
  "key2": "2NybkwPUAMfJE2o7XvY4hhLPx7vVLDDsTZpqqETxAL6j9CH56KCkLCQV8hbmJUhPNwJPdAEdvm3kuKXR7pHFX9KF",
  "key3": "37p1HkeDRy4XePAkj4SQwmhVsZSwdiRTjm27syFou1fbbp3WzyCQCsid1D2cPb1xmJCmBpdv7PEKPn4aZFWf5ixM",
  "key4": "9KqNFcjPYxwaXas7aeb9Qya92L1gW7P8q4oRLrXREfuAKd6J9Q5Ls9pQ23Tj3ecccjoc5e1rpbGUQR4CdELXkgM",
  "key5": "35o7qgH7o1mqxq7GvB4VfTMES1BGp4q2btbakrfpuudehcGFtEeGDaEB7SMuMkxWMavXUFDuXRNpRCXSuhb7KAte",
  "key6": "4DxvgtLu6EtwbdTqWLXWHzUawmm5MYARmeoiYXNAxEkQSJmHNht9Unh2GFhn4SHYxT2KSN1BTw6y3d9dDkhX6NNj",
  "key7": "2cyAa7Q52ryqVzP4LqSsNkWHZ17241Ydxyfoe4xprmAJJbxW1SVrK4hFFfrztgSad9koorPTYo18Ygex4KVxGYEt",
  "key8": "3ZZP6Fpmnd3zyMsNhbGviefmGTq4SjZpWSUdEc2ztwELex8kotJxWCb8XRFAEP6YdBFmukgMjJh8L65nMH9aa6v8",
  "key9": "2Kb4HfZgiLu52gM2bv5MvjJdzsemJN9Z69mGn3gnfyHHXAbSGu3azu2XqHat2ZfRTzJnzLQXLaNxk1uL6y4gYqQ4",
  "key10": "2BJBTmTM5gnz2e74rvQDdq5c6zRyiMqc1Co64nKSw3rRB8JyJhpAMTKXnEwn1VR2Lyt5UyLwWezzdy6BfPjd1ewK",
  "key11": "2maXQLpQFSYdi5J1JJFnTCcYwHhfyTN2dH6KANv7VKrJkvgZk2HhsbgQHN5yUoVEqvDp9mcDT9ACV2NquGuJj2F9",
  "key12": "54ds6R1kRjC8u3HKweWiJuAGpWevdxSkzpnLf72iz2S5qqBPY45Catjmups66XoqKa1MCq5e6B5r4WNvUFcbRFMy",
  "key13": "eYmbEaa2Yn7WpTSGduQTf34hXL3HPEP92d97Pt68dHXSWx1zTWdEb94GTN3DkawpYveyjeCsygk9nmbhGBoDcZS",
  "key14": "23C22maZksYMjDuSHAHGJCyn9K2MoKZuCzL6hsEoh2gsfQLiPdUXHPU3g5ZYtjZMrkHLgVjb5TtN4nvPyKCDqpbD",
  "key15": "3whbQAr9pY6W31fxitwWMxouPXopVYnUvgxYfBQKXkHUPhUYQmnTxpr9frVWSJfi4Fjc4zMA1Y45WVH39HzoToFw",
  "key16": "3yKnCpRwA2KaHkJMpoZe2aqA4s9oNqGXRMGRtdco5WvMSu925iCFMfd4BruQmETWit7P9XLN2GXLdS5NPG2pCW1w",
  "key17": "jw7NatdVMBKP2pRzE4VcVAQeMkK9Yrq9EyzNhpGXGFb37ZuEdig28SMNbfEWA4EMabLvk6vdBEMGqeAJcscnxHN",
  "key18": "3n9ExC24o2YUvsZzh2tdp1UnfpgijDJsWwXFk6s9PV5oJc8iLQHjQSLC3HWe478jUjPRRAWZLhcNqNzKR7Wm3kwd",
  "key19": "25dWqnUdAPrFXmHPZ9TU1m931SYsP3RSyxKjKxBdupW9QoGuu9xMQpVaBTVUdR7CLyJZXarkcKwMLBLF8TVVYy47",
  "key20": "4z8utXL68vfzZ4B6X1jitcvy4Ted2xRzGSNpY2tKNVeLpYmZxPvqEVucvvfB2e4323rhW95XcrM48poPn3RzV2P8",
  "key21": "23YaGyw46oTqNqsBp1rW9FwGf6wxxKptxucpNkW96G4kTVS69jRuge2j7sE2F8itynfYVEqwyRf2kEKdWvcBUmuJ",
  "key22": "4DsRBpXJZpb52QQNW1ZR3VG6jrCg81V6VU9zJemqzwTxZHgdC6y4BXZSy3ymXr4sWPSrjNHHY5qi7HGaFPPankgS",
  "key23": "3bkYyFAbcSe8gZENChVSz4VJ5j9tGKfRUwyXF1KrsnWyL3PkmENTT8JV5nXwqTpZ4DDgMsNXRXr7ncddR9q299Z7",
  "key24": "Q22tfVgT9Rqt6QXby6W5ZQ7g64q99hjjBGohmB8gq2vFix88VuDnXW1e4kcwezY7SM8LoX1DenD7UPZpC4wpLP9",
  "key25": "24DPujFePWkY8meN6czbhfLGCz2huY4tpVQWrQ2MoyNUdDsy5q9bEF3tu15Z6qnEqVGjRXGLe4VW46FzdQkD91DJ",
  "key26": "52eondZQnmagafytWL7TZJyDiuhQn5y6LtSYzm1T8AvRj6WLBJLQMRj6NVGwUbxDkKUcjCDhEexuSYfiDsLhFkx7",
  "key27": "3AyEWzrcLprXuNvf7mgcNUYzHcyg6svNA5KjUy9YBBUAHwxcrT5e7ub6AbFC9HsPP4ryWot33Rvt5fLuAkTQGeg3",
  "key28": "4Hp3v6jqi27mozLK8vuMHYe8WENrsWpCHMjQh3fhdwdnGvrHm6tQTChjXUNEXxfVzr4AyhTdV5kAYThxv9f4iTCr",
  "key29": "5bM9AJyndRS4kriTSCv4NZr4z78z1EXyUbo6yoKU5mNRyagMW8obXyJummxer5oxf3U8qcrNw9ks6xZeMbSCvwCy",
  "key30": "2eBFaBwJ9Drcg4abZwK984UCSqKLKTFZtgbYw7XUZxN4cp6vXAUNDn4aeiCSinpwkDBcW6Ug1eF4vTvtDWe4raPg",
  "key31": "4e7BJdAfDtGfavdkL8uQwWS6Hjj3DVoBJh6ihHPZT2gTuJ6u8z6TYqiyFxvYuKXM4zA1rGGcodRywEp8BNGXDz1K",
  "key32": "44DBUrYSkG6oqxJfLgDib6k7dvpiwJS7D7daruMndSU6oEkSPWQai6FPG4djhgsKB3ajx7ZzZ2y1qvAguBQcXxN9",
  "key33": "5qJf7nHn79ghT5cx9dfHZQn6NiuL5KxGrJtVViXuRF2gUwBBQB2y56i3AMxkqdFtAHx8DB1V5a7vLYve5HMysrhH",
  "key34": "kLpkZ4bmPWTbjaMQvjyMtiiXXMRkDMgnHEufhz7pufpcThgWsK49orKqRminY97qRYGtTu6sYVnhtpRzjeP8Ym9",
  "key35": "8i6R2ZDT4tHb1W1BxACqAR5kKwJHA81k2Y3GBVAXHYZGAwD65kbsLpubAs3v954CYYwD3fC2YazSrDvLeKCCmao",
  "key36": "2BgiMiCmiihGkTiaBKHvYdQM6naQhbMtKPdAkpbDEVHpob3MXpZLA2mvAsv4Kyy4VeDNWAeXsbB25YMKKPFbJEns",
  "key37": "5uoBWMUjcjCrEx1Mt3gxZ7MV2WqTgAuPmiJykbFaNLA4cTNaTzhAaXEbKDR77Uo3K5B7ao8BTQ3ivx7kn5CAwNS3",
  "key38": "JwoetgJu2ABsAgMB6HoiVfqbb5h9ntgA1sBJfCsDSt3cjw8ZL7qZ3EWLpFw8xR2LG5Rm9R3Dje3FJSixpFi8ozR"
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
