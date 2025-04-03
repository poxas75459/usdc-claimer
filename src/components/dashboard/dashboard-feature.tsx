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
    "3KGJ4NACmtEpHVz3XoBTc2q1UvSLkAPsRsXHRESBkJnCP8oqk7QgKnNbmMPCEhRpuVq1ymq7L4ufcRPYSU7592aP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hic1XyskzjDSLf2UiXKxYhY9o3sGUYfdzv75xCNn2MU2CBArVmdbJQe91TS5kJUM9drUfTFTFPykqzhMQTh9xwv",
  "key1": "54d28r8pWnjexfi6NK7vrFykRvuHL5apTYmeuSPrxw7G3TCYB17htfLfFY9i9cJKctkQL1c67XfJZCahqFKTaQ8p",
  "key2": "2D8L9w6APPHvn5Vp8MJU5NXJUWp8DqNfu1prxfatSX3PZLKZXaD8ztpKk4N93YjwD5EVKn7JN8oa6yUhmKpt9NgM",
  "key3": "4TdNUCpCqvk3okc64onMmBcA9dawmjNtpSWjLZXWBwFiuER88gtKaPFHqaRYj273G7wkizSd5D1XQiSBkQmkQDTM",
  "key4": "3re7P1ZQqocbFEJ1cbztVHhYni55Yd47wDjdJEWQTJyYPvtj5vj5nMwwmTuMZrFwSjvEc3ShiYL9WAP64QEx7ejR",
  "key5": "2DmAouczYj5mMwLQ1NLvAPSkE4JmCvPpT9w6UanxqSPULrsdbwMFtd5kHvcvRr2AmJwwxu4gW3LVha6tFq91X913",
  "key6": "32m2KNdtZJitxYTswqHePZmgkMeHojGEeaZDVSzRMGepJCTxN3jDmpEXBVc7VRKRzdjUHvEDEDJFXLmgtCr49ZkX",
  "key7": "2tRaM6v6HqHvzpD3SdfDscest8rt7DkuzUBCFoqRHH5dkhKcZydaNJnE4mReVUpz1UVHJz4We4BqnLZUUZQXYxuB",
  "key8": "5mGUHYQLxmj7ajV7QAMZgvy79yD8QbsLoQG4M197JEHMUbsqEQ42xzK6nHdDViRFuMyxPrBUpztQ8bsxPgUo6e3n",
  "key9": "5JG1ubeiH8sDb32GD7hKDZCRhtmKwYZqefa8zTD7ThgHWh8KtQBHi5Hbpda7Le6657n1qUmd1hXTGZy14kgsTVks",
  "key10": "zV3krCwMvzYztqcHGj8oKjk4fh2Q6nTBP4KgqLNsQJ5vFa7Dj6ovLMEFUDVNK2hbBpPPfsi1ZSkT7N9tptyz88T",
  "key11": "P8boGKGNg2uDTcb3YMjjVqz2irFLjJtLLnKShMXJBDVftWmXKaUBzkfBkphVxVUCLgeE2NSh56QyPQ7bSMGTR8H",
  "key12": "ztN5YUT8oV14Kcmp1xSAhd4MTko7xjLsw7GdLpzeu5kxMECZDBsc6SsoA3TCuCG6SiE8LraguF5f8gFZEk2xefr",
  "key13": "5Ecdpc3qSiuP8Eh8J7XvYDRgVdXuVCaVfD9y9562mFiGfqLNtsq1qbsqJqiF6oTq8iDaUnnqGqv9wyESs7M9koJY",
  "key14": "SNojevYVdHjLXnFBjwmXHB7GxQP9eEwriTcBuWp7UfWBKeq8LDGHPcSrLx4Bb7y4ZJDMQcZp4mPcAuHp9UBdiJB",
  "key15": "5CQtTGVqbg2SQNxQPjJFhsE38NJoirZkPtXW1Kq2jFJ7yWgjt8zRJCRjEmHmRm7GDVEJgZaaTsMosvYA85xrb2qD",
  "key16": "2cdqa4DjQ1iyKh6wwxNRYS8xcnda3qJACD5ziGzcSA1bKLzY3RBy3X2faYsf9UwZMfDArBv1P2tLaCpECLfuzgvn",
  "key17": "Z75GpgomBDMbBLjRdsoCHCRL3uRWTzuwajs6mwJs6A7p8u3iSa7Lw5EqXC2KgqVCdoQGY13XCJqp3DeZUJ2KfBF",
  "key18": "F3rSamTCk6jX7pf7XSoARY9ww9fvzNsm1M2UEXo2CeRG1TrQJuUf5AcohFqvdHe5oM2FH5m3hyTaTXpzoMoLjm1",
  "key19": "5DwzAPnArduC4sC2on57vP9TybV4zbZ7vtEcpzoYBYDTgaCwoH9mqKWC9N2G3EvgjbZtdpVWPPQQhC2mvPL1EC7r",
  "key20": "wHpLt9GnPtWEYukARVgD56XvBUbfu2vghYxyLpyECb8DLYuSgVbYQ8FRcTM3VxYJiDDrc4jRyBT1A54fi7VETos",
  "key21": "5uJSePbCZhkMBA4Cyp5AF3PjG8SfPEViFvkYXBG48R5DBh95Jkxbcyzmk8G3G3ewt75gnMxvsRohrXNnPMERH5JH",
  "key22": "5sPYpqcQBA8KshhApUoJhNvqJNMsp36dKV77aepFcdg8qnsCNoJGdn73eyKXqwtJFC4Ni1rXsMBGLB94zH8rLYWe",
  "key23": "2tt2KJvA1Y9bRYUSPC9gfoGx56S2jgphLbPs5nHTTEbcE3XgyaPrjzAiXuxYaYj15hMJqHY54DVtrZqoB2cApDnb",
  "key24": "26PQCu1yxJkFWLGXs8cjVSDf1UNFM1kJjrXaptyKwtAMjdVM5HqAmUddu3HBZk49WELA7TrxzwGtfctZ5wYgdaqH",
  "key25": "5aojND87KRkboYEU6aYk3bADzhcsoCLFoY4YABLPYwqD7vfyBjrhBM5QGLPNR8pPPpd1Azxhg2sdtXT3sZCyvT4a",
  "key26": "5DYUQrr5Tbr95qtBJcqRBiv5qPup6QHDxYtFZLs9NYidNxLHUR9Ng8FSPiDKxX1jHPn3KKPtAVTaXrFn8AxVt2qS",
  "key27": "3W4XjyQ74pw74hQ3khA9LhLKNftUaNtrGByhwYQvwbggJ8GxfQVFZgD9aAZCb1YoXoodvsfMVk8WxG1L3J4mVQon",
  "key28": "5Kz8hgbSCSZiBwNuaRnhhoyFipJMaRgUNQUf4kjzH8kairdUXEzXF8Tk24zkZRKtCveGDUM6284eG4CjP4hxbuoN",
  "key29": "4UYduWiMYMfPkgKPQ7fM3PP4Ez8zBe6kjWhm5zTHD9BkUGPq2AbYbKHpwuTXek9H8zuP6JFWZCYp8q6vbLEkvBU7",
  "key30": "5huUVW3sUAGUCiHKHrPrKBbTpsdKHSpPaM91nsaNxnMXfjLmXkZt5eFFFGtsKmkfjWAwD9oXjjwoxRCviLSKRo6H",
  "key31": "5seXCzBRSDbmEDgBxf7NotBghvZ1hZARAK8urxMZ1zaeLnjPcWJUtDw1Z2cKoqnxBvDmpdt4vFgbHQf5eWYhki3E",
  "key32": "2SgeJpjdCCGwTkb5DbQvS5jo4GD3qnfbv28dkeRBXcAYD9bnRJbKucbCzdMMaB6EuWcmn9jG32UVwARmFDRHsgpC",
  "key33": "K1oUtFM1aUczx5VJ6DLfsGCBV4aSFB27VLUzziPwGLD9dMvmhkhuiPtZhYvu5uJqZHoe7Sp1KqqdtruX9rfUB3b"
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
