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
    "4CZajpj6u7gEPhTZhgZmmfLdvjJrnNErVjifpehQry3TrtoQ5ULsdKPwDChP1N8D7Qvx5YnpuFxXXy9DVVnjFLrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjJNJih8URLW9NKaNXxfhRLB6wf48GvmbyCJayT8BEtgnXa9kKJ4fPthxq9gB5YCRVPm61RxVLFRJGoN8nJ6BvB",
  "key1": "4kcGQ99iyayYqDz8TFnoq79j1rKqm1ScS8kGPXVYK3yhwH48hhBiuWxQq3h96RWfmWLsf2m42iC3jPbQUyEmaqap",
  "key2": "5cQmhuHCbo65NBcZgnkwi5mUfUwy6wd4mnegw6gakPQKQXzwYUEyHcRp3EXbvGcpxuqEAHaH54NU9QrqSt5ynJz2",
  "key3": "631PV1itaHK8vBpLChKGpKtYvabsSjsxyCJaMWQqSgMvyH3LTNuD8j8GCBVhYHSbjFEVssE6ypkdc2smQWCjz8bt",
  "key4": "Ab5wtk689PtRJtMu4pJTg8dEnv8rjUwY6XywaDvz4R9UDZkNfkiErKMeEjM3vRugfNqYU599zePuKPhpKNLhKbN",
  "key5": "3MxmSujUrYqB1kHm64RLzQ8tSXuFY7U24kjWdqVsZN7ZokzCxoZKpASECdfXFg3FdJE5ZDvHk3XfgK8Vz8UXYrbp",
  "key6": "2u3DYy7WrzZHxj9ayiK9L5NAU5irtVDqWwyLFnYFbfjwgXXCznXgvojrHq7kStYbk9TSN8SrZHC1dTkHX4iGSogW",
  "key7": "2JpJqqQBreCUbcedCD9btuPjCvMbm9rQY7HMp3DKCTnya3wQQwvooYyqQ8PpeHzBVw8gjFi9Wio6LN2GSs6jQsUr",
  "key8": "UWfS4iCf85bVs8rHef2ZVVnpJ6NwTEgmPLypb7bh4HYP23k8py3ZpvaAie43FM389Lfe1iATXBe6JxSVyCbMjLu",
  "key9": "4wLcAgCfY65wMwg6c14wXKxFhTiWKuhGAyQfyKi8NmTVayF7PQM5f6JKzBhh1Us5gQypHYTdACxfbk8Kwr9YtWZr",
  "key10": "2v12WNnac5eSz54XXD8GqT3U53eCe5btc9SZfghQCod4sdJHNKtwjpwzZ6fddPxxu7wLC3dWaRxFD7vsWuAXsVw6",
  "key11": "4WZaiEPYwCfaLfHYxeiQVhEwLMC6L7ffokCa32NrsveK92EJbkRp5a9RMeyDFGgqtEC2F3ugUEUjQ8vF6gaiveiJ",
  "key12": "3C3TZvswsu8ztTsuvPmYrrUdD1hLs9Dmx33F9hUTTpjGeHnykTaducYsDRdnyBSuYN6dEeGNYsJtaavVmRLC49r3",
  "key13": "2A7bDGfjUedBivo7xghbTeiG3G3bkwestQ9V3q3axXCXYVR1pqYysS1Jcf1oSgjmrcKtE9z7yWCJymm1vzLvqYqU",
  "key14": "5DsWqGwwSFLFfzGnBQAbKrFuCjJvn6HScmxo7hzkFQFCUAmQmD2p5Amzj5uHasonaTFKfmsv5FMb8pJEqVStJvqQ",
  "key15": "2dsSHz56H7PFv36JrXonq2JqW8sy9y1XcA2ZYedVXHVUk3tun5GfzFNZ5gRwQ6HFZC1g2YYfPz5fWr9PQf4vMvE3",
  "key16": "TU2BmqsqJudU7qk3evpH2fVr2pJCGc8nQk9zBSaQnzPWeNeeiZ3psHGS63j3L1YrgK28ebRTB9vhUYDMRGvZs3d",
  "key17": "JExv4Q9rwv7ura4t3SkS8nt4A4sETCvaKUP16kpvbwXfNPh8iKmYGx1zb4NgazakXGcHUgrhL7xibqH5znLmmxK",
  "key18": "CX91rHcYBq8sYAdbQUXq5EWPJb8jnwBGRhZ4F6qBbSC1vQCu8B1giTQsA9mwurzmPDfDRGqyHizbzLrUaj6udeK",
  "key19": "3LLKyJoZ999zMmUv3MXLCVGd96TV68NjHFfU7j8SarkKuP3JWAX6JC6JYEJUCcHz5qqbKVaKTxGGWmsUy9BWkeGV",
  "key20": "sRSUwzgNZfxQhCFypd5jvZ3rgkHX18qreh7qcCzBS69wJcWLnwwR6rWELGQcLdm6cN6KwprTSEpLgHVYsPF6p4b",
  "key21": "32D452V4dLmFJNNju47PU7794NS9wyPBtutbBo9LWvTGQpqvhCJY9Pudrkw6ENSH3hJ9fpYyDh9vLrwetkD8vniu",
  "key22": "2dpg6W96531JHzWo4T84BJ49x7iipVdfrxvuwUpnNy4nvy3BoK2wooLRFhx6cZhoVXAEhVSKrqPnaqNLLuoPKh5Q",
  "key23": "KqYiYYeEtjiQdEP1QciQuZZ5ZXUPp4789DkKY3L9iUhvpcE812Gtn3VAbUBjHsBJUgpZM3TgPXpGs2RfKXK34Bv",
  "key24": "Qy5ezVpbtvgMJpud9wvBi4JxDsVoPtxvkAY4VD567cJBYzXLPTP8EA4YAMLpyVFsjq1dZJkqxbnCBgkyjgmhPBA",
  "key25": "sEqLmChkCeoB6Mk3ukKVpW66hS5fX7TnHqZ3VUahkgpoFFf81njBFEkyvGW1ovupVv7yZNG2G1ZbSvo1EJ1FbbQ",
  "key26": "9hXwEbATF1DkDpviBN9ha74SUhom4xrPbUkDnD3xYPLE3u2CjrAcs9u1AX3AQeF5be9K6aXUbhYptGDKZcXmsfN",
  "key27": "C1yZogFQTYmXmS1XnQhAxrf7zTfBWWmxdz9uXg3sMHGUmJddbyCMZntiEkdfHBbnTLGc7i2d8Ynx3eTYSz8yUFK",
  "key28": "4vKnXDwm3Js3hNxx9phLmayj7qYGqiogDVuAomggyKP2rBeXM3vkNvV4LtKWPdnN9hbr6dTQqQbEzf3qVNRGBrJS",
  "key29": "4uKTA4uQZWXqvXpXvoYri7J5cnvsUKXQ3JzcdcjhQYs5sWUfa74XeXf2H47hYWmGvPbA5xdoFnzVe2yDWUY4XDcf",
  "key30": "3wkEXVX9AGK7UnvUVy9whkR7TefsmxYomaXP8YyXcfxWAFAYVDefnPUsHnvJHP73Pka2Pvm6gR67sWzYJQVhvQ9c",
  "key31": "2rL1sbwPWDxu3doPNvBGuXq2ePydLJ1Kb2Y1qTM7odrB2YvfE8pVbnUkBVrgtT5oVB5WqKE9jSpRVhYxUrbjzQvQ",
  "key32": "3swGH19gtgYbHX7VJwrEpDDNpbsR9y1ZA3Ps9zsCg7ZiQSU6eLkb1GzCmkBoVecFhkyvnfmG1T563d5a8968GqPy",
  "key33": "5GTQP5kQN1Fe4KmXebxP5F6MhANUGkDe3DUwywsW5AdDBv3TCZ5R7JbzkpZYciME43zFF9Syuw35ypxUMqvUdVhR",
  "key34": "4SjNVfzomV9EpFegeHJ2KxwQA2mFJWxqVCZ4i41u7Fzf7zcNcbX5JHYFU2xfY7gs9bFXUdSzxYE4ZhcMKBmnZK2F",
  "key35": "5DGKyHfwRc28to1suaMKNk5g6XVdMstZo7H4kQiy4MFTSshBJTqkGb5YnE4HsuUxDvhu47d1BsR6i6SJtqQYF7Zk",
  "key36": "5bmnWf9jZt3x9tmSQZRJ1ro4pCtSmFpQXJHsXCPJ5GBCBPGwrLWHw7gFkznzBvpiaKL1LYob3ykq4nt2JsZCKqCk",
  "key37": "vjek6jy9TvHkJM27o5wqrSsmgJ57EryxFF98Z5EP3v6UMujtP2A1XCwTjhv3gRTF8vCrXg3jGDm2PBuURzLVeei",
  "key38": "2X3gacyVhj8u18YWY4Hi1zvcg63TSFgcGkmyPD7LFiJsmgryrM87q8VUN6eFZJhtAgRFLzoVtBcMspHkwVkB3ypa",
  "key39": "2qmLayXKtdGyjnuyipTwnr73VzscmSUqQXcAkCxgNCxZp8V8kZqK5TKLgo9yQfmUgcE4NnKwFZ7SVRJBxuazjLNM",
  "key40": "2b37bmcoR3sDXosRVUnTUNR2uPVMMJUP51wNBs6vpEwDmd1SSF4QvAoorCdUsLFVq1XhgLhNRV7VwZtdthCXMcFs"
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
