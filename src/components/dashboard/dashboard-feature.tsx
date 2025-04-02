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
    "5Vw1uka8eREMrjqDkFUyHJ2Xp25aELwftnU2sg5qxWx9sKGUn7yg8XVDVi7KoKp2t2SB79Y1ApdRf1sC8acfnM3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SVPqa3eSyVMKnjpazMSpadAcPkHYqkWL7aeAVM7T6icSp8TB9H7cXvxoACbQBReYgh9QQH4H3f81y5y9aKaPF3n",
  "key1": "3gmVwsy4RkueqJLHjh1wDSuu2EUXxpLWd3HHdVXCntNg17JuTjvLfiB2cxmLH85RWcaayb6gWmWJL5ox7W23Wbdy",
  "key2": "4ZfGtreJ2Z5dAey2GFr1sKLD2nbqDpCtKuLaiQcFRV6mqk9fho9TdHFMZkqLxd2MjwfwAxu7hPmcQibbG1Bj4de9",
  "key3": "5dJJ9ViduY3uakiHh8xBKzdsLyAQFG81v9UpCmvzdusqsA9jVgxiRt8YVswnqWYvMwwg1LrFXcv6ohcxXMda7Yk",
  "key4": "2UjyFdVoxSnohPhc22oRmvwnePz6s1QbDzAiNLc4EgH3WW7xj3svXtW6MFU5TZrgQNx5Pp2sSjzNbq7ggFjDGo75",
  "key5": "32WGiwfcdHCRHhijZLs3AQUFMbqcLPkMHVVsLwYRdmNT3a96bMzfCYXKTtGfzYqGAsJLW14BmgYKdhrzNkuixDUA",
  "key6": "4CidkUwY6ibwXM4YvuKhn4b3EkQcahaDZcQoYaVcnLm25C974JYaG6zARKzXZ4x74rAX3gQvret4SZRdofWDNFU5",
  "key7": "4p3KyLBinrHRMz22BwFGeMTv1Rq8cjrcTaTwVEhQn2BC3PcqjLSuuveXMMuhRhX6V2p2zN1CXwrfws3pUACM4KS3",
  "key8": "5kfkrUZUw3Uk93iKeizxgkWKwrSrePDyUXq5tRGGNMC9TAZJyA7zg4AkijuKsSGbvE2Edx3UQLLxYsszpSnn5kmA",
  "key9": "21QRSenDt9LckANkvVMvLWRbLAnP7DGd4dW5DS8c4qd2EjnfpjotnCieiD1mVucMDfVvF8KawYwaSdkp6kQACHbU",
  "key10": "2aHjJqnwa6Zfu9kzNVGQJnmcNzDm2in21ehXpsTVQv94UwGXQW6E8qaNYr8qfPoBftUVAm8R6g7yPLNuoX1YeMve",
  "key11": "21iWmyqLFTh6r9Gzqpb8FhPB1wGMRw7vuk93wXk8gwzhuUY6SHqK6Wdkw1oxf9NvLSTGs7XwNRGayex1kkRTk7jZ",
  "key12": "tduDjHLG7h273nf6X9b8uUj5KaxgmyX4MYNaYZeAi94HgWZBSfbfbeDPUFLJoxZV8wttgcGUtDYYTLUfaZa7qux",
  "key13": "3tZ9PQHsPfDdLY1H8EiZiRGd1dSWF4sjGVsUnAaHvKDXJhc5Qzqz4hcAE61MC1mNs1yGFZ3ZvnnvHnPjwAu5UGPa",
  "key14": "2vbxtDDQ2khcZ9iNF2TAjgZMtjdJtNZY8bd4dKXXsC82BF2ZXDUVdy6rXhw6fk5v6B5m5XFEaFQ7maeYzrcDywos",
  "key15": "3jADkiZ6Y8R7j9wFvrMwxxYpmGesLdGPpHWJGfDfnT5P2CrFv1nReaaMg1H693NgZaAjxmsH5tBH2nvoEcg7nrTw",
  "key16": "65rosAgYD4dYhFh5jk1PPnqdQh1ojw5e5iLSv8pBi2uKZp7sfGAmuhsiCKpQenNAAXMDQV3e9z3Mn35YgUnNZdP5",
  "key17": "56oD7FFrgDuFtF1AZWWn3CyrL5FP2Eucx9kXvPp94sRbi26gDXitce7MGcBWnmjZmqRzxxdBjGyVhwvToKaTtkbf",
  "key18": "5P7to1rL4e7nN3CQ1QCqRKA6QnEDF6mMe65jNKJRPzio2M2Nk5wMfhomUiPonq6tfruroHKviKF73P3oCPo2E8Eu",
  "key19": "agoBHMALSQkRkk8uA7HdDMUVpwdVJy9N1unTPNxvTeeFGS7vVy1JFLRATNuoqZrS258tBDZ7MQn93LTGjN6PEJK",
  "key20": "2mVCFedoY21WUX2UtksYwaVJcdHHpVAXyyNQCvKCaEVEJ6nRHtg8Re5bqj32sEgdvoKxhmjLwh5by6fa4y9fTVCY",
  "key21": "2wmkNaXvE8vUyZeJNQrSKTrUoiPWkQgHHkKnJvPk4eDvF9vjpwGTotpotHA8ZAXbPJF1mQzKtQe4LQhDpvCf9SG4",
  "key22": "5NzDLzZRWnzXphH1JhjWbaZUw8jLEFCzoUsyD5J6CMEJ3RGzg4EV5wPED6psaqm9FA6rD9aby2f6wmbJtLrUJRzV",
  "key23": "5RAoAeZZEEyYifWinf72VBbFfK9uh7EtW7itS4abuDMckon4t5We7GB2VzA4rsFcqr119XRH4jaJvYyGmbj4ngfX",
  "key24": "4H4Qx6MG8iKSnrafTvVg7draufCTxxtH1ioDjSCR5nobXCtDSJpGfLxanBoiv7FAu1465ojkUP2iXmb8rkZ1VfKA",
  "key25": "3MZt9EoM12F7rWHSPFSgofgjN7AvqLPrPxvkY9RF6n5trPAuTkpNx4Z5v4sBGrXBXdziRRgEGDsJTExCmWjtYSVi",
  "key26": "4oDTxTVi9gkq7iC4m8oWLdBCCxZ9etwdjwGeGT9L8UmFEUX3PU4CFE14NU7VEq8z4FYGsY7ooFVb1F5Y8yZMJo7D",
  "key27": "2YiDTP6W84K1awaWQkGKrcff7d8rhNRuEGxyVwzdsdi4i4p7rGUjFpZRLqbNdaD7xoMQm9eaVGRDyj877T6a6fjZ",
  "key28": "3Bv5RaXRspdGoKcgdgqkVr6daydrEY5FxYnzZcpXokDfzQutoLV7LPjiE9U2DwPZdRjpCjMXC5gY3LndpfYLCw2m",
  "key29": "646SefcxxqUkz722junEsZEeV9g3Jzd9tKvqDwXDgZgSmHt4nLT7rp51pzrksQ1KYRnzox6HNU9YGkw5DoPAXhbg",
  "key30": "3YyJSLUJmFgvDCCzHNwpK5mM1KTxtDocqLjWjJa3Qf164tDNQ46FkoAsqgAbfwmz6Ru6wZ88ThH4MkL27xvENs96",
  "key31": "2cJmfSa44MnDNY7Tzkzt8oCsCDgqD863Baff3hc5kdwSc2bDNK9Uam9QFQrfy4ZF4RWMrDwtWVYGFdJYnpw5c6uY",
  "key32": "3bhjPVNjd9VRwJZ3iQoHraYayfQN3FvUzBXnap1GECagn9Q9mxUribMTzAi3kskoWvHzypKhJqQEWWHe8LApjbC2",
  "key33": "pzgJ2m7fPXsZXq6F9vTjHBHxNLkkJ92Z8CcwAujuqM7VPsUNfTsgwcruXLaHHwG3yakiggC9TGZv6fiWncr77fg",
  "key34": "k2z7GHmgNti6xNQyLdJ1HKBgMZi5LXyxbfU7DaYmbkmx26NUhhj4bU8t8E6XPxCorNgRYcLG4h4wmJ6ThBGTBAf",
  "key35": "3tDy93gGeRF1okjw8BuCkC2YZ7wEBuk4xFqjuEzmrgb6AV8LvPckKGcvy2eNGT53aoiFq2sAH6Tp9gpx99YJEBhX",
  "key36": "4s2jBqTQmj97q5Y8kDgSzbvydqpZhk3yUQ1gNH6BS5qK52kRd4eNKjU52NEMdveE7YCUTHkbc51ZdjqYzNDW7Svj",
  "key37": "HaPGNiqoYBzYNpcvNPa6qfLAeDq8ue643gkeeYFLBYKaN39gFTHRahfU9Fw4oAcek8aLpWzNwZo1FJqJ8PJH9fd",
  "key38": "627hRYzyXG2Bhz5aPKKKSFJW1PcBssG4fahGVyZc6fSyqVGdrp2EyPBQmZ4w3bexd9zM4JnjVQMK8UnrEh6qhrHA",
  "key39": "qAgKPRt4qLfE38yVx68oZJnYsRxkjm2qcnPugqbPRr3patxekn2wRxiDbPtNAfhDhDqBc5TouEveAhtDroPqkzM",
  "key40": "4SBDvQLNURNudBeBcymekmefgvQa2pSoqTTfZ8h7TjrS4UYKZoDYCrsKw1R5FMg2CrWTU5HLmLczw6tBc8qDYaXa"
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
