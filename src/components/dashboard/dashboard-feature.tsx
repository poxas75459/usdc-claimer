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
    "47VqfTPBvr5fyyjpr7zLtuZWDEuvyztnxhtqyXAbk1Xwx8SBchUNzuxgcg6HcGyEoFcXkjndSkDoZGd8JD7bbPXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "89qt5acCWL6sBMjnS5gM5tNaJ8Sh2DVWfYfu9nfiMGFDZ3Z1gtJdZayH8VWPJDiGaNq4sET7Qoa3AijeDhVQ94S",
  "key1": "2isov3xz2fua6jfU2qpbQfJj3Py5ih6Sk4Hpa8ixupFz1bLkKxiAqYFBwEdyuW3FbHT7oycfz7tTM9U7aw9L5DWi",
  "key2": "42U9CHRD8Nq37BJJpmPBD3nub69VPjGtFki2eDCxSDJURSx6DPRYjevaWPbtdMc8EvQrWufEBpys5uirdMm55mjT",
  "key3": "5JWvY23yURFtLEbVuBAaVo92t2ugdhB8kUAkyzu3bKji2SAHfyzgbsrFGt5Am5bJJRUQFoL1YDPfMqj5ZeEatxac",
  "key4": "3tU3BpQTzTb2HqTxcKfd3FAHVDnQkBVYDFwfNWCRknWq9Qfa1anKtCAeZM2wjwFaafGf5xG6pSwNj9QSPFcwLi59",
  "key5": "4xxPTRQCXfQZqQivxU9baUFkDoa1PowMMsKgxzgjYfqED5bjeja1NZvrJXKVj7bMtxfZhb7FH27bBTDjtp5NYZUW",
  "key6": "5DQps7QmFcX2cYwA1zBSnGYxcu4dq9W5PCHQmMRncpgRBdC3X8AZd4u1ZBUaZMmUWnmXzXLnJFH7CjdpdGeAFEPw",
  "key7": "44zZt2VobcF7rRV7YyCYw2bH7XesYB26xNfbYHZDgbScxDmXY52GRK91WAEuFkJgQQ1dmts6NgAxXYGVemj8h2EG",
  "key8": "4B6fTszXbzPvVCXqfnzNhsnCBRf9QPTYEwohckCCZJX998RhACmejGXygBuWNjyB7um524Zahhkwy3UANpDyRdZP",
  "key9": "3ryjQoUNkG7jbkXMXxrnCTa3F4QyKhRVoTq6VEAwq4PuTL4ETHEggRipE9MCtj4Few1YLAYzf2pcWqyf6YfPrHEY",
  "key10": "4Y2VZJvxRdAcCAPwj7Zgtm5wqvJw5dLVRiqur71uKwSHCwufYGbPVK4sya2UXoB44pqRfWG4s553d8VS7pLKbsnq",
  "key11": "61yHRpoFczm6t2T71abuWP5B8chZQEmUNjdXZSqTQNdXoP9piFnYjiYkgRb1dPiovAYT82CExA9FbxyJXvdNBRj",
  "key12": "4UoexM5zjrTDbo7f9CCK3c9cpZaYW2tRLTfz8GtvjTbgKVeUNWB43BgWC4mjgbwYfr3ApJ9TVFN8ib4b21mHDfR1",
  "key13": "2YPymCxXhYqpbCj2Wy6ffjKvKtzCuCdD4HapiXAVVvr69kwCf3NwLgsKwRKS5Zficmuj94cTV4GeSw4FZqcgxYC8",
  "key14": "42q5AchoC45enytGqo6zBPnSeEwcgfGA9PaKVopiUxnzenGvmwiU61zgupkZPJo7KMRZZb3L2Ywpw2EadzhC1Rk1",
  "key15": "NX7YxD95YHZCe2YRPkLuosdqhBFjafzUeaFKKn9nUWNP6YSGAAzFRybWKZagg5S1d3jE2utDubTZSs1nurc1XMi",
  "key16": "JVW5KMAvwjY6TrRbCKB9Pbh7one5YmBkwKR4k92b6QQ3G4zkPftLGD56hpJ5DXp1mtwsaShorNSFbtrGvjncooK",
  "key17": "3xddqRTRKUB6LqX3kN7jMBzL8bmf9cHgLYitV7LfH2PoVBqih1UtWs388nqqUzZimjQ8iUrdzszFcV6hcWiSU8iS",
  "key18": "64tYunAvgdxcsSNVrnZ2QQtgs7MqSB1Wugumj56ynSgWkKGcgWtcfmSt3SSYTEUcssj4WD95Rtxpj37iU86sjB7k",
  "key19": "aMcvnSKem2J3xTXiZo4DN5YkS6H2zMLywAxCnxAQLbmzKV7SAceBic7W6i2hJyjaQb8GzH29qHw3ywiXg68jADL",
  "key20": "2HRQb3qQdPL4gtFoCCurpjJqrbmn18XLw4NktoeKnMomfhFAvU6JqTHMZiS8HohboFG821UApVAvuLkhvkgv93Kp",
  "key21": "PGLpQYmjDo86AFvLMHYtt4HWATXPZrCVcM5wh1z9bv3kZuW2jNvpnyogLwj8tK3BbNsrW4S8ywSnR5shyU3dbCK",
  "key22": "3wb6eHpBnSDx8CxiqZGVzSzkXxZP5ycM4F9cW9ewQKjBCUxURUBmQGTF6MEf1mE9EEVi5DyA31CdBCT1juvHhRDo",
  "key23": "5nF9UJQDrSUa8xAJ1ujbM4g71TzpsrjZojfL3P8zMwBrh3xLc3ztsjsmdjNqNuBJtLV7aivxGmv5eL7M8tFMec2d",
  "key24": "2CKmAiBJG1EjV6553EwWxpfLGWJ38w4YDXMDB828qHfNog1512A8CSrs8PRb3Xjz9JGhXqjUGgaNi1u3mY4wH87e",
  "key25": "4CQkUMyqzxiRZq6RZe9feknv1NoG4pqsM4M5UdimAFknuW1RFZLzvGJo3svWuqBw1wiHXG52TcCwXB7dFrvSbnfT",
  "key26": "tBF82TYpnoyzvVByYR5t2ZtsqRrpD9848APwm3DfupgsbUwvWcsUokizj79KmRwcZ8uXmDqwAfUvRwwet2L4P8Y",
  "key27": "4NeK4itW621KXhd8aKP2mkhgZEMiv4Zhjt22daWzELXVcn1w543EWCaJzzkLiHxz8M4VW14pTTL4CkdAAZPUsXmy",
  "key28": "2JpBz1ZytLJRAgUjtQ5B6poEwQC4SahtBd3oNLZvrrGESsUi5Qim22MakzvmwUrCJftXhq4AQHt9tb5yQGEawM11",
  "key29": "LXumN76CJmXmuvAWgPNgEjT9Hjf2yBqSjvKgjDRzgCGuCJeVxvx8bfFS1gVUCRym8CERpj54cSx4wzAivcnwQDT",
  "key30": "3c4CsQs5wfFPYb7JJ99CUTkyAzsvZJiv7hmM6kVLSGt8VGxKhnT1YxQuZc37GTs6FTVY1PAD6jx4u1EbnTVPUM6m",
  "key31": "2JoqHGr3KkgCh4rEqtCfmBDppkMnX4dKT6z5KQ7Cn4P9j93MiuD5gV54mEsDQVicXS1MtbHXk3UxaQYwbBt7rPC1",
  "key32": "5sN2prJ5P9Eq4Tv4QGmux8yp4XGV3qjVHSqb3LN81GDtGEniEuakMG2PV1K7oM8jHKEJDKpLFDEkoZqxCCkAuqzH",
  "key33": "4rtCu6hWRoJDwoLxiVwhBo3UKpPU3bHNecAES5T7uWCMuzkdTjNZ358amV8hjKk91mc4vTwggFhEwCBmszxguDC3",
  "key34": "2KmbtQt8xd2xZ7sfYA6MzY1CWZ6rTF9c5QjjX3tZ8YMPJrpCgBXopcsWuewXrGNtHjhmNvrHoS1synt4a9kUiLXe",
  "key35": "kjYSkEC5H3C4muXu1WjimbRtFy1kbU9NPpBm8pJRooytQWnRRzCL5WpKAnRXkh8a3eYMaUXJZtGDTbxbCyXxRoD",
  "key36": "puXRgsZMp735QedchRLWNnMEKcKZnGCGUuEZh5VjaYK1kKPva1J2wrSkDca43pxG6QFt5ZdzfLV35Q5Pgoa7h6o",
  "key37": "3i1Z3VCeTtfgt6tf6JMeKKws9dsV2mb3Lr6tKrwFiTrEWVKAYwUc9gz2x3Rhop9AeojVZAPNVCWfgGnbB6EG6cWx"
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
