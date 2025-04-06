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
    "32KqiQqajvuNhUWqaqjVnZXqXkuuu7EB9QS54YpkR3YK4HL1nHtJUTua29h3nDcLRHeZgfLYos1bhnygULEoCW2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wCBQ6n6dUFJjH5A7bTR8dGiiWpc11q5GYqZfc1LGWP75EqEcY3C3dV5gi4M1D519YAQ7d7AS4a1U81oZwUeJtEX",
  "key1": "3yaWXma8NWxm5nJXepr61Qrmd72adEuLrm6gvNzj7wHpYUJSSftf5vTEHXaXZtcNfsmFo63odydmyvwJtWHTnt7j",
  "key2": "2PsjdrKHHyybVy9giLfTjarM7UWzR6VoWuhZDv1gK3VY8hQxvsuF1CxXmMVBUcNRk5mBCqQhgkMFRC4MDqYstmRx",
  "key3": "3hX2EVM5BnMD8h1YTc7dUBohBcDet9F9ifwDZg4P6nkd4b8dMy5oiZTckBckCVbXJnfgfM5vAnYga9FeAZrdTdZF",
  "key4": "2RW8drycbTSdEUbWgwUmpeczP5jPST7MAwa5M63pWEaQpR3gafqDnxbBYcLiKZxkrUNH9AxoWFfbVjfzTfF74kXV",
  "key5": "TXKQqmcerzayxJogH1KrB2W58soSwB5ZnvhPQoGKXbKEDucUowUFzbLcCekVF8GPsjM4NZWBtMKGrmoXeXw6AaJ",
  "key6": "61eQVUQJqygCHgMtYs3rZYpWLuZ8nFAMf8cm1H9PPPJiYytPDxr3APCNEMuvVABqrALh5EhGKpj9L5youLmkrmJP",
  "key7": "4cTPEJewJpeMKCgEqYnSvd7qPHneB6NKGRfRetEM8wR7JNWfRvJmyE4x8Zh9Q1gPon9hhmTTAYXHiZ8gbrhdd5Sa",
  "key8": "47DSvi23iZx6GypEvtWF52rZrtUty1Ark19xRRLY5nkXZXJ9YXs4uyciabjTRpb6MxxAcs75zjE9EVvjeyhV6ko",
  "key9": "5rDQ4Wk9qs3brTjpQ1hfBRbCpEWn45kZVTfjUZgNqRPTx2iWzNzTm6yXkJbeEc6UzXsisnwvENDuH3G4bDKca8Ea",
  "key10": "2tJLoJdFEUZ12L7UUrkUZqGizEETmVAEuG7X7qz8QYe49PUEDpE9uYdYh6NGPAfYZgCb4LyX3hoUAAxfwiH3oVx9",
  "key11": "4jrSk3dJshcMCQei81WBvwzraQGJEpkcYgm3fNfNHtyCJXqQNgjsNNAyoJFzkgVA9RN83G5n9kxMdTqWuJzSPt4g",
  "key12": "GPGdARLJDQFCwayZqkXiUqNTr1kdHBCp7ysvXLfcecMkL4hagW4zufbPNHihfozYed3JiMeetX9fBVDpFR2jeK6",
  "key13": "2jG6cVXWFbCYX98NLArZ4bo1ypiJpia3SwGLJWU9tBm38mBKYUio7qQh8AUP5ySJH2Qehj7YT29h1su4FakvtoXf",
  "key14": "5E8FSRhtiNeQ7gsskWGdVQscEVCKUnQHBPPtHd3r4gBSniHDi2AraqTb99Prv74e5QWsuhwV2N8cj8Uvd1jseHGW",
  "key15": "3hXQPuXqeaZWBhJfrftR35SQn4DEQKFvJ9n5vSWPkEsZ2UZgmUcC1sia3s9bTYYeF8sM1KDJYnYDhdMwgnby72CW",
  "key16": "CTPnPtYZcnsJffC7xVtUBck8r88YegUhNGHRW1ByroLhbyBh8EXnXtLRHnD8yaUiay8iGCE2Bu9yr8h32VUVk5G",
  "key17": "3PPdJF2TXEBdXweg2nGLm18HazYpmpTU98BfkUGGKgpdcxZCbYGoQcLRojmikt9iAussr3irfmdSTVrES5J64hH9",
  "key18": "f2yMJj2XH6KzFoVCfWPHzXFtu3DbCJHHkmtKm1CNLdHeX7oNbwgzz6NoBnqUycRybngz7KsUEE5vJHB8UeMEHrT",
  "key19": "2oVyXsQK88MRUExbmVNfAafchgwvig4DuQUyXrujEMwqAfL2yUunQmSY4c7r4bpbTky9QZno2TcJV9T4XB1UPcNK",
  "key20": "PXzX8Gk2CuxbQTzPQBxfhyabF4STmCk7cnoaAM2ZAfhrQmiSfS87Zva2g45wz2sa4iqTAnxpAdS6Uqig5BKamf2",
  "key21": "5Ayb8USxJDTgf6rW5zo4fkCRK5VPDBMKedAHNAtC66YLMhE738unSjEzQyNWyQBQ94u1yw8JY7wqEJX28VfbDrtY",
  "key22": "2jJhc9AJHRG89sCQefT4LSaaac9KpmaR2QhNZVKTNVGL3uQtyvu6btLQ8SAkmthMY7UGBKfFKQ88KsYEovYf9rjn",
  "key23": "3bCzyUbFtAmFx55M1MYrQbHUfLEr8m54eNZtFZDmwsFBRsNsadfjXh3cG295GunndXv9Z63VTbYvpL7zZVt5zo2B",
  "key24": "3TH4pWGB3qqbjeXAeqSNL1zKfsHfKGwrakLfRkqXu3bCmixrus5R3mEnSZQ8fS2WKpTrqSqSUHPyWJzLfug3Janw",
  "key25": "5vTtuFxtT3VJScvqPsgJKivoC5vXQFBiybDhC5vtVAe4r9EVQMAaFGmNNtNw237zMwzCi4tzRzhSQ3wig2454w57",
  "key26": "27WjLBEYjxWzaLrqYmnCSZTszNWdBqa2wxSEex31E1cYBtrBMMdbULdLxiqnC8kJz5mexRMdJcGjNioJToY8Y9rn",
  "key27": "52Qocyb2VxvXn85E8U8E1UTETvX8fbCd2HhXRYPZ13NoKJU82XZ3xsfNCGDpWeVXVUTsj1uC497sT56QUYmXBVgc",
  "key28": "5BVeB9ZHgtRYEPTjFAZX8yMLBWz4gMLnch1AKD77UryR1RVZxo8fRjcHpdxKNmQKb3KkVCC5TJcRCrRQbdZL7Su1",
  "key29": "2eDyA9GU4orkdpufY17p33EVDmvjcBegoSNhARG9hvrjTt4E2wSpiJHHXRhdWH4476JSKt4QshD6fgk2a29VPpQR",
  "key30": "4vpBh5yTgjrQnGbaX4KdL2oqQb9pKbu8HD9QrqXPn9cuh7MrteBhaxAq3YRsmVUeafxF4AAGJdgPQCMite8xTvu4",
  "key31": "3Jr6L8kbTeU3HYiuZukEfTpNmvJ8fyKXWWchd7X4nACyDP2KHJr1zwEzHjFL4bvDjPwEp5Tfu8SUNJorSgSr7p41",
  "key32": "ZeuKLMKDFSKyj74Es21ZokC2hi7di1SidRfyxpV141YUkavjc8YPJfnoz8B6ui5iwPHnLBs6JGxueTHdzf2mJom",
  "key33": "4YJQd3rSTqoMyoXk3W4jppCQACyimnkmFuCmUa9qMzSLpvyhVF1u2UGReJKrwfjpAhwKV7C6Yp9B6qBChZkaWQwJ",
  "key34": "3pSpb9JWJUKwCjfj1AeJWkg3NoNZtU4UHU6zFsivhZtxSzPHdtB7rYT73HC2KT8RNYUsEPcVoR2jTUmVQY7sRbGk",
  "key35": "3EnLvdbHbyx72BdrHDNgH4ptVUrasPdqkP6c9cpwoD8Nkos78LFTi9oJHebwFhMkiQnFeszpx4ysLwQXGMpXF8f5",
  "key36": "kTnTQ4NTmb6dHapvLgS2XN72k9UoZKZQVokKty6zn77HfHQzchnH9sMdSP6eTrXpqiDW6Wp736W3cgM6dXANWny"
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
