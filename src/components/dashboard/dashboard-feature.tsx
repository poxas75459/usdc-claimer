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
    "A6aEMknnJGeNrUPMdfq5d6uCePkF4kfjfo53mDW8FdwRubMsQRkgSXgFxFxmFGn9EfFUVss7fqkswDgpS4DmVyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zo6Muu2Xu8aSvbHMwPSMZeKnhfLB92zyFUhrCemxtzsXxormjiGGqUGJmWz2GsFPeutLx3UmBREEMswPpk2Kq5h",
  "key1": "5t8LrjJFWve6cho9x425tLKnYjXvVK18CR9iVfAoS8yffPnCxKSpyuLXZkaywimJuDZV4LagNR4uCy5fSkHteSNm",
  "key2": "3NvpbHkiQUTLkVKNuCEosdHkGBMmgB9ieA771XYnVCyd8xzpWHg2c6C4cBqg3Paz7ibSW7Kgoib5hJjikUWpRHU4",
  "key3": "5B54MbSMczVKbvXTXkX9vsxmNDdC88ZvPxkTmQVeLTc5j2xvb1P2U782GEZ3HjqcBsAPCzFRizv5ZSVFvxM2gscf",
  "key4": "2RUUCAvvtB7TZXBtzeNgi22sUXbbPev2thSQR6QGbW6jP3u7wQYfrdtRqxXeJ7ozGsi3yVGS1ByRX4tbpUKmSVhJ",
  "key5": "2BdZQNaErURvXEu7dZ8YNzsUa7pNfuCyPuLUKcYupcqHvtC32eigoiAJ9wnKXA4f38GjoCmWsj4fLiK1cLawqwmb",
  "key6": "2LjKsE5vyV94WJGUrHk4uSgnC43h9nukdjt2MXo3DkVnvx7h7yYGkEeThSKBsa6neZoboqstJbHdAVDf8S178jWk",
  "key7": "3Sh1ng95kt5ti2qYvUw6X8HP6dFkGK9aHypDFx2et6JEDKLeoHpAGheoz8bK1Q95VeNSA9NuSyW3AdQEUrthdDWU",
  "key8": "3PBDS3SX9bihgUdodLzM7gQo6wqQ23a3Xftq224TmZCxspHL3RsMJ19Rzyw315yvdReLAYJH8wkKqm8wSXfZukEH",
  "key9": "JxGa4auN3AsmiNuYZxupF3iEbPmAAjWqFCaixFa8Ko4T97Foj4euRo9QYGFbZWTnnn44RgX97qbvf4nLpiPQMEE",
  "key10": "27Kr1Q9Qdn3154FRCEsfMsPi4ETW4cqV2BzondcmjS31ctEnWGYpuUdLUye42E9tL6kRGFKP57n43Rx595ecyTEt",
  "key11": "3v5VLM3w3hXuene9TiUTpKoxY7FdcbnUhKNza3naMg5PsRkNXFKLqAGpmhvKTc1vKbz5moHmTEYcDALkW7H45muF",
  "key12": "64MmsET6ZJMbvAF5qkgkC52P7STJdeS8wZUzVeDDJUFstizLhtTwmmxZZ3iNaDnCvz1iHn5vcYosy6C64RJyH7dV",
  "key13": "7rNrSwrAA1JjfB4EvtHSD8WinMFZyV7U2SGw9HMJ9Ho73KmVJoc1xMfSr8XgUDCCExqtiskgXRWfGCr6Mz144Wm",
  "key14": "2BfNbhXBSNNBkdSnbYn1t24vwAf6ntcmxLFUgj2RCsNMuvWGoC8LPfBwRUghP1iCFnWNe6rs8zXDsCMWeE5dSydV",
  "key15": "b1VX1idaDvGbC9t3DtHirqLZhR6tpWXERYqSxVFd7pvypLMM4rx5HZTCvthYTuu1k2kC52Cq3mfGkeTeDx6tH9U",
  "key16": "62cGD336ZFq1y6SyU7uVfvdisGhFEm2NtisS8vLYyHtKiMjHtcCrLKp6RTqgt4x3zofSR3ppx39877JGxymEBneM",
  "key17": "2oK33UfE6Fw5WqL656AAEzW3iF2pxC7jyBYfLgquPCzciAsA1QFSp3oS5Hx54tau3WWWabNdjufpJmZByrKCxWVh",
  "key18": "5PwXLA6mG3XeT2UXgHzRu8YoU2LzZ1w4H3oJqtmBVbcPyb1wn2Tm7aiMVo3xGeAdLFFybWmbM2WjotMvjbNSQMkp",
  "key19": "5z6UFzusykGt89dQfHwoNX9ENtNdmJezLQL6zsNeZ177UEdstwnb4hPKYNxW2dK6yep3W97wVsUaCbrFt87HbuKN",
  "key20": "Xfck5Lw4Wf5A2bkT1dfzgDoxKYe8Dfx64xUecpNFzwYnozuAniJYwzeJskxx9eey5SZtawodqEfjeaLEmTYTi8T",
  "key21": "EMfieasfdG3S68UeiyV6Xc5VDQBan8bia14rDmYSgzRz99AnfeYWfHvSrbZdq1Bxrizp6PJG1RjG9spWQg35xRh",
  "key22": "5b2zxFN5fzCNS8GjLotRQLxZ9i7ZPWZoqKg3d8zrekhVPEYqC5nY2ADXtny9Pc7gn1WWPrFbn6Bgu3Mi1dWGKJ1b",
  "key23": "2VhAwKSgn2QJmasoUfNH9XJX2Sm6XRLfD9SKi653C25ndRAXN69Z2A8AHzzWGvSkEt5eVsJtz4ZTCqRCWDdfgTAr",
  "key24": "3Gca4KUhjsh2VShnmvMvyxnx3h4Mt4Tewzo2NPc3dZUdaKwkemGNVpn3Ze3jc8aBnefvKNfFvsYsAbwNAXUoQNWs",
  "key25": "61EqTq9f3uGXTAtSPUvjGHcD5NEdbMopZRCWBMLhXUoejUNFtjPMGMf8kLnLBnhCbRmM4KyrgRToketUe4uZLxFD",
  "key26": "2BqyMNHcsHRz7jwrw3NooX3eC2S3Q8Asi4KVp17pa4K2j8tMUyHuY71bnobd6inSdZca2rmmXKLmizUw2S5Jc5ea",
  "key27": "2YEyLcdZo5k4rBMNduYxRmSshVwhshihJ4vAk2X83LUezvYLtTkjJwn8qw7RQyrGQTrYFzNN97gTAjGPEcXutKa4",
  "key28": "3qVyhGyqMPn8ZUuiFuW7Kf3PFoKxYuEwff7uhTZC4dChTiPcHWwwbcnPUK2k8f9ETYBQNtmNcQcy6ScSY7E9ugAe",
  "key29": "2zrHWKoWybBP7GLNh6TWzdxrhdmc11LF5tdmABp2Dtxo9Zix9AvAgnQGCc7XY8rSG9m4hydTu6XAR5REKShJj96s",
  "key30": "YAL8w7V7vJJsqTvmdy7gmJ5X4E2Wk4Soasfpz8FtQEAuoP4gXUmp3gZ22anmPBmGWX5tixwVfdux2uCywkNuhjr",
  "key31": "fyWG5HBcNVzDJmYr4tKqu68FkHqLnufVggT4rY4M8bHJ7Xo2n2v1pVuJPtfJqmtpRDazojN87iEbGBzvFDec8VF",
  "key32": "361rvSyZTUi1Ma4gChdXZn7ZaHHFwKY6PF2G12t895nkL4qSSHydzUWqyw1oJ2WUNhjrNnHt68JFbY5QaoDB3MnB",
  "key33": "2nD7ueacb7fQ4xDwvEqxVY9QS6ZWUdYH1NEKv9RdDonQewszUHXnAfM3qXcF1ruSegjJPtsnHvLwySxVgtoMa6LG",
  "key34": "3nyXQSrWPTWwTLwFxM9G56pFGtkQZTJp6r5ukoLqo9ftigK1s8fWUwX4Q75CLyusp9wph8dEER7UPv2HDZboX46E",
  "key35": "AgvSTtxK62Eo4PTGEo1YVru7JxYNJ8kGcQiS9bkX8jPouaM1TLksVVsxHak2py3DBfpPGjzTFV2ktRxPkvXYpZM",
  "key36": "PBVLi3C25zGeiCtYETH9MfYumxEcRniM4YXveVN5nhDTihEDGuDxoVh24adiySrFwK5TxryyYWu4Hz8dk9DDYdD",
  "key37": "mABdRWdZazj8We8EvWKFMcr7fsiN4LVho5FXUems1eetM2pkoLyGDGPrYrKUz7EdkMrL53fdLMmTYimAWL8Uqwe",
  "key38": "656iE6TK7Tc9tg8YuniXjDNYpNNCwiP1GZPxM5g5aGF3N4neJr1DFqtYRcpq5Fnr282eARyJPASXNZomVxMBLAYK",
  "key39": "4UXvsMVGDAfqsGjDD6vEx7D7pTqexq92vL1JpWNRc2aHTXgNnTS7HBHvbt92QTtWh9KWX3hP4h7FBpbUiwewvykk",
  "key40": "3fqr6XbZ1XQK62fAynPbkg4wyBd8eLZWzFWaNoBbKVnJvfFq9sZnFckod7D2YQLtD234Lxwzt1J7JfZCTdEkBf3T"
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
