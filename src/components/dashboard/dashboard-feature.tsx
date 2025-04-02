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
    "51eck7v3yBzmBpr5nKresL6PpyoSfw3MvqcQm9hjX5NA21g6FxteFHsbmeXhWebgqW564QmrdHEA547ng4SEpvHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eyQdMxKrCxUL6ofjukG9hZwiM4bnDsR2iRMbMe2YLdrBYa9Lw2ycZRj6QrFcazzSW38q6GE1M6ccJYWB7wYowyA",
  "key1": "3q9CAQini96G8Fyw7fVBpXxX9fDVobnDRYW1b3vwhKkMHbibQZsdvayoraR9qFmm11bBFYPcxwnQ7c7Nb465ASaT",
  "key2": "5kdMpgz6CoRH49RMWwdPqJTsMC1qLscmBMvJBvqnF8bv3vQwJMWVB2nfgYaEq7YGC6bMnDYn5EXdzZUkbNgZ3tPS",
  "key3": "TTQHpZ9CDEDw7NCN7YsSdxt6YEQxHi2zqBaVLBvVvzV5ht5C8ko5uxbhpg1FHnS3HEvdHVnRwAjFvabKGgPqu8R",
  "key4": "3oPNN9rHTQQNSyqDaicC9uiqRVc7MGVCyzpiaaHnNrwUmES9hxspCpoV12Xu8frWXHYGYK2jQWi9BwKW7tiiBA9H",
  "key5": "3BCztzmUefmyvUC8MT1LDR9PLyia196VwijycFBo6nDmdXwDeEtmsCB4WJaGAPSJNXVcPg3UKj5ctibnsqYiSoV",
  "key6": "2mGQ7t4mqXqwBJq3nA8W9FPcwWXBWcXk1EnmdmZA65oN8C4DTmCYKiF4NJtKqNbgvMSAY5q5kXwknbZwTTFqyNvh",
  "key7": "5CaP5UcjwHTWNhf9XExFHxatVh1DAbhNRedbQEVtb3S5dQFPBXNruTs4MGut4ncWAyTyxmQoDgtqhxuXLng61jX3",
  "key8": "4RgFSVWQxRtSvuqHv3YxRkf7JA7UuUuZxm693J7Vo8ukzGVB54oK4dmQR9iRFhah8LHbQ17TFnJQJ2y5dtzQiZZY",
  "key9": "43ut5VtkL5w3GqeJoBPYPeBZj37nCw6CzU3neZ8ZyMyWNXe7gCnHfQoT7btLywFmuZjrmh1YrN9ttAkmW8WkF4kL",
  "key10": "57HvaLHjcWwGXoR3n67D8YJtca4LzwnxRJmv8z1GiCYXX6bMwb9crC7bkq56CoFWPPCoWHwGpKLgQQ9Z7CriAo2X",
  "key11": "z4MNiu59jFBDqvhfEXs9zFe4WzS9YhBgTPeJ9BEVfK7bWVJN9xxcTAB8kTDFSsZx7okESp4jwhgvpEQSHhgbzyx",
  "key12": "5otXGYQcEGVswESu4nvu2WiboAZNj8U2UpbxYvEJwkJJDYBpBJ6E8AtFMrChb13XHW3yh36pez2DHpeVvXKFjU5K",
  "key13": "WmooudLLhJnrqAyXNXcDg2xHR5F2UsgHXWjaYAi3pueVTXPTSJ7x35uMG2oYJmTu38JSZLNHgqMXqfGJ1JZXbkS",
  "key14": "5ew5QRu5hYBp7W9Yt1ijZYwV1nJEC15NMsw3iya1jS1rEfW2EQtyUAvupmRsrmpPH1cqNEKSAM8s4FKMPaEzn4PF",
  "key15": "2caDGtoRoCJG8m4LqPJ7QLy3Bggtz7wVM1vSA1gJ8kNPtSKyoB7n5wWETSUoFfVBiYh6S8199Bp7cai7acU3Y1a9",
  "key16": "SSj1yBtmsEPJF27LVvFtS67HWioGNTjUvF2VFuXgMBxmS1ee6Ynd48D6vznupYtzQcFzMXgfsBXykpEqZc77cDc",
  "key17": "31rXg3KEafw3MQwjbEQYkppm982kdtQvNHy41XGPeYWUHfMUj1cvSpaqJwDQWFg5U1UXviiynx4K14yXYwHfAi3k",
  "key18": "GSztHhAZLuGEFgLUArr78oUTP9AHyQxWV1BgRzANp3buNp5dFB7jPxovWo9HCQutyax9Q1FVPVRd6bjjdTieeUj",
  "key19": "21pf6jw4zLvrChyTLW8RM7WV6q6Gwu4S1pvXTFjKFbCWifFU1j39J6tnQwVzJxXT2pKiMTzELDsEUmwF3o7C6VQt",
  "key20": "hsELXSfwb9mbAQ7rzYxYZcJT1PcrNkenn4frB9khLFMJqywVXthSYWKNcBdKkYhK2aZg9qpqh6VZUbyu7Y5n1uQ",
  "key21": "4m7oR9j41cjTxjQfbxy3K1AgasWDeVPtQUvZrLkCLVCrdeHm16nssjdKHXeUYRgSxFUE57KYvwnDB5ZXWJ2HecER",
  "key22": "ZsCAAexdmRvXvnL24AkT3qNcTfbQYxabeUGZeWf7DebAZxq4wjk2AzULi2446CV9rqcyjMcebdedgSKUp1RfxdN",
  "key23": "3n3nWQLnuydZqMtqNL4niSuyRzRdVepTbY2J4aexKHkYiDdsMe5kYWAuEv6bn5xpmNV7NVpVDgv5t5ey21UogRmp",
  "key24": "2HLB3GZtUgQb2vDMG8Fuv7GgEkcWfRxg1kevBqXPGudT3ePyn3vKTBpXutW1b3bJaUrcx1gLDitBx8jdMxVChUZs",
  "key25": "2M8d48KHyTX9mk9Lv1N2sgyzxJ5eKRhKPBxceeqSfw76i3k1uDD5BAYnnf6cfXLNbom6jem7yo2c3c1tDkkyFsHJ",
  "key26": "5bce65HMJNSfPNFStN76mLE3f3oohV5HMuHpv32ugpHBYu28zjqjz8viFgwqDmHAH2bYbpW5CLVUWN6zoFBzCpQR",
  "key27": "61AkYajdn9vNno29HxHXajbRbwcJwNv2LFC7GBm3G29F7tXFr5dgDKrETVHbZtmfe52Yes8Wr9hkHvDehM8pULDP"
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
