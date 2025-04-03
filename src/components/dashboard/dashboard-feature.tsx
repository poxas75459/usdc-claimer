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
    "4TeFTHREL8NDAhbLZSn13vsRkm9Si3ucNVZWzzPR5xaSVAncv8u9ApDhhShnhnNNimL391tzvSPAA4katkfUiBhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45mWebrWWURgPfgnbPqwc6RE2GzsTPmvsrF6Ej8uKsPuUDJ8KpJkpmfiSHJTL836eEe9mUSr8k2AbmtUtzYwLyB5",
  "key1": "edHawPqJpNKHLAD8a5eVKhSoeQpZdMyU1orBC1Dqds3jTnBocBKYzZjXRL9vEv2AaPQMbHMEZF7ddrjQqS4rGU4",
  "key2": "47Un3bAhtLcawSrbqmFvriDf9q48oPEa15DEVrkpHZa6knmeLvFvLiis46WpCMJ7GmiavfZoU1VUviri7a2aWNtm",
  "key3": "JxdDToVtdk9wQAwx6MsZK5xNwn3jRVrKDAXAkdT54S3kk34Fcu2sjkzJucoWjGzHzCj7murnq8b3Qa63dpdcDoe",
  "key4": "3LR1EF1LescDUaddaXXdGVY21K5fEAuKvFoWzyYAkfSj4VPsAcyFCa1HWfq22J78vUMBDB6G9iNf1ACchU1mhRFw",
  "key5": "2eCXzEYy76ZjyW9j3KdZ5j7GKJ56B15dfuKYUf2uFtPGwhT1Bwd7rin1cv2TPVN6qb6b2p1WHdBBsdUVESg6fZjK",
  "key6": "2GLf4K5di3Wn4Zw12DZXmZpY3WX6NMjGcdL58dA1x3pT2pGfs44hxyzVdnd3yQ59gaJq4vfbE987DqA2dmimmknb",
  "key7": "4PVcWuA28W92y8kAmRZy2p2pFL9SvPomnjSwQ6xLrfMDmgDtxwDQ8AxooEoeb8DMojjsDyNCnSyJLGSpX5nJsYgH",
  "key8": "2oht7L9dcTU5M7MdYhPcpaLjm1Dozn1Nh1MStaifUPoWcqzaZEVp6UQJxf8W3o1xVfScTED2ri6eNeBNr13bWMoT",
  "key9": "5JAFjAJXDTdxsWgVZhicdcbCtFHMA9rDMX6GXyLtKrRbHAMqazGh19msMadsSTrKbfFdjeoDomZf96uosF3XJfhe",
  "key10": "5bVfzj8eW9dqiwWdPNi8pH85cWz3e9ZtmySV4XxrW1tQaAEz4rVEpnTWBfxze8Dn28Le7WVNUKAcuBNFiQCLW75Q",
  "key11": "2u4f19AQcP4HxtuZH76ADNknLRV4ikbnaTbT7VbLa4J4GSDw4R17M4DErpaHjSLgP5LkfcydnQuu12FcpjxezkuR",
  "key12": "5WLCsHNccsmGmt9GEv7CuEC46xxd26CovjFNRUYvnhTEo9vQroriYZEx1SGcBPxACBjN4ayUX7FCwuk3KEwiZyoW",
  "key13": "35rv32hVs1S78HhxXWvAYXkBVSGetLZaBGPTXkETd1Y8zZ8xLpoWfq1cLM7PtD4bAbvP1hxdgYJg515ejUAD3nMg",
  "key14": "3dHJEnrBHPTiyZvCARZLEZL6rrAwVdxWeJ7sVYqrGUi3huJPVsgeqYLzhRkdi5Pp5SauheY8W8b65CSvL7Nan8Zs",
  "key15": "5MoBD6Bvro7JTWEdWidA2fLcXh6Ruf2wNUe4RosprzfhWgctRbNQYUonauwGMpFme4rAKNF3JTsf2gG8ZnBorRmK",
  "key16": "3Jk1VKytWVs6SjiiVbUTEJzF5jDGSQSX7ueTeCqxmiTbx6qP6zwGnDR6boWg5VEDxUQFdyuBkxHGUzmKARuEKjXS",
  "key17": "5z3E5UmgR6gu18E9keXGsEkTzHWB8Z4EtCdXapbWH2YEMLFNZnsmEDNPJkWHVgNWyvu9nJTjqyNCFZcHdhN1jYgT",
  "key18": "2HfiXwhRM5HBcKD8cxrJisiojHZfMFsVaYwxPp4wfUubzvK83NB5Sqcae272k8cZdVuggWfnxUa3EQB3REqvtQty",
  "key19": "W7wLbMywoXdiqxAs78PDPazUJaC5FKTjX6z2eYTPNtiZonYyuj4auFMhyC67Wvgtmr5dY42aLrdoGUA62R8Uefn",
  "key20": "52MoKm4viUPssokViSAsYF2csZtRcifNVz3aaKya8P1xuPGnCt5g8UqEzaBHaYeeFo7nkP3BVjwsmdyjf1VDTXsS",
  "key21": "3kHgC5p3VTjW7hmuLPgc5B1ZauXNgz7HTkhvFtmfH3oaobHe3sgSaZr3U8SrgCevuD7Xqp1L3i7AZNevRPsjfE3J",
  "key22": "MhRgQ4fpZKxCgYe5NsSBzvgq9U3VuJ9pEx9WuuqKYN38BEXYCBruV6zWbtsnoRqvbM4WKYQCLqJfQEaSaZFgSNQ",
  "key23": "vpJiKzGwbWdZrd12WDhpRxYm5PmoqsZk7MrZzoWbvN19JUoHgMQAkevoCLGdhxkkey9EYBhP6n9AZUG8H8s1LyP",
  "key24": "x1mKtfW2SQXKv8vmdtJMFqxTHe7xhHkEgvrSu81GA3US5MMPYxrdNRQT2K7kEGqnrWmVjAy1Qa6xiXPxqhqVEwU",
  "key25": "2Ye5PVkZnm7SJEQ89kqBpkchxq6TQbhG1neRUfQgDgssquVZ5i57zrjjA9inRHqSRhB5n7bCVSFxgjLdqSy6Bw4r",
  "key26": "u53FUfxpJPRfYNorVHqKCS81eeyDSQTSzrfpmAiTPbLZugCbP8A3FmxZS2MAP2k3fW7hDKf96MCkcC5n1PeJM6G",
  "key27": "2w2diFemLV5g43pjoTNc18NjCT3ZDAwC7ufz8SxFbHPLzMa3MkRBKTijD9qyfeByCv3N24MJU7rARfXBbV9e7gpH",
  "key28": "3YXWzbwDDG14tsdKWe9ni2FvwVFfZ7noHx5C3hiFYQoWJpWuJZfizDLfmDd2dnWDC7gnGmW4d897FmZqgYsoReTh",
  "key29": "5hi3TGKWT184kj14spKoGkrHzZHJ9jQKqgwYPrbVDqdrA9NKicKRKEHt7uupneFZWVzenXVqYkMsaeYV96sSY3Ea",
  "key30": "3PBUhQYPYdymVu64ygCfD7EPnFxmVmeFtaB4dey69WJE2Wae15ZbsDcs9deXAnHNf6b1v8Rb8sSs4Q81Edj4gUXH"
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
