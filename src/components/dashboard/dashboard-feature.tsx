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
    "FXZTetUMFWR2QrBgCo5hyfhY3fzwvopBvwSdaoysUeF1S4nmgvS4NVpbpAta4m79H6EqanPAjqz7XfPm61oLa9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "afkzgMPRVEitXeLYp78pHrK3VtDjA78HEm3dMQKm8WYj4qwoEUjXGMPLWiZ1cRxt6iDuy5eGabxwjEpVW9zMboa",
  "key1": "3YT2gjE5QufC2xtShWF4i71NKKNyif9TMmqc778WhzrAsjETYMk1FxCtPPipZdMbYAaD7aKCHrV6K784AoMFko5Z",
  "key2": "3gk7Yy6oJyFpXnWoNhuMBDHBgQTcX7aaJaHhTooxuZqrnit9zs7jmGWim35h7nByRjoSV4mR3W3uEbopxogtUKE9",
  "key3": "3r8ipHAnczt4nHF6Xahf1Kkko78KTbJwTSFNT6R94zvisKtrJFKebuaeXjjvdErMYV3bi6ELtrSdzDR3zxZZqFCU",
  "key4": "3BA3j1HauiEygTEQ5WRmKADdLrbkq3URdqW83oo1YcM1hQ9EQ7ys6cL8qMrFwVHW9cBzrBDr1gk24Hk3NUGSbHZW",
  "key5": "34Qn4Kf4dPo9u35XUKo17WUA4XEwjRuYSM7szQa6WR8EgpEpwzymnDhFz9EEBBYXMDxoNhxNWsNu8M9718GMVxFi",
  "key6": "5RhYtxdzHm4b2Ftcin1Wu3RPMHr6w9QoXyRM3bT1D4uQWDSZRnkoFUxppybv63tt323dLWvWp2E5m5kx2DjEDnsz",
  "key7": "2Kt9EBXKCpoPBPSYFz4z69PGzHL2UCrvDs8mQbWwDnSzggN732mJjNKeErhVwFisVyWVE4WLBjXLdk73MzaFnnwa",
  "key8": "GB8NwFnzdMVWx45S4YmSY5Dr1ir29zc8Bxo7KX81VTK2AE4rBJbc5BUwWqZ1Kp2SKnp7p5VaAfUviewxRPo6nYM",
  "key9": "3EVoCuHJUj8pE4LWHjczrQy57LagsCa865YpXQLDgH6UBBe5ybMnht3wrpzrgBkgAgdMDU5m4KF9xKqaz8JC57i8",
  "key10": "2yQskPH6NLMdSUUTuFoGTTNMnKHXpXXmP5uVcsZVZwcA433kDCQBcoGv2E2uzEvVW44tvpwWpWWCko64zPeRDet6",
  "key11": "5MF5bGCZ7eBJhWVutTTJsE255aN2r6THeTT1NTq1uWrXNwTZnPw83LJoBonRSgdLA7vvagQU9U6YehYioxF1TcH6",
  "key12": "3i5P6tKBmmJhr973ZQF3DDWb5GNjka3GMEXujsRtHTVmkC6NAVZDuueYCHic7TuhAv3N9TF6fgjTKiGsnGa8CgiJ",
  "key13": "24Wbh2TctDxF4affWubXAVVnshNKWedXAvUBaZhMaScZtLodXVaAHc19hADW787WKGVag13n6grNM35X6CkDpFAR",
  "key14": "5xL1P5NW47A1JwDziczYsCXTsTDsrbEMSWLoEvT2vc2wYdaoPj1rNFDZzH2o9tUpRCXQGUEdod4JUgumATAdFP5K",
  "key15": "5J7e5Et7bnV2qYeh7Y5H4iZ9HbVCCh6E2HxbXNFaNMKbFU6mhyqD387SXRtb6HYXESbDFtH9JVL523JwkbCkuKSW",
  "key16": "2RC5M455b1xTJc6GkTLgozgU9yr7ttiW7Y6S7TvGRKPhommnnyrAtzU8sLbvYVhujdriRU4k7RgUNDKYKv5E94RK",
  "key17": "2pmEygvPdSVappKjVDzKof6vMmXZc6yhrtv3LT3ymCwqvbJtmJhHgwEeSfKRKG7r6X9dPhkyqnNgJTrfX44tQR96",
  "key18": "3Q1nXumqFehpoVPNaSazXhVi4Yd8yQ6ff7mFUUxptVpSy4p8T6QBxbFZzVhcV18CCZBo9gJChJfym4uxbSGA71Xi",
  "key19": "3zd8VF88zzq9nQvbwGZB7akQ5reiXowikYNE5vHRnjnJN9uhdjB5k2NSFCeEuwQThRo2598HFvTaxWnFAogguAGQ",
  "key20": "N4GyvSNdZ7WU5vtbbe4GJ2gAH8vM7REfyeZ1UvWKi79RkEwTk6jEt1KDaUVSAQMfim1zeAAXE5Q8vpDJ81REiWJ",
  "key21": "4fijHgeA5ArGMBzGTkseizu5hpxbh6rMk7PrrDRBhiuRiNdAwF1A9NkrpeSyWPAm8tHdpQHMYPAZUnzXv2cfLGbV",
  "key22": "5bxmxseGx7ijggCb4udsxPkq7He7Jf9javNLkknhDaU523ujfBaKL8cRt2PUkyLBWcU5AxGUSGKEf9XhZnndSzUd",
  "key23": "2E6L7Mr8kTRyBJs72DwSgsRcEDuo9iwZQj52Ptzs814dpkCcbf3y6GnkJUrPXe8fcYNuVSfkBRQMKwosE8dZHZ2Z",
  "key24": "4midaiFupf57kkgJem5YTJcSK2s4uqBeZb7ap1B4GGqt9ULCWeYZ3U88tZjYtp4sG5S93MYYrhhzaZYsRdfjSJgp",
  "key25": "2DPowNYBU2etvXCdEDfXX6WKvqfTxmNr8Yn37WQu3DL7bnimWf3R2cHNLMdrRcVty6xR71VaSm6dgJDT5PPwAJgi",
  "key26": "2HLjk8WZSB6xASDu7m8mriF3zzmXY89UEzLvwbJftAKdCkyKHRsFwFytscVko4gaM3BcayjDTELf1ocPkSoVXHw2",
  "key27": "541Qk2fBpKJpJqXNC4e9tC9jwz3cVsBr66zYFzT35K22pcwoYpkAD9nFXvK3BY5nHYpobzmuMEmG5ZYfPSgHzdbv",
  "key28": "2t94BRgUJ2HFA5B6df4FmvCBYFibw5H5BN8wEDSs5sQFcs6bQiueJASPqDW2xtSJvx3QVMB4i4VKLquTfwYjEwJN",
  "key29": "31mkRZV3LkabNR2Msnn94k9aPoCr6GP79iZ4RWuThCSz3Xx116YUfrBJpTFmKgdyqdankZoYu4s3QKSo3ffcspQj",
  "key30": "FDtVVPbjKghziS31o1m4n3Mrif9SX5dVS1yDipjZ9FSSvvt3qerHAGXsENSwug5dzR8QZNbiJDdinxUFpXcsimn",
  "key31": "4bv92erspiHNmYMfombc854zVUXCQgtPsQvKrPNqypeXhVuppU2BMMH2VqD3EYWmHFgd9haVahKZadEfHwsVFbpA",
  "key32": "3mLHTresgH2MG8M3qd1tyVvtPmvhPYNBhAyJXqSaF7BnjKufFWkVo4GaVhnc2qVLtWWCpLZ1FPtoqUsKAuYmJwgS",
  "key33": "2WCDdvvyvJNhmM5ztS5BQ4D7LNQkEopzdHXKqKqJ5TU5PoJpZDTNXBgCE63a6wRxmEZpaWH1XaYUAfZHZ6HnuVuP",
  "key34": "3NSPM7tphfugV3fkrdkTyh9sRA1mDZGjkiZSUucq66uRLcptVQFa1Yn18XwvKjvWzZmhDb21JrgjsbUk17t14Hb1",
  "key35": "53NNHvkbuVzn4WHfWHDhztRK2Amrfe4EoXdqhAc1vqJHxrUmGrCgJTPBDkoeyJ3XhKmJiX45UchoEG4dDkdFZfiz",
  "key36": "4hFZYcY8cUczC75gpXN4YQc6HYvGdWJh4zM4UDL1EMD5ckmJX3RVtBhBb2oMGJ22jSr4nGTLLuct7X4veyJSrwJK",
  "key37": "63LBKANNBV7UQGGCyPAyxUWZpq2nGtpH8hsfkBDRxRTUkDUPcNA2bC66jns4VE4tbXa8gUbr34rCDjs221YkbNYE",
  "key38": "482JbAsSNnA3u8ZgHfq7NAQaegP1Mem8LupzRqgwFYta5V8MUaz7p5BYY9PuF6jwgQx3RDUS77muSGFLSwbWKD3V",
  "key39": "FCaqFwHzXmc64zirR3YryT5GkDTFZ1Z9AL2xyuLAHKSce9R2GnPN645CDjK1TVNChbFvkrcPL2tSr1z7FADhNCD",
  "key40": "61XHmCpGSdn5jZyywZ5rAi8fZXn483Rg9GFKLfvmfK4RMUNSbn4Vqbof4aTjLvEmaW6pGxhHWEwGsaa7mFJFYEWF",
  "key41": "62Rx3jNqGvQz5ByUmTazx7E5Pz3EkUakRgRdLZw5nbPxYazHtaaCfoeaWS1ymnENkwyqMDxAZYeJ8VVEyjC2cysM",
  "key42": "5TGKYuo3v36pBKEX4Qb2wV6Ms2HYBsrNnfSYGVNqxsw4i1CPH5p9a9yoUY6gd8KsxzNwejt11WtS2JDGYzp8sZwQ",
  "key43": "oDsFLqVmBTtGv5UUSNDoBeFVKx45Lnx7eaB1eG4T95KzieS5L4nq9ur1YP4XtWR8zp2hk65Z353X834F68ZDpde",
  "key44": "31X5RG5qmVueFyubQTTRHKfFRsFpJuqynXwmA4oDC4zn5mwMuDFQSR3LygB42yQanNSCgQbe7knsijjHa7Pr1tTF",
  "key45": "3Um71jsieDqv6WEzgUXjpXv3Zp64ePthsrEKTF8nSaHLYwfz2pDkTCdQtqztbxF6WSk3MauSniVs6vGoMtq1emnV"
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
