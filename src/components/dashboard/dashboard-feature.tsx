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
    "2faKSo8u4wm8kw8vMHCPbqJMsKgEHNrMMmGAwkio8V2wE6qcDFMFBgbWPBY65BZvh987GsY7rCf2WDRWquJPquTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L941Atp8AqzZFPBYcS5mXHpZnucBSG2g22Jsjc86LPjFhLap1Q7PTgCG6B8Pd4sAV2kBzSCi1UYtaKXuGSu2egd",
  "key1": "zfGGsXbf1TLuZR86GiUD4odTUcMfdoNiyvKWu1p9k3aryeMofii1UrE44xqGLWka6EFeGJQuyoUa4WsiQYHXH5C",
  "key2": "46xzJ2fFRKEcFHH3qG1LWjiJRJ274riXxqVgbEjdwV5zcMaBD5shaNKEyLFcHeSva6vgRD1Nh8wnzQA7Nr5DaJVy",
  "key3": "kfcSBTV34GihzMcivnFsp3xBtevL1cWXmrjrb5AwgW1C15WKSjC7EQMqLz9KLuzQoiyE69CXdrok2eLsUcrbQJt",
  "key4": "3oBCEL8NembkTL8YLWNRTCu3XCXQeN3GRDx8LXipsNoVD4P5ZWhpFNfHyQidF6YcyoWxmV9H5Wjn4V4DDQ2DAp84",
  "key5": "31JjYmH4MP1NW18SLoTWTiggarR1E2ybuvKb3mkekpKtkon2xKTkCKj6ZLWK9Cn7XpTPtSeCghP9cS23Ex8CLz5U",
  "key6": "2Cy4ax189ZJn2gVGJX4GzStrZLk56D6kY6UNGqkyEHo56HK4VLgk2JGUnUdLaZN4LvNPtfPAZ6dTZDSRHxcmr8ne",
  "key7": "MMkJvSXayYxxAxa2VhDS3qzcoNUzPU2QryriXt8VESKy6Fx1CaiAYqoSEpx21cvLNMRkN9WYdgeoeo2SWLgdjjJ",
  "key8": "3LYkpyFC2oyBWjZZhLki3jgbeFuFMFLr7p1hxbGwtasr3KzeNApf4N3Rt8WBn3eNE3W1GfpqfDr2PYpxhXGKDTgx",
  "key9": "oJpRkoHrB23GNZeuHhgfZYeByezCtWEb3D88SBKJQyM7v7Qjvp2XSZcu6pZiunHaFmR3k2resy2Rq6CrSSryGyW",
  "key10": "3wWWuJbucAG3McJi9rN32T9fKBCr1eo7QDx6ePV5aBmQhfqJaaigxarEpqSLpw9XgoDNnY2hfmrXLLFQit8NQYR8",
  "key11": "3CpUv5SkQzLbZ5aUHNtUCQYnCcUduqp5ticKKCSEZoAR8FtkB2TD68GLnQwoifwPTfg2EontQkGE1TdVZp1dEfXp",
  "key12": "21NVPN2RZr5qmpubYwD5q6jB1sT1QawoReWmc34AEyhBjD9ZuEVPw4TyeoAQPdJwVo4pRxaaGbaM6Y4weUw9Nbcw",
  "key13": "32RV314m4NP12wv4Wo35tVD7MeLiRs5tYA6B5WwgPembS7ZrwHCUmGyzhvLHLTLX16PFDUV6oYHchhLtN3cHTbQf",
  "key14": "gs85Lr5GfUL88srUR3LqL2sNH15p5dohhmX4Tig5T3yReRDivdEGrNNwMr6SCUifY36igp4EV3USdURGRdABD1n",
  "key15": "5csNncG7tLTJc2pFB3QMUv162adCgpMKzMcPaXuwbh74Y8amKaX4D6GTzzv6PrEkMC694T92Ku1cJcDN9hFFxFfa",
  "key16": "eWv1yFdA3YNoM9XxGP9Y7vZzxB8F49GvMmTLCf4qxfz5tHktUAgPp77FrfCQdmVyPVvsb9z9eTaJ4J7PKYumqT3",
  "key17": "3FucAYZFoS4hsdwPmeUwymoHARzHxGKxBMWc5GeJfXw23puepLiC8wqPayBMo3QByxJ47R2HQsFj1d6AVq6WB87i",
  "key18": "5wtyABHVEaEWJTJ7wTA9vNDjWcgeFV4s1BoZR5aysu1XYNYoXqjdxrFiiFAbbHngqUit2BruNvMbLKGxTbxVps6K",
  "key19": "5cZKmyR1kFDCbMWnU6UVXxP1Psfj97RpfUFhwUAC3wG9qUt2ytLsSBS7hTv2SeyFVBb2eYLwiAG1VbTpMrt3rGEw",
  "key20": "5E2qV7EN2fWch7PcwrCWQYnLkaS7YFfm3y7J7U5q9RG8iSJQ8ZZZLAxJftPHCfafeWgNo8wXrXQzo9LuxtGzsHv3",
  "key21": "3LEbzdBWrJuq6jCZmzFFPEjRLcqzigge3jYP3qxqAcqkz348yZCqmcov9G78Ba4SYPnGqfT6MoEo4iCYaXHk6bW4",
  "key22": "67UW9moxPNZCMTx8QsaZKuJ9pm3m6L3dD4bEFW5Gx5EdMRdxY7tVSzKvy63gwsPn8WBN4L13g3ACNUeyBjNxr9sd",
  "key23": "3Xjd58P7WRQzqn7WWRWfD4NN2x4b3eN5jVe5ZypVvG8hXPDWPW6df1DfaqjR1bkX8WNfdAEMeU98jBxXRWVK6bpj",
  "key24": "3wf3td6zRvGCnm4HkW3hDirvv1sWRR6JxqdqomZNrfqxMYBafMVFgTFKqc6orSZsdNYWjt6or4sG4EWqBoueQ7pc",
  "key25": "5NrqXnNjdDbYdE2E7n38TCqg1W924MkrVyUDK3DY5LuJ87tQSk6NR7tyqZQ4nRiwUDpFGztzZFJoeeVg5o4ZzYPt",
  "key26": "txDBnQtDJaij6Loxvot4bEnkGqvfgMv2Hr7rXDFjJot6xwSWvFBwqXdqTmdasVw3rNs8dDuN53mYDz12neAaaQB"
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
