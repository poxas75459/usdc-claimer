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
    "3pTbs2Vix3oqsqYRhvcJ2SyphjEz5s6EkqonGR4ckjCQpVp9sfDqSvMgh71N7RRjq75EoFPW2EFMhtihftbz1eiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7UaHMnvTLcDWVa9WYD3YrzWzVgAjahEyEtMeGVHDTd6GYADEeayrQVQ3tFJCQ9YWNo9QENQ5UafhtHAzySzd7v",
  "key1": "3FFFrnJXTMF1wa9XDGr5aCYW5vsQqp2KuMUN4nhmxdEgjtyyP4bRQxCaGP2HZoxynLERcQQNisbAt2rdfWMhY7Pq",
  "key2": "59vQ9Jtir5KthXi92JtcXJoKaTJWoMVzPjQwgsFdznjgU2BMEVFD2JxFSzfchExgEaRkKb9ojPcK5VRyhsyfyrjb",
  "key3": "3fwiGbFusNYbUHXkfCBmifQkFFejjFXqroYaypt9thR1LpRbyKUrvdnWYjjKp5WdisPaPjrPnW5SGubiDEqPUgcn",
  "key4": "5mxFmWXXpFVsKu5ELAaeQQe9zLi4trybMrRCGDCQ8ueDMGc1D8GLB7jTs9Mh6s8vEw9qTAnsqBgQe2NXEDdoHzih",
  "key5": "3T1MbYYp9AJKQhoHJsZdU3xcF1jE1SfNYrXhd1EgrWAfByG8sqbTDDK5Ahq6MMTjoKf7gmx9H4J84FbUtP7dgZoW",
  "key6": "ayVmRMf2caAzXp5Er5LEzugTEH9jahdtvDKcKevbvW4v5awDEM6iKJAEuvJyMbm9vAUGxBQYmFT4MKJXB16uzPP",
  "key7": "2xUw9Zu5VB8gEMKwKZJEZbo7g4zpN4Su9SW6z9chYQfLSivGJ4pfmNZmyQdRZb6Y4xxc72SCXp4FVfno6JtAQA8N",
  "key8": "3pJT7W7QVv9kPygNgSa5xvsoVGquJ5rKuuimBTGtatnixwbWFaMN5K7ZhfeacVR2Xj6YgGbNwChVdfxwpNP9UFgB",
  "key9": "8GLW7ToZD6ZRapLMUnzjiMNDaVv8G8ypMcgGJdKeTcqJx4MRGC78YWhHeppQVfqj6HbmFPBPC296oMTt6Q8Ystf",
  "key10": "5VYF8jV8aLSLwVsMxc4jHrdLYgtJzLou9ENfabovzipt4BjReTvSwyXUH1LLA9w4ZwcA67mMQqfVwPPgA2aAhVvf",
  "key11": "2nvKDPwx1kaiFZf6wq2VLrvvRfDwmjeaRnaQUS1U4j9j2u8tp8HA5zQwWJppCmtv33A4YNpH11mkoWaG3NbxC3TU",
  "key12": "21wX3A2aArHTPvfFbm2wy8MBqBjMbndYZ38w8VnZZRxbFMMpHX7hi1Ym3gxybyjQqgRc7DqDF8v9qGTSrnMbYGjt",
  "key13": "3rUJ4qa13syCtLQavKeXReUhqasWHhkdE7fwrKRNE1LCx5xacwxR54EqKmEUiz4bfZf4wEo2zUGh7ejhyoQXUswM",
  "key14": "5Rfybf8btp6Kj6hcUYkLDEK2rYqLuVfuc8gSUjuRPJD7MgT22NJs17xrwdAxSd5KSfJhXcHDUYVxFudhLqvT9NqA",
  "key15": "1VJppdiqCgHEdwKmstDskqMysqNu7vR3PgfLnS2XzCmf7JSM4Re4JLwHqL6sbVpi76XuyGw9L1VjHuYLiSGoaEj",
  "key16": "5rZJGjxbJdokirtYR57k8F6aZRAGmZZZdJhYSFNYaiHX4jargnpjMEqZ4UBxJc5CFt7LvMh67LbyxaG68mrZCkES",
  "key17": "3W63qCT9cFKPYK1sQ2vWFnWwPp4uTSf8w3VdGnUWZ4XRUiEk8NBcEuF124tu7GRWAQUqmDA9oj6iwuPPnGBKXqC4",
  "key18": "2YJ4V4dxuSkMKT2zZL5qSjhT1xS1RaRQ8BShUa4ubYvYqyYQvJx9SZbZFu96hA2FsQhGGq4oyiTTEa8BDdzuATYj",
  "key19": "26RaNSAajeeYRy2ZtNgYkj4FRX5XRfsJFThLABLA5jzTCGeizs2Lxbbv2XS4y5VoGRg3RTgzAeQUt6E7r1NNWLZZ",
  "key20": "5XWgbcetqq7bBpzMacWMoxSVQjNdCrRYZBmJN6wB1mCKjm4j4qo5mEgJ9EhZP2BRRsC54LVs5M9oxMG6XqPkcqBP",
  "key21": "5w6FSpL6XV8KPqQk8KYjgtLNTR7dgcdeNmgB2ZnLxykt3Pufpbw4ySgWJJgDfNa6DfLEGjRQ9cxAGSZZ3nroSpSA",
  "key22": "3DUAu7PG9hHdj9knaDBeAg1tscSrESrWyAw76zG3FPTXLMeNjgP4J8HKGNXsbUhMhRcNbU6dFPb8oHju9GLTXVPu",
  "key23": "3D56FTyZKFxZUiLi3HefGhoj4HDoSeeGEiEKyHMaKUoEZyuVPfmwy5jSdcpwognURXjVRXqTCc3f7rxCgdnbbQ2r",
  "key24": "4fn85iQziyuA4o1ihwM2qoWqJfYocsLCn1RP87r7QpuBFCwY4B4ZZKffr4tuMEbfscrE1RgCkRoa7e3wuFKr72DY",
  "key25": "62Q6jS4fXte4vUrR4C3mdC9Hr7hCksJeJSnFypSM7npEZBFDtBFrAq68b1VnirUiMnqA3z19QkWSv65Ae9QRuU5V",
  "key26": "4MQjFGxD2nXhapfeB6vvYikEV9EMfbygm3fZ2cCR1MPhpANUuoTwthDAHam8nB7BXmMVBKicnmgwkwre2wxYmt7b"
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
