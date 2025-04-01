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
    "4NkNcz7M58RfmiPuZJDBg69mKfXwwqUts4c3iEyGwhsZHcEFFujd4ajN5DKxnE4VgwoH5zbsteaAw97JponxkrWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36J6J1XhGTbcXkwVyHAJyxWxiseFYtpvLTsopyGiMPnmzmQqncNmVyXDU1NudTUqFBnW4Yy7ih7aTbDTdzLYHhXx",
  "key1": "HRhijT4KKbyF8CQHc3ejvkDsS2DgWUq38hVdTsAMnLJwHPpKecrcXjFrEa4tAvyGRpNohLSP1bcYkLhPNvvg3np",
  "key2": "3JMe44wwqT2Uw4zr7MrPzrVa4M1EttETqbRVapq32x7JoLB4MFDz8tZkLE3rM3GjAL3if9ZBz2C5Fuf6sh9iAqs6",
  "key3": "3fgoan7AJGw2CsH129N3KNK2f21TueudmoFBUVFUSbnVFJL5kNbtMsYBphA8xRhs8ioGAnWzbJzWCbHiMWKJSYTv",
  "key4": "EvSn7BtMi7diC5H5KqBPQq8gzD1MPNxEsgPZbNyc1mxjnMmKfNDETVH3oeefaTpyHNqH3RZuwTkKuhxFxfaQr5Z",
  "key5": "9M6q6Kj1c4GCuPw2azcneVp36166KzZJ1d5wkGSmRR6omMmgTQBLwAkLhPqickLqEbYfmHEGLjaqxbREcScDDpf",
  "key6": "5puRpU4fzrLLVCDKgKdAwmjF1GMV4pbcZe3Q69zHBS9mQ3TVEo4LRuxZR3fa6ZJBbAX5X94jtc8VEgXX66bL3csU",
  "key7": "2fgFDEpaYLye4pdpwm7SAkm1NacAiJLVNE2orRgwpYSDjvFtg5FAFMqNFxHQgrWwGmeBRs3ZKKyxpsQBgVpSD1ez",
  "key8": "4tDjuiz4ych1yJzhwBhzwt6nPig3tRDQARXap1742XAiejNnzxh9gyPKta7mg7CSuBBHRu3JS3c3mrptQFKJNN59",
  "key9": "5Eo61dh5yFJ4fy5eTZ16eSgvHUCmkdRxWeY1hdYVjzbAsRgT4zinKf3j8hG4SB1EjKyLPRTsyLvnFVJ3G5ksZmpL",
  "key10": "5aHEHzbWKPYcyuo9f3JsNKGTLFUs7FqZwsApFsFeMmEpMb6CGP5AxG5VUwwgEhfWaxxUwUyY2zrynjASvuoEre9P",
  "key11": "5tMWDidqRRp957YFWqcj4ZKXthu1PJz8NgBDhyPiJLvy2Rc1E7XJVCLM7TfuzsDhRdBkGxgBwU95LCWiGsSYNNFp",
  "key12": "syMFNsv9ASQwBSEnHvFm2BHULwKYrXhfCX2kpnwU2vT6g7aqbfcyzvsropGftsc8d8kEHD7tKLRTzTbrhiAeeBs",
  "key13": "3u73UcUPAeqDNb7s2bZWpDeCJ3xpjSCRu6YK35VvDx7SCijhcDfheJFwhUv8ii7Uxh6jzBAb8tBTsnUecBZTWPEQ",
  "key14": "43Ry2Kzbm6vWAw4bJKJ4Khu8wvZyKwynfoZfEF2zDoNCGoShceLm7Evd5caA72w4s47bkbyjCSY712KcbK6H5ifz",
  "key15": "4ze7aheRFepP7abxcwKx8sB8kHwLHLrzJ4rsJZB9EasJpJ61dbEubBa6GCr6QTVo8BgPHGegvbnXKkLuLBaFm6bH",
  "key16": "2gEmuK5h8TYcVy3y8aq7Q5nVk6kBhrBym4UADH5LwvsLNvfEqJZm8j4Gk6DP1huim7jGVX1rRcMoXZEvVViNtNtC",
  "key17": "5ZqPn15J49LB2e1pzCHcYMuZNSY4js2kmpVmis9XkG5aT1Rdi9L5XRXXvUVFs1m3VMa9bsQRguWbWpNvmFjDWQNa",
  "key18": "46AYQd2ShaJbGvVCfzQ4HfGnzAydhyms1e8hBEh2Pm448PcKst6Bvmdjn7Vff9ecVq1BqaKDgpayXuenEgv8TsAT",
  "key19": "4tmt7pFzFbjc6C9L35LkHne3AJPsP5ZJdUfn8nW92WFrcp9MMLzioBnL3Ey1NaH4CcjouRohcbzvHjgv1x8GRAwx",
  "key20": "2CjDmHaFu6BqnwgryLtju853p9qeNyZUrBBMimvmyVyGnConY3ghnG7UMnnGUTShZFuTCB9fajyRD91BiuDJHnDW",
  "key21": "Tr4mvYtu5zKkyxinhfX1xxtqXzzGrH2XbF9ozJ3dFZ8h6DTTCLtjNpJ65TwRMASu5LoPzYAMcxsh6jM2iWkwCpx",
  "key22": "59PxTUcFJHFM5DVjbQGfAhpRCTCguik59678L56dmzLn3Cw9HGTD1sXTPSGY1Yp9GK1TmGBVW6fG5is8cCHwv6bp",
  "key23": "PWjDYouq8iRhxbd13oTLbGmPkWiZZrwToydqsVitYZy8c7y9TnQdmWUKc76ruexXGf8rF3zqScpry8AoFtw5fx1",
  "key24": "3cHnN27tU63zrgMuqXPsfiSy8vyi9PNYKyqpEMxUyMdZL8jzeL5A8PUzu9MQjGKLuvAQywYVSgsxqVQsYivGXmKm",
  "key25": "2bk9XyMhtXYCA5ukmRFdHSUTpWBaEAJCsQLwLRsHLjBLEtRfkhMXCnHuBGrKuVWse5fi1zH6vpNCV84AZPkUhabK",
  "key26": "VkDMCjNEGF5GjxQF8o7meSfZcmUL8wQ3xtvEJjQSVJiAPpHjveWbjFLJeLrEVhbZnQMSmqRZZPjmWg29ZMEzXoj",
  "key27": "2VDnSgZ6QeYrrV5cSsEgYkjrJUWqYsbBnM9CgpdrJUeTt45LVjQtULYMdvk2QYEy3f33qns56cBkp4Zbn8dvhG4v",
  "key28": "42iN3z4hcwZJQ6rmySdpZkSQnTxPDAWLyC1xFCrzU1uU73K9LNpqUVSu7zeggg6bGSqpYmozXn8pUpzf34YLEEA5",
  "key29": "2gDuYVhhwS19KW4rizdwB5KGBVaKiCRXQ1g7meqbfeehQLgiTBkhpVApAYwVMaXfJ8fCDCUxpWLJH5274bYBpUMU",
  "key30": "56kPgNehrfy8mVAC7rhwvXCd6rZ4bHc7U3VJ7mGVpWnTo2XHUWNwDwMVyZYRQMDgBYcwJGJWJfAmLdkbv1qQ1zCD",
  "key31": "4VScRx98J1nqE2fy8janpooRUk8B343mXMuhQE756pHAG7ino7fUXK1FNuqoRCsjJDv6bxz65FnYDsUr4iVRaSj5",
  "key32": "NxSdgubdKHW5HxhfELfnh8fH2mtqB4mgoaAMzDFdVqTtCbeXdMZcyqDai27pZkz8wmLwGWvvCQXXpB4NSAonuFN",
  "key33": "2z7rga5TDgQ54ZF5RkHmfDM6s28VWmVyXsfaDhf2W3qg2CcP7dkVE6DC6puSXniiKEASbpLktgnR8nJFeR4o62Jp",
  "key34": "2VDBNf3NPichEeruvD1QreXksjptRmdGZsbbc2LqL8qp31JskZDcNYasEuVrWCJnchmpgJsqFfqXzERKLhZdEHCs",
  "key35": "5AJTGwZbWHjtXBBdhbfVHANNfbS2C1tCUNSQugzo97hYGyQdsWy6Sgybo5jgbZjrua2NDp56hueDJmep7JXFdv9c",
  "key36": "5nzEUFV8QXaWMBctVc3Jk5ngqkuhSLb179mWTF54i3egvbAdXv9picHGZYi6oB5opcSthcS86hs1zbS6VVFAi7yj",
  "key37": "5y5uzazFdydHmeX4Pb8zEsZ4ToWsrBpJo5eAyDoJhnRUfGd7Ma8AkeFmDy26Zkv6SePHF3hRskLqftEkerLg1vaM",
  "key38": "3mamteLhveR1ADFuWQRtVooNwUDEvqvqrjQJsFjDgaZov9ui7GNsWWQicdTqiGN7TL1wMesgZgyQ6Yk6vHhR2acv",
  "key39": "Zjh8Eu8yRXma3bFfmn6bDqM1ALveQuop6Yg947967hNFqXf681EP2nwNirEdpM2Zascfg3DTziKjveJFsz9rVP3"
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
