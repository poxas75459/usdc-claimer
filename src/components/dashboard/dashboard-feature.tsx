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
    "2rZEZVRaZDFKunJATLvcL7Hr7yN5nLBBvFDFwLdoQWXXsGut2c11awi8PuiqyTG9bHXKGu95irqpyERaTAo2sj4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2isgMxZKFmDGNpXqAvSGKYiZ44LNFwpe9hubuSYMZCj2ZvvSfBpKad7iANVDw1sH4n2XmTYoLgi394gr8TFucFk6",
  "key1": "3qHiRmVEepWnMcPTshhN4vGGWAi6inEVeayJpztD9axPDD6vu2J6xYjhPieQHLjY3Fc4eH9N3BAjwWYqk2fTyuhv",
  "key2": "25ic4dRe7ww54f74PP59YDkhfkRUGDFpzW9W8ujf7burXSkS9vhqqzRpYocmuLPrSnCquYaun1z6Y5CuSBRciFj9",
  "key3": "3k91VzzDMMbyMeDJm8LSxSrfrntm2DyziDkx81vAEcTedgLgY2T7dvKNbsj5MPjjuLCauHwM5doSvF9KBSwAQ1aK",
  "key4": "aKeoYS2WuABUKLFGnz6tmfu9KXXCMJik4s7m6fGvG4vennEYVVdzTGNNCHkxsKdnby7m3i7vNKYoqNgFZ1sEoEL",
  "key5": "LSLfKj85JJ47GCY21k6ajVmBtif2525RzpGGURNCk9Wd5xwJmtKwNDLgAK8eXmrnLJCzh4u6mALRvbVW2tk4C7F",
  "key6": "2bujQx8LEWsjej7mdm4Ms8kpSM1wJ3pH1BaWbq9kkEo9oScMTsV3YiJEFtczigErd8A6fzL5jP8C1cMQs6HYeGa4",
  "key7": "2UULKBboYLSeCjRAfJAr3DfgSz8SZ14KVwnqsNhWhtf8Liz4gWxe8ZJDeWhAn61x5tVW2Kop21HqW8ZNu5sRaKqn",
  "key8": "4yS6qSJFasZ8g4W3JXJVbR7jJH14K2e2SE92ZRvJTrVH6ASk3XkeTb49jwRsqnuCCduPdfuk1SYchr5ZDPUmoH8S",
  "key9": "49U3shQWfFMeQtEJECKRGNFENpcuK3DUj6A8D7EJDHpMDAcUanRT9BunpQDLBAEvEE6hpiUcBttHp6hz2PPRryRs",
  "key10": "3SvXJXhQ9bwHmjnm3A3Vcr6JVUiHtxxM2JW7EpZS135BA7HFQi4sf3E7XUV5ub2euUz8PvvBmEtJMjo98Nm26BHD",
  "key11": "4p3tsALoub7gn4eRo1LKwzLLNBNnb14emTexLjy2jQfYDGw3YCHBCkyRxktvFJL1cyyoJxRvDbTUhQMai8qPHzSx",
  "key12": "3JTDNoNE8EuCbiTCe1bcL2dXxY7KuT3VqrsHSHZDdWKxHED3gWRZ1mGhMYaazM531pooA9E3EptoPjukA9u98ycc",
  "key13": "3knukDzP3Y5EMnKmE3Sr3qnHXibmvhrmN8Uzb1ebxLZFXNj5aNcMAxEWKPSwCDWpY6skgBZzRHDD1v3eLnLRGV36",
  "key14": "HtyCj6QSGvm51ASJQvhLijYim3x45j19zwWdiPR3Kh9GyoEhd4kTJVc2eoAinKWkuM5iaZERZYgLE53zrFqnffX",
  "key15": "5nz9p6RCTmE5i95u4oSowFgbYD8PR9LtoJYdmpjCbiyc5t9unAD3wi7u4GhCtQNfNNKpK4ejsWsmjNm7g1mWWkr3",
  "key16": "24zLDbeqGFsvBZHG6LpAojfn1ReVJNzeVKpre5KUbtE51pm2yKSUE9HaphwZaCykmRZHv5ZueG7pqEFYXwqYRBvo",
  "key17": "2cKwrfK4iS8bBTBQRxTdCRWQE26L5mhdKHKYs4dTdag2QGC7adfrEn6Snd4dvyywS4iXjYYh6iyL9hHCLYDHv6qC",
  "key18": "5eadU7EPP5Z6zvtaonSWzxJiqf3PTqJXYX8UJ6po4tjPn8hZH5WCe9rDekhhhKifoGgknuMtucaFdARsotoz4R5r",
  "key19": "64F7P9pweqCTURnmeVaX6kgf822vn8BcHH6LVrSUpKVjKSyQrmBaPEQaxZTpZGiy89cN78ZzeRmnsL2KuNTFz6PF",
  "key20": "2PJLTamf9xBSx5FqqT6q7xMjSdgcu1GEjMpWy6fadMab9MSk92GbMFLB8n3D5VDrsuRreJxKhgGLh6XxEEFMRTBN",
  "key21": "5VtnVbB1vvT18HixSaUwsbeLvRpKzhmYZw9NRKjS6Sm3Nzhu5PT48PqgAdLZsCE5dMPRip9bXjz9AYb3jEEhkyxa",
  "key22": "2cmXLdZa67g64Lp69m3M9ujshQjD9GNJHYeP5Q2GQ8mSYxkUqPfbZUA3rMN93UMmYcD7DcoCerukgy2ufTLek3Ec",
  "key23": "3MneqeAXBzjzT6AP6vdQz3puPh7XHKqK4oJQHojRKxStF2LP2sXFotRyqaNGLpYjhTugT6yi8V5cgkh5BwZAv1BN",
  "key24": "2giN9L56pd5Jww7j3rikwJRirUeUtdgkTipXwM2yE2gWaDxqVqUg2NtMkvdDg5wkQrTRh1F6ffFVsgwgUmctZTc1",
  "key25": "5Uv497c7FyZEDVuF9FHa7qU58gSFRPdK2b69rncm3r4A4Y6hGae389tnSkzqoNyJ1qT1LSTSW1WtvkNz84M4HMdE",
  "key26": "5sHonePYZsncLJJSmNR2YN6AEJYGWt9YFJ2C8fr4AHimWqCPh1FqrNdcZhvBLDxk2tZMtrqxBiF1tCwVxmsvoSuz",
  "key27": "3m64Du7SxxGuVUUqpfB1Ryxiim6C6YDQ5eZbiZTi44gzFNkLe4kgchy7hsQEgUeoXcY5De1t1WAAm5LbvxqVaz2p",
  "key28": "3pRqyw7hPbrTTs4hnCrfQTPW2JAQ5XojVHKWxnDm1QkaDnnFX3F6m4qoqZJiudKfRDH9g3b5aTQjEcZ7qbt4cXog",
  "key29": "36Z1UUWZjgC3SgXwd5bTXVEtP2Ta62BcrYRLBZ6VZaN9vwt7cwcd8TKB8XngsukYfr3pvVt3hubAsHNHSD749n9Y",
  "key30": "4uB7GLrB8C1VdCojnLE4nHJAGJEMhYTh5Ch3R6M7xQxbMJZtHNc2nyQjUWdxPHmztavSWAcebR47DrEQWqeoCsTf",
  "key31": "3ddCshdAPKPbv46heoMM8XJrPFJoVce4KWyH2e2ATng47V1qWYWj4ArGZMUTYtiMVJ3QxrvRrcai6iA5vSom1RG1",
  "key32": "4o6XaC62HcbR1UmaXQZk6uoVGY35h4mHQd4VothuBDuA4EendoGG6ywPP18aTFAKAxtQhs6SdbN6strJPqqyVjfy",
  "key33": "4rDGNx3kWyEar7jwbYTfGf3BCgMoxuXeNG3ZbRkAEaqbdDpHhG2fGCguv5pMt1bWHMwuJ5Ar7Po8FphKkaYBHhkV",
  "key34": "4AtnQggg7gqTpbqd29YsWk2ENgsRLMM6sL74CyF6prN3ZZhUJv8v1sM2hFMhPKysp1GxfVRegZXEA9Rj7nAWR6PS",
  "key35": "4zwuvySkMzQJ9BjHVCVkDj8x48WFhJCTLcqs6PFUj5UQkfMSGNdmekhDNkfutoJ8RQaFMqJZiRj9B9WzFJ4JuVDx",
  "key36": "Q6wKgWtqcWhMFnG6UTXhvDCMXrVdQwmZsxrkqvD4jSp8pAFkFwh1ToYURunQgZFQjNmmrufJRakuJcxr2vkL58p",
  "key37": "3MVEybEdL6C22fS4849zqCvVZ8f2QJDGc7xFm1oUHBkTt7WKPQRpPMh6vmbNsoTiNMnCiQuKUJJv33oz1LS7Tgk1",
  "key38": "4SkhNbZUXatrwQefm8cBU4VSk9d1pbuUFaQ2n6Mq5n5tEJ7anasHqWLAp5LdjPHjVWHmeGjfnXsHp73MVtgHhKMy",
  "key39": "2tYVbgSsLJ4AjV7rxmYfAfTscZ39svz1arLFKojpkDn8d7N68s4TvsySTqfycSSXmVT5RiEvVvxojEaXn45tb2an",
  "key40": "4Nser4ywtYzA9UjXR4u42uW2gF9ZxVi8CFpfDk33G13eqsw3vHhWt17g5Ywz2GXFYBrhX7PPMjyP7nwiQb5Daogb",
  "key41": "4GFRCTFTuSo2HVgUQupHgsPLozBC9okf5rd2NHwDponMejsHq1rAuvuQhgxPgWd3kzieieExuLZVu8mzoX3oZj4m",
  "key42": "2mpdnJVXZGjuUDhcLSRALEAfrDJmsCNiGaQSzNphrWdSbg2Nw21azKUiqrQjdiLurCDccpgdxY5aNwXMPwTmmzCN",
  "key43": "3MmiJpb26qaTKmoGsV8XejYMqNCy5FUhJtV6SRKhtdBvn7jr77bmNGyu55bKik2ooxKwteqAuQ6WcAxkQ2DoYfdp",
  "key44": "4grhxFGVNc9MBkoXLymZZnxSM7SziEnrGTz1KYyJzcuD6bDT6njFrCViwuqT5ervWDTvJp1P4mdwy2nUD9UWfVik",
  "key45": "dUi9NirYumk5yx3Aa665tXfKL9Y5zypFfPKjCTfiTaqFgZ1BtJJ6Mv7dqBHSfAuycEtKAwemUbvG63abynKh1oa",
  "key46": "NU1mavg4qdVgFhJvowg9Jk5iaw78YN72q6HkMC1ZY6uBckygfbwuATwuAqo8gebdH2cwzgcpXidideEzSzg4dBP",
  "key47": "2opKor9SFzLwo86nA6B714x74rMuMWMyG3fAoGTVKw7aEYmyEbmAEvdbbZXCZrNqm9PZwn2jQE15u8wiekSVb9bX"
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
