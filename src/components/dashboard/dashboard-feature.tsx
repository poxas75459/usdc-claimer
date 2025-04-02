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
    "2bwQBpVxXUHHdBQjQkRYd7VK8ch9ygZmAAcu42ikLxWB7kXHcqW2QGAtphnNccFxGGpZWdVG65ZeKTkiFDQqYHQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Esyiud8LZdMCEqW482fcjyahXqPPmAn1JwRLYTNLmMzukcwZpDZDCfQ27bZPqjoFxJWUj6VrJbsmYdDk7GJz89R",
  "key1": "3Q2nu6i3NRmk3cSg9jkmg64t6aMkSDcjJrK2JcuNat1MC4CJiBSwvbiV1RAZwNUqqmfn8hxaAYCCuXxndwxDHmuv",
  "key2": "2mYH4JLtCah6d4R6PZKV82W7Bsad3pVpig12GRgv3Jmw8SNGeAfH1YWiWqwBXDesMuYn5bfH8LQ6L7TYuS9FYpUg",
  "key3": "47nM6HJSRVSq8LoHNQ5M2Lu6aAPCxWqZ9fAyq7pT7QT3XXaP95ZmKPnQFFyDzGq8T3WhLku1VX3uKc16AgEYH1pT",
  "key4": "5EPSGrs3as7aGimn6LpEo6wb9yRYFPQ6NXuUQ6oZTzWSi3B8LsiFNgMgVBCg4uT71HXcZtYHVXn9akzKP5XcQeao",
  "key5": "3h9WDHHHXeY9SPPDK6cu8xdYoKQs3yQ3ng5ZbU66ZfWoRZJviPFbs8aRChmGZxAoZTNWPrSwG3MT6uFHbF3TyrUy",
  "key6": "4kXZR3ejU9DENdhiRmQgbUDosFVwVeLxnMA6J5v7PNieKpzjMWRucnJNXQBnzADC1pWxZBYFxRSBMLxTkkG1C2t4",
  "key7": "3RP6WtW6ApaFM3rV3EXDPyXiSGgM6gr7eXhMCboHR4kBc6y1aVMngNyV9x3HdKEsUXBv7Up9N7uf734f8bqr9RyW",
  "key8": "4JnGP9JieZ2EmgepPiSaasZ6LkRsY1thVFZsucR8Jdca8GJEU4SUbY6vQfQwiyJRqbre7DVHjQaxqfH84kvZwZf5",
  "key9": "4Ff6nHc6Crcrx15vsWAXfRm9uLNYd76cvtZkR6Jhp5UEBxjHyeztbd8TEjpKmDPgYi3BcTXs5f3fDs8vdYqnxGHo",
  "key10": "2eZ6YR5ZPD6nG2nmUGy3KADm1x7dHTkBtvNH1ZVoecL2X3PodXDuB9VhJza7BWbqJpJaKxFTHDHY8PUXPxBLbBQs",
  "key11": "48U9kDqNjCkZXs9qNx78NhcYs1982HcUPPZSiRsK7S2Rvtu23wzZWfbzLhHiUXowMv4cWtsX1HM7sJh2NrMSL6gq",
  "key12": "punZPMjTF3jusSmdHJy8gQ2HBRjMm1hCMFLkxSG35se2cyKHMvsnaP58f4Bu9SxSaKY3nQ4y1ZUYDdXpQcRBVwG",
  "key13": "4KDr2Qc32FPDaNJtG6VC8HFG9aKgbx8W59e6EobdhrR66Z7XYmHvNDM1sZLJ4421b1T7Wyb4t6CsGRjwGx5kNLbk",
  "key14": "qiV3LKSanEdKp9NcHfyU58rTPxzUQY41Xr7HR4ZwwACuveJRubNmSA37Y6efLgeNEdqukVnT6Aet37swbmrb4Em",
  "key15": "2j3oZiHEMJcdqTqqytLauYMmYDNoXDUSEib8zuMtzNsePRhBGBBHYpBqrR3y77V6UjvXDx3E5TFqd7SnNGwkqB9o",
  "key16": "uxamabTS96vpeK9T8kEVAzqnde4mM9b7xxJ7XiwiAmZTy3UgvZ9bJLnhNKXALo7MPBsaQnbFrf1WhwVaqLRZocF",
  "key17": "2KZ3iYvpo716pnvu5QTeiStHc8L1gBbJsYrdaFTJF1Jq4Ub5CCb5X7JW2pazpdBW3cS553ywA7VQPAFc2MqcUVZa",
  "key18": "3gp615vzQV9GjGqsfGjF7AMfnyBtCsu7zUidUggb1w8goDkKe3W3haLDght25Uk5ZE61YwYDHdBLNL5HJ3mDfSDX",
  "key19": "493tk72puj8XzBMAi3e7181ELkFoZNcCo2NxVRiadsaE1EcKfN3Qq2EL9ZTekSZusySJwjjxfry5M43kGQSSoZiH",
  "key20": "3pE7ygjiV8wq9GyTjjp982pccyQNVMzG7By7Ve283Ro6SJ1gnJvPBwU4fFEB9ZXgHAKyhGfGSNdpyNK461E9bznC",
  "key21": "5c8bsmeYqNVHd6Cn1qeRCm5ncaipRYrXzDFLQ1njTRFxnd8WUhH1EUJ22nY5tnxvE5iszRMCbiRjPnvTGQ8L6izM",
  "key22": "28fWgh55czMPGtgNnMvxmst9iYpfYHCuNHpfXA8Ydi8dfMrXGeMFe15hwuJeU8eU8jUgUtsdGRu5XfeYTS8C4StD",
  "key23": "4Uax9VNQ2wWoz7VjZQtfp34ZgVfN1bwSTA12fHD541NqFgbnBsGTzAseR6GiiZEbzkMbCrn1GWYm4VBvXfR7YDaT",
  "key24": "588ufD8gvLvedTAQph2Ee9ZkXpw3hyZfZo22yjsczDQw6FndTZhNMbXkE7tAoZys2jKZvWDfRd4e3pjL2eXfFAZa",
  "key25": "4pyYRJauvgbCJdXow1P9RGZfe4x1WSZGAwzWfkhEbdRrDW6KtRavXVHcjr4D4npUdqv18xNFWD6uactXS838z3Jm",
  "key26": "3MfdFfiEitVTm4aKnt3zZLLyCo8kziQVbVfoszkcjHhL8AyYTyV2AW5dbndeGaxXtEKCSCpb4aCr2bGzomftebxp",
  "key27": "2h3MvcFB7kqyUTE5prWoSsPxVHCXh3KGnBgsuSP8nFvP56ZvzUMjTWk8GTvxXAhAcX12n2U5bYosCoMBDodyYGRw"
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
