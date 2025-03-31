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
    "2uQQhaiwSwP8zFukSGJVQ41jy577MFe47brfU4QhrggArgDfKsjU4C761YGeZJgXGS3iyA5hDWVnrzLugqQfBxvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qxt4gFef3DvsJRECuTQau69ZwyPgTfwXXmazgXBZWgJDrCi5WnBBHFBcquK5bdYKyKZFH74AkBwQqMUP2G4c8DU",
  "key1": "9NpBAt61D77KVb4W3oAtoqSBMVoG8yt1YrvuD2PGxTKh7uQHAh5uT5et3LazQWSeeiuuXvDFAs8Bhr6gh6PNtjz",
  "key2": "29ouefvbuS7P7jxBspKPGMrAMWSY5XNhBwby83VqSriKvSxfvQCZMRpUKmbigQN3BVVZeJVDPm7Xheu57d4fZhJj",
  "key3": "4do3mGHVz9nwvcswWqojsN5ich934NroYW8HRV6mLEZ214fka3y3GEjDjKhH2LhcZeyY9EbaT375wsNzyGoXLAhp",
  "key4": "3xz6q1Kwqrfw5rvDmy7wLUr8233Kt6vr3TRhahomfqGcZF3hxGijs2bdEY65csGxRC2dgePudSeWqLwq4J71W8rs",
  "key5": "4RbcV3iRJ4waVUkEeWKSAUgVzYLuRZqw1b1XCjDsWDe6yYXsZTA6XKyNKgxc7EnYx27Tj89QSy2XRcS4doUT7RDV",
  "key6": "XFsitcscaNzDDokAQdvcRW9aWhHRNj95x7TDFizExd25ktgYzf7oyw66Ytkn9dt47ZLsyoq24Ut2s1fCfnHf6pH",
  "key7": "5EbEPgqtP2votjPqJimGnhLJrLnsDDvjsjQHHX8Zt8riuoMSMLjdj5ufSkNnEB88TnhgtZYz4jqnsJycnCCkNMnk",
  "key8": "r89fA3NhwtTSsDAfwqiF4FJptDuXaVAWNXVhsyk7Vib1sHhQDPJnkpnnFkDBJQUar3zrtk4F8Eu8q43Qy2Fw1jp",
  "key9": "46aeZWvQr85gR4JEsuuErWzSR4LBtRQRPEwBfFatebiXDJVU7sYQbzuo2n7PVEFZhGZmN1Mq4UZiqwF2gDu6pqPd",
  "key10": "2FBHXZ3D2T5GY4M9LZoNuddhAnEUo4nZPVnYXRbrSz9y34xFAv5Hoed4bxh8PF6J2KK49ssKCfZRSv7nRLnw5tS5",
  "key11": "3LhGx5ee3ZHkgE25WGgcmpksMuZMWWV1gF7Tx3HMDPXPg71Mjd6rihKZ4Kq9cYUqDUTrMmE1uEqbfVQprWdAY96E",
  "key12": "5CB37WVxBsNWkiF8MnrRyLEFKtRdkFfFVfCgsVJEgXGzcA2qEmH7Ky6huBpJYJyU1eevknmAv9QZmrngbtU4vk5y",
  "key13": "5Z8pGDc41V77GaUTG1tNcPQWkushs86f8fS11hYqdWvsxz1VWgvXuzjT6QKevgqSZ5LndkSzdEtX5GTJNXLKg9ws",
  "key14": "5xRY6PmB7cYVqgWy2ss2Hsq6rcRjusm8e8JcDr9NnNvZcYpb7qPudNVqkVU5rJCchNATh3SVmLgBo2qxPpyATREJ",
  "key15": "55RUTZF8ipytEVqopAjEx64wzRXcbfZA7HdUSkceFSg3mzFcvRtQhyj378uUNc1iGipU7stmcbEF7Ld7rKeK32F",
  "key16": "4ED8Fd5KCCLEicF5YqKP276o5f1JvBCSjsB3D6dJWgZvg1RMZZreSgeTcgRT2yMBNpXik4Sb26kJeyCaGXLbuSpu",
  "key17": "UBQB8fJTpthP1NLxCDVS9Tq4W7ZrmTYwDK1Uey4XxYFEzZaqnxKx5dqcqi7qfkiTXUCsg6i7x1f2wUgKHcYhLtw",
  "key18": "3nHBiUootrPEFNxZRwSbCt11XZAsj53vVoib4iM6czxP5hMT9FJeXNwpgex9hE7gkosjH6momWEtvKJxyma9ZH7F",
  "key19": "2uvTGeub28jWenNo3hZ7xvVrmTaKPty1KJo3DQ2dUCD6pz8PHDjDs6L98C9CTGxrgSDqRUNH6TxqzU91mgqCtvdo",
  "key20": "NBrEp7WRN9Z8kgkvw3JbPFiGNwpDQ2hBLVupK46CkRaWaVwzwV1Bv8ukzhWr1fSng1nspU25s1d4VV8GJ417Znc",
  "key21": "3yik4RmyCkFXYao5v2aUqkyhwemeZiLCVFbvsJHUqDBPco6VJnJ1sBmAe7wW49jaXGwMDt9FqZE7Nz1vcdV2YMs5",
  "key22": "4im8PhoRWvKpTupDTqmoW4tSxuYWLMdvurhRn5ePMc3Ai4Zip9QDJbLfv35A7uxzuRoZcHyGaeLYPwcWfzh71yDm",
  "key23": "4E8ovBdY6SJ2g4TAUCzdosjVHiDKp9jAaVJsfofPimk8pHoKh7cBmqodxpQZVp5qP5XmPfRm1Xhd8R3gcQS2KCsB",
  "key24": "zZsJVvSxC6mZQgUdPLCqDAAiSvDaUo2VC1ZfLJsd8ajVEDj3sjQgdmRXN4fD2kVAs4A6MaHQDhs2YQ4uEeNctWr",
  "key25": "5hj6bjGqfX1M8AQ3yqMgbnufPQongVMfDZ38igAzhS6332ooJDKi3PD8gweY3TS5zSSMBCEnaH4TVNPT3UD8SJtV",
  "key26": "2A7CmhugMXzTuNk9ryfVu3Baa6wGitoYaM4N1VavmL2pqazkVdZvNxx3BkZ9cUYyJEtbKRGyJEgQAwzDg8CcZZaj",
  "key27": "2gxzJJSEinvheFNtHH7LH6AcHpJhH9yEvDrRAvAQ1q2ixEpNVpF5MFiWQE4tMTkjTS7pr6vCGc67zeLcHHTLpSEx"
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
