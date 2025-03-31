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
    "2JL6fjZr8qpNgxgJiWScZZ9z8WFNTpiViZUgmhWaqKH9GqWgQjtQRbamnv2MciPh9cHY7WQmL1q4kP9T28UdebiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JvVJqyufPE1mLfxoHVeVk5G48H1YijS5tY5dYqNLv7DhyA17XQRyeZjNUQeZewMS6LZ3aXpd2QaYWkWGtfzxqvL",
  "key1": "3qkepVD6dTViwDCDb3PLKgQhcQT3B7auFCnzciLocgJY4H3i4mAUMWubZrEa18YqqWen8vXjzFNJrsnjYDjEFNh5",
  "key2": "45PLY17EUes2rT1FSWBvwmZZmZx28NeBV879vf3B7kyD483FHHykewcQRBkCXYwWgsBmaPbEHSbYpJyTAqjZ5jHa",
  "key3": "Po7UDvBcFjhEM6Mu7ghRLNPLm6RbqUJ7hytyQz35Z9mSvwPj6tWX6nuPNYijvn1uj9KYuLLLpt9nkcqjFesNxtE",
  "key4": "4FNwhg8zrogQvhJFqKSpiMjWHPeQD67Z2QmE4F8Gm8JHFAitaKqiif8LQEEatQPkUQQyPK98Gy1jmXkGoC6J98tx",
  "key5": "5bMk1a2zL7E146rNXVmDFBT1ErPoWgwpwi1YhmnzEJfg3z73AmDxc1h4nWdqoutfScTRJs44HYZbQKkM1387QigT",
  "key6": "3PvEM4vuLg4pv9UijWGRP6Rvo364RnZgWU3oitaDrZ5G7GXPJKt3YH6VPgENGyFcGQ6oKks8GvXfJY9uKDXaB43d",
  "key7": "ufzetsL4RzAS6HTEwgUgqxk8mcWdB4trwEqPEW2NjTP52Bhqn5R3LEr6nMCsP5uBeeN9UxMKoZmfyhrVTk1h29k",
  "key8": "2eZjLYLJ97KSyJRZEjamQQqL5V3nYhW6zZdqjqiKZCXf2XJWarVHAHZccrtr4jW7YzgckNNAPaQHm9dMKKLo9qRK",
  "key9": "2UGTZrzeqGBS8wcrn8h5ygKgDkxLfK9mFHQgUGuSrCeZQSMGpNKB67JcZRWoUpyTeBc7hC6GyZEsdFfvv2MPegWL",
  "key10": "3b2SAoNrtAek2BnPwD4aBnC1sCzGwZt3diXZ1iVFaXxRozN41yVJ987uX1HU9xnHzRsbAZi5eoqGCEucyJtEwdxq",
  "key11": "4oSFdkH7Ept8iZHtAucsq6WS36EqgwakkqzZZPQ3Ripxetz7JKXiipnoZWZuVch1SNjgAgBcdzvG7mPY7UqTZ3pB",
  "key12": "5LHYH72MZiwbvACLyTxMexXPtyQSTHRXKU4SKkZgf7qmFSQaT5Rx77sRxV3ZJ4pWMXNp86FYxj5hvAFan3M4R8Uf",
  "key13": "narM3oHNETbUtvLpYfNpSZ3DPTK87DBPnPHsmB9RPjPTCycMRWrFyXw68MEdq1uZQqg5ZFK3LRHZakeLoEQLsc4",
  "key14": "kuZQGQTZ1pMEC2BseMvvvAFYBbyk6AkvRNDxySDtrAvYkemQz4wHP21ZAzCPuKQLWam9WyKNdtayLcv83nTY1zD",
  "key15": "tTXvnd3gi3WHxwNQEEJTs1spUUsZHn9WProhL81oK6t9YNdmpc4UTqShpigiqYZpDNx53MQy8zf82RaMeQBBfoa",
  "key16": "V9TSAX9yA2vRpYMuj2TPTwZ2WRU8UCxyEE8WyP9qNfVtfBsbMxArbEEZvPxDdjWWbjBVJCtBSMxyVm2sWoibXCH",
  "key17": "2GagUdKn1YKU8zxYPZBLsurcfRS58UqpvjAEZbwa7GQKkQR3w57ZfYrrmYDjt8XBWGaFpjDkHSeGTdar425xZMnN",
  "key18": "5BEddcLpdtf1arpCiCPkFDVq1NehKtPnhNevqvV8PtcuDfWfy437ZWgpxzEbFFugBoYGBD5iGYfC9hB1UmJtiAmv",
  "key19": "XcfhbnpvT1r3xLVia1TQ8EmpX8w42TCP3bFMsdLqugiiqNBGBFT5UzT7RKDTUb1aU5ymKk4mbZ5n15DdKYYJSdr",
  "key20": "M7ywKBuHB1DTx5W5ZFsENCMpBNSm2YwBAFoaeDNcVTZASbZvpwjy8m7JVSHDqsJ1RXTgWJmBw5e2Yh3q2C339BA",
  "key21": "673iLNbXmZV8VxE52kXs3WHJsR98MHJR6R76kQv3Pc4xLHQ2AGq6Z42tVPd2qUuhZFm1gTagA29sF9qxyGq4wRB4",
  "key22": "3FGs8CM7Y5ock5a7gQegDMShnrCNvZohMkvLysxYW8qLAmBpQvfCGyf235uCmjFPop2ixaTvqdf98fScWTR5FHg1",
  "key23": "5oN12u7iecH7oh8ccMqfjfbfcJsG48gXc4ErptZo622K6QBq4SKXrBqze4o1nhGBjLiTGywi8CDiqrsXGSMGyuvt",
  "key24": "4ARuLXHDTcgJAGEGfK2NN88PPGjNhpV79HANhjnS8YgydvAt4jkn8hrnR9155H7yCAu9ucGkBfAXAxcChf4MWRpb",
  "key25": "2RZTTrhQFYEDa7n2wnej6S1JNTFxkKxB1de3T9kaAnJyFwUvpQpfa4zdJ88M8mZkUe8PDrD6wkBHSoFTemVfhjvS",
  "key26": "4oKv6E6mq94e8o5i3j3RwaykBZrkGRt86WHcs87G7tRSVrWe8MxyirosF8L7tUiscnmCJQbKHbUtnEsfMjYwUxzA",
  "key27": "3UBCUfyxtZuHXobAaeAZUVVGNuYB2sCwvqRjotDEryQW4JLnKzzgaPm5UhSAYQQ2SHrcp8zAbaLgSHc3UXqeJ2wq",
  "key28": "3249nXA59AVqvTTyFxqXSZtf4kUqr53D6wxhXnLNhQiCUBU2p7C2N4z68dUEER9FWEkistXbQJSnDTVyJWcaCDj2",
  "key29": "QANkniua3UJ8DNpQ3ck9tYwbzGmXCUC1cTHrkzP71v4Qiyxmnguj5n7ttPrkbAcm2SMQkHPoLU7YiuoZ3kLLq9F",
  "key30": "4vk9fCuDtnMhDHRXsSdYaS5NeJymMRiLrjYZ2DMZ3Nit9AWLkfhK2zAmmC1oJ7hsnr9HoeJm2AWWPjZV7DN791RP",
  "key31": "19sCp5p71gtVcin2wErdrBv79VLBi7HrcEr4NWP8Xu7xoWfrzivcXsAgnRKeWc4hMW4mi5bh4mPW49FmMroKXvJ",
  "key32": "4J9ToNBw7Q3xJqLL5RFKG4KW5xFoTLUecNqKhUQFxhigLYJuNQjtsDB875SE1mMWt5RtatoDJvKQQ6JboWWyAXV1",
  "key33": "5MrFm34VBNfNzEW2ypR4xGXsg6knFKkfzY5WwJSMU1PGkmTLcafCMddiVquoqEyK6GFYajijNnhdiQvKAzh3KD4t",
  "key34": "3gcFswdBQxiGQdz66UQqVkmronhhwqucvoEGQaFcDzS4shqnmBHbHUfskcoFPUtXgMimP3FuKJni5J8Sbn7rBFJ7",
  "key35": "2EDjbEfMq6MpPYXTRsZMj8kpPYVDdRRhJ5X6c347wWgfzWHJnW9iHwDeypGrcR5u5oy8xCsHTcXK7Na2QWaHkJE9",
  "key36": "4s6vS27p4yAqNvFK6NQnmrJDHwsFfNFfhzMTCKufUid3mWpYqtoCHbejXWkA6b6uqsrEbibfrKWpHpPrVVujMpdy",
  "key37": "5UmRjrMN2EdnNLZeXQky767SBCniPZMTZ1ApzYoWNYxHdesfY31j3tLCd2VMd89ViQxeYymkCxvxfFK9X4AejUsi",
  "key38": "2xFYcFK841zcSYzo2odro1kxrje4AW3zWCpWYvCAXEVo87TwsMz8Vd41kEBbALZk2xBL5k1DdqdyfVmxbjsY2hZL",
  "key39": "4NSBsDy7qzRwNkef72ENaTwowrm69sWmMnTLiKuw99mt3CnXGirkTLL9VGDPmTvFcTW4eLeTog33vCBVzCgn9EqN",
  "key40": "3F4hwUjQYePRxzRiZyoB1ZXHe8vhkKdGYNR4mAuWsFZvadrbt2RGHw4cV1CVCQrNm4KQFxUDWdCBC3Yh5K47oMqL",
  "key41": "UMrnC5L3diea138S6AncMEXi55gZzia6hX1jaSiJptZLUfeqDPKGXTKKENAcWr8YyDpwZNamqDzPY2PRxJCrA8e",
  "key42": "2hiX8A2yK8jgydkDSVTJJbMzUbeRjDJFwWu8hwKVYe75XEUwKHYAcpGTyMTC8VQ8J9D8rk7nS5heAbWH2CBUjHTk"
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
