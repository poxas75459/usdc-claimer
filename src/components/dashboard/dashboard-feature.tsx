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
    "28Kg4Skb8DQFPb13XnCxALaT7xo5W8Sq888eFrT88sdRooxpEubmA8gjJ5DqFebuq5VfGYkZCkSbS1pYzzvcEKKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h1bmqQAJTLnMnXexS6o8KPNNMCpBJ67M9NXjsHnKYKMRzSMKycReGvQpV25kkdvr6Z6BgiTTgLkjtCCyVw5zTtT",
  "key1": "2mWACFmZa51dGHEa5dkvodE1N9TFgbpxMzL5BEh7WTnAN3zEkjnr39swovjW7u49bCDFp1D2JgZ3i5w7FRwgVBza",
  "key2": "TCrMV281pHN2vUpjjP7dheMbdmqV1ZbTmCXPHcrBRzV3mvmN6MwMq3U3tVtS2ZDwihbjzkQmRK5razB6sxtQHPr",
  "key3": "q76bKXY5tvXQiBeFARgtTfDJeJLx9k7YTEKFfh2R7L8SCn9XvFKBUvJMhiSA3VQsnGYPEF8AJtgs2fjoRx4vKuJ",
  "key4": "2mJ4k1SKWwLSm5DAnoVVoUeRAjkaTiSSFrho5CPED4ucv2U9M31U6yhtEPmyUZd2LyxqZ4RhTGSKZWjNgXHz5Ptb",
  "key5": "3SQT3Pg5idbQX6uGs2Tp7x6qzngGZDQfKwSDdgXoBEJ3XhppKiV5aU2TuJcPWUubWDUWn3HYayaeJKGvexGnQVi2",
  "key6": "4JfzmVrQ8GnWxgTWmk6jXmdeFLyeMe5XKF2H8Z93rjjtBzy7NCs3SAapQFeAF3yUKM8RUCyP2ifhgyJGfjS4Ygze",
  "key7": "xJwMgr8n8bde7jhASXZ5QvE2346XLRDJKLJT4Rqh6YPDDAHmT3yyzd8Eq5dC8ZRJYdS4KcdBivr7jNYNDEprtfn",
  "key8": "UNDmUCgzvrjxdMbKkx1oYN8S4Ph5H75D7u3dSbUWKQQkPFFB85mYkXHb96d1DMQKopiSZbNUckDMoMw8DTGvUgt",
  "key9": "55v93AKTQzs3bQodXVrT6fxsW2pn4wwh7kZraiKJDj41Y8dNV7ueWjZFMppg3X6W2vqyEbRGbyaU3t2EFjYJM9BP",
  "key10": "5NjdnR2MAjue5h2gXMD5dxzVCYsVdK4nTNinDZqSo3p2yTQnw8xHhNtXCdvEFuqpXJjJyKovTMVWHx4nm6dpTNH1",
  "key11": "4gQGL61PFxauWVPvSqVGThpy6Tk23tjqpen3Zy6c6j1UWmC54LTy8NrQW9QYD2z3gDVnekwC6sYAJBLNWkZT6GuH",
  "key12": "4c32xZj1G4paQsnj7R65m8u4vaV6ev6Yv3KGo8QwYPUZgmDNmTDgGLEA4xHAqzstRwFwMCaVcA5ct6QZGWEeDww9",
  "key13": "3XKRNo23V7aTuC3sY1ZjdWjPvUtwfo9cM5qE3H23XkgZvwcKZ43WxRjn3skn23VTgtVVVPyTecNKnFZD8YUE3TUW",
  "key14": "4f9G2Gp2AijNzNz5hZ8Dc69bNjacHEKCW6qwE7YUwpE2JfsweijmQvTwifG6Txbc63aWpKngymWVaDKfzAw2w65e",
  "key15": "3mAu4uxps5i1pmLG6jWUbyLxiuCjmFAu2h3zpBriFRQi77uudCpxK7EycxtNbCiAmqLY6VqWhYNZxs7YpfySAcKT",
  "key16": "5KVUN22nfxKrh9Uj3NPpZC1dTTTHJwWth5dDu1ARZV7hDWBqtngxXhx5mdKLwMXmgQDyGjB9U3BVBQn3A1bnNPbW",
  "key17": "jPft2Q9wyKyLoKXjFrkjm9WMCcTMSorEKWG18MkAG7dYdvxTR171aQuqdSiNtKVYCRstWHWV9rXgQgAdsEHgw1q",
  "key18": "3Ei8QAs9MzNcHPyxsFJF9GgFa7PmeG5daw297kJjPzTk6Lzw4TX6NMfZK3Qf9tzgKhw2CsD4pAkgBpjSvTq4PGSE",
  "key19": "i8WUgWgwj1cX81GnHfpVicLtTJ6EALSWxCkKWF1jCzg978VBgfBj7XvVimierZmxX84HskjEQduk2N1qt4pG2D1",
  "key20": "4JQLSFex7QEzxtxmjjV3gsSK9V4hipadL16EuVhNQ5tAJRibGWdpshYJvDY2oPzZEBMjxMqSKvq1VcqeU6J2AvMG",
  "key21": "3V3VazqhiP6c624pd2hWZs18AVyRmcGujEbVoCMmpiZrKx5KTev7Zt7LDMgDD4UuTW2umkppfVvfY4kMnmWH7FJ9",
  "key22": "femncdTfa5XMjk7ZrVsgwco6rfeW4DLJiTgcE4ZmUSbq4muF6kV6gsdqCkS4mvS3NjyQUjUChpdyTD1iED2ejNn",
  "key23": "4MFabuLCGr6HzQ3UG45hKhfGXiEHssurPz5HwvV8FY8jQWdRKEVhwnPqaRxu5v4fVJHEtW9LPTimtH7G5h9vuequ",
  "key24": "2uXY9SETQ2Czmv94Z76CrTFdEjANg2iiZsf6LG6fDPcprswfv8nhXDj3K8TGSGcH3iXZCoAsQBvh57HVKcfYNUoU",
  "key25": "4YmfSmyi7PMQeqwwNfTZHHt43KGm7MKCpFHJcSTrf1VSNEnVEJxyGksQX4YK79TdYPZqfVmTjWUdK5GWiscXHozf",
  "key26": "4x3mYjmvQts4thZvWB7tnXEfC1HHXKvmU4AzT7rqF8hyumoL2AA5Jz1BWTEJZAohLTaUr89XMtXo9vztHiF2tQ1o",
  "key27": "4Vz8RRwgy5rXTUHgoYJeH2Sj6AZgGC76gGttuCXB1cF2G6wb4g2vhGNj3jcVyDQNMvCmGZmppmyMK2sqpP3U54t2",
  "key28": "SkmoMQYJusM2hfza9zDexM2RPqcCjEvUMcXcv7jNED3ikHNhVHtz2Fd4oGYJ6eSc8CqZ8H1fmZjiyJ9m5THcM4D",
  "key29": "41stXPjEQXVfESGsvkK8RTvYUZ54aiuMmSx6sZgjcbygwWt3pMmuaH4BqkpNKgMjgANjRoWpjeYDLtYj8uwBLeiC",
  "key30": "2tFTFt2SgPPCSEuSa9RDZX81uoBYF41tgADhtkjoda87qoY57myQfVyr8tTCYFv2asezRoF33LFQasLvPjXdbAUo",
  "key31": "5Q2tYXbgaVwCsoRMBfcSsvfZPzLdpdXNCFJ9CTNoDTxLsvTnDNgwEEx8UmjeagPokZ44bp3ML3eHDBv9S8JhQDj7",
  "key32": "293iWG1y3jApL51fxUii9mTgXw8QfPBgeLoWUxKQvG4SyiXgJoWUensp7wQ5gHM5D2uK3aatzRhLqHtUbWCv5hwq",
  "key33": "yvFDcEbpbAKRC2GKZszdeYaULKKWFjaqx8UBHKJV6nw9JedGLHXVSCvrFbNA1LyDRSuJUX6MFLAxmyzWvbYFJvv",
  "key34": "5pJshpBkLsctjSrGY8672XHtPqY6xD8wyGPRyk9nBasaRDhu6NmV5Cikkkg3RVQyGAgYXvM5EDqgPS6sn4ExDMG8",
  "key35": "2ecE2qr91eupCUwTq5itfC4CiBqAuPPsHAziEC53DS84wST1HUV8NjaGLx6WBsgXP4RQjeY4jptksMyzaJ9141WT",
  "key36": "5Gkap4oq3x7PsUwPjSUSYbN2M98aaqJCc9HwV54iAu3SYe6WojWMtoM3jivrGirE4Def7CS1WzSFHpDyfWZL6dvk",
  "key37": "22KSAKLsc2m5TXd3s8AF9nibkCgj3mnEz6KYxzRrfhSzWTq4ZQQQjr3hamkAismk7GfsTcahLRm6Sb6svFdymR9S",
  "key38": "4t4Y521qNi66z2WDHsaGZgdzqhuAhzqjoUAoNzRP9VJSpuneduMeSoTvgi9g5BbY5pv4KiRg7mmdraKNCb4GjKAG"
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
