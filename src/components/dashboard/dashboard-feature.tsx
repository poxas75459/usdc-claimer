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
    "3wqY6ZNVtAJq55YCNwNoJC4x8Dn62whqodMA19549tHjNhmnM1Y3wXN1gTcFUtJTNSWThpLMy8HZdihXSJ2W2r5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2abcDjJAvMykfCHonRzzMoeRMmQDCXTwLpBMV3JvULxYbRuQ4mgjJGkG4JwAq89kq8vkAue5REkNgmE1wz94Kpa1",
  "key1": "5T1RETGkg6zXbK1cQqGci3oqbCubEcqpFJkYEcHo3RRHNWNLcA7sHSCnjNjzdvr2ynBtTHetT1EQhzWCQEPKfA2R",
  "key2": "mfNHP5JhHnwPMCNeZ81JK1u1jyGsGx33LgJnRQ8vx9bJD2DZJeXGgNzJQewty2qPvPDWvZ2eRx2W5bTT4oonP8i",
  "key3": "5QKEGtkVtugMkmfzrkapLxtaVFDgYPRWgQESF8kPiCrnjRC2Lw1jo5HcmSCCMoo7ZoJqZ2HnYWuoNGWd5U82X3aN",
  "key4": "3PwrWUPvSoN1wmdfJxWqvgakVVwQZp2xhcHn16CCZKZZ8dKTf7qK4HSCaV9Mwpam2Ryvmxi2nmRVtrRvdxTMCQbp",
  "key5": "4NomuYPp9EHDKGiQTzGCWnNzFV6UoY1MXBye8T2SVy1iN1PWZc6og5H5kicQMtK3fagiZhgCxiBRrcYv9WmrtU8b",
  "key6": "4XHrUBrJp6rzcjGY9uRfj4v5TddVXS4JuZibW7xC2K4xacnEs5wQ6kiwfQjjZNMq7UVC5GC75E564a2WVL9Jekrd",
  "key7": "4ck5oydzaAw1mUp56toqSqbtYPAwCqNWy5vWqxopPaMzqRT3qFg1CDLvXHF2ahYbEVdhPRHi2n2m2jZHEbL9rEyD",
  "key8": "4NziikoSWCEtSfnUari8eteNkyRMqkqVwVaGhPUGRYaSG1QPJvEXzxJUCF9xk3b2eQk7wLoHx6Vq5SxzwDcXcCCW",
  "key9": "tEeTQFdjH6QXB6yynBzK5avDfSq7EHudWUMvrw2zAuctS3dbZJBzxyTNcKejWyZ7TSbcXdh85Dzibif2KEDzKVc",
  "key10": "5fhjn9GqVHX9jfhM2vAMaHEcHfxaFHcsa7Ft2kubEzVF8ByJrqMCBqgNKuvQozi439Z2NX1iv3rqCu2ATVqF7jUE",
  "key11": "2wFRWanTLE5QRFanTywPi8bWpfygVDiaGPcLsoeE4hXkV1i1RkjQUAAa7vHZ7UdAXDp4nfntB8VjX77vU25wPwRf",
  "key12": "2yiLngjzjaFCmZr7eCnNs92wmJHMFssWF3Gd62rsyxvrZnr2H2ZHnqBqfAuBzvYY7J9Qmr94xk9TvZ7VK9Fx37w1",
  "key13": "2ZYYsRoZvHd7qPtzYCAmViWcTaP7K8UEA2mfRuGjPVAqq3kibgQzePcBiw4nZsPfhr6dtLK9eGSoTcskRajJS6ww",
  "key14": "LRdDTpuni7fScUaqWEbXj3w6nGcWpkAzgicpfozhgXnS5Wgk6Ep5LSAqaV7CbvEAJ9APNQpJ7MRkmRgZDHFEHst",
  "key15": "3fojgEyL5zvjmSGQwmtC2ArBzXPGMhfwGa5Yije6Qzq7jrRS5DbfRandyi7wzamaz5gu4ER3HxMvd36LMGmkdHpk",
  "key16": "57cUgqXV86dq3g1w4SrbQm18xmVmSWMHZCReSwQh57su1a8aMuDWJnXoJGNVP3qHZx8GTE8kvmPtEyTFoaYeykum",
  "key17": "5q8tnFw97H3e7SFh3UkiiKR58Z8dmrcHVbxs6mYniQTXW2nwj4WU4PQhZ5GiujiFhuWytap8wytSMtV6HyzaLU9s",
  "key18": "5Z4EUvEK6tj7EonwYobcmPWNHFgpmbW9MNM7o7h3s3oe5B6LnbFmgQMapox1QWb7kfq2yDQuW1Y2C1BiMkF5JYMP",
  "key19": "5zGVNVKY4YQhE8T11UmAGmXx7PreaMUz1YRLu4srzZSzjv5myvWoF1Er6mBoZwzF3r66jrELxxQhUtLJcq5zdn9V",
  "key20": "3pFZe3uZaT3pRcZUfLmWCSMyAQMcda7XHeHgGXcpjEPr7yfYikgJcYhYoZzAVTZUUdn2Bkg2mAgK9xFaSfCP85dW",
  "key21": "4Y3jTFZJoDFU7mxx4oofLxMAZfga5a7KviHgcLgLVeaVJ7TTCbK3swcDMwqMYBzAJMAaobPWb9dCYhyMyntLp2sm",
  "key22": "zdSS6Y4DEJBLtZyZq45C15g8Dm9gwxmqXGCmsHhNaa7ov84fHEaVB6P5TuQwMeXHSS1D3bH8bBwFSHMuWfiP7xA",
  "key23": "2LYx683JskJdspc86rViMdtazSdrPzqonqhKvnGGwFzd8fEvw7Nu8v9CKwnbj8Gy41wXYP26zPoPtwNqEZWbiQwE",
  "key24": "mzbZ88uMJMkzbGmPrGguE3Ftc7oC1qutCfWog3qbrg2YP54jGkdZFxktcUTSNrLvvGZDZvT3KCfVLRjwGdGujMN",
  "key25": "42g6v6cKEfbxWfufKix6o15WNLxNVfuzkZqqosCdavYMr3773X2RcmTdSaktji2VyZCs9nMtRGEBEm4C7sybER5w",
  "key26": "4UmoNZ2noiMih8vhorwuW5FE9RhcDUfW1UW9GA215yuF8oNHbuwkyVjfVS4JqeSEmY1vtXqJLsa9qqkEdfJCnMuv",
  "key27": "2uvdnfFkoEsxb8JmXdAsULAQCkXaPA4SggafJYaYBuweJ2iKvDENbcsb4RQ7Nogwm6hKG3xKH5wPZmW3utYiRJJx",
  "key28": "24zvEGYt1PEKEy4JBj114yNk1K4spkT6qiQnfurhrJR7jSEa8iTiEUt8ZpF6pN2a8HBJd7rEyMJR7X11heXV8k3A",
  "key29": "2GAkcDJyewLu2cHfLiZQGrs2j5KWahjCAe8noKS8HQ41yHSSGHmaXWsWCErrGtHFGrjNPG4CvFvP6esWtVTFhc4n",
  "key30": "EsBYz1Y7UL5z18MFaCWFWZqKJ7Rwb9YMZP7UW5c4k8yNwVpnRrykBKmXKSJdu2owKdpADMxgtBKXZ1pzv4NN1KW"
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
