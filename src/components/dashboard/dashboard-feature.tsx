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
    "2391TWoFD8zg3fTUxofAEpT9ghdsefFAzj6nJTiFjvYBabAjzTUeiCeJvbd8v77uKWjAJdAZdaV8kcrFrVTKARhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4chLwbe3zCCpSMqBn2iKnbEgpxzGZ2JGErXmRLWZS17PdJzyP2tEbJwJ7QxaiC3qTNmQgpgsGGfepE3VotoP6Khu",
  "key1": "3t2dEyzvN6xr4nDgT4ZFimKQhadxMZbGbdzvUEPtoVEj13KZQBSxLDH6NXitmJHg47BUsGHEzSe9a1pcAq6QDEkd",
  "key2": "42c1QbWDs5TMESYBKzweNKnKn1v8QHkS7PsJpMwjG5v4u4QyUUSpYBs29VrgqSDXS2naiANrrg4LaRtvxHDqEZQ4",
  "key3": "42L5GR8DorAWRqUwpXfxzUTMKjDyWb1DMWvzG8K5Nqw5QfjpK5x1QYSNfgMNhXATEmvAdYQeahjD4489f67afVTU",
  "key4": "4whAXpTQ14dLAMrAasqtioGDWey2G22zqYTshGzJ2WLzpNwWT8BZnYm9YTvxUV7GmRoZb3Wt4JBzCKSgddc7buzg",
  "key5": "2s38VyEXpazA4cmTTqizs6MpKsqS3D9ysCF2aF2KnGQym5bu3sYeNWNKFDoZGKpzAUvw7gHb6F1z8SGmECMNZrDK",
  "key6": "hRmUFp5sMWg9sn448QB258TGfHjp6ENour988HTmmycFWtKaTYiFsi3Yr4fyyHobB6VBoXHnzHx1XN1QrAs9T6i",
  "key7": "h1dRhCBew8wtDQorDLDkjp88wyzdonSkLv4oGFbFTZBSpQWRqHYJZUw1Poyd8AbA4hXCeXt1Ep528H7FxvtF2Bj",
  "key8": "3rZ5n4iGxkHM2xRF3HsfmuJF8fqnbnRgb3YtSEoeDTifKPNRru2YfLuEZm4LEnydJT9vdGqiH3YqsMfwtwgRS9Zp",
  "key9": "3fhhefzopet7SwXrYDUeSG5sKDhoKkLBaZkckMgcb76CUsyALLFvTPTFJUBE7YiVz8NfYwSk7yj9v2rJR6g6c3f7",
  "key10": "2etU9G3sdWLPmohC4RJPS75dqDQZeXWM28gv25JKfFcGXtWzbuMsXofTW3SVURGTGfg1RREs1RiGZrPtSiwNNF6i",
  "key11": "64zt6sgyDaNJrwXZbX2NJyZUexoeZLeAj5wPqsAT9XTKaLSACLKN9AEsUZxT1UctCSnUrTA2ucUqWp42TwjkTtaL",
  "key12": "3z9nuQeamNJf9B8XXqZdPdMEfKV7Ua4UDRNhPSUL7A4h4JzdxbKGbFKrfh9ZDo235dWsU3PujA7jwxVnquxA5YW9",
  "key13": "2uMH8bDFiSjC3gDRHfQhfU3BPR7e9K7MkrwaGd6ZPkvHaQBVuKH8kZYhNcKdCvMujyUyXEzczNWfcnAHWb1Fb4A5",
  "key14": "3yeVAbfd4ogqZE7HHkZwob7KgnDBiHNrCZy16kpv9f681kgGhvAQoGHBDEmfQtGp3N9mxeKq5VnCs2zZtPKMbmwm",
  "key15": "cYj6a4j8vkGenVqLBWQG3ueZRV9o7uhjvpzPE4a55jftLsobmCguepNBP8RcGtzjzZ9sNVvaAmt6arhYXsDLgap",
  "key16": "4YFjeTdYXBvuR7NchEhUVmM7fgjRPsRHBpYSiHV2Sy6Ht7onYcwgf1Ja5FLa84tGRe9Rs2xtADshvz3jney9gD5A",
  "key17": "9nMLbLdihajxs5n9f5veqZ64M5kkepuWaMkp9xoMrMagb3yJRng1ws8ZNKRNugwKUox2VnrwZSiufZSnazHFmVD",
  "key18": "37xPrk5weZLqw98a643BEvzZqGbfY1nPwnHALYwJzg9MQSnzPkVwTGDLZqwvL3WoP3yt1R54FrvMPc752qbBB7ki",
  "key19": "5toG6tXyauDL9Jt6bqWGhcDrspkWgbwLLZRxo9WHRABenY2b4skXP7Rgf7HTZGjvvd9fqa8YRiu1gVdpaWi7TKQ4",
  "key20": "yZi2rQasYmAe1Xqg8Lgz3szvEkHd48LHjzgtPXSoF5Quo3UTxPCtGA6LKUYmrdHQBLpfLX6JmmLXRmC8L6AqC4z",
  "key21": "3N1nk4dFHazxj8NkCByinsgGpYF2jA96QRfjaF4GFTNJBbM6f7gVes11qErMZWeWeSD9N3QtbQmsDLCKQXCCX7nf",
  "key22": "5jVcNbomFJkyeq6dgNoUnPpG8YMTAjMV9phRWUSTp7YF96CADG7MjGbdQ8SKSozQYTBf4yGEErZdZxoTbs1aSjGN",
  "key23": "32wh5qzqbcp2gDyKkXVATqK2xfJabUzMDkvZwneg1HdxqJpcNrPdMZLuJPe43kTEPnh4xfSd85srPqsB6rcqhPV9",
  "key24": "5RZnu6PQ6qBrxgrouyRYZwazQjMtwWQeDkwAwGnSQyaRhGGfPYHmYqzBJUaNx3dU9WnMM1r8WunyVkb2Cvy6r8YQ",
  "key25": "2Yxrv2CMhbCdDjhsWTjqrrxqeKZ8N9TPsBY9GyV8LKbR2wGaxqTiNwout6u7MPWZHYhKpXXWnorQ2A2Nq7ChHiZo",
  "key26": "XrSmitPZaxRFpda5suvuoZndvoKjD9PSWk5hgQFPFAPKShMasj621tgnTQHxk64GiYurmyMJewBnKU3yW6PRJPX"
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
