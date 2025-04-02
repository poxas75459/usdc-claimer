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
    "5Q6jFWwth6GF5jDKP7ejsN86pF5q7UmFZATxE2GwuHEzwTTgzxR5NqNXyRYEeZhZ7UjJSuMgLcfhpv9b1y9dRhFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48airPEXKVzSUm8aZdURHH7QH7AC9onBnMbfsrw8XNcKruL1CauWYko91RsayffsqTREtmJnFmbKS69ppunVXPSb",
  "key1": "23J8dGizNjKC6fJt6fmUeJ31PEYwmFfgGeFrUZh3sjiG4HS37npbh7saU1GRXBuF55j34KkwwgxGgKSrDMrY3Kb9",
  "key2": "5dzhc7mPrxQ3amq3GYeq9krxt3Amv4jD1zqxkF4EoReNSKAcd38vPu6mMhts2M54E9RkW3tbvvmgMoJfM3p2dnKo",
  "key3": "64NL5zMVb9AbG9v7SLQ56bBkNQV4HyrzQaaJu7yGE9iXmjEDbgHiGAmyrFNLi5Re1RHggDwQ8xcL5FUe82HZStnf",
  "key4": "5VBYrqoHADCCnHSwxRwJRi73tFH9dz6LTRLhseqLf9EVxyG8JsBA38VWw6QeJQ34Ezhj5JsEYHdewS4gvY35mX3c",
  "key5": "3zhTeEDS3RbxbBVh6t6hN2N9dgDD354rG8t99xtKdDjU9jCQdWuxNyxcMy63JiAqLW85xei7LE1ubxW2jPL42Atd",
  "key6": "43qtENL5C8DC3jhShjVrixsVzqDy85tD6MPecR3PzbPyGcnNNyAPaYQpgaD9YLJnWi77siDdea4iWNAnP8tEp2so",
  "key7": "3Xfdc1pZ8u3qAfYjxMaHE4WGRQc1twHFTC4PJ5E4V7iAdo796c16AgMnDTSwon8LszT5XHptJCCisnHkpDhgXL12",
  "key8": "5DqFzYTu33EXccoxUygjT46grSLi3YxiJ2dnh9ohQfAKk7n5a4G2Q3Yb8MThjZnqTz1To69A281VJkRQNjnB7Jhk",
  "key9": "2a2189wvewt6xoG4MviGegUEVDvAgZayQcJUfUAQnB2eyciyFcvBS638aaJirN5Hkwnpey8WJ8d3zuEy4eAbnggn",
  "key10": "3WN7SsJHq7UxBxowpLwoC4nCMxcMbesWn2vQZGqsobeLApMuYiEkB8KMNKWcgWRnrbPr19uZexF1QhnZy6pn9GMc",
  "key11": "391p1GT7uWQrNAVkVSAxbnWPfYMcRwj8qBcnvvEYbZRV5YyRnHtYSKrpe64rog9nLXTK7SDmDASgMgxiFMxLo4tC",
  "key12": "56rkvoHYBTkEVRyNKdevUfhsZkj1Jw8SSjJYKWgexVVNDz6muUCHEFzY2NTXurbF52CxchsAa4wKiSfCRs5P14Z7",
  "key13": "4Kg9qtWdDtGGoZGMFG8v6RvRF4LEX9ESLZix3hr7NJxqLnBq19DzjBh8p6KEavMMrKqaVqAekjHiqyk5Y67BSFyF",
  "key14": "2K8Jwsurf64tf1kvb1GnBmb2iSHpq1ngkvkv3BLXzK53Wy54nxApTqa5HGmbBqbffcUDQKFyrJdiA4NcEc7boNQb",
  "key15": "5wo8pFYJKcbMLmJKyopZZCGkdD5GGPnqG8QHzFMrLuBCtdazxFrDCJXrN7jsSXh2qHucPpU5M2Jh9aUVXkkBfGqq",
  "key16": "5owpgkMDNWm1zRRkKQMg4n5YnRkytLuUCzj8jcB6SWmoTndvzkKhXrR82S65rwpaFnKxt6td4acZ7qzmEFTSpPE",
  "key17": "sYqoVJzjVtzNu8zQ4mj6dUPc4YgJtnG6psXBdciqwBX9jrg7sy7FBTuBUD9VnB6pSYLHmWBwiSL6g2WFs8Cv9Tg",
  "key18": "4oDQyEpW1jdQU9KMxMGAq32HTwfyxGbaJZPJd4AZzguQzLGRwS2w9eo3PAS8EqNjgLbWv27i1prnYsCSsZLkmqDw",
  "key19": "2juDPZNxF2yraFfzLbs2inaEz4MwPrxtPnqcmiMwVZC1PrSY9dVNdtWwJ9Ee9iJjgKC16EWPCspSCBZbFNJfkh7E",
  "key20": "25MJMCRagbWewjJdnLQL8oUBmxg42BXtUH4i13LexxQQkwSRhoXs2EgL8gT4a1xAKgr67ajjzUXSoWdhTewTFHvs",
  "key21": "2u8xsMfJJdozw71CSjrN5TuH6pejwtSa51z8qY1wY359d45duz5gSjPkn7K6ACKTPTn383PAoMdPMDqjgyW6m3su",
  "key22": "4kW4L4FiZ249oKsBRsTwz33Fphxojh13VDJMrStF7eX1tdn39cDpSTwgZ7aERmv5mmdWikUytbJWcCH1q1nbG8xU",
  "key23": "3Zfw65Baua8LUFXzwFZZyUuA1r8MLdnuN6CfVurQErgaWreAYKJaFeJZEJcEtWUFbUifmg6F7ve4wP735tvpAt3B",
  "key24": "2nuSMmDHXBTD3cFs1n5Gc5kSDiCES4pDWfWREZaJR3BQ7okC8bKBquYJrxkXpY3GnVVkWq73MJQiAA1V1eb4ep2t"
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
