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
    "2jRpNv7huQSSu4goMZcpdP6uedpp7PNkc4Yvdg5MeYgwo2CB26gZYNWqmKmwt1wgsjPCcSP39EYXCXDCTnFNHAsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sj8XjA9GobeT3Hjyd7Q8sZXDgmzH34cunswaup9EsBELqtTaJJvvb18uryGc4KjyvLx2FtX4qtjybZWujoZTrLK",
  "key1": "5qVsr9toX5yVck38p48UBbfug2t9Up7KHgoksnij9Jzbsfs5ghkRzatokJJMo4RZ7djL5cMNfMPnUxSbQqjtKfUV",
  "key2": "2U3pS1dSPLXV1LExiHoUXKpshBSJEQqEv7pNET8NwipFrQMqPX7bH5ovcrKv8yCG1Z5i5mVMUcyPGb7fQbWMXxjR",
  "key3": "2dNByGJbvxdd9L3nZqEZ4ae2db84vXxn6iWJrKQK2RbweWDNrgVaw4NrbVDn7rPVvASnwwoTMvmMnNFgKR4Kxfj8",
  "key4": "x6vRei6BvUoS56yxgRNM1HsZ89JnkQAQSZvLmMPZyEAub8GUmS5cBffQZCzqKj7zbGMQPahurFkqpZ8uYDPbwcg",
  "key5": "5s5zLtSDbFW2C7nMq14nvjZuXDJAu4d5srfFAXs5UVwQmn5GGKcxAxqFM4NedgtByBBsTbuo7zrmBp48uhwmBMse",
  "key6": "3r5fiD991TjibzHrWLFkL2PtpxSZDfWpcNidoxh57cdZtWqZkFr9Hpfhg5nDqF6wXXGcR5JEnwrVymZdWp1eoGQ1",
  "key7": "44h1yE2jNtC4mCZoT2EoFZN1VRC2SVBXsfpa1ZV2YRN1wTosQR573Qn5spCkiEVKcYvFZseqHHYfBpD881jyzFqP",
  "key8": "4zh86gL5EyXpuQ128tYYdwF73NwejJAxn9qTQ7HYDaCk48wC73GPbRbCVym1h58zmjwh3DRF7mBGtD1i77m7hCzE",
  "key9": "5AuLzeiuwhJds37Xs7ZXFJrDXsFbtKpYipmu4P6c9cYL6tgYnvUWRgSd2FUbd8fG73avDiaxoRr1Y2Abs6wxqvGE",
  "key10": "2GqFcdhamhG63yNVStrrVrr1SemiGPYEv4bH357BUkJRUr4nPhkxpczMrFW7mEgdNcLc792DaPJ9nKWDsEGTcMPt",
  "key11": "4Z8LvKdffuSSMe5F1N7r6iAGyy9XWPfpcAZGv8iFymQZp9Mxxp4PWSkeSxujpAJRoiLmLUw5rCxQZqG9sbdMX97R",
  "key12": "9AdnLVyDYrf74jVtBjz2yTwnwF1NqsC9dYgF4syuULVAsnDtriT4u61CddgEn4LQ5NdEb14DKMaZv5JSVR7eV6J",
  "key13": "4PCKWoQFG4bpEySUEMDc4wa2ZtjVEC8n1sPZibHug3NBvLZR5Jy1NJ86LzfgdfrW4JXuiqqWxQNvsEDhUsmD2YU4",
  "key14": "5QYvUvTppFUeCjfw6o16YEweorR1zUdnjZ7bKZ9Jo9XA5PNJC6Ea5GTGdEU8G9GvMbpbKmEUiKRGSUGtt7MgvPh",
  "key15": "yzxirSQSyBxYFFGQm15Na6gbkdFX5RjGTVwqt3EQ7BwRWj39NajiU8dKHP85Uc3bxSEXtGeJ1xA6x7T8rBSktC1",
  "key16": "5k88dcAydWoGQzVdTEWffuAC2yYYU3vixFu7YzCF88mCZmwo3nk7ZUmaYtsJcFC4ofq3ESrmMPc4NmKmVRFMhxDi",
  "key17": "37MrSa4AHKnogwod6fcqThWHL81KK9w6g1up1WRVz83VYVoMZqCzpumEesJgDpmGvGpJxUEmuQt87r6qDvP7wKsp",
  "key18": "5QZUd55SqmcjsN3ANzfoNm49CAGZaxRzJjqBrzpgWpUgsSm2SwtknkmbH79e8FNiV9h6GZRNAkNcgKtpxry2hPDK",
  "key19": "GWgFPKaCvZJKvxM2A3RNtEyRuFXG1TDwebW61yGewVXmXqLfXdbBcWUAtumMftVL729XwwgJ5YQvGTqYShhXX9k",
  "key20": "mqpbWAi1c1oZ2hXGmqMM3sMoS6XoBV16hn6jCAHRJppyWy81sQhH34PfHsdit4WeDyMAQ6ojv8ABtSnrwC1LrPh",
  "key21": "4qdBcUr7qhgpg1RWqyDHkkWFTvL2BPqqgM5sZbkMz3pYodDpAuAMi7HRqBkN5571ZzFuT3VRXiN4WxjHw3QgcEBh",
  "key22": "3XnULhcW6AyUbcDRrUJZXrrybni7nK7rBjYg9AfoEv8aa1GdLmsba2Tv98DicVComJX5BQrLT4zJiArgPfExTpXH",
  "key23": "2thL9qAVYRpAHn9w43hMs8T8WZud4EeLgJSkGJmSqWsTxKPedDiPZPptSFWY7hiPCJynitZe6nmwfn7caqZSTPiz",
  "key24": "65xu5rj6Peb9fzwsV8fpLZiSnbvQhL6vrseUBcdLjeFZXQw6U4eEssScxz1EHCfhoSCCgjGJSUvkguKqDZBpdidp",
  "key25": "YzyEGS9bsr9SFQnVBPe1nceozc9zXmXeh7F9pB25BjRqmxzUrAzUd41gf7TLHTeV5KYteM3F8ctnpbd1v1BQALW",
  "key26": "eWJS4MuU37jFYkk9jWmPNVJcJCEX5UPFB39LhnKFEBbY5amQvfdry7cid2QUqGVyyQKpKUg8hnKPBiRr7sHkQjW"
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
