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
    "5qeTDvWHEmqCxQXzYWPjuJghs33qEUE1hZ5gFRFuXV4jR9oMEAhU5sicDmM19irAfhFJ3dFWPi1CqzCvjp2SeL61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y3CbQu3zHxPtiBrFfzQ5PSQFGXBMkaQipp7SXthTLvvBPQmKUwwLfxiZ6JezsnYC6ShPECzgF9LD1W2kbRhZSMB",
  "key1": "4aATBZGEU9h2tpMuDSrsL9c74oCgvY1eM78gya5L5AT3JxQgn1y6pmJchjUJ6MeYnzfuDbxcMzsJvkaBNHtAKkAj",
  "key2": "4NVWGdkUJBPikqBnnFfnFREvdLUzrcziWFvYXPnuWtLGz3ovabkcy7ed7oChYcs5uYewsj3qYxUmCfSdSoyPFu39",
  "key3": "Racs8K4rUmTcY23Qtu5Aj7vteiSPn2yYjpy7deU6fKj9RPaVu2zeBHuWn7LPczueRtMGDiZcB4VfUHoYnbRGw2r",
  "key4": "5mnvG7zU5VSzvMPbHuPeLDvJJyho4ydfp14HGxZ5QVRsEpxTU7NwjoxhEjyb1f6DMsLLr5yjwx29pHaQbgG28SSB",
  "key5": "4B7QHwK6svV44mpKanM1Ha7FWDJHVxrhdfW9xBvDGuoLfXrmSuEJpq1DWpfLyxTbJV97ewcDXCeRUrENgpTRshSw",
  "key6": "474SDut5gTEE4Jf3pqaN778Kta1PUudd7AYuvTNhGyCGaLhNCxeayjzRjov4y2m5QZMxbwhuh3q58cMcEBFZ8wAA",
  "key7": "2r1KVtybqpKPPZGwBipfnEu7CBLNHozFYmH3NB89nXd5WzR1rxLzTWXd22HAsWXYNYrfpiUqDaXZbZ3C26wBWaa4",
  "key8": "3946jDCWFw6VmCoAYT8RjBKUhxnoB64z3XTarUBzfjHj1AHXr7N6NXTg9EhrxXfzbtEFmW6o6L333KcmFq9mAQBo",
  "key9": "2FfZ4fD2bMTrEUe9yzVX3fPdWPcxJK3eYi4zP2H9r9ASVRRGfPir9WVFdjT8PZwNMXL6oHBcnxy4m6rVVhGgpDmP",
  "key10": "2QUnwhK7PY55H6xo3DRZw1Etv3HG7qANBpdHd3L1hodD8hz8tkz6iBwu95LbEBuBwhtv7Z3zPtMf19Jfxjq7J933",
  "key11": "jFtUvoHAQBPfQ4JBdn1jys14WbGvSKmbVZ6FgKDBHokfgFmQiiN4vuWi4F9vnfDwYDJ3HZSwcSgQJcp1j9MWa1N",
  "key12": "3x8Njyuez8Jo5pJunkE6jjSWjchAZUUiS13Jm7fdsDJP86ewUtsJpFweK7VG5fLu2L2NdxEs3mtcgeg7vFuyyex6",
  "key13": "pbSZSy9NLpvwH7qAGU48FsT7sVQdRcHMZvC7pTS5VYtFzDepQUtXDMAGQcc38VaojPXXrw7HbVrNLN1UiRHg2Le",
  "key14": "3VziRropDu3bYp7kArHetzSrejf8UJnenz1J5VBApn9DfVqoim3KrmNLDWYUp7NujAVereqhzGWrhbbNpU73Lipu",
  "key15": "FrirQ2FPMYEGmBLXHE4xYEQMQYuqMyi5tXzYKz7KAzDbyD1Vtc8Yg954Sp1tqyj1gVYKAxPwXcJ52zS2czbP15q",
  "key16": "21iek6RHBLSNcWKfnhaiXSXR2zuezkBL8EqpT4pXyTVxcRKxZnFoGab48qt5vkGf3fAeXenzBip5T2TNfZEfB6Aa",
  "key17": "3YTaP3Vw1qxNNGjematsHJWuAUgnQ1uVLov2L6CbAsVXy3JgKFk66tzctxQizSt7PWkSfqWrCi3QWDN4PS6brnhN",
  "key18": "3RTUmzQcfS8WbfRU36d6UyGzhN6xfXdetA6T2hZkJYRwjGTn5xGSnsCT1tZyDzQScNbJRkX462tf2gj2aSxSSpdY",
  "key19": "3aMVVHLH32UveyvqjfiGMZYJ3SrYEgouUM8fikMthBT946wKtsbJHuqYrdwNfrWWBmRTxgqKcBhUjj11oUgiW3qx",
  "key20": "24erV9mTJPwTP2Xep4RUGP4rh7czafkERd143LQaojRQ4FTSeCr63woK46nckhgrTvZEaEKmZAraLP7WN3XMxB1j",
  "key21": "446oFy9tTJ43F7Yr4FQzcfckct2dMcf2mNyAzihDoh532PUC36A5ncYmvkMpMng3GeWXcNCtsYpm1oZsQ5EGHrq7",
  "key22": "3DKFki3YceyshZpqihyoe7vyhbJmjYkNxw533GZ9DZRMkpcKB21EMFx6HccPNaQ8qY2iekvnFzZCexkgd3UYbAn5",
  "key23": "4e5F7ZmvMMgAcEwdusWJgnWw4R18TeQMRkGPtrEpHDUzbbUK9CqqrR68sSKrkQt9v9JzoXf8BUC8VS1BCyeXXav8",
  "key24": "4zeaM5DrxsngN4GTP6HSQjYGFm5KdrovVmA75zUKPa3NoABLbrppCa3eHeZq98xezGNtTaU7N6w5h51ybAEyT2Rg",
  "key25": "4eW9Wb99Tc2YvXZTdSEj1uZrJYcBcJDA3i3uALVZDh6SXvo6ouhXuGgT1Kd5H5XJRAZ9UGWXNQdzCQCJWTN1t7iV",
  "key26": "3HumK5xnXGQ2BdW2NUSPLeNnmKdsbYsq143c4FecnvPrDYoktRgM9MGVH6VS2R1LwbKjHDJQ9A7rTovXNXgNX7vR",
  "key27": "5whUVGd6cdZLB2EgnrFC6djpzAmfLDa12h77mdePv89pwonDDHX7hovWKX7CKP7gBoZW3755bdV86drpPpppt8up",
  "key28": "gBnj7jPv1g1WnwKZLD928R7mTYVhUNjoNdANdcdB2ztXkgsqYGJ8z7wnYf2VfKTz9TknDPij6XGLUQbscnY57dH",
  "key29": "4AptKhnqyqz6pgP5Xexeic6VTyfsrGVxX2j65RaUSiGu8y4Eq5Qhg8cQCFUf1L26TdaSHMqHKi89jWAAxjk87CkR",
  "key30": "4vLBq3MyWMHyDkxGrrZcttacwXbz83Fq23P3TRaMw5VCvqmByVtbB9kLE2Gs9rhTGCjMby65RinJWVhGWyXYR6cj",
  "key31": "3Akr6ZdFRDXDjG3UckT9Hu5DgTRVExcF6TqEg8HPEuLgn4XNMD1eMx41PyfHUSHQDUrYKE5ZK3EWBzPkNN591AS8",
  "key32": "4mKfrQHzyypFqFX5tHCttEKvgSvp311n4qUEkPtvQtpyJSTP5gQzw7rmJqiiUyX4rkNHhJJpvH3bM8BPtN1mjE5s",
  "key33": "3tQLcMrs4h1MunjZ7esaW8zzkCuBsPrrutYgDaejk7JMHAgFSXzdwHGft89vwfpNDuVNAV2bcqLUQB4321xGvmvJ",
  "key34": "3hYnKZfxfYcPhAiyQLkpwNh2yp9eNoY2PWRXpZ7mVJFfo327dCpQVKXQbgV5DLXj4pJ3zE8yivq9iSTgJFub7BCR",
  "key35": "sXLfrhUDW47NtUN9YJwDNw2i8easHfo3vVVE85xrAgCF26jxrBWE8LdfKAXnA1nk1cPEE3pQdyU8QMGCbs99Yau",
  "key36": "2nLHsrPkXSCwhMPXnE3fB1UWg9UvSpRiM9n3kipHTN6WujpmK5AqNKeKi4ksmG6BZjWq5d6LPoFrMTDvoMFhFTeo",
  "key37": "52abcMSNhFnZ7EUFcCfe6H7AxKjDyAJxKJDTtptC2Rd7AfL9axAAu8YDqwUQA5tgN2VLaSpKoWqceeWC9Rid7cDq",
  "key38": "5eZnQLt8mk4noSaZVkS172MeVvvDQk2n7KAnW7gnw3yc8DcJeqHpjoqTcyLkThvwweXoxbpMABBgC7v2Q7tWJoiQ",
  "key39": "3YznEnboqRtf85x99FH2oZSbdSMwn5RJXPRqWcYGq43xgjEQxX8EG3DsVZMs3VAMRxpfK1D6DAM3kSLMz9LfJfaw",
  "key40": "QUAaR32EUpKhByHEHhvrqRPL4zjAGYRCwUsPKVzR5pHQBFaTK7qvQQAGSY3HomchV9CNYWqawfu5DUGmBQUSGoZ",
  "key41": "ARdWdKkiHwZpuSr2Zyt8ZpBPNBjQESMts8TXPWuhL3BpCGoZNfVtYxhAJSmL33PHJEq3iuyeDuKaxWQAiovJG3J",
  "key42": "HzGWSCFRwvA3vfSLRbm3ov6fUREE49fJzk5srUbvP854DChwm5aXfmrnPEg3g3TpiCRL27mTDpkzbyLkcHpc6n4"
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
