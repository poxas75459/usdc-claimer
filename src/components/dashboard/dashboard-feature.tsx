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
    "2SnUMMiv8Zc7T9Lkt9GYr21Z7ysFff2qYJjcbrJpdxniR95FCGgqL6Ajmad6E6XkGABH7hKf5gEX8L79izdCMRTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DeYn268fPvYc4EChybk3pQcRjHxa24rnLwG1Ef3cBPPgeRraxQS9LEiYHuscLHkRSdjTVLQGHbjjbjAbunKH5TJ",
  "key1": "3ar8oH8C6uDizBpgMsaChC24JmQNeWoMgyxcqhfiwVYKbD1oo1941rzVnLAoWC31WUHUKhUHLcFfCUgNBQ9GjkjZ",
  "key2": "2v4hNyaeYxz79CfPR6eE2cvcZQwDNDj1hViyCuHTx8RBLe9VVRQPRHSFAoQZQQLRnAGuhdW4jt37QWAgs4fBGykS",
  "key3": "p9fZkqGY2m9pbHuGNGzgLJt5sz6LrYsbDovUiFL18zi7fk9KHnEL3bnBPEUYbUiPi27TpeCdhRzwvprbKGnUnAf",
  "key4": "5rpP13kTpyDry5PajVA2fu5rhcBkgc3YX6ZGR5vvf5tb4UfPVuj9sHKiNtecNZxMCVPYSPrJNnTTyY1spQkbQxrq",
  "key5": "9YfQZSgykbfCNj9VwXQKPKD7e2oxUx3nUAfuw1nnczivHoTftPJHPYyoTjmVuz4D8qoy2AkrTFhyzW58aXyZigo",
  "key6": "GN1uz3JiM34kxbksGtM9CqdfmedVNSLXaqcncXFgrUXdcKWxmsLcDnovUCUD16d4kyeT1ocToQbiutD4TmdWTK2",
  "key7": "4qk7fs4HP1BFLxmT26T35jg7Kvwucj39H5vJTp4nYa2HMcXs2iEZbwyLseujKpdUGha6czwf9ibEuUebpNaGm3DZ",
  "key8": "2wS687AS4CK4sGfYxjtXSJiWP7G7DLPdUApUQUc6JCTbw9fhNgKqf2ZGoJznRgkuoUevUMC4bn2veNp1bxU6Fq1X",
  "key9": "gsCxskQWcA1kD1jqyzLBzUAoEz8tBjETxiGUZ8SkwqgbQexj8WB8Y2p7FhitMJX3PXAAajGtMy4mqF6oDjCvEbW",
  "key10": "2d2NhQXoU36fmj8xADni1RJLNtkSwgQSwT5649tgEAQfzF4oMWonVowL2cruN8hNKRMUsnmP2QsVJiqLX8LkfVow",
  "key11": "2RJkD9Ak4wPYJ2L56MQWKUFHXWtCN48HHBVp1XkjLEgQhn32bkugTKEW1JRGws4hu5KGtAv1qUqa5E3K2n5WgaZA",
  "key12": "HsvsiyK8z7nbkb9DvpeynYzb93CG4VQuGP5tkyQ8F3cMVD1wecEcqikd5drn2XcFBLG77bQ2dZZVfBXyEg1Hzr5",
  "key13": "3N2KxG8422KwFoH1f131x7RwnivzdkGAFitH4hvV554Jd5pNG6GKnmTtZ46DW5m2G8rkQTJNrgZxKBXw6GWrWmky",
  "key14": "2iScPaZvSivbUvLs4smfmfSfmBDmvLJuxixxSk4mCpPgpbgvdX2SoyXeKtcpc5dQkSMFaxyaUwN8FKxSdBWyp1CL",
  "key15": "31YXoLgafRKfH7wDU4AfDTkuDWB8MvZzLmsoZws52bdpi6Prf5T1oVG5p8URpnvqqtHvSY9pBSycuQ5wSQiY1Sbw",
  "key16": "5fjmnfY5Ge6BRAbwXHa9M9zFfgR13L1QRK4zHehMm9nB9nRrq12TfiTTSRD2M55U2WEAh82ruJkt9mrLXpmUbqUA",
  "key17": "pcFGMgU8Y3RQ3awNhEWQryV8uZ2cuEPD3MX1sqKCM3fisamgxuDdEVWThLtuabVQcv78tCdqhCQz4AMkN6Sq62E",
  "key18": "4dVY8tQzVC9XFcetZZjJvCRiik13dhQnt1NdFVEMov6WHm8Zp4Q9aJQBThb8eY4VB6iFEZn1TxV9ifAeEzecHVWX",
  "key19": "52tAJ7P3pdYy64veYj1cHBd3TSGEBcFDEwixt6muVxTmT2Qw1oa7N8HxyFs5NUafp4mAF5NXX2VeUrvZCUjWK1K3",
  "key20": "3h3LzAn8kgxwCTWCkoo6HK864tCQeYCx8bAhV515XEx1ZrKA3cmdbJ91TB9Q57fGE9DicZDbXG7pvpLQB8hVSXsC",
  "key21": "3izWA8XspozeD7KvL7HrdsEDgb2HJmtd357YnoBXPCXZ85jXegxi1LwPuGT2z2Z2L1LvaZvDp1ugkkf75Dz4UXBs",
  "key22": "4R7G8LidLZKNSTvpBtmCPW1PZvJNAPsBycgfgxGujUhLdYcuJnNecP9Got3tKYAAGdm35gUhoBBgLjDFkGBzbrbv",
  "key23": "4yqzyfUY5aggWSsjzgPihoBdQmm9xP37sDJP8xMSnw27B47VDCJC4AfwgFH48YV5SFDGWzSJ4CB2xqz9nbGPDDgf",
  "key24": "3dXnpDB2H3abXbHywm5kjJK2BsZk41Q6mGUdARGxN1cAd6RBB8KnGY5ueys4s7ZETymHbhicuqAzK6QTw8dPNEio",
  "key25": "3GiB1rwrWneteozLxbzVrebbSB4qf7c4ed4PYteW9QLivPnMTKjv8t4XzXek6jAs2TkgincAWRpSd3KYVVxd5bR8",
  "key26": "kWVPXCXxsS6LzqGRxGDgMTkv3gbbgByMv67F1fUDrXjFJXnMASg9GXfCWD8bRsBCWrDbpAdx8pGQkN38HnfKYfg",
  "key27": "4qFUrBBQGh9Mdn6qbW4dGtF87CU1fEurSg36gMCgkfKFCXniujLXtwhPUjStwvMJHnPKJnELwLj4z8PnpSE4et1f",
  "key28": "4iXEJwnNLyrXz8wdpWxxRrTMD78fmqKRD353axzGQohf7gw98vyfrytBBctskH1ZjeW9M1gcPQN66NVzzDNFM7Xz",
  "key29": "rzeZCKnUh2GreLUk5nAwxFPbVDgB6zAt1x4yac2nW4ZgZ6YDUTdcxLgy8JGXWsBb94xaS93kXWTYKAZXcuBC4TQ",
  "key30": "37P8vwqs5YSAphj6JC3CwB99QYQWn5q5ui6wW9ch4uNKoaFKG2rdGDtXbvNzZ5bXkNoctBQfzZ54ieZeBwKPcC8c",
  "key31": "4XCTrD8LDM8GrYMrvGLKujw6Eqkbb8aYzKijejQkPdmefGWsMJjeyWBGr9VESphGQvZ6XZPPKU3qCcepkxzHL1HS",
  "key32": "3xDB3UH8Ye6pfpxCsuWaKVq5Lz6FDkznjMDXyWHXFPAvwq61VNbkK9s4SeqqSREe92cAGMknQzkiFVg3PVixDSm9",
  "key33": "5h1ed5k1fPcfV4L3vfkeGCySwSdDuZzBFmNikMJ7y3zYXPtfWxCsardrUQ7ANRNG6d7CUbseAQug9Q8KTSpjE5QQ",
  "key34": "HpFigk2e9pRackM6HubwHBeWFSbDUyescnN7UtEM37egEuawX6Da85AN3itDALaKD798AEKa7ShBBN3cmgxs6Lk",
  "key35": "5CPJoFGE89nAswouovArVqyTh5Vs1sWb8vDyXVXhepVebzQphHMJKJmTg8Egy38JqZSkQrdMS6ZvdjA8Ktr2U53Q",
  "key36": "2GnaH2Dpz2i6Wzpshrg1APNRLvceSV2WEmTcvfHeQ95FzpmcCvTSQmGT69AkN3SoBpYKQZyAYuhNsXFdoctrUeu6",
  "key37": "3FzoGdqrxQBWqSKWST94hRrBVHWg9SsVw3nGWQVi84uzxpTzprabLhVxKD2vbkRH1jtP5AN9y5oRX7RXDMJpQNig",
  "key38": "3PeEqEesSj3XBRNvvGwzfBEEw8E1FwKxdSKLmDirqWCQGoqaXspH5mX2HTxn8w4XCPTpyDakanJTcKaUjs8A7gtA",
  "key39": "3yWVVvRHkzhYepdVhkhqVA5WkH5Xepo5TEuv8covEpesNiJvxrhn4mq9SQJ3NNUSoxcjmcro8Yq2epbbqMqBbY4a",
  "key40": "b8jhvDKM6RFwWMpvmmwfvGRcZKiTh8w5t2KprpaxjqfZgfzUoa8V3b1GSq63iDJubEUXkZcC3JkpGwUhCDt8nYJ",
  "key41": "5urKEtydSHPYCrS5zs4Z38dKWXWFXU2VP5rC64yp16pkkwHKcUTMM3KpTbohuNZx3H1WrdQtg7Z6rn2MLEe9MK1C",
  "key42": "s74MEGPcJ9GhnZXgsZ9FL6CUQyFUmQVKLovgbuTuEJwyim3qdfwV6BQWKCAmdnxDiRxJRvdJX4HQ7hEA2bPAP8m",
  "key43": "pvdyRX8pLzhobGqHqKCcVq8rsMHUkkZrm2XY2eFH43SPygwDTuavG5pJoAErn7qR6AQ4XgZNYdRR1YCfFWYXXSS",
  "key44": "27aRnHPuz8XGvu4ESX84iP4tfCKV1s9vJwqa97FnoLPvLHGkCbESiaXzbs5XuW5ptULiqpLHER7KVojBtykwx4D5",
  "key45": "3gtfcvuBSBsKDa2eTkUhz9XCwXJ6rtwQC1Hp3aHN9jh676vMBMrPgQ8119tqvt2P9FUmWssNTCyEBaG1UnNsdr4K",
  "key46": "2TfyiiTU6UpK4uc9PJ2rUffxWcJHM6QUBW2BDSvfeo3HfHDMaxa3EAKWRuQHa2MXtxAPb4g5WYrvNb4Z6revxFgt",
  "key47": "5kQ2rBgFRHD9JRuhzFHxRYCeWnUCsVQgaM6ees6YUp41A8HW3X9aAekLGpDaW92hEiEZoKcnp43kFHHHBxkV65j",
  "key48": "nuhedsoT9uTxFcny1JRyFgJuBHzakHEDDxHy21NWaXMDGWXuzHkDnWLgSPERXcY7pRp2wo5Hp4SujrUo6sK1SuV",
  "key49": "2MfJQCLxN4N6BToSwGtwEGMrLSBULsGUKtmcS8GVB1DWzugh8X8FXr5uY5Bm1K6RkoUrpd2QcJyVUhPVaLZQXbdH"
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
