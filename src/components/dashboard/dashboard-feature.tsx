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
    "4WMEyQAyxW9aTSKvLuim4kg7UEVYjLWD1YNxeTpngPg4QSteP4FRoBzPiqUc8a4ByrUgzvok3G3XiGyRs9bw3Ff1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cbco45eJiTkv4174frKnGzoecoVNf1YyaDimWXSz34rUfHdV4Q5S8d2eFWkspREVwaFHKMS92RjkADPddga4qqv",
  "key1": "2cFZTK4rCFjks9sP7us3fgvmtqYinUvP52AanALSLh9iNv2TAYWZXpkeLbaMiwp1tBdvACx4Uy981i5M75j3CSYy",
  "key2": "4p7mLGe44n4LZgmSRbgqTThdS4moafyFZhh1ea8b9wFobtAAc4gyt2pFCDt1D6U3ExCQZLsptJn416HNTjcVftJw",
  "key3": "3sD1Jcxqjy57gmmgjd66oYGb5XZQCeAPnzqTFTJ7U3R4ydb8jDuXwGi9QH1CvoNHFzzRxYjPtAMuegCSDcTkbdm5",
  "key4": "4Jbw7WPRC71zM57nhWRPsg4fVYgN8ayvDyjKBXRTxyfPxfFFrJWfwmEdEiYeYLAtxvro14UxzKCUwULSzBzGFjz3",
  "key5": "5gMdzxwuvwzzBUHe8CS5MQuHU7K5cqiHjMeH3LF6HZQ99EdaBe5SttbZH22RWtau8EDdVYxurcR27pgBJSUxrCNX",
  "key6": "5UPua7hfPX6ipxgGsGca9A8HK125E5YBGhEKcuemyoWLMaDdMUfFA7UDyjEUJkpAhXcWDZQ7S2vafUN6S1jUaCVN",
  "key7": "4sUxTF2ayo1qzgV7Mzun4h4vfUMeZFRfgrK7JPcjx8uNnEpxjCjPjFoEZj4cp351BQNeHaFRzzJWqTA6dGrdNKn4",
  "key8": "4CYNwA1cDSX1GFCQTb7UmUD8KafdZ3tcH39CJ6juabS91qtfdFowYoEgSSBcHfFymXZKgeSYSfEVW9AcPJfFYG92",
  "key9": "1EURiE7b67gmfpmf3BxSLwoXtyPRMwGrkkeJxGRnnSbSF3PsV671gE3wViAjbjBARgfsLZZQoYDyBeXcZ8oxa4R",
  "key10": "3BXGWJJVtppbKFM9L9yVzf2Uc6rDeWZW1Gnzai6DaEMTANKSy6hnT8HYBPGUSBEYKZ3XtUYiQMXfnTUPUi93j1EZ",
  "key11": "3g43SyCh9ohsi4sZ2W2nrmhC1H8uaUZvUW5FTnX7Hzqq9yxFnxUZb7GabHAdJ6MTWWcMBeGtqaAUPoAPJnhGdCpG",
  "key12": "63sMWg77kLEHsTGhi11UEnknZvGcPHXHw8Lt4zZK8Zj5dU34h62EexuToFpyLQPJg7Mabpz2VhAdG6YByALrW7fK",
  "key13": "2Dst8wGRRLTXb4HDQ6RMwPWdtqjtMcNUSGerN9Xdu32yGAZU8DCzFk2MCY5nqodYzS6u6phNmP3Pzmpv8edaPxVU",
  "key14": "3Hsvf7AMtSfQ7aFnbKaXqwCuhuNfYuALtcx53mAtjuTjoHFNQZZiaDkYPJzvkD9Tji1LYGpjV37grCdEk2BMUZEz",
  "key15": "3ANQMoRN5fKtggrcsKMTnudsbxnkfRhSLW6ztCZsv7oVRHbWn5wKuXzeoZf9ofgez9H2tQBpKRMRxertTCVjGEUU",
  "key16": "3GeKU8R24UkEBxTBAjh9VFGrfBjpuMNfkFzUWG5Nsw8Y9ASwmw6FEKwMuBZUQLy5t7KgjUhcwkhsAeXnDHRLw538",
  "key17": "67En8wEb2V4G8hQ1QWajfaXERcTLrD2KSvSiV81tyRH2cy1bZmCVxj46jhaM5Ed4fJWxDq1pYt6TSnm4PETdcL5P",
  "key18": "3k9KkU984C2WEx5rd8Qq6Z55XTFKy4FZkf54KDJnGhtsHHmCgG1pTNSRC6N2qCBPC93DQNvZzWzeYTe77DanMNzU",
  "key19": "2tJoK19JxHAv6zepo11dEY1AGw7JsU7nzJuKBCCyQ3vjfVF4w665ztDLTSvep6xhg4AZWn6AEFSdbsjwGcNLciN3",
  "key20": "5FjSP5xK4W1Hw4mHB1FbNdKiM2HrQwCcei1ue9n4YnVCYp1NMKCtMB4t4ouyrisQhXxKmeJLDQjrHCyAT2Qz6EXo",
  "key21": "2jrWS2xKA6qdC4AGfNmSNsxQsT9Zq7JMamPDTh76EDvVKoqZcfyv6wQjxsJkPuCXnzUSoWMXWy3TBT39zPpkwB8h",
  "key22": "3NYHkRQr8LXdMubkJH6JwhwYHxz4Bju3BgM8hQCR7kWtRfkqdFAxHQ3JBNBaGFNwB2r4SqVoyg2idLcRniSuTmmx",
  "key23": "3hkxPEWd774pNEozwNtqpVUsAGYtoWU5QQCRuRfQEBmemePnbKZJ1jcatnejV2Rj3dhjN4x23gGCMdbWmzfteoL9",
  "key24": "37mv6w1k7yp49zLh2tP8C7i9Xe72H5fiwm3gE5NMekyFTEahMJnND4hwLRjKsYsdtGoL79nNK4f8YjpHJQCHAUTP",
  "key25": "3xEqbXSoZ8EEUx1ajHHsGr5KhyKrTqpNYq5fukN29P9XJMd6p8joj8mMjAcSxMaXuSk4QWq54d9myB7AuzAm1fAx",
  "key26": "3f2ETcRfp9G2MprSbFptn9k4AkFxWEFtTSGCgzocKKpZYyBQ1P8ywZigqkF6mMwsPxoxsUYXLGQokPrbpXPaPGBE",
  "key27": "Qfc2E4wXsDh8GZFycXEYavWFYZ2QnLT7PKyM7LV9Af1qdsW26tzHdfAUXRaN9nbnaHppCjsegiceDpPAkt9YHb7",
  "key28": "5A37ZUvYh9prGVohiLZP1iPoghuGXuV11ddzoF4oBv8DihEZcXyF5yhXPrcMRmZ8myUiQoTjBNzPAcEABZ2ivTb7",
  "key29": "5thhTj1SqNT761pusrLaLnAi7ecAuVvCA2ViUn2hLd4Hq8kmjA77WcaYBTN3BbUEFKmMe9RBE79xicgTtaumiMkH",
  "key30": "32X8X9uyHHpqS7t5KgGtpB1wDTuBoEFeT8Z2vwyHmLAvhfWDgCU5q6TiBh9U9JmckyQwvGSQtYpTvJUoz14icSCb",
  "key31": "zP3d18AkFVpWicH33hTAXpVK6RX8mJzobhZUCrZQKt5CsXfUuZY3rA35QatGyDRD8hwYn143oewrWMYtnXQLdCk",
  "key32": "4pVggtS4dPJD2QAyF9KDpiGdVD51i1ehgxf7ADFXVBWJamQguEhLbkz7Fb1iJGrWTSwBQq4X6PzXJR6fzqJ95nKb",
  "key33": "23N24zPeFn4j9GKFH9t9oDWj3T4cpd9cCDVRDtDE7r7oYZxcc7mUjZ7Na4Xr7XUpXWvYhojasPsk2g25iqyVN8gz",
  "key34": "3ujp5UD2NW4zF7sbFJ3CZ5qWXPMgk4s81qNA4kamC5BfdjhMNqkpyChu9WcXeBcjRQDmJ2ouzkVXo8ZgDJfRW34q",
  "key35": "2XtzxvyPZFGT96S6tsj8bkcyaaWoj6b3yZz7BkqaXVrpBBduVeUaqHTBs42Gp1fbVJWMtYASgg9Vs8PS9aewDxvp",
  "key36": "2sjEbq439vFa5mToCXn3xPJhnU1y8XwE21jjqxHiNx7KYeB3yEgNKQxuH9Dv3qANUrwRhsmzU1zLxZmDtzqGC99e",
  "key37": "5psK5fkv7hvBYWAJMwA2qoCqYN4s4AoJd3E9uq6L6AuUjVC3JuzrDg4bSQ5cBWwrAM3Apfcvj24vdFApQJ5zqjFJ",
  "key38": "G8TKAR2Du8ZXgPq1vrKbbmcN1vVsAmaDeP4zuLRtGcPWHGZ3F8MVQvmHz2x1vjYH4XdXEk5WhhPKPGaAFzTKagw",
  "key39": "4AaHcR9VbKwQDsML6pVcFnh8mcmEWRFNABHSTwCNkhfeN2m6EiQCLbZVNTUBukBeoDSa3TBfK6s9eDtjhtBbzqu9",
  "key40": "24EDFR3nhtDRr89Fm9qvc4RBMLzZUFSd1sTLzSKRJzYfV2pasnqr9vefQobhPiGtAtdbDxEQsUC7Fo9FMHw9SJkg",
  "key41": "4QjowB9WubBsSAbmVAJc1qhyQYpbCKCrzS6zv17d8DeZrLoUsdEjvzEfKjqRzYvACBw2b1odmGahKLCV8CpUzpxW",
  "key42": "5TVFCmvak6MeWBhbUdpP6Qx6PVfbiwHWQgNqemjAYqWideZtrbBrRtRVi5fmuowSEhysomqfBCPRZf4Qktr4sboX",
  "key43": "3Gx2onZgwzXtBkm6TJ3UCja6wT1jg3jpC9dZt9x9cJt8igxR9zTAyqqNknWmPKwudSLTWMFSzG7t6HiBeGbCdT8k",
  "key44": "36YnuiSrPY6xAMWPmYxXvKhWsuK28wUU7ZeK8X3B1fULb9GPSS1XEKKcziJ8JxPBEEzAo57s9nQKyNjk8Y73U8K8",
  "key45": "xBeBeP55DY1nwv4BQ5QPU4xBkm6bKYHmZZ1PNt7FKqD2Fo2sM8HFpQMUoKggZWgavRKSYpeuymdi1HLXjYJvPTY",
  "key46": "2MCtYc17CEepz6sHq1FHHuvrftuHmRsHWVmtJpbTgabJdERcy1ANG6WAyS8vpwGh2hWFvw2XK8i6YtBwem1btNm6",
  "key47": "3g5KA44zRvjztbgdP9pS9a16oSMTePjkVMbicwimX6McYk5QsNHVmStKkfT3AC8gEQ5J1fVid857FAZWKEhwQvbU",
  "key48": "k3ScxDBkyQ3SWxZ1qCGfJdBwivNipGRNZqYLQEAy6Qxpi4gWVwHGoSUqnPr4vABt1Pho4shYLHb5k5Y8rybXvUx"
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
