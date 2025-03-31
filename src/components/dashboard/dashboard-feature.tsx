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
    "GMBBHKJAbLATqVYhwfPE9xKmRUQt3YgYKz1T66BVMyk3cgtcWhyAQPfj7CyWLpUiF75W7nWHmFwnDVDRjmHV4W8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VaLwALiKhAKhhG1oz1JqsHVvT8wFFiSwzhqBBkX8GnCsR928Jy5hJgF2rTjpaYbnh3rh4b6okuENhcmCHjPAoqV",
  "key1": "4jVLEoi3G6LfjV63Gex31t3H42oWPDKyMggcfUbZaEmKof16E3K7w8fRx8fmgagHTc7KX7EZiMQghExY8kKXaBWA",
  "key2": "485VwxLuhjUQnv56wCnQdnyUzvpv1BWwHS9YLXZCGnjtSoY31HwXu2vduny8FdRzqLi8nZ8EPVZCKkBCKTZRdEJD",
  "key3": "2eBcXtnzPQW9UyVaJhezxwuv21J8Mf199QR4NbpKfTWZvt56ovrU2jGc1jTbU6FfTNPfFYvSm4HFBQGiBvyYorPf",
  "key4": "38JpCmY6y63pPXgRsAZG8XbJqoBUVczDFNF3Jcp1jUR2GRrBWKe7tYCusWz9X3UyNYUbg4A4PsnUktqDAAiMrZCn",
  "key5": "25U85SHL61G7mxjvD7Nwj5jF9Sfkc5Xp66YdmrEBQXwEn3W3qV2v6Vpb7Td7j5HC1FqjrJ5vbEw9ni7Vd6F6W7mR",
  "key6": "2LbUdtD7PGiKcadTKV1ivF5jPTfwUfT8BbmZ7moHHDQiumravGYBXiFoDRNNuaEekFT8ux6idbXy1sg5Seh3XKaz",
  "key7": "3DNt2R5W7tzwCVuRLVtubg8QLgHXi5XSuRCGFZnLrb1oJD81rX9gAtQQ35bPu7FqqbgdibxfT8WDnJaKiBxzk9C4",
  "key8": "5B71JVf48z9YgtTRdJozrRoNWfKREQeLj3kSPaEZ8ApGnGpm1M2GBUKcYwUvpMLj7KFJ2MzcmsQ6PjAPEJh6sTjS",
  "key9": "41KiinY3JiWztg2Gxvz3LDE13W2rvwtaXP5oypsJrskhb7rTBH58XqXMWzJ2cC49ceSZTDVku22ShZ3ZunHWJxJZ",
  "key10": "2s9UAbZHsLzyipXFAbuJbEnZHfQjiTShJAy5SUViCBywkb8CBQKFuXza85EEVgmXwRcide1XJfmfFdrN4j22LQ6",
  "key11": "47HJPCw116nfEDzrCDfJUdzXGzW5VLjcVxV1hTJxG2M7PCL88UxrMWVFCnqPefYMmG7AZJLMJcSUc4CJ28mdzGzK",
  "key12": "2YT9MsfCHyyfMtY46pVoATyNaQZSkv8RuxwrMKekoQf8REGgoX8qYJQMP9brHEkhu6KqijDsQkzmTvN1chArNePT",
  "key13": "4Z3e2XgPp4ZVZUQrXeSJ15RXy79paqUpJesi8z35VY3XX7uiSrdaEwAiABNcj63q5tP9gkNzXAyABb63j21qgcB5",
  "key14": "37YuQrjKLaBWRira3w9b9RNtD4ZKxSYiX7uVTwtrxawQeZ2sf63uddmpeLTX52NoMUuDGiphLcv1KgHGEsD8S61",
  "key15": "3Edzp7Kms6cs1CpfySA4eHYaAwrWiaKGvy2h3nRA5i4TpbLdBeMCvxECFmdqzy7fBE77C3LiGoK14xkyjcCNfGuD",
  "key16": "54x4aiCSSd5jjiYBNwH8V5aop6B4oCh1sPTrDoKJcYgRpVvRvNCnRqq7m8VZvVAsZRaWpYPVX3cU4gquDbfv78iL",
  "key17": "4VkhZ52oaoBRkAiAnzJ2figeJ3ywC5CNa9dHnkqHAWcZ2vFaJZBFz8ZgdWVuf5stUrWyLXZuTJ69pHFoETmJgBzA",
  "key18": "2U1XwPVHadExqjgbi3yupGifyeqLpigYEcEiMcwk7NxvWr5xyLp9SHJay7DULQVFWr6FjrMepBsFvFYSZnyfxQzU",
  "key19": "5JPFrPauqDUvH5HZjULsnMNaEyUcrpuCxQ9kBYGLa6pj3TcqNHanDT2K3ryr8gZZm6FKyLzrLZ5XtLK3uC1GpWFa",
  "key20": "4tjW2ZHThqjynXRDLf96JtJcRN7VAaTffFXLrLarsxFZavQWLw7kS1tZnVoPgT55PrTv8xg5VN1Aft2GHVke1ZsV",
  "key21": "3596MywN5qDdEUwysnUV8eVoWwFAW85zhRqoGJMwC7NLmDbS2ZBGAkTyGzKeK2GBrVmfC3txQWesLrGqn4QhDkgi",
  "key22": "zXam8aNB3mcNDZASDJqB2JRA3XG2m3ApY5YRYzSyAaFnDLhAJXRLmrH4rR4jMJ5jEfBv7Lz3g1Vy7cMjF3ZZf9a",
  "key23": "8EHiGSeBfkQGVUaHp9eHdohzMSUxaxJgGVdfWamXj4xjTm95cYXKMpBhjt5LQNv4w5deKrijhB2bEiVtLznqNx5",
  "key24": "4usVFPiG9mRvGpv3Sgch1EDqPy97ke3i8YgJsNZf3mxvBnbbsp4AeuQXv1RSH8BU5FSRsXnafeKg7Y7f4dCLF54D",
  "key25": "5CvSDNNK4qN9Mn4EXanspPzCuA7wnT61nfpFWQJaBB5LuRH5Hh64MLKP2PWpDBxM9EVKXBTHNj1EcEcgsqRpcpLj",
  "key26": "2N5tqLvk52XjAC1QJB5XKhnDm9nPKaRURrJNw8rLaKv3Vw1FHKUheE9LRBu32pDp37i2bbEh5xHMAx6AYPGD28xB",
  "key27": "3zvCBPx1dRAfU7dQMqy8T7kj8inqcH7MFZqpdFdDETG5DgU7xr1T3kfpdqAtmTtsWUhKiSDkgZ59VvriFveaEhee",
  "key28": "neL4ZrJsYbHWQ1CYgqxtXVRDPGtWKNfMMsvfs3vsMgGuowHWfQs2ogTksBmBEUAQUmZfDxRm2uW6CSdw2DvJHce",
  "key29": "426eseJ2ky6Ub3ip1vb7L5ggYHSfG3RgpLzkwRgAG6HGjaPudoEVkXBuGJJEhL2xEiDkbwHdhSMs2JpELkFPqwnW",
  "key30": "4WBarXukZt62f1h3iWK2pRSWL7UJrLgkSwk8b89f75Y97TBAKbh6wtnWKwQd2sKFD5uQxBW9yGS82eBUXhLoge2L",
  "key31": "4pSUmcpYjQiSEmWjz2QAjEVpSVu9JgHZqWgMwWZ23f8pPwY7CpNNmGs2hh7azNqQo2QEZWXNrNP2bzBr4v7VNP3",
  "key32": "TLGRdLyrSybNy7xtpPdW3kyzyjNe326ecfMzADigb5V791pZPsLA9wzgeAVL3moP1fqTPWaiy8VMsQd2bDzDjJr",
  "key33": "4X7t1U5t31tnQBa2Nr6Ucz2LCnBmtNwziAG1GLYEQ73YGzZaFJNXshr1MDJ7xgYMXG81jmN4rYrTMnv3muxnmPmc",
  "key34": "pHxMe328LNapwaPKH2NUupLDS3WNzecCLnyoKog3BUfh6XT3jvrjkXWm6uzgAEg1oUpce7ufUL2wfzkjg2gmUzL",
  "key35": "2GnmdJi1HprdoGhjrJ5ZSNz7Q6WXXYn8qUpCp6VRkoXLA8oqTcbY8dhzwGFZi43BpKJ8ZXZzCq1PzYJ8A3YaQfMx",
  "key36": "4Fq6LwUStzR6YQBTTM2Yk7G4S7PEYGyZwqweDCkZVRjmNaAFPpjCVwm36RPnm5MTZmavgu3GCBut3gYNEJhY1BhH",
  "key37": "2CZmNLZCZPy35yBa1Z8K8XuF2hcs8Zge79U2YByoLEnyPgLUSoRAJ1D1GYUVpfa5kHCnzCkRPY8gKZbG4s2RqDKZ",
  "key38": "XPJGTK6WQULuazh6uZ6kcQ3Ycn6MGtU42STsAtJPpu2KKxqi41uP3EzHP48DkrLEfXucT24e1UFHPvNbt9GzD4W",
  "key39": "nRRYzM4XXUCr63H7qh3AQ4VfL4iHipLVRWRETpewR2Z8dgiDiHnpYX3pCrdTfSNv1r9NJfwAmBHMu5Vc5mLg1vH",
  "key40": "48hpuxa2AypiRQMgYFXrfZyeZZ2b7b8dGwdNgVBu49LmmAfg9tRr4w6x6SuaArMC42cNYkhHLCHAFyqa9L9U7Cju"
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
