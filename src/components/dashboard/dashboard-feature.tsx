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
    "42jsx2PxdVCAi1UNioPvHkPXhsV4zGdWuicqXEtLfrbbn1zWamWL2TvP44TqpMNJBcHnSzSSe2fBGmY13vc9mA9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZgGJqiwqdfcjKXmuRunfe62r1wPsuNMsafCezn5Dc9NmE3HXM1uMskoBkV5J4g2XDhHPM4pEW9utdPUMd8c2JN",
  "key1": "4V9LBbArcya2EFic7EmSSrBL3KJ58kKDuwdLAxAFH4NUZYjvEHRrR8jYSESBhYXr4PDhL9TuYyUhmUCos3DhHhvB",
  "key2": "kZSydCQQj6TbyuGQAxeFJM4eknBw4hyyjdZoEeCR53PgAzzBZRLKnnB6SobyfmRLW2nKYEXUMnc4vk3ec4VM3Pv",
  "key3": "2BFKZRKmEGVGcyVLu9r3tPLk5xif5sJD3uasmJf62BGJwExaoQobH1XekEjEGfhoT3PUH5CmirgHwV8hS7gWsopN",
  "key4": "3Z8g5FFTJHBsjeES6iCzZbRGh6S2PSNt67GJZHZg4taA9KNebE6eiJfTd6vf2hr7mSStTdaLMznEM6UpMgM3h4kR",
  "key5": "2rQF4msc732ADkAnG8J579QXcgKDCT4JuXjhcDZgd782vNdAcNpSe3uhCPDSbjjgY71k87erAgFi5mLZJ9LH7Cq",
  "key6": "3JayUvYGfBgngQFUuX746r5dEaSrvNW5gdUL5ZsDtvo143R3UP9gzo3NNWyvsx9BsaED1YEmyVacckAxrijvfQuV",
  "key7": "g78gnVExoFh9X45Z492PAnVaTPbtsjTSDDDBT8q3gxtVbVQjCfVeXY5bwbDiftM78h1kAJufHnsjCjdnY77ybTj",
  "key8": "3KgqLQC6FcAWRo6vLZyNG1iYwXx64cu9zduAJ5aHpm1s5yAAiTnEyqPPJThRcEpjB1ye91LABMNEA1Z1vyMm3atz",
  "key9": "2sDUzQtYEpnmeZTkHuGPDskLN1DQvQqk3FdUSX5X3QHW487rZicdNfCcoaneRmNiRESq1WoVRUQJEMsnAzFzAP5f",
  "key10": "cycFFZLxneiE7gTsnzAQUzR6PDd63vK9NjtfSdJVjS8BSJExY29vGThCqspspY95GCxAwm3CEYM7JHBdwLKQt5S",
  "key11": "3TXpcnNapjFeWp66e6wFKZowj4iqMnzkoEyBAynr1Sk4uRvLytrcebtKNqouTvEHy1sGMDgTYbC5Mff9Xphok5Ud",
  "key12": "4nAvGauHYqSof8P5ByVcw5N3JnVVz3Y4cFeDjU3rJQYxwi8p1DLkp1DHZix58MveV6JjuibW9Gp6FURYJAKwAFw1",
  "key13": "3CnWxafZytcppvJ3EbciR1oYE8a6TscL4tk7Rn5xMYnmNWZEHJxpGz6e696NQJgQcLKNWLHM2bib2LHPCP4EzZnb",
  "key14": "43wuwSaW34ebf9N4G4wywiEE1EJmfqz3p5juDSK1oKBDMLx4DE1vjMjjoYbi2Q5AdwymnGvNA4rDBDL5nQKvbNvj",
  "key15": "2uECmNFJCp9KZBw5iTeBGGDNizz9sdQ1dBePPUynqUKe8ChYVHiUucWHCe1V5GNMShfo37MAxwRpe2DRAKENcQ6t",
  "key16": "4trbLnhriVQhsKCa1DKbhvwd5qvbVxg9kdggBiR1Qh4PeswSJLdP3ku6VpoG1S8GVqZeLjKwHhhtTF2Uhry496rW",
  "key17": "3UUkYft6f2krHG2vJoP91qqZnmMdhhx1JECc8JSQ2huodRBndpgvBSpKf1eMNJwkAu2xAsHFhQkqFYHgG5cLmvBX",
  "key18": "2Zq7m8jCW42ja9J47EANtjqpDzkxgU8aUTSey3N5p56C9kKEgjfbKhCTBEywBtu4JwjGuq9SQbaTQepNzWgtm9pA",
  "key19": "3HE5WRe89wRCq4EB5VMay2n1rUE7HmszChS3o6Gs1ZNdNM8YodTBSZZ2vFf1ZqWWjVBdqqePdBdSAtrqgVBJgz6H",
  "key20": "25a1Tt8BYJmESkwTr6jv52Xtd3yMoWy6U59vv6EYYRJWkacSYpfaGwoeUqxi31VmD25BSqJAK5WjSoYQ5eL6y8vr",
  "key21": "3h8SjGSZdktmZKAKNeGsh8DFV5mbduuFcds31Zfc8nH8UdX8j95aGGmXWgfuSZaAmf2Ezg9HiNxRmUaXVUXWx9Rs",
  "key22": "3x2dx7DB1V4FmyX49HjAiKGhPhi1KCQScRgFvkCDi7y8P6evUxkgkDLrZcfhAATaDVixZRNfLScqXNDyM6LqrFQk",
  "key23": "ABUvFvGAJqKbkBVS4fxvitcZUYV8NcbMezc59TeQBT799yGuWpMvBRw51AUpWMiE5mkNvQCLQ7voCLajcmTHtep",
  "key24": "oFyRsdmnBYUtSSihGWc9hK7CXa8NdCMHxKjZJZGHwPpu4fXz81JKxXR4Y9KefkYAF8sqrUshHDgy8L3iuyTXxfr"
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
