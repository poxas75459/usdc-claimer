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
    "3s2XiY1WYryMahwTZPKUetXUZuJ5bXuiFozRHQpBzXMBugntMbJJAGCGzJvwtDzfAHL8bv8XZk5yDfU1RQiCNb3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GyE23gYqPG6ntwnt7ngLEpy9RCL3tLKZ6TbBNd4MawAkk61fNVbskUiN4qPdSCAyneHet7tnTqhaFmr8HGF9UUc",
  "key1": "49wbmxnw49Y6aZLBS3nhBB1oCktBYKLbVuH62Kj8Ew1zMEoUChRRSnbSdg95qqVaUPGZyCeLtE2xmMQE4zAibedv",
  "key2": "ZQFZatP99jBE5FbFqBq6xZP2QDQrvjRUk4XNbfMusvtA8jYeDBy1NnGZg48oQiY5BEsNzrgcgDsZVh5N58er1Qu",
  "key3": "5pk8FPLLK3svhNyStu1aHRYjpTZf5SboN5gBk2n3nuCdSiQxy1Y72pfXHZtSnxpmBQgGMT9uJrvSK2hTD7WVe2Ax",
  "key4": "4tnDjhRNcBe7o2ANXT6QmMpzrd8eCt7Dx6Xy9fxVnjRehKVWB7sHxCpDWaDEn9wCrQfBMGYUG8JjVkzv3ExMBDJ6",
  "key5": "2yVAFRop4gf9kBV37BsnHV4Q1hwLcziZ5LcqXbznnEv3aLsnP4tkPzBnRTyqEri3veUTBimHEcKdRuyMjxxS2KVX",
  "key6": "9UXzT5bFQU8mzCX8YmJY9hywKGDBeLcMy57PrC9eAgZKoRiXzAtERjzVqyyvqSc2ZeWGpnTVhKbP736Gpo6KQ4c",
  "key7": "4bCGSd5pNr97HLgC9AM2M9TDTWtdJCKRrWkSS2FNxY4KLwu2jAWUcdPVcpTRNYsUmEkvy6eMkRr82RdEvRS1Cmtb",
  "key8": "3DFvHzW6UYsG73EGtQYdA1puSVBNUE1417D42g7qBhF2D5EZKoc3cCDPnTatmeXRrpjydAMhT8W5Y72LqJgRtr12",
  "key9": "57NZLsJpR5X7ePFNPeWKk2zRD4TdBmzqVwhaMwmZaTHDTzbTdzj84qesdZJTa23pf97T9P7HTpZBW4QS7qkEnqGx",
  "key10": "2ErjNPKNtkMYTZXsb1NvxC6YWFBJJ5DzKJDSvsAETzE2q3MmzdjHxsKLXjqXsaqkAvC4ZazfGM4AnVjKdRFnFhHR",
  "key11": "3zdT7NgBbMpLeKm4FryUosLkjs1NwipWhdaotdNhUnDSkBKoqxzcw8BJPvo8M6Pzt5bqwjNcKfh1ycGuYwzEDBLj",
  "key12": "5Db77cV6tWhFCzj1Xgb38is1e9MNCb8HvwZeFjoL8dhQ7zV2mdvnB5Ucc2jfjX9tvF28HCM1mys3okAif1i5XBp9",
  "key13": "4bdehsgPoSvPXLW1x9zHpzUyabCPDqC2JWRawNhz4XfavesL6k5Z1rfcchc76BGfpRGxCnJKRywKGJ281gw2PCf5",
  "key14": "2q9jshgPLP38E2zEd1h44DRJvGT2RVTHHyC74vm5okr1tT25tDx8prSCKgJED9w5JWR2R7Hx5HvQ6jhwdZx7LVoq",
  "key15": "qCeJkZTR71r3C8AD1TKQ4fhp1B7qRGRMV3KHP22UfEptzYPfQ7kV1Rx6yukMjb2REAwTYiYJAUgZ2Bmc8uaxo4N",
  "key16": "dqAMcqtfmxEegoBbsEZBPj4eD7PdnjNX7kGr337qBmUpz2KgmA7pqmbu74yrJ6R51UTaNrttsvCmJkpXk5ZcBx5",
  "key17": "kS7hxcDckQB6HdQPQTWmDSjhJoZSRLGMyrQarQhmMwRY31WEyTJRrFhoWq5ark6XYrBx3ReHHGeCfoJTefFoMPE",
  "key18": "3LcuRbwhwKDtdRP2rZqoT1Jqe4mFLc6wPrmzTgjz34kcftzVECRzJ3JH3baKazJoDGAD25DSKEg1N1DBK3cMjara",
  "key19": "5aNLzgB8mVNh9gnzRkq4htfrstmBSGbZ6hELkwJUhtbDMNxNGVDrQ5H56V3u7fzsAw5iU97XU2NnpGjpJpQBEgLh",
  "key20": "2o9vZToNqsa9ZAzvgXJEYCGZUtmKGrE144tp24LsFZmngqrHBAW92ztfsevGAJzVZEkpsoX91utRrEkwLZ8jMN2u",
  "key21": "4RCGuyourBVUGenPTGHLfgfD92DeLKHihQwuQz9BX9FtuZEcAqnvW62atJvr5dAYQG753qJxzKXZ7n1gU6zrmHZ3",
  "key22": "2XNg1uavoFqpVZ4YhQZtzVHKaBtFfAEQwvp3qe5bbuBcVhYYuZusvgQGorNQdqJsskNkfqCmKKKVAid2RYb1Fn8Y",
  "key23": "274rvzyNyjVxXnNf4vwT9mATZvbKYdX49LYCdvVmdF1yhCZf8VBBTzX2TgzYY65dHqXia2mwzkhNgUQEByh29BXM",
  "key24": "4eYDzQ6NnK9eeJEgm64eNRVqre6ud1MfVqpPAFMyhZ2eZBPZKECoTQZNPsLzSfu8wjtcwd8zFZVptnq41EGJ9XKN",
  "key25": "3nFcDqsRiVdh6VUPe8L1npCJZxaJ9A3sWK1kaWC9ppR98dSmnvAsXDMD4MC3B9soeAUGgQwB75RkvaKDzuERMaym",
  "key26": "4MmXWgrQfVFSNqdCPx1vN9HGxnHeAqEjpXDf2bqr2ADyoAXmCgpB7w4gqpevVQ8daxSsfJXUqfzRfA3wKdowPzcM",
  "key27": "4ytPHJ2zCwJiUbP2BQ28fkmX8PNvub8r96jgfMbLANd7WzeJ3SkUQ1geds6qEN2db2bsGdhovkJj5p26FG8JUQtn",
  "key28": "5WMjqiRvYR7sU5bTEa6t4K14uxuoWMcW3KfhBN82dXS6Gc5GqvsfF15MZYLJEbshMnVbcDfRdhqTzyHVbuqeqtG5",
  "key29": "2M1YGYKUz9b9zjFPqtFGhUyFkGYSQcpp2xCZSw4DWv9hmkVyAQmzvSkHR3x5PSwUuwWmwdkvZtrqcepGU4dEtNvc",
  "key30": "wP7WwFXsR8cKydLRYw4xeBtswGDCwtnb69r2CdWA59mhMEwTFxx4Mk9cGYA7eK2GV74bovp342tXjjx19QqNaUR",
  "key31": "5jTopnqq9x3eNTJBkJtEmHgsGbHZNCgWxKBF1V8oqCuPH5o6CroForRDSFQPXqCpUrpWjqpDX8HgFiSmPY31NHpr",
  "key32": "3zRXrnKRPXY9WbLfC7DP7SD4XJMBbN5SsC6uXDXXnu9nq4DEDYuCLWzPbkgtc1K8T3cb796dMacno5AtfE21bJoq",
  "key33": "5REUKMBoRJpYNmMs5QEZxXR1Vfpkm9SbUP7cryomYGvo6RjtmnMSQSwn5HGHk9gqmrJ1ew5MMvddZukzNuD5roCC",
  "key34": "Kot88MAdEDETz5EhYHFYuUdNRdbCjNYDoi1d8PnqJ4mJ19Ppzsqu3Jrzgo2Yo285g86SvuDn18LHeBeqt81Zmpo",
  "key35": "4bxz24FomBnebxasPW3FUQjtKBE85VHCYAsk3P3Yb6FZ2EwB7K96KAQn7te4D9dF12sECtHphEFA1ZszxKwyqHcJ",
  "key36": "2KyJkjE552u5WS94iQnZeo631N57jJ9CA1CkGSNNKwNAVCz2tMPGfTASGRot4zwZ7gtjuEnYPDpJMpX38bWyMVzM",
  "key37": "SqgFuAShfAUvPQbjm6TrBvLLrKbmQAq8Xzca5ZcQUyrrYvw6gaXP8gaQrFJermc3R5DqHFhoZYTjGa5HMMNrLn6",
  "key38": "2HsiacJsqVYzJusdscirserKMcoZD1ivwGQQuGGVvSmyC6DnyXXkMKxk5kkeTECaQWrobFGwGMyoFsiok8bqkFpA",
  "key39": "4MmntFn9atvBtqRBmfYQQfUCvBsdfweSupThapiURsyGbUr1RhsG2V7XyNj4FUtyodtfNAhbmTdKjCrBjMyDHzc3",
  "key40": "3e4RYb3AB6WxS5TbAEpVgUAwrQRtX9RdiYdkEuSEUH2ZhNWig43n4DjFDxwBH4qZZKdyQcbdsRciBbqrr5Y3XUYg",
  "key41": "3SyrecJQnqV2nwYBWpFiYPhaDAex7PXdYbKWFj7fhUk5zr6ASPJkz8BViHiSKdrnZCyqvQr8icznnso8eaeqXAHF",
  "key42": "kyPDyappKvQiYSgi2mVScp8yx9TpJ3CaYhZ6DbqN8YCAUojUsX8ybHR6gb2MVZ86hWD3vYPvT8HUsnph6HTRV3D",
  "key43": "2LbzRdoGDf1nqLNccHuPdPEFAHf1EhxJ31rdFJs78HsT9DtqKLg6x8gnRs9pUutkVwW1ztD9CsxMvhW4ee9CH8cb",
  "key44": "3TYQovdQMmdJGnVueAyhvE3p6HrJoDv21VuLA3LHYLx5P3b3t8RPoM3FgpSQJGrPh9aq4f9zZm1jYVPEz4NSE8Bs",
  "key45": "54qjUKgqWANNm1ztccTjX3FaJHt3yGdP1K7nQPpeZi87ZR3ropm6P7r384R2LmmxCn1BMjTVpRZSQ3D1TwZ9nAW4",
  "key46": "2Lp44BnjMu8Tyvbhp9ZBXuxshvfvAUURzueU1WXL7uKbuMm54gK7bzATbk4UTQGJEqLgu1H9MBpTAgUUsDHE614Z",
  "key47": "4Ucx4F4tDXc6XxpYHGAYUg3cNPfGHyJvkTpHPrnt3xwTNZaXNtLoDz96SYodvXwJu66ioHjBfZjN1bMHqNbNF5TT"
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
