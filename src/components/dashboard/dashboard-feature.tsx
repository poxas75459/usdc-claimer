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
    "2ZZHQEPwzn9WJY3VBg8Nz9buyjmQQuQYWVids9p1VHw43nv7HZo6N5GeVJgqSyGjT5LJyNgr8Rv924HY561oNn4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ogeja2RbNnnQ24p5cScodVivXnVpA12hTL3zP8jNe2jPqhvPTowDLZU7dcziwYeGT2EkawRGSwAcBqJ6so88B8",
  "key1": "56ENm4QceEYdBEXHCqepLXvXkYDZF4qXFKETShwD4gSUtdqBTRYa5SboFYX3RwiBBVGKpiq95846zRfVYu3XjygF",
  "key2": "keGfuNBjf6RZ1D6MSZYiz9Lc8m8wR5zn3z2ccGK2UDEZwqi5e11hubDy3JEhgqwWKDAR5boEFmLuVZN4e7F7BVP",
  "key3": "5Md3RqdafJjzXqkibTEnwGTaHCLjGbdrsAHUvjewAdTaKj4uKpS9DAXFPVunh8D7U92WuWzjznGZVePBJVubue7T",
  "key4": "2ntYSjqym5h9t9frA7hXFf4XcdDjpvcbPhTrCijY8iKxXthXTwLZuWRCm1Upx8745dBFJFbzTLekZWZxTJNxkaou",
  "key5": "4LaeXGYqdsUqEK1oqrZFsU7iyqEgQ85MYPHCycmLQRj9YnfVCCq6Ve749pN8GV9f5USg2NJAwijwBLYPCL3yauEk",
  "key6": "229r1FzjnPxFBWn2bYkwY7sdXcKYfUzGHLiBdXim5rbR6XxgX64SvWoKRe6KrcRXTq9FjHwPrvtMsNxhK6kZfD2c",
  "key7": "pz5HpTuaQGLTt3jr1TdPdxHMCTVT7u2YpxV5erXK7zobdX5pYLJvKYDczYiKNfXo65WRY2DutvjY1uAyYJ5xBdc",
  "key8": "Y6tZsWXKUbEnFjV6WkHnzokZHy3hVxAnub3q9H99aZ8uo7WCYoTkvf3EMXqRBfKtfbh2g4Nb7CfFhPAHHEnEtMK",
  "key9": "3bkutGgceBmRofiX6Hsc5us5LESJbGSxAvTWMQSDnp9rJBUkNsWwQ4oX5PnTWnDZXr773bYqYAQAoh9DRq1CB4MB",
  "key10": "67CKfc2sqd9wew5tLzcsRNYtrdWJMbMNhxVeR2CuUTpnmNJaAmE6xn3YQJvqswoRY7QPUBa7W38ghYmCkeWGvdb",
  "key11": "4wdrtgdhvpZqExhqCQweCwhTzXRnViagvkxDfK2hRT8gjstcMPFAE72dpw5rA1h19r4ZrhY73c76b5tuSWJRqtBg",
  "key12": "4z3v5Jz2X1od57SA11x8NYVd9p84XpA2QnDtEQ7mmSo9NobBXwdKrr2SHsFK6wFYi3e4ZA4CjstL4A2fnTMhcJ5X",
  "key13": "4kPwcmkWbpdapT6QUsPvz1rPJyhEsyupPw3cLmP884FRxuPQGGtU4o76jA2aZaSq4f49vBgshsDPsHQGkXrUGhXD",
  "key14": "3Dt1MGnsM76XRSMSLuaSnryq7BGJc54RR373EjiPw1h5erKtBt8xUPfgmmFb9hnTVepeXamF94gP5xs77ET5G2RD",
  "key15": "27x8YQL8mUQakhnF4j5TgDY3JDhoxBPNKbsvsTWAYQ5D5pU3LLrmKMWdwokwToQ5nXt1aNzf61e3ew8o4AugWwVw",
  "key16": "3ZeKrzxs2FjWdrqRjs8v8tHHjxSiYqe4fy5NJrkpGgU5nRQeEgyym67Ukn2j2t8Rvu4VTLvFtrJRat5FKS39iTB4",
  "key17": "5uLN1hXYEvHsKA1sqP2Js6fonjztjKhpbTE2Dm62STN4w8QryDhyFNjYdMpjPVKms2QCJTQuY6ZwAs6Xkx9U6J49",
  "key18": "3BFjuyFhnBdZEvjB6rsPdiqeegWKXdMMHfnvHEyUZXi7e8bCx84KEJ5ZxoMKttQEhZhYB5hZPb7JGV8gX4DTFZux",
  "key19": "haQPwvsQ7aqQSGQSEdvJDbJVViY9x5yFjDgozvFzs68KcL4ab2U3r4dzSmQiVvMDqpi3sDnw4pyrNpmgvffVBJt",
  "key20": "4tFji3HspqkH9a9JueePq6dxJRNnpr8HEEDf3PTuoCUkgud4e2e5n1pzDZ4r7dppf7cDZoGoCRHXKo7eykBTbVcn",
  "key21": "3deQycz12NyyYmk4NTGQMp8UMVVChQfM2AGahcwSjJFVfhTEjDmG2b1ZwQeAoQcwPMxxcFTmV1H2U8gctsET4nxW",
  "key22": "5EP9ugFY5Hydk8xqNVGetxsHT1hMrr6y6TFwJBgNCW8UJ9Ec6t5YTSypignBMZSPPN9hbokdkgYT4fPf8mwnQyCB",
  "key23": "2WWNkj4ZrLMDbWuRiH1ameE6MdzXFLeB1sX97ZJ45dLEe9siRjGMrf9AEA68kP9mcXHLVmC1JzZq8dK6TXL5y8ZT",
  "key24": "2dLJQRGLbvYP3sTzpY2KZXFcLYR7grQv9pDnNKBn77LuvoTwzYhtgwBir3TJVTcXLNsWrAKE4E27EL1A7XBUfUUK",
  "key25": "5AmSmM2dGqZTpTdS1KMzKTv29o16dMxwrF7HLSfHpaZWg38LxfXWUAV3LAe36Huc34axybjD2qDgmD5hHzWTmLAU",
  "key26": "45zKAqP2rvivLEMnsA9WTtWyu2APEWcCEDEaNSyaDrBXuAndY6qG3ueuVDLHy1ApbE3es9jdwE8Str89Wau9rBfU",
  "key27": "35cafwr99mnssKBoG45547r37bF1fKLodPTsshuYoL1YeryM7mi4Qip3dZazv6VXgDwFDpHGdDeUMpK4dB6akD2F",
  "key28": "72FexbFqARAdoCh7GkTvRAhQDN8TG18uSP2WxNS3ZhNQLJytZxnRvAqBUFgDj8P7Kcct7b1boNHq2YkscxF4kQX",
  "key29": "4ZNEZTvaBK3KY2RXRxbc1ZKTw1s3xT15oURQnnkKwYWSqYueLSYPHQiXNwtKkXmp31T5nXUVefF1WJwvb1Nu8hrf",
  "key30": "4P9nuf3FJ8BeCk5xvfPGe7L96T7kmdk16fNb7NKjCXaXzBHb8XXwAC3a34c6nzh98yZJqRcV2B7e2Xgtq7bHnech",
  "key31": "EZWMFpPXdCPhAT66PBq4RjwrEpQFU868rkEJLcdtujWJh5xj3TWGX6uFwvjuRWrfW5sZSGycBZ4BME1FBFiqaQf",
  "key32": "2ofjGY4KTn83F6WZTh2wMma6jgJBjgh1x6nb7XQkFa5CUqdcGqbvdYApE1bciv98SHpgXYZx6SarmqGQqwYpGqHx",
  "key33": "jtZHP1hAU1biANMaC5C8PqpekzP5BEvAmA62fGXQtCAvrrRzNCqggqHBVffnYmJFJjoPx4UWJ4HMcRCR43kqbQC",
  "key34": "5qkcC2HvXRn6tEPs6KWqWRxnNvFJs7TjC6GH14JtjRJuqFVUmz2sAANJi8Nn6wSVme9j51VtsXNmSncP4hDspEbE",
  "key35": "4PxKoaXE9EdF4DKcz8GQ9TFW1uEgk53kv3DnZYmZsFKq79ehGWHErytsx4ceWpsDsWKTaLhKfu5pP1qJwHJUM9G8",
  "key36": "5nnVUCWkTeE6tjb1Nv8VuSZTTS29wqBmEsnqwNa2roV4jKmhHhDepunoWRYz3GkZA17SGVT4e3dCAA8HHzhVmnoH",
  "key37": "5m3bgJzDLyiCVfn2L15qtzS2JFAPJh16fhDJZbbxdj7nqb16nkUEwYcxWZnkTdQ58Wckro3VKgf96x1vUfSydxcT",
  "key38": "3wERWRkCPGXaQ8Eb3sQ52hUuxRani38MA999nLzEhUzU2vttWzn3udsd5124Ppd2jUAM9aL73JmxwQyeEi7T8VkZ",
  "key39": "2g8RfShaxbKJ83GT7imyDxcdE7ciy5ShcZNqD58DW9PWV5cneeLADpZRKncWmZYN2DkX7QHnZgYvwv2a16kXSG1S"
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
