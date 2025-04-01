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
    "2FR9TDFUaniFLNmasF2r3GeixW3giVmgqSNRPWB2FU1ZJXTMV84NDTR3K2T9A3QGFUvpYEnHyvgSrZabABQcyqeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WvVjSc7TV7hEqPvwLQbksjdBe1oxiwFTc3DkExSBNHfNnS9WC9JV63aRDKXxELtE9UmaTU4VGqTXuTkdm7XC8si",
  "key1": "66Ka7EJW2byhxxAfrKUgRq5ZPFh6my5ieyGcxBXrQM9C8vNUE2w5PXz58E2g9yDtfbBUPrYrx7sL9mzzRXJ197di",
  "key2": "5rTSZw61qmLG6u1sTYWuqeK1VsSUn4zSGdh4svjAcMUdN9YeqYWZQoEjg51TM8K4X1Y3coN41SqDHoinbfrEB7PZ",
  "key3": "XXebKLMVHqMkcUn5q3C7XpUH7ntN83T7PYHZjCduKN6i3aivJsnbUoXi6QM1qUnnu6VcbNEYeoUA45vDdEFwZda",
  "key4": "4ss6ufFzmjXfnXa3D149UneAhdk4PHmT2w1c1YJ4Y8gE2QkWWNy3U2vnvy9nQgdG2SmbDnmsb2e3gJoNbpmYFEPm",
  "key5": "31rPitao7HGuT1Qksa9XLhZSobV8RrygCBpFHsk1LJkRgKgyFdcycEKJcynikR2KcffvG6WE721gvx1ZxzXw2PvV",
  "key6": "3xj9L49qLkHyBBw1YkQVTWSYPsVQbx85E91tjvz4ByS7DpFhcorX338hccwgwCF9HUP6dB4MPKvhT54S8ngYQs5",
  "key7": "27Pa7XtHetbjKEW95r7KQMFfRzBeuDNWrmp73zVuPU4xCAwdTn61nFnDGgvGyW2wzKH3YRuG4wi8VvMYKP4qM5gp",
  "key8": "4mWgyzcyWQbAzW6ZgXrdCH1TYZnBqCaa1zPUT7adTPcnPB68PxFixuk6qAfJJsygFUYHDneDPwwotA1oisQrHT8F",
  "key9": "2EiMwkJvM6Cw2B2gpQghByJ1obXPb8zPgXwyzAvLr9sz8F9pVg1jbNnpHwFybUGGFNxcisJ1syJnxNZ2znCfXvae",
  "key10": "3EFFUomfMSjDBH9ifgUa8GkVrYK3PooFLDKStaPpfKSVaWy2QFL6TvyFyL3m2t21ZyxjqJ3L64eKxkyEwZh7t1zu",
  "key11": "2vR48boX2zfYgWeeB2s73KBLpwrHGBSdGWA3vofxo8ijBQ6LcU875R6oPhSCe5VcyfvtLWnFLoNdbA2dSfrB3Qsb",
  "key12": "VzAcbCf6k4G9C2QhGTRVdhsFaQspAinuWZ47VzE7h1VaxqAQpSNiaqytEZwXCFRzSz2Lpwq4eFimKihmf8FJUzj",
  "key13": "5HdvgfFtDdQRzW89zBEWENCAZtquYvGpTwb3wBWCeT5Gq3gQPDPByjCgQzandqd5JA8ndRLuYLEWuvHsUgUAFopM",
  "key14": "2fZiACG44X9G4sGzfqyU9cK8W8BL2ScFzFBfWMnE2C5maTmyjUS49auWEZXse91Eu83BR2pxWaFH8sNrVaC1DJak",
  "key15": "RMG1fAc5sNc1SH5ng2AtJKoC5AyTxbd93VC2Ciz2rnhsovvVjYj4KsTUT8etsntk5SXs3T3sScNXqKb9MEMztjg",
  "key16": "KMhGzY67j1gXbgaN44ZtSUTsduaC1M5yzFz1M1tVgPRDNi52Bobej8zNbvzHvazgteG8uquSMHHJAZ2gjAMZinc",
  "key17": "5Tx6Gaeft1SV1aFqE5wELB4f3iMZFQwpiRP1t934sQePueATBmJu8KPaB8sKY7sTNZ8XmBE6KTRpq4tjehAyjCkU",
  "key18": "29DLT7UospMq6S1WiyfNGYSxJtBtDR1Pitf9Wim9SR7TFqmZLw5FopVa7ed6Bnf8CHBy2PnYGQoWGATaiRuiHVox",
  "key19": "3vFVTL5kYA2Je1PxFj2SoaoTje2UqahrZLyBQzJAvaoYbvQmFdBBpwnVzUo5pcnTRPnRv3JqTzisdjgCQJBfGTzW",
  "key20": "NN2vLtRidbiGYsAoSe3HyNQv44pyqU2RVrrrPXZbTXg3kHgN2EaUCTbJZ8JcRSeq3qN8dva1NCWfQUMKVZzeWuH",
  "key21": "3ZnMcXeMiptUtAH1fsDcBF85A2F2C852guFNTC8cxG9TD7zwnknuQnrEaRkMnAMgC1t3BhhcYaZwYT2YAuRnEPDZ",
  "key22": "WR2G2w1ZNpfhD1Rk4grs6U1n9Ej9QXvtiEFGBtzbyiWx7e6sGBB7WbtTUfyJaQyKmHn3oz5UPya9HokMjM7h1f3",
  "key23": "21LMPTEHx5J1kNUHx78hjPyEWjYHdKmBcRheeqQNbTjcXGvpRMJHek2YafnF6FispJy8So6TqfddHiU5LKSCYMQp",
  "key24": "wwyJf9BPcLEajRqVDnUUbtFAVigYAkiKx3ebmbMRw6mMXpKmEGr7e1S4nFr6uJmr6PJt3vSXDoKPVTYmJhpUagJ",
  "key25": "4UdyBC1nqdaBRZA6vUPgLM9SfD8bxdUz9c7gTwVzSRnMiZuv2Ted3jNMpZs93zkQo3VeNcpRgan9cjyp9SqjC5W1",
  "key26": "pF6NepoyNBUQ1USevGG9RYBYXDXMaUiNjhXrwEfdCTqR2m5dYcdA7REnU1FrkzEJvqsnED224b7NVjf42FbzvuZ",
  "key27": "2w1EM7bwMtWi9rpAqQQ8kdirWw8P16oEEzmYe7W4rgJjr7mDyjCx7n4JbkwfRhX9RZD15ZW3FYrUUJs8kyUEiA4b",
  "key28": "5WYNDvaRa2d7p1F4nPezr9vUGBw4rNM6naWa968edPwF8ruYJJQNPj7Mivo7XrBY4sQwztsGAD87JN2P71JN51DC",
  "key29": "2jCVhZLXBQNCzMgY3cZBNJh84g9KyfrckiGNgsRjqxm9boVRFTrzjh4wNudVfXjpeBaz7UfvJrw2h2CCKaKyifnt",
  "key30": "4Z5grEErVhoY2Y2rBUrngr1yfDNkG2zPzz6rGELNoCEJzWwoDmGj6Aqhkn8bS6SbqKVnmZHGCpUSyL9P8s7cK1tD",
  "key31": "23xoiFiYZbzsCV2xzquASxvbo19r89vjzT6QUnEvVFCUPWZ5U8d6MsbRHqmXmcyNJ5BkszY2WHhbEg1nDN57Xbrq"
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
