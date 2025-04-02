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
    "2dAwxKMucLMme3GpthkRWcVrY2xq1qoNxCFmkZjECNHKwPXvMiDu4md3GWVhXU4KjSRYSN4vZnM6vQo2SvZTwVvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TWi7DxRZVY6FmsygvKVYYtM5Xde3HBBbNFWpVfcEHhwqKkaSQJNWExtVpATGeBhMdwrrT1NRKvXHQxcANpzLohQ",
  "key1": "4H3UnQpqv2DTKiUmUeKfXtDcom3j7TYUZ3Gi6j4xYVYKNxcRnsVSWQLZ5KM1TRa7pwRY6BbKbtdScHSh5G6M6dMN",
  "key2": "6X5XL15CcNELmkoNinUQR6zUn2enRcrRwfAoNapXXja2GWVfwrVPGqtv7vzLTdUaFLFJsnLgjND3B2cRx7C93te",
  "key3": "Mjmtazx2W32webd8c38RgN7RrCRVUSseVm2RST6to7hQvs1EMpBQSNZr3r5mbuX7nNgzHv5SmWZcVwVNHqspsKz",
  "key4": "5z5rcSMEDGMDLXDGkahFrNTrMKCDdC6pzsnDtzuNwr9ZwUixKiNKU8K7QkhC5CNP2NmfYGKNqyVvHCEDrhtZFpV1",
  "key5": "25RGjLUUEXDC1v8toXfRkcLp7Nu3qvdymjLrX2DoA7DstDusF3ARwDfYCQVZCKh1iFvm5G2F2DXBGKQUt29yNyJP",
  "key6": "3tZSANBTeYUGioRT4drKDNR8oFHAQYaj6Zrk39manrrWwQVwxnW2ULLbUYXjbLf1x73xVDHZJP7aJmEuYoYaBCZf",
  "key7": "CzcugV9JqiuCJKfXWTpJxQgM43Mshi6Lub8zgVNK8L8zw55k9mLHF6H6xgPmj67hvF4Sbu7dgVSNHjmUXSKxdq3",
  "key8": "5xb71MFEExec29ZCdorVj3Em9EPdCtNvcTZkZUBqjPktpxEFbhP7cYpWwYgHweJpEWz3VUcXiqd47A2FrLTaYKVm",
  "key9": "JKnGLVFxnrn45rXYqG2WeMoGFfnU83THLjuMmU2QUG3ncfDNU9J1KhisGZXDDptzipVqNAkHyDFNYBaGnJf8k5k",
  "key10": "3rvq3byu3mFqeadPmdCBT8p4bfpqoE7p64Q8Ks645ExX8VxUPGwg1pur3S3iZSPRUXnRNPKCZbSjoKbvidvSaySD",
  "key11": "2PUMB6xBhmGtsM6q8xJpbAp7cTdGDE4vay8Upk2WRm6xG86SRtRN8y6Q7e9dVcPd2vSJiUB7rSF5XXP7HqxSK5Xu",
  "key12": "5hugNQQDM1CW3bo8va9Vv91LRZg1LWQURd1CFrRx2pwkqNWwmKRiCv5ARuovgVJpVGaFzMwFMKupFi4oZJfXfcg4",
  "key13": "5akiw7zEx5CW1miXj1JdUWVd2Ygb83yVsctRbrD3Y38jjpWzHAB9nUPprt6oNaWNyUsKtQqxtTER1jgdMBVb1dsW",
  "key14": "3ShwTq9X3zZkEkVVpKhxDQw88m1bTuV8v2nuEtTm21zPuzzpyA3cqXKguda7fJ5PQwufM85RkVWaVhP2efueM1uX",
  "key15": "28dBBMbsV9zRVP2P6zxbYj7EonVWCuwGjzj3HWV152di1LEBRYbAxJoPrzvisjyHWwyvLBZCetWQDNkcAciBBtfF",
  "key16": "2HXsPiw3VDsCJ5jJaoFAsmDeUMk829NgLTrN1HKZEvWrLctLcXB6fMSMQhYCkNVUTJaWFw6WtVyfxHNrtMqMHrFQ",
  "key17": "4832r9sLRmp88ko12F7kzYK799TcrQxNULyYQnYHsJMKYBoRx6Cb2YDrQXvbVWhn2ZkQBsbPDJg5V58GByUn18bi",
  "key18": "jpr3k12HoNFhWD6sm1VXJTik85UTPmpH5gQmdEQneaJtqpWhNjUpH1RUMATofiw81dMbH6gEWz5QXTJoCqnaCsP",
  "key19": "3zGSfJw1cJgfCyNPVJ8Y37nLkYViA8EN46VLu2988pCAupXgc2JgNB7qbTZ9Wcj9P9Cf9x7FbhzBaZsdYz8uBPEq",
  "key20": "4Gj7g5NBXe3oM8YCKRAskP6bTA3Xu5CrH6S8v1oAAuRojsy9KEZg4TALXAMPjgwHE8iM2x4tvqTujemU8G8cqS4H",
  "key21": "4yYtu2MgKd85wfbVm5x2PZbTzAhJ3PcuSy7jHNrA4Tc7k2WRTLp88AwA55eSP7KD9RpK79799vmDBbPwBSVZQiB3",
  "key22": "4xc3tuyPMmHssA9VxbKcrJ8qqjiDJvni8scpWQRhoN94YF85xv5ez8xJ8Rbx9jTK3aQqkRX957EZ2yMeSE3Yswbc",
  "key23": "5wh7xLvbG1CR4F3abaA6kTCaA7SAZokjUk3W4zHpAfz6s2uVbgkJm35iBvWXyYtPSm2gAxFP5P54cZmeq68isQzW",
  "key24": "G6gUVPe6GEzURmHTXAJz1V3XHuptYwK7BmTbhgQfv2UmyRB4JYMjABRgVr2Ttdy5GP6k3bgSpg8MzYkXEcAHRcZ",
  "key25": "4SgUngtKhw7GAVXXdNHdJK1x1T14mKR3nKMe2fZeRp15psXnFvzRADUiT2yXLz3B4va3JgKRBaQbpfgTajxMY3o",
  "key26": "Uf6ooUon9GjdraBGXMmiBfvyzevb39xki5stK861ZB1YHQUWeK2kieMN9YhBWc3Rq2PNAnZypMgmzXpdq42b15F",
  "key27": "3p9oZSfU35XQds15E1g5LmEABNPSwZVYMcRMRjwvDUkQ8xg2ibnzU4hjxPTJcdRTME5zyTyBRQXhqaf1LWEGMr1Q",
  "key28": "28vDF5sExNabamsF87RCkmuFCA9132bF3NBRcZxvxWE6jV85r3taE3DRVmZka3aQt9t1eRWwBHNL6fNdyNdWDLC7",
  "key29": "4EkvXFtrhwrLH3sLJwu8bJ6Raxb9NVw9KXhbDmKmopxhHA7cfQfqw4Tgj4Ps5mvjcnNscQ2Rh5t2aySRMrRAYE6G",
  "key30": "3qE3bx3mk37VqmhJ68J2jjjmwAwAFUx6DZBy8e1WcRZUdh6khRukocE4C4wM652ocKVo3BVRxYMaHEzKUyguN2LR",
  "key31": "42TaUhL7nWcMR7gTssBGjXNrkK7wirDJvJmsknFL4FghucFGNcUbo1S9sMKVYfyk3Bg43AndKPnbxaB7Gw1q47Fz",
  "key32": "4hvxnMAzX5DdZTvTd7DYxHEXFvTD6ACAJFN1jfXSo6nsPx3i5w2X7hqp23xQHSE7KTHGpVhePkPSevPTvJ3ztKv4"
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
