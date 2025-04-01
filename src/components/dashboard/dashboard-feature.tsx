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
    "4x1mGmzyGkLLURXGs82WCmBFVzmpSMVpZEYCGgNLBaPnbnWv3eRoD3fP8c8PWTjPpvtUCZ1aGsKXgry4rZBJu2or"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KaALKRXZSeSCqHdhP8UYKXq2hAMfUBekQV2ksZQP3J1T2FAHMWV3SDFmCCa6kqd721HQDgGKgkVBUFmedMbSz5A",
  "key1": "27sfuKgFWt36LpCAqdLpzxzd4ZE79RckAB1pi9bSCBvgMZ2KcksNmgPGoVRVGwRnUX7ZYDoZa7j2rGJXcS18y6za",
  "key2": "5MjJLMoLxkqwRMne4Jx5uBVhqnuL3zYEG99uArSiweU91Zub8eMKqBJrHuEQGkJA6Xqn5fcLWeW16Wvg22NpGKJ7",
  "key3": "2NanqgcFumLDQd3bgF9Q1TCnnPj2oKgtbwnb4uEuBnnTGHge9XCVnDjNz4SPCytVfMdt5uePjupvaPJisL9NJaMi",
  "key4": "2qCmx28BMMU9hcqUSQE5meF4kR53oPggqzhuqLwJiWZopA6indpfr2di2WKLMfooHV5KA9W165HEwT5vGcrPqpLf",
  "key5": "5xfZL5JL1hZVNWHRsoJ2U6Gv3DB23YCHftxByoAtDgKUzxLq7Mo11CG7rxfDymMwRLMncp3Up54PV2XqatmPgQ1h",
  "key6": "63TChNvt2D59CEDVx3zqCfPHD6BWRWm9CpretZETYxSGLfPGorgE1Y2QEiY3mz5Tw6a7pqRCVFsGCcmMH3ckRRXL",
  "key7": "B7hp7UKvVr8DkWCAxHm87Us1Y7DUSEdSNkGxsETpvXiDtvARzWbwffcuZp9CSiszjZRToN9DNhkXGosoRkjMTeG",
  "key8": "2DnDvQuzxqBnXQwbZzAyHhdaZzw2fmin8VBFTDUCf4tFqsDggRXBq26BxkEbD8v6nFNgLoQRMGz3rbELvTrsUyUM",
  "key9": "3XzaR5QAvWqxWuZqoTf6F7weUW1uqrauoaWhhdKNZqF8i7eiLrNQeZParKQwR3eubZmmLhLhQUvEfL35ozrarWgy",
  "key10": "3wKYrMP8fWQ66BVFRDVpEZeNZJQy5jEYfV2WLjj9noDnR3vMzbkJwXhaVzVS1GzA6ANSBJKmT8U1hVm4u9WRWDwt",
  "key11": "2uoDbFgkkd3gxo9HPQgCrUC77U1zdMEmp2FVrGWedfuYfpHUiU6bzumEbEpHobR3LN9SQwKprGKL25N7ALTQrKV3",
  "key12": "4qVZYWd2ux28PioWUfqSbsNRbP3nZpe6FBKjCxgdURc3eUX6cMeARvmyx9AJuesbts6y16hstPscZJH3THfNG7dw",
  "key13": "47GWCbn754tqZgexJcHtSbXU4ogtPByuDYA6J2KNQoJCFBWyUoo3c2P3jhWmyZkYP7GdrCFgKCuQoZYpPU4H4ZLn",
  "key14": "2BRLtG7A6GiFjhjyS6h9YBkAL2XzLrcTwnUs4d4KRhrWv4gtNYK2bjtuQdFEEq1NsSGdUaaf3CXSJbE6dY6ZboeQ",
  "key15": "4Z8gUrk7nqFabmYEC3SnaFW9fhei3ZNZsgonSqtVsQw9dJh4XjphKwYZA9xDVP4fsHZDMVAwutALKjwznVJhVAmG",
  "key16": "4hYbC2w5StpPSF7rq7E34eHFtSmUsNmvJrNfKbo3qTx2eLpBabPnANjqgdxWRmZHaZ5734zxEz78rqDackduRAZ2",
  "key17": "5pCEatABpcqScmTtcAQciq4tJueH6Ye8L6jadv5upJHd13Ycbp13zjNx5Y5uSJMzsvNRPCa4f6dkv8i5TJRkc3yy",
  "key18": "4jP9vkmb2hpRSmtV3Z2jezvbTmywNwvac5LEgQdwxrsoe6UMhvyUTRCqnvN3iHdmdEERE9uPDSHNSQwddehWatiS",
  "key19": "3YfipVLxh1cmrtPtYuRtHYebPMFHP4TzK69afNdKoXr2x2h3QMQehwrvVrpBZhEDR8cULsp2FbUdQbQYco1VjBT3",
  "key20": "5GwS8YVqHn6PwirTeMzh1AyrtnDixhLLF7BDK4PGF6K29MWLVDgbazeAWtp6mezwYRibM7QuJeBMgUUfc54EcTwj",
  "key21": "sTLQftemtuBDVzezdH6cBqJx4Ch6reVPGP5r8gLqurwrUL8aj1CXu8jL3ab4Sgy5HeHdghxjCXx7XQXjmBQL5hU",
  "key22": "3JbHGYzRKFJE2EotVGE2sscyFZiyQSdPYURLWsjeyP5sHq9L1iAfzRgaqEh3jNmp2ntae2v7sXtAdfZ161zTQxSx",
  "key23": "3y17oXYPPDE66gYg2y43EcaA5sAMffoL4WrD2mGWMDNk4nJ2PvFw65K6ioiaiv4NMxMFj6BQ4UfqPhixnoedrvGT",
  "key24": "4f8vU1wGBJWMRPzVNZnZ224X7YAUxVWKAFZSgrRDfAHYsgBir5vPCCLnMPetsExkZvgW34LgJpJfWruCG3wfApna",
  "key25": "5f2Pmo9SXVaRg8MZ9MkkipVegem7BFLVizjfY5xqKUVv9YrvpEESHsZ9SSmz3RkQJ2wHmWDo6rSoUm3FmEv5U1aP",
  "key26": "5WiazMRHSfbZtJzWX6YMNCtEuoCQRDzCErm1a88vYBjo67PUwC3sgiuaaa3tx7bXF9sNMQJGiCxy3z27PDqxx3Tm",
  "key27": "5n9ksTQRg1rvG9EnWZFjFAeYPNMs6CXpAJWLqYyzB2GwiVNpBjxc3fYqUbhPts6NdGi8i95F6SYKKj6CEomZEZ8i",
  "key28": "29Ac3VmGXAuBvuCLuqYuis3ihz92ggtyYKb21gSnhUzUCZ3ohFz8P2NQKxoHMcDAqUZcTXWTicEYcN4duySHMhd4",
  "key29": "3r24CpP85B3hMeKqkkfcEynaVtdeG1wuMhA7HHPFHMmcCZ8j8sXPKpeKLPTQ5DNSzZnUHsuqwXMS54oYCemtG9bJ"
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
