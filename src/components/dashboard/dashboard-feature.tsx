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
    "4H8e4yKfHeewJLoB2Lk3j2jWMZG9omfdKvqf77N4fmxoRKJVaCdKtoK89kNCgUTnU1puBDBJPtJA1QWEZCvZvoJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C1wAsokEQBmpeJKqJgjKfMj3K9NdVwEiFaswzA6hVWrL6CQYk8fsLtbKHmh8J5VrhTMmdocH3VgcJtwa84jcmmz",
  "key1": "5CrZNSfXZx7BZLuQKxCq8HPx1FGj8Q6c3bprWmtP2crfEZjM6msj9EvxaV4bY34AnuLwLRWhipASLLNSbjAVLiir",
  "key2": "2TQwwyezphdmUr8q9dbMa6XggECGcr4A5DQcZN4Ns6xFRmVfZMjfSgqCNEGcdeYhuvUmXfD1gMhmXxP1LX6e17Qh",
  "key3": "4kKQT6JkoBMnmnFLXVqUmB6Q67xehcMcmE8TUHztUgQUDgxKLvYMD1HRLia6Y4friZ2itG7tqy62v6uKzmL6Md4k",
  "key4": "3i1ymm8x3dwip3gPq2e1aopS9EUQQ82g3jNX9DfYVpqcpNzQaLyNmNZRNw8BPsrMXiopoFquHeWutRM3nexaLiVv",
  "key5": "35qsdTXzDVvbqm7xNhw3gLyLCAms3EFowsUWMguJAZzBMHZThkS8djMbZaD5Fyja3BR91tjP2BZLz8qTu1bfgYzS",
  "key6": "5oWDdX11LyVFJdHtLbqQegspy4u1Me8tSVrd8QJr8KPLG1xewb2D6518wyNgz55RK1QJpmAj5KS3wKyUFwT3gmxZ",
  "key7": "6612JWJQMAyA4suJfb1J6dRiTdk1mAN5hZthjcaUuVvAyQNx4yNT9nqQqEWMg32iKRUARmRy8oPJg5HDLdxjTTFc",
  "key8": "42uqAqXkfCq6yeAmaiyqz2ULxmoCHCThTLxMobgTZj1sABwgt9fyuT5DfdUrzwbqWqepXZKRgS1dpbSARihE6zKo",
  "key9": "4G3NzXSM3WNrZqXhrzVRpPYxZkHq77qDXNkpphKRrSjqncFiLdAL6JraSXcFz5EVy5Lv3c4q9GCLJBKb2iUYw6vi",
  "key10": "CS4DLPWy4rcV7hQJsRDVnrSSztG1cB2JXt2AP6Yom6fLFTnsWANzLbsps3b5JsUVRgNHkBFnCi9TjuypbH4hjcc",
  "key11": "21gjQw44jCigb8FUornKsES8nBYNe8aQBovwaRpDhRYhUbFQ7c2ZCxHUvPYmyt9G2EHUvVmc3o9ys4BDgeDd5VCM",
  "key12": "5pcXMkWbzPpbmHVDK7nskiUwGC8c3aTWgKszo4X7CBKboqZ2QkQcK9kWto2ipzNgJMc7S52oGPbAmiVkm8q3F5zv",
  "key13": "DXaXGTBf23eWfsemz16jAGZdpdS14FjUGDmD6ViCxMYd8oPXX5TngmFLohK1xfB6BA2tbToYDfhd3hsAizY4MP1",
  "key14": "5cZVemCbdEDefop1ZzG22Kz5DLLrYzHoojcfngue3EJjQ7GEps7v17bHpEBuNkH9s6tHbCDy7SsuuheSxY37FiuV",
  "key15": "3ZPYsnuWKNxpFnEV53AfwGQqoYTXcyztChEEBmcDrcFvbtLsWEH4eEsotvBGsRoxCfuPMD6yRn1w4YWHgheTW7Hk",
  "key16": "tByPLAu5N5YsvJeEGoFTAEQ9bMyzxifiYKsL3D2wyv2xqvfiThvezo4NYSURbgMaDrBe2FnoJCVfkE63t8wUCEU",
  "key17": "5vnWKeNAs4yitZPWdQnzDWWZaMfHXDngDPu2SqeU7RjXQUtnnwQcY5GyDVEhkX5WQ7C7Vf3uur4sp8LPaaow8jZe",
  "key18": "3EQou7BzWGH4oYcUXDyNcSLBVyTPbeG5DAr3EjNZqjGcUofDDMLkabhEfMWwb4EiCzHFWEdbdrJeDyVSucjCgTEq",
  "key19": "5oHTRfDrG9WTw8X6d7SzhP7dsjoehQanwcNJnDu7sFwocxgY1HKrztzMJYWKnevZVPhkmqrtDpsCsmvxQXNuyQqW",
  "key20": "56XLXehdETTrb6PtiXs37HfnYaoyDGHw28q2tmVwgpMoPX9AdJZwCPSPBhPNYeiDMEufCNqu4yuvbfHSTFoAuJ1j",
  "key21": "4Zz6U2oMikm4m32TECQG4PJVkFxAa7q3QKfBjHPQCzFFYXE1Vi9aQChCfrNjjPhspBQBmBrCvgxwGcANuKtB4U2b",
  "key22": "319i3vZ4KsJnCfwoeTfRbsFGLpKVmHcDm4fZzyvTrKxieNLeXbnt2aJ932rHTsCkckVPjmpPerNEG5o5GN1zSfaB",
  "key23": "jBuxYTVP5uf9VANA9DVDXFxXmp6jYtrFYD5tEaVYHBKd1xNQDJR6Wp3MavtRZewnMT6g7W4fUKz6g7CgwLSmL5o",
  "key24": "3JKgKAFmCU7T8cJz7ERCnRSLabPtgZqHUwwqw6gH6jL7GdjEyWnCdyMx99Ejb1gZEUuJbREqFPsdvMjT6Uueavv2",
  "key25": "5YiYbNAw7M8r5Ks3mXr6MegdFWyHGuTVBcDFLq455YvgoDFvVEK9cdYZ33UyZDinx2fafe2Mv88hnTid5c6vrt9r",
  "key26": "3ziNHhkeecP1o9qowyGdbAc4gHSYTGjLwVtWhDkLzSM8HMcA94zpZ1SPHtxpcQtcQq7GcMTKWZrSaiJFeGCJ254Y",
  "key27": "2N6xrQ5nhjhV1yR62kdGCT7KheAGhCw3TfMraGPW5EPBosquq48kVbyxq9SDyphoCCC4c6bedUL8ZdXYHL9Ax9RV",
  "key28": "VyuckKYR9kPycQXjFrT6sSExcLx9MHq2354JapL9musioyw3xT8FjMJCUEYnqoaAmAT9jYkXnTYVMEri7kAyf6q",
  "key29": "2j8wbUVYwWxQNgK8E2cExJohaFuuoQEwMru9vvjMBtNiqbzruu54aCtqfXVYWD5wkRwFRJ3cGn3933GH6pc6N5ZY",
  "key30": "5L72hyQ3QrJrXZ9mjJPjLRWZ1fj4kvGFra77dEKr2agU2TTwQtKCQgt4aXDStTQWFB7jCnU4rpGMJGLwvBoB2sGT",
  "key31": "454dst7dnBA6EoB3J9PW19knrMyaQ59Yc4W3a15os13LPQzPux8tsaF8kN2naiuWv7JiiGwU74hgV21hC4A1wm91",
  "key32": "4ArcGR9tFxCaX1uLshNMJTFkNbZ5pJR7D2KbCU3rcCi6Ry6iAqY1W96h2jUfUEFDnp1mbVC5g8JK44Bc5F3us33b",
  "key33": "2LvbR8sxpo5eYZYb4nDY4L2NzKipGdWpzAwp3bz3saGSSB4iXwQPRgBPRrS7dDXXiaRUjbdpCyRaykmjodTSX4en",
  "key34": "2s8JDDQgMEjqcPDB9YrCUKnA3nBhRhmdPQfPmLUyJaiuWa4XE1pUisjVvBtfMwsMHu4BrCmu5rBzD1Pe6kR1UKA9",
  "key35": "5B5L3p7bcagXCUXpJZzQnDqXEg4wyt36Vv7jfnQU9cppq6j3qpCLMBuQJ5A8GRYeELed1jxXpDHjGTayAehgCwZd",
  "key36": "yFTATBVhN2qzHNfEYGNnY9URU1dQdct64wUZKTBAcG4x5tAT7GCrUUReeEUyng69sSVXF2sBMTuJ4bTV7jkndFA",
  "key37": "4seD55tk7G5a9c4rS5X5bV27e5FEm4edzWjcWFb8a6iqqM1MsaaFnh2tPSXjvTgryKab3VrJwAkqYHxN1wZd5Ypt",
  "key38": "3V3v3DoZ5YqMWg2Kkngy3LpxcHznAQK5Guib2KNMu4SiEn4PdA3dBu773Z5ALTSSAb9idKnomYuRTDKtBTTWLbLH",
  "key39": "336M88Z8vtKNuDcSM4Ynh3Qj4aszmcpGM7hKnzEwfmBsUXNmaRNF6tfpbJrjQyGKVn31kewcetNQB4xHCLontKq1",
  "key40": "665PWmr1T8ancnW3XKWHKAiS3KtY2vKAVNySR3SyZzwTgxH7wA3AffqUfqBfsFcZBJFEcqjqw3BU9BJezHNhe4TY",
  "key41": "bVuj3LTkz8bcbJYDHP53cmhkyu4GFVvffpKajAq7cHMXfSsVnqYLCVYBZw666t6sk9H4LQMvwt4hitobSkZprHx"
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
