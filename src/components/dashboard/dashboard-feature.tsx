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
    "3mzniEpvsJgDaGvSFffC3nTbEh6DafTuAhS37zY4tfJdNigEp1HXhiC7fsd2W52a9sBn7LFfX14NZs5pkSS1sYwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21aj6WMq1pNuND4w7XecFS8JERnn8qGwToBzCv6E29Rb7ESnsarvXCieofEezsUqX6eiLyTnJka7SVozmqpGdwPZ",
  "key1": "2nZtoowgxuevJbTeFuBdM1NAJ948xY6Gnf2bz8bSP84bW53fwjLHxTjYthQpwg9SjsQUawkR56bqhi49seGgH1N7",
  "key2": "4xZy8CymCeN6EGL3fp8WBh9wvFb2eueWQHAbsL8WnpcT1kGNwTWw136guVhynHrcZZfLXs97ujaZozogxkyZYG1b",
  "key3": "2TeMkq25QRwEpguvWtJiCYTV8b8Tj27iDh5axP837aJQPWkBR31cg9ZoCRZhj9tZGktZkuQzTvTqBXxa1bTDaQ12",
  "key4": "BBz4zVT6QqwT1dmhAFutezNVB3bbkei7DGRLHyShJkvM1ErdYWc3JDRAHU6QRLct6Duqxdir6u2DactTKttVrWa",
  "key5": "4Hzit2S1Rt95Dqi47gcaMcV2UdBSAVzsvMhqgaHsfR3ABYEh9wNLMEseLGvBpWBXBXfn68r4fz2kQ8d1KfPzAVUs",
  "key6": "5F1E6k7GF7YJHhFG1wK6J9UWEUbWLdaBMdABJX3q9JsSKjWKiY9WJf57BKhzw6PB6agwixxKyHi1pvknA7on46T6",
  "key7": "YiX5qYhFqXw1H2k9R2Cq4WGBt3fE1jqwRwsj6sj8MV9F9cAQPDV9b8hNJ6eUCZTqUGGJyBqKUpk1UQJ1HXamfbw",
  "key8": "3JFLatbR6jnbQYAKCc5NjTFJrwkaKBLz9ndH8F97MQrxDxvRPyY71gXNYx4U4JBNpASkofPNutrxYunpxmwEBFRz",
  "key9": "4fk5SQGy1ZKWyNTC7q8cEvKmPEt8tzZtKmEZS7qjjJFZEp7Xounf9De16DFGzLmzpe4C3rY9WApef3dQruenT8jN",
  "key10": "3hLGcyw3mQ6Rad3GKDsSTg37f1zUXhxjQ1uGYSmNitgi7YALsihLWSS5NZ7EFyqYgZN6XkkJdqqDByFnmXnnLhjY",
  "key11": "4qMSHQiFHZXU9nVA2R9XpB6EcZqqj6tR1rdvwg341vmXXmYohgpQzhn7ApsBb3211syCrCLYsMyjn6tQ6FYyDUxS",
  "key12": "53ANUU9tR7trXtjtGkArJEUC7dQm7kjFYJou4AuPjyauiR7DWGH7XUUwUK9SuovixjC5XZaNN1DBTAsFmPVch5k6",
  "key13": "4gLfP7uZN8SQggM1X5XggnZQTCGZMdPX4ccMW4mkvQMubBuSbk3j4ejFqu6rZjjH3DVYS8uQPJV4WDRzQVDKkHjr",
  "key14": "4EWmD68iLumBiy63AbmU9uWZxb5inxHseau8Le1TY2DzjESUVZsGgKdmAQEAHKWtR98VWpyLbjSQZfU4bxVdDgfB",
  "key15": "61TkGNHSuemSdZCRoM3VPzKV1YBMcaGc2v6VPwx7JAjBj28FfQyELorf5zrg6rBAtbF9iyajQz2ALKev8siyBkS6",
  "key16": "3kBctsBjTe6m9tfMdr5HP9hN9GBcQETn9c2dhCUBX3aT4TH3JPVvn4YzDcDdhqsVyzipWfGT1tmcDQpsSk2fwL7o",
  "key17": "5s7TJB3SWGtp9PTZ93EyxBTx8rKiuBcEH1y4QCPEqrdr7pDS7yP2jh27wguGmqakUoh9PNmTVX6VfDvP5VY5ee9U",
  "key18": "3aoL75VczF91gz6trksbNJasMqZhLHXarNrMzMdJCkCzudcpGLKuYficdYQMHj8jT2rKLgdnQDL1ejCEfBctNEBQ",
  "key19": "36tYSbmTiBLJYyJiC1v1SL5Tvwpxzpcrq6HFgjPCvVvhgcVHGjqFBC4qQqDNPF32WLGsVcUywuRGMa5HfiJxz2Aw",
  "key20": "3ixJ5iWsYoiYGwz82SopvMyrjic7WSFD3o9ycSdYfE3WLMQaCvaUAo85q8gjCwttgGvdo2HN69zz98fjY6UCqA7C",
  "key21": "5FNj83i6DR9ra5H3x5NyMGLxsbFzGv6LWwSG3rPWCUjaenmxzRxkpmtHtq9k3vPHn1jVYtUy6er49LNy91LY75V8",
  "key22": "25NKmHf798mdh2XzGXhcJNzoBAJCGZSX5Z2sDHtTjdU66uMpMV3HbQMuSfRYa1R25FdPb6jYbiVXxbvq1yLEWj3T",
  "key23": "3ffAqb1GfH2ifHFxskWF34AxbY54iorv32tT33R4pm9SCMLvdYWBagHScp7oViRnR8rHcznMbfqC2s8oh1TuwEPv",
  "key24": "3dKsKTWi3crFhAPrQ9Yd5ZKGoTBKwzgcfgMnFycFzXfLaYp1Z7KtXXkEgPJXrDWMFYwTTgjRGQxScWistzzqnnC2",
  "key25": "vn825uP9F41pA3MDkCtJzA3ACba6s2Lr9awxCUnDXEkjxua8DXwToAoikS2vFBqgjoa8B3fUzBWTVCTQCggnkFx",
  "key26": "5yPawzP5b7VXQtLPUXVVUoW7rwCZLsMBv5hFj4B4xwm6V5HvaFyk2pnLewnPaNiPpqD1escUK99YCf9aSxZfXr95",
  "key27": "4RRLaTsKFxsDxis1xWwn9UR5anhqn1Az3oKmMJXL2zgvXmVaV1QcZcVzSDMdshmvk6Dr8f7yCF6r9MHHmj4SX6eY",
  "key28": "3Cd4Wx8XuLQt2FpDrbWhtLV8kC17gPa7x8xg7Yiq283MtXD2pjXNds8xTxW4iLrD24KViyuVwbxSXwVpSmrbXRqN",
  "key29": "2VGBvnA34x3YeEYj7UhYpwphkSBZ9RXJzpD81hy153B8NdRJ9zw8GnKK2LXfFUAFSXwWNbvkGoX5e9USAwVhZoBz",
  "key30": "29wocStdPmtJo9prGsBcwv7kY4wkVhJhtRiAm9kBGfVuSzX1uXrK4LY6bCA58EksQrbkqP3Yszz8FzAaSQ7sSfFn",
  "key31": "39Sso968HnezikuGjNQLmvJLXLTxatXJ5WzjPZjFzC3cf5E9AMupMeDZY8txWuBbXwiWQbgWB2QcsZCTaixFKoQs",
  "key32": "6uhuxtqHzKspyVQhNnYxXbj3xyM3q4UJ1vBUuauiAHcNJwrG6Cgz1DAusx7NwesHZJfFAghcchXJqE7zwCYviJc",
  "key33": "2pm1SPLU7a9WF2fix7WFXxs84rrdbxgfax9PrBfhhsnNWf8EmMWYbGZsGMJbgoLePGCd5XfaFeT3xgyFJ7DviXXH",
  "key34": "4WgdXS8Q6hVRYJb5f2fo71c5M2JZcDD5sPhiWyEYkUA7GVvrZqoLYwpvCLKcK51MGqjUjhopT8DXmLXGkoVEzfX",
  "key35": "5pyqotvwb7TKbTepD3Ytr4e1G1xhMiYTFcjbzkUQNtnnvru2fqFgJc5ybnr7n4QL1prTSZPjeZT7seAj2qn8dygS",
  "key36": "5MeSunZ4ZMdfvQkf1wzHq9yZVToKnUK72Syg4ohsNWGneV7iFeYY1r6p6f4j45jCvtrmn2CYGuTvkLTFPDugHa4n",
  "key37": "6J5cKtsd5nHfy232qmb1GrimzDBR7WX1ydUKyMRasVfp36o2jbpuaMKGoXHfQ3ichjFB4iJNcqDV1E6wdPTUYoK",
  "key38": "C1c1XEwKNc836ipthG8Zn1W4xVsiGSr96EUHpLrc9Ni79YrXbRYUxhv9LQeqcuFD6MHXS9fJGNUX4D2a3aB6mfL",
  "key39": "61U1nnUG1mXhfpKLALMaLguu3Uo63eSTX64XLyDhwHbL4PPeg96BFWQ5ii4p3FQLyJ7yM9mYukjdkECLc4LSpByC",
  "key40": "3D5F9Q6why5WDXYiMUfNw83e6DJ5677N9kd1Mf9WyHBY2SYPtBqj54KkVCkrkmdXjq5CHvvmt5yRTYPmwWXME1ni"
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
