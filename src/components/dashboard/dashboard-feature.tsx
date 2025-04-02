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
    "83ooHm5ycNefdvvkHk5nFgWmAd61B7pQFeMtEkSmJnjm4G5F9bvsogFD4DiDruUKihP7rEd3H25vtfh8uRqHXHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x6R56VtmX712J7y2XLuDbsnRgeBxcdM2WkQqZAT17zbpzQndGU5KUgNDc3KGcUeWreHDzt8ta7qLGmwbLg1yMn3",
  "key1": "4WCpvoksyfcgS1eqSJ8hgvcXvjKXgEfHD9h2e2dXV3JL4YwkVpN8PX8W4QPcFiM4ya7okugBNBqMg4bTz2jYhQxT",
  "key2": "47fwvNw38wmG8YkS4cPVnGYkkjTedU8mbsWecofobzGtjxBkBFYij1Hf3azDRrwM3prdW7Tua1HsSDCmrm5kxFVA",
  "key3": "5KVJ6KujHg2eoHFLuBLrx1NPDnrzEjFKXc8GfaE1gu7icpgZmzUzcSst1BPGr56G2v12bcVjt4gPcw7gJz3tWSn6",
  "key4": "5n1HNjyE666ZnUffTW75ZJK8TScErkoT46rf4GtuwZabPLqwaamVrUwgtsvVXbyZpS55gRkAfunUUdc1dCuxgGCL",
  "key5": "4DaYotPmaLQeD9n629JUSYsNKnBfp7hc7cCzNBcK9EK7Lgvxq1d1GcZcWdaX5yHPJMMmivRG96rugaCTJnFZMyBY",
  "key6": "3u7La3iLPrSPYD4KDnibibPCuL5PYMJCJx2z37uUpka57oyPjgZ5M2XDbu8T9i6UhHjXpfRb3PBw2rtN5GR2gq6h",
  "key7": "4mi5ieqs5ezuFwxMoSB7huLjYsJBZ1n9NjTkzkbZbXQD6LTXKmUnLpka3Wv36bvf6c6zgGcYD4Etpy547SBySYMo",
  "key8": "29Kxir3fQpGqWG697KC3EVra2RvWvnnF5KmupTVEGYk84hLnsdVv8C27qevfg83M1EcYauCUPTXtx32JAN1K7ef5",
  "key9": "4SVAPRDwC834y2szZsaP7WbgLSUnrWSmukC2WmvQ2Qqgz19J95wiakHyQXM2JUCJ7n412YJUgY8QH5uu4fwnd7AD",
  "key10": "hpKKkraktSRwhJnrgU8z8sM9RrieKaqjkaZiaH6uwbYPJebYJYVjjNwhoWk7wiCBpR5uWAqSuQkrJpo8SHykKPi",
  "key11": "i5GnZU5ZJWJncUG4hWTotLGCr2VWTU3ecFvSsP6EocGq3v4vJoLZuwQqP3TiRp2LorsvWb4bttrJtraSCmsBEX9",
  "key12": "5dj8yB6qPUEx7CsFJq54VeEGHHsuXWgZ4zwDqqgtjdC2WiQpJMS5VYwHDjwR1zUga1nnyxeVeTQZ5FKMZYzu46UE",
  "key13": "tA9DsFcPW4VhTkHdVMH68L2hX9Qu3Q9rcgH48Fkddz9WdmFbVL6Xp674RKLvaip1VgnvPosFepvn2yWcyvPVyQ1",
  "key14": "5YopLXWSRGkEkbp7iJm18TT8FktnG5vPZbgoNCUkdLjAXo1JYyxjpJe9fQ4kXcid3nxjv77hKyKjudReTTDfU7CV",
  "key15": "5hCpGuaG48eW6sG472JUSxAoA79ydTTmY38thQPj62tqJA9XCr6gSntDTgFFSYGSUzm4fJVAAeSrru1GiGxuwf25",
  "key16": "4fAbJHZyk53o2ujkVLerXEUvGhmqQbCJPvYqksyKEXf5BwJtZ8Wd6wdhhdxHya2ccskhxZ64eF7EwAYBfYq7Eqvd",
  "key17": "3BLU6tiCDXVQWQsh95xfweAoeVTT87qk26TWMeyGrzdiYZ5nn9SfayA1dkpT2wrEu2E8UgiRrXkCjqQct39ozDiF",
  "key18": "5Ee7AFxiDzsdAjEjrJUHk4ftbY85ZBA5rwzonWGf5i2nkDA3gkuJSFXA8EzRNnEFwWLNZwjrj7GnDdFXpyFKzZoQ",
  "key19": "5SG5U3ogp5kbjKyRHKSQ5TbV87LSUE63ba7pepAJYhgVRMKN3MTfCahgxJRsQtyEXRjSTNRcqgNpSR2B9KHHk9fL",
  "key20": "3N9s68CyPJkJwmtNkpyGkYSK8XUwrdhL5s5iJ2whTtE6yAPwGzjrFXY1C7QusiQUCj9E3nS5V8FuGFJqJpS5g6da",
  "key21": "5DU4rdtLZv7EvrMQETinR6RwEkaPca42x6yhe6SPjMe4zpK6vCoHxkTSegAL9hFuC43C1AhnCHi7djJE8hFcqiyQ",
  "key22": "3uzQJT9fCa3oi7WkgcVrBavVD7B7VyzgfffwYGXCgvTskzE7Y8gJpMf8QmEQyCDmd8pJRmi8Wd5BuneFPTr5iTtA",
  "key23": "4cEr4ZjHsNTJVYEwB6LBY9oDaajVaGpvqShBLrcJjfkkG8vV35vvVaCDQFbRU29zUChjTDaY7cAeHS2Faw8iQpCm",
  "key24": "319RR2NDyXY94Wb1zK7ncpEVXsDcPhwrJH4BKbSoA9DwhKmr9qGVb5ZnTwhgT7eov5drdSXhhD7TmBPT3NpHdhJX",
  "key25": "5dw36Ugc9isAgoqvbJrUGwy3ndTFTHMmYJZZKXyvfGPcqH9UtGwTnir4vGAEtQqaRD2e5h4mVT4zpPr2ERAfU2dU",
  "key26": "5mYYHBRFSqaDXRmGNVhM7GRd87TErAJX1k2fn32adgjddD2t8NRrjSqU2dvt5zDjC9kZ5V97TLgozt1vuPWaKpQi",
  "key27": "2LtTqJR4g1addeuZ4JaU6XwZFaRFFwbnG4x5PcZDQ1Ce3BNau5TCQkZcEb9jQRZFJ3g8JZnsVwYQPqtbGSvYtF7P",
  "key28": "31Va2jScBxbqXr3iL3HMjDz7ZcWz5GiPhMyASRPrfedHqG86V9n1GqozD6tT4FHbn1q6pzEdVAqtKRhVwonifBj8"
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
