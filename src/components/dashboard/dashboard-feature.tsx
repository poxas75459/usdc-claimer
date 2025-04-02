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
    "4aUsLxsVerxDpWfbLvugRQNyvAr5tWj6h1SFvQKL87Chb6wa8DGQJJiqZjj99nBWMA9WMRYiykU2jsbJ4K9kUVBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XmpQkyhkHcW1SuVkxdTRePrTpfjFakTC4XGDoJYWDbHJKLn932HoGhm3MEqb2cmU4QRmsdMp18EYUBb59hjYMr6",
  "key1": "5ay8yMeqwVQjM8msrh3eihnvfLcTicLFCGtExsgaPszCQ1acjbAFTT9aZbYkgqdXhGcQ1PmN7qUVVyGZwF7mtYu8",
  "key2": "ngTZskveKZood6T53S9nNgLiTkwBNbmUinV9sk1bonwp212Pgt4Xn3iAhC5mezXakNCGiPiRXqgvS6N6ALG8D9p",
  "key3": "3PyQEzrJDauRDCG4a3CCfxuBtzziiPmQ45bH1nXocMfB5FUCB2NcbKSEa5y1YqvCuWWxaAkk2X5TAzsvKssjr1KF",
  "key4": "3VXfcndb9C1uQQUSTBb2fy5b6g9BXKZAPncsRb5jFtoHin3gV8BrYVgAKUn9rWhtYtVXwE6mqeKEL93Rt6ka3Cj",
  "key5": "47xCMpS6HyhQ9NUwBojvYhKaBUZzWBveB9yZKZQbWDpdxZnhhpEWbk6ypZhX5cseNP3niZGyrVQbS6aEbyTuoqJr",
  "key6": "562xxTNWxqw1Qp5qADZMDXhWBtJg3FHJHSde1KaVPcmKr6z7tN5s4EXpVNPnijUnmMqDfHvKkV1mRkkAite8w7pP",
  "key7": "49B2jnhdLTxB9gBQs6EZkba46oB49pYPzJjjEdFP6brAtRSDHitbJQY1A7wc5HmUJmB7U3EPVap4qbTgq48nF6Hz",
  "key8": "3mHvC9VVsjwPeuS4xCkjxw1AHPS79FMwPTNN4BJiZ618WF4GrCqrvjyPwNmKEusXVypQp7qXfqjQAWxsTyucHLT8",
  "key9": "4SfHCZ188Tw126iQbt6N4tMQpHXzY5EQiHwkC4V1xhne4pUxp6Sde8g4ZiqYZurSgBxisvKDHMauMRhFTQJa1Pqo",
  "key10": "2GGUdnYuvzbK6LhHJ7kUgmz2UTVGTNBhCiVhPiQggjR824ahteqZdEhPJHsabQq9fBm1frjwzkqNtaKXurQ7Gqx1",
  "key11": "32JRGezRsrxoyVdh86vcus3yLPTf5oAsGs8jEWsRoU9rFVjEqUNVbxCnjU6XteaNrTQp9Edcrp2kndet59NwnXjL",
  "key12": "2eDU1NJ4CLzwYt624531GdBvscrpuyd93Yw57BAFm6kspMmYv7GswnmNeULFanEipPrMeqqsXs3gHFAk8ywVqXfc",
  "key13": "27NoyUeCu8rPmmxjjMRz1k4qax5Q2cv7xp6K9sj4ywFvPgk7RqnLAbi9vPPt1rVMhEHWQvcmkXZPBrXuKy3W1KbH",
  "key14": "2RwHB2zfoiJoFAjh4kc26Gii6dBuiS8drFYSH2m8mr4K1SoTuNhWpmtu9i9iXmH4SRMS3qz4Gi5iSy5uev3xsm7Z",
  "key15": "3d87qR2ezYLmLhyC69u2berRdTyVAksnrvhqYNC9maFMkoUX7QjGz633fEn24FofpywukwJg9y7LzQ97ycN3HTT4",
  "key16": "4eRAmDJxexsRN8vAkUMDwGKrvNaiQ2Exwemx6coQR7owCC7qyfKKL5qqUKH6VQVH1YZaW1KfXgu49k413cnipRhQ",
  "key17": "2rwWheCWwAdRUheAs8s2fX6gpjNKz53uFKkzwAHS9JUiLDJHG9M2kRifAfCpQWa6jRQPcuDPKJur9uHUwUScHnmG",
  "key18": "4gebiYVxycSL7dMyGHakFmb7onSXmzuLY9iXzUmYDFPMLjKGEt2fHHaQWvpHkc4NRmoeQfbcmrTK3FYnRNjd2wpw",
  "key19": "3vyoiBp5X7Q3sZxtZxeizRm9ZgSPgDX7ofMbjeyFJoyJwmBcyVeFU2fNS4rYp5TG2v5sMVMFuSctp65Bv2wexbmg",
  "key20": "3VeKC7kYMSbC4ufwX58V5p8jv3xcjAhyZ9Nw5h4dW6e4AmwaqhmbJpevGvZW1F32VpYFb82AQb9gajPMbMoZqPJ9",
  "key21": "4eRMRKkwxbxUseqVottU226X5jrqbnAk6PhwAK6ax8zigqsoWHuSfk7H9wNV8dapku5QJa2yWAtuWvjqSibJXoJY",
  "key22": "2usXGC4tWb4d2Hgb7VSd5u1Ya55gwxipZDXaD7XpzqVw3mm1AEJNa2SdwzHPgKM9AXZdy6bXwnt2vzJLkXqPrC6j",
  "key23": "2rTas9fqppRTs9GQkQYjPWPVmy4CB7sNTV2gFhrU8D3uCbrFqA2qBeW8daZPcUVUuPssdJzQdCBzJW3Qqd9ZDv1F",
  "key24": "2FzDHq2i2ChTSD9TpWhqkhp5cZFc3bN9w8c1Ke6pk5WqYiA6M4N5pFivsR786z2Wqvm5qgQEDzqnQoziVLvwKHzw",
  "key25": "2DqCwCci2QQrGYXa2MpqtXK5W9ajwFKpdu9BJNzDqBYujg4ykEnLnmQu3zXPDcqGw39Dspf9zFG3JdADdRP2DYzc",
  "key26": "a5tEMQWbVS47S4ShHBcM6gKr8YthKWqntibgPEf1LY4TmPdG3ERgyczoPavhpiS2H5oxSu4shbcPwTsTtExcUTf",
  "key27": "5TJNx9PZRpLnoicNuMwAxFDxd5YshaGd1Qtg2Hre1uq9NxirkDJtmGoF8hUUGGk2F2jBjo7jRrj4XQoA9UqVTpRK",
  "key28": "N1dYp1YQqQtRfw3iXu78BqU6wMT1U2d1WQJCJSM3nLrJ1jVU3vpwmE26k9v5EmZhEkArMnBQsNC6RCSYqy3TaU7",
  "key29": "5BMRmea1pnvodFc2TpVhqibGH9qm7o4RWFzwSUQaJCEquf4v7asERsDdzBNCp6iKrcDh5V3VUzChdmD9SWqzeiuZ",
  "key30": "3ftubuQ4GAw4GyWDuMTZdW7ZSudMkwqfmWe2an1sZrodKTGCmJLcJRSGY9ThF8CWdQwAtL9mnzyhmVJieZGWQDBP",
  "key31": "4bXgACABjtasm5QYjfjFFgLzmXZjaeWdDRmDbSdq69qhkHixivhHgZ6fGS4xdby4Kif9X5fGGF8KhXYAvqBhcrCj",
  "key32": "4PMssRxQfaD8sgEn6qqMss5BqcQuZxnBK88T1SbN5vwFBsE1LJhLbqrHzo2hge3rdHaBHu9Ri3CXpNDf6K3LsJ1r",
  "key33": "pW28qBRiKc19KvUmGNDXKbTzL8CAWA54ZUnTYPiYzChPxnZmHBPcXZSRAmhQvVpJrCtYEv1Di9opdmvLLgPcvvK",
  "key34": "kE9eA88MMgXNdMiSiRC7HKSDpt4paawVE9GiUDdaXFJRRLjs7pRZRfMhv2Z8rLkiEji2YtzrvRYud761dNybbM7",
  "key35": "5QSft5uEZ6wt6AU5S7CUSF1pS1gb5CFpM9fAXwYtcVPX3Ljbk7W2ii9pRTVKqUbB5dxmqyo1jK1FK51g56E7CsLM",
  "key36": "5fTNFz7z7hBcETQM6eZkDSqvsNAv9UZkdbfBJsUqpSfsEnNMuFb47Z1qZTcAgDNGGrd1DMctkkbgFmXaBEhf8UWi",
  "key37": "51xAPHX2nWsFgFzwdAhguMeCvgDjt8mCnppPCFs9ekb1cVBMtTAAeRwp8TQe6gc3x1UqRtY9MxejDWJJEBLv4DnL",
  "key38": "23enCXQYf9iE8b5QDmygUUPaEhkotDkZ2gHZGZAZbZBP3F9s3JDjDrR9ezLxEdfWfjek6LdxZyUfsGHdK6CtNDhs",
  "key39": "hBuoCw9Mu5QUdkmSKVPoMbFtaUQ4NjJYqnDetYF3moLQnj1eM1KrdYu1EqnH7RhXKNac8UdmAgGPbDyRfvksyRP",
  "key40": "5dCNebFjJ6SbHfxv7p7MpCjvuhoTd6J2e9iu9wbNZtvjZDrZEWVyRD1DXnPkYTC4E3esXRFiubThoWyqv4TGiDd3",
  "key41": "67iGtftMAw8VV6SRPC7PYxiprQymN5mZ3rTtqmjXAW7ia9GogdGq3cnD8YrZ6JuJNPLmcMDgT8i6ddHv6dCfNw6S",
  "key42": "48fdNqLgxteVpdNX5hGwaDPVoGSfzTY5HJ1M1rDpDYnHZEjrk1hgZUsDofHbqBc2bfjrdnz7MRxSxdaxWMLCqtsq",
  "key43": "VKEzSCcYUEtFJcFtcgRZdGpPhZnj4AXtu1S1LSBsAsScJPR4ANtgKC3Wrq7uDMLhAZhAEdE31sR46rsRCgwAJHe",
  "key44": "2TpvKLNgBS1yMB6YeKkZrneK6FjgdbeueAp5UhzDoZd4rgm2mZaJ3giCBoEBTHJnmNDt1xeC5pMviBguYNRmsyTX",
  "key45": "2o1uWEggs8dg2yNUeEWeBNPY1JsLT4v7v52JpYMvu6vjvRNjnncymSGbX6S1HrNhhUyDR1ve9Xsq6SnExTQoJoYC",
  "key46": "514rCE1JfmRsDEb18GYX5jE7wJAU9qDunJNqgmvXXTBGXSpT2qDXRDqo9oaXh7iWKeQ4Z7rNMCyC8CTAQ1J6WfTD",
  "key47": "2m2F3inwZsbcURXDKGCUQr4nDfZFrgTvtfQG1YHgJohzX7pAp2vFTeoSN39iTB9dqBUnibJKitJv4dWhzzN4mwoC"
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
