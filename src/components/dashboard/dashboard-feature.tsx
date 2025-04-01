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
    "3QCnMaChinuTFqYXL5wGMgk9wTFYfHQf16ULti655Le5esbzwK1Ak7WWy2ubxUdsDbMhf6LyZnC7KN9RRDqjJpvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DzXWQSAy4jBmzNfWz6Pb1g8PjyBPa6XSjg99Hmpa3QVTtJKL9bW65bGwyBdYbsAizfGyVbAgKZtCuXnqSfjk9mm",
  "key1": "2vQSkMKHVyhtpfWDMf9tAp6VDiBSjKXBdVUhBDzFCkmMXbsvjVcYodCYPgo9iit71Xtnb93Mgz4pr5ZH39GRkYns",
  "key2": "5GnyAZHCnXcy2qdziyCLnjVMjcuU4VNrLrAuxxvm9hr7QX7xFMd9SYBodCzJFqGCrZTPDGzABWohLuJXJDnK5LKh",
  "key3": "3kLs8fPsLu8Jww7HFGsiG5iiqHVKcm24pEFFktwuNGV9YaQys2f4qWR79LraH3ttXPALEGUSohrGoyqmftQbqQnt",
  "key4": "2kfMfVTHamZjAPZWDhYWTRrtjHQ1UJQo9L6gEtwMcEyARPXQCRuxzCZJoUxtsevXNQet667tyeJVwgaVDS5jc8HK",
  "key5": "5xWAx5pPpMytE9wcuDQY2MntzHmCs8du4WHzGTbpFHcxEPJrxH7UgykZrs8Q2cNkagvjn5grTds2UsFkJD2AkFzC",
  "key6": "5pJT1mEoizeue91ESiMAfvLZRyLgmpVAFSRVtbj1fTcE15vjVKus6WccTAgWmrThWkKFQsa29KifXWwAyqwwJZci",
  "key7": "5FYDXwBvDZPD68YxvqfvKtbrVVcsrQTNjbf1jybi9tWa5phWDE9jZ2TNzwwdUtU68a45WHbXGkDkRvinNKj3qVwv",
  "key8": "4AoRHDU8eBBovRdjChMdFXS33QEj1N9y3Yowyyatng5bptgFrPA5fFppTUAqC5TcLPUKVkkRaEu5K96FP62qXX87",
  "key9": "2SUn2P634SaqCtsYmFpoqkHer2uQ3Qoa39beDtAH4CTweEMwuoTTxXuvbTtbmpSMCzAgNrgFAcfGH8Ho9WfD4KJ9",
  "key10": "3Ss5yDNdefpcq8gXzNdjSCQvcmWz34AiDtER3zu519T4KJKR9G5YLptKTsPPn6o9msYcwNQS8cb1j7iMGditsnXu",
  "key11": "47c3VuVrHY6uMeVNmfJ6r3NGWDh8iBF7P4fEHPzbUGuYKFEhhduDA7XPfFfdLcXdZYYGHtDyUYeKaQjaA1wfG6UQ",
  "key12": "4GWuEWZG3XYWuw5RUktYJRT7nVTMtsARXvMVshrfKD8pJnMQgibTjMZWnhZ5PabdvjfoA9tdEws8fHYRiAThXpig",
  "key13": "4qB972nuSEGkPfR6xbj2fHGVE3nN8pLwYRXEtTPeQYFYHiYz5LzNhW2C6ninox7yv98iAXWga3X1U8BFh5cr3sbQ",
  "key14": "3yeT4nNQJxACzbfLTVDuj7jtDJj7tUkDx6zC2YGguFuHC6Ptm6cW8nTF3cNiDRZc3mGmiGKM6i5t8u3SKTyfnYJ",
  "key15": "3GyyW3wGi5q9MCg1TXmbYbsgazHboKjG2PkvCKAHNTYSGDMPdz2UXr2U7H5bnFetbmEvYgcpRbzX68BA5YuH9LtX",
  "key16": "RMucaQcEJ2UCY5XqtNVPMDfrqiqvrNTqUyFAsqqG9c4umo6JNCNi11dqR7tMzyUVCR1HpsyHbceArdAeRN29qz4",
  "key17": "5scjv93o37tyrezTFCp4bAfouVixiXpb1bxWj9aLqfmgngx18iKWDUQvMqtm61wxZfpXSTPG9Lwciq6RA2nh1qor",
  "key18": "2LD9hkrdh1zfdbYjhaAS6RKx8bdtdphr7UBpXY9hy3Wk5jxMweWe6yi8feTi6buRGRCXMzS42M7SESDcjFEjuZgA",
  "key19": "sjABMnW9DL65CDsZh3nHWcY9AVLM1VnBgr7TRz2LVnuA36R7d89Pr1nz4CFgHHRMwgXy9V8ExG3dWz4nkhjpXLy",
  "key20": "27W5W242LgUfackLWnPVSs1sZtJ9S9NJnRFGLo7mTy4JyLHsNwbtTMZuvxHRhsbjC9Gq8HVbatQC2iApFfKxVFwi",
  "key21": "hq1v5pCY2PEBMg2toGDhhHgLJqt9RcpvoRwhCQqrK8sLQxdanYYDNwSFb2TsUzvrPJY1ix1FdbSELLu5jvNLH3c",
  "key22": "3xYJs9781bwry6NBCk5KMBF2JP4ESa4WU6n83wCCqZhYK5d1UggKJFbvJ2ZCocbgvw5zXUHh1xseu7zMyhxBuhgV",
  "key23": "3oQ4ytA6o36PzyUgnktKVfAv4iAoJR91eJDLwNkfPhLXsgaNodm7wMJxnneH9bJd8ZxUBheBL8tpud6cBS6joHc9",
  "key24": "56VsRd51Ncx1PGgeeUAYiGFffCp6PUe3vMGGrcVYDMbPse3bSmnRHJPypiFBvqDJ95nEzkDdYwnw8shQQJPT5L5c",
  "key25": "4hAu63jphEzknLk3LgABaxzwSNnNLPm1WUTdtXetRUG5J1of1JoF324HBLp9qrQvMJ1c6kfDrj71NeH7d3psXfPi",
  "key26": "5buKoF8NgoiS4kxXYTd78KdVB3mHJS3CC49Pyk1zr9Gj1LCRc7ND3wBBqDDayJTVw3xRGWhrsTNspp6XuJS5expd",
  "key27": "5kQCpQbUAwWdPxvfkqaoFUuwAPnFYP6xbHNiXi2fXkoG5tjBVbUJm6nvWkmWjWQRQSSfv3PTDUE5HCu8SgzzzRY7",
  "key28": "2fPeMmCsaswfbi61t5VY1NBuL5PRXzUJFqrS8giPZ8om9NnMXxjtmD8sZkUr2WeMLFRbSjs6PRF1FQSdFgU3kZpV",
  "key29": "3FEiEmfiDBUPDCLi4uJo4tiCFqNkWCMwrkmXiJQyEiwtC7yCeQUF1N82qZ22ivRXdGw2S5BqGrqZQTPzVdz2om97",
  "key30": "3wG9DCJqEgEYfCjqTa5mCDA8esLef4nCGv2NTyNCokwKTgPENykp5B3ggVTeRxnCuoRSmaNHeaXXkDnkXjhAoC33",
  "key31": "51iE8vFkHyCTBUZimsgwGeEzrpDLBwNugC2h37iS6MgsV2xbMCcC5gi971d7nmodzHTK3qMVMfMp2djB6eHQwZSU",
  "key32": "3M4VafcWmcgUdtuzncZj8D9J97JYRWqabkAGiEQJdqcw7eeUFZPFBQnQirLLXdXTSWL6kf7k5aVa8fK7Kr96jtCX",
  "key33": "EfPh9bkjrRior5rVRJsM3VFGyFmJXDgRnMQ2RLEMAiB7ACvEAKLXsRfehauUvqnEWDtKFFMm83JjGQUWBPQqEe9",
  "key34": "4cZx3Ug7fSipqvspM8QcPVUq8Pfh7qBdy7Lg7JrysDuqpG9AhQECdL5qQM2c2ZnbLLm5P8DWLBkHs3K4gVqsfiFQ",
  "key35": "3vMtaJjh9vV8SnbRdcyNYaWX18Cou2xMszDqdyE3ceuavpTiAaKpk2meHaCyMDYSyVKiwVa97y7TfDu2G9hCGDKf",
  "key36": "z2AQza9CfZRLLN9qUFcsTQKG3TvZWMjSVrezbiL2YhLfo6Avvimj5BkBCTSn6NZAS49S9hTonqQTVUSG8t5Ep81",
  "key37": "5RhoQUV77a8F2dfL1tHGCKpXQzrdHAsoJzAeZM7m2LEmYmzc5gV85VjwedA789t1mCkTvuLnZFsA7QSfFrnNYs9q",
  "key38": "3eNbrkKchoLdwSi4bgoXaMzhEsRWPeSuXfXLvaee33heW24n96qydSfGz22XjifXFzW4diT7skhkZEFU5yZHkvGh"
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
