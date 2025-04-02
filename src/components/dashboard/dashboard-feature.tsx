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
    "HJ8Hag4ii9pupgDpvv9ACxm2xNBhuaWL4FRWoXK2isGRCpUprCG57vLkizpyM39ZF6vTLW7PbDpMJaFDfjYSjz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xiDMHR4DLevYojjmtyEu4iveffPnRA3tE2j6XViPMkq8bb25FuQYGNBWUxC2wmKZGTCrHHAUgTweCnzhSvZ4bpC",
  "key1": "2GmMhp66WPoCirzHjki2Qy93wmmgTcWJywMTKMUcny5Qn7tR2bHPDXeuu9grN6G95T73cT5e7yXMkFxECc4NBDka",
  "key2": "3gb3uLE3G9GNrE4RJ6UDvvL9V9K83aqhqam7NZdthDEJMk9rsMExwKrx6n3Hd15JhYSpegTRAnyb35HGMi19vfKy",
  "key3": "3BougTJTVTCqMn2EJFkXzqhFk76tRaacujwoCDDcLNSF5MTgrxwGYqB37Yk51ZGQ32iNDtmzvt7kwEVy31vyS1QS",
  "key4": "5LcfDSdrntSHPpkdMhB1AANi78PSxMxuX9YxqhvYWZuggxgGi59AgLeeRVpAgYUeka4fN93tc8RXgLJ8ugpMFmVP",
  "key5": "5arFJTxu2xQvqUsmyFAQMN385emuaxk72Y67iZBoLQjGLp5hH8Lu41aR3Qbi5oiJbqpMzzkC9GuhPhbzrEjKsCNz",
  "key6": "58MDq31NqzjE2kD8jgZH1FFkm7K93ABdZC86929ckZ2HdSW4CM8sKqRTeqfKy5iaFDDFQKuuVLC7wzM9UYs6qDi7",
  "key7": "T2y49TPU5U6FbMDVx4b8hUKHkB9FbWhXcuUuW6tHaErmaunUkWRCuhJuBJGNdZwFB3e92pcaeB4KdcgaEE4dF4R",
  "key8": "4F6NgmVcctpBCUkWXuGLWR6tVosMRV99UrLDGSr6rNn1Q9S3yXSZZT8N7MHMKts5rYrCJ3cXWYNTKyenmJmZ3sni",
  "key9": "672SPXBXoN7gHqH1YNMpTELxDEozLUZ4hgefmgDYMXyAWYpYUx95eJP9ykAXQWTzrMmk1kA9bXu5WRpkPxCbwziS",
  "key10": "4279g27F28P9VaBnwzzYBUZT2Mu73coEwkwQ5iSza6xBwZziEFx6U74zaV4WbqnorrgC7GQfJ8TwZ9NUc2biDFeJ",
  "key11": "2whT4chWSD9RJqXUuiMrgyuKVVD8RpoAgcKCfLXqXrNQMUMiB3W7AbVCMVwwJ2cY73fxQpcrp23exwSfjgEUgBv7",
  "key12": "5rxzLXb7iNeRTjaJEvCzWrZSrEqcSeyVqogwLqaJWiCH24nQsTMvy9xb91MnKhgoaTsY72HxogfsvJTrok3wtg7B",
  "key13": "3PK268RacHT7uKuwgNeUwPUBPawERqduLaa5VMJpvbRh82CHPQeKKAkZNR2Uk4hu4zo3iVAV9YNpzxPirno2syHE",
  "key14": "5y5q7LtxD4zLtN5mqKUnytEEKCaVuvYj96cLYotQox4FAaWfAHJahQQuzL8pFqJpMfBBsuV2dTaQWwQyhMBWkTTD",
  "key15": "4kC1oQNpCGEsSq7mfFoQq6HL2gF4qySgYfwhNxV4z6dTH2tR22VNBdgWmj6NZuwUHc7ND8ds6iQSk4croxuuXXcb",
  "key16": "53otG3xsegk6kebf2e8tW6gsmvmjwAtwysuyWJFBZRoWm8kxpAyy7nfbGWPqhRoBUEQ95Fik2i9GHD2vaQFC1a6T",
  "key17": "NxYgc1oTxLtkCkUJ7nN7B7gtdJafGZGwT9P8tZ668sKcXKxHWCPuCLmRheoTC8c12U3WeeuRtGyRBLdhqVu8B87",
  "key18": "5rKGjSG2GCA9LH8yqiRGBwy8vtnJdzEudaAhEQrA3y6UVZeRZ1Nf6N7eqLqiox493DpbK3LP7dFgD4GLWUtnUJ8W",
  "key19": "Zxjw878ginMDqTJAftmodohNcJDyYHX4126t1iHg2ooamoyAA3refsxRXJRtvJw7P6k9jZdWNsuU9v9QGHXfCvX",
  "key20": "35BEQY3dfYJfqHxNJybJj2CKb3SWYPnCj7FwJuw6BXWfQemm41ALQBKPExNRAo7eGvRmDyDvkDVEoWfEGqjbPGTT",
  "key21": "2fJrUv93A6jEv6FuCz5DE5cPzhCLT6fk2JmAUTYMG2yGz4rnVAqSBoY5mEswAHeyPouf3QiiyGSsJLJwMCAoxZ5u",
  "key22": "37DyT8Wy9bMubaqqzryWR1VVigrsUvPK8zx8T4etgRv1q8S5gCgYrqJij9PmFZRiRBQYuha4WvP4SxZu6xTwhEyb",
  "key23": "26roFBDxMFw7LAEmbXh6r27NMAKm5rUPM9DAU15i91cdk997fzC2SuStaqJyuggTTXQPKMubU88fmqSA3D5B4aYi",
  "key24": "24ibNQSnba3cNufE3ExvFyrovSxZjDkSXCkztJEWYBXaNK3r9L4nwbdCzhXB7yrMVbteW27rL3wfGBHbuR6Zc1aN"
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
