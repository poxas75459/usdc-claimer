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
    "Uhmp3AYjUp3CtDBsquDDvbhExhmBDAwUkrv7yE8dMZS2a3aNJgQWBkdpUG57sSZQigDms9DFch278y737JAszaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "125LoLqQ5fuJLj1Vgb2MBsnhihi3u1S5e29GwUU6Z6y3DFgoqdrrppDfzPNSJjmpZPuQDozbGQEmKNvmWXcUKkzs",
  "key1": "53VsbgcPHJDn9G1yMXSathsVuzsWWhyJJ2niJxKkh2iWg9Nf2tgCqcYpRNvXQmR56eGmBPzxEbzqRxuNRSmvtFWn",
  "key2": "SAyC5DRU5PNRmGZtNQ8NhnhLczDw7GBH5oVSDwYCJ2RHUgh3xhyzi9iUze1m6f1aBVUB3kHzYxcwkwWk9w6UX9f",
  "key3": "5oUXXCP9rVYuLHHUX5N1Qof1CrDb5XY8cEXZ7aJa6iv1bJHLAJ8XWaTrqxXFcxN7CCfuGqDpsgU7haHV1uHmAiyr",
  "key4": "3ftTNkhiGLjX626aSH9SeJLFSdhFksHLpdCF42zsE7d1TvnJCKTgejqdLdBVk8obRY9zUrxDEiz2aSau87KfSv6W",
  "key5": "2ReBaq5eUejgxxg9Ng4Ph7BibcJi2TDy8Uypq4m5jxBjLptwYouxhtEpPo9nW979oV5HwodrmfuqYnJsJXaePhDF",
  "key6": "2VsGRNAk8prBAQNBXrsEQWzVgSVbMqcTK7S8PHvjiNaDPVgZYoNW1b1125qQs9JgjcetRurJdhAA1jCmaNVvc5W6",
  "key7": "5qfs4tKdLhJsvw6eSQUWXaoAFYfFtdyqK7GHLEKgis3aWnzRGb52sUxsdkXgvXUa4yWgx4KpnT6sqnRxX1dU4ztu",
  "key8": "4cyZFY2z6HiiwSwALs3XjfmzoMS4Wn5MyRJSZPY9mre3hV9j1eiJKezznkg5Bg2CSsSQ428Eq2KWf9RzpyRXov84",
  "key9": "4f9An66zLzhd53i47avDMW1xdpG1ZHDHqGqDLnkdgHu3BTpdvwD9sb2EqSeL1PHN5ExQui55XbneTSbAHVm6kzMG",
  "key10": "2FVr31qgof49E9ywyGYU8Vyc77goH21v3adBVcJ8nCPZmf3M99jYdQQAnX7ZxqQiPgMSGSXyp8eupGhD2y1VBztW",
  "key11": "4hvCv8R3HcHCeW8c2ERr62eAHvNvs437V7rV1nASYucTJsyWwhDKJppY6ipMFRcZ1dLcAL3R9AzqGNYgGLjA9HJN",
  "key12": "5aW7Ldv7oh3gaaX3upEYpq9aWTZNkRJP98KhgFSjVRsS7ySvQxHsXK6DFbNJcEAqbWg95K1nMKvSK4r81PkrqCjv",
  "key13": "pXpNmWNnRx7knqoL1MGE4r1s361NnenyfJdmWXsUZxdr87w9ug4vvQ4Xw2Z387p175qQkM3HHGHvF2MpGKMQboa",
  "key14": "YJM9P6fMTTqHRJodCArhefsrB9K8vMWnkJMZUGKmUTbZEeGTK5iK3846gZPAE2AH1eVnQKFDGojGXJ97BK3tUqW",
  "key15": "2ndvpEJLkZt9xLqd6uWomxT7cvBJ2bYWGiwbUpb2prNJWNJWTFdHV9q7KEmHKihCpxJp2q5WGsGbZY7ANjmonxU8",
  "key16": "4jPoeCqpxoWnv43Yr4v1pnRdJkjQvAbZYVJmab18fthbnB1ToTLj3BsBRJus5ttEGmr7eFf5ZHNTrLPM6SKXpR5x",
  "key17": "KR7UGE3vVUHtD9jDas5bnzcSfRnh8Bv7f4ff43tw4v1efQyAhHr6c8Xk52cqg6VUDYuYfmArM4gKnnTqr1dtSob",
  "key18": "2UpG6H9uRZW1mDrSVspfhJxr3vjVkCQkC5wov65gPJvSvg9rw8gZhnQvtuVFfzWEcexnaCuHjHrbscgfWsMyuBre",
  "key19": "Md9KAdaUpNFMcfX3D3vuqbsaRQzRrZSE6YBKfy8QtYcmNnr89RiPipYVU1WcesPLA5W6XzcLRNUByo1VYMzVCSH",
  "key20": "5zDFynHcMRBMWqona54yF5oYKE8JDNBKH4eVJhF3hv7wnFXJs3v6B9GuHF22iumRam8j4GCZh7PN52MRqLuHWibG",
  "key21": "3VFsqKfwZrKsiK1G7NEPGkp8xSQ94QVws1hFLjMgecFNReGRVb8bCySYeH8vkVteciCqNVBpa7xhNSntpfM3CWGM",
  "key22": "DyCVi6YwsDRc6tGcdvnXJgWQLpCzRKiBauAcfwornwDqF4nwKjuGetUutAduNHf6QyDTMxbV8yJohYsQMGtyy73",
  "key23": "47CgavQkDzGZ81FZrgyPUihrUsAH7WvntAjK55MrmMLqN2rqwQ6WwWqUN8EbHWQeE7en4Yq1kukCP2wfK5hfv68c",
  "key24": "5oS2a9c9g8A3qWxSdgXH6pmjDPE5BkCi67P2sgSEpmuCF4nU8KX4V7CD78aybLfqzWJZ5uimF1kgNtfAVp9xgr1t",
  "key25": "2cRotoVmXoP3ZAMMzGqv9LcNZakB9GYhHNA9swWYXJG5kpSNQKVfcy26hsFx7P9gDPpHAUAU3RKo1PLAbuduvxz7",
  "key26": "5dKeDBVpYPyujwCKeX7YQP6ExdhKWRyETEYWvR2GroepBcgVRMoxf5niWouHm8pgpivmzx1MdcYD9m34xsVJEox9",
  "key27": "5ey7Cx8P9Y865h63fpkXEZQArPd1YBAJKDjFgL93KVZ7zMmaNE98sBjXMZNTe5iTirGGGWQcrSrDVqQrDG6vSXnK",
  "key28": "5MoJNjeXPgw7kvYGmk8JJiUHHF2avA8Nhb1Cqe8A8fWsPD9WnTnAucibygcqUoYWJRemZmDnxMsD3ffgwpDAg43m",
  "key29": "5bXxzoVanchffBDZQK8aFVBhLPCFsS9J1yS9Pi7yna3sWGyAHWtPDVHfURwvQHFzywdZyr5fTvDy1Z6uY9wBi8uq",
  "key30": "3SR7jbF9Z292BzMYWiMw3F4t3wJ3J3PdXhNJ7ihmepz4ugpALdGKauQFt4syTAMsZuTwzHHK28f4BYsNyd1xtPyZ",
  "key31": "4BuDgmXsncCYeyMaFSJAKgf9STvnBciLRvcdKUrQBsYJ472Dmufjp11Vn5AfigFoJpkww5PQ6Wsaj93A6aBPKNCK",
  "key32": "3rW5VfW9hVuVJTFxX7ZxN7ThJDcWyGeWH4QNQ6M3u8ZFfmybGDSszcoKc64WkovUAJBrvCDt4Gsu7scSAgRh3qqn",
  "key33": "5PmL2MdNVtm3Rxx8nKncWnchQWeaXMCzqtK4SXik6bPmSQKdBsBrbnAj4dPYnuHkPTeB8rP6WRXgpa5W8TpoYF5R",
  "key34": "2aomC3CCAuFBWy61fF3fE9SY24HeDbEjKcts9qsLcRcfe78oW91j4VYf4TcDppeB9zJ5ZyQM8su3vfQj8HR3BuDR",
  "key35": "4GbQJatTXP8DBogK8vmJsGTE4SZHwAS776it6sczMkBByWLuDahPvQgs8iRZVXXDUzifoNscj2p9LRqREJGq4Djc"
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
