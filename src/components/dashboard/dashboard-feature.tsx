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
    "2rXfr9zUHmSmaJRqDisJqg8gfgxyoBqXPPwtsDeCHiXDaps2phw19GhDW86cJYB1QyZECHKEdvmdVAkjLJJUk51o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ChD8mNtXT2GLNrdTpuE1b9dYRwer2S7NRxm6GR1UW5ou7kzr18SeeWpf9ZgWj6pw21cd4K9trv1DG5bBJgvPYk4",
  "key1": "4XCrBffcoivmD1oSwJtk4V3SawdriM1oGkKCpv18PKHk2sR9vSct8mMGrXzEbuwjy8Dmvhb4aUSBibjHGrJgY3XF",
  "key2": "4UYnevutMaj3nxgUQUtAtFDgkcnegPRdbSM8XeN5hZ5yZGnuXE8BdN9j7wPZaFvnY8nSh8b595pTcPxax9aizAGg",
  "key3": "3JBsp1WMXyLwyzJnhTCPMbd6r2Ys4u3t3NbTktSPqLar28hFi1Vjguryzv7xntmS1Pf6NBPQ9fLSZyJb8L8Gjbxj",
  "key4": "RwMr1Ckh17VBkLAd6wffn5z6zbu4STY2YaWTwuwnorLJaJZkfX4wCW5hepo7R8oui3m2C2CNUhTHDCsEwTEiRt6",
  "key5": "4hPbGEe3xXXxcYgg59hTLjjU66SkJVFA4bQkJVGaPcTmXtvELM6RUYUnWi9vDVDG58iWCFvnMTDVEGH12u898w11",
  "key6": "3bjDpg5kVqjiBgjyCpsNTqvrQVm5vraYMyenGAA2y8Q97Jd4YGQmb5YUiMrD1Lp1iaQccSBpAUE4QNLL3WBoxtJX",
  "key7": "5wydzC2weaodzTqjHWQC3ugKyVVtEpoUoBjyH7VezJ8eG7976uw7RiT3vFXFVREaZkkLDGkDmsYneWqUXwQzt2cu",
  "key8": "4vyHuF6VcVfgFmaosJoGGXs3SvGfqPhpzq9kLyvfpH3JDgxcJ26aHG6RChuDP9WBjf33ijBKmLh9jewCBWEfnHwp",
  "key9": "6xHdqPJRPhnNhsoPfoj9z7avJKkpYPr6rmXRk2foffHnefAEfVba6GvuPTRUbmG9ubX8BNeaxoYF116NtP2QzzZ",
  "key10": "2NxLr9ag7TFYSjhWqWaG62j5EvqHaZBBXkMWHGk7q3TAZAAtWRZbCijbyfRDUTVVavnupsEs6CmHH2xryF2bT1zF",
  "key11": "5p5NheqkmeS8jojQYYk4hGvhsn7eXXEhPjQL5SfxTdcP3nnZjB1QZXZgFrmHnaK2sQcQKrFf1iczksRh9pDwhQRD",
  "key12": "5mP8zxmLUF4eWsaYcyguo3rMNLkao1aQqeLLuCWqCZ9eVKJ2YVos9QSwxof4a8pRMyNry8vnEmr57RXPsBv8TaCr",
  "key13": "51qTcEbmFDdN1qAXeFd7Er2Lymj5saz4qfJ8gwAneMVvSZizYBAEunQyJb6oLtTaNcwCeiRpDsKohKXNUB7BZCvD",
  "key14": "26szwv4xfbiFiRYssKRNBEW6jwo1TBLFH9y3wXKsV9YmVJ9v1w1UXQKswKbTgrSGBhrJWPS4figcaWPRxS7JFzFs",
  "key15": "23syqY4Bff8ap3TdEu7KH2Xor3M7aq3a1i5hQvkF1xnXV4FXyLt1uBBqRp1zeu2Lf1YCsoJkWgDLhTXRN67N9WtP",
  "key16": "2UbPfG6vGMcc3WnsRb2Smr33DmxQ5WFR5gFaM9Nw1VZQAzQxSwGWgcoK3TEejG4Ajmk9M6vvGcw3AjxPA1UWikLL",
  "key17": "3cG6tNppcWXHr3LsAVi213qMFVAdXRaokpy8zjTRFkqsNf8XK3nZPSQRGyZXLiTZCiKzNqMFroxSMLgH2hxv5MGs",
  "key18": "YeZH8X8pTGiGUwghBTiZCnmjRegDSBZ5cf5EvkMyLBADAfiNyeCa2veFasAyUouzBekYneWRFKrXkA78bcYNy9Z",
  "key19": "2W8rvVh4a7JxqSrU2R3hvtR121NdF1HGZGNSSRnquRESgeNR12uW4RkxHXQHig47uKfYPo8tjMvF6KcsPiqhGNbz",
  "key20": "yafhzsXgeSoeUtb9Yev6z4Xi2KxVtNeri9x7zwY8MjYuXrQ48sbi9WJfBBbZpmH6UkTtWJ47mZhw8Ef46gbJ6Qx",
  "key21": "5jt6jUSAUsvSmnELBQi8QwCYxemGZoCbRUiXxKb9MD6AZFkFpyv7cQLDaV1S1KqYGqngoDYR5TtW5iA2voFPFVrs",
  "key22": "bek6oNHdCrBaJb4cttEwFCcivntgG6Z5KEuJYFo1qyP33FYsSgQbFQQi2mi4XQfdQeQgb4gK5wq6sKpt2rixeio",
  "key23": "w61PzTexsPKedSMPbTFJRxWdNUtgcx7V4Hc3saBhX8Btt2uML3HYr6W42DyavFA58GFK7d2V5ZqkW4uBW1kGDUU",
  "key24": "3e5AnAJr6FCk9Bvw8HKMnSEqfTJfT3rE66FsB3qLdsNF4h3mVwoZKSAGg1cQ5zCuySLroFVFnd37gAQTsSv8ZFuP",
  "key25": "3eXXxCfAX5u6oD7DZ3fn7imdm7zqjAFpmqQMaM9Kx4tevUCt7725eC8ceBBrLyANdfiHYGuzfd283vouTBEePVia",
  "key26": "61ZzxkA4FmNgdcUyTVC6M7kKD5mxL8epmvTUr2mYF8XdpCU6rbnjjQUX7DuxGDMe5VoG1vdDHMSkq2yvGLM8FxA",
  "key27": "4V3EuRiTpJW8uPvdp5qN7xXLiNYsHcj6vYGGmGqDay4tn1y8g4affZ8joUKDRjAVRZGyDMQGHg7oTS9GaThMH6RH",
  "key28": "5rG3cQPhE5siBNqyQDwDQRwv6xr6ubPfaeWqR2tdMP9z8EbBGm88cxJ88VNndFHXBdo5QJVCRbn43L3HVMqDR9Kk",
  "key29": "asN3SWeijW9t9PWhzbuQZxRXEs8wL8yQtdFd1g8MMNV6gLYXznzScGmAeqE76f9wFsomQDMSzsfNrg1kSZdoBiE"
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
