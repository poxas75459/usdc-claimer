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
    "43WbwL6yDjsGexaxk2KHenJkxmgya57Ff3VpRirLFbSBUHmwUamV1vkYd1THqw2XUKmXie26sKXCeGkiYYxahx5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVbjBkv6xVgXgwQEotSjmawZfQV2CHmjtgGEDGsGMJew4Xhqe64Kf2GfMxfbfUWpW8aEF6frmL7ao8aARxRKyXm",
  "key1": "3ptpsnAPqoNXShXf38KzfSjFahXFf3pAoJ6wSxBvYwR8ShpREmuQZ5ST4Ze2xohBdfq2pVe7EspPDJDxBhC7TBLE",
  "key2": "4y4uGKRkizzyvBEawxKGHvWwJHS3MgFMTUE3TnFqrZPRAXo5MkqYFGWsrx6rMJK5wR23CAQ7KnoGUPPgK8tuXu2a",
  "key3": "Pv1tVnWpEpXfzTfs8cWvUQPvj694jwf66JUJCUbmGk6Vy5JRMtNVwABLhtLZdbRSHJ9A7U3XWpEDSBKjvj35jaJ",
  "key4": "5XMg4sxM6iwLRD7aMBN5ws7Xnd1Q681L5xiYEKKXMCzh1Cw8ktM7SkJYeXXR3zXMkEPAbzWXV6fdHMKGcwZke66N",
  "key5": "4ughX2tXjCaDUg7dDXbUEcysJtxbu5zhVEXWLs75eSp1tG9nmtzaH3yDvgtPaaK9UHdMsKsKxHywf2m953bmvXCa",
  "key6": "wZoWuiz9ycJZJJM6jYQkT7vqmAmY5tbGTRMCV3biD8odtfYLtYJpUCPdxHPZyMKLgRymfDbWUfpBQbCsZaKAgDk",
  "key7": "5NWdazYqJMppss1Zo4TbymA9JMDeVgNc6uizLRNAA9nhNZU2sUnuUs4MUd21f3NW8tXQjqQ5vgtwH1jvRsZ7H4bm",
  "key8": "463zoePf1YQkDWPWh1rchyQjm3cHG7M5h7kavTa9Xo1DbziXiifb44pJoNcgngH5gx1gxKgrgBwV8DjsiNpMyRLA",
  "key9": "4PvfzYAwxzen8uBaag5mFc1a2iVz5qi87xgE5QNHKyx8kk2tPwsjezLbJZWKNHbn7a9ZX7mgzerRYPNQqnEFxZpV",
  "key10": "3TXk62EtiAJ9cTTafekraFVZEe1croVzMaerEnC7t77bzCivRtqcauMnXKCxqDTRa7P1kc82aavZy6kUDmLM1Ft",
  "key11": "4DF3TT2mh8AGrMa8AfqYqaZEFzFLtoJ2RJ1uDzPP8W8QVewYYZBodEC1mJxotsSv4KGwa61q1NdnwSdtiowxNy8k",
  "key12": "3b4L15BMkT5Viz7okGsYPnjmn4BT2mdKA8EHY5z6p7vcmUAc8kgb7TaZMbzvEnNHihpMvwzbKXSt8CEorKe3cQqu",
  "key13": "2VZxKpTe8rRFrTwf9aoage4qNKx8XKXHfkt8RpHcgiDMmqdpBtcieZGsimucqcjzYgDbD3zmNMJq39mjScjsLVne",
  "key14": "4P96bMpVnvDMN2xVypMmsPMkrsfKVe7e8je7Bnf3e1Trac965V6kgwr9hcrQQbiFrM6kWFoFBPqcDRxuvtuYYc54",
  "key15": "2N71C9oHRgsSmd1pVhHzczQw4q2Az3d72hzREayPhRYKBeYp6cyw6Lq75PwrXNR35ktmT78jkz1EpkiCJhGs9FHJ",
  "key16": "2SuzxQa4RZWAZVDU4ihauSXSUq9LjgdX976qRYTq2VZMRCcHuVgLQv4mS3JJsaZvBfeNthmDNjpwXF2ycPJ3Zwyf",
  "key17": "3mVC7YXt7NcdicCrdq47AEUcpeQnzfWa9t2R7e6i31y1J8aEM46uYK8JURgeQkNdD8PmChdpvQCKBwJG7eBBGjEV",
  "key18": "5AYGwqbzH65VxN2wbjuaoSfyfm5T7ypDonjjBCYKneTfCN7Q7EAcn9iWChFRWv3Cc7eRqBYT3Nr7hQAfvPrfLn2w",
  "key19": "2RScZPbvMcFGMPQRfkthaYopeJiDknDdBoTh77UwuM4xqUM65eQ41kQYWdeqWtafQSc6hiX1Em3xZyy5rpAjRLrm",
  "key20": "2FY7ADYmxHsBq71mLukMtYsXmW9BQgruFoiTr6LhZeR3ECAKym75D4BFYvVoTGuFyhBBRed9nALRGxTCfLsicHKu",
  "key21": "2Th63JVTk9vbBsCNvwKjoNhDCPCknBDjgYqtnw4PJyDedmPZsjX2oDnGcDxG4D7d5pfYFyX4uyGC1vSpR67kkovG",
  "key22": "5C1SK54LgCtzWLRNhHkxbfibv4QQofeCDw2R12oqxybzCEpAhfA4Zv3aaSdTyCgSu9uSKnbGL7HEqQ4Ea7NvkXxo",
  "key23": "4oYUDvoxoCxdr6QZzHmrcU2n4GnnmZYDBDazaGD8eKRcCLbg4sPRTUHHrqJEzuQGC2soNbaDFytvVmU1on2PxVdT",
  "key24": "4ERPRXxxKjQhLQXG28726QwLaPPgVm2M88GuTbpJqAqNEt9mFP7UVcXgzBBEf7XkX8Ba3h8CvH8tvHDi5coYhBUE",
  "key25": "4VCSLBGni6icuqoedjqfiK5xDb6BAzKohqwA7hgLQ1pusmULMBnpGwT5heUJ9JZg4QoYYVcpdvcrDmz1LVkXxzw1",
  "key26": "5XPwBcQZUEc8S3bWb3sUdvwJeH99MeNfDTTb9ESh14sJjpXzpUptMAQk7SEMi1YszH8T3F2zJKT4uy5RayAVa6eZ",
  "key27": "2HcDBr5nYfeniiEu5UrvUGCq68WWUbLA7oJnFEXA1CPuYShySJvnaKBxeHYed3X2VjC6boDziQimAbRQyKN12Squ",
  "key28": "3PgXnxVgX6cX8FtDocZ1FZULWiiTT61nYxffP35nijhzKahuUW23CsxrsuBBCWcHRcMKU74a52zAPKLk55MgXdCL",
  "key29": "46aYpJ2gMkCEgUvx9Vj1812dQNJsQUxxQQdawx59RdJ31EhxVqVEuBp71ntrqtsTooNGgrc9bV5DBT2HfhkTxNPZ",
  "key30": "4Fu6W8huHzkPxVb6kbTfPnwHvKRjwpiDCbWnTxYXbapXhVUbUxxJEPTZ6rpqVwUNfnWF5rMaGWaSnjnZMEyU6Us8",
  "key31": "ikzMZC6uaYJiiisefCeXrUwj3NEo8y4jkG4gCMCkxDAMsg4hJzGQv5KriXhSrcgB49xHsk7MHMm1WZXLs1vfuvg",
  "key32": "3irG1yJgSWhP5f4GwQTXzmnwSWVaTgwHrRHHdfncSr5DmPPq9KfK7v6ZaeSoNqgUeW92e9zc4T3Hb5HyFKnAorj7",
  "key33": "dzyxZxxgkBJm6Aa8UB6d6dMbSH8h2Sw4z5n5w87CBneLiYBmMK9Fb92S8h4rHpPQA5AynTLfHxEy8Wyq7avc9Dm",
  "key34": "pbMwPWoMTFVfuA79x6XCfCyH4Ctpu9ME32q4srRwpkN3DrJy4JXofUGf1pM1Q9snCDcrP83j8qLChmgDDVLz9B5",
  "key35": "2qEno2qEBS7DeNoULqi51dinMJ4bCUoPHs1Ko7rpkkRsobzKXMwgnywMUKo61pQyEuSSuDiAE2D2qFWUxjwDYv8s",
  "key36": "4nTK4NV51CN8jaPbwF1Y8jzJwcQScQ7EnhydxTshuALGXSrxzhzdAMDdLDJBcVg64hfrVVYB21WxXP1RxtN48CWQ",
  "key37": "5ueTDXdTCz5uB12pgESDf9sckFWTtQygeJZi9EFv8Vzt8As4PyRBxsnEpRHYSU7KbeLuVJzcC47wu3Y3YVz2g4Zk",
  "key38": "3r5LDuZp5NeHXgMByEiUn6fSoKSzkqrH7uPG798uTW7cMEMZx6gTsYpsesjhtHHTMQA8jxNk1LzuJAMpxxi7it9e"
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
