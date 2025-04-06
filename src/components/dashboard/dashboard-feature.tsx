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
    "2NHp6ujXXy6g2Ctpo9T1tbPoXdnuUFQkBebX8ETbUEt3SzvTpfFTuiLQpkhbmoobopRGV7WFHzdvh3ZEH1PQeqRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oLfChxfD87mEd7bh28xyF1h6LD5bRc78nzPMNDQN7uDRWMXEbnyJH27MkTdpF63JXsiU7bTXP5ABdEei3FxTg2T",
  "key1": "4QqqD4enb6NAXQ9QHsi2NokqRnoXnXnAgKck8Bo1DUwzzZn4KDWgdm5aPiW45BqdehQRSCvRyHncH5TNS9zwr8wF",
  "key2": "4KH7NAz3n7nk2Fm7Pgh73DXxJjiqEkx6VuEgopFTi92sN1ekM7svq3YqMzaotuf6NJfxp5pk16czNaaejpuJNSCq",
  "key3": "KmzbChBDCTCU2Sq22hidi7NMG4RNbpbRY1VVYLA49psLJd1Nt5yez6hAqUJqYrwfdB1HELnJHR8szqB2LzqDyTE",
  "key4": "2wfdnC9g15cmQEshKvVAAmidsmvWwUJ5vz5iSe1fGJVerwngW865zQKaZgdeL8EDQUk2UKYYBpAvoMa8QEaSJtzH",
  "key5": "4urwYnH9t1FKSssw134G5SWJ2gd5QmtrqqTUCsvNJWXfKbaL5yCb9Jmf51jUt2gWyBvjcKAZuVNNkC6fhrso3xx",
  "key6": "tjrmrCgZ2qLPNAEXQ81mGh9pCWutfrMN43yAVLhwP4pvyKrjx7kQ1uvgd3JCqgpiLdYX17qpUVHi3hh5GvKNNpX",
  "key7": "2wajG8vX939c6bKttJZxBxQ8j4r5BYiVonM3gKHx14TuBYvyThpjDxMom4vDveLNbjTCuuF3TkYzrTgVZkKet9kg",
  "key8": "27XH8V9ivLgLA5uc6muZ5gVWWD15Huyv1GhPq9T1xvdGy4MhPf7n1cv9Q272VQnDt5ZvDNsgMvZa9dBzqpf6hhBH",
  "key9": "54iABQhahztgrMHJ3aosD1jpnPNKpjzFMivraqBbwVzdxMsj1EVBbndDvwF81VTdZPEDdK9S4KaKFRnaV1977uGo",
  "key10": "y8pVeB22gk1S6Z9a3rWzHLyx7EL4poQx1nz1zcrMstBnu73Jg1bjAzV5GnRJF1DCE3kQgrsx9SjUU8CSQAPgarY",
  "key11": "2koxgNCxpySobyNy9L9SbV7aYk9rMwW1FXoUcuavkGoar6MgbULi2zA8Z5uLEHnsUVEhHD3uTyy5BczBEH62PdJT",
  "key12": "2SurwfgfSA6aVGjtEXmGNTEHx8n5a1bh4QaaSmn8m46ZpBQNQHi1eBy42z3Syx1brr1WSeUTcS3aDu6Uj1Mftq6F",
  "key13": "63y5435Fggu4gxKMoQFELBNdC4NsQVYdQMDCnaLQ7epEGwktFbfvixj5YLdWJ4UqU7VcYjsa5bC16zwyquVUwXAV",
  "key14": "cGBgCtGQqbMM8FN5BLEFRJmAFHcxh4ThhFouD2kRn1txUVZVPbZp9tPhfG5t1nZ4U1KkHinzefmu7EefrxnWnEk",
  "key15": "24YxspPaKr2mM641pydvwWR37pZx5ZYbXJVgHDKGGkqULEYz81dTH1K1j4cJsD3Lp7NWaJEuNYmSYJYzzgLTgWPb",
  "key16": "5aB7kLHcw2K6kEZHMg54A23V7wV4AhEJYYRzDPwqhtmbX2b9wUpFPv8bmXvBnZxxMBDZdx1aYtcaVnNEmJbgUSmW",
  "key17": "3teHfWmmjZR5ve4WNScwuVvCii3qh5pnzcyHTgXGTosxZXvUQ45JeD6kgGBWpxKf42q65Na8uGpTUk7MvztX18Br",
  "key18": "394Hio8UkKB6U95USx1jDfpDwsKjrmzyL5TraSpPiFjHKvY3Lndc1zdCKrMve2EZvc38SUvhURDNiDqoUvhtp8jf",
  "key19": "2suGDbMremfSPU4zPbDaJs2gxTy9eSaiyNUx4BQdUyP6PGJWJN5vyKXBwbbp5pgEmMhQSc7V3iarBNZboBbW9Y7p",
  "key20": "3CsNSVaDCuBTp4Z8ZnDEtVDuD7C1SkKHuobCkXUyLbvynCtxiKnh4L93hCo7qo4YJSfWmEv2G144tynjLQrC6jzV",
  "key21": "3JMRrbECFY5JhLFuGXDTtxKQoJT3bWUincQMsfPekbqQXgMt3xJAr3FecDdPNK69jzPxLdncHD7UX5nkU8pD1Gds",
  "key22": "9mEGP3fBKu4LcdvLFeseUKgNxRoJpUMCGpDGRSaZHq1jypGV6PxHGPkJWVhZhamVZs5S8KvTmSfUgiHr2nRtQXx",
  "key23": "4rVXoaFxAUmev8nFDkGTJQet4WCCkXE6aCLwXM7REP92P8inMvksDjXcBhXa2XtkpRGdiaKy7zrgDzhrWgT462hg",
  "key24": "2WpwZc3yECW6oNwPnDG8pER1NQNdPd3qi3UQBXAmNugsCJTsR3sq1dXQSR8H9kPNKEMJKJd2rFuFDd7qzBSF4zo3",
  "key25": "5gMXMporSm92P3YdJYuYtToTZzgMWVVGGs3u2p8tNnQVp81RtsVUjQZFVGBtL3PBMh6JxAKNt1s6Gtedotn8kF3X",
  "key26": "5oGcFsJRYUNK1PLMJbxjDVwzS5VgqiBHot4hhETtArDUkMwXDJ6hrz9dmxo8p5qU9aCtPzJsr4JLLwh7REKZUpph",
  "key27": "4PPZWCxxN1bQhVEPpjpS2jL3iGjoB9qEiMCe6EehVQ7rCwUfr1sKJK49NvnV6wyMT5w7Ty5KtZtvwoqZhK8WZycu",
  "key28": "5ZQV7hVZXH4Gik17crTESrHHqUNL6qDsvQRmbYsJbbLUcXkWvAYynNn9hKcfawHM7Jx94CQjf5JPBZWmVkwJftrH",
  "key29": "65EbiUDGJwKVMn4UXvDqjatWrn287ziEGwJiTrhWAUsV3rQQBUVoxmbjGBfbL5ZTJiGvxc3YJhHPp9BUhCUCJEd4",
  "key30": "ZLpW6gqYMcZwoj3k4VAZyJFRQc3fagkK9VM9QWbFp7Nz7LyywzRSirq24EDpC9Wckj8crPvR1XW3bTmJLorJym6",
  "key31": "2ZAgdcBpDmEZJ5eFpbAumZ1myFrAqqAo6dF6oqAg9pmEtGvEiVeGByZko3Fq19oZtQMNZJh7eDoTLauxN6sDqBy3",
  "key32": "4W4Py8fq7ZPmaEAWUPJJGewj8jWDq3r1MjYJVNE98bBKg3CaBGNeWtLLSJhcLGZ9sMQKLx5UuCmWJsMFX7xw9gRj",
  "key33": "gch59hgCXu2BAuMu5t3gxwFJ3CbUyAnUfz7rGKtU1i2WcZFoRRMTdYfrRgyohkk6gy53JGx47UWRGGoEMWCDPXF",
  "key34": "5p742bcs1L3EXTckfLRC1JhLpNiXKvkuaiqyv7kBuz6DD5t8eHV9MJcLyKzPPuBGwXkeX3E2RyBsk3NFBAqHB4Ct",
  "key35": "3EC84d1jtnzCQd8BecqcRynoNEkpwLs72RcUpBh2Vh6eZm8gQ5EWaep8xZupaWnrtVbg58g71u73w8gpe5wqRCoY",
  "key36": "3MrNzfhirVpRYh8eM6GqMpa9YygQaQCmgubQYKH9LP5S5PQoq74KA4Z27nzqjN1H55u72zdMtc3xzRk9BqBMzaXe",
  "key37": "24Tqw5jfSasWhtyBCoMSZc4KaRd1sLsNiN4GYtW68zaqPh3zz6Kt8EJD7t2VNbr21JcqhqLWy9kwWa1uE3gC1tSc",
  "key38": "3Hd5sBumnb7QTMGshGvJFwqWrLYRbRjuFwCMDyBb6qUa58UN9k5Gqj6A7QSmm5qWW8psjtrH6NHEJEDeBZnDneY3",
  "key39": "5hhM4tSL56DXkhepAfsG7sDGVd31MLAY4Tt48eUuXQs8MsdFUZr6SbwnoCtPUgEdgqDAXLQMikSREM37UhcKMfMB",
  "key40": "3VJTqpRRgraCR8UivxUfkwog3qs74RBT8i6CjRN1MLZhUUUeoXfDSQG7aJ8Mct35hbTCTB1CJWXjtVD2aaN8ZSfq",
  "key41": "2x55WHnJvDRms7uTg6Dahtk43ret97Zh5Gmhmf4yJzMiXCcCFuc1t4xKTaJrkgaFzw2VCGkQFizA6H59c11CuGXs",
  "key42": "5xw9nLxMjcHTprQW6kx9FtsCNx8f1QGFgFr5g7wP3KpuPYyMhn6pARrN9uATE7h4zQZn1FpaN7aKzPt9G5e8KSqV",
  "key43": "3j1E5PmTUXsozNVJHYbrmuxxdz8ogid9pWnGnDMxmJffcTQnB8o5fNhnPSQYACCwyeLSKrebDQs3j9s5pVwUCYkC",
  "key44": "9UDRP87WP8Lmwt1x1Qp7qXWbTKNGzQLsxb8nhcVvqSnWCBHEq52x28gutDDWoVmX1GvXRKnzaf3EjmuSAxBTZkX",
  "key45": "5MVon5qfhjWq2jGiQU76MBwg7QcMemh8v8SQsxjKqRWxT6corcvweLcPuNRWgHRY3R44xvMVb616NbCh3q2Q1jW4"
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
