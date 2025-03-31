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
    "4rKDomxMPYE3YA8Rp8jb1X93BmonVUx22sHMss85XqXEypiFdeCA1xAa9V2W7pB1RpD969L2u3pvK1siaNzsqBGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27GE9NtJ8E323hwq62trA6xdNPsdk5A7EzgmHsnjdh8eMPqQuDrAZkJkEdxdnVY9Nu9tzaykQoaV6YJcJz8wZmQH",
  "key1": "5dxc2wXVZjjPuAVFwnLikBJZANiSBZF54qo8pkan4gf7CVZquWsHHx8mKgSZBqGg5Ja4PbqmbRbD44Y77AxqFNaM",
  "key2": "2F8EFM6bwwq3AkbRtkp4F38o6D4EnKMAGb7SLCmxjrK4Y6x3pgnjJJfVg2E9NdAZRwct6GHrYF9kGA17EiHD2wLX",
  "key3": "YXLq6ZUnNujy1tz3pThNWBEd8xUfY9YoCZaUAcJKza764vAJjtPVnGrhdsidrJRyW1QhCvxVuVZpP1ujLnvR9yS",
  "key4": "3uFmT5N7ofV7B4NJsE9B44L4ja5q2tuKrohNYMoCKxJ5ujNcsNZoGpnDx6nVxeR5MEMNhggL7WRvzGQkCgMuCPs5",
  "key5": "3WD2HhcwrdqVogEFEhgPr23ypLisyg5Vm2D2QKuNEuDKGrB35HWsqhZu43VPG1VuSm7g74WuU7HDUnFQahf7rGh1",
  "key6": "2yEtLMqdnETgRSgbGq6p2ZYDkwwacDAPEg581dry4pwKHYUmDZEqP9agSXkAKAvYBisHYrpQxg4bcaGfVV3BPf6H",
  "key7": "3g2ynH9jRL9acJwJrkR6jv2r1V4AwgZxBU11heMQHvtXHyx2B2tFCCAiMHnEsxmDQsgYRZZ3qLzdifamNZcpyFRs",
  "key8": "2RAh5C5TjWvXt9QyQYKEgEtazUXzNv876YhHCVfYwRmscYAwxRcQzaW2XwsyjsRBnmcRRJKujtqEXvasVveQRnmp",
  "key9": "JBE9yjbeb2www65YN2EGWpLhLRbyqcRo3ERux9uuuKmMrhnhvaRMSxG3vf3w3o9d4B1wx1wzbLaq7CrUxxQJ6Q8",
  "key10": "x57bg6Hx4pwJSmeLhYGr8aAYavDiwsKTBZKQCQy8tRJPspogmdpD4h5Yem9mevUuLEPCKoe43MQrn4tTfsyyXmA",
  "key11": "4GaxmwsCQ4TEowTxkydyFEYPBEMDEuH1hYfezGVvbWJtS9XR3snx9devXpiRTEoPBWQxzyLoEYU6Lgkz2u8bkgwZ",
  "key12": "2usjdUUPoTeokTjScmNxmvGYKFHLz5USTe7GKFzPcC34V1RkMdYgUmEVxMhgGSg1FePe8NuGk4GydDwM84GT41oi",
  "key13": "4xmZNf8hU8xhYXQ8hwDEKy2uNL6AbiTpGJfb3YYyBUjNzuVx3g4v3MuQDpbig7Vyqur83vZko8pFgFrmhnFsM2JR",
  "key14": "5TAXubrc9cQqn1pG88JJ2DvXFBJju6eexZRjur8xcJ5YrfZwf36i5cJkq76U4vyiCRdtHFtAydPAp271rRs3t8pE",
  "key15": "43ksKvFZydbgPcTzgrqx9AWkSe4W12EzTnZ4Ce1BwFGucM1J3LKhtXAYf9UL5utKk2vjWjwkvVEkNVLTiwGT3yHJ",
  "key16": "yxYJWXjNHQ5qtgUzxLAR32495t37oA1hxdDb4DVa3hbyxbdvmPgje1iax3Vpdz3w4d2xJCn7eAEAjJVDJF445wz",
  "key17": "2SmpbURcdHoziymZbsX8miJvCQtzpSQ9nUpLEV8LFEk1joBEbiW1mdYKxYMR2nDZ1oXaSf2AaWn8rEfK5WzUPL5M",
  "key18": "388XoCPxhayfjenmvrN31NdWRrjXbby7x9GaDVfgZhNt31MeQtsKtjsk1cYUDmoBqwCtGVrvdQeAp2DNgW2ndp33",
  "key19": "35jyURTYLsgE4YhQo1qr1pCmqphKLourTQwVLtPQFPdbcLm65SKCKky9V6rtEt3Z5ahr3zUhi8m7RcHtHGUBAkE4",
  "key20": "5r2W3a5dn4MhLHWTMeJpj667TSEz7ZDFuzgmBda9ABVq6njtMB7YNHSC46Y8diAwfXW6K28uXo7RrAkcXmYutcVz",
  "key21": "3dwe4hpARJoGB5NfTL4fyA3GWkCABvUjFW72Xd2pCN3Ra6WB49PjuHc1BkR7RFToHxxwjFNmSsxU8aeqLZxR6AgA",
  "key22": "2B77aE8avy65LdJ2DSDquuGQ55riqMLwPkWoSBiQsLN4bUK9SAbEfPXsASqv2KbhzPwF422jCdQ3EemWCC2qx5C1",
  "key23": "5tE36mG5Q9RTLoC79dhsBU1bxW9aKDX2wgdWcwSu7oEFor7gUmK2BwcHyCZJhKiv8WGLm89U2cjgnfqDartT4Wx",
  "key24": "4JXtFoP2hWQbuPQXHvGwqioe1bvPuYhawra71fNdYwYCrLjGj6BkMPnCbeiemrjpr3hBAxKG4xpYB2dmiG2YxG67",
  "key25": "3VXZxLtFATRmNZYT3HKiJRhTRXEsKWfgTnk9isteUBaTR4rx3NxkoJcG9N8CvpmTjsQwkKvUeGQ6ye4of1vfSwWP",
  "key26": "5KG3T85YwsR1U1sSu1aUgQrDxGVK9KLGwZYrU6cJPdFt4jEANfncMJWL6vrJabtoqgihihu2pJCEBrCvcJfntVwj",
  "key27": "5L5U3kgYZxFA8ypoqSgAhxLTTjY5kwyp6yDdtTEE7biuQuqTkJ6mYibDATsxntvp5gSDEK1w7mQWjmebvpVTkMVZ",
  "key28": "64925ic9biLzMZoJmyJuzCU6BmJrqsKqdw9UBhswonmJHvYHVcKc4qCmWQaKzk2uMEAhwzeUnyBzyn1nagUr2ELd",
  "key29": "2p9LsLwSA2nFKqFhfDsUxhz2UpVQYvVjLAX1NJ3TaVZETsFztnBXm4ppheMFfUyVeohJfUJHLQCE81GPLqrvPk1J",
  "key30": "4FedruPGtNitj64cEc4ZvMK5aET4VpBnLUReRCzFHjGKp9PSkcwKbSMyTANxCPWgQi8Bhdc1CDFBXCrZ8RfHUGCW",
  "key31": "54thHeEgV1h3xHS4h6pwKgEM5vF7AS8pkr3gaRxnJwCdTQMaRVqBvPCDzeuQ74TLRhbJ6CS4ACKAj4mwAxuiv5mu",
  "key32": "22Kk1FbKfFuqYAun9zppcC4x74aVnCMa785QVYaT48b9jhJrmjp4FXXV1WXceDT9YWp9FotQDhpbnHB3Evjhe56q",
  "key33": "3uEu7UFy6EH1uJsyHJe4k6TRzBSCV7VjnHtpmNtSVe1R6PraFACk9Rd6tCaXMvxjepfnKXqiRWjkHxsCTDnfd2xN",
  "key34": "3TfqWk1dPGL64t2u4nh3xuhCvHiPprYmqJJ7myPnYuFart2PPgyZsAnAoNbWNGmpmWSbiNQcCg53PvAh9DMr5wqv",
  "key35": "4HN98GmbFFeyEEguwfib3Hr3Go2S4TBDrVk788SE2NbooYmHju494cJwuZm9ovtec8hjxTG1jQV7HjT8jrwCMFsA",
  "key36": "5x6bfQ7a28MKcQUkQw6i92qoppPBEGcgRstyQoBZXf7qQGguee8yAtdm64DaFwfu8ozsYPQ4VKNjgKNTCHiLAVqi",
  "key37": "4jLDveFGLaJ8k4quu1DXvXSQSqTdtXwpCa1xQq7fURpXpEkBhGniPYEgzFz4n8PK5RETqA2CKqEYas7151b2Cwb5",
  "key38": "67R7r9we7r4buFtTyKKqc97n8DfzQGHyCwCAEKPWU19A994RGzA629TTAcjCbH51DExveqSi4FH2GFNcvNzaQcTi",
  "key39": "62tm9gqXMaHpKNnozbdke7JGLmokZ9t7QNwwrfphKHuoV39mj8Y95cJZEAnteUhDiWzF6JWo5k4GZvkC3a5MbvyX",
  "key40": "4niVqdwLvfzFWcdoCbUj8j2VPTYoAUmCtV9jioPJKQVRiabP7BhmTMoXk7fKaGUdiTcxoMaCmFicMFWaWH2r3bb5",
  "key41": "3dMJiSaiZ6KJAkmbB625e9CoGUURpWyj7wtzJAbQQQUcLemP9ToRP66vJXm4odZCdFhYrMHUch4BkMXkiXW1zvRR",
  "key42": "4LG1dyMyH9abLX2DK6DZjMepfWLoyEiAe7cMczAsMhJ9stR8KAKSH7A9DWN72EkeJtHGPu6gSL3HaorTQt2cJBa9",
  "key43": "5Rj3KQhipRaFchjZomHy7ZVb4LbW5BBpKAhs8M4K3KN9ZBUZrBUiMDeyz3s74G19bgsarcyjJchUqRQBjXNBqrgv"
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
