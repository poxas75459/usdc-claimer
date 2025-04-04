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
    "2WpiENH67C2sYWTDdEuN8bS3qNcupDiTsuBmFFWyN3h5mJbCf2W2JYWqcXk3SuCxEJRDgg8yLadEjTPB64HUr2CV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pW5jfm7R4KWSXPboT18m8UikQYJP2fRLmMFe5eF58JAuh3tQmNYjeraFqWGKgpQ2eLc2Lvni8YqyCiVTGoyy8Ua",
  "key1": "nqAe8hK4ME17ApqupJ4S8BcYr5HV7W1q9vDrCwoAedKvhYuCxYQA4obEUJ4aHCNoyvXQCEoyqiTG8jVhDUgNwFz",
  "key2": "2DpRsWCjgJMxyd9rKC6dRruGJNBWyZe1vHtvaYbbw477JsrHfcq7ZgeXj6DrQMHZGZpPCbHbTCxAaJXCmFs1FmXx",
  "key3": "5bgn6nwDUQAy31XwAT1nGhZHASd1WjL7a3CxLhsCp5YEerd1bNN2DgJutWfdJn82qgPM2a3rPqRYTW5Tsyhtez6J",
  "key4": "2EToMNvLzu4ofBaBXAkwEoAikDbyoSwjqLFVdAPZtQEM4U3dQMezN1ddzrMfVJRSh6mdnzthLKqV8tyWM5rUY92c",
  "key5": "2hJ36vrq1ubL52qrBNKcSoTYFGLyD74175SvhVayWR3Raqh6CbR1yViZpbf9eZZtWvPR3PkaPK9XYxC5h3oFFe8R",
  "key6": "4tyVEnkJb1YHqMxBvGjtgNQKjWgddcoiuDPiSx4cMxTrAzWKBP6AnpGTTMpJ5A1uX1QxsayLx1XNxzd3hcyr11Fd",
  "key7": "5WBuVaXfGuFhjxztpLcpTtnuNDh4qtb8ZN9DPnvXw5AQ5xj7YaBRuEDxAvv84BFSY5zSS4oH1fJHdc2C5phfzVJn",
  "key8": "2hrPJQ81b5QPiYyTiyx4BH6U6Kyi379jRqFvpd8oLDvSXGyjZH2n18VQ84o44vGe6MS2pDHRszVbntesJfb3HVEX",
  "key9": "4JJoCTLFiAtvBo7qDyNq9rLT8f99v8K5MeM1pKYt9C8vsemyyBbC76fnjEoRNQEF3vCP9K8eqDHZyhekGjuPoXxE",
  "key10": "16QZ4RcMsggqF2DVkBBeu3TrkitxbAJ2hZj73CoDZUuqS8NFALtpais2uphdAVbsVUFi5E2yuDSYErNc3CwuBVa",
  "key11": "2dtRjYHhnb9hdfdbTNzmHGj7voLVj7GBut9BxsKhy3zDQjc1H9nwTxp3QfGZVbUuwy8BEAq8ZYWwNJLWKJRA8yKU",
  "key12": "U3YnQ9wjVnZaJHJD41hNSgerHJCpiFEBm9DEy2w8suwFZBBE6rMZ6iUVd6C2h9qPXrUoE7PftfbXtbz93UWL3Gs",
  "key13": "4QpXuSZg5YNoaL8GMMwxu34kHQB9hCPxHe4jBaHXQV135odE8iS4WypoWmWgmmvP74zWyBkuTsfnHVAkEHn2FPw2",
  "key14": "2VrNfZUvoi2YPJtbZ59jhwZKFuF6WJYk3ifrphErm8pntB2mNCa7qCWjPioouraJTK3HxjQNMhCnneU9bUN94bV4",
  "key15": "2VpThDxziss88g9r69gbNGoX4mNHJh4tyRoNLFzKRFSYnM46Mqty6LcNsU6TEbpBv8UwidQdA9P45Dk8U5sN5gE3",
  "key16": "5d9MVNU2nmanFHgnHx5FCqWcT9m28tJ8FwTw8LyWvFQXJ5oDeT96z73rZ23maPo26doJgbWxN7ZRu5UPF3Yv1yNt",
  "key17": "5GgfeibvdXsR6mM3QSmH1igT67enNqhcQ9BGcEDNv2o1L8fFr965GuBg8BQaNTp6f9TwmytPCGYZHA7PQ9QSNC4r",
  "key18": "ioXza9FUX7NvPt2Lx4BrcD3QUiwqvvuGRE8azSMLG7XTZbd98ei42M8ZDRm1pRvJN6MPXihN5KuWTGLUWYBNMHk",
  "key19": "5BASbpKejmRgjv3a1Y4bEoDA2195JhRJ59nhZS5EwEdZxzhTXXYQ9ESmjdHDyWA16UVzecz1mT2Gk2C36UVxiX49",
  "key20": "4FP56NBEtSSvEMhNCXLZ6BsyAyUuLnr5zpH34i3nAzfgNPDy1ngDqHkN7LrVXyytnUf26jcc5BquWHXYGK55FVtB",
  "key21": "3H85G6adtNSwNVUPzy964ZizZ5FjoRi6VHU2e8PL4Qr5WYsWUpTa6bnmh2ZB3WH7mbHMenB5eCYMVdTdaDMzSzeV",
  "key22": "5ByWNMvUCvqfweGeSKe6AiZutHspMB9NWCsFBUybEdH1QnvzEJadxUkES8rX7cjCsHWqK5vrBJDs28nvT8UhwFe",
  "key23": "2z8RN3sz5RwW24EAqCLdnBGijokvZwuMuC3Qtdv8A7hhP7BiYMRN1fvfHaYS6dagnCQ3ARGxqpgc76PononBVvnX",
  "key24": "2MYC69dWWKZp9FwCr5gvFi67py35YZTbkBWuic1sJeSVYXUtQP44WyvjEgtyua7Ceru7JF32sDLdfnMkSx9TLkLC",
  "key25": "23yZrUCeBxXLQWftDqAjXQhSXHr4sMK1WXCcrSJJH7NcVzqthTttxQtfiAsZ6RqH9T8Kco8kD2UqbR3EwJBPzJ5q",
  "key26": "2j6Y8KpGHbk31tzXZt5W6YYkQcpAk4rVkyDHGPVN91wUBLwTNcHf5chU9SrevyV1zALpQHXanQW2EFqiTbn4cUAU",
  "key27": "36wsZvgohbmp29RArCjkfYzvAXAtpHRBVgSAGF3Z1eaoS3T16h6sbHBban3yb5ppNHMb9w3XfecdmQrDJfCcBuWv",
  "key28": "46Sv5ygxTAN9mwqZRzvx8o1JS5uzjFM6qcusbBCVui5ZpuJj34HK9jGaWXQzgee1b7tty53cfG7xgbevismXZi4W",
  "key29": "5Btxr4ZM2hNH2zjsh8vYEtxFYdHYoGosF8wB2AUwnrGXThYmNVdYCKoxvdUBeSD2YaDstvd3EbGJ9Wdd99i7huew",
  "key30": "4CkZR26xmraNCVWw8APqca3gMinuyuqPUGNEfbVwVursryt5sEXfcf8DDER7ytY3SjDm8AEF92xdVwJkrD71HntR",
  "key31": "5MvVK91HcfSgvwH8cbzD1CEX1Zfs7U4Qru2jn2wTbpcudJvRzkmyEWGJoVTecoUgBxvjYoBzXWd76WTeBfZ9tZ3n"
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
