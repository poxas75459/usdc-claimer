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
    "122fMmuEuaeEpN9tBEtpg3S4R79ifbgJ9tRSqbygyTMSG6y36VPyEKuiCSpcNJDwjf16gkWoa3ZTvFD7TLQpi6Sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "553QApJRBenrDKERHoVeshvjjEYm2AbGpQyKhMbs8D1q1w37i1y9mcrQ1HuJFbiPJVm15MFyjsLw9PiNF4udHbwx",
  "key1": "3f85ivk3gcbHSkbiyYHtoJm181FbjpkSETqsur3GhcocXC3NbJFR5UnkZWxeP2PKW5uTzZAskbxK56me4QievovX",
  "key2": "3ZdeijoAbCJcFYJopFKxXb8Hzurnq97nBS2ajKfXaUj24xdbxm76kQZ3nPdYvDUbvqhu9FbWDch7185b3ChGKJBQ",
  "key3": "tQ9UuYmL2HDJ3t3gKshB7ii2SLS7jBpdVip9KLeQwKiSpEJ5ps3gtR2eraZ5FLt62n4TPBkDzyjCErcftK5UmUw",
  "key4": "iJBqtKdSHj8PiBcXX5HjJ9j3e1DmNiMUePQaMWPCtgfsFamKbso4iWJeV9DgkL7kjvapZjRoaCrfJFToaJYnPHu",
  "key5": "4pskVrcD19GQvLCFmBJmqd2XEpocbgAvgRo9yPJ26yPvM53DzNpEdwvQZ2nuYYjcXCzmnax5X53oBb1HSC8YDbHW",
  "key6": "pWNdh9eHTLDpFnNDES43eG2Co5pDkxcsMEvpx9n5PzUMAf3tVoQuJ164fJR5DwJ8xARXRMbyECPJhEcnRjF3Sy8",
  "key7": "Ak4f2zqhTXefiawXBpLzykXaUd1QskerZv3FF85NNZTHjYnbDfPvTBd6MhE2NJHnxFN4najRyPbMPxMuAwYDbxU",
  "key8": "28sMT4AnaScDA1yvNoE4AKrpwTi4RLV5Jmyc9eVNVfuTjZNAjtNDmpsPbAuiKvTzL5dMAcpnAtjFcEAx61Di8qJv",
  "key9": "q1BMccBy7pTYZM99wvZmut4fbQ66Hr2XPDeT9Cv4xr7AqVKoqVZFM8p5jNg56dku9b5QoF1Euavyr7JhPviaHXp",
  "key10": "491jipH3vVogMxTFZnNTAE9qeTu46xmad6pHdVgFoXJ9tTKLR6H1i4Zb24inQrLQGkKRebUeTzxiA52GxeQXjkm1",
  "key11": "4SnJoxFXRjLoC1d7gvTFe8Mg243nawXUKDrnRVZNB58GXS4gtGCdGVG8T6A3gx3JYVxHKmzRWoCwnhpmB91NAmF8",
  "key12": "2PF6CyBk8Gx7VgP8a4jtS4SsKYKKBjiqhn7Wt5n5VwSQ9AZEDvVBUuxSUsAYp8CUTYT1CGW7cRnAUAABdFZMkQeP",
  "key13": "4uPSgC2u5zHgPWw4YHqqT9X6BMMbE2WqsV8KCRvrQZHwn8BQGFweHxV4QoGzwVN9fcpMAU1iQYuGR4wp84gd85PR",
  "key14": "tziaZp88JNGy1WoFcwUKhgEu6omdXGCkUNK5PUhcRdTka1UFicNJjuJZjvmK8xn7ZRfFHyTaX5rs2ttqaPnYeej",
  "key15": "29BsmRpYqjdmcF9db3FjQZUKhKawZ3GUj5JZdsN2risjtPZ8HSeL56bKnmHd2dSN2hdfeUakmWVLNXyQqUBTJ2zy",
  "key16": "3uMDpZi5w6FjE7gzxrMorYqz2YQQkfawQ92RrD4YtmrtdQe27CRjxirJzTF9KrW2ARb16UpTcRXKNcQmTiuJyPpm",
  "key17": "3iWbKZTktEJevqwEz55ddS37Apjo79vizQsoadcwxVM2A3NpSyQEqxPgGJVd4VuHh4VRm9JDsYdKqAiFNTwNo8rB",
  "key18": "3ReQ84br1qPQE4rBP6oGS8G33XPwxnyq9QpVeYwHubHWH9dEQg7vAyyuhbmvftpHLvvyXLyuy9QYNESMDvBbpwAp",
  "key19": "3JCbqRWQiaPrYsBiwpAm642TeaK4ayrdgaVWf47QpWVnM6JaUdEq1HSyZGpUnJZCH1bwuDynMcRrRHEvmVNGRYms",
  "key20": "5qteQUCMvHHQ5xDrEhKrgCgZ7b7RA1Ki9rkGxikfgcikqukqtZCTriYmsm4mGBPtiisBnW6imk6Y4nf73UgjH7E1",
  "key21": "2y4iBhLy3PuHskbS9BaoZcr5AKpVSuBAYTqfsjtxvBFXuK8GXyayDifv57iTthEDdH7f5oSXXChpqPMaegPS6FkY",
  "key22": "VViUi7MvyUXmpnr9Las82gh9CHM3kCLePJ8ASoTdVjjEhMTzqo26o7yA93HUV7c3FzDsm9qr7b7vu9QWFaDPrK1",
  "key23": "3P71EZKwt4gLFurFK2vRaQeLfCpWUL7kXfiNxqcoovVHSC1KxtEhg6XHjeNdwB8fnSj6j6FYzom6EDJ9kwRaMpEi",
  "key24": "4CiwipP9qbyX5bTCUJKqiXZtKUfSb2uLzjvdfSHCEYibpzbkSPJC9iXWoDVN2Ek21nmpx1ayAmvRpTJTW7GNAhHB",
  "key25": "ogSUeJYGu2bgsXmTZq7FhwSxqHmauyEB3dfjtfGBAoAcjbHycEDLiJ1a1z7XHYgNyrsGxZZCbHMoCebUhGwV1kx",
  "key26": "2CzVgdtU7GRcPAkgLg26Dv6YohU3AkeSsPQRUAQZ3jieCaWDvQpGp3oRp1rufV9hjDhCAqD4mFp3QgwjVXGCtykf",
  "key27": "3nDqyt1PGK1eXq4G5xFyWRF14GG2PzgdHoNg2cjEd15t98d2aGc97hsXp6V5tk2eBGFLx57NmehA5qTcpWpp3DZq",
  "key28": "rKEqizMvSevbaLn9bKYVfC93rx4ZyRjobRaNWQMyNxJ5ssM7roo8MCwU5uwavBx1fbg7BoaJTPSqxD2bomWgfuK",
  "key29": "5pwaeQm7h68sE6SV6WbvvNsuhSQYmcgQ2BvvwE7FYLEhAfRmZr3vnherwRnzxSPzbTSr8PeKThKr2Nw8TisiccrQ",
  "key30": "FvPvGwots7DLTQP4heaHTqkh4GGscG3tEGrs19VUdZjSV1y7HB1nXUmedXZZ3Qbrw2oW7y7ApB1cYnz9qmYmhDV",
  "key31": "4RptqrM9Nqq98DMAEZ1J26Y21wHfVAz97qJ8Lm2xTod4y1f2xmjvHkLWs77ehVgXV8AhoSYephe3Eio7yDfp9UW5",
  "key32": "LD2M2Xar6xAdat38yY18mM2EeGr3SXn8REzqhXDBhLsjLjmiRc7rmyh9MsXdbeTN8TtwuFymmUVzQCcjT6g5BgA",
  "key33": "YUuDDxp2wrATGk7BLfDLd6oRB85NQZsFMZMDGbAZb9qVZ3QrsbPx5Epmzxj1RWTzCLd6pFwonH4J1Hj3chpQdmf",
  "key34": "3nMvDSvtrUXwSursT8j69Yu238tK4psWRcczYDm7hVG8qWLL2rtdkTdvkUVjA2FsxxGKVanCzKSSc7K7DKFGtE5n",
  "key35": "5SszG3ddxHgk48PV9Uyhqqs7wBNMoJkAgZi2Cjpb4Nrj7ZgNT9A6kX3meEBexWeCbz7bs7E2HJ5KunbtaD8w7FjX",
  "key36": "5wHVxGngT34R2QKWVt6Mm2ew79KFZeUa9ZYFmwYjCkiSzMqxyjZAhr2ENeJgzUX7n2x8kRfh23uvyZT5fM5kDxhw",
  "key37": "37WVQ84oTEm283vCPHKRfiFPuouXs6gaB1wvizCHuKECwYzdzmfgZY991GBpw7aY34tpbdy5W951B7tNzR4E5jrk",
  "key38": "5P2A8gPVWJhLRY8cPKtjqTJC36QWjgzC6XVTe58kX1X1f5eivTzBApS2dxhKLCRFmExyPeHowHKJ7iDtoTG14Rtv",
  "key39": "3o67MQSBS8XsF3sNPyKkkurbtTvjkh932c3D4srzowZiueEgVFbF8W9po2XYggofbXzAvCHobTT8h5uXKqSd3Sbo",
  "key40": "4VDfCo5o9ftDRGJp8924rJhsBCKMLfsWyAhaSkyLit8cQ9oUHTcwidaVtGZxQvA9CZiRzBwiu5idh5JxKkfDxcYv"
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
