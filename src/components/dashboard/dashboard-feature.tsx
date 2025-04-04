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
    "2m65EcsRmZsJpvMo1fkKurgNYQ6g2mfgXdxvpbPjjzttwgsTgSGKVouoRAMFKB65g2QZZL8S9LtNchXy5yosrikB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzV5NARV4vZpqH3qZ7FL3rRpuV9wYwNSWUxxVeWfhCCtSyGBbUyP3irfRmHMffWpwogy5A9aBBiZ5M1RZT9aH9Q",
  "key1": "WTTHd9UdewJx5VBhgYg49Vk9jtVrTiGm4QikNyBRNDeA96exP9suvEMPpJPo6nA3gknQ9g2usWmaTjRVBQAFEEr",
  "key2": "3NxdEsKDH98ynT6jza7sqXX7GxZzCcwZ6NakSyjPFEtHWwuLCGc6TRV6gEgCL5WAjsxKYTvukg2Da41wtksmWpxs",
  "key3": "3YnNG7o5fowVJs2JyGCz9pE97zzWqmE1vzSU3Vicxd6QtzNFKB6EEagzrjfzqDk4PtshfrdaaNZ1RS7EeZ5DAP2b",
  "key4": "WzdGkt6hxzihz9NEYNxUnKrHycA3vPUSiXDYAJcoNaMLBcfdwkSCgHjQtfvBEmdWiojRVzf3KCCb4BtKawZPt3z",
  "key5": "54S7ZHnSfoZqyGqrJphKDHC2nZAdc8gBx5t3DC93LJUjCjEUaT3zJF8jYdF4hDizeZiQitJs9UcHtb3AA4LD266N",
  "key6": "3YiyV3STCk2ybSqxkpsUmSeVYmJV3vDpuaCSVqDz8jgaWQftfyQoP6gHk8bULFPsEDABK9YRPYuk3PVTWobXs1je",
  "key7": "DKE6aAm7NQbza1nLmEJVwoXSQHyA66BtDN5hNL3pePfZSvSzNVCBC6TvSXNodjew9Y9AqsN7dk835kTbXDUMBCq",
  "key8": "n2RR6izYyoHg1aSuK2dNjF7erUmYn9vCZNycHHHDy1V7p6gYJfH2HpUUQneG6hN6J3T6qGmEWmUKJKQYMFjrhWg",
  "key9": "Bj9So2Yi1VE13Y5HNXn9iP87i57wHCPRsGpmsyHDVxCLseJQksewZv7MnWTjDQ7Dsm33V5kGmakN5NibHAKjzxP",
  "key10": "3wZfb7758NN9mW2uYLTUMhj4Mba3sktwrYKkmCMTzk9nhkDQhoLy2UKnMYukd5pNwytfRMh3n4DhG58eiW2GNTLM",
  "key11": "2Xw1t6oXFF5mds2v2oY6kYYxrbUsjrLAHizfxoqDEyriyqJYsnDd3Vwvyj1TZdTYktiVPwZHJLfUDffGHMNDXoty",
  "key12": "5EpvuqjPXtsKfrHa8oGxFVgaGUJf85nkVGXwcKSiK5ieMkX2Uyx6P9gStjJjrBwfT4trwGXED9LNG9q3XgBZX13r",
  "key13": "2icYtoBuDEDJaMk6tEjMudn8foJQucCAi69vMrd5ed1PyGBBNPFcNtdegPds5tULJF31wGtbUuAXFLoTiK9j3gWS",
  "key14": "5p3dG3Bgxbt1QgCCV5YXGEWaMo7se93Cp2yqApfWCpWmbBc5Q1ez3xyLNo2F1BKzMTowve7ypCzuJirmKVpmPdCo",
  "key15": "2WBSiqWne8xPeemHxZ7WZ3MS8hrrB51cNuwG3vVjsEmVzRj3RASfouoQgwZk3h29PMYqXMsRNqLn7yQzuepKyGQm",
  "key16": "59apPRuuvLZomYiDFAYRQ2wMnNb1m1ixmhqQMoEkAhpHikovj3yrioLnszYxzBzGuYKEtD1hukJ8Pa5zzHnRt7VZ",
  "key17": "UshbeD2qahgh7KsmHp2n52Hn3CYcVu6Y76148iFcvGn4idDExef2H19zfr6oisJw5CJHwxE6MRRZiaj126UzHac",
  "key18": "kYDHqERYHPsfYYQo3TqB9gCgN4wdyq9YoSJ9NXUzfURRfNX8FoJ91BTm1271kVWRaVTPecGFEHgsY5gJEm1vk9E",
  "key19": "66NZVCYgWAx9VPi5f8T862doXFrHAFMxnvaz3UywbQpLkADnc1ra4WwV6EihRM1N9LMjy7hVjt3ndsSdTJYpdfLR",
  "key20": "2ogtt4QDHo4BwKA2SDUkBTFLkQjpEZ93NnVPsgNUDCBssNg8SqTSf2ZxKdSjuYQtyQP5SAPQuEX45WsX26aNyjsb",
  "key21": "2LDoGE9firYnE7gAwRDaY8DN6XNJqe1vMfhXtYYFT4yL7rrHkxK4Zqa6BdBrSH6wNKVewHFvzfXYhDtSx1kHtNQ9",
  "key22": "2wMkD9RvMDkxvrq3K3TjpqCHNd6xfZj6RCshsqyoX9pVarwZeWvZUFx5pjVmczNRPyfv7JHCsYvvY8dcCtdRmozp",
  "key23": "4jQXmFbNQVGAX9LMGLTcu9FmZfs11DnXNfaqvm3ryMNAiMLBMPV33ph3ugcTfFk5RsvC5uSDbiFQGJd4EvAJr3t",
  "key24": "re4NNi9btozuTosrGGgA5U5hA34jtqmixkHR8cmRVR7nxVg6Kv9hL9Y6Y276XG5NgLeQfHLQwnYSL3XYsdMdmS8",
  "key25": "36uhjEtn4tERUEXEZkAX9nDB7WvQKRVH9WNULJ593iSoFoFhHCzJ2hQtWicBABQWuUuXg9oJ7menYVYtrWJeeJz8",
  "key26": "4tw3Whcn56vgWhHabSH8yNnTBAXMvSQ2nWZF7x3GUTynVUngKYWsDhpG2ky2xfokkTShLyRNrHZXZqzVgfn216Ya",
  "key27": "4hTC6Ndyh2FzSRLpviSZwBqnhbKMTzc3NRrKA7r9es4NunXVYcoZfyMHwt5mbNCGqhuNGEYU6V1NSRLKSvQ41PQz",
  "key28": "dK5mxAuw9FwdjbJ8Ks55DR2s9fGCE1kxjpRMKHij8aTcYmULgPreL36x62sxrn5KBaaravLt3qk5YzhcPJ3ecMm",
  "key29": "wKWBCnXJifNGUrmHcyc9PQxqWtJrBeZw863DtJkzzEVwcSBAcJxx8EhnJV8bqZUb3ZPVfvaPbNshR81ocVsMnCs",
  "key30": "2kDrd8BKtXWtfLb1QUQEEGYTiV1sGU9mrqE2dhLQhfJPnNoJPVvfhJKnTqS3N6jjUYGyZcEfxtVhgKSUmWKVW18S",
  "key31": "2fE15uR9UvCWhLZJez8F2PJGT5qaBLojHqyzuWYyR3CirEHh3BjzdmE2TqPgm6YYH85qKbXMLND4ky7UPUReEgyL",
  "key32": "43PQDSK57rrFXncoyUZo8sLx1gLhHP9RnPazQdmQaMPyxN8xs9VuMFbHNWg3BDPoZBYtFWeGmPgxM4ZxSWJzUQkb",
  "key33": "5e4urzE5u5iWuMNzBP9W84mShpbMpX9SDeDEcqQXmQWHDirkKyko8uHoaePsvnEdVpLDKyqS7UCFyuSRs2d6b2jT",
  "key34": "F9iQw6UckTn3taWpJCdYpFuC4B4ESGU1vEUHsddsGjDfJoAF9MCjYaCK5ZYBh14F6wopSHvYFrH8pvsMqmrAjvD",
  "key35": "3WAEeJXW7ARmvTJ7KtwJTekAskRTc9tYqUVZ1A6ZCfaspgKeQkwfmYisKseHygQ8CqdwZDLycxZ7sg7iF5XxdmcF"
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
