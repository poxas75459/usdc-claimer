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
    "4LhXKzikxLD6MnYkB21W5g7c7s2QbNhio8CAFEzxGvmPEpHLRRHs6CXWEfky4ga5djRpCcze5pv4SQeosqNDyeWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xnzweXKD2vhJBudcQWyVm4yfAaJyYikyNCVEmeNQxpAM3H5QZNxPrRaoWatxJCMQWpApT1Qmc8pNyDFe6WWx7BJ",
  "key1": "2bqBCUoJy8D8cN8mQPj5WxsReJZQMhKy6pEZY6qcCQM3zeRx8SeW9KXjk7FQ36sNyRH8dhxQALUrgc95Sa9QWkB3",
  "key2": "AFZySAzQri5mSLuU1zzE9kgXMA3YkLaSQz5wNRD6PEpA63h6NeMyfjDUfdm7wbKNaeD4K2uhWHUMo4xJF7w4GsE",
  "key3": "3ziucjYFsm3y1r9ftWwFjCpSHAVX19ksaVDdZDWE6Fv9MTeKtCCkwzVUSkfHUd4NVi64GbQ7HBAHHm2GG8BMBfxp",
  "key4": "2kzK4GKJzjnfbjKGn8GRW2NXWa7ERDEb4dvoKnmRmTRfHNcsXpNDGn9GT487KFoSAWNL8zWNah3kY4x5Hw8aGpBg",
  "key5": "59bSqJqd6o5wmAV8t4xpBaUxHy7NXrCzq2NY5cK5nazScUM98SvwR6LdniAR1H6EK6dVhEWiFvLPrU3nuHyFscCx",
  "key6": "y5UnPjKynZpQzTGgfNyyrkHP5z8Z7cVusmkxgnFHKs1mA3kVXePo6CkoSSNHkq6HfQeY9QnebRBkRHfbvDL4Zfb",
  "key7": "3FeKySdofCEHdXYdM8HszNdaNUF1Krt5r8ye59dYjvh7JnRiyXbDhkUNavjsebH55jF5PStZPiLhL5WohXWDyNb2",
  "key8": "zNaWXHhhjRB4R8Wfb8dT19E7KMx6iN54Z4SiXeDnSkdtc6bLUKHomiZVSUDg1BctsGVoYzsunjvtVsYZb6KC4A7",
  "key9": "4YiR6fztT8d6KipPJWm9LVWAi4on8jdWkvGDyotT3XnmQ224yMRcz6SiUbax4Ui8X7LqFkQhMsTQqip1Wu32ihyP",
  "key10": "4FDDmgyfvoKgbsAGF2jyNSHNfWJEAJZfpW3hMzWrqWDs3Q97V13Sv1t1W79cEHmy8qR5WkiQ549zu1amTaFDiujv",
  "key11": "2ja4F5iWmCQSWaRb8QvFQG8Q6KQV3YrP5AmBZTnkNsPuuVyjE9SQwmEGEGkBkDWX8cDZz7PN5ZBzZ8Facc7YtxUz",
  "key12": "tAPf3VSPZWLvpvBRynFoCnwCG1crwLUFpDay4Ne8K77brag5AssF49sq4U5jVKXXVbsSgniwgrRFB9pybJk3eqk",
  "key13": "2dHY6AnGhH6bb1ftEqT66narPXDRHLEvceyr7cjHpuptBvzJqet8y9on6YVYeqXYQkho6mEX126suw7dj4dr8bHg",
  "key14": "658QThkgxhNGA6apZh7uTg8nVkCjj1BbZ9KMnMnRFxJyzNvGtECCkF9cqvsyWR3ZQQXxSKtqYsycL7WuojsYc37R",
  "key15": "2qTxt9n1gYJuBf6skyQWsSw4KxHxQVyezHzjYagM3AhWd7j5whYsz43RuR3edZZfL3J457xY1hPLqcrw7oN9tDug",
  "key16": "5UbThKsUya7MrJDYquCvCAEcyMasreRJSPUyTbYxkYBuA6513vKHqt7QGHJrdAJuHvZqFHyc7Utkcy2MHEHtmA5D",
  "key17": "4fsJyfzMBcizCnNDwwnoKiavmZwRjP7Sb82Tjn8LFxrwvHXBe9Q2UmspB6fRjmZ4HKPP2sp9PAmz4yqBcpLRKwte",
  "key18": "zz7Skxd9rzwyvsL9RkVRXrN6aQM8xiQNzsMRU8SpiNaudaJWsNXTVvEoNjDsHyJ6NTi9VWe8o9nmaxK9H2FnZ4L",
  "key19": "4wxkpKmXcxT1EnstP4r9FKiD1ynph8ckwtf6FoJS3bkCDAt86HP4jHu6CaTmw3ujTdnQkGCmEQwHP8y6EWPu7uws",
  "key20": "5cc8NSsxwymSHXSZQb65oPgsTHaFFgaMUUfRU1F6YU7PZoKixMnSZWTxY8EdVQqLH7eno2CcmKuSvSPeHk1bnBNh",
  "key21": "2EsYPL78xTJeu9DBQwUn87ZqKcBycy9nZowxr9yMvSX81ionCx42o24pBWxvhUrJYx5YuN8ZP1PnJe6igcu9BaBE",
  "key22": "bHChoEgtqctoT3BMQkzbZjR6bLLc3ZsP2Dg3MhpsT1vw8jcKdZHPVe2sT3mruPjThKb4uMi7eAqSA7wifmEmzvF",
  "key23": "4jFTcASqJ3Bg9uY55aD77zqzzuUdTzkNLtZdsBEhF3VHb7D6faKDbpXcpc6vPRJeynmy82Nd8qNfuDAnMZALyDB8",
  "key24": "5TGEywGfTUAgGWaCBsBFWuFUFanG61dVhA4x2R6ydsE18K3BPtCM7XUFstSXUd3WBbH7DVQZJq7f9j8k1mGRXUBU",
  "key25": "Pc3inXyF8CQocSd7mvJjHEvHi2cEtBpd12i1UPFBK6EvUWBbFQs9coVC85WUjJukDm4C2yGhNt5d8daLCcRMgCh",
  "key26": "44J6MuM4CmEkey6g9GoMK47GgdeebJxwPMeypiYzzmJm4Nbjiz3WwXYdXvsPJrBD2MQZZ4Ly1W8SA84aRCM7ry1T",
  "key27": "5ojQQs8d3opEppbXvXxaanhbv1gx3zsiUsHkWASN2LrwBwwqtuXChmezDAap7MKDuyKqg2rpPMZEy3YxdFimrK3V",
  "key28": "2MupAyWZh39JKwzwNyHRJBwu7Bn6CQpnuWU47dQyBxtuumzfEMv1thddCxTdVo9XiMDbwqxN2H2ERpLnEGZkx5rw",
  "key29": "4MNvGLzQNfdfQDQbEqCBpKQJtgerRdYmZj73AXsyZ3kRPNWE8UKaedHecor47K5wvhU3btuYWqonLz7VE2XPS1n6",
  "key30": "4BjJBeXf9kLhxWzSoRGvpDeoN4Qwv87FWTzjGtyYrpppWrGeCUqCozppECeFGbw6ukwoH2Tm22nxWajhE5bWQG4u",
  "key31": "66zyXL92hZAT7459gZ3KtnTB9nH2n2s97pUNEc3V3jgqwqbK1pjecd2eW76axuvSfZgQCfwEZ5pZ9V4nRG3z7vB7",
  "key32": "4yB4PJHf1tvC7EFageuM5CgmJxwgepRetfQs4bMxNGbdU8ucJ8H4XTcaBV9x7THxJWiSsxza1y5LzdYDpA9s8xpQ",
  "key33": "5akqekU1LFgqsas8by2cTeYqxDPJbBJG3DGoo8JeEzkLbjkdFM9kdUqMvV2vhCATu25M8UTEhA81kyTqB9fYhkXa",
  "key34": "ftsESKead9UpPj1r9XCrzqB2eaju3tBafcfgmqL6uHUdu2bTc3PYUkf1i1YAWxJWAX1xiNYAEtKSa9R91NRa6dC",
  "key35": "4aC1VVBkVZJRCLptVZX6QXjT5b3XVXSbrEtcMfwK9dRUBVk4Dg14ZTEKJEcibNEj5Fa7584Tea9wq8FsnT8WvkYt",
  "key36": "2eNDVJAsfLaKEfxjRuhPFWwT8bULtdJ5Thx5KSp9Yzb95iK9yZ3LxTVajgupXDsq3ZmDCP5tGyFfMEjZ6Pew166t",
  "key37": "4cKuxSiTv1eLXvgSh4fEa9y9QyKNQTvMsAE119GC11wC6nAMHZbZ9muAx2Vfp3pTkCitSLg3Vid9Jg4ADihXVHQ1",
  "key38": "G7vZ8NMtcZQxr5z45emWELy6MrcbgJKS6cD9JMYyF49AHtax385o6PJ8pRnXiGEDZNm1PZ8Kj23KDZaR1up6Vw4",
  "key39": "a6bH3QRbWrCDyhH1vQscdMhvLrw1nzbGapr6jfVybTzQhgBEmpuUZpwSr2htFYbAYC5gbTpLxwZLVCY7QrFUie6"
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
