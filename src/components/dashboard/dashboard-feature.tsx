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
    "2GX4hfUicwsAEtb34Dofar6pJc81aWbWD9abdpR1jMT7u6V4HPdKVweKgSW1ddSvWQiBasNFcd9rTfMpGpUndTzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ioWhns7tQS4FRJwXAZEjWCJmoJ1y1iwiG7EK2BeeB9dmy6yFwQk6NqyGxkVfNH3Ymvk2xEhQNrVZJrZ4fhgaXY",
  "key1": "5PBoq1Rd7M9U8gPZHJ8bgDE4uZm89tZKVXH6vJ51guQkQGupmmT4MzEjVKpVumtJyxHDjv7fg83tQzFsajHiA2MX",
  "key2": "nLm9hKuq6YLtozN2Mvz76A9ysh2VjiEie8CMVZUvgG6eCHrsrR5mJ4Wmhyx2QxN5Tq7mVYqmX4tZqq3LuQBGQ8d",
  "key3": "U7BtMxXtPkDvULGCvEa9zVUkDgaF6KdRWNhGWWMzBEtLS3nz2Y4MeSyLAGe82JenxvQUgrF5uCzLbJNWTgECFbJ",
  "key4": "1Sn36RWtiuvpH7b8NHw74GsMQTAYRYKPjXrHZxXNnzexqbHP3GrKYrXaJvmSeXytsj3uyQArbX2PpyM5r9JGWiS",
  "key5": "2uuhqdgsqL5Lugd8zpZ3kb24AnRFgjo2mkVQoYu7aXwagq3wRCG7ex5vnErrbW6ZwocrEmpZxCAygcEQZwxjmxAm",
  "key6": "3HzgKQ9aStEv33RNHDX4CCzRUVi9VNG3bwxk9GYG3yGZjb1hqzd75DkJ1rKgqg83dLCmMizcM9YT6U9F6V4PQagA",
  "key7": "3JrEiEwrZE7fG496z5QE9ikocbvRRh2LkUgEwJMmnoQP5mKHehpv8sh9azUVPXmaGEYAHoY6zXDy9oZKQ95CGzzm",
  "key8": "3nZ1viydnACep58whUS3CGJJX4EUu5YpT6cFfLZg4fVEn3tEsxnWbMn45ffhYsZhkKwNmpFyvYfRmnJeSdkziCZ7",
  "key9": "28YRaNppuUD8whs5xMzX9WPDgHv8n1GRwgLajWZLhTpJW288YJ1SzKrJxQZgbxrb47zroZJDMd3hxgDfoAnTW59S",
  "key10": "a8qVKTTdM8xigoUcXR5uxeEuLAqtLTEuNrJF85izQfe18dFX5bdHKTMkjqQXj5DQhfrse2qNjQxBibDrEhaCvuG",
  "key11": "3oCvz6UDKjopcaFj9cQtRE1NQWLHc9bm2brdZrov4xAoHWkjtah7ZkzeJ1EH3jUg1xGe4pX6nwViHn2SkrfZM51B",
  "key12": "4uVA3SC3rVNH4U7wSxvXLCycSct2dbjAabZNMyMUFPHTcTSiS6wNdQDJUQZv2x1RFmNsCJ5XPg4Ste7HBooFW4g6",
  "key13": "2ULG828YmQahvxzBah3n165QGCpeDSXzTZhYvbiYnGBvR7vATRihCQaKPoq7oSGwTsgBiu1ZsbFAWqRD33xRvpuU",
  "key14": "3cZ8QESZdxLptoJWQNDCrTJTqdFtfqKtUrnVvs5w3kBmepHGMcyx3sWhdeChmGEJGCDnjWU6i9H5uxtUvtEySUXQ",
  "key15": "2ZhGCVoE9mND1TE7CqdcwhWjyy3wyv4DDjoXfoZZH7C3A8Z3YBMb1KZuJjd8WMuPg11RBtcY1ukGCLKCsxWidvnD",
  "key16": "61fQ94k1VhY9VnGQUanLT2zYqJZhRxP2ZTDY6QnrMvWoerBsr2gvFhA7BBTuYs44sqAukrrY6rNv9n67C5ydDDg4",
  "key17": "4qsNp3DFpEdaJPJvMtSgGBEEkFuBxDZ9SnpQ7YQoKRGgc1vTyDRrFNoFJyeb7mozR9tn38P7PQf27Jg3a96XmdBi",
  "key18": "5wqx2qAmq2pAQfF7oSWmrDaxHvaJ1aEq6y83bcaTPyWXetvt9MZd7w3wLC1KNBsuY2nXJmxZyBxTExcyz8P6j4Z2",
  "key19": "3NhNNz3wC4WMiycGs4YaBxceH8AnRi9p2vtBe93eA1NJF1ec5HgY3WRfn2fL3TryXrSTNrzsL4EKT6TxG5yQjBRZ",
  "key20": "ZqkHib2dFPW5ZseJiZLMkfKYxxLtMqUW2Nt64hvnFFxohGJFbGdYrJoMvkkRpYhw3G7qmjxEYcDF3kMQdLoCVhP",
  "key21": "21pRvBoPkkKR3erFpJ9DEjHh6RiNYGRTtyDRNeP37J3m2KagxidErHwpmDuSumSgqhsyJSm94zUbVrUjvcfFnwUN",
  "key22": "3SMprj2sc8cFZiChW7zeqyzR4a2QESBsuqPVDwPDURVcpQQYtgPFPq6KqjqhiykXDPDX1XSsGbsEqVwgJH2F6L1i",
  "key23": "37hMnyTD73bb9cJd94fr2wYkxto2CoKZAmtKQWoR7Rg9RRtVav9hf8WrzK5fJg36qNa2zdWqyF89Ew7KovwUCYS6",
  "key24": "4i4mGk7WaQ113kpVNqGJcMH8TC8Pyq6sAAvjbnWaf4vSf5uZBPnc1oEwGQvUBbdxAKdDyDwUmYTRmdQ5F9HnqJJf",
  "key25": "3smKoBxB47xWS8CrjW2XYHaQ5hC73jpL5tEiExmsrcGSF7SSdLbfYiqfSVY2AY2Mmz1Ct8J1mDqGmtrPfqCRxLdC",
  "key26": "3FmCP2YDWb5ocyartXDvzLkw8vxEw5EGjENfce85Vptosmg8uqpH4Ge4FuKob7vmsMUMXzVsJfhXiHcichoarLNE",
  "key27": "2u4wuEjuGJ1Km6Km8AMn6bR8dSiRxoZCD8cENsGxLSwKDgMup5i1kdRh1VpGA8tPGBDrGFCYgq4QNttSvjdresnt",
  "key28": "4vGQhFZvwCFHBTt3mzsot3Wt19NnymLc83mumfepj3HnLqSigVvJLyNNpha4fBmbdss1S33Y7qDYRF7Qw6divAb1",
  "key29": "42Jt8f15vkUPhCpqbMhtBQE3hgBe5gw2GiaTyLAuNFC2QvB1Rf3jSJQJJCALaJieRvZTwhfkg8R8dZahNT3XcEyU",
  "key30": "45UR8QUaCqegiQqF6wHDtcLiMdVbrpHyACRYHanBem7MuFh6r75NbSFFB3oYQBU3v9FRZHrGGhNDFZXsezi1KbRh",
  "key31": "4MCCrkjJxUWSGzh2rNfNEybQAVSwzZri3nYtdZ8RaExMzt7g5dCmP8eJdjzApbuZmWqKpaZmRMiaDsLPJX7BaUYA",
  "key32": "9BMgzPpCnioY6titxKp21C6CExcNxi4mpmuYDjFTtkHGeHXpTWoMZdx8Wg12U6ikvQSRzxkJZfKqQkiUp2CzeBB",
  "key33": "qsHpCykczMCTnEtnH1mtzagsuh3GQAMp6kyRW92hyrx6t4fxqgBALFQCw3pNYRq71gPoynrCPFN7pX1s8jQNbGs",
  "key34": "5jxf4A4eCvWmYC1fBvoNFxwV68pD9mGmzciMT6b46vXeKtPaXS5KHv53aTmCXDZrq5u5RZuxCQuHxBeLDy29qZFG",
  "key35": "4zsUs8D52eV4vqQKweP7ssho4VtK2NnJdJr7sRmjEGayVQ6vWiZ8KLJLRTRaxPTw5aWvKgLPjUtEMfAaYU8ppFe9",
  "key36": "4xRQWNCmEv1o7yPg5ds7e1AZqAfHZXuKRC9SpYTNPDckckFyDWh27uqt2uMCrdYxXBZBxLrz71xFF8T2yoymqjkC",
  "key37": "3hLTqCeuMimYyqsv2QskyGBjPgLXcmZng7Mb7YcgvQhjw2rB87AGQFYQCk7FZyyzBPmy6f2ffUrrv2Usz5v4cqRz",
  "key38": "QqL9rGtcRw5Kgd6edpEHayBSUZxN8WPLE8BUSrNnVCh8qyVVWsUumLtaM5UfMmiAs3UiTm8HbdNj1GYBWGszyu2",
  "key39": "2PW1rRyHVGYjXWSAstZNYvsRos2TtjRwSc6UnXL3Y3VpvunouUuWzpzneSYoV2jWdRPhoaCY6QCHLcxRa5jaVWan",
  "key40": "3GV4XU6DqLNXBAc9u9qLkpUsbe1C1fCDkLVZ1d66tt6ZHKAgvbqC6kcQRVrtgUNwY1BHDu6grG8Ercgw1XPiMyfu",
  "key41": "HZ3cg8vuCT12m7Ymy1AdZTB6NaFjetp5d7Vt9dyzhyCjXpA3qbF5Hs5LJQsToT6FPotNndiJENZouDZcGkTz4TU",
  "key42": "5EyXAzboAGemb8ZKbTsLhWgE3z76vuj5ajhXjMwux7jqUGdpHqhHBNex9F2tNuidsJjQ21Pq6L1t9Ayct6HPRwqH",
  "key43": "5i8SKe24pYGXshaTPANcyVDnUwis3gMTdSZXPSjuXgXpRZTNDxbmpwyMNDdYE57JepxWeiWD9Ckp6wzzRvsuyhEA",
  "key44": "4hEgqsZwBuXfsmWSbQgQA93VtmWgRwZYCrH3zsNMq3ch9Xbrudb8AfhijHUsGnvnVHpWyoMyH1EQdaZVxL7CSwY1",
  "key45": "3NxCPycH5JGLp24pHFA3UQ8dg1EfPo3nQBnaVoGYfLpnRSJrWM1ByyCCBRaQcSvYai2HeEJNGVRcgjiP1kK7FmqC"
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
