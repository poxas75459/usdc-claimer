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
    "VMLCE7pTNFC2VkC4odGZzrZSL8rozVAnLoEtnymU8YBv83wkFRMPshKGfwJwRaJoyTxqgvJmRzseHiUg72ZpLes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fSYx14HM7jm4s3VFwr7cEMpRVQ8XqhhphnBTJoehsCitgy4KZdyMsrSqQ2oUv2HemLba84FhBzs1iBtdTajDD2i",
  "key1": "5AGvFv3K4PUdAh1PjUJskdZ1tRL4nbYBYAELjNmBBMjbtJ4xdjeSpZ81y9GgpFaUGCXUPx3TPN2hRpGXcUgykMBh",
  "key2": "3VjoaU4noDo3ZdeJYRt8xMcmXcoAUiwSkALipxoQdME1KWXE7uFjRmZRmgASyrKE6RA7rwxTc1JQr7vCbApDqFLz",
  "key3": "2gQvno4db9JEmWZWfnWaTDd3RbQbUPmk66BCS8AFhMqXfZUBnNAiaKk3XSXiQGBa7yA6ijUccS6gt2gYHz1kA7GD",
  "key4": "4KcHwZ9PMpgDvXTRoUtGQ4MEDR7ZsPDNdu4ZWmbfv96oCcAD5wiCtbV6vkcgb7GwhyUS6emvVBiQi1C7n2JMs3Nz",
  "key5": "3MATChGTN7Na57UzeT1vxmuUxHjMSL3m6uttcU9NgmruYYA4HDBVNJrRxfnmN3qeEX3iR9f4syvRBf3WtokhH7E2",
  "key6": "5ZzdUSdWAgZt7HtHr7FqpQ6F3WSyv4nhqH6nLParnEQSfoHaaxwaKDxrrPeTyRBdEKUBG27VqyqNNeL3sTucTNXk",
  "key7": "5FhBK9bnEiGkz34fPLp2HFyEyxrcWNXcUAv2T2AgZC8ZmqEATDaztQ16sKx7Rmid7eRBJDT3whcEBTaegb29PifB",
  "key8": "3USA6sywnZBCzGsRNUMUhP3sYiGTQxZHKpgdtVDEBzeCXqKvAKSSF5xbt4hzUZLibhm2Z4Sy6uoCokEQSb1cyWrr",
  "key9": "4zFhU3Cqe4i3Heksr9YdbVxHNstqhx6VRm6T8qDrNG3xCXhUoRZG2KoDVNDPTZhfFjK2tLFxLh82RRYkcWCuiLCu",
  "key10": "4HapXZzhnA9LRyxBySVJ3Q4Gdb5c4unqGFKq7o6PTJ6MJh3hEg54LfezEKPqDNtFifiZVHU6R8V9Z9kGhZGwthj8",
  "key11": "3mLZEAfRyv3ypN8ZMWPg6TEVCcpTT7QT1ZCJqKrnc3SGW51uo6QhoaGNZa5yjCcQqqs1okYfyPaKCuh8g1LmfSTe",
  "key12": "3cQbg8jndkKtnrSnWtJKe5qpQBEjvUTu3u8qBKpQMhsytnVD1wUBby4oJHhSviRWNVu7s8ggJUM6bPuV5SzMzD1S",
  "key13": "4v9tsmV9WFSNmFgLayoKj2xKgpSZVxof2n7rzfxQr8kWzPv6FtmmHKYKku21hfYQ4U9tieyTcQW6eBYpusB2KoN7",
  "key14": "2TsbDZGrACunCjjhaDjGBq15SGxJjoznsL5Y6voLCiXYXQvXwQzZj1GhLZtWHotttZ3qfTzT89NP4qJws9ApPWgq",
  "key15": "3U8qTeLXTGvdxbXSgHnoT9uvayRaDDwyCZgQPxKWcRjKDtvMZKxDkqYNhE8iBf4UjaNVbLhdPfTQTQxdQf5giouu",
  "key16": "4kwDEwDisKvQKsoDPXx1wDnngJSX6PRCspHun5wNyP946qmFMkFAKaBaS9H6BkU4ubcREZiSCCJjKokkyFPTKhoi",
  "key17": "PRPAZAF32TgJCdeCQSQTdTfYQV44bHtpWhr21R3hUQENJMx8iKTrTQP9TiCszE3KN6F1xrb6Qy8nP92yomeMzRt",
  "key18": "26qyamj2uuMVrSHK2NN4GfkEsfNtZ2EKCpQq2PtBDYf4KyAmDFTT1DZHnbk2boPCLUWahFvKXown14qwSoa9hBDU",
  "key19": "4BpLnPk9Nq5MPqvwG8uskqMS4f4o8UjMZfpdiRS1zYS4Vf4UACwviuJhVer6FgQCyLxAGADNqagpzBSDNrNt96JV",
  "key20": "4xBwJ6hpAmDeB8nZSmzjppEuno7NLFw3mPXCSk1t7B9GBupGG9nkjnCrAXp4LpWs2aKgvpbpGyjabHtB4wCNfKcb",
  "key21": "bzMTfFMHShLQnKx3tKGqsnABMvh2khSCSxpmuagqqV26zMqWsHwGcptg9mzhoCTiXG7w2LudKXLLQ18irCfcupn",
  "key22": "3mMfo13so7eS6ewrFL1zkzUstxVxCPJojMSnszuxSZVDX2qqSSmrnZWiSGg9qcpPuEthf1hAasnkYRkQWokGxJVC",
  "key23": "5e2rreyvXpwyKq9takpUSsSNZ7pZPwYLK7byD2AnLRnVje6rUzqkJwcWQrrf3XdToHt5zr4D4pqWZFNpALWnh425",
  "key24": "2gGxTT6SVpDeuzU52tpmU1XAN4yv7uQUK4azxNtEzQJCoj79sFoNT4wWawyFWEEepsNTRcJDL29u8UBjJtMufEww",
  "key25": "QZDVW3pfx3KQKKGgAiRPEiF7aaKXqFNJkRSfGj9ETYDamJf1DP635cDtjn1iHwTnr7VyxJ8RyBY8mv5qJ3poY7r",
  "key26": "461ExshwquQwyd43vk1arZtCFxPngT36bFE4wrWkfvYNnrUd4NyKuzj6vhXkfjtYRA71otqH1ZNHG6PFL5WAfz2v",
  "key27": "oPx387qMJsyEgncpjUbhbongUeWTwC4eiCGTSpmvVACMAUcZLxjm4bLp6GaXXBhNswb4jQVgdoDPKqztqwSUg52",
  "key28": "dgTT9xtGze5StZ8vz1utARyNpWHis5ue6saC3amWEggCJL2LmvtbXDKG9MzfZJgDKeUBk11KLnzNVF9rG11WPfb",
  "key29": "5AoSFiJmtvKEXaQgVUP7Z9YvF31fNDL9GwTMCXPnJ6VkzdBFL1oBhydKStRFNRg5MyEYfs2R6E4p9nfMKN2RRm9L",
  "key30": "5iuwqXnZJhyebCaBRHdiHcAKNLT1SFCiFv9tUozER6wTTvZGDj5J8FcpcG1gxno54NgcA5UQz9R6AtQq9wtzGmiZ",
  "key31": "3W6j4wqT142Fg32rNx2w49qqBqrsEQwfS2V76EQxb3q2po82qtmfoiE8TVvNVwctRkLHfJT7n31mEUB7Gr6BgLZM",
  "key32": "2g8STqmjwy5FuipGgh3qed82pQyeNUSt1uqokR1GGv1WDXA8pNPgWcy8xxcoeGmRBjicjjL7zHR9XVZfm5RJB2Q2",
  "key33": "39fAcQ8BARnDhBdhc3Aw7mqdWPZhnwwWrW2fPKtvyQQyPSb6toG9EbkQEEM7cycNy5f5wp63oiDS6AagHVhJELsT",
  "key34": "hXZTRCuPXeMAkg1H471JwhU72pzJtRkdVrYFFjZHZKVfBSdyPKQSghYAq9ExniBQWzTbXXXCjg7QTg2jeRWhStB",
  "key35": "979hBmfYSooTYUUCTafxzULnRs75uCBbUCaBQyHXKjtQh2rqGChgUBaVsHhTTRpxMwz6my5ofyZeWCHYpciCwcw",
  "key36": "3ZdcWbHokWgnwiaKiJdeCnjmEVH7iKdfP79bUY7K7CrkVNDKFuavoS4iRQVcu3oua1dwch9eFfsnPmJVxsqiv8h5",
  "key37": "4mFRKxNf6tYnjLyvkCzEFfbwSwHaj7fgF7r72XkqwGobiFcZsHvNfKZuYKmohp28MzZHMJ6tyRorEg84QHF2Q6bs",
  "key38": "cvRzTQvc4SNsUeMHALHWNw1ibbgseem5ySf4GSeXBJBespYEeuyxJ6jtApPxpfJYhEF2EpFDmXUjuQ6octsAaYd",
  "key39": "3Fa5KhjHUqR4677Nr43gTfLSCY1jqGG4nPTush2eBCeDNp81Jr2MeMEUbMzR3ighUFahiCDRcpFJJ6fAFR3kqUo6",
  "key40": "66uJeqZsVRqcqu7Nt2TguBTLWoTkXjBuk9gzy5iZ2xiYS9w6sC7YjRPcdpS5XLxmQeQPoFuP6zhGD6wwhG6VNswK",
  "key41": "2pV8nKzKc5y9JGEshP3K7z3C4VJ4dy7tVwRooTipqxDFMYUeRGHmSre7mTUjEFQBb3aaF2i9XjmuXHakf61Kdybf",
  "key42": "K8e8CRdb82eRfczcmM2oojULEoj2ryXzxZxxTWywrL6Q7cNYPBNcNf7G5vcX5oaJwBPBPXLPmBUQuMimNqV3oUU",
  "key43": "2HcgNdV9gLRdH2AP3YTbLwHogfKtAP3F6KfwEvV6FD89Hcy5WFeZCyp4pxmU1rbYqPTbw8k15jXyAF2M68vao548",
  "key44": "2QNdaZSmvAXNF6fU7eyjiFTBMTNNtjio7oZFzhB2mKhhywiyf9rmBuBonECKiFDz2uTYmDWEH96TCJgiegu3tyZZ",
  "key45": "4gTdY8hs8Umv53kZ5yEwbxH9qnVEQK84CEWwwz833FxeVs5Ubzhnopx27tjntEsRJoULThuHFzRkbX6mgEeBKQGs",
  "key46": "4sqcby83Sg9TuFAqG3b9myPdH9LdHHhruHkAehEMUQL8NzNV9KXB92UYwKHMgq31UGMWYMNysDGBDj95dpEpMU8h",
  "key47": "d2yei4tvGG9hSP2E9yLfWG5GHZcMbz2WCtSvA1WfkyKcmAb7cY2MCCexgCg16hFYCcR81De5kyogbKTXBw2ARQx",
  "key48": "4eHAfQVA7tJWbpuZYMn3EqFNR5Myj4oZhVZXKeRFqTAmixscPPSyLv7fcjMjG9TNicxmP5hinm1w4dQnjLHVeaap"
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
