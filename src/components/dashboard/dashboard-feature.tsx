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
    "3BZSCVKyuXPaHpTRCrKwdDrFEge1RtDMwFe5jUNN7Gu3jeCeuRkLuv7ZStqDNqfJogBVDjqT7ky4betDEcgLK1Xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GKfS9fJo13CAWJrs9Z7ChDFLaB6UvDFg2U4qX5SLqxv529PHT6HYLhpSv76g9Y6gyTDvT8sgxN4XNPPhb3e4iE6",
  "key1": "2Q1aqUekvC7Exim5Y9FLaaeDg2yuLM7Y1UBH4GiQXT5WRb5EHyeJM7dDWiCDwVjN4iCdhBuWXfqneZfhq9qov8Xq",
  "key2": "2NWMMP7DTUgHdNCLbgS7qrKnR4dz2dTHuSCwtYom7McJ65wd4srVpALbeQA6BT7V4q75VzSLovhmXNM7kQ2CaWum",
  "key3": "287g9K16pbbJQBrMz4vJZtHWuWhA1JHF6N81GqPxaQuiq1c7MC4j7P2foe55BuoNG5XJVp1zF1j714GQgsRjEUsW",
  "key4": "5c9Qi4XGbGvd8LNgRNqZXi1AUPrqjmA9np2yTLPiz5GLzSJaubBX43qMZwxxJ6nngAj2pVZ6UpDQPZgr3aJDFVjQ",
  "key5": "5DMC3H3AhB1VuuKMcLHfDmKc2jmF5w1ryPWjpmfWPrcy6txHa9zAHvSZGGRAXxVfnWXNgcLqszJmDmGefDHiyS2Z",
  "key6": "4HBYgY49sbeAQyyAp9JKPLRbnVVe1Us3yHMEenGk7HDg8cJtvRvh6NxhSTsdKY8XQFVswm7MYji3anr7tptXx5b3",
  "key7": "3bN9owsV82HjUNH5K5JKNxrMU4A6SwXSHcUKvfNX29tEbLsC4eeotkqhVD1WnDJr4DPrzmyAE3LYEN7oTWVJUpNJ",
  "key8": "3j8bbgbjkWfm9RubrAsf3zqmnzHspdzQHCPpbPnYcfX9LTm8HTQ3Zm64GXEVc9Ns68NYHh3PxHteZJQzLAyLr24T",
  "key9": "2fCMc8EfpQevYDQU3AcZbGcqs2ma5KFvh1r3keEv8j2LXLFi2Jb8Vs6wRBp8VDT6Vre8rFDv1BrcCLSCZUXRbk8G",
  "key10": "t7nrgm22TFedzftC6hqcyv8FLXm28oKAcr87XyPUpqDVyHZ9D6AkfMzLajD2qmqkMCiCCmQVXVAcDWJwn92Ysvo",
  "key11": "33Jc9LE73jNmAhhiq2QWUAqxfiGcumFXMHMLrahYKaQ3ZujXpj2Wbb5Z5dqMoKLFf2C32FGAjTvchrSpwQwTx8UM",
  "key12": "2FqhLUUatm1B3BjCBRUGALxQYXKah4GFddRPh6wHiSZ784gQNGR8FpzMhCvxQhwUyohNrJurx59aSqbu1m9NjaeA",
  "key13": "3Jf8tmPV1jhv46bEDiVBJKZoo2w2Aq9rvxRdrWHsPLBLcjnrEP1Xwxb5jLvQDsUH3VvibfYwbErNdVgDs9fK4C2C",
  "key14": "5TaXLYGaroo5rCFuadrVfYL1qcsaPrf5ccKdHvnHJV5WQYGv3gwUhmgPWQPiePcFeehgAwxybrmarUMk6LnV4EUC",
  "key15": "25GcHju2fLCFm84bGUJoA6Qp26MfbHMXbc6dUhiMCzdCmxopeTC1Y1Fex4QXtRmiEx63doTUzRMEnW7X3mnRntx3",
  "key16": "5FHxcLeVUbFp7AXDnbvDABb6H9CEqTL274aLse45xSw58cPLtoxVmySbkdTpgjXbxC2SFDiuZc1Y1WTriCZgwedd",
  "key17": "2K6Ze3htjZTaBZjZyQhKzhcELfYaZnbM1pHFX9Duf8QvGY3mqo6BwmpAg3tZfoxNcAZGhDnHgkqCJ4onMQoLUGcb",
  "key18": "23bJ2sEym1UyiTs1m8rg7yZpRMhZaXHrkX5KLLTvZkmyQzCxgckkcJtxpPZcfGuAdGesJv6fcjDzz8FchDBNYAd8",
  "key19": "4SpsFUyS9Awm8kn7XK5YuWTmZqgMK1Nhz4Z3CehM6Usi4DRWeKSaxnwk2PtQDv7hFopbXgipHqBGPfCK4UwknuFb",
  "key20": "z53josjCTdKTH2og4KXs9BQrXGQ3kVco3DWVdtVPY4kpjhpZqr9MDWdqCQ932CPm3BLdT9dW3FgQCgLWSR38jtP",
  "key21": "4U1namPDgGcGw6MKSYTyeF9ucv7otjhRvZwVCnP5PKtS1fPqdC88GGfdwYiqbZWMJSoNFdCVpU4G14hNXQUr5dwr",
  "key22": "4AuUsUDTPUed1mYK73vDKGvZmjXmckbzNerWXHdC5K7bxu4JLzwHSCLBuDK9QdF1ueQ3DybUJ8wdN19qdpeyw5rZ",
  "key23": "2sgLt9LQM6cvn6929nm7ZQafcjxag9EQCj9HYyquv2e3EXDwuKcV8hFXofYG9baCHHeSy7xNZ9RFVNsWY31d5goy",
  "key24": "Zf6LnqSQy43eiQrNSH8njPigdLc2aEYTnru9hpuz9qG94PkLUh2KiaM642DPNbD1skr2bA9HcmPD3bweHQhzd6S",
  "key25": "4D4jP85tfW3zShm9332D23uRw2aMXZ4Y8VzJk38nTDoXQ51bZT6PvGci2ShTHmsdtYzu5wEkqjRM9VHdsCbEw4Hx",
  "key26": "vAetYkoWKuQQracoaAsJK4jrLd4P2Sicz6WKDdArj6pVFzvrQdbyzCL7Q8GMDHQ2uEaNC8X6swjB7QBsDiW1UaA",
  "key27": "3FGcVqeoGDYiHk38Z549t3R75a5xjz5rWiX5RNooCpRtWRe22wW8WgnZdxwKpknEUDrA79NTqytoGUFbuQiCm7oD",
  "key28": "2vj1rVNERk11t2FDscKkk2DZFAEvhMRAbj812nqarmbBaEF6zEcsp85eL3kzZLQf3r2GyZBYC5nHy7k9UMiMrxXr",
  "key29": "yAtZtVqw4SnaVWgewBPUwejG5KxLSwVGqrvWj9GDpvR4vsKDoeMffAD8b8wArLVYBSbQB4G5PXAJrzQmBfYg5hJ",
  "key30": "4opZqduFxrdWKNhKLUg2APRq3AaijJAkb3XwDraZi7xHboaxpd8CHxpi4UhWP7tfSKmmHzMK6iBWfj3Qnritv1Uz",
  "key31": "4g8vWMg5ugtqnhU2kMinbuJjPfu1RvvupCqXxhKUdgisJRXqQ4o6MUuXxy1hwttFf3jKRgePNoaF3oaEBqNoreQ8",
  "key32": "573YzD4Ro12j8CryraTXihNagNSj7N9xGVbGWidNwV8e1KqX9jjS2DBhdNMNBkD16DBXHBqDmuA2AXzKGuVhDFLs",
  "key33": "2bkWtkCtDpcozhu84Esch2a4RwEZEf7V6DAMJfuQfUh56nyPAwCYtMmzEfcBiQLZCaA1yZfMdCe4uzGAHLCzqjYR",
  "key34": "5Coi3WQgpavhHM4uQfj5K5tN5xHU6Qbjr1WdrM1vSEp6KK9fBNXivDMmksUUgt4N77kSz55kpsNKVNxvKrhvuRW5",
  "key35": "SNkxS2ahbTnK7X9r2cKhKAEmoKJkYae1jw1PWdLN7G4ZRyXKCkqaBbdwJjtuY3XGjajT5zDs7Qo7L1sGWLxNBwA",
  "key36": "3gbUGpmxkCXKia6E77iJQjnwUQvuDHdDegm2HRZFmN3vFbjtN3vG5YPDCxqro9cNUbV7kJf1cRGkrJMvUW9d511X"
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
