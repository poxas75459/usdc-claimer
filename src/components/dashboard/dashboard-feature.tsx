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
    "5dRh5ncdHw8kdvNHb9j4hv46G5yPwAcPje29ixZoyd7n2BjAGPrXE7urbtrLjUqdnRNCQt1KQRLcrcrrFBdemguC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y8nCqbnwgHwcvN6TT1KvedfRg7qLEAMJiP2AM7NHjsN9JZW55VyBuVkHf5KkCQxP5cYe1k42fjRBCCX9ADSMNVU",
  "key1": "5sU47aVhDuD2mr1frNNma98fFT4m2Xc8kN1gq5WxWKNWUKoYXnZsiaFETd8HzS2KXLrydAhDx9Q1CaHRY9zyX4LN",
  "key2": "QhDyeDhzAic6tHJZm2SUHJCe9f5RqczATnwMBerxwoSfgArb9oG8apiE2kpi9YGtTQfHR19uKYTywra45nN28Hh",
  "key3": "4vJgWh42Ga1M29rtgRWL8EWqmvqV9RG4LFeeBc1ZBiat3QgBiSPoMiLwkBksTLQEyVtpEC6ee7TJqo4agyKWyFXX",
  "key4": "5MTzdUfLtnqoPZTNELmSTe3AZEW3Kipr3oc6jBCmgci5gfKRbZrHJtDGH7XX11WuRq9dW9JSBoqUwP4N8JxcKKPF",
  "key5": "yuZfcGAczBmFL5S69ECaWtP5aCkL8DCYa5epRuKHv84fDfdxKypZuavivoar3XBj7NWpyYGMGJJKcyJCYt2PZCm",
  "key6": "YjuYc8gn4maemDeaU4k7yEWQFfdJncBTzAm8WxAcJWTzTKciS9Ae8MSqsNeP3kUz6Z2EtaUzWwWgvpFneAW3Xof",
  "key7": "5SLnEuBgcMPgFvrjoEUDCoP9RFQF5mjNbcpWL5r6bcCSJbp2rKx1UhNCfBmAZfJ3uXznMZ9yFUwQ4DDLNucbkBeP",
  "key8": "4CYV3JTfWbvZGVuS3BSvcS883EjmWwKsqsSDYEUGTTfwzCwxzk3AgpJRc9UUZchzNzLzrXCv5QXmMjeAGMmrQHBK",
  "key9": "4Q8PGHMUuvgqtqueSQnJttipusFF7PuaYbDUkuYBAy6fM1R98ruw14S4FKu5iougvtsBH3AmhFcVFDkoCWTcn2XD",
  "key10": "33YbY9MrTu5Ue2NftWbHLbiS7Qen1b5nbBXAULkfzh2yzHS4xqfLZExyQ5rQ7euc7CnQXRUW2dTRt1WBqvnPemiW",
  "key11": "4cdKueS4w2sS7hQ8zYd2kpUJYbkRetnL8biSXkxBDrD8fUqAW7nyuiiCGeGQAdP6628NgaWYJWPDw5hqDFLZpN45",
  "key12": "62vHFLG4rwnBGRiURMuNKp1bfKEY4gysE45f88v4kBYC3Df7yDmYPweQJMyaSV3pJx4yitSxzS2zjsagjwQcAUYU",
  "key13": "46rmUF9wNVzokWHnc8Y4QmDfE3RYSr5B7a5sW5YMqcPKwU3j3Te5yTPoecYnyLkYqeRV1rbb8eBGYS4h6PFPKq8A",
  "key14": "2jvMTMHxw3Z4wBk8hUygrkTrk2z9cifVvgTGvhkUYsww9m9Y7gnRJJLVihp2cKGVFVSSAsiTupGwjq3tim1YxXLb",
  "key15": "wVP9wYHNDupGX5TtsHwkd4CFW43YAHpgRc92giQD1YEqQfED9X5AnZfiaZxvH7T4iB2bid7JtmkjbDTG4U2x6Rv",
  "key16": "3QMYC6Yvn8xc4D6TaWcFRnSJHAjEPQT29ym8XSnmaBLF7iRmC8NvpcVihpDPQb78XYmmjoTDb1mn8nRJP6437NBp",
  "key17": "2jmof1eJMGcafjTW1kM2kD3JRWEU9Hjy2QqAXoUdS1sxtPPK4iH9ot4CY9SGo5m7KjANXMcdjhmPBqWu8DhUZgPx",
  "key18": "5kULxbjeZVjLgp5dupCoqr9TxeeCuNfNqnhJtgwK7xMugezfE2VSf3a17kVrLtFMcu5rPauZ8tNWz5mLhyY83hFP",
  "key19": "UjR7dehLxbTtMr5DfPdUj9gyYzBbfA6YpNX8ZmrDNa8zSVXtYiyk4aw2NgrgHhyQUMGSGfWCd3KR23sEaKmmHx6",
  "key20": "5TGykUJbj5ujL7zdTJUVWmUkdGGQYX4b1bvBZN6TGgnDQwtQorBxDDdHqfg2FxeqaDr42Gfohainr4WYtyhvM6Xu",
  "key21": "2AZsMJq97WKS72Ev5jL3hzx5DWEuR1j9iv2G88N7w9y7J6VomfFN6B7SAbhmcW9V29fgwsRk2ToBbXzYV9ukBfa9",
  "key22": "2s5LDeUzqJgzpw8Ww7X1PpFFxEZnYm53H3ehtEBLfCiAuV7D6SeEjEFUWcdK3rMTHm2s1ioYSmRyZR1xckj4uQL1",
  "key23": "4tS2ySXxL1F7tGqb1SRG2JxkDpKDH4H4vfSWeXudJDppyjK5iGuHoKSS8sbXTrM8qR2uPorA9n5LqHiDRD4N8tsN",
  "key24": "4w6AaFztJe62T161qF84sD4HHFWYuAwvPBbES8qWgAopAkyNGBBwXmMLZT8SoVXYgNUnBFsPiGVt78nxfHCs6H9o",
  "key25": "56Hm9fv13PZGbYRHVeNHi7VZFaR6f6PNzVHNBDtpawHk9RC1SxopcTrrdxS3CZmpdmze7VFzySQUhQMEkUfQWPTz",
  "key26": "4D3Hzw5MUyaiCjDDBE1hM3zsGhSxh8yTPnNQ735qQUTQ8wXkfebU8RpHVPMmSY9Fo8gP9rhFmmhHt7mhKLQzkpg",
  "key27": "2rRfsp4vyXiofJhXFBPycnD4YuZB6zwujWDduL4MpQDhQdVYnnuaRZhohirNpj4Rxk6q4bP5iz5256imwhv1GTo4",
  "key28": "64T1y92yuTup3fkTdeL4Qtyb2uTPMZHNS2fiD1sFcmvJUPLYCA3Mq2mXR5WcWewMVvTmrfhWDDiuxjrHj4xwUDh3",
  "key29": "P2ESGwaou4gwf56KPoeNjjNP2Ur5wjoZ7ttyWjV7cw2vrSsvg9CU34QaZgcKJB6xeCy6U9R7iuJxDQNcNiqCebz",
  "key30": "4ibj566YKgoGXjx5R1cbKtS2fSsvnHNjijBTMmUqUrfnHVgb4VdpgGh9VJabk4vBkj5qWcWC9Rg6KhdVKvse1CdB",
  "key31": "2JGBdiXAbRCDBjzgzzaij1FKCaNSG6oSJk3ArL5PvDZLUREuVsnYb7XqvS47UEZhSwMcMjNhqo5Y3F5hTSttqVSz",
  "key32": "4X2Kpaqdrfkzcf2C76TZSc8dcKmnNkdEupoE3mi2wipgN6ym3P7eKx3XM2dFJXHnJXByfRJiFXBwBoby3NAsKhiU",
  "key33": "2M3PqeemGxz2dGHwUQBRBFYdvD2Lbjpv2R2k1cKh1XqtjmyFSf7VG5S7WaCcg4dRTEBwvHBrrrTZi4zvVkp5ZHwW",
  "key34": "DYE1J1MgkL3S7KpKV6E1pWdndMZYSW5LqnarrKByKHPPfoYphkf5rgtzyt6GXwqPDD9JPFpNe5uHP3VjeLx19wX",
  "key35": "2jG4BMgHfkyhrKQoEeaj8fqm2svY7pZf4Ef6bQTuDEGxBzs6ZSbbuYsMWiaiZaiLSouuhYfDFGGackCsJtwyfuK2",
  "key36": "5w6co55chHvYzsLBkGCYnPeURMfTW3vgSXt2NDmNg5EhKJ9jvBDfEJkGP4DYAw1Vbw9epndRDdjqUjTYi2TGS4mM",
  "key37": "46sdJAT7tyFaXnu5MXd627ws8nm6s9RJJeoUK1mD1dLc75VjoyEv49ohsfpFzT81RUABXP3Ge2kapFgXvqEJ2GBV",
  "key38": "5mYncFk8thNLvvn2G2Fe2zUAcD7QaNEFKXwbUG1EQyuiaCPUG3m8sspsjZYMzRYz9fkpes7DJt7YqDJZK1dqvYQH",
  "key39": "3rwcMVtDZhXDrb3NKQDA3W5Vc7FF2ViYKAiC4orjhWxyhhimxPq35p2NX8RdQXcEpHtczqYa4u2WdoJ7acsBuqja",
  "key40": "2khmbmCS6oVFJatHnewCXq8zF7EHuC1e9cgqm4KXz1iEPz9xnPVfGKyPWs6xekmRg5mrJszJZkSLYtjzE3v5F7sm",
  "key41": "49ofWhnh1FLS6FAKAREc6KKd647DcEMXtcT3cGSCTJAaTaWNVBBcQm29fV3v1aeHWeKmEk98aU64sM7KMdoxhsFq",
  "key42": "4AGAkrCrGzRT4SFxwv6f9usKmLc84YtxjEiZjDWRobBQe9ZuXZCBDejWQHog4jy4Pk1YY6biSq1xRW7RNTWgFg2y",
  "key43": "R4XoaBqu1rMkG4pRN63hv7uTQSQmnAMyTC6scSN8qLmmEYcaaJTtH93XDUxqEo1ckpf1JBTF3pS6RF3L79SXnp2",
  "key44": "3tFC5kzrJtKmMtsBFSfBANd7MuL7Lv3ooehf9ttydFAdXmxL5t8F58BT1KQJVeT1RSMmuYAhMphoNr5UsmsXuaKM",
  "key45": "5GWMTjkE3kVuXCY7oWXpyEUv7qUMCwQE5d6mSJ4rsnTMJ9aX4bKB4WZC9Wd2SLWaQUk2KaGUdJSZgNG36BGc16Y9",
  "key46": "3sdw6X56fzxHran4BnVcfVRueJMRURwLRj8zVaJ92r5R2yZgvWTXprQJ3C5wwapkSKyBVK2TzV3RQBnXhHE6HCTW",
  "key47": "56bFaNzpu6S5Yxj5yrZtbp4wn9V2hqGHDoSiosKqsA7qTNoXzNbhm6wEkwkqogUi4w3crVPwVCJtnHJZ5AduQkw1",
  "key48": "4xRsPJorsh85fm4gsnq77jNu8hS33LXLT9xdbEk4Bof3BDR7wSDqDTQJ1FtfmCcTdANbGZGbpV652FxHdCBk5KBV"
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
