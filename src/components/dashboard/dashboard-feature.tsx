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
    "5jeAe2gVsxmpunUuYuuSLWM56z6L4C9Tr6udmdRsRUkHbJLbnhTiyL4Ki9n5CUgAUBHrb8xdRv1NKGkvcQVEZzUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2L3t48K5rzBQhEBRZ5CnhXhrzHbRXYxDDYtQcK5jVxEsQHYHe48JpCsHDBpYKqUnfCZtuFBYcQP4Di1VdxaxCG",
  "key1": "s31Yda1zKG5CrT5h5XJJsHe4g12mQ31ckhYaxd8EmzjrRuPXgaDVngBUb71n4LRn7h28NpnBp1rPp54hAw2bazy",
  "key2": "3XFxrtuQkrVr1uhoA7vAbQeUXPsNVugmfb1iBNXED21kKtE6EdnS9XWUC9vgUkzERzDmDFWNdbmA1tWmNiT73aU9",
  "key3": "3vH6FP7rytWwcbvqX9M9Xa5FkYW5QZkyV2rPKtxKmoVtPd7L9Bnxu2RyxgRaciFGdyE8WmM7ppqk2JbPTMNnDepW",
  "key4": "fgNJhjovB2k3dzKQnq5B5e3XvJWcw4bGRCPfYJ6QUNUJ4TvhoD1iMiRdUMQshfGBVdANT8yeiJuSyePMt9KuKKd",
  "key5": "tvG7PiAReLXjzVWHw4sZwsg48RVZdTRMMHRdVE6okLLnuRQoK6uGRMnUpYKZxBgXJjKRuFA5L8W5LE8QH6pTESK",
  "key6": "2vQibWo5S1LUGgGc6PAtdjimvSuoiF62mQ3zKHiMTLcq5XkL47W3SYJQj7A7QfyxUaxFwHdPP8AQcS9sGpBGrJoL",
  "key7": "4mHVWafe92SHkXaP8NEvRJmjXoEdVaYp6Wn5FjVTgKyWayc2EpX3V3pZ7VLv2yUUmgxcmN3RGdjS9uCVnxNRbV6k",
  "key8": "31CMsJPSsJkT5fu8xJ8xJyFKmyAfBKc5AH1Z7mH2Zner3VUtCkzMgk84ZSPBHixtZ4huPLWBSNMXZN4Q2tJf6N85",
  "key9": "2ohS9Q7mS2UWKaCq9c7U9YojT4Tu9fSRUHNz6srpMFNXd1rncMFMZNmP2khCtP9r8iXaUMJ7ruYBFTQqF7ZvPoRh",
  "key10": "3cdPBZsYBV9jf3W4pAnEwJJ6BsgAKvFdwQg7nanoDdySRaZYUDu3ozbEcStm5MLFA9s9xCcJDuYnP17XMCyCdsbM",
  "key11": "4YWnMzFDRkVQsiNsYp9WqMgoEyWhRHp19y57ETWiwy8WmG5UbbbhBQJ8wFqTGJVACux7QtvUWNGpBsZQEt3G6mF2",
  "key12": "521GsqYpjzMhEwjpd67j7N7hDmUdhkyFn4yLbow6mA43M5383HUhgci9MHXVpoYNFbu1PdsED5jmLEq2718mL6gA",
  "key13": "Bh27SF6sq83Je9NVB5v7K7zPFqVzfccwAtbM9LNZET5UfVgg3ojLQF3fMVtVtM6GnC7NP1S1zFJp4qpRBqK1PbW",
  "key14": "2BHam2m3PRCJKhUXHH1gZHHBLyaf4hmKybXH33oFCoQNWt9DKHf4HR3iqDGAqcFYurR9nJckSmZbpVpGSNq4aHVN",
  "key15": "2uGaK3WDnuvMyWWoFBpYPkUXgZipMMAu4KxwF2dbQpZPybf6oRkFrz1DU4qkfRwYnCKGPHU15s1kkbJKtsffi5Re",
  "key16": "2gN8DCEkzGHH7ekAVD3pBbUBq2PM434q9J4xENHret9FonvSPbpfi9SHgVENLrL2yjzoTyNXsJfh7WJCA1wFGBZb",
  "key17": "2SskxBP3eqJ2XAkh3wnFze628PGmRK19ixPpdCReMcnyWoSJ4q1ZetS4uo3BvQ9Qt5AsbkEz7KYixARoQyFChbkq",
  "key18": "WM7CMYj2PQWhHQhGckt1wi2n3R7pN8TYusirBQrbXaj8hY1WM5yf5Qw8wy421tZoiD2Du74GjPADj9uApVz6jWy",
  "key19": "57H4qyoF5QPB4nveLxkwXejxXSuvQxknR8PPvoUK8j2HdU7mmWhtZAjJzbUfnuZRgEA8GQDd9U4uked7YrMWeyDx",
  "key20": "5ypZByo6RbUfqW35RARYWb8oJoLPeZuHc2bYYkKYKb12L12pXj5auYnWBhy8C2mP969nStFYCTTqE5pmp5R8gN6f",
  "key21": "2oAVKPoFaEstjLeGHnSrCJSNXmfyLmwxeh7hCTtW9JJPiG5WKbUCYC874v3weFhNF23LuNc895fSu8bEtbnggZrc",
  "key22": "Merdwsreapm5Hme1X7tqo2evG2FWcWYVzok9nsciSk8KuWe9k142cc3g32WfFMTbYF1BmuV4oxZ2wAsCrR9hfSj",
  "key23": "2eR5UhZC9S5iggpNycRG7z1brA7pZT13jUaHGinRmaLBm1dDCB3CHEB79J74ydQcTwiWuf8g4wTg7vZNfRMx164T",
  "key24": "2KAHUsGHz37rwTb1qaKMSzi4oK7ASPEqvzaFMZS9byPHZRB5K9YXUNHY6TfaBe9Rq5iUgp34fwFe88CgEHqSZ33F",
  "key25": "5ZSgNYLgTw48cHLakP4hBXXsEvtnP7KDLHPLTA1qTZg1MbUSdM3qL9xv2cZjc6NNUnvxneQsydhJH62hp1Lisqi2",
  "key26": "45mqecvpsXBEQmpuCHajNASPHNKYAdZtZ5eqykSd6x2zxfEaYM4SsCG6jZpsrmcAQEqyGPou2F7NJsdHZwRbyGxv",
  "key27": "5iSJh7sScANm49MeHH1HgUhobq3j7fMFUC6cVPqFbaFn8kq5YwLXpajRyEpW2v3H3jThrncLiVPtvc715G3JVkiR",
  "key28": "2sbLc83cmatdYdp5yF1AB2XyAc1g1S9NFtasynPBi2JYYsgJgVf5nDfEbds6Gz3cFZZhr15MzG4dPc546wRvwqSk",
  "key29": "4hL1uk21kfQ8goT1tnwixrNikBXb9FEJindDSkusVi5K1QC7CHTmz8xfpz2G4qe15K1tVV7tyb4F71i52pCB4zk9",
  "key30": "5VxLKyU3eoYHxWhNPahyvVxcsBgiWdzUFciwbzMfGtxe1TTQcg7Xk292p6nUK2ECWcQvr7Pu7oVtjLm4aNKu1XqM",
  "key31": "4juxFpzD4hVuom9btMbgCCkqL4HBs7fwtRfZwqm7c6SPqW24saPegkB72zq3zXBkMAprCac5vwgWKw5YqeAxjAd5",
  "key32": "TbPQy1K9aT1oZv6fbgd6BZz6FhrJe5mWnEk3Fqu2ZyXjfUurM2QVpowdjEmaMF1vvkwd2LSLGEZZawMiUZYQFTp",
  "key33": "54KWixTgrmg1sgVJML8y41Jw2eaUcUakFA47wsnR6ebCzb978AEwiPFGqQBrUGZkQsM9vkrsuRmDkL3FJ1agSd8r",
  "key34": "5Yjk25eFN8aTABGzDvUJ7GM4kWQrW8E2A6sisZMVKQrx6qoJKWJu1twmdA1s8aK66jWq3ykUMnZyuZLNrCi4Duuz",
  "key35": "39S7v5jrwd2ZhSwTo9Ckonn84k5NkC5PQRKa4MjWRRTPeNPraMJuLyVABPvbHPHAuigmE4fXp5h32DaGyutwywbe",
  "key36": "2RgzkiBrFP7QXvYfEPes4SxrwQjaWV9EpoNm53sV6ajjqgH3U4G51TLi8uRF7P2FjP58usuYy79RpXZuaMjQRyj1",
  "key37": "5thfcV7isBtgqduMb3Tqi7p92WXhnBfxnRKNrGnKABWrPaKLEjL6794nApTiGSZvDAtRd6XAmbeN2eGwap7FQcVh"
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
