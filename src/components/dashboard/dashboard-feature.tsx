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
    "4eQAKXfmANon4g2p46oKf4i1JLV6dyn1RSk3hyj59NUbWyNGvhvkQD96U2WfXFVFQKFsi9tPU7fjeHajTRqmmMA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8RN6ntWnETwKDKJXN3e894V6hyxoV5x13zndNwJchJpfxPBrcQXod4cSN6D2HQgmVtZfVc3nWSQeuGfZyonw8e",
  "key1": "4A5XwtiQCnMhzqZFYiKoMfWw5SfyvVk3wuQM7iPEfK23DXE5TyhS5h3KAFEyJMuPYVmkRX6ubYNQbcfgw4NRH3vQ",
  "key2": "c1bghSEVXHgjuLSkp3qoznM5G8tGwMNo2BQNHCstpaPinSwtt7eTAi1AN37Fgi77iwD1KPNPdHZhLbwVEq1bKWV",
  "key3": "cMJ5AeZfVAHmQ8Lz9FgvcwMNvPHMXfmK7ySEeNzXFDPyN4FpSZiG6Ky5RUAXLKkirBg2XuyPWz8UGJ8Jq41FZrb",
  "key4": "5osrjXg82DTdeJ1xQxWWzDMn1oupYZKUR4212xDCbarZFD1pJCHMBMUTsFFcTQ2QfGXixVuQXDCGDmqCJvgCmrcc",
  "key5": "23VwVbgGy9QiiajGv3x9CAyuPszWCYEizwjzgj1nJ2BGeCRdbo6wmWw2xCe4m92KrkGaXNPHe9ppiRSXED8BEMWU",
  "key6": "4q3Qm1gDbyk5mdw1y1PYG9xZi3zcZVodugzAkhPb7gQV6Se2yarQPR4QisP5oMiecFPVtHZotJVbv7CoWmHDv2HR",
  "key7": "51xzzGzm3qGXGZCbyJAN4U8Qbmx9mZnNLZr9Gj6zCrMxbEvy5pt5qxahqsehLCCKKDrbgxkDRsADYcMM8Xt7XaCY",
  "key8": "4BHmgGTdTM8A7mrCeMQ9BwzRHjhCm4izCfaTBqvsmvg6DdpvJ8pQxZgvD1PhD6WW7KwAKy6i5QSqNKmsRdpUYxnP",
  "key9": "48i6woiKD2paejfSSCLGLwL1YXeGeu9FPUPa3tzkUiaDTHmeqbBuLyjAHxARASraWaj6DtJtvAf36r8JqxagmKFV",
  "key10": "3B6jQ2JuGj3T7QAMuuotdCMUxRAY8UCNDT5vEcNDeWwJEGTDFcFXjcgshSr4e2De5BTWK9pPHrPdWoP8jBYpQ2tf",
  "key11": "2LPixE8M4pTsUCSdPLq92w7RQfKrfstwG7woufUYtVC3D4QhxoW5XKRQdfzGDtt1xmvtfYMfBf3HzFuyAZZZz3NE",
  "key12": "4XV8sVyvoVUqDeSHeiticKYCcXgmFaKvuYpRnwHmUYbu6tydS8YTQfG238VUybdJD8uapjzMdNaPBe7akGtQcsGN",
  "key13": "5TxM9ARZHEJ55kUTwUhqxBNZrcjvLMNe1r53befCHDVAkuX44iZDho2mKbLmDwsSVkw1YJnFoaLRCVhY22xc6ttn",
  "key14": "3CQ3BovAA4ugn65cqf1aUQupLKhVq64Pwxw7Y2prArscd75JBvVBsfYUukjCuHjEn9Dvsn7LWSMa2VycYDGrR6Wh",
  "key15": "3tRcVSu1fWw8kFgPBjEbYocfbsLhgghQ6ggrtuAwMz8FE5V6c2RaZHBxzkJ5UyHPSU8S2qxXN6TrnyWhF7DUxSbt",
  "key16": "2JMDGC4LfTVVEdtG8xW8E2y7E62zrHpCkzAZNLz9k7WddZ5Eqp3KPuoeRgqRck9GKANYnC35rpMEyYnGKMP4cwve",
  "key17": "2eQUuyj69xUWAQ1279ckJMsVqk38H25uEvrVksJdvYnVhixa99bru5f26axf68hZxhfRH1izMUFFytRJnqeDzECV",
  "key18": "2bYvmZt5ttA4WiGhmztNv69G2TMQKQLKbbWTDHvY8G56YAu2BFGZM8LFuwHE6LwEDTtyCpLh9DFnmizeQF1sx54e",
  "key19": "3wQKhmRA1kM9HHcApZtTdsCpVFxsBJkaUyGU4zMogjkDJTqdC12T1ScPXV9sL5ifAcsSSaBDqzSk7o7TiBcA69aJ",
  "key20": "4CH8wR47PZmctxor39UuxfmX4m8e7Dxc9y3kzTmKvbYhBfunzLQUyCr5DeGP8SX7qoG95An6ETAma1RnSgAZCFx9",
  "key21": "4CJu1NN68vdjf9g8TV4JPNB7CULjsrJ6dB9eSeCebmJpDUC76rwL7wCpRxNqXSWSL8DvaYp9hFkzvXB5vccsFhWK",
  "key22": "b5zVoSAmcLyb8gS2NgYe3SxAgf73TNyaWvUdZzxfCAn2RFiy6tbXxakSj4zPMuGJ9y7s8MhidkRqKso8e3Cb5RW",
  "key23": "5x64ZJZ21byxKoHjFQM9zsYPqHzctSLxDyh9iWqy3CFbxNTMmUy5P4fWJ6pJYxprGJ86NsKmSsvGFVWipegEWGtq",
  "key24": "3X5Au3AAemkPNNSyEUAvd2TJuQYySNEXB5iFqx9hNAREf9cQ5umPGzGupMkqKXpRyzrETjazAvGRQgZkEVAxrZ8U",
  "key25": "PxjizPRzgEdZgEhFvaBMAhZVqWC7TxmgjMKpbpXJSW8LmFCKqSDKG3ut8qnJjvHpzLrtUv1sqJxDCydjo3EZYUw",
  "key26": "4Xn9wjX8tQRbDvsoEPsedENyLtS7YAQSMG9TKuAiaAhnrWAMEp2Eyxryefad4z1XZve2nWeM1qDeJTzHsudJzwXC",
  "key27": "65SsmQmLcFP5rPp2N3L1E5DJTANDmg31nSqjrXL757sWncsTJHTgJGQruMak4pEWTFgeW199xNMcBnHwTtgYzLhk",
  "key28": "4odi3fwuZB9FXxmMW3Si9ekw6fRtGPusAJTLn4kmzS2FjJbZhELUyFuZafueMtPNbNQ2Tg35nA5KvzjEpfeHmecy",
  "key29": "63AS6yk22iMZky2Tgpm2PfyzMe3XvxA8AMT2492kzeSt4wmfeQ5vUtVAVewNKJgYodqv4u8AvQb2QYaufcGVAUcb",
  "key30": "4B9V8uv5DEeKis6wBKeu5P1WnJJgLmajfpJT4nVp7zf8RDiHRBUxJMF2MzBhFRmRZTyVSywWhFtYPB8UofUu38tr",
  "key31": "5JZKwNvnsoSxuVNT6Zcpk7ywE2toeR2NrYke4bFAu2givmvFYQW9ZQZFrD1ahssSm4jbVRRHhAXUfEHCTCv18Ht1",
  "key32": "J4Y9UenjbPc9ZXaeeQVKirRohEq6LUM1Y7N1FJjdk1eZhEbhhhNYZ3g6EafNyQc5c12aJucEoK5r1anQWb8okYQ"
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
