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
    "4jd6JfF1eGUtQDkUj3vFTL4iSGNUQGxGPh7p1V1UiDu2X5qUE9Lx3o8E7b2o1yQbPrdbMX4GLVicXokwzwucnytW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u3WVmQssor4xNumidZge5vD4MBBti4GP3FAi32VKVMfzuzhLs2kVtGCFYKMa9kBnd6TnobhtcPxZ5VTmEnpfb4V",
  "key1": "yw2LCSoPTbuSMTUK7XSwyf1ByQoKWP1186TVC1LpUf2QjbR3TSvSxgadsJ5roNaAjWY2dcmgNSAa8YexiES9cVn",
  "key2": "5YPzb7hyxZKLkwa61qP5AVjKsKAXHrtm152Ftny1KQMwiM1MqcmtbM8dovFYz5SBNC5SA9r4nHixD1iqokZDqTET",
  "key3": "2YX5iNdPn6K4ZPNCH7aZ7KH4pvgyLQkE3uxHkPg2AdrRAp22ypNUx8eeRryFvWtWkkiuKgjc32co34UKG8Fvnbxt",
  "key4": "5xkTreQKd2pRFuWEmjfe5qL5yQqsH8i7Q8GspFxNorMpSJwYXXJra5X6ntvdTAfWnhrL5hVii8re119pgdtsKEw2",
  "key5": "65MHLnqUsUctHvia8dUY7NWNtBUXJ2khtKqZamLVyhEsEE6fFnQz6Yc6cFxk63QHijbB72MJVBAmmdzqU74GZuGF",
  "key6": "3MnngxCEP5Lsk4EeUD6tupA18hK4fejtoe1rce6EuowMWZvLVJHNE85B9haVc58qht79b6RhEu7MWZ8k5d4xFQrJ",
  "key7": "3eBzPc1u4oi6E9CckyZpaJ7rQZBWKV5a6YB7vtKaG7qm4h1Vm8ythT15AHcCJXvjkHBv3zJasEnqGgJJXEJdMHjA",
  "key8": "5H6egLQP8z1XaJmVD323A4iEPou7VKpwNQ6KyeJRxMLsRVS7vZMwNTuR3VKqozRPH1uVMXRVtqQWMzeNUDqNnxVP",
  "key9": "4ePTX2rqidpBgYQ8PSccB5oCF2kQrQzFy3kGYPviLY5dTXj3v4ytB2JFERQb1WkFsGr6EemoduuPGJ84bGsmempK",
  "key10": "DxL3BRXQfFd2ZiRtiAADpd1hiTMe1cnUDm9socH9q4jwYYqQSiY1x73iu3CiPJgPWVY7WtT4PowChHceEb8BXe3",
  "key11": "23EyzrDbWQEVfyJNTPz5NEE9mUUxgQ5wuhLoYg8RUb5QakBpx1d3avRSnV9wyDUoySDkpSyEjVykTqDX4JJgur2B",
  "key12": "mYsabjJ5PcLtFec3bzZbtKP2ggcoEcUfst9H4iocrZQUiH3GzUGKZcnG6PiF3MvBERtSESkwgrBj3RANpaiE9SH",
  "key13": "4FPrBVMhku28HdAJfPFcHcFUBTo2GbBU5gHfwBhsod9B1cLKWtZhhVpUDSsrcQNrQmCv4aogdrvjxCQ8dX7Wtsjz",
  "key14": "2xr7dmCSAGRQwAvfWVes52RBBWGzMzVtRqJwBzBN4R8YW4pPXUwe5d7vXjnwHzX1PyANVAFezswvDD1JGQ7VWKU7",
  "key15": "3ZSoEnzkiS8CY8Uz8Ufm5QhG23g3DRagPtQ48KFN8oJ5GEjE5G9NSW9UvjLVoCrtCX4XYSxqxnBpoVwDbdmf3Hit",
  "key16": "4J9a7csQ6gfCDkBjgWKdqW3DLh5qUt5hg7UnKbymtYv9Dx11PW69e2X14pgfCjS31jFxunecRkF997teWQVJ9HFW",
  "key17": "59m2D36Rttsvy1tWX91mFyhRj2Rt5Wa8G6A8PkUQr6dFCzwc1ZsBguYuixX3rY9YjZehA6pRnf2FECXFsAorTwgx",
  "key18": "4GRBK5fb23QyoRoPTXqGwDaESnLR3if6zf5jgmd6xTmJcd9LjJashqjephzaeAZKdW5sfwtHtMtfj9HJwPa4Prxw",
  "key19": "42XKUQs7Z4Yv5U9NVfgyeXpS7tUP18dh5wGPSxpWPhX8XBCdikhaipjhniFyHZ66Bt99YQR7eLkaM5AUYWU36k3M",
  "key20": "YTtcPf8osJJ9a2pZYMkUaoy4SacGf1o68ndXdVpd2WVjxYumnhFYBV3aVgdg5KhBb2a3tQSa8f7KphcGajBdBFS",
  "key21": "491th8GC5eguLV8WsSBQQwo3tk5EmijAgavsqjtpM9rFBR66pFcziHoEFUQqb7Z4oh96oARMBUXdqYAVfbSViwhu",
  "key22": "44xjDXXzJbh8sdhB75yAeum5RcPD7JuGDUPrPKrxRDQjNHYwSCCbMHnL6gpCayiLZZGTw2XpLcby8wBLbwrqzuKg",
  "key23": "5LKfP2D1SoBk2RCgzngqL7cXhXFeJnuuWBHqvdQFk7zPD8W7an15r16UARKT3cEDFPpcHQyT6UakdpmrUKgXNrD3",
  "key24": "3drrvraePsPRJmu6N48Gs45TMQBTQKfBdjrdYcT3caG3Gi6EF3uKzVMx1ue9A9aksAeBVFTN7wweNDdA6CRhDC46",
  "key25": "5m64THwcdtUy6EZ8Cqr9Q9FQXFUuqZgocxdE17b1PG2S4Um8wR5ZP2MKELwSowi88uRe8VBgcxK8h8RP7UwZZAF8",
  "key26": "3EK7G3TaL4MStaNYSNUBdZc7qrbdbHbKLcEmFXQfn3b6fj6BsDca4KQvpAmCh88xjwzJD8SsEtVVDTQCBL9AkL7Z",
  "key27": "D6v2Yo1Mt152EUWb5T2w53ChRwYCWQAUzFZxHC8EDcGbjCq7WuH8eEVhZsCowiTN9asK9HqVYoVRgd3XMAKcbaL",
  "key28": "2KdpYwvP23p4Vv6REQ56EdrcQ3E6kVjbAsKaWKH4XEZouWKi1s4WFAjQp9uUKcbXNqDcpzsRJpeSL5r2qYLNYSqY",
  "key29": "4do3adRNU9ETrCVvUhQDmPJWd7Dq3MqfpDky8fGQxxGRKhdtbXwNAscGFmq8uQJPza1hX2zYAb8SdqCFqtfesW1P",
  "key30": "2CPMcJ5trPZ8SoDckieEnZA6rEfVkJRVuVxuMruLw4uRYNqUVVzRaaW5h19e1DdcPLrbNEWfpcHhkKgABAHzQtuJ",
  "key31": "2TjT9wHPfAHvg8YLAtg3P6BZRsjgFMrX2zjySzYPhifmCs1KPrtuCkLJrF1ypMkndApsiLX7FJsTuNsh9qC7mPL2",
  "key32": "48zZiXbz1hdv67zfEXuDcw6i8m8YGXrTrEgMadWK7UvWMVToiMaq3KhVYsC1p7gSXBxZYvjqeubJswQUBvdyxPuL"
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
