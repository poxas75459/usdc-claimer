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
    "38oiwbKqYZk1mzhWfCB3sqq6xQzPTGzpNWwdkfvD8Jip7Wzr7wMSFCGovax5bfrcQ3D6rFfegmiXLGUqvdxgFUdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vgCg1yCeCEWpu8h9ywAtj5LXqyXc2gMznXkg2puRmSLWeQBgZPp4WDpd1FmLaorcLMCufbXpb9PCP6NqaizWUD9",
  "key1": "4YSgtYLAdsKxiE5QKU5XHSDZg7Pr75UnxPoSDaf9XKYdSbtngJ3RQQvCCb9qD97e5DnRUodMG6TeycTkTKTYwMpS",
  "key2": "57w3er7gLCGSaw8kWTL4QzkjfAsqzhGKvEUD1Ajk4wJW6BL4o8JPwBzth9c5RpZRZAbsHHJtzEu4ZqkYyfn94t5y",
  "key3": "mpGJLvqZ5PQbByBHekekzRgtAYNhSfPLGwZfCtjqZy38nPNN2RNDsedee7bocqTLwTVcwThxf9twyNEfU9oM7wi",
  "key4": "UuwSKbpkno6jokwwhjxeaZMXehDLb4cvR4pXZrc8hKVrYMXyN1QNBy41eRGX7AMBSMiNxmQJeTLtBqXBxeetdAb",
  "key5": "5qrLik6Lyq2d5PiHxST1NTwTNohxrRxaBakfsHV9aBCcMZ6934uY1S2tibsKHCwL6T4KK3TNUMkm8FztKwSHQCk3",
  "key6": "65vpJgMakDJXHYYBPQHVoiZqFp1PqgsoQDBEzDgyRPy5EmVPYdhuySS9hxuCt8n2joy3mzgZguggKBJYR5Ywryxg",
  "key7": "3v6n9JXq9ocUc3S9b2DDTce5vxZsLtq17Y4mMmGXzHffeTJa4sMbyzcLwmLgsxTVC4ro2AjxgWLusCJDj8g5Sbt3",
  "key8": "4qrWs7PQd88cw7ackBNUte9k6GpdiKK222CFqnsk6nkT8WHTpJ9sw7CnQQGCohqHjJLTuqhhJDJVZvu2uDrqdQuH",
  "key9": "4ddgYydtatz5UmgPNEiMxbmkjxaZJetQCZfHodkjW9qwSf4DanVt1qoo3Vh6U5WVUvEqCxkddA9m78TnF29kHvow",
  "key10": "32rCokLNmJzteM3hsWty789k1Yo1G5AE7NJmt7Sxi5FADdfTfqvPGHJL5v4KmfptB2nJnjfmrm38cRtu2R4WEU1K",
  "key11": "3U766UcWmnPfKHFZjU6fhyRGzimyihB4RbnWyGSFHRoALf2BJCFZsVVm7AgcaLoHzQGXaT7grAePUFB5roPyUDHY",
  "key12": "2TQppRKmufcvgzRKVgwaSkTZXPqcVm3j78i6dEKFQXPndDRA8xHrUaVceWUfpFPjNVaay6FPgzgJqusTGrQ9LHb3",
  "key13": "4atg8KABmmPDMicHcmj7iokoFWHW945EETQRuKyRqtWipmBP6GBGEorZupgchEBkV4hSuK76pS3Tnqwj8DUZN1E",
  "key14": "2TMDnuf3K3tfEiJFEjH7LK1QaPf3YSWUAYvTz1TphTJi3QscFn7CDRkrKN2yKsq8ZNHd7ihVAg1jF2iLhSvp3gGE",
  "key15": "3gZqKiFskMVRxDpo2cqTfoXqXdhzjo1pCMedj9KNUSMhsCPQVdkRFU3orVxdiMkhULqnRo2ZLJcc536rDWo9P9oR",
  "key16": "4TjBnKc2JXZuCRr7HfE8RGjkJsXYBUqzggJJZ7FrXiVfoqfZfC8TEzE2CisV6CtMSpQENKDE4sV8mWCnxQeF3MeN",
  "key17": "53kb6kmHKji4xw1GxFdSt7ST9tss9Cx3XEu4LNFV8U2ViMzYZFwF5MFya95RJ7S2fft9Hn5QchQgAx4QQW6L2826",
  "key18": "5f6GFzFjXfGP17Q4MLMTNCyZZHCXPc9gvqCHdLL2CpjneazevQWNTxSp6dqtDAP663dR8thVkqfGZ43heT2GvZHw",
  "key19": "5wek3uZjuAwSYgFm92HsofgtXRfP7AJDjNGn2hiZq75u6KDL2omdJE8cQrUsxu3KKzEfKqtUp5VTi9VRbBLF9EMP",
  "key20": "3PJfNJYdAUuWij7owTmh17UyRPn8uaK4VDWsBc6dpLdw2ZMmxSpcwyCmyRGN49J7egcqupP3RFarwiNUN8ZZuwoq",
  "key21": "562shrCYAkVoKEsEZwnrtckdGhVY2GkBGaFbfXMVYbKr63xPwwdgUCFLrZHEDvnjfFcPf3DDjQSJ15x7KZx5KgEg",
  "key22": "5SibPyykg3hGhaujp8tL5m7k4qMR15czfwFNKd4j2YCXqRxJmHnnBn1bEpLukujrhhSCXRjvsbbMYEFPbBFN71TY",
  "key23": "34v72cgfMKqskLnJWZF6F7idEUdxZ9RNJGUxncx5qp9VrDCxvpuLmqDCXmMVNt2K3cKdrzusCQbTpSKEeSS9Pg93",
  "key24": "4vLWSHzC4g8NPPxqSLR5dP7HE3vvJx1z98VAzE8udqrqtokSeXXYeXVofEFDGcqwBRMHpdzKmh5W7iy9kSTnK6VM",
  "key25": "5fzusp67jTUPMWxaE2aNzzEU6aRnvSBXXqHgCeXCs8ghnn4XhRRpYCfrQMVLdGL9NP32TGyYypVwijXh9t1QEJGY",
  "key26": "sA9dgiehg52xVZ6dnUTxnUAv7cPgwer6KxxbMfMRYhBcQoimx5tBd4NaubsYUndwZZncLWueRsYSBgm4VG79WGF",
  "key27": "63yoV4mVqGLmqwQbPFoBQBQDFG4LUBH3ziboQVYwxmjbjP45LoSEUcFLyRoXGK1wTUCTK6BH3MvmnnNrvmXMuD98",
  "key28": "3ytNAQRh3fDBUWXJae9JGPU4asXuNgZMSsvrox8GuTg2nHp51Na61JXwGMnzbk2DZw2wwx67wwZ9qJ4mwFHwEK1z",
  "key29": "cvcDG7nTPVrq4z8gmipC5irZCstqHcS1F6BzeHKf5AZC7xSK95F5naB5kFVjiYEsKzFiYrqmea8nsgLcVPSmkqc",
  "key30": "5QSdFaLTyDiVfo6o3efyLDrPfsfVpJ3iUnqYCbi1f129K1JHaqY1ZsqNoafmvAn8KXCZqvM1HWRmr4byTr7hpoa1",
  "key31": "2J63NH14ULV7HA8tvKLThiUEox5GtHcnCnM9mqPquzrEJvdUp759F9ALiYJyfT4phQz7VdkxA41SsSQUVkBdTAhk",
  "key32": "3XJJ1u4MpnR6j7LgFsb2hDVZpafTsJD4NYGCmcsxUnaF12Y5iKYmrUjXX3VG663dEfgZnKqWjdy4JM3CPqtKZJNw",
  "key33": "2yy36HQ8o3uQgPRyHUzCQxN7J4GZRfckpZ2MGAcAYq4LESMCTMgkLNZyHqWh1WTyW9eem6zGCSYHMxbdAN6cG6Dp",
  "key34": "4zc8wcyiz5GAek71re4C8v5H9wgSFAk8UXdah2cT1hCd4tWUa3fYtTi1Z1fLYN8ErqMhaj3uuRfQNqHSYuzszUf1",
  "key35": "3rE7Ck6DuuxgRQjDpno8wQjY62uwR6j2NUsEn4UA9ThcBFmFBEWBW8xFwmpsnjXaRXwVVVNeASnHyHGyVWmVMUZD",
  "key36": "3Y8ESdUA8ty1PY9qP4JEmT9ez6GFRNWVmRfCQwgjecL5WM8XWn2ds47WUipPhPNKgsN6Z23i6UScMSMVjD8x4hoK",
  "key37": "5cFkM5f81LXLjgLBAkcfDAsPdhy3VURFtoafXtsrUGGi9vmFHprEEmdychKRdeKUnk2KT8nazzmTMGeRVzyzRjEU"
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
