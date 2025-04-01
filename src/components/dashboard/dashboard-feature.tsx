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
    "3NzWyU1hfmCyt1BZgZkncfRG4btr5i3XZCyXZkc1t5MusutjJoPnzhfNAFVUMZ8QZ77BQbxg5UA67hFm3VhtbEuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LKB21gHX48qXGihYRNiLVKmbWmLgsS86wVFXK1kYN7Ye5xjZm3R5vfemYJxt9yzPv4KfKujpFG6EC3adu3sNtK9",
  "key1": "2NzB9T2pradw22phtBfkE5FXwcQZ9YBqx1rZcWFLHDZcU2pNp89XPrXPnvzdRfeKdWdtcFbsqSi7h9tj8AjUNKxX",
  "key2": "3yqLJMTc4rgqAvJdAVhFXPe91YgvGJUUMg4ezE64jPekknMKVP9sVtZJ21EzdGVWfK87AUWUjoMN54wVPpKgQUpF",
  "key3": "2x6mSyg2UNAQZSdBxENiLWDNr6gnRGWDxXNSLniewumRjBcDsfGwpBCHYFWnLjRPXtwfnHcjEDLqCq2t7U2uruSe",
  "key4": "2ZaQNipLwid6iLsv59vn7XPZytA2RbcBoKhmyadhtfsRzdLpgjRCVSvDyczifs2wnwe4oZsHCJSG4DJUqLVLt2Hi",
  "key5": "2XZAiakoG4X7nD2M79G6ETw5Liw9BGwfk8rNxMCgtEFmpVXYMWNRP39Bf4tCLArrHd17qXQxr4FFqfpvjsTACFLu",
  "key6": "4vsFH6j9oTpsEKfDecRG9K8Vnaji9uNSbysF6qUxCy2whDur3yg35o3u7dwzJrTpBbGaxHoD95C3KAdgTV22XrXP",
  "key7": "5x7EnKGXVxaCXmr1zUFd14CqyctcSvmF2hA981euDbkKo4dgNtboFwAdyNXQ9C3QJE4dWaQy1xiuoYegjY7oTAbp",
  "key8": "F5RDWmgLJFWVHV66ANCTNdJUWxkBCyu4t83uVRRUK6unVJMXNCpSGeNaUvebouPhGVd2mEHqKDuNFaTLpbnRVvr",
  "key9": "38eeKXNm57eWMLRYtwBwbUX9ngn1SSwAMYGJ6jXv5M5xK6cijih7qA2zHqpuiAcLRh5kESruTN9sjgHpqF9iUzuC",
  "key10": "3qPTF6mGhrzZBNNGD2sLxvF6ibKoZVPKAVH8faQyxQz2HhR3BiPo6qYnQt5YTPLEs6s39PrKk8XWK6LPmWp7BwHc",
  "key11": "5aLBZsZpMMao4WXDEYNZzbtoZ4tiSobJaqRqDYMcstShoZ981xMaSVDWA7Mxwtaoeb7JEhBWMxHiQC8gNSRLuCCp",
  "key12": "yECiMnCUFQVp3fyC5roisbwoKcHmEqLhz4UpmQXoyiYRfcKWkj7ZnQCTcCSmi5do5j1AxKJQtZTYL4Ji7WEWCDP",
  "key13": "2keKHT7jaEb64iUZ3vG9T9jaXSqf62raHWKzXu4mh7kUNiL3pSzc84yeBXnjR4hVwDhMNtXQBYyzZnockdn54uVw",
  "key14": "bFbW9Qz9fS3oegcmBFVCKsKempyjWAmr2FpgHpkq8wWeCj7MeYju3BfwmCN4up14cJKNkD1XkULrm7vFsNwSxDz",
  "key15": "4iXRZyUeJVjAuhXF39Cdnab75D4FWjoX6UGP41psWeZkXUuX5wAkT3peih4XQSU44Cc46sLwQuyzn6m3FTvaa2kD",
  "key16": "49CCTDBsdyLJHLfmo7eVna8mEwxgjcQcHn5xDBqfDh59bDLxGLmGooz3aXM1cCqUWSaUCyuR7QhWaVa7k1db3ecn",
  "key17": "2ZzJVCDUMF5kYvvRkofCRAHjzHkzx4a3CooWGsEFucXkh4F3W6EFGqtkmjGjx7WaSnaGgoNd4YtyDXNCbdu2avxe",
  "key18": "5JYxKDozmPsaGw8twTxyygy1xiRYNxtzPsRYJR6GUNbmcCa1tS9hrHSwYeTnvZjNu6uVCsx7Wrh7DCHmgN53BKmh",
  "key19": "4ZPqT4eoeXVk5j58k86bRvKUHU5K3VCUG7snpg8nPCHqtgWJRqFn1J7YWbysGkEvQTffygZcTV4XVGVsFwv5rCDT",
  "key20": "2uYUwzY1Z3TQmKUxmBgzfegzeVbc9a1bJNLqqnSxfBFSc9k5A7cK9fdH46YjfGsdD2aCGhYPQJn3f1V4MRyfuyoc",
  "key21": "5AgdD2qUbfoSd51ctenuFxcZrXtjP8mE47jYRosKqMfC4qf3rdZxTLj6x65YnpQ1qmoFzkzYi5uYiqENyASpfk1F",
  "key22": "2KMSEDuT3sufvhNUrHKBfnwUnZTe1DiqQKoaz3Pd3fwWENC3XEp6NnatBsM1NKUbAVRXzoata3NGLkNszGt6QG34",
  "key23": "4716pvJxLSje2Zg3ZgQ9C7GvyWMJ6D9vRnubXbW1jDX2wJ8MjTFnbd3r1yx1ChwTzXZPAiS6k5wisZtibYqnLukV",
  "key24": "3fU1hPHLp1GpSfGvedSv8txZxBo1G9Z3kcHey2h9sgPRaDQgnXMqg1BbRkuyK89ewrZFEPrcMeqKgbQzQkVydtbW",
  "key25": "38mzdjuiUSF3QUrFMQtzezv38rGUyK5Pus34dNXYDTBjjBCWvL9BT3vNEj1zN7Cs2nqs9ZtnT8dCoMZhbvTaXjYC",
  "key26": "4cDoEuk64Ybgk5iAntLVtJnUrXDb4ReMD2JNTrCBWgLExRQXvh999g68up4FiedJ4hKtDssJzSRhccXzKRvUG2ks",
  "key27": "4BZhFHiQKozHaMagyXEEccEs6WppFMNhGqEmnzvttJv2WH2BD9V14LFAJE5qy1HUNQVQ67uDuCHaqUSpyN92jRMT",
  "key28": "4nURmVG2x5doAAxPiaNWdGPK2HKsbwtoKe53QyGFdQRYq77K7mqGrnRMdXT2SEMGr8xrhcdhganfpMaCXXamipqm",
  "key29": "46hPqVuZjTdmp2tdiZNopUwUMnyRbFYwdp2kJYmwNHpDNN7zzwKbXU2ae4yVjHBSRpg9khKvfxrPfR8ybEPC7qFK",
  "key30": "QX1iq6P4JSUJZnjKPTpXs7gskkkRJwA6keFAB8ZJh9jKJiECsSw9ZG1va7WcJYVFbE4DAN1g91cxk3onaCz9cLT",
  "key31": "4nKjnAyiHC3xb7b819teSHiURw1MuzyQ2Jp5M2CfQSZvvj3CCxrjNkMyScX1zXEZKgPLGfpCGgzWPwdxWi16Ttbn",
  "key32": "2EBo6yDGozjaUzDrDyppJJWtxEvmg9GjWu67XFJqQvaum6pSvtdQCPbVD3V2k9t2vzb7MVTrmuGqHYUApXzuqwkA",
  "key33": "52jvfep5cEP41KBirbEYpriDLGXhK5LJL6etmAee1vngYU1BMVtEbF5RmbA4xhao6jXaeSJzxtMSLpcD9DNJSudv",
  "key34": "3NKYgRropCdSVivGhDeta9L2ga7VuY7bsGteGiFEpwEYtcotMAmYWydUgMScaQHHayNi1QpVS14fPqYT4Jvyjsb9",
  "key35": "T71VUG62uoGUbEEaRAmgwSxHEBYXc2yhtvxatEiQqdCjyRCepyu8An3F53pUobRbtVPusvAkGGkEBtL5dXU1iFC",
  "key36": "2TAeChmM545NJUjNJm8us5xiVVb6s2dt7b3VswCyKjf8jgHoikgvZ9Dj6GjV3AdNCTVmMKPbnswsuYFYLhWLWDYr",
  "key37": "5b4q8ux3gUwhDf3wuVGtEhWJPsPWeTUFJM6nMcB8M9KVg9n3WebnNNuTSGLrNu22oB2YxzdpDrRdr2xjujgWqhHp",
  "key38": "65jhsxExxTjcHTLZ8xpN6fMa1DfbuXFGQvtkrxpRSgnG6ehRxNjHVbQEfc6AoSbeA1idh9uKtDQb15NwB77V4Efg",
  "key39": "4MiReVbP9M6PrLbVKEqFaynYbht3pHz4md6ShLehTR2gd2BF7GpAt9tHwcr5uWPL6H1eSyxuyE4tUgzCQ38FSad2",
  "key40": "2qjzuKrNnpES57Z3U3CfNAabC9mgWw8uGaEsHnC13fyXLCybae5XNqKCxxMWKg1fDhfV53VzDcuQRonQJU2p9UbF",
  "key41": "gBJP7Q9W9z3NX3NJjrF8jHihegTphBhuVkiTTALgQvtz2cuPCLve7XG4xsBmQxFDpU83WgJbiQnRZmBN3ZLwcDJ",
  "key42": "33TbdbRC48VPse7Ezo3m7Tuib29tvuNfML26D4fr82fiR741Rv6MFNBXCJr6aan4x1yoPYvEgz5qsQwmNZBQA7ad",
  "key43": "5i9yDRud4kpqRCZwRueZc1Kr5DZnq4HEyKcD7DPcz2L5BrbNt5aUqVZZFsmd1s8c1WUg8GRvXULpTEopicrRWYnu",
  "key44": "32Z3zrLeTCttVxwNsqSHVJavYX9BSpSyTJJH4K39o6ETcRpSKdrLrGtyU6kekdZU7BQZn962xk2LKh5pCLRgN6jJ"
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
