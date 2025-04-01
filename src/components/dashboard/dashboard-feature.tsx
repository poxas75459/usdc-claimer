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
    "4FsEDdT1zXUVdQ8uucgEgi7MLmDeMijo3fkEMnLqNhGes94Gz6euACKfDja1XVSg6YjRLQ7fR3F3MnjmW6o1GrHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZzjMP4miN1UR4vLxX6cDy3sXjYSP2vRypuUtBFZCsVHf5UPgduJAZFw8wqFEsBNAQgobWk7KRMjACtYyLoFZtk",
  "key1": "TPMyzMJtYn4DHvtgCt6jLrU9bkh4LiqsGWwqymBqoDSpqDWco9UC5fMmFJFodEnDAx41wGsB4YqUUQbzG6gxScP",
  "key2": "2aVsDsJ8NB1tLPg7avRJ9fZw2KPx3YikcGr3s3LanSAD286ZvjAaCwoNo8oqhRUU2n2BJVk5eb42j7VEMbqW3KoR",
  "key3": "5CVjatNbWZoWpJSHWXYEwhnKy5PKcToH2oQ7nvXA7oUZDpqXoYnRcBJjLbTrNQP1DqtWN5hBYhQvpjb7Z8nZ45GR",
  "key4": "42RUXnyqt4PZPXYW2TpJSRkVSVkahQLrmegcLZCDTqw4bdc29ovwZ3A5DVuxECiKJoiJQoicdxs1Z19JfRrRu585",
  "key5": "PVxjDSy4nngLJDS3WPrHZ2vaDhgdbibmn2vUHsh9AqifhTFcTAg1DwAQowJhPbBKLDSfNpNkc39rPnBTN1KVe1Z",
  "key6": "5nje4SbPYGGjCLvi6y1Bha4153PnDXYE2XLTqC8e7dXE2pAt6SZgkL8kpncfy4EmBTWWgP9ivLs8EyAg6JQanoXW",
  "key7": "2LgXetZMzigwZWkAz5pqBRDvmGoYe4GpDk5rQtKhKw5MnCbreUzFH81UqpV1r13NL58dUj8Zu656qsKu5PtMXEQu",
  "key8": "3Sfre6Fog7gE7fD5MREgWqedTVxArGAosU985VBdQAHzTYSTgNHKRskfNNkfQ1mZFzJTv4T2RZn389HJHZertEL",
  "key9": "2Jxz6nzENs2heSn2iXzEJ4P1auPVLqiFnf5jLMgNoXX4WTti2xc2VNVuqenremhMbFRJwVEtV8TUvg5NhL59Gdtb",
  "key10": "3i9vYxjW5j4YzvQzTSD2z9xfudy1oRZDv6yX66WfLjcETXop8jgPQzPkkHmAaqBnJkeWioFA4xRr8QeexJtWFV5d",
  "key11": "mq6qZ1VzSdfhBJeLQQbVuBVXR2WeaJg3Wf95p5J9M13gNDTbHLQwQGEzvNycUksGyQmtNrUSqAv3YDrwtRe8nE4",
  "key12": "61bUDgon2v23Y3QPDLYUUktrGJ61kvJSQpZ1BcDFaj6c5MCt3PdtCgYURm3TwQeBAqZUjQV1pKB2QkzETYCquxLL",
  "key13": "3FfhFZVGzB4LJ6yYE2JxGL7u3cDtW3ATJ9RnRhr2rC8xrtbX9kBnWUxHzi9BwDerLYdcVUvCxzZ88DGxZbVctbEX",
  "key14": "5PQjWWrgkTVQgR46DRDtCvMEVyCvJoimepuD2VreoM1VyG8M1M5ouP4LDF67yi7WBMChPyZrHmeCY9ZEhiVFHmyi",
  "key15": "5vph11inzMyDSRN9MHTt5xCpspyroQsUKtEGVKet8T4kW4XeDgdrotstUhVYq8a6u72rgUxjNzHyGUd2dp5RVoxY",
  "key16": "2DzEbqL8c8MbxPditHe7zNCFgaG9q7w2Q1PW2hAEXuSULHuzt4bxNr1DykrhxX2G2pSX3zrjzpcDBk81pdTKsvKy",
  "key17": "3EBqtgBZsutdGDLn2A4ZeATj4Ga8ska8YDSzDBjuXK7Mm3X7QXuSFeaQ1ez3jQcLsDYVzCanXX3WuVA7M69yRRFN",
  "key18": "1PisHh9d6J3i3YPv1uRZBceCnjtpZ2YPfC4nhdse1RBBzFQ1jHZRWbDkbtbCyGL8hk8BSGtW7UwE49VxuhowuNe",
  "key19": "5nLuxjpoiEVRZB7EgKJU1GVvre9DVFNSUTxqGxD2ZpQjzeaRg9u2XbuLRGTt8dkw9DLRfkWGTZk5qr2PqW1Lknaq",
  "key20": "4tYu8WWVxhfUBR7XCSYAcizuGekW2yyG5F2m8662K5LSJe6PBmqA82MYs9p87MQTng1tYmUcxdXXcNNMsgwDSDxt",
  "key21": "2aZZxkVj7yeVi76qLkjmfGbynZ3gPiFHPqGjW4X8ub6DpD6d5n5AekQjNsae2wTMaCs7hmyNm7Petb9S6sL72Fqi",
  "key22": "2gJuRf8E5buPreLxJuLnrCpFtUrsumeUh4x9t8qPyuNuMmxo17bCAHS8ZEc1ZgB7vv2WZYYoVyc7BbBupLwZiDUW",
  "key23": "ae7rntr8BM5oqJnbvAK9uve9FQPfaAiZjH1DzDafa2pyAm3xeSYLLUzEFYynfz4SnX6crwDRiA9b9DufZjbDKqa",
  "key24": "55h3c2x512r3HgJtG9Z3Tbn9nUWHgvTw5LQgtC3X4cUpmijPb5VstNhZRWtwnN7GbgaaaLcVB5JtjGeKFQoLiL6Z",
  "key25": "PtptNnxv7yrRTd3wsW2q9muL6sYPRroqTgn9gtJff4M7XAd9pnTv1929TPUK3LMVnAdRVjaj5tTC6S4Xj9thkNN",
  "key26": "Un7Quqa8VCLQFZKnZMGu4jz22ULyNfGstbDtSHLDYFGTqyLpWruvmFa3QzBunJ2v9Pj4s7GCXY2Dxg2xwui5BdU"
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
