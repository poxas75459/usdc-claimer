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
    "KLPWet1fwnhvxYh9ZcSJB7kfNwpgqVsgppnksyARQ93vWVLzXJXVVSYq9eBegaif6xDwSzLgAUGUhSuhU4Lkswf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jaDzdmf99BcdQ6wfYK4gTAjojE84RXWAmK1fti1aFCxLYh2myMp3nHhowQGx7ojmtje3aTWgPZpy9aTgCLVm2xM",
  "key1": "9tT5TUDZpsz6wc7JfxRiDLCQvjYXXYnoggbNoXvCVV63QUj6emKNZB1Z12qkX7MeQ6LPkF2YGDS8d1SNJtZLeLv",
  "key2": "3eF6MbjWaZ1vxvpdvQ1Q7NZspveT8wEL8SxoT7vuVgQBZFqJ8M2Xvk9iWfvxUptPYjhEgJ6C4G5Adv5QBFPzceQP",
  "key3": "5692QSgrXMmQxTABZYG93i7m4v9D9tFWMb5LCfQjaSjJ2MpDWz98djMaVQJ9tKPUqHHyaqqhaaF4Q5M6pPZY8kXn",
  "key4": "5v6Y2T5YBJHE994Z8QJ1W8RQARcaBLsHn4u8L3bVbLNWQvmdFinFWhSs3oRABnUf8BBeh2Sgb8ejwZ29ex5B4Q8B",
  "key5": "4sFnPqr2rJkkvUD1eJo8Aad5UEr1z2xsK9A7VeDQ4g7FcDrH46zCM3arZ9uipJgEBPcXUEbnxD1pHLdeCeEHwwgX",
  "key6": "tiAMHzHxNnLeMfuBXS9EcPT5mQgpFf68JWfJ8B3yWkmuRSwnNQrRgXCTgyLvcS4AQKmNrYX6dvNTe86pHaPMMj4",
  "key7": "5J5hheRM64QxvuYoQPEhDGRFbp7SV7qUkSKmjCsbDApQZKMNVXFPz4gL84yp7qCdMYQQ6b1qevtt9QVnWPZxxVaY",
  "key8": "L4yiT7VHb6Wb28sLgpG3MhYyU4EKZDp5WircNYjtKhfJMm9HXVUXcYurYmSa3G4DGqyQPa1LJFxuJyFkHzhkZww",
  "key9": "2WxuN4S3auSL9Lg9D3euHCWQ467cyoRBzydicj3BW54mTrbSbAknJmcdVX9yxK4ToGt4SsUvmRM6q5zKgAaGHexr",
  "key10": "3JiX7k5mAiByRGDEaZB86BcKsZMMGKrmty7sS2KRr8vNFbLx1GqJJhG2fdi39gVcU9NXTukKy4ZTGJziq5qFM5HB",
  "key11": "7XmnhiCaP9LaLetnDyLXmGdbGxk1Sfm9Q1w265n9agKzBGUzeNRJdHaGxEWwEpWg1HUpkdZUJzYhoLBAsYyYmXj",
  "key12": "4oKrkwJDvwAXNPvUJPUhtMfKZw175akFnk7o3V8Y6aDk7ULjetc84Tx25i4nhs9THMy7MW6Y5q6ZufoPbxtgPguN",
  "key13": "4jN7NB9NUzcxbPyh2uznE3VG5ehX27kqeZX3aHT2s6SeNzRoZcZ4dKTY4boZ9HhgpHoKoBSTjKtxFfN5CZeoAffN",
  "key14": "66byrXMKPuUpLi7Hxo2vTPHxFS2Jws8nyMyQPjiaC8bS3CfKTRcih2KzSoGhR7ESHL4ZH97mLy9y6HVVfbNGfdL7",
  "key15": "4DHJT7Xs6H9oaM5MWBhJdn7CkHpBqTNUkVd2B7PTDMCgTQU9rC7SS9Ba2kiN9WL6ae6YowDNnsh1srdvpHugW2MR",
  "key16": "32Lrg9UMSMxD1zP2eHAWcLFhV89jK6ojRmP2BTUSA5TCRpZczHYojSGrTAEAhWQMndthuoPYdTYs4pExRuHegZ7P",
  "key17": "3FzgWNK12ynaRfsqkjPSgWPQBwYz9cdb2BNKEDeMABFDungzQFi7VoaEPBmwBP5ztHj98jiMt6ohKCqs6MrMMFDn",
  "key18": "SdzAqN1VE87aYAK9Fb3DPWkdoTtrbCKNxeFHcL5neuhwn2A71HyiQp3xFNNe7ekDvFpGSwKGeD8hzz4zSGEpd8m",
  "key19": "3D9uhqQnpoksrtqXzmGSVrDCFU3ifv2ddeuSrcfeihrtteKjBd4EJgFixuzNNNHophA7n9xRPC1VFp1ZXYcSdNZK",
  "key20": "49KX2fzPxGykwHgmVhcZGFWTnXVAESw7VgktXAxe1NXqptdbfr1euGCiPS9JMJUFdPLyqGWJSpSertWaovTSQX4o",
  "key21": "2pb7oLA6PLpMrzm26tZdfPJwVJRwJUpzBioC8Ni88KHcvLphfben3ACvimDia3u7sSDdZ9AWqRP2ZZEYcHkHowQ8",
  "key22": "2UdiXyVCgiEg2R5AGQMaAM4uUh4av4TXiAYPkWmcSHicXPhjHCqubKw5GSXR4rv54cSqegknkssuv9fQeHNokvnF",
  "key23": "5DjuuzSEAgukpmvKw6Cjdga6PyctVwTFzwKFu92d4aBigFGT4i2aMEmDX5M39FXTp2r1kMvVUwPbi73CUyrd7aDD",
  "key24": "5Kf6m8frocL25nV2pzo2LfFf2Cr1KeANhuk3VWEPVurHX6LT4gBqtRjfbcqdTP5kkhNxce3KwDUGBN4YDdSbrWgW",
  "key25": "5BN2VRXHRVuGXoTASJg8TxRLdhmGZ7GBQrHXKehvrFsZzmQrgWUyU37hwdL6xZmJ7G9B8othe6ULTGjbwCjBRLNY",
  "key26": "PygTp3kd7BJdsHk6UvG9Con3vvsxW4Asn9DWUovWW1KzhZ4UQLVfXr96koTe31v8Z97TdCCrJaBVoDaivsPq6YJ",
  "key27": "oRAQvNMsFB5VvasomL5ydP1QMvXdbhu5hCiEtPRFKpbu3N2b9fpkTpUm41AfSptyjCjhxFdA8iytTPhdBw3bXwA",
  "key28": "ZUuq1VuQznPDNNvdCdHmc4L8XHgAMYTSgcNzTnqFFH14HqqkY7DHJqR3AHob2JNgfkwn4cXDTkVzPgqbTakDHNY",
  "key29": "2vAwEpUGryESLCM3wXfsEbbV4b89L8wNjQK5rfaiVJ635mJUQaB72fyYqxjwDoL6reShJAXohvW41WhXw88gXBLh",
  "key30": "4uM5WkTuwLAdxyodkP15L4KYeqJqGVE5d5K2xbC4osgam3J7nHX1Di5G5WBLM3UST6qN6aitG1ERbPspZiNyTh8Y",
  "key31": "5P3qzNeaMaui5t8tJBmem3G6NJa9LykmqaHMvS4aFjDtGuB2MvFaYhbKs3jzGTp25u4SwntXuZcBWfsaSJ8VDD8c",
  "key32": "2gN8pwdhM5UXJRhQDw8UEystjXXqPuErw6LQHBfSHpeqVdCgjCx299suzRnDQNkb8c96LNYpytC5cg2LNUgs8zXe",
  "key33": "4cuaDDMpTgr6gAXyfskbHufsCuPncRqTweyhbBtRhQWXwFSTZZxBNXtrvVpGQDbmmawtpsxq6VGygTqmPfiVNpUC",
  "key34": "4TeWtECTVkVBUGBMvLa87cKrhzNP91G926vwV4Sj4XDAbdG7P9WJb1xnxeVH9vVAGbYetbMw7UeqVKkDoQ71i4De",
  "key35": "Yo4vYRoMjwFRiLJaPgzEZXZqeh5RLRf3t8UoPaRgEHrmmqfaGB25UUvKKDZ8UpGZnVkWJKFEtWhBvHzH2nukB68",
  "key36": "21fUw2KkmJ2s4UZdRpchHxBYBLKDYzgEMcHKmzLdBqiyhKKy1Mca7ubS2gT13Qf5G1RqvWgFfDa3LsqnMgczaZXH",
  "key37": "2PZNPLi6ZeKHCHN9RLQYG9VAgm5kw4b8QUfUcDVDWj4bydjc4myeVtPsHFChuGW3oFpfLXaHKfEq9WYNef8wwVEZ",
  "key38": "44S8U5rnSJCKcgypVxyBqaVxUZgajmGmtwQp37rt5Pfm9QRA36FZDnEuk4ZA2SsfW554QiS4Tw9NpjMNXSEW8Jw9",
  "key39": "64caFiDxDFu3h3nxXawTEbfybFsKTJbZVFw7UN9SUBtBs3QLU8zizmT2D1ZiVHcispkWZJbVwYsLDULWNYhiPXvM",
  "key40": "4uhj1MhPDWjCc55VB12dPGUCbdpuUE34wzetwsWMhMTN2mpzA32VwwBUjxQSi6cMiMdhnr4CiPkaXdea51vWvHAu",
  "key41": "5xQ97JAYtKhpkbF3298HvGZrJRp9YmuZMBojjRH6JGdtNmRYRuFWGpr4F3rgSzyTiKv8YvxXxih5kuugGahULRxt",
  "key42": "33pYPtvr2cCj4TE8XoRbrz43Hf1pGv9VGgJpfkoa7sBsLorACdeu1U7z71bUtDKE7dZQgVZDqBpTgmjHZQQ78pE6",
  "key43": "5Ao3kzxDnXNRZmPtmkwoepcuogk6KjTEzixQPifiNAbHU6SqqGHRoYivxv8wksJ6KxLnc7pGUNnt2L1HCxoVTfGv",
  "key44": "5mRC7CvHQwQUE3XQbwuTuRfM8ibfKcKd7BEbyCwGG9DQZvHtbmzVE9iGt3NNFkAc2You1v2RA3xMNFB74vj5RpRq",
  "key45": "2xxJ3PXR16uLakmjyWeqHS7fREqhrqudCaFuR8z9khCQp6yUiNbw1L3hdZ16UETNUwkqbAvU35nUABdF6bGnzKE4",
  "key46": "5ENwYwLRyVtNtRgqJE3gSJjvEouiWeRes5hkdiLm8SSkqSitAXgQPJ2p9fPyKeNjYDUXoQ2C6J7jK3Ahof5BAswR"
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
