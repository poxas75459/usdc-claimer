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
    "41nJ2bF8Ty1Fywy6EJrd3XxHY2xgvvm6ZpUreKz6Z6KENesdhBpXEjvw8obFQVnft5YZDYXAzCYhn6Rmtnd1YJDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vjLatotjGsvCnyKKzdREhKmJTNRkgW1th9cdiMc1tE8SDXGodgXjwSEqM2FWBzq4qkZB82hzdcdr7aUaSapVRpc",
  "key1": "5GhTiqD1PFT76Moxr5dtKacPJEJt325bbgZmzyRNaZnubeJxK49qAZHt1mkYx7n5nW9BSwZ9wzsKRPEd4mW49MQE",
  "key2": "2RppAsXxzYgY2mazJvvEjvWFjN4EdpwV9VCNyrhtsRnWH31UjZDXYiwkUeUUVoLJcfXndwtrVb3yjwPaBAHXWNwP",
  "key3": "5PWnBLe7htFtFB8xKYCmizvSqBZiuoLW9BBNFB9Wd5iwFDhBDZ7BxbLBd96gJna66NegdcaXKiiCdqPUmaoHi7rv",
  "key4": "3KGCtbuuCQizkPxB3qX4BXP3zVTHMhp2wn8fvrJ8hFoecVZs4m9RRA65AYTv7GMkP6fxj3KQX118UJE9vvdtP67v",
  "key5": "3HiTBMNpqgqJEE22dPZ8JvY2ncZHAku54fXKRGGY2LJiCURbZLbpvAyDYZo49pkMZXHMrUEpxWbA2GN4hujU754v",
  "key6": "3cEEZLunJktL8DwXpUzoTN4Lrv4NxctNBUyq3CDGxQTi3drYjA75ud3XcdWjXCYjRGz2Acmt3aZwy7HWk65BreWF",
  "key7": "4jLTjdaYrvpSf4JbW2XFNL1G8oFVgf36TswPY7ZPoWQ8mDzvBJ3zA1UAqdqL3EvuAGT87BCi1PtMpsaVkQ8R3pmt",
  "key8": "3f4FYc5HL9gqnADPf4kV4UYXpWKqUm2rid7ZABvAW2HompVWtw1q6zH47YogbQFC4QU6uvc8xRHtRTAvAD79Xjvs",
  "key9": "3Spb7B5bq9DhuGsJak2o3qcP5ZVgkvXcGiLb5dew3ticRR5B78TJ2zMMHySon8DK2ABPmqs72cVA7MniPAR6cJW8",
  "key10": "aR3Yc9H6R6ufjHGu1qMDPM74WN8puhyykHPRAFZc5Y9L4HZfe8V5fHh5y8cyKcQFuhcHURxRYQhSG3YGUvTgdT1",
  "key11": "2tcTDwRipmcMFSUPkPfSW9Kr19cYa46Wxof4J3baoapYLENrEqFucrmVWWD2345qZuHhrumrrqrR8BjzU51X9Rev",
  "key12": "48otkxDCFMXrMf26GJ8XNv5trdpN5mm3jxC8Vb6KCuyeCfCBHJZoPLagutuCvPgZnbQfaawdvgPgkgYf8sCe54WM",
  "key13": "4EsRaeEp7fSd8SqkajDVwTF9pXt5oyD2pSF6A9VnZEzRvzuVz1ZPr4rtt97Xz2aDTP5V1sjmqkRJyzFCNE1J1jXG",
  "key14": "4qYfY2PofMKT1GfpGa9VE6iYTNToFfF8Dzfz7UQuD6PGnatWPywUSFuMPhW6ct719E43eLFg57m8BSSQ6LCngsGg",
  "key15": "4DgPSd9Kchu1TjDzqxtQWLzws9X4RPieHdsQdLrmj8ZUe4cGoWQ1efCVgp7g3VzZdd2PC4e91Xrmfyz7FRXiWeDv",
  "key16": "2LGfAzfF7mUaAG4HVzkjkinL2sUj2UutnjRZzPUEukdDEr6Xt6b9mNRbrjVKFkrGPSwKV3t2UymLEucQRhMqZFzz",
  "key17": "4a68vSyF2zWLHER98j5m81qg33HtQVGc9317KMRpxHYNWRYxwrBk3SpBxBDpr48xwKE6yn1Q13BsWFeQs6b7AHUc",
  "key18": "61VdoszuHjTjBJ1TGhf7omFfpEperH1iSM2EPePxrWBe4S3SAXqHFmYFBrEqezdu1AQBXc4dG4Yjrn6srjMsd66W",
  "key19": "46h8gNQZPpBCRCsMa51teb6EwG6HV9KAimmkF9ei4hTe1TdxCtMFepUetwkgRiiN7EZvPyBKom5oSChBAfYwbBZz",
  "key20": "5N4yfUfaferuEScugp3wAMm3o4KwsWxcbpPxwuW92zvkVG1yrRvFKVcy5cL4AVKpRRhvGuevyQUyraryg1LbboNV",
  "key21": "3uAGnRWeccvNh6pY9HH5pidCwyAG82V48PkTEBdjSEsRektk6vawGQ8BMs1hSozjWP56uZuZE5CbvTJfMxeC9d4Y",
  "key22": "4ZBMJmaKJ4ncYdRzpyu4RpeAAv4JcSAz6qYpvi5XAWURYd3pD2XdziXrPHCuuY13eA4LGtxRHQ1inySiihzDX11C",
  "key23": "3NHqkSdz4S3AfUk7ZFYx6U5YCS3nmYfNweuVTLVDbuN5Cb23S55CatGCTEeKr1SWgYbaLzJdqY4JTRVM7gbmFHo2",
  "key24": "T7Z1zvhGjekkjpwwL4hQhefYU75hCZ1khrSQC1F9YmJtFJLjAb1yswyX8iBqoYgWXsMHuwUYdHXKMjpgcABrBTs",
  "key25": "2wZEnrVVH8HKzmVUdJChJ1wbgBcHFbZ8SS8865XwB7FLFtG4KoeiXRCyXU5DDfATJe3qcxfRzVMu4td7uUNiGbVr",
  "key26": "49pLPLGD21qXo9ZMRhZHvhPK4Cj84534gJcVjvRyGxFgGkDuRH8yLnuVXby454GdD6dHp3ZJoKkvnfnuixDLKRha",
  "key27": "CBmTwa9BczP5RRK4uur7DWYFEggLdn2g7cmd24AGCUJ5U9b7Ar9eEcKa71Ep3ce5zL8ybydNDu226fDtXLRV6xw",
  "key28": "2KzpYJtPNdMMaj25GRmkPrFFHBRKxZRRR3J2z7y99geRAsSLZgkytDc6tYY4dQgZBTZQL3emJvfy74qATAra8EZd",
  "key29": "2HBN4sukwbuVnKomCcDbcowP7hHu7HcdCEPuCWhTGXu6AnSTgBwMU2danDWis2eRrWFaskEzp6k4w9jocWuuCHNS",
  "key30": "4XwNAbYWxk8JBPwPRR5b2Kp3cPG4tTdLeDKydJdq7QXyFzjRoiyTc3NdeaYK3k4JwAy8fQ1Zzs4F9AofG6jbAYaV",
  "key31": "kSWWcPhm7qqEcBwaFoiBRDpeBW5M7nLyUYdk4YQjaccEaGL6yN2Wp4gTby1MqQPfR2abJx9JtWNrzzcBjJs9Qz8",
  "key32": "eAN37qXFjgTbzFbDmSCLctkmq5tHhWDDFpBWabTUcMoM4RojCxNQ9ytG28qdHcmWFdEcR3bUnicKKWsdWPfMi7L",
  "key33": "4kD25oN9zRmxNK3u8x7EG6W5fMMNkQCwdRMgV9veTWg9TBEqPZ8FKTrVqucuEBRY5KGLvsEpUfa13Tf3w1MtN6st"
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
