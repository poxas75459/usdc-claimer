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
    "2q84qpYmH2Fa7mYRjYqmYjbLMjadvJdATWKnpAdVrhV7D2dra62cWy1cmceXZ4LCu1RfeAAzCZ11SQJQtUamTUh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AxJW1V7WnCj2HjjqtQw6iP4Kd3GU6DYsxzcVg8dJ5DBZVbp8AZp1REpFhZSzS9SXoP5PdXvx3ZbUG1i2yAXH1qy",
  "key1": "YiR17hGt6q1NvotgiEq521gxazNtQPgvoyFqfibrYQdZtKj7EQuthZHYeuamscKFZvgUubsubQshDkuyUTCmbHF",
  "key2": "4rfz16Pmqk45nhstEJocaCabFUs5Qix4ymyYsv1fxUhYVmyjnS8qtxU9qNDe5QsKkFS9qYt1kgG6kNN2dDASTzUs",
  "key3": "4oGeq4BxGvwozPM1kkYDe2HtnuENtnWF2hfAFtctHr2ARYyBTUBcJ2QUQsTqmvJoZq5pu86i8NERKhV34y228AXt",
  "key4": "4vj1UMRF3tGsP5tox5pXZrhbEx72iUR9EsTQzvLDWcesHcXHgF3CQLQymrXmT5qnqxfeespbhZE2fQ8fqz6ReMXZ",
  "key5": "5ca18ueUroXFsTq9WWcJbMAJwgAfRQbCHnSDPqsGCq9U9DbJUUFH7juTTMdNRBrqtK7iEWnyL2x7oHvEGWobQWdq",
  "key6": "3TMnGnJjKqgw8Jms8pei37QyYFJvBNhiT7ri1fhGUNiLdbZxABjMUDfvcqD3qra4W4RxLDCeQeXh8Jud4dno18ip",
  "key7": "4V6sSZoFHXengospf7YVmBHRDnJhL1DiJ5rXrRn59cNhC3gBdyWLYVMDP4ZYzg728GQXpLpWpJgTxWg63sEmUwPh",
  "key8": "3ifLkpZkyym3sRyVEPj55mub2SQCGn1dkjKfXieceBuZ1XimCebFLFmS72Wq9mbZU1ed6KZkDMG3pAWArP7gj3p",
  "key9": "5jvyk7wXYXwwR9pgKgE1kP1KoqLXXEuYo1BFjmb1uoabynVEpuaZRvUfivMEtDRGt8m3qggaZmqigpbCLBZgeD4R",
  "key10": "5AWujUeA6ARz98WGWqZdYKGfzkG4jrwvR3hyGorAFXzti21wjjjtpyNTHhvfBV1nUU5Cop658TK9ga8zzDZNdKuU",
  "key11": "5CAVYE2XYhNRb4twJYvP6D7wReyoivmwX9RZTVNj3A3hK4VepyjjTGMupU6aQQhXALWf2BY7HaEa5Mekfs9hmSMu",
  "key12": "5viWm568H7CD2CEa7Zm9wpX5SVcrDMBtyMLAyvWYk8G1j6SMPd6apRJK3YTpFHgF7edJNmWJPKWsjmG4YZptxha1",
  "key13": "331HWoutdvzGGYBMVkQYuhGfgrLF22KWJt52YBuDvn2htgBfJBXtvDiXDEU5gM6FUYdWpMQLBQXkh779PLk6AgW6",
  "key14": "43v4cZVGDi7S1CgK9pGU4osXDWZEHyeV1HXRakosfQsEwwUbuxowXBYncSEfjdndLKpPSBnNaLxXX5U5XcVGve2T",
  "key15": "5k2PshQGCo9PCMZoCLLGT1YMqoEWg6N3jdiVLvrgyTPyz9rfvskcHqv9fHDZX99crfsrh9LivqvQ9kfvbwSZ6fff",
  "key16": "2j7t9fevAeyZMw8GjYZfkrG3kg3uCaUvqC5BdUy7kX4CBqYTeWFsvxP5GEkuTtBD9sX1TvWKtfyXvufPhmLkQrff",
  "key17": "63G3yqDuzBXTBRAANg9MGF47QRPksqA8H7kFjNTv4tbhKzuXTSNLpEH6mgz7CsWmowFBorZSqXmefQd1n5Y7fAb8",
  "key18": "4Rf9GQEW8mNG5RcCHwZ3YsGGdWAB9pEcr4sjeZGbzppAsDWD5Gx9emT3sPtMfQwiCpmRHx3EBwutLJdF3QzcaQn",
  "key19": "2XfbNMKp73qk3NQB5VDuS9PZvTw85NZxK2j5QTtiRHuaAFtjhQTNnm3Qfhmyo7ySSxNn2a8knyv1aM8cFrVR2wrn",
  "key20": "5z2fL55BqnhNUuGh9GAY8XS3JfSLMHhKJxFJAD4gXMGmbFeDj4eK5HLe5WPDMsFaNV2aLXFDh3ACHFrr1HoSe54j",
  "key21": "2qXC423eSpzqKmM6UA5csUPDiDneryKLYswajXk34AsNeNFRwQZr3EjrQr3w8B254fLfSYHr7z4Z8qWw8fF5Y7WG",
  "key22": "5igDS4iGpuj6mGaFAbEwnBshVV4q259uBHfvDbBQZ6H63ZN9JPoMKmUCxeBnb6W2HKcqouQHp78ZizLFbrAHYtbJ",
  "key23": "27eBaqZ26owCU1xLkNzJUogieCxWkAAXUjCf5GzqAkobEU615CTfuznCJCQXDAp7LwUfgTuxehVDSZ3Y1KvfbdBf",
  "key24": "5k8QTBJy745fYbjoELJYLP1KQkQ8ixuMxBE9jkj9NFva3RgbR7fpvqnqjraLo1WERTADgWqGwLMoAd5MRUjqGZ41",
  "key25": "tKpeFDpLoM2RtdxoFeJb3aLZkghcUTHWMNLFT8vQnV9RTpsbKvZbxumvFL6okBpxtRKZy3Y1sw438W1wFeoLsJf"
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
