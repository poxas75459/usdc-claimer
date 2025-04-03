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
    "TjY9uU2baENDpVF6eLURkwKk16NzbdrVkcYarSFKKgbPjJzZLsXbPKRVgSt9gyRcHKdA9tfcbeJHkNdZWBwWGpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KVRdfNiqGCSAzeqc4fr3DwgLco85zBa8LfqCphCwP6nLmwgR7z1SfvptoL79TFzzg1E9Fd921maYW8Nt7H6Fh5p",
  "key1": "2Eq4dNHefuvCeTdr5VrYXSNdHCWdU2dS92gtpV2SacoA5fdKc1J1YM1K51RFxjUAbDPW62GTFNV2JKhCeoaWvf7o",
  "key2": "5XRLke1wPGSe6GBYWHWQEDHW9YZ47ueNpHJNFTvNG6Ga2Bq9DkDukK3S9tNfjcFhc7TTb33yvY6SijKTj7ZFFYT8",
  "key3": "Yiqw9rwiQ2jKDJMMpvzpm6bkYM67cqJZ8UtX4ZRafTmMg4v25V3Dedck3GaKkmfk7nVMeTDH3hBJWRGZCtFGzG8",
  "key4": "126mpWD2cnwo2mcVn5K4ktCcCDunb3WvGJZvEgwxZjx1TLp3m7ziAUBeWMY7CmdQRfM5cWFXYo8QrLc14b56o4NN",
  "key5": "4MQDMtXcMzTxiZLr3g1ovz1n9db6f9dbSN2jMQno99yrsJ6vkWJGVcp9rpNRES5kZd9FyLGg9Eehx7yjRXrUx1Ro",
  "key6": "Azf4Ef4AgasQtCGyNB5Hu2qYkREUyLComooM5xzFrWjr2tPsxeZZMvKD4xtt2srp8pa4jjY6dsVzSfzwTpficmJ",
  "key7": "2pmSTRWaRXTtuNQyhS9G4LwtD5ZvfpVGad5aEkspRMbrVidGeETBfx4PVVN7wW94hfs9wD6Vx7rc5AjNCemEK64A",
  "key8": "4C3kyf42775F3wVdoxroDMcAt3JkejuVtj3qY2cRvHeMx7VnT3Yd7HZeE6HNpjLvyM1mJJuUgrzo2fnsYRgtVsdm",
  "key9": "RQKWoeJPmorTEvi5S93YfFMCrpT4jWxPkoLJfMeeGMKzavoasfpBZe6yhFhuchWiMzobq6oWHgAP8ozoPw3hv76",
  "key10": "HxCJf5M8A4TNAKySSeAWQURNHyCiBGbZ5UZfHpHbM3YoYiiGyp1Ppg4KVoTsb6xFs9kSD8CYcQowHufV5qACUxo",
  "key11": "5132bD6PugM4YJRc8qrJYfABBmZHUAfxSj4BuLGzepmmcgCjqHhEhQuKRTn2xaDeCKq6fbPbVT5XV7sZBM29zvKM",
  "key12": "2NeNwZRsmFTuy5gkRbnWttWNSrYqJb1371vPVDAXCmPGkyWQ5vBho6xZoyZm47A8dpxPUjy4cHAGMiBRy4ncPiuB",
  "key13": "2i7TkQEkv8PG62457bUerd7icA58YoxJroSGxV6FWmtZBwTongNgKpRAWPxs2tep3LHYgocaUD2TBQodWxhJmU7T",
  "key14": "5BJUbneQxMdPNXTXuFpV2p8ntp8XhWCzmzzwuszngvMU4pxz9sMdaAWW4nRus4zk2tmZHVNc6WxFBU2jQTco5Uq5",
  "key15": "3jGuNdB1rXFkEUW3awELqamH5ToAT18XNv8aSriBwSqwiRNjXiYUj66mLZia4vbJAPvet3PFq79oaaX6extqVdYa",
  "key16": "5hT5Tw1wqUbuCnzN1bmQtPUGcDUR7D7KnzFghDFCq1c4DFXAtTGc552WMqTb89ENrberp5N47w1vdVzVghq4o4Gm",
  "key17": "QcoTHhv5nv6q7vt5Zng3299zvXWCxpzqZC5FPKyatc57eaq1ZhjuULQ8pSy78447MA3LSry3UpsAdPxuqTFcNpb",
  "key18": "3WyJsdnwApt75H1vNskKtacb7DVhjmHHb4dWdmLgrb9FnLx5RozG8gApUEZiqZ527XuAVQgV56xjPMU1w25eT9zx",
  "key19": "2EuNHhVrTcVsF1o2ys7oULQkQXnnQwkQck7BbH3wwrfvstVdGVy8cABxQuTsHFEAK4qVbbD431PzTYUvPWUsD4VU",
  "key20": "2tw4KxokCvG6e4a6quF8nLvtthNp3SZa6g9pNM3wkyUpqvTkQzrL24X7RTDJbBNVqQzigKsWu2zfnZjkkx1Qz9sZ",
  "key21": "67apFVrudKSc7cBKCLXDDNyrdQZf8YnRcLzCnY4WmP37yvWr5qZTnm7No26UPCbhcM9mY7fWoR1LQWwSZQ1DHEko",
  "key22": "5b8xENz885Rsna1B5WuTicz66Wdrydnfc5jrGbQnTuUDV7aobeWbqq5j7VzNDHA3ns7YhcpAA6NAC3iWS4d49r6u",
  "key23": "2Wz3Lbq84xnT2QTPRGzd9HtPcNakgPMNjv8KMPG4YyHZxAHJrvkdnPSvJsdBHjVP2VGghLpSQLUWcwEdqhb8zH5w",
  "key24": "5BC5hVcJuvim8jLPZ4aRbwRddBxrzn9sRHkn15SCthobiqg9AGEAJKWkw6zoqYkZEJeMCTCwMX2s9Ja57MfcSXok",
  "key25": "47FjoChUpCaQWERwKLNnbPnzKhNpaR8oqXsGEEkhMKnsYxj25wJhqmZSur6bt8RNRmi57JRLX6eFD66EEggCrfnY",
  "key26": "3bHiabFFQhBge8FKm999jSRdJ6tZzdoYBHYShH9GffQgNwFK2tVec457yqHB7p3UFW2Kup14ZJCy7piqThJNbakU",
  "key27": "62qG6W66bwUBPGzjr1wjZegQK7KdiuHUkNqpmJvSRcTvqLrYxi5JZZrT6FSeQG8NCr21V3rejuUnDfCwmnUGnYhv",
  "key28": "5jX9paSDqiycXMEYcyw49uhS42msZQenhg3E8kUosjDfLw2DpmQmoLjes1GuSXXbwjBd9a3EBnWhGjgTJC7DsiNm",
  "key29": "BAQp7iwnDAysqceapnyXcPpKGct7VyX7ygwSoDSUG2nEGeL9NMDGYav5SPZEVAcL71ubx3triuXp9fmf6GPmoNt",
  "key30": "5wdS7MV7uApJNzxNoZgqGHPNhKJVp9Ws7miLuRuMgQzUvSBGmiAbp5rBDNKYxLpQi9pYQX4WTxkmZUM8e5zFqz2W",
  "key31": "JewGw8chjwSmfegUYWq22g5ULJw2a8twZhJA5wJNdN5tVboQ554AeK6fphKPMxHZoadBkii1ugw5T9E3ZpeXYGj",
  "key32": "4mafk1X1g69BTRM2PXAmmGppZsmq1Dyf1HZJFRbJUEeMHwp2B9WZgAh1WwXhPA6RSTtDuGoTc2keru7pPKpRbziw",
  "key33": "3Xb8xEtGuvYrf9GBazUNkkZqQADjyjxVLc2g4JyZQfa2Kv22mpysuyXRjEx37gzrLmEraXfML9tL53FumyvreZj3",
  "key34": "2GsDYHqdBtPYiz8dDsMgRTpj3qHffWFPDLkT6bWspDeKrRGBFb7y2Qm2oZZJdiXgBCtrPU8EBHFoiXTxCSXHKcQm",
  "key35": "3D617YX1EGq4omMTB5Ej7CMiGKpsRvqJwVz7kQWz9eiwmErbLqaPdofkcr2MwppDcvVb93s4QW9KmeVFmWmCqkuA",
  "key36": "3HBBLcDKH5CeQRnbVVBPuYmrFvAAC6W5KPfe4RvDXLG95k2VzRU8D99EDPXw97ufsbwPSGT7H1GRPb28xCMtqeT9",
  "key37": "2n4gwkjQ51ukXDph36dx9p4AQDYFF59JSnvdtFKfjdVop6uNYdasUYHyRES6eMCwYKxhYp3GjU4fTLH9PYCPnXGN",
  "key38": "5iuLz3XTPrLbTX8Cm5qcY4JdWn7J1RrnjU6Yxr6NsMQjiwtEJur86DMVLJDYFAXiCGU4JnYLgTA3vti7R41qhHhP",
  "key39": "2tfNjx8J55jyqMBgkUQfjmNWCMWp5tDRNQvdBokgAqRtFZeH3pRD85afBAK9ejVJyFnoQDbkd3VDWzQX5yqku7cy",
  "key40": "49AS5ynbrkDUCjgPWiEnkU5azob2pC49d9Yiq2QX1N7NYYJ3Vw9AhjeDWwSQT4TWMTyNDH6FHkaa5Bies7CzRf8S",
  "key41": "4vsetHqehQeJZjf6cwZMJZ1zKgA1K5FkN3ypMu2bgRivT23u4ffJF5wGqbQ2838BAtYvfhfQBRJsTmTfoJubzUYD",
  "key42": "3DJkVBQrPzw8hoWxdPZdxJRwTfMTnAcDN7RqJFgVmCvsiGHevoW4LYVyuz2oqpBbuinCeWiWmrJ8Vdy4cC43ahtq",
  "key43": "5mek4XwXycgUUQ41N2pgLfWk9oJqRTxZNKrK626gRV9r8jQMPg6YwKDitVuHMGxtiDhHNjbbHbdWQz8DsNgGyzFe"
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
