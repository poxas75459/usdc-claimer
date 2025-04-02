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
    "2nSbjYSp8MSC2hUCKRTL4Ab1rFnPwBJienKBoVkW6xKPUzt1pt3VkavBdbGWYG9Dh1iAuXtStwWDfvVzunbkJ6Tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uuSRiJms71gxc1oVWG4SxWrNCQMWw7S7RuUshtqqGhv3rWfDWa9BWMPW2b7Af3B28x57G7uRtwyANqDAMbgZ6v7",
  "key1": "3wwTX9GHHMDkaE6mKCiFWwnWhZzWKTCHrW55nJhMNMB6HxvqwnAsadRKAeBUK71g3SFzwyH4rbmvx5mhMxSWn6YN",
  "key2": "5spYKBT2nY8JXCPfvxQ4CFjBDbApUKgc1bQsmyZnqcxrRddERs3vuYrTK78aybRtyJYwi5PMMXm237Rd39kq8GcG",
  "key3": "3B5qQHWnRxdBLhmn7zDMbihh3YTEkxwpBC7ETWViGSSUcYd4AwEBNtabM92tRh3s6H2uMjSZyxtfLRSawbXEdoD3",
  "key4": "5MW4HxBfnJsJ6dqFRHgUCGZVMTWsodG617kbvaM54EaQ7XvXC1LQTUBjJPnppp9vL6drzeRtrdkuWWab7J8FjPqP",
  "key5": "2rDth9EUQsgNkmqmf7nLSLnmq1tovQnU8e2BLaAt3XReDT3hvqQxJVJ19qQC5gaWuZChvPSVmPs3YCDzWr9pb6v9",
  "key6": "33guPRw2weHunRPgic9xjnbrNNt13R7yjsyaL7haMgFhver6pRvVRSq8cpb9yYJJqNZowbYiBQYwMZK1DaAiJD4k",
  "key7": "2rkKNsQ5bYsPNCv2QrkuGmaBGYsypBVbsf4SkugZg7d6aXCQZjq797XPAJAkUjbmPEWT5AVJA22qrkoGmuRdT8uc",
  "key8": "iHxRpBY4KnnvDPBfGaEVSpuxRhzxvXHcE25FvinEXVNgoxEJEuTz3oRbH6a5Yaqpav8kwc1ay3fV2hXGLqn7M8x",
  "key9": "5Xad4ui3qLqkMB1YTGvcrvKkGnwwewusBZKw6ZpKV74hZ98oZiJpM7XPHvDfALaj66R4Xpzk9kWtSZEFW9SCVAXx",
  "key10": "33uyq6S84GxwWS6EcFbExxCWwB2W7LnRGhxo6cncdUj4qSjtKzdF64RavaxFosHDexTz1sH3fYfyaaEiubUaFERP",
  "key11": "nSJkNzMhAj8PCAVkJPYpSss8esvp4ZRZiE2hqPcjMyxf2m14dknnecx2SPYzV7VMEwMrcMcz5yvQkJQ8QCywfzu",
  "key12": "3y2H2wiLoCAEqxWecB91BWU5bQZJcjcMiEDiaFjTod5uWqf9cRPuNRBHbEPKYoSLvPr9LpgdyuLDpURhTQY3PHQj",
  "key13": "3orrx7vL1JdRjmkxwY6x9pT9AjpJyPCUwvw98SusL53kbzef65q2jQeKXQ8buKC5u32RN5aHhdhPu8DcAc9jZ8Jw",
  "key14": "549WfgAbUhsrvFMmtFAv76r3dV4izJy7btZMNMnTboBgaNu7s6v418ohxi4vmH9XPrAX1Avwdtz3TMB81QUKo3kw",
  "key15": "4uYRrVehG1oTu3vEy4AyGE4RBXgk6F9CV1PP7KHH6EpUJVWnmviRtacAqH6EF97PqCLg74Dki8w4GyyC3A99aM1P",
  "key16": "4RZf4oUTSoguMVQWQX6Bc1vYsgLRxaUDeiP8Nop1Mp1bzAdFxE64v38D3Ws8ypb8FHQP8yTfhyXaV2yS9FAj9VdL",
  "key17": "5SXJ9nsmQusJpj2duTfjetyKibKF5E6XuA4Xdfguq8ShDEHbDeCokzvjwGG7v2VdjKSbC1DZRLBGEDFkrYPYD4RX",
  "key18": "27MSkPwv1jywH7ngmojXRffden37vfWgUh2R6AJFxJYrMhT3VGoSjnJQFnCwKtXseF65P1KinNqtPWcnpXmKq92R",
  "key19": "PxyMuBUUouN2eiX8wt3sDKx2AXY89hSNP7aYo2TgCnF1dF2fdt9msHfwtdWifHNTQkYGSudzAtnz36zSmWdRewJ",
  "key20": "5n8xnrekwQYyphV6bnkPu4fZQJKyFTNYxQyMfVJqLQ7AMA3fzPEiENggNLbikk3mQQym4jhPuK6fxEKW5yAvQt24",
  "key21": "asP7HBiRt2FfZe2eqkGt6XNFSNxLsGu6cK43cRb1Nhq4GQwuGvDNLThee9FUK48xsm2V11pvYe1VeExyY7idttF",
  "key22": "5Lus7iv3zgdoGE9fJzQWb1RNceuJFRLcEZabvEr6oZirGg5uCdNe1qt1ymDshLoWo15sfyy4DMnMr8yZW76DV8Uk",
  "key23": "4cxq2Z6Q64aDzzxnbJiBwTVPsK1FeNRMR2W1u8niixdWfwScB328uL56H8SXWtcva2yhdijwkttiBvm3MyGuaf5h",
  "key24": "3SxJ18swbnJwea8kW8q4tkHgWyYanQxNsoYFWxdLxgj3bnFrFXJpTtnaYNt7McQyRBukrdzmYKMtKKhPC3jjMg25",
  "key25": "k8L4dqQEKYct8rRfkpu4zwxPheh8a9Lxqrd8uwh8m2ajLduC4Gszw5Qov4tibDEZBPXC1fkyPR3wFrA7JsWvmHZ",
  "key26": "2YMMRUo9UGwbRDXMwqu5KFiwE5foz3zmsPp4UYnfgsr3Ao9udwnzWD4xDNkM3Uz4nRNdFanQH96desBQCX3R9uyQ",
  "key27": "S6Kv7xsHZwFPBhmQT7AVi2L681Fj9YfbiG4LuypTc1eMzQtomDcFTMJzRV5axtTDZS8dCZdSK4vpzjZENUVLXed",
  "key28": "QhLy8uYZWH2Gmmg6z8u2YMDwAFSSAZ6yAxfb6YUoFoebPopuRYZqPeNakW22spsKJorzPuicyHacpAYpEsJGPVw",
  "key29": "21HkMG3WztHfW3hrtA293KLVAkQHPGYF8Q7fSgL1APDGhnRZFwqRP2CJ8K5bCCztvqB5xCicFkHeZQBQk4oWJ4Ju",
  "key30": "4sD5uHMue4XM3wgrom7MVbK3CDX2d5tkKhb9rb6fV6mDJzyCXiGmQLMPsXBgb1WFjaBSULNJBn6QxHhojqQ9NTvz",
  "key31": "SsehXqkG23wnpS8FjvPC4c5Rnu6eEra9L8ScJ2gnRKWUUXfY7VcdKt3ps1LZj4jMm4hjfVf4Wcq7kvfN8kCMkoG",
  "key32": "D4hKS7TbcnFgRk4P9Y8TGDWCFQkLYzKbTZo88GxmynSGu3HW4ouFpy8NePw2fe8EyXanBWmeM8h4am6BgrX9Zwa",
  "key33": "3axvpa3Hofc1YCdeVME6WKqEP2Gq9sFsQe1MvhFM21iGP8w8hYsfZV6Hu5nifM8dMY2jRMHiaNkj4R1VMJARqtfc",
  "key34": "gegRZoXNQiqZH1Wk69xFKmrp9UCzfo3TdLckQSvCwjuQnDUvpQQsTN2WsqLNaJdNqBEbhMgZPwQfE55pstwNNTr",
  "key35": "2sTiqhLgo3CUWrS4w6c1EU4y6KehTipY5SbTgxAofveobT7VeDuGwZop9nNyWko5BYpacLVPnGsXHsnDvjiowpxN"
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
