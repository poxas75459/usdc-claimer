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
    "3PiNN9JPa1zXqjoP3Y6REVKPMyFFPmF3Z2JJvrpEgVL72GNtrmaoz5Zc6D3zoUrJi1iptFCUwb7aggii2yRVaQuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4SHxRnUkJKzgiXYEQNiStWTRZotaAbKmU3WLRocvmQTBnjk5uWFcQhcR9z27ZcPuiXCxdAU3GbFAESSrP2JBVF",
  "key1": "2nUy4NixJVj2b9hyZqyJGPn1nNkzhzMzak8JFwLENGwYUPpxuhs9USDXpXkNXvAeTke4Q7AJEynDzFPawVsPyEaW",
  "key2": "3FfXnJWrtdiKsmsePTfTLVragq58d7DWgSFnZNQwWoXV8rvs2B9RZw99gTN5kVgV5zAwUoPQZQBe6GSjFVLrQgFD",
  "key3": "2vxdmZvSqXTcGkVc9PhbYXwC2DekvitKuixfLR1Tsi2Xw2Ays7Ug3AVt4qHcsmk5Mb8huNdaeriibBdZ64z1wdsA",
  "key4": "3oz9k64RFta9pzWogjCCFinYKUUwaPQeR9yiDiKdftMZYTmmn8cPSiVc8LVyeRDeLQDNkNwBhssHrDFKmywiBgwc",
  "key5": "3nbiYGy2zv1k9cxnRAqeTN1DwHALdo2XEn6NvjBQuNc3NnF64THNydUtgV3ojAcxdpgyK78xBSK8YMDzN4FCLYix",
  "key6": "48x9KQRB3bNV1SBGSSSnCLZtZrpwNQjbiwPxRvynUz6tPivkiNfZpY4XwvNHsuBn1Meah4oYZQeKQAV8nGmnk7Xj",
  "key7": "4gyCZyeUan6oGgiA1J2Df5GMyLaVyzyJgNtyGJ2u4o9NCb3m5vGYd8LLFXzvLV3jN2q53DSembWap7guFJS4ftP3",
  "key8": "5d3AWd8Lq3xbbimdeyC8YZjqe6fmWFrdeHSwzJmBxwuQHqoumz5VC8CQL4A9MxwBha6CrYN5L6ALFaYZSxayBPB8",
  "key9": "3rc6TEEruYmCmfUSnmmKZUp9u2Y1yPws7yHqyWX11Ru8hPo8vH8mjM7NjC7VWfEU15AzaPL2joP5Letm42Kq7j8Y",
  "key10": "u4dX48xDN2Yv3hCt3DaWUUrWQh74gs6THcc7iFuXkUFrBV9fmajd9Rxom4hXVD5TisGdgVhEqJT8F7W1BBm92wW",
  "key11": "42mMbYpBLwo2kkcGTLJQwhj9iKGois7mci6PBnPmiMhnx6M2Jh1FZeZodY5vSD7RmwC6ks8eLw2xcz1JMvQtxJPp",
  "key12": "2NUzeDtDorbQnu6xwfSu5PaV4rHvYxheZq7cchZeoWF6qbrp6PcaQEYViXQYruwMtwxr9C6ef7yGuEWwG1yEEmDU",
  "key13": "5Nrt8U9f3RqgAxn1SeHoVnVW4SkSq5wq4VHt4ggs3NNDXqBgBaQfpP1YiJLNeRg6NpnPn5yePsCbqAkPdPeuZURW",
  "key14": "4v2Bt3RXNquBgsHFb4aHK57eyLUsHs3EVRH4SxhM9D2XfBFYN4qqHn3o5uoRC1nq1eBfeHVohn4QVZHfd1AZwrP1",
  "key15": "5Uep1B27gDTnZ9vh846KYqBEbTPzRDL7ruL4CRBSMfqKfAWiSevoMVR7EZG1naV6Ybf4EhYWLL6MVSKHPTWqy41N",
  "key16": "21BWbnTqdR8WR1iqgqTcqidn9HrePALzAwVVgW1YGZj4PLTd9eu8vUTgp6YNCjmVJusRojJecthvCX2vqw68D2B3",
  "key17": "4S6esX3UNuM8VTEY6tgNHL6YrYhh1quthDq9JeVKa3X9qpiaxco7eeLrXcVHsq2KUZEyoJTLvjQEsvPe8nojMUhU",
  "key18": "jik4qaQt9xHyPRxxpLKVjWxZJTw1hoiGb1kDy4Absygx9GXJdT4kx7pP81jGyWVv81UWrQnakHQRRV2ruJUrzYE",
  "key19": "2u5SHneHVpS33KUPHyQvFPyFHZDkW33C5sPSFwhg4SebAYhXwvYrdnYXFqMRQqK8abxmXrk9PTVWLSSrmJSMfyUU",
  "key20": "2izCYkvYLNLtKpqAEz9MoVEJeNeTinW7pRyEcia49taUxUgn2ViA97wvM6Pmchq9qHkNES6tURbSNPqNWhrz3E3r",
  "key21": "2e428rT2a6jW3Q8q46EHjioPyHVeUZcseW8DEA7Y1FBJbT8Jn5emxEzkbSJ5juFzruEcEj2Kvmjp4mkQxSPWgsG8",
  "key22": "3bfmF9i7E6kLMMEV6wTadbtTiHvAD46oWEsKkb8ML7PibAE15ujgdQ5rr68YJ1uDHWcyaiLvzqUo7tc5UPUUGcaw",
  "key23": "3bmLMpAxSZX72Hv8vQegJCNfuLbaXC82dhxyNDSLt3hfUeWjp4xua2gGAouNVgoVkggeq7xtDPYTAkgffKs2pgAX",
  "key24": "GcSAmjGFDNaMbTiCsxaHDsTg7YX4RUKVsBb64qm8ccm2VuvbiRgGWZCsttiACwY3qPinKrqPV4qB9W5mXLtHjQe",
  "key25": "2GdG3zMamB8DVb4pqtHA3D33wJudgf7FodJwQS3aikqGBsADLFSgBakC99GLLGRSZVftryXrWHvaJko41UVu8oSk",
  "key26": "3jMSiT23CsetDrjitoPh9Uvyy4QqAGyfxYEAndLz6F25GGHAM4THMouEcpyYqmZnUFGswzNgwUR8LAUKQWVJfWSe",
  "key27": "5hby2RPDV1Chj3fBxzHZ9tGE75nigNcJhkNpGKWQb18u45Tstb4Yip2tK9wvU47y1uWr3DamKqp1SbfkWGmta64r",
  "key28": "647FpJ64EAVa4XgQcaRtu4Pmc8nExVaGAb8127AQ8nEDJvDtcvE3MVJ4M5UshHgdqSLRafYWUNoJEqJVnyL9P49N",
  "key29": "Q1iMyt9LaNTVpocYHcMHHMJuGri18u6AV3Ui671y3T2gByxXVC9CnBgkiFbYjx7nGKe3yZFYfH46JzvsGBnw5n4",
  "key30": "2HtLkiwWa2AW6wNGzi25hjZGBGZ76myMuoUnQd8fwp9n6qJiC7nV7qZpw6W1VzD26HiVkEpAm6dhCk3BHu3NEobw",
  "key31": "4Po2JRS8VaSbZg3ktT9xF8WkaRnAdnqQCpV7xpSHgpvYCujcmrZcHjd2GqvVt7euQeZ4ueDPMyRfga2p1MW1kuxa",
  "key32": "3EdgcGq31XiLKtxEM5wNm1p3vNRK1taufLTKYKXehJ9ihwnECPaSWQMfMyCh6pum7mZreWU1rKojUFntZxTBf3tw",
  "key33": "4FfebqGL9fujWvZzraXgQZ5YkFo9YZkpvgk6GUA6VB72zxHU4Mz9xFaKatyGNwe3oLrQWkYHrxGnYz2NnugWZtoi"
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
