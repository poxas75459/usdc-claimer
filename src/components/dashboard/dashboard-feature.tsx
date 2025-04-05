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
    "4HbxLFq1eNuK3fjVq3UYw6jYFEMoCkxJWk53EHJcMmjM4F6ybJb3UC2Uup7FzG7Nomj5vX8rWKCZhfAaRcKM4Q9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n13ckLb364iemGhCDdPxaDCpJYoU3UzqjdUtfTK8LbSQoarDNDvw9EZA364MdGoC7Wa2Xv7oZDggpya7YdpsrXe",
  "key1": "5QQGTocXBQBiG2xp4chthT64i1cwcSey2rJYW2DGsV573eVMhHYLdt1YbfoucZr6ePWSX2LPcr9o4F5WzVwnCATH",
  "key2": "29UCK15upPJXm9hUjmdWxwZGznkA5DSPc8pSe97g54tJczqVcPZ47guTaWkxpPsevwNWxWnSqywPkjaSzr2jb439",
  "key3": "2cgouYfaWtyUVhYqZLndVu9g1XfBg3w2q7vMMMee8aeJ5hHXstzwmmy5iUpBougsKk5feQb8m98QsF8WYGxGVQsB",
  "key4": "4hBkN6CWV2nd6wTqtn5VB7ByogSJyafSJNo421okrAfMMxwhdTr7d4UdmqmnZEKfQd3YKyvbw4jYCFQ8AwFo6Xue",
  "key5": "36PQMBSnMRb5hx2VQPEpqm82GTCZm3FxjTkwrEBtSp219PYudZE5FybDhmZrJdZu61R6qN4viZPbpSNYfeJhdVe3",
  "key6": "3TE47QVZCyhGw7r62V1wAQqB9BQZK7a67RN3X7xkBUaqTXigooCNL8uMJArvn1ZykTCT39uRFR21egJZbRjWAdif",
  "key7": "5Lf7qzaMPgsj5v3xUoLQypuhr36d3wgU623Lcx1iRbXLoWqQUhMCX9cRhgFfVoN6tSr2srnxvJVr5B42UDi3bM3k",
  "key8": "4JGxHzY9bMpibwcwrFQRxrXXp3AhomBMVuPeScG2hQvrep7DfNqDYX1a6ZVhbD54ikFnJjC7WA5PAzYnrpaE7Lne",
  "key9": "55pZ9NtJ34Apu4CmCDSm8tGuxWo49s26hCNNhhvYLvRntsp3hNGpaTGJZyfNNyR2EUfp39je5LzyUTWvVRwD53xQ",
  "key10": "42u5Sg18aoDWz1KRBvzSy3ajRwCePJrJg4ZQVKvaXMMvKHquKzUYsN9YzBnbKbPz2Ucvgm9P1icMxSTspdWrByeZ",
  "key11": "3vp3Z3AgsDvYG3AdpGCmcDGGr7pjvUa2mgTJ5M3pvrAUyji5pb7rKhP1z8S24mzzuBTXef2hjdYUfyzasthqRQop",
  "key12": "3Y6GEMmJy2XtD1uiDEVkYhqZwuek3KQtSmdWEcXB88cKGkSyBdQRA8tdCZWKPfiY3n2YpM7kXNSZzxnNGn9d36m4",
  "key13": "CuQiUpMdBBa6h8nwgrDZ5F9C3iNAep1mCCjaUggUdCw4gbvr2LfSmWVKeJsk5aa1zJqh2onuzamSGZnhHM3x7He",
  "key14": "2C5CCPg9WhNr67gzutDMovNC7d1YFePYeqL1ozy6vboie4e6BfzPLNHNZeRXyam7RP1dwzThjKx3KBtMpsojbL1A",
  "key15": "62dYpAcM3VWws9uWze12yS3CgE8qVMSXGn7uys3yTXLeu7emky4dE1iHE7TGVQZVPG2MwvRNQEtHuBSHxWdWNAdB",
  "key16": "2wekrpc4morukqTpRCKB5pZYC5Zie6jYHyKXxvNgtYkXQffEiqPzs8c1rL7c7urvV1mTtBgn6Uokh3iMj8f6hJnb",
  "key17": "4ZcpCbSuGCNECU6URhyKAevnDDkSeBs7sUjDg6ME8s6nvmak1wTyV7J7oo3MGEhKaEPK3Zk4VFfzZVKWqe9eyzNd",
  "key18": "2UHxfK7K3SEkdDWUVpESBUBESuU4xLrscZdmq25jUcqVYJEy6XzGMmsSduAdpLZZ6xkDPn7Nvz2tKXbixsqSoo7u",
  "key19": "2gQWAzc6ntp2DwxNsDNXWkxZnzKUBmp1DravwbdUeNHbKygjCWhcmXVRor9J4bMVVwMxmPn3CvXTMB528mdDxTLN",
  "key20": "5Wve49rsnS3zkyY6wvFLFhLi8yoJ9VFriNHDh94vpshSxgH8c8bDJTypJ8c8ad8BxcQqhBXswYGmYBDtUPx2ho1e",
  "key21": "3aDyjow2aDthjQczvtgYGnpgsX9xovxnBQD4pXLEUsnyQj1UKEqxZu15PcbtQmmCAgqE5rHinv5ro8S7X6zMk3NK",
  "key22": "5YeTcGSuoEk8zpPLyQXPpM2dAUCGAiYPwJtcNaNUTx2N5Y65iLPAwscf68BqF73upY9e97uwYyqP9nCH8poqLHkm",
  "key23": "5B3SWczWkvoG4yFzyufuAT34kcE3rUKatTCh49HsYDjmAzzpZoEYPywD59G2ZKtCsuVGjqngAqVUT2kLYbGJCCcg",
  "key24": "UcuPt5RXMCHYTNUyao9xksS3bzy8T2byXZTwQJJKTAbqYf4fK2X3EDMsYXHPdKhP1Z5PUGW8rY7NoiDnYip3j8a",
  "key25": "3fqX4ycAkKFLNJgRYygxKknT2MUQVZmrTYzz6DRaGAEr2yGYSZPXCzBCyrVBe3JdZjy1yY4NkS7cATqzwTs6fH9X",
  "key26": "3C3jK3AVdUAghV26aWQZpFtigB5mo9zxWWrLdvnhWs7ZZzNBqMSdYJq3S6CsnhLxoV9kaHPZAuEPN7hkUXwDa8eB",
  "key27": "3UbLxB1ywj2d7aqTf1pphrhjvKrxKEcNiiGJy67aWuDLuZmmSgNNGfnaYmyJArdSVSqtHM2TADZ4QyePdZDM6gcb",
  "key28": "4j6RB6VTseitcwJYVGZuRynzDGSKwe2drV3B535sGjUCUnvwUx8LUrkfkDMv7qFnbxzKZ9b55u7kgCHM7hvRjvNC",
  "key29": "4bVsnJLudtgdGH55VjXbyzASM2X1Ytzq9DgUSXkobwF1hCPLnZsYHKwoavFFH466F4bhf61xVBAjxNJCPXn5Ket5",
  "key30": "4cgs6oksYMcAPaLFu67i6cf9abdnWpHpusvv2hzMPXT6rEm5ZdKv5EGFYtLrHT5kUE8FUsHEjasePsU5EyTmvieG",
  "key31": "fzUKpfnu8GretpaSPvF2nXfyjreX8nkYoiiATYm7XMCAQzjZR2P5PXQT6SNbQqm6CRZQy5eLJtQmjF5XUsGM6Ps",
  "key32": "3FgccWWvkPV3mno2Szz95bk3BEdMJfV55yYudZAcvR9ZVEvLxrA3ARmo6R5f6GS9HpoS1sDVkYHxQTQrhuw1WKa9",
  "key33": "GujHQaDupvFCqHZu9r2bJp1v8vnspX63G93RRvjkevKYgkontexgb5jprS4zHPWgYvrwH6A3mARHP8UzNQRVojK",
  "key34": "4HKRSM9SPmkRQXYKv4xMunhLmReHZuAN8an6pe5tTKADdxt1seCRTZfhrkpmHwNYkUoMSN46CqD9tfWTGVtxmAth",
  "key35": "3cPFAfvpiC78jXTnH4f22PpKcjaSCAjozzHgQjf2i5qVLkuXptGSeZMthPEER7pHd8B6jZxzTpy1SQDoMLdVJzSh",
  "key36": "4wHSe72dutSYuvMk8hjC9VYChjhRDhLMjNiSMDDKzaGjoQfuceioSvYAvVBZ8g57z9iCrTNbJXD8SshcbQ3eKBXh",
  "key37": "Muk2v6MQtz8VTK7gm89AnJpHw9r7ExvGsPqsqnusQvXzf6423GasyXvVga4tYU1DznP96JK3f5UH2FzDVsHgSm9",
  "key38": "EJNAXyd2BkkhGgQerfw5sGApWBYzpe3Kn2yTiueDMjWgneJCb9FY479amigvYscfujhKtpiRZH2wpHvD2Qpp9ji",
  "key39": "4VJZfY58SSf2QGVLE51SXf2EeyYwKVCZcuTvN9xVDbwJRGscjTCVussUHVwichtzF4wSFF8V118RKxDwQN86o4r3",
  "key40": "3jq7o7MYbdm6QUCLg7LzJZF6ikXeoScXe3DpeHzUuesAqqeZ4N1DtGoyXhPzNc8RLuWf2Rnx4vo4QxkGsZox27Pb",
  "key41": "2aNZRVQ1jDUF7ajP7fybBCWpTzu37EsxqbnTTHSq9dkGhn7MxxWJB1za8KJxHojKyqqKNmWBb2g357h3c3BADcHE",
  "key42": "4QFCtdJykpxE6AEL7d1atUfY349Hjka8yh9dJ4GjHw6VZv9TykQ2tvXUBbZdb8Vajbk5vJbuXwgq75j9fMo4Vp1o"
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
