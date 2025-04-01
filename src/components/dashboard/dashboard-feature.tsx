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
    "2QRX6pqxcUuxn2r74ExkhQrJrFLvCK6r8T89U44gsQzusXzirQr3DpvrW7y2CC4TARYSSzaJ2gLAxGwajgiycCfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2woYVUWha7kGoebYk8igTKVFpy7pmgMZxemXuUy1yCqzy2jVBwBFw7R8it6co6r5d6Hf4GusxnVk8ycjAwkyVhQM",
  "key1": "NQEfdV4T4EppBxwqGHsGyazzJ9H7rk6eXwBf6YXdGqGWdiCHyDnLho8vHYq1i69tjNCHycgyDX5bCwNCGq9HZ9v",
  "key2": "3QEkc1XZQtHzGETbr7wBtqziSPc3Jsge2XHxniKWbZZfHvw7ApwTwi5ahVHt3yr1xBsHp19kzdzeezV77pShhFDc",
  "key3": "UnkN2xk8KiZepNgbMzENnRzJHRGNKTm8Wvj2Jq7mx4xjfet3rYJ9xBcDZ6SmSZ2c4d1JTGS5515DZ25sHRzVNqu",
  "key4": "3LPNSMrTBi9JTz3xfiEp3rEdpBr978XkcrmtuzqMqJDSgGaMWZaUQXPDZ9aAENaQDL88Pxyp86HmZfWrhFU94ZY7",
  "key5": "2gTB6qmJ1a4zoSfkdeNCcpzobyoYYGw4id2AoYAaBiigY8h3A1ahH8jxuZpewnmje8nqvS7HxzJTndRVvWnFh1Fo",
  "key6": "2QDvdhs9dcLva9LYfjnd5PKr3e7ysbwuSnsFzYcnuAxrzy6i5UVuV8owJVM6jvkXckWwtU6EyrE2kyptc6urt1a4",
  "key7": "3wfxvvrefhBmGPQ8WxKrFH9w4WQwbKgenmVL9q4MARRM6MUCxrSxTJcWLUC5HgBHifGMYjSghL8EcJYbgAemZCwo",
  "key8": "Rjqfzcon5uh6JfyxzMEAdSNnVNqGVmW7rTa9mmFFbmiMHV8yZoUzTER336XbPYBjzA9YF5Yh1CfVH1qsViya6c2",
  "key9": "52YHjb5fUMRgTWeVzfvUv8VmEPvWH4v6grJAj7tRiug7ggJgZ3mVSWujBMjdjcAwKKwbs5VS7NGDJADujjTF8qLe",
  "key10": "3QaUAtyMzB92sVaktxiPNub6272P638Lrqt9Wcbvn5vU9ovikFKW3JGUT8RGASJvU6jUG5539yhbeoeNKfoKpqpC",
  "key11": "5TDZMnWYXuY7x7GmD5y6RNf4yzxgwAXcjTqsmp3QDRnMVmLQWe47iJaAZhFZ7Er7UYsVSpqtamtSgKLrkFbf5czD",
  "key12": "2WteHUvgPEnWH8F23Q8NVSqGEFPUivVPaHkanqoGGC5UTTck9fVJ5VZ1qnat7rcFYBk1HGfYq353qAcuQDXXuFpc",
  "key13": "3b3w7v5CgGfY7LXUC9opgv2f4pkYRPGq9JxgW91mHRNSi68TwY9mdkr8vtivZPVJqb8fSyPYjJdiMKHqZodevtmF",
  "key14": "5xK7aJ6SF4PvgdYeHMDmqbxS1qrh2UQr7gsDEFrzsii1qydTMHW6cBGpkDthJGzoAG6yWqjQhp9MavBHqmtZgjpv",
  "key15": "2rnyyAN2xe6nR4XyrYXhVetVN2wZrqFqsZCX5CKS3edZSegXvdM5L1fT3Gbkb7if9YC4MXGpKNZeBxfsH2V6wrdw",
  "key16": "skgnXypShhrs3iECnuB4jrcJzPw6ExTZATXCgQeEMzzca4x3BR93GBL49YsHQWA6L4foyuXS2dB6bGFnHzH1wi1",
  "key17": "2wodH5tjWYM9DQKHrgMaNDBkZPthS2Lki8L8AgPUhNujPpc2BTh2pYejbtHhALDvzx4M7AabzsRYuCHBDC2HCFnM",
  "key18": "RHzHihWK8PQ6ZMKgNE2PtbVcgjtcBgajec8YbFfNWygZxvSNUYFeuacoYnuyiENU31Kdrksh7DqpnjhS5Qmohz3",
  "key19": "5bDDCEgC1nZ2Cp8x7b6sujR1rDkP3fYSh2NAVZTUdDBzBD5VQLyTHgMob6Zpqewmp11UKjPC598ZyLY1NhNorRcc",
  "key20": "2oGSGane9awxyzduS57WuUffsuD3gj9NiLfXpVSByzByvSEwQ5wQwX9oUdLGs582m6LBAxM7EhNKCHxsbmwT5cjP",
  "key21": "3xtYKhGnLUFLtXXavPC5NxFkx5nti1BHfDiNBBMKxNgMaB5TY189V7kK5gscW5VZ9YTA1wfuiVkaQuVWkRwpzLHk",
  "key22": "3soQj1GiSKgKGE9DwUpLQrVg4QBf5oZNtt3CFDQ847FMyJPZZCstP4t8sS4xjynvMvnjQ2DMBf8EkFULPj2KUmRS",
  "key23": "2NCuHNHKHvcH7VUzCR4pAuoJgBVhNJjostVvmYazYoEWMcXn1ts5745PC19gW4BWn6A4LfrrAcfJ5aS55Uqtg8rd",
  "key24": "4azF3nQy7s99whq7wC2Y6cJDnCug4KFZC7vt2oMHFSFxb88jN3ptpfAPphTkbHgGqmNoJF4QoEC2Wjfz9xRFMBEq",
  "key25": "25BHcsMMeuSgm38tZfNLdzaftPqjyoK2Bu6ncxFPmQmWMsC9rkkvjVWE1THF1qR3BxgPLhjrWUyVTa71vkvK3gtw",
  "key26": "2CPYBaReaJFF4m2hAjiMemQdSsdJ25vp7MjXn72z2e3pXFxqB8AFQ1tLMFanoTcbaoZ6dXWNmA6J48mxJ5eD8kqY",
  "key27": "5oJ8wsbksm4YSdWraWLm69oseUHsuQX77LrRzm9H3bJ87KYozbTXq5Gah19DPx48f7Kq5R4fSnxVZXcrRZBfA8ip",
  "key28": "62LxnBrpeTycqTftXHzv1CV2gMdjyRMR1YLkdr76BAhVRZemzuSjaMb58Dq6anPtGcoHXL2Ed3uTh8jiJ8R8HhKc",
  "key29": "5o1CYudzxk1ZGJ5QGaa7vbJ4EAAp473DerEJGdnR2ykEUz1Hx9WxCZppNuWYEgf6Jke3J6XnjsbqkWGZ694pnXUH",
  "key30": "48Kcs7v8RkLnykx7871Nf3Ejc2UPBXN9KDfoEJVuEJ7C4rXTpujxhYjeTPVnQrbp9FggM88XKAVb8D6cSpTn2JJw",
  "key31": "41CxYMBL3VkRMmrqFnUBH5gZJhXngoV1eZUXmeJounTpQd3FUbwxs32gEyadcN1JqVnSE6BQ41Eu8aApFTvckP2K",
  "key32": "5BkU77tVv48jaGKkxq5xa8DQhJDAk6Fk5LPrb4tgm6EJAuBHcTkkwNctULkcoKoNhkXdX8NNSxqmLUwpXmaiZhFR",
  "key33": "5HXmdy57pNzH5B8g2GkPBn4RB95w1pEyyJyTjShdFmH6zqsKENUkraoY3fmEzBcj3xVyuae5dnzTomRQ8ZipJfa1",
  "key34": "3bE9QyfEE7akJnhJGzBJwJmuKLRwKmVnxNS8Dkv25M22AL2D3Vcg76uyBUjgB5dM1AE6ijoJ98Caafrxg2cTxvso",
  "key35": "4gGbr2H4yGjqmm5JpBMEnN1PpDAcBXan4tnV3dSrqzXJz6Z8r4mvZqfeg6zNJSeXTCD48nfHcYQy4NLncwTLVbiz",
  "key36": "4DXK1og9xC2NQsaBCa6LTSgjHwGz3dHLbEBKQZVMj7M87byYVGH51XAxjWmCsYDej9CVu8mJFSdgDsE1c9FVk9XV",
  "key37": "4nNL8P93UvfgRN7e31rdBifnRgJLRSivzYYDN1WkiY4XM6UGczuwaQ48uAH4wcoJWpy5NzmQhHtvLi2RiXRLkDQk",
  "key38": "5JrtwAN24Pj9pX4A31HRYbt4iNsFf11rsWBcfiiEHTptK2YA8kkWB5FvBUA3DFZhGx6BQEHzD6gq8TmGzFfopUcL",
  "key39": "2jFU3A2gbPf1GN1nvEChAd2Ug3cYocZeg7Pujqxa1oa4bjBrGrfmCHjPva6VGjQNeAVrHymNckTN7fBBPqXQci8x",
  "key40": "PDaNhP3Z13JfmaxngoZDKaxuLetJaWzo2mWzSs275gtTz6FDJAmmAiNBRUNThdqaVPijyhwSNxRJbjvHaCjEacW",
  "key41": "4Jx2yyawn461pWFPNXV13pwAqVAXdhQsCg4fckUSkGaaMJhjesU1J5FkdFmsR2cS8xpuN9RPkrN4ZqjNqC78peqb",
  "key42": "cnS1BCR1nmsEE6StHi1MCT5ef3tb67ZRx27sncvjZVjGbAfY94yEQmNxz3gNPp8j5jaWBdByubHoN4oGaCo5u86",
  "key43": "hZKLEdM8yoSFKG1Nu9PKPs3aPsLhcFGX7kahdZAn9UAGvYMR3FCearc95iRFBNf8fKL2EJyUa1uEj8kiZqW2wSX",
  "key44": "4JSqjKJ2wXJnxqJtxAXd5SqQDLUsXKSybSnncvx9K9M8SDyigjRxp7ok2kwshzM6sVqCNPjKsnVLuehP6eXkjyoL",
  "key45": "5yYbiEBuXafjZBLsvuwhTV2tQuaEiEJzRdNWhEZR4TakuXBUBdCLHkqV4Sx7D4ND6hYnj1kFZVzwG9LDJbNvXGuH",
  "key46": "4EC3bvjWSoNFa3qinwhy8SJR1rHCZmzVHVwpYz4hnp9YGGXT6gdhNz5RwqhnSB7MwgzoEFhFG8nheDwX5Wqw4Dmn"
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
