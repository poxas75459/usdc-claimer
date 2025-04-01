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
    "4CtzFHAvTPz2F5W2XteTniNpBqxxhvg7ppWTUXhAC8JGpSrt7BsBexi4CzFK6FtgXfxgTS6ckN7UQaHMdAhHapVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TiYZdxheuCLFvy9qpuPf3vHEGUeJdowCYfBvvbKmQUN9AoE1iehgzd1X7kpmqpD5Gf9U3M8nkaLQraYdauRXYVt",
  "key1": "3kqB83gm36kUEGGAoRzPCnzhkcVzCUdAQjPAWQ5b59q4tT5i3rjJPQswwVGbA4X8s97DH8xF5Qi6X2zw1AX3Uezi",
  "key2": "339qJKNhiD1FgyAAEGwFsa85Uszx3EJU6jbLDZ4mcXHdnozAuxV1FjJ1NEEyjJAKHy1bT9hbUs9sCUqwud49vxua",
  "key3": "3BJSZdVBdhdY7o88FNkC75y476Xdv3q6VEawxuVtFSkuEqwJzBZP88oYRTAK16LW4cRsJu9sjUett4pfFBF8pDfY",
  "key4": "jeBmFVJzW96sy4PMHUq8MiUxbXym61A9E9gkX3T6JFAPT2QDnYZ58bSGicAt3zMJsTDZgcUgb5FviXShQaXu3wR",
  "key5": "2u2vJDHityLFCeFbphnpxLTcQJBDbWWbkFy9Lmg17Sc6uAMyrBj9PwjKoW2y4CkSHk5L53HHrUqHdcoYj3n25Gop",
  "key6": "4F1f58QMKhj6KeKNnPsEsUEn7opwy8urzqR8wqydifVUVgmqj9Vq8TanbktUaeEukeLy3WkXVqY1JJY1Wnc24cZG",
  "key7": "5y61eiayxcAMRS9BaydmVEcsqeDWAUmrNDkjFQ2NhLeuHBmmRxyqiXtLhGpPTLodqQoiPCZzzwVQeqTL1Wvfe5yE",
  "key8": "5QsSZT6MVoLGwAvcYrtmmUEu42Ka97NaLP1Zb4UPBBSttQeNCkH9q9iR5WmrWrwehXRAzGfwsurb56u7yVBmj5wx",
  "key9": "jPbgdQBSpqQSZJB1zmws2XeUFE4u3egj4CuDu611GMJZFdLaRKeC6PxC4TB2LkvE2WX26DiMf7BinoVkVGHskQW",
  "key10": "bJsVMMmFEjCzfNbQPCCCRUEgNWq45whkSV2CcdYHRgaA9hZ5m1uMjPUdX9EGrHEpXhhNBmV1qGxP2kgzUwmJpeV",
  "key11": "3KwCYQXZ5pEDN6kJRGSkDGLY89VH7wvnVFyB7UjRNDpx5kgCc2pDU2vUxv6eC6EzAZATm6xmht9k4JL5VnhWeC6g",
  "key12": "5VBosaTCbmasrwBpA7zrhuU5jWyQXf5TvfHsQDPKKbNAYd163TjF1KSVnxJw136xKn2npdUgzLkdAvfpkDQWezFu",
  "key13": "41vEVV2depTyb96gjBwQFRkWuEXx4XNXLaw5tqyzJjAztCYPbWDtAKzgcatP3ra4X8LdYuWGJr1XfKDBRHd4xNf8",
  "key14": "3xPLK9vCvUJPQ77EbxKk72GybTC4A69G7p4UcxMbdF382gLXtGS6f1UtD3BGEEPvris3LXbbj1SkGpicpdhTBYGv",
  "key15": "5PXcpXsgS4hy4f2AxcEaNzw2fNCgJ2vZuJKx6wCdoKnfHF5tbjvyRVJvYxPFv81S5wjHdEZBBjdnR89VNdPYgjW2",
  "key16": "28hbF18waukUiBoVdEqCDKvMWG8QcmGGLDebDNMy5LE4hCNvjaZ7PsCYCbTgx1otqwu95CVTwrTrTq65uKH9SARM",
  "key17": "226PGh6AnHKzGdGVaCQ9X1ty7XW9xTARYpFJdednBTUEn8pz4o9Z8Jx6NoSuWS1T7QqcaWEAUmrQpYo8m7qm1nKp",
  "key18": "2iGiFMmkhpJX8suvoWXMrqPPFeFEGtJoVWarZ7BYEouXu8P7uxsehCkpCqXhp7nJqrUxixitGrusYsFFdi1qnmoB",
  "key19": "64F6z5PpXcuGU76eviGeJEcobRh37DK7tbDf44wR4zKwzSWFgncx7qz5ZKCgfrvM6ajwY3v4rQUVLWTQjRRV2rUE",
  "key20": "5vWXSsiB4R4HcWw4km28yfkmyCtBY7S7nhLngLcaHVUXESGfaZzaEKKE3ugmCwTPuGEKLo4Vvp9SYf2e1ZvQ28zU",
  "key21": "4tihWBLVSyxbb9pdeCrRuJu44mZXRfvhVAviVHEHAtSCv2azA8MW6m6yeCHcPdumHwwWTMHLd2kheBxWPyHKm4o4",
  "key22": "2P3r2cRZa2VzsQ2bfwMpMG6tH1bPxLbB3rY5ve2wuwgEe9JaJkB9R9S9ZTSUc1anGtRUzxbLhpzuotGVeBVi5Sgn",
  "key23": "2KqALVdF6nMpkxRkNTPbf4KE25ahcf6SAxdLpKf1t2LuXa6SRMxTjrPpC3AKbLBpR5zs81hvXmgHS1aRbF5ypwYP",
  "key24": "2v6jbDMRBBNoieuKz86gU9bLwXeZPusXBz5PBaW8CmLtFtkrPzWLdTqEwNYjB18C2DmmkjRr8en6NoKSVapn1Jk5",
  "key25": "2gSuYqeb3zsTZnkVo9fcoVTtWBDXqes7GxHfGdm7xg3AN9iCHtq1TvtvjakkpeQGxYvX9jStkm5DM5wfWwXuDP7o",
  "key26": "4svwxh9gGgkrpMNS4zykXzfEwndeC2Z72U8eyGStaPDuJcoAdS7V3xC6iuKocVGFEe7Y5ZXkr1Ycgep3YYpSVD35",
  "key27": "5Adk48U5UcFYoUCz7RVK9aLioH7ffL4oDjre4HCouf8Bupa7j5iQaHRSKvrBrwiue6GjSxd83rfmD9kR6dRfmnyg",
  "key28": "2F1NXZMsu6dQqGmi8VKqw3HKmoadCJ69PQGuqooKgDvBAHyPkM2es8wJqGKJ53B4FzkqCfu6r1gN9S7GfDZfs2iA",
  "key29": "3hXy47KLgAQCw2W2rypZBseAZF7h7VMVZpmNgU6FbvEYmqH7Z192ih81iKWVY8YpKGe6DHLCQsoMCPK8CQEU9jh7"
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
