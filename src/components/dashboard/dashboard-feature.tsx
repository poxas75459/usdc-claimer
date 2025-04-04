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
    "5H2FhGL8vdb2jt1kTkX58bLdX4rz2ywsYq1e35oPai5nfsnQdgNnnNHtrd1pEYvvmSoEBabgFbwkNcPWK5RoJNxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25F52h4arvvSMhJprro6yrcjPg2TgCEyU7HRVFy3vV57BXFtjCSAtbK1RoDLvZj8tdaye8rGRt8hp6yZ74skzBgV",
  "key1": "4jEit4wVQq9MyCEBMcEGiNbuUhxxMGCg4mvZ1w2GJKvtpyPub85V37Xi5Cy3t2hnx6ewTpChKxvFsm7anrN2B8Du",
  "key2": "5xQV3ivZ6fCNUAqDv8hQZuBVHKxAwoyJodtYbB1wrFMaQBwULq1BbGW1VQDsMVMiJTMRHNwwfAFze8UhaMoXby32",
  "key3": "4rpsAfwHcNenqWoqYMJ39bGdG8cRiv1MKeM398V7hD8caGt3bWJzvmd85Ys9rFmSv8mygcGVUTuW4u9MgqT67mu9",
  "key4": "2f3RwV2HPpjwS7wGVkDstQLYdEeWA3314SKkS85ynE6X9o3VP43cqR2L74WSv6NTnwQBrticePQEq6pNtiuthVxi",
  "key5": "5KnX2Qd8VH9Zt7jJtcNhQEgo2jQ1iuMYBHMnoe3abemiwQ2JWMBcERYPySSriAMYK7XsHZjRdDdG3nAHbJVbKpA5",
  "key6": "2j4YEFpBZRFXYNe1j1GgzMMay3usy4veCYyEYyNAUXvQpjkBQe5kcYgn21S3jhFEaENGVPpDVCJhog4shJks5p5h",
  "key7": "2TFQnNZjzat3824kjaKzywwuhY6Xp9YuE2gY1w7zHdyJRfEQZjYZq9jiGr5sAwEEXGPZ9BgoYCgrhdK2sqno2sF6",
  "key8": "2fVqscXdHPsdSwdzkmr3u7H1B3HGCY6xtrZzfxEn5nxypcncMQs3isvPyHWPJDxjSDcaXYBgCdbHLqTDWhf8WP25",
  "key9": "4LK911rgPa8F9iB6XCyn2s9GaHaYERPFggDTcBCRzsYHHcErAQHnXgP5J9oyiQxTdLynenifUS4bf6XaYsJos5Pi",
  "key10": "65qj14Ts5jBHhwrFDSKsfSP4sraoe88w1iMG872n9E6J1CAVsikVJY3SXcPgSDF84t8ETVboB5t6pENZMkEioau5",
  "key11": "3cwV8NNn6AxVJD64xawYNFqXAWbcPTrCD8PstBzERrMbcj21bTk2FmXNkUYdhi8CpVwmHq24CvsGit7r4qHQ82k6",
  "key12": "GUssygfEaUgp95swDMNMSLXTR7r3FkF4HS6HPb949mVSFnAeZredNnZ3QfaFt5bouaPTUvCzQS6k6U6UyybBQNv",
  "key13": "29ZUUmSTVVinPWK2tGaEeAeD436Gwhse9EMwn4CvD92FuKW6L24wJFy2yjpFoug6abkDhdNAkKV7EBeVcTjjNtBA",
  "key14": "5AupriGPVKXBnKEJLEzVyVqDcYwSeU9AbiKkFWkNaGHz9W7qxZDVVjuPJvShuWKADNpE7NmF3PJMKJFjXBzYpoGo",
  "key15": "34Ko6wcYmkzNgMNAAZtPn9sxiDQ4oiYGYLiCsfTvjGX46vTfE9dqJ4oHxLUSeqhCdouMz9VgkpX8SmfMQgDZQYht",
  "key16": "WLxyE6MTttLmpmhnGx6q9RgXAPMbrLLo9UjU4hfS8EbyV9XSpYgZQ5S2bZ2LRhiDKpCreBT6D744CFbbderKukB",
  "key17": "4tbgF48Ny4h87ZtUX6YhNfnUb9J9cuguUb5rd18jR9nwhy6ZJvVhEue88Ya5uX3aHDwv5nDeKMZRTXSqWoBe9YQu",
  "key18": "2V6rzUeZx2K9w7KD9KnuhiTkLAf2snnSoL9XQ8xG2SDKj5UFX8ZLHFP5GWGLxsH25CGTkmicPfHPM3CQTd2FbwTN",
  "key19": "iA8Uab1zAAi3o4UgnGzuM5VYpGM3ZfwwxPYQfmwNWVyfKTTRHEzxWfXaK6Bghu3sEPhA5K1aBuCgRbXsJNxHmEv",
  "key20": "122ejgUHp88hKoAnK8v8mc4T44P411VGfWY1aNV2Me6KKHA9T6ZMvUuDS78EkisSMLuc9T48GNsqK31JcLFrKVAV",
  "key21": "2eWTecTcL3LKb5Bx9e5CwiJ1rnEuKgxEuoEcaBVygmCgxE3supxwBEvw8DvPL9vV9suMfGhE6FK5tQDCXtLFK2Tc",
  "key22": "2gk2b7dYysEUCsZGu2HfmBG8nN4Qes8uj8gbhibMjHWjZfLQ1E2Tc4Ct6kPK7D5p5t5AtdJp6bKseGeit5J9n8QY",
  "key23": "5gC9dtgtNsMXTqW4Vhk4U1jYsDTCD5ZHB7VBa8zYepBfU3wezq4HWHepvLNwc4PmRDe5FHYLFw8oHVz6ZWx41EG6",
  "key24": "WRD5uxDSNPs8iTGSyduMdTzneu5U6edF5Mwk8nLF2E37m45MLW2WvSGQ7Cu3dq88oz8YNNu95AZxLf8TXzLcv3R",
  "key25": "3SoVKuJu3zyoPiqufdifWcx4zFyBBQ4Q91caw7TAmY92ymTybxq1Lrch5yxvwNBGy4TBKqG2h9YnrctKbEXTSX6s",
  "key26": "2perQoCczVBuaPcNKQC32uYmEC262GNouJZm9rxXHErAkdNpbW9fQBNgoTd7EUbZHiLpw6TNDs6MCJL2dqFq6sAT",
  "key27": "Bis8br67yMMguiem2sef2qRo1Ljy1DLVokXqsxEv9Yoqy13hiYx28f1UhRjf5tEWzt32pbFJ3T1hoHkELrwnEbc",
  "key28": "X1QfkZJmGDKgseYjMGKtJfoF1JXS7ZUzDVygsAVRkJMRt3p1UG1SaB1R2BY6XbjnxzBENLzJJng4WJ9iPkTM9s3",
  "key29": "2gTgYQ4t9Um9RQajAT1kGCTqiBLC1FP5m5ZwEibM2m3vKnj6rfiEqc8nnQbcaos2WHDJCtP8LCYrvcrJmoodd64c",
  "key30": "2fqTmNs3fZ26Uj1KDSWMeFd29iSSbm6yhD3YkV7gvPfDRyGT5senmvdzoU75as5sLQuGm9y9bsw18zL8g4z6CAW9",
  "key31": "gy6Ys3jcisfccryMAevvqZi7d2fH39rh6JVQYKAoGcaZmXgA3PzDUKpY14gieM1wqjoQ7odtKZi8VGbSgwXiqY2",
  "key32": "5px12P5ojigzyzXBvLPupXkqMqGz9PZKV2xrEPKMnMfvmngHxf5H8yqAazMf3XKqHv3dRa3Rjiic6tzZMw1ZCo6b",
  "key33": "5g3GiD93buvWTLhQqM8jDZvW9HfYs1PxThNGwDirPHHvpAfC3JxQ98TpuKUmRcjz32J5ifVLgkEJVZXFG4M8vRz6"
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
