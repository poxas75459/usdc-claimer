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
    "2TkvWeNkpEmXxR55NKG6d9HTyDQDURthn6AdHtEms8Rs1MEfYS5x6ruzs8TrBqhdLNktQTk6hgU8gRpVpcYV9U6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1dWXEXiC5Gpt74Wukdd2PAeuuxuqckgwhpX3FzuEbjtXQP8km82ivWtQ6uXn3cLqMwux773gDZKQtuM5k9jTGP",
  "key1": "WGeTTw9aDsrRSsJ25dvxGcNE8wphnJZCJ3JDjYKteXosDxdFmtYGjdNpyPx1YHM8BGrhxBsrtLAp94P75sTHAs9",
  "key2": "2UT6ETcjo4RNoLaJjdVoN7Cqiyjeds5kqxG1f6Lapj2joZipzxnr213angMpN2mfUXFuHuUkTJWpH9BaBy2ei4kW",
  "key3": "VpekmiiHNefQo5EZW27ieJpg4ciJW92ovu5nYJrwHpzwMpWorNFELUzyzhqaR6ARZoR2AnHkshQV76Des7qV1cv",
  "key4": "4sZZFyjunCXjuJQcHW5JvAxTgQvwpwRWLdzz3Bjkihuo3NHk9AwHixbjKgXjJUADhnurJqa7tpe4H5exQXnu6YPx",
  "key5": "1YhuqxoCtzMNq1eiSiFQqvEmF2n6Eb4hPe3ovPcTYA7mLpQq6S7shsgPYJubU7VYSmHVfEvU8CxTGSNMVraRVfj",
  "key6": "2RukvinhojAEQ9efDF3Y2uY12dTAG2mLJyJK1tTZgmC9mJZEra2C3GMqanPTqYeivcwPsGocgPf9C16GDxfAN8mU",
  "key7": "4k5Xd8Jf9UjYAvxjsymEjvDx5XW6F1K2HuSnnV4Wo7hAHCwN1h95XtPpZid67Arxdibt6siRyadf1ovFmDBAYi1n",
  "key8": "CWJmja5wmMudH9YtMpqeSS8sUZ5MoqV5vSkw8ksWbKjXDy8WkfsVK8xQArxYsHoKJLfBoxoWs5opdDWNXXuxHRk",
  "key9": "kefxejwB53zLg2QxSo413m5z9hreQuwMUMBJzvuyf48mW3YviPfUnBRWRAQySNyiXNjipyRmz6RCRDDfQ92Qf2x",
  "key10": "GruBZYu8tMW8vNtBF5246piNvuASGnar28ZFiQgbt12Ttq3gF56sAAdEmqFz3N1eJH12cPsTkGUZbLvih4PjuCC",
  "key11": "58acGiDvzqD4RysPEE5dpXii3EoyVgFQxPiDSGamCBRZ8mhoxGY1qio27Wzk6XheAAHdMUyNgVS1MJT7gj21U8TR",
  "key12": "2kCiQxshDM5bwRX488GdwJFJEEJ1V8AngE1dNQxye4Z5gYs6fmcj4We4FmKvdv2TFNiVTSKHXfin6Hj7tWKeRxzN",
  "key13": "bmgKaR3VMFyvzgqnQFykSGuPBkxEY96TpgK5soXaqVJuWxTViz4Pq91hwSCvu8Q5i3W86P7gv7RdKW7LRzYWCn1",
  "key14": "2W8ZUe3rhocH2pjDv3Fd1qfLRTS4tRtxgWAiTv3hknAGPwnkQUNF8WB2953hbbN4MqPqJcA837icJpsZoz1gZ78n",
  "key15": "6666xuspHk35LTxv6kN4UMxj7mJXwMcN17S7SqsjRrNb38Qi3YSeA2CN2mVKPu4q4d3goDTeQAxCc68293pNLd72",
  "key16": "3mRaECSQvfTKWywzKgtKs5RZzoCjTHnv4MtF9mZEBmpMjjFUrTNNsPQJBCW9Erryy5t5k6PkwWtz77aVZUvzoojE",
  "key17": "36KfU64xTJqZdSCLrzH2s9oVxXfrhCAt3JYKxEwHfbP7WMDZNZr6x8bLpyhKFRBXBU2fPC6rZhxmKCfs1yEBBkGo",
  "key18": "2davx81ippQGbB9TxGk6KHtBjV68pUEeCNe1ZePHvDbdPeazf9Dr59wLVhLMELkP9uLMh3fB4wgyXyBhzmVgEeJt",
  "key19": "5yctkznMkGXpmdSAuxg5vDGfUgCoVvd7kghehoX5VVRMLipqvzzn6e5AwQRiV5RTxSf3vJogXzmy647GyKpFFs43",
  "key20": "3K8TRaSh8eECZrCW3F2J9kBAAn2ik7AfYf4kpbUn7udLPaEtBDyvY6jLXx3WbXjyYcQk5fpYvUGqnfTK7rugBsqp",
  "key21": "35U2ALMLnbaJGmfJsKsYeWr5Tk9LVdJedkeX5RQumTRyBJ2q9q92No7JjMCuD8grqECeNXim9tYkgtEUQnhgZ2VC",
  "key22": "3eqbPCd231FfXYBrGBuu6Uy8AQhAzjFZt9DBiL93h5RtM5LMCwXK8BvbktYcW4SD8UNfL1KSGN6VQbvxDqYtRRir",
  "key23": "LhKihBW432cZAD1JPRd6TtaSa2zPuVBWX2TezL3wZ8T1fqbCkJn16GF2wYUbQVWdEjB5AhuH11e2RZyvofk6NZo",
  "key24": "2uHphtj2o5vcRh9Mw2xbaYyg35GJRsYQMf3aU6mFFdWZspy9Cr1m1epy8FLgZ9PSNcwhVyw2md2qMBVcgagrzaLn",
  "key25": "3dYbYFCq7t2gVZM6f3JNwFxMUisXTYkDgDnshwt8dr7Vvcm1eFatPPTL1fScHzvSd6wvQg21PTYUY5td24PbEoGz",
  "key26": "3hejFayNp9tYFf2oQj7aEurnN3VkK63BdFmikh9CibjC15PW5iDDsJEHS5md96g5v9v7GWEhbcCKPyACSUqHdB5Z",
  "key27": "3UzTQWz7bhvNt6DkwuqjadJbtZygE2Y6ivkN1GymkBk41qzfF2sKwdGHzPsvZC1Hr6Pf92eGqRuoGXFFZbpb1pjt",
  "key28": "2ZcC4fsSjbxzmsHBUhTq5zkdR2mnCBR41yFQpbohHx4wxzZTaRmAjnu7LpC9cgzDT8LLEtdHR36FZuyohFio9BDi",
  "key29": "m1HUopA7KVABKnEoa5CnLqND7QN8LQN4iwHvf6kjo4xXyTzi4NGgBcUVX2WAant24mnCEY6gs3nCNcQgigQT9SX",
  "key30": "5tNwbaxfffuGTZJHSzzvwXWpgQYPemb8JEiKH7Xvb3Y5czmzd3KwYb7NGtu9mQKafpppGD6hrPm4RSJ9L4fjy1dE",
  "key31": "42DXzEe9Jk33nfytReAoSsKukDV76vi9hB3eeRtt71k4YUoic6xtx2Y5CqWfMrBGDRDvou19YY7SVUUEC7NzU8HK",
  "key32": "2Mn3HnLScgLuWWTd4ewhy2Xi9jTPqtkcX36FM4jveVurLAy6XUekzUMRdHkA7agtzxByiRU1Wxv92kdTMc3hk8kc",
  "key33": "39XTbfBofXBEGGoxiJF9BEwdVSEAosQCF9zqdpXHa4edRxPYsDVKsHjSCsEiWtAsMZBZh3vYzrsAHHio3cHQbVHp",
  "key34": "YvML3ZJoD5pmg7hMykKZhRRdwrpzZzjpwCLNupUmQLsUADKNHEzViTFByPhAxGEaGYoqpdtMgRGPLCWjUPJRCWG",
  "key35": "32284kZcUxX6Vi5cm2N9p2H2tUQouDsfxZWdzuZAxkuMnG6UUGhPQxHSUV49nUtYew635jGDhPNpuCkXQaky28Lh",
  "key36": "5fiD9zpyNPY6nNpXgkgkGtH9Vvwzn7FHM2Tyye3j3XXoTrTrB4J6a1GX7Ers3pHnbx7hp8nqhP4uKBrSNQYSdcrg"
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
