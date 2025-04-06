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
    "3p2x6sMeBtcuz1Govojv9ofcxsMVwTVvmGtxN41PCtuu9kz85bfU8eh6oty7LJVhbzoMLRWawSSw8v2urPqcxKWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdjX1wcUHWHJ2MrsvTbHw1zPtrxzh73sz47mEp6pCqhpqEq9eTNtU5cTo3tVfHKYZtGKyN37mhtdhQ4ow5vwBdo",
  "key1": "5SKJvwCsEuooQjTVK3fya6mqTGRbtwGU8g9RKcSDTUCwdQ7jioWuMdpYevFCSFAegbdreEv4QURayP7vV1wMSE6o",
  "key2": "6sCCr1HddEJE4RAKSUdLJzr4HtxwF1vZd879QJSGgY2MAM9XWxyWAJi1EwMcZ6SSRHzTyG4tqzC6Mwfdqd17LZc",
  "key3": "2XHhWHmpybuZX8QZ8ELxXA4wXJdNuazRqW7mZ8UVRVrK4ENJE8xZWXZzHAWkyhBmTeyGesVkuYhgfkZntrXTtxAQ",
  "key4": "3PQiUiueXAdDtQ1sp26C43v5Cew7q4M7QaQuuZ4G1gZM2YPrrLNjoMzkFWnUaRnWfrS6R7p1krBYVDty1RdDwUwD",
  "key5": "3kFUFS9RineTVuVSDt9dAeBGoi9rjCvYuRUW6nBqWXB5MKGRQUUkKJ5pq3CUNtmhaeaREyGDQoqmJta4XH98eJGp",
  "key6": "2DiF6oBV6dwK9aMaqdSjqcejfaohhEuzfU2xDRmAttYqHqjzbpitv8nYDZrcfoWFL7Y42zSqAsTdYMeGJzYTwrVt",
  "key7": "2uhWFf9gjtrgfafC7eH4D5aDcDLLP6w2h28P9tV1q7PfcuDttbcTS5ts6ZY51mwQ8yUDSxuVguJmxT9MNb5xGuz1",
  "key8": "2V8Hd92wgcdxq1ZG64LJCkUdrHcJ6x4WqBwJA7noNditQQYRuYUWLST8stBCNesfXPPNHA57HBGKcPyTG617F4fv",
  "key9": "5DmgNhV3JSwV5Y1WWj6kvULAArSLKHh7SSA3aeqfvgdpjDTtTT9VMe3YSy1fpfsWXuhCU8LbWKys8WV2fwwSusWK",
  "key10": "4CPzmCSpckvko4q2jrmoFZRqy95c2kU2gj9eDr7TsbBFYerzhGTPUJq7VkdmJW31TaVVs3GRBznkkSQApraZqrQ2",
  "key11": "3b6JqpfWNNY8uXQeFH37Z5W4mT1tQnrJkoBcAtLYiYwrw2A5w4oTZXEa67aBfnMWp526bAWsKhM6eW55iL8oeZy4",
  "key12": "4Ry8KM99SJvy5Dsjw1cVt4y1aUKHJqeSdJUeQKn2VE6azr5BKftZ1rQhVAsNXX2oDuhZx2kbTidPjXX7p1SAmEqa",
  "key13": "NZZ9iZ6cosm22Z8oEuytn7k28uZt8G6vydp4mM4gJPRrk4XV6huGuVTRXFW3iNMKPr6ir63xWB7DTz8wy31p91D",
  "key14": "2hkLieVAimYfhGiaafzLHrz2oQvZQxUNghkH5ekv8GxehTQ5L2WfsbzHP6x3i3FNzs1SuQWM51rNDZ45Q1S6E1G9",
  "key15": "4cZg9SoecKKRKn5h9x275jM4RnmZKtCzAPRqLbcgaEwYNxhWBDU5TotRFro91hKPehW1SV5LNQqL95mJ3FcAVPRH",
  "key16": "2MxkVhQuzHKGKQFcQXZ1b5gXgoCtmNZD8hcSDHR3AuWsJ95s2ezdJ4BLqKnRxn6gMLfPP2X8kBckf3qruoFoWyBP",
  "key17": "4w2DWWduEz9W2CkACxrDQtZsDwGqDBCd8uFuMK9ymdWQeJU4xYC8WAWtoKAbDyjei5D7AQRv4CvXmXSDHnSk4C7d",
  "key18": "4MBiy2CGx3KNzcevZMyM7VG3grR6rfXsg8N2PrcgbGwLLao7F4CfZcKTQ3eukcYrN6tvWJmZgCDEh1YDTwhcTNu1",
  "key19": "27uyVCLAbo379G28fKxh1vVMaDbaM1GBEpagRhtZxm9epEUBu5W5R4r1i5DqMxPRXKwK7KwTWEYWnndmA6zkxQtM",
  "key20": "3ziTLipXWUVaQQuZCYJZFxyqBg5TcEpAE92CmUBYHGY4M7EFpEaGn6D7UjJWnKZ1nHWmDHGMTbh6JAUDRFtmUu4Q",
  "key21": "yrjQHeNfpRTDDH9kt2HAuHVrCrR2UCtUNWVz2vLkbWMt1z51unihiWHt7do6JzNWtCK9NfCuQLMyEHzeygSLPy8",
  "key22": "39LpUN1MYgTjgeVR143n9BcSx4jxf2jpjMe2H3VZyFJwTFw9oT3Zmns99K57xWqfviaS86DvLWhFvkCiqfXupzfn",
  "key23": "hUKRzqbtKAj3WsCvTvfuCWEHbhFJyrNTGceifBmN2MgMh1a9uzduwznJSg4hCxhtr3FxfKmhxKSvjU2uGaCud9b",
  "key24": "3zSJr2uxBbSKH7rwvLBAiZ1Yos7Hn27X6aGwubNJVW8HWepMe4bjALqmGoLjzBjWLKjK3ps5g5YnpVPh6eRw8hjy",
  "key25": "5KEM1SsdikKu4eGY5KuGJGStZYodaVprxmPtxXeccbFcAvGnYtqemrgskj5wcQKZhyMiKcEWFZAGzYT5Kk6uPZ1v",
  "key26": "5KDBuMU21bCrUwBunuvmXE2yCEi7fHQen9LSWwLXbnTRqP8bTntboBT8x6EDsk2rq3p5SEc49jgwq62rYP5PjCfq",
  "key27": "3MSS7MxX5rMUhtzcV2DuyTMaDVWd1HRgUQFhB3BUYycnMLDDyGz5cD3nfSsxe4byFggBpYPMv1AHG7RK33Rx7tG4",
  "key28": "4nDPd12rvENoVX43MyvGGNKZdAMN6WZ9NMutKY9KqifPynJZRFZsDSrQTgLgfw1CkHfi6EZsdFzADDS7RdGVPcfd",
  "key29": "4RDrjxSepaXWoWQswGKxmEJNMsvwC3iuccrud3ZAySQW4RW8ffE2Fdvytfk9GyFTjv4SbvGC5kRnd4FMuN5smnbh",
  "key30": "5Rwd5s5Em1st6tTaucGQm4frDNGnwxdsUpcv8YvoUycrUUUJPtvrbzpGYsmTNKVR3cwtNjwo5Mdn1vH8SPwrVvJ",
  "key31": "2aZsJHSDMfsnShCF2upEfbRewBtaFRe6STfkFEfnpGBLjMRvkse54VPSvSHMXE6FGMBHNL5ogeEcc9rwS85L39SV",
  "key32": "28nCcq5bfz2XzbJexm8cnSZCMG85wx3KAL33ijZF1ivyHsntMKiAscfG9xqXpZC4ZM5JXSGsWXpcCCifPD4WQ88f",
  "key33": "3FXtXVCNCuPagNaJbJW8MEa7v7MmAybYhZDpmevrQMq7g3xumcNfLTnpeQtMYyzSB9P8dQSRNAYZBGcBMh87W9gi",
  "key34": "3N3BYaiR4hufD3GDMekNdihEJNYkmXGUW3ivLdZzSCumwe3PBMmbwew7PN46XrXJ6fxz317EHM4b5WwFsrg4RFDc",
  "key35": "r8qNmm7nTMVVw8QL12EFpZTk3rrnA7eWHzmhz8b7kU4ouh7ZWB4j2sX5DpzEc341T7BzJswa8LKrvekoMrnNs9z",
  "key36": "4Lfh6cSKmKsoPB8YioC4yAbmSuE6UXiwvqFdo2a6hLdPcgik87YtR3PEwaGhMoNf5o5vW2puSJfAfkDA5VfmCEYD",
  "key37": "5269sjcMY55BjDJaNBfVqS2n8EousGWm2aDS8NMLe819WxAoq3o5tt9Depxke7QQ9D7TFCx5X4n7Rn8zWB2T2mQP",
  "key38": "2xrXohdv5se8yBowJLyizMZ79qrZdqCvnn43vLBuNMctiG4a1UHM7SZ2guFJPss1oKvcCF2kJsDwt3X12ebxhBmn"
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
