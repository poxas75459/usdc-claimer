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
    "4jex1zUoU7x17uw64YqTHBsgcAQ1wzATgMpHHgp8HGF1SQmc1idz7RJ4nbZKTVuigQSM6PoiyFaaPq24Hp73dkXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYFcByZSHa1KGkgMNajW5tJLhfpAXFEGi1B7pm4j1MkpjBNR2R1PKYKBFA7n9rZaTDNNYnYqHFhnRV3bLKxFtJT",
  "key1": "5vuQU3erZQWsyjw9aUi58ucoviG88T2e8Kw1pBiCAQTLTaqgkm6ygeJ29yG6hcE8tJQNsW4Qx51rejH9fhL6GyDX",
  "key2": "2rhESHJsr8RgRVcJE2SX8GX5jnhyfsWJ2rWRi4p1sbUtMsWkRuGgh3SJ5HPpMWM29nPWQyXcoo2SGALw4ZgntEU7",
  "key3": "maBhs72YzqE6Nw2vrPbGRUghsEVS93oZ8nuPCyYkfE2LBAYUWvA363Saw1fbZtfEqYRBbuosWU2tRac5r3hithf",
  "key4": "2KQtYLK23AbcLHSBYnbX66PXZSHifpuacW9UCLBca5H1y48ncjM98u8oSsQPvRfxYs9sVa9Aajg6p6FbcYPSMU9L",
  "key5": "4qt7TEUicRFY7ztzWoffkGHEr1yxMtn9e6w4pmAETAco5mXj4xXTskKbWwkvmwmfAA2fPnGcUkc4ASVjLpJi7thd",
  "key6": "4sPueT5JoWYnYvEBXhf33HpNUHveUR3SNix8mXwUtfz8NCJssyLNv2NsexNCrCJsTd2SiUh3woRqscBSoKndvjM4",
  "key7": "5zEJchXxRoE7uzRbXCtyFUtxnhNix5W8CrC98JLHfpMx7LPPm1VEgsZQ2KZE4DaJh6utwRJGWQxEC28DXr3TDJuA",
  "key8": "5mo7XSwR4Mg8o29wN3bLNnJchFVN7wYrUfEVQJgeY59XfVyDHuAxhQvgRnm8WBu9DeJXVpWKb8FN2JWw2GBXUsr1",
  "key9": "2Udx8HYQsfJfXCKBqV8RKiJ3vjj43iJpdm421xp9QpF2zKdjJmwc2haNm5JcVsvYhb7PpAYTn4ZvcUej3mr3XTpm",
  "key10": "2khq6653rdezWudvE7sfW11mgouiMm2frwQdDNmAL4UNbyygpKiz8EpnNcnYR7k6kKZqAd9kbomAVg4ManEKgorD",
  "key11": "52fq2jTEyiuJR3DSCphsxjpoMH1rM336bLBTp9gQ6a21rR7mjt2PuZnHdM7TzwHbWBiZpNX6KJeJEgTwjW8PBxWE",
  "key12": "3ai99M4ZocKBXZZjRRuJ6e1s5gw9S8FXNv6Qv8pvYysEjAV5fSEaUjNNAEGhzUyGVLewHrKVyRGjJoJ78eRMUfdD",
  "key13": "5TicuRTWUXVsEV7wRQ2pE6HJEpJsExJJ7KpNE3TYUkP1WSGYqLqSr7Cs6iTA91EwpkjYZQ9UiKmdgXz9e2dbVeEU",
  "key14": "4Djtch6QJ8Vxg7DHtrKM4wvs7qkj3fzeQmCjMgzj3GsNSoUqmFHYRB8Hv6Z8meHYZYRXWf8W42X2GvpY4CN44VQY",
  "key15": "3EgMQMWGMFo4mBCYb3fUKbPdaKSkCHqhu1Y6To8Jv6nHcnPAcRjAcz31EhhwU2V7BPYr6rywYFYnFfNgJqKe7wKP",
  "key16": "2cvTTFGzyKtGhjSgHWAqkV9TUHTAjsAizkMa9aFitUjqYjRDo5i9ggJyH1vbTdtJ8JqoysPLp92EFXoZegtuLZbj",
  "key17": "3QcgzvbbYiXqLLYucfqRFfPpvLraD6TcAbpMbxgoiK4McDEmELcmt7U7v6wp8JcsCHLF5Q1oEuC58HTYE82RALyj",
  "key18": "42fDNzxxx2KQDAecTD5ktoo3SxjwyLvKWWydVseTnpEUGM5m3tL1TmA7avX4nrd2Da6z7wSCgvnwahnrnfTCiPzf",
  "key19": "5a4ebK2QWpg9YGfdQYXSqfGZjhix9uwSTyHoNBnxnMhF8PscgAmTL15E7iybQP7fKunmi9C6m4jnN6d6MUy56vFk",
  "key20": "4fqn6CVSBjiCaFuMXYa7AYhZeMCxuq1tv8qKmuT7P7ViJkSwCpGGAEmZoW91Ut8SNVraSshCe16EAuMp8gecUyWu",
  "key21": "2BCC2RH6HFD8aE8cebWhLfwB2SWwLC1KcsiHR5RS1yGvoAEXbqSSeChKc6EC8XCz3muKc7uF7f9ohp7GXbJrQb9X",
  "key22": "5Gb8XzaqcTbgXAAtG9P4oQRmUomeU1thAmDPks1sBX7DnjHFNT3W28VVsgEKwnLC7jvvCLKHQHHkTowvwiqQ2EX8",
  "key23": "yjW5cpK2ks3G7YPD7eobDew7DvUpWgXC49NBSYy8peoSwFJEsa4BscSo9WTyRVHbpXLGjHot7kKUt6UfbxTMpeD",
  "key24": "iPkCBtnmVYFbBmomsMP8xkmfvHrYghTefk7xf3VX7cxzZjzoD5wcbUdXb2LvzbxkmVTWnNUiwbYqZGJMR4k8wz2",
  "key25": "32NDKxymwD8WQhdiJ2VWbBdsaYS6gKu98XdEe8g1hCsPNUVLPBTMWCXpjEqFnMHwkzt9YhhRaaYTVnSu77G6gGRy",
  "key26": "5UFFZHsoUphNRJYkZUz9jwNfREq32ukswb7EWkPuPdqGVFaT3Udw6vpmLAzZDdMUpmThHx5ZqYFDZeM2pngERkEc",
  "key27": "5cGbukuraWNAhriP8GeiDGE9Q8UpuV1FehgqB9DNC3k5nGLZXfRbajgGceJ4jTYJLKHK9ftJ8khv9qp8WBwFfUN6",
  "key28": "2fWoPZsPrzGLgB5twSfQvdWfcFeamszSVnXZJrFdVKcGDwGDPDajfVmjshgNDD5eBCtWx2kjsmntDt9MrSYnpHh6",
  "key29": "2q846DdLAbkokevNYsAJ7U1nhqM7afamKL42ZwFJr29d1VbKKPw4zQNwYmrQ4N3dNAkYAXuyQCd98duTAnQFnMv1",
  "key30": "3NkJc9qZQ32ediCzDeQbJz2Vjk3VTVtGBp9oQ6NL3rLp9GFxc9tKFNrf58gihPs2pDRGHJ4rEQwPWipvigBkkCZ6",
  "key31": "pVhK12SkRwrhnnAYqwiAeANrQ9KNSZdQBwz947FfB9QSMHgtf1GgwufkNAUTBLkA6JVoEgP8cMMzLKkRMyjKojC",
  "key32": "2zL2RTE4PbfYGhRz3fSS7r29KnxWFiYuQzoMS4ZUeJcVpTdYuVxoSbnmbCTVd7j6f2uujPPAXjwGj5iFfNopToUi",
  "key33": "4eWaKve3P5nXQnKm3WTzpvhY2EXGYSWhUKr94mo3SbLRCWMYPbNQkCZD9ywDRopoxa91at3RPMy1fRcjuaHNCps6",
  "key34": "29pAnwRt54h9bTfAdJDF6hRnQXMwpZa5f2UJC4SKmQgFXf77pdK9LmACKgRkQj4KWco44bo239DCsmpMbYtaQmju",
  "key35": "4efszLVTaG3aNkUAsFVMLUK5B44qrh3CMDoAwNkbJTEvGaHfp9DL9vxbsiAMGZr5aJWw8oXziMjAwNX7bSHwKxUi",
  "key36": "3iknrMCvjvpQmH35z4maJ5aQjJdhaqwBEZdo5HicxQCQ87Wv1PwLniB6sgXQ1J5FKSrFsRQ8MpsL8r66gab9NM3z",
  "key37": "2RbytbFW1GYaBQ6C2b7y3TCf5eSjrEmSMxhRnn65TcSBs6Sj2h2yMKpusDqYx65P7ktutipFgJwmZrEPQqUeYQ9Q",
  "key38": "2KkhxAbRSgiLHCFRJSbLSLLufBxwUt8bwVMpV13sUL23Q23652QD8H2X4V27XLFSPifw8XsZAwCUdyCovfZZKvUV",
  "key39": "3LAMNA66hqNPQ4RnxPnChtKPQaS4KBCqPt73ESAdP1LiuGSde8sY1qscSaSNjjKXhswo3x1b1dTFdg7pkxKon8n8",
  "key40": "3mWGXYPxYeCzysgqC4drSWcdPk8Kcg7mBTqinvvRpSVz86LavQJ5WfN4eNjM6RFmDrL8PJe3GoRnTid38UYipgzx",
  "key41": "5czviZZwKztG9VePPhknUEVvzGJy83LKsYzcjZfMAAijQxJjYrxnrHCJYQeP4bVveBvkabpZmjxhmvFEfZ8LZYwG",
  "key42": "Tz5D1hDr1WFa1PqDLxG4aLmUzwaRRd2FCmgHTyUoeHLxQBh5HLagrFrXJ79a8wpKPt2SJayC9a9ZVpKdzyow6qM",
  "key43": "4wAqSoLoRRZhBPcK8B2Qcn6eWGkmMgW98ifrUMFatw3jDKqR3kk3LwLcqnxMYsbY9pZrUgKMJ91tqgP1Jvud3ivg",
  "key44": "2eaJX3cMs7ChgVW4txbyQRYtPa2SFob8E8NwZnBkSjrSxH9wxABxaFuFsf8VbsngSATSc2vGxjEtbk6M3ZzmvFfR",
  "key45": "3sGF9Y3TNixfSQFwidg3uh7dRwHNn7TxGGVfZRDeyAeA7efSNcSvMs7Z5jGYjJKG954vrVvoGJCrcS2pXLS1s2H3",
  "key46": "5FJKXwH8yEAwXFCa6zZi8g9kJNofGcaGyrhfd7xejG1Lxb7VS4EtRhFXBJ1F8Nhhs9QnUBBjtCPDTY3jpHRExc6L",
  "key47": "5Mj1b8pGYqfRxnRjvhdn8vaSDwD2f4Hz4X5aE8oZ73d9erMCNBkjNonj5MKNrPr15HhHYLqXtFUF8YVpyracxvrH",
  "key48": "3yJgv2jzs3cY4LAWUXtZqib6MgZPQuhSjbr2YPsMvapQ1jqDobuhUVysbz3yq8LE9jS8cA1eBt1iAfuv8nqmU1M1",
  "key49": "3gWK4BiRNb5RGxy7GHQGwwqzGcAgtmqwa2mM8pgGDpBu2tmJthRNPBjpThATViFxUxoUAzQz7dq2pDjNg6io4HCi"
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
