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
    "5K9iFUTQewJWpWiEDGZeErc5qapFT4n18xoFiRcHMHZyaYToyMfhAivv5uU1chJ2VBVGhnVagjcsKRirryR2SSRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PcFDfDG9MmeU8MVcn61WxofVZTkWY5pSCgWdSor4LUWyubTe2n4G22sKCQtJVMcEc22Q8pEDys8AA2Y2DNW7fhC",
  "key1": "35fATxSK3fW8YMGw9iSLqceRYc3GPJv2YEQdAk7kMoJYjffw35YpHYN5LfwhVgfrSj8vuzwnHUof1iYASDvHb16Z",
  "key2": "xhfRJxZmHwZf2JbrLL9bXS1bWemrWYth8DFjec7o6pzd3w7HiHnu9ZTZkJu6jstrumP56RmWv2UmFTcUREsm4T3",
  "key3": "2qZsfdz3pjviA8k7sHj3acokSp5r75ponBhkapizDDTmGg313QGyTTTEAtz5KPnELjkLng9kSrjbQ4pd3K5uKLkn",
  "key4": "5ZPcKSPjrYBRCF6AhLifFWEE62eGCovCCP6D4vvSjJyczer83CEC1SPzeeuQQYFVcLxShoWncdUpMp5LSR4zjvPs",
  "key5": "2cgYxCEZXoFLTDXbnWEhqKvPD9J5wDWjMfN3UFUiyUzD3MQWXyo5HovmXTnciJHFTNhX1c2XgRBvda5ue9SXJQSV",
  "key6": "4ffRb9GnB9dTHH7eGu4ArX8JwrPjUBUr1wPjaqYNAy21vFZFi8ngMq7qfDoBHiWmtMXeAjbHKVdhsRVx2uQVcHHz",
  "key7": "52UdC2KjLQvtaqepRMgsHTynjtqURShW3AWtANsR8zVMC6b2Bd9dCnmwYajagPD6DHHBD5UxRP4fizu4WQYnUhkK",
  "key8": "2reL6abGLobdDQ12rdpCQTdLEJyqjheuV4XTNCV4V1juyWkiKzKiznvxpz8B3PKpmmiXwxMfXJ7wmrqsgEs6YN7R",
  "key9": "5rpwaPidCERgQshoeQUpdf4hTgxj36cS6kRudfSde3K6BFpfEH2jDXWzuuAYG8efNzjTNZi1ojUBAZZ7iWgnLoZa",
  "key10": "5EpcCPh2PgZ13KzXrEdUPnZ8Re5yHvdTgnoSFPC7bxfq9x1KrVnzfDmutCDDM2v18UfjThzvBxmF7SnyE5UcTMh3",
  "key11": "3BAZniuUdBDZ6vrBiYvssYwJxVRgPDh6tF2jkULPQpAQ6r77MzFqP3NxvtuZrKwFah87s5Pbf84obRRr3jpzWeaN",
  "key12": "2uaWDau6gr412xrfMLEqZgfm1hhZBany4Rq5ewS1S71fMihUrMw79gKWxmXRHvrg2Q4eGA2SuziQE1X3fussxJEf",
  "key13": "4B6vfTGBe6rD3CpFX5mgQn8uXAGbBf2xD4vx2Si4mWyyNPUQ2BwqmttSHNAgBg4oSt5KwrmpAP4VtaHuqpfMFU4x",
  "key14": "uypDzLXQFTuMNehF1FGjkPeuTnYawzq4hUivUgBT4MDsA3eWcP8XMNW7qZ7KRci5RJfkZwueLSArSG3jF4P5Got",
  "key15": "3WfcTDj9QG2VSzsi9qR8AvdDwxu7MFM1JsB9jktNzAAjgomz7YwghCgUsofnRor46RE5ZpU8Nr24Z4eaxg36CdcW",
  "key16": "3xM6eyJtaXr56f1EtvCCzygVxx3ZhjREWtNHHPJKmDzjbLW5KBQu2tDsoPrfnJvNrGiZUfBRz61MyetRXCzzJZDH",
  "key17": "5EpxmYkU7ALLs4HjyzsgvHSDY54bXgMxdKKUjNcayfVMcyvspGthGtsvkGeoh2j48T2dEHthFNqMHhsLKNYBvUGo",
  "key18": "WuifvZQZjTvEaiHKvKDChHa37t1kqqE2KSzZGyNeR2m7NjrdiGtGNb6KMwpS3vcoGj3UPAKh3FYVWqjbEDHRjLW",
  "key19": "4PdhLWuk7eWVnekTFSG3M35CZyFcK2GC1Y9yBthD5ruuXt6UadWstbxj1STRXqijgGYKcCcyYRFLgNruydtHDVTs",
  "key20": "2FpiW6Ev5PVrQqu5irx75jPhTek1ujhzv2UWaZyG8JWGeHh8x9sVruiETTaQsazyeBoCANpAhJHVq59znzC3FV4h",
  "key21": "4FM5BzJf6JXDybBx7EBPzdAWpuDS4hUrZ6hzqp5DHFtqqQpC8LGJEXBVvHPTFKTBGEcAg1tUXAgetBUeHFsMZGM5",
  "key22": "25tmLBAc5Np8D4U6mGrLXeKgGriDY3zqmzhsiFjLnnQJUkHt9Yyjr1bJfBy83UXuXuj2dngPKgCtFZy5srs1u9U1",
  "key23": "2K5yDjbqYJzsBVCEWpsaJ9LWGd9SVyxghL5RuDUhwc12jbD97G2oa26smcST4z4USyMjJggoGrJkEherpgLDScyL",
  "key24": "NaeqZ5bXb8jfPN4MKtbQsZyNMDeK8zVtwcqYGyEzdhnYn3FSk9GyKR9v5cDZccqJvZUDXXcDYXMtSMVqSQUja1n",
  "key25": "46JDBTawTyxpJSqJSYCnuszav3Z7ZVrpEcDnfbVFBxLayVKQzaGsRZxZdRNwTvrXY16b7VjBaoD8AjqBeVnAnLt3",
  "key26": "28r5WcJnhC6mGkbT58Ln2QiGaB8dXcPA2VrzJbrXnRjtxYyG3pjcZxqAR2H2wjLCK6VnBiTHne4aoZQBD9CQ8XKQ",
  "key27": "afHg3KvT6w73zGggWVRgVa1bBLCBQHe9m8YGSCpib46QXCWoujTtAgdEwYJe43ZXyf9M7p8iMPQyfCfQHFf8Fz2",
  "key28": "3fwFp8tug8dZJoLgGLZnqrByHnz2dAgpAjTidooKg33o2sP9FgZ9dcSJ729DgCQ1pbQc7fFuPSFJ2ADCpH2oi8q7",
  "key29": "3b1y6PAF2cYK9CstwFBDrTpMBnFR9MeA1gFtjWTNhAVBkYXEqRGbP79eobthKHCdrzMXA6uYtZ4ymV3npfmhtGAZ",
  "key30": "3LGkb5Ft2f2Xoqv3zwR7VUonNLW2hYoKLWNWHc1NWwAuc2qjc8DUEANU8atPSuEhMJoz5t293npuAHJ5MrWAc255",
  "key31": "5YxLu1NFSvRSrx4hR642DwZik5j6xhVJQnttxV5yHAjsHpQJDK7zvYQ3vHF2Kq49FUt9EwCD1EWzqtRzZ9Vu2kCc",
  "key32": "3RZZxAY6BhKtGFeernKSUiQzum76PRPEUau7hK473KQDwrNkcyFC5tKUXN7AyqSEqUb2f4Vc9p7xcGDebgmbcRyw",
  "key33": "4Mro8K1bdxHJGZGyTJjFxFe7kgnqLPbxJuVjcB1e5aqvCx7bknLNBHfgFDt6FnKokBz3VQkrEwmHGx5JbmLX6cbB",
  "key34": "isjBcpHnLHAhKs7NcXmSGc2KA2ipEQBvJppbb1n4N1cRo6TrzJCqDVYrudXsmbsoL8ZQQiQjqH1oJ5Z6JPonnjR",
  "key35": "5SVDRxhXyeDebLYK2eG3J4tnn1EaJbDXNZbShMDokgHArmJ2QqDz2RimjDJd8azEFAMg3yX2poSTW4rvH33zcxAg",
  "key36": "Kt7ZArfnn2RFrdbhcyKvuiEp7HisHRh54Q65P7N9mgcSyDaxvuFsL2xfr5j9VazaZS1nAQiz7yCEkZtAyKPkfCA",
  "key37": "3AvDcvg3CLKhJPPWSRJE3RR5TFgXsYyT3mjkVfEytojMAWhBwKTgVBsvzQSgTd7qeM7mLSo9EyGQs34jzyRNAt7X",
  "key38": "41DGjp8HBFG46WthHbdHyo8iP5gPnLffxsAhjkSWNUfG3RJL5E6A42nomFT3mXCUmrFqLWHfCsVBmo22wArT51Dq",
  "key39": "5Vc8iyZd5VvxDCp86SkrHsW3gfTKGU98jEvG4nifcnKnPR8Vk8RSiHBttreHWUtp4EU7TwscR7R3bF2ioyJmDFa2",
  "key40": "fW6PJK1oDugfBnM7gciqMV47GtDjJy7bmAyUeSdje6eUR7PN8bfm4c6BdBMcxPpcZ9fMwaZndGerZC3n7y7P69j",
  "key41": "4WKbpjzWtqxWhT4dGVfpbGHM76Ub7B7fA6wzxc3NBXvxF4MmoJ16spkMjCZo9kG7XczgpjDbsyVDg3jshNZfMX79",
  "key42": "3h7T3BNw8YSkyWXeZE8MtxCG3ZGREpESBSn1NqSsdfmifngt8GcSfY9Cn4LMH5QCP9kMzQ5EXoPc2Pn13XBgdNEe",
  "key43": "24gvQWA46HNcd8MaRL5VaRf6EFS98H3xgRF2NqX5nhGHkKL795Le1U75RWRfzj1kqf3h98ACNGxipme24QStYLha",
  "key44": "3SHBwLJqSBV7wmDRooxJ6iFiLqiPi7y2peRNVRQa2ycEovWD26krRUtLfpUdpBG3QyEuBnKommNRRPT7zY9agFbv",
  "key45": "M9qdzvaYVWptnf4X4aA8F9vwLkZDSBk79FvT355DEQr1FWHq4t9PVbx87Bd9UuHykE5swfqCHXvyHWD3BWX9wKm",
  "key46": "5bKQo7eyHSBUeGmbcwBMyS4XNehjg3raJ3Lns4jE2M4h789ovodHL4SKF1GuWxoAHPW5VEfrCNwZsJjTmKgGZmD9",
  "key47": "Xq9hiQg5hU9k7BAWxupWg7sfug8QdUj63D2YYHtRSAYAWXfUnRGZamuhE5snKBRfQCrTuorDUKfJNYVhosPfmvF"
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
