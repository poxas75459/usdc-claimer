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
    "HQDDceECDaZ4as26Ld5zwYAsuAjHetLJJSPNGFqGsbZFVsUhiVe8QFTBKzwjXK6YigpgAUgMz6N9BBLzwEHjXdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dfwFHmpQaC3co4uTF1YJaA1HdUYtPx5feBj4LG9CmzcowtWURdB2LmZ9bjjRFfdoCDt7geqNYvdSr8vL9f8VgK5",
  "key1": "2BnPbhazNBiUH6DaGEuw2t3A9gz9MCfv2H3pYpvfd1z1Y7iQhBu9Wj4q1WJX758yMhEa3dhodHM1fJkB1esjK1xM",
  "key2": "qh9M7vEFq4ns1ZUb23XT6pYy3MLJRKnmuhbarmd3gpuT5pD466KHBHqMPnaE2PamGo6Jtyw1ziNiPx8ZH5s89i1",
  "key3": "4kZ3jW513gyHumNrKjjJyJWSCWDf9kXGGcj2v1fCqJcpQAQkMsr8MYkLVzAGFgr4r8kGzuXRdLFgx7y6qhqfXG8a",
  "key4": "eiyFTDLsHiyYbVzbkyrgEGapGLL7MRMhuXpyCakiYdCRZJofcPtJFd6SCA2fZnRABQ4ANS46U58a3K9q7xfYR7f",
  "key5": "3r67LD31xviAWTJNF6XS1pZxcq9tgQHpeRzQug8i25iJin83EzGiEqUCNVwTxq9jm6VFgQcvRS4jt3MsxiysbwPU",
  "key6": "452Bm953siYfCw4LYodkBQfSTqVe9eSwxMsqMhvdu7TUjzoRHctLMtSxrZSY7NzBZw6jCKHT8f1hQxNvRf2SKC4s",
  "key7": "J2AgmwRkuAKzyQ1Q6xDLWrutAJQt5pvcXHgsfqXeHxwD32Mku1tFmrEamUAK51ohrdbDt672HHB755pWkQf9Nbg",
  "key8": "dQ4Z3Ecn5X7RxmhhRFEq2wsrkQ97eFjAZ1pRcw2CSEU2VuRzzd6Thkuth7STv3FebAK3YNVFVWbcTH1aMGDyZAe",
  "key9": "rVApvx5C6vAcceiBEsi4VN1uX4iUvQobmG5qhDQPSiPfxF8NTxtobVGzSENbpC3K72SXVo4Hd4aNnTKz5KsCPM8",
  "key10": "J76cGaHivE2m4WSffLXKSGxp6iSZeTnqK4ecHm4rZR6DzXRp64GePeThSFegEfMP1sZCVq76yEzGi21hCcakuKZ",
  "key11": "2vtsdbLYRzcawjabcVv5Wbh42uhZxkwcTT5wK9CfqUD3KwvSwNwDrEgN6XPpJfKNtF8uT6nykmwdBrmSb7TFDG31",
  "key12": "49W9FDaRYT9bgzwBuXLn9CGYWRbkJzVyyumbi3QtzHDEh62QcChg1piZBpjfGMJ8meyJfW9FRDwY4ysswCvLxqV1",
  "key13": "3r52f18QHmjRyhGQSU7ktyAy6X1uvD865ckMsgTxhvGBTeK5R4Nj8p2guC9jw2YJaV7aoGqy8Dwybv1gHUnxP271",
  "key14": "3bj3vdxTk5UbcL3qJVVCRSPKsd9UtVBea9u8iQ1KPei1iPWdyijLnR8hBWZhdMZeQ7chmTwgxwbmMDnHT3A1bcX3",
  "key15": "42RZSYicC55ZCcHjoenJ8Dwhv7sdbt3LPcFW3btHKCg5sQ2EsoU4L31BSgxX9NsXENa2cioLvMxGmVJkxbG9FHmc",
  "key16": "3m8EhPrM2vvs2HVwuBCzMsn8RsLbCcziZNj97bg4EPvmSEhfD3LaXNfiFTTKGaH1gEd6kpqL6KxEtvDkgiEMzMaW",
  "key17": "5VKRTPmg8omPbbXg1yTFKfkXrf9Yh7T85wY7fVSvTsXB2skctUyUQhacWnvEFp74YAPE4bQibMbuZ8SwnZQh3gku",
  "key18": "4FK779dtxppdhNtQsLqA8hP49mbLFb2JzrMrREq1uKyhGVeMvutjryvmuRk2iN7ar7UDFAHru7oVfhj8AqGfMEdp",
  "key19": "4EqVxh25mmSAKreTuu7QQcEJYKFGBVBCrJvHND5xt8Si3zqY7pjuykjXxkDsxFCXS4uh6BTJq9dU5thzFXwawwNn",
  "key20": "2hEiVU7uD5P8gCZYsXJZBj4LYCHWnX3oxiNENArqTgcTRK6rbXCozHEfonvkWu2niGyE9Ea7gV9n5UdCiP5vkZ7S",
  "key21": "33zRYXR8eB3NChGNV77bbXtF4HTZS5qgp7tPQMkNagxZigY5VpeRWDKgibYBywW8edxo2QgH23Xjv8KPKQXZw5YM",
  "key22": "4p6X2a2ynb7zboFXuW85XFFKFU3ixab6uA6LFvtbhKtR9PnPfhCE3nWkayLdpXdSs1WZxNNU8gNqMZFFiwpyVjM2",
  "key23": "2jxrfuDC5WH186Cs3BPuHN3LZbLmd6PMCwU8MAu2nLtfTphu4wTcb2g9F7XiJmS4DhaKSLaW3sSqCfRgpkQy8ejT",
  "key24": "42YmK5Bcm5NcXyVNRKHcSjdNdZk18vZN7zZUxfEjNujJV967AJdy1HPWgwRxgLSK9dcG8kcVVYnXQY9XAL8JhzFU",
  "key25": "62EQEcTkvpWHTY4MsGZUGVqSkpxGqy2nLgtzaDGkfL1WxCeiuNbddzvnXMmiBkq35ujqeEs4n1et1aoMTguV1jyf",
  "key26": "3fujqRbg9A11BTVVdpXFf4JK4VLzJACW9xL473fb9wLSqo7iLrnUgh1RiH5Zps1iNkp2JCwByTsbiYsu6XYqc2hm",
  "key27": "2VvSgjAEjBmp8kGXqrB6hN8cWaLbo5huSVf2UMFvKLuxzRF2FAmvdQoVuxZPPkjsM11E4vjn1MRedakayjyqzYiJ",
  "key28": "3Dyag6eZ2EV53EPHmuHnWy8adritctiWrzUQ1tSBqEkdqv5bUqgvk3oXmsjyDpSTavuU9c5eYr6EQb69H2WqPg4P",
  "key29": "2K7SG7xBYWj6dyKGojhVHdwRe1qXnNvHqQGzjg12cvH8WkueA2TP5UePm3GGgMpJMKe2CQ7VEwhDZYqwPhr462eR",
  "key30": "4HE3DZ6jPzacK1hNndbb4xohmEpS6zJZ4kizvu69VQEj234GeTXT2bfURZhfa4Vsyxm6douquW2Z3WDAU1DhRjqX",
  "key31": "3BuEzqmKKGk6KLaqdRB3nh7ESdBsGYLEfbJHfpXWSUQogJexyn4AdSqZJz2yfLfcqeZenXQMMGNNEUvNBv6trPVW",
  "key32": "5K5thWaxTc4ctnxFkTKaERcFxRzfcWuGkp3BPsi94rRpge5KJp16ip4EgjhTkZNWoxHtKqufJZFmyFrv6Sgx1SiT",
  "key33": "46A66tvre4X8Ad5SrEEEXX8riPH1gu7Qw1thaayfTWCtuLVU1Z2DyG5QcfdsDKNFy9s4NYjwasnWmdc7dkWJx3y8",
  "key34": "5qnA8Yvu2E273hyHkrsdzxY5dnA4V5Q749tt55GvgNvBLZwTAABzPzTgi5ws1Uoqbe4DrbJtkeQx645ZtYgh64WV",
  "key35": "2eeabktsA6GYQZcjKTWjvUW1bE3fyQ9TZvA5CvxDhGu9trJqm9oca4BJa6V4TjifxLiWUXK5E6AuAToGwBJKwgRm",
  "key36": "3VToXeK8HUACpqadFQFZ3dTTwFhf5X7SsoCiiSojnrVMJcc3Yx8LzzacrA8pLSHxzESXbiuAVzr1ega2UtTk7que",
  "key37": "64goVEHaCnpKSvEx6W9UkG82Qdz1nPXFywrij8uDGdBR7BLrif9LGSPQWkAQpAfaYVuRTqLqLmhAqsVWVx1RkCFB",
  "key38": "e8etqMhp8NHWfwrepkgTacVahuxAikreMNqXvKqatLs5yLutdN15eyRb6RWwWKLWwJSfW9ioXiFjKpjd37XTo1V",
  "key39": "2Zspx1VQgQsWfjkZSgqnCFbfdqKaKS2AMymeNAU5LwDs56n5XuqvrJe1xxxcpmvrvYyCq1BaSbbALaH9aKVRhEto",
  "key40": "5oBgk3RE7U2XN7sRJ5W2eZiv2QBhVRL8U8FksWAdyP571QfBDgfixEnKhePjhw3zUe6mKvWJBKQRTD5cpyXzRiqt",
  "key41": "2t4THYtPCudHkzKyywk3V7cD4F7rM1uYooazigQdmaVC9mcLpTDPi4G91uhUvK4mpFrrze4tuatLioyQj7QaBhdw"
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
