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
    "3sgFSi8omLUn2V8eCBuvaquS1ctz87rCdQjp8DMUAQCCmN8WF4bQfoGgWH1KELCSLf7UxoCAddH3zhKKush8Fd6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TtgTKSkQ7e4w3Gmv9j7Si82jSUgZzf6V7FxMpwnomq4yuE7ozGLPRwkQtipmAgbaGY378iXZFcc6gnD7dausE3X",
  "key1": "5tcandS2JkzcX3iN9dJioe6i2hEmbSwwfSNUS7jt4o2suKPVGEznTvqB3En6h5Pxv9oSeVWhLdQPxBVdtiMExEY7",
  "key2": "3MNQWmHp8DevzNwep9D76dFjG7juDuDrM3n6ZXys2sNWH4PsKrsJPWzU5Ls5k5U1Ycx4fzMp3EJ2ksxPsWvLMsBV",
  "key3": "5MT85TJvRf6uNpgs8rwpqMBsUvgBLwSc8HyukQvPBEuVX2MrSMPfuTaxgwY2p3hpeEiCptTKRVjcP6CE1mQm9tbR",
  "key4": "2Ugp1k2NZxhqPDE5BPyBBxmyKdwUfux3uQaytx5mKo9Lug19o5a9EK1JF8JkSabSVpYGHjdxMHtV4QrChBogKrYU",
  "key5": "YXJLPSxD7mZd72kMjWCUhNtSxMWyK4N83Uhc2bbrmzMGfAVRmemkPQr1enZGxAbCcjmUPZMH16ck5EmEW8tV5PY",
  "key6": "2cSGr2YszsfS2AH8KGdoQ2KjpwrGBPJQ67LWWuDMiXCumazb7mfkRssajXnmLBZigSddkRpnFCLM8Z8hQEdkfkb1",
  "key7": "2K8NY2vXcA963Z1BrQexGq4YwGbSdfESFv4XdQFZQjvTpLrSjvCpVtni4yUJYaGdfU5jhXfME5hb32AoPaqWzPE4",
  "key8": "2AdZV2vEGGCXs4povyQAnWc36ebv3A7L5zKbfWgG86LJMK5vZrJysU2x3jas3evvAkJ5GKRVwzzj9k7zHAZviJwc",
  "key9": "4vtFHdvzZJUYTyAoLr3mNTFmyAAGvfqBUKk78rxSBS5vi3wyQJyLTCT5B13DszwqDNcbroUQgEypvqaQzEzew8g8",
  "key10": "4Zo3XM2J8zNHL8VcSdkeTKtGqjjRQiMvLYYdoBkTy77hFTXnQFkxnyUHSP4AWKhsRYttpYF3gj7jQ8kDQUbS44U2",
  "key11": "4HpyJY1eEmB3BexJ8nXvPSFD58ezWjipdVXAx29bHk7ZfLiCpDKSD36198WnRjgSRCEKS5UpCPTqY8ZeuypvuZnJ",
  "key12": "bK17byBFmTx2SLXeqBqBGKf9oWqn4RkjQp5PZEbDsG31ytDsUrnC9dgZe2yWFrUoi3gAjQjKYdjn9WUyJWJ8mJ3",
  "key13": "P9D2ASBjgT2tMkSFjCBywPoUaCb4u7YxoGy1mbfZWnqtFyrphy4Q6GoBzMntmd58KJdGHm4Sef1dFm28fp7hCoa",
  "key14": "3UQrEofkQsw37LeS98h2PXSeEtUZczQTEFDEYq8VXM1m1CZY5SLrePCWn9MrGjRZWq6GaVdxgFdZjjyaN1rUrdSC",
  "key15": "4K8TRg6Qsc4zxEMJ8gc1jfwtCc8TaQmNsXezxjKvYhKRtQNhUC4GibpcArRDM6jPBzjNtJJS48yVLmAhuMjz8L71",
  "key16": "56s5HSsXYxYFpZstkLfAZYgXHhJbf6ZYwspNsHPUifCuTCBAzSZyC5Qd48xpB1aST9E8nkwQTMrsQ94gTbxZYUQ2",
  "key17": "b9YekzaK9GJPdgbAiUmCcowTufA4U3pi4zPFaK7urVrwC5EKReuZTqDmCgeX1izMtGZUNhSahgXbA8v4rvRmTuZ",
  "key18": "4UpZwRsuCujadr4UUSmEiaTHsg52YWXyePhDcrcRPk1cchiRvFjTLygA4Q5NGcjhZzBcusF4XFBHkJJyaXvRoqyx",
  "key19": "24C6fo9pRA91b9u15bytMe68o4Vx8wZVtUs8hgqoabStfxx26xdCQPasAx1vZnFKULWXqEMxS8PhrVbwYXZdsNUK",
  "key20": "3sJy6a2zE7bFmegoVFaR4kM8ppKUvXEW14nHJPYu84ts6LjPSPL6BDpfGdmtFp3PAHBu7tsifUoSyk2xt8gsbSna",
  "key21": "tUkLCjo8rQgwTF7HbWsrxgxB1GZkmCsGkuWDPJ4rdrUe1xGEW9b9wEw176sgKGqWtBDv4uTWHSLhzkQFQAmFiY8",
  "key22": "2mZwNmtk7nfeudf4Jj3Q8gBbtrzZQdRM1JqdYm6MBmRd1nRUDx4ckmWjgnPzhgkeAvGugSLpzvuSwyFVMxYfb1qi",
  "key23": "5CvTAuk5krsbUFNtefUDgQByQ75xQPSmhgfBvueTD1YoFEkmAqUnfAsyFh96vdGAWaV19twg7PgF9gy5Pn69BxJH",
  "key24": "sgQJAVd6GDbUeX65HUnhGMQpSiAasG65GeHq6FnghXhFdZeuwor65LgoRQFtEyUBEEX81fbdts5h4nzQdQ9WLnX",
  "key25": "5aWiN1B4z4wjyN7iVX1kHH5h4CztRrzyeSo5toZeqBGT7MYjZV49vBJ1fsTtE91cSxRzDZmiK8vqha7pSmHaSV11",
  "key26": "4XjGy1iisUDE8JWo1Kz5SWYhS2EBtMBSnvCXaiP1NY3kNBJUBeu3rTnPD5bNwozVkX9jqena49sm6CRQo1xEoen6",
  "key27": "5aPmW1YDVXu9T15tsxDZtwo9EyK1uyt28JF6U2dYKn5qHcMXyJ6kHqe3KeTi4gdf6pT3rDaNsHgzXDa5Ay7NdsWR",
  "key28": "5p1GHWtivBpsjHCF386qs65odTrwVRwbM5JLQM3afStMZM2NivtkEFooejqUwJ9UXg5Db5kTafivcZcF7BAweMcw",
  "key29": "1hwKpHwaWY1vKgRf6ZMhtwTACmrhArkJnFQcJNDWCXymxRqxSrF1iXKakkPVRgbvU7ad1DMDAR5Ef3XHi4yGEda",
  "key30": "5Nb4N3HDp4psRhRZ3he1bMP7YPaYzjtgtygLfzN56jy5e5f66WSNzckLQNxzNFxKKaeX3YbV9U5nLhNjHSCMSvFf",
  "key31": "VTM79ZXVAGMWfS4VRrtCHUbXt5aaqXrBtRw8wRmjrptqgHGW7PbA8o1NvF4XjaADxLvFupxNwacayBiR6WAreZ9",
  "key32": "5zfeyfS1RyofwAQGo4gGGes1JvjZK89pzYAMuQ89P155wsuKwBK5kC3XJxYvHEae3ACXZroDYq2SYUCCVTRKnMeP",
  "key33": "3aKXmTaQLMe4KsFESDxgC8LGaHy2Ms7gwPvCZdMd7ZSbu2b3bPinNJMao8Prp2KQWrTcmboNQV9eUaXNW5M5BQEM",
  "key34": "3d4DxHAzUJSPMh6as3eiaoWVx2fM2eZtjed5FgJFGJ5hgfPizJ1RYNoWNNFAd4qYjinK7KcaEC9cNrTzLPKHuT5R",
  "key35": "5vriAcaFJvsRaBJEeqC213FH4FQX4ReBef96m5bu6zN5P2LFWnWcR1wwbk9GHKHiYy2BX2nJqqNCEVvCZkvMvMXV",
  "key36": "YBp4YEo6jkQ6M5ted1YjZHA1P3WmiCG9h1oURDqL4UjaFJQc4W2bniZZnaamhrXVCiVYRHG5ckzAaATKnC2QYJv",
  "key37": "536p5DUafzwhD6dWjzLcBuBqMzJNy5bxrwht3MJtsvaTwu7EXpZNFHr1j8x7Y9ejhHmQf295x6gr8pF6ovm6wxsa",
  "key38": "5GJwWQ3uex9NKKWRxPTdBX8zRGLXAAr7fTUk5C4MCJHBYJW9K4BWH8WkyY2A5kk6PhHuRPRenHkxuabKLje97TQP",
  "key39": "4BPEnq8iMj6JkHRyz1XWSNqkQnjSLpWUFz4vHjewQx5XscHuu7mBBc2nGevSoNvcZ6T38JY3ai6J3aJaxUsj8RAa"
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
