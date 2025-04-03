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
    "2GqzQcsDFNePvsP1hLiysTtmLd3JnkNhBEgsaj5zfc7DnF4wQY9jzhHUPYnLZ2j9whQ7tgMQSycv9qzVAnMU4cVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ReG1RJi6TdxvpDA4QmQo5eUehAyBvFELLSyehUvZ9FcJU5xZCJRixNLXvEJDR2pcfFUMRnPSe1ranT6SBgXhH8T",
  "key1": "zCz8qp5ExEAY5KyWtTKZ3nCPHPwJWesBX63LytbFqQmj4Nya5WyjCgk757whJNw6FjLqETY3VuS3ihfAEeQk9FD",
  "key2": "4vi4rGuiAxT7iXPWmSWhy3UWe9GaxtE4s6DHXbEsCxUmyyMBYjjJZm9ByUH9hKqPCe3WrDVecNUW6wTUCC4DrHEM",
  "key3": "37J27omzhmDtifXRKijzSJik8qgf9d5VMFaukjStFUrJNZDqsk89SHjQiC8T4rQfw6pLaSq4ZSYkpRztYmZHL7pa",
  "key4": "F69TPPhJsvRt4RhLb5QYo2ZxHNbhPahkQzWmo8VDMkarcW6VpdkEnV9YAwWqwYdTMAb1TD5MAh3AkoLz1KTygGw",
  "key5": "2ynWkhyNokyfCfLTrTY8B2F36P2fUXFywUa8m4gVYUJwyfByU7FMQ7qUgbRDqkGfThntxXFwvN3zvLgfpsBj6GDd",
  "key6": "2sH8uAn8Ys94acQn8z71WZKC96WodTWSb5FWWb2emHhy7vXCxaSjgFUtbRTmDkpdvGyVMpR1MBhwWJf8QjuyRC2m",
  "key7": "zUyy6KxWXDSuygVpMFbEV2aXBJ1szRimM5BsNGqKEceRaVwJszgeCjSi5bYwJAQCfNZUoKUpHQgqxLBHc9NFCPC",
  "key8": "895Ht8J3wWTDoNqozsHKijvqVp5dGQ7JhNPDEVffX99uQuXqCfW7MwCCrvGegXRLUZM1XMeksoezYoZFwrKFAZc",
  "key9": "4i18XGpZQPkefRiJdbN77Q9bSLv486EZcL23ahx1sGaQ2UHiELCYrKmui8tnu737G9tQSpURKSZgWBEbMembfi8w",
  "key10": "sRsozmb1x5ugtwY2DubKdWvYrXH2R1PHBJxH9wahYXyVAgJyhtc1ipQBLyiPGuRyBjKn68eexd9S927DtLvSybH",
  "key11": "mwGjkjnT5XXmb1Sopgte2jH5pMgegHRBvaNfZcvkrf6LSKNAt5eh7AzLgJ9DNr4MzyAVsxcfcZ359xVKGbsVtDe",
  "key12": "3kRLJrQ5SDkDhNjaieU38SB7j4taMenVpQi95nv5t9kuaxMRqJiNMsZiHC7y6LLVEFdBky99LvN3rgawBTT6wfbd",
  "key13": "3GhB3YrTDwM776JrJxhmTbZ7M5CTfzPjyNaHapcZsWVPiYfuTC5ke8x6wgCLFUE8zxEHMN58B794xLG77f1jekv1",
  "key14": "4AA3eHXfhWwh7QkepCHvXDDghgi4DHMoi14t2ty8XhbJhCei2ZCesZwtH45KKC5jLj2YrCCncbSCPtze7zLi3KRb",
  "key15": "44t6KBoCqrcySX6Rs1SqpFvWK62HTpLeuPd2zgyZ5UUwcqqabvWZtRL8iehQvGuq78sqik1hAamvPdBZ7UXgZS6d",
  "key16": "3N2iNUkZ6WWZDaiWR2DjigxeRKGTZyf1fkGcyomfc2RGEDhXuwCEoRvhANR26JtXZNFMbB3r7GMtTYxm1bEeeQnT",
  "key17": "4M5StB8nMwFkcKbwdkSZWEMPCC8kR4wQHDLPPft2NRwscS3BPQ8K2T6UGNF31kURCi1dQFeaG9u3QWPmAswUjhNm",
  "key18": "3Eku5DN29KRYnDQuumKcubjsKoqwj5SJ2zQJPZYKT4asr1kjW1Fiov6cdSXdYsLh4HTUnAFBLJ48ysXD1A6R8EvA",
  "key19": "2xZyJwCMccgvynvhBUR5VovKV44nb4defo1EYmq4iUYKbuxXcBX7BqH7nBR85p6Jqq1ojxfM16Tb4whGzJQmUhgt",
  "key20": "4JvVxMzUEnqGZvdeATM8xSebgykPRguiy4FFegcSB6Md6k16PKFExLDG8BGLmhtSoxACk3gitdjEMLTDKDPhaa74",
  "key21": "ZnoMsGjaxSp5mpi2Gn9Acx3KVJq79zC4Rjvrdy6XiPE7VpWeqyLsoHJzRwSRwy5saYVM9Mc7j1SeDfsRxtTKidV",
  "key22": "3bxNRDKWcSB9RGf5UZnH2ida5LUv5z6QN2Y52D9xj9CMe5nz3fHkf235VUc1hhGv4bPwkbHdd1HQ8pzifYGSKoSu",
  "key23": "4ApMid5JbpGa4KjccvRXJqRKXZHhNz9awBc94Nv7MGYkRja4upU91nwQzTK61RRdnn8xaejWuf4f84BCNvDHbL1i",
  "key24": "2ZZo9YT3fcJy11oDMXDwMhdv16YmbUCenPzEaW5ucfNRaAsEQ2vQk2PkEsSjPtF9P4DRg3PAYRZnBAiJYRB2FKX7",
  "key25": "5EEpad8gLnr1srRNWXFPbATKJnxCzQV5UN27VmGAH4C7wm2K8x47QxYPmDZTUiQrT2qwY8ttKxsfG4vPJtxDE4iZ",
  "key26": "8P65r5ewEy34pkK166kVpf4NmNSC5xpHf4442aSAiQkHsoXhh5mYQXHgX4HwVptDa2sUQVG1GzrjsvujYbgNk52",
  "key27": "3MU9xpiLktGEzTBfsEbcmSbNnD5EGz7X2sU8JyGyxcmAoG4osGqeFD4RW4mkRgyfoWkVS6XdnwCUy97LBbdmZfWF",
  "key28": "uCsFrUPM8D2tU24BxWDpsYYwJw1kcFq3TEfNtYFB8seQf7FxBSZt43r3HNNWEUeJ7kURnJi7ZHtJnA7PBEC1inY"
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
