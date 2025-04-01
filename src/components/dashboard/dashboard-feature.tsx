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
    "2PSs7ETEe7Shz4xzZjwevEVo6FmaoM9xhBaM52GmTbXTj18CHiDHQ1PR4tRBVmyvPJ9C9J1qLNbPar5rVydD6uiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EzjsL6KpuytJMHyaDKQJLE8Qs78sTbruEPVyMBgGhd2QCJeWceLqUnZnvVcGKXAwDReJnkevXxEJg2Qip1Wghmb",
  "key1": "4QTyCwREVnA1y2LPN3LAUBWGfNcDg26WRjGLfHMCitByMksYCRbRpREQkmvgg6HZJErueuJ6JMXyYixAeuGXcxVw",
  "key2": "26HQQeBT61VLMz95B2GGazXKHd9SuEUDR2nJtzgDBuCYS735bNWjS7iwibrYo6bFiqJHqSGiMkLNgWi9UjZER6Hh",
  "key3": "5pp15YURbBnpqySGV9nAFYVeZJSQQuvYTVHDgApYpxeVXgaKSpbqhmWGofnsDgbqPEbyAPMbta3chft2NzbcKnqH",
  "key4": "2t6YMEsC9LwLZMNDJGCjP9qTPq49aneG8aLm89U1mR6uD3xKDeiKcKdmy78KDepKu3VX4aotUUuagNyAEgMJDEtR",
  "key5": "59HZ77iSwk85NVgUCE2DReeSwmLrvom2zkDLst92aHQvh5c5KfaWHy24hdrW1cUxYkXBpN4TxVpsnjoDxxhDCvbR",
  "key6": "4wAEj2HCutiTG3UpmEifuXnCU69yv9jcwNc79qwA97TzjULZRTstKNNGgQ8FQm9SJAY6gskBxd6EkyyF3g2RyMyf",
  "key7": "2Mm1ZZu93e8VZPeKzwio9UvspHytQUK8XHDZJgAmy7i4rJeZZPA9zHbL24TQvRkeGHGTv4bL6rTqaMUZsoVVJwPV",
  "key8": "4LrsbqxDAhcGhJD6QDm4Rouw5XfiJMG23egkWnqah6cE8CUHBZuFrDUguqLVSoa7mof28qJJLdXRRm5jFX6LrYDu",
  "key9": "pooDTTkKnHRc2hSjGSzzbdynHhvR2dFJSCfp6LfpmzsgmDYW5tAc7w2oAZyzqHhXwcJkomcfA66x2cvpSftwmdK",
  "key10": "fRx9TVBKSRXSfoUMMD7LiTKYp6vWtV8fL6xtizXBM8RNkGYkmDHsjdqnr8AzX3AaBnbdZHpD51guAPiwhzQSAtj",
  "key11": "2vGH2on1UrGU6wF8GMz9ptrq1zZ5eY5Mwh8vMsqWvpGp5pRsVEA4awntSWQmtHo9kjsGRczANBbTFp1H4JtbzpA9",
  "key12": "619UPyNaGWnFCfqD1V5BZ29sPH7a6PHsVxBq4rWt4pomamFTAtc9vtsnmAok82Wgv871PtXjw62SrCghqjoLZtme",
  "key13": "5Y1kKn34FuYVp4ojptg8vsazziFYikzKEEpo5h4g34iGmfZUwS99AYfdFzah462MtEUZqW1mRFLb3aADtGBqMTVP",
  "key14": "ko4geM6JhDSk5637PXCCJNL8fgQmikBvWGUZvfwtidJvjWNSzoF6BavhXWKuKguRL7sKdVKzeo9cwCbDaowU42U",
  "key15": "54pche2pm6JxKWWYb23GVCejohK9KrTLD3jHAC2X4u6uiarqSdTYs9bi8VJTquBP5kFp5gf7yf5XBMKPDuj9gRLe",
  "key16": "j3ugQS3sZNvGhMnmbb53a4Ksju7CufDYTpb1wfTkBKe78sNqDKftcS36fUjdmN9W7t5NrZ59tGhdx1EchH1VT5j",
  "key17": "Nxnj6nEfysqwjRnrMhaA1tZsmJ9ViCAkcDi3HT8cAuxkak4wPvAJA1nfjruszELzmgFjf3s2pCo4H6jpLFw3zTw",
  "key18": "2hBQZ19nb7QQrgAdsu2RzTcb1xeydPi8FEq1SK15MDDRP6NYVgdaCBgQou9T3oBvjniPXdWHdxigdRcvpw9EXJDm",
  "key19": "5anzmWsUh5anosAaR7yxT53tCgxkUD65bWCsqEuy2bS2fSqcRuhTfBMoqkFW8XP6ULktJw9EPjZXk1Mc6ysotpcv",
  "key20": "4RS2U9mGorYHUmTa6FuhV5W9WoJPMPeWhc6CpuHu8BVgj3XtpcV96fJ91xLcj3gvhnyVozfJaXKZqBkPssuxP2Fx",
  "key21": "2rohUUbVMWgxvq9yCakdfne6nmbpv3ko6xLoESGRJvYQCoprSD6ZgY4JUXEVL1SgeGd1J6VqUrUsLrgHEspzrivB",
  "key22": "64kPztg7xw4xCiFphoAdMLgLxbjSAhLD8pB7w6m6Fmqit8py86yJMTRVMkKMaSzJkByAUF9WNrpvhvRb5zwMLZMw",
  "key23": "28uzRoEypTVeUj8mxzYMFPvzpWuPC38d5nnnMFHTNDDZU2C3CBTeeraeziiHFHmJua17SLXr9VT1tY8drJnPfPSt",
  "key24": "45sfN6Fe3mY61v65xywQVTWB7uR76e4DfThw7FbhkeE9EfZ5uzwscuTLZmuAkUK6yTe1ah6t1su8VxHtoT6jDEo8"
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
