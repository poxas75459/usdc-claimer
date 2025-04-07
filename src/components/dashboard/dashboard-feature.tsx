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
    "5rMuDzVmLx3HZZkDB9m3bv91CWR8SufL3YBxTsXRB72KV2bfRsKL2b7XzeE2JVAvV7NSp5Sxj7yWf4QfotUoNQY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6Y2EqVdaED9LhX5ozxpo9opG3qiZxCzauPZowFZifXUP695yZW8iJXC5TDqSUfMwGdfd2tX6votaH5fEKoZYgZ",
  "key1": "NXMQAQoPbs8WhmarZZcn76s3cxxQTHRSamgUCB7FG2vkcfnwUqG6rDfRfRhaDm61Xr4fhcFheAnGmzorH3NmXwU",
  "key2": "2GWgNPFGWHYEsDRe8nhZThAhEnYBf6Xx5apMSJiBroqPv4rAqnWftWQ6YuLiGjgVgDaYKS4cQwF9BGzVQJGZBRG3",
  "key3": "53dUuXTJGTuY4pgGyPMczxE8w313D7aVkTAeMRfsmvgdXHXZGmYG388RrtLb1v8mTMiQimL8QfFtd3GfYs7oGFue",
  "key4": "4rPpTkn88S25q3VrEURTa9c2UBsjZKuExNdL6pBxomCjnCstBkkKWNroVKuqZvL9hMcmutTxGbKufr17Es48FeJ",
  "key5": "2sg5Z7xWHSs4siykMma2cqeQ2fgQXe6wffYHBp2wTxyhNEB9mu5urxEdeETJSseZtjbHutgevJxNGF4fJtTu5BGr",
  "key6": "AGY2fuMWVof9v2ngWDYPJ9ZnDoitJQqcFQQPj8xndue1J5wuoXTQfSg9BYVLwUtxAc9PF7DfpTGuCYRk2ZF9Gab",
  "key7": "2shkAjsPm9VjWRRWrEVF3FeKmP8m5qK7n5qVfQZ5DHHCiTWN1R9JCiL1Ezpo1LN4AMLXREyjh3LxRGoKd5NcxbMo",
  "key8": "3WLMpJ4bSsVK9A34snPxgfrxscLaG2cCqjUZbyK9iwmQR8n1coT3fC7nyBYTSbvqwP9YYmv5TFmC5ZsJDcvb9oux",
  "key9": "4sRwENsTDoQQEJ7ppgWA4U26JmsLRMuWcQq6W37Ms4WK3BzLaaxrK5LyF7jq4YWxPdF8djno6Gm9jCYWMRkFPy7W",
  "key10": "5QtB3nSoejbyRAb4FXFzYQHHUVbGrRQ58Fx8WsvWd1UDp1y6rYXmCnbtnZ16vJoiHYgoPyxwudEu7MgBHbgLU9py",
  "key11": "3DMEdC32MfBGKvq6uQ4sbPqCV8mVqUoxUQE1xbKe5AkxXyMX7QejFFQcdB4Dht12vKbr7ehE7AQGLyBaL8cmWELM",
  "key12": "5N7ZKk5ffx4sNW63E7sLHkmiVRUd964kJT6CMCPvvySqPeJkE55aTvUhb8P6mKLmtnQrTtJ6eZz61FzSBN2bPcdU",
  "key13": "55ebpBPhvzaUNmG7AJkB8LdJdejDCAJGpbgKot1WMd1M8MiQBTAcdeZQu9vKi2NsHUxwoFvffowmUKr4cDNvYnTv",
  "key14": "nyWLABDzsCzeCFxvdUzGH9dfc8EnUXWpSP217b4yRFru5AMbQuaJV4ztagno78bNxuoghJugwLKV5E6YzAbcF3b",
  "key15": "3pvurALUQ9qhFd2H5xpjNWWAzoYNPH4Kmwdu8FGhqKF8F87BpprNaREi6SasJstjeFjqituAKKvSC52tkTMgiSWg",
  "key16": "65xqSghsxxw7tTbjsgn9RFLgMndBh6bNGdMzFKDJ3hTHXYCvtQtgG2rvbadHBzgY8xd3tWcbJKvgExt9MXCi5fSP",
  "key17": "5mng4zmnZc16XVg9hzzeB3XGKBgJ94yqZ5DFtVvcQtkKGp3VAYmwRa3uWMi4yzpNGYHkpQVUC1bBoipp9Q7yYi1D",
  "key18": "2MKBfo23wCQ38AeScr6CDd5LXsPawCjx1udCTZeRjFjJVcbktwpVCgph95WfDkkF2xXKvtSQiL1PW5P8H2HDteVT",
  "key19": "4X8Y3z98wwxpxY86CZawJUdFB2ghVQYd3nXuieUEiUqEyiEmscuwUsg41P57uZZyM9saCmNLvtMDvGhGCgeE2wfp",
  "key20": "35pWKsshRdR5xKdEpnKrMSdZJ8DQdYm3kJobkPw8yXEADJvNM5Lm93jFGCEGMNYhDQVs6GEt1uKbmd5NtWfnNoTa",
  "key21": "3MnuDF3xkqwABEfKMGUWEnBcVb5pdWopA9JEYPMPBFaSw7y9pbinqJLCzdLcDQFjxUDWsobupcR32NntH88rDTus",
  "key22": "5QD9wacaqxdeNJzaW2AsCHEmzN4jfgp2bwCqaccM2jH6khT1TePgJKeFtRb1z3ziNdKRJaMmvLTgoPjZ8bAANe1q",
  "key23": "3kowa39N5yEXLxk3VcCSsXUyN7VjpMSQ5sS5dfZV3eX3nBXTf8W4ucTs9MoHq3T38j86Sz3SwRmQT4vDbPZqV4oo",
  "key24": "2XXiZTg8QL47mrmvcpQLTWasnxrmLjK8msbBSG64bXFH2m7qh1Pa1RG2AL1myt6E9wBk6bYA9QibvyTHewKpeQK5",
  "key25": "j9ZKRtqgZWQifGCQGow4TG1ucF8nBzGLa36rctsEmYDxW2AMyTzi1QSe3KRiy5W6msxNngmEhPauTrHm2MGvR7D",
  "key26": "53vEDw6goLSdkJMCLLFAyLha1kKarb2WRoYSn3o2ifCPAfMTSKaJDCtrfAmw5Ec2DASEhWJ1RXKxS8xpKFv73fWY",
  "key27": "53v6YQrQdyeSJbQSjesc53uyB1bq1HfZXdYbk2WycKjMXpFEx9HeXrJHWvSFbgLVsXTPcQZUDCKp37EQRhdWntAT",
  "key28": "49CFTMUCj2AbDtrpzbAf8WrcweHXckVnJ7HLJMEu25PaRRXZro4BBKkqy6zM95rvKKahGd2mCf66dCHoWUQ2Swmd",
  "key29": "68iNPGAFX7EvoLNmMjuLSzzbgAXBxDPhLcAK4UeZSNhJedxob39xJn7aX26MvxZHp9sqCrJGvXBn1Ef5G4gMw43"
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
