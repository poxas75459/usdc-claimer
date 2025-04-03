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
    "4dP2SN2F6kDDJygeibSYgKm9ZmqnLDMUFbkLr8iHNTWP9pYX43XDd5NriCRe1TWL1PPFJsvhmgrzWVquE2ya3KjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Wyu3fpQWDnCHvCMXexsjXJRCBuz8DK2YQ6qcRSYHr2EEUaTxm3ZsX2jxLy2yemRCkCS4czgGN179ZmnxdaKs4R",
  "key1": "4eguQV3XCuMg2ShGiziPD8AntMNYMF6YrTaJ6R6yFJA198ZD5DyzJHpPvF26SaPo2FNvwNHZ7fNnYkZ5hWy7F7eT",
  "key2": "55syin7MeanMigcJdGdNmDAoi6Jf411UJMuVmyn2Jq3TgX9q6bfRv2xu79CQYFKjAowBBT5TRVvb7aMbYraDJ3SC",
  "key3": "DZRxL2HHrZhVaDSC87g51bvacoEhWZa7coDDp3oY6nUamP9KS7yLbJKWM1GkshszmWcAKHZhuaKy493Kg4MkR9z",
  "key4": "5uvCDSXdySx1QUYeBUaqKEwL2JrsrvuFXWHAP8rjHvc2BjcEdp7kYPGieye5DkhbavZvkK81LaywNnPuSJRB3iix",
  "key5": "2XUP9ZoWquVi9qvXSqS9zitEeymE5DJ6BfgTPX1hVmb51nLEb4iZe13E3xBo2wh2V55bzXY3u3xbuC7CYh9s6DK2",
  "key6": "387GkuYCJE3WUWs6t3gemXPWAjBY66ub7DraZS9VPnHgnsYGmHAEZBuUoBhY3oict1G2Eaf3H528g98rECYFMxrg",
  "key7": "4pMYUGtfDKsoRMVh7CZSq9aZyoWufaXu2CNMY9mhihknLYo4cJxixKJjudfcDuVFToaZ6BPeeJxXynyxMXPS4r5z",
  "key8": "3WmV53Wu6mUANN2aWYEEQjdYxLenChbofQQ8jwtLmxKh7pqV2pX5TDUvVN4pNdFhVcZnAXziAH9K6EJazBFQPHfR",
  "key9": "2rcahGMmAsvHQn5CvYGBugv5h71L2t2VicgpDrhZBvniWntJU6xgD5Ma9JxLbGz76wHrTo2raFYaFYEwULS7WRn7",
  "key10": "3jLwNrx74BgzcqdKtz66NPo5szgPApKcSvxEfs3Gg6VnoauhQE9iSBw1UNkBsPjDcED6U1SASvMbjkqk7KhimNVd",
  "key11": "5QbefbFCCTR8phv3n2ji9xfHuk457e1yebDLneQnYzBeBH3CrcBW5NeVavheT8EqqwVGXz5PEzwKq8J7WZqNBqbU",
  "key12": "5BfSkhXcAvqXRiR6hpYT3d3W32dGsrqdBUnEdPoqNXqKiZURgFE3Rk2kBT2f8ZKsCXEPoxvgGR42KHsUqfMXJHD",
  "key13": "4tT9mkKohNy2KgDN6qfSmxirFM1Ud5C8UymcoPECk1hd3GV8LvPog6hNZtt2MfsMsjSBXK6jbBA9j1Wv3GbrXbMJ",
  "key14": "5wqHEiV5j9AqeE7MjdKNNLevUDdTAPoP19hyrjR2L28wpatX396o81k6B3PcBEGWvAyfe951atatqMKtF52jCNSR",
  "key15": "2NfijE6cW88Txas5YDmaA1WEapB3xyEiV9UQ5uDRzqHJpArAAQkLYJ1H33YpLwrQmhRv5ruzPK9ryztczcFC2Uah",
  "key16": "3XvDeYrgt7mvWESo5tzqNiiYUHBUYsgJCvGvGe7KRtdY9Xnhh7ukkmKdnUbYZFhbsbHTZfDV348ZuKzAqBE5UZ2i",
  "key17": "CcfdgY5iu9WsdVp9L6Qp32Vf3AM7BpVGY4tEK2a9WF9YYBGBkvvfFS3HrqGrE3ZaeNZXdiaZV7TFPcJvJBit5XM",
  "key18": "4oUYQ6sdpfT6hMAfNgqb3nnxHR4EnHxyFcUzC546nGxBAVXyAzCzBrrj6B9k7HAHTQWvebRyiqj6Tuy97oA4ac4Q",
  "key19": "kiDpckZ94fW5CD6jFKMYCCUm2JgK6ScSMPFGo3n6CR4Ycg2dwdBTZXnH5UsMvXqFkgf4JCoKBKA3G3u665iMhto",
  "key20": "5mt5fvcRBTpHYmmkeka3QkoRcvHzkH43MpiPWuY4BMsee4H1DK9iWZs3HFgfnk5kYHYjJ753z1sL4oECDjtuiqGe",
  "key21": "4tvi6vHa6y7DchC4pnQHYKHXbSwrVvGuARbaXnFkFqsxkixLVH9cWyrEfgkAkrYiuUNHyd7aHbxQAJZiQ9HW3rhD",
  "key22": "3TbP2sdTQaiMtCEFMUNPWE7cDHryV1ibpg5BEpu4hYmEbMCJNov5hDaRHDoCcqfGeyTyZkHPt8jNAxY9WEdJZr4C",
  "key23": "2pocYBD68iUG5V5NQte9d5QBxvyZ4iVyCCfV2NUHWLQmUS4oCFTv882Q9xdbsRChJrecDMXMJtdrE47KtnDQysLs",
  "key24": "2XCDhb2Gsdza3tiEzGrYvMopFMFZ7NvfRf3pfiYHFA5LGN37maxcFyVvGiCcWTS1PAfpwYB9d2uL7Z6VCPP2GqQH",
  "key25": "CBCoLSDpYJdoGuq2mVfeZ9pK8LnS8mUBLzduBz6qHdJJG37LktsKjToLKictCpo3t6ge67oYe2WkSaqrSSHT6vx",
  "key26": "2MKsfPQ98SN6i1rNbez2aZ1k6Qar8vYWPVwMsyHoNYprBNyH6q9UpJeN9fGtmAeX8dU91Pzj4jEia8mmLtoU3U5D",
  "key27": "2h3DTX66P5gwQLBfNEhgXP1ZyQgH8ZRW9HLn89PKab4kEGVe9e5kQt6XeRPJdmPynnYjQEA3sv566YYUGpGww43r",
  "key28": "57MHDjHhvgFe3AyxG6t8tewTJ7nmSAWamC2Ce9HEEDFHPYBzJM3uW3JE37GngcBWhK32jrs9GKhhhoXrn7ZqYX45",
  "key29": "4NqJE9xMA5qQrk1Vdsm7T5UeQwkRUr81V3PekkPt8suo8QhZKn1cZv8DqVDERUXmuodTGbTBRFZf81ntfRxjDTUn",
  "key30": "54TjX8xcZZLTVivhH8Sm7QFxtBW6XDDzjcE2Ve4wWL1vhhPD9LH4HQASC6nDzRjneD7sPkzBg36TXdaDqtmMs9J5"
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
