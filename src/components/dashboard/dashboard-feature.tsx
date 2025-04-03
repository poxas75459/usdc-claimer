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
    "cWqFZQXm6XnCdn5CMqfZYH8MhTCYyn62Yoe1o8ANXemStAfnV5Sc4Tuk9maUxnoaUFTXTbv9hfUDoDVDE4Dgjgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21om6sjDaFRL8mipkd2FTJ7Gea4cppHMhNTXP5r4FX3wEtewCBwUyf9HzZmbW1skoz5bMRhnrSfbm8R7FHkq98BU",
  "key1": "3uQcXkbg3FNQwXGwF7BkJvBmwBu6oWHjvCJpLvfyFrpfFJcjSemdm8MvjeNgHeiCWMmucZLmWvawE77S65zGqXEJ",
  "key2": "pHMByeCWQbMyh3vpMGBhNhJm3TVVdV2zZ2xjMm2RcboTfuZ8F9BoHR14xejM96NmXTCNZzX75ECiH82gTC5Paps",
  "key3": "5mSA2QLQoMW8xEBb73dGYbiGmHicpheB2KiX73m8LSTHhHSmV82pe6ny8K5E4mbmQcj2G9gzF4dTRd6e5HWasJxR",
  "key4": "bA6qfF9sxqNKkAGozW76NNuKsYKngA1fA3u4CJpc2vyH4vrLzNWs3RHQ4z3WSEtiHf3FRXxDAUQxJv3SCY3g4pL",
  "key5": "3nzNbTUVGSxT5YdGfBnYcKcA2paCeWqv1XbA49fKUxDEr1Jucth7XecR7WgqYJ2BKS8axVqrShwbDK4vTGcZZVnx",
  "key6": "3N4paNEko1HvDgGNShjrv6kKQES9xmSPiBsk6tDzd361GhKDfSjkLPKuGNLwQiaYNdVaAYBR9G5eayy4UN1N6kGR",
  "key7": "AgerjG2eXZvvXmgQ712mi1FMJcLYN7ksbCj6vUnfifGMki4CHCFwdFMjbHv34sxBr4jpPEjF1QBieFW6fLfb8GN",
  "key8": "5NTEAyWD6mhusJdtV8q9qPea9qNivjvaGwM7QbwmQrLPF3kgKHbCApELvWZFXfoe9arqpyiFgsx2g2KwGRZVbRMN",
  "key9": "3PhpggZmevKpvHQ1Xj9tLv25yBkUBxTQBF76XLcZ51Zwizbq2uE2cK7Jcsv3gyf4T8nxVSA8bNARwnpu8e2wAACe",
  "key10": "5UY3bYBWRM6gZ7VZwHqEC6gStED16SzfoP1SDKxGd5GGJwtPLfXR3NeZnoSvsfxPqDMhcAPJQ8YmV4ZK2usjkqWJ",
  "key11": "54U3N38r22e1XnV1SfXcf7c5uUQTFGCVQQcNCuANSNLwfitDCwm7w6UmMmnKZJeDRXaXWpqG5W9UHLcsVFwsUjtL",
  "key12": "MheMAcp3fnRM2wUKCryTqPo729RmcCfAWSXNDFZkfEnyPSkrDVfmFap1N9nKhmXMT95HNFg71fdnDMFZtnSZZnC",
  "key13": "2MjiSU6thXLnEg6p6xmaWe7fMVh4W9WGqL9h17UWjj6BsCPcJuS4SMW3unAGKptXKn3PLHBtCAeJ5peQfKCUhtPn",
  "key14": "21YJ9XzrCGC7GfhzwCRzJChZiYP9zpDNphmAp8HFC8Qro7K6asPhG2tHLNwoiyXsZKtfgC7W7rWLT1DvAs6EWy9F",
  "key15": "4WbjM7aw4FhTSog2LtmVLgPiddLAzzS36GLw9qs81xwFGLqdfwWywrqyubESGWVSfmZmYSa8f5Cv41hefx2uYQtG",
  "key16": "5PmyyTNjDhjFxL2ge6bioMcVRokh7LminPTz7FPrGQDyDask2W9rb5E5TYFntqYAWdBwvm5FdFfYwVzCeAkpLDj2",
  "key17": "ZYZtVD1JQxonyW2JXMhaQnCbEzic3hsqeUPmG77rZdrBi7tMiimXzkzi6mUZCgPizohk8r8dBGLpMksu3k1mHHj",
  "key18": "3yiUGT9fzhuh7AVJSY83j9bJvZaVKS1fHBNS5U4fPDoptpYdDKgEeYUkxhsPztapJD3k6nkH2uSdEgH8uJjuRRNz",
  "key19": "65Zm4C9M4NseRj2XAUesf5gfqdkZQotV3Vr5mnakuzV6BxRq8awedMXyqotG61ru5MtVT7tisqqetHFFH2U83du",
  "key20": "227BSEV4ojHCB21UdfREGWmo7WtF8GX9CC8AJMeSaRMBvh1HnxzuewQ1CoH6DuX3XhnNrG7Pg2jxox99s4AV1MpD",
  "key21": "2tLe9XyvkmJWu28sLDitoUDepgXMZbYMZjdH6a37uCBQ5FXD4vunYNTrtsY55nmcuRaajwzAu2BErHhVJLPVs9bv",
  "key22": "5WXRroMAq2sipBanDzhosWx7WsBFFm9KyZQGJFCMdgMifstKbgVGpVi6ihEnqMXbuA7Eoqvbz1dyeQqDjwFF7Acw",
  "key23": "ezxwKcXbjRXxoUF1hrjhVcqKDvMQHCpNpt5XV8H6wKKBATjrvx65dkGn8yzbUf5UWyaJSt3PGoVGugpYsAonjgb",
  "key24": "3Rg9ifTseir1qu1iBSuYxbV1dfmuXJerpVpvs1xG7aD4m654dFNMbjusAhXFN2zfg9zbrai8xSrk19oL6vaywdY3"
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
