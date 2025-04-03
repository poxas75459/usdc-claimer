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
    "sAe4Yptovxf7F7qj4WN4U5n7g6SvFPD3BdRZXuGwHm1FsMpRAEisq6X6kYfHnEMSjPkrUkfWDbHDpsSmqdUWz2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2rJ9Go58GigFhr9tNAmCdPWZkw7DPnHbtebgSf2dfQosZLne2saKHvoCjTHTFQNZDPuVjCssR4CtqLvjhftMPc",
  "key1": "2hXaWiusdUqH9qqw2icSu8vmYaaB8Q9qQCUddDC55o87v6mfr3D5FsD8rx86zZ3TyY8JpbwqEZAeoqd3uYvEHmXN",
  "key2": "441aBQpmmA7ASZ2cQjMnA3vsKiGpNeDQTibFr6WstUaZcBXfMn28qvoMaLysU1DiNyBr9ZndtUJN4RCP4Bf9xsYW",
  "key3": "2fziQRG1N9GiV8HycPrCNHCf64Jxk5ygq8piv3wQHVcDZ5MHjD8qB23atNwpZQmVNSHZLJM8J98aAsiMhfrzuy5T",
  "key4": "4hmoDkripk94L5DqYHFq8YCvXA9aLiADAaCanJcxjPEceBdquyaiztuZkV99jCd8z9kaLRNJyZy1ReFJpQvXihkV",
  "key5": "22icmczVHLHEG2tJJ3QxzFcZKexgYi54PiZFhAbHR62mJu9eL9tLW8YFoW5r17WnUcRJg2xPmFUcPVU3u8SMpwrb",
  "key6": "4ZwXMEEADv1fuaSnBWuSH9WHjqNWTf8dtfrh1hW3JmF7eZJ3a8ZCZfQXFR9qPrhi5YjsMYWD3d9iu6wZuVqCz8Uq",
  "key7": "5W4GNUiG9QuY7JxNuzpVR41edtUcn6uH6HQF6utGKtYNkrKbcMtN9BPuzn1AaCRBnNriZjGd88oQKaeiqyeW1b6H",
  "key8": "2e7UZnJkUa3CcDQT84CqafxAvBTgjjsRX1H8QEtypkBycuHLbsuQpxWki2xuz6dVitRqRyuL68J4uNhTEZvRSH7P",
  "key9": "387gQwYisCzg6sQYDmNzFKVXP1jVPXaVKNLUKgzGUm7AuGHJbRKV6Rrjr2NR62Qir2Zw5ChjjE7Yu4FkYjuBBzNB",
  "key10": "5voyX5idZJYEviqPPcXKtFxs9tBaSupsWTgMt39FaBu2etsWk1VgcD2bW2k3ESjNrcwQ1msNK5vVHWmL7apv9wjn",
  "key11": "2Q3xqS5SVj5KkjwnnFrSQE3LmRLVMuDdkJtPoMpa71wtpDCtEGLZvdNQokihn7WRrb4RdNay7zczdWJdhn4QDqtv",
  "key12": "372KjsVkBiHrKaNaGTjAzRZELFJvDx7bQ5jcXXcJBLMn5Bf9SmcwZa5QjC5v8qKYErzX4wyZy4wXxtx5JZfFCzjq",
  "key13": "5ZaKcrQwSfs3ySHNkPzcTY1ZiMU8aUDGH52cMaVfBMQ7hfz4pNP5YFzSqJEoEW3QZkcUgRWGjx77rzy8bE3YEALJ",
  "key14": "4YUPjg1MCFxBdVnz6brnNfic51t6QA7BUPLFWcUqUdJWFBXNKZum6avA9kGLiceaodpRc9a2pMgsj9LiVzHMttwu",
  "key15": "XjmKBfNoFw6pUYk5xqdybv7hMF57QFggVzUgVxMkxRhDSFwTTeg1NUcyWehmxYwmcBHXyzSBVtEZRkq7XTWF6x9",
  "key16": "3UVem45ZSirxpGHHaMfjuuPN2Uq7hV3ZJYrccDBYR2WLRUNP39XsgA29V8F23afYBffcKZXS5w9r3KgsN3R822fT",
  "key17": "5vtNDGAVMesn2CgjZjPKMX2FJU6HUsG9uJnd2jjMQ3FrE1USVNgX2hoAzAK9R9BAzM4iQvEAPXvTTSKfCVcPKFby",
  "key18": "VG17jGqQiFuuCTGMVXw5SDY2w5jueCDK9XGyJy2DFNgyKFx2M16y9hkQjCebryEwLakZ1gpgSrR3m7pkq4Zjy8p",
  "key19": "5Hfwm8sSzTiXGxC59uzThAGrnvYpeHQ9TwVaTSNBwsxfagdvU4sEz4SjZ9H7GjnxDvZb46rr6K8Z5ZKVP68P1Fhw",
  "key20": "2JLJCGMr2U2kNeCGKXncXZdXot7REuz3zrvvf62U2DDvRf6sWsrJwLZT7VZw6URrZecyHFHWjJVgQLzVZALesp8M",
  "key21": "5afPFBonD4EcJmcXSxRe117CHHA8NtQj76x5yK2pEvncEeKWyCSTnBZ58k5YNE6XwzZ1bBbHxDt3nWNEVncWidd",
  "key22": "2jdkvSXLSF6x7fNZiQJDukuHiv4ZsqSSMeLXorkUWnL3angC5LePwR8BjsnnTRQs8qFS91Yd7BUbZXrchGwnGL42",
  "key23": "634rNrKjDhioFSrAkncn3RgmS5pf9CqTk4UH9CYhgKbyX7BAr5VRYbdVuxK8b5L159EyTZnUWQA2LQxGW2qYygdU",
  "key24": "3VeW9hZJ2y7QCT5MStoXP78GJZnzBEkyNuMeWkiJ3r6L8CggzfskHqkaDCQyceBLptG1Y1umCNT2CJg9o8DdQ5qk",
  "key25": "4RcBa7xqrurjbbZ2bNz4DcCDg66XtStMvbmnjg3h7mU3dP6S6g7DtXSATkXLTKPK8fHYQ7jZ3pnsGiquSSCvGHN4",
  "key26": "5zKAsAedKg3BJNvFe6oJey1WNYoHrYk17yLMBC2eKP11c59mNn5LkqM5eizgoXaZKy6uzKc1TKLoaEvPZ3BKoSgc",
  "key27": "4gCbtqZ4cEg6Q6SQpKPFG6rZDgdCBzcLoMJ5YkFeZE4srnA9dNWAa6a7X5xr36ovtV5mzDFyzBE64jDjkQ26MriB",
  "key28": "JyW8PSJ3Ls45AqmKpy4qdvp6FPa39Tu8NhJ1P3Nke26RkKbCFuG55qfkL4d7g8L2d26vs2xr7iDYkS5G46eMSKT",
  "key29": "3jDcrW27eWPPBYVWKjNWM5ecsVidbNTfs3nSLzeeuQfK2Cypj5PUeBV2Yp84E6tSZergQcnrq3RpAN49h2V3Atih",
  "key30": "zMyKPfMuYua9QuxpXFRs2ue9XWS235kuDJSLxjC8YW3FpSaFxEzadrtgFfkWwft78GkDPShHjU4Zem6hSQWTyVt",
  "key31": "3FZ17C9wdhfABAy8dJbYMDq6NG3na6DVjsr9PiXd6guUUpihTC4vJHc3vL1iYcYUWnobY3fN1nSV277LqAaPxkXH",
  "key32": "3MxW8HwgMW56xsNm5X8BxQ2bvAeFYVZkbMg1z1cvuo99SVTsCAjwKjtTvRrExq8UYv1QrctouWXxhHodpT6XChX",
  "key33": "3SJntbq2cgwXmGgqdwfsC7RwAj4cCCm5GmNo37tHGWCsTpWDxtKpXTkwakcbdKFDCWU81j89ZhxFEdcRjkhpavai"
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
