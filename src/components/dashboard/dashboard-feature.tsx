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
    "5r55jaxuiLKUVwiy66czd59LBvkwv1NwCfh1HewGSAihNg6BdPgg8jzj7QwFywFAjzw7AHxpqF6ug9WkUTfopKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZ4aLnFzcE8Wm2rLTcSTbMqFD7wcrvCBWPLP6KaPn4t1CBsgJRQeDySFVCVfVJLggV2wehXFY7XDwbHuA1ef7kL",
  "key1": "5qCBjhAnsqJHSDCB9RkXLCgr4AFkVc8e71JvKkWGem2DGbcCuJVyJMGqLoFg14NQHbsqKceNnUy2RkxUhtWi26xs",
  "key2": "4gKmGriUFgUuz5HZyRT6VT9kgQWDavbzjocucNWXS3nhtpixPg5dvBf6rxCeaTUrCchmYTPekwq3JH2kucMN24bb",
  "key3": "3Zmo8ck4crUDsBwkPVjas5Ldp5eS92UBSbUZktXVAnys32g2jBYYLqBrkUnhzK6RG7hh7UJtD19TPRKBJgR8cBaf",
  "key4": "4XgDV2dWgLvtsTBdqfrVRVyCoyc5PbiHNVVJNgmd2vrmMKc5eKhnbzv4VbBxDVTadFcFGQ6niHCY8cAUNHXhZibW",
  "key5": "4NrbAttCgcT55h178rd2wNsNHZ6HAXN6Yv4DbQoKg7pphzEcypP1FuWSuFhcQ8rPGiwm567W21JS9vUEhzNmvnwu",
  "key6": "44dMCxcVmpBaNLX6seaJwu1MCaMkfAcuoMa49F1jRosV5yz6V72QgNQLfYjxwwSNe4SQwDvt1kDDrfex1C7SRxvc",
  "key7": "5sBJRJ4DRngmZLGCSXmUPFsCzfmULxXdQoA995BQ1AyrqMQYQPF7avfCLxEZHDnEz6RBsTvVFCX1R2yyxV8U7NjU",
  "key8": "62TmQurTAxMaeCEdb3SrmNrr6DNoYmXXBmPE3kkYPw6nk5an83D25LswoLLxQXkMPhJoBZ2JaYnA2xwWGp4ZE52x",
  "key9": "3ziJDDLQSkab6wjWsj2hNGBCGhutSgZZE16Ec8qWki5eiFzCxrPGN9SHK2ANh5VivLUDuntBM2AMsun7V4pKuSFZ",
  "key10": "53KshPeTXb45tC5HZMwETdedzs4Rh3Fkg59NeNejotBpT5fAa6Z4qTfYc5dbrKL9Wf9byTB45cQF3PpxGSKvyvpu",
  "key11": "58x7j5dLR7aJ23bVdUsahK9j1ytGqtWVzgjB4UzxcthZDWRcGsC6YcLQaSvQNn21W9GEZZu6AMYoZD7Z5H1vf2K2",
  "key12": "5t7vyDNqJUqxJBsrC4JwFtBwSGDnZmgruBdXbWBCoy9hdRpy9a9f6hSKSScTQb1XpMQtDJnW67VaW3ZP8wyjGFLW",
  "key13": "ybdmFGj7V5Qg54nry2H44t9DXwhC7qB7gPt9pqrPj7hzkfsYisuZvG9E9MA73yxdQBT21TitNmYRvBvWJiNfZwA",
  "key14": "4HdbTK77T1KMyJ8zFMsvw5nicrLZZqvKzjUB45SEBsmxpDhVhg4RVf4YJBodp1GnL8tTVNfETyYLBQs2CZbxB1x9",
  "key15": "2XAGz8RXm5d1QGBHkkWMraEnJKKkTbc8fGP8G1daBaoGC4wSGoWmA1T4oXDsiDiduerwpNSBKsK8MdQMeWEUzhat",
  "key16": "5cePfvnzHGC8hbeNXKjXxqwx2gQ6ZHk7de2Hz32iFBhnNo3Qr9DkM2iJU9wi2NfYzGpucNWs8DEnxQgmPy8yuwBU",
  "key17": "45MPeC1wF3r5pCiMH5EFghKdECgvofZaZuQGc2GkGgtFcAdZvXhZEL5sUWQFpavBaWogpzr9E3bcAGxgSNcgDmEq",
  "key18": "2D5zmutx4KNdj4opwtNs2tTGtLXZeXJA3t5TPUmCPr1BQeeyUDZCdjCNGpVywFcRwkt6S9EDntKs3jGrr55ajA98",
  "key19": "67hbXuhBQ9p6JD9JfbBzzhDnMbbnufErBQ97XsQkBoiN1GWaHp8NjTdxFaiZjri3J9Ti8NvQdKhfrns9ieu1KtQK",
  "key20": "KHDmJWHQNSUYUwk3rovDu4FNqiTWWBf83quRGohFY7B9z3kVuT6datc8siZ7pvFg4BstPkcpaTeR8qPJpX7GkBK",
  "key21": "3fPNjEmFcPz5zxevAhBK27gtb4qk1p1BEZoW2ShL9QabeGCVFfM49BQkqTnk8t1SC43yvu9jCFxPM1cu4DT4gLZs",
  "key22": "SXukQA46X9rHarjEFt7rYjtX7Lkzih7GE2CVL4ADX2NTas4NZyLneo3ZyLcxyPmBQhV9zUyTAacQ5CfSwt5cQXT",
  "key23": "fCeRXpmL7SGzukTM3sKt98PG9dXq8dMdv1ifUDuJ6V8R6byrRzXwUNf4e4wmPSC3tErjE5LnSnBzooBToqWqxXy",
  "key24": "62HgizQgrXQriyoe4M1CUrvxVfo4NGtQWNnhrrXuJzj8PGkyTPaytWgQhiHaa67Wh51PdQGL2AHNCdTgLu9H3dpo",
  "key25": "5SQuWWkqgmZtCC6GDd3dTR146xn3YqYhLJJMwLWPRtnBVKuTFPW1BEhLbuCVSz5G5FMX7zTmRAeZFy2BPDgQHGco",
  "key26": "4G6W6UDKf5APieZDJchF69EhtxcwEN5mgK6TVBf6q4yaMH3M1UryuVDuiuSPBFjHd5Pwo6NNEsmNgwY1hVUh9psD",
  "key27": "5PBPo6sBcY6bpgjjSXeA6MaPgAxkp6iEVCQEr5wAKnHumhZWKq25FgodhmuU4CCF7jnLH6V1A6Kvxb4SEGBo1Uzz",
  "key28": "2f6u1dQsPji1MfFjSTCEcTFkzBUhjJ5ZdaPMXgR24AXUwheykxjhNYXKJYUucsVLbbum9Yz64kwXuL9qrrC8G4me",
  "key29": "5eeNjqAc4AtqeNEjWhiCzmcsSWphaJHXs9VGLVbKot52uAyraTz4oSLAkRdSUaMkCB3mJQDXjzQzZyQHn4Bj4Lv6",
  "key30": "65XNqWxJvnduzU6SRomPiQZHP9D25xd1zmM6JGfiZSChnLqdpihhgizGFGHCTegwuqCXyLDp1nRiuSKTxFXU1rsb",
  "key31": "8qt14DYHGkRWQM4LUHMCMxnmaGKaQXEjPp1ozcypG93NJc3vEt1TZu321qES1ydR9uZkuVEpe4zETQVmqYVDd3Y",
  "key32": "4VD7oiY7gk1dUYBArr9MsDdTq1C1e4Gdx7VG98SV16T4D9N18Vaj1QPGdpafQY9LR4LvgLLzDw5iRxKjixL9nfyn",
  "key33": "2miXHbxEt7cef9jWdFTUQSCSZ3Jb3YMAezjW4wjmxmKPx4dWYuFNjNbZS7MQrXgrxfpCckoVkLQUVrjfj2KYG2eQ",
  "key34": "66p8kn4q955iGNk1g1PhJRHY5z9Z9osQr8XnPd3tbggdTgS8hy7CZx1KbZhhSWqBZDsMmjHVmLHgSs3VQcQTyFWb",
  "key35": "2kXF4SB6EG6ZD7UiqzhP3BGFgURWnV275wDKSF8nTiEmbxrk75WcNMX2Z1FAZgtGtSicGjDS7AtUzyMWqjJiWWBf",
  "key36": "5G9MMzFvCFMAA34fFiGfUN2BH2Xb6fE4tv2jCifkhAuf6xetuL9TF8GVp61DrSAYxxko5y3g6nLwzsJgMshX3vnP",
  "key37": "k2rB4aeGVyq8cTUUHPWUg5GK1d2Jhi9qHt2q2NJ1mHDjRvDCUujGxJZj3PhNmZgSRJoe4ahx3KvPkE9V6rGJPnU",
  "key38": "4us13Sy8NWNtZonfqXBBaCPk8bt9yvyveQZCmbqaiJRH7bAukGyTu3936DHcynDQ1utNfswAarYJMjTQyFFeLHLX"
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
