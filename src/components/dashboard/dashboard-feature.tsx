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
    "2dRDvacFnbEgrt6ms2B4qqX718rPkzoMYkM56Xnz5PvnYuZNu4WYrTc3jigVk8exToUKUTtVxrt5dzphQYZKJEQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bERY6o6L1mErpag1X5fmfqsoLcnVCQZWWxd8A2Ng5QBdnrUhPfKxoy3dQomrPCMot9GF2vmKamwphbKtLoRMrQi",
  "key1": "8Dc7gBs4C2ri2Qap6pVUbmPompVy3mtLL3p4EcqHU7yyAomGxirugXn5f8uL4ge9YW1KpJRTAqN6RrwY2zrKu6u",
  "key2": "4SSfh29uHnn2QZeRNVWtGtHqJJW8JeRq8zVckt8iw4sYiWaSJnZn7CooZMGePwMfASbincWbvdViiW9KHDEHSWCi",
  "key3": "5UdXXasaDDujx3s2YBNUj6Ey2madzgmx6syZvX9u8wsM94gdi7ShaZp5EXzf6HEqrr8XwC91EycDnKF4MzxjxY4d",
  "key4": "5TAYVnJnfdJ6z44rbNpuEkJ44VUMaTcLaasw1fR4eBcM5ePF5H2J6YEAJQASiRs8Dm3bAHJy1msjdA1BYnLPorBS",
  "key5": "555FCWgGPDubSvDR1vc7HbCgRUPxnsLbvBHVH8dJHZNcUp9MBbht4gdMbLhQgR62xmr3PWhAJrtfhHSnHjFC5Tfw",
  "key6": "2QkEeNhRrsWLJZnqxBw4FBRU8cAyhu8Qj4dNY3U6fyDqgyKHBPnG6eUkaPDB7rrbspkhQWhf24FRM3sWdj4KKZjB",
  "key7": "2rLVWhFAq4d7tEpa2ECqBGnWmsxKXztqkLxaVT8oQXmBTEq7HZjBnuVDTC8xL3Gucbn8zn2N9vXE38sYyhQyJTv8",
  "key8": "4ihnv2QWokBNgmiXgHFBdTAFKzh78kLUHW1TvNynRn93wFdPhjWogE8HcPFJCbquhbaTVHhc1YnR84QZtPEHR3xM",
  "key9": "51mFLxgYFprKvfqYmMQAnHsetenvmfknwe3zeek3XRs3fErzZmB16MxajPndUnSxXKpShF3sTzJacCaiUC3mTg1V",
  "key10": "66swZmiHUtuuTw1zCE2mFp8pQxjYBvBa72AtoF8zQ1HauachL9iosz3qQyAWR1e8ErV8ryNQjrq3jSfmNpbnA8eB",
  "key11": "3G6D4mStR5zLMz2TWUB1C8GoUj6AVdqvh1FqtrkRjY85WNv2wqEsTYv5Y4iyo9miaGL4cWwa65fiZoVsVbhusZAY",
  "key12": "62R7By75mPgUdUfh1nGXPh8NKnACesSDBFYm3XVXU3b3MzC8vvHzMoyT88emqN8kS3tt9b36hrszp3DamSmvScNi",
  "key13": "4sah9htJqDZ3HpqvsEGEBxmtxmGwt9NYNACEZpPMLdXKhvQAw2rXtyBnu3tQQPAeAGNRwkyzv1HZb8jUCgpqEBdb",
  "key14": "588nDGjDDhHKsYajq5pzGGedpUNMyiB2LKaJqvTYVR5r9Fut8D7n6tj33pLwWqgQuib6nJ5kifhoWnm3awyWVznP",
  "key15": "5pB3W1BB9FSG8Wq38iXG3G9LBf58SsPdSg7bvjmjhsVbXjUCcwCrNW1eABehrLU9ARKh8fjTKadb1gf1zYBFTrNQ",
  "key16": "4w3p6u6FAQyueEjHTb5H6b5tuHqp6j37rBf5o2UESkn3tKwEAJWr4gkhqv3fN1JtjMAUt2htpp7aP6AKTJMW5u23",
  "key17": "23b6daK917uYu6GeCv77JJsou5K3eQsuNMZ6JDKPwKXZi83gzAPNXfGR4dGawBYkweAm8A2VinygZ5dE1XN8CEbC",
  "key18": "2qWXCMXL17tGDbTWwipz34CkNvd3PwNhvji47fyiPcawuXf35RPSps6sApnuZqbL8Be452k2L2JkYzYr3qoQw3qR",
  "key19": "3udQ9A8oFagMXAU94U5qG2AprSMSur461Q3MB3oeUSV2XTUuFXWKDhqqogNyMV2Y1iShG7vtM6HP8NyF1rVFyt7Q",
  "key20": "5dgE35vLYvoAPnaV2KngA6XA7jKQE5PfQogT867mZsnyihba5j86KY1Ty2xqG5q27abT9shYbnusUEcLC3v9GsZq",
  "key21": "4QA6XyU2b8RUbasphuQTMgcUadJhxGUHgp1QDypoKPp6gNAx7F6dDeawwEkdqHF7Uuy7LbQPAZQU1xXXEbtr61At",
  "key22": "5WF2Xsy5uGkht1bFwer6CMELk2GU7FEgXUZunECzCSvWDwntzLWjuNHEeMsUTwJEAEq5iYWqYHP1YzjMHbQV3312",
  "key23": "4YTBapysX3MzLGcC53g5GD68Q6Gb6EAmKDsL5M7bfmtmjNiTvGoYhuhT2DTdHkzcvmhcTXG72BwYzT1Ge38ZpuAc",
  "key24": "55GnLmHWz9641oiJjtL9p4GzHtALFC1sYWCXaD2jNJQ172t3dMYrGJQ3S7Fozdv8h457YMohWDq52nnZZ3TQBdzb",
  "key25": "2AHVaTPiRCwdxbJQrRngUFoVJ2Qw5LX5aRNy7si9ctvmvduEoXdCFU461tWnGjDd18pcSQZmLkkteqGpqTDnVmiF"
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
