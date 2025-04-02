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
    "46XutjXNpAavA186mLjCsZZ7qZVonZmqjaCVNUXsqDNjfPwAo3MZeRLWKr9eUfqkiCZt7wVoyar1DYHXtkmjqCsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65CoA9p5KnxrsuDVww9Sa3PGVJdrTMYF7XdNfk5Dp3GT2Ljed7HJXeALnkqXbw4ZskNPvE9YMWRv8Jqd22f9LqtS",
  "key1": "4x3xDSecHVkj8J1SMS8XfJj2hDmQBbAeGdvgatzK16oz4CZJZXNHx5vNC1cbNRPTn1b6bp1Yt1g7d3oN2oc8N26E",
  "key2": "2tVvfVHZBgWrhJe9BnBcZLnuQUKcxGNrwy23J3yMKWzX6iVQk8jz8oEe1yunvw4VzgUiTQ2ysfEzNCD8pAJKPMDM",
  "key3": "QuLCv3HLxt5AkzLgk4YumpVd4t6MdbmYUojqq2yCU7613a4Fop25g4K4YSzj4Jg6Ca6xooR8ahvJiz2Ge9M8Lbo",
  "key4": "4irZDySG1P3rwCcyNvCVnQgQEnMfx6wAafmPYf7ewAwaKTmNjbp9josAdV4uygdc3EHquvKzjFsEN1rqoQCzPavi",
  "key5": "2tDuBB6NF2UMSzHjKivhZuqpJ4XiyQESye27rN8TcSe4QzBX3z6Mq3STBfGuWYK3ztip3sUueQPLBxWvqz9pPPXg",
  "key6": "62Z1cwruFg7akhie4npZuUrStMzUn57i1amC6a3RckfdeZo7iUzUQpkpzCofyTwXJDJLf2CfB9UXvJ2TQQUqTRoi",
  "key7": "4Am1pfESXmajqoxqvW1NoUjeeZErkVHaa7u3cZLQRRy19WKCJp794HjxGww3EqXJNqqGbBc3WwwAe6Q1g8Bm4rZM",
  "key8": "2bfzBd1JG2TLdc95HLLvWkRzguPfyi19G9XJpMd2t2bwBd6XMJvgtjHssnU2WUuoARF6SGMM7mGM8mnF8Vh6kPBK",
  "key9": "496oBsY9D87o2os7XYsQREzzDUsj3qLUuXqNGaoiXCNBZ1YaUasinvHQ2idZQmEcSkwWvjpv5YsrDMpGtNe9vYqz",
  "key10": "445mHXKoy23mgBKsQkbD4SULNANuUWpBcqLe1YQ8Bqzodqh8TCzU2hX7MmHY2KrpxUELryJ3g4QeZ21v746hFErT",
  "key11": "5E6bYNVsnkXXg8mdqV1KEAbQYuoTBe1P1qZ88265ijh2Ykgy9xA9ThXtbbAS9ob3dErwznMVW2oRLe9utYgeqzJW",
  "key12": "46eUrX3KXSojhSgVzL7EPJcFddWJgMEeqMWhkEJUrtmjXT56KQE2uuK4F3Ps9eJnBEPCiBGZpkZJsW268wQ9NMP9",
  "key13": "G3KiF6P5aG7Fpnkyzz9MZ5op32G2c4b7u6QzfEjKpPbDELic99TwHmdkRWQnKLFFbdiCm4B3VTNnyRQPKmk6bP3",
  "key14": "3MEAHZawBR8Fy5vJy5koUBL7dJcnUPYTamWuqcqp2auacEhuVUMTtp6fxqyPKGCggH9HeLhnKdCk4uGHhphtNMKZ",
  "key15": "5j3KkneHFN2SjmBhghjWnqMihspD4QmK38sF5mYfQkKuDERaTgJayHmNiTmincMZRaZMZbBE9cLLXAjhLrmVR3iM",
  "key16": "2vKek9kNu9SgVCJV5A3ywpizCrDeRsKmdRK3ic2X79UGeK1jyUExaXY7phyZiF5NXnEWeUCDRRnckpnK2bsgn74t",
  "key17": "2GgEcyDCG9frA6hahinLGYSjSaCvzmLMSP9NiwrJPriq4Kf3mECL6nfhwWSQK6cSznmtFuLx9JQ6aLDWmu1k1cBf",
  "key18": "5gvreMCUGy4EAsQWEigTQGrfiyZE17eMtazE9CAtwfFWZbBo5vbHw9nGPKPsM5dohyxUMyZnsPfUn8aBzhp4fAai",
  "key19": "55JCA9i78baEo28mZjUCtmRRAcGSwiTMTKfNQSjqfzkPo5GUcBCPnhEch5HijGWwHfcc7mo8zkt3y7YBdbw6KiPx",
  "key20": "5gkjRyqcQVGcXYyNS3N3W6qiuP7UHbg47wgrjpBdEoBQJWFJc4RD3sXwshiEvWAcr7iQT7voe6gUccJwtZugRvT3",
  "key21": "2kThY7N6GWEyKjnkZKvtAutVy2cDT7zhJr78FjTwrRdoVaBw3CH1QRdJuF66mDGLSvCavTHvURgCSBvt7MD8WXPi",
  "key22": "2jnKAgNHP8m19zMCtCdVyos7wDyyCYu1hMwYYvJT4fqvmS9FjGmmjRbZrxS5Vn4dSHeEDBmEbGNigKVB5uCrZ8vr",
  "key23": "3pSCJQ15HnPU19fPCwBTkgc4upXNA58QVRvGjBaFREkdkPS279eTDxb53SDrFSvQGRoXom1SuxBm3PCX3yjGQNuR",
  "key24": "57yKJjdZ88uDjQmojEkNv66F4ni4DNnfxwoLQtnn2yAwqViQfG9Fi4GwVfm9An6Wfc65DJR7juGintsjgtkJZY3r",
  "key25": "2MjwR4XCyDey4Ks1dEYEsGjq6DCvoWL2mhyxbNPhuY6NephefRusqniNSLUqDPkDFLHBkewfnAFEnUVgwJSxF4gF",
  "key26": "3VwuEmJb4Tc8G7ubRosWr9ntWTap3rDjGGEXurfzTUTD6cDyGZaqQ3xUJ1seE9DbCcX74UkAXby2kPxJunB4iQEj",
  "key27": "4XztBEGbhugzUHXKUE9pZewgx5oczXiZ8mxZ6gRQuZYHTsCwksHQxC9LnBorihoQuii4ucaMfC2EAnLtcgDFK9j5",
  "key28": "2QjZwHo1DwXB17fKFyNSHLEKi9oMKuCgoFwSjTtf5RHzzCCB6ktSdhAgKptKK8gsbggs8ofJsHkYf4bFJF6KdGHS",
  "key29": "4K1EVS13vV1Dccvy4MiuZqp84T4xJRsA8vRX7G4iaFWruM2U4y9gUZuced2CfjSTKGr57NSRucRNyrrVBYXBH3Zo",
  "key30": "4kWSYBDYoDmt8VTiFXzX22ia5LCKUJmsaEfYqLughenKcY9ZUJFuviScDn5292Cr2wcrfdvS3oLtFf9efPkwTsgW",
  "key31": "55VqrygTiRfPSvmJDWx7NUk8tvPzfNKfmsWQBTAagXB3UfaVhbBL5cVcb5uBdcWUL4uyLQ25hRLRGnmPfub9qu6k"
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
