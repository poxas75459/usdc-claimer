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
    "3qSTsE8oNUZwfzwuR8CoLqcRssf6VP9DxiUjazfSQHv1PMUFLJ6EQGAp56UbuJpE5zkKLddfBcfTomhiqwpTiGcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZGPKCEvDr7UWsRWsDABE2VfQNBvNSEujHqK3GZqzVMqgRHAcXo3Cs9TuqWJ4fQyx9K9jueRgfCUsd4giXg1NmdX",
  "key1": "8r9xr3E3Mx4ATGB5VLgpfL6LNDk4YJpzU74NRgMx7b3wBBZsYE9VDkgiQ1Qtnzm1iHr4mDCJZZZu8XLqFmVNYqP",
  "key2": "5BYGMv6MyuCnD59QVHsf666ei7auPiS6voigZDn9nZHNRwaC9BCFrYYiqsrU8PAtyD62HCBuHsgxWHQR15T6tseM",
  "key3": "f1DJmeNKCghnQJ2sQ8RqFzPmQG6BmWKQdtjWSnh5tx627qU2ZeYJUSr72Wz2SXLbCaTjbKq7Uz7dTYBKDises3G",
  "key4": "ffu1d1ywc9hWZ1zYNeQifoijWmJaabDV9bqWHN9f8Gim6SPGsT7QfxfTt2D791Px7exPuHcGb7rcDEZ3pKhFukr",
  "key5": "5UKxBhD8VqYwx3mie1kWbWXWy2XiSdEp6mnXgesmYJ1WB16QYvoqMqqBQi3Vrh6toMAFFara5X6b7Kn2krtbmQXs",
  "key6": "5dXAbyBcBM3QHGiU9PPGgbVM9BwYbDaLZjNzA7TfYTgwpr8hz7fEPrfb43uboUtJdBE4mwj16uL2axhc7oDsJf8K",
  "key7": "4tYs1tZmgeyQ1FyomgLB3i95nFfaTSKCkbEESeQ2bb1BfKJMGBkUjj73Nv9CmQ7o9ugJR5xojxtRuBruW6RneUpn",
  "key8": "52owt5Q1TREUCEwcgwy58Ra3oeWowABYEiRVnkmnLbuHiEgyJ1rUqZ1eqa5TZhZRMZFzhge9QP4de758UQcUgkkf",
  "key9": "4gTpZoTEEqfQxBh19EcyPfZKDLy3QQ3QGigEPKyxMCSq8bTdYR4JDFC2ZNyYmAznHvRZT4dMKnnioDsyYjVdfFEf",
  "key10": "5bLNpTFcBUiCbXGHW4uWWizU5isqdiKVcnfUc6gy9osV4M8byerrM2Df5UrkE67pzbrDE9qTvWtdLJr5foP1Qpbj",
  "key11": "KWXqjMA7QuFrpGtWZGC1cVru5YmKZ9UnSXVimpo9y6tQWgTxwrZmczUcKThppopCCegPC1PX88AWNRvuWBU9GjX",
  "key12": "4Ypz1RwLZHvTc3SsFdEU8PaRSy9swrxUQogrBqH5PBRyHJ4ZHjpEiEajpCweD2PSoyc4YmYqSyoxAv9vZsfPh6j2",
  "key13": "5zN5KnyDNf5g7RhhWkGSebvBCX8xtit7PsQTk42eZ7912ghfPqqhHtaHATA2fjYZnW2o8kS29FywwQqauQeZ8pDt",
  "key14": "ngJ6EfAJ9TcPukGG2nJ4pzD7ypchtchFmnPX6jzfF219sioFV9eqK9CjqL8GZRhi3sq8DJdXmJ7WbmDF8VYdn3v",
  "key15": "2zG6zJ3cEcSPr8RqeVX1NjddPpLotLxFEM4qnJGyUnVEHX78SiEiizbPWom6Cazy8WtPHDVJAoRrfDHBopRdpdE5",
  "key16": "44dugnCyDJYEscEbhRDwR9TYKaEgfC5m1pVnsed6Bs1ttrPAjRCSmfrJm9ufKBEYgjNNftyR37zV2qgcW6DVkbnx",
  "key17": "2ReFzAna93Lu3KAmbiidGLvFCspvjsXZS1MeiKS5J9UM618rQsbWXLJpHQqkxZi2RWorxUGgQpFg7pztDiHxaJF8",
  "key18": "3p3noJodpoU9WLk77LDBQfVbS3PLmKiwQY9Jm2hLynksLmYMrjSEfPgoNWnuKzcrJsnCdNQyXkvZN2VwTM1kyXCX",
  "key19": "5mUqZB6HXCce7TeYu5MxfoDWxYszfamm9kJBy9Bha4kQWScgHELzFx1VL3Vui3TT4ukDWidD213w2wKa9Y4AXuT9",
  "key20": "d7dctyg72S99YoxfoLz7GTdfwqNHf2U2m9tERMEdL5hTRWKnbBsgv1y7a84uzDFVNcsk7866mNeDRTuaSUh6zpP",
  "key21": "71vmmGCTmacZAEWWjyewtK9cwznvAF8QtK4qB1cKVZNp5DHaUoKgzUpPNdeBYkyqC32GELCtrvSJCet7Upe249q",
  "key22": "2LXnepiXTpbGUBHVdjUUBKrowNjxwxt5aAX97LCSH7DYG133ToaRZo8e4oDMjdYwicsSL9ePU9SG6DQ9PXHNuzwz",
  "key23": "63JXXyzUN4ZTFuvTe3XZp6QpqGtvAM7FPkEXgdi243hggbiLacY3gknGt5sf2sZ3ojgQV6LtDNJesUcYimjWsJx3",
  "key24": "43Kw9gcUB5xquqjPxLGCbT1oyTKp3NzbiGZxezNYr3fAspjszjTx7boNb3Cz7VT7XtPN9i66hUsSXYbFTE1BsUG8",
  "key25": "3yvmokHV38Da6E6JNkWf3o9NBMFyjSksWgvuWBnxcN6UUdsDTMb8HdFPFpZt2hvNM7mhfKf5YZgJdXhiYHK36U9o"
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
