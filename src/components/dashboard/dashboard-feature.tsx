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
    "3XA3wVCSZLQwuNfPv55gQUb1N2LqHTz6WH5g6YuJ8H7CapDuy1z1wgkuT1QCKEBZcWecbhqayNmW7ZFfEeFjjNMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ZjRbJ6XdhcmNBw93tXSyxV5MvGTSzKxwiTfwWUTXSmiWViBTPRxRRZcKcVmoV4ykjWVJYSie5yUo5i4Ai3cmLv",
  "key1": "4fDoRxPWP1FpGp1CEne4uDNYh2C8gZzNGvkBy6YHSRWGYrdPDyn9yk6izpyzaqjXk9nVk4LM6VJ5dHkgQ8iu2mvm",
  "key2": "4Pn9JRfPaj6EY9tk9ySDNxXspmmKFL9NaNTN3A7AWbzgTdWemgoBsNErB31r5YjA8eYxFS7MGiLPRLrLTJcJRAHn",
  "key3": "4EQXYNsxWMZBhQXqMMvQNFPMM8oKnM31ncTGRbqXKzLQJewNuxV6gbkFk1U3Y3etxujsxgJAQhxRfsmj2qH2Q49M",
  "key4": "JJQ8CS6XzfRVHxZiNEMMXj5XWWuj9mKs2LJ8Q6beja7hjTqyPFreN7vV3B6w7vKqSG348W21gVKMtKGpwVPnhZf",
  "key5": "48UWegHuhDeGepKjHDECD2U2Sue8fbgTqVAbvLmGGKosALGmQL6Ez3z58CQtGx6T597J7LxRmqYcSTLiLWtwVtgR",
  "key6": "5y33maFZnDbZPXrMGSVW5U6K8SaZoYtCqXFABvrHpBViAUrUTaqgZ4pp7d8Y3PqbKoXMNJH699nZJAhTNF5MCMvN",
  "key7": "21QyqtKogMCMN3mo8CAda6fHyPzTgyTgvkFWX62syKGNhGc9nHVgfKQPghfxBZ3o8WweLe3JqeJZbVBWeQMzL8y2",
  "key8": "4hmhg2J5UDCpafEdNJ1MYntoUVLMZwtG6282axJ4kQoYXQ5kU4o3WbXEvCWnZiCxoJGZsj63sPL3845j3jESBmoj",
  "key9": "2akLnB9wDn7HYBUKQ5JQXNYbXZZS8rZKP1oJ7gKyvoTAYTcXDNnJjDdL3ZTk3LLqkZcfFph6Mt4HYvJpNWfqw85A",
  "key10": "Mt52bZtjVN7opYcJfaZ2v9LXjM1sXeufPrKBuYHES2VfqHT4L4SGbu89wXvbNSwYwNgicB5Ye5gWWusfNnB4C2U",
  "key11": "3mtNJpxV6C1PNkL7KdD7m7jzCWGe2KtTSnah9MK1ZdDbsHatZLZAxaEni2qnDyHqVY7oD7o5qnW1Qw6fxG5S58VZ",
  "key12": "5uiyXT4fNw5DSdTMUMu2egujCC4FBBJd9wGZNzHcvysZJG7HSLp3eH23kWmubANw2R8jMw744ds8sxDhk2TcRUJF",
  "key13": "2qeCDYToGzWqPk2QoYDwQVDSm63C83N6dJbdPKtULD5iHLFAEWiCSPzN7C6T9SGJPZvnDqkSivNbnT6zHKyrXGkk",
  "key14": "3HBMeR8ABPqDJiBy9jWNx7Mpbvi2L3XbE6FecphXsTVvBsss6RMbADNK2SpH1SJnB8zXAN8DPsHsxwftyBKe4L3m",
  "key15": "3nX6KeFELeNxSjnc4UQS5sNkauWzPMkcQiw8qnSUcYmnYL3AiVTXENHNxyeqHKkDetmpjBXjLAAuZ8enjXGywPhb",
  "key16": "F1LCox2P9ZzfwhUmYc8qbXvFUrhhK3re2Y93wn1DGRGC15GiCJBK1a4su9M2s7zkecWJPjUos8Vcp6PAX111LNu",
  "key17": "PtbukPRjCQFf5jgyNCGu6Ks9uFb1XzAieSXyXG9N8DTUfiNmG6HPSNPjVMLeUu6cAJYTPUtGNr7rJhZUFRe7ViA",
  "key18": "3WDkKrHvJb78DfmAm1nijoo6isN3LDBwMWF6ScrmWVsgHVtzYSu2wszwMuH3ZcokVkfr21dvFJX8kWSdMzYTrcD5",
  "key19": "3CJ7AfmJ2oFxiL72MPVA1f34EAFqjavjkPLGGmj8fX42SXX7rHY7VJayB98B9DEFvcVi7pmbM2x8riYQDyfGH758",
  "key20": "3EvhZyzYXjwETNsagbRr1R1RD6f3nofR4gZAQFMFdCJoiXusZ9akacMDrGXVHLLFiz6KhvRdKjFaYLeE4Du9vN3w",
  "key21": "38eYPBUxYf3nHQsUcpob35znCugHWq3arZqQSWsFHmYSRsoQn6xHoUbRfd9wP2xkebsV83JkeyFJjfyYfyRTcZKz",
  "key22": "t8a4CzzkwmYW6xdkMfJpkGQTwBEVZpGMGUahhk7nzA9c97Eg2FzyB1F6C6Ct52RGLVuffFD3rEF4BoXE7C8XwsE",
  "key23": "2KjXwaD5zfsdYHSqkkdt4AX3xZYR3Po74Mx4bk8erfRKcDY5fJUxjaDkMHFDH9DQ8hJfRcWQS7zMMoryoVcV3M7f",
  "key24": "3nsf71Gobi1J7mtoKBQ66ft3vUNTs4NnZJdFW37NoT2BauNio4r1bnERptxbiXa7aHPbt6KX8CY6CotB4HTKUse5",
  "key25": "4fEhVfmFW2kiNtufUQT3ZDEcpU3LpT8yrva8A8qPfz1gFcypN6ZQdU7UnyeSvwCTZJNDNXLkNqqmo3ZryNgzF612",
  "key26": "3gHLFyWWYQckzZz48Ws2iCPXs83aVFEeSBnHXPKGxwyCs7w6qUvoFqkEQx8ZGP6Z96NYgyDcsfZjdyQBrmiroQVP",
  "key27": "4Fe3pweLpPxRptgTHy2o5DgRsBy3tmwnob5QLSD4cAdFe5wej342jVhCTeQvGEKFuKScHY8XbT44jhPzbf5n5QW9",
  "key28": "4x2hHpgiDxbDP6kXxvbonsjgZx4Vki6KjLmqHjMgSyU87kSKz2bMNHEMk6i5VHtYx6XvbmSEPVSn3gnT2tfGCEof",
  "key29": "bH4PQAuajtQrfeEFsgXzSUZiteZBvSGWsUKqHVyXAWx1Be4bd311gcpz5cSH4TLWZukLXh2eanj95s59nzhHY8o",
  "key30": "5ERDumi7Z1oNJk9o9NnVZWrA5nC9p6dKht3Wt3814d8ByBc7vFX7oQDuBUF1Dasvj5Y6wKbKxgiejUv1YFkAREhN",
  "key31": "2gcJ4bM5YTDdCcFbwJrS28g6kNCYpiKaTSa5K94M42VqBmjHCF3cTMnz7HUWmHQSwikG3BdyskT1BxCXBxjCeQiK",
  "key32": "2hn8vigpLxuvAqTeFcqGEpA13wRL7PHwPh7YgprtJa8WejzZY4Z4g6H3g31jWdd1kmWVWGVXnLfopnChFoKp6aK5",
  "key33": "3yb9n3DQZjembqnB18xaF7ukph7c8CMTKQ9ppZYwZ23TaDu1aWWJVpBQzYw5RxtVaJeXUn4zD88KqvTkHdJey6YX",
  "key34": "2dt4FyVUz53CWypqWgJPdqudDtQgoUx1QUazRKKSRHbz4F3Ko3Rmp3624cWr1gAYT76ZyhqULKfBF7DuNeQsxd82",
  "key35": "66VfZo1PjzqTw6i5YNfLC15RWkYjTSQPp2S3SneiGs36RTboH5zv1DYWzPaaczeFtvHzpb1BJ9VdVxACPCe4f6XK",
  "key36": "4W397QDuzg5nsHyf8cSmf8kbJetJaUsoNzMZr9xw91zuGrSiP7baKnkVAkecmEx792sSN1wnQs3iCJK2TygPrXd1",
  "key37": "4rLJNjwsMVQCUK2LxqLMtaLe4LhrpWXwmT1vWTTfJF7eiKwgerrEZgGnAjjdgVKzX7fDnCKkRHnaCp3YuQsNhsbH"
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
