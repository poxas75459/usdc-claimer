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
    "4YaJgvvM2ge8yAjqC3zrg1DWqT1Snn2DWDvkvUrCa8ZFrQ4wkHhKrj2wDnbJWJakGheLaTUgGEDrk4GFnMYs18Eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZgnnuU6PViuBneXXoT8j4AxHQxdVmCzCKHYg4A8UzqhKPrwNZGgULXsC4FbW5pUKkKMJDzzwav519xcjUJvnwfA",
  "key1": "3QU9vVgCTgZP4NgaMmtcEXNg6Udn979GsvgMX1T9XRCe8rMKRHmeCMc7e6ckxdq3P8FUzNbq8fwpf2WRpwz1EwaJ",
  "key2": "5b12ybGJ8L3GH9VxXzYJwLuaZdPPKbHZbdb9wM66kK3FeeurgLugRYb6hF7CafYzhDhUBsfBZ8Cnwb3TkpnCQz5E",
  "key3": "5CKBG1x2UQveiHoykQE6TskxzPGWTLXELwcL2Ez3zWzVrVKW4H1sYwC89HxaxFhDWGsxnk7LJKeR22CyY24h38v2",
  "key4": "53AuZgBSa5NuNBy7GFYW3brW6geC6k7b76FvzpnVRrqSSUMFoeuet2Lzmk2UUr3DwBjaF6Nai55hfiKSLu2zetYQ",
  "key5": "3i49z8VaYXTiXErSeDiDuuZqAvEtkrhr8kx5YzS6wFM932LABNTVtSebe3FmKR2ukXHYeEfxPVeaKvSJYShbefaf",
  "key6": "2ZsdEYdovmgWeE5QuvWxqBCxwQ4orovnrdTXm5vXi9fw2ME86F2inDpYSyN6VRUGyLeznjdQWqhYUcThV9fqEetJ",
  "key7": "4qctdKNZaeF7YHR6Az6UheiYTK4Q8Rjb8gYpkBuETs3nEH5qdCk2xEBqXeqFFWkTStDkjWnFnyZbQyHKAu8oXHBQ",
  "key8": "5sDaSHyXCVvHLFfymPQvVAqGtCg9yMTHXaXk3uMdkMUEBC3nNmn9D3rcZRgeV8VKtvn333CX2uXpHH92E7CMwi5u",
  "key9": "2drF8UvjmZQLrL4NaASAJ1rbRqKx7XvdKoeRccRy2U6VN4EconapKhABDymZPxka4yZfxMUbYi1PxHCewbAKSwvP",
  "key10": "5UnwYwpxcqVU325n2bPRrtqjAucr8Ya5ZFM5w3JEVhkzqB8o2NwW1e8xbT341Hg9rBRsBpzsnbPu6pEVSj5f34qT",
  "key11": "2w58h1oemrSLZeisM8VgCipyibbeM23YNwbxCMaQFHaHQWS64upUGF3AHSFED9pwgoW2JdJ1pFqEPWsAifXYpLAk",
  "key12": "SWi8wvjZEECejT82iZhaYcTCeoQK7bZ4CJY9FKoTZruJ2eRDZvc16LdHTfkmzSPiA4jGxn3ZAV2f6kk3WTZkU7n",
  "key13": "qUTerxdaUZcEQzDYS7x4aaKSDetr389U4o2NswuNDLt7tNCVJZ7rcRSUqRJo4Ry3zCbs4eEKx2DWg1Weke23ECr",
  "key14": "3bmnm3jJCtUUpE7DPknupKSU8rjc3uXkQdKJf62BLQpMxwCh7vRonXp1JMWLj2jZHMfdeczX7GciNv5S5iJ9xbKi",
  "key15": "3BW3xjbLtDghtaqn2DZqmeAjgsqNc6SRiSoVwXkkV5wREbCkTTLaB1GFvAkcdr7wdxhpb2euRchQfQTiPq9aeS6M",
  "key16": "xQFbXbCGoKNXhksSeKtRSFWbp8JXKaKx4phdDZM48hb9KKMrMQECsAECH5LaCYJkoCA5eWowUteDetQP5RvsMNj",
  "key17": "2SCLkAd8TrwG3XYxJsK9m4BkK6f4r6aj4NfdEHPcYmPgSsvj8XV8iBtkQ8ndvkKApgbmYZSfUjRqT3nw629aiZ2s",
  "key18": "27qdkBPuYMEY7nBHJYsTRLcpZVpM9YXbmGtkV3hgRsjNATM8pZZ2wzqJwWi3ckfbKuMaJjwNBuU2t6oed4C16FQ4",
  "key19": "4BrrdRNDcoPU96yhXpqYoJqu6EdCBAybcAvb8kASgyHpm7aPUcLEtrLJ7PPYVwLYTtXoZ4VccNPXqJDvYtGsA78R",
  "key20": "3L6YqW9PMTen5SkkJVosFbHFV6rUyEYepCtm1tbaXYgE8M7KoBexiJjJQNgEuHTmfY5jfWDpHahtmEi9rP8bwRQj",
  "key21": "hveZN9VoYZXNDguNnWd4zyS31T88bPQujzB8qSLWLxn8hZEsfG4WWWdm2odAKeyYvht4ZqrkpLAFzuKVZ1mTy4C",
  "key22": "2VZ4VdAFh3zWGKk8qdud6QbFjv3fqJPvE8tH1VYm1z64gRnAV7Z8nUypV27WGZcB8fVnCGC7xMrpgVcMy8aiL4Gt",
  "key23": "3eCxEMqMRpHm43w8sRg4dxyFHqvs71r9UwvJeY4bTE8g1hG1rP1dQaY9g7CfvrGANriANFevYJScBd329fYS2QYQ",
  "key24": "5X6HXu9dKPAqBN9L5SGAwPawnZrLGAsLRuEpuUT4uWRPL6tCagzuHwnscJsbrbr1KQydh4da6wr8ZJSbygfzDUPv",
  "key25": "5Q7VxVrttaQKYE5TmWHSesxoiHk5CEXZCmCnWodyCsKNYSPa4p8rDcWEya4AccGVkXfGVw5H3nEzfiQgtbBzxbho",
  "key26": "5hNCkfbJj2tn3MXALTHZWH1tU8hTP7K26NTMPWUwx2FRrnBrScGpXLVtENSP79X2nbhHepTY845zVD5WNpwvGoCp",
  "key27": "mX9R9Q8kM4CqoKNyv3qsnZeRkSvMpr28C68SKU2hWG2e1FBVpFkyEVZ6ojJR3DapDrzTSZ4RrNEKoGpfGF9xsbX",
  "key28": "4MScWcmBsRDXkAgEX6MNsqGHqSpbEvNvJajG3GcN5gT7Lik7R2ACLyjixFP9VZYVnpc2azs9F7Xs9mnKWiP8WRjd",
  "key29": "VPKAp1A73Mv1qHpE3R83c987jGQ7vAd1MFBWHRUfHcer4ZVgH5kxUzMJxzCVuJTp47vu3D7uhiK28UUhP3eVyjo",
  "key30": "3geLeAnd6wjxeZQu5kLVBq43og6t39F6zweZfMTzZ9SBVpN3JDqgwxX2zS2CFE72dHqzSAUgFig1tLBqpq77FuEP",
  "key31": "5n8tckvi4tFSuG7a2o3bJP1mTmoHXmgRjyPPEyrzfC3eBCsX6dnBVHci7cT8WsaBUqSShLjU3whCQXrc6jnT9rM5",
  "key32": "MpDn7ncuvc8gmuAPmuR3ojRPzYmqCdqKAS5SFC6bKxxhgBoszX4NbZaAya6wTjfY1D7MXK36Cv5sHyUgbD7keC9",
  "key33": "2RQyYj4fBxpA4uCfxv1vxzpGusjKUXwUU3br7PgvwHS2en2qhCG58g1ZuDcVGXAs5strRSKsvp8tsQ9HZ9ZPic5S",
  "key34": "3QXiBQf1FzkhbJqG4NyLvQJg6FKmgmcEWviWvp4cL1thUZ6bTAsvzpu7Swmwe4x4swwmrdir5wSiPWg5GSSxf5pR",
  "key35": "5zs8J6PhKTh4fxTifXD9av1JDSie2W68eAoLLHL7qqgWnL4Y3cDRMxHognLCjYfyw6SSBGmdpKw1Lic8BiTcDKbf",
  "key36": "5bgSTuAFhf9iAg8h5mt9kxpqyybonEKx4ySxGt5KJkLARSct1yzqK7ujrJtveDrMXLBigrWKFijhEJf97ZnYoUUK",
  "key37": "22cSW2Bf6aisij3pu9qXFXMjuFPKSvCqq6TU99fGmq4L6grtipFGaZifK6apZnp2KCG8EPERjWNtuYpDdFfRjCGv",
  "key38": "dygXvBxgQ9wUp4ceGoBbWgecMinR7Yc51XbVYXJXHMzujuyamoquPiPrCaNMbkj9pZWKuBfRgpWtnYn2KPnW3B6",
  "key39": "5X3SFjMzjDxtrJt4SASzuGdrZiKgxR5DLrnaQWPELELvzRyWm6NUFsHKHYCs1R8L6UBAckjMYs4mJRpxfSAeqsk4",
  "key40": "4b1rCqTd9iJjyrFtNSviL95km6nJ9HtbE88R2izkvi1CTUw5KsbjCrEFk6GUHtFhSbiu9Fq9akftooyGjQ9T9bWS",
  "key41": "3Ddij7b4TFoy4WDozjB6n3GmBZtv2CAgzD3MAoPpR5tzG9rdtjiMsTvTyHvEcgepH4k8peVD9SgLD2vJTp5ZsTvy",
  "key42": "5fEFSHezGWqzGvJqeRmyAWDybk9dWJPHKHuDrZV3tAzMWsr7RSBSrrobbPwBqBj1hpA8NbiaSfyRCP993DB7eCDH",
  "key43": "5HQZmXyHB1CPXiVGeYYGVxuDUbtaFkRJkB5vvSi9FjHdCbQ4nGHSgvg1ichwbx1HMii2xbDwCZTWYcdnpH5Ru5S7",
  "key44": "2XBoDRnM5kw6YsDwMGFxn31yNvqmfQrJjtt9gGrT1acwneBZ5WdMai4qoYRPjjmPq5gbAwqQVwTmr9VXVU2ELB3v",
  "key45": "458sTsyrCG3hXMLdoGdKBDVUMEiombDKVtU1xsAexcbEJTsR7ggUmA4zggPWbKFSeRWTPNEbXbXdEZzkeBrSRETG",
  "key46": "64iV58k8y2dk3UCkP2wBpRY14i3ieWsQFqWdvRH2XZvKJRVepWbvyCLqFZDMQaB49QDJFWps6mUGzuu7oWaxqYpH",
  "key47": "27kBVib9PoPgjvqrU9We4Apas2SZH3EGQU8n4ztUkjEkiHfBKfpUPKHBbU4T5QQw2kS98PT73Mi6655xUCf88j4f"
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
