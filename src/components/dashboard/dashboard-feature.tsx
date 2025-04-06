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
    "3vxZiP1wzS1wwEAvmhV2XW1xwEGVUuuASmMgn7zLovSTtUvAT3Ywar5ou8mVT2tDgcjJNiTkKjkvXBXSssjU7u7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSZFz7CGz6xcAh4gpmo4r9bbv64j4Zn9bThoaerEMZ8zBvMtFCZxECk83jwbMQmh36CnqYTZH7JiNkwfPSuBv1",
  "key1": "2iacFbpdMzWgdfeLw6KeDjp6YJ87gpoAT5YoDHKhK8UcJsnysJPPS39qEX5GMRJo4ikPUL2XiwXPbE7Pe3YDbZUS",
  "key2": "1rQ5YXPQxwtZChA5x5zWtxB8knYuFUqtqcktJuCZqmkT6tcpR36upxHxJpCjsTiHrU5igYQSA8g6HJDAesVQkbU",
  "key3": "5eAviGdHyUR28JgHHr6MBeqjaPAGUXa3sfuvTxfsqhzDgoemrXou7o5EWLt1PttA7jU2ZMvYXpTaz4azJQRV4ySZ",
  "key4": "3GRM36vvsXwf2uJ2CsedfRzRZxFmqhZRAzcoa8RhneExy8EpvRbTstiwMQ8jSREnoZZjUfsRXvfaWkcy9ik3dCGb",
  "key5": "ZFZ4KYJM1u96erSatD1ZsNeBpehq7jWhdLbfxTGrKcMU4tLNR4Mx2ZnVuAuuLq7X5cwCLYPnBDZhXGHbR84xAR2",
  "key6": "2FhnY9rXcEjQhMcuUpUA7p1BgB8tBBNWM4QdYT3Q3rx6BpxNbhLNp5kse94GE8PrWkdtANTr7VRJK9VAeWh4owBH",
  "key7": "3Q7JjAKPoVE11LAKpp7rGRvpcmBeSdztv5WSfy2NL1poY5eXtfNBVJug8WuAg8SshbsGZQ9RLjATkrbCECVNrzYX",
  "key8": "55sH5a5pg8NnGuMVMaTz5v2fuzWjCh3kEV6udJwh1cvuVWm5oB9jUEc1Y7BN4Dy4uu5zuGgSqwmQ1Gh6TJ3qCK7A",
  "key9": "4M6ND5aSk8y3wHdfMtFNnBYAdAwLNKfgVnuXxwM9yyE134LZemz4sXUD4bvecRSuUdmFgyg9WXyg45MA99FaWhug",
  "key10": "4DB7AQqqH68c39aE5iezMM3MTT1pGv6ZMt7bqwfJhZGgpozPC2GUUDPXqUjWQZu59nG8UcmxdzZXQqhzqr4WVrd5",
  "key11": "4n833SYd5acshixnR1mQtsndbkc4HfhdXR3krjWshRizTSA2kgxdGB2tYzn8LGfjRMG1JvtjbYKuam6eh2ZshUtH",
  "key12": "5UdvYjvqrYhmv5bnWmMf9gx3CRGR413S3K9VTFK7jBRwBCEFRQpR5QndTos5DheVV7KCRazJaioqbCAoa377EL7W",
  "key13": "2NXVhDqKQScW1LtndWKKdEPPaqPQmsXMXbQiPHYR9YX2Zb7BDrezgb57pkV6hCPg6FehGog5mPpb574HYbaFvX4u",
  "key14": "49vsegy4effWFzJKgEx7QwLVs47nkhcrhSUMpjJ7dtr7cGTNqFdQzxceFw5sp7jEcfoTZcfSNN1ZZcXFMdVqdTiV",
  "key15": "5j6SvPB6bFBVvMW9GaXemSqRUcBuuuFqNk1SMcdaKYWEmhbEKJ9CDk2Cy25BKJsAoTfRn71gKV1Pu1Vo8aCmYNpy",
  "key16": "3xZbKswauAwBxem97gTDYutDozPHP9LmMPCXkg9WZtMZhFJKZ4pxMKdFxJCqdKoMM5PTeRFoDwc3XiPvfc3q7xQ8",
  "key17": "3xpSC7izugXGGqijZmnjbXi7UnoSDTa2r7EDsySWeVjahbP2jdpn9dffXYas6LriuuxG3GCChj944ALr5kuxNE2N",
  "key18": "5CjopguHEvztW2oibDMgfDmTpshLtVCrNgJhStvEf9Tdxwi2NYupqb9gUWdZucUVoF7WLTfD2TzCLJ19V8yLrS7q",
  "key19": "5gnjnmfMcX31fhPHUFqXrvbd33piGL5RQG3qYdAZPfj6hZnk62LJJYnDBF63jAv73iLM8WjAyi8Xz7QcthNDv35H",
  "key20": "2aiaFU3tsFsreFTuKgEA2tH3v2W2VszfE9BmcfcTEN7YzjdNm1kDNFaHWqfNwxGTdzfXh7LeqCuFwxUgpZhWKbQk",
  "key21": "yEC9S26H5r6zUpJ3EdpaFrAyQkfKZ44WctY3HSeecbPZSazpcMhWRNU1mtaJCehCL8x8oTKsfgoTBx6h64XN6UW",
  "key22": "5qG6h2wnbJ15Swg6uzGPfNqM4ewFh5QTLC95pjB7v4mBcvhmeeXeWiLQNDyjAdJMBZ9eZt6vDaWEy3bvRbng1zKm",
  "key23": "3uL8Dj49T1eHJDbfnGKsRRF3WjnQm3Zth1zC44vaF1acGuUCYUhT7LF9uo6YRUimXYTkJ6ZiWSsrw1QAFsvK2uVo",
  "key24": "4AgnUZbtEGYrgAKBmLApyo6id8PWp7hcQhwTPZa6WdBv4t8zJJ9sihiM97vYVFAgbTzVHWLPJmu5ziVu6qQ2SAUX",
  "key25": "MsuknGRUGAcFfcubEjKhuascHzWNMrkvjsaMrJxHpYS7N3YQKFGGZUsHsV1AJNctTee5TBva6DWppbWyNVULrmL",
  "key26": "EgbKCpM3KNz3hoJnN8wxeAv1rf5RZgkXPMSie4Z7MbuikydmJyGoNxV9aX1p9HhXhW987XMM6q6ZkypH4Ny27au",
  "key27": "2xM3XnDSEZGEjWT1zU3YH3SgtMLPbEsoWiSrTpjkHGGbQLacH4Z7wSCNDxnh45No6LQF2y8ian3JL1N5JS11V6eP",
  "key28": "3RwimGvi2ciHhKB7ebqwU6Gxbv6wrY5rWWfKA4S2EwybxiWGJd5vxT93YxKFq6vGbs1dNbpZ96RbYt7G3Q8nt77L",
  "key29": "4FvQ44o8nuBbiS85oFcXQJSaFnWAuzyr2TZAFguauN2cQAhxW49TcME2WmrZyTbR7NGWPSa5qc3GRidBPpPmkq5i",
  "key30": "26mQ4X8eHtduStaTX8ijSKxXoPoKPr7to85B7vVYJtTghTGGq3oXUL2vwz6bfUAZH3hrD1dLXUDmtkTaRipo6bLq",
  "key31": "2sRVXhY5FVuzcaSMamPi7eK2gT7G5QSHCtq39idHhgtBcesgmNLon5yadKn9fK18QrRGe3PMhZNQrk6LR1CqotyP",
  "key32": "2knpVXp9rBZ4LPGF5oHCYfLD7aWXphmQnsTRu6Eu3tNQrv4wrdp4QLtosBq1zQULLgxUNXCDbZsaqai6U4pnbFFC",
  "key33": "2PJnTpe5sePevRwjmzCgLmoXFa8SFEKCgDxWERmQSGFH6YDY56cH8BvurDjGMSLU4wnoV11sEbzWhpNVke4wmfxo",
  "key34": "2ZQE3Ex6CHg27bM7VfroENCoh7UaYTaDsv5dFjUfQYbrauWuBNWeQJkB6c7oyVQbWbur4SXyGNCUqdNxX1sL3i8w",
  "key35": "2tDmHXad4BHrNUWhTtvGGxStEYHmHeMukMe4ZHEMeYgjnfo9tNPTLLTMkj4Bzwnum75DRStnya6ZH1i6sc5hLqy3",
  "key36": "5HLzXHYxG6GWwMKi3oPu5LnAkYDMZbyxg3YcQURMXkUnv8ukPfS5So8RucxZDW5h9oYe6NjaMMTBCZgqJaFv6iCT",
  "key37": "3aiSRJsB8braKbPhFwnNR8n5yqTKMEQPYHzNjGPXS7PbeaizKmX4cZqP2T6nwXKhURG7HfuTke3Dqot7Fxh7BAeZ",
  "key38": "36hJafzA1psTW8Rrkmeecgm3GNAMfkndvWNAXCgMVKmNdK3HckKDHd3N3e2HaKxKAxpUzauTkK6cPuUm7m66drRh",
  "key39": "3ivjcNcy7VYEogmh16uSXizidN5GbXnQX4q5oMcrnzfHmg7kNnDhUHWNSPsehCHCXbRefgQxdgji2yiDmuLb53eZ",
  "key40": "3YzmKX47uV3TGMvP92gJbxkxMWNSJjpykiz2CtpSHjuteBA2fwVpHLtrfyuREpzhY1c19dDfRiYGvRTPsHGeL3zQ",
  "key41": "3wi3fwMQFkKKMBqzB5moJiP1JRfz3ZgUgEHnoLRxBqoBR6kpmLCWum242coSybmhy8ouSwdLT4yzMAb3y3H95a9f",
  "key42": "PFGivPmEdq39rzbH21KFvbga7qq5ZqsYtT4ABTcvcYs6XzycJniuHfi9khR61UmPJQs5G8tLSW8Ujc5v5FVJGCD",
  "key43": "3aFwQQ375TZYPMLeJjhRy14N45XyyUNg1HDfh4YjQ1QY9UrPB4UQ89cjQFVkRwfNKaS64bRzaQKmhhV4Q3sL8GiA",
  "key44": "2cJjzGhCtiwQAGYRNMxA8HAjaJCqJJ8ycQc7B55tfYUQaRCV6sJR18cE3TyAGci2eQ2E9bG3AKZh775Ua1Z4Qwzk",
  "key45": "SF18LBdgkVuGBod37eQx5onss2AJHqXHaXrXRYti7zpiM9QqELzKESjBQBKTeXsXi4QvRaVKoiDNADVU3r2wb1U",
  "key46": "3t1Ttwuivyg8iugHKBXqjQheucd3FUJJV9WgPiVwuwAXRcwinr5xFCWGmbS6eWBL1F8L6vJ2paAiSvKUgFeYLncp",
  "key47": "EX9ohKs9nZCKArBQkTVnvnTvtUhDooPL6hDfQTUvuSb8UGHQWPjEQVwz9ge27Pd38UbCBoLzxCwwv7iPUbNSVsg",
  "key48": "4K4P5yPVnsL3bLadSnqxzcEqiaYHjCvsihjuHySYKbfeDhpUWDYiagaLiWSjtYdEYHWvsRPek4nhueXZL1m3xVT7"
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
