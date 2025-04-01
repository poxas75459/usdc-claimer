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
    "5GsXwyXA3wry8YUpgFY1f11TSUtzJhmDMyD3wjEq3DMy2LTwMpkKMR8HnkVRK1mD7amJYr1ZMW2sRgA6nmhf4Qne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47HEkrJBvVosFgzF9CkMX2pnREYzD42fVicCyJUrCYCodPiGy9iHVjYy73GtXaNhB5btFmsc95ZakfczgXSi5UQd",
  "key1": "5sAqrGJabRDge99ULZoVSkdKj4iK1MUzdSjB3R875f67nRbPM5oiuSeLCMkyuJk9GhhcZdRYDCSu7LoYgJszBLXy",
  "key2": "5gZyGek5njDg1S8axSz9neAJ7cqe88BGBSkU3u2wnuCD6pZYESNeynGtJk661wFyTwjdvvNAjFBeoDf3VMedZzWF",
  "key3": "2q5hQjTsHzFmGVXVpnfNEquHVqs9akZTWLPf46mKQLCxoqCnrEa1CykzU4pVWTJqB1K5zHY7DGoPWFXThJPvq8gF",
  "key4": "5eAP1Ep9LjbQNxmJvgY922yx6bwmuRmk6Y959ZrdACtdEdPWKif6VMTDvottfwNoxnHr6uSCi52Pz5d2u4vbNftz",
  "key5": "48sAgu9dQLxpAzKUZkDEHEXrzgp9hquyFAthytmDgJnkGxcpktNWQbTp79bfZtAiHDgukryGBXD8uMSAmmLKi4H1",
  "key6": "2Jp8hFWyFZEC5dKtrUjgoHDtDpuVJfZEQ5AAwnkxS7H5N1L9t7FPbR1Mb3UYf4ZRSgDo7KqTZ47AbEPQH2QGU1t",
  "key7": "JMo5J2aaK1L4gLhDB97uK9nNXVF9ad3HhG2yYG4JYobsjUyeH7rDcJq9hfkNL4bV9BhHtYUovMEKJJ7aMg2cwNK",
  "key8": "2uP7UUz2vv3sbZnavDTXX8DVRABj2h6wKpwdkcMeve4hwT4HWyp34kJpBM1crkMg5bjYnt654arMzRFbq2kYdjJo",
  "key9": "2rfsNiiKWdXFX5BocTa4hEPLcPcjpWBU2pfAkA6Fid1df8YEimTp7GeVj3oxoZdLX9vq7TQwxWjTdPpF8tui6QNk",
  "key10": "3RviorffCDtMKTqQKGieWoU9aCnCY1AH8gXh3RXoYSQviY9mY34EKSbdhabNWwR1fdChhgDrddi8XX4UJqdvcwEp",
  "key11": "4APKXKXYe662ddPLonJnwRN8fxcAmnKWVVAcHwqjBRTiwkVYSLGCgj8J72QYmwWqfXRwwJmnms1cuYYa6G6TvKP9",
  "key12": "21Lyd7VVLsRV2bCXqUnH36j9ML1eh4hXTdxZwdD1BtfbbDeWjFGSiosyhGEBP4zRTfVvjcCw1uhrf21LVQ4Qrkzu",
  "key13": "nRcAVspMyZT1b2AtJCqXuSD4zDYqDLMZ2u8XDgUwBAwCenTkWEdLd9Qt9f93uShrT5R9z6915xsAjw8g81PiaXk",
  "key14": "38ArQmoZD9neyR6b6o1HRZmfAgRmPSoeTJg8Lbke2ygq72qufvv8ce1wo7kSXQiFZHoi3XrcAV7Lr3Z8jg4FuCwC",
  "key15": "4bv2v7jX8S34YLq4NCAaPoym2wv46YH1bXQ8myF6LmDUY9ASMNznCfkVzBicW7srrQ1pSenrjDzi92vFkmvDJVo4",
  "key16": "3LgQUeV9PDPGmP51NeRw7R5wNAAyGAHjbLP4D5k9RbxjMiwpHBzzUqS7MjySHFzuvN1jnhCvEcs52cifnq76qhm1",
  "key17": "2HBz2niTFYdAyuB8GWZBkfqPWqBQkVUPJMU13NCpuKoU66eYm4bPrCtPYiDwfxUL42fUBf4sJuqioQ68N4XufLbE",
  "key18": "2CL5UNqVAh4dF1yXBTk1wzRQG9Pz6oq7w5Qtb9a5RHvgTj7DMoMBJzaVjzGF9VeN3oxNgLa1NnzNJtWrhPRumMPG",
  "key19": "LuQs7ggQiD17fXPvr3yBzM2FCd6GhqNgfbmXNLF23FN2tdnTnA3vrSeBZ2j4mqhLdQJsqxGwPssyXmkwo2rZDyM",
  "key20": "2KkWb9sBrkAGMAiu3HJPJz67ZQCJPjBFQB8XfDZ24kpRBEytWNSpnTWDmBBPZNS1FYN1a4Uqzz7CTkoX2iRqJ6Wi",
  "key21": "AyM6NKDKMe6mHUAwt9PbwKintSXuRsNuifgNxx55CFsQSw1XvPioScucRn6qc6tgTs7kgPaJTXNjTnrpLhKDvnx",
  "key22": "5RqHDSXW7fbe7PX9cyBEsB5VEXtpVjWktwhzwhAWkTsWf3DXiVy918xnoNZnt1uQLVqJsee6syDQjowDtH9RwPBu",
  "key23": "4gXbFBxQgZxD2WLQgA8E8bDmF5Nm9YPTikSce7Xfw8G7s8L1NyGqTvAmcMqbWHUcUjka2HJZ5JKNeEqqxTfjvrnK",
  "key24": "GefSLwpNrPJcLDChgz3fZWyz5DGUziANcx38TDTysAimrgcGin7vTub9KMoWysg2qgf5XtwrFzAC8MxuAFajoJD",
  "key25": "5ynCr2i5nSrdBEyXksnXdwg55fqkC3rVkvXvn6Dr2vqe9Ywyu9ajhsNSbRoGauk1kfX7s65FKswohAWCAniXmjpH",
  "key26": "JVmP52UbD4s7MHNDZZPpk36qPrmYBu9eaG2tGVzGLXJuJcVNk5cUBWMzbduA9MQpXGpPG8XXnaDNgau7CKrPgpU",
  "key27": "2zsbB6TiRmKq1PM3tJf28BAvcWMvuiw2dPaKvR1CvWWJNGqmCjxuijsxUq2PUVzQyj9SCHSEw6jiZdbW4TgW2VNr",
  "key28": "3ybjUgBLmWE84tnFaZV88NJw8BtcskJafsq2ru4eE3xDkq5QBbGadwju6JTm8fPLE8bc4WrLt18uLihtHrqfCrcZ",
  "key29": "EvEfp8bj2ZwCcSKFmdER3hJFygnYZ4NsPk1xgHrFnnSBcByUcfQvEgZti2gDr2RTn9wVpyfsCsE5EzPqjZKF1fC",
  "key30": "2VnDTfngEcy8Y7YpbuTXcPAqqDaWHWHUGYHGcCM9hTHaYmTaNSwyWJL6uDyhjJFoHt5zVtvsCbQCKfUzPLmeh2U6",
  "key31": "5SYh4AusqTANJDc2ZiuExxJ3niM7dJW2jkuTrqzQeZQVHeRyDQU4aQDDwACegzJp8gGGANZkSL2979M6tJcSRTDx",
  "key32": "5z9X3sxoJ8u2jPNg1MNRkxvt2ux7G71kaNnco2Htj4mAAHNJpe99DYrdo31NvmSuU865aAQV6EKjztTS7dsDfb6x",
  "key33": "3WMkV3mMCeqZSSaxt9EUQc9PbF91FU8R8TQuVNspZS7qcWZ1J1ncCWhupEtdo9PP3cNgJ2eXrefM72MxudRHFEds",
  "key34": "3RxnZ4RUCayeNxzGMMF7QaRE2fLrZ5VsD2c3n7Jac3ZjuFgTynhFC1rXZJUqV3aZjbJdMk3QnVXFrt3fRuRGEz7d",
  "key35": "5qk24URSQVJErvSho3fZ9uznvHmusCxLamoe1zqC2sTLdRmeFAm7dm9WoYopNmSHq2vZU4Q2c5C8pcWE7s16oZB1",
  "key36": "5kuSczKuhd4Skva7QtxgnW3mkNrvBfV7nqTTog5mMW9rHLM2pUhi46833DQYWzYW6VBDthoDA1fvgH3XBnpAK3DG",
  "key37": "PeVLAHswVKi3BEAUMFUL5zHJEBrfUgVLRu6yJavSWrRE7VqJcjAZte3Zy5ZXVWFejfyFwtcfKXYkvMGcSMe7fvT",
  "key38": "FUCqktBZoRNxg8Fx2bWWxDcEciS5L2Ej6bH3j6Z61LnFFFbR2uJ5FXZxD3Mdyynmkp7NVYxQuErax3GMVH82JTd",
  "key39": "5ycSbZab1tyHz5Ci7QbY2oDrxuM6c2zJYLX69ruUUG9XcccRrBhC6aX6TsBV5dZqn21J4WHPmtcfV5DkM7j8DMzw",
  "key40": "3wVuQWLBLNvaR6Rb25gtgJAzLMKSmYtZwQtMo4oUFisMuaJVQRd3D9b52x1rn7EKYnavWx26LkhfzMBEDa82mW7C",
  "key41": "Mvd9nKAs5c4e8sNV2pECYbgC2Umjxtk7A6amM1nwhoLHYeBMkDJycmU91HZeaHdZBdsP1PGSSqVa8fe6FXfozfG",
  "key42": "5w9X37FgESsXBDhEWfXd3WVBnoMRkAAmSU6iSpp7YEr3gCN1RKMq9qRnbCZYE2YGduQr5pX7aWG7fzFSWbj4SLxm",
  "key43": "3FqDQ25nJU25qBBLk53jjUJuPYy2kvn8iRREkBUfuCqpecfxe4CTvk5hSb4QRYgvRokELCuGRNR42zW9oLcXFEXy",
  "key44": "DEcVqLchBgB49vAUFKkRwBpZc2Y81ccADtVryM9p7TxHa6nZZjADSLMWYEXPdRKwKpuE2wYv4BqjtirhGpecHcB",
  "key45": "3PLLz685QLbEqYZuEtGoiJKDeKbMWDpzvnxxmxH2trCNgeaW6zj7TdYS9hvyveDTkZyEn1dPxVM6bwMpusV6HfxF"
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
