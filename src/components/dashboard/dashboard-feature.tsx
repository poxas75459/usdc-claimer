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
    "2gJqjw4Z88hZg9dr2xBXdLrYWnjNhE5b6MpWSTnPN8bPBWdRh4YvRkQX8b8x1fxhmPJaUqWP5Qn3gTLxNqqU5EaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gYFqgtWTuYKSihh3ZkbbsKtaYxcyu69cgbGkrSPUvYoAskese3Jfy3ipdQCQGxNkgHcW5SpR6PYYB2PxUyYPJAm",
  "key1": "332wpNQhqQD9yhdR46Za5EDD8KdEMnwE5Nn3CqqcCi69rRG8KmY63SEaP1PKQ6P3FBMvnu6bqeZL228mWL63dp3e",
  "key2": "21J5x5GiYezon5yNWLChopD9J1FL6QiA354kpW2dqiRTcjrvHrasPk8q5fK57nYF1VF7AiEa52Q64QiRxXKbVuQw",
  "key3": "4iJnGTgXfxvBfYTbWYdx67TuuWyj55UX3TDguSPbryVBGAC2pzkgEeroDCrrcd9mq9hvB3wMTTrFoniAEH9eZFzr",
  "key4": "nGYaoRLm2dwLYKsadw9WM6XJFd4SoBjv5fnmwGCDguXvVreVqmufCMyNGJ5R38qzmVH1JXrbNUQGLahijyAfnbe",
  "key5": "5pgGE7Pc9uFH4sL71aiQrmtaBuEe7W3iE4bL6d6QPsMjSFhDgVZKtyVM3EmM9tZm3rPLhH6uhKyEs3v8QkBzt5KG",
  "key6": "4bfaanvaqUrHcPtaXfeYZoNiYEv3f4oLQ6ZKAgEEs9JeqmZ5wRMfnxWDCeoEMgBZvk7nZofpdGZGU8hRzCjx9QAA",
  "key7": "NUjVvVjexFF9jxYTFVKgZWMLREGzW4kevMr7Xfts1zhdwqBwFbtpyrM85jWGGmqD228jwoAQhvu9MqtPfUYfEFy",
  "key8": "2k2W69vNFZqNdBCpXGLfR1kf8gdqWo4tSi39RJcrL3KcgABKH6VXZaK6REpUeHswxNXYp2hEMXYK3YeStJGCbBRt",
  "key9": "2TpE1gwnwEnEx1p4R8uvVedeLYpsTnby3SYyWGeEfmm3EhNxzXHc8CxSPMiST6Yqdhfv7CC86akqq95aNAFhQ6tN",
  "key10": "3aKw8Kjzcu7AEncEzEKDbjDu31bceD6XADhPBBGpdvBUiTThCD9i4g2KEvcS5KWTzoKGMpW4ZpRYWik4ucqJrZs3",
  "key11": "4DWS9LrqjPpfBKGczLwQFmfuV2sLA8Gv1ZLxYtGerBDoLgLunXHbDLmz39SqTvzoUgajaKv13PDjeP71eEzyMNK2",
  "key12": "67Fu873b2VBUUMtW3cED1iwL4b9GHacqAkv2iEF62BgssRbtkCfh7PG7zJmjortZ7qpWj1pisHJ9jNZKfMiLXc76",
  "key13": "3k7J8ihNspzdV8kLpTZQTvqBXD9npkQEDYvJurcFH7VS2gyrimxJ1gWurq5TVm1gMUXmBg7Cp8e7S85EZzUZQgZh",
  "key14": "m6TVKAMoB4jw5FyXgC3Q9rMfX3UEaMGPmSf1Qp5DomCJLREipQ3wBTtAVVLbbQmndJmxv43qdVNoZ3F9sgYUkj5",
  "key15": "49vnzSSFztmf8b3dy4aS9f8jdsYguPLi7nyphZMsKD1bPNa5DR4nX5CTdTkm1wcFPfd7RcTNGtRo9RmJHTfpEKK4",
  "key16": "pQjwhgNmWdjR4KouALj2sR3Mq8Xgmm2Kft7Piam5hSrj6DiNiMV9U6uWtiAEo6Cy7M6ACw7oUwkhwqowX5QPcrT",
  "key17": "2Qz2Tewhq7Fy9j2JYzhRNvErsRDJD8Vdi1uavHns6X2q9ExpDMhmMiNE8YbraN5FP3CUm2fhDYeD7i97WscLqjwi",
  "key18": "3k71yn8YEbpmacbwkAjQTXMxKWF29r56drZAQnUNDbotRZ3PToiFMGmdASmeYGycJaBokHiGCuDaMjYo9RcxtxXT",
  "key19": "529LRMPErirbYm2iMgaonBVgofxJYGqGQhLjdsH98Ss7Kk3eCZNqkr3axdu8PddRt9LT4BwesdbK6M2YTqj8mfeV",
  "key20": "3uXAPr6UfxonytM5caagsdiNoFG6F8qMh5UBnuf4PkAMRdKuZXnFuMV19SabhfR2oMAwjEmfDTQbwagQ3nXcJ7UA",
  "key21": "39XzqC6B65Zwxup37c9KCE46GqcvN2KgUeuhYzCTakaqoVQ4SgBZuq1MEvgi3Qf8V7FBZBz7prQa9YsQZeuDB4a4",
  "key22": "32esguiK1QtyLq7AXqfLaPs4gRn78uMBGp2id7rSmwLNPBxgUR2P9m6zXa5H2C3mfDLzWP7Gyqierbp5bdQtRK4f",
  "key23": "am2ybQZU4ZcPq4SoKw49sr22wQbhmrXNyJbWhMbvGyGkVzVPRqEVcB8xm61dbXDyr31xWqkq7RwbPwK2iGBoeH8",
  "key24": "2JUdLWWCoCM14uoWw1qw3pzn6o6xKiqyK2SVRLk2oos6bex27YWYquatjbKHdEPH3JgnThD2er29k8Ez39beicTY",
  "key25": "4n6kkeLFcmsDXJL8t4GbdhHqLZVzjtbeqL4ctDiSihGpCAdXsXPs1RN6p1EhYwfYyLwrpXiadiWewDGV2LwuwEiv",
  "key26": "3WwDiy5vL3qbRfUp48eg8QetxVoz1qB5sxWPDo4KCcqo1GMHDrkcBxJt9CPgi9e9qZHWGqr8pBxiDc9EC15V6cKm"
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
