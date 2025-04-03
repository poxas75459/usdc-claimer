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
    "2sccRWXCQjipTK92T1km3q99fHm9MrbDUw9LBNjFwfcBqG4cWRq9pHm2Lb2rB2ZT6GoBZag8mSceJxA5nWuu9XVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CUpdcPpo1CkJQods1j38KLcDTrf3ykxjCyyUn7HFPzppFi6bWyXMdmFU196RuWTtV4Qg4CK8M1EcGWJ53rSbw5D",
  "key1": "4SqYaRgjbRxxAXFsDWSfLeaUSnkfJhiQkzFGPipiHdqNg21AmqWA74jNKGe8rnzPjGSLHMXjuYijSuqXJEeZ85LY",
  "key2": "5k5nmg4TnNwe8zeXcry14CjCcQzjG3ufzq36iWLu9iXvchz4YGHEcz88epGEWqfYKoYfRSub7fMpKkQqzcrBw7pC",
  "key3": "5TWGZeSENH1ybtrhn6xayuKduPJxBv7e8fJVgkwcXKttSeqZwAdNKhXboqeYA4z49c6Hfemnvq2ZfbHrBcErzVoK",
  "key4": "TkDwpujRGzYvdW3zKd1QUQgPKkxzfTSJY1PQm1wa8UCGCD62dX1Pc4g9MQXskhZ33YXW473BSC7pmUJaSBExfj8",
  "key5": "26s42JLEM7wf2wLFXiiJsSc6FdyaeJTuyVCutYdz3ux4WZDj1fJKpYWaxTCEn2wE2AQUPNLBk3VAeSebGVyeH6rw",
  "key6": "4LoxVTEfnFRLxSckJFE9sBTh2Cc1WbVcZ5sgWwEfUrTccAmFntKGmG4Da9ZrmdEX4steVmkMmRijtSQr8mMebRdY",
  "key7": "4w12JMy6DgUCcXDhv5uePqLuqWTozB2q6yREVddvikAHVjZ43q8vUtV7jruYqyikMJxDkhCBengM8U2iGPE8uvtu",
  "key8": "4K7AHuApyRXgPmNhSapsjrWV7kstEfg6evTpSAzyeK8wsRF7tW2GFB2JMRCjqAmaoXJSi7kU5dM1HMagB12j3s7u",
  "key9": "46ZN5fQvBxXYZcQwEp4jp5zZJUcgS3r6dk6SnBxEy3my3NYYCEkEhEuRo95BYxgowxsVUirqqePjDno9SHqf1ovt",
  "key10": "BidYkd8XuD9Vmo39zMiN8oMjqEKZebZPS1ZCFXoBmZZqrNzKQcAKi74uvBZzd63eE6HJzxPXnCQBLkhFg7xr92Q",
  "key11": "rxsRkuSmsXXyGdUvDToVb4VwVPvH42vFy42CWqPYVQSCPJd2SPee3pSUM2PBgi471QNtD1oa3RKcERYdqMURUB7",
  "key12": "5NjpGRAqofsmcppgsA5pyFYQwVWR33LfbkEAc2qNjKkSHyRDZcViFGEjDcx8jW6H4JHDqALoK2FfJfggt9wNz6DL",
  "key13": "RcqyH1vGPpmCPaRmbq7Af9EMHvno3jppzCcadH8VQKJwcbPhC6PHHw6458LN7kBVsPTL1BuPaG3kad7CXdQER7c",
  "key14": "34PRm4fwFFUE117gpPBiDtkMxFxf524mi1gFGXqLfhmVSkoQALkezn79EMWNqcCLwSBz5Rr8axSPPSGgoE7QRxAe",
  "key15": "5BWzHLHHJupwexJUwmqnZA3nSHjpnFVvqNNRtiz4ozZwuU2fjneD5RePkcveLyJfgb1jjgQX2SRQ7LYTpZwq6S2e",
  "key16": "2946FXzujfiNcert8LAoueD2fpoD7ZCgne3S1sPXGWLG2WYuPbDUbaWMCMuDeRJ8eM2TcvDLYB93jKM5jCrYJuGs",
  "key17": "2KWqNsaorymFzMFPqUZ3JnnUbhoKND73opT5NEUBzTjs2skLMkEvhhJKocuQjCee2piFYyHDJS6UothrWsr7ZTP6",
  "key18": "2Cipm7PhnNy2tH6P3BhaiBUPRCH3xyzPq5JEgWebhWrFeVDqWxqWVkkVtRUWrkfztgV1kfRYuj3G6fKbwPDvcqtZ",
  "key19": "3vitWZtbojhri1HfwX3T7frvp6AkS7oBQU857mWSxHKiWp8J1rJ8EJRbbDegFku1Veyd18qMB6kzPRWae9jK1Vk2",
  "key20": "6VnCVd7jRvTv9b8rvczy8wJNt1xR1rukoK1PT1mdVqmXKZmZUQPECqiugmXovSXXSA8Dbi4KjRZFt4RerFnWYfX",
  "key21": "2e7jDGV9VKKDCenD8px4gw78QSGuoujywTSDTCkpTNAMApafEgvMCKWAHnhsGbyyAgNh8EgYmToGiUwFUb7auC6u",
  "key22": "4AQotTivzoKH3BAMzjaKEbM9XiGsHNNZobn7zTu9ajvFbDks8MTe79WYJoULcvQNoR9UPuCLxTun52Zx65koqmsR",
  "key23": "2BQZcNCCeB2EXszhvMNWfAMrvA1JUoBGEvfXJYNrXtUdhTzuPLEVJNqjiCYWufgNPK4H2hRYyZTGkMLhYnkwRLvr",
  "key24": "2kDtPiyzLm7aZftUZyUjeYk8LdesbxZu2PmLfp2tiwVMMHLZvLSqBVSJSTt2oemwNSyPY8YPHXNZEjVdr8eD87yk",
  "key25": "5jzX2LGPtT7g2TMwDS4gFdQrzNiPB1FKzGXPVjFn6vFZP3SuTKdGrDpVei51FkDVMus95V5gcQepLbnBZrdEFxkU"
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
