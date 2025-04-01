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
    "5eAA3hTH266VNLHnvPRFrkEL96qUn5cd5PmNnCKLUfzd6QUHzmEFo2qDEkRvhMxhgGLP9uAcMTSHRVJsoLh4X9TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gw3yVXF5dS5iYHgAT11ct4aENkAuuoi5iWbNXkAaGJ42fy9t9LLhbQ98zP1xZi89UtrbHtzUcrTtgFbNKP7JLvv",
  "key1": "3E3DvE9ZC242EMyjheCxcKPhDNkF9H3ZjCtei1X3WXbx8tdwxVvUXJojmX9rzqVLxWBnGW65yr6piBoEGddiQx73",
  "key2": "4PWTCqqy8t4mCoCfDtJ7cwhMio6Bg1qKNSGVUyDJQTaEvGrxVQEn9GS5jkpBw45iQgF1fHvdUvCYF4YWymPcoYGb",
  "key3": "3jH7TSijF7u7SzM1VL7x6W9YXSwNAmJNnP8PzkMidmMWGMG9eLBfSAPYBiM52JwRgmg9LUdBNCYBZ2omWEB434mF",
  "key4": "2qFe2oe3gM9JB51vKP4tyS9GceUmHzaTNvVQVxj6V6W2yAVwBEsVNFUgaCAGRpaHAofhD6B8MN1fUwGZzZixRjTr",
  "key5": "5nLSSvjtrnVmrKUtM4H2chHPFBFYpH1fKy6tDpXDLcZkxc81Qc2eV7LASScBs6KAqSJKH4zZeerYYi2o3XK6MyvW",
  "key6": "4cnLQaiecQPebRE9ufFHcuhCgJxERSeR1NNCq9J6rehwwbDg998sJnd1RSRynJBmmNwQSfgpzEsWdDbtQiLZUYYG",
  "key7": "36b6kKaDL7wWSAgWwzDMzZwD7z2S8XMQn2uPRPmKyQeJhSQcqEJBh17C8BLKMPRxexAcSzJRQHBMDRmQAXuubM6h",
  "key8": "2TG8rCB7LycWy3kk8yAzPhr8wFA8naHWVCKjXQuS7AY211h1D4opHARVsNQ8vQ56sWG7ak3KdJ7N6fKX2NT9rrhD",
  "key9": "3ZziPXmec7f1cvNYogqwMNuKh2GNbJcVjpzKcxiQD7qpWrFinNE9m3BLvgcHVahMXpqTVhnQiErdVfHJhtsgMjH1",
  "key10": "5axdyLrMNVtrdmJ7AMAa6oP6yHe8LkyrSu7S1HTAsDLss8ANtrT9bjveioZFi6ZVRbmm6tRAFL8faWdAN3TKe5o5",
  "key11": "5aR6WT72dHQP38fRPFsDi45UZgXumAwyTFdY4e4FzCsxL6qqoCU2TPKq82ZLJmsFNhctB5PizdkqixZPwsfsNEuQ",
  "key12": "3Nzn2E2NkH1VKugeZmNMuz4HTJMoSSE3yskviaJMXDEx9iyvVdLFSGkD3kSqvu3YMXz6JkN5RDtJCwD5X28hNWs1",
  "key13": "56HcV4tVSXuZrE7TmWAFZg5eYAKyTpYU2ad28QXdPan2AvHixxiw4TZKEszkSxcDv6HR2ZgEXEAXreaHUi6jf8bv",
  "key14": "25e8oQduytcNwcbgkz5963ze7rsJxnnAHtSom28QEq62WdhQoqRBrQGtsPSwg5zyRmgaWtchLbBM62tAhwSqiF7V",
  "key15": "55fviJpehLRSNKLviv2X5aDcqD12mEkXxmk1vGQHCBMM4zz9uj6EmT7uFboy7aGgzzRd1jQ8d5xeG48yXcKXNtFd",
  "key16": "24zM3WR8GwQeZudkKGBHM7MsQuFC59PLVEaTf78jKrJRbXjJwV3pzcpy7qMUH7uSZ9dicu37Gyaw2e8qPnS3EfY7",
  "key17": "2n3fLu2iosrMTvReCZ2e89iwjMk9Sh5f4Xoj4xvDDZjGdtwMTZ2tEoxm6xLBPgFmhedcvZexDx2dhBzwGN3exfjo",
  "key18": "29ZxHseVEBMYNzZSY5xajgxxzsiduQcgLa2CqM2maE9kDcgSmVHmULqAscg9bp9FXSQD3U5NT159tJQGwEMtJa8r",
  "key19": "43pXP3kpryVX6MiYqGXdvp5hGL5XJqNucicW1YmZzKvVkujiKqfcR6PZpK52NjKAivR1qohbRga2UUo3cZGj52Gr",
  "key20": "5XkE9FsUQ4jTjW9YGvncquAgLeNBBVbKGzGxdk4aFD5qnebRKcATDUhnK6djQrdyPiSMbEJtaCz5G3EbRp1Gh7pA",
  "key21": "63QwVWCNRLM5eemJFsm1Fzh48yGJZvtUPc1FJ14iAMEvEkfgn6QgKbS7R1rj9PRwn1BM7c2ZManwzVhsbM9WustK",
  "key22": "5Ri3w99woVQ9DmJxqSqV94BS7PfEpEWCTcy7LHnw6dP5Ryk85GHmTFQmcw8C5YvENC9uqoJ6JRGab37M2EW9HCzZ",
  "key23": "4eqhiGfRnW1NTij8whUBRVV7xBsJo4AZwymSGiJKCQgpxnWGLTdgyGv82kFN1UmrWe3p4XRkqZQn9M6AN2nXQ6Nt",
  "key24": "C5H157Gn9iuQVgo5ZZt6Cy4xJ6jpRp33z16xbgq2KVy7iWENWZxVVQQnWtVVqTtWTAmLJ6gmdLmGhBrhtyrz96a",
  "key25": "39fftgrYat5xRbTgGFj6UTAZudByxZCzNye3mKf6QeNw8JgLnxheQyMEFktYCSRGSpT3VFTFJrQFUtkM5DexLK6Z",
  "key26": "5CruiRBjm1FcNjeraBWR7YUBFtuRKWkGUiUpD8LU36a1wU7j5tbmHJnaMVUmYEzso2QHxPCxuBuMRSGjs5QBwKUa",
  "key27": "4NcPS6eQqpRcpLXRA7B5MhRyg49PkXtxGYWXbteHPL27jE8NtLskcoMLdecheVtW1dWBqRHg56Zpee5wqRXJqq8d",
  "key28": "2KjJ86eZfY1PDR9gjbWMAnCY8n9GLEnsaXMdQLXTZHfQZ9HngSsa9N1mJir9G59BF9tosE9ycVjjV1S51QuHfdUG",
  "key29": "472CqPag6Q7Ku1V8PceRuUJEwikiDwQq82pG8GLs5NkvG5LhBaj7yc55CtDxux9n6wk3e8YAeymS38gtDN4scp72",
  "key30": "2qAtX43YxTQ1Ur6w9G5rgWECNAmXBMzpbqqbTw2EuBL8D5umHvBQLK4qXvB661w28Mn3L4bzjETvngcwMnFgpuWD",
  "key31": "VRg7kJbRkBpY7REp7aLcAmyEPyAGttvBNcmCFYEupdoTs6JrfpYRGaLhUNkQW27purXf8uVjdgMSRBf8r1eBRUr",
  "key32": "3EjBvWfdxcWhMS17CWmhvLNwbuHkGTihN7srt8K8LiFPK91c7xizRYvQe7bnbEQWV3tu69FwyyzEFMvveq9zbmLj",
  "key33": "5dgSCwqaqYLTNkgJxyfdMw8o13yocbZUzCLTx9wDWb5RonCfiSEB9RpMDDai3Lr2zRbKa6ZJAu6qYoEci4GTVUVB",
  "key34": "55Kq8iL6J1ZhSdWR8TnkvSTMJs9A2TiNvKEhkUSyPo5kdMfcBKYHNt86q1csFhYhzUU2c2DS4yRKMEzpXXehmG3o",
  "key35": "kFeQ3zFEyE1QBfNu7AXQDLYcZQXCFw8C9u9RLzwVDAXjqTbfYoJRUGKoTVLb8DA3PXweHdT3DMceAUA3iwyBQve",
  "key36": "62MZV1N5a9c3qrHBrQyfPk7YEUXthvtNKQjnJ4RZPUUbgiU93D21Huq4XvgzFTDmCTJ9dhoiiCV4yojcqE8bRirY",
  "key37": "4Ht5dDMBcnuLHh79mtdLtTBSTibqjABn6NDnpPMvukvbSvdKJNyJGAo2h3J81NGm53rFBsMHzfuKrpgRFvkrj3n9",
  "key38": "4d1C2CqnfDUPJezeCK672QMLe2G8GDUEzW7pjsd4YyJ5DDbnGJsN6ax4gw2zQ4ygFmRw8QWB96hkCgZsEkMf1Hha"
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
