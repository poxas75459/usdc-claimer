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
    "4sywvY8j3MycZmeECTfa7ynmucmfnteFPVhrhq91YkawoQyWQXDkYqgtdBSvWZziiETYX2w34qkaxw38mP8Y4G87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JkLzfqWcjPR4xGDpYW9EA2fNGxSF9WzYayoLWYrTu2hwwUFo12BZK1rMJwTZBZ3WUWSEqBB7bJQRAJPbCdWGo4z",
  "key1": "zwP4cuLFEv85rmuPVybcG75mK8rdYig3PKg8F2gEs1n47XsKkjQ7LxoybdLcrEUgkW9DzCHkPeJR54mMTPpPztL",
  "key2": "4MEXw8DJEP24tu1Pqo1y8iK8eyo8VctuDMKxnhxRDotfq8EcTiifX2NMsy2E8CtXMzeiJCqHGA22JwJDUy65KZVi",
  "key3": "sasfcZVUmruc9bf234q6mdUSF7MAUs6LXvXrQPe4y5H4RUziyimkyJRX4TrrozurLuqiJNoNcRnWr1LC5xhKLdA",
  "key4": "XiALegopERmwDK7fhVDsCfCp4KQuEZ7cEb9T6joLvwvcYa4xMS5te9aoXvkqhNrVG5VWUfXPxRyfAcs3tc5w37D",
  "key5": "3LhiidQXGXW21EZHx55EQRnAbN7ukVQnmctAa4vU39mhJ7YjkZCPc2bnyQdYyipUemqo1W6z41P5gTFf4gxLsKCL",
  "key6": "5JP7KeBcjaa7yjUgxeh6CsPKEXiNu9d67orera428gfHKAGnzDqR6coT5332vcyTekUG6FTWFYTEk3yvxcbRPyz6",
  "key7": "2SYpdTMmeVw8XdxuguXBCEMSXeFTVNpnVddhNc5au9JyVrKG8wvHGkuBFbSpaxMUqg1utARdFAsQ3UmKEWUeBLz5",
  "key8": "2mQRuspKJHbUTfJPMXoErrHLuYcxafFwGSxYzxTNXf7ypKKmJq1Eqwm6LexjzxoJvkYbYQFfCmQVfSpzwWzja4nD",
  "key9": "5ASuzgGtvjQisGwR7BPf3ugZQhQvKDp74Qra188V1GDhNVyzBqPh5zfwbRc6xfnHALE5CPG8vTbMbne2Vqub7FBB",
  "key10": "2tpjTYwzcehHPSGWY8usnPkqopFFqV4fW7fcTxpbBjpWzRpphkWXrUVh5QVpmgbSJHZmvuZ2F5sVe9QXhQSYhjhe",
  "key11": "HY5P7c2YR5JZJt67fFWtWfmVGcbReUStH3nPD3VoNqBiwUHKYUm4bTk5dDaerthVSa9Ns8eg7J191KzSw767o1m",
  "key12": "bCRMAYXJ1qiY5V6HJY8KyZvi7ixVGsd4tQy7VATi18ifGuA4zfAYLeFGp88pCqGUfNihHNk1m6fS1M61iTAWt67",
  "key13": "4oueHhxRP7FYmrzkErtYcqqahWBGGwSY5kHuoLZax65QkfHEw2CxuwbZzYmZBqDJPRtepc2jno2rJoAeUMkt4Taq",
  "key14": "4cYZins3jikzQK3KKT5QhTjgABGtFMZ3aWfxC668yPDo9WQAzPTwrMNWhHNkHYCUmFSxeoMNeEvg3SmSiEc8ioWv",
  "key15": "3ZhxKUVpVNDGDZ8TgwKiWqp2DzmkmrW2csxYQwwdoTZMYWZoc9aSxRo6k2C1xj1RYzttV72RfuLJ4nEkZFu56DL4",
  "key16": "5dsmMcn6vuKyDSiEmjbvSmWw2FKvCtTzrd3PA7dJUHD7v5L41EEQwJg4zMixQhvmgyiZG5unR8xsnoKHZHai7vwm",
  "key17": "2S5ijxaknFB4vtt8jtVVAY4HniFECQ1Mr8LmqezGx1cZfBsbYViMXDRVzSABgiwWgQFLWuTLk1bUuSJ3TRaRUrKJ",
  "key18": "3wQtwSeVGoMdmSx99PngMTuSBjeWKk6maZXB7ek4k9dcTv4ybzbwwXnqBaWwcM4ZaEuBuGgEfBMy8TTcqHDSqY4G",
  "key19": "prqsTwdmowLZp2fG2T3ZSv5rNcsnFfK6hTVs9h2YHP29mANKw32KP5UukttX4RVb8rHNhg3L3vEuZgRwQEU2rdn",
  "key20": "3RSAeWEKieEo4cdjAZGuu5X8EB46mREfLHhW7363NWiqJmbiVDuFd2h4WNU7A1f9UiTMLYRfPMaPzHE6m2SFb9JC",
  "key21": "54Exxtvw7i6LFLw8qiEVKXa8RzJ2FWw8vSfnszxQ1n7rdF3HMFcETjmjsVNyjEiQYnCmrzkmYz8gtqb8bvWJEVJB",
  "key22": "NgyjzNyec2pSPP8SbqDDPm9KwhASZxTFwT7XDnYEmXwxYtwrYdjDwKoTXbGr8YevY5gKjyjHJkafxHnfB891BC9",
  "key23": "3mWsBcrMuofrPMqEpJDtD99GR5XjELW54qMBWuTAvJdEWMsJqRbURnL4qn3GXbmbdQF2YFDre52oUqAgJUAtHNKX",
  "key24": "66pRJ6RLezQ7HxUTBXoNURutNTyi3iYVD9CU5948nEznGP2KH4YaLa8qpow5Nef4D8PWA84Fq7RqowQV7EHWVNv6",
  "key25": "3PJw2zC43mFA6DbA1m9FQSyRKwVCgCUE4BgLuDaYUiqmAmAeiTcGqf9vUoe4Yx4Wq5UhwbWZEYDCsMYzVx8HyLu4",
  "key26": "5CJiqz9GuM3Lsoxn6oLsQnm5M5uzvmrt67qZ73GFEXdj2S4HhZnEVudg2tzPQGwHY1Q9jXrd2tkBmWeHCnaCjDFv",
  "key27": "2LVfbojWdRdUqL4cAkUVHfWuVD7cmWAVpKWKB3MJT1QCTcbSeqR5tapT43jrNEzqH6jRVwdmJrthJm3vTeNrgEM9",
  "key28": "4siPpm4RJEe2sQRGCvDvWUExEPmoUMQHwhCqsxXV6tW1eAgr2zpkTA1q13SZA8VLiRFGtEzPQDuaQa5Xck4zbJ2A",
  "key29": "3e2zQZ3CvmPaXdcY3uJ9R86vdcN7uDcPxsBb3WTLVz8NBoFYzKGcR9gCsqvFUbUDw7QHMhyULrepQA98wsvaEfdW",
  "key30": "jKTdBvGVMhj32joRLXS7UhBNbcV8q32ara7R9wffJDr8xkDPWVWDxGCfWvKf88gL18j4Qen9EEhHywvQfWideh4",
  "key31": "64oKwwBcVC6GGXfCzmgJeFmiKujyBV2GkaippzHTddXm9EiaV6CW14WN5mYNhD72sGK1iTVSeZJ5HGJ4zoUThek6",
  "key32": "2dzuxzPeRWkE5piJAsSnXrggHQQmvcnaSUrheXJZe6H4Si3waSDRbLq7PWjsMm3LGwoRNzymLhQDB1Vu43eWMiCf",
  "key33": "53E51DdqPvshaMYhMBGgfUcMvZJR7SR5WDHXEMFgSWhj5qVoMeEwM6qycFw8JcVyQ9XNEeJnrhwVnfyMkVtBHqPz",
  "key34": "4hXT9whU3LZf693jX2vFC3sKqUVa3edUWsagkFkWeZgFyqrEXWiKNWH9k5YtLi6JNnkicxfsZnYqrdx2gQ58dsQP",
  "key35": "2HgZ6amvcoAjVUzPnjM1XawQH4beSaK3uLEMLpEQNxKcDXTd4TdaFK1gWvA4SV3S5wDfz91uWsLPRx9hMKRcMoxz",
  "key36": "4gdcYdJiz8QJUdEmEgj5jjazY48NDZ6psNAudSguKthZWNgynzGpAuVbLtGECZj5o2nhu8MVaU5LYr41fpJ5N3Za",
  "key37": "rnPY4XKkHNpqaDiFHVbPXcgATLB73ap4pAV6GRP21CY732rzsN2si5BDJsZdozqPGYvZLstmDowGiC74ni2htPD",
  "key38": "28jraW1tU5v22AV1THFi3PSGB1ZhJDzLFGxygerAREd3xCsk4NMx1rtAw3kokQRWsoG7ca5FtrgCXJghd81NvrF6"
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
