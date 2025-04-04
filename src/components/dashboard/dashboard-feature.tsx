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
    "2Kbc1PPr2J9DiaNDnN5fLiiZhStiagKnMfBDH71QEyiMNEvux3koDU1WmKJWBMRWj8fjmynSxRHKZnoJtKhX9q6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEtPLyz7dYkTsEJhUjeaSYYx2xyUGkzo9qVPVpWLVNGKuKE5s9NPHAtYENqZE2svH7hKXbQvE8MHCYgD17nDcrH",
  "key1": "MaPPZX4ee77XaybUNUXVwkxDWBsRWxsSHBdySQgPzuqczbdJ1VtakgvaqshNd5VgWRFGcHm9gGm4wG26h2orXJz",
  "key2": "iND3qtpppo2kK2YvAM8AvQ1dSX8SiEfBkeSFp5qYhoNe55qeNxoWDiS816yL6iJGy2hGR9uYad1nLCZB31NciDy",
  "key3": "3kBUKE4es2jyPAobrgZSb7ujLTxS7Ljftp6SBVGwHNyBS42uG2okjfwrqEHvfYRAq1RUBcPPZURxcARHCT4QdFcw",
  "key4": "3S9HPGd8WVbWZGLk1yED9dGAEYZ1GY48xiKhqFULkD3zycLpkLrYeX3WiJUMLUrCPzQFSaU1ytLYTq37Hw4buMs1",
  "key5": "4tA2u6pyPkEGiBPsBpNrZhwqbxh6wd6yZrHZ9DEwG9FfK8BLk2GjpDYtv13XBqGCHh84GFyW5dezjceVYEMQwQCd",
  "key6": "3M3Dfjmzt2zNisJtiUec2SK2C3YHDs2D1aZDPFWxdT9PaRErhGnDhKZxzT3W1h6gkiNKjAqv4po6atHf6MbEqyng",
  "key7": "z8rKy6CMAkUYcN2rAc7XdrbzYu1DjmbXHrrPVx1gsYVGexJA1tUDAaEzNE1ZA7fsyxyd8mhiun5XXrXV5wQbnRd",
  "key8": "65UBN2bYnaixhDEpKsauvfCkf317VttFn1XM9TSyzFpKejjTGZxVonXm3upM63hJrFNZAXgwY9fktxVLtmbGPqXw",
  "key9": "2jucLWYPi4ffHxG6ug9af7p6SpMceEG7RFoZmM56H4BwNjjkUryEyvask7b3xETRdPyqoebDUMbwYKjVvuQSM7a5",
  "key10": "5jp5av2zcsmqYzjoXuDBoPYdmJsuzRxHwtiYPzrweVPirXQk8u3m6ReECR8bFbLHZgerRGzJUWa4hcpj2SMyTVTQ",
  "key11": "2iqLDoN8NJ52vWKXoX2eWenw2inooDcD94sxTsmiNW6PqXwmoWrQxGqJsvooG1oTe3cgXnXrf2aojdoq8D6FjaM9",
  "key12": "2erdybgPPZFLmZ7ZJcaUhgPmp9WgBxhLs2arH7DsA8PsrSPaffaBe5qH1dqQdSt4tH2D7dKJCEB7wBtiyEVSSAuY",
  "key13": "4agxGnj4hfRmH3wmwZNtHqspQQoubPxcJAnbFc4pLJP7TTSXZa3PZLmJTmNd6BpXRgk7QFCfrbskKLbTP5g12adx",
  "key14": "FLu68T3D1Vdp7g9JHJfxsoAGKU8FSwSFQgTTrQQ2U5okHHbJZoDKCNpAMJ1nnHEoEoR4UQPPkwBMpjhrMZXxYy8",
  "key15": "4sQgDNxyWcDGEuhr9zN7raL188VAA4akcTwmVRmGX7aXn5rPuJg6zY5SR1pdSKRzNC46ZQMLUrKaG9SvRDNTyzGH",
  "key16": "WPUd92sGTDzHnsUGSbhpV7AiSiy8AiEGS4WLuuq3ybPdrBw9TF354asa9HbB4L1bD3xxdamPeovAb1P3q6E5SQC",
  "key17": "4aB4iUpvEaTsQdb2XvcfyA17YEsCwphJzyvoseZ1Amv3CygnoWwxv3VaQ7iktsrRtKbmeGiUQnRmebowRbwHfrM",
  "key18": "4uTijfBwiMmn4d12iXvutVKPxXCafNDriYpv5fXWaHfRwdvPGRAmyEyQRTvk8v7ZotPdZL4SW4MH4wQopbgyDyA4",
  "key19": "4pxgWzEQywrC3BrHVyrajR7b5bVr9mrFq4wYMs6fswBD3ZFhtb48t37u2py1Ey7ias8H7kv84eFBKBzuCB1JBCHU",
  "key20": "DUx4K7S5aUFig6qJ6joGKEsciDBx9FeupGVsq7JNVD7HBoVv3rnKHwr6De6HFeLmfcQZecQB1cVmT1khrkRxKJR",
  "key21": "5rkDcS6JgJrB1wNK1XL75R4JQvqwc1xHgQDMAfMG3yGHvBjdvThtUjcr8scAuJ9yA16hzhixmDPmLke3Zm6ogJMN",
  "key22": "2DnAVcH6wTV4UBZE2uEN5s9enqNDgEb6W93cHKsHezFerjP3EYPucMTJgfFinV4WewbWEbngWfLWJNHJn8wuU1GA",
  "key23": "2Xhth4WX3Na69FQd3NzNCbwfSWQuGjjGd2Bb7avzWu7oR3eeat2A4Jpo4mu8W6RMjWuYbh3QrdagsF5CisnYPXNB",
  "key24": "41ebq68g4h5SnuprSLkdknNyGbfksCRfpBksoqbyCgwzCWmnnQUtgG1ftUiRNBw4kSUi4KgGM1z2VLQtAZpKx3nm",
  "key25": "29HwSMH11Djj9HAnJudiQdprffqZq6zFPYtN8MvCP8nD9cJo3JLQXDbvnpUXCvJ4ewo1Zgg8D7jLV9XKCj4x8GrU",
  "key26": "4e91Pz6RY2rsCGmhEiBejMRdkq7Dw5omBeNdNbvfV3NgoM1NEt8DQstcNGUAuJUiZ4FJXi4NDPu7CV2KbjvwqUVP",
  "key27": "4u4352XDL1nEDdFxPAwZhNZCp4fFahds97WSFKHANiyWGLj341AKeRe7vbodxTdBV9UNbevbpuonc3TYJUkCHEuf",
  "key28": "2qmhuVT4RAk46BjqYcDvTbp3iR3xjLfs9SCFs6EoCXZCYz8YkGkGX9VqGGewqHuvJz6agXTLLF2L8DVBjLnKRsB",
  "key29": "2jTMoxQmgMXtdv6aK74baTtvwaggztKKTwPSrrSvyL9gU26GTCrqBPiH51KfPVbaAcjTFQdAerFXmYmKD6pSFwUn",
  "key30": "2x9xKfeVw1EL7sC8eeENZWM9PXcwaZxpXSEKQQP4DfhsgpBpUqXkSKYe7641nNSTWm4oXgnZCv6gWapoMb5oErKf",
  "key31": "VtmbrRbMpwFvfrLjuYm4MnfgUeVA7ryAYy4iCgfHtiuNpbpNngaCkWjywjaXhcZiL5u5rWRd5N7fwNzWCH4dwVW",
  "key32": "5yVa48pDT4ghkKfk8G1FpG2fvfYEoNeo7DaMk5w5TW23PVFE1NzrwfqV1vervE33mG1a6HXBCuSDvg5ScvoYw5cf"
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
