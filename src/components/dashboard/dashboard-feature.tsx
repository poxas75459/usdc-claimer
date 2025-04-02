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
    "3552ivs9VxbcLGF2UthZHDuunh49CPqXcgURVs3nFimLLYvnfYmkVAa2UEGhzaaiNeDKVw7SJ5R2C1wuPJv4i8nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VJAEbCNF8s66ALak9nvmR9rmFBaMSiqZMeMqouk4hYBF8xDj2QaGLa9U9XypgwFVELXdNqZ5z2MHFiY8HC8MBq",
  "key1": "2CQhAgHgBMD1BcJiZLPznE7kRBeMRsk6oG1xuNw2eBifbNbo2gDFtzQ6QovcKoKe1ykXUXWBBfmZs6GpyoDAZjBJ",
  "key2": "3QwBzCEX8eWedqYB8D1PomYFu3LFMVeHqFULGUftR7QFRcxkdGLwA4XSveJVguMWHzaPSF2kS7y5syuZzQiK8phN",
  "key3": "4JT4n3q4gLv2xsQZDdViZ3ueaK5N4dpJ1gzSBjeYNVaKcaTjTkBmjvap4SwvJ9DPCzZkajPBjXdwoyDK9uLFJvGr",
  "key4": "4T8dCqZLRjsEyGRdHVaxiJYSU6eJD3iLSKSBG9pEvtM5wx7huwce9gFR5kZtdq72ai78mNVZZrenhkCUSfQ9kGZ5",
  "key5": "4fbh1zQFErxrKYfLF2XRucbhs5VTi7FhgGMfKvYJHTS5cNugPtNh4pTheRrU7Ez6Jzv3L6n5GF7s49sNboUKCBT3",
  "key6": "3Z1e25DhNBiQzbzs4Va14DAax7ecQ2baSmxQQeTtqkuNjJqfgiyRMKyFp1vNxQW1pz41PmnkjGPCgGPXrqm3eJ7A",
  "key7": "2DiebgTguCBdQPEkuanBXA7qtiPGCKVx55Wz9snF1ztqaW5Z9L5G8DjGfK8xQmfw6rCL9KNxDKpsokL1pPwEx15m",
  "key8": "614eEDBn16i1cWi3mj91ZjDDWQukfN8ZNC36SdKTEqBto6QmHRsQf91NWdVQf89sPb4A5KiziN5RCbzFpTTjNYSd",
  "key9": "3YNqdvWQpjhAXpe9r5nBQgNs4ZkERQix5j571wF3msLEWAZMkpkLKZRtuUZZcNANvMvNRSBCx4cVa1RRdD5ypX7U",
  "key10": "2AgD4P7XQX6t8ztLMtrQneQj3piC16RweHxvtgsdbtHvRvbpswGKhCMphXPP9R2BFwkYGdMJtbuFoo3zDmD2MTub",
  "key11": "3J9iJXtKucrnmks6rswefEzV2pitB5K2Brry2rHRh68VzMwArbnQJAs5jheSdgQsDpaJLDdHRNksnKuw3ofggXWE",
  "key12": "29FeUH4drCNvAipvcnwrcwmNnMcHNwyT9gRU9PiME8v59f9gHbQtMrBLsivfXqWD8TWFsuUpxVBJaxhLqNQJLJhs",
  "key13": "equR1ouS5fztfkhwTEN2uzcFB8RYeEfmqN2yptQandGvN3aFs58oSRUN3GJzCSJbBWhtehzgTCcGzvHvWAC2Y6x",
  "key14": "4UZdnA9hQPRz4zPKf45PMBHopFgJG8bRgvsfHArebcJK6x7N4kwCvtcWuscafZoXXhS3cdM7bWdmZCxFjWQ66x5r",
  "key15": "5JSJfxyzSsjuHy49NHtTTfg3PvaJ995vU7Mxvs7x6pZPy65BJLUJkdsSyYpVtwA8pVvvwk13y122eTHRYgMKgUr2",
  "key16": "4k5MqHd73jiKj5zf31yPgFmFYLyV8S98XoR18qcVSVtTTRidWzGeNxUe4yGM45tbeG8k8koToxFQC2YWD4gq4w5C",
  "key17": "2GjVrzXnQh952BSTfhZ6X3ifSVaZHA2roT9EuVs44yeGfrLkyBY8UAG5e8HLMfuaSXGvtaJuRTB9UXTVbbjg2KAs",
  "key18": "3tnSsEMzM36qDhkqnuBQ79jwqhyxBXCQsHs1KLFC58SQpL4hLXAzfEh8cG79v4pivGaeUM8LNmU3UsbeiBZm3ozz",
  "key19": "5HeNC9g6VY3tjxjE5Vk7wox6JLW41bsBPV5Q8XWRjaUQ7CXLjfwMqT4prQ6d1YT8GUfpn4F2Jpc4oEQa8PUatVdA",
  "key20": "5Ar14JrmYtrGRk9ztwkWkveQ4W1gPgy2VJB3uFZA4z5Kxovb82R3HmSZQbg9X2iJu43L3ZrxpcKADkKd4s4Pt7Hb",
  "key21": "2LjeMh66HT7TURdKXkH6of4bUPkzTrfDc9oPkgUFXSRd91WEKp3oT3aNCTVUgGFxxaTaC5rio66xzLfkdiQ1C6Ep",
  "key22": "bw52iNFSaJbqVUU128i9WevnTg4ezfcTeBFaFHxeR8DLzUgoecoyUJzGfu9bbuPYdihWu9HA29QLJt41kx5rtLG",
  "key23": "kpuw5oNFp3NwVD8RbsfaP6QGo7Za329fL7Nh8XPRdoX4A7feTknJB9XaCrpsD1GFz9J4kjAzVdVNj6YziHJotJc",
  "key24": "5RrFcYJNX3eMK1c2tMg5aH6mLMNfr3dHGQHu8QRNihpxJBrCuLz49gQi74nt2JLaLSYy8Qb1a1VcKC5uSij5xM7j",
  "key25": "3pS1CDEAcTuxpgH3C5BFUQK8Vswa8yQJbvUrMJSCanEZ6QbCJKauzwkJnGQipV9VNjWt9NUXuxtNzo763xz8o1Gt",
  "key26": "4PB6wMcqkszvAqLQ36SbJ2ct1EFu6TvhUcFkuw5PTfVnUUG5u8rpzP3nvEMQ1EfmmoYFYAMysntS51dSZja7cxND",
  "key27": "4mfNNrzFxMAKL9iScD63qRdVEzh5u7QaymjBUsX6Qxmxt5A3bj1j3YX9spSQ5H6KCkcbE19Vy2c3dG95TM2zHU3W",
  "key28": "2i8XmZy1AwiuN7xt1xkHobKDxhgyJUtc2PPDxZdokzyBiMxdeNXaXyyuobTfv9ULFeFyWnzYoxpMRwHJLfi2bkGL",
  "key29": "3htgMEfyWjDoHD3pVN2iFeiUjfUa5xCwmH7VyWqnzuJTjACbejs2usFLfKAEU4AkLVJUcbd2K1grRd6pYkAFmAQa",
  "key30": "5nGdZYgX12gTuF3SHchkDcF4SpphFPaf6F9bwLRc2mdKA2MrHJaxpSttJ9RFhh2NEGBvpDFc56HUsq76zTff3K36",
  "key31": "8PgntPZUTjPLzwPo7vGVmy5aqbVpnTgzT888MQP1mwiJE5QgtfC6299yzqemgSyRTe81qCtAP1oCBDH5ttCpa1E",
  "key32": "5CXoenyjTy8vwFEihWf1nG6xFpZnBuovyJYLZPLdvPAHt3JGmMPQqixjVy2n2Ej3g7YhoVNuio19VwLScinVu94K",
  "key33": "225xahKPxowrDsVK2iq2F8aT3pf9CwDnPTDGdEsKfv7E2ZdCW5VUue52h2B75uPeyFAQcXzXiu1jMRRmg6hj6bFf",
  "key34": "5btEjSyRXieNquMs4buwawwqJcoucipKtviuE7kYUL1xJDZa8qFhmpy8nxS1AzAWXX7ajSQDjbNUd6YfUMtnt3Cf",
  "key35": "5rXrQgekAfL1GSM7fLgAQbUR7wTvT3mTG3ZNYuU82A9o5jTrZU1yQUW9FJdR4e1xChtDCvE6E5mZEP1n7RYEJTjd",
  "key36": "64XcgCUzY6hNApqv2wHCsx2xTVsnUe2CB7CedvhHq8KwjXbvTgTDtujzPCMz9csWBFW4MFwubgWyFMbo27xeMaJ9",
  "key37": "3BonjFLW1vGhJ2Nj5ynemnkXJJ8AAFS94eNTQqvS5KPkJTJrUttck8eQJJhfgnGo1zKYiHh8vKnJdxKgZgcHqfib",
  "key38": "51q7MtYq3YV5FmG1vpLvLJCDrUBA5hy5YQEqmiiEQiC4Cqh8UpRJBzTBeYMYFp1h7rx51cZYAsfR1fRH5jo6MZLg",
  "key39": "5xKQqQ2cq3reuSxwbw7F1rNU59GLrTTRohFgjNDJKjnFDDzVbni81iwXXY58PPn44TxvNG4ggHGnWXSSWDHk1Qav",
  "key40": "Fp3etZdt8feb3797pakja16jjHpT6CzYnEyyhWGKR2K8uCmJa8veNnTxWKidVW9EzgGy8XurV5ofBBbPJd65NTa",
  "key41": "2Hb5VogarTYuRU8TGRHk65Ua4cEEK7DT7WdcWG217UZjrSqy7FvfuDg5g6Bij63hUdYBGVwVfGukH63gwrh4Xpbc",
  "key42": "4pbfHHr5FUbXoSA4dQV5W4gYpZxVidkLgJhhTKFuQPXCw5Q1JT42P49UhxyDfepZZUN2MbXqXmJzcL2TAcwpJMME",
  "key43": "3LXtzvJhkthhTJo6FM4qKJEVNpJPxH4DwhMZEWouNmMsqgrvbYcqeRwQkq8u7EJbH93YmtRQxPaYo3AZtQH6V3M1",
  "key44": "4AdQcAjbkgzqVqx6YnxRRPuwwbhv7RLh7EThmdUUMx9aMFa1E1ZQxcq6NFRLmxAzsKeFhWmUKbKuz8ngC729XvNm",
  "key45": "4WtHexD7v3FRjWpFppTA8x2D7WS2ZQhCiCh4Skv3kXJgRijKaxMKyEPXRNYjdYX8ctMpoEsy5Vrd1943Dq6ff72n",
  "key46": "5YLUGf9qWQdZMtJA3zbizM4fnTskegRspj36kwCfnxGDJtrbjZxqpkGQpYwK2ZbxsDktUtXE9DieCWpzhHKira2a",
  "key47": "3vBvh2zoZxuPGbo9ZMPxFvRZdCNu6X9CbQci9qQQ9HuRRZ6AMH7GxWz2FjbMF6TcAX4QpwxYq6aEx3MvVET7bxVh",
  "key48": "5ZWSixkqFgMz3XnjaHE1WAHrB6hF7haCYYgoC6mBZbp8YwptausdMTvYKocW9pUAXefnK4jvDGmLzQDmNCBb6i6i",
  "key49": "bbu8TwKLhUAbuoUzQp8928nMTTvufmxk2pfyfkwmNR3mU6uhXN5a8zXvTadzLPd9GQCP6MT7wGqAG3EeRtcjiMV"
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
