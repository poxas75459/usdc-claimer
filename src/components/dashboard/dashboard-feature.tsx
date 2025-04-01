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
    "5154TF154jwqFpT2vqJfWWHuLNkFLfj7LpUpzWXoixAoEQB1iip5endYygRqubsrD3K5yYxAH5fBQ7nDnn7GQj5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9YPNHdQADhjvRWczUu6pKzvU62gR3zkfgpfZ4wDjK4BCNuZ1sQchv9av6Nu6MPQPJY8PtjfeFKXuZRegzXjdu3",
  "key1": "3TaXmoWRMsjYmfoWWUEFjN7erx9Wi3ZnByN6ySvt1kMtjS53U3QVv2d9P2eVy768WkCEnkDBNQzsZrz6De3HqkWH",
  "key2": "5tYjCLGdLJGcsgVmSrKShFfi62XsDYsbQquXyZ43tQjHeFM44TBDk7nNAEphJ2EZMhBYNyLE1RPSakYJs9UeDmXC",
  "key3": "2DBDB2E61RAo7NcmVqRaKAoc5KsXu8jFZnWyoXWHwdcFxZGYiemQPSVtnjUVuRLrd9JuHcH81BWGfUiuA2yLbCCZ",
  "key4": "2Vd8UL1mSG7CrkMKy8FmY9hJrKJpFFzj2wgyybkwPfmW9pDcSUPAA4ZQ9frx6rpytU7abEqJW9WV5qGEkmNGrJNq",
  "key5": "5XwK7crjMGE2admf81TyhqdPJfZcYz24PUbYy9zDXW6ERKLE7LiQNk67fivhCxtA2pYhbmX2x8J9qoAKWxvQY8fG",
  "key6": "3mtDoJ9i6EgnsaVavtFRyipDvAqdFJqwmNxjpjJWgWmELL83zG2CPyBbTBrWPjEx5rD8nwUvkj5TaWArfyJp4Vav",
  "key7": "4GobJE62hRzi18UWV7J5dAZJw8cFdUSVnJcWUYcG3Zsis8tkELSTCiNQ3zBoRjn1LVu9DqG85zj1BZ5x4q26JQ8B",
  "key8": "35jtev59xthYdyxZLeHAQhF9cx2xcxwguBPJVWT7TJ5QZzCB3Fqwe3BT9vVPN3ogtduDFo5GDGzagzuRnZ2BuF32",
  "key9": "4YTtfEggAGmpocWz9PwmQtiY65ZNDHxSXEY367TNYdqawgMrfMyskThnWYhFFDNtJRivDKz9jyToXYNGkq7h3C5X",
  "key10": "37MckWJxLQ35YcoSZFQwEUZehtskmroayoESvWcTyrxZfmA9R7DvoMhaxJewxM3gAYCcSRktSJmjW4VMwHQhuqr5",
  "key11": "3gSJEakwttUhMZM5vfVipfGm6Tjd9nN4HS8RZHdrswwQgUn9cXfTMhsh64ec43gegFPKZBm3gyhvrwG7T4pK83Rc",
  "key12": "XfUJwdpdHxjaGBPktQDNfB9QhGURSNzcB8orJV11RzpUoFXtgCS9H1uCF4vyqN2J27CQsPMsiNX5w7r114QYXVx",
  "key13": "4kbjqrc232LrXXgagByB5EqRwkwd6VV3bnCCi8irgBsmvTYSsS85tNtpN2uioqA3TLnHXXF3YhUkiurDynzzLttV",
  "key14": "4MUB93xg7pbPziA2DWFLQLFQKf98f4FX9s7NKVGDaxxRwJNbciQVtMLWCTwv2kgZP3pQrnnm22fsodfNjmmAVa5B",
  "key15": "YANPrsaoLwGzEfbvwfuGDdNqHAHETyno96hJw7oFik3zijHmXVv3rCoXknW7KNL9b5qTEMhyZnGcNKpQ3hEnnFs",
  "key16": "5fKH1VzC7FmuwjQwvsseN2DZn4cvqyTpXekFaswenWqho7CgxNNZqcNVeAkfDAiYHHzD3TQk7nrArpkgWZz7yDW9",
  "key17": "3UFU2vUSLsegtntP4Bv4DrYLqcNBZx6BpJ4DiQTWhqYXXWD5KsQub9FcfFUgWQ8b7doghUJuu8xdtvuwUAGK2hAx",
  "key18": "26mdN6v4MR2seEJgbx94zES7kwbtfsQbHUSnE35SMWBwKxMYUxzLTrxqyHkUA2z68Pnxau6dPKNY3dcp76y1wN4u",
  "key19": "4YtYX6YGHbLUgQrLk97oVmjQgTthXAmf5i1mh9PiqJLGY5QqCJCeqeMz4CGaVg5YjowQFUFb6G83419eLXMiyCtC",
  "key20": "3aRP4A7aYRmLhXzgDBRQRKXmYn8NdGZEYJz8WXcFigxQhHfjV6HZbZMDQpoYRUQghDfXD1i2u3w3UPHA2vQCPrNw",
  "key21": "5uihzqTNCK9mUFdD82uHdjJHZkME8kRiZEwQvU4p9pGgBz9Yovtt4Wjfv2cfsvShEHinSJk8u1DKbGhffVgirkF3",
  "key22": "CHXtnoEmarr3dUCnQC5ohEDz57MyA3uFvuG4iFZdkESm5jV3fPPJ44AdiJ9q6kho5wQHudPrGU1QZKWDUcC25VX",
  "key23": "3hGZKy4hXrMmpGjaN3ceYQpgFNrpWvbu788wjHsJs7wMRpZEKVoztqZMAdhrCcD38BSEhiGszUYhQuWrrn6YjTxC",
  "key24": "5hRTe2Zu9yVWDymiatLKnUYyGLJyomrKujkYTpndM5F7EZ6xnxKQTKM3Z1ywZDwj6sAfPVTtrzPqcEd9GE9S9eKk",
  "key25": "4kMv3rq1S5dv2P6PxJEAEMUmpz4txbnWZ7gPUE8riUpLuiQjjAVhi9nMW1WHg6LQAJM5MrNeU8JKqULXYUYWSbdC",
  "key26": "pPSruMitcGh49VjfJ4Cu9fK3uoK663JXL8sm9DL5oPegDDeftZNg7Bqsp686AsxFcC7Yz8qDuzh8eQW2NgfEBYu",
  "key27": "25L1oi5UNi4YEh76Fy243c2QtuweQiZRqUAEFER921E5u5eMWJyPH2i2ynQWvft6LyMeuU6NUJ3hnHuH3Ciya5MK",
  "key28": "L3Gpphm3mLab6Z1wubtNGrKamE7Dfdx8pyC89y7pjTasx1SJcDGWKRXP9DAow3wj3yo3VJgJWJoaQZ9LFtMkYpP",
  "key29": "56pRH9jiNh4y1p8zuciktsZRQrTPfLbyj5ZRNuKMb8HuweK4Wp2tuiB7P7CnrPQ2FPyWXU5n6A5QuCy3iUpTU85K",
  "key30": "2moPWfVraQymPvJYd31BtWvYwW8u1swbHE864cmkjozKVkMpnapWwkNzmTKhnwYfp2akPR8Pp7JLnzrcjCzDmoi4",
  "key31": "57WYtbnod9Sv3kHid8kkL5KxfEw3QiPYJ9zkwyDQzYcxhnaC6JMJnhGHpZkcRrfcvDEHSx15GBosjHYK4u6Q6M5H",
  "key32": "2BxMf2dsDijxsxnhbbnGTTH2RWkgsMLsQ8HwJvdHWRo77uEzaKtL64JKW4HzsYsoXVLfifp1vxrUEFYy7PaYncq6",
  "key33": "SL3NVhHxaSbASAMmkiUeNnSCXcuvqNe1XBYvqH1vyTtmLtJdd24uGsEo9qY2owoFX4oHTSefzwKLqyvNyWxjVzP",
  "key34": "2FeMAc2H7ouuLr2fs1Y19weNmvi8QMCDkaJazkXYWC13poiFiVr1ctVF5qSGPL78ew6W8Pp2fKH6vEgh3Saf4ouP",
  "key35": "43A7Fpa546AERhh3Sk5z9jYqpESzg8x98AVhMaT21WZNw6N8vSha4UtcgiYpy8RmzkUUfU9VeNFK6sfzCFvGMdL6",
  "key36": "4ZjURQ1cCDoUyLvnySY3gkkmxPjBYLp6E9iwy6kzGa4aDRP6LFXEJtkggP2wCU7ErwR8TtHum3mew3cJUn3YCU2m"
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
