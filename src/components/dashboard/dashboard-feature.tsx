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
    "2FYNEhyznZm8RoGWKigqVvrNBNA575S66id1e5rTM9T6eBr2Krac7zSefqEABBoRTjSYpfqDiBJpBEzW8tx5C1Kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jfR26H31BxAz9Pj8mimrcbk7uJWvKt7RBuxSvHaYhnBsxadYNEV3HwsbikcX6K8YeWhcL8udyGAtQC7xgjvwknx",
  "key1": "5shBuUvdGSKYgvn2AEMfHdQuY3VAM5aQJ4koc7iLzBWazaC1pnJMsyh8CcyLqdJe4BR6XBmc7gAXGSGAF9kSKyc",
  "key2": "2zrrKPyZfyXsQ3nzV3ZjdqVDFLTkxibseM1gDD6yQgq1PNcQ6fGov9Z8LhLwZMR81wtWTiK7yf9i7jPqvbqYWyFF",
  "key3": "38RjiowH47QZBC7ZySMDahrE7c2SnsxXYXa65PMPqfZiZTMwaZxxRtBM6r3v1yiAg6xqxL5AHgj5L67ZSjKZrbBp",
  "key4": "3fRAbKjRt7QFZyotAGdRHfqGAddB6qVR6gxYuwxnzkPpXduUMkBZvUPzAfxM3qGDPiyoqMtt1WcXCctrkReJh51r",
  "key5": "5vkqt4pRC1kxqF1yiGfFZbB6sup38iX1GGAXyBpuQRMxQwtgY4RkoqpspWHJQ9DxVr6Yvp5iDuHd8Pbhnkfd1sgJ",
  "key6": "TKYv3HNMmgdAmD5Xqk6CvzvLsdQiMY6PC8UcJTSkM2QS6zJjqD9RMg7qqLxFuCAq71m2jNm37RWSdKa6RmJ9Exi",
  "key7": "474sL68CempEkDZietR1uSJwadqG2mv2FudWSxdGmgX3hYkixigSjYXZLbY42M2xnsMAqTDVE7RBvzLDR3PRb2kZ",
  "key8": "3fDWxx4hq2f1Catj81TfjRBAxgMDBszg9WFdQkP7mQeAQs4m5J9kVPYJKkKncQK3xBCGMDKPLGXr9xyATtSPuvpZ",
  "key9": "5Bozhbb7oszvQHc9iLbBmdmkAGYz1SX2s7msFMuKTpNrfZpa59Qysn6iSEtaNtDGUZt22CgScx6bk5KEc58EksUs",
  "key10": "2axkQ8CkN6H5osqMuJmrYCVkGPfAn7fuGgTgFmWd4E7kA71QTaLC68d6qvGoSFYnVgkUrrrZT3Z5eZBfq4GqSsKx",
  "key11": "eqJMBFyTjbJfeYYmv69Zer4z9rzNPDST73CCQ5bFgLUnymmcU9mbirFJAW3AfAF2EJcTbqbMcVD91MVLgKp6qLW",
  "key12": "46g6go6NSCeiWKMfDhouGhs9TzxJqd1gLoxEDqzpAcraUSUX1hs1JCyQr4iW5gobJi9sbTdGL5G8RH6HVskzH6cE",
  "key13": "1zzVZhk2vYoQC6MhpBDzfkv8FPT13nCWWMcMEmDjAbXnGxqzt5kXp85EuP3MNnmrYLGFdwib66XfzyxjFjFejyw",
  "key14": "44Ry4x241BLoYq8k6cfGTEvVuyeAjPGZt9U8FHxdEbczY6wzMQqKnUqcEcPeNkzHjLapotjL2Bz3pMHiei31CRDP",
  "key15": "28E6He6GNo1r2pGi1si5LhA19UFKTrwgUQmeNqeQYXYgtfDec7tYzLptCEuSQNdqK6Mvu3NxhWEwpDcfwMKXgpKU",
  "key16": "3qt44Xee5DMWMGUo321gUV9Cn1SDJmeHk8Q4AbZQSmgt54ahNpRraLYRJhW3yPpqjUsEbStqQ4Ym8UVFD9VAFLPR",
  "key17": "2kCtdPBnPyFT6rDmABx9PVAFRrSDiYt26oQq6bQ7kdYeih6zCWMc7H3B6QkvwSns4EbzGr4p9Td7yEQ7LVcNkg6S",
  "key18": "5bKtPDE2uhvCyoGLbsSy12MvmN4opCpZYDrCmXg5hHLtFjSjxSLnpWa8s2fvpQdFupuK8c4GceeuZPn9zkjncvvp",
  "key19": "3CAings1SRnketeou8EfqHKSLQ1SYHruk9wQfijTp68nwNSrWoZB533RsTbrxcsceDDtdCdhMTfHKZZ9g1fDEgdZ",
  "key20": "4nLpH9YaGm6i9xLPTbVid4mRH9uPdfvegLoyXrAzD3jriMhiXe3YckatX21t8nKVdKN7prbJDNGi6V1RdS3WQKxL",
  "key21": "jn5uBAnVhFVbxTqqGMBUzkRPVsjJMHrHCZzfT3mRZVAdR7fku7XG3zvP6KoxdupF2TuUf7zYynszc2qDhuF1MFM",
  "key22": "38BbPBxMdrKgXfeRDvNvTmZqoaRxAfAE7a4QVofRxj6L5mZfhH5FhptRTcxPGrVygWcfXJY8r3msMYhRDeduXzCf",
  "key23": "2F2bruUJkF4Q4TrJU3mRtDessZu3Qo2WRTGwgfNQhPPEazVzAmQx8NAzoNfCPm3LgYjHutb4QArhqzzDjwGZmD4y",
  "key24": "25kgwBEqeCp3VDq2hVBTXLdyJcDyc78DPhejhZMkbqzf1AY6NHCKo2ZAvHFKHChBpSe3NDRJxZeD3pJFFmkrp78B",
  "key25": "53S9HZswTUahsGwcVvEALcaq21vieSELnQjvb31QsdzfrApc4ZbzB4tzhdH4gLyhf9p3gcU9ARp9sKrp14NsgjVQ",
  "key26": "nb2Em3MrcbF6qDnj4R56Jg7c8M74VsYPPf4a64Lp6KfNvDqvXMKYLpw8ETDsvvquPds7oxp6WoNzd3aUDrguUCf",
  "key27": "5L9pLfaSS2485QF22TjdKaJz9Jw2a1SrRS67fQJdnGbqjmvWWk3QCKAzz2749eywZwQBbvEd4fALt5EzeLZtgBDR",
  "key28": "4SDYaUEsahEYfDg2pwr2uhtCxdbQw4ZMMxrUyLoXbSZQxLBPzUUB6eUeyAmwtrTYUtduXTU8Vr7qoXaZrCA5iyPd",
  "key29": "25YS2Hy2STqLKTaHtPyZfFUeKJHMmyidtUrUbs8VZYxCiyGHuaU9r78nr2TCcGYMCrQ98nj5Lj67octN7fnExZcW",
  "key30": "451SJMBbuZ4KGvCrNkoKtLAcPMKRi3ViSo9emiAwJWwJrqL5TZCjHZuxqvWi1jCE9xAAhqtMrUcVGWQptMUdsmju",
  "key31": "2dfevVf7ZG8VyoRL9e2bxbhbDXMB2pbRp7BB6tmmSUenY4pkW1ahLrXcrimN9Y3UYMCB5mHh7BwNc5u4xBmW7khB",
  "key32": "5DtadLnYkqRQ4PVqk6SUKH9vkKbLzzsoyPYLahDN7bynFDNybmTASBZnRdRufMLC4kZF9tg9f8B5Hw1G6nc4VqCb",
  "key33": "4ApkApHrDugnrYTVVoN9JV3JPhPA8LH76iGtYecV5JuhD4E6gU2qPmNdQHGHNMXQ4WJZcWi9ZeN57i87n3zHmjUR",
  "key34": "2d529WDrrnhWW4UdByf8QDoPxyw49KxbhzxRAdrydX2cM96mupRHJzCaVm4DwQX7M4kjVeURfWqnSrvuBCicpyTT",
  "key35": "3kuEmwgCrZg1iZ1oFS63AQjM6yyiLRyXioQckj5wukoxToMcrtRYdxkvY2BxqtBhGZ1t9rcGLkW4m4JDHnAAdP9U",
  "key36": "4YUvJ2HPRCoSYCD37tRb4dDMCeEMdm8wTBB14VjsG2NLwBfb5ALMorRQSXGGHgW472R5ZiMnEkkyNcmWaCXnZX8V",
  "key37": "5wMth9E4CWh5LEfGo15K4hYqndBBteDcweCmb6QwmdU2DgNpMJfVYq1owz8jx2GTkszzLCQGfozqm6g34mwHduww",
  "key38": "5f1rGP7kSNy9DUvxMgp2dSebKZAJecsTS7Sn3z7jdk8GhSB98aaUawxW6yWnjHsvDd41bxrhiAGQcP5D6rvLz61E"
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
