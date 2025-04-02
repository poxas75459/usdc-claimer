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
    "4go18yLBkHa8Qdz2ZircSZkd62EeNEgUv4AYy2C5kJCaDNLN5mk2nfuAmzgdPSEqW3ngyVRuanHJDmXTXpiBYAJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iKdbcp4FwEndf6mF6dZudniLnUBmGySQWFzJyWPjNEK68QetubPpBpTHA8j1EASKz4DZY6bgRe1Si8UmM4n3yJe",
  "key1": "ZLgLRXMxNrHg2pX9CqJTsxzNoZUvdcAvW8eG7QxgaeAUsdz5dgTJDUBFRr4mxTBs7LnWHy3qq2t8Nb9atRWFnvF",
  "key2": "22izWFcCQ2Dw7qXvy6eZbX3YeTTBirneyRE1fPvyR7UYtQfJBVwkMdDTo8reaCo8mTCgiiMhLkKQnZMB2GopUYpQ",
  "key3": "6woQzygrt9XH1xkV7eEX9fxmdKaa4BC4Jro34SCRwmiaDzzKCvmFQ28czZwC8WbJS1f6HSPdquvASqUufeKKPLU",
  "key4": "hmb9nf8r51eYQVkLTD7X1cGa9QhzSqdzTnYH2E8j2AcG2P3qFn2L6P6DxBmNE2APYK1tCSVvaZ5QnKz122TfbL5",
  "key5": "3NDnzzz7GgWy5RyZcqFpEjfj8zSuQfSobBotqiejVe9pNiysD7gWM6W3iALXtTUfpwd3enQF1Q1wqyVxg1bdM9Dn",
  "key6": "3pLVcwqNXUsyZGniaJyv38NM562G8kLNPrMD4CCMLqgYnS9ZJ9jnD4QzTgyeRXacTEx8WZmUxomk146ARFdQL9Xi",
  "key7": "4QcYTfjcaQLLE1AwxkFd1NNjdJ4sTC9w64QLWi8KjCBATdY1FnjvtRfnWceRcw4gzoVMfcEHJHWCdwbspYtFEaYb",
  "key8": "3qsNiMXwQLSkCtrPBrH1kDQUWqXu9Wx7x1Nqmt6K8CfWn2zRpqZSFWYbMxUiEW8y1MFmam69ueMDTULephouLhvv",
  "key9": "5KnT2cTWyccakxr4xdQeLJwTdnvqaKTe5fx4kmJA586kAMf26wxbq9ydJAKWZkC8wpPFLhEJ8AqyJgLB2eFU77WL",
  "key10": "3oAUkifWwvEAqWorX549M1rAmJfxuLCmY3u62JuLymxoDd9uZagFmmLKvomvX1LaQEsuMkW6nL7H5G3JQbG192u",
  "key11": "5oKJ9XrgheDXNFVqPmvnTYgi2WrHWn8hKFXbGSExKt6EE1jjQvJVEe92qZH6s6PVZaMqS8SL7KTLxZG3TMgsk9tk",
  "key12": "2ni5wwimwZXsDQQHPfCFcCGKF8UgtEdNDsHVTwBc5Vb1ehzWwbXqQCzsUAMJeLv9QQc45bFPV7rYQcxzNrt6rJL",
  "key13": "5zue1SjyuFqg2VE2cEhmswLLseaG6g6sdtct4bSYBbnDY7sC5dJb8oRgZcLQAo1ztKmXEMRmEJ3DFzHM77rR6B2g",
  "key14": "zB8Rf96SiS8QLS1EXPKfePVbCYwWcrGaWXncKDLnL3dR5zTQHMhKgmZuPrwWqsLm9EpV82rPDxLzkLcAXSJCxQ2",
  "key15": "euH66D1ZHM7s4MdSH5c37ck72SZ4BU52unMTRYVkBaseWhmSDUENFBUrP3N5ZdA2VGeUecjgC85dGdTWpuMY35j",
  "key16": "58MWkPAAwC1Un1hGX34vDwLkE4K3T3BKk5tC29aFY1qYPFLFHGjm6iUCNjwZhhNwwrLDNBsPh4oVAJkdchVa2KdQ",
  "key17": "5encjhQ12N7MpAX2KarXGvYXQvMhQf1UdhJz3XmBmeb58UV6L951bGjsBaYot8pobs4hRJ36k9bW6NtG2gvhTW6Q",
  "key18": "4dVuKvQLYmU6i3YegSEjgPyB6ujt6FEKk5pZEmoywayWXfD1rM2BSBh7EpCE2fCARKXGz3PEz6Rf5BFzkFTyxRTF",
  "key19": "2aBUYdbTvkNwWvXxRZ2R5ZtHKcdBDhSybauuL1wN7QrB1pb4eSZkaUDyJVgitjT2i63U3d7PtQxBWTDTxFTn8vWt",
  "key20": "2ijGc6Gk85Hovuf3sXaqV8zjx9nUqmcdot2fzVCsBR25fzCpQk8XZYVdqV9Q2yiqZfoCKzWXRTm3N5N45YggncPx",
  "key21": "32v5Mct1cUvgSE2m5PeYNxmv87XoQLLDxG9SwJUwQtENUmP5a2Ezj6k57tM3T9pTjmJPqwktSKmRfj1oFu3KFC9H",
  "key22": "5x72qyEz9gTBLJetpTVQ54df4FuVsLfrNmjt6JdHvoeVKx22UjLfJvic9oiAcyd3koquyCi7MBgBF26YLtv44zyQ",
  "key23": "2vanfm2uZykwaLaJgthcdHk2tEu4zi5QkPYBaE11WPBb7CqJideuT4YUVXc6a8WrFr91FTS7A3TPMftfFLPRLp4G",
  "key24": "5GsZppDbjxbTpzw5tGfLgEvJKxvXzG3e5MSSwcck3DgELPCgQSuk8FiTaaYgZ2UfwDinqVexxnkMDLxbvrGAJnxW",
  "key25": "28GkpBUgdhEevCeww4G3CZe2HNxdp7Lim5WXQ8kG3teaxwb6qdsxnh41TpNyMCH9gKozqCyeRAqtL212EYf4Gr8D",
  "key26": "38988nzqcyzQTYQTPVexLv2s6qPVzdkRMGJ1WQmcyJFxaYMzgAqB3dzDxGecwyx7MzG8vC77qNNSDNBiTcJkFMGJ",
  "key27": "2FbCrm9X9YYjyupLQYousmnr4g7LthqhFjPR9uhzmWbr3bYe51vRhRuq5wJaWkXd6YPj2LJcAhFAqZ8tVTLYC1FG",
  "key28": "5Vxdt4pLdo3LycuoMbSVmauysFPXk3zPprQdWfdF5hDn9Ae8w3n6iCeMWbeaCrQrnZiyL4GxEu8E2peB39A3zVzC",
  "key29": "CKAZh88CuaWWVupbr6sVAvmVwbu1Up5VQFcdRMYBytD9jgYgkaxxDCpG15efKzF7EJs1MDEE4TLNkBmivioaVuE",
  "key30": "5WXY1764VcRu1JjH3b6nkNrzmSr8nuPs6r9uu4TGDUn5cmBt8Esm4295P5mMTLqoGqNL15cZwoXhJCBRnixJS6cV",
  "key31": "62EPUuHGyWMDTpvhtuKCf2wwFqwcgydQh5vAkmiewBjghMPD5xy1X5iSri6HRpsb2VucJCvoSdPoMFmvyobG4trd",
  "key32": "dfbszfRxbMLg9SCstoJ9kY3d3GeDBiuNd6bcoBMGK9riJ55WcXruFUMR1gnTN8BvEFtse6EnMV4uNgroXPzaPmr",
  "key33": "4KLryiXZhBDqMyS4giN9MDdeyLgxrvTvMKPjVfSwZbJNRH7wBkBaHfPsEBCyEoxUH7523M8eXtbeTyTQ6Xe6UShA",
  "key34": "2iauEXuC8P6PMdubgcGYGKeJPWhAqJzmHGnh9s8jpMTZ1qrAYTHWQhZbq9hANKC37w4hqzWTLELpUyp4nPKTexA8",
  "key35": "325Cgsq4X3fY5et2TVAEdVGdHpCzhrNEZdTp5vo5QZ7C4gV8t7bzYncuUTrDyn7rbMYSUSPRt78VEY5Gz8X25daN",
  "key36": "7v6roeVmgf3gzUBUpZkgXggDiwrThCTu5iKqP1X9qPY1enmFde8kLgVpEFd4ugKhcsvbyAFJ9gq8iuY14fmaLSc",
  "key37": "4ZyN4huU8N8o3cRG36qyWtTdMmWWwPAE9aeNS9ZzLJP57RWwLPLmG96PxT5zkNqmHggzWZD7r1KBzVgZohCfvP4k",
  "key38": "bG9GRLqoxhq6RprG296Gi4aNZAnG28FfbnguXLor6XfAW6jddsz1LsFkqVxNv4hAyCoD4hHJbUrfP3Ydd86mFr5",
  "key39": "2bWiLEdego3pVKpXEGvLkHGk8b7DPC61UvTMFx4ssbnpZn4US8XEuCZ5s83GsZh33Y1uD9BUHrhQ9UHem8aSTdVv",
  "key40": "4zrC658huY2HdqSDGCdkztBJhimhVbu53qTDUMrh54PJVkhoJ7wuT1QC6ZLDDNQk3i5FccxpLkGHyFqhbTjUd6Eh",
  "key41": "AhRSRBA2s46oMvuSCR8fYEiG7A759Mf8zKBjUfVVxnQRVuA1w4sPc9g6v1eR334u5HBTFeAhj1x2dz4vuKHxhQ8",
  "key42": "FE4BhPbTJmgzxcK33SDwTigPq5ea9G7PZvxJGM5W5esffGtW3HCKwr9q82UMKTtBKMopMBxPXY7QNrGxG8QpKin",
  "key43": "4ixde1uPR5VkjPemfNxkyJdQ59Zs5yaznz8yLYuYgCMy9Pj7asBRfjaFvnLpgXYLzDbD6obM89dZ76yKziEtvk8V",
  "key44": "3onRSgXarP5EbmYUyHu2J8hMNc67hy2Bs5pUFseuj1RBRMdXEdHFQoQiTPXLrndxdKWY6GtGRwKMdKLwFqHBJyHW",
  "key45": "3egsNRzLKfhQaN3xqDkLqwnowBfFizugthr9SwAkoZjANWEaCdTST5ZpJtbho6L8SP54XJJgRzozwvKvwutsFpHF",
  "key46": "4rEqJACrrEjo4j997HapMxRvzJBML7KdfS2ESQAHq833LbFQuGm4d192Kj12essJZSCn6x1Rt8RGhWprEbLcPm5S",
  "key47": "5F7EoRwnARQe3gBJkwb1V4ZTskDPdtqk7shbo7qQBLLUMeC2WbUcrtiMMMJEGzaQqbbpC19g1bpZZr17VyLNkCC6",
  "key48": "sdoPm3S3KmdCnunm82DQpGgKHAj5VsrZPL8LCcgxazvzkAPMcABEp1mCiZAS9ijP9pL84ngTyHuvTdRGWcq8Wu7",
  "key49": "58sbMVsifJUeycjF3SSLkWaXNA34Y36C1HqqvViwn1iRcGWg6CJdJ6daHsTSinJzn2tJRKzYDhGBWm8hpuy3iV5Z"
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
