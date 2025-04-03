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
    "2Fxro4gjwHCFchjvq5mCsSsXWx3dqxsMnefnrC9TnWypGUdsWygw81M4u3yYm8VTcsgENK2PmR69jLv7ot6XbyaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ZFLsNWracYwTwVavfGU5tPq5XF7bCpNQ4r6PKyunCpEfEsnfuuyFnsLBRPfh5CCaumLx4VgXar4pEr5a74mu4Q",
  "key1": "55Ay99JqVr8nKK5moREg9JnGcz7uwpuJojSFSgRk9RED3muKuh7C4cX7gr6bX3gmTqs8uT4eADtiikuhEqi61PRy",
  "key2": "2LQ34Mwz2po43JTW3WaXCRBE2ACotFjNZnN3v2uX67eJj7u5PyxFFfvK3RZwVmF5B8apTtMPbufpQzNdskaqt9bu",
  "key3": "KzrCzq5cvQxQpWxbx6W2V8erGfSVM48EByANyJyAR5jE4DbfNUBP3VKYRZQbiaTpgArp6QyGNx1tEo2e86DMmw3",
  "key4": "2svqmksENsARgVyfAQqsnBzwsWZkoUxhwh8fo3mRWe8x4Xd9bzt7TK5atNEJmhrHLSuVW6yDXcaaZpmiwyNbch51",
  "key5": "2rFjDFL1x2kQg5nPVBNTMwiASWkZf5vKp8fTmtveYJcoPS8tzg3Vjy1jG4DQhHQYe8LnxmFEFodvoyeqntcgktEF",
  "key6": "BPimSJf5MU11nN6cKg3XxnRpjMZ1ejdpPjrx9VHQHYmAGGTib23GQQFV3719v4G1GGk8MHxEkoDnVPaNJAJDiL8",
  "key7": "42PzVtB8htB4j8tKDcFvc3TiYdcKA8UwR7ZdvynKWP8ruJ6aXTmF7EcvmUZfXLRgRgD9bEoZQkAaAHjvtnS8JQsW",
  "key8": "2ALoeGczCQGGPcQNkTdaNUhjBtpbedkJRM65wBCCmtLWVig4beW1wTnFq1oABfbpv3uo1jvM6KQTmxxJUnw2jcF",
  "key9": "2EKepTR7mJqjdtebHTKfFcog8RdC6nAc6E6pMR1NbLph9wMTFoAUFzduCQj5sk2dgPgu4joie1MpC3su18j5cyp8",
  "key10": "3yYoWbVbbNpVgY6C614pbUi6vPY87Uoma87G6ekkaELST8tTCB6wwVv6AhYdsqgC7tBcD1ZqUbnDZKrrJj3Vr1Kk",
  "key11": "3FmwReM4SHFWRP1f6DBnt2GiSaZHNQ18CLeS8KnTamh5DAxi9Stsx1rRzSUua7W9DqRx7PWU7TW61ymqUoYnvkGr",
  "key12": "5PEQtTVLVdoXB3qdG4KMgfLV49zBrPQMnKxAX1XAgvc9nWnmSxfEhVCBpmm1KNokFxjZEapcc7Qwj5suuAHsWyt9",
  "key13": "2dYS3RCmxwsBtddzbVxWCAiz6ZFJJxLsL1NyeCV5pxMhbhG2u9VwRom2ipxPLpbXYL3stLKA8nqqHnkevfwAFy2W",
  "key14": "31N14NhmX95bqZoCKcSiP3HAs5ZdgUFYJJRKq9iCq2UVnjxfGNuVw8NsBheAU5xsvmimi18FLFit8xXvUfXe563z",
  "key15": "Vjv4oLrH3rRGore7WhT1QmaKDQrRpPbVmu1hY1sRwAuA1RGc9eSvNeT39TgSwC1kbEMKiGrnFnrEbPc9LWHFTzv",
  "key16": "5u6GrUuZkjNjgcmuFAQZ4gxyCYdWFqhUMNPFyuNx9CQqaAQrBmNmisdCf4r8AehwtNDD76t3H3hXbhhbjhicNRTY",
  "key17": "4wbc83DE2gu12eTRdHDeF9vYMiRh2uKVr4U9s9mRqxCGDB6o81BokhgGKbEVL5iCKzHiUVzBW623G9GAeCBB2EJi",
  "key18": "4LSMkZ2oEsQAEqEi6DJnQZryq8H9zd6TzRoDiLjk1TobCm41YZyGp5fpSFh1561wRk7d3wzgGcUEHdmVwxjKvyFA",
  "key19": "4TqiwxETRnRsvkEWwX1nqG683wY5FUBTacPobsM4Ld8puv6HcVGhehFEs1GG6u7a6Qa4vEQcVACJSfgz3o1sfJ7R",
  "key20": "3wVduReJkyjmhSVfzATTFKZGNfgzJLxZxWVPQaR8dCeLuR3F4VNBpWqZ48w8nbupnGpV79F35on5kmYT9MZetD9p",
  "key21": "7FFCDNbMxKDfJxvm2c5vo5KcmSg3Sefdrc2G69auLDq5Ax3Ly8D7Hd3WAjbq6U3L6JQrCpu3FBhLTMVPWKPFHZR",
  "key22": "2Xt862xRjQrKTW8iPTaCNPHNfKkqAExwi74dikHQRd3g3ZcADxuFQaJq82VJn24RrQ9siDub94xKpRJCznGh79yA",
  "key23": "2Z8i86WZ6KLNcxAAjF84hS3soBoYEhwCEnmHXgtRJX21RA4wBTw8fhYc3DQSFkRptsXbh9n2pat15GmHgEo22QeY",
  "key24": "qLpyrQWXZ8oe4iC2YkAVVpcBdJrqjFAQWnphm7nzjmDRe2PCR56gAJHtuW3xoanShcRMpSNbvvGnd9ApW3kuNST",
  "key25": "qRV8cWJoww49wHcXATWnUxNimGiN4bfo1uVBnvKhjJuD82yivi2uz4mXdXiswWvjqspwQKYHaaCnXzxwwWk4rfn",
  "key26": "2TEEK4rtMyRBgBqxuiGDE9be6dN81FTDG6rbyqd2AQf8ruMc8xJgnac9mWE5paEsTFEnnbfgbt1koG1UkjNCrgcR"
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
