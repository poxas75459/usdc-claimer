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
    "4ewBdrh5CZi4kzsy7fvvXfFjm3xDHj7JZpDTfcnTEdgDqVad2tZfFqbWwbj24KaSCCpn8kacaTo2eUrmLzy7RSQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314qiE1raVN3G1Ezp6nA6he8zgD1PzLD2wXytX76zqDugiR34uq9GLYwKNcEBrvHw2ydYYAPKVCy4Uiu4sopXG7z",
  "key1": "25GbYZuhhZV6erupMdGGvkKb6PUAJdiqjXNuaP6t7bchAkV2LyCzysDU2LXzovpYP4JR4xskRRwmYxhb45skZHwF",
  "key2": "35KdRtB8KPPb45FBUFDPwr8uRRBpxi9oQRoocR2rkjokww743pxUhytKSBu35TFomoTL4i6Rd6bxuHUAQo4eLaca",
  "key3": "54U4FSzJ5wxtd4DWatrMhYm1uT4EeWKhvXoWovf4nuPpqWy6zCYHjvC7FAAg1V7gDUs9evPqx9noDg7z1hL6xCxF",
  "key4": "3tUTR6GWTyNnLpX7ktqqBwNijvDT1jJ4FjLQKre8at1sF1sXaAGsFPqUm6s8umM7VdKQSADNtcjd3RmpFnxoPpuc",
  "key5": "64AWqszMZ62FMMgfwuSEXtJFWDyNMAQcahtYHtjLPZabf9zJAdosuNswH7TFSFLdhjGjQeGVgm4gvuJKuiT5x28U",
  "key6": "2cJhD8rS4SASX4s4aoGcDzmjavXAxgoewy1zB25ATvd3Mcuk1btWCJ6KzsgsDcKqj5YHKRguq1q95tNdDqDbAweM",
  "key7": "5ZkWHUUmy3zwgbkuAgNwFAb7JzP19VHyYgf7VWh8KMhHxUANTqUG7ZfKS6fvEEjZuj9uMn535n95GPxaCgkS7fSh",
  "key8": "48xxcdRFC7v7jRBwtU3n33pEUStupGDDaMrE5oPf5KbQGxNhkhsQCuzCL5CQ1YgFzCitU9LgjUSoqSvKGSquGnm1",
  "key9": "4NuSJeQiQKoDtQGZTNNPT9MNZWQSckYZY9mtm8H7NMpRASDWiT7UbcAZdtj8AioJkBwKndnM1T2ajhQt6ghqkbGy",
  "key10": "3dFb4gNt6LkadgLjj66wRzrLPWGCYjyaecq7a3d1a5kpa4RwnkLFY1pwYLr8kVP63La13DC1hkVRD9UTs4PyHpJF",
  "key11": "5yjMK5THzrFGsyhPanxxNs4EJk8Cv7Q5oSvGeMYMSrD6UJW7hCoaQJuRk3cMEbpq4oz5JVp1s1pXiNAPkkuuursX",
  "key12": "3HDsiirPkGNhLbcs4cNBqH1N5pV1UmcMz4sUQgm2kaATPdBcT4fcaiBgSJUMnTX93HyUxzxUEPC69SuLwZJrTyeG",
  "key13": "5nLw5MbKLTmbnEtT1oQdn3jU9m4x4gTygq1q4KQCUTQ1e5odBVRsBRxjZHaGqAkeFEpArZTputNqkKEycUMwJvy",
  "key14": "2hrqeWDQcyYtvmMSREbFD6Fewi2BiGMTTqb3dez4HtF4tpxnLwtSHK5cQPMbZCEgCPGMMan6WpnTpx6amby7Gtir",
  "key15": "448RMsn2CHdEysYz9m1nZLuBUVb1yf2GtB2TwDuZKixv5ABWZAztz3stDqzWTobk5q6iyyx8prN6mgrvhyhEJ1Wo",
  "key16": "4JJURLjfXCaTf4HqWu3fEj5mkHN6eiLtA7aeGFCHJ3wHxqr1EBoJpqyUj9XiaM2VRaLvhfmQH9mmpjnBvrUr1iSC",
  "key17": "4N7PRmgvxhTaCi2Y9jxBrue1JZSCVAxv67NKrfk55ffdeki1qxD8TfwEfvmGYvpwLiptnEC2HikdVATDrZfD3prT",
  "key18": "35PgbAi2VJZq9p9SV2c5pVrqmqm8QTgA3NvuqLtn5C4MLqcNtSsLMHPb3jzYYuFsRVu25j8ezxhrtA2KGcmx237W",
  "key19": "5tsEHGrAcPNwvEcLWwu8ThfVMfdAwNkGbKxkPpwaMDGMJvBkt9cR46SuajAbKNTTC86axXdtBs3PYmjaWKfAhbrk",
  "key20": "3kZXteaKeBGpcZMksyrHr82Bx7c3LWUzzCC8Ssnq195Lf2du2cX2cfrwEzfaXMWzpAep7XXYjqX1qhZrS3K9jbBZ",
  "key21": "qZHW7wxtgYrE8KDTewVukwUZGkemqYZjqhDEVecCnrw7DsJLtLq71kjiTSns87ThSQJVWft3f7XCJCwSaVHNWZQ",
  "key22": "4ev2MP7GsHb2zKAHEgBhUhCCCHYPV2fTK8vXAcmm1p3bry96Ckr8gr8n3ofXLVRvH5ywR2nWpgzoCTkNtA9TFk4C",
  "key23": "2kp57C8CgAPCsh16p999XsHsdrfo8SpviD31a2iM8sBgKJjPX9gEwMRjAXpqWSK87G5DEfDvAxyCQiczMZTwE5MK",
  "key24": "32bRrFk1vqy1PFzpWpiLrnuGSkq97wqwHiWK7VbpLAk4gvzLs4zjnrSj3jW1Gh9r1YharLV5HkSm7tvkqi31wewc",
  "key25": "342f9FvrUVUvymfhzNk8ZXJFYk8GjBgsg8GWh5ckY6nE1YXBg6ZyroAbLc8suvrWM75hN8njt6fL2txmxitQsJni"
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
