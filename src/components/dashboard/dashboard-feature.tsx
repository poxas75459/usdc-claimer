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
    "223Ctarh3edCjgnpo8P9ihWn55ZcPmYWNn7sdRhqxwYDfqMx9dsWQSxqPLDprEk5fTG2dC8x5KaZn1WsEuhSrHUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o9xCuFApwEZUFSsfruSudKomy6VvyPJCAcrvwUaDHsoJvfxDyY5CPaQSH5DWH7jM3VRorA7TAUCKDH7Lk1rZCDD",
  "key1": "3mb7g5CrapLhQYppBuSy2L2j733sjgodRwPf9csVUqEJkcpNSgu8LHM9CwEy3j9sLBh9qEow1yxnopocpC5kcvN7",
  "key2": "2mobyUjfpW4uuG9vxLakENhSgBZi5u97bqpTwpT8eEXXKXAXKN7GKyqQncfs5HP9uAuZw2DzTF4AZgpjGctzVZs5",
  "key3": "2MwR8u3pyZcTV5H4yo5eEc271n8MQsVDAY7kazC13oyHtFCjexwQvTgYaHHbEC7LwExDDirXqbMA9GvccW526odv",
  "key4": "ErNNTX4TUpD7UeYaFAdCTSVbqqfUddZ6iXwjDGzgHESJyNaaxDB6n8ZBY5HmC4QxnwcgRxykpCmkPcy9G5bPuxB",
  "key5": "4ZAVtjVFDBEAMbT42guFrD5ENNK6os2UYbZ9nDL4FxU6sJpEui7oUCZyihzioW7eMZU9snUBaex1U6Ec9Drs1wYN",
  "key6": "2r1k6T5VDutWSq9FpJJrgNfTqwXoNqUoAx9Ucknkj38jbLKBQQTrTUcs7C7MmVo9RsBvhwusnoC6mspECfFuwrwv",
  "key7": "3vQ6bv5nahUPi9Z8JEFUyH3ZGJWA6UASKz8jQtFvQxEqUsYX4Ziiau1V5Mb8hSzzjFgtQXAAr3DnCxak9MppQLfM",
  "key8": "2H1WioQVRRCrvakpcuzY4gVMhK5pdN5ERb2dkAfNSCagKLRFiSRJkJdDhvgEUiwf58WFvRKzNvUmpKKaMGw1Dxqj",
  "key9": "zmrcmPRSYMGCyg2FEST6Qq9FeZ1tbQh1TSbmtp9DAnfmeqp5ENJLzFFKu4o6ZXvtNKNFvoe5yo4tNH8J9RJwECX",
  "key10": "qRiHauEdQGEoXuRrrE31JLQbv7D2jjr5F7EzofuyNPzNYcWi6G5hV3uKJMN1xYDHUrndXUEe3eytkP6X6ccZeXV",
  "key11": "44gUX3P4ovnDaHu25eR2jHHYKb18FEYtsywtSTJoLnHGjrmHWudx2hoPcPjAJ3p5WbQiHPZavXYxHGL9wS5me6Dz",
  "key12": "4XqL2pwDbjNqfWVEnYbkQHobFKUkPCTkActbFSLz43Cf36c6Ux3fG4ZhW9JubqhStF7tLdM8rx5u37HX7QwttERP",
  "key13": "5sVH9PHuBtNh3xeJkzNMu9Bk2UHERHjcK5fw71tCFGnxxcEHSS1HBCr9y4DPynWyBrnimQA12E2ZFQgA8qLVoa5C",
  "key14": "26fFpTDAfrpUYiyivcAAkMjsKVWpHMJ8KbUyBoY2BsEoUCPXQmnekGBavuR9JAh5bMx8TRoh7MG7iEMfDvmpTgL5",
  "key15": "25m4dqrcm9jdXQ7Ucb9Utn9AzScZy6NsD35r8JMqhA741S8RYt5wpDV1CVf4Q6n3fU3cd3Nd1y3wp2rsR2xJCrBX",
  "key16": "59Z8XbNLvtajxkBFBKQc6EA23GWpmnecrEq1Vih4wwFEbGuuVCQ2J7bAshB1kKEMdu7V8w4BxAtsdJYZvah4HmQK",
  "key17": "2PnxhfcEy5VRB12w6vMLomVnhperMK8ZwKPgrLMWx5bp4j7UguKqxvjnEYghqZTZ1o7pDBJvcybxhghWnUrX8ZsT",
  "key18": "2CTpErRpjJ47dSgMaXCR7NBTg8oNfvJfvj4WrWswakwActPy881rKgJ1vaNN3eUjA7efZADdn578A9XdHFJNp6rK",
  "key19": "5swdRNno9ZLTcHbdeAcocEKF4GK93P3UMqJ2A5Zm3Y7bFEcKjrgwuRjjZxdFRAaRzetgkgB3e2vB6JvRfrftMMfd",
  "key20": "3iZZkJeS8p5GWVHSfGoVNGTpiF3JDm7iCZr35H3b8iXTE1Ppucn18KxMYeuK9fQSAGrLmUUmsrBJLwMcDvjWbTX",
  "key21": "3QKFe2BfWqZYvjFcPWNaHxRQWe1m3ywH1pge2GWNqMa1JERDoGJgcSQEdjEPstmgUqYsyzW6hMQX6fKFr7ijCu8B",
  "key22": "3xSu4HfPQPWYcrJB9emVYAqP8AbMD9dpxeBoihXSfZXhxFyGnXzTiL2U4JsqjntRuRBpqeTAbTtC5XeLuPukPdwN",
  "key23": "32csVn9DqL8GS7YBxGJ1sCekeGAYb4Ag9eG8So5rHAhMw12zqVMRMXo2fYUAUiqhujwT8uiHtvaeSEtdknCCzW4P",
  "key24": "5rhWZMp69TaYXzkMXBG3h3AVXbEK7hLt853aqKm7DP6xrWuYHkZtCfhtdyaB8SByHRsLynzkxrpRoJznQSyxyc3L",
  "key25": "3gmEQTGCX6AkZfieiJ41BX19dfkntaRmSF5d6gCLWcFrdyTp3VPbqQzEkiGK8svqe2u9kNvkKwbBvz1hdhUGJZhc",
  "key26": "3sHhxTRzcTHaUJge8BpNUVjkvHwYLVQQZrRK4vpu8TWADBEd4Ja1Svw9idSsgXsZWUoK4zrcfC6jMH44gPo1JA38",
  "key27": "5M685pzecHqAijJnGJGuE1pbUpFR5ed6BHFfcgLZe8WvgP2Spf2rMD4KofjFRpFppnf5dVf3G6sgGKjG9GFhFG2f",
  "key28": "4ta8BgqVHKJazchy7V5YNaaxzSfStCARCYSUGKFvWHXGipWyPvVoR25RRqy2LZ9ywxafbyZbSRuVz57Deeuj4GBS",
  "key29": "4KnZT96GjLwXoNhVJuiCfKTcwp2mH11pQueQqJn4cZ15xKJpjtPW2wnDc4kVyY9jiBKbP5rcMMRtWLsNZRGJkmGH",
  "key30": "2E9RjzGmJnJQUfaGG5pmqYkpiKJytgidwBwePgo8QkCcaAf1HxoJmnDy12MUUFK8UFpNtGWC1jPUNQEMTDLmyzJz",
  "key31": "3oj27BGAmQr5EVAXofdnPagqJDjA6pcXhMsiX9Kot1Wm7CpCStwtZH825gSYS1nBNGJJDjbf24UCfCcuPnKbEtGd",
  "key32": "4mQKTFUrtCXhdujrLwSASoMe5AFj55iJFcsqjQ48gRwS6keAMZw9npNTtT1eoYzNYgP3ta71AvJi48DJtWtfZJXm",
  "key33": "4fRL6nRdqVXebdgAX6mEpEpzU3RKLcf6s4rSYRpA3oidpXVpWooE5uZ7zwzoNwy48N51MyFzP2TVxvW54nmPTMsJ",
  "key34": "4ot4kZaTmGmARfn9xUpbm8WMHYPEamKoBNmfNJkASjNcLMHSnZK3F7EhcqQxdVNyeyutSZJSWFN4ruRTFdFFepDq",
  "key35": "49UfSiBMxLcqjBzmykMmDX4qcAwTW5bQtWpdokVNGNeo3MCti5QoyH8ZcZCCchqog1q7WsJCEH6Qb98QezSh6SYQ",
  "key36": "2zcsYmJW1GhxXY61kvd6H24d658R5VirL93jnLeNEDDHg4NEaQo55v6ozNnE2gSXfaFAruiw7GTs69NcPzfvRgVb",
  "key37": "4ZF9wpPJyjpLbQFYwxkSkiPkfsuvFJecxsVne3GGyEXi44r6dd9sBLxw8KnYzmgiQGMcuhUnAzzxdxJCBTyZbcM",
  "key38": "etuKpEZvMifknr5VSPAhc1hK1BP5MRRTJCdXwG77iHZLhoYnEcbaxny3wpq5vW3SUA8WyAWysfSJZoGP19VjVee",
  "key39": "5JHqjGaYe5BkdnDzEtuMg6UQXGkXWkBqwVSFLB48eTMfQGyroJtpvGqPmzqA325FZNurzrEWdftTsdjGQoj9Qmor",
  "key40": "437nP1FGgjEniPrgssFzwkqzYrNYmyCREZycjXQuZacG9L1WniWGqF9YGQNzfu5bcrvPFo4DtGqq5n1JkYQgnKfy",
  "key41": "2hrnMV83chCXS5YTkme9AyKB7AzAFnbxaEA6NvT45YKyoJJYg7fK4emQvbXbKScvU17RQ3322WHvyTGvpAAJiJkm",
  "key42": "4VtL5D2rfW49eXkuqBCA71QUxM72MUBt6Y5qCu4Axh9kFv8a86KRN6XpekvmXxGKZMxZ9EpuRMCPpiBUfRiGBaXM"
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
