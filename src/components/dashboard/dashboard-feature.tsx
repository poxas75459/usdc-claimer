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
    "3ViFhKFtMhegbEEFxTLCwYa561KArzNZU85A2QtNiDPgNy5ae9Nkk9N5NbxPVNk9oj3amq8HnETcqBEVSiq5Jxsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "seUkWZCU3DVtgpnWDvyS6tSuSXWcSYQTvy4JusUdsw29cG5oGbomfUGZndYdoaJwN8x5tu52kkbaDiyfVasnv4L",
  "key1": "2wk1UTCU8AwuhDXbL3sv1Y36FXJufak25Xvdg2yQezx2mHfCgeQCUDMjG7x77WgyWa5EUcMCmPA2bNN56yZgxC1N",
  "key2": "3sVrK8xGbJCHqC6BPgkEHRmYsUY64y89vboqkwgjbwFxjewmzj7N4cuQH66oS4TbzDDWRQwMFd5wzaTWaxKBNhSj",
  "key3": "2gfUKUHByfRYoZic1KK5dzEtnxcRL7pQVwQdagcN37jbbLkBLMArMMgHZM14Tb8ANRphRE9NtqUsLXHwLkrtjaPA",
  "key4": "3ghbsXd2NvAWidNFXm7Ph75Hx5SNCogJqA5tVFPBDvGH8npvMX63yPyYjL1uwQ67tHhv4m3ZpcTX3K5hJMKJW9ot",
  "key5": "4fk4QEi1nsMcZ1JPubpx8keymn7voXMvnsC7TtfE2UFqtczrY4X2U2UrSxiyPCQkqg8FX4vwFVP8BQjQZHo3pL6U",
  "key6": "433urdKtmMgpUpH3dAf7Eg1iwzZW4pbhGwjUBEoshWnJ19FCzb31rC37g7364dvxXVwtFxeEkTGqJcg6ynq3rQTR",
  "key7": "4GEhKZpb8PTxp6sjN9UtArQmbBNjGRFUpnSnp4DdP5sxzmrmVX6gfDDoJFx3fWhhRrshhFuVkW3JdFi2NjHEm1oo",
  "key8": "61eZTcv8yVohYQe1L4rL6txsbsGetHCtjvcZiZSQ7mVAsfVadx5fm8jEH71dp1LutivxKpJZDg7qfSKf3g6NzUc",
  "key9": "uTtN5iNqJJNs9bCcH4TXGPrsQK8wy4tKgXgxsdtLC3z9Q1NgNqNt7Ed7WdQ3wtRrAQDvPkLqADenp6xYR51ygoy",
  "key10": "3dQ1xFTFpFWzxcpKHqK5GvrzFKKDth9ddaevimnuJwFfKtQ4eQJHYA3bnL13v8R8KxB62SPLFQdw5wsRtABYtwaE",
  "key11": "58Zc64uVAPHWyNMtyytwX4BtGhc3qoxivkRHuowZpiT5Yo7PmigmgifpLGkiSMZDPpQhjFGSHtk8AbATSDVXn12V",
  "key12": "2SY266SEN9KxL8EL9UsWsv1ohud3JKoUS5JJDSNVeCMYweKvSEV1ARGtFxrrwhA6p8B6FoAA1Zy1qxQ41HWG1yXi",
  "key13": "2qmermC43pg7uMscXDc7WLviW3442RoYTguVsESx4pea5UJKHRsaRdPmNQoTHiPCfZCPorTxqhhhMqWfCY7D28UY",
  "key14": "4TKYUMk6S9M37iaZK9yc1qT7Pt6BrNup13Ax1APeL3d1fG3iMAT1TvVoWALZPWFSxbui4jTZ3pPUB9Z7w4LwoAMU",
  "key15": "2huAftza5amdNpt9GtYpLqq1RGKwabLQc8MAUqNjeyWLrQthkxtYQRPxHLMho5afbSEka7GM2eyQUHixom18DT7Z",
  "key16": "Tn4qq3FU9Py9WjY3rp8CqZXPWTaiS1bg3XgdhLY7i1owghppJt8rbRJuu9KsLLSDtCwqAY2bgrqRTpb1ydxE9Vy",
  "key17": "4GHTd7y6i4hMRWvXDyuntvK7nj1jRfqoBc6wbMYuAyV6rPNzvrRawQjCtQGerMStesrYLHSXquQzMqeLs13rMyjF",
  "key18": "ENjEu1UM1TwBZe84evG3xctkatyWeEBV1MzTWZK8f7atHuQQfn2sKoigPCf6B88mW8WaFRtaJroGW1M4bTxpP56",
  "key19": "3LqJRpaJwsxs1sC5NXKf5ofLw7xkbfNTY8Y4X5sQB1CG5ULbQQc938qNJdUzkcqQvZ7RLSTRjrvAyhiFfAx8Pf3q",
  "key20": "3sWQDZKWcyHoZ7dxzKBSvWFxA7gPZRBpXZLtFNgmkkWDdCwRwLjUNvr5j4MuziydfVKB1T42EMMHiUwidab9cFZA",
  "key21": "2BUpYRu5b2kTD5eSPJYVoVS6UvCmCevjDEUoiJK1EQqEgZBvP15HJY6KdLCyrSd11XQiRumUpTEqbGwUbCwK3qZ3",
  "key22": "xiV797CjekQ2xFQNBhKhCEDwftfzgBDpHpEnYQZQTy2Lh9ydMsre5RYF6wVVASKsH5WG6a9m8xcojgap713CcXi",
  "key23": "JAfNfpKFXQAEYrsaJh9q25gD91iFavM6vRjA2r3foVx8saSBsnYgTes1Vbf181Xj9DfEWA1qyJ3SrYfh8g32NRJ",
  "key24": "4ZqF5PFghLnngCk13MnUAU4qirCYFF8fcJCLKGU5S2zJ6UnbDZYFHhrhTWsWd3fFncqhHAF64iYHUcNG59S87gnN",
  "key25": "5DsQy4py4M6sFghLRuGZzzET4He4Mmdfzhv9zWpnDXwRbfyZyHePTXbDKjRrPf7GneuqzagaDCurGUhWZYZQQTNp",
  "key26": "4eXHwpmpqRo6si7KbtQo3p7xMN2ZjmhHrFvGC96z4H4FrKh3Q2uXh1LEL85PEwieUzh5FyRV2HCWdmd8JMC9j7eQ",
  "key27": "k3juwxVP8NkRH26BVWYJbPuC5jiySg75ZvjPtR86M8eDHBxwb4t7qL1wjzJa3H6HH1YLdQVFdRhbzj6hP7GDyg3",
  "key28": "5h1PVcJEW2BXcvYTrV3Dqs5mWiq9AihvPBefsehL7TdKLAZMBJ6ZNnfLumb5dUQ4Q14Jf4s3ZhHK6nSSE1s85x9S",
  "key29": "5PLrby87HWD4NMCQ2sKZ1AmRnxoF1QRVML3K3NeCVGHL2APTB6dqDbp1XEfPDZuvjQt7SKArovLkQux5SGwbxWxS",
  "key30": "2qDPRSKKv3oFAKM461JZLTDLGiQC9mtsnoPWwwNMiry85ryXDqvkSdzLGK2SUG8254XTfe5Jp59EL5UkR7qz1wJv",
  "key31": "5uJMiXqmhkbj4a4b8kdN3duCi8PdabCGoGLb3gQvWnZY8KMBnATZ6HUxQNzyVx4MuqiXyPuYk4nx7XbbofgqkehN",
  "key32": "yhpV6ZmkrSfFqWHp92JTiFsCZDVW9yXek7MkmQdZok59WX6RZ45RzddDhQkrKfSaBFR8zvCSavgaRuk88zW3Whb",
  "key33": "3oifMcsu3TDTYYR9ysJE9367L7BvErH5qp3y8y77ZBH5k7SeNwTFVaxfbUsh9qWdQVUXZdc5fKV3U8Uc1MMUZaRc",
  "key34": "2aTLUuez7qm2wSzGmCN5JXkFXdxotjmuNBEL4vufdQDyaJJAPNqyReKZrbPLAcX9q1eEt7poEWeyWEJoEVzTbBfb",
  "key35": "2cTZotQquS2KqGxXbmH31R89ULfc7rZykPVaXYbNdDJLCoZZqE165xyQPNKBiaQDAMmkTBhbFmijjsgvnxWZHrJy",
  "key36": "2aNJWjxcafMuqRy8VZXm8k4S9pFjz6WY4p8P3fphAA5gZqR4toMb2NiNGLfVcuQRFf9XqhVqH7yf3Ndzg1LLYP3K",
  "key37": "4rRUsuHP3bnvdcPszUtPTZzmsDrQ7GScYa6teXBJ72M2yB3ReiPf7bYP7nf9dRADdgwvVuzv97UBEYC738BjDpB7",
  "key38": "3HRzzw7H2a4ceSg9f9FmBRv6g4K49NBVfPgmuCLcSnvdfo1Xr7iwWgcPmQQUNJEJsuJ9TWstbgzQfccVguZNpsHA",
  "key39": "2U5j4pgA3r7QgB4G7coiXzGdc7iANgGgLL51ByiWgfmmpQSf5sAKcPpFu2aSRDv1Jtx2KKuQngbcB7JGJRHmLwPH"
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
