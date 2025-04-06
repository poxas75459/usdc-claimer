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
    "2Q52KFyKmYFa9uULx99Np9WGUt2x5vhgGBu1H4gztHXUHKyRRA2Ymw9qZ2Un4WcX2S16PdE9HRAe4BpDj7TB27op"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X9GAxpY8DYS3FqwpgSQJefQCoAZUGGUFiYa8gADSKdGmawciSGBeKbRJU1PXELkChGhzUuD5HXnawhUiNcFywrA",
  "key1": "3LUwfeoNVxnTNTCgjoEAmGVBjrJf56faeikkrtCGTdofKMXgZhhmArPPrFrqcqj4ybpbnDqkze6mogFHJUE1fiRE",
  "key2": "2t6w8N6xBF1eUuEFcsbPG2UXWYWudkMWyAYyB2qGLqy3LT5SD8rWpwdAskVDrMQN3r4PecBscgMbgkXAFr7kYyVL",
  "key3": "5NXrMPy3sPYkCQGGyQYMF2AxHXDyEfwNHHedh2pUMBdaUEKGvisDJozq1xqkquYHj4fXoSA6DjvERcKnQwZxhgFP",
  "key4": "26AjE7keEeCn6KzQ67MNyXiiRbfoSGMir72QRiuWJH4Y7CyQWGMzGbpAyb9An6owW4XG7PC3vNv8nJE6Ld9rh13r",
  "key5": "tPcBvSNFaDGtT9efgC1uqrGc4r987x3L88DUoXH68c4zyzFgcwyZiMwMzAptadUWPggrk2Pw3J7q4E6RcjL2eCQ",
  "key6": "255CGDERqZD7s2q7Ls3fZJm92oLSy3SPpnJUHqfpPaES51pPaBJfbG8A52b95EHRud961yFPQDUcrzicKRoM2P6e",
  "key7": "5gdmU5gEQWukAKBHft9PyvGrbvEpK7KLxxCxLWZxAKG5vTusiquPkZX7JYq7owSoxrm2CTqxtUWwLuV7Ud4FHr6F",
  "key8": "27VRS8z6TpHNPpNmtnS6brxjufBxYAiM1ATqnqj4AnWgU3y6HT8DyFKvxwMNoUzPSd49bMaH92ieDG7FYAA915wN",
  "key9": "3NxZwQjX1dwFCr3inoSqZrUu7WSQ9AxnVEfGEimHLHtH3piz78BnkpWkjD9cemTLvmV6pPhhGMuwBDhkAjr4qgxt",
  "key10": "42rfNqMe5oHhNDFFZnwnEhrBumzCHij4wYxm7LESZSH89nmeKDFDYBVotKRE7TvGMcjkxu1GehG92LvRGmJU84MU",
  "key11": "53HBoCqbXd3ezzhCkjpqYxEPcHCD6YAmLKoC6Ge3LgeaS53sCiYw116WDG1nrjmgApTzAAeVegAYToGhzttBipt2",
  "key12": "2M4fbqykrccQL3ToZqMsGdeQ4694KtCWHBheHpN9UimMhj25VEGFfiKAcs6dJwJTC4oqviSTh6BKgeLPM8NvyJ4k",
  "key13": "4PAwmGPDhSmiYrm9PH3CNtiX47ge5Du6GE5KvdLfcdCsS96FrjZn79GCnE2Tm8eZsoxXf7usdNv445FjXMFGJPW4",
  "key14": "4CDEiy3QxiZKAT1qGnV4HHWj7abZ8K6gmt4Qxd6KLhJhVU1uXoSKCHKcK49pZvA2EX6wjPurpUEbRfZBkTHJd8Bt",
  "key15": "3CnYHYNdf2pBx5jJgXMaAFtipinFoEpd6G8aYzBczRKX9XDpYy8S5w3HVsZRQ6ESYkg9meyFWTCtjeu7sRNMT8H9",
  "key16": "bULrMzyq5uwGNwifh2454SwRetQM3NKDxx7sQUy9oQwpdxGcPjkKSwmPMt55xQxqZsSZK2tN6iitoAwim892RfH",
  "key17": "52cAGji9M6aBxgowAz5R8FDE2RkbKjjZZoMoYEBNBW1t4Ssyo3xNKB7vjgnwdvp4sBHxzRdEBhmVQaPC5b9VZMVh",
  "key18": "4u3d8nEvMSQvfqoTEzRrXXp7zBTov4e43MSseyjaKU4QzYzCPbLD4Wov3EFLQ6NqmQbrUpYpz5y9UxJTWAEkUzJ3",
  "key19": "o3Pi3yFk71qFqRT7qdWxrDe1GXPJGuZvz8BnRyjV4ei9Yr8hcfYYmEzxyd87EhhaZc7Xy8uSfc8jfshQWZiSUWc",
  "key20": "4L6oyVLSaxQryiYQbgRJEokypTqKbXDr1yjPo9YtrHYc5BqgCUBmhpKksTEFGZ41qKBaBpStvg2pgJZwZ1Sjz7fn",
  "key21": "3J6XNw3bvSKbJf9hUVik8HPTnkVVqVgFF7yWUcizRbEfWVcwuqWdA2ihCd7KCfc5Yit8hvsRoA8c91A1XCqhTmuM",
  "key22": "4TrzgSvsrBTsoZg8ZEdQLevNCW9PU3nEWMFGyYzu1HVPVQnozLKmFZs1m4s6THj3uwcDbd5Y3DrzX1gbHFUe5BYX",
  "key23": "4iEFoWLRenpqPKATZQZCPzpmM4LWNAMeFh4bW4x9Tnk5dtnw2gLPBF3nAVJEag1wsCQDpDuxVMnnYC6zDgqKgTed",
  "key24": "48utqC4ftio4sHKznCJN8x1iuX18pTN4wRxoC2FSDLWeGLQ7kCheLfrhatZb4cebF1dNCVQVT4NdUBFoywTjeVXJ",
  "key25": "3HHEQ1pzFUcuxMGS2P6LcR3MEiGgPxVcogChWC8jFvZ2uCv8eawwBy8uEg4BccDSVDMHmFFSk9ynUsGzNYPTwsrH",
  "key26": "5H2jLV4RzUCPEmP1nMMpS3sm4X2SrDRM2EAytqhztq5nezEWuyi5i1iZ8JeAPscoRP7rKqDtyuAdFmFv1DM9AyV3",
  "key27": "TLEZ9KCNeorW9ck2ycDHQEXbg8FWmXvCJpCvw4bywSv1TEGELXhrw1Mf9eSJ25o816G1YYGvAqwtCvycBktgD57"
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
