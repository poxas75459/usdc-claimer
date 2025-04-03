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
    "25zthfGPVRkELQe7FozGFLyoP1p1TcG9JUSi3BYS1jeQKRyRWxBoNjBuSyUnsedZVXB5gkf4ZKePWinczDdDpF7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Xo4qvTfZJ79tnmNFFsep26YKEkq3u2uyU8EFe8B6CCjsaAyLd9bq79rgbV6GKzTx8yYD3CEjThwoJPJZSFe6QM",
  "key1": "5tgnt7Qo9LCxnUPe4LddXtnQ4jEwMrp6eebxhyTBYkwdJGnf7xm8LGECKmg1Pi2vCWhxGcV8J5WUUe5uxz1LeeSr",
  "key2": "46849GpGVfXWZ231kG8qGyUkkbmvbhUe3kSx2fu5JEjfwgvZ9iimrA5iKA7yDDQ73rxZegjYkUz7y78EEFFaUMqv",
  "key3": "4DkeP26Fb9t4DymQq1r8vKFM9twXjwzzKbRB8ekhPaquHKxWWh9Lmvd2d2Tn9RB7dFd4B8dkrcTdw6GF8honPGUZ",
  "key4": "2FM4i6YhynqpTFoWZWydybFmZeykvamQA7xEgfMkGRRjZ8T61of6yZ3MVsXX4LP9PGoJsypjH5BVE8L3D1DDS7Xf",
  "key5": "5GK91Ayh1KNpLw7bK2ubfvdcpB6atM3NqPsCvQwnjU62keC8s4nxETr7zhNnDQD4Hu3kh3L9uDbLcnCtU2ck3GbZ",
  "key6": "2BSRPmPocbjie8r9o7b8xXRiSJ3PFUXwhFin15v4CEPvVKxwQsmVXUKfJWKzFz2P9eXanKHJc1rXuYJuK2VYbmEo",
  "key7": "41xiHCXH3h2PVWgeieu9VEbXSeVyzsHFjbTg8jQBfz2VzkNGGFq6UCRwYAxnnRDiVKkCSLh79GsDcwT8eaAGbwmy",
  "key8": "5Av8wuEHyawqSpeidXxf5vLwvYR9wkJaVx97jFq9tTgUZ2yuQ7u7yrQ5PEqoe5Pea2CNDM51x1PFa36zyuPwH3sn",
  "key9": "62VpzcrmceYRHU9Vu5shFVNsNDy9JLep2QeaBYaxMjHXJV5H8EPEkDFTZLWruVf7S41qDUiCyVo1CE9FjtAikBsK",
  "key10": "5DA7T4Z5vJi5x2xRjNTVV9xFXEFd3fHTVUyEinLWarWoeXy4mWFBaYuQLQUy4Jo7WCuDS8sbPTQ5RYdApH5jUQ98",
  "key11": "26sz6cEk8dy8Bi53Bsamd1Cuhofkg1YDVpbZ4u4EufVjJaTJYZSM4tTLaNjnppsa35AXkyTiWAVydyqHeHKd42Lt",
  "key12": "2mFApvyK7QY1LPFcQFuTsQtb6Dg6j3qgQ2aHuLvUnStttsaSSYvihdPzjpKhbujH1MHznczGMiq5i32tMsgtVd87",
  "key13": "5E46vTmfqDJS7q7L544eWoEkGnVnrcr5dZD43xxTz9gwF4wWhzcjDjiDTqujrwmcABeHphVMZEDYGP4zAj82HvRU",
  "key14": "4SQLegXV918LVURTmqfSheR3bErGPy9R8G75GHGb33yA45gMo5GFyHbyiNvFVCMWdbKw6wJBdvr4rMX47ki1648U",
  "key15": "61cR4Au3y9TZXsyJNwwiz6B4hQ8ksjtYi5SgqfHyoZ28BrTpQozT3vHuEPyBrwoVuuHNE93jukJ8FFTWgGtUdqnT",
  "key16": "4DB8ytnrx6pbJmVjqreREKs9KzSNEGCapWx9DUR7APECTNJav27zLHvZtQpxsXrYetsp9GtNqV5Q3qCXizLuocww",
  "key17": "2Yk4iuAFAf9R2u9Lx75mk3U8DDBXtmUj5X4nUfmfeYpUmNrDDN4oofKRT72uTFnHA5zH4BCF6CR88oZvAVzkJ9g5",
  "key18": "66SYuVPms64PnSZSoCGJSNpgspYWgvMuQNpKRusuBeYKKcCmJix8tasMnAJdLeCEJQpCsPRoYSbfsvYbFc7CE5B4",
  "key19": "26eXsTDicp9XREczaTceTswTK5PE5mrAtRGNN8nVsQadPapdLu5cizSs7CErZ6xLzrCYZJ6QxGrYxsNa9tPZRk9R",
  "key20": "5tTzqxk8WAUYTTefhGb4GG1XKuTcPxz5PeFeNfwkwmdexJbZ9LFRHJq6By4kavXT3RWk7CXmeqQXDqLjmjxNhzBK",
  "key21": "3TEscZixnoNhZzb3EGaxyG7GbY1msjYkpCixkobZjF6xg8DybyT7DbJgPWkSwR9Jtt12GPAXBz4w9vLiBzPL5fEG",
  "key22": "Zx4Q7YH8z4Z7P7hJ2xqmtmwj9Jtk3BnXGgzepBeqJ4MtCgGpVBw5PvUS3V8NPYd6dV4R1HSUoDmxrpatD6u4MvP",
  "key23": "5SL2qnfnTJGWjx9GZ7FNyg9TqJwQYts4q4YxcCDtVNMynXuQ74MwXW83wXrJ8Y5c9jyp7S9Fg7gBeyxMQLpYAG84",
  "key24": "5KGJ85DRv9Foc5q7UUQ9tFtKm6RKmPsGjADaneY49yPTdvfpsRyLwgaiysa3EAW5VCcvFNqBQREPeZHw7umaW2Wy",
  "key25": "5edi4JT1T4CMoTE7szWS8wFsP4VS7wwusbs8ex6fHWDCCutz2zJmmdnjNmgfFywXBygWupgb79oU7uVGWwx4ra1D",
  "key26": "4RjSDntAEQmAdKHLVE4Q26GYmM87inGBC8nPn39QmoTH1aS2FfHwjPHHBigNAAC6BYdSy6uAGsMTBVvnbdb4bkM8",
  "key27": "XxvAXcbHbd8o3H5r35zaAjCsgdvQpEVMZvEHYixf9A3VxQnUuA3bGoPFKqjhb1UU5WMCRArYeDzAfN1yTgtsGqn",
  "key28": "4jnaZt5xjrNgMCL8EQM9xB8dRgcjLfY955QBrW2z7AKL1cF9f46Zs15mA9RBydHmhP8TyAC4hVAcMqpUnUJQkanK",
  "key29": "3h3wM3rbtUDUFpjg3iaNUz99czfcRFVxXqNUHrHEDDbqUAJ4JnaiJKdUmRE2k4Uv3m9q7CCxuj8Stdk4dj7atUU4",
  "key30": "ZBBnk19EA2REtiPPSYqA6bHCxqfHXTHe1WP9GGDRBM9jgEizQM4YCMrpfsZP3uSvYhgW7TUXJQgkaCUrR3FZyD7",
  "key31": "epBvsgNRZ7U8Zsn8gSH6M9c4nH1EhFpr23jG5vawmUTHW8AGkutNgJiatQRmFuDzBiuEuDyeY2kBg86983N8bxB",
  "key32": "nZBGskhzvPS1jPmbzaBqSxYvh7yZgvguGf6kT6G1Q54t7Tb6e8HM8rj8siYy6xfSFNxcVgddzRkXwpZyGCnt5og",
  "key33": "5JM5X5bnoetTryYHhURrzKqYkQQLqe18osJjgc4KZ1mrPAxwULZ8qHm1opGAz5ru8toEtUXf8UcqSrqTR5LvkD3q",
  "key34": "88GDfTrkeq3LWjAC8F95toCoJhrCAUXGG8xpSUE7bqHRdEWi4fPyknPNcNFmRCvgSZjwykMQU9LmATxkAeG5d31",
  "key35": "zrLE58EgXEXcgyWGygyEzxfRJgcyvnhaLSW9Lg4DWwUGyJqQ2CFV1ouu3YBpApZRMYFcWhe9sqvpcxBpmnRGsLj",
  "key36": "5Pf8LLicJuf6GNUpgzqDLmqBKdwBGci6jwyLpTjmmub1YcsgcETUgAncAjzTrgJd2xeE4mGFoqPmKo7qQrkk35Tz",
  "key37": "2JKFE151cR1pFKDjGJW4HVwkXBb5GgwfCp7o8UA6gPAhTJc39o77CA4EKpqNLktKNqXFMSQi5vgo8r74bnxQHPXf",
  "key38": "5QXDk3kS9XWbVtcCVCmmfQ2bJF3RuCjdZaE2fB2Za4AMByuiBaP4yz4vJHbvZmZDyjpC321fAibfHFfnixEJ6eqQ",
  "key39": "46sHxoUkwU2hid3nTaqxmtdtygAsf1Z7bFM2GFC1Qezc77vC33FzVZEzwerc4VPR4weWVzjARSGh37zvPib4NL9L"
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
