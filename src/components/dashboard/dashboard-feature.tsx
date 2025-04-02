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
    "3EV7yzW9x1qBcDDidBAzfWNhfrm2YqWtCAAQrNbEpKQmFgAWmHXfXGwKUGRe9y1RZrpifxKZEpKF281GMP2oTu9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bE4Q3oTyQQ5dmxkYRBXht5nCkUpWKdssqQh8mMTsKt1i7tcyn8hqkmJfkny8H3AyRcWegRxqJWjWMVCSHfgg6h5",
  "key1": "5awABboEbMqVBjJoJf2Y5py5W8nk4voiyCT3GETJUrpLf22EdgWtX9sjXpYpnS6ZXUDBESB84TqXnQSjEsojHbk7",
  "key2": "La9L2fmzFyfAUnF7YCxoNUzX3a6duYiE2tyajgMU6nFkDmHAgTPaPhzv3Xity4kmuAnpK4XAdvAGFm8oFgJYeHL",
  "key3": "4M3L4VUVqfhqSJdudm2WvvCCTzfq4nSWrubqm15QrQNJuCTJmCUUfdt2dLgWgNsWgmHiuY43PgbvbBnovG7Rsmim",
  "key4": "5NgqTp2cCb4eWS4HP2FAatrBTAFSsfdtQhP9jCt4FpmkinxhU5irqgaRQJzrCNsMsRtLg7BbFEyiFWL9UMRaEF3i",
  "key5": "5xz2vDcKJXMdJDHF5EbrgCrvvebCro5wEQgSeX31N3H5eNKa49TTpKJTVhBoXkijYRuRSkpKsG1kR45QFstKNmbs",
  "key6": "TQ2YMJZhH9KmiaDq8UbL51mmrvJL5Kk6Vnf6P761imMjnaBMhWVQbnnUqhrgCJgEfCERpwBEJqCc4YE52SF2H9A",
  "key7": "45vQ7JznMxgjRoNCQegACNHEuCikcVLQLDSFXcbqTjgi5qER94jKVP3e4kdCuJoW8SvKBKt2bZD866ffU4krqWyn",
  "key8": "PESCYq2oTCagEeDbU27EVPaSbjsCVUmd8DfJc3Y6yXUcboqzVP8XDCHqjcD9jK4iyS4qDBL8qg7Lnf8f61PTAfA",
  "key9": "66ZjmcDXpsM7acGx4f5oVGRCnUry9iwXqb4My6w3NAgB5G7EdzwjixJfjwkTGR2mpfRfdxzwwGBCkc51ubzJqCdE",
  "key10": "KSWZhh93zJGVxfzSwJkXRHGyoJGhxyiGX8ct4BiHJtnByKwKbyeaFm7zRTtwHzzV18gGbBDUd4V9ibvYFKXuKui",
  "key11": "4gfDjiR8wdZx3DeZCLBiGqjETdsKxqeYWZ43VoGoMATBDQmu5gGuNqJSm4WgtGaeGwydBnKU1YS77MsGHKWGgBGe",
  "key12": "3rzx3cQ5mWFZNRrAChvcFqR16HsyY8j2FvgeWAukM5Lbm1ga3R6VFYSptjJ3njn7GqMosFFKKcnPkkKjw1vqzJgo",
  "key13": "tJmRCie9ypyK6bU11svZPZQERUu72xgQfeTbvn1Pv4TDkgNehifkYEfDyePbUKGd8ueBTEKyAAHUrLuShF7cf3u",
  "key14": "4hzuCNaHytqt9GBeQRSrMcHwSwRc5iFrWamb1S5nVxeLf86zWPC3zoEEzBSjZ4Q1Ksv2NiwBxS3DLcvYoqspwJAX",
  "key15": "3xxBeo1uPtGuH718y2gPdfu4cTKWX7bgxswpZYj1Mx8MeBGREYjgVDVq9gb6hJBNK5thghUHkynqSrxU7p1Hp9ML",
  "key16": "5v5gUm4xqvx12v2c4s3ZeFLY7exX6bTXqMNa5kjpPD1EHJXVJLGJN8YLVpkbALpsXVFPShhNzEZM5KdE4veEEAH7",
  "key17": "5nWvzvoSn3UkSYSM4zNyUCF1jkZsC7SCjZ54GF78LMeyjT8ryxNch4TjiS2F4u4Sc1vi3ejobWngp7XsPTPg6sD9",
  "key18": "3PWYqa6bfPnT8notETjrTpSLoZcs5uCSuEfwQrLmnvy7PvWuBG9cVr2SgcUT4hxfEdc2mAx4anqAmqjR7XwaHZUe",
  "key19": "6754WbTH9y62z5SZifqhSrqvA3nXComZ9X5gjStgejMg8EGM1Atv5o96m3XUkFikX1GZEgVMLhHQYv2AgdmWzS4y",
  "key20": "2pbskEM8utp9gRA9X9Q3L97e1CpdsmG22gUw55dryEnDufnNkBSUPTHwTuZAYLZxrwQLEfRxLnidcBo9byVgeUWs",
  "key21": "3xgSRZE8pone2we81Ljpzdo2v92yrMPcFxNq4yw3CT41rZt9TRYEaMArDLNa22f5tFkssig9MWWHQn8vbcRKnr9q",
  "key22": "3WNoSf93nYvFRgG4dwP61adYVF4jmX5FqewZ19ToRk9RN6DmN12QGqCHrYeTgW5vEfKjSH74Y3H8u9WuxmsfuMZN",
  "key23": "2TEB4fs5F8HX3S2crdYGZCCGYdjVkFr6GQgRDQ4VHkyPP6pNp8yaPcHbjDuvUHEPBFXWGDuyy9R7q9N5zo9r8iXi",
  "key24": "6aUUCfiKTovWLpo6W5KrxJZaSQxJGrDin1s4AJkjusb7KxYMsK9r3araxsFYoD4fARZRWPJycpBzTrR1bZ39a3R",
  "key25": "22pA1v1r8wGSGcsTptxAPZup32NtkyDdLEXYe4DTirTdXE3D3y4LLVqGqFBjumBzGWpkGwwt9umi4UPWxgnkuUpW",
  "key26": "3QA7RhXdMEamYmcojNDgbRpuryWKd4HZin9acrR9WevZvfreCXUCW52TjhoudP2MAvEjxv7v4ZhUauph7KcjvUWp",
  "key27": "2iF77C59BjiqgQQoBvqXhKUn2p3X9xJt8DXuNr6VPU9PGPnLr1A7GahE3q7S6Puu2i6rcD3xoS6FS5rrEcidKpRh",
  "key28": "3yJGGSxfUPAEHXZRVrmGJEtczyYmzETAzeNgMP7BeCSFf77yfCH3ug3YSJnSCDu6rWEiAAGHGjg1WQZmxrkSU8jy",
  "key29": "4sutaewQdtJvPZEtXngdtciicoUSzyAKG5HmBjkZFoeRED97gzjAEZAXaUwro7cV1gnSjYSg8nsYy5jepJDyprt5",
  "key30": "2WPxFQ4X3zpGxD3DJ21gLpyqj1m8532C6heGTGGvCMzRk728s3wkHhWyeaY47Q8QtFkqkjE9eQchZVyuQpo6VnET",
  "key31": "M314pNJH7YwBdg1bKfn1Rva1woXxVv8AW54Ung7u5mysbPj2WjP9xchzBkL1KAfq7hHkX3611iwNVze2efbsckN"
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
