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
    "441xHFfQ4M2rab1y37bwbYDvSWwEqmGMP7o5AQLvoZQKBmx2n9siKSyRdguhxvUzgeFyx7hbWbV2yXuCjgrNSHHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ncemQYtzT2rABQ8N8gMW2r8K5JRMb9i8yo9taq6MKB5UEzFcxrHs5NdTHDVdrSjPnmWmMqfuZ6vCXkC8q38BdGJ",
  "key1": "4iZdHp8SenWZ3LaZDUVqRSHHnzM11bbB53j2ETGWPSnhTCCamRiezQ1hdAMT5bT9Dyx7dF3BT4pwUnG3WvVd7Fjh",
  "key2": "4NY4pxWDRFgzCpXRUeUurHmHJuaq3hPuWVgLwRpKx98KV6fjtaojG8c2okJCVfjFTPaYvBCWj8PwabpjGptPBnX1",
  "key3": "RPpijuZQ1CFbmieRohRVbMS1m2rFjewVDYaVm8QbnHaL8DUyxzk6JcSqeskhkJJ3Ss3cLbE2FTrcQLgbJx6XpTp",
  "key4": "61W29ExEz4cF16tiQzdxDtEWfDDBy9mQBvK3Cba51k3RHnn2pUa4VsX4o23iLeZ9ReGwzkXpUPsuRpRJ2BRsPUgH",
  "key5": "5LCBuVxXFkHDM2YWyhzYmQ5B4FqjtZDPrrFmtfCz6u4XrQym3yKV5RpzX612WbYcMbJ8zxYnh8SWE81bZ9FppgQw",
  "key6": "WvMvNR968FG9EJNUaJ7S12KZbGCjNvArjabtryHZbgJApCS8o8XXFUYY1ibgD2bFotxg8SDnMGvUy3bC3EgqZCu",
  "key7": "fk5VCXJhc2ZKwTHdhRCG5YaTNVa72qMaLaizfiRHizYaAzFfqFtKytsrFgD9rfQdEqMfpeLkkBqeMNLi3B4ujZK",
  "key8": "2X1djAM8qiY7WGPz1KeYrpu5yRScGHW63VYj3RSBGGxmLocdvPJVxjLAQk18rzvjsT4erBg9YQcFDEXsE4UpiW7G",
  "key9": "2fjxfyu4JWPquu6BWQgW7a9psYd2NLVxhZRjMR8aHZKhrpPAgj2yPGyASMhX4gTAUMktAzhmEr4TYVA8XdNipYxp",
  "key10": "27buLy4pHBjwDLGFzQKZeDpteuDn4MENbkSJq3vuATVF9XTNtNFK8miWAJ7tSDHrhjY59FrouQKRhiJPHGW4ovz9",
  "key11": "yEwSk2gDT8HwwruQiease9yyyHGyy918RbKU5XiNSLv5BAW9CgujcL3ak3FJQK48SPZhBTVNC8TgiT2xKBPWm6m",
  "key12": "5dCjcnLfbVCY63HRqK2PSFfn2dSwRn6bqHysGPByENBku2KnJQkGAdVUF2Byk7gSG8SAgCDsRqoiek2R8JfFG2tE",
  "key13": "26jUYdTZAqz8EaFGH5QJDNYmSGAQ3rPzD8ppGeZR5PYFvmyk7cZ476FAE61NVXCuyPEce9YehpXh2ohUGBY4AeyM",
  "key14": "2fJiLzeUE8iKNgiXHiFACn2EN5Vb87pbN4fM4ntfoyx1mg4T3qDnGiXeqShDq4xC75wVPiew6p39fwzW1WadNaEe",
  "key15": "4KEr8ZwJPb3bHJktNr9i6ERJCJxExcoyzDhuoXSH5ntnD4QKp1cBUo89B74sLAqZdan1uqZ8VgQdFkHRdC25DvX5",
  "key16": "3PJLxYH43LR6vsYt155YUkJqDGxmkc4V6MF5xe3Ndo6k2ztTyHGhEt54ia363YqPfa5PBGTKBKBuMjLMx3TW2951",
  "key17": "2FoW9u1U8SqiXDstDsNfeWGNmX9wGXNRPpTJUZp51Q3ggsJ96vRm2MGGLwUpaNP2XfgN4kBnzFo3qDbQJwuVj1V3",
  "key18": "3UDsKEzmYhmuyvAwfQhTgwyDcFcPDY4CZDHeEoUZvrSCyKsqjTUW3tUE6QUojMoCBkWN8gV2Ebp5FsV8u4E4uxn4",
  "key19": "4dGyXCrhCyD2eQmoNXPpWfkVNDS231CVaGo9DEo1btnsD4vDQnnTrQxxpRNYLEFoYVwKJP3rt5Vz7oiAXmSDFbsN",
  "key20": "LUM3xzix9Jp2qYjWutvnaYR8piuXzfCtP3YfLKAoxz2HtdNDzgwPdiKBtcwDiZppTWJr7Rp5k8BAr2jisSSK4Se",
  "key21": "5PunovqJLYu3CuGQ17WJA6G1QFZ48nLNwYCgJAvm7kvuq7RfDMB8ETDmHqoCqVK61K5LmN7i5PGLd1Ndkh5CCVzJ",
  "key22": "4PHEAP6hNTvPKrMvVYVKVZH3c3HBEfK2WHqRBfsL61UzG14pdF3BVNmR85Wm985kLLxe2QNoKVNW3scswK2TzAiT",
  "key23": "4NPKT7FA4azf3NXjJ7ZR2GKRnpLB2PQmAPYVTKuu4epgjSCmdGQzuJFuLqwoS9hjg57MsmbwwUHW2URqqXMMxbb",
  "key24": "3TdkQ6Yan2fNdKF5v6eWNNMnL8tGff9iCFCZGb4FFEeNeDKtfURnNv29yjWeZfcWySAq1BLWpLjQP2bRBxFFWF2t",
  "key25": "4FZhUKx9zJY3kyP57dwyk7i3KxvCBaFMjif3uHZLgESpMx3hvNnB3EpkBgH5FxUzXMGBpkJLhfcwvgXfMiHgEmrV",
  "key26": "5JfymwEtnXptQmDVYv4ywVeRJzRLqCy8C4CpvdRD1o6HdyJefRbrBQrx94bpzFZYoLHFr4znuuUwtxwGypQ85Lb8",
  "key27": "5WgQs5CnKsqMRbpRyrBtiTsr7QpyvYgFJQm6xNWWhNFc2PDKhRte7rsG16p4NKXq96nUxWg5PTEGuxWQZQbR8TaY"
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
