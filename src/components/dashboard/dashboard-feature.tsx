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
    "2fLj2yzyGbN2K3sxhizk1WyRe2be756xrYScoawiFHfZCXnZT8DyupT1ZF8Pzo4VVyiDymNH8ifxJLwNQvsTepDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xG9HqUvSvfwb3nxmPAxNFzWNYrKDZgSELtKwCjCF4Xg9kTj2f7aRPTAsvVjeoZk27KwTU9sHPJpewWu2EFqx7eL",
  "key1": "5EhDraE8mVby9VXkfEEMKhaY9F9aVhuJ7c1ERsUh1HHjSWmtSFNAUvNVHLDBKC3qf7McfM6hZhpJwNwy2fDGJg4C",
  "key2": "CYGGF8tZgygD8WbaSk1oN2y7To2ypjeiCcvTRjumhCfejqnf4BptLMzRaQgsUmWpaWZc3jvUbtopRBhXubd8JHq",
  "key3": "26q6EFZ2Hq9RcMvZ2dw8XUGQbRcCKUeRzavu9VonSSosqezZWsFLJEYkuWhy9LcKEwNeryEmcpGCHNtqXh8Hqrpp",
  "key4": "43CNGS4aMVQ9v4oRKSG8qi9sG8TqQ7gwiTW6EedMS2SMjUmfk4FdKmQumMhfbB2itVXRSRb1umW6kHUw94PzEskR",
  "key5": "38yKWkZWH2LvQJ8gr9LNL5wa4n3BBEJaF5UvZRxbgCPJDxqH2tN7UiJBQjobnacrYdACYe3gX6FF4i5EndoSMYV2",
  "key6": "45gnFntkmXojLB4m646HC828S8wPrtzFGUcXZD4coX2tbUks8b662VTxWJEz5ta2v3CPvbm7VJcJDhZWVQ1iqnES",
  "key7": "2vvnnZkNLtcmvreQY6dgQc6h5uXNfKYqV8TF8S5B78eEJq9Mjjf1VguHqUjxA8DjehmkMbqrx3rnFKCUxbcj5Y5P",
  "key8": "2fDQuZmBrZt7dVB3VbWqqfgtNSiQvtEbWBBwDgjNEAMnDRqR5CScdiV7wGYNBZn89RCQ6z7pFbnjVV2ogNZbZTfc",
  "key9": "RwhpWWk5r81fPwB9pwHm6Bnyra87sumyTq9FzpVDrJsBoKpcCGH9tbzTrPeKUvhReTEb78L5u1qcgxq2m5avckM",
  "key10": "3QzHfKi5iY5bFwYJrpXXZ8xqjHV1uDtvPPgss3Xt94gqNgsqmirzFem49sCLfBe8xjaj1tbnWWZzW9JV4PUvTwQF",
  "key11": "12697YWUL6teLNnL5TceXKdYhbehHwbXuYKmDzGAj9XbVwdnfeuVzxNa471sR4stmZViYUhZCk5VSodE4DxaVBrR",
  "key12": "Ucz22sGKC46uD2ckESiURAQTKpbG5qBHBf29qfZYsAwH8PdkHadLE9gQZi5QptWFJeJSg8ULNT77Uq3SJYHLEBS",
  "key13": "4Ka9mD7gRqnGCdRx5D2Qn1u2LqqsRg3FXk2WzScySXz2hsQD4E3aayx4135W6wpwHSfa9m6rmreJZn6UrQ1YLmqd",
  "key14": "3yrPDNzoEVDwUMCwjFb86sCahkAxhUZLynFytQwerigSwXVC1mCDh4gFZC8tb7ob6BPrs5jLTfeEAmVmhtthTRMC",
  "key15": "2Y3u2EhXr2NGgT3dwqynxDXp7eabv9PqYHxEKh8zPnHxdwGtmmBWMsKFWkFhijnF1gVuKfNCRJCpZexx2knwvGqY",
  "key16": "3dV1oaoL4DDMhTUEZorE8ZEz5ZaA48wXYnTSazDe53fgTeLneZTcAx3YnZvgKCr4taKZ3uWQUugZGDzK55o7XUgk",
  "key17": "59v6pBq8fuxrER2sagHzoWcp5pXGPe8utxYEnt31n88GRZeup7XnARf2dKGtttzQDv2b4mhrYYVCdnPYiP93Mjo3",
  "key18": "2heqNzy2wmFrSQbfGxM3zceZBMe7DtqtPVr5Mbo4YaxrLZAWBGCmCC3tmmELhFhwezg2DEWNwdoUY2FNnd1Fwqy6",
  "key19": "2nzBANiSRjoXepUb1BzAU9nC7Rw7BLpm8dnV75sKaxwafDp7DKHZEcFhQcTAVVaXMtCggEJCqTPKYt4CjzchKUnV",
  "key20": "qia7CZM1aYMtqnckGhAv2vKckkPbkjzKxFaGqSraXNY63MfDn7NvqbzrdEWfSFRN7JWmB17mLMP7E5PBPUJHXFc",
  "key21": "3NkaG5Fd5PkcRBgyqnx6Rbes7xM1vTHdi3Qat6s1xYzkwvcpw8FBkstci4Fd9emA1EBafzh32bW3gyiMnwmdguk2",
  "key22": "432hsUwFxRgKPWeacM9JHP9JLtWqNQhjVxZbdyMTwb1ocfzVm4tsPk7YoqsCEyJiMGguG3EHhY2dg7neSSFo7cvc",
  "key23": "3GkwYY3x62AjidyFKmKRzfyHwgTNfNVvwxpHhuTMujPvsSyDKJbLVRLTq22h8T6CBTB37SjJGjgw3zjturnuczA",
  "key24": "jZa8pESFrxoo5suK3eU1UpjSGGqxo8FVRYXdgEze8MP6ENRos2wJEiVsr1o5URrrKKGCebYp3bhFQNBoDgXoJGj",
  "key25": "5yZwmrQ3wLkSqbXFTsrDfYDFJQ875eELq61vQsUpfu9xakJ1dzB5inL5BAY5iqpn3Z9HPjv3dzSUKQP6ZWv8361s",
  "key26": "24rqbHLjA9qncetyaJacBBG3TDcZqUyn7W7DpkxzsmK9KyJ73jcHCadhvXbs9Z8FMFQ1fSfpU2N3YWeY97J9MT1j",
  "key27": "2fsrMqn6iCf9Bst1gfTmtqdpJRfxDF4mwT8ctzx5XeJuhmVMkd2DYAZncrsXBxmL7W2BfyDfgNyQtnsrEzgzDXi9",
  "key28": "2u2qUjxk1Fs39Yo3DZbcZbzHGukmSxmc3UDZ91uT3qwxtQZv37Y4oF2cRwbZ5RDWs1vm8dRhUhkU5yYLVy8tM85M",
  "key29": "3DRjdyvE34oWpHE1jdwWEFftw6j7YJ5PmWCKNipHRXA7TToBocJsDa9YEpd3SF3HQ2c2NWRUVDRZhYrEwme4pD8i",
  "key30": "63J9HcM9M2mESNkbXu5rxKGZfQ8sTkLqa4iMG7akJJ3YrgTjzVgNdWZ7XCfgf6fSUwWXFe1HrmxFbugp5MoQFVfT",
  "key31": "4sP8Ejeb3UeUYFA4FHbTyC5MwDKzGR7VPcbehCXaWRnyf3bBsrUQAL6VfqkdoGN5C5iUKrtkrJjxeerUWUWPerA3",
  "key32": "5YurXoWMZzgEfHqNjHGKNzFa3XeLooU6WacPYVoyst7kXZZ6Eh7joWdNJgZYxzs5342yQGTz9j1kcvFTBftfAH9b",
  "key33": "4swf1oNKmpnyZhwtmmWGQvKfL58GBfL5QcjbiaTCTRdUs61Hd5Z6HjpvoNg5j4vN1P1atABeR85zbQQKCEjggYeA",
  "key34": "4MYMogbpYtXggbXtfq9cjkbFRakSLcv3ys8CPBcSmYPrAYPomevmG2nj8urrTub5zwUc86jehbHqY1hLpLsEpz5U"
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
