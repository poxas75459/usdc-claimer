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
    "5whxCDjG6WEuWUy8s9SCuwNvvkqEe7gtSkxGptVtQEryxtuNZhe7fSkAKeqnFhNN3BeWofQMgpapJrjhM888Jzt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Axr3MRM2zp2wJ44aXgsbaBAbzfkt9s5eqnNaZWPz1TgVQe7ya6YExEoZRLoaqARhnwHmyMRXJntYuLMytwbLRiZ",
  "key1": "5triN8ig3XR2HuiGyaPafwbzVep5HMEw351VdvSfJyy5SgAk8gbM2JWzte2n72uKVzSEf8RC3VnByL53cUnSwvFH",
  "key2": "3bG6KpaLa8NiYuQdLi5dGUDEZMKz2hUsGd1fcLEeWRnaheveDY91AQ2o41fBn7bTV4J1b6aisUYAEcF7gCH1FDE1",
  "key3": "52Tpo3ztQg48fZDQ4J7t69e5B1MiWZpBMnCs2WTFUh8KS8p4QXjuENG1xZLXGb5X4r4gGBUdbcVkevC7fM63W29U",
  "key4": "S8u5FzrgWB19cdJwF1GtGPJV9nKoF167588TtFf968VxMSxHzbGYKbeJfbkR23XkU4CJ7gqoUF7nUswgFHwHXXk",
  "key5": "2mLCcP2kkp19XgWfPo1ixX7oNLYxZq3rzhrRTBmzsL5DdgVL3HGtWUPfZqsytNB2vAViGWCaxSKD7yaX1ZjsMA7f",
  "key6": "55Nkn2d2ykF6eXwGWk5PmbTP5PqAUTQgNWDE4dS6VZ4JoqxXz2n7MohmxykMid5tLUgxWmEY64S6DJV6QaHVSa7J",
  "key7": "3VniAxKx74L9q9yR33ryUXNoxtAsrvsGAgKkoPHzQ64BrcC1BD3A3b47gjgh93HxgKTWBU8FSNVneJ3Ja2fFnjoS",
  "key8": "3Dw96ts9C3inxTUTSgW6sn7yvC3D2dynkn3gX5eW2wKFHtVEyzn7k93Sh3WAwuMGDdMLAS5HJRnHr8LR1ufq7c1b",
  "key9": "4TmP4N9EGYRBPdjYXgZjk79vUFJsANuBvvp4rGtLMYgiTiNz9F9k2F8BxkW8miiLk3pcdshLw6NGfuHdVeWYiQUx",
  "key10": "29gbXX84JXE2sHcavprbR3nETicQENGyEMW9hLUYEzgASHpCRFJvstLV5rN7wRQREwEfFxmUYAgxvVcYYshgaoTd",
  "key11": "5VCMGPrEUiZC33qbfetyD6t7wS27B8rEsSikyoERJvWaeS7tnAANoqghywd26dLpChhz5YhNu8LbU58nmbtDJgxA",
  "key12": "hoBsPt7QouXj4bruaScn2fe2rfV8kSKbG8wbEpcTwejZSqT67QU56eQujeQmzXZtjic6n6uppTq1GmMJyEYNB4M",
  "key13": "5gddLRkubSRkyi83BB6MqT3Cs4w62rJWjn6CusLtGS8tbzovnomdPfXdgSbdNgScMwgh8cNQucpUR4LwKgWC9pwj",
  "key14": "df8wTRma5VRbtaGFGLByYeHPkfJm7qGsQq1gfn8fKsfUTiGJfe3dadvqYyi7Ej1BuGJEKMTVCJtqpHsA9e6Lxzm",
  "key15": "5pgFFsuUUHeDUPPfiz5qrSGi32HcxU2Qxtv1LgoNmpws7PtbTiEk7maYQwhR8DoivKSxzzsaZ3MreQV3NzhAmfxg",
  "key16": "2v21Yf7uSm7etMAuVi99N7yJ9o2wfYQZYNLrhXUuqJ4riv2zeYXpy3ToJ3gVZdLZeBKQNp4Vv6o5JAE2zgNvwkCo",
  "key17": "57pQCkLchW8Vzqq4zdSMeqgZN9xgzCFqkRYCtbaD3AHuV8EZCb7cT9A7TPxcJd17EyXUxbvGxPzFWz7LHjRNTFdQ",
  "key18": "5yx2jWMv13vdDtcrmxPRGAtMVytQoYmvLKf6BXCqJGrpJkZ5cDCEwbAb2jyv2T4VDxJdA1tM2sp4RBcs1vwQZd7h",
  "key19": "KvQMyjvvPRGDWhCwgwiUSMzW2wRXQu2dvhsqvTBwcEtv9zxjqVEW4QELZ3dZWJ8n3XbTzPpRaYCUgntv3DB3pf1",
  "key20": "VbjsqcS5kzuVcynwh36oAGHZchTHwT1Re4Bj8iHL8KpNy3vf5iaU4zFrPPXYFuAtYKV9RxrJ7SkP9TFDcJbtKCf",
  "key21": "2B6c1zHPPF4oktyvHRiZpjouGuFaPRgpBSVYN3SJs9Lck8rqcdyMVAiCpyipqzWMc5rpYdpy6vgpR2NsVSSGEK8t",
  "key22": "4XbwLbrX5R9Liev71FDBFv9PPEMWwgwgt3nHEu9xSfXBCw1g3pe84mjhuqMk81wPqvzApjpghytJfk5m5oPkaN3x",
  "key23": "4fUkVw8k5Zt255s6vQo2Y9hhryr3ga5fNwG3DTJauM2dKMf5M5RHjcTY7Ek6qiScy3rKKNAzN6JiDSUjS3rdL36b",
  "key24": "4BMCge6cmmFBLLfFaKU5Y6JEy7KthXqnEkMN7Rmt7EKtX1RC8JwmEtkS1KwsNXrVHsLvRgpDjKQzpsEnD7Y1fMZe",
  "key25": "5CQfFhEMJ7pGLJnDhz5ZuAvzJCnZtsm1hQjd3riK62S1mwcdBKWEKNa9MoSjuoeczXdzbsZbTodxuc7ETuM37F87",
  "key26": "3npXerpJ5jiQzA1XY8ND2rmHF8W7KwWXRGjyfFKUoofxyyHkCKHN6EejzZSXkHz3ZVxGrr2M3ehnu6zDgGzSoSXH",
  "key27": "3PQscNDYTkZhEncaeagyW3r72FAXATCN2qhzwumZSVG984E7Lzt7Sx1gKv7dzvHEuPd5U3DTbLHWk8QAnx6y29MD",
  "key28": "3SSAvfHnhqWy3eVWjystTmS8VxMmk8y8ZaKJatRrWDHD6GBfbCWMgbgsRZXLy5dX4dn77RjzHckGkV5mWkQgw2dv",
  "key29": "3o7umNvVcJjCw5kkZWPvoYRJfmwngiQHSZzAmS9d5mQtwSwYKaFQXp2pUNtDEPxSqmVZ3mEowk7rpqfy8jKoxokB",
  "key30": "5mZ71ojei3dp2WL9gcUWuXPjvtQKzZmk3f71MtRwJzuBsPewterjAb8VeyzG3A9GKft3TTUr3k2m4aKhqKRLrek6",
  "key31": "2TB3AhZPg55d4DuG8Bphhonaeg9StK7thZvkA8unBxuvdhqgGQqKezp7rp3HFfuxLstnPDfYXSKaq1NozaB78J2W",
  "key32": "42CUrBmXVshBnHBfEZxAUR2gaH7SopDFvax5DFk86xEwW34FVeRzZWeFaMDZexABJRrdQptx8uQoX1t1XpWjKdVC",
  "key33": "2n4wHMgQh6p922v3FsDzW2JTCAURsVHbwj6b4EzmEfziHWYfSbFDKLzMR71GCD3M576b9Y1YYC5WH7xE45wnRr9P",
  "key34": "44VRp6xdW9C8vgfqETHw19rmTiFGm5QRzhVqFfYzwPSXYUheLUo5f3Uxh3ZavH7CPAM6TyCZmZ8u97hmP5p3vV8e",
  "key35": "35cRy1j7eNeW7K5c33tTR9ycjrn7Fh53QHcRgex9DKQ7n8vPCuhmEEZWXakVBAPygSc5jRpR9P3EYbB9bbVmrHZm",
  "key36": "465kAmw12zCRrq22SVSc6FVqoD8Y9UQxfEQWV4jSZocuyoa8FTf9ZemV4YkH8iyxrXct1SPNhXSryi8a5FyqM8w3",
  "key37": "2PYhaR2UbJbNZf8DNe39Qbzk1rHqAT6CrLVka9DgViLRcbvoLA37EeFReAASvDh1L4xL5sSySQCZNiw5ce98HnkP"
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
