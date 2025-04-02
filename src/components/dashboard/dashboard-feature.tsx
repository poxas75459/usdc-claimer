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
    "B4RdxBZtuVcxYhbZ6EKvh66GZDYUec1QrZKV5tqk9L7VLdrSF9BVGBziAQ4JGLh6gonZxH2w82QuoRqNVFwQsNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CUkLcU4agDrAJaXhFW8ePWHi7enwwz5kKKMinUDUydy63ArboBtzxmfwH4ok1hhxd8VsyXTkaicDkE95gx4rPqn",
  "key1": "3YhgrtPYeDVMqeGnHdSm7tsRDAnx2Jm8AJcbed73yynZL3RfkCddVqsMFhQaR6JoNCyK5bVtoa4tyPFukxJS9oe7",
  "key2": "2VSvhf6mEfnzNnKCocpRcFHMMom3K9WLiDUon1NQeT3Bf77w9c75h1GiFnkgQW5Qa3MAvB7XfxiRjGrwJ2i36hTp",
  "key3": "mTsuuPZeVmmBsZNPNtbZey4DKC4VGw4bEFm3SppRpQJK1iubgakJgi2V2wwu3vpZg7hjDng8m3KuxBQUF4NUgKG",
  "key4": "4vjkKZnBwJdP8bwMhWjuWqtVaQnW1AHfsui9iFh4JQBJNSZewrTremxHaP1xnHwzMFcYrWzmnsuTikWyozpXfKt9",
  "key5": "4iCZke89T3nXFRJ6aQsKtGVLyno7omACrSkH5QcivgTkZwUJB8aMEA6U5MzPT3hJAipexWx3NmEWMrGXh4qcrc3m",
  "key6": "3uYNu5an2Z9iRQGoSKxX3mNqpjVpfWwM4SeL4kjG7UoumLi7BJCayWCBDmwAoY5XMsrCq7aaUPGAMCSxNZXGEEb1",
  "key7": "5WkrL6ZKvJq39xBLx9QPhsafgt1KdYCYeSvFsb8UjF6WEGzvYx8BjrSP7maDXGxJ3EQT1zdzEbwWDSvXvcvFzw7c",
  "key8": "CMf96EQqNsNRjohx9BwoCm1ixhfJ23nB8dugqYeHJ7pRfwTMhbjJpQZxzbUbzA6f7eyULqtm3E71cSEX6ygDV3m",
  "key9": "4uBmuyddGCgXogkp8JjHXWnzLg4xW95S2Y9qvtBuTLjdhCaAJYnvNDksRvi5VkfRcb79sNFVKrnNEy2mY7UANXm7",
  "key10": "4TgKJk4t74fzQ1EhzhTBTfwVoGNP5jgoGXKuJM1Cs5qWSPqb9ocApEzuyfpS4ddaKZJJdhXJ4g1L89nkwb6xk6AB",
  "key11": "5mYkdkTdu6qT6RYSwwUEUtwegiKVogWcEvkYgqjhsT8oMsmYgYgYky5ALdm9j9F5BBb1ARcAe2Nj1rwgDaNDbBrZ",
  "key12": "3t95Gq1G6DmhYosmo572AgBfPDzzzx3rdAUyLjFfWuCYgzb3AVDXsFWpmtTQKyNWcjkW4Y1ynV7jVQJpRzF8jMCW",
  "key13": "3hnhV7jedCLdzXtuvByqwVcsWM66o6AbLQYZRmvK1TDkzeXVaHQwtpbLkpN99Bo29we9XpXLMjhPR78X2VUqxhbb",
  "key14": "4RzAkogwWTcdSnAEttUBV7UnNSL8YaBPcLbk8oU8SLdREbYKrNi4aXmpgnKeK5xxdosvHWzrp7AMZGNpWdsN6K2z",
  "key15": "5JqdyNcijG75pmgNSTtACrEiatyEVaQQCJ433BFb6cv1Hpu8NuRm1FvWxD77CAJVwMndga4XikHindYQ7w2jZ21U",
  "key16": "5yLtQm6uitPVKiDCmsZvxVzef4PPPaLY2oSqKzPGXQ9PYweaGm5FAchF8Yx8aay1mZywoK5Zag3cN1Bx6T9k2eEN",
  "key17": "56DLwzGXf25vqDHS2HNcJiYDBrRRLW9wqDmJ7nRiWZ5vUqKtMr2kVEDUT8HCdADu6wrRrbnszdZkRdjSC1wt9p9S",
  "key18": "3ZhTCMhbzk6GQGouxiJ2mXfsiBGhoXyxRdDSz55U12QVSpsdUmtfzq6U3ydKyeHeh7EF99YK8dkk9qCRaAmVAz7x",
  "key19": "3HxpQWv634ANwZLyn6jjj8Mn2oCgJZXKAQRUn75M5bMoZwvWEBZdZVopg4GJetEiuvxBYsRgvqbptPTh3rt87zF1",
  "key20": "31VdwXoi9FJHpUFwatA4tBsGRyx2nKjtBQuhjRxzaFMVPHWxf49VPh3EnzjjzLGdtReq2zmSk5dkaFVF6LTMbzHQ",
  "key21": "5GeyrBFEbZzFZzgrLuesq1QeD9iUMhsabEHJFmU43Ypr9ygKtsD77iwDzdfCi534LjVZr4qCqHbXtpzBWqynmZ1i",
  "key22": "4MnvNDAhTStBRfG8cN1FXNaaKUU72Sr4o78radb5nUy5gzDhvijQaHu2W4xGEACjyteUVJJRFC4LzBtmccPAed7C",
  "key23": "UeLFHTdNm4RxCC5PqRgrxNL8B5oMAaCLUzPugKcsyQW2x8XCDKeBfuoVHs4M2krK2KMMCgSN3dE3LRBPXYNH7Ls",
  "key24": "4Z8NC8fLRupNCzcRJoT9feSLmWYnUk5Muw7MquY95JvRrGSNLDDQcPek6g42fpMzaZWC7ZoCXYBuf83HPUrtP1qk",
  "key25": "2DoSy5Cscv26HKLxEuUtuYAigxb5smxF1TG2wBDAptVas7ENnHapuTdugcLjZq7UrgGLkWEzLz44SkWChLDc7S9d",
  "key26": "4pHzZ9C9mCLFW1rvuA3gvmhZ7nSUVVtGRvUziRdpdFaZU7stgKv5RTuHU8ymyUZCcFJidjVT9zrrzEvxQDYWWZuu",
  "key27": "4utoMoyJwX2BdVnhb5jxTsvvfgH3fQREsxWf6Ymt8bU5mXdWQKB4H7dhUmUZoWhg6C7SUBbM2rP53xWNuSxHV6KY",
  "key28": "5yRWpHyL9a6KigyR4szJGQCgXwYQAZSBHTFWyd9AVvx6H899z5mNkn8X4o7pAw7z1kw1JPxGdGeE5M1G9rhR4fsB",
  "key29": "2t88BvGTouYqUwq5ZZhLTvpgLzvRmHyM3uW2wWxzL8cE87iYUBjBzDmKFEEy7DQPvEXboBN1JYpMY1xkHoLt3hxM",
  "key30": "3pSXQMednHFAYNDgfTuLiLe68iJoMRYumvXGR2LegW9nKdKi2Pgh9hoax9DxvrjT8gHLrn5XECrjqAxRdhfoWJvr",
  "key31": "3EtYfTwPPkEnV4LhRKggvcwMw7GPg9QKi9kH7QiknhYyCvZg7542LZaYxqeCzVdS2ecBJZa2ETCJA7y3yBvPnkm9",
  "key32": "4N4CfPUrvhuoxJYX9mYuhNM2ShRMzq6vrJUT7K7bFCmHhwVjEG3vCpycb94VednARi15sYgQnEsDgspyXaXwKpBJ",
  "key33": "2GeA58PfrVurFYMvDX21bzkp3txXQ2wLGT2Gsb23GuvzrTVVER2uP5Mmf8B8hPBkPSiAQ5HnmAvwHHx6dLXYYXeq",
  "key34": "5j6vRyu39jsosPFpzFKVyXg7GGiEARkQqT5YwWNw4ZKa6Tz3E67DFVUrrbmJGfUZXJ5KpMcKawDHzeV3f5hKdPah",
  "key35": "cGRsUrYJpeg2GASPehCV2xYeN1PmuQ8TXAuxA12WkbYJbaxB9cEzQfxgGLidNXaXW3MpffFnU3VRHuoCng1ZcsH",
  "key36": "322tgQknJ8wRrFC7YtQyhtxuSNwc7kuqjzgL1NZT2ajEksr2RtZBHN7kbULy9Nnem6URmDZKeCXajsvSUfspLoLJ",
  "key37": "322ZLviuKh5jbK3feQs8zEYo6eYFBUTsBQfSpApFeEqtm89Wm75ZRYwnYEz4k9FTh54d6WUSJsoxudzdk2jJqbiX",
  "key38": "5yiZWVtUQnghwwR6CAyZFFrW1ADE7HPv7JFSNbuHEfbS9aYLPE5WcMcYdkftzorHeapNdeGLkZS5byffjcasBkgH",
  "key39": "yVCNdKecazKqTF6Q3Zuv34RLn2UPdxGwbVn6pB8A1vUM4NFio91w9XVAEVAGumzFdWivVPbdEUZNnW3ugvmADi1",
  "key40": "3SA5j7fVPWDn9inHy4qGXPCkiavyoyB7u558Zqro9HUESKRaB929HV2gjhh9GZqKVfcw6mEQjiiSaDtdq6k83Apb",
  "key41": "3X3aCFU3zHaj9RTAU6n5Ab94StF5Q7QgN8j3yHvphYX4pVxP25nEBVtJRtHtS8Pi2AmdFgSeeGoV8bpN5YgQPECx",
  "key42": "2ob4ReXciijYq3YaGx3QWNz214ULZpS7DJPJzHrPQHTtVpuvsSnQByy6w2n6WJMZTXX8brmSb4nvmSBmPTeffyNt",
  "key43": "3TNEDzE3pxbCRBzzdaSVBLq2tFi74SatKpbuajoVeNUpXZJNtADd88gotGfvvtFXhf4dZLmJwXUiQB3nzdMDvEzJ",
  "key44": "4rq8rhzBho183yS8dZpEGHhrQ9Z2YYzrZcwRJ5HRoBXEEb7txScbtxPZ8EDqeHEE6uVyRA1VE2SYiautLyTwYHTB",
  "key45": "3635RkBjEWMCpzQix2Ufb6cPVPqizRa8FAmQ1Z2WTBKHW7GbDj5wJwU1w9uJhUyPBdE2jpT3G4KB7xYuJa2taNVR",
  "key46": "5dDqpPTsu7akbVhajQrNEmdKVsm1GoYPQDbrbbbYVLQfGnXARj5P4r4VDLfayDdnoxiZ6MvuithLeoAW6bVhtYfo",
  "key47": "2ke8XbfR5tH31evkUXjEuu92pviMjRM56GecNqWv9SwrnfGe3sicxv8EaEr97GWBi3Kr1Tc48A4kpSNzHKvEfMwS",
  "key48": "2Zc6dxCJsaD1urhPDWvFiTauD7nWCj7zVZqABiLUsfkbxX7dmizcXXScwkvC7jvrbJ9LMnTeZc8m2eztYUNqqQGH"
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
