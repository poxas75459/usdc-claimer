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
    "8DcvKnptx4KCcyKQ8EwdfDjFpq2e51BBHrFr8hP1H24aqerjvkcZRxc3yydLWd1c3ePXdvTBtUJo2fxLMeDADe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gbBKM7w3gptxnUsk31nt64AKjfGjor1bQSS2Vfaug61sedthXdBGfwomSye9AAEz5JNs4zrZNQe8qt2uD7KGwLm",
  "key1": "oYHzDQvRpygd6iZTsuEeMvVzqw1oPghEKBei7WCNaMz9xPQsoRYjtPUgZYTdHkto33fJQ9UDKMEna8nwVyQCdQG",
  "key2": "41eXr1zJhbqgkcdEsYLe9vj8avabv6WgsRFMo5i8TgLTF6N4pLPkSkiHuAkrLVWHR4AbsWxoctqREqchFX5GL96w",
  "key3": "2cYPr2iyNgZjQzkGf1YosXXHieTWE63etY15zqcH5L8Cg3tXNu6Bd7eHAWKqKqQF779nvgguyBmPSZH6kAkdq13n",
  "key4": "SPE6a6VhRzEE14G2ds9A12NPyHL1Dj3t3mH4YP4hqBkUBofnzZ5TfeyCSh2zxsSUzfBJEgQjdZU55uqkUH8dEHp",
  "key5": "4snGwPAoDD1awE8KFmGwWdEwXVPhjC8vPyftbUciRupHN1UK1u6QgW9wbLaN3w6THrDwPSp1KAp1abzr5xqi8miJ",
  "key6": "2SegpNcUHUBRugk4uc9K6Fnt6ng461CmE22dARXxqgo1f4Ys1JhQuibfivyQb2EEXntZLp84DSeyQdCuUtDxEvDC",
  "key7": "35DnrCvCP3QLz6m9TQhYwTbkj11CFDxRx59o6dJZoyrQpjM6418Hhgfd6WgUwRLU81EypxRU5vVfnL3NQRxBAaP6",
  "key8": "5hMGWSnqcdR3DGbRWNRC5RPQBC69HicZ6LearJgagqXmqV374z4SscSbq5JMzHUMJ5NpoJXzgenjGBrVaPuu8a29",
  "key9": "5mde4cdSfBDfq8FYF6dFhBT5R1ubDwWNy76R47X1spjNkKsaNn6cHoZdFq1g8cUvx4W7v4Y8pzmpN7CA4S2k52ah",
  "key10": "aVr9ZPG7NsqpSdgq6xeJQnkFDHXqsWsd1vdVdKYnzyN2nzvQt4iAWKtoxfP7SthGerTTiwGHdoUnbCqYeiV2gXE",
  "key11": "9phZ6W2JD113eLCRkwSauYhf8HxY92zvCe8ZNo1KHFzEBxEpdxCXDwfkL2xUJg3vA32DizURDiSL5BaA2p3ssYQ",
  "key12": "4px7EgqVtoUudADj44FfejdAWBep8KxjAkViAxHBQmmxNgvQPFEbTGxknAnwLL6Q93Y6Ahaae3hJDZiPvmzLjAFd",
  "key13": "4Ua3gaWbch5Gd8CVPGESeVsBH9VVDhLkhZHgWtf4VF2JTy2DP8uhNbYuSXjEdsFbkwKVBDXzGxpsACGsefsKzjWq",
  "key14": "3R3ED6BHUYZr7gGGAUNuyDFwneeMsm2WxVC1yQkctmUhTsEL6go1dtvAZDWiTGyif7pby5xhq1fzFU15jWKkFNPv",
  "key15": "3a4bV7srGE9q8nvUjNStLmVUHGWqoD1dGgSRa8gJR1dkdyyDcFBm39Fg1AhyooGbNgDmLUk7daMLt4sT7iK86RJu",
  "key16": "2Raewf9duezrTJPphihTYreQFP9fqgKZib1JUPrmMr2hpnq4rbCdnVerE3658SWUFhgZYjY2A1sSDH2jrmBvR1ma",
  "key17": "186TRrxjrVz4da123LoZzgdEX2krsMdpFfZthgMKcxUfzzgcyQ3gpp6wRrwPjnUw7LKaUxZQ26yKV1fNDY7tatR",
  "key18": "3MpFMGyYJjFMmHeoxWCozAHrBiUoCZJ6GtXuQ8DzYJpn8FEcbcCRup8UtLP57TyAPWMa9TNoSkxRBUsnruBDwRtx",
  "key19": "2oE1Dt3Wu93PXeaZXankdVxha7unk8JFbTMXpPJ8HV1Bs1TXUv7QY5EXgCazLxT369wffb7EWvyrSck69jfwjMx1",
  "key20": "3nWRc9CdJNuu1jtdBBFjN21ndPMzFRdt87mJ1itbqoMpsVXsMFndaHC9inshQAP1GVj8ia6uR9kSamowmY7oR7XJ",
  "key21": "4PbzcYaTzFNvqkXTmndZHEzV2ED1QETqPgESWZReuW1qGK5mWT4AVcnPpQT8SoY7NZwjt8V2ZNvVB7X4wsZXneQ2",
  "key22": "3yZUUQjvCkdQCJA8bkAzezR9jTZyduxbrTPER663CxoKD7muEiiAnYvTHX5SbEDW7oUTTZGCS3TR5siZT8SU9tKZ",
  "key23": "4MT86xZ9wXwCY24RL8syukXGeQ1mz3vH3q6nkYpQ63yuReARuJ7n3DiXkkWZSAvNwhsP9kb49Ge1qwMh6MzMSiqq",
  "key24": "4iBiBKHtkL3B4KAmRjGCyHPhNc1B4gz6ee7e69bNRC1ndhdseJwLsLdKszjDbBEEFK9TekHQQdGo9B4i12M19aSB",
  "key25": "3WaJ2bm1bgPx8dhqdZ8xf5rUPQrZFaEJ31mnKuhqz3DUqBHtUEGRbcqqrozMTESXktroLnB3KJ7mrtGgwQ5YtyJW",
  "key26": "2FjdxkRSVrppBabtxzqr2Fugupu6HEVeurPFpPzAFJsPajZ6bk83pHUSjohEU6zcfR6Nk88KAHrrkLqYSQpSQGB8"
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
