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
    "omusf3C9S1h9KgmB3rJWQVar6D99vH8bW6bmQw1yvbZ1NSJrLDPz8zoaeCf5jFuDWiJKn5Ey3SzTBAQ3HPvR7iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kgqA2kuR9noSy46a8fczMUpEE3qYJftfBjhYyeQUTWa5aVPa64RqbL7SvZJi3fF9kga8hQjxjiHWZSAkkuL58uL",
  "key1": "2wmwzdPnSsdLBUwsdERpAd2ZkXWeMBGyWagsN7C13xcRbBd11XAD7r7iTg81RzDeKbVGi1mSDgfZzvsypL2tt1su",
  "key2": "3f6WHkJz7S3L4AVy1J22Qakw6Pg3jgX9X9zv3YJj5aJZWQp2RvPWGmQYxVNPBfC7Gr962KrkfwKtn7RQieU7sEHC",
  "key3": "32XZXGgGrt97ed53bbPBy7Ha4puJF8b7xNTBGsc7QecSM8zGK6d3jEsXVzBn9UVeaETApgB6EnQTLVdRmzZq8bTG",
  "key4": "3p7pHU5CZ5edcXAhboBogkV7zDiXcuSrMVfHpRLRq2qJyVUB4ecpSGBPzuJtme1gsN4zY7QMSPM5ZKs5JzzeZn4s",
  "key5": "DmJ87m1GzjgmThzQ6dvWoZtgWeExHP5z9cXME37txzUo6dRSnpXw9KbAgRa9SS8F17m1oHSN6gyxAPa3AnyWino",
  "key6": "5izjKPwhWdMnex7LMKJDBJabeFJ6Ny5o2uBn5TcgRjT8UtYPZw6cutkJKFSj9FZRN62SUfZVcV45YwufdM4oX1Nf",
  "key7": "5ADkW9v1iPv6R4opHt9gscz2ivYdXZhBXiETYgBQfgpiy4RfET9djsdG44v15USo5eJL7YwRxUHSMhUmgVEGyHqe",
  "key8": "4q9J8BM6BC5XzeXMQHve4ovKV8bTiPrtBugJ46E8csSUeUFxJho6ygFRLLG53vaUBJg4EGUHd6jchfqvzgy4KkAb",
  "key9": "5L9fUxfqq4heKgxcqCo5BsbwuokEG1o6Y4mPAL77NehdpcSGcPnHok1b2spDhohGZX35EXKHdWvpRRbQZmxmLWij",
  "key10": "9RQUu5Y8HAkaAium9CapVPLB88cqcK1cZNwVXQQTt1R2mrCJGB7YzugUexoYxt3LdBQqgp8oQRfGHgtjfzzN248",
  "key11": "5KmhVjafMSZUMZ8vEwTjmbfbUiSJg5q9kC8eQ6T2ngxSPKyQG1SpjVARuJwwba1Nyq9qsmhN3SzkiY9w6q65KrMY",
  "key12": "XDUWH8oKqHPguHB2wS1umCpybhyYvKCXzPs9f2cce1NDFVFRKnTBmqwxGFnC7WyeL3cmusDkgDFm6DDS31H54Eq",
  "key13": "2e1b7XD1CqPJsAvFNjoQSA4Fn9YGGc6ijLKK4NEE3TYKZnLriNiPU72jxAYnBCkamrA1xTg19L6Ao74mqAwwHP9K",
  "key14": "4bz9ZNrdVHT9mUyVYerVJwtGHvWfMJnyTgXmKw3nvdJ4G3g1ZEGsPq28CPqTRrfshZhC7zEp2b9JN2xzZAkhstno",
  "key15": "2mb4pG8V1kXWQcJtQqnKmVDrxyNLmUcFSMrssDcWUkJWjTxDvu1S9zijkgtVMrQdDMQkCviU8Sdb6eyL7JXhPqPm",
  "key16": "5ueyTFFSdBW8i6WEb8NiERzrKJcgEye93ejghjsBbbVLt2Np9ReZPLEibdh5amoneLczSGpYZNYt2PWepX6i7Wyf",
  "key17": "4d19YQvM7oi7syg4iwXBjxnpEpcoPvVgZPbZ3rFgxchAUJLFj1UCTTXFReSx5HyEsWSYRdafTjwuhvJXY9n1Pcmp",
  "key18": "5v8QsZqLKkJv1rwHUzN22tUcRK8o93AuMAt9Vj3pN5sSq4oz66vTtyhF8RYDT4Th15ajcgGUuK9DU1zCXcRpY4mp",
  "key19": "4THmrDpQTtLTdF2SXUz3LPT5P4AhozAz6qiraBoJYJQzWuZ656dMNt15Ckd3NmD5Nb1vQTo3PD6GfiQtT8LS8opK",
  "key20": "45yX7yU37R6LaNyto8ChGpg1JUM3a6ZtKU8omz1DVyBjrKFpgWTsFkBAenQ4su5EwqK1HTa1WKUehhgaKiZ6T5nt",
  "key21": "3sNneTm9VkBCaPWrNqXcbMktoh5vDnX6UEUD4z4dbFAH6tYcSr18PkYZDC9iTpNdFzfcRLyppnyuxTvKuBiQHNfA",
  "key22": "5GX5Y1JNmvb8Fzg5XtUTFBZvZmJyDsRmjqkX1btDncWzMRRZNyGHm3van2PELvL3ZJm2sHnB6nAZ1JMbSadmEQc4",
  "key23": "7FBmtbTp1F6GhnhfyykAuNxHqxDGYWVrk2nYNHj4EfqMtA6VtAc1L7gLJtnktbPbBNSsDPbmMKvhVWDoRyxmpkq",
  "key24": "CcGoxB9VfApA6cS8r2Dcfz1KEPy3mVujqDYJgWD5Vkmje6BcAJnV33F1h6F4LZg9nuvHrQ9QcCGUBWfsNQpSNwG",
  "key25": "2iQ4Jwq4mT3trc95FSafZsxoStoktGAPPPbxiGZiePGfMPZiDmVBgc7SRbX7odZjpDn4swNiW2J9B5fQ3qmGsBhK",
  "key26": "4Kr7WQaRHgT53qgWGWWYL2UVAM1Pnwx8QHcyzagagsYM85wH3cyZRLoCk8teSbdefikqStPG5jq9UhQYRmUsNEsF",
  "key27": "2CXnQ6RurKFgckgAKfUba5dMkQ8Nixk7n7buUsMRWtomraLQahzM4hmJJtHKpaq4uojppjurLvBz8eGXocutJLRW",
  "key28": "W1jeoj2QBr5Ayv67URUY6576FMQN4d4XZv2bGMqC5XLgxqbSyCjfF697ub1z5qMYggnuF1haqvgrrFcVmrF6J9p",
  "key29": "4Hw8iwF5WHJDmM8p44QUn343kaX5yBSegtzXvdPh89sN6DCYg6V2CcxLohPtPNkv4TKrRdAwhxN5EM6SHH9NnX2V",
  "key30": "52dWNe5ubPMRPG7b4k2QJjyU1Bru9roLzX5WTrsUC8HLCVF1Ek2eDE2gm6tGg4TaVEr31m44PorPu5ZUXHA8Mf7D",
  "key31": "4heQgaM5rRtvhn1DDkwjX2Hd886dzM4D6WDCzpPskTEnmkmgiBKACQAWrJPRbWoq324rLVHZGweLaSE7B8phK5ea",
  "key32": "3UsbKW4kcYTYsZE8nsbqJ8Fpbgv9rMWSpnUwm1Um7pV1Q77L55pYS23N5p4JK153a5T5pzK2xcwggK1cWJmHExMY",
  "key33": "5Mnyekuvp35sS8PK1bvMvRZyevDsgpM598f3t1DbVhq7WkZj3EieyNef46Zahf3Z7gt6LtrZ7j8xtyP6N11f96qF",
  "key34": "MXhk8e6H7LrPzvEjXumiNSXbyrcffmQtJnDtWmji2NDsSvQCwGnVfqV1gYwiYM3jXrdopqraJCPCYwDc9bi7Lqa",
  "key35": "4kWPjiyPU9bprrbHW7hAhY98WDj9dABB76WyUVHiVFf5mx9s3Axe4xbMg7GH1V6nv3Be9tgqDpwLbHes3Ay2mdkx",
  "key36": "2HuKvUS7kDzjNvfa4wAprCdnhVjkadcCCx14mX63qjs3uJjv8DnLrxVDRKyqJwCfBXcXs6juc6vvmLkMwmxnTHWk",
  "key37": "4jU6EhuBbkSuZ4CejG23fogRcCWwUSVgj3kfkwsMQ1ogQkaebj8Fty6fjFBf8m1Ebcnnwzs1ufLHgx3xSZ4D2gVk",
  "key38": "4rYvVoRbYm1o9QfyRpoN9NmHvboTZcE3Q4dtz3x3vboxdQ8YUfYT5WrJNDC8dxtHESFXutvaEE6W647UEmXB1Rzo",
  "key39": "5LC4Vyno2tsVVyQ1T3PrWeSXkP7ju1Xg1qg5P4Ck88FmL3XZ5FaeYSxnHvDTH3me8VQNeoiMj7oRd26h9aAbxq3P",
  "key40": "4hmhjiZQsSCyNQJ4uTJCCfnrJdWyHuaF998j8fw2K6iuNK8tBuMkooNHfusvVwQVzUwYdAj1DKKj7S4ks9q9Ygk4",
  "key41": "3hVvBnLoEUtB26pveTg4XKMRUkR37dtBRaVXDMft3pWao45HuRfqh5833TkRx8FbvroXMJN7YbEAenxAn2AaUjq5",
  "key42": "2FJiz9TYtnwFJ2T9FAZUVkxhTKsx6J6cBWAfbmC2hQ7RYqGCuZ2RxnUbK1qeWzEKLYiRVj7xKVAVhjZUnPQwkFNd",
  "key43": "5QrE1L5XLC7wS5RWosDo4feYV2XhxAyNdzPtAqjpagJ3NfazQaAoEkfCa4MroKVMUVw4CJTCjdmzVGrmZwYdKeH2",
  "key44": "53caYxTxMHJgiqzZqxe5oR8xoQv2jteSArUK5mAFDCoYmUxtYDcyQwzH8wA14Ve23M8neb7p9L3kHpsfLDYwHokq",
  "key45": "ZjwaNsqc73RUjbw4243QNsYoyFcHi2VPyrGXCT5RYHa8j1vHWoGUKyLSSM3QJ2E5tjLHUs8DrgFpPHrxRyvvM6w",
  "key46": "25JRaardnPaLUN7onFrY8QzYZv4QknnshKBmiLEz3U7sewGt3AaFVtfPfpg3dpDQTJiap9siPF99EtA8c6iyc5ai",
  "key47": "B3C5E4cDB4WeN8RSWLJqsAGgm3vsxy3NRs9gbzDdL3m3Mrb5MmdNzncPCfzteXZocSs4bqpKsYee9w8UENjW5ig",
  "key48": "34m9ahWKHc1aUFrghpMdhB8Y1KvrkTp3iyPFCQWd5S93PJWrr8HEFHr9hqMxy2TSmsfMmv8exPaydBSMva7ssuz9"
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
