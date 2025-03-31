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
    "5H9umo32qFMtu7gjZG7NqvgAV28XXSsYqJ2LJXxqV4jrRt3Zdg7zVZnBG53HTse4niWN5y4Ve6hswBySLHH6SLCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uXvydQ7LhrdtmPx2XzFE9RTftZBDoGxGoYMasi1tZUbeuBp2JwUSh4xt45me6ewpH72igpmAuMtoz5i62iTV52t",
  "key1": "47TG9vdFk38GDxotNuSEMj1QKnEZwsTvwLhufFc8UT7v3f9hGuw9kSoQN1Y2rUqp9UdxrFuFQ4fcUPVQbDY76xiG",
  "key2": "3ems3EnE6DgvkGVBHW3BdA5ajdCdErQWh5GK79MoxrXz9fNomKEHVjWuCJdvCvyy59CHYFX9bGBQms1F1d2yfsia",
  "key3": "2Ax4HNuy9dzA2MnDGD4gQhheG4c7wEuNXRcqb4j4uP9FLV2zsDTj66kzquUVJ4WkQfouB9i71TsMtVeDLY484are",
  "key4": "2bFnVuGMdZHDG91E5KgPkqszyEQwCwtTMGwdZcBHdLBgbEQFEai77gXN9LBXAA9muk4VA8P5S9HRvize9e96sQMY",
  "key5": "64zkBkYrX98wyvgw3MLR1wkM1sh5ojdMKrHfYed7wcrq3gWSMDmmnhA17kR94V73HYfBcNYadD1cXiRDuDpSMRQd",
  "key6": "4iyhotRe24m9YjYYfhDRLDjoW8GCNFRP1EVMmbeL7rz3iS1B8Qqb4FoJ3yTet6TCS3rUbBSG1atP2EkZHSpXFp9e",
  "key7": "2MiDDatwZJEhYDueLD1rCsesYVd5vWUM2tFrHuSUoMhEkN8eiMDJXcfHTvVZ4yqvvDn9R7rSrBMyuHKU6zyBZYBP",
  "key8": "3vMKCuFWLZi5cBfgmaKfPS2g8JMrfeC84a9imR9nKx37PMc6tGdr8pEbMoJ1APwjkRKAGbwJrjgwLsbeK5HTwVum",
  "key9": "E79hn73ySKp4iCuD36aznhew5Etj6rwpBRv8imk7BBJsZPPKpokN6YKwKjTuzX3NqcwTyxQkCfEeZWw2mof7ErC",
  "key10": "3H6pvjwthx1Dcaht5cdzjYEiGvFU47aeVoJm7Y8CJJNWvhwSHDDUeFS5BeHDfvVeHfpQNnv8Bx7DbukNwf9jF3fb",
  "key11": "5YP4ekBRJSJpVnvxEh1a7pViyWyA4WnW3sdoq7YgQ16UyA3Gk5JL5MSkXKPkU74T37WM1kaPU25zZQSWr16HKA2A",
  "key12": "65n7ERSZ1Yh5SPErmcvW32eGLoPNjPgucuBmGzws5C5JhR5c6KqGVCuv16YjcpPmnJZPheQuowUzAuJtS59dTeZm",
  "key13": "3ENqLmF9nFBHVUK7U7uf9ob3jPes1QsCZ61wnYsfXjqgrnP6FmbiW1jeF7kMNPkEjEy6WebfJAKnDCE1BAeJ9rtZ",
  "key14": "3NWemMTo6jgbJMf1BnvFcmvzK2nPjHQXcsL8nvu128Y6uKubAYXUmA9zGgBPiX72uQ6GWhfTv3wwn8oQ4zAWse7E",
  "key15": "5NMMbJBRYQux37FfnxU94FAJj9GyHKyJ24zR3xB7njStp2xiSSZWviDC2jhJvRUmLPMGJnExaHfM3uZ6Swnm7tsD",
  "key16": "5UVxMEZHx4ptTg4F7pPnUbuj45xfxnf1Drr511Dgfc4SkqyqjLeJjpw651MVRVFaRQmTof3L8pd7utbWPDbfBeNV",
  "key17": "3z7es5go4jChxuTJsSYf4wo8qrCocWuzgyRyQ4AHAimRGTHVfyaaYy7Zet5RT8rYuHiaQtQn4B9hYFHyGt2EuGHh",
  "key18": "foKTGtSoDdGRnuQHVfPxQzREQZgJQBv4p5CHiKEhP3VxFiHHG8E553VejARCCSJcyuzo8bRP3oEksuneQKWPyuc",
  "key19": "2ftdtbkRuFysvTEbSRmBxUqc8F8EH5S5r2YgkvfKjytPkHYyenoJFjvwGVN4QLbbZ9RZbyMYw31YSbYJ9tvjpgRM",
  "key20": "Zmnn8V2ExMtz4Vjbg6n7VQrgi36NKiqX1hpzGnhAdqNDtPDMvsyebMTM7SSoMw9oP9y2BQFGW24eSGJ1jveCPnu",
  "key21": "36XGfqH3yDN4E4SgN9KwKmaHE1Pjtk1f9UXjDvn6MaQXd8wpELy2LN3De4Pe7VDFrrmKxKSEXXHW95ejQjP8eLNY",
  "key22": "32fWFE9dmcBEpLijUFk1SPHLQHYsGbK1fuv9MdtkmYm5n5Yhb4TgKTfFpiGjLaSqt5tXmhVuivqDheEgk8Rir2rz",
  "key23": "42FhQmSjoXx4bHNwE9JkW7DG8htMEf1CsVQ9ogeNxRWHn4X6z6k1vFzhKANzHtor2jLSj9FpcJcmpYmrfgoeNDab",
  "key24": "37aAkRfezTPgoF7k9MSuTTEXh5B5QyFm6PFemtncvJbiqoRoyV3wggTnQJ9RAYJPujQ5F8gbfSSX1VG9jHL3HzbC",
  "key25": "2cQDHfEmRg5osRU7UjunFue7QnqokdHsUeK1xMQMa5pdU7t3BNv4DYxxrt4oq1WC4bh8CKCJAgTWMqgRMbedqvQA",
  "key26": "AJop36mjSVhsDSv9ktNM3RfhdcY2hwuEQKgmCJQMcB1SWzYd37ptKtq4UDFptZaoEcSNitzX1mAKb7mFDoVALai",
  "key27": "58y9BfzJmPf5JciTTAAp9bNHREW6FELZBUyHY9MdTUspNdC7xsW98tiNGnkeEakjJQ9PLsJLz6Bif5L71FE6TQoZ"
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
