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
    "5uySUbaG2ntbdSB7kohikBo2wrNXBXBoBKXWrMGgG8QoYcoPvsvd7yHRQr2t5ZXrGDQ6dTmXzCtQGyaVijTbEoZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gBKDBJmxzQvtGzJywp5oJhXxjEhn6RSJB5Wkn7r1NERjkSE14SNRu5DNvCa2qoA14bdVvghiJBwJMkWFCDqXeEW",
  "key1": "2f5ZVygjVxd2Bj1EuCWexKnmqGE4gMwcXhLZhF9gBiRLMKv7A26iqrMqGUiPX9qDumztXj9BrnFTzf7oeVvVF2ZY",
  "key2": "288sSFNWvKGWThqJx5QDY6npLRuYWkidsCYLsXCfJtgh4MMZbYmYFWpDiQZbMCpXyarGk8XMuGvvuKgB5qfgPMqg",
  "key3": "5cijAERHDdRgqvmSTZtdjeaemVuqtyGAqe8go9RPAh4qDUiYVW3yPrkfMwDQuNu3uDwZZJ5Be2ipLxeF2qA4ymMe",
  "key4": "4pC69n7ixhcNhkAFfuBoK8XK3binnxpxuqkhw4EDG3qXc4KeaXT4ds538wHDmGQdrMzWREiW5tdGbtBXaPZyM4hp",
  "key5": "vb8FYSydzMhcWxYiyV7jQXfYAJZYzSo8UUNgkCVgLrdxpRAwYoZYNmA55WDxzRGen8L8kZMCyPCDDjy482GW9U8",
  "key6": "9PmScSyMHDSeiTD3HnGL2RKeY5CaaAoNQSi5g4aS1dw1KAmkHd3JHndHrYuMDkfyveyLTaUeZ4QZDXHq3c7c4UQ",
  "key7": "AaNMX1nETixkzwEnPfLdrwJZjY9zqTENUTNsJLcUEx6BofGH1H1gkWGM7Rq8WTBGscQQVM1p1u7SZi4vVjXw1bU",
  "key8": "25iLFfTKENdXUPHXkHLfEjRnyvFQ2NAXq1ahxyZBTeoKzxeX8NEoP3oj2i8pLqxqrpXbjKBh29QK9agURN61m9dD",
  "key9": "5FpTD7Jycj2tpi3Z1MTeYvnFCF7V6UGBpXKLjdWygHnnAT8cjwcPE5XMKVBT1qEGk1qDa8oEZbwKoizJFSde7re",
  "key10": "dKNmgVjCuzpeFCbKATcad6KjEJv8nJQ4wGpy1wrDDdyxpHUUdvpNF48or52kUmP7gTcNNuQyjxowqr9MJYtBEqB",
  "key11": "24HgFXCtSc9WAJkaZoffbLug31nJQ5TN5RroUFcHY1BjA8Mgj4dewGB5pD6KwhMEzgaLASh9vqcYuUTzaV4MHvLM",
  "key12": "4XsQeNxACuFGhCZY4GnMMLmoP399LmgFPZJ2sp4tHbYaLYYGQZZdnhvonEo5LFQg78j8ftLFcerdUyWS498RYGaL",
  "key13": "122qGSbq4P1XWnEZBkkrxeAwp6eqsaqWKfqvBdWR431YWePKFNxQQAE8RpBzQ8xoSqEv5foYm9mwjvAh6BTwfunT",
  "key14": "GL9KBacsY1Zar9rhvKFeYLurfPZfwu9fUtEwWdEXmXxy97RyCr5LvNymYwfM9nV8PqStBgPq8e4YNkMA4e5ruNn",
  "key15": "61qEg32Eypx42LRaegFMtkY8xaDimDdgDANr7gbdUPL1B2wGAAQHMwbxUWTcXVkLdSvhFYxdT47khUb7z6zqyjrL",
  "key16": "3AMjndP3atJasPxdknRka7ca6jFayG9JQNoBxfbJKJE9toRnN1Eim3NFRjvcxeRpR6SGefquzhxbReTgoyoyAAA8",
  "key17": "uEHAtnVmRFhezDH7BcuCi2eaQJExWXUtbc8S91oiadaK7QSjqSga76UMLJC76j8ZRhjf1Yw5nXR1DBbnDLPHKYU",
  "key18": "2f87VTaTwKHV4o6yN6B2EfHmsLKqEbmAe4dP5JKfALZhSia2YPSecRwrJMjRc4CRdCv8bsKNTsesnCe8CkS2yQEa",
  "key19": "3x3Yg8GCE4w63kkQw9ZonHCiDdzw4Yntw8wPdTRZQYViNYKpb2gYaaEALtY5uyqg7edGNsVScM91zDxUQEqhDMMM",
  "key20": "5tAYrTyt54L5342kvwx41kRGA3BFPw6CNasZAkAWJmVZe4Lk9MC4hpV4deHfPsCbwakEk6iVnvYVstLhuHNTD8Dn",
  "key21": "2G4RKdzRnWg2RoDKA9r7ecUDzcnsSxgwit7aCa2mbXS7ATq99JqCZgCet3jgXGpSY5gPtAWtMLo6Uxzs9AFn8px1",
  "key22": "4VvEVKnSZiaxHv6hCbtEH1mZ9mVH2dnevpxC41CC4i9k3bTR1QJr6KWMcpqge9srAqFNj65qieoM6G9EKvdh7cLe",
  "key23": "5C4JpPtVqtsvSnmhuCpe9ENYid2dX4cKx1w6BNXCugwvwTU1Ca6Rb7SjnVi54L6DNnnXZUHCh9Amb6SnR1wWdpiR",
  "key24": "2eSKbgvVrh4fta8jSjvvsEgB2vFoqx6Ugk6sqzeut572jPENuY9fkcnY4Rrsp2UX9vc4X6MeFBorNGP6jFouNfXK",
  "key25": "4f7RHZ6uF7njyP9Yx97M46dVPFPmeY1cau2RkCopVrfeU6kExHDZxzBMUWypmDRTbWMNSkqn4QxKA3drC67ENRCK",
  "key26": "4jRqXxnfSV2r4bdsQnB5JmfqUoSJZicQdgJ36rNTcukPHDCnpqSpx7S1J9TdgWLuqCRxNiPipqqAF19yvMfp4AVP",
  "key27": "2ZXtv3gLsuPAETeMkU2ETPzT63KVZXvrXiaiyMaxfiQ9ErX4KNzziPGA12Jagfnn5Nn1jhu7K4Hd6U8wpmRGVVYp",
  "key28": "45TGKgbykymJDdbkWsjnzNq75dmCnSaXYp3LP6mKGRXvoRTVTiUMm3MgFrerUQKWA2yEN8f8eJjQA7CyeVBhCLeG",
  "key29": "2RZ5qGvRVZs47gM5RMw9LrC1WKaDoUNFLLup8AptYzYh8364XJaruWwZcSjC4Fyc2q5b6kH5oUfDujmzCG2xTU85",
  "key30": "51DvB6Y7HMNBKjYjjujwGC9uAX69ZtLbpcBCQqdSjfEC6ddJZ2uaW7oWhfRtFgKddjbcSt1NmZheJBBeAoMFrs5J",
  "key31": "2gY8pMbKApk2hTbjpHuAD9LGrQFcKyfouwKCXQwZjq4vaUXjqiG9Z9vrfBNjXgimwdCayPCAbdqv1qTVyBgKyjR5",
  "key32": "4FB536bq1YmARhCJt8XuWi3MR1Ny6wsYMfpRzihNNPbY1uWeFfXkewFz8sAvq77urGovW5ApdazURLstSJA65D3q",
  "key33": "2dP7jEASDfxfmdbQkWuhd95gEXfTmHXx39Hpn4zrGStVZhePicqRUWs9F8RMKZZxwbZ1qmJKAaEXU1DRP2yYkS94",
  "key34": "2iMysfrYrdtMo28dFSZk57vgmzM2gRCEc468UDV9Pe4c63hfTraLqxqPXgtv4nraG1ZMXpbb6pHPb3nsCa3XEQwb",
  "key35": "5ywv8b4NjwfqXjVhm3RQ6hSZExpe3y3ZwqwrsCDK74CNSzH5MtsTMuRijbX4Ra417t2ucTFUsPPGAHmCrPEP7qQM",
  "key36": "fqccCsX1Qi9fpVgxND8xfJZapptT2WJ7DWdDJcazzyt6FBMGSJe46hb3XzMuSTKiocNCMPazhoeAcFyWxEjyQAd",
  "key37": "585fknd4tt7GYdxrePDJFxzgVXZ427aYyHb2H1MC7SbNPSBHEsq7B5v4HXbc6TD87yajk1xNCHsYSk93oR7gxrRJ",
  "key38": "4BLL9SPoeCTPgWkNboL8GKsKqVjNVppzdEpR32MGMxphmLAhhD5x5X48BKfig4Sk6fZPwcAGVn4yMSAcPS74akwc"
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
