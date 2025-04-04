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
    "4vyB3cqGZEeAwtLQ9Kxy1j7RF2rXs4pJmixgk2TPFAL54MXLmzyD3AH4HKgetez2TN8cEwzYbYrba8BuahaFk4T4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFmQXaPY7wSbXamHQ1etDGnToF7QN1W49iVsFwUu32LNgkrUeYVmZ2A1HBuP24Sxj4JaE3a4ePpyFwZsvsBtqz",
  "key1": "3iCZ1npBgpYvgCwH5V8qnnTrLEJb3gYUhyNQtA87BfxNUKW6kn4eyxWCL7YUsRykdhPGMZdZoNemiu58rfazuhDj",
  "key2": "4bVDAFd7J7EdwjhoV68BwhGCnYCb76h3ecX4NNpva4eZL9VGwfksRh4y7JtcWqaZ4HQsvcGgLHpdMKThNdw3Fhpu",
  "key3": "655YA3XTcREBJut4nmBUg5wckGUZakRuVJznuHBToXfj5JRZW68p1cDKYYn22W6PH6NFtau3Ed41gtjDzdaDsrSR",
  "key4": "3sXN1GWfZspg4r1NKD9TfH1UiHoauTGbgpD89PSBXEoeMXvPjD3x7UfMxvLd1rprRui4fDAznyURPu2waZuXXsqy",
  "key5": "5cVXeCG1zoZcCHburV4CWFT9qaiaKmosdQA5zY7bZa6sFEbkUtbwYhWajJev8pPgcPP4WJnGVLtmyQY9v3DdLEE3",
  "key6": "4MXb2bkHFhoHLwmoCnkLuqSf2vnXBP8uL7as6ZuWcnqo1AwTHbXqC5z56Z9aFh4Q6xUbsomcJfV92FCqxboQ8iuh",
  "key7": "2QvynyfoLU9cqrBg4NDpKSp5hohms2fWBVrNtBckzqECsxMZFL9KPECyQxhDB9CceBWAap2sFiBjpPd8vWuprXXE",
  "key8": "2SQd41QSkc873EtJheDRVK5roxhhrtEWMS9NbsxmQFbdmry8Tzyf4VgAkjWALYPvHM9zvfZdCmzgqABeTA7uLYC2",
  "key9": "2MpuzhYz7m3kxAxci25VdyNNHyVgK69cff2sGfQgXMSu21MUadBQvfa2womdbRCq9wVDZ2HWkRomwmoY3VSZMXVW",
  "key10": "2CTKd8zGPtg1KT31yqLwNXHHaqBBMMBTyXbuuJXXi6FesdzJaKccAjvXLteryLDDpyPEpHv9ac37JHfzd54D4ZQf",
  "key11": "38p7KJ22gx2H9NDsmakPwJQUc3ni76nXJgwyp9vKx2YqjfQvek52PkV9FE5qsqDEcYb3NHASvyM2m2ybjAfNmvWv",
  "key12": "5zaPYfPsKX6fS9JLrMWHKcDFxfydq6HPQcE3AUU3mQxdWs23gbGcRcA86nxPmxQ2EMhRYwx8c7HhuGAqpCVc8AEQ",
  "key13": "4M1bm7dozim7gqT7wJuPJuhE61Rq5dtoozUVYi8fpCrmhwviSrsbZjk4TaGVhV5bcQ1UKkc1Nw6ApV5kDNQFR5aJ",
  "key14": "WXx8yLhvJhajvrNrJgG2g9Qk4vm9A9pKHqQKT8wVn9n2P14xUcnecs35YyWCCj2h7jH1DpomyzZvrzUd3tVPszL",
  "key15": "2f1jL5AuDcZwa4hsm9r4BZBao3KB5qaEzb24qgeRniKNWjq12GuefxhEJ3mSog69ckChTvAtikTqbrsgDet4b67D",
  "key16": "2SKXFVECkc3PqdiPxxa36hXyXmYFUiKBL3hH2qTVbTJek87nrYhWTAJABw3A3GuvkHeDvcskW5Hz7BAiLgdEfB25",
  "key17": "3Q7oHaeU6XbaJrWjRAhbHWPvn8XZzb3bXN4uANnu88f51q4acMkK3pX6dESvWS8SwAcYwwVSQBmpRcWiqz4pEXsc",
  "key18": "3a4QHVPMPbtCwdZGxavGbBvyVGuiK1RCr9s5YaNv4QGExC5kgue6ihy3jXCNoZRgmHMdjbxM1jKjZ9x5bpgUnMTy",
  "key19": "5TpXEUQsuDAqrD9YnNsKhig1cnNLqhEobA3itKQYU9DqZKVrBNbMp77qVo1reYLFdXjxmcPfAKVPS7KpCNFMARVC",
  "key20": "4r7hc4ZS5RdKXypQPLWJQsx3yLa6rgnjHBtMfEJvHUTPefJGJCv8yWeV79wCocGZN52VTxJAktEUtw8vHR2mFZ4o",
  "key21": "3WnktKmK62QPJS7R9n2aA3tV1bKw2zDrJT2REUs4x6WCeHMdFP3hYDnvXHUCzipQMoPFbrpx6jYQ4XhALnLkmBgB",
  "key22": "3imQ6sn28eWrTKQ34ftkXfE22Mt1VGZsSRgbvvFBvYvXoUaDn5pXdaPQHZAHyZp319HEGEn4FKmPgKTzfNKkF5gB",
  "key23": "B3ZsYwiTyvcNhpr8z8i19PWhNwq4nFQipnGstYdvPoao1FbvcmJDVBFCktt6GEyMGSo2wzbdoYzrAi9wTWtG76P",
  "key24": "2N1tAeontoWMx98GAmQUYpezaaZtfppS8f5uGCJrBHrWRLsEZ3eFt3zV2FMrP4bGHVUwSLNhfa3jkJnEd2Sw3aZt",
  "key25": "J5CVXDKowdKQ1ikqr7JWyRQF8mfwb2Hpafc1GcB98JeVsbVqVj6pjSy7e73mvFKkEGqGqxfozocZaL2Q9PQgZVF",
  "key26": "61VPuktJSgV8nDPSFutynbX9odynp1oXZiDvESue7KSoXekoYRr5VUQwxd4qKNBJVFWkfeqiEhoaQL5C99Liu63i",
  "key27": "2YLwj6xggktaYrsmR6dXQ9XA8TL72PJw8zuZjzynyWBePgqVF7k1rKJy2N2gdoWE4u6bgaoyjJPJd1c51CPapyHJ",
  "key28": "5knNKpbKfMvab26NrgdbKJMzf72GFwbCJWLWr6ehHZvPXHsLSc7QdEwdp95g2TomhqBYHvd9kWkW9GuiryntXdrW",
  "key29": "3BESW9LwArtqVmqkb67QE7vzFTHSeQLusGdNNTUBcAtGSPFeedqn6ksDuco2T8jY1SwVH8D9AJQxt7MBfAKfQvGt",
  "key30": "3JoCqw3NAQCfZYeYDhgw424LaLQMA3jk7qN3ZgbUxCwNeYV6mBxhQJJhgdNUVfwhPioc8U3jMwDBpPDiMZNdm5V2",
  "key31": "5gZbZNpEcywPcATVg2mUAStsYLDeJzA86mYwDHyw3HQn1iohcsMLMayZzBdpaGQ6T7FfQ8PWxeJbSWLCGqgvg873",
  "key32": "4bztQekLAg5BgawSe2Xckg1yKy84GGuaVZG9EYwycPu7zoPKonYK8mtyuHrJypFJGkGpHeFJeDiuUy5evs1QeDAm",
  "key33": "5skJW9LQABnWaX1fi3MpvZZ5eGsYr8GctVJUZzmqnaT6b46CtcBahY2KPfNo4M3z57rhSKNSZ7tVNpb89bnPAtWA",
  "key34": "WXpSRzRVsF2qqHcph1WRfJdcLQL6C6YArH6Nasf4bRPs8EjvW7VToD9VXUErEK29VKipjqg4CHuAy4fPXb8fWQ3",
  "key35": "6vTuZUkGyDcmfdPeVf6ppW4vyy6V2v1UHiBXuGPZPqdksUqM1gwuWRfafK9UqwpTrBEhw7wQJFmF3vAcxsZSigE",
  "key36": "4jSvYCpABcSPYz2hJjGoFrH74VQN5KaAFAdGpXFjMkKjmKSUJk79qGGQy8PTnhaeaxbsGCXVrV2V4jNruE2xzp2e",
  "key37": "VhDnozDPMCNsGLhCpZYSGFuJ4EV36qs8pXf4hcgG6eWBvsKEuzj8DUuv4f1AenAoW5w77rpLYJar5exKXyuSfdS"
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
