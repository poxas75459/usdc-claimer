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
    "4fktQc4Px1sKpQRgRPdgeUnPsbFLAj5V8bvziP51e41Nr2GMxs1t5bqiFgTHo9M7Nhy6eh6LpdF55K3xxPcAA9tR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b31NSTeDNpaBbbrYNTGaGq5hSzBpnVpqqHGpuw8fDynSHjzUGWU8VKq6SwhyFGWioYUj4WKqC5dajNzUw61W4YM",
  "key1": "3z85sT5TNkTQRR6Q2HrroZgn5R3mYcZZBEAwuXcEJa6ExAJTXGoDZvmVHcgCXN3DFcjtoudpmCUaBUm2gfNpuPBc",
  "key2": "3xmq67XBijsQrMeL1MhpAVLV19ZpMecqywbQP2CPMpnKxTkxNE1bWAA1P1UoYYR6GmPeqtFfmfg1We1QhXgVTaYd",
  "key3": "2LzVriBA9wZqGNnkMJAu5FrtFCTrNuVdUYcCfnH41EeccLbT8kvtUP91eGSRtLREkyyQ7CP82rjiPo6MjjdZX1u1",
  "key4": "5GVcTvdAWePv1MvTjKN35oqoSvFsEtR3Hx2HCZYXcaKA7hLhmY52HCKc4qw8Ar35BHkrm3CqXasM6eYhJoChZAsF",
  "key5": "5vqz3CDQy3oPuzZy9Eoe7mXCcLtneDfABKKqpnQ57tRtFTEymUzqHuHXqUkvJYQf5omKDrsSoAEtYwDVVgvptpPW",
  "key6": "bkiuh636aPBzFZr5w93741Qe2vbhJseRigaGoQmT5bq5mXNM2z1QJ8edT3D9nWHkT5bVHNXLGE8aCxdyWZqtdeL",
  "key7": "2pC2te1eVqdvVUJFLPjyAfkKZsRqa7QczZG6FEB7P98oJC3zwHYdVqUJSm8im6dgpF9KY634fE8QxGVEPGs3q4ey",
  "key8": "4Mienb7ZjqVw6QnKHE9JJjDUEfYPbKCe6Fnb8Aby6qpSN2PZ7GVnUVJfNJMEkhvfBKgahSkmJa881AqMAw9G3Acg",
  "key9": "5LBgckwFUuPPP5vS338HrDNLTA1pjXWXWrhUn1PJ7WC8KVSkWrwKFzasySv7qxncWTFsE9NxNxEHcC4Hk5anDafN",
  "key10": "3zqMo7wtzakEXYP4Q6kSbJ7cpXMM6VsgMuGh3XcbRVRLd7dKrDA3BHADyVWojx2ZgEsYo9Hk5Q8Ey8HQ1t5Bx2KU",
  "key11": "K9K7kcKg1RTagURnqmvFkEFS4rHNPjgYsdqJcxXaJehshJ2RCBTiD4EhuYTA8CWCxA2oec5BxJj9RPMJKWqLtxs",
  "key12": "3gzAEEoEKk3Aa9bVRWpJcRSboHHLR5oE5vfgVQZxtom1rYSSaxWWSL2RJL6VzGDwwGEVFvdcbLd7EtTAkCR9bYKf",
  "key13": "9SbjnmCwcptPGysv3Uhi8hVWpi3m97yaRNEwHPVshqXCZNQrpRAsPGebdVe4jvibLqs6bkBHb8q63Q1MzjMeS2t",
  "key14": "3EgLVnCVeydHaSjVVVRz3NX4EnirhcnTQcjBmdcRAuqFWZFuSspvxQRKuDQuFZJBD5Uk7oWRFhYc32MDXFTvEDrk",
  "key15": "3uMv44f3VQZ8Mpnm5RuGXPnjsYnCy6av6SyynucsoN5YNnLSPQjkpYeCZuGukfXFUWVcLmHZHuvQfHMHbHKYs5GV",
  "key16": "488xCSSb2bVCRAZUVH8gKYPifc25yWgwLZb1sY7zxNBZ8rqZe1ZkSHv4LrQ8M1yCKswM8hV7Qzq1gZQvVn3bHnyK",
  "key17": "2LGXeBJSiiYgxT5E95JW8PNb32b6VMqLZxGGQuEXqygNWcMKjK45u9uYoFy7GhYgEyhzhNWTDVm9oz7TiB9C54dj",
  "key18": "iFb8BDTo7c2PhqNedWxAvnd56yQMMzWQHVYa1gxUPCJSPrFLGGoGqje2wndbzp47uq4H8VdWjjmavTaYrhvNnwA",
  "key19": "3QRp5G4s5R4eyP62YTWWHaRc6hkYDNCbdMH6zRmW7ayV91hGYYVfnCibyWkQYkZ8PV6CtSsTaYkRPk29btz67F2G",
  "key20": "3vqTEMana5oqYqkzgw98iamy8XZFBzru5FQ3U32om9ff3FGeX1o18dezcogm8AZ2LLrZV5VLvQaXZu1BhEoW3Hiv",
  "key21": "5yKwQxWTB1psvKUEC3eGW5eU8vgK5auHFPCHUEVpQUnfYUYrtdYXMArsUD39sy32e732KGgyeGGfuBxdZW9Tnnji",
  "key22": "3P8YasBrd7ZobPFJAMHbH2FgNY8Vx8ScKA98JMVRW8N84ZXfNBgHCoBLsHLpjbmhVrcUoVFDB419SG2fLSsgzh6A",
  "key23": "hwyYB1HkexZ669TF4ngPTKe98ENk4aVXcUHcXuCRur1kzr4Qx81pV33Jqdyt6VjgsSHqvzoD2LnKeKsZaxQMe9N",
  "key24": "5GpWwMKyPdUANmFE3PMEoWm6N6bHbAZbkewrbGxC7fEKAJGRNqocjzXuBvUbjZ744huGwATSD26ovxnT7PQfUJwk"
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
