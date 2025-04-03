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
    "417JCMHixL91WprmUgnpavBsPHc2gTdU9hwUy99UoMcGT51wpgxvRtcAAe4mKLrZGSrZJa5XFv8hAH2CBrB6rQVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23hyGTQzwenfjDwtWeS45DVmYWzxhh8CaWJYSpN7HksVddmjQnKs3jfKe6enUkFpH2PJk29YrQrFKKuHJ7YA1LWe",
  "key1": "2kKntnfDb7pYJopPyB4XyQ5wpTRVgBF8pnBSeNDGwiAMuwRknMb1r6D4tNmAdMPUpawP72UymEWANvJyB3bCdmxP",
  "key2": "2C6JtwHwZtfBZKVo2DwNY9FQ8dpSh2ANSTCWAEBsWv9FidQBdhCXRShneKjAaqFodhnXLNtc7jDeNqbFEc6KDn5a",
  "key3": "5hV9AdQwRVvB5a6fGUUR6xd3U7A3moxTo1XW1uhKaSjNQATkGEEyw4uN3gbUwkn1gVJL6hiBSfW3QYVFN8oknrP5",
  "key4": "WmnWTHJaPZuKXpktiKCsxf28xvft3hvXujimpEYZkPYHZEcA4KHhmL2NfRfJhfpysnBDK9VzB6VHShuE3CQaWyx",
  "key5": "sLc8dCMhumz34hG4gX9haEWD3dFQsWDdX3MwH248AVdSRMb77LzxuuaqgnjZMhtAnEJH9L4UgcHyYCYDcqcjVk2",
  "key6": "H8XBGXcnTp1B3QVvjch6bEwXY3ZWpfddf6hpUY4LFfGcs6ZqhdRm9YGbFpEqH4KqJEbJtEjDN5sK7PDH2ef2sig",
  "key7": "5GNdfmzTkoLvPeH5NTgswAjfdM6MDBX4dwtMMbLE8HvPaWnHzAeAew8KyaVCq4ZYpMqhCbcjYqboMwsd1HLwBuMr",
  "key8": "rydkNyXcKKz1GVXboZggm9XFBGrCyFm531VFPoD5bMNUbJyyHnS6xbHosD6G7dwjoyKL3NdPecQGZXYVQrE7DR7",
  "key9": "5T8nz2s1ZHbXppZBeDSz3S7udE5poXi8o4UCd1mqu66vCFpNqyGuMgtnVrL7DNDNPz3UzTQ1qEjpFkWLZQFxDb1r",
  "key10": "2n9JEiQS6z3DuAH3hmVZN8mM2qYbkfe1YDM16p1qkLepX6nxXW1Ui3nTstbaTHbhu9VQS4kyRA9hSQ7AT14en77J",
  "key11": "4gU5kkTcT2RQWyxfEfUVsStcvBKdVS4wfZqrAFDoow5G98ha6c85LUnVq9MY8F61o1bYqLQLkDTRPVXjyyqYCnWE",
  "key12": "29PALSwqWRsPvyE2ytAG9sAV7CDDaYiFvnfa6TmEYNs7XVtRhsRuVzBFCizXUGiDiNkUr35YcqHRBDnvn5YWUhJ6",
  "key13": "2iEumLRA2x6gGMs8ftYXgcWv5TpehYaZF1DdqZs5EkGfRYRK2QHQ3f22JPGZkBAAu2TqGoEJqPTW4GwLLAYnc5DZ",
  "key14": "3sXGpxbdKqkJvZmqfBzSpUDUGHbL4wWsVsWpwAMRMQyrNbaU1uQVXH5GWYbNmS14cNFgRghvdfDYbvJUJQY4XEpA",
  "key15": "9N3gGqfp4wMXa3iXK28pSbNfZY3YRvqn4Yk3LwvFM7FF7cMAhjkPfTJP9Wse35t2BuqY7Ng36v9ZeV5WFFvMSKs",
  "key16": "2Srxp862CwnjhGGjg9b8Kphgt5Ko2n5cv4Q1DVkFX6cUCE9meqnBMes34Vxpx7CSXpx4ZqzXxMBHPv7NwhVWbXdq",
  "key17": "5kQTAcGC7NuQdztmZNt8jXMFNLj1QYa2v74Xy1r43fUnb2BEQdB5jwArPqnzD7Xq2p2K5uhz2XujA2Pwaaea4m4z",
  "key18": "4c74FJyTid6BQWRf8EYZsQKe7HXoaVUo2bJXasoFKqX9PHpsFu9b1uGpvVsM83PUBiw2Uex7YjsfBp1s1MbpPLJL",
  "key19": "4Afz8EDJowgtMkH3e1CggdBWbSmrdmeqVKYL1CowrsqQdEgvpbJwz6eZUPnYD1sLSdkXmC8Yzj2c5QY8wV6mGVt7",
  "key20": "4DmzJTTqcUyutRNvwoyBjzJt9FSKzQwh5fgeprkHuegvdo4HZEHJWt6vgEwPo8MYdr1gXZ2yhMLknqL3cSvVcajS",
  "key21": "3EsyQAj3j8zPiSpigerHLUqH7gGpBpEd3nkVboJXESHTQzCPG4tqXzBxCgczSEV8oyyXKa55RYWCJtnGmWa8pSiX",
  "key22": "52R5ExJ4cndAeQJ8KhUZMs8n1ViXvjAAqD7FuSY3GyStPdJ63RRGnithtcPoEGnM7jgwcxy2iKhJWxejzTeUgaKM",
  "key23": "4wNENPY9BZXY2Ytz7LtSjUmUQpHQK2LTqS7XW4tQA7uvcsRwuJFyPxKfxETDCT6rwf5bbS6XwHutS1w657WoTtHs",
  "key24": "66TrYW3qioWxmYmWzjRJZBGmhMyeDZNsL7nruttvoTMyG1qyNcxorTXBtPFdKGTwy1tub8ha8teeZXXw39yGitHH",
  "key25": "2MSk6SQwQhfuE25WUhamvYdsiMSZuKdABCmePMkq8RttKbjF6QDjod7CqNgeSWyET4Gj7bb4kCK6oNdzrdVxKXTk",
  "key26": "4KAYn8Nd3VNQzM33W6jZQowHsXwNHLZx85Z7CsZRBGJCxGjCMAAgvaEJokjdv1V9TNffSo9A2ze3f6byntkYuDiZ",
  "key27": "P5GnZV3ussbgCRmCR7kEfiLAndLB6umSACG1yX1t1KheFrpTgAai1hnDRUqXnYsduYhwNefgFSDAjcof6F8FGNo",
  "key28": "gxL7jxEjjmwvMyTUs7JYRDh6mpuiK4NhsBDqtZLrQvBsmCh7i7vEPwkvVZDypXdcN6H4SNkYUtGNtmfZ36WvLy8",
  "key29": "b9twttgbqeRicGw3Ca2jAfVHrGWwDMz3iPY5AeThhFb7S6DUmQjNxwdufRz3RxryoKUUemcnpau8ecVVNNhbghp",
  "key30": "58HDX1HS9x3GWMut77mudAgn43U5pKxfWRRw2Tx8LqksP5FrK8Q4tnx4FMX2vbQfoJSPAC8KeBb2ANcJ1jdndzBy",
  "key31": "Z6rYh554ocscrS8mQZz5KUGMcTvFispKmgSXuqxpg1svdyBZzM7LWhFiziRabjhLnxHTrtRzrFZwgh4j2evCv23",
  "key32": "JBWnReqq126tqBQeixW7USrXx9DsZ6ATDmQhU2jq6SvYQxqyHjbp8rwyw2MtJ3qDAB7mqkxdizGtA7rymLPkYMi",
  "key33": "4L9XRmWhuVFYuk2MpTL63yJeC8nHMvb2VjDH2QM9AGNMQByqFV6KqXKDX25tQW4P44MnxZYDUGdZ4KcVhwPzMDq2",
  "key34": "5GUnQfW4eHymY5FZY2jQxC3kB8jW2xihRMaiXJAgKjygdWZLdpxBup9ihis6bLL7MCL1otCs6sXDLUoDTbomVNTY",
  "key35": "4UoKuJ6W5iUDDkV2oTSTnCEsECEiFxPAPDVBVsXGY4dKJ6hK7BtsNA8rnoLnbh7zuEbvpSvohKH6uFSmSgyfC8ip",
  "key36": "2LQGsA2Z2Qnumk1LYhsMNiZ5agajz4NWiCVfTMQoFJrF2d1vfw4fmwKrScvjiGU9D2UiVEkyPRtcpSnGtWRenE6r",
  "key37": "4yQHFtmNRMTDZXDYMTCiAkCVvUnQDX6dcwnan9KzGyvjEKQTY1511A9GXjCTDHnci1v5EpDyebUSbRUFPCLCcMWW",
  "key38": "2D1S2Kc3jTBYkBqeD3oyX1v2iy4CRQuzWPY14a55TBRCvEhfqEqUByKkJwZFjy8zocm59ubwo38hykt8ZCv8kFc2",
  "key39": "3Gc2AKGWFnaekjoGPVupkGft9q6AhqTMewSREzsxbEiVJnLX4Ycu42WiVpVWxkcBSQJ3uBH3SX2XKatqkHgALnJC",
  "key40": "2F7w2YSYQeHRBcvwEcKtv8BAVBbECDRAKeN6FnGN65oVwa4emMNSDAT1hWwwgEJU6ngnm3sLYSXcradTZGXf9GaC",
  "key41": "b6XG38KTa865doWgYfghyj4zk7L5zbW1z7NHHr8PV3T6DT387eA7mxrRP5vX9wxTqZcJGFxGtjEGnrEcB939VyV",
  "key42": "5fvqnzXCmjqdpinXyPF7tMEofdNNCqdpVLZJS2V7AD3M5owaKt5jWAGPtsUYCwE1m3YVGzWsMo97JMx3LMnZANfY"
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
