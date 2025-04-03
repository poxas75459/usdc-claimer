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
    "2xUzsog8CX6aHiDV6LTuH84ev1Z8Rm5ypfbmYJ5Yv5bhymc6jdzQSXd5LaK8xe9Dfr2LKkngnusvmFPU1JXoNcX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hcsv5p6pbDMBys62uNVrDJ3dUrN4uFwk3LTfkMEsskscnD95w1u9Tb6T2bR27noPVGRMvDzCiGAmw7DmCXaHd44",
  "key1": "4R3Nnn78xsGWufrS6DePVimN1LMLUcKKst9fsfKJgLWqEcZP7xXx9jJXZ72S52VJCa1BjWzFRMR9ogndnntw4Qix",
  "key2": "xLK7zbtR1LN63p4mw3sjDTpum3urZb3YJMRVpCKKBeL37j5H3H7rL1JN3ZWyXZF5XYcXzNjCNoKSPX2b1dKGuS2",
  "key3": "4GaySCSVcEPHoXXVjego9t2XoijZLabbRX6yaKDUZkHgsS6XBU2FHAN2aoa6tY4rREissQvHgAfobFkdGpwDikHa",
  "key4": "3rWwofWEsa1mZKTRfVLwngfeXtMAM9D2KV8B8ejBrxWXC58S9KmcPQZUeqYFNT6USFPFmDRhhmT9wA3ZB94HPnfP",
  "key5": "2XXpReaHTMiQ6JUudKrzNabvMzk3ZRxfeGawEtq8HjHQb8R5NAqMGB49oFwkrtQKKwbQx4erDaubThY16Jv2mXkX",
  "key6": "3pmB5679fu6tVGxWmepSUvSCthF9RjJJmC5kQveSpjVW3EVpbpJqQu7LEwDFKMqi1MWU8kf1EgY9feHEuEPLGmSY",
  "key7": "oaonAJQBmWRE8gP2aTMmcHRPGyLzAWy7N8ejRErvwELHVsLTKUwrGut5m5kGYg8m3PBe6m9N6G9joxyiCx6sFBZ",
  "key8": "3G7tgFXimaSTVu6CH2rfD3TPn3gRapqofDM7V8XJvziSzLDthyfsukasRMQDhQPoSQ28S3SgKCNQVDtX3KNgS9yL",
  "key9": "xPuZdvEQ5KFuCEpTYeawusbmmxDCCde6CS2ownj7CMaUb4YMys4kJ5b7gqFgzFHZ9prbNNvyq3F89dfq7KdJkT8",
  "key10": "pN7T7Hp8KddHWZvU52EWGhnBRmdy3C1XN67C1BEC7yoP121zuux8K5BznkJjt4ZmMRv5H8dBNrKkANwegt2xr9o",
  "key11": "4Hz3ueYhLBVaSvQdpQ1sNC5yc7t5JB5gMZoua3cDQsyaM2vKYZyvGBu2kdTpdYmDij1PNeVfLLBfZD3gaMaj2thz",
  "key12": "TKFSADeZhVxRRXaZdoH4DHco1Xobca8gShv3fpcTVMGLyq7Gws85vwU2aUQddHE1PePpLiBjietkftvRsq65nUt",
  "key13": "3KhvDxVBxuwCyJk4vxrfJKxuXPCtF2HE3XxyFPbtxRFxPSrUjWUYGFi8XqAtbHR9m9KbK2C3D2TpVPohg4wrB1Lp",
  "key14": "DBqiwXNS356T1Xp26e4eF4z4hK44zA8QRWo2S44MS5Xo4gpyp6fpveZGrbe3dpb5kv6ZL1eFxKYBNV28y4N5i1W",
  "key15": "55BDzz8zfUaNMnyUdmJUekKomEg8Drt7xSSXCgboUpyhHmmgnGY4vUcDuNrSurHeE1QLWqam32BuQLzToAnQaw23",
  "key16": "4qAwYWT7vAcN8mRC3M7Yr9FcmanViBHaXNthxoLtTT7ugQHFpyae63i6PZkPnQwD2zU68vRWykeRbt9fKt5Vu7Pu",
  "key17": "51yy1piYewwfUJ4L1Hd8hZCdN8yGa7omf22wpZTh8MaSFdq4UFPrr16wST5D73wizhbugnPB2rGxNiy9V9hTzSKz",
  "key18": "5pdA4zu4tWvDpspqLjqAasYDY1Wo4xzp7xeEXCHnVkVvkuogniykHxLidCuUnDefWjf6FJeUjwSw7MCYuebgw2ut",
  "key19": "46UWGubuzhnfHK1PLQueVFjHj1MUNR45uDeL4FZA7kQZ3Vv38sBGrxDJD5KW33yJQuxEByHUVvFq8CWJDwvBffCT",
  "key20": "4kE5znNZZHB3PpBELDdH8DKiwfoQKUJseKSQpWxJfGJjZp7iGwVvmMPUsKSSZmd4UVLD3sM75SosPTWkb3pgcb9e",
  "key21": "63n8pmDrtyhnianF5hzj9onraXk62F9TJ5uR5qGHDBpYzAUTCUoYQMN2Li6gSfZu3c7HE3aNd3TjMEMkngEX5YcJ",
  "key22": "2y5b6JawUqkv76z8LLWDw5wDt1eF9TucTS32R3BqMWJcVtiBHDL5zYKfESy6HDRYBJd3uKRhpLQTxAtQ4kjBagQU",
  "key23": "2hQbM8HBkmywvMgHUhVbW4neEycp5mCtmwh3aBnFm3uBh3Ydzn6rA792fdvqKx5M5rMMQKBGJ53C8tK3vNbCDA67",
  "key24": "oxrfJUoUBLsMmhcRovzb7DUdA4FRQaEyHrk6tCv5pA4BSHzAPCixY1sTGPgnf7obUTB9kauqPD2ZzTDivgnD9D7",
  "key25": "zvv4NcknaX95UHUfseijtxYqYHEtEtMTCLWALd7qRqrhwABWvizy8rK4teR2GSoSPSNwXWLFTwyKxjXh1eScCLP",
  "key26": "4xsx8h9ipfErZB73XrHFH1WYj6awZJTSm9MT4FXNBM4WR5Zbn25Z7gmqi91nE2jncbRdUPy1vNPQ8oYRjySzHMYh",
  "key27": "57h6jy6A69n1HuEXrK5mGSQFfvCvYB4Waw89KPaaRZyNsewCMzX1vXBYhFHn9YTXoqjkNspj8cakerseV9msbdLf",
  "key28": "5CrKZgDQ44v7jeez6mxQMV6zzyMSuYZzvoMcvRPspYYw48TyV4QPAuuHUE5pCVMipxdX89bhebtyFwet6bEkY8C4",
  "key29": "4wybB2FFuhznk1Zw1Nic4qQ9LDGAXJTVBLUwtz226X2VNJzMcQ3LKT7t1iUDJ1X5AgvdSPXjz6osfba29H551Wq7",
  "key30": "2mvn9WHYideZvLh53B9tggpymGhPEPDyuEJYfpCEuuzcyeL5WNZSwoxDTWpDKCZv6uQKZBeuv4bUsB2mNyJSE6Dn",
  "key31": "2qz1niz5h5jDp7NGea1VmXr1eMn19h8UbM2P4tEpFh9VE2f7XyKuhCpVPopf7Z1gBmMzJKAU2eVvM5EQyXPNkrcV",
  "key32": "3wxY1cGcV3qLjjQYGV2YpmTt2MGv3xwksEARzwCZgLqRTddKLqvzPyJAC1Db9K1XqonwGMatxcBUTWBs7D1E2CPH",
  "key33": "eahyLuHV7UtzYeehFjQ7ChFucfAJh3XQ9Yj2ZkqPrvWi9NPdhQx6sfS9o15n9y5TorjUWnJcayVsG1djKbgNxDv"
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
