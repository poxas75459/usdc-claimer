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
    "3Usp7VGB3MNTJNJsa59Q3oo5xh4GGdY25hCZpcsHfH2ybMXTteYSWnQGtCyoXgsgbsroWz79HRX5evpL2VhMrrur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E8NMMx35fa9yqrK9bmeoY3UWTtVTfcFfKQVPNr1TwENJR6T7sSPgf2BMyfGbzApi9YAaXwLTo324tPD8wpix3qE",
  "key1": "5qWNvpCRjm5Gz7bikT9dSuevN1pXfMVB21TytHqwXQieqfiVgaK4AhyQZG3WCoYD6g6t1v415sHnHJBc9KcLFzU1",
  "key2": "2Q6y8ecGw6J6X3ZwWSKS9QTTCGaNbieD8h5X8BPgPAo2SPxYiHGA4yvAD3sWEnUhW4pmuc6dArj2sj1TtekLLAC5",
  "key3": "4wEfeypGCHANiYjMTLSCC2TeFXrbzYHkDTZ2joNXYSxDR5VBSB5TZB3NFmCp1XnRNeDn1e8yDWupXMRnQWu1k5D8",
  "key4": "4r8wxB1dprpo1f3TjPSKt8eimkFvHc5seqTFXAQ47KPRXSZGkDfC4vSe7a5h5tutKwDvd7hFWk8hHSE2yTZ4fwvh",
  "key5": "3pwT2NsGgGV4JKsr9XdbErRnanFdEyxnGJ4aAaRyAbUrjqigpCfQMtzB21eRShY49r4EVZqsa8CZUAePEC52xbx3",
  "key6": "4mb3SK9HzSVx7hBvsTXWtfG5nbZRrSnaybBsU8MbpLQpAEsvdNN3FSuSQT5sY3kbauUTSkDrF7GjwCZzwcmRN4MG",
  "key7": "5UfWxwLUK1KDEnauAwU87PEV3A9AbET3sEVo6FUw9V9kXLjJfBqVSnpdNmyLsk3Rej35oyBmikRB9jT7TtDKqLyZ",
  "key8": "5M99Wb2TE85YiPUDTUnrPLQoQ7WpUyXcnLq3uewadYqf433sg22oTW6zzEdkPaMPLuiJDiorLiWPYMf42M6s8mCh",
  "key9": "4Ja33EmQVbqpnPb3Pyr6Da8b3GH2s6B1CdA5MJPWsPK1a83eGqMidTxpgLcZXe5uCA3WL4RL3ndheQnxUwfaH4tZ",
  "key10": "5S7BbZWTtCCSNawcKaP6WsEgqTpyf1x6GtfMa4mPBsSTBAUDYqA619HpyJjQn3pXe7osnrM8gNQHcpdr2Hx2uyyd",
  "key11": "NEv15RdsCygLLLEZGaCTUf3EWmA8dVS45VXZYb5a5cfCPUXJgmX3sigt7cy9GvSKqrNHmg9SooSz1RUcf1gZDe4",
  "key12": "47yMiGA4fYb8vPFc6TTGZiMPMMhZRWFhWyoNPAtmuj3RuZaVQ331RrqMVmiA1k72dM3PfmKo9BRFxwmroCPvMuec",
  "key13": "61BMYuan6DSNxdkzuMcqQbMkAjTbBDegEnvGqeVzKujzvUijHYerwu4kffKN4hXcLTS9N4fU9Fwv9rc1TVxQ3sT8",
  "key14": "3YBc1jxQpckukuP8q6vpHwhdcdxAiQNd6JNCSw2WXnDNe4xkzHxa4CeoeZyHoMkqejUnPYk8xiY2KPSuAnPd3qd8",
  "key15": "5Xe8qQyDp5utPMRd9KFQKxgh5VimLRjg2UzyKJgMDA7gMrJxYn5p7ZuT43ypVGFx7SU7fnarungK9qVLjiAAEVhK",
  "key16": "5ob3fxF3So9PLKMkjjCwGdAhLsmpYSas61tQdcxpCVSuts2bSCK8EGXxeGLMkdvapwCWGQ1pu5GVXWxb94JgcSoM",
  "key17": "4HsMHbRdPh8qgo4kq45763xcQU6rJ9faVy5PFoLthZWjKDDKS6MhAd56w3yhGx7HtCjFdKddcynionyYRdE8hahh",
  "key18": "5Heu6DJMdUm9G2oU5t8HCy6D9mVmwnKakDJSeVW1ekvvyLaM6RVtyq4xGkM7MGYW1Jvz5sZvHEPRGe5ZeK2yaWzX",
  "key19": "2yXfA3MXGJrYEUh4jtSPsh9nU4xcq6gggrymTjaGPJyGgHvNRk9fuZGRHwNgqrDUeWnoTHJCnLQvx7GpE9WBfBz4",
  "key20": "29XdwkgCjCEvfhK5b7jsW2tiBSa5KgTrYn9NaTmie8hsNStGffyGueeia9w8Fk79xktFRg5fkmek3y73nwKg4Vyo",
  "key21": "3yefeN4f2xVD4EVHayReT8oAdzxxBBoMW1XfPJ3N62EBGpEeEPEWyJ5dcAEJ6xZnxZxDiotvbWA3S3bfBqJk8UR",
  "key22": "3VSkde4Xebx3QqTYV9BBGfJSg6Pnu8Ged94Z7rXLr3tfPBH6khfaGpYaFV5FpLoi981q8rEE4hL2GvcnxjQwMqKN",
  "key23": "2FVepCiVqBFJEsHFaAoyRmMjvhiRkAVdEWYxJZRVfcTUJ4zKF6hLWFYh3dAKVLLM7bBiz9gVfJ9dtxYyYNzsGTDz",
  "key24": "51Eu6C8LMvnsWwjD5yn55oHbAXHfV2jfHhMKZy5Ut5ujKtTjEwSBkzoF1EfTmPq4YMQW3b5zaVJdpph8FJLqK2AZ",
  "key25": "2Y5UDQ45LBffcRDo96uZkaictBfcJrrR4PSoDBJeZRdyRtWeJc14cfUexo5ePjC7ZzD8G4t5EpDrRYwkqjjEgaM1",
  "key26": "3p2ALc2evNobvymENbjcpMuwxqCvakEAp2BrHuXhESfJmsTGrJ55yMunLPrY45cy6cfEvrwbJFVV1CHvGCrxt5iE",
  "key27": "qodzSgU4XiA8i6bbVTLkfvqCvKTY5T2Hc1jg82z236CaARXi8gbFsvzhQnPbDm1D36cn3KqHm6po1eYnpHpAum8",
  "key28": "41XyXNacoyJAiNZMFtYZxFotQaGnN6gb7Xn7YBFfSTX4zcccGmp7gVPLR2BAfvDjCeqgP6F9SquftoxQ2tWj3fPR",
  "key29": "3m7fCrzSWPWcS9ZbU55Qi4LA9cqnTeD7nkidsD4wFxGb43HntfCLfhehvtso8wLeAwvA3qW7DpHcFZRtmmPFfKK",
  "key30": "2tF7GWk8Y3XwBPaFEpoad36BqFrc3Wu59uHZk7biPsmKtkPbez8Wz1Zrhffh2Kat7FKVhaiCp4H5vqL4K8DR1G4h",
  "key31": "4Hpg4iBGtyuu5aHrZhE8rLMJeSXEbCqaDSxuxV2SPm1SxYQJcrbe8V1cJ91XsgNGL2dD5roeSMoZs8UEwZLPA27X",
  "key32": "2fhLgX7kx1Z9iAKGvb4o3HxUYWCKZ4XuK6QyEGGhSXkZ3HfkoxSWRD6BAW3oAKk4KCXZSLj6KAW24ZLbeuRnMyWM",
  "key33": "7iTiJmEkPSL7cy17A74TAVUD4MWXU8geWGbbksVw8WsgqQPefuekfwpHyLiG59bdwckKygFJArh2cpk8VhidXPX",
  "key34": "rD51EkVRZ4Ht5o9HDYhdgyGkU78Xju6vXgFaMkBtBiPjgaQaXjxYVp5RbhZddBPF4csQhxm6AQCk6PdXGoT1A3L"
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
