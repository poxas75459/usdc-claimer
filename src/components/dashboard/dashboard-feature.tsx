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
    "4pUkeipQyt36Frv4ejVeWZumuihmgi3mFiGd56ht9VHcyxrWNhQS7vk2CGmSeqxMjK1JHssCUDiKzAC4hGmsSccT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bkvzEa9y6uS8pbM8s3zscC5C6SwCaHr2oyGSYxc2LS9huFJN3r7b4TDsGDctRkv7qXRQg84KjsqPtiyfjzBSMmE",
  "key1": "3AkqQiMUFD1ENy7LdtyTcqaqXVvfiMcLXFXqvqbkDKhcT6HAMP5cvXGwNd2tr7T1GZizx4F4Z849qWrf6Ysiw7xB",
  "key2": "2EnfcNUUazwEW4S6CecVGLutw3aKY8C5bMJeWXjLz8CxK4im39nERRD1vNEo5ZWnWXEUHLd6fQvH96yJrn5jJQnP",
  "key3": "pHB7yJSZwSk9Ydro6yX2HTbASdgq5JQHpGG3jDqJDTNV1Pd5KbncwkhYwgzDyUQ4Nt3S7kuT4CzS4sFZmxybYET",
  "key4": "3HU8QNvt865THLZ7h8dS3A2hRrvkNC5qV2q6fK8Pez2bEtTsX1cRzoZEMFJ7ww5eyzH622bjrW5wgp1qpo6JdySK",
  "key5": "2cdw7d6YmXNJQgunJiUfABmThUq6WfK6B1bChxTU1rLziwsRZcY6dqQ5qzTDbXjorSJeRjXMRQebjRou9pJ3jtQx",
  "key6": "3nMyvMxoCoHVGG7cuqeupAMS5n5CptLijqSgBPKt4TD84aZ8mNQ9g3W1UvBVA4mcpdFd3krKUvPJr5hkX7HtMmqB",
  "key7": "2rmTcVxy67Kox7zWq8z8GSUuR8i4znzztakt4BADDPcLb7pB8QCMjqqv6xctpnHv2EfYqzAzAJBsvoj3TexsNYkT",
  "key8": "5rVDSxU4SxVocu7wLpnH63U5aUjgAJ5hcckLbhxUA2JDJKzaoAPbVU1k9qmzYcbKtiXWAXQbj6LvqzzNNUFTVT97",
  "key9": "2uZwZr8YygikHPuq3Vk5QppSJEP3Z2qfhqeMT4KuKihBAqmgSUPS7w4iYkSAQSK9JePXA4YxpbYG4jhRk7SkakpY",
  "key10": "2JEi1Bh4QwNKCYtxsXDesYbc9y9sNGpN9UAMLLfdvrvHidviySSAT8tmkBYe2ZrvfpMNaSGh8bB2WxnWmejK5Wn6",
  "key11": "5WBaLRyEZdP8iX9A3WXEsmwjuSgShv6vXXMUEbxscyAbjTSNJ243pDrwRTMKKVb9wYpKdTeLUmKBYCKm86H9DUBy",
  "key12": "qX1SbXUKfunK2J8H3Wb7DTVVinWZUJAcG5SXxpyWSMSJrnQUgqgzfEx5SzzTBMc4mvAeQsAs4D7rAsktZStxk1u",
  "key13": "3xDWRDUorYfXkymN8Gp8KtJ9ThwYEifEeAaPQsvzw16kf8iBS19tEkzdWGUDPTW2iXwF1ixjPFtc3MqBLG3f6yME",
  "key14": "3SFXTADyYmiRDUUhSfHkG2wy6RKKNzpoLmBVS1ZPDBxBa1BrWeNzUFd6NKQ66WFK6zNuRkkKAS5NVXziDDhwy1iR",
  "key15": "5iKTFaYBqJjqFbqf4N67DwsDAnYCoiGhERU8stQFa1mtHzuRJeCvE8xu6adwFThPNEVViu2HP5j5r4GrNRRwQFQ3",
  "key16": "5zRKEUQEaVrtJveiPkML8drq9y7NodHppbdzWNgwerLsrBYuxd9ipRsojex4rtuhWsSpeQimpHY4J8mdKLFf8eJ8",
  "key17": "5SnmZsnyzK7sLgriPNx8xR3TqvNkBEv7Mir8aFgb7R3y4h3Ez83wwQkv1T2m2Jv2niDKFTkVytspWq7Anybcj7vW",
  "key18": "Ujm7bVQwQbksoqoHwj9bBamhkwgYGBKZU8XFxtQHFqoDGgdUR6ZjPdtXdAHEKUxvkN8wVqB2L9MQzoTz5pkLGKN",
  "key19": "4HszHvZLYR8C8sWAaZGs6WhbEXqk6JSFTSxYkhVQm6VsPdXdRF9BXf69d4skjw7MNLynYjM76EnEFzT5EXAbHxbC",
  "key20": "3vd5VAeYZvFEZzZKLLqXJQDdjCaEPKy1jnK6fznT4dQF5UpQFgSmnxvaEg5LM6FapAu7EyeHsn3hxy35FZV7Y6ou",
  "key21": "24V9JmgAWFabaQT5jaEfFdwj6jAywM4BKWwEs7DycPyYqTP9YegRcMRGqZTXdqo8ZJba1xXccs6K3Gq8SLftgf98",
  "key22": "5DahQDWure6d4wDEWXMyerXy34SaCsQAE8NRjmTREHT6hhEvMbSd14tKArWDujNMqqXc9RRQMWt9UdqeV4MK3mSk",
  "key23": "2F94eYGp4UQ6LaBmuhsTS7F89hzjXitc8vx6oE31GR2PhRcn4Z45A2pG4Bz6f6xr8VC6243AqbN3pZMjmrbftRre",
  "key24": "4kRaDnd6SYwHbzxMkBD5Yf9gumhUt3mqXz8awM1oVJUJ8N7ZfzJBZZrZSRXS7gVMyQmfW63dApXt7g5FMNER3Qzf",
  "key25": "24nE5Kx6d3FtcKk9AaAgkGvTzFNwMk2zcD8Ehthj83AhSiUtcZTN5Xm7Gyq3cgkZKVoxa51yozFLpDVQefb2jWVX",
  "key26": "4XjJQLxcp81xsEAYKBjkHzQzRKNntthXibko3M7xnEEHXcS64nLwEPNQb7vg8h9cQAEdJBQjNG37X7d2NdHj4Lrz",
  "key27": "4phiYmfRAnbtyFQshmTcGfxZQjmj2HmWWeJWuZf6j9RfpbjdYHkYmVx2jQt6L55zCFK12aTJML1jNToCpKT6pFWw",
  "key28": "4biG1PFtqAEnJCYgX8koS8txTe4RiphhTkwbxeqeqSudt3t6Cd8v611zeg5TjtezdvHxcrpvJUfkbLjKMy9nPFdW",
  "key29": "2LoWtCsCoNCAZGMvXUNa2M6amvxLyicy4fMkLWKrCCu7BNvqueDaJcK67kBmGdbeF9PF7nPW6Tk7UPDgX85RMF1K",
  "key30": "4Yrj48rC5ryS7EaGFRtUJEPpsj11CYFGKVDdor9cBdMT1C4SaNsccudZKXQdaJb5XXSKkk8DWXYMeP94aq46ZWAQ",
  "key31": "2M8Aarbn8w4GRiQfofpQfwhn1gtZmA9uyoJdpe1iXn71sMnt328ZzmRJtWxBTppQ2NW8r5gP9JMx4BMwjC2V5vCc"
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
