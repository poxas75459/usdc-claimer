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
    "3oZyswb8ryMbdxRgAn5EpCGrRdAqr8pwiE2CDryDs14AQyHaXa5CgvoBjwgGY1a41p6wK11PN3Ai3EdQspC7H3rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vUUzW1vekrvQrSPGj9PFqADEDt7TgQqGNxfbTayhHzMGsLbY4Zmmh1NADZzedsdf4xVi7ndairDMxutu9doYfSp",
  "key1": "2FMhc5FTPMyi73fiV8CBGmoF2rf1gBrk1nCqJHDNzND3sqZMYB81P27w74CUVNJhXym1qPJ18AqjWYhxDo7VFgVZ",
  "key2": "nmUPUthAFLgpbT4jyEPK8eWB88gHpLhAq89oEAP4juBKabNMhtzDqaxcdXo3RbCMqrfFdCgVfUkH1vjC3sCPUMh",
  "key3": "2GZAt8ncmwdr5vivpmknvCneHtfaWdRwVEYV1MLEtXY8P2oSvzxZXzQkNbhEQME9RdYphKXBkGoGxLHnZiGhHu74",
  "key4": "5aFGDAGbgaazU1GFHrUjj16PUXGD9BXu9dXsLM6DrQhzPpn9kxo37yGxD1NADifAVGgiLdv4AgWQKVVA7opHknGR",
  "key5": "5aAcT31AjWZz6oonW8J6hiNXSedm2vZwco8BDTsnad9b3xg9vqF2rRBEpCzdeUL7N7FvD97gBp64X5DdQjtb7dhQ",
  "key6": "57C4Rztw61ZZACu8gXBDCph5ZgWNVHoWzX1Qvzo5UThpzqJ9YS512uZJCN3NVUWiNheJKLDUU88VfGbvFwSmpYwa",
  "key7": "4rvtvohqZSpPQp2y5qaH6PSs2Awt8zj3gaBwfAXf8coBFnmVmdSBypzCAyy2AafEJJAj61cDeosqtPCLjsBy79XX",
  "key8": "3iAL3YEgUyscD5gFjJnYuF6ZYVrygDwjJuqmyHu751TefbTDiEznrVp6jAn3DN1YdFeHnmmT1pkhbLfrFS1sBtdy",
  "key9": "cTZYkM33B8hxWFRqYAMLGbHvz2w7vcxsKFCYTpYea2eFbk1UxzpFabG7MUc4fY1Ys6qcs9orxP2ZSKiqs3NpNPg",
  "key10": "66VmiMqaRnxQAKRXYgBQh8NDWczPWacaaZ5pRqaxL2fu5k2NLaApt7BN3sqcsmANU8Zx4apxTYs1YBVhmP9qeoQT",
  "key11": "2ogZVmtBmcZPfVP5n7UYX9hjtANbQog3e41iCu8qpASebjrkSwFBQZyXWkTRD8gc5f37VsMqnaGBmmfsVCVZG6Av",
  "key12": "3sakkny8UEAE62CvsjgL8opx3Yq6SpmAfS6v32EecvLGJzv7NGAK86KzhiEvNddCjTwhyZQhxTYXgsnXiaUs59Ax",
  "key13": "5nQdvGjHFTgULRweSWgrAR8adVPHrVpKGj6aiwnHqukzcuSNATfj3iDd3qtC2NVVYDVUWp6gJt7Bng12pTPPQXNs",
  "key14": "63Rfmh8XUUAMLKur3fMtYyuDzkxuraaCDXzykBUDDMTQHrbfbVcE1m8Ais3j32Q9SNUecECcEC9LHWCRUF3VdeWV",
  "key15": "3TzvzQsZWtZYYuSUQG6aVpmHRtNF11hrskwWDEWVmSYoiYTb6gaqj3zkzgLZYCCkyiQzn8HrA5YWcgZ3YywSr9fY",
  "key16": "jAzB77gTCdXkThKVJ48ote8m9pJhKwZN7M6uT9UEizVEoHxdT5TZRD2XhQ8vZ1DTNuEGh2cZttyBvUoUsKuUPvw",
  "key17": "74uN2auTMc7kPhwNRHr7ABwigqL5jc1xjqLHYr4HG5nzMMYHaEM5wwpXe8uyoXHv8kB9uYtKsMx6ctS71EEvuJG",
  "key18": "3mapsxpui4jM3KzNiapqKYo7XRFCfzDvPXm5MhuL4cqX3ut7As5HNE3Yo71AkLbDAh7EbzZrXuew9BDenWEYv8gn",
  "key19": "5f84XwGibNfXYqbu2P7H2tiXcfsnChzjTBBfTKy3gaD6HGb4jsq1hXQ817GRhoWVpa223ZgMFer274w4x5y53bVD",
  "key20": "b12GncokS2K5zWby7JApr9LB9TRDft76XAPQ6oN1gQ2JQjvNB4g7TB6ZuatwaypxvknE4VN2TXvL9YpfLScCDgX",
  "key21": "4Vi4VPbswA32F5EvQdu6syPRtBbSuf5gTfTgrNVmCkpvurCpqS5bibAHJ8PKHXQuT8UZXh4vTZ7T7Qwc2xq8NBNj",
  "key22": "D5gYjwWCMXCCT8kkNBzy1yvPugfHvAdJTjhH2GsyoPb1CBa5nXYoyHJ2ErMp43LZGnDe1FcDgLde3DV6ocpRgyr",
  "key23": "zyKFD3MiRwd5WRMfba57RUKWekrkcGNUrPyBLh8KCQFTRiphZQEjMh4pgnxpeC4fP2w7kuqVa6sPRqrSPKz4wSU",
  "key24": "63NNEjoTbZHVznpiThpL9T7JkKS8Wb4boVKEP2bW4aFVJJwV5ugsFafHvZ5tX71BnrwbgFFJN2YNxw9d3BJshoV",
  "key25": "5U3CSWhbwJ2doSckvySmraTLpQ5Dq8ZPbzwaqmAMmmfcwt7qvyzrAofiBaRmrrkUmHeoC5gwwH7abxAxKrLaXpC8",
  "key26": "4XyEdH9YLei5GcRScP9Pu2PKmAknuhYXADeBf19SuoAHZDFko75kc3zUaFpR6gJ6ZkfBiQyNKAvHTf5V9wHBs8g6",
  "key27": "3v9k2Piq5vYDAq23oA9tjGNkenn6Cz7QY64NMxoXqufNxhQaKJjdy2U21F3P9Z7RzeCzuPVGtMdZNEPrruVYcD6N",
  "key28": "yX4Na32hgwG5gN8Xee5App1x9dvEF1Nd5svh2EUy7ff14nLUyEVDn9t2mHeYDp6VYhyyeNzLGVabiL7Sf9wQfmU",
  "key29": "57YPhDrPtEhvdFSynG6FTFGnXTvBsCDxq69rJKgurNjaSTRnKgFjWTkTMdN3kHyhh9hwByhRJ99rCTKCDqtLZmHf",
  "key30": "6A9Bbzq7vzAqozs8JFS6cEmnfabREYp8ZMMx5jZuEzcDxheTsdVnF4YJQCQhV8n3XT7peyh5ng7pqoXdyHhAGcy",
  "key31": "isg5GrikwS6VdXGXFwazQoFzPuzYck8rZtWRmaAezXf55pmQ6m669LQrTtxba5xHKLMYBZpuHWJcxsxyyd3Qq5C",
  "key32": "58ou2s7m9UXis93AhtipTYBFv2nDRYDQheta45eXcYJEfWrPVRp9Bhr7pKD6AY3G2RqmrwGpZRwjWg4W1feAxW4E",
  "key33": "61v96znUi5jC6kp1GvL9uEt54h4beApPGsGER35ajDrC8EGLVh1nCY6YAvKuBxreMQxBLbjLv8PJzFs734pqMPbC",
  "key34": "4hyA6EKFGeJarQ2QqP4LCoArL4jXBKL4j2g7G7zPe6FSdZyhY17uwfhCA6RxKRPSMRLzbfKHaMxycLpTvRxDjzhP",
  "key35": "2rH8swefkcssGLDtYDiKAoWTYeTmdPEd3mvPManXLfRHTPE13fNnd4f1cz6ZNR5i78TNzEoy9QAgdRFxgnKbKdfn",
  "key36": "C3zzWybqwxzXAz1dEBjABEsgvX3e2BxV9KoXH2doRAqVC8TaWv73hrMkuV5nQgNk1pkwKksaPtqYmCqb1B9uAvu",
  "key37": "3mwGMEHvpFZKc2ZGs9GTezkCxozKFhkURAa17F5UbgfUGzrfMGEnbDZCsNTjmFu6bC8quEC3Mavwok3KnAgkF87L",
  "key38": "4Kd6tMSoZM8HkRiZhYnnPKanMDwhyhJgo1uXYqTC8hDGooHWMrtZ5nKZ9bxpiu6X48HSDqpCt6cHF4n9sfRjbVeo",
  "key39": "31roggB8P8aWFLYD4f84NW3RnhnsqVduGvweQpmWY7tmod24LdZGvoZqt5cF6pUSEPEcEG7FriG65wUxj39RjUqo",
  "key40": "3BXneJUhNPMMGJUcWYgqzKjY1c4E6wgxaXxvLpT3tbZdgAfXFEKGpT17JHZ9LvAXpL9W5WdXniHyA8MBojghy9Kn",
  "key41": "2bd5XjTR6G8tzuShyh9nCf7GXG4kyNnkXtrc7j8FusPSWjdBR5eNLqXtVhonrG5FZj6Wat2SzBSfVwEbkCCjku4r",
  "key42": "2wHPavaXrv6HbEdR32DARQckeYPDEs12b194rkhAhAy6Rve8iJQfnvVvq53HCM8KCr7UttzQpujorBKLBsm3JY2H",
  "key43": "3wKD37Yj5bw63VDW4Tfoneg4HywuUuJBUk5kaAQMT9tb32duHhY3gFLqJf323mn1JhLnM3r6i4Zi5FGjUsxLoL8d",
  "key44": "3g7zGggpgpmHSfjM1Gwsxk3aAyJXXdnJxxeGoSDoWPhws9GLLh3ei4V8EG77QemAfordz3u51Dg2nMdJhmLaRJGn",
  "key45": "296cS5m8i1Zf5yTWefS2C6S5uMZqrBBg67oUsiP7MioL85PtkeBT4PPPww9a8ZP2GUNrTiUeV8QRygQW7iwFgKf7",
  "key46": "KKZ13pi9vgCjJaKFtyT5omqJ212keasVEWYGn4WLsWhs1beQ6Yovfu33aLKwpFeZ14ZguuULZDVWYSsDbrWqHwG",
  "key47": "39YQNNyamdMrofRVYjb7k9TxbVhSFMXNsEbTfmhVEVsR2G7xzqoV2zcsMwShXKyH6KSrfg7gaiSmmAGPRP6PSodQ"
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
