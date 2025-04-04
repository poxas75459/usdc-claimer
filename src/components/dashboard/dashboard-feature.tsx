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
    "2nv84k4cj8zKS3Mu8yYrWu94cCXaS38urziFbzb9f3SJnxGgNuHm2ipL6FnuyDewXgBn3S3sfGkwgXpZWpNT3rHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49qFVyB9oNDhiadePsxKGR61wKTNgCa8JQQ1wcNopwCU3atbR9brn4FDivaC8wxhJiGvebEeA2QwAJfXFehAZy8X",
  "key1": "2iTAHR7ksf1DpNmo3zL4xiaQrsTtycs55Cmsm9TmW9wmME43mBapdhdzVPPfjGZyYD3A64k8ZTm36gd7CsT8JxrF",
  "key2": "3QhMd6udyvJSjWe3J29m87bDQJKJaFoKz4YXon8JKQGJn8PkjqErcKQmwVPNzDtUMRhZEAAdsBdfNJ7MavHF2Zub",
  "key3": "5reAjBX3MDpYvDPqJXgdonFX4wstYHqpa57AxfcoSF61C8cTaqBTwaW45CuaPmqZT6dwGshAFb56fDZegmmA11sw",
  "key4": "2nLbLALwXPvvgQaRp3Tw9NpTtTgn1NyGMfrrtNPbY8oqFLgm3gnsyNKwWrfcrqFjnGkpMUdWYTsyuqiVohgYH3qH",
  "key5": "3Gqv2YWThjyBvYGC1xFzunmaH28TcHrepSuPt9Wh1z39JW64jiYiVbQ2W5m34PpPVPa7wqfYki9uoMQav1ifKqvS",
  "key6": "UPnNVVEHVexe8fLFgPUVWzQyK2qLdAqJzWzAWjqUpg9XcuZPS6HrcmJTR1SCgQeLXT47Zvxvqr2LBGYBDuNSycU",
  "key7": "4wgthMwuv6ME7zZMYQ4Y6KvG3hyw3sHgPyYq5TFccHHS8T1nG7nQskzu6czMHW75cfQte9Jm9ty7ecBgzU2kypBX",
  "key8": "rgFHiBoH12NQ6KcRELB3vsPyZDFLGXYTJE56Mx6zGAxyFLCAVm3aA77HfDg3v3FRADzpFTChZnKnbZybg7A4jet",
  "key9": "2xC9L9zLkdasf1dRRn9aLv9jRdegimmuhWppdPMzwaCLtQZgtTuxSMP9WTVNEdY337Ef6bgMSodr4qjgWBAboJxK",
  "key10": "4PQvWmPvmvvYqAyXMkS4EmD8ca1cN3j7kvbtbNMeUm5b9hB7KVFEHK8TD5CWNq8j7KEVJMKbEgvD1jb9UJhSq1kJ",
  "key11": "3DVREsGasCDZJipqKi1HtjjStW5ooKvKopvoCJepBJN6SPpnqY3sN7BPBtahUXCcH6bpXiyyRmbDJsBJg8WjeKiM",
  "key12": "3shABn1bP1JJtWxyqjBwfLzowoRyYAGHgALoCUXjFvaLgth5JmW3e5WcHBwy1qxnXEe33k8aLnPCijv4vmR46FWe",
  "key13": "58nFbJPZg9zjdZ3WzUhddPzRjyfHyrgbNm7Zy5WGPFdCusqifuzZWU441JWyw7bg4VhEsHdCxXTkrQwZopuPtBf3",
  "key14": "4aG9FtfXL1ko9BS9L49JbDV3aQTDEpBj3N43dPF9NvN4V7Lhc9qoiqqVAauZghywaZzajvsivHkHKGyNLifdvXRX",
  "key15": "2rycGWc8Pm49FcrJ8YTX6sUHhoTNmxaRArnmZny59ktbEuPRgHeatXdzeXeXSaKfYWdQJe6q9QrPev5fhidrrgYp",
  "key16": "3saN3gZtbarKi1Anbcc6UjpSFJ9o4kAuyVp8bACPMJqKWEQJ2B2X5tqm1cCXoGXxgA4UmQHcxhN4uAjJYfy14zRA",
  "key17": "3AgFSUoaFWCqqyA3e8BKEZqz3ybPK2qwLHDW3h5oNRDvkWUeRrK5x3XGfPUKGmNiRvVYKnoDFrF8MGpht7Fui6vb",
  "key18": "5AWbeGoDWUoadoMavJtFmqSvHMyZ22ziinmhC8eyuQQ5YUDpfiC1X5BdDDej5bNpcUoNovvaff8GxfZHPQKfSdFe",
  "key19": "4eSoJnV8CunjVkgxwSAo25mMXjRJ6T8hp1zAHJKwTY1LU49NShGTDWPVvNYQcnQnvNwzS4B9NYsZCvKb3JzhzXkh",
  "key20": "4xo16etCTYsYQR7FDw2PY3iS23Kzwm4SZyzttcbXZVWDFSQ5L7kgYfmnCZx7rfyHrXmpzMcz6c47BzCZ1RYPsft7",
  "key21": "4mTzD6Kg9kasdQ1zigGiaevBMhJoETU6QJKULQvGA65brCbEtFevRd2FgbMJNKAdyCZ896FwSmVNpq8FKjKupBfE",
  "key22": "2Jwg7pcaomCRgTFEwGGQrGQrwFm3vjWmAuyWory3ptWKf9fJgzDu1LVQW3arZSjFiuikHMdJP1GoMTsNagqmfVrC",
  "key23": "4rfLgnJjgMboUomEE6qzKvE6wV3zTEjTGT5menPbL2RcsAaoPGJY8KowX3i53zLLH8rwpe2dRsHL8XizFtWw5CVw",
  "key24": "3jA55rEZcEAx9Zu5qWmBCqBe2qmc8BMuvkxj4jAGvxBhZgBef1UH7Vru9dZVCZfKdvy8JAVEaySLv2ERRb4Kj1ev",
  "key25": "2WQAwDQUVjYs3NRYKR8uGTeysHqHuDurLmzHi5jMJ163jLWYMShSsLBFptrgSer3Ej53ayjcVHq5JtTVWUKa4W1L",
  "key26": "5EAuMWM1mfrf5eXqFgDYUqFvNHbc7RDZQs7UMCLZFBV1zxQRfwRB2D3QZtUgmZz6pyeSdYHxxChGDrHrmzs1vXM",
  "key27": "5wfArT6eTp9e8gENkZQ7KkvNkVKV7CJ9MWu6x89oyyKaRMLJp8Q65ef1328xrJtFAqqScsygv59pVh9oE3fKuZZU",
  "key28": "GZRMGxRDbmnCuWXMoG3oCNkeL8aUrns7FrBg3hxxjwfJUWUr5RWpoDwH5gKuE1QYWwmuuNNuAMb5ZtiqavuK2AZ",
  "key29": "4DNp5dqKt7yBihZUKmYc7ZQEJ8cPkAqmNd3gX7UoKRU1YuR7G9kASTGG6MbLPZrPMpvnXgY1EMzY8jFkCxTvZPXa",
  "key30": "4hgxfpefRbjmmvJjaChnTsgdm5XAYrQAbcbTM5NG2XDp2JcP9FTTq6utykFmxodQy7ihdEwiQqvEeN9jTBpkonRU",
  "key31": "5CFPznQFMLCgCdaBAtRwDH9HWA7q72bss7omKkpwvMWLmNYvKnqaXAjTPAvZbZorTAJKXnWDnM12RX2aG6UpVoiv",
  "key32": "4QYSDkE5TrNZWqN7yGdmYZFF11MG6rAhdskWEw1bZczurMwq79PDALbZEZHHJ5KxHSnZacAotVkHnwzDBZJ398fx",
  "key33": "3fueAqzfSznrcYcMhgAL6yxokau9azmdmiWyWng4DKZTuREfVVHvHLE3ChVYo4LWojBkCZAwjr4i4iQzm1wZRWhd",
  "key34": "61ESiX1V478DZ9Dji9pstpUmHtjkse6duYLzg31soePy4iS5Ctnten4NBdZDCjmTMvw4V3HNUygYgeCnGcW1gzUc",
  "key35": "27fbc5XggN2mFfxpyQgKUyes8RKYvzEsq5ew1V9748bNdDoqiaLSVgLz1zdwMzN1HSH3nRWRAYXkxTiGrHWyY9d5",
  "key36": "5Gq5f9GAFSsXNGGjaSWMytb1ahS4HzNwq8YCdLd8x9U4WWPpedEgyN7JLSvv4CuySbXMSaUwPSqgUeGWC6iWVsaJ",
  "key37": "5jkpm8YS6TTsiUdtWRftpDhceeCxiXSYLi6iRM4sFWiDAL96suK3bayLqQKkRW2KSirLcGEW4eZ7vD79NE3is8Wp",
  "key38": "44o7t2acEvPTY6Q1pChQAqHLneKBHsWRXh5xAVWBb4yYq3NTThvXsF1afEDmLanUxHegJ28cGbrKspXo2DymKDZW",
  "key39": "5QnRRC4dCGSSAJk8rSSBLn8wBHg1ZrADCDjYUip6d5k7gHGPNBTEKFj2LPXLcUb9ggE1wdSiW3gWfZyVSUjEgigJ",
  "key40": "2qpTfN9aSCCXdb7f6uf5ouPaga2kvHQQMkTtwBm9Vv9jxGBJWu93uLTGaLDSPaTtUnJmpXbSgPxZSFZgriDkj3ae",
  "key41": "28PX5QgdcJhtiw8VdBEJQQr3S4tnhYivi58q1AtDfGNj8RzqhvVdzDKsRfmDrTdEg4L93CKbm93T5fUWWML9eyKv",
  "key42": "4gaY57arZZG8EbBWxC36i1XKLAXQjK23R4ahe28qmPgDQtL7kBsujPdFSDZGJW2BB2Bp6WSBNDJMKP9Giq4U9iS9"
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
