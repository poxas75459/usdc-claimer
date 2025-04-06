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
    "3z7j27hs9h2LeSFC2qFsgYWbofkMqce5aDrZvHFnpzMNYcoUZW3r5mY1MpvaHcogNjJ8mz7YEPwLHZ5sjPVqAmCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rYWmK8ckqSEnoeBmfQ9KqK4FkKDtqP26XYyFndnHaQwtXLhx4iV3fQajRX3SgLVyH97Hx1BXqCChzoj2hxg1eRp",
  "key1": "4NKHFQDq7qzbLXbqF9yvkoQY9ntwC1q9KAjRt6pxbDvfGLP1CduWDZv59wEPAkyx5p4JbwzLVjiruA35yc88bquv",
  "key2": "3KFYozowUmD7VACjbkrBXAyoVr9VegK2yafijRPFFHp2WZvQbaU44aT3KXVEhL1yy5T1tqyABmjP9Z38b4jeYVDx",
  "key3": "3ZgBPQa9rfivCDWfG6uxFjJYgExcVRoNS7MhYdcMovz3CJ3gjvHSy314QGQuu5yrEDayike1KSprboxW2sdUmXix",
  "key4": "VGLs3S3S9FwQdBh1kQkAjfAXZ9G8Qk5aZoA2u1qjgMFM5aPAmnTHBaFyURBypYCmaB6dykLzyM7HNCku87L42xs",
  "key5": "5Ahbw5nQnUMtKzVNWayv96mngw1dBggn1dFtrzZsYzMkzTCfxwf6svdiH89W4cHg4HWFjdtHxW7cdQGggtBTAnqy",
  "key6": "oqho7r71KyNBs27RGcHNn7qhChZMJvenvp3QkcWE8KdbDg6CU8WApRTiQDEmCA5Ag8sRcehwnHsSui3rJJLVdmT",
  "key7": "5SR9SzM7ja6bSPmC3Z5DuQZ92zbYmf6AftbQmC4CtWGi3Mcp6XN8QFpx1e3jXvXqLGgMKyPdLsmfTBHJhqTkF5Wn",
  "key8": "5WknyLT7Jvp7WVufkoYUjXTfPdjvd1tdSjfrbtrs5uESjraehzfYU5z9twp8RqWxMxk3muDQzjb3QWMKwYeKfjkX",
  "key9": "Aj3s54cj3cFWpCspSjT8c44k3MgjEfLfbfevqx1iASS2vhB9QvKap3qV6BN6DjSx5P1CPF57WBmEaU62SSKcbr5",
  "key10": "vodyWnDZfNLnSKcERKPDA3stWghK4bDxNXq25G9UAquPjJUd6cnNF4PUmK6Bc7VjX63htMbGcfL3AXtpqk2r8EF",
  "key11": "3rxNNZf8gMMg2i44pKqJiqisHpZeeThbbpNQhdr6AFmq9TutkWHeGDyL61Vary1nYrBiPBr3GYFEfE1PjCBxTkU",
  "key12": "4HcSgreWZVdpHuRtJm3VPBc6fabMZ6kPk9eUG63W5cvPUEXSC8Y3xhHDj6caq4HNRy1EMF2peC8rtNCf1BYmgLPR",
  "key13": "5oLg6jR27mBzQk4Jz3b8R85yBvpc8LTKFcQTGvCH2AqCQ9oWr275YwCQZFZBDBGYK8k4PKQ3KLEXg8mxvYE4Leqo",
  "key14": "63am6pDQQvWWEPaPVJdtvigVJHPNDTWgujeNW2s7hnA6aMtELoJPjmUjYH6ifQRSmETTFwbaWrPdiD8Nakd76WfU",
  "key15": "4dWATF1cew41YVzp8cMrTY8vHLmPYyEMA9aJB1FT7hhLUnt25H8sPNQbVWQc4pLeFEmj1R66bpAYkTzbBJ7xK5S9",
  "key16": "39G5e7ACoLuZMEnW7t7JpDPNeGNs3a4iFSeWh4RmJgSiWSULfRLxz8oATRym5qf8SDknWRqWThoGynXbwrL3mu8r",
  "key17": "2ZctkxP6ZrhsUyHxt8eaJboDvujWSfWTkdHZEs2ugPhcwAYipSqVGTh6FbEngYytga3WEgMecvgBRDk6nXdFkcoz",
  "key18": "4b6sv8rKqBuX5HcPcrUQXUXXSR2h7LY87ufghyHYRBWogUfmCZtVU3Xu2wrLs2KehGBWgNzMHppGjPKfjG8PzbkV",
  "key19": "5NrX2bpQYDDyzGbg7HLkwcJs7jiRwKVd2Bs94ghUKkwCeaKTarxvKNPhBpnyLosR6SRtJB22dNFiAWRad4FU4wK9",
  "key20": "5MH1HGWKaupBFNDCA5JACijpcKuaBZwJ7d3JdbqEZHPTRfViavDSvN4WBcbRT1TQ2Cbs7NXFue8kvRUkPeJLPrLd",
  "key21": "4PaC6uCsA9s9pz8NMFENnZAo6S23x8XpbnmNjhNWSNjDDYGVJWbKQgrcEsxKXT6W8pkyu1oKdxxBYPfBTbHquuaq",
  "key22": "XQQ6Moqj23hvfArNXZd1yeE5jDckeYhA1MUEbdJRYWuVnF5Er1ZUtrpTefGV14o64DhR1JGc3GVdEgjv9zuTawm",
  "key23": "3kPeyrfkdMxRPvCdibNFjj2bLNhnkGywzvNuFMmBqimqadE8PM7mi3Rg17s1i6Up7byvpmPr2u1aKk6DcfWnWVG6",
  "key24": "4a5RfR48hZCNkxdcFMzS8prCoy9KkV4Q8xYWStnRBnwuh69djNy978rHF4s3ZjJaQUdEjeQ1tzK2wfbzKtdBwBoB",
  "key25": "iNLR9D36yvB1r6D2tUeuXTQzKLo4mXAAptNLX1sRryG2jEu6ZRRNYUuDw6mrd3TeA4RepNQzst8D9WUv2XaPjJg",
  "key26": "zMJjBgHMPMubPSEMhVFQyssp1acfqo6CuF38v5c2vufXGxC8TSZJspdSLfhYazfY7XFtMvan4fBZ5Q147TwoVr3",
  "key27": "3TyzCE7nks1g6QFUi2uYXASRF3ZYbGyJzGe4GesxvU2UGbjmExQMuEH2RTZDFFcxXvvutkRzF3FdnBjrEYRqT6Fz",
  "key28": "4WCFxLowLz74Pgfv4TBLYHj23ADpRNmzbsuNESVGNKaGV54uzaoaHu469mP7KfJFvsEzJdJYakm69hzouVcXThpk",
  "key29": "67nVo82jLwv2TvSZQTVoaQeqnvtnzEtQTHd2dbiKkbX7jqaHMT2SdyovKcRw8jK8bz3MppvkBEn3v2B9wg5cjkpy",
  "key30": "4xfAXCm1ohkhbAkiQeiRWeZLtDxYbPqa5MkSKJxKEd8fjEevegjXXD4DxqmXqyWbTTanNUJV65sngZnqtSKiApFg",
  "key31": "2WzUdpcuj8u8G9zmAGb4F5Tgu96EKSXqG8uTryMDZtfJefrasHBg1EzgmdJM3xZZfqKC2YyqnAku999oRsxc2FML",
  "key32": "5NcNpcUBTJicwYTQ9mfnuQVuakRA2tCkSxC9P73fWpUPH8CTQgPZafohrDpnpGbyjuSiLFNxsNQmBeQ74V6wR7rt",
  "key33": "W77SFaUCWfbTw3mSn15iC5wYB6MULe2xAZP3ikn6Tu8sZKh1sbpMwCmE8N2QSPX2GG2GJxV2BS3W9SfhqPx3jTh",
  "key34": "3PMuz9NSAiTXaDsoq4kxLYs3kkZwsbpUZCt5FJajzVJRav2Jphq5xTY8srmJGz9kVfVTGNeqdqk3hJ5dJsiDmPy3",
  "key35": "4ujmqRg8EgNWTKcyhzG2sN7SJjqUbGGY99uJf2Jub5zmH3Acv3mKgdRpse3B2zT6ZMBhEvxJ8jRKL8PVaLQKLvxs",
  "key36": "4U5XiFwhqMWdE1MZw5m9YEXMSdxChozaMuFhDiuesSFeiGaikRaaxzfHrG99QWnXRjrMdQFyRDimk9JnETgBXkTa",
  "key37": "3vmWVq8ZDvkR1Ecq49MhJvF8upUtCESEHTjxmA2j3j5VVVMSDUn5no6J2RLaxcbY6fvVnzm91KC93udSt2YryK8M",
  "key38": "53NtUfby7dLNGjZ22RhWXsoVAUEmZjeq8xVym3EsNtFhgY56MJcad7j9wAF8UPgBkqgAEEyNLQDPMMSWhSjEe9z5",
  "key39": "5xPNLAkp2kuA8BbdGNZRX5yo46D2vxWJAW9abhmYHNcTTv2E4KLGq5uCyfmfWZBcoMBJWk7bMpSMj9rpVSznfQJ",
  "key40": "kENT6CNbWxuZXnwNPXJUiFLeW8jf72Lfq6THiRsppRts4mFH4QNG8LwFmh1oMuXFVb5iNcZNw3Q5MuXpHM2L8vC"
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
