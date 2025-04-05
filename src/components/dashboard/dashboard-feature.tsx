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
    "4JqpvNGYjSsBYcJ6wUmx2nkEETCjfoowwuhagRcCERAWWfxNjveAtvLnRrvzT5F6ZUBa6Uy9Q3MiiPVyHrk3oGQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VsYS6xTEbpRbZuV2NT8ZE9ykLBruqgotocsrhM9Zj9AgW2UZmmXnnCj8zeYYhbg5w5KzTSukEsGyw4VEVWybmu9",
  "key1": "3BMkULnjGRTn99MwYaVH2m6AW9GjYEH24iDVrHSdwvBLwMYLXewhy644fAiw2vcWHsrGbcjm9cgVpdG1NWHSeNo8",
  "key2": "4Px3bqx4pZ3j593oRYzykFGmTwETPwsKfGSCZSSjAcjyWGp4ErTojLSNFXT4jEYnPVxAKHBuRwRcHfBB8bk9C7xb",
  "key3": "21mzr5KwtSPsjDj6SqLLwRKiRxwCN2syXCW4SZ7zHTsBwnussDRoPYiF9B42aXfspjJ6T3FWFmcZCDJ99RYYZ5iB",
  "key4": "2bCnyeTpwbzdj8Si3p8tUbmguL9vTcGrvDCvzLBhmakMRc7PiPWBBAhrZTTyhWGvDQDh3Hsn3EyFh2rPUs42xJUG",
  "key5": "yqpezTGEiLAEPecWU8trH3yNqZpzS6pM1cg8PsBNQJMfATE6DcnTYQKY5HgdvKe41ApbAiG4F6sJ9X5GAQW4Nht",
  "key6": "SybcSQXtHEgEL7pmZpwwCx4h14fg9B75QXYnnEE1dKDRiM29RsBinQqnzLsWtsEjZ2EJXyK14P4iTxaWTcsXcAU",
  "key7": "48Gy9JXPg1NyCZxm892BtLv2KW9KeezdHX2TtTP6aDV2wf7qjZrCPwY9V5D8RdHdKTWcpPyT9Y1ovqfvq9dcyu1Z",
  "key8": "4au5i8jVTmB9aTnKo2eudWemcvZm53YzoGvvRTTPpnuv7X2Yv1fnq453ixZneVRWZtvjkvrXH5hY57hwV7LQ9MGR",
  "key9": "64a8BVx3WtgFzo7h4jnEJxrW4VH8xwNg54mo2bzGA8FeC2dvjjQnrB2FacdRj3gTDseKpgs9hLo65WKsh5HUK48P",
  "key10": "3eV4ShhXEKfb5ZYv9Md69M4TKTrhJqogQ4KPsFEEQhTPJyLXX19itLjCxF4mG4xMnKdjfJAFZkqViNcSxNEQfsk1",
  "key11": "4U5zo7jfz1iijRwDg3ABX2aZhTFiL1QaFFfQMRQNcsKpY5gTs5dxKkzLhYSYxyUK2BgDKRtFi9wXTDvXjwLyxA2A",
  "key12": "2midW1TxpGNYaomPhbx52ZmTYCwobSLZX7mY8SHU4N3tvGBPJeLHqirmJfdQqtcKs2ANrGeLDXAuY5pWc8YHiHNS",
  "key13": "5BN1Ld9f4B7E97k72Av3Sa3J1enbSnmSAFz6shZmqEQFHyE3ZZe87jBjJYcbd9EJJ4g7ruRJnGLJbZwb6bxt8Bpf",
  "key14": "27iAmaVZcw4FjVsyhMcCS4WYjhmSSc8ifd67oWDwaKfrsjUrnV1TPcK5nK4Qx3b34BRUpdzLReX3XfVHEohNH3HF",
  "key15": "3p62kM2ddU6KtjJcPfGQs64L9WTmWeZ9fTq3uvP9fUkvx9GChCcFWMFg15cVyvuXDuXbMjP5GpXnmZK6CLsBudmc",
  "key16": "srLzwHbWQUoLSYz2tGDxTuP32Qu3XznjFQdgRpjqK9D6SCDCLrbh6KBMUuQQTsxCRpnzG6rR1udMSyQxfVUsmp8",
  "key17": "3SgNb7sZfexMo2GfarJCSJPBiprvqpm9XCSypAa2ZHmbXwm4356tSXwLr4KS8CUE3xRbzv98Hn4xzmacAJqr9rxY",
  "key18": "3FLofAmYj9EWWHhZ7QFWF97xTTHnkvQgd8CViMkxryo5uTJhFxA9sRiy6qdoQ4YkYqAcZBj2ixdfDnaFDvn6cXyj",
  "key19": "4avaQeP1HRDuGum2fz4Q1KSK2Tgc4BmUU3hUmVzwqGSAKdqggHQVNBXYVvwAxyYmWoYA1TMtMD24Y9xu9em2yi6r",
  "key20": "ys5kS7fsyFuBgEcmQ7KKLtmK645eGAzroMKFGEb2ivQfbCH9C7HiNo63NMCRyimDcucm6Cpwrcu3QjMNND6p27M",
  "key21": "2sCs9srJKvLQDT4eUEkToV7rZ8QPKS6aTt9F7zwF9f8LzY54WZxHBB45Sryjb2TB49UM1Sk5T4V3dQR4gJtSkm3L",
  "key22": "3dW9YSJG7mN3o5WMz2acRvpwqfnEveMESyqmfsifgZyVYY1EYDNf9ui6C8EUmdfsRV7ZTAM8uxi1ez4TQDWdTrye",
  "key23": "Kk4v3BMbT66TgnnpYGZPfvwZuYo2D92rfbV872C1FUDgsGj9BoAPEwpGH1Q7AvtZxiXPzQn1ciZLoUKQ5HLwcBm",
  "key24": "41DzhGq2ScAu24PXG7m3HUX1J8qugzVgPy57RSK6pHTicste9sV5rHrTynQEutjDrSCdxURpkKe9H4VnPztEf4jV",
  "key25": "45mj3CW32vpCWXzESMxThy7Tr6DDaSVjUUaf1oC2VeDDeAqfb9qnHPMRnPxinEXnyQ2PC3ypgEcbkfDyoNMnpWQ2",
  "key26": "2qJzjLn4TEZ6CRDm6BPow4mRUJSd6JKFhFuYkUhCysAwXQRaip4sAb6c5UFhC4RLg79gtofWHz2HCHhuqmKPywpo"
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
