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
    "4rWniAZc8FwjRgAmBwfVmyHnhLLEet2q512uCbj73pz9Di9Vk67oJEuNzCYtMsgZiBoB9h5Tsiu1Tvu2XeVx1DDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGQhHBeat9zsegPKqX6K92kzNtmFt35xmp69ykunxhyZouLAtuWDNq8wS1ightPviabuF5uMeg2fh5HmawCdGKT",
  "key1": "YXXrvcmKXyNbtCqZ3jdHjCfw1tKnyM3WvVxAgxcBRcZ371FFPExi8zzwpCMjN3ccM7v1TZ1sCxEMgPpHzPZjL8d",
  "key2": "5pH32yMBVz7d5mP65SxpuenyPLMEPdT4f7GBFfeKBbesMiPWjaYv6pf7NhwJ94tKsqu1aQG861Ptr2YmQUPC6EHE",
  "key3": "3uJJv5gze7xCfUY49UKHxiQm6KppAwbQU6SicUab9va7MHa78d6ZzzGutZJojJs5AqtwmaWYGADmWARP7GB1BB1K",
  "key4": "4PAZHCCfmvd31pjYsJUNGwbBAj1hpeWo3MKJFUcxRGebPzQfe76YoLDYoocMQTTrZ91LzsvNbfz4uo6ezjqTr6cv",
  "key5": "9qQ22Go1ZqVgBdsvVr4XWXESx53i8FkFWLzPZUX8GXCt2LmEqXwTotFCULEpqhS4LGNgiRGcHUUmjersXvNCtCA",
  "key6": "4adNvMHcaHZEaVphScKD8t4hVtRjPVRn9cHzk124pucshm3fpNtaUJxMtpVv8ukfkEPbGSX7WEV6ckz5dd3AjGnq",
  "key7": "2KAt9XXxaa7UbTd6g5jTLa8HfbuE8t3PVZ4wZpUapqmkDx5tEBPVW1ie1QMKkRkKdAgfEuFu2YuLSz81FpFb1pfc",
  "key8": "8kkBDaDSbfr2eGXmQ9SZ3TJFvZ8Vbej7ommaVRJR6GQwWWutRZgMPuuCTi2fBRsWL6vhxDJr35ZqdFumvkv2WVJ",
  "key9": "AqwL2mE3EZM5dXWQDFh5SLvJeJ1KAo7eaXZ8RWwFvraNNfAzHdv6ZoyCFfQce1nzmGJkcYQGV9eQyTFL6MutFB5",
  "key10": "2tY2shSaVZ9iSY3iiePmHmQCBh8w8x7YFuWQvoKCAHTe4sNTnJKNEQrAqb4ffquphwTUmxJwNNwENtnCP2D2DFS2",
  "key11": "4YwECGdJ5knGXiVZX4wUMnYSEyK1Tm8s5xM8qZcF7PsjZfUToyS77pdXqNjEDyXhCumXjFDYHexMGRBeppeAxBMW",
  "key12": "54hnYx3LF3CAgrN8gRSjPjdfB9LF8R4UfnTtgEssXio8BnUVGAkx5DSFc3QG7QyNtAdejgKAGegyciDN1oa9d1hz",
  "key13": "39H6Rix6TgwyKmgbLwxfiJByexEuDZG461Br6gneLiWkEiivayuwFCWtuwxa9erCHbzKzMy8JSZAPjLx63Qpsait",
  "key14": "5MFPQLP89ufzgbE3rTPYQaj54VdzmdhE6i2VUGTsjXB5j6KrCe8iqaqQxbp6uvcMJa2K1fSR59HKciwQuQSi6B7G",
  "key15": "2Qe42GTj8bYGLCoEnUbNUQByZwFs1q4tZbM5ppPnEiNjmSRuUd1PKCZ7w2HpYHzF5dL5nrJmp3pWsZFSqZsy8FUA",
  "key16": "4YrVHX1P1szNiNostD2b8uxS9repU5f2hvPM431Q9FVLgSWejuEdMhpCD4QKjaQEuVuHSb9Q6PhPH5i7Smxy4enm",
  "key17": "4Mse9m13zSptbduhC7pS2QQrcrJTfK7exaVorvaoAt8eyTgicupYn9LuvudL7snTSj8TCrSoiRbXTWGo3Nx4nVFj",
  "key18": "SNc6qqDnReRCJgLZb1kydr8EHp2VVe7bhJFnioYzKG3AzzrW7vGkVtiJGMsJ81be7Hso13vNB5FfyiaqA2mYz6q",
  "key19": "3AM6s6oSVcZHmiibaprn96wjFPsxeKQUUhPZNxM7yhoRbDDY8eVCKtY2XghprGHcKxG9TuTyBuAyimr2tM3HZbt6",
  "key20": "Q84AQmKh6nUAZAUhMfbrWU1eCUA79dvCeVWJfajGbBbp7odV7YWTAuYKHYhNhoCzi5KQpkJbyKJpdXoKTic6caj",
  "key21": "2dhmJ7RMKkqU9Jz98r283tCCnVAJByuzgaFoq81MSq2X5kMmoyQC3CGJFKYMP71tJyR1hB9opvYbjNyWDSsBQRcs",
  "key22": "4zica3HFy42Xzii5z4jo3h3yWN9UTC8RyQ3aUQZ2mB7b54rq8As8cWMBDVbrLDm4QKbuJ5V1HWQQTR254qsDcjjk",
  "key23": "4SSrMXF1Q5D7axbvr1TFAjfTNBaN5R5oWSrm9YZKctrTjHRmhksjPqtzwNYoaC82gi15CXb4wFDhBWh3bRP5dN57",
  "key24": "3yyB71sdBqXW1HF8NcZ7dUCRiQMwxkRxZpmu9CY8DBEWpsXuZmxLJoTA1pGJrzJ1CcuGsecgJhXByUzFSoHCjf4Z",
  "key25": "2pPb2f1Pf4bUUcaARx6PY2ZYn9849y6M3DNFfFUBcTAuFETbKw5wgT7cSCetzq4PFzAKR4s25Yj4T6T4uNdU5szh",
  "key26": "AnSJDe9yA9mBfZBm1KPmAsRDNE5AqBeEiMtkrmX8Zk8sfHS5Jfx1i9i2mfN5rffHFgtSfBaPfCsG2hj1xhvRf58",
  "key27": "tjoGYZ6iPkHZmctcMv5jwPPXRynNNEaponpcF6xEnZFFGR7TMmyJhtvP8rb8NnUdFscof9MAsZMwBhoNkwopmtw",
  "key28": "ttpXaocvtVKHiiZnaT4VZ8CSpgWpXBrCDKbt83GhQZS9JS5Lf3sdFXU8nydEWUVsDEjCsa2ioiUc4KSAuRktERP",
  "key29": "4gHF8CDngSXqLhMYpfKo622XAGz9jAXxhWyKb4PTQdhCLJ5RN1wtWzAbRxcqSyFYuJRwjXa32JCSmUrhaykX7uzD",
  "key30": "5jJnMEPWoJvCDip3hEaLfV262tAeatcfhALMyfaiD1MiaiL8dnd8hcLiW3EXJg4m2XkmV1Rw2MRrYLbba8rUR3Ew",
  "key31": "2TSDQLcmyu9T3wf2Grs46XrkkjjthECZNz9zhpdPH28UgL4iuTLcbHcgf31ZEncWd1g63SpWU1wopoFpbDEMaUNL",
  "key32": "4xVDKvqLRxfwQDP2Xu69Za3ymMTsMMJEDezWwuJAJooRPm5T6wHXVmSP1Qs4ucq6impsUVzp4BFSjco2N349hdXk",
  "key33": "4E3oZx1cqi3xQZaKz2Ug11shDwY1fTv2xoCHSvSjVJUi6kCXFpnHtJpsfozcsVMzEG7sAKaSsr6ZaktoYsuL49Pp",
  "key34": "meRR1Y62sdNRVPwqRu9sdgepy7UDbd2STpUZrFDWEE1LGrq6gH54qoZh1TSjpsi8BpqWobjAgR3tAnEScr2hYCv",
  "key35": "38gEtwGxF8gENkiRp8w1ivURTWCSy8kaVXsQrGZzwPC7u74QDLVtXmxr7UPSK7qrPP9g9LFaXuUuoRJdezxyWMXW",
  "key36": "397YjEGgthJmckGzUnbmYjvkuW1AM4P1TfWh7g1Zs9u6BLNF3sDBY631rfCBsid1piZ2fuVCkm3wmciWSYDTTbx9"
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
