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
    "66rmedC2rozgHm5bYP6YvNWAgawQsjdhuzRK7WurN9qaLDAuKpvunUjHeGMCqJuyvDwXMZuQDXwyAx4ZmKFF6F7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t8Ato78U66ohoSA3peW3ZsXjdfYRmaRZbm7GbyjzDYG2cfZEDYccedhCB3jWbwrkkqBqUZpQP3FJEJQgDYrytCG",
  "key1": "55QZGVhuLU8qpPtvvKHczhoY21DbCFSLuC3FRgrc6NCA1XsuJzFvKRAqJDnuaeELeqAJxoe1YEVMTpdMJhHKRA6g",
  "key2": "4m6oZvXGDRQGWaK6L4byiw5d5Z2kWnov9CDV15DtgZAwaKvfJbqxXaNxphkMEcNtbbMahAZd5x9ycWPV4AtnyDz7",
  "key3": "1qEtoF3BQhPTDjULZb56HAq9cnpmGVEtHnyemKjy2MhCSotmjbZCH82YJpnTz4PVCjA3DbeCz4AZBYeKhkCWozV",
  "key4": "5VmDYmEQ6E1kcadRuyPP53NLG9LvTxgByKmNsNCz2Kkd8tf6VoJyTXgEg9gyr578a9dYS1Smez6S1A2cBFTqT6sC",
  "key5": "28dBhjpKg5hWahU7WfzqTqUwVZ7EfNa5yPYoTPDjRkHtRWSxXrBSfb5hzn2j1QoCaj1Rdie72kcPF6eqcbUrbHmJ",
  "key6": "3psXqw9TBXAZzRqfEzZbAYPXdn1LgojPUcY21GCthysxWhZZrSd8eukPNxHnQDUstgdGeZrmbmfkNGtLC3z6EjpR",
  "key7": "2UMoRCfg62Bm4GbPbT7FZgpgqReoHNbXc9Ab1mkJBShzJTz7rrs3Yv3fV18yQ7dfsRBM94n2UmzHmGrDLdgs9pec",
  "key8": "5TTrq7FddE2ENaEXWxrXNbhMJ2bdRLkFCePuJUVk9qBQAwAYLKEBQya3L9ci5SqsjQMXoh1oh7RtKX7DueUb2NDr",
  "key9": "XyoBpVdunuuix1WtvECzn8E5YfGCVjoXk3MUEWWjqNMs9fu1sreGHHWf42fw5k7gtDicPDKUemRLyqirLzKqsA5",
  "key10": "FFoyV6LHxNxYWuTomDUCU2SfKJ2agu4zFE9J7BEPTWXiSzNAsvApBp6J4krMtuFJgZZRdRnkgbYF25BNRjd7H4p",
  "key11": "5jurM4iY5i8T7yXuk7b8A42yQbeKNspqgGzzQ2cVaeFHcP1MDqBEco9C2z4SZkMFzp5hTbKHG8MBKBJdSNn8MCUA",
  "key12": "4z5BTMnNH9dvVfbiayK8bJuZ5owmgcP1haqo3MmKy9GmzmkTWjc3eosJUKcMY3WfXzyNE81CD1tkVuWitCCn1Gdc",
  "key13": "5Jfj7z4PbGpSmW3yv5xVAVZ5TXADH5DMT4TQuQciHQCsZiENEjPQu56s9rNLHRpRuaVqM89tYyQCLhwt71UkVT2p",
  "key14": "5qgnNSHrtD52y3sKWhQ2t6JtiENyYh9Gqzh1KQSGYGsqX2DVEqcmgSS6wjiDAmYN1n1G3gUNd8iau87KhrmXb6t7",
  "key15": "2Tv3ibm9mC8EsiLWxneN13GnHKjvoMdnS8CBRK9buiZ7SbhCShcoDCUdEj6FtxdsySM8jjTRnJiGm1yYiup2JJXm",
  "key16": "4urWNbJPjX642YeSX7hAjkc4CNoW6oze5SbccYHksiJuJYYzyaPkXi22FYBHdoSWWQWajayy666g498BJHzGHPfR",
  "key17": "5L99U6uNM7AiHNDXB6qVozWcEmZjoFC1JqMBkvgJD2C6s5KWXtobLrunbCJcZFDREjEcJVxd57XBdqqeATVcVV8n",
  "key18": "44wCc6znZxqMPpdFcmkcgutqj5433UvTBRpqugHHs1fNsXP9Dfsd8z461azUZ8GKtMoSMGb5jYJJL9iTYTSxwCuq",
  "key19": "624vYPj7PMbDVcmekZwU2yZdLRN3kfUWrQ9StCqZwEFKSojj4Xv1T7eBk9zEcNH7cgqrsLXT3PXRU36aWs5fJpcG",
  "key20": "2LgpKcLsipTciAqYfR1oCGNBqZ54uA8g9o5iAmTo8EJrWLXbBCPao6SooDbEpaL7WCNfzcNXmr27iHs6KYpBhxG5",
  "key21": "42M5zmcoCowMnW6prmkVN4UhFnEPs2XSoej3gFux5tVak92kdUJ7zU9GgCaU7JWHfrgtoWWAiQK8x8KJfBfshrwV",
  "key22": "4JDuNxBJthsj2gWtxUWVgCWjwCSdBD17nDzfsoCDMMMZqaNBoN7aqbNmNjTkqA5ZNbRkwJ6CPXkQCM3S9HJ7yhNT",
  "key23": "WpxEN1QUR5pMoDphnAmsaQJJA2xHmTcK5RaiLCTqtoFgett3tgmrwAd7fRDUmLuKPdh6VY1sdjbiNi2Wc3ATJJA",
  "key24": "5ofigj1YuuRaXtaMxoLdAh9a1KzsZsNKnh7ydPgficEjamtatDDEn3sJ4hrRYwAvRo1bYfW4fADjQqggupYGDeF2"
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
