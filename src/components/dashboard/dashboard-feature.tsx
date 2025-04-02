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
    "5hcSmT2ykkf18VyWoFpHkCzjS4sncq1pBvCMB98CPNjstFapV6Ytjs5NPxZBijXvK9qyxKNyC1R8YZbf8rsNF5MH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xYhJRyb98HMbbWNaTFCZWi5deuUPtvsJDdLFEx7naj9GphQpZgzYq76MUht7VxQU1rqEMbrxdPoipUXbZKxXR5m",
  "key1": "5LJf5UDKzZ1btWvzMduVKVGhue5MijvaX9sKXBPrAcc1ZXiDVSgWHoDHQd1kENqG9cQLB3qqeZSgKhExaTDg5VQQ",
  "key2": "45kaJc98RPjYqBd4xBxdXitCM1aoN8jgTY2sgHqJoqodSu5mK1GvsD4Pgu5K46iSRdechzAxKMFEJmJPChorRNUd",
  "key3": "3oa74DGKmhAuZRPovYjMw4nYWhL4SrnVWFwzDcvW1THdFGRJThC9pvLFUETMniv64PvQXA3Yfr87co8hAvA8zXLb",
  "key4": "2eDmsbpxeLWpiYfcXKXu9tnG3va4LFTg1t99dz4knGPsCtjb15BEowoVdMEAVUkKvpLeNjgafyKnNaRZdJtZM9M9",
  "key5": "5r5Zs8PLSrqRm6rySiFgA1tiZuR2dbQnikZKxeYSEoEgxjUA3U17kit1aKbPkUX2pftLoVTCPaPYvcPRF3CMsmEL",
  "key6": "2G157i9pn2h5evT9Uybh8WS81HwL4igvfkfpmJNjfHwrSs3XC83C7PBMM55nEvDB5z685xWRTU5aT65oMvNkkmQ9",
  "key7": "URtFHJS4wfB3fEC5Sm3M6kQBJjydW6cHV9t1zMxZJeW9DD5Ftv6LdySWM3ESyiWykZRFXZggPumzaabXSFkAdCm",
  "key8": "2da3dbqX3JKui9PmLRCJxikj9CbQPYNC3UUWLFRfiWc8NsKeeRXvtAdqbFsyBz4yXiE48AjVgUjjLVGX23fWVoGA",
  "key9": "5bm8HTXjeUPZG2hsDTwpkkKvFPeJnucBioozAo1APEEdckFvTNdtFvyaCtmkBVDghAZTDQ4iHUaKbfT1SAgNd1oU",
  "key10": "5jxZjfrneE9mwJXzGqUiC6wPGZCwDyZbooZbLboc13DmUngqL7QQHxY34WkuYTPwb7hrwtXy6z8nJkEiptLQbkZ",
  "key11": "2nTgaP4buk3KqVvzQU8dYmbcj3AtdrwR558kpxUjrP5nJJ32rv8PujgJcgXJNwihFEBezL43ADxvLpsAJEs7srDX",
  "key12": "31jrdMdUrHjQqtDTLYnMjWE6MSm8GgNuYAmdWGHHHWjpXPcPqo5zA7vg2trWaUvyhaq1gLo5sj5tY2NMY1bsKidZ",
  "key13": "59vQQzMaEmshiBYDx5vsVk7R7fWUrEjk13Ra31MmKMb1MohzGohyyqNLCTSFWCNDHhSW2Qb6qU9bMRMKaQvCLm71",
  "key14": "2Jp3omFtqc6cJyoycJpYE46RkMQ6JB5MCMPijwqjLWN4a4ucPMEohA6dtJscoJZp31vyq2J2SzkHsJQz2io7ikGW",
  "key15": "4R8dwP2sikP2M4MkdErue3gYEYgTv5dqY1gM4PRpdAvzfGM5Ks1mfdfLRfbWJZc3a1bqYzeqhxVJYG2Ma57bgYM5",
  "key16": "5Enm52DXgLm62Des9dFPCXUN63KpuaChDDA14irTsLrLaGTE3SoH19QQiABTQDAWEKAweXDBBg8jYXPUirELnYGS",
  "key17": "221CyAfuYdN4PvhwG5EkmqrVStGj6WQZNsTbmZWY1m8KpMqysW1jyiikEGtJfZNNr7XdUM8ucwu51kNrrayGnGXF",
  "key18": "4KwsvzxRwQmA3xZnYkd8Abx6pwXGFpLWb2GT5FCXJzVs8brCChs2pPtPoCyYPuc3Diza7DAnX6sc3r7Eujmpc8hi",
  "key19": "21Rh4tCWkWQQm5siGsUBk1MvTg6YADBu9C96VQdBWWM8hUwmJNoM6eZqe36AsGxYxCLbajpZYbdHtgFYx2nSTKBy",
  "key20": "5pUkba3vAp5EDQcJ1MpHGhqkfroQTSFM1xEMJMFhTA6QAr51oepkTCQoSVeBaT2YBaaM6tLsojHX7VR9ndwk2jFo",
  "key21": "5pb8sM7qKV5haPAqa42fXSgGxjPbZb5yWm7WBfMVqYqbHTqM4TdoEag2d8CkdqYBvTYKGfErbixdhVmSNy3s2dc7",
  "key22": "2rqaKsfSCoLa8a8hQGyxuHvTg91niNnnSt7DLmaoNCXfKF9WHYQK2CWkWr8kYsjEufDLKpHdZykThqvXvjdHz1ee",
  "key23": "yiqoSueHPXF6t5bugPtzLGMsMNKKAwarnMrWVsUnn7yQm3HFGoRBoGJtkWwNrrNp6rjqqcaxVAB8wF8yNesMgsq",
  "key24": "5KNBAN3wCvcpgaGSbdvA3h1AMQnXDfAa9ZqdQ8KSzmXrTEazkt83R8XwcUt6fQyEv8zwrCY5SKTxxQeoJ8rnVx3Z",
  "key25": "4wXYQUz3tWTGRetoGgcsKA2GdfmgmxZPTpTK7Bd5u5ArXvZrbHD1qzysGrv9uYfYpe8oWvfkV1L6QpeXwYSkuRL9",
  "key26": "5mXpkhWdBM4Be8qfnTHDweCMrXYixmmHp4AMLAen1g2PERk282WATvMnyMWoCvhe8hqbCQvJSTAwZGDGGYXF2aaM",
  "key27": "3qPkAHd4mNJRDDEuhxMgFMNmcQemDzSBXCaw7ConLtZEiqHXP7oMPYvUn9fgJgr1JzMb9umeASvt4pVwuVMM5Zpf",
  "key28": "v3Qm9eemHtTVB1Ucy596R2tWMfnrhCdFmmcWJbGd5C5ihfaw5YyxxMXao6qXHMpZcPCh7qU4jajcNz5MjzmHMMA",
  "key29": "4a6k8BjSttxaCx8AWr55VJ7h2q6yVMxPCsJQjtabMGH5H5XsND8HSt7ec3EmRvv8DFrnapBLzobDFHMYFEGEsvhn"
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
