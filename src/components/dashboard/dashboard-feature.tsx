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
    "NHhuHubXyRc7eHuoTRd3SphA8qFbNjj33uFzpjdAtXMT5ZoCyj8RJpwQ8weEUoqaG5x37xJun7sCdJzUgwc58qS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Yx5tkNy5qid8p4ahpQNq67GEjP88X3tBim6yPXxxqximyH7dAzu3Ecj7Cg3VejNGDpcM4jTZv7VgkUnGL8hPJV",
  "key1": "5TswADBHkKcwiBtKqKKGWfGfoGiNPERiotHyfgqFiPb46R1Dt8Lw2kZ2jJ5dr4VhmwbFzXUickC1H6JGJiMZ94Kj",
  "key2": "5PmxAuW4BAXGHRJpq25CrRkcpe2Y7QJo3NCJ29dRCVT24MGN1Vwzj4CgQGbGq4EYsfyQNYL4yJoef15V5HrkV6u6",
  "key3": "2MnSSGZzM26Bo1pdnkinjLNXcNVUpRYeAdNN8Cwyi5KXijrtCGwmTnqaiknXUKP4auqjpK2aaHVgqPiCd5aBp9mX",
  "key4": "53mpLriYQPxvQmSkp1cxMxSwNeFk3w1XhacYsrMYueKH9Fk6R3WAyBq72WNqbpd9qVS58jQrMNYuYtqnB7KnVjrz",
  "key5": "3FVLUaDkJSf1hnXeYzr6G8EfLt6meZT7rsxVA4F96qBkWyNitYAvidHgkJbq49avqCmVAhJkBJApgWEHvAZP5EW3",
  "key6": "4aCjWccCrZ4uKNu7uPuLuHHcPofLXv1MTnBFwbdfxENDcUTcGGbcLLuwZint9wQSzquZC1ERssdki9JdJ8M7Rws4",
  "key7": "WPzpT2Cje2ZZg31qhmDWHr1vVLrXBw3Y2JNUZGFfgZrgSqkH3hSh56oiftsEzLQPTLunA1g7RtVwJjL5pDfxprj",
  "key8": "5MetpptSsDv32YjHpBGyFmBrM9QWNSQXyq7b223ynNdaBLg9wzcNQbTiCNvSFH87su7Katko1HBcr8HYei2yq8sr",
  "key9": "2R1PnzvA687TpGUCK5PAfdTshuzk4kBsEKVtKgARFqPdx9vjs2B4QFUc9zSZ9iDRKhS4meHKrUpK8uagsSeJg6jd",
  "key10": "5rqmzG38jaySUJb4A3rrJ2rHX4tvKciPty2MKh8vMsFigya1kzcdryU2AvhvxQ1YyvWHVEC2VMUh4WHkzHFWkYpE",
  "key11": "3fqXtSdywZbn4QWkgX5BePWvuMTxyUdDzBf6EjBm5BjWoLzVE6YjhhnrgqRz6YnzS2hanVk8MZAbU1zpAxRTEjLf",
  "key12": "4snpk3Z9EXgQttdAjaTkwnq81sQChcJHYMJ3C6J4b97NUiti8dCvwrtnyzkBHuvAC35v2i8WjBQfM47VeBSTEZh2",
  "key13": "AeidWokaHhzpUKf46FFcTzA5G9ueyM3mMxJf97jWmvpuLcsQ65GehgsMh1LdhNqC7xzcbnPjcZBrqdq4xwez7AE",
  "key14": "4YvjYh44KnHmmce9QmcNk9xwE3hWMJgFpN9FZEQrH5v8TcXCvz7rZw97TunwZtPE9CcjxPBgzMPTpvfLmsykXupC",
  "key15": "5Dn1chgNH149hGgu5cW3ScoHMLjo9gbBRyYX4Bmi69A8CRZ6cPPKCv3Emux19x391TYjbydAMhioUe6c4LkqJZsH",
  "key16": "3uavDvvWwAZKUgLfzxbTXNwRVQv8Z5jR1nQRaUteeXB2kj31NAn6qzXc4m7qjmniBnQ2KpQpSwhDAazScrq5WL7F",
  "key17": "NguMGBQirczeD1LzWXr4dfMqvP1FNhWR2qLHTHim7pntwoZPsihAUXPButsDdQZeRAipbjjJ9Ls7wstth9AiYyv",
  "key18": "3X5ksWgPwe5poXqtmo1Z3fEZ3ksN5Qjr7J6pJZHAvyQuUmjJLV12Y5Zb4BnaS3mG79UsbQTG3EtaJatft3yfrW1g",
  "key19": "5MGwj2MwFzYNmcJ9k8Ss72vMwYUWxRW6Xjm9tww9bEdPNGwEZH4gw2TCR8Lum9askADJCfgRH8V7huqi2qFh5GpY",
  "key20": "3PrDDyA97pV9EhdXibVN1ZrEHjDztvyAuw8YBzmBfw3vEBa4THqsweQni7qWQTtHkVNfRYLT4B3N7XiA5aGW42Zo",
  "key21": "Lxq3xc5guGka5Q5c4oGBYjvNhWivGr66t2FpExnnmrUTPb3PJoz5n7BXpwKNGN3mzL2k2tzusCASE5zL4z5MMxq",
  "key22": "3CYKkG3cRxNJr88AfQTtcjyvchWgRHRtKRVjqwJ6WSAXbqVG9BUZ1Bf4vyVh9frpxikEn6YLtUagg6TzF2yUgpGY",
  "key23": "2cF6hJGoLYLaTJAqnm66KFn9K2QuqUcXefdbArvyTERfK5oXGwzriVsm9TgkJHpobpBKuZyCMstojRJnfFWakE7K",
  "key24": "3nLnp3dqBRqGynqLriRkQZ7UMHaEhyfbUR9a7pWgkKbLN8w8GgRwQgXWFiDEd9L7FRAiUkLfxoPHnAugGAeUy2ua",
  "key25": "5vBc685np6weVxP9ZT1MChdcRRiXmrHiC7xBozwGZU8jmg6bGGgsMkm5kiPKB5ExAeaXdnTLYqjqF4qkr61eqBgq",
  "key26": "4eJQYdfSsccXgnYJZkvxYsqPcC8t9eyn9jaVRGedhzg7GgrNGx6gXoPrPhBauUVKN5AQrGEWiZdzBS8twf7kzaxm",
  "key27": "5twvRKLMgToteuwuFCPMBF664YqxnXNe3kqQ7RhFQNDN6A3YzsoeriN2eVG6CgEzqAxzcS7jM2YycteSnTqoVzL1",
  "key28": "3cu4NwbUb4d4ByR2uvK39SrCkC2r7cuqeT1KWxFfUHigfuBJhyTdm17VuVf8EooKUWavEhBKFiS6kWGFaa3UXn8v",
  "key29": "3y9R5Q8dh2uxyQXyLMcp7PLpywNweMMfM6uSJt48Sy7W8GqAzsPpQMxrwGy9N5mWbXfW8uj9TyJVLvztTwRmBox8",
  "key30": "HVwQV3GfhQ6xiB7onkFukSqJFHZkEPZ9dhHDXQQgP9SBZabmj2BqpPVWhTdVUvwHTeyQkM8PC8pv3K2t47wTjWX",
  "key31": "2YJc8Jkntbw85NQNhPdAXPK53BBa9mhchRxJaVswfQW4Zcr4c2dk9cvzKXLjuZMfcgYPj3eReBYupguXBBQuTXpM",
  "key32": "4BBC7w3mo2pKuUcVstA39t84mFvxsWbvG3e1MTm8bis4Tzi7qkMZmz5HM2qfdgcaCjEQLvWrM1ybUByDVCHgCsd4",
  "key33": "2jYKHArD1r6P6hndLufYG6zAqnwj9kQEkza4zbRrEuFFHbXGUYoCStuBtGzsXApetQBeqVkSYFnY61W2iGtNDasG",
  "key34": "zLmonS4JB4UJdcXZRnKANP98seGT7Vo4AXASrMPerPQ7PPYtis3EuaRX7wHCS3xhoUk1TeVFf6rrwzMcXX538Q2",
  "key35": "2KpmWNC5399gfjhceibEt2zvgqnYKfPuNGANmR6KYvrX3hvbEJFPrRKMByYpTYeMdaNhxS3rSWdceFdEh7kDdNi9",
  "key36": "BqNFtM9ccW5ZdvgYe77inB1RBRX6Z2zN6zrsPpvgBa5Q3gWctWCaaF9dUEn9HqyFhzcHch4QgHnF8p2YY2kxVpK",
  "key37": "1TtsaGBFRHPG3TSvhWuoYAQLLnaqYYvXo3yJ2RPQ1Cxh7ArcQH88Y4a1agq6oQiX7s1Zwb3mv58SsRTwFhBJiu3",
  "key38": "4DBeqVwDBeUqBxHQP8AnCMY7rP9P3vjxMxeoVW1ovZuCYZ6h947oEPDpocGM59tAeg182FWwJwB4AAvUdfYYy2NZ",
  "key39": "4r1mEzSyuk5GUVSMw3S2sE5pa7aafm2igg7YBigSbBG7CG1gnBdQfy2x1uvit1NuK45xD9WdXLYuDitpJRY8QNxJ",
  "key40": "4ssnkVU516bwa6Ro5TyWpPPSJEiWkTMCDgFKKMuRx6DEoZ7fPUUp6tjrJEQeCdNbAyCyGGkqbam8738PvWgh4beV",
  "key41": "aPaw1L3S6GZJoAeG5erTnReFbRN2YoWU1vdbQooa9WRqNfYvyzFMwD9C8DrPgP8ufN9xpx5c6sxsrafUPbrwrpm",
  "key42": "kaBiyfnKVdb6SAripn4gaCG6jz1vmqGqQMVCq2e81RSYKxp1V7AHMei6B8vcD1QWqv9p4yYzDxyJmF25HN8hEAg",
  "key43": "5LaxmG1dr6bTxWdwkb8mBARBfwroX6h2J2JbLqYTARSG8o6REbUotVkN24pGR92WHTps5niBvX8mM4VzNaXQZq6q",
  "key44": "uvQSXEgWkxYAwvMAwCKbnRdvrjDaSkbduLvMuNK19r7CJe1q1QATvqf7Mjg7vpEe2Mwu7GEzYrXLvwJTGFHm96F",
  "key45": "2jyL1sQDfDpmTB7FWUCpNNsyFGk68h288LJxV7UKVq5UFWh5TXb4joeSwK1SUCaAmbKiyEfaSRNLinBXCUdJiUx",
  "key46": "5W4mwcRysgiysAdC49cQCYBe8JLxCBKJqsKdW9Uev9dFYZq7VtwjRA2HRFndaSAYanr8YxUZ5m83nRH5QyQ7U9HH",
  "key47": "4yezcqZMM5bjVELUTa759mwa4zKE78qjqUXAfPArhPDLBJdNN2isSxynaf4Gob2LHYZXxEHYVv8HEydFSw17hX4p",
  "key48": "7kq2GwyqLZn4UQghn9DWGJEkiKQzoZaJ9AyaMMy5rw8XQMWtJWncxjPFDXTSa75xX8TFJhNB3aQ6wsJkVf3JpMd"
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
