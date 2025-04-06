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
    "5Sb92qhQHitzkmpaqFMtq9WqcNpBQCoVHVQwbv5SwbkJvtUXzjE4mkMrdRtS7smGTKgvpYE2Nmo2HKV6wB5EKmpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEMfKExFwzToGfiG7DmgjUZh8Ligo2RTCuvhUUnKvXMpQcq5LKKHWbqmAhb3paTsXN15o8cm9nAQBgignDqc42r",
  "key1": "5UVLMEvAxte7ukuT4wCF88G7SpRSVkp4dSjvbYssY6JhZLSASYyngEdxPKcZQVMyNPXVvwKiUhna5hVVdCZZNsDE",
  "key2": "64kMGrUc6p4jPT57MR7UUVShQrvTQwXgmGntycu3KsCzEf5Qrb5jdy8LVa3kLt3zKF6sL31vwK8kn8VePBeTvrbg",
  "key3": "4AcvifAuqSd12rj2sSAYQeJuER5fgKLMwC4KDgFGbF68ysmCU8H24JMDoUtmN2jMC59VFwf5QZZTvt6xuE4vRkrJ",
  "key4": "2S29mJrv5mHtG7GxK6JCMsmXcSV7UmTXgDJS3uHri7wtLtmCYQEMXK3V98cyKMzJ2fTsfhB9hLTEda6jyMUXKNnm",
  "key5": "2X6MYesoEco7ZCcdTQaTYeWQb2cYNkw8YLHSHpKuWZ4u5CefoWQN7sXTxyCDe9nHk4xjQguJCGNbEAtkKMENgRaP",
  "key6": "J4zTYEs1U9PLhJKiEH7CCrX7EPLrHvocV2WJ4ZUksq5SHFt5ip3MdtGUiGbXWqowjvNtQbsBVU6RB5NHt1UkeTu",
  "key7": "3PoUcsNH6aqXgHvJU9zdzkCcp5Sr6K7RzMAFwXYAe5FABaMfkUqj2RYBUt9fX4NVqSJpX529mRuWxRCDm13qcjLZ",
  "key8": "4Ke4YhDZaf5WKJ64UCdU3YWScfGkvoiWgGrWjSEcEqFzHb43631MV5xWrhCA7yFakwYkaaCzfvq8sG8a7QpxJQbp",
  "key9": "3tsNVLzgTDi6UtgZ7Kr75iWS29PDrCXeE6x3ciGZhTmMRwyM44N49dv8nrSJJuDwCy5SeUFAcyVvF8k2iyHHAHXF",
  "key10": "45ThjkmEc5hwLjmJ36zEv3oSyMeTjXjEqsMLwgJmSepe9tKKKg6vbamDnR2LDKZBQZbQeTjZgke3JKBbZ8ouTrB1",
  "key11": "jFpWgJFuNrZW1BtXyEiE3bQjkTLhMWN4Gp6kxRfmnSuB9VJF9phRHqjHsF1sSWMbUSJ5SUYJ2NANBuEzNRrjZFa",
  "key12": "3QEXMn1vSkNXUFNUTUEqpx6kAfR8WERQbWK8XravhxMdTm8ni5vqQuGLaUF5Em2N3KTMSeab5ymEqqHnUPDJMm2N",
  "key13": "2UXikLWykbkPbEByZJHBNeG97aE6GroyL6yUDy1Sn3wQSXmri6W2BvhYtekJyKA5YJXiCyhA3G9LUqYnL2tciddv",
  "key14": "46EKQqamdD7bRCiwqszQdYrCqj16ULVtnh3MWNzSqSKCUdUNZkaD36xc4TkaG3d7b9Uzx61N3SPMskA7Uikq4Aq5",
  "key15": "26ErZ2iu3XKffz6rtkYcpTDoykMfnunx8XhYXDA773gmDrXaGyqDkzPjXbF4DNPaYATZSrHmdX567fmcJ5qUcTMV",
  "key16": "3MnC7m4KB6LPrm9yBcGSipsiAJXkprsvG1BzqVFkaY9aLCKv43Pqx5XwXw9G527dKgeiCtKF8zUkPJNpmF1ejjQh",
  "key17": "exokD4TJ61fEqPAnoTtGddmEQkmnXyudxFMacTVMuB1jAgLyeY6WDWctZtEeRczjyxEBuB9yviDfQhBx1np3AcH",
  "key18": "2B6XkxD8E2iUYCfeANdVa1bdnUKoC1ZcSozU6tbjK49xQbqvLJGkVrw9Q6adC1ZK8ioawL6FG7t3QF9DhMetGp9M",
  "key19": "5GipYTg1KxmEe5JmeZr16mL3HnayrGCND5ek29WhbEojyYeZ3Gtfg9Tp3aPsi5cNXSyqtCZbDG7kx93u6vBug6Vu",
  "key20": "UtSSMvMcN4RLbtbuhTkufNpKCJXMYUnzJQKWGDhXFy5iQCNMBX9uDT7Spf61nhgsQMojuy67vEhhaZnHwMFzUCS",
  "key21": "2FA1URJ4k1uz5BfbusmcPGsFRbKP3WQUBvm1LFbZmtmLoyt5PyxyCtMJ5m7vtavYViY8CF9MhvijnN8xdGXTV2hu",
  "key22": "5p7mFTVX481PNFHdS2nnhw8Md4Kic1yih3YSb4mXdZP41nsg4h5zBBAUY4TzgpVLeR83NjU3tGFVttTwYFEjQZK6",
  "key23": "5RkGPbkn8vC2Rmp13hBZe1zvtEG3F5TLhxL5GpXQVHryXkVFSQnBcUP6hoqqGXLrUqKDbbGSJZ49d1eg1WEHjn2L",
  "key24": "4k9HBaPB3JENw3WVcrE3zoaCpCJHVX6hzfXDKhkarjw84c6RsWbq7JDTkMoYyedJoD86wVXFN3g1cZGY8AUfatGv"
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
