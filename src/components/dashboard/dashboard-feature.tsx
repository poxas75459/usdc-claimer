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
    "2NmfrjNyrv1MVurgzNoedDNyKWvGJgukcmyKwYSZWmRKuKawDGE63hAn3RgBzCWB5Ls6V5KSvWidmB4swTpH74eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyFNmnU7HJRB6TqFvqFQA8a43jB8PrVFHGu1miqu7A7Jq95dbC5BMsUzbftp7yYJBPGqNsuvm6nnQk1giHNckbR",
  "key1": "2KPcKxwPBzjmfN7JYqENfzUm2cPbWihi9CY1LgCcNe4mfNnW8QCrhQU7QMsmjGcDLp3MuEaJwgh72rL5fGvjdVdk",
  "key2": "5Ph1HDii3Ktcwd19JBbS1xDysxLG9LrwmjTCgJXahd93qf9yadASyj2kksu6WcAy5QVHZYQEoBZZ9aH2237u5ooM",
  "key3": "8f6Kaj2ZTDksXBqfs86bqFqUwASqRwCnqbnWzjh2xVujVrywVNa1ejvv4tByaPaJsySAdP916QgeBt2swZBSEaH",
  "key4": "4r1oFMUjQQbP7qYu5YDNdfKvhMAr557wb2fr5Hu1oU41Wwyh4eort5A7dgY3aJbZLfc7WWfMLoYSFHs5VKVFuwDf",
  "key5": "4w5ik3TEkgT6xzTe8hxjMUJ3DoGExqFU6E8UnLdA4jfeEoHMAgfUx4kj2x25cCAJmZ6sxqbVmAe1891pNYgyrMP6",
  "key6": "2ior7funNxZgxXia96St6j3Lpse3YvDZtEoSNZbhkKBBXrGUjbkyJ2t9nB3NxKWpcCSWLwDvJkcrrmcvb9jrxuG6",
  "key7": "1UvRPAZyKeawffdUki8wuQCo2ffdZXMZ3N2TejnMUhSPkQV2deMkBKLACETW2SU3Rwbbfh4iUJ4Rt4i34WTeahX",
  "key8": "EDzSapdXRLQY94iWHBWFwR5BVkg1A4uPrDeUDvYcJfNv4poBH1mfBKBap6NBCLxXGzm4HiU1PjWrMoUSpHAinEH",
  "key9": "438XFUSS9Eam7QwcbgEY4TnfGeCjXbUd1ya4nyhBCq9LpRn3naK94iBffoW8KsvLrPsCa3VBPVJ9RNm7DKB1jUEm",
  "key10": "Q2RsgEuFL2zYEaMfvVfVvhKiM5Kw3SUC2QvW2h5kmnFTUCAjJrmkiwQwUq3CGprRztUPGAr8K3iH5JwERger39P",
  "key11": "2act2jTgrQnSP2kFCwFD5wiEKS4ciPiELr4prPa53z96AiDsHUhphY47B2hoQsmA39zcNqWuw93GmaCG1ue5neED",
  "key12": "48AwDEjkfAt1pDijz7uUoGpeLErJ9qop7eoaXzKQ5VFdEpoXpAEyyh6WHEcbjk7yfNYLoTe7Q22zipu6TJhD2cEV",
  "key13": "5cJEuHVwsE4vJZSZTEqemDTQM8JDReqKznypks9fWGhGYqdwLoZ7aFPdeGuCesWigqN9HBX7ZVpepXpMY9mhb8LJ",
  "key14": "4ALzqZhs896ELRpZtZGRzWJ6eohkCuNSnMfy4ihvBhiypy2RD5Aas6D7BYZKF5HVrxefgF8BCg65cm52aFytdqYj",
  "key15": "W8zQv7RQaLfnFoRmPdHPRiMk7brkBLqLu39b2kxuqN9FPJRGUoPMxpAnFVWQqK7L1nigDHxqP68iFxPq2bVXzeP",
  "key16": "5UJQKLqMtpGcGk3bX3ywvSBPNcAxBgk26jXDwjnd9EamUgAMPUmakj5hJ43Ak9w4bkiCZVNn3wUASULBi7NvmGko",
  "key17": "5E39RsK22aPx2DzBYVYMbvzLDH2UUDun2JcspzGc97dDXtGgSGFoezQsJdTdwmU2akNHZv9pz1HNBsTddr878fst",
  "key18": "3nNAoPTWiQdeVWAhTn9cfTx1J8b2Rhb54tGnRU5afz59hHQ9wXVwana8urPm78PzryktyBYWngfrSXh3rQJeH4Wx",
  "key19": "4aoeZMrUdD4bJhEMn5BR6oTbepSL6K9tZT28ARFUhgQh5fRcNCSJ7t2v57ixL5BinofaQXwYJiz6Eee2xZQs8fDk",
  "key20": "13qdmdn1Vo2shekmPe4CTwwFLtki9rYHZ3kLTda1Wv6tCGeTwAByq18CiAXZhEmRaMyT7g96e9v5bywhK7iCKyb",
  "key21": "gLYXYJNiza2msg34vrmFjFJuTdeMNKQ6XSdU7wZdUHG3A6NtxsZiZpmYtYc8RjwbscPjus7exAGey6ucvEBBEsx",
  "key22": "2d7ymtaof9UXZCxkJbebUfg2wN3eks1kynmrqnFMjStyyqqFKr3nsJdtgjVz1vSiBpda5r7msAeMYugYupqgJRkP",
  "key23": "Sp8eNjEHN5Qey6dhva6toESDaUESXt9RVb8ivxPKKqTQ52G3tSc6XEipg7N8oRT3WQxrCmM5qEqTLsFoa8GWZZD",
  "key24": "2mRzeGbNWTyQAM98eMb6LYFWxAHvtx7Bvjm4sVcuR2akWDe9G1SXuUELBi1qtuPooNtuZN8MZUcPRNNq25RVDufW",
  "key25": "5do7p1B7mvuqRdXvaryGzoWhxgn1fcVketL2oKiggTj6WsqUvAG3E7zdMpxpUzDN6ac7yNUgQprM3NCxwhxpopso",
  "key26": "2eYj1pgbbi22DyUFVr3rKZ6db1BRwYCkRsKJZnSPb6b1aY6r7cWFwaDJGFnCKGzkF5XC19BRjDvkiycg5M3Sber1",
  "key27": "m4LvnsgnCJidWpTePkhJF31exC9QdRLhffudxKsAQYkXMZMckxfd3srCkjtd6tDeAkkLZsg2cqqRyJBfas3AfFk",
  "key28": "2LmK4PUHR2D1Tqfe7YGQECyaMTaZu4WCrCeQiDZEBb5gLe9DR5t4yXA4gnW8cDNouySRcMos2FSEmsgFydwvF2eu",
  "key29": "4tk22K9qapyAxstHK4wVyQknBgQmJfacpU8NM1YNwsxRSbfvPvGZ96MRTCm8W3SPoWUv7DLKF4Krih5bnofzTwgy",
  "key30": "wmzLCtyYnFP1KiqutCxL3kgc1HWByEgsbJ8CXhNxhQePZyAv9V2PY1KrXCo8ZYhPYMcSs3v1hWSiDfXD2CnJrbA",
  "key31": "5BJ4b3zc8QbCzDMuCGyXkyDDveVFu4vazJQDDCAGzBzCPX4MifikknWMRj8TdxXJ5pSACgbsKRKvsdfnEuz5k1oT",
  "key32": "351cyiQYzCEoTGxLKK7aQbETW9PuPftbzpyMVEwaLeNbPZmSKeP9KjwLofuxBXzMfiyYVoNvZLW8QpsSK17E9R7",
  "key33": "3F5Gx51C6k3XSL9F81HHs8T5yZrVnHKSht9kK7HQqEKTq1MQNdFWPxXJYbDJtAKxiNwp7eUEQaLjas5AnseadLWA",
  "key34": "wxQEmSa2NgFhh8B1JWUdpmpK6dXK9iTfyK9faptkUVFpoHKBNQgvjhYjhDsoeifh6KtRn2eZoo2P3NCL7oZStnX",
  "key35": "5Sbwb8oTBTFDgCs4TkcJisuuPfNBzNxGzxzMQ7iYgbEmu4kT3sraGFgg6zw7ndrAQAwexjXrBGXWHTK7JXvJkL7G",
  "key36": "5NZKvJ3tSFrSKH1z33ktpFdG5wyi2ptr9GSL5jbuj14ocnto89Zxg6F23sjFsXP6QkApS967rFuCc4BjCKNc6w3P",
  "key37": "2M5pAuntPJWzmP4LzpTUdtQm5QGQ3gWbPtujoJG3gRUACCKik7v7Rx8YeFbXuctoPHNVkMK2VgegDhbB8VkFKKaF",
  "key38": "4cHnrEBx5zNELiQhBvBwkSSV4hk3znz3TU7vhNc61fpaavK77tX43UY5JncRgxwGu9d1yupuA6W7UYRd54pimx8t",
  "key39": "DxitiaNMkDGDemWSC8keTB9a5nMEtpodbTZBqpvivSbxoHbcNDvxLam51vSiWpTUdaJMDLCf18K2uT28Cg7knbS",
  "key40": "3xA2xpRgoTQjg92Jg4D1TjFQPJfqKToP4eWJByQXwqNLzezHWk5kLSKaxU6wtiLvV5At4XVXiMtPYBdQtBXJ3ujM",
  "key41": "5xVppomJjr3UXZkkYzV8VrRML2WFfP4MfwJHhreebVuyVQD2pSjMgP7y5qcx533HSsGgsfvtZrfMcfaL9WL5tSmw"
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
