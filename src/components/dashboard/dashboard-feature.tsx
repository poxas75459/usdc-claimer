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
    "23zZUB9CxD7WNtkeKZtPunkZs8nSpVJCqKYmntPuk75wrqm5bbwh7tonVpLSUsqNKVG6cEAwfZF12AAqCSzJKTkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SrzydQ7S5dRyfDNmpSWUt4TRXuEwTU5KcttkVuL6WxUizBaF6HV5peRwZuPzV2qKBZpz19SGUJLfAEmWXKPSe9X",
  "key1": "niLBJTbmdXNZ2owBEhgAkM4ugm5UCRUUtDmjeTVVxAY9HGJeJr5HCgANVfV4pDW9sXZQTmnmhAKD6G4CRqjnviP",
  "key2": "1KhKTn72CBXLE5u9VgHYxA24Gf6qmvor8PfWUuq3dkCvBWnM42GTUB7ez4owN7EaTqhNRgUmPTYT8495meqSxQe",
  "key3": "5Yh5MkqzoE4nsTHWPdzd714sMPUnad3ofCYnZhxNNYnrBLRv8LV3e7GWmCXZNHUDASK927PLkpb4amor6RHRLYMb",
  "key4": "3ETNmvxPQ7YicZEzczrenAhnr4P4axY89k2iw44NnnL3y766SJsZjAqvL5VbBTdAMyZMY2EMsRbCVeJWudvhdQ4f",
  "key5": "2i3GkLRnT4nVMFfGfw85X4ZWNs9CKgyRh633vWYwiajwXMLHSe8odhh6mJwDRMUet8CPWRbGPvppJqmbmWE4dWpy",
  "key6": "518Zxfym3Vkn2CCtNRPRQYiQ2RYSSoCMFDCoZUgyjJQCzMSBW7rv1KoR7eipdei83DLqV3jqJexrHiDJaQUP8qew",
  "key7": "3F3k5L98RHY7PSQSpAJANKL9XLrbfaNzYsZa87NdQyoEbb6iGSFz1mNF6ttiiunKiTF9UqteArsNuxFNuUEdiLEL",
  "key8": "3USdyvQXRqruoEP1oqVBA6Dn4b888NMCe5Jkqw7GUUQ5Z6S1JjHVmgFa2ahr6VCTmASYsykD8cU4199D1wRw8Jt6",
  "key9": "54jAetz2CtyajNvqhGryj2d5uRVSJNguN8ToehaZpA1oAuM4X4xxdfLS8MHFn3y2jr2fnUNrr3LxSE9kmbQChUUH",
  "key10": "66gcwSVcxzRo5kz8SLg4ZeBYU2KwNTVkwdheNZeCNeGJH8aAhXPmazCbVVQsMDvjVBsWCVbfy3Diw5oLdkopCtyL",
  "key11": "4L8D1cbuYwxuHN4j75kd25agoaBcsoqF6PhwTxC6DjhGuEMAHmQPbkKxD4S7iWxDwpku8R1LMCY6uPswtB29kG41",
  "key12": "5BMBSmKSZye67yW1RQ1Lpconk5QK1PoHgLjzdi9EQ6VCpMr6VzYafnTpd3HQeuwCy2pU5ctafh6K9FneHh6gB2ze",
  "key13": "yA6VotiVKMgKx2K5rTuott5kUYb3ot2fiycCVQBTN8FZJnvUhmXCpQK6XejU9dWCN4LkCgmFAEzj7aTpnVtrveT",
  "key14": "43abd7vgvF1yxo1efWuEvcLmxapbjzKdjZsZpuPrx3kLEzmWzXC98uPHFyRqc939fPogyE3jGQnuS1mqzogEw2gv",
  "key15": "3jVMKm9YDZLHcnbwf5hXqmVNutQS3BNSDAD3Di7y8fMCXycy2sUp57N6fwgtWReBc47XtJbmWuLu5WEPJWpas1jA",
  "key16": "3LettSubm8VTSNfycdESqkQcAYh2df4iRKYTrGFZugjfGD8AYdEP6Nu5uydQ3ABiWYvhoEGRP6pRomACU1yXnQ2u",
  "key17": "2mvSrq1qozFJ7q6N8MsxKvbyZ3ZrE6C3vGjj8s7K7afoid1TKdKZp2r8mXKWhzsPqf5Xoaxk1DaSFPtKrNPitGEC",
  "key18": "2ZW1w4g1DfHQEsBgtkFY1XJ46Wosoz1TorouekJ2A9dZU4bed26TctZYmZS5MMKo1EFPC16BJWim4KWdv8kspdQu",
  "key19": "42t56g23N6GTMcmhaAYkk27dqdGe92tyiSwx1Mz6fGPf5X18MMWht8sytrqbvVG8anM6wv8KimqtqquPMYeydusD",
  "key20": "3JA2j9inRUKafdy1zLmoZ7Uf9PfTmQKGo83dMWtuHMkE8c2FZhQRPYfBQY1oSrSw9sCNnVbPByF59ciTd9wkpJuV",
  "key21": "5QAo44Fg1bzMmjd4SWpdcv4LAknKhvobFNG84TRngsznz8yj7wfAQ9C4KKg78WHAg2C1rF1Qs3AwTDEsYd6i8gaR",
  "key22": "5xvo9oebboqgb2qZ9QroCow3UWdCu3iLMTcowYQdRxHpSWtaZM8va4i5btcjW3ziE67Xr78JQLNfFjs42Sc1mhJP",
  "key23": "4UgrFYWPkfy4DBexTK6d5fkdbUNw8azbrWnAkgCRZ16xDAnAArruhLjbDz7XT2GBQeUf8ZFxyYt8QHdMfSQBGo95",
  "key24": "2pg96LjYv9jnMGEANPnUh8pxYMZwPxrjPFKQ8ZWhtSAn5L5MQVR2Asa4JpnDGdGtkWNuKUwh9i7GD7PFKzd13ByC",
  "key25": "5fTKfo76XfwxTBX2sevxADfkCgTBfTDRB5dcGKm7iwVYhDqNEkYjhZd3fxsh3Y9nfmiJmVGR2MLEbaiDRzp9VmkX",
  "key26": "QxjrQmxaPGVCaVB6ZXMXvhQUYV5eZEkCJP9xFuM7w4VTWYZQ5e8Zf4MXJk3xtKUm7hyNzfSxgd5mYkkLABhXPwM",
  "key27": "41fgisgKh9Muxx3aeyBkswL17epmestFDvXAYo4ttkP1ZnFAC9hKrRWvQ8UqaptHuAFYNexgoV8ydfpCfXFqu7ZP"
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
