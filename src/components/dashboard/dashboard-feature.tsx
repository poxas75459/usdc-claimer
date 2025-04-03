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
    "2kEpf3W59fSS3UVnMV6FEGMLjnvWbErQhU2FxZZvdC8jS2Ph5E3pvhjRoxGBmdmSwDvxTJDWoW2rVKhVV29qzbfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iySu39sSXn3scS8251EemLKB3iKPAqv7LMT6gBieCm4DTq28ZR5X9A6NuH9EGMoCjJu367FSf6tC5rKfFhWCK5D",
  "key1": "2SQoeFw4rvUX8ao7gYPXFryU9DNNRQm8P1vLbYsHSqq7u245XqU4mVHQUGtrxrZqyY777hvuq4rh3fMdVVMDBS1o",
  "key2": "4ELhHqADBudswzSawY3bsJfhd5Q9voAinS6wAE9M5bA7UWAzcDaZbgm6Nxj25sKiw5o6LYaYAEocaxCHm348U2en",
  "key3": "2sofgadD71RFyHMJgGH62CHNFS2Nb6vBo1Uqb5uoxXtmZWuyfHhRdSNHza8QuMSzLpJ4A7M8QsA5L4eDYMhqJQGw",
  "key4": "2SexDr7Tr98y7vbVw3iygXBp5ck5ZfuiZz3Y9ZPGXChrZfVD79LfbLzqzmRY67BmmpeqV25DvQvfK7hYeTAFYCst",
  "key5": "37RZ1AHPtUey9GtMkhbpmmDg6YWRGR9ZAYWxpYjsDKMyd11BwmkmaRJ8UVAqXnDW6BRpC5gj2UwCxeUyy9Ymy9kY",
  "key6": "3R75R28zaiqbW2KiKN5oi1iTJaXjyLZe6P8WPBk37XSaUfrkvYfuFBcxNAAd38U17rbD3vGVM9YdSK83hFxWZCef",
  "key7": "5YaKmPqJQZoq2xJT6kpvE4Loq3b7cton3zobnvrmncUd4rS26QLke9uxzRStAVmKiy9Nq2Dnz6ZZfYPmTUU7PyFX",
  "key8": "61MSkVq4DnRoBNFHchE5x1HXayDBQzY5mT6F9GhfHD1VW2HJPiWaYJxaCTPeM1XFpt8ViUx7UwdRCJETuErRSeWf",
  "key9": "2wBUHvWTo8RuK9H6CgFHmyoamADjGzU9JbFGB51eLmuSGcmKB2vw31JGhsuyRYoREW6pQBqnshMo11u2xWJJYCvV",
  "key10": "4S6aJxVH7ejhwk9Nh3FUeVfuggyMPCM1asXFKFdDQKQ5PzSbFyAehyDrg4Zzck2MwcZBfTDZRJe4usdnjwJAQQxX",
  "key11": "9RsnpfEdYe9Ay7NKcs8EfdyWgMfLgiTwbMPq2Ysqb8nowK9wK8eh6KPHvwZq4ij9Xo6ZAmcyykgMFZPdrWwiV4b",
  "key12": "5bJqC3St6WtuXdgdQ9vn4itQX88EXzgVVtHBpM5tQ56DGXTdEnsFmFe2UMAXxtxZMw7WXiHAGnZNQFnpScEADp2n",
  "key13": "4dmQhMCBMe6vmLFf5HBB2JgWi94Ab1wGhKbrSSHtCS259ungrS8W4cyMGnGVVsUVnVUj94T9yQ3ZHXVzcv5XNqa8",
  "key14": "KXPMUkpNSZ5ErB7PgtukSqbNPJo6EKju656CFyCKAudQJcTsFCQaS5rwroF1vYRHkXpKPjcD48YY5edNKb8opZf",
  "key15": "4J2UhcCbjVNNYEgefhjdq9vezb1iDdFdyRGYaCmfqNqJUmai9D5nsJdPX8heH9oADFELwPZeNAshN2v1fDxeTZ7e",
  "key16": "3b1Ds3jASkBjYdvuzU9u8YAQQpVP89wXUUFTaLk3vcMtjU7RGndRw5n7B312EQv7X3pjNS8XZpYrw74PSDv1e7ao",
  "key17": "Dfzh99PNxMb5f3UYvPZBztqS2pq3NtWqm7grLyokPHQwk3mWXHbDEwa5iMuKp3ik2pUdrkhz8eTAyHzWPhzhT1o",
  "key18": "2DfkW4tLhaPhFbpruwKi6DqDTcSVRXj5FXDY1o585x8QS9Mk8BzWNz9LN9LGR6t6npq8uA8dMjqebudpkdX6ESyk",
  "key19": "5qGDRcxyaSBwrizt1x12KDSmkHjQHdfgjLxD7dJCXxWgxJpqAQg9Rt3JQU3m9FsRqK6XRZ5QoUH3zgYsffefs3cv",
  "key20": "5QTXZGXCitZQQWH7EMKsodXcjf9ZrufydKGpo8ehZqNfZX78Cxdwd28tFVApnuXuNHvPpyJbXYsPHMHRBjWgrLd4",
  "key21": "5QdBXv8DeVbCiXoQYamGKkssBXUhs5SKz45TZkxszi4WuUV5SzqcCR7iyN1RrVmyX7WbVgPeLk47ZULmpZ5k5srR",
  "key22": "2ovBqxhRKmJiBRrAxdL74VibPaehEdqpkhQ1AEBNPy9x2Z2EDFVRCcnhzic9xjsWDEBKVZovWbLPHhG5Q6vbwggz",
  "key23": "2AEiL8LdSGAsJ5nN9oMGZ91taNEonguWEnTNt2t5QANWNDDXjcP1AERKed9UKPTKPxxk7ewqyY4pRpFjzoNLgf7c",
  "key24": "2oMMwY5JU8K2wvFa2L23LbLeXCDbWipZUnTxyjLricGmYL7YhHC32p99SwyFGX4X2Xb7neX9g7DmKfj5gJpf94X4",
  "key25": "5fPMGzvubDZUKWn4h3A2BPpKyhwZMBT5ZAjQCGtiMskEqV8dHsyCNA5dSTRQDxb2wBcaNhX85ZZR9yoYpA8bi9Mj",
  "key26": "2uNA9QzVvW1Hs9hD8q52rzu9u1Upqo8c4mA9yfgAZWwrzAK7h1D8jizQGmuRNzCj8J16wF16dHka54DkhS5eiX1J",
  "key27": "3Vn92YimHZbqrMqmzLUqdb7jxQ8we2aKDQMtNrwB6T1XHYzvsMtHKxc8UiJXRELYrN7vWu5KC9ueFWdbehscUSun",
  "key28": "4LmBBrLsLjHFoaU4184eegtgYaEfiA6GoyUi8u5Ztdn9m8tcqJ2QS7HK7tX9ZpcCXPzLocWssfN19mQ8LNqhBhTr",
  "key29": "5qXEw6CHkud96i21fNL7kmx6gYEgHKc9MH17d9LDVtrGWEXfwP6qH5pzFxVdFgzVSHBru8CZChdMRgt5ak1VM99e",
  "key30": "7V93MwHG1osgJmH1Gyg8qL6a52SYdUctMPs5fZKxvjYMHs7dktUXF3WhGXTsypgVdcpqn7iB4VcCkVkGeVgDVgZ",
  "key31": "65DAd6nhJF7p2nBmfDumYZYm86VyFwnY7BRwXrdJuQSaTM2evZX2B9RfZg1EzzhW7siWZqWJT6vr6nPAiz1Domuf",
  "key32": "231WGcm5x1A1DTbES2BLdZHeshdKo9hNedicr3KefctmzsbLPU8SZbPcBfExsx7nPskivmCmxHzAkGfryWC8VUZJ",
  "key33": "3g4end9cH2NwWZe4XxksAruTxs5yuKRmtUxDmwCezoVoTShkzavxKAYZiBE3DWiHoRV5em2yuo8ViD1f4hJorKK8",
  "key34": "3ohXDjQRZs8jqcEoWxARtEDnJp9Eyt89DxWDPh9k3fz3emGpkjB4dVgPit5qbhfB8XAcRji62BZD52P7k3hGAjog",
  "key35": "2H8eymdhWMfZCiaJX2s8NjKDDKw5Yrm9UHtk3nYEiMuGS2VLvyU8U3RNjz4kwRprthKNPTpt19wxYaat53jMgRyK",
  "key36": "4t2By9i5XukK6AgVGzAsHHcUt55qS28UN3Ms8iSv3gCULSKuBLbwEEKm43TrxuS9BoBfsgWrXKEeQeYqsHQcVWT1",
  "key37": "2WVrmAH1E7aU64hfAozgrZnYCRwwLghTdPADtfMvgNF29PSQzjuox7hzZfGkWJcshDzuLmUZMirzJbtgMRPPmCTw"
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
