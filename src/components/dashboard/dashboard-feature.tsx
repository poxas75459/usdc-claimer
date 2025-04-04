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
    "3KBpj79qPMuEh7Ao2XkSqai9r12iL1RDQVeYenEHcC7ua6o5WEg6TN4qR9bXdks5KjmJ49txA66JWjDGoZYU7BJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eTW4QzzYEHwQYiw4hTyiMr2eBmkv8KYuYSk1EG2qSFQ3s6DrMuKogqsBxD8dKbNWEEDfsiWyZHDHio7HRiSrHdi",
  "key1": "cKxkns9KRNc5CEdyCdRjsi7FiUttkYxsniz1DWJwk9kunqvSHUZodsKW4N65GbAL8B4MbF3Lnchsse8JWrXoNDR",
  "key2": "44FN8NRSBYyLpFHT3djgLWELBgXwwtYvBH3mrH4ecDinNAciczPTnCTKTcUB71sJALGrKhvrc9SMQhfbgtPZRk83",
  "key3": "3kTKsxCvQSWhA7SPLKne8CVZv7dmxKodF3HLmZfve9mZdUb147LVv96ZWgBnY46gnLnAFEgN29LZETNamoL7b39x",
  "key4": "3W8GBLDuZKHmBNHWTS83n4r3JTW3R5wLg4LfCnzvzY41oS3yL7GxALnYxqYQGCEEheNorh8ZzosFzF2vWqy1GMcV",
  "key5": "5ky9JovwJNpH9Z1peVb6Evg12o5BmPP3NkfruNAf5ar6qPdqyZBh9ywLc7HGvGMZoRrKgQwEkrex6Hz7L7jYGXZh",
  "key6": "2Vm6DvrtXkbjJCQiexSAqrjNrkphX5kSuweZPvrU1NvRBa9kTzyfnbaPn1SmUHR9WSSiDwxE2iVHHvS4k2xRx2iv",
  "key7": "2XMG8EBEW3wJ3g2MbrYCYqfMd177tG7yMLLVcmefjeqkQMURsdAuFex49eZn4rXYrUhDt5wRQECHTprqyqxPLqhE",
  "key8": "3dcFv6cDFFZ3wj7XeuX4iAHg4Wvetr9vVjdcJcK7de7uLfbpZeZ6rUmfTHafGyxhY4pV6rxpedCkLPKDmiQXzm7G",
  "key9": "26GoDg5ponEjJgtLRPGiyDiaZaw7SBi9fGKhXQTr6fiyaWqrQgPmqhiPjPg2W5bUYaM6bNcBk2cLJXqVcTXoqReD",
  "key10": "3UVFq7XiErPwD7HMDXpMtiW8Vrq9mbYGcmS1cYkGGQYw8urFjXjZqBSt6xJ6ZbdEuvoeni8cfJJSgfDBg6Dx3ZMZ",
  "key11": "5vK1uSLHXEJD3GJPJPZBnDC4J3VoN5i8R8gGs1Mzuf3F4Jn6BkCoVFHCRXoj4ixX8pFq1MDSXuE3WFwrDsrZDPYU",
  "key12": "3Eujtt8VKr8oTZJZALxAGE9E5oA28NwfCETGEn3WWTVRgaYNhYBtXF5wMFPXkT2bZvAfVLeRf6eL2dk2wAjkSx8u",
  "key13": "2G9DdpTYcNbYN4oUpnWRD3HQvc7xFAgvU28TZphD6jf4ymXMtBD86sRQpMfT6x1eP2vkD3pz8QRwyB3zxGhZ1fYK",
  "key14": "35WWCEoW8CDpssAmgP9WGDuo4TQykTF19ZPRms1qsszgRc63UbErRGFATcUb7ZTRRPpYQKnisMm1DLJTP7hX7wp4",
  "key15": "5xmn2Vb8i1Jz1z55ctX9eD1vBxAdxtYZQnbj4rkgTCWu5E2fYhMN9tt4gKEvhZ2kHZn4gZYnyMPKiiHzsgQcT4k",
  "key16": "5jxLwJH8Wi9PiMhLqd8FyPTr4FqNueNYTpG7WQogmnLd1vQHj37zJpgchN4RB5aESACNGpHmMh3V4cudFiZi7LMA",
  "key17": "5Jg5UETzNLcX6m1gzxm2LhpsxggxLvaZr5qXf9MfWZ5s7xg4EtSgPDNhuuktPse9V5k8nYvydAVGmzF74q9oChv5",
  "key18": "2S1eTojBFybqUkSZuGL755VdE5xwrDSPkEFN7qDgRMpt9XQGe8RY3jUixGU4icyNaztqLGRSarUiFKznUZEcYemg",
  "key19": "62tmxgKTfpQo5LAyVHTJzFRCkDRAjCjuGdtbFCLbPWaHhEX7QSkSsXVX87mHwmzwaK9gTAbxQ4KTa2icFGKZbGuz",
  "key20": "3sdb7G9pHYL8jZkbk5BdWwkq9AGEfgTWwteWX6AbMQzdeaaLXAMW9GbWi18X7Fo5BAsopiuhxearSNjPUYAx5bJ",
  "key21": "4MGMnZzC6c726h5LD6U5oK5gN5qM5HTVCKP6bC6WehTuovnnTb9GRvUHbkB18A9pahkZR4q1cH9YfQW6T74LJjPD",
  "key22": "2JGXcw8qf2FLrMxaWEVD62mx3Ey7ehxnkAaVJBJeRqcjtmtLoSMZrkZQzXokGTBGS77EJxTWyGsnYS2pt9xJfd7q",
  "key23": "5jiWNWimuoU4qJ8ux6Qy9iTpaSo7dpjTdneSorMZZ6MJwRGkGhAGJBUjwYHn5yjjCmFHLpCYmwx5Go2n4n9MnMUt",
  "key24": "23zsgEq5yw4yj6UubnzzyZUz7mdWLEJREXTXzeC1WVpy931AA5RDupXgsjEDVWXS2Qeob4k3e4CAm7NZBZ8557r6",
  "key25": "2Qyh81cd7mAYHFm5xuSXep3p745zJ7avNVNtfzk4W45Ger45RAnLp5PSP2pTsWA4wCDAVfJXatW76LV99YTpYWEE",
  "key26": "5Ff772NUSTEHDLg9DyqvTYs6Wu5nWSq6N76hMDtCpnyL1TMdr8KkPzH1qpCaxfei2DKfqBSpAnqhVPnwYwZi1weZ",
  "key27": "2Wijqke2gY2V1XPDZXbX749ZCsY1iADhZf2wU3u6mVn9VSkPZzh31QUJXH4Jxv5hfm2346Q9cPAHJ72Km8yPfXsN",
  "key28": "323ZhwGm4GpWhdWN34B1ptZUiacJqVDSEjomWNdfzMBetNjRsp3E25sw52SCe1TxwB6YZrK12Vy23hWNqb1mn7Yh",
  "key29": "2eC54E6KDXXuQqSvoF8KTTtYcUd51FT7NzvtmHpdWZnHN3ZthAMCo7VZMtRZ984d1yqavgnr9X18fMd8no8nSYvX",
  "key30": "6188RMzyKKydfLgQNMue7Tno4Rdykj7PJDDKayiyividfaz7esEyjL7aRKDpcfKSek3JfBp9wbmkjvsoYfXNLon2",
  "key31": "4AZ6yJwZRC63Jd8PGtZ6nCuh5jazSC8aP9EgVbjyos3RR1tu4SVwzG6eTVwM7uGUYHWoQ7BkwPBtiFkcydksjVAW",
  "key32": "tQHsMkxkepHcdTTMWetiQbGYTLcQNRrMfbQc8kfbigimQRwNW7Zt329b6p44Hvk5RSj24uwJYQbBkWvn9UMBKCQ",
  "key33": "35wVSqFVaN4u4aW9daxRyjg7RZbxgyJhGJFSb8oXxTrsJidU6oiqRCaw4ShPqG6NqSP9fTeWdmRSdpbHG9NZ3JnF",
  "key34": "3w11hUqqT2EHiGQppHu2Tp3aktK9NHAw1a9WBwAnz9cTTMjFzRuDkpYFCbyAtQn5wXdTE9WDRJTCaPZzZPShBaX5",
  "key35": "3PnDh3MXHGW13utYg8eyxm59mkkgMvb1KixknzxieZ6y4qtKuPMf7xFqHj6BHBKwyyhynUcVJFqMKYcXBj9U53q7",
  "key36": "dSwC8bZ2kV5dTNbLvZJSxaWpVixK25qUzC6AS7fJXBU8xsmo3RMQPHf9rLp9zpsHyi6Ze6fqK3vQPzjudZPsrA6",
  "key37": "55foJgJgdap23tnrDeHgqtrfRq3c1dXBE4pLXt8yK1Q13xTcXraV9Nts5ELEUhayorpWuouBwJn6gyxcLvgFCVbp",
  "key38": "4Qd1y3mL3iPvbMpEp4d3RwqJ2vo9nrneZKwGQrEtAiSQiv7w9of1UsSeBcr7ww1YPniX2img73FkY6n8DMVPrQA8"
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
