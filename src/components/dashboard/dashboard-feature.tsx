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
    "4duS5c8VkfuYntG3uB8VmSmreKz3sBhxQJBo3UJFjxKcPENyAko5KdMeWbbNoSYZ6AR5T5EXtvUfdSpZrk9KMHBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37d55i5BcrSC2PRqzte6SSWGwraya9taV9QUMyyejSCE5VdDHLYN8J5kBbi6TaaHrHM64xx1acPbY2q1Cuk74ebM",
  "key1": "46uk2pBN4ZJ7DjVDD4pqE6eYSaSEZEPNweVjNaFcdKezgKg6o5kdQmonzvqUV2ru2kvFgy469eDnaRaaLffm8YBS",
  "key2": "2dSE3G2ZeLyy2vwhQQJURJuG8Z9ZJMdTWTQL5sH9xvxgZbeESn5knK6k4UP6zNVpvurNcPeqJyj4RGz3noBDETGJ",
  "key3": "3h7fsjNn7YXRy93hDEpJNi5PsJ6UcGcEmMCpBXTvUqLVxjcf4jBVG6Hbwm7fJLAfPNhi3B5DtKUwqEkj2TG9rCfE",
  "key4": "5gcjj9pf3F9cfk4mZnVojLMwrJ79ffXJj73hWdsLL7tJtdgwrDeDPH5YFiG8bqo4NQZuHniQNPFTW1HvuHD8gr6M",
  "key5": "46sUYEaJajMJEARF6CPy3f7B695Udo5xWcuvZFz5EpKscCeg1fQNuBWYiUAwoxSBhmaaaWajf7DsWN38jbgcKfNB",
  "key6": "Xi8VhfN6SW5xKyZQye9FYtkCUj9dwWzC6xN59P29bUx2LSs2721e8CTLb2yCV9AX9yB61ufR3jA2aXkXBw8NGmV",
  "key7": "5X7SAFT1SFdx28byCqYG6FtMtezFaSNohJwmb4nTkKxzD7jPNyMgNKeTiXU6hVQpibVmRTgnniFmdQ622PemQHcq",
  "key8": "4LmUqqCEDzsXSmmePD5EN39st8FygdFg62wbsPDLH5h2TgWnjfq9FPZUZjPFvoiroBWtXZbEecbBchrXJ7erCGv7",
  "key9": "3VDcHxGrUr9eUwU6NdD9ozSTpTWBMAoUabk2vcpdSTniKWjbPnhedJ2SeHM1xXGKAfshtbjYftD9GD3v3MBhefjE",
  "key10": "5SgSCPTYagCibC1e4wLoUypjnb1ZMkiTCraoFfPH1Dw94WzqBK2ELad6ccZjeRsPZeJcSR3HVJkJoQFvzJvxVER9",
  "key11": "4XgVX9UBGhKxpmSRoNtEBGkDKYTt3yfuCbaNkRjcEyW68P4fx8ufGuNGCQbHbNrLMJ7kDNeDvmP3qoopnwdzQQg9",
  "key12": "4aWBArmoy8xGsdo8LvJumaysqod1x6JcWGUHzrcGZPiNBwCPfv7NqNUa9RgTVMoWihcJQFGy68pQvHMSsyTVXKKC",
  "key13": "2cx5cdwC94maBJAaxadjnJFjonD5nRuGibvv3aGN3269Yz1ZKSCndCU17UoPtvqXQzdtwWxTL2hwxcD3XsijxMvv",
  "key14": "3bDogZJjiTb2RFtpKy5TyeXgeQPjBoY77x7jaopNaqsrBHkweRr4KZTThnjaNqDG5X2ZqGEENLaLsQmx8FvY6ULQ",
  "key15": "44cPD4kD5TUccz4VHSLiSTQfYgbU42XuXdQfrd7PzTrQeFLbFRoxNcM6RTe3UhrMpB1K17GTLMmaaAaKxGFr5XeP",
  "key16": "2cxGWyBkYwWdaF48FtRsJoUdSzq1gyS2b3qLo7nPS1CkdUP3Zb5UTG7sMdmL9CmviNjsasaBj2Rb9hTTwuqnqvFj",
  "key17": "yfcbZJLagsTAauJ5JfHQWtFsjPChzqQfSLu6qriyTv75z3d8Kek53aE5hWfoak4XDh9fvyL2fFrtW5UyXiu34cg",
  "key18": "33YhuAi6Cv7FiDoKTm3DnaY99bKE9gM1rcfXTMjBXykpDTBDoY9VK9t8bcDm4RefpvJjabo3Uc9wdXzw7tzXxFiW",
  "key19": "54rym14kWmqHTmWuGQn2JA44hPbhNjBRfvqRC4YGzSBLHo71wfv1rooWX864R6T1DAEWyNX8W6AdgVx12VqZSyUZ",
  "key20": "ZeWS53toSFA2KrEH3TUrqwq4pEC1cQUd8QveXzDXxGnhgpXJt4ZFWQxdCjjYYhTD6MqiGEG9xWBb22R37V9KHob",
  "key21": "2MjcPyG45mCiasJxxTBXxd4L5NMBaf3KjkaQaG27z41orcb4QBtsJBEaMm44FruWxmrQPx3vuFA2zxN7qaCDB1W3",
  "key22": "4DYqbLGnArSnvkYEhcsn6iexnnND8ETuNikP1seCTSbDAmFMvCb76c22eJwD1Ngt6LiJqiRdX1XWkHhDCnUFX2DM",
  "key23": "cJkvpmLrxUmhhae4fMBiubD6AFwfSamY6n1JdcQg3MTJb6TFkKhjqbSzyJpyrsUN3m741ZFugmbdBvhLTJYktUW",
  "key24": "3GG8jF5Y4GTaz8WiaDHY2ac2tULPu5ef74ayPVdHeBHRqEZkQZwUzKvVYsdDmstNkPqjMTaUDnDbfcgVVsuyZEqh",
  "key25": "4Nz3e2U6EVHKbb2kBKRMn5wfpB6QWvC6xi8GEtZYKdaD5p9aYsoAhFq9ssgjC6g8NSdXbekBJvArRQgmoaWEEob2",
  "key26": "57YqXqVGtuzVfvvJdtG2ydN2vMhnTALsHLPShYJWtSoyrXKr9e7HDahp2caUtfQtwZM32muw526Ck8bxpfBzaM3Z",
  "key27": "2ou8fY4Tgea677BeDwZHzu6fJ1Vpup3V7XpnaKTW9S1r9LZNTVfgUypQkLLQDQ76QXJ5vtFJRGKNNc4ykM1QdhLA",
  "key28": "SnWQEGZZkSZAw4CjsKndonFUzgX2GEDNoc4zFmfRDBFncRkr7q1GXDnBWApFisGfkb9y5S1NGrTnkuMxHpsv9j8",
  "key29": "3KZoESJMHcSqWaaUf7qFsDnKTP62m5w42fQQSscLnuCDLLXvJS2yqh5Ei1CsBDo9j6uYuqc1XySxf4gth71VVmxt",
  "key30": "2oqwGUQfSibemtQD7coxtGvg3kTKdyvoHWdya5nh9cQscxVQJQo4jitCkLzTCEZQ4BVxyD2nQBwe9A9FsPTiqcTF",
  "key31": "4AZ5SmEdr9q14snw9bnXpsC4Me3ravuRg5P55WCKKZTkyzkRUvNmZ1NzpgpLHzGT1pW392i4Rb5uj4BexPopGFch",
  "key32": "3LuREwbqacV849yCTgNfCxqHKWAhDQuaUzhT3jpEd3GYWxydbUzGPcD4tcXoehv8AA9V9AtwgZqxCAQ1SRa4P8E2",
  "key33": "Afh6hz4DFVoRRnRwdvwedcr6mgGnmNbvVf2yNshTarALsQvXhL2fJNs6ytbm3LCrSy3d6UL7zqj6WNduvuGEyT4",
  "key34": "4muJd9rTt4c6ZqVsHs8Ntnw2ca1mjM27APah95G9651mvJajgHLKZBq4G9329MSA67v7p2WgJEofNaREUEoayhNd",
  "key35": "XGdWAhj9BEZA3YTMAJ3Ahk5LwUghCy6WzWaGPd8ZeMSof1dTU9ENHwrAxfjaGvuZzkCYfGZxB9vE5D8CNAs1zGz",
  "key36": "3WDLAXeAwkFsxnwKSiHpLYqbjiCug4UqhptKpqxyGgHFPjPUjLAakK4ppf2d2tNWrrBZr4ipTHSsAFVCt2mp4TMe",
  "key37": "3bAqb63D4xTySrEHo39jgJ4jTTPYxvQFKDQMPsM4WCmGjDdNFTqoXAgf5hiqXSjwqKVh5V1nsW21xCRWXgGNWFfm",
  "key38": "Uqadv611JPsvjt9gzbwS8wkAfJPYkNRbFxrEhCaWD1wYgu3RQgCg61rE6xZF7uy3ebdrrSC4gQA4QbtmWTuKZCs",
  "key39": "3qbst6rcmhB7vQZACjciM7Lk1KmkvoEMkKwUnVPPuKmJNYoCwhkfCEst7FZ4rbERrnv1WgMC7NjEE45BoEDeWQqP",
  "key40": "5N84bb1N4VuMqdqupyk5mgtTqfNQTf9Y8SatvD6YPvViXHyxJ3R1KG9CLyUkdG1sfVbtzUfFNi2gSwVWv9hgxm3p",
  "key41": "z5z2mx97YK4TBzadYRJbzcrBggQ2xbfqmpP3zVnHgM4iXt5biZFqZPEdEs9FpoociHGv7B2YPCq7Qc2wLc7Sspe",
  "key42": "5Y74UnamH637Xkof7LaTn6ymJAGnPJhhF5k4aciiLBPqQhV26X1TfnzwXr7Ayt58YGqRKq6U7GvMdYLgzNhEiNLc",
  "key43": "5FdV8fdcmswhA65p9cTSQC5xYUcKXCDBCrc2ugVYhSUcVZqWM5sPXQfFpLLPRy7JUtwmwSxNDkvogjPTRYVE6Z7x",
  "key44": "23wVNY5Ae2DnTDEiyEKSZRySNhtbVKR78bnQB3dWExAMhSoNQRuXGFZ9ZeEkDXhyUzR2gTb2SyNUVv2baHBaAYH2",
  "key45": "3Ex35PsdcxtAWkpJBDxEfSEGzxzLb26kd9ZmXXoWyQrP3DNMpMWqykmPHu9w7fi7m2ZM6g8si1AcEgtMxnPny7Bc",
  "key46": "3cr4E1TxBpSLe17EUr4NQygMShga3euNjq3U3bB3Gaw25fR33ncpR5wTWQCpYwfyrXBJXvZav3ydQmQ8dUs9p4Ue",
  "key47": "4pttTKHXY8JnHhZRwHSukxt8juit1RYCtHtnVfwduqfQSrknKX1Vkpc2iHcMduWS1LsdYrd3Q55QdQmzrm4hY1t",
  "key48": "4hqMWeALrJ4hpS4cdsD6wVsbCb9oCVW4SBVwqA7JkSSn7cJ1X7D6jGG4e7qSQecbJmfeD3gCwvRitmzFwgunFg92",
  "key49": "5KJB7itA2Le6LSQXSQGhNy6ZnAa8fPUvC6ZW43uxSLL6os1oAvw9xqkQiWcWjvvU5X4y8WAhBNRrgjiT2QNaNF3D"
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
