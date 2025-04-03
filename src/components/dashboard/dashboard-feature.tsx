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
    "4vRxndRcTypEG74g144XxRAEodmXpWP14N3sgG5T8abYcCZCWijrWtDP3yikRyk5wkpn81WHW6omnPh5ppwQfK3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32h5wsfkv32pPj6iZUGRLLXhUiFyJSRzLJmcwct3F1Np5p6nXbH1WC24N1Lo2MUkXcNnUoLvcxw6aEgLr2vejTmT",
  "key1": "6migTn6ZQEKDugKtUvz83t8o9HBNMmwkoWkA1hPpoGtB7tSZQ8mmf2bSGCSYuf4Jt83ntkG8d3VDFtRDYGL9gvp",
  "key2": "Gaqmr73MzPwybRJDDBjuV94xBtgnmL2oEzefHYQHtbTLsRHh936zqqnNVfjXUs4MC9GU8LbPgR45BTSqEGe4hrZ",
  "key3": "3XS1aco9wmnKy5oG8aHdBuPm2eXGiBgbe8EJY9MX12rohcKa2F59RmVcqEN7gJySUNf2gVKhnPXfqjmCMLXKnGDb",
  "key4": "QtqYGuSstSnABG8M1fZCjEQ8G1uBxpEiJidjpP949iNhYnS6cYv3LgrmYXHqai2uq9rf3MnaQbu456xm6fup4s3",
  "key5": "5Th7CPmuj4vjRc57N5c8gp45aueYb2a6PytTpt3TJhzdxK8Vht5XDBvynTSiu8Ewpi4n4MSZj1bYjKVaxXUGF9JW",
  "key6": "26vgGMVSJdeztjY2Pi9tobUx4tKbUAro8gydHgCSFnjtvnprRFjesmUwxkgrv285duHoLPweohGHf141nUr7sNBP",
  "key7": "5JNU9rpv6GrpzUBYEhzBAbvBpvN3FCd1NF6LdrJSAfExGgnDV91vRW7SAvyLoM5wjkb82dBrzFbphdtj2g6j3HXY",
  "key8": "4kC2L4NuJ19G7i5tw72GwdorriWY9ebMBJezDtSGsNAnQF6oHakuqcmKoZnf9GaVe4uSQxosYaqmArCjLSWSyLr6",
  "key9": "54UzZScoEQfQBBRa2qxbHUyLfcXNdzR2Yo9hJVHHuL4iEzs8KVh6Wsd1r93mr8HMCwFv2dpQjBrZKT1Vx2t4Fr6f",
  "key10": "45dzfn7QAa2x6pmkDPR2T4jmJu1k5Y2i5e1VnziZfgNFY8EyiHEuPLgxijcFvPoemcFPB6C8AvyzDimLDRTrcvLo",
  "key11": "2FiU5MwxxxkzRK3JJEvT38eh3dH9UPAGGw9eKQ9GrXZkMzSLRFGxCPRSGKbVDPc1VRaUDWSbxE61cqfQYj2pPj74",
  "key12": "34qvdEq721qpwEG9924oRGA2ao5DFBhRb9Md3ekrv76JbJNuEr4Pe2wi5sVigJfPMgELdYvL6Lg261kR5aaaeFuN",
  "key13": "4jD4VudaNyoVrP1nrsFC66njwTuybFyBoJszoZqgyTVMRyP3sqMpMF7kWu2GsXn5RmhvfSEAZ4Xv4KsfvLGLxUH3",
  "key14": "FAvVpVHcoiQ1dCq8eLP2iFRbZjtmzQoXax5oDB6ihXfsyFH5m9vxjwmaG8yGzdwjbjLG2pSsFkzfAhhTEdKM1GU",
  "key15": "3psN3uR8Y6LE6mt1DfNkTJjMcAH67v13otxBWAgYhNDDYut7JasQpyZT8GyhSL1zpNGfhHpFQUtvjLkgYMh8kGZL",
  "key16": "3MuzNJWZ6A7kcHGNSqquid3uvYzL8tbBvoPNXi91Q3C5aTp38TxXva5gzwr2U5Q2ojjhoGNGzdetogN78xDjphTt",
  "key17": "2sYDCrsohKcC4HUWT7DeUW7Qeqjnx616xAFuF78roSUQ5RNpdq855gsW76C3nZ3CvB1hrjMPdZ5JeLzbTqysRtC",
  "key18": "485Ks3qNGqagXNgcWsJCC789XYi2xBDAd6Y9nvQHfkGTuDYjRBh3m4GA7KgDFSAyCbWypnA9hpU6Sj9Ydx4S7ttr",
  "key19": "3motaeCSh2guvgHQx1G9cgKmeeV1UxuwbifRk7PtPAekXojCCPYnQNNEuLJN17GfpC8QNKPaLyyAFmwGZSRtcUk7",
  "key20": "3SiL7nNoUY3dea9ba5xGJS3WPHwnTSDPbk6S7zTWGEvLGMykzJLV6nHa8jY5krgRQRUB8xmqHcQ4NY4ZmCeQLWwr",
  "key21": "QDfN7ozp4emh75yFq2Y7ccwMJyh3hAoMEKzstiyZntscnG5dNNUmwGV2X85AsqtYTD9XuKMSkP2mTDCSHp1GEgg",
  "key22": "4TFmNaNcjocsyQPKHhkP8QFSmNzVTYnx9kU4ejf9gDzpbMkx19VM8gvdGMniiPZXYnurz6SAfnmY9GtgpGTbkkwd",
  "key23": "a8GhtBQRmtesKyaJSfScqtgA1Pmqzj63booqQ5VX8okJPSGRczSXY4LAwhrAzKyubkTmUPbm9Sxgh1H9DJyTQNm",
  "key24": "25GzuVpADQ1kgZBf1ii8cfrfXmMEfGJ2cfb849fscr66EioxunzZs2Fc4tUpLiEXoGM7w7EabstKGH97tHhsAUmr",
  "key25": "21VW7knop6qATt38aLgxeNMGVSERp5gqc8HGA5dgzryxMsFC9nih4QkcbwwNQuQppKqvuDw3Me4dCR6AUuqQp6Av",
  "key26": "Kq8Uqw6mRGPoB5bVRDk8n9wUAAnvjm1vvFBqMZ2JFafmsm24XF9rVgyB3UbLGiMXFDnFGqz9t5EeSX3f6kWxqRQ",
  "key27": "4Lyh6ze8qQkZXWN5FRXAoMTKe4qpTKou4Z3RGMAM26W99ViBux4Py9j5anmU2Sw94eeYzNZ13zjAU2HB3ffqG2VR",
  "key28": "5tF8Wp7rC5kE2DuamQqddgdsz1tJbfYBDRH2DL3y9N3G8UKHaTGu73tyhnzfKSqhdrHmcPJN5VftgzZgqEVZUZkF",
  "key29": "4Vwj1qBBZm3kB29rMXFndGZ1BZSeeTxiKPXu3bzfmoHAKYi63gWjQHUPHm3gGsmGBGesZrRW7hQSW2VJdkV2m72Q",
  "key30": "JTz5Ey8Xc7U49EhLTawHnCWbgRQ3zMqgtWcPmUf49AVbkuspmZUicn6SkSqoHPsxoWDEziwhh2arpCuGfzNfsqa",
  "key31": "4aNTB3sF9HEcyhCCN1kLQiDQ5EsPiAL6XMiHVVgKGMP7tZRvxuwqHGb2NqXQmR5EACDyvecvh5G5XtDL57AVyiGA",
  "key32": "3YiXh62c2F6QmtMVhCWvjekmBPujnfBxs3fMxejnHC4HExorFuQiXpcXBCGUoafNXmKL4uULeZyyk3tkBPerNnxh",
  "key33": "2BbJT2MTZLoSNj3SBCWyg2oeAyTREvygsD4Uum7rqKNL9k5xKnjoghhXJeEvTomitxpGMUhZQebzT7EU9hMwgWtY",
  "key34": "qQdE4BV5RYLrVNiawEM9NnHWjY79TwrMypLMDqAbnJTwa7oPPpLawgxutj88bd141c4VKRL1F84pCBZ2sWfWwML",
  "key35": "47AkySKEhPFCccVpLVRZcsD8ZccGhKDQUACt69ne2hsp2qmYt7U7Wtw2wVRtRH1rfWb988yJhvveacCPKJLdM2WZ",
  "key36": "4EKsvX4BEC4pk9nWKXzGnTG75wjxakxwH718SYn5iQEMZZoXuuP6fW1VYguVadLDkFWjr1kkhB5MqrNgBmLS8fmQ"
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
