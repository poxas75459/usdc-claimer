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
    "uvdnewKmDz1P6mYVZGo35vpuXBjwiqxM2tRnNR6PM9NpyiRg8UU2CtYJhhgim28T8cvsk1S9eeeaCKQAdXrxfib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nLu2WAMrXjAdvfrDfnA8Ap2iEyXDYYm3gbXaTtsLFoUNUaZppwZq75GW9tjaq37zh4RLdUQPk2tutzumepBJiUV",
  "key1": "4MSeXb3peEijXub4cpEKB7b8uSLr1E3jemJLuHAyybKp54SePjfNHpDkZ13kE8BCoKS2Xu93JH7u4coAgBok9xKp",
  "key2": "62rYxkAs3RdfR5wbmpCYBsceQcQKENEfV4hHt1kjrSfWAJW8AazWwLyzLPu7tG7rQa5aAfv3eEsVAkYBjGtd2pmc",
  "key3": "26QgJt3zpceVpPm3VjUAhX79vYbaV3iEQYKqj9kjofVf6i6aTMYfUA2oCdfY3kLmT6e8QTn5pHP5GvL8rGo9kBTC",
  "key4": "4Z35Sg7jEEUV2GCnPdQCUUjL6gcHFWkkgjUtjYDvDEcKU2vSfHuhbcDG329B2W5ouJSm26DzNhfTPsXGSfieeQzi",
  "key5": "o3YEFWPQqYhDmMkbZbrjsGeCGcYpgbXD4dP16H68BTLfyjonn5ZXH4nWvbG2azXt6T9sUd1A55D2549ZSKD7ejx",
  "key6": "5ZvEqxdkmVKiLP7Dny4sFjM1oUz5c8hnEgn4UPqEv7AKkyKirhQaMaGtHLU9yUmtXPaRSMr8P9kj3hpWDWtmGbeZ",
  "key7": "6M2w3H3kJ4ouL5PSg9HGogTmGAAr6K8GqTdJPCr4ZU4zCmNTKhGt5rVUibA4gEHhRMtwaKdjJ6VKXWp2m9Y56At",
  "key8": "34u9fa5Px39TKjiD4KQukyxrSLD72GWQGkidfxscyDe4YK58N6EiDoBTUpPQ2EEjkV3ApoRzLvgTxATw4aGUfo3K",
  "key9": "23hGf74qzQvNjDtxPAMkU6Yr2peQuMVog2uEyVqkGbtDL13b7pCatZEfAkA3vqHshD8uzTWakSyp1GtpEhiu7sXk",
  "key10": "2zMc2vGK2S98nnKWkxiFaGQB6HEvrpXsLWaNpMnSaZLVPrnZbexeaU65EhNiQxEVnTnyR1QgpSme9PueZqBpGv7p",
  "key11": "BVJDmdpda266ur7Jq4TaCwCgM5Z9d6cMbjWCgs1saUJT2UaXTmJTHLLbW3PGuGgUfTs6tWaPEeWk7BXLWFCu7AE",
  "key12": "2Pav2wZzCP46kSw1ZkV9HLTt13t63tgfL7bNrqBGoDZpkG6UvRW3b45Y1Uv6vqc9tvNoinjwckpCqRzWxr3LC1AM",
  "key13": "3Rez392gG1UxDUCSv7YgjxgWckYx6yBHBmV9qomJ1V3a3C9ZoGstXPiZ85t64D4oVBHKtq5QscLpCk6ey3evwUEX",
  "key14": "3HaDUbCVka5GB2phqpoSxe584BHyJEA43KT55ddxVVqbKScqTZTM2Uz22Wr7T9R4hLQimaddkmDe6uAAZF5pPvC",
  "key15": "3nb6ufR8iPUnRmrpReNCFQxKFZ6ushgbjXPUCGawNsgXiv3ebpHExWXcyL4NNQdkKnTscyNSxZ83sbMrj8RFuGeP",
  "key16": "5YagFNNGFViTUqThMvpg4pzsVNdkLnHzUh3PfHaMzF9ViH7axiRvL8e1otVsUXFvzk9dGthBNGJd4B9FsoJaZLmq",
  "key17": "5CcNGSeyz4hoG159pZ2MHgNWY4h6bDxZFZ5frZzbawaK9eW957NbaAzC7gMycNMhFzCN9VcTnbjKewxqd3iqebzV",
  "key18": "2oXyLN23kMkh2vMA7DL4H3id2EGSUnKbysYTmU2nEgF3CFCLrNynQ8AezKeLE1BCgq12PuSaqLc3Gq2F1GNsqSEH",
  "key19": "4DdjCAh1mrt5SiYoiwCAqvLG6yNhkhJn4yeLR6UYTs1jx3QMpssqyWG9kcNrFyRHunUtcY7vEJC5Nhfs8CixLcWV",
  "key20": "57J1Xc7s2tFC1tfsHxeLwoT7W8Q9tr1BESMuVyNitpfZ2CiBNN5mBnUzvyGJ7ptZYWE9uN6j2xUKLJH6maaGHZxz",
  "key21": "5RY1YUtrDQQxGLqibRYtp27SaAmrFLidGDmwTtByFjFKJwH5FPKyGK4T7TXQT9QnTigeggwUcQApqAZgvtdNLs1t",
  "key22": "5rDn5HrFVkvvzc8u4aGVvdQR94U1WhDgTg4K1eHK5YaUyyqmPwM6MXGZwoyNEGqZnTaFQ65d3Sr5yG3mkv9eiMNm",
  "key23": "XE618afx2BDTnr93x76SZEJs7zmKYToA36a2t9zJHN3rT1QWEnBf5XQQCjAQMxXrpDFw5vaNGsuuKCDnnJnBvhL",
  "key24": "2vEsTd8186XPArmpV6p7ZkumN88GGuis2j1LQonqntzupnPs7Sux2VQ3YDzEzLqoDQ97L7ETsF5XPDjtsMsUwxYb",
  "key25": "2h1sDeTiemkhNjg5Vw4Uha7ePJJeRdTq6abY5bseCxMy93nWG4ShTWqFHktu5AAEizBUFUkTVKpvnfmod1GLmmQF",
  "key26": "5jK3aSSF1JvucVkSwEVkNXqiMzN5346RrDxHNBACQPhQWD1VwD64Xd1wWZBTtK8AneFKTd1EZYRXBaVxx9N6ZYLd",
  "key27": "kaSiHrZpE5v7YRySsnedTANcS6sVX3WqafnvP32Uh8YUYdWBwS3s2ifgUTs6oLdwYWu2WSsWnVsiwA2RMZjREJH",
  "key28": "3NWNWKGD3RkmLmJ1H31c8iE1ZFfNB3PSbkPLsfngMYSL4ZQH7fpQAWavXqz3S1YGqg7M3uwoGa9Vw5Hp1sJboK38",
  "key29": "BAYeXvQwQriLHbKXYERkzbbLVPqtVexez34tLwZCVBV4xcawaTNjn6jbhZcLftnL3fKrgPTkeqrBsZ7mcVR68MW",
  "key30": "vWdkZhvmizQzPczNGH39iBCcmtRwx84Acsfr6z6RwSknb9duo6iVxGx2DUsoevzaw4NRYR3GxkZmbVH9zCB2pUo",
  "key31": "2DLC3QhqJp7BrasDmh2M5AkMPzScKU1HhVjFVeJRgS8irPRH6upn1B8TQ264fbbi13FzGapZbCAkwJZ1sJVUpbQZ",
  "key32": "5zpc7JgfTi1Q1tmQLceKdoAQN1EsHob3mYxFwBvfkHd4naedawyX5szN3d94sMSVNWYBvtySjw5ntrDgFxbaWgcY"
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
