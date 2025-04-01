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
    "prsDn7WzDXfdVbs2FvQqnFSYoL32TyMbkQyqGAXr25JG69ajheX5amjTnrap7i3KQJXQH3uh1x1eQQNZTb3PNiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2voTT3ozVdqXZE2vSMsYUjVMNwzWjJGFxG8kU7ZRjHePZx8VJpQBeavqqPH8ZLuE7wsCbhTvh4gTRHLUQvaK8PJ3",
  "key1": "4QJESKRToJzrYbrSH3SqfV4NAv44BknAjhYuw2vumbwUYHf9CnEUHsPjCYDYsb6Y5g91z6Rk9HGFci2JPQJd73i1",
  "key2": "4xJAYRkC1RmhPmaP5dr4jqMimWNb4JwxJDC8g81YLKnXvEouG3M4syKtvVRZQrT6k5vmCj277FDN37LUTMFR6N8h",
  "key3": "4GeECvTEMMmw1QoyA2qjBp3CGCh1HQwaddK95RpW2vCQUDhU3BxXDgXJKyEtdUyjX5vsk7EGSD1NcwQnsrSUuPw1",
  "key4": "EP8bxWGwszr8sh4aXDuJKA545vuUbkvnRd3Nq5fQJQrBB6jWy8Cht58yvycc4HQdLmqaLZmq3q3LoVFw4giEP3h",
  "key5": "4yemi6Ggn5aRQwMkrHhCX3DwLzeDMQxDeGFdDuvbUcXSz1ipYhLzSpLA7oZKBYA7hHoich9baGwBd2tvDDksouUN",
  "key6": "5vdjjLxHXqDxgF5T3zs1EbXo6D1K7QyA3TVAryFjKSCRPm4RyyVuoedom3ueZ6qc7iF9YKUvovr2kUfCAu5AZztL",
  "key7": "44UkWZXiaj46tkhdbbz5DoShqRzMZx7igyptQdVDqqYpYamd35wt4iHGRvecDTvci76zM7nY7RV7zmZwmGvEZALD",
  "key8": "5vmX7Z8eNLgwyx9MMhLJGcayhZkaEsEFE6Ba5sEpXQ4hpbfj8JvhRV6q4ygaZnicQvwhGqgYjPMVcK6qKDiYF9f9",
  "key9": "PcNfkyo7wQia9b3ZX2eg9zZ6fLWLgwXqRHyYWAK3y8WvEDwqfZ7Ve9TvJJg8jaxTdpTTAEZod9vViwM8CYemUvZ",
  "key10": "8uRGGoQvNcRRFhf9XWR5c5ZgG9donrkWXhNxNeseQ5zs2gf3wFtFvcyBo9a7vD9K5RfTc7GxGkkxYH7tKfG5rJn",
  "key11": "5g6xkGaQ9QMUmVvXrbWeXnnvCCqgMrUxYdJTAtKKqgzFTKaTGQQDFe6tFoB6VQ5Wq4RBsq5we9sqw7pWbhFm9Qsg",
  "key12": "5qH1CSwbgA6aQCtCPMA7Hugu6ZNy2aRQ97qkpyXEwuZYeBdJxqZnnLdJDRL7XBnfxCaRXL88UHHTdGfjjb2QveYS",
  "key13": "65Cgz9sCQ3DqhLajT4VLubn3qNcgCvgwaDYrM3wweJMZyFELwsgwwCSgdVFx6fNjCdT1UzMMBTKvbMV7LoEKfkQL",
  "key14": "42G3M2PmNWqKWuWdCXXWf5uAvGhXHetmgGyggfUcGyowGdv5CzjSqAPdAGL4SSAu9KJMHUgtVqf37pSTTGqWbczm",
  "key15": "4XjHPbEKTrmd3UbZTp16NhWLFafpN5DpBipEoJ5v6vQDo8i9oJWbJFYiZxP8fLe8HCR4c7asQBMFfBHjELpMFjza",
  "key16": "5AfYt4L71GWSs95E3GfyB6R3xWs5PKvTrnsZ7jHurUeX9ao47FXMVm7tM4P7Qz5Qv1AnUq6euwwt8Jm7jDYg7bh2",
  "key17": "49pzc3MCk9Vmsq9BjD3cCzqTmBZbepDgxRepzWq6p4J7nrj7bvPDgc13as1ZfwMQdxHnjTLA6wAKYDBzaQhDGcjn",
  "key18": "hh6Xrgi7RPTUrDRUvDCrSJgqzegXAGEKXK6yKUC6bUZwebkot5xrQvDELsssbvKG37MBZ8Ym4MZr9qCGDgWjDCF",
  "key19": "5dCNRSVGW3RMznoDj38GtyzEe8BP4k6nhAk5ZDoc2BPZ3DnRfudzUsS4XEasXiJkAXaqVQVg27C2W9RZNVMTo54m",
  "key20": "4XHn1WGEmU2Rw6HDZeCbxfWhXrw62H2tjZiK1KqYEhU427EqgnnBe8CAbWNkoxhsPHu6Wr1QC6LZMPDP6bif6pJf",
  "key21": "GpWATo3wf3t5vo9qRamcXeUTRbtgb1LQQeJ4GBjGfzktyZxW7eBaPkGic8cvR6VLazRzwy8VozpGs798rnbNr6f",
  "key22": "5XX2GMddj8pkEUQEQPLxSJAqRZWfA4iTqNK2Wgs8d1xFrvjxxCMJD2aN6P4XUV53raVaoGd3msV2pSjHyvQuTtQi",
  "key23": "WXbwwBAaeYMNWpzwgBhGoyQ2R3FgE6rRxsCzFEkRonUG4nLALQbheTjphzFdCa1K8XcVYwEyc1AN1Mud4kCzP1x",
  "key24": "QzeGjpX3iHXn2aJVDa6sk3ekxKWqu7LnSX3svuimcfZk2g2B688Dn13jRyay6NAM64H2Mg545e75Aar4kqN7h3j",
  "key25": "2dWTbkm5u6rtYKaag9kiXGtaGHuLzAMscbuHrdURcyk7PeLEtwXQBrwFLDusxG3QrT9vFtuQcDAtrZ6K6LYhZeMU",
  "key26": "3TwX9bqY3RxYH3x2iRyxHWgvYEGmSYXpcr5yevL5PnohW3TJ832x2VMkAFM2PqEPnRnEhaLarJEucZxJTABK6fnK",
  "key27": "5Kd9acYWa7WwDLNxAtCjzCwfFGE75uvzzbKH6u1YxxgguVq9UBZBeH3ki2Fr1qesdpvbRHK2ZnwUCFrWk1r8TDgS",
  "key28": "3Rjc7iVL7nNW1CY1Xwndb5uwyddXn4QLhtBU2g5pzon7b9tMXGe7GfHmr5tpd98HX7BeZdvKqt33bsFXpJk1CnDv",
  "key29": "5YTqmirvuEU2KKzfVoMig32iyKxrsAHv2fyhfNt2AZ5h2tB15xh7Fkpvb9fSrxXSp7yC6kVUo2E5FEJ1uDXdX9Uq",
  "key30": "3n7sjDDaPHDrAAPAJ4JidJEHw1GgYrw3s1zHFFKKHiwnvxWMyKHSFHGCTa8xq3cjAhM4APbZ7KuWiGvFhWXbe7X5",
  "key31": "4jaHaqYLBoU9nMqXaBQMCSFYxVaE6AGtdhzCjWPehfJUYBZJHaHsUjdUohbsdC2HKdYxa4nsjcG1TDDwqv38Bjw8",
  "key32": "2P6UnGPxGnBqh7vC56CSJPoExuMf6hyLeVmFoWKJ9WYLEteQuLwBx8RZESk9XewtkRbX54PQnAo6xqY9iHU4PLTE",
  "key33": "3TGkbG6JXdYgrUUj3uwRdu77hapuQFoTUYJuPKVcyNjYU4pSHG1usf52cgxrBy7u7u5uGvzoydqxt5Mj8ANTnEsg",
  "key34": "SqTHwMVQz8vBwSaPEnawDPuaZpTDEwQhNfJ73zf9JmyCBf6vS1bZFxxehBDqWPfb6ptd1cdeBweiJ56RHx1MUvc",
  "key35": "2zLve3vUv8szZSQVnHrVEwuXyMyarfMwGUGZu7cw4FM36pbErv2pvKujutg9oF7frL8pDb2wbfzQMy3U16pQNxgS",
  "key36": "xsnCRR7xnC8LTesEkRFPjTmxdAuDga6AZn4rGrb4peEVfbyLPdHVozR8BafzcvyUoSE4TFBGpMtmXxrhFezkMXk",
  "key37": "2FL3dFzHo9V8uSh47YysXkgYwoGfx9Se5HzmbwonqwaNNciR1yg3unCa31fW8WEqjMMKW8przLZKmRNRzNXJp5St"
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
