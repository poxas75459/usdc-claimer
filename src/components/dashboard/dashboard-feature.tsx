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
    "5ReNAdKa3cfrJyrBd3Q9XX9opJcM8HsEwKHsZ9LXmJuhKqV4ojP3kSoyDrAVX5kwW7pM9yqJT6UYLGY6KfeH6rNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XF8j2mXS4yzN1698JQKeJp4HfTZ5iT58UJwF5Vja9TuNWJgHRt5LwiJ4gVwEzXpMcqHdsNFckZW6Aak7CECPLSc",
  "key1": "3JTSNGRNaDnzDh8bee68RewZFFhx6rRvPTRVbAenCvCLsyJx9bSpSmdsva6tFPSEoXaVm3QrXfuqQFu7bPQn6hFZ",
  "key2": "4Eesnfbd436bsEVReTyyD3RX8JMEvU7ZCgYoJSD1QJk4zJcecVTVToWmWFYkKXhLYpFm8oWBR7nu5NNEprRkFHrb",
  "key3": "4Mko2wMQVSEBzDK6m8LtSVuoW3Af14LjipAXNBpiCzCKnM783UYswhjrVAkkd4Fz1w4dXRg6TdWvJ4NMFkTQ26CZ",
  "key4": "4eVZ4odiYd9bf4ScszxMFYhd33wfy6gM388yfTiLkvUsXYn3ZxjeP8bRgFrEC8aVHbtArAkfct8h3RfLr8zUNwqm",
  "key5": "3GaZZYepDNBJpw6e7u4XW2pbmw3MfHmADSwNC3J4SDnfVxBUgm5PoW2rwGNdZs198bJxuLp9B2AxXgntybkJ1eho",
  "key6": "29CBqDwJKqXVWDY5frWMSzmBdr2ELqkT8mGFvQMLkfCN3vt3TNTSyZQZLn6bWchqGLJLMWG3uYR3pnviBy6G9ER9",
  "key7": "5XhkehqFbeMNhLnHC9uhgiYX1cD3S69EUWpxMj3uZMuPos5Ap164rq4LUR9JYhY4fe3MGXgzJe7QwskSEY7w8T9x",
  "key8": "33WkdLhm9FfKEnNqKT3kzEYZyRH9fuunVTeGi8LFs6Wx24JAjMqg9MZ4Tdwk5H87wcygB8QzYkrQjiKPLPXfkpw1",
  "key9": "zXTWo2N9tomjgQQQa9zr5Ldbg9xJscmpv38vHB4YnF576yEznt2JyTAJn3spGiesEbdV3eLujDJZkqEpgCChgkM",
  "key10": "2qL3UYkDR8HT48EzDqyioW9nQsTAseeMiELC9ktiYL3nEDuY6SfCqvLjKerFH9b3a2xonLd6JRSPYZDMnGVH62sQ",
  "key11": "2P1VjTTR8m122G95FY6Y4QKr3CWaAdVy4kn2aXA4Dkz36ZPWyPALz83JwH5zudoP7JPvTeau48zoE2E2z1hqaiCM",
  "key12": "63vo2QVRwEayp4eUS5wa5pPKDZj17EpF8WiJ7tANg7DZs2Fs6EpV3mfzW2aNjFWTyNxvuCU9Bx1YQEvcSTQjpt5z",
  "key13": "3i5NXF1sEg5auUTgST2ZRZSTuSh9s9BRweRkMgN3hrxYkJhyLJa11AtsegJCknJZQ51npjhcwoz4wihrrcbzfQzb",
  "key14": "5ckLmEozYVzoSN1rqBddnoRtSj2tSoboWVDwJww98HV7wzmhBQSQuxwiePKjkZj5yUgy7sa5Nmfxuc4pxbjYxFTo",
  "key15": "2qPJGuGYEXRshWsSLavQThHpNua4g5MkHcjrVEHqnR6cncvodcVP6MpPfWu3TpPb65hEtsdvcHTkUQzby6rNtwQx",
  "key16": "2bEUcnWS2aLCkmiAXWbbfGSkV8XZCZ5t1VpAQzhdQB8SqVsJBYFke4qRRciBxvhchmoms5ELWwgJCbEzCPi9aj91",
  "key17": "5ouU7xHm8e9VjBUenvns2iaXsC8qfJNemf4ybgg9CPhLHPEEDotrsZPs5wEyAv2uffDsobmtAj7rScMZgBsCxmrh",
  "key18": "3HCcoB4JzyPbPeBUpdj4KXiWFNSPrEjnjuPqJjiAZybDSLX1T4yajbWoMx2DuirkCq13E9xUnQRMW58y3z9CpXvK",
  "key19": "26crsih5mvkb36Cnq5ncfRiRD5k1fBAQbAE8WmvKUADgCnwtV1ZtmCqqhi9gNYNLCDd5En1xAoWULngnJoCpwMF2",
  "key20": "3pPw3pyveUFZ4ybpfTJbMkZXthKv9DjzAhjCrwEocpQTJf6WhVfGQuiobFxX5LHq7mC2RMAkSeZ1m2v5zFfomyrL",
  "key21": "eCgg8ALbPLKzVqf4ZkPnMwT2EfFckCqgQYcUpxN4mQfrAhP1wYXXZP7GH32z4Z6XYMiuhtCRL9d6CDHXFjJhX76",
  "key22": "39E1zFsQEW1uv4HCb6d7zSqkLhJBt2bmZ2SucnB8a3NMuJG3PFshVSzx2B9RW8ww7pWfx8jjpFCSeRxP3tTq7WQu",
  "key23": "2gQhKJLTzzdd2rBFDJ1d5eCPJogXf3PDWvYG2nuKiF6LDKvAjjAFYzPhdcRBHJLxU1HZwQyEo9krdy5hqBSqNNXG",
  "key24": "2mruXCiacugm9sU7bexRWvDi5GNfo41y6casJ8oeMTfRiHKA6C2XpEoGiuDcApSd9scbkCzu6XTp6SsEjq2rSecf",
  "key25": "34NHSYyVtTvjS3KpfH6jbLVcc8FQ32bS1HWtUF9FwsJuxnLrygnmwyaJj71aPCCSzG3HPtKFyPfaFAwipGo647LB",
  "key26": "2HTDG2HLZgPS9B46WGw5RZ6qb7AXzyLoruoui9AoURfBwYGNV3TiFADZhmXS1v9kPTMDmGKJ6eorhuxZHVndKXvX",
  "key27": "3U31QHqNGLLssv4m2nAjgTsat5EJuW24zm2LRkiuLYRFhaxbeuTd15VH4jV8XEYkVyCgvGJuZJdCAudn2kjqGXWB",
  "key28": "2NT1SCv9QbUjVPvuWH7sJRvfcmjFkUXpL2LBjJPwFmkmRwivAcfuPDzXdKvRQq5fMCuovv8tmBWgBSmUtvrNPdAL",
  "key29": "5UL81UuGFMXwwHCesL8ggUEMk3y1Zv7ZozJreA5jbgfro6QSezLZxqDhHTRSjZDpz5PzorgAPL6XxGTNcPUdi1Py",
  "key30": "5jj1S7prdBRSoy6K4mB1eV1kGcPokYbgycm2JkcTTtRwnnaD7LoKL23LF59YyPixXDynS2mJsKGJYnhdYWti13u4",
  "key31": "5yz2ci6apecEfXmX6NgqXKAxEci2F1foAQ7ieY2Pqwjsd6B3yUi78GRMHZFzo9LLjHraMpUYXCny5a6SwvrG2ZwE",
  "key32": "4WGfVVUWQDH2AHw1xSxsKUZaEhrvqB6R8iTruPk1zUCo6K3UHCbDA2TmUH7RdLzxgeFJhWcvV1SDKHpJUzgS1p7u",
  "key33": "tZvnxUJrWibNaxN9ShH1HYexpRzSvHGRojbSqazgSWCBsdhh2usMNNPTU6FG1KaNeTXMRa79EwKMWMsWi95qvGc",
  "key34": "3iRa8ZyZqWpQfhLabcBvcx3xCWmPVZfysrW6VARCSqPFpH6frs5Yz2UBZsKN6txizQjxqTvNfginzgHE15qqvefb"
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
