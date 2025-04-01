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
    "3imkvhmMnqDVhAVSy94YsH9FWdFdmGoFH3QkRYaLLikQVZwHaFc1K1QEvMnJQZ5sW8b5U38hxv5z3BTnKnTrvb1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bayTfzKXdT6Bs5BhjGTa1f2fT5qKTPavaMmgk1piSdJYGncyQWMmxx6zQm6Latc1jpN2RdJFELr7ZyCB21vTCkD",
  "key1": "51N3Vcws97hsvStBC5kzYNnu9qZe9S5ZKrBdaWrEshpv89PTtVkgb6yWESaoo1V9yW8vRRfQ7tVc1BCoazC74ogL",
  "key2": "oZbSjAZ2FkGS31XdP94BEwCGbSVh344ZBTKUbUNF59Y3eaiH97E7BaeRQQVGL3s5pV1sKgH2CRBKMty6HRxkLVA",
  "key3": "4awL2HHYQeCtSt4yf4ExPz1x7sWg9a2sgdtcovdXVQ65gT6zMi8gDrpLDvYVhpU7gRMBJwmJEmV9szLTPs3zVyLV",
  "key4": "XMYMUfSCYCmcePeGdF1yiwCR9cpedEWwMS6uEj3w5exCaV1omJUYehRwKCv4Hyiqi7P2bgGA16LyUyMtHsYeHRo",
  "key5": "5HMH92XmED1NRzqYZHEgFemfEf1CJVbCKMYL35dnLEx3chJxki2dRipQGkAVUarbiCnuZCDZY7cdR5vYVG2zh1Jt",
  "key6": "5SrVzBpeaC12WzqPpzFaNSc6jov6ksEJMweBr6UaxYEs8wyEf4hWLYxDV54srg9qkJDKyGB1eqEeH1w44DWNoNGe",
  "key7": "3v5SGh4PsTiYqybDEFYkrwtEDU89etyk3jFaYsZUvG9k6FGHbvAFAYsSFfVstESXvuvNKXLcHeCZVGyvQpwxHje3",
  "key8": "4EJX4DnntAHShrNGMaHTv1qQXUNZat2hMtFUaADBo9N4JoetXdkp3DyQwWVsAq1gzTuNgibgzewkmfVfytAR9r7v",
  "key9": "2n3DaXTxLhnxGLNupiyhkzqSe8ejc2Q42ZEiFS5eMmhft2cNWbuRwuG2UyQsgBHFtNdnKcfVHxs26kJdo6QFX2x2",
  "key10": "4n3LPqK3kDsNyFDppoDANhLHkoUyNXgg7bw9AnFngwBLERxzfUkzSS952YujLE8ecpmEswRNcmRhv5xAxwiwND9F",
  "key11": "3eVNta8DngTYGmFxaSVrJgVwTLPcsGU8mNaHnViYqrhfZmvxAsEMudVkfQrHPXHLkZckWWrTYBcrbG6dpUHFnrbg",
  "key12": "31CwaBWnFFn7uHpTujkK5P1KqSscDoYFaCqhBDu2cniBQEyY2botpPK1VGRaRjt5KiSe23kN4mmtLayqEeoEnZr9",
  "key13": "5Nybr1epdSB3AwjWCwt33ZXCzE6nqbCCDNDxyjBB295BZfQLW3YKNK3Cj4v7EQWZpqqUtGpg3R2BLWRK1keBw1Ev",
  "key14": "3cHw61pvukTpAiZLJGawbe1pqckDFQseK2GvY8qYXd6tYCMG13AQP1mrYxGoqsgKQeDi1oHWTFLvcZFVN2UWkrhF",
  "key15": "4WkAam8M9Ar5FirjWAiQ1eM8RACue7nbHpK32tnocJLJVLs5gd4VvqFHJKp3Nm9yEsvR86Wq1BNyN3GWEABsSSts",
  "key16": "31rVYxeSayJdkkEKjjQCF4f5z5cp5ko6jjpWN1xTnzC1wzw1v6BGzRh2tymoRENXQc4CF3K1BtEHgyyC3tG7A1v5",
  "key17": "4UWFFiJomLpjqJuZPBcBTvRgyghtm1PmdxBs7mnEb9NZrbkzm1EjbyhzoZaRTAYMQQFsgCWN1aLmy12aw62Huxkz",
  "key18": "3bBAvoqdmmwpooVBLUL6EkRi8av4SNqXJv1mra15nonPV3DjYpDzK7JgAsJyXkR5XNzh54XZTyRr6fZUWH1Tt9CZ",
  "key19": "3zUUfs98jX1yG58aA1GkjH7C4wRcMsEPe9ZGdLnt37tomwaghQPMdDk3aa8Snpgr8hnEcp8SDEeyBbxgaYmvvsPJ",
  "key20": "5E8crpuEQjXMdr9nUS5NdMkpq3DHjpCPhQeue6qRNaSC1dJdfNuYkaxB5uQcKnHWF2o9UG6G24tgB9AfgCPZ6qaA",
  "key21": "2zay5eesbSy41FbtWek9bHDaUGsmXDWKyQMDWTHjcTkw5LUAZMdWi3Epgpx42FyYk6Xg1p1D22RvvZ5RxJjSCTrz",
  "key22": "5dEMfjHPTEE7g4vYvyi3Ce7Eo7Zk2YeHuVeVLWruEhfNxA6QgQnWUgbzuXbnJdBEUtYLJFF26HonE9pZFK544ykt",
  "key23": "4Kc8nBWsttGSuMA75sCJCsJdrLhcHVAD2Mr3TdSf54bNH2fxFEXb8vmKnd9vMYHAs5UQNnGYnD6Lg9Az2KF5PUue",
  "key24": "3JCoiGafQwgbnynukH1fwkmGfBHABSqb8Srg7TXsg9Qjzs2nbziV3XBYCx4XzTAybLaghhAk25QrTcHNaHY4kGj4"
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
