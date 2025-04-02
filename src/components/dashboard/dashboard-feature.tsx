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
    "5wvFFYDwViD2NTP6NYypiAnMHEJjc1QXiPHQSyqcHUpBw1fMf2B3e1BhZ7FScrQgbe9RN5WjB7khjWvSxeGZKgfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Qoj9BC6LaURF9ZN5rk33wNkJM1QhuoPojh5EG4bJQomPFrwVRCWR4ukuWamBXwcigS1aLQ5DEnwC1DVLDSGsZB",
  "key1": "5BhrdNHEM9wPyEMT4sQafcSMKf2SSNYiwW6jXJorq9vZGqBq5VhDeXvPtECyt7Unc7fG5wytb1LjVRy5sgw9m3ph",
  "key2": "5VsnPGDUvnxBksCnZ2wALUhqD9TziYQFyfMQuXcBKfPx39T8pxeaw1DwgJnXkvghxH5CyK8KGVQ4t84YSqG87beG",
  "key3": "4Djz9H14e6RP1cdGTdc2spv6Qtv7v33VaLvRb3V2BQwzqfLtgrpXGEPEdFgFdPhFk8XQaRZ5tvz98XU5bu4CvNvC",
  "key4": "52H1u9K5z1A3a1SJi2zUxZTjPSuDkBrtJ5VRFRr635g3ksWnZWg8BBpXsErQipJyKF3wBF6yBkrYKtM19AXhf2Dh",
  "key5": "4ckk6v8TZ8swVAWRmgCDsS6XYwLXkjmMhcNjbgUpt3ZqkCz72Yg41LCTTU64Sxv4qkH511ReQiF4Xx1Y5oQzKWAn",
  "key6": "5DkVVvCZN4BEYntCXYHd5Uyz37Uw3zdpdasWEgz8PpMHnTMBFRuoTLjpXiCzpciVzgUARm3ntAzZ2Dy9qXbf7i8y",
  "key7": "5LYnbeuZ9qBrPrbCX5hgAFHqpY2YMYf7pRCAe3XsHJsUFG58qBVisYghWZcjPL8oTCN1FZZyWCs9ptSBkrkFTPEb",
  "key8": "5ZogafEBxtEPL1xH9X3MxHbVHpmZASyASvBDXixmquUkve1W7UGxShZhHvp2ce9P9CvgWQZyRjVmNQfq2WxB5MBC",
  "key9": "u1HU3LoCK9u7uPm79cXkVreWF98XSnZwaXXZQhdS2EztJzU44XgMxbhYmQAGtteu1RHWdd9wP63VcyQEd9wigkX",
  "key10": "2p14CCqgzA7MyDPyhYf2kmeGef54ZAS1cYFQ8ha5Y3uZCQQ3uBPdCiTfaTT6wUkjsxGu9ZHiX2ByVnoGEhr7bE2y",
  "key11": "4pdfpjbDDNG7B4pAnGG5yERuoZK8e3CeMprQkGgpJb4BEyREVZh7jMx85KTJTdk297pzd4rTdPFFzRReNv9K3nxA",
  "key12": "3JdABBmKiAWccyPEczca2HXhthLvwJjite9fZpYZWhqrX29iy367VPD545DtSGsURiVi8fEAkFcgoXPQzHU85vXq",
  "key13": "5AFuFDuxbP9vBgxuZ9t78ELXzCG3CiCBvVsJmDvwDU3uu2SeZe9jRNjAcgGJYfsYgRw4t1BV8L37hoQkEyQyMb8G",
  "key14": "61yiH7Ge3tZGx3W5sNd9Jh4NwdXFdQaEp22LMLBi1cqsG21AA1UpGFdgonDnqfzxrRFjPPVyappfh36RLAsGxE1Q",
  "key15": "3EMNnrGgv9RV1LgZ9zy7JpXWryELkvxu6JCvJcj6EPVy8WTPF8N3FTNtv7oWrEKTRUuRuHRcQW58WjbQTJuR4wig",
  "key16": "2YS46ovG9yxnGS2v16rQUHb3FdHWzH5RSuRCMSYJdwUpTwgkGbfsGYepHEKSCfqdt61edGWCDynoeFXcaE9ZjhbX",
  "key17": "6wz8hs4FFn6G6YzMoC9wycopQZduMQo8C7RXB11SrKSLjsuCSp1hFpxgT6Kc7Z4vh94RpAuxDnZMwCNwVoQvbtF",
  "key18": "PsGtGrVtwWKdr3oD1CUQ4NNcWyf75safHkpYM8nryULy1WyJx4FeJMNy5P9Ggzvsh4ha5MKRiiUnXCUaxjgYFPH",
  "key19": "jHrUHLs9mSXThFwQmcBae745aSfZm8rDEhjXbZBET3fXvLfGUn8L7qp8XJrx51tsRv8rETpEB4v9FR6NwsyZCXA",
  "key20": "3GrCXNWdwuvLXPBvTxmh4N1sMEc9STfMdqQoLXjCU57GV3DuoUgX8mkNczQFUQ8pThNb2YgtGmX5ZUJZXRAbHukc",
  "key21": "3ALD4Zz5voouifxNZ7BNVLTsU9EDGXwcqmHb6nnWHfnZpGzBBqmco3enhtcXHMSEgDu2MwzG8aGprrurrRVTuiGQ",
  "key22": "2W4ZKrAbyrgQF1L8z5Mkhx6G7fs8WLb2TYvjxLiUu8UemGTcKPLMeAkHro9EkL1kR2vNYnjfsucr5fSebgk6GkzX",
  "key23": "3n9VuzFzn2nXDgkmNtomcA7haH54iPSbiYhkuP6BvmA47pUSZesdRFH1kmddweUjwd6G9n2UZ4AN9636RXWg3QU1",
  "key24": "2sj46bnVkgunxK4sMqF9wdNXhTg4oVC4YQAzcLC6jX3NybxamPpax1ccVkiFvkgGFEUocoaUMp5urgb9vAkr1Dnp",
  "key25": "NQ13NHXNNEBfRs1VWG4B1ZpPmU6B6jPy7RAMAHX3TnJPQyEa8B4PGTnFrNCETp92bmkn2w3De5A6KiQ26ArM866",
  "key26": "4WmPGKT6PzzehkSvFjebhPNX64FqaEPYXFtC5PwzeXjeafMHM9wNJ3Dn7Ev5mtHt17QaLEJdNs2UjMMvcP9Uf1oi",
  "key27": "5qsTxWkFUdWcpHoj14KeuEnHNyhyxZUQS7aYtiNohSjMzsQBVAUkhWsmLhtovz672TApeLiQZoKcRFDMryFNPs9P",
  "key28": "3yVSkWyVJLFMESu67g2trtYZibe9Ei23wdws9oxYU5u3VKTJHLhzZki4LFVCZA3kpAr9SBjCFQ6aEHqUdXEGBcyW",
  "key29": "KGBi3PPWXz4QDfvXarUuuWcnptabewd9iHfSm9ekTYpkgJo5a44hsCw5niNirPCNnzu8nQ3zxCcQUuaGT9XNshJ",
  "key30": "2e1QAXXZjY19LZ8rqfJ2SAD3uHtWUFHqs87zTd7A6a2DvmdNSSaAWUKgY93stL19RXmEAQHzaU9t4Ep2LrkWXZ5D",
  "key31": "4pUFYSPuTdm49ke5Ec7pgbEDXvZHvqKARPpjvzEusL4YB34Yzndj1WZSLTjV5ithgENRHsBCQn6BRxJuD4TD4cf1"
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
