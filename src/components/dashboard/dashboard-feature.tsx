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
    "3ubZY5HGFrxA1c96WAUpkzsQXMVFYdxgwp957Uo9aLyVy1yjZ5T4dr6ssczu97EEYiEuDKATi5N8kBD9n2vp5Eeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i2r41Yv3oQe923FugyLNsLttFgdbZHiXbLsC4RVDWdg2NkVHYf7PXNrHpMSzVgE56usxQEbtzd999jU6tZSFkHL",
  "key1": "P9B96LZefAuCN6ytcsX2S5h5VDWeu2s9kQCKr8BDRQYZ6gBNXMKdwX1kLL29hvVdFg4eiF9XrEsMotwHuHg6kmP",
  "key2": "Tdc3QjSuyacis8QiQwic7Gy3nXLYVf5r33CvWABvtfQocswoM6WimkE8TtSzHT9wPVGfD6g2J3Entde1GuL6GEU",
  "key3": "4GrsAYBPKunzDx12wTgjYChRzZvLPiW3jKuBchysCeZ3tE5vGnjzP1XNeLvQ4qTCfi2iEfz4FmYDgN8aE4YxBt9A",
  "key4": "4dLUcDTvAdHjqjrkcBJvawp4tJEai23faxqh82eKCYmXU4QLNr6MAaZDyY8dUeQxcJdKtHjWYpy2YsFonJH1ccR5",
  "key5": "84yco1Y7Y7YuTNJjCQbALmSWGFgJ4TDdSvJiuuqCpQvRuS8pKMFaxmSt8591d67B67ouZuJGwYTWwgRJYTSNMA5",
  "key6": "59vZhpmSum6iUwnjHb3gDHrBFwKCd34ccBkRPNPtJvc4KoN9oCtijogFqYK6ssWoZy8k3ZkGqqKZVX6epWX2iwy7",
  "key7": "2E9zLSoigGFD1NjDMWnQ4bVrxcKT7YjBc6ESV9DL4iimHaBxuPqjRCpFgxX49GSegzmUnekYKDodRNYg6JXu4PJ",
  "key8": "2irr1R7QshQiJrdkU6mAtVMTUDFRAXzuW7nLka74RWStikdDxNb26suYEUBkgNZFMrkMDrFRYjFAhwGzMBnzpaFy",
  "key9": "29vfbMYwSXwD7b3SAvE9uxCov8FMwBLidpNcWfD9MMUD3uwa1wd31EJrUiCsi4Km95qtGx4E7QA4VV1NqC2bDJeQ",
  "key10": "3zUAf7YFojgSh4XwvEH5vMKPqMhGuQmFjbdPULYvb1b3kzp9XjifuzeSZrsf8C9UGFMkjPrLfe5s9HjzwEvNgL5B",
  "key11": "4bSvKn7u3aa3zjSCc4GRvHk5EhoPULwuctiA7dKw7C3w2TjUTHPKSFGem6knnyudK3WSDKYhz4ofeXAwxjuzhzNE",
  "key12": "4LEUjzYCRPSeeFxiMo8rBxEZFyiLoxQv6W5cGKmyrCpcbcfCHaMnieKFJMZdsVAHpABGWFp7vm8r2svmApyfhhD",
  "key13": "5XeC9DStajMco4k8PEggTkvFrGKvEAySTeWDQQFb7oprzr1skfT44KSoggeMgcsCMBB6ttp1AwyCVdGFU89PYj2L",
  "key14": "2iBDASHaHYSfa9kUEdqhD9CQYkZhMBg6kjT6HTWnpVwwZfPSGnyWScCkoEZog7eM5HDaoxFcYk81SK2HRD3ZLBTS",
  "key15": "3n3SCV8arf817282SHpAfwRTDPt8QK4uBiprwwoXvEtu11veSKfgEuknmqvCGthsXzK6ucouea7B4PV8GwDmkwSG",
  "key16": "5DJuiwGxUdcf9hbkRMzsNQNskg374XNGVskUnRN2vhJzq52idfG1ZN8DEAy9hAkQz7kb7rjZGyhNRFPqcFTVpusQ",
  "key17": "8pv7hwXYbbergWq2MKCSSABn8FQBqKSAbz5gGNhhjDhjrsvsC3RRroVDoC9QpzaDXR9Qj3GTwjRoX15rh63qkmZ",
  "key18": "3QhM3eKZVy8M8QdthHYyM4rLcXPjUKnCxBJ7b8aq1Boj8wrPtSvMfSgq6gnemy13wzxHRTADePgtBbnFDqDQqvps",
  "key19": "2L9MmjcF8dEkbH119U7odtSBMySE4ynzbQAh1EMFz67syVrGjwr1j2sqkkjvBzvmEBcreyTHzeaXLEHAXhaoiFCk",
  "key20": "2mAs56KpK4vdvVumNanzuLTZ6nvps1Ws48PawvRBHSvUvzVnGahdC2H7S37xPxqXgnd9RLgmiv6D2ZCh2Dzpdi9D",
  "key21": "5E2BxYAZZL96ZLXYX4z2pL7eQiEc51c7zsusZD5VKj4jpvzCCmitsyRDLDtgrv28yDf2etpMmf1QBkYFyGrTtnjL",
  "key22": "wjdocN2CoKgi4jXPnbxJK6aPPhMz8W3moCoizg8PHVYSKu6hxoqR6tXgj1zhDXf8WJF8hhfpMWbBVUWT3EWjmqX",
  "key23": "2grqLPcrwmhXNjSaKwUEECi6KRKLuK1fz3xZSwxfQMWo3M2m5r4SxKFbgsNef7Zn5ky8xobvqKJmhuhSuGMed7f8",
  "key24": "2oZzLrqFrida6LjEwENCiCeg4ns5f9of3w97dkgTX2kCNQRjporXsAQkVZZ1nvdkfguQ88QZfsp1D7rEHvDNiH9F",
  "key25": "22sWA9R5FhmWH91CG4h5TTWypWzDCwr7jVtf9fxZRdnCkoLF5yCZg5jXsbmraxTjEW2Ptix7scpjpFARJYr3gRaM",
  "key26": "3bGt3vkicKmkzFTi7VxUc9H3NGSnitPRLSEg4RVFfjsh3kfQJEdjpC2kqVg5EJLLYJU4bsBxPwtNgLDdHpF9XMLB",
  "key27": "493ikmmy7MAzB2sHr3KdwcwhMnJHmDetZdJpViEn1e81rpihdfVMV9qg2Q5Way2eAmcGksNfnAMnXFYxGPBbGRpB",
  "key28": "3NvQX5LxwA8Vjbd6TMzuBHxR93m2xgKF3vUU3LKdacqTJfosM5hCwJNj63KMQVzSy13EkFpf91Ek1TqeYdn2sFdk",
  "key29": "zarPd6xPZ4XaMbggNvrEodh8KM44HbGUStNDGKcye8VFbuh6yGgyn1NnsS9SoX88dPz8vKEzYr4ViACXtC5sByi",
  "key30": "3VoGCgcUioYL8e7QHsAAGACCbbANQdJrAExSw8jNnThF7k8UUgpjpTeUoLZCiLD5GcTrAo1QKPd5uGkyK6f9MjhJ",
  "key31": "2ZmXzXaQjgvC4H9SdzRTYdL6hC5xAdUYfXVYPKG96EYN9cpYgmnLVCMiBJNscEupmNqRFGqQo7sQhGqkhkfqnfR7",
  "key32": "3A4pUEWSP28C85Cz9GPxedV9oXJrdKHvpfFqQ2yem7Wm5o7xNqgc6vUGUnmQiNn2BUydjJiv8ccPwLxSZciVq9R2",
  "key33": "31P4kLd9LKp2LiDWD1JMvXBQyDXyAqeW5coFaJtMZvEo9fXNGLggxrNd9V1HzyvniQMphjz26HUjY5mjEoZCin31",
  "key34": "4ib3aTwLiLDL1N1tKiPDo21giMwMYr1b5K5KgDzVm9aGTDZUnLxjbHwPFMHpwS5zQ4Cpv4zD5hyFJ3K6QDiP2yBo",
  "key35": "xhCnqQ8StYcwnBxmu5LzVBWoM89M6gtTosPaz4sWQLBTR6eoLqCivM8FiEucNM87Bf1EJm8dLcAX7h9WKeRusp3",
  "key36": "2ZpYX923WoqaeKJH3se1kHHGWqAk1nXngLgkTSyPmittRjpwU1LPioEgesiemJAin65ipy94t3aNk1MtCoy3q4vf",
  "key37": "4fNFzQpwbSqoz3hMzv3UaXHfh63M45bpadNUcYaafmH87FwfUp4rZwW1p9VeGs6qNxCbcQKFupbLAdgtpb5HdfvW",
  "key38": "2R4tnzWJT6F39NRMpLnnaP4BMmQXom9skYKqQ4UxZrnT2TxS9879GKfjcissAezn8YSGGN1uWcQ9Bm6JojJntpVc",
  "key39": "4rtdj21AjQBskyePX1KY5jofYX8c2txeCRorZRjZpsDJAkpH9SGtupkG8TuDXwShVi8rrNFLhj98hXFBGdiYna4B",
  "key40": "4j5FLMUsg1MtM683DR2NMV4i2Gw85eFdzFySMAQU75otdoeNCFiPJF1ATZeo9CZw1MzHAofcxU6LQ4Jnoxc5rBoJ",
  "key41": "4F675ERhqgCbJhia49o4YcSTVg3LeBaQikzi5p5VZsU1Xu83oV7hZjCtg4RbBHbf4B7NHJtqVby3Qs5ZcRSKTeXC"
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
