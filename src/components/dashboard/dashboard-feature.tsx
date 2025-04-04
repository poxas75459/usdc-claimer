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
    "4Cvqsj7Nwaqtg88yxRFHQVpi5hQwGqgYdqWNVDbg2mV8k6nXiSa5s2QEUPq5ZiRzRpEFYNwMmoBABPdxsXDfF3Xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JqPB6icGC1Jm2JeAwChxJdnstjxMoajtBNTBifUVbpiuy61xNaS2WFr2HgqN2QNr5D259rNRNArsfYDc5HDduM9",
  "key1": "2HJH8RLPfMxerc5HYFySHX8MwQsudo8EpBh87Qas9NSzESspauvqMdsd1FSPZJJPqW7PNKxREc2xtjqyVRn34iWz",
  "key2": "AthPf2JdsMA8r62bP1No2NCGohMS75Bdhq3XAMTKPX9jjskj43N3gFg2SoXoyKM5Z1FbZbiHyJ6FoU6WGBXEq5u",
  "key3": "29Pg5LJAzrLeMWi29UmsvJqP29wBDRnwifggQC9jtb9GohbfVLcXZX27S98ztQR1HLc5XjxMDjyZCaP4dC4txUCT",
  "key4": "UeUZEMCFjbf83oQHGsM6iY51fRSTQbFYJ1GopCvPmFTMMJuv1gVrUKooBzHF539ipKed5R6ft9HtuVFGJaryRG5",
  "key5": "5KQvd89fyb8wjFJjbfDXSxP1RFcnUApyDPuj4MYzs6RQBsUDdFRDpxAAhyNzp8VpVvr7yoYwWu3gCygQQmbEHMT3",
  "key6": "5EeREPdExXLmysP5A6mzJQ5gncb7u7MCXXjuvUpRjeipChWHih6v7ZfkSHigoEZQ5A22SRqGpvmFou9FmwEXhaCa",
  "key7": "5sKiQbbg9rYu6qnMKJ2LwbK3cT9dzXtesZHSPKLjeUQAzghJt35po2iydakkA5virLBvpijjRL1gcaJur46v1nuT",
  "key8": "Tg8tHCH6GiaUbocr6eMGZDyEN6P6MMUASEJbJJ864wNg35Z4GRYQ51FLVxwMtnWswy7EikRMFewsB8e793UoPHW",
  "key9": "4uDfJbpQLwMFZF5mXrMMatWE58Ffiamrcn2zE3r2cEx4Q4mGhwd9cAS4GHFUHZkMK8ZExtswCttBQvcJUdKL9Eg6",
  "key10": "4L64euB5X5sD8uggmCwJLRTfMyFTZefiVoKxt281c55eWrsBUJhbwyZPpMuX2wpKNujaPGtYU3tgRHM5AxSd3pZy",
  "key11": "64kxFHTsDZy3JoR6ja82HguYwjNYJDTkna4bqiuucCatfdtYKVkRevYn1SFQEcMK86VYnk5YRttXiUXYMXzVyhGW",
  "key12": "mVfBNY8z75mz3uKSASJ6zaSyr3XFMxpvtM3xQTEAbgbWnkeZES3Be8Z9EZsqzKvFkC73TizFfj1KWcsZmwKsEL3",
  "key13": "aoLrZuRCf3ovqZfRsKmLNPnhCyevabPxwjSEcsGPbG8XA19AABDWpbQeLsfV4qEJSAKpMY49m7q5f4XEZrtK8r3",
  "key14": "49zpqKSGh8hS81RqcBkyLE2viS45veYSrjChbZRG6dTwox7pKiNnxeJX5MFjR5DNf2ZDSy5TG6snD8eZK8gbKuFU",
  "key15": "4RCJ2itSgzc7JM4xFoRuLzvsNPY1DU2eGruVHaxdEDG6Ji3UWJUTn6GURKjbLR8njTrRSXXc4mEsZqZHCJSWVVq9",
  "key16": "32PRotqqA5rj5C2hrKBqdr5A5GcPVAbBZetSL8rvJtiW6SNqXUxK6DPqT2FyLXknFs2aPQPvGJ4dW3zzjr98VfxQ",
  "key17": "5xArRXGxu14n5DvHQrsGn3ZQJYeggAZJXfc4RxtRdw8CL7wyjtrcdPE9P9zrx11qb9esfUzkrdJ2cfypNGuDSfL",
  "key18": "2z7GZrqUuKqZieEiL1iwgG8g4XcybQ6Hhr2qXDMf6DAT6BmPjkBFxTofPauWXtQ9XtyNAJ7GhZDQZHTLUoLmWWaD",
  "key19": "4daKA3ZSy8amhRvUP4hYDyngtyXSTSh1JQ3NUVGiy4svpMesW5nEseT44LwEhA5bDEcmtFRFv6jkNHTz1eyx19dm",
  "key20": "NcDqUjYzRaCC6PLGTxed24uxENLiVD29p5ijfk7jQCDUwsitJxjNBRE6UCVVyk7MsnHfUMB22tzqPo5x1cPNABq",
  "key21": "5YK1oMjCGD7KMvMSSV79G2U6iPvSmNshhRVMqd5VZBc6rgnhfY5vEb1GrQdyZwWm9t5UobF3vPiv7QPfQKHNX169",
  "key22": "4DRU1XJrN6jqgdBN8fQz98zjQ75rpGxBfQPDT9XndWr9fQJDooc2Upo7jrNwn8Aq8iiUMTu4JceY2exkjZVg52dD",
  "key23": "vkSHjzKtKgjtFrJtWxX8pDoYBoxPcCDVBAfF5qDmCdhmy7DdHnbeoRpaEVnxpL2csVXqGF9S8PHECBprrC9GRDk",
  "key24": "3ubpikx6Yro39P4HCZgTya47VQssAu2NVBn5hXTgMxiiGe9k8c2AVWtH25X7LAoKnQs4ZQVbeZWLSuhrL4Kg9rFD",
  "key25": "3UrycmK9zbijpkTka8JAGMs9z3yY8adXSmtiSNz2iWTDW3s6KW5r5cMatkTjYSonUGK3LJwqxkpBvw8dfb5Ra4vq",
  "key26": "5e5eKj98VMBRyr3XQec74XXFvCZnS45xs1YnxnPatbvBc4j84zYDfV3rZZ8X6yfxZ6pqVaUbogdWPQvXkrZJ3uVg",
  "key27": "38AUmQsx9JzMs8xqas25MTv7rpC6m4Z5ensn45ohzqUajR588KdQ37JX29WXp9syz1XUoAoNsJ9juxTKxkmGxqEm",
  "key28": "2xpGv2EVeHzFwEfkbPcTkhsWsf7KietmnQpznRLpUW861hpY1k4ojts3ZHEjDyWqq6RgVuH8vHDgVSkuQq1aoguk",
  "key29": "48tE6zrPWMXWZzpGn413uhNfqbnBfJ6A1876LzBri3MiLJ7gz3FcR7jAXZhbPonfW96vEG83yk4icLfWJ1r6uZhH",
  "key30": "3pmuadaKuMHFLDp7aVBciAQK8Z8X6N5fxL6oJLbCozT2ejtZEvwRFiBNa53VQfb99bHLpo5D666xNbkHGJYFs26Z",
  "key31": "5nCZ2vrDQf9uPwdwSnMgWCr5aWZLqkJ3FQW3B8jTdWgckA54jbjLWX2JiZE2uL3EcGPcoog6sQuFZYQfgrPyW1Vv",
  "key32": "2NYBjBQkZa4DtEb5voHgXeTdajbKWAUVuenDwvFC3jcHGbp6ZXJpaxoQeHd6wW6Nik5qWzDUzpJ5VD7qJmgvMsC5",
  "key33": "3XVRha9bhrjm1RgZ1ErmujJopYGTPanBSg3QyN1FXkmhzRURsroEdcA7xJTExKZWrpfTkm4fqoiDVK9NG2byKT2M",
  "key34": "37pRRhCWwrtGKsok6oUwbFygpvBm6xX6JvyLncuQoGCoR426xJe6ZyUJtmR441ASRARnAqwcdNz8CXtV6x1FTaFX",
  "key35": "2Satkxd4fukNyLbgDjpP9SQtC7k89doPVpkKBupwyvzjgQ28xgFc8mZRCa9KEojsitDJTW6oWpjNcvGhCq5gTg6V",
  "key36": "3znaDiy796afXayyUBHyTLV53K5tPdQTron6K3mfkJFQbigQKsUffi23Jsb6DiSmSbHz27dQNLCbwvJRLSH5wsrR",
  "key37": "vE4teERGjvwaLJdpBZSvD9aYdDHSCHheuw7jzPv9TC3FkVkx9GrLF75gsNGGdMbqM6jAYDj8cvgqboUA3m2V3px",
  "key38": "3PxuoX26bWX6GN8T2MnRTMBC671NFdHdmtzSWiSKbZZagQTzoqURaftqD7PY86uwZwPkM6F3VGjs6MWjhsRKCBiY",
  "key39": "5crwpPMwY1Bs9BVDkFxvCghBBCihLV6mG8ANyZFN2ztt4E4oso3Ro3KYsDpRzRFY5z7he61EvqUdNMnSwRWdZtZJ",
  "key40": "4Xmc5Lfzj8VEAYVMzeZMzrH69qLt5kEF6ZQk8gemuuLAiBZUSNsMqRfP94bnaEXyF2j2PjadYhApEGjGxr7RhkSm",
  "key41": "121zyAFexmfo5uy2dUQ9NsN5e9eJFejpZJHaEmcapetBMjcQW8696mQYxUvBeEAnjrU4K2bpyuapwR3Cub9xifxW",
  "key42": "4YBzhtJMVDFpuF9b9cD6KmiCXmKMTcSby7onk4nM92NyaB3xGSa6mW5CATEG4RzegrRdyvUq9WhvKh29mRmuTked",
  "key43": "47xXTYNTgvSPZL5etXEs7xHGasM47qtPVX9dPUWKJHNPEv1YjpVhThvvVmtEnsYFNrAqtAbLLf5bwdycM1giFbEP",
  "key44": "H5iHGvo8rU1twqgjp4FMhPFpV7GV9NJNNvRPSu7r6XU8rvzW8fHPADn6aAwzY8tF6S7WZpu6ZT5UBFdhuXmYnmP",
  "key45": "2JpB9fYeWv5gxe2fPkYZhux5jhJNeara3X4j1vhVsKB2PDE8iz7fEjxFEUPPfiVRJnPwCiGPHd7b1M5i4U5x3jNv",
  "key46": "ZGpoBu7ShYvm7nTz3BucJDg3mwBvshHSsTRGUmRYwm8cehxpaEjZrTmTeQAHQFAUmxdqdiVemPwyefVD1oPaVRf",
  "key47": "5rH1kWWcsuSq4JLSf84Ji34TyBYmnSxZy5n1YzNsiLZagLmR8SB5eSWymW4KCEihDNrRk9e614oh5QDz7jrNGsNh"
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
