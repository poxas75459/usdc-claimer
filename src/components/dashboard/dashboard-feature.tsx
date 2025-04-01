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
    "A7wjgYs7tEsiDHFmFLFaz3MY1nfCFQgbp2sp1dAfn851tSNpi3cM2Adbxg7vY22mw5UhvTUiGdGmfqFDxeLj7sT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ue56KUc7vaLWgkBFWmZxhg8BJeopWHaJsq82RHGTLYAuc4avadDf5SgYu39Xu2Dx6HZeCdTM1iHPhEobkPLQVaB",
  "key1": "3bTjzCpHEcYVYA38uqQ8eV6AEVWgc2cwbRFKAVwuCNWm5GRLJQ33i8BztCcBfVUSMVp32PiD9J9jD9Zxc4YtAaXa",
  "key2": "oxKzfTfmrf66nJfABv3qJ36Jmtj6ps87JpawmW66fgdcMcmXpu6Ed1afKNBTjotXBoQbWXAnK5Ab91EGMfvdfpT",
  "key3": "3iPbW5eRt2Npo9CrUvMvNCdD8RZLqo1iiNu3DGwfWyRLAy4bjU7yGfsmRjZEB6AueCH2tskRh8AEunhnEUqm2mug",
  "key4": "3WHCU2CLf9cLGmMTVHWNwSXypFdcrEvq9DYZhqrjNCWuZBu3crZWcPwovdZYxg4CbvhNcGjHNyLFLAnDEHWo9Eud",
  "key5": "3qxPFkNTRK1fS5RnJr8ABb5w8ffPkkffEqPankJRyDxTh9t6XMUKhGVzesB1BQGwgwC1X2n5CFe2bvLUdA71XMeU",
  "key6": "GQt1QgiTfi7EmAECWthjjop49SKg9uDrKfbeiZ4iWp4CjQGF3b3NYWFW42shhtwa1ugt8Nfsr83cZhn4Mj53VXE",
  "key7": "2apukEiExvzn393tJgRHiX4N38rd92SpDKvjfBw9X2vQsyqXqjvHmCdnm2X2XiL95mwqJNuxupLFZ3FXNu2XdZ1A",
  "key8": "3T1g3Wtxdeyb1pjZG53hieEAvfjUSuqbyXSzKA2aw32m5mQMC2AxJQXe2dHEwWLvpe6BufUTYQRXB1v3MHbjpdFf",
  "key9": "2ZFuj6pUZWtZZe33mhXpVASCbnbbCGqtHVF5KVNcWEEyYut4fT9CcKm7HFvmwhNMW6fPZvutekU7K3zeUNwiWmfg",
  "key10": "4fgkpNorzuPJ4nuKgxiXjQWk31env2BkyGuAFqUgZfk19ZEdPFmEQVaJ3EwFhfYsW5daav1D6Ha8wbURwYJwABz",
  "key11": "65w55vfDC1M6UZFWAujfwtX4T8Y6DtPZrijwWp9cqtu2FtAkV2VTSHvwcCBL8wk4WQRmmSwuDPDafBithrf6V5ot",
  "key12": "5hNb2uBJHRWLBMj8fodnzQtfG6eLW9XRza7hL2vzyNKpWPrsJWawG3NWtjGz7AmnG1S78ZfW5mWzysykmXDuWQ87",
  "key13": "CVZnUiAQzoLzHS85QjakpAmyNB4Usx4YifRPxT5Tchju4QHaqnuoWc97QScrXW4mTcpip1yVyY35cRf9u2UYxKC",
  "key14": "3NChsTumyrWEs1MiFLERqBttYPo7QaiGrNzDadWZmnJmPGf3QZuMvzGW9xThbLGQfYbDQWx7kiMG2BqJbmq7wi7J",
  "key15": "2GW7RqvVAoxyBf8BVgobBVwDrxknKWZ7mTgxD1bKmTey2kpZepYjEq7TgcXkX8QUU7AEYGky9BDPqUwWdim9WJRF",
  "key16": "4JhV7KtxstMSRvpqDvD4idHQbYhjcApHfS7Dxar2Vn1uh86E8RpGKmnLdEGYgDZYY1QniFNrYdJS92EWHKW3Xgjz",
  "key17": "2WjmjhY4ArTf1Q5fT5DU1hzfEvYdcpheoDrYQq479y8eo6N6QUSgwU7SzyqQ4jkEh17RXxFDruxnjPWQz2rjDzqn",
  "key18": "vjLDmYNsZoiCB7rkLp4HeNxTZZg74ptja1nmi5JfkPzuHXBkBteSCAiNm3cAgCjZ3Hhntyp4KArbVufFApdLYGC",
  "key19": "2C5RLTUsz894F9kfpwaujp2LYEMtkxaQPDDH7o2PZWKMWbBGcPTeJEHHqRgXrbbGE4RSvaUoyGJsRhABt36UmdTc",
  "key20": "5niKNXMeeDKrCVjkzZ73rbDQcaQ9sQVL7Zxo8HgtvKZvRfbyQNfCDqJpKQe5PVEHdwDD68D51sMa3No9BkEgbzea",
  "key21": "47cig3oaXy1gj7qJcANSnbwMSwhd5a8xw4Jc1BM8Nc3cZ58uVbgwdjkWJ1isExvvrsSiN1Uum9Q9DQJ5d47sSvpr",
  "key22": "2THjs9tJuhMCCPg8uxYsSAevcD8FuVKnndGv8AsHre2kjR8ACD4Y6h1YCYVvZeuBakSWpN423C1investokRwRDq",
  "key23": "e7tjDHGdz29xhD2rN35U3FJSaEMUewNF9AJR1owse2nAuATmB8wimznnAUVoopzfW5XkmfQFM6NpXBX6AJC8F8m",
  "key24": "2MeskSPr1mwp3taivYpCctjS9TocqahTnH7sejPzgbwjJzeMYbK6VyypAfEYoEXUdboJLdPNSpXmWjHyoc1pHQwV",
  "key25": "4zyXWZ3UmreJ3kWrmNix7UB7y8Ljiey4PJLvePk8QCBp9vNvTRuv7n27jQdTEQw4Gpxhg41ob3VdMWUt8hWBUiWU",
  "key26": "2FSCAFQjJtgwrMFPZyELqTf81r3Bh9qeaRxKs8zttenFQ7Gva7wB9KJbFM9G1TighPp9DhCiQpmnm5ipXbb315kt",
  "key27": "4MJXrTwzs9C8e6pyX4euLcAFXxsE6qdEG3QVkF2qH52QeQ54f3ggY3X14qKrYyXJcwyNXHBjpPNRF8RAoCWmYvR",
  "key28": "43E2WvaarspRxpu3xhiDAckhDekFhPCBiGRkhLUHFx7ZHMduz9X7xW1LwtJdTBGqKNmqb8RB69ELMmnbD59AKU3s",
  "key29": "uBamQyjR5Qbx4Ba3QeiwjWm5QRBWVxekqsSgZ4Z2YpLXTnaNuxSsHNA9udU2QTi5yRX5KaxoDWa71rtoxrijYS3",
  "key30": "uu9gojNVDNjgbXZqJVGGEi75GfoEJX5wVUpESVGihjfEcRDmPb6uKnrfdZ5edrso5c6LxBCv58BY1AbkyduMLT2",
  "key31": "46QMYPtsJTSf4aizGxbHuNT8vdox4vZhyFxqrLLdTYYDqq8SGB9BoxikdW8RTf6eS6yGgQT3tZoorbXkoH6pJieV",
  "key32": "4fyL1gPa5aMeuSb63BX56o3Azk9oXgxVxuetoxfisoe5nK7fv2gQfsGBeRXNtWYoKK37JjZ7pTZyvwJ1jRPaLjTu",
  "key33": "4g7XqPjxAyNE5dSU6YK4oKezFFS2791oSULiiKDnvw7LcqPbQ9jhBA1ud1RNzbfyecTn3CcK99qiHozioPbAkphU",
  "key34": "32Nyb5mLCYVWeeDLALkEFrMuFVovHVC6MJEmfu65c1juDVNdMtS9bn3BVKtgJbXbVgf8YiZ96xtf9J6wnodjnSv2",
  "key35": "2T7Q8hRDFbsVmVAc6SvCoJ56A1EkqsxBwiEuABGF6XMT9buzWMRUFAawtxJHQ8pWfCHarC2PiWaATR9NjdGjExqX",
  "key36": "2x5PJH9MAyWrneY8g95dPvtYx1beiWeaGeQM7gauuK3f31SDMfeqwJ2Tdn4aD2vWfdhpfKoQYSpUz7Yc2yKv9wrm",
  "key37": "3gKwEFp7XRexhBA7pQfKnh1WHBCJTYTeCryCmsVzfGTcYbHEfePKuc4uJWrvReMSu18TUCjtAH8o8mboeDdkVWCX",
  "key38": "37rZswiAjnwsJDaSgnz88pt54qapeBtqHNagxgaTiKxDKuDVoVPRoyfoKbkV8exLCXcrRzEJCpEyHv8kWf89Y1EU",
  "key39": "3LQL1mGdjy6GSo6YEgXCGFG4Df9ersiN1W5Xp97CfRypv4Z5XRso6n9nkLAYemCgLY4bf9PBy7cGWYEMG1gsxZ7q",
  "key40": "Aa5nM7T7jFym1EvCD2bJo4nZTMDktABda6aXCLaTDnoBWHJ2E8KE3qJgr3U7d1Zm5WkRRKuUedxnRujb6LTYhqt",
  "key41": "4VDQvM32624XDNDhiEiCi12jGUnbxHT6Jb5RXPanNLAPKXJ8Qc5oKMy2LToc9dVaGEZUCb4YmDpYjhyV4EM74cKK",
  "key42": "2qM8zpsGKQNakw8cJTfwikmvvPfGYnuF9Vyfw6FDUtquQfePwWkh6VuZ4QrDZ29AoWuzfzE5T6jjuYfG3GLjkcZa"
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
