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
    "SBBm7yb83GPvBYvCKe6iL113GAEnSrcttGf1674kif6VnXiUyRbx967TbYeKB66yvDKKKvtu9KXSDT17Xrfcgqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56grakBbL7hRjvuWjYc91JV6bZffKgPB3A2aX2sCk79fyrMqDmQhqyu36GMUqMY66DLnAmrP4yTw8PCkeyEap8Jm",
  "key1": "3yvXYctAWAY3ei8Btcy7ck5UZ57nZYsr1Xx9LitnNfTiNNbHyqsCEGQjdbwS8TVkoPiz9vXyGjwzyPbcmJug8E6N",
  "key2": "3uvdaXXhoEoJsvRGWrMiK2gSJAyG4yQXUc38tnKF4q7GT7USSD3M4mtrubPa9L7WtCBAePxrfdQHZhUCpYUc9ZN9",
  "key3": "4kmycCMBCbh76vs1QfFw9WHTrbhUvDsHukNdChRDEfk3jxqeABJmU1YcZG5NyB348JDP7NYqLU4vZzTRUdoZsxKE",
  "key4": "2DEEC2aPNqGvVr3qY1BRW21RVDeRuz8dVzsSeRY2MFfavFHC7sHKhHBNToih5H5eDyGFzMyo2k9KaQ93rseCp1AS",
  "key5": "2dEo9ZC2suyyrSspEBo6vDZprnq9AN8U9v8RDtFdNvVAqq3Zmy1nNSsGUEEYv2jqqyP3ARu8En23qNSriUQvMFKB",
  "key6": "2iWY5HoztTr57ZMNf5LLrEZSp1SDA8i5GLa38PLWnSUnMs64p6Mwm3Kf4vfsgqHhTTCFoQ1z4sF8EmSqYAEczo8q",
  "key7": "5nSZLGicfizHvcDeWfUGg7EFJxVA9ivSo7K8pwxGC2FQCh1jSGrByCat2hCr4PVXMbVwHdvWg1oVFxrSLUJ6g8Jq",
  "key8": "5gCD5CdzEiZkeDz6Wi5oP6qG2uJ8UuJQnsJxzZnULC8AWCx78BEcjGLSyBQFDbKrbWsNq99naJpWUzf5c3VPmpou",
  "key9": "3dty1k8PEdvatqiUWm3dfoHbKYyikCM9pSa32mdEgJpA4j7kVBverv7MThEDGPz9BozpB78AJo2uMDBFqN4t6Ugo",
  "key10": "4Fc3k9bbBiBP5xyGeev2ssSb9KnVa4dvLupKrJ91pk4rheZzz61Rb5t1TuQ3nuCKmLsTa6vvL2VR1CACkLKUmCNE",
  "key11": "4esFFQwW8q47y8Mp63JJuVCWwJGfUWjLzh5q8wj95CdzB91D1eQcUKMVXHe4u9nV2XhAjjmeo3vnzjMx3J1eEruk",
  "key12": "5z5TSM5j26jC3BQRy8uBYhHobuGCM6ar1SgaUxCEUAAhW4ULtXMZgcQbMpg8wd61C7nhs6GZRqFoNbtnKknEzEMw",
  "key13": "45z9pL413b791Jovr2mNmcpJq3V94ceW8u5rZeEbb87G7fFmUkXyK5oqJVtoGDXJGBZi64UTNTvmRndSmAB6wmAG",
  "key14": "47pjeXWGa4tNVgT7ZZeJCJje84HZyAenjJ3wUtYDctDMMPNidiwuwDBt3vG2785wGTZY75tqcEWkuSLEgf5YZ3th",
  "key15": "4CnyTc5Be99Ldg41grUrirG3WdgVRAMosKnpLRCU4zGbiSTafs6SJVDz3NshxFEw4hyEMiWWzxRVFmtt2PcGKE9h",
  "key16": "5GNNppVsGWRTHJFsijWKvB1iUqmFvsb7VtyRX7Q2FAJpon3cic6eW6BpVz73xrAsBTZRdw3uXjxx4Ajyynw883JX",
  "key17": "dMRTmHzisuSb1wjY8Lk3CPkoFysTTdUFmygW2BTrzWp1AVF8trodDdjAaejJT2aKa2GKfezWQF1zVNsVSvW2kfu",
  "key18": "5xJpLzvxutRMkE9aPisowVPXjuSJutzbQhv9A6FCca1zc1DcEANVZE5aVJ98w2Q49ZBzBi6orWDyqZDgKU7yv3wn",
  "key19": "2sW8WKg3Hby9V7Yb17ipiTZKhmUzAGJpsQZeo79MfHGoLCBRV6KNiKSoQwa8tvLwBN5CmT5WnPTh2naXrr3gi2hP",
  "key20": "5bye8Aw4xCpmpiUwdi5LqfqvbTPLjksjWWWEAN1M5QzfirVj4Y1cqR6k5keY4M1endq8dHKB3tzPicNmzLZv3iPG",
  "key21": "36Qn47GJV1XpddDZhddDPuTcUzQef5Zjxk9ro3Nh4gMbrSBxQ6b3K3hgNtytPyAtDTv7bGmtkHtm86JeG721utTy",
  "key22": "3bXqzN9UksVxZJsgVwXGTcDXRQQiWaGNvc6H4nktCvU3QCeSfnHu4MorSsFkMdPpYcFf5emQzDVHDpXiBVcZLZr2",
  "key23": "BM9mctfKnns4jh25YTxRywn5ZhwVNYoxYA81L3q5NiF1yMYVqKpD12oowxJQ2wA7K4hKb56cXY3fAZi9PrhEqkj",
  "key24": "4eKGsqY3XUaDcnnG9H4e22KLeVCnYiif5BTiLDZjTwyR7zsbVRezBtmKoPB8HinTftnCYLT42jEXAyzaPpEemH4P",
  "key25": "3n44z9KFd7L87RiykqftYCKqebz61dddAdiBWZQzTjUaj2x63P68a79xFHrportCnxGSzajSdLTSzZjmjGPRcRhF",
  "key26": "35Et4wkZU2GDfRqAWCrYwe81dNWYg65GxV39oSx9KZB4g4LQK9USCsFbhZUiHNn7hd1j1UyX78X6RKAH49JRbmxw",
  "key27": "ioLebqRRSxZiAM9ZuY9c2SDEyCn7nXoeCyQe6HCAPPaGURkXAWijAPaWGDmWS2GSPeqpQ3UmGe9MNNshDvem9zW",
  "key28": "4QN43e7so1ivuoq3eVmmDqvvBeadBAZ7AshcGSiXrKAx6PLQGDDL5R7yVizMQegTHdB7skvysFHa9cQfoayYLkKp",
  "key29": "rv6wnD7jgYUVugJGzpoxBAZdW7Bmzj5W5ZL6xj5JpqzNMcrKf9TwM6VDccZUDJUtgdmd8TbwiufumXj4NC9x14k"
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
