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
    "51qT1h7WuxTngtN8zPqRgUFsUvqGahNRR6tpc9Kqa9SkQNLReRs1Nr5vaN8BQpUTPbis4oQsU1HfiJUWrYzpq9tn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VH4fcqNt6DVu1aP9pzM92xKkx2hoR6YyPLZDtstrZPTDVWSUAnjLpkXcvc8sdp59kcSn2Bixj3LQxQY8Yamqa1",
  "key1": "2FmX9Ur7GzCpwzauhbN1RZLQRCWCiAAbMZLhhmrtcck46uYnmyhjWJ7TeY9tP3AVRs33P7Gb9n28BLVqfTssoUas",
  "key2": "28hPGvVzF5mFvctCKj6qyFU1JycHUjdpQGma3BHPZW3v3RYHuaN6pq368ywAUr3Z3Mo1XxJafdezgQn19aXTzbuG",
  "key3": "XGCfFV22EFNzinKR4VeRj63rwEiEAX4HMfSSGny4EF8JaL1s2BrQHq7k2Po24pUog6G3iRpVogCmmNLoQ2rWaE4",
  "key4": "3nRxVzAAzQqv3w8GQjwhPF1iGpYyMPecPjjU1bNeuoxBk7myXvPkogiAuBfvSBCa6pF3XtZXmy3NnW5XQPCdr9j1",
  "key5": "4hAiuUvxGN4FmJP3SRCMTahdf2rcaF9CYuQt2K5Aq2Ftm5UhgKUUpyGW6YGtz4wSsE85YAkkfQtsAHU3kxB2xXDz",
  "key6": "53qvyUhBzSXxufgk5jZBiTeMKcL5UoJwUG7VdbSgJVg2RfnAWiNJBY6MfbcEhddFa9Y8AnxuPgTR8TrGXRP4SCTJ",
  "key7": "3qTJM3CMbCrL5rB4eemss1HZCEKN9eoLmBgqbPecH2HHZGV8NFpWk6f5rRW4QeDT1hkqdikJ1Nz3YXGtwJqF1M16",
  "key8": "5Afdjo5W1tnsuvk8Kt8VsuvR9LeWP728EPdZXCGfRHuKduDMTXeaxZmA96kcUMSDD24KE4aoKY4LvKxV3ShXKdGV",
  "key9": "48WsdkmsjhnZkiz9p3TrSc8csCHm2Q94VD4gmqU2sEuTK5kGw3PnqftjF9RnyaJgAedQvpUGA9Xeare1Zi8rkrc3",
  "key10": "4B7EzBJTLJZodpBpXruorP2sCV2D3a6GECM9wQEKZgSvFd4RjD8GYGngDokK7CXmD21ZZJTX9Ux31LLsYKJ1vHtm",
  "key11": "5nup6PqQk8hETxJW5Cb55k8PkNwgJUYL2aw4bTzsEJfkvH7crvHDRboc7VP4PL91JR3GhDk15NP9d5izzcrfzbdr",
  "key12": "zUz2ZVQnzT47LoXMmXhJrLXWUDg6Kv3E1eDqYYQiQsUGM8wLhyvEHqoNdVsvMEMcczJSnkZi6oysrSMF5LnjCHL",
  "key13": "46uVcuEDXVxoC8WhbTYsr4mLjoaqXZkEoDiiMLaN5Kv2To7Lz4wBgz7PsZcK4dQrGJobiFEtNnr98B8V9FmzeEpQ",
  "key14": "wm5HJ1n5rDWG9D8bi2YWFcZEzVvWhLPPc6mJSmQohwoCUAmZ4taQ28gGFTdisTH5zh3usHKiUbpWD88FZgEZTD6",
  "key15": "4osXMjCV2YqYhMz3xesDd7DULVkR2RFK9zS2iMLJi7okNZC5To8GqDftjw7iU8ZACYu2tGjzAFcHfhQ44PgGQMuA",
  "key16": "3pqRcw3C5Xy84ipcwK6Py7mnCUrQHwjSPMELLWZ5iKgHFdPuXkLtkBGA6SRNZonVun2WNFTw4XZFvQjH4zjt373E",
  "key17": "2zR2najh866c7Rm4aLubn8ZRordJLrg9NopBPT2htSBSe4HgqoLCZ8qRpieaikbY2EgYB1ikUMC1itnujFiLWZE2",
  "key18": "3Evkf8jQmmNuFG7yme6Jg6SUsSFPphmeUZjx6cEwSqc55ydYLg6dh9KEZoQH97WdejF1BH3sBB2h7d2MAUSbXD9Y",
  "key19": "5tfg44et1DLeykrXS3vGQ3YRewS55b5jXzgqZsa3JfavpAJGDFZ4xehDoj69TNR9MoaeXaFWK6d5b2CpBaErvjdE",
  "key20": "4BSkf5GH97CHsUpDzc23hMfLo2MfnoGVLgqd5nc6hzefuzN96WaUdgknxNszDnwAZrpmUcV9GqYjjBiC49RGCYLP",
  "key21": "3EYiigqS3fUBiWestLLDmRR6hewpMBYoPS5VxupuWEhxXc7W1iBAEx919CifKArAPtEBnbXbFBdJw9jB2trfaFHb",
  "key22": "2JJWVdmPS1wtPJDTvNPJydUJi4CUEKBg1TcwVKBMbLiu4ZkWsWfp1U3MVXT2u8u38XgMinfp3acX8V25KZa6SNBF",
  "key23": "3DMgAc5cpidhGrj3jU7wLW3EFTBma94ZPp4bzerDyvC2hjDrELn5jWG1sB1Agww7wFd1mnjJWQUDq46KCZNv5RFD",
  "key24": "4zW1embVhykzPUcy8LiEBAbbvATpLRXBa6kQfVxhCPKoGfRRmAuGPZC5Q3n2NKZDtxBQqKnsFUL9jux9goweeNC8"
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
