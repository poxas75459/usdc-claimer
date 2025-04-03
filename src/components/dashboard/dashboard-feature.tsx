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
    "3sd47G98UaVG9Rp8rhUFXoHqGejfcaEzDxNzmU1Pof7DTWohsjjviaHJCvk5v5WD2mqXMVUkCKg1veXP19cCU6Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ijQ3UoRtfWsxnuiFMJBzHUu3cpXyqe5kQQCVxy9tXXz9qboUztkqsSNyxvdQg6b3KeE4r2QpsW8RbzPAcc8szET",
  "key1": "7WamRn27L94PX5gkGjjWQEHT4FguFrvHJ6bq4SG4osSCbYTgGvvpjCHvmTVpRumqEMtZ6EqwDMGxGg985WiDk1f",
  "key2": "5CYfv6nE4hsRJt8rah9UBcoD1JpurYqqwmFjk1uxn37dRMCNUjXuvFCTTumrZWt8RAjJCTum2cgJyaM27w6RDaoW",
  "key3": "5eqNxSXwx6WWwVn6pSn1FX3HYCU54Jhyq3ve6P3jTNPTzwFkiC1DouvruQ2GcBmEmU4uEy9yGcdJkDSzuAD5F41H",
  "key4": "2CA6HDDc15ZHWzm6Mfww8Z8hCkQbqM682JbKBeJM2rkScZWdLSNzx54g6uKiJwPyYFTgpUFcj8yp1VDS5H3VNtDp",
  "key5": "2pDuhp3si6rMHYzeux7iGKBVbhV9KFLq6mcWH9G2vyA3KpL5LozpJfq23NopPo8Xi3qPgAeiDmM4BDQ1q376VjSK",
  "key6": "4K9YA7YjJfW1kWgnkm1bAEwDJEbn9A5WvPgBSRnDmAiDvxBro4PMR3SaMApH2aeHJ7gr2gYF17Cz3PVLSDK4SQMF",
  "key7": "3MyijP3t1D3o2wmPA6jcNBKdHtT9nCSkfLhyhjyZs8hDvUoYjDBpkm62q6YE51S2PWdkhPEvCD4LPu9Lx3A3GiC2",
  "key8": "35eWvLpKFC7MvMKvKXkm94ga4C9ndhsn5nTpQjgtfmRbuHAoDhTvpGG4VjepajxpxaGo4zFX8AvdnBh6pZPTNq3R",
  "key9": "37Ju23ovFxUR6U4WKQHfjADHk5gwjQW9zMYespo6Fjp1TQnGVLKDGoTcwLkkAdmw7yoJKfWCeopwo2z1SVZVZYwP",
  "key10": "34i6YFVTB8uXjEyDpGRWSBpn5Es8sqN8T2YzZB8zK8WXvxaLz8w8RrrqpnWeop1aXVpiw59D2CvC3xknzciu4Cg6",
  "key11": "4JkakTRQLWrCsyiG7fPfbJWPNHyESYwdttXyD1BCfBbp5g1f6dYmm49UnBArVPSC6uvHQ1aq7PUqo4dPgS7sqvdo",
  "key12": "4oSPwVP5urNB3yUyUui7Nt3FtXvaMKkwdUWmGq86pYQQrriRdsHhPKA9XAhCK24bcWKd6yeDhZ4Lku15NpqycbTD",
  "key13": "2WHjJtdBCLuE6uBeDPVvKo9y2ZCDCMj4xgEHhyyUECWZ3jCUhXHA5tFmPvAd2cWyjYjLHr3Dw9yNUeTr6Bfg8zxD",
  "key14": "43WbiLynjLEK3htcJzfzxcJqqvt9dePP5aUv15mG2XUY8qPS13oc3U3Q92z7dsxGLRsaafyT1yvGN6C6ED419Fbz",
  "key15": "5YVqykn2FtWoJnmTiFjr4BsYNTqsQZFT5TDY3oVUiLFd4tWUTFqQi5t58X7nUMJ7qxx25w2jyK4dR1UyUaKnYJaQ",
  "key16": "PNb3vtKoEBcB6tHE4F8QcrbHHUomJYnZer3wTR4dhfo5rb4NkTVVyvqVB7wH1viEkwauispwY3ZyJ9mv3dtKoZS",
  "key17": "bRa6KxoSvTYsvdEwx7unxotcGibojfG3SeXz3QkDLmEBYC68HNANZXPUvwSTMZNe5c42YYo4HT5x3MQ4YAd7vr5",
  "key18": "3LCf8DRNV9Hf2WUqe7zoJmRcG7ayo1HnngBC1Fhmbss6gnhnVcJ3Eq86pNjhEGByykFzFksiHfSmDU4mUtjf1ia9",
  "key19": "5dVzDiVH3GG2vNhfB74jZiwfEgfxv534qnVnwdpczkemnseQXCL1nugQgkPvyykEA5se8Zpno2qWsWX6fYuRsE4q",
  "key20": "4uPBUpLRjEszT5ePXy6Bz5UG6sGqM28ms5F2wiJcF3G7Jngc3GdQEV36b1oMoA7pyvBxUKJxSJjW6nroo7wmCxuz",
  "key21": "2cqexqWDkcxXRwZtuQPv6QQS8MgQuGjwTargpEYbrYoWEqX8dYKmmaWwHRKm11YD9H8WkrubTmiVGDX4ABWQgZsR",
  "key22": "25vo3CH4o9baX5QUf9VxDGCnV3UckiNpYbSo7jhLZGWoJu46AbkoC7dt4rBGhC1hqxxryxHMuECBfB4GRwaYGEf8",
  "key23": "66AtcYQT6BVhisBrBkkZXF9Rv4hhrRDfHaAyoZhiL4GPPLqQizmVa1sidsFCd2NVjxKhaW7Cf5BT5SBCeMX7iyCk",
  "key24": "4qRQJdKtShF9xhNKExRxVDLNYmgsr4K26By91UvG8hXoXBKykrb2qXAve9imh4bivmtVVb7sVQ2ro523mT277CRr",
  "key25": "L9REGuTuyJZCq6b214j1mZWCNoQaypH3Q8wGmn3LqPbQNGygYNBVgPFnCqePFp8Vg5AGhFkStAA1MhUfh2X9HsR",
  "key26": "5BXUz5dru7ydzAEeXSwJM3msTyYF8d58GUnZ3iGZts8etSJ6mw3eR1ZrRMUM7j5PdP3QYEEPuThgpYBBwSM4GeuU",
  "key27": "3o6KEfyzKaV1erVCioNDPbTARjZxTNAbsryaPV56LE5VypnmEra2oNnb5ZXcsU6k54NDapHimhQbKgg9JUkSnRSc",
  "key28": "2vhjxtxmKKxjd2Cm6FeBxrN8QpmJENdfJhyHU5NxAaUfKcJMnKxqbMiucMicpw6AEoGUSkWHeJW367zARY5opFwQ",
  "key29": "9M8RuUomijRjZK7oUiPWebPRmQBw8bySd5Go7KJAcEXxRX8UhsDhePgGcAFYFAFYKABd81s73Q27eLGXLyYqT26",
  "key30": "5962YNMMvZqwgrEcxLM8Fh58EbBzntD4L54tPjZWxf1XKFc6mDVNEbqCUQusyKabUdrvew1vVzdnq2tY8tpWT1my",
  "key31": "38LvMcvKpeg7Y2ETiTqTTNRwPqnBpawYiwxktGCZQzCEGoBaxp8CWWJyZRej4uQ3qTANUXkAxaU5boWzXLJMz94o",
  "key32": "2uyhjAiKsTQdtLfLcz9qNX2kRsDWF5NSyUKKAUJ9VmmrMnSX7bD4z6MHW6g83f2QGcqt2sip63o9xsqLLCamxEwU",
  "key33": "4kBSSYANX2abNTzSNs81VdeDRwbcshECP5uVBJVy3cV8sNmfKDq9r9cXrWAhZWyRTyjaF9F4z4nKboAbGXqFgioF",
  "key34": "2vpWAa4UqfP3nTgjiwFyMfRRbP9V3PYATRsp58RKB8zeBwnx6BTCZjTfQZfB7TkJFd6oU9LcdXLzPXL4rt9MAGUq",
  "key35": "3d62goH4MaNJuTxfQvXXciL4NWMMJmuAqMW15AY3g9FgtDDq7CT35DXYn6nA7Agzck4faXvziE7rQgZQW1MpzTGj",
  "key36": "nBFLDq6GkMA4Cduf8Mvb6mqSHUGtf5xYA97V3xkH6zsrhJaNZjfyfAe6mEj154cZckMUgSHscB281xbZhbBcFpT",
  "key37": "2athq84mARkMCCYD3Zj64A9btfo1KDxh794PVgoWyTgMyesQPpXmef3V9pPAsAiw87X3jsBwsu2JiRaX97hfudue",
  "key38": "48Yjq1JQtjAMSQFTeob7qQ3t6k3j3Xe5vmEBB9sgcrig7TXzVMGF4gwXbeqkvDTbhcBLma4ni4o7NQ1Ln6S1DYzh",
  "key39": "31WPQ5yvKRP9Fkcyp21KwcC9XeJYVtzK8FTEvdWPr8UxCqSc5VzAfMBPywFNeEmCTSQZCsz4CKuMS9KBdE3zctUs",
  "key40": "61FD25x6kAyzjR5H6kED71WXANkDxAmyvZwBd9AKjXUcbTBwaEiwN19fdP4GsR4acaQrYPsT9JqCetPpGYRV6NEN",
  "key41": "483FVn3Eqa6PTMnaNMdW7R3wZ4juBqMgtUCWjEECPe41Csbc3FQtzDTi3gkcqc2mmz1dD95RyP2ujVUU9Dq3ut7g",
  "key42": "3sQ9BXKH8aBYKAXB2vLqDMw3yBWgFcLEDn6b9ni5dHhy9EPv2gFZ7wGoVbar14JA64dGniji9fv4RTtHYv7bi6E8",
  "key43": "39gKzSr2RxtWR7D9DW1Fn92tZ53w75XZ4WzRezAhDxG7KuQhoePCFvER8A8tuWcpE8ndQtvpptGABXKrdhSTf4NK",
  "key44": "4Ypkm5PRmHVWnVNHXaQGm3394XBzvD2Ah6WD6kkU3tCDAZgvUKjnqsz79z2mFeTsVwbWQh4eeTZ3fkMmXTXhNh2D",
  "key45": "5CW8sdzsh5za3RXmvHugaiNSM2wUzd2FePVb1PNw5boKErTbzZQLpiMptpiMoQatJSmTcURwRnKGBCk7tggxjKX3",
  "key46": "dWhrVEV5bB7NBgLsbGp4aMt8SkF3GMiLM8BTo78CDenJsvg1G3iJhqN5Qit7dpMrGcHsJHazkEmehETxKahQevn",
  "key47": "rXoh33YfxvZ5dXc4rYEZDUHdNGw1hZV4QKpoHogdyYAhJRHsGPv7uQFePvz3MwEvSN2mL1V3prJMDpRCdt44AVJ",
  "key48": "Z3JF72cC9D86YFZgVa2FfkesTAmfQFuhgNXQeWigQECCWbWFtzAGPKot4CrcqmNQC7XqguEVBxsoDHnKDeaq6ka"
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
