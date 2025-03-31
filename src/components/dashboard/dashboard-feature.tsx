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
    "2Tg1g8rZHGycZvFFzsMtcHDP2C5vMnMVGRabFCMcueRZQYadYYEr4yX4nDapjDwMWkYyJkzxJZA6QhSre2STdYqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XsmapDMk3YLrKo46V5wERyF1ZfQvUUobYkUbRnyEuCn1qy4LRhVqZxuUaFG3ZhLP3rRvpmRHnphvLEpi4JAaxRG",
  "key1": "4PoDV6feuCGDFUWeTEdxaEQdxzUQnAuhz21AWSgSRPqfVXEw4oNKfm9vqVHKJCDQPAf2TCrLnVmfqNxUtY76LKp4",
  "key2": "3kNDGhzVXCGTXxsLpHr6Mbzn2dwt96jtqGRBNwbRdUpSLVutm8YyT1EjnRgkJjgFbXFiBkgCFJW3n9QaMNDxJHvW",
  "key3": "4WXNnDen1H4hJbr9YynzHLBoEDaivmVsMzoKRTDL3HdAKFUxDHBp5Z1hgzXTJK6cunUAVn2qDVTGo2UcfSnvjsE3",
  "key4": "f6JLLkhW3M2euQZBeKZuaxqre9DwmfbKeXcAQra1N971mVdoisD2r5LJzCQ2YvaonMxta4fEgbUwd2TQeA5EZv6",
  "key5": "5xNcfdJezrrU4hWFUHHqhXUisoCUSvgEsoZndPbmBQV3d7RehAGWA1kbi7fxuBAJ5P1e2qjS68hDfcQUFnPGbeW2",
  "key6": "59ffykWNBHMfn3qaBWzgoMKctztyoms1S1gfHHQHnhAMZVqJ7t172qJzc43ZuDRJjrjKf6RS12Nkqm7WrUwiWL3h",
  "key7": "3tJhkRvNKYso1rjrbLHGda6nkTv2MGwULK4jRBFKbkor3N2GHxktV5xfzwd2hDD4V3AP5Z67vLqLMjQCkHXyvaJ6",
  "key8": "z4GH7p8n2MfLKaeFaqWCQvWmgC3NqeeN1t3sRai82SRUsEnWUWaMbxtWoKz5MfPLqGViVGt2nSgJjbiZcJwV9ft",
  "key9": "5wgqwx95ge6FfApvVVhaq8N8rcAGFUbE9FciY8oK92S864JbNtYuQUKCGCxZFojTowU3MEEUzHj3CcDyTPfpAfSt",
  "key10": "47yDiZUgH7rMkZVxSoccLatd1tL67XENi2mvdLHbfGGXyYWD8u8hC6CBTogFAie9a5KsCfJVNTWYPYqKu8DX5NAn",
  "key11": "4H7Yu27Vs2JzZHe3CgXa6zW1R5U2uro9yHQU3v6ExRsiRp2qAQpDKZPgrgHYsAKTKsXmZ4gHezVL7zMG2gfVaHWR",
  "key12": "4vAJ3Nmkz9ogBiJc3bS1RpKcdoe2Rovn5fiBSPJC4kC81Q1xwEQYEiiBS2ViK78nWs2pLKFonnomcKFb4SxXNq4k",
  "key13": "ACsn12UnwiE3TqfamHdk1eA4VLQyLidS2vzg8K3horke8VAbwczgoLKibHmQ7jxrnfpHhzV61bu3utwenWCovjB",
  "key14": "NvRSRXbp4q8Ctom1bkyWguvYukckKiHjByCHzmj3ASXLWmdX6wk2YuXnZuhPpjAefphwmKgoLYhHzX9ekygHrLB",
  "key15": "2DE9WvNPwbkuLLJCd8pWWQDFU84Z3FRTHtPtiCWWw5zcpvYBaBASuug5q3ophhGqLC8j4ifgYZigK4gdjXkftGyT",
  "key16": "3EcZ9hAb6fwEn6eJgooyZ4h3QneWztcDURZqqLRLhuzoYScnxW7S58JXGnNpwmzm5Fbn6swYVfsA1sCgdBn5rh4k",
  "key17": "2HGZBJK7XQNQPFyu3bxExYk1G1oemHLiG2KNviNCSJoCpRcFQZDGe6w4WeQzBkxvpsNtRRbfHA9yLCXah1DdNAkD",
  "key18": "5hbW7qm2SnXuDLamCw19CmpjKpncXQByLe6tb2j1nG9BsepRuwUUfKxGqb9XZGyXhcrsS1h58LEjxoLByuicJwPQ",
  "key19": "4unm688i5zJU86h7QMrNQbPcehXTViPW3TxMaSMv5e3JDn3RzBFjpSCRCvS9zWvsx7wzADjyJ999Et7r9xgDctxW",
  "key20": "2YrEWpUMnAp3LwdGud4hC9EqKoSmq8JcNh2BcjdujSZ31tcx9MGX823uT1QiG2XZFzUKnSg7RgmTKpr16Y4sJnbB",
  "key21": "2Xx2GJF3f1HBQHZEbGxHZAcL8hTsbw2Hvd5J12PZ81tWH8Y2CvW4yzA7krXGm2RXSdEfndWGSkAyvVKkAe8HRJC2",
  "key22": "4zNAx7Pb5zosLRQwWQJfycxj1AHZvUQ1vfvhjNtV28j38NByLUTZqNLSKxprSHPWZsHBXbcsHPpnSxAxxkbR9svy",
  "key23": "5e651NjEdTuiy6qmNbjUoEWTzNvUFPBnegt6hnZKz4cazhP9GtC8acJK96NjCqSFefGPN1N9mXwJygqRqtTT7YEd",
  "key24": "2BJgLP5fBQTjs5s2dQCGGJqBDiyv6DVpLj5USzWDz3XJ4JRRrtqtFiegxNCjkQeXwV18UALLMnsSDL75YWhMXSHd",
  "key25": "2eJCwETehKQor4x3hD6MfguXSZmDRoj4evPUNtTEPeDHMNetJJgUbJFMW68hZdT8em1373nBTStSpEA793vtvh7B",
  "key26": "3R3bhVYMi6eyE3YJTNLwB3rorZGzFoYSmn2F3Jyyz5MFRRVKDHKPFaomjWqfPHfjqf2qsRAhB5ngnL8TN6iVLcB7",
  "key27": "4Hyj7efvUMSernHYPuJW5QudsWr1tZvYogFCqciU2aXxHHvWQZURgH3xmBe1maqJrbxBman9n56syXtLYDbAr7bS",
  "key28": "LXVxWCdYYMJEbKdrwkV9yoQvhATvDpQYDZy7yRmnZoUoL7opcmBtZZWker61jwpwwXbVy8gJUGvtaHC81RPg7vn"
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
