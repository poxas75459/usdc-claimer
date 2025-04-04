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
    "5ZAkZ4ANHyXidJnZf1xw2n5RFCrJ7h2Mp2snT7SEWTHg4FePQCVBfmYvz1RpXYxkXMLjGfCeswEUU1L9wse7Zffq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w53fJwfkJuwAn9q3BdTkyYpWdDpV3cVnKzRrVg5RuYssn1NsibKFLJpCQXBd61XhoaueYmcgRuRzyng5ZCK9Q3X",
  "key1": "56KvzDoAzdTu9KXxmooodqVn6nmQfnFBBwhQakLc3jYeFkwLxvoQtYgiwrhGWcqHRJhEecj5BLYg88mVG8pw4pcm",
  "key2": "4h2DX3Sh5CgwbLReivRykyBnbF2aAu2zTMmTdiNKZnkMZh71Eb5kowLcdkcbaXTnZdBMimF4ix2frbhVwTAMGt6m",
  "key3": "2tqutoUvwY9zyL1mpmBWrjqByVxUTzYQvf5pmTD5UVepv8mRj1ZBvFT2TwgBBCnY4gXr7aJG52tCob25H89fdsQk",
  "key4": "5gxnTB3WsDfrsCVQPRaaxEhdrncHt8bBXF8W9GTAj82D6n9URc6h3oAhVVS6Mnca3f2BPfEpEoTpDaqi46iZN7KL",
  "key5": "4FSx3yWERKFy372Y27MKuRpABuhUqKRMRuDXXRL46a6Bc8o75D7t7J9RzNv95RiqEJxQDvuoj6w9ZZukuAUX9Nuk",
  "key6": "3s1Lnh7hr8n4xQT1yfT3ZL1PUr91aofnP6yNe6Q36GJZjojohUaP7H65eFSNRFPcv8iHTPrzikRvybkRRsXKAw2w",
  "key7": "5ZKWmKpcm8BT7ZEdMz9YhHpsbzkX1PY2dguKFVimRv87CCpCkG1KZHzhDVm9VvYHF9aJrGDbijD2vhNy9cvvn3wL",
  "key8": "62xUmqV6cGCW7fZaRaVDn44Vk4nyhBXS9U9NyNEonrcU8Br1LUPWEPwojo2hzDHtqMZPCu2hFopA2vLPeRCXfwfY",
  "key9": "4Rpo7GnBViPciJoY1xFdY4imbmpKUmdMgQRzSumLS4oavcjtyyMzPqTSkryhuqZB9eHzZw1C8gfPAhSejNKzkcm4",
  "key10": "5fhbDkoWS1QECAvmQJLX4xciVQmsHuuSgSmpL2bTfGMX93JWCmgi5GnsUg8qsFVm3nCGqLu2nCV2yk7BEZU99KMR",
  "key11": "VmLcv1FaQHAY5HtRjwPGCuB8TNu7Jh978FSWcDRU23cL5KjBBvq15JjgyuRj359q1BpDXbkxzgmuMBZkEgaSuZE",
  "key12": "2Bmnm9364pTNtTJvmMsiKtpidZWqEAcK9sju8oYgwYqPLuy85v8M9WAL8vkzsEmwJWqoDd4YhwrE7yBT3Q1fRvWA",
  "key13": "25WNjy5x1zSyjv9uctKTAadvF2ycXLmqRJKwvQWApAcszEfSimt4Huhj5BBNrKdeZccgZHwnEaH7KrEtg7MnU2QJ",
  "key14": "4mYuQcbe9ZfkM5pMjJmTateBdq4zD3JRrkaGWRTzCt5q59BAdSWQ1cDnnn9Ayspigy6GBgbsUn12ysmp6j5ia4A4",
  "key15": "25NnGTMVLiXPMgVmEY7TiomF4m5o39DgKEDiWrtkvvq92LtthXXPr7KVRKaR5EFgXkdy1vGDafu27SWFZ6GX2Z33",
  "key16": "5K7X4qrjFT5S53oHjkJN1BVkhuQ1chgbWVpK2ZZgAkpK1SU2BpSNG1pFGyZxmhBHPFi1VgopYZhjD3mqM4iXLx9s",
  "key17": "3zd92bs1xBm9JPw9PYU6CTXqMLKeM2DMXYwNfwE1DXPxuex5FG6vzDZk8a69Aj6g7UZXrS4Kzfvo3Nfu9HVZ3R11",
  "key18": "2dfqTKtWBSN56ta22ih3uhaowQSnsMMiGoSs3cC8qgmZemLAP9UpaDSyFBXxVLrt3Bw56WEFE3MkFZ5mQUw3av3y",
  "key19": "236dAqtPWhXKf9VMPSnsVtNtk2xutamVUxvVb1ymeW4nqUDR9UftNp3ndU94xFSDwa2J8aQoVMvvgNi5gRmKWxnN",
  "key20": "57W9VwbHLiSfybdQq2fMMqqLvCdZVmyifU6r3LRDgDLds6DjaVdfzAZYiMwdWjUzfUudvWm8kCmvTns9BpiPgW56",
  "key21": "P8ActBzGg5jXUBbhzewEBE8zef94Lm7B7K2MAphSnjpFwQL7nbtmKKeNWSpCGngfYKMyYwSwpWBEnm4fs6uvioP",
  "key22": "23Mhv7GZnjHC3dHzAaZ1f8A33LdW7Z949JKFjJbYFcbmbLYJ4P5WTtTee5SxXX3x6Tb9CR3Png8Qsyuaw9YAPegw",
  "key23": "2Vwuo5dWhx5eg3CkuSk9qYwuGpW68GNiAVRj8s9fMHTePjDWiTQF3uiSoZPhqitBwfM5go5PQUAHocPAW8YQY1Y1",
  "key24": "24TEPS9SwCAtqGLRjETnBbEHLvzrdXXTzC1dXJnjWLki18A7cC3o48zaLa89Db2Frt6MAzVZeAu6NdDm7LzvdMpp",
  "key25": "3Vj3BW5rkTZSxdUFKCi4WR5JmbhvqRoURSP4NyeKJUsbCGe8LJt2j6j6BpXvg8x9fpFZE3S1GaT4rHBQUo5BiSfD",
  "key26": "4orYd7Wd1PFLy3Jk7ipYvYxSroBs6vMhpFZy98vf88zuzmNsu7UVgCmER39L9HfgDMwcz87a75HczVooXtpDmaG9",
  "key27": "3VfqzJKQFM7w1Vyr8NjUsJyHn4R1cLJ5jqfwePqP65GotCDYc5DLzPax3TbKZZJE3Y34Ji3NsjqPdL5m8sYp7Xwe",
  "key28": "fFyNS7E7tUGE7eBtPGspSgwPgATA4mwUNsZa7JgDHTVQ2QNUweTbzkVQUN5pdrpaUeqnr9jYhyjEvcQT8gqXK6q",
  "key29": "5jK33iAGV4qZG5ft1mKyAFrWVtaPohHcGFV6bv6osipvuLsJePbGANgQDHHVATLAQmNVKtrMTaV4R81y7Qz6Tmws",
  "key30": "mBjvkq9qKzmTDp1XGE52e3Rx5tASSYrE1ibmbP2gkLLBKpuzrK3cj5h8bg2C6XD2z6K3vw1rHGDizv84UaTrudp",
  "key31": "5SEZLcSCx64gZLcBd7D2otkxXZK375KvbGfzNiMCVZzsY7QTUsCgsAS9ugKgDYizVox2tk4dTsRSyom5vhV4y7ZM"
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
