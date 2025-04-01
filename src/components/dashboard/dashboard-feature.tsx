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
    "2FQfuBRfQSRhKhGaLUPPBgFG8a64o2pKqHzKfNDhNH3GZ9yGwa9qm3Ep8S9PVMQUMhKacvzg3UgzgERPc8gauZis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfpFWSi5a2ih9yDof6inrHAkNNBxAhLEXzv6D5pJFJhEixcfSxwA7Q7T6wGv98ACFseCh2m9fJJtZcFCKnEcPVb",
  "key1": "3rqiyS7YCw8LPwRuV7QfadJrmwqv5Q688tvojb8eczbCqeHfwNWwikGayEa8R3Xz9RqCxdv9dKkqGhZpKMNfDtDg",
  "key2": "2VgDVBWbqEiD1DpwuGin9dEkCedxzks2t6PnRFSAwWuUM6YjTtZUDFmPZhTWPQgNh4TsvBbS5jLJuBuJ64U9QzDo",
  "key3": "5UUJsBSJnC3uUcjvNDFHsJpUwnvj7fSsN5RvDgWspFD8q6v4N3FZstKuLpvm8QKzjmEQFEfTxNQXybhmXeaq5fBF",
  "key4": "592BHD2TquwTcauVn36pGg5NKApBkFdCxNN4aU69bbGHpGMeFBu5HSU8B7VwSdZfjiDNyXk6zAGGEHENxrKdbkwJ",
  "key5": "31e36AKEV9VnPSR7Zt5HoURyTRvFozMFBCssHp6f9HvV4efLr2bjB23DEwdfT49cdHRKcTnFVwmwngSgyFm2Ftpb",
  "key6": "3NUjGaCXmBzg6ZgcT5v8G386sGbML7wWikMB3yx2BXVMuZmmncVvNHh8a6BnsCos7sTaD5UcMZbVDSViCqdXqN9s",
  "key7": "2xRWVHjQJsosMMsB6eA8r2dALK2FXqaPpPbzE5iZVqt25dpdWhHstQeWHXzkSkMuZ2eFMMXJSgpts8hx24LZRZE6",
  "key8": "5yQYHU6PFgrXM87XFvjDzbGWwbfEgtph2t9hBbN4GSqVGKydYzp2GfFuKhsDk7GC9KFZVna4vshsVJsPwZxruKN8",
  "key9": "5yYamy8xd31gp31heUepmkm2zyWpUa9tqJC54PKTWqRzFKoMFX93kuQSDHGDqDnCPLfMMnzojDPHqkMuvVwUkiJ1",
  "key10": "5u7HQMzVc2uaiA4e4sCrXxxYY59q6VdAHyVrhMXh5WLznTm3bEJLPp8tBvBYjGCyBYgSghkWzBJEdwVxEphNJ2Nj",
  "key11": "5bE3iUfdAVCZAiyAoVBWrEZREv2UG6jAtLDjHb7xcNuUebAQ2hvCkaSjgE73pnPnHsz3XebAuajZvkZbS653XBhJ",
  "key12": "5BMcpWhQzZ5DpNTr12c2J6jSRSe4QmgkyaDamLN1YdAoywRfQ44Vcn5LBA5NQkxTCvhFc7xVGpYSL13hHMfXNKdZ",
  "key13": "4NmB8iJ8zcongM83fBnhFiCJr4prtmtWHSgPVXDfkzBBxpBpvSCbYKctCopJMQ96oGfUVCfj42sBowPtK3FYy3Lb",
  "key14": "5fUH8pizwhHEvodXU8x779Z13c2D25mz8cMRcCDcAyxpng5t4PYZMcszmLRDyFRUGpntMVEViDZkLiQadpZwfV6S",
  "key15": "61sPZCcRRaMycqK2m3N1DznJ1Kguj7drjQazEzFCr4p5Dq3fjZmgU6hAnQ5PRMpnqaR1zdgR8UqkMyTjMjtoxzzz",
  "key16": "52Mtjvhka5jPk7t1RvGjatRfcQCxepyai5UuHSNiHewQHe1p1YxtfS1c4Lfhuj6X4fNVWwhinfhGv2hGFeNYfQeJ",
  "key17": "3uU6PmBAV34fETCuVh5sZ8v7YuFJNBuNEReGLYTqb6qZ3KDt5RQUhd4cvxuD9zB17QZhpbPBACgWQJP2fBmdnDn",
  "key18": "3NG2sqs9E8PKLKzSXRwGY528VNjiTARoWcyXjHquaj7zni8CnDg6mMX5ANRQjRcYwzZ84igM98d1ZngToDCKPo6u",
  "key19": "2EzYX38j93XuPuvoma974HUB5v2qECMk6eXrsFCbfdm2d1kwh5dZoNprWYUkKE1WzAB1eRiL5SH7fSUQLZs94sbN",
  "key20": "243R8G47QBR97JNfgSM7owWwmkL5stTay6EhytDNVqtAuqXyjyyWX6nc9eGaiF9W6gvt2B93dXGh997HWuTXGskv",
  "key21": "49UV9G4LZKP95H6VRmg8Ct5k8HAYeWCJREnjoxcn5WWqsys2QYZQXatxp58E6ZDMt8qvy1x19LC1ytxwHoeQrhiP",
  "key22": "Z6whMr4dftK9ruJYj9FKHm2jK1YtzpWCdV8jQbMygkGyJdooCFbG6ViT12UCu9Yfa1WRMbKfPLiEbzMjfbR1b1M",
  "key23": "A1pvADL232LNMEgtYqQXYLbWmSRGCnb4Br7cd8Qc8n8UphDJyeKRLgWehBGmAdTyDvdAZGWFJqgrDCbgV1b2QHN",
  "key24": "2KqsEcwbcq4V3sLzMyy2AYGWcsg9UpepYEssjiUf2CSzap31nBX8MbEz1egLL1DGtSbJM34iZDzrjV1ZtxsoNxwR",
  "key25": "4XyAh6ZZAoMxnWnL51VWf6nHkDon5RKeptGQLcocsQiLVDP9L3qh3wdLXsddWPaD5nSJRSpXGwvtWdz84UWM4m3R",
  "key26": "Tu4DYqmjVmPpJNE3ia8wfHdmLQKzUW8cmwey6Skf4wmxLgpYft1xraCXRuM5fFobKrXcsd9L6z6qEQW5cXzhAEy",
  "key27": "5Xm5eNjgVxpn2HLoS4G8Tksayntv3CXaHsx9wKRtLinTCytu1UMVKqWzSRqyKvpS4QNMRNQUowgodQ6jxhfhSGrc",
  "key28": "eMso4m9dLQDJWTVrmyEHd2ZZJMKLgkgLCxekizw7LWbiPFK7zFvyXmvt1PfxE2xHeN7N4SdoPj15QPWpoFmV99f",
  "key29": "36NZScThShEsBspYxCBvdoG9HuJsTWoUFodAnTrdo38ALTwPu1db3Bq881VpBW2mpBEtcc1SsGyNBvbw7KVFU2nA",
  "key30": "4xgxYVGXUpraiouXBMrETpjUxZcRXAara7MJie9hSYo9D5JRUbUatQPzVnT4Ndbm7qReiAw1XKiPzTqXocEbyaKs",
  "key31": "4VSxzBZJppd9y3M179Th72iwCAfgiJ6RvCEcCEGhA2kGH3K5RXFkdvVcdfsBFsCPTSPxnoJh27nyuUcHVgagNTRi",
  "key32": "5C9GXotDo7i7igzBSeBNiYAHwXBAhtm82C3yRKHRMjSkphhnMm1HB9UodkyhqV71QGec2ZdqPARzu8hHt4hXBacF",
  "key33": "5jhG4dmJG3h2sqghHccdoKPyxeYz2S9rbhfZmj36iUwgsPxfeS3cF6ycfWCVm6ubVME1rvrg5TFsfjKfnmDRPwhX",
  "key34": "5QkvBdVGeQEHb2Q6UNiNu3f2Bc4CasndcETx63eXrXSaioxv4rXFoN5AWriCJtMXXjmYvuBVtZynsnnTMTu1Cxh4",
  "key35": "41GN1WFNwbfjxH3rdoLiXbHy4H9NpMPE9JxabUtoFcAYvR6qS4cfr6yequfXunpGqX1ba5hvxb8hcUYDokYwhTPG",
  "key36": "4LWFxfmibkTySYAdyBdKuKLWRwd2tExJShmYqjJgvrT2HJNQ9QHgt3sJhwodmtndi3Axi6iGrTk1ssP5Sk6qjMCG",
  "key37": "2RZjcA8T5Psr33FivVUm1G6F5Bw893Lt1oNBXApVE3rxMEyLEUQk9ygkUnRdS7ANv7AAyQ798PcZ1VAcB4VcSABM",
  "key38": "5Z9qfaVhYNRnNHM5D7PvtXEA8xBrtDQwUw4t64RsU9znBYEqa4eJu1QdMAw7uWDx6Z6tC1fC4K1rgNAJyCRxMZ3w",
  "key39": "23yddXf75bddbssACQrZJNYLFBqfShLyycUCETj9cBD5zFCj5RXp67iAtDn794WiBL7GyogNwDUCVzEncvFwo92i",
  "key40": "3t5CCLTrgZznoH6iW3vNdjk1wkkk37A56za1ctwjw8p8dUWKzAd8oSCEEeTovdLEkDfm9UPZgNrDXRUGSYZqCWKA",
  "key41": "LuYa1cZ4P3NgCQojtHXMQHfp667ZAzQ3iLJcW1H4KGtQZMhxC8GDcYrK7yUWnCpCTEVCpuabtKKLxCGv7UVr3pe",
  "key42": "4y3urgYc5v7qYjnj5mSLEXBau9bvDxrVqqMEvRWaeSGzr5fc3twgcT4qrnmqYnrXauTV6MN6HNT4NcryjJpUAr7h",
  "key43": "4P4sJiRi6WPeBQ2od3t5t6VCW4A5v5fKbrkwdi2A7N6vDpeYGgwXEyLSeAxUEmD3S6Sfo2JDNzZVAfAbGcsEAuC4",
  "key44": "2g7ULdjFVocoMVZLxD6nbA9tgheFFUEtsrj5yemyxUjuDMyw68jFQu3fuYg7c7zkMCYE1VKBggxUSezLVS4NhWPt",
  "key45": "2UW89AKW1PPGtus5X7U6iMFfyjQTd4TwR8eJATtLyeuk3gygkkFNhkbD9UyWkcjPJGFJ9DgfdmFaF6ChvNgzfQ9s",
  "key46": "4wAPmKTdrBuSDTHxfZwaj2NuCnFCpXN151aQtgBsLzLHto971us9DrfuStFcWKbr8RL65FYyBxhj6LtvekPwY6zW",
  "key47": "NYLmj3v28sPf7iQjaBg8wTeA9TpmRPmAncSZQGYC6cfBra3xTCkHgovnNp14uyHNez9ySzD5b3RHW4Uf3sFTxtg",
  "key48": "2E3xKyvVmw35GzzN2mjXABVXDzPVQ3NVK6s6ny325nXGAbpXAFNpNFwk8SpEo4NWBwEuc2MAMndwftgmdjJG54dD",
  "key49": "41EPsMXRs2ajXKUSoS5iQTnvtvjC7yXYWHB5bmA3PYvCBjyRkFFFiQtDCYN2mazxswD3RL5TzmsNHesxw95KLkhk"
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
