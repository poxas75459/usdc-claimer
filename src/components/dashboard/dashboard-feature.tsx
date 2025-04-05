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
    "4FbeSzkCowhSpc1rRpTCCDCvAX6rAVkAvgom36BrpE3K4UH9KVuNrm6npNzwb2mTioTFbhib1VxkLX3Rpukh6yEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KdcLcrdrPvJDgLLVwiiFEjdd63KdHY8Q9G5gSpSbJojubCnX7UXx34HrhKxSvFH95ykZ9qXESyz6KM1WchVtH4C",
  "key1": "x2PQZH4uKbvwPov6ZN9wwvYeW44T6BwXNbMiDMRQmchGgNzXAztRvE8Qieu9f6rrFJAAkVAvN83BuwnR1mBZNwN",
  "key2": "4K6C3LZqUsmNHAeL5hgcSRwsXsFRFUrwELiVf6ErZXTXWHR7iQkuMgqyGEsxJCh9cniFqEQeTUSCcrUA6BzDTopt",
  "key3": "rX63rCNDwm6ix5jrSh1GWTczNCiTRyFCv9Nog8Pafh5b44rG2gMkpy8MBHzw1afQw8rEAHCi9fAg5i2YwQTtZTU",
  "key4": "4LqxgSgcRszkQUBdTkwaSwyryMc98FXfNcJWWms1kVn7F36BRBmFarwPR2Qd7VuR4rcej6MLV7MqLSibGBYC5c4u",
  "key5": "3hUsaq1jjuMWPgQxBxhuUA96nrGwmHthPGj9GjSZugpCRsbGSUEbBA3x4XR3n6p2HfFAqNrUgK381Vkv8t5ABMYh",
  "key6": "2rGGnENT8f7CkqaQQ6KxDhDHZYfQ6f7ZtDibKzwg6JtQ9S1x4pegBKwByWJ7RcR9s7SWad7wXZtNjaD6kHH8x1W2",
  "key7": "25W9wgYTHo3B1z9cazQkchG4kdXuhEneT7mJJ7S8pRf2cLJgZ4yu9DYGFbUKY7qzah7nTcZMiyE5wPKGHTCMCfhg",
  "key8": "4sDwphDBVYn9bXkYt2hr5wSMD6t2uidhjMuUceKzrimbmfxuCToPfGsQEdj5fbfnEB3dZEmQvW64FSuf5JzJ7GmD",
  "key9": "2rK7LrJKXCVmcobuYfpJ8FuAR8yBkGfEnnrE5avwvMAc3S1qtZC7JwZEZGT8ey7cXuV4wfcxwW8KNr991uBzU7CH",
  "key10": "4RzzjwtJkRRNizjctT5nXSVvb2j7vnuthP4PjL1d58fUdQw6JSw2J9qHw4Aze8PbgAdgF743P7FrjGZp4xEhoNZk",
  "key11": "4R4N7VHMZnXe7By1mEtA3axpXu11Pmc2rfXJFpH39bwktyiKxQDf2WDGtGLJsBVyuqtgMmrpMDr6wthSqvks72qt",
  "key12": "Y7csdUYG4BKp3SuBE2jgnVJRJYL7aMnZkFEQMCYkqHUnb7josvMaaLv7s9mX6kxCwphWZFmHZ4X7c5hgdSg6dby",
  "key13": "4QWiHP5EPDVpYrGzZNZteoPaQRzoPeiKnkTi56seieD8qhYjZeN6g48SmMbz2p7CDr97gM7jzwfc5FGXJFG965Pn",
  "key14": "BQr1mET9MQxB5cWRoPCCjsb9LHKA5E7gbLK2PTPfanSppReGosVv9YrAy81s1LggzySbgpz4Ze6VUQxqynmXW9T",
  "key15": "56ucYsqsLugJBemVq9zipA2c4H2Wd2dGdw1ET7JNX8mp8nN1EESyMWgu4qqs1S5ZNRUZMMfje16Yu2wEFuzZTMT6",
  "key16": "Y7GWVBFMtaUoXpRgj3gwMBJxzghKV4o6N2RJxoGTegqizF8PabiQyXbfTbBNkgK7VeJFQXbCohUJgWvc7qJMHMt",
  "key17": "4xa4VxcVxaC4yomx4HVGEhstZKf4xPYbaQVoTorwDGevmyXeHfiwvQba2j2ECkrqRHGkbZzGa7gmL5gnj7BV4WxY",
  "key18": "5kUVfWYnZKrVm7SBrDk9eJTaLLYh2AzEbN8fTPqCzme3sWtrAjGcsoXDiLQgEoVfhxeqntFmoxLCYnaqfVL14van",
  "key19": "5botwtcjCcPDvxJ6BWRWznhUD1BA7hkrEnzBgfwnYv3zHra8vvZKKqTardUbAvXpEZTxFDgH23ZMKziLkfdR7LAC",
  "key20": "5DrU22LhLjz9Wm9QCatSdFSRg1e4UMpEKjacqvByM4QuY3M7qAphJwrp7tZoAewr5zhZpZwcgBGYfxxLdhnWvW9F",
  "key21": "2Aaf5E6gjGuCUTdb4VZR1pjD2MWiMhB5nom4T8KBKjfXnT945tV3TunYbCEbHTw7sGnmq5TaQRAdgmunMTuuTkYS",
  "key22": "2oxWQdPoRBM7wPuPLAzWSLk76SavbcRsTW9X1eqc1FTJEcF5zCcnCkjMPZQBDZW2DJhirPujc3JtutBg9CU64vWw",
  "key23": "4FTKup4EvuhymaXnowYZH3Hnv8RRKyMetD7Dos4cVHQABXny1bKmg51WkXrKHzRe8tG19Hq1trjAw1Ts3x3xiMV4",
  "key24": "5oWJSRVqiGrDB9y41RRc5FTq3mUHhKgrvgMfqgNUSfqM2nPn6NHbpKQxHxnx4wXGtDhsFuVmLZaJimWnk33pBmxC",
  "key25": "cNj1jCYRVNJrWw5jjQ3Fo6yTb7vPX9LUVoqXXeHKBhMyGLCBqctNGXaumfAr5jVSV6zBVU8duELmJU7NinSFbfB",
  "key26": "4ZXPsV6NLpzgGRaAWw8ZgRnie85teAoKugKMpKYJ3YwdDZE4tcmerY7RWJfoL4kULC6rkyshg8wZmRnq4xyYNRq9",
  "key27": "5xubSXiWZGTC9nzv5CnCoMquevYuCQG9ZSyPGhGPaDmFmmB3TAXNk7U5ZMax7QtKx1fNkncYwhTyzCPsSHibXLuB",
  "key28": "3bt6yXZwbuziFZVdsS3YHi5hAEKNRuGPAQd7UU1qAjYucNDB2wk7v8eM1U54kz4qgM2TUZzQpnHfsJpXLxHz2RVv",
  "key29": "NyaWivSM728m4ZHp8hH7cZwPK1RZdFdnhtVbNx8DfivNuRz2jzWiirzYPGktGpMRR8udQ8TgmJxzfttxSqttfpE",
  "key30": "442NN7MRCbdY2hCgDozsPVrS4RX9exVbGUt4Jy4u5NfV6KePqFBt9rMBGF6pLYaX4qryRMd1jQsrjHk1iVsWpEEi",
  "key31": "7Y35i52hTsT67ZTHqSKcrgNHsusDndLivGU8Ff5ztjpWR5f7f9HURgRqVFUbVzikwQQBPxW4iANNPe7zFprpaNT",
  "key32": "2yMHrhG7jqqvkrumx1KYuCnckeh4Lk4S3saez6Rz6n9LdUy11A2oDEYCLKSqN9BkpARENN6WL1F1pK5bRYUsntty",
  "key33": "5ouoxrBscJd3aewAQfcKa87ooYW3PTC3XHxiDTtj9xaG1juHmnZitwu5pwh6SEn6sX3zdqmpnAdiwuovj3uNdFui",
  "key34": "4RzzxkRZT6m682bA7yEfQ5oxsVMN84zAbAMtJMLXuo3EFkPxEdDsRkNxwMPVAXraY7MceGMv5JevGYgGxgGcnEP7",
  "key35": "dQqztG6M5q6DtpDsUx9jU5K4jo7CNbD4feqEZTH57FgV7RtxKrgK5RXyJQaTcz8BwMhVhS2ZDfRyTCJh4cmibQT",
  "key36": "589ZrYwFBdtAjeqrGDJF6XfTpD36cCjFbRBk7X6pguYHAuj6LhEgG37U66FzKJtV7kmfkrsDemRr4XGA13evcrPb",
  "key37": "5jEkDaZe7rFZy3kAyZ5TaCpvXcFPsibmX91Gmr7JpYRWH8g2PW1iYewYbyooY1QHzkeGxJ6V4M2Bix3wYFAFCWJP",
  "key38": "5Bap369dJ7oT4AXwTmcZAg8tuwcvXN5kRbKUjcH7rYokhtmJxq1NqWh1qQKHoZrMnm4HURB45F1Lpbw456UgtbAK",
  "key39": "ghQKiSgau8oHTc7xNDSQpAuKeVSEP43ri2gun4SjykumHT8zMhkbvbx3mLSkVMyQ1ESPc5LCMPucsqXYmBeK6mG",
  "key40": "2Z8Gv1ray53qQEtJdfAbymAKNneTiN9V97MZ5kYzZkP1YC42jeXUfrzdEQaSgMCTnN6m2bei9GHLHSysu4cAXTzN",
  "key41": "3wKYi1xfh6LJp6SMrFsjvi4UoVXak2Vj2fQczJ1VdCWv5N4FrhH9dg5VR2kB2rQdRfdSwSE6wmf9aDKsBLRajkea",
  "key42": "5Nbp6sn45qLfgS1GtTVt3u4xCWRuyK7w53hXDQowyum1GdmNJHS4bRxHcY9WAkczupvvAdrDcs6GPM1CRsLdbbpk",
  "key43": "21Rsa6Qt3UxtfS4tkGv9EUoLecRUCSw38mbiHB5YFaSBMaGYZkZvur4MXDbEeCHtPV4X6VYuCDrAJvESNyDuMBv3",
  "key44": "5r1JUDvMF4fPC9a5L5tZxTCa42jp9tr8mjQeihJQVtAchCJEXtPCBfn6YJDABvuR8uX2j3PBq82Ez6bJtSaMJdgF",
  "key45": "64JER3wQ4bxZtt1Yjt5fQ5XAQ34s8s7tPegcU8nLAEdUHNuYasr9WPGiwBXBMvcSVnxzrdXNngaGu67auWQrXg4U",
  "key46": "59jizKEcTdYF8RwxnZGZrEJykbA2FWzJamHUvxeNo8x5ckiLKNVf2CVTndp8J7zevwWG9Tm6CR3ixisEhRV24wCa",
  "key47": "63PS3b6cxZnZDRCyHDomihbsqsafBSFmtTVqMxErgTctyZ5Fe1LHCKH9McsJSJdjNV7oTjUPhkHg9ZXtv8fCQioA",
  "key48": "4kqcL4tCPhp3hZcXM21VypgNAGnZ9jWstDGaR4KuZqi46pJaVKcDdtURKdfiLzV8SyqNjPdQUd8aWtgfyAsyCQXf",
  "key49": "5pTs7S4cb6vHEaz1RAjcyXFBQwtm7MRVykxSpZ55H5McPd6Lcmgu4WGpSX782Xv2kw4HhQa9uMca29VJLLk7DqNJ"
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
