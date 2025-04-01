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
    "2knSmQgLVvmZddzYen9gCA8uBHkdzoZgTniMFcqUFK8yPcVc7YimfEcQ9CHxCDS8vJz3MZcRbjQ9eVMwuuVFHu9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hk7JmAGRFxdm4Ysp6zGcqGg8vm2Rns3BZ4AT3dFgP86gdBdBq1JdNoBxAmpMF4BCEmFRfsJSw9TgeMhQckbZErT",
  "key1": "48J1ovBdD3Wmg8sLS2kNWpQYcZbMNoXDwheHECQ8aeY5sHdoVadCFaKyRwhqxF5yUPwrQdCQvFK5SdjmNxvm4pzS",
  "key2": "3NmNkDwY8wx5N1iqSLovTNBzm18CwHKiiwq3p2M86RQnu2Y2NrD86Z82XDAtLqVxmGFtGFdN6GHUcDhVwk69Tmid",
  "key3": "3HFKeEqLVW6m8FN3YhgLn9s6HiXx3NJYmhiae1Wg8k3ePLiZep2JNZvFv8V1B4UGDDRGbzuXjWPDc9gXymzYoyf5",
  "key4": "3c5XpMgXhLudG2goKMRmDgdkLgjyngTgNKAYoe2exEtPzZvR48cXkce1cvS1XStPKS22hB1bGg3c8k8QYNjyGmkz",
  "key5": "4rCoc9LkgJzGq58jZAsLJmsu52v4Kx83mubDjoQzRGJnbttW3RRMuEMwLfUeDhx9pRjXVk2dT9xNZ3unkNBnqzky",
  "key6": "4ngw53hnT4bjFTzLWx9ZDKfMAePFFfD564j7ZT7pr25xpvnQfHiJ9AyzzFMz4RQmig9njC68Jrhsga58bKcNuo4z",
  "key7": "2CEAxgTZkYAZs3WYLd6iSgYV1uzbnAZeu3tgfcqpwRSKsk1TTsSwDNJJfojhPPNaVLv1M1DXNNFg5oxYnNDPwt3S",
  "key8": "5XpZ8ukb7ADvhY9nhj5mhjCssr6Xv2wav3v9JXRMNy44MvmRFcns73g7zghKdWyzpVtt36DiGe2qCfz6sahKtpxT",
  "key9": "dWQ59bqKyD3Nc1hJrnP927BfLBYjkUubQcLzWami5ZkUSrUJcW4ku2mBVwvBd67BGRAfmv5BZdziWPNeSDUHjD9",
  "key10": "64iFzaW2YwXR8rh4ymuq93U2F3sLQX1eW9BwGFXYdP3U1tioZmAQahKgFhB1xhXHHHrSEXR76VXPoujtqX4vXjek",
  "key11": "3ShsLvm32yur76rCEGxTqfkaGjw4VLJnp6NY3g7hUpwqk67ThutXJbAXrh37pK97fpcK845Xz3Sp8ir21ogpcgQj",
  "key12": "t6T4gSUmsUBcNZJzvnDXnVDpQ67QCqNBUnZRYc8JRDjHGPncwPcJWGQEaCtCvmXL4brvQkJ1acwNLgus6NJ86qY",
  "key13": "v738nZo8G4pB3bUekCaoEXev8cHgLz25SaKUDJkra1iCySeF13DFJwktYh53eStzoXds17CmqVZgZKE3cjQgkM1",
  "key14": "3GTPFdQcjTsufAahcDAYrKRf1PegCErGzjVmQGceBFM1ScsqUaquA7fMekXofMqTy1H6rRhhPVyvD1g4hvGL6Yc3",
  "key15": "ANADsymVRX4k8oDaQirkHRSHorgAKd2ya7fkWkJiDZXwiA4L7DMjpHuA8cc2uLYQ3m6f35DkgirW5Efbnsw71Pp",
  "key16": "4RuKHRx3k5rz6mJiBD7nSxut7i5Exm5yY5ws98ZGEw38TfhnYMfgFRgjM3inyVG1q3w7Y8KJbHYPQ6gWfJxLFgRk",
  "key17": "4XNk3otBHXhd7QhvqGrfMkUvotLNJVb9eeausG9CxazydfXKqXmaZMy6XyLnvPZpY4zZ89MhQugdALdTXoL8KvGM",
  "key18": "ctNEbrMBKbq9abMHmajgtBSQ1YBWcZRiJxg1Lvf48doW5VSZeqma3ZtineMCQAh4n165Yb2KALwzmPCthfnKKcQ",
  "key19": "4eyxw59JSqjqWZ6UcDyVkXCA6xRQS9zTvXSU9ViE7sghsWJnBePEZmVJ9WLySGVyEGeShf1vCQHY7KFXX6XAgFGL",
  "key20": "3AnTEALjkALzMck41d8wx3T17rN4whagnwdrJCJfStRAJNVVxESpVN16JvjkPb6ePocaDHHMKBu33jHk6LZDkfSo",
  "key21": "5J6zm4hSdHjczSMFobiv5nuDNPGb8e5emdA6wFHc23WDz96pJrR6MXd76oo4YN5Z5yweeMHPw7f4tp2qTj1hhx1F",
  "key22": "3imWAfdyos6JLeg7CWMZG5kxBys9zBgip83JzHsUxxH8G1D88oVgdc5WRfT2MK9v1ajnFvyPjpEevzM6EEN42ya8",
  "key23": "2mqVxC1eM8iDRcdKx5UoidPVYesK4qeGzbKfZLxssz4eJsbkiJmVKEwFsH82xRdi9q2XWafbi4NHZXH5F8rSYkaD",
  "key24": "3oQehTLanrnywwJc9gMeWjwH7cN38aUzbA1wJKooXnrdxUBX6Ct3hqZ9As9mBNLzu5CCwPW5uPmBRaa6fjZkeY5Q",
  "key25": "2PifR5HcqFYbz6zH7q8QtYVvsxCBAVREbhFeZWMbRpAs74Fp7jYj55bCLtuw7qLyMrJ9P7FyiDvcvMjheUSqpUWD",
  "key26": "dUKwWZPV1ZSFsSofRFbMi5L9L4C5Fh8vxsHHwos5jYT6e4rRMgo3PenZhYFmQShab7ymMLbFVzWnrM5nzAkNu5P",
  "key27": "6669rQhjP7SN8WjmNuvzsfjVGfEU9U9gGkTSd7MDKmuZT1wfCDGCS3nAdxSpDhVTCAYsYPA6gs83Jf1Ee4na5Xtz",
  "key28": "2dCgME2Xy8WVuCdiestBuyWjGh87tyKqSo7k86P6zZSQ86whcT3aMtuwaE51kecqXf2iTCendcZhULnePBoPoB1",
  "key29": "5ex1fnbBz1SNwbzPecwGrswjyLWcZ41kTEeFHnB9JybyvYvnQayTrscbJV7iE6WChRV5VEawpi6A4xjaZ485EzdY",
  "key30": "62EubyoeRKdsnRKGUfCQkofWQsoszvUCNCpsYL4i4zw6bLKQspK9TgBbzmZXgNZEX7RvHT2u1SCwCpdx1rx5DqWj",
  "key31": "34UUP1suyeQUczajeYWpdGyx7KsUMAdjxLLyG1d9v5Pun1e9VbwGyQdfjSoMsTkWvZjPjrW3cici2sDkru4jBQXQ",
  "key32": "2LTjJhNxZYXXSuoFcAsfgbQwb421JJkz9g3PU2hJ6sVWBsZHbs2FXq8mMdbbUJuKudnCLrsZr2xUHNbw7AsNTtqf",
  "key33": "5HMYVt8oTyCrW6MvCVYSukus1vinU6pE5TmDzovdDFCuVGd9gP8Xpz4cGgjQqhf2heZHHijUj2T3xVffh7yXHpE1",
  "key34": "czo2zyMDk6TfzgYYF9ouQKbgD21KfsUjqSKtnaBn6UkCauSsC7QHWSGz1BcfMSy2UXiuoHL22vqSLQKy4RUx5zx",
  "key35": "2t6oTizAMBQWLGNwQg8uwtWt1zR4FepdarQk88DNK4qywpg8BbX7wmE7dDBPcDainmFaDonxkwrBxSe4rjpbedkP",
  "key36": "4KyLEtRFtsgtH5zhKxEn7Ectbiya6W4n8mDpnyrrttfETzfPRkfbdwiAnFiJqBd8UxhNWCxfjTs7svzgoKAcL1nr",
  "key37": "VEWWnATDpsgjXwHz5WdoXsTFWTrX234zWzvQTLSU7oyMASJxTDRnk3jRv6T7pWpnDB9kaVcM7vXDe8PgkY9Jeaz",
  "key38": "498a1f5WpzFmtvGP5ZyaormNEgZAxRs7xUGnSp2VLvN21QaR41VXNEnaWQj7RTXiVb6k5zwayobvXUiktB9DgyLX",
  "key39": "BFpT5coZDQyQTrDxn6jihnPCm6ZPuzJR9HJx3Nj5sUMznf67hGWMuV4XGE4rzsZn856itoQMLB7qAC2E8ZyHS8d",
  "key40": "3uPuPKdy4QBJ7419b4MK19YwhrMK1mA4pNKc8CgN1nYsmmFkHvwmmz7CZo82jHLohExaZuPQGrF4Z4UZorVX1JtT",
  "key41": "4uwSgYS8HG8qKYs6J6UsWnEH5UK5FcM9awJXM4kFFmwAwRAvfSvvbxk4XPigQ6wHrUPQctoXVeSohjrHoTmDkAtQ",
  "key42": "2sRiaayP8bu4FFH8g94s2WRNbXKYL3m3FYieNVnTioyzG6stqY7vBSGqNeQBj5dMj1dwMe9QhcaWrjB7UJe8yJgn"
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
