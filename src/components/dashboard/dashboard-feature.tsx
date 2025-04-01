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
    "5voGeSSx3yZMbAT3SydTRQyiVmvPCp4DHCYkMiRQungm7sUdBmp5e7voayJxbYpkCcGp8UcKoCcbmiSq4u7KYzf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22iu8Gh94jGBSmdGqNeuuvSMX5EV95cHM4zfg2w5t3QQ7RU4gGLf2eQ12WoyCfz8FxMvKrYopA3xbTTzfwAjv2pi",
  "key1": "Fw7tWxuKNGbrUVhdP8Rpw4R5eh7M4gePFjHgoqFgxu4keq6q8z69gie4PLbqjPhL5gz1MWqduT1zJyp2th3pbpg",
  "key2": "ajzjx1LgGLUyPjTmfvQ9FwRuSHrXtgVAG2ZSAxWUeqrojKT4XoDVwt7DzkXwjtNSoSaVS4sBvLz2Z2qvMShb9gX",
  "key3": "53Nc73XVmfSetpPSErb9nGPvMuSHwnFbRtUFiKV8JZvtM19xPzizs98mcunipmfyvYQDUCN6ytS1Wk45Fj7mXs7i",
  "key4": "3i3dmc6EzXeQoHL2u714xnfo7NzMykizTMorY9SsQtrZrt19BDBpxTqqRKQweB9jv4hwbzXck6Hp1zi7ZZ97QcBk",
  "key5": "3JRCFBmGcTKX4s8E9gxVerruK8zXkVQhwG7zvSqbomksjPFbAoXNK1RfVhaGwUj9nCVBN5JLDLji8er9gSP7criN",
  "key6": "43SGTWjBsfZiRyWM2kZcZ64zQgEWk6TPe5CTJeEE2iRkpgPeScXbmCkoXn15Aa6KREcX6N71u2J1hCK68QCUvnxr",
  "key7": "4nR6ouz3zyDQteFuyR6kMQHcYPdk5cHzgfysuztGzvJPtJzg7UQ1tHAMBh1wHqroheifxu81TpjHqBHSDH9qz2qV",
  "key8": "CJQg8MPcsk8a1R6wbPdK5PtaQ8vYCNrdfjSfVCvNUBqxtZxArN4NvrWfCW4Ck9kPCgVpyXF3cjBPJFRGRUGMNUu",
  "key9": "5T4XjAPyyWhAUcemZt7XUtq1bWSJF4nNouq7LzvNzAhAmHJrqEmFgmHZKxhFvqZeq5jDgrJtJLMrWWiTX2a5PUEe",
  "key10": "RwWerGaCQXRDWeYNC9N7FVX7iP4f77fh5iGMaC7Kjv9KH5FFk5had1MBk3phqdqQzYmXmKBrkkg365MAq49bhVD",
  "key11": "5wnMdcyL6Q8GhgnzXYfsfXmPvNxw2k2hs7wds9dHNcKQAAtrsUacWdpBW56psEaieEHhZ8sv3j8rXXNk9enf5LmS",
  "key12": "3PGaUM9fUSVgm22vznFr8whcFysqKvHXVLS2CgKjrS27CbuxhMV5HQEk9kakr9R3PdvTNRFw5VfLXwDVd2nxBoDn",
  "key13": "5STvrnVSkVjHsbz74E35P5bKPdxJcdKc9sje7E1xmUkSCAMGyY214KamC4mhGV6q6fRFou7hF6qLs9dmCZxcLPQ8",
  "key14": "kBA4sCQEYmGpDeyX4Zhvc9Qc4djBkUdRLHUjuyZRqmm3Qn384GB82BY5kiSe89hS5Ho692LYjrnngqkmow3ULQU",
  "key15": "3ye6wZhkEBkjf4AxkWaTLkBLvwZh6ELfRqNSKcSTpVYCWAgByxm9y7ighe36kZWkNwWuFVTbK9gfcyaLD73gurSP",
  "key16": "54CzzkKqrHqKszVTs5DWbiopcE4GEqX9vcmt2p7sk5Nyt3bxz6PjmW5P15PxZMcakRSvGARNJTLVd3awZQ1M2Q9C",
  "key17": "CtrHoZGmnTSYi1EGdL6doyFZmHfQjXfErZd6H1DtbWPiL5nXLtKuBKKtztdBKcct8FKZCW11mRkg4VheRVsGmcU",
  "key18": "2DsSD3V9gonPaWcVi5sz3CkVDrkfTzpkmwMpRqM36FW7cMVJ2FGGqAnPuigYQte14u3u9UVVU7khvtdQ9oT3q8TQ",
  "key19": "kXnvEz9xufeirm1DKUY1GQ618oETGE4pxVAKhZd89E3zHQkSBppyhXT6mGkWkAeVHeUmPty7h1yPAti9pACpgvG",
  "key20": "5wq5S555pZpiw2pZ2C4Y8kV2PsT4ynCSdg6KNmXoKumgHc8TwbgbnbKCDuPS17sAH1ZNP4kHwuh7E6cSgWwRQtku",
  "key21": "2Eu9iZP64fLYu6k4sTsUeFuJAVoHWh2Rke9652Upk37Qy1oNZxQzr9t3khtbX3qJZZLSvm8E37QadujmsUuBH23z",
  "key22": "59iUup7cUKyp3xwHSY59R8aagRDpJWEFtdvMF8PXAFz54T4TnLHH52DjAje5gphPj3V96BXuCuHZQzxZNH99Dy4F",
  "key23": "n1tJYNokUgvYSW4M9Ljd25DtnrKHDA6GJAy8S8jwk8XcCJtejuEVkwPQNRHeGj4uvax4gLZmxukj7NvchEedfHe",
  "key24": "gcnJwyPNuiSW2EovPHLSkjqEb7m2NKEEwaHs3ZGBF4txtAyyKPJhq6ykofEVJq6VcbwNfmLbsHaXigrxDjCu2tS"
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
