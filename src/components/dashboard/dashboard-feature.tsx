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
    "4V21u6EGtwkTEyRNjwH3Q9TUfqyaYK9j3qutcUXSom8Ha37PDgAtGgWTtv1yPQXzHszecYK4NXMsaTEArwagXgDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xg28hhqx5dUKoALJnj7DjEfjSRPXKrtAxDvvDrQTpp2jyQYYWRbKxccsdmaeQYZPUNw5GVsWrQMib1xHXkZoJzR",
  "key1": "33BWJXioBQAsww3ki3GpgnVfLpfJ7znRzWp65pfTtC5Hs6A2AsyALiJL8kmfvoLLWYwFNrqmd9sUQx7Pt9nMDnoP",
  "key2": "3vTFMK9QSf4r82vnVBRzhUitj4zAK4wmLESTbWtEFvb7Hsoyqf6Surgxq96HBZcZkH8rPFJt83bfR7ttq7MmbwiC",
  "key3": "AzucAiXuHW45EUx9BqHrVDzBbeYqo25M91ajhmRVYquHJJzxjx4ev6rtHrhhvZ8UEVigi9V1MvL8yybUHLzq5vt",
  "key4": "5YdHA4efBPs6vvk4Gixd28bKxe6UcesdX8BXq1YHfYAVKtg3YDuWiD6ijyse6WBRHcps81pgeromunzGHmF2DRQ9",
  "key5": "5Wm1MVFuE6jxthN4ePr1gMNXqEXSEKPdm5xbENLRKrFp26GeFcHeXpDHSWhS9hjjVjhe7upkvyBYDQA8gVz1kRwg",
  "key6": "5q8TQyAxpeqUEFdee814AMoxG3dbb2G5QGPhaNxAKnD2A4hn6D7Ap3kGnyYsXRWVJo7X8EWQnLiUgWshMUuZzyf4",
  "key7": "aXSTniTYeSdTsBGWx3euiXx8rUUueJUjGAbSq6N4S2XuGEe66MR3KMR6jLAbLmz7sDBPCuhYM4SGGmuVsHdvUve",
  "key8": "5x95B1EYNMDL4itXQMiGSstwYF9RmiMQnykJj5PVTbMxdPzTYGH3UGrnFXx6KJdwAxgzSUCsRJiuLuWmyt8ftnDo",
  "key9": "2w8CEgPZ7P1VWC1bP2HJu8LFPSZxY8f5x9QtBueDbRVFeqC2EDt4VH2YhWdWXgtnuFnpXPZNuLkBuNBxtBYXJP2C",
  "key10": "48shbCXQdch6eVnh1G3pV7gxiaKuSwjvKGn5NF353mAtQdL9PGjgaahGJrwXgPDnDtVsa5qr57t23YL8GPMxiLxp",
  "key11": "29VafdAuMCV6b3ztBxNQVJUXx6prVmJZVWPyJ5J7BzGsAVcG5wZPdkB7UAJbu73vJjt1ojxfizXHPYFMPcNWrUeL",
  "key12": "3DiMeaN3Sq4FYvt4bNtgi36ypaWqwYkrwfyYE9Cwss3z2tbDSy4AMa8uunudnfdBU3PWLLaSGgESZwhYZAypXLiD",
  "key13": "2vwCUiGNZNgWoDDgjD5Qqu9pbGKaqYtHE4Vow114xKGjHdhrgqE7g7f7nUN7QLRP6crm9pRB6YWci8ZwKuobyxVt",
  "key14": "3L4DVsYSq3rxNCYzpPqDXJYvrV2MhXteLN8N7UJYGfpDdiY1Ap2u2WgVmBfeTDfqosTVyJQYt2BDXndBa3AH1gs4",
  "key15": "3dPmPftNWYm1DqLrAQRMNNZ9egyoA1aXSuFC3dQ664qbcBSrYKjTVPNQXBFoyvEYSTZ7LLPEqCQfokex4jkmk1Gp",
  "key16": "5UTwzF7xNNRCyaQRAe7c2yBTZzQmL3fEVD7msvVWVeU33Y5us44YoM3vDti2GL3GJuZWQGaSwwrihQhjv2Ae5NAY",
  "key17": "Sjdo2nfsyRzqn2kup2i1AJZmjQK3ghDHwjAPBLMkwyBwWm8i6heNCpzzjZnTDD5PNozudrzdksGeEH1TBDoZDMF",
  "key18": "3ripYyHTR1w6Sockm1pdjBGiSQbwBhwxo6UuMV7bDmFcnwnfKQtbn8K1KsLM19tcv8arMjPctNKFKSLse1bmax8B",
  "key19": "hQq2EfGnG61wumCnjyP26S9VmJXD3kwEUKbgF9DUNMnNAgYh4FSTavDH1hAje51wTyECgm47T7CCaTXG1MgJJfW",
  "key20": "2tYfqCSegWuJvQKsnpfzU428KHscrvfgjzGHtgYFor7JhRu41huE65yQdHTjaZqyRoge13Ex54XnHx3tRcddZhke",
  "key21": "2Wq9p6zu4fJvy1fJ8obEAETiYDBvVxk87bmFh6oovbBGdKqfnU96xJAoZn3MSdpQEfWokP25qr8ST4FJucjijXaw",
  "key22": "4RB5hz8nFK6ipMsFrkdPXS1Jnjzwnz5iH3yLk66FDqwuQEjNGAV9cMaYM4voJDbo8iLnMjWXei2mvqQHMbPhm9Wi",
  "key23": "2QSTGeDtsAb57Ls3ywWqeUZgJkcYg3TbJPGWH3mzZ2Yr1JnJZE3SFC3nuP27Gcn7N7ZCmUDRtTetouVq8wJSXhwq",
  "key24": "411uFZR9DGdgdRvAsG3i9ShSjFfmY3RdfuqCV6XGN1nE4Zhuza5GKvXjjY2yJixYjYt6djm2CUJD6BwSwp73mXsq"
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
