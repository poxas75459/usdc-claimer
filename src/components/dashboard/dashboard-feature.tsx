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
    "3xtUn8A8jetfuES1mqLaZ2m2nKq7PSdwvqh8kzfbq3LeMonTCimtuPuqYSuB59nsnfTwXEvXbjEwtyLSRSn668BT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KRSXVtTkwkrskT1Txw4PprQYuJ8ThxHEPPXdWuwhEbTX6PpAGPsqz3ZxNCBjkynp4g8v7zwjYDhPckHaichhoUU",
  "key1": "JXu1mdHK8Hs7uLnFDYjnXqRVZXZrczYSrB4cgMJtZeHt7W1hw9XVhXLqy9V7yZDosm2J77GDNHjXCy239gZuxfC",
  "key2": "weT2EWJqwYqMYEE8yoekDgJVtkARM7ijRzxQrLz2ULawQnDSbqxZCsnoPJ2eFyxTp6qf9cANJ2PRtcCexSJtfVX",
  "key3": "2oddzfK2QEKbyZqnf1JGucaY5aqkx8rHjSdorY93wLGLT8NjToNu9xfp3GZ6FyArZrZv7TGCnJunHTsLDCXGHEqd",
  "key4": "3s8BJmen3JqPtt7ERiFNjvzsDhhnCfScMvTtSETWc8iDsQXgdtqQ1j8dRYGVwcTwWHuvu4UMUio55MDLEw9TavLm",
  "key5": "5As39smV8YpBtvsyMeJPGG3DmPz7b16RSJx1nPRkQmSBHjHTVwSrtcmtW1UtTybwVX6DeEMoL5h2Y2MCpo5QEn2K",
  "key6": "3rqdaWkWPkP848rskRvJ97oeLvyyfFtRw1aQoGRYLn83hDPmz39APEUGvwuCCa3LURqkYdjjp6xx6yYPxxuv311p",
  "key7": "5GQ7Kkzc1npbSqaMrNWghLPS7WJxSC9zzt5TVeZbRwds6GchYUD42JpthLwy5sqRCZMX9xQWp3Ro5xwijJmjpksk",
  "key8": "kxSu9eC2J4xohTvDwcGhmhimYNdRL8xDM2EGk1cwkYN69LfFbsCCopvHaTsvcZFoXqchYftS7f3nLT8VhTzLrwT",
  "key9": "3piUg4joXXSeNs25b5YNEBsVwhKWrYE7t18fSPdrEtFrH1WDzxtf5MCXk4fDExbNiRB8P3sZJsTyngcLhNN3mh1b",
  "key10": "2dyM5mER2dZDKdkMHCMdUvUReetBhJU4kgHdjFZQyiLTaLAf2mYnrnhKj7j4LNBLSrqKVnx8uFWBGv4oHpUBgsMf",
  "key11": "3rh6YoKdi6qPTjnmxcfVeW63rFG7WSjytRVLgwGZRgU1MBmPsnSmUb91SCJqi9Bs53FSkjmtCRNVzs2KNp2cZ1sD",
  "key12": "4QpXffVwMKYTvQqTmxid1Upfi98nj66S234u7Wm49Jb1SNCJn28Qj4sEbLgYbMDmb2QzHLMRueKjHARdXesBpBuk",
  "key13": "2BUGqomPpqj9QkqzAAGBQGbJT99yzgJxwpJwFHAXQy3E2cRM73UsGF5Mr2mFFEQ5Tjr6n39pYH7kYebUGV8eEWsL",
  "key14": "gjJdb2q117WroAcZmxMnkdXQ7uZ33qHwfxddXFckyCyoSKSkwSzXotswtighr8g2ZJRD1fJjSp1HvSnoUENrgd9",
  "key15": "61szqpdmD3CNdFvXZ5JFcUzeWipsHFY9kgVXSpEnSGF5DbbvPaH73UaSwyre9YhFwt9CGu8odyumwQLxa3AfGBo4",
  "key16": "3vT16tjEW5xAAYPyXPLZ2Snj82uk4KkqY2MhQLwHzPU7TjovnoNeBLbUVAiEj13TGffMz1iE3udQif9uyyFVP3aa",
  "key17": "4kXSXKN2zrrBzLCB7M2GD9AL1wuBy6V3tCQAqPEU7n52JHT6u3bo2rod8eB1gvie9MrTER4dCHUCEnzeoyeSt7nA",
  "key18": "5mYvWCHoUjj8QJCHEA4SeRk4DrzMx2PQkpe1PnTq3GVFfxUn9exHtYGm1q6Kjc5EmEdJwXNeTxiyLEd3QTj5DFWF",
  "key19": "5MUgmSz2NgXA2B5UCVcxL8REfqcXYF364W8Ap47CN5Q7qqumMbgF2Wa61hNAV6GKj1UXzuSAmkgamYm15tccAMLz",
  "key20": "v3qdzgvkZYtfM1cZDn8hAxwF1FGaubm5Ey5EGf67xmiPubgReZ26zE8sRefSz4yx987pLiYvEUMQDygXRBhuvKX",
  "key21": "LooKkrUUS1v7KEvMqu3krRpEguitP5Q4VhUGANw6LHnVZvkjbtyCTyX1Vw8wj7HtvyswmkPXrM6M5Yo22PwzWFP",
  "key22": "5MqZVEoPxzKoZ5ATgFHY1bpz3A1qmoGfoXWtyWKkMKnWWS8XxkZ7Xx9Vkwr334qh2UrQbjFSgt62Sjeeahf7F3kJ",
  "key23": "2KpFFZckicSWH4L56pzUfJHZ5gVZzvKZpajVoX5Gia3uBgaXQuFvL9W9Dtrjzr7J9NDbdHr2rY1qL7J8Bw2JP7qo",
  "key24": "jf2zd7ZRBaphaNnAj2Kmb3pUzgTccKUYSFV4BW13W8dc2qhyVgw6sFS6e7hj99HvphZz8ktqVXiJVHK8p3hSvsP",
  "key25": "zE9tywYVd1M3JmoTJZH8TA5aLu2HtMiJ2hGuKGUBsb8EiBePvjye2xJSPvgKLdA931cJLeWQyC1XEZrDV4rczh8",
  "key26": "2d7v8ZQdPSzKavEr5bFe55BHMHBDgzDmdKgRjKdeedBU2hAyAQ4ptJTmk7QEEX4e7eZWC2xo8DrJdoCMRf4MZWwr",
  "key27": "x5Gw5b61iKHbEGTRtFCmyLPkwUsRMVyFpVg1yz4EY7AdLYZJmnupBWv9Ex2w667MH2YdBXBBVV4BvYr6aYU899K",
  "key28": "2znXB9Gs7L1j1j5VfPdAbho99Lyc5cPtSLFB4cGB2FcD1wW9wfhHY6u6TKyXSz2AQHty5iQWbbT71HLsBB1Q92h5",
  "key29": "2qCpbSG78CsqLDf7USrHC37ESMdZMMDQarD8mh5Pr4bguFJWXGaePBGzsdUv53az9WdJjhHToGwxaia8Es682uxF",
  "key30": "FugKtbPqVWHNaPyqn5LBGr8ZoBVT1youC3HcWFiAUKbc4WHkfxLhVQwv3n8KCieYYyk5iDY7gccQgJDFr3Tpv3R",
  "key31": "2VrRzEVpNyW5zEdkNty64PuPfTyQMKDRVyS7sie43jkz6yhqpwdUE53UkcZCw4jUK33WtoyWMiNw3M91NYPUzdC8",
  "key32": "5tKxs1sCbqEaA1Z6qyKutYvHyaeDzD7xJJkh3vgXLdszDv66SShdLVC7UuLtbcu2GX9GibBuVfS6d2gghjiBSq3w",
  "key33": "4SKfTL964PZUcK8bNQVm3TtpU7WpPuwqKhevHwia63Hp1xY3u6H3u2CyscFdYE45Ek4hcvFsrkGfLwEJca1GwZLN",
  "key34": "52herpeTeFZchNeDgrXMtLXqav4iSNBMaGJpMJzKrCMktW67BLyN8e1w6GZgMvQN2BcisacXLf83HYYHXe9TP4KF",
  "key35": "YKGCowScCDUQ4UEhvtotCwBcCPNbm6VjM1BcjESB8c3xQJ3ZLRYLG9TGL1eREuJ55kDRi7oJPpBWeAjJkf9pNxN",
  "key36": "5Keya2Soah73Za7XTjyqZCDCbHgkobM481Zi7PmXpSpyHP291UgR9CBxbHccF1mPcn7t5gtpGyYs1VycuJGkQJYN",
  "key37": "5bUQuGiW74nhuuvmAZPskREkNVYdsVqys9NSEyVFB9rZtqrNVtmYrBuuT9WAzHU4y5VvpZ3xR1MPLUSYeJkUQVge",
  "key38": "2N3gRFMqQAWbqtsgjjBiWoNYLCox38aJjo354xsUMZtg5iws9o5qupTKX36fJVHzMrMBDv7KB8JgwHEZzHCbmP4K",
  "key39": "Lsueu8wjkcWKXEAy1KMZQfdWm6XJ8JNVeeD8etekVyhhqMPooJutob74xpPKDU4UToddx3cPg8HopxdDpetbA9b",
  "key40": "sfwmK5ZDj1p9r7aAJzv9eL2QjXUHM7JH5fTPPu1DWmHa4Xug1KZX4GCdgftBY1KCWNB6JNWpsMJk1JCBmvYRTgr",
  "key41": "2z8GG3Ytseye6rbPQYBqBprhe8Q4kr5GUCwsQvNX6t6fL3TfpfM4fz4TCf8nSjexKwUR9YxzzuS3vXjvE1vBK1eu",
  "key42": "3mngjZq6vm9oByp7ofhn1XLo8jH2jPqp9F67jopwRsaBNBnn67tXHevy7QDnFaUseib9xx2RVGorHSr7Gsq7YqtE",
  "key43": "ANoCVPhkkkXiq61bkJkqcRqu4Xxpjj26QagpawrmF21yAMstniRpEGjn37drvov6ebvXhkiNG1NrYCq6ugaPnLX",
  "key44": "XhJfrGQPnpbXmS7BwKmA6buwCxnqGFtN5StvdAWbSXuRwqFVERfx6AYcyXw2Z8wTkgzAmUyUkBBrC5JjfJM1KCN",
  "key45": "5vrqWyT3P3h1gWUpE6tgLucUrZcRxQEaJfHAsCNjDnH3cWWm4svcvmwz4emhgnK5rxtyr7LkozQos3NTrNjwnkiK",
  "key46": "3i52tKgqwfZLeWxd2aoFoaV5pAddKRDYFmUMue55x2uzx2Si7ajd2Q7fDi5BVHV6ZLf3dUoaBMXQJCUHxeqsoKgZ",
  "key47": "296SEsfS4qTiE1KyXWmyJwWeVsXpocGu9n3KZKZUAGwUTxubbXXXc49F99fbVnvBwaXxHBmmum6mHvSsGvxpeiti",
  "key48": "yyERJp4piFy7YSUkyxpjqrSUCUd54GN37BwG6YHxBhdCC2RZ9ATQgUCBSudgcpBQbRCSZMPMjSNefHV6Qb3YF5F"
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
