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
    "4v2h6cfdVJR7xenuKXhz9MwXg7APvTNVZmnbidt4bDaZeZ2mFkKEhqKuCfHMZvLZA4bpoLRtR4uK77LzJTnD5uSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QH7pPafrQKSa3b56FH7yu9VymFsrFdfno9fLqmNtHXjFmLtnPdDcB7ycfk6bvJczV9EC9fkZpXt61cyzhbZ7Bse",
  "key1": "67YMaB3KKYPgkxUxPSrdj9pSdgwJHjMsa7QG3BEwaRWLeAYGJnN7f3PXooGANdc3vng1dDQbkuxREGnomXU1LENq",
  "key2": "4aJQt2uZ8Z2a7mPPWt353j6aP1B9cywi14TiPwz1nzJFtWW7ae3WJzYqeXRZZtJzoBDgfDbX89LNeB1iQAWhKWtf",
  "key3": "fayjF9jCVSF4679mSbajSMAe8nXQbDyFZDsoKW354v1JNRqU1bB2wDPQXDxvwLfh2c91FbdxuVQ4EZw5tToBkV6",
  "key4": "2WFvAPTEoNREs2fpBDJmpuBYCnhJKfRvjgmQEtZi2hgLX3X5DsLjzpyNimAJ9bnp9SATjxDzyvZijvYJ241LS1RQ",
  "key5": "5rnt6CCuG4YhKhLghHqmUMSMztAy3aRSgttakfLWa2P8nbmPTeh3NRQyYaoNHy4FLDuUSfanVLLTbzSSFcdcEmG1",
  "key6": "4tCxSPzTL2iCdMsMRMpbZvP3zfwECgcQqD7DJt7T6u3Rup7jCFKFHJrDcyC4Jg64FxZTNCusY6QRwkvvRBc17fgJ",
  "key7": "4UUn8ZwrTR8SDAhaxHqjMtdQL3ygBPxmGfUaEjKPNeM6xzJr7gAdw3MNHoTy2xQM5gjX2DUYyw8d6r8n4xcSe5Dd",
  "key8": "5vXLj17mFiUdTy757kdLEpng6mXufZYB6n9T3g6dZysueZqhbbUZu4uLBDkRLFpAxZVeWTGA3W5YEGbquLHDkTXz",
  "key9": "5K6Z4d43RPee3khwsRLuJZKEb8rgeJpn3VBu9dmCmjmUyTE5pXcABz4729fpULwHYSRLYJNhecaSfHLDwNQoECMi",
  "key10": "8qU6pWmAEFQ8aAQWnXFL6DEqdARcAwo5C8vD7rkMcN1Jt6B6Yn1yb2AGHhvwKyQMW2X2fNkVrjBGCuriCNG7g8k",
  "key11": "acqGubiTTv39wy1rioi728h2bEKB9W855WsiGRFdTavyJG3ECmDqKk52tTUaPi8dQgUg1JuemnjzoLv1BnSFVCh",
  "key12": "4N5fnbwSkSC32nSVkrDSaX8Yo6KqMTSUZXuNaB71dwvoGqHyFYxyTp3ySSv5BDMrw4WDwutmP7oAzrGBtMdNytsH",
  "key13": "5bDhabUpzPfEXfPhsVa8mtetwKx2GJYP1x3y5YontMcyF3DTko9poehhRdmomDcbYeonMRYg8x7xiTFAU1fzbAsP",
  "key14": "5g8YankS3TpbXaSEpVpSQVkZkvnqUjbiijKyUECtpzuRC325h7xDVfSAGX68w8JRY4TKPmRgm5vdzw9Lhv7xrsRZ",
  "key15": "2os9sMCFCpfhH7TjLT3tcpHNBtQiSwvZYD27E5faY27FzJKsduMWh9aHTZcTZkJEdUgz7HrNsNTr9iyxQnsCLnPu",
  "key16": "5jpKUVRhZzcUjH4swy241fab6Ujqc4BbFqaYQqCNMN3MNgc2TtqJFpf8XeYBpzxtibUBZDPmwUrdeVaFamtSGYdH",
  "key17": "2m4bAvEioNNPWJEKACFEpYAhqFN5Na9rjXSPb3Z23ZR7uNnyh2Bdj57U4Yc4yoiLPkMeN8RbzRcSEJ1h9oiR8Tiy",
  "key18": "SR28tDhGu4y8boq4JdUmNktDnEJKMhxjaFjkHDVpaP7fbNF6NgvU7nMBDUwdm8bZcBHQq39EFne76uaAukaPBa9",
  "key19": "2Sc7WajkP8qT8wHr7djXGys1mo1UaUr6MszMmFmE4TpXoSCtjsXURfxuHxDGLx8KMg6fmopJRziAcjZq2DEGJWkf",
  "key20": "1Vrg7SpKkfdoMUigErgmbaEs4xP6nfeUs45v8eBwvcAwv5HFTr3Wxsej6NQRwQcXqHsvHNUcsXGzPcsgrpAzVVm",
  "key21": "5mAct2QpUbATAx2115H5M4QDzVH319pXbyDzJFY14s5dPuS73xvBTrZA8omz4krvEvom3s8V8hV9QUnnh3bGp9TH",
  "key22": "27gn2UfV3bKbRYFyr6WAeYG7PyciXiigKgS7HNsjrtPrvpi2tWYK188Ka1gbvsrCfTKjT9vb7FbYDmv3ugdKo8xg",
  "key23": "4UUd6BzwFjhviFACJWXXkq6DYPZTrZv5cNzX9aDjZsQfe3qH3d9oCufnwdGdg5Zk6rhHSKt7bwZcY5QVxnKQZtfv",
  "key24": "64qVNvnX51zNZX2tK2t3PJngZZZ9b2Tomqwxc2zmqnfkmuWg9XHH9seRpBS4W9nDJF9bXqRqLqJTBaerkg2TKnBw",
  "key25": "2Eiz13xaZQGMEbjNvsYKgeXoFkQrwjyJT9U5ohgFFgeeuALC9QBxAJYrG2tmQNJYMCbRKTqSair1GfzHfV1hXUqw",
  "key26": "X7biHRfyXN7zBddKBxhinxtt1XGukU1FEPy7gfPtPwgufY3jd8axGLG4UcV47HEDwnFYNgRCB5VdTF4BFtechGL",
  "key27": "5Ar9FYGW7YJYoqcAYAuht8y8D8Xk6V4qmttAnbLQFdrXnxJEYBRFgxcjavfNX1amQCZRC4e9jYtuJurGZCEuwuX3",
  "key28": "4d3C2Daohvn1YG4pV1HxtMf4YQUUG86f7wNB7Z8jVV9KU4cJSmbotXxUXue1dQ1Q3bHH56WE9AUfDpV9s1KiLP46",
  "key29": "3HgEXXbYk7kmUchwinmxWBKCPLPy1EMS32yhSfTRbh7G8YpqWXh8H72LasLrDLh3DWfKvTuqWDC3tSj4YPA7fPh4",
  "key30": "5HWYKrwUeUFZXGkduXH6WuPJRqAddofetDGv9TevKu644ifjKX4RpYZ2K18DnHaBKzoMJxHee5T7RJ6HWfpp8j6V",
  "key31": "b2ZUNpQT9Q6zkXGyLD6SJaTnNtyDwrpqt6Q9CkQPpX8TTpyQSg54CdTfPUm6P1VMJBHwCkdE2GsGr1S7gDW42ME",
  "key32": "m5EuZfM4oBaGa7SE449DW94vtLUvYqwDFSwyiEorQnmzLoDpCbGSBZWxTKctUMxMmwMQVaZJSqyx3T4eq6Lzt16",
  "key33": "4RV7k5MnoyiuTXnDT1zqGkekxNRzHwYDsrDmaXkw7PxCY1eqjxVJgzp95freoR15A7jNFs2dGvFwvLcS3BHb3gPo"
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
