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
    "2cHdguYoRf37jKs1v3KLEa4gidJpxviLx64eRHTo8PCTwLxcwPeHHHcrvoerzycJFWBag36CAPQVPxZR8AnaiPoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34UkGKnc61u1ez947uEWkHTSqf3aY1D36H17Z6h2FGCS6zgid5TbpXZ4Fuj53Dm5be8RHK2nqXKXRZdTQ99eZvDT",
  "key1": "4shXZKQAnSHWUEWPoL9yqj5UAFEHdYHKig1zaVHZpCZAxqxa3NuVhc82aVxi33oJt9gtXgQvoEkxuJFMVdNWjgDG",
  "key2": "5uHqNrPkejwprAJAqVnioU5r9nHLYLNGecK9CH86G616K6oCVUuuueE5arsqXMqR9Y2tS9fDocHCiAwFrSK4eXnt",
  "key3": "YPmeLkYXzTTDVMsr3TJTgjN45DzK3Q7VpebvVE661bhmyyRnKqvJujyiYZ3NAVgA2SoDvwaixzbJukdzF1GxpJ7",
  "key4": "4QjHrbcjNH6oKwfqg1M9fxRFgKEBSbtJw1tNgrf8Hfp8u7qVPwiy1fVMEeEdAYTZotZYdyzaVi3dhHGJGu1wWy9G",
  "key5": "5vQuuNq9Y751jhDBv5EK7reoB9Z25ou98anJUmFZpR4HTYDA38LJkAycb52cn4EWPFBRc6GK2n2Hjn4HTpZXqENX",
  "key6": "2ZNqZchChfhqHrtAPTtg5jRAyetSjGtaEoWkpky7y2pB3ZjLKK8tyvHJHpKAyJdxRcGEWSBk9PXtZU7edxoC9Gi3",
  "key7": "2hy1Ls4xu3gjx1428yNQFVa5LpqdwDVVacrAZRk23YSgHDDMizuFC7qAxL6ScuG3RFVLzhvjvFzszrnW2CHjWX1n",
  "key8": "3CCwaeBKyPKJEJc1jSMiBvRrcMgX9vEvr2P8rgBnV38j6rhHSaBExbf1ojBozXTexPvnCVLpRHt6XJg566asJgu",
  "key9": "2BpBybQiLk8QjtpiGEgR7SvW2LzAZHrQuHoCLKy49USNFdMRm2NNVDtJHwo5HzqGd4mGHDSpFWhh9yXGPoiDGqsk",
  "key10": "iqKUeHPoisfhj8THxBA3BVNKeoVWsVYEPFkX2d9Uz6wVg3MAwUQ7YC86T29wSeZa6nEYREZKsdSiVPBpP1rT1ZM",
  "key11": "LLpkBboVDcjNox9FttLMmZbnPkPGmwXDST9D5MtXVnpDLYH2VFUnZgNXyUg6SrquS23BqUzUTuzfLHjLnfLnLrf",
  "key12": "2W5zDCJzjcfKZd6yBczoXrJojbih1fkVrtNkavaL2AJjNM9jMkqHYNbM7r79kzGLERNBG7nnfmQPBtu5jZydAxbr",
  "key13": "4TUMpWy4Tm71bEcQXLuzdutGHd9y7GpJ4Vth75GWcM84CFK4hz3XvRbLutP52KE3DJvUr8nTwQzvs88X3DrKBfAr",
  "key14": "RrM9BiKCys8S9MX3NN4QySugzydEJ86K1pVYbzUB4TSWM2DRGTDw94wnaeUQdBMi8xrzZBstft9V5JR99kHERy6",
  "key15": "54Qy8R7u7PUg7Q39USHmLq8vfsumefzFwRABeuZEVDUjwTaXhkFhTTDGHsq3WCvw4EjW6XNXtehyyfcGHP5EuPqU",
  "key16": "3KPBJPe58z6hhXz5LkfbDoxUuBgq97rQRo12kdmcWKbkQ5Rp9NbnXj8RhbwRCojmehEr3zsSxeXF45GJXN7J8dMc",
  "key17": "3rFLvLne8mkdjSk5E6yPPY8Cpv5WtwYamx8MM3snWjqVVpZ7skxFer78S2MK41UahAKjLVPB8nuiYhDxDyaW8Cv",
  "key18": "4Musf9h2nCQTeni3CkbqEkUtFXjAPuPCbzKmWEwAk3BWBXK61Mnvsb99AkuUaXSdrgwT5DLku1QgVDRP3mnxF4sj",
  "key19": "2uZMen1UT4iiGEGZTM9PhztsyE1AzLu5HMePMn3BCLYNUrJmkj4G7Z2KCFufb4HZBhgGdT33TKvDqB16B1qh2Gqf",
  "key20": "4VZZENKjiZGXYfGZ7AZB7427KAhX8cQKRA1Z3yyS1RDBKYcJHHB1NfTrt9xDUxPqC5TtVQpTTkBY1Ub5Yv54eNAz",
  "key21": "HcQvcd7E9DaR1Yfj3FZfPQoC6gZPjazjKWTAkTStZV22mdCk6mTZQX9qnrQssTmZUibWfYDsR4n4Sg7B1DRP2L9",
  "key22": "5SASh39xtEGsAG3HUpHdHdAZK5JjtQ8yg2m1EZ3eCn3jMpoMZqqmwfsmmBBcXDukynnihZXZoWW7nFpxR9KdPtF8",
  "key23": "29sbv3hZhwUuFA62yED77n6m6iJBsHH9damucWaiYxu4TSFG8dHgY6GRkSgE4cggr3kzieNdGb7tiBNcGQsumfdS",
  "key24": "3Y6mUX5ByJ8ZJrVMSGiapwFbuJb9S3vQQPRnRPZDgRYtkkVHqZQjn8HsiZoVH1yHoGLtg3B9emumRmc5PDEBASND",
  "key25": "36fYa4VJjszSWTzWcEvabnb5PF8Hr5UGDjxDPudXPDr8pdV91BNVgwvocfWR1oWSFayePxuuk4jRLAf4U1WXFXPo",
  "key26": "rtF3wijxFvdf43izx1rQ3zP1umKRBY5sajkAALKmjC6ghKmrHoAgEo1Hsm1V6Gp6tTmKFsdbAfYfqWzb8gGuwuB",
  "key27": "48txcgTARJMXCum5a47eKzd5jByBK5mcNc4o7ySiErMDPwvsngn5qWFkGwAg4Mw6FrWKVfRHVfuRRAHcoFTbuJzk",
  "key28": "4sdMnNjFFpm95BGzeEFNvwrPGihunmQLxQWM7k6Bo7Ki3ZBLykjUob86KWcwSDNDUDcaxLN8SVaDJXaJpzDvmc3p",
  "key29": "2qLJT8Gy91njYytaMYCH6BQWxsPgJydj8pUgbdN1U2weR7cSDt6xXZavcebyTzVZBFXz23oHPb8Ukw7ETSTKaArb",
  "key30": "3ohsKMU3vWz8QkGEAJoQBdNL6LqX8k5H7WaxZqJ1c9E8FJcRZHMQvT2XfssKf3zFHaRrC87o5FVHNavwJQUryAgR",
  "key31": "Pzx81HLBQAUmWAyEBTx7xShznKLnf8MXa9MQmrcDxb52MLkoMJRWTqtGPhBUG5hdupWFGzq848RqDP9VVNtagop",
  "key32": "5vEdf54vP2KjVPeG7DaXc8foa1gYuC5Lcp9KrvzQUSQKw91ffJ89jnrQ8tgUNVdif5YpxjCCkRL9ckDNVxo7m2G6",
  "key33": "2H5mya5CWwya2k9tzSCZukg7FHmE9aTij3ekq4eRY3Ba7T4bcjipn2dDXHf48FgHaqfKuB7hUvRQsSnwGYaCy1Y5",
  "key34": "2DREXDn13i38AYTmfVGj1xTrZ89Un5B21PmXui2fmCFtSeUx1xJ2poPxzfmVz1qXEXEmGfPCjozNQYHg96PzbgL9",
  "key35": "61Q7hGkMbBXhC9sXb6NUJKbuZoYcudKt2FRVAKU9FTkQyuimT1NE3Vyqxdfdw311Ys3iJeQSzJNnBjLXdfTNVtFH",
  "key36": "2JoMYLoTLoptGnXwfrYwoRqL2osbh1EvEHZRS8pfb5RrYMoSG7yzcYGZrNHd5iVr6PrRvh5CuUurZRHUh4nF5arh",
  "key37": "5QUvhhHkWq3ZF4iL19j731JsaKpTjKFgEBpm92XHtPM9V5fKQ6CjD41msDhUjhpMGD836mmRHifkhSNj8gXsyV7N",
  "key38": "4fAWVizS6zwa8moZuQqNQzufNZBE99HFX4zEkxjKY5eKXRJiUx6AQQxWYeojF6pWmvgpNmSD1kaxu4t3G2jmxDB9",
  "key39": "ozZUKc3ioSQ7y1jnCRT5eMcTb7dhdTXnv7qFs5EQRffbC1jV3gmgCBf1Lav6V424sREEaGZQLi34C2D53PULYrH"
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
