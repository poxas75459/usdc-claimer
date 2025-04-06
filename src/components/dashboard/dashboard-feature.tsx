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
    "5vrthtAGMhpAsnoPVBwyz96XJJoptHzmgs7dBeLtBypWS98N9w2KefiXTAMT2FgwbzFXsAYdKsEDgSB6zgsoAtdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8HmCQYwjU8oqy4CHh17S8mTwfu7P1jeNELpRRhkX29yapZfWraDhLSWuyk4Q2Nz5yNfpqcutobxCw7V7ESki6p",
  "key1": "2G1Cw2bFCViUXdmSHucJthc7PFhhEj7cB2ughwvuBsLynAXsGQvuarTogTZWdTqA4twA42nxNte1rTejePrXaJc1",
  "key2": "3DmMQACgq6Jyon88r4UEVXPvdk8Tq3nHYv1isgF9TyLcE42JZUZFLHBAf7a9JCGh835Eg4VNvCF1QUBwciga8iWA",
  "key3": "GELrAYtZpdTwWFHMsdhgrwy8LQSUWqEX48XKy9MyZTZPiD8pqrTiSuyJjpv6Jht2PsFaR4UyPDBCxNrKHgPmxP8",
  "key4": "bpXF3ZWivkhsXthevnp5wukxorMbea8nhqfXX8Vja3vgiPcneJShZHHC5f2Tw91VCuXz3a96VoS4dYfYqW4kALf",
  "key5": "572vzXp7kEBQAmupif3SoMgjE5BzRc5f8kqDXs13cmczyhNqECdXsobLZHQqC57BYbKgHTRypB9wXScJaB98bWhR",
  "key6": "3XKohoQ1gVn684Lv9DLdgGVWS1b6uwSS4ZH16Z2PGXpLCnpR4vGL8PRHvadPqJwBHPrrvKjJ2J92FBzTpcm8DeUE",
  "key7": "2YeSsaEcegVmK8iiqWrHtaAtDR1D9RwKJKe57FqHeZoM4cBdqRNZemfoD5j5A7iD3w3oigPWYZeMEgtwvEy2hQCt",
  "key8": "5RrPDyMMRyTB7kfT8aXYT5H9rPs5dfTr9HHpDdUKvKW1SaC1rpADfWK5h9KDdYtsjDRdtmF3TNo5EVikwUmGBvfT",
  "key9": "2NuNCd3L9fpJjasE1KJDJk95a7yphswfCvzHTkaA1ujbCY1Fx7osWjWiMcGcRCGubaStJamSCxjPuPvmiqxwD6mm",
  "key10": "4uivnLMhuDCan4AsMNLzd4JKqXnuAnbMBeyDit4whZgybM6B2TgPSicqfVpQtqfMHutzb3XpofuDBJnCfYFtJyE9",
  "key11": "5R9mQEcRNxEv9TuYGVY8ovwDQzrmXKCmSPL6wKSnuWo8UpFGkcyKA1JeD1q48krZjZtFFcCK5DbDtibwwom2bfbh",
  "key12": "PfjBrYxM2ezJKLRMqaDS2WtAYo4JeDUTUM4FjqYJHWBFqwvuuDXfT1PmoqHUTHqg6gXLfRRhbMeBDBFYgnbnmPr",
  "key13": "dz6cNePQYMEwvhJSbWsAUpx171axwH8q8bJ1tj9dN17RQsjMKun6pBfukviykp1mSPciwcwU2jK6FXkw3W78up6",
  "key14": "3NK5B82iYD6fBP2PrRdnqxG9nXe97Y5q8JwkXhQE8gTxr72dcdgJR2qasvwaxw4J2JGhkSCNESPh9aasCEFqbo8s",
  "key15": "5VWwE8VCgC5zDAtgBV73BBEFySfVehtoD6qZfrZuKLdiD8f5UkQzqmX4GLu68okJ8uDgiWg7v15abSzaxHtxuNSS",
  "key16": "4RKC3YzD3xGSTWVHs7PnzenGz2XDfBFJXg6GasuQrFPBu3DwxQ7ug4aCQhezPJN2ujmbA2fuvKvbT5BAy3igBvWT",
  "key17": "5rSbroxGaW7RLztuHYX7ijn1Vo8P1mh1VZKDWZkiCxjdewPm3PDviBFNHHKmT7GNhLHazCEGJws9UQGB4EqwNSa6",
  "key18": "2Qe6bqMSmhAc2ekzReiHRbS5TzYBzJaznWDFRVWyhf5ju4Lqq4ioEdnS7X84uZDEAqjKYAYPQGcUCPA9JASEaZw",
  "key19": "4XuvpuuYSnwCsRFAXd3tMUjv84nrGKSUjNR2xX7SQinL3CrgZs8vFunAi6Ngr5vxu4BHVQgDJPuDSJ7XdaPCm77u",
  "key20": "4EUtPXLB5mk4d7zniHWHx7nDTbY3Wxqv3DrfWVM9zQYj7K3m2rvuyunAu9QKKqajzNTdLLjXuCTGtUQco5KLudZZ",
  "key21": "3rDyq6DNCxN1eYqhByTfkku5ykfAyMdXjHY2M9A1sMPL83LbQYKCi5fPjApWu36JbYwLsUqbq21FqPMWReee9uqv",
  "key22": "Wd18YDS3c2MjkziRtqi8NNL53Hs8K2gAWVSmSmyqA8UDhscfe4uEMgdijPXcVsctXRWE6NfuNzKQQC89ZMv9EeM",
  "key23": "3Pc3Z1EnJfEGehhytiWt33rmiQy2dMp3QAC4NfZpxUFMKzyTxDZJxaVbjp9zLYjMZfuuYiwo5tMYd49iEHFnjTRP",
  "key24": "3WG677HyBqvXTV25xzNrADSsg8irfDyJgZc6jQTULBFdfdFouSNqnZmLSt7BkhEUiw7N42TRezLwgwhkZG1oaLs3"
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
