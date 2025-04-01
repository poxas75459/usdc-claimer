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
    "4C1HGCW3VdVppuGWHe6r7s1yhBqGWiVPndBvPhbisY3abS1v6rk6hWoVXuLDkPogox5VijL8qFaqQogeXnWVq6QM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b82cCQMaxoMBFoDf9vnNn3eZb8jtV6moTN8k22ezudmELjAaKZs75osdt6mvs3f82qcZgfh1L5MfG61mUrryuZ4",
  "key1": "RCzNUSaq7sV3gLMbcEoUCYTaxcCFkCSJyy7tEpuV5whbaimYii3qL5sTxFyB1oG2KyWvoWU3Tn5jpKZiCBzYNXc",
  "key2": "sbCKrpvLrg9xCZFWUAMQ399t4zCpJ1KdpwqzXvzpLTinsZVf29Hg4x4o7xnEQNS7BuawoNth1hsos7iaLtGKwzj",
  "key3": "4Zt4SVeqNJLq7Q1z3wwRLmugFwWghfqysAPkfmdcFhLWEdBazb33VkhznxxibUitozaH8aQin185v4GcNWoP5VEe",
  "key4": "48xWXjN1BwZLaY6rXwVS1BpuwpyjCWWPfBCYh6Hi6Rx1od9sS7VotVeGoaM8ZXMWKUrusjDNuKwYvJ2NRtbyc7Sm",
  "key5": "4ZKTLQTT6mtzSZWgvQFrrUUJDuFSCYUcDjBNzWCGUjHoRjLMkjXJnoujxgUbcN2TNCfxpZmHU6UhB55x1UkxWJgT",
  "key6": "49zMN2MtLhT439kY6u9ZvnBPSewN6411r1Zu8XC5fFAGvKswCLut1Q4yG9mZ9AKs83qzhXxuRASwrh8Qix4e5yMa",
  "key7": "3bUxGdPB1viw3b76Nkfq83U9y222JqcnUjJAUDjamxfNBtUcALyoWqZ8TzQyxbqs2KzHAEAHSWPsw5ZQmaS5GseV",
  "key8": "4jLZYr1YSt1Xh5AZkvW2fZW5YMtMk8qsHJUNrCR5pNvzJ3JYfJ1pYUuxBvicSCBMi3WqHz1Unrybr7qGs4FstU8y",
  "key9": "rhKmVNRYsXAhQjv7gMwRPxvMCESxLz3T7aEmyT8mBbDV3kTU9YsAfichWDLQ9ucCMjrTuLcxw9NpkJnk1E5mnjV",
  "key10": "4AR3qnsxE5xa1bFdHfHw1e1BTvzBp43pWUMtcPoWR5NvTquqi1G8UmHERcJSSd1sHbFroH2EtpPnVKx8ncNeyETA",
  "key11": "61xaoHFm8DempvN8AyqE68pYHrAZkuyJz9RQWGBwPVkcSKFx1vV9rZfv6LDFtYVuV9c6zdwPcWWYpCZKwhH7HXZX",
  "key12": "nL7xJes4GB4eSSni8zrB7mtx4SCXQ1cNJiNmry1A5BE6srkYNe5pHrsysV56ifw7Mqf7zrpCD4z4ryayfLGcfnu",
  "key13": "4Goa1R7t3WEFVL89SdSvyhfmgY2HiSCLuWSuZUU1VXnfu2bXqF4ButQdLiNKsA5T6psqkEchE2dvhUpY6kckaW4f",
  "key14": "4r85SfQsxK3YahvQZYBgTPvq5W58HrSBqmEiYvMfR5FqYkbMNhUTCFSPjSAU8bQafC83Bqpkd55NBkvdZWcej5P5",
  "key15": "4MMFoh4AgThhWag7PwTBJ4uqQoTqXkb1zrtkbTgBcB1SzLdXREYASNsxh6rN4fRnNWSUbBQCLNjz1azZyphXTT36",
  "key16": "4V6W6AQMzmpNnXutN9uwjCnxr4HSQS83vs6CM5pRoHr6wsU2G8XVtCbZo2huk4vZZuemEGKu3rSqJ6k92rf2QyG2",
  "key17": "5WQ5M9iz8nzybEh7SqyaxnHVSH84KWNfschhyby9Lo3fFLpQEmA3S19oJAkZ15spkokT28kFabsCesPYVoAjiUdw",
  "key18": "3JfVb8qtKrGk1jxu9tAz7uLMnQR1tqHvSLvbGP852J28bfErEiRti3RxdANbhtyg4dmY9FWoovH5TK16yZrR3gdm",
  "key19": "7aUJDj1GxKFxat3w8r3Ua5RtzwqCDtrjLe4TPzm2VMWh1GsPd17gtqSjCf4UGeWVKN9v4Hg3JE1ApUYFiUyG4vo",
  "key20": "3ChDEnP6wSjag26LedpoDiS45ni7q1AHHrtVwHqy2s9XX1m52Cd53xcdaArT4yXAMSm5GhJ6JVffWcoAKNqUTg8M",
  "key21": "5v883PsTXrvknXPtVmzrjNGnLGpXFBQ3Nc633kiKs5rwk4sApY3uizr8bsEtKUaWzErrxjbCqi7eUW6LVMQUAEfB",
  "key22": "591rgPppGJCsnFdMHauN1NTqfk8HY3LGVXtc55ZM9tfxBzYcLEQiKH5dPjQ2PpX7RNCisogDZXZb5GC8XWPvHuN5",
  "key23": "qv5Qa4syDJaP62AQHPNLj5TVApDaQ5pQFpFT2gjsqK1DTimyLKgWxvHadwhMJADD8P1eMbrVeWGApGCoTAMm3iN",
  "key24": "HA6YtynMn8Hj3xpkhns9KES4NYFJ7ruiiogQFr4wch2Hu1qvyTHxJLzVqr4bB7n1onun8gYiNoW9qHJA5yEEaYq",
  "key25": "5Kfg7KcC8t4SaLV7hugpYgirb8gyyvSqSQ7m9bJ3b7MVyatLKzzKURHmimUcePDbTZYzjZYfte1gL1NgGVmWnJ5y",
  "key26": "5F6aezr1aumhiuq3YvbykyLHMCvChPvptLWF7d478tJeAFjC1wBnyJn5cCLAo4bUEdXnYWiSaBVCfBv5Dqz7gBzc",
  "key27": "K2ASZrPqmmhavZ6aHPcget1MgG6NLKxvXfRtbHTHo5KCfTiWVZDTF58zhGCvMas5Lb6nqyRCFN9AnWgsuFfzvGe",
  "key28": "2rMjkitgk87nHyWABQrkD2W1BjyhaFzRj4CQN9wkhbRFTeGg6UZYj9f5yHvA8bk51HzTZiMeYmRWQxEU9HE5MpvZ",
  "key29": "ztX8uYma1DwqMTBHGSs83KtjDHK7LcbBfCj8gM27Au3wx6WfuTw5MPKsDVSAGmUGjAKbUg2ifDfYVx3PZUehqJ2",
  "key30": "2YwVkPdSv1PN69FzDtngD1oTK6rH3yvftcuECCjzpdoMgsMEnMMGjzYGcdQ2oPdyM7UaJcvKb18cJuLSUokfiHee",
  "key31": "2Bs4VE9dvPLc7VQ6uY98Zx53RFcvV54F94RTHNyqwu7yXoeSvLh9MPfGzyHyHWdrMvAiPFKJYM6nVeUyzMyF2R8o",
  "key32": "2HFHcA5H61FVHCmfy6M1vE4R6g72QuVdMsp2eP1u94wS37Zxfp6NoP6Syk7hHMMKLrVWQeG6uq7YyjN2ZMhAUpCr",
  "key33": "4Hooas6SSEPs1c3cPRzs7xfACG5XKsuYFVczmFxFt9mVpJgHTkus5UycBtRZ75cHFAfyQEPDgjkL5odi2CHLs1RR",
  "key34": "43oeTboHYYFCEG8hnkPKxVmX5FD1ep145xjkoNwnarr9ePLvvio3FJAGkV2hfQhajDU74SAvQLhfy36e9V2J9HDW",
  "key35": "NnLECEPbcWbu53JvNAZA8D3RiB2dyC3c7fhpG3R3UAzAAdeeyQm2rkQ6qoe6CHxyqJzYfxHH2s71uUW22batsby",
  "key36": "2wf6bMFy4AVwD7ueMM4WGGi39pbfZuqTzvSDGJ1aPE36B2yW1Jm4AAQ7h5vYwWrAHiTL5g44SN3NcSHp8xbuHpB5",
  "key37": "5KYt661aS2T1kkHxqSPZREBcdTiBhjTmMcwBXdwatoaeastoxtYQtHAtJ5BfK5vuZJYxoTZxmY338swWV1dEAtqm",
  "key38": "67hwDspK9XimMRtELKx3S4XomQNoexcAKAR7vNW61YWjiwqrZV4LAQLKbKnji9Qg5xZdDsfvnMnt6k5EN6LzGpPi",
  "key39": "4XFVWEiyZjWtdFjP6aLPb1UaoX3daQPc9dUXBnPnRirLNjrQY5pWau2aF6i87YtdgnyMZoBAqCTtvefKXF8N771x",
  "key40": "2we9it54eKSkDJ6TxRDWkUSAhiLGEqEJnyiH7PbBW5a1FLCqzsF9q2NweHtmtvgeVuYWRhmTkXae6p7UMEJjbBf7",
  "key41": "2J8trQcBVU6d77R58dAnnEcTBDwnhRx3ZrBxnNVkrSWa3i1YBGQHtrDkNqAZwk7Nxn87m1cYUDURfazVSFni2dEz",
  "key42": "5HYSZGBek3b3Hnp8o7NVM9CY3FTWAENM3KFGWBUPfU8va4uD3xAFuDufHHh2PqNzBn6syExHX2fuvefeCnEuZzuX",
  "key43": "4UTqjcpX288nBFzKBzbiekBoy5z1KRoRJPUnvzLLty14P7tPuhDn5zaLd2Du1CSmSaox9GzV4q5q6zH69bjqbHNY",
  "key44": "2RcCArrPW28F9PAde1uqhLiNSoGsTp86rBdnUd1uW98RSy21A2n9NHGNDrFtXoDC2oAG4TYcRUcb1aZQFpXG9JUK",
  "key45": "27NsW2QRxcid6jaYpG2Y33iXzfG9ytLZCR1HyRorEZ6ExJG953GFkqNT5dmZM6GH2Gb15LVo5yoW8p5JGyMvSjRT",
  "key46": "4ciV6opkjzfVP555geZQ9L1E72LxL2scnwuTMAN7NJoDMXrBVqijRxJucJgwKP8ZvxPvZnFU2hanVB3SrFpqkVzQ",
  "key47": "39nwZpUkBoPLn5P9LkiEFvHotRURvUSyGN41s9PdwzeQ271BT5NqUjj86bEHu1gsivjy1nvQijphQvxk3H1huZq3"
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
