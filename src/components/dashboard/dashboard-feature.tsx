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
    "52PR9eTfH1MBnhypXn9Nv1bhtFAYXW1JZiUA2yScAAqxDzRxKs4qdUea7e7Wmo38khVVT64PkC2ZEp3yCLV3nL7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9JkCnfMjDsCndV2CCXsmdVt6dA4xg4myLH5cqVcXuuZDa7iLenTBYaLycHYwjGpwfRw8ELTYTjxLUzbtBvqhBbw",
  "key1": "5yPXT9Nn8wN9g4BDTCfdsSXwvRVAMG7AhnHdwsTGjFpLAzJxKyaLWMVFZbqCdmwofSjzePNzbeJgNo2nq2wndRJJ",
  "key2": "51H8YXsUds7QhG3tgqZnS4yKmXxKSGr6HQemwdv7XPcGTtx6cwoWGrubGFLutnnD9GpYfBqv19h2gFyzTq4tQ5s5",
  "key3": "4obKzYuPn5Fo3qZbmmbbR1LDfMJtJW6Rxk4UskWWgxHJMRh21pBFsJSTU4mJAmgasiwDK7EP1oc9aueXStHSfvPX",
  "key4": "xyF38aqaryMhm4v6j4yFCSRXGrf2wU26hWSpLKb9hHSLWzR5ZfL4P7p4jibnx9prQ4PsfxqC5pP1ZGRH8oGiZdj",
  "key5": "2jsbqDxLwdnmxGAzCzyoEmYtUPhWFkmomFDp3reoPL2LFqjG2JkVMbsbzUH3p2Nf9yzQaY8D1mZkDxYqoGYHJukh",
  "key6": "2AX6KMY2iQzfCCRnuZURiJdyZJZyQoZWFP2PVtStsczm1Lnn6HYYLURjevyH9btbXQYTda3ZFkdfmfNWVjjwZRM1",
  "key7": "5k2j2DPcFuyHrHfR4rx2nXkege8MTXVPA1PYnwnrskQzGUKWXV8uDMe8q4tBfjGKzzCKKVkJ6qjPVsUMdhhF6wiv",
  "key8": "3oWy6Q6x8LFJkXuWzDyjanE3gAQcgZZ2oJQ7QnZU9oihHg9gZUYA4bBYbUQdmgwpqbbjPNFWdc1ajnBiufhXjaCk",
  "key9": "2HmcwKvYKxLvC5rU5cZxVK5Mk3wVY7QfRTbpdF2cNZBKkir97F9RFHDM4Psn1UugFYoZ2NBpt2bzZz6LAwG9bEdU",
  "key10": "3aHQQ8dL9uPMcVd5wwjM1sZXiex4PAoo48mta7rvDVrhXahmjQJyeVHj4khsAP3iz5U6ZxAz5yLc8wVH4JV3vsGq",
  "key11": "4y7rz6mfT8nBCjyc5ERZgMX5K58fStzejUw2YtdiwHiQE59XAfprFjDPJieNLTRF5iXRT5a3vUHkHtozhWCDDPmv",
  "key12": "57DiMVN1PA7SwYfyCUqZenp4DEVWj9RcLsrvbomR11RadmNUPvZLSg46BudoCWp26Ahrsfi1LuAw78yZBhR7DrbT",
  "key13": "2cL2MhkuGXJxTqiZhqyPrev5uRVS5oZE7WCxvD5vxpm6uyELitUGreWft9LAyMZKq9PLAU9nbDCHv4NhzT6NgRnT",
  "key14": "5JTCNZvgkD41FqDQyQHCmak1So6cSSmASenj2C9W8Mg5mkSsYTB6f8zpVjyRnw8vKKqM7g9xcSxnR4Ck6t4qLgEV",
  "key15": "xrcrmFAVm9sBTS8dxK7nzT2pL8ekuCSN1iCYWCAL9B67ocAmCxgCr4xB3sbQhem3P4bFJaHTojRMExNcKkgBp9b",
  "key16": "5G3J27nbZSt1a3gv2Wt2SRJKkEuwc23FaPjQbJyPPtqhYpVeXNRKDTzuDp48WcYmj2Yz6ZatW4qrTK6gYDQvBkWJ",
  "key17": "2fN6CM2hCpxHHv5MAMJVpKtJmQDorTNMFCF5ZSMr6zQvczauNsoh8f4TkSd3irwYhqm8MPwhqQ16VhMNivoYp9kA",
  "key18": "5ZbDT3CQ5cRAearEEMdaZkUTTQfaZLLJMWtQguD1BfcGtbAaReJjSbgZMMSwPtfPvyAoxxFctF3nz48FsKuweeYH",
  "key19": "2p4DWXTRjpC1pjSAsv2uNdVFt6dsA66tmv1WXM5Ggxa5b6u9ThGaVo8NjzJsT6yFYMGPFccFVbPqJAMkFLyUt8Xj",
  "key20": "2323QcB5GmeBMEYpx1CBVFHm6jGpCzz7B4bEj9nKGwoPypMbFMv2D87H5Q9uW8K3FyGSzEyBte2HA1V5qMmkSmsV",
  "key21": "2cScAHam96ZCpvyEiSijv8znPiS83s46QMYW1XWv8c6CvCc48bfjL7fsGNdgkGWePcf7VQhmwx4TkswWR1tVDjZD",
  "key22": "FrvDr65qXtmg1sKnM9YU6Dd7eL4QxYorpmviFi6FU9qgVfXiq3ZLKN3iY2f3YXHMfwmrkiJVbi3YofxfaaXh3Wr",
  "key23": "31ZzvykxPj43ZKqABCdgCTK3tK5ApxXD7dDk1TixpMqvnMhfpFm6D62JNSVzfvrP7vqRnCervNDdHR6RCQ78Hz6H",
  "key24": "3W73c9zqy5RKaACMpkHQSyfrdsZAFhJ7Q1Xd1yFJkHggDKtFA4FUC1SwrpQdkLYSqMbsysC9H7SD2cNXb74qWtDs",
  "key25": "XajCzJsnpYjKKWUaHRazADMGsprjiKvobA3ezVfYs8jsEco22zaSr1xF4RvX7pNaW3QW4ayMCUaicAbhXQimnaj",
  "key26": "5iy8yXRosukJbYd8VXKKnXVxzmmPHR22skQp1WSCXkeD6fCa5PV9emGwdx24MNnR5Hm7WEvzGB4DB5qvnUzoyZC8",
  "key27": "48cLUTyYgw88zKRyJksJr2GyKsTJRFDTMKua8weNjSf3ffrdFkE1P6b3XXEPwG7nF2JoqWmZQcQPRrYYsTMMaN18",
  "key28": "4vCGvKPeE4rGg3ecYbsw3unDYxoaqSReyw3RemrjyoY266NSkDrUSiunWLZgjWB6vFt3aahvkctWDBw8ncZT3u5H"
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
