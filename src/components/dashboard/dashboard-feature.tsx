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
    "4Zw1PHLQvABr8GNNrZc1fE4arGSWJtTqNtGoZRfTvGqWVXH4qz66eE9cBmT3SbX65o7AdhE8kVxD9q14XoLrW3Xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wweXd3R7zhbfV5xAUwRSQRnyjrgJGTJxUycc13f9QToZMpobzngxG2Lkpu3CiFwavXhHWPP4oN6JenXFBkkroBV",
  "key1": "2cywEhsJRq1qZSeV5ZVvWJS7kEYnCMpupiYgLF3WrrTDRSdYYwrFHbpF8iXxGr9sjHdSLjuhpH1b17SPGh6RRwe4",
  "key2": "4VofcR64EaoNCfCJW9jwY6yrUc6s8dLwvStveHHsjfUSwtSKRLCTrVwSnU2kMQDSuST4d8Ga73Ge2ha3bBFuN8j5",
  "key3": "2QMr7TNSy8zXrgzdjHHK9aTe45eJ4YrU9crLLzkq6A7daYFHLeFGYDw7uRJvhAKHYTFkmxrcBYWxpsBoAvirSL2k",
  "key4": "4L9gH45iNCfyenSqWhoXu9D3dhF7japDmgqbxqZsoSpXkvoQ1Hqyn39bqhLc9MwdmPoaiNt3VpcozBNqtZC7duEe",
  "key5": "5qe4Hsfvnvb3XdkXS3cCxuk9QWbdxCr9Z3CiGXhD9Tg7JBuke1HX419VwFdkf1Xr7VG3C7KncocF4dkMNSNcfQtf",
  "key6": "noRPj8ETDqG2CXyj4dFyXMK6YPvNfbMRnfSZYWWPMuVTw2kZzhBjm4nwdSwigVXBcqcPfSedhj2LCRTL3SCsxxM",
  "key7": "4oJhR4k4ar8RJL2LMBax1hGbTkhnzkPS65puxf3U8bfLNitLGvwDSrjutzgeyYZ8sZr4qS2Y7RmysWcitEZkFCPr",
  "key8": "4Yx4FKawQXkR1BiyCeQE3ho2G4wUBHhv8AzYLqUhvjemVtsXVY1yvX192mRcKcXSK1GCHg6cbmqZfRzZdsZhx5rA",
  "key9": "5LsBKkv34BkCTW4uZd9MSnEC1XN6yffCgwMgcJJfiKH4auAN5rzonQMDYygY7sPbuKVLeoM2B18mGx3ntZjJAH3G",
  "key10": "27MDxUKXJo2QWCNs12MW4yDi9NmYWBxpvVGPNtRN2BNtJtW18Rn1GQEKCzibEhcE2GTiFqrTWKk16HbRmqRnP4BV",
  "key11": "3wSSsNMqU9zjxQbR3XxFSr8TN5AziQ8RP3PENTijhED6D5V4MFSqbvW8WGyhdGzxwyWYcA49A9yorDFBuEN2Cw4J",
  "key12": "3Fu9u2fg41Q1vPhqM2p7BSRMX3ZYpFd4qT3jy7VymaYVxG3oCGE5i7vaGPWyAhoi1sYLohywMBStYE9tz763cnbW",
  "key13": "5RKiwpCT5sbVHmWC9rMNqeFMbjMtPDtQgpRbZ62REad6s9Lp2NwF7iFgbqLVMEPivW2kJbNevE8jMk57BRHrHY4e",
  "key14": "5ANKj17XdeMZmyeesfLPWTAn3DFaUMbhQqvfLdVPvTQyP2zMUbwCiELv7fJrGndcwzycpG14yf7m4therQ2MSvcZ",
  "key15": "3n7ytdtfmKhsSD25fKHK15S1oLpWtZMy8FUtxrZBd8Vn8bZJT6RB7TASQYzCJZ8LCRo7mjm7EmTL1jPezZoufoCA",
  "key16": "CV7B24S8x94o8cEZ2v7wPUnQ5k8ZCtN8G9a9mJvTBRcEy4ALwmqGY7qEvHbZKTmgu84hkMay4DceBf1wqFNsyvV",
  "key17": "2zE92kNqbT83eoW9cu6zcKw2bR63ShHTquJ4hqgB7HvRWNvGVSj2XRE664eQNJ5iFeXFLBUKZkYXRjZnXQsBAAgz",
  "key18": "5cXm8eq75yHaycxvifYY6yLnQNPk6REMDMe9qaVtTSxbVxBUf7gtYUqdwaepxPn9m463LxMJsKDSAKTdQhSeGRTf",
  "key19": "5qjop4LiuxwMGkKJBPcH3ebGch5dVbsGkzpSd52AHFb7TzUN9BfrDpBozY47JUyYRyuVmahPURmDUMCfqQfMxf6D",
  "key20": "5VyQ6F19EtrerZHg8bZxXLS2FpCS7HEkauokQgf5ipK956q1Ey5d2ZmssN4uhZXwd4i7dZ97kW895NAQ9E2xCHSm",
  "key21": "2U2pkJ9agbbBfdGSGW1Aer5crxe9C1FdQTmGvDxQpEUSry28s7Sx6eCpbYGBvev9GL8wZ4SqAE7XCKxRj6QzovZS",
  "key22": "FLXWFM6JqsQTX8EyM8xH2xeBAADpqeSqXGJm3f6HZoWimc2uozP8DFj5C4gur4sCJqckWy43epe3d38GTqtj5Vd",
  "key23": "LxPfxTHnwav2AhpnJMbPBmUXsncu6SJX874aCybaMouJJCftad7yvgN1msNaznwDx3hnoPsVJqkQ8fmGMhpkxCu",
  "key24": "2v6FcPa4LJoPAs55BCKQWV71emacWsT5Z4xGxD38wFhjQDaVdd1pRU8v1pscEcZrT7Mm3DCJbHQ71vkQNwRC6Fza",
  "key25": "3Q71FFdebvCoRRUH76vTGMmnPJrD88dF8i54R5k1p1MKbc1LjY6USv6zbJPuMJqTAaLpSwebLtd482Uw6nN3GsGy",
  "key26": "2bGDHzWiaKiaeB2SuXCRJZxPz9nWpg6USB6VdetukBT44r6VdqyMdwjLRNX3eqXMpVmD3jQUsusucY1K15s8t1qF",
  "key27": "3a6rvLbi6SF5RT3Riu6wcoCGt5c29PVLSEe89E2h2VMSrUeq3gJXUouNbFfGTJYZaZj4xZM4KSdtRQK69fW4B4CU",
  "key28": "4LEzC1P6DDtNMsh4PuGrZafM36azWtTNZcrUPR9fL9XHsp9BzSEjr2QwuywZHdVKx8HtUx1dVhP8qmANHZzHXsbD",
  "key29": "4wveT2YBQyucTiaAh3EiQYf3dYZut6Mq3r8h71NAmpME2VhNXSdL19oWKJfJuhzy2zgWKqzYbZzDjrU1G9VH7MTB",
  "key30": "4e7hNAuFhrwGLJ8uWwbkW4uKrqGqjbACEFVPGvdyaG3CCioCqaGTwdYs7uTi9tpzvFpMnaCueUoav9N3tToRhYPQ",
  "key31": "2hcZ2z3vyZb51JM3VcXbHdEf1fL5XucJMAAMpKaHNSsRhkYW3crEjDdhC3wjfoaXFPM8JwjriDbzB1o8KJBQD5B8",
  "key32": "4MkvJWGSPpXLCLZtBvVqxrc21GHKjG3qt1x9Lq9tHFAL1YbbLFSgHD6wkka68ZhaF5UBcCe29mD1XRPX769LkeW2",
  "key33": "2ViiBPLAXjkeTjrzzWCsLFXgzeL9s6cukASQpnuuneWmyMZcMS2Fb3BYxW7CdMPj9fEFZUMgQTFaGZiML7eiahZv",
  "key34": "4LKUPMkCE7EiHDk5JMtWTndeJbJKwopCxaXwRKe7SEJBnk7zZvpYWAVqsbrAcvLX4kFGCq5QZDYrGYXfDhuoDGeN"
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
