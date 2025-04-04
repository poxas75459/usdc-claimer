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
    "2cVV3gmuAmd8vcANqZ7aQWtHzfT4Mw5MMqwzVmi2PxQ3NdeFKGUvJtTjiVa93ZsP19uC7cix7UPtL48nAzi8kZYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MhcrP1RzKG54fizUE1g3kuEDnqgdnoHWC2vnKiQV8eXZFjqLxjLfTdDfRmNqmq4MzyLbZU6UFn7MuT3JQUTFqDA",
  "key1": "5Wh14foZzzEYeFDqz1Vt7UrMV6J5jJ5ugGunXKd96s3MwY3e4BfnvFNhGwn5Ha3amyKAwCoYmyqorPjYihoHmYXe",
  "key2": "21zMteE4EgJa2iYX8FzYdu5y1JQbEDbMHiwqdXxyxtebgEQyCE6zk3Ci6pmvSGbXgbRTaryqzF8rqnovsuk9UdTS",
  "key3": "2bAVwiH52tD3X1RtLoQoZyycE9oQF5JU8FUhRHsP2vufgty3MxkFNaoU7NotbqxHmHJ1D4nAz3j3t2diWiFD53Xo",
  "key4": "44to5Ko63V3P4dkY7QGDz7B7B2bgA5xmqpqsLvNuMGWU7APSbLzaLVRBSms5Miggqw4izn3L5qaVmjZH68a1dVs3",
  "key5": "2jtfVp7D7RboAvBdH46RKkdFv7rgMN6R9LLXfT8pJZi8CJeoaQbHeMxZAAu2ewLMjWk8tiVXm7XZPQWLQ33YxMBA",
  "key6": "4VXEbvGZHS9Go5oQKEsoBif9q1q2iJyEjvCiEoKbz8y6LuhuGgo2rW5FLPjA2imY8gkRmLWKbNjCTFPqYTV6mvAy",
  "key7": "8WCMCHMCkNw468RXAt7W1M1dJD9Gr9vhvUFhm5XFKoB7f2C3LBXY4eAr5bU9HjJvK1U3dtMXXte16hQoYXgZpYz",
  "key8": "4AwPjQw31Z5L2MJfPsoK2MdmZpmCPy9GN5rsJYji2J7kAExqRE2EgrkcXtAzkfD3cGmtFafek6pjz6F9QrZUxcEV",
  "key9": "5QiKoo1uKbRzz5A9mjb8z4c1Jbg9wBUm2YLrvEUr5Qa6MzFiMn6YLy8xtxSktyYy6XhP749qtsuQRm1nqDVPBAPe",
  "key10": "2NTh474GD9rf6BjZsN9n6rRFMM4TvMZhydqGrNrujQdztqzaVZ3uM5t7PMber2ijd75gLhzw3qFFsZX6ef1wEfhz",
  "key11": "58vyefYD4E7ntESVtKbkyxFT6AGSTsBPsyFTkAJDCsTn2rnNgVSGy2i6agTQfrg9JM4SEp4LpsgyKJmYTNKt1J28",
  "key12": "2GSie6nAfJHHugdZE3MAZ7neC9BBMcKnQa8BVKhmQs6qFW5UUSqKkJCof2jFtJoGCmfxbbRumhb6MHQNkU6WYhpB",
  "key13": "5Sc3rn55kcG6aCj2x5geTbvh7vCfHFmSNVyUnrqSFXarMMkKVbGfmH3Nh9eQG7gx9QQHzDgaKhA2btTeu1AWyJ8p",
  "key14": "5mvvWPBVxYaZqkeim3jm8AD7qUq2haTymYvSeaRYnLSjeHK44RcDiuLnpuLB9VnL8qzP4Mb8EdYrqhVm9stcgyML",
  "key15": "2c3nvYDwW14A18AFJQZP1m5ziSRntBQnRcgGHWmtSK3N2KBXTv9qaaEhXtvmDfWuDJnpyRFxfYQrfLhhcBBxfF56",
  "key16": "2k7Kx5prb7VRwzTe4GxPvebWsLkUNqXLp4cd5cNcCp8UiHYWvKtF5jzdfrsWw8byBCAuscY6w348TgXBXtfkNhik",
  "key17": "1mamiP7ZhkyXdxoLNAMrp4fp52C34poqobTrEWeo5BUEba8hjrhkFz9BDuYv749G3Fyoi71b8Re2c89aCg3rqTF",
  "key18": "5GwLeVcWpjJqDi8GFyjEkcszJnPtJutEVMLdMBjwfrbUhUqYnm94B2fkpn2dmBFbB5146DQ7STLwMa9kDwo3dWEH",
  "key19": "2ECT7ZZijU3gF7ccABjAvCXt53hSBsSadZ6u1cv74CZ9X9WCSY98rdaP8ckHroREFPmXpnuDEDM4Zp6tQ25u8VwC",
  "key20": "4gPGQXJKRF7oG25jaDKRz3kdrDpnyWLt9upxfDXRb3Y7FitpXoDCDUT3UMWD221UvtLWvRcTWrh6NDroNxEai5qb",
  "key21": "4qWqzJ4H6MC8PES45k4wVFhUBu7KgkXs6BUdZGG85jyacAaZ3j4PfiNiWQXToE3nSZjYT7uuhFyqmdHpqFLnAQVy",
  "key22": "2DkVhMxe83sDb2WuzuR4fZqS3xG3ydqYm5a5uNfzxSR446DpoMR46FCDf7zW38giiKTPiC7iozrGGrUxCdEhKWbF",
  "key23": "FXNV4vkdpwYJaBmvQoXyqR3A46MzDsG5qjAmWZxYFCiEkjQBYZ5boUwvAJeGHmTHeAy8kAbxobiqr2hdUGFvQeP",
  "key24": "SDk3zExQepTetwF67BUiVsoxCF9ABcZQbq6ddBcTwiejNtHFaCsh5TRcSCEtwLgzoNGGqffGZpXJpe1yWcFCuEn",
  "key25": "4LKnNutgP3iqPqnREvGW1QbzzZEz6AyF3vfQDPgQZVJFxAHTdCq55uiVNeUN3AiCtCknGvJenJBRuAAsVujiNp3W",
  "key26": "3iSVoBowcXZ3hszf4m4VHaScTMbBqrkd6qm1Q1BNxdcFWbW7c9P8BPaZxFo6yaZdx2u9RzDdH51bySSR8qut9Qsc",
  "key27": "EzEnxXQnZDPQGw87Vx5z3A4g9ZD4Rahomgx5o8RTxaZGJrERiGCuqodgkYfBU4poHUKez4YxZbjvJnYGAJcTVrb",
  "key28": "4DfGQbkQDTcnjPZg2F6HCK1mjZZJTzJ5t17SkSfaf8PWrasPhiw47Hymnnhv3dZfYzjSfDGtEXbeeEKW9iVrZNpQ",
  "key29": "2q8fFKz6QkeEqvGXP6aBns7NK2pxmMHjprMXRsGWVFmnTgDrJodeUTLQC5ktkw6pCYCKi2WGZ7Szbt9V1GAvyDEV",
  "key30": "5XijgnkehmxVdmaRPoG3UtFMRjLe1HPQakYfdRMkZqPjvRKkXFzoWmMBP3EPFtP7xMV196Bupj4S4wnSp6nkBkY6",
  "key31": "2AcaQpGjhWa9aa8QzbPivaQ5A1ytHMtvD27GxQ3bk29ors8MTNYnSrn1PdKkg62uFEDgcwE2CqScpC4zzLPRJNVW",
  "key32": "4MDwc2Kv9Y1dayR9Ko5uEpbzcqsFoBV8qeAmcZV9cjd9wF7vTanGFY8uNGUqMCw7tpu1BZu3zYVUFAiN9XW8CuvD",
  "key33": "35mDJav2KVy6z1MaoS6kKG5ZEXznyZpWkNfZaXUqLeBW92Z8GEpG1kUo6crcu1gYr7tK7pMzHU8uWAnQ1nmzHhGT",
  "key34": "5PaQqfNVBvg7axvmbyUgubHfBpkPuCwH6kA3r8HxW8ZCVfF4gdNMpQr9FVeKDS5SKLBYaVKcydFGzm42YibpyA2i",
  "key35": "4VdKiERyF5fp36pGpiiUjYkGhTbHUXr29nWfG21ZptMu486GWi7s4ndo3kzPCzYSEawAPQ5eGfsNJwAmvLmgFKF1",
  "key36": "3a7wN6UMsSNdvdKozii9PXJEopv6K9NdpREVgFy9PS3bhrWVdxfuphE97W4EDT9GsrnEgSEiv3bJNFxMPSH5Sg1n",
  "key37": "4AYLbyDAGRVa5mFXNgqW2FMU4hv6VzDyE2br6zFTsAqVf8E2FpgtTWhrGhhk5eRRFKjneR5Wo5CYNaHSJZSWg1Qv",
  "key38": "2evKNLkUTEx6TWJyyZUft8izPwSQEqMxyWx7W7Gy7htGRFPDrnGXrJwtUDprqz2Fy8dhYinvdLpEyxVbL1y2QNZL",
  "key39": "KbXeW5W9i1JVSqHMFR4V4Cf2ourjtifYik4uYx2HWgEHq3vykbd2XPC95TpT1i8kjGBnRJcb6PjgETHq5cChtFj",
  "key40": "4ds3x7TGLhEN457RFwvsY2qd1Hq8a86dP8ocw6SWz2pV8t7Zu5w4pkefEpCF6E8CGF6ES7kVfaQYRooE56uunahq",
  "key41": "oX48mpbSHBePdT5Zkc2yf6QDp4b9oYRV9vCdVHJvNLmg97QVUoV8eK2u4EWxwjuVD6jTT8bfE4n3X68PhwkPuEy",
  "key42": "2WexPgtcusTTW68g9b5Jyy5mbh1JsqSUD17LGeKJib97j2JGykkYnfhr6dCP6NFz9QK9o4Xs6nMMwKYimJvBAYES",
  "key43": "4DE83xR3PNUoDarU75YLZ9hVPou554CeTs6qZDr8hGUcX7a1fTLYgPSKZvS5W78odWdpsaQwC8migMiRuAsex73y",
  "key44": "2UM5Ecmh99bB4Tezrx9JL3Y5gHGFYcrkb6RQapwbkx3j7B44aemeKudtCF696jkEDoixH4ZHmVU7Kfk2aTgZ37PH",
  "key45": "nrENcCrNJY41ippFxUZJyXZzEgiR8JhwbApkdFZTdho8qgJsFVVwu6bRjZaAoAEG6netfuaKtAK5kieS9Mai3wT",
  "key46": "42Ameq3RuNsLTpySjpdUAxeKkTwsvwSa31eRCjarX9gCP1A8MKVESwxNtR9gWHN97zESNF9qWi711a3GuhhYqTT2"
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
