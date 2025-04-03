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
    "2XYbTc9FaZTnCMpou7eGKZGkGvdg3vhSjqrAkaH6bHkrshfHaKKHFhGyREGG6i92LvZ87FYwiZ13RGdQSj7uF9xe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "243Ls7cB2WtNb6uAyWEkkkxxWFTT5wQtBTzt5PqRPYzUyMWy9sxhzvfAkqfDxdwZGvPXEjC2nDspy1fGJfoMSaZZ",
  "key1": "4o7V195mySJYq6EKUBhucTswhNjRpT9mK9KzfJfRT8w7ZHPx6UeMVERczBk1aV3tCQd9cRc6bhewLFe4H315PrGq",
  "key2": "3ATBJR1vTZwYL1NMebDwchTAYF5iEZfnwU1zvDCuaKwLHQQEFBkm9vVjam2fXkucpL9v5pSqyPSXJi3jt1WY4MtW",
  "key3": "3eFZcvxPxKgsfS8zaZiu896t5h5rZXWnpPRdS4RAY59xqg2NjHRrB2MKahf2gZzwQG1uHffvddrD2PGfuVb2Uc6R",
  "key4": "3NESct5DqBWeLS7CHj9PtiJrXLJsiydVTs6F1jrRSNpeUZJc8GDiGg7xZx4RuY8TUqyRbbuiPLQ4FcDt5jrHA2T1",
  "key5": "9gpKj5WgG6C5bhNB391xjBMJE4A5dcAxpGwKKvPud7CjBM2zX3RJDYepyQmKxQae9Too225FYiMB6HnAzE7wBg9",
  "key6": "5fFCdA4KvY3u3QafUSHXZtMZPikfPe2pzDEuBvVhUpou79FF2KqPd6LxL13uXWTtkd4M47JJGMNUMPc6gYNhTQ8S",
  "key7": "3DhehJDmzKMxBVcop2tx1fV6HZXh9D4Koc5n4YsT9pAombCjgiypcKiTweE68N3vmdcmrqwzf2QDTxdhsx3aLtoW",
  "key8": "2PkfwWrRHxYqMnxQeR9akA2C6kGLmVDu37k8vbiSGxJBrPzX9EVTm9AcZHFtLtxCZPPaV9agCPUxhbq28jVHd6wi",
  "key9": "q2ScCFmgPRgiAy5cAGRTVUbRW9DCiRmMx7nqQXuNhpWRrkBjYWHmnTy4kupTrkwCFKwWRF2mwhAujy3Eagw4ZcV",
  "key10": "5RX2BeJjuKcFSxqCA6JJ3KP39C4sht6TegG2QEQ3tsGHY1cvRtUqDT3LNAHW87riBJtNr6mzUiiRXsMCkWw98y73",
  "key11": "63mswaHNEtcdvQiffrPNwEPjmYpwY9qxFsxWhhGPQzNAVpizZPNETRXFvoKs3TL39Uzz1ShaU2CkPd335tiFaDAD",
  "key12": "omf2GkCLtyUhG3JneCRLX1E9axWcX7kqTzp7qF2jAhfWvWxUdkVSemtgt6vc2oC45Hkoaz7fjMF263p32vqZ9za",
  "key13": "FNBogpzBPhsruHk4ffy5Qg2ARp8NcNyyDrzG8cT8uqvzUfVBNTjD2QPTj8NUWJnPb4eHbYaSPqfmvJ9Ss4B16jt",
  "key14": "9xbFrvjTndXjh3DxVr6ST4PH4sqModmzgnpUEVNTYynMdmXxQDFoAuE4rafifYvGsn72iv2NigNMqr9NT69X6WS",
  "key15": "2KqpxvNiA2zR1JWuCgyLHksTCYggugnZETxQWkw3jHvzn8ci53VJEPV1iE3au9zhRUmHK8YNKn3nBmf36xh2r2EQ",
  "key16": "eZSLPnBCfHaW1MxXDwSd3Gb3b2ErYPHCZqvxoSQzRdio8B8r18ULrbZTkWvRVzGj18QZ4AZLcsSyiYrEimmgS9H",
  "key17": "3SUdB9ywPgn2doYzmMc8fradSy7Wb4YF4ZcJM18Ee3pFTr8aUSc47W2B75GUtQnq8m7ps1AAq9pGHA2gzjyee4gd",
  "key18": "2p4bsSgW4cR2bHBhqwTPkaVdd7UvbDEK4jzTxCz7rY9xeNmRH6MHvU1zo9okqMJrspHB4UY4bpfrp5Ee8gkyfJ2U",
  "key19": "25ghtPcPWce85eFWSNrCXRiKNH397JrqNXCJcjnQnq654Uu6ooqGX59Q64b2fgFiT31MMqe9vet7pZmmcDDBjuB8",
  "key20": "5hgdEiKY8MXcwPMzWCs4iEXuLQuGSpjttfa2W88SpQN4uqbg44syKqov8GRnomyZerrX1ehCUWehPBdFt6A4EiLo",
  "key21": "4vyLkDZvZbvtHoJjBJFjSSXJFfC56jrG9C3cFxkA2uf2RfMVjcw5se3qXoHD4YL6oURmA7pAKH8bKpaRUq4JebT7",
  "key22": "2ZU7DVdfob4PwtKpHyGWRqewEXVGpbSbLfURG7nkf46DJnWiYq7we7VAAoPAsxgAzMhk2DnoL8dfhkNQcERVYxSR",
  "key23": "2QhUfJbaZjSSAY2Yv6PtdwBn8sX6bYAP5ySBHoTfTqQqk2y1yWQNiAXPbpYB8Hxt9pMAt4nfZ1KYGgG2e4vLb7N8",
  "key24": "4x1YYZr8YtRw7QzbxsuiyibQ6qB2oANhM3gxuu9qF6BcfxPfroeZcT5FyfUViLNRwhL4vHSqmjaoGznMBsa5n6kj",
  "key25": "2jnarTfrVCDTwCRZjuP7iV3kvftKVVFUpFzgW4ZXXoveSicJ75EA2cCCCKHqRsZrS1yQGki4TSedduJokNG79pfu",
  "key26": "MHrdmhZ8xTtgkhTYtxrdzfZU6s4RReMhYAVGkscadL5oJf2Y8tZBB3Dt6KnSXWaKnD3TDM6a1PYpSG2c1D4z5hE"
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
