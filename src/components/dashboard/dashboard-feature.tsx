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
    "5Ecu27btGV9DXWHtXvT1BcHSuKrMDZxXTXmEhsPqRStXtngi7X5aLeHcR1auQHoQcwrejx36MsAf9V6B2myJRXCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YZ2DSVFuxGLg4LCtx9975jM8R5QTCQQ5uZD79o7yRU3vmiatgzivMvp8t1U5PF89WuzvPnvh2LkrnRw7a3Y4NgB",
  "key1": "3Vgc9KaoAB8iet81KGS9ZtJZsWWhTSoQgSH1xWGRcM2heKxBMtoEyF6ZyuzbA1KnQ2cmXUspgjcTRcSdoAZj58RE",
  "key2": "2pfCYpMFLv6skWsZpAxiddDYcFF2e511NVvLai5fGqHaYGPHRe6yGN8WaejzJ8Uc4q5V27G6cLWTbv6pDqiFjaaH",
  "key3": "45Yx1hWCa5VuTqDRifY9kKGXU78KhGoYoamcyBdG2AjEjR2uYQQ5FaLUXS3EdvPSjdZqjBGQnKtbdwZ5c3zjVrBv",
  "key4": "5gmP25EF7uiUsahjrrCEmV2XVSNeJQz4tgZVks7cJG6d54roBkT3NPPeX2cmsRCAgB5zLN2v6GYqJPNz5svNJAoZ",
  "key5": "4PmRY5j84vXDrYBHd7CVqRRTWitwpTYrGwQtju8u7M5ARvkuZhREYebLvMXfGzB6NxCCVfMHPsUpwimftg7VEu4F",
  "key6": "4mLvCLSGmv4pL1GixfmSCazAVZpEfQNeBLiPzq25FCiK2PaALEupNBxF5qhKcHELx99Et9aEiD3qxkDFuGJTLvHN",
  "key7": "2fHKptHjmx3mAX9XPrU3GdBXwp86r4n4d9JfGA43ckwKzrKcQ9t5pRkeMeNmCRo8CMbvohWui47Rd2oCQEMQXvAb",
  "key8": "4Xix1bNLrzZ51YSuUsRCHs61ofSHXKpM6yFLWBJhMA2PdCsDbvkjpE4TPMoMQQawmpcC8pqHWQvuEeqn7Kd33m3g",
  "key9": "3ipGsQF1MsLEouX86RHS5eFJaeP1eKP3RbtJsUDZBSJjB4nGQmHqCYUxhUQDapdU4Lyr6FusFzFvAw4Ks3cXnk3v",
  "key10": "4Aa6NQuziiKxmWJBdY7RyzCpCbzeCxbxFTDw2M9SQe7xzWu8kB2VSo4SmdvM28TZCd7VDrdU4pQSnBwV37rTBhgA",
  "key11": "3oBamHWvAWxhHQLeVKEow29UdE4PcatQ1iD3kPwDD9jx42UFir781rNZxkgdcUtAdDJ95xYjiBP6VJZmj6dqeQQA",
  "key12": "5Sqt3eKc6mVzPpMuHCaC5T9bJKLnMH5DbdQgMAXEGdWpNG3HHKBNFYpJNHExzZauuBMZdxtW6deSFEwsrH6RhufW",
  "key13": "2D2SHf3xzxSCsJFCdfXSLNVA4VkuJjeMXdnX3eyUryJeSKGg563PTtTHcS68Pycmy41sio3JhvVjXtTsVt5CxAVR",
  "key14": "gYtoA524pvJcYJbuJSgUUC8i31ggvqZdaDLxUJMKrsK4H7L772VhcN7mCqJQsGZjbJLR68DBwu5AUWDPeRittGi",
  "key15": "54aNzMVpYvZwzkd2UE5Zn9CEegfaKUDw14DKWccb3xmvUX1DwiM6gA4hY4Pem6aeLg7AUvxymXQvtGTYKHEcnx2z",
  "key16": "2K1cZ811uPHtvimug5B4sgnuZudtd8TafX3Zqwr3vzS4WcHFv4wtvCSVmTEBN13yAKCTYbYMcZR21yUXdbLBUb1Q",
  "key17": "sZhZ3hhpXJS53KwdjGRePi6qRMMCx4JHDNqqXfXQmEfZVvrJ5e9ok5HZUxh5kuUVVJ3YWrHTr4FsTD2UQyNvtb5",
  "key18": "3jbyBAnBf9fEcse4dBmoEQLCuMYnpMPH9rgpFSwWvsAUiK75KEh4C18tS8utoZsQdDYyHiPado62d1Y5RRezhfGp",
  "key19": "66MNzZQDjRXJL1diQSrKNjCRNq7kEpB1NfjabYTUD3TXK9khupzqWHHA99T1vis9GkWK78AxBQTi3yDJdLp7YALj",
  "key20": "4NWnW5413Jh1crYKKCLvhhDnNLoRHRaPKD4k1WPJv2HDaQsmKukTTA3JTSuDSYXQgnsbcYT3sJuf3AJBmhLjatiM",
  "key21": "33kFwRdQwBeyNrQc9gJM9qGveazJdUpZA8p9jzHQjsaHoeVLEHip7QrSpAPmyQmy5iWe9Y49wkQ45X5sDpSnpNgn",
  "key22": "3ixo23DQAbnKA4JZBzM5Rz6SH7XCr5JJz1KGMUcSv9CCHcGt45oobZ112DvyGXBqGntNwDDFLLodDwFtUVPufnyq",
  "key23": "JpGAGveifi4rvZ2bNNzosB6B749vGRUs5dCgsPHMxz5wAjxUVhqpNEqyrMYvjnpLnsUxwE3beZji86jF1T55ruX",
  "key24": "2naztBidPnZM6UnJwNKRMc7JfAU9LghcJXoNugQhBqAFd4UgYHsKQwCnLHH7chkZv9VmqSzU9dxHoRxyq3vmso3W",
  "key25": "2vKY1EELWyvu6QnHRbLrQD5YDNs8fZcC8QvZNTEYCiN3qbPusQyYoJQu3uc4bMTGXpGu7TJmxhrpELDQGK47SqWv"
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
