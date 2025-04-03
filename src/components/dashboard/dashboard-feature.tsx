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
    "2mcucPkovVP39YSDh8iXycL9HfGcS6wqwvP3RqRzjWAC6vPb2MzcorD1W4ScbiXxPJXNRtuwkJn6MmcGz66fwWfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GpxrzMwaPvLtK4zfEVDp4wNw4nxxGMVAbBMheMAqAAujykJsbUQrpR6L42zfnhHrZsLh1djgXwQ6Au4SPPLFfGP",
  "key1": "4BYoETzRdUKt6ZgbNqqmxkzVU8iDjkwBAZg75SdBN7NfRC9REqaEYSSKqFGkHoMtH4DnLChP71d6nd6T5B4wxWB7",
  "key2": "2iebtGJ8PkHGcAYv4Cm631Sv538yzpVRMPo8ZAkRsYYw9bZN1BxZuyw1ogrh7HqDmfW1JpCTgQwMPGhhNRqbnoaU",
  "key3": "3TnHviEQtvArYdeD9ez7dDcpi1tXfQ2SnJ1Ndw2tkEA5wxfYBFLdfLRAM1a8ceutUKvC8eaaYpxV1JX2w2Z2z7kV",
  "key4": "5px1bpbTSjNdKGNX3tQitmHfDaXXhRNU7q2KERRqk829wxdurfN5dMBVg5KAZ9SsMKRhNnSfNVgqnBZYJ8mJNsyY",
  "key5": "3gsYUu9TJvxrmoMJXyjzWPBMHV4nhHdKt5w3cjkzcjscCt4R3MfL4zcezU2zmu2aSpDgPndieXpvD4t7uKDwkpZk",
  "key6": "Jzsw6zwvkFZiMkfKmU28jay5MoHjid1mRvDJPukhFSmmUa3domTBSzn4VqsikbMhJfHwDW9FoeqHtD8gmYwx7p6",
  "key7": "3E6Fts4j2MqbZfZY4XxThLGHsq3TPvz89nGSSM8ZbGzn1whSVgvtyAR6wVAiT88mRpXakcQT6QG24jSyaM9f4FWu",
  "key8": "5GCRfgo5PyEYX4x5YRfGdMkNixK45UXzfyPiYKh2rDur5W3CTqU8ND3AwfDT3ZmPhcbMBves2EMnvteQAMTrjqdY",
  "key9": "5s3xcfBjesK8QBccdtRJzcxyMPQoBWPet8SBWfQk3CWQZfTUukpa7dN3vAg1MkHk7ok6dQmEt2kgEQVSGRzGNoRc",
  "key10": "63L6FqwEzKbahoHdz9eMPkYH75UjC9W3GPfVLjrUfWjJbcCDhoXnhBuqoWFARAc7LdjdjsDbwXfjdGCrXpDzvpz5",
  "key11": "3q8v3eoJRpJH4fdMM1X5Z5hUVRbSBnzhj9jy6oGU1qj3sUY5kSxntRkiFuVfNZqvoGegZVSDk1avVENAizchJNdn",
  "key12": "4MoaWkXsEXrExFreVhdP2wfuAgT8ojWuCs34bTcrNKWf4MtpyydHMBbgXkvWeysRdqKqPWhbDw5St9GpKAL6G2DT",
  "key13": "2YNF1GtRgaoDYNnq4HrVoJ7LSAB2iqE4fgJDBJWjNWAT4Xhb6y8LYrHHJFy4QLsaFfWHyaoQzJZv2YEqrHSiSyhK",
  "key14": "mAyTAPfRj4SwRha9m8Ys6Zy4rokFksPaNm4gN4H5oghdwVufUY1GW99H83zv8SfQ9ZGszPYff4QDfiLHXNZLRxn",
  "key15": "42T6rGFjyc3uCoWGgwHsqRak63MLGWq5QQxxGbvyyTcCmajcp5rCNgjWKNLo4qZY1TtaxFvsXhdCo3kBpo6FKx8E",
  "key16": "2i91tBoGQVNndu5g6xzFre2kM2donzZCirAGgaUxD74t6eHmMciYDGhjsJQnHxBiaHeLd48v1ufhZYm89PmQi1Np",
  "key17": "5j87myrSV6f8it2nQU5NjZHCy6yEGQAeKyj6hezBi5NQ5VEMaS7828FKcX9QKApoM27tUzPNGiHrQ3Z7JTrhdpL7",
  "key18": "BQ3HsxRqhR2cmG6TYX6M9QgeujaeiLygDJPMKu8YdPEzsbMPvXPmeuRJELfBJZrqFBiMn1LM8kgQzV5pybqLFjk",
  "key19": "43nthnLpsPkF7M1kKP4PrMy7MHFwLSGnW84bLWkiCbQKsMRyESVKza8TS1KdmrbW3YKnGNRMVHDavs9QkczAAWf",
  "key20": "3Xrev3eXU79vNYAquKb9aHgtZuE6YFyiDDH9Dc6sqab84YumigEkZJgJorBWTHjcF5q8D7fGk2gCwC4khsHGoW3w",
  "key21": "nWWxdfkEj73bJiHHBrgDZVLdCV2bFPMsQ9PqzVtkAYqvbb4aBEva9vCTcHMWGrL8BNP2xZ7MiyVSNhPxKiHR7bL",
  "key22": "4Qs5ZAH4muRNdk4aKyUjsiM1yjGhiaJbRyCCuunSgea3mgm2kiZYFjxCM9guiqgMCCT4npeEkY6N2edNeNkBhuk3",
  "key23": "2XH8fJkocJRyEE4zbszusbiLhbYVoAeB6WsEPMsPKLuf8hCF4m15VkUBkaVak9PhwVdbT9JcZSUM7uSKkBUhZ12N",
  "key24": "MqoAzCZrxqEAhPi2ta6BCJ1bf9zynwWCAgBnoYf4CYvDPy3DCyAao3XQPNFkr1BnDZ2umYCpMCJbFAPF85YQMCd",
  "key25": "5x3DZq1h6CtyqAjLRzVKpGVu1UcBCxvLg7hXivRCZEkX3FEQ7npAMD2J48oqbvAkD4jdMcZJzomfD4uuTPj9vmr5",
  "key26": "5HtyeKy24gxk1gpaEskHtyB6dGUrUHxfmdNc3RPrMwkLkRZJ6oWFqH65Xh7sNQnduucZtLUnsaiAc5nrfWrrRMsS",
  "key27": "B67BUYvq2jyL2Hsk9yxJxHjzqmRAYYYxno6kj3yqXLbvi1K57DFjZSyXBKeQkSEaiMiNvLHgNyJtH5YWPwBz7Wu",
  "key28": "4B5QHzkx9srFtAxZfqwnT4d5q8mNNLSGMdswwErmq27Xp6mA2NJhLgZYzqQoEXsuZHjrMW1G3S6WihorVpaPcsbW",
  "key29": "kidrnjgaryJ64UpueSwKKSsQetSPXaGfRp6yzZaRNuQdYAqC7DgL4swpGFCbTANHv2dE6idDq5LBJyUk7h7ryCh",
  "key30": "4GkWPteyJz56nxusYbkr38CoLgh1Q8LYC1PrjPhWpW33U3WK8SborPDHmnrVVq89nb4oYJqhPe2dDfKMPhrx9HzX",
  "key31": "HJrY9euAHVpfGUJWxML9YX67htoTbuKCWtnDEitCwiVACEDUkeoTfXyQJU5PrxHad4FoxoK2qMJfG57yg62udQn",
  "key32": "2Abg4TmTp86RkqBzQuX6t35kTWMKHW8m24RGenmor4dK7FMz1hhugrrUfRdVUX6KScnfMSPwqzFNqsjwnUXzVhnw",
  "key33": "4ejYe7gQAzv8vNJnwtxdgZ2RQAttjpk8papfm6He2QKp4niDYKRwKjRCwANefAJsAQ3ie1iu2R7odE9cZDjYdd9f",
  "key34": "5yqgujm7N9S463mjuw1XJqrRTpU3W4Ezfrxan6RjSh4NgfycZAnYMcnfPMV3nGqCAsaeCSL5u4H23KC4LGpnALgq",
  "key35": "4amppe9kntps8Ggwcq9rmPqFkyN1eWdGP4v5EiyUMcMM1Kq9Vy3ZjrNF6EwNVRMc1rgWNWBwBr3d5RknExc9gHhd",
  "key36": "gXnFMALTPV9TkBqZHB5GWSFhfCep9ie6sJAaeFZPjpxhmB1mGefzcEuSkQMk1BS3RMSdp43NQtTEfBQ3iZusjqw",
  "key37": "5R6d5ac5jePRX3PkZVn4XDcNuhd61Cq5oZG6QEE8s4yazQH5CaDZvF4WRTgnFMxv3HJ9z9GXhaY4uCrqaDyGHt9p",
  "key38": "fBXCyFdEeVCWte1APzDvv3UtofeyfQPXXJeHqC8WceBPKc42Ko4Z16NzE11jGNkEw76VtdsHNiwv8s58ZkU8neM",
  "key39": "YKENv5wCAVxNVjiv1hxw7dt6veQzKjU5yDSXf46ZrChcTj3GgT9CsQc2WsUhX7k7DQnKvv4prnP6H7GJ4UVM3SS",
  "key40": "2fEjjNGWfgcvv5gtCrQmwMQrviP9XYu1RDo9yMLGDkjN8Bp25Gz5QghFWbxJsH95cBthdFRMo7MiibK2TSZoPgQx",
  "key41": "3NEB9XeMvs9XVmyYGPuDjQZdWb13T3hb53XiXgwd4Y16VSWipLNs8KA8LoxEBsE597KxJTjSJhNANGxjSaD465oP",
  "key42": "4ToVLbqYB3DGiJc4npoMrxhUEVddDnczBGKg77Ufqkcr9Q5roex9wYoCcZbAGt1YAsJevPqNjYdkgxFEiHJxGgwX",
  "key43": "2JaKaaGpaUSQP9XBWB1AeUjSuA8oCA4NGkXjYbeYga2EJq6jSUxgTweC48vW9gFdGQ3jU5kHauZZmuhjXNxq9Sc9",
  "key44": "3oUu2vpQ1rTkkpTCesmYZRwymyKmBLzw4FznyCAMWav74pQx8xy8nGF4ZqXp9gpTznQgj41d73ZTw4bSz3phJJ2T",
  "key45": "4324rE5xfLXZJAfFmpEBRJnw9Gc6rVvFGo9rRifrs9pSn754WSxtxkwrKyzCtyVBbKU1q326F7x8FJLxZoNUExjY",
  "key46": "2Rx2UU7xViVECAX8xXNaNzaoetf8sFtbGsX2PacDPpdZKYzSFtT8fdbbYWQerbRJ6q27TNTiAH4ESeCqMpPjBHwJ",
  "key47": "31F4uofVuRvBCQRsuZLJZNMAJG9bjF7NYWoauVji73KudDA9nGXac7yYTWTJJbWCRM6Q3V2V3LJrauFKNUvRmn3r",
  "key48": "rMCEinRS1T1ExNctcbQuHm2RhxyktzQgq1juzTTzAKf2qQQzhxy1ijELpgT2XqopZgNDCvfKYb1nixTVJqkDyJa",
  "key49": "4psSWyKA5hCTWdhjhbp1irXWKJwdhRRXEbiUMDTVSkjP7Dr3Y6gbWrC6oSrcBqZVeNvxo7XjSJSeqmrAfb65kFXr"
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
