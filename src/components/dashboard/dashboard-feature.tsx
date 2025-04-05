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
    "mTtDxuYKcXe3T3HS9Vro8VMFGbgkDE48AA1saXjCRbGarGBqCdsXG2enFZzn11YmtBSqZe5aKHupPYYgycJR1DK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eHX4sDJapuADXeuosQuwbEWFysx3tz3qWbVU6yZa9VLj5NPpq39MNZndJUSToZUeVEAqz3NiPgNNkszbj1JfzxX",
  "key1": "51MPLhvf6ActfMMMPrR48WtPyeZe2aS1TGgicXT6t7HtjcHEcfNPHFrcT47tbjopdXwbCHAADzffz8ZhGGgdmj4A",
  "key2": "2FDRkTtkiY8xXfGDtCGwSoYXCWkuZsnh1vLUpvD5s3LbE4uyzi4HzYy98f1x4SrcYDr9j8v93rGjxKEV62TdWEM7",
  "key3": "4aMKB7q5ZdhNw3UHY4EVxBseVcQ4M7Ciu7wGF1Ped6G64nEhsYtLZVyzZyvjnoP5viczxpVLzLhzU1NaA53HzSvN",
  "key4": "3yMcFgTkKNqUqizMoKfxhWDgGx4Bh8uH6GjNE3uW2muJGhmbWCmRge2DYMAxArxTqEAPGs7di84XRLdTsfeCvaXp",
  "key5": "3eis82xxxbNooTebxmZQ1Ei4aHcbEZk8rSEGajqX8PHLLkkFE1BCA6nNK3S9NyawTyvGhhBJWTnZeEufJmDLBXDt",
  "key6": "597dAh6Ri3dSbihArK3Xc4dpabtpVgirPRjfbnGPq1qm4F1G8GctzxDij1rc27yHqk93sbQfLon9x63K91gSR6TE",
  "key7": "2vMdxc1aTzK47tkSi9odp3yrH8e9wjFhKKFdP2dx187dR2tdiLsmKsBnKy54zHeDiPVc6RBbnfRfSUCdjQNhYMzQ",
  "key8": "TNHN78ke59FhXJZ5NsR1eAn6tyhf57iY8e2YENxkTEYNez8AnbRjaXr1RE4DX56mXE11sCiwf3AzrqQ4Ut2UfUv",
  "key9": "oe1cHLprZYPSadJhXX1K5ZemKvZqVFpEJRbugnNy325b6P486sh6fPGJe762Lxx7GjXQLu2zBTKb44moWtPHVXG",
  "key10": "DEX95nwDkwFqWMkrLzHp8rvz16Z4sNjjn6PpQwsNiZ3hb9BEWJfQopiVwisy3agU3gMtTACLvdQ6qgz6iAGYbkc",
  "key11": "2hLqZxpEk2ytEJ5m2joyp55gwvcqrf6co9yzbSYQMCanRYdPmnfpFcJAVSr9NcfSjGSbVyRFW7wxPfsTEbjscSvJ",
  "key12": "2NdK6o1mwzBfwQmXB3JtDL3yHB8eBzKVZqEr79UkdfHQPJp1LLTiCuCTssKTE4VMoetcK38J8zY1fYFbePzjb98k",
  "key13": "5fwa13dDeK41EY9hZDNQsaHoeADxT8i2sAqxnywUEkWU9m2SrVcrS4ma5j3VrGjGAbAcHpTb7wfkYhh4Mq8SeQcK",
  "key14": "59DUbf4aueDjsRwGR7VtzRU3hPhfo6yS3LqpLGBpn3fUBkGKt2wtoGZdDDqdZUP7pA3U8ib6vjefEJsAtvABRK3G",
  "key15": "2EyERjnytwV6p15DDtTBhq8bEfx8D4vzpHRbywZJd1SmoVuGLkNFnjH4fSHt1qoJLF5mVuMzp6fyRGdzDWcX9jMN",
  "key16": "4zexxfeDJzg3TAq5hTYpk5m1NHAwDCQupoVPBSNHakafwMHMBxqRWH3KCwg5V2feKLtxXTu5vGMVKJpvvQGbPAD8",
  "key17": "4f7TyL1KY737WJZGxvJzJpnK3K6RLJ5MpHdGpjojgAbRChbQZabSSNXTsNiJQFtpKT5dZVVebmhkH2y6Lx36Yn7T",
  "key18": "3vkQgkTkXGFeSGvYpL2fHKDcjhdKNCyw1jCTe7ZFu4yVosxHrkDcjcG1SUT37ZstBZtJ479NPoAJbALxJQ1Dxjv6",
  "key19": "4zu9pBv3vnVa5kDAcJ1qqyw4p6zKqakmcSvH5VEtuBMvmFKCBCUXzfRNqQaDwzPA4bUjrBg2Hihs6MYuygcbg1av",
  "key20": "5oLjA6yih7HSN1gLSyvpcHAXUdd41EgySHGDrgQyiK7jv1hFBWvcbhYn5KQGMwtyESe45UFXEdGg9efYpjmMSx92",
  "key21": "TKZ7YWx1izoWzgr9AzAV867UTE6vGLDjjnCfNQ61FKqoyEF4oRenA9CUnxjy4tp6NVxaYCdbS5SBD1TeXLsQ221",
  "key22": "uLzh5XPgF5ZDk3uhZH94sBaMjFXRNgqzq1SvgLunNsuZpW951iZt3DhGMchvRz488zayiMQbTky35mfWKcAop8Q",
  "key23": "4ixCb6EkgVy2n1MUk7fLQ1rvW1Mf7oBTHUqJQAu1w3CBZosAUfegQMsNBo8K6D5pbXupythCeCEpPJG6ha2rn6TN",
  "key24": "2EoW2gnBR9CPGoruFxS2gKWsVJwGVsYeuV2wYeCkkHd7iore7hshEbRyjWzcixKpYjBSyw6JyXdDisemg9wRwd9n",
  "key25": "3ttHUM3VKjG3GLQJYTsTwGRha3kWxaaH8cEJNb7SJ6WSZbfgz5vEJZt6CK3drCVFzNAiQCti3DPk6G4HX2rZBpFa",
  "key26": "MZP8tMpiyZqGoBLR3gmtwDsFRC8YDwh8U1pg4cE8vzZnH2SRyJx7vAcYFCUqYZY5avYBVRKVboC8mXSgsRyH5M9",
  "key27": "inDN9tssA3BUvuAG3Ps2QcEAsQ4v2m8gymiFaJ1rv5GzuNkEwRWRWjxcsWMNnbLj395yCfZFmXvUPqzngpBBiUq",
  "key28": "N431ptkxdK7aSDGaxXbe4hwK6JHKSnPCYmjP6o6zHn8dixV5oYW19C9GUW7JqZWgEgkMaRiJwyafGENMDWtCywD",
  "key29": "63LrQUxXu5qTfpDDho4huYY1D1M1oesrf1SoHv8QBGrj9ZxTuThBWj98xpytjB5WG2a6nepYwf54N3dXViNvuE6h",
  "key30": "2updWsR2v64DtxsrZUzBhrVZ2QArAH2A5MZD9euurzgKGCQsqHtYbivWq4gcvpfV2copVUdq6MswVdxYVTMkDgNR",
  "key31": "3vwthnUQrF4YnJY14a2b71rZLEn9D1a12THAhpNhESe6ndqNjU9cQ3W2cg8edJfu73yd2rj3B5bwau7gsdFjYEZy",
  "key32": "4ZGeuZfQw9qsDLsjiLoHD6AXQsi492A8Nj1KkhSBETrPtRiW37uDBsAdYqTSBSoPsxpSvtGtc6CMdht4TMh6Q5bW",
  "key33": "t6p1k6ELdnN87MSmJ4wEYzDUfzkLXnbCnZBWEtExwnQgEQsoGXUrDDNpSaQd3XffybQevpADV4uovjWkdpfTsFV",
  "key34": "2LPQL8yG3twDnqeCCfa8vcEaSrB1DbeZJP6HKacR9oaC22nYxJwLj7F2h88f67RtGTpQVN6VkJJULC3qwMkrLRJV",
  "key35": "2Q6HYqHVFXFZMeXTdsnEgq8NTfpaSn9SkqgzynB5S25spR9bnznc3eYgbK6VbS9hDfvm8a39CUMm2NhawJwFqK1z",
  "key36": "2RpJG5iUaFgFck873fK2R2pEjtzCmxmbankCrcwoxXBgbKC47wZ7rZQadVBKMbg4cXRtgXedXMgAWLU9MhS5zPtu",
  "key37": "bUuzVKewoAc5SoGjDJ4etrWiFEWe54UtbqPf3ZcCejJSfDbLtzGbeQakJFFMCs92ZrWwUU8ZM9D8tBs7xAnSwCN",
  "key38": "5sPkHnKrRWdGqqiBb1JpcUSGPL4HoszAjQNfDtRFZbwENdZUB3kJTHTEWKAHJZnmKcZvKTSQon1zUWnbNbLUzncM",
  "key39": "2LMQYbLtPnCRgMZi161wWAWEKN4b1njrZ2i9nfMuft6QEWmFosigNvZrXQmkNShp9KUGM8FR2uMavawX8B2K9Ntb",
  "key40": "2aa3VM1FG5cQbCJqxhQJHbcxntJANHg2JCu4Npn1e7rT2jQu7cN5EBRohUiCCn7GuAhBwdcc2KzChrTZRtfK1FPx",
  "key41": "k1UiRHq8eAMG9sfTLVEyYNmuDBrbkdDbq2joj2rqcFp4LyFnEkB3isidAD7n2zqk4rSSs435Ert4ENMjsXDR3zK",
  "key42": "2ULcxyGxTKRQXfJMeK1SHPxSXET28LkQUCoZHMxA5aV88BLrxTYfbWBhqhGYSnJygFhFJX7RXmE82Y81LSQAzSPE",
  "key43": "5yZi75zANaG4EvYQ5BfrgN6ZijsUNRMVPAkAsjfxWYCqYPCcfEB9TQEvtsCxGXCYqKQnDy5qDoYetz3KV6eRyer4",
  "key44": "4GbS8nBnX4mmoErEjomnW2bHWAJ2EnQxAL3LuLR66MA952hwUd4TA2iePrZAnEyrx5sVcmdfWryE1nEbjxDtUr7P",
  "key45": "4bj51kZU2T1Bn39VyjwtYhoU8zHN1LUSKUF7ibEXbcQEWoJtvqL1RkJ8uPAvZUkLDKRwj1PdYDw5k2mDrdBazjjB",
  "key46": "2k2NmctxjhSF29vWEnoFEYVCzfNz8U1SFDQWVonCNqKj7m8sSAtxkEgKsXGL5S3sPhzKZtSEZeyp3QbaeRRfABeb"
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
