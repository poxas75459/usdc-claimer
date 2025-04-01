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
    "5qCmWVqhKQmezEd2u3KTkjWFPT9bD6Rp8dYeyy88SeGcwTC2RsEG8ER5VGMSreMiW5hSSxvwoBAKubFMH3Rhejik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43QQxCSJHPu2dkJmbYWDHtCt3Gykz8YsNKcm2SK1AH5VzyXBs2ZWgFmut3Gkq9DyBkNAuV57ozdbPY6HW8cGVdtH",
  "key1": "3LZEZ5PXBQHBi142D1uTCXXNEp45ATcSBz59ggCsCptkPj4jhFt2BJFCazvGPDmhL74JzjUKS2R7mAdu9PyCG6eE",
  "key2": "smVuC6wSThEhXYiFC5umLVgWMmcR6FdCYPeSTSW2DUVoZ4KyL6XC39BvH4CeLja9ZjbpUdVD7XA8sExCFH4wjPA",
  "key3": "2jMZDTtGPxK7TBiEEJXipNxNZnoeyhj2DcqFEpeUG6ZHGRbvmB3uY8RUe2pF7EFM28PLYTzcVicQFjJumwhoW7QM",
  "key4": "5FkPKSzEQ8M85Eg9iPy1tojCoBbs7uYVLyT2eRvpceYg9KUsvi2F8svCRqiZ1YbB6Xk2G8zwbh4bSCpkHt1q1SS8",
  "key5": "4cDkohV53sgdoPGzGmT5ZGk8ACXN6XkZE8qJUo7i54iJNQStpB128Cs8FzYoauQdq1fN8GCb9ySdXepN728qwQGV",
  "key6": "5HMMEmrTPGTJy7jfBv4nerpevLmsoRTnzTYoRUsgYnUCjumkh6RSPDJ3fimhZ8uSLv3H6kGnSJm18j4ME9MZShmg",
  "key7": "4ELZqC8XMYFV8sa1BLkSnARqUnYFsNaMTy7gxJ8adjpTiYfjPoFDAUjedkgBwJBjZH2JtiswW2xXWNJGibM1SSnD",
  "key8": "4UJ7eD5jmFphGLJu8qs4KJ9NQcHYBdsBcG7TdognKfptCBLpysdaFVmAdNsQ72GjGg2hquFUQBCjCwA3Wfddropj",
  "key9": "35kWm331AMju2vz2fTqhPkWYP4hDeZ8z3SR9BecVT5FbAajhYDEQaMUSc7or4aNT5n97C5JfGQhiBrQQmFgCvQi5",
  "key10": "4LwC3v35YY3w898LJbw88fmhzwDxSAuXhUPMG2spR6xLaRFWfkfhbKKjwYrB5w9kSVJE8rV5X5W7Ae1CoUf5vZSU",
  "key11": "4JuGYwvFpyJZ1hYyTq3D9Ar9RMEf2cspzEaJe7Sp6TrtQmG6GSuW5x6Pzo1STDEJ1LYiv5wJtYKedPuFyPGo6qDW",
  "key12": "51Fmxr6tu84tdz8r7NSZf2zpmShwdDYgsMegyJdFEL9MRgBowxQSxB5HFy47NrefwRhthcw3Ug1h3re5iCntV5UB",
  "key13": "261feCz7dxpeYKD93rQZsD7hVXEvTtwbcrED9ZHQsQzrjL7TmVNpurPamC1fWdTc1yrSJXrh4KmZ2MU1faNtNmvU",
  "key14": "2geDnDU4oK1qmwctLme3Gj2y7EXe5JnzPtU4Kkq5mFB5CoT6bXS1jRKYDvuz5Bo5JKhPK28i17tKrKeD2cUxg9rB",
  "key15": "66QmF8WLKN149B5gH2HvfL48dmBjApZ1KzGzxhuWGt9xVUe9iCs3w7L26d9Te7hUjwj8QJdAXRo1XjzHQRvtEdPg",
  "key16": "vScs6XpWAXYKgJGpoqDUpaPcZEFGXpuvUQVr74JRkp2bwwxNhtyqYGJxWpNGuY8hKzFvogjwc2WUm5U4iemQCg6",
  "key17": "5j6SkH5CJVJbrwx95EcnNkQTydXyoRWMMzeKNC5Yu5HpnLdEdGtrmw7WXBzbZESGRJPJXLDxG9gKL6eT8fyZZG6a",
  "key18": "3MJTF6eVTFcFi2y4TBwGCKXxeRkD71J9tyRoFb8LXqhAKuFWmsNGvQGpJGuiHswUg9HpFDmPt8qGhmehCfFaJQBY",
  "key19": "w4GKknmpz2xxLtvj8GjKB6gUDuSvVf7Fw8DJQwxF5yZdjAtbmdqDi2Hm8B3PoFLwQiz4njqAAs1xxJCTxMtwC9k",
  "key20": "5tXunkEFrds69UmBAY6KFZgEp7oqiEnJF69QrX2Lg8eebrNSrwjbmocguLzBs2SJHLWF3cTcqtMyACRcRUkY6vVm",
  "key21": "2ZkTtv1LrZp3zGvwbGaT9TJj5bB2ePXig9E4d4f8iFPaA1mUEjqknkhPsZaWM1bp67AtQpHfprTnJkUdkbYtFFkc",
  "key22": "2FuRUZXvtmDnEHKYAkmijJBMADPoxo5jGiJPxbGFTFuzWgGz2UTxvXD5Kmk57DYwfnKpRHiM57eUkQjdKuywf3AC",
  "key23": "5HjxPgVwhjes4AvDe5Ea5sx3bnic76jYBEL6axTcHHJhnsr1iH3kEiBUbxWt1TZdMGmNTwmrXwVpUkUgT89Xjoqi",
  "key24": "593kofk86jzedJhY8o3GFUANriASUSCCy8GggjEkfZob5i7JARtYwkcRJ3UFco7bhmKJQjMZDia1iyg2LTUTYUEV",
  "key25": "cFoXwnGfgVD5A2HRGhZPGYCmxaDqoHoUCfAtJ4xzLYnBB9vNfgTYD5Sq5wF4qRKPLyg5PMuoghAruws3cg3gJuV",
  "key26": "3TcsB45uSZynmDCDKq9QDor2boPavEarYGyqUVoZkFJVtDVN7sbTrMguQVxX4m8euySqKDmHSeTHYzKMh1ZRTRxM",
  "key27": "57MqLVWVvh2QcMfoGrBdtoD8cLD4NoC96uvWxbqyceGAPSwATkaKvPPR9DtggNbbqcnqgdMNmbyvi4EyPvYA1yq",
  "key28": "4f2PWMTrerc7LKwbsGdtzBQDvUCqAtaR3nVvDVLp6FR3Vi7wpuVCAdYs1qnNkNkRtGwhKWH2dyvT1Ez2B6hJfFQW",
  "key29": "62A37vFvLXBogwHoZdYzboD3Zc8hQGNp2UM3RpYadwQTDq6rhYZFozWCjxYf13iVYaXLonAsmk3HMEbnmWffU4Tf",
  "key30": "3EpVu8MFCHciuJQ4789K2fcctgQWrubnbCSTRQ2GHr1gvs4ZdAB3qohWkGG9Ft5a8T6H6R1BXBAthMD2ujYwRyXx",
  "key31": "4rp2tbrbYQpSSKrtHdajNuajriAK1vku5686iMLkNzcZ7KXhXghnu1rrwSTUEtoaZoEDdycx8cvoWguoVjobmpcB",
  "key32": "4fbkppBq91pQpCAx5NJVdPVG9RpHoBonDAs7G2PgGd3acyCzDLkjJSEvyNYS18Gk1ibnNrzG7A6rBKaCU37RfKxg"
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
