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
    "4Scw6jyZw61XrFTaTaxQeEfKsJJxbzycBgo2VuKW41E4SbripBKNYTXp7tjKv8pQ2odJvQZuGU7dxSwSJahnfZnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ceCPkxMqHj5BEmiAShJcjkHioAayECvr44e6apN4NXJK4EwR6KSfHimysZ3qkqJ1tZMfTq2PEf5Stf5LYcx8T5w",
  "key1": "5Mh665gvd76WRWNuz4wscb1PFN7tSizfD379WYpaKWXL2QzXj7ArYNrfDPZ29yNXr6Dty2gPM4QRqVozA5bXpFQU",
  "key2": "2eA8dbZgtJ9wRVgNjC5JaLtNh1Q9NQMk6nihNQFyZaVdBTNzFxQUhGAHPxBMrLW3UGXH7WXct2DWw7EvGVecoRLH",
  "key3": "3ENeb3QgZpgksWwQR52mzwsniSL9NoCfjL1JRvLyjdoo8gemd6Ap86WStvpdL5irEiXkDTaJn41on9G7mwC33gF7",
  "key4": "WjBc9dzgn1JgfAJCYvCWAUWFeZRSJcG7Zk7nw2mD4ygyc2YbN1EMDGR6v5dyCjBhC8aKDkiEz6seiWzReTKhChz",
  "key5": "58sojPW5fHDmZeyYcmzZRFaAiEqc4mR4Cb5R8ypy1j3tq8WTBSh85YoiRcc5A2ayGDYUDJjw1X2eR9BYMQCnjVFz",
  "key6": "3GyFVHcWFfimTfCbRqEUGYTCVV8GjYHUz7tjbGtQgqXGYRNyXdH8WUwDegdmEN8vddLLCvKGn2PcfdGAf8h96jQP",
  "key7": "3xY8H1NyFvos6xtCYnH9mtUBbPwmKT9qvMoWNGY1utGVZRyyUs1QHWvrcvShV6jsxFtpJpxvayRbjt7u3vy8jYsk",
  "key8": "54qfc9VsYWxAvRihNgzeo8waoaU7vXbngK4rYgiCxt5ByyLdH5n3iXFsTSBUG1e34jguGjayxR6rW59PZDdws7yL",
  "key9": "5imQvJRDXNW5s7UtwGDmdkjEbA8shVcPShgdZSUXdmUAXMAitUycj3nThksiNxQ1Tv9o2eAkVguZ5gRgE16jj8XU",
  "key10": "4KxxvkuqiPJ2rzfPeLijHmNRcCMVJwwAM1d35pVYC9SbxbLXDR7Dh4YX5phFzpxaqcbdhoh5oaqFwdijENjhx3e",
  "key11": "57i6qUK4qkCRoo22SHSWU1V9g5j6bEnJ1VPkNc4Fk3UKEmMYZ7TUDuorNPE9DdbQGKXsnNuUMv8uv7CxXmdSFnDU",
  "key12": "4TL8sKnF8bYckfnoMiu392hkL9cXbZ2bGEPbvJxh7D6YNowhjVoJtAm7EsDU6YhEdu7uovBaKMx9j5gPdLr6GBWw",
  "key13": "nFpGKpECjFbcZyXDkEcTgm2VzekM2BDvNJQ2hYsATsx7bgvznuDbRKAActVfRoJh4CSQUsqcro4Avh3wcKbhugZ",
  "key14": "4F6ZedxokDifmbWELh3yW8yuoYSzQrTfBFhN4Hg64U3XbdcsgNVvLr9bzjFofnjc3N69P5Xc6VpAEF8EkiQU3LKi",
  "key15": "5fBLfbD5xQSwgaGnrLGHQq85RYnJAF4MEZib1VYxqezGTEhJGgC6BE3uZ5erXukTgdPDBnYWJsB5EtTRh1CVHkfA",
  "key16": "4niYCEtXJp6iEvSvsivhxJG2Nd7aBmnpGiDRFCrKpzXmL7oqTMC2rVWJzGPfUgm1129KNfVUippdqb1tb4pr1xN7",
  "key17": "3KQToGuTvnVXE7XfpWuy53V6MBmLyeCdB6Z9EYoKDQ8Nr6AKAaF9DZBYLg2GZhhJxn1581Zd7ybDwkgvsNgTh1fN",
  "key18": "pJyT3HfJz6d115DQ3dGemkqa97f2CuKf6fG9CiW92DF2GuxQhwaC932yUSsK32c9TUxoo7aDm3GahXbESmA2oCR",
  "key19": "2rxFUELr5kshX3Z5GHnKwHt8J57AUemipGdbbKnHkvroY8nfEf9zDuVx5mQCzVg9zFHMi5AVPhAvsjHYq5x31qTS",
  "key20": "BCZnQxpfdqZWofYNjZgQ3tthadrGDGrqcRsWvCtp6x2Uwm3bowmKEBugFbXSkDnudiqGeDBE291z9aWkNbjVDpx",
  "key21": "26w496XfCK4RoBEQGmRfKBNZuvUv1ohFJ9T55EKQkJT2JAaEYBE45tVKGErwUi3SqBE4pSDXkiALhKRf2VKH11gY",
  "key22": "3MQ3ZEb26sof6ir56X5hAah3AVpzd2CFtYVRdBdZrEdzmvVAFxmPtEECBZH5jbaHEeWfptAEgBXxabVLuZqTEKwM",
  "key23": "ECippMR8gk31M9C8SB4LmkcNKMeScqQa2x6bkXJpjCpZ3wXU9Stx5M4c7YXVYy58424nuuhkujDxEa3QpcJEpKc",
  "key24": "3nEpdE575qwz3Nzrrszp8V1WwyWY32TbDNEMMijiy8Z84rKBkZZVZC5LikFqgNkmFXoyoGyGsa1C4caQTMFiJPCY",
  "key25": "tANnYGLFGU6vQQrKh3KDnk8p8j4KqbGxPF3xTBiBsFTWBaCQySp6ayky1GGS7BcrnEeazi5JWQaVc6z5WHDRebQ",
  "key26": "44CLvofGdi4iz17QXPJLHTtkbpsHXzZdEmtejAGGJxnQQZUAr2dVZd9EzVEEMJ6VeVpBZPRYFxbnFyR6FRARU133",
  "key27": "3F7hedoYXsVgoRCZr99CaPkkwxFpNN6HwLHFje7ovPBbrHexS5ZrB6Cox5FkNdk8fBF9YmiM1TUEENENYve7vc9L",
  "key28": "5PqUnKQVFFuRk9DfF61Zcj94r9hmsJbpCU8K6dHsF7uSCvo1Dwub7PfakYyYvfsA4QzmPW3TLcoJr7FZJbFkKmc7",
  "key29": "3GEXT561SSAeYzG9mYXyCz5wGWUVez6RAa8H4boTgF8U2d6a5trnMVc56Utdqy1DVE5hszLiwcg2dNQKFu273z4W",
  "key30": "doMR7uhNrVvWyHxRJUqitDgxhSpUvXjUBpNzNmdjzS9A4wkLaAAw6r8ai5ZwN3fupsTBHXsviT4F6A2AeMXUgkN",
  "key31": "4Hf8V3AUkikFse2XrHUXeXQtAqtJH2pnnW42edfZeroNSVjyrVcBmknvi8B6TPP9FiEW7BmnrbYrsHzi8AQ5tkie",
  "key32": "3fQ6fsH5ZNXp94hpD6h1sdn2uxTWYHQMWJVGjQ9DnTtN7oS8177mxmDGWdvnXcUXuu8SPfh8NiWW4efBjS8GFN5S",
  "key33": "3hKqqrcHUwFfbuhcp2hd91wBNYEi57wAsztoz8jLAoinUjdKfBsJarzu9mAB7r9GLnqVxbMztuWTEixT3pF1zJDP",
  "key34": "4HSG5QsFREEP71oh5yh7bxgAa8H9BbiRqStkk9YaAZopSZYbCzCYmCKUqADceiKwwQAjEJy6UrqovTChV1GHDVuW",
  "key35": "5VHQcSV38Lh33q3hRtw2DfjrXgtkdLn8EcD15VkpMvBumATfjBc7MKUdYcfcJsnUQEkvdURZsKfinKpKbRs27Cr1"
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
