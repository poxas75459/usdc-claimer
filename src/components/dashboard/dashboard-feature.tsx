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
    "2SUCuP6Rr7HdcACfrr6azZgsaqgtbXzQ8s398S26tXq7a8yL24NW819LLszPPbnJMb7oaLG7wwW2b2Mp7n9YG718"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iL9JXWYJqr3BdgwVdeFQRGq4A8MSRQjfLdLJ1gr1SQc6MibSMyDFm7j1jFDjkRHz3HUQufzrkZL5XFh4rwKp4gY",
  "key1": "2EtKVenHMHga7ogREmh4fi48EVMohXp7N3wjga11iLcDJ8edc6R2F4johUARAZr8wvFEGppMGLwrnCZeQn9PY9ce",
  "key2": "34oHrTFt5u3jzv8Rfpn3RDW56PLENi5Jr1gg94RSzjXWP3nFNWceTLB8JbvjcgqA3EtmYfJyv51Avc5nrECTLZTk",
  "key3": "35ZU2CQFzMfNujDWGU3tRAghjgaWjebyYHu9ZUBseVR7tvrCkQoVLcTQLUgnS3EMEQULZkS88MAfAixT7jLmADDc",
  "key4": "xDTAf8ZjtRstv3yjDwsPMhgnzHHNRxSDH4LhhZiuPXVrrqEZR14NwEBR1NS4r9ikFHYq48qPnFox5t8oEews4kq",
  "key5": "5AtD38mv6GSVfB72TdhbrtKAgbeEFHA5i7NebCvwiBp5TFBi85y58nZ8WMuWyhUoUjF5jjvk6Ao5aqn75qAyMdGg",
  "key6": "4TVqJchLffCBgC98mNaRPUH4oobva9sv43uFwjdcFuyifd9UEagF43wcf3dQ6ciDHCEoUzeF2K2zL6HV9RVamn4W",
  "key7": "55WBkYXCYZXjJ5t5mE4EtwzK5oinzgRE5rW8WYFE65xTYunANqCxjzT9KnjEbg6wdBRynDaFMEUJ7sR8ahw3a98i",
  "key8": "31TqHFcJrmn9B9wgQpvhxWHLQW2HbFXB8DGCayLbPMpUf7Qgb92ytn6fRGvBYQkNEPPyF3usj2hAXDm8o1Av7pGo",
  "key9": "byUNnRQgtLdUmJ2BKmkHK8N4XBD2uQnxsHmegAHiTJvkSwzYCSejANgoS6CnnqorLsCzVaLRDdJ13DoEyAZGRBj",
  "key10": "3N7N9DTM4YydDZLZV24ofzT1J3qQb5vZy4VAfC1i8wCw2USkcTTpd2pWowUtDPdWdqETGNxZhFAQTQrfkqCgHQHW",
  "key11": "4E8K8rGbht3nECXmJ8SiN5jDmGmxcCTRL1Km74wzuv4trkm6g34Fsh6TYqSeuM6iJM53Hrmv1jdsVHVUM6xdorja",
  "key12": "C44Ek7dukD9GSKBszfKUqeVwCeV8xuCZb9TxR7ZU9rr9JZs5pbRB4FPSvNPKhoPjhFKGSqJdpG1fGP7AxfcCbv1",
  "key13": "2Wb1XjGM4aYKmPYC5DEhjnXTmW2h53TJn4NnU5sE5iJ9PSymqkxFjR6P7pAP9XLBPBNzSDqvPkBT7goSBxbBD8NV",
  "key14": "4TnTS42bZRpUoAQV127aVFGLcMxx7ivyC244f14PPGxTtFv9f6d6szxMEmKiUpuDbDWfLeLW3Dqgof3HPQTqTRYX",
  "key15": "24f8Vi6Mzp1Xe8agDTasQjVe9RpmnGVWt7s6SFZujzjkjdgBJXEcfv7FCkvRc3jN6Sq34DB2V15r1h2q15mKgzMD",
  "key16": "4qwShgcCpifJawWxK3yumbmwEKNBwbJVF9SqDFV7Yv4iDmtd6iFMXqgs76GSjn6z9oXFnxt7bEtksKRFpEYSQhxu",
  "key17": "5yBJQu37vskrtcRMwGiwnhvMtY4vmLcY1Nhs1Y9PAJzTTJM4cMFyP1RmY4JiYjFLqtJRJgDY29ZipQAWpBEysAeb",
  "key18": "4CnyNfxdsCLtz67ZnmHkkfgCNucRkrhGDjCC9cVQ7wAwZUVKA7A8SfMFJAnUnEfQxHQWbPTJRRKK4QJHC9HmAtzc",
  "key19": "55d3CCf5oHPzcETYhoJiwRVutQ83dWjEmqoxPNAiGGP6UBYFcydbYh2CD6oi2C51RA61wVfp1Ms8F469HeLCsq4z",
  "key20": "5jmDZUDNpdnjxh5zJbzitSzvGxYn5Gvc9oxDojPosDYfsdJZyNmPKwo7iPQ29z6xrZCgPVMVwu5Jcy7mspWtXwzx",
  "key21": "59anC8uF3JCsszGEBKeErHnvwFvgHadXzWDCo1PSFSntgM4t9CiY29JDDEdHPH1khgxua1DRcZRvkVaCqLEtE92j",
  "key22": "4rzb7VW8erkUbSR17GM3dyGUQ8Rem6jXTHoKz7n65pKrodsMxCouSWjeoDWLNzSVWX4DWKPuucE8nB6uKoj186kN",
  "key23": "5xHsXhysP95s7PjiMCya4By2ckK5BuTcUpe2o6tpnLfztwjmRoP8GmeFzR8G14zLQFUCsAiZDh9PXwpQjq4MvzRc",
  "key24": "5YpkGPrnqQLFAYHAWRAHdLFTk7UhMGZcSQ2HM1np99YF8ZXSdLAYoba6a8LFudSgyoEKinvckqvEcpiXhjUZauSj",
  "key25": "bYaDXR9mrYTiVXjzgnzARWdCunPZa1HxVAQxBUSQtyJLfgKyhZongde1hMF3z6U5NiMV8GWePQ7keyWvQXv2v2s",
  "key26": "4JsXYeYAM7PWFpkCBea3VnbPuEFLA4jstz2PzRNVdkqADRo8YcPHUwCtsxjP9nVhFfNdufXRWxmLuDjTTL8Ua6U3",
  "key27": "3UkPzaEwFC9bLEkNqudb79rYWnEYmP7pSfbk5jiKL69fnDCbwMJWLCWKzKRN2KwgUNhdqTJEFueBUo7heC1pLvns",
  "key28": "3j4cAwBgfTdLNgSQLvK6k1vzwZGyJ2D1mzEi85qgVZzsMtPkRRFWkL9p8EsrbSYh3LR1KDvcXobY6ir2zcMDTM4E",
  "key29": "4YutdBFAHU83yvbaJcvXT8Dwj5iBCeQMPX6Jg7MCfzj2xasP1tUMo8UT4o7s34nErJ2zrA8qsZsDzY9acQ15bP6W",
  "key30": "5CGn93uSeUDYH6TGQcJEFSkGuCBzeGz3ZGEs1UttK6ybCysD8q2Fd7VmNzk6877FFH9hAe1aMALDhP3YYAVXACmS",
  "key31": "4Dr1oDDqJLZJxZLLL8oTro4GLueqnyKvxpfgSsRxts5whWNCPGV3s7rEHrqX5FnqzAZm1yLADwo8GHk2T9k4hqQ1",
  "key32": "4WVuCQsHUa78EU7CaGxTxqLVMoYxfoxqx2RVCNEf9jMsEzz9tE718Cm8UkGDeos9SXVnEZ868qWQgL34yhUC177g",
  "key33": "oZQP3WtCEpFD79LRTR1YL5GS6783WJmykMVj3aB8EiJPNX85EbeDEkmZHog7ePETvj1MhTtP7z9VsGJkNMdMRyL",
  "key34": "UASi256ffoicUCZ4y68sAjVRfpwazN3Q7ZbTH6tK48YoiEaZAZN9KTR2X7MspXQVn8ULBuqYingauxfTRaXAxsa",
  "key35": "644rqPKZGAw8UtrrhxC7NzbQAqgCWhD9KfNNEXQiv1uSRvPibMFoPa6AzerXMSc8SyGQoC8rydHy5miH2vTCwhe",
  "key36": "3HA5gGGPkqwfWsYQaV5Dxq1qknr5yUrjRdc22CfPWehshmVaNBXYbaXByZkkgSqgP8QRhZAxtq82539rZ3Lo7XzZ",
  "key37": "2PQ8rFdefSQ1Apm3W2prsnT4z6DqUDM2YbEGVCxXE8V7jg71oDN6DRDkEB4yXiuTrjH9Xt9yAWmcuhnVsao7sS4T",
  "key38": "LJ8aa9QfvbdRF2TZA3Dmy31YBXA6cHtMmBH2Fa1sJzvz1pCWWAHRKR5ttVJrTpPLGW7LprCqaSCfZbZ7KGBcWHd",
  "key39": "5ZDzE4XGRBBZ9TX2gsrNqy46vgKFqUaf1QRgPrhZPehdjMsUGcge9EpvD7hr4y9xLr1UmaFy2qkXMUz9WR9zYBk",
  "key40": "4f3xKsgqvtJ2sfBvUakGejok8ZAtWURA83FnKj4PnxGrkqRCXc8w7yAVdKXNBqbuc2nhofvuHVBGbeGYTj2DGmxV",
  "key41": "4pN5zsa1boveeywfsqXr3ujnVfHtzaMd7ca5D5HyB9zMaSQC9RLamJcmRdiWCZDDJeG18m1qzCQ4uuR44x6xYEQd"
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
