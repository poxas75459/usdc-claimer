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
    "3Bt2inm7E7VAZiSMnGAZXDRdV6xFYiLkXbhFHsMSTreANjeu7Xx3xoBHn7U1owWaeFVzr8kjYjYj57Bn8uwtJr2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bBuoc8Xx4oMfz8G4SKufr7KwoeiL1aSXT8eJDoHcQnGndAfWgwV8JjEBe3uFNWtSswMbYMfoxi1Y5qGEDGmBJng",
  "key1": "miZgQVinUGVPfQ5XS3SNd2BVUqp2FbHEUGYd1kjfruojrwXCu552ddoMQw4sh7eEksGCTADhiCbTaoLKdsUJBgB",
  "key2": "V6yn8rJeddrdRJn5p9k7LrRH9Sim29pNuzFmsvA1xTvN4GEggXFmoRdu4zXYjnd9ffPa6UMaQPt5bCgmQtzuu1d",
  "key3": "63YHx8dUmxQkDohYk8yDCD499X8FpuktTCsEn8yZdgvacH3hvdzYhfgWsVqaQdYHvcr3Uk2xkVSyPiVDRZJYwaZ",
  "key4": "5v9e53L7qSDVRgJ4WkkEiVdrSVSWf5s9U3Ad2KzaG7JRrToJZLRFHTFiYFiSgDdi5varTHRiPtC5rDhS3wtYcQck",
  "key5": "SbPhcrPsfyqCexzSwYRBMtXRMnvGf3pUrkZsbAAJsDCLeE2Jen4gXEqk1XELMd2Jr3YgAG4P3sJ1xC6xmu5TeHs",
  "key6": "5harhqZF9qJwhhLd3cBu5RZuGqpdL5uAYTTqeQqZ57oMZYT3EWSw4dj8x1xMU12xMtLUCWAsfTQ3ZtpysfZSVuxb",
  "key7": "2b8GKJBMtwW4jKkkZG7K1jzg9YLMJFb789kjznVU41QJvJCEusbwNrFNni9hsq1crrcYxQPKTy76PdZYUEZmW76D",
  "key8": "4obicdcetFeHxq46uHiVwEXs5ocYm5QFszBKrwJYntGGTkM7D4PUFBhhKdi3ZXrwxYC1Xgi1BGiyCDqmUfFkVvQW",
  "key9": "64sbuoZrEgaQefyYCa6MoP7tTbAvDHxsHs9dLp2Mm2hqW6WNug1j7CeB69R2xdZdBKDJSDKbiCJEFFUTb7BZ9mrK",
  "key10": "4Y7sLxS4HyPkgbxNQkzUXqZAypNzwgMoUwA3bTb2jSrmQEEroRdNcVL6jzWzDYQH9XjWDoy1bC3nVifduqbpVubL",
  "key11": "2AYVemvbzHmp6QFtDStZ3S4jioAstwEkyNKFVFRw1sbR781ZfQYKwyhihk11tkRqWRrY79JGVMVcYpob14n6gvBm",
  "key12": "3TWmXtKwq7j8s6nTpfJvHGwjF45VDdFB4jHnone5Mbvwo3Sfcxwfee1MZZw5QVHjBWPdDA8w2LS4MSQNudufzRVP",
  "key13": "2DpH4PhNzg2s4NCmioeEpPM8pPPyu5dTBRdbc6mJvWbb1bu4919ec1ZiPJVDrt1n4PtNT9o4GH6Y8YqLjEfMxUdT",
  "key14": "5tc2iqHHkBS7vUZtemDAK4wvhT2FE1eecJQBQFFM28AtcnvMef8Q3iJo4dbLkwE3scPhjq1uUAqBHhtrNqcZ4fP1",
  "key15": "2hCM4Aiw4YkRhKS1nZiGpdiMaheqF6esRtD4CSVzELMWFkaPiasGyDoPym6xjZkGj785R1wQHqQPkRAz1QLmcJNS",
  "key16": "64Qj4JSXaAHRm7qKHmWyjeyCa7M1NehV5R9HHNiy2RHjAMvKpxK8htfj9gbQzTFrHbagriHf53M2YkhXiCM7ZvVQ",
  "key17": "bMM3fPGjAQc1Jrx8Cay1bdScWxWPv69Y7Cgac8NPZYBYUPbhRCeFngJxJ4J9x8WerxzRqYUb4opsjnVJUo8cx8g",
  "key18": "23SLRK5yeJPTq2eAacM6Wx62zbJWt2YqofsKXAiZYm84sHEAfcGsjvLeZyznuZNeMNrSTdwky6SgPvKjPPUx3Jrk",
  "key19": "49LkQnSYZxDMggCgQLjaxw2NMM74esrVp7Lohi37KQDgKfE16HWWJAQCSvRPc1XSEE4z6ALLX1bBMoe4wN55ac8h",
  "key20": "25MQGogWpLwhG3r3yKT813BFVhPRmdDB2BzAEeCtzRPnSwSzthoQfAo5UWFWcrfqTykTXYi83qT9MchbwHzSK4zN",
  "key21": "5MeXYH7zcMGTFWBKwguxGpUFjqjzQwx2ytYFkvRTxuY5so5nqkerbGoMk7RMHy67FKSKUdBHhuwMHM3mFUp6S6ST",
  "key22": "3uPujHHkmFSQEgknQwGyehjoUvWeYF8XgZtaHVxsnZczTFx689kSiYjpWaZB2GnsjjCA1FstfrJrZKtbqwrQDYRd",
  "key23": "2pVWhpM1iFWt6DDfr5BTU5hKaUkGhF6cY4MPMQAdk3mu8iLy1M5eH11UM56kPqx5Qf4xZ7dH6nXGAmjGraRBfxRn",
  "key24": "5sLwGiWR4o2vdV3TfoVrjxUwXmGk79SPn8L3Hna7tdG3S1WtzQZxBmGM7CEgbU8i9RifnPMzKcks774YBk6rSC6i",
  "key25": "3q94nUD74Uk12iWrq9AQSwsqiT3WZXEPdCcKnQdMLWk3roeeWu6mTC75Tj1zYQuniebKyeWxW1wXZ1NrXYCrDDTp",
  "key26": "4889WEhwNZeX86ZkCU6vpUTq6Xq4Zto2rBL7AdLSwnBP3hSSAzwJSo57Et3frrf6RFVUEYuQyW9Q6eCnXeAGELkF",
  "key27": "3LWtwQQT3JtSKwULWTm96d9aoRWvq13N97P6GoLekvCsYMhL295L7yeJxZQXfvRNBrdpJSiw6t4XQnTt5c5s2WYN",
  "key28": "3BYzHwpKp1jAXH35SYFA5P62pHJUYhwzdPhybc5aDWaBzGewJ718SWX6Adjv9zeh42u4ZdLUf4mVrDux3mXV56jp",
  "key29": "uvvGj1iiC9rpfAECW9Lqsn4JXfqjGJ3qJD2gPpktS9FoLYckk7jvY5Xo2STh6uik3EkYh7rTWzELVD2Siw1KVkT",
  "key30": "2P3ZaEki7a9cmLrSW6W6qmLdJ6nkGh4bmhAAGN9ZPGiT6zP1VfCKVZJcFqkBN18VwqaCYLCbTguSdJoZ1h3PJUCw",
  "key31": "2UPSrDWD2eAWEeoiGNz41x49NvQegxhcPZNktNgyUaePQvw7gC19EgprgvcXVcs4DEVVZ2Q81pXUg1bFVVAgEbmF",
  "key32": "3bj7UNyF15Gurvu9NVjkYamDT1xfBQUMw1G5DFsoTFTjSn11qNiFtwUTPUAYrQkpUsCtDopTdgApFE3orbhX19Aa",
  "key33": "4XeDW8zewC2tiAkFKqQepzmnigXWYZ4coB6BESgNfAGnUaTYq4qanjUcSidwhZbn1EJdjSrQ4hdGB9eTZuWH72bW",
  "key34": "4V1Q99uiZ4gEmUHQ6KgbSfDXhDeUGg6SWTx5pRm48Qcv6iAHNfkB5fWyvzmaMMUhtoq8da7DTgs3tfcj1QCHNwCX",
  "key35": "4ZT6vBGk3TXE6ygeq7bv8KNSkuuSGjRGRLL9dUX5tt4o2yB22Hr1eANhdkWFoc3VbWYfVTSV3mWBoA7hbPhkATSv",
  "key36": "3jwJojq36y4CeTXZ6fSGKz1e2JXJKpaUiaTDvSbhGWpj1f9Qmiv9uqA89puwwJe6thRLsfChUB48MuZWLNuxVXtY",
  "key37": "5LiVvr3uWAQJSocszo7VSTupQgvJRRKyqBMNmoc6yTcAWtjC1Ds1cqVgHBdLq3jzsejHNWFiDZjkbBRxG8zpGYHq",
  "key38": "3meNWnsUuPL2cWSS37Hq8pmutzE9g793phNX3GacyLmJCSUxRLuQnr6WYsKWN7co5YD1fD195XjmcDnnis9VGGH6",
  "key39": "3uMf2UTpYmH95VgbcyXX16hqgctsgj3Qy1X3cNT43kKXwBd4mx8Mq1mRRtT9Kyo9ftNrXF22ziFgPFV5LkcZSzdd",
  "key40": "3NzsESWKpnxhJnninatEiKnVo42jUtMw8KiEMwBbJ4RRAJRoNJT9KYt7wUPH8FFTZQdjFuFEwLJCRMcdeJFrA2Rx",
  "key41": "5qff7dBbuuKU7bXZMtHxSdaZXeTEWrqBmpqHY2AHZS9QXKQiNB63fEPEujUjLx9VPJRrQgqUNaH4vxsDfTu92nru",
  "key42": "3tPvh1zovBE9XGdERjBASvvz9ENP8Ms5G85gAG1K3nsUwvc2w2whpJC8XMFhZksnF1FTKSnRTMFekGnjxcgknbBZ"
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
