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
    "4yp7M413FnS1NBFais2FxUAYRXkCEAQYXdv3ACsKieHFim82ucCtPNpgDZiMgceCCcnHkPGSyqr5McPdY33udmaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YMn79CokyPVPgfiXnbmzzoDx3EcDhFMDf7nhTheQWvnBY3CRwurv338MtBaaasrxqn3E252DXcxht4cycEgUc6s",
  "key1": "3A1R9R1xhK5JrYg5w6hUs84hHbh1JVm36UnTB7hatAcbLRbTwFRGXobN3k8uD357h7dutiqfxbmVmzcwMwMEruif",
  "key2": "2wdKM8yQBQgGL1onBGE9GFrndvkuw5tWHU4GTTAfM5Qajazy56EdRCDD2RjWCXeqvLN5jckz6zvdBsJg3gdCCYcE",
  "key3": "5zeoHk8xRQNUjUUtX2FaM74nir4AMcXRFjsrVrc1q7yAmBgvYFemsMK3ZKXX4W5rUUzRtzqm2qhToyV73fABHRRG",
  "key4": "2CJd68cb8oQ42Dbn6vcz4iWdHX7DbcWJgMFYBA7HGWQsa6cdqzEvA9Gwbmcj31RAsgU4uv95va8Yi4CtsbZVpzv4",
  "key5": "39yMy8j6KVRiMGnMs9nFCvm7U9FyJpaqmgEBKmf8oUfHZHTyXmjrQbUvfbFEiQS8ugfDnNfP88cgL7MjdJBXYoY7",
  "key6": "62R8ujGMoQvZcnokt7FxJNaixNf7hZthbhu49QbGgnobhBZJKtyWigiTQSQtzQPYgoVTqo7FK8deKPokhERfAvxo",
  "key7": "2jT4fvihypbp78AWw4cWV3fvtmAedWuk2n4WkrEjJvuQdzZRsG3uhqmhCDcjxjjp5KhCUqygjjNEHrcuEnHz1fhD",
  "key8": "5ee5om2kKNDdvRyKFkpkL8wUnZPDt7Pjwm1WQv7nMBA4VokXovbjybLbsXJTbvUr3gezqr8dt31SQkfzDsxih4Bi",
  "key9": "5DwkGqz7kpVCuJgqj2cfREwWY7tX36cKth8upQAoTZTnEXEYfrEtcvmDSjvALn8JcgQekVR2VLx7gPVu7UpEFJiM",
  "key10": "5VbqQr1z8J93N1zvdo2niYsiNLoAaM59K6rfPjhHTzze9mCZZFpJDDWm4JpLveezEsLf5SjgtVcvbR7DeahEvXkd",
  "key11": "5BVVcspcKK61QcrvH1LvASWU4kfhQ2tLvWyLeSKqYEiwjJEE49C6ZNoe5LHjhC6Mrn5JM2gytu18ach6d3aEa8qK",
  "key12": "4DjhCs9XkLUGEV9YyeLN54YJHadiy6qemZLR2LcBznnYpWKAMXjNaaLSya3213j3zRKPh54gPy2mzKLcMQTccXCF",
  "key13": "3Am214Sx9CPWmVNTG6UA9JDQUHDSpFQ6Wb9bc8vC8Zq9HiX8ZEAhWiiDq2zjtHG495NTFGSx7YF5JuS6RPCPQdfV",
  "key14": "48SrjasRLjQShUiYBJubSGHuhhYg66fZUTrE7GPLP3vHVzM2Vs8y7wvCdNyXLsM9mFqu8u9xsjgAxAcsrwrvCgw1",
  "key15": "2Jf8WFemss4qTAon18DpZuDQdenBPK1mnAbWCmvcDTvUs9im48WBt8SgyXQEYR4era6454XFECwKUTbfw19gypnV",
  "key16": "z528kbwKSwEpovgHpffMQ2mWhzAgJ1sxvBdio2BCzFK4KbSGgF9TjAnqnqGfMx9tBgkzcVAAoLzqxNimrWXdTA1",
  "key17": "4R3VankrT8eda8Gpj3JPbe47Pr1ErrhB2ZvarbBcQNiJoPGSk8BPxnn3aVvpNso684HUBzJBS5LUFu9PKTU6QF3u",
  "key18": "669qFETgqhHJJtaN3ux6LwrD2GMbgroMDwyg2QHkqrtGvvZCN6GiS56Z7q1F34sLRDZgp2diPhDChgzvgeFkjDyo",
  "key19": "5JmKhEVr6VvkVWF18Uep7JvJ7MJtYbkwnbsD8vxJHgEg9FcwdDa8y7z3t2B2JbU8GvM5iC4QJWtsKVbUVUvpaqX1",
  "key20": "66jvsVuDwbc6rT2uhrPPFQPR6k3TcsrXXWW4UJHoyDczghbDp8hNw1qWq6cinYg9jztcLHDSCXjqD8Vnmu9cC8Ru",
  "key21": "2ch1YgVeMgNcKA8uCKJS5sVxFz1TscnWUTp9mYGge8uw7sNmFtdiJV5n9BcYv8GLDrMMYvrtvmJdhFCZYZ9N1eWJ",
  "key22": "2nksnTWY3ZhCNxfPUgRVNVo3G3UmwCZaQGXLToAekGFmnQWQJfwa8gjEec3eYDZgdUjHcAa8jNjV46RF7n5QvLHc",
  "key23": "52Wp6s2oUEH5MHSQ59ts6ouaJjLExEUDMxt8esyawEFC7uyJ3X6wCw3nAZVj64DhiLUTE4iG3EqVWVgA6qhxYtmK",
  "key24": "64WVbsbhYBzSfYY2J3VDUsACEyHZJV6uZCxefgxJCUHuh54Tvuppj5zepQA5iWf6DgRtw6779LAbshpi1HWbb16P",
  "key25": "DREUe5FMHngnaTFDiBFNSS8okHrLavWJs2z36HEwGNfqjAXJsEQ2ox9vVjoNDsmPbnnBN2XUQmDtzUTymMAoq8U",
  "key26": "35nwjDTx6V2mzc4re3zvhkzUdvL1tNA8hM6jy8GhqBnC1nPn8FLRBNZgx74yHWrtdRdoWM8sVhrtLyDQRhvSXr9b",
  "key27": "2aLXQpNZQvncwv8NSWPjY7yXHgAEWxBZFFvnuj6EEsV3LxfxqgSCC4hegUQ54nJTMu3cs17MGQdLJaVJAguqxtuD",
  "key28": "3H8EFxFYgjH32cNdnCeshXRVS9iBSdCj9EtH4pWLCBHTrobJJLL2m5ZXnmB1EPHgTE3w4NtLx4knzTygy85DPPJo",
  "key29": "65SDHc1aYLtTS4Nwie5C1FQMbvoCd8j5JEdNDxbqpVZJyAJvHHJad9KkBiReegYgrFB8ZqGtmg2Svd1L6vzBAX35",
  "key30": "5XvZme7Zj25KZfBX96EqZotbiEMtbWrozwUWAsEb4Ts1bjgBdvwEgNjzQkDHvyDS3znBqCz1vmpU9ivU9KL8C3a6",
  "key31": "4VS4dF3yw8nmbKGUMMCemrMoskvwBVd7mnLEeJrZhfMkFjmD666HZiGU17vEwuyuvZ5o4E5abUSHkyFxX8RsGNGS"
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
