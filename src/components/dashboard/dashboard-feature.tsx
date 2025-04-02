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
    "2uhif6CTV2nEVJDPLtWVY68i9W1kSF8zCYU8B4dDbF6Ve4yntFXrrHZNo5yV3wKJmxqZDYBQME84eZ8CPYfecrVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxhfwmifPH8JeDjRtckuCgUwd3xgkhtXbcqcjnkwmYEsbEAbJenn9kC1TfWAf8qNM4U6q4eJGxDY3MznCywKw8g",
  "key1": "3rkPNnCSo6c7kneUKGUmPnoBdHv2D6SDeTEJ4u5oPcTXpsRqxx5P5KdJx5YMFNDDe6CgfdZ3ZLhpiFF2zDfnXd5C",
  "key2": "4FCf7DykdRhWdVgJ9P88hVfJ8zx5Y8VunBn91L16sZW7NX9By7Khs4z6D5DMWo9bxjruaepAWu2L5i3h67gCzTmr",
  "key3": "5AaY1iaSfpHVitLAAb1SjVBpKjyzaisfeZqWF16FDtBtUf2rKspTUbxNSxzcxMp6iE73Ja8xZvqD1LkYQWcT3km7",
  "key4": "RgksDh6nQhwhzAyGWngsi6Z6zmanoJNVT32heKh9A6cvHRHW9NssmYQEBr4M8ZJMVW9TPSikiRMyH3Gyy5kYj7R",
  "key5": "4FceCjBHgEfXzZJvLZPmhnNyFpbVZBU47W9d1L7aPjwVcaR5gLcGKy2zd9F7yJEZ1L9bu7tt9gBtdGPu271HqC2y",
  "key6": "3A529gjCTJ14QLyPgCQGwDrYUVxbvbvFD7XXLK5RTT5pPo9RKjZqRpjYSnLRBLFdCVf7b2n3hY7VjFBjeb3eFiif",
  "key7": "5fRi5zHKbW2u4qJ8dgTD2wg1z1B8RKD1BZgG6Xh319muHpBbzMo6RAWiTWKyEmNvhaTmhWggPxnxh6MnvPFtq5C4",
  "key8": "8tEmakWvRXYXpUBHhBQBwZTLXgQNfuCcreiQiiGxxsjdLjUkM7qPTpVtfpUmFQFCw1ZgH3XXEuk4RSN4cVfx8cZ",
  "key9": "37eHNbPVNA9YqGxZBLjxnQegSwbjYELCLD1aj7QhsVZfDVseYPULzUdrjTfPXjdWc4khVaSN4YSLZUseAyjGYZ31",
  "key10": "3z8BinD2xu4R16BvEabamb74V9ZGf6szAX4BzjWdqrJRQkFwe3w2j1QuPvKQpMNS7mQkktk4LV6sg6bVokMr9Xct",
  "key11": "4VDmYwHQFKCJnK9cqbVVLdp18LR6L4EuEvgBzVhDrDdRVRZySzjBTUgptoVmcshLUG1TDbq8pVLhoQVrkwaV82YZ",
  "key12": "31mBi6SKWzUq4Dc6ECzi4yN8Lse3UYATgHTM82Ju28hG5KykZgCiHg4HTpE6En3MAwbZiDrEh8g7JXQKgVV5BJzh",
  "key13": "27bwcPtSXdeggt6r52Tt3Q9VkQK142E5qp93t4kDbABNdJDp7m4Y3un9SFc4VDEBPHd41PdmFLZy9cHy7g4Ed52m",
  "key14": "5oKG4N8d56L1vp4k9ty9kQaifK4g1x3YeVbBMYaj4xE9TPR6GNuo2CpNJEpqaNTgTFVXsvNsscqwM9AewVhz4Vj5",
  "key15": "2BEQT8fjTLdoQjtMq1Yg3ywEuYigiWGVPrqqaKcCQjxwFnoGEoyZHCcys7u23UN1wEcfupg5HYk7D7YP2xd2ucQD",
  "key16": "51V8jzyjxuyjf9amqR4oYeggqQv5kumqBNaLNBNW7Bc5X8cvis2XssZJoafdCBeErpBx1ZcdrvSMD33Dq6ZvVujD",
  "key17": "2wv62475481Jc2S5yS1wShRjfvC8qkQnDfnt2vxLhtVeMHKaZ63cR2FEYB4faJnGfokS151ZhDfECbCCiHqYVASn",
  "key18": "w5eKNNeYBMLMNfgUyfFLRWa15cZU3nnSzVQ9DPhFaz96As6v6sguUbL8DvH465gswX6dcy9VHNJFJ5XauMWhzYk",
  "key19": "5G6AM7MK9WHMc3CYsWFkMjfrK2kfAmgpgwU87A3osDig8tFx6NihcvwJN5DbLaZ2NNumYT9PmRrSC59TmEiD3Rqs",
  "key20": "3gaLbff8VoCJ6eHRUQE5rnNUPe189prsm75X7kh5N1V2sCFfX6VmrkU8D8Eg5FsTnB2h9bkpN3ETUJ9xcRtnFTXU",
  "key21": "2pJnDoCfQ8RyLJ5QyCGUdmfCye18HgkaD4Sw28pkkJNmbZd6nzdyC75UNPiS8gT3uszRbW3czKCyPawKad5hmWgm",
  "key22": "2dgume3iPKBoA772o8npBZnSvdp1on7nk682tMWpXafwA5gu9RX1t2YBCteXUDCZEqBeqJHzS8FH3LvoAj5r6Ygz",
  "key23": "4tmY1oKnHiHo6LR88vtLSZLdzEWM3yukKet5a9zAqj7qPoZeKbsVudGotokmHEUUArbVuwZ9DVLq2eg7KkftF5F8",
  "key24": "5BoEuETSJoukyZ7CXhU5a2eEpjUJVUNHDYjthMsnS8p31bmCYcJwrtKmwRPhGBdfCEgwisC7Uy7bMzBeJEturcVK",
  "key25": "oDKCXGSGzG7w8yaFM6ADww8kNVifBdGYg16gq8BDsVM1j8NhXwYr5KJnqQFMxF6dUxMA4xxFgJnXDbTjPffEf41",
  "key26": "4sPUmQALahNgXoNexWt6YgWB3duQUDpTkWUpTGivAjfnQRLFAwy2JhfgddaPqJeVg3K7Pa5hSfVYnmDNDyvvfJ9u",
  "key27": "FFCoVFG2B9ULreqsRnQFGo7EPC91hez9nLjf3icPoLEbEu32CLkskrnYAGSb73Z2WHPC2GxJGAVTR3fFQkA4HAD",
  "key28": "KbGpu2pPBcYa44BxMnpPffVA8WYnqFPASKHHdbdnXfQwBQiD97cGSnATt7xaRW28sUbyUodt1jCJAhriozd9gTU",
  "key29": "4tpjQhKd9JUUQka3hVou7dsEPxFcTd1zvaERoJ36ijzR3wKbGUJokYiN96wABtsronAnuD2qLtbPNktsBPkjZsG6",
  "key30": "3hEhZpCs1CKtzMcXiZhKkSuGpNSvmfkYN7c3xyR1voBR6k4YEt6WqHRrZYba88XXxCJx1CDAeqPpGjZD8ydsohD2",
  "key31": "4EqZFjswy2GbpDAmhX4UNjCzpNB5HoRxegKSGTktgu7GG921dgrStLM9EALcgx5yBb5QeuAt4uC3TzHCx66vZvot",
  "key32": "y7dWSg13ywSxEnxht1Fj68E2JzvZt43oFHaDsMWRgiTZDcQMdb1rSUZb5Coad7s9CgyTzT3BV9VwqhDFyMcdYbr",
  "key33": "29pM4uzMD6EcBSyENwKNvRsFK78impVHrwouT7BbhYfsoP34XJ5JJTh9M4QdwqW9DZ1jkPjySKHU7z6M67dGfCky",
  "key34": "4kNtCsEbUGpRFmBW66cXKgJ71LfkkTwwYYCwk9eiVZbsfUFFHA4HbvBXLnxT6YVmRYJBad536N6veBVNtDrvMbzJ",
  "key35": "3Btc9wiC3yUbJQgwFPdDu3kT6cec1JqSCA6QqRB7bu8jZmhCyeaUsM1FSi6GzJCHsw6Wt2FaKXAdXStAw3ErYTjH",
  "key36": "5UMGxgqwAte2eojZb3S5g8hW6KgHVzWzHnV89Fd1rUvydi5QofMtpjksysr2wY5GF1ZA7NN7t2bE7GgsYto4DKwu",
  "key37": "3ji1eVPFpYKvaE8Y3zdYGJzcAo32pXYt8UCLeR3zukhuejeWS6GwGuyRyTT9zavzeK1kJ4gqfC1qKY8gedsjpMY1",
  "key38": "vU6ossLruDyH81pS8T5dE8h6PDK9qBYbonriNW53Qfh7g4QyULNiR2eRz5gAeEM4bmDaKjiEY7XZhBhfovRBTw9",
  "key39": "4rh52JsVw1zrjGzXMJ1bt2WDWoSNQGXcVnrAjnbdSxsgjUPeWchA3Ze1GZdUdFw9fvB5eEByhSvyxVbcWBY9Xn7u",
  "key40": "3gr4X5yKZKMNq4gJXmoVpUDBH83PBKjwgQWkcYibmu51B4P6u6KR9A8yEAz5s9AXHcFWTVFQSWkJyCwH3EELnoVd",
  "key41": "5GS1dr7XQSQqBoS8hpFfnscLqGdxsLoEe8xcxC9Z568KJVCSgVKmY1mk2YaQ1CWvbFh7PULPYcUg2M3PKuRMaR4T",
  "key42": "bFxxLwCFYyCfwfUXWy1DxeNswEExSknD6vriEKsXPWgBrVh1dEGAavfgdv6Rv7iM9JJwqkhvcXRDYLQdY6P4VKG",
  "key43": "4vH5Sk2fNmnFstxnWhzbWusFEC6bQwH9SLCNnhkeSsFKKShhRvHGntgE8xy7QdNoBwsfVec4Mu4NLqnPqhJjSJvT",
  "key44": "33t4EQmzWZYvVy7d2J2Hk56qZAX7Z68tx65RmvEyZr94TCXTCH3GUKLrAwGgGC8bWb92gWjQsQznU2gXZcG7ds6B",
  "key45": "3dwheZU8AsUzFa7GhjZjZk3eDG3aqkUqZfur7LsKu1jzfxo5aJEqGQxf5pRFYPfTJxFh61rbfNDX7aLSyMeSBewi",
  "key46": "39bqqWLDcGFcVmQPgWEv2d58duFrTPrf7QxariMryWcijgSN7SKH2vbUq8M9LfgTyw6dhBrWfY93gy5tGYydL58Z"
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
