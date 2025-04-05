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
    "2noDFKoebPTasmLforUfesVAREsmn5jAhzT9jmtZbeztuU2ehzSrAKKgb5uQaQkJL8TobYz1ENh2UVCZFHKF5HqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rokb8WjerzFcg2wHewq2LHgNcqn9rLeHHQAA1pqtCnrwdmNvhTKwdygxAwiQGyagsG9jgy4dAEYKw34Aqishwtu",
  "key1": "2TkcnBguWSUpdGy8DA5f5NeAfqpH7Ysk6EhP41DsNPiD5hWmpWg9XEExbjC5qPYXXQdC8LpNXNivgyZXA3JkVHyP",
  "key2": "2A68yqM3MQBipzbhTd4fm1uretiPhWPZsFTimFLDy7qggXYrTVUscWSB3aPFyqpsBtXPfj6V6Bmww3L9fRTYbg76",
  "key3": "23WC2RcjAxcfmh9gQwZmrUker7NxNEBTtGYkRrVvmhd5RwAnPEVaVthYWQqFhwxw5HqgVtzP1Ec4cTXxHGmrirz7",
  "key4": "3wUCyFwt7VLmN1K3wFwk2E7V7KvRpcnXaRkNUfzZS85hShiT8osF4KYEHk74tYVV7YN63pXVVJn4KLf96XpXR7Ui",
  "key5": "67jgMKjeRZointDTrdGBREhRweRi4h7PiVNFrXPJhV8JoYQgMsBbDjbacWnd8in8Af7qYSk1k8ffamawvXLCZkAH",
  "key6": "5JCe4XUgPMukGjSADhpB6P99uFNMRcnKQUiM5mpaX4yp4He1KtnUEj3dtaMVfD7XXrNZ85bFCEJhRvKxiqBgpQeu",
  "key7": "5Zz1TaRn4eqjke8vVvW3rsezJYvw75npiTRtGUs2k5HeV7Lg7y8Tmh74o59EMw9ZuXZgdWAisWAWa1s3Evka784u",
  "key8": "3ebaa8qYji5QmU78W6dKg9WAzmfkqfdEUv91oXp5i4Kc1jxaYKz336tKqm35gK1MgWCJjnMfvHi6NgPTezm2fy2t",
  "key9": "5DYLnsYHhzDPPSkdGvGKnfwp1yyctUyrwgbdyG92vgcMP7wgTu6uDNWS24zmZAdw5t9C8fvJh7CiR7VVaGyfoHVT",
  "key10": "4RtCifWK3cZZ4hrKxZh1KokLfahcUrLkJgquEUEw5FwK1LYZiW6ymDYUr448u7VdUbRXmRguj7U2rPGePCXTqfDt",
  "key11": "3SMSYvYxdhkhnALtL7dBatnocYHkDQcp1sSqNJu195zh3X9susxx8gmwVabdDRs2FHnF9KrRQDNXj2ZrkjGrrzeS",
  "key12": "3LihRVmKmVmG7y5Mm91rswP7gyseXf3E8bQrPptLCx267BACPivQpw7tmugMXo4CNHP2Xnes5fctJz1CZRMxbyK",
  "key13": "67JQGv7DBwgwTMyeAfwu8qTkeB6qzsMao1pfRtscKg88wRB1Yp4LXsrtpaVN8Lu3WWFXPsDyp2vKrGZddZGaDcis",
  "key14": "3hmPnJSrhgHACxvZbQUAwVk1hk5WAnY2vfMsAX3S8jerbD71F2UUUV9GHpduvQSeVrNvedfnsjkteFCowabkLGEX",
  "key15": "2D1TAqRRtmZicUn4kzJLG39yJdprjDheu7mELHD1AF31N9uZpik49dVQjJvsmnurWVJH7XESBWNMfyRmPxvLs1CM",
  "key16": "2YZywgLhF2muobBoH8qSsPWmxPuaFZtGtYxjTwmHxpL76P1pkvrZAjd41tJiURxiSYsRazk1mK4pVy2irc7M8jg6",
  "key17": "3wQdTHiCAL8she4CwF6VCYuHzK8GU6WY1vzS3FXWLeu3SKRnsd4DuxDcsqecUYr4Zbnu65R8M4tMq84h7whEFYXj",
  "key18": "44Y5WZNgvP8nJMu3pUn7QaLxGcqz7SgaECSJvZzaDkNSJJewpHnvPcmwt3mwQWwRTHTg65dxS8Y5oy3nsEmAXmpx",
  "key19": "3HkS1nk4RtM1HgzhL8E9uQxh6BuAPEAsuCPmKNCdz4HEYke3SFUTBDUQwKqJ8R7xvKeALMHwYoaP8QbjmuC84JPh",
  "key20": "2sjEzmFkHu2v7ULx7B1phPe7BuRTomPpFDrrHi352w4fKUG3jNmLGePUiTcZvQGga7iSzxibktzof63zxEKGuJFs",
  "key21": "2cKVqfJKUPnw2ZZ4xS447ED4QE5SzAgmWiyT3MhphuwQYUZwGaNM6rCsWYcnpWXBuQhMqQnB85B2qvKZT9jJjotq",
  "key22": "25NvkLfu7mt7H4h85zVAPhByYem7d2e87rrGkYsp9DttbF5sVJMcavowtnLmnbjUHkdDHqAxBrRWu6N5hp2SszdP",
  "key23": "4tsy3C1D14wXScpeN9p2ExDGNDqhySonkXA4mvi7NUKFxQqAHehM2xbw8E4DZhmCcqFYqsB9AKs8Q57BaaJBgxw2",
  "key24": "4dYc7KuhD4RGzK4qvz26Aee8ZwNxdkYAJCDiffjynnP8U1PVJmVwC6P91mfndg1BB4pNgb5uosE5VGQbjTKJjXvc",
  "key25": "3uyKo57Rg1y7i88pFYAaXXLUBMEC4oQGTHg2G7rtvXKVAKRGmGtw53dTjomjzrGuoQ94s8nUKbF66HfNHsL4s6np",
  "key26": "djMEcP6e6ZEiZgKyoXm2hcg2xbEcTBodSHNVjJjt4dRCAZK1xD3rx1dFN2wKGmJL7EQymtmgnaarWhgiNZL1skw",
  "key27": "27wH3ovTdLxb4KDfvchxMVDWRCj9kLrPPPekqLGtr4MkTbMVP9i8E6f72AUENyuSJZ52ke2DdmU99BCt99BNW9U7",
  "key28": "3hpfkZ61U4L6Q2VbfLkbs8B3n9CVvSWcqTxw69skW2KNHcNAFq3fi6jqd8uzr5YCkbnoJxnBMnkn8rVq9t69qPRj",
  "key29": "64f69cGfjGPXyqEsmQqHD5gxqHeYzSLXzb1BV9n5BfkPiCxFQrQ1ZVTf1NiNpoVxKu6xDwQgkwxxWKpUUocUck1o"
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
