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
    "4vcZfDtEsqvxyE9Hfy3mQqyfj9vCfrqziqTN8oJLPeJwGGjhx5e3mxtS1FSvkLWrTdf73pweC2JtpVSW8Zaauzyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NoGRdnaNsPwsLZxFBXt3MWeuKCofD5KLBqEsAZZYsh2r6q7Rtxf551hEztyNt54qSU7GFHTMhXCYZeEpYMc2Srr",
  "key1": "5bMqCDbWqNzymY7VbmdhRNGTEYnxiUTEWsqGAibjJd15pLzedNknE6cXxhy3EbF7jmPemGxuJgjiohjy2sCDNYwb",
  "key2": "2rWWarrC43Xw7PCrumVUR48ZynXB6PmCtYewaqxHKt7RNhUCejehgqLPFQdiNyrfTrG6gfK2sMSScif6jgNKggQC",
  "key3": "3PJ6iBgRdQ3k9PQ81mD64XEYGJZyHyxVtHre8jA8u4eAJc3pu21d2PbVk76bSTjFtDcxLFTU5DSRotZC9rqQJc1h",
  "key4": "s3hw2DueLffnWJJQ9vYXtFR287n14KNzsfZp3Xznsrg23fYKuWeSTpRAAywX8hSz2xizTTJJjw8ySn25Z2TZPm8",
  "key5": "4w2LEKYCT6P7sotr2yeJbUE46eh9omxqSR7M7nGEuxCxBdPpRMzraUtEfohdBfxMfHPjmEQS9LEw35QyvbntxWZV",
  "key6": "4ftqjLj3GKSs8oFWCfDqifamRd6Q2GWGnVapQhbzDXJDcqWVPpimkL4dqovSXeNTqDNP5pnkdLCJ5d7tNwdaDRs",
  "key7": "3DCECc6sGTDfY3stVfCyZJe7f9z8FE8zkaihU76YgiNBXz5g1kKCKfBd7fpGzrhhkZQaRB4SEBG1Du5GCrG8fLZa",
  "key8": "4tAQ11f1x4fqmdT1h5uLFZCtLkVDmMD5t5oLTVr3bUgg7KebvH2APuh36jPWDqDecEJf6jHzmWvayG2Dvy8hEVxC",
  "key9": "43VCPzBB7Z8bKqEYz2ArEHtoAxooEGSVXPos1WahBHruNnR6VzKstrromkmfbe1vbCSwZs2wbMfoJXC2JLSwPWat",
  "key10": "2vMCzmyzwmF3mnSf3MeiEUQgtBVTz86p2vuv7CrpYoLUDJ77U4es6CBvg5jtUzuQ8RdTfXFc4s6VJdvimnJCWDMU",
  "key11": "k75yEcuesF8uFghgyADG6dWgv7Kgsy1MjsVfP5i7kF8daBXVE3n45kDRRyoq7xXC9sLCFDQH5sR1S8cQBjFQPDS",
  "key12": "2KAHp2PeaXv5HzQ5NuwNrTpdgSby7WNowmc1KyswqHrhAcPLhfhCZUjVXFQQD4a6RVzqg5v2VAKBS8AAm3hWXVhB",
  "key13": "27tpkrEG5PYgp2b7QDJP7F93hPFVVNEuph8v8nexaxkt8nTZ99jv5eG9wXAgnHA5qimhhyvGQpBmQBEdgkj9UtWC",
  "key14": "3mfXRnyn3xFu9wDkZdKJNjgiBX7Dm41DggfZz6e3rgs4WV2C1PhcRmUCFbihD6bu6MUYADrZToyX6AGr3s7LmCFN",
  "key15": "GygkJC9p1669DtgP1gmF6pWckVUhie3ruLFUY9zzGYVqR5ffE2vevTra2DxuLpXkBGbcrp4J96AMaZspwBk3qRx",
  "key16": "4hTBeZVp5F92qRHurWzzGVM1X9Uru1fQhLSYZk2K6KX8AWMtEgKPyfN5Ec5U55dE8YUzJw7fdxsQ63ierQa9ubMH",
  "key17": "2453DwcPHpB3ESTufVbNiRDG6BrqmCX79ih358i6DiDD86EiyH37udn74NKa5Zim2Xp9Ygr9WUUmq5EjSrBD3bmV",
  "key18": "5pyQEDfaxj2qYhknwYvpV92CXZUZknepbogVWxvgXSgoZWueyhQFYsWJPiFtWpEnLL775ho71iAR82BRAJUpj5wm",
  "key19": "53F4xs7KZgYD6oN7hp55oQPHdiWTScCBb9MTa1ryCjEoaDKtd3LJgNhhVgEfZoMYfFRR6gFc2pC7RZ6Jx9MSCxEZ",
  "key20": "61BTgRBzYAkccqKJpebWAzCtTfnTTDJom5pK2P1sVxWHobF57x38ARgHDG8ZNn2hahEUuHBY5w6AN1zoDHi5LVBk",
  "key21": "4CgxexugUJd3uEt6tyGFvTbxGERDohWGcyRXY6aQgDDDWgQeNu72qdpTYqwpFThrd1rCXGi7P6RajRD7AUzQkmSJ",
  "key22": "kX5RtKYyYdSAvrLvpT3BLsTmCqwXetXQz1mkBQgGJ77xuuQnzLRMbprWHEQBeHvCX2YHNTz29QYkYjUQaYKACFM",
  "key23": "3PaoeUxBiUPSXcBgGAqZwvM7LnM8BTYBfPXRZSJxwG7xstEEq1L1CrzReMDoU3c7xJM84mysfhDdVWUgFCW2ftYR",
  "key24": "5LEeadPEeqxNdzB2rQ5ftFjoukk9kwPPxAfAdp8BNsxvfdfsaWqdsKtsof98kyaJqNUrvxnXpL7RXde1mHtUETru",
  "key25": "3w7yozqCRqKMdPQ7iYguYyefo37CaNLTEiJWJjPJe3qGjHXCEjEst79ErVR556ovqaB6k5mT4WDWkHGbaKzqYjGk",
  "key26": "3jn3UYVDhLPz59fYx1ULhkZTjhVgvoseejBXETvANPbUwuqLPNorr7HEn3BMgFWdCgs68wnXUxMJEacUr2Ljby9P",
  "key27": "5fjZmz31z36H5CpYGL7EqiyYt8VzrM3XpjBYjBpNV5yVSRC3wgW2U4W7jEjYvk3LLpXwCQ9aUHvBDaU5ceCu7mjM",
  "key28": "32GobtqinbZHC2DDyokTBULdDHpwrJNUkwdAkub5ySUr4buLx73RAyX3HhF8oNz6KuGdBouoVidE7ziVLAR3HfWV",
  "key29": "2MQ4XernHF9DdNtwuvTt43ErRSgspcg8AuZYzgj4TBcqvZUVhrYQ5sJ8RAfzg8g3VbxF8E5GfxbK4bU5kasETQeX",
  "key30": "46GAGhfYwygNYVjWs83QxY8VTS7ujkeYebxKRtKUrDBDDHYRsVc4de2NJTekwciHsFhikZP8WHUw2jJBkSd7poon"
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
