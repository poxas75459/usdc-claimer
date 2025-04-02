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
    "5w1snojqCU3e2KwergighPxmDjdcCwV3RqN2wUSFBazRX1CV8Rdpb2usH6AtLWsU5Kh1fuoW5y4NeHSQshzSkNAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uoH2PGqEyqyPxYT6VDejT6XV4DXAhycGhtL93oKBqtsxHXCLm6aZRJD1fvfGSdWDRUJZVtVy5MYqVVzGT9x5a3h",
  "key1": "5pqCnYmm7JZDikxELYVA9UdPwgSqxRmD2UyYuegdBCYFWUsZN4qzLzc6ww8FzGkis3tkuxjPobSdionW2YPkJnrg",
  "key2": "4w3VXcBLZ3L4gKi7arxd2QGti8B1hVzZxGqpLNTRap4yS5XnGwEiPiKLsT4krfdAE4imxhFf4fhq7Fh7J7XwQngt",
  "key3": "Svqx7Mj2Q9U9ftVkoxWxRX7ZE7Us6XVqtdWW2XYQ7CVPrmJyVBxg58nFQFUrxre6HVmPoBnngA9qnMyQ3ZxMtfc",
  "key4": "2hiQuwb5wbjJU7cySzUHbowF95zTVYjDM1QfedbXSAtWtAYwxY255SHtNE45w3VVTQs3f3EDhbTmikrF9g7EDD3y",
  "key5": "5rm8pJ8GNDPJ1FW8KG4DmjdyEnyAWaCvH6hsMi5i2gwEXXiHcNp2dh2q8uTXMCAd4yCq5MjFhPuTWCvHPte4jxuQ",
  "key6": "5f5HysTqUooQKkcrorTrAepNBx2T4auPyTTrtbPM5CZNzGpMtxedBXD9AmKfDvmrbe7Eu8zmHo9rjTLwmyB35dfw",
  "key7": "5WcdMtcu3azbNfgBHfjftJUYF1wRc64inb1reFMMhQJMQHmigH8ERLTb4gu6K1AmBX4qHdBht1arupHEVc3UZAjD",
  "key8": "65Gqox8Yep5RMZwmkyuoQPnTd4DdWPZNeavwevjwU2aaiR57FuLvWaWnZnuLVGYXHAXmZsmy2uQtEHTVSGdSKs9s",
  "key9": "4TzTtVHtDQWicJjeNBZL5vA8SuFYAwrcZ5hzR4Gc56szgsWbRzUtjuRLu7o6o2amSHWyQLnXH7UjXXRV5LkBUcLG",
  "key10": "49o14MdmUMUQgWr6UpEhAQeu3k23a5iwYf4aMGRgjP2k15dQdpQ7wmSDZZthCwJVApFk6dDcyYQ7ZMa2Mc4f8zCS",
  "key11": "4ApNA7t2L9rrYRybCfsCqEjGqVreKKbzVJukKa4hCAdo7XndJtokmuAMYLckqK2TPn4bJEE7cYbyY5HC7mDNYzgw",
  "key12": "kHGRVhHWzd8y9hzD45yVdsJYyuK45b8GVP3RkQW8y4VfjA84k6wXfZT1h9UZcb9REmHhyUB5aKWEWfoefXnQb6B",
  "key13": "PAHNjUrTPDtdy4LrZMEC47JDrWG95pjtdxujJuvginyRSv4bidST2H9Nfs1YRbWsfafYA9PJ6PePyqPtwVtSbu7",
  "key14": "446gGq58Mbpwygxh19Dn9GST1FQL1zHnHeUznfiYqgD2aBv5pE5omEJjcJT7JMbGphE1rMwmV9e2BwE1VGU332CP",
  "key15": "tiMZrJB3Lbr99rG3MuvECCfg8SGHocugRiXekh8y6M5takiDFwxdWsLeqjQ8fLbDLoadvr69VK7bykMKjDUrLqx",
  "key16": "3n7DqCWUYBsUHHdj47dmgrs4dH3TLVKWnqz6tx2SPtDBKENQkopcVjZCsXdBvx5XUhVSXTVG9bStpzuipZzFm3oF",
  "key17": "ep5g58caszSrsaaw8whzdinjRVfBhJv5nYAMKNU6745RsCJ7gNvLEHVKxNdcFM6dx3T7bDpFX7dPQqDzCf1wXVV",
  "key18": "53BD7o2cCRs8qJ8TaxSWqa8wCrwKhaKH5PT857zSmi5sjNFwZpNpPVteRMfAp5GqjHmGQPfrJewL1ysDPGYgw9UW",
  "key19": "2WATT93hF1TvjLE7KPfv14Gy22iZ7Wu9wh5kQDmpDWTLRcAFRUoftvBLe7Fxzd7j2UgQxEC6L4JyHvgPedsB6PMC",
  "key20": "4sFobLpiPC6CgGKxP3q5Q8X8wRwNZ3ozGCRqBpKHMsAT5fcHJhtEhXbYfJ1kbWi8ZLBUK6kR1iHVGyJ1hBEfM22D",
  "key21": "EVC1XpqA3qZeEELw4YeBxGkFMyg9YPrT3UrYUqUjn3BVD6vepSoTxSKWeinUa51xQUcDWLifSZnFwR2tq2XiHBu",
  "key22": "26LKmdnrnifh1fxDqBMVBXxAmCGDkFyCZ5N5ox98pzTZi8orCuD4DSmsyfvmNA6pNT7HgJMmmc1kiTccupjHbKya",
  "key23": "2wYn7yVwV96RkeJxdVrrbuWvXeKrbX1CqFDa9XXGkZWW7MvimaEoLftqtryqg3Lq71yrJPfL6wbS9LahmNwQeinj",
  "key24": "5MT1j2W1Fu53dQW6SqB56kfbfLMitbxrbqBkyUf6TBoHMnMaKf9HUaXZN5DbE4uwSEZ2tAdQsd3CSJ7YDDRJM3sJ",
  "key25": "5J7sHNqsoEVhWiNfyLSWNS4hYFhxKUFT8SDDhZwiiEgX97YLvMHCmpufVnbWRJdqf9wsWjn392B4YFwCxQvPNDgz"
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
