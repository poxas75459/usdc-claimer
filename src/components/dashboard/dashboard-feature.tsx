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
    "2Kat1MpVFqY3qpiZkfyBmMCvbp9fkTTAGuAtAdq2M2kXppdxhVVD4n3SmWK8xbtU8ok3NNZfAXfXWUQMXkjxSo26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GXvf9v69EGddtFRjP7exQP9krmgqfokTygykB4eZa8mhhkUk4y1DUzjCtH3kQRK4Upv78tvD987LPUoeNTe6BPt",
  "key1": "2fW1KNxThwzRpH7xnU5GG7oEMT5Q6pWJHZzakjEnUVFbWPNi9hnTUi5pjkMAXzrGg1mpYf8W8BHtxZH3JQgKE7Nk",
  "key2": "5DpMYTyUfu2Swrv7gt4Z5NtdmLs3GyWtKxuAH3ESTiJkps4Bzmsu7DWQAR8aSjz3r3pAq8bv8L7vUMy8eA2D3FF9",
  "key3": "2RZn7J9sHdAHWHLjqokJ1KZmwzA4mfi2kbWKrrtCg83cDSdsmyzN9odzf7aiMikSwPNtyfw7Jn5cSHusdqEHhjJr",
  "key4": "3tTGm7qLH7cHCivZ3HioFuCnRLhZmvay26MopmDtp35UGTUbVbYycfRDK8pM5i53FGsShJku7MjRWnSQYq9PdPBp",
  "key5": "4bmCzSpnXqTfXNT1AeDow1yjhNHvwHGKDWQHmkRcPj4uHxcEJ6NTDJHYAcbdjonzYM66AX14pqBRTWRGMn8uEFWX",
  "key6": "4HN6pezmXe27k4H9dGwtcZNwiMrvEUZNUvz1SvSf7LBStXV3snMouNxRNLYZRVZACRuHPCGVUHstBdeX49SjLHnR",
  "key7": "2h4XycLuEW4SKwK3GPjnaxZoaGjCiK2X2LKRrqjz3yJDpA73LWCtb8WdkyoNnthfvMQ1TATNf6QmnM32T6SezShQ",
  "key8": "2kLi8gqkwsPZ1t2bFiF2cmsDu4tM8qJvW5vvbtrRkEgfKhwSLDhGYoo4ZTxX8rfZygc1CRHAqPm1sxY8L5oKdUxo",
  "key9": "5TgrjHFXEZZp23XHCGiXBf4kCeNuEE5KwwBafKpTHq1hqZsiAT3wpS6uUTvTiiVxGkMWCn9PSkFDVus3t7xemUkb",
  "key10": "2DHmVsGMMf8PKQhXZ1MTccjXiqMQxMkmzmda2JG2j5hTnx9RhP1jnaQNXSqekNa5yc7WeyVXdbzYuWMr77ttUdva",
  "key11": "57rcCKXm46EEyF69kuaZj7E9vJ5UTkwuDPuCHQH1kM4cFsFwuBZKwadDndx23ShwZw7An1svoYtHkMHShPm2uEFJ",
  "key12": "SXKGxCXtr1Md1gwEtJhiX6MtY6TS7gXUCzWLCFA4QW7yaRnDmfC97f3f68gPQBqwaYdP3XCVsNvp9j3ocva5hsJ",
  "key13": "pHBNzNvn92azemXqyfqqFcuiRv4Kb8uXQ3WBtNasuS9quw5NFJrmkyQEk5oDJ8vD4WjA4pXazSomjncyevRcB3f",
  "key14": "2E7zFTkzEAZUGrHhryAmT7kJB1rjDUEHBRy6iFYHCnD9xnAxahtbRuVQhTLTdCtD9p5tr71v7vW44E3YrY8q1niJ",
  "key15": "gXNSintiu2GTL3fT8AVq7gsgNR8Ex1FdjbMzFCv9TefgvLEzB8XCtgH7oJz523K1x6NqeUhkmc5cihiH2P6aArn",
  "key16": "48zCpXZt8HKu46UPNdd12XrH8ouGVLxbUK3Tm67NQeDPpkV8M8GympR9J476ExVRScVhZCbpjWbbpDaLVTQP1GjN",
  "key17": "5MDRfUZ8aU9DpLmZm6LR1QniNDzPpqrUGDmBMuyDpQPodWL9Nizp6DNPd1VzSqxFyHYevJceVjYC1C3SDprf7mj1",
  "key18": "jLsfi6oDQQcdAHRGjsYDNgqVe3XGUmvucFfnj6aBetXcnmSJdgwcnU4AhtMHzguAzXdJes56tiBHRKnM61vnUr4",
  "key19": "39Dn6qQMhYN7D9tnnRP4M3DRVRCCKVL5gGnzgH3edUFpywXUKDvbKfa8CGpJWELMXqUvEaDCJyqUgyHiNzkygCFB",
  "key20": "e7esVzC2dwVcmAk1mZegGy4cET4yZFW5tfu5NeqsEUTh91YMGX3hdyPBTKu5BgoLfiG516UjZoErWCt99vZ8pRS",
  "key21": "2UEvQDj1xqBwQsw7bjhRjgZcVuqeyu5jdjrAqtPRTSF7Bf61ieMtxiRH8o8TyPnp17jmtTv9ZQyGPFj9ZPqnZfvA",
  "key22": "daQSbZd85XsKSCCLqow5CGhYhguuSrECo5YhM8JpwAvr17a8e73SRLXjbEdev2rQoFPpQfPzQgcosTaZptMJ9eG",
  "key23": "3gSbiiMEjktfUjLDoahmsyVu9v43Nqm1ZHR9YrTM1YdfiibireUftbdA6v8RPoEpS83EFXHwJbSyfbopj1AWZZ2D",
  "key24": "3UcUrhMTVRA2yf64vfmHzS3U4WX7tRZcnAL9VKMiQN9cbe1KZ4xmRRtvS36yvh2kK2cmt9F42TiDs1GRY8AS1Tnu",
  "key25": "2M5H195SjnJQ5xAFmuoYE7BDV1roY4oyPtCG2YN68HK8AR7f72DPFTZP8ivfzkUpphHxcTJxPSXFgvsthWLoEMpj",
  "key26": "W9r1KaCmrBdC9Ro2EexTvoWidWdZftshJeXRs62bHfA5Jx7QfUi9qJ3FGZm5AP2EYLoLSj4EEnLHd3kw4Hr6EPx",
  "key27": "2513pCmXXLcVFP4cTN7wxNPwkyST4d6PZR4tHYT2ghvLZkYxyZbt7Q22DzfDZNp396hCAxzS6p3TZEdoLzWJFywd",
  "key28": "2gvvmek4MPNrzzHn3VBsXRxLyaWhCqizoKPnAvBeJUZ1P7iP66iYGjcVWTyDkeYHcBkBAcaUJbBWQJz9iqZFCxrR",
  "key29": "5AeVzr8SJJc2Smy21PWjSZDRN9oNWWDKqRYXyGj9q6n7YP63EudcCtxKZTMomWFcmequPA8MYMXF6VkpN7ctXaQs",
  "key30": "3Wqo3qxE9qd3Y4ZBNBoqp49qpWqMNCxciJkPpLcmk4Q4DLCxh2ord75sXKYzhVAQ77YsBeqPnTiRos3TG6HFoMYB",
  "key31": "N3yv2DVN9vToaxmbpnCr6nk3F1tJ5xb3BYFRoDwcz2mCa1oYJozB8q43HSjkDvgmsyK77gC83gQJhjA5oXV8rss",
  "key32": "2pH8EFQ4ePxNYXAfx2zGMj8ky1Qjmi5eGL3u7Xoci1kp2tQFFoHc78dTqK59RcWZpqWiKJXypZAuARMeoH4QYSLE",
  "key33": "4rePH5XEwHh1UeT4JSK9JuEbnrQZaSbhbMGsqoo6xeEmDRJohN3jrvVKTAcQ5Vq9wariMxCmWwQMP3NJe3i7ZA9n",
  "key34": "jVjjLE8ZfZMvuKGZ9VipkFjTzc1rJwTT7uFAQmCZBjHHCWQfDnhLwUfe8CAAe3a1SSUy8QH7y4LA7zsyaC9dCLe",
  "key35": "5kYK7krJcq2FGcVnKd2kvdMNQsGHdoPxtq6K3ksmdx2gLMAeDDVGGvxBBi15myEkqpguewD8DckDYEDkRTMFFMAf",
  "key36": "5o4NPA63anD8RRjA4A7H4yxEZA6pxnpY9o7kwW6A8EXwsdWQdyne1Sx8Xu1fUhpegtq9KQ7MMoCAGXaGCGHFM323",
  "key37": "WQjBqswdYx7AeU9Q6BvoZYEBQXcgYywE3FtgJEY643epwsmBBE1wfHvtAqVagyPSDhRvs61N7BvtbpydPiAEpAV",
  "key38": "4tKcQFrrgkfxtNhT7VqNMn27Jd7WY29tcQC8xi8Z1xiAmEGEDWjW4NvEbdghDzNLLJn2f9zGvvCUM4dNPwFYhZw6",
  "key39": "4c31FELGEFGRTCQzxccwKg1hHmqnBcXAQXURR3bjQvDy6HTxjU2wXtGjRSTkvpgAWd3hNsD4csAfPmPXPm2MRKG1",
  "key40": "5rXH4tCWHoi3s8n1bNrPy1pQs1Wk99SxDAwebzXp9AN5EdvgPHQN2rbbwY9dNa1ySeqXh3mjsdQ5Q7yJdrnEfaCy",
  "key41": "2frgD54JDo9hNWNE1P93Wu3Gx4xoKmTpbdtNEndUFnaRAWZiRoxtGjRyHMCYpj5AGv2orf83nbFR9tyaXDsn5ybr",
  "key42": "YWRkfXm2LHyJmym9Ci9rf9XoX2xz7sf9aMFnnyu8ZqgRq7m7DvBmMpfCKJeVYZ1h9djy4GuNsARXgCeMoTFfU7U",
  "key43": "5hnjE1Xus5rc3U6aQ2imnztwRNSqBHmuar5c5N4GsVRax57H8aNX7oYVYYjuBhFGJ8oebckZm742maboAFFmypUT",
  "key44": "2y11XWRkbwRHKw5aKhbWv3MnAv2Etq4e4GBK5tPD34YBVcCeUwJ87uunMEvPDjShRRUBMEFkemHpLiJHKGpMZQVo",
  "key45": "2z6MKKJwEBDdK7VsnzB52vXFKksMn1haTnEgMCHhGNTE2JVoWBHqHm6uLr3htWPanFupvD2Aoi1btWYgBTQ4VDZA",
  "key46": "2yc9MhjJKnHqS9TgvgxpxzkohwvnqgFixVVvMMHxdwuL61pkxD7Dq6wMCtWLoM7AacmY68AThpkBkxqF3eTPvryq",
  "key47": "4uTsGGSFFNikhUhgURZLTDj4X1bGFXeL135fk8PwwN64N3XedsmVXQPmwLfwxakgUQeBq1CTfstboThnSxXgxn4"
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
