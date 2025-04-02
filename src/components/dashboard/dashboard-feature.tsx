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
    "5Xeoo5mMpRyeKKHQxxQLfQBDtHJSGSXmT8ywe6giUFctXqQPR6MugfomPgEkrLqibzKSsBcn3LjuvraHM2viThTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2CiCFrmj39JaYTaNp9QXPe4ussa3TmqmBD7p5Y5ioRDBTUXoCtz2pK246CiXersFHGhAhAyVvr3jjPTE46MBau",
  "key1": "2CKbKLYUfz6zuEmmPr3TS3HwjJ8j62NawbrujRLhvgynj3H3RLB9opMNPDUR1BJzv8vK2ttVh45AKZMhtaMnkBei",
  "key2": "4J2EGtV58kjeqmX9Z3USLuWdjwNZeVtWBKghe2L6JpVVcLvqyoRyvYUtqjKSPDuRaotV3k76NvKH59LPQ3ZdN4Vu",
  "key3": "5LgfSSCzwfFqNnBUrshQpXkbsWbx9CtKNaVzxxFN5fSzUHqxAVsW2wm2qZAcvZQwa3ip4t2aPJ9QfjhWe5J3Y7r",
  "key4": "4C4qokM3VUzEbqF4D8Nq7oUGYzJchG5fGWBo6xA3eDPfvfr4Z2q1vMr65tz5UQMW9pM46kLRD4mafK6H8s4aVNhJ",
  "key5": "619jByQkYdaKRpzw27FYFhXXTBqR6F8iD4YXHNJcpoB3W6czsjrrp8GyNkMYpS6RCf7xoihZfEDRs416frS3YTP6",
  "key6": "2xRyePvANRk4GWfodtqd6X6Vt9dJGqFejuDBGY26bMPTPDB4aKMJ3pju97zKq3cAVZmgAoMiCCrxTxrGXtY5q9Cp",
  "key7": "52m9kabnsKyzrwxuur5kPdQSs63wRYZ3KgbTVUk498oWTvDzH5Qn1aZ7Udb4dQ5jsPkNz1K5p71bApBFPd7JGY8b",
  "key8": "5djnNTpqA6juoUvH4h7jdAuMV1VJ5p7w7Px6vpKetYiUkhwupnnTjGZDcDob9PYKMMrau2RxBGdr1Ba3dpqQeF17",
  "key9": "2BQKkHw3jHMFDGhU4LUPp54R24KYSqKvbPRqrRJacMxrVYzSy2xfsvsBK3YM6fvFQRsHki5zENmFU2hEQ4ySdr6Q",
  "key10": "3THQyKkoaKy9aiLPQQ3TfBQP683NdE5MzXc9qWdFcnmN1u7XWvzAP66NvS6SBMWue1TMNzk7qBVRbJWdQeTrnB5h",
  "key11": "3Cb5kahUetoeJdFSU81LJxRkdQevG1jUA2eobvEPpuoA7oqjF99qkg7hwx832Yux8hV3czZThkTMRNbA3AJtsBrL",
  "key12": "3HjNH82MbdKojNEAYDbw958fsTmpbVLdA6WtFm8D27HXCmiSwtWbRS4Yf7WCF13nqhFFMdwkjM6X2Ldcs2jpq8L2",
  "key13": "4WtNvnrRRxWkWyFu7r5939apyUUmTrJ25oUutbwd4Ctxi447NDq8hzj6X7KVnmGd7CcfkbBDyE4pmkWPQvTPMXJE",
  "key14": "2E1AtwiknQdYruRsUDUZdUD2pNpJym3wNyimB4j2RMy2wzZktrS8tGZ9uc1GNw6Mv6vcHq3yELgDqnSrQgi8StaJ",
  "key15": "5QDTUeDDKKWC83UcLR9uN7Tm6FpeFpNYUhTPpX3Qb5Hy7P1gNmYCTPTYfetsLFwtdMW4kvNQ1r2cyhK5RHgRrxEY",
  "key16": "kH2AmRapyabmYjr3D3iWXeAyyyn1AZV6LcYna75tjHeRyn2ePTVFaHkWTDH6wqqgE8qnfT1PVZM54iGL4HLQErK",
  "key17": "3ebbuonz8Q2nczmDVyFFMVE4Ji18m3uTKfwvYtvsqVRrg2cHzXBZymKExCh2K9pdYgjsSCe2VRrcmPfq7ap4eF3x",
  "key18": "5wmQDqmP3it2J4jPWtNy3BdtnHGviAsFeQZX9UX8Dj5SEsiNJjkGXWyoYuofJv6j6CXLgB2fdhiVAcLtvHDQxfSH",
  "key19": "3KNnTfD5sjYgpFxvxnSPuKJYtJGicF1dFZBE4pgsWBa6SY7g2nnBmHL1arhuZUFmnap379BerXH8fYRn1qr1B521",
  "key20": "3uSYQuoHJWmQ1zAT8LzsK2FcW6KuekZN8rpnoB34yXrJgrjf9DuZRHYBoF42WK3w86hbjmaRrtZ4XKYhFeNu3kAJ",
  "key21": "eVTq1pFrXkMJbqzaDLZnTmmmFfUvet6HH4pUBBDoJvG58387mSqWC6KSXWH592MEZ4ZWU4k6ocPKaoFgArsyhTs",
  "key22": "5gpUPsQqu972gKudKyfWC65dCLhGLFHj2cZgwzQW9GWxH8DwTCn4og62MHd3JF574oPouVE9mTPZyeP5ktZbgKEa",
  "key23": "RAoRvFF1thcSxWxKVEy56Wn64SrVfcjARdp89rCdNYaMGG1D1PqXmXYCXuPsXQXCxH4P1sUfZfJcQBA4jdmxkue",
  "key24": "4z3bGq5kB5r2SaAZbfSCNQvQEc6qgQxCvnVqMMZzr8oTU3WwsRtJiyKj4CXMfc7gcZjE3f5ytWRA9x3Egp6TyQUV",
  "key25": "2LXxWS8gS9xZ1ibGKADGrE9Q8SzrH9nXP1EbM7uKSHfW1rCjVw7HAqXTKBt8K7yJ7aoyXUb2S7MHdcv6LDFm9Bzo",
  "key26": "4KLZN3pA941qaTzwdoyv2pqtu9AmuH8Cz8rtF3jLaw1cjYQxDio5RQb8VnW7GqYjEqChmoYiCe6nG31kXQaydyyG",
  "key27": "5As79c2a6DeXEm8drPKcCqhAmqCzzfSjUwWgt4KZDwrDGdmGPf45WMBgJuHSLm9UyN32oJRCBWuZiC2jtQT8hD6k",
  "key28": "5i6pmWjP4k5Wsc1wJVFmsBYTkmtC955Dfrwsib7Kw5V9NaDW4fAkUpThdQcJSJuSqCBVk5BxX6iHBiZGusGxhvRL",
  "key29": "2sVT87cuL8ePvKVDR3TrpkpBXDnPKDaXzLCR9USNUjL1YG5qb4VNAbWaqATu82qc6YbdK6vGNCchXr96mY1SYPSD",
  "key30": "2PcZQzffbiph911XrYAmy9GaJXpjNVwMMDssyE1wzF9nWQEFvKT539vJR7EZgUuRwW23XwxQgGh56B1Lv9o7vBQJ",
  "key31": "uHxR5pyR6qfgDFw74psfn1iaz8P1h86dHVadwhFmTAyhTLDmGVtjMNrLVh8PuDk519BaTi1qfWrhi1eycZTjnBp",
  "key32": "2GNCYc65yjgVuqQSoPCocXV53gL2EBrus6HWqKzuuXioH9f6jgnFMgEuYuwuWL5wC97gBcLa1kToZVWDE5Mb7xEr",
  "key33": "5vKdyYQh7XS7haLZN95ZBVH3vbgvXq2oJzeSHPT1r6fTteLQmr36cLfMYX57QSMk2m7H4SbSWdhrCzuVxWrF13YQ",
  "key34": "5RZxEiLqQ6pwuYmbxzC6mX7keHugMRyaXrXsA413wMkBFhaB1AMpsQMoXvYc3gt6CNKeyP7NnTQ2BVpHFrajLx54",
  "key35": "4eySUjTyvTjgNo6EkeTwAmych5xenNtfANjaAGCkg1cW95kHWZAHH64v75RGodxKBk7GCkCGLZPTDbnsSPnxBcM2",
  "key36": "47wi6kZBFqQSjJf5uZRhNXZ1ajRwGNMnWp4NWas36wNz71AH1TQCbJMWcMJ1HhzS57EFrmbCtLYcUTkPkLSoWTyB",
  "key37": "12ADLo7Jvq6vCyZHAd8nSYZEKQ3r6Xjga2ghZ1eazoeoWsEcanHm5kb8UfQ7PaAkH9EDa6PmYwKuqiRvtUxs8DFh",
  "key38": "5J51wUosv1uWso6JkQddJac4g91mksphZZ1gh5K2ZdM4mpCXit8wh1bqXsiGWdKB2VczLCJeKXfBEXzFYrmek8X1",
  "key39": "3Uwgtbx4fNjoLuCS7dNiuAfAg4NhHHAh74A7bxoXpE77xWj4jm3eXrxvKggmNxKuyYs1SYzybBdtULfgJCb121ze",
  "key40": "23AzQRwZekEngo7EsTwqneFbF9bx2oLNHbVFgDnhZZoC91DX8LKmsXimmQLr8YkS94xGaqN9af1BdAwxW4SvTAwk",
  "key41": "3bkZaHTkNY7J5tKN5PahF4zaStBvzTJo9zjPVT6QTmhPH6BR8g2w6a52AeTsTkurxDGQyJRiB6yn8Hyzvky8Dcn6",
  "key42": "3JRWbt8qCeTTxoanqHuPLSgxLuuSC5KLVKuxFc36UNRmqsp9wV144iBRDSDBMP97ShcQ1aPH8pyxC1aokGCQh2NK",
  "key43": "2SXRt69BSCTZmztfnGZVB2yWq8JaYy7QesqCQEmHRpNt39oQ1SFdsU8ATopzZNTP1iMpna3Dvfac7iqr8KpjEHSc",
  "key44": "5rCYs4NurjBAuLRa7EzCTYuuykWs4oZmh7hnNGcnoLbbgR374weZ7SsGHx67v8Bv1wYYPD99mviXM1bcyM3SivMx",
  "key45": "3biUhkg8wWbkTEWkUEEdwpWwKx5YXopyFvHUggeUhfWc3KqRk5FPCutjdEzNNTLwXisJJ3KwHt3P51TLYHUmxc66",
  "key46": "3Y1zkjq1Fj1yzinSNarLkq3huyh2k2ctCFiDx7wegqeePNs22rzn5bEBfWKXrSGRn25Z5tJxpsZ6mkjfWccBT2pK"
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
