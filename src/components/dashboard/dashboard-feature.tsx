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
    "2NsN112nsSGzVbkQXHicL4P5P8x6qe15U1SMGXw8PA26yzuYaHwdWTPHnVmp7mkWa8Q3WM5A5bT4MGnnojuRxDrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53rK9JmRoD7HjRP4Y8sMsmipgAJeVdn6pvDk3SSHGZ7feWEp8vNXKbxDwaV7SHz6ZJFg3YJGxJRhsw6EhZpqLGXT",
  "key1": "43aZoi4R61h8oRxPiRbMqiUqWU4gJzvRJgs4JSQ7deSSbrr4228nK5MajvzUD3EWSNM9KSL5oyXdehTumcUj5unu",
  "key2": "5QnqGCwo9gJ1RWo6vQk977Rx84eBGhfHJEXxkUj4ZtrXc9dtpahJaGDVUCq6vNuSvUerSXjPqLCUdpSf1D6AV5sV",
  "key3": "2ufmXmp6txNdwbKxvAp2z1HkmFYR8u7bRPS1QVCCBJeSqFUGjF47EGe4QUWqZefJH9jWPRjpAj41myVUxnye8EbT",
  "key4": "3NVuwMSFUmTuJdsPojntmjbJaKeVAbSuq4FCtuUNB2oEo2TJiFYN4BapXtFRHToybUzCWi5yXvmPLZH7rKHx6Y8W",
  "key5": "5xp5m7m9uuf9ohSH4XepJkhMJXXrhHz1Q1Q93MbEjN2giozzYtyHcWtYq55m6CVT91cNGV66e4Ar8ZbXqzjDhCJS",
  "key6": "2JxppwEBBK5v28Kc9QMTgqW16MjxME7rsPxQC1ZL9qhvptYN49R4wcZkSZYry91EoT25yucaoptoL7vDzYQh3Ao7",
  "key7": "5ws7xMHBFHKZpkFpVBuipoEJxA2X1YS7eW5S64d3FpjxxhW1ZB17szjFahQDNNxBG2HN5ruRAKgxiEqWW2o9rokK",
  "key8": "P7o71YNyCqxMXMHqwpT2mjAMqgrwS75SPfhZmaSEt9YdcBE6kJ5BEpFFztdGHFEAhutKZeEHNbJPbDoQHZ1GQJh",
  "key9": "4FiC3nDVa5UsYoErmfYx2xmNKGW8ECSdVQUwc3cJHUaiKYznQsReRqfQbEmsrQTDNw27U9z8XHyZnyook1PSzoQD",
  "key10": "238haTfNikTTwZtZ5p1Ca2k1j1DgmebeUBQ6PLAkMQ8QL747s34DGqZZ8qfgkvbX43cqqjifrmWdak7RjAwWBGeU",
  "key11": "wCRaR74Ykjd5hbbkujTjWjGFVhDtH1zvKVwomCezyXbtn6UJDTQrbQzf1tuRo2EMSCXo3FA1JLAAAH4oKtuB4b7",
  "key12": "4rc3FPbr1PmEr3jheooMfNcMUNCWJASLwhDb9uNf9WckqBSqRKWfAEgRnJ6GY6vpQ4DgMP87Rq4RBH5UFC5rAJfU",
  "key13": "4C5WLm4bwErNswLBxcvuPnGstKc5pa1TVTv8BHgrVNgisTJqMszo5Ywojvk7at4CQ4eVvyQJXdQ2p9r42io7Z2at",
  "key14": "fVYW26K75Eqg7jbhMEjGG5ytQrrNqDLB9Bx68uTP2Qp2xaadLwtEGoBzPJ1MFQyqRtEwWg1v4ZXRgQ8NrGPwJQg",
  "key15": "skXRS2NCKMNvdsphtQACfYQaHe3PgyTDAAAbjWXA1A2AGXBMrnTWcybjsopYMqp3zYEnXiXJLRACfDpVWoB9fCc",
  "key16": "3yyWwjvE2GAgSUeh5eYEjYxW74XFCXvZqtqzAPgoYGdWhXKtvEKqttkkvutP7uz45B8KrGn4Stttv4G3m7L1LxU6",
  "key17": "2DhxgiZ4TC2B2bkqdisH1o73mkse8xJj5XQAwibTcZi9wtgfPvEBobJdvRnDDoWSZne1owF2kATGQ43kzv5ZoeVe",
  "key18": "4AUT7455iEAb2arBs9ieJyhUrXrTofAJJSnnuKD6wmLex7XNyupEsuZ3mMxdR1cnoZaKcMUWVyCuD8NduqBRdoxb",
  "key19": "VW9QRYhzvjQXrzTGzggQCa9eMZQg1uSMfEntk4FVZTHmxTFxMgjbAvnaU5GxNJA9icBRoXy6xvXe5mR6E7sgWaR",
  "key20": "4xvh5X1tBUXKit5dQkywpw9okMymcDMdsKJeFhjq3SZKU2R53F3ctjQAkTmTULudWaApr8A9kG9Wvw4oFAatzC5C",
  "key21": "5U3AnrCK3ZYq2fiY6852PoMHyNR7UD6eFoRDdD7eiVnG1Aqr4EoMJh5o5Vjake4Vw1236ZSvVmx1haw9vuMo1Fci",
  "key22": "56RLc3WPbvTqoE5E1pM5z6mnoV3EqKHofTAvHW7urAyn163x8x3yTi3qUQsSz8UrM7LL2MZtiMTUdwR1sSWTEZHd",
  "key23": "5kCfzmfodik44ku9b8F8ZQnaLTDDzzH2wBQERAdUyfTveFVDiMn8QdtX5MccB6MaWFzpeNfW6jaVkNYspsWr7Wtv",
  "key24": "U5D3Y4SDozLJMjTGnrB1v2AE3suTp6QKveagv9bqGmy1w71UQX3D6Sur7Zbc2inz6wbKfoRQoWCommzwQmPf45b",
  "key25": "63RJBrZi52dR3GFXwD8ZVq7UySXeWqYWAmdSUaQsvyfaFdCmN1mWS4UMKrVvDXVyG7wWxqJMQAkNgexKcRWfYDvu",
  "key26": "2fojvrYfU7GnazX3d8S8nvTNqkcn86i1RocxrpJDATp9crozapgKZWUwXu5AuUicuMa5wXJjBjJR8oYifBjcS3oL",
  "key27": "3wRsxJoXqQGAM6jS5mGZRC6o7283AMDi6c3uGGWkuwtQx3Ru1mh4npZ51V3UBUTkuj4TbT2yJ1WPY8GB91LigEea",
  "key28": "3AtCuuGA653Hzo77vynTGrEj2bJA88x86khCDPjrpSREDEn7KrGzfLqRtMAXfMYd4oTr6oHB2ndS8hD9V6XCdXPh",
  "key29": "5E6eDyVBWAoAxfHLfsYhrjBkHJ4KsdBrwv2Nxi48dTAWAo29sREsUQMhZW1NYjDErHtt9vXMKY3NRK6393idJkzi"
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
