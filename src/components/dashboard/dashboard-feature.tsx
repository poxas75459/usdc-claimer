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
    "z1w5VWmEQEsS3FmNHkay8r2Cq1xZF9VDnvtWkMZk8Y4TfZpp4L3Pp9NAb5vwpcdyWMoWam8FVYTA1rZY2h7yJxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbngsdznvsQWgB7nWGsghghvobcZj9PzRSNj68Z1zxsN8tyBGMqLrcVcMZ3gPPVC5xhn6Qtmi8ksNt8PSWZjNGc",
  "key1": "5tbucmPxa8n1CDi5a2tJdUNjjm4Gbsu88FbZykcwmwYLdnWY5hNBZBH4KKcmkPk5bifeks2g4xm3turdE5q6zar9",
  "key2": "4tXibr57ZL8ojCYGXTvipDkPSgB6hbEqtkJxtvkbKLr3H6FSRpmPwVpERNL19c5QRnbCUN92hxPURTdpz6gWqVwe",
  "key3": "5S1Tv3Ht1ZjUpHdELkcW9xJdjkAuFbhA4i7BbNN8Cm7g7ABPhvLD62Y7GqMjeD7ahvVhJ2RpG27r3rfzUqYVFJNk",
  "key4": "3N9SPVanTX2u34M6YHDotS8SBkQYz8BRq5RGYrq1JrHaeeQKrkeSZFfat1sCT26uRtNCXhv19L3awgLqqGKv14MQ",
  "key5": "5Az1DWuX8zFAmD3mbURdZyBurGzy2pbhxcDnt9MfDuFcWjQEDzap2BfAT3APmoTGXjBw49rhTA6gt2dAtoKdzMiU",
  "key6": "mzPs2PsPFW1NeZF3bAkLRjiE4sT49bDUjy4d8C6z7kiNEgRHNgPizx7YyxKwGCZJxPhzQAMXUFVuNaLCHfZDzbi",
  "key7": "3mwka3znFsomRvicTxt8TxFoHAFzzMBqAN8uFXYxXjq1H6xmJdtpwjbYnPFLy4VAPMwRF8Cqb9mRUE8ForkpJzGz",
  "key8": "3UdAzxXRoyeUbKas5bhBFP4samF6gU7rKHGciXYWuJajbCCYZYgy2s2orimVnMbZdG8jLyMxZNdMVFB8bD6r8YZ8",
  "key9": "3mfgG9aZDdHNrWjX4x1e6ZNs4GEss6oyMzRL6X4hmPnSCQPqbGzQ1t3jYj4iSoSsMu5osrjxDXAxD6bmHfQB5Kno",
  "key10": "57nwRsu15paEGiaRZ2rQ24AagZ6DrRGZ8NB8atjNzcxENcJqgK8tQYhw67H4fTpsKHzmWbVdLSSxgU1xZmmdJ8W6",
  "key11": "5UTwwpxZqnDbnMNS6u5BciP4XCyP2P9s1dXoiHQr5WPGCmyxajiyk4nQAxG948VGnLy8ZxNnCQ1xrWhop5nehbLf",
  "key12": "54FWEULFRBHW7MqZbiqc4uLnWw43NjEJpmgMw9EvDPXWoyNSMKeA7B963J2ngAKS6n3F1aYcMCw41zo4B1bsXPSH",
  "key13": "4547EMWPU8xdPeJmNgzGCHncmVPLzXhF7vXssZBYwV7DA7kWHitn68Ytsr3C9Ucy7qsbED3mBng8uVSqsraF5RBA",
  "key14": "5Sum868NK1DotdVkxww9ZEQaqnp5QGzTgMxFxZkiaQzeWKqvXVjVf3RjxFxbx4PbKkZmV7yZtJ27ZMfgHFMi9wsK",
  "key15": "57c2nJeRSFqDbyjp1UMK9U4Bi35qnemmci7FLv3KSamFWq2v6TqAdyYisgQ6RGpVFJG3xXFj3rfmEMDq86qjqAhG",
  "key16": "2evfGxHFmvPBWnTPoXcacnSj1hghVf2riErLPPoV2Qqs6vc5VXWca5zN2rFGZ5LiuvJViuZKrYdrKckc2oq8ZWS5",
  "key17": "3V3cmuoYtgZDtq3L3Ew1P1fVfFvru3f3tUzmvyMtHMCzsX18xNr4NuJz2JFrGrq3TSaQgVcmKc6mAedJzuwQn3XT",
  "key18": "4DcmRuvKyJMaUvqiVf2UztGj5GaZD2aHHj12qhEwHuALqLx7qQ27JroSRrGkkxiv9KczAMQDtLVTYJt9PxmauR9y",
  "key19": "34BJ8ZdLCZLbB1BrC6MsQBr3tStYF7m7zkwmegDuiPJ2nWhg3PgZveaZrDyeoqSRa8ur3xnJczAtRCbPk5ZhYKAq",
  "key20": "64Jkhv11oXkp8eo6M3t44gAEb1fSVmx5g87k1zrMMt2Rd19TMz3d5hRhtEfuminTYgbapwQK82UW5SgvqEp4yKw2",
  "key21": "4XsDTtKwjE61PxfRCeuLspbxwai2LHpn77fUir6u2atYnJaycFTzAyuM9L3wL88k3xebFcrZKQhBLcD6HoHeA8h6",
  "key22": "3kpZsahyb1dVc5ugBVqB4qUF1DiQVwX3tJirTQhgHkM5XB3JeGdHrtaSJUF9NttFH1CEGRrZkS7AdyXkrHNWSWCM",
  "key23": "4QyB5SaRNPWykWYoMegHyttvCoG8wWH82y3mXeNGoyVupGRTXfsNu1VKczxpwCP3S5poGNdqswh1yfmXnAgUkq56",
  "key24": "38jpUjVWRemJrpWubC87VQ6yziQEA733ErGpT4w3Qy6JF6W3NJiEicDHRgkrnUuFmZVgZB7r2ov9GKMoEKFuFpLK",
  "key25": "4vuQdubNwgChxyN8VFc1QN2XKAgobgaJjYpG4PpPWYwaw94viXVtuQxEqJQcrhuQ4Ny56DHTd9DR8td35TgpGd3A",
  "key26": "4cYW9CwA48hxPDofgdU1mnuNBsh7pziKhjeTgD5njSjmg25pzL2GWRDtPV1EVLG39QpiyABKDFo44zbgnijvRfWJ",
  "key27": "3CzaE8emJtHYNR5mCB9x8nxxcWy3numrjQRvr5iQ7WmQYXzgGJJF8yXyg5US8GUpTxxKjgaZRy5neKKcFU3rKMGc",
  "key28": "5MnSeJmycPsRCqPqWnvBUKQ77sqs6iBHhgJkWvP8j6pQ7j2N4NbomN2FgrQ4niYFLyRaotLXuC5E67BBS41NGPqf"
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
