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
    "4DvtVAxc1kqwG6h3TjhYouCD1Gg87wkMSz8QLHszVd9AQHfGU68PvmseyU1MXWVLDNtF67RFgtGi5Fjppy15G8MT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KdT2Jpem5UxaP2N15g1gVjFA87qG7Ef2PxaSSuWbEKdHrVRi6WuMbm7DJRxME9gudkAGixC6Lmr4x1pGJVwDqx",
  "key1": "YrAko1MWPVrYVzNM3wzoJCKwVUKCWHigKQbd9tsapVNpB5sdWdXvW5G4DKzdfDMneq9yHgXxXwkT8HJYuSBcbLC",
  "key2": "39HSCvtknHuxp98pXuBDLC1zePJaLZBy2ekz3QQmuL6Qd2y7Hpmc3AAMm1jpzEG4D2c1TcQgBtadDtt5rS6xo2jR",
  "key3": "3d3gQH2wiwWH5GHQHcbPqNE2dVo7rSYefXdn5cDG2yMLW13CMj8MBxJTnYUR4zzxvDpDcnTDhUZstyi5nsefjkmm",
  "key4": "3sehSswKwgQG2SGmPJoetqUzrm2E4yftEQtYpnHgfeBm47tArPoiCvPQ2tdQBumGc1DEj2PLohja5cdxvraPpSCx",
  "key5": "437tsDFtgzVdqZxBbG7hHSPgYJFcfPGyTevDKgvBd5FL9rqju7d4kJ7sMgTs8WMWuet2V1BfcBiRanVZKntEWKdz",
  "key6": "31f3Y8yFeuBvHMMNv9crVGV81amkDWVUy5ip32p7xwuRmsbnwiWRxYd8FaJGfcUg657R2teVYvfFidZAdLegfJMs",
  "key7": "cTJYKw5zdA3RfF8Z9P3buXTiRiP1sG4fPTKz65c7J3BuwVHiqEEAsiHMEDf52Qge3dVYcknZYnRWDWzafsqNgcD",
  "key8": "2sEQkKDqNwwjpho9evgiqApKvKvGbguDKnAzVMyfrKC3on21NRSW128LyFSUkQWGuL4XtRUXkAakomBaSCHLQvq8",
  "key9": "5SwgFonh6yMGbCJxZJCAPC8jRvAJAkrfLD75jVgP9DVjNGhMuNuVDajfaY5aNXbZP3okVmTszH1MbVsg3u9ApQfJ",
  "key10": "2jWhkxkmBioxGvGcY4QyXDNiTcF9AowPrZcbo3V6yxaEfGUqjGct7TRRn6ZSqbeVWDWXxcTpQdDkz3cKA6d8sPYa",
  "key11": "4trQe9gBTSru8BJVamVDLQrGfDFwTHrjXfbKCPQMAJX1HEScHPRr1pE4H5DLADyaUbu1V55WaQ9qHFUJRS9m94UA",
  "key12": "4PRSH9JjJ6P1bLspBnUu1P2tbqdTFXsJhL42jaf8rA2eE7TocHZgsUYBrXx1iN2iDPSuu6yonZey64yxMmct5Fzw",
  "key13": "3JjX9MaqU2UjBRmLX7TmEoGM22NhYiA9JNSL4LzHtDX6AYad7PJ1TSwY1hKbWE2gCTynxQXm6stEna7sqwKF6eSH",
  "key14": "4o7a476ubtGKt5kC2MrM26LihK1jyNyRdZX2JTzi919414QqSbdt93A7YZqwmpy4J3JsqxQVUVKGLJBqLF3MZckv",
  "key15": "2gtmceGaUty97LeU4FYHYcKjxPqWyfAqUMqH5Kb37XyEa8zDNttbhAAKeMLnJMo1aoCD7xS11mEthwSm64sLXGHb",
  "key16": "4ncAbtxiuaXKwSP7zcQWKirMPPB3izXUVpwCAajJJrGFuC3kMd6tdwY3dqtpy4GZof6Ys89RsawMhJ2bXGkpyKxL",
  "key17": "4htb7sgkbxKuQPDSWqrecrDXR454GjLX1gFkbzUEAK68f7HsMtBysmWtE8N1iEAMDafH4hbuwEwccYFp7cWSKoBG",
  "key18": "3GpAqhymL4ui3scVLbDi3Vs75wXBWdJtzv2g3t6c2mkeTWb7xgPzUbB1CvdQagfyH3xZMQYHz9CkGHiuMqigXBEk",
  "key19": "3L22V3UFjXCQM92pi1jytNKPag94wb1QyKohttMhV2nyE3L1tDqehGvBgz2DpACkTfACzGXxjFURFhcH4nSMXsoS",
  "key20": "43Nv5aAhqnJoW5FXbR6WjWPvzkkgrDxwQk5STsAD8wfySrugQbu4BF1AnnNqV2vNvpbLeMefo5tAzToxxfJwkeTq",
  "key21": "4FjRNtm5tfALg4zyg6qusTioivVarby2p6Fy42SRs1f5yZJYJU3bTx7WH8T44445Hx747Dy2NJRG16xHpifHhyLM",
  "key22": "3K99XbLRKAjs6y5L2NFo9jLruMFGUHXBAqi2ijSJHfKqmMJg9cDuTb62dv6CCyr3jCNkFWnBYLTS2GndqKqdjtmq",
  "key23": "1HxMtE9qLysrunbscbWDRLiFgxcJ8NAXBmqBbH4wwrwny2JeMLXpyYJoGWmZA6176ouTGZh4PXJkdT3aCmmfL44",
  "key24": "N8ZgnDKUPCftwSfnAaiYgYr4PRnCgPPqNsehqhCy4vMT78eUKjHgTvWL4AjAUpHLuAFLZK5eccuP7WmKeEvmze1",
  "key25": "3N1Y4AsPJXTmk6QCRajZEGcAqx4krLYVcZMwhHyE35UphTEWctL1S5Dd7yJq42Ex9dd3VF28YPesWMNFzUQECv13",
  "key26": "5rigWXZcx8ikswZhxdj2Wz7f1nPD71zqxvrQVvpKJykaChvmw3T9SkYQrmRXxkbBnd2qeZ8qZsEwApH95QLyX85f",
  "key27": "4Zc39gNg8icrkzNoBJoAHib9RRgtep8WRi46KXH3vZoyy2KTtPaeZm6T8Pt4NByr3iexCX6H4b3ryJRR5xgaJzan",
  "key28": "621f7CRxL5fGdUD22ktPSzyVjkpnMD4ZUSgxSuVraZSi1nMgoNkST7AizxRYPKKsKCcoVcH3muRvg4e1QqjktWWd",
  "key29": "5Vj36QkwbjLxSPZCBsX2eQxEt85sp55ukGkwj9CSQrFiND9XvxJXCSAUz8Cwp1XY2VJ8RtGHm7MkemQcNFx9uWWs",
  "key30": "3V72qp4e6Y2gxgrAA9AM3MrTFtitF5nwzF6RvFwYqXen9b4mVfm39tRmhpDmk5QfZHidvU2ojzkywp7xkSQ1TgQb",
  "key31": "47ZzLDGh3VvmiRzwfJhyKxipnKHoL3aJAp325xt9zwyU6wqUE6y4kDnwG7oTyXBd6D5WJ2oYmBAXhLsw7R4SQLfi",
  "key32": "2N4GgaU2C8aDPyAM5DzMvCxi9SAfjnFTwbgTUHdUYx91dQ3wb23xhvdntnsZ4cVhJFPYDyFFXEmCRNjK72B55Tg9",
  "key33": "2WN2ktenLmMqqYyz1sozc5Dp5fH3nXUXsyi8rudTikyn64NoqEX6oFzea5RhS4NwMcXc6Qwrq3yL8cUSCewaJ9RV",
  "key34": "2hSa6AYib6RqpJ4mptupd8UK2EqActvidUn4WeRHzZJ9cCVomwCN3jCQuu5LkFSd2PHygVzwHSyevxRfmMJNyMrZ",
  "key35": "3guZCN1eTcd8fyR3L2JNXGFWqiZwMcH7Sn2RV8BipLf1puPyXtrTwcnoTrxWEeWWdEDkwKPXoJV3oCRfFjURQkAX",
  "key36": "K8io7sVJPhWFig96EXzUsqfMD1etHvencH8xLycj84eKidxVJkSAquF4WcdLoYv92abuMup4GeSnP3Sn8dgvtDp",
  "key37": "2CG8SYi7TKFhEw56xYvGTNB1pgANnPQ5HdQjFUyJU7VijQscDBR2ea1rThQM6r6qAx8fbbF38wB81K2HWy2kmDxz"
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
