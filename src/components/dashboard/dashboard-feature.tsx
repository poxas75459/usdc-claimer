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
    "2v3wjL3VexuyfVipuLKtKdKjEZZaqMjsi8L5c2wKZyveRNhfMUwSUqcGkFaqNbnjm7CFf6LwJrRroYkaZBdZjoA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AcfXmEcKcuuXmpdstNxBsw1brBqqYke4w1akXFHA54VqNr1fEtYRTyk6xZ9FvehmcKAMmnXmPe4Z3LoRebzpk2R",
  "key1": "3ckw5zRb62vnc5AkPmgmXWEff1GxWwuCjAVM8mMARdNVBPyrUubLYKWYUiy83Er2ak4G8XZwYhn4RuuZnzCm4hpT",
  "key2": "2XkxQCmGmNzDpxptoAPoYGiwnbBP3vnuXqtx5UjKBoYJSBdhuGmPqxy6jT951v3dSGEmF8dcnT76GTySh2FYmbW",
  "key3": "4wiHsHdHhWq9GmzeXfAgjvBE8cMMSD3XtQi5dGr6qCXTvLhaa1s9nmhQem8RAFBL2b83NNaK5SYeQUJ4VTF1tmDG",
  "key4": "52K6n8NLMj6ZX5jAPLvPGSMLMWJE7RMjf4BPyqDRXXEMi2BqfcJxMyPbuUFhgdNn5S7PrzwN1M2Yk9o2s76MXsVk",
  "key5": "D1DXAbo1ckdPxxBuomkCNDvissDbNR4zT3EFo5VS9fGGdE8HdF1H35RMVPN5GTuQmSRS6pdUCUm9PV83TbPPiQM",
  "key6": "3BJY1EtFMTa5QJVYrcAE6MEF69RYXzSFkUARrcLuXnmbUFFUdWx5p5q2okcGfDKpkmHc2ZCEWRqo3QKepCC7x2Bi",
  "key7": "5CAEAzte2eWHhyr7oMzpd7HRe8ywadFrQZ9JbLvFZahU5xRMJdufNyR5wZ8ieQQGE43b4Bizd37kebTtjSUGYCgt",
  "key8": "4QbNB4wGbvkAYmn5o3VnjJTU8kQKWKprkuUpBwjC8TGwFDhDdnpwyupMGSev8xcx7tN2rTXM7BYF9LRwA5qCJtB2",
  "key9": "8mHZZ4zWb8JFcgPiH4uk4J96p5YMS1nPPFSzMvf6m7Xf1iuk1mjiCSrnvSLRWgs8AX6Bx49V5ABRoSC4fBxFkMo",
  "key10": "2GCN42Tf5xxA2NjqSrGwGcuZECc4Sg8vevyUZeXDrbYfPV2Lj8ecKU9idCbVYNwTvwdanhPbT11pWDkpD4fxXcQn",
  "key11": "4KLpbu5VrrNwWKbr5FYEwX4KGKGX7KPu6ktFZmEeeuFmUSVNWUrfmo14hr9rM8sWBoKHejwpxxn895x3f4HEQX7j",
  "key12": "2kUhmYceAwcRu3Bxk4VvoV1sPXdPW61A4oF3xcgtqVpTEmXAfMbDBBpxC1LEAzwR1NtcUUe4vrKsdg7iorzHnZyj",
  "key13": "5GjPq5k9sUngKzWNUbnzM4rP7BVohhgp7MEBZfQ2yWMYZqUcA6s6nwm88VL4FMNFrZ8G5uNTcXPV8ddxGXD6CsBN",
  "key14": "51FcRLaDBdGXRFQKbaWEMzkXXNcHawFgnHWRFER7inN1MPtnW2RC67gRMDKe7s3WmJCiPiVabAkRJeQ4y8upmr7H",
  "key15": "o1K2hmxX5udwfjczbsLiZqipDxSbNn37ZkjdYRNmCXVMCrYz52ScVYG3A7JsZYACS7q4npWyhXpykkESwuGYHmU",
  "key16": "45zdUTE5UcKEkvfKbxB2Z5LvQEziXtfcmoxsDNT57kJSAG1187Wjgh5PrgJnsY5nmgVjzVbbbe79Yz5dUF6zwvXr",
  "key17": "2ikVMydhqdtGh1zYEK4Gfbz3meTgEkkdqVYsyGZbyWSNbPAeDGSAgN8wYLDijWsZZXo9QjwjC5dT3TQNWNPdKs4T",
  "key18": "CcsYHpZVptw2iFRtKZeG27RbC5dZJbKCs7ZGtdEjv74TRwDRJNi9KdY6SgqwkQmhjuttrUKa6cmPQwBqJTAfWc4",
  "key19": "5QCLtFE9bxy14Zz4fCoY3gVQ74cYzRbmVNVgd2HUpseKaaCpHDSan3cduWo7gTt6jWcU9PmoL3i5cCCaGhbaDqC9",
  "key20": "2mnkarYiGshEiVw1PL95YAj6At8CqCxrmm22ox4RFXApKSmfp91MqaK4KM2VPoDgrm3DT5c3zZFEq61xaUjF9XdS",
  "key21": "5KRAScQEZKHQptxLCXApAQHhuPDzvvw2peSGLyng9jQ5ewgK3ABoSjgJFEyZiek5qUjbMFs3NfutStrGWYRaer9p",
  "key22": "2mBEXx6G5KXTDiCr1HYLMcaSP7HR6JEf4Ha7NHX1YMiqBjrnCYJirjkxZ4on3PQ3p23MBNmu29b9uvR9tY5oGKuk",
  "key23": "51icKJX5iQLS17QFktTseX4oFftkGx1riVYWfBoPhraCtfGEU9jZjhp7MZYwA2CBoGV2eE9LGaStJjg18rRyVtmF",
  "key24": "45WVc65dSFVGCRXuB1RueMoYjBgHfMZY1jqmjPZomsCsz7qArW1uG3hZhWDuEmoFi17YYjjYjqJwpdXUN5N4yEUM",
  "key25": "RCmgG59NoCGW1XssKWJueRWXTfPxSBtdqbcboShycR47imRwymvZXsJnSYMjYppsUtdZBrH8coZGSmGUMF8AXYC",
  "key26": "2EAWNNk15ERBfC5fK21GpzUdGEL8Cf4Vgny23LC3MCkXy1pCTir81zXkj9g2mDV74LrUUx4ih5D8xXmQB5n8Sdro",
  "key27": "29P5usWupEAFqK4BHkGZY4nTqKZ6QzCqwcPV2WUausQSchcPAyvndfTvad5m4VvmKjM1fQtVd2LsPRfYw4GKx8ae",
  "key28": "2QAt8QjRBCU6ZRjbYPKJPF9amBDuLcJH6TFMMhacEKLxmN2h4anDWyUzrLhg23CdLMRSQddyHv7veosp1MsCRg1p",
  "key29": "3ByVAhUJ6ADJ4miZNt775KD549tgAxN7UWXqbz4macQo6LdyYY7G42PJMYYzDbLGxTzeZn8nh5BF1vfV5w5CrKxa",
  "key30": "2uy2icSDPBgHdY5meDUsC5uPJezWKbWgNwyYFK4yQdj8pi2pB8W8FhAAe7QHqzdaDDBHyQpJJiRTaf2Xxj6MGLM2",
  "key31": "fvtU8hNfQGnsLM58kZa6xeE7uCMSgpbmX9jcLsrqWJWWW9WLi9xLo5YvBvESj4YMy98RamxWnBwqoV1igrBkGYc",
  "key32": "4cQndWtcCArVXuwSiKz7xBJYdLPqxuJt1vZjfyxEBAXDdNivSnYgpaZrSHVrwBfxNbims2yysDEQjN9ydsWCDuqe",
  "key33": "2BFyzweQ2ZzUf3d25Sdaj75LQf18F2YD37sLk4woE99vy991JYi6uGCajfVVKLj38QhUBWT7NAfjR2dip6fREo35",
  "key34": "k5KqSHxN4CZMeTkkjHfWHkkjE2tgQS8dkyxVzRE3bAS2hLyXStt2Jm4a84R72FcP8XLoXatnQHLTuPeeV8Z1VUu",
  "key35": "frQVRq3Ez9c6eTbLkwwpQQE6No4SF3EKsy3wgUs7BMn3z6DnL1E1bkYDfBR3zv2Kk3kWobxJ5ninAtoLKbUFmBY",
  "key36": "5xMZgk8da5YRENQpjmwXTWsCs8pTdNtbNy3sZDihGSDLpEpAzn7TyZ8e2SNHoZEUH6Jtgnso53HPTYb4haU1GnKD",
  "key37": "5MTvDztf8SVraFu6JGwnXHa2VLpRdtAtydQkVDN3MWngDFrB7KhJZEnKV6augTqppuyt28pJASsmuLTo21tceN2q",
  "key38": "2EnjnDeMXi2mLmfVrVdq8P8wMGpphWa7BH9PxqHfEgGi2EE3HbJkNCQK58iwmzEZGJVyBHGkA1Sw5Wd5SZNpHy3q"
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
