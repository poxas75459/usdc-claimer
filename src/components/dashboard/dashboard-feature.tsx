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
    "5xDc5iSZRiAckA8jH4KC9B74uMh18UjX79rV5F18Ubszy7iFRGzV6FAdEaqkUFj5CnYFn6563MzBQbdCcnVXmRDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WSposQYiXG2faBnHALvqZ2PjSn8e3hVGZV6y2sr6rrwjAYZGq9ChfAXQEwSa4iqusb7P52AEQY3ZrFPMomAwqYQ",
  "key1": "bLN2ysWfTgThkvy5JZAGAX1DyNV1cvQHDN3ReaQymJog2fPCkRP13RfYDGz5tDrZ2CPji9qK3RFtVGzKBkoWP8E",
  "key2": "3JMqQR8ybUsv6PV9TEExyvtW2qg3ar5oyqJhP9epPjhiKXV7nTayGdV1BqQSJbt48MmKdDdFpEHN1qdxUR339esw",
  "key3": "3kUdmSjPaPMt3tadDYLmM2y9qQwfqynLS6MQuAEcs4uiFDVzEmaGKUR8EApf9dZ9jsfsaf9XCMZ4uK6ZWPX4V9mP",
  "key4": "4j7njJyTM7McfjWKPg1ovcyC7adB4a5VSf2fa7UZ9R27U2Yo4YYJML4exMbiTxdJavi6aFwu9fCEWZW4UzmxDcDT",
  "key5": "xvMNPNapfjfi5r6j99aqEDXod9g43R6w8wtUhQGsrVKwferrTykGMe9SfEsazedupQKidthDJW4f9HNbhhpyD7g",
  "key6": "4gdzYmVGcXprGyK4u9BTGZnnjvUaEMp2ntpKRzc9T4xY2mzv8v3tcPFCrBQ1gbeGGfVZRTxEbX2YmDPpSzCJ9Leg",
  "key7": "4nBiE9gWdYxS4LDiP7KgkjR963UBFgXHDC5ZAGWmX32MCdhNDF116FR9ktmnzHtqXtW2hLLEpyobQLWFeqcnVaCb",
  "key8": "2UEZcXHsFeGL3whf64bUKyzSTVQcxYWd334uxRE38sxwGHm7KJJB66uYbBcn9XWxWPA6ZewyXWKsTyqvxB8G2wCn",
  "key9": "3ETM6h7sFRLHj3CXqgJubtz8tiAbq3JRYc1MP3g4rbE77CZMWKTzwamd1MZA1yeU4uQ77BLoGYGGmUvonhYGkatW",
  "key10": "kjdQ5u6U8sbCDgjio5rz2hVcJgkzTVvkA1wHebkob5QZxxMFLNhmFYmiCvc6LhTUf3gp4DQWRvFGb8DjuN7EUtD",
  "key11": "2H6Q9mzX6EwceGpkt4W4SNHjo1gmTFN8bizvkwN474XkyvEUKJ85m2Q97s8qowuF6taKw4xBNXZ3GJHA5sKFC8L",
  "key12": "3aeTPxqkRJ1H9RxPind6vpDtR4Ycd5XUPsoZ76kZdCrohFQpJQYmFxoQn6p686s6qRumWdVyZ4NtQ7F6mBxrm53V",
  "key13": "eJm25gZ6jQfUiAerXg39gkeD4ZChRq14g7jTa7UKyeZGavd5m9A4dEDeHFXWoV7kVgK732N5wVARatTjP4Gdwhg",
  "key14": "5tXDrxrEeiFpwnFuSrrKYc86Wq35qEBKK39m4eeQkgG3CSXnf1GMUb5FJ1ympGAVhsnSTgCjF8XX6BPLLUZveYvn",
  "key15": "FoWJH6j4xdNNMgyvdpsZndSjKxnGWsSBNbuZdXaMskj6SZpaor91SZrMtNFVRqTRjzSQmFtkWByEtdHG19ZNoWK",
  "key16": "4GeCCgJgQKdWH2zfsjbDGRrmf1azrUC9voXEieErreprSqfZUacaV5ds6twn6i86tjJCxaQiseSbDGutecDDeKaG",
  "key17": "3No7Q7vd75vxNEYHXu755HraLCMLRJK9jtooMK8cJB5z2zhKWH67rNLhS8YyJxqAiq5FaJPNagdbP6v72KtdWyg4",
  "key18": "FWxbZAXxs8qGfGHMegdREWQjbn67KqZ8EsrbPF88U13eGAuWgaETv3GGsobUzVk2bbnE3dZqKdDuRVJG5jLvTuS",
  "key19": "3MMFCBB9U1Yk3xrzVcvCoLqKBHDnG9vqpNu76xyR9QPvWMDjfjgrw2F82k9WEt8phuuTcqBQQEGVjoFTFt1U3Qnt",
  "key20": "586aRWYAx5rWfdE9BC3aDbePusV6FbTex9wwnJT6hhR4mMw3aa8LCvc21iADF5fqWfJN2B2sv66RGRZv2xHfdF6Q",
  "key21": "3TDdeQHgy1f4mVnzCDAQ4wEznB3GZ3JcegmUWTxY5CershmWvW8RGhAhmyRcgRaNxrjTPdi1gxuKEeLZJaohSSgv",
  "key22": "3QUUqf2kS4tWngzYi7BxPPURWKJoQVG4Gr1Dz4jgRaERT1kZSxe9CJWn7JDquNftjM8scKDUe6DUSH7dpMN174WR",
  "key23": "xU71RZADFLttoGfySwwAHfkv7AAVno6gtUiS9Y6db9W4V7jcL2ufhNLj3vt1VjC465Uh8gPTjQDznbfKbF4vdYg",
  "key24": "2HajK2RLHcWU5QqFoq3F5PgEEJPvVSXDtTRNbZkRNsjyvCXcrdS1ZdBYmhrJ8QqC4CSqPxHp5Mc5P6TDQZM2qqxC",
  "key25": "5dzUkJcNe2rjwe2Rpqhy9F2oBnFAubWDSpubJMyPRBVS3V2rUkLp26cwrkfQAbnMyUxHPms86znR2KpHpKQc3nQQ",
  "key26": "3tiDeZdu6uMFJgwwX3yvVEKoZXm8XD333V3ykdFyHAaDnhELAmUmS5nU1oSminbF6JA7KSdZkaFhDhyXz9ZVbT7c",
  "key27": "5KfXfFoZTNZqH6GaBkFqEbY8dCe8aNKZm4k1qpS1UwA14ALfBp5equ1FYDpVD4k67tZRY9gkczxkvnLxGgR2kxc6",
  "key28": "3H9RSUsqDiqnKPgF5NY4ES8SUnxWoK1NEzv3GEGB2sNqdw8LoPWc61MtvLF2ZmCne7bEPEeQyZDT4vFR3RAYzMM7",
  "key29": "6BuXqJZSF7psNKjTsJ1Eia5MV28ANTatECL5pUEafYGLYkjpEfoSJTN7uLLE3SDKp7qZGyqv78RjVC5L5xBKWrM",
  "key30": "3pQGCQvAph1Gfvabaw9B6ZdqvgJ6Vc82zn1hx6rKCB2pMWq9w8KQ6iMUhUtX16Grh66fmmzpLJLmnT5hnfc83weZ",
  "key31": "5s9r1jjRcrQKUPqkcKm84DZBsMVKPRp47FFnwNBywtaqdZbN24nEgrMG4MuPhLh5Gd5FmwU8a6EFcGg4JLyPX3ET",
  "key32": "21wJ83SLLwciQeRjwzHMdRQVrathV16SjRxmGc5aLyvUodn7e76y9akSbce8FoyGugUTebG2pe9rpZ8HpmDKxedu"
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
