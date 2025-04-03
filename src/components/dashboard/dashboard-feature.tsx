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
    "26JTAJU1Gzwpi65a8KQTCDbD59nmcRpdPXEZHZW3R1fkuS7uyFyFc8yjYd4sYnWQwVPFKtyaFabyANxg5eAVb2Ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yqhD2XcdgKZNfQx7u5Ug4odnpSHYQggfKcZ7qM4hrJeUc8PDxA4S43qqCBH5K3N3kcoPA6Q5hjAraCf5dJRkV6X",
  "key1": "2vnTJPhLcnBHXjtfCEDb1as8me2UvdRQsrtFSDmZwwbVnrTBYgi8faZWYYEQRYDTSoVvxnRHZSD9nPdTUEEJfrTo",
  "key2": "2jjT2wbyDpjFxhJHsticTkm9f2nyubnMb5mWxsRUwNnwpzJr2d2AsVX6TAM9f2rvuvLrPHPq1rZJWEYfyiNfeqc3",
  "key3": "4KxfBYxWfkU2XicftyhVQugeiHgnTuo2GKomxacCa2aBGNFshzJoabJ73XMeDPtjhmKHH6s1qPovCEL5wpcsB1LY",
  "key4": "48vdqU5ujhBVfFYnCdGtwPGRP5DpuvczdvRr96LqbU7W5yjMJBxvcZtTfjvpqhSpEQzxUCEXqsc8aYuzUWmstaKE",
  "key5": "rKWQTuxXaiyhD4jUjSPVEEdt6Gr1W2mARvdn6oUuyEtsRf8JDn2yG9fNkYpv6J91ecnSByEKg2PqYtPojbxrWfa",
  "key6": "4A44sYkxbnSSKBiPgAoD6AWtSrtq3Wn1rWkGNEDcEpQvDGqunkAsDcJjgNqLpRLsup3XyvMQns3vmR8BqAwEG6Lb",
  "key7": "5vP7Zd6RNJfL1LHHR2PccVE2xsvHa7yjnKHSZVZ5FyMuXPBE9KjrYStUoMq3hfTepWe6oAJE8EyJXPsdze1DNZaK",
  "key8": "HEZsNwd8zLr4uPkPUJvQHiPWC1cuuPHgtt161GYQBCqbP4aaMrMBQ5e3jiRmRGtzpSDQEGmoMtkMAuoa21TiKHw",
  "key9": "2wdQqFdZk2GuqTkQcw4KPzdGVujeMCQ1B9Uhb7mie57JqX888j4xzvgdKqbJat7Y1hLy2c12Qfq7VRoftCBKhKxv",
  "key10": "2Gx7D4krPKtyu32gZJXy1zPyFRQDAJFRsGXSL1FhZKv2ZKUeW7gbN9wngT11zZ1cngiFbrU1K7DPRKk28Li9oAwG",
  "key11": "3xAP7xqPxqjrQ7d6emzP4QPdgMC3oRqPFSnJYuqgSFFqk2CiGavxeuP7RZhqoirdGapPzKz3gkSFXMhTagAnBQw9",
  "key12": "4PkqxsWMfijjzVipFS2hPaf9pzt5yxajPZcMmLoSNkugmgUmUSP8vRvnAq5xnqvpzsUhcPqhS3jgqfPUMbEgeSQs",
  "key13": "5R89igDT1KESihszHjs8YdjvwAN1VwaqmzySqgGH19izbhmaJwwAqV6Ai1NR6mdjjq9BWcX2vxGbovs2UPZhBj8M",
  "key14": "4HMJ6F4gfHz2r1sWN5AYPavr8AzzbxRbvpe6vj3etQKY51LHD5Yb5nZ7pnP7oP8mQCmJ2dtjFAAhBSJ1ygn4qXJf",
  "key15": "2bKqWThfnzCwf5FZonZL4yHa6DDvxgPqq4UwtwvV9Ld7JmohiVjibXcbJ2hDDxuwXjey8GZZdiWfoRkc5HjqCcrh",
  "key16": "fg6Len8m9ERjRXivA1bNFSytTia7eJLKrYfWnJfCNKuq75dfxeao4sJQJN9eQ28UL4s9dpFrRRnwD2MbTRKntBu",
  "key17": "4Ev95YzqSpe4Vg5ugqdY1UaawE3bf5txFJUq463XqJ3ZmCeXe2xfWkYc5QXs84NRqTq1SC9T7rGSSj7YYmpqsL6W",
  "key18": "ZAK7ULBDHDr5kCGH5wQzyixbSA7H48tV32hr3rBUe4376ZRmHESRa9iqsYSSNU2ZmtomU4vBdPtgpcWCWQD5pTi",
  "key19": "3A3gNr7147pENXaE5mjKZd4v3YxNQLmGzQEX1DetXJRFCLnJeNzSTF7JuBZ13aUXSJFzhApQi1Zjxe46VfNj4ips",
  "key20": "3ts19tcSDEjt6DDPQCUF1qdDfKjx4v3G4mt3S8ge5VhgLU7AvmFFgSFZBVTdq5cDhEt1EWVkcrKZswwyyYF6ksvS",
  "key21": "5mCHZb4TgB2ChZeprZL2uq7sjy5CN2YV1gmMVZKRzwNuaQx6K7Skz1co46G587WSVpxBYUtnt6wBQrL7nYQigp6i",
  "key22": "5BbWRvRvSA8XUPNn4wbV7i1QzSdR43XPf7ciPzudu8azfU4q7UDvw9gGqPActaC2eWnviRx8NHRcZCXzRP9bet8L",
  "key23": "2RMm2Lsfjwg7VUWvR9Srp3v17KP8sbrwaVjhPXfj83MCs9ygKGpvG2G8QwU1BRFK2gbGqW8YZRgqbmMise5HwPuj",
  "key24": "8UZoopVwz2Hta887ZFKbeAEqfkpNW5ZuZZhk27JtH9LTexQ8CvCxM1bf1FWa2MxtVT9X6ZdF3BM1ckvHFpv1nmz"
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
