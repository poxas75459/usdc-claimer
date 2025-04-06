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
    "2nzC2YeEmR6jT9WKQexxcdpqoWqZKsyk7vRyzaScYthaqqwNKxsbXFMrK2kgwkZiC2U1JajtJ2X8s9eHYum8yJNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3joAfAeykWwrhkksHS1jHnAAqBtdCS29WnNrEiBPWx7pQJyZT15Ln83a6JK8JGwPCbzNubE3L96uusoriZmLP1bS",
  "key1": "5drPV1sAuKWaHpnrNRPZv6TgpN3Hw1LTH3c6uoh5neCFHjEv8eRfk6G6Xary4baLXUZuuNcVke24NjvRz4LNHhsh",
  "key2": "24AxYk1hrCeEo4PD8EqeBs3mFRiNqEKeX3tA92UeoSMjGHxKfgLPpo67GjueT2ZgQc3tEtK2oxZPD5Cb68ik4sud",
  "key3": "2B44c6SzwPhtd2KUC91ZLjFVEMRS3EbGHgvvxcZKgJMCBcLyrPoqgfQQzaSHqTYUpg8EYsN1AW5siwb22WpKy1YZ",
  "key4": "2w6usAAqDv8uYwrsdvAyfXGnS4zDgwGEgCVzY7SdjjaeezQFbHCYwiLM4DSwRtXg2xvrWDficziQU8fFbavcxggs",
  "key5": "3Y55yCZskZzDcoxigeSJwnCSQWkVSe4PeJ7LEkydJrAYyJL4sh2zQfXN9LeMyWZhdEq4JDzxx4eaxobLuyBw8WuF",
  "key6": "3AoGwRcWtM1ia98HSxykepCf5hwjYh131oit9AutxgyRPNCXT7WKYKKRk9yeMFHwCEbiNuoPT8QLpoHfNDZoi3UF",
  "key7": "2neVkAuBmzsqq4hhFohMSD7adiNybyNCJwryoysidrDML9biYzmkuibKsCLkSy6nowk7EeWhwmHZkFfv6SaDw1GZ",
  "key8": "4eq24DMzcJ1Bz1b6qxSj3CVpVTF8awp7v54WshNy2tayzky6PVAisDJApF3ANAtzfTvFc1Wp4h2uqrzmSETSCSwt",
  "key9": "4MYJ7MqGjj5TGnQQ2o9qBAgVD97UgLopMeLrKVfoXrD2HdeVjkgjBF4Cpa6kTraHhNFxzXpqMdd8xNSSakhRqPNQ",
  "key10": "Xp74LfKKWigVdY9L12Yt1ZYNKqzWjmnhk6yQWzAMu5G9xFk8rTjNW9wwp1B2wcDXDmNaNT4hetckeNUswzCqzvq",
  "key11": "3QzwXZeHXGdYnY6JFTvJe7UTQVF1NGn6MqKHzBKqpUavVh46BV4u6eJTZnWBVsvUiVZtyKzigzkFicrYL1kmf3EP",
  "key12": "5ZiWcjCEAzB6zjmNWLqQrPZ8oeVVrLpcpumnzJyCdphr13k1r3DiFUELQt7TqPbhHsShtDRv6pSfjCBNQceUM7gw",
  "key13": "3DqKVUyCGjAxWpmF8YS8Und2JgSeR594bYHymFPiaZQ2dxvYbNqELzC8iiWykjvAbkG1R13CjNWmkTjhVD4DXqjG",
  "key14": "4EGQoZcfnK5Kw3xQMejtmmxtiZXLtz56aZAjgBSuTbMkEnnW3r5BxU6DucGuhNfr2YdziM5ScmA2YvmhejuzfUFN",
  "key15": "3sYPVhpGnx2AhpDSMN55xoRkDfviEXjUdZnV7orJ17fuScRreiVu1t6CxhgXYs7CG8FAzMn8XnjQW1uoLJVFGics",
  "key16": "5NP3Tw2YA1vsYExDv7GdRDLqJxN2nkxx6MKtJwwiBKecWq3EGtEfvg1TDNozh3dMnSsJUoGWCewbNKtbq3zaYUx7",
  "key17": "DttaMPHb36mLj555p1SRsmYfnzcAwtTHK9tXiUJKGmp9VFQpEPv8PCQz4v9Zc56XfAoYNyr4pafQZGxZesN4Ycg",
  "key18": "5YBLYHrVZPMYhkUnGMcSDrfhHqfLGUs1amVGDYLGJCH4S6DedR1cMjh8DqEgCfKFo7YyGJa53T51BGM2Rvh3T4YA",
  "key19": "5ZTu2rNnJcbDzg2A5qGEBXNQkthTooLVQFfPyUR6jK3nJ6ZLDyhch7s3UACZdut99pdSukQEevciEqfFiBUDhALK",
  "key20": "379uxiXhE6D84KLicBKem3ejmccPP8KRJ6gDxqykweDz5Q5JFcXpJWApnM8ZGwbgz12ekuHfJbh32QNSbhfY2thM",
  "key21": "2pATs8fjvLMRS2L7SP6UXmrXtnwqrtPefYhMSkAKiVqnR9Jb4xWeuKwNkanMxy8Gdki3ePzmEMLzS63FS5CpnCAR",
  "key22": "3KtfgfEGCTsCPnFDz2MEbkCL3sg2FinY6hXuVnCJ8Ju7vcoCoyGux3UTcbfZMXFE91KXRu81ayvxYBUrRz6T1bTE",
  "key23": "5ZxhAtWa5X7XBePgDwnSenDdE1Zq63EKPCjGZLLdgRY1fNnCDvuDA2a3q2KyAD46cMNPANoSE422zo3UA3G2hzpL",
  "key24": "kjXeEmfzfrA1kdiiwUqXnRXcDhbAw8kvGwJAkTbLZLf2gG9AhkS4rTSUMFM6fRhYFqw8AXAJra35WRrCfoGPKvT"
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
