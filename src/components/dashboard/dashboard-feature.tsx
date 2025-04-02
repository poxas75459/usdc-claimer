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
    "2JSzQEVwpvpzeH3jG44UB7Vkcw1UkLRnca1qLdbfb8dDhfDwuvMBL5yrUEim7AnLDotVsxfYR5nFPwX7rVponJvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdUCPXocEmyxxmbKbZaaepxFVvVCcnPtjnNDuB6sBfjbVMB7MdJ5DBuHHgwRLHzurr9Rg47edgkAJhbHXxttcpe",
  "key1": "ixup781kqJPthZGuUF4546jnwNvcWwAedS4YbVpR6JwoJpknP1bXXxUYNbyjQ2DL2U5ofGzKnuksywevzC2U9Ji",
  "key2": "4dYurmWk3HRJCHmnARdHRmjF77bEN3eiaHimgtf1wrH37TgHTCKhLLsakKYTuiUz5TVJX4RQWjpWytLRCtU7VsXb",
  "key3": "425WP9b8iKJwihkLTTtCNX7MvLWiKBMC1HeeyXrVGt3w7JFnSnDaXLMFhqbcuBVfzoVpSbyQ7GgMQ4w8hUFGhf8j",
  "key4": "4KMBPVTWP1QH6BzpwSK1X5jszukQjKFMeNzHUH4nwDfFFLAsQE6UokzhZdNX9tnLMDRMCYbYbam6sK9n2HfpsmgX",
  "key5": "5AQeZSMmL6LeoPcXwLMTmxLaJqeHiGZ654eRx4JFYv7eVAdVFZ36S9XZHHZNeGvQAgrSBLKcjY3TBa5ez2zrak4q",
  "key6": "32QFxFZ6zaYQ6kJdHWQBHAoQmECgMhFCQRT47gEVNyboTXfLYcFbrwrTxrNVDAFFgWzj8fuTSNJ52eVhnn3PvAeB",
  "key7": "4NB9g2KiyQCVQALyCzfAN7Qk8Z2uU7Wb77Ho8w4K6FMH172eXApVsBL2nz9ZrZguMPRQYXj4PZ6us2DUUmubP4Fk",
  "key8": "2y1oFhbQS7YWJvL2pPWLiwysi1bk2hPMEiMgj6P6ejB6mPkYVhCf1ChAhx6qnDeC2XAPiUvgNbsb1DMdumHhcmdv",
  "key9": "ky9zMagDtmzzdmBrp41raFGG9QeyJgTAsoHJf57kQfYDtnjyN733mn5bQ7tM37v9h9enUmq1e3D5tA2vL6f3Dq4",
  "key10": "3Ghk2poJTUkXMQhrHbgiQZV4mS4tnxYhsrKiGnvT9dcHGgziavyvhrHXLsLX945jZid2Vx2Hiu6WMLEzvD5L5o8Q",
  "key11": "hvqw4trMGyXm2hiwgfkyU6Dpu65uoqeyg1J7VKhZqs53cjsPBg1vBPeynB7krAbRxiT5M3JjTgLxzyeGVGHAhW1",
  "key12": "42ZGbggXjfpjUPfSLjWu1Hz4a5kTthEyTE3vpq9KvDkHavxsuZb9uByL7KB1vUZHQ85UDmsiUhsNpR1XqeAMpYML",
  "key13": "4swgZuRUKjMpCNPo85kJmDqAPJZgzRBCMThtNmuqaQfsn3xNvtrE34MiWJJxvRSiRyQv32buK9XBoPoBTdbhQW1Q",
  "key14": "3mwNryYbmbCKpr2hXu5tq217Ygd2LvKw38EiArnyKEFL67dhA1F7qp5PSLSwX3QkMwXaTCGC3WSZ6D7vehroSkbc",
  "key15": "bGuew8nVSEiSoQbrnPowPwNfr3r8A6t9TAg6A24ubvxjvHwTyCAGjBibaLrcg9HzZe5DEiRe4S2xschqRPHbQ3h",
  "key16": "5mJo1H95f5yY13DPiPsR9ePqgYbPsfSMJUN5SPBYjubnKhEkKkVuWZ2o9CDrbAaqEAZe5MG7DanYXidUt7trU1Ae",
  "key17": "5E5X8hPxWkeKre2mz1j3szkfBNXdEuGLpyj1xc77tPYgYpQ3fEnsbPjPQhASosxiV5GxKxnS6sBe2KvL5sFAk5xU",
  "key18": "4YCPpsHPDFSD8ffVHWu9AkuxGbsjuxUYMwggT2rLttBJ7Ks2mM1tMDC3aNUWgs5B2Sr87p1rWDhWmpbcZZWe3nW7",
  "key19": "2nXy3MkqqGAg3zZ9SUw1sqpd7n3xaWSint5BrgnLcztEXN2GAAqVLDce3F9ZRxP4ncsPAJQX8paHQwp4rkiX4iFZ",
  "key20": "2V7EAPwrsZhHFuTV9L3uK2t2ymTVjW2512XooChqk2BZfHkm2RgePFoMsf9Gsn58Uma6zzW4FMHxPAP6Dhknnhn5",
  "key21": "28Ypo86E2cEAPqdeRHZE6WaoJ22j7kaPcLVAXJpS5ix7t6m8t97chQt1qQnVzCnCjSdZfi2PM9hMnKHP164wsfmq",
  "key22": "qoi4nogpEgsiDQoFXSdEmvMiSBnpgAn2KS2FcmPMcv9seJBsFVeXWeYdaFiFtBhVYjLMu3yZtLrgTmTVvhPHUuA",
  "key23": "4VyzBpkeXrczQytdEaG2uJAogt5ZXgTD4s8fm1NVBijRhfF9nLpXJaLvhob97CoKRxMEh5BpfdEvH6S38uyP6WfT",
  "key24": "pa8WH5M4tcje2z8MmkagaPsJNh3J7vyPsaSg59dtkkARTvzB6QNU63ebYxc6CLEmNZXyVJAwhCpMvGgZSPU1JT7",
  "key25": "67QNxHueE4My5gVAt5RcqK9AGbnvRkeovPHAHhJLcCLsZHkEcMHozRzgZcinvN3qan5KBUPDoaL45dkhQATQa4Sp",
  "key26": "5aBshmpjPqMNmdLNHEFm21nvjPR2UTQm7Fr8kunznyFzFKVfJpaeyPCfbYNh1RVYxGyqrTQ3Dq6NBAB2ocWxQqiZ",
  "key27": "4Qbg4UatLVKrEd6GbPBNA8zc4uAv1kYNzigTuYRjsGMqP9daegTH5N54VaB71tgj2ZfSu7XYGW5oEfQkS2ZaMLJq",
  "key28": "2aCtbRJX1cUBy6aYhx7QjGFK6u6euFqUsf9h7WsVj4X3UDQo8KEXVf3mWsNPGuMyFRWtfsgtjjCsYBtekFP7juyw",
  "key29": "ahog8swMGBjWiNc44SDQBqPsZmjCkRed5ad2miGVWNvhSE2y5UcdskQC2Ta3HXovcCea5urtAFHpJ4dyeKCHQ6p",
  "key30": "4pex1DCSVqzBQirBEYD8wAtfYVNNvQh4BzF3cGfEPywSiXipYXjhXZSzg26p55cppA1FShhGCG14VJytoY7JTwJ8",
  "key31": "3bE5oa75CT88Ugd2DoeEN3rsVU9DjEWnvjzGx3D1TR6YBTMjnH4rCerGoiyTrvUgavF3X1zsLvWKFEKhLM1MxvFD",
  "key32": "56fYEkXhRvWyCvMYUsFE37BkoYZHJReqMYKYipVwTs2TsJRnvU84mvfePYhAWcJuuJ1NFwacxuhWNL8Hqcc6sGTo",
  "key33": "23sawLbeUyvuMf5YFKZYTQXjQpo7x8rJMitG6t6BidFHXAP1dBifzuhsiEpKLhtNnf85iKJ3XPL8BtiJNWRZDKyD",
  "key34": "5UG4XL9EB289TtRoL9RQaYyc1cieKjrt1vPRDmZJJXZyMo8qLdNA22UX6JmeL3CJJRiY6bUNzKbnQAd169R6zzjs",
  "key35": "4fAmavamj5y4rFdR6v4rVvryMmYoorFytAJE3xMECFGo7Dm8BBQzKawDaS7LuRctatvfyJTxHouWmcJAA4QanihA",
  "key36": "eSC2aixHVV98pzJALkAaPcxD3eRoChwedkrjMVX2y9q4C9uFdEAWqKi7e4Lr5udjK8FhfBAz97mPCBeNdZZCXFw",
  "key37": "MwnKU1WMoYKtUnJ8kTGp36fihhs4f2WxPKbBfyMMVN6cuFsh6cnx8DiMsuwEw1A6infzm6PVgtXeqHx5ouLkePP"
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
