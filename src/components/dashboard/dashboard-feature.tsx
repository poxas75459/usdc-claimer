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
    "4dR5ymEHaqz4BySKF5XH3FpHjh3zziY4haCyPYuRTtp17xcwraX4CDaEmRABjReHrhSRKSpBsQPg2U4ETiR5PTN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vCmpsgDJ8trEiL9KqJ8vUC8LtKXAvARntmSG4BAsYdvgSdC5LLWm1FSmTqFK6gJEZFLSWMnV2sztRGMzr5CbZra",
  "key1": "4ReVB6uCZB8GdKyXm7nhJrSXxseA5LDzRd3dCbu1DUfqGMTzMuAP3wojKKfyEsDGxc5qLGpSJ5gNdbPEEQeQP7Sa",
  "key2": "35LnWzgvt1GTvoSMK3Ha36RWEqci6EPRnbRco9nr2MG47eCFbm51nXxbMPUhtTnn9fpJDQb8pEV2aDNDF4xiPZAP",
  "key3": "dMoY1RD8VWrPBw28gT8btReJjR1r25jFUXoFEDyy92Jtei1Db2zQ8CxKE37yrPh64159qTc3HHVqpzpXw5LKHi2",
  "key4": "2nPT4bkZwyMrrGQTJrL6UCBN4EDnzeAnNJdkPzKdHBPbjzxu4iuBrUqv4JXPLBu4DyGg8jf9JGi1nhTPpSnVjvFK",
  "key5": "3m6S3ZJWx5XiCPVyYCncKqMFpNYUBpXWJyb6R9nTUMu18RpaXpp7Q8jQkYDHwpbfYPiuPXxQGTYDSPoNza9apdVX",
  "key6": "4khEh3t7bMse7xSqp1sy6bcNj5T5W46yLtgHrEcZVv4u3cfcgy6zbAUszfvqBgWP5GcLCJEcEWM7SHUaLuGuQ3Ym",
  "key7": "e9FxU6iCeFhkUYCGgisaLBe8uH4Q8rVzVk1HPs5c2CwT4DQZqywjE3LwZorAhEzFrTt8uBrGCYBQJiRoXsRgwGL",
  "key8": "3y1LMRncTXg7PTkA7e7dWzpDP2URUDFhFKZQ2C89nqFcLzsSMkX5rcKW4GfpzFLv8JmTK2rk4psbLu2Eizhp7eiN",
  "key9": "5SCko6tw2JbpW4GJQTEsSZAkAcePAZWMQS2zoJJX2YgUpbgzPiuRqneCbUhzKbzK4oxoMzWmjTcVdcuNqM7NJshC",
  "key10": "1TnZWnYZxh8Fhyv1og655ZXVKRHRAuiEfTh7Ljzaa2hTKSpYND1Gnp8tKTa5Jr3yiL5isrQNfgbRdcaNyLCyMBE",
  "key11": "2WrJwhvs7u3YeJZGR7bxQQbobhdxZccGiFj7BhhxFBmpMrpTk57eFFLAxiAkbdBcmmRTHaCnrYKAfAJHEoCVh2sG",
  "key12": "BXZYKTThLZtsLfD2eoG46nFWoPrJtGwPGiTNNduyZngQY48JA7Y9zrh8Phrks8ZJHi4YPyFFu6sWcwLcJ41kVwV",
  "key13": "2w8hZTh3Lv3ZbDAyKzqvw1as4XQfh5C82RfZuUkX9uSLku39cM8U1j2RKitomH5f2oEyDReNTsawibjryG2weRwX",
  "key14": "fZ44ALih6JKMZJEvNxbDk9J1KUzbgbJhEBzj2XeDQampheDWLSq75a7gZabkSQoBejH6AMntHRkU3HxFdJoHVai",
  "key15": "2WZWkADCQusfmwwbeu7nZQMThYmBiEheNBsh6FmwJZgh6gyKoXMh1A4XXcZgZZVWL2Xhin97Y5YrGvMoU7UkMei9",
  "key16": "24jCcgqedrL5LZSoVXgsTUPGHSpmYL8vAK3vycsaC9mgdqoTD6JpTbsXGvi5v4JTYUbh623ze7KQevhDoiGmnhsC",
  "key17": "2FiMas7ZVNNYDJuV21jmg5M7BJDbtVcSQqggLxc8CSx9Fock4odjqJdNkYn4NznmAmKfKmELURZkXZdnZWXJuFih",
  "key18": "3DEMtqQJSzu9uc5Yc2f3sygqnNkxRnCsdj1PaxBujVER1kcWygE9Lqde2hn3WPVN2JZW6vCsHHbqAzdkeaLkDVQG",
  "key19": "cEZBbfBkBjpso2ZQLYe66pDCKVRfvDMNnTPQUEHaPAtrP7s83i1taY5S4dSnrS3b4d5NJHS7qgop7ufNtHWMhbH",
  "key20": "5f8DmkP6hdc8KcjvtYZxebAwthpDCpc9gL6Wdru78sx8R38Yav4UoULBzBy1vvdVjYAjnGdzDiwj7kX4BpfTXrHs",
  "key21": "5oosFZieKm45HynMpDAiYEGdfjBiyvoU88hqbU29CFBz8nZynRWzv93YLtYwPWehSTRUN3uFbbnsTi6feSvyKX5z",
  "key22": "4QJm9iHiVH2KB9HWTYHa2N4sjtJh6MKsoKvLzoLWG46zcVJxADPLmMwafFGSAcwYnMgEq41vJrfR15gwRgxmP9SP",
  "key23": "NrCNi9WCYMz66CWHgYugsW5auqC29zoHoP9axcQTLAHingxxsFZ9oif3ZdZZU7e3DuizriUciFPgT5fzFZtEKyH",
  "key24": "5C5kxRyh3auSxzukr9SBBg5qYA9rNbYksnfYXoddXHa1iweRupHpppVMtgNEEuHHBxsHmENb5WHxfBehJwVpt2GY",
  "key25": "4gBtecEjJDH6MnxXowW1m5MCYsUceeZZTSpDSjermtuXhKfLXE7qr8mB3CF3HEHTSrXb8ZgtWCzh3ZzPDh4SbkTV"
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
