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
    "2VfE25y9JeowXXT9HSmUasXpEaAwuuXY1T1WaBpFiDthStbHqHyKNcdCNo5CCin5JaMFHmvnjDRXj4h1SVvSEVLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cUztFtjRUBjA29qUQ4SDkT6uJpF45xPAkWCyE9qgE9vqt7tDbNnL9wQWks97qCJLxLKqPNQk9QzWBXhBn71NQGH",
  "key1": "32RJjMiv9wtKmQqC15UxsJaCoJJ7GMp9x4REMSfUnwW3pPLZiD6j9cKDRmw9NjnP5w8cQfQuww5aTakKWr37LSMr",
  "key2": "SnL99iGzqfi6egwZJXvAE3gMci8donSXwte5Phx2pTMcs3MTJE5681aYzTNSLJJrwQXkDWeRdGonxptKqAZBfKf",
  "key3": "3X5gbV8avuAswqk9rTieWJbMyd1BE9duXYgHHuoxzBjmHZoqc2AZWps1yMLnK5HRkoAapV9VZvtYAiXf2rXRM4St",
  "key4": "hNHfc4TyJ56ajjgzn1itZoiqq3RgTfuxM7MvwxPMprTn66NcG7MX2CSaSN2S3VZHJzmdBPAoNoPETVhty17q16U",
  "key5": "5rQLfYXWwkoNX8jWBDt3gmPTKQkcG4JY5LzdmkTCEhA8Pkc5ivXZZ898t4w8tqV58fvCh286UoHNSVsQwLaRGfhF",
  "key6": "4oX3Je64yLXnCZVnrA9DmoEmiFnK1pZFf8X1koDbVMKXR2SB4kq3pTZQvKx7PgHKGhyG58uJqoPs2ERVgCuTsLZ9",
  "key7": "3uqeoqC8U4UdWMx7q4CnLqXd2VDWwSCoTArLENEjWAeT4wF9p4o1dTGRygxAhwfB2iwRXKjHVMA1Pppfav73HKp8",
  "key8": "3QA8WJyqp2fud6BKW68cdS5bVVmzfvxAR3HaiPZSZcGNQYNC9DdCn7WT8hVCw6VaoDdU8fKVvdRQsjDFRqhrf6Kh",
  "key9": "cNtmFPV1Sx5HdHjvB5Rd1XdSmGzrVFYPf2eFQG5zx9ZKxnEYpnbaCRA1D8hqSTH2E3eYCYirHPQyrP5EgtPFqFF",
  "key10": "3Z4CX1ZYHmkXh8PAc7PxHA1Dk3KHa6EN4m2ngr9adV4zyREBNdSujMgz1tT37uZi5dGsrTT27TxRTaJ9QvTw2mE3",
  "key11": "chuohNDFKU6iCbnMd1ubFTn6ttGr1A4T1ikVBwk3766taJ6L11DKQNpAJf7GiR4GbgEPvzpChCz4H8bwHwpkUwC",
  "key12": "457iDL1qi1okAKuJafRKiXhw9C4AvNqa6nVPZ8gvkiD6DMG3e1B7NQ23iyMUXX2bj9C4J492uUEq6Nz952Xp18Cz",
  "key13": "Q1CLW8zeKpkF9ab9dExHNTMGRgArsogBkKUcp9w5RnZTidCDsVRgTQCdXE61gwsU3dvoCFXRfgNrFtMD2wLegMP",
  "key14": "3oEoSMi9W1VGyx7jPtVsHvbXnyG2P8eKXDVK5BJqXU8x5tPrazG1sdzGS9Kp15vtppwBPq64qCdbqZRfhwKQeNWU",
  "key15": "2Dw2seXs7RSLKbFufMBgVcAs8AqDDKLiLPWGTDawwZwpmXD5tTfk8fePcysNZ3RVBVfmQ4tuHuFGzZTRBFcsLMPg",
  "key16": "4JEXhpJFsvZN95NWGASwFVteKzpVLsffrTrx6Tutvfm3GoVctQorjJ2sAzhYWSJ2jQ5YcFVtqXJ7b66pVYuiqGkX",
  "key17": "2APG1x1BnfEHa3NxSYRmjF1KFFZyVHRFtyEzvsNkVYmTnKUhHqz3bQcyqZftCiwkx9SvejyadMpZDu6CaCX4Y94Z",
  "key18": "PPqbvVXCmd2vzTuscmcr8td7kNVBQzKeSo7GtLMTews1mbpomS5x4eHDhTBAQNXewG1W2tCAFQgy2ZGsmMVHcTC",
  "key19": "389MfpH1wgunUA2nGFPFjATTdrWnpYjPn6T2pfAA8fPjm9tt78ap7ss1hgcnXZTcm6pYBViMhTPBGDjtdes7ZGaX",
  "key20": "4mAKj9SQXzA7XC8nRnMUhZxVSyNPhUTiMKJkydfcmUsGttxSwjDmU3kbB1hiGS7otn9St7jcGNM8if6hL34TN9ax",
  "key21": "3ZXkrNKGiTgHKR5ntRvqYH7EqJp6sL2YdBtEXBkz1saB2SQagLJdXhpKfmtfDwdkaMNywbkEvZFD861v18z5WXBy",
  "key22": "4oFgxq1zt3xkVTwxMdAAZcXn7sPURhccKcLXkoaWM9tCvVhVyEqLoygq5NXPGtnqzMCbYWC6EnudwfyraKEHM63y",
  "key23": "5sUx1kCrtQuveJbtNJvGPJKSSP8Gcc12rao64yt5Y9bRA45MwZ1Yo4jUHz8HAP3rpLvwRqKYxo2qqMMpfANiQApq",
  "key24": "4PaU8cd7ZFMsVmzvu7EseKz699E2TZbiNZaqqu8vFpcgcfpvgiTYhpDtXageBNcMt5iSMmCNpFgdsNnjb3t3ckxS",
  "key25": "2z19drbuKGhkc68MgmRA6LAbBbYBpoWGCfXJMc3ELjFaBsa5A63sLUvsYidAYZBuQifVcrWKt3pYUChjQv8hyph",
  "key26": "MkQkYpNLzPYAjJLQmbAJFopYaGjywwLh5yDpqPrzYAiNudoEDXhr7hWutwb1kLiooawchfPt6ogectgn4hYqkNN",
  "key27": "2YLobd4fyn5cU6eQyjVZyZtS5ECanD9o9UpLc6kzi8PiqjGbDCySBRQKVKnuzHgcLadRS89TupNhbkciwChjtD67",
  "key28": "27voSniuKJmakGaWpu6WKD4eeeiD9xpReJTKu5vE7zqG2sqQpGHc7E2ncQ2YGjTWTLaGTXHpK2FvPc3avcos7h9Y",
  "key29": "3ovTLKUejncEFzrNWZMFxtX14S8yR4gRaTRcpkLPiaX92835TuoFeUUsktNbeQTcntXp4QAsC5Fqx6ezDez7ii1m",
  "key30": "5q1joDR6gVYAmcE4tXYdDmKnJiBTg8NVBvGhxTc9bLMEtyhsXo6gPNHv3SGBgkfg9X2fkbv3vB9aL2c8DJZMvrKW",
  "key31": "3hLCeUpwoeMz7ipYsB411DHNnwiBSwrBqy6mERra3wPUgm5aAP8RhE5YYRhktL7crztYsEtpH69BkySvzYH1fPU1",
  "key32": "CyxhwkdtK3Au2J5kY4wPACpmG6Enr1oMvZgtoitvDTfA1wF8456KxoJfABF8cJSynYewLJheaoMFwnARKn1HX3b",
  "key33": "Yk1Uni5S9VQC38q7C5m5MVzLGQkwSRxtkCKbPJRTtSfkhM4P1dC5EvSNfRYvmQdHMQiRBCzF3tjyg8dBd4sQfH4",
  "key34": "2zCNFgyvxtVDPW8bSxwxQqc3Tm6Bmd4tY52zamxJb7Qp7PG6gBWGtq11GK5ySDhDPDpV7L539R1tCaM7gEQ1szy",
  "key35": "5M4YZ13WYYhbgpCpS9x7r9iWcWbKBEFvt4sEhPvXgKz59YzatHBdv9artsYrF8t6yDM3HjzpqXUGg5QYBkphj5i5",
  "key36": "2hbuPEu5LkREZm4sZatJPCb71ct1ed44Lcx2TrNSX5z7eMTsAcWtZ1HN2v1XGLKzeTqbCXf48shHVZJuvQuv65vK",
  "key37": "2ptnmMjvDugeHCaFvNGrQQifNAp2WqsbPbaHry34k9wuUzRgDjC51DniEUXE1SWBx2M6SJM9W4PRgJ5etph2g1Dd",
  "key38": "4XzKiJifmDL7qK8HE3wms7WUT66QEer244RyD9zfasf2yfzE2wivpb3UdKvuY9X8BiDtyQywXG2jFJV3YV966EsR",
  "key39": "52MRf5XHEQSoEftsowJ2uo6dp71jXbM9tDyJK43yXZj6noY88ng1agMnMgfYUbFgZRV3hae5H8ng35avZV6BsJQM",
  "key40": "5vCjyUSPRWN7Gp1xgvAZMbgS2rHpd9FMhb26ZVmtWCuwnjAw63Mp7hVq5RaAPJrmHPEodTVYj674pHoYLa66fnx2",
  "key41": "4KMJ7MfYjZtMTu6tLUHnCFLKLbpsmU2iEbzEXdPJTmBprKdFFjLK4oPMVj2xtpBmTfTDAhBpoZbGKFUND7pWJRNN",
  "key42": "9n1cJRWMd8s5k4YpnjbJvTArHBf24Mx5Dr6kHyGMkNYNJJPmVeR67FfkzrJtn2KbVJKQ6bLBrACcBRfLpBNFEQW"
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
