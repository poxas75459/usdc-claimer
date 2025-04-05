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
    "58YkqFN7u4Smq5225ujX2BKYixhHhtR7Zsua3xLdfqSzxBxTTWj4iNvTMfWiapFM6RRmaxjrrDM23rV71RAd33Pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W8qPmDy2V9hxpU8GyZpZbVPtDGbrG9TsbWKLHBqzMTKFPsnharakRrwWTBRzrZvw1LuwkZnA8KVrem5M9YjoRCX",
  "key1": "52HnEfL1yR9mYzLmH3S2VZCwwiBAqC7WrsWGZGjNQ2ru8hXbWE7hc46mULB6TjKhpM87GLJvHZeybHyGoxBhDV4Q",
  "key2": "XGVQtjxooAzi1CTdSX32tiwe4vUyWwvkmcaDiGm4mLdeSNuB7zU6rwuDCiAwycyBm4WxPziVYTtuyeDPM2QwXb6",
  "key3": "23fLFKu1D7BKDzhJfGCQqjhwswxYR7yQaJS3r8s5KUaywGEnGaN9jwet9zZNFxvQfca5SCL1o6FL9JDgoLB3fNU3",
  "key4": "5Q3ydHJrf5HqmTGcY5nhw3wXVQKLFaQnRGJKeQpsxJsxSWqMV9hTUraFu2SUDnMKiHKwMvxteKBQkeRo9jSGhbAH",
  "key5": "Zw5QccbnnZXuZUf3QuaHMuEWT2jaGPBnGsaMbpdgj3t9KsQ9GNRLL2A8L6cJQANZDmPQPWSFLR8SWc2ZmSczkyK",
  "key6": "4RyQDtTitypRNRFvDJb277d5KstHHtWxknLFN9Wqsz2EHSrsif4WewK53YLVvs4uy1Jk95MWoABxcVi7yFM3xUX4",
  "key7": "3eintpDKKBFoqUBeYi62swFVYaEGNWRp4XXmwve4t1N5qWb5BHbwPToF2nawU8MAXZbwR1WGEvx88PPdwb9yM2FR",
  "key8": "5iCFcJydPDEWPEDBndFG4mQNhbLDrhC3YM1wqypD9Fhb2pABrMUxU6fwA5zk71CcEiBFdwfongrcL5kzEDpTthHW",
  "key9": "5PJ1Ee6j2eRaVg1raEznzfK7acp6Kco5V5VzVBMJhywet9yHr6NAyoXf5AncP3K2uQWFmdsqXaJBLeYrA842kr5u",
  "key10": "5KskCdLaBq7pSAXSDn23gK5xGwSYF2jgdjawsh8sttEX2yuA7Ha167zHjsnp5U4KouCLcX4mEWnq6KLqahz9gEAo",
  "key11": "2zK6qFAgwT7pzzFbRX8u6xoA3xiLr2aywCV17V5pmDtzkuEpQDUKySRBnME3VgWrC983iu8BxztxtTm6AbaBBnNu",
  "key12": "46YLAiFTU3S1W5BA6VFpfUkA2qLe5u1DuPe5jTGHEmYZQi1B1ATAPqnB5g68o7DoWor5SMvLYcLyDvGKLYi1Zupw",
  "key13": "5Qmfw4BdYe8WMYttefsNzqoAWhKe3zLwhvS4XHwC9Nw16LP6UfpoKo1efJa5nYNBRsCULMVKHdNU2rQiDyPrMKbV",
  "key14": "4FGtttrW5tSMSiteqSGeTXtJ4DcDZTXuhmrjfrHdbZAKy4bM5vDWuUpWjLPxXDvnXg3dzALtu2Ef9BR7VAUCU48b",
  "key15": "XYbVXkMFkQ69ApB6k1emte4CNKk8iMmGAAqT8zefMKJsMFpTZvfKvwTCgBBtPEXdbNs2cP3rQyyhSDBzfyHS4Hq",
  "key16": "2wU2QZKG5RAqVSDV7WQz3nftL8eySwaCATUzraUPbuyKuBxeeS2H5Q2XkACkXFCdv1Kk38ajTcZRLvyYHrSa5isA",
  "key17": "2uTTJ4MWoXFYLtfRCa3QcdMX9RCqgPPL51yQBDnjbuCX8jYtBZHtJPdUtZ7nDUzdR3nC6pChJH7zigvheWwjtx1B",
  "key18": "5tBFypeKtCWvYaDBF9PSnUfT3YE5ta4cQY7ED21jQbfQStz9JqKnfHNVgz2NZZ1LQAaXq4WaQn5Z5TfJuJbRY9nA",
  "key19": "3qZSyc2GbPMz15RKy7LDFMq2oq45Jj6zJDbwQCsfLm5Jo9FY7nm24TZiSCfYGWZzanCmUu5AufwjUx6AETWxr7aB",
  "key20": "3iqiZbTzHqLwzXNwX7CS6f7wKR6TrQvoXTXDdyXCmZwdmLrQQhi1Pr7koQbxkEcvy9fxHNE9MF2engWUcTq9BnVS",
  "key21": "3RRyRq6vRx675NkQPe62mvSb9z6SNbwZavu4GBYaij8NnVH1HpfZSmaRdbjMUGoMVEBYGoH9uHpJg6auHEfh1DMa",
  "key22": "7RdYbNj6poj3eoKiew1FpoZwbSWURfi6JqftyFCHbRKeKDQd6eNm7CMLDt7h6wApy3c1kNfFEtBw9vTFVnuNFXq",
  "key23": "4MCVSYLSf8TajoJGj7y5YqHkZWzsRedcqYmLwynXujrJvbdAXhvgnE84965E8m9JbCZsxzFV3K3dgZt31pbDJtHb",
  "key24": "2bfQuTKXXscyRMrDsFxLD7eehCfN4HReUCBMT8gC4qVVY47Rcc2EWDWbuufvsGYi4L9sFfTKGNpbcqSphmcKdaUh",
  "key25": "5zUc1eyBwqhsems5kN7ZQWZzqoEBcAnoeov5aUmEZchCDiMKarSjiGF9eg7XZj4vTch2RXeTHLJ9Pt27xKj9aani",
  "key26": "tARRujvbd6s1LXckrpBn6LFD41FfAi5hUwfjVkLgHxUznNco4hUh5sxpg2RZVjGyR44HvUouyZ9Ap9UvcnASApn",
  "key27": "5UtY3LmsCbdg2C3ECRZeGzkDTi8r6Hj7PSuqwAYjkCnTvb8uGPpRto3NXBikBcNYqkB2JTrCBTdyCkWzbP4N8Vdd",
  "key28": "23yCWBwm4f8aNNjZhBjYRHrHQ65aKiB5bwTDfgQjfpLE8W8Mnwz6Gdj6xFEqsdE8VVwDZ4wtNSdBRba1NyZtSCEc",
  "key29": "61axDcsm6DZD5Ur7yRCENe8ojxeG92mjcojgQJuhrjX2UEVBpyvJ3GMP6gJjZ2eFResk2rxzSkmAyobVkTuNWKz1",
  "key30": "2Ejpc6owaCYeLe9XZUd2GNMfAxnjG5Z42QQVCUzb3rR6UuYTq8rQYACyJskGzzgUi4RdzB9GtEUdkwRzqmxdTi6z",
  "key31": "beTQGe49mu7h8hLqcED2bx6oaNrApmVmtjVTkgxN1smJh8iqFUUMhfS9rRtcCR3trn6jBXzY1q7nqnKocghHenB",
  "key32": "3JF9ap9Ga6ziw6HC6wnUnFpRfAZmC1EQe2VxaLXEZNcytg1svTULHdreat9j2gLH6CqbPwHLUoV3XuBYMoesj2UR",
  "key33": "3ZBUb6mmcP18c7KLSkA5XBJqEFLQvgfNJbikX8LV3f5Da1a5VsMKJoBFHbeZ2yW7dq48SmjdN5TXstmfxKnvkmeP",
  "key34": "gNGxM7d5sksfnsDis9aKbKUTzkqqgKVVddqDwtnQY7WxZrvgm1xmvPC3Ya8nnsRfnjJjcFKipWfys5YdrN2JFxA",
  "key35": "5QmNYV3iR5BRcxinBrEnJYaCC5FDNK4bkw8RVM5PFrKmANPDS1gCUq1KRXqy792xcM3QvkrvXAF2skmNR4A2LJ8T",
  "key36": "29xnhHD6mvyW38KBKUQJHwQhLo9zQ5JHYQYdBQkuD18fHPoS6rzMzJJNk7mVTtGmBebjjmnd8jJ6qNeTn8FztiFp",
  "key37": "41URLQc93yDgJKxuuoeHD5v6rigDiCVXrHciRs2mH44aHDyFy7DNx3q9CJYgXPjQAJAE3fUnhqAtK2nEn1nCNgU2",
  "key38": "3GCnzKo4s6jaxqfTwuDXceL9FdxLGvuvPTeF3EYP2sKh7JrfWiR4z9LmrqokL7fYbxhsmDZMiQGFENxV6NFXVQ6R"
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
