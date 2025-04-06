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
    "ZnNr2Vj46g9bcRj3ea75YoTM9LJbQbLWLVB5S6bLtpswYCBH62BuT6YhbXTe9BeYxRUtcLqhxhi6As67PxkmiiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2izDgyS45GmGQ7UJscrMqmxcrhZHekyDR6PAkSJqrdqqUPjgsGgjYo5DJUPKvKx8JQoeRAjQaZKGSuyCqw73cJiz",
  "key1": "2gGEfvWPLHEoUDihPrgetnQqcNAAN5Z8RZVxChw6dLQffN3cDpf1eKpoPtfgrvm1YZYRtuvQK5VtZNnsGC5MnqWC",
  "key2": "5kRWTLbo1o4GFPP5h9g9PHraU6P9QJE8wXvaACi5VhzR9QbCzFdThRPmNciCSv9C25LUtW4SGWxXLGoAMnErNN9L",
  "key3": "28BCWGBo16svNupjyhSuqFQp3KZkEA5SdH6B8fMtYRC3Ndj9ehRa7tfE9qTdqyfjcnVzNpt9euRq7AnJGLRF3BTp",
  "key4": "5msSUrzi1RASqLT38wsVVKQudU6Xn6MtuNBsZZDndj6FWYBGyeyanCQbwqrbz8iMAfeiHkJPs5g5e3f6KTToUvkB",
  "key5": "6HdZRwfA5U8McUbuzo4Ppw1RUoifhGpH5nggSdqVeU8STWNPnBSxiNE8XBUuqiQoCZKcKAVQrs89tgiFCRghVvY",
  "key6": "5Zwxwn5ybUtePwKipyFd814LJKRrdhSFeftph1KMu4iFyxcL7hvzqDkk34FP9USH7QBdgrbkXgRKieRccvYxFpkH",
  "key7": "5eHpSn369Nc2iyLr1SNqNeHHM666KWMyKgSQzB2hRUH5fPWZc2Gq7Av2178tgLgFMqKK1WUnPs2UnrvSALRVrNP2",
  "key8": "4UCK6SL5ZZxjxJNkZGdWoPcwQv36UqoReCqaWmk4aRpjN8uoqTG8SyKe88cPL9Jo38soX7dvoygmGF8Axo4P6EJ6",
  "key9": "4xfWzzj3trj4y4NAvrToLjcQkFjCqLE2qbsMwWBUB6E1wNt6C9yE7JgeEGziPpZidqp43UUqd1YfZxJhNRaXh7MC",
  "key10": "5S6969V54sC57UgTxptyCo8GtuyfqauASGbngCyYKyhT1GbJd2Ecis6G6JddeEMpvMqcaFwNvJrkQrZQn5kNCrjV",
  "key11": "2EHYE4fQ1g4Go2fCSJ5xgyDzSqXKwkSuwATN6EKTeC3BbUCMVfJZzfTfqPhj3G12Z63bioffRnKr9tiedffpT1nm",
  "key12": "eFgrm85LEccmD9BksXiusNt2XT7QPK1qz4mkCySx4kmmPeXDLzEPSL3fGYznneEg9GXEihRgQu2ADrppM43PFwh",
  "key13": "3FK11PRu1wHx7sKaQWe8W9JoFVjGAtXjF6AZoWesVbPaYQNsqPkZ8J92RMV5bp7eTGqY5r4ALn9Y5G7w8TtEzYVV",
  "key14": "62HwndotcZ2ikEG1zCJt66g4TBu2dRUyf99Vnv8Cbs9vysnrTTnZyVt8G4NWWwbGv3ErSV6zHwMJM6pxFGiFv5TP",
  "key15": "5dXx719GFHQ4eNVwRMmsMEagRGkPEZ48BTyatgzufeAMwSU7WdD8ij5RvLuQvNMNfQn5ahcBY9VZNPbsQuVUHprt",
  "key16": "MxP8Sapz9sC1wissgfJnkNQ9w7RcrxgGyD26AJizin3C8Zh1KA2ozQ45NgJAzPJmWYTKBBK5EWSPgZwtrThPV21",
  "key17": "2r4RXazmfNCgXV1JFHgCWZjSvtJcUygfnCEg5Eoi299KpMQL45gKaDADUYT4mCPGxAH8MUYbJjU7iVUnjDsfEJWT",
  "key18": "kS5PrGZ3emr8Xy72LKkNmNohQ4b9zzYZjwRN4FVuDZjou8JuVLcA4oqopMLqS73HJZSm116mHqdnG2KJ4jge1R5",
  "key19": "3kTKwW1NQSBPUiQZ7ndaksbRPijc3fShDwx51MYRqQ6KXXtzt57Gou1PCU46vsynuvSyoBPcCbZJyykQzbPVV7ER",
  "key20": "4AVRT8MDZqdjXkRefP8oBkeYngqMAuyvLyMs3gLUUpKsU2ETwJ5mSxBSKRtkA8Rgy2boxRsyWzy1kAr3aTyQZEUt",
  "key21": "3K8tyJVvSB9EnqVTNvYhv8aqNRSqhgiXYiK1dpdWFRoyrqi2GKvpj1QWd5cBjoKN7bk3tcoCyDMaqoWv8YaaDe3c",
  "key22": "4skqbJbPWHDGaP7haSApb2LrUeWFoi2p4yPYePu72UHGBZe33Dek63rpBFusVp8wRXScb99BNfdMDUAxJ2fdWyYG",
  "key23": "3GXAp9g6KnbqYY4HsPxfx2pwV5LVm5o6egj38oRJ7UkrMTU9SUwq7eCnM3LR2pnbaqmrn11cnU3NPAiwNR662b6m",
  "key24": "3ZskEqsNWxoyBZdBBECaLh84iA2NcdhS3cQtZgzM7mdrzdnWWEWzNGJR5PHNe3hWDJzufDwgGaGjwSg2R32nwP3a",
  "key25": "3dXkXfRWyzYnZ4t1Ah4eWSNvLaa3LX9dXa3XpsuvsRLCCmWkLsqSGmJaook4UGp1kr3TW14axfwfHBts8Tgndynm",
  "key26": "4xTFLzaeLfiD5sXmQLUtfuvBDYkvxYhAyTfx7i1C7J4L24aCXsYApUy4sLHDGgP71AA3LP33T3NpWrzzmUQu6r3C",
  "key27": "2w1PRWzb1cc3fu7B6c9dhLcCwh2ifchfachfskKhBZtF9eiLJrwCGXqp9YBry3vD4ifG4pPRCC93HMxyeQ56LbAH",
  "key28": "2cFCPVWuNcdhtpYgGPj2DCU3XdTXAnrh9iw57h5RAW3A6PTiiGFifJsrVis4WYQgQwSNa4mJYxCvyR4m5cJrUeWf",
  "key29": "2j7QkD9fVASWShVZCtojnqXGWidyygPekfYSj6QQQALfa2X8gW8GysMDrv5TU8a9F5JVjKvxnkgeftLu68h7BMhZ",
  "key30": "4gwiXmPntyMtHuQtmPmUh8tzgjzYgNcVFKVqwU9MkFSQXcuUAmJ3YWc6KdN6NCdtygbxx9FmhVFmhUpuD157GaS4",
  "key31": "4deUt7VbKeRTbUBXDWXocFtjigSUDZiT3cNNxqrFgGdFZjM1zWa74qvZJad1GzRs4hMrxWxAAEgrKeGbu1W42XNX",
  "key32": "1DMCCHGr9de1jzEXPDkGHLWQSZAxi7ZG2P4EvqVyXqBFM6buoLtypws9RSBgGK1yRBKozebuwXyKMggtmiB8AEa",
  "key33": "3pR6QVDvsYmWBLPP5WbwEuuLTZ1FaQneSJNdGNQ9uoPWjcVx3iYJed2wB18q9fae6SWm4fu5Y6b8rS7LWbPTEypA",
  "key34": "3KcAiQQu8G96NeErCPETGTAuzzCNCVoTJcgarW7v6Dw8nKPSYQQESVhJigC6bgS25WQg1mHputKsHxmyuPECkZ4t",
  "key35": "62EZHaPxxo1P6bqg5vgtYfYjcmF4Q4iQfAvJsEiAcNqwPWUpeMsRR2ZMzSg1dXVrUhmcv4zPoe4P9JcW7KrNytUi",
  "key36": "31wjULEPEAss8U2hUCGAWpq8XBHsxYA3HAaoKkbSdUDF5sbdGHYCAbLsh8KKyqkodHhqdMaLhdNMJkv1mpVw3mWK",
  "key37": "4s9b6EoDtVxnh2csx1kkYhhtmSNt6yjAiT9r2acvS8ZTAWhNEqfNkVAYoJMyRUX5yoPbFA75KKHirgRM2EssqgGQ",
  "key38": "5KA5JUk1LxjsZJCBGoTm9pyAJrVubALdyCJj6cTPGSozdwA4kWAmpscYGzyP9euXLkWm41cww4KJoPyX3uqorb3o",
  "key39": "3eyxKE4nnLVTrQ3diZ1ev5d6wDePTdxNz4MLzWE4ciY6gzqk7zYoW4L6EfGpQnV5EjHBxX7DBSWTq3LuXT6zLX6v",
  "key40": "tjEkokQjeX7AVzBsG4QWSNw3EqjmvHgNKXcrkxrFTm4oXQX9wM931kKmGguq95WiC2rYiSd6Ub82qVHnuaZp27d",
  "key41": "4ggXhdvGwkSE3uf1jr1b13ZfTHhKDEFfddB6xfARrJiF6hXCdN9Y29Uiuq5wTSfDjbjUQ3KEi62KTrGZ1ydSbTzp",
  "key42": "bL5sSR8mAwoSFzJHWxybVd6eLVsBt4z7PZCMPYAUPGz5VfuN1wR9XNipumFTu8f1zvJ3HaZ4aU3k5JbR7mruztn",
  "key43": "2SwNAYrBNYCLj5gmHG21ugfWKJbGfQRYaFGgNDPtcMFNso58KrMHTniVdrYWX3eypck4QY9twKMYY9mBupJKmVpH"
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
