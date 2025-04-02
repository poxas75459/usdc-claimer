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
    "d1UsFnVdiKHZQkQAbcm2LZpqBvg62ijjeSM7MJtPab7uyKr19NcuWnfLceoStPGi5XTTYdwPXoUHFfRkb3LcXMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QySQuEHjCS2DEEEi16ZokdyegxTGez6T8ZH45rA2f72cj8d8ZXSQYXSgg6vnxrqcmP1mDyo5SZVvLMqB3S8SL6u",
  "key1": "5wXBDsQmi3fxTz54TrWvUBMAcuKXTajyidL4hzH1uTfynp1uwqvsXxQtip7UPPABzBavjuYKdFDo19USP8PxSQA2",
  "key2": "661qSRqanjSwz1uAwFwKQY3eB5aWVhvZJBByiDKsdfynjGLg5kfaShDALFWFuaKpXCX81UKQhAhrUAkq9yaApSCB",
  "key3": "YudJz9GLSfKWCT5Z3W3TpTpW9ZhgD8kC46ESKqMg3qQaJPbbiw3boN46rqH7BepoFEbUWSdBUxeGrPr8drR3id2",
  "key4": "33YXC47kk6oczCVKbFnb4XTGAdYf7zq4JTgGUiY13Zv4cH8UKnFT8AUVGfJSNHyjY8opUFcLrkXBBgMPjkRbqY9G",
  "key5": "5GVTYyE3CiWKcnCCVwMAJAPQ1Rb4SCkNxo7EKfKxeXGCrS96WiNn5v5qeCrLwcTAkWwTvqxNXpny8k7PKegkYH1P",
  "key6": "2PrxeduSnKWdt1gYUdBe2GQQfVSwvoDLq8mQvn1ey4V6gzDmf8E2GSiSYsE9AjFLjTv5W7k5XrCy1X6VrC5b7Foq",
  "key7": "pPaEpixtPg267bBqgRuoiLr4WQZe7vWEGWDsBGgETPT6DhomgHdEQj44s8AJ7trWRD2ZyWs63ta1VUrU8rFsQnw",
  "key8": "44rL3dRUQZKp8UQeimSpnrotgJFrYAWMuGUWmZ4s7jZtVYnfUdY35bEbaaXKKym2KtAbEzM1Z4sibyXexkuVc8a7",
  "key9": "5MTXo9JwQfEA5sgzsCKWkLSkdhDtQGBEb9E3KrGHnjh3iB5QA2FK2gFK58m1snmmZktFcLyTMtHR1YnyNqyAij98",
  "key10": "3wLNvpBb16wEcrzRYvReRjahAXLZ72B9JqGpJnFGfSmEK4ubnyRTjSLGYuLBQkNmHBVNgVpDzdAmnabUJdqYQbBZ",
  "key11": "4Kj5XsPBh2dukAj4WNsfgJVJDyAfDLRenYwEiigMizrfvNsrsUVtggHP5r4D1Z5NeMAGdxDocGkWBGEvNnnQadh",
  "key12": "2AQ5y32svHXnzDSC9zTcN2DHd1sRM3k6DLtJ1B87MLbztHjK6tzcZ9sKvh3XoXWFKZkPnNP9vQaFErXVWZuLLWnc",
  "key13": "35mwXNFxLg77zDT41x3WjjAfqrdx86EgJST4RN6A6xNT6Xt8ZiECrpUAQJuzzZMKJEXEPskJKs71KLXsLBwcyUkP",
  "key14": "4NVPA5M5zbszUHchGeuHWdGRuvzaTGkjiLmSCRibYMoeeDxFaXbRZfdKFtruj2oVjd7ssNqNdALcuLLAx1VzYdWW",
  "key15": "3csMreC82SAM42H24UxPJEEMag3RfDaBoapqZF5ufFCf9E4A22TYQNTHc4P4jAbprWr1DyFu3vEwqnrZcaTCCKMw",
  "key16": "4uBPatWJaP5htvCT556jJyEWhJMGAYycV44edeKfVD1BqiZ8BzsxHawmwTJuQrtAJJJwDx55cZmVzF6A3sL7f3mk",
  "key17": "5TcWDs9tNDnzz91wD2C2Lkc6vU7eUjmW9dBDpTybMDg81bXfk5fMPHwhJUtQTxQcmTvdq9k1m3feVYgkHSBJLz3V",
  "key18": "f498kL6KHfmWaRjedYwwsMk5JLjCnSpg3i8nAsjxWV8fJgMawiM6CKfASQCsTvUvAJW5JEafDjswQtdZ5wTqTQL",
  "key19": "BVVgDQoyvhKFvTHAr875pCSzcGQhFRptRcJ44MqjG2JabM9Q8VmM7dRz8pC9dUNUkgKSzCU1iSwa4qJ1XiRNzC5",
  "key20": "4PcEWfcDjNX19zj6np5ruRZUjFSvr7ZW7DZQmvcfEchoytkzefePfKj4QPwWCXi9GFNTQiQxpm6tKubwohPCwGqu",
  "key21": "3Sh4eQayh4E4iTojFXBQDt7okofwHkQozPf3vMn4deTgwYPf8ykF826h6EPvR5rV8Wtz28pUnZvQQHqNrfEM8QHA",
  "key22": "2WoFPBDbE3TJAKY9wKfKiHj1ETZPHBhQiRtoPPba2iz63fsYW7eHqW3sg8UwMW3aeaYaQqLvSBn15N4KpFX9XgJ7",
  "key23": "5cMNXeMe1wwTjd63TfaJCoyCbnoSesvWT66kHwSExJnbAiK4sdh7Wn9e1uzDpWn4JRsJpbaU4t33aHxr1oE1RmNy",
  "key24": "3vbAcjnidjrUCLuvtoRdY5bYeiTZ9ijrJGHWQZfvwRiKVU6Zu5Ds3gCKzSso25ogX35RH5Rv68zCQykpuv3Bzq5D",
  "key25": "3JPtFRz3booTbgeN5zurvhuKnWZAGUzMAi1Upg9wPEGXMQ8fND2U1Qp5a5dkkQkWZ2jZzK9GQmwAK36vdyAmJscn"
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
