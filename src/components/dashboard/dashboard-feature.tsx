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
    "667jMrGpfqKuAUtRYqWo51rogCyufiAvFHjAqKGBHHdbxnbtyMFmP5ubfgZHserndN35R6iNyyBTpMuEU89pu6ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Umcv2WnUT8wxRVpfxPNrigeu6kBxP6VgzX1Qaf4nha9aQtC36rhg8e6ApdAHcBjx8XAWnTrpyTE5ja8BpZm2v32",
  "key1": "YLAyY27pD3Nd7w8eCRWeHJ4hXweL7PamGmPdYU4LFeriQDBRuHqmSX4Tkj2M7jSk3VEvB3GddZ6kqtAuKdDPExk",
  "key2": "3UiExmBKChnVgees9Ejf9Ykwdo7834pzxQUdcKJwEbeYy8f7vy2XxjhwCTcxAUX5zfd9NVqYjJyfcFKoQkPRWms4",
  "key3": "4LxeBsqEPTR7H7jbKfkUgHQTDXciZs6tfuYj1A7rGYYAt5W5mnNVUpWgmZ3dQgKEM1Nvx6ES2Rfm5g41gU4gxoHN",
  "key4": "2YY8qByR5NL1dfhvE6P7dazew56Z8ScHQzQQfTYMd94rw7YAsPkypsnpQWyiKmMzKJYkcoXVPbRCXotjS4b4qvXn",
  "key5": "4YCrmL3iG6XN5MY29SWa3K2uY9DoA4CYrLHkMRjY9k7NSf7o9PxRiwdBGz7A7StWrohLjAsbo8BbidJaxcovAWb4",
  "key6": "2Y789yynRVucQRTfvNNcKTBWvX6mGPHbjgDJP1S8RicgWCbk9kht6aaVEiGXcsg17y81z2jqfTccG7s6iy5YPsGo",
  "key7": "4nb1igBgn3BTxzquQ6dPcSktbZa1pqHoJZ5Uj1QFvvZVMM5MtjWv75PFKXGuRwv1qaiQFCZYvTPVr8RgDZ2Kwqz1",
  "key8": "5Gsv8pPxeLxbcnrwqR28p4W9LdWPfyhv9n9y94ihprVU5xa3JG45x3Ymt3uW1u5YzPvCm2FZWDNWUghXFzqyqBNM",
  "key9": "5nkpnf8GTrrHb25rtPUwc2WiRRSktKKmudnAzVxSJcUwMzfQ8AEViGJPFxuiuUe4AhEPhac8ytXqgn49J6s73y9n",
  "key10": "2uogVD8UcpX9XGkDcBopWG6ofx8wqdxaFP6yz5G8qRec4YiEMTTqxkq38Cpp7uK7tuXN9rtGvsj2ZejVD6rAYHct",
  "key11": "5b9rJdvSEtSFuWHgSEKtYLqEm3PjjKvvB9gCj72ijtqoLeTiSqMnM4xA56q26Z44vXtffh1kPzk6bPQ31k3fjuC8",
  "key12": "3fSj4xp6m6dphWHM3Y9SKBE29B3pCYRYCXEfH2ZkRx45oVma7eyCjm4MP6BTfZtwLyEuuuM81X8fQ9Sz5kbJhNZQ",
  "key13": "5bPWKYws8vj3R5XkHtgrztMXzUcsy5ABxrrZZf6xudrk96mP5yt7MJerijHx6Sn7goPdk9Qcn8wcHhMgZw9iHF6Q",
  "key14": "5oc4hAQ1MvesA9NdDc5sCo4p7hKjBNbF5abKA9kUxUrX8cvsaHVVtYRufYTcc363bc8JvXY5SaixgiAQJKzGGaSy",
  "key15": "4GRRiee5Ev51iYhnYD7ag1UVHYZfj5aKmTsZR5FaGFtAf4Ew6pVGM2GV28JrerHiJG1qCGrXMgLNh1S9S8e1uWPu",
  "key16": "43z3TkjRbPsoY11oAGqbiMkDmq3e4eNh9n5MBzjy4fVSAEa1kUACHcZAbycVrVpNdM6ghu7cMA5mFKgpZvU7Kfdv",
  "key17": "3XgvLNaVxRmRUfThGyXuiHMdjWEDZH1dXsCNCyLcp6aTJxkvBCJgzKf9h9EfqC5q5cvLw56jwPBy2koBTZ9t3Fhs",
  "key18": "4XSKvr9E7noe5pdo35r9odT9fDhW94oA3gBzbnc41fBjHtXKUdaArdNdGtpNoEVdiYAneiX5uvNBCzH8o55YZtjs",
  "key19": "3kfo3GmHSLYL9t3PrxJddp7jt9gfwAfrDkQfC8DnRZQRQzxHCqEbSr9n7ZaKXTVoqr7DqfYNVDBXp8LxB4pUcM3X",
  "key20": "3DMSSkMdhxhw6BtidFqkQW5LN7g97XLZt7c9fwh1oLJK5tzGuX6SdxcxcP3AW6DrroiZSfrusRuv1MQLf48MV1JA",
  "key21": "4E2zwRY7rKLXXtiFjbt3tV3wws2jbbPTGTn1ncEmevikdvNLDKgvnQd8BsiiAZC6uz3wibZ8MPwqKyjTsN7stsyq",
  "key22": "5D1gpSbwBWjf6hmJkZSXVFsNcaxQjCuhhht3z2A1dMK64QVHaGeDXqbZ2VrUjXFmZeiyX8tvV1pDCGjTAE8uVK3t",
  "key23": "4EdsoifUEHqFNSkyppMDTiYsm8tuhoYPCu2Jpa26MUincAT5XCzbgoBCzDKF8KYFJtZKmoLzKJcw1PBJ1Yacfug",
  "key24": "486FqXH9vUpnucQcY86GRzbqvqwQUzCpD4p2Kas9hbT6gQ1AqmQTaqpKvFCRmCwZmQqpBz2MqEfYXYycbi8qHenf",
  "key25": "2Qqo8aS47oji4P1n98e8NRsDcfH3DHaC88bC6Ew57LppqU79QPo7SbqkHLnk4AMqe3PQN99XJaE1MeYmaDUmnfK2",
  "key26": "3yYBnWi8hqfPfun9Jgq76ZwWM1STVn3u589qwtuSZPxdm64VPsyBBqFUR3wdDTV9TN3KF7D1qCcig926Z6dovHY6",
  "key27": "656H3WPpTgj7Hk1n9AnkJUt57J2ntp1ZSm27FgXTu668yT1p9vYjmR9nX8VQAb2Pnoo7PFKWKYALfaNbADXRUbFG",
  "key28": "EuoxJCYosKuyP5SMPxm8ryKrViv3ciQhQaZEmHuBqXWg9p3J9FBRfLYU76RKMJZiStytoPdyY2AgsTJrUVRtXGG"
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
