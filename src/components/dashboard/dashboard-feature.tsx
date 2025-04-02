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
    "63hkR31HhpcwCGssyiCoY9yUVPNoQDS7QEsAzBSY7dLhEFStpPYNASKajohfnNkm8M5qzbwyLbaxozHFemRMDoFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Bawg2WBhUTo47xskFEh46JyGySMAim6ZyAGbdYcj73y8oBRTGpis6YLuFpvJbZ6SuS5PLMNvPoP5rp67VLUwEL",
  "key1": "eo3WQTx6tQCJW83jEzyoACdXfNuYmWkutBWPFmJo2KdLqLeXy1JFqP2fQa3ERfM5t73zNnebxXzsFLm3GXpw1pW",
  "key2": "2D4KgBfUVX2g1xEZ84N7uYMgNjFpPn6pDvBrJnNYJtMEveB3EwZ2saPMmTx61uuN8k2NCAi4Uj88a1yADn6ioTe9",
  "key3": "5FmJarjBrkTRLbZMdJgtFMdvVm8N2yUbMo4cFhcw8xBNABuhvQiVxL4uGLahJCrckQc6E8As9ZXeuPZEkekpX4KG",
  "key4": "4Av1m2NkVn4orvZC8pia88Wb3nZJvzndTBn6NVMLwqMpjcsfmE5Lij36rtULgrSEQFw5agkQJv9G9nFmgiCyeMZV",
  "key5": "4W2GGwuRwSXzKqnSefPk5aHCLcQTvHNrhaaXWFzxe1iUyhfUN8xzb5xCHTswkgb4H3A2kQwr1A6EpJ1bhz6oruhR",
  "key6": "4n5Fp3dFNeGMamW8qMTWsCvuDdhL92mM8kypzZv7oYLLNUWADUf5AaPAVAAdLEYG7vhruHVmYXWoTNkLB2qj57Hh",
  "key7": "3MoS6kL7UhXcEqPZDxKJkd2atWYKCfhhX93YMNdrnyLeCwtkSBm11z5PK3BTMt5fU8bJJZYmBfcnHP9HgH1JXPCc",
  "key8": "5ERHkjdjaZY7MwTgX9QxgyoywRCZuettNbpfzREQ7kTFjJPEY6ggku99CC33Uf4GrDgkVtD1q65EXtkqAv1dwYoR",
  "key9": "3TTqTCMDUmRRReovALKRJdRGmMkgJNVpyRCLT8zc4Tf861PWjDn8VLWoGARhdFs4LN3YpCE8Y7tAfsPnAGhbiRRn",
  "key10": "4wWY1y8Ecy9Ca4Uv9324tmic2LyNR8rWgJUNN539ihPQnPaSMkzs4wJLNcSLt6p9S2LAizwCPYesjrmyJmQ9b2xm",
  "key11": "4TgrZpqiXr366Xw1WrBj211go7NBN8RHqYBRdyw6Z2NULkAd9wQF5jFBM6BC6PXbBBQxQAZSnif1XffFQw6ecFin",
  "key12": "2So2uUNG51vvfPtSrRYdMiiUdrZV9jnDqb3cCt22oTk799MeusHp8HLJpnnbXdKhzXwpFH1Z5d4xPQCg2Wdm2kdK",
  "key13": "24PeQzxvYkArt7aBX1RyuX93hUDkmWxfHgyLEZdmT7veDLHnQmx35uY71EAuyH6M4XTDGmrDp3yoB9yf3oXUvfju",
  "key14": "5NEMj6vDB4cmiNC8b3ecbjuMgjQDKeKNKqV42Py89ssDFsBn5yVVXLYD9GvJ5SrkNxpBQudXCmuPQhpkV2tofD4e",
  "key15": "335wEBYPafbajijQTWN9tBfTorDpFCzw6zYPMp8SktBsmcz155ZLZZ8Npfi7gehGq3bMfnrTCPWzDDc27xRBsZvU",
  "key16": "4NWMxBvG1Cb8PxKbfzZgM3HucThzEPwy6QvfsLRCdaEfL3SVMwoDsSfra7Rqj7CV8g5pqy6wboPcKv9fxjYBv92f",
  "key17": "4i99zoZ7umj3C1eG8ZqxDF3CawBvuWXmUGde4F9sLyFj6ufaCnoVTM95mz1SnBhRhtSdMPKdBCHwqTxJ5PGLd3Wz",
  "key18": "5TCkZ5tCFq9jdc1SjhWZkXdbo1wzzRWGBWnEsy1kHKhjaYAb1sZRzZ5Wj1jfYuBfMQB4YgBDDt4TzxeHWt9TGqCW",
  "key19": "4oycJAAPT43zE1iFFvVW4fngz6oRKxPmavwohu4oLKRfjTo33MNq1PLsZcgeNnuozmy8MukmRjpr6NGsm4AqZuth",
  "key20": "3HHzT4KiFzwsdhSFHb7ppmaYSHnk4ztmrGGsXde4JZx4u75SgyAB55Kcc5VaAvnoTFB6rnFaRS9yWBxj8voofBbj",
  "key21": "64yEzvM7kqwySKuhM7abVq6orRdkZxkmNGBCy8P3ZpHzs3Zjfv5pRVCC24UohQecHv2pXvqzBBup5XABws5vcVEY",
  "key22": "5hzCRXnwMFKHa6DnrPjtA6JyKsGvHR966ptJk19owGgrxReFKTrQyZHEc56MZZX4TPtzj8mNjPZihka7E5yVi5Pn",
  "key23": "3hgyBXko5orZq4P3wRSgmsMmruTnMkdKUdk6MDLRMEHVERmB6r2td5YR9cdfQYWQCof4MqAheaed7HkMp1vY771v",
  "key24": "3mD9Py5Whw7qJAZtfQkpnCQ2SUxP82s5rxV634qgNueRKXbvcxPcBT4eTVDxE9Da5zzhrYcf15358nYKnbj4fACL",
  "key25": "4i5M7oHU8SrkoUtc3qNJgQv4ntuoeaFURU8j7vZnB4QAYRqjPZFSkuBFSrr6YnfPpRAv7cezyip6KMQLKD8h7v5d",
  "key26": "5YFnkRDMUiWJ18Me3KiV1xZvtqCrjxbU3WP2C5KMBVeMPuLt3APtRyA8Kiw7Gh9c6dpdoSMV7d7pvACpFHny7euV",
  "key27": "3qJN8PBAvutRwsC3ZRR6Y9oS2xMg6X8GJPHDt3HJDqq3tRKZo5W9vn5vkrRhwwhGH5Z7Tvn1mkuoWZDy6kDWkjU3",
  "key28": "38frzZJJ7KSpdwUNWWrwzEQMejKQndvmEjRwtKvyXApXSyoe5hfcZvqD4RmAfhMD1iHhqe1gjvLFGbDKhKxTanN1",
  "key29": "2JdWtLotxWCjTyQtemvLttg2fhtZA4nKUWwfiQE7ME7B6h7cu32GxRhsZqxUuZWrBn2FUUuVTmMgEoCDLqWJBk7X",
  "key30": "2siLY6YrJNupc9Khu2nDT9E14ze9KuVWwtcqBEcGL4sPHpBmG1L9sRA9hdAtVUuH9WNMpmqrHou4Zx7xRPKDGMPP",
  "key31": "zr8JaP1o8PMUiJq53CzESgLiftuLSyQ7eLGxnYu5jFsKXroa7izmMTCRipKNC7TGfrSqNZbrv3dwCaZRnwk43Ji",
  "key32": "4ygNcsS2V4s1TTYg6QL6sxAUAdYZUpL4QrxrHHG7CWYNeE6za8fzoy53zioA6eLu77jZutGx6zAWWHp2exE6RvSZ",
  "key33": "5r9FTy1xxGHSkHfU9zv35W9ghEZKAgwE26PvjPYoBjWjdYcvAAN5wQN2r2X4478dRsLRkVw598o2ezxiQFk2ViG1",
  "key34": "4bgPLT91wS2C4pcXme9Qm4UqxoTa6qqGeRnC2zRKtPFDeJarNn7a9R2TakHwk5dQDtuvyspfphHzRzNbTWvmkwZw",
  "key35": "wdXpPMKNJagUuu6FZh1cW5iDarYrVzo2HPWsTRfVntFTmQpou4HgnkFGnFqfFxRtMCNCDFTjCB2SDCEwAjokEcQ",
  "key36": "3SQJ7wrBFqiLymGSjUZPmDT7zRWscK95bnz22p5HoULXUiAwmZKzXbq5LxPjHqwBAj3AfXyyPdXWyvv6PE8q1TfR",
  "key37": "w6ku92yqy8pnkvcbTT8JtdRE5SdRGjP76Za4Vs6P4CvzEZhPA7TzMVKGeaBSgtmQoNCkcgGRnbCVsUU5TV3VtFn",
  "key38": "2aNJ7d76G7yc4QL3dpDrcikvZ5rouGD9cqQgep39PfATEjUYSRZJRA4jsP7qjALbVRigLpskwKyg7W1P77y2SVNf",
  "key39": "36XWX21CKupcJbfrCmVnqTaVd1qj86VukrLUBJcwEPjs9kp9UjnU1Krkw75ZVReThVw7EAExV5E9gev28z7KHZCR",
  "key40": "3bXv1dG2HVRzTTq3dEU67rwgsX1W5c799BxrKACksk9nWTUV3A7h9hEHuv5tRdk98gLFbAXwMuotac7sVkb41mRT",
  "key41": "3iQ6AB7sBd8NEEphMQqgckzHpG2zehGcVTp9ar8VAXSbsw9PGxRyFjFGQZDdsduTvnPJ1YEqkdfBroQMFy1gWonW",
  "key42": "3bomHi7wcMEAPU296kgJQxEPMSaMPwQJCuLiENyVF8WJFYtz9kHEWSxAQp7Qd3jW2UyWeiTBi4AZGMrYiMQ2qvHx",
  "key43": "3kAVy5cWvpeEqoDn1zqouArA8ye8u1tB8Fqtzv2DN9f1Rs9yq84VnSjohPQyGJeZgHQJRRRjZoJFaEhVW3wceouM",
  "key44": "SUVzLouzKzFxcHzxNrr6VNYEKQck7mPhbXRkmmG7iRvMPzR37HF5JPj8rV4Qag6WfEBzp5CtXTBjWeGV2b3ujsf"
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
