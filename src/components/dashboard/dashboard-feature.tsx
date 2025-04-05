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
    "QopChAjLEDEnz4xyZfGWpbkhd1uv4wnrzagNfa5GDmhax5MH5M5j4rMPj2S2dY5YV3K7L1fqtgmQVnEo8fxmfgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XYDUamk2ZJ24pgggpkRQHSrGqRozt6W6mnTWR5YHoFyBMvdtidFXfjb8Vbb8yooNmveGoi5wzdqyaUScqwVrtq5",
  "key1": "5E6U3x7ZCKQLGdDPneJdVAboM1XM1hVUY4MRBwxrEkffmxjs2G4StvARvdPhAgyGWzC1E83MiSVrySzmc1LVB1Gj",
  "key2": "74WBPUeUE6w4ijmTjsKhbN6RArhPCDVCkcEQNH9gDfhsjPgTjfqCQT2q8UvYRYPqgXcXy2cXKUFiQevG6bnZVuS",
  "key3": "4Lm1JrrzEiscLCqev7VPvnH82faHzVsNn3LCjwBBuX4misj2EXbfDyoMmZFYp4JxYfgijrQ1nMZdy7bhe4V7gVdt",
  "key4": "2GWXePaAJxNVx6LnS2m5a8sJaLUMR9kjC9DkBUYZUiymoeuNJ6VvUbrRbA9wwZPkSgsNLyTjrBJmaePxUCcszXA8",
  "key5": "JyUSKLAagHCPUD3mZRMfnbRFMoZNjsLJCBxdy5nQvK2prcpAAkYnLDofBDSezE1Tbi47owreGKvsqZCctGjCT2j",
  "key6": "4JVNaKDCupm6k5y8iJYug72cTgGCMnzP4ypphcJ9LEV9Fuyssf3nXEYbi9XCQRsxzbt6stVreRdeyiogf7bd97HH",
  "key7": "2adJJx5CEmS33mqs2WjAcfKc4z9LANqfjA76W9cbr3XbR5iTvNrCzBauP5FUiokhxdwhpNAVHYpQHGx4bUojno1y",
  "key8": "4cHfBE7cHphmLHkwLnsEG5fj2AyL9E8KJQSf2fg3ZGXa4imXzXegUAb2zsUk5dnXNjKxMK1EkZKovwGgriHDAghn",
  "key9": "2Zfz4SjPa7Hyt8aeBHytuc7ZDiaWyhEDEtzD6Qo5Yo2uZrVnmZHdBhJPJt3a9E1edHKvpqTow5regTZeLrV4Ng5S",
  "key10": "3T73CArP1tCfwDBcX5PbyxMr1iSxe3Yp5DKK7UooEg2R1rentTS6WdZJzVDjkpynrLkcbj9Ad8X63BphmcZs3u8G",
  "key11": "2u3ybDR1R9Jt1XMbcGmc7G5jorw7TSNXdHQuk5FvmKicaqNov2Xs7ro1jXQxjhzLhaGttboTFkeQghnxaqBQDoBm",
  "key12": "5UVS8LEDN66WuvxUFTb8iSoCb8QrdyfGC1Ldpr27xwpFtzHDcZdggbhbmc32H7X4RWKsLyu5NzRxeSUxvmC6f2tZ",
  "key13": "3xHjPCkVSiZXNZ5HUibMHmwsYW7Dz1LBrh4MCyYiAYf4Rxn9HSf8knr49dqqXCA26Vcubj8wse5KBn1PWEZFmQ56",
  "key14": "5sGBf3Sgo163Si4Yacq2PQyPgDfHnS2z2weeJAdsnkXwNipq97L1wdH8tZwCQCrL55VQXo4uN1R7mvV2FSRBBbRn",
  "key15": "3usQrnSk3Qu3MuahWLqqwyFTr8PEXc6xrFEECCTkiogzp835dNhsu4eNrgmxf3mpD1US4HJBnLHEFWyCJw4z6ay8",
  "key16": "46v2ZeXPKuf4jP3i2iQgebfiBsLgdtkvANH44uaJifGeskqxr8VVFFfqUrbuvwDT9miDcdx5h2NoFt58EzygRFNW",
  "key17": "4asKhBs6Hi3QBmiMhLbwV9F4uSkbHqm9YnoVTjbrBn3gajc3yXgMHdHVHsv5AQj5rex7Ys8LRRH6pM4tAiB5vq5Z",
  "key18": "67QwdNajermmmHKBs5UerxemNULur1ckKsdCMb9kRtctoGRNYc8Xv4PPSYCKh78TSE4FqZaNiKwdDWnwF5o5vMqd",
  "key19": "2r9TpfPKNnbWywbAm3g8PTU5NJ5kme35PsaJt1Xff9Q7qh5fpkM7WhuCHQsXurBYePMK5dFijbszxo7cNJc67wK1",
  "key20": "2DwTwQGStNdH5AYVWJEkGVmtxvUQRq4q3B4pHFWNovrjgkn3M4rYCYcpr4Dv6bosZqrzvSX26Ut6ZRKZcjbhh7cg",
  "key21": "4ygXHgi9qSZADSR4Xc8La6dGA5ZMudejNf4nXWgTqrvM8yZgwdiqjvtcK4wX7y2ysC326Sraj6Mf4DiaM7wsWtpa",
  "key22": "671C4vkMVYjZ6ktY8mxa1DYP36n6pZdsB5B8ZE8QFNiFpC8CpNcWd7KwyX1NjdezCYAuFcJXx9gJhYNrzBVRWFSK",
  "key23": "42ShGzRLjVpziRmQw6sxTFPERyk87LmGREYVn4G162Rnuy2f4PUuwHtoZsaDHRS4865AYtmthtm1B6r45hMen6ws",
  "key24": "2tVtKGqnAdrpRDFtEBBMdTr8xyvAdRapMcYEtpXsXndPAT7bL31uYqx66mFfriLmUGCY6EQiaJEMuwcR1rb4sBao",
  "key25": "2Cefh29ei8eSMq55DJDbPbhzTMfYizE7GdUeQK1nWR1hwSt2fBvm7hkKdyrNtgxcPqdP7WSjV1AaGAPWpzikwwfS",
  "key26": "3xQh24UTmpvHQcRXsFT6fPPZR2xnk6K9qaJ2y2oPmoakLS7YTCyZgcWroeZFrQASSZ3YhvD7w8UX7wzbE5urew42",
  "key27": "4b2JUsCTqp7Jk9fF5QRbmDuRtDVL8jAmd1b9SyUjN5ZWJVCcaDRQ6iyKG1JvAo5HSeU988VQUzNpBdGSwhk3DiFs",
  "key28": "3inX3q9vMyUjNtq7t1kCu7BbBnZBriPzdg9uhsTd1aikNNoSwjLncsAR4BkcsNek6atMv4tYSgSxV9CU3w3YbqDf",
  "key29": "26AERxh6zsVy6paiGksvA4npy9SGrZDuHnCWHMke2wgUFHdsWLzW9aujz5x7cpSWbQLFYorcV4RsXbvrLQNVRUqN",
  "key30": "2N6iqKi3nhJ9j5p9eAq4G9vGZyKoSXag9YBSsq9tkZax9qfeJy1urJTxA1AMEEnW7u73HjAzz9M5T5tZiaJLeB7A",
  "key31": "2hhSPrycNXjt54CSaS9vWTYeusYB4BDK4aRJJbxjGMHADtz4S6VmZ2HKebmqEqpQdbt58GJXzR5cSeRRiHHrgZ6a",
  "key32": "2UvSDqM2QaVZThMhCQHiQjphbF9scXUWuQgmgnuTc2fPGBLYkzpKKuu8BnzCoJ3t4DYThPZja9ZMWRAcpUUaVjr4",
  "key33": "516tx2yV13ZSaPFXAQ19VLhuHyTH6C99qiBMYgMHpMvQW1W4CJGejuyxRvt5PHhSm4viuka7MqWGp4kXv51MVxUm",
  "key34": "zc6RnL9vUFautLL84tqhAT59fY5esXNzHsAoRnTLtPrpcebmMQWZmav5x8DCmiLijD3qGVXG7ZFLwSV3GH2WW64",
  "key35": "5D3iG5b8vqLk1WCngsdmptQAQkKvbr5io9YtxcHAEUooPeTuFancZdtv3wbeJuvtRJZe3VdCYfRAWP2BiuaTGqRJ",
  "key36": "5bhYU6PRpGDtKc4WdHMLeK3WKsb6jJA6J9WW269sRHYA3QuoNSeZRhuYtrT4cbNq29NPHogW3Zb5oYLPXfGuugMv",
  "key37": "3oW35KFZemCDBkUHzuHnQZaLVSKKFRDW9F1UVrYCy7cDcaLKM31EKp5Bozw3oJRUpEwkB3vohKM97s5nbZCqnJef",
  "key38": "3MVF9vmfMH5Uieqxed3Crqz1y4rgo8eGaDjBuCCFCN9jedoJQf78iNAMGqKbK5nzkFmtaHKg3nnofh7CKXwjKyV3",
  "key39": "5WUqgCxm3iuXihoLXEooxvktzXkQjLvPgX1YSMT6LsyxwJdqgAzhX4XcKcz9ZJdytxKe55PgeK6HVuxGwP6RR4mY",
  "key40": "4c7MgCse8ojSbYG59KPmgWqBtBxE6nAPPGtgYb1kHceuWrN1BS82WKrmYVaDbXykpMCpXjQZ9FeHSWSLMrxkwNqz",
  "key41": "3YpQggVNjCAJLcRSp9sto5CVP9HBd7UPHbDirpPfxTvJemoFohrqrE69g3on7cruZAPiuvi6NjTXy61QgHKXWBNp",
  "key42": "3oxgkff3656AcQSWQWSEb7vDtpQnGDnAN62H3kqoXSm9ncLp1qBgTf7o1eqn9GxxwZs4b8vi47Q2C97LwzD33jWy",
  "key43": "5AWYDZML2M5nuoZgL16LzpmxRXFHeZu6GM6PxdPLx3WLJiCCEjzHjp8UfSJBn3Lco5Z72XY1m6trs3aeGcHbbLfu",
  "key44": "2vwTikm4ZKzduYe1Sjb6Nm9skezfi5PSJacgPa22zCvfCtAB5Pj6Z9s6cPTwEbgBvU4PNsDB7pZJ8xxqX9Bnczz9",
  "key45": "ams5eHTTtRpgT4QBz2UBH2gHiaxN5hgnP8crdcmWrD6aXBLocwgLFjGcdbK5nqC3exZcuzPitey9F4hCKuV9sE1"
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
