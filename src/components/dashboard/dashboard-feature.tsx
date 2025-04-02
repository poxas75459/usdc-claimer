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
    "SCfwVVvK4MSJHAjZUuJcaYcPNNX2tF6EKsSXH9rnUvSw7SMcTBvr3ocnQAfus2Mv1aqWRE1mXbxjFJiRjeohkvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SKJX1W7PF1ggMHTkCFw5eDKtJrLXKxfFsR9uLP8LKkVTEuVtKnEPZJGUR3F8DgkTa5TP5TjgdeVaYfpeDGQNFnG",
  "key1": "64vcYCssLJ7ijkX9RTVrHadf2MvmybNzrjNa1ywN4AHq3BxfVkmjWDcLL4FZHdBsfCHmgG14bqDRAK2VrWM35Ksa",
  "key2": "3MjKsQL2oPRwePh9cszMmTXymZRUabtf7YZVBK3f4jheJqwy3mnor9sR24MCE7fYGK3rTh8FYz4FqSb5iRXJ3SS",
  "key3": "3EpB7FPLm1BrfuZz6YWDU7yuTc8f2MSdVbhMrvAahKhsmsVSBdFLHwBGyqQwcSkftAwsWjRTCmNCbcthqugq2Qwa",
  "key4": "32BPk9hz1z1wsi4dTq2Jq2PvixzVPAAyaQSUKVvBR5wgMvghWkfLExGGhjQkevAjnFgs1Tr2bsL3RDZAh9yLvbMv",
  "key5": "9Qf1Fg7cgnNfJjatZM4t5LWufo1BVa1jV5tLQ35D3ABSkzt5HccrcZQRwRbVVBCHuvQAcYkTDc5yhhD6RVjTUGi",
  "key6": "5uZApyVpwd2XgPmcPNZJTjMDqZYfjvXZpjDw236tqZxpMEiGs5ZHaZWaanEBUvTajCTTLThnULC97dqAGUBEw8Sp",
  "key7": "2PHbGdqdcBfPa6CwMz5kkVpiBiHA4L1g7vxLnD7HH5XfCVS4CY4tq6zbctThHfjgshZBM7p8VY3k71LVZFMrijg4",
  "key8": "54irbxi3t9HEdRYkC6Mu5AfQoFSEhskcaCVkW4FzPGN6esTEqwNJZ96kyfpZ79yjNBu39K674WQ2JQjmjdz1A6p7",
  "key9": "dFJ5WoM5BTao9RxibscnNUm3xe5QhLs9h5SixEL2Q8RcdGYhd3fzQU9bPEvYLbwrbuiSJoPhPcn5seewoGewS37",
  "key10": "2xZpJ73Npy9TcwenKXrcD214vWBnhN5cg5A7QA4YCfkHnkbR7uo9cUPZPngH9M6HcXNnheso3AfSsoRJAHaA4ZTw",
  "key11": "N4DQ2eNVWdsQNSrqHcQviHzpaUyXbaKEWugqfmkwiku7DCGHQWE5XqN4BW3B7GPr7zLZzzyS7R9LSf4oAVvyKPz",
  "key12": "5D1aLqy5pjZmSzv6fT6xfesGfrsBVeCro5vqkkkXL8i7fEbgNxYNs2aRQyoLFHCK1nFBHLPeL5xqbUMH2mxUkn97",
  "key13": "3823uffTVcTLXoGJoWw2km11qrMbfN1YM9byDtZCaQJKFnzx9qqePpgEQSvEpsNSM9MFLxhBowi2Rpg5Ko2FePcY",
  "key14": "4Cfqe8K5X7NHWDAPkakF1dmKtnDsZ6T3un6xovSkWDxcfbApgcmPBfeqVBfzpW8Z8X59QJXU81VK655npZd9kN4d",
  "key15": "5hbFxJvFdYThzNMjxvwmGKhPk2tJYJ9fMuQ9UJg3c1oFrH9kCdQ4UYTReR3Posxe7KWipbNhvzYUXQAsYZhBCLGn",
  "key16": "4d67eoJ3DYJWBvUaL5gS8yWcPYQ6EKvXfv6LCWnJrFghD1pHxuSopmH3pyB6k9L4rMGYYvAeG2TySZgHq6ohjBoL",
  "key17": "3HTa6PAHmkYaJgV5MqQoMtGy4cAqxEn5Y7FEzMC76mL1ud3Rr1r6ZLYeptoDrwn1mSso6JUJXRtB7qDPWQP6G3iE",
  "key18": "nEvxQNUjdyeu3xRetKxnv4TtGSmxR978V4XzS2Ywnko3YZtRCQPiSyteqwTZtwNEXvz3uxBvgnZXL5kS9HJite3",
  "key19": "4sMqp9g8UGurfFsRmrVvpy8JjJkZWf1HWG72fCQA6ye89n9pVCUWpy1vm5vgfqrzJHhrr8dSHeuptH1dbNCCdMNa",
  "key20": "2KanL13LYRJQ1i4xfvHugCxDEf6PhqhmYkBR6DJrpCk7etxz9mexrsYLpqiionjGMxVU5fq187dSARgXBto5qDe2",
  "key21": "2doiB6JN2oN3NmFW8c2zUqs2TdP7SuYcBisUhssp6nYPQr8p4T9dmP9mJQ1Pp4UBFumaXSVBRTmN7fnRxkUySRvG",
  "key22": "2HJtrGWuDXm34CGjbgucpRFy5VaR3rk2YgRT9BRLwkeNBC9SAGarYzVHXq9VozjWT6hV4pS9mZBf7sTyTUkertcj",
  "key23": "3eJRU9nxRv7wkpD8PNv6XaMhxSanBBYCeSb9FccSjC8nKCgSyy2pb3itY3EybPYiWWPJyrASUdhaHpyR4oPDjJ1d",
  "key24": "5B74Sm8A1HivPD4h9zfY6WUjnNpQEfaNJcgBkNdkRuWKN95TPf1biW2fkiWonZ8dF5A8YJPA3CH1e12ou4tHBNMQ",
  "key25": "3V123CfiKJ4K5kpZhH938ADKBsw5rSwz2mDYK2rBBjpyJMDsA327x93n4wYjCQDg67jW8JtA3x1e5otgCkn4yjWT",
  "key26": "4JCRtTxPFsFbKRKaDxVt8QeVje5ZLAEVFUaTPCcx8etJzssSyxitAjiGYH2xEGo4V7MntuGJqMswZWTfwWMDN2cB",
  "key27": "5a6vfk7QhdpKdbRU2GSpZsq7rPUqy5CM4V6AgSsRaT1RtcfqxmyTFhn4t2nSDivucQQFJBgbqYjo4met6aoZQLyp",
  "key28": "gmgaR7EMsFspMiNVYBxnqoQ2Bh9M57XSB1Pc121AqqJsViQrbCXfSSda4U3TssqsvrVUh9TAJwXKenqRnuU34tp",
  "key29": "4u7z4J1xH2NTANBf83vy8U624yGDKjywgZRNkdvH9aNoTJB2KubFDrFGXhkCSKyJMsM9ngUZRinHruTk6cRc3pf6",
  "key30": "PFo5pnPffTyaDvCL5MdfzsYXKqMfM48MoDPzn7oecMZJuzjdVFzmMTHHQgqdmj9NCG9Njfg8xEVBjzmsfrVKdRr",
  "key31": "36Avfwvm3DCXJUqVjdnBvcHk4X7JCCN2iDWWpqtJ3emFCM3RC9NU1gWcnthVeeN3A994TLKtg2rHVvC7aiiTNojh",
  "key32": "5n3wRjjBbvucnaMaKkh3CroiMLQ2VpxTEbZEETJbNqeVWRQwzrP3xxWhkgRa3RXA5Tnm1TEn4w2WA83qYv7RGFvk",
  "key33": "3iUcZNvGawSwpWRB7YYHt2hiGQYKqkXnPAGKfU23Dm4LH2ks36NF2mw9uEc8ZHnMBzZ8AUvaxaK7bWt3qfKZUEFk",
  "key34": "2ArDPin9zohrWjTdfECHKPvHtD2ugEcEQ7kor9UrNCKfffBmMjAQccFM6NhDNNH8EXtosQ47k4heSktt7umpBJTP",
  "key35": "4cRGQ4EcQQ28NxTQfM1zgmNUrpgW7WPGp9eJGnUBFwbt5DCdq52cni5XY3C8RuKMV2awC7nZJTFx99MebgJUZJ3g",
  "key36": "3sY7LwV85vuDzFYLhPerZWvdiVCUEoBrrgmK4VGxcuynUx3iBnETdhydPEPggNznBCtducpVUoPmKziUkworhntQ",
  "key37": "2UHDGnDGPwPdd7tjofdrkGNHBFP4sHocPapQ77qsXeiscLbGWmafdMJgucdW6tmD5guTQQ7ALuQrc3qk8VfAFDMH",
  "key38": "2SrdhAUWy1sGymi2drmg3uCnhVAgNKhQbAQ877TpMMHKASAFvDPHxykmBiSDGCe5aKYXBT54Rf497wkBSDTziNYg",
  "key39": "4emT5Fy4L9NtBa9cu2fK3Ltwc7N1p3HGkT7JoMFneWcb7Vw24bGaKR6aLoHDndx3wqTeRfutyd4kzX9CrEibCzpm",
  "key40": "zYKKYgNoS65tnGn2ezegcQme3vsWRRhY4RNTtUvxBV4japbakmPL5CU2dL8pgryLLQQEu2bZn45pRcuRpaLuVFd",
  "key41": "31AoTuwFDKcuMw1JqEVxjnes4UiRf1xMs8ewdpEr2DTUCXUzsTxgzyDFTAE6FfGAzD1EgYtQ4Siai67fExvjnpmb",
  "key42": "gPYWJ8XexYwpvqub1gymBQYLkAUsBVTsVfcyasuBMZGbNwPK1WFeQSWc2sm8m9Pt1VhE87TfcddP1pgCAiFc7zE",
  "key43": "5JuLNzUYvB9eukjYSnEWny9LgE3dAk7ZUWbteFfz4sExAYxp2SnYQmQ3i8GMZj9esQvKV52gpRTA7q2cQf3GxS35",
  "key44": "5vrjXA2jDyDDevqhceGtVHpAtkfoQh8yiCLDJppaSTHJMZrV195z5EXc3rLQMtWSYuA5jmJ8NiegFsGitRnQqY8D",
  "key45": "51AbG7ak97RYcqYqdNJUhoz7GbXfqSE2pkXf8YGf7Ja1q82k1zUom7DdybhcKfPt5hYnnnzeJAC2L7SGxdjmJUSJ",
  "key46": "4NN9TnHqc7NBGzMXSypXDJ4cM1YNvgv5U17fDpvUZ3sSyRfUGZ2R6vK4A1SVaNLbA9tFyZH9c1uMFEGbGJaMiWrb"
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
