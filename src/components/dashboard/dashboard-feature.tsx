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
    "2FXZetmcSwSjfK6ppXtUadyguHFdYLi3VuGo1qM16sumRHedSi95gGHCA4yQbR9iTNdEWTZaFQoYCHmomcyJWKKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFtVXtf5EDAxCKtWYmzFxdErcQaXcZLr8AXTB7LCrq77VTuJgzXSAHviHnyhE8f139rArSkJe14vmXLCUyKQhBa",
  "key1": "3kxjH7f5Zc3nAPsrfZVR7sTmEeVjorUAqVJZBC3zVkwySRvrzm6GV5JfnG4cgJ1SQbJ7rVri6Enm2HAowkW79zgP",
  "key2": "LKBLG95xJ39zAHqvtQnedbzK2nbkCh9c1Tif2HZwNXPK69V9GcKt4VetBGMSiHJGUaHFZxzfPPJL76euBR3PYat",
  "key3": "62WhY5iU1AzVmgEGcpVGr1moWnHGninSrL5iue8h1XX33VxgvFYr278EdWJdEvHkJL1BcvUPpQyiaNp4HmC1Te9w",
  "key4": "ffvHzBsXUYjAex9fCiC6ZGJHxg1f878oovTMj5y8mBH73t7wgbL4mA5RnMWa2Fm5f2tgyKu7AgotnUsstQGnLo6",
  "key5": "bj9WeyrA1JD94YinLG17qdmBGmF1g7KGgkr3MnqovYbKBNxdm5cjG2auWp9dWVpwvqDfA8bhkCxWuSW6YfMurbH",
  "key6": "5bfp3g6XNoU9dpmf4gD5W3wF3GUb1Fsez1UHxe9ev5ysayK6qpE8kN6WxgGAViLRdFbzfuiLrx2dv3Ka5UeXB85V",
  "key7": "5QiKFDQMFzjwV45ywmzPzY5KAKDLs4d79AFxntegTVG3hQUEtFTv95xT95QD2h3oGmCAT8paDVCXXyU7N6dXpJz9",
  "key8": "3tcQmCTdhCzKfjVu7xJbt51PoZwxjVs5ySFrLtkvSxpzacXWfF7uioJqUnuVrtBmXUnQeSsLu5NLy5BfkfuzXvxJ",
  "key9": "24mcRo2LX7beskuTfnvB4gqavrPY2FMU9PXzArEGE3S74Y1CuSdSkSeD3Z1CZHYN8hYvC3ZL6wpGMLHMCzErd1CV",
  "key10": "5Ai7QWbjUThZGVH2hZdPtWNgVPAfYRQSm1EYhhwwWgf374R6huRuVeJh9qj4wAPmUAYFKz7c2A5cuLuapZPDgu2L",
  "key11": "4e2zrXnEDBfHGv9mTZ8QE8M4C3SCNEm9ATiKXsuS3NnotQq4weVD5V6TYQ425jkLpFgDFavpHx1g8GB7kJqW3RsC",
  "key12": "3xG1HsQapLoMcTpntB7ABFoVMdEv53BrrAy1YvuRpk2Gfp8FgpaGcCaxALvcHjf6fiQ2pRMwCWAhKwruXqKgJDt3",
  "key13": "McygDjRwnn7WvgDgy1E5qC6h55rena4PhTLVtNuDgMwg5AQ77PSepTxSpjv4AJKE4pYi4qiLWbn5omWSGvHjpAn",
  "key14": "2sgbGfcoALQQP78o32zjvb8LRr1A32WXkeEWYmRJ4mHwimCP75Nxz2ZTAg4UpVSey7NpjemrCcTFzNGy1Q5wsMFc",
  "key15": "38q9fZEMc62mLfcPuKZrLVuFMcZnrrjm3xTncpguL6ZfCQjyes3zbeRaGUPcBwNxA1ngx7b4inGffrtfqa5wESUX",
  "key16": "4E1hXBqTQe2o5yZZLBcRBoRzfSgE7u3AE5UVsM8SBC8u56ebVXZkPxDDWbUXLsHuCUBFmGCc84JxLEucoBmRyCMC",
  "key17": "22YcW7pL5m8CTTnJx2noBj5Y8gCPXSnXjipLUcZFdwWvyEyofWUXf1bvUp2XTcKBrkPtWDs33kd2YF6ko6BzdqqY",
  "key18": "3W6NFMs14rWrZLf2nykzgdY2vWsVuoNkAq86NTfZJDBTg6WETWYySK6zPto1uRZ1tRa4DhNNVUe5EpiPkhRtEwxC",
  "key19": "4Zqejnm9deo5BMxV5esAL6mA12SkQVugZ88DYwB8epmqciRN6E7ZoTFdZPqiwMZM9E6LgRYVpGEoJ82D1EJFFo6c",
  "key20": "xoV1ZgaYuVM1HfXQS8ufDcPCSh7wMgkhQGRzmJtWZBjhNjUEAqc9EWhSmMc4E1ohuoptkF2pbW4dFqJNMjD5mRT",
  "key21": "4cNWm1CdqWxzQ2cwqingtPgiAGPEZbznWxqwhMUgaR3n7LfMmZE1LxKk3cZZ9Ux4Px8o3LN2H5bcwMq9Zq7MEMmd",
  "key22": "5apRQXSG7eAMvuGcfpqAdHSo2QHa7tt93Sc7r263u7wfipqUSDrBCXVx6aRcCfZKNrUTLsDq3jvqDwqzxHZjSweD",
  "key23": "5y69hE7MhSCV4nHHYqda1Jpm41oeTtKGydhCB35WzRzryqpUxi6ouYeqXVJ24CvkFQYiXu5BSzGU5muXPSiiE3Du",
  "key24": "JwePVijJgE6Du8s4E4QXbkCRJvSRxpCudzqDV8gULUmYpDMmUm1C6dynUdY6x5tBmQMz8bCvn2rNEhXBKYJ8qK6",
  "key25": "4ZEF1nSJNCt1Ktj1rFmyFnG8EFviuZue1LTRd7agqgtizn8CH3GYVmNWd68MzbXMdvTRReJjHnsePav8mF6fD1Dn",
  "key26": "3qAesGyjeTBwtksJF6sEi3e9uE2Bd7avUbb7zL5aaLmVWa2YW7fMRdQF2JTnZeYutCR7gM7ZennMfwEB8zc9LAVa",
  "key27": "4s1pbStGT3H1xYZj8vyb9Uep9eHvpCVakSgHQjBgweYwXqRRH6zwPRVV76TJYCSsMSfq4AB2zZw8nYb4qB1VJuNQ",
  "key28": "P6pixyKbf16tk9qB9e9GtNhobyEUGKFfKBttTTTwpnsXfWZfKYoe3Wg65hqQgqVsQ5CY5hVse3KywNXzJd6p42P",
  "key29": "5c1eL52v7zW9EuBcXAowAZRxut2P1Hn4a8MrQYpm9pA3WiziwVQa3bbLfWRDHK89hfTfz6SPBEK7ih2tyA2Fvs52",
  "key30": "45ss8XP88q8oL8UVguWvEKTLHgEt2uSFYyFoxZzqmUmwHd884jmKkYERRqoicsoPmZuGSwEwY5PNq4ezpCktH1je",
  "key31": "Af4grY3KKpbj37PB8yYMUsYfMJQ1hSiW6R3Hq3gM5heTim61oB3NtCVRPVhidZXCehgA2EHBLFrg5P9SGAXzriu",
  "key32": "3g9HLvEFHyq2aovt4emqdKP9cNa8bNu2Y5Gmi18wY9KbsahhZaB9zL6zpQ6Bijqo7ZyWoKb4JF4U1RmpUX2FLdnv",
  "key33": "AaqdMTWcmQQYQErCS9TKP9PrCrezddN6c1FUbvZXJ5TZFetg5YgNDekGuHze9HmUEY2EdZHTd7hcZa3J3gdj25a",
  "key34": "5RpU4cxgpFaL2xYwLzL2oNTBBGd6kzrVzKowzNAayL6yq3F3dBEoxGaKCC6gtASQj6V6mgs9CR93ZLkCZV4XWCJD",
  "key35": "2M9vZBVEYfnKtcSoGgjy9hGEZ81sKTmaWwDmaY4NftZuskey6mDtEJPhfUs3jxLdu9ca2PQN2pgDQ1hnatU6faTY",
  "key36": "7pF6Vhr77QkhWJ2wDDKKBwVpfqGnc1qbNNP2qdjXX53gHiYoA5UWfRPDpnYTYrtbG34DyYjnCV7Jh1irTLLdxVb",
  "key37": "5Bp1VtftyhB2CnVSxxvKKV13GUooS2XCenYhjAJ7NwfF36ziT14qVnmKXhsgJvvfhhKesGtJQ8J1SRx1PKNobaNJ",
  "key38": "24sKXKxs5XU2NufaGatWnpj32U5MzkZjNzcU1iTg63EHF8VD88NhbFUxnQ83kzjp1mGTMY2dKD1U5fbe4p1guA2V",
  "key39": "5PKkRczgW4nuct2aMKcJuE4uiKk9UWeaHz5E2vBJ3j4AyX61VesSgEbifuR1oA2b4LDUz2rgMtPFd6BVdk14Mika",
  "key40": "5asP272gaRD2JvKnfmSEvudVJoHzezEgY26FEZKAfZPbG8ZCWAv2kaSUWH4PStAsYsxrujqMH7d7t4Vuf2MZatUV",
  "key41": "4y9yPa8w8mHju8dJobuGERSarKmygtDs5RFiwpAfbwHDxkghb8o2zvvyQZxuTaBHRnci4qVBgT19KmGWJLzM7fsF",
  "key42": "64szoAxiHjjEtYE9qeQQsMkeyT11XSsXv2XQ4rHsYLDeoHf5dCztNd6L74ZzYZXCGdyh1VhZPR1ns4DSFgj6Cv6J"
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
