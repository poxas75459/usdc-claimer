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
    "vQ4VMonEYZ1WBztcGuYjm8AuCmsFRMfGcwwRkvhiz8ATXjVAB9CvTAPHjqevzwVSje3Mf7LB1WUZuLShwpYLG8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xyi2knYwnnx6tZ5NbGxvt2NV7pdLDEoUqnwEVwYPgT6BYTnZyCQEQ8sBaY16oDKdPVW7gCikU9RxpDxkwuLXbAq",
  "key1": "297QaM5VQHr1gUPNCs6QdMYD753ehjYuMrhVLUrhj8uUw3ACpcMUMaC8aaq7uKEeM2T5aDjrZypoRNP5zNyvDdTQ",
  "key2": "52ZN2b7HckcMhd9qm52jgoExMLwAc2wLc3PTS1FfUL8SA4Ypb5VCwVqZhzp8Q2VNGjC3nRT4wNde7KdguH14XD4h",
  "key3": "5BjemTHvKKxrVgWKJWzCKuTEiod6tgqB44EYGez71YBYu5g8BJkn5yTMvMCKVyRcHLhw7eYUPLae6D9JN5tismtk",
  "key4": "3uQ5PzU3m2JGqsrALC4rCCZQXiWaCLRfhTRzxRyWswrGSg9gPwAEHff4pUCc8KhjG3FYga5GpfpwNukP4YnhCnCG",
  "key5": "55pno1RucHrZKCFzsaqfGKVvUyXxzza6jeWknitBY9nc4GwwYqu3j24UEkgL2duS5spc5hV7BMrDdDJg6wQ8MDe8",
  "key6": "4iSLYSVbXJCRCWurUciyreGXWg9cwc5yMBmQK7KbpuPdWH3watf42V37bDXskAirY9owqFc5iTEuSwoSr7muJWvH",
  "key7": "Zx2DWHmPdfrbUTivhqEYhoGkW4SSSY8rrVzbjopNRE9PXGCNvTQydbA6L8xiLgJHQbdnsxNNT78nCmd3Uphqwnu",
  "key8": "nspHngmUYFqeHjNtXm6iFAvhDtkcnv1VurDPu9RsDBnLAbLn3T9pXrh8fyd2P9kogT2wrZN4uSfuXmy6cjQsnjf",
  "key9": "2AViC7buQSKNsCqKAtLYPpP1diFWhMSNtdK9eCZgYjHjJPVE9nEiLRVAhRpDCkV6e2gfQT2NJstYZzV9qu2wjCzR",
  "key10": "5kpKF4pWukGi7qpfMVPgrVb8qYf59JqCk9jvG75mh9Q9Cq3wGreUdc5v4qj1PZpQ23yFjTo95JTeTbeFnQSebkAQ",
  "key11": "5K9oSy2m8BnFCLcEk5YF89RoqAykXjhz7pTfJjKFf9wghDs2sKpZxdnepkUCH1hVRhiK1EGRM5RhyF1hoEVMKoSV",
  "key12": "RLLgZENZsaTM26EuU74vafxxga41QdT6rVN6XS71zkfeFo9c3v87FWZLFNMig1u97QLm5TaVGke1z649WqTDjP8",
  "key13": "5M4LsAZdyRePpVfR1GpmnyPeYACzpbLVRkdkBtyzGnZTZTmBCBLpC2ccJbHSeF6zyw6BqCn66jUudbZodwx8n4mK",
  "key14": "4JqtHmMim5HYQrA4KNhH976yo3F9BTmV9unkGNzQGdztvXjWCUToiWVbvr1HE2UkXNd6nkVqjxy56zQMFnnRHfiu",
  "key15": "3TKQkHCTdjJ59wXiTKAuW6hxHU1kGzJsShoB2NkvbvuUkon93RhxtUAbbyVBpaDQrMehEadDZwDFW1Z9XrXPATcj",
  "key16": "4EwxvDRg24dvuvrBbZKkbavtFd7PsC5AursPt4UkrSDtwA6BjZup22DWvqcReETykE27Xkk2zuQMhoDW374PM45S",
  "key17": "5qMg5kDZcpLZZehscFn7Wyq3VM5Wbc42XdTuPCanf538c9znuYHNDFHSSfH6VsYUcQJb2jBxWmUbf3S64r4YnYSj",
  "key18": "56fr9KtETPu2Xo7Ed9VtXGdgsC72P3vxFfUMaNKHtPp2kzgbWYvenCj7MwFYymeGLH4qDLz8WCz99uNhkMwjSvGY",
  "key19": "3vbGrmyTY3NhbdDmWe4TeXGPiCdYo9n1nJYP19L26D5N7wMsSF5QmcGaAbqNcPrwSMHYruiS72aj3idr949EiBhw",
  "key20": "3CS5hESWj3gmfMwVsH2U1TPm1H8usrvUMbwn38vHz6fUPmoRRnCy6qY9aHNp368UwUT9hk6CTDyB1DvM7rcNjc7V",
  "key21": "XPu27idMAJV8dTgCJ75nvuXNmVkD1GSJokY9JD44tMNX2TxgHVQunccjv4PuuXkdDtTxsX4jv8Uq4uudeAsd5Dn",
  "key22": "2WRih2y4baxVbuTzoy4gUfefdF1kowF2cTwjAXbyswsJVZFkPxqDHKpwdLLFxGn2LER43HGLxrwNtvXNtnjFQxSv",
  "key23": "36auDacCdJvNk2ihWKS4LkLogh9vhiWnnZ1BAFq4xqdjCkhBpEoqJr9BEpPuXnTVUCiDC8o2go6oNhyz2epwxbeh",
  "key24": "4fNEBJsjKvWAsEc2m6R4GqW9V4XgWKkVmp7TgFUt225tuFEFuEGunCooM3Jnz5tQQAZT7W1cLYkDTCv21DcfTe51"
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
