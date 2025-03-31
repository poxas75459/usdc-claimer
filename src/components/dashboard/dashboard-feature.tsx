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
    "5FhxmSnhCpDnZ56AZSdqte1whne7WZTJdUsDeoaFPgz1KSU28h765Gp5HzcFPLTuMBBWVDtgrvFUowHFjVt2iqVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hdmBf9KBdPCEhkSvdEuoMzXw9aDTF9XGRmGJgjEW8y86bGjYWCraT2DxUD9y1BbmQb4kw2Qpo5Rfv8BVtS8C1Zv",
  "key1": "EWJEV37YFrTSm2woevK4KN5Qy9PRqhdZ6QiNTaVix2WYJuNxYF4CxCBTsrzxofDCVj76BSn5hxuBSsvx7PPaWqv",
  "key2": "p4tYkngFft9xyJ8DYHY5YFGrZrTzqwvNvEXKSVY8KFWFyZP36tRYcikqjndBRntgDPcZfqLBGZM1cji9wyD8Hea",
  "key3": "3VWq3EfCx5QZd4Hm1KdG1W1eTgDi5TeAYxhTeBSewnqzMi19a3rdF4hWbLc2x6RVWv5PeQVzymSag2pxPjHmVjZX",
  "key4": "oiZ1rN4s3Wj9dcn9LDpUQrLt2SPsGgs5dBptFHa2xhVg25q6QDPYfoFGudpFgKvq5HntCK5doQbvgV2o1UTKcJn",
  "key5": "2q4nzZsCyT7wFhzhYeQNqW7KNvneK1cYmoGouERkx88ET1sTH2oE2MQ7fh6v4xrT43hP6ZJEViFe6xj2QoAFK96q",
  "key6": "4Zw86EB8xtbxc5AgeDyYvnkRSbG7M1cQgz6hFh6vQrFxiGAvAQE2o3ELCST9wyQBeAdeoiV6AGQnjppK8B3JCN7q",
  "key7": "3QaHS7a5hKXSnnbG8kHAYrXGqiwHpzphtaW3vmL6A8zuAPUt3JABANgYTTp7TDJykUMXXtuYniZxCPyZvBvbZUQ7",
  "key8": "5bxyqx21u15qomUiiB8NarYbYVcfyPUaEqtZFDKyybEntyD79At6RX8T7G9MCDH5Rimz4rNibvmaasSHSR3jxjn5",
  "key9": "2Yu8yE9yigxYUHAuKYyaLNdyvMc5qJVq2yrDKf6FfnM8MitEjidQoDTBQG2nwFdDdeZNEnLxsyrczpvEcjZvGvR6",
  "key10": "4vHTafcrGnQUGxyaY6xprRUVCj9fo6ZGP1YWPRvLjWtwXCqvsycwJ9itFcHXw1TLUDRCkDsFb7rd7iphJVmRxNtJ",
  "key11": "4WLZXJnxKBABTxkxTQXc1C1w2rRKNC8Yg9vQHrfR5XfgR3XhBz8N4RG4ZzMtgxJk9V8aTUYTpa9CGQfiSn5aWPQJ",
  "key12": "4xigB9qmpVRJPK18Drt3iApzdX8ZGnesi9oUEnSeF2rSFM8oHk6o9cEX7o6kzxoi4nDk2kbaVbKhv4ZsA3aahJsT",
  "key13": "3C8iTsGU2qscQpDQGi3ygJFAifRtHGH9JTnvdadGFcQcXpqJtvfaSnjHos24cYjx5NC1H9JLVWFGgLonZZ5FnxvX",
  "key14": "3KiWGL42iw4YB141VvhBEoqs3emDtficFmqYY8cQEPz5j1UsxBuM2rWttaX14tYxtpje9GvHKwXn9hTSR2HsFCv5",
  "key15": "2BwjQKNydHH6SHrk4Duvk4eedazV8BVoW7fCfGjEMWE8F7QUu3bqRrTJWGQrC5hLrUDV3aztkjSQY6vRC37ovtYr",
  "key16": "2aEZYDewnZVhvMTtSgN457GV1S38CYFe3q3CeCQEL9FWj31r8aBGXs4P34wxBr6AwA7PzceQLjNFK9KdU7U7WoKt",
  "key17": "2Qm96YmvsBJN6ZoSUN6E5iwAkVmyEH8gb35Pqx4uocjS4jUyTBq7qvjta7E315fttQniN58TEP2G77jz2vX8KkXn",
  "key18": "K6xMBbar1PAZ2JBLwGk3ahUdgcENe2NKMzdF8of2oo6zUqb6eQ8GJ5LaEjnBgFW4YoeJyM6miM9q1eYheewsKBw",
  "key19": "5awb5BNHNgr8UpZMr7X2WjFyJoDrUeJL7wgnAAG5zpvwy4FHVYEhsEaCj2b32eGrwPoMHoiyF4J3ZyzYrqYgbrNS",
  "key20": "Xw3psVStFrs32db4fAcx6JHeKhHYCivnKmjkDuqcbtnpkkQ8Rd4cYSw6qLGgnLsNSg3ojyqgoa4imQxB28gowMH",
  "key21": "4wzcq7E84dsNYxjKfP9tTNLTGLzPGUkyoUeXVziQcQoeS1fphs8Kke1PHeEj8uc5yrQXqCYCRz8PpippX9N61zkV",
  "key22": "4kjMAQjJR5kXNDS4zoLJjZeMfZRWG8zo8VjMoEPPS8PSXC98wZhVXKXZr5kxodTobKq5Hyj1WNAGRegUY6M4vezg",
  "key23": "4q6qckm9cKdPYZThuvoJXVx4GmnAqpTG1XRecsJpxBB55WoDbqyNMwQvXdUPzNNZW13AbZSNxaxpqXCvfvjuHV1A",
  "key24": "tQeQRLFW1GKcQXbfE8nt9hqm5GsNSLgytbWuc7huMeoEUhZLjkPW1bYTifZQWwMrYbna5a6ff5zS7jXZr1pxiXb",
  "key25": "yWxBgPfZ9KSZQgc7RCF2yJD21yevWn4kskZPZFo7t5qr2kbZ6KP34yTM6G2YnSBj9GkSSBzVKV2S6XDSA6qdoYt",
  "key26": "3uDE3xfjCrTcMVNvd73u1Lh3AoGBmQeoWES57EBSiPCTUAXPYJYs3r3Wu2j2gjBh1hTjp9vE8jJGrHBH7KiURnKV",
  "key27": "9HztWvYV2x9WDFW7erFhSBCurFX74vU1PJgQx2tC251QTyfDUDqUq7cZASx4qcm9e1gix8JKrHd8KYBQ3PQNqJY",
  "key28": "5TePLqpLvwH5qzMKb9ikz7xUPVYuDDSbq7mcbzZ7Fqw7KdsgFXf7ReKqmBuJgZM1UFtGFypYq93ia4dYx2vDFHC5",
  "key29": "6CKMzNxfN93KqG1dBaQQ51fMUxYcKHfZ1cwADRNyKTSAmWSFUjyJA8zAudBYoCiQ2pnK4jzbsuM9XxyxCiLwtPi",
  "key30": "3KNCa9pXref2pU7mhAF7L935NfUk1hnUavJytMesfm7vyfymPhrd4F3Mk1rHsPCWpJtg1LmDb9U89gpudJfJkVRt",
  "key31": "3LNuwyi18DqMsov8mh6CPPSXGCdhnQjnEH4zpBARpHa2NHvPdTM3Mnf2NzF3ad7sPxwwXVdJzJNmfHe8gDCDuRtn",
  "key32": "5pmzc8BiWG7SD5Ef4kzuGQYCurmZHC8nnNxeo82x5wAn9z996xMvLQ4DTN4JWgwA7uLrkysdNB8K7C82KojDSocZ",
  "key33": "4rC4CMmXYyEns4Q3j6WxNuCJUGTUp1BpeyahumSM9ew9w9W5puihjUaZVdZsdYBjEMUfXhNAsyk2V1ckYePtJwdV",
  "key34": "4sJ7vPNZhxieCVBDCtJT3XjHWN8K8wu1CqfWPRNCbUSCAoZjuYmMsmtTDMqh5PQHbU72UDu74U4JTMZSWoWRvg16",
  "key35": "2ZEobN3iLSQLwxH7sCNz7VyEzz2LNtMydv3Kxx9wCNsbobS1VhBRjK8idN3cMq6z3bWdp3CYCkFpACS8Hqec5gUT",
  "key36": "2JyqaktWk5kdJGn3v9MjM3pB9FLTeaHhpHfFYyK268oDEaB5vxnGbBnG8T1iLwBnuxSdVB56pgbDSXUEJWU2hjMV",
  "key37": "SRkaCE7HcjNU79AZsDjqwCB8G5QhzqnMmsUgLcWkU8bZSH79gmisB5rhQ9okAnhZ6VpeJwHM4T2rVNk2cnmiLzm",
  "key38": "2haJ2e2Eb8kdBmYAUrVYUEvTgTBE1rns1zdRKxkV1wkU6UwfUAF6NWgGLaBFcLDDL6HLZSbCdezjxNXoJvSvxLPm",
  "key39": "4XVmnCKT2aa82ZPXMyF6aquEpZDBbRHoKrrEnjTMgXg1DV2U1dpsvJChXnYyJLCJwD5vLuTnpTuiMdLChYxB5d9H",
  "key40": "5rNEPggERkwBfyRQWqNCwY84B9z3syhAUfB6oAsT1kG4ZjCLLEBf76M3NmLdFgCZtGEkv1uHs1DxiHhucHaX5rQL",
  "key41": "5rsmkK98T2L8zuAvFwAHBsu7fdQ2m16eWMgR7k9i97tPf5YqE3UUgtuwXoLEQ2Z8jsNTcso9eXEPereidinCjgap",
  "key42": "4d2Rvm2jCU7o7FCEC5ViKZx9tX9MJGSh6rJpfXubRhtgirYZuWZqwAMJyQSWy1TAvsDtkCSGVfTUQdaH2Torc2He",
  "key43": "wFmN6DAmX49nfDzsrRe8RAAU64R7oaN8vS9tVnuiTyLhiLSgXecFfDN6Qgjo5ZZqfHmW6SL8cVGrSi3nScVdU4y",
  "key44": "AmyZtforE7AFw5xKzAu9nLhrfeLExBoQUSH3YTfxq8VKN7qhL3Gnnnm6AXg46hLS9hq9g6rYJosna2hjoNKw6SF",
  "key45": "3pSBSFs9FCVv7WxwFxEUPHQBQ9KPprdo7AQjegy5oMR4VvJZn8wPzgfV6qY1oGowENPdzMrtkbVM7hVMu6d8dg4E",
  "key46": "5Ahr1VCBV2aYcNv3E1SFBqYtfbPfS7J3QHraks9aBxYwc7NRkY9VYkZ7mYarMBmnkKNETRzNGYJrfFcR5kyBtqga",
  "key47": "4wVMYBSyfzAkv5RYjw62Hs8i2Sp71rQ8HdoQvw7qemas3k5pZAuooLVNGybgT1iv5rHKstKnrqxCBWT4zCdWYCQb",
  "key48": "38dHhbJnuC2iJXJ2Hm9jo456wcyejbPx2dCQnBURmCscRaouf6zqBKo43KkREtmeUZ3ZHVrzL1KcvZwWQBXgCrFC"
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
