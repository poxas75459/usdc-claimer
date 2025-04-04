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
    "3qAXDvVx6snEBCnG36bBLULeTNqjdjneLfHNMPu7U6SczvBVerushuoTdKeWXfGotsAY6jUvXJYPFyUbW8ar7wtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59hRi9tSbf9ErK6MnNweVdQXyK7dJVazMmpN8JLV1Fgn4qgD57DnzYDp8h18RH4HhCwyfH2ronnXWiHLFV2RgWrF",
  "key1": "5PBU3QucozmjDCnvXBmL7NyivniRQw1WgsA9qNt7Wp4BTAceU2ot1UF2NyosJ8RtWWp3CZZU6JgXWbFGFsBmq2oG",
  "key2": "Byuj6UxiL5ZULGrxvMRjjQqnyuc6uG76NvVNwQTkTuPMHZb2DMBd2wUFd6FZFCTyjZRayK5kFgcetnvDwpp4mTr",
  "key3": "3BXQu9xeZcfycuMbUorvwaaQWL514JcjzrdRKcQeTrfMYBqVJWc3PNovDVZJtgYEb4XPHcdLL1barTMnPaut1kLb",
  "key4": "4q7r2mGwtjBiJ8iKj9rjchsBxm1qCqn2Ey5aeUt2C4AgKugiu6nFt7g7yMvboeNw3jki9DuhrRLWjDL1hj9qLx76",
  "key5": "4vZLQUzRqHvJXUSUqYwtJ2e4LpdSrU5AmUt5sDd84ABYPcSzcEvTMeWhqXhHEr5zN8aWoSGwWgt8eQkAAsLmqJW6",
  "key6": "31koo4gmU1E8EBoa8PPnLBt59BouCGUVutXEQ1y2qWmfKq5o5ea8njrXbxKPJphpkXkwWiAx1ZqRHLAUWd1a8dhG",
  "key7": "ir5VnAXeNWawpFZDgM3SNzvTuwdr3uKuMknxLQewfQQXZ1eEfc8Nx1xWXTaMk8vDc9DShYVdeiwUF6anYCyGd8S",
  "key8": "2HkpPqsp8qUZU93RPBX8haaa8dM5KPNSRLC382nfr1KKuC5QCnx2wDRdTozu2TafPxZfBfugbv1hbtXrLRWqdaYG",
  "key9": "66XMwVAh5AmkiorSyAgy7vyKVKHz5hVPvX8edvReAGjnqxztQ1GZtZYeqK6zyZRjQnVmeBEaya6aXtLaPxujsESx",
  "key10": "2dvXWFCCyxnAMqJoMU9aH4k1NcVJ39THpB5CCk7CbPyUni1CunY52xpK3mZSibaAQyo9fZva1zF8VztTJvYHTmuP",
  "key11": "55MrWJeLgJFxeFABVDvEgLwmMw6jhbLGk2iLtjJPLYrL5Cm3uXYC8uTnvQMUt6VwnQ4MuLgH4FPjQyjLWBWuFDQ1",
  "key12": "5hgvz3y4mFr1UYXwtMQt665mdhdkzwiUrUrVb4xRTcj6k9McTN5xBEgEzSyTTSVUrF6X2LFvkX73nLMcdSJZbMss",
  "key13": "3x23XfDXwDoo9R5KurXLRwYnR7W7osRV5CKzb7f33BQH4nf8KTyZ4MYecLbXB4YekU1Do8PGNHRXWYGmypZG1mAk",
  "key14": "2gRvoAWtqyuq2m5Y5c8ab6LcyCq6kg7zhEqcV5qn8re5JSFe5suvNnBhk9pEzfWkYvyCnnxNvfSdaq33X5Sv7eLo",
  "key15": "xSw4wwPx5REAuTRUo5xdrogUJ1TYoP2nSKSjv1QZjjPGVr1DQ6MadK6m5yxibJb7VEwK56Ehz1tFwHQfhGqpbHS",
  "key16": "2BjVD3B5x48rLbF5wnjwSo225neL1qtQ9AnBuDMSnXBmcXQLgMtgkB2CeyWNofUdn4iNbGrAJLoGupv5DiBLMQod",
  "key17": "4FuZoREFkKBR4VLwL6HdyfB5X1PfX4W9HrqKU979LvHRhPuAbJhWVK4RqLLGtj8QfPXJD7NBX3k6rbAp1HmF84JS",
  "key18": "48YuvcT7WZBMQb4q7f25rhaniwQ3zsQgxGwxdtRZsGK9aDR4mDpNPKzDtWz4Sq6atnPzZoUVnXzRAyd9x3YCe4YY",
  "key19": "5cMxd36GosTLgTJmVfhnfJrRXNDjoRKCgVsaHu3BSz4wrj87XyCRL8BHetCDZVhMyRmzXeFDPC7H55GCVprCMRHe",
  "key20": "e19FXPqVihqNczHxLDw9YVQZ8C3cGvRFyV8p6saH7WTAf7vKAfWD7oAdEN48r9RTbSRhy15HD5WtTBPeaBB7tuk",
  "key21": "3A1B3aHDNfSkqCzZVK32fHLaGCUVpde53pQdr9N2uBZWYaXETHknfDUPFzY2dKqpSMUBcrfE3q2B311aBCFukfAZ",
  "key22": "2k8PDH1rZMmqWvAncx59wiWHpX59aVNyKA3v1ejCQTEDJ2QT3U1i3dq2ib3uP8oPKA46hVoRKwshEu8Nib2bXSrP",
  "key23": "CHzZgEXkcmgQkMwyK1mYjKM9UqnDzmww2xvvezN7dZRTFNjWHakzm1ijUW7wncYVeaGkg3mn8riAFzAazCMPJSi",
  "key24": "vV4wKtxL6N5m5TBUbgMe2ebnRQLFMbdK1B1ua8QGBePkcMCT6DZjB9HsYQQgcQE9THsKv2KaVyHgrweKxLuHgYm",
  "key25": "2SQnssTZirshAkoXi15fpLx63Zv9yyqChSKfQw14tKHepbhHtj78tNPmMDo2Wq5L3LDxRdFxaySJNJPJ9trARAK8",
  "key26": "2Nvzue6dZysqD8b7KPV6trMQQbo8MoB66BCHgLS3vYHefufH4msCjKnXrzfazq2wzx2t8PBYgFGQjhZ522XruYBL",
  "key27": "3qN9Fjno7sc1Ktd68a5gXSZnJeUBV14Lgz5jeMNFvW4FvKrVq8b3T9AYaM5bjnU49cYVHSsq2VNhzKQh5kzXPRi9",
  "key28": "3yr4TuX86DnXcQ7YD36Lt5dEhs3XDRK1qbi8fdqBd2HdW3wh5kitGtFRkpkD4XgPyuupR175BWWkqrjjNEEQVyct",
  "key29": "2PakEvWJNzqAKhNQLCbQYbV6QxqTeQXf6zrkVrQpYxweqXaYkYo84qY5BNdkedWofexRRqSkb6G54zb3cCg7in6P",
  "key30": "4VyBXaam2aeTGz25gsMUUsqU6PQnEtSrmMGjaxkcjHr6AgtgGGhEniPUZ12yBhGkyJdvFRdrCCWJosDmV1zfGkQ6",
  "key31": "4Xtin77mbqTnjSCEhnrNv4EpEfPjpdBQuADxG3pt9JEFbuDCW4j3gHphf378PaHeNedyNRTBjXCrKzjMXmaFgNX2",
  "key32": "4pEHxaC1QeZeMBH8uGTjL9ivuzaKFKYbSTMFCat5PG6cCKe6dtmaoiJmwiKrCE8Kbw13QAmwH9UFMDV5pv5aQpEM",
  "key33": "5i1k9CUSGAhXYVuhbxB9ji1ebjhf6zCJTHcKSf92zdCA5yaFfDkRdF4xNbgwGXNFT2Gqh5fdbjDvMwBEWa8kjqmd",
  "key34": "g52uSFm5nKUNNSJ7FQj7sxJQSY6T3X1eS3q1tSDKR1LRQdXfJJkfocfmkqRvfr1aLC8hBgcAcvnPQveaAmaLwhv"
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
