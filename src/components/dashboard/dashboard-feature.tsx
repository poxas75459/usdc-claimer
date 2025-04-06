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
    "4uWzhzDZq5ba9SiaSGUUq4cBgxfqRQrrrWTQpck8PfZk4qaAuz7Cg1sww7hbR6KjT2nnG89cgTvTYdM26Jfu1ymD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fk3Vxn9ZZ4tkdBr17uc1ypXrXW6q4FPUao573RNKShgCFYUfjQNAzeqoaVAgTRqaZWRWqNZh4AtkJjVz4ujdcBt",
  "key1": "APjnQYaik1TWwyAfFEzdYHrPmqPEsBp7rFbBb6jsW9uj3MeBp3ePXX8hV3G9Y9VxPEuohpfdZEoEiJUHT2nffKK",
  "key2": "2boFj8c4GJK54cHmctbicnLhCz6AdPN33SJ4truyxPWFJLLEqbBm2ZrG32ZebFr1LRE3YEbU7LtcaaFxon5PZja6",
  "key3": "3akWccyDQc9Jygmo4Mrc3VLdFNdaFF4TNQS9W1gwEoQm6vFWUwf6Xzcua2gbDgcu7x82knrtfJzGphaA2g3giGwc",
  "key4": "5yerYG3iRFfqFFUJE52jzriz6jGnfzNrNsSpvBBkdkNBbmfJvZrVJf1bpEru2eyu6CgWYuSiM9v6wNfPSP77FWK4",
  "key5": "2MegDoXAFfnmyBd6EkadCqrkuPPuUvhumKknqDXcQ5anuTMeD1UvxuPNuWnj4td9TJwW2kFPZ64RU6SEsEuTQ3ii",
  "key6": "66nPsL7uXhNx3h4wkiBwFF9uX2L5zQSLRbL7LsVMnbN4mTYrXaTWP57nvC17PkRsPToRLMUarRDufPfPrNy23EdT",
  "key7": "2umDCbjUcxue1RbBfKuSXG6dUY6hgFG5ptDAbeqr3epVhQstQw4Ux8cj9wPv7iPyjrQaGnKbk4ADCEhhv3qSsaGR",
  "key8": "4kngXPgAQJ4WXfw1z5ooxRe7eLmqBPvB88hDZEquKxAVbSAzMeVbNpmPuboiRLTRTTz5pkmDCg98PQuVCk3ENdND",
  "key9": "4coAzkgCUSjic6iF8asDSkzRyDu3j5PRhLpdJiERZ9YBWXJ1LyoeSAktydNakWW6DEHFj4YotzbcDtjfTTQaFkLC",
  "key10": "2HwD9kJNHLTZyoFioCAzVSZAarMvVohrTQ74jV31ej6q2R9xQvas3m15iAzrVCjJv1qErPeryeTpkNixwPdVGYpq",
  "key11": "46VYYi2sH6GXTCFGsNoEUJ1MZLr3aKcRvagGzMMENuTGNbG7AQgHC2YTwvVAiqizXEiockvnjnp7qFnPvffRN9D1",
  "key12": "2yurCjZqy3bCnSpZzA8hhCUTiDts1cqt6TJNpiniQLUwvjwVSzLRxLEpsF9kWHgQdjz4bXXLmdDqHZs2G8wzZQ8r",
  "key13": "3odGLtQ4sQ6zBRLmQjqZTR7yeFTEG7ZptPWQJKLHtKXFgbw3tUGjjJLrf1mYna3LjKPJtJsXyGEQxcpQtP2TFFSx",
  "key14": "37ptSbsmQEWBGJBmQsKvCV2Fz2JUjJr4XUK2miQ1BdEaNdeUpKkwphfnLLsPhHsxmP55gVaSz4QA6QRzYLFQKgvS",
  "key15": "4biD47HuYr4E1hE1XrQvKJhjYmPYBp47YLM8nFFuhn9PcBJnQFt5afJSJCDzvHcwJkPBymFf1dzuYGsjXSCY9jZ1",
  "key16": "62Rphb5zxysFiAqu2FUyKDHRru4hSwYz9MPeUSTUFWThxrbf33fsdmKdnx8m9pQixJd3UE8nxRLrmezkcR7KGD2y",
  "key17": "2mKRTc65urU12nbRFgvJcPVo7svXmQ6QPWqyfja1eGg39idy5Tr7mt3RJfbKymtmWNdwhNsHB9de9mxKAWePMfhn",
  "key18": "371WZDmq37SoW872BrrE4XZCCpDVfb1mLgyZ71i5dDhff9N9sAMhxKF12dNebqGuhzQYyyFcDLB3RXrqjHLHBBmi",
  "key19": "5Qq8Y514JXHk6Nbi4d1DLAWhJdm617S4kBgW4G8c4tLEPME6i9iUYafB2bURTopkr5g2Hjex55iZKDfPm9YnKrn7",
  "key20": "5h2x9dVP43SyWpTqZVgWh4KbTpAzFMcNUVVrR2FNGGPUW1968h894KNV4wMKzJYhsKBDb2cqiFEF76g8LYzJicnd",
  "key21": "ASHpVP9A9RNKZJTc4qZuMk3f7Ve7BzEmkXTQHuHPwwRTvZgf2fyDp84uVEyn7bquogfQy6tCot1cAPBAD14nfFk",
  "key22": "2WKGHpzkJaQm7H1LpYdcoHtAupaxtMX1FBKKTmW9YsVqmozZCDavM5tzCegDv6W8s9oJZyddFXkk4jQhwGBUsbf9",
  "key23": "2apu3FBuaiqVFhvmY2UebiV2hrEBTUwrerg6vDxo5AQqHHn93pJymBF3ZoBm1i4whkgDGFCAEQF4YB6WYRFGiJUw",
  "key24": "2XGRVFq8qHgkHEGAqwdAHyPMdtieVd1gMocfoedAqshwAUoGFFHy6YpcDPXWe23MVWoKhVR6N8SiEnCmJTvwSvcQ",
  "key25": "4HbfdZ4jwMqGyuU8Y19RemVvDrfFgeguQsFeXvKWNYUXWP9bwJRwhz4xR2YhqzaLkidKtJVrJWoD8VHBr9i3S3kB",
  "key26": "4VJNZdCSWzpdX7SgsZ24SypqyVGSKFUiVEaHauuRjFmwcKVZKcErBdNa6sP6QreBHDfacDpQHzVNRazHRQ6MH8zf",
  "key27": "ANAKsrWqF9jwnDsP5NqZRLorqxvJJ22RBobZzzf73yGukFtaoNUtBGeaRewnsHcC9mb4qbQAY1WTcFUDc1skvZq",
  "key28": "pPh3MZMvFgnRMGPD8Jppsvu2LyAyNULmTKeh1fDQGj1NLK7CSMAMw7BBuNePoB4d7oSS6MTTvbWBPLBpcAdbKDD",
  "key29": "2T9Zf6E2wD5BLZkWXRjEdNDfo594u5A4BqiZV1G7RRXrLYEShTguscpWPZb62Ji89xnf4xbsGmQKMf4ZC4SfvCTq",
  "key30": "4yQ1hUypCvfyaDB3CxMybFMvsVnggfJPkDayeicUVWnMkF44Y3bewEKAimaUGNzBrczqbpBbQ7M9oyPwC4GiiSnM",
  "key31": "YNkWxnfJ8WBnoSWbVkgCfV1rPY7ZUEe4PrhGtgYhLBzd9kGgCtApq3rNMyZce5YbsYXGooRdqWjBNNS89c5NtfL",
  "key32": "4FcNYQAt3dBEb8SMJPJ5yCK4LMNBLeA46q1bjZ8xXdEynjPeP1t9MncYnoSU91fMbEygUDdxcQwvn13dm8EoWWSW",
  "key33": "5hCt5r7EAEGbxYBLder5eJf9AVdUd3bFX49uBvQSMnz1JwjTyqDXUHh1nzRoEKKcVYbwNy9ikGxBZ9ZDdgEoAL7T",
  "key34": "2LoDpb9HkS8YLZFQYnX4z6cSeEgKYEuEjDnDvkD8SXL1ieCKRjD8BrM9dNjgW8Wv2gbVscEdgigRwrVjQ8TcZiPm",
  "key35": "4JikKC8ARCcaYrrVReaXgeu9b1DqkjT9JGf4KZbRv5DRfcLGfwLCZqSPc8qCgNz2XVJhD6ZJC2aqvjS4Yrz9SHYY",
  "key36": "3a8GhKEH3PFZT5YvJaf7snnvC7GxdfJJEDBRwCvTqZb9N3LLYqwC42AM9EA2rAdozD7WFubTAfwLhugWdFZFWggz",
  "key37": "2ERCcGdxwcXsFmoRpCmXPPkEUAk3x67aEq1jn7DEggBrcETGfYmjW4hfA6ttmhCS8XsngEmmNspJwWpNSRjS7oju",
  "key38": "2ZdExBxTG9y8rdk9MrXK895gzn9NxTFtZRhB8GsoCRYGE5J2z6Pufq8zpK3zqib2JktUdHRfTdwfnmQBSyuToeyJ",
  "key39": "fQPidscHi3hjHsEPAsxrto4JFstdxCSm7UESfmEhcqkgjeucDcSXVY9YDcKy7dL34oUYGShKvJMN3EG36d4mxzJ",
  "key40": "4e3G8mU5x8uog5NoCHJecdAt3BSoqZ1xmMjNtvW8HcYvCycSBhBSJQ3ULA9k6crQCiFpyfBi8dJMzXbtaZSZTcf6",
  "key41": "4bJm4kesLRqEg732CJ8cfkn71PFVmgyZyeQ8aNF57JaRAYvDZ9b4rzMd8uXWNcwu6dYHfjVCLcd9CokUP9VzN4oa",
  "key42": "2VYD5ce7jeuNk7a3YERZaFk521pTYh28CcePMGXAU4fk3VXmw6DeZ5jkQRnyUfn8oSYQmgDpcj7Ba951rN98ozjz"
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
