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
    "4r5fjerHG45RNwAp3KG5X1qyKeej1asyYBMwcWGdSUPaYpGBAAyZvWTwb8K9YM9niU1utdor6c6zBGwpRaedftry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pisnyZwTCaCnnoY8JQ4umr92S3HFvPfDQYcDFp4sqk5UG5ihHb4jLnzQSP5wTdTvVjMbSA52SVkCEmXsB47fgk2",
  "key1": "GybJzBRZap24oHDCQ3BDfjtvZwrKoV6ZCszkHyUtnNgA6vumip3vVhX6zVTNMUuwMNxSVqUED9ZFrSbpkbgCUnr",
  "key2": "4NbjGXAuej3Z5AzbfvDEYkTytRSxRyjpDnDqbJiJkBDD6DwAHx6AtqjwDGgYsw6Y4zsv22Fdv6YqANEuoN7YcW5s",
  "key3": "2NBnKmSMCdam4agSZDvzWeJ5uz8mqLec6WEkj97U6pSpCDoVRuptaDrNufn3JfbJCtgaWhRimnQCyTKRNcKXFeou",
  "key4": "574rPbZVr3SLHkdVQVbyQC3bzd8rcrwUw5s6LKfhuXszBu7mGmavgscyXoqERKbmbc8QNJmvnwnKCTyjHXJMA1YV",
  "key5": "5vYZsbSBmQbUaWucVxBtiGDjADo25BrmNwn6knsVayMNtf4W2sPBn4GGsJfTZYeUCF3CU2scRZDE9zrihi5jfxMW",
  "key6": "2DT2KBkvqKx9sPCH5JskbRJPq4B6cnBk4E5gvpmTeRzNN7ADro6PxfFjB8Qvg1TzXsc4qu3q9RrYafsCa99YvnpU",
  "key7": "3EbY5RRjha1yrg9aq1eKJzAF8xJ8ThSneeZpYbm4mkedqB2N6gsHrKn9XxAvabqxaLfCM1UCuwmDqpEwK3M5iSND",
  "key8": "3cn99UNvwc8bUfjsaCWDtGAM9bvGUCAyNtPorFsvvaBgRsXECixi9QAKWm29ssSNnfUsKKgg7sfiLBvnbamSe6py",
  "key9": "675w9jjZbgr7iwE7TA5E3n6zRVCYYRn7tA4ZfVmwG18c84NFnwKZER4cAjkjh88Jkn5Y6AeKuLfrqNvJoeAUnFPU",
  "key10": "zqK127foXgwenS6aK6NrXzMMMFM4rHtWGtd53YVYJcWgqdmJCHmsG8sM53NRtLtbgBCjiaH6e4WLZkz4fu7uiNq",
  "key11": "4sNoJsCXryA9DL9WDeDfijRCRhQS9yHnY6QeKEhdz5WMmKPTWidgktMPzpGnZvfoSuQ3ybDS5Srx6kDBAAYN9V1g",
  "key12": "5EUSkTGvHJSQViv8bQEDY5xZT7zQzX3utwF7VyHrxSYQGndYsem9omQX7YMKyQnGeoVQR2tYfDFkCVJbupAEjfnb",
  "key13": "5Ngm78LtpmkaqsCYz8Pe8c6kFutqDRpKy59dD24rUAor9QNLtVXtvMHS4dCETbavySmg7b7ML4J7MAKgw9scVEb6",
  "key14": "23BBYZmccSfnkeNhkuG36ARGgXdKwmBxhfdbpqkhAcVDNSi43mFkn54pZx25YNe71miSPoW2ic1YKdA21EnA4odc",
  "key15": "376mFT7ifwNSr7w1LonCmpWXysA1iJrXvRzFxJ2KZEbwK5hMBrFya46fKEBNNS6o1qXp1nF7A9pVeXbhgj11tRbg",
  "key16": "36HDixRCGRFNycJjJiBiwLXmBWfo7dfePu7bUE2JEtdDCFtxmcpwmzv1WXo5yfLJnNwiuvttk3xbAP2YdCAVNqiH",
  "key17": "5E1FFgCfULdbzdAriuWn7p2yPY4Jw1RtEtBSy5qoCx956bRczFPSnbAuyX3tGyWAwMTZJcXruFXGasaAv2VgaVCe",
  "key18": "2dJ5iA4myvw1Bh37cwM3mwPYgBQtWhEVyKdZcSBLWBwNxNPB4xeQCaBo3xUWRSVinMv6es4W7eD7AauKMeFwK6kY",
  "key19": "NXDVpa1A6XspsjAKnEwPwvVYATQKCnmXaSJgBLb6krbQXh622swASeonhqdGd8euXgAnbzvrdkhe3w3BQSvXnwE",
  "key20": "3fytiFm58aJudWuhZpqQ4n9ARYj8Lnetg5eWYLuQ8mkQuRCShNiVX7xayZdw6j6SFYWM2NG4gAAhVZFjTqX8NCZm",
  "key21": "2JLCk4DRehzULnLXGUwvHqWYnLF4XncWXed7yZEnUSbiF1PuUPGm6hHdZcvqxq7gsnAAjaqDe6RD1KkrNZSiScBj",
  "key22": "3o2o4yUTYH1Wk7jGDTpz4HN4qcPLe2mDYxQmEDDLh8A2YP3d3WMBrUBoYgm6cTRfmA5Yf74XnDJGs7jCJQzHaWDt",
  "key23": "5ri37XLg6BrsfSENgkYrAAG5VwEVkqTQpJzENyUWcYn2cFvoUi8PUCbj7eTqxkbyizVP32PDkv7DvMer7LjbBqFY",
  "key24": "4xhtHeGjGx3LqVTp74t11B2GBRm8wyMFCa16eL4VDHdDFq2nn8gXgnvBqYDUYheP9TJkLdwK7JS5ZAvSpnn2Dm5B",
  "key25": "2Y3jMmW5oaRuYg8ybm7oAqxKk4qiSFzuc627ChqtXvmtkZyTrmqnXHYFfJaKsZGRJHHrUiUBwBD76dQzPQUHNq5e",
  "key26": "5Mtu6BA3D9GQUyLbH8FzQNaVzgTf1gMFMyy22HsgYdxUtstWHi84ub5r9G65u6DgVgVfHgtHp3pCT68pgECeaWzb",
  "key27": "4yX1kGsb6CbiEo28LiMHQgnPAfceU1xTQEQ8EnMi1ydDK6XDbiVcPiEZiCBgAhNdFzoc8DCScieL1qHPvkbsAfs1",
  "key28": "4zu6gVsEkHWNsR2RFs2q6MgmGPFT67HRv6nhBqSmzZcTDV2srYo8pspB9RUh8BZXTWLmYKya9F4Nng9a2ENrUqG3",
  "key29": "5xTJacXpw4MvFWh6MwadP2R4eHLhTDyPLmoLufuQFPhTr8cVyDjYrLTqD1kfzS3xrCEfZcYGJgQjzUM4HtSFgFvc",
  "key30": "5qKS5Abjmh4kwUZiahkq2Lwad7uc6zPH5CfADxNwRVFYrhzftDqyFmM8E3V6GvUYs4pwjgZfgMkBgTHQSrEYG2qr",
  "key31": "tpnfAjqLcegrbe86NYy3mFWrDogjud5JXSewkKaRH1DQeAcGr1YLHqM1TijqNbRVbEvBp3aDJkSorwNu7L66HBL",
  "key32": "2vfNH4jkpavnPAteKbsYpFCMHacB7ALa5u5v48yM9YgsZF5ba17Lim2Zsk4hRHuonzMWeEfUkt1Vfr7gAyqoeU8v",
  "key33": "4LckzNYq1iHy1rys1fFbsqHdGaytj9GakYg97AK3yDjx2GeUg2GzKceyjaYDhs9ryXCqEcZ7XokUVerkHk1FvB7v",
  "key34": "r8JSZm9sTU8tjMDsAPzmbrqPSxgqgLgxoYhwCwHW3E4TdWEj5ZQqBe5TBNAHcgD9d7skmUCj8FwQA3UXbtDrhQW",
  "key35": "4RQ13BCpAa6mi14DQHheKR3GDMhmGhKrfpqupRmD2kVc66PwwjVB9u5VmwtpDGVCRW72mWMrBoRrtmaMVaKMpNpf",
  "key36": "5ydWdtktURU2BekCKmqwLphatHyKuPWnMQciBiJpVEPpwQ1tBDbffsVD5C9CYixFXCyrHDCK2GfWLzHV1QHsjYMh",
  "key37": "wMdsGp1o6sPeRqruYXn82WrrD4VxzmVjc4ChUhtHiF5HjnagX2ZzNbo19wqWaBzNCQ4yFjyfzX1dAAGA1QMTBhx",
  "key38": "5xHcTm2pFdNVwuVVWofTXBVMQSBYFhZQnvhiUYkbV11MZ6mpzmQMkrbR98qbgpm56hT5KVnxrmpbjjXLb6Zo1cUQ",
  "key39": "2S5VmEHY27D4UAi1bDCZCeNFjSXvY3FzPDAqJZHkxWHCgnGmAKPvPupp4q5w5QzK4rYPCrSi4odLUWKe57BpmpP7",
  "key40": "5ttsu9jf1VGSHxyPiiZZ9XsTdkj916K8ShAxRntr9rY3jMVJKrk6bv4PcfErss8BHHrQ1P9LND2NXv5xkz3sW3wP",
  "key41": "5pTRa3MzGa2jkg1tSgbdoBo7858xgkiR4GSqBiusaCFmeNLECnxFVDgBQ1bWFxCBBPNoVtrww8WWVXLx48AGgJW4",
  "key42": "2XeafZiZN8VKaHNMwBXnPTGqzWfLAmfuj76bpiRrjyhtxieeAqX2etz411QC3VnyoWd95t2CDqym3wwP8F3RDkqp",
  "key43": "2Lme6g97smQ8UvNvrr4NXY9WPySEvxTqQiL59pai3raLC2oBzdLB7NWVrwosE5fFELzyrrkGxNhNCtotij5cUbzf",
  "key44": "533ctDneqjRbbv7iqZ2p6iEDibLPoTzcrR19feNExppdSiQEqu286GxqZtxqfNoSWNod27VYuyuvtqW6hXYoAgme",
  "key45": "3Fb8sjxkwgHoKbZqNgF6GDjymogLxW2qhrpmv5BZv4D4n2nMuiWJrcn3PiTcNbEdAeSTBX9pFRwRSPTQjDwsJEba",
  "key46": "4cp8ewxPkQdz23KFacZ4EjfjkPRwXXpouVNi9xAhjGnojyJbugNpyjj8uqwr4bwFozSyvERnPFP2eEcg3X87K7ke",
  "key47": "2JJ96NnWH6LGbeCF3ZNRtCuCdsDacQDRKEZxJkEAERjLnv5cgZUDDH5VYmb61AjUL4d19JbjTbnPq9TJozYurwxK"
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
