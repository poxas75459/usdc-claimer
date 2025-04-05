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
    "2y92B4en36xUACh4BGYK1dGqQAR7QQaCVeed3utb2E7J8mCFeD3j3CACmsU5e3rs3oPo1ZDL2T1X2aCGAjhgkRZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HdUauF8xH3Bnma2UfiJHqRHQLn8XwPxPmPNzsynw6iXjoUiXZwhUTTrj6vt2DeiYQ5GEsCo4oGmdg1cpQXxUThz",
  "key1": "44NHFhp5CHnehAPS5fom8TfjVKEqTPY2qvXKDHknZsMxjJ6FV8sg3SvLdDM28ZEQwyBmvEWMGKdNuF85gmQmER1Y",
  "key2": "5fLMSFyH365HuhRgt9QuJdSW7CjbvVJvqyDEXzYaEKgtAXK1jTgHg9gt2LMSjU7Tmyu696QzLPenPCe9kgNFkzZs",
  "key3": "9GY4NeT6w1PWAWxoj47idLfWMEASPUBuHfq6E2HTGDchGMd1R84hhuCHQr3KhVB52DFBvR26RPx1Peb7UPpCsve",
  "key4": "2F6d6S1RkfnpxmXfRuMEqdETeW39fTHRj55LP7n6gvGj6TdKBU8dwbueibUwg3ivdyJF52Tqo8KTS6v8pesgzaCk",
  "key5": "55AjhK44wYuHiNMSvVVJmt85cp5XCNhUYQgdTDxkc5oTVVYtnxXWB2FAzGBsZNyBbCFrcpZr5mhMfUSwrBsfgjrN",
  "key6": "2n3J1gKEyj5rxdiSrCjvXT3rZVhPmwM1W3PpGYo96RHnNEqJrzGtFMhii2Ljj4aPRRftUsaZKhUeT9i9m9dEAFEZ",
  "key7": "2suszmmGfmakaMnTnt3bv5sq9YEdbeP2VNKH897nmPDE3J1AnqKvaDgZirHZuPhUxXFq4FxVs1Am7oaNvP5MQkD8",
  "key8": "3udsVeQfkvUAJu229SxbwzyJQ3pnHxF4itZ2eF2eUs5oGG31pjeQS5y3km9iajTTAryQkemzvDCqab8m59SHZk6q",
  "key9": "5Yxhm32zuSQpHsXfyjKxv8wAnNXeyWRdy2dKRXGZZsPY3UbrzodXHk9dkwPiiwtvstDf8cRVQkBJE7CyAkN1geRg",
  "key10": "39MWSSWk3o2woUnAwwXgsFAVgtQuVmrFCavgWRg3dtXadiqfZseV4yD3cuk9WsPp48me7c9fgSteeNNnjZiWcHWB",
  "key11": "BF8kxALRgsprDWJVGFyihMxVeTWokcCLoUAAmmEtEswcQCwSARtAaEeZ9xJDbk5UaLogX95SJRD29fJ369TeUmf",
  "key12": "52Tf36PBfw1MbuckJ2vb8BEacDDDKxzNAdtagtnFmzoo5oxsoyytUsJgeU7x2WddrVVjvjdXc2MpRz9APCtiYmX8",
  "key13": "4H5GK2HXLP6i6dwGLiTF5wf6kNsvztMY2A9qJcLNXrviTReMToKYE4znsgHbjQaYUJGKQ9rFJ3SQPgt4Wo4r9aRY",
  "key14": "dLBgo3a2sNtDb8DyJJ6gQqqMVM9q2QtqtvAipRwtfPZMgwkjfBzrggK8MKF7heqPP9MY4bwNq2AGhcPDTze2ZRF",
  "key15": "4FUjaDGNxYQemDYbWHV3kMmNaw2Qjr8QZZuC9XvSKFh73oSpPwispxVJJ36HFbWmp5SuAkFGa4XfLNzQgrTd2MjF",
  "key16": "fPz1fLxuFsuxhg6JNksUAQgRTBGPwQ41Cvi7SFSMamTqgaodBs1ksMo3awgquqyW42jrvUhZDaTC3DFGJ36Esqb",
  "key17": "ms3VBQjkw299JevgSxZPJuwPEHZksxg1WeYuQuJxt1pxPjgUTx3FVReeFZfHPcbxZTMXGdGPnm1jWvkY1qNeJTf",
  "key18": "j21DM6Q1E3CCiUQyMyNpLgnXYDeN4WRNsGgvrZ3fRDSzrTg33NSwZYxBmexTFAB15Uy6q44yuAMrp344DBLHCZB",
  "key19": "4HJ7q2uhTg6oPfaAMH6vqFD7RLeZPWZfr4yTh6YQ6YL5Jj4BMehgxerEPN73KF9UQg6cBMv71A4QpgkvSysa6BTs",
  "key20": "4rigUYtSGKXA16uEHyuHbPxsdxE4aEx3Uc2q6xhq1D1zC51b8PKvW89uRuoCN5yfroi7P43yGe8rd1W1WGxjdbCN",
  "key21": "4wk8odFwhhPGubuKn8d1odqTW1m7Qvkcbo2L5QsQ3ypkRB5wV1duoFvfgN34hag9BGTeZua9xutmEkhi2RtNskim",
  "key22": "4ven78t678F8BmHSQ8ENyyjCbTNgVP7UKHJofpvMKqTvVC4HCEtJBnrmNYPH6HADFSxxMPMuw6p9XFttLnYeFtYh",
  "key23": "Xo4redfZbxKD4UbiaEjA1qjtb45gEy8e14tWCfRitPS7vzmDqBE2mvD4Gre865FZZUJKzHcYDF3DikgbuewgQEF",
  "key24": "5L4bcTHKnxy2UK5D8LVscaxKMQdd9PfGRe17Xwh2aSQrSyAmJT44RzuNGfS1FvB1xkDsWqj6zuinKGawSpnhw8nE",
  "key25": "5EBX6PJ2gx1LrVWerGYSGAhucamUVT31fpmpo8bdYAVhL6NQk43wQQokZVKgR9YqWsy72cKgbhNjo6ugY52WBoWC",
  "key26": "4x7JsLYrKUCjk59snnNTpe71uFfVfMWK8UqnUX7YXZUeUL2AVkPPVPVR3S9Fh72AWR8718PTZ87VwoQttsiSN4ps",
  "key27": "2ihRenEoo7ALSkzH9erUEwxHpcVuEW3qATq3t4QMesq2DshzN6ndRP8zRBmkhz1thADWgyGXzBwRBjK2M5KKYEy",
  "key28": "5dPg8c6B4vxGs81KtTjkMuotGK3ricLiGhTCzV3a6oPnfHPUB7hVBD8PzkTNdHSzz6xAVHjQQYRBmABCCjA6igA9",
  "key29": "2oh7WUvreorPfuavyULXmCbDHd7D4q7Q7jBZKXgNhwdzMYJfu99cLUeSFoG6AhjHdXK1XNZgRV36T2hpxpteTnKC",
  "key30": "2AEMDVntA6zuDM8jAe9XUff6oFqe9akXzohAuGjLhKiQi8yeSDa8kBYQViZBrNmuwVZwwGkysXvauvhcBMdJcqDU",
  "key31": "4TVETwMGn5BihVFUKBu9ioE1yELnXVbwD3DBQESi37Tmf6mWzkVNi5xMEgbhvv835ZXZJhzfieiVSKo5C7RLZ65E",
  "key32": "3rZQFgwKdjkT2L8PXKxBTXyNnnZiSpUqSMTbVpGPDjTwct5x1ibs4itgy4FTpC4X9zsraLGm8Pg9BQNhQTxDQnBF",
  "key33": "24zBrNEwHJ8kQ3PAUvJnHQFMRNBPr9Wi6BuyQgc16FbjFBsH7oiTAKgZmhPUYL4mWLoSmVP8msP52WZKd7dFrkNU",
  "key34": "ik7FxCa12bC1V7BeBJAALfHZWzwpQcst1xkmTdsiVhNprVF1fkiyHJxVwH61xTqNZ5uMvWr8VFJ4zzp4gu4kiDm",
  "key35": "4ZQV2uWXWx8gscURwhmutjWfpY5kkeexvDfxAU4TKXg1VMkgbtkwMER2M9ThAYiFqPVgft2CG7bKRZDR2FEX7jsi",
  "key36": "2aNVYGSyeAUxGddgT8VUaSktrxeAC2eNv15LUvf2LcmsGnMgyqYRs551Z8WpPdKYomzZrkeKJ4ZLAKkZoCkWvtN6",
  "key37": "46kQUduu9D7FqUaHfcYokfz8xWFjpTc631m3ETyAMm13Q8rZB78L31cA4iAUUpwKLyhAfhcqNAfKqxwWUgcssh5s",
  "key38": "3WED6kpDnBpZ2aWcJB8No6bBMxq3AFoVEcz4nvytKJjrCXtNTuS2iyPHsSaZCGvGfWCpLZC2WshEznEzNNNf6SGz",
  "key39": "4KurPXrvueRTXmPmE25ijCAdT2rXHs6zfQqWR3Ys5LAZfvNvfScrADnnhUUevT2QyXEuGycwK4gYkj9SridKE8Tt",
  "key40": "3xgT8NSE99jsQv4n1H69eZ4ktDfNnfmqEsbD7AVNsoV2Yshv97sehQWCpWyvnhHm9JTi2gx9TKJGbR1tjY3GpFHL",
  "key41": "4Da8frYA518NqTVmT2Agq3uinkQhHTMDKt28ziP3rX4y412EMND7tX1pAQdFoei1QLHpH2CqH5NRyiYjwLyPxyYr",
  "key42": "2ASomvpQN6TxqgAKuCK1JZwyQjDSUcy5sM7pm5fx98RGMJAzfv52jZ5YJWs9HMAK2WUcNYt3T9dxVJcQaCFyWTDz",
  "key43": "oEQzF6XMPatUTmciFUdzcdQHzwfBcchu9SXjrMbbaM5B4cy4JKMDqxE4tbWEHBH51BVY1BADrVWPDxvzy6fnSVu",
  "key44": "2dRdZty4tExkK8Bvf5Ej82XUvDmx3LzhKFTrajCr27qXu46kDTVxr12MVaJdgA5FzD1ucW8YoxAUVS7NaGPVutvw",
  "key45": "1m5RMMiFpBVBX9NAT4o21CCQQopCgemWMqqRnpw4Kd1eKbHr3v5DhYc2UFtTcP7KfrC69fDeCti4VqFLfQutuUi",
  "key46": "4ymzdUd5Auu2YvMtdPb3BfPjVsPTPSbCmxZYni4NQBDhmh8qFE97e3zz4QiEw88Cf2vH4cctx2XDjgRMnQv9b42",
  "key47": "4DHUKLpW4aHy6WcGGWEs7A4X13WuRwb4V2oNDq9y1y8fBds69y4UMEAgwUoHq43rtMifnFQng7UYdJCqcTr8S9FK",
  "key48": "259Mk9eJqnsh3zSYRtxWyyzGjt5kr73PpcURDgTJ7HZd6ivtSytfh8PJwSc5rKeYJoMYNhGjDjDaoiQg5NLr2hgH",
  "key49": "5MVBwyKsncyqwmtg1bMoDgaTYg5BZKNcZ1wqJSRUmx6YSTon1XPAp2WzpJGn6DTgiGyHx4JCNoumxGCyhFLaCT69"
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
