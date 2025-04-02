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
    "49fYmmdn9NkyyMbTcZWoEXJr6btfo7gg1E1rH9M4AWxuL1b5T7YdZut3G5QGJe1r7UtYf4eX1J4iUp7mt1WdQdC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FEAFABNd1sYNp5rss2DjaYkWvs8DMQo1PqDb3Cwm7uhPtJf4ca69n7qg9Z3FpVrCZLE4MmBvgKTHD75cNtXoAAY",
  "key1": "3JBzSzv8nJS7VCm1JArq6nJkF3hYzV2JRfKNLdYY5HSso8UMbQ2YjJkYwgexoKpFhNCozR8zdBQfuAQTRQUf9xuZ",
  "key2": "2UW39L5uKHJFURitY7kYTPcmJ2MkpobDyviDh1vE3hwaDwYm5KTChu3vku8tpc1mTyqXut2ZTJA627VeEVzAPijL",
  "key3": "46eEQXQzwo7rmWgA25L8SW1b7Ssg63Jv2T8JzSHn9eb4oWfCqkFg28g4HCn2fS9kRnc3jkpxQXa5tkUr1Q41KCob",
  "key4": "5HRDJyQC3gm3kJsu93rJUYU7RAu4GNqH3b2gnrs1VzRwHVnfvhQjEqLhfyWoeHwcWiXQnGsk9hGuXtryAdNbgAY7",
  "key5": "5AYiQEAtyER6bni3TuDPSL3nqyKxm8utDbCR99rc31Q3zZqD1Ko9oQPfGGmtYbY5rDMfspyh6dEmKA2JZ8aCNhLX",
  "key6": "FynhvdaY8gfYFpFHy2h1RKtweskWhxqsz9ZadAQRxrzoZxwtzKqBfNvQ5x7GTg85xYkDip4eNbRxfcSV7AXj3iM",
  "key7": "4qS2RcVhZ4qMZEXdquhGrCx9rJNWP8PMXcvMa5qbwgra8m9tazwXw2LjFMVycqnQ2dVsY72VWTQLs8VNYbB8jcyT",
  "key8": "4zfT3bWsyg1ogbxZVx9d6mu4xeqvefmR3DqHvHvjrKzF7EKJGGJ4U3V3nCjyvTPprBEkcD1cQ1obpGcbh4JhzEas",
  "key9": "4PY6icZiGSmMSmCxogUGg19pcvQevssCzPsWBGCFSGkvzsBtThsR5wsBzCUbodUDLsoHAi2qPw8EJ9L2kKF6cdFm",
  "key10": "3bnmxfe71fXSU1bHoYqPZRVf91wmLV4ppnyNP78zJq3cTWf1SzHFg23x7hy2HgRco3CaTwutbySNng9Vp742mB5E",
  "key11": "8NEvW6ovxWz1MU3ru2spH7JijwW2eMso6mcPvMrqrSqkKtMGFa94vYjLD4uH7BSwMaF4ssMWn5WmVELLSz7ubQB",
  "key12": "k8DAZnvRK7R82G34kjvQDRDqBPVQDmPwFnu9YM7ykKzd66thJ5TAHisNUXzggsEuQWDmzbq4C7cubsuTT71a9Xs",
  "key13": "5p6iNmfU2xr3PEKNhfhRxsxotHmfv1AEuak48oTpJGPF26j8MpiYgiukYRCjAaFhwJU7yNEpQHqpTjPEiQxc6K9t",
  "key14": "52QzXeRBQoFNmF1WFuMrs86aYo1tRDd9Rx98hi7rgh8D8oxU8jsF63RbM3iKivicBL3y9DzMf13SsvUBQT252irL",
  "key15": "sW9cY88S9xRrY2Q7tArMjVmGhsWXdgBnUPCd9ExVnv84fARx5n4XSWX3jjDbowQiK2cH8CNysMC2XqBQE8WBoh9",
  "key16": "2DArFiLTHzpUArJaWGn3YahesePYqjRzoCHXFiFZKHz1JtAtzrtrBWiPN8ihm1rQVRMQGdnqQaCqXDgKpkLHPgmX",
  "key17": "CKmLXqhokju2HB7TSYUWo67rDpus1coGoMpdcHfLUUva3rcm5S9CHhasTwrv8DtTKMnSBYFaSDRTLtJ2pZS1rAd",
  "key18": "2hwYh4XkbTQmL5whvD2mUg5hGz33n6sLjXg9yC8vWnQgxB3CzcSRJjtW4offfaJn8G4UyGdgtJ6pXMU3GdmJzL1L",
  "key19": "32sv5Yx4Aep1f5AHucbD4LgkJxk7NvmoC9MiDuFvJCFQLXvJbnPvsta96dyAtWZpgNqWgjvt7RcBG6P3zhzHtCn3",
  "key20": "49SvUctWxy8YnYVc3V7Mw5ZCMKSzngrD3uweBamP7bVydSkwswxQmnREc4RoKFJ1haetexDY4JtTvYc1x3aeuc6k",
  "key21": "9519paUjWCUj5RhJ7Nd3j74siP3KMc31yttD8LYbPg3PG7L3NvXuH4v1GDZGHnEucyXSyRJaUpfWf95YGVPnFxx",
  "key22": "56RVYYWD35WScabDQQ5g8ng3VRLECJMBUQrpcyNAuai9nq34mB3jtgtEgrCQygTyfnFqZRxhFZtET2ehdv7XZoqL",
  "key23": "5pRwYHvFEg94XYqc2YigUSaafwFPDWN4enfAbj1ZmauEAJ5vzZ1odDLxtkgPPmFnmyfGNGTQrBC4EPn8x5EKTY95",
  "key24": "5V4ygGz7HRPEuEPSwat7wVVGhf9MGKECeYoBWsuehCx92MbGVwnpPmLMKLzKidQedgej8zZqG1yLY6dTtFvtnhtM",
  "key25": "2b7ouzERwhJ3k5jgiJjCYPjgUdM6U8mSseUa7N9MHvHWhtauoaPNePKkvXF6fZjsREGw9a3ovZna1HuUKX25KFZh",
  "key26": "5uV4GkFAX2Pps7gWhQoHd2eyHTsM7Bsg56yepSL9fB9XrBGwrpCRXMRd9SkEdKv4UktfLpe3V7bTiikiJrW4ciW7",
  "key27": "4qLfTAPqXHSCJ4ucWom2i7u2TcarPwYADCSfjT2SCgLoXZxx9UNLSaXAt1ctMkqp4G1YUPMWd7AYXD7gstJ1TJ4F",
  "key28": "4PeQYMuuQyZP2Jo6iPvjfMMpwHZGBCdQBpqN6EWkYMeDrHk9PvRwtjyy7wEUQjjwHyQATUaLcnbkuy4AWa7g6djW",
  "key29": "3zkV59ZGoNRv1S2hdhygtbGywFk3zSBjhZEParrjX5MqCuZmN3P1LNcKFPYipv9kL2xkY9WqV7uH29Ud42JREt3E",
  "key30": "5bq1k3hW2YniYN25bfyzeLgic5nNSc2rwbyr2rgPuccCaRLmaajBff2c2E1qEecdBaE9yAmMZVpZhHzSNRL3RAo6",
  "key31": "2i5NADUycgMxhrJJrXJMVCeWEYNqLya8KPzhwRFyik3EdvEAg6cyBXjnjcTsiXg2XtDjZMfLBhJg3miczHcanYcx",
  "key32": "5RXJB9XUewvVKFB8oN2TUvc8XPZFSiwUiWUPjFtZCENV71wzy42zn4h3D2YiBA5kBSx3WEKESCXatMcS2v4cQw1o",
  "key33": "27N5Wbnq1yniWuj8gwhpLD4heqh7dHXVkBjsUD66cyqsVeo4W8TfEEMULC2xHfkMS7ZLRxqi92PVYaUdhjAY8Ugm",
  "key34": "3BL2JHJKmdY5CsTSjCfgfq9pVsRcGszARfvWorVCohAo1o37yRQPy1Z5TsoEgXSNio3ujvG5e9gC7CedhbUyPmiT",
  "key35": "5KBbAszVDGYSPAorkzv3Yse22NdHkUgLygeFLg7mtRHtcHZUHN4bjUSAqrRU1hYxCM6W8yQF3kyvtwkBTCAyJePy",
  "key36": "5cHKFPhkYYDvXZ6i6YzSei8dfLuAGof1fNBzEbwpaKmePRCH45uDLE7jaRRAAXnKSDgBaJrxtaQMSXHDNVY8opdx",
  "key37": "gvYxwxnVbyJ5Pk2jS9uFhHLKDbg2ofY6ovaWh96hdpT2wG6YodGuGEZU3RjH8h1F1iugUPwwyNr1CKs7HEiFRwN",
  "key38": "5NZnTuweVaejkfUQRNuNftVDbWtZmmzHBstCYe9fhi6iZg8KU827aD4EgFpuTbCWW8hzRTaBF99XMPesnxGy5MT6",
  "key39": "4rv2ju2hn4GyUGdEHDNU9V8WJq8VCMJdr4xVooLCcMGMscXpeanVYRRBAcMsZAdLEJLv7cZfER9omMpxS8DNvupj",
  "key40": "2oJjN25FJiiRgroE35jFJri2u6urkHTkYRQWN2hEuzTkEzR4FXjgS1bfCWPMZTxjNzPkGGUWKvCJaeC3bxEQ6kYY",
  "key41": "5igpibNEpdurycfekhYockN9ELN5CuyEDfzBzTa8cNFkEHZNege4qbck4K7hYULypNJVGCGoSt3yPG6ha6uhLeyF",
  "key42": "27FywcXPLJ3SsjGWV7wq3SweCDVJne8Ma4Cty7bxHFt6CwfAotZ7KhbEgXG3cqnNmW2HXLwyFfuoVjhz1Aw9hMUV",
  "key43": "4hoHAnPBKXixr6ZQyd1S8E1QbMRpzyhpZaKP2EmjWoi24PFnqMwBhtLX6qsprHkg7AcwzRQGr8CTef54Jub9W7f8",
  "key44": "3ScqbpVh5DTwp8n96YHSgB4oGtzL4BQFU6DqUrzvfmrVvKgVM5SvwCsuDPU1WR5rRC1XbjB3X5F7Czyyc3cFA63d",
  "key45": "3pRmJGXXpF3sHVgsec8xgVw39oyWLjDY9Kjkxok4LmCHYcjNhzc5tMEJCuHwJ63ZL6xYb2FEoVKstEhWNSy4YSDP",
  "key46": "M5Ex2J3RvZgUtCoYrPigepjBzquVxYWBt6NuCKQRuMwTUrijX3JFUapHxMg4iV9NhkikuPztjR7rqwg4NpHEMG1",
  "key47": "S1oipJeWkCzdWqKazthML7CQ2v7ystpp8ZjN5ik8dVp3jKFs5fiWqjJnwDCUT6RFsUQrLjkXQzUgQ4MWbkQNroV",
  "key48": "5E2DFCWGP5Aag7ugzhAj9nPdkRNjDX3x7GVzK2iqfy83n1sb8tWb5qKPTe7wLChJbGPEg1UGjub1NBb6XnUCHytA",
  "key49": "Y9yqyPLtRVEBPke9sixMfY5XBMDaGXRSafbvqBRWv3yaULJkXd4FdjSshD4FV8dXrworTWXfUTNZkWWUbpJAS12"
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
