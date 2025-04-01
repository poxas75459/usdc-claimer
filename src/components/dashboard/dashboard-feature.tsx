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
    "d9Qe9NR1RtZt2xKT2DLFuoxQbtZohv6Mi759ohXQ3ns814DjBLWavLzqs5jLRR3kraQXj6ypVozRLYzyVDxVKwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRCEx4r3bXZB9Hj2aPULE3DwE2rA8wYon7TzLfX1J4CbNz7RDboYdaodTFTUT9mEf6ZwXGqkLER5uFecwqh8gkP",
  "key1": "5gxWrwWJtu38kJ4LbPAGGfNidPcoZC4Swe8mU6G6phikCAXGVfCdoM8YV5TwwuGGyWXji6Gfazgx3rH7k5SiSrYs",
  "key2": "5tzjB6U8ErFpaFRGktkC4ynVmoHCPSpMxiKdajYf6GJqFXCMAZviykP4izTwFNGz1yT4yfY1aZEiP4p1HaQGWB3i",
  "key3": "4n8PobvvPBanFyyvZmAvMw1nKmApzroLSL6CDGQRon3rZD67tMmv2VDo9ekDLyN3gYwEmktahMfYoxQJ3ySad3RB",
  "key4": "3LatifoGyFV9CyCYUyaPpUfq7hkYxfhzdgVeWf3bUpY1mLeejfJTZUTaSP8ghEHYPuLw4gDU2428tagi9A4dTd5E",
  "key5": "4s1rXAxooKsP1aG2j5hJvcNaAxNpxqqAXsGMjamMrSXARLGHHDXBSNfYENWzSzXPf7y7tXqhyoxi6P3XaQJjKv3c",
  "key6": "4eUdqhiB5hnCUZrwuenaHpnhAm3Js2yQZ8jLxMNPZyPgnGXxhb4kFDs4WTZWGbo4uuR9nprZ5pmBr64TAFXrNJqE",
  "key7": "5R4Lexm5ypGtw39iqeUL1rVC3pVfs64cAfqVKqwdw8f4X4BFEioLbkz6NtPjr5muJquRDLynWNq1cjBwWge22HR5",
  "key8": "3XxMmr3pQF9EVTJ18qMbuE56yyCBo1puFGzhv6MMzY6Sj916PRtE1pBZFsEEFPjGLHJXYJzTd7UMvWdtEc4bVdRN",
  "key9": "4nRzULYifdBfSUnkPFacxbmyLTuMS3WEL5g1orLMZT5RB5ukaH3zWvkmM1fFejMWFESDrvYK8H9DfGB7kFCYYwz1",
  "key10": "5V2sQfxZFPprSzCxCVGhaBcCcDvEy2ZXPBucJKBpFgYWaZ9APLfXpBatjAi59S6JHbVaKqCFT4FZKcgWMpuQo9ij",
  "key11": "qb3sFKsDjaEeDtCRTGLroipCS1etTZdkPBsJPkMcTPEiA8t2tUUs4T22b8vsKGnYMVaM5nUKRogHzJxUqqe83AX",
  "key12": "4bxSg7vPfbUakf9i5LR3KUk1cQEzhrUBjZtZo5z7Eo7hoLyzMsMjyeBqznmftcxcEFgT4qHx6LhkbmgWd47u2p5f",
  "key13": "2JM1qxKF8SRFMviF35FEFYVBHVoqDfADv172VBUkrydpmDriRHx5vxUWPYdPHw3exquFmAc5TAAfDnrFmXtZFPkV",
  "key14": "UBqsxaLoTQYoNtaqKadntHuhVWD3VZ3sYBhpkBtfAJ25jeSN83KAsXJnHXvzYEUcfoAptDGrx79dusgKYjsFGvK",
  "key15": "5LyDMVfWVpjTFkskSCdJbjXsMa4q1ZEFHiwShAymQZLy1pEAgn3jYdX6m97Msg6BTZH5x6GpBfUkMZZamUrcFPmF",
  "key16": "223P6NjK3tEGB25VDXZwoYgKYfYekNgaB6DCzKnayzaxG56W8DhhoJEyks821MNkZpW2kSDWtUsi4xRTH39QQzr8",
  "key17": "2EKUN4mLUi52YDsAPC4eXVFA9M5LjydRaXtJp9axfqeQCyaruTk2A2jWnW4BJp6mDWs47z2kpwudbP6aQ6bmkA77",
  "key18": "3a3E6AHsc7fgW53nwYdDq5oPRXkBUJbk2m14kex31Qvu1s2mhRstmDtkctv8MfPP3B7vUpbjTVKxQrrPspmkpFG9",
  "key19": "3EMasekSpLe7sjkA4vvgdBs5M3BNKoYEWS8r1NQ27hscNYahktp4rJ4aYA65uCp9bqtjm2YFSwoih2aucMkjPQ3g",
  "key20": "5B1TesecxzH3ycN84QQXbXYsxSC5UHH1taJP6Vxs7f7kJTLZGnWNxvascozcDDAnfURFzdJpSkbzA2CMG3jTmSiF",
  "key21": "41BPRfwgnYcAF2wMUJ1K14jdoNh91yeK5MvUPjpe9kewURezVCUPbQeveEginUwFVThvrLEjgm8GSMHWf6ih2bsw",
  "key22": "5mR3Qd59avbvrmMg8BN39VKpmrcaeo1JQzBwtwvTznrpzc2FMToW7STs9mAe5WpPrutW5fh46PbJti4Zn6s7zBcB",
  "key23": "iAfYC7RZNt4Gu9pj73H9fVSBBKPDwCaV8heAmAtzyLPWDNwCkdozafsD42WFkjizC1vyesJzCYcNJVckXTPhtaG",
  "key24": "3ttgziKAy3zY5kuHdSoBmFyRdp21zkVTg8qZeVKiMrrjiR99uwUTUf5yD6UYzv7FU5Wkgg4C4ARkmoGJc5xJ6Ari",
  "key25": "5UMAVt1aWtZW3C2HqBhg9RofKgddXfpRkMDmDh9JntdfrooqrsbiFfw5ERuuBS3Dt3SfMScfZdeFMsb9wKjmkgMJ",
  "key26": "4m3wS4UdAsLbHBNYyyRnkmU6EbTGaZYpgnPVRLdb6iVTvKFeHmREd8A9aDLDuyeqaWUey63AmtpzV7JDEWRewiKg",
  "key27": "3zr7wuyWr4BSkwzXsKuETL2BiXxctbgnf5CQUQrQ8DBuXdQPkGvjytXFkfSReejf6ow1bBmBQaPsu9PR8YMGWuin",
  "key28": "2ySKhfR6m6TryCheVtPnc6xBWLxVeXdDgW8x5JRZcBtTiYyxuSrCYnstDwMvvx69FXPPogu6yoKkf7NScNgACLKU",
  "key29": "pvwLeRE9swJbggE5WeCK4kYQvfVTPuk9R67knExyDYhCDCzmvvPon3NjbBmncC35FTjz1iNLqbQBzSnr2woAaha",
  "key30": "bTTyYiUmsPpamq5yizgMQ8v38YkM6iCPeVBD6nrWmeJj9gmXWPUcjonnx2F1kDFhHn39Fx1X6CZo2SScKDyhAxv"
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
