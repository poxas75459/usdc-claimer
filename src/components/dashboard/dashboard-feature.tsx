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
    "3mBm6QLncgmSE1rADrXs5YSbx5qoe8kYaK6GzaSd6ZxwdHSvU1GnSXMBUvcrLcE8Ht6sPDCL349gBJmtF6jtjMN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LvDu3RVomLKPtXahYMFRouHvGGQj8qsZ4xsrCSGg77upksUix3SCKoCLuW4aqeUHB6bABta6gfgcvL7uBw31Ppx",
  "key1": "5CLNy5bBjfASnuzim8hND8pfTvMiqayacGez3KyjdEDjnenCWMjgkMrLiLrou1yDfJuvfCAsR1CrhaturYjU6V1K",
  "key2": "3d4WZT9XqNgdLTE4u1sb7GCgjisaEYcoNYdgvpSx4p7ysKFMfKVF1Ti7vb6dcaVLMiV4x8qaK4zMSeqpXaHm7gy8",
  "key3": "5Mwrq8dsEajLn5GNz9yAmZ6qXBKVPk1sQe27GN21fwaEKURZ3ykdFNZ4Pi1HUn2Pr8EZC4A8r9QinYsapPKEh2Xo",
  "key4": "3Q1e3Y852kPBwLyc7DE5crxCdY7FVNS3VVZhvQxSJAycxB9Js1dN8gWqffhS8evMDjbyoRPCmSvk8BzbhJCdvC4N",
  "key5": "5kvdADSoLXEAdYoCmn6JMoVVCsWJt9j4s8zqx3poSt3CvHYBiuuK1pPaYqvTdVGGjvXYdEh6SWMo3dEXDsvy8h2E",
  "key6": "2bgfjTseJeXgRY2pGQmdL2RL9Kygpxqq4G7nWzEtf44XoYrEdMxRACVYHUdugiztMci6RTe6vUTDMaemeMS8c5uM",
  "key7": "pEhMKP5xRy5KasKsRmTdPVvpZ3PkCT5Wz4kPCUVaR1qzzVoBN4oXGxpA4kPoxHwLbsSc2vijxgZckmb1tgGS8zm",
  "key8": "u2f4dWJkR9JUMkNVRZnJV3XcFT1oA61LrQRCdY6KPepEFD9NAnK8ZhExsrBvt3fLTyQMq37aU6hUGCuYWGAMVvb",
  "key9": "4Zyy8SBnXWB9ZPAuv25SK7y6HFE3YEJXJw3LyG6a5LTCgonXJGKWoz4h9kn5a6r4VitFzbUnp6XbHzJSkLJt33JG",
  "key10": "4uUvEWvC9Yq6D6ui1StnZzUJY8Wi81Etm6KLT8jaXxdKZvRZdbzQkjmKMjwDk1tTJp6D9yXTzMjwGHB5mCv5C7Hw",
  "key11": "3aq78AM39EgrJLHByP3gzUdKwUSjMY6cyQkkggsB216r5tSUpgTqcPzQjzABUd37Wf5uB3H5L4PAMSsyr6M7HDgG",
  "key12": "1p8dHc95fPEbkJZ1qKbvn9JF1vahMVyyDBz6yW4JgwFkQb1EpRhPtYGJvXpXbxgfB7PTprGmHHTkV1X5PJgDWa5",
  "key13": "4CRSzTZWJeNAfQ1iozbPEsbY1y12Yp9FViyYTSjCeWsAoDUU6yjRKJfoq58qZnEa3purYEprJNFMLmXr7i6bpWzV",
  "key14": "S6fqnLm2KyrKxuWCusW5a9xtCPDoeEPMxuDxLXbGTk6kzAvHdr2tkeyej9H8Xb6Hes6xvxydVu91FqLTp5k6Dwg",
  "key15": "mdvWPzSXUNgeza6vtg48D8bMrExq1beBHGnBDiHLjXnnvntu8BSJxAXZF1Fvz2s5FWKJUX3JKvpWP2iFbNiNsdg",
  "key16": "5P65oPMz8DZ6cy6bPMLrg4GyFUA61vbJaCHpkiAqq7em4Nw7fn8sBGWn2KXkTwuiziaASeCF33v1ewG4fNJBtP6w",
  "key17": "4nccZNkL4MksgUAkrUZygiLjH8NZKHiBtyLnbTgDrgwtPk2EaVshAnHqTXYCCpgMS7w1e11oRibhcEug2XTjGJFJ",
  "key18": "4cd2VMAzuGnGqqbw3Gz4w7N5Y6Zvq5hjTFp5wbArtdn17T7ht5uCfiDRbXbPsU3g8c9ox1gXhLHU3uyARSYRunVR",
  "key19": "2Ter77ToK4DJ4SdXeexxc79bRD5tQ9fmhK74RhSdwxDxcaptTKwueVnUwumJv52fmsfjUegVYrYPXoKUPezLN5cm",
  "key20": "2ZAw76qtjhYTxtNWvxK3hsb441c7sqAN8Wo4b2HEzGA3DvwuqV2Kdx7EcRWjR2jy2Xe5CZjV1pC8RM3Xwwma9wWF",
  "key21": "3AjnVscxeZrbvpwBsnzvm1sC26tZpeoUHqbbwnmSQvC9g66QhghgZ3sdzF3j7DMY1sAKECqifNjgedbCqzhvq9eU",
  "key22": "57MhbQutNNsXKuqd3AaMaTvtLrCEir86iBwaYjZtQPCpberHFjyJ2nXUcXWnyuVWn7bVoCgWkTi92CcSwAqcFuZp",
  "key23": "4Wvuyj5i2eyVFe2n3PHgg1Mo8a6TJxtWQptMn2zmpjXJfXgYM7U26iEkpy3FWkT122vRttT74JaHh2xSXY4gyy3r",
  "key24": "67MTDiyPvweHcnhSnnmcm6G8XuVRahyE8x19QqbjDszk698beJPLDJ9MENYjSdof7T3oKLQLePpJAUbZnwrM3EYk",
  "key25": "5GaUjCjZRUnqPeFnu8fYCA4Mi33wHmUhco1xubZSFN9UrFFoojVd1vWYLkryK3TFLfZ7FTzJVSzAbDxgzJLaGqhp",
  "key26": "MiCmABriZLg7QCBy3jxRb3JbAyw5baxPoc92zgR3uMP6hQkWTwY6voeHr3rfpCqyQBLvFvH3477RY7m2y8QrrZy",
  "key27": "PYuUqXbV2g3LmfAqq1hs5tHXMGNysDLS9VEY42arF3uzUmhoS51prmE9SaQE5eTHAQ55KWdzLZrMyhmFpudjZY5",
  "key28": "63Lc88YXGEiJ4CR25LfwhQcQof3QwSR9dBdrkMCswKXM5BSgZBJ9e2ydYwwGcLxsNCTtbbBWi18URWvpasep4JU8",
  "key29": "5ThMUfAM71EyqgTcaACBGStq7hf3sSpaj7XF98F5TgobKJD3UsdfJNTsPdKUMueQuoj7N6i457Jao8KUjJ6YAVvA",
  "key30": "2CF4r5b8X5miZH4FuHJeBq7gsibnTtHyhSCYbaWVp9fimATDbn4bKWV76X1sXfYDTYy6HDZp9ycE5XveF2WMjvKa",
  "key31": "2R2vJfXpHmMw5uioh6MgLRnCi7cRRvJKjDp8FAcqGtxxWPrVHAspTWP9mrYgMRxkpCbc8FZySLXDJm95WrUeuVUo",
  "key32": "4wPpXQM531ndxPZwSJvFwUwinVTnD2ZrBzvxrZs7aJ6cgSfQtmrrjL2PaFyWKzP3TEr6mynGVwduUE1WRcvxwSyd",
  "key33": "2KCTvDt6hVJeCbK7WipcWz659yVT31xwwxRz5n5zGvvo6PDe2phbA5iorTKhTkWb716NdP7cxQs3UTzFiVbTQjeC",
  "key34": "2WDg7ToFsPejxrHDtEXiYdVMKGJkciNFZ83Jydsr6MAQqpuEdgBFowSQNvicJi42HWfdrNWqt8iBJiCABTzwx7VC",
  "key35": "4u8R7tCsKp4RJdLXFXxMpSSLRf368JiZSqacDELFZoiTbkT6sWH3L2EpR87Fr62feAjnpdt1cQnn5mEVRPDyUgp",
  "key36": "e1gSe3oCM9qLqWbupnmAgcDF2MNFgyanzAU49231RdLVwoiasDhNyyhL2f4sjosodQaeipuqnmRjXVPEB6bdGmj",
  "key37": "2o5ZvCZj3T7TKZDsJGboEeHDvHjp8QHorg2Gwyd9bvqnDMrhvAAMekaxCUAePLhTutavcaKpFJPQfFVygrYrTair",
  "key38": "5Quovr6SVGyzQ3Srk6wTtxbqidvm1GbzJnwjXNFpKiseB4Q6vpHa6xowd2DD9ftCfnPdYDWzzznsDPMnu74378XS",
  "key39": "3saYcUyKCkx782H2oCb3njdSDfGN3tZsPGdmfj5WgMaUwhLweVYpbVXSnQbKG2F1kuSGq1XciQYd6NQvvczVJkPA",
  "key40": "3w86duzkwuzS5edRJxzAbz1uRy1PiZzmnAL7StVCvXvMQHZRXuNZ8CeYi7q1JJjxeu3vnEqWNXyGJWnARmxwhnZX",
  "key41": "4XS7rZfHsG1LcNBWpg3uV77H7Lg7EjFyDQL8mUY2sZL98gypDdcNPkVc6WWadQcoV7yRCjHEwiLkDVjgfFG9CpEx",
  "key42": "2dSg7EqPafRtmeCEdj1UPoaW7NH8aNXsSBzQisR5NCk6xFz5WwkN9neMtcwQpsqucANsRD9UEGN5wNVuvM49wfMQ",
  "key43": "2NyNyYFWfZG6vbMj797x33wW6d2oSKe1zNrb3D8w1Po6NgezntGyM6QdMCNXCC93xT8bcJhsnHSTic9q74P6sfMF",
  "key44": "3YvJ5RGQsprnN8GMAg52FwaPLVDH8tLcXy1uqjTNXUUetVCZCPqRVyrErhArDWuq9sX5BvhTJn8jQ6qJq9hxXEwA",
  "key45": "54YvYbMfu4oLGgXNCkUb489ekGebbGNcoVKJ47tZyTJX4ivyyWWe7B5KWK2HDwU8yoX19QCpvDVi9XemdSz9ZWL4"
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
