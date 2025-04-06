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
    "2AfgY75jV2Rgy4cjMCgpw8vATViheLuYELeiP1WTiKqDBzS8B4ZT5m9ykbB2ucgzV37oLXt1YPeAm6b69mGgSgWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcMeKrEwEAdNJ8FsTTsQ4KQqQtH6XUPXpqTUNvskGJMNcSYyh9WjfgYtttDsxzMUGukvE66Pfr35SJy6HHwmcf4",
  "key1": "4XmyGvrCJ1hLGz1mwkbkpa8WtcG4anoRQmMsD9hnu4NjrUXoigh2YTxoZxVe5oqZb2bzPwHUmEozcZADBAc9zNVS",
  "key2": "5nVr67uTRtXja4e45AnPauZzvV6AHaJRunYzGADSFMdUeVLWMm1skEBd2wxnxfRYPtNkunoL73zyQMRKikw8BJxW",
  "key3": "24uSj8soCcyhByYxPjzJxi6WZAX8sqHQ8EewwRGKQAdtLoRJuDysyckEjtVkBNpRtoie7XLrrfqzsMdTzcL385CG",
  "key4": "4TTjMpRM4R9JeZZ9PUv1tW1BUfQnVzpFtMMiw5oY1D2P1cX9S8TbKcaoX5k32GCoAGAkziachTDHYTcHKgU4WMvR",
  "key5": "3yL4K1QYVgdEVsVQHBVGnbf293Gqb7ezNR9n4yLu1mrx5HSaDesxhRR2oHNMRHxrUX7bGuGbs4jecLd2WBbzZejq",
  "key6": "ZQ5GaSRAP8y6zfM9kiXFKPuLBz1aa9cLvzd25Tt8qMbqCGnNjkpjfhtZRQFvva41UnFsqYktX5zx1uSjMAVN5ay",
  "key7": "2wnodzsHwC1GHArLJxUc1Lb2MSZ64BHb5DeYMMcqtFXWJNoaeajx4fpUdhe2mcEtcwyySmW543w5Uuo66CVxJ42D",
  "key8": "43Pf2TQihUkpqVGjja3EkFVN7GNzvEaLVtn5zxp8ifAqMkUgvsHo5ugxPQhdyF9cnxLosN63BKAWy7CpW26gDjj3",
  "key9": "2PRbq6Tf3ThAmkQhkDaRYntE2o2yXSaoxBv8zJEt67puPBK6ufajvjQQ5o2PGJf43bHZZFkEBTFEaVPkg7bwgbuo",
  "key10": "3oSSb4HkkGnuCaom3UhSi9tLSPTmnAoFbo5V8C4Q7q5HBX7KoM894TTLorFi7huZUmY2ZrdJ5K5abTuUsCjgkVT2",
  "key11": "4wCnbLkJoGTnzieE8EmiVj6NU9MtHaxWXYFEuNCLtfeiZyHQh7vDj6pRhgh5sFAqQ5Z424qtXp6kpzygKy9H8ZPE",
  "key12": "2gSPLvSQvmqEwddR8VmuAqmEvR1KCp9TALgo1LAr7VxyRCB8sp3boGn8b7wTc9zS3mgHY52syzmPdE3YKSgLKJue",
  "key13": "4QXtEd7s4Q37jtrvc7tR415bFStUfHmWEHNeyTpU42nMZA8NkfaEQSMsp7S34FVjvggRDftzHbz8SAm4xeQC7n4E",
  "key14": "4Q3eeuifQLposJ3YM3MYYpPL5xjGBkrn2TWsdwYnGqncYywMPge3VJqBymz6AFPJkiu9jwMaxMbtpuvQ8oaH6qzd",
  "key15": "3EjPECod5SEWzPdNp8EWWgNKdWzzxc3SCaxmzvVCrjg5knaHT6tVzZetFqj5Tkd4n62TxA459NoQaL9R9eqAFMqS",
  "key16": "jfRAA851kVXM8vsrTkiAVwePNfg3CYNUMDmdwu2RkauPxCMqDt8j7BJXpMLUmW4RxFpbJhyFPHMuwr4h9wdAfP9",
  "key17": "4UruYAxVyu8uvAXBSzd723a7tkx2xS2dBReiUwJowagygnSPtWYvhE7f3CC4nPnKYNkFuCTCMPkNPurr6LCbB8MD",
  "key18": "44tHBorDr7wD7Kb6H8kAHWFXYwiiec4tZyMo5SMftGeKQXQEZYpgSn8sRaBHu2R9aoWr5DS71LkhbZmAdEL1p738",
  "key19": "2gR99Jdk8cWz2DgMcCSQYKHRm5GdjezU6quEoUAjAp8qLvrgKMNc2bXcNaBZGxwh13H96Ne7jWvtjkem9VJ2e5uH",
  "key20": "2a1KWv3EKKzAGvD1rXgzVPKhhPmqr8Ww4GokMyDQWx2R79whu1Krn71W9fPbDTSiyKQ1DpwhKzLFqEAefunHHHFR",
  "key21": "4oPoT1N3gSzALTceK4t29UBRap4nG8H9ZBkTjjN6HyjNtLUDP7fQfdByPazMuVYJQwYPbEb9QK68Yw1b7SKGSTmP",
  "key22": "5752F8NHszwNusopKRfeZqjWokftazTz7j7Gvry8t2NzNvg9Ee1fW4e7Dti48Zwqb2y4jy26GBEEy8gZ41TaLL8e",
  "key23": "5BaJSzsgacFZeswdMvHe2weE3VcBkUNGYfvmYJvFAGv8T1VdAwseVHukCkDEq6apxkhsvVBA7TrQe6cQ3zHYgRzN",
  "key24": "NVEtxgtNKc1waXRKkiaoUGHDhvhhHpgUoqeK9v5tvzuPCoBWjVpxE1zsWVFKUtz7PAsiZ5omdEPSSDtvYBbof1p",
  "key25": "fRkVyRVS1vRV47CstvFunQg8acv5Ms4FJNUbNQEm2H3vjapcXAJbNR9JhufSbNx1mJSMTxcGm8UBEyYJ5vrVm16",
  "key26": "5NusLQX9pF8Jfe4y9DYsSuLz6o8xnpzBZUjieKXP7pfLxpq3bt7wtGHQLnyYFUp9igcTcuWGbWVujnSggyMC3EdW",
  "key27": "4uDjTPFtyN1STRK867VXZcYNEKLeYTx2DDWvcFVmLkPgp9KPzt3qbm2pFcFW2JH5iHXzybFQmLmBkih9rTtZRj9X",
  "key28": "5Emhb82Aijhf2UPtKoRwCpiQ6RysrxhRb3bYyKxDncsyX8se5RMSbb6FHNXD5t2AsN2GBSVbzUYWGsbSCmHHXeSs",
  "key29": "5Mtb71ibnhS1LmaXmb1soy4Bp1Qcxg9KK9z7aer1EKfCmk5jDWS8HSTwNAxFwskC6T7LZ2W7z57QDkRTqVU43VHi",
  "key30": "2FKsL4KjB5tMMshzMHF51HihDcZ9NQwJqpjf1XPXj9a7NcQyjpdQdZyNfsNf4hQxuNaczbwoFTaw4TkrfU3t9R1B",
  "key31": "2Qr4qu2r1ncZM2c5TBeM5yH5HPRi92MuquBufadGRkZpFNLsn9Ji5aZ1mh2E2jUkugukokjKAzkoU3N63Bri9gqF",
  "key32": "5cHcF3gxqoPYPKqqkqBxfCAPEPdt6qJmyTG2223QwSutjGH5jb9VXkYD8CPvFcUbxZUxdYFrEyeUFqto1E8dmf1R",
  "key33": "5vV1rKjKsWFEfjnBTJM745UD4eQreTPJfL8Za7i9ReHeVkEotkwgBjTEmNK9WWz1U64YZeDg5KMuSL2b5UxB8MM6",
  "key34": "xE2ncGrUeQ7PYyDuJZU1A1bzy6yLMo48Hb15ExpcZ1MtyXcEh4PjWZhe2dY7voWq5YaEaSV9hDFGzwun7rEUaNn",
  "key35": "5ipNCWnzDEDrQpeYDABWffHappx6d9SRuiibuVBGn6EvycUFMcLNimcMejSTBbWortjhx6ce48KcSo1f28hW1BVD",
  "key36": "67jzWvwGs8cDvNeSwoAQNKRE6yvmYJuHWXKBYePqFQkj4gUEdG3BTxpiCKm7QAMRToUtk3YRRQM8AiE7gBDX4vSa",
  "key37": "4fzBAhmNNYrmDhpKFPjrghjtLVLYi9FBVL8V5vzDtQRtY2ANm5gQPEMH9G5vRh7JPU3hz3BVPwmdUVBR64JqiH2F",
  "key38": "3m8hrZvL83EY3EF21sj9rQHHpjGpQCAepAZyfEc33FVHbyNX11zg5kjiEQf6TjMrfDyBhfxb9TXhBiNKUcLTZXd3",
  "key39": "hqV1mXwtxXx9jibheb4icT6Z5UY9PJ4e6XDTs2aFjLLNgKLMzaFHz7wt9aVhpxLEtpawUmS3A6DfDVJfBCDWBKR",
  "key40": "5VmEePqEF6oqMrtxSznE2CPfZ8BgmrfoKAAvC2zW6cReZqBuTBLScMB39pqkKu934R95N8VnFqKC3oH5tFn8MvqW",
  "key41": "5ndibNhsAVny6bsccZ6GRh38eDb64bq16EVrftwEZ4W3ib5ETFeriCjVn9a27UaWH6841PdkHcQmj14mgabjA7GZ",
  "key42": "5WohKeFuNgtfnGbzshXnVPkqXSWZDcpJWSMdBwc6wWwRhyBxr1frSaiPiBzyVUcEQLKxyVXtL136z57Xi333LBMz",
  "key43": "YUjC4ErU1NkLGx6LdmVcWuEYbRe4yJmiimgd43HG95qe8hSwHb6go9B3NzsYXozfY3NBmac8supAvedjE3TJCoL",
  "key44": "6262G56h1kyDa2QPV5eaJWNDHCVrU2Z7LNby5ZwaxzhmrvhK5mxbghAu1d54XMDaRv4NobR7jGMXfQXbAUzRamKr",
  "key45": "CKJE27xhqaW2NzoTBk7HVYdkU5fPneA6c1YK6nCfg5Z4HUPFBstsXunpJCSxamNH4J3RNFq81FRep1jb61zU92J",
  "key46": "4ZU9TXEw4vwUHs6HH2f88CYSTY7HbX939rckoSDXzePMV17oTVyZZjCBv5jAcKWnT37qqey2jhKdj7Ki8UKESsDb",
  "key47": "3rquZtdADN28PX3nFABXeknFK3XH6yG3BbHRd7c8MVY262V73d4ZcL94dB364VtZroDBsEG94o1LmM58SxxE1nuU"
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
