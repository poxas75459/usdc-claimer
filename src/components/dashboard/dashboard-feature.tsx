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
    "7q1sCnjdWteTAETLvg8dgKdv2JjdjvujDHtw8p33RQcpcKhSDfSiTJg6WcooHHbndBRZJi1g6SY7T45YC6g2Cuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WXWEhpsDG2KKAgzFM524eoR9dMwCreoCzg9HMGMHFtZGqWs8YEYEVYkf6CyvmsyUwJEXtBKTWXqhPXUDKtn6CZ7",
  "key1": "47qmLERuBpaRsYiyWaxskTeorJYA9dTi3ZYXkkc7U6ytadM9z7mn5FkCDymHyjSrbCngH2aq9w385ToB6RCPaRAL",
  "key2": "vYCEDuULHheV2WZTJtF4SV4Jou9qJDEqWGNn1T8SpJy8nUxmobQxoSDmfctw3yRzKNZiaG8APouDrwzXX5MvYPp",
  "key3": "5wmkdgWiSbce1NMMmutma4MLNsHQjiJU6F4ZrDEp31b9KgRD9PF6oxV4R7wjzoHqziDfBFMjU8ywtJG91ia8PbjQ",
  "key4": "3eSwV5bBkoEucPVx4DwsgDrHP6AFsRNxMgPygFrKvALSutVNahWvsqFeU44qELsUyrhthckpR6aanDpL8B3XXFzq",
  "key5": "5sf23umMnRdYJpf2kDa5EYZViBCLyNdcgeARtnwHjAnLXVgzMFN88r6i1xJytuAKwJjCshMoxZdbTfiDvjbekELR",
  "key6": "35QaUJHT8v6wLEy1jBWL5uCp6GqtNveTqiPbYArrd4fGE9iDMw2GbwcxSSVg6evXvVoLudJEsySTAEUzmmmudCaj",
  "key7": "4MN8GP9duv67uAkKpTDLrbJfdeMf2ckd7EwTALzacp5BfuGbYvSvijNnKvUU2PQ7dWBfDDwx5Qmz2eaAWV3yc1HP",
  "key8": "5feU1bu6M8ffdixM5zEWceV37DgkC3HRGiC4HV3YzRHZHdVTgQdaZbkPNLFRSUw9TKf2FcEXy75chJPgTuvFVX7o",
  "key9": "5qUL9daha5h9ve4NbBRrGpLFxPzgixHj2i3ArqBobwqcBLep2z1AtCA3jgbZZTguQ7dGXE5pkkWA1tXyMV4x6bGK",
  "key10": "p5KcfELZphwvhJGmKNQmZJeQngZ38dSyj9J6XGcPUqTKNZermyXTpfbaoE9bkm3HdtsF7tvfTXsLW2an9Ysfgmk",
  "key11": "5BuKN6GRgRtqxsHw6c79pzJfQHacXtwvnHMJv5TrDQSnu7siBM6Vu5ddxQkrGEuQQSWNBSQxzQKvUKdMss9FVDTw",
  "key12": "3e3DJLp1HsE8YhFH5SQbxUYtd1u6L2W9u1QWSn5X3Vv89xSG6n86NmTCLaWRZuBVWG2bPbr7T6KjYEh9QvCoGpb4",
  "key13": "2HiyFwwczUP7swMA8sg74jTNh8DCkbjKDPFauDSiu99TVPb82P4MF3d2Q6C1BNNuBdtonNMUPRM2DVr4rz9817Xp",
  "key14": "3uaNHoxL1HNXVQrjfrHJ8np4xnBk6sXQR7BtocXUKphbwS57bFzyvdPja3R6CWAx1yBNRVvpum7dgDMQzFW4WYoY",
  "key15": "3nFaWXgHs6sQU6JsWrsHWxAc5gnJdimSmSnjLoGARiGVzsHJnCqkCYDE5UzBi8qMuH7GTTq1bFq7A5MdfYMVk6c",
  "key16": "5fZzw9sVcVCKHMzehgZfGxPpzKEntoQQRR8vtC8Lkch6NyWtxdTp1Mzn62mJLG87qTJrLq45f3VoswgDv6EfVujn",
  "key17": "62wXd9QCACWwXACM2m44xkbQ3bmMceseBo6ZLibvTGSvspVdzV6145c5bGsiS3ttGpDiubLyxqFBuHWKSj2wh5tS",
  "key18": "4V6kugGKsnb32GZRUWL1gBWq43MTQR3WP8Aco35eieHwa34vBYr4r4xZzap37MrqLWW5Ybt1CqowqZDBxicsEP73",
  "key19": "2oNunsUkx8Mv8M9dMDB82RfoQd6uXxw9skBNYmCoNtQV8Qcj5GsWMcxJXgbSwrECBQVFFveaFnk79BrFV7GGqfb6",
  "key20": "QsPMgBS4ZBrNVsRcTkgiFdas31pY187YaQxgx1YYEzGzzjNGFg4QZRadDzAfi3u4dNyJrkvdoWn9Z7eMV3f4w9A",
  "key21": "2Ftd2vq3wAsGsk3RJoqmA19zopRZwZCk42SU9U8h4nXcdzMYkNh46PAomFWPhbjk4Wnz6Tg41bfGKapAkNUa1Fpg",
  "key22": "3Nnf1vfL8nXxGUZxskTSg4inJ6LTsSfQCvBeDpGY8XSDPfdoGZsUxcm8CVpxX3ebYASbJ3S2iXRzrVvWTphCJwK6",
  "key23": "59VwqKjg4ec4GrkKj5CH6gkd21wBvJAhqFZUSFDBJfxuGyddaUVpuQEvWyuac1nMv8R4HMF5JLesrGiVTiXjxHoB",
  "key24": "atPBWcD91VEiFAYk9oFrDXYgPzDxrumv2pBaP8ydwBnWej7kpgHu1FbcVC5vQGrCL4DaXpDdbqNGHc3gsyMkA9n",
  "key25": "2vQ6pFN81U1uBKR4hT3c5KGXotFXVTGXTWRYETwyFzyUrspuUemUtztjSnygv7HJgCxivnhAZfXKGw3kHUCXZ1Vy",
  "key26": "5h9aoKo9dDP3gcfh2ZW5ofQDHvXTQFhoPDVNm2bLr9PrvDpxKjFJYjeJr6Ap1X9ToGbDP3ZTFxozGbULg3x7tYV2",
  "key27": "4bExs5KdX1HJrLdBfJZWpdsQM5kvfuAjRY8X3BkSKW9b1ZHedQrCchFhM4VjPFEvRhtx7rPY5SP2ChborjUukdya",
  "key28": "4SxBwNkqfDEL4kPSGsKwTzqWtoNfRtrM1pMTfrwLN4QCzWBNz5pNR62M6tjkRTWKbZCbSYUJ64yTHXuR2JjHJb8t",
  "key29": "4BstYpkzyKznSVnVBToTuL12K1cSFwRqf7voWYeGCL3PnwBzLsPhgD3dyfCsyuZegdr2H1GbkeyEzTf2LUxYjdCD",
  "key30": "5b4Mr5zbfsBRHcxXiGuYWNhk45ZVd9EQshVtuVBpxx278zSHqUXcquvGAT9pSDd5BVmit2P6kjVGjuMakuDdMAJJ",
  "key31": "3mJ8AGHgwFEddk34KAFjSWNaRb1bpzkxDgYjfEopQZgNEqatD9Ndw3tnuEpWqVHMFho1GD5udWkQcNzQv95Z7MkG",
  "key32": "48VTJLxJbtzraGFwgy8ZYsV1jHyfEfzbsMQMYxMUFAjiJsPRyS3KmjXsCbFhEAMydamQX5T3NUJiXvqPcxSgKz1E",
  "key33": "3VPXbFTucg6oC2BFeJbRfS2LLk9XGD38DDE7YiKiGBQWPRo6pWhWpk4mKHRhuXBsbiDjXbccwCCPvEkcCfK57daj",
  "key34": "8x2RqeUGhmKTVq5k17yHPTLrRHQ89Bck16jzDcLzCfn1cicLrFi2dHxQ9A4hNNSm8Wd7PyMhLPh1TJ4nXsSethg",
  "key35": "wCNsEdi7FkuhghUecekTHMoXx33MpKqb4agXnb6xNZSrWh7R6NjqP2eFdxac59SjkGsatUcg6SbWEbVVi7j3TZD",
  "key36": "LESMeRAi1SoC6UgsvYsJLfV5hV5SXnFCRLTCtpzzJf8rPFLDPZm192uTUDxgNavxqGmVqg6gDePtRG3J1ArcHLM",
  "key37": "4ausKeXREJvCFEDw7N2Hfekf2gZJpDJYbe3wENvfHmGoScBYG1NoKkjKpmQeMTcZ2yGsVei5Ec8uzwZxiRdBQMTF",
  "key38": "56KUtgxH7Rq9sHv5cgDkGwjzgL9HFf2zGuGYQky1ZcrgxsKSBMaWxdvMBLqX8n2CJ98nUWbb3DaaniJydLFJSVd7",
  "key39": "3kxY1HjGbvhovrGbx6eC4xyB6FTkPThC13dafYi3sT1rkAWnHJrJsPQCWQw6mWAaRTkjP6bWUQvZPuxSaLQqTUB9",
  "key40": "5vKHj6ksWU8Adb3foQyDNWf5ezJDVbDNdHVcR2tRzcUPE6CBfSQiKq3EfE7ghq2rvbmvV4HsfoJXasWpqpFCQvqw",
  "key41": "3BnHLFrZExDFrCuHPpjNn3LUTWEFyQdR26u79gNTSuCPeVeJ1f1ycAe1krK3CG7zz7yeeyWxWvWUd9TWJnWJQdy4",
  "key42": "bDZEUswFm9wVP2kgeCjmvpktXey2knY2XavFmyzMTf2uwEAkaqP14pzC7zY1dKZMn8NqmWfSEuMrJA1NjxFHLEH",
  "key43": "2MVTgmiSu381gb15KDkUzFTqDzcLDnUztLmhyDRQRYK46btN8UpUY7K8xz41ieWMarXFuXwd32yhyG7KknvsFBJH",
  "key44": "7msGo8rHLxUFnMhC6KyJfKCCww9yQvE4kEuddmiuCqdWv19P1K9wqUevjWEi1qvAcVMXa815bx4adt3pZUv7eMJ",
  "key45": "2eJbycQXPZrZnNU96kUY9Tc2xpzqP8YXrpKDDEF24ikfvzVCNgfpHDmKsnT6ax5jw7MrPNJ3AA5SN8dNhFC6SsSP",
  "key46": "2PmnA6Ms9heWZMSB96HsrPKCpFDz6fz3L3uuC5uAcqBhgarav9u6buQZFDdDVffmbKFNRwMT5s9U22RHeSjTMS81",
  "key47": "54pGogvanYjYsT3dLrf7jxSH2rjUgW5GRAEhzvfJXu6BFFsMCaaKUJfX7YxxbnDercwjBuhaXyxgZuRgC8HkTVGE"
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
