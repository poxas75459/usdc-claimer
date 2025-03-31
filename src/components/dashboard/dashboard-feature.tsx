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
    "386exaUjTCsoVxNxNtxFbCtWRjMtpX3sCD1P2FxfDnkFfRrvXkTUTuv6YFnKWr4PMybeEMBMTnM64RQ6Qz6JV8cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EAvgKLAadZrTUjHEoT2mb1BhZRa3YUQimsy1Kf6obtNBKZdy7mJ8c8UsS2E7UBFK9coVn5PstBypoHF2J4DxnUd",
  "key1": "Hnf3KhSS4aC8QBfurdYayBJMLbZDcKjMk3CMCmSWJzX5asP23WBtHrSNb9SrSpdCfWCcJB9C24dtE1ss3e7yGEQ",
  "key2": "21c2hCeX87HJXmazv63wtCBJXkYJu48JZQmZHyjZMN5euV7ietRjZpQUpQgwuB1EWbYjUJqZ9XcsjiQZ8sBcpkDd",
  "key3": "4N6cedBr8YQ5pTEfDdAxpyEnB7vEfiEECsU1tHkogLpLix5GogVW4EYLNvnroLu15pNbCBzPgStcpsrDW4iaKLNm",
  "key4": "4DERp8cNVnZy9WBQ22miUifLc74AvnpPUjH8HaLJXSfrpmJek2PWaTwGTDk1HY4A2AtDm1V9wFwE8Khng3Gbz6HC",
  "key5": "4qGRkEok591FRjEQU3Ci66JkjPJ3jvEycWXVRQoP3sKVLGMUcbRRdma6g9ji91oUj1ZJqAmtZ9SLJ5KYEmEwjoyc",
  "key6": "2HYd74G2cN1HsJNWKXguTkKraAy4Fo2kd4AZd6FsHCtVmcM77amyUf1uRjfAYruD9iv5qFQPGGtJHUoGZZQL8DYx",
  "key7": "44z4hnvKeC9oVaNxmszhQtWsqirseBEeBqbXksK1tZjUc7HMGs4hcyWRH4hEhSpTQrQqYyZ39EkXJiP8joTzvMvv",
  "key8": "VK7wZDN73DQNM2rwckghCa4GPHYvf41apfNfiW1bFo8ESN4sHnwx8Rcs8CuSudBYRNBhnfZ3Zy4CxDaiF69epKT",
  "key9": "2GSUmwmJabEP9Mkevj2PtUrCk4notik3zACriwKe41FJoPuXjGsZ8Zk3DPHazLHg7SfdYPTDmkpkXvEk35F3UQ4z",
  "key10": "2zwpyHTPwP77Ltki34uR9EjM9MbCcGKhc735qvG3pEFjf95DD5txu3V6xa5rTZRbLPFJw8nwkxFuyqzbGmNeHNmB",
  "key11": "2kfif7oURT35s9qm7UXU3bqMCoTWL8U8hi8127xezt5atGb6tg67JKCDXePfMbfv4RyhsCH7ajQd41x5egR9beBL",
  "key12": "3d8YXX87GJy632DJA99Hf3L9CYgoAMPf8Uen5sVziGNkKgRKQxuUUYBBGR5W3dCEWYV3a78YDdA6JHYKDs7uLyo",
  "key13": "2eiSvYimCdKA5dBrfbm3xhQGXdix19iUqZjK89xETnGxjFkuMHnWEWDj8z8Q4845EGSs1g46WC9v8HDL8maYmhvq",
  "key14": "26JKpGJV4rVKnKd7dHZHWiAWpt8aBCnqGawpdYrnFFZiahUvJWqHfTW7GpPQK9NhFLfjPDcTG8G5CWbi461duBq7",
  "key15": "4hsAgFNAs4a6JyKY4d8eMipztGkZf7rZJbzEbvv8ojnPAP3Kqx4uqQEKVpJjC1xSQgc3b3f2cr7UzTC4BMrGE5u",
  "key16": "KebvFHKjeDTtPigNX3XBE7kuKe3fC7yd2Pf3zUYnFCK1rYzb8oRqLqAr29RL4zBFBSK4CLePUMEiJK6EiCJMj7Q",
  "key17": "2b3YBdpqAFGJxj7D5YDPghjpK6JszNJBfoy1iNTSU4u5fhJfNyoura5rCJpYWBKYDnMzrihNLboUZQzps6iSmg2H",
  "key18": "UNDE7h7ekkmFSK2z97RP4QtpnQDdKqfQCRr7TmNwMagcNfmqSppbo9Aj7Qfi8aP6uyRoMpYFxcMtx2krirzHth1",
  "key19": "3Wtg1UXvPBt76MFpLLnAg5wxtHFbMLcDt4MAyLbSRAt7VyCT5XAPewTwHQaJYD4JKAd72gWQbQ9w9SSQ9bpXPgE2",
  "key20": "2fkeY5gReTRuuT4KB9hDYDbvpiAFPT7DhazrhFQPZzXk5VkmkAB7dg7YpuSXhdx38d4t4hQ5KQ9eGBduScFQmwxG",
  "key21": "3yAr3f1o7CFkwTRaSDAsfQwJCbVjt9PDEotuEXhbAx6RMMLyK3924k5xGLsCRbgCRiFiue6DaWwmVn4yKQTqShWb",
  "key22": "xRzfbEDj76q85gGoqu7MW9TfW99sMwG4V5dvou5GwGrEMDVWqwbu11FZiuU7kfjpdwf6wJ8o4MrdSsVjBzeSpes",
  "key23": "45rj6Xb1QzkRGwCgdCtR2yyUvhp8Xhu2pDfbGG9aZfMP264C5sFm7ZnTpCLmV9VDT9SbKvkt3cNyfggx2uJk2SzF",
  "key24": "j8A8GhZDKq1REeHj6S6LuowBczYAGCXKZucGGKEV2tjfynkBXGEtKCtqHAEds4ouguRxSMFHPzsx8c8HRHcESaS",
  "key25": "47T2XhyM58af6oPxsrpJjSsLsAg99gs6sD67BGeTtXMSbzeLMbtiuGNx9DiAqUhM5j36DU3w9TN5iqgwvGKkeBNn",
  "key26": "QeFYENxNK29yP59j5GEfUiSaMLaqTXZjPAwKWPjjxfHCn85C7di4r5VER3wfJ3EvbKBVo5THEP6E4HE3ZWsMDgj",
  "key27": "25Cx4wBFQw79uitv19eo2GSXWHnMMsCJhRe8DekGFdADjBobBsyZvbpo53HyzQ6A2XP9fMQArpT7sehmjRkWX1mw",
  "key28": "2mEWWeeVcQrW1AgyzNfHR3A5tdwXANxQaZn1MudpHk26yLuLguAcbqvyHmW1TR7N5QHDhWG8jD4CLHnJDshRtmLf",
  "key29": "53xGkrbgt6rtfwM727qBemy6XrpBPJxTQ5cNf9PFdnY8WpKavWiGoTRmK1as1ox6gztEw3gZm8ELwBbBi1JjAgFZ",
  "key30": "2aPLRtJETuaVFvjZ1MMc3DKsEuN76dVXyYU1gm9qBEzKLSCkWk16ahwfrSPTuEBmJ9xyZ38rRqB4Y4AByag8fwJX",
  "key31": "2jsy7H3DgtD2dPxMogDv1Faf8BKWCeaCoERypVzQw5qEtxM65SomVq8Cb9CPa8a8NmT66FuFvj5Ns37ARf73NdVL",
  "key32": "5voGxYo8LHB2cWkU2mgKDesHR3YEB4qwj9V3oVgFGNQXjG9PrPd9aHVtpog6w9LZwfmE5n5ZoqmqTZ2cwucoTUB9",
  "key33": "5AsgbAX98BGCWhA4GAtSTHZbj2A25fB65iv6iEedswN1tyi9GYhHeixVGgcwbPKAENtVGfJkn2KnrG9fuaQY8Vnv",
  "key34": "2dTiQqLheSueiSiwUc7rCcB94pRftWLdpKM7nNqHWpSWPvQTkZiLBZTH8TUZweZsGWtKMNdrpjLmVZrDaZ6kt861",
  "key35": "65CDEkywuUswHS5dQiGpRrrwG2tG5mLg3cGy798uVHo6FkA7QAZBD7Upwyj4c1c1AFosweHtZQShdNJCbnL7mKDe",
  "key36": "2FPJLJv8HxkUxEDtM7s5DYCeHz8S8huuiY7SDCVm55y97BjazoZnaa7sBuTvZg7kY3y9FZrAW8EXjsyYuH4VHDQN"
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
