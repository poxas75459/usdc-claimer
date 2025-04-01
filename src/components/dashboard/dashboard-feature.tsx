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
    "3Z48BfCq86fi88kDbPqExGHhtd1G88hM7tDfMv6PUk4r6pN1FdoZBCTGFp43cmwziRoxYdJrnc1T8yy8K5FDQzs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5E8v86nW7mqEqfQRBGcQm6Bue4Q3GHaC9VfZDWeW4FuJST3sfWA1KjeSZZCqi3SXvmmHbpGcB7kjG14Foxnf6y",
  "key1": "3yjqJY9hBUbkY4nmM2TkyarZiJsQmY8yxkuKgwdXASLNH7BsgWcqvAF4gYBoRg5BwvUaDH4cAFexcJgSBp3joyMj",
  "key2": "5MSkfxB5fD549xU3NeyDPagGqaDmqnyUWNqB7e94L4kz8v4ohY1v6jwpVN8ekDn85x3iDUHrBb7nLjWxti6WtjNe",
  "key3": "43fzNA9HpVHiZJpHG9yPmGmqHF7CNM7SUsK4M1ZWJrbNTdziYjmooDHS9v623Pfy1TA9pVNYK9kkfLP34XnpZ8QS",
  "key4": "q9VDcVr3NMZZgX5ZdVeSc7M3nHFvaQFjCCYGSpn5y1FsQDpPANnreFMLxB9oK1oKeCZ3BRsPUwb63pyuFpe1VRB",
  "key5": "5t7G1ePtWp6mzMtqJgcXpBmnVdyFEWG2KXQS8g5wyCiPmFJkJTgdgFqEZLsUqVTgSSt5ADec85EgskbLK9jBfJJi",
  "key6": "5SbyDiU7v1ZKexn1gjRqfVDfd2nR4o2iDVQ45aegCan3ioPQkf3bYGScnhu6SFqGBA7cHzARdN9cg1NsJXtsnoi1",
  "key7": "3fd4K1U9zvWw7PhBHthCz3q1HjjoUBNyceNygKecjRRgDN4d28dZd19Qe58C3AusfVS89QL9m7gdR719oXw2H6n5",
  "key8": "39ivaM3yMqBfeDUU7V56ztnDUU7Ag4ZA6FVnNZNsCAgaUAkgagrWkGJqm2xDkTnbDNKGz2M3PmDp7aLALEzokEQ",
  "key9": "5ZpqDoLmY13dvmaUrWt4GvESXbGSpynnTZSMeq2aFRVuiJLZgJyBwUBs5EZXNLP5d7ZwTDmkUvzQ7nrC1WzDAr5j",
  "key10": "5uvqZ35jT6GVfDKv1cUo7VZiGkMw95ZCJNM571GS1N2PZJ93sJu4iyQgZWFqDVBdt8D9RwqSPRp78Kxp3EuGSJn5",
  "key11": "52cfrYi9ukJjMZ8LwJ2q4wbmbmAc8UGihmQMcCcwqU3D1wBcbRpBMUBogiqZJqa82rxu35CJMaD7hwMKeEwGFaxz",
  "key12": "3sAjP3PwbAEM8oe3gSsUnLL4eeiPrGUvkeaPxohkNxPUZAogQcNhchhV6j2ckkzruUugNpMuiTrwcwfm5sdrMbJ7",
  "key13": "59DgetiRWKEDfYdgrogEhyMSt5NPfwZofxKJaYYatiNGwzXfpYb5qkosxz6sq8Cznv5CXj1HHWiiBr293xeU5VL1",
  "key14": "3ptaxrPQMsKaQ9pPBdA9FFDxDYzxPWeZrqMojF8WCZfcJpQe18Wzwp9DX6KBB9xt2aqknTTCE1Gm7bXWFj72rTdd",
  "key15": "3WJiCq4Dxecp4upMtWbDRKxQDZV29bVGxX3jZx48pDooXLHLV9dhJFMvxuCacemzC9QFSpgte3kdaZBeSBfmBeVh",
  "key16": "3VEJbMZQYB9TBU5kT7uW5y3492FZUBk7nTRNDsGHwiEnvmAgRraR8dXuLLLsqaM6cmiEXP3ADtnnjBwkfVK95pNX",
  "key17": "3xV4sgR5ie6SbSNfEYrbtCkJLf2kqoXf4vy7FNzNmYQLBcG3icFft7WfhSN6zokGSq2o7ZV4Sq6p2sZikhZPgM6p",
  "key18": "2Jc2XUrQyfG7DsdvxWEGwfYRdjWaPk9b12vhNCKhhQHHNbgnGzUWS4qAAF2vfn34ZWqdK19raTcqN5ofa266WsAj",
  "key19": "mtQAqhUJFs1vqcHJkfapiByqLrUmfEQrKQNRL5PgN211hxy35oc9wg56tPzL893W1fYu63EHYZTRPfq2ZyUpMmC",
  "key20": "2ddBi8uzRZXPLdsGpXeWL8XDcce5jMzj6UK536zcMuu4vrT7uXpn8ph7pRtCAFbvFcenL8Hf7AeQEjUPAxq4FU1A",
  "key21": "5Y4WAbHRt9UD8heHsmd6EoBJLneSpN6piFCDdwihnVPXZRrrtwACcPPNd57ub7PK7AevRjawSXxHoBcheKYD3oXM",
  "key22": "4VSGBk18o3aPv5bh4PMkdUpvoMmZEKyxV4Wfv9oBWzfTwUTeNVQpg5ue3YCANuqcifJ7dTovsg56N1nA5sJ1AUin",
  "key23": "3aYKV4Cwx7zsFJj2KAiid5L7MhH8zBFvqpQKZFvPqjhXEMfinuDSF8Euxt82Pew4iiw69ExP84Gmvr7Pu3eH6X9G",
  "key24": "4tuDRBfDnTCDB2m3s63ZcVwA7NDfG5uBJaGNbSsv32fK5mH5qe194QGQsmCPg3tbbBo1NoDGYD65kM7GBRrNLPXT",
  "key25": "5AqvTd5uTnHqaaT8uwCAe3ZwoMHyXpixnQ2PCEPUEtax8mJ32MCaUCcfWWoJzK43PTWnptUVaRv2sUry2r1TjNx8",
  "key26": "5VCQgRNoiQQNEnQrmCWk9uTd2uadUqKdmQi6evJGhK2uKwwFcXBHAN1A9GRN7X5FZh1iuuNQKPyGCGVu5RLfR3pM",
  "key27": "4F1gdxno4JuuJ4HMdVSXGoZKWtKzfu7EG4iboqMN98xioW2QaEdebHynHuBkHBCdWh1ZFR5X6NvQ98ERcQ4mhqJW",
  "key28": "2eb57GpUzt4DRqVYfJADagqRu9bwunqkpyoHnxTPnRJ99zkE3hvuh2diwJ8eQ4e5UirPMeGB4phrs87KJBso1eqe",
  "key29": "39CwkMqPurtBgF72GQe33UQtW4MTTtQKQ4FjFtWkPYRA4FHCbAmtTP9MX1WFAuRbbmNknjs7wtsYZpVWgKXYcCVB"
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
