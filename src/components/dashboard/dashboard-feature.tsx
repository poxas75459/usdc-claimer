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
    "45TofLxQudorL4MYdzTcdDEF4KhZCQm59CFdT4gvP39UtViVRj5iTTdVqnhQjzvebSfP9ge7qgedTcpMgvrQpoGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RyXagY11zyjem2oozzk2G2qxnn4VpW1FQ4MQihfGrstiZCd1DBfqdMBdsu8a4k7puibMzan9KFFzRHJQujEXHVb",
  "key1": "hp4KKZUA9tBGHDeWu6GpuzFDjYhLHqPoDQaZqBo3cTXCTnrq1gjeqNe1bhHCWGN4Ypa78YAqM8j2bZAttvJBgLF",
  "key2": "2q5wYuWqZt6p2bvnGtrpwWJrEz24jb2qENzZCkdRsZdcjJQ3MtmuvMDmpDDbE8qXVx7iTdgosvxx3GFWx3jBQ6ry",
  "key3": "4xwn6kUT4C8iamDeXURYvEfaKgzo6vPLaQk6NZUgGrp9wmqrrKXH8HQ9E5SkQhCXZ24w9WauLCCKqDaBof5F2a3t",
  "key4": "4gvKDQ9vf3rUzftk6kmiJXotKBGJFZLQwpZfQnERxVvye6SNmX8S83jmsZTyVKh4XVxCacPvkZ3Xsfct9n5shLQN",
  "key5": "55TGSGHR32hX81985pJm98EtEqYLH2Q2QXToLamFBzHfp5YjAuCTXr4jAoy91PCFFsqvASBfB9Xw2AKhz7whQiTV",
  "key6": "5EVXmo8qZ5N5X1ZjyrmXQaH648JhNZmeLKtd6k9g542XsrkbmMaym5JBgvaVYVJoYyrG7ZVPVW1a4vuVc2ypCF8p",
  "key7": "2po6HhCpjk355jZCFHF5BCHm2VdmQG15vwhP3BDxzV9VxEnH97wvhHLPCRS7XUFYvnMEk3HUYG3SvZgcVxQbRFPq",
  "key8": "27298GTERSMnykCyPDMk7YPFXkHTLAt63C5s2uyxdo8NLaXnBvEKkMTZ4jNYQBVtEP7mJ3z61Y4qUiEPsK26WgT7",
  "key9": "4ihEAA2nmWD65gZywem2CTyTqJ1cGWVDTR71nQncmRT5jZ6ry2farMY6KrQYPkEebDTPMfGN2ZohcuM4qiMY9TYB",
  "key10": "2mKhLV4fgewYcLxu9kuXsQda34gq9rdo4L4XfKdVYzmnLM1nZhYpivSK2J6oMJnnwGCY59diKjPmbJcq21RHM1C4",
  "key11": "3Y7eVdBvQiAZ5UHZ8imYKcyekEyzH8toFeMmqu6tGTuJkra3dvsHmZEYQwezHvSyH2FVMtYQaQ7dC4uFYXbm8Gx5",
  "key12": "48iHk9y2uNo2jARUvpHCLbueDZ8j1eetPUjYDFeRNYdmPVPatBc4HQKHhncGH1xpoPSqw2THrnHtLDgXj2gGMCYC",
  "key13": "4ygrydx7LoGUrHSR5Din7qBuFUSVDWoMqHMBbiydjRKS4TKAaRMs9b6cV52V7wQAndcMTpuNEATot6zkhcxJtuDC",
  "key14": "2KQ34USNrb5sPxU9B8cxQgG4vcyvj7SyvugXdA6U3ERGQyzgwwHE2PfBVSg5Nr1ujPJvXbjeS3JaqRxxDQHk8JD4",
  "key15": "4NPzSpeYymgRW1HN4rZriXSqH7BpUWjvTfHoNsaaixE3qS3uYVQpxo1ak9ebD9VSP6RDy52knYdLah5GpD5oTrUT",
  "key16": "3tcoso4iFwACQc9JZiFjnUaQaJkXRmEWDgeRpJxTRLTEBWZ5LBu2kU3uq63NCkjacmBpCi5Duwf6GCG39XaA1dqd",
  "key17": "3TrZXXiUJoUZhkNTjvLkKUunkrDp59pgdv6TXLWo45Lua4rvC72aMiAZCt9GmCN5bZnNAyz916uUSqGhZWrgFBzJ",
  "key18": "4Z5NqFnuNqH53euSuA8P8XUwCQp8LDtdYt6Z3DYMDfFHFqj6ukPcAnc85b7RZKAqwjcJqWnzvuLM4tcm4WpDj82",
  "key19": "5fWrwuMz6h7XfKLP9ToEXpT4kUJwpJuhELzVyF1yTfPN2eXkex4xKFAe88y9UtKB51HyKcJ1G9hGcJj7To28xYgN",
  "key20": "2PCUECyKnapF34WaYKcB8zkEbd6vmkHfhMGGiR5D3nio5hbPG9eEcMLkjjwCxEmbJxMCLAMVqRwU1tE3X8Kg1Tzu",
  "key21": "5wAjmCBAkEGvzzKJQDJtVXgH7Up9AjmpLrN7w5dzd7PsDW8VsAgHZn2vKU4jpdjtQVmCQxKDUrFbXpQM3bNDetJo",
  "key22": "2vEeBhiyPq2n6Q7hm3LDmFSAw2CbcinABcq4UdVgbPjqcVJm86gfTyeAKkdqjUmTdLZa4nf5wKHUXQgxk26k9bbb",
  "key23": "4PZVW9RtKMo6VzuceDEeRpifCpT1VNGbQnaRLh3hVV8b1JT5xnvmD3xVVoC6KUchLe3wTPZ9vBnKN7Cm1aCHPS7b",
  "key24": "4hAAkNY1krwZQijPU7tg89qXf3Qx38LmC2HkZUZ5PCevEZHqexeeEbTZvLHggGkNdSYuKEc7mgpNPZyayQdw1m4e",
  "key25": "3GrFqwUPjwzSvVczLJcBdGhEoiYA71kYccAnjbJ4mottrV9Yxj8tPPx7dpuG4FH3tP2bKJmvwakbHizFL1xVYV9e",
  "key26": "4AE4mJ5XpjXt1C2XxVvi7ZxmfqfMEDJH6YNNPNWASefvN6XysYHve8Y4EpgAW45Q3WEDNs3zaSKjkv6VzTNpeejv",
  "key27": "47iXpm4zjSAZGcG8R3ivE2Z9y5DTmk5EGqz9NJcvXMiNqkaJAmUXsxybK5GG6cpVHS8cazXA49hcq2DcXfPR75om",
  "key28": "4tTKKcKa4zVLQZSWVRHCYgfHMXh7iCnhDreuZ385DRvakyTigythRs97uLvxy7f4fKLwTHHTVNUvmcVcP4MURmsN",
  "key29": "5dAi4QDLxTP7zBq4yX8yYUkLu42Vsx2TycFD7vSLKPzzqkR1SWx5pUn6Z3fY7WvJDKpJ8qBwnQpcNaxoFnUAKHgb",
  "key30": "5rznPgxtZjhv1kAUUcdP5nXUgqtpZo6ZSHQZ42V2CYnbo47YUJRUqR7qZ1wzjmSUGbH2L7M5gQxHRZnxuadhbwEB",
  "key31": "3wtpTuBRwEADiBjJtcme71m4ci1jgu11rUFr4v2wu6XC33NKFtFRzHfAWsbuhSTivLFbiQXsZ5hqXiS8uVQvPxHD",
  "key32": "5ENHVrmpG8CCeKcNn8qcG4ck1G2mythHBqamM6CBiWrm4BUgWEHVvMnYqm96GR2sDQu2PoqPfwQES6qXX4XTrcvP"
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
