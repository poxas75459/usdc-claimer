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
    "iREDQaVDskojvcp5xS3d6XdfzEpZMVMr5UdLhLu3UJfkZUsGFFHbf2PXi33XfsaS87NbYwAagK4HxVdAuJpME8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSp7k6rjvTsVYLWxvF6sSfzoxXGi6u5UxaC5Pm9JNsdMhLnvxtuUbZaYGyiwKt1jxzVqWAVTyizzatUYwpKQApe",
  "key1": "2oQqt8hn51XW8dFZhEmMXpfnrz8DgAT4MYVMcuUJF3UgzFwU3X7sAJAgSn6SBuVXSJTW5RiG7ybXkd2e6SUk6cVm",
  "key2": "5xbwi938GZ4jnCTo62itiu3ruLEyBZzY23DWnjVFbyfg7mczuHCLNygofgw6cwBPbwHrw2hBT3h2JxFX4GxSDySn",
  "key3": "5hc1zzPodAyPuzV1DYVQTwHzqbeu5F5cLrFpXZoeASfYfeBdGE7SwBjwiMpFdrshGeBXAGMy75tEEvwq9tUYyChi",
  "key4": "5d5WuYjXGaVbCe4BwwuxcLZ2PWq5ik1zjV634KwpLSjfapUREZGvwanbWgumFudf5xwA7hyCGgpFL5aWKJaQoygp",
  "key5": "3eRYWFQW65Xfxg5iGJHgXcZ31Xnopj5M6zoh8n6TmpnxtWCBzs1PYBy4MzLgwXVDkUDsdCmVxN2vcNAH75ftnxsr",
  "key6": "5PWnQ1Q8reVqHsUVF1XHpZjVTNnL5414113oBZkoVCz1uaDTCtTkbtoLGTQA5snxcHqmsAkudEvQXCNUkcaqnvPd",
  "key7": "tyfH1c8FqTXynPZnPYCL1wyqLnMCtCro8vjXLMhqYu1kS1wtHdnm2BSQWNdumpvArckcNomdXFmi8Ei6TPYZ2HM",
  "key8": "3MjAY3p5Whj8FDkyAipfLtXoA9JsqK6FYddGqRgGo1FxWaR9o7L31jxbYBxGWhkhLM1yfxyvwKDNuASA5jCQXu4D",
  "key9": "3gEwu1DTUyLvxWtH4pcxrkCoNmSBobkJ77JHvRNp2Zz9gTK9DALWup6HtBCXNbFzGjgpG3vN5uczZgC9jUkDrBx3",
  "key10": "2E2Y3j3c94mRAJ5EzJhJKgeksBb6jVqE8XwhvkVmKtjHy8bxjfatDhdT5ZhcMW1p1MMQ3SkfnS4dADRyg7WhmAVK",
  "key11": "5ANaKRhRRrgP3BYUV53354QQkQjzRJkisZZKRAyYxj5S5GpEeVpHG4f49aJhAs6oA8yvAmAvxQzUu83w4scbbqC6",
  "key12": "2dJ78ZCpQAjdjXpstayWGfVzGJJcJBbknzUwiy79pFZETsfjuo3ibFwgjZwFXtVL1mE3AJsghitFMduFGcrATrpa",
  "key13": "BnrSU6wTyfiR7n52vPidKrBi5XKLYCCmoroZQTgKqSNMFYwSJSZdhuSLPN8VkroSRQw59RWDmZgsMPDPEmS7rA5",
  "key14": "4aCJRdEZHcp87AdFUytAeuee3hCjaS93fQxrQCzt5YAvaE3wu2KSmmW4jqb2yeXQXZo4Fgtgha8BmyTDXYzrzitm",
  "key15": "2KgJgUPJgJi2heNNmhFyMiZ4J49nS5CXRfbzo52RZvx7KiVdWg1bhtNBGY9g94Pjz1AzkpRbBGFkEa8BZMmLpWeE",
  "key16": "cEAhGbcL2Wc1PqkbUJyqtJtr4Wn5esN9spaXbRc8UbJQShsS2yXcjEVAWu9mMow361B8vTYVEfHUoXzTvnyF3mf",
  "key17": "29jk6DwXq7S4teov3XMjNRWCERVGi5yJeTstzNDka26qWnH1HuBbaKLJQQfEAAzjkczsRfyEKPsscYT8dSRBc1Z9",
  "key18": "268aUkPgMZ9SMfDJhbxCyqUWffh782zxX26PoLbLvxPua2GNukvxk1omoFEWPEJG4fY4L2XxnCn8Lqfk9ix3R8BV",
  "key19": "2piApabfq17AWzov2b1iMR7eTDqtPbSZ63nFmZu3rqGCWG3234ravQYq8Rxthcr4MH42adE9baYJ2hsG2aHoFShN",
  "key20": "2Ze4FWrXZDR1yr4bwupoD5m5uKktiHbNk8iSGP4SYoKADeJ7r8o8NZ3P1X9DBt2hdyv5Rt6uRGEKDzbowJeHSqnX",
  "key21": "5jvM3kVWPaYWXHPsesHYTCmWFFqhtajwU6nSiZ26dNmZ4nh7VxCJCUchqL6piK2jKqpRc7u6NpQzmPHk6GX6jNz4",
  "key22": "AQ45gPsEPJs72KqcqA9J3811LTa5cBJYkcumjsz4RNXuaA7nt4kdu6oY9wGTeUB18ZX5dUj2wunCRr4PRo7SpBQ",
  "key23": "4K8QUwvWB3H9oXMJUATjD8sc1mc72jyXmBBsSHE6cd2CtzmGf5v3BobmoXQht4xXg6RnTZcgnVvMw6wqSWuHU7W",
  "key24": "5sKZQVR499yP5bQTYuonD34Yn9q4xcLDyiHqW2AeqmUp9MF8r9UXSLVzk4vDeFEyETJ3qGf9KUaZx6mf91JSzGPr",
  "key25": "3JgXfCQsHFYZtKMWA2kHiDL3GuURLB2C38AQ91dEbsenyq8k13tqBwhtTDzhBNZ3ikYPPRzba9ZLU31RXXxJraH6",
  "key26": "2B7ZbfGq669YYE5jKBMQKBHub1AAJczqhjri55KX7PTaDQMXnhGdVF5FepBuNmkaCeiDrGVAq131XngeU8phzqc8",
  "key27": "3RuQwCyY6FNzUEz3AJwx6xBaUPoT989ogUMRSYwzbUb82jmEJjoSYSoS86P3MczvEwDyM12WSb5porUHBXM6ddyJ",
  "key28": "4EUFASzMFPTx6SngGgvCzozNpU2QkasanEMrdQBn6zyDdWcaTLK5QN4KgxuT6Fmo4sjreDT2DUSLnreXVt9ixjm2",
  "key29": "3YJp4DHAQVEmZfQKxrxgQJoGiFeHP3kKwM5diXWR8aamiuB2jviJNPS9UmP9yDwr87SFfuBRXpmsYa8Db31BmTTV",
  "key30": "7jhUwDuiLJ895oof6W2veCTXVD7oAfywLyjCw8Fjk69DjugnV1GLmTqFdRhHq7c4ZRoyW4Yw2FR3abs3YchJore",
  "key31": "23GbGefu5CbSPrGBA4FiLyyRaEhu5MpWcHdYCfx9CZMkfXjJTK9SrNdYSYXcNr4t1ETWqe4dzjSmWNAUy6KvEneg",
  "key32": "2cE4PejR6Ca91BU2iJ5jS9ZAKfq5WEFhAJW61QtMAGD6PrcSvhXajA9Xjiz5PBpHqYYy4PeuVonaa3i3XGtG3v3S",
  "key33": "4cfP4e9tUs5b6vwWLm6KhKi2ZgpzV1cy2KDyveCigekopdRhH9paZQ4uQpBa8GDevGZjdoNUFmSnj5fHir6iQ64i",
  "key34": "632dsZWkdqMJUNGGuLWUsYBcbPpS5A5SLq74F2LAzFQqZhYxmrMKqEtPBtrsQNmd5VjFc6tx3DVPsiPGwwZsoQ45",
  "key35": "4j8Kvhm5KomiLodnJe3gkqk7vsDpQyU1jvvEhCzrQAb7Ns2pCLTWeuby8SRELHWAYJaLjP6q22ccZzcn5bJTnqNF",
  "key36": "mFYpHGTysoEHCgwKvLgkphoUZdoZfALS5cguVUbbCmFFDYuSiSshYoVR2uVNVF4PmGN3hwUfifGJmX8CaPq65na",
  "key37": "bPbkW8NrBmY2o91hMAQqhE9uux9giTgFz75YYu4Tm2qzNPCZig43KZWeEavVhcSe2fkF4g6RyREkrmpTpbu6SPs",
  "key38": "2JvBkKbXdt2uRrya26SP2kKvJveie6N4KtLzuVYebSeYYaSfrB8tCbM4MKcdpnRZvRZSykErThnzKWMp5LFSveaF",
  "key39": "4Govzi7QbqUoTnuhPDZjUp18WGzVAK97VYyddJdov5dQdbDX3HeSf55iNzzs8qLB9YLmXE1eeEyyXpWYZMRz477Z",
  "key40": "4A3xZX66cqqbxUSGpK4vVGHxXKq8mt6Dj5exoXwiau4Ed1TpwbJvsFJNyw2PyVtkpkSXJ7bJhwdnbD9gC3faNgpK",
  "key41": "3CsSJTMLBAMvrGeBCqx9JSCaG6BooceFGLdbzK6MsrY66a65t5fwCjnw77EUEYDc7nef5i8GUiPDSvqNRKEWcHkh",
  "key42": "3fucJsvtEopYuigTbyJRm4RU7egYE3t8S5gugVfpGaLXSbYGazfZuYxANnYCqj6C7ceA1UgwCHySrLTGSNNF8gGN",
  "key43": "5xNMdkPkJMp5zDdRHNS2Voy92FjoFtotdABWmCCsRFgsZ1dYGXUhaqdGEijrfycCoVzoiGMZ4SuEdGUQZ8S8iByA",
  "key44": "5fnv1LBDXh39NrQGiibrSf4HS4ERxGTCSCWWjswDaVywYzc9yM3XuZWTxPde2HrLGDYfKVpGpz1BceMW8KPZz3nF"
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
