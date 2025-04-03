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
    "std27N86qyqJ6WoYBJrUc1JEBhRUGTw9uMEcGxrQv6bCQX2KCFNo9VTwu6Sw4T6Ck5sXyGLar3nZLJXDEprSvuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "269Fs24K5oHWdWaGbcCNsuR1mEQKTH8Te8sVvor48xVHA1sEsUBtNMXZZtftnD2zFAg6uWsRfHt3y9VQcFFXY7jX",
  "key1": "2xVLY5rHGnFdkiRV5XLGkPPYpge8wBZzyst5eWeUMM4iNisBAp5y4pfswrNUw9UfTuohQF7pA9JD6EYvm7MVcHUo",
  "key2": "4jNPb5CoDH2BC7jV8xTKmsgRawWsrXp7Kk5F5eBMLw4zKwiJ3rNT1cNcqMCNCJyc9NCd9zB34YqGXTaBpDYamYSz",
  "key3": "2K6gXk1FAuHbhAtcEUkgVh6bNBAeLyy6sRWuPbfiYqaaXwGTQhbTJrD1Atwy8e7RXsgrzFHzGwcvVUjP4HX2pDB2",
  "key4": "3JSBkGzkxpoUUeD4TbWsSjQpVUzRisTCKT4XcpkFshCnVFxjRT1DeiCcmP8s8utjiFzVHvVZ1y3htfPCceVPDucB",
  "key5": "2ZF34gzA5rNXK7JiMrbdrK9trudt4yoAzuT41ZKHTtPJmMAZwLvVMzUEKfiBvzDiSuRA2feuBVC3DG8yFroYjV91",
  "key6": "5ktNpJiVddjbKrARd8fDQWCXzSKarHrw4vWrAE8M4qbmwcShZf6UDsbTsKEMaDPkgqwJ3zgypMphC1PhtrZkBvTi",
  "key7": "4UNt1f3bmAX27JuepHyouoSM36bdgW69nAwY4HvZwcVUJDAoc3ZukWf8Zj4t8AouHyKjKzt1cXp1HbPaTaQE5cZ5",
  "key8": "5NW4V6V88WMatMjbnw3Rs2p7GUwa2aqhP6hT9RXLSMWzY2UvyNrBoMvXFvBDxXrFEpnwDXqjNsmJ8SknnXFtQU1",
  "key9": "62gfDYBAQfDGbuGx6Vjv3kuy1Xhn2d5fnAsN5wZDNGVsxJbNJUMKFszeBqTWM5z2dK6sjT6YRdMPi4cGhefV2etC",
  "key10": "5jcF1maSS4QYGaYunkvTfMFUCL3RXpaiux96orP8DqURRXZqPJ3THDD5HZZMSFv8RPS67nyEK1xe9UH1FQQwhPpx",
  "key11": "325cgR2GjzLK9CdjXMuo5j9aotHoEQNqkaceu2YYHLoWQJAeL9hCMKSHmRJKy7D7VbnorpvzChhQ3GZrHSVhiXPC",
  "key12": "4w5rCa8gvmTFCgqQX7yRNpV3XCmf1HXWFmaKL9GibPQqY2CC4vEZFMjjXu4VuscWyBz5opfsgHmPiQf3fY9WoKaw",
  "key13": "4u5mp1hLJ4wC3ZkZwvtnR6cguLcdZfRJjKRRwWkxFhFv7dxYLtXhUB3Jf2skzAumCQnneYgXgnUUkqytjtFX77FP",
  "key14": "5wHUmGKbjKLiQWfLaT4zM3uUHqSAyH8odXCtdnrdtV4PrR51pvUo7XDznWroG8x5Q9WfoVktvkFocbTGSHFchLjw",
  "key15": "2Bgm1NDzG16kdweHFzHpUwZXwEGvWBDvZkt61jKU1nFwgfteiJgwr8DAJ4vNBfr67Ms9LMWYnaoANoGRgAcQTYDw",
  "key16": "Pcz4CZsofMG22BZsPZ33p8TQufvHdED6WUJ9pF2eiRfEbVcdLbpzDN9CEfnF6Mesy6FtQ6YjkDBGwmgvR8XcZAn",
  "key17": "UXEBEgy4ve6tgQ2SEjHKay5KUpg6g1RRW8jZ3nepATjSu7H9SFq3BbV6EQ2EDHHcLGD7yDww8rCbEcHZUEUZfxz",
  "key18": "67ndFKWuciJeXFpK5NK8B7ozDmTtbYyRsvFgoT8snRVkXMpDobBTZ9Ta3nWUq4SPE4mn2KavMhrP3avJFNUgcHV1",
  "key19": "3vnAQiJa1Sk8CTZtK9Pz2g3hvfmosi5KcvzvLhpcQhqiG575iEK1HWV8tbYsF4r9LrFmnNeqC39NPxAwg2nyrrAq",
  "key20": "41RrgHaM5viJLYiEf9JM7TEPDJvQv3LDpixDmWfzwMjjbgFNsbReHqdEpbWMiRRftPuFke5aCaDg1fLRPv1JP96p",
  "key21": "Ra6KYXmZR2TDHMCLW1ufEqUPSx8pEzXRiLAV2NZbR7CrduEDZUW7rg3d1vZvJGG8nAjVNgbDsBnAvahR1NX8gqC",
  "key22": "JyVLsRakkC5PicEyqGe4Dw44BPi1kLS5NfzHkxzWWR2F7WkMnkqhx5aZSw4793oFnStpCb3Y6NKjCkfYvqHquvm",
  "key23": "521xJP7gcPQyGD1TVcL6tU8zZUYLFcFUsjQRywi8aAfkctdQ1RGm4MBCjsFMxrSoisznwieUGWpcVbdymhdkyhNm",
  "key24": "4miZTWdSF5Rg3hcXwMaqaAPjgUx2ufJSMXR7eGEgzSTvooMRsSrCN7fSy3R3QazY5LDugC17FWUUQWcsJKXDuvci",
  "key25": "2PGit2YvDhURnmaaQknmMzSWmBYCUekckHoFTdnXy5vbJ7yRBz5RpbZqgCiEpASQLE7reZHNY3HkBtKUGiuFGVjV",
  "key26": "5A3cCupj5s3tnUkci9GiHABaPRLrD2nuUH2tw5wQcvaUx8gZx89DdcJaDEgeHRGpj5UvEPSxcRqjBp67gkvjrhoQ",
  "key27": "u6dgxvCsXKxhtyyZXJUbRhjWSPSLp6CocDN1ykUzfBJB8tjBiCZsArjCvEr2e9ievh43VAxP99GBhvNG764Grrp",
  "key28": "499XE52oDqMe7FFZLKvrZ8tPrwLUKvLDuMpdjhAx52uNdfTPF7X4BjyJL423jNayM3VC4AfT2z2J6ziehhnL4jwq"
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
