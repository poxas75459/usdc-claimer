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
    "4mhGLUz71umU2xjSuDDN1VHc6J6X8WXJP1cNvBF9xQ97dUCRvBxWUdFRxU6X2aEBZjy1NfKTzAKJGomkwcm96HdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SVhujFnopj34qsmuVhoaA7nZXYtHhgotcY8SDkxcvgxUznQN4hKkp4jrQwyP6Mn4j8JqgLW9hBzREWzmP5xnmFu",
  "key1": "4mw81LTzsvdRkMsKttjJ1e833XVtyFKnK3W57hET841dz7d8Vf4TrnZugupxA7s9PaUyj9ydjP8QMhoErYqD4DnC",
  "key2": "MuqfDcHNyUzaphJbKmBxAJqz9qCeLEHZ8jCTSdEGXiBXGAeDw9ifPvzbb572Acn53Q9u2kgfX6MbNQA68LKYmHw",
  "key3": "paE6PKZt97sNwGJDeGY57aGBT8i8WpkHNKRgzJsMav4sxYWRnwYrokxEnceZ4Hxr1yHkKQmBNS5p4xRgU7y1VBB",
  "key4": "2m9PftMmhC4kcTDtFKorEERxhG8cACo8G3dhJCysAqd4hYUy4sHsqgBtBKE4DwVkdaQG28gemGBGqDQ6VUVyrPsX",
  "key5": "3xVCfYW56FjiKCsrS3qrAc7KQehpkg2AYiiFRjaNgNdmuo3tM5xcZCb3MATzYcGaL7eEGGdc1wb8DEmuPohcxgNm",
  "key6": "53mVuExpHWHai6B5sodtSFbBeWojZqpYwbBj3KyBzZ8T8aaoexmp8iXkm7qwpqnpyNogeUbV4N1Hsyzter1dXYWR",
  "key7": "LvrX6PkCq4dptEPybMkTtSpW9GEL3HpVBdzbCfgXevb5zLdZ9VRRcPgk5iuAgtMATYq7xXfXwfXdXGSRFFwxxk1",
  "key8": "31Sk4Fu1c9UiwTscMvsawBP11WtfvmEQdUiNJNKE3mVprQk8kqehJ23ziK88CtgWeqWtUhAeuaVDFYAJjvF29HdS",
  "key9": "5m6W4WQd4ibzrmiPedqgCY7doSuWgWHc6Ny4cCSJdgTg1Wdg7vwoJ7XMf59iTqyLXFzPxscKDicd1HWMyuWswn6u",
  "key10": "3GavZDn5mYN5w2Uz6AJX1bhyGbzo2NZ6wPWy52VySh6rL36st9RcquoawUwBdPqK9dcLZGtz2ioweAyGPF7FDss8",
  "key11": "m8f6zdbRaxKs54u1Ny4Sr964dVvGoB3XX5k4K2CekLUK3Ws3LzVdt6ioEx3Xu4RJWHXPMUaQhZueqUaWjkwNu9V",
  "key12": "2eqe8HXG5mmHJVCch3pKbKewXnAwQ3CPLFjbLTfTqo8hVNhhroyQpM7Vo2k7CgRzshZUQu4ZP34o9TvBycNUaeRN",
  "key13": "4bzr8nW2nRRR8pCZHz3LgYpkJY62pKgdrzdjtL2YFrqnfhXQsF3RYyMKwm7DUX4NjEXNtX94U7EBBKyEgJDTKaxg",
  "key14": "3WFXbEEHb6JmKpnkS1MtPFDLV2imzZzgRWCFRXe84KP1uLcZ4oSApkNQ2xGZJuJHTGJggN4i4j82FdTSrwCmUbva",
  "key15": "44YyAgpUYxEucjs64jTAcEdigZRrRbmiLzCT9eBAP8ctJ5YoYT3bnxsyPjYRa3x8aJCC7gn4EJXi1HSVXJCHAenQ",
  "key16": "2HPdhJ7PjiBbAqvGpjsvPnj7diHpCsgh1qqQXwstNV7rEdyyXkzjEfRTXWDf2k92rQ3UKcJzAdgk5kBjToUHtjvc",
  "key17": "53XvbgSkW6zqjyEi2QvfDgvjo4i6MpBAyjsSGzeBVUvdTqNnVmZZiRU4DCFm3oxWaP545LefZbTBVeK2ACMREruu",
  "key18": "5WChKFLckztUdgqCeuuRV6HkjHAW9CgvfcLKcAi9h54wpsZmy5DVxzwv5nT6z8gUUqWhWuu67hDw6Eajwe81tQoT",
  "key19": "5q3UYbf7Gb8CAWyPL1g8wLeSvP4WW2mxTViwrTWuKnCS2EiBatLcPakMTvk9JgZuiCTs83LG1xnEtTedKD1CqNUV",
  "key20": "3nJd4VM1oJKsTHtLbFQXR1y4RX69WDS2TSJQVpEcYPEZcBm5yrtScCASkf98CAqL1BztnDMbqYCAHunwRqBdoYor",
  "key21": "pnaEQRQCzU6VA8CRwoNHgoi5wyfdQxMRp62GS2MKat8DKCvmQCgCoPrvsQNHS4njH8DB2S9tdf6FTtkKYjr9e9F",
  "key22": "3yL1FZHLrqAoBBiJXhpQmFHbztBokQNVLd8AFxPdyDNbXMfFFrrEy2VKwLscwfus9uGB7cTcA82x9LvEAASx6w62",
  "key23": "2BC7SBTNbZEfWrx9hbFFyCJqoeDZJmTihGi349hFfaKfLcE4wpbMhNTqSavUK2yGF6NqWqgNnPhdGtyncntF68Vw",
  "key24": "4Hr9xYyZvPESmHrEZ6FeXVa3qiJhNDLQF96FdhUr3QHnVDCx4pmXkxwBYPpaUqrL1FeJqp3cm9MV4vqep4bxmM2N",
  "key25": "ybriVMgaQ2HTw5zeNBCc5tufXpkZCPDDDCPR6dP7Nb9iCC8DjyZjoYMnA31ZFmoF7S6aK2UKvGPW7Eh12pvuWPW",
  "key26": "5eJMrbWaxUFaGCPvYSk8JVygg9GtpQqAVVa7EkaDV5u8PdxGv4WDoNKEA7bePve48tAeTRG158PsVRtTKRKvThod",
  "key27": "2BnGxNpR8uCfJqqtSMogviCMVo7dk1EzCafde6gamt7NqQmDBGT2FrUbFHoVhfEcARwWuAKKvnujjEKAFFGsQqqe",
  "key28": "3QmAftTchiKoyqgi6iwaJRTtAB9fHenhBuBYP9RQQo8TqPtGLE1Xexk6QWhTQPBg9HggXfX9Dfe1uCLYBWTtDWjL",
  "key29": "5gUu3wgPwg5Zs3nHUjWz8FNmNv9ULSnEJPHwcWNoYEZjVbFJvK2aFXac6YB1C7GNK5bm8bXBz6BfwN62kb54FDPu",
  "key30": "26QhAZhjAK7Zai4CNeKF1fgsyt8GuWNZfVYnwxKoN9PyDyzimJoUjQT5CxzXqwfKFNWkqLaAVqCq68w3VomYVjFN",
  "key31": "4SfHXuQpskZGT4hTYzqPTRvQKJNHeVNEonB5CrmUmZTGEpW9gFYX1Eb7Ki2GcDZiYwaMzHEw5FcdVMtFK2JNTLap",
  "key32": "2uV6SwgbKGresjkTxtYPoxPjxuABtx5EeXTN3SFHPfRnJNuxcXEd7cSx6ohDc6QRaxATyk2qEiyRTPfNrwa4Tg5Q",
  "key33": "5GBQz5ZuUnf8ENnmnD38WHKGEBTFZSxLfFTi1mDua9jTVsheGkaAsavHAWtBR6ziAj3JFVjR8Xa7j3hF9BVvqsVs",
  "key34": "7ZmurNVH3ufc86Dx5m2LkmmoHDoG24PYfQrHYqxkWoN8iSkUH4PwxhEW4R85JCm1ycts5Ke4LXWRf4z3AU7USnu",
  "key35": "56Re1U4Wd2MnRpqNUqfG7LnkF76mGyAPDfrRxHyFzMgfcK8fV9PiaAc7YaeDL5AYkiXPWxYH9pAwiyPJtZ6Qw3pY",
  "key36": "55u3nm5DkirN3gGXCtGyRGKYEeSjaBx1CR7eA62Qw7ZMpComt3eCUUKRhnzRL1aFnjJLKuXSdXWa6k8hBUUgqxgc",
  "key37": "39MCm8ReYkBwhTrMnoNN5u5dQc5xeShxXnmVNutSRdzLZbpABnMenrXepqqkFCqbdqYSipJyc6Es9KYNXrzszxZd",
  "key38": "5PuR4rrtQsJATgspYYaoc3U3gramdwoiknRHP9Mmyqm3hvFtU3cYSnqCRvk2pPvuMM2j7U2WmAisEZQwEF9rzFvY",
  "key39": "2iKiTSupK9TeJaPnyQWjArwAzajhk3ox8Cyc2ns2GdfLNyWZsCYrbu1VfKKz9s5AaCMjUhQSLvZ5QRQacZS97tpX",
  "key40": "3i5X1B8ZDERkCeAL96csvtXivE25yyrDe3oY5haDYeHyKi3JTXcjzZo5dpN2mghdAGnJBgrzFnKQC6iRQ9kzGTRs",
  "key41": "629kLYiiqK58gFW7V524FDZTAKJ74FqTCGWGNB9rZ3DT2TxQmJTzXyp9K1tUAv2xSoPgXbcvyFBznMNpg1xmjo7t",
  "key42": "XHWf7aGtLUAgxtjBuN6dS2RWh36iWaqzyhsGT7eqXghgnm4rofBjE8HFqyVcpHfiCdYF2yeKojTu882mVQMWqXh",
  "key43": "3HCi2LyutNNEKKNcvnhv1QVMjcyeks2gtPdUnjDUdc6EZPzYP7krdhc43KMZK7ZuCR7jzDqjRBtmgBmGf2QyStut",
  "key44": "C5tEiCbF3zYQFork8HBFXm8ptuU8oYeTM9JLQ6Dumw8xUfTi9UFFaJRVRxFUmBLfFs6kQsAD7bXH8HM1KqJtNh9",
  "key45": "4zqJMURic3hKoqWMopffXGuVzfLMwM4Q2yze11iNBFHcqDenWHCKNow2dJfPNbRrDFZitByjtYyxY4oKfJSrcqeN"
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
