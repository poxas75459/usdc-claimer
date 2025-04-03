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
    "4FkK6GQrMBEpuLtf5Vc4WGz4a2iF2GSeppS3j59cVJhfDeAXfmfuUZNL1z47Fut93YhYaCMLKEN5Sk3cVi94ZDSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuzWgCu9m7tEpQjpCPo3j1QLMQGyNnquYFHdVEihgtWnP17oac8e785d4beCogG6thPC9n7gozwFFGH8Z4V3FQw",
  "key1": "5tgYe79u61TqKfWQxGasx25eRm3TWunSRErx6vG6kj3ZeJLzNyxpwmYWcvbQwW98DdGenyLmdz6vmppLGgmuiK1h",
  "key2": "2vPRtEJeoUgV9mFBYd8MsxuK1R4xUM6LrXTVATZ2qq95UDCteyCcaSc15XR8EN3ba3Va1aMH4TAozL7Y6RRyZvjK",
  "key3": "5onzE1qkFTV9CXdDpstdFN3YZw9VSG5thu9tS6YHtCR19pj5Tv9r1PNTLE6tZf4X2p2TTkGV8WaFDpNCpzeRszMN",
  "key4": "2z2X5TfUyP7Km89qKYohfdGA9DyrpigZfiW22dKczjEecsmsBt4DkfGSWHeUhkyTrn6piUP8p5Ht4Q477TsY8P4K",
  "key5": "5LFZrpRK1GBsLiS8p5DiVZuDRpJ5Qie8R89VEzU9x1454pSpmW7qFQgukNn6dfSa1nRoAcPuuZHoQNYNqJTtgV4x",
  "key6": "4vT4AVx3PD9ZRNMAfYcbVWC5b6tHXmiUS61N3kn5NDZgRwz4PmD2eRm6E9wqUdyW7p8y1S5uUUZCHmGtCdDaEkGs",
  "key7": "2rwBZoSWMam7cGa79R7vLgR4RTMH8DjtS9nApx3wbMqCtaA7y2G53wnnYp1pcKbicMT2XoG3mq8Whm6F7FRMPSJt",
  "key8": "Yky8g4VdgZJ6cBZqM3vSFMyNGQh47FQvwMYPDpXVwdXDvX5481bHf4vYzDYKKaxAkKM4f79XdKr827qLKBHRX1q",
  "key9": "5BkDWKvvDtyv3Zqd8PTNxfRQQbFyS3sBZCHQNqumNqey8YKCXpVPHaF9WDY6EkiqCZiVDrsw5AfxfVAfjP7xD2Bz",
  "key10": "2cXzVTccbGyCPcTCRTPUmsk28BZn8mKPn9jX4dosGsrPeC7VKs3jRY6EsVTZtnz8KYUtYneB5JVJxpQN7pzidYP9",
  "key11": "yQPqHDWMP5WuL6zw3qukrMEhEcrU1YuLYjqaWToC2fgnTMSLUqApVRpARZam3mPGz9kZzQrWvNNpY2RpMjQA7ci",
  "key12": "EsZdEBG2S8kG3tvmN8NMztALh9QBggV5BsKu9F1BQ2icxGTT83xgpZovhkeUBCanQVjzcsW2vsPCLQxMu3wjb23",
  "key13": "2JHKtuXUcQqPjjNtiPdwbtNkd32BPb7z6ffd2UhrUxVEqJVNHAyHZxhvfQjnWDPg1cTcKjpjb6Tm8BD29NRXuYdS",
  "key14": "hfgmPVM3XNocjV5PU9QGULbmAP4CXS6CifLsgaHfdNRu3i6U7wkBVbDzvMVMk6hYsCoqBN72yAuQUUiGMQriuv4",
  "key15": "4EgRVxqrPVSc74yMCvckrZLWZG5Q1g2wakDWXipxip7bLLL7p1jcgjNGHqZg8WAnyAkBzvY3rfSPQjY7rpKk9ZRn",
  "key16": "TwUQkcJgB8n6QjEF16ek5E8enjCfg9TM1q7saC9gRSTH1oZKNnJKBcEAYVodmztWEGYobjVNyqaFKfSr8x6M7Az",
  "key17": "32TFy4JPrMHGZ2rnmGtjgioDUUzgu8GeDFw37hazufdr4r2brJpKUF3bMpHze7jik9cmiVfyMb3bPwCCR9S1SguY",
  "key18": "i7MCgMp33LtSjKg9HwQjE8i14DQ6Peo12vM4mYq6vaShmnpamRD2L1uCJQojUFsFV9eJsYZQc1DUdTkorywB8RR",
  "key19": "289udmAyA4wHYorEDyYcZYeopgKJ1YXWxirAweyA3m3bPUxRZjFJ4t6oumWt3xcYWTCpmiGjnMr8UmM2ScSodaq7",
  "key20": "4UtfXLePSA6RdMbSmHSzfA2b1hnAP64PnzCNc1nDTt5RNJvwkYo6GwFrYggheQaYEamdK1duydrMCrvnHkhYfrDf",
  "key21": "62ToAfoP7Mddioy5QVqrhKe1rpUyubejZBQ5ZtALm2hsrQ6WLSagECT48teGKJz1VCUfgLaXq5gFka4DswJFhv62",
  "key22": "5udHKXvcSbFRzn2qGGubYDCc5z7EzqzdwrRAdLrJKQf8uYGtAz9AfHVaDpAzeL5JMitzdTR8N4p76EJzzvctdjh8",
  "key23": "5MhZUT2pHw8SsAjFkM8NcnftM3cxr6mFQhtZzM9wTmzTVpqP1x1raJEX34Tfd59GofJhqxWhgMTNXMWTRCEng5ok",
  "key24": "25i1AEaHYmu96vfo4EDpdJ7n3TNoU4bM63nv8geTCvMh1djNwtXRBFnpfQYspt2zFt5PUwxREQ4j4ZoZzwmr3XJJ",
  "key25": "2MHtQHyz5oRmiFhRKKSgd69obbvY7b1Cx9t5xnrUkjWfR9qLw1omuSxbDu8bPUFZL1ysTFM4oHefMtxfwrQdWhKa",
  "key26": "5LH816n94LroeNzJk2BpDoStgFv64N3WqmfGx1oBjtV8itbtKt35qgmSr3mKcUJYMAdwnuU6n6BUf68kWrVSNR9S",
  "key27": "2opPnPPV2m3WyzupYqMEFZrRfWwaiukUHiAHAK99k3ErWpM14oNcgRUxDvo2zUD1iUQEqxFrXtstZYFRHPhQB3Ls",
  "key28": "24Db8YPoCBw6VLyA6QcFptiZaF3RXtotQqiH7Ni3kZqS2AzMLbRwidK3NbMMYKk6aHr7i9vw2d6tarfSq2NZpjce",
  "key29": "2xAU1ZzHZMTnkGwNwk4mL4iFYoXArcHNav7ncGLQNa1qqddK3oTUbRDXYoRFEyhLo7W9XKzQHRW8TourAcT2LSPm",
  "key30": "5pVjLsWqiRUSqzGCJwNJT556KSYQL3xj4EgMvpo3xqbdWFR8WziaLeZEEy2AyNtE1Wt66kobpV2SB5miNzwHcYcN",
  "key31": "5dzKev8VrAJUnT4kKkDGz6Z9RzhvU4GX5GRZaZbU8dzd2GARnSMWSdEZuenpoHwsyF9wczj2bFt18RpPykZUstgV",
  "key32": "42xmZ6Pw2NLPYWKWDGY6uGQuT9wmjJjTVayBV2oBV9Pn8zctncJCTFsDUXhnAbuDeD4PnCgGfsyLtDL6NK1JoL86",
  "key33": "47hCB8et47hSPYS1fE8kBJ2kMnMEnxh9mpBdU3p3q6L42QrSmfhLib7JwoCFp3BNrFjVU9EETyAM23bb185E18YZ"
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
