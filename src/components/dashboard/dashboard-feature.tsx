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
    "3XMwQT9o7FaWxp376gYhxiVgjPsRdhRZ6mUYTvt11rrfb3R9eXei1uQECcSwKJmmiPtUT5aZ8hbJALtzHaK23pSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C54V62j5bcSx5TDDWxhe5QWa2Th3ufjgWihTWhW8VBMdBx9f7Pw6NeWuXfSxeAibd6XUZSttMfL78b5H5UDT7L1",
  "key1": "49mMTndxy16HiTcJtrUW1TifK4Dsmw4qF9Vt3aih7eGd318AWhghfvqp7XAsaoeTCowXG9dSfLmGdKBapJ2Xa81i",
  "key2": "4RLYuesyvyWZ6Bg72a3CFMJTx72r8pYnEz7e75DXATJmnscj2E9GkDSuQ2BAC6jNetZ1LV3xbx3GyH8ZbhX6gisr",
  "key3": "5oUnAdtfLkBpFUZEMhuttCB9nx5jrweB17SeEJRyEbPRZjSxU83uWXSUDuJae1y4t7wtjKgBMULg9SZeSepitzLR",
  "key4": "4AHE4xVmy7VgS9ZcY7GTB8qXJoNAYucKZon1ihUh4t8rNDFtagqyjnrKujYz5wKsxQnnzoEYb7EF4tmA8ZYd9d4e",
  "key5": "41A4W6mKVkR5jcXLMeGTj6E63eGgVML5GvHA97uot5HpDMBJvJmsyjedXZHt2mNjKK3yYQ4Y9AS9WBc3K2TVNxX8",
  "key6": "2BnfjtGFGCMUoEYNMGD84Mp7sLbhq9oE2f9CAo1ZLzBGHChtv537zewCeWCfzu3aZsZLXjv19TLVoQq18xetUZCG",
  "key7": "61JVg5TSBgM2wcEFGchdk3Pd2VFkcLvATrW19tyF7L9quGgYMZKXbFdThC3Z4SdfWwiG1B6WBLs4BYFfZffaiRqH",
  "key8": "2KFxHg4bFNjcFi4fS18c82eRnicoc1Ushd6NQJZrQWRFBrZogs9nZNA1m8z3vh1XZkGxV5nfnr64X7ay6fkj4D4U",
  "key9": "43JdYXPm4GW2oHxTWU59k3aF9mgxygFJvpcjf55RKgHUcsQnuSzv7DwezafM5fqN2bde1vZoiwr27iNvUKyURTda",
  "key10": "5cBbpKPzhFL6fhZ4iRK4F48iRxeuxNf64qBZSxTvkCEec6jKB6PKDEhw9x5pXQVe226qgvqzd5ptQFpXwpaMdL8J",
  "key11": "52sj4nTq7SfjumL9mDaVx1iFxXyubmhWUXG1WmPYzn7YegApRwaa5fTWKvJ8GRwwMSSp8RXNK8cuTjRvG5Rs2eXn",
  "key12": "2oeg3PugYdpCG5SwXGXhjEJDPEaK4xku1FA2drN2d9GXHfCKQNS7dkzUWCwjr9FghCA4H393i8RFyMk6Xe9GKeF1",
  "key13": "5ZWsN2mfi2bnVmPo49jrDei8yezh73K69A6vJE4EbRW2jgcE1PQTMtzLYuXuCYoV3SWksKSRiUXsXN7kmgdZrTRB",
  "key14": "KUkoZ2tUki22tAaNTTF6V9wPiEwokQRqhsPF8AV9CvJC1MBVokjYdGGihAWYdVCCZoQDzEqKqc4pgg9dqHuEYMw",
  "key15": "4XNb2mJzJdNVGZgoCTzfQ5DYCKzKigPboNBbf7xfQJkXDW8ngn7wUPfjSbLivW8JxZwtNzEZCHKCmSEDbjie5Z5y",
  "key16": "48Ygg5jKwEjsrGgk9QTQYhroRanzRWKghaNyFemCidN1ERisub5webWhukFWYrQ9mXx711tNABB2yUwuniyhxM3n",
  "key17": "5qegzR9K8VhZtELA7SrpS4BdXgDb9LHHa7V4Uvmg6zmndtEJRidps1k8gKi9qe435rXy4febLqieDvebwLr1dNGB",
  "key18": "28c8iX1CRthPGLaVcAR6mkWGkjQCX6CFNmwPa84JS7Vq6ANze8d144P53Uz3qsTiYxNSqvvf2EpHjQth5EvZ6Acs",
  "key19": "JqRVNcmGo4WyvLSEXVy9uKR2ymRWGhiAHCr99XEr2tGBrSMvmTSmKp19jLQKsCatuMt3FDW5Q4MJ31HTKTrkeR1",
  "key20": "2geV7Q5LiFGhKGG59husuu19gV4bjAnwzXf2wEya4sonbknYKFnBS2hfMytzS92kK8L8hNWfYdRzPL84vqpLrWoD",
  "key21": "2auPDf1W6uAEkasYZcAvHrgW3xj9fk794wjpJ5BhpZTcB5SfwNcVX8BJ3NXAuNrWtWcnXsdjC2akmDvWZmadPEuY",
  "key22": "e1GNGJPpFYm5mgLWFetkbG6Z2TgcasBcvUDzCXKTJ58opYQVvJCv3tMMjNNdy4NgtgCjJ88eV7K968bebFyczVR",
  "key23": "4yFWLS2rwVNUVPdiLBr1w927KEPLkzzhgBYFUnUHZYCvecVvDpF9nrvYwMff6z7rdfbkfz57ka2yoch9jAthHEVm",
  "key24": "3LqQdTTdqJxtTiB5KpEDVeZJwre1MfvaDPspM5ZzT2ncM943TGcSy8u8hmGPfSzsy4PQXUA67kGsFv77qq5zsJdZ",
  "key25": "4dXfHH2hBAcFsGbRwNPAymYuUW3Vn4PuFK3s4ULbcZQP9GVUBKQb9QvTH2WzbeFxMXrXdWNixfo297veWQ1h3f5S",
  "key26": "25aPoYpFQsEEiCLvyk2LWXKZiPW5Zgvcb6TfhieBUYEyVBja4tcwNdXPcoYBdRkS3WyZLG82ZYbhffTKaD939TSJ",
  "key27": "31GVXAnV1i6y3G8yD2ujZLAN7tkiEMx99jrnYjQzBzatRMacRmRscRoj2tunBG78eoF5BcA1aDA6Me4dLV18w2px",
  "key28": "4Xhu9aaAvUZw5QXKNvcbBduKJ3kfcTzW8qTzosZhJDAAtbNuaTHqAWYHXmGmdiHrMCx91wskwM9fPQe3FHiUtg6i",
  "key29": "5Z8qJHLnHFWEu3JUagsT1zCJnBkrdCLrZeqA4b7DoLk1pRoeXtVTzc7aA7QPFYyu4925xZZM2LjQkXLYo4Dd5QMK",
  "key30": "GRkB4hN1a6wzarVpwShqj8WTqpwP1QWmesY4Hqj6Nyx8CkzQFdGWbffHd5k93TX6JWZRULnGLm58LKEGCqgvf1y",
  "key31": "3j9SUCSKeLZoTDMErtpGPzuPdFqgTfn6LGCH6BSbnph1TJ9FjY45hE6qPnipLnx6KMJUVSCLzPZVc9bbXD5ARWv2",
  "key32": "4j89e5cs4dApJsKth6YSDkv6JbmkcUNX2aP7ya9g9qXNS2k3ak5FRYbN1F41hkd2Jd33ewLetCJBwz5HKZBaF1cx",
  "key33": "4unMpASJ36R9Moow3TECtYEDrUE31ByMqWnDg5kYPJQeudrKjj71zeNqCc8us9RF8xRVkhLFgU1KoURdghVfcCGi",
  "key34": "5QRsmgUEc6c5fXSCgeDGi1zKG6yP4jLHC95ZG4Hpc7HX52GWBYppNdhs9u3Bq664v3i8Bb2sSndmUx1U4sNpBnQU",
  "key35": "4LZ2LPgfPRxX2zjYdtTQeVz3Yihi8RfwtRJdjEZ7PTwVH93vcMvucdotdWZ3no5bEWWFb7CTsMHHqfZA2jwtFZ6v",
  "key36": "4qiWXu3cCxBRR3Zj9DaP1xk2rzm5SVo9nsVs6bybkLDiQWJbJdm8qDySrbHu8vEjb6bpnEZF3iTGLvKCbV2zjfJa",
  "key37": "3uLpTz9qmptqDi2ExafxmcxMvcD5xGqtfNSnZkGmvB3G2EfsTF4Mfe2aprRogbryfSqQw3mNdSad4zZMhEpNDcB4",
  "key38": "3T53z4dnhYGBLR5Qsu8Q4gpvuXssSmqPpx2ojGfy73NsMt23bUU7taPJGsGXz3hJUHjt8fThFbfnVT9CEEUi6T7v",
  "key39": "419E11hAcDDFe92mD7nbm1P88w7oXqD1K7huFsSXGEwawSMKhNmP79TsQUmC52bdcMubXFrUooxVa7KrzwDWd9ad"
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
