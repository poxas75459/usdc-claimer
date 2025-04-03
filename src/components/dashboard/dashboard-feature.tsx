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
    "3nxfyMTFYVDGowcWg5WTzcaBbT2iGxXz2EvqUx3R8uRp97eutY92iS8k1DWxLt2G7TSFgKE39te5atWpvgRz9ATj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNuMUdcxKUR92U9nGcz2sahzYaKvDPa8jTwXsmtYRCCyHysxHoWHu4jSzvwuAicJuWZosstRMGxhUkEffBS2shE",
  "key1": "4hqpHGNiQ1mHxokxj38VNanS6Q7Dn5gejYSJeeJY18nZAnqqtWjUEx2Gji8wgx96yWXjK5mCCup4vqJBJkUQL5N5",
  "key2": "2NKmMQRNCvZfiWQ9Zx4qSopCw6svVjnev25PUkXjr6tfkWHug3vPXTPm3j5pCq77hLKuUeSYfF5HmruBoMRCZVTc",
  "key3": "5K7uTqmMAAGjGFmt6CBtAYAWtF4qmsuRCE6PhBQxAVxj6T36QUqm2yw4cdpAJ7XayxL6K2wmWNKBb9ZPRumQ5Xrw",
  "key4": "5tFiy9ADKPBq7kYkfoFBhAicxNjE7iJovy9tTzqsBLFkSZyCh1i6bhjFpRCN2UqwyQfH4uGji7Emzra6HoksgQjy",
  "key5": "633x6sKeQJRe3njTUNRT3HrTh8RrRgwDbopGpcdKZ7Ro2frp47x18A4gdut2xYPfiqGr1rX3cPPCPiLuHPB7F2w4",
  "key6": "to38FDiabc2tDwPtqKF4ZXPYjnSgrp8tEaRu6zfaHrQDyUte1NGQkzFELbsCxeFJvckxD57Zky6rv9i3gawwwUy",
  "key7": "3WDJv6SkpBJhJoTLKEfcpQWBceo8vkrTfDVnA1NkQQxwTQRVQsAkMHXSVUVCN2a9gbKV5zMgva14MyStnsKstGm8",
  "key8": "2xorENTpyRTVAQZwmF2G869cVoQ1DnMAxZKL6G6RLXXH9qf9wEtrzZhFkJ1JidMQ8CqwhFScMz1B12nvnxX5c38k",
  "key9": "4AQmzbkY9qdDxYotRX8t5DnW9tfUp2hGsc2QpKFiP4mu9tH1eozb9u4BdVRQ1vSLuxCkHLxUvTL9i9JuBWd7pDYE",
  "key10": "2rMPjuvTKs13zyjM9ekp6tGu8hYWDbH8PkHCFapnS5xSWQX8CQCotFCkwsYUGXzzDG3rRbUCkFLvYeNfFZEP1McY",
  "key11": "5sCwwvvWmsjWjVx4wtbH2puiekqpYfnxQUmRdxio1bD5BiZWCp9B9x9edXxR9S4smd98b9nyEagm3jh2381JMeXy",
  "key12": "2Eg5LxDb3ML51ARK6DMRfZLj155MhTKt1feLu6pcwropRDquFad7DQxbCKdNe9oDLpgkvZFPAmF8LxbHSRnkDEEF",
  "key13": "2XZn9vfrJMZCFk1EjEwAEdcfNgxixcVW1Pd1DQ6v72hkFMq1iXWkcvrvRkFPaWz3piUApbfcuyEGb8FUm7pHcbZC",
  "key14": "3qW2xYeGeqAu6q8nQET5gD55HTAqUEQnNdnr6hL1snegJD1oEanH72cCEWi8MkGhTscTDY48QbtUejy9zQs2QnzH",
  "key15": "5vRubx9zLcqtTn2SC6WeumZ64KC6q65mVSBFMaA78nzuufSFaT6hk4QS2vHTwD94YRqE6jebCTzmoVjBGce6uJ1b",
  "key16": "KjKAx2y5JoVhKxZPWRwhjLp97kmag9orDintUG8HENrF3rGDYHm7YJ7PcHs5oaiSmDv8Ns93jBnhiXSgpZ7QUTL",
  "key17": "4WF7eS8cBse7UvBDhYL7bxJ1tzsvPSRUxRxt5UBFvwgu1z3U2X6tLJW77BVnBxuKHY1aRhQsEgZGnc5PVGavmkBZ",
  "key18": "GPQ2B35mSwH4zqijPQ97bgywtgmwwNY57iJLcM9W4aE3jSRRpj6c633cnQRcM76zPjJt7tAEWrXigQNCVmciPgf",
  "key19": "3yqu9i39vCUvQYJCYGPqVpmj1jNSR4odVHebkyVYhw8KYyXWzd14ZwrwKe2Ceups8NM7JqJGEeNJpNPyLLGNiAUe",
  "key20": "2Aa3eF4UghkpwUU4T1EcPJ2KxztuHNysy3smMkab5822wewxhbLf6ZaKtnktjztmqT1SM8Cs1mzhYV6q46pWsG5U",
  "key21": "5sc88fEjSqPh5EZz4x5Q4XAS3KTE3HDwtQA9gG3HJdJv6GkAnRN4E25VFk9pKrs26okmwES74A4BjYjwzdwQJWKj",
  "key22": "3ZBbGVeYwU36gmig5xax2xTmjpPwAvuCJiyzQLvbRocZ8vCkQuUfdgZrzVAF4tj8CCR4kP2HDeBnFGG5u1zNaEDh",
  "key23": "BLuGpPJnRXVDWkNrKKzcEpaEA99DcJEgTgAo9VXdCgh4hGN8dRNUQ69zKp1iz8SizLanBpk78VrF8yzjyMLoJvQ",
  "key24": "4MUZztHgt9ng1iCZruVsoEp1kqWwzoG7QVNKYiGtC8dVA3SJgSk3Nw9h2Eb38DZ4U5PbizFH9knbBteLQSMukZ56",
  "key25": "5utjzogJ5jP1RbRwaucxGwuqWApTRysYCkGVyNjkMqEt4XKf4aFNpPRHYU9LASMzRuugtXtpaSZ7cB6sTJJtoG6k",
  "key26": "3pjwTGSFp6LgafvPG2EBJEsZbskvx52ABQQTCcrNpnjMd74EUpi7QZ7gGp4BiFTotUZ86bkCJ3rXYXScMw662gUU",
  "key27": "vQjqFSZ3Ru7VREj5hDZezXu5Zqqfr9jwFfoYYVgwxJzspRdaUsQsxwqkuxdQvGE6oQ6BQtPjo55PcmVhgs5cYsw",
  "key28": "4kS4yaaqWzEGeq9c4mBVYai5jyx4DjPs23G17618uqRohQUpWpHNEEWUPJpv9ay9NLH8TmLjZ9c1UjNZjwXxhEwt",
  "key29": "64NmzUe3PaHrTXXenTDTQswYWLMnUUwRx25rXqwFbFdtVytqMapJEmFBCFV54aKPFjCqgyBAMNpXHTFHMq1knQYF",
  "key30": "3H6dQG9AX25sM4ZUjyutJFREvM8q38f2KtaCf8DnrE4isStuZvVTA69ew2391ZHzNERVoheyKYmKmKs3b1BcCthv",
  "key31": "5GYj2CAhCVyGmv4FzuxuZdhS5Yqi8Qdy9JS1273pqhwCkHFD1g3wALnS3DheJf3yfazR2gf4fBZkevVNvLsGTWJ5",
  "key32": "2PXpzVicdwheXyUhi4ED9xKiqKHAS1qdaGcSTxMtnVMGzknPMo1bS5rSzT1jmphGQdHBcj7jBem35Pp2Ua9uVxzJ",
  "key33": "m76j4udDj5jJoBMnLYKAbpbC58pa34TxQiPVoKiLdCu8tZhp2izchvYfooxrrcfbWu6T52AH8yRjHnfs2ao1EPY",
  "key34": "4UsLeeFSos9PkNQ7PKitxYDCZeMxNEr5SKrPuvZx6Af1dsp2dGYu2f8wYgxUj3uZ6AwsBr65rTJeKoq5ZQLpzs65",
  "key35": "659ZSPQ9K89M687zcraMPwaGnNCGbHGFzaGmPMp6AEsDH643BbYCPGH7JZaCPSDxpmPCwT39kLahiEGYxspZwoCC",
  "key36": "56X1xXfEt6ZwLZZze3rCbNdWP2L5AffxkH4Y5nVP4wXrd42qab9EVZdYnM1px7ZasrYq16zBZgf3pecsP4QH47MM",
  "key37": "2qbvFU4WW9CX5XvEbEHJ4kKTPLLwUdQD86muViKQYhyVCYFKfPJZPYz5i3QbfpZoyGFJnQgTnEvyp5uqbvMymHnL",
  "key38": "4gBqgh6Q7ZEFr7DwA26Ea1KY7Y4r1DHsRGr63q7DLRF8Gk1tHFPDppZUWfrjdTAotP3Ayg8q3VwuYiuvbfGvfasY",
  "key39": "2ujVK4VJ2DzYwQ5btrkKH6PZvGS7C6CjZANVem2zbDJyc7hup1mf8FVEcAQDKU8dLYupUPnWbWFNeMGVL6VX5FMy",
  "key40": "5muK9eMLcwFH2pATwZHJvXoWJAVJqQMF2JEXekJL8CXkEdEPVCZ4Fmsp687Ve3mEmyr1vmn5W1GmYY7MDWa8r8Ke",
  "key41": "3X5gY3S1k7UUASoC1UuM9voVd4Gpqo8bpvn7gwMbQzFpt6zVYF7guQYP6Fsqh6s6jMgCzeMrGsEmnmHVPnsCJrZ1",
  "key42": "5dUjUdqHGrSkFYMcizCR1BwWfKV9czu3ZMhaDMaFPxDb3TaQhtcisHQLMKYNiD6SnLdXoKkMGVcshaU92kQF9o7T",
  "key43": "5sgB48jBvv8cBw8jkFk8wgH5XLkGGkiSDnDhmvT8GUV6Tyxn9tCK7BTCwvacGTijX5avSfTwsRvZEh5D6FGJoQNN",
  "key44": "3wUvS9uF7w62DBmUeKS7S9bnjS9dHXiZj98sHAMLgiQhPwKeYqxR54TSL2JJc4hhMiGMx3t6rd1qcddLBitpw4My",
  "key45": "oya4dkmbX9uBEdDc73vztg2h7vbnF2MNq4aAqdvL9uX4oMpp9KSSmHGJm9qunVorc9Lpa6LLHPEDzhbkiKBXfev",
  "key46": "4oVYbBpkgPGfvLPJqzFLdeMbyEVrE3kC3NjVYD6LNp99oDavs9LuH6h8P5poFTcHV5GMyGjZpjTkMwiuv2oWEdC8",
  "key47": "4RuJafSbHPhXFdAbN1HcDxjCgfcBL4VdB3Lw6SVRowivJyUcfuQinLFMzHxJtsx37qJrjiVyVVJZdoLNcNSK3jMz",
  "key48": "5pY6BRr4Ax5Q1RkNNWRqZWggpK5o7TtewZmKRn4ZyYA3W6jQ2HXvaYBZy1pwVJad65i9WBq3dQzAPiQaumAHu7rj"
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
