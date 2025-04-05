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
    "2uRgdbqR9h4pHWokKfHjtxVSqW1gEe17mCLW7uDomUnSrSXPw6Qe1SaiZhhdBXyP7ck9wYFSGDAVBpmDHskgu3Ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64hxirGDVsAJyDdtewcMVsrjqW88rmjavtSyCfgTT5VepLiPptbK5cuRJmgpf3d3NWMTePRGEVUDNAr5jYitVhLt",
  "key1": "ASCLWsJmavzqce7msvEfwN6am6DVkj5HtC3JZNmrxx9NnnFEpfiUtrMMFYtk95PCHMtiAtd8vpCPNuTFBELJbbe",
  "key2": "4H4hFqXN45aHYwYKjGKuU6xNaVBcHaubTmQsw2cnmi3tuMKLgDJBJxeDCA7dihavSVVpxPZsQ5H4TwJj2mrftYp5",
  "key3": "43cB3NHN67thpKpp4UQrWyBPJZwtXmE9Q4YGKsSMSfsH7jGHmLGRtmSfnGirziP8iBYniPRdfmKhWsbJ9MGNue96",
  "key4": "BFihYYM4Fu66PohTNwKZpkBh3yTcZoc2mifr1PoKYy6fEcM6e7tQkxbY7ADnB3cgBe7vSP8yUQEdRMFK9pE3Mur",
  "key5": "5yYKd4jmUyoFV8GGLuAwbVygMFtXzSkiGGB7Uc2rdP6Fzog6pRiw4poFgkFUgBme3cbMSWwKJzY9n9pABa6Y4kke",
  "key6": "5Jjx9KQiMxhUV352DwuSauURTTYjkgN2uPR63ZvA49agMEaknQbusv77fskRMfqV4gpGHXxVNCAFRfT146MDLTpH",
  "key7": "vkoo5btCwyoEKM6Q9ztXFCzuwaXnhumnSYqLtWHJruz32Q4VYJHJxUa14B7Vy8PYPCYRpheuA61h1r5W68uMrfa",
  "key8": "5yWPBxju9wcBkEdksMoxjWAMmY1B3KpkZk6dPyJtnikR29QDQZgDxuDArdiwrXtf2aFQNEYjW5yUk6KNbpJzCyhd",
  "key9": "5kMEhcqhUtnB8nLz7qJEZji6eqWndAcDGwzP5crwiP6zvNeCPUAFAjyYvtspNXuSByAf98WM9WrAVdZWDwPnFYi4",
  "key10": "JwnFXtBLfuoco3STMXnBGJucps7hQ6shm1pVW6Y3UJUYwYw59i2De8ATSKExJYLxEZS5e6F6gjdBer3F3A9PRGX",
  "key11": "5rKRcx8k82bgmEmAyfZVWC3MdJnQQBquu2j8UQ5Do9FfJsaVMQ1xT9ApCfFxqGj2EawCQweqpeGXqwz8x4A4meq3",
  "key12": "3p4cUyTvPxtpgughjG9QsN5JmHEjXJWJN79NPFNrs1LMbJLWHC9hVDev2iHrgg4F6ZWyJ4mSFu1ng16oZhfP7ps9",
  "key13": "563hm3rHcjqtUFFeTyJhNKiRsqXjPnj9wHBYeiZzLCTHTaGv7dYjUxBcw8vKyW3ZBpezfpMx2WE5Zm19F8ee8GfC",
  "key14": "EGCv9C58Lain2iRpNT24Yw8etysPNux3ifPjjpd335SgUGpo1AsQxug4f4r88N4aSrgfu7xQ1pBwBPewpR25fZE",
  "key15": "5Di9CQ3y5c3Y9xywgkvkf9oXZZ4ru1ks5D4K8bf5fMTtT1D5Xb1mowkW4Z3GDz4jmtm7vrRyoaxYYiK5vX1UGfsG",
  "key16": "3JbZsNaTx4q2nU7KAkA8qMZGPzVrXX5grN6yjo6rA4Qg5N4fmEysGKvmqwNJfhRRzQBDcVFAJ5QJGbFL83Y2QxVD",
  "key17": "31grsxuL1v61HTeHpu8QP8YAytDDFVrttJ721HPr7F4P62aB293V32r991ppogDoS1rBrdS2YgvNxDhpNYyWQdFX",
  "key18": "fLJkDsEB3hLnrUnd63eANHTa6XRwvjpyy1n7q3gq24ZbWrXz1vkFmKwaqdLAtatQxQegLvsntuGXDWmPy6UPUve",
  "key19": "kgoXy6bkGcybU7aHEEXZNhkLcP8nyJ5DpQ4tF1JH4ozQBDFSQz1QzP35KHL1zwndHoQLK2zXRBFQpqLFbguH8fN",
  "key20": "5QMjjgeGNooceUbC7VzwkAovj6JGs7yd2HfZ1n9aPSuhnQaKULErQ1pAERhfCtzSt4psSGK5U6GGtfizoH92Ng5T",
  "key21": "58K3fwmtLQakDKCRyTZgvypreNRixpTn99yMwfyQw89cmhDsy4j6GDCSP5J1ccE4Znd6x6MwbNLrmEKtVmu8dgr1",
  "key22": "5D9Gynybdfb5ifHVvubqU9kpxzv2eW9kdJG8EmSiFiovtQAGqq3PGzJokM43WK9A1RPouB9Ms6wudCGu7NymXLuy",
  "key23": "3W8X4hNN6oczGMvyNuv6SVDBEPA9uUG3qnUBE9b5n7djZkvx7JUkANSWef18KLzLsXXU7jNNRjgpLjnnbnyLz6N4",
  "key24": "2GUbJndJAnRpoWr1kstuJqQC4aqTbGHuAf7pNszbx1SZGKDryJxPbnCYxbNRZaz3Pw3ssRGQHQ6aFGh4pNMkWUDq",
  "key25": "ivjvPXMjWuX1XNYyUpBQS3QifCh5meGEuhEjYvK5m9ePH2rRoFq9gAffN5ceHcvhJsQayAwJiKGtEBRbmgi2Mfd",
  "key26": "5mRqNmmsTzX5ZCjoJ5Xj22kehvd8MMoJYfp6i3cFy5ZHruqWG1nzAtmKrcwhc48u4RAjtmooVg5Pb7QHCUmD8jms"
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
