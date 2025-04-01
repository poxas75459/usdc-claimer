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
    "64wBtEu8t7ZTkXAr8PWhHX3KtuVDKHPBzsUpAHCE1BHjAptVwfm817wa4o4mLqbAy1KfiJoFxcVJ1uHJaZK6fCFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPxJiqYHkrQUPHjR1z17u3sf4fdCRjytUcLrVBpp2mh5Sz9Ue4XLjxpzff3KSd9bmTCqGJKfWhyBb7uFHZ6amVW",
  "key1": "B7xo4XLg7pqnH77Mx3hfF1X2PSg99Dz9uRptJrvT5FHSpAcESdzCLtLVW6ohkHmMwhWNAZGQdc2BaAqppop2tCA",
  "key2": "4ASaZkMTdRp5SHxGSsCuXnXwFGviwUJ4sND11NUJYJDwVc3h5wNntbbAJDcpC7vh6pLukzBwavkNSAD4qCBeoG8f",
  "key3": "5vBi73sEyNDXD55SHRvX7zELfPbaeHj6fUPn6fDcNyai89htD4A1kXjnfRtSPvm5X2QcheyapFN4PTHUmqr3hqMc",
  "key4": "xhouMD8UB3twkTwnCSaSGxjzWxziFDGmths9cUNC8zYaXW6SVuDprbwA7o9M7S1g5rNT1qBcceJGK8wzYhtZ5qB",
  "key5": "4wtzQ7GsT5JbSpJKU9hbVWKsGDWWCCYfK14AXMxZemvKiZ31WrmmRQ4UWw6NGAdxGkpCRMktACmmnMeZqJFZ15hr",
  "key6": "5Rhh2vnSPkVMLhxxjuzqzPyXg6uySDnGKGftxkXWpZGWA1MdY5xL59dkrYqPVnTWgq3u9vPY33611j7GBbmjmHG3",
  "key7": "4p8poLkJa8S5hkL1XhN6FcKDnZHvABKjKaZiSjAkNrRipjJqA16jz2HQKBFqKYQnHoUJSDJ2sM9D6k5DVLmToyBL",
  "key8": "rvTzobyfiN3s3ZuauQcfoiaYebJVREuTH8gVMKmW4rx4rsVBKvL9RTUU7jxmJZSeLFhjG4M4h4Zyaes6dkXc8DU",
  "key9": "2mj3qg1tNStkCYTzRxvgGCWSyHFE5dQjYkMiQxvjZLZ2egb3bmidL4Cb9u7fUwoZUm3bDoYQeJLpuyaNLejFDvh3",
  "key10": "5SQ1ioCXBMyterAQeU4uA1TjEPPgbJJpcRJxFfamwSbgEVvQbs9G2hpCq5qQAK9FNRggPuEYNDVQFcGczVfCfboN",
  "key11": "QJbJdUD4rAmNcMPjWyUc9u6e4U963WvQ3XU9B9ErPNdJmdDXbBMkmkGBmmAJ6FjBa3UBcxhGEbmd1ntctEjjSgA",
  "key12": "4C1YF8TC5PoZK6MwMrPzuhF7veMQ1QjMp2oB3je84E8ppJiN5ehZ1tiNgeJmsiofcHxjsWjEPyq4hTjyW5Ts2ZGn",
  "key13": "3V9axZ86cRNptzTbCitZqUciaGCaaAGcqH4spZPcPaBPfkqftJYeLvYrKcJFnmn4xFwntM6bZy1fJ3iLPPez93fA",
  "key14": "3fyyAcJRPtbjGyuRCPu9JguD2RESYxmar48zWGZ4KsEGJKbzaoK1qp3gzBBqcGnCFbVazAbzZwjuXjip9su2EHWt",
  "key15": "5FmUKmuCq5MxQkCBn6iCn3JCzSk6ZXjPFcnDuZGggMZSJmDmRZ28aNLLq7ZCzkPD62ZE4zqdcqwgdiKTnwTbn63J",
  "key16": "5o9y82KDx9dgyLmxSun67MhXExYNyWf31MmZNkSEwnaCgqN3DaewweJJrMM1RkYkEAifz1ChnVM3rwbEibVEZgWt",
  "key17": "5Uy3kpnLbfD2t3ToqBNeKbvkHXaioeQyve9ZeXzbxghRzyFVAGhaYaMUtLZHqboNcPsFZyREAb7CQThUMjWVPsGN",
  "key18": "28gsAbQGnY15bXRkmbNmHd2khsBD9e3nWjUJ96NwdZTGk6vF3kJkouoTjtmhwxnJTcgjrTfV1dqEPr1S1S4fEmh9",
  "key19": "2gnAhKm8tyLhphcVqsnnQDxxHh4q5QDAbqhGDo964XeZj2QMvKrHd9BDgrLAU7BRBRsw2dJuFMbteNCs6XXwmUNV",
  "key20": "5ggRghnWJTmg4yGdG8oTU2s1nFDTCDmWbCyG915Pxxv5RtFsf1WbLr5VGc1EtD4zwaqrmcappKoj7M6dPe1DEwWQ",
  "key21": "xeoB1KJsBpy6AxyqmkfB9EcAzVBpxLmDnAS1Bm3n7Z1hDcqwxE8WstAXwTBEisNMsFRGHbytLq8FwLe5ahByxxx",
  "key22": "5dRrSAFHfyGxgGzJVKmuzDsrQhXQHx8PBui728gyeRKjhv1sEwESRrT4jppRSvNt3FpRfd3Bu6DyzfGx4spMWEe8",
  "key23": "21iBDTZakGYBGsKwFhttFkpnja9BBeYpoAWb7muKaHZUoeGc6pqTDXAtS6L9Ldu2yEH9B1VmUWJ76tKh8QhErcPD",
  "key24": "4jhCVf59hqvN3KQhxnX4rCdCUh8nBWQjDeXNbQTzdARQn3o1Pyc1Pi1YEuTxgZzLASG2dhdWn7d8bSgTKKV123Cq",
  "key25": "4ZAXxXs3HFqqjW8QmRJW2mhxpt2nGHJfZ534YiqbUUeqn12az4D9fYrSBHeLBV5oAqZPrsrYqk8s8Hs7vmXMX2Xu",
  "key26": "7hwdBcSmq3KjW2H4QAsVg3aASMs3H939YJwJrQcggJfNg1SujHFg7ijMJQorE2Dyk87dkZVTEuQ7cwXdcv2NPwu",
  "key27": "3AGt63p7Pdb3BudtUce2n8ryxGj4DJekd2Q4rGiA7qpEXb1TSp7UYobv1AgkJBwaUmiomtBMsYuYCWejwTobGEmg",
  "key28": "mGXHA28z3Etw5RLUYivsNX74fVRYeCVmrZmVeQs3LtSVV6WJtDMf6gxQJhmiqyrmBz86cuPb7SycEnrFfmUdAx9",
  "key29": "4pzoPH2ceYXMaGWS8Dtaaxi35knT43ceJjc3ydPdpgZyyZGQiK46NVEUWBTzd5F2FofSF5uAwBnxdKmNdicKayg4",
  "key30": "5E2a35fLL2AvY1ZmfLNsV1gaQWudDAzcHwyKj2ro8Q9hKzKgcAq1qP5eBkRYr8Yz18KqyziAgShdeJZx5NBSFqX8",
  "key31": "2tYDnMp4Fw2Jvdbkd8ntaRRZvehTXyYAuCHWdquXtAEb8YaxKFKxpkPRK9hFkqYA1fqKZXiDv3FZJbZaGJkCbeJe",
  "key32": "25Qw1ZCErFAiqpbwiQtxMoKAczPHGQMDR4KTPE6mF3v5kpqHYTGSJgaPiBM58EnR16xkeaVxctQi5gucJNer8grD",
  "key33": "W58ie7JkbVbz7VN5HMshwoQTjdwMSQDb9jk1LgWwfArZqTmjMRVAnUv5hJ2Jv32JFzFMugAdECgTLuZfcQibrPS",
  "key34": "38QtVrU3gUpz1xKgg7HrqooboJYAkJxCUfcSinh7cdJCNvhtQwxdHY1KeGezyC9WymmGDPquc2RwQ6m9h1obtU2r",
  "key35": "4fJG7dQBC4pZhbmMH9Gb76RJhVBy8J5gZwC9dvskE82U68ZRFiYGsBYX5htmoiNQwUTLcRkssZ5MUtCyjfCcPd8B",
  "key36": "QMpCdT5g5qy8Rt2oiHqkbTvha5yuafTk6AUxm71fqpkYqd1CbZgjzHSo5TpRMLviDAEg6xjexWeGvheCFkC2eYo",
  "key37": "H2zkhzAKbzcUEw1n4deqwnDS7DTgN4Wz3ppT3Zwd56yE9Ri2bHr1vNYuRUNDhAeRUpeFBgabm9Y7nJwDsx7y6QB",
  "key38": "2TQkpzsTRJUfY4RfmoJaQP6uxsu4D7wNAC8t5tRER6Qt84o629qt4EseGrb1ZxzjqMBHQGn6RmGuJSy8JpttNonM"
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
