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
    "4omznjANxZq3CFDtD6Qv6QfWJdV4bSoStbeSwzpfXx7ZSfKPFqr6n2DKmZvX5HQchfEaBHZ5FSWcnUNzUbCmutWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gYS9j99w9k5RGktt34MPS5n95MfadLdsFeZazX8tSj8Y1CL4BEh8GSfm7Mb32fBu3yJaSBLM4wDxDWq1uNbabbP",
  "key1": "49u5xp17ngmRtooX3EM39eKzU1ENXMzgryRT2EAZSeXMfWXHmrGNsrG3wqm3H1tHwBDn1cnSDrnu9QvRoU2U6EPM",
  "key2": "3C4mUQ3PvpT8Sw9xeRM3r5MeffSVzSn4df5j6Pz14sfAHNCabmqM2eP9MyGKm3YEXvALZUEbNp3E23w2uscyqtLa",
  "key3": "3akjPTKcw6kQCqWJVaXJJ76B2gRasXAjFi9rZ6qDxUU8bpt2bn6zyqerJM6ZqZ5JAW3CqEM17xfjB1UZ4hNebzpC",
  "key4": "2Ksbf9SFzLh7CKW53zFocFRhMyp5zfRASEtF1CVDWD88yLwSfVUQh3knxUyh7Zs8GgPx6AJNMBRs2Uhp6aPH5E4j",
  "key5": "3pVuwvhWHxAFbnjCeK7M6vvxtBuAmayJBhqgRNdJgc3koVmVS4p1HBFa7izgp1xe6DwvttE8Rb26KiTkccHrsUG5",
  "key6": "4C9w9aisWaL5s9hpQ2H5N8jRQ82VHitsnq64k4MoCsov8YZ7z3iwQ79wmVh1dehM9Qnk6hp6ZHczZWgCwuGs5BtN",
  "key7": "482qPZjfaaG6AEPx81nwgjJWmD84eWZeiAA9iV9wfSVFY1BgWPVjfkwELYC37a3yAUGXSotJ4KZGgPxiUqk5HoaH",
  "key8": "4G9bJLCKjwuznrMTxC4a5QYSYU7vATFhS1Z5grJiVL1QnuGiH9aHeUrPg6xBTU4frGed59zxUFBTUYhNsZz2AGZs",
  "key9": "4CZk1ov3HEh9oSqhS3AG8N4TuRMrb2YVTKKMj6uQEMi8D5aHxJcNbfA8C3Lyv3aU59gfBdFqrdEopVgbtECzwcqN",
  "key10": "4D8iCwfnko82uhiAu81CQH7FivoDxocm6qcFfhPrYP7jaeyHEEznbQYGdJ1Tvr6VP7WvoYgcSHoUXSHsbG77RiZw",
  "key11": "3Um6rZxJA4DVL1ojn21JBC1CdMqTdT7YMHCfCRQdsFXqQgv6YRxzyJjck4aEeawuKaFcGx2jKAviANbDHx6KznWA",
  "key12": "62BmW33NJiM755HSURkDKdvBpJuYXisEGLUR7t8Vo99fFjGafmEGm9uaDvjkheRowrCqwNN5aDrBYbNBJ8DY6gD8",
  "key13": "5detKYhpwtMiJA3vgkX7p3fEnMTsYQXEkWvr8Vbt91piimRmNJ9iHgswTjMLufVNaFSaopaRhn8miLXDBtR4SqT4",
  "key14": "2NzcTwyuxkjdTSPoiXSpc6Nf6cC3p95PB8w3b8UXRwb8V8nsepSegH4i8SgGUGb2L9cYHoy1V5MWuUxxwiiMUDzh",
  "key15": "3mKnJ2xQ73B6z6ZjdNtRNQN5hjV9YGoD8CTWLMRMcLArvxTzrv4orQEB7WYHvcFKrBgNJA4cyaA2Z1qryK4fB9FK",
  "key16": "217ayAtaTkGgH7RveQiaHgsMVyADSt1SogzHR2vhhxLfNx2hRDr7FUQHxqDU8oGwqzP2wH1kR15TiqRszZ9mm1sq",
  "key17": "28JmT4DsaSkUdiRf288Uyf1nQqcY91kC2UooSZjsAoDzEAZLmkSdmLgvkvRjDLxX9M8uvNk2oKc8soBocdP9abGc",
  "key18": "NZZXC4LogsjiMNSRPYd1EYcaDhicPPbZAaAF6DcA2qcG9YNRc59vpydS98Vr4vzzttDxsQnSjUtmME4XQn8CpCG",
  "key19": "219aaumyAqYNQ5t9euh3ZsnvQprtqiq9iYSR9cFhHYcdRwU8wqoUWGVouq8sBkZb76AzbptopbNak2ghECxCcuru",
  "key20": "Fep86jXhG8RuNW1uZSeqjpTvK78z53Pwe1kJZD2jxJv82dEp8mmPaVZgZhgzkgT6pGguNiCLhUmqUAhoUA1fg2d",
  "key21": "5p7Sd7Es6su4U6QHC3D19gv9UsaYK5oMA62Xm9paacDRVwMpgoEq3eXTzTqXjwjGC6hZAXQGHXzEbQb8Bg4aZgEk",
  "key22": "2oE18D6fsCzHb1ohVovogLtt1WCSPtuZu3PzuJszL2imvh38UCfxJWVumJev9RzTuuPHUa5xHPW3s5DLZFM9eWtt",
  "key23": "3d2ztDNnkd1V91SjYbUhEjVvaVVqQL5P5kSyj5wkNRSDEJASJTd2RQSZkQoWmCD6UXY273nm7NMSYpgEg7ojxQaA",
  "key24": "4R7fnTfL3BX3YpTSTpNaSqpUqwucQRXM5k3V8iXyssHK5XBoKYGRBcs6JWC4oqt39qmaxmb9Kwpm6Ak96KbYJ3no"
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
