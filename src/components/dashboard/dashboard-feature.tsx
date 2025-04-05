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
    "2r9DeNbCGj888LSK8nsAFbMnE2a5pknLp24o1XkaihwRWu5wfGjjdCQcx93bezmdyF665fJFoM2sbaVoB1xKATiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9KwLrpNks6bNZ9RWRbW1kUM4kPob2n8Hm1J5evvaZSVKqQfFiqX2dVEsptTUe4u5VwLmvgcT3PBKsBS3JGYB2UN",
  "key1": "5PBdE7MQ8KqM97C5e4SJUbfgi3GPmimXuCsjg9TzSYz2xpKhvJK9BJzg5g1TVpe3vaQ9GEyamwgzMyYTriAkVKp7",
  "key2": "4fH4jsmRs8isC2ZQX2hwiSh3QcZ8omiQsLhf8uGpCUQiJhhmGNNMa1RjrDKVYgyhZFaCnY6Fr5qKDE6q5tqFkCgL",
  "key3": "566XwiN7XPmR8qKkKEv39BK6G3hmviemFgQzmh2ySU2hmQX3rAq5QtGDLhifPNG9AfnqcbAZwYsRwmZkPmNNeGVk",
  "key4": "ShvQSaRBFChdCnSjZtrGvtYieLRQB2exRTNMbDSx2y92oNXdi7TuGR9xrnddzBrpuCar6FWNR8PM9fEqMAtykKF",
  "key5": "2RTYujrS9RQbPuB9vXsQf1B9LFqp2QZWbf1cZvF7fYfsgbhdCuqf92PdEgVbwd2xtsu2KFT3HEJmuCP1SC8jpUut",
  "key6": "55kogdHfvnfzv8bU6woZhc9dGFmVXUUMvStWhxZ6MRSQSht6nx8GA24TZuArXedHcK3VLeuRaZUPJNu66yzz73eo",
  "key7": "3UhFuNsjpKgWbjckjg9fCRk4cq2ch6qRoThSBmQbYLXFZLERJc86BVhXHg4oCVZxWNLB8fRCYKH88KCFASJqFZXR",
  "key8": "3BWgMZqaC2EBX2QKKwYhKjDT4eidY3visXwWX5qkC37kntvHQAJhkS4NjPHm5iiJYqVSpT5xB63GBPGwSn1GEhfk",
  "key9": "2jes3BBGiEWnzPF2ZBD3yd3FWxS6YtdTMtUNdJHBvPgfcVSQNHLrpjLy8EWaAYJmZo8CkcejKUgbvgVqhhBSHkn9",
  "key10": "5gPkBgtw7bnKY3nL37rzQJyVLYFVS7Ps3Myydeei1QgxqKYLJKownXWqMCXRSrvc2XvXtJNLGLT2zXcQrB3vjnc1",
  "key11": "HD8bhp1tkvzS9sWYdFdCLPi3uRjBihPTsZgegv17HpeXwJdqRoL2jjR6HdrsFnaCg2NLE6oTvCbNrhNY7uWJNFB",
  "key12": "53SNeWbCLPFzoZuKc5H23w8JsaaYQD8CR2RRe1ETzgw3X8uwgb5d2YbGJYPBQ2gU3gg48JtnAaQeVz8m3HDyV47A",
  "key13": "4dQ4YRYap9sSjTp7LxCnSHfJkHTxZfGXo6eS2Lrtw6pA7U6RU7SaWricDruWedcfakVREvxzgsEqsRavr2nTzZb1",
  "key14": "4t5jxjFVy5LYeLBfuyVzCTw4MfUzmYyjfh15QCmscJ3QXLapFu4VoMapBi4TodyaNUnmveJ2CqSXz115wheb8aaC",
  "key15": "VZuhpp5UfpyGTQeV8KY7kTUo69W2WAhzGn3GyYMdeexfPF4nyrJeC5P9LtPPiHt6dLpZM1BYjRC3Zr1nrh4zcTh",
  "key16": "tGRTZhFyCbueJMyAqXbmkNZkN3PXmxc2NzboXFPK85YTjvkceTmo1mM9zd49ZPqAVrqPrPnUSCqGey6y9uega1G",
  "key17": "39dtSbAXGxeGn3UBhM6WRZJfTnGLqL5sAxmabjrwwYZ19uGiEcPNbh9aqDi4rLsKJjVNKb4Tyogsknj2cHpzDH3j",
  "key18": "4xC4h6u6h5d38Zthrv1RJ7LYmTySjirHfrYanR3FwjtohZrcQWqn8vG52XAJZ37j7CpZAxsxoPfEMoybceknwvVE",
  "key19": "5bsEFXRTfWCr78UghsEWR47hfqYtQJQo4up8fQuJk7LN3ySVgx2bpZW3mYV3pBvNRFXKe3psAm4Huk9JrVLxmJZD",
  "key20": "5UfWGzGWrgdp4r913k6V7xpgk54ooTcMKTbjnSHWntTCJ1Y1jwpcJYDRafzxsMV2kn9V7STRiGSRQP9jYhJRj1CS",
  "key21": "2GjYQ9yqxCDhisM16pkh93Wv2TK63gdB6nrZ1BHiUZrQ4nvA9MbctbdMw67ixzPKXFjj4yEC6A3S1iSZWEL4Uxk3",
  "key22": "5qEZNZkpcJT5DQUg7rLrfLgnBgpn9LgmDZJ2aWe64s1PghLSyEgjbTF8h2hYDzzwFaLMdNYts5v12EjqMqgqiD5k",
  "key23": "2piN1RDNBWLgHBsWuVfS7EoQZHpZHuq3xAERqfkChBHxW5jeTu88BZPDHaLZv7iJUxu1G6VD83n7iJgw6U3r7zZd",
  "key24": "tb6pC4kGXkNPMp9145SkAptAdMnNEFiV2uuSUmPoXnFHYjdJG7rahoN4aLdYFVVCnA9KgVZ8qrzzDBXJaPzqsDU"
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
