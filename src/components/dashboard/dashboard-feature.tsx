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
    "5ZMUJS71wxS1SDqyxxnLRnKr5FXsix8wCbFTmB2o77ANgdWy11vHhs1AFbkEZGi6g3yfMq5RiWJsyqo4WyhY8qyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42VxcotxHreRga3t6qcCKqVyj1Kp7694kLsdaBYqZn1d1s95beyL6vR7W9Jq4BNGbAu6jhVe47gupZFsBHuieadE",
  "key1": "BECsUumCz4xjp7BzNaWTs1ab84HksvKhpmUHze5QarAXxQadxqapZSFBXp3mwkc8eTiuGNJDwtSc14BDtzdw983",
  "key2": "2nartSW4ZmH6GRukTHc5zSZDA41KkqDBuHNEGoX6BvoN68d9KmQ5F22aSHCm31qrzmPzTC2pi5vgAdrhoy7a91JE",
  "key3": "r5DbB3bcSQ65KeHpkcoV78iBZUxdhT1o1cfuHroCm469zLqsztbLr5vShC56Xt4qjLVasRhnJYB3Y8pXt7GMJHj",
  "key4": "2ySwJRsfu2wFh8SHHd8zyjHyR56eyosYU8uEbnf5BTdQrqArwppH3s4QMmCZH5Zw1YcLXgSNchkzbDZVLRuvJejs",
  "key5": "4J7NFRGjDmPchV8oqPjuMNYcwLvEnFNMqLPwgRvRt7HtX4YX4uchhsQuMHaD26BPnZCg4vaXgGMWRZSWaMCng8Q8",
  "key6": "5H68MKkCU9NjKrLV1BeWnaxKWJHgKKFK8yNXQLyywitR783e3MoCkkBKMRSQph6AxhuMWEFRZzAhpfqWLq1iJ9M9",
  "key7": "A5sdXbSYxPZis43XASV3EunyvWRdDooAs2MX4XKQDipfW7kWTsaRF7aYKPCbnoJCZM759wYdG9KxBCP16XstpZE",
  "key8": "2kVt4DTCYwVqES12a5ja3qgoTDW5PMTnzyNcGz6CQq4kB6RHgrsjNuBaHnxq57kuPvcfAuERxsguf6g1rdWArTS2",
  "key9": "4m61K5xo3WPZ4pH5wwc3B372AhFi5cMqGEJW3onKmb16xgTsuufkitSkuNMLz3nXZ5qr6Vq3fMU8YNUon5odaeBm",
  "key10": "2yQv52DCLZYmGdfWgSqhcK5wrNWMJU3kgwSSTvW2sLZBMhTssRs1pnUvBRv8pfBzBV41USgPydXQR886NNC5VW2E",
  "key11": "2mjZR8fLK7J6L3ymb2EmMnJcJBWbwRmCKrYn1ofbN2r8cp3rJ8mooEo7829nSdnBz3LTv6SUrphxaVnztK4phcci",
  "key12": "2Rreb2B8oyzHqawi47tRmXmWYrk8KWqRd36vMs3h1vi1KCsvtgpFug79i1qujWLDkxARskp7gpu34o6m3Ni4P9iN",
  "key13": "5LoZy8rAdFq1TnESRNMz8U2DPJbVxREvf6VRYfhbdEXYTWQAX86HBvRnVd8U6rwiRuvckGrCDMrWUxQ7uP9zWbnX",
  "key14": "5JrAkks7ZBcdCvZexq5zVrTAj2uWeiWBkLKca5mdtLCEtd2M9j3ip9yi8p1ZKrzSKpJpmLUZBuqQBFYo6egdjFws",
  "key15": "5AtEbhzMiptpkBXYY9SJ4gDKsQoJ7sBvGG7pfM8YD463sheysRtPkkFUruYzbfHDUjNo9fqfA1qY3pQdWDk347db",
  "key16": "AuEaz4vZnh4GBtrWt1eUw6aeUYEyQq1FNAWPAWEnb3Ws9ossHey93zZrq7qv8abDrsLCUQLnDz38t8gPNDkTuf5",
  "key17": "JSB9M6cVpdqWy8aspcBqjH5tTP6Y1CyKVZk2VSvRua9jAaTuMyPWExKVr3Qp4SsW9uWGqNUvFDsAcycgYF1oHpL",
  "key18": "21cUeqRpbEkYQ2SSgi771rmpb5CZzr4kZMCECDmfbqvoLRTWQvY5P9C1HRg4b7esrjzKfmfeupthma9a4TUh4eYR",
  "key19": "GPZUc9Wfm47JKdc7nsVXnyC6bLvKEaSBySpBJv6SGRWkAahyZ24Q4BiJu8NnRkS682LPzmZAVL8EJ5HjN2RQQud",
  "key20": "532uoGwg1c74Bg7ukcMyb1tgWYK2xstJ73efqGy9cmZVmR8WQV1SN7rgznmBrKqJjwEZESU4LmBwPhDGFcN2xaZi",
  "key21": "4WJNc9nmQx1hjrH1gE5DaS3PtxKU1aZ1pT37a3fTUXnrU6S8ANp9NQuLuPfQqY2HgbYt8V1kGWDGhUrXACgYhfDP",
  "key22": "25vXY8kueghcunzXss4V9uibHDCvBXuWoWf1hjLuWwoGiG6ntfPFAirAFvq3htsTuBbuoEvjTbuZWp7c5dsKc2x7",
  "key23": "5GCjDpZkrvjEhKHaWRxxW2hdpAGiMBoxtaL7jjjkjEFybSmXu444wMMu95MenKjUGfrdYG9CAHfr5v2Pavqv5dnA",
  "key24": "nYDGRdrdgf3F57PRssa4FKT5HS7Bw4oGUX84EgQYnufguFRyT4Fem5xvr9DoAqHZyccd7iWcZsAhNS6rGJEbESJ",
  "key25": "5FqY8Qumw7LCW5kwT1PdzZsUKAvzKytq6SRCTSEw5PyRzFPqkaihyzjiN6qPeyFjrTt3L1QzTwfgpETarHWj2Zwr",
  "key26": "5bYLvYRhWEfqCW73RE7GLPYQhxHzJP1sD6Hrg2N1FWrxBBfyTtVSJNXmdcNEdmRosPpZrkSPNE6aectEyY17vZXd",
  "key27": "3aX61mZjv1nSBeiJQvNGdScdjQSkJgVWWrbi8tK46gzPujqEVDVSoqzweW6Wq2XCwtubLKq4NmiWqHnK22YkoGvK",
  "key28": "oyaYKGcfShPCnrW2JSNitoiPXBsCqsC7j1H3o2MeojWPHaRq9DnvuZUAjFyQdkXMLHnYajXvejhqdw6mmfwg6ZQ",
  "key29": "27QvA6PdpwFYSzPsTboTJqfCdasZy14Qq5NreVDyHSV2uLrkkcghSP8MJVPG5XKHZXrLAtrntyGGx9tGvxJUNAPm",
  "key30": "3dNwZ6AugsoCBpVH2N9gXZvykLYFAubZsAV1WzF1zbrdE8GDderBNkAGfF7dBfsdf9Th8X7yCP5VqwJNAKETiwUE",
  "key31": "3RWAK7HyLqMLEsDpRCzNihTof2eVJDuN9SEcE5KUEvFiDpk2hoBptSPTWvh7KLqYGntWTuwSh9wVELA1NKZhT1Hq",
  "key32": "cpd3aD1ZB2h8tZpxfNmVnaXWviBsTYHca4W61dQ4syMAy57zEGm92gToMZDNudssu4LGQ34uRMakh6UKY6BAnGB",
  "key33": "4eQdHU3cceb2KBhUKndgYPcMprokkdjcmiS6NXfip1htA6Bh7HRrBA6RPTW5QdGXtk7i7JGZM2XicKqsKaep5x7y",
  "key34": "RFxsY9JtKFRZCa9Bv6oHYx2Aiw4pywQhj2jpRdtrs51gYatZJk85TfjLJ2PFPFH34t5x4fLUAYpGcvKCtwZfEaZ",
  "key35": "5HqFrxHVv3LfA8AqyEE7biT5pTWA3c1wPwNG5e45XD6RnEn4tsoqVrGW6SxkSw6DzTjjeyv9k8GBvNA8D71or2CE",
  "key36": "XjFDWs1fF88aRtkQc36RABnjMsSzzo8J67Sxgu1VfF2G2BFnyTauDWiPRZdYKxv6tpqtGM6AFyCEuoBqWgZrLbY",
  "key37": "2JPKTDCek3SQhcDqc7jeJbhV3bwN3kqNK8JXQfWukxak2kDp4MfAnni1Ly6H2WvvQyFKGomikEcKdF3ChYH9dJWd",
  "key38": "5w4rwhZzrcRJbWzTt1AqzyXJaRD6pK5oeJpdbCiLMy97y4P3kehBWiMVMgrGqSwWLxSLXjRRo2wDtayA7r92ARBv",
  "key39": "4jkEHGoWb5hmmXjTQbykLLxcFsurJSUQ97ASnswSCEtVbDuMSLdjm9hyJCsPXyYCGzJsGdVHoABcb5852U86ccxy",
  "key40": "4RTsenU8YKK3woNBDRpkTCBkDDLoRY5Vmn9jRSgi1RihyZGMrDJkcPWQ8jJQp8rbRNUeSMPwyo4hZq2i9A8pWJb6"
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
