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
    "5qXCqYdqy2Zb9LLLJKmhPrAEp5yuJK4mfLxbWHDNXqkS2oYtVii1hiXRRBJCvDptVqVfb7uvNLkz5DRLAmz2qFTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdNiKb2qwYX6J2gnf8e2oyvRNWTHUeWvJ3Hw5FaUBL8z9aQ32iRZGxC4f8WApDBad9iWNdqA4J4GMg2TfJSPG7F",
  "key1": "2goeLy5NCoenxiniZNHrCb3Lpyxcjqx7ZfAPy7NeKYHtDizcgSj9CcrfbUupy9yPsAhFsR6cKoLF2jiKGR84SjNt",
  "key2": "4x2FhKopvVDEYc9qaKBFfPdkfd3xuqbS888jiBhF118y6C6hjVZraxLQFLqAaibU3cKHRJFr2NvoYz6LGw8oxhfX",
  "key3": "MNYf2QdDkjgf5PknQ7HYqXhiwrhcg8i6eAfs4ojNfhm2FwgJxUaYKz2Zeatn5s3rJupMgBDBDJJu8EMhjpnAvwV",
  "key4": "2tHa6DjzbtuSjk4DR9PAqmdA4BojyHB2hRcjonX39EtU5MtGXjrx1BPyVu8y58huM1xNu4bAKCgjkHyv9yLNWCZP",
  "key5": "m2683ZnCdnAKt4BUkUZ8vwR4e662Ak52m6CLntDGDfswFRC9e5yDkrSbvnktmByDddX3brqNVuNLJw6NcCjgaZi",
  "key6": "5GQ3LDf6w9kSEqRCCegqmTmCS8vkpGacgQ73WGsvWiziYCHRJxJrqqLaBYt1dKarmT1L12Rx3uC7bzUpu6HTLXda",
  "key7": "52apos2eQXJc6Qn1S1MweMh2VWr6wWeKSYsZrtbw3GFvBs2awQaP4gix4cW9GNZY7j1VFCRC5Cp8eAhULy8FVK91",
  "key8": "4r2faguyJzXx1oSrZutg6BgTXYKWmyJP6KUp3onVE9HrTruwBkAQb3jkHy3XakyR3rWUN8cFsj2tpaAoXZZNicx5",
  "key9": "5TBgHKP5DNVZuymekR7whAMt8q2sDJVbs7A7iDh5deXMMyXg3pJbZvmhR7DsToVHjKTGX9NdqZKRGczCkSJNyH8q",
  "key10": "5m24MJpuHeasgYU1QWXx4qk5STP5rySeZtJMMnES47XBztqYcA44zWkoxuwintEw5tmCDjaSZyYLYwXdMz2AzgJT",
  "key11": "5aVXX4g2bjyihrHzMNRFXCaqx6egpUNdvDvk82zN5HJCeUvAaAaWkNdcpErK2b9b6Y53BWZ5TFKqm4wPBp5hbQH",
  "key12": "2AZsaMh1wRaVMfoFtNkXZbEpbW3iCMbSBqP559cDqDtQLz9gnWyUmciJmmrWrnvUdA7D2i6pATjqN49iaP6K2ppZ",
  "key13": "3sBDS8Ug5kkLFMT6NYbEbGTEb4wvWijvSXgdAdue5sYqLPYkTk2WrGdYur3mU3k4wtYsLfWRhpvSrrEU5PbTHJEa",
  "key14": "FUbD8MawXhKw7yxFYvVzyfxXFGhai4vxGN5sjtc5FDLLsdEFmpedAzJYvhHptX8gJBXagQYoGtd3RvdGohYD87C",
  "key15": "4H3gHyNsSrAQQg1vZCzmAYxgk85LAWFT69yoE1qgjPLdCW81N1dveRzVNMoLYjGLpeeDWQnyeh5GBrQ4ARJmeMQj",
  "key16": "2HXLuFwUfrLB8PKMMt2WdBbSpfc7FDNbbw2sZuEfHQFWDD55QymA6fAeQFNMqkDznM51i6s68U3zWXz2imjzFL71",
  "key17": "67MmMPi4C3Z1K3LDtSYStARvQ5AcsDenaQXF8LTonPdzSwNQtPz24quV6hsGB1SmMGBda2ZiZRyGZKDGgejHGQ23",
  "key18": "fEwDuDVg1rmPxtQ9S6xGwfrUitxpFayaQ4MppaABaaYaWsyCK9iPZrZTxX2npb4Wwn5tKnuEV8H9iQUTYdpPyTu",
  "key19": "41KVozgDFyNNrWP3mQBi3KjrJbn4iW8VRgdCCwaFQ4pZ98VzJv4qyThHTQYVbe8b7Uk7D8kKcBdjVwxoDioywYx6",
  "key20": "2FyaoKrQSZZCu2d2CXHY9844AKTKARKPSVpGjc2GY6ftxf1uu1egqQQnsyvaqFPmEPzJSfSMBHYfzzsTWERuqJFF",
  "key21": "2k4tEAp1hzFQ9xv7idWZVvXMbH2XjhcDkJvYUaUzEiBWyh9iYGoSbq9zvKtjD6Sk1aPoGytcR9FxWv4mCqNUKis3",
  "key22": "YA8jN3RCFa3NnHkVoakgy5LVrrwtVNB9Bu2SvLnKyJHd7ZZce5tWiXDgVcdEUFf795cNwHiTypeztnTQy6seA8L",
  "key23": "3ardv5d4EfrmiwqKZXg6D55dj3iDZngAgFF48xdFnACFrZJxJBjTTfLDpCryb6M5UaLoGQJM1prTFw1nVUy8LXJW",
  "key24": "2YPZcGC49Jjf26fxaXZMAJahbBAfdztJBmdyeMtum3pZX3DnofHyNMeQJyhNrtpCy3RoAmbXwuxQ4KgYyRNrp4Kn",
  "key25": "2LRBULYsg6eowszm82RWP2R6n9p2k1m8ZUNLEhmx6ikpFAFqvRDC3hzSZSX72jL62QpZnsa6wEgQhzQ9fnJiYwTu",
  "key26": "R72gL4W6fuY7vGQWq7u7i6dd7WHLJbjBjhvXNt4gLmHNLCPLDG8ZjASCfDxYv8gxcFSXVV75pyDiLv2bx32b8Sb",
  "key27": "Ffbi8wocnPrNvWzVPrykKwryzsvmg4bqT3caAsy2YuV9gEqeL4FJMcj5JwXsusdwex1c8A7Upi2RHQJCsbrkERC",
  "key28": "4cEuTgGL3D5Fy93s66ksL8QFrA2kc3iNJS7UaE83a3v7Jta3FaHm4z9zbKfpUYuSZ2DsVjJopxvjVEoeqrMqxgKi",
  "key29": "5fSX7TSQVMQZTpSvkESVdTXeeawbcQRzSo3guoLkYCkf9RZsJGXTdAvFv178YwPc3SkULykXbyNoinJpgHxTJ1ah",
  "key30": "5M7mVEP1iCUctjyzSrTB9CEE3CkQYZs1N2Gj1bEfGGoFUaPSHggU48RXbCBn2ZKyX1wQQjMbQYwXoV6miGem6Sa",
  "key31": "56m6bKm3PDmsY1uFMX5AiwYFHZ51JRfXjumeAmvEHxir9FcHtEptbHB6nBkgaimWdZ4ZfUpZ9uKorekbrSMPqeQq",
  "key32": "HKryx3W5qPSag2JDVobAdsHx7NMLbJMvtqeX1SDT2KRAp5hHjzewqUtWxzy42a69eXaKsqY6x4ptfgD27mE8S6t",
  "key33": "2AgjvmbxKycEpV3LDKeViLhgUVqxSffxXW5Fy4iSFAcYZu9w6RoMoRo8JV1HZQi2PMFFAyhrEZvCfTpwn1TrwCDR",
  "key34": "3FDXb1Gzs2NH2fX7Ng1wuyaqQR23LVssjdfLKk899iHDiZo5Tmger8ZrRf1TxNHvRZsVjn7UXTaGotLLZwwWTfeg",
  "key35": "4Ervz8h15HqPxrJ6kxorkZgs95LAzojUyDBif5bdRton97VngZKrNmEMV2pyEbCAQd8H7eV3kayhBkogZPExqvFM",
  "key36": "5iUejLsn4KgXEJW8yxiq2f33fTAfZ1UH2kHwV2PLgJYygRKQBH8hE4WJYHj8SkswEgibhJkkLp87Vwya1kuAARz2",
  "key37": "3UgEV7TmVLpHyN3Dp9JtFnuSfiwjQFEqe4cTtHW1dgKrLhTdjEG4ekVGLEJaC3zhXDY6vowor2r2xaf6AP5Wa63H",
  "key38": "5ifS7P5373JirVJcWkRYTBN2tJoMENaN4zhGNoSsZZ9UddDbHDa3TGGmhxFwScgErD9kmmxyWjrKC8m7KBXqpLnn",
  "key39": "2KRJ9jhskDujEWVS1EKJTHp6fwAPA4nRE5uT3XaCSNVcYxG2ZzjiuY7aUDuAjBKy1TGRKh1F8m34hDifkgwade2V"
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
