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
    "61gUsiPAWYPYJoA7T2bGW9jYqkjTfDzZV233ymhGUudTa3ykTUhDATg8AxwbqppobaNesfS2L1iB3xPbcThD4u6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FiC5PdipkhFfSMqefFa9HCQx1tErcYbrihqVjCHoj7NF2UADk3eMZgQxxCdyuoYeyYbUtLn6xNSMekj8nCUHA6z",
  "key1": "mWKJpYnB1QSNZwWADMC8uY2WBV1ppqa7FBDLZc6DgxGvX4ahT9QPcSz3MqsjJLjB8A9AbyHVzxeQXMocrbQmSde",
  "key2": "3dmw9SNL7RcpKCLqCXHAA62UBtzvvrfV8ZgmceWCD4G4xa2hibS25PP8c9UGS5aZJ7ijE8uMfZBrRNr8DBV7LRU9",
  "key3": "4195ABLpDfxdTvzQatVasgcdczBKMQZkk2oX8DmaGbCpPgisLoAWLFL1ehLHJwRJSUWh9iQnweSw3jwSj8hukzp2",
  "key4": "3uip5SspnfkXrbVGjHT9n5NiuhNVDmYvBHRLjFWWQNPF81Xfev9ptAiTKRxzdZTpG1atBuT7s9V1SLkVLEU2fj5x",
  "key5": "5SzMgd4q8Hg5MK9o46k5bWRvv5koFYHtBRgzYdqpxA21RtfyiN4rzBto487BtZPNFZyYecPCtCXc5e43oAGD135f",
  "key6": "91tvdu5XEjZJHd6UkLVgT8N7HRgYsgmEiUsh2YYWaUFr64uZXStUk1KTvH8vKRb7Ta9R5u39EDrYuHdARadfHMx",
  "key7": "5SiAvGJGHk6N4tmLipRAtakuFCQAuyMSg1rzzr27f47ct7TSaLkFibjYrZSU7xgWwW2KsXUQ5d8k88gcFkDX2b3B",
  "key8": "DqWemNr57ZtV2wLPcUbk1p6Mz3tm8X7ThZNfpVsjDAY6gqfvbW9vJkZmkrtsPMjM8JubQNHDwysLHW4QvnbKnRi",
  "key9": "2725SwdLX7feqy3GQkskHpRLRaDMSgqHA66KyEw5FzZB5rmrP2dthngQZXkbbXFKaifhojKyHH4yv4axzpQFCuuB",
  "key10": "3tgZpgkoffTGVynTAcFazmfU6CV6DHkTHN7SusUogUY1QwC2Q1kxtBuuix2erNhT1C7EqK3w8otF22wJimZa26aQ",
  "key11": "2tMsMoK15zkrPKx2XeDxKRncnCaztCqeyJ2JKheFXABjnAxgkHhi4j9vqzog6eFQCH8x9V5kKpHgLMx8gShKA5LP",
  "key12": "2C6LteJzMXdQQsRqzAwdxiCgjhcWpiHz9wXQifww4VXFvBizCKrNg2qMb5vHVmBAfS8EwpYbGuaobVRc7SpC6ZEo",
  "key13": "5ARhjkXbdAcSSmeYpCGQB5iM8vbadXsgNGLu1zhRx6R67zSCchmTrmoGA3AvVmnam5iNDq77s2utPgTweThSFfGg",
  "key14": "5g93qvuPUr7bgXKxUR1kbkRT3zWjuFmkj2bKssmLAZyEqsP85TeWqPsMeMg318MNdoo1BdiBFVhrp6tceufAe27i",
  "key15": "4gvYt6FcSrRWgp57NMyRR4BosrDVUMPqGr4LRNTBwxNFa7rizc9P31Q4coN8ZdASjwKb7thmfHesknNLdPvgNtqN",
  "key16": "3EG5KSZ8eYQvQQ46TstHw3hvPuUbNK3rYtPZL9rFshpsbJeZCjjSvjN8dWXoH7ATRqeNcGnjD1sbzxp5ShovnrA6",
  "key17": "2SjJ9dRq2UHS3TpZ7MdM7VnxjWwPFwnSmgY7UqvZsLAxSaG6NXEryTh6yb4iV3fRJ2Zru78GYSWis8rgWADsWKVt",
  "key18": "2GNV1xh74tEE7W5xQXh4hD61LrmXaQXTNYBdKetifTYXwSiNbbrdQwRXPyTfy3vqaNdeWbLWx22dfUAF4cWwEKZj",
  "key19": "5A9EwfEPtUzQLy2YPjjTJ8gb3ovxyoRymg8qQEWRCHb1NqaoJuUAuYrnAuaiVnLounZLpWbGZCKragjJNvwvFyQf",
  "key20": "5wBWNk4uMbGDapVjMTBn1EPZ8K4fTeFpwGJCUL6h1cJE7K576oWxffriXmMm4Q6WZ1i7VQciDtTEJWEiDxAdrNXf",
  "key21": "2yhQxU9cpx9hKY5ZLBywZY2uhCWwUgZmqDMVoTe5PXYFoifQiF15fq7RDu31DSUzT81SUFPbAfQ1EnmFGYBfjq5S",
  "key22": "5G8EnM2ZWmrXHQW16UYbUwRDY8NM1yfagpneiGhgsb1eUVGZKst6vrm4x4DHNW5sbS7jencPgLJXhhwE6tnQ68ez",
  "key23": "3TF9Y1jEzqczFxEiXmBhWT9W9EPc6wx7UDLShk3gw327ygKkcAd6i8PYaiPGJa13Gj9sjrVYig6NsaDBHrDQR7wa",
  "key24": "66ATk2CryQLvYMvDfAyzDLMtzbmqqVhbFjhXmwYsVWLNcxB8zjd8L4hVukZUXArDid9FjkUMKjc9J7Lx5iYWTLfr",
  "key25": "DoFriZEYFkLXKphf71UCZdNEKEdnzS1pHscKHvFaY1U4VUjyghJttqvS9ALRtsEvoNgUY1bbxGv7ispk9vqDQcj",
  "key26": "3g8nLrqysyuJqLH4C38MLkseGdLmYCmA4TQETwE9bNHkHUZFWUtsnkvhSNdRS2d4enUf428RvLX4bVuZthR3CRMR",
  "key27": "YJFC2fh3xvM9yCj2VFKw9TVc9d5iWDmGnMQaXRSkTnKrvsGMQTni2zVpYCWn2syjC4n1RDcH92QMXP6CotSGg7u",
  "key28": "4b7eSVoymkxbfr2mQ8ZsUvJ6EnVU79mhYV4ZMyEQyvVsVSE4hmAvn29dJDb7tmyY4xEPRGMCMfDuDti7JogpcRoS"
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
