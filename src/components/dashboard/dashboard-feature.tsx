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
    "n4cFRhqYUFB3E9GqiF4XBVr3DrFSwBS6fHMHyzCjp4rxCDRTurZ6ie1yHJjprwSmtqCEgnidJkaYwG7g3mDN84x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25oGzPPi8RcR6CpbpLa1QfT53FVP4pnsxxEANDwZcseQoTq7D6t2uAXLmaeD3Sx7Et58AYXSxB4j8xZXScWeYirC",
  "key1": "kTGAaBiU8UmUqm8NM9xD8dFoE4kq86PYqmu3twGx98ek1TtUvPjUgsWXEQe4YUAn5VNHZsS6xomezAR3fxgavBt",
  "key2": "2Vihbf3dumTQt7BscfNsVPim4TkppcyVoPRgMTbt8zEqNGvwdP2ncCJGThAsRgHoSXj6zXS6u8sYY75E4S1Tw3Pw",
  "key3": "3xBEQftGEmStFuQjww5Rnve6Pa541XvRWT2mHs6YdqhvtRAKNs8pK3457eDKZ23FeSGpkcTQt1aZwodNE2z4U6ad",
  "key4": "2wQQQ4nJGXVoFsAD6JmYAnoJ21qyyY5vxCJePoLmQDTPzAP37BahWcUcWx1vJEZisS4rGXeaiUixPghvc4xxUp7W",
  "key5": "21BQtwRsVy9KUMAZCrQyyN9yHzSnScxQGfsGVwAoVMGDpwZoQz38Gm1vDVnZ468vg2o4oQoMX9h14akLLChNGpHv",
  "key6": "3cyazeae8H1fsSxHYTs6FBVG26CZNHRrzWMVmFR1jTHKQHn8phBmh5AGRZJ7s7wcndrGEZFaZtUK3DHK4rQEUDjn",
  "key7": "3V97mPsp3iWyJi9oZsWBAB3SgKp39rr3c5ymsYKGqvS2KHZchnzqxA9QHnhmq4e1L3SToTBox5eJLMuToSoGH4Pe",
  "key8": "3yEestHgpR5fjRvLBun7zoc6Kggnxy1zdKPfm1oBuPEc1JNaHjET7TyBv5h5mRtaDw1QvYTa3PzaXcCTAtx8NatN",
  "key9": "22re1i13FYqekwuWXHZAaYxagqSuSfvVikqxFDvEheM4jDEuvS1zKkrJ825iXbAHsVZwJ4LyppWV9U4N4H1ipSgv",
  "key10": "4nMi9KR3T7urKdeY6F3KMBWzcv5KYbVQrnj3c1KReg4HF2aapLhhrTZ91g7oRcWbkiyUB6TTdoAJcqmtN5v1XNuF",
  "key11": "46sNN1ssuqvtuz9LQxXzLezECxyPghU9FyMZXVB8atag8YnuAo1wTb6T91UFgCXJePpXPcUosBnsdpcMPV976Y4k",
  "key12": "2BiBaMdm2nRQyQGo4YMSiZErb8qVGN51giH6bbDMzbKh4WgoQYDkbsSkpYrwnAqYQ4AX7sV367f6WPjvuA7FjCZ3",
  "key13": "5gXpVLnLEwjsTTfNsmeJAN1KfvRRYYo5XE5PV2h1UK7B1mvqikKxnthZRWrDezyxj1FPpwkEkiabULwAqsp4pgDK",
  "key14": "42ZoRr7s6q8odse1RHWTsZjorbk4HDL2eauhdHecZ4cQEX3WHfQvNvxwoLGmy2kzchKAcay71ebbJ2MN4nB2iqfg",
  "key15": "3FWsMpLnUZB8su9gpopVYBYhryrRR5arnPHYmoauUMk1eCBHW3cNfQBq6mff81FSzfiN2ZwmEpNhyd4A6DL1akTy",
  "key16": "DNiUPbgRQzNLw6Ttk8xbRWPKDdbxACvoVc9NW1zeRaq2fgFgudV26dhq4Vv1uXWYBfLDk6CQuqweLwsXQ9vHig1",
  "key17": "5Gi8542nUcui4yG15aXMdwGidJitqNtcrr8ScFebYBSoJBioq71be3FFWxR1wvBZNm5RqRtsZj8GxY74pSym81qo",
  "key18": "zKtR9vv2fGcwpeT286KCy2kVoXUpo2fjiFVwMvtPpjNbsV7uZm8wBFV7SVyrSW3TaBeevPhidsfinKR5YqGnJeC",
  "key19": "2qP7tcxcYqNgy9yUAZQi1d9yBBQTFXRZT7mFjzLyQAVTNoSXJiLcNXFmJzqoMW2rzKK5wYmecfULkuo16jiL7EFY",
  "key20": "5kxhDMN9e9PE8JKZbEe3LXo38XpUWSZiaVboixeNCqHDhRqak1uYYY66MAwwp12rtxAYBogp2MDbVQ6KdgCZ2k3n",
  "key21": "2FodQMRheSf4sxXe1EsLxRXVJ92vCWN3Zp4t2JeRmXcncBnwVombABtv42SKeZ23imszPd73nws2a2cLKWCWr8n8",
  "key22": "PRqSTXZKtHythkZzHM6tF6nsUAKs7cLhfHW6eHy1yWo5gWULZHXtfU4HRw1hTBPTyxY5r6gvGgqWqgz7iPRG3F3",
  "key23": "3ZCVxLPVFquYtA6wBHWC5YebbDSVSwLgMK97GHjxjhfBXZ5nUkqAAbe5TbhRy5gG6BSzdvYeqw72iskAZJc5rL49",
  "key24": "4bMxAoHsHiTDSeKLjTq8LaXPjV8WqRim3BpjFYp5dnFssSGYdbnsNgfFsbM4h66LSK6wRQZ8J1o9SQ9ds3CxBpVX",
  "key25": "5AeBJiR9znS6EyUXpvQ3P4FJo5fbrnsZ2ri8XpynNKP7knNvKCqJTR1PNGfkeWJStfyQaWu2zdwKkTkYuThrvvLX",
  "key26": "3QisdC7vJSDqf6htC4xhyLoDh42hdPT52KJvr9uhzYwKJdQiNikJwFDWeXtAwyaWgKAdVH7ZoHxxZv5crkpVuwX8",
  "key27": "3CFYVMBzf7oHu6HgMVtmAGgA5iSgoXkpAxPPj3QxQJahtEsjf2XJxyYqVQjUxNissGtveDSm6ngWBUQ7vdJGtwAf",
  "key28": "2gCjn6tpBjCmBsZyQ361Qa4yEHNPrZifnPfPKVq7WpEW8sBqcDkfi38fhyXAsDYRXqcGpbDap14Cymf3sdkKhuk",
  "key29": "31oszip5Y5Bi19T8pYeuxh8sAXvNRXhfZLpT47zp1HUPNYqEZ4b8YGfsDd88C2ZUp3eVMnNEGa34XJyMTYBagVAA",
  "key30": "4ntkQxWsG9xuhKQXmXM4LdQ1piwssiMcUQCwqxXy8TYaYmv8MGod5YwcAAiQzQZCmtP4N3C7dDqypEvLCv4MnQKw",
  "key31": "2Vzw6KvBUUJFdbBNrJL7cybsguBotUMpk2Ha6NkwsoqwUFfyHgSRR2xcz69zU54sUjEShfooWKG87jD9VYdo1gzf",
  "key32": "3zRnk8MiNQMDkT832gcLFcRD4tMWZxiiUigncnv2ZcdGyG2FSFLpspbDDx59mV63rKPqUBEXAikM6oxEC7G18wSe",
  "key33": "GaEPYJUnN9gNjsVQk44fuwcb2CwmiJ539Mqxo1W4K2r7wR2MQsxs93V26tKbihm55HAMKXmHPAJHrTHetVSLqLM",
  "key34": "3oPaeb6EuAvBbWza5QBfZXB5B9QXqnrcmSGfs2tFx62WuawPGhgHhFbkexGk22AdG7WGDgghy7bknDGmNZZ5FaLu",
  "key35": "3JYM6DRwfcAA6pPRvSEHhThxUgJajRx1CYxzAHUdEjBBteAVS55SEgu6EYAUnJiaxkUtzagQ3aMpSjfF2KLxjwMC",
  "key36": "2WUc7ZhhjL6TPp8PxXjdFXTuuLC6mkBVaMDAsaGVFCGBFCN6jbM3Hw3ddE2SNnt67Xoidi8f1yfXq8ZGcZ5qscpo",
  "key37": "4wKY4kEw5T6Je6FjQHraFQjVqtSEaX7JxotPGdV2MLs2wse2f4WHPM6UdjNLkRLB5hyx6eohTPVnMmV6gW9kSDw8",
  "key38": "2H6ezJrBevWrrppDTTMZKeDhURqKtFhgXTGHy4Jjyra23Q43dxGnYmyp13DbkRFEhQqkeesATBGKouLJ2u2Mmcy8",
  "key39": "2f8y5WcdLrkoXEAndxda3QszahZUfLxWgVrFKD4QRyEonGbsJd24TMBCajMJttmUP9ttrgeDBLCPKHt56CYVJPgQ",
  "key40": "518YiPDbyUxtzd4xu3GWDUwpsTH9H5L77VsbjqR7etkf7k8SncFR3AQF15Ry4JMTDYy9NtQfoEEbSDAHD8WmjasF",
  "key41": "29GKtu4CeKvNEy5hFcaDLEdfLfMYyFN79h1yRLfNGvnWEJeXKTiTU67Ji2rBnP1pujjVyogrwtTFwdJBBwWLNtoq",
  "key42": "2D8AMFQMJpzMJSok8munv4ePktMojMmFyd8wC7Cw6cEWde2sPrNnMtmafq1EmNbV9B1Bgu1dNNd2Nygk28PMj4j3"
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
