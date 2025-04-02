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
    "5bAeLhmJBd6sYbnPXonjjoFpXsNsz8Dy1raY5UDUC3yU62NHsq8xwVgCzss8kFK9CCdVRpTY1BbMSsEy1iBnXE1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25BTupFhQCUktxTrckfyR6fncmw8RQBjHd4MMff1Kke26kW7B7HQgZRY4dsqWLAdSCYZ7J4TGL1k5s2aVnh8xgWe",
  "key1": "3WNRXZqsEiKrzZWuTiocGhfiPZ2QNkxTCNM6QoYvvLVEaU45ubGM5XzQ4TyQ9YW13f2ypH3zfsMn8FSpuFfTb8sN",
  "key2": "2Rtowcjaa3z9DA5X4vVqWRBRKAcXfdcfnwT3TAnuyxXiw3wv5rtsM2e7zakepBGksHp3H677kpgisWUSbw9ETdTS",
  "key3": "xa9zBFGiFtRyvXJCjtc6TKa8uvZn3mMrhFfJ9e97Zd6uCqYJXUYbXowMYnWwpAuGziwzA1oLXhctA7WdcjEcGim",
  "key4": "4tgcUUW1MCrrWAyfdPKR9fpZJv2H2g79u1GQaGHPTromS7mEVFLKrzLXoGwLzfbFudxkECUoAZuiueFkBWGFQsvL",
  "key5": "47uuuQcrD8eyfuu7hrtrRimr7BTFFJY9E3mnbagubNGxKjBMeC3qpYLNCTbAV7tpxjjziGaZogarFmHGvhtzNd2F",
  "key6": "5CFWgKNPBG5YTMqALLoeJGjnQCHzjAjevHEBzhA4Ka2TykLBRGzuFmtj5TA927FzD4Pp5x2NGcgZ8bFi5bJN6fLd",
  "key7": "8qsCrdPPurGaLFsYHYp9EURmx8nimEN22FqMK533R1cAvNZpc9BeaC58ryNwnbddPbEqsWbw517eVbjC3dzK31t",
  "key8": "2zve3iDaNat6quGi1HKMDBjbwVrq5ixjNmuQswxSQ7d2sA7EpHifmtb8RFZZYu9fXr6qefyQTQ5aSQqGfR6cE2w2",
  "key9": "5oGDfTXaJi64nWfzMok83rVey1B3jfNAw3yrru6zYc2RodQHgrcup22EwccZiJVVQkHbGJaW2kMjXTkfQTkcwmTh",
  "key10": "3RA9aAVbowYFwrGGGDUtKkaQVA75b8pEXqLqpjXDXyPQofbHQ4Kmjex4QdGDGJ4v4MdJWiff9T6YBF5ibkY3PBQ9",
  "key11": "2aqJZTgzXt6dtFSvZ9AE2tfnsuBoPmQvsyEXiSvB13hcPC7QbEcUUUeRXYFnG1NEpggcGLB4YiGJyQ3sgQeoegQX",
  "key12": "4FHXGWikhhNLt2hsByP8FRxWZZMQ97BwxvGFN21UYoAF2gjBmraxAjMW4EuozttkWsdZxxmLaJzLqLwA3484p2Ap",
  "key13": "5rnSXAuUEbRWnbmpp7GrSU7WPKfAWNo9wYw4vhtGXCdkKooVZPb31syXq2LPX1rVvAbaQJS6aHx1MqhbTyUaVcQE",
  "key14": "5okLAcxAkAq3bdqwVKY4JQvy4yQqam6R1EHUuT9eeEAsYu8E3WXsf3mBZGdCHHfi9nYuTBiJKrYQB2HMF7iNQcMX",
  "key15": "qXEazpZFdZx87jJhk2gr8ukHN6xVDLnHrjjKo9TgsTpbEndV53aBsHQN25w2Pdd4FNud2w4KF3r8Q4MxEDVwRMc",
  "key16": "2N8tCnJYhzhWAmgaMZVnGNihqcjcbteripaJLbpRL9sV53djY9pZGWCN2XccKBahbY1EKx9F8EnJFMyJXxB7CBvR",
  "key17": "4soKPGuiwTcJge7CFWZGUNeq73FhMmaw5DzTNmiC7Ldr8C1UuAkayvpjA9u69bsJYmd4NM3gwPiLThjp9pfVKJkX",
  "key18": "63s2pVSvtYG75q7RgsjCpG1ztJhg1BuHruexLbnY3wDBRrt4s1pyxi3xqHZtfS8zkiqf5stceucXaYCaVQYMTp5u",
  "key19": "5HkyRoURBtSn1XoWzj7WERcEHpmFcUzobv9BbHN98TttHTdEoXewsiFyKQMsYywvbgF7ECKCYUSS3aCyqdR7PSXw",
  "key20": "4TmqWiwMGANxqYyoxXiwLdnYJR89Y6x2Dfhj2rr5pbA6Hj7eNUWs3XTTv524FnY7XNKd7ftiZoB9cNWA7HeKWqyu",
  "key21": "2ifbvXWntEAGZNHY78kWhBNCBRMkJixZUoirQBn5yEWhmVCKs2WNFdJ3rr47BxPAKFgK3ZHQSzX62m35UvNPzRPb",
  "key22": "5GAzUKVL1M7Qx8otjkYMiBkHthG5X827SMsDmnJt8rociFMZWDynEpddgbmRYKT1TGRakxVHfcg8a1L4oVAnkDZp",
  "key23": "38fnJNuN8HFtrHZxM1ASwG2m229F3WC42Dutz9YHWDgcTdedzdz7rsgaQVWTyRqbDZ3WZ2rn1uYWxhChmFZVVHb8",
  "key24": "5hDEwzsVVmAduQPzEoMc7F2avkUMocUcEcjYQjnokZdqS4snqoKvWSUJ9BSwkCcqhyYqjsyqmE1qa8vpycG4xrxG",
  "key25": "2G7tZ5Uz9SVBHiLAoLujYvP7sQc73rFDoVfk6Kp5qMSj8CiFfipeiBwDH8FpewrDMRgfVXHFHZmYpumomvnQA3Uu",
  "key26": "4aUMSUfaYpameZgxfUKqD9ftchvrrqxMGDp2b4onWB3dnE5FsKecGTDSGQGgcf3Wj2QvRGEgPJcFZFwXhmQZmG7p",
  "key27": "2ArNKfFpwyi4wgPiaafrCto9bSrbmgvWvH4KXXNSJxRDa1gdrq8r86HW1fcBqneFrKoTP8BB5KG5Z2iJe5bhMRkd",
  "key28": "4dxzRW1SxdsRthrRKJG1pxJXF75NDJVvFKGW4Rkcv7nYozW3rMh5t73zZ3r93SFrs6PmbAXaHJxzFVqbfwQdvyWK",
  "key29": "UdwkheA2yx8c1aEMwTYuabM2HPZeHh5DsfTMn9RxYu2CbWiUmBctznfRGLR2W8wugtdB6Z8NhaYMhPtNS7wGPPc",
  "key30": "5V1SaB6PnnQeyDUACj9HwDKY1qEHxNf3zdmMeTCryEYYCW9aQxC7CPPREaErhUB3sHFYXEYaXupd4Deib4u4huaK",
  "key31": "5iHR6u3YuGB8DbGUmJJVm6LNdnvzZx4BigQtuRFFy42BQFjdodta4YR9sgKNDNk3iH9n5TGR3TxGX3LHWuHz4ghz",
  "key32": "4FFNfKPFNo2GG2M9bxG5UrhSiUr73iBupjb4F8vRhfXUD8NWySVA2U6yNMNbVeMnCyZ1rGdSvQhenpmftTmmyR55",
  "key33": "3WQxSvrPgrJxVkia5r8q75MUFuVJxkG48r29mFYyatWdQSbQEZpXe45jANq2YCYm1MXuAB6JkP1LpHCKEwUZu2jv",
  "key34": "3Q9B8tVAvGutyEgbisRKqcBsmWtYH4X3k66W7ZXFvYcEgCMeMB3SzcW8Dw9ZAJpRwSpkJjLwjyGENGC6p9z8cM2R",
  "key35": "4CLNg7m5p5pkfheTLytDMV46wN3RBRmYRscBgxB8NwFWZw36aNJjPgJaQyQgXWSv6VsPwowgcuBxPHQ26j5C36pr",
  "key36": "5gu3GpXtSuRaaxkuH9rC3hvPx1SN7s9yunCesEP2D7pP8MPDo9ZUdSAAkTSLp7s2662hL8DCitYkdjYaXjXv3Gti",
  "key37": "1iV8uKp7mKVy2AZBSwnCfseZMxgMgkotrfisdatesinh1gSvVisvgd2bYVdnaTCLNMcCNioobLMZr2XxscDbuzW",
  "key38": "3pCa5vVRSF9iXmDByFsanhhrhnLQ8HRQCbWjDqbHSCZLD9gyh6sBSsxjjMn8AA7kFJ7B5RLmfMDK6RzrrqBkvyaV",
  "key39": "5af33v65K4nY4h1V1PnMwvVmRDmmK91XLKXzVF9jNhg5zAtRfbNzfPEhKj8FEuZScm81GfLTarRdZNuidjTq4Fhu",
  "key40": "5UeY7iEBRZpdwUdgmeDK6LXSspHfFUr24cNDoWUiM71ZxzuPitH3cVKbQdgMvJ6k7oxyspkE8b6fcEB5mrdiSrgw",
  "key41": "2VrQ9EnwAoNgYJzrrG7x8kX5gW4C55gP6ThGkW8pyVXFbM9rSh12bwC9ujPpwbpohUnAwav9La7kZ5P4pG9FhGxp",
  "key42": "3iGsY1jpMMxJCncssK6aoHHWg7aZeavvphScEr7J9PECX7P3BycYwBeC8SWMoSNUwiqf8iec1MPsbVwvmNPrJBUV",
  "key43": "3YZtPkbtw5ngbXSLDDp97inso5tuceCK1uYfaYXxStZK4U6NiBzDikKx8mhqubDB2M29Y3o656trT7RtByM1XtRJ",
  "key44": "3W4n9EjtYCVXcf6dszafohxga8eBiFwnWc9BuHF74kzxQ8uowPu7fmedYikFWTjmoFap9L9Fv82MyBstRZvgQX4k",
  "key45": "xUjBSrMEWcvw4XtZMJ3xYqk6jE4oNmZsLrC15m4sE6hdaP2ZRc4WfaXbW5C8TJam4Evuqaa4fNi6YUY3JkM2qva",
  "key46": "3bRXrhsF5FUF4d74UzYDJZ8CPgVj6TT8s4hRdU5Ba4YtAtv8VbBu3Ty6TTDjUxw6JcN9HLEL6gDUbXxEMobXTc6t",
  "key47": "2A32eLfTHnfEUYHCovMa1tTgCredLEJjikDysdn5PQ3iuyEXqwpRrU3X3Vw6HpiwcaenKRF38pXLCyM4KWZrkowQ"
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
