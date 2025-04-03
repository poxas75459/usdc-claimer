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
    "5eiw7otjEUQuemUHNweCuCUsURrtWvu79G9Nc5bt7LBBJSRwgMDVvWuQaxq3uxJwBihBGKT6Fm97N7v7yHkxYcnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BRXqKPSFkbNfK8nGRDs2RhKKY8E42rycXxUmqC5uNGQ8EESttBPX23opnyqBVLr7f2LZboULzdJSMyA3RQJwVAP",
  "key1": "2ZSbzZRmT7LKCNWw3SigKRSMAARd7jiFzch8ntUxBeFAQDs5YeuP1VoAAj7KHciHvSMsvEtZ6AS9Dg65HFcHbutV",
  "key2": "i6dKE3Y1XVE5NDDRxvcwjv7NTUsz2ifeJgqF9SAanyyYDdeytR1BKxcgSMYBKnysQskSqXJUKEVyGHvDGo871BD",
  "key3": "3yimkjMAdmwkKdebGmNihdVhvy2acmaBnMUdpQRJdjPnrqhJbcZGVtfQEHPz4PwnKavmn1yohpEFnUDkJDenyTtv",
  "key4": "4rN9Xy9o6d7Ty4gkCYBSaXYx52i7vT5ncaxW2bW68AeSxE32knmiKiTinG3578xrjbc7LWoZEhhKX6uUK5dw9YyC",
  "key5": "4nDgL9vWreziW4Aza4PyxdFx3N3oxjMWumLpuortELeDdzTwP3VQ6jhgp8Uz6VRWpTwwTGYLAv2yiumGqbE3vJFZ",
  "key6": "4D2qG2cGi6mLGAts7e57NUj7BzUQv4nuw4kWna8mUucekCdAMSr1fDuxk9qazvZawYvLyAdemh2fmkndK5VdDLAd",
  "key7": "21Q55pxNEeLYG1yzjRoutpDS2mfjQSXNsGY63yvVpJAvMyPMotAsD4nhLEuwdzGc1pV2h4o5a7eyJ8QSETNvz1Ry",
  "key8": "i8WhT6WD11oH1CR4aPWTi1bHc1qMCBRzFKGedUPTL2Z6Ep43bDBijvZJHDRq9JJHrU1T6FVHSkGcWi7sTD2wVHR",
  "key9": "3k88u6xT3ZGEuV5qxJo7MY4uXRgoMZf7MAZGPMC8ipmUTAhVeTxiDc2XojhqLDSyaKPgmhFe3NrzzEZ77r4hfBki",
  "key10": "2854AykaSLkuyf5H6d6uWyDkbLktBsRKia2bdE8LWoHXfWZTjyaf9MaDTYAcNaMtmaLETUbxH1BvmhtM5JYwVYF6",
  "key11": "3DrXKtZnpxcoEZHT27NzQuH6pXMmUKZQZ2WDRqesKSdHiLd4s3caeJjDcBjraBuHoooFSgaDdUn69mjXW7gEhGHx",
  "key12": "eMwfSbgtE9vrsenJBiHxyGtVXigwxDsBPvampCCwJ4xPA18L4rdovHrjsvz2S7k6Ke4MMUe6fE9vWCumkhDujzg",
  "key13": "2XGbKNsq5K5WysKjZiHZTggDWgsPHTsEBCsHS7R3zvJw2RGNYPfTYZo7KPRCUK8ffttr2n3nPXCweiELL647KqqN",
  "key14": "5SCRBEj11XVFrWFCe2gym1hGsSMFjPSm4fjDXRfJg2RvmXByeQKFLce9uQLFET3kUPYXpJeS3VfB6szH9u7oMxVK",
  "key15": "5ACNduWxgLMYj5CHE8cgobdQMabKRVLGud5ndaKCPa93f1ZNHY5ggyD7ukJfZBnGfZK221xVeRiiieen9VfCEN4B",
  "key16": "47CK3oNT9mT9brLX6EuG7xfgb7H4v4d4kg7AyZ3Wgad84PrbtYZDjaZ88Lp5PDxBDWCGYiWvtdeMVGxs3cCyi9Gk",
  "key17": "2RxY18enZhpjTd2aiPK6Fbg9qPPqYNJwaaYMLztyJjbAr86XvpiMqXknmv5annw1jSuxAnEPE3WjhLFtqgbUrBUm",
  "key18": "64siJ2SeDxpueSkJAcYz1Dzh5Xx9soEtqgtDnTpSikokrE56qJ24bPPhALuUZVhwNezXNGNkhtHbNpeFk5TvrEau",
  "key19": "2a6Yb1StzBzCve3RN6EVBjhKnkXc8hEY1va4xyCVj6PgLQZDsepakELnG9GQMkrhZTozMaAPEQ5PYPmGm95rhEdD",
  "key20": "UdTDuU4QHzcwfi42JQFgPiAnoB3asdi75mmdMd2QSdyvK71cJSr5TUQ5zpnCZUgS9nhDrjJo9nXAjgUaqp3vQCK",
  "key21": "42n4CU1yrQviGuLB7887kuWcLKSRf9XfHVqeT2FJV3CYtu6agRrz62xhFCKfyr9ovn4L3kVVV3npfQPUbfYHQjFj",
  "key22": "bkdhhXneLSEP6nP7thzVMXLPbVjkMrsQDW4EYj38WQPvca9THp2FkPCMihonxBanrALFUvEfNCg72g87HUHQuXb",
  "key23": "4NSPUZzc5DmYHnAUFdXfVP8jR8k8dvxqX3PQbL4RDuGXAgjXbFHbbL6SBjVQ6161P2wJVGiG7VewT587VKWNoJg7",
  "key24": "3MLBYFXhD4WqcDpsny6JkJGzemTit24Cyx4EBuiiM57VCaffE3YzggMTbFFYU5PzZ6aZyRvNnM3cWUbsASwm2vx1",
  "key25": "3T7KwBqSb3CZ2k4ZFH9ebYD8RZZYKsWJnUGtburi8hj8TCN5G4gTJKvwbZB2txYYHf6KrBskM8494R1E93V7Qp3Y",
  "key26": "52bbzEjyKWDj1zvxpmj92Mk8kuUA2A8v1eZgpN3Md8fqa4S9LgJTHoNwMddsR8vk5RhMnHBmWB7Z5zFPsQkypHbt",
  "key27": "xVPxz8aQEBMwMTjRGxrrjGihrKXMJzWHnpuPswF1C6zZTF3qCQEdGQ2aHceyECbSy96jcPsnAoZxYfgvND8aLJ6",
  "key28": "2rXVRWQtkg4Xb9rcCVVs15XU7uvARCeSkEyvu6jMijQouTjNPokBqjABEZRiEX7uHP13zeDDKb7DN61B2unCJeAT"
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
