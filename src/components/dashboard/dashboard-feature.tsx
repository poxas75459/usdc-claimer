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
    "3ybPZXbMXHH92vhJCU3JDjoZPVxXvs1JgpnhGJgUFvskAdKm9ptfu8Zbg3RkxLND4QiY7zYrS93vYfbUpFwwvAe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ysVTuSqp5DSdYPhXQt5s5CNXYRKQuJ9ByiMXQGdNF5oSpkkdaT8tEdy3fNW9RhWBCiYZrj8nUMfwXFAy2xZBKyX",
  "key1": "4AWE3KMeZKES7Eydvrn3UELNcdZbb7NshGyrgENoyK3P9vAFZbtdzvByGPHNhmGdXKEynGftsWAvzxJ1YkqTdjHB",
  "key2": "3aUZYNxUubysWZMz5cXtycAgHStf4xVsPd7y97Fgu1wiy6Dj2r41ztoBh81s6vMMyfaVJPM81n2BTrEFUp5htaiX",
  "key3": "4eh2u67HqUX38GV3jFqBMP4DhAR19VrowKRPta77H3VwcksGoBuGhJiq8mTYv11vHuJFufMGhMuNse7aMX9v2s3H",
  "key4": "5xxgtM6RHx1mfWkeF3xYWD1i9YDWsbXbZcqwBiycBmJpPN347Yd8mgFaH1ZZYpdAPcLcAoj4hNi6Qs1ghfPrm88B",
  "key5": "2vR9L3JHrvWsu848eLdrDVg8whjMFY4C1UjGGtKD5Be1CSU4YWJb7ux3CFuFLcGd7wXNQW2TnJ4of7vB6gxTaWmo",
  "key6": "WbAAeiV6s5TiFWkSD8T9CL1ESmtJBJNB4z3ar8162fuTmzXiYEPF6obGu7f4qDsVE9Z3UqrhveyQPS2PYSR3JSL",
  "key7": "Uo65sWtPvMfHFZ9jhf2RVZRTodPjAj9rzm51j6PWLSsvfxFbBCXv7dBYZXkh9eRmvy4XvwL8uj5PrqkYZGYw3T6",
  "key8": "2Fq51vrNxAGTBeoJWwd5bG8g1aBhzAHSZB4nKRyoonAEYpiLhderV7bvixqa1cY6ofNs51Py7BH2YJ7zeBTJSLLV",
  "key9": "WKFoucMvFqi6266Q8kpMz5obQhbkb8HmG1uJbkHjecByAReg25yosXV1NwP2YKkcncHTiy4Agd4FQTtCwBkMseY",
  "key10": "4j6ZBdrPXEK4fKk7FwLJt19j9WN2s2KhkvEHWV7mzBbf2h5uLaZLx7ZXRFjbPN4gxCExohWCPzHdSrUDr8SNu5sM",
  "key11": "212D9MJRXgCJoRBRYZcTVDmDS3MtLDkAD7U5P778Ww97BbkY8CdNbpUabEKiGD1r6d2abvUjDPQBu2FaQopjJi4z",
  "key12": "whEXvpahaVmePzAMNJY9pLYoxqZ9ebrh8CT2Fiw82jyvzdz5KkLQNVH1mVzaby2sY7aPi22gYemyUZXno7uowjw",
  "key13": "3VgxWDBcaXuyyTeYxjwh54YkSdmArqsGQ79FVFM2BawZrbHJ2J2YZB4L7oaeK1GjZZ8r3y3TJ8oTiCeK44eF1mBL",
  "key14": "27YkZipy6nBz7XekmGN4aYajUVVBLhrMSSr3uoK6vSyTzzDfpUt7Qkmx2EuPGgTvjzDDvP4H4A9eWLCNkmTFUVAc",
  "key15": "2x2Fu89WSZZeJn68wH9QVcBxw8xw9FbYFJkBvTYWeehtQXpAvutdfp25j6CkVL5TLfBh2jSuUrNTKnknUnjyai47",
  "key16": "3gMdviDrMb2xzVzDnGYFwjhT91cpS6hA2xZwC88Ye4htmpAkE7AK3CnwxBDHret81z2FUXcm5GF6TjSNJkfpSLUj",
  "key17": "4GQKJKkQzRtXZEzJV6ejAbEvwJjfATh2MHb8jDyQMb7S6fgqBw5PyPknqTz1mkv3PRGMJSrUFQBqdjbnEKsPqJTo",
  "key18": "4W8veRzxo139frSnAqRP2w4MeTsodsG2QCYo9LfVHPxkNMQ8FbAWaSCbjbJdkcUG4YaDWqLLeCU1NgcuRu9KivJ2",
  "key19": "2mD1DeFavs5BkNCt3opNMqCtVXdXwxXbAWCHyAZBMpqTjcHJeArPwA7Kq2pAk666othpsbkdHfcxwuafbAk599eZ",
  "key20": "8xEbF18ST6sD9vLraSFRRUqtR7iysS6sSztVNGjB61LjF8a7oM8X9Fjob56pr6RsnXaaqTJRLXxuDRUhPKBkY6x",
  "key21": "2aBKLZpeMMP5snhQMwqwiYoKhvhUMyfXSda3tSQZKpbc45figMWZbsYjPZHn75aGykXBCtw144E5k2dKtvoN54Bt",
  "key22": "5FE5WBZ3MZvsEWNrpQTGgFgqZrZjhxHUpizRgqdvLbHs5V7iaLXC3sMraChE8XhnWYZDuhCQSZiDF3YtcGbCCCMg",
  "key23": "545bY8sWtmSzuLmpU2EFFQCuUeekFQCYDmbU88Mg1vpDoRKwjagjYreZJtFzDL3kA7gFRzrhuPeGPXrXUcZVUeUr",
  "key24": "4atvDtC9fsBazsWrfZDHY4JsdQ8ppXEhQvfsTgGcVJCYYtyC8erSZxiXoUH4aFq2ZXwWsiMxeAPefbaRPJqb22bg",
  "key25": "2ahyXRhYXtEWQNC15C9r43WegskFK77zPa1v4BzYuHHWra9XPPgQUvSQqCWfprmGcRoKVWET1E97u5HDZTnTH5Gv",
  "key26": "5UPk1VojtdQ3vb9yPvF4qdbLsXeofSyDt7dYrsvyBxz217BjTTm6BkKU5C3KPXoZTyDb376up6fjB36PzRrb15JX",
  "key27": "44zE9pX5oTXk7qhALo5Sc675yHJVtLJdQbnJNL6nNc6smGg7BQBio8kxeVFubSNmVbjHUA4ifHa4ADoDZ7yVg9Mj",
  "key28": "2eTRYYujQSyyHPGqxVCu6CqQ5CxSP1Zmf8N5R5YBWcLf9RmwU3RZseUtTy3jD23icHvixP6vBS4PSGpZNDTC8biq",
  "key29": "28a8sZ7o2mW3AuRCWKoMFNBdssa4fD2AQSeahyGXhoAxoYmEJFZBXuKnE7BWMKUzLnzGV9aAGSZHbm2UiQEBo5N3",
  "key30": "3tMVPdBTHJSepvs2kRak6xp3Sv72sJjvdCjpYSkg17R7ZsSZ9K8aVHvViiQSdmiN6V5jDJditewt72NytZwnRyUT",
  "key31": "kd1SENMoHxtBcDvydygPioseSr7RGyqSYdcmL7Gb9vLXpVP78xPJNjPjPGzcnZADEvXk5cXV47m3HiHJDEccQAm",
  "key32": "3joCEDpSkmWbpzLd5HxMXxmktNoyMQJQNqB2YZoLrqx9HS7jhZvMwskcd9fEHmw8Qa2cSJCPm5JZVmkH1dZMJXYw",
  "key33": "9r4xPXRYbCNKHi1SUkc7UeyNhdtUC7KALp3RBivkw5EXLTiqWmaVmYM9kfb1g31Wm4fT4BFrU7wERXeYDMjHgmy",
  "key34": "55MeqvZYPGvwfCCAwLEmscuk5JQo1VzA7tA9XU2JNwK1nwLw9U8iWrFzPnSpQtx2wN5pgEAJjyZyoADFgb1ZrY75",
  "key35": "6GRs9BWUrSVgab9FsYtD9QB39BWyTBHdzifmrJM8DGNHtaw3kE65uJw5b1FFbMB5AaZaTp88kAoTyNAYsj6VCKL",
  "key36": "2MDc6D9J3kpQ5tEgEhkDPqVbaRGwhXHvAxgAfiBxDLkskUDnxuXMo7VzTzSEbMEcrN67x8gAxqfYtGWXBoPSP3xw",
  "key37": "56ZLpyyAEd1Nj7QQ1r9uH8ByKAjYUF82YW1aE9cJKNXLiseh71TwkUVyZPcGkLBijShwoRL12jWmNekBUYxAkCHD",
  "key38": "37SVaDPKfDNsEZmXooSHdT1qhjNdT3AsKRedB4CLTA19pJdQ8W6iH5WL3dSNANDs4sYRwbcYoa6KRUytdT93BfHY",
  "key39": "2qU1bC5faSkDo2sah6ni78BhqQ17p5diZTTwwXDAfzPfZgWK3iDCCeJGkd6Z3ALyvnnEvWTGm7QhG3eJ3yok1Sxi",
  "key40": "4HECJVmdUcgyppGVWYxAxfT3jKna93fXLKHgszjrvcYhBFu6Qhchp9PV9Atpb67H6YcsLZrK8sBVSZztWHGNPggK",
  "key41": "KQCGrTMoVwBdXinyEcMwudTMtuvFykJ26xgXBEBM9HiQi4RCErRdSe3opGLuQv6sffygxFz8KXtajhkYNxNU8WM",
  "key42": "4x8Vd3Z7eX2VXpt3xWoJTxJBJv9QzoQLQD5JGGste4jCaHRZgX37HaDc9mWbGM8NZ8EcHUJELnhm44bwE75b4ih4",
  "key43": "2tvdbz78xWdPzNufjCfnpP7djmZ9DxhsxektD4FfKMRdZwo2yVGLNVodtGYoFH6jiSQP3dqaNzn2pXAwWRTbUg2a",
  "key44": "4e3ZZs9C4hG4uxrn8665xMAGFtfeBr3EwX18WoGifpRj3sviacPXeSkQ43SqFNhqpncTmn76x1eJr21is4gjaoVj",
  "key45": "3ryeZ8F1CgR2yV22BNy3Jis82qUX7kWzxtHVJ6CantDmnta4V1u7WfjCVSS9LZhKUEeRtakvkzFYoAzUpMzpn7Bi"
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
