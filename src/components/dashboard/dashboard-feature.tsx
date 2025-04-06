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
    "64S5jc59FThZvRB63Hr9M2yGMgZpnfPa14XBwFio82VT32BuvtfdTQ21RBiRSbks2dB1p52o2uctWDRgKinGwrnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v61N4Si16RkbeUTu7wgQG5vDcyHw2dgZ4Sitesfek61cB7cK7KP69iFCkSKWXWQQyExqJ7E3YrrWFDVP9BpTbB2",
  "key1": "2Th3Uh49WT6byYYKGsUEAG9ciq1yCjRQfdLr9xRiRuTRiEPAFxsBYM1v1X4tkij9uxD6qy1Rn2kdr9CjQgSmMJiJ",
  "key2": "458RFafsPa5NGxouvja9evGzxxrsSjgNvLyGY2MuANu78SZYkmUK4VGCiscYY1XVXU1723SXSQAvKcw26XhdXsAS",
  "key3": "5LpYae3kaHhELMrZrdxSWMMdAP2k2bpVBy2Sm9VDrymqUh8YKK1Phi6K62uBmwerikTTuFYMWSxFKbCVMFHwbMbX",
  "key4": "3maaPvFwYtUq8tGjiSp1AQUjjVJyyXdrL37mBCE8x76YSUswMGvo9Av56rR5uUTfcZVS5m8Ek88JCp3ufFwaNPZU",
  "key5": "4Xxa4anssLdJnwRxZwzPqH3uQt1P4TzEdiBHqXrXwqAvr12dbF9mZdocCyeubU8x9Kx6TJvi5Vd4HSZ57iR5c5Jq",
  "key6": "51TWAG8X1vdfJN8UFCaAbp4RXHrL6ELUaA91xzfn6qWRz9rSry8Ech6hUAJSp92DJKfbJBrPHinaeaGoG9qaiHfZ",
  "key7": "3RtG1EkuGCQZM57HGMZawsAec6aa3psAH4h5wQaLcDoGxDnUUaGLR3hwsjeYSQwcfc6HkyaFZf5YuyMXwYRg6xsr",
  "key8": "GHmMdMpm25Dhz33BkQnX985bMmkNRrgYtkRTyatp1MsVJ3UPYXmv8oAW4HPsi5DTEx8LrTsrqjBrv3f1C7TktMu",
  "key9": "3HmarPhWPpCu82LbNkMLMGM2cTapFU3yd1BGpmRUqsyudYHQfJZHuqtL3sntLWhnd32doeHWPpYcbo7kKRqHUCZz",
  "key10": "4dZ9QHimrz79Np2hbWj37iN4xem9HfNeBknEc1faQvvBw7Krp2SpqxvdxubwjSkSurQJiQqtKyXXoc4qEb9X8DBg",
  "key11": "3bfhQrFacnfZZwgpQSQ3M88aEaUQS2XQqhFVbFGXHrPZcWypvt9eyDNppJ5Gj5dXsBWDGnuUYfsVU65oDKRVXd61",
  "key12": "4Q9ospdt187NRErRZqF7Pkd8z4riyF8dZmTJHkUDAmB9EBM7Ammt1e2sUanachZByHVh9TabDXCyd88MDLw59GYd",
  "key13": "5zHoV3cWFxo41bJQzKzH1BJFr42bqU19UwpAZARVQB7Vmr8Ya9qvwiyTGE9v7B8tDGQwskZkeLT7ZBAkMLXp3XKH",
  "key14": "3h4pfHAu61tVFMrtca3z8mCY2rMxCmEwqmckpGb7yeRQs4PSCoLegMbCBvd1c1pyQSqSgVAPerxLHMD7ZVAxnh1G",
  "key15": "575EXg76pWeMf9cqHPAqZQFCW2RvW4WuBc2xbBQSfrJCwsgLrXwLpJ4NPX7eLLERS3Mc1w8DLLMv795fdicJMiL3",
  "key16": "3RivYrbmcFCyMGQp9UimG4jP47x5KH5BFRvwA4PnQ7pXkRSPaqbhVdWHCbHShcEVHC1Ku9df1AiG1krraGciDuad",
  "key17": "66YZD4Tf4a39bdutZeRHVHtRXmbRTV9RDTayMPNwB8q8cqxMKvGF1iun8oDXpwkW5JTtCxZxrtYtHnsyxmswpdnq",
  "key18": "4Q3XB19Hf9CtpT55dJcAGbcDWkNVXHxMnbGgdawKjXJQyFZkyZoMiC2eh1tmR88NedUkFHaqYkUGaK9VdwaL1Mx5",
  "key19": "5oE7ewsVDx4rYau7K1wWbcJ5P9jxJCGgVVEd5TGr8d6XeJMdU78opj5TeRfeNqwnftYyyzkET3kUUteVBjMFBuoJ",
  "key20": "5Lmd48ZCt4WjCvQZbzaauiAocZhAemssC8oSUusAB7Z8Vc2rM5uecoXadu8ZSoV5oCFxKK6pTcHyffXdML3TZkWy",
  "key21": "4qn2R68fV84NTvbiomTJxZiCLYCQgvWXubhWe72faaETqo7F85LkdZBU1XL9Xc3HZCx1XgCCkLKLHo28QoKoX4GE",
  "key22": "24q43bFV5sz5qGWkpFUXKVQheRx7UqvYH64rvtVpRxrY5rnUuZv2daBpCB9zLudg1zArtga5wS8NPabrw1c19nTz",
  "key23": "QvEniyWJnfc28yE7CyxV3V6pJVF8jN7w2mjD5EekwDWAcje9UcKJDwFqm8aY8GD8VRPJHDEUSdHAM8vHR4J3C5L",
  "key24": "3zg4D9fqzX5nnredoXJyKBMoa7cMBkgRYJhG9LDALPzeGtkeWrJer4GdZA7tHE1XzLkwGVNwwiHsMdC9GmALeJ8t"
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
