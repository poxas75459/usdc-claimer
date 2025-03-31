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
    "5Qfx9jxZxp1xGxbsKtg3KZd5RDwxYKvbCFjjMxYwiPfowuVFH6ptYEJv4dUpNBy6oFy3LoqS1RyFxTtYmRu73NXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Xfp8MgmdrTxUbpbBx8GHMb1iSnqp63Jtu5DWYwdTq2YqcN7wzGYqeKt9zbwQUXJfSgDFmeFHuQ3sGahBMgcEY5",
  "key1": "2wHWehDzSE3JyXtX55r4xrNPDEEj3jfCgEFx9FabPpUjvrhYF8gQb4UKUDXoAWJZSHgkFUvBVuY2oy9sRFZMAKH1",
  "key2": "55j4XRnwCgvcf6ezsRoH7qCqfxfdb8tqiNg4Y2rTcsFxNgTQFczL6KaLwFaSiTke8icaVoPqyAPPFhGECGFTENih",
  "key3": "3yFSaifQd7BGuTXC9brcNTTFAzCXKMMNuZnnfZakddQ6q9dpqgYHMi3utEwqkasWwULnf27TWW1cB8ByNKqELCJm",
  "key4": "X9pAZoSGNpW8dFCnAFakmoUit6f9PLXq1CSxQoRpammMDptyzsQ6v1bjEMpX1ifgnKEoq7p75Hkaop2mQi4mQZs",
  "key5": "2XS6fTSXJXLR921qNqkrLyS3Ugm7VDCjjvCadSvPUq8DbMhDWkcXS4s7SPbnDT1V1rY6bzyrdRCzpaKrDGi5dCEm",
  "key6": "5zVEejfrpEUnzrQA3Tgzj5QmS2BjpwUJMiEVY7UPAgUYhCp4LJP7hfSa3TCC67ZD9n7oUizS3abpcLAgj4UJEzXb",
  "key7": "2Ak1HSNrNaDLbPmEwjHfWRQPQqvHRLvPvkcGiBdyTYfwWpzyz76jWkF3iM9ffz2hKNN3Q1o94t33GDuMjTrSjrxs",
  "key8": "28FuGf8r8jw927vW2J9bHKXoyEPg2AhuUrbSNZEk18cYnUp4PhV1SgeYps45GkRy9yP2rDQS1rgtCHn7SFN3uQrN",
  "key9": "5RAHpCwPE2kXPvXXUHRP1foSJSYmBfNtrrjkXrDrmWWB7vCQXkhHhdwzyZQTr8mp7J2iNeBgAXaHCKkLKxAWfCaV",
  "key10": "44kYqdr2fgG75dF12NtsNGuY6TxqzFt5b6JZGG8Tkg6HVMb2jAkFXBvTeMmuoqBsd1u56qjB6KsVPgJHMJ3MniQC",
  "key11": "5jGyUZhy2MpThxxjKrh4RMeBskHBdgfnFPMxLDE3x41kywVZey4SN8BZjNrVKAKbVBmuD75SAraMWBS55H5XjGEE",
  "key12": "66ka66oeM5sGsBkj8TGKzC4KyDx5pa6TW5kHs1FBSs8uCcJmdZaQNsn6AfX3rSJET4TwsrA2PZM4v6ACAogAcGpE",
  "key13": "LQqgTmhGXfz96h7uKv6Q4f5niMZAqc4G1iNLto2ipvforcfP85ur86HLzfHRCwmY5sbNUx7F5VsBErSytrQuVsC",
  "key14": "4ttKsjhJ7Jbg3LBcrKjaYkBcdVoE3S6wvPMVrsHiHEBq1QT48LMXvKpqqgXGyUVDaNZadHrQSPbCYkc9kxVm3siC",
  "key15": "4z8tvM23AQAqNguGGZLUsFbQCd69LHchXPE4qVjNWSREtfYFUcr7iuNeWSntqmUmrnS6LR33pUjB31A3VgbDFiUn",
  "key16": "LJa4PTSQE2bGCKYLgu2qcysR1eGxKSSk4GT8be8zSsy9h88AYeF83V8CuJ9NnP3JieLbcZRSEWYtUSTPgASreKt",
  "key17": "5EZ9hVgGsbyoWt3mSe8FCLb1QTk5EpDe4RAcAB7vN5tew15mbrCeA6wBcj4PDV119fL4nkSVbYb8JeNp1LFDJPL3",
  "key18": "3H4pP3dvNAwto7BiLh3b2couT4Gr3wfK7NkSmJyVHQPoE6J8GJXxNz8aaG7S4S23QwZxmRmNCRrZgGrK7YSPpkaG",
  "key19": "4GRPk3RRfnaz5MLFEFHKPPSPnaqXq49QecfDz1w1huh2F8MfhYFN7S2WyFr4tVEC1D16FZdTZDPzarBiCDaXxezS",
  "key20": "2zkuT9dnZRMMUuHmJaVSc8oS2GvKLJaiYj8x1wgW7rtcjRBqZs9oYS2kDPXXB13yEmkPaSrKgK6mRcEEHdNFcLMy",
  "key21": "4MWxSW7oX6gNZJBuQNmmtmejbF3XapmumSyDuC6jknd1kQLVP6hmR6iBNDj6cKRCP5xqWFntFP8c44nbyMwy5KGp",
  "key22": "3XdRggm2LjeXwv9ntrHLDcKQzSxwHHUfLGkpvLXJM9PTrPV7bjiBc766YhyFy7ePHGKh2XZ1BvQxmwJgrBuMg96p",
  "key23": "38oHRt9a1BMqEgcFFutDwUGkmxQ3FPdtfAUYe5A9dEEcGkPw2tqi1p8GhmJGR2MrxhAiVA91sJhW9hGR5JhGpnh9",
  "key24": "44XBSabCWu5o1tLbPHc4vSjnN6PPiMLBSot9gXZQeBBKYvB3g1WSrBiRssuZkhHYHeTt8Z3GM6ww7z9GVinMixtW",
  "key25": "5XQA5ALtdsaJ6NTJySTDx3AD91PFehNtKeWkui625sVFBBAKERKuaP3M9zB6SLAdM3H4vb1jha4AT3vF2NWVW8z",
  "key26": "2nXPCae3iDLzpxXxVaaeUHDezVfiya7SafX7f33bvfAHSRJH3ViGdHkASeRu2tsuUhZs2Mt71E7Hn8WY5zqj5QsJ",
  "key27": "5kJ9twQYseaUW6rxDacbGoK4fPuyRRQuSLzKaT9w8KYyiDuSUGsBLnrRMoZMKWbeTme9P4EFu8ZVkeoeWP1cSNSv",
  "key28": "USLLhbD46yCJWU4hC2C4wFuV2bvtTqppHh1WbsEvsweUoCV6ig4iRhLqu3JYWKwCHmcKwBwT3dVKUL75UQxSrBm",
  "key29": "2vQ4XQLh1CVTH9XdWZycgMdzTnMfRLrbXbi7WaFQnWeNJY3TkyQxPdxqPAUPtwh1Q6Xs6ZrmmH8Ue37SEUx7Uwx5",
  "key30": "4R1mDYFF15zMwbMp2yW2fpcVyenicEuouTw65LVKAub8wNT43mkW6K5Z9r5C3YiGfEdmqsPJVBjVSEHGybbAD3st",
  "key31": "4BwPr1XNSpRpd1CYMQvjv2Duh2CX7n19AD8K7HAYgws3tj2tzdgEg3dExWMBhfDFzAZ41ht5aJv2smf7NVSrPz3G",
  "key32": "5SjFbhwzUUXPE4ZVLNXc3vsiPLohx7f1EMMCWXkkqRRTVHfuWMEj5tomUP1nzK9v2WFdCt15vbcaBdSUcDYG2f4i",
  "key33": "zwaxdxHktV1NQYRJuf8YhzMRQcyhmPG5deBWuhDavbuRJW7bS2e6Rjb2dTYoDMWELdUmmE5uZCsd3CKYnyeRHYp",
  "key34": "4KUgferbv9KmAtakL5KBLtMNuqpoYCHcZSU7YhfXWENpDJ8wSTcob2apGwMLb1jnGZuk2wUSRaYg9D4rn8gwS3zh",
  "key35": "55Nx84nXAEFKsZX3tMwfXRzSeAHGH26UxfHQNcWHwoS5EgJWrnk7Hu3X3tNk3Pp2Wm3Q4dAM8myS5Jy2SL8SVC54",
  "key36": "4UGijXumF5C1LwUQxBreQ8Wk8oTRjioqeBa1GcPAbjnqo2hA8Nd6UHFnR1ujuB4q9fVuVigb7aPN4cvj9ebHyqAU",
  "key37": "4S2P1FQKcqV5eFwaXKfbod6NpJ7skZGgFfMnhyZtTYzUNuBALLwghW1VoG9YycSg9xtdm5pdzMddjB1FdnUzo7LK",
  "key38": "2YwHNtL8jVa2aXvgXshSD4UggVsN5yZpc1kz6oMCvp9EsdGWvtmWxczE6Ep14TE6sLmeyohgz5wuK4QDAAYeWjUL",
  "key39": "4xaLyYgGDFaaixEv9aGBDd9aEjB28ARLNwf5edaqahGNf8SWTLke1nMmjymQ3C8LSJAximSvBzVQrqBT7EHN74tp",
  "key40": "3ofw9YqbCmAknrcDTpCp9GsrfHzXu5ZoxFqmbCiygbi2o7Zc2JsWdnSvnucAe8C9qrkKL3hwbukZSLBvZCvEtpXm",
  "key41": "osYz9wQVdFstuz2UTJJqSUtUuDkRY73H4oRQbcD6F4ZNkccHnhb9cxCD3HdjhJCpKiCL2QfpGbBWCAfTvVxN8ZP",
  "key42": "2uNUDt13TKiPSDjWKFiwfRmxmFzKgVSBMuYeYpTkdf8UX1tgRJ74vH8gKKa38rjQoHjazAkPHiMPXBJJALgrLa3y",
  "key43": "3PXrbx82TvXMzWjQ1hZN2LHvgZHPpFpea5o2WvDrGZNQfkYq165WssrMupKo7khqcWQB7GrEV4d7ZpvZrKkLj3t3"
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
