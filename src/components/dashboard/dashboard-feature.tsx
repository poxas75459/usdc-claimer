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
    "4KhRaf3bDvGANRoxfMmxg3kGdeTpz8xGCzZuHPry384BMG1gaESu5Cg7dCGAjAcVbPHP7UbgcWuBCdTS9x93FAJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DRpr6Yb1jc87L48SftQbGwdg4t4WkpJtAcSL148vVA3gW23qruQCnkPEi2F4TvZ7rLWSAXyrKp6REnrqbnsS1Gv",
  "key1": "3R9i91xJULbJs33fdVdFXg6QYJStxPSXAHTqBmqhqLDZHPYxUf4JmdmkTFHrVuhYWkGoc54WkoFDBDnyNwrA1cf3",
  "key2": "3jKDcrgvS1D5fqAYtKtuWi39GYGY3hU8YkpToWgF8vU2QyzZvwY1fRpSfZVFCYvCLvLHbWMB1zzZsc6PZCTqJF9f",
  "key3": "4qyisjTLd4v4ykRJGEbRSi9QLM9xL8WyspfXnyMRQhMJbQvfj3PSvmarcDj8kSz9WdtgbxZe1RhdTj3iPMtWePav",
  "key4": "22fuZAxMUQytrYHnzdahWVmdcZFhdoqD68q5YegeWaAyJ5Py6PSMySxqRUXVGtsHopdx9HgBe9bh9jP4j6mzd8H4",
  "key5": "4e4HyZ1ydCU7YAbMMR9XNVyPjTfFCTCWgAx1xoKLYaQdFNHqCPWJM1F1VBZd2A8pcFGuqdRGE4quxth9sbcKThpZ",
  "key6": "3okb5gLxAjqzsVB94wXXPcDaEpGWVcJfz7vtfsD4s9xeUVJXPTC2XEAMUWYVLEmmYBWy4pwkwqudgiXBcF26vX7q",
  "key7": "3kP1D8QWwyXA9248G9kXPLWSAYtVaUCdBMfa3pyYHzCr9UdSSVAEXJAcypKwSk9UicfwDHyND7n9d6tEA6sDH2Um",
  "key8": "4ATPSQA5g6s2cUDYQoQj5fMhErFYEyneurLikwEQihRYc65fArEeLxeEmwq8CSfWaSdnFhRZH32GwjjQR6Fu9f4u",
  "key9": "Rz3Pq6GDaAbq7H3rvgz18hEEDhkQ2h6YLQYfkNxuKMU3gLJaSf6XTwUFsePiBYf9r4FG1qUn4gADJro9iJ5iB78",
  "key10": "ZBVgwzhrS1Y1EqjbLEcgypVuZacUp7VZs77oPDNTdrH4ZhVjnArW9izKjMRPtYT4viyapaxVf6zd8qLWjBqUHmi",
  "key11": "5mBaVjK2PU6R6TDVmzfuezH1L43xacubS7WEioiWtuU2nqG24n5jqBTDioT1KYDAswYWKfyU9JWkYj9EagzXYE15",
  "key12": "4RXBRYspULoUiZHMHUMdJMTfmPEeXAWkL1gjdA4Pnf5VwDa2nKvTzcJJk3gDLBFSSSVZQJDKbFaijdL5kryjvXk1",
  "key13": "5UoAFadUCascbLsyD95muk8NFvCzjasiU2fWqrZb1KYVinD58rH3ng4JWKTkQzpJvsq7dXVhi2Fr13cqE3wKfrMn",
  "key14": "369DxJteDop3Wq4JxVfWdC8mAPZEWJDsz7QuFZrzBscN8Ks7TLCDPXRekxBd9zkW3m3iuRhP4xK6Q8Pg5LUx8yAF",
  "key15": "5Dt3p7Mm9mtqpxV9dUhZdMEUHXxjkrsx2diEwZthNYHWjk9XtdwfZzFPViEyMTqZwJfY1Vyc6DYU4q3XXu81Kgft",
  "key16": "5GY8b12RCsqthhZLweTV9id7tm8m7kdGjbrudyKE4M5Ho9m8yfmCuhrDSAXVwnrLTEBgr99QBeLipGsYYeiXBJHp",
  "key17": "qwoGKGx9H3n4R3jVUUrpdawT9kE3rYr9uru3Bpp6A4doDMrHvaNqBpbqxz5GsQvwnWdmwuiubxUXi6RKZ42Jk4K",
  "key18": "8Y5SybPDk8eXnCHnTSv96KDvJUhQfQGPNEJxW4auc8T27Y9pJiR5pgPkot5KVqpx2A5wsBHiit3oTu2xkcTjVyE",
  "key19": "5xuJHvQPNN437RMyZt8D9P9wBxwYZExzFvJBLTg3k83vLDhyCkzRyNSCVheYXbrvkxSMDK3cQ61Jyni3Ny2DUDo5",
  "key20": "39Dj6NSvsnCWt94e7yUyndfvib646X3qhMDHnRcRJakNBnht5p6mVnZsdCkFwJTRPeNCgYGJxwo91paanJvoQGAE",
  "key21": "vdXddAR82zUN26dsspV6Uzi4N4TwMUvCfqFWuficKev9dqTKH3WCtJZkv7246byERLGb1DG7CJjPa2PktygS86y",
  "key22": "3gn6f9eQ8bbFmY82h57fFzpT57mc83xJt98Hj8URPUM4aUmP7ppyf19BSsS5n66x6mRMTXG5xuxTGVvk6QG78C6A",
  "key23": "4GEbGFZ5ztGPfGSoqjcgkzUnZ8tizBBRhT3y6v6sTrnZfSic2dJCGhpoUYiEGT6UhW4cQm2hPpaKKc73tNv5ayF2",
  "key24": "DNeRC6M1UDZUwxBNvHhDcocUKfFCYKBpxzyfFPskH9ujYbSzNe5ZtcdhJVghrkh4k5ZZHy2pWWcMvFLzocWm7L2",
  "key25": "5dvDe4oDvxCsHezCga3xEaRAbGfa31Qu2LoC6JjG3ySLMA8xghLzBHkccJ8S2MSGPmPUkCHaKe6kg1rvCxBzjphG",
  "key26": "53VbB9gsZH4YEfMRSkdW9QKcq5BFijSi3TokoKK8f1AR8x4pefc76EUZgjsSaCdatcKfH6ke5T4PVtN2UvBHyDgV",
  "key27": "3MDiF8KCT7jNgz5rWxrz8s3AJvd5RDhPMyu3MXanYkNqWZ8xzU8A9C3AxX5LRYFbN1BZijYhJTBfPZF6QW7oEjX6",
  "key28": "59A3CfWGcz3gNp6NnzTv9EePtXBzodrvwsAStkFdiyYXJsqiwNjhKw9kbevy24nprGoWFAcsEKNiaFjq3yoVE63K",
  "key29": "pugeRsN6ZJo7EvFDXc7m7E6y6USK5pgfFiFxe1eeJJP19wYQ25xNJEpqhgSyqJdsSApp6KkR9fnLvz1RC9x1Vks",
  "key30": "5HBL6mDVgQPmqQFEj11yQ7wW5n1gYn5dCFHbJZ2NhmnpAwPf6vHXwxJvHJPoKxZr438GQRnddvrdgWMwoLM8Zcv6",
  "key31": "5U8Cuh2ZeG6LzKK7THzEiNYXn8GC95tkhWkVMGsrEXJgWBwT7foUKeX91eYx15sxNxqdXCMCxrSDchasqXHdiCgJ",
  "key32": "2CH4uHnz8hLrtYo3r1qxgN7msGeCGyCJ9vRUf3e9z9cAVmKY4v6XBb8iKDV6cB43EJvrMa2euZefzrajMcmSCBqr",
  "key33": "2tCTFDaVNrT1xQv47S26iddFuznyUcmtjfhteyMSrYmHLEUhM83oJNanRFCVLkVx48vtmfKM1NRoCdLiTQz7NjG7",
  "key34": "4dXHYJzLixfL7E5cSq3YEpGn9hByBk8PYZYKmEBDfPbQCVznVTSWSZ2pxrLWbvnAFaGzVCiWZbTFTXMswPxUxbhT",
  "key35": "4Zzox4H7gK9kKN5Ucihd8h6fDhTQtbwLgwARjuCfNZdC6JMeeuAgFTCrJqsz2P4rJZYG7w5hnoarqCoWCcrYUR5L",
  "key36": "j3SAGehmH6G7AAJT8TiwNpvAjgUuJjnaW7JtHfiuj2MEpsWFM7pf6MXymhYiPwUz5hgsVzaa7r1a7Q4qJU3bnJu",
  "key37": "4oetLhZNtECKQohPypZANAGnqxoNiEHmj8K5UtURLMZAbGTNhD4AKmsCQbNFUMQwDG7ciNB8C8DUobQQB21w8wdi",
  "key38": "4ofoTmyPTqPCEBYiWGzgYbiKB3WT7eYY3jULRmPwoLJJv8rZ5T8Dxxvcf9DGrb8K4Gu2hNvbjwW7VYQ49aNjphLQ"
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
