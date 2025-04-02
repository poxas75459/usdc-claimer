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
    "4EUqQdFvAyEAAicUvEZsHpXJsjEX55FauL49HT3fwQPmiitZpPGzwvCfiK1Zm4Bnq11GvJnnG9sWiDQKHvZQyJND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XmpCZFo7JcxwgV1kuQAAVVTTGPFy6xPD8fQBSbXc3Be5U3Grfqn9FZmukGmRQjYJ8WUuXXKmMw7tDicshWFCpUp",
  "key1": "492NyHoUZDs1i9wzDxpJh2BM84WCg2qF9HvFGeYqKUeYrQLSWQSmjFS23mtZiavL1uXNfLA8nCnZadGbvE9EsfRe",
  "key2": "2d2w1biZ3qFvdnz6aEuEKhj8QLMPbGnXPmyXMr7CheCaYhY9PeBpJdGygCMYVPgpyQ1iH9vVPGYG7svCsbE9xitL",
  "key3": "MrjjoJkxoa7P4urnDcgQPN3dHjKqpVPUoyH3M53gHm6Zj5b1sbrqHuiXgfjpoFa2b9BmjYqNRBz8jUdn2RD8AGV",
  "key4": "38uCSCYJkQExoWx9TB1XL1jfZSbrAyrekzwDvz9dvUnuDsBXJPqp8K7hAqX6hqDg687uyfhrcvrEvmJrfiwrbvfe",
  "key5": "5u8wyCVuhHrFzTNaWroRsS8JcxGAYdUQvSBhUkUcHRRboau6jFpxuGYf5utp2Chzr29CYCy6qZfM8MpYfn2mfNje",
  "key6": "2zfWJtRiLZhX5d2oVh8WQJbPWsdNv421FpqqNqCmhQ7Hh2CXgoyHt15vkCFj5CurAWY3qrXHwDzaRrVCU3TvCaF",
  "key7": "5aLuqFYao1prV2rpn8M4pmQTzWXUQKbveghg64Y2vqWVEvEyZ6qmQ1GafEWcNRsPsud4UZ4oip7j14r4h918XE5Y",
  "key8": "4SjsAa5nQGexLSoaEsJYGadC51zQjsDHrungT9ffr8Pq53BiLbY4SWCyeBzyZiZbB9tMKwA8iA29UoQusWoF8Yuk",
  "key9": "JKkJPmXcMUiXqNht9Ay6dc9Xa6t81h7JdqjDqKgsWsaByeVywy2SWjBcpmU1avAA98CJjcewRbeuk3C84cYmVTv",
  "key10": "QRKU7yt93H4ME2uMdPaSdmDZBxoMYGt61vXawokxVWG34nuqdezWmfhPK1TvZrGM2uXCuiagrVn71jn4HeZ2BDg",
  "key11": "5v4GSUY2AXCE4bNnXwJoRKUaP3fB3eV9ea35qYVHnQ8XcgZXJDaeSzEQPve72whRPuNXnb5YRp3iPAFkxy8iZEJS",
  "key12": "4Z6GyaJY4GXE1T8KMcM2MZVgPQe36K4cY6WwKXEHi3LCsTSqpxB9vqhXyDhfhYoABFuA2SGRUcjFp8fVsaEizwSS",
  "key13": "T8QkSVm9Kcmc19ukQ2VWsYkPikdGRBr6cP2kjabs1b45EKZpKynAAQ7KoLuGqZAsxgqDKHokLGWDPLFFmBj2F22",
  "key14": "3kNReAcDCE3s3qp8UebQGjTRZxHgfqTY1nvMyYiUDG9KsKUURz4jzmhwxVHyAVcLadSuoH7JQkgkb1Reh3NW5QWi",
  "key15": "5Q8qkY6gfxjJGfEAJerUm5g3m8RgvmsEL6dLaBCA4DA9CEuHJjEYwr4TUvJm4NojS1fCz2bFAfLQD6JbQ7KrG4ct",
  "key16": "33KSr3j4dY1DAr1CYTMgLWiqGQnmDXgWtBjc7vt3nTiJasK2FAsyzmjQ9MBH2X5itb7u4UtTjaew5q4ckxBSZYA6",
  "key17": "26McK2vMyapfw9xJqLDBPnGhSFbshoqocdZxiXMqUjPNMN4fpiskEPWbRWP9Y313wokct2G54YzjQveAVc46tLAq",
  "key18": "3mFayBM8Ev2SzinR1A63cbmNyXLKbf2aRVs72WKH1UoUUCGby8TBPvTj7KG3MSzE8citJtDHP8wUaxn1Qpn9ebJw",
  "key19": "3CyNqrcXhuaJhM78ufFku8hMUbKHBdzydkYFr9zmY36PoPd3CDVADCLdXYXDRY9aayzymozSLjP2moqxu5mLHi3U",
  "key20": "u3zmXVojJFgWcuJ1SivU63MotGS9ZEM4HjBPFVaVe95GZ2b23TF1vShaNk97ofZ4ZvFCGDkXLe2TDNguyt3xpca",
  "key21": "43KBS4RUpqcpQWh1tuxzbbXzfZxFhbbhwFySncC13EFyRH7gfVSSHDrzGFhoqxpYCGUt2YzrRkVwudSiFUb4VDvT",
  "key22": "34mbZ4NxHPvC9tnJJQFdcFrRd1q8QRHAxUZY4w4GvLaqYRDi1Zf3antkM3ajF4WqTkJipScWrks6wJY64E7RmH9w",
  "key23": "5i9H5HHgWA47WVT8WM366N61Q3CGGGhmLj7QGr2FXZFoB3Y6JWRUCVozUMCzdaR66BLR3KZgvsnpipeMMwbQkckj",
  "key24": "4KRXFg5cAYhTGucrtx6e6hhGmWAauf3nUPtgtDn89wMVMRJTBNpRs1RZV5C364CJGUKRd2Tbs7FGTijU9nHBUUD9",
  "key25": "792Zs6pUbU7YpUULUMNaz3sNit7QEoeBCgYVNDGtC4vjHz5WHGCo25aXNYUikk2nUsGjiXj17jUKtTodAWCiQhF",
  "key26": "4ZTzbHtqG33vSbuVLa5m4UtVr84HRuHgC4LJSbsryccKKU2kYJEAUXNeJqMK2wtYN9S4sun2JvyrKxwDw6UZpiyX",
  "key27": "4biPrJQurdz9CcD6BtRqcJAHcn9nFL94iUthkKrKATtubVgJZw9KNPmXe9dBR2BYgd9bFdzLRpoqwRMQQmaTEi3d",
  "key28": "26XsZkUuiWqMUxYUJaE4G34DdHcGBVcsjEsCsszL9pfAbrBGDHHUbjUyBE82cPL3tGupbjCXpcUxwftS9UHxfjZr",
  "key29": "34RqwnuxY17nbFLBw5tJ4e4bwU2itN2BD5XPnZERZe4EA8UKMGrr3aQPkbiRMjemYayhcYVun1AKL1ydtSHTx3he",
  "key30": "mdAsZG9dg55ry85xENuyAMDfad5fJnSJvWnRNtZdbRdTTJJDAS3qokedBaHNZG9MyijL4c7q6maSr6Brfa6AcSa",
  "key31": "2jVfNrvSrQWTdivV7v6pE3pYGQyUn8NMM2pX9oDqFMesDZ3RjqNt5ZribyatW2biFEvNxFxZUR1k8fdfhstRseWs",
  "key32": "37R6bbs21K3TKmmF21vYrjz6Bf5SowRbxZnWYbL844coG3fKwp66NV858S5ukJ222dSmCqB7VJY7aqKpE4cpYfGL",
  "key33": "52MAhqMnLzwyUup1HDRUg8BCJQ66JUQVkwPPZ2Jbg2D1Xbz22Q5wiADq3qptiE7iJR3D2f4cc2Kjrbbqs5xAAtwu",
  "key34": "42JYELA6btnWLbEPDtKNPmQMgTivardjHM8UdZfp5pndBsKBi9pXida8fpynFhW1sZBcXyDFRocMMSUYUWWR1W8V",
  "key35": "2KZohZfX9rSB5krUFK5MzSZgR4Kme5uazqB8exBaKi6daFaXa9RGKdtYPK8F8chX6VZ6sufSKhV1XLgTmoyr9Dch",
  "key36": "EX8hvd9DAyQR59do4bVheb7vBzSGk17e3L57XBGEjV58W1Qi7BUCcso2C2srSdtHtY9vvfi32shpHobT4h2Bzxg",
  "key37": "2SYCWdGzCqYFP5o68bU6rjogMnXPhfL7BgCn76LW7x33Wpov219jGYPmJq1BKCHC53KigAeEvWbd7hN4YVHyQe8W",
  "key38": "4NuY6oatq6RW3gnAa1qHaLu2okcP1ojVfSUG6wuxke5wrLexBgUYi6J3Sfp6VEndgqpF36KEAJvsTz6H4YvdVjif",
  "key39": "34mWQtAFrvqpNky27oYHpRinDmKyzormU9GELyNKTGd5GmZwbH9QYA2jhk1QGoMUehjTvcQWEVutRBTjzBB57sRw"
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
