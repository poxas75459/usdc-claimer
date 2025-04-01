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
    "5ZK9P35V6hyNGZY9v9w4RaeK4preTLXBcdYbYKGbrQkbsVK9HyQMfgn3Ltbjj1RYEQyiSxYKT9WjrT6oASAafi4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7zPwTspFKvssFUsxixDGKSsCpMLJVuP2GPCKjnkXxEez9yPHpi9hVtVSRxsGNhKK2ixCDdtvGnAUHFxCjRqH9b",
  "key1": "2e3AKfGS8xYjCdGttE9uHRded8dLRUHCTXK5t6nKskQFxgtGvm8MLvmb7fAd5Maim2F9LMArRsYJw1BsPi4tsSA7",
  "key2": "C2gCri7bkpMhwVCB6in6Niu3CC3BqMDvmVCvVjNCJGwgPqd7rgFJGWEW2gGctCh2wSy8wNoKZgxnxiUNtCmfuTT",
  "key3": "5ejLhmymoLpgqe7ENBtxnvNYGTRb7tTwvzicpkftMRtfCo8eswjDPjobe2d1M33JNPWxUh4D1CETXxjWFuH5pFgW",
  "key4": "38VmsjWRkX43UqcM2xUWQHjm4kCq5asCnV5SUrCWEjKNbNHs8MDAaWLa3W7cAZaKLiSvDc51dfm6yJmZC2A7fYUG",
  "key5": "3PB3jdVD8jtnwfqFrQTdeSkeGpgSUGqNShNRYbDmTg3Sn8PCNoQzS13pSfpCpQ9bwHCszfwUpxYBHcGpJCQ5RDgN",
  "key6": "qu4txi7uSC35Ba4EWfQMy58NYMsLWpDrT7pW7zAdZURTSWrbxfTmp7gczrJvvb6QjXbJAhVdd21ZNjB9skZoFNd",
  "key7": "4nhAbVkruVzzgA6sBkdL3PkhDdMqVK1pJKC3EHGDAPHetb5e5sSqE5ZLpbUAdkmgZwLDPiVr1TmkUfUBQH1qcytS",
  "key8": "3tTEa4Yo6NfSgejfCAF1ufuhiLi5H6rLDnhjWuE5TJGSheTTjizjDpRjaEvuHjXxcqba3hXXXaUNjM5F4B8VsSTN",
  "key9": "DWcYFSCKLbeVArnW9oXMHiarrBsYaHNZUMk2mLMwPQ26TToLybL9e2Dp3heGt33hXqiLLWtzfJ59LeJKrUo1Ps9",
  "key10": "42X4EGVsQRGxEgrDbMVzGSE1wBa3EztS7PFBUT8LhPQwNPRuUt8ADpjPjC35TKihHXa45uT41KWhB7XerecB2bCL",
  "key11": "47Zk4nqSuw75Eh1mFHUcoZUGCmWLF2gGffiCpPvMZN5zRFZSHjqSJRhnZopP2hLx7hxeAWmvK338qFWp5xw16N4H",
  "key12": "2mzPxQceBHVu4c2avDy6iXE47Pf1pETVf4jHBCdxuipcFTbjKMg34CFZx4iK6mpgTi8JZLXTkWKxEg5qqfzFHpVj",
  "key13": "3dCQuour4LJcn4CDet3A4bpi9Nro5Pyio74CQmQF3Pk4jfA1BNivf6PmG5DWJ72nhM36x3VpTxfdwD3cxBQS6ZJF",
  "key14": "3HuJXoUSnW4yN4HHSzRgq52TwCzbsGF9FGmNcbZ9MShqVu6JBagnumaBThuKFKYpvtL6SSVUuwAY12GyEitBDDVC",
  "key15": "5AL82M1ZBy2w9QAjNhRw73YE8XUajtY8jjFNzKDM5ovA9AMoGbYLXcvDBHBtnGjNF6Sqzbms64FuuTkZ4yJ2MAqf",
  "key16": "2tCX2EbAuQpoeZVyZ8ucbpvyM96FxwdtMHpBx156noPc8YvxJ3whxhapFBH9doX2QFzuaZYgi44pkfYrLUEAWgZJ",
  "key17": "kzc41nHZZBPdRHBMmKGDXaeRR4BPeyCpmbH5KNZG48cuDZvTCHGNqYyXgJBjj8M1HJH5i7nBfYBXxab8QgiqXxi",
  "key18": "4R6PnsMnk5Qi5vhvsZdnqbDYdVnXra8pMBjk7mEPkfftHH2jHXDXG9WLe9Jb7rqUeq3VWpAFtBzP5xuBM5K15o4E",
  "key19": "2sNF7JvqdpQiYZAmJb1rTU2kkmtZVFuvujhEgy321o3JtAGBiDZoC4xcSsUxg8fsne2BbwiVqDuwWcnccy5WoeJu",
  "key20": "bvJjBPs4WkS2mpNcQmDSWjPLC4DAiivvzFFzW9FytsKQMSSKv7A4NLhQ1hruvhvwfQmqWT27eog5wc8Xejp23K7",
  "key21": "4UzJPj7rswdJ16MqrK7dtk74mX6LLTj6Z8bfqu4LY1UBw3M7c6RKgzLqoGygrQvWp2ewqSX3iPTAzYZyQTPWFvqN",
  "key22": "krMt4oFfTDXufSDsoGKGb6HQV9PPxrz7B1TTCT4V67qh89A6M8dn9hmNNTq384pZPWFnFZMsMTuR5GRwrp4gtuW",
  "key23": "vCjeZE2qkQeqCcvLDfz9Fxi1n2bWeaPjgK41wmJysYT8C7wadfkV5NN6jRJgMWSpsbHA68bNR7Zb9Sk3KmYTnsP",
  "key24": "S9qW3J6zgV2rAjyNJjHLzm94v8JuKLNQKcvfAgiZF2FXLGFBGXyg61A12eBk8Ntug9FWn3s4eXtAXiE1dhyiyhY",
  "key25": "4v57MS5eEngqKSsZL35zVdGQyVM465nMtdAMTVPCoAKv9iNtFYiDb7ctKJGEEcgtonE1gZ6dk1bhWF7KL2RFfPtk",
  "key26": "64zTzGASfK6jfrBqhaJHm6MwaoryBNU3rHiHw8Ex97pAifxT95EQWrqsebfrx9DTdDo36cyTM7KVE3Qk9nsMt1mx",
  "key27": "51VdUb6xMoutKGJvzFQiMvJhFmWxB1DKdFPxD4cXhB3GyAR8t4UHSSdWUzGr3m4qBE6Z9XG9uR2k6YKuw21qotws",
  "key28": "3tzby6QvJXk212UNV4C6di9kAxxQyupA2CHA3Hhy8oszwvBATqibrKsXUSSao1ww5BawKAG1jDAGjrfQirSi2ViW",
  "key29": "2kDSWFi7n241w2XGWBRaZrLUirbADgRYvmMUqC7eAvMvyC72vNCfy5Q15xF3ke2m1ZS8GTQPBqDCZuahm81CpJku",
  "key30": "Wr9rx9nz8DBVwdji8Rzti8nSWqztcCHwpMSbbAfGqdPX33wv5uS247qEc5C7VsnHqWuUHQGkZRxGEavYSUUkn3Z",
  "key31": "565ZnagEAbgpHGkgasxdo8qeAAbaaqAyyD3wScja9mME3pTiBxkoWFuiu7CMkoosSfq3erWsKQFtvr8VsbkoLe1y",
  "key32": "3vBLYu27FqDUTTvbSftLCs8iV9gQzRNvZY5Ka86W869sBeQFKD1ktKafcqPEj4VmCpS7RVmjTXrbSrQ4Sv8c7sdc",
  "key33": "48PyhQbtT1RKVSHzXW1JdxA3536KuWtLbvpchhLTRP82uHmUfnAJ2qAywTuM7W17Ddpy9BhMegtPF8QWT466LjmW",
  "key34": "39rh4BuFZL8vAEWpsG64kw7XHX7vFgEpXvEsJuGB8Jdry9JxJWU1Yc1zTLqeNxSw3NgoDN17s8v6WoheXHvRCjoh",
  "key35": "57WFzeTFDfp6vxygmuiH5fQ5kYgYJC8SFx8PaEDEU8HS8Gp57fG94KbUiGc5SwUaehfqc5rFfU8cmvNPAvE2KgPg",
  "key36": "X8nc7FPg7LH1heNY9eLrMasZgoygULxs1CajZbHMmJavXxKjxsT7V8vFph4nMXKuMAYGLc82shZeAM8m87V4fKF",
  "key37": "49frYsgn3TLGc39gBsuSPeta5iF5Fg3Au55jrNFf9R9jdGfUkaj8RBwSwLF2apmJgbiN8SgJnur5eeZ3VgPMoj6G",
  "key38": "5NQRQwHd1bp95xTmtmKnCtASZDtH3CHswP2DJxKHt1mhQF4iS8jyVnmSTdHFjihy8eyB8pQDn9PsSiwE6ApJYZwU",
  "key39": "GntfCHyUqtK9SHxG6ophKA1tvwqq5Tj5pHei4PdW7oCscD45rYMCamZjCP8PxvZLirBRCdHMWYqpnfFntp4rXh5",
  "key40": "4B6kkd4mLqSvfESX8oxysCKpNHDEuXBtckmVxiYXDtuEjQhpJyVnfdiScgrr7tQVajTgN9n4yD9T48CWo7HoQsxJ",
  "key41": "hdQc9UUqQJKSTqsfHvjavZrT1qhY19sGpdH6DAWfbqx3LBQdb49gBWMYqML9kbM2ymNZSbNVqoMfetE6tdnmRma",
  "key42": "4oKhVvUgXSUfkzXKCPE3HCzWiYZs8CBFKyMQreQHUXoDSPzCvtNGJD6NHJ3WxBjg6xwqthfK2Hn2U9E3f4qtZkBx",
  "key43": "5aAaUAYDcXTTvHG8TvdBg2maDxBfXfzuVcubFDJjVDfRqBJQHr2RJBAJdbKZfvTtJQM8cLiUPxkEtHTxiCMd4DxK",
  "key44": "2St2j15xfmMeudUKXH83GLxTd56GR6gm4egCtvxEXNV7j3J7S7xT28fNwL612MP52DYMaGxf4WtP25Zj9nGhYFZB"
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
