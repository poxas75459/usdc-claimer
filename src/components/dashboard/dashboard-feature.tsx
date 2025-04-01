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
    "xZxscVESHhHytbamM6BGAia8RknanHyu7uTBfhXc8najARJUfMfXwPTeQcDkJvKWaTwayhMTuCvD8wFJs61xdqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24yBnLv2siCAeK9SHTucWCFRx6biQ8e5m72NBULgwz3WjpupMAWTkUBrcWQmWTpbuxrjDtN26vmmvEZx2LeKwkfQ",
  "key1": "28Mm7fe2fz9mmZk44PGu2A9tvqxn4piud6dY3X8jSPJQ144HSzJdXR6tuqsUACRP6148kTqa9YmLYTNRVio5VccC",
  "key2": "2uddRDwifDTb5d8kVnHTsaTFd2CK1ZMCyNc9XVVLX3c7j6xbXbRLE6VQcfJdrNwFpxnaUexmbbBCGFytqHseHUoz",
  "key3": "5xuzNKy8zZCoMeu99hf8qDJrhNsYQjqciG23teXjZjkLo3ZH2ya8z2US83Mk8aDEA6sGbXcPLPN3NVNRFEuvZyDt",
  "key4": "6TLqJhiSqGG7K9ojvER38ZpqnYkz7U6ZbpeiqiwbitsKe6G2x26VbG3DJQf3P4wapgecdtTRKusWJjwwEosvntx",
  "key5": "3aeT7StNHpKw57TnioC98KDFDfyXa7Z52MDpqpH3TgkUbmjZgiiQmeeGsMR9qViUEefGpDNHMpqLKMS7FFtxACnm",
  "key6": "dWyR7SfsuGJtmPzaU2cAbZKVmRWYNiwmwSU5bpSGSkg8hCqnZL5Ti5UPPvRH7YRQtTSWTV8qBzbtuA5quqiHHP4",
  "key7": "63p2Hqub2MtGyazK69Mc9PgRkmjicqCQq8Vziv7myvEH7kPLtbNwNTdJ3HYzyPKe64XjUimFmbueWhetAFqmHjwu",
  "key8": "3EodkxTcPHxsKhk4oU3TSpSPN5A9eRUeNPk1pUMpdvYhWLahfQmT1ox2DM7Zgivo5iiahdE9aYA3PD2CNpEnLoUn",
  "key9": "5kf9M3KyuY8yuQvagXTziGuCUMNDRWHUmVdQuJiEgXK6pnbpm3evb2gdRTCvNftR2ZMVLWAtRWbyqYUd6hAk45G2",
  "key10": "2vss6MuqMWixVvqSu5q4RiS5bk2tRsRe3z9uJs4eT1SfhQn8QEBqSQSzoTMn9siyYJeZxQhJk6ZaM34tE3tLRcVB",
  "key11": "p4et2goeZEa1PgSFBwSJTaWTJ7nZEMNuV3n2DFQXtQTQmCv12NcNwhw8goeQxwbxmwG6ZyQmhYMw6VCbu8QB2DA",
  "key12": "5EMDR1SvcRtZG2Hep9ZNkSZfHkazqbpsikxC4tbLUpVvNS4fBTDdoqtwWu5EGNK9txxyTQHNAVduRgDTDaxuG3ik",
  "key13": "5dsuiBo7qJQpj864w3BCzjsBjTjYk5StxvhhkEDdDH5kKThpDJ33yr2Wo9dVrvq2FUqHCdkjMkLQ7cmZXM489GKA",
  "key14": "22sgh34mq7t7oKyY2YkaPARjqy5h6dxc121i9NYBgbVcsnYhw2n6BCdUYointoq32oWACvQf63GcseviBRT8yarE",
  "key15": "3qxb54BCn4fEG2GkQR56TcNq5NN9xSLLrSWnqqPQXG4pt9vM39uU2K8YkrqCtDprz6tug3L2hB4bedRqLaNdKL4w",
  "key16": "2vh2mVXCxiXmxZdYo17V4KxRDPa5md4JVPCpwkuh6dn8GHrogM5sK2Ajk9Q7XAmwUpoR8RmtLvgPHVDjBADYNhBu",
  "key17": "3DH8W9UqcUadhkHsAhJgJnRibx4hGgcpASB82c7pi4SxDscmviWNUnd4Fsa6bEc31Q85LxXN84tQJ7QQYwh2KW6C",
  "key18": "5LhzF4oQhYBbvTLfMrSjsCwBPwaoKzzBpF3HioasbAqsM47SedubQT6K3QYfc1CHheKBBehGCUtYoD73tHV7QnhG",
  "key19": "2Femc7KUpv9uHCnsKQRs8dJRi6WaDX1AyZs4MyYxLsufcqtYv9F5jAMPBALc8tKfz1kattJEKS9JAbELP2pHpSJf",
  "key20": "3apirc4DCmAzQpg68FSD9dcAUM4CDZECwpno6A47iu3nJjAnAP31epyTKbbRqXsJe8kCcV2Fc7PQ9KJLusggN5GE",
  "key21": "crpBrt7Arw2go61HQq83w6NkqMgiHgHYzwCoRRGms4U6MdnyoKN5PtcpSqHFqoruLXSaJycRwMtLznApDks8v5m",
  "key22": "2i4ZdBxs4Bd8TTnRCVkRKGGefNRBJwDQRyAqsAb55WizgwufAsA9neXYFVmN1r2ps11JBs2rwXa6KwWvTiYjzVxV",
  "key23": "41TZdgBwG3eJ735QeCe7U7pZBQxu4GhBMcVeHDL3xP2sh28CB8TQ2nsXXQ27CcS4GokEKMR43UrAL3nY4h5qmP1S",
  "key24": "k4TANaruoieDgn22WLA2Hnw1id47zScQvrrfRX1hpAEtbXH93KRyJ9uxBe8cJ1Kr1VjdweyWEwZo3mFJA8ALXUE",
  "key25": "5atANca2jgBNF8kbQpUiHbbPuDrX1U9ZvsWh2bRZbsqic7oay5Aw1DGvzf4LvppkL9Dx4rqSSDuZfKVDQi5wz4Mr",
  "key26": "3qQCQm1andtnkBTgjswZZ58RZqeAaHwJQLVsKnggwYkJVSGJci6tCXJseF11nMk1RgMzQuR1DmRayWjrtFs1Md8C",
  "key27": "3wAaaUzooCuHaN3rjbNP1J5GJePN4gNYQdkr6hUV5nxkQXHv9H3YgvgSiwnoixpJSJ51FADa4ToH7ydXhc7zrZkT",
  "key28": "2jdB9p3qHADFmSdAxMDkNkdxmHrc2WfTdcqxfLDekKyLytH7KRtLQGBfxLpaJP5rchapM9jh6yxPzJikzWJdG6v6",
  "key29": "4WEUuDbHvVEP8UBKuy9WVbaidFMeKQM8YATkeFDrqUSoRJZxeu4ZVxbrAgMA4UMkNh1FnBNzJvFAfv6Cv4eZs4dA",
  "key30": "2N5vSZ3bjyhaqcodScjXKukwEdxKkXuYUMuLGqNNzt2dmjVP2PtPttaoWJwycZckfMyJV3LJRwY17s6RJzcJCRrJ",
  "key31": "2DSLuXuuu5P2q9ipxYR4ZAB4tjCRcciuFCCgWYgknM9wE6db3t94VUvnLR8PCR8TqRL3aEoJTEkQ39eqb4gsWb7Y",
  "key32": "2cqQrWZebzx7G1W5QFbsfw1VsFi3s8pDQME7LjUFsDTp2LJGDRZk1njzb3wMfAMLdUz7d1pTpsUpd99xn9XUzXaD",
  "key33": "MApUTT6YRuK2wuyKQw7hyFtvbVzx98T1pz9YsDb8oEE4RDPbiyKf89AaTVgoKaD5gj2Zcakywe1YeBk5J8eU1RN",
  "key34": "4QeSC8GJ3BjHWnEwaeubNrMKQjWS2UPTUyejz64pmjtHPCFzztiP4ivrF58MN6nei6tJxuyodd8SkLCw3sLGrDjA",
  "key35": "4QFqifyF3UiQrnnfbAueXw2xNVRDsSVMgYexG8HSb1Z55jih58PKejcvWqHAnxsPGp3Xq4aa9wCBRCytXc4yYyvm",
  "key36": "2ABF68sg2Lt9yWsYR199ehWcGWyYdnpSLuuGAfKHyj4LXtCaDoXTcU4v4LtrkBHTh4zNwhKoakbxv1V2bqVnEeWR",
  "key37": "25RnznXEqyjJkgWJoRmRYHsvXoJrDjhh5KF6GpRrH4nhP7xaFZ6JFNjgxY7nMgyvc7o8REBGtPXSvm3ChRCNbQXt",
  "key38": "AEVTTFfZiodVenbmnKchj4sJC2ja76GFN4CZT6TqG7ZKHwXY2KfesQfQQLAZx2a6vPCf7yk7Gida4LX7GCCEvMD",
  "key39": "4hHa7oDC53j9qzoJ2xmo4nwSkd4MPwWfDUwymnADhhkxrFAt7FWkLYJ8Lkp2WoyyhjJL8YSUKoSBCAsEU6TR6Hhv",
  "key40": "57eJx2pds4KecrrUuCaoaWHvvbwvcSgmWRHxn1TqdPa59fgEzr57afmVNBRgbToVdDAvN8HgZuqL7ceqv1RRUg8p",
  "key41": "24xfCzvnePDJzN6gjK4ajwVB4gWBCH2b6Q72jY7hCkBFkSUAvYH5G717wnpwMCgP7ESPVbYV6A731cSVjo1PxaEc",
  "key42": "4tsL7VcW6qALTfFfyKwUWwZwqRGp4s68ZySq3KivhXJNDSLuDLKkDzwoWcdS6X3H94BU3Zeu5MWrUzQLwnpqwemk",
  "key43": "3P9sE1gdqFNNRb6ydJECXeeP3LkdLQs2VW9qFCjpEE7NHCDNbThhQdd7ykqFCqAcaDx9uq5JNgp2VMxdiZtz6eUu",
  "key44": "2eJeqjyPrcF22VAYEGEphdjsesfq1NB6RVKyRvCo9MCLLVm8K11UQjt7kXksdez37ARMiH8MGeteMHDr5Lc7PNnG",
  "key45": "5yZzDkZCpHaTpGEWtH9a4iXKpNVTcRRhTqUh92GK6W445oEiJ5mCp1WjoHTp1LpD4NEHX1fJ3ivxT986fMySERsH",
  "key46": "RrmtiwSVTLAQhhcp83JkXGbNyBMqDPexcYpXxbAzMdK6cVmePjvGBHhqirPrQQPZ7sbY2topMvDhiooa2cGmMnr",
  "key47": "2MYAA2DgEwqEK4jqN3zF8b9SL6yn1hDhZnMFd4n4m3R89R9Jg2pn488SHW6Th1qmy3vJbnrepgy7Cj6W4YXKVQqJ",
  "key48": "EGnnXMkmVDrdoqecDdjTD1zcQZMCqeWRNhnamfzRwauw2wfEJ87T6s8Ki8YcH4rNRLgrFkNZmG6GWBWNrYEHQTx"
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
