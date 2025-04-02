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
    "24e9WnBo9HVQjZ6SkubFmY7WjPAT354yri96AqBSp3aaCp1rTHPcMmEQ1x5gS2VcuoxSgtk1SFv4gw6iMewXi5oK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hRKoQyNo8DFf3wAqpoGj59gTP5Cn7D4HFwmhfJG7vAAwePH4X8Zg4e7yuLqmAqHzt5csmaWz9dSMGVAHF6myA8U",
  "key1": "5AZvXLq9eSx27LGSjr2uVjkb73dD8N2Rszc4DizKAEvPU5Vs6ZHswuHCqwApLJDzXvJo57AudVkhL7b9fGsjNyP3",
  "key2": "514t2jcyQjJYgeEpXtKVCnpNEQ2fasxk9TVBS1YeE5ePkYo4KAzjUVp8F387mXJi2XxXUaZrbRMrXnJo34f9BFja",
  "key3": "fdRxeay5jVr7mwPbrHsWm1949a2oN68wbbsMsF2a2AKWKEr6PrbUhVKUUCCqqNMHQ3eM1sHBKLASE37YfHrQdBy",
  "key4": "5xPXei9yZaHUCJpzBDjCdvmTUaXDzQmx3tfqoQspGG1n21cseHCRU6PpcnNB9WWpvA5LbYP2ZaiGbhCwVZjuXedH",
  "key5": "5H6ANteaSKn18HtPYhJjjDhtNxg8vuFghyyyjRF4xbcvEKnFmP2RSFUNAQSgDpppKHJjGAErDxqQ3WXNJXJ8rpWT",
  "key6": "tjvHNXXo2w77CKKLsECLAsBzbpyj6LVKv1wx3XbU7dXznCGBnBvqmeV2VagrTMwJKesuALuuz2Dd2wAdVqqh4Ly",
  "key7": "guDP2sPCooMkfeWQvazfZmBz7YfqjxXCfgP6wSufjVzBsgyTL8PWG6NwUBtsEUDLHsYLst3PpKyk15JeihMxmED",
  "key8": "6gfnWUoMHfwUVuPF3NA9qQ5qu9CJYCtY2ZVLqTTjarwcnwUwnvGpTLZtzFVa64q51HwKmi4XaM7PQubUAPGPwhA",
  "key9": "53X36Wogznms2QgU2C3WBMgRahz14qy5BgYZtSqftczGa7gX5dXEFioeSmUKNsB4vA8BW6W8ZXoAVmRuvBvs8ptM",
  "key10": "4LkyAD8QkVUxnppudpasZhYDbCfBY8WyXMReaTN535vHNqsnyRipg6yqdWBQxWesdvur45TdfWrctdH8oYgTLMLU",
  "key11": "4bQqErEg6hwN7DY78xCyrwGfUi5HTbQrP3AVjcKHW1cRmwqk7eb9YtS71y9goiAQzJDqRGyPYsmECdFFw4fYostB",
  "key12": "5ZSkCjFhYa84vn4DgTYqMPwB96wre3ps6RXY8wpbweBPDqmXYfTciTYPHZDpJJtPY9qLN39rUaYR5cpdNWJiwiU6",
  "key13": "5w7PcQGcmpaibiy1ahgCfcGxZkG29Q44uAdHGotNiwBWTAXeqBaBkYwi7zZDy8kweq2Y5VtzvGm8rVFxqsHTz9GQ",
  "key14": "4rTtxz4G7PVrTVxvqgRpAXCmSGEg9BTKYuM8JaZwNNYqUvMiLuoEN3TMDxhZD3FuxSLVM6U1zNeVnGjXHfD6k2FV",
  "key15": "5XPPMHw1qhTFcJWcjt72ukQGJjzd7eK7hEPqWWE4uNEmRNwvHz96iF9ukJUkRpkfH4Lawz3NKNEYwzsP8Q9dEV5k",
  "key16": "3eyijcJR84ejQpzuaPXhETYJjv7NXL4PiNSMEBtt47qyrhV8ovgyrZ1QvjkC1JU4BFMJmRhzSZpfr44kAnKWY2XQ",
  "key17": "3zjzTM7GZkhZBMggiPK8XPGJ7Tox87cJmiZ3bZezsudqdkVds2NJjiK7F3mqYXnXDFQKo7Pdfgr6BzYWRHfiPftB",
  "key18": "N2ouyePL9e4Z9hEgzBpd7GbQvxJ17iY53WQTtPXWBprETbNtaFxJLJL2dizrb8UMK8tgr91rwyZhCQ3Q9hynVTg",
  "key19": "3Em7z7VSuM4QwBQ1m13CvwiDkRg6NcMRiQxc1k1j8j1rgeF1bmL8vTTJPWAk69ZCGwH8RGna5Fa9ASBVpho7iTE6",
  "key20": "edwj3yLGdw78ApfhX2WMCxqR94WXMgwiydv5KZUvuR21AxYfVU9zFeFZeWpWoa4ACUrvm2oUsycfBewetKWY2FM",
  "key21": "2jv6tntFzeCUadHBTcVoK3A9zpMv71nbJ88qt6cWYNLmVChvT72sgsAht3yragkceVRe6hyy4GtKnz4LRPt4iuMC",
  "key22": "5xipMQDyqCRCEiKT37hcxMn7MSSqgTwvYUQzhNhnRF36dQKy4dLsGrVdo45q8jTRuFFDgG8nNRpMp2aNDdCquU1V",
  "key23": "4dQRS8Ww599yLtQuBaCLxvWqEpHPtLowfe2NPmNfNTQyNt9L7gYN9NtFm5VHVGkAdHnRGcHvSe2VcmaeCmeQrayF",
  "key24": "38gXCADTU3AVbQRdMoGrZEZQ3AWeyMCeMPqCLisLCMWzjHTV4whwTGt9AQbzJ5RGzek3orLzfm38m7cm5rzkQMrA",
  "key25": "4XmCogdTZNHB3DURJ7zEgmVRtj26kQh1zSKEfW5aqzi5AKKcwX2NoSgxxiQcPv7qPHg1MKF5LNhdvEHvXgsAZzv1",
  "key26": "5nxXMEABizgZzPn5FTHprXAn7ojTPfaBZd2vux1rED5m1nW9PWYLRc9HNX1dYcVJCSDWYSLxos28q56Qb3AtJ5Wj",
  "key27": "4eo6BGhvJoeyoYFg8ActP9tDfMTsfmewSFV9AxwXnnLU2rBRz3AwYPE29ByxWyaYzkwTP732kTUJ5ssTAMkJYnqa",
  "key28": "2WThoXpmzFJ5a5WNkYUmyt8L392rueW5N6E1zEX6MBu6ZVH1rfCUimu2fsjTZAJ6yws6FSb38mCfnBXsEdDXHms6",
  "key29": "un61MFs1XhZ9BwmN6vNhoysJMhBP4pMRDNt9EDKMNa9zWCwpaDD3vnoNtvkezTXEiUHiVts1QXbWLQ42LzWJP4p",
  "key30": "5HAqGonEU8Ps9mHYp4DosbNGk8RDa1aZDRTHh9JxbpoJGsA7RPd5PuGTMwqJBFjfC6hJ5XfLQWKht6pwJyrxAkfQ",
  "key31": "ZKeT6GPiPUUywMKENcpd2cXbYWEzcnZYdbhEJLjmEyafkFUV8M91haMiL6FNQV9cJpaWoS83PRycyC8YpRoodeh",
  "key32": "4yw7m1qHLvzdkd2Fd88xBVa7Wyn5H9jyDR4sbkLc5HjPWtDyCJu53HigrucJk67uTf59MUPekMJsxcwGKQ45DDDE",
  "key33": "2Ei8cE8EBwQyU2nTQfYFWyFnecQ876o5ViSwKSNMby5yJTdhAcBvgpCw8haWZmNrRp7JRH8UM5PnnDqekLqxbCto",
  "key34": "hRDksFmBLmEQnT2N53SCnDwMpYTQqAePtgu2sCm8Aw2w1JmNqQPcNrCwGEmkD6WdsG8v4aurypra1jixZ3pekdy",
  "key35": "57LEoeqoREp6ipKdiGiPG2RtRR2KYsJpTmJWY6Aewq8s4hcNB6z666s2cKjqWy48N76Kh7gGB9DtrkqmBoQzgZEA",
  "key36": "2oD6NyTMWQAWRCzr6botcgDeMMhmHm9kXLy3JFuTxxvjcv5Ka2zkPob1kGWdfnHiqsZEKDSgZfnYHjfVnUbVSghN",
  "key37": "5UfZfMcTwYBaXE8y97vTLxzzzSWbANiCVM2QrjBVNVEXLuxne6EKAn9KGA6wnRbncrsw2QZ7vHuRFLciLcWxpyLT"
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
