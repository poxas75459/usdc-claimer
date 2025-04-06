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
    "57WD8MCKVU3fpx2QxuqPAqeLrsQneZMDBgFKCNcoy3NSDM8qHEUQrHZUezzuTmW7ReqioSzN6Z1CwiVLFwhdXiVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fgbTjHVWw2awt3zeTN6NYv1oYfUTUCaio3qjemLfTfpuivuGSzzJ2nwqJZYyZTb3fqyMMwqp2gPBemw56nhRFDr",
  "key1": "22aV4YYoehdUKykdzDF7aCWSarM4iLA7Vy4bKgQezuh9AxkjzBeFx8xWMRnVkVUzrcRKfUwGLoNrQNNK49XMHeCN",
  "key2": "W73tXKVtaCcmrhawvYmMqxyNSfH16duTaAayJTYWw19ctGRyomiCjNK5ccfmy23eoYFDqz2BgNEvi29gMhBMQf9",
  "key3": "5sLbGfuNodfZERzuK7tqkMyUaeEGd1LLQRLsTeKSfGmhHGQWpRLKgWmqEs4Wg4Yw6ZghPP56fgJcJD3DNXkVaUM2",
  "key4": "4R4SaZdHLLLP4Bu7cTijd2CwNPZu7by8qfGXuKfPGqFNdeDGcgzjDdnoMcN5iYj263UGi4Z697A8T9DoCH1wLv8N",
  "key5": "2hJVy4T8CKK8XjYqvNtVtSLvN7UkiEgZTL6hE3pE4eK5TSyHUy6WsPYzThrcWxey58C6NUPuNm762zhGpKpjadr1",
  "key6": "5qPB6DtN84NiBQJd3U7o8iH3zBD6Cg94PQK15dh9mMMkTormFB5pFQ6BH5Q2XUc8QdrkFcB2ygTqMtgrML8k1YQ9",
  "key7": "574UFZDWmKE7DiPyq5bHRdwCmbiEHLntSqdRXstdsaqFoA3FxYXPh51EZxgVq8JRh4Wu5c2FVuncdRFJYceaC4x9",
  "key8": "2BhBAnbdFRBAK23TXzdxbo7P8svsyDRSuK8ypscdvhFX5yQ9RteiDX6p5FfcQjJzQSDNNTGYAkZbkTtXExSXKK2a",
  "key9": "3PfxdSLW86MKDFEWq3X1seEMvekvseEeDSeu3sG1W3TFTrxtVTH91AgLrzKTvAv7qMgUCJsn9e52Wky5kK5zNouA",
  "key10": "LDQLsBg8ZXbbZcGrdTYEEk7c4zP5eNzTNQLjKxJzkf1ekeBYN3Fmi6jK5LHNPbRTEdMT116fdS2Pd6JPHuEjeep",
  "key11": "3BhTmc9qstqARByVaXxYsmZRGNVGxVDeskuPHN9tDxzo8CJ3NUoWuXPxjtA2qLkpwSQYBgo7H7RifEdsbuBZ7u6k",
  "key12": "3KU6nDdBY7SKHoM2WaeEUbLbPHURp6xBYj2xMrg1nX8nj1JaPh8xM2Nv3hfnNkag7rPbucAWdZcWuYL41xC43NBq",
  "key13": "5iAV1TZFDDDPpxGx4ydfJUAeYWfcBuEq5UtR5cuXu2C5Sdjt4STCp5c2GR58ndgSDRQ62h5qhpUKURNBH9qF2KYe",
  "key14": "5beD2ky4P5RLKkdytPdA6dEFBGrah577LBtPffLmZ7uDn9CHoogi3srDocNtpKN7TJMysFbiySHcQE4MikyF4cgM",
  "key15": "pUBS5WgLpM4PDS1WADJAE6Kytrqs6SG55jt1EWGqzmjc34zFj5EzHr1rDXJunRSWJH9h4RCzpqhdEdJnQhvGehp",
  "key16": "27DGdRDeDn9AsZ9ymkTVKTsS6ieuz9MqQjKMbXuoxcotrZMqY5PDshW8iwR1MLm71JdTkJiMuPw4ngpG6twyozok",
  "key17": "4cDkb7wwXJ4h2aAktoXQwUGmD632oi2yC7qN6CXmcRubdQp1LsCyvmi3FoYFweeqjvdtHtJxVQBdM64aQfD9kKXW",
  "key18": "BgoYABKuSnmckETAtANUKBcEeUrhqNT8qX2aMzRagWWKEHhnsRULyvKeRoZxvqZnuSKn3Vyc7RqgXyaFhA4gRbu",
  "key19": "353iGKuK31awuGWzu8iNLkD8tQvTPyQrVbYSie3xhrEgts7y394FdmVEkAm6PEvgyrJG9aYB9R3cGeiaARkb3ngD",
  "key20": "3nhKcFU62tACd7wDuXHrBQoR792ZDj8rjSB4AADqUwdELoXZayqJ5ozPXT3B68symCcjm6JEY9nykdE9qJpieo5p",
  "key21": "WWn4o8az5DVzb5HHgG8yPDiCfZbjDegjkJZjEDLbxH2tJEbmdbVFNDeso2f1r3pgDCGG8q3FzNHKQef21wTgexv",
  "key22": "3yDvZLJuEVaHVGHdfMTPG7ENoZiqfmL3V6rQCo3oiwuy9upqzcEW8kCa8n9nTVEfaaA6XjGCzxo9zxPamsEhcX6E",
  "key23": "4VSUoPXA85FAEFxmDqMTZC6L5Vn65oCFkaiQdfRqo5HZagT51VGfwYDeCtbvMEKaM64cFHkwAJcCDBFVzFyB7MHu",
  "key24": "55LAJpWX26D13ds5Squs7RZezEjkVVdC37VzHxxXktUMvDSBLf2WPf2fkTNwiWPUp1u3DoASvQM6h5azfpRHuc3P",
  "key25": "49o2yQBUZyGyGfWgtZoqAdoEh4hHGTWFdyhpuAn4qaL9JGTC688s88RCbnrvYqAkBRYRHeoMWdFiR7oBUA7LAFco",
  "key26": "5Ru3BQ1LXbTXSahPybz3NW9z5Mq13orr5we4wL6sSFuVrLYDsEvLwGQqsgYTq6CzyqxRgCAV55DDm6TVUaZQaTaT",
  "key27": "5DRTkpu4MDbCT1z2UcmzQvZzRzdp4b5pT8Ue6G5kHUwAfy5F6TaKCzoFX6xY9ACKWYMXVau8Ntpp78PGGhLWZ7nN",
  "key28": "461wrB3iiGZV8QY52DTFXzzifU8Y41dA8mME9V6QLTqNcTAEK8C8mgcqKBevd9yvo2rJ1Jem8z6EeJEoZNbpJH9d",
  "key29": "ao7UtQA7A7miJZAhodoKPPyFYaXGhZ3bnAW3Eg94EPi2vA9ctXaVBw9sfJuBEHH6wjLNkZG5TgU1X3GpEZM9J68",
  "key30": "wxeSyneWYXuNdC7vRw34MSa9zygDDSge3ZWbb3vj1nCJ6vDUa2X1EVYkUXHJVDK4AkuxADiEs2ixZcuutBe7eKC"
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
