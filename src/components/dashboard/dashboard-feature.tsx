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
    "4aYCiZ1a3e4pRbEurdsWm5eWUCi59btseG4txdGTUk4RBr2RgSeFoKMVkiQPkTkoq7cVQeHzYAFMH9jAgVyefbMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h3gSQCkACtJ518iq6wznkL49Ue9aAxidRp3SG7JpMQhaPvNuNFSEdJRKqLUXgqekhauN6m8VqKr5EsLpNuczcqz",
  "key1": "3kdHdor5EVmJu2JPT9UXqqKXU7AzmGpzPwd1offrjuudE8ETRsVk7pW3Uizw48ecPvfiyDgiMXKuFR9wAyzwy3ru",
  "key2": "3Gxk7TtCxggm968hZsCG7192Q6PntQa8XwGbapbwhsDYZvoyVbsHM5oPGFYguEerEMDvPPoEFKd992FMJ4QTKitH",
  "key3": "5sbwenHar3CV3eSpnqAwnyqPJPELXoWF6pcm3SNFYKv64pfhSe4XNAyW7emrQVXjZnfZUW6KoSX9TkWLiJgsutDS",
  "key4": "2BB387JJmRJTvwNrbXSFXuV6GGgKJRua5wjbAWpWzqUzVPwZ2nHoXQ1WP36nYdDAsAXaf6B1XjurGVu8F2qQjMab",
  "key5": "2T44pLVhbBC3PhHzgyvyqevR1sDRXPdnGYjDW8eERfTN37eh16zd1gcir8hjok6gTpLAHoQ4GjXHtj6yYmjJ1sgR",
  "key6": "4NizTC7gjSQehBtE1mPN2yXWxdgkit4Z8DSTRoCZ6sp6EcAAS1phSbz7pobxkZgnFn9phNigtPKqswThkYf62sgt",
  "key7": "3cbNvcmmhZ4nwgVnPqL5BnH14cSsDy7LYjvfdhaQavwY65qxZSr84EGrgAvTPvEPXYqiqZqLQRkhq62sWtdZx7Ad",
  "key8": "5z724BaUxEhBNaFTyA6HBJnvyJtg9JfMedaTzZeuVNfK7wBdowtDuCbs2FscHdtUWhWYbFJpGKce6Li2QENkJw8U",
  "key9": "2sHpE1iToJNtwS2qjEAMPy2to7FW8Krgr8AuH9BBXxVCjNDmTFZAWrsEqGey1Nub4rbERzuT2CABenvZw3t11DPe",
  "key10": "2V8Y7y23jsJsnLTAS6aHf1hjjqfWmaTuuYfPQt4emboqXa8zpkdy5wYFqRDWMtfMScc7kZRZ9M2NAAPkFTM2QyNR",
  "key11": "xG99u4d2eAQ7HUkPoVcPcuC79KVUqdEX13MDUNmihhRw6un6dhv5CLAJciL6C9VF4GK5X2UsxSNVvxymF7XsAUV",
  "key12": "5WGDgKbCNAeU6brSeFhyPrTsDvnQcaiFMDTBQJ5xdFoxG69uQZhJFAZ6nNS1zLEaUM5vZv2kPUQmjvDnKkQ4VAYm",
  "key13": "57wfMiXH4D2sPeHRHrvPdNytzhAbgS9Abi9TZL9RNogN67c3w5uomn6mPLgvU6s9MCQFiB7kMiK5CfvAzftfjyoP",
  "key14": "3RdcoxH4tM9p6VwgXEFqCvxACxk7EqZNsUfAWFU2SVyPbMfbEwYPzW32H9MfFcbgxrq1xfmUtshmesvDVYfv4dpq",
  "key15": "4VCD6CUzpWTVk5tVcLSqwaX2NkrXrZSRAUm8Lhyr1hWohd2GqDwSP38xswYbwt2kdRUah6yTaKm4zcFa2cdynbMk",
  "key16": "2sd7v38F2Bz5F2thAWnsnDMGbXRDCodYC3gLYw3GNkwfgszNEXKHw5zDhmk3Tu9kvEaeojLK2HJnV6zXCtLPDAEu",
  "key17": "3GXN7tK5ehEMLY8k5tWvRER9GrddM37R2mj5jEriGiwfiXLrp9PMK93oor95vG9ri3dDcqdTUmrUWmVAhGUyrjsy",
  "key18": "5DyQMxRUVZDGyY4wpz7prANYFRrsK2efNGpHJYjjketv3vCMhApUuEFkwgE7TL85YJSVJQ1Sb3pkn7ev22wH8jqo",
  "key19": "288LsBNxviAsp9JsxmaKKVHx7Uiuxmo8QcT8E7DDqQk5cC4iNHgNYF8RbrbcrpWAbr1vBatGhYJr7HK23sko67Rv",
  "key20": "4qoHJ2HHECNrd9g4dGAxSMVdyt7Fpp4SNEcAq2WRCU4vYD4jiZuidNhTVa7WrzPQbVYHWivgLimBU3qaogreD4C5",
  "key21": "5c4c9zWjrzy8T7j51QrVvK739Fj1Csi1GAzTpRLEF3CSgEhx3UJjT2qWuQFLEwjmjf1FgtqZGhD739fbiJ9gFJPW",
  "key22": "5njxjpzn8S43CXP2JvjP8NWrfxn4p3zpPjgnRJ3E2yxseRx6Muyunh9EpUQ1GME6zzhYW4UCUy4WDvpHCh2Vvia",
  "key23": "6NeLiAQQNqoJkBmiRaLDGB3yVDVHDo3dgLCMmFoPMJxZNjjLCFrAbCzun6LGzZbnTK5NSGYwb4APsVM9efJxDKH",
  "key24": "2nSsE9nCAcFCC8vB7ii9AdcJrYWtDxVbGUTPSmr49h721ua64qHRdgUbBoFy4vnsp7t4fiHeyQnfVHiK9b78v9A4"
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
