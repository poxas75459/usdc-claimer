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
    "2taeMqbCcL3Vun6frUwPDQQvK3VTJG49fLj2GwxbaWmXYDmoM7P1UAyn1apVjMLuKmrsqYyuW3QVwpg8whbnk4SV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2sYvGDpTRrKUk1pKszAwBGfbBUK1AQcQfmwKCv6kVW62FAM6ozqkpToL1YbZYF79Xd2NfSMqGkKpMSU7YsVURC",
  "key1": "3UmJibfnWX2M4nDM7E5TtHHRtRcXtynuqsGmgo6pLjMRFaQfn2pFPUMjb9DSd2DDH73Fh4vKtreBUcYnT6vk4Qxz",
  "key2": "4wfdNAQ1Ukckf4TWN6T1hTeXXoi8AXVqvjJAyA79Bq7ANS1ai3q44Ns47TDMwDJQFe79yXqyebPytcueDf16vXvh",
  "key3": "5umVV7uzHeCDaR8sNHn34umDMH2H7w87Rwq7xLd3UYR6YNwJ1Qr9dhysM8NSY6GxJqtjFDEvH5QwV3VVZiRwvXeN",
  "key4": "2JDZMgHy7CMYhixmkVxEtMUfhP9Yrkju1Fkh4tanrBPpmbN4y8VxVgXhQDGQhYYs9NPYwXQydtvGGhBBhidCsZTX",
  "key5": "3pW6LYinxDpLxSSRqxiXfiywhk66j42Rhz1HabfdjkZsA1K1wUMoyoYu1e7DMquogRXHqTwSJcVYM9GVtD1Jsrpr",
  "key6": "5d48osDKRWZDS5t4uQiCpDs8E3tHCveqMVJNADUKsAnH16bWteAcEwVnUDF1RRQGfYUyZqjWhGuUdg4MKEzhtxbQ",
  "key7": "5KaYLnxNmyp9fzXcPSM4JEEqo3e5juNGpC4PT8KcW5k5ijvniWjWK6furb7EuJ7z7EBR5N9nHYovTStKB78Z2H67",
  "key8": "2ym6Y4XBZZboyeNHWciKf9gnEXExr2p4ZhPrcFVYiJcHuAeRofTBWRqKesiJdNMQYVPofkfVy5B2ZLwJtZSYwpbX",
  "key9": "4B4WK4ESKnG4VHJGn4TaqS4LzazPAJij8BdyhUTd4o6si2eDw8fou2fnkgx14KNTEn8bwhNmMCwQ2FgZgHsPVdAW",
  "key10": "1qqou4NnDXb7WyfTDdU4VAiQ12quaLodzjNt5oitMCN1wykNqV6xe2W3d9uVpx58s8Zb3pSQTs9QNaRxd3mMAnp",
  "key11": "4NuXHxVyVjaSSPDeKignyN4HMhaDyZcs8Ybaswa2x9vTZERizQ4PgN9wijYUpgtTkyyzK7anSfpjTcXFBovQqisH",
  "key12": "5XbqdNNoT1S2iVa9vp6Fohk26CkxXQ9xLd8WDk463d6H72rLJTPALvPz5XamDo9wqkERF7wApT8Vc3x2KTrmU1R3",
  "key13": "5uSGPiMh41MAZMnCyMiTG2ZUH3bshS8eFbRKjz2r8LqASfifN6okJdRYjakKtnCG5Fy9TpKayZfWt4UvgtDRLSQG",
  "key14": "6WfrmjnTNEd8Ka8rQHNXL1sVgNzFh8XySp3qNYfEbNmJK4EcF2jRkUmkb58WM71SPCch6gAGf4ihduf4wW317oX",
  "key15": "5qbQc2Q9bBjUJPDDVY2RrDxcZi6sGNHkFNv8mVpUVLE84YPbw5WJwTpxNzeAiYx8hgQjfG5kiy6baCQXjGtvWmyH",
  "key16": "ZpPUet6oJtD8wfE2zXaPvoPFRzyayPnRamv2eQHSH2LG892UsjpvkAYwPsJ4fjH2RKtPUxktbPfQjmiJW5NDdwM",
  "key17": "4omLvXPQMt844mxNLg8NVKmxNLaMh57UV2Wwby85y8x4s3SFSN2XBbTmeYyArmnw8mEaiP8jgBQhbcrvi1dW53Mq",
  "key18": "GAfiRgmZwS9YL3de9qwgwbXQn4BmEKJVimpxXmKYwPsdYrAR8RSLNTwvAbFuHfs1UQ4GjXSCrnDLaNGGuWMDQp6",
  "key19": "9qeiuSZm2D4hd1PWrFfg3a42T4FJYtX2ckzTX7YtqjeiypnKiM1HwYXXQUHe1C5JjQK4vNKFFZqHAVABFErBwuZ",
  "key20": "xn3ZZ2WX9fbynJWavmeF9exPtYH25UQdz55htV8jA5zAdYsgUqqBq7Fq5LZPJn6yrpbVua5T9goHBkvNbVaycCn",
  "key21": "nqrErFvoedyynyvgYsah64V8PgijAw4JwhUHjTG1Eh4V4UXwCArzenZxKU9BFnpidt7Qh1irnbzoTvT1DTYotST",
  "key22": "EzavLt7ji4JZECUAnSTaSmu9x4KWuQBijjBgfBLQyRqZVTPWyKHNxK4NJRQwSqqPJdXic6yTTAC4rdynDCJzsNp",
  "key23": "28nJHeGsxvbCkzbazLy1zL1Rv7XhpcyYBU54YmLtBorz2KCn9jydWG5eofV8CDQSjmh4oWS96caxzSZJHn6Pmik5",
  "key24": "21Vku48QDepJWsWmJkWppVsiwupnT76UM22ZA5XjS3gD14BythWVyeAn7sWrA6kYjExsNKrn8pDh4tAZGzNueiXV",
  "key25": "5bRLsSGh68jSxMChkz6NmiT3XJeY76DefzwvHeV97YLJdg6KxQNqURbvpJ2RV3G7DfqgGneFcubCtVejhqQFYPyb",
  "key26": "JhXHPvwJmDvdzuZz1JuNLoakDtyTjMJ5QT5V6r9NhTjmrX2oKKqJ2nv8Gmzzb8RndUuJrTJcd6wUW1A6L276wFg",
  "key27": "3iz5jDcZdwZzKtbuou8T9nGDSEqekt6pYp6ZFFn1rexjY1rV9y2oPUsYLFjcfy6RPpD4vZQDtBcMDq6Jk1Wi8WM9",
  "key28": "55C2UvhS8LvLaZjg9Z3ZnU9kwzC5Yrxp6an9Lg2EG4XotUtu7j7yjCbCVVaexdyVGcNckDUozkCj3DEAVrVidEGM",
  "key29": "4VNfimAwfVPbk7uCCqGaRKXZfQ78EPg3iyNve72TDfFowW2tHdc95VdPBuES2RS87M8SJdJsCafUxZRVr2HhEF63",
  "key30": "2UDAtfdL9EioA4xmvzcjf8Bz63zXS9J1vhRPSFQ2toCtBGK18rZtBJ3zfS6FGnKmfe7FJy1qbUGfwvLAp8NrUT25",
  "key31": "5tAGD4LiFcCa1WHYJxAEua7w5VoXTgEEtF7mYBkBtcgyfjS7GQVhSPny3ARbstPoi9mxy2YhPEm2VBfABqWPRZSh",
  "key32": "5rbeFrUZNFDnz1GcuhfY8G1L7aTv9kcstMFjopHSBuPAzCHbiWBe1ZXqZK3LR7dqmtzUxZtUHVHZ6LCLZUy4fKkx",
  "key33": "3vPRF3KYFkX81CVkxrHPhWyQta9KKVmwWGkAeLhE1MuBDddDrvjnJQQH59et31BCnudHghZGhboEAuj6nvzAM3zW",
  "key34": "2X9cMNNwi1EAbpcWedLzn8ukApyqmtEYqfcGyocqrqUYoZjqqAcH9Gut6mNh2whch8qJdB7hoVme9m6psLiquKfv",
  "key35": "5N5Yy3DQfCd95PrE2bubJ8sBXY6Q7rFLJ4evFkp7CKTNEjYxZ7XLxShh4Qb2EvVinCHW63U4yBFJR3KLPpSYm3ix",
  "key36": "48KFMEV58PtPyrmbdWteYVEHWaVe8gYqMUyopu756uEikjGK3cyuiovC4QehempaqyMxPdQfyMbnXy6Kyuh9198x",
  "key37": "2fJXwSBmsFEVUhDj12JBaos8Ra9d9j6hVqagQjekpzJYyh3KC67DiqUFdLtrGvvpdnqx4fwfW32uEcySqQxRvgF",
  "key38": "2ebkxf132X1qsHNx2F93C6HGjmCPKbggfd2PCSQwiX91vWvTm18kD7zJtKiN76NSH1m5avhcRcyrDNkXEgvcQQG",
  "key39": "4DtE46FUqpcsMvraM8jW1Fgw1XRcoiNsPkGk4LkZdAUkMAu7cN6xiMpBvfbHPJemBRzyf8bDQ9a6GJbCToej6KK4",
  "key40": "4C97566VraJUzr4Yc1LNWBabmjPsaGvyqoax16wx4DECdsN1NgF71nP7b6H5eSkaj5qLBvvueEmwzvFgTJXaGAMA",
  "key41": "39aGMq717LEDnEtiD3iH3daWo9MVjP2ojYAH1A2vsdzhyrAtoU3xPyXVnicGhhEPrJn31yHtvUFSf8KdGcRdSca2",
  "key42": "4ZT7bRW913p9qjDPCBAFr8nMKeY7UnEw1ng5Wptv6EYWw5nQhqeT57svEezS6EwmjQDFm9EH59j6kUV33KVJoMVD"
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
