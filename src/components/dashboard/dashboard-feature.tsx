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
    "38QMGvvDxWJYFjVM7NTY5XsrreU93aNvvx8xscSZBAzAJNeMidgGcwUro6XPJKhNWa6U3Tn4BUZ9uXBc1vxPF9up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CRenfrueTdavgKM6rBSBPREn8s3Q1TpbjCH4Xe74Dv3oFhN2aBLngGHcnPWfzv1VAa7FmpdDrr7uNKe9yLqRVM",
  "key1": "5C457kdSRCxLVjUfCX4EGgrYP4W9FHjRtZsaMzkkUq4KwM1bzxDqcLAtspoWMGnjg1Q1BTCssoZTc279x1Xjbhhb",
  "key2": "4kJUfJvbpVDQ2sgkw4ANiQ5MNKAHZh57iRhnNZKGBHPS6VpVVB29j6oGCicUwYvMKuh227x59Vh4dbcnk96M1mDa",
  "key3": "Uak7vwKvWEfb8h9bhu86S6JDaR56Y9Rp6o2yTw5c5dy9X9AECKkBDWJovCtzWgt4zbiGFRGjaTFbTxDp7zeZ7Aj",
  "key4": "rAhbAF3fxAAU9TeLBmzv7aazFo7przR4TtadjTKq8oyeDyfstQLVjMaQtGrwmRSLmq2WEMRzsVFtLeam9TpWbrz",
  "key5": "2x2ahLfsXWhXVPY5sLKTRu4BCT851szd2yUQcumTFn42cKs3HbohGJT5zv2gjW7EfqYqktsHK5ozvYMUmg3GhTqk",
  "key6": "3ydyYZzpMyvUZGxua2LbKYB1CAvGqzeLCQVtCmVFjiyVrudaW7vgtBxsSAUS9n2vCFZjj4LLCwqW61ENTGg85Md4",
  "key7": "123F7UetnekZGYGVA1okEdHZ8hidzUTCcWqy4iQ663XTr8mN8EEWbcAkwuD9KX8LBok1KWMT634SGnGUPRudqSRt",
  "key8": "2iaMpRJy8yBTQUp8V3AvxxS9QRpcYiQwa3srE1ct41cBBZMHbkXC866xhTQRtEJAkCdp4q3NCU8WjUQ6kyXNgJmU",
  "key9": "5MSk9MEvc5JeXHaXLjrzZgQYXpsTP8ueaWj3Ak3Anbq67utqw4mVNmrCnzEBpdponG8pgCj4eFuiF5bm8JKWGKXc",
  "key10": "5gYnpWddT43MJ6Wz1Wuqn9TTdtJSkQKXhHm2cgawnxGvY958H1pW7gUEB2WCDsAHwZQZyQS1rTHXgsTNGL6TZsqg",
  "key11": "5fJQdvPbcyUxBfniwR4pC3y6mD28VN7EpSLq36EXMLpWC4M8ZKEH5TANwxhLSyZhjTBP79m3UapQz8AF4AgA9BfX",
  "key12": "2zqbPEHB61DiZcRb2rFipdL2pRv8C1yGuLHzpQbpnjRwNZCYC7NGAwkPXEW162Nk7kj1osqVJaeYc3787CpSfT1e",
  "key13": "gmP9PKQFkXSxjHiuo99EmDJjhcZCh1ztvG5DSkxpVoh9oNL9u4768hNEFMTb1f31PK1Qh9ajchpTwdQXpZcqypW",
  "key14": "5NRj6z9U7aaqZMiqbp5sTAR9UX923m6DF6VfJiF1reRnHGukxexL8FRRt5uVaWt18P4VaEVDb9Z1xSMSqXtJkFaF",
  "key15": "581vJhPJsL4aseroUeoGC3VPbXYH88aHfoLhRQC7huC57i5m1tgjsoqCwdu6s6fhr86sFFUvCTv8Zc9rGQHtrwtA",
  "key16": "T7JTDkNttBbvxyanNaME9jTS1UPHPWaXPUKb5e7DqYun9wAfg3sB23fkaeLS4Mc6FpKQxZgfWPJs4MYtWR6Xk7h",
  "key17": "4cJe87d8CKERqDvZfABgFWJ7MKkBoZKm22Q1bqqh7Cj1q2KyrHXt7BDE65GXrZYpBBWLBmSiGbEQB91FonahvEKv",
  "key18": "4mtzWfcetAPcVSzxv9KCQHKaebDTw92NntKwNS4qc8M8FqV4mZkM87MDCvm8ZwGMFdnrdVSwrFqXFdyNATbZeNDp",
  "key19": "2eHtSFSAqj2aHjRUBegm1QSc5PfLBkddFnR6qSHcmF7NK7QYYP6DEUqMoUp7f45D3aM3Xun9WNMVuc5xjPnEL7WX",
  "key20": "3QYyDhEUTP12aoUqEqC1szcqWcN8w4szMBaobRKpU18QHFye5v5ESzUYmB1genG5MzuByZEREubGexh8qFtYgBi7",
  "key21": "2PHMyYezqRnvJVrN6y6s6DGGUETMZDBxY7u35LSfiGXURXyuCAwpmZhvVvBeUFKZ5pqH2SRooJqTjWwxncoWiwkm",
  "key22": "2iR5sWYECUB3q4x3jTUdUpMXi6fFScH7btorKqNZifT2ji34q3tH9zVUZ8T3aqPWGcQYYMGp7FantHXk31PasmWM",
  "key23": "D3XR4zs6xLhC3tHLWn7sZv6userPw1u5bz7YAYRyA8oTsuvkD3eTTKrxT8ysoVTpmN4t2JY8VUHwK1dSgcP7TWp",
  "key24": "5yED3x3bUNTDCModiN3A9JUMYC497ULChM5W5juD3zPs8C8gZ4Hcudi6J63KUs3kGiEQBYELcpNW8r2DGdicHP9U",
  "key25": "5rxMTnH9Ljxp9C7vGukv22PaDFzGjuaQHnRqd8bKwfq6W2CMraonZR5FMq9RVrDE3tjbyoXFRjzxgafJ2tTQJnD3",
  "key26": "2CCQRcpHGN2ceRYxHKg9KuXUmY4L5VBfgy6bZyg7dGnLuYyc92MFKzRn9eGFc9gpv4Lq6wP9N1iTQZJcVrHFxdx5",
  "key27": "62g9REaiH8vS3EMrpTb3E8gHsiHQJbziMj7LYTpyuidpDL33EcVexTnhN5zEmL4krDJtLuC4Q7iiUruahsGGcxZ8",
  "key28": "29VjtLWUTDdhGTNNFCcaCQ3oDDxuDA4N9aqZ81BsSYtJUDMjw4Z9gDBQQrsWABdCVv5c7J1SvV54bLXchJstgzgV",
  "key29": "34hAjMNWYjKs7wwPVm8jMR2DN7haApicHJdEp5b6ccTF6G3LQgVjqPST8wwsdWww6gx65XAYRhkLQrq2wLtptr9j",
  "key30": "5RPR8d1pkmjVndMFTvDda8EBMTrN3c7fa8ZJzFno2gboLxEyAQNgVnxxJsaRwPziEi2M1Y9bJjTcuTW397cibvSF",
  "key31": "3TLEJCgB4WdACQhiFx2WpC4Ds1shKVprbv6RGfrKqDvWPzbyYNhjDJs1j5THrujqBf2CkfR795CDFipsq8x2spm5",
  "key32": "3XkwoSJRZyQpS1zeYBGNXJW8HDFLDpJV1GUhccCnRTtqeajWjubdS9yHq2EzNE6okmfMpfqckfZ6NQgWSCZu6DGT",
  "key33": "pQs6GGKJgEpzcDS2vWL4iZzr9p9b9zsfaTy4qocVFDMdnoWN9vcCFQRhD5ozFh4thAg982q1TVEyNziPr1zLiRq",
  "key34": "4cgCQPjL3FsEtStCUB86zZ1KfYq5udUjZMd9mtXry2fbdsmRr3Tt3zAFHPV5YXtAbLX2AMYuY7ANujtEcM6V4k4Y",
  "key35": "4YABd1xBp7jEw4HdHgH6dFMHyKzroC9sYdDHvVLTYU6ko9wGQD9tnvFdAUzSXreXRthrPmufiMFiMuS8jDCZFxp7",
  "key36": "22fAvb6Sxo7qR8xHXvr45NxknVFrksD2in4F8wd5cEHbxgR1MzVpxHr5bfeFDdCdDhGiSguhzhN9Vv9a6Rkmnvia",
  "key37": "52LrdnMxur6XawoFaEPpqSJLhwUPESTvpz9i4FTApHqZPFnwRPqo5PfEykzU5vWTcK2g3p9MppzEBsZufrJVfTVG",
  "key38": "3MEUq3i6cGeBFYQiUfzvaMLoohYXef4BJ8P4VhGD23BzhdWGntNBJ1o7G1LroXNCvpUzweSzAEDfoSM7jpFrfwWY"
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
