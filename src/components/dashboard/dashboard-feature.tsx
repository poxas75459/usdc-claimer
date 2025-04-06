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
    "4KShf4u5GpheeRfJrk1JCBme4K3it8T3ymZRfdtk87AW8atz3ti4z3TrX4pU2hm3Z7ij3U3y5DxYGUcExnRfmWU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BbyBbJjUf3DAfy8PMcfRD1G37dWZENvgmA9R75UUHYPq7eufb2VtXqeJzaSSMAakXnPh5nsmaiLMho7kTRFTPhm",
  "key1": "2b1jzsdUvRFFRzix6fna1ZK3ws899skdG4rKdm7ccQqEpmjbynBYJQgzy6HnGUrcerFaAFvviYfwZuyK5Bnoj6VW",
  "key2": "2wvnN6g4TZHtZCejEk2ccEsWDTSAEKWeFWmzmFZivRHVGcpi4CQxN3N89ZCsvHK1RqaSyFeVQJp77JtrBhR34Foy",
  "key3": "PfMVpw6pqpDrrZA181MyxDd9C2PK8s9PrE9ZTtrchAQs81jXjJWwoFXCQUMzvmogXg6NGYbMuabAXtftafFRe2R",
  "key4": "5wEVgs65QRcKT8H9yzZge4DGHn5PRQG45DSFuzH5tZocNWK3ANoRMaxKM4EmbKgFhYWVPsTFkzv8HmnxF2WqiPLy",
  "key5": "24MhsQQCo3kE4uFgeEAcXMUZiAWpbsHcgAFkwz1FMrJBMFFPqeP4HPKNTxjoyRo8wqT5y8Yfmf3eTBHyuQV8RRMX",
  "key6": "3seFABbBamC6ZdmaHGsm2aWhbaTZxxh3Wo8DszvvBiu731YMUC4JtETTqdp9G3iKCbMRNn7FAFF8BLQFz2rghLAP",
  "key7": "3NMqMe7M8YGjcetQYFjmwzYdzegZb34sEoemxZY3vQfs162nYFhtb5HN5iDqJvowSucru7WbxundTd1kpWRTxzTU",
  "key8": "5czrdtjsDMkC7xLHNH7MQbpd6fdnScrBbd6nEmyCKPQcWwX2dCJ4YVaWcMKcfKeh8qsf1gcdk5pfWuTYvcnFXoiU",
  "key9": "31C9AqRWrw1Cfisd76BXXSAUnunsjtaYNiheg9XeLnMQ1qkH9feijkztHtewRShNiVttFQcrHs3sRzs9Se5SqNgh",
  "key10": "2YDWe2Dcchn76bSKbZgL3YbFa1A1Qhz6ztCzXsCMf56yMFaz58AGy3eEmToHdMdBbMzzH7n7kej9ZyKqMmtDA2aD",
  "key11": "5xfWaVJzhMxam17sUcbHKJdzLhpWABTHZPshGmMc4dGyDBUUKRGCfYT1W1szEnZQNFx7Tqvbq3rrmEzUB72WiuKY",
  "key12": "3GM4h4CWEsQ1TVZdFvkEqsrK5ST7PPRG8wBB1L25pWjgxc47pRAihMQqXomUKpESbNuiJpoDKgYPbihNySSb5vBJ",
  "key13": "G1oAhrFydtarNTQPa9zyN78PjFGEV2WS4jXpUTx3Auvbr79kPA2zHqtp265rNAZdWjxHQwdCth752MawDt7bAyU",
  "key14": "LXt9Rm4cRyzzng4Htqj99NMg1BaqBSkcsaSd4oiRudWEFfHopZ2iTMtdUdREmi6vi3mg38TnZ4M4K1yEfGTcGTC",
  "key15": "3Ny9qkpMCTvyaLiUJz3ZfgXxJZFCF1TdPkB849Jw4hMh3JQMqFuN8xZHN89JCLyhkYqYi9j591n5ygYymAvdRqRe",
  "key16": "TYYfE7FyRfmKbYmJaF7pjNdr8hF9RRry2XVwX61fPVbM7eSh9AhDDX4LiH3ArzjXqz54vfQ5nwh1REPUoEwDhqq",
  "key17": "4gfV7vfRV7KJf68KJVK7mu4xo5v2GxMUeTzab4dr5wWfZf2qr2ths7yDdz2LGaXPWkw57P1akhnZ8zYkyNQhjN5W",
  "key18": "2EwDpWz44KD8F2Z32uJLG8B6jKuuTvjt6Krop1LP4kDBV8TE2deu4fbWrf3grD6XRLJYExapxLjpFN7kgDY2ZD4j",
  "key19": "E5wrnGHwYBZFD8S1bQQJXR1RVMKVWaQ3nqqnjAruiwbGZcBWUoNg7RyXKChu1uSwxAYMRQzxsbQdXtepMXvcU6G",
  "key20": "292t3gxtVi6kaXndj4RimF6P8ccDwJag8W5ZAY6hbfVD5TTJ4aBJpbRxx1c8CQkzqbw5c9sgKSxYBxV9niXFyqGT",
  "key21": "5NiZtKSfr2JL9fHMukmQTDzJiaHP6mXmoND6KeieVbwbwrhHP82hsCJWqKzHuvXKnJvQLgCviy7ZDYQ22qZPBnNm",
  "key22": "37cSAVxvNiJJnMg1kuBv9TTtsCs9cgs3PZDhYKrUqWJWbNSNo5CQTvXYMyaaNfGzzmy82m7XBZLyU9jpVTgwVR86",
  "key23": "4MUL98fh7nW4icVGczsfxmWJ9D5ySjaVr4RjKv4o681g39m2E3EgY5GmSspffysX4GPQdvznEs1inrkFKgG2Bbqq",
  "key24": "4FRh6a7cfF6N8yyaqk991Q63GcocuAPn8dTkFv13SUk4fLSDqCQbwHgpc99C4Dy29suSfkeDZtzUFdmpoJxs1FpF"
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
