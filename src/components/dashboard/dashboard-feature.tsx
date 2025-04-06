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
    "LXF1gm58ZqB6aNbwcgfUauPiHBRwBCgfhvwBZrpVmauH5ysbJMKKu1nc72FFfVLDZZQ3LPPLtSn57DrJ3A4oLBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZkDCn5yyvTLPXEUqVKGpVNxjwvrLCq4ZjH6QvCVMtok3UdBEuFYeF35q2DnrbFLZfop8gfWwB2KaEdUcttnr8LH",
  "key1": "hFxvuH7XGR3dbGGinrrpagzbuGVGMz3GSZzCCSBV2se3BNwSn3PPJxJ95Jx4NV219RAz4FBUpHVhUxdBt2QwaDf",
  "key2": "2RpbqHxs6R8irhgzhgZJyABb69DvxeYDuKg1WzYE1bw6uJYpKWHJExLQCDVdfb7NKB9Ddot4br5tbRZRSCYQ4NF1",
  "key3": "Rzfq7CpcSzukiwqTpfa19bGcHA8GMjK4gmRvGWEeD1Q7ueV2p92k7e6uU7VvuiDZpWVzgD5HQZ63PB1WtFsXnKQ",
  "key4": "U6CNYjacxVBvmhbR1eksYf5U9K7r4BX8otDX4TsUMm96vzKSvJj7k98z1V4bTUZg7LCPZpxTMj8UgGupWDaE8Pz",
  "key5": "2hatPAeC2UTTpHjsFUM7fXzRVcj1NVExsubgXy2E67WtJPfnBnQLdoznz68kSvQh1N8X8oq9ci2KKoZq2FL2MVUH",
  "key6": "2tTH2xuzbTab1qbSg1uiKa2xjqrha5ytEaMS2iMateyQc3Tp7NxyAU7gkWhqmF6F9nEjJajpPsE3qmA6yruu1eAS",
  "key7": "48MoeHNsyFVLzqTFf2ipc61w2gzo7w9qK3n8MwYKKbR9nCjV9hZA5hddwnJjPKQTGo8xBQp7Cict7tC5mG2VpvZf",
  "key8": "5j2e9bQen2ot4WSPJvhsgtuLsmhagmTtubBsDrEaGQkNUA4kXu3gYKxVrqi4koegfWzzcF3eVQhBgDzcfb4CcvnF",
  "key9": "41t8m443DyNfCzFFqnA6weYBQ9H6JVKHNDTtD7R7q1dWUbLD5hSztpJfSFXC6e2wctDQgPGZ59pzsc9rUBj42vLC",
  "key10": "4RyuARQyRxnU9RAZhqWK2wqphZpp2p2Gmj6rxnY86p6GmpXHzETT3o86oQuqBeXbRqwQYUjmYUpzSBBro49REvm4",
  "key11": "3MB6DTEUD7FbYwhrmVHNiB4JCkg6DpfWmeKDT6yVihBkVuGNuUpkRbPLbY2xctGhD6dpB3iN2XpvARkQW1KVh1FY",
  "key12": "5w2V4pPfFNyHuFdVoVwnnMX7Lj1bpmYN5VjJbBMmp4gt19v3A5JrHLeDmLPv2VFPcajDAcxyzSRsqLe6zZeLmdox",
  "key13": "2g7ZahRQKocujzrdw7N16FJtg8fnETpd5b1XLkE97yGGBYZep12V7Lhe9vpnjwMHnWeEm1tYLrw8RbCr3vRvoXbu",
  "key14": "66GiHSpNYuXRDBb2aLLoWmGj72ZCQXfEbUCQ73T5ANZb2KpxKyaJetEYgcGCLJjJx84QnGuuLjuE4wPfHNTThecX",
  "key15": "4ygZDakSYsyLytJoeweFr1kBz9a44LbtDAh2wkTUaAstCc2amWNU1Y6bcJ7ELQn8KEk5C3f1oVKMHinFGCtBqxdU",
  "key16": "3PCz7zKYyniCX7hV3NQhiJhvu1BPa6UNz5Z5j7Q7ozVp5ntbnenPVMaP14EZfoHfKK8GJo1qVwNGu9C7ui94k78L",
  "key17": "2CuPMXASjX5sxSZhXhT75g893pd4k6cK9b7R1DmQnAANvdVmEcJzAkQ77Rs95exDrqCiNo1TDn9nH4PaJmM7upod",
  "key18": "dY2dVmUXP4QdkM5UFLsXQCbJWouMbi4RtXfFABjiXWSuzQirowu8NAAVo6cAjyhKRpbGGNf6RvCETJZAkfutpwF",
  "key19": "2yobhRojzcyQdpFqykWWEkfGphJCH6RthUWJ5YRrsjNnPV4tE4CpvWbfZQTEv6rPqrfGnZdqS7Q7YfhiJfHEtzRA",
  "key20": "3MiD2VuWvgsotMbTfoNKBBDwGUwbztKGVVAfjMcs89nonu751pEwQoYMpxYaPuxzKtLUGkyc5M2x75sUPtdB95uy",
  "key21": "5k4ysh4sMaE1QmnZZgNj6jz4m4MyMH7897VATNtuwY3D4vz22AWESnUwiunUx8qFHzMETGmsBfk1sVguAyJzXtuq",
  "key22": "397fzhvcfiZN2txyQJ2gPSBfTsjftCxgAZdykpuwQs5978tDX8CQbaKiULhnbasBzwRNmiAPexW2VCt1R2HGJBxe",
  "key23": "4PHGPgFs3EaxhB6fBavbhTXUyt6H4BJstbzACRGYBRBaectd1Qbj1JZBwnh3JWQwZePfgc43fs6DjVRMMXC58LdK",
  "key24": "tLhehzWohNw7gWwc8YYzdTb318m6Gw5Eok5tfqVYVZAS5x15UxYTjv4ags6z6Y4BMuCnBG3sFZXVVdasACbCCSH",
  "key25": "39wi8meLWTAvWSVZHma7Vnox3RDyLSyaZ68ZhQ2pyzKNRMfnZdXLU9HwsEkzAW1EjhJ6tDYuRfFfsjxfygFA4zUV",
  "key26": "539fPxhY4ZYpLguwTVh8DyWdjbLF7SSY9ac7ZUUprNFvsRLj8BVbHLGxpSMsjptdD4m9k5jDKMiQkzLaZ2q9vaWz",
  "key27": "3JAF96GzQqeoiHHNZTmW41mQLTtxVBMuJdHio6LbgBnjNVY91CRqvFhogbbPwDpEYrksdNkL37qDbnvXMV9U8GC4"
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
