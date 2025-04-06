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
    "5y5sGnMwVFGKogNqytyzn6tgEQWNDmobtASGdQF9awiowbQVNtYnfqfbdDB7g6GmC92Jxs5cAQpP65Z55Dm3D2WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pfH74EKMreaG3S3BSEMRsNyAA9ojrXDbbBrMQBX9vKE2RzEPviHNpbuK1xFXvyiMRS8W4e2PwJp8feTJip6ZHge",
  "key1": "4LusNTgGqYrYAB5RpR4RPDvnte8yzmPi3enfhsLMeMKg9cNLNpjWHJG2Gzs1JZghYbywbVThFtSdmcewKPCWVSjw",
  "key2": "5LUrvPhCnMDXdhXGdhyDqpajdRJb26YRzMQDztxfWBka2Fbx7ubGVnMtQDtkBEekX1BKrYRHBrxCES73vnh1KFCf",
  "key3": "qxG5rQEJMP5kupdx6yKf3L5JbQEX6wfzmDnBkxnfmM9fNSoqCkeDGBburVz4MjaT5amx7RrQERv28SjuHvFXELu",
  "key4": "2Yifb5WfBLts36qceHDmXjgHT7RiuGzKot5bg1pf8u4qN18SYx5Gg2MkhL57VhSb1D9ThF3sqL5v55y9LeZjYqn7",
  "key5": "3d5ZfJvFDhTDpqikXqbss1DSCciH1WY1U46seX52weBAA54bAqatS8szYDDDm4ZJnfXJmVmCt9cJtfPnL8oQfear",
  "key6": "3dfwREwGStr6xqUvRFbo1WmnmETx6H3kVYqThwD315xmDKjy4EYL8x6JZXBHufAAYdHtYre9uWmDRELLHgSksLAg",
  "key7": "4kwCL7fhnmMwDWUH8WD2GYBPi8cgG8JXMMSyezmNTrhvfyceo2sPYCowhTxjexbSvhNBq3huSKDjgw3AnDcCqSuD",
  "key8": "gFSCuLD8REG1YtLdE7S27BRpoLrBrgoPfBbSuK26kfknAbwUHyg2b2yTcdAkQetXJxnBwwJXEtfXPpqHejwiSZ8",
  "key9": "aaLrWa6RmEbytznXRsmLQuupvybEEYY7v4HY3KBCRHnEspdd2W2CXJM3heGQKYbeuV69BX9eRPwNwpzngMfbCs9",
  "key10": "3W9taim4Qiyx2pYrVqZ2JeyqA6e2q2oEz6EdAMS2QhTbTx7JbPvJVZJCgEgfo4cNdUxDn4exBJpknSYfVrVwnPeB",
  "key11": "3MykY2HhPx8k1rRgPb4GrRLKxDupBmZd9BpKLpFM1UoJGk874W9YTzwMzmJiqUuHK5SJ7GKkiuV7q7er8EyL1Znb",
  "key12": "4T8n39UKjJFuBffRsvJRVtc2pjiX3pPEUfGJutMtUtf2LeVY9V9mmomFo3hjcMbtjEcmnmrYHKPLFU1xfjnMoxiT",
  "key13": "54Li4z5haS7z5nw27HaTfrtqa7uq1LcLj25uo2DdYyzqAaQJwroKVjGpcTMu2g7TeUkYNsJyL65NFmtktJQZZwQ7",
  "key14": "4ruBkswBoyb6eXgmdiamxAuGx6Riih9pWtpoViBsfRMnPfGYQdnS9BZU5NA2HHnqM2XXW72gPZKMAeKgc3kQpJKv",
  "key15": "64RkBDxZYwutDiMpBupGBuAvttLiYvtjaxWKNEenD1arppko3wj1YUtCECDQkK9vY9UyyxfeesQZNXy5sRzg4ZEL",
  "key16": "4aGrT5GjvcwoAE8Ze7rRwHh5W12t497nexasiGC2QTwv4HmXA3AWjJ35EK3Qwjo9M1cjKrxyTr2KrjA9dV6yCDuy",
  "key17": "g5AgkACMXM1YgEtt2ue9jsffeSvWKXccK7k2WZ26iSJRMWV91MVsLgdBXBUX7k2uwAgZLSSrDFe1VjPq7dusmov",
  "key18": "2P4PBSPL8iQyeDaQjYtU9muTs7NBySAqDYAtMnuEK5YXvzU4af6QiB4uWUVE6m3QdaRX5qEz8wEr98oW2GCb58yX",
  "key19": "JCEyJebK2WVq5Ty38zuvzPFqji2XzPQkp2PkC3TzWVNNVTUv6fUcMmFGfCrJAXzjXD2zMpsHJb8MFYw4bYjUG4F",
  "key20": "yGpVdBpuaipjK4XgxoWmzzg22F2AqyxWRUP9ontuT48MRyMB9ZBSzmJBivVc5q81HHuE2Fy39ZTRxgp9ZXQ6p4x",
  "key21": "5wDoGskeGfXewjvp5Qn3AFzi393rTdi1TtK1g2H6ZpFfo9DTUoAuu7aR5cXJcrp98XpDBeE2f8UMvhvvBnJqaNNC",
  "key22": "595HiCfpt6N7LcbSgSaTVegZYjKd8farYAxExReHgx9mWiYfHSDqMYQXfyQ4uQ4PwLiNEHtkofozRe2eWmxzCDoQ",
  "key23": "4bd8GAMbazyoBJyiXqkhY6Y4ZJcUByGrVVh17tPZ7uXKoByJgP7JwQ7shuvaU3cgL24bFVKvt5LsWUqk6CaMD3qR",
  "key24": "66bwRPpcrjNwduwXomxBdZWSpSSottS4aec84URYwpVwPXReDELGWfWtTseCRRj7mC8uyx8i8YyiDJaLXqRvj5sf",
  "key25": "2jDj35jTEfmwKAdhEJSn1Q7KZ8JmD71vBRgAzC4xs9BU4LqS7L6Pf4GNr97fpoKMAJhnB6NNRRVRc2ZgFNpG3a2g",
  "key26": "3RaB5T4ZZ1xY3e6oP9jN5nS5ATd36fY5xfsQcw4qMxXbVrtAmqTEyd7yd83vNvguHYCvM7djtgogMR5mPvxoZhVJ",
  "key27": "2nynrw6Nn5bFp7oYH3tn691VwvVgiHbCS16XBq543qPNCq98o8WeYrMBnQU2kv3eDfe42jzf62yhub271aQT3ghf",
  "key28": "W6zXPQnifCGGkNyBNfXWHw8FBT4sPGLPisr59UiGmknSDha1dC94r6S8EtmrL4wySp7g973nCrUsYqAyMCuMkLp",
  "key29": "W5BLMbbF4Rez4eiBLfHJxqsdYMZ6MfU7mZjNHXDarFohpAoa6hDqagkVekMLtsW9vQtZp8rJ9eQPU7JTf5MGnch",
  "key30": "5oJspxebTUCPKLmMmLEgbY8WkgwkLL4CsKGAve8mgSCRsAotSyPZ2pmZvEjFDGkrg4NJh9Q1jGS3Qeq19CJ7xtF1",
  "key31": "4MZBu24xykbHRyRBH79nYz8dHR2iCUBjpL94GiEHZTc89UQusaczDQrRxdRdo6A7oRymHfdv7nPbNCCWwHHFuEME",
  "key32": "2mZjY3dyY6H4zPwfkBg6hr1yZMxGjCK9mY5WofJABwXSCWACFiutPcfg4UyhmDVfyu5wVkH9xxvWaQDayjHtS58v",
  "key33": "7oCSakoanbW1QVGWDM8Pqx82ExGqky2rjuE5qN4Td7Xc76YJxySnoLkghuMCJLS2aqQZkjMnyQvsitnX35MPgeo",
  "key34": "NaYPSq6WCDuQU4jCPEEixXgR8uCaGdhhSS1hMoQ9oxnUyNgSnAVHG17dMV3ZuLrz35kXhjWyuiQ4RBkGPicTSgF",
  "key35": "rpTet3tW2fwmsxTNQ1SUXZQqCSM5sNcM3Eg61fHVctpnG6vG1RkBBeg3KKGnExzKLout2P8Ytrm9WNgDFsacatu",
  "key36": "3RbE2FnrHsHv6J5XsStKaBdiLqdKK3TXpMbdMaTvCUJfUd9wihLsPB2cgat5UCQzWNfGM8oBt2pUUhBs9Pi9Vkkq",
  "key37": "GvGQJg5V1E5Chu4PiYPh1n6tb42a18aX5QDDLDyYoKXmijv3wDQXMicJCuRr9bcqbKpgAvf4zJXDNUCq7GZujxw",
  "key38": "3kTUivT8T1pKKSSmQ43iKVFxzcvA5pxbNQ8UJUHCas8bSCiyhuJVaMYeboJCbnTveZv2BXzUetUPN51PZF9Q36ph",
  "key39": "3QqnztwHZxMPMGPe5MMPPF5N49A74imdpFzFDZK4LYHNtdRX5S3yHyayG7HVdcnVu7MCCqXqwkSSionEWP8s2ZbR",
  "key40": "z8RXWqpT9rk9dJ3CU3mRFgWHMARAtM1nWnCYWRy2Aby7v4i9hye6SE6bfZDYZ4YJS8yCLvwRY9akkh69L6hH6ju",
  "key41": "2RbyJnMSXziHXZtMZyXdCVGCaEhAyRRV6HCCeyc3FkL57RRfsBw4Z1kttYFryVsgKavF5sJBrLRysJhJSPW7K7fw",
  "key42": "5ayUwmVFVpsGJ4wsGehBMvAxDhMj1riwhPJvPJEaGgNY9BrztxgLEJzjD2idFFGDLBLLMWtcDQ9Md7vsgcRSLNh5",
  "key43": "4ELcmxkWR6RHB3n1ULU9fNXTdJniQXa6eZc7JsknGVvbTurVFJdCcmQ5MKgqHG5Pn8Lgm9RWPR33qvKwMmZdYqtJ",
  "key44": "SGXgjCXWmrv26Kb412m6tr8rWAcBUpZGTo97XLctcZbdwPMe3LSG1bjV8L9D13pjU5HvxpKewbUSMbrVdKco3Qf",
  "key45": "42KKVdS9tSf7NKRcgdpiM4ifWRLSGZfCbrY98GLi4Pdro3rDsfASpzpSf9AskcvvRo2hhBikz3ed5nKA2JCBdqAJ",
  "key46": "TXriYWcE2Pm1KGgnMn8Vc7EZJVZkFNVAQnRcxuvZQ5YDVLTEijfVUji4XYqMXyvnDNKy66qP8g9gBn62qKpmUcD",
  "key47": "5P1k3MFaFyfAsKL3DdhAQ95WZs8BChARHJaRogkfC4EKHwujDoq5saZJ4F4sEQ3deLQtpV4ajB4UTLevFmZSYYBE",
  "key48": "49wcjxBm8QUukgYBGSydLTAGXQ4G5PH9dZSwWurgzcefVR14Zt33bZu9KgttXhU13pP3w1rSuZNMs1E9mR95Zc6k"
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
