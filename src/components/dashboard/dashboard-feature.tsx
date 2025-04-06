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
    "44WBAZA3BNytxfV5Gm4awPeTpvRkVZAFiVoYyxuZ633eK2qJ7xBvndoHuPCqcnUx6cxUUeQBQa8xhU9Eo5GVLi8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44WwGp7Tmfs2oWEDKmq5AsUTYsLxUNwRLqTvDmtzP7nRr1dztzW6vUxnRUxk9YY2Q6SNzGEsMJcccrZMNFTSw1jA",
  "key1": "2nxkCRbNru53XtUAxWouVvKdB62egev4mc8QijsHwL5YoVqaT8ZACu3gbS1BzL32a1K1HbcNGrz8ptuHHBoVaJBL",
  "key2": "3wvYsUWzPcFBfR3eSYQGvbZ1SJswBKfuMwFYo3ukGJwCTAz3icHHHuMbXC9b6UMaevjxLsMq4zLPQ9viegHTu3v2",
  "key3": "2RVa3wXmngeuegsEP9ommSrc3x4Zxetn8hLSN89sSsQ94kGrjgrF7eWywRAWQtaWa6RUST2e7BAv77nucRZTkzc",
  "key4": "5CCKzu4zwG3nFNczhf3gJirGrtcm9Y8AuDcGbFuMXtbm1RoSdwnGyut26QvCznaFu34ymcBWKLayHkixLpzN6YMM",
  "key5": "3u1xbeBk51zzyXCisFR3YnRLpMdUh6bLEjE7donMTYvCw5V78SqR8SLvjQdUPngPyJSPygc9DmYmgA3Av45DDhXf",
  "key6": "4atFt8DivicT7A3vxN5dXKbRzjzyN1NXBL8DqVED7FBLSrUB9hdmC2Q3o8rrhrsBMmV5ALy5rF7A3ybQtHcUg9V6",
  "key7": "5ivEAFMYkTrZ9hNkoBSwB7sx6U2vmwBxSdzdpek5AcJiE9Z9NFX95vsrUjh279V8sPv5kgKDbc6EKxCdSLiuunNv",
  "key8": "4nwDftGK6J65agqNJz3wjViWsXdTjutZzyc35Ti5dZpaqaf9KMLDccuM4Q1DrdF8DUQRqcG2UTGaZHVGEqRHmUEx",
  "key9": "2yDTBiN1yy2t4UGaMry9h6mWx8gEHU1ktiZtXCGt11HBjXxAr7RzQGVcYA1weLEijQG9Etym2t2YVeDHJ84iMzqz",
  "key10": "5S5J4JUy4EmpE1idjWPbiWAvhyumoR24RLdzcsCyUvit9DY5ySTDUzg6kss1ezBM9wQq35grTmLXUNa31feW8AEU",
  "key11": "2VgxBuWPfW4pF9gdqAFJa1RyCRXGgR5AqWC6mugHkGFwHeC2jpi9SifAtrsjyuSgpmaBFW23vuBk5xWnESTNgPgF",
  "key12": "3iT5RCr3r3SHTyaptWS8dWKm9kZbZoNi2fBeckMj4b2Pkpxh179PjUWLC1sW4FKS2medY1qtbvgfBXAvXwD6SYzi",
  "key13": "5Zma634XFB3CV9joAvQrmEfP91s45H9zL81cLWS4NAm3gZLUbKu1dn2CHdPemZJeesiWpycNroZ8iAtxMV524YQ3",
  "key14": "cRzs12AiPp1XdrfTnuSBdwACjFhzhGyPDZWdtgmPTZroXnA3BKc84fu3wZt8r3G1hgzaGmHFe8pNoLRuSW5gSiw",
  "key15": "34CwUZaTaypWj3QPjZGJQfJykUSCvU4b4mD13UdYxBsJyqRSMkhEQ1f78J5zHa3NUmtMpo58Hagp33Tbgt2y8XZ8",
  "key16": "P3oLy2hvazTy52o45NrdPQwWUKtReWmtnmTAcarQBR8Yn4XnSUHYqRzFnmnxp3sXfBvxRYB2YbBgrZo47yTMo75",
  "key17": "3qkfbbHf8Fs8k4MVFz6Chohdgb1SWofpGrvgzMLHbtYhwL13eMAeoP98ypM2HWN2znztCQnqF79hjTmHjvYoQLe7",
  "key18": "3R78W1Dze8rLWFLm26bv5wj2uUshtN6bVcJq9HTdufSpzUdN1uV5qZHgWafVS6A3d9DqWkUKjBLdoGpw5rQQLVfw",
  "key19": "4YE2n8xCLuANmfoASTtjnTgsqz92LUZ1ywnCVxVyTWM8SuRMhRUNhUCfG3LvmWkzxtqZpWnKCpiSsVmd9o8tVz87",
  "key20": "63uDik9XKriPraErhs1wtyi5fhhBD8rkaQTZJKqJfo2hgBv1p8PqHWdkPoUTB2ERAWyfY18p6EvSrSUSZEFyqVLE",
  "key21": "4mgBHudMtm5b73Li56ecueQWYboZinBRhcz2JD2bbujmUDicmcFTzCFMfo1gUP3q2NYc4GrDEVgd9iShYjQooBMW",
  "key22": "64FFMfeyMb8MKbdCRMo3Gg4dTKea8HmWHDFM6XTUDzw9d33krvF4iLg317UgNnMZTdYVzpcFvK8ntDXHXLaXxmEr",
  "key23": "2wnggcYeoANs4XcvgHv9MAMUi5ynqDMhvVzAeFZTu94nSh78EnJvF3RHPZEAQu2JBkg9kpH67TwV397zKAYXfSqL",
  "key24": "4uESHnUk2rrbKTapnKDhEGDzZeKSatnZvuU2qzrRjLJMDRXSkF77do1uMJLGw7c1xx4TghR7AQ5o5gvaYgUtDVxp",
  "key25": "52grjDCVKC8kNt2wjN7oennPm1YdoPMLwoRifC44UDn96ppFKJT3YWjV4ysopv6qUoYKmUUFj7ENqx6arzisaLdD",
  "key26": "UP1dNPczFLFfAaH7kyG1Y4GH7mVzWXHf9Aq2BhbCTj6HQgPfxMSYvkz2cCsUze8pkiwpnoZWdzPXQVbFk38SyjP",
  "key27": "5WSGiA3G5ANw97Mmfv8EwwpeMYEGCJcoxR39N7xEP1FRYWyDEgitTSKQ62DKJ9yoqhtt1rBWDsJ2efFechL9yEJs",
  "key28": "s4vfcWEVWf6zKKwFwAwHmeis4picmRgqmcCXcVaFLQhyQ2fwYD1HSSEpAc4Q46Xnd77A5pZsLuMFJcLqvbQRvCk",
  "key29": "ssNqbrtF8PdcEoguKL4G5FWxbEpa7dYWsTpbTsZo8Yn7LV1Z4BM3sXhn1DdiiT6q9iWi9WBLWn4dgt1ohgKZhDT",
  "key30": "2X297iGw35sV6XNaYjN9dBt5Pnc2DpNSHS8HCWaAc697ikozSqFzDryCzMkYjynE31AWfFDCjdtXKwvazniftxeR",
  "key31": "2sifr5rtLQDpXjSgd9t2xWtj1DaqU4VcFCDm93EocYQCiqjmmPp3Ea9PMQjj3AhUCa5VcuWEpSMUqSUbVukPogkR",
  "key32": "8yNUZGC1iZfNUNc8f2Avc3iVJN2hPXZmH6vMGcVA96scSzvEMXZK8WJhhCAcVPGrMT67848DdZ7EZMSo3Jjb7gt",
  "key33": "ddJF9GgeZZaCYvn94bQs7RaW6Xv2V2tnsottTsJjeNkrneAaLrkDPuAbdJ4ofKx6bKzSZpXpKJzRqXkghAY58oc",
  "key34": "3FdvrNuny5tHjCV1T9fS6HqAgfYTPmSoBG3rG7JzYbkpzdRjpBKZ7MWAFP92YQUgxxQzfohaStXDZ8x2W7wCYB6o",
  "key35": "2uMJhjcoknxGE8Tp3czuEyDNMFkrnwiJUB9YPGTk2tiNMbeNBkHpcL7ZwYJgzzmjQxoxBhNbNwKVKnZ1PpmHRp8v",
  "key36": "5iUJ6cf41bDQU5HMsEGchd6a5bJbddC2gh1EkqA7wK6DSQc9TKTfFMmQ3Dm6DK7BYNCBp8oWBXCo3irqTuqF7ep9"
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
