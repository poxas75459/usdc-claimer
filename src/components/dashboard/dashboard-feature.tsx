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
    "EVoynQVmsPUK3VaPZi1cVHEEk3AScf2RZ9BFNuQnoDzNSFFLJuHvCWQUFfoZ3HqBVV1PNWMEC5Nm4RxzQkyFLJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QAmQXNgxPf84yb4eEb1SFdy2zQsxMKSDAPiPR47aiUYjo2AnqTs63QddhagHpS9L8tH93kZqb9rt43kFnGxiNMS",
  "key1": "2D7zp6HJNdh7nXfUeubZcTicVh4qUR6bSg3mBQaiZkFRMxcNVEnWE71jJJqBTSmr5EWDc6R2La99Z6DButve531t",
  "key2": "5JwAFMDA6mdXfohRjYC854sTE4rBetqmX6JQaZtJVpkWUNCYttMfawYgCnvawCRD2dLyLPuHBDqYmwieErw5Cr6u",
  "key3": "uD3ha6eqBxBbT8cjmGX1VxamwHaCoYvm7HgE3JkR2aEZHSg2qDTsLvJytT53hE6Y4fYe3HidK9KKvyv34oN64vU",
  "key4": "2FxZFRcYbMod6gWgFqgBTReiHof2y25nJq2y7HFaoCgrUzEhjseiG6it9choPLBYnL6x8ioNKYJzQWJKVNnzjFmx",
  "key5": "4pnUfvVVJg2ZNh7rZPZreuvAgxCCWpDxVUQSSTHDGuknXRXHFYEWgmt7fraKEFxjCKEE6uR4Cv5NdBH9jQsgYQzK",
  "key6": "4XpKwfNJjjwC7Myi1vfmpku3ASkSEJtLjjhvhdU3ED38uV7ScKDFPk5sc1GWyRuAeoG2NZAkxgtaBysWEuEH9esC",
  "key7": "212M8japvGe9gT4ifZw9zyt4habogoEERQfG1mEgrSNJqsuptRAbstmZVvmwpGTkKp5aUFNvv5D9568cAyv9HqK9",
  "key8": "pnfApACUpE9KtY37eZB1H4tNDLVk2FXT99yjL2i9SJThPehCyyVymaVxg53bdT4BZu71cUf7SBTvLPaasTSLAqY",
  "key9": "5xJT3tkPqR22LZoz2rzcUSiJHfHRpvUbqGwLyL8nK3miS3g5F2So8yuJjH4xDjfgDihizqCxEyrd2SgrkzX77No9",
  "key10": "4mFwmR3TmBAtQBf58d9fbRNRj5KuEzxVZX3VpUKb66Ep9iqXzPmuqgDPEJb9aji4vpe537P1dCifmCepuAzW2dH2",
  "key11": "5g1qGBjgBXBcE9bQpH7Qjg2tvToDd3cUtrK6qabZKDTYx5GBs2T9GeQtUwDuuM2W2noNSBC7idevq6g97KVKytSC",
  "key12": "5PgP82bVbVhBMCh27kwY6uFGRFSZePJcKdJ6553uZ3zokFYPdmKKZhwhTc5jR4CPxgArjJcw35rJ5ZEuBAXAMVx6",
  "key13": "41GttiLLRJPmzYC5pBJkvLd6SrZgZzP2U9btkcmhdgmVb7gHxY6wFcnuz3toZriw5nGWfSrYb5jCXjYqFpg3ge1c",
  "key14": "Dn7ioPFGjAqqwPNKWEz8ZNEFojrJeu6CWSxk4rNY97dZNJfxvY3hSg3w9b7noUj1kDcYdm2rvdxejpKmESBmF8v",
  "key15": "4VgEJ6WVPG9rh52vZR7ZzFL12YsrWtXg1pxpWk2RrLYHPKBwbQrHfZgw77kKcxS5rqGBFKsiEZQDfbN95N7NPG2h",
  "key16": "2VWrtwTu3xZuzKfUYVEwgEF7hEUXEwMk92Qerc7bkGRdd2CK5iRJqi1HwLiaVd6robzJLZa5A6mH6enRj4k7RR3k",
  "key17": "2PLbYHRBpgM161yyrZ1CVDorvYzkk3QDwNTfi4hWeC2FDs7ezePe96DXTSezkNkHM8NCCXVgLaVZRbPBb2d4Th2M",
  "key18": "25TnzqXVwrwC3evHdCE5SZTW7121RpnZrqH7YW1SFnQPMtKEsaKLcHU2RoUBLKuYJTJrKmSAxJjXZ5ScE2GUZKbj",
  "key19": "66cU4dZeKyaNqBL7Lu8bSvy1tsuhkZZVwoh8ZXAJLqqCPJxEPtaWRpp2J7jY8LtZQH5N3YZjS6jgAKdk9gbu9U8Q",
  "key20": "2LfDKXg6nLy7wRDNM7GSQryB3LzjtxfzZc8ozu7aqtzXdBgPu4TQT3AJsJXyEaY8Yc1hb31raEqaeokytV6CuQN7",
  "key21": "3bnKDJCH8PNHReD5soQsirkem8enYXRxT9TQbauLbALXLvkVaAdzjpv2CVQiitWTkDtwgKSX9MTwuXnypuFBnVHU",
  "key22": "SG35mLt6rePxmcui58fhuEgvMso6Re33KJLUELD2KErZEvp87v9ECAnKVWV5viNUp1y1KkTrQYRXEoup7Dz4Zda",
  "key23": "3hBk3ACDUhqfwm7qQBSkGAffiReL6fya3vzdaU78tpvUsuM9812M1qwk3Mp8BhL3zJufk2QMEibQJ6eL8rdYfLmd",
  "key24": "5fZdMoXWiyy3soMhbEreeUjDYKKyi5mMp56DbJNyGx8mGQWYdPKuukPJEMwyspraVsjdpxNDgQYuThi7om8Cmexz",
  "key25": "33gcFV8bkEcbCtSa8ZLEoXcpuhh44f9nU8AMvGZhyHpUG6cywBY1m5p1aGn13ose8PPHFTdj23jyW1FGbWodhvfD",
  "key26": "4L794BqGLgKbN6D97e2zRsabTW4szMViYuxxzyQhhSi14X66VjLF4aZZSqRC2yVgk2rY6uGvnk397ejsgt84hE9b",
  "key27": "486WmqCUv6bmosPHnDevZVe79ihXdDNGfoMQwjs47D5Wdh1Xe7AKESL7amdXYzLBz62MUjPV9HKNisWKQj8Mvai7",
  "key28": "2edtZ7JBNtcyaqRK733a7vZ1qhmpTEnpZNigmhY46qWkXxnFAJM6Pfed8dRCx8bmbiGTHozqKrCE8juNZUyLvjgX",
  "key29": "YT4f1T2wJxcoQcMYgdnUa1TB8D8sLtiftE9khER5bRMbU41oEge9X6ahrmLSYD8ny4wghnAwisbjjux6qz9LRhA"
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
