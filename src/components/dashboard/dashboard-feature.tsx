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
    "4ywJsBb9P8Xzd4MXKFkGUPCz53MTudurLYov67ywSghyukKtiFcVkkeQdiWuTfuqDuCm9GqFxndyWsGKRtkqHpa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d98hZ2t2kmCtQRpNERsB94AppmruLF9xYMmeq4g2LnPjZ9y4tKFRpoYwk8koPsXPiB68ryXwpY342VpHz2segjm",
  "key1": "5Rkk5F4eSufo5YstDMW3GJZmsVLu2gbnNnuqcVyWydeteB1n3vAaBWRRVk2nJZg8146Ztt9ybWUiYPYgZ7HCy4fC",
  "key2": "4DCcEVi2xso8ndh9yt4EXExEPPoAQxYdNoxQdD1znDDuymAa6TTTaDGchztqAgJBwTNmqDVC6GdbDsfLWtUe3dTx",
  "key3": "h3tdfzqiobe9N8UsiPXdHgd4qFLRiDGdRWTxKiG9Dsg71BM3GpP5HfigR9JN9KQwzM7aDyUE4JXkdSfJ7SMc8Fc",
  "key4": "VyvuwNMsKhvbDxBvF82Difa6EqS1JVTEg1CW8tdRx1ep1MGkVEBUScCKUMoa7ut2maHJ3gKfigNJiTux2aasaUH",
  "key5": "61Ln2wgeMwiSfEJp9ZAAJDyhe7vjp99xJH2mfV9GZdbWNC6ejQDwcm9BkziTsbCSkFpFhTjrpgWFcFBupeWsnR4W",
  "key6": "2pEFbPQop6eYmbtLfg7XUknmYxSVapkzaSoV4NLPeNWHxP76ecPk8PAz4zx74JkkfZyBCZHUm1qVAPUTg4Z9B5km",
  "key7": "2N9TtmD36Kft55UtoUvun3nj5ztSgk73BW9feKcszd1cvWwy3idytwGqiNrb1UvSacHQjTuuamWCAnznFAUfdha7",
  "key8": "3UYf7WYY4dHFxUHyhAJ1z1d2Se4yKaMVjMCaM4Lo5fyhd6nDSLqvKz59Fb6onPv9m4Z8qZ37KXYS3BrWjusAviW3",
  "key9": "4F4nSjF2bBhUUnkstjcQ6X2DcgVyPVaYEG7cL3SsmLReMufqd7TvbozRKmLxHBFvNMsahixYj7DSCL7bBst7WNA3",
  "key10": "45xtJn8s5AyVwdJTAwjWaiDvyBrUoV1JGJfJYzWaKKwgthqRPUauumVzZAFACpjXNU1HKvgykwafc9fPTCkQXEvz",
  "key11": "2St4MsN7SmqYjZSx2LDFUbHBLN5aaL7piRxYxqy8FRdHN7ipxjaU5yW2TMZPyBYw7xAiaZhWhJfpJZQri5g9VkY2",
  "key12": "uVd59dQ4JP69WFmwgULm5yci7LrwUo9FsmF6enFqmQu1aeHmQ7tdSE7YY4X8VjDkRUF9mfHEkmQ6ewSTk7A1HPg",
  "key13": "e68woesjYtw8d8iDRDVq69gdccfNq2XGuytASTsiXdDF6J8khe5QB7bcnj9GrZqMnEmEXy2VkjaypSWoab1x7Di",
  "key14": "5RfPS8hZwVfDNsVFpbUx64vqiRrLEzxWjbK1n4YfNQkdrtbzWcNL2vyaQjU8LjkoSZ3occ9qJfLE2PgkNh6LKExd",
  "key15": "32wnPT1rJGMu95FV8LkcxxBtKWqEA1jyXjDDXMuYz8tmnfZbmwgPVEzBhdGHgwqR1CQfDVEU4grFxjDw2mkmGLUx",
  "key16": "3wjCADzdW5d9JnkifaKZ7Awa4r4xExXAZFv3hqYn6PEvT4yHHrHJfwX7tzwHTJS1GmaU88YdQRu8FPgFUuYiXjzP",
  "key17": "2yj3boiTrHLoe6YdhXGLyAmtgeeWQuZoVGfs3Wkphzd6Hmi3SPRvXLA5qFVed3ivRGLoR4c7eBz4x21Ca7Ny89Zr",
  "key18": "5c1BqibaJyhrvQ7LBP86MsdKhMchWELYGLMCT8TzHpX1T98tujzitkqoEiC9iTjA2eUUBSYRg2AAPqUsBQ987aFV",
  "key19": "C8PfYNBjwUUSKjw7SB8MRVawC6Th16QTiS8x3e2SXuX7GuusNfz13qkRekxBdZ9pMRgS3wVWvxW3RbJAms52vew",
  "key20": "5wjaDWPzUyNgyj3oGtmnQriGGkoYqZFmHzKyPgySVxRFcBXyb8AMu8HH6DucXfSAb41g4ckRPNGtNn4BLuD2x6J2",
  "key21": "4PYN6m4TwwQSU8xeM9obDVq6SmqesowE6NAQYdC5ThCPkdUgJRtzWE518eFrjShGZUyZr4fyTJ9pFwcC5nKyeCSk",
  "key22": "27jAtCfjpWoQe5S1YYdyyYPPkHap45cPKf2jNpY3KaoAJxD3jKP33srzVVubvRJtVxj2ZT4vYxgMgwTjN3zB5X9x",
  "key23": "4bRSVkQjQRmTo3hvSyHFyg9d3rYfWetmjQ7MZJg7Shm5Sk52u7RoBMZKNBQXz2oSXVr9wX99rvJts6KKnGUMM4X5",
  "key24": "3vHgcJX4eqv16HRdHKRgAQddztrBfgUuMuCE6KHd2WfqK5FKPZKTUwmU9ssUMtVu4rSYCQGicSGYK8MYHwEqU515",
  "key25": "2nnDY4db9JSPKPdbhHcu4DyBLkmzvppkmnp5dPQc6V8o8YMC9dVGoi177v8F5WupCJkQrndz9hbvWynHc9dQDUpa",
  "key26": "3TU25uhBNm5d94tRFKkvqeGCzhtrN1jhf4yiggSEN3UJ4wvKUPq6xyqeS3oqrffMzvVD1WuJqG8ozdqgj1cSmM4f",
  "key27": "4sn1HZDj7dy2cMu9M69iRs7mZkxJgTCNgVwEEfYNvGUp9tCx2sREaDCs2X6JBWxyQq9c8mEHYUrH2jzBdn1UhbjK",
  "key28": "2ir66BTDKX3LeuKiQpFuVqfEJCfRAgzWfGDAvzwrGSpqL2pB8D1mX1u1AswSGVh8Qwo8B8L62qqNg5N4Pe7w1Sgb",
  "key29": "P3tnHvbnkeH8oboiA2LRN7nbM4HwgPWGVaGYMXSdQ2mTrE6N6M9mjnQpj5YmCxyW4n9kuUGHSHfuLQEAjXvYngD",
  "key30": "4bgRu55G5rQ4GUj2iykVDaAAGn6gm47iZMbzejqxgZWrH3dC7FC8Ab2ZYANBuE76VCYWwo7Q8PKseQHrX3MppDy2",
  "key31": "5cM8P5gMUxfZ88qF5y7jPhDpsFALGBZ1FkmRd1JhUuCyZNcYGb3fvfVrAJMGg5s4SxFsHfhrW3G1wDcyjqSvGYLb",
  "key32": "RuCuicD7EsXyfCRGKibGF5aueoXSFbGo4hqhAe4E2uXXaThSwTyDbGMYwAogbgzEM2uzeS4bSFnj5eUB5yVnaof",
  "key33": "22SqzGNSgEqes2j9ALKEVoQ3AkXkngwRGN7fVc2zVebMNsXy86McBygUYDSxkNMsyTuVUpttJxBVxzr5KoWdHyvf",
  "key34": "4uiccSr7dNWUsqLbHApjXWp6RVdN7AHcVabQ2ZvtcBjGVwrbkBZb1xkefrogeGgTLNCUeyJ4xRP8KZqvEetC4zx7",
  "key35": "7x52Wn5pyxj4jmnFCvrWmyfppTmLT6q6no8ZFoQtNEsfRuNkzmg6Ee5K11C6P7PunyyTsN4rGmid6wfMJUSHdrf",
  "key36": "gHAbw9LWr1DfxGZqWQMTUk5Fx5cYrkLXfrUMKdH5SyJ3rhCStjP66S8zfihpKrFVhHxqgiSTqrPkyoPhqQRDD6x",
  "key37": "4FTj6KGvSRhtmqurVbjCMU3NW4Bn8TzeZx9v3yfXXPkM6bv5j1whCqxfCP4BAgqqF6RrQcnE85vRufqGoQUfo4Ry",
  "key38": "4zk7vssiuv1fdCa95CsaEynBtmRFxLj4qB7MwQJxQUyfBRWgMuFTaQuv8v8466YZ4bwThqGm1K8nZEPC2TLYRLHy",
  "key39": "3eUaB3f5DSqHVwWMGCFZ4D6jLRCCRuAPuPLfFVLHTMQRxyG6ghqVxgpkroQhPUzHVJi8cs642VmuxQwkSCP4JW47",
  "key40": "34A1bafANDdLEMWjc6nFrTkzxN1UvNE9S2dyTVcHnJKNeDy5651yxu6aUcJ64BoLct5md8x3H12WBbcVNwzNDYeX"
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
