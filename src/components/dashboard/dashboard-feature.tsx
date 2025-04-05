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
    "3A3CpQnRd7tLvRk6uke2X9heevbMDbAL7ADpUocFXPeGu29dg6EFMhrQ6UUAJM1QCDYZ7dL6RtTAAwMJFjKW5knt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDnpAX6RbAT4jK7pVv8FBrWjS4hjk2vcgyp4NUPRFKUDNKb8p1g5aTyZTUE4pDmSXqHhYiJbk6B4ssyNebSeU2o",
  "key1": "2SAwk133sMZGVYQj3pUGJ82RCZtryuPtcp4j1L6FzNEk6jqDPg5zsPyzE1NpoRuJ89rU1MzaBpUnbCweyKXfiDJ7",
  "key2": "4FBzuowAvGJDvqCvZYoNR4GGpezgmGTTumPVTuXnXL1K1FAehKvpaEAQD5s6w3zoJwxxQKQHeyazt3sLxDhVNh6g",
  "key3": "2QHX5QpJn7Ht4ze5xi9J8omgMz2iRFBsBDMhmW1aVUbtsqsPDuscTM6NWrv25v1VboAnJzNmhB15nCRJXPiytiGV",
  "key4": "4obFBJ8A4fDiz2sZ4wSVte8U2KW9QKoC3XYsxRsGHNXydPHccGgJGQWxt8DdtBfB57ZpkpFC5tiDqxiyy1civqiB",
  "key5": "Sa8DadhFTgjHDP85VNHSXDtN2A11D5SnjE4YHbvTJqTUKkJKKZTdRR524jn2r1prLZcEs7br4btP24BQavoAkWm",
  "key6": "3Xtjj8ZsZnnsXQjaDCKJcUZ71yV8eStUTdhKxxEzEJjYJA8gF4C5PNNGcveMi3ezGRQHrzeAWUa7QQknsrBzovUc",
  "key7": "PePTXNSqHSRCbyKbEpKqhRFyXV4RAfP2QptU1PcvSyQnAvDrW52pN1pQqs6oG1yzBEiKPb7boZJ655nvzuNHg5g",
  "key8": "3m49pAf8U2LT2rmZEfNR2DVyoWeqzFbLBhmK4ExkcHpGjD6qf6Ty6iGsWLpUvQsR5H4NRc7ffN39aUoxayTp2Uam",
  "key9": "5W67ymQE1tayjDcEm9RjQ7sqLphxfoqdPTKszux4zyAerrKsgACG9Xw2YFhToH7KyaEzVCMq8aUGod1gfMHLbXAj",
  "key10": "ECcWtBULseWzizYpXMZoqdbhmBYMYs9JKJiNjvsyMemGJf9VMZhDg5keLThuoW11dVPMwUP4TdaQiNz4EvjpR3o",
  "key11": "4dxK2v8ohT8JyVK9Mrmx2f1a1nQ4pqqbS8iP2G7ZhwkGGzyBZXr6DnncLDmyAQgJVdfMkLV4Esgz8kt36WWcqpdp",
  "key12": "45eeSGSH6GoFoBoL2PuyoTVextUxUSESAP1iQjYWj6excPZL1WnyuqopBjA79Z5DrSptMicMuLABn8PAVc7SR9wj",
  "key13": "5WoKcKxRog1zgpnDaFAY41To4Vpk4qbkcdJEif4wt65cMCe4Xc7vkSPPD2tyJBm6X7NgYDWgpFjxq9hgwYxiBVyx",
  "key14": "3hFeK3jnSQAA7NoGPcj55PEz68e9qXVSZGdhFQtDV4GE1kBAKHD778h1TBxmrubp9iFy8AEeSz6M271t5zPsBqBi",
  "key15": "38xtHTXmCHNJFYLYNf8W6yRQA9evdXDx5hy7ntLiN66K3ivSszHpkNNVCNcJWLgC3HWU7qwpEfeqB4cFHyvuUvhh",
  "key16": "3AW9D3Gq2oq3AbW7f4Sv1Na5Tnt6uRZmfFukfN8SJE1d9ZnJNj9cSx8izwSPVXPSvh2oAyVjtfyHNr5XnHFCjvEp",
  "key17": "63Dtvg7aoYULJR6uNyJ5FsGu7g2vfNUfaCKZoUFgkdQn5iGHVrP67gc4qwtrfsqZoNwZLtoxchR1yCTRXPE4dCe9",
  "key18": "9SUqYJG8eZdJCMkePrBa8EKXv4jxC1FcHQhENck85U3FH6up46jnzXMz3DBuSbrfTYVc1i85JkJHyLnTvKK7zUx",
  "key19": "xVGqWUrwX9wTnHn1qMCRDePWKzaDuVhmqQdGpyugddqtx2R5DgmyspVfqXY7JHKXN5b7utCm899ryFiFkZaxXwL",
  "key20": "4mZ2udzMV93MsA42cLw2jsA1L5nQ3KoBo67meU9j7qfHVkVzsvqee9iQMkiU6Yp6ji2uvkGkkKaLEDJ9LGy87r9Q",
  "key21": "5aA4S4AyH1p6SueAkP6CQm8smiiKfznSG673z6AmAb74AAgNMaEtnmYF6EK8J8xFrrMoKPyejXfEYusAxz4kWVBU",
  "key22": "5dMm9UPVNR9HqPgUDcoh2Et9soAPs91pHBr4GzmEyiCfwCJfDoPUR7XfcVFKKWDzyDgWudxhgQvFjAJbJPDX7kf",
  "key23": "WPsdkdSnBQ15keWyoQFdpQ3JAD6FSBCaThhrXZswdGV7f3BF9sVkNcMtmX91sViHHxt1CsGA2CXXgJMAz3cUvs3",
  "key24": "5fsaxoQ1FELqHVxpkutw7SYhVQY1JZKfWU4XW28hSjZB3r3EXY2zsdLzS6irvV3iq7tY7rdMrPpwVHsqUq5sWE7",
  "key25": "gHRPJesVqGhPpzpAQZ1cmM6fG4SXzW1ZXH6fVjSKZSyAHLrf69mBfKQ5rkAMLtj52SKX49HnxvFqpyZATkrEvKH",
  "key26": "382xvAeBNCWJ569Zra1TTrrw32VQpcF6sWU7ysqbdn7JJFeXJnBCPh3rA7H6oXPtt5NbdJ7qhaPL5VHPG6QxfJCJ",
  "key27": "2a6ndywB2Wnfc85HkdX4GDCCwU6ZqZrnfqrtKhmUVYoT1cpYVmnCNbYFfsf7qERwQdkvRVJkd3KiFjA2Av72da1n"
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
