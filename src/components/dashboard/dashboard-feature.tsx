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
    "4csgSsNRiLcskXKRXWVe5kqMMuCSpTSNkoVyrtRfEo9GMj6cQqLWRpXbKQGaFDQAauB5mfHNDegq4MmaogKQppvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sU5zc2QSPww4FJYv7aEw3hR1T5eMr3jGc2XJUKGrSzRBiX5cEd9Vh8QCSqVBBPVgCcNdRonUAKpQ3Q3FwCp54QV",
  "key1": "4UEgER4aeeyxq5h3veae7gaoCTmQD3fkdiqtp1pWuH3pumdtrNYHgDLEVyrZYQ4JysicWYtPCobvhkzGTCn87SqZ",
  "key2": "5ZYMpQoC9BiDkHPSVfTLuGcTYJGaHAtbUVXgYgaqj4HBr7uSnbGmGLvjZHvtYWYynJo6yZaMXd9VUaidB2G7o3Fy",
  "key3": "5PYkpWGTGjYCFWp5KbhpaBd5n3FUjvscNJWMvH7GZEcE9SHix8Epegb5RbvTSpFc2KXg2MgV4BqoMBoPDhGybbdB",
  "key4": "2MqddosE796zi542TzKDFH685TrWb8R5nash6rhv7TyeVvrQy3F5Lg9kRdJP2o52dJeRxrKxhJmuXVcmzebzXeW5",
  "key5": "WPcQaGqjxapa1eS2G8oaF8xK7Y7PyMwizoydEsJLaW8nbJXeksY6u27xX2JG2w3ke4x79vvGF1LueVNEDSxwtjH",
  "key6": "4geVsTeQK8UKVhYMkV7miFyemsCmp8Fi7ZodohsmvgiVcVaD5vJtB2tux9o6xH1qBHPtKJVKwkaFX2fST3n3HayQ",
  "key7": "48pnbT7oNY5sCmcQh5voH26PSkfHT12FwRPtZbczh4m54yVUpFk19RF9nzovUNCoaYPLHXz4NqmnHM2UCQTYLZxf",
  "key8": "3CMxsuaS6DUZRbKCvkepd9hDrV7yQe7WZZEKzEH1tmoVDq28XoEqWuK4jiKUe2SC2EADC89ac5u4sujfcdCBcjXr",
  "key9": "3L98PXf5paqn4md7QAbR8BPHsi3sm3Mk2QjUwnr2SaevjrwWsXNNvVkT4GVW5JJhASg5FSYG3mR3Jo8edTYWGdRs",
  "key10": "3Ji8zeRbwZm6TrNxWW88nygy9PEMUhuds4L7BhNazAtVE41UANNWo5eBixCAvF54usdJHFkgbMNAXvwWwhoYQXWd",
  "key11": "mMa1tJ5Nkr1cyMqgL8quZXD9FPkzhMUrsmeAeGDhzXXQMoK1bUyB4EGJ3qagxxtqboH37VqgVfXq1XQgcw5aGqz",
  "key12": "5znnf8EyQDBqSfyXVnrPSYpnEQY8RgpzMSSEgFemEPTUFVzJjeCcGb8gUsZdGRUmei8QWoySZH1XDgsixqVe2TRy",
  "key13": "3mTZenSMRY1V4KdxC7UsfasvhjLewwLXcjYaNuEwHXChQTW5pMC5W9eGSZmEiADVkQEiu1JPBR8By3FRq1zT3BRb",
  "key14": "VXE8EQWq7S8ASBw1FnCrRN2VeRzp3VsSSkB4ozvhZF1sWNM8ShxB2Wh46uxaG7qkgJLUUpCWex4gMaonwXFva6i",
  "key15": "51BnE1oCccJZUGucBAdCAUrdZZsEqbGSyW1DwmjJtAy6v7K9KXR6cXFNXB2wg3RrMDsRbG4ibf99t5i4vALUzp5G",
  "key16": "5738vs2XbJ2BWj2qXMwgBCa3WDh47Z5PGLg6zAYEnqP9viVNSGb72taf8CKZqvJuyaSCUvzW7sZ24dqjujYgne8f",
  "key17": "2yesuFeyfAHK7YSPqYxAQUfRG9FGhpZDXaQqkH6UtZr8Ab4fvCNFkUQ1oVFz7b47W5Gyz3oCWDHSMtznybH2ZTMv",
  "key18": "45yHVaMxRsAxQBV434AP2beYTaD3t15gNMnjvdwiozwixv8jNxdH59UqnPCPvfspZ18MMSncs2mMxMEGEWdo9D1b",
  "key19": "4nru8z2tSyC7Qf76NbvWcipAQPWeKNVGbbbuUhW2bUVf9b81bnMD5QeiXm6PNCsimDYishzUykGxzpK74sC7rvSu",
  "key20": "5a2uFwhfSPMDr433ETSF6XptxbKdAtDA51hP6SnXQydv8pzQbozBxDWS5pfMZDB8fLfoX6ycVmCr8hE1T4xvR18P",
  "key21": "45EYtesyE3869BYPfFXDBGMkGVKVHoXiWtFf2uSoUWDXqRhT4GjRPoH9ybHyYSpzrj8AVjZrupvYRBD4GzdH1mx9",
  "key22": "2TUzuQMwaFzFoTvhoWxykvVUGYZYH5w7ssegLcEodCHi18AkBMXohXdSxZomVFBKCTF5agMf6zQzuaDUmxG5mh3F",
  "key23": "48uotq9r2abGHmu5DsWVRUd9cUGMUqM2Y8EjvA8r2DaPcVwW7FoFtknvU5TjquvcJnR2pVbiYANXjWyXBsk1xGTh",
  "key24": "56GmFUK6kmGpQMKAxMZRiHTvbvPLEKK2LzzBxagtECHxihEEFx7ezjTFFhR4wjRgqZC5BYsYK8KK9wWCzqKEUA6f",
  "key25": "3qQri7EDLgHfvcs5NLzPe5Rph4FkmvPUo4Y6SpBmtWRoEfrxJQu8fpjTvchPAfdEe2f665wXookqFiCr8WFAHM4W",
  "key26": "5Ud72855g4PisHHuCySf9EPVr3PQ3bAzqvCThQ2gDh9vQjPjyerxdEoAAUtERc4tic7WEV83XvQbmu5ho1Sq8MkR",
  "key27": "3N7kXM1LoXdTe3fd1FbKWP919oZZch24XK8BmdkEJh4hHhcULuQsDR5YhmmVRfePzKcPtBAnqP1UhRDVkeFDZm1f",
  "key28": "434JYJniuPqttkRCQUR6hvXXejq4W5MJ7NTNgCq57hcT26Zry2gsshu4fbH2oNibXLj8nZ56S3TH36jb2gp7XUuY",
  "key29": "5x14RUHHNATV3hRcoCugKhq4PxFBGwbxwKSHUtsjcxe6hWLsrWfkvHA7AXZesXXSiiFFGf85tDeuooHDSU74t8w1",
  "key30": "3caHHPKiy11byBqJGWwTkvQwdhyYbknCXouicXE9AzgZQg2xs36fcpZBYqEJeVCPJyT4gbhEJ7hZay95aKXEpLgD",
  "key31": "2Gj4AVf9BxQ54gMMMHhaTLkhWovAXnQuNxfa4Jhw4pf6S66mUYRjnrCNs9AXcXD8doA3wQJBYfBXQP4XSkMTTi77",
  "key32": "5v7ZJphZsEZtmKGe1wpSU4j8tXdqytor16JnHdFsbvNb2FRST7WxB6hVeyWnPdV12xrnrCR3E3Lj7n8u4bFmDUfZ",
  "key33": "35fyMyPs4U94KYjsPTtBwJBjPNqfWuLtyC93pBF1nmWEcdpaFSaxPCU3yDvFfBwNMSpcG2Xs2dwkSmzpzxiCctLb",
  "key34": "4wDZWCqYZ93wp4C3eqUfVwKifj7kyPXzYAbaTMCjctyurC5MJjC35HunmMFEjtZBvFebNSBkRkoSR88zscjQDW7i",
  "key35": "GnPTx34XTQF3KGcZz1zFTaMHKyRW1FwY3mPcJYbrTmEsAkFmqMsVjtAQLmp2bUCtsUHkMpgBWdomncorRR6GVMn",
  "key36": "5BeyGGrSEhsjc4t1eL7QUACVrqivSa7Z4pcJ3q7ec76wYY36QFdUB8dQY2RS95vtaPvjnxgYHeDbPFu1oi5diA7D",
  "key37": "3R8EjZY1ohdDZXWqeceCttVMVTSY6CGAKK95PHMZ4oZAAy6XGJNiFRZBFcZQQv9EFifsLKfjBw2UELi5hHQmmgzt"
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
