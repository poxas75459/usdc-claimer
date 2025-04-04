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
    "3vtHCyRAD6eZUGoj33RFmqcfp7GxYR8F65afZqDuGva5hssugF2UzpNKvo4sFja3gYekEWEGqwKbtYLbsynXTXzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CL1mTMMYreBXFGCU72QCD8FjHvZM3we5oreFvhZaUw4smRTqk59dYpha8QRwJUTs5BrBzu2dEegRXtBKnX8KMNu",
  "key1": "3YPKfSGYwDNQ5kgSLVCdpbHS7VVcTrr9Q7UEuAz3F8o3LuTsmEAKhngvzq4X42D6WApHYC7DQud6kfpQG6FkVBUs",
  "key2": "3gxG6ogbvbdZoZapsPe9NgeRSQZ8Lquf9RusiY29YvKrStaYCYvJVE6gP6pNH7BEX1y5kve8n7rDiPnyhhUYXt8h",
  "key3": "4K7w8VrA33n4ogymYhViJUyGd2M8sVC3sWiwkpHurJGxWFAjpKorAQzbJ7Naffj71EP3TZyMQAHY4kwHsSHdnPdo",
  "key4": "5n4WCNEkStpyaFEdCzt8kpyBkSnphjfKcAnnonncyM1FWbxXGj1t18C3ow9eqffEcFy6mZpo4EFFPo3kgb9jJZs5",
  "key5": "3HcryHHeHp2BXrV62H5XAGyfiaRGq5Mi9uQgEVGcjBQLRVV4fCatwo1KNGseeTBta3J21cFVBHG9CNBtkR66QSaF",
  "key6": "3HRBn6J6jm2tez26wzoJxgU8jJppaBFwkW4kBnVU5Z1hk6s78Cafm3FHMB8UvKTi5Pu99ryLXPp5iEbcq3xgnDop",
  "key7": "5uKWVYxEPS5t9DHiTNHhdBjJzF2QvyNngqGL5BpxzkXVViwR1M7sxtn4a3Kbv6BwuGTw8gLpsuUCqmpahWPRp8YX",
  "key8": "2LeJNFw1uM4jJMx2zVRVzve8iuo3WknxhmwKcCAx1YUaLYzN2jxWX7Nv3vgVzQHFbWs1DXaZJSc2m7Zy6kQ1Bjpt",
  "key9": "3bRqRJYmT2TkT6dNhZByNee17C19DixquYBKWk9o3hc78UXWjtiWdvrnSnMPVSdaRoh6E1J4ws1pg3byGoN3wRgU",
  "key10": "54gfxjU1tKL8JzgE1V6VyK9HXDrLJQ8A1pEFKwFdqX5LFeP7r4CcD6ijcXQsPDg9Z3tw47RtHspzzMyC6XTGKkqN",
  "key11": "2uhZUnVb2pxRiGvMcrZf9A5WgNdaHVhRsCL9HksDaHqkK9y3xQeMNyjMCNy2MxSd8vJ8NrPHbVySrmcav7ZPQh59",
  "key12": "M88PNjah31ZJZFNLQvydmUawcotqi9jgaoYtRwod679rio55M4s3WcJxJYDyXhDFsXK6JVyNmKLVssakMByP3Gz",
  "key13": "5GuVho1Pf8okWCx6bpmpmv3f3qWGwnZBJueHr94hWxMGtuZG9fH6UXTWjFh97cCHM398kifc2YoRrcnDr49y18jC",
  "key14": "2K4ZKDm116zytZi1WcdyjmTSWi8sNMtcaZZZrMvtWHmPMAGp7SVAWCyXiexNHmKh1enijcUctqxgAr4Hbu2n1UEF",
  "key15": "yMyQ4CUSJTgVxaZGbDF5xfw7UFHzJXw9CXWK9ev7QgobrSFGGnmb76EfUmLGHZMjz4rohEEzFb5CHMPyGG3cBre",
  "key16": "4KmMV4ANjBWCiGL2X964Emsw7CZMvJwW3W274tYzooootifu1ooKpGN4ZKLCB3kYfVCQNq31wM77HiGnG5uPRv9b",
  "key17": "3RBk1swK8yux4QzhiatSp4eXo7VSPnYqTZx51uz4KV2mdj7sJFut4yA4jPt1b1icGJNCLggpDzvrEXAUHjxGTwTM",
  "key18": "mzXBMWiFZrjJvBWCgDGQqiRqDUbPmXYuFqr5TLQuxPt5fSGCtjCB5M1bSEqqbib1xjDVcRHL9gph25MGPZutNLJ",
  "key19": "KFCY8rWyMpjyCPTKH4wkqZjNArKg64k7WVuok4RKcu5bGJb86cyDcxYeKAfsVvQEtPCsBLV6mQVGd7YTbKKXijS",
  "key20": "33Y9dL9iupnYYvxfgX5cuQQz2e1DkpA1uAQxgxevjtHY8th45wEnKGDrSWZ9SforPudHv9xqdrbs72MpTazf1Loa",
  "key21": "59E64XQ6nP21Jfbyt75CwoUYqGLDhpfGK1rmaqDVBsokcAVunT3GV69TMsiKEgUyBTDZGRvZLqjSawEGHX7VxmYn",
  "key22": "3vygZuTF45EtupryZ2MiwPm9fUb8DAtWaNK5qfyQkc6s2oPSK62uA6D9EBPbyjZvkE2waUQxbC4QpRSQXW4x8CE9",
  "key23": "4SAzz5qA9jrGitPVLBF1hpr2M6zHVK1vCa6Cc31BqBmMKfD22HXcoteh9sAJHsYUgQY4KQwLwAQN8HajC8ymWnQw",
  "key24": "62QDcxRAYmaVKDo5gPP74uhC124QgANCPkh8VrUcemxtRrqZVH29RFf1daBDhZGvXpdoxqD7xPDPcaZhiuFREQUd",
  "key25": "CyP6WLzvAVx3oN2tBR3eYqF9AM8ygoVN62B3hWUmmv84RLTS9paz3Qo6ub1mp6tqbbbXjzbVT5txQHvVgqki96F",
  "key26": "19gTo9azZv7XfPVT4apohyN9axNvdvVCmCxinFyHZDHWLjXWcR2LAHAKFvjqBgKV2E2mGju3TZKvBZfCCQHDjQi",
  "key27": "3Xs1o3gggo3ervbkDhBUUTVaE7tU7UsTQR7cVKe7XQpjGRRxiQ8ah956xi5Lquhsz8vCNTfusSfkrqsm64W8L2mc",
  "key28": "3tAUnhmwoJHQ3Y86PJXFXJJQxFg5hURWw2o16qVcV3USt6rn4jqRZqEcZXHs82wzSyMdmK6sMUoR6JxN7CcgxoFp",
  "key29": "3HWXiueYL5s4zWAA5ALQWaUE8vmUuh8Ad168wcsQHVRKDGPaMbXuaQRRfNNJSDTZ7gz8X4aGpbzC8Lpy7Un1R3Ym",
  "key30": "2UynfYF4Dr9WsKadWeuWDfBsbMe2q4PKtPPFXamgibLSQGqFjsrf4NHRhLsq66UDmXp32pJpuCANiYqbNEJu96p6",
  "key31": "3E6U2SbWimEWFBicNLKE7oJo6QENwagRBGbToxnNRYcj89bXTJkeewW86UiHHPcmcGBNepcr4idG3Ru2zWvA5U2a",
  "key32": "4bD6EdK3tY51cSG78aeRVPQi3gb1wxwFi8vdnm9Y9NX52TB7NfmrrrBXtcQxMZcjWuwTtSn2b8Fyi75qJYMMaJ5b",
  "key33": "A4ZNjArEWRpuANqSJGs6FKrXsoepr5Dwksz3fbjAwDjQgddgXQvYM58gwMA25pvWoQNtyCAWvNR3NrmEFf3Mc3Q",
  "key34": "RhwXoe63PwbKn3DUXNQD9fekC7yQCQkaXBFqT22BFDK9LwTU6scc6KCdrosDSQxo73MRdadgSJTR4eo3Zug8btE",
  "key35": "3HdzkxktRhL3v3sXthdJ4jN7MK56SakuD7tBbJ2rBAqnBXJGH7xNrL8iqMogHhtJHz4GohB7VhiVpD5dcF58aPx",
  "key36": "4j64SbLAYUtwwupWjLKKe66GWcgNtE3wQRzFbsSacBVm9GmjTrTQeFdJAGdoHsifTczDW6LP7YMPiAGWdJUgsqne"
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
