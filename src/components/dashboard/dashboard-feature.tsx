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
    "2EceFtwizRQp1tsYWLmxGPHbiTDtxjxZmnznu2FjksA33fYZfiyt1ydqBsMXPTKKw2FGkJSVqWfua8mLwN5UZEzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHDGwTcKEXxB8MQSAMJjnKEExibTc71dFFHaA5h5xrzSCC36utwChLvivaS5DjrVBAMRgdzqkQWAGvddSypNmzQ",
  "key1": "56sH6nv3dtyGmB445toqHSYjW7Rabp5SVm5dFibEX6mshAcWrKagXF7C36dJQzLf9wF8g8g2H5WPaAwoNCRSCxWj",
  "key2": "32Av1ro9UKxEyQFMXhuEs3zfrDeRD6biGHV5m9JKLQiTesQa3pN5FLo13yL2gCgvbGgMQ6zKSGzHUMG8DTzzLype",
  "key3": "4HMqc9PNNA77XCkXZR2kNKV9gEBmjozLv3zaBuhYXjsyscLM9Cz2hMkEdrr6RP88LJ26mA2EpGFN6yeAUJYd1G87",
  "key4": "3sXByus5cnyfm3nbCYNPmbdcuuHWRz4CSrxqn6kFEdb5JikgaZAG2WjCnVA4tpor3K17uZp6VoehWFjBe2hsi2Ch",
  "key5": "5GcuQjBFUxiaynBifESg8gQoYfztdZGm27VWcxnFqf1wW6amzPWPRCaCRnswHhimsq2U9U5Ncs38e9bvon155DtK",
  "key6": "3NRdDTeuPHGWLo712oQUxzCyXxuxswAPxbQhmgDnArf7r3FFin1h6nmN3SUoPkd7c49TJQWPvG4nuULM5icCzPPU",
  "key7": "5coa1WsoP8sZNhjmRDj9pMNxBqyn336oKzspGygre85hCxo44dTbzBNGwBmc5urDRLzPCJ8fzgyRA1VAGQTBKLjV",
  "key8": "63rA1y9TPSLZDb3v21t6qGNhCbCak53LmiMHNudAEoDsKJYXnCEnzvtcxd6T1q1BpvUvbiVRBCCZRGLSYi6X7H4v",
  "key9": "5hWuXHAWjQfrE5d9dUpjvsPg5MMht3uHZeDbAbNaaqK9eLMt7EjTPnYR1vQH99gpcmpAvNt7pUp9qHy9nzjo8sHn",
  "key10": "b2ZppqM3XdY74dku2gz9k7W84buMvZ8ixmW1bVt6QwEYtC8ReQyi4bE7sAtbLwQ6fnr2wS6fjaDvUUyk49xFSwX",
  "key11": "NbiyuYtxmHJzyS5ynstKP637puNs6UxENETuUZUXkifeFbGr9XRqP1NNeq6r1kCU7CV4x7WKZRr9T6HyZBZm12Y",
  "key12": "5DyC4QTkyqv3e9ZLe2BL7LDRmBQ34BNpCH7E7Y62eZ2yYDyQtwex7rDF73DpyEsazEjKezrFvifNZpxC4F6nApv2",
  "key13": "64jmgdFycHPqrwoCTM5TdzfZjj96zVDhmkG129stWUS6j6BBkmeWD9SScFsKg6B849bcKjAfwfiAQ82xQqeTFfz7",
  "key14": "4tERNcB2ap5zkVzkFuH516xUoU2Lf7TSQUAfLx1vkn1RdWMqB78huQqS9XqCZPPL8tnSwjHGjQuFwmQrqpYxHp2y",
  "key15": "2ZrTCkrYTxXaXVvvZ1PVb7iBuDq11JNunJUVEbTLb8DLsYeNa4iDe2aaprVrr11xds5MdxEYCjVtWLq9UmEexXDh",
  "key16": "3VgkbEZNPfq6fNPG4oZjKqvaB7rGRHJjU4wbmg8G9CnsodSw62CWbywpBAFxkaNpKNsN2WYxTCR7gNSc7DKZ1j7N",
  "key17": "3BLGEycKxdsixrDDbUMvwjAQMRVreGN5LFUjknQ7mTxD49Dcq5fpSXXjoVcmyMcAoXPtNcH88xVUJoxsMaKuXQpG",
  "key18": "614Df8tkjfYiSKmz5Gm479HLTZyswE3G8q6BPqySNyFq292jHF4QSBgSVxHeZm7K656CREh2TMxQjVr44q8tcSTe",
  "key19": "3ena8s3ipvN93TwNyE4TP9JLSfWQTXzfeZPqQQmjtwYKGpxrAaXqQ43aKoeGBKq1ne3Cb7x4FEVja6AXtrDtkNDe",
  "key20": "PLfqS9wa5H9hidUXYesPUhkv7xt8oKgfYioP8TmsXNN7xq4GvMj6AoNTLAQokCXe9s8NKZth5h2e66fk9ngU3XV",
  "key21": "56hGT4nmJpfcnqhHTSVyKazGePp2dFkfoKH1Tt1nCNUpxVUEJjnih1gBd7XuLzXyVxcpzXzRaSBEMAPkGeTfyhtu",
  "key22": "Y1NUrT9quASbuuNYqqo9jfUR1X2tXoSKjzQENMkRJMk5pi5Fk7wBSsJkuq2UhFEepU85cF24QveCKESbD7ggKgc",
  "key23": "3EvxXFzA3NAqjQiZwDPRfgkxZjPkk3T4CBPGBfXj8Z23kz5irg1rtyBg87RCFoPHmQ2ZhB5BHoNA2aF31QianVjR",
  "key24": "UKe1E35L6ZoaymnUHSRLkcr73bMiLNPoriyYoE271LUTMnq6ootbS9yLdrXHEQQYeBJJ48UPZT3KVYwiwE4zcGF",
  "key25": "vamkgNfay8zS62gzeJvNpCQseAtgM47S6P94VYVe2jgBRMLbztStyMdDrQimGeoWWM4Ffh2J9dEFnAXdvEffmR7",
  "key26": "362LUxDEkRXN2vAZRbf6QnJytMvvBJPQmvgQ1PZf3n7wEsR7JYKmhnv4wkJRcbBfHEyx4HfRsmpuDWhyD89kmXcE"
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
