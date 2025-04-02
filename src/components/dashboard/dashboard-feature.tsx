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
    "5h8PX4bEx5vQ9pmQtCo1TRkLEQMGvXuts1T4QAr6m2k4ow8AVm4Rgrui1jKu8zd47Ab4KLhecfexba5FZe7VTCHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCYyGHMWWm5dXQy4qZsXHezQ1BxLXqMu99Lmajev4CKhdi5ntbt88ULK957d6myiYkTAYbP9oZHf9Pofv1YJcTq",
  "key1": "5scCXsb8r3p5PLdf6dMs85BfmVGmynC4R4qpGoPYDMvHJjfWgBzvfTxmZorj1wnLQSokvHSXr9pDyo1AfQ7EGrFW",
  "key2": "3V4m2dUq3BN1R7vQQ7xQ8kE242k9xziXX7haz9XVqRun4DHcTDWjnkX6rzWBJErpykTumyWcih7wRmXJWaPmUVuz",
  "key3": "g4qYT5xrRV7pZUCw5ErFcF9vXZo7Na8KoTnXoeATYQMXTp2TkNFgYaaRy6dTxewDie3jx8GnYPdE2pS5qUCX6E4",
  "key4": "3CJwJfk4dAwwJUy7ftJxDuLZWjymfpWPLVsqKizfcPVJNsEQ7VbDg8wG3KYmw5miDH4JBnQP3RwaVJ9YJLZfqbvb",
  "key5": "3vE1YRW2WzQYYSMjYWEEewcsxezRj52UGSBvwxycugjVb8NAYzopd3Tx96NXGPfmiTXbZJYF781j3LCWKa83Ygxg",
  "key6": "PyJUvd5fzFAyPvuNnEhYqzYRAV9JcutBFrDe4VsaqpfEe45r2DqTS5qRinF8R5YrzZhVmL5ZbviaCQAEZJcXtyR",
  "key7": "3yrcdW4Rf7yjkii7AE2hLzZ5fdhpWFS7gS9tiXsW7CpvXYWqg2DNDPjUPtMQp6T7CbLvS9v2yUi6mJ3KJCx6BRU2",
  "key8": "3j8m6Jzb1K8c86DQfZbXXPam9aVFH9XjVpRxc6d7jnriM2HREcRx2Xc1VPb3CRR9p7EkzntUzwu1xMZC6CoBUCbS",
  "key9": "3Q9GRWccjxEy7gqxq5jVBRjYwYrPB5NPEaLCX59YrgG5NgS1RkX8giYoWvHLiqbzVCgNcsjx8xysRqUZvv85HDQD",
  "key10": "3DbRKHdtS5YR3YDE4wbuaqYNpxFxKXJTbw4aQPysqUfzxnZm8i5ZNUnq6xDcbYrUgcaN9Su5hikVS6oCLiWDWEkw",
  "key11": "2p1x6riUCVjb18XjEfVxcodssGRpRg7Czi6HBGoap4toXg2jJCstL1RHgJz4iiRyp2B9bDabesZorToEvDFEdGm3",
  "key12": "58t35azGaoVUv2Ro2RhPpBAS2fwohMdwPPjP4sg8TGLGydD4GVmztCD2tS3djbEQ8Pmd5c1zUPPPaR3wghpt4zz3",
  "key13": "4Ga6J2e6v3GpynuhJSBHL4Nukbr5Q71yhPAS8EDkbpY1eJFgREUbxWpKWvoPNbtCgFj9HszYCboVbvuEDeTFQEk7",
  "key14": "7Qy5Ja793jRiKrCv3CA9zAyhoQ5K7SfBTQZ4Pigeiyudctg9i723rCQ3rTfueMC8iPJsBv5NvCQ27We8M599PqP",
  "key15": "4oNE1nDwJHixAJg6Fk7QbxJKN533JjMUJvFGwmzXNPCZbpetXqf76WcW3W4Dg8kE3V1ruGSGUN5z1t83QVB6JQkH",
  "key16": "W3Zc8w9ADGPiptZxxa4QUy6BGtJcuHAgPwvEnDNkrq1Kmvw5ZZDnSXqA3jEEfE86zhKpHKjXV9TR33MiWJjXzPg",
  "key17": "2vE5z7Nxjmix5vrPSYtcV4ZRvqLzZ4RMSDepfvQTW3fwpB7N1xjDPQtz3mfePLQSc2Ew54EqZxubNYCfLyemQzQE",
  "key18": "2P6m4kax53PQhDeysFkcdNhdQ3F6XsnQAQudHfHizADBCdq3ekFb9Sh8RdvVkp65eWtMKzGt4Ep2wYukaGQJxsde",
  "key19": "5679ViEWX5ddwPx5jSM1hnjLuJBvgk5hAoGzqYZHCWJ8MXEhSfEdiiyBYy6K6VJr6Aaku3qCioNXUaixFJ4efuMh",
  "key20": "3jwGKw4skGcBmrWApPtSBvpgf3QRC8gz89PJv1Qxrynb3uzqrpC8c7wqtdeF4nxzWgP5tidZu7RDuMCdYfazKvVk",
  "key21": "5H9sWB2BqCm9BYjNq6AWpYbxs5qeBr1NHgZBqHN4ND4BHE7dBLPLcu8KvksrpRnyDBYp4Qqvf4VVwhdkNjgNnjtv",
  "key22": "PXYkSLf8heMyYqqseQ6Fy24ejFiNBiucTFWQ4p9AN8YZjEAPQ7jGqzxvFMKvG2isXo1R7yLMCjYWBJLNEBAG9LR",
  "key23": "5b72i7tpWhDXDG2Zph1Hn3WyKfFMagFc8j5rzkyWFWMcNK9XmxqHCeuK3ks7E5CJREx3iFAuz5wsZ8r1FEn9cAbz",
  "key24": "bQp3gr87ETUjGqZyxAtvQjkMyzqvkA2YCdqUMzeT9hnScVjx8kKs8a6EMAKBLaeUbsanJaiLoK7ju3objvrUUfJ",
  "key25": "3odzekTTaCCDZnDaUT1Gwx1jU5aPFte6JjngBohb46R5cscPJ1opqBxsKW57KAFDj4iszeAyQnZWqAdFvXRQyMsK",
  "key26": "DkvwBt4ZavKfkkVBiDcGWLtaeNAcTE3xeqjitv1DUbHfYTS9xixJqBerBRPenLCCi9gXbzrmhvyF2bV4PTgCa87",
  "key27": "4gdyBgJjPyq6XaiMFMAsSfkJCN6ZPfXqrnrUvfgchCjyw3QuLQiVQopJjHeFKrHEp3Q3NVnce439QjjPKLHnNovM",
  "key28": "2GFfunysVZQSjRwmhi1m7ozs59TJrS2nRH2mSh1YAR64deXyLY4U92gSVQWW2NDkkvqpusvfVEtZLaPVExqqQ5Jf",
  "key29": "561xjTVUtuqE721J6Pp3Fb9azEdcSXUwhWyupC67yYxAHTm3JgU9VxHirXcyoCR4RyBppndU8JsHpr914UnnnH9N",
  "key30": "3851M7jbb6fHcDPNvv3byPkz8vn2oGhCBaWACrs85vyrothCBmZCfttZi6d1Dnbm9bwZgd4dX92nXuTEpN68LTJZ",
  "key31": "3PfMmk8B4tg1BRe1WUdvzkiyE9yPtaYmYhFMoPCWrxYxgQZCdoXymbW1jZSCLv7sJmycYsKZWUENcGxQftnoE9XX",
  "key32": "eAfvVzhf25Ksfd5LvRaDfYvYq7zAbtoZYysXszS9BTT2JAnwmTecdvAufFwRbNUQmXXma9WpBQQtxvKUNwYhW16",
  "key33": "5xoYMtVogLJwn4KpVML55xYRoAEqLvBdR8VcFTC7zf6jWXEhc1uW7iSHLDHu2kimbQDBwkxcWxMA54JMyphPhuBY"
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
