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
    "eaFxsqLSEmKvbEaoK19LwBBL2BXUenZuwwUWZX5kwkAAdbBQbtqj85kdN2moAietmswSFdkkNvSdVRSpfeeG8Bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cBwii9smpVJWE49a3WTVTtCin1VJxVVkH7mAfac8ePHpA4XC2vLGyDEagcfwnRigZ5v7tuLVaGw6T9ThrxSXk1g",
  "key1": "2Kd7wMRnE4Q8mEAh8iKjsCS5cZttC3HRtPr84YnR9VUfV2FBr2Lu1bC1MHWv788o4w6Z2Bf7Em9cStX83SDSfGAr",
  "key2": "28JDURwLX5xRKqHEPnt6EWttpNx5jX8CrkWp3zUqv3HdXPjhnndAVTFqxNbvGQvkYKUfYeszSPJDTACk2AMJLV9G",
  "key3": "k6yWskprzprfGGTBvauSaojCxBzUidejdvfemnAwvpojhkiM83bge9tVJTjwjiq5gXJvytebzKCQ2ea1xHzJyiE",
  "key4": "3QGjQXg9vb96W3HZQsEBbWDtez9BmQKZFzqfh5PFUAcUsoaJpDvHRQXvH9QpR7aXGrGoRjcbwwsBdQqEbUfy7YJQ",
  "key5": "4fKzVhm2xosAWVGFMKrA4QMZunPUft3CHkACx6Azq9hPtEbbR4jD7nsQFLCFUgYX6zFbse18GVaPPUW7RmzNivyT",
  "key6": "3RVxAGNGeb1ZLBZVJcwcyngVdgfkxcyvxnSWTB7uJEjLpc1R1tzWzvbeBbHcB4Tnphvz6kJhkLhupt1wtuupoC2N",
  "key7": "3NvE5hSxeacyP2eFDNb6hpE8ofJUWnkKyBcg9yuMMm6GjMwaiLbyZgsQgbkyCyYQaYChswamewkE2kdLAPjsFDQe",
  "key8": "rg7ehU4S12Ks15NonwuABERUhpA5q8uZx8EFySZiLdumJNgiGiz4deJoU1BNN4BjEha1udBrpzxvSr7peAbW1te",
  "key9": "3P5TfWsMxsGeeQKc5vWff7ECbn1xVctJKNehx5SJhn3SNkN1zf6mG9HPVLuhBrnqJouC91MjuPobTqbyeJpfikej",
  "key10": "2CZcr75hTF83Memod9gSfg41B7LQepDxGkuKsxdfiAXgzZrz6G7TihSL1kxgQKG5pUUwVsCVQ9KwJ7Yi3YCiMuY8",
  "key11": "5ooBUrEj1RAxs6PkF56syt93RGLtdtsFcyWpmVDC7wfQAHfqb7NyDRqFEaEsKHtj6ZeEhMkCDz3QLxCWmf4yjxPm",
  "key12": "62ecwSVjdGBeWzkw826XwvBDysXT1d1bgqTjL8Un3BjAGmv9zNqvCNrdQtb668BbqfKvyMr7BrhMnRvYCuYZJntD",
  "key13": "2Xekc6zdvKBqsbJ7a2mbDA8p1PVKPKK26C5LVMTcgyCXf56WyRdb4ewCv2poMB6Uqs2wjKP4hjSBMEm4QvpyQPbf",
  "key14": "4ZKDnUNXQN8aysSXyAakQwL8AbeGg9hY2QPMNrKYf5DfdxuTxkuEBjLTp6x4f4s8pFbRgzxiufp4oYJ1tJxBuh7L",
  "key15": "3Bxigh9VsbRLXsjxjxqVWVbkpXM9VG9N6GUfxGsfXCdNnkHTxdq88RQDy5xZrpRqZ4Z8q4ToWHaPLAdkJgWA8gww",
  "key16": "5JJET6GBS249vWhLf32EryrNXyvN1TH69i9ADFAp6FXemg36f3uXtGNMB7oSGBDMCaZPu7AGRQnMcWPhD1UkHUwz",
  "key17": "4NcoVicKvMt3UwpevRzWrfZmVDbAMZNQYoXXWriHSfwNggYAtDfkuo36GTnWVvDPyNd8C6dZKnBzf25iVzHLuSPn",
  "key18": "5ycz1vf4qA5MKyRDKLiApoNTQPtWEo5gGbpBHDkMSVcJKy7DE6GNgH2jGnhna8qENh1CFgQUPg4ifMLSR4krtLte",
  "key19": "4z14QxHSusLESDRjCsbhMkk4HJ5fbXtQuRhv6mRNykUdGcVmmAN4gagtUKBUt5yNrNqSzTnZLqii71HJDKcPjEei",
  "key20": "2dB5xNU7g6AfZhNiDfhyPb8MABGjXRsFJG3YibuyWy8Ld4okX6N93i7kjbgPBJAf9pDBWg7g22G4G7r1VLo4MXQk",
  "key21": "2urkPhBdHntSdCctDMHJv1GC87ir6rnmCXF8ynmbpJNwuWuSQBWNa4FGGMi3hkZbfmq39XZJVDhjBJKFv2UVMzSD",
  "key22": "4TseLskd2uvgDsTvwzMWPf6hXaPdpMNtxQa9KaAsNrTiTFSG4qcv19x17aUUEeQY3fG4v3a5b1qp7hpvDqgRVCwt",
  "key23": "APUNLyrZ3XdBYSgK2tUtqYwmjUrtubBkHmoms9MPXD92CrLhKUn51NjCPNFiajLGQnHDKES5ogY75GTY4eyGd88",
  "key24": "5durssXTcpqTxwja1mjovLLdrCiwQP9XiNtvXwvLSp94Txq9yNsymkpaMM5jSAxnvUpXgpD7yWEwKBSmui7sseiY",
  "key25": "4u173ZG8CSEkEA4W14heWhVnBAgNUzFp3RmM4rWRx3WqdidSUX6yMMzzJHoWmHsAd353NNS3PvKbGyyGU28FK3tp",
  "key26": "3omead2eh24nkkupaBKR7mQamNdwqGEqUg3xgrCcht8HCQ6DhTG6qeu5cAZL5bsQFB41az58dsK6VBDEaGbgUMYz",
  "key27": "5b2ZwLeCApyCNdvgESLABzQBAfpzpcQFrL1YKyyqgDMiWV5GXC36bPGrB8nwjA1zKRqg9ooubUY1vUmfqNEq8thn",
  "key28": "59DufPGGrBQRLtDDYQmU6975ipEA7qWjDQe8HeGnsDjJ5Y4DJQrPK2JRSyRBWpgVBWDhw3int7stg9pbx2zKGjpM",
  "key29": "8JLQACL1huih5YJWkkNgVTSPA3JiNtwhQEE2dCHqDBtnY6JZoQvkLMBSE4jorApuQXEGqgMsbrxxkwyGSjDHaQr",
  "key30": "4k1imyfRPW69QfVA3zCZhdoyq4WoM8YornVjBAsvdBbfVkdoTG5P1dkrZz5wNJVixHiQqn3tuCNCh5Cm5oBwC2dg",
  "key31": "5uH63cMbFwr1rL1GmEYtNDgR4rmhcCJTupZfXQ2D3itrM4Gmmq28EADE88BT5SeVZnDBtyLm8JgYBphQYoiaabn8",
  "key32": "24y4NECLtkCvPjXXykpLdjaupcA4t2pY916o7fQzwZ12RfZgS5EHGcPvQfqVdjJrxWcD9L9A18vZJ1aAxL82DRDb",
  "key33": "4WrScKr7rN2GFxELLwZ5FTrBD5gKJGCiC8UgNuXnunbdD5pedfcJnAKifd25p15MA9MiKU4czFsPkBYuSB5Jktzd",
  "key34": "vkSPTGiQLMVJdifWjdqdSKWVugsLKjRu5qJAjtwLGqYkAwrEeoF6vc8PpgyS5BNT5cmSAacJFovfJPpu1csqrnR",
  "key35": "5ggRHe1tziU2tF3myokR8UfCkRx5A9kdqVpizPjsPDTF3k57AzxPBfEwfS79LaGE5e3LEH6Rr2fuVnavhZqN5Eiz",
  "key36": "5ZJiGprtyqcgdyfvEKDCncD4huAJ8KiSNV5z9uhuyuCXgQVfRCBasBqFYvV3oiu7N1xUc1KHgEnbTbqiL3nX3H7Y",
  "key37": "4JQKLfLWXeD7MdZnJNYTPiXiUr7p3bMY18ogMRF5oLftT2ZtnKc98ngv79A9Guo567KzPwPxZbjXC4rc5XFLJyTT",
  "key38": "5Xc1CCCHMu2MxXAm25HHBw6v1t2anrXergk5K5nkesSm7zmpTownEjCuYihtTrcA8KNaNnqraVbgK4WKH62EXddH",
  "key39": "4kuW3uh1S7qhhfv4vy4EqWVujq9czMHVhDttFSCcD2C14wT4LQXTeVMCnY7hYrjErwBE6gWFdDGZVxAh1PgvhQyj",
  "key40": "51bi9yuAAhH2ZzSThtRSWdYChfrzyg4py8CuXVXnrPRLZ7SByPa5PYnGitjepD5CEsAruyzjMbZDMAtbCPcA7rew",
  "key41": "5Sx1F27gCsYJsYCPuJA2sFqb9oZY1mxDC4spJS2fMujCeQSb3TgiL6Npjjt5oKktujo5Yr2BjXxyswgvS7cNc8te",
  "key42": "52aSeLVJpCxXk8PCb456eKwCdmHZuafN1QDECn6PRKaxH2pP1BGtfd6VtazsxTGg19ZawD2Z1sv6gMCwJLWerYC4",
  "key43": "HH9ScWLYeY28jB57g1sNsvJmcpjKRZoE3nJBJdo2f4ouPqB5vBAocSvtv2SAyMYimuR5gw5yFmuEwRntKVoL42y",
  "key44": "5BAirEBouZJLeoLC5WmW8ptKztk9G32R1AeqUM2SVpRVTJv1hBo4JLcohGu536DdAaDb5efLf8AzPzvSJFjbYc86",
  "key45": "rNFPNGZcGmPHNLtMp6p31wNcppQadSphiEAYyNiSufNBGYZW22X7hs3agPVpwheLXD6WC5EoDDLTGYJUuRJL24z",
  "key46": "5Rn13XiHwQ2hDNrfyJ6VzBSraMHtw2LS4E2ptuKezbDtFCCu9omwkhTNZfNkB6DTMgY4Bnj77iyhe3tUdg88GH4i",
  "key47": "9kxaVTvnWdBFDGpsBH6GvhSQVcbsK7Gs8YtbShjUtY5jEk2KA2r6BcUXV8jLHciHt8xgMuDfiNqvAbZpVc2MKRa",
  "key48": "4mcHrx3Gh3iznRUeWR4A7Yf6R9V2DGgQJvDrjqMHtaerUpL4UFASZCn3RJRVWgsrMJwhZNRHFhW8y31bx9arwwCK"
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
