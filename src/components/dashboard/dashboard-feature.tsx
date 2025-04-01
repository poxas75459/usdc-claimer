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
    "28fsnfp2HSvbvta6XXoFDpqPLNKD4TNpnWm1MQzUMWn64WE9ZbJe3TagXp3qGdHaFhYiCKDajxF9PXYFqJKYZcSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAptSmcZG1W6HXtUYJWzU2ky3RHx5HC46ELihgCyZABy36nSh98LpjkcH1uHqxtTQMteJY9CqLj6sP4W2qDQiz8",
  "key1": "4ewh2YtZdA7ZcRNm2vyQmHg61r83YSXX5RiPqyUiZunhYMFGAVvGFL7Lsfqpjeb3NWWmUZcrMwfPMj3ZSc2ZD88R",
  "key2": "3BSYAB6r8vUqANVHjSg1k5zHMt4o2apnaitbRD2P1ByE3FsMftrmDjYkRwiW11GefaRSKNVhJWwigkQBVWcPUBhE",
  "key3": "3P7ys2yKKMDezffYpyu6g9UkAiVnWnGWhugXA6o2MFjZ2hyZHBViDCmDQ6wJu6KX6kgdcivKZSL8m95Hi8RJFkUN",
  "key4": "3E7uGgr5RmS2WCMBMudF3eDVimCYxoLPC5i8ymnEwZRzwmnq7VQRS2QkKbd4GNJQTkBEmunmvvU2eCNkRuF8963T",
  "key5": "2q4HfxvmQmqZLmyozps7ijECpwyqvmaKhXRU46WYxQ7H31ZoCJ7T1GkPoaPs5R93XvC481LUK9HDjCvVKwWGrfna",
  "key6": "3h29qgTrv9Ten5xtDKH1n2TKxgQJrCr9FYZZ61Ba5SCg2oyoQ2xV4kgM1norUm5vcM1X1ekmpAZvmFKGdN1sxe6e",
  "key7": "2rdr3EGChLEtTShxXmRu38iKo6zP3xgN325ZsAcMtCYn9dQAkbfC91hatAVShUKhPXD7Ktk7c3hkNaEmy4Y1qDsX",
  "key8": "4W7d8RUaxi7nmQss7vJdkCYGPV1Uddfy21xjY4nAJjs4P4ohNMGZ465cB8w1QyfeEQeujFB3arCnVnK4EA5xtPAy",
  "key9": "2ZvCJ9GQPUDqXhqEUgtLz3KnyK68gL3tYh1piNp6Kqm2Js3TWupMHT4bjaUcEjZBykgXznQbiuWZkTpvGgAncXnb",
  "key10": "X7jFwxdh6RnAtrtMA5RveGvhktwX1hHZw2vEmZJpTy44rNz72UjxJv2zs9S5i2cb5RVToiaH5BaHsFkLhQr4V27",
  "key11": "43Qi7V9aPVWoiowThk6ndzjrY3CSt4dULYrfcNfPvjNegaPU9k3cD81MjZRRDAhEMbKFtKN6Gaz7SeiFFYKyKvQ2",
  "key12": "2sJoCdjorhBEjTJahENe1fF2NjDE9qNqoLTU65ndXtQeCcbo97vdU7LRAftf6RgRCe9jSDyWE3UuaUFXbryXJP5W",
  "key13": "n4yK9tLc8P1gFwJXKDMqM4B2KQmabDtYRh1QVWNJLz87RXwBjGZMnPBqvitG4CYAqQqSuwVUmVGmuhfpcaon9kR",
  "key14": "64KDoQ12a6SjfLFhs7cPZ3Sdvkr8zoMvYVtcYiEZZSQAhAz8DwhgYCmgTnvYiyDvmVMFWEbdzv7wauXodaGBevat",
  "key15": "5cXAzeRoeJ9Dr5pUT3ArAUQPsj5D8qkfVe8qqk43ukDdyrCxk78tPAjmBtnPcMGtUyde8iAiJ15ykJmRrGZD8km8",
  "key16": "5XzbcWrqoeNfarcXvbjVb97M2c6DjFDwAuJtjxk1CMvGa8zqVjHzcmWGqUyDU4LUGPythNpGCTkpAsufyLiDheWJ",
  "key17": "DYezjBk6GS9EaEmrT4vzBFHeXF21hBMbifAyeaKeidc3EGKAFHTbHL1o6kTeZuyeyAsqkWPV8mxi7ij8r3p8wrR",
  "key18": "2uShe4LdWnanJZYLq1WqQWN7yc7Mko2QT4ihmj2z92GvupFnerLcCqnbfF4kZAzFcNHyp8QySFaRaPsWPcZw8enE",
  "key19": "3NgGsHsX8B6jN1nYW19hA8mkwNETCLP58DKDpNcXks8VwFLw4cBDfqWDWE154kYeHRYG6D5GiyJJRWgvwALZr3oA",
  "key20": "59hoBfcswFPNzQN1iVDxR2SEwW2EA5DczWRmQyA2qwHsBfc1w7cuDzYPevHZqctMHFNvFm1aoDP88xa7qNGqQwHV",
  "key21": "5vwQob11uLD44GSwaStjEGCUXBGu7RNBzVCgDzSV5tR381bK91QFhv42c5xeuXi3DJk93Zp3KeNZBSjA58AFrqxM",
  "key22": "5yL6BYUuhiQzfxBA3eNQU5ePUoXZewjPZ5WinvJ276gmcY8J2yxqxvJbgxwZUcgVxezMNLJoBbDrFTNB7vCFRtYx",
  "key23": "5bdzbEiwggHqWqN9Z1nK9yXLAN6Q5LJQaPZ5ywdLGkyfCEY34KC2hUbNVk46zKRBraiXFg9fRg8Fz7cmccJZHMzY",
  "key24": "3vvZutcHYPzqeBdYBoko6U8BUAExzE2PJJb6HhTb8xzuXvSap1E9YW37EoxU91fRnWMAihUSx6HVkHbgUKJUDtiD",
  "key25": "5KnHxeVLHQ4hTdvL4wWUxDLjSTwM16amnhEAts7qNnxuLkdAiJAvSmX5EefFsaxC1iuvBzDmVTM2f42yCfcSAz5J",
  "key26": "3D7b4o6m9TnTjotnhLW7bcj9k6VbtjPLoYtwvc2oTRnkHWMKrKLJkPcJeeQELtGzpc3YqcwNUMKNBjsgFPdtirpc",
  "key27": "v2twEkTTQ7B8FFKyF3Xz6G4wQqV11iJg5YtGiXQestpq2r8LrW1x7aqX6bD8DpqBkhJMPHwW8MoW2vkmsXWz1Re",
  "key28": "9SBpEVFQXtz9nRm65FsSk3xe461bEjme3UvNCsyZRu6PYP5LhL6KpkqqyLmjYEuTEF6jx4FJ3hhHCJgGUnw1CdG",
  "key29": "5zCqzjNWUinnjY4hjFfH59rsxeR1bHrEAL333yoGRL7GRaU3XMioaeXaVrd1WHuP6hWEnvUj3nqbzKb1Yv5rj6mp",
  "key30": "48tvbssfer5omttgzc9H74MosbfsqXjChUevuXwAQMfV4DKE6zqGE2YAVwUAjsDr8J96Kjgnc9gAfnLz8mkwdAFh",
  "key31": "5A2nyPPmiFNvUPEPoZGB7RzfvEHWttM6Z78ETvT5D7bCWkgzAGfj4WiZtkykDdx85W5uW7Xjc7xX6CGw6zru1SrE",
  "key32": "56kpBCSfwoLCXAB9TgqZiijg3kY9q1r7mWzTReJFVUuLVxDwdEQmZN5cK8aHs4cE6grjQWTYYBT6ZgCoAxbwee4w",
  "key33": "4bbJCLzTWysZHAnnAkU5Ze9qnb7qAiJCBfovtsuUKqPEHTr8dujtjtpVx2MCtHQe5azX3o37cKYtFRh7td21Qsbe"
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
