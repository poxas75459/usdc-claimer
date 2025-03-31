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
    "4CTYrNwx1S4N4BmdgvaF1Riad1c1MR4nQzDQb2FF6vZtRmC8bVYE1Fcc1YjJBpNVAKHYwWfKCNSHM57PfLJFBW7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1FNes4HYmdMrjmJr3BJ5xKHaKEvXHZRmCEE8xAfhcakQKjpViQebY1Tvxy1wYVJhx9Mycn5BA5TRge3GHDePVAU",
  "key1": "3zAYPhqMQycow3PP3AwWpDQmRSNKBef4zsnKm8ESZJZFqqCCAzax96CKNznDZNiK96ojn14zpKXNy5kPHkQPq7Bz",
  "key2": "5ZsVMHxK5TND1KgKwC6bB5PVuprKMbLLFxUTsngEBEQgwSPFTbNTQbnzZfxBf9UL3Mt426vQMEEbNpPq8zbhZnmS",
  "key3": "3XwDmZ1Z385BGtRhh7JnpGLrxLsGALnLjU2cm574cZtpEk6yd5YYdickn6V9GXsCtzwdY7mwmpmVgH43i3tt1M9",
  "key4": "xgyP4skkdRD7DEpvGo6gMrkR1ZkWU4vvs3Ay4xeQfBeTW4Wk7KmuRavrkPKTes4ANm7VS2zMjcePrdsh42u5W7N",
  "key5": "vsDLWPp5ukHESrHu4J2avWqRdc1w6dnusKYSNRduDnFD3LNjFJNHZXLaTYznzjKZ6x7624YoxibB86BAr8wmFu4",
  "key6": "5nGLMyMLUFvu9j6AC3W8CHDjU4h2nkwrB7SVTbRNDTTzsbTnfZRt5VJdGHq3RvDG41DksXKfY6vQbNQQbbouqNK4",
  "key7": "4yUheFrzP5KCZNx1t7wTm82dr7Ai21YG9jN9kuZQ2EkLP725PBGsnKBRQfiQA9yd7HbCnDoAvJZE5M88KThqDF2R",
  "key8": "5KNQQMGdTvXanzRYpQRu8yWdnMiJ7xVume9i9nhvyWUFTzhfDuQauUFrXP9UUhfqpkMDgRXx9p5ooHSKGcMtUvPG",
  "key9": "5TNuLCukpFbAmR3sziP5EVFSKYQmWEa8wwGhotSQCqt4Lu13o6BsMQJpmWNXeW1iN3JBnNXhppoX8oQtYmYQaZhS",
  "key10": "41HxeHqA93eVWvMcLYqxazjTvoAYt8WvFyQfF2iPRY1ECrqXns46t8nBoHNbZVsrkKe8GqMo7Gxd8N9kBQFDcX7L",
  "key11": "3W7ZSq9v2iTh1rvwYpRkgEfeRArTGT3j1oJedpNPNCAn8Q36ZQuv9LzFTiNiRNrkvzY7d1nbqFv3pKMLLNfNEpqP",
  "key12": "3BccBsCfBLZ5P5NqmRWFSivpnAsFJBeZUY1gY1Mdj8qBhDsNxuiUEGMaNA5juGJ7q58rbHh1c2HxbXGQxSg2QWNm",
  "key13": "5gXjUzhFNHmDZj1BfxZFAedfHmEERsaTMrVXqVvV9ezRaP2BRkViyfczMfqD939md8AV3A2UXJPNJnJkMLbdYeZs",
  "key14": "3QEbBujTesuTkjMLaHJDqqG9y68tM2NGobfcG3KsDY9SCLo8o9M9uHW5PYDvPuZMXi1BhCQDEZYeQPTYc5BgQkWx",
  "key15": "5RYZHs3Ty3axVbGwppetH1sj2hk3WuBfi3PVtyeToMPZAtEVKRAxJ7y8oNnEnp59p2auN4pXH7xpp8yKqVDUysH5",
  "key16": "4qddJdvodp6Mj2KKcTSP8EYHr5JFyY5zoDJzFzo9NPQcBfKT43rLpWp3885AjDcgXAutmCXJKxs9oBgjj1SjzcdL",
  "key17": "3iT8sBzFjoBC1Yt6F4tTVoCiLEd5sQz3fCm3Hskvncy88VpTcWkzC3JTCUCLM1UowrAiG1FGTNHsPk22oEyu93Rj",
  "key18": "48vWDbKRtdRkPJutQpTKiH3nm1UzVqf7GGGdaxkcMdSZtPzFs94Jk6GLJ1miaheaWzE1YWyjUhaoWrMU8DHEurz6",
  "key19": "2TWNBu8QUgmZp2YDybekAQcUeQaT99eTLnSywojKdgZAs3cHYKbnZgfyB1TnJGEA4KUr8b59EgQqZW7nm7dfeoYB",
  "key20": "4myxp6atCK5UWQ4U96tAn15qdYba9GZHiWuUiv7W7uheuMU8Ttvz1qq2RSjDxS6HU3bixsvdtLj3GWus6XgjWtyU",
  "key21": "3bdcDwrEQp6CRRq5Hus8SzrcqaTuxS4NjRDYc2cNJY4kFBmXwaaUcimMczhmAH9qoTfc2DxDKB2YTuB84ty3YJVc",
  "key22": "4JYPC9BaqM6UdPbMGYUbruWtvsZSRNEwBLfGg9JiRRd71MHzWr3QAXnZKRsHd5Q5bYWJDeYDh3Kqxf5hWRf2NJvN",
  "key23": "3DqzZDRS4rCYibcEhsTSr4PZxm1YYiFVytpEcrabcgvHkokywjd28tDqc4s6g9zawyzuW8LrTH9KPYeZsw3Tod2j",
  "key24": "65LrUZQqT7TTTmKAQdnSaNKkZSTzBNMw78HXBUUUKPqbHsekem9xBRKtPcKM5pLvQ4JS9DwP5PjMoHUGfSa9ZWQM",
  "key25": "5kfrWAKpVLMRrguoXeJhdgUediq9ECvq43XvDy2PNFcBQrxmJa7qm8ny4194dVKnzdDxgXbYGwnVT4NzNShAyqH6",
  "key26": "2VH4irxvvXCgR6RVKBGeQaZdK5XsK3JsoPGcUTTqrRH8jVaUEzHPrBUEN7hiDqh2FDD4fooXwKzJDsvuMsNKwnpV",
  "key27": "5qTJA5ajyAQ9VZx1XJ4tPzXbRgDFUb1RevKNkzWCyZhUY1FWxqtUNMPdm9BqjKrAgMvF4pD9z566SJ5RkDEaVXDp",
  "key28": "5edHuNwBCrrtzVeWRZxBiNZoKKCRHGvJKN4HnPs9Ccy2FSmUiZVwxydo89vD15bUaSaLZjNmwspaHCv1hiaUWuuC",
  "key29": "4hd3o1d4wXWaVsUh1ATmdMCUujJ6hf2LRXHCy6QCeaN8a5mnxaB9qkLovfxn2XhUewyWWsYKUxqdhjWWGCTyj7nP",
  "key30": "2DaPTnG8g9x6NEBRxmmB7wXJrMscoXJ8PvtCUf3FenqD9VCid41KUi81bXjgzBgUfnxrj2fEmdkobkDYxwEZu1DZ",
  "key31": "5v2dzb1pdD3aNEvwepW4VvUUSR59odma24jqWxpwmYV7wZ6Bz9D89c8zHcuJw94U9zH5Ss8N8PdafxxeKPNe215N",
  "key32": "5tcQh1wjAwtcLkk7C3mrFwNPHy4bgrEWxH3n9SUnqdunMekq2nCEqzZPWYLLhiWKagiTovqRy58zjaBsJomWf5mB",
  "key33": "4p7GkcRsQyeDmme45YoW4ko7opPQX8KVKkqZR8bd7do4kzPtMaumJEDumMkxNdCWHzkQHc9J1Y1xuafSg3QdSoQs",
  "key34": "2z5Tj56yEFNwp3PydJXwFmTMTafaAKjmTVxXvjKYJu5aFF6aXvBbbXRpkfjt6v17w5tmBGsiBxEE16YPqYKmCRn4",
  "key35": "3Bx8TxnZ9EKYdrAzV28S5JwoaofeeDSVo5urDeHGAMH6snv7ZjGg3AFofz27LqV7B6W9QARnYxaU7KQ4BgxWN8mN",
  "key36": "51n9oHGTXXfnFdDZCfGdBupvJapF7Dp2X3iq4q9f9A2tHM1kD3qoAXE5CbQvP7PZBEtABvAi5S1kyUkb69L5U2QB",
  "key37": "2mQpeRyqGrAJYvFaU7RKFAKYLEGNbC2aC7pgLm2FEwbEqdXvxcR5mJjR1mVjXSA4jdbM2VXuDrcVKvngyTteeoA8",
  "key38": "5SVf2WwyD4cmK7VpALSJhXX2CfVYfpowANKg4Mfe5EPBMxUjU887SD4CrFK4jcELiPgEW59YaANGyR95K2ntHGG8",
  "key39": "3hmDZQmeNVTrnHcHkyEpKHzcswpi7e9W2HsFuV17JL614nzVxB4oNtTh7ri6QcqcpAnJgqV6hwUeGo2JoEaaXhhd",
  "key40": "3ugfgWmA6j3NrKQTxFjJ59dHbsKnC9dVoTNudkYhebuzeLGSWpA9NME1wX9gBD1w6KgRBU6j7ZUKyCrkYvz8jfkt",
  "key41": "AH9m9dSTC6zkgVAVKhUGLZftzUVh3naYkShqtYnvdxHqgurBWQtUo5gftChVQKfPYVtSZCDLxvVBBfngi6Am41b",
  "key42": "59wpg3MJJRmcbiBQ8NchkwwJMzKGd1J1h5gTZTfcGGYPZrqtfBcUdHRjnfwZLEjme1VtzNfGp8zWLwiJ8BnaKPyb",
  "key43": "r73VkxGAHV2KDRdkJ24s6FCXuJqwcSyxXbZtxHguGgw1mfDssZVhuwmqcv5FZrNYvdCPnK7WrJ4n9jXCpPSJnBz"
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
