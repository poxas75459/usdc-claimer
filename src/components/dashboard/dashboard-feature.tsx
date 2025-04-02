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
    "5poUMeD583pTvLTdrKrzFfGFaFzU9rPxoHj4eys243DGAXahMUnh6KL8h6Bwzv8EKEr2WQk68HAzcmxLDRfBtbNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65kjwfgZc7u39GHN2HGeJ3soMGsuVt1XDuFbg4td3ZY5H3iEazoVA59tkQKwfW7uQGmsiCK3iT6uLhzmgWnGqbAX",
  "key1": "5rkai2oLL7E54eevZDCMi1wZEEyEN814yk3iuQtD7ahazAzKtiGM7duGb3na9Ctm2JfukQxyUEREPw6BLsn5sGby",
  "key2": "42cmpTdiRF4hsmDY55W4R3VJX5N1g7qAEkc9KKryf13KuSdxtZFeDgXmVy4NTPDFHYLSBMAitnJQ3ejnd9VktXLG",
  "key3": "36rMnBnNswu3VgKxZ6kKm9xJ5GQW9bAZrfPKo5bCtQsQAVmLdiM88abYPqtdGgY38mwpGJW1VkwJfqaQb1Zkd5PB",
  "key4": "5TxNnQuMaQWbtg2jH9vGpMye1Z3sqAqd4Rv5wGPAYGSQHziCWUCw2w12Hbu56GoTfQJcXds5hmRxCcaBTXrpjQvh",
  "key5": "2kYSqNDUwibg4H9Dcy12BeubCaLDEmvmeKUU7W3swvq73hctqnJKVwTYV8oqyCpoNf3Dg3ssnSYWkkHPwDepKDA3",
  "key6": "3zVsjuKhTPc1pEs747wemkXrReuCPJVMH7z9mQ9sFxwevSNgv1eHQx2rEwqnAg1wUfk97kGr9riMpGtD4tscDM2E",
  "key7": "5eAL2UGwoyXDuqG7nXHxbrE7RD3GEZRZdpEYoeTa3ce3sBbNReG6hyAudaSH8Uc4B33MvMPRtz7aA5vezrKo18nJ",
  "key8": "2tdcS6beMivgxLqsDQzmTDs1SZGhb5CwgDiSUnetMsJDusQbTr8LBfjxvhGiRYA2Nthsiop5Y3R9rPDzsRS689Vi",
  "key9": "3TndrWjoBifSWx2mLBidUJDYf3PyZwz6VaiyELg8RnJhkMTzQH4J5JG8EbEZcGJnXp51optqwA5eyzfuPARGvNiq",
  "key10": "5CnfCmdhumanwi2mMnwn7hViH7hgtstfFAGVNAk8rXzJYMPoUQwGfjnfzZ6j3XaQ2n6HxVhBFTTkc4F8aC64ypYT",
  "key11": "26qHstzPyyXEKiDx6YMcZ4N6EPdjjYTxyMKQXiBMx6GnaUqmZV626Syrp3ZoNJBztRXY1AQx3vt2drNNP4VcG3c6",
  "key12": "227iVDQtcx86uPRoshZLBHP7kGiaWtHAaub8g8rS3KHnLtjNP94Rt3UMZpwKSH5Z5jn2ZtjtainiKrSzUbrgZonQ",
  "key13": "5fBwBA3negCJWafRTxKet3gKriV84619mKJiHukARq54chJYyWFRX3pgpDJvxufyvMcnvmjocUZUQK8NE1JxQSUZ",
  "key14": "4FFeywgR6RzEKekPGAkR483jEmJUYgjZrieHjt6wvoHCHZ1kMBiMrUkc9j2fQ7Ym7n4FRftiUS6WXncrQii6wZ5D",
  "key15": "45cuuWn9PG6sePG3BsnsaDiZT1gxWvZPsnfE1yyGn9ipWJ3iYTFXfuf7CCf3yBjGX6R2MNum49VN5ASu59CSxrDk",
  "key16": "2YZQ4hqcrmBh7vp1Y1FswHZkeoy5gNRqS7aj4FGzF4c4FbrSHHZuiPWNSWf41T3V8pZ1nz9XRPLGWT8pwuvMZMtU",
  "key17": "3xr6CcwPofhK1e4Qd7J85EsYbMqBtHixremfKLfgGCyJsUXeZmHN9xgu9nfnq3GjQUu6fXh8dTMFtkPDh9BzAntu",
  "key18": "3PtjAsZ7bJbiqrbG6YGeJTQ4wyvY6V7PHoQyv8wq6zJ7FYo3hnWCJThBaqH2bXoBJFUNqpuyxc9UenLHABSrUF5Y",
  "key19": "4LP32iDj2ccGUL2Aw5BTuAZiiqEisSUUrVoJU2GfDtUo4oDMqd1SHpb3MsKxnR685C6HTmBA9QQGotaqw6nNEF5Z",
  "key20": "5STAnf2Sy8uC8P6Kh7RvaW5G585Dd3fHUCX3WU4PnDcq9xF9bE47mPwfX6TLocQMKVczw5scpmKCf3nErmruLqhQ",
  "key21": "2mA7KEAHsKLg5k724tCcDsfakrydPmHCjQmMfV7m8hoxHpkvSsPhuxohTvMQobNAVJ5YSM6mbe4gokjEdrrZUYHA",
  "key22": "2Su2h3Xv7FxpGWcVfFx3K3T3HzzgcuYUnproEPX9yCCr9NZQpAsJTosh38K12npTNC9gsCc6ciyGE2yt2A1hm7vT",
  "key23": "4WR87s5w7WGucam8My5fv9rkhgEeRd3EKWQ3gkfmXVc2fQL5J7oRtT18nNyJUXCRRqTdF7ugrw4YfY4ooVz921jG",
  "key24": "3vJq7vPYY6WWkYCSSFTtfnu1wLUBeyrbztfkMuV3kZ4HdQWNaJ7FSXD64YyiQ5Fin9gsvQpMMpVcHZVNsEUz34cx",
  "key25": "32Zo7XQsx7KzcGxtSs2hZ4GQnCyLPNXvvHMUXk9rnokLHMJcLE1DfJBd7iMHKpTUSdveuP1NYPKLMMPvVq6Hy88o",
  "key26": "24qxhEWRHmRwaWWaecGALtUwNjoutdufVt6sktDQ1mop8sYxZYGaCfSVLtzrqcWBpbTYUqPcjDo4EPBWQk63R7tA",
  "key27": "4a1K7kbzRnuWJdaBAg2UMEf77cAEacJCRiABU3RaBqFhikxp69FVqLLKekb7hjKpNQ6XBG8PHwKW9WX57CaLZEEo",
  "key28": "58eC66MdR3vmZX2GMF7THvMYBif3oz7oQCsHMcfcd4gHJ858KA3G54aqDoZf2LvhQsD58nE4uUoz62JScMtJVCSR",
  "key29": "5zLnvbfTirCUFPt3jVS4eFjJntdgbmETBDARZswaGEtykppTyYJheWwzTXj9jpNakNn4UXKUKoK3jZVdLLiwRviG",
  "key30": "3iyjcYeyXQkVW9sKmMoNX6nZhfwp2WTV2S2XNmDNzaVs1xbdTvTs13996oCybmUvXQXjpBqb8vYktKdzSLgwWA8j",
  "key31": "kYRXkFFgG1cGFxEPmeMcEazwFkcKgJwQSWQyN3so6iihfgXcvTbQkcABbVyT9Z4dLeMuT3BssKE5HjkZszsUTmH",
  "key32": "5gqoJ9Ffe5nhRJXADaSLauhxRJVzEDJMpqD2qAhAHmnSvnJ2r3rnT1vKtaxmz14Ak1jUzsVwgNX1pEv88yVe4UJN",
  "key33": "RyJr6sw1EfQcmZUmaFDa9FW75aTKdz5zBWJhYuyeUZ9y5ecP63BGLJqCKrNuQCkeZQkmdEE7Xa6wE1tsGYiEFAu",
  "key34": "4MmPjNjoqT1rtAVhd8MTrFU5PNHsrPzsy8oBT8VKzs5R9Y7FPxoVHVZm6J1sBuKKBTTC2fZzYZzURpBinBtEkESk",
  "key35": "5NA2X5HLJux4Lhqa1ASBpExRyN9M36tbz4cZ66crGb6J3JuTSWDf6MDnYqGCwA6AdgSXPnpDqspthM9GhpDaQCHt",
  "key36": "uCjtRtd4nCNYo76g7CBwoJ4rqf79AMjt4iTSdjcGm6vCAN9PmCH644YKJsY4yTZAuwfywS1d6WAwAguwaPUuoT3",
  "key37": "4irh6Szcwv4oAtH5VKv1p2sEeXnpzhN2cJAgQpZdrKhtVd9YsasaHJbmPo2GkcUKg2CaPgXJy53qbiaUwUSxV3zy",
  "key38": "5rEGTDV7LzWKqZF1FCqs2ByWBXkNHh28ZEXjMmbqQi7PqXJVbu4Zyu3aM7ptTDYbUzg3GyW8dMUB6rrWm84nTqN5",
  "key39": "JTxXideVnsDN8RA132fNpzWqgpxJUuDRhvjcHZfLNBuPepXXgyd8tU2DxNsufQQpyYNm2Uau2UivVtFpwCFwD6d",
  "key40": "nhHLNr6EtUJVSwZbqZeVt9hwgCpknqZm6b8R4VmHg5euxf7iqWRHgCeLrXN9TtgFENaZDX8prqM4eMS6FJqzCd6",
  "key41": "4mDAL26QDnGufNUVFsJKRo1gw53aizq7ddKRS1KnLP9W8vHkxyQBwC8ZB22CZfGXq2s1mT1w8SKMPKhcEpAJJ5wg",
  "key42": "5hmA5UCFgyBaawMhLcXA1vPrEEE4Tnv7HoRXQC8Vgvjn9jSRgniHNWv61ELpd1TXPjBwK8W2MQyXVmoNoSoMEeHn",
  "key43": "5BabAuEEa3VJm3Vu9zRiVcWCBniMLjRG8rN2KtegtihorgCVsVMjeuQ9tksYFoxguveRn1UNCA6u7xT57UVt17gj",
  "key44": "4FfL9FpfV5AmSazyXhHco7mWbF8tTTNq6CevBnU6TQ56R5hnwS3RFkFZMXpyq2C6TouX8zFixHmKtv1d9fUDbqt1",
  "key45": "XUiSGcBwkF4e9adgenGnPuxFSncqhVUokRCgYirvzmfjPho8A74GUhJWoc6LBq5jLgmmm6Zu9ooWz2HvFnUhZhN"
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
