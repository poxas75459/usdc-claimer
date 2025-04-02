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
    "nuboP2t4vLBHvg87Yhoo7umcUK8UgNNwnDKLsiH2QhdWBcMwaps98y1uu8PVJEMx7zAdgQTTUarWuaGMhCugtGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GLGiJi8cd3WFwZu8NgT6VF8JgTYpW2KCCo3fYoxvZ1gTQ2XkuT3yd7A7NWmz65A39kZSdst9raVBHS54pDKPWMi",
  "key1": "4e2gBqs7LTvyVsMygS6NLEz7m5KHXELA2URaXUeYzxGiN6qwDuTEpyFMzZZvVUs86aSfCvDTz2fXJh6vDbxWzCnf",
  "key2": "3apG3GEFyBZ4NsjPabPobQVvbVYg3DuJnx681Lnq4fHzsGNXYDsaccnwafkMNsRSgfN6ysVYxjzqz4PQ7tj8z7Gr",
  "key3": "2TgT6a1Fn9NydBFMKRmwMxZ2tLo2n5g5Psmkk6hdJCm35GbjzPiPR4p72rLA6qrXuPcjbomp3LmcmxN5DZMPbpr",
  "key4": "2H5rRdkYwnFRPYMCWzzNWc2iLLHFdoNz8nqhmcRAzK3ukXE3MqgLTVVxaV9DtiH1oU8puxmM1NeELB62uQoTmSTu",
  "key5": "59hUXC5q84xPHUjZ4cMAPKejgezepydUDXozjRbYt5hTzBQxt28s8qd8JTZGfvP5Fd7pajatHWnn2qwL9ZvuwwFh",
  "key6": "4b4g1eovwtiFkT6NGoV1Kq9YcLkjzfcLuwdZcjsypCv3VgLvK4xPTs85J5tNtSebfwWyfT5N8MDBJP1D7hmXEsvD",
  "key7": "4UDgyopBFQc8Fbn5VLaDxjVdhnBDzieGZWDpfCkZfNY84T1SqGF3pMqunxAYcksSTr58oHLjkDFZsgn92DNz5ZYk",
  "key8": "5hgZfmbomCVF5tsaB4L9A1KQGxeJvpJ3gADobUtYb4Ld2RFQ5EL32akWx6MuRDC61X2tddqpP4cfgM6NMiWaQRtG",
  "key9": "5GKSbr8HJzjmbza3BNtwjskAs8LrLVUNDXxPSuj1ix8gBdLZNB7qTNp8p8ohLaEtNRb9dKCUDiWcX1QQzqKuSZTw",
  "key10": "2rEz7thmP9dwC8GVoAxMVMMpsYpHuMbhjvrvvhAFoWRss3Fo5Du7k5xSdr7pJ7LoB3CFVVQ1yjrzADfcDeCnb7mz",
  "key11": "2mG43ZUEzSiZ25QdqQM7xh1boJRu6VWjUswCAxYEbhcDnzdogViTktAVxTkSEuMyveHu1eSDs1FV3nTZWmMeDUPM",
  "key12": "4cXonHXtPZxKjUSMPE2ChvHqgULmt9ixX7H63Nte8JdpPKgnkEbZHbDJRQceJSSUfxPfd6G6jkfUoFbFTKL7zx5P",
  "key13": "34HRjshACzoG3QJSgAFnuuGKNzm5Tqap2aNNhB6CPcFzBecuy17SCLajSNGitohqSGSNLwgvt86XzJ6gjVf17gtJ",
  "key14": "3RBpys3dxMKeeqFmyqqPwcctvy7Ej4jNzSWbAUT6BT2rjgcqfduoT8GwhNc6E1AL7N1DWueRV1zkKXyZADxqPTsy",
  "key15": "37r2Dp2zPFJPr3WmmTZZwGfFW7eGRr9QboUstsKEV7snHQhSgTk5DxZ8dnKWEeHsYoPXxXpCrdHFoXNA7bYfu3r5",
  "key16": "2zrrVtTc6S33zuUAL2xJaUK6BGmXwNVxuprG5XAwryyF5iWq9ZUTjH1JBibKNNNENF1rynX6ZegSL3QJ5b8rF2ac",
  "key17": "3kV4r7FNxjtcpNtxaotgsQ4isjriFEo5r426rTgW2QGUTyEWe3ACz2oyjEj8BUGeb2w7KoyGHYejZMYtg2aVucaN",
  "key18": "4EQAeDpisR7ZhjUoCtCYVpiQmvdDNHT7j8HBtR4wDrd7TUT5u1q6VpZRRuc4CLXDXmKm8P2jQocEvj6fcWoVmjVd",
  "key19": "4g2mUAhMwZjQhQYeCsyPyuiVwEnH99gUhqxgw51GW9wnZVGbZorixydQG1jVYu36cP8nRtaHXbwtv9gvJHMt8xL",
  "key20": "J3wmkdNfJoEkE1uBmJf1GHhNfKxPwtgDSVGkxA6qCd8b9ZRH5ZdeLsfjz8HiW4xdLg61b7VKS1u1Bc4Bv6cgcfy",
  "key21": "5qe1Y3UsRKkJ5YUD8sF13MX4MwZwVTLWr935uVvUauQ8AAqwxUP2HbqgcPHApRz9w2GAjvHx4QwLQvrUrUi6hanP",
  "key22": "4joKkN9CQ2mLemLGYNWzHzznXVCyVAT8qmDJ9i4ajx2MmED2rMhY2NP75uyfjYnFMBL2RsACf8kXNggnx7gmRAGo",
  "key23": "3tx1NfA16uEvBuTL63q2ojVN8iRvpZCtG6mJJoQcLiQhZ9wDNNqCKyBbqBtbgNapm7ZNtSt3q6ApTEm5SogrSV3x",
  "key24": "2Jcvh4M4ywnA3AiKjASgCUV6YDy5xVoV5xVTEkqJ5BpcPgDR3pZ4yrQS1x15HANTX11BYwD1YodQ8SnaqD3V6LLD",
  "key25": "2UQEkVFtDGUdUYSncQFBuZxFecAmD4Hy87Gok28F7osbtEup1RfBQJxeRd4Ts13WWCTMKUj9MwnPaZUNuARzJrgW",
  "key26": "2jPzkndti7RX4QWhouYYmonrmPGtmvXYg6obFpSUtsbMrXrmsX32D4yfjVnJSTz59ULMKPHLHE4wNfNSikVxrY7r",
  "key27": "jeZUhzqKj98TuotEVc9NVnqsayNH3K59fpaUKaGgJXro3qxLMV8VLANUTryKcL8snJwupDD3SHa6nZGFQ3538Js",
  "key28": "2c88Vs9vdYLk8azd26NAmeGHwSs1jmqR1VWZEca5pph89g7cqgs2ixbRi4Ln6FfPrhA5ehemhYudze1bHKfCQBsp",
  "key29": "Y88ivsccu4hTdgzEuf1SzWf1MMhxa8b5gEci7mWB9Yh9FUBdomf4bupfP7TawovF73aW2DM4nYHvTZiM29K9rsn",
  "key30": "GKQ5nPcnDoiCpefVLfB2fEazFatD9a882J7RKCAK3Q7bgi5Jb4huV2j4PcbfUVzYC2T81RsDgDyjm8UWJ6qjBnv",
  "key31": "586nzVaj2R4t6GUjhKEMZ3VaW6349VPH5JfHJLgJiVGt6EgL12NgvAY6kgN3JYXEAjeY76d2UCgXxcCUBJmTV92E",
  "key32": "61ZXL23A8CDPYfYtA1sJoBCciKuKUSm9KcJq7znp1XRAHSVErdkJFEmGr3JuQSQ4jx1YNMLAUvUyYWrfXFdXcCtp",
  "key33": "HzW2C26gm2S7vEBJrR8SmtnhMw9Qg7Y3HQQ4VyjnL6Tm6pR2SAZqc2iv5V6CvsYNXBbuXcFAB1fkWdi4P6A99ZH",
  "key34": "4yYhMHQWv1bvDYXCnUYEv3kVvmbfGmepBTZYTF9KjYpnaiZKH6rKzCPXA7bRQHxNyDLrX1gSeWS4yiErqVy5RpPQ",
  "key35": "3UwhajPQfMKoxaeBesHNeziqTjfV3mFXFPULd1KwvisEFfWMQPRfvCX61djVhAsvHtGWUXHQinq8is663FWbbubQ",
  "key36": "47dHSvtPU5W6GKrNuf9B3C5K69uFe68qs6p2hzaZnSe4BtqZ3NKQoQvgNrGE785VPykwibb7RyEjhpY9rX3aeCZL",
  "key37": "4fPpr2NN5aDE8mNezVxHNSjfDeNSM5j3SFufEwwGcUiXywkh5vU1RfFHrNudTBck99EWZEiAHhBv1fApiuNDuBb",
  "key38": "4EniQ1WGSQBzymuhithttnikfbbWEGS27jJFfMP31FZpXtL9Bfv4aJkoqrAbYxrJZAmay7ywgTLxoUeqxXN5DShM",
  "key39": "28yq3h2eVDPfpdPAzBL578GEz4QXT1MksGVZKC6grUinzfNjLeMUhcLSX5WfzMJ6FJXNx4azASfCxhRPbkXzKRV6",
  "key40": "5C9BeKJsDy9UT2HW1MbuoqMddPq5RbUad7Pg9QjfkgFcvJQnp6SvXZGwaoHrm7iLfHbc6cvHdVYUdQG1dCsNhNxt",
  "key41": "cJJRVremhpjx5kmcmAV4xMhTbY9CGy3fzVvakypioZiERxbipj9wHXZURPKoayfQRC2yN59vdif7xANR5DC38gT",
  "key42": "5AxzwDSz81UEwUc6kKXLMGWvrYw7isLWV8he9uCC3yTbxQDhHL2QnGeNz9uHUg5ZZhDNwvMWFCXJ3EmPjSovjpuq",
  "key43": "4LWHZmiTQe7Dn55pt2661TShjC7TSUMbs3xzdBHgY2j1Ur3DJXdYFCcitMrxFouWTwe3zYosSdAYGHbqHFai61To",
  "key44": "3obErxXmE7cqHawAw8KE43SZdibmqNeUb7no16MyXPnvv3EkEw7Lun6frK9UQ2zismeGwKSnXhi7nN7GuXj33wgY",
  "key45": "4ahQGL2ZEqcK56S67dvxVaP2ecyPQkNq2v49PNqLHnFJbL89QK84HT3nZMufzYa8r1CASJY2mi5KvKfzAS16ZGZA",
  "key46": "2ALuL6CnttC3ZBzUomK8oVuLUBfFSHmdu7RaF8MkJUWyamb4v69nJSYHEwNcnwQotri3SsBgT7f5fo8A36bkTxDa",
  "key47": "3iXQAmA6JSACq8qiAgcjSLHneNnkEwotBfjDiZdYJGnui6KgmQLayeJmtRQsNudtMLy4N7KpK7a99Nd53kSwjMDN"
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
