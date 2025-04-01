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
    "2jsuZBpi9qnAPRWZJVFN1YJTDH6oYTgdzup4e7xLMjfDsBRPuDxACuBadRg5h5hrjM2aP5uBZhhRYKQrTfGYzG31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B2iZJLHnWdEkazjHRsd5GHBPPJPV2AY7QHLnc3QYfNafGe9tGvMwnzSNDDje5Wh2yEVZvNpHn2rwnxzT4VqNmSc",
  "key1": "4zPV1VAPk6LdMc93Cib59tap8HQuuARrpxFwtuZmmqJQQy1pt8cySSacM8W8vGNtPma5ajvBdCujBXr4Kx4PoXih",
  "key2": "2nBYufaXC4KB3zb5ZjQ9k7QYyA5fsaLvyH6h3cbD5j2n62HtUQc3Y4hStg5UbhXxuJXWmXqCKxW2pDak7b7Y6Zzg",
  "key3": "44h7vXx2zVKFwW2noRwpo6cC1ZvFZk1hkCoCKNW3GYHcWQNgJPYam2UTLLyKvtoWA8SCwSCqmAcPmqUGcyLUhqF5",
  "key4": "3n8oUrvLNiqnMjLWUeNYkx2Wa3QLcXMZUzbHDzEkmPaETre5zN53KywvQ2DqBjhhTVuWQKrVCJTVMPhMrWixVaYk",
  "key5": "99ZP4ptDhNWQrjMiqeT4PJ7dbGUUe9cb8nN14pzngb9VaaK3SYox1oj5Uyj4WMC7UZsNnAMQgjbi2KABE3Notpx",
  "key6": "CwEysXABpuC8mNiEpKVcBJHbN1rjc3BfnsTXndmnVgzdhgm6gBehQ1CBcvAyrm6ZMhTzMDiSU5HxBmNitW43Ut6",
  "key7": "K3g43CAW8yp8UHivuU1iiTaNrsX87jiK7R7pu7XHam2Mw8DL2mEXQXbk4ht6nhB8qYBBqQwtzXf3zKXbaTS8a5G",
  "key8": "2thmKjJb4Kyh8f8GWmzP7bf5yv7Fz6SW2ZbKF6dMKQ5xBB5THcYYLYqfMTN4cD16QopquaDdwesRjEK5thrEYxrw",
  "key9": "5Gm7NmDcNo4vxJCnA71nKtT6AvTaQkmUYAFtRzXkYr9bDyVbQD3LQgFhsFHSpJ8htXKrPaHs5MqdA5QBrsrrtnQN",
  "key10": "5gv6VzYKXsJem4NKYnpqRgGWmHg4bKxvM3CHsuoWKt9DEYjomqrqnRqAzJtVJDJ4WAorkPiMfzPMAVaZzhDAX8SF",
  "key11": "2FMaZ84Hhr5gA2tQVdonaFxpSsjDs8Rtugjax7o6ZegGbYeaeiyd3vPKSSjBvcBURHD9eFT3Rmo8JiScj6vqcz1A",
  "key12": "2QenfYizW3xyezkw6QoVeSNsPFqH8bv7ML8d6dqnsNiocUaaXf5KU4Qth6Z6JD6ZVFy7NzaqCPf2TpqJuAiBTYH7",
  "key13": "31m37dChQ2bU5uPBTwsar3w6BBSgC8BnNKwfijPiRtqmYXEPrab1suBAeyZC6JA9abpmsTxvm95gTMCn4JQ7Qya9",
  "key14": "21P61SdD8mvXPe6kJarQF6VkzmqGkyxqDD3gfePXusuLNJPU693AYLDC4goTHb2qZX6EfdHd9B7YQJ9qFJUk5s8B",
  "key15": "2gV8TVCmwmj9p5r2x4qGg8B1haWDypbCLCiZVAnV4PUpGrDYYVmN5WuxpdFxghNSu15q1x8qNo8wVekVEw6atGAs",
  "key16": "5FLKDj6q7KomzzD7Yy92xE1e52EFEGDbp76fhSWEseCFYyXAZsGTJmFqEtzEkHyvNru5hKCHZwa4bUZWGgExqb17",
  "key17": "4GnsTqD3zFd1vK9Y7859KwoJ59vMWSrQhoLfmM19yeqVvZGbt45MTB4VtfNSDun6NkzUV2Rba58byG3eYeV8j2P4",
  "key18": "3Aj6mAZRnqzJVxZmziMRxnkr5JtdvUZNrJKhMaSaexfJLNZtXow6kjkKEYjiUGW4YxJv2NkdD3VdQjFfh3MeH7Vs",
  "key19": "2CmshqpwPppjUjvjBqaTwT5iNTAjnN7GLL1L5qnVCzT6yXVTXrBNVMEMMggiTKj1zDefMt2k5Nbt3568m2GNzJaZ",
  "key20": "3yJLpWSCkiP7NVF7KQpcRR9srFQKv4YthMJqHL2uHxb9BfoUoUDN26ghfBGZbhqFhccE6nQpPUuEnGrmybXPD3R8",
  "key21": "3YvMvkQL6oKPXhjM8tfcFGbVJzcdPWNi51jKrVp7JZrgFKQ24LXm1Zg5fYwdeAaqzPLgHQfmGddDij1rPP6SLHDA",
  "key22": "2B7zuDTPGXuoH9dagUK7BcLnNYkAbvnNv1ZGdjSQGyihUTq3bZ3D4EvpMMPH1DR3NZstjreAGrRQwGQS3nhSxiHz",
  "key23": "4iq5CS3rFe9RB71KRUchK5BB1FCr76JdNQqdH73NSY6jyhaWXFgjhDhzA6G4bosFzq9mUsVSjizvwf7aU2Gv74HZ",
  "key24": "3gzBahPo9hScC9WRxHvXKCKmq6ZmFn8rpDzJHNoAhjmizNUGL24B7WjYa2za4BBH2ai3FKLpqriYPsm9ZDqDc6gn",
  "key25": "4wjvrufUacfmFFpeJb3p2D2ZLvP8rpwheAJvDPt2YVrvPjwY4QmUa5VNyzhDykrznBgkJcXBupgSyDUFDxbBhACx",
  "key26": "2TB8jYHoSfvdJkVtaNHDv1wfXQhVoPrQHLrGMxjgE9sYxhHWpz6DgWiugRUm8WgZBLmLnM3hGMPyWrDx8UCTjPqT",
  "key27": "5QvZQiWfHV4KCv2qqUJ49r3gyBLH8fkxf4nWGtREJyqFmjpSSNyrFYoVbim2KDh2DpKpyiqALdau6xzUrjb9bCoE",
  "key28": "2SRtiS2FbecYiawwnqtdQouqMgFm5QFcv4XKgc4XsWjgE5JT9CLmDpyVpvLjxW8ppc9XBSESnr4aLpFFYNfkPaA7",
  "key29": "52o6nALAYhjZvSWvVim8DHeuLFj1i9Ft5VLVSFNY5hALQtKHEmgGQMec24a9waXjdGkqHgHW3omSKaj67bgnjFJP",
  "key30": "5uyp6aRaCng3xUcX7kc6MdzRJgrF8roC5MwGv83EPZdxMZWxNX8r6bCSwKuLpdXwT57zRzMbAxgn732wyANgY9o"
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
