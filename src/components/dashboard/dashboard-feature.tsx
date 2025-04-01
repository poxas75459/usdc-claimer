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
    "58ytQ184rs9nHWKciwzrpucmUrKQhVWLrYKSPLoMKMsUntKFLZ6i9YU536ZQC6QLgbQSkJuQX4Qq1asHznDYL1dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wxovjSokadRKP526rQ8vWcuSAda4hYyuYhTn65JBMSokA1gsUHmS6ra6xiegvkkZKt7DfbBsdNYET4zHfxgtGjm",
  "key1": "7ZxMqjn6cqWrE6BuMdYq2YWSx3PicM9vNLJqfMQ6nX4TECGKnvUkqccSZhF3gywtAzyLMGEyqrUbZLsrRQAU8hf",
  "key2": "51nguvzsudFC6KHcieUB8Q87QJf4aWqCqKGNQD8a8mtogaCKf84c2rcHRMBAjY2HMexPRB2r5CeEjDYRLEwocWY8",
  "key3": "2pNeufz2z34b2vSfHH8h6EWvLU6jEtUAXFeB2LQySohE88wGtE9WhQrJuhwMFDHHUQKQjSw1HM5k9qaxd5E1VjG7",
  "key4": "GKXW7NmUtvK4X2exuBM2o32yDcGUmdU2uPjE5uNsFRqEArPmHxBcjWVmus5EEaznkSwczXNdAcwR86BcYo9fDDT",
  "key5": "5a16WvigCQWGkMPrqQQoyEaJ5X54E6M8L41aHuC77eA4x7oHrLPjt6bE9fD9hB6hqSTnrzEARiZLDbkzmqvQEvZj",
  "key6": "5gmEAytJJEcW8vzkzhQcwPcT9P2atJd7AkwV5zKqFztbFKzTpySx65WBHhpt9dRvxsWH5jNu2ScwUxMc2Dq9fjGw",
  "key7": "3sbfPYryhESWHctqrSjgis94FzCyZ2kia9TcydsSpTECtn9hMgS8ZF4hBMsvTL5U3wWf1idbaitax6ADtZJPsUZU",
  "key8": "2QMNzocFmm21xFQfDfANAPpND48Qm19A45ZhWDPkoagy15hCtYUYUMreYeyfspSqgGEuj8sBZjRQBTvkVxxC5RRn",
  "key9": "4TP3towsoJ1EyJNtXQJEtce8WpgkeBSiWSWcKaX85741LUQ9zL7CYrjdf5haaoyT7jrkhzbSJqKCoPeakWFiHWTh",
  "key10": "3UaZTvwb5z8EuHghipsY8hpYNGWEDDX8pKxjcePzVtpWW218LQpVxFNW5TbWfpnf1z531fbzztGWn1LafGy7To9L",
  "key11": "TXjg3JomtWgSNmNF9iPftbBfzRY7YBbj2edxq5kdVbfPDMUNUx7duYud2oxijbvUMg8KSJcAHjnY8CFcDCYgVRR",
  "key12": "2o3Pg3fDjDGqAMggdVmGvarfpRGnJPWNwfatxKvNUoaxtP9vpFLaU6pPFkHK4Sk8TWnuMG1UEHLBsTxdMAFKHA1b",
  "key13": "NQE2DH2x6mofN6WJuaXEijESbSj4zsSufJTXkUtwnzj9aa4PsRtnhVCkCzmbGdq2pcHC4iH2g7YxSFkwFaKUM8U",
  "key14": "iauHvbqDmUs9LXtnV5uxAZNvT32WCMo1Kfpz59sMETcnzCAQxaPLkVprPHCSvr9po7wJkoPHg53dMyxe5CizhTY",
  "key15": "3MtAGiGZB1YoJCZe7Eay3eyH7xq4Zy7jBzPnExmHZAETXYKt45MnBrJ6vNwFfVE54DpKYaGLqU2Gs7bshJ1RSawY",
  "key16": "42ZhsHoRZakZ7hF1Bbm1zsY3phirKAB9oyKhVWKThHi2yGBYifrQNz6duzCGWyLUeUPYFCaymEwks2jW9kgCHxi7",
  "key17": "5Pg1HCCgzXKfJvgZzSPzUSPuBFmfXtydmzvG7rB2cfGYJ7dRVLrWmvTE9c4ctZNxvANoNHEZ4aZ5tMMbdpo1QHfV",
  "key18": "4745j4N3MZVGf2KXczoTwWSGgJtshqskaQjv8ssgPbjgqpgZCYsLDRhYo9USDXdXpY7U924ubKqfwcsMQkT75rKq",
  "key19": "kbX9WiqZeZrN63KZf1uB4nTEntXcauruJEhZgDwuhHMTvCGDWK2mW4V3RzpXqieKZnwudn25usDX97fCvnJv4GX",
  "key20": "5pnd3bJK1MVKRjQwynJkmGGb6KwCXAAWsqDdF22VxA1BZJd2j7EEc5yqqAe1VtWqWK6FsX9r7qMLyx79WrMUXiBL",
  "key21": "4MAumTSVrtnVYnMdi7TKaJv851nJrwFtufXJjsMUZMU7Q4pxQnENqfiEk9nySv7DZ5RCD7a25MFoa8Kg3FgZQdqh",
  "key22": "55LogAUTfF8DkxnNd4sNrVBmdXmgSL8uZcAEouvKTp5CqJjUuo78fKEHqPK3VPDervdxsY437HZn25iA5HCTKi9p",
  "key23": "3TLRUhgqMR1svDpp8j85m9dacN1ruebBwocwPPyrhjh4aPmd4gHJMu4R2CgJiP6vAAAtzh1KUnYq7mugvHKqGVpV",
  "key24": "5wrFhEpYkrjUPB3GuFPS7BssZYWWHREtbXtMVjpDMdFFqVCux6yXncgg97QmTSasJSutFruSfmq5ANx1PrNmfCkz",
  "key25": "4J2MUReJ8M5B3ZQ36gaw9qguHbQwSN11yQ5b6hmKhiuQLrXzZC934GM5wVDsuecqRThjncbJcv5nZd5NzcPKg68x",
  "key26": "5bu7aUK6qgJy6bFCpc7nTjK3t5dH29jMhC1ApUnWoqDv3cXwpQjBQbPPS9XSEErvrxuvke2kBN2HYarHt6kPrbZf",
  "key27": "5gM8dzguHgwx7hsS7Yrfww4tWbJuXKhXDMypHGpLzPqFrTdDgb3Gi1FD7A1qJQHfa27UCWaqm2DXFy1YudCWYd42",
  "key28": "54BVnzwV3wNwfBqgqPrdfUCDSRcTz5XzyjJ97cw5xsBVbLuTX7KQryoZUzo7jvJiX6R82zTUoVcoYHRS7GoWruVC",
  "key29": "iiC6S9AzNUENb1B1FnERYDAZY3S4BWb43WXSQNj4AhictEuxW8FcHgvYoTT5u3Jgx6LNhT61Wax1n4ztmE1pFjh",
  "key30": "NumoAA8GEE5BunFCe9yjpj591dTvR2Dvow6VPdNceSS73nQaL3GBVWzMMsP7eEwp8sZDEuTmFu74qTcG7YHuK1Z",
  "key31": "5mKKSa9LNQmqqgtUSh6qxutubp2fm27tJ9LGf7wcHRzrUVQGzgitCLYq3m6dLQjow48MEZZhH75CrmsbMXaqm2EH",
  "key32": "4j4KtvydWvUGtzLJLrQoVryfC2wBon8QGrGiEtX8TgUvr6t5nD2Ga96awtHRM9JvtyzAkg9L1WGLXTyTdDtNjYwG",
  "key33": "67hY8MUYUEFZGJFQ6hcgupm95M7eR3VwT1W27vNRDwViX5MadX4dPRthMRBLMGRjv2VwYmRdcqAwc96EpbWbc9My",
  "key34": "v3eSeeuQ41ntxc5SAUCrJFXXhpG7DbmSrExAK5w2n176sq8ZBMWsNs6dw5nSPp6vkibyAFAvVVvCGcB2pwddXKH",
  "key35": "E6NmCsgDmP4mBxASznxWn33ZsD1QqNtC2SZJqGf73dDAeDE129h6xFPM72hAMgFFhbjS6fky6WKkMXzdccMnUCD"
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
