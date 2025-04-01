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
    "5LZdy8BinmRnBxaTGbg21MSeNYP7GDL5viyMjF8KzX7wnMiYV5s8vSA6U7Rzx9WFr1Z3941KvgKyzr7V2NzyTaGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hsZqoLnPzYb83R6U4QzM7L9vjc3SnU9C9bwL9VGCywSHfiHHqKAZPCLh6HUXVfr2ZZ9FZU6hybLReY43LyE61b",
  "key1": "29frDDTUe7GqrzchfbMWV8Ps3F2LmU2GvUM3j6t91SjbqVVeCKgeMuupBoCHEjB8eJz5A2EKYtQZpGN5yBCGvvnq",
  "key2": "5rkH81U65jjbJN1Ux7pWY1NSEPbcVE4ApiN9Qhucsuw3NcDzSsPTm84XBx3vSY7V343s2cFPsQ9m7T6o1GSgeVAZ",
  "key3": "5X3XK4PfnQDuzs2UZjCbtCRgqo38Q2U86nsxKW7JAmEmaexttUtxRuZDT4ih3EHyP2237DCuGFMqhufAR6oQMbjC",
  "key4": "3wjSytedaQGRugKo5YjhJnn6Deg2zMhdFePZUsiRY9fw5CKz9dTmCf2DBNiLuc3MHnQxkmhScNRtcPWKQa1LwmjJ",
  "key5": "3LLeGLgyJWjhTy9LZPaueMxPwUWfX6LycYMitUAFmTMznFabGwwhvMiewc1gWT9XZMVw8xDWXtNafU5X5Nc5dPeC",
  "key6": "TpHXJLqXnrHsdBJRJmK4CVJMZiaJQDnxivomMibQib82NRRb8CBASAf2vzEEmHchP3dJPeb2fDhVYNWj6Pg6XZL",
  "key7": "NbQXbvrDT1gt5tpKH3Dr9tzm5yAZJEeHRZoLz9NbjTCLfRJjEhSk7EgmLyc4UQ2W6D8APVcNdzPRcxF5q8zfJBN",
  "key8": "kKWgx86poMRjKXbYDviLEZPL6sUuMG3GYfyTnuvTSfqhhaCwnXY9ncHfNadtCvAsM72VoxZoCXvcW7vJWGEyzFo",
  "key9": "29Fng1TAk4SncWrJVTHQGxy2uQzhuUJoo1JSeQ5pEJKJCoUJ2rwaSSJQCkMgQUwtHXSC2uKYqFGDjwH5pzo8df32",
  "key10": "36wRhD84i1Ag2x7J5quoxJGENQ4jh3MTsB2uWKeScEdwANwAiZi6FyJmxJfc6H2PRLsGPKRskJ5wtGd2t1h9Hmfo",
  "key11": "dJSdq6eVdbcCtworwitmhbxgA2iV2JdcZMxbDPPMt1wZtQnwBMBFeCTmWkDvSJ17sfaiyQXcHRjPpLaGMyzcnYp",
  "key12": "3o4CaT8BLYpRZ3X8wMvbTJgPdzfxhh8cNNPsYMRCCwVi2ZZGjznpH3hJz7QMyWJiQtmKtaRzAT61KhrXGm6PcZ9z",
  "key13": "45Ag3aSxjG9GTBN6Z7QFyvkBckjDYWHuUmP8W7pm5sabimfAveeuepLVNEVwWdLq77JcefyB3xky5TGrZo1VVwun",
  "key14": "4ahNi8GcqX5ynGLpoWCEyqEWGrJqFAGghEsFQTxwGkkxgWzHX1fVaUUYU7iQ6GJbRypuWkX4rCvabHFMfnpxB5F7",
  "key15": "5PJ1fGindCy7ciHaQzrz6z5VjXK3zSKeGi8FJF5p2DUbRvNnLbpU2etgw5vkc35m2aoFoNNbaRbYq6SJzvpQeLoT",
  "key16": "3ndXtF2msFeRmLb9T9qQ6AzxZunhak1DHx7evHCJNaEUpPcYDFfuRsr3KE4oBqENd2ezUMNUj6hiLJUGYar2rJzp",
  "key17": "xEJXgaG9HZJ76wsD652VkgWsDKmHz9KSXef1STqZABwWqakiha5J8bEvxkKfRe2RmuMd9cqQBYQ3grb4odBS6Yv",
  "key18": "4u2QYUYZr7EGiE8CsebeJcjR8qaCuEgkYXkmHXwBB6fvsf6A9HxTminvUXfU3xVK3VRBZmUcc7gtweJ22DKuWSzM",
  "key19": "Aq2FzuMQDWfpqhvzeX5cY71nDCUQk9ka7uC5Pcsga4TqigRxkMhtV15kSs9vYgdsisobxsJjB1f1TrpVXxKVC4L",
  "key20": "55KuCRB6FzFMnhoguhZUYETaKNm3mziTmDBiigF5S5JX3QqRGxWrW5Ab3pz367ZMvHDvQ4NwroX8AdJ3zkvakYdP",
  "key21": "hsQis6JVkXiwWYFJgm6oo3kAWw1MgsTzZPuvhryUphoAyXbefNLp6qTjLaUCL3vviJek6kSPYq9gSifdfYfMqD9",
  "key22": "4UNHAnfU966YqEect65haXwwS6R62tkWztv1rCxwxaXzbJsvSeNhQ6ihjthJUnY48RhuP2WyJQUuPbKgzGkKV2YL",
  "key23": "52WUZiykzeazFhkKf4tTPgGPeCqyrpeULFHboa1uoUhn6SKeCDZMDHuinNj9Lbv7gJ1wn2wMD7zyqHYc7uvMHH7Q",
  "key24": "WJaStFWvDhFStJN5MUm3qPumW6noRYLwVQKBke5HtofMaap3eoquLrhjCCfD7YMcmHqAqag2ksvckY75tMQYKfc",
  "key25": "2KEpViCoXrLpb58M8NS3MUt3uES5o1yhNnH18rSnLkPrhfu8Wk2uyMW78XDVzXb4JgZjgAW8cEE9rZ2RGqe74gRY",
  "key26": "58Z1Ztg5AdoTVTpsc5e9bKcq5J1x5LvEoPhP8RxhitPFLzuZxCGxySXhZruhEsQnhjvuumym4jG8e5cs6psTR6YZ",
  "key27": "3urTf4kntXAkUnWSw5HLxYkBRLZg5ep9aMNdHaZscaCaJA4ELSseAcKzsHqJFDDc6b2TPLAUGbUfU1Wqybittvnv",
  "key28": "4GWWyfmGW8f5hXnsPCG1W5gKJJtf2dgLTKc4jzPQfNXVc9hAgUZi4VMQVnukkBp2NwF5J7dfkxuSKw7YvPrSbTyj",
  "key29": "2eeVrMxSYF8bES3JyfLAWNqiQrgM5u5LsJbfVYEZE7acSGsmiHS6ETMQaXSg14szoykuw4KFkZbZkw3XowQk7hud",
  "key30": "4e5N9c9ucBfgFq45qqoBHsMmRsYsNkgqcdnAMthWnXVY5QqJhLAaNM7xWUipnkZWpTtS6dyyEV6C7sDCnNEnNFE6",
  "key31": "2rjS7imhnNKBf2AuNwVG2HLvQ6G7cz18tghJmMGmK5kWkMbRxw2SPndwgdRYQ3oqpmkcQkaUnrN6H2wqrrFbiSk6",
  "key32": "4yJgtgyMmnZ5w9BHzNhKysagpmNrbZm2hEiNo1WhbS1HyrMVghhuRwUcyKwxj1Vb3GduMyjQyGwcBwchZL1XAhuc",
  "key33": "3WRHyoTaewZqFkxLSGbh9e8KSuwra4rfNGuECUmpKJmjEQNRR2MAXeAMPLhdVJ6tt7DU11iS6PcruHgPmBAJQLRn",
  "key34": "grAHJo1Zoh1p36Am5jT4Upu3kkjE1woKhmpWjQZdFt1JYumuMMgFXUiHTdy3mwvBQDCMmybtv228Qv9RhyTPdVB"
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
