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
    "4UbZtfuSUmukYbg57JUeKPbAY9TLZPVCbNHwHfrSC7Ty4tnJYW96et9orPcicQtQn4j7NKe3XhoccpZJbUtG44TJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCkumy91FYtgPUoH7sFvYvAmq8QJTQiYgJ3ZhUdDdJyEKrnouHm6ejmw5RY8PJRM64SpkCTpvEWSYxi6DhMaNy9",
  "key1": "4kXPkfGSRA4KbQWkbHTgXUgTbfjKxYQXDC45CmyWjfCy8GrVLtFDVh7XTAZgD1EiWwHss3ZSsooQdXRybyfVTgFV",
  "key2": "5Qaf9wjzU5XKRMKBWjGeN4knCbhQfv8nVoiJcFD716oXgqs9Pr61R5zWxaPxuD5GtiP2JWzZvRG5oEmPVscTgpH6",
  "key3": "2rJAVS91BgyGgqgLXKUi9wDU4s3aCdjJgjyBDiM8KwQUCJE3HEFGyeeNzZKK8ChX6H1xvPyoWeqNbSHme5UGNexP",
  "key4": "3UiGkQy3UrusGrSBrx7ZvNAPQJahydNeLfBUvwJ9arGTEvwybMQxncm7XygFEueQCN1isTSderiNUXQwa6xjyjH",
  "key5": "4y8vKtbsqFMWV4yagdbG3cQhjMtQNqYH5puhTz6sc4njazr3pKfxtGKvPNroBe6UfkyAMXbcL1GYYNmWVM91CT7k",
  "key6": "67QkhXPGBsVUJxabFrXKi7xM9BwZEkR1TJwkBuWxbWMMzxvCussHrZxferjjTYQtXWNcGGtNc3Duo113ijgDhknU",
  "key7": "4YiwnHbJ3b51UoJiq5KdSw6y47mcCP8DNwm8D4GZQUEBNoc6XdTjdqo1c4h6itXmwwTdkGYjrdD6ifabUCkNKfki",
  "key8": "48ibS3D4G3PtKDGQK8xr7RPzHagTA45fU7EjqHypdiuF4xrNP8eenkCjXGfy88QRvtUsdeJjrM3Cv7DSWxpdhZAS",
  "key9": "4mU1dcpYYTbnoqjmwxHcHQSmWXDQLkvLcL7MwPYrArEhDvJUR2i8on5Vx8WVNaB8hFGa2jNkoYFkbHLN26Wpxucz",
  "key10": "2zDU385gubnvEvg62oJPrHfkKBGiS91RYiXiLTeQAbkTqzhJRRBhyFfYuFcA7J33AtnvhtAattm1Nt3Cu69YW9NW",
  "key11": "5787JzzcdQnaCsjxaFuyEtuRZFZW9TMQYGN6aYk3DhLVuadf1MHqRM2fWKW2wVDds847ZLvZTKTA9CEn6fXjBgv8",
  "key12": "2LJHwLha3PQfTjgvq9np8aFCSvQbUPRxBBuZifHpEFYNNw9xFcyMbsrkKTR876asxWQuJk3atA4QeBPR4TD8Gw6z",
  "key13": "4BGaedJyyoeYZYBTDzdL2Q16kZ2kg51VAnzEf6yH7tNbToU7RMw7sZxWyrXVaoAa3q7ba1hsLQt19V6NHV85b697",
  "key14": "2dzw11ZafX38Ai2ZoLASvzGfrMMx6v8xFe9VoH77BBrjQRRyuYr78xi9Ki4eWm2DqMLiney51uJRUiLBS79ErMju",
  "key15": "4mx1B7pTequkfLtaQtnLRHf9tMbfc2vVu6a1p8gdeT3Znwdj37NM2VDXfLURePna27hQMYEkJfqbuUtKLQtQ3V73",
  "key16": "3qAYxDsQAy9TdKra19FwAS3XgHgvjLK8wPvKekpBm2yUnqvyD2YkGBGCGxZmogvCsXPwJhnJTTQpqxirxAAPiMpR",
  "key17": "3R5F9TLZ6dmJmhTLPTaxxbuXiM2rph8CGALXePXUhD5khrf5u9L9wThF66GkobmGCnY74AHJVFTAhj5Q9wp3kRpg",
  "key18": "2pybJzqEBKLLSFRiGVxTkf3YghR1FS3LazSBts9huwyY7qyKppPu6tPhG6QNCGSFX8azgn4NF4Rn1XEhpWQZ9mcr",
  "key19": "2uG4qrm56dceeUcDFUYgmZUaVF1b64k8KfYQGxtfkHq4HMmTJVuR2Ma35b7HUnvaCwUnczYv8cBEsTvnc4hPvWPQ",
  "key20": "4eqec9iBy32BLc5u6YcRqg8x4chXJ1PUQfpJfFwevsk6LqyqCD6pdvaN3AkxbwMCBhAMY4WNE61oVQjhpAZZtkLa",
  "key21": "2aC1fkCXf3jqxsWcYbabX2NCgJmyxZTKvgo9wzfDswbhr2SPk9rPy4bMq6wSZzgqWfhhRV43cR8KvbV8mwGmuMqE",
  "key22": "4HYQEm53tAC7X8WrDbM8ozL2rGqAvtsVpUqhCKstEzcdh5Zh6xPFyvmpv88J4mgZdFAekxpPErQMYBugtXg9BHJw",
  "key23": "526Raw3v3gvpaDLGpanagEqing9P31q4i3TPrZokwj7DUGyZ3nvnWJXpPMNw3K2oLLyXHg7urtJ5oVmemDRaoKzH",
  "key24": "3sjr1jkLhRV3p7ZSGFBqWskQhTDwqMUNkFckqvofZC6sZL3wcxJEZ8AzPiqu2sM1evU7TXoXBca3HrxsUCbNUW6K",
  "key25": "3J3a8QDoZGTwWdHUL9po6MzEDnU4uYauvZv9xb1FcpF8denJTN9VN9ZUYMpc6gj4n4vwhD4MLFkdR3BdYmknsq3T",
  "key26": "598CePnNKcxsovvbGYipKKc6AmZXe4VUY3qQbQQBeuowDywyjZkT4Uyg8RLMrubagXSGNATSJJgRommsFmLBF8Eq",
  "key27": "3hGvDhnH6giD6LgtiwbhpXGyy4fHcjULTTtfWFAjXhY5TXw4mEdr8Xvr2Jx5kkKchtJLJse5JXt5FQBZ7kEznp5g",
  "key28": "2ddiJJH2JfDaRtEdHLC9XMpiDnCeA6KzN5RtvsGXrGqmouQn7ZSACn7jA4zjgQDSpob9zQA61A6GLx2mHGCKYVY4",
  "key29": "3rADCVrbN1222BmrAQDHjRkmg2AoQYhPwGXTva9ha9smEKyfwSiGQ4dqAGmHD3BYU6abrw1yCdFvMbHvtkV63AF3",
  "key30": "4awuabNETXdcM9uyusFjYwXSdirt2uQ851MUVFywog1eKhkQS4Qr9vxD9szwFx6o5uQ26D8pDfcyu85t54aTERR9",
  "key31": "5W9vLpv3EncudUiAHGzfbJkYfGikfP8qANaXLBXuCt4XLoqtXkhXkipTKNs68HZjX9KmCDcUBg34c6zz1pjk48Xc",
  "key32": "4h7t32TM9o8N6ZBXUPeGWmvFtyfGak1KW3WnddzSmD8zSfWxCusXK2FAvEic1vK2ZoskTkUobJDmpdPBwgFj9Jf7",
  "key33": "3xNPdNVzabR2rZbnC9Tc5n6EC3PFi7SMR9Ken7eFB3cU71XDfHy2U7RDhoy9GM5jCZCBj9nDTqQsQkGUjhBs1PCt",
  "key34": "2uMAzLEbv7b6qHWJjySE4xaDxKep8NcZrfBwE1bCpcq9HgBPqkvv8xRbaGiWmpT2ovQLFQ8krxYtyxGihpH7uUDB"
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
