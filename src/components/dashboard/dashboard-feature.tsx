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
    "6631dDre6TffkE5vzMNa1jPJ66SP2Zfjk6ndfGcc176T4msSqeysDjwhvxbPu29S7uXi3j1mVyWaiXKY2g5WLuBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62x6pi6hi8rxw8kdjyVXt9cmQ7cvmekBfNifvg6Humk5Dp8418aeJoSgnruKZSm9EEWmupzd1pUcreVVLy8DLsQk",
  "key1": "5RRtkKzmz5uiGnsuY4RWgPHr8QHUd9dS6c7QNs1SkhsJ5ZCF4cxn2k37paFzQmv84SaeroKXAV4RB3ZFGEB2tAQB",
  "key2": "FvctrRqwc4NXL8cpREHGQ1byn6tsy6nsRs8ykaLAhCnwcteXYLiBvVaDt4sojSpNzjxPnMTRz2fij4wG9AfnZ6N",
  "key3": "636UgCK9d6orwKo6RTMTe3CpLFQtpYyWp3hHx6uBWojz9a9Pq39oAYmbt9qbRsvJZE26qg1RYYdEAWcniKs9pn7H",
  "key4": "2ctqUtMGUkRbXUBcxUfrPe5X8b9fa9iqGo6TprQrMG2VNqjEyqqKEhgTrrMmyA7U7DgiPmpG3pbc8qkeHH1Zzx8v",
  "key5": "4fDPaVK1zsoR9UQQUZGTByxtpzNJpEzdxzU8b4mqYfFSkCtT3y6ZVgrSse8zSpYWcRkFxPLS2K9446eUubKz38uq",
  "key6": "4yjJ1wcQvocYjG4LTgz1WfUXwcbpPF3BcRj5ZXFZexCsTgNbLj8SsrRJnXWRHhXn3VhniyrGhhiokT26SfoMSgJt",
  "key7": "Gk3ByMVkTk7y8KXX843nM6m6KavUdGuQW2r6PvD2AFTyL6wiqCbturSUmVViaS59F3w1pmBwje2TSzBsgNM47iT",
  "key8": "2w3vcUFQANvFN2XM6EGN7LnQ4EwsJGgfKAiFDj1MZsPWLYWD4GufYNi31wVsrQ4SPb4LzQzMbE5DdqBYW6N345aZ",
  "key9": "5C3D1VL41AnfLnB3idTaVpVXPbh8TKQss2pHHb2kqnrazCC9tQSSJ9CCAxvo8Z25txHSWqLth89wqR5VwrFVCNUa",
  "key10": "2WVZHzAuDeqMbv33sgmZseNMQ7MLogtggy11vaNdU8rPkRfxhbJEwtdpHpnWUtmfXaapHh4fXSpTNsZeVyRcByC4",
  "key11": "4TpwHtviduGZHMNPmbdt52UiRKhZH8FwLxHVFvKz8uVAMEwT53K6HfHQARFUFMseoayP3iyq2Cix7gW8vXkGpKhD",
  "key12": "33RSXAr2ns2hZkoYmGCrAZjkRZBNEwj8sHZyPMt7CzQPQ6HYEs3n8mNb1EF6oL4jVS8Y4mpXoamqJPV5CP8xFC1P",
  "key13": "5ofTtiQvjg2T6QcTjJZe92Q7banMfD4xUFihSc2y2iS6NB2ZNaF1r1dp2YvTvw8vwyZRRYU8wcfF9T1cGXDJAhw2",
  "key14": "4R4BuuYd42YmA1UWEHJ4mn6hftM7ivE7HckfuQiAF7q5gzr4eKMZSkpRYKQYM88ExQcHp4oh5cQLx9HQ4DFUEjY5",
  "key15": "2fWdcjdxgRR7qph4RhXBBdMCiyEBr8P7rxNen2ghGwwReXWoWRcNQmnC3NZwWwagKmbsDSsVrQK8erid4aaWirpS",
  "key16": "3xt7oUFe7rpEazZJd8nDkJ6KtWrtX4rUVzNc3TTK4ytmJ3FcewQ5HPebLfYguE8sqgQie5gCV6C1t9sjFyJstWy1",
  "key17": "4gqZoJo6u8deY2y3V3bdr3JfT9N3VLEzFoYnAiNGEJku5EWiDomNFpL7YUXPHbASKrQkjyrcodqchB2xFUjXHXVn",
  "key18": "qZfUD1Hy2s6GgpdE4xjTHZHSjF2engsVyQGHdSRb2qRHn2AGFDAaX3JJX8co7oCogwx6nS3F3AkKiYaiTvS985k",
  "key19": "MgDYZdDnjfUZxqpKDq4u1tXCZ5aDXDM5oayXXsYLzRoLjarXzMjUogM53eYzaJ1MGgidruXi1ucTk9DmXyNu12m",
  "key20": "2MTjhqQedYrxmG1T8zqpvDooADvwuMjF1EUwtReCL2LjuDxQBvH7bN5KkpRFW8kaEvmi3aTQipBNDToTjLjVCdzo",
  "key21": "4Hu4kNP6HRWetiwSRorpGh4EPNHTo35n3z9Scrcw4L1tyevqX3jsZzLgMc3Nd5faEXSahGH2HN87UWAm68kNTYkE",
  "key22": "DwrmbN1Ld4rffu5yoKjk89QavMcPd9g1EorBkygfTDaqosCDtYYzQ4oUzJsjHUdTWTsiT6DHrYENDBb36qL8mXx",
  "key23": "4r2Bgzw5pTFSfB7oVgjv36Qy6KNVNPZpdJoj7VdhrYUTWiUJsB2eHEJENgrRDbH2maSyxMnXuKGnKFLkr2caNT6L",
  "key24": "vqvLWenacSDHd8frS2J5cqCzg9emm1hFpLXugCuuqNGkM158mNt19PHk9XEBeYuBNk2Cdu8xMZKrHbEHHxioBkL",
  "key25": "xU8WMYhf1gDf4SCqMRSjkCmGiz3ePpDBDc4m7yVo9zKHDFw8hobAUEukkZtrYE9hXtpwqtvBwVZLARFuCmwPzVw",
  "key26": "TBxGoNYZyDaxYUu5w2pPRfdckW1nwFFQ8CHYDU8PenQ98B6jYtjWA4wPFi2gyDUPorZ5Jf8jK4qpa7uCgnxnwHM",
  "key27": "2uHErMkx79UArYmVZHVtxP5CAw355ZFkySA5ErTrpJrbrwn9UQbXAh3U1qtG7AfG3JMLXE2BcCcAQwvTdZCY41Uk",
  "key28": "RuhfBhyV5yhV7L42FW23zWzRHTWjGmDsJ19iesDBxUaSCdA9FyPLcusvvP7ZsbXJoQAxMSmyQZzeWL6Qo4eZP5B",
  "key29": "5424aizn3JVi3NRuaqbYuvBXfC7BwkSR2Hu3HC7w7t1XqGYZd1w2GxhwvnjbpmDVwbqCmKgkuB6qbfCXPoxTpcoL",
  "key30": "5m2uiSi6JAUk39GXLX3xDWaNrocRDwSYKQ9ekDPEfrVVTq88GsqaC7TaAUGE5ZsW2AbVX7GLJV4SchMNG3dyVMc2",
  "key31": "5SZJErhokGzGrS7qoecoA74nT8VKBmfsGWXLZGz7eRo5Sr9g4GsLnHQzhoPQVKLscD3wDNUWfG58CobW4MPcNjBr",
  "key32": "5USrF4XohnyGf659BUPo5TmLUUPG1NEcF88JRraspcr9imNCay2yHCFBwiNgeUyvq6BdRvH3JsxTqgZzuwzLJm2j",
  "key33": "5AdzcwyWW3AQPKfwMEK5tiprxWiEZeo197aMhK3DP9Y1EXeUtboHHQcgCR2E4hW69Xwsfz7rwCFJvnvBpLzULpTZ",
  "key34": "Dcjadabv7Rn4v2PrhVTQWzcEPyGeCQUEp9hZKH7f2kJLbQhuE9c1YctSXAqAEhTipetiiXbSJPSGkJNxfJULsLQ",
  "key35": "99r4J1aHNGwaE2WicQugUDSw4s6UBiyQncWfKonQh3ZgZjnY8D8JHRq2FGVhqnzkfFEV8R4sq7HYDhNmax9nYui",
  "key36": "2C2fWzjfCi7Gm7aD7UXamr4imtad4uDgRzKLuFSEjs5qyiiRA7z6P6tf9pivjJjnebFgtCCsVf5M1JYmxS7kpKLc"
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
