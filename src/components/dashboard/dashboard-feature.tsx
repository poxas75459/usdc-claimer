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
    "5cdaSRT3wpeEprxRH6VpUbeatKR9J7nue2ysiUckv94JQev8e5ABH6nWCDEjTzJgSD3qiL7pxt4Yi1WPMhGevvSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yTUKr4R3ojipbT89kYpi7bs8iwKEsUCXYZMsDgFpKq5H3vgcjmno3cw2dJbjiZiJVfeqdy4hjbPgccvMWNFshJE",
  "key1": "5LVdwHuW1HiiGLuuBe4tQkMGGYHarsLEpXwsdEiRqehvBQhxmjqVB6akhC8khkxgUC885fnffCU5VLkT8JV3NMhU",
  "key2": "5Z5gouzZWe9GvihrTNsvAZw6MHfYa6FXcpnEo7L4RWFkcwuJdykzS6SMMDLCZ2NvFVPkomikkKx9h2GxLTZKbc1q",
  "key3": "2xgygky6nC689gqQmQod2SdLPoct6G8NaHDZmXNJbUMVPhgyi72UdWHSDNXK1Da4mkjHmLcFCepGSWy4Sun9juu3",
  "key4": "59Cp6VwNpoab9hQVsGwtn3hAXZfN5UMoxXyd9wqdyoSLYUYBpCZ3FJTYMg8XrqfNAyeHwgaY82jKBwroqiSPLZbo",
  "key5": "4Fb1WRSBkA4LQ84bKMS4M6z77HwpXcmTRxFBXzhQR1FWMTK16aS1UnrwV3e4eMw6r6KHbzzq1LE6sEtzjsDzhEMv",
  "key6": "2koXgoPpQK7CCu5VhygxZQUUgD6c3AnEV6uvifGSKJAkMjvRBX6ztrgXnjsbDgmaCKxGE2ymeQMx4uWAtpqVCd5v",
  "key7": "5KEkdvK8ErYx6yWniBtfmRwT2oP5ugCHqvXPuPp6PGeaZhw7s1Waqi3QM2DZBMnQ4Zrf1XQbac9wGEViQY9sH9Zc",
  "key8": "vJ3ydjz7WtMYPV7dB8xgq9yA8QWaP3soGC9D1RBmMCEfsM1b3nD2G27iHa7nhjjaqTUn7xGJ39ySo5XJXMZqYVY",
  "key9": "44BVG34RdEBkGLBxr2dqPv9d5SrouPc6bi5NfJXGuGMNMP5WqbZFqEPHT4s4UCwSWKmADGjVqqxgWNs5a4oYkVrc",
  "key10": "3JgcmhyzFB2QLTqQcEmJkqu6taVUje2VvUAMjKHTRSjTod272HU933fX8EGzY8s3mfmdEpVV346ozMzXiBhLEr6U",
  "key11": "4SP96FqS1WUm8CzS3ghz3fupQQhqWDR44wnMc92wGzg2R4Lpb9TrrJ91nX4fudzziT4qV3jzv2Cy88GcLDCiVJUo",
  "key12": "DUiEnxtAySYKGypCBGCcB6TuySKiCcSSbcZ9CgErBf5tWeksH7Yze3N7fTDh4Q6uyvHYLddVu88KMUfRpVyVxU8",
  "key13": "4oyy9cqdvuqbmcFtFepuHRhYRhQ96uMofXirb97a7CYTUbZRFQ725TgCyZbtuwq32TU8VZZ4ZCdciQntBRf2zgoz",
  "key14": "5efsm8YpcQumCQo42cFWKvZqsHbR1V627ccRL7FZo43w348vFtBiphk2shkAjdUvybejuUceRJcwNHV3WXNnKkfi",
  "key15": "5WUjqqQM5cuYgZocxpE6ZPB2fL9r9DzkB3MYL5dD79GxbXLwcZHB2xxQ2oCrtn3NExxn8nUam8uJGojLeFgFN1Qp",
  "key16": "1YzUp3sqrHcSRAPpVvJLpWdAAR13eYg1dYVjwGSwg522eaAJAMWxdTQ3jyJphGUvBTA7bESztrWFoqJ2Q32EeEB",
  "key17": "5HDMx5ZMT71TaESdRr4yYojjCXT9jSxq9cpwx3igBVJ47r1SkGG9GwC4LbvQBZRbYo82rD8wQFf5QGvTFpGhr5sp",
  "key18": "3uriCDwyiE6BW7DamgWBkdVAL7p3FbmiBVupJF9QMCkMsNnbQffb4VHhStCX6ffWBFr7wZpJiMub1F7oQeSMKaez",
  "key19": "2kfVWLngj52gSmsoxJnCqgDwxH4SQWgoW5JWjMgpZQ56GUbM59sktfYqUZy8Tmn1RrDrC78kPfxS8FGWwQLWk4cw",
  "key20": "2hWRSccgx66ZVeLbBckqPcDffM6ZfmWP889pHXWucXUbV5mC8QeckAj8M88vE58EMVZcNFN4N1sWc8uR71E4D9Jx",
  "key21": "4QGb6o8NyZoZQ2BHarQfxUijf5iy8m7YJNeJ4cEc4tqCVs7sinP26y3rwoxXExUFVVZXTfGYcb6eH1KwJerWvVrC",
  "key22": "5bSFS7m3jnjgPm7qhLRPQRjLbY3BgL4RFJhXhmX9ntcQQLGYL5kHZ8NMiD49Aohz8QvbJnaSVRianqXJrsWgdx9b",
  "key23": "2RGUZjcHxkNy8WcbSX9zrZ8bQRM1uNz7WiUpeFm6gsbs2ZYV6de5WSULkKvJbhzx2yp4xRq1Xa2yLWVYRU4NR3Le",
  "key24": "66xgoTg3kgBjtjB4uxbc5QBEeLU1Q3L52Z8meQLbsTyTCF9U5KkjkhukXVZhDafaVsVzCmPvTz1PCdYc9uJPKT2K",
  "key25": "5NrWnmae8cfH64XgvHaHARtsw1VYayVkNxq9UEVj6AsdSgyaxRB8zNTmTiZYNwcR7WSJb31JvvtFS6KiN7w3cmRy",
  "key26": "2ektLJN9Gqqqq62PgXgSFtoZbycUU7kuHUC4HSv5ofnQqsoESZyRpDWhegezVhqgMjiE2ezMzXJ6E3NEza7CLhHA",
  "key27": "5ycNPnrAdE4D12d1eY2Xqw5XmSAP23g653i88SiGnqKAwRvKxkGgSeDkQSZrCwXK1ykSttvjapYi3xFku5XERUkL",
  "key28": "5UTZiX1mgozLBFQLYrPqWFp4V4TRWKqbmxsbrDLmVG4VbckQF5iwRczndq73NnsXZpAcwtsZRtjntorNjDpxwBKV",
  "key29": "5MigJrKeEu7iFcAC6Hp5t8sDMhC9XaBZ5ruFg2gk7e8A7gAVXqsDq2wQozkdvnV4Sv5avU9fTNcrca9SXoF4bURE",
  "key30": "37mJ2HVzy19wS2MWVHT2SizAF24yHC1vyAKicpXfnqSdQxgARbreFjr9yMbaHF2XdKWPRq6G5XB1z55xYTRBcvt2",
  "key31": "5hWGAhX753kdCJXA1eXvshschmdf5DTkeewzZFby1N9jDG4VNZgeqCAbuJRLMW2aS3ExujmwsWhxiChXCv8UJDxM",
  "key32": "3KnP9c6hLKL5HjbphNYRr8LA3uj5ztdXeRHDy3jf579Xox8SWTrDmrperFpefraC5osMnD1HvweAAmYkcqi1f5FE",
  "key33": "5Ad5JNuuCJWWmshapR9m5rwtHXjw9hKcgoAmR5VQWWhqbfmhiQxV3mYKjqQjZnRDUv2Zne5MegGfEhvLZeoTS35H",
  "key34": "5MDTihBLR48NwUuQnaeXm2Qcq8cgaLGDFGSRg8Tbkv79X7cTZbvcHwG2g4QH46pe6E4TEJn5a5ap8P4BHhfJriYe",
  "key35": "3VTtR26LS7Qz14BhGtBMsmrDT4VnnMhpcqjEqwRsXootvGkXmTTK8Rt4aPzyck1jCXLzHajKZGuWg1qyjY2Fo9CL"
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
