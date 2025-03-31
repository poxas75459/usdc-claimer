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
    "4BC9rbPLpSTwruoW36VXLQWbaTjjZ8cjZPgGvRaiTt6SiDzUf7kfvQLH9yY8XNjkevEP9NYaEdEyZP4Hcay6LeSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zyc6BAvdH2k4CymSYof1XLmNeXCeZDE9qDgtrbEhTG8exe5skUN18pVHqrzJkkayU7Dsa6SjrbwUFapypMdkgU8",
  "key1": "gf12GaYx65DifGm3YvtzYuk2q8mEu9thZ8rQ4mSAKC33rU3eqaqSKCVxboGRBDJ2DhXCWP8iP43pf8onpEpmMZu",
  "key2": "5hKmT1tKAsikDBPML8RAkpNjoZxW5uNWEgTHLMbFqemyfqTwFUCmZWGHeZxxMyseYN1aexmr9vcYaW4CCiQRfgTR",
  "key3": "2Z1LjFM8WhffpXpd66bdYrjzUh1ppLuy3cZSSaMNt5MjtPGchby5S4rBF2ThHSJoYgEFuHq9spUhSZLundfAkj9t",
  "key4": "4rYqiF4j5R9aDP1G6SFwfMy1retMmEq8WMg53mootdcw99qzEc5NgA4i2RVy23rfruQbktYqLYXhXGKr86CkRTRB",
  "key5": "4omFRdNRQwnLZWJZ5ZmZbRoTZQ3dRXGvARgyKJGqfMMKyiu89VcBPDMWWPRNxSZqssKMwZSXpYyL7FwnZUxoNZgD",
  "key6": "4PDhNwCSxGbcQDys8TDN15LUBdM6hjAMVdHVDCrxhC5Zy3HtXCkb4PVEAinTyr2XxGaofWZg3SaVKUgZybMiDDwG",
  "key7": "hAv7ixnjmt2BVBiChwTAfY6AiWR2cY56iWTDRen8fQjUZXb1bNq9TRdLmrfwDGTRRT9khJUCSEjnmPUvKZhFCXW",
  "key8": "5QKsE5ALEdaxm7uvUS1GziosNFCixfEGN6JoN565QekHSf9TvXpmuF4BVUeUJ5ktvfcCW3fcbE12RqTmgHHTk2JL",
  "key9": "5mucTEKJh6iGmS6F8mMJ6TUxao84eTajAJLneNavts71Vw5jPeZQRjjZQAbaKiBvVESUy3Xb4dPp7tPAK9c21zEs",
  "key10": "4cmXxvLovV7cWeEYP7JaeuyEvhKhNdJR7U5ySZPtxk6kZmiiL9VKWQmoAaFEwhYZiNjvoGz9R6KPEuPHsrMQAFv2",
  "key11": "2AAFxUTbX9Z4HRoLwceDacPFVLZzoBuP66qx2ouoragrXNsFgAs9hASvd1nC4rRcu8DURZ6wZtcfghdd82wDMtyQ",
  "key12": "4Bbqztumwj6yQJLTgpdBv4KffurEpRmwCJW2NFdaAkMcaV6tSSsBbEjffCwy9jESz29544Wv8WbzuCTp7QsbigUX",
  "key13": "CSLNpg4ui1ag9SVpkcLbYRWXeuk3YbaHHMFicU2KAKHwBqru1TSztz8ujw4ZZLpwjnD7PUt4k3JiHqWyyebrsYg",
  "key14": "59ne5spWEqtMUd52DWFL5PhNbh5kkDnNqKTqiyFwckApvzktVHKmYwFryWshJSswfA5GGhXZEGdQDR4A7JVf3QGh",
  "key15": "4V693tUu2sM99MyhaocNqh3Cwq6hJjHxcmnwRtMuEQvp4PtyqLbhutkGF9CwdxY5gReAM63GKzRFvvtVSCzChYRt",
  "key16": "2v3A3XwVfwBoofsmB4hebGJdnQUGVAUSJ8ZHSecR3Qzk89g87D3YCndsMXZh6wL9PWBMLsM8yQF8mgR93dfVviK9",
  "key17": "2qzvfsyqVZYzojRkQvyPVC2y97Xyu3uUVuhANPyJAkXvi6RFKpuY9VrL9PmEsG3M35CDsf9VcPcWL1gLFWv8Q5Gy",
  "key18": "2LnuFXZ8FuC5aRnPvPwk6V84qsEpdTYT2dqtaZgcwmt1r6ZLt3Vh41SKKTmBYqUFVsa8kqqMjdJjw4XeWwSMmYQ",
  "key19": "61ZUreHfMNfJhYynrJfwvXa519bGLbPEefbCEExUDPCErUhkgPVpNVxN4cqVZfEEFGLqmvCDJdjwUNjV2VRawgku",
  "key20": "S3XxDQhJ8CUHH87LKwFUdUWTMNC2BxRYHMAgxXyX45zLJXHwvVrSiAZ4NAwZNKQ56s1x9YXo4fwiSeXY3XNTY2q",
  "key21": "3Yb3pKcFvCtMZao2cfWS8GFEBtinifbRaVWb2jtAhUa5cquPEaDppeHHZrSK266dUvos7wR8xvXZ9uMByHhzPysT",
  "key22": "517VWsQmaochLAuwZN8Hk3U3L5pQBRLgUifLNeKaTfwi6FSchrbHP5MssKG7eUmMVnNCamoX7e66vLMnttg28PTt",
  "key23": "2n9NW7de6uBECPdrREw8Ae5Gz3HngAWngRPXhuQYrPktyzuJ9NKuVyAecLyzpaXDi6RERhUvQVN9k1NGGdjo8rVh",
  "key24": "4VUAGciSKBBXnhgHHZqR4kbokhJ8L3Ag1pcATAnTRwT3VMj5hmexbpxQCuHw7yUMFYkrpHh5k5G5ctpYJxTXdhAR",
  "key25": "3fyPHCsyTrTabaisbAakJ7Yc1j7DsK1HAViZgNNEeeWsmc4V9pkZ3Nb2AhVzAtzgHxGJ8EbRcCk6Lwvs72av5vsc",
  "key26": "4y4CT7eVqPbA6aFYqJPUuhWmn8Sjrr4rLMXZEjf8WnJZiFiGfiKAT1RFibjyEgJvqmS13f6KuCfjRivrqaNtEgpK",
  "key27": "5g9MkkewzVDZkq1PPNbBxVGMEQ1i98qJnd8KStadaQsjjdD5pL3xHTZDDVsjFDT37HPFmVmJj8e7ENCDjBimf6PG",
  "key28": "5pCR6Wo7ZyMYUJnrkH6MGoFYc3jwrjfxGRXNDWpSRzYyB5pFLLD5kezQfhGixqerjfYMsa2JA87AikMePSAek5q6",
  "key29": "3XxzaDj9gVwUsbqq9voBNdjXE5fg2LxpubRGeya9WKPSH81MnJRiWUzz9tVFVZ1AQxRiFPse3wHECMSH74ywTzYQ",
  "key30": "2XXsdGHe4d5cJPXXA4n2rVUFs4YxzJBEAACaSXq1jpA2VtKcH5AqoJhTLxYm2cL7PWoL972pKEYEkWL4CAVx5Sna",
  "key31": "3vUxZgte1s9R93Fvtkf683vw59QHw67oSLoKQRMSixid6NdBQuxSeN93K8UvWAw4xU3UpqQ5cq9n44CmF4USFsEC",
  "key32": "3EFyeicTLNfx7Nugu1CkZWYsZBQJTJaGdS4KiYdMQj8KiMPGQpSMK7HUhPBaehCqXawUC7pZ6wyid3K4i7Ryjojs",
  "key33": "FCWxPPTcQgKxosiemMWBmNaNamebnBeDuPX5MTDDdfWVw7i745VmHGLxZxHMVGhpTLyyBXyKBMtQ3Kvt1jjS4zN"
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
