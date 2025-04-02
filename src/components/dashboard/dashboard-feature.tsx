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
    "4FryvxA4t8p4B8ErGjuecM9hocxk38f6kceM68ZPPBFzuBV3fo4fU9rgYJV3Sz9zf7Mujxiu6JNtgobuVgXjxnuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KWCza8jekpLit1PHKHycJvVFiHwhwBYirBCUWQVj3koxCvYbCmAXKrqfM6vADgWak7pqtEr679NvwGLHdwjizxu",
  "key1": "uoNAvY3mWdnKSr86Bwnyz8ZUvTWZLCFMChkxC3u5pN61FJJ93xD3v71KWUgGXbQ3pqeNpJWQqDrkXYYQj37Dh1d",
  "key2": "5CaLSDH439qad3hPWrtaGvZgugJER5uorqGVzHoLZP71VgsQ1GnwCBhuz6qy7xaRcLB8j4ccj5wzxdDrqFQMX39n",
  "key3": "4oSum57DeWJqCD5v1k855mB7ZpdiYwSuVUPS3f7idBacExDVXipJRpFLGVj6ihTv5hY539snrhyZSUN4ahBy2jUK",
  "key4": "3DtHQnXMHTKTR1s6PfBNLb4egV7EmhwBKMBLPwNoJaWDyBfCeNa3gF5xBWfjsMQjUrjiFi72xiTRYfLKb1jGGmJY",
  "key5": "JyQ4sxZSbHt3sBjGgFh3SvCvZWMDtsrfnAGqofW71V75XfvbJ8Djp3rNybQ41E6XeLiM1scxAhWaTwwsLrPQ8Ye",
  "key6": "49zicXFAhaVQXfYqkCNnJqY3Rv6Sri7CesTwBzvrkKUYREdRu7wjvXtWrcXgwk2cZ5cckQ6oGfFxmhNSQVmGp363",
  "key7": "5hdErUjSuDCeHwUDazu56YiCcg7nUxwcA5hktpaQwRouj9N9qSCop2HGnaDPLwJPEW7sWdbb5WjGNmCdoJS7N172",
  "key8": "YZSvaCrzEbKY1J3wqwYEye87znHzpb3h74cbnxkzW2PPB3nYC2D482oyTApTzya7nrBC18nDtg2idNvywr2F18V",
  "key9": "JSDQzf54ozJVZpT2LH8iGc9VM1DSN9vngif67y98yihSk8CnpXxpV9Hk9V8CP9nCZdmdP6HrcB51oUD4fXtDQj3",
  "key10": "3GxouLqQKgiurCjvnpYY9T4MnCXkxcFcGcC5LXyHGwbF9iMJL9PhYnRX6exq2gnr4mPDyqnFgGawHFyvaxj8qZG1",
  "key11": "4MRgRrZGjdMyY2ntLL5N7C1trFYZdCPFTb248M5LNC5Hq8WZV6HUd6rLQKzWbC9UWsBBucwpXwdLFScyN4qfjhee",
  "key12": "5Mb8yZZdv7Kt6wk1vMk7a5tDa5MoLjruFy5disqNSrTed2K5u9TpzvRo4iSr5sqz1UDG1xnEcE2vM5vR6AfR1bvG",
  "key13": "2ArykXLK1kSgQHR2d37986gQPHDYmHJz8N7ujEa6b3Lq8iwjm8gqso8KVYiL1yfJWUaHDYM3J9GrMh4wdC1Jm64A",
  "key14": "J1PvPnjguSxSrdmNTHiceAEvyfaUZcrU5dNU5efC4FvhVSCPG4fJbNUHxP7TKF1iJfn2GN77kRZqghgGqd6STgM",
  "key15": "3ARwnzJKcuRovuTpdpEe3HvfzjA5we9pRSHYdqBfSf7p2dgVBrgSGX4tHhWvvgJYr8v8HGDTek9qcYXRmrN4ALtH",
  "key16": "37EenJ1FR47Do34GCjstm8JZSmFpyXdtGyQGMpzfKbMbURgjZfLMq9E54d1RkiAMMk588Q8q2KSmM44qJYbnkD3U",
  "key17": "4oN5Bb734yGfBrKNkcq9SiH9XC6kL3qrkoYz5CtMr6XwmUrcedGjWCvn95au3HXsiGAcaryREf4zpdSbxbhDKG4r",
  "key18": "2oh4BiDDXrNm2b32giBFEsuvAcmH3wnA78wV99WwzJRUj5hCMkV6HiYGQZxapZYvdijVFCfJUPTcjuuPSsj3WgVT",
  "key19": "2ysjTdy7DEuSMUtnkz8jinuYTKVsCvL6rNyrTcAy2M16TvbHS9B7gip92pwXoKdL4BTcbVvyDJH6T3Td2J9MWEs8",
  "key20": "4w7rkLCajSqp37zRTCLe4mC6HyGfkorEtoz5BUkLGbQ553NuST5G68GFeAxa5LaBUmbuwWRnzuxqDkqd7wL2QPLa",
  "key21": "4TTp6wLCfXDymdfcx5QfQdSG2qxqnyfq3yzWLMZWG37h96kNWPeTFJU89HeNrqfemApMMCH58Nvh99LciDNrPSn6",
  "key22": "AWPLWdbpxDVCubB36T7cPDinPc3bbWzeo6cUHZW9aJM2jRMBPNg66YJHVHm9e1AoYzpX8uiqMzwM2LziBwFrw9o",
  "key23": "n5qt5mZaAA4qhfYPiTHePDxGjeUoceMYaA7cGSBE9CX8WUuyXiDaQs3GP2vcU1RhSPJZ483ihvhgEjouSEtVrZd",
  "key24": "4HVXrpuu57NkB9ZuHwGT1Epkyjv18GVF2LXUQNfC7bq5ebrrsDtDKhrDn2bkPVwMCe7VxL2mGi4UaBQttUuHFRqx",
  "key25": "2Tq6KdcX8tF6iUMiUqw51HX4FZwiXRA9x6Xrjszo3WXfhHVRK5d59LGJ6uAbrmQAutqNQnLR8QL43oFUAPZmGNrP",
  "key26": "5NJPFrwp73j6eG6idsuXnnStsFNZbRA8CFj7d76dCJa27MSBnAx1UdnRoophYYZAvMTFLNRsAJtTAa5YDLcA2ceU",
  "key27": "Yix7h9WinY66Vs33opozK9LB1Aks33g6oraLjrKVfVPFnYcnGz9RSw8vBmSnsDQZVCUjZohFXvbphcV6yUaTbbn",
  "key28": "57VVjavqF5mdHAotTGYFhjbELp8tYR7evhi3WAt4E56PRVnunKbM8LsdGkxzA6RfPSHFKKPTagkdeozUfFLRfAM2",
  "key29": "2WwSu8EEWqmEUm5Y1tKamdT5NBs2WhgVwr2QE2WLyDKeJSJyeqV41WNoETneecZ5Y9Sy99NakeLpaUMcrnf6qpco",
  "key30": "3tzrug31428FE6j6JQzfYe75psqW6QkukVP5rPc5JB2cZhhRA2VJ2CUg2HeGAX33hpuQLqtUZCMCe5mNosxCTS9M",
  "key31": "4DWjGqE2KzAYRJo9m6okv43C1Gd4mwZ6wNW9RznQy3pUferzpTwZ9pR98JjUgaJMG2QQMPDWixVHnJF4tp6HsJ7d",
  "key32": "4SEkEMEYHDHfWtcvqyeLD27WQriHnRkf5irMHaFkoX9LPBi2dEY5Bw7AkibxzfsNsg2fA8xvwvfvdpDhFtrBWxBm",
  "key33": "2Gujw5uK8PbhUqrLU1yXeWDJJ5tdT6Dpx72onHXCNVNqg1VawnxH5KN5vh6XQYJgzFkXMTtLUTvxW3oUxsoMPwRS",
  "key34": "2AehCk55JfiVcdnMSSNGroJQ2WF7M9FuDyRXyaTwckWQNMA7VCohVSTDdPHy75LD2dtMEGu1nig1AAbwKXViFbb3",
  "key35": "iSdP66toUGQjL6ENntVAgj9vv7xVn9tqXmZhem3QxfAjTADhwXT8Bij53SNpdUYXhPWYpoHyfnUi2xsgQ68V11C",
  "key36": "615iSNUvC43Utke8gyiEWagHqLDijrkdoYKjPj3uTvNZsLn918xtGQ4PovDJWjLfEZszHa5j92UsCz4wwJyU3fG1",
  "key37": "32nm1WpNSE8JCd9NjuaKsit5q2nbcyPwkTtmJRAqZoWVFkA6HrYN4hRNZXpnjnkKUGe8LKAz1kY3MCYWWfeRrZy1",
  "key38": "52sDi8Dwo4MPFpkbZghcbUd8sfoSRx9HWV1LrSfutEdnYtoE59UC6XPm9YZvwDN2Ye7GghBtiPuNBgdEvrwdWkfi",
  "key39": "64ThtXqywqP3wFL82vfk3oJhxmJcb5x2649kXK2o1yycxYo66x4cfRa9dbDWzAJSkaHz9iStGi2SahLZzZwA7jTz",
  "key40": "2NSsTFwA7r94SMpmxeBSG3CKu8CAP6m7AfcDFxSrtLqEt8StRWMki5RgAwbAHwQAut7VARgbqAyjcQo3zeSExn2H",
  "key41": "4opEDjcTFufcpaUXd8w2LVkbaZUwraLuZL915X1bDLdR9AvpNqfniS1fq9gqgAzgt2MVLBaAG4hmvQzXvgKRLpd4",
  "key42": "4CPVRuUzFWnQrqxcJu1xQQJN75RX4iyzGHFbLhPdyUzCvttdwaGR3F8dY82842vxWMfFxQz2ejPLMqV8HKQi2NjJ",
  "key43": "2LiRfGvFFhqaSMepvykgmUf8zQYSWTiHGT8xN4YEchuNSD1zq7ts7Azc7Nq8kbkJBy7joPkNfS8MuCzg7RTHWJqv",
  "key44": "5FzthACKAYNUMq7bZtvdzStebc3tviVwNAkV8Lwz6SmYErHuoDw5Qjwqi1bwCuuRM1PQvQHbCRPjjK371QXawy9L"
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
