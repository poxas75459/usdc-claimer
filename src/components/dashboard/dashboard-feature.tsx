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
    "5cvdqoMhLdRMFhxk4gtvjMEUpbgeQk7sqrrFodu5fiRHYwze4cMd4KeVwPN6x47T82k8Xt7z2fozSNStuEbVN8Hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hb6pZKvtcaEfs7KAQhFzG7y393yGoaBXWiwD7bCdMKXJ1H6TUJhyB3tucfqFfbtMeHnkNWEjCR6VMBLrKRPMngg",
  "key1": "52EKNKAgDcWkjtGfY8ZNR9V91HtNLfubngq38qG2z8KiNBb6sBTKHhhnE4DdyMu1vdvhg4fatSGhtzLVTQbnfqYy",
  "key2": "3Ksv8XtCWWdnjGfGHNK4KQyt2mPPhm8BXNDWaJ6hCTtLJCtNu2mqYP6CYEji5T18sqtunEQDFeV9AbGypTSPQC5e",
  "key3": "4wfHxbWbdo4qS9wvf1ZeCH3zHfLbYotu2SKruSJ77oHf2f6DcBvnEkT45BCJdeHaYdV15uN2uUeLUHGDaLvHDoX7",
  "key4": "5HHHKw1Hi3GE7xqS4goGvf5QksQm3Uz8sMsPTHbHRc9MEbeN8FNs6ssQvNffpXmAFpiBgue7ZjmQEAhSXQGpKq73",
  "key5": "SjRjfFc9mQDtBJhaCq2RBwN4dZUGE8ZQkX2N6wScp1Ls3krNJF3a9Th4bPk7LnCUBGE6FvTJjZEKS9asLvrTCdo",
  "key6": "192ZN5QACZxBTmGvmSsWAdZXpTVzvLSwu39jFCTiHaSomN3Mae3ksFJwxeYn71x4oUzQ5f6QBL5c6B1qK3rA5nE",
  "key7": "2yTiv6XuG3XhCe4LfwZ4wfJqn7xc1wQPBai5CHVJHvLU2qqk3YXGuNVSe1XDguTBb7qv1j65zfHNNu5aJnp1Ky1o",
  "key8": "3KcyWLs2qPCam4hNfd5VzzvfrGQfcbMnPvDvqY1mzZ7FaUxg6ZEn3DnAPSotDXzXXKAEPPxz6ehaqQwTN6VUks3L",
  "key9": "3X6TNFaoM5iM61etoimscAKecR2y2Ycdu1kGHibvNswHMoFX8qXdhrPnPJJ8mB4BcAZjQszMbf9TkwuJrt1M2kv1",
  "key10": "4oLzWov5gZVWmiX9vZESKJMRdhLwg9duWjc764ZmYVjW7VV1g3ch8tpkYgJNbCqesEYgVyQSLaFAJQuYRH8VbUup",
  "key11": "4zNEnfLMA7vL8A32jqDxSjxPJhQdEYJKBaesCkcdTVuoYBLZU43ZGexJBS3GX7a65mnGnyZvbBzR5iYAtjZwhxkm",
  "key12": "2s8zGy7MDEqKvW8fcZNrJUaXL1nB9uHFZCTEQDu9swAojp9qHP6ZnpNwBY5X9cCxcoNf3JMcqfF63JgrvtnMEXX9",
  "key13": "2FP3xKZHz25c5M3bXaWbpA2jMTssfXJrewhKrvDkDZK9hYgkgNNwSzCdj7JxrmHyeZCooDYa8F43CuK9qMfFyxxz",
  "key14": "24tpz6DSFX878sR2aDTgsiyg3s5bxksQpAXTf9RkiPm3S9vHKN51LCipVWDUkwGT8Uwt8ugb8UL2WkJKP9mUR1sf",
  "key15": "4M2YYPReiYWB3SLuQFWUnWGPEi1DccKjr7SXTdGh9ZDJwnsyivCDUoQjTPfgkMv3DEjVEwYEApNRjhMtLkBe5YXS",
  "key16": "cbGGy4SV2CAaRvBw7SBKgKDq4TfPKZviLPSsZRMyvnfpM2mHYfwqX24JCYSYmiSGbgWEJQJFao6bWPEwXfSunv3",
  "key17": "2LCbzXDbTYMK7aeaVdUpyRHkdTnt1i19NzR67EAVo13z2ior6dmzhTQTpggKWQiZtTwgsUqDNbfuaNMpHPZaGn4m",
  "key18": "FJYEPsLP91KaEPS827kk3ujocR3uLNjGZXEDLxxx7XoevpQiP42RtsYdwvrTruLB9wpmXR5axqQgbRexSKZNjDW",
  "key19": "2dHoLfAvuK1vRiXJQMuxZhKbKMQP6UBNEvp4C5923GntP6FPyWGnkHESQQ1QAUiUQk82MSYhzJp2Z9TBQBKrUB6q",
  "key20": "aBcTma7xsy2EcrpN5tQDQjMEeKaXPKYaaXPGGvxpdMFyAKUY55eH4kji2TqMM9yNwhZfP4S3Gm1NSNeuGA4SKrD",
  "key21": "5kgg9fYn43v34mfJeXHKFRvQRbx9aTpS6an8EYZACbZjcDdnUDCGV3oQ6WBHx9dNNLrV3GxpdW9TFAVLhsgvDckv",
  "key22": "4Ngzzo716vNotDNxgMTD1bSEbyMJnY95chuhdtyhsvkbPMdEbq2wQ6az1d1zevTRGZXySUt31p6UZUYSuggNRq5C",
  "key23": "2ohii6vgCxMBjgZYaGbDJssN211RWxhpdic3rC7XJQoARPPPgXcJwygpAbxZrVCzECxtAtZyGiDqVZ4f4yX4RYL2",
  "key24": "4kfB9oC5MnjvLsFw5m3JPudPPRrWHNgr8PA85TchoLR3Mp4fQSJsrRgjcCjCJA9TKtUbbMwrygo4MSoSMRqECddp"
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
