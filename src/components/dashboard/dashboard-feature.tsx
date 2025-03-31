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
    "3Z5gxX53F1EtogTibm3fJeSuHgGw3gki6PfnbKfpApZycGvzeYariBQXynMN5shh4X98pNojd5XmjoCyrtqyxvsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znQEsm12Tfdqedt851orE4dKGgwNXHMvFscPDg5N1ccJNuhNDbKxPErcjQBGrVjVN1auiqcVFdTtBMN1rJBsboP",
  "key1": "3CdstZNDPW8ZVcv52GggsXeyPn3JxBCYeca4Afykiuu2oaQ4hUD5dMV6dVweugJKQKZzzx6kkeffb76SNCdF7ECc",
  "key2": "3jPNtHvRRihcUKC4AERpisQSUjUu3Qxd8u79Ug89L5BRCHAt5MEnn46JuWinq1Py9NZK4VrNLgaZcroeuz89KjBT",
  "key3": "5uCKQdafRoeXyowVJWx1NQUXfXJ1dmUzVTXFcg2opyBZhwUWrfkPUtWtPkj6Fod2GXUDbYx27TZULdTRPHkvmk9n",
  "key4": "2QkpfLvNYvhw4mXDz6uMUGLuNZ7PtQx7kZV5AYxLLFLpt2KzEFGJzCEdkSY6cN6KNqMjiMt4MNJ9brByWq8pFdUv",
  "key5": "4gLDRWACVXGLT2YUAAXTeQXmzgHE1ezCqxLQbqoZrTdqJ4Wh8fSLGM1iJMarbC11Fhk7R1u9KZFgLNtaPRxRcFhn",
  "key6": "66dErMtWjT92safn95xARhusS48JqFRYiFZHYLhcSzqo2thyfu8EkQXCDM4sFmLSqBCgwBSKjdP3msLeUuw5amiM",
  "key7": "RSxuXBQGRqYNmaz1nkzF8oRAuzeLm8xBe5YEUsWwPP9MzrDJk9ygh6rHZquGdStQjwK2abgueGvkxfue62A2UWj",
  "key8": "2kZkQxRZerJ2EkBYAoyUo8z654B3y4LHGXxTTkTdh8Yr8QxkjRrNa7mxcvJg9t9e5EX2auBvxhBY6NJosVDJ2tEF",
  "key9": "2iWA73Vr1dnkKabEpUw76u5UrUtfyzMnEm3vbZSMqqaK2zcWinip3RdageXVTUVh1TXums5sFfTonHFrNK4UHXVv",
  "key10": "3gYvscDjas213Q1J5yDybFk96qtVNJbi1L5iv2UcCmNYFUNm8Qw3dRwSiZDw5HcdCmkhdRZKo4k5si5sbU48oQKb",
  "key11": "5ZDExypthk8yjo4EJnR5vQBYgDmonGozuA1rGkqvvMoGYbmWKMeBtgtCKjMUPB84P8U4AafovjVEKgSwa2NvwyVa",
  "key12": "64qEXaJwLnNC6y6aXZhovSbd5xS4rA3RRatfX7noPFE1jjVtExKKvkFcKTxV8p4jrqGCBn9h7LHptVXArm2rkvqn",
  "key13": "5yivQHEg84LLnPszeg5262pP1xNRHxgZp4Df1hXHXpUSmSjpTczGUT3fTnvzLmL1NEnMVPtzw1fMeV9J25YTQRTJ",
  "key14": "4f8qnXcfy9aQ82ip43tdjgW4bv4xHFWNzv9VDJf83gBwWD2k9oMbzHZrdwQFWs85ZRMk4gG9C83HyF1RDeCDo9hz",
  "key15": "5uCqE5T6vuwSf4GnGDdHhP7Vx4MPcShVVgg6sFy9GkUXMWNy4W4vKYzBvcviAp7vuYJb2aWqNdUpFxQ4FDBe4VDv",
  "key16": "2hpk7nhBWPWJ5WeQqaHiUyhymsL9xv6bTZbjbiZMoNjbkZkKbyZfXgYwiUNBxqgDJ77zxq7JEs4UgBziS12mE8QC",
  "key17": "2RmX9eZYHxFEBNDVG7PHDEYXQ4MZX32TyjUAGfD87fuM4N8GYWx6qK28KGhZXLyxwfPX7YWnN53ECtMpkspjYxCi",
  "key18": "5gUhDpVMiYQ8SZjjcXCzoADY84HLm2hEv4kQziBxBnZA8ByxPFLoGoJDJyCguTfA5R9oYLQtYZAQZc3XduBU1MFG",
  "key19": "3bCiZbeMzFPCDX3JdzrB7N234V8PhYA4WXRB3X46stdB13w3YJZ5mG7qAeFkbTWw7MzMLxHpXiNawda2ZninzzmC",
  "key20": "58XCXjqQ9n8Mtp6h2fXVFYzLw6Uo31QgqB3yT4Y3MEnAJEJf5zg5449FD44CaX9mErXXq1KnG72WMKdqfpqrQsJQ",
  "key21": "4H3JnhR7AztpVyEVZYkKNkY5S6FBt26iCL9DdA7GWGVQuwEmX1TxGcJM161e5t37o6gYnYTvfNN1P75gqxjubxBY",
  "key22": "5G6Vbf741f6TbTzW5UBtoxQ6sQESvBRefkWwqSx5VaLL9hotrrWdfGYxkoYYBd5zyVTAnh2j8E8VsBCjjt5FfEEv",
  "key23": "Bvp1EcibBSzpNwCA2Tcprb8yufWBdSAmvGGFnKWive28WKs8DUqS9xYDMrm6DV2ENgy8GaWWhKKhHAZGmWe2C5L",
  "key24": "Fjxmsso5kVDvfq6JWKwbcaF71sEcAT1Vpg8Ym5ySgtUetbs9MLnE5rFfTpLfyZRNiCpR2ishULNrpbJV9VVYi7e",
  "key25": "J8CHJNgXDNcgjktcC63XFNCSqoFdx12FBLrPp5n7NmQS4d4EfikdPqWj3iVW1qMxqDva8jfkDohPnZ6SJW8aZWW",
  "key26": "4ZJEfLrSoKLcqDCHX3yP1V2aNmBushJ3cWmuhMK2WEy57xGuKT6fpsQXsqTvxJDbF89QZm7DC84GN1NvtwXcQPvB",
  "key27": "2xwjYBFP9JofCr5iFFgWGUH9bZbtfBTRuHJY8fjzJF2Cbhtg3gJp2vxTr7gxEmS3dtvu1d2qSZaUcbh5om1f3eKq"
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
