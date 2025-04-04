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
    "7HU6Ext2ZBzAjuhXufh1XF9Qeio292KoeXPNpBAkweQoYRW6UVW5C9iYLrvzxKdreAGutP9tVCjTVdFZeHKsxvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b7tFdxW96Dw1XVfXMzgV5Zt44M8GaHGzxMCtZSNfg2mFBZKiKBVV7RxSDc8jBgVPkaSc3U4Xe2JTBjkj6nZDSW9",
  "key1": "3ytppKoQXrv5goXJkFnbH3t4yjpnDon6PtCEZSK98ZNttrnaPqcCKnuPBqe3TXzQNjfZZ5kXmQeB5hCv4xKPM9fx",
  "key2": "QgPYyFDpZcSVLQgXvszDkmAzULp2iH973GgoYn5qSzU58nMtNLWsXf7t9V5hHq56KabRT3Lqf2yfGjjqqUcAvdt",
  "key3": "29EAjQnK8nHiqwC53uM7CZyfMaDoWtYFdiKVXTTVD3ast7XcCCMTR2dnCxMbT9P3L53SYnXHv1onFYDRGdqWgvV3",
  "key4": "2WB3axaygS5bNn2cddLn1kujDLVvShsBYA2EW5vG82BWTBRHddyXRif3s6ghUWkFzohbtCNSuJwR6BF96DCZCju4",
  "key5": "274gxnBFGXvS2PujWiFg3PFXACLdPBxs3q453KXnhC51Xri6HcqRPHH3Up48D3vzY1vvz21YLLianm6QSVHDU8tF",
  "key6": "3nax74QUo6JfNixKTZ899DDGp2ZgWGXNyKQXpa929hwxxg83TLz5Lyk12k2vg24Vk2UURTBHkNnH8qTsSqfGtyvP",
  "key7": "5m6CNby5iStsiLtrfkgWnBEciuuUoYa4sVQrhXuHm9sutuXJCgW4aQsYP9PzXMaXNMyMNauSNfXcDJnFYfkiG2PN",
  "key8": "2AgbjaSTLWo8UnksrZNTMPAMKuYadnXt5eYbJXt6M7xjKZDCqnuVWq8gmXkZPYz2V45ADDuh87cK3YTgsskedqiU",
  "key9": "3jh3sE5mninpJwiNY6s4Fk128sVv73mUwi85gomk454xKXkWYvzR9Lk1w11dGwn4Be3MFU8CUTzZfBSuWuAofHwx",
  "key10": "4VeBbEQmfNyFkq4e55jv7rPyo7zmLUaXNKvRv8Kf3nY3KjByayYRsYBEB3ajQjKsRead8yWvNz5V7aPtmm2SpcSG",
  "key11": "4MCsYUHmMc8SdXqSrMJz9NgmaNV4oRUVKWBNzoQ1UF7K7dsx1QNHAigiXEjvauDd71yCMc2Hxq4TfisCCx29KpKq",
  "key12": "EqoPXyqx5fDGbuS4RFY6sWob9zAgjefWRong3ixfeCm8suubuAgrpv5tt1dbkKCkjNaztDF6hYyYVqreNYFrnad",
  "key13": "2bYu6YEwxbBRtwgjT1mvLfywNvstHrV6sAJsnuJ2usJyK5GKrEjwwHwHCoiX8iV2BnhDisRYmFR8gQWxLLUEyrL1",
  "key14": "2yBrjxyo2j16JTmrMr6ZV3a5Znxjwk8GkeBvohreULMLsUoXGBhxeeBt2zsKPkga2Yta7TLdieU7SqRvGD2sHs4z",
  "key15": "67XwFSvqippjb5512he9QXn5wJSN34qPiGVZqFinb8QpUfwUNABt5gSmJxdYTmDwuLC1wwbYy4WpqZsGRRnQjCtz",
  "key16": "5aHHLQ1T5jBzovE6WqTZq31yk1HmoYNx6TYukNrKWKmiQ49MA8zpfV4ae31gSF6LYBYwczs3zq9AcaW16RokfFoF",
  "key17": "5ckbfj1r2SERijsrHW4Aju4qUoHuSZUtMbwMM9ZXzNc5DSzq2fNyUP7xr7zBtRGUEGLYgUnUizCtWggamNCYLXS4",
  "key18": "pHCQsPCPxwzcP5jafhXUcmtkHzpsFMRTv3xZn4h5r6kdDiv8N1sNywhPimb8MDPkwNJ78KwPnqdCbGonBbe5U3S",
  "key19": "329RspTL6LeWGGHQu65KtmbnTCCrQH3nsro7uTM3gLoYzJjoNv1YAfGx3LomRDN6jWdm2CcpTBegD84ybMn8wSxU",
  "key20": "5N9jZ6sAqYX4MPkmFgAr4bSz2fYFekJpyw47jUtkTfJH4t84FfL8V9AToatnE3EzNnaD4XZzrok687NJBLLEreuR",
  "key21": "3rUzhj74jTXdeiLAy9NtEAejEXztVUru1rFMpe6HBciq4dQ9c4vk3Ua7e1p9Mox9a1VT9NNdpBnwffmd5M8Thwjw",
  "key22": "3XWoPaYrJ56QJRZ3ZitnL1w7eT5XbDpQofKTPNemzpYxoK8vYsTFAUmb9NwPZbyg4TC12eY5puqpqV5GqVXRJMn4",
  "key23": "4sqDY57jnCDrVkGJNm8fj52zZypKRcAJqME83QmbK3qL94a4fYmP5YoAWcMSrcm7TVUeXzUbDx8kBoK61VeBtFGc",
  "key24": "3Rn4LwJg8qyi4YzEwqPs6G4wvNoCYB8sQgp7XZYdEDxyCMJMmfFBCwtbK62L9nPfHTMGJ2RxkiCqHtDPNU7hkPVL",
  "key25": "AR54pb94dWNaXMAc6u3RroAWEqhkgE6YXWdSuqgRRqbfnWFMtKwcYDZF3MEwwrLhsuLBPsVFVAsGhLVWfb4kaBb",
  "key26": "32v3g2YR2sStJMkXgUPRT67BXiCWGMRxFtRxG9Uu3oYBygiqGRoGtUCL2q4cM1HjyzRz7i969BSkQT7JFvHFGG9g",
  "key27": "2aRwFvaegj8K2kRzX3QMEw5jPL7ZCwEvMnZXmUB3gLUrzMyyNCbWj9ST4u1TCYCFbTjSH1vecqsMx7QQrmuRvupM",
  "key28": "36Dc6cxPtZBh9a9UMp2GfDzMmgKUmS1nbZMwKzRZhjmVzEn5mWF4AYcaTDjhvV67SrkonNhWmpCa64t86wVdqBE6",
  "key29": "5muAhkuPSdFs3YZ18X1hDT37nuGcBu2CrisoGQz8KMqgzmZz2S3PSazoD3tKUg61hJi7i55jbvNBBfr3JLzbuHtz",
  "key30": "Si8BYQRbNJdFVSBWyDAiMHs1i6fqutt9B1TmBuicT35RrtkNACR3QJnvMd1hmj32utyqrs3TRabiidM1hEyZXVC",
  "key31": "fqYzVYZxGA582UHEENcLfEX4Nr1xTM999guBnivn82rAqBjSVKNmpTaNP6AFAqdgtzhc738qPPTgw8c4D6Ynxmz",
  "key32": "29qkTdDHtJFaauU57pocdLxH8ajG8BR35HZ4UsX9SqtbzCpJzDnWd2tcnDmLbat4dxZu22BDAfzGfFrsq3RsckGh",
  "key33": "2NnD4ySLYcSoidppNmLwFKuiuuNhMwcYEHhCkugsotukQmLbFk6CKg7Lbz2HHAFsax8zmuSDZND5hbRDJq1FNDR9",
  "key34": "3bea9Y1gyE1LMhFhCSFDdZAf7qLv7urTZ5JFVau1GpZsGyXGmgSV6iq63PwPi8q4e3dzCA1mjMiRQmgErvSLrS6r",
  "key35": "WxrgAymiL3wye7itWbThkNFwo3TLXiep3fhbBwn2Bg9DcPVZhNPPVvrdarctELiKCwLyB1F9WanR9YCPrgkooao",
  "key36": "2cz3bYgdYCAZK3WKFv7ybs1VEBpwze6Z9hefnDSoVH2bNojxLzY8gCbTHhZr7kaLsuJ5PeHLh2veGZBYR18WJK4Y",
  "key37": "DdoVsErEZr9LFV6s7kiWTdDxVf7yGrCqwggGf6fAyHx8shRfCnBitDgaWDcYvAfiPE9DPz26X61WP6oQkmjyQzb",
  "key38": "5VWjY7m7vkjwiVnCAqRc2gRQMxDrS9Q3U3xtt6BXozoh83aSyCy1Y3vMZrwXhieprJZsDpnod4EaY1s7LbzjcQxz"
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
