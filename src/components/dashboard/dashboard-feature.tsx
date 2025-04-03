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
    "3pEvWSmwuPELqGFHJkMkiqaTFyYpH7Drmkt8z3zcwfAjAf45gS9Yk13zzAw231RL7SaS1PdEGgLQpR5CVnr23iJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QRfZpZAoAQQkNeduj6T4LQGRrC23Hhc3kvR3M1pvgGRimUePdiqhYHWYVFGemTD4dbqigh4i9GFGcmZ5a42LBCq",
  "key1": "3oeBPga4HGrv8ryKkYSkxWoZQKdJ1hVVSX8aLR6Rhhf66vXsyxrs7uc84NRsyv3GwbW8UFHcLRFfjvCWChRTSpfc",
  "key2": "3dXaj6yqYRb4Ega1kzMxgM9vgVTUU9jhvkdtrqVCSf7NBKtHkCnFXhpXzgVoEXMzhB2xNpmZzo7nySERMcZkNnWc",
  "key3": "4YawX2uuvSqYp3XmfAmHsbL1qeWyhdEAwuBMWesfUHLGophTYVmRFWreQXuLuvw7zsK3TTEhoiBNjMskrLG5TFCi",
  "key4": "5XMZ3A33jRdSDY4h62vE3JhNNXCev76W378rfZ5tSQXPVEGfpD8YVVG9tcaEyjBtjMiu3H84Nq8vmLA9wfCtXeQA",
  "key5": "2mR1YGinFnhfgX7NfeBn2b9gUBcugN6ViTXMW6KsJruBeg3on9g8JdMWegWurmsZ5Y585fhwSz1ESJwyKgMnQbvM",
  "key6": "67juVbWBrMhE5TiRUbYXs3FM5F9NYXzpr789mcd1zmdTu5wdDAmJHjmphH88i3ieZbYQfwBhG2Ms5hyYpL5JEcMw",
  "key7": "5uYy19x8QHnuaQ5PE2QBTRSraomC5tb3s6HmoQp5bm5puVaaXmnr7AxgLtVU78EeoZyAK8PAy9BFPrPiuYGbCWZg",
  "key8": "4CKw1foxtw4U3uH7hwAosbiAQxFJxhqHFxrvmdBCHUdipDJU8t5Sk1TaXmWyPdDY4bNqAGvBF9TcNvjG85SZn9Wq",
  "key9": "QyqjZhKryiWSRQANz4Nhyf6wwkvgGf7q6fSDSoWqaSLpeKi5a2KxJMe1afFQyoU7D3PTbNDLn5JeAtPqVmPXNoP",
  "key10": "4bWzPqx3WYZVEGiz1bCpz2VLC5Aqh1pheWukvFkWYe9vSBLqAAui7i6vkHb7RJsxB5BPKKvzgFUaKvJpqakDitFP",
  "key11": "2D5Tyrcw2KG3TZvCwhaQyKptwdMaaWNb7VRnkn6NydZtmS7ghJN7PvkGXhw1ijhpDhXecLsp2p5P32ddCgj55hvM",
  "key12": "5r4T7VTNCVLaZCDqHAJS8J8kSyZwrbwrDSqdhtmJqLFdx1sSRiEpJ6QbzRKDvAeq9Xmds4nRxmuio4b8pJwgjE4E",
  "key13": "sgX2BngBzFMQqmXwuwAx82HGcwu2tZfsZqvU6FUrLsFXnEM2h9NqL2qCt2bBykA4K4B2X1B9xJR5Ha2NaydCBWK",
  "key14": "2UpLUgRpHfPzmWgWC9bu7wrwnXujWMk8EbjC2ov3wyCiCtAyBkK7ud145KQ9VVVnrCftnKQ4B8cTmQZXArnWARk7",
  "key15": "34ganFVTA8Wmf4f9YUEYuk4q1Q4R7EKVBaKJscngbmfpRRTE69FTtkrmFWW1ZmxqcKN4MkNnHtwmZbUn2ujs23ut",
  "key16": "CbqKAx2Z8GwDPrZqJkT8yPnvTkhofXdAY3kNCwfzvfz9X6w1iqUDhpwJiahFwQBmJKMHaoAaRz21WLGp1gjhPRz",
  "key17": "2HXWJLWK6nz1ypHJw5zXHCukpRqsxhyZ9TyNEPWNdMysJztzsuRzfjERHHWvFCPyqqoWh9cnCsBaGoyNkbmyuVvc",
  "key18": "wjBKLJXNRJ4JNyPww4DKU4uS5bRpecePxWPt5jWabNFwkMdvReCpDSZDrKkJJvhkFji1c5H6UYwcxXrYJXoFiH7",
  "key19": "7ENqp1o39uHaAYkzY3Yh7Du8kgyZ2LZTiyDXtHvETYuverdxyMJWc1rnX9tdNp14X7NV2ULfzxVFEnCq1Q7CXxX",
  "key20": "3AGgzD5sx3EmbhtJVa54Un29AtBPVsPNXgMMkmXZRUaGykehnKe7FWdsNZHY56PZ2FM3DrJENffYtJzpS2oWwkGP",
  "key21": "4eLbaBwk4hscah473Lf81G9AJ6jyh9eqZtZQh37TDJjxHvzActkfdqgJ7BSSMswJXCWqam69d2zBpoiV6AVtUuDn",
  "key22": "55AbvwCaS5ccm1TMw26h9Rwifb3v4KTeM6haW3GgQhXzstix16rDQZa5j91ftWbLDnnT2EQQdsBjFYztriSfKhV",
  "key23": "4js8KQHZnY7ftEnr2nh8tNN2qQzrBJVA1ubZ7BBfm4YLL1h8QGjMThuV4bURdPG4SSaoDB53pahCSsJcYzYHNxXi",
  "key24": "4iNSX6EpacCBjkW36jsaq2f4efvD5AgCth439AV8QgfUaFtfcjLo57kc9tzbxVYsAD7pCimCsaFrF5XFmpea1u1f",
  "key25": "VhV1rJFwUopAUo6gEbXxXfrPGUMLLzMTcPaE29aL1HAsxkboXxqTWrEE8U6dnuhYVGp3UJLxj45quCZovnM2R2u",
  "key26": "57t3p5ZXhhrgf3qyTn6fsYmSAKkvoG5DCskRnCoMM3oDaT756fPxqisuHn8GAyRtLjwsmbXVNABf7Vp9N3tBsTWg",
  "key27": "4zZDnKacukyMxintXuWVDnB6bPGChT3qvSbeJawNRP4QWxHJrsR7Am4uLHvdcU7Awn7AoT18hkm6TNF2aMETqg7T",
  "key28": "3wruKaTP4FmKfRLkW92sANWsW3EgAZnd62FERdRw7gbKFnZEsa8njF5MhNMbuQzb6QCXj4o6c1GKMrifgduFsyWw",
  "key29": "438by1BG6WUxSLa78ESi2VD3PZhYrPqBvqvSuJUz7Ee91YNjNEbMXrE4Nrh5wrZNadMAcESbjkQ9jMM5P3qQf4T7",
  "key30": "4Rxyx9vhLD4uLuUP53JnJtqMYBxdHVRgu1pVytd3FtTBmtk9HF4ynMatiGv7GeCYxhjcKQNXPxgmhS6FeHEhSnCU",
  "key31": "237Z99hjwiFxQAaba2zrYfKWijrSTRFP5WLb9YtHDEbYi35CxKJjrEpmH2M3MWcd97nsgMHZhkRNuF7mr6bXiGkp",
  "key32": "3gFj9fBjj7S2PyhZc8eXvPQepcSZeYxPZTdPxWeddVDYsJkdSn894mWNk53KPMcs1AFY4UxrDi3Vqp3wrRTBDUiW",
  "key33": "2XjwoppSwAi9N31rixweKweagL8JAzMrMALQZKXW9GZmUKHsYiuRddxJ5thpM3yW7YkPF628fkQtmsQ6BG7b3Q54",
  "key34": "2dpofEZL6YfyG1h7sambZtWisZ73T7V9KiEQvHAUpKqnshfHZzgvXN79TfpVuKjK9YsGNxgFPUYNZ8ZSnk5FLVNv",
  "key35": "3VcqHwzDajr5BrTfrr72Ba86s88BQDXZE8UmT1AZucqw7cj8rJMQhXgJfQrAonefBLPuRo2ipwYe9FfAtX2mY9Mv",
  "key36": "4pghVdzk7KYaaEzwad6ptvnCG3qgmEkjWGW6kBT9UyX2fsWt78qpr3SBjTY1vbsTeh3JKQVvetwU39CtRpjvp4Z7",
  "key37": "4Gwew3Cinovphx6SfxwoBZELmUeC4u1jFgjYduDGXQFLxywJAAy5U1cU3xCknGtcg7gywKHRT99vWMWz6T7pByN5",
  "key38": "eWBmfUkGqe2aPjKhj5pAG6H7GxzPc2JkusGtbPpwM7nVsMJztduh8egwHGLa3UGDqUdLs6NdsHhr92tEhhfbuHh",
  "key39": "3ifomF2MNFjjwq5xnTK6jB4dJJ33Eu32SgiDzxWQxquGyt36fKBFHcSs8BprRULvBPwLjd8NbdvnZGyBP7YuSxea"
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
