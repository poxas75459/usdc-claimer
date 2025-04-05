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
    "1TkZTbcqkDdJJKiQTPaZZhD2oJyJhKym8cD8DJeNCzqFLKoux3opWv1DmqMuPxreNs5jgGB2eQR18t3jtHzU9AU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25GTyoVQpKQcuNZ5UV7hEm5s1QLkC8ervp3DMrP8diu4hRFUDRwWUxJC7Bj3HiE1SyQ5qr7rkC8f8R4xbnkSLG6f",
  "key1": "5s1uPhQnsKPFPkLP996y7KDwnaK9FgWp3aK9uTW2MweywKNLaYeXqB3k2nBmey7nt9MKACijH1zfVWjn7iBXzFS1",
  "key2": "37sTAp7AKR8CLMcn4Akb7G2bLCBixD9JF8S6Dhyb59K2N8HsSm8sWkf2MHpUKL4GSrdtwD5riuriqQj5TjnksHFW",
  "key3": "4ABLnyzXgavLzuDQc2otszpevxGiy9tnTV4n7Tm9g53f5bEfJkEq5jdh9Zuu3ysZdDUAdR3Ug5nFTQqcLypHWLxB",
  "key4": "etYbKgSewsVCRFKkt5iFk2uKrSTDpu8weCxmigkCMgK1e9dZaLpqZcFwWh3Kw4evh3e353kwJNc6b9o3p2JNgcu",
  "key5": "5or8JriGUvkJJ38tnV7i1RfaVYKJLUcVUsf3Xn4YNz8rvFrCi2Xf2DAsxWFut5GSpm6sX8E6kJs7UX1PCBA5MdV8",
  "key6": "3UT9os8erQ2qvvjsi7cxT7UFJPj3TtRigkZp39y89LVmp9GFKqYcxK37KEkMDEkM3t8d7ButP8DnkrBmjJL5W53o",
  "key7": "3iULN6Zw3Ri95pUSxmenjNrjB6yrt7mPJAeLNyKKivFcYHXauEcA1bZoZieUX91Y8p2RmxhRkyLPxJoBg1Aqg7iy",
  "key8": "56nuKaTiyViNStABzcQr9FQD1qkH3mPid4Ptw1nTLBeqgmWpaYQwWC77BBaub57o1hdRQFqV2y48GncQyoutruKD",
  "key9": "3dcbdSWVz5SsyDp4CCtnHhYjd6iWuiL945fRQGfCDRHK7ZLsGpkWt8Nod2riZhkXcSA8NQLojq8nkoaM6Sx9xJsL",
  "key10": "Fr2YhRmPyAAvCasdJDYiEPg4mDcd3Tc6tiGSeUYhciWXihU5SdZU7pY8LK74XawriaMyeBwkNqDxUUWTcoku1xG",
  "key11": "2T3817UdsyCHhwghzBuRKKSpquiSqCFmrNGt2giKmPxjQEwJE32pZFAnmd1ZvVyASpqvS4TuCjBQhTFghbZarD97",
  "key12": "QLCwLQQ1UUdcaqcvQPWHVCZLrNggEoeEdaC8WWfFoX2NrHNU7YPBzUDM4BLCJAjj8BURSdWWKkEDEQptmZ8BXdi",
  "key13": "3PxzAxuvpHpXVtN1zxixmXpVGFX89fmPQqETbNwbqzndFf2bkV5bR1qzDjvL3mWCyBnTgoP5FkXyTK4GWhHFgSEc",
  "key14": "5EjYMZFL3FfokMDNeWNcz6ShPgTg5ZNW8Gv9sqSH8RQaqrVkwVvHEcjtp9xLcspfTHNebpynfcdqkNyCWvS36HNE",
  "key15": "2RVmgwW3NNS26nhzbjmK93RdtxHWwTErQXMStDUeKQiwGM5vPj98NYBRFZ1M4yB3rXb6dCKvMEZoVan4FiNaMko7",
  "key16": "5smR8LNXGQnE1iPuqEK1sbfJfqfKWwi2axQbxVZqkgBHXkqqQ6DDnadRWT9mGXjPSboe2Kzo3C8f7XXobzFfNM9t",
  "key17": "59z3YH18sT9TyazhjW4FDvWqFN7AmfAZyWCePAPWCK36LXTJ1N8RHCGH3FM7S5qpGcKWE4QBfcG8iHhpBoht7Vbj",
  "key18": "Ue1uyworGhBUTZRXr2wfTimB2WsYYECPtPK7XZdpTa26ZA3zYhR6VFkYCCzutRQgsaFA1REdsVFeWvWJyLGB3Y1",
  "key19": "4wLNE6s68e9ohp64SsK4Q4TuF5XKSAE4Yy1bJNPtpxPNB7swCpDdZvXSHi9cqwBpeymhsBvydChGgKhGKTFgMTCQ",
  "key20": "wBC1XWmuT2qLvBiAmonXRGNXnK33JkEsay68ckEDUik4RfSm2ygEvP5W1A6Pf2BxvSUGwiubfyozcQJC7JiYK19",
  "key21": "5PT79joW113DMwAm38dUkPwYyTq6tmBdDJbtv7B3DhB8U44r1VXUz717jS9JPG5fBxnyRdu1dvZPSdCr9pQML4ML",
  "key22": "3kJXmE8QQ6Z4VDRqeHMyMWvAi7VXEaNcGMZsr6N54U27h34t9FguN3xTvExLRQRTQs9avNBGTViJPLan8VbTZEjM",
  "key23": "3mPCUo6Hjbt3BPgeiVSwmNxS4uPguYmVRVzgHDt9SZcs3XcDzDNQCfcbAimx4mpTiJct6yAYTuBmzvtxW3bLMPY1",
  "key24": "2rYm2HKTznc9bLroo1zPQEcf2Q5dvVVQn4wQbkzy44zLwuD7Z1S7LMWGS9kBaLGqdR2P1EBBFUzbfq3jHtmEGeqp",
  "key25": "4jFKbbqeRm2wLJQn7MAjbV7fmj9yQ7XStFEUvbrPWBzbBNhwGEr37g3g78316qWrhVxiU73TQm5uEfn7rRBWvc53",
  "key26": "555aQNYeYvm5xRg3VufjFeDo7WS6wpQWkm7UwnZN8WgCpKwXwcRZTn14yKThMaEG3FxQCCkMnCfBpWjCgu79pevC",
  "key27": "5jiaVfwd71nDFgvJRQXF9X9FxxJfuGfL3rsN4FfrZkZL4dgv21zVdhyTNkjCTwpBmppw52v6DmWJb2MiE1uP4Gxs",
  "key28": "4kHHz2LWswkM1uoos3a5XAZTqv7Sy4Z2RwNzWZiN35HcFXJoSuMeaojyQjeHosi2fCVpbnZWkfPeMcLLTb83SHZJ",
  "key29": "5oz68TbDLXD5jmfU8urhkE1ioDJ3hq5jZgpyW869WrhrrtHXtfdjpCm1f13rZ5r8rUMPEAqMvk5gUTA3BHY1g5kD",
  "key30": "5J4eYwdpc4dKWXJWgWV4XrDCXEjxhoQXFiJyb297tRU4hW1yLnvzsFEPuS6gDJ9E2JmwZJGTai8Tuj6GFESjmanK",
  "key31": "42yAc1dCmEhemGJuh27CZA1U9dSGm76beM7mMns23Zv3wYVm3pKypm3NEC3rRPb6xPk4qpxo7r46HLvr8MdsHdpC",
  "key32": "4kUVqahXmLQztBPH3b6dkqDmt9toRoFYWKSWwkzC4ngLCWBufps3LNspPAMbuZRqFbcTAoUgkkXi38ezTB2p6hxw",
  "key33": "29ZQZXTtM7uhGCSnKEhKUDs1aXxBNnm7J9jXV9bS2MxzYP7BzYwuG8JoRbmqX4st2EnpiZk5vSuL1TJeApmHsyZo",
  "key34": "jjgSbBEr53c9JNJpebnsSjodmSgpoPJEGUbEk3beK1wfxBg6JX4mZYvxFvQ3oEpMEQ4nMwJEuy3t1ufNQwBnTgf",
  "key35": "3N9X6B2xcCfMcajFDATWGKFEbcygSoaVeDhhBJBNAPTqWzD5Mp2YWgfyTYrTc6i6xSucJw5jPYLsDwvERwDrLGRP",
  "key36": "2ue3Ew8CG3uR9gBkmab5PJRHaykWhneL97br7ArGEsGYu4SHYEvvBkKc7YhHQfmh6Lnvzpy9z8YjBjwpktkHgfvc",
  "key37": "5yPkALcbo1ac9WJ62LD3q1oiu6nFVUMQukatL97SLwR8aY5RqUjKCUBPWP3PgEtFR3RzamcyzQyXkRrbpDBgmLJN",
  "key38": "2Wz2JqQGufXi7uXfvYuLhAZ1TrHccBZXWeJdKfo5tifriVLx1C6HDHNNxp8v17DDLKCnKcNZyCkW7aEdXdtHhQgB",
  "key39": "8h6rBpuxHamkhjQ12mxPTSP1mRUDyGm9eDbztXwGWbqbaSi37z6WPFn17uFssgahY6eJ9CwmjqFBzjbs9K1ikJ5",
  "key40": "4s9VAyFJXcJvVa9CMg3s9cn8R7fw8hJ3XCft7SvzeJ3r4uQkvNM9mhDRtjxsaa5caNdUE8BisTuSj8U7rPsXbbaa",
  "key41": "Jai4phXY1sPjRQxLrUKrZ2SThXrN8TFsju2QKKnGXPgd6YbJmMZtwbrgxAbojKWC7v1CSoPqxLeUxFeTmS31KCw",
  "key42": "3kw1dBWXhD2hijxDQPiY4n9SamcXoheSS4rnVX3bxMeZpTQUhcvoV5iRGKH2UgqaiPdV6VNuq1PmTiW7ozhCF9qx",
  "key43": "5rESS8wwvjNvCAeyguem25XfNPvFmuk9owmsm1qXMDoQJsztGy1KJ7ezSaZZACDthKnsNSRcW9PUexmT9tekciJy",
  "key44": "97DQ9iF8QzgLa5iwJ4ewNn8etHoZhrWczESwdozFiy1tBiELrWXPxptKPry4CxaHFLi1KER7ZSdPh6z6YJ15bnh",
  "key45": "4QzYCvAz2ewR5RA5HcMdJidVQ9UZPPKhCUBc5Td2JohmwwexTdu1usBStt1JfY5iWs1vmkFmMWviUXjGFMaebcZy"
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
