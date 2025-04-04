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
    "2jXCafTFN3cWWykphHbiXYz1eFC6vQZoQcD6y9eiW4WK6P3i4JLQvcXeix9M1eNz2qJcXu9B6vQVP3Fkceve3w8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWzosypgyYxpkZD5g9UszvzmC2Nsz5CbSPM5qLDywFRuAbfyLa1pd9CeVc3fhgxGm91v2YnKagSoDCCoCBXNqJC",
  "key1": "2xUdosq6DXagvkLo61XM4aJbka9wgPquqhWYzavXfAkmC479Q7ra94S7s4iQFq4s8MkkLfhH3aTHSLR9Co42xv6N",
  "key2": "42CFDfFeQzBK3oorKZFt2cBPsVTFQJQ94qE2sbKpLrHppwjAZfFtyFyvK74khbwY7sjct3DfeSayghNmcGsRhsXx",
  "key3": "4fa9HUxVFHDfzHALNzjdfFRBeAmpYQ7WEE9m2Fs71gbWpncYGSy566RfFmH3scgDXkqxrq6xy5QezMZruZVkJHju",
  "key4": "2UNF3KLNt83rcxzerGfhz17e9h3bQdMgwp4ohc1tYakvnhxhdq2tFccGoKtXgFai8mUK9e6QmtqSrc2kGdFLLRe6",
  "key5": "3tyq8pwNahmnKUdUWsSZgtzBMBM1TT8QhodNXN7BaTSrpXvP5hcV57w85GevhUiXfihW7JZYxnar27PrM3RM3Qy2",
  "key6": "4J9rEQoExc5d5iAM5rsq2Q61jCUqayd49KrEqP2MwaFuZqGKt3Vc84L3ER1FHVqWLeDjGoxFQjiEwHgxH4MfVCV5",
  "key7": "5mTrQdmvK8QPbNuBeCf34XS4syD4aWyRidwe3GtgT4xMb1x7hmvwsq2ojyqZnyKX4dSy3PZwLf5ZrR1ghR1FuY5R",
  "key8": "4zL4kC9vj1UAYfsGgfi8ETQZ9cwRy7iJZxMP3seDxstnZY5NKrhUCRgsHFhfHBv6LtN8bVkxDWp9VonGEn7nG3dU",
  "key9": "4uYfp4WnRioVxjSgYhWCCtYudTPLeNYagJYWvKWP3G7j5cRJs1jsanehpsrncEYc3WDQP9ePYcLiECTiU4k2eeSf",
  "key10": "4pEXcTCVM9zkAJBnFrYZrqa6YQC5AHQXHD2Sg68LuBmxxbvp1of6CaMicCgJSCEApNYju5jE22sSbuHSJvwk4nAP",
  "key11": "nw4mSKzoLpokjFU6wu34abCYmvsToZXWFCUzRmq9jpXGSuxJYjyRbwDHKJZ2EAH7wAsrjxuWkfJXG2LDNgb4eGR",
  "key12": "2GMguZXY7zhsMKdrypTn2u5acE5HVK6fNEDsZzSxPjKY3UfTyYshr1beADhvDzuiHkHC1fXcHZa77RgRjJUDQJwa",
  "key13": "QjHQ2okR92UUswF7YsFioAEyzEYyHiVzjimZw3jDJfHPPZZWWSmu6VCdFbHhf9mVXfYQcrk2pWrwq5enhZMCx6n",
  "key14": "3JsZanHNo4zu69Ub7w7dzeUhEKso1CeaQzq18yPjQPDu4rbWNWDPYUc2BBpZyuhdAFpGGjJ2mmqnJG1ZaXhwSYmz",
  "key15": "3DvuhGPMu6LJMtNAFjXfwsfC1x2xM4AyDhz8AYUFkiYBiXag3GsHMsRV2JRqsUya5tFJCS162v2xFv2dkwrk8GsG",
  "key16": "4NKVfrRUxBP8DfLYuL3RzNKjHY6cACNHiRBxtNX1YgJfKc42RmJ8KkB4iUD4LcN4yLULAPWugL7j2xFqLWRm7zJ8",
  "key17": "taCWjegZozHSRQYeLsSTH9ZN5dBMtryx5FjUPBdQCgbw5TYzQCHFT4zfJW1M5A3LQ2j7iw3SPiNZNWHBXeiHSi7",
  "key18": "591u4EcfKrbmt9YKpdnqbuBUinpVsw9jMP2SGxiuFALGBs8zUYrrxBeE9WvXzFxeiwz4enPftBBE3vrW1jtSuwFh",
  "key19": "3XBozAci41SPsw7bo9cHr8ZbXCb88xNQ1bW14SMxo7d1DC1265gSELEp9wD1Hfv8AfsGBbokJFgLoJF9nTxBrJr3",
  "key20": "2HFuSk3cP7xNygazsxCgwWv2bqT4PiakiUJqtKs3cbT2eZZPeyiZd8m1UKNbr3PkXLsqAFKjDpLgJZf8WmBdTcTW",
  "key21": "XerjtVT5sYePvVbhuXFR9wsZrYqyyD1Aoqhg3xKyG4zzoQDeCcpXLorGLfruGLiX4hB7eSPt5bih6iLiPmX9BkF",
  "key22": "JyKs3HXpFMe6pYZ9NcS22oHZheFdGqCyJ4j6aoV75KWHvqMbrAzrpXNnPTczjsHpCtyeyLivi7nYugSFRdX6e6b",
  "key23": "opcLFThcrrPxsGVYVCvLra3Rd93HSANYrNd7QYc7f7foMqTY7tF31JP78Mcya9fYajM4xGqK4bSF7cYF3nb3yst",
  "key24": "2F9iF5vKAZ5bR64oySwQcV8F6o2AXstDYXWUiYix9Gr3rsGu8kgF9j4rytxcq8AS3TPtFB7SHk8AJjy7fGNMHS8Q",
  "key25": "58qb3LH7NAt8sGtsyz8tDf5GSerpgevj2UnB6UYhiqSGppqQtXAQBzQHQ8kTvzuzvnyWJLzmLjXXXks3LPHQbHw",
  "key26": "52eNNBc3pEiUFzeEzPS8QZPyGE5ijwRs2UZvTbURANrDVVJCrEREQ7VgQ6bGNf9UqTZJJpKRknmMvSDfs5UAPb1U",
  "key27": "2PB5Zqb1x37TUvSne8nF3sSKVaB35X8CDSiXqaja4abzcezWwbKpRv18sBbQZgaxioUptr6iovSBZG8NdH5vdto",
  "key28": "5xyBYXkL1ck88zwL8Tghku8YfTmMXmRMB2oCcb26nJBXmcbmvgug2Tb9eexFm7ip3mLuFPpLPy5zTrqucSvwd4Je",
  "key29": "4p4xXhscrWcVHQwgaRRPL1ju2zjUVNqysCsvqSGdQaacPtjjozCnTsHfSrk5ZYr4JmKtvjnAyUGPYe5vZBtpwEN5",
  "key30": "e4X5a7pgJdSr8SmSvXuhdeU4CQYRA3Dmk8W4K7QCp7bzDPjs2Q1dTGWW1YKPY8dNJ5SoFLU4CwtVmodvsfs2qx5",
  "key31": "4KA6o58rApcNXCyFktDjFJJ6Tz5jpNyqPegKPbUQZpY3ahDBEzwdS21wzdpi9iVqYdo2pE6ZidrmQFUey5rLCnvT",
  "key32": "2MD2aprHHhXPtTXfpEqktwXpL3swGd9UbF3oXiYFV5nDRc9VyUTRET4dYHYvCPqHbYqaKDmf84nVcVU3ytMTrkLk",
  "key33": "2jLQChfm4gdQ3cJ2gDU9vyGPcWK8jf6vR83AJEunxFVVgC3NkPBSgJ8N7UUSiQYBDyLazKtTXDxh2fmWrgHGdEhB",
  "key34": "61aZeyx3b41kwFMyVyNVEddj1gGLwvRDsgABArk858PTGNRXD9HRWs42ZjBUHoECNr9NyvhTcufFPK3XPvoYSiQH",
  "key35": "Bmu1dQLywPztUZyCvu8NFengjSVTNQseQVRs3xKq8eWLCFSYf9mjmctZXpHB8niyznmbNbeSxS7STgQsVGYHnaZ",
  "key36": "dMtR1tJvcqLBp7ZvMDBHFwS9c5FgCrVmLsRv87uJaAZAGXvSkwzkjFLJKT73uUh1mPym7qASQRBQzTJL12fR6gN",
  "key37": "5FUgMCoiMBGisypxxvaGoVakGM94RwsDSaEk56wLbxjyhSmXSyD9FgNhx3Xi2SMciZfuU9mDqhTpy93vseFzxkYG",
  "key38": "56qxysGoE3MSVca584tyFSotuPGJ3TVrD185Gjye5uRqC5YjBYSDaXKx46tvN1LBqA8SUbqgMwFRxQxqLQ4361n",
  "key39": "3iHZFa2wFpB6xYjp1pYrrLHiqWjvv1Fv1YV2N6tVLasJtTiy37KyoDffMLT3nkrConduSscsPMtJfHXBinPx2DYi",
  "key40": "TraYxS68yCEe6SEBZm67VEH1S5mBXtoaYJkRwHDzh2b8HXvFoC15qg2EB1RGbvgVWkXowUB4MibiPmHnJYMURTq",
  "key41": "3jExPQyoJZMEmUbK52UuA4S3i51SCeanwEHSLCnAwrXpK7JVfnnWo7JiDaX6kcNbEkcVn6Srqsx9ZSd14Xrmyfjh",
  "key42": "3ENLd7gpR2cstaEyH5sgTgFCEvghvC5HaoXMvxqpEQiigmbc8ZrHdBAFXMD7VCotpuouvSvQSi3yw3HchJVe2XBq"
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
