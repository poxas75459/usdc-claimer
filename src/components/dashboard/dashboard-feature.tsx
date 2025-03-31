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
    "2cvcR4CDDj1goUoRPaFkm17jh4EyCdWSeSpgmQDCXNtsPy9qf8w2G4oymu9A67ojuTch2Pfh1wBFoev9LSN6GcFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zTxKFAmkAhh6TG8p4Qg3AbVuwLK2aSs8qu5i8YAv3g8tJgFRVPeyyLH6mcRZvSdD9NbmLR24qYPh1R4HBmh5W9h",
  "key1": "4em2WYF6ZG3N7vu1Fp2XQzjJexjQ9UjK2kLeFmDxrAG3peRtaWFV8RoASmCEY868QMksQQwxDB4C21z1qJB4z9Fk",
  "key2": "3d1BYe32BX9Aa6vSMmpYHp796JES1LnkdpsxPtRB1MaU63bM99KGaSC9VuZ5gW9T7YKbE7HKeKtKjZkgMFZmbsXQ",
  "key3": "3uvSJf9isCj597q9wZPaJrYyUeda7iwUdT2TzVyrAaYF9ExqnL3ZvP1bueKUk4EWCNwQqbHfKm7pnNZZo6vRbRGw",
  "key4": "4Kq9wZNeZADRJxgiUY8hReBxAPTZhxnq6RhVqXVvMJ814oczeLvaahKHRV6QUexuU2LDBREksLPL8PM8Eun5SkNa",
  "key5": "izJydyxFjCT2WxrDzLcMtYGLa7GHkc2zR3CRs1k2tA4HPxV38tz39Ftu8rTL2bTAAREQn8vYUu4Ui56qp56daTY",
  "key6": "4aQHMV6Rr9tWy1BuvMKxNpQVpoFXZMo4DdysEE3qqZvahf6bDbLTVSNFhAsAKKLwKVJ3MWQzGaeLh1uR14JpYX2Q",
  "key7": "45NFvjZqNZS1SSjs2HiAhDz2E2AqHUXGkfwzjzwscoMk9n2YPu3WdnyZsYoKEqkwttj8BguEjYjghBhgT8Ra2k3s",
  "key8": "4D6K6DC94GUYTW9f5SJLC1nvBdSDHm3CExsKuyCGN3EKov2nhB32kdeZhSHPfAvNfdmgfX4M49yt5hyVDnt3uoZv",
  "key9": "5TUxDEdCWZrhccvzmmYFCb1BUbKShSKrVRVNr8fAwMbZk4jWmA7PTbRZzcsbyd2yvUaZDo61LBzurnmQc4pXVbgB",
  "key10": "39Zg9o9G9byBZs17QCgv1d2CTTUeKXMzk86iAZYFnLtsbG4YbGgykjJcCwJptjbq6v8aVbxKiVF9D36msZdGkhMT",
  "key11": "2teq9ric8VTpxWDc5HgTDJYaxXhUAAxQ8CCQDsydS5fB8MThpGFZsFQbY8qSVUSREV13AoFke4boLL69j7kkm1gu",
  "key12": "2E8VUqvJrnZ6pHrqu1R57U26CnuTLdXSorw9irT3GVTNkzJzotur4BzSSRx29LJ9bt5pAp6B8tUr86LYBE3jK5kH",
  "key13": "3BE1MAYGfR9gReehCiiJeeyK3NBA5xq1F5vGLZXRpvWYQ1tckn8zC8xWF5Jxeeax5hvYxBwjQSKtzJxDtkZ4yAqU",
  "key14": "s5dM9oiioPGdhmaon5WnptUBWzS4U3E7BPyrQAQ6yLTdnFZ8PpstXKrY4XVWzABMV7uooQVYQEm2zmc5goDvqaP",
  "key15": "3dkj92EnFRGiyKqhaJahPL5s4pC1jcoeyyzmYMA72DTdVigpcNTLkjrXBWcu9yTQ48BaSjr2tM3CpbJFsJ98Xz3M",
  "key16": "5oXs3TWWejCpZuaqjMDMdVam2eGGwsSQ4ZP6sKrTkBbXxLokyJQQg89TCmoM15ypoUji82J4PPqwv7NbAJhNgZto",
  "key17": "4sQn3AYrQqHzVP3GnVEicckPRWJEXLFKpxmEiTAxk6NASyCXyTe662Mx8wNbvUHRnbYqYP7SM7E5atwqw4bKaGJb",
  "key18": "3AKL1V4uDGjSUacX5T4cVGJHVFZ5a7nkZKjCK5ymXC7N4buDPA2ZfDU4cEayacFeJ3TpFJ2R3aFbNXibNVbUf63F",
  "key19": "3tcFLfhFSqodbgqcH2LgQBEZfS1beMcJpwLQ48wqrGLNswM3C5jMKw2nLEawZSvQDYGx9f39QeQkAjXQV5uLDeHp",
  "key20": "3tZgKo91HeqqPQMGhj4LHiLhAQA8GYhNCsGFbjed3LotoXvg2Ej56qzzuQdFUEXQs62JS4TTExXfU2UrogZeLhtC",
  "key21": "3j8PbVybDr4hvg7Tk11uGxzrSkcQoMzQ577ABFbhyBsxCvC89tJgKfWGDKm3JZnGTYP2fdqqTBtrseks3t5zpJRk",
  "key22": "3ET2rQ9JkErR7ZnXzZtwZnbVzCqqYuMkmAkoxEnURJJ9w4fr29DHSZiRabpgkokQjkBM6scatpKvjoGVicTrtYkS",
  "key23": "3fkZDpdUQMoS1zVgBNS77M6BGhuPfiwu9cav1X4JzaFpPQmWn9DyQsvDz2ecrvdFNF5JHUrjezuG2LK58D8AWAs8",
  "key24": "4R6dj8Zoa8SC3JoraMmWZRtanRkpqXjG8QBbwtC5JVa8ytUiMK4rwQD5BibbX5XmFMCtWte6GpXv1umWUrEjAKTT",
  "key25": "2mzDYu9ZC7A16S3rt7ZpxyhTQ5tc8tqsABe3KqxrgVtiCL9GzHKfrGJbJ11rtjEcyAGSA8Qu7Ek4o1ZF7aBQANpd",
  "key26": "3YBdtf6iFBTMAnDSBAXZ9cF26AJRfbqD1qWAS9RExwvCgbEPmQ2Yw8sBwGGghnu7BhrMHTS1zFdMcU9pxffwT9fq",
  "key27": "2q1wTrr21pCnB4MoTrMcJqsv6qGVwnRVPyQ3bQbTquiqVgwy4Pen89xxCNmTWSoE8RcPKTjuDy6YpYSaJKb4HeLC",
  "key28": "4nqhooFgqFjHzHpm2okBFugEBAqUFi2dnoG835pwDEkZedJ1MyxbWKEvaJs9ZYbdRs32uxnfotJubw8qKvY6FJuF",
  "key29": "y7XMHS3kgu32bCtJ6tmoMQFsVCTDGukM9DAAEVphaaLTWtjzSDXGms2FzKqYmWnPsz7VoFhkeKUQUt9rd325hiS",
  "key30": "2qDjL27e2MZFBmY1ZLbLkscNQ2aEhn31CYPkf9A7cY8GYRDEsGQ1AtYtzF1MaJPFhGKNpRhKiWhPDBYCufxNC3eR"
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
