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
    "66EGX3EtMUjCGd4xYmggjjKBccE8DQot2S3hHRKDEHZri2L1yzF76HrjPEzpQrBnzY5HSLub5rmc6Sh34FqShBe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ty3LLwHnDsXkXuCCr1j81LQoJaiaXMKKaZzJWR2cNKGcxiJC7Ay1WrPT1zSwkfmnGGYDctgQJYG9PUFqQPmGw5N",
  "key1": "4uSw1UtYAF2sXeUuTsM777dmyQcR29xr28QmYDr38mJ4bo68weyJKwse14yVVRwtTozG3uPEeQhz2iKTDTV3Gogm",
  "key2": "2ppMXZ1M2FD7qoBqR3p5yCPrFRpgG94p4UzaUJaJEnw2yK1PKazrDboSeAFwbJug7qyrRJb7RmPywwX6oaR3bs8m",
  "key3": "3Kx3zVKNbnR8rmYgwdT8xnRCcfvf7gXcwQHfbT3ABaj1TdVsvS2ChQ75eAZ1qB7Sh4r26meQqDakr6B8cHCkj7xU",
  "key4": "54ny215GY6STmwABkNkLV5kb4Wx4MtfYBCNhhH9C7EhKBEkpGRe6KwEh1z6Xj47xVVZAeEeCeBqmCDYRANvHYVk",
  "key5": "2XWQvbxw1ookuAWSbqvFoNpmeZjX1qoSm23Ffdqshs7AZB4bcz5Jbz8aduuXGifv3kkF57QvX7wUEURKDmPr2vB5",
  "key6": "2m3g2tuC2m7SQaiRdz3EivoqjuA6L8Ryyyk77huKS9m739vJFFTi7N8ENX5dqts9CYZygnJg7cCGbkJAzcwuCtk9",
  "key7": "gZ32PM3jPk2yoZKx81oxMavbSaWHU7tWgKSZz4kbRYhFRaD8z42s7Qi9VyYS7obZmhMgjED8Y7BRWrt6MJbKYxN",
  "key8": "JwHFGgysiwRwGwpH8jLYwLFhogxQkau7Y6cMcKgQW9NyUA3cB33kQTt4sby1c79qvypzNF28bvB19WBMea2oRBT",
  "key9": "436LbHE5S18JzbcNKSaKbCyNzgvGfyKwo4ZhPEyZ7Txh9ZC8e7NkyvH3hybuH8sPnQKb1Ks8HfyZLfAkSCpJxLHb",
  "key10": "2sHpDqxH41UqEQZJFd8kf6SeZWF34kLaYgbM9gfxbi5UFeedUHcpsVfbc7MfdLkK57BHJDc8CuKYSruFZmpUTTan",
  "key11": "iQyGiQfCMhk4jEWZGruedKF86LR2msgqvVnkoiJKCcrCuaGAj1a9QBZEjoXg2tjwr1rKywasT5HNs4PgUo3vn8T",
  "key12": "Egh4XFDAer1GmgUHugmHtdVzfmvzGL7qCGfSSGkswadmYNM13HcQbpS9WRRJaoYssszMY8NX9bbHfQuPp4Vxy7z",
  "key13": "4d5PZu57ejwt2bpfP26qvswPqTQpX6vdECruy85DLBrGQ4i7L4RUa8fmXGZ9fKcboeGY2A9cDZy5dADQjumFc3SJ",
  "key14": "635AqBhZpPTCYPpQgcnMqPx9bYdRBG9vzdfLTt6oicjZu5sKxJEoGrYeUWL2Dj2Mg7AkzaGF8kM4feCpeatVpbRy",
  "key15": "51Rcs5CHZkzM51AX8L3vQbgekoBR4DzbiWwrTsV5Z3wZ1WHoporrbbxVj82TEQc1VrFKpZ4gV4XWcfEkh9m13yRk",
  "key16": "5hzs6Phwpuceyg2ELyveLi2K9ttqyXqt8UXH7ymiESiFSiz16waN4Nmqqq5YoazK2r7LmyvxxJyVBAa8ufhFzitC",
  "key17": "4x3osThabLWh1pDwDE71wXQ5aiUhhuqBxhq74dXvCYymHZXLewU3PbFJvtYVvjw8AnffUv5xoxjBsDtk85drfd6Z",
  "key18": "3eiMfehUsRKoW2653j1KmGmwcMmtsnJpS3srvXbYS5nPDR7FwwPd1h5Gr2pXwPQ1Yp3JBqVRxQdHFJJVqScn1hYv",
  "key19": "5HNRPULVF3aeg7UWjSdoKh516VF3tCbZ27goTM5foGh6BsbEisEYtdyRsgtfH6os66X5Tc6dL4Mev1AjK2vLqhwj",
  "key20": "21CcsAPCjehmNydz3WPUd6NpFjFdb2goQ8mrKzvmDYmC1HviUnoMGWUup6er7P4LF73trELosyJjkABMNrD78v1j",
  "key21": "5yMnxdWfaf71nLzT3F4mjKTBr7dGJ6ecw1NUfD1WrBGGNdWUTXxzjYZ3Kv7szUyRPdfc5px6K5RbJYzPBNNJe7H3",
  "key22": "4yVitDLNuz2h21zK5rycgMBAbf3FcGtGQk67kjGdmr3WVhasvxEMXhEYQY8MkGF6naooiCxnSHqmoBX118VKEnYK",
  "key23": "3aVovtdZaxRsVhPrX3QrA9KbDh1AoykFTgAJyYmGvoTmusW1E9eHmrPo1EZtiBjnoLarh3RJnqKQxxQWjThHVHcm",
  "key24": "62bLqbU17u7uzCDbdsDrBjJ5W5tdgmekpveZFncPyGVgc3VcYv7Zn4SWJRJp1rupxzW7PptJUcEPL9xH6uhsPfqy",
  "key25": "3R4yXNKBSAcXKwzezR5bvSvxYC6UpkUG1APsTC9WDg1v14VYFW15RvZCNJeAjL3sMzJp4B1Uf2wceLReAveCBqLr",
  "key26": "tydChunjYxeR5w7wgmQKPKb7vtNbUJt47DrDofqYaYvQHAyvHqdjpJvCj2u1oun9Z8FN4azQy4igXN11dHu389y",
  "key27": "2DsqaeoeATdRJkrqt9KDqLZ8WtRW846yeQn2jJSKqxQCK9grHPZ2CYCYuwvGA7AkgFRSxLMJqRQPw8SVBqgjGMnL",
  "key28": "rDfcxasggpERnVtYNuTaHZBPzLTg5SFRivpbw3nmBaqRh6KWhD2v5Zip3f3MN1mFdQFjjssSwmrJNqjuropbkTx",
  "key29": "5WYnVbm6r3zbgN1YMbMVK2KHQucHHAGjr4hneeZ5zH64hMUuuBGbzGj8N44xic7DuHfoDDGAR8UcaZ5YCUimLUQs",
  "key30": "66HdS44yPkVNGqRS5qryWvq9D9Z7XFhxTshuZcKn4w4i4mZLcf8JmZaBZ87SS8NpU2k1LoevZ3gnwtLnvc98Hncr",
  "key31": "27z4nCB6nBDrEqsH9vMZjw6ecZxzqb6S7WY6HMDzEVQEf8NvWkQAL5UFgjhho8H2c6tTEmmadSoAZHVusBwTKB99",
  "key32": "Ff7BpGMaJsa8DyRmENCtFjttwnpeYvDci2NCdfA1Hx1MSNhYkprG7Ge3cX6VBn2P8iYHWCaV3dnQcUVD6XHEqot",
  "key33": "4rRYNi8FMzHnZ4QRYnw4E255SkvMPPvVJBDAiapKsZnQQ2esRBc2ETZNJUk6sbug3wudB8PZgNmYRhWyRUkfg62S",
  "key34": "2UfGu3i9DHP8s9GWeNxXMZJgdtA7un9sQFSEkLcKDxJi1HQv1onZWh8dMpqkAuDXrjeCy3Jjq8PKDQHU7sCvjG3U",
  "key35": "61G4MasjiswQsL7kmzQdEaLENGn4BmLg6uKTNDCp9xLZkxL8eFpMN2sRB9AA4DQppUjxMTyDztyv3dsDxEvk4PNH",
  "key36": "iYAxbcg3C7MGg87WcTVpojUnoiGGbaSnTnymK7dEhLBH6VsVdz3QqEA9EzAhNDbrFBX2xfBne88WcT13WLqJ5TF",
  "key37": "5Sr35KXRGbXBTpsLra8bYBzq9SDM2qScBfyrqB9jYsPxEmUYbgXSTCPXtBHh3cJuqfybHs2pDBHx4vmokXUKgeJg",
  "key38": "4aRWwiTKgKBd7fzPTQXHqof6opVojoF2cU3cKZVfPVpLSonqTXFPEnEHoQPak6rCLaYtij1xuiRWs9VFkSpD9Mne"
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
