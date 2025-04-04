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
    "5Pq77sAuNGQaVwoQoGZatNvVMAnLKSUdKEBhJbagD6hGWyagLYgkPE8WnZJnEutJESCYqkPkinS2r4argSGc3uUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQBTn1q293WDKL4RLDwVeigFCMHDm5fMyu9bTwfxL5VqzgHkWvMcWDjVRDF13QCqv4YiaN6EXMViNjtmrdFGoW2",
  "key1": "5yBG2r7Mg4d96y5wQ7UcXnrFAfGXb11SL8FhjtSAuPH6GLTdx645ARK8VdoJjs5GN5VY3z3caFz6deWG3dw9vDaf",
  "key2": "4TiWsMoWAZULtzajkaEucTA3Dj2wzuD5CtkmgeVY7F5N7igAEKzTjci3jJw2uvsGanw4MeHTZbSwXww1v2Gnr3L5",
  "key3": "oexHGW1Z5xZAqVDbaNc66LWFMWt9wKNfbm2U6vskXaDwiN2W2bqbC4xafAGDwkyEMDATwxiefGwBjHdB1RoD4uw",
  "key4": "5y1fP8K84jHRvepCcpYskZx55x5V1YhgJzNvw7qV7dS2RP3CwK7kNMMCtoj3VQU7UQxfi2nFeeW1xgkdundGTJHn",
  "key5": "39eb7sM6amYpfDBXSfufFKJM4XDhDEzcr35DWZvNETwjAdzqn8SPD9STPf4tCrMN3invasGhKRMbQQm9SPGtq3g",
  "key6": "42HhdPzzseAimE1SshpcL1mHsvTtQyJt24fe4HEzeL4zWCawvuPmgj2asm3WTic33EHkfvSr8bfJS3dadHp4bKTd",
  "key7": "5hoBSEXq8HNtctn4NJPPNSciwcQyPjDP6qX6W1QSjCXPosZy5R4iMrNh6AKv5MidMf2zhVSVGnGLg5DUQRBQgRA1",
  "key8": "4TBZbyTm2Y2A2h9XKonz3BQn7mFxXtEngpDuY6hzRbNapPjcAUGb7DRDfcTJBtexfyJvrPqYCFxdRwHCZpiWseTa",
  "key9": "52DTL2PTZyXyELDt2pHfTTLk1gcMoTKxzP5aLX3YqcUKo7XtDy3xDYh5EPsg1X1G5otAKa2MVBHaxMKhNLPCr6xv",
  "key10": "4i6vWvQ4LHjREFb5CCHWPZAfKdMF5ceuG1UyWj85yJmYFrmGLuJeFXbmH4Qz9G3GPdNxZLdjYHivjkHPBd6SR4da",
  "key11": "4dhqzXKsFqdpHtrT95fjCcZZHaB6JDcgDPDPetYoNmXHzaqrRvGyqHwEJqhbS4PnU1RdPuswpiayEk3LZwDasqkK",
  "key12": "57qKyTtLSK2YRLL9ZSaBfQnJn6XWSp3hx3RYxWG9zy8E9awC4wzfWoW1j1WA1EU3jmTXQPnhgfF8zGjq9ZVfWFaH",
  "key13": "ryjtmq9wVgrYokZykSWQ6K92pV2SBczzv8iq79hwkTUauQELEAHc1AYSFnNW5oVzA6eUWXkiZUef6TAxumGmezG",
  "key14": "4F2JnKshVsqF25jUjxwraqqBzUiSJxfDYWGR7PZCTwEpKjQj3oPui29RRzWDQtoRicpxwEu9npcKAJpdzfWN2FLh",
  "key15": "4PUF69enVcDXw8rRwTBVobaBnKeuskWQiaDcQbpmWFB3hhipprfcXr4NbKa3HFzVUc21uCi6aBsEPWjCVyxaJ8Z9",
  "key16": "4n8itY9FfSYNVA9nxDJV16ViV6Se4HAmskcyQwXFGewFTLBCLYdobeMP8BcMBHBKSV87RvpN43gBed1iA2HKvVcD",
  "key17": "4RjN2Zzmkc5adSmBtRQqmq7XumjhWv1Lwi2GYBdsuE5jMqcaWuW4STJdWD2DE8JYXD9UKe1drPL81SGstvaFqfc4",
  "key18": "BUHvLB2KcnAnukv3mUW2PXjkKg3A5BgLtWZ8ePa51vKXKB4ykBouaXDy4o84E3P4GUjySc51DPmbVCzm4BDLbc5",
  "key19": "34j1KDJqYA4eYiucTBBbpDw7dqXKMWYtJiMURqxJYJjeuhzXzd6GmbQoNdrJiJuCTKNtUaVnRdcq8btMoS5WZ72e",
  "key20": "3HK1RsopT9bQ1ynWHhQRumb1YCFdJUpuF62oK96NfeCfoPN7hydoX7Ce6o7p9LuyRuRnn5PGR2ftwfc3ekTNUsyD",
  "key21": "FJGxjnG7Qz6ZLjY2gMdun2k6bAVmhmuiAfSbP4htkqda7DQ19MiN6pruWy1cKoEyHjKZKVsi3xeYwowFCFE37u4",
  "key22": "SLX8QCoXFsovbyk77KgjuohmjDm39y8oUpudeU8EuS6qscGfZAZktgWvTv6NgRYvRjMkXmkDceuXVyMm3wXMQwE",
  "key23": "2MkWwGeAW417nRekagUigCzv3jPjaqmCz55VcMW5ZEiz2qVsUjQpR4m7iiewDxMbYBWG7MWcxTzaqRx3S4295Der",
  "key24": "2epyxRP6uhqCt7pRTnBjDdDaLZAsCnUcLETnHA5qaJ9tjCrmWdw3r2yuyAvXkHR14UcssiB87D17kg4CXk5ha19x",
  "key25": "2g5Uokfze6oJoAcpAbDnxsADMR1p9bUnYqm4rrcVLwgKHVGLN54inASRkcouM8RhhrzAsjEq4Rz5CRuXB8WzpqBT",
  "key26": "bSSH9gArY7rZxjyhJRDHn7RvYKtUTaoqmJNTZCVfk1xso2dAKBf3F3jNrBeSHj5qGnoDcWoLc5LUVuPaD7rLaCa",
  "key27": "37QJfqQHSYUEP8A3CfMfpbguwDHKYwuRmEc46hDwaEKuHmprxxw4y1AhwnLgv3vbUd41GuTHFVbevoBiVXLPLvuB",
  "key28": "3UnV3HpA7HcNW87zuLURH2Z2tQjg6R5yaDbVviAqV8ydd7BCYgKAUHN7sa4sryV5X3RjQSp7Z7BAnHMFEzTZTyXJ",
  "key29": "tLzEacvp3QHGVv7imjQwoQfxnKqE82VwaJQJbYmofMcm5TZpPiseMen5Fz8weWXwAVr24DfFUQPzbiddunkTNiH",
  "key30": "U6n2GYvShJVz2d4XcraTcHn48TrpMr4LtJdAYZncusWvA2HHr4gMn6Y5eGBneULWZPzPX7EDozMsxtn3WLT9VXR",
  "key31": "5CaHoFB8mXkQomk33PfQYzW92vBuY57i5C5GKr4HnSoATnoUjPucN3n4GZXJzcoKm29cjtNnfvKLJcCNcJVCxwKr",
  "key32": "2Kts6VxrEE1g9t4NvZ7VoCZx5TeNFDyo9sq5Uvm1MW35VFDjT4Wa6JyrG4k2yUkBvS3kyADHqK4fMF1b5sFUoFHN",
  "key33": "4G4rEqANRtRddkwPNsavjwVgKSbh9WBWMBMKg4Bhphp3AeUSnKba4z9GtpNsGN4Pvr6EXbL4SgQL5jbHY4haYjEM",
  "key34": "5kx2NyHWyW2cLzwJ876V3PrheTFG5RzgvN4pxmUUkwV53LCVu9Y8jgKWtAqSGucMaDFWmXQVnjTwHDSFfy1sujR4",
  "key35": "GzZqFiWfsNCq8Am38dm2cCF17TY5gXADUsWqhjWmJ4rfeyKT8H5zdiaNcaJB633dQjWn18VRtx9rRGcTTp4koVW",
  "key36": "bBEMNdFbYhnTjWhp3GUBUW6LkFtS2w5Tp9dgHsfpxj6kvZ5TbhQmjNeoHsbqqsMrHtPeYmZJfwAMBNFw9j8Ykg5",
  "key37": "4RYmCS38pWr4whbr5tCdz48ijeeBfPXAhRBbVL1LEHBzkUBEUCV61sHttMeUBK1nR7ct64YbKS7f2tpeFRHMJEGv",
  "key38": "4dgvjJPLjfxghaMb9ZLiQwsZaXu1noPHdtbvGvmheLgLywF328RMtdb7gXE9JNQVit3Ns4f9c6qTBN5MDoq5TQ39",
  "key39": "3ZRY4kTXq4wcxiePQfXJGhnbMJyHUTzVy7ZmnqeiAKD6rmVxV5y6v5FTEUiouvsqvBaKbCpg5jTA8XnMmLjNE2Sv",
  "key40": "3p4ipLXRtNy2Mw9J9SuyGaJQZADkVaNMyuaUAPeqP6TqtCwquQJEmigxSMjMbsNig1adRuk9iEe1zjgwcWJcWPaN",
  "key41": "2u7gwXGoAmu6xiaSbRvqtraU7hw6roZ9QMNQWTiWm3ifwg4TPzMjPRFfwNpoGeezrcoocSpNYndYeGMtFynmKSnS",
  "key42": "oyKCmPJhTChgrSVdtqRwwUpCmtyF6gfE26AMkwbzvx1F3qfnFNVdE6Yg8JAhg3fSxZDww6gGqEKgpHB582yci6Y",
  "key43": "2j5fDX2SukwrDt1JEpGdFG436skS1GwgauwkxxBMAnxEcZCczp8b8sD29LVmWaEjYvTr5TemHXdjQv6Cj6LHU6tX"
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
