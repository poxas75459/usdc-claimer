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
    "njrRoncFewY8ZTnCyzsH9cvQKGRXG3A4BzqJcXs2SSEdpR5twnBbPNwNUF7TfUFSF9M3Z4iLKHMGhjXoCR9QVUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLTQrQdNcXgA7jcjpkpNqmYu3YsUGtFWqeNE3cyKwUd274TkgEt1yAHRzR2eZHQhExvWG6sdh4aXAjxyVFtBDfE",
  "key1": "5Xh8ooZYs9x6hL2aurKxGHvQr5yh8HevyYsZYBdf9kqqmFv39ZKMqGQEy8EN7BtawmXHnF8wifQzaZFMDGqkcLr",
  "key2": "2xgAwLke8BmtLsxb6X97maaaFvWjCFTRg3jZ2hp1sXehyeGqsZN1DXmcnTFx3HGqGVcoMt2QoRCLFgFiugPFBTAg",
  "key3": "twMJxvZfHTLoJg85pwMypBsw6b9rsktQ7LbaExzJzkdB94V7L8faDChReQgRs7GmeA3m5SK1NdVrk8N4VDEuv7u",
  "key4": "2twSRpR55TR3kJu8Xs9nvMsNvo4bGUkCLcipeAv3iGtFWitk2bdeJ49fAsvS8cskNTNiyJVSKonzpb7vBEHoF2kY",
  "key5": "4P4uZ9jQ9zDVDsVDwtmrQsJdMMiVwdT2g4VCdiGmfwmaxL6JCGKZxphwVEG6LZjL2m6wwjVd4qNLj8zsgCKGj2Wd",
  "key6": "4yoxGn9Y4i6RddH2dWS8B758158f64FViFjkF8DaD4h5Hof8HjpuX1cd1BgeESZqvscK2bjiumLtRSrESe7h2KWN",
  "key7": "Sgem5jTKJXxYfmsG6bLBR2STA2zU7vJ48oDm3262vL6h3aEfbki3CCZ3GEADgocokz4ekkM7NzgjyYkPf1UWZcP",
  "key8": "63Ys1yhYM5xoFbqRixUVFo4j28nK2mSAQW72WsrvRU3ENi9cekYy3rFAwF956FMUcXN39YwAj6mt8DMt5xRg2MFv",
  "key9": "2SKrhgLx1XPn48jqwrAUqnGznmUVgYHTr2dhPorH22XSeqYEneMs5NYj6eRJEEMMrV6h6LKwzcMv4fj1TPkJgCpR",
  "key10": "2xvy8AGdsjpoK2zsYMwa8RqiMQzxx2UVQJpUHPoowtrn4Ho8DjThxXArocbBE9UrrL2YrSMoBXwmGdFJKVRSLut7",
  "key11": "2rdRHbiJ2hCd3PqiP99go6zp2FVRksXt8YYdUzeb2D1aHSiPrHkbwQ8vvDXg9HWCSUJVaeZ3WPov6pMPdVTRCWfo",
  "key12": "2s8tLRvKLbi2EWqqhmbpPP7qsajb1ExCd7QT7NJC12TgzjhiNe3uBhTNAAhXcHGtVBvThy8MrF8ccieyQv3LYxfL",
  "key13": "5JxE17zZjH8jV3pe5VcPAWwMNo88RwpRx1g8mQbpEBUsuhMAAP9Nva2wgLnCJNNRZ8RTWQrtMjQtsebNV8FRmZ6m",
  "key14": "5R622AmsXZXuDnCFgM22gWzkQ9Xo4ULaENp4yVWrXe6Ef5ytW5Jv9GHrMene8Lq6118eREL8MPpATVMSkwVwbexj",
  "key15": "27bZXpJX3n9BEr4mTpj8ZCwiXRQg2BRRPAS2EzWMmFCWMcjdKPaeuUpfJ6PF9Ht5kXLbbPMradxAcj7myb8zH1KN",
  "key16": "5WNmii1xqLY8VGPt4iVnXgJDeqY1FAL9V8kFXyAb9ThxtvYicF69DX7MaKUo4JmFSTM5iRADcw13b6d4SNh1R6cF",
  "key17": "28bWbnejUtETiz9q63Ym4WmiSfQmLztz1W8CxTnfHuQffUEqaVh7CNDN4ym5SE2gP1FrsYJqFusUL1tsbCfQXzFx",
  "key18": "2xKnNnZQ4mTaBGSBoAcamTtqSZnHCNLCxaSvi2jorsA75kQAkM7gQybAJgs2FMdPiPoKKyuN94JiGbKfWojupP1p",
  "key19": "348MHCM1Qi6aV9o1PANqbr3zBWetd84cYLbDVMpuGpdZ9gyQghE3kwkP5vtzkbuJ9nkmmLNHmjHUgFUG4addS5r6",
  "key20": "51tGZFhQ43eob1aYMQ23BNyEttozJXpzZZQ9Vq85zpSvcxHqNruXHMFEmAKE8rTLcXMFkGaQiz7wspAyWZ2wHsqn",
  "key21": "2NQgMjiKmoVM6nt5PhoaCrRLGW5ekXaoSkqNfpTQve14vRpUv4mFkMCCndi7JmyNPK1Hewc5mdaYkALamtjRh4PT",
  "key22": "2G1rpvYHrsrZ8voueAn2qHEM1CJB7XFWxts1zfZhwpdccHWzSKapxwrYW7Lo9Ki3UhmQT4Tft4NC58wLuRTwK4Gn",
  "key23": "5LM17uZm2Jxa6Bbq2ytJBgFMi2VCZHWRWfcxxvw1uFsB3ghVdm3aSh3FsVwVyLGevdHnQkNT1dztsrkjdmCqo5cn",
  "key24": "4VXDZtYeFSawu4z2NL2WFW8VZM3z4KBjDxudBA4E2FWRvWa5fSz9truH8NnPgm6PpVkbUT2sVSkpXMbSKGnxT64T",
  "key25": "2z4E55Arex4CvtD9vYjrfNCKnpRFvnueiTmRJS1VEpRrgsZe5S4UrzRcxfudvn2DZJ7j1bzFHVooRkmoh3GEfNYv"
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
