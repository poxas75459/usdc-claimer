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
    "5psgPVPAa64Y6LzfbRDT9WhQPRj2aqeAR8PieWyo3pSVGD9cePdZXjrYHtBbbf3Weq59PxwnmPjH1FFrdnJMjfJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22z4HhnyrMdFP1fG5tkHGj5vx7pErFsj7K3LUBYygCxy3oTUhndMDdwvrKppGpz3goFYrayNTxAJFaYRq6ga38BN",
  "key1": "YUgKJewJH15gGxwkREMua3cSkP8upteAyVev1XsAanTkca1ZFkDhLWa9jW9xzPKXgxHikYsejvtHRAv3ZhNsEid",
  "key2": "3oJP3sKgejZjaa8jqBUfEkvinw3wFYPUkaT4assS9gZnEszNN4cqhr7iz9yxgDLVTnjjZAkgCzdZCvfthgtNzEv",
  "key3": "48EgE9bbJDifwb31aGJRtmgwDh133ADFi8KBMQ5rfecrh6N7u8egWniSAm2sAYJGci8YD1KrjKfbyzJRH34rX5yU",
  "key4": "2FTxxunsE1AYtqxyvp7LDfATREY74L9ybZvNrx15HQX5MjSABmazER9CEGQJjR6inAYhiiAxv1bgeXvqgA4cF2AK",
  "key5": "WJDyV5JZhqP51nnxWP5JS5NDGhN8VfK8Wkvq869VK9uqQUrHM42SGqvkdXwym4LjJAUcXoXMhDitgMzJ8Fo7m6D",
  "key6": "3atJoQJjhwhpNj3CUi7qQyASET4BftZzdYgkDEGvdvbBkQYwr1yQ38P1EVZoPz9m41CJnjRPgPTXc9NfffxyWxyQ",
  "key7": "2upv6iWzRukv68T6Efk8CMVVjnAeJCF7Ho7tLXJpXj8Ua7RRMDZRvZJMtcxPGGAnuLh9S7w8HWJAjX1gEqT7jcNY",
  "key8": "2fCQyfm4gSPyb5tvo2noGh5dDSiWYLBUZGSZwDprwviw96ZUK3Gz6JPmMsj4hUmVxN8SkeYxQ9ePBHZPpyt2yq5f",
  "key9": "2RrP7QwQy6dXuBZ8rDqugTU56W7Mt28mHrBySGmr3JxRivtGwfDAN3V6nnBtut4aLvGfXz9YGZP2jS3xkSpBVJW1",
  "key10": "mPbS4imWsgvmvmW293wkFG65hPUQLZisYQ7DAx1tnvsYQpcCekd2fJWv4gii6saG5zXF4q4TkVWH1nDJwzhof5U",
  "key11": "J6SMo4Go1qfTUYnD9DoSqzAfmTumPRPi7eXM4YDpTo1qQUmdS7PjYCmBC86GxBh4AR8WjpCyckSMoR4kubMGTbc",
  "key12": "41o1j1CBwBfjadJQ9hTFAKGVdWmH8DLiVFohjZp7FzEt8LeR5WYSHLN8vVAk8nnvnFBiuEfD1eKZNBimg46wsdcn",
  "key13": "2PYBJPs5FzghY3wAT6soJTkrumLKXu4Nw7qnusGK2SvygxqmL58PppLwVKPE16cjcMMte2T71bRQd8Cv7X5YpX9D",
  "key14": "444tZa5fDDYNnDJTxxyJozFzEotgZ81TGr6UJEdfoVBcEzbyZ8cES29Un5XhZsm8ZD6hcx3SZ527MaXm48rpEGBk",
  "key15": "5rrEwvrFaR7qWPAa5twWPiwpkjwPgp36vX2YDmsid6Re5AxQCH146GSiUu3xy1g3bypHAQzPUzvpMEUpZkNf2UgT",
  "key16": "5b8NmUww8qgyJh3S3GXG3D68cETqy4gQd3tmuH98vQkAipEHfk8kpk7CGtx8YsXz5VZi3S7Q8QDKJ3mVrp8Au2NJ",
  "key17": "5Qbwdv9V3ktStokjWK1P4FNJGCshsqgxP4MYyCpQTjnkS88NSUvwt6NVTBNL3BSeL2jLCfJnG13quUKNWZo5NQxc",
  "key18": "63q3UHkZfhdjo2sQwt9gNV72duAuiaSeWJZHVXsi5jx1HfktTGsVdgymmTGPPa4kZBFx1Gk94Pv5Fze3SChBSYD8",
  "key19": "xyMqPbbpHYG97sZFTRJrQKYHJze96f9L45gKiPSSemzHqqBgaCq9RoJuZ56LU8RY11UyPqfZF55ZDTiBPnq2KXZ",
  "key20": "n8dTNbaMFTLaQr5gzy9HiWupsFefWsCuagVJHvjhUnFvGxLZyTjpiE9W1oEWuDfq6uERUvKzq1TawuuhYn5qSUb",
  "key21": "EvmWWjMpooypEHEmu9kUbA7KqP5wnoMDS1Y4nFMh6SdrmxgxCQELM6xEUQPcZQDrqf6fxbkwYFdi3zfn8DuznVQ",
  "key22": "2L8Rs8wX5avwbuRyzrB3Wre2qvwdB5qm3QNNXkFQmGQksVJ5obc9pd4PJH7gf22CoJJirLugSbstw3gStyhTXuVy",
  "key23": "5aUuY5hMtBBTJp3BioUrbcmJSAxApbMtQbfYia8qLP1fxZ1vH7muaJ8xzN9nda8e9X3JLWpzGWDh7LPr7ayn1rf5",
  "key24": "3ZCvMJAspn4xpAkjxgUSFcqdFT1J8k9f36CJKUMhmQbbDJE8Bjyyhv6Xmr4UczsaMppvFF89yTxFRmjKY1uT4W9j",
  "key25": "62ufMs2zwwGcRC9RWXtDiqfq2YoDVQX95hq1NmuwxuQ1JtKuqis8DZvprL6bPq5KFyLU7frksVZYFRmUmddCSW4W",
  "key26": "5NbLF3QK4YqfszXEBzZqMdM3NX73okcr9b1k24RhiUA5ZqPue7WyL9Ndjz3GMNpxy49dkWqGhhF484sooemTJ9Y3",
  "key27": "2PuXGW5fKk6FcXcqxu2UBSSfZrbjW6miZg8ZrQdKaDu7EK7hdb5HgA7oLRHNavo8myKo4nqavZzZwHkXLt6mAnRf",
  "key28": "3NaFgp4bzw9h1Ke4uN1A6PH6hhHHfQ8bA2toxFAQbs6aFWFrewF27vTjUmJt7bjEoDHzR5aKaLgDsT1EAJFbjZUW",
  "key29": "61g8R27aQKQUAR4DYUqpJxXWXnQry3zsPQGdGAye93NbcWs7Hjwq6vn5gNSu8DfMavLogjpbynmCsDaKRo3VAmxy",
  "key30": "5ja4jrG1NceJxayLhtg9inzGTUGjmi2Jxep7zuS1owEoP78ZdH8WnJzVVyBHYAnWzwMhRBbVfuoGfGfCRUJec4Jb",
  "key31": "4xMDu6S21sLUhr4nmVVqVMTB3ELEkvKhbJcMHVzEqo5jjWxngF6wpAdEph2Uad7FKtPbFPokjUXfFLmC6mY2y47k"
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
