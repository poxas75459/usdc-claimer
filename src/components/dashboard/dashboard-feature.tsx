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
    "4XDNCmMkiXhYL2NWHNg6TUbDhUKwZdgLUmDA9ZEhH78GtrQbWg1GhwGrBLna4kagrxDkauEZb4MipC47GydUNXHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PdCj5thqo4gu2bq1Qk249sDjqzBukHwCvZyYF4Qn4Zz82ZRF4bCYyKviteAXXZFq3mDC7KbL6Kaya9oBoLbgQAL",
  "key1": "mBvTQNspZxVjWmPWjxqgpYWYXAmkwUBT3nJoFPFLBkZaT6SZ5LJZxcfm7GyJgP2BVggTEKLg2suMso5UxJkJVge",
  "key2": "124yNLNv7FzcSbmHtvAd8q6UTRAY78E9nQC1ALkurP2kfRiCwFeL6fGsNVH9cuYVxNKzZdYAY9S2XsLL1djo4gky",
  "key3": "5HS2LeFp7UgspAtiAA97KhGRhbxziphFuFpFuR1v2uN7aGbrWLTzPJHQtu9GRtWf2R2AK6C2bYLJC7NFzxcgir5D",
  "key4": "67p6VGYrwKFJZt8kDe5Sy3UDeKXrX12pVMYJ5PKuEkZW8kggmbp3kgVZGkn3iDcjUm9rg9xcuJ7GndAxUp42oFa1",
  "key5": "4BjAVtAX7ARwLfE2nMbg7bQbdpCm8EhYqkPHsob2yZg6ZXpjv2DQ8HdNB2YWK1XBj8xzsfVJ6VNmTdqEePXJFvhc",
  "key6": "3tXknHacdpupCH5A2GR7DwodqRivk4HyUR3ep2JuyetQNHEyPGFf3ZJwJ1RGaTesFhEVxFutihoJtMC1MfMyauma",
  "key7": "26e52ep4Y6ReqPHXEGcTYmYRVkkcQC7XFjM2uxwZbPH2BQoyZv3BjjgCBWGqiBRDxtqzVUdoRzR1XnA7bRJvjNbk",
  "key8": "5YZbhLNh5Hw4qcsoNMNW3LynNXSNDmiMTJvBUQ6Wm6MtRLMpfZqvgfjk1JAgbYSZhVnE2iwFz3BFAyHUw9VVVaGt",
  "key9": "5YaW8o2UZPTFHH91uDCcfpxBYWg75GMtGGMdSoMrq1TgFvvaM82j7hHHxBwfvigYKGE4C1uyKAr67SR3gN3gWnbM",
  "key10": "4u9G31jFnXfFHwSXGFe9pRXKC6RgwUzvdo9q18VGuwNV52ypPQm4oADTEN9ep5a92Fg7bKy4WQvXXhwJ3kefdtSF",
  "key11": "52k9cAhVhpYtXWsF24arepFRxBEc1vW4DWmupNBdE5Tj83VdF1F4JRBojDro6mgqAPyYBK6B8CNVJvcdkQgpmth9",
  "key12": "5bUTjepfB2hA9ze4KMZDyy6hMkdHbGznCpdA7jzsFtqK7pusHjeRahHgeRJnfEyTqZMhb8WN8TXBbXAwwy5RaNyK",
  "key13": "2PHFwWG1GpFMcjBn54DR1dfjQaS6oBGVZaDMnwMeQFCSd4TeX1wkoj2ggQWXHk6cxGhXaVhFQgdpFhmrU5DohRKT",
  "key14": "2Fg6MRWGou7WtQkcL9nVEtLendQqtDheC7gaQZwQ3VpRNc3ucsZNYg8c3WX2WUmcG3RTPbQh4Mwh1c29EUHFgW7i",
  "key15": "5i2KzGa5Le5PXpH5VxE9o4rPxqt2w2pCdg16VUWxAp8q6dHBgP71QoRNb1etsYsxstcBg8aHMT2J8KoPVvwnVTpM",
  "key16": "5skacN45WJBWPcQZ4BKRC33inqi2jmP8ybgjRQduUDJ8gwSDWoLn7b4uRnKRAbWMdVQJiBGPoLYBTQB9cNVypBPH",
  "key17": "dWjkJG37aVG7w8QAepEM9Yma7BwRgiYBu3avrw4p5MR8KUetuzyAZswbFWeaAH5s7tAkPhxFRDXNKN6943ktGX4",
  "key18": "2qkRuopzLKTFB2w6gVuefCt9fChjKqkqCezbr81htWTgpiDWEhmUDSiZwtXjdwuudZhEjzmo5ondsY76gpHxFUAL",
  "key19": "4rHjU3X1veCuKEKgFKsVVBrx1GtC1qwQJwWqMJqE5xUzhaktNk6PqVyoqaaw31Jp9CpE415gigudk2k9svv8kVQ3",
  "key20": "4gGb9yvdSf8bDveZ6RNBnH1eosg8ZSXDZvigeyfr7njJnqptWKTaenzPGca1CHmnR7spHiod1rcrQy2sonQEwNjU",
  "key21": "5iahA9xFufRZ5ZMnkTFxtNvao4cJ67rVrN7sYQZ9jf7GMQSwur5Fm3mAS3B2mnjuRBvTuUQ7UpQNJ15NeoeT8jb9",
  "key22": "2G344e87osDXAAnXa9cmcgD4ot7JBTJPQb59K7dNnZxYvMqRPHAaY526zdm4hwjN2whkdcAkqcMy65CmzAEqASiG",
  "key23": "4BBXHwZsc2EqUzgRgjWEcv7nZ6X7EyR7rAGswXfSYjRawWivoEq1TQ8SRuYJPTX6udCBoL6i6uuFzwAfbdgfwtpz",
  "key24": "36LW6EK6rwWhkMGZJYhZ2cLqLXQVGgpAxZ3yt8y5yvNWbpSx7AJGERbcziYenPodetDNZwcxVp1JstsT2z79ZK7r",
  "key25": "4WFh2KVMW7X9W9xiLLYJt1LhkhU2QD15b9y21m9Q74s9kx7Lfyg9gtGrybP1JYBKsEADGDd3H7pzj1zYpyzG33Gq",
  "key26": "3a3wLHBaoXEeX79C8RSrdn1Qv4ZsvHWxAkZZGLc1HH3Gkmzg55DLhyvRK8RjkGVkYWUHmUX1csMpwPDDfuTcqG8n",
  "key27": "erWRFxuGL23cRNjHZANkHBQcLKJ4VkRVV9ubcAh1rBmLAwcPnMd2gwMZKp3FoUEshvJhcaxSubMkKR6XzGztT6y",
  "key28": "vh5ozCe6v5sxV4GXb3c3N1wpAJPZxSuheff8J7fPpqisoWK8RzVse9gnzgQg8yDyW2Kz3bEqKdf32A7cc6vYREt",
  "key29": "24g75Vx6ZdCtBpegp49YSvNAgByzawLV1qJUr9BKQkmSBvSQvpy46jTiBrXJHAVhHA7TrRq4u5T4jkGkJJmssxQj",
  "key30": "2ok8f52wQvJS79xBBcqxNmpwU4EaZu1hbUHNZageuxSMtVc6XSN2G2af1kFnY7uhAAwNGMq5WA4iw59n1n7WyBuy",
  "key31": "3NnifZfvYzqWAeXYyN37eg1k4BSMpvs3CVDcuNAFPZ3rgVoahtWUwgtB6YdMBHfMFzkBgW4ResHiH2kUAhiNFYjg",
  "key32": "5YVnSaaGCNd8pZhna4KKfu5ZJDncBo3b4VPufiM77zGkBV7XqFQovUNuuEnAzWZzubbpNKEPh94cpkKcfsYL8TTk",
  "key33": "3FPb3hFb2NTH6BrpTuMquQE3J8W6DmjQr9fSvm2kyezyG1QNe7GeNpXk81K6m7t6CoqmgGZNzGkK7BmAnBcDZ3Nv",
  "key34": "4Smn3gsWiodjbrBGfWaur2S8jaWiWNrqNqb79riUrJA7FX7CCDTYHsyg3Z8uynXcdC9x54wNBPzdbGKXmp2FKsSf"
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
