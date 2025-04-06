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
    "52dNvwUYF6YPUiEbu6Tnv7WuiW1fxTYkow7vVKCEdGnZL877R4cm3a5ds4RqAnLZ9aM8SREvdCdLs1fJ87UJtmRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GPrCCCk3kYSy1c1YwQkH7L8j8gFb4qPjft7bpNQ33YLnfmgh9XH6rWBerJEoVnbvN2W3SkNwhHk8f9TGfuBEKsC",
  "key1": "gQoMVSUkqXwiT2PRMfeQnb6J2MLqbyf32XrbZwuFKHJ1PiC7MrJbq14Qv9DSL29hiRBsCZuiuy8ykivR1mbkMjd",
  "key2": "3oagMkZmEbcsjpDUuR3TnNyvWsdAjvMst6JodaS6ieYodkv77f8rojGK5YVsz9GGtmW5Jy4WhNhJdZxTYPMyY9F5",
  "key3": "4ZWMFuJwsbNVWsetHGW9HoYw2xHcxhMFD8vPDNruL2YCL4jKBWpx8ZeHbHWGg7jhrJZewTJuUdKw7ZirW6D7Kddr",
  "key4": "XwvyzfoHVMp6fufGbK79ECQyRxL6xPcefjFFcAu1NWdACNUHgD17EeMhqvBdHvVUzQfYfoAqt8wXApbVAmL5AFY",
  "key5": "4psdF46hHv5gsQD5kYqKLqroYmjhp31X9myi5ugx5B6yyBadmd27HJsDUU9cXefdi1MCpy5ZNCcvhXbJdGHgUv6n",
  "key6": "5JQxE4K5VfE25xz9XpuKLHbXKXu966CwpaH3vCeobiRehrPCTabxkEVa1MKJjecrto6jQNGw4AqRCbUg2Gc2BAYQ",
  "key7": "5aXw7RCLAPYQe6m8xfuDZoyG6LGPBUMNjAE59raWRC7mS7G5Q6twNnJ2iPTzXLTf7zL3uVfBZLC96UQHcsmA7FRu",
  "key8": "4gEo5JAyq6Gtj7ZiMsbHFugjue94NXpduFQcuvf5FqQ1acQEp1GFBN1MPgbNEGwy8E9bxHoXkqpZdLiSpYoEn3iB",
  "key9": "5Lw7ySBsUeKUwwwNHTUv6LT2NVNRRKJjq4rQR5LHcWCXEofDNwH5KreSrSfyKaVeFaRd8rnJg5kTsxJ719iRjNN7",
  "key10": "5EpygcLxLUn18Pt7s8ZDH3gb5eGPc7bbhtbhHVrTaGhA33oC2FP13Wtc5dV9xVJSAW351NxdnNF8ySqYiZ96yeqM",
  "key11": "3Jr2zNLxLQ8FsxmsP97Z4pKdS3zapFFJAK6jvrhoT7NFSKqhSKtP2Th8bjSbKWEJqXS6JwsnJVf8Kc9PbqZHnPZQ",
  "key12": "5CuStvpaFxjAg9EAkfgbS9WZ3pDhCegyWd4CRJYuwzgVfCmLi1aXKwiUcEVkMCJ46DABs8Cqwe6nKVqPeeMgdRnN",
  "key13": "479uAK89JKQEn87BsaZ6C36i17CuJBk8wDJB1qDXmW5pn6bYZFAWEBjAAFrBACQLDUsGz4LzbrfgqJjETNvoibry",
  "key14": "5eSp2BUHiCT47UpFEsonBcqckk8dTPRDUUMzYqQ9Eh9VFR2MPMUUpxVfzC6xz5HEQ5MFuwV5zTcCDN6r4KQWSqms",
  "key15": "3aF86XR6oUyocoWEXq3CDuDttapZg8W6YyWrDnaCsymMKcaRChN2EowjuaaDwzt9UcBugJAadCW2RAcKWqFbqu9c",
  "key16": "5NjafekUJqSn6DxydR4bspZge75kixU3G6HGhBcFvJzKPDX4WHXP9tvuVkGtugPSbc62NF9epYFB6zWdsBv2TP7C",
  "key17": "5TsFb2pQb475vraW8cfTZURf2BzujGLhKnjKitJc7ARBmXVHuMVwd8o8pBAyXniSeDa89yy4v48T4gsMQTmPJcEV",
  "key18": "4UvgTuPtN2tX8PcQfyEGPnXCMCU3zxN3kCiThBk3UDpWcRmvMHxnjmrv9c7wgjFgDPR2F3MhQZbpuTcygddSMSS6",
  "key19": "m14jhkCCx1Ms1kvmfbfpXPjHoGDnuGeVSrWjJU4gZz9Ap9cBjRNZdczn9roTsruPoydAaYqHWzJMTKyzkHJJA2s",
  "key20": "58isovcxBx5nFoLJL731EnXKJYzcfPpX2cQxCYPTRZsnsTp25WktmuVw63gaBFMrX9PzWNRDj2r74pdQjTqxDaPb",
  "key21": "3i3pT3fUcpykMfKHW7yWeXrzEZne6NgHptSG13ryv7cjaDWt8jCADF6GXTNqc84ZcVFMbd4DTnfWzHSyooqid5PS",
  "key22": "5CTEapfKrUWTGmvPnDXkNisJqDWmjuy2BwxoQnTgVBsBwQm6vG526JaBM5PfkToo7Nds7hop4y2UQRFgGMLGPKiV",
  "key23": "5nwKQvnCMTcEwNfLUTdrLcCEe4Af4v33vsJmCMhMv8XjZ4ycWPioTKHySDiCB28hSzto1wDzr4nB9d6NTeN7FUaB",
  "key24": "4ubuGjVVy2DXnge2LS38XqpdUNLCCUXoz6rELjrCkKMeaA3sA3rJynhVvLato4Mw8YSTiqYYhoqSmfNMJvNfDKH",
  "key25": "5Shomqs466mpNgRMJr2MMFhmQGXNp7JcVFJgqXedn29To7cdWTJQMcUa5hNAECWCCTC1ivoFQMzoxp57qV8n5jGJ",
  "key26": "4FTNm8QXCuGSLWGfpu8Dq7eWgTqVEu4eyNB7Yjiz7vzuXhGjgr3fMP5wmkH6PFwQQRwf1pYkJGVkyXGkvaPPKMDK",
  "key27": "5XRbnmz1DVxnKh8u4N7P2m27XYfQXiGamW1WSzawteo6SQGuYJx1Nb53LmLTB47vyQcE6xAidkecvZA3jj1a5EuX",
  "key28": "61qCiEXJHDZdYWtm7EetCxuZLc2UPNsEfmCA7nbe9mjAJRjAAwRpUNEQJ7c7cfQYbVtH2aVKzyiHJpLdoYyabHY5",
  "key29": "S1MHCxmaxuKWuxzFMQrA5J63fgkfCtBEXRJkhr2PiganssQgRHCwGmNQ9XhV4xKBoR9X4U1CsXAp44RkJMx8cZJ",
  "key30": "46DGk1F9np2ZZcfjugmVrrS3vb1VmyyrzkSHEp79jmNNgD6ybYJ3mZAiZjBMXDe4vGLNrzSRgQCFVTftwHBWz81X",
  "key31": "4YGQfL2fqHkkSFSRK7pSLMcpFaieLq8MN67gm35ybXu6inua3rewdQQPkxeSqNFVtEM8vW1KQdv5AvwyTS9zVFdq",
  "key32": "4jzHjcNSS2vEkr8WytTJWrQSHEZfgk4DTW2DEgoGp3WqhnFX5oMVsxCChbNrhQdd9ioV38sc82r4yChKyUaJQZZd",
  "key33": "5CKM97gSh83UeuunNKZNk9UzVfjicZUggxdKHDgwPbpBYbCT9KsUToy6XeAYtFgvRw2ciVrscHMVyKZ31y7T7imy",
  "key34": "2d38eWuJZ2UW9gGrVNrVu3EdXdyGhm6Vj4TQn1G9Ajp39Sd5vyKa7NBVyqxFw1d1DDDTnTdjA4KtwCehuYhmtYsK",
  "key35": "53H9HYB9CiDCSuYwvSxyx3tJDhJ2j95H9NWW4xmVZT9GQivmsBFDxaSbkStapC1Jthd2z8TaF4e7GyKPfwWY9H7Z",
  "key36": "4VfuhmjfhNwV7GCCfCpdJRkYfK6sLkdgrWMcdUxVKz9hqyiecy5mk7x31kXGLDjcuc936vnjivi4wiYpGgHiKhxV",
  "key37": "3Fv9XedDYkKE1YTqRMm572nEBxsZshyG2ACfijPFS4wYTjKMsKf2tc2zw3gzTcAM5rtem3BvwhE7fRgnyWh9hN9s",
  "key38": "3eJBtz37jLGnPiVPmBqMDGH6gR7a8bXVAtSYeqrEcgDyAnEcY82dZsaB4aKbZBMwvH6CCFZuCLoDXbsfuK2UYk6V",
  "key39": "37rbyq4vDMNpatYwwHKKCbTumURQ2zKQX77f5iHVHQLAPFLHi5ip5RN41a1AyfC9piZGjcm8YptGPEJfQCxiBT55",
  "key40": "2zcnkCkfqW4KKcu1sFM6h28uzzELQd12yxAuedhXDcosgsU3i3LRxGSjYNGqD8sEFSChvRYjuzMR6yY32UE9hHtG"
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
