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
    "38cW61Ehf6dsJ4RxwazjTQRFoNRvu19buuKgD4nQ6EpaWXyUKMV98ybeqWjb1DSV72TmqzhqspYnakcMHurYvwXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5niFpZPfxmXSWY9T81RVo4d1JmA3qXbgoo8gxfkz5JaVxPQcGsspkXtDsugvBFmXNGDNAsjVUGVeSaWBsTEaU5US",
  "key1": "35XLJpLFAwfFHxaSnMBQ4D4FJ4s948tkLKqNaQp9WzJzzCCfKCEDEezxWbsMxV4DqFHVPXxuGGhR1fNwtXjiqq1Q",
  "key2": "3Usvges79bC9fxWRqxFMMB7cQ1zTimaLPLqNK6dF63z28H4yYLnnK3MYXtjaiEhSRYec6d4mUwk8zv8bzz5Xiyxh",
  "key3": "5qDVaqA3V5XdR5ihvApHGHvJBWWQwVgpdFMZCoFRnHEMSiLNaAMx7H4h4ZDU7mtZodwbjaEDUbgMhAdUXVJgj23k",
  "key4": "ABaPtcDFZ3i9EdDkqDW4HtuuTsh8yR8Chv9kLsNVR6gNNgwn1doTjg6pGRoz6zGoZjoJvPNFWt5FytkAvawKfV6",
  "key5": "4tAqZ2wpdRBQxgsSkpPpyWhvNbUTwuhvRAvhAmtJjay8GToX3AH31uCR173YCER9HNx2UqBrFCQZZpxawR1KpoVe",
  "key6": "33x1wVMpGRSFaDbYKTwriVym7yX9FQPGPuBf86z9DNXgYVs85TPLv26Yuc5evzCmYba5iWFpcYpUtsFai3zw8r7F",
  "key7": "62N65H1m5aWCZQjX49yygknGe4rEZpJr6LWuDc8jLeY5Sp3GkpB47ri2X2rhUVi2pMgrP51nWQdbwpjL2uiHQLki",
  "key8": "z5zSNK4Dk7xDVzmNKqQVBdBa8dUycsQgrHShLvwwe8BdTbU9RFyzzMknUye9BezgKB9HSKaEVgNjBWuMy1poUvU",
  "key9": "5XVXmNsc13mcJHU3MCA2iW47Q6u1RRHREVYnAfjW8Wz9SHXRRjsr21c34eSFdYKKGBjo7BmEWpy7v6Zh55xoomcf",
  "key10": "3ChxBEUaPCCPAJsG4LFKFZaRXEmx8ibsen66h3D4ToED4XztFUt3aHurGE7vmMKS85F9bhDhVBogdYV5dF5W1vYj",
  "key11": "5HuL7YaMJqjqvocZrts2VYkmdYGLMR8Zen8cew3XQFYdecs2LkENCBWjjfnZQ1bN45QngXrfZh38oxSJzF6Ebjg7",
  "key12": "5p6ejQGQsX1FLNuGEChxoUnik1CWnVnxgTZuMCxrAtdbqsVEcyftdi9gvVBGoQdKSipXyXHLYL2RQ6Zbq4hFrun2",
  "key13": "2n9qSkbpjqcUN8ui3PXGwqpbnFwMePXu7KqzHAVAHcEkcAcq5nUxDD9YDFdZT8GAPQLbpmFTXx8EbTNvBZLuNVPp",
  "key14": "3q4qdDN9Egzh9zgG476EDCaxB1FUgZEnPggjHTNq2waz2wx8M1tAxcmXVSZh8yEfu1egtRHPrv7KeASf8zQtNtZ7",
  "key15": "3kMM6adiFB4Vcz8pjeJCu38W1Nwh1JtSHorCGp15KowrUNYgcH9LxrrjP88nvej21jH7rMZGZaC6P1o7EzRmqzUs",
  "key16": "3fd4jn9Jvv6njKNk7Q6MSsukZ9mkXyTA2VLZhv2DUcUJh5rm91MckX8SvJtcVAuFReu5Zxpp85nHejpJdjtczAfc",
  "key17": "4KdZLoep6bXsMeAgVviN231eeRxwV3ZstjYzViNoi3SUo3k4KpW7VB1LQuotADu8VHned6AHS2UaG3YkeLxtS2Qv",
  "key18": "5TrUBRArBXFwrTBUms7UmTozhv2eGtcU24pDrviT2dygWQfxdowMnne1HcWh2R2KaD1TbC11rRmmrKdah3v5KxG2",
  "key19": "3EKst9gSmsTPcPFYJFnCEHWKbcZPxG6EPPQVqezav16v2TUMcNtLPADNxhKHihRPMzqXbDsko5e41X4wzAa7Gabg",
  "key20": "2z3DXCNWf1GdfE3PaXdoTDb2UaPBput6W8apwgE6v2YpJtkojqBukbmQJw24Ckmjvg2SJ5D3v4WTCwriehrfZKWF",
  "key21": "2y8iNs75uqh9RqqbsmEbxVJJ3gVWqai8zXwexWJutJ3sBf7dnxQCZQe2DrNp6cAHC9rpKGX52ZeKNMxkWjnTN45M",
  "key22": "2hp63DFVGZ1X1fxXvHRP39StYxib9fygA8Xh73WQNnbB54XpG8Yp3L9kNPPBNf65jQGZv76wSG7fVhHBA5JfofnP",
  "key23": "3Lt7qgZYN9KHLQYsC7gezuZgj3x2Um9T5v51Ljoo2L79VBB8xAx4qfqBtyvLA4DzizuPbNhDdoM6BwKmS4hGfcvi",
  "key24": "uNF7u2PTmJDBQhpQJDfgxiwC349nww1fUvf33mcBLcNYuK4B6ZauZV38LwngvWv6ctdXnA9CXn7XEV19SMZ7sYL",
  "key25": "5kb45pnMhhZHr52wjACDQf4v5jbcLkjRfyUKsqaL6d92o7L2zyVKQYHvqUdQRbGnD1PeSJj2Jur3r4vdLV75vewX",
  "key26": "YARNucmzNA4MXmoLNhbETc2U7W5cs4FLDEGANz3Xk3cwWRtgDSmomESoqS7bZyNqJVvRCpTMQ3mBS5SDqR8LsMb",
  "key27": "5QNzoTeLbHKV27eUAfUGgQou8FxEB4rnnY4ZQUZE2qmFQubtcTAfDJm8ETaN3NUnhBk29Uoy6t5fBH4o8Rfhogcu",
  "key28": "2DHR4pqFNW45T1pzyMgd6maEbK8Ve4FL71FbnMiLiFqHapQHpssGmFTLyQktmhqmE2aSz6cZffDPo89iGc6JZND7",
  "key29": "3xuutn3py5cJQjXNKsLvK1EpNSJut1QSfVjp3tD4B9rDvv8FeAdf3x59KFb7xBePc8SXS6pWQsEKqbDMhhp7GL9X",
  "key30": "5EQ5tYfmcmZ3Zf44RTwmYkg5b6JH5yNFmFtgb39T2JT1qw95HzzqPMKsMjy8tF8SJTwnMBX6Sp4TmFN3btm9hozE",
  "key31": "KdAeYczxAa5waxNVkSwt3MSGaJAZH3nVz9bQ3JhCQByHXojneAnm38YLsESRpaLDY9fx8Kb6NtG37pgKHyjPxz9",
  "key32": "UKJAZqSPRQAwekdzCKdFu3pYRfqM8YqCcL72CSrVnP4MTTf1tdbNBUV5BnmB5jkKfDut49yEPKyFS72QFjZNRco"
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
