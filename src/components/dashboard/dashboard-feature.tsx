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
    "3DJqrL13yLBKbYCzFh1cajgoAzefM68TsyqgRdgg1KSn2qV2BG6CJEdHuyCTmQ8L2YCX2dJnjk5V9wENFPx7VnR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bKJ1wqBBLMxawJCK3MJB7t2XYLTtRkX5PL4ieEts4e3xwn4y3fxSsiMkFHai793eCjE5vhik1LU81K9BwvRdrjW",
  "key1": "32b4XFMCdKooMFeWSMLL2XirPBmLvWGJM1tFsqQwvTAr4fe3cjnHSZRnArdj6gjbWXq69CQnsegpKtUZz7pebuke",
  "key2": "4qdMrBXENz2eQijC747bVs1cQctSZtrEEfQZPmE6CXV7APMBggorXwTprCX8zrUtPMVEUefvPJ7SeygrQKCohvSc",
  "key3": "2ExLMg1qApo8q5gQFe2Wyt1ZxkpzDTenMD9g9fvTdo9W2Ne7FCGzsF4UZ5fyGPS4gCRqRJRoY7aGzv5CwQmtnFSK",
  "key4": "4BZhouQya18J42569xiyFU3PddiiyNPZSgxyAHh4Fg645AdHPnikZ7Dz98NB8nhZs3dGR33tkGaNqe1i6goMGE4m",
  "key5": "3DV6mNxN8mGd67C7Xhxb8jVnkZhULnahJEWc7iVRLKzWT483iUdghZfQEAq9pJNX7WE2hrdacBvZXccXbw9RMKiG",
  "key6": "4NJGiBimmKefnMFZ7RLAPUUeLAuMnkv9VGySkSTHaF6kECSwNe5z3NQJRZhUocmJWksc4bngy94cSYVDSdyuWAp5",
  "key7": "U2HpfDD1n4SCnjWYGLis26hGkdpwewh2STmuaZxKoXdEM8bnrYsJMKGE4up4k3NxQ81qHtyvUYP4xnYTGHUpKZX",
  "key8": "4wNbxCVfsEdS3pSi36h7tu4hFAzM3eDyvfQwKeh65AmVwBWtaLZgk17QDQGqsioTniG3CThPzfxbav2EJ4EgQXYC",
  "key9": "2R3sPVcCzeaqRd4od1onTcJyeUaH7i8UYJpDjn4pNTddZTpTzsfe3Ntkv2877eG5fzP7VraSEWafdqLjfcLFbmXV",
  "key10": "3eTWPcgWDzcu2vxF8SMyJAj4bGzwYUwNj8HXtCG9EcUgbr3oHESsEoUC4jaPQpMATMw1DgussuBHcoxXqoW3qc1S",
  "key11": "v5rDfBPaW8iw16ZLTMYmTGcZV6VtsKQEdmeQnG3xBJ7KFPyymkSdK56W3S2dxo7X6gGSM4S7YEqGrp5afkWawnt",
  "key12": "5Wx5xRYmUWxubWfo4H2yoaKZvUTmaTCKj7HPGZeFidARc2v6nAEecwebZW4MRrnAUNAGJTMs1t6X7GMqh9b7GqUj",
  "key13": "XqeKbnpQRaps3dmhQWq9BM3LHtJJxU5meDGTDPsKMzmHAUPF8711BoyFy82xfafZzBhGhnZZrHzBAtPYjKQ94Dg",
  "key14": "3grzxpj29uz6CiqFmJbid2Vqm88SUnjiz2DhSf9um3BNT5fdRRS291kF3MYCkD7zj3ptLzMFmQXbsSXjdRsLbHEX",
  "key15": "2p12ZV8CSVEaVpbFbeUzZcxJeHM2v7RX5Y9e1Aebhd66DQemMMq4X3n15iHVVuyh7YujxBHuB2JwbeTDioHsuGp2",
  "key16": "4fXevfDVApPeEMNVtNxKv8kNcD72butFpqJc4hXFQPE8th2v3mxNJHRQeuPQkkpyGRXBGA95CuuMJAn8VBnaxYDz",
  "key17": "5SS6hfHmXbtiU3VWuqWVkZnTsxSwa8E8dEt7krg1hctUTsBGWuuetYszSqMoAYrbosQknfzsRvBGdmPqWQChkMF4",
  "key18": "jC4pUfhmQ9VxGcXXpjtQfBb5Ag2bmsRc99kanerZnZYBbEdakCc9uSrjRHR5u1swSnpVr4xjZDkYgL6gobJPwnP",
  "key19": "Qd9MW3banXFsYfnAPr6Js4aMqcrHFM98mvKa5d2vrtArpmFTym6p6jteoYpeVz6Rt5LiHsYaiTMNfzPUKYJdBrA",
  "key20": "JbWSVpHz8BMyx8opYHgBa51WdJ4HvVGkG8koZ2m5Guv44afeDyPqJ8vxTBGoxzjwyG1fmD6RHas3p9LSPdsD4vt",
  "key21": "4DaszhZEGMox8bShvx1nejS2xrotZjqobppVPpfjHmHUX7WPXL1tXGMndfz5SXxkAYNeyoVKVnNihu42mnvjJUwS",
  "key22": "3BYPXVnMuJh8Zdn7fSTmbDyEe7jKDQpAsLWGUT4vdHXzVR4wTT5GfbhfBV6K1gV6NskoE75YDTdiaSJd9RfLimYk",
  "key23": "4hN79DLowFUjDAb8gLQLwrMb8pNnJxVdwvh9SMgYcqCmKtANXaLbXkc7pPBBE8QfQAWpopCiEFafzv5hGYWnnaHz",
  "key24": "4shmfBJD3FanATJcaYT5f5B3FN2E6vv6dq2L4uVzCH8WbvrL51FyfPWZTSPFsbFV9VMgUcyu5cLPzFR8GshdkG8u",
  "key25": "4pkj2E7SCJ6wMPvKX56hTpM9giDiq7bJxzu5xP8EAq5s1DukTn9YpQUsb8hREWKaheRZLU3wLekMBeSk8YDmHWGT",
  "key26": "5ZP2GqVgmWnzigf6fqoxc5RhVaYwoyfpua6HEnfsLibRW7ATzQND2ezs5ZZNZ7T5nmN8e6JukrLXcg6XyeHBWs13",
  "key27": "7h3kU4KtxwSvd3nnhWNJ7sBqTsg5SPtMepWgAAPKZPETBR9wt1Nfr4HFG6zVMcw8hmpmrAfXrQJN2gydXwamvFa",
  "key28": "ZBnh1BHNKtUv3hgLzpxVS2uq1n3BuAvSTd7BhUS6vjmw82aizFC4R5rswHFd46VHTaFeKfQV5ymGQiaiRg48YKj",
  "key29": "3LVLN7Pn92Z7CqJPnLLbHdrNffiYricCX7pdRaWg7Ni3n6Di8MDKguDNG5a5gFAwun96Gpzc1R4qxySfixY8PfG9",
  "key30": "3JeSjG5J5F94ZPfwkUQWjzSRnTDsi2PLwzD2XM1nfBsB3BNtXidoGQENe2WdCRsy8St3uD2hyCtZSJMTfQUwNrVr",
  "key31": "5UZ25eHDNZaSdMBH3JCprW81pnUC93HqPDDMN43n5AfC1CYfAbB85meubK8VAPc9Psxn23EevgxuSeTpmitM9RyU",
  "key32": "3jisFy75ZKjTE7yN7kkCC6EwBEDaAmWdNKZJP1ywLgpM87WAaKj143hEG7sUo74GpgBA5doyazRcTEjnzyaqsMqV",
  "key33": "5AAwvkQjhs7kHVuG4ivT3wWQwp2ZQG358fPDzmfufw5jSomPQZt4YwFAqdLG4122nVKbKjp69C7miwWqNL7vuS8e",
  "key34": "31cJ9vpDShHMvjJy2SQyYaCVFLhuEoT5g2DAiCU8R69tGLnYXFRgLoHK8XtgYQ2zgqV5UD9SWZurncq3WPQpUzM3",
  "key35": "53hrSPyXdS8Z6F4gbrxx7yShDxboeCbjmi2wHqzEmwEBZwosjhdPWvqqJRVxC4arFgVrSpjyUa1RpK5GQFuqvJcQ",
  "key36": "25CD1GAQSCMueLj5A42mycDqdSKRDeEZTv2Th29MhdxBHjejziDW7oCZ3J2iFaoXAiEm11EMqna1WzLwyUzQXPWV",
  "key37": "4ncsWWL6eDMB4Pm9jbyp2hx47s7HsC2VxKbsoWi3VoYziGHuJciQyiusN8mxMDbeCe3yu1F4Mj3VVywE7TmrynWs",
  "key38": "57K6Gafh9ZtbzwNKu5rMWMpiMduWC8zhuEmZ62zLkB2gcpUaa8mbx7rojmod36XNymC1LeqFroJbFCwPJZrPwvny",
  "key39": "zk5tV7zupGGtTMMyzFLW54UTNNUBpN53GXCVf8ULe6ogmuZ6s2L3yomxugaM2x2DQjfVy4Z6tXKM1cpPZLzxoMg",
  "key40": "Y5vfYdSNCMZSzhG4ucuDF1f6y82PjZRXC7Nemt33Lxz8ZpE7Arp5dSbDmvdbebvTqr6Xvt571Sras3DD4McWb1F",
  "key41": "3kA7J3KQ6ZRmaXcRM6FLmyKPC9iT3etzRgeM4tuNCsp24zBSyLX2ydgs24bG8LWZwXpu2g2AoMg5XAzGyLwgf9sH",
  "key42": "3RfYmt2ADU7ypzvcdNSVkoRAVva1jeVptFdtPo78FyPqqaRDAwjRsQfDySxt9C5BeA7G2pUZb4RqeYwqeAWT1ReB",
  "key43": "23bHcKV12J8gmvHkVfAnUyaPmEUcN5wY2XeXJ3ZrNuau3SvEzWUz6wYnBDVikF1ET8Yc4TGjcMgGuPew8zRVrBz6",
  "key44": "3AidFwCVTGeACe1dWBQNk6bhcYgefezHLb8U4PrWgnVQQpkeB9EWndZyU836nzyKZPAoMK5aKtuM4CqjPX2dxPcx",
  "key45": "3fTbBz346D5Hn8pvRNeqkGS9jhw3qtYRZAxf54bnNhLinygiPPSkGHYfrRDRPHqahu19XAB2VnGWuKJZqd2KDgCN",
  "key46": "4CgPvgzkDN6VtqS9iYF3BEuLkFVSnZwfq3vRZHP3BCshLHSYgrJ4S4wN8N4j1ZDR3f4NGhQbo59mS1AACP4Vtiu4",
  "key47": "c2jABAptxznNVye5mgw48duw4EpgEVFTKN28qJr2JYvqSaftSv2af2en85aQDD3sTVELKNMBH3Zbavp17Bs1nYW",
  "key48": "uD23NYwBuRW5JQuPW1dooK91A7BANDhx4qYzzo5nL77v1jfNTuCBZMwBd5zHkYbMVUTXGev8kdECHbMPsT8LsxH",
  "key49": "tDqmJ7eANRHwQRW91m76uk7jYPUgjZariJbTBenQsoHuVCbSppMHA4LZHfy1Gq4jtFPda1TzGEtUyuMnwjjE1es"
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
