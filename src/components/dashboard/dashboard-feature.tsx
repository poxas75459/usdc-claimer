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
    "9ffmgSBP9xtbbCnzQGjcq4rfLJ6V4KmHoKyyxfwsnJAT7HQNE3zJx1MK5Py83Bwgrt6RegCSXoHiZKGP4JJQqeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tpjisauoVyLVAxgcMCkPfyQHDnL5znA6G3PB3kKpBPz1HSmafityXoyTad1wa4DKKMQQmZrxDUfy2Sp7sE8xbHw",
  "key1": "5WKdbirvr2q6SCizPd8YYfhRtKfNEzhybwkrn7pWdomTCxNHgNCSKmV5zvuTwpDLJnvxDcCQPbtDYKduGz84eTSm",
  "key2": "2GgKw7LxsYhxXZdmHtpEuAQg1yhoSjF2Ls1QuSzWHMmPXu2PrxiKPVf5xyPAQ8LXdGKNuj1McyvCQwUnfWXbXzgG",
  "key3": "64547g2DHeatAPTiiZVAGxqrnqBUYNHdzP6WPbziEaBa36JLuZhgXsWgMfKqKkJ9tDuN9NcKjojzXe2DthceJxyD",
  "key4": "4bL9ooeSoy96TRZFXaFdGJ8G9GYjSazcgHzfXjHSCFzQh74zeLgYuJPRoUToXbR6u6uLMwfMYs9oKhbLYEq8mmSQ",
  "key5": "tCLsb5NcM9qBQhg2x77XcJM8f8hzfQXzHYnYJPzuATLnfqHBxwEcE3SyfZSHgMjis28RSEdUaxDCrGjS9dQRumj",
  "key6": "55RqoQ6nrpwJMEztXauPs3HTWBvKfFBcPMXY8JjFP24kQWyGh22DgpBRQVoEbBSZKUL3HNNsYyYTBoV8HDYkS1Zy",
  "key7": "2D7MrUhrdgpURauHmnRfpnVN9Gf6en1fWxFcpDg7VDDPNz6Ca1Ak5YRTyn2zPSbgR1gwuyzxH2xkHjtq5AjGPkvW",
  "key8": "4vWXHFxbmu1gvwy4W5ugGEsD6MHYyofZQauEEaR56SDVFjg59qHvS7sdaMBmaBD2yuhnfKyirPLDhuzQujqURxJ2",
  "key9": "3HkvneUCZGpxNiFWcLJqB5zrEnNWPk4pTADZStX4znhTK5J9Xhmaf7nkwzK5najX12KFEQmESyxk7wToNRFDfezy",
  "key10": "311xrhQTyLBYkq7jVyVT5y7ebPEVSFunfsPMgUT6SUqGkjpHK4xxQQfGxRy9dhHvXTChfR1y3qG9Yjwv78uQk4mw",
  "key11": "pc4A1JXAEytuCZdDrydbFBemvkeiP9eJVWQdBLwwtMo3fvrgbxQk89wvvi6frVE6SZ4pRRLU3GM7a5L828ZzfR2",
  "key12": "2TdsAqjJH4ajRpoLQeWVgGMjtyEQha2t4S1Ucz21LZJhberQs7FzwsyoLeAT2sTXrSUQbJCEgvYRidkz6j2kbAWx",
  "key13": "5c1Yn9X2jCweJX66Z9sHJJs7hdeh4mX5yQCiECK4bMAPW3RdsppWsNbmVxXFojLG1okr6DavcMdtwdjKpNi5UJxT",
  "key14": "227naod36NRURpuH7eBGa7r6cgyK4ZQcRuCZ1usiueL5sUAUmAd8gxtfTqfAgEn9HCPReSe8kMKEefT7vt274Skx",
  "key15": "423T6JcCZDAsDFEn8MyuC2WY25M2Yuh41T4bHhdTcJGJfuEfCp1vWLrz5eNVv6bJNCBQkpH3px1JBa5wqfccigbz",
  "key16": "3zCXLY8KAVcCiTzUu2hdE8qqWrSddHkJ811wBC9LKMK89wZJHXFXSyvy6aq2YeVaMMwbyYJciBUT2VbAvnyCgAVo",
  "key17": "PPJj5g8JuvNkFNoPRwF5PEp5nGyfNUVEpF3DG6rKHRWKrFD6zSKDRgV4qKhLD4i1z2QUwGpBn2GH29aRVmyYjJG",
  "key18": "EGs885PBHMJiRkG2L5yZ9mXtovzghob3zu4TRdZwWQT89vo6pxejWwSiRT5saEBwPR5QKAiSiejeajKJDC77Y6G",
  "key19": "5iBtGUqYDyboZ7rc7jeiPiuXErPshqFfmL2aYuwQ1rxsMHZoTym6mQks85cjEnpdjWmhQwk54siyJykotuUApui5",
  "key20": "4ag9BWkUJ5Y5joiog8xcgxEJG1YJ8nsqcpPpmWBG9Tj1AJ6XaqQ23zgzJqz6eJtrPtLHjPvFtgmcKuHPeas9jwr2",
  "key21": "3smbTRsEYgq33tAhpQETYY9mQWo9Z1hYEXmyySPrpAAuNm7pccipyMbQiDhFCAXj4RSoD1yogJkCxabuibbAmuM1",
  "key22": "5uQeEfdTdWeFsAk3qvArmTxah8U8LDjoT8mntD2P88XQ9py4qyUmnpntPj3QvTAskk6Fz1tbPd94fwkdMDcXyots",
  "key23": "5wisDnjCo2AFtujKXPPCWNvqv5LJZFKupM4yjMDaq3t64EBtZDNFQzBm926gKTB6i4Vm9yczdKj3rtVYJJENn55J",
  "key24": "3nxuTpY7yb6GnyAp1ABTiBc6v4Y1k97Wn9frY71uxocBE7huPtC1HNrPmuZY1aBQz355BvpLmRgT6QQa54GE67Wm",
  "key25": "3ehawxiXi5syNiUzVRtRJySFioMDC4w1hmt6JVr8J5CUcoatbbCXEAWMNNuSuSzmk1ybncGAqMSBvcemRkQb8kHK",
  "key26": "2mNXibS7vnHJSgYdYtdTdkKbsHkkBYgRY6fYzjEGoRLn7N5XPcfDPwQEzNTeBzViYSiEtWavYFTPdymt5XXKkRkd",
  "key27": "2AkdbD7jDaE9MThRrL5AL4U8tHqdAFSNRgbidzjYHFgsjbcPiBFK4nKaWDy7WjcrSMmTpuTD46QJajT4vFp59YZA",
  "key28": "wA1JdmynV3kqS43XfcdkKQLXGWhJDga1ezFcVvx5sWai9QWDz1fJUXFw4r6iHFNMzLM5F8hC3VXbJvPGV3EtZr8",
  "key29": "246AJ5cnWrpX4neYtgVAhzVJvoT9y94KPnuaJdZ3qDcWVocNJ69tk8HBV7t5jK3ys8RjLiqV8UtuY8VmTi2DZvn3",
  "key30": "64SYDa6TD6KdWwXxT1PwJDeVCggNtmFiuNb7JuXrwN4mcZJLk9ahdpzm8VBf5dzNkgCb2z7abjkTmAx93T3zSGQc",
  "key31": "4HPb5LHkH9nhYVr8SXvQXmxTLapus8pQyyZxsFs4voF4xYAems5NqmtpL896Yr4X4mVgaQvQDB2gELMspmG1ivf5",
  "key32": "4UpJ6eMbpfSvWfPEBzgCd4Y3dVpVuYRcbFDiwSz4QseqNf96K9Kkrb8CeLj249PF6ggfgpuNp8GJVJuNgbLpaQJy",
  "key33": "5Gu9pNfNwv7HQALh7KJFQ9MknXBBbB7MgiFX1DnKRTGU3VkWYizqtDzLCXMkP6BJu8pkSaxVCV7cnRGzT3UnfnPH",
  "key34": "2JPyy5cMm3QaCgfEh5yEnrAEqzQSEmGtP4m2zNyHM7dkeyZyZhokv1ocpyBCQvE7JsCjruYE9QLrcWGJsFDmXSRF",
  "key35": "5PU9QkwgXmQQ96QCPJ3kx2uwdTaX6EsVUoZJXvQtNLgUNgoxRBWe28M7j1mnkJW5emHP6YPymcjUqCv9wyEPULFR",
  "key36": "2Dxsg6mG4pAZd6GV8CxDUUGhP3oDQUog4bXSGmPi7aCtVweUwpnUhbfkxDizLtHQHZmXvt9uyfYiZVwppvjtmm3h",
  "key37": "2zuQB8UKanFgmsrchvoS9WoKC3esxwPhrj9U4yT941jtbMAzb4tbteTAnoLbGmpD8HLPJYsP39tiaQYG8axMaQqz",
  "key38": "3riEQzKK6xngG1oesd7UGrxskCY9v27rhajw65bsjs1PjDe3Lz1MWg1U3c32S6JZbBAYJ8aUGoQz6a1aCtgvFGmx",
  "key39": "2nBXdR9S7aDMQT5hX9S2DMF7tGbJxs1sV51sQo6dnSbV9MoCDP46qeUiYH1uDjgaRC7sqvMuLduKDSf5jsMuz65C",
  "key40": "5Npww916qqgH9haZ8HK6jMndWoTzvu5RHiA1Y6LD1f7xRBEAi5QvKGimFCHxwFq9mBiQpDWWD2u92DiP6amosk3h",
  "key41": "3dcuFd2KnDWiMgzT1cKzJfNndciSvKFrMBA62PdksijuP8nxzK2MCYpEgU5QDn6DZNjDsMkxRZ2NxYJ8dGWwoRDk",
  "key42": "3KpKct3UMK3SwcXwoaXQx743k2ByNx44vztrUFoGfJ5LXr76txk6xYtkdBEdbj2NNEouqLX1ZypGHERyQgbgfxSE",
  "key43": "33uRnixCYtUH9AH3UCsjmX5xwmpBWd7SNKBtuefZYSRND2oXccSpufWacXLmhQi7KRUm6PHTqhKAS4kJ3hqpgLnE",
  "key44": "2et5hJcszfsRVCn8wb2exVwqaT61Ji7CimMYwmUB8E8UPcWVa1VEEsckCrzxHtv2LJN3yJSeHTT5eGPNaxCckm4",
  "key45": "4N3k1RAbqo98TKaSMkYMd9YTXTgvXPp5zXLHmtHYvrTeNiroR5s8Nv4KSirAfAvwN1Y2jKtSQh1K6FKq5zifK6oU",
  "key46": "3tEqSH3ipR6SWzW2HWimorgdvce9qS3ffCuyvYxQvfjWbsLygWiEPwWbfW4WbfYiFCKEoD3keG7AoqqExg8XgTup",
  "key47": "3KZALyGh84riCyQ1AWN7iERJ4NCPrCYvR8R5ZhHpz1VCNJMSQzp7K68CFE4nB9j6CEL8h1XQ7yZc6ECNnJa9Rw59"
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
