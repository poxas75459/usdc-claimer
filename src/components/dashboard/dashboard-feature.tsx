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
    "5Q6w69xsfT2EZ5hZsgACKFABwLTp7ERLsedxActoBi4vwka5toJ8SyA2ZvwA1b187dA4q334rhA6xsrSzdQgRucJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aA2y78uXgYyAgQA58SNBTEN6SroavSLWBJQk6E8wmnTnf7Vzi1qTr4VGYAPoKdUasrio6hXUMthvgjuhBYYSU9u",
  "key1": "2BUV6Un9nMVdy3HXaNQ5qWmwyAVG4FrvzbJE4SBtcPpwby3QhMTCdN4EYTq1X6saiTRDhVuAZNFSXLr6ftdqdYo",
  "key2": "4CLB29UVacDdi2BVaWHMMEis7mSjbENKo54LnSV4WtYeYXdFQkKKJHruVcozXvmRrXG9k5QH1AyMokRypcSbor6K",
  "key3": "BWsVW6MGMqjuTwfXmbayMaLkRUyZrv9WaYH9uAhEYFxodfjjXwPvcP2nstTYuZUVYb4LkgzJXkVUdWnJpKustKt",
  "key4": "31A3uFxeoCzpp3jqvqvjwS2g871B3ejK2oXauhMTAv65TNtn2qJpYXaC742F4GbUYpjSNfiHJcCsoKdFdEMRhkwh",
  "key5": "22FUVwCh2gkbJTVDMRYhUojFpGmnVe54Rfbzo2DmmxNPVMa44Q9B7SL3sApXNJJm851yREsLMUJesDxCnDVfcLiH",
  "key6": "5S1PzrQaTG5WjsghK2kj1rwYZ7jT8MayDkGm7fDmcSksMB3nnTzxBRQMKkP3ZJ3JnbRZpYWrAfFK3oRhzrTPsW1Z",
  "key7": "12eXta7sKCDKJMoURPnYCwB3gM1XUo93pqcpRf9DPcsQXS2mHfVoi22wst44ELEpHajJhdgYpBGfK1ij6mo5YSW",
  "key8": "9DQE1sgjiVCeykHV4tnTCUS7mHgqPrAuwF52jYqyzUKEwkCPTrvb1ZrEd5rH3wrNLCcSkpRQ3NYTcqjbwHtJVDx",
  "key9": "66ueDviAqav5KjDUeZDTg8hUw4FkYiVGv46RTZTtyMVvqzLQAs94SHkukjHgx5TfsbrapNqb8dsa4mz7ETm8gEG7",
  "key10": "3kcvReHs4ezpRgYN2dgRYJ3M8YFsc4xybgNhdHxTQDutEtqnPTyFKDBsqZhgvgBz2bu59Vi2RiuKqvjeXtSRTRQr",
  "key11": "4dd7rSBcqX6Ldq8gjG7hfbj9m2TfHkTmNTSTTxu1yyJCvvPzhydP6RzrTK9cNqVRBaaB2GrDJnT14M5wiGzXFiqo",
  "key12": "3rsUAjyTNBFPbPneNxWRyDSj8qJZ2ij7LwWTQ3S9ZeejtYZu2j52yeBBKvcXmbixrvpZYs6cpQpsz47VDo46HNni",
  "key13": "3n65hbDjZrF1PyDFJYdx1XBkMV5mQWwztHkeePNyCNVS88cvSRmCYxzPfSo3UWJeTfwHhpxPpDxdnnsFgVhXCWJ5",
  "key14": "4nQUbnaiL1SQPdS98GmvekCWxCiixCp5VgFTcpthzHhxMw6bi6xqSpJD9MQ5tT1ZdP6wxGNMSvXy2pFN82kwdfHS",
  "key15": "2cTYBi5xULqkDT7avwt5uV2sppPcKR6WMRFNcnxagU8ju4mY3kNWTxCcZbKaQdeGkMSiE29JQBpVxo5aHiKuSJSZ",
  "key16": "2nhZi1DWqAZJU7wd1uJzpr5CkFUDTNv95Lhsk6Ekzgn9XhtMrnBuxCDfZNTE2GLXq5XLWjNr81A6Z74tognCqbzd",
  "key17": "45M3sC9NKbrLtcdYY4zVKmsu5pZJWP3QR55uQGZEDp7RuhiojJNvzjryE6QJuFpoFizPjSn6creBvsfHyd2SWkzu",
  "key18": "2iX2VVQeLK3NtxcgrpdsDLhukTjERD1ViKrv4jiKxLurc6Uva6cftG2gHRiWe5at2aaGEsDYVetgFSWtgUkKTqbS",
  "key19": "2sigQNyYRcX7QqeYVYTQvhN2cnUBg5mAyQsE52nGDZVE77XTJ6fBMZj9MVuGqNtsfuuxFzz8eyihV5x2fWifMjMv",
  "key20": "2JDC2Y9aHKio2cprZKLReLkj5aVy6HZCw9gL2FvGHYAbQyBAkkg8daNypseEhFQLEnxgvYvq8wbcCBW8ctdaVfAC",
  "key21": "4x4zyMs8XTuA12G7YN5kP9Lgq1AbJosdSayxmWhoDaeyAo2EcrcZ6kofYmXM6tPoRvUTgNydL1jxqPeNtBGuRPj1",
  "key22": "rg7bTvk21qFVxSERnbpQuNXL82Z2887cigTWU8ubbWvMd8xJ6MCAXEAWCbTn4agVzBjDkbjZEh3wNP3K1EwkQDj",
  "key23": "5wE23R7rTaHRcqfgPStN3iT9boyG3cMjq2ZV1QSSnJTasbeZqHaFmL1Q9wkdfMAQhHgZBPZSvHuWLdzDp8PAvcWj",
  "key24": "21rq1NMXqRihAgJhf5SGifPBC2HNSsAWkfWt13o1XiYgzapzK6A1ELF2RAXVqRaq2sVHPGt35jKdNuJCN6dhw2tk",
  "key25": "uWX9auZUfw6jYCrNb5724ntFZPHVGieTs1kkCQfphnCeddXf8hR58wtg8xwUmxuDiXXv27CmiixPX1fHnXa92zG",
  "key26": "2drme14JpD6L4CUuJ31aAQsmpZ9eMGafzxvCc6udw4XFDYtVrEaVB81462XzyHhPdJQmPVD9AJhDu7bwXgEsmXi5",
  "key27": "rx3PvzevdqU9uiGesn4oruBgXk1zCMfqXXxe1AiR5kQh4vZSJFNYULg2rwb8KRU44cTB197eypERoGc4gfYSop9",
  "key28": "3dqhmBN53gAEtaM1WPdtnE1Kwy7jbehLKjgX3ziPYFVb3XGpoWdDWpPTsb3xsTjogjFNMsr5gXhNNd2d3va23KRr",
  "key29": "2g95xzQki9bPcRQ89sULaC5piYGyKEbTV9dnTf9AJ2uuBYqgEc5gF763EriGpUKL6ram4WLWpHDBr6fp7RBXL9zR",
  "key30": "5UA8rjVeRDhbaCciGMLVRUfoPuVjnkB3t5EcZUQMNQXpuGLdpMsDsHYQ4SMUJ5ThdPZBXzuWqPzbdDEZh8ebqGkk",
  "key31": "2r51XUMvApeCnRYmxUF76gjKjhCS5HWYz3rAUuZ1NEaHBqjTnshnoy3DtbMqMVUC4EhdHYrUdUnnVQWrudoEXVU5",
  "key32": "2s2wUgDEMrS4hEmj2Fwv8BcByPJxeuSxpkFwvXtMQumXWwV1jcZDXC2gTRLPuizxEywv7vQzSx99XnxHUnFcSRJL",
  "key33": "4td46d5FaoVTgeqhDeURHi4FZR61ZmAvg9CSjyc3Uo3vYyaeG9Lo2JRxcJJ8rBqd9b7TebxYqTHdk9X8ymjMnK8m",
  "key34": "3DjVKKzEz7UzMw7i2tBXZdNab3e4SWAY22R8feeEWwUPujjcD9egM4P18MQ6axCnYfDiekeoZ6fcKK6EQD7UKubo",
  "key35": "sJkC1kymRLYvYLBm8nnUjSjB5PeHSDtQyS6rajTdvWJnPqw4KJBRu2qDQjKXhf1d8SEn2srgrLKMjANzZYCvdD8",
  "key36": "63ssM6kgn3H2monpe5PtSQyPuysboSxDBNmjPuZSu6fsMkjKFu6CmVwjHifUyYGiM8dMzRT1xy8xkN2UCk8wRgH2",
  "key37": "4wdVguEc9HVbB45ZKeGHYuErkDTAN3hjWDpDWcj5ET4BrQ5fHEGjZWjqrhk796t16eaC2GWESzVc1xDXmr23Zbkx",
  "key38": "5QSRazrkNzAKDANj7eRsFUabw3tm63264A8X9b2SVcbrBtFsqWrYJmvx7eKZXoBpWDFTD38vCraHjrGtof1Y8J9u",
  "key39": "2s4Ve1ExBQYCwkztB1tFmCob59WYsySHWf81Y4cA2PvZg14UWskgRcyHCfJvzPyc12TzcUjPDZh9WEUp44wodTob",
  "key40": "3PnKzXr2Gpwmyz3LfqJquJBDSpYgb98wEeXaJtfsuhDnbZ9Ypajz4wVDnkBJuQML6ch8n6nM5NeWD5GQ2yUtJmRf"
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
