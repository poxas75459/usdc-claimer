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
    "4EfWjhuMEygndQCvxwAu5J3RP7A1tCTAceDmyCDfZDBWikHpcC1ja8M9g1Sf5AfQpXmJgXTgxwiDFKu1T9zjVwsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yeeoUzxjPgF2aWr6RxkzKckNJ4SoQARBpvX5azuaNcp2rxBzn9RrRk6iHsTzCck9prkD6aZ8nWQgKsc9pZpoCT2",
  "key1": "5513vHNdyU3GndBc1w4HShnbShZTGvYQxkGaTzsB4ng9pCiFHgX2nEinnYUHQvMGpy86qTjySeYs9qebq8r7GNXB",
  "key2": "4cd7dZmxwr3VcdQzxEvDjLaNvr2qLK27w32kgMuQeYjviydWWxFQUeaKTRcCLbVxzyruyEawHTrohBVvX9ArYRPM",
  "key3": "Jwd1FWeUzFFCCQCvqTuFvLSCN1VYiG2v6WztK9CY618gEemmixKmHuSNtsD6pLuEvm2KeofHNkDa2ufTSo3m4FL",
  "key4": "5jaWGKCv7g1NNMkjpm8FijQDAMFdobBCiLPPw9kZ9Yyh8KGgpb3MuuzUppgXehYWsBPNrDdGFMW5Y5n75TUYhryg",
  "key5": "2KvpDWCKciLqfjLqWdcUMQitXQ2zzvRv7aRBtAKqwdXFmqigCAziM8BwFYz7ZV8KWTjB9UiJJjmxXVMvTXboyCo4",
  "key6": "5NGXxXcrUPddc8aSH2D6TSZi4egGcNXNFqXyTXG1EVpfgq3a4PhAd3rBzm4sXaGhctbN1uWWnoePQVxdwnisVM8Q",
  "key7": "5eoEB9MWCp5Se1n6SbY1xDRKRRYbPzd2tcCMpc9EzHr9R5WryyXnrmPjsfiV9nG9mRm3uXBSrHC3C5JubQ76T7qA",
  "key8": "2UvERy63xKDeqAbCwYup8uw53jgvBpuJCLRrSLtiBMBEKXx9KBsVnYWZXAQDVdagFq88qufdqtD3mjPXMkSViKfg",
  "key9": "CyViaRD7ByAVFX8XZc7h7amadKk6nXvNLiiyW47C1fpUdCuoEM5tKpdbwcg1y534SKMBaxWFDxsUgYYbNFoThgW",
  "key10": "4gdAxCRnyPpfAA12sVU4WSv5Ng9L12ifWy8qCaZB1PdjmoVWHqvGwuDMGzZRmacTX2w48cPwurGdQbAit5n1AdDN",
  "key11": "4d1mQ3YS8Jrt1q35XwopgFqZATJkptVpcZaR1j4ZPnAzDaeXnrBorh5MLHYDARp7zCb9AnpfM1FAQ7iTuscQa8XC",
  "key12": "21Lo6HCCgReeSMWuqXCS7RbpN2DEF8SZGfwrc7rUYtJHUAY4EYQNnyGX4DXjPR2iNyQCk3cDv2h455sTDkVFcwGQ",
  "key13": "2pZiQvQXANNMFdaYwHqHP7JbDctW468k34RSkSxErgLm7KUgFGbuErDcRuWJVRwMo1VHb49PiAKe2PR6nXpgs3gv",
  "key14": "2yRKMxiWYtvwnqSDj73nRt9VeGhCk2HkDR8P6Gs4YMSvAyNgswk5S57CRqSXWFe63UTrZhPhZ4Z3w98ySMRP3eCP",
  "key15": "GKPTnzHVmBsaPKuUopzFbtj1bNxx17CYxARjrX3pWSwmDdsafhj5eHjsjgTuabZKvW9Nd2yY2ut8GfMWMff8XLb",
  "key16": "65RFk4MbFS9oZLqGmruwnXBJtMBZ58XRqou3y1VCQkFXiLVrgsXrrGGVtwhXJt5zZWsKVj5jVmGNVYUVknF1ke41",
  "key17": "5rHTHp5jM3VzpHcjv6mueGnfGGGz3dL8Nd1tW7kB26hHnhW9bo1hy8K5FrZy9zyqgdW7cqCGew7ughjdNZvm8nVE",
  "key18": "4vSFxuHXaPM1sPWUbzBKuXPE84eeBsygXRnp47GJQijr47PTfUjvr81LXP7RQBkdycWmRSHuqGkYcbaGHY8tXMNb",
  "key19": "3FGduJ1ykJkrTqcb4kWSWAEdbGEXNLvXMByJxmnaaDyHMkXeeryovnCVzEgzJBNpwjKMoySe3D7kvp4m5VrBivEK",
  "key20": "5yup6DwsJSoLWnSCg45f5YXjk8pRWKHJSB5xVdkyyQ5WCDnf8uvnnefkGcT6Sd9WLLU3U4SPYRwSFm2SQFeqnQDQ",
  "key21": "4SyPftJ3wxN7YY1Xq1kJAvDR7GUKgzrsKcrLdvArQxggch5HBfQQMqCobrN8EgqiqT35Z7hG7aHuxikYmGsfcvZL",
  "key22": "32j1wMzfLjxrnDM4a7WghByR3sVBSmmKcXpL4gZKMgFNTGVfUncCrXZMeXFMHcPpqXxqDfph39kPnL3pWNFvd7Gf",
  "key23": "3nYMuYXdXvBj3c3ko75GBmjR4qhhDSWaeams6W5jx2aekmuZybqDk5sST2Lpze8TZAN1VwRHEC9QMmeezkjopQtX",
  "key24": "21yNf8YrLN6edPX5Nqj7ereix8aATzJkb4y5Bv9VCKAiPxpjUm8eenwF4Aet4GxvaKf2kXSTmVneK2Lz3uDtRTPQ",
  "key25": "3wam5a1QDxoqBdyVTSuAcPDksLNP6wtrJPfuNn932XR9QLyPmnGfv5gmsdgLz6Ue7wRUyC6PjiN2gs7boz8RNV3N",
  "key26": "5J3j9k9TWoXsxmp5vYgJxVkJyQo3uPVxuZoMKbbXt46g5WbePiMx1TCWJpxY2YH5fQxCM3RZn6nysHj4eadzKgKp",
  "key27": "27uCP9Q25w1j2bRzyTiDa1XowVy4YgjCJhL1SedVHmsuEwwkzHgcZg1NBtt7oeuLLFaxtFDtwi7RnXp7qDMByT1y"
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
