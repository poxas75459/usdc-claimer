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
    "31Ev7JJ9cti6orfbtK4X2FneiiLoim5JE4sTSZ8FhvyvaRGxQ2rdCBz3wQb7Mv3LKW1ZsoftFkgWwVm2qJo2iorh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R1BZAqr76jNUQZ9np5N4F18yo9D7kKaP7hr5THvmKJavbtJ94Z1C5MsqB8MKTfus4JQrfVy4Sg4TzPNBpb7LuG8",
  "key1": "2k3VwaTXr2x4SwjcHVX1UQiVWUcSUujyjsVbVXYdu6dXH8FTGz47f2jx74FXkWugnSCPFAekUMHU9jL4KdKJ3qAT",
  "key2": "4iPChocqxW2aQ2eKiFNcwszds1rGQivUHNQ4fcaQ8ponfyp4DKAfmNwwJHX3qaN9vM1cS3MjzqaLg7xojkMhZZaJ",
  "key3": "3htvVTH5JMBCqDVE5xc8Cm4PwfGDytNF11bKoV11xpuQjTjT7BBtjUa2xxEhumxLWpoYpbDGnioXUgQLNxr15vQY",
  "key4": "3whwg8JxtbWg83sw4E2dGTPhafbFTwtn6M2sanpHxrmqC1epbubPkmXqK6HgDqot58YPsvCwZZbF4QRY5ZwSSoEx",
  "key5": "YRdMAyit6CgTqxKQ6VUhUZEUGQNzrCDjBKzWDCYAD7RUm9gXTeorQCwm7hZFskHokR5TFhd5YR4kW5FPyoDV8KU",
  "key6": "3bhcvGGyrCUv5nj8cAwQHvvdjBV72W3csD8yer6UDFVPnm4H972qRxEGj9qsHP5DWqsk85p6exRaPRLvHV2Jg6m1",
  "key7": "WZj9cDeToYPMzaFABMYCMX42PghhXNyH3hKRobVaQf6V1Pj9VSNaMTwPHLRPKocSEpgAmeFcKmobwztcergRj8Q",
  "key8": "3TQfqz65UUkvgUzQ7V4bNF43w1d72epR3pRLWg8ZfP7uezWcpVVyuVqZ4k7PtQsDF3vLkDVuE61gLmVR1uy4dqfJ",
  "key9": "2wnJYKLwhD4qsHEuzB2noo7k4v149DGG5PqfXttbNYGYnthDAhKBQBCCpkUSvUXTwa4UAM4QE2WonctoXk4wFhgB",
  "key10": "4NnkJj5untWLHYCy6RsfDWcoNSBtFz2jFkJizh6shzEwS1xHMbLR8RqyCfxtLCKxfKj3mSTDaRRTtW5WFRt3JcGo",
  "key11": "aQeKjLAMzkFABUoMnzkeNce2ezvunqYKKR7GhS393HRbMHmjxRBUU6tgLF8d7sKLJo9ry9mw4NGAYLDBb1nx4VJ",
  "key12": "2eqAWyAiW7q47XsAtFa438VZC5t5iD8Urtiy7YyYawULAPRKVAnkJY6bfQJCM8cbEdX6ovmLyZw731raMe3g32z",
  "key13": "3u374xgHZf9W5pcyuunxdyYw6dd7RsJ6an1bh6u5t9P1Fx7772eHAvnEyKFoWxZDCQg24hUbJks4vaYrxMceXkHo",
  "key14": "5iXs7MZiubfvwecVb77W25dBUE5Z2UAzJjPumfr3mDhkpGua56zUVLeeJVy4BgGkaZPuH2yGkZkEA3P196eZV1Ly",
  "key15": "2JG6swbDfutcetbRJfQEG33Z6jHs2znsbMXohdk25DYqhoqm5KRYGV3T43P18DayQPj9bT8NTuuec59eDj5nYKUC",
  "key16": "rhvH5sSdaw3ccGw5ju9g3qSUaViM9mAoDrgcsy1oa6myGd1LmnrTEf4fhApM5j5qDLWp2U5nUjoP457XvsgiV7p",
  "key17": "kwkG2jCcorwFocpKrfhn2kNwBpKxgPifYZgrfiy6qYogQfE21yuS2e6cWTxGf1ZvzaBQUhQjKxJcEw5ULWDKBCR",
  "key18": "2QPr7GsMf32EhSWqLhw3NrPkQEW6yEDjQRgxvPYRseZswvBPbVzNojUVJXRQRJC1bhx7XChmJx99Ltb2xKiMtpWA",
  "key19": "4JpZ15bmTs1HVXaUmZQjxPCfUpZFLjvZbwe1cmmq3VZBPL3kZRzFnqTFUnipwvU5yxHo5RDeD3DfiVgGsA5SKhpx",
  "key20": "5Do6wgmS9q1Jo9h2oEU3T9m3dDHJgoYcDcweiZ4pkAorAkLKkpP3d1WhZKb3UQeudbTXjeMioVDKW2XP15Z6Yd3W",
  "key21": "5EpiYEBEcetMJY3V8Ahu6cHKmgkNgkkB7qpTXbudY8pPnAerB8jLjefGAQfCgdzUijsrQtHGfY81uTRi8CNzpUX2",
  "key22": "2Dbx7Kmdx68Q899tBmyfUPXB5nmSX6CsvKan2LnF1msGvZKpNDUNiQ7yEKEh94UeJXg6qwMjZox5KRT2ikguiAea",
  "key23": "2diVhoj4pj78DSS6skSSHFnMsu6WNdGPkzrtPU9UcWnuyDsFgYCzqFUcDuVacwsRyghzasqH2tKKiq5dhraXE6ta",
  "key24": "5aezpmmntMdsppCCnBSt8f1wCcPc8m4etnWPQfjnkLSjaKevyo1yHpw7vYPTe8eTPcAeNF4A3hVJtsB3FGKEDC58",
  "key25": "42F7xmHRCE8fXgKGPUo29VCXXaisJs8GHE3yANyBNgdfikKF7QK4i5Vycu3zVZV6LNVA3jxcwJGZC9EtpjQSZZFD",
  "key26": "3U6iGaaXKPvjWtWwJZ2mSmZVWgZEY78yw3oaj4tHW8V1yGAYAoK8ESfeawUbFJ1Bz4rihHVPwaffAxTmishSyBcP",
  "key27": "5UXCgCWngreUc64nQBmSrHr7Hv4j5asShd2c6jGeVTqPfr7gR8QsMzrbc15ge3SzEXFQTMgrd23ccnz7q4vxeZP2",
  "key28": "23u3a1e9WuBdYLi4m6VnhVDRsY6ZLcBuSs2XBZ2fQfgp4bjFN2oiq65afqGx5B6MrNJc7F7664QskCnQhXVA5UX7",
  "key29": "3pVwjkYLQ7a8fipSbf6bBqJwMsSMebCHRwv1fsjvWZ5SMoEb1JhoJqzZ4mjHvd5ye6M3xTsaumq8B4gFNkUq99wZ",
  "key30": "5Cn944AEDvp8FjbWwYmxH1z1mynk9N1zGQnBEgDKM7FTXkMF8dM9rbWryV9wykonQwHFGujzJBe2XvsDB6rKCMp3",
  "key31": "2EV5Myi62KGLh5nHYugpvCDy31WLDnYu2UDqPuyWeaPvX9fxUPzWe3xCAjEZgK4WmS9UF7bk9tcspTY5rwnczYFL",
  "key32": "3YiRHYzbH5rFjj2KUf1cGXKK4TK8yPQwvuBeXsBbzCrkBhE7vCVqQt5szRDQuc9kzjuurP1FDMHH4Ta7i31GNXP",
  "key33": "64woisDzyp1RM8QRPkG1hCUAmzwRzK91vx9BLAgCwjEdDtSYZCqoUvVS1eKTvP5FmSLjfTNwD6wzw1oxVyAD91ak",
  "key34": "JG95BWPDCyYo7Qvh78MBD12buEXsgMbAFWTyJmszymaieTzkde1X8HzL1PFNzxuCMCYRGAHoeFy45t9WajKjyPh",
  "key35": "4hXyEYNio4bnH8iG6uz4VfXhwMEqh3bkwvhS3ViV3Ey4uziVD8VxN7kYBQugrV38UhJr7xtchdgRhb6jorMNm1bZ",
  "key36": "3vsuWUcWWQyCfFLsXz6ikNdicRSxa5XCLygrZv4YCQGevJMpkoWWiik5CMMFtgNxdZ55QKWFBGrigQnrdebWV8ww",
  "key37": "4Nnjn2Kf6p6hTDiyfWgXSxHo7BRecyd6RqNUYTe1bYgcbBfu6wU6DdbW6dXqCgFnieFh2qSA3dCXYHNQhHpp4TRQ",
  "key38": "aYDVaqaD7xQq35bcNf5QqQobjwmZSRXU5QxYJLTWKSpoKdd8Dnw8QQ2wWkYHfVytzVrp8HmTDWikKvUDG1EhUS3",
  "key39": "mPzSgdjz3w4mEFPZBEBwgB1STdJmoPMrtg9gusLGnzFqCrkhSDBeXvHjstMfN664UkkiMT2N1kUUTnKDCwjfTEV",
  "key40": "fNjSywPynNHGuWVKQTKgcvSreehYYwhKpML1yF4v7pUsR3se3BjqKu3Z8NqrVtniUv94MGjh3MvPqSZ6a19Fn9z",
  "key41": "48khQbdmYgBWkcJo6xQVge8EjcMdrXDQcMTujvGNHPLa95y6mPkRLEM1MK5N4qAgcM6YqawgWJhUFGsizWix6RAD",
  "key42": "3FF14LqE4n8cJ7eBeNa1dg7b8oBVHcgk2VUqsPB8uupwvkDq9WpX6TvZedrqJVpnWVx5SaRVp82iJgoNPhk7Mb8b",
  "key43": "4HW5LCB2qWmQd9ZGJjSfmZHCQrDFaCsFrP9AmYWrwMcSoZczpygbZEWn3SA9zRWRTy4SZoaWzXrTG2JP5jRwDtox",
  "key44": "41sAPrbSH1TZMRk4ot4tyShnbnJ45mRrdxzTuAprQj8pqmooN2pjgF5DJVQryM1uqbRbCMqitHaYSSyBfS5E23AY",
  "key45": "3SFY1f8djexSQHH3QVniGE8zhjVnQ897xVwRSioN8xrWs16ZmawZkXyLrofwhxvTwDGP2BSZUYa4WcV9qLZs5Huu"
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
