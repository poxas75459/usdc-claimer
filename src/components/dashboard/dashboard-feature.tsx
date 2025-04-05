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
    "67FBgNK2Cdh2UH2VGD4yk5Nd5MoWbYfF7dsHWeGoh1W9ZaVgEwsAuTnhgZAiWNxyRJAuwKkisC42uuNELmJQiGy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xr6mLqCKDfK9K8rE9ZFhrJkwb1ikzybXPH2ekUFHMQNJ9JpcLorRdgmid4HfnVkGntGfZpgY7PJT5P42FEz9scp",
  "key1": "5Zj1gK3qsHUzM6RP8i97XqEx1KcGHgVA1KqFuZvh68r6bEhPS9dcm94hbV7rqFo5EPEapHkLsTmkfiGd61RAw76o",
  "key2": "4YPdjzCtzpCBTWcWpDU2fmMwyYsG35jKTnXB6KXWueJdj2gP6o9EvANq5CYcQpGBVW4qZaB4KB5RWQxtbjQghA2c",
  "key3": "4uvTkgmkmzDCjYZtC6U978kZCuHWsLtLUeHFBVgfJRvUiGLaeMrT3fr51g2JgL8rJpnpKzFG4uCHnNsj9G2fy4YJ",
  "key4": "2hKkreyAMvkvPVQvKoDFpVMquUaiddzH6hJVCYKVuH4kVSwcMoVGwnTNamms1zEJijuAJ7mFyV7KNY6a7vdd3FK5",
  "key5": "2QcLiwLd5Pj4stUZz2xrwaUB8YkwBafcPzU9jxzgbuEZyfYBQtusxMJ7X781svvDMXTbXYAFNVqED5YNbYVSLs4j",
  "key6": "5e6Gbk5NSB27yVLggmMuCepGCZui56fguDM4kkGRk5UpC5YQPp8qP8XLwVQU9VfKTDq3ZHDreS2C9UvTDG1Uy2CQ",
  "key7": "54eMfzr9G8aBZ6xrawLBQWabjAUyCtMzNxUAfmAcWHUqBep7vMXBq9ADruL2YsWu4LdphmGWnbepwJsa2CJYN7uE",
  "key8": "54zuybRLSiuVJCDDCApggKwwF8hkGfzpKAjQWdagxtwpsGDpjdpNanHbniPvAUF3686yxFySDT5heb9gjkUfG2kT",
  "key9": "5pJYmkJUCCmWgvVzSYavFv7ewwnyodogFwMpMAwW4nyScmnzKdFsepVGffMYmzQaZkbZMWJ6WvvQj5pUVFkDS69j",
  "key10": "291evHAwYPL1ZqjKdQ6D7p9FNLegkwXRoM8x7xC5WfY1EwTkjhkP5QYqNBQPbNCepFYkUVmE3CcxP2s7RJKbSwrQ",
  "key11": "58B9Nym37EkdcCN8GBVhSdssRSeKo53qhjsxcAGMiH8XkwKSMYCCQWV4xcbCe6rJHkJQCkyJDb8UNz8bzggMfBFD",
  "key12": "5f3aCM8wPzjYdg2eH5dTquYrgNhW4iAvsLoUFtFRirx6x4Y7Eq3gTFynB3UYiTJMtgGbmP2Z2strZ2rMKKsEWNXh",
  "key13": "dAeuu263pHFu2cxnLnwbYbZNSHgoKSHkCPzN6mnJ8UWuwtAT2nn2aGHaMVE7h16DaE9AgKpDURdHgigp9zQzay4",
  "key14": "4KU4w17uZE9tRqmaPzLfZqmxpF8qdGoYMF7Pgh3McRg7HwE5M8fwyY6G6DqtcyXjvTjZ2YVaViPfhnYvAiQk8TJz",
  "key15": "inwgBjLTBQCG5iiNhmAwkM6gMttANBrjEgMnaQS8MHQ47TVVwbWjYyoJTkWMUUEcZgMoZagSPJenwpPrrEQZL8u",
  "key16": "5Xw2meK3ASWEVL4wEt4LTgCoitA8bXqXctoPJXUJjCqwkzq6Y2aYzizroiP1X13busN1H8j5ibLY1ch9RxAxuMsN",
  "key17": "2pterzqL4zMWo2qbmmvNTaRaf1cNQbYfjiHZdhHECuXKA9XJEnbhkrkzZzjh7Ki4TcyrZwgXMxDFqG8vj4t5DG4p",
  "key18": "4wGsx8dfDaEpyt2UXhLzQ1PcqU4YPHoRhgwK1W92S9ucQJt6ZhGmxSi1uGdLQnsbkk6tJVHTzKrNqeFJvVi7UkTf",
  "key19": "3eNFvKMXHCJ1b4oLzC2njiSa31Bdwdg7HB6Y7jwFrRtL84fAnuECo5QHNYBBbkVUQor4gwEtgjJBANjZQRtsNLnT",
  "key20": "3sEua6mnhHzm3usvJKKzmAoKTNt67u2Uowk6PnR2ZTh1LUx2jEuxDC9m8cbdToUFMsmzgyVQvwUwuSv9p41ttx83",
  "key21": "RpfmxZgUo54NaCdvu5nzp639ASLqGccX8NBfoTQeeAqu7p1FrLGCcgedRyAKymyskgMCEinkMoMWAJFVL82s8sn",
  "key22": "57xMCtDUPEdJAT6nBHuaUYgUxSGwxU4XambjAvcD4Vi71kmX8hP9STqmdsNCizCAaWHodCtRZtTyULdrsWfe2Gso",
  "key23": "2Q82ryc2p8DJsEkZjorJvgW8PkHyVfbYwn5ArGMCJDeAyt5GLaZG1mr8vhwjjjGPBAMZzkretgYhaGwusBRzQDJK",
  "key24": "3RCDx4ASLadMbJRmTTLdgXQvfEhA9srQvdoaJKG4Qmk2GcLHC3r9QuMnBnDWrvCqnHW9TnQoxDXW5BTCUJjcMnMb",
  "key25": "DqW9dnrjAMcjtuzfERtaqZWtZ5HFeczCeNkb3ckf4t85WpRxGWvEMhKDEkRPQMW5LMUoqbSdbGjYFwPEb9gtyWB",
  "key26": "34d9fZTuxnXvpB9ka5GSvBBqHKM6kv6GZqnzk8aWXtg1fCcpthVBPhzxNe7bZa9NaGWmCEr55fh6kpQGPvJMaKdj",
  "key27": "62RMM2P9PN2NreJfk3Re2wS2dFptT95RHdJTt9UTKWQa1sp2JJSqC4mRiWMoKsAVggkxFKMDGGwz6Hf9QRoHp4b5",
  "key28": "26p6c53Kfj7aCAHVctCaLosZZdnitFwm2jfua6qmqQVbk9tZqLQNjz3y8yv6JCECT8eyd63sdYq5rj8tMq3JFvAr",
  "key29": "5TR84boWsoL9WmrRdi1PiLctyY1uE28zvoYnQ8saNC7xpdVUyq3Md8Hx8nCS2A3Q42zJVvrou87MP9Xg7Mpd1Ve8",
  "key30": "5PYaur4xEF3x3ZbWv5xegLCkf3XXBEFJZdqkqooyoDExrJ4U9wBWBnj3S9HFET47wuck21Hszm5ujZk9kcsxCJFi",
  "key31": "4PUodya3Fxb2wVF83DtDrc9t14tso8r7MG27ujuFdAgoLASFiL81k11jpmnVkGZYExkeiKpMCV4HYbAH5i5p2rGx",
  "key32": "W7ac7JzL4J2JmnkTjmKFa1sCw2rYzoaKX14epH87vDv7fBBnbuGrBxmAKK37HbPq3XDopRc2eYEjuREKxjX9rjr",
  "key33": "29RwNZqMHk65sE5LQaUXgW4sK1Pdq12Xq8TNMfh5suXt18YZZYr5q1SjzEkdY9XAnmE7qjp8ixRtG1q7z3KbLdot",
  "key34": "2uZ4rFj3bx7P6Fh6R5HVVrgqide1rfWRtQRtxDTjYSK9CXTgrbMgRgYPfxx3ScWRSepFNVJWSGhM1KGfgHUQvj3Q",
  "key35": "2kagzeshjkwyjyqZT822FjjHWA5fchdyBYmUwB3wTQuAPxeahiPpuNToKscoCXn6cyNQFYcQQFdcA2AkB2AvuCtn",
  "key36": "JUB3VES9aSUCmGBc51Ajp4rKMeUjAd81yi8PpUcSVVrKtipsKHxAVQrmyvheonMPV8Y6NgiWhBdSR6j7ad6kEjg",
  "key37": "3wkuT1CGEfco2eJWAA87V48RZyuD6VXy5776p9rD8QjzTPo3rLTk87f97P6smgTeH8k1tNpUx3baRKi2ttgGnHE1",
  "key38": "2xkx1nmv4vG1GL6GSJsNAHTmJdD6vXcQaYJE5XJLK1BARpWnrbcjsbQHeKUhnaHBGN5XcHrvYnAa8hiJQVReak1Y",
  "key39": "2KUvDsDnLzkpMzHWdfDaJjQgm7ZLf9giMgUCYCnL1jzTihN35aYGtBiyUDcGkquABziF88z6Uj3yjoFX4ZAJ2JMh",
  "key40": "4NUJnEWiVe2N6cUkBiVRx75P8i2fnMZPbRNpKbf9y7zMpCpmRtvazo96KRhEVNi9XNCEoferuNCFR3zcoW6XVEL",
  "key41": "4eBNrDdxR9afW1xFK9j4cY4VYwUh1wc7xXZ9wUi9x3WCmoH6Y4QKBga5ybyCkQjemAwp3sW3NJsTYX7YWGbtkYvq"
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
