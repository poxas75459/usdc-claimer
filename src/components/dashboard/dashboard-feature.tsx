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
    "3NawpcKPhiYt45QcwdhHsCs4KNinJvBSwy2qGq6EH33gt7GGaYESNZkx2g8gBHSdz2eCvMnJCfe5Max6HfxA7pRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GpUFAei6W1Ufa3t7RE4h17frW6RTKCU8pRyQmCwmueVUXpun4D1Xbr3Av6fkp9j4n89FDDJiAaDK2tcwaUH2TGY",
  "key1": "4hYw4Cj6MjLGpspEn8j9uHH54QjKTxRDsji4VoGXSeQSV8zLZQQqG4t84mk2aWZ7ciW3ZAkAkAij1fuem2LbkSjs",
  "key2": "V46fSZDnW9YMCzuWMFonMDRreWXF4bqELeeLDudGJ6AFM66pC8wD4n3PQwbEVynjJ4j8LPrx3B9XwFnRDLzKA66",
  "key3": "2QP8mrmLx3ukP3zX4gzijsLfCDSAo5kjahHhaEiRa9n2SBnTvStYpmWDShHSpXxtjeHbFMAj6EMLJBPWYVEEczDQ",
  "key4": "33uJGxjMDTutKgu1ru6bF9Pwd4rn7MfAcjP3J35pxoAW7CgGYKnxQw4d6gdbq2yzTNw3g8yyTfZe9FAVCTLiG2kP",
  "key5": "jDZ7yG7NjDSDCxp2cVbqPucLkMHTWkwcfCqrAF3jzYGp8TaTkvedTF4YsNumyYGoEwLoPbnRGitQW9UgmrG4qa2",
  "key6": "4z7EWNP59B1hWvWDeAAnzhqEN7LBD4TvnMZLuHkWBW4iYtPtvrknfrCok6SqntJy3MnDyJwM7jLPB8bTo6HJYgHQ",
  "key7": "2t2VMeaA7FFeH6f4WNToVKe44VF3tC3bQyHjQmUZdm7cGCWWUi1ZHZBAR8whvAEvuQbhCMERWxDkmcHrR9SsVmJE",
  "key8": "39nmq5HB8HtuZZb1uvyDVbdyXwTvBEairJ9Sp4Mjrm6iAgpD5M3NswTo3EwKrqmAE46PvBCSpqyqybkRP9a9syYF",
  "key9": "67cFwdxTUQ6SkCdiEoEEYVfA1SxXbhhJwaTgSL6Edf6NbeQcdJW2cG1BqhGgroY8KBrMop9v6nqp1L7ZHpphGhcy",
  "key10": "34w4CnARFkGrZf5EJmgpE2EpTAzGTCvRc7P5yQzbhzoun1YWGUYyR1svF3cQ3tMf5CRSxcY1DQJfHUGHq12TkbC2",
  "key11": "51K49nq6cXWmxkC2zfaqXEsaYcbUrMpeTUiJ42nYxSNeWLxexBKJAkU9URXVKdFz2UNpQzh5UTSkpEstjDF53rgz",
  "key12": "48TSKw8wTVGk8HbCkpV8YT1EJXiWyc7VaCSBqQNCo9ZU6VZ64i7mrpogYqfEx6G8a7TMxGnzKeT46DPXxXrtWBQg",
  "key13": "2QR4CVPz9fJUkgCWz7R2ot2hskfC8iKv58z8FKGbWZYMBnq1CPCuGDbzoocAagEqq8p4GFBGXrVSsFDwCXwoihzx",
  "key14": "2S7fZcZhJ9gwSRF5zwMqUdiURuxanPbwiAZNs25bwSgBneY62PrviyhhTsryWRtWVHR9CgWJHh4uxAxJzkWmGGaF",
  "key15": "3F1EjDhxwms1VuXLA9Qh9eX3MvYDzqobo16fndnRvsu2t2WuAxUtR91osk73crSQtpwn4BTaFEQc92acrLmb33a6",
  "key16": "i1WB2GMt7kdK99cc92rVQQv4FqiaJZZPVPGJg59JBBsiRmEZbkqQmCYQe129rDshyjmzbzNHCL8amnyqyHDH5vZ",
  "key17": "4cvkpCZaY3waw1bUSjiLqrVVi2iXVv1g4oh8FK7uQatsotJoW36G7igrRYS29U5dungA78KjZfQQFf6ZkCmKhFHo",
  "key18": "2iChRtqQan5GxHfJbfgoZMGvmr1SNp4rcCBV5YjgkTuPZoEFHYARiRrdz8cj3WDHpWYUrVKu7RqhcDsNxd3RtVm1",
  "key19": "5zG1cfdmqdBQxPESCcbi5ZMswLRtkXCMMh6DjY218dJ4UYiDrZ9jA6XHMxkmyxja5erYJdrFCcmRueCsHUZbhJxV",
  "key20": "5stCk1WvqSAsnUxm5qYb9s8qvzeCeqcMYuJKnSp1JqKxKLvjCArRFCokeBo9PaSknmVPaa2hJ8VQSoEZsWHB9dYC",
  "key21": "3AKhwfBHX29aYQUHA9KZRh4QH9Nq6Z8H1f1NDG8NHhbZZjDJFqEd8yHaUeXcKS7NGWnQmqsrkmvfAGgaRb7nyES9",
  "key22": "3u7PN9BmzhTkqyHithZ3rocKFBvycbErw7VRak8Z1Qe72MPPNUQDQmQeF2AgqeiKskCeUkh3q7c6Re4BauU5wofw",
  "key23": "QqfCvemAPu5Sa1Y71Q9defmGQmdDNRngiSwF724V6Qgk1rokBnoPTu1PvCkcrSbBqBEt3ApYUpFTUa5Q8xrmSpp",
  "key24": "39ovfEG2igM47G3rmxFbs5ZSo3sTZidsBT1yJ6ABb3Ma7PC9zz4uCLMgLJJ15KV33UwjpJF9Mf6UG9iECKmbpzSP",
  "key25": "5hgWq5oLHgv84M6sQGgf9ACaLd3zbbugkNiTgF9YCtfgvJrLuSTryXPviCNk1VKFxu1hBn8QVnstghxHdxGHYAix",
  "key26": "uUbEx4RktYw2ZwF7qvWEFShEVEwwYsvab7WnxK38vAF2gYf5AuBshojKWciedb8592Ctgi7UXDVCmADHPLanBSU",
  "key27": "4aXz7MUxyxKYXuE197w6SZYXhq6CwzDMnRG2wb9eF2ZgDPtzrLyd9xnSNDB661Go9TFkcJTajfdJFLHyP9kXKeeW",
  "key28": "Y1i8UYw35qZcf1YiqmZWqJr428JK1C2YVb13acipw4YujVZwwjmysgwqgevX1WrLB7S2ffYpm4APD4G96ghWUPL",
  "key29": "3ZH6mq1dpMgJirjjduA5bgvAJ9TK79ZDBhnc7q6M2wKUEwXfmQh6bxd6NNdfvxQzgFZBnDZWGnhv7Gz7mkbFsAc4",
  "key30": "2B1c4C493Z8CmdrN4rEidkhQ4D8uUk55SVnTXmeWGGnsYy5M38tDhkxqmxjbZSf66u6wbVwLCMPghXJEvGeKUER6",
  "key31": "4Sc4r5K1SEiKXr5XWTB9kkrprkRTGR356mct9vNfFx7d2DMkuKsgpESxkjjwWXrvxTEjWYDJR4n9UBpYZCtPCrqD",
  "key32": "26JBDYXbPnMZyqAGf2spGpiE2WqReij7J3YK1xz5ZiMxbNDfPk6ztQkSx2f6npAyMxwhzTg24rr4ujt45TTaC8Hx"
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
