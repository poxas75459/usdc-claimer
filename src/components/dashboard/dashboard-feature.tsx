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
    "3PeQtDV8eHBNdVyy3w9CJAefFMHDHrMy89WFAj3MJQf24vZHwi12y9mBK44SnFwmMeuxUR9dHpYg79iutEppmJpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JF8K3pbr2gzs6WeS22j7FUPhU8DJ3L3muVcuQ7LHmmc9FEMUZJDiCMnjZu8HtN7BwqGYdzAqYEAw4UABXC9EkTN",
  "key1": "Tkv3BfHJw7gKktxwvbGxo4icYQAp1bScjUjHPbfGncvpe9hEK3rgEe8MnNSDKmdh1LBu27rQWbiLrntgynk3JkE",
  "key2": "3RqzQmjDAsfVxXAFLq7866eLFyFWEG5ATW7SkiMs7oWRhtnTZwPENxuZbCbYjhovUTAi1cVSp7nRhSpEtoEYtN7v",
  "key3": "4XcWw2Xv5ReQvJpKZ1NQaNc22EYPBKbU5vRefgwV1L3i7fW1Dytva2REQeD29MJ89BWCi5CWhsj6JutQn78Ad5rQ",
  "key4": "5RtG6Mf7C7hnsk8zpmBHbCB6ABWaFCpoTPnnv1ERnpvy8xHqiLmBKA5UgtEyDAn7txp11ZXKsnD3qbGykqFGQJvc",
  "key5": "RQUbTUJbYv5uSu9r3q7h2wVcs3b7V89DYLXFTKkSXsqKgqptuUQXhWU6zWxZfdoHTJhzzR8jtipgcqD2wWx28WZ",
  "key6": "4jhakgpJpKkD68tmWCk2ehdMVsmGRVWyUFbGyqMmcXJHc9NuDNr4ssqCThqmzXn2tyna9GsBd7CGmS9zez7Ft7tm",
  "key7": "3E84mSPm5No4YNbcDPWcCRvCiLpp7P335DafUXmTRdzgk8yZHehrGwqiz3Vq3S8Noz7xyQ2JqsvYRrcvErBptmKH",
  "key8": "4xCofThz7hB9tcynSuAmDny1cfDeyYS5dadiVxxzcjprZPZKbYNuG9hfGvStqLz45ednpap8b5VoWjKHsvj8doDL",
  "key9": "23b916kwvuMdodXxfGPmk5W28FXrz6B2PxSZHwX2a4WeiircAZrH7ZNwh6chPssNfGrkKJ4v95azC1ZNG9KYw26G",
  "key10": "2MufxomNegARmkBP2dh1XwTVFGsns3Bps2F8CbddW6VMe6yDrdVyncnsdhYDZrYk2komqK689ZuZSp41k34kzyJc",
  "key11": "4RENQvUpybYE6KnTJzkoCXLiWzaARi9Y3b5yCStg4L8ZVgxVqnnSo9yDU3ZeLkpzvrenuTN7QDHzhobxH2LM65hH",
  "key12": "48MPp7uJgpuuGvE1hsQq6XwWmMQgFVi9G4GMEqXAkAxC3XoJJiNToFmzx7tmNVYRLxy3XbHdpVCxNk3TurFQqWUF",
  "key13": "4qYkcwPDNsfJzGgCB2XqgMov9i3jq8SkNwmmZqKuVm6E2LjYk7bA9XFHSrz7AVEgYJYMw5P4GRatQV4Jsp8C3PTc",
  "key14": "c9WqUsZ499sDLrY4jo8e599xqbaGgmJ7mfw8B3XVUyqk2F2hDbwAMvvw5jTBLsZxspPJvy5ZM5F9dbjQQhNmz7P",
  "key15": "37bTsUJ5VESHpokuvNLgyVNRH3ri1NnNs243qc8czjowvq27NyeJ9CWvMyGxdWVn6hQWj4fnT3312vwKZoia5WkK",
  "key16": "roE3fHtYfy7kZH9nSWhNmg3RswPhVWpDJjXefjE2oxquuk5pnBN7ySqynC2mLTDT87y5sGAjfN3SMUM9zVNXCHV",
  "key17": "65HvwVisvz4DLuxe2bXNs8CocKXszZJbw6BXP24h43zk5M6tpizWUQz9xujzJ497evzVDjLt1PSAUgeKEhdxbYf3",
  "key18": "5roNNjQGeNBatgC2gHhtCH8mgcessJjxWdh82f1crxvBZy8SmVdnUnJ6o2pDnMJygcQbdYVHFDn5gmXVJMvA5EGU",
  "key19": "ffKzyDwubdioatQZet6v1FGxzq8vm54myeiaqdDfEsBo3nFwwCPBD6tZaMF31VnMF7rRRUYC9gesfnKYA1Q8vNQ",
  "key20": "2jobaQKdm4uPJdyjB5J4FFF6fVa6sCDRn11iqQRT6RHTAXDGCUuEtnqqMTnxsRrx1mdLqY2zLfM6y4kZf4fL8i65",
  "key21": "3zCgWg92rFAayi2NLZxgKnhj2NZFBhogmTShwMRNS4z5Nu9FqkDa78RGPGpzGvWg3ANiB1r6pRwutzjpFEbkyc1i",
  "key22": "4QgyWxsUCjj5rTd3NybWjWxovyzMJ7Jr7yXYr6zbYXwTaaUC3JE2B8vdTCyVRUFSPSo8UXemYUXnbcpzdXrU1Lhd",
  "key23": "JaVPniqdhMyYDLjRsmbVzXxmxnSqVWaA2xHcfqvDKL5jYv1QCof1wXKEiZjbt13jJwSHtRSyaPV77vawyGUJqr9",
  "key24": "5S3R2gnesWG8mn7SS8LjftLATqHYCENoEdbqyu4SML9QJ5eKfGcHGYXkrEZMwzi6j1mztTdLx99rHb5HhtNLaKTH",
  "key25": "46R5eTD6x4RDm41SmfHUtrmabgYAZzjpAgmwb5pPXqPnL4T838xTPfgipoHJmxdwXvwaffjcM1gvWs8SEM1PhmyZ",
  "key26": "5Hn3PP61Q6HqaNDmrGeungUAFTDij2LeNGwpb9n54Qz1EuuUVQMoa7HvQhrtvS3keJVKYKm8YZigkfp9yUKZ2syE",
  "key27": "3Lqyg2z7GdWXaeK6S9My8gRwbdQjaV9UMbhECrgWyzhzmZadZB1mTqkmU5xDuVVJGSEXYZrCViTB2nEDwQsvLiUj",
  "key28": "3uEHpLaRHaQq5QgrS9as7UooyH6mJjvPqCF4L3Dd4pzLZFEtx5MpoDhhRzmQvzNqx2ALP3G18egJxv3ZhRNqFZmL",
  "key29": "4GTFGigSLsjov9KpU9zHubp45JP69HkxKzxewGXoEDYJabgRPi5xi3s9YfbTDAJJo8p5yEpaPZsCpcu4ANVdFuX1",
  "key30": "yavUh5R8Wh556ZgoK8xhHKtqNf82d9r2aCQTUEHikzJKqY9M6EyJsgFhjkWAPSWomki8Z5CWZnQzvEU72e8NCs4"
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
