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
    "5K6z665dGX8H8hhxNrBX5buaCAKohr6UPWoXGgSWpgXfGFxtu7PWUpW3Zi9oo84nGHDXJBcpUTsxRVM25NsFPbr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rsy4mJHkGFSWwXdwes78dpFX1wmyEr9pVLziLRJJ4ag4fASh78APWGPU5WNB4QqwVQGgLZq7RqzDMo7N2xunzYW",
  "key1": "5BRfETTsfkGn3M2Q95dV9TK9YcrYue9vU3HpvzV3LuqfigBxkGrjp7Kf9Ud7NJTsEH21yM4NWxHrczmsghdpoKqP",
  "key2": "3AhrNtHhtDHitrXpXptr5q3rQQiDhWN3wZQye2gC6r2bffsf8mHBTyGUsWc24AhuLsbn75XNte7Gr16yBmXzLtAN",
  "key3": "2Y9KYP5vYEFb7Hjo1pZrdY65KMKUfc11zJ7cLPBxB9GXvhLa6Q6QjLEZVneGFvzH4KPsZKhyTTmcB5DBN7yWv3vx",
  "key4": "hapHbpbwteeBxMoRhcZEtWK6bhPHx7SaVxXVnZjCeNLCgeWKfVXb841Ra42wvuE9ijhW65oF9wLxeqeFHSuQsy2",
  "key5": "668R9LQdwCbRdJCPpJGvQZNtPkKeZt7KLpFPJcZwUj3no5xSrZHdnYChB8L9ioHB2AjkLdQWG3wvpNqEa6XXx6Cd",
  "key6": "4zgCJ5gA7trHzEYLiM2eDkqpuNtQbySsa8hd2CgEpvN74R3upg2TMGSgKB41jUa4suSPQv1EthEaUzgyPRBjpF1M",
  "key7": "3pgHWuVrTMmjes4sGnLZ45vVfanqUV4hVq9sbyF7LpDdDcJaqpKHcAKfkNUUbU7hkQWMJxDjBVSTtcrqcArxtp7f",
  "key8": "42cesx76RKzGcm9kBVgTgCCdk9H6GcXXUXoaosUzhQikGoarkyV4DwEmZJ7TpSSHWkMCqQnYxY8ojkx9Tz5uVUB4",
  "key9": "3tT4MW4s9UneNgKLkZN2qVdfmP8KDLTW3KxiCNgDupUMua5nNGAV7eGyHsSqNu9ZVMoA9wk6wfF1pbeGviH7U5Pv",
  "key10": "4A1cPRsmf52CsaoDUQSAFL11sVSjsb3VGovVKqDvNjYJWZ7XUGoaGUMME79qLt5x98hpCQGfcd85CgfTumWJi7LY",
  "key11": "4Nknds31a4mWmzVYtPeSThreqEw8UfzVEmZuu6f4WWFDN47hqHYNyvYtnQJ2JvnQcXHB9b1t5uMEm7cYn3uhBxta",
  "key12": "5ucZ9ZGRQc4VJYUzXrXPz4p4U2oEyKc9SWZFZTpTFRfMCjjC1otnxmNKCW8zhbYG69dZmbiknZ5amrQb1SGctbQp",
  "key13": "5svpi1xTYUhByTEFFpGfnPAeAt2o3h4d4sgJksVX5YvMFJZJXuEKjzr1EbewvM7ggyi6Z7wj1AreW5MMsDaqpKpU",
  "key14": "3cpyHzEQp6h8MkwrXfxydbxn8vcUcJ7XP9qU1FUALHbC2c8yfQ25PzqX992JWDMXTpzR5GNpDgcmMFDsv3ZZQYk4",
  "key15": "5DrYRk7gYADrsBbwidY6FusocYYkGnnETvJQ3UyeLQH7KLF84xk9XF47msv7P7uxtW5JPkP3rgfHZcnGKcSQYxfo",
  "key16": "4yquzdAmWjNjkYCJopBRT9ZM4KxrhBCuxM55Nfb5aLqjNYeoYGpPj1riT7c8aiLQpZ3R4gsuh7K3qc7ZduPnSjAi",
  "key17": "331kByd1Lh24cs5fKqnxGVjvjsrcGvv2BBVatDGvWqJvJJskbv31SqWqqY27PPiJxLm2SpdSNoERZgGcZMCAavPj",
  "key18": "4ncJgQ47bTRP3gEHYYnHCfYpbVT68tCwzbNb3xdHwEiNdHqtrQPkjV6DDNSs2BU5y71wP3nmDSmGxe88PyZ4atgh",
  "key19": "trg8Ac4G3yoAyiH9dMCkwioXyX3WkVjwNWo3bxHm9jPaGgCfx4pQJ7JVtU826tb1fkc616D7igi5Chnnh4BeAu8",
  "key20": "1LiNQbUME1QDB13MrAJUyWKgjB5b95rX4j33Ci4pSUZFY7kmJkLyNq7bReNSvBYLD4zYqRpVsJHvPfHruhbH1ag",
  "key21": "5SZAj8Dxt4N58p7wyMDH89rRvY7tXTAVf7dcoPuEVewdkQk4Psc3R7UXUSAmxEJgeaswCNpNXGu592UtBjQJk2tj",
  "key22": "3k7w2RdiT5jNSzcXSgVKqxgp3APAPQDYk1yAeRJ9ck37bVk7tYzhUKLoZaBov43Zk1bKwKKQXuV5QLZV4LA1XRds",
  "key23": "2KvdrACTKCdWgpt9vEC99wz1LE2x1KUhBBvZrtiANQNv7AK9eoBHArT6N7VJcpU1VV3oC55NyZrzGaxP9xqWTosr",
  "key24": "1QAokNKPvK4hw5aFDyUiynUvZVVjQejWxPyw5dS3JcuJh6x1mHLXKeNgCqFHod9PYhc1ZmN7L93dyHWzsCnAh4D",
  "key25": "5HcXYdzX5v63TrAsaMGmpv1B8uhES5TMJG5p3UyhgrsVNoFTQzmsTbvchqNkNkf6aULn6QroMVsTQ84kDywk4z67",
  "key26": "3kE1dnUb7kuZ6rb9yELLZGtDuxx8NUBKSD7bM4PVsCLTfPiYTeghJ67ZpEzwJHb3tFpkCsv32tGCczziPKBHe8Lz",
  "key27": "58BqKt1yP5QZWpujXpX3gTMU2z2aWArKamkvGca8MXGKiRT8s3qyzm6bD3cvYkPdt1e3ZE8HX2hy9Z79KtGXbao7",
  "key28": "569MAZ7XyT3Dbn7qJwDMnDMU24hrKWb4CFxQtw8eSP3kTX13neid8vfrjYHdmxAV3aXf2M3fxVXwQ4ZMEM5vagMQ",
  "key29": "5tdUYEgTWKp8Z24hVWB12fFWhhQkJnRyfNUY9LGXMEju1M5ZAMaqibsA7oSebUrsm6ZYoj29wwESmMZS1DvgkUxR",
  "key30": "4EMWVgW9Gp4WKfUEszBoBg3X1XGDgkkhc3FZoNYTabCXfTnmVo4f5zTGbVHuot9ex5aT87W8MiC6vAW9e5GxvKzy",
  "key31": "4Lyu5JSKxqnLAqK3DSpg7j4pVmcgkvBCUVvmUZmTQMQHgpTtuhGrwXdhMzUiArjuDF8VSFXkUUVhsNTdEcuAyez8",
  "key32": "tmVFZbvcvTM9ZPyKHFEW5oxynt7zZaZigHDJQoJ1iYzSEEhPu7DNa4gAbSnFeekYvJSjgM9c8q2ovNnKY6aokTC",
  "key33": "5Gy1UNe4T5Rjr2G2T7dZg7pMZfDYBjdTBKkymfvYKXHAG5etvQzMzowGrjyfqvmwW8UYqFxgbBbuuPNXDU8ubsFc",
  "key34": "66JxpPNHG9HifRfR4Ayb1H2SCqhE6877jQnicerHJsmfSejzNYycKa4wEnfYgY3WLgFWyjSmrZEJJfXTLH8wQrsb",
  "key35": "2g8AvVVXnZNLrgPAtUGtE7GK83oQMcvo3NYUSoGGpPjJJDP7BQRhPbDybpM8tRTFsd97469icnx9dvsiCvA2pG16",
  "key36": "5gijRrvz5DMPZRF54RmCMSY2cVEopjBJtyxVFQarXevLpQiikox9dDCviCQTBmdQTjDD943C3hx2xPG85mpbYJ9t",
  "key37": "4qsmpiuahToAZzjB5n9z7ToA6u678ahTfeGEjJRoT7tFyyKnGHmV63yk5keeWV7iZsjFB4627gNncdY6quoJ9yz9",
  "key38": "h9gY6NPRVKQzApdsMXfBsEhsUsiPCL48zDpFrcaFEf2Dr4Vv2QEoVivW9Ww1XULRxgJi1meDSFSpCbCsWosztep",
  "key39": "3kxeafRbrL9UFV97ubvtMjEmQStC7TLSEKsudnDfF3Y2AoqwD96fqg3fJEddvaHEUG43qB51y3yFd6Wqy4vwLzkp",
  "key40": "5Gfent2LBRFVmXbb9jGt6fTJXakA6KrYFPoU8o3cnteJEqUQCjoEe8WrBUQuprC21VYggk3wsuzp8e9PzSoqGwMT",
  "key41": "5u1UaMQMZemVVA5smKStd1gpBv6eG3VBmGNYbLrLkaXscNJW6Y68Cxw9P4UZP45LhETxehTxivB1BiSgPfgdpZx9",
  "key42": "2wPgweHcKGpSpVCn2KvD8jsRf5fRzCc8thxWkq4KbQxgFioyvgtff8UaBCcuuRcieDW5KWwmMMTm9qvdePePLypv",
  "key43": "3HEeTLnHZoBCHkryqL6JCxCjYiYxQBu6yPoNdUeU3DzFScnKUFmSskCs2MyAem9NzYgBSzx1evpYSSzHAneejzzS",
  "key44": "5pYuu744dEnBsPTkceTwNjJFxLVWM8zwULLbUjnNCtHUVvMpkcy3sNRcEHgajJeTwyv6J3iFY7PW2sDAiAPa72cn"
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
