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
    "2JzrsiLpmdGUxeBxRoLUQqmyK7Ky16fw87jUybb9KpPcxNaJtybSEAfj8LaKAZSChNyU9EvE5srkL8A5NC5NTDSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63H7ZLi7VRs1FifTidqX4jqqD3sxhoMwo2nSpZ8DBCgcyHU2tuFLFvpkv3n6KujPoGT4nf1jxa4KvGm4dhjCN1N9",
  "key1": "5d8TBgB8H5bYVkjC9ZMUtyTyeUuJFFvxNSeMqqrF3paXNYRq7pRZc1xTBVBaiRJVKRSjjuCBhRv8wJRpPepK8S7i",
  "key2": "2apbdNgeHgRdSiLBGVfZQeMaxJHDsqib3STEN81NFcCdUyxFfLS4YWrS2xMG6N3W9r5ukos8ShPq8gbneYJygr1K",
  "key3": "5BLdQ1pabq6QYeUGihCHfqHsLS7NA9mLhBogdpuwpE3bRTxf5Ji4pZFEBB8X87xcsXvPUXhg4pY1UahCvvv9wDNw",
  "key4": "4jXDEkuSZG9iEp25Rx9kWmWxbxBGumjL3KjE6uSWXXWtpC4pRq991JXSNLmNHmhcLWD8NwnupZTxnFvwJ6PSK978",
  "key5": "39MxGYGWgNMvsuGcEtwU7DN52EmMF6mv5EqH9P34vK7F1HFYXduZzR8K96bFryjJQDfXmp2yJm1NidiCQnkxZJVt",
  "key6": "3izMBVHZVwsmxWzyTHtJx61wEb9Qbfbg1toPvjDPVtFGCuvEvv1FKnvGTd22arXXyGhV5xXTuJhTxF8PPUFhppoL",
  "key7": "66y73YEJBu8ZTVokjz4mUWQCfCmUJSUiFtz2h62Ss4eNPVBsASKpxrdVM9GPo7RY3jaYN8nrHg9mHXMkTqCuxrVR",
  "key8": "4g5sAUwd2w2vz1ma4TjXUkTRJUvKqtsyP1hZzUFgzJzEGyzwUznLCM6hSszyhxXR5gnGUBV1FWpJs1tPjBjNn1oa",
  "key9": "52a7sjz7zDEc2AQxdhm59TQzkJYrQAWvyqy8fvQGCewXNiqJRdCF4L74mtTBFQnEhNMs2811z1WmwrBBLwRtaP5a",
  "key10": "5N5XWPHjFa4vKboNbyeMhsBFD45Y9pmjNncpjsjo2Ean7YsPSxhb9J9xNt8Ee9SYvKNXZ57tHd8XLgxvjV5SuUfn",
  "key11": "4ZLtEv8gaUybsqjqhxjd1wmbyDAgz3unyEZeD9KjVdRhAbvN9UDGEvZTsvhMe5G88iePxFUHkhyYP8aMWenspbbj",
  "key12": "RucE9hDe7u3BMxMXusaiaPx6x84uzStBt5zskouQCZetkPnz4PYg4upQUYqB9qrWXoJzxkeEKfJK8DJ3kLL5Nuu",
  "key13": "Hvu6UAbcihjZYGqpsMnwcYY3uJXFUMarF4HgaJDC1VnaQe4XtdDkWRRhG887k4CrmfiePGrdvBK4dMNVL2qZ5H4",
  "key14": "5nUDAXuUB5rxCKZ5Wa2PxcGkTck3d4jeBjubdZG7o43BxDNttzQ6LxnHrNASs55EHUYwD1W4po5r4i5ncsVHpuoC",
  "key15": "or4D1DppV5UHTuWGfpjBz5oVfezxmsq2UGVCS7VBFKH4nGnjXH5FX8WHcQU9uJjWL47XvHsMpnfnRV5NWBCPxYp",
  "key16": "26oqGXJpz3jekexpTuCTWP3Hyj92AmEbTq62WC9zrHkT26M6LTsDywUbjiwh681NRXrHWKtLQHQB89eBb86DKy1G",
  "key17": "3cMSTmpvik1a8KVuwur2CANqyJfvd93AJvAnCUDEvbtkeNeBJ3Xpn4dtcTzT41qMZGgpscKpbJbYCTqxidF1jSvE",
  "key18": "WwgkwvkF8Y1voE6x3EjUYVcHKbE9TzvQngRY4Qpyqurr4ynXvPMdTx5ovXxbFpxaehaV12pc7eDLTrppGXZjxmM",
  "key19": "7xBKG3bAdS335HT4TBTeAvzwzHP9irCXB7epXChvyGuZjazV9pFaxGimG9iPao5FWmoo2SH9MkPqvMx1y37efYk",
  "key20": "6481kbf3jyFaBt3KHhSN1VTPdKsPknW1HXP2LJdb7hZmvPdmucVXRHRd4wCCVeJYz6zqvAzxz1tVBeEo5BbizrBb",
  "key21": "uUcqu8Y1gwABvzox7iCM4kChYofSzWSWBPohRqTexqD8vVYtfAvCCC9VUeARgvQSp6Q8LLZ32PVkM7j8qwupVAo",
  "key22": "cpEHjXMXtvS2Zm1ufkZvuiyU5hQc6xhtZVKNTLjFnR7BN1qhMAQkaacs5phxmPRumte1BZgZiPfC812u6uN5S1T",
  "key23": "wrd8GYtPvHHYZX91V5amz6wSShpiYXSiD9ya6jz9S2ZyEyUNZJdtyLE8GBDF4dYvWaycFevpj54US4Q5ncUhEh2",
  "key24": "28fSVQZUCBoLV4t9Z6Jhu9Ywv79Np5aVbvEhmNzwQGwvraBa6ZqATmCeUr6QeHL3JZQk5sYiqF86fh5eZUFy5ePq",
  "key25": "33eeYrZF2sy3PiggHfLxSfkqgNZ5JM3YsmKa3wCFgi6W6puAE3Uhr1eyJ5FryzMr9kmN323v7iBR4PiaVaTEycp3"
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
