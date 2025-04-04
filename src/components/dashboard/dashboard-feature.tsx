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
    "62NwG8PLroi3ZzRTqyGawLYike9aUkRNhfyBqTqm9mv56ymKUhtchDABsosu8jUnT5MnUi2gLxw2oFqKUES8t86m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DWSD6K82sHxaXXbVah2Z8pekTLrKjVYcY6hrPYLAc3UC82aEx6pDfCLWbBuVvtGTwiTMGpP3TwVgSFEz1xpeL6m",
  "key1": "3Pe8aHNV97f2oGRvcBQ4eigwLqhUWWBmqHoE6X8ydqrYDdvcCEpBsAw5udJz4JfwGA9drVXdZdTpf71tMk9wMoNx",
  "key2": "3ehJH9L6oFWQRcaEXBKsyUWr7Hxd17NToGpJTakFuiYb3AEnb6U9yZrAXetQYXjn5wGNBYpSiWKSev8iFB6VGSEQ",
  "key3": "5HjAdrzGL78LgA3NqMWiKySJZh4YQWGWbLwaGP6LtGRJ9XtkuWYQgjoDwvqYHX3sghkfk8DRPV2uVACGJcSyaaDT",
  "key4": "vn2DHBmxWR8p6HEU219uPCiJcQr6BQem47XgqGxuMoZj7ic6otcunH9RxF82ocgiBSd3EULDkjNEbgjXxjFQTEp",
  "key5": "5U2BiVcC4oYEHozcV4m42MdJUQhZpmzntkkdNquHjFNsjoKTY85Gtpf1xVWV3H9QmF5yEnsaYbn9kGnLjd8zMWCc",
  "key6": "ka4qagnyNayRcMxp2zgPZAnQ1L3tpsNdSdt6kibcaBTSo9KBh5566iFMrbHZcjGcdh2v3zn7HGrNyV17VFeB92s",
  "key7": "5ZSri3SCNZpwEaYfCjVedYf3ypNSVPuaFHHgQgnPZegYgd31eHSEzh6y9syEzVMy3SSbQvLVnFupDqykToMBXNMa",
  "key8": "4TjdPUsJVJxPymvsicGtW8vBLwiQyU2r33XdqUK3RUhtc7Fk2TKrB32wYRidvYYHTLw9BniKyskZ6N6UF7oqD7Zz",
  "key9": "4zRYKQbwRe9FLXk81EnNHU5gapNwzUgiemaJSB8eqxTkM7wMxwXwc8vYvMBGgtemvitqzQDeWLR4TFpDjNXmcCAt",
  "key10": "65d7ZbY8AQKsgxhkoRtZNVyfXkvZDyJ8TGBfp3izbCJ86eDZYSkubowH9HqmN4rMDZdPBQkP5TuvxMBXNStErXbj",
  "key11": "4g8KsDT25931WoEL6EsWHq1qTDZk61dKa85GyvqbehvZqwmn7jspVAuh8frXbrbdz6dbNcBBes2tDzXi2j4HTtrP",
  "key12": "4QntXuZxR6U7pD1HRnMaYAyikwsD8fsaWRb2ti1JgVCvGuPNtSQsPjMjtB12M1YHMYTtDYCBV2GWaWKhTTdVcMJu",
  "key13": "4qJmumrnPpPjnbv7oaESLKcUCftuCkZPBtK1kfa1eTNKP5aezAs48SF29LmEaAFfGz8VxfPiZGSnQoutJ5gn9aSi",
  "key14": "41QWhkxi5SWuDby9gnW1HaMngvdpirV6Rohp718prG5wcuVcTUBup6UAgjN24REufonR8AjHKro3TVzi6GTLoauy",
  "key15": "65msCKUjCBGs4zyPeVVH9N8Ziuj27RcSBJxV4dtk9XRkWRYVnBhCLmYStckhj9KpvMCv94XK5wKXsQJHDJwQMRwt",
  "key16": "3phEVnb7W2stKBLCc2MytyyUbbnYPDNQ6iQ3o92N73RTu945hznpMs1SBdX2QUPaESpJob14nmV8LvxyKmhuLvXW",
  "key17": "5YAgff5rsuCmGWvAdpkApMxLeTtWM6xWGnGB5PKfPBjY8x2RznDpVuZvBPnsZHkWTBzj1HShBp6AbnTCokJxu8on",
  "key18": "22hh4ToysoZciBFgRycrbdsvfdD71QjkgKAix7SyUAjfqU4hQ6b1tJHvdQtktqZ2XcShKvfmSntRmztt2ktRd3ev",
  "key19": "5ms1LUReBf9steeZQirKBgJ9oFkSsNmPFrLibcRMAKduHUBxWXzo1dwiuhUGDZaHXSV7nh9zntnauCNHzVk4j9zb",
  "key20": "5zYWXHR4wFufrx1GjiRaD6qo2QPPLfubLpPkLohmsZe5NZYrGzD66VW5xNKLAizPDc3g4i9LkWuTzBnZVrwh5NN",
  "key21": "4hqBJJe5fpwfGwned45sqsjC5mTERUtiNSBTmGqFJNeusYJJW6crAYRzzBm4cRzya1U7fpeSwF8JqEoJubxHLPzn",
  "key22": "5P7JgqHTAttRNetNhdBo5UiL6B7k9PdNWzk7sdb9BvMX44Av2GSY2mMsvh31Ya399cg2PTWw9zW7jAR8i7NFQt1f",
  "key23": "2752YEangKPszMpSMD6CAEBD9mGWWEcxfUMf2YjWeVxWRiaPGQNZqamRxqLhS2EtdUEJqvX1cRsaEgVrfnobKbqa",
  "key24": "4JgisdseLj7ECZW3Gktjj3STQC9FJ1siLmSUYpvEByRqKK6wDPF6MupfaemmMeCB6JNYU4YyP7L61dsrirUd9RAr",
  "key25": "5P49CRe5up6eSEkeQDyH4RLZ1SQRSf14ewALeTNmwTrKdHLmVh7S7be2VNsKo2vjUgZa1LzzkS148L5KtRxJZ9LJ",
  "key26": "43JsvAECSbhw7Jdm5RxFeimdqDaLrd8Ada1KQiteVUbQ8j4u445KtHLCCPPf2NokA7HCcDU5Zfcsdmsj97TzanQk",
  "key27": "5zAm9tfEg3x5GnGB8SrBQgY66a5LpstKECVKqTe1fo1MoYVn2CvV59Rw3Wvpr22bbfqXKYzk9A6KVpqjfbFMxNd2",
  "key28": "5EugUaD5bxyaaHJxHaZZPwTA3H9QiBqLichVJpvRk7dtdiUfuVLn31dU4ZUYMjM3nD123A5Ef2AUbeTbxNB96tBY",
  "key29": "34zBa4RQ3SG99EVcyRJwUaqgenQXN4CzBbsmKDfDrkuAjk9AAp78Wh66RGJqxGoC4bEp2dMa3HRraba3LaqLgbLh",
  "key30": "wo6z2Tv2pRTWXDwF2PAkBXqCLLHiEDjSbwLQLUNkiNhnz2UdxPfkAbZVqtCjf9TKQfLM9tCEkT7x38eumjUkmKn",
  "key31": "3w9N8s4zSUfhfZDZ6kxNHD1mv49XRnLHAQxkrarVESx3zJGCYpHhCX8UeRvwCU3VJsUi9HBeh2ptGXC87qcAH2Gv",
  "key32": "61EYrbMaS9jw3x8B6GdRU44WFreY2FJsJ8nxwCuzFzvi3BDFeR28kZgrmd7ed6aMHajmK2M1W7EYxbNAvaVoUsLS",
  "key33": "5B62BExoU1AYED1ZfpakYr7JPwVu7iX9n8dX92tzXPW8VtyAKiGzZEb8mAP3kCpHTsYZoCi6sW6eQJXHyfwahmTV",
  "key34": "333a95HLKQM2iL9f1YPahcquiFPoF2uPsNbjsg15GGgY5ZqHkKzbtfYZmvK5vBaPSCcHjVZEzMyYPD8Lftnwq3uM",
  "key35": "42RxtmC8sr3RZCMWvJkxGfGB3YeBG4PpzzguvxwaWYT1gsZQJ4L7fGqSFeTqDTFF4efs7UTrQtbNRbK4pDVPVba4",
  "key36": "42paWV7xTv3cViwu72jX8vH2BFndzNmur8ywgmzk4XqdSibrjyumTTaCMKwCWJt5AVJY3zANDDpXuUL5LAfwzLbn",
  "key37": "25Eh8wPM7TV3CPazHgh2ZJ9uPV4cAECWvPrpgsCHSYhVpfMmMUKD4NBm2yy8LybMNwomANadUBhhAA8BpcRBsVJs",
  "key38": "SRUm3grxWsEaAXfPv4pt6kXNsGaaewvnEkS8H1yLfF2hEg11DBx9Hpq9x1i3qnYQHrD3Ksfr98nXQ7UAbj2XDrs"
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
