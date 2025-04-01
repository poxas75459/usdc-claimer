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
    "p7CQu7ih4VDvarQ8MgxtLoVouNR17vDaXghTCSthyAvubD2pRMEPuX4orqUgeHz5mEhezrWiAYDauizapzjjT8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2brjrpiipjyqE9bdZUgN4o2AZUAkT1FDHLZqctLE41Y23DpkvrT4zqXwU2HR1fokQdcgxxW6jpv2eHhK9kJZnG2n",
  "key1": "54j1oY59aHrx7b8gewfptKTuR2Y7R3jnnQKZFgPgekCVYA2WvrcHDJ6BTDVqWBYQJs8VyAY5ZqyRi4W8FWTEUipH",
  "key2": "2UkaYQu6khwxKbbjL3AiWgunXKBMpk9RPCv9rNgn8z8qKQb8yo8PStdEWLnSN9FKyC4KhRY6Pa3HuWk4NWJ8qKyg",
  "key3": "3yg6WMzYW2FLANsUgpno4zsrEbGm4JpSEhjP7wBKaKApVcTZ3fTrnyq9oDQBnxGFFYDYihuWX7CSvHAhZ2grSjCm",
  "key4": "5beGb6PLR8LUpGc2gbWKzHuXLcqvVb1Pk3VPzub32KDJiuWumLKKut5nuJ9v4wwRCtAcjtSvpUbb2hhCNj82XZ4y",
  "key5": "5Eyo6Rvg3vsraZyN5zbZYcBgsxANUFBXnSZQQvyZbQRyPnn1GwBakKoWqNe4XqZzDG5idyi85sJbTBJhjFA62v1J",
  "key6": "3pX4r2cnSBd5YX73shrFAX5HdakgmJxRjQCKQsMKRSKQzVuftqRZCHTsAagZDB5zCPw9B54fL4RM4Drgox1TVDaY",
  "key7": "2JAGo1WV7d8cEp58iyqzpB2cAruLumQFrFTHduSgZP2zNPuom5Pbtdsfp3bwwMMwobcFSWpBQx1RxtY6SPd1wDiu",
  "key8": "E3HxzBYzYtAPiD4qtgPKWpjkQTLrKrmNGPVwbnf8PuCnZpBjN2FWjKkn6pxnSgJxXNQXPvUsPTubU3nYEeF2bzH",
  "key9": "2kFvfqmcgu4GTpBfa6o4Re7TxMPAHt3RZbR4uXTKwJeQcuqdWxZvvbrSsPQb9ggnLmgvTYgbjxCpGgeRKPfFV8uU",
  "key10": "656bVBLAZgkNh8pyAqZxnbSJcmt1QGTzS5suPLxMKQSw7b4fnYwEehGZ8HYYNFAv2SSeMt5qbiJ1ewgprXeSjnvL",
  "key11": "3a6UNYknV3es9gFxtnd2NLZQ1qjKGginhozTLFntQX78oxGZoy2nY2cxjW2wda6ngD2r347EzpMAjCFvDgqDQrKr",
  "key12": "56WJ6Xo7HzL6JceDErF4hsgayo9U8JYHeDyU6Xc3k3fac9GWwMEK9jgSpek7scaXHbCZv4PUJmxbfNyZHkrik9kP",
  "key13": "3SDdNWVFV1kmS3UsVjGzftncUBcwfZsEDRJN8oFwBywEjVYG2psBEDdKiZudV6X5bhamcF6TCkDukkRp7ybpKfyw",
  "key14": "547GkFi43Kk1FoxxQBfZxBqJt8WSvWRkKYwpedSDRN8ob1TkFMTMq7hCGfqpTg8MdJbxE3KDCCocnSnAPVRdZzV3",
  "key15": "5Wj9X71XWf4Vz1xhrcv63Kw22axos541miEoRmMzjNT8ht4VRguZc2bvHrUFaxgju9E96RhgmxdKV6QRPURzo45U",
  "key16": "3TDMU7fhzKPKpZRuJJgqcomfgBN9gNSUmGRye86tEWqYHRLUJNu6B9yPZrRartc78vD9w5tM6xX5whukHwNbXxpc",
  "key17": "3uUCR69GXENq9hRVNinfyRUHDmFzHzoLu6BAkckMJWm1ptdxSN6FQH9hAKgHgMyy8hNfeh8aBmz2HRmvMMYPucMS",
  "key18": "sFEycpDvqBVmzHLbUiABGPBPZ1bvdir1EJpUkgpnpVoCdQ3YzNKFxQh39i5C1u8gf2S3EQQA49K1LL9M55dHYcB",
  "key19": "4NaTBtDnpkgtUDhHfyeFXZzKy6HkPgNiWNeeF4dXawjgAZdmJR82zxCE8PejZxm1FdMX6nTBN6vQpessreux64uY",
  "key20": "5s6uxX3FhzGqHGHyZUBEpEooxZhRKzyvBbiT78f5WdDXrkuFpfiRFV61s9bQbJh9yfT9ewDFhDVqz2uHKc1fceXR",
  "key21": "Kmkryx3u6gXaSwb5T3KEyjATwKu25aVaYHSjXpAPbWcm444F5QMjtFkNb48TGT85aM8vPnUigsArnLN6pUbc7LU",
  "key22": "41DDzQAXLcrT2zB97duLVYcWYMFyNEoUs53JsG1BCxS3qmQ1kLKH16deohz89DPjziUqS9BfDW4DtTTmyUwdJARF",
  "key23": "26SDn3rVGL3jo1yeFhhVfiYo1nL5sAw3ghVjy3LgNEtXjPLshmCazmc7KDRmTvjE6R8xd1LhjDt1kCg7diZa7Pif",
  "key24": "2mvrDC8UA7qHCgqdZ2mULDhC8s9k2RhpXFJnmifDjvDEDWmMtwgoweGFCnPxADdpsrkC179WyfQEuHe5UvPE943r",
  "key25": "5GCQZqG4vT6ku1o8NhqAJVJCLYMhh75nNNT7t9QGKo74cWMHGJ1pYPhFJD1gMdRNqtMN1SGH7XoGPNNkaQJvm8ZD",
  "key26": "2L2jTZAip4GXLvUmrrt2gVvFy6M5Nzru1kVV2qA8FCogCt8a7LhGMnAiRFAsUqCCrGtUrYj6jxvZZBZH1Jfz3nhn",
  "key27": "2iLkaKywvNTk89aFXmQMcuUSKz8rfHwt7CeJNsB2fJ3GuGC3uxW4PRdXuJgN9BhKE3vg7uSoMDgNXsWaTsWU1rYp",
  "key28": "2fwa83UgHAMWViWzJibBLBHLCv34oJnywjxWzmMxRdsbvrzMFybMG9ZXt59fXT48ags1LKs3K3pjGkvDv3A7LGF4",
  "key29": "5Wtyp2TuksdQ4cGjDT16QCEvXFzAnXD2zTvaYt7AnWH3bwh2oryLhNfTvMubwnNXEjxtFs6W37NjEC39uSScQpiL",
  "key30": "3V9ytTJky1fCQ7tc3ohzCEoALSPUJXaXRSE96KpeDopUwqEyk2pG2aG7JToPeSyqUxCcWAxj2kUv4QAQoXbyKtHf",
  "key31": "n2Lh4QjhQb9qRZNZV53ScjGaMoRtjN1fBNLdkzSeoCqXgbuoA9EHinGEZxrByJ5W9nPLmqPygbjWrEx81NYSc9B",
  "key32": "4kKR49Dic7wGBWj7m55c6UWx4DGGznw9yCp5UjEL62hQSi3iwwVK9z2JNuo6vkA6ZwecmRo9xYtC8m7wgBUyKEEk",
  "key33": "5bFrK6TpgPnVtRctfFUTxTfnoE6tqPQGRbJPnu5gwF7rWcmG8obMVcstL5FwjsM8EzcSLZNd5sCoQPSckTqEAJsS",
  "key34": "4TBB4B8QhefXxAJMw5HgqbfiUD7NYncL4DR2ZXU51ToMyiGEpssveibhza2qC9TWqHLaWdnkRCcX5LAG7f9JdoJ5",
  "key35": "4nKyEMpTzas2iXXBXEt6rY86BCZvWpKp2z7WYH13b7NTjLajR2whymd352Avj7hwMnyP5GPxxgHjYMnbMQJJupSC",
  "key36": "4k1jUecCMvUF128QqT6TzMXu31AphpFsk7xmgFjHb2qtYs5TGjYMuEN7ft7tzd3y1wHooca2Lr1dRcbkmNgTqHvj",
  "key37": "3sePT5C4hfvhQUdm6ECGosYCpKLeRP2Y5H3yjSGoCh4MMrWTC6dSBpVtkNbYSHU7dkw2iRZKLBCRypDeE3cpNqUK",
  "key38": "3g7Ao6oAXaL55tHN1go8BBV2BpqfCy2my8kvzw6wjgrU1jhu2eMwNEwJvTXx5jGYjRr5r4EMF5guctQC11bp9K5F",
  "key39": "2JXSvgUHgKcbDLbtNMz8h2YBKPNWFbEPmEKN5DexrXLYjMSjFspd2ZMg4jVz1wreA54ZtXuZurbmc7rMCkK2fdGv",
  "key40": "CsXYATgX4qFK2YgsfRsHsqgNZNEryFkAR7y6K3jF2RwgFQ6AMFHqmU7BHJrbaD6oWc8bWwms3HQXRUFAaKdNfdW",
  "key41": "4uU3jZUUZZZN1UUwuPfM1953vbaa4MnW9f9cVTBZvvnuzAZFVmsWWUBkN9ZjxqeQVZ4KBiRsySYUV7HbSY2F2gGU",
  "key42": "AXmtsocSKJN2KqXtBnPevcjMwEowdr8MojNNCsAaRXsaUHx6pgiQEzPY5UwCLhDCpXHaMaM1SzErmWmvfSTfCAB",
  "key43": "4TLwR6Psmh9DtqJEebfatwaXcXsoEXh3wLEmvNA2h3mVnF2gkNyJcPgd3DLX1GkMdYPKaLUaPPS7s2aTsqRMTYnG",
  "key44": "5EvDdnh16zbQrxdbTkXPN4q688CfdggTgLTm34qWDrDXhRMHgsKy2MfoKo13ggPZfCxE58yTeFYbxVyCdPFnE8jU",
  "key45": "2qKK3PxUWwYoPYdTa4aL6c4wb1LT6NKmeHDxg47ZJtLh93XLyfWB9TkyTjh4x7khJLLzGTbCmzLFDubBGZXCJFns",
  "key46": "2mYEJhJdUzpBux12Pif9nrvEqF3buYdBdnLWgmyeb23ZTsv6eWq3xfoDhy19H48QLq6r1R4SdRs7m5kCpqSwmh2q",
  "key47": "4ZxzAMvxS6WjyptRgkuZ5VDsWbdES18o2BYaADvS7GCgZxh9pCj7KLbb8M46tPteHaHiHuAFPr6TUAucf1jGgSX2"
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
