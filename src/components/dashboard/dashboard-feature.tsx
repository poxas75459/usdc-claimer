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
    "3zn72YhuxoCxHtrcYYB9prPYzaHscwSfABUXBK67FLFhwmBjVEfCVtVWgoyHmqSRLWGQ1w2UddXdWpEyPoirnNyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jfsf8KxPc84WMzP96fTLzJMcwwwA8hogSNWMYwd3Tie1ZfxvrNwLS4jXLKYaeufW6YBXwJLB6T4sELVXsh3jQ83",
  "key1": "5QY6twxb3z346uAAhQG1mTGrMzm5qX2Qagvwy22cpZWjUEG58JytwG2aZYSi9yeubYWGNBnTE7ahhDFQjSqfDsXF",
  "key2": "4YNVNU4Z4KBYSqRdnUk3MqHaXHFR88mowLbLw6xjtqSkD3WFPAYNTmt6Vid27a8hC5mx3kTcx1s7P8uC9an8C4Qr",
  "key3": "faSdBuczFYfZKFTY7MNQKJBWdwcVqpBbgrQ6qaR9HA3Evd6NovtgNTJpABhd8u3rszYumS55D4vEkohSY1XmbRv",
  "key4": "5kuisnjCFnkw4LVQwQvP2VsT3AoAbTUMZ7GzSMwzFFp92UH5gtj4xQ5nHAQnt45CdkuFzxnx1BkADr33LzMHTrXL",
  "key5": "3dM6F29rLXXuThkYCv3vbNWRCMUsEZTqEotGzCUc9SXGJdx1Yhemb4VV6HMfYBq3mHsibAnKBN3Cm9SWGnHdB8Vy",
  "key6": "66GY3x8ydGPCsEhKnDzBcvbco1aw6TmVs9cC1iGyNbgt25iasHNuroGjQ9S7RfowLKVdS7dHwJ5WCsdaadjSHvm8",
  "key7": "47iKr9a35gJZ6avSEnDieMpx7kQuECJQ5xmuNZHNcvuZyaSHkSBgVo6m9F2QbweBg4vm5YqYKoJaVtGPHT7EV75d",
  "key8": "2y5R2Ync62uFrgEdVMVBgzkogPMWRJ5v43hLQNaYvphSifjmTSZb5Zb7kPuev8z2jtasyML8ZMwPr2XKZTE1xaP",
  "key9": "5CXGDu7E71VpGPpJ4CqQRU5pkptqEjygPexV5RW9m58Ygsihd9XqVXegYzWiVjmHoUtMsuBdRx9Pf57abQYscxjv",
  "key10": "3Qw2haajPhmQYyWTyrZCVXxrt25NYFzocUNYUS9n2Hue5GUcjwyC3EGYWUKbjo34utSEcPMWYMMLVXiiVrjUu4Ub",
  "key11": "5cB8jx3ZbigZDoz1uYeceR6GBdcweMwfACeBVJaLFYZSkddpXdvXk8p1ZCCtnnRWV9jzWS1RNuL2arJ3xNBh7MRM",
  "key12": "3zmD7YYaiGssBvRnwmEjPPjSng7ojV2bqrdhW5cqFgBNhPVEE8KRDH28P5JjZ6tAjW2G2tWFn5PWJDHq2ShqpkYG",
  "key13": "3gxhYPiusVJRWdkgFweCxSQ6413BohxaX7X8GC49mq8F5Qwzd9D4fxbKjFaA7t2uyuri23fgnXFcppU8wgfWkVBm",
  "key14": "4vm1zGBYAyYiCtX4qqFnG7jZgRaGA5kxGXwf35X45CUr6fm35GVv5WyNSMvyZDtMwgrgZggSz9Qtui31DqFPpi7f",
  "key15": "3t7fVVDy5ueYLnBXxAj8FwF62oM94DMyLSR17WjS1McuDwCyKsfDZLWdtK8VfXVoyRcKPZGdmWZELgkQ7rMXaiSL",
  "key16": "5op9SKRo7GKTgpFybnvMuYjvCryXeS1pK4s8khAuc4YtAF6t9ABmYM8GTmoSLWww67W1Vzn6bCTWyENquccc7kQ4",
  "key17": "2nTUmwbJQBeXKYzRCXxkjCYwddc6wjaJzeaFWWNJYpsmPPbq3JH1Eqzo35Y4kfX3rhoiCmSKJtPGyusymHQ11ZzZ",
  "key18": "42YzDv3NZSrmUKbRYyYkR5sbv8Qq8AMz2qwsu68Kj6iFYasdyBCun9hU2UazqeTGNT6apSfws93kowpvP2ZbJmay",
  "key19": "4KDVXL8utp8Ymi8mWPqbdH8FMM7weX9Km9meMzap5QRKkXBq9Jnp6JZchprmLsdQRfCtnByCuWCPTqQfv2p9MJFz",
  "key20": "39SiBuRG9S45ATGeFzDpSXjXFSfNmRFR1eojg7GXP5dS92NG9tG7546cAgBGJa5uECgFkH8CZSD1AjG1qLorn5yX",
  "key21": "21GN2ifEdjBfupT5BnjvKx7aDzo2SbDoSkTcwxMmDhc9WJ6FtsKkRi597QXAXCtutH4ugVvBoNdoRq8c8AXtstua",
  "key22": "iKvZ8XY1rRgt1sYagKV316hv3NtBAhA2H6zmk5JGxEbVdTz449QhBViKU4nqqLdFmLGeVZwRrZcrej3UN66q5Gi",
  "key23": "5dKXGjWVoVVgphPqSoyCM8cbnyBHiccTw2nntfvSkPeUc7zA5x3kRR11HbdXGatd15FFzUMWvzn7rg3Qm1EWr7do",
  "key24": "2Nt9iL7MrTNZnTqYscHQYHqosd8wC4xw7FnUDHPvhUjEPxiK83cJS4tBp3Se67cGD1XQgUxjhwSdLVFA8XeYNFD4",
  "key25": "4cCEG8HjLwxHDq7R9fgA8CqasYd4XhAs5hizgRjZK7Z1MHMueN3vvzTKT5zpCEM8XvvCnTuid5iZSfz5niywLjeS",
  "key26": "251BW31FSZ4w6SQ2LxLj7ougvC17S5ihcgUdXNKPUqYd7o28DEN1pycXQXRybbX5KsjwSz6dH5T8WcvLf2iwq3w4",
  "key27": "5eTW1xT873jQu2Lp9nfT9csfr7tqi49NfM5NYgTViNZ8L3EWfPXJwNoPpe8YaMGebY1Z5V9UBnub51fGrZjbiQjr",
  "key28": "UuiMxtWsVtmwb1RKfNTnsiFkNZP8KEDEyYfk2rQarZRAdZ7njSFKNFTCSQh8Wcd1oHZNBL8PJ9eadqu2rzrvXE2",
  "key29": "5LCn1Vu2aq3jsTuDMW9UP1XkxSjNaTwWzxD81Q41p1MP5kanetA3e3AzKQXmV5sAgrHDdtNww46npqxt3B5gqPPG",
  "key30": "3vHbtFmpnCSzskgohcvgMk39R2Z62qTkiQN2t2S7syad1J9zKzJBTJwsSXZ8M2KJyaxY4tEYYqMasm5E8S3zbWrD",
  "key31": "5nsgWuKiPk8bUDyALhJWmWWxMjT9kWVMgF2jxgsyNXXZ6AwtLNNC16S5qyQEirxtubiHcUCGMyUPJnmz5cM13Agg",
  "key32": "3UjBFVFhcnqX1A7SgaesqYcyVuUSyjFoGn3kZajLankWX4681Y3b67NPvtRTRre8x5pGajeCzXWxdZ1sEfncsXXW",
  "key33": "3BZtUugMgywqtmri1QaaUsL5WJc7EoxrGeDPQ86KKXiBTCDccisGmUeTpZyUNRMrbGuXr2y5Ekih8ixcL3xjduBA",
  "key34": "2NXsxqmwXu9BEE2NXomhUsZozwgUJg1g9EBhSkJDK95mHvsQfSvDfoHH5ceR6N6qJYis6KkswDHSD2uC8w3UwfXs",
  "key35": "3McsYRcX8ke4VQy94fNVrnWnVLH6ucjruHqbhyDhyscdK8KCGvEUB58zqXAWQXYMkEPDoEYB2NLS3smMvEwYbz4",
  "key36": "Exo8ox8u2BdnjHEDSmReYpLGEKXzFiZvCkng7DsGFN5RjsePFyDy9pXYVJskJXbHNTKosiNrzos6honbNiTRQTa"
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
