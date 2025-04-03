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
    "4EQcTkBFPUtXeg2YdRZFCx7Lm449cmBsLqvVRAL9JUKsmerfbCC7n2qjUmmnDHJh2M6R2MfLHN14XcLPzn3aJ3Zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ivBVnBPbudPaG6ggiCRh6NtinuUbWAy9Li739cvFo51xJDCCk2TuJWKB8nsnMGPDzeBiHYpDJNH3fhrNBWvBWc7",
  "key1": "3qHectTgtXgT86QRfvKsDomiWu9zsUrQcSRSBz56Rcj9LpCMiJqA4KhK68hqEso6viuSA78actt8MHUcnstsdDCH",
  "key2": "9q51pJnobbJhM62TwdtJB6ZqVVZ1pZsqGdjbTGiA2Z8zpVUNkH5ubtD3tRUjyruQ5mYWA1yZevQ6j8Y2M7v9HCw",
  "key3": "67gLS5F3KoJTDRU4aEJS5iWTFD4igQY2muMHYSZBPY5s5vy6WdAanxpNchx1XdA8YKE3eqnMdFGyckC3rYgJ5wuC",
  "key4": "5w67KU2qoDc7tvCacUb6cEtyh7ZNfrgLsFBxUh6ELk4C2BtC7cxinZDqRczSXy9r33jNkxxzj6Vwdqw2yZYM7xLJ",
  "key5": "559VaZNSqpXTAZM2tNPkL1rSmD5UXctKmz3Ky5oo89E9WoGpduyCsXTn5mJo9NLAw2mxFQGjHCH3FNhkahYkqV3G",
  "key6": "vrpQFAmgrDCVwb8LyEmm4bro4WrRtQMvCpXaxLihKQpWTGMH1Vp3vQEBXH6bCy9VXKgh4LnyZpAMcsNtdPrk32k",
  "key7": "mDtFxBvZb33Fh6eTAkigJKwRgjvcAr3nFauVJ7bqhcRgJFD5UxKBS5v692G1MTXPbu9TX7VzDCzWt7YZNYvxLHt",
  "key8": "5Uz1f9MJPNKwz1Ag4kZofVQPKC64qzn9ZvgEHrS2pjtFyew63FwdZV4Nb34DFujUKMHPdC8hZB4aeAzMWscQQEjd",
  "key9": "5RhdvKr6ATvMLjfKPP3TzWMbpwCMVEiB2rZzphRiFZfQkMhqcjs4W9ByxMHuWZMvZiLb8u2gYeh2qhihzhqDCwac",
  "key10": "26oqbrFEFHhCH8kYG6eBbRBhrStUfD1VzGnM2R8b7FLNv1T6uiCf2bEMExwUfVTLXCnHjEZer3C1Xmk4NB2H8LjJ",
  "key11": "2ABzL9CJc7jZtFhwLKRdiroFQWKcjA3ZMLZ3gJTZYBWdgc7nrxxKCn6oUGTbxKkfQny1YLFznb7G5AKiYk4zid29",
  "key12": "35GcGJbqXXuKPEMYqKJEchDCTmc6JfCcDumr1MvJmo7PnnSeYGB1BSgfMF1XwDPBQGQTvTraqzHz5ogztsxgScw9",
  "key13": "3HXkpjbLbBUTxD37h7eJMmnehnrZz51XrmKam1hYVFqeWzFZuDrDriKiH9hdMTrCBoTezGaPKpJ9wg1aYPfikH3r",
  "key14": "cWdXzeChmeJ3tmTP9RdXcpnCg7KKrTyxJrdu3FiQfPuSHWrxEh5fHFC8eBvAZ9Tban9WGHve7FPsuR9aVRgD1s1",
  "key15": "6JTiTsowrLxMWT7g9afkNHBzruBKiqYoxuaCRzceyk61drWBsXPaqAdT3XjC2H1faBnGViZnNKu2y2k6XLn2Jje",
  "key16": "VtxjynwJRGtiZL45gQRUoY9s6sZ91P2niiSJFvVvay2yfjrSTApZkNSKjLW8mcts5ZPQM1M4GtdXJbo9b7qmP2K",
  "key17": "5yfNuH1dMErr6XWTtKXyVMqscykVuqqpMkXD36FugBKLLgEMQvs1Yet6rzZFNfah9Pn77xr2Cp31Hi9f1sztC8eS",
  "key18": "4fE5BibDEMRbFCaygJDg5yxDehqbrBdbXcnLuwvgjrr9zitcMgDKn3G45yTjGZtHbkUpAyaCc8MSpoU5VCzAhzux",
  "key19": "4znqeBGhDW46T5qEqo5enRPqHh2aZBDdHxfc9JUSZEcRWJYET1ZxeApaYgjNYT2keqgYuDK2HWh72cmWqVwkZPoj",
  "key20": "31ZmnbFgdee6NASmqkdz7Ke54c9XXntmCiv7gYQhuQbF24Dxi2FGpbuLbxLEaG94uRumTfnw4EAs82v1zM2RV5eb",
  "key21": "etoYPwxsrmnYZqQimtxDfBko8S7qBniHCoDwNifuFCKzZvN5nt68q9DZwgLSbwBR2SDmA81fMZTrTNXRkZ9bhit",
  "key22": "5Qm9P2xH9ykP4phb7zgRx4vMp2hCc57FuEkb98CS4aHUjAGkpxtg6afKZhPJZNPorZH8dze5BGU2zRLhYTLzfbX",
  "key23": "4V65aJ62TRZ7CKK2LJpSPYZFe75juHWAcHpGSWhpMpiT3hxxTow63huee4rVb9EkD8nMJeLeprtG9mPqcCLMfisy",
  "key24": "3shkdrUCFDnR4eBSLb6oEYWmDfGx4pH8udetNsT4gRH7PAx2ZwG8pkEnKhbY48np316sa5WiR9LU5MV766QFbw8n",
  "key25": "3ViHWTkgYjZGJ6HrVJB4usyfxCpPHLhnydJqKj6XYGxneduA2owtVGq276Th5ioBNzNDQU4Xo11FTzWxNrtbEAhY",
  "key26": "oNHrDSSoNhHdVWrgeXETngwL5jykpYz9TgEbxbmXQzWExf4E1YdhihmpDPtfjbzCLkVq4HsNpCV27mXi2phTCQv",
  "key27": "3MWgQg9PFfFnK2aTnV7AreQ7gR91qY2hPVnxCrGvpCFuakRMTjbxpyijSDYDarEoXS6zLTqW7i9BAgKsNX2u6cbg",
  "key28": "63wBbXV1q2TAbxuQAznXupcoYaS7TvWE8DnR5fsR3eoe9z2V5noYoB4yjVCh2AvdwYuH5VCTWMXcJMNW3ezvXzgc",
  "key29": "4MPs7xBCr5Vx3coJiFr93vr1dJ7ZJmpstMJwiSiZaGALQZec9MbrKcX6KtfL7BTa7MbdoBCwWM7srrwhk9eaGLE4",
  "key30": "3cP4TZwZN22wAYc6m4WTqeTNANk35mPHvpVAUa3DTN1KMWEfkj2jRJH6tfChovBnfy1Lsj19by2mJ3XHtW1yvsSo",
  "key31": "24zbUjcH1ZGBJm4SwxdMgzZWiLNkDGz2KKXyjH93EnWabNPswTDKeTZTbjs1Jj7HaZipKGFX36nW3wUzK8xKTy62",
  "key32": "62iGje4m25wTTwguFcVfPgdXzd2fGiggCap6K8zhpJuC2ZhzsebTqSXukDrjS1oBvvd2EMs9ZAZLutq9DyDPNRr2",
  "key33": "4m6qKtzapAgfwpUsvfJ1eCGmr5p9MSMzGzXBLGtCrG2Eqp6NAf9A5X9pY7gA37BcLhBrBCTQCeiLnLJf9T8r679t",
  "key34": "34PU5UUZQtzpcGyytzQnFeSrxqeCSHyip1afJ4i1v1bEpvhVRCCNdRHBE88eKdVfYZe8xHNUQtVTKrHrErDYG6hx",
  "key35": "31Uq6U29dXs9b1D1J2fDJ1JWZTMoeD92ani27x57UUtuJYP6fRKjYe4mGAXYhG7C18N9sv71AwmtBVQAftwyb99n",
  "key36": "67U4wPHxBgjxpDw1uJbDt815wnyPPqcxMJV73MKWxXvvvNLVr2MeZCPyJd1voxErPJ32T6ACZ8CYcPVQ814WTVVa",
  "key37": "KeNy1TCk7GrPNrcumHg52mHGVZjtLmSKxCQjcRgKqsrSMK8b4YQoCesbZCGnjrg5qx6adN9YWzyQ5Vkqs9xMWDz",
  "key38": "3hfRw124EhFD9Pufj8zeF6FyMstAEqndL8rkpbMULPx6AiTVCiSEgBmpkkyrdmqEAz2y91ZqCFYKZ6UHTC5LWkBS",
  "key39": "5XUcC4fmDvmBNyu1BH49MQEuEMwd4NiCip127cx2ToJ8DwUKXv4wKQw52yih7PdoMNSj5ZvvZgmCAM8AJgoERXEg",
  "key40": "41c4dGG8CWhZ6GFxEjJAMKfdr6ev5LNMWRL33iraD9X3oy1RjUtLWjPG1X4FuVG5aT97QBXg228wUowjbgtCJHJv",
  "key41": "5gw3X353KjGMtMyTJy8CoDb8PxLhQh7wcmmkJ6ZWiZj29tKLN6kqotptfgohmmH5WYxhwRgjWv4LSK63eAcfErfb",
  "key42": "2LKrqeDpjGC5j2zVaT2ar1Cc2Pb9g7Jvsxn4G1JsiWTm4nW8tSUR16meRaBucbF6yH6G2DKZchdrUeTgY8MqVMy1",
  "key43": "4JptEMpaZE2YVixjoD5FX1xy1Y8jwd9mPNJQqKgUAXUA359WEP8Lc8xcrhd5zEKrHbwqUGgbDPzEZNTgvfS5yMui"
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
