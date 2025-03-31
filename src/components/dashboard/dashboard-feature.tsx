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
    "57RCoqv2Wsbxpsoqhv9nb1mo9bDh5tkDiRUJzGBGarBXoQXPYTF6hMUjBrMKsAoFF4GiAArZNY3KmRFvDTrhoxyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9GnTBLv8B9ntujL3pCLPdqgMFmek3nb9vs4wyA1KDUJbRcS2hu1XjJwHTJT8dxxWsNhzkEdT4tvvnDfKCJnNnG",
  "key1": "zsZLFoEKLRXKhPkpWRzZuunC2bHA2U6iVevMTmbEvPu2rQdbrG3fYxSzMRMZgVLau4ZMRf6TA6pswuVkyqMfzrK",
  "key2": "5x9gFQm2s2iYk49mNc7xZJLZFK8XPwrsVnSkyEk5ZdkZssBuF4xtFXrUhNNp7aZovNnTALyFNaj939UtYbN3i7yF",
  "key3": "3rVMqpv62Kb9EksqchZXK7GSF8dcxuA1PjmAYjy5cVrVqNyBPCBcvMsVfo5oGXG5df6dZo6WTf5YWYTGAM3hfsT7",
  "key4": "377h5hJWZPux25PomQFBcqcwZhqMJzsyLG5txnbdhiQr9RaGrsM8mxbwTTjQ94ML4gKsu7e9EJqFMUhm63vVqV3S",
  "key5": "2q9S1Cc7gJDrqt3HuAi2td3wWDocKBZeTWBwUciDn54kYeSm5w1JjTjaAiMmrUFvhibU5jcNuysvGE4vcMc5as1U",
  "key6": "2TtCY5fZniDtRbgyfEUVgqrxpnTMtWkS41HW5EoKPbKJdugwZPmBQLK7Q4EMMc9NhCsRzGVG6z4L1CfGise4QDkC",
  "key7": "hoPZswun5WNrtnEGErxfqWhyMmc3oaqEYFwgA2X6KdBp9YZ2vViQ1Dp72uamyeHtJtVeH4NtVgaCFLkxa7Fie9p",
  "key8": "NE9YC2CBEPSe1fYgRb4eNp7N2xNBpU4kFTt7pXMyuipQBV3GKeHqqot3Dps8WhHVSx2JCv8GfPLEdFiX9rfdn9L",
  "key9": "3FDcD1ibZnn5UGgh4wvJ6DnRMWNZhVLnVissNS1SbaDGyxKhv3oxBeK6sUDQ6aMsUcpoF2iz3pYXY2JWoPxXYhgG",
  "key10": "6s8bCWbzQKpDKzsZ2dJJfBpiecFrcFngXvTJsr9EMxJcRe3Vo5SRvTcD6n8vjQJvYnJYLWaKnyWCpRWirkHCJZw",
  "key11": "2Lq8sAmHFxy9ViX9qvy33tQQgzMhznrFR7pFcNonVbfoqmayoULXAUFLmu9qpoZD9hA8SohHCx2sd5JiZCY89q2U",
  "key12": "4XJ9D1KntDKG15AaXt7mcys5BdWmbXesXz7zh3p4EXsuKXGCxKdDjoPXqYWoyBVarM9AXasbScJ8QWDmoWRUghED",
  "key13": "4E8AUBt3DRxcpn1cR6K9AbFgnqRqBGo7MbS6HKnjTc91wkBGJr47miKCM39bRgRNiLoxuGhNeYGMYvQ9Znzznv3s",
  "key14": "3nfba3W3wWrdGENe3wjPRJNEpUfUczmf9VV57oYUFnri7zLhZjNN2SkKYDtZcokAiyuDp9rCG4Ta8pywJPoxXS1v",
  "key15": "gpunEVVpCgScB2V55bWtTaaUXP6WDWzkJtXhLjvQ1AWWZmFCohfuYnLmhirLW3xW6jsecMC5oXJwHuvhFZE8uBN",
  "key16": "5XkNRuLYHLMfuJpbWNmrXR2PXgdNEJnRcr2c41WJuu7jAnYKpNwHgitgZi2Z1u8ZPmixeUiuSafPXGQczAmvNuYS",
  "key17": "5JmXE1yiqByxBMF3y9cUjQJL8nydetpdP71Ekz8xj5DuntNyXUzSVvdnAqS15V7ocaaDdwDBRUeXG4aRVD7g3nMK",
  "key18": "iRN6HCCdfZ4Ar234wcnfSLwj3tuZwNmiXnpTfXrxuRXjs5uS78mknzu9DGE9nTubdMrSY2FH6dvNPUYWWhQqzCc",
  "key19": "489wFUicjCy5iJgV7QZ55vHfbFeKww3FFmLrSas4bTo9SqVBGSnVi5skmNttMwHGMuoUVw3Y6y7h1s5HJqztTbHs",
  "key20": "2DmTkx7fZNiodADT3Z4o5ignxEhPU5FAQs5GtHzvvn2jLxkxJPS9AS2vVRN5PjWA9zYV3PLrTmS32qUBFmY3xbTE",
  "key21": "ynaaXFBx7iw3t2ZZEAUGarwEJmARLcrtVaaywaJQTxYrP9m13Zqmrhy6361Ghwy2XNPxZzj54FUcsTXNBFB1Lq6",
  "key22": "4XTH6M8L731HTxmaTmrABrthyZGSuQNb4QXcrhiTW9Zy57tV1skcMDjZfd6ZctgszUe82ktkx5UzLjkNRzeZBpaX",
  "key23": "4tL9e79BCaN5BNupQBtFHKwhnoAhAcYVBGGjgYEMbnK1wtQpoqUx4Re1UfA4B1Pf9vE4uweE5ismEwDBAdALW5RJ",
  "key24": "mjKV7fZzvVHjcv1GnqqGgjppv7kAH8KNWes4CFsAYFovaRUmJXoWMNKQiM44SzCvKvE3TtLQ9xxYdokWrp5Xwui",
  "key25": "4hcvU3ABYzCBoYP1Xp76c9rgh44N7PnidyqQYGe6YbxLQDvrbY355J1BVGS7HSurvLRaynPMK48H9pEcQsHhYaJ4",
  "key26": "4E5jVJc3ASxGdLeXpN3xdafp2khD8xQjqHpZCuhdzneRoLaoT11v5wBLd6i8ccGgu2beJVyrNFjx1kzhBNewVpiy",
  "key27": "3Tp9rvpPQoUWqg26SzJy28VXmwGJCfKnHdkj3xuWWy2UH6efruSpBVs5KcbN6meQZiMVkmSYjzPqnhCDpVPkjg6g",
  "key28": "2uB6GuCbsSghu1URVimK4DGUQPq788teVeJnH8QJghiYqEKHaHpPmymrP6YDXqDeY3ASGyJabYjbAkZdHKuMdeJ5",
  "key29": "4fA2UjgyCZGu1Hu6nww1pYjfvtfCcXa4fbYbe9RdFxRq6fD5w2CHns7WrKXQxpX7JEZcnLPkTr5ukoBBwmvYtGUV",
  "key30": "yTyid9RzJG38MAhyf9R67tXhDuJnZW2FhwkdKX1iCTSRzkSi8Si23msWF975sqoPfsv36Z21cYmbfZr627GqM1V",
  "key31": "ETJmNk83VKB8CkbkFVvxzCD2qvszkYVYvdPJzGC9Cx8gcZ3SBz4HMqimWuK6kbrUTjokruT5xpk8HGyxt8qVSCC",
  "key32": "612NybHoJ3bheAWMXGMWX3F6n7KUGcnsiJuWfDARk4CuF8sx7WxtxqrVPKPkFpnL8BhkTS99nETfhz2qoFpeG9Tv",
  "key33": "2b1YMWNzeGGNicTH1EJuFKS2Ev2XWci9NfZMAFC8iBa9TaymfSmwUmZTiND49G48Cg12RkEXEMSv4B9wiQXuZSun",
  "key34": "671zBExHtSEXY2FFqPH9zJYhTRVUDhzh9TB12bJ3ZC6BsQX7YQAAheNR5QjLPeZf8tc6vi7qoUdCNXtCdBxYro3P",
  "key35": "4HDCvzuJzJcZZiqe1tzc73AB2yTHQL3qPqosouH3rPkE45vT5FKMNW1vuiBWmPWSPsciiT2ctpT5iXNPsRyg7fz5",
  "key36": "34zr4Bxu63gSSEGZe1n3y6meCu9JdHXkyj2BudmNGSFvrvb1PcYwZQXhYtoVL3qyPDAjwmCJCm45n4MwNvwxhU5P",
  "key37": "5CNj92PT2JTQnE9RZ8ZzcQdcS3Jr7k86vtXTnUtNzLAskLWLYP2GXWQnphz7uDHnVWTfA1JGxG88fUjwxXpErWW7",
  "key38": "3fKBH9zPBwQj1J2VJuqxeiJ32xbhSzanKMG2yH5QXkZHzsRwgKfRoiuYwajtchnCzPyF7u4PAo5PodoKHiKJE5iu",
  "key39": "3tYi8yPw7m61hpQP6DKFafQapa9QoRS2oufR3iT1csHtL4Gs5RcJxKyGwD2sTLr6xJJ5k38hEUJaWRHhBPSJJVnh",
  "key40": "2qhihCarFFpma89QHabF7CaK8WL8CJmNLPxZrSAfmVbLAAVBthGQdXGuL2cwotHnZqy9pnY4EBdtLyLBcSq5yJNP",
  "key41": "2oaiuikLjbGijfLjWEMqA1WhrZk1q6QnDQTbbteahjXMhFHL5jydSzh2U6hWqec2ugxYUX72XfiCGmUxCEbx7EoL",
  "key42": "3QNeLiRQCBaKdcrWxNAt3VntPvDfNVN4cm9hBMjMMg12nMFMGiBrLcM8Kf6Pb2Qh91LRz4mnbJJxbtXvZkAv4fis",
  "key43": "4QpDd51WLLokugQgrXvH9v3DnfLEmgsKMYMvaqwvSNh8kEDUhTepcdKm1QNKVguEekQgW2WvxNzV1FQZuGXo7Lhw",
  "key44": "2YEbvhU8ksBoqv7wftHjQym81nUqykvb3zpKrZLempRxsQqEEWqbrhujZXBaPViSqpGePKgwZmp6xx3NPra4gSXA",
  "key45": "3uiQ3JPo9Gx1ocG1RduaguwLh3SZHLRfeGsGSbdd7zvraV4yyCPJwLejxJ4TpxHFHAz6PHnPVacYrKuo9VBHLFLE"
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
