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
    "SKVG4MfNmcUmaMexCo3hnp5MvLBeyQKkK4SJtcPpMmVV8h7mAMML2Jw3QKfx5ceJvNy5ay4tHd14b4Ym4KtjGfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZnRb9KvDfHDErvk5J73TcXc2gXULT92FkfENwBHEXPwzGMj2Ei8HcpEmXzDiW4VZHQ3MkSAaRrCinTG86NLLcjG",
  "key1": "iw8MRgrLb4wc2wQEUKX8Yn67yaMdn3npKQxbf35xgwahdsWCBagpdvATkp886y81odH6XVMb6m5as22D8b8ZLaG",
  "key2": "677Vf3qbrErDnWX7paxNZW2BxtDVEaza5kkpECnWsxbMUAmCYZ3s8jRKiL72MwDUpMhgcCDcexDkNrDgPkjChKC3",
  "key3": "5z86V1jenGjv6SYWR2WVLUxkLAKGNXk3N6e8PmWyUBvEWBDjWKgSNPWJHvkbiF5QVRy1Q4zwM68229sGGYxQu9WS",
  "key4": "2ZPF5Yamnd9zfmsc3VgBrJLcoqQQCz1MSckRL9EiEgTrCU8wZDXUR6SgrPnZgiLWwVHo9KtKFuFVkZ5uNQ4rnXKj",
  "key5": "444ousGYz3k4ZShE2A99MgYzUY7Zdf5PHDgnkXo3myzJgGeJrXFPMy37vceB1rnquUyDAfNrRQkpDncCiMK3HW1g",
  "key6": "2vdRe5MX8MZACNgwroHRqMy1oA2uGCvQkfrT9uy27xW9RXGFWZ5fVGh7g2QBqH64hxE1bNuUFFVgtLb48SVZsfAK",
  "key7": "5naUitk6275V5obyPRaGD6Vj99a4zrp8NrDeeRU1FABchYno5gFYtrTpei4xXsCT4N4oGASA5qGinWagmqskKvzN",
  "key8": "5xtaK2jMb5uvSYqNBF9GYPgQT6YfSh4ULTVmzinPCkgsv1K6s19xNY1FwevmymKSTNA347Tkzmctkauyqx6vXsFg",
  "key9": "4GHnMTuCa9ixNrZ8mpCqKFH8hbVGZAJGADfcyd21fFa2MFdBrLhwsoHShED2ntPeTdWws8UMiyroQ9inh54Pw5fc",
  "key10": "3eQgypYEEvL9tCFiHuAbAUWAzmUMybc7phKEJgYERYD1FqHK7VA9BiUbi4rg36C4jvuGq76kP3u4wif74NjUvEmw",
  "key11": "BcZf3eCyy6QXVWR3xMCU7qPR7u9ZebepJJt9gqCRaV57BHJqnAH1J7KeDVnCPMPZE9YQZw7MCs8GUCV4ZLSCPxE",
  "key12": "2oKPr7QEbvv3JhAU8SGzcM38KyMxjvvwBCbNtxEDc1vYDU929QS432CM2X9DATrknFgdf3kaGxQTfpie1MMLHtCJ",
  "key13": "81janpH8Dyq15wqwE6Jj5bVyyYm8Ky25YChjmMfk7HmLYasdaHyhuPtkQvMfaYieuJKoPYcLZR1u8VdneqNmyYx",
  "key14": "292L2eTPvayrPXMW39oH1bgNKTWPjHxYa1G5pudd4nSbRKWSczzuL5sFMZFZj3rWwvmkhJ74GRymoWtUT8zNj16E",
  "key15": "u9uYASt2n4T1tZNGzKZSDWJR9tw3CRi9RndpELszRQq9keeX4YpVRnz2WSfPFpSXCBKLxcwde8deYtqard2to4y",
  "key16": "Nn1VvwPknTJgEeZwWNvk2LBmfUCWahKiqAikvWecCoyKkoVKkuG3EzCdCZNT6ULQYC9VqZBSym8K788ahRbtXch",
  "key17": "3cicD2J7PevsGriZVUVrh5zvRgMnfrdcFcLrfmtzhyEGGHqw347ZvYEupqJSWyPaN6BDvfg6LsriiAJTKQbfrUpm",
  "key18": "2DbYE9hkzqpqccoF4SB7g1J8RWx9GYVTkWpHfvB6i9nGjxXN5TGS28HF9KJTdvWKkKcPQFBDNB57oSypD8P651pB",
  "key19": "ayVXkUc5UkL7T2iW1811KBmVLrTUEVhTDwZzHMecf2MP3EV2eDsihcwPRBRzZVrkF6bD8HTuoeAXNeWp3KHY77h",
  "key20": "4wonoVjBfVYSRfG7JKf1nwiu8DQgvoTT2jtKhLbnRnSkTpUCP2mdmuAtnPFoDc13jXbh3gPfyU26X2JPxgRj75vb",
  "key21": "3C5TtG9KYrwu4viVLqMXbw5frakavwBLCmfyiqRrGfVN5BFcU8Bj8mn36JQpVEGNYNJxPUR5weYa3aY5y6Y2Aknv",
  "key22": "r8p6Q4mabQ3gXyZWEz35gu4vunurUR9pKkhbBZ1gHeiqFfCGZ7JbVm78MNGGHfFNDLSGc2LdfhCAQMyuA5FgTEh",
  "key23": "5A1rueGfozMvGaKTeogeBdg95U78LJqebEbkYtsZvTChmpAYMZVAWNPepJEeMgqDFQsnSds9uJMJ9VJMtBqVx92A",
  "key24": "3YD1mHDH7EE6Mfuuenprmm4KbEwAoSPtNbA8JALJbG8S6oxV4dpwSux4kZhDpUm3unRmMwWvfBQJ9HVgcSpPJ18M",
  "key25": "5ba48Hu5cTHVcWCs9njFFRpsR8wDzRuYGDM4h8wnHo82LhYFXEqETGZL1kwFF1YDdAjgGvEUpJMeSyowcqHihvKi",
  "key26": "3ipRwe5j7YL9d6SeSEFV8cqwUiT1yBDKVH5eUSDHFWUvP3zsbqGVEQ9Cqe4HrhQEYSAUiQ3jJKW2BXAYVwrVwEqa",
  "key27": "4wyBtEQaqFtxXg7DuKf55MqA35ysn5yqUSLtUth69EyttufmSebc6kDMpcEbH9YBWdcowjUCdVKSVJmfGpnaAATf",
  "key28": "4tiv6xUNs7DGDJYUdFE6PFozQnmYoN4rjnyadgzShmvEtPuKqq5kuMq3vor8WFqWod3HL96Rvgx6ACTMNnXNMncH",
  "key29": "2dJ2sZUPtFNcK11a7XBZwaUBiJ47dwqwtxa6mHRoxqkVKxvseze7FKdAEu5nT4YKe2snHGrA31Aj3ypepB8qTk3b",
  "key30": "3J6QuaxqUJ6ZGz9bqQg9UJW437g2fFh5wLrBRGRqmjSNDW9QqLD7g7dmaEKD7tehM8cKPqYZotAurFstWdf5NXQk",
  "key31": "4WPLoCkUyAaRVaArVqaTMexyxqHoWdtWMLAgEPTBaerCKRCRyMcXSwKd6he9RSRN6PH6BgxcaCZHiRjGRqrp7WbR",
  "key32": "5Q7esE63wPCxR9Hs3MjR6v3ommeCWGX6CTVfQfviM9MVT3g7ABRaTaFCX8n4nHiJvodWLcAWyaYpzoUE9GoELTg",
  "key33": "2j2twvRxvnV6Ufi6JVFzBkxwRn5hRkgYia8wD1X5ZzTVVQPT7hZw6swDTuuXxRqEQESdBf4LVVxsMmytdHGVSJxn",
  "key34": "4R5nC6tbUArwxeFMSnvmm3rg1vHK735f5N86kiQq7vAdr4LoHwnQ64yaKBeFHAcoiZRY6Qg8zRcqmEHSNqS2QQq",
  "key35": "VJvMYgoPPu9HaPKy91QGwHojKoCikfnhaj83dV33e5BADGKrxmUQHkBrPexxQaUHCTnQDwG9PZ4CeAMEE5x3w5P",
  "key36": "4f9GG3sG3DyzZ4nB7CRogErVSWZCDD5mWStf9kdHgYaZ9FSkdowfpqWiBHXEDJYWDPMBHa7vFygWaSGaFVNPkC39",
  "key37": "5TREtARd8GJC5xfe2BFcKU5ww9y7xxBBdGVUaj8ffKmSyzyGp1mUr47Weqy9Uqv94erpfFEw5ne7NyVznUFNp7iS",
  "key38": "5KTCRNsKVK9YZGF2on5M7n1RVaGSzvvJT5BVyDB243XSbNvjdv2sVEwbFdZBQykXHBFH6eV1uBCJ9qDpGxodU5yw",
  "key39": "4ncHKeaRUQN4KEEXeTsFPf6EGqfikW2s9BbvxKYp47H7qL7kJPSJqfjcrfNAqEgUd8yAWdftgKaAjxCY2AB7Ck2y",
  "key40": "4Fk94FXm7G2V3ihrG9JAfrZRPUPDmnmeupgVtS4M6JrnHQ5rMSPbC2iuD23aYoW45kB64WkWoEPH62x4CGQsJh3G",
  "key41": "3DYmvN1TcnUvG3ujZ2wAF96MuXBAWC5kfRos4c8QCaLE89eU7FZh1Sw4JNTkfNKCQPVmn69SfBVkr1AumTKdGK8X"
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
