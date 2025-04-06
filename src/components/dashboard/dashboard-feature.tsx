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
    "5ucM9FodyaVEuMYyQeUegNKs6eVipdLuvGhF7cQp4tqEq9eH8eBm2YG9VSm9thnyWsLyGSqLEaYuHot2u7sQmi9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "546hLFcvXaeyZsoRQmmdAyppKE6RXQEw5NbtYQUnWMtSQJtqhQGZLarj947FDcGpYrSg6VL98Ly6uYUtPVEweoQA",
  "key1": "4RS7TRG7oRUbXjhPxbzt99hW65V6bZMrupe8eg9t1syhknHNPZRVtjcouAn6eE67TGPTtXPBvdoaLgTKYv2cKvn9",
  "key2": "2xzTQq152vuLDcQPh2pPZK3CHiPPxcK2u8YBNHHEwpTYcUQbkpRG7rYwXXZx8mTBNBTvHJyNjLJb483e1uYPtMpQ",
  "key3": "22kdcVW1GXTLZEJf7JEDkQSAFZZV5CjgwHgZ47eNRQbML2u3nPrFZDscVbiKtCcd9pMZuSAwyywYMyKKWqx7w3Py",
  "key4": "2FwNZoSzczJCiZZARLoheTLPSxPHDcucNh744HDjxmidyBtpPhqfcPGyQeYHdkfe9BUsGZaXLqv9VtKGDE6FbyQu",
  "key5": "5gCxubmQsjbvENLzJsMahVYWD44DPyTYSmncYUKyFUuDZjXjDYanpHAqMkVGaLGTaVSQAz4SH6cp54r5X9RHBEiJ",
  "key6": "zAhKLimdNkLGmbbhzTmVQExm5pkdryEbhekwDqcumD2URuGHxpYpryrmk3XXoUd2B7Rsr3bAHwG9AXGTiqfcabX",
  "key7": "5gvjtLYNW4EoZuJnmoMFp7xUdiJfEfoVYgEfkjUPza5TchrQwH4uAGGxBDrTB6NubnzgLR9TpL6zKJzuWJjDzrCo",
  "key8": "65JY9T9K7RUyhYTSVKbqW3bYVH3aWP633pRcx9fG3QgKRxcYsyMAkXrXwEYDpESAqKywkMaDPqPtJHXZdttWXVH7",
  "key9": "2HpzuVg8ZEB9CSwzjURGhxuShK4ZMdo2r1ucnevFqxLbEMmRk8K4cS4eqJLqk1msLyXtioxXZTwgprLVigXBDLFQ",
  "key10": "3abD1k1be6sbcVbNUipXo7ZvUVP5JpVhnCY3KcbESLaSnAYE4xVE4cWtjrAnLYEvazjk2EXLW5dyoVJM1vf95GCg",
  "key11": "24NoDmaSTVF364CJZXetuX9YqS7BiiRAWuREw3jvgzDAzoyCoKEWRqZH7AH1EnaDXFA1yoa3jkRLpaeafwbicM5T",
  "key12": "UEL6PnoxXi54Qwy2ix6QLTV97c1GcmtJpXr3z7J9ZXuMJ7XcXm4f9dUMnj5E3zYJRSJrGGMSnuD6qwrFZM7z3Ko",
  "key13": "5aS9pfpgf84MxfSiSpUKQNDSetjW9FK3N3JoFxhnUhF4UCnZhKQCnrydCY8QasjMmHZ8rqSQwRqcRsNpDqWeGzQR",
  "key14": "2Z7gCbZy7YGRYFTXW2LnAUMBwNtgFwqZmt3YR7JFgjZXVAEKXsQCEhgVuXmL5h7wXJ8AybGAu3pME4Yp9qYe7Bcz",
  "key15": "4omEnXPEDaJ9nd8f9btq63H2P31sVStBRGyNc3bABuW3bhVcHZAD1uwdPCBYoP4r54VcwyeN9jo1uevyes9XySAW",
  "key16": "yvoksFUfUfCJMzLaZX5wYLTpWYJjRdSHf55br2sRXWVWrt7MnV9iKM7WCx7QsbGgXWDDexF3ndRREMak7mMtAuo",
  "key17": "5krMtSvcUUS8GBhQ1AtCRzHvALBP5sBjxAF4HLsLicGqJR4D9miLv1XrdXniTxAP8At9xY9ar34z6A1A7n9TeHbE",
  "key18": "Wcsf2qF2aq7pTVz8p2xRQ36NGpJESuGpbiAwkd2esvansjeM8q5rQHzdeyT3AVf42LM4tAtuEHAcV4ewP5MCnRd",
  "key19": "q2egqE5KmJuuvR3u3mtbK4g8b12ysT3uoWGWEQnadeEST11Ef6N5yUaMUXNVHeWG4ZFM1BkRBDxbDApyqMJ8N7g",
  "key20": "5Tjf3doEbZwHWv9K5sMj1U6Cak21krm4osVSdj1qWXGNcXutBc83EFQSgYUpC9EEgKD2i8Pgq2djPS8JvdfYVyzj",
  "key21": "zuLksgLTeiGyAAwQ1yEBtUZ5X3MaZnmjWsZBrQJAfQZCZtu3LxszNo7rkFjFpTifVBAuTgQBFuDNV8sGH3VSUTH",
  "key22": "4hXvvGKPuwZrqrejoUnQJu91AC45DbgtfezzHDgqCssCqfxvyyJ5RypBKb23DpKdK3S6KmnYjvYSt7J1nyqdHcxT",
  "key23": "2XwgvajMshZ9Vq2ZsnERpkWZVKgzSENX2VAeRPWD6oyH9TSaC84V6wukYXawdHHnaQ1pbhbbw3q6LNiGg1XKMM8F",
  "key24": "1VbojhXLW54EJzz4qAGqF2J1rc3rJERDVHhH3eEdQ1o4BS1tqj32AJv2gXio5yTfc7dq1vT98KnEi6ou6smeYH7",
  "key25": "2GMqg9FKi9j5tHUnWDBX6Hen422Mt2iX82DsXBFP5dDfu1zRA3hbUsFpShhpsNfJaecP6r6H57voo9dtKBxzUPMR",
  "key26": "4HWoyiJTaoFdQGHDDaY9dV97a6tJZzRZ1FJomypBCMuMJKi5zcUS2zGMAGRmJmZCkbb2TecF2cEnV3DL7rRDsASB",
  "key27": "RoVG44JgJZjbhrF7ngeojS1Wa7sfQftrkEso8XxdxGRtRHKS74mjBEqqaiEbLohk5cFx4i3mEktj5CF3iCDGV2w",
  "key28": "5ohKo7kfCVfycMY6v1DxpAfv6uEAHspkt4eubyUCfEqDY85RF4ivLF2eQkE2eik9WksLYKcv3wXT6hUhjfPDrL5F",
  "key29": "3vUWwyvjARmapFgkGFrSegatrWuUFeGQ5PuTMgWkDaJKpFtqV1jEtdeRGqfM5afVPjEonBUZUybFxiH5RF26MyPD",
  "key30": "3BLfm1XghWE1WsTAjU51z2EPhy5FA9DAd5pZ4UArS2x5goctpumJbspiesDK15TdgojxUhCJ3d9TmiupXtW2gT6K",
  "key31": "3nWkYiRT1wTeq2q5V7PQ95eLy3Ld9mV1JFYvncKRqwLHiU5KoxmXevrdGDdmj8TaNyZvBNKrS9mafsrgxQBySfES",
  "key32": "uwrDPs2XMjFFRRXDmtSDEEsNqm9tqHRAygghTCX7f9QJ3x2D1gJ1SqENV5c4e6mqGvh1W859HHrbduZUbBR6Lys",
  "key33": "3vBtKU7zgYannGEKj3BiTw3HQRrEQ6Ni3CFQ8Tkr9L4c5exFLJLVG69DaWwxJCnWQ7RG4BMu7AEy9wCUriL4wSJo",
  "key34": "54qnoLF6DXFLF7Ftksspy2N6T1k1yctmFzX6dLjxPjyTUT4KNSDfRwYkVR1tbhqMQckxoDqgau9zsNzWSxNBXmzS",
  "key35": "beWDZaf9Hrp6iomjML2mBupQbbvPgjhfpFyLJTezaYeqWR9yXk1rrFvC7wkjMcGXXY4JcrsxThNqBDx4bvUJJ7U",
  "key36": "42aEt8CLyZ5KjmMvYhmFCLPWLoQL4XsKevT19CipkrApLBWgyLPJQZvLZTZ52YnjoqTa6RRjWvpJ9cxk1ccyuuUF",
  "key37": "5JNCFEmRpYxyvtWcCpqBBjtEaYwgCseDoEiRQrnbJwRTPpSZa6NiTMhTvhKz6azPnMXjQQHVbW4gdeWw1wbgj9j7",
  "key38": "4eL6T2RGXKHkXCvr4NYkKLz2vY3SU57JyU2WUNifrcQpF9a98fBBPkXNX3YEPSgEEVF5ZnKBy46rKnttuHTAKrAH",
  "key39": "5gLPsy2QCvbs37e1WP2J2M6W8rvTfNqfxe7fouErUzZMG4RYZbJbQnsnB7j6AqbMwyrmxq1BaKLXa1oFnTC4LSnC",
  "key40": "AL29pKovLrKAvR6YQjqAk3yYXgEV3m4HqYE7uo2VE6hEgUpp19K9p7AbVCKXAsmJX9PfieUayv1C6GVttbnqooD",
  "key41": "5tLQUTn4YsNXPBAUstnTWuEfMoa6DPPM9BEngt7Dio4tWWnhKx8f6tvyXFzC5DxvEn86aM2BbparnPwuebjqUBmm",
  "key42": "3HyokLM8wvvDdYmAuweHir98Sg3gzDJoQ1rgPJQaZHAcnrLDTFhUqxWYV9rYT7Kx58oEBSr3txwL5bLnwRCKVLaF",
  "key43": "2XCuvywntGmUaT9nLMsij6khgNXT1w9BNhC4tVQTvqigJUh1CY48mH8oTGPPJb2rEST8CTRxzd6yvRL9CHvpDoPi",
  "key44": "zAguwop5L5qv3qGPZ6hCDgvPJryMEbMWq7BCdXJAbo4vPuQdwMooMn315LNQyzpx8cubndeEdJABkKw18ta5jxB",
  "key45": "4bLdRqxdR5WtZtL33HdQGKwBN7yeo5EZpBRFjhUjQC77Rfjzks9y4E9KcWxoJkjGRARsB4uw43T1Jzci8iUP9oJV",
  "key46": "2DuGCRGszrm5BdtdYaGmgQA9MpJUExfsspbzuJefuTHpn2WBiq4FSCnGFuwbmfZrNasUhpVKnYSmtuGDKRoLtp8t",
  "key47": "36vQ31AjFgwGfryxLbqRBtD1kFaD4AsiGqu8Ef9HEnsbokwza53nV8eYZAhNTeQi2ZcUoCHRijfrB9d5YeYM19xa",
  "key48": "52RdFNTA1mhNad5fk544MduUPPmfCjEwBBbEVngiyLhjz1zDfL4ZL9WqrmnN9xdZbc4rQH12JCYCkcuzk7W5KvEN"
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
