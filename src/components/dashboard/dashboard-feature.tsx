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
    "2ubDfhRLYtajL9aKhy9F5ZbExv1u1JuiPtVepisxhr7R92WzNTq74PFQYLoWmMMK6UzKSPSJKzDkmeRk4CQ5bYGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aGctSa3igjFKyJWobDxtAYvejYWWN79dMcEJ1Wq8RH5AJinQFDNZCV1soUYtK36NKLaZDXA5xquaCyvz1wtgYwg",
  "key1": "4BJqEh9XMSps79TjAo6X2t7B9vZZCAiDnKmRiF3YtKqTopqMTkXJWHmCqnync6nA6C63SGJdv573evNMmvR5QKxs",
  "key2": "5NEkVLdVgwfPn8T3DT7ZU4LuTh8t7xLKi2DXt5sQBtuzv8ampXzMtgLwDB4XWF9bYL7z5zCQeCnCdBBwAbALXUkH",
  "key3": "3JtsFEMAeFiaxBKZtq9k8wnX8ZzTzCkgFtF6vdcC9jrBEoebyPhF3yjuuo8cUdPxVrw5yHNbdgCJ9txoE1BQfVbJ",
  "key4": "UQCcUUKfCKuABeGbFNUzcPnJMdfTq466CgnqzACGM5tc5eLKR96brPGU7np83tQQVi7sHdpHiDawLEkygdtk8W6",
  "key5": "2WUYiQhzz9qBsW2CP73L1B2Gde94Mvh3fWmiobuSREwLPd6KCWeSebg75rgcHFHuzdQQu5cwBSGg5yA6wR88enbd",
  "key6": "5A4gbwARXhVjZ3NivmyNwxaFNY7eiiwwnaMq1vGH83Fana7sPF7LAxr1Za9BETH8pxo3ungshKVbHRZjVeFz64sD",
  "key7": "5PXeVwixvVm77NJk9y4hXFzsB7NbMF8vst6dMpjkVxpFwbY3e6bfeCApVkL7ovos4dyGVjppJqLqfJ3XQQnxJmcT",
  "key8": "4o8rwHgSkWfK1CayKjhbnA64V9ydGqaQcbad48cvBTFp7ST3YyMKASdYYJY7Wbg3gUvmzYWXqXgCjAiz2SYfxKrD",
  "key9": "5dxAgqFYwVDEsLDjiuk4WDbQGnyoo5QDAsyBKBVDrwGSob4q9AamM7fGChayGWSXaquHeEtF7KesFTgh4xYHG2RJ",
  "key10": "3fwUdauzfDpawKBcnZKYk2tKu4FyD1hTvBuhptX7eUMLmmqtxooJuCu3DALBbpGkqLQPTBhZYNji2B9LVTBZPUGE",
  "key11": "22P3hBVKpTbaJK4BCJ6oZSeG4UjgKbPUdyDxjuKfAV9GoWSpRM8VuhBjkoij658ooaueH6mk57uungvzTCY6YSxc",
  "key12": "b6dcMguvPneTKgKR5r6CUYksC4mgdXjmSnAAZp59PriPzV9pzT2mfmEayTTYPdfWLrYfrVAVYjJxWRwkAhjxxed",
  "key13": "5meZ8KBZvz6MBkUu5Rh8mT1Kk3bZX3wmfA5yuLnULm36AmPtMWdgA6SbcAptX9XpZnQBHbXBgxkC9eMFHbeLPDTt",
  "key14": "4EUwPi2BPQz78wQU4SU6PXyrQgfEcmZrBpUEZtzem15PNujR8JTkiQmj6CqNUCvaBE9tNmGpAxzDoadrAj1bLjGu",
  "key15": "tST1EbCTefbWPTT7VFbH7WBthhK2siSYshMHz8xnReenzTDLuVe48mNBWFkXWUcAQ3YQkdY6hf1EkgmgPaFuGxX",
  "key16": "2m3t7ob4DeBw8Yo3pNZQXNpWZMuKtNDHWdTD3vocQ65T5JWt5RZeoofk7MUvQuUqnb77CSxWFbkrpuThNHBEotwy",
  "key17": "2J5G2pkZ5ZSJFfmrgSfyL1Gp22k5doFgPhpNoiYFWETwywVFczzCjUyk524HAqa8GZe5gd6PLUwxZmF5j1DkYJ9o",
  "key18": "4V53nBtG5NAb8h8EBfLd8N6jEFQ3ac62Y4jSS8x2hKr4hvsHVZXdebFSXGF8gWA1uLdq1fyef5vQ3NkUUDKUm1He",
  "key19": "3Nj1CcX1Me4qdVLNdyAPuZnhUAyq1WnFD3WpVT8kLzQNHSTAS7n62eUkUCogZTim355NhFDokCNK7af7PyNfXWGA",
  "key20": "3BU8xopT1mgUJz8be3TaiGhiG131vBeVCLerNhMk2UKQNTKte2JpyxFYoZCKeRdyK61baeJH5qPtGeeuEmmEUB4y",
  "key21": "3jhpAP3oDcrkFrPrscTDoreUYnbhkGQv6sw5CtJq4A6Tck1wpTtdXMYxSM7gJP1pDSv4VDHLaSbubMj9k6bMyDpb",
  "key22": "5i8wLPCLEXk3HMAkZSYtT5AaFMdn2gkANKgptXUGGpj69fNku1UQKunAuaUKoi7ss8Dtt2D2yswbgQ5Zr41t9oa3",
  "key23": "GDuPapdHDzQ8wcerzkRfXobw44bfkgQiCcRKLFdPrJtCoRmvFzmT3Hghm2ENvTtaQ4S8bAZadzBdTgEpEtXCNTL",
  "key24": "3qAGwUGUu1JE6TqTvtQuPNmRk9Q2U3iw76Aaa3gtBPbjRvzy5BievTJjD3NBAYD1VjcYzxa3VgbGJdke4Y6thmDR",
  "key25": "5xXyTkmDJJMUG4Zd2E4GopccktKEt4reCxLnnK7pw23FrzP8sTpfe2Pz1TdJtHps5cD9Rb1BoR5rB2iptt7eMXjb",
  "key26": "4jBiouU2UtFBjN6KnTR2sC5hTUwHfetxwiLUXWiaHopUBwDs3SinR84KK8ykBagNogQKZYdZUvszrRUcXgWJG71i",
  "key27": "4ZZUx5q5HtPwGmv8ppHfjYnUgWCqXmjj67u2bJVwzdKNcHX6YGLobbzx96jskgAEat1vNUyBQdeTz1wWtPoiLvXZ",
  "key28": "2NjDFqdvJFKbbgZuY6ckiWqBuUFG5tfVkiFVehHRfp2q177MXVUWSGaVT1ziCt3DRHuwpJYWyt4SoMbnA5w7gWzY",
  "key29": "3xjysF1VekG2Zz81owdNuPHJdFpmnRFQAreEEVEgHU4rFsN5gX7SnbcbFoPo14zPWNRNRRYYsUJtpwSBPcVBpwBD",
  "key30": "3PhFs7xqHRGnextX511iDd4K4x5cE7TTgv5mBiZSEom4nHVrtBuNN22W59DGFKgBc5BvZSF83pDZMGVkw9VLFGc5",
  "key31": "2w8hQx2pJf3ke1qbVSuURwNypVyFCRBxP98GC2HmBtGHYvSXDS2y6WF3cZiwVV7vkpoTBBuAwcGbwBdGGtv2nQUe",
  "key32": "5pnMGKgjunpzwvFeegSXm47aJ3ZMoSenQVy93YNF3CcafgsraHsuvAnbXF372hPRszfbBPH3RB5wGTXUMechZit",
  "key33": "3gqfxg7Kjr7CpjXEvDGx9EoUZ8h4XWkRvJAMGyguAk65voLWZ3dF4FhWEMwu8L2BdKoGr8adchALu1UK854Q1C6x",
  "key34": "44kitcq9WSmLErZWdqJrLQpNw5q2ipv2u1g98FDAJ4yX4d6vkGhRHNWLGzZszK3XKY9E5YAmSjs9rdEXPXHAEv61",
  "key35": "4ArFPNhTVT9PtbGBzULmhDRf6m5MqL8yiriHx11sgKtZovNuZg7VkyMKWXkT172DfAMZrjySP5QERm1spqAkcqn5",
  "key36": "2j7Skc73sj9thKtkT83WLeqRbhhgTiZgiJ6MoBmo76aiurKWaN8rhfQthVUh49vKp6r8utQVB96zqoFXoLVpYR8E",
  "key37": "3LKsnKNWpRRHRcnmxTiDzwZjNWGfyhxfGruqk5Z1XsGtkdjp7JG8gnZNXbb4svvsfbPTJcSZeszjgWmULh4TViYY",
  "key38": "3F5gqfMFZEzyWWukFZdjgfhDBe65ppDc1bu7BHk11JKshERAht3oQA6r9dmDPFH14iK8YFNXK1xeEvHcfCEEDPNa",
  "key39": "2YoCmTL179sDsWnbQsKLDHc68gF17MnSzcx34GtmMp2Gw1UXc3ecyNBW6JYGPpZYH97q3BsqGsbxGPZz2AxnqahK",
  "key40": "2UgzuLFnNaEc1itU7XpuhjFH87kyryJAp619SFikYk6BGCgkr1xrah4rr7i9CXYguty4h7hcPEMWfGRMXkkXarEX",
  "key41": "4wXP1v8TkyJN4zbeEKAB4JxfjMrmeosx77UtVM1KGbVKty74J7MsjPzkhNULznxfhVJUUgosXiqG4jhGM5KXnwHg",
  "key42": "3VJCuFRDMSRqSETY1SzPodm1osaeaRyVpa61byzeBAWJDT7ReDDx4vvX6gcMvrTwtHu8onU37ugRHGiSgSp7gyn1",
  "key43": "2cAjfxuwFpL51LDdvYxRcfDp78ehoyRHVRfY8HfjJCnAxsWhFKafsfrBREEsD1RgNhpPkMvsYydy2RVyGREWkPaS"
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
