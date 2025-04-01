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
    "5mKhFDsBFHs3DL58QbFY3wdxAogtgCgUUvmcUizMJEJcWmXRaKAM3njus6bgX83WuQy6CygZdZMeZQsmU38AqTAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1TSEnNmrPTdCmkyyY6NEWUphRAUYWW4AJ6WJmwNqkUD15PKyjoVYBGcCJuLCRJhsGCsEoQUJwA7fESHxR2v9bJ",
  "key1": "GhKR1UyaKPLiX6cEg4pp9bb7BkVZwuP5fVewnixuzYhuVabMEq2Tm13pRdyrbzNif7FvvMegcRarUygaVgsyxzk",
  "key2": "2gr8U6NUiBpcbmne8HDh7Bta4zrSaMdAWLgYDmBuCtFQA9rgYhsJk7KrXEPkdYgqBp8fhJYynWZrvDZ1AV59Vq72",
  "key3": "4q2fzwEJJjMc23AJXoXEMWUHM7LThyAQK36YSeNPs3wbCTERMfJEXa3ouRVZ9cm2WQDGWRtcUtn3kCSGhkaUhcaK",
  "key4": "h7KyepG3FabnojNKtUMb3vGdjrhKKvBYEeTwX7i3scrdukBpU5ANTCQMF3AnKe3wHxhKt3fWJXe6Wam9CoRpzBd",
  "key5": "5WKE3XE7nthw7z3X8WMP3jty1DLCdm1TtX1nixPTtPubMqJQvLTtFoPtAGcxXgh9mdPg1C7hqs953Fz4RkLtJiiS",
  "key6": "5Ukie9mLP1bnELpmp1b3CPspb7t7T4YPavqc2fcwe8V5JRzuFu6wAM8UNZecYDrZWLgaBpAVGsSbiczLwaXbz2bW",
  "key7": "4eYitjcpEHxofx4xfG5Xsdg4yoXv8X2xrWDuaKxaoqi6wqNTSsLUhF9zKyJov7yWNwteZVHDaR3qxHJ8wj8zqm2E",
  "key8": "3TypQfnumdnZ6HqYxJx5DnPp1J6ttqTF3CP2QMq4ZD2h6wZr8Xx2xxUD7XDY8gCeTTx3HPZphuzQvp2dw3dvLAfd",
  "key9": "3NLHAG9C3tEvqviG7RxTy6JDoucFmBhq5RwfvyuVCsEP6ApTKTYEhTnNDknhz6N7SPfc7YYfdYmHYj3LDY2KH4WB",
  "key10": "SAeaqh5bgd9P8FUhSMMpBP3mUD94Rvc1ih7LvNK43quRVaMwKsSJY61aWkaewaL1F9drNvecNoxKVzyZdHMdPEC",
  "key11": "2YpigEZrVgd2w42gfZCcPyvAB2f49cynNApu7TUXun5kG4JQmDpd6FrE7QNjNat5EYokSUf3R6qZ2yfvMYadJZYU",
  "key12": "uxj5za3cXGMF5wvJYH1VjKPC7HwURNAQVQ9Rd49m4qsvxBhe1dyVig4U7pPNJjSwfKMxcdVJgiFJU6DuFmqhVUL",
  "key13": "2hZUGizkRpAKGb5uMB2PQ5upDWQAnkVaFNERH4fYyD3SSN2hJLjAfuUSfZ1tz4jTJ3gV2gLSF74LDbbAw86dvWAN",
  "key14": "5GvpJpXLfoP3HyDSXN9JAG1Qo38YTLQJXBAonW5qFydegbktJFRGEMm5ytGZXAm8wWP98X4DhFJLXugEzr1urnuj",
  "key15": "8BF9oLRqnPhiMQpQWFBWUPCYL2HVs2kcgXJH9SdnjwnvraauLU4zWe7twwC2CkF691GfP9HDSf4MVyXaURBQjxD",
  "key16": "4gj7Hb8tt2UkuM8EHoK18FFY4UXSDbidM2nSVfsVD8Sy5TvYfA2naUJ7gCEtCGx3LQ1QPPmrj48eePYswDm64kD9",
  "key17": "57ApdRTh7p7SDEe2BdGBNCjhzxdQroEVCYbQKLqC6broMDDFPeDv93EUGL8TXi7mScmGr6Sz6i2xBdZFHetnfhMb",
  "key18": "26qg1s7jV6qe3tjVBoDJVVG8p2zJ4xS15T5qpDJJgBiZVuqGNAbgKDs1Tw5wjKzFHyWZP55B7rW1q1A73LjLEFMq",
  "key19": "4wKdxCUGpFTgHJfYhctPcHfknaLMrFEpZ2sseCU4aSUaKBKj1iGv6xtrNHv3jeqqYEfHhcoVFrHaU1DCpG5ayFLm",
  "key20": "22n1dVV9gZVUeZf5r4opn7ayjv6T1EmnQuAtt8xKzxEbiuzNTGrRuSGvkmcGzJMcyHybH4Aqwwo26TqeE2pzFwPo",
  "key21": "2RNfGursY2qJUdGkJhyBN7U81P4FHqwPWTgrbisTCihC73TaKq8oCLkoazUzKxZpy1g49pkGqPS8uw4Ex2DrsCsb",
  "key22": "3MeVA5DFHDdUfE4KNPvNRFYcdG8m9o2WzwKvD9ymMa5C9yUje1PUJ91Tw7szxyms7ogbC7D39mDP7XYkLezbCXW1",
  "key23": "2nb2BdFqY6cnYqL2WACq7in2veeAMJ9aTL6jw2KQ9oHmhYV6DySHbqeP7uUF3AF4ADeFhmRGzn29yGyBTBzFA7CW",
  "key24": "QKqpyHz5QHdspAjpY2cTJCS38Dh1NCMNbjQn9ZifUjrh59bS77ohMbW37o6qmvofnKZMwb3QjEA66qMZ3dSyCaP",
  "key25": "4W5xzbF69PSiHAZWaEVD8KgjGnZpX4EWaiUNBYLJCKSn8AcVcWoqQzmXCMEdBwFw6ToRoyeWh5TveazmprdQi7YS",
  "key26": "4Na9Xw8mf2cgWGtvVW6odGCG3C2Zb27QjuLxR4SQn7QFqrWW9r5oUKnVqDxrD5N3XEo4hUSYiLWoYRWgALNKFUyE",
  "key27": "3A2vi3L3zJLZ9ZBcYdFx7gzVWVgfQqFkvpjbx11ACaW6bXXvWEKnDyQPHJ7Dkq3wjfwTBGLU1dqHS7LkyCKXAJoT",
  "key28": "5Q1UZ86VvxFdmhyaDkNWx6aFkYwHx8kSmpiRjVvepYwdH2wqFmsfzCehUSi5t8rq7APedVrjMzfDqUVr1sqPXynF"
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
