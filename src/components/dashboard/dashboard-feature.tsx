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
    "3RMtm7dm2NXeuXcoYhLFNKaxCWvjuXeG3XzNxrPNN7TFDhC3qU2q1rqtuMz4oFmxyZgcEp88aW4MHLrnnJtAGnkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4So1zanAXXerBKsAGCQViyxMZEuAvCH8U5Xnw8N2JxHhY7DGtYYZyXr2wWydbfz46GVW4us877ZM38XeN8akDdH4",
  "key1": "5AnAa6hotLVDMpYAVY3KUuiQty2ha7odWJp2FoKXf6S4MDrdGDZTuFLJKkRTYP6kXVPK9XeggKmSXMhCmLGSAFYU",
  "key2": "2UgHjZbHh7u3LGpeeVxxn5wCyGLJb3cijZMG1ssGY5pdd29dpjTwF9uwv15xxUSX3Zs34b897V7Y9GhMJjTpmfBC",
  "key3": "4awLUiGBpgmtw7GdicqyeJc68b9btHyMWkY6wY3YzqQSba5JfFoUz3vjh8RZRVujsqcMAed13Epp3aL6jD3cjSn8",
  "key4": "5ZU1DUHAxFM3YqGYqcKWG7BszM8DpasgmXtzVuJvBMPvKRMrh742Ls4AgFUe2n7xwDZ4D6xAnRGiGSyXrU9hoq3K",
  "key5": "sQKfZHnDFXr3D1fUNqp5xCAwYxtdeJC7urDeGubhkqUYHQYxpyVRdsqqxrhq5kbUjiNfAfQgywhgbh2Dqi6hdDf",
  "key6": "3FQWm9bQEhmphHHSFVUJgTMYSecaWutgx8uNj7JGw4Ay5A98whFY6U8ETPNMCSVFMtt7eTyEokmTp9Th9kQHFr29",
  "key7": "3BtFzhyHZMVVfTY13VP9yqQ6Pw8GEzta5Aa9KLZSpSUZNTYBgsWWcCecuAuq6MqPyadjRCrr78PwzkbFusMncfx",
  "key8": "33BqEJgC1KSHQNd2DYiERX4UZd4itmfbxKDJ3ejvWqk8PjSBVCBARqZ3Wy6oseHzmwv5UUbAEw8HBDd2zgitFJKm",
  "key9": "2gBU94kbrhhHPzQ9V1NjVmtCyfB22WbV2LqY53QbYwAHT7dFb5udjjjLCrEYdEJSr3npx3mJFMkG9Ct67YcUah5v",
  "key10": "4GXaJ1mQY2ivymEW7Jd16FWLZ82Lo1ogqQSWW2UtBAebFygsvX5CvHx728amseCM2sXnjBsMXS7YfFXyBcXbermo",
  "key11": "2mUb6zc4f4NVXdMNRM29DsevXkfX6BWNHHU9nMPAyDoWJP63jW3G1BvmLHD6BM88qTZ373aFt76AmC8sGe88U6ig",
  "key12": "4U32JMeQLtrTYv4ULEyod4ok1P7UMVWEctfaTZ1iErLfWbh5b2F3bDGYmcwBcCdZEfUqphHz6Ws6DRsj1QEE96MX",
  "key13": "2H6gdAg2J82ENWXQ14xT9n9wfofEnFZLL5o6F5FgUi6M6nGgjdMQ4stqfHh3B7q61cUaoCgqcWp1SEDuWTQtF6PN",
  "key14": "afur4Qzwzj2hzgLGBVHmivCVoGGjX17gsbv9cy5TSxvJGMfWS1Sp2YGQZTnw5eJaYSXyw5QSx8NAJuZBZNr6MMR",
  "key15": "4XvDg3dzezA27VnPmTDHjFjqm61J4ZSNbwcuEjSwbBdUEJgEwJHBLxmohXeTuBHqdCWn4MRZJni579W4GcXzaZfW",
  "key16": "5n7rFmzchomUudk4TnyR3gbpVH4WhfSXvMSpDaSsxsFfqV9caTW1dkwoqqLquit8hMmXYEGyK4T2EZq19ETGcu3J",
  "key17": "65CjNtdDXjDY77JrcJxrtLY1AwFP6UnzefCaZ16af7MPhQ3KCMuFVNqF7JsDkGUxS1KZRP4a9ovQfoxNaphcmswp",
  "key18": "5mnvgMqcvZM7sZ4qaVnaYX2NeVAXh7JmvpkAeN7PVayntgbWQmuxATG3HAB7moX6jGk6mwH5k261PzKtdHrCc8Pu",
  "key19": "47RzTumcWB33WeeWP1LAzKhjKbX2X9GEnjFxZRBfuGsT7C8ne334bKAieAqQ54YhhR9QuUXg6HAW96aFLmm853jz",
  "key20": "4ATcJBFeS3VD9LanDMMbbQ1yHdtMiWU1PctNp7J2UJSx4UgeXxUseRmaLmkeXKk3cRttUnDwQnxhx6jeTGDFrxNN",
  "key21": "4e4yF31UwahAziNyufBDztUDnHvcLVBE17i7fpVPDpAWTczfPac7W74HDkVYmTSFTwhaxsgBJixujAQLnyxU7Dc9",
  "key22": "67QYJKbta8CZtVvJrswtcvGSwPwGHoSbPrknqvJJ4tZWfisvn8kDc12XPrwTEXaCdPFWzkP7AFuLedTQj5rgVZjW",
  "key23": "4hSXZj8Vxpmq2xmWMbsLCAHrPXkCw8H3wGjVcVUHGGqkLWsqs4eAAmpPfUfAS5pMmsEKejwRHEH6mGP3DLWZdwbi",
  "key24": "3QuX3fCSioFg6Z9UAGirZjpkDebUcWs7sg4sNTQKbf94C3psJNmhaaKNvoESWBHZ2pfLHS75VH1eaH34wku5PfQ8",
  "key25": "25e3X2BLthkGj5LQkYWrfHVFCeS3jDRuBWEhPM9hR6QodsF1xdfBc8MYKAS8qrS3mn7z6kmNSP62bQLGeQSNtc6A",
  "key26": "5HX5mGGcGXb2Rcfk8uhhAFUxJJGY6ynUWKFrSoa1FZi25MnpjoPTXxfP7Ta2mFHTDjnP9o6AvuvpJb9ceSb78T1K",
  "key27": "5iMDpV4jhnkGVEpnREXPo1X4RDqx4kKbgQmoS8xavhnsp7mwH6bzxczWsAuuh1f1XSn9ypJQHWzCMDtk8UsHHH4w",
  "key28": "5YZBBnMVDyi1GAhYujcY9voXnkNYRctJXD3jFUBZMtmKJcVFDEFtWUFxdVpdhhCdCcDZdcThGT6PXVq3aN9jVFmq",
  "key29": "5PMyvd4WDcfWLDaEdfg5acjn3hjYm3AuqPBr8fiBwbZ9mAn2wQh8Pc9r8k4Nd6eFe5AzPHQW3ZFL7VcSkuunXFW8",
  "key30": "4cNRV1wNoBPHaH6NcQoStFMi8JBZ9WfM3npUkLTU1NX23C7fEf6vRkPPhBFEEntnnLofinmvf9ddYFggnDiGnoBZ",
  "key31": "35sfAxD1545hgoRJH47Hfc7o8juFrEeD9BG9FjtPRXaxwxNkezU7wG3VxxnWWWoKMdVN8oa7bnVnQCDoA8SgtBWT",
  "key32": "udnYviGdZs6uhUJbvj59hwn1BhKm2kbM6PCfXB2GCPWdfUw1K4KYiJCFqCnjLQ8RJzYDkUyWfBBvEaA1aLYKEs6",
  "key33": "26UtcqwE9e2Fb6JWxKAD2GL46CfUaC4dTMM2Ts3AUR56FndKztsNd6NPBL3zZhqzhuJ4zPrtCMhZFbsN6ktKQVyS"
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
