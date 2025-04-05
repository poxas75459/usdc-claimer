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
    "43VhQURVnxQ5yyUSVQgLz4MMbHm8P3ATcMAP6E2gntDw3d6YwhwJL7rEkQv2gjVCo9ojvAHXG2mZVy9HHd5AEgrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4igy8oMKAAoBTcCNRp4z2rV8YGPNhASS2vJz7vHAebQaiGbgDs4n74Uu7C7XdRACq2X3Q4Xgy8BHA7J9iuSUEd51",
  "key1": "4aWmcY1rMB6N9cqFwaS2qJXoEgSbrnny1oJTxGtnudtTyQE2BHaYLD5pbaZMDa2chDashsLpMPUNyuxrU5wQEG1v",
  "key2": "2DhEPxYcQHRBPgakuojCmhM6mQ8rsPp4ZArvoQL7NiHHhu2FivPxeivTfGRKct5MBtKKCkxn2q8hbryas8N8koDU",
  "key3": "4HHNrCkmW5JxUTMKktvefhqDgx4tWWL1rttb8mBywPCWc9zNSfPaPpWYEQMKZVT18mmLWuroDwLYBnzXdFoE4U3X",
  "key4": "3VY2K2XH61Qn57KZm3iYaKT5FHtMMBDurkvZcijNvNu5g4sjZpXYM1FHXeFUNK43kTZkRiPZ9GmgmFfhjiGvhgAB",
  "key5": "51aNpvVqc6drS2HtaeMeNdN4LqVWQraqHDnTLupp6SwNQ1mVSjJpAgx5rXwmV1bE4LQyUcnLMBkPvjKHp3L3YAUb",
  "key6": "35MXSqG1TN4HAgY4Cy86EKbDxmGsvopz8DNACsCGYXx4Yj9kD3Xf34afcut65YbnffwJfb2Bnj37Q84xxequq3NL",
  "key7": "5qVEQLJc4bm6hwSbCd6yrCfuhUD1zrzSSCgVSht6fvdH1w6KqamuifKgngRby5uUN4gjLtftKDGmSGwvCiME4J88",
  "key8": "2vbLcoxtp4BicWNKxPaPURHMGVWaydB2xsKgZGmUYL9We4EH9dsQgVzbTxzjLf2Z9EGJkkKSSyoceCibhsyXmoi",
  "key9": "yQzh6hjcLBLosx1YzjEqmzF2TCy2dfRTYQTwmyuzTSXTm6PeJYJbhXYZX9vbHUNavCET21kpAs5k6CPnXSAiTNj",
  "key10": "4ozp3DoP5nhtQnKWGvqSpSzX5Rm94Uf8HpYrQyN8NH7u88NFGQfSFj6bDDf1cCxXmpohGQ8VhAGrgGHuyzr65vu7",
  "key11": "5gE1yY4iWy85LtNv2yGHd92QdhU28cTFCZdovTwMRgHv6oEvnB18XUzDMPdQ56zhoBa1qb4RJ3LxDJUbhVwgNM2R",
  "key12": "2i3Pi72om2mHGtjpWnVJiUKD7vodG1kc3Cv4CinPjmdAUJTXDvFFLmn7irfB9mkrBnEKBgq9Tu78KxCzv8LDvLBH",
  "key13": "5uSEjaiXWFBvfpJQJbHtSUHoCBybfuuDS7EWfVtqS9sQJC8VtBNyTtArUh84irwoCnjeciL7W8Gy3MCcV894Zz26",
  "key14": "3HXUEEkASLS8ZmbQ17PcUxHET2XGYsYDZeGQLqgHPPvCfvFpkKPDwsJ2h3DfvUWeqaoEe43ig6DKRoavgxi38iiW",
  "key15": "KTzTM6XqZsYCYb37kC3kit2nC86ZMFin6DMVhAYX9jDme6u7ssuvNVDJdWMa56eaa9V1xR1UvFQjLBvMKu7n6sN",
  "key16": "5jC6niaUmA9kpxXQYLHTyM2iSszbhi88PnD5Q4fAPYr8XGUxZXUPPQv4En3JDuzd8ddUMJxtKxo6HxWUVR6gwSeH",
  "key17": "5zdLyhxhecWs9nZhoBmfkR9wXeVyZUVFKhqDytV8XwamUyiQophyXtwhjWcLSArV9jQxN4tqKWtWngLe6FM9XvjS",
  "key18": "2c7ThjSpGgR5xK23oWtJ3jxbvtGKjjnH4V2zGwZmniLxDUkWmrKY5hRqaogBhk9ZqKxX6RhCDyJTrdyTRfZ485io",
  "key19": "2qt6pKWCcMHNLXRfNwCM5becrZdB3V7YFhEV4XCzwZzynrNuB5J8pS5X5s7SAgiTohJ7ACWeWu3YWiGs8b3DkiM",
  "key20": "4L72mB8dhm2gLtBPmtLNasb3E2SKRSwsxV7kgZQxvm3TYB9DXPeitbi4K2wqAnQvFyuJgo3c4cyNGzs5GxvRWjLH",
  "key21": "38UzFZjMR1J3yZ12hSSUw2pECVjXqzdVS8YDV8DnZt8Go2H1Q7RQtmFU1k2y77WiWgnXfcek4C8rEaJZfCQJez9o",
  "key22": "2aWHL2gkWSv4SkfUetmjgwmAoMo9QauymAokyNhQQqqnK5Jga7zrp3BeVTL7jpMwBGSyu7WP7JSTvccaggT5w8VN",
  "key23": "5HFhiygjSQNxowTT2CcyrR3CRyjQFHYyPwB4WRocu11wMid9tDZ5y19eZNaL9AmfCLZzg8Ew8zu1Bt7MrHsWfRKx",
  "key24": "5FZL5NjA7B9UiG4BYRgYE6137gSsWzRivvQQnnhVxDGv9jRWmaBXByBK4MQvEgXJUrGo1puho31L6rsNfAxYRFtq",
  "key25": "2V8pJaM2bwXbZZ1zLeddokFLYRtfGUMuJHTiTrKL6SAArowFEwD4ksENKeTRUcnoYgz56mRSAAKmWU6QGQNavU4h",
  "key26": "3NRpZZTtnUYNfc8hwwEEUUpDwpKV8EDFco5dAqFfyLrzuhM4Mr4GYwgjEzU5mxSmyzgoiL5W7wrTgCBiaCKKEoyQ",
  "key27": "6SA9t7iVr3ZUa5eKMrdGwA6WVRFMBd3Y6MvFX3bK1upR37enUa42KXpeWFWcQr1k5unYazXkDgs8pDGq1ULuVz9",
  "key28": "TcsEVMk8EioUv4jKwq8yptvDuAw3Rc5AguQmTiFDwdHxuvvLoJDrkQbaBR6pszcLpnevGritR69YwUxnUQmadAx",
  "key29": "4kr2994HJNUBPUsMnQWuxQFbeToRgikUQHh8ANZTFcdBvyN3QNXoDGAVH4JDA2Kgv2rtm5vjFBbJEV8VuGvHd3gp",
  "key30": "33dr5RrcovqJdVWYK29rSXzc2HGL2ZMS5N7JyJjeDqpoCGJ4cTddLNU8zSDZaCMeGBwE541t37Qqk29zvdofGQaR",
  "key31": "56yEQovG8Xg51eytaVRtMxT4KLmu7ovDecDP9cFoiwibu14Szox6kUMd42FWHoVuT9bbyz9z4Vvn3zFnpeUhDsMz",
  "key32": "2i63m6MdfgRr74DiB6QQMm1hDnibVBKqebB5tJGvD2x7s3V1LrPe33gUC2qPi9QDM3YUeWB1MNP9iUtfcshYjt5F"
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
