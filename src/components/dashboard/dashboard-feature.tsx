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
    "CSCPuBFXWC9gBL2cjV4Fz1MvPD7CSRXm9M1BsHDWhaZ7hWBGQZFVTY9UQ9TN171hEtRrDkXmdZtk1mTkxuFSpAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nqTsXf9CQzSeVm2w2tgrPWU3FwMwi4zAvfAbd7iHs6oKBQp6vj9B6x2vd4sdf4TqnPJuSK2RTDNYwAM41mL43Eg",
  "key1": "3BWcqPw8PPHhvAiEo6Mwgr5UjRpUcbpzZGrXNbueHXD5xnyzYSXRQ2BpKesUUw7mXyXysm6wuSNRztZX18wHeebN",
  "key2": "62zwMR7iogcqLPAtUubAaqDioKiN55niDikai4psWS2Lk2yQSzAaNy9w9WaAuxFcpnytqRVG43YzF7ZoLgWvUkGk",
  "key3": "646Ktkmdjr44TU4NR3sj4PCExDwvp9gWYjmSj2DSnE3emZ2Lkzvim6T83LJqZhkBAxmGaw2MsdssRFLKGffnMrrd",
  "key4": "3cL54iBmGDxLoU5TpRqAdVTyEsHJ3XhmZ1cb6biS4fgZwV2ZTkGF4ySTbsGujj9AQMFXnYfjBknEVwLFeGJSrwN2",
  "key5": "3W3kSo4cZrxX5tzWvEuuiqUK2js34cGM4QZdT3uP4AeyXCjH6wry1qNNEZkg2YTKPL7LErMBLJewSc8LCh4iX2yM",
  "key6": "4nPXbcRzUoYcAtvoMJTPQhGj8Kwsv8GMuiUiEnYFLwEwzLqEE2tBTcaamVA2ES2dWzHnJPf3SNmXpNbua2wmCTjt",
  "key7": "5z1KPfdF2dtdq6q6BfDAhri3Tx4CrJNBPa1x13DyBgL4Rcu7ptdqDES5drYmUSX9SjP2BpnPnrLHRKjC9B1nH6pE",
  "key8": "4obDF2PasE8oTETKHfKp1dykdkCFF3QfZUxrq4rcSTPFpwD6DFLAxbBSbxnXyKbgbp3y1KHwE3JGP3iHprGPtPp1",
  "key9": "5qf3J2uaYFrZF3SR2sX5qLTFb34dwnCt248VMWGMBGVjLvpLAMU84pCptaPC8McQTA7ppnHVJY1D3uHQ93U7XJxy",
  "key10": "2tb1r3UvnBk84J7AJpZCFE9aPans4o7dHxwtRdhqaG8AzX1449qdwqyBz2h1VrysZZeUwx4zjD2xnJnMPTCaxvYq",
  "key11": "3VSTxXAakjztV1bobgsxJpG1vUotyphYgoVCJYGtNfvs8sBFmY138zFmPCTJXNaCGb47vgsqZRiyKaoFxSe9BkZZ",
  "key12": "2FMrJRmG67ECsWfskUuYPapiwjN9jWDwANhLm9bYMN6NNwsMsJ42Y4jiYhoLWaz5265STfZd8LvihtnWqdnHJ6Jc",
  "key13": "364LA2rzkqtkxct8fBkUN8q49e4zLxtcvMCFyxmbZub5pXPuyoH7oZTBXrP4st29fP2aRr63BCazbcPdwm9zdQmQ",
  "key14": "4R135oLkYb4jqDkY6wzxahU9R6L9rnheMFxLqvqFKjGhxj9ovH25TRTxt2XmX1KfQZ5CyPSMA32EFD1inNWTAgW8",
  "key15": "5jLdtzoch9fVrDPCFfEDrsBYXDA7nfArtc2Y2MVbXmnMWeM5UG1e4kFCFN3YneK6sjEFMABNKFoGVL4pL9uY4piW",
  "key16": "4UrRF2UmXQBfdPbUknAPyNJcgwQ1247mycz3VvA8a6NK7vp6Hk9DVqhYhsLD1t5MC7Q5U5HkYzRBaWjtcSbuZ4oF",
  "key17": "7Bc56aNXnU65i4mbKoNExrpJEQp8DM5iRpZwYB5dcqhCxYe3fgRgSfsussjKYBreoLUie3k4uMBA9Am38NLZJ5o",
  "key18": "2YEF1vsqB1NJqzh5hzQRkVdY7CEHLNLyBf8soSXmVJQSXHWy1mhDPDC7j4V1KwmE3qg67TTC4aMbjy5yviJokHKr",
  "key19": "56sV7nTzYisHV7jXPLvhNvUjEJwrSWEKvqXZQdnNf6SyMWhixpgctJfnevQ89FVyv1b4HCrF8zVjhSJLGANRu4ES",
  "key20": "3yzXwASkP1zD3Wvqf6Uw9HwdNBm6hq5tLJhGZYB7y1g6GFfQvSSu9mH3oPDsAKnpiM2C33T3TAA9Fw9sf9K3xaFM",
  "key21": "38TyVqNdA94nWNNL8zssvyP8Cg4uv8BEzJj5f6JDMws7VCZdHi1PniGhd9oqDVXiDF2g2Q8GZshXaZeRTa5se9xA",
  "key22": "2XzL8dNred8hYPm8kb4mG6zRRmYAUdGQ2b5mpA3FmCbVhHGzhL5jomVnuS84x4SQNe757RWTiPoR9UBXE4HX8rNV",
  "key23": "36nperpHRoW5JdR65dfnmkXJEkXGJD1XLYNeqd1hA4mrNcPXP9p7bZAJ1sqtENioiqm85TbNNaP38LyHyKe595MX",
  "key24": "5tggsw5EJEBXrFi1hEayWDCy1hV4W7gGmG74Q4LxkBBmRFm8XpzSoxd1EXNhQGVeG2EMoCnvjEKo9DvF1GpHwHdS",
  "key25": "57rCauxhjGFdtQndzsanRTVYSH15UC852CrTWJngUNjn2iM8Fk9KMYaGMjizkE9BvfpgLnXJcBXM1FQXSk6cSUfN",
  "key26": "3kJJ4zAhFSkLUqz7yvY8iZZ4CiUypddfRtGRfZGdboPwJTwtbXT95y8iZcaJBpBYZyWZh2TRDCZsnjMr3FpnRRmg",
  "key27": "5j6L1ZFV8rRJt6jKcnDa5NfxmyiwoJRfoYpB3bzpiWqkQhdvuwwQCekoWsEKgLEPBxCv3VDAf7oYAW31fv7nptsW",
  "key28": "2QE23tQRqc1n5oNiyZHkBSfrmNEiCqQ7fM7NhKFVSE1NxfuAnw5TCUuSvq6cT9pLnaZ5dSZmjVdt49UiXComj5zn",
  "key29": "HA8WGQYcK8qMF52AxEdBpMJx3vbf4f2SDSTLmJzi5DaxcqYXbnHoYXMCyE1Zi4fpACvEfWimnuRY5GgNHbrdu5Q",
  "key30": "3i7m3HjTAEz5m4ANKGiFJctW6RwU9GDHuyDqNDArJRrUYkzEya46Pn9WweBPf4H5ftkCj1TEaTo7cjmRdz8q15Hy",
  "key31": "3uyXSJ3EtmLgBKKepQDpjoF1w7ZqwJTVLNSVv67ZZ9YzY8FMvxuXUD7UHnzgon5Y9Ufc7FuorPxHbmGzwVJjL7sy",
  "key32": "4QZKcHyebMYuCy8WZsqFv8hYwTryR9CBP9f8Y96RYz2yEvDmzP4sRV31D8MLtF82wtiY8SKa9Ty7Fd8Uobe8h2ve",
  "key33": "52967AUGKSbiVH7Af5DhJNGDevUvxEaqrqGBDTmLTiR8PM3yaGyJUiUDyimVEizA8u1mfssYQwbdPmveEku15CyM",
  "key34": "28r1zGDsutn2MSbHNXQso93MXmhrcMHGRotjUBSGSTh9XadYfRnDHgHMAT2pyZNe9SHRYy2EEHcMjSxqdNJaUNoZ",
  "key35": "3dYsaJkjCtVDnLEMVpQyecVN9NsDDfPgvKfAiSgtPkNFZFjJ3HkLAhnC48BW2sjcHF4Nkr8Uoi3DiZPdMqp3TKLP",
  "key36": "5hLYHzqWCd6ZS4mW9UFFcChAchatsGNcYNyyfczFHJ61aZHL7kGmcM9iRd5u7Hj8pd9zuubVFPsRLeZmBqpFcmeW",
  "key37": "2H6eGru7rCqyMxrqCG4Df1JcjTSUA4mbCHPuyi2hVUCjHQd3erji9MfrEGevQf3PUswqXJXwut8xgdzkPUaEnwx7",
  "key38": "a3pyu1gdiqUemE1FtHw1tLS9YoTamnfTrFRbT2sY8vajtyVZCE4nnoant1iKCfotH48ea6QRbz1YjMM7UwStMWy",
  "key39": "3xDKvjg2mr6JqXuDmT7FthAARzoX3ExJFpKSxGAdzryrh6C2vy4W2ffn6huxgsHq4XFAJvfn9u1SCuyoR7HZKGJs",
  "key40": "3d4BSbzpcoWsUQxXmHqdTzqqfowK6AbzMmr2WnQsJ9mwwPsgbCjc6zXHLocJKeUcqVSVEkokpW7wvehe1aa4YhEe",
  "key41": "STXqJLRMacyUh8LfgaU19eGNaXJYhj8U7pCBnEeMZZ7UxxGsQE9g9J3MN1XWdpGBoAdevLcavdH15EwjVyq8F3t",
  "key42": "4QYkmXnnd6K7fZRbcL6Cr7uze2aA8N9ZZJk36L3uxHjFxCm2TUXCXs6WQrcqBZVfa73bN6JfskD1Pi3THN5QuC1t",
  "key43": "3Ep7wjKgXUf7LWWofFMzi3GaZcgb6mStfZM6cZa6dMmH4DSoBq287qW6ToRket6juGvGZAYjd1HzJsMhWNwQLBuh"
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
