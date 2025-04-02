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
    "zngpQU3ifjxTwQE4rhU1L6hhny2kBkwV16SMotGq648zU7zxCx6zJXJsemZVmX1x522xh39uLhy3kRbBSDcJGKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zoAWstxZCypsyuQYiUuk4kXuuKPzDznoJsjw5nmMcCMPJk1eGCruUiHE4QNwv1FpcimjvxjpyzDK1qtKxgBhtff",
  "key1": "3UskzLBEcWxg5nayv8QPBchPrLtC85C3bDfYyWZFWLFycdHCwg4H6UaNCsjTe2Su4nXaTGoaueZhoJk3fwWRwxaM",
  "key2": "2TGwMZ8TBkfbrsEL3PkyjumpQvjZdHQrfsVYXgSjQLjUosWTp8eGDUYybkEbQ6tWhXk1J1JbyAJJQor4waN9nQFh",
  "key3": "5CyTsDwEb4JyASy6hVQyGTDRxGxSeVpEiW7zZn1cFmeq6BFqodWWh1t1SDtUb9vWRTSXdDP9ZeS4HPcB2HEX9Qkg",
  "key4": "4i8wxG8ZQk2NsZZf7bVVzDpU94mXH6BtBng9R68j8HrzdyAzPQAqWMZDAqtmTdCzHj8HLFjbaPeWcgYvZYWH8sr6",
  "key5": "5jrUFWQq7WdGxZm4n677Y36HSFN1CWyuStEUjU1X72z5FzmiNtJoivy77nFYMZTR8Xopqo6THQdaJuLcge1gFQWr",
  "key6": "u93j5mU5kYxi1zfvFhNNtwa3MnomHP21fRypHofZcUsxDWgAjsuGfiZP3NjVxmKLJKLyHEtHSMoS5ky3RiHHNYk",
  "key7": "vbsKyKWmpVgdqV9Ph7ekdWUgr7bXZf6VkJJTceewvs4JPa9mZGz9M4Pc53hXbdqvyS9a932yG4UpwYUZpgqM5Z7",
  "key8": "3pbbJXZWYG5M66EsEJrVpQBn1CPQ5gBZ8Q2BbPRDqpcYTUVF5HcmEqP88y3ozaGgwCH87ZFd9wvMuYXjn72JxYuB",
  "key9": "4QYwzbVnBSC7hNBrTjiJCKqbtXWtRAktbxXmJtBbqwiofqZZjF8RnLdxo6DtdGdWhtq2LwGbrLFfUynVQPKpav7f",
  "key10": "4oKUUviyxop5U8bv8BvC9SEjfs7Pj8zFjptaQT7nRme3SNyi9WqStR8LhpVMp1469SJASQ52ZH6Ty1gLaSSgcBtJ",
  "key11": "eMqZ4UyxhezwvcJW8Ekzc7onN46wUurw4DhEpeoHXzhaYj3pfYHhXbAGJa7cQyyjmcBdQ8iKDH9gsSXWWz8wPyQ",
  "key12": "5G4D1FXfaptdW6qTcjYYxXexqoAAQp1r9SGHo76EGrRALkFue6gptEykQdfw5AamALgSwgPGM3DNyA2qm45hRkJ4",
  "key13": "2AC3143xdPzjgkfWkuzkAr2dzBUHXugJEiLcXvwKJnqFTcCgpazXJgSkrxp6XKd7KbGC1VqZrnNx9RCSPVLYbY1m",
  "key14": "2FdjXWXaDEogGB4zqULZyAVXXnTcK33o69nKqCt6NZ7wiNTnbN7sdXQmncssoJhhisqa92HoLB3tqotK8nTJSwF5",
  "key15": "2TGfrLxbhwMzm1JTk5stqSMFLZn2vkNVZboWCpaDBybxQfmAGv4veWNPAFuLYeqy6c8Yp9bX3PrfFSWSLxJVrcPA",
  "key16": "5kgaCycunnq1eoXECNbAjWYJ76bNGnYziW9qXVK8W1MxsrurychpvXQzFTpvD6UL1G7Bq19qUeof2aW6pktKJvDp",
  "key17": "4qngeUwFBPbVFMX7DL9SSUAkj9J5WXTSYc4Z6UncQKNGGyygW2ti1h6xqiuZkd9niArVFFvwV1qjCTARDdfj6gR9",
  "key18": "4A33ktbtsCpmMLNCDJPPiCW1k2S2UgkzsKE2ahmFr9VvniPUq9NXUUpcfbUiLspPN75791kmbc8un21p1ekua9po",
  "key19": "5edfZ8sNXWcMCwrFF8Km1FjRdCds6RKH9cGaib1xWtNHdSb1ZQCpXf7CnwZxX3yoMLvGLpWKLHSD5tVgR4MsMaMb",
  "key20": "6BJHa3xptUyqpYtWPsrjBn1u1WpFNxBbZH3PpLcA1uPRn4KQxD7VQp5Z4LTgUHNueAC15x8hqBsRVgsv4nWtMRd",
  "key21": "3h9vEFSEUU9RSS1BmicvMCovFMhMNLAC3Pt6V8QcbnRpbEY5FXyhkPx7hqLUfQf3Pz2eq6bdLobWKrSmcpeQxpNs",
  "key22": "5XdJiTgHjLoMK6f18pS9u5LjAafXzdzKU2ZCx8P6wbZ4z4nk2S9sY4ASofzsncFuqbqv8G1zkVXPUqvULJqXbjJP",
  "key23": "2tigS5b15q7nxTWBuS8PQSX2EGhyP5YHVSZm1AKQuLKkhYEMdxNYeVDAX7fEysgkzUo7qiPBmXLxAEREEMdeTf5y",
  "key24": "5xcGtj1KXR5nhCdQv3AjKZg8baDGaL3aZpdF8h5MKnLVFSMtuefhZCu9C1kf5jemsDTjM5KqneQGYqLb55rxLjrr",
  "key25": "28EiTKZPD3aAtfMPyRQHt9nc6GrYB9i7Kp2SEj7Xhie92qTtZDZCE7xpS8aG6r7AWLNUnMJheZQExGCUxMo4kB75",
  "key26": "51wTgRyFGbJBN7qEY59cdJBe18DCW3pHSc9vUpbxpFrq9tLp4fCZJkRnX2LTAtmbqqaQEaT9zV1jhXG9UiLvbAii",
  "key27": "54bNkbZTmjG8duLF6HUyAKFVRodye5m5D3c1HJNirXeKNq6CCkyP4h5mh9fCp1tYbGi4WXxPZDdyGyhfpErpJqPg",
  "key28": "54VJDjf4w5coqRbBXx9EeYU2u3gwNgx9Qw9pqAfFXKzQv6Uva516JjTLSTrWkneXitxxoVNjzW4wivCm1Vjmz4Wv",
  "key29": "32erNaTrzYSM4j8RjrDzfyHd8sLptL5tKVjVZtyBn5sYYSGDdwLPiHKvLRcFWWLn36vjnCZnGd7ES93gcTQpQRus",
  "key30": "5kUhG8aoFAGUZRoxiouQhR8iwXSWF1CzdiYZzAZxMsogS6sZZHcR2CmgWm2512j65qb5K21TR2naJUrmscbR96Ai",
  "key31": "3T74gpfCaBQQbAPTRffZxwJa6BUa2ERLzvc7q5nSqWyenBPyMAFVjPCmcqnmnk1J1aj1o7HeGeGk7BLNRqske3gm",
  "key32": "4MirE2tAaPPiBtzHuQmqXcQ4fDzgkLY5vnrfKQDyXHQfK5Q3ankiyb74DE9SG5hSXMjxdSpn3QFUByFLyoqFv4Xo",
  "key33": "fC7mLzM96QP9Veo7Y16vhQubCvsmDT923CTddKytkPbzkhPX7C8Xd9JAVfVjtqtvxACeFCdKRkBZxhKarZbJfc6",
  "key34": "3kQwzkNuA9bfwnrrBtLHL3BmyEULRgckhbN98gjSmrqraJdSdqm2Y8siNUMi13wupqZKDyMDzYeF379b86eawBf7",
  "key35": "PHNWauVEtSfGtA8FYyN9mo3YPDtbEv6HDMRqjQAcpSKPuqstMR9XJNZqamprtn8tSkWoT5FHbKfdG95LAX38JPG",
  "key36": "5ZaNXwupRoAw9rPDQ8Ui8XskdiTS5zuJDEmKbT1xirxKC6AusudLQwi1wqE9UchiDYaatrPsf7WaAyLazP6N8CTM",
  "key37": "2KnVXYYfqZ1LzinRarPU9noXaGg2dqQZkK6DBrCR8qAppBXr4sJ3YWQqGZSkfx7uB3o1QAoTibGB2QgUmNg5Kmzt",
  "key38": "5NXb2xcaBBDEUr9EEHSVRMzj3MbQ2cYLFpSkjaSDPrmsP82YAZ3EVGqf5yXc1uNQWbuBzSZ4D2QKSXwXS42cZfZt",
  "key39": "QZdWVXiWoi4AXCbuybehB7ADYMMkmuppKy4oY7ZuCEz6pbmtwcoqKzrjkLoVek46LWWhWNLMXn1VUW2XL2Fa9Dv",
  "key40": "wUxwhN7CP6GoCDpTHRwcDS6BGXjNxggzKmpQCr6GvkXf9V2DmEy8F7iezS2ZHXuBcinKU758H6pEKDfB2WuZsn3",
  "key41": "2VmGuaGrbfNEqatuGGPFj28Tu4d9koYZ4PWQyRqxoqq8oX9W2RMzh6Db4YGBH5cx9c5RzhLMHcTdjZSNvAM5Dm6A",
  "key42": "4JT9yUDPw8tTLcsLsHvRpqq7FRqdhx4qsd8eeCehwmDdFhyU63puHSCwhNjZ8BXvwrshkqqxAoCyEyQqXoH6t4b5",
  "key43": "24k7U9g8kFiFb2AvtainYUyn4iSJuGDuPojUuKB5DwmaabUQeotdzmpSG9SSUS1naf3YqSTLZGJuPDQz2H8G1aFs"
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
