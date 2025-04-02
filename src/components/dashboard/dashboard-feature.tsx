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
    "mxKwt9W9EZQhBZVuLcHXVVCCXYQcw6PhX94CKErXmXTtCP9zQa359NALQqiaKGCfSQ2BwdwNjNYHJKoiba7fGv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUGsHZhw6e4vQ6FBTaPUJHT8CXB61YDuK8gLUmMaGtDkFQdgym8XpUapzw2hfFV6vmnFJWvEqBmGuGLGJgrznUN",
  "key1": "4KD7kc6X7KMSCCDHkPjSjo48h3ExfoFZeGpEjbsPdCEZdNimoWP93Fm6mdhbA3B5jeAVapWg4RYvtNk5vYNkLJLW",
  "key2": "3ftfyGrMztuMjD1YnyZ29g28ai6gHygFWvPJYmYYB4iKnLJSiVycjVuxoaHTG8J2DCsYGmgpvZ8kBBTjz5VfskLz",
  "key3": "64uoUyqpePYs64dAgwAiJjAkhEhV1VGZsMf4vPq9V8pgwun7nnAMPpNSMYfqfL44SYMs4MFLCUgMBbqCsZUyHrCa",
  "key4": "n7ZytDPvpVJf5wfxmVmo7WoC8WoTsMxjYn3gXYG981y2VQNagzxi19V6BbdEMyGMynxPnQiJ4YumUeRxPjnXbVJ",
  "key5": "3bimAw8NSxcK1La3G1bPJkzDtJU4HKAurtQRFYdFLrGoibXrd8zpzmUNK3QKfNXrUZ8pCH4UQDavDUZ8vuW5gvMx",
  "key6": "3fAA3PV24jKG27rSfq1SyNF6e3XRay4uRWBrVNteEGrA6TBuMQNGyhNa4PCxzEES1hhVi3j59U9h42SshbizjbSq",
  "key7": "3hyJZatRaBMxPkfzBj9TankTq7nz3nzfuG8RLkaBgpgQQBp7h34yPuEwxm1N1qmnn9SktUmwgS9Tkih8qdoYTQs8",
  "key8": "3MXPZ9U38z7oQpznY741x6CpeazpCLmVEDtb2o3RLuBGaDPEiTq1ko5sTP1yam6aQwh5XF26RTK741t8wJj7JRQy",
  "key9": "2L2Gy6GyCLt18JTy4yJNvXZsyxkoHy52haGwFm5Pc8QUGudAiQVyKg6hS8qu8S6oxmLN5WdN86jNHQm8GKtzuEJA",
  "key10": "34MMAL7qw26TeinEifjZJbtmpDtcASyzQZRPJBaULdhp5K4FkDHreo8hZkLdJTHedRt1AV1WzVdkRNjJsJtE1bEc",
  "key11": "4aQ6mAutJXYXRZwY4TA7jYK92tpSdktGcMntPgKGJQ37sLvXYxW7aXCyMDWB9ptzm57mhfJHcJ9FXSMy1EDuDzUb",
  "key12": "2VpS5gLnhxLmAvkexXsxX33LtcAmPLDc3NJX2xVA5kURyasEpAerEQ4LK6C7oa5nshrRBLuZvyE8RqZasAZ5kKRT",
  "key13": "62FXVwH79tVKxtj2vUzeasowtYRi7ApZbun9wuE5EkUZuXc8z4Pznec6D7JuBbmtv3bfG9C2FonGLsAZpFjbW6Mq",
  "key14": "5iuvLXzUxaEGjXs5j1JPuHzvTvAkWq3A8GLUz9CVh8xZ1cbUAvVRKia3epw7rpYJEQHNx4xBTd4Nej4jXHpPKMCe",
  "key15": "5HhXeihcgb6Q6zoLENHJ83XBpbYWwGu89yEsbXWKKVVCwHuZ44b2wz1y8HUK6uTUaME6FwCZ5JMnfQCrs4xUgs2t",
  "key16": "61Nn7PMuqyrppTXaD7sBuuZ2VANHJ3G5bbyZCzMyKvs6miqRBy5EaHGPNEnoipRuYfMrj9zda5qS5wZV7iRGS7T9",
  "key17": "2fheEtop9dubhUbi3PkzLwQiMrV5cBDMVxTBw8cXKRMceL4FTyjaqw1nf7n2nuvLDFvEcEMRhrx1ycyfpzFhozLi",
  "key18": "613RPG8kAsY2DLihDdFKLGhqQpzJgtebtbeZRVkL5s5zgef92th5fEzVLMXQJmPfZLkowDHgPd7oiS6XTKDSMpJH",
  "key19": "37tFWrwo9jd1B3HdY69Rd1B24Q8M5jg7EgFjJb54kgXK1fxqQWQsxf9kLEZQXLZZBfcu584WsLnZpTbmyyPNdrnt",
  "key20": "4fsDzCAESUPKGUaFEYuPq4GvAUz3ir6cWKtqFCvCor9Y9te4gaWH4JHgXT6kCopiR65ERsDwNdU5Bi9i3V5R3pEe",
  "key21": "44gexrez8BuexG25BXadzPseoQ63i7N1C4SjYkdq4ZgkfBn4QTq3yywjpNekw12jk4nnh9XjWpFY1rph3tW9r43b",
  "key22": "5Fh9mzT7H1if8nqwZdifbcSakE6SoKHsV9c4aaFdpdY5VTJr49hdkMTzqCMKUSo9guaQKQdxPUwhWAk7ivMb5nve",
  "key23": "5pQRVC8ebbBm2UqPSVjdc4wcBkeiLL7L3T3UAEqtLjaRxFG2UxFzJbYkzac1pftWouHe1QbGNvUNntJ5RK9NoAyB",
  "key24": "4cR92XRLXjdVBWCiS9Zf2sJvh1Mp5GW34XhxYhRpnpCEtTdGkL1JZWEGP7dJcW8hrLCvK2eNbThrrbDXRQU4x1qy",
  "key25": "4fansnSJRCUM7JSG82dh6pwajTD5X8wLxn6KruVfjmWAPRos78hch7uRuz1aihnmw5eLSPc5YnSzugSPE4TfrknV",
  "key26": "3aE7HtrND5yNAyfqss142CzTMQkFxd2sApCsqx3ew1XVFLXSupuh2SDJNuuGGa31t5gTtN1Mv1fV5H5yZqgEzrmb"
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
