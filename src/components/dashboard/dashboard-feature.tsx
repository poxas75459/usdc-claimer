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
    "2Xu3aRmATpE5NUgqTfcFgBrJMw2NUYrrtjbezY96YaWhanfm9MNPbd14B61WHVV1DcU3mHT6Vu1xNStbtinTq86z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wHWaW2XnnjbKB72GTvDj5mJJbwAC4XSfnFd5mkALwPaEfo11hPgSLGkppnzo7rBZ1z6xKXhmR8yshkjijFasK5x",
  "key1": "4UYjJBemP8yshpdr63roM3ocmrwRHW9XY82fvkE33Jx1rptjJDrb8dio6ySci9nAfptLbu7Y11Lq9PZB6g3S9F62",
  "key2": "54SRETtjFaskrGwucsK18tHTfQsDkhZFCmipvummaH6RvNjDkcmHPNkBugGfgAm6nvRYspb5J8TuDeJjzxvBhwgi",
  "key3": "5dGLhVj91eicTKD1ZnEDwNR8T2ySsSrQQUZNWrMoD14iRxHfLZwxytPXmB4CM1iJPZr4arJtUY49uycAdp2LY7Hw",
  "key4": "5jodpD87ZpNKtPqUdYu9nJhWMp5Bbok6MtWnQkKAJY66U6sduH1k3eSQsqoCUTBgjqaRVzurPGmjxbBohfMxhv2b",
  "key5": "jTfV18YjRH2YufoPWWeghnsesLCi2gUTP6hDkg59b4mv8Dhf7U7HdyFW8yqSicsMiU9JNyG3H2Xyy8fm6zccEhL",
  "key6": "3DgAzKbCtExtknsCSLMLEky3DVVYZZZPd6ZR6QA9Evm5D9EurDJX9RHfZhgWzReR4QL14BVtLDD4aSgcvkYcaP6a",
  "key7": "61rApCpm9Zanc4DvoHgDRFiN1q1jC65jLZkJY4YHTKwYFrCZct4PYQHFkHfgtduNpssiRULTPVbrL1qb6vuvvywT",
  "key8": "3jNxyYWidhW7Mh7QzbFBbnuw9kWcpki77HccigoeeRiuxDFg36qvfwtPJfjL3eWoytGGArtttSiE7nSLnJ2MfMSo",
  "key9": "qQy3SiDxtohMxcRWA5xhiHoCZyVdX378UPRZs5HswUpGgJVXpa4mcSAYps5GrJFABihiPFK7r8xPSgZNH3E99eC",
  "key10": "2s3gB3W3zXXbyXB3fNQMqNBASqZ4ratY9wUs7aNj48m1dvXVBKnyw6fSr2fU5aRAdWZBepBQN6XZ4U1CEfzeVhwt",
  "key11": "iTJG1sYa8UH3sEZkTx2RJxKFqEKUr3N85y9ZrrJXNKKdNG3Uu2Lg28wWhd5nxhwe3oQzBZuVLG9urRmLUy5gXFx",
  "key12": "4Ydv37ePNAQJhDa3hm7dA2b3NNVqiMNKJuTu7aXsWzZcr9zeEhNogGS9UJbZXPXq7XdVJbCbzysnXEgokiADA9uD",
  "key13": "3gQb5Jt96KnomynEB1vPzhm57PwWofWYhsAPmmgRCeBYM79LPAxoY3aWTDs5ohsu2YhHSUuBw6yLPAm3dhycQUkS",
  "key14": "63KN2jjvKwQZKuojNnd1gAoHNV11TvrPYCn5fFjNRSQpSJpwoWossVidk9EszVam948TbMq4nFxKJV512VzWEAbt",
  "key15": "9kmcKFiPXrtBWsSwaMv5Q2FANwFjzWrz8Hy4y7epbgApRWarSK3E6ih4YW8kSvSAe7QwDL1q11LQqY9SoWfMmbX",
  "key16": "398PJK4euWNmZqMnLG5isvAC7cnyeZwk733djbdGQEDTtHSk4HuTCAdCAiek9ydeS1mdPC4Nm5QWmyfVPqpzfTLL",
  "key17": "2drP4byXrMjS1vZexgHfwjhND6K6aw9tRrviN9bR3c4d3SRhxNYFd3cs4apYtNVHYuVoGNw4arywWyyEHQGxFZqn",
  "key18": "3fgKS8hTxXJyaLUdk3jDqgsJMH3sBjWEDoTNjy8Q5NTmAK8zhssUZK7axTtCdPg2Rrn52rueqoDxuECabJ77wyKz",
  "key19": "1WequUPRTuxtDWuJydrFtCm6ZgyE7MAAJ51sufXpMsK3HVjDeQy9SWxcPmGH1wkt6WH7B72S8AFtZGWZwQwGbrA",
  "key20": "2QYUJzfZA8aFBoaWw9Z2F5kqp8CQ4Xs5kCbTafcMHoq1q9Y4rKWmC7S7ruyDwM7Mbm1wpu1mBemnDZKCKa456CMP",
  "key21": "5H8vTSu4xU57245hkcb8QZX8b8YSR7DZN4AH1Yc25WfjRaF5MbQ9hXPwrRbSTD6KPBDC6xxE74QyKmFMsmdoMjg5",
  "key22": "2pwAujGe6aqdT5SC8oGaFRwGXhHwteobCUp3VasZKtir3yPpVVYZim1fVpxxqzAN954sS5Md8G7DQBzFj1aEjkMY",
  "key23": "4VFXZ3hizcuWNWYocR5pdyS4xkmxMe9UBN4hpfSqhFqiQJ38t2acK5wYPLvexA5L8QCF9mFWnXmTAKxwm8YMWES9",
  "key24": "2EbGReE9sR6rfxuyU1LXVENgEYV2pV3KvK46T5oUWX8yfN6DfaejTiRzBy6WxR4zPBb36rwsp1wtdgC66LCJnVvB",
  "key25": "47A6Ba1Fesg337TY1MFZxvfEY1Hbq6JYdRiMHimU14hUuCUPv12dk7p5r48Cu8agoQPTQV91qz9WHzvSLBeZvw84",
  "key26": "5MrPQFtTdQiJHaFhi4XDFAx82RWz72x3XA5N73oWkx5JVW7eyiUZRzWkNMmL7VSotYh8MpsNjQAaH2WjveKovYdf",
  "key27": "2dkmnBRCoZSGoHn6KpEsavBmmoKthvyLMwP9t4W52TQ5tMvkJjiRRtLZLPEhqpAiQJRcJVyvcRMCQjuuvAKoBxMa",
  "key28": "nfMyRtQUnt8AXsBuzU5WYCSfJpZatEZ9R6KfxRA7vwAjqVKm1mqdTBqM2x5CJeGqHZ7kA4i28h3xpoHjHDpjSc8",
  "key29": "5zWGd7J7C5vxaWaVGwa6gskMyinxWU63tfuwbrmjxkRQBosu287FP1rvtXJqJZdnqn9rjEYqwopsyLhU81MjsrEC",
  "key30": "MWyj2N5rKkJUBhcFzNnyUb3A9hc8FpfN2ra4mmKrDme4pE6kmt8ZesYHDPXb3FTedCQmPwPQyPU9HKRhw5BKZbd",
  "key31": "25RxzcUoHZTikMNTQ5EJ46Y6NTaZfMMG3h3pwxpBSexfYgngSpmCCinBNZuD2m3Nx35AAGCRSBnmbJqfHFYZcCwi"
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
