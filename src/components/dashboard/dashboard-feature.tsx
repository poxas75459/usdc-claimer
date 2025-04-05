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
    "1a7WQqzmthCWDXe4eN7qXmkqkBVMHawTaWLemQqvmfqy6RXyVn8gSEtcEZxAYAr3augCydYopyr9Xjt3txYnx84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vfyu1zDreJhbWnqXzigLncA9zTBJeDYp5oXPK8WukUSWexXSrSGDao5TkLrMKuXqa5sTUidQiZygxJKgepV2Q4k",
  "key1": "3VG8nbnETbsyqN8kzG7GqF3y5FFZm53qnD8MU2Sjai9YDBNWyDobvaS34YJiukP8268XkGXeypyk84MQm4qgyviv",
  "key2": "2MrrAEjRZN5APmRfhEczZrKcoS9RWHnaQoq3WrXZ3KAUGFnNBV2j7W8v4R1kRSAiUd24BdVPnapDhJcddxUPQ3Tw",
  "key3": "4zGLNLewU2uD1J2C26MurfCyvZf6f3vsaLQA8i6x3TRUG8dDGqccmjMJNFyjtvEvv8Jn7FFyiHPKCzYWcxn6h8QH",
  "key4": "59qoUVdN6zd7qiM9HosJ38HYNvBTKVphQcH2XSiM69ytc2HSFs1QTYTuDhNJekqSVwhStZcq2sBToErVeRkEJMcz",
  "key5": "4JDYs333ZeLcbHnB1dtq3DjDzcJqKs1AjFLMBhmrBCKVNA1n4oQuX9Qr2Ac6dWKN1x54XhNS1RoaB1GG8TwWq5Sb",
  "key6": "2Tb2zZxQYGCKPFvnAc7Jk7SFnR9K1W1PrMfeHwQ8owijMt5YRDpKzU1Ff874YQSaBrGTFdRtdYChM2EbsuKV2NPB",
  "key7": "4SGbcF24ouYsh58wApgqoeEyyVdr55Dpka9gXiDq52QazVAuUX4a3UCKzQLyRnTczcVrk6kcTM3pLaaBVFRN3mMU",
  "key8": "5MdB6Z36Mb1rUzDBrwNrmL2VLcKtb5v3Mfb2yGd2xutTiWRak6gSQtA1HaLZW6F4PXaKDoe28rA8kxczrAfuWVkD",
  "key9": "1jQN3hkJJkHG58MXtqnV9rRWi4oNTYiAQpyNFq65Upd63CAu4Ch4Bhi5HDybhEtkaE15CUn2yaZM7N2dnoFzYk1",
  "key10": "QyaPJR4fph48uR1vdgEBBGJZA1KqMiLRZ6i5Xwh7HkzePuiUPWTH4E3etyBGDSEhFKkf6cE8dDJtiNZ7cANJz3X",
  "key11": "EkuX6YPkZN4MJsuhGY2Jz6LLgBVspg81RCgh8rYQ7DEohdPWJL1cvjocJ7iy8Ero4dtJViraAKgcjKN9rbikgFn",
  "key12": "4Lcon38j9ygwRQzmzBjXDgoDXA6yiUNZr3LL39ZuPermZ1Vx3CYxLHJKdDN8CGXcfFaSTY57yyeEtjf8sxY2Vnmc",
  "key13": "5vJ9JEfU89U1U1rDjVRnBUZqy1goiaLiLzXwQ4PRtRwHN8gMPP5sHYBwZEhZZnCT2NNeeBmvqXnDY4Vy38kr1dqa",
  "key14": "2Hbo5jyvCN5kB7StdYLFQM5XXWkYZiGHpVFt6wGoDdNj4S1ZV23CEtGTpryKCve8Qx7uy2VUvExDkLLfetqh4f6Y",
  "key15": "wmZT1xpBuUiE1S6YCoE53zckTZYcy6SUJ6tqGqYVSqRb9nei6QSPzPo43KFb5WnTjZc9KT5HUskC2Rr2GEVQgKD",
  "key16": "2k9qPUNvyqtmW46eoJzFT1vKAU52ob9ZcbP77VJWmSWG3fww36UNRgsr8kFRmkNoo9EHyzHHb7yzCpJeJZR76SbC",
  "key17": "42CLJYqZKzzy5twSbJ5gKWxJiH4UmD8E1vTUV1P3PbC63AuA99Es2wcNaW2jwvzWYsLdsY4roqDKdzQECs1xDrZf",
  "key18": "4DMfrFMu4VwfKVxPsL6vqpPu25GJfwuf12RKiPFbVfVCa2uXv9kzEUNzveXbbFTkSkpUX2cHMrNUmd2gtUzCwn78",
  "key19": "4mcmZHaDH7icXNYxpgLHfBMXXLFHMrksCUwyEL5FW8CXujgL4k2MDcwGkKUVEmXfWD6fEUx5i3CDRzUZVKuutktd",
  "key20": "2GJyTJZ2wcX3882kSK6U6zQ7wXafkqAJUaeqqREBuPvSSRRpGRSTvvFcKAVsrnS8468b8phNa3TH933DywJjEBof",
  "key21": "2Y9YzZfDHxpBsECdsAjra2FEEdN7tKNdUtLWzWmghL6VH5PqKMxw1fJFwFFwFrwDHSTNDQSLLJtwWJDKSfvfHb98",
  "key22": "618HLDXXGWXgabdHEQBrxfYL8r4887AEjPaRFijgPsLqRdBNDnt8PtD947n5K6nuZHk8oob6HK3mdgGEupsiSHT3",
  "key23": "4YAATVzuoYpSwGSk6odd4boBNYMFvK8eNuoSkHbK7VLgmubAzxbqQxgM4WMbiM6F7QaDkmaE7qQ2JErCAwBjzgq7",
  "key24": "5AUjtGc7oCT5PPUvdt2j1B52VjE9Qoa5p5yXFS4CgCX1dan2txszt3g1pamPEmu4jPVEyPcYA28FHPoSWiiQmUJW",
  "key25": "65xjRfBiLDZimyK5QE16XCbYQNDRTrdqQgCG7UR1aSCB2C5C1VEdMxYrs5nkvX4wySXdywdyiEECxeo2ugb5s1Z6",
  "key26": "641zLjM1gT5wB8vTQTaHYXJ7XCypWXJcqhZpVq84PyzMF6xK2vkPASk7rcw1upnK2fgT8XeCXcUmudUG5psQeUeg",
  "key27": "4HZodDjNiXa8ZBBMbC6M11oJn3t3nMCCyxvqtyS7hKXhXWU3RHGsVuMLTGzweVsK3xiSaLnXULaUFwdh9GgVdPoA"
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
