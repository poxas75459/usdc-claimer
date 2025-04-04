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
    "4DmDFQtLjtuAGjaVMEjq7cmtXuWVNmwrYB8zqV639p3B6X3bQ3rp4CsR86xg2JrQXT9RAo4PD69PPxVWiP6YLxfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5auuiLdjPJqvvWxvREa9ZHaGrVDpKATGraYG3xGNCcEUh8UJHYwEaXMfpcH4PHXANdz38kPHaHbY6k1L6bioHCnw",
  "key1": "Kx7o4YPKfnzctZ4auiwaqo5EVuQ2gdMSZG4iBzD77e5JCZZuDvcDXgZSCnc6wdMXJ4StUXejV9H4zUxfmLe4EYK",
  "key2": "4AZ5YZzi9BCN7XJUTZLn7oY38VmUVyhZQUHRC5bSkjGkzsxN3GL22gRqXyddR3WVUhW97tVDMdPMQiW2f8C1EZWB",
  "key3": "54u3PUdUPptjAh9yVeovyBkhwRPLyPvRrgCPA1exNYnRB2ASERVjuJ6WiajUWrkGDFGA1BQPt3JrXXL1cEH4z6Ni",
  "key4": "2MtcajnTS9cQSxHreKRUUsdSK8TdauKqhYj1seHAJgFwFB68fWiSHKXiTUmr689N6ep19wB6SkxJfwsGsnX2p7DF",
  "key5": "2c3d9rncKXfTGVzUKqwXFJDchvGDvJvXMnNB2qhMwLpdYmBPpWvpxLYbX1raQBhaVBTohnULM1MPgheQnoXb5tA",
  "key6": "5frFPZtkb98VuroeF5KkxWmx7Tkb9efpEYwn51UdMH7HAE6Jyu9xj2jvvRb6rL7snpN5WWoox8df9aSocgaZM4EL",
  "key7": "4w8J1yYb1qU3KPJ2Khw5nQzjNKZ4atSA1uHf5TWLNcUGC5VE2cXXPPYTwYp7siGxiidEuXQBJbrFufBjLizum4YN",
  "key8": "67Q2Gz9JB6oY8nJUHUgdVL35T5gM6FVPnnSXcTQhWggFqSPwJ9Ko18kQZ4SfqR5Euvc5qi15TKqB17h1V6u2y2bU",
  "key9": "5CCe3KxSJdJQbJDR9mor8VeAfJPJs4khyHH25K9QXpLQpDcfSeVCfZ5piV5PycLiiCF5HJpfx9tmQ643UPYdJuLg",
  "key10": "4Tc1t1w4SaBqZGnRhJKT8q1jbqxZuNx1ckYzKPSTgS3L3P6zRCbWafC8XbQ9wRTQq8ntVydkpcY7Bv7jiUi9FWcp",
  "key11": "5fZ21UG1iagzp5j8nJt5MX1PkhjuQtNdZckFXcLbZYcAxX9kAe6qcqe6KyebRUZtZqrKuRSULNBtx3pmYcEw2AVw",
  "key12": "UoHxWGGCCiPsYrnzVzpPsnZA4wSmE81rRTTmXH1rt3xR1c85kvtka3vJwWLcYd2tjLXYPWgAjUUnpendVZsM6dH",
  "key13": "3N3MyLr2yjk97nKuuqLYaq83fxkVo9cJE8Lh2JwZNk7KtGHG5VxFEGB8SS9ZmRm4tw251kiR5MvgAgWx7wyPfVvF",
  "key14": "2Xs9GybGAHgTbXZwXGeDCg5tAkH6rCgWMajpDxfyb1oDHRZEWd8CPgvNLEUrTSkCL52auj2gffGcJAyGLhkY3Eyt",
  "key15": "4qV1HEqLkgnxvw45sopvFfvGHbCSD4TaWv1Fyrpv1eV2cpmUxWthe5QLwkHWFn97VkdTfBt492FSNpwn2GUPfjBn",
  "key16": "4K973Ex54tmqZn1HRdAMceaoXJSPdRmZcqXqogrjanug8JRJTDVKk9WupykQWA89LdAskBCvmW7NgBdVyNh8SURB",
  "key17": "4CvLqsJ47gC1H8bu89RdKJRoHQmw6CdMELaEdJxX47kWQCpq7BLBLmKrj5qA9MFJ48M4SXHVBzBHZGfh4dHFpwsk",
  "key18": "5srorDrkqy1c8FNztbqME3MzqU6bkcGVMNSdbeVZG3RG1UW3uByQJXVYmeX1spgKf2Qse632hMVkNWZLJf6NPMyR",
  "key19": "4MqJMvrtFDx83wgkVNb9N4CHwYCceWZZr2E8N7FVgUcfZaz2kGBmHWoWG6TU5Bq3nRgUqcSuHZRkAeu8gaLdHwsd",
  "key20": "4zBmuehTKn281Sb3XFRdvPeXaoksRnxg5foS3FQ5aWwV2SioLSEw9fXjU3T78gm7NconXQa2JKX33NoJ4NqVwyoT",
  "key21": "3ZX7CLDhceZEDpzdygN6KY5w6HnviyTWkYZka6qHha5V81qM83d6JZUvKkxxcnQyhjWZCD8Fs4yWHvZP7zfQHte3",
  "key22": "4cvSHiZHxQeNPeJK4d2cmPThHVEFKP6gMWo59HKYWZqvVMPNucA8BTXAiyBVPhC15CHE3RdYGjNHmUsMKgCxcNKM",
  "key23": "5R85Qr8uzdZokjmBTWeVqjfazatxee5ptnEppE9LLCfspTWyReM4QiXhKXQMsrxxDJYhbFvJs7SjcHd77mnYEcF9",
  "key24": "26w1jPfVAJaNKTAM44uYNgcmh5CUKExHuZ3GwKFpSLCpDiz3w6dzbkpXLAY99UsYjneNWgvyuCdnYzBtSvPMkWkn",
  "key25": "4oiNk45YUcZ62AgfUYSQrd5rrxohntcFGy9b1TP8dCLV6Haa4F7zgnDcCBwha8nuNjmrHAo1aBhgimn4Tjzcqod",
  "key26": "2f4dxKZH2GWQ5iQjeJE4obHTcc3bHGd747G1KqnjMQcrsvJSgiVx5E2VbVaG8dRVJRAuE11XhM2Z1yMTmVGXJ586",
  "key27": "51Q3zdRMKPa4p3TRmNdSSG1d76k2dFaadc1g4svege5T3cJ52CWBi8FA6CAaiC84CM8fyHLH65t2aNuyubRNpsKj",
  "key28": "W2vBHZc5a4UNxJuNKgEqKnSB6j1KomEVB1iyQT7gZUEpoNLn4nPPrN3BmWXUx6ZCdgvELTwqP6aPJpCrXXEU84Z"
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
