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
    "3A6X6qyFKMMkbvwxk4egrXZS3Lpq3F7aTE2Ld5hcrtu9wJ5fQi3rX3wtgAk15eN6L1E3HXPctSd8z8AUhTJLQyEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pwpHQd2fb73phdDVsRwysjTLX8JfuKXGqMW1rDDTc6jveDHdEbVpY6VBCRGqHWvNkD79S7AEfbo7DXoRNDp3VBc",
  "key1": "HBZSheXwMy8YwrvYrmJPYeUQtxDJebsuPuvMy1jEcxXtxBMvzh7ZS6hk1HmdmZyUSpzmr7iCxdsFfBPi2oQBmuH",
  "key2": "Qrp1KtMSwefDure3FDNuR6mDMMso5y8nRj44zWP1qbxobVkcLA1motgTZfMcKQyJQY1JZEVq1dio4zh62MNuXv3",
  "key3": "24GT2CLnsqPPiWk5gbnTxov2tiVEWnQ7pHJE6QGufvwT1RqwGY5sgWzJ4hNzWtM1JaLbENKAuuk22jt97tZGCWmS",
  "key4": "4yQtbEJAXckqjZ18Sd2ZYVS3tZMmL5ZQwonKD7ezpPyLLaZYp7KewCG129SXcE6qDQViuRukC1rFP8ApNyP1XgWB",
  "key5": "4SpwAK5MTPngcdiBFZo8Exn7LeYETXEPZQ4XsF4j5fZyGQqAREzTxVBvq6Zzme3qvYCDR8SaRubnemD5SJG1vYQG",
  "key6": "63WY5kyujjrkJuiLaJy59uNYxUYGE5nkfa3Qy9Qp8Dqe6c7ErnjH2wTf5PSL7sLq8ry17MxqFf5gPFVBL6qa4xPU",
  "key7": "QvjnwQ4R9iYjiVBNTZUwDUa4hqVAkys3174rErP9bTKgBb3vy7Zp2gKarbmxuBqUeQKmPc25TASTmeuv8m1Z7h7",
  "key8": "4eYxvpk1MdGmgfdEiqqDT6V8sbMcAgyF3WLMujwH3SAgACfbkRhcnTbASwT2DY5pcHM9SiikSFtcDrPBCkPZupL3",
  "key9": "3dedYcZ9TRRkV35b8bzQcThbpD1GaWbhZDtg8jXx9DDXrcf7SN6B5LULuhnDqGuRXpSbpJWm7LDjZC8pFxNMyL7C",
  "key10": "BVbKi2CSxf72GWA6XKYFHSCSWZgutGcTzn48tftxpxbFV5WPmuESxcGQY1CmuEpkBBKKziWzjDpLNQ8C7aVfXQK",
  "key11": "3vqZ9kGh4U9Tru3zsXcWAQ6krvSVYEBNpV9TFxCLFxPzAiwKKuSwfp71xkgWtCv9PqiN1tXPDnvesbx2VyBZGLNY",
  "key12": "3ZB6EqaXYfueP3JJ5CT7XG6ETG8zgEStA2MdmtHHuweWrZN3Vqa8P2FsRTUvpkUHYRZQB64wqxbiAmmsaJZcBjGt",
  "key13": "318cyk7bnkSZghS5Qu2CAxwtfPKFsY3X4H6fSXw3DLKar58CLDh4MjDxUzsNPMbAJoysx8zmC8zyEPGMXtXn9rpF",
  "key14": "28N2TLsBXEqZhaiohjVwz7QfMLaVNqeVdBRnqxNtUsKEZ98SzaHRJxoPygLRAoVUaAuEr8bFfkYQhXSvoyMEz3PX",
  "key15": "3jVPsz7ryaRpqMg7H2R5KwfErTga3iMGSfapMhQTZrJX7j8yhrky8Sx4VCc25CkpkWbqheHLcgMKoK82Z5xStqLs",
  "key16": "UhbgnNHM484Xvi2MbUu1ufACeCchyjk4dFaKkKAqKWRFfbHw5NkQztQPNTcHtfngCXy2GDG3UEw2g4Hu9MKzXpr",
  "key17": "4wbwd3s54dGy3msrDTT7ztsEnhb9TYjtqs4D7T1uEbPDNhtoJK9o37L6bE2vNu7mKYx4HsYNveNhwrQbdvyiDzc",
  "key18": "5k97MwB6yi9uSQRM6eK2ms6qA2Qk9XnKsxsVYZ5tj3KwVQ6zqijZDxXszBj5fZZPp4T5EK2fs676JzEzXLf7RGhX",
  "key19": "5nmv4efboz7mV8JpT93n6NcNGe3EgUaHDTi52kgafScPbzP7cCwRYuyUoSPh2AQBnd2gggw1jXEUpVahbTwBUpsy",
  "key20": "3QVqFo3Hmv2JHU5ipvhBn2nfGb1uN5uRtLen8ouWyjBshgRK6HF74G4XceVqDhwEmvLuKBLhydZcscLnWesqbbiy",
  "key21": "5EKESGGa6g5Rt2XJRSeKyUquedxDagWi1XiQPQPDXGFUqddvtLWTKaR8owSd23myP2hT95eDciN9UQKAAmFyNSWe",
  "key22": "2s1GBhug2z5j8BX5GLBvi1Snt787RrheYxNc3tE95PavUQ9eiVmCoPUvMoV7UpFNSrPDbpygtrU9Hsf1Wt8Mm4bh",
  "key23": "61XNU26b2vdqjjSKSeSqjTP7ePmbeDvy8sPBHYHCMggREt5dffnsDUUwEDvvk2SEY7RXDScdDUgikXCbzBCzrJGs",
  "key24": "66a3hZGkYpi959612nJkLneNAiL2r2Vuh2P3izwxymQmF28f8BuTo9MTbwvBstexVmi9XPR4Vm1MiuRiRXvHbeNB",
  "key25": "4MoCMetokUiPtg8ThxGL6JYGwMj1fhELdwzBbNSa8JNZ9C8GN3nNUxakAUmfrQKBwc3jd1ycVkYEekzRiiECQnvx",
  "key26": "kUVCoGCEEwBRe3wCpGpsMCK68ok99NSyY617rEzDvrEMVybeGZt6ycZkVeAzg7nWjaxJFHwnr9SkMbgKQGZfQWV"
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
