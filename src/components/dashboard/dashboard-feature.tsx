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
    "56kDvaMFxtMkD3invduQaNAhQjrLAzWYpA8jghhZcyGy5AR68cnq17fHjYKbs4EWgESBuPep83jXLoGbd4ApPjMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xeckikJNDdJPkZBWy8XrkKRkxaf4FrBuPDrmX9tYecHSoGwejdL9qkcE7wwQankc2LELKrJWZsE7r9cCVWuECG8",
  "key1": "5rtch5k1nCUFey8o5X5Nh8rfY7NiMZEbAup2PvAvSqWEKvRRyupkzXk56hRHXz36M1buseAi8PaQVNvDcU6Sbj2",
  "key2": "65SYebaz7kDWUxFY18FwvGZ43sYaWjU6oLicXjBa8ccpe2fmSrpZqp6SgXTunB8WhqZUaD2TAkHa7ox6Z3bY3QV5",
  "key3": "4h3D9ZR1nefmGKZMVMd5CATWhmJ2j2696d8iYQS6SYMgqGacmr3JsFuWWfiv5H9FuSbdTUppW2BPNRy5yFMomXcz",
  "key4": "5peTFpXdecKTkm24eHsDGp9QRKFnvZ5NphJChrDWugZrpr1N9H77pV7KG7a9D5XJfysRjDav3NpMJiAmLvdD4Tej",
  "key5": "4o3A588koUhURyX2sdS7KEKwAMdsiXC7yDZTdnv1ikZvR5eXmhDBoLsD8V82Dszj3ju5bKxV3tbmQi65eaaoSGV7",
  "key6": "2tigk6nt5CGoQrK3Bm5D8PdsVfgTGf3bdhc1UF2MnSHB3HX8Egy4s1spg4LuuXtpNKKFHKnt23poZjtRrkxeX8PA",
  "key7": "SEqZNLk7aW3CLk5oDyuAHUXKLMgeQGB3y643SQMDDgChDxe8pe8Me4QhECidkdEXpnjDSXxi2v7oiiAhCa4M9v9",
  "key8": "4GcZCjQqGJw77YefzhxNBqRhLcnKtyB7zzztzxFRus3RgaNTGKHFdeHYWWt6S7yw4p8AKmarLrWJiFUi8Ge58NP7",
  "key9": "5AKZctcy5J4K6XAdwKbo3wfRfw968dmPMbVsCxPZwWHKZ2NiF5AQzf3EvZX7EvRxkBoBLUHq6ZgzDcp55NnYkvWy",
  "key10": "22eQcjbDyUD2c1ku36xRsSXfbWPfZaNwb8QnugYHvafBFhBGknda4df11Dg2h4GgwrtF1VCCy27PCaANf1qftk7m",
  "key11": "GW86YpNLMPU6iiK1r65N5NJaCD9NskiMyvBPrXs4VCGJbFeZAFDSNdhDdJRnHud8L97NHLKGKACmr6VXzuBvQMf",
  "key12": "32BPtVSvoMaubJHaQkEW48MwtQPgV6wEhckWiA6FAQ2htnqVm2qVUud14gcebmdtdHZu71dGav5Lgd2WSNvDpJuq",
  "key13": "64v3XHxkprfyzDZijMjtePRg6X4WTGzxNT53JViR99YxKRHPpaD3gg6MZEz8QZYVRpdudRLWsNEAaAFoAJ2ABD7L",
  "key14": "42EjG9m99pPiomLeUmYjuHJhR36sGHfd6RPs8hWeZFj9y4ErLzc7YuA559CYrRxVB5fLkM3dHwqTBfMjtGvFDhyg",
  "key15": "2s2yYpkUKTAr3J79dNznGbPCY2V9DA7eFhVh9sHaZ428Hg48e15psVRwV3XipbGWVeRHZNub7aAX4FVxBKH3e42b",
  "key16": "2F7kbqBbi99do1e7NZbUGaRnZP2P5TPCSVRgjk8AWjgnBQyfLk51KFcvNtY12RUAXrJD1xBZjwJvmY1E4QRsx1mB",
  "key17": "RPVsbv8Ag65JNN72MvY6yFkXh4eBnA61pCmZQQ2QJBZstn7qbfKduC5DJgY3oWCH9dRhwQf7aBUWyYqD6ortoNX",
  "key18": "5q4pCC22fznfKYy7ejd5NPfa8LsG6mtX2wNm19eUkj5KZ5GSFRtovZNaLsAskfkue5bxaqJdfJ1MLPtNqx38X5d",
  "key19": "UFDbPC3h6jSmsZekzVeEX4DqwVSxvbcCc8vN2cCownYzmre2oWDrq2a5wwff1yHRdFtnQARocQzufbiVpr1TFiw",
  "key20": "zUtnJP7NXhhMysWFpznMZBmyJFmTam5T98dJLjvX4tQygWYFDCPgeTULRpgubKua27dFxZr5SJV7KLyDFbX6g7f",
  "key21": "2YNfuosx46MAyFXm4EhjuFpYWCTVqg4YRMMmYk4zk51q4Mqvh4B5amknM1UNe6vt1VH5ptu2gjirgeoW4vovq7Na",
  "key22": "4EWreLnhREUGZcJfynB6dHKDqVZZRoPPkiDDrxuM9E18GLLf4eXGaT6coYAvdf1JGBckRzZFRhmjqgmh1krLrm9t",
  "key23": "3wijxbwomHgkSicFWFQLRJzGwNpuqNQqyAdrYQCVC8J3VbePa3N3RWY3orxmtuVhGR9YAPSrdLSes9jaZeuyj49J",
  "key24": "67Pg45M6h5brmJakugQW7YF2TYfJSPiocQ3787DNps8h7PmNAS2iMdCXpAPdM69kxKVMs1DxrxYRf8goZPPiTpSm"
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
