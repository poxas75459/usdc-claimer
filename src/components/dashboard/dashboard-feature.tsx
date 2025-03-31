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
    "2jBog2xYZGJExM1BS9ChJSpX8K9q7kkgRmGDzYjNVwYrhRBRn1UFCr8Q3oEoy2E64RLcTpBBS4FNgzqUGzJhyRWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KLu1wYXRfPmkTUvQNLkA4vYChyWVG7TxmozBK2hWMexQZXDv35oveoAUNoGxUfV3s8WWqFWU6rhuhe6knm9vdTC",
  "key1": "zWAPkyxPGjbFbzE38WApQfnWXTrYPC4QN6AxsTHjDby1tZHvq9fx5LqsVUwiEWsmwbrb1L6buqWCByXUrRBTyxn",
  "key2": "34dAYgYC6gxduAbmy9ogycoYVRBGwqH4qNmYtrWU39s4KsBNvEpVCXZz46SzFoHEW4VzVJkVJytgTeQNT1o9GBCs",
  "key3": "2LNpAQM6e49gfsj4eH8dwYfF2xQhoqxJgFAdwV54NqhKncdBmDhFZpR6wEkfTXGTABLjMhYYXop7bwCBYUk4twgf",
  "key4": "BuT7KNwNJdekEU5iK7NnhHkbg82RtFGwLMjDvh2FZw2vaURqcRUsZP8AqpoJJnBtYCZngBJBvtrM4oWCcuWHaVW",
  "key5": "4oLRYz3qiY6MmJdxb85jxPSErUCduFWpU9tUtrwBa2zPp2hM5AsMcM79BBFrm92FRqwBA2EKRn1BTuSrNnzoZwFv",
  "key6": "3FsWxtEy2tnR5P662e77qkQvsM5n2qKVtb82kMpFHa5FLqB7rqQrh6xUEGVXEXVpu2rKVXdo2WEy6dzBFXGfhTSb",
  "key7": "5RTbBKfjtiLaXCcEFoYsPSYd6BquWf6cH8QM5ZRnZVyApbdAwbcqBHwz9gHqEq7J1HgcS3H4uJPFSKDv1zcmp6bq",
  "key8": "3DbcZoeh9BPjgFHQoEXZotUnh5j83cKgn3AjuPhty2pzPs7Z59tVTqvF83WEiJEFe5V1TzTGK7v1nwTLSij7YwvS",
  "key9": "2p3o8G6MTr8V5AMsmVnf6vVgwrbJzWsxXDDWkmVJnJcoXRgNyBCexVmA5TiXYA6k9CARGART4ZVQEbmhf8YpWmG9",
  "key10": "4MmtmGorAMTnHDt5k8XNM8fsyrWZab7x8uu7GfRHqg3w8aKz1raFfvHCdrEFpeGarReWAocZXaj4UfGEnmkUqfqy",
  "key11": "64rCSC6b3PsFfRK3ygHEPwTbSiy3ARvcSLngzAJqmnViwzQWveQ9n4RD2J91SjH4PXNSgKhJsTzLaCPFqMqERJEF",
  "key12": "1xUgHRNwoC5Fi8LHXsc6uLzubnsgFuxgdTTiiqEaoPsK7K7ezx36Zs6iPVqriwMz6MTVv2SjQe6zQrUgm4Labnj",
  "key13": "4FVGsL2p2DzjurqzrKAA8kVSVS58Z7eCQSR1GcbvDMPfVQS5h6h1G7KTXeHnyH5GrxESG7yJzonXtfn3S1XeVHmX",
  "key14": "3JfUziWS9JAoHjkunNDEq8qNP6k8M7rNx7ZZ2AdNq2vFiaigpJek2G1DzRRDiWH16VeTtqMm7mEKjPKiSUGQbkDV",
  "key15": "5Vp99BvZwJecuBib5HxuT3irYGQkCoFy99C2BQWgr6kCyHXtk3TGJZur75duzrKuuxAuaNGwnP3cWGfgjCUsofvZ",
  "key16": "2rk7xuiz81zZMm4jT5x5YdcR1AEgmjqSfRbmDWmYaQ1S8hSQqkwpuG7HgiMFF6DyRyfq3nCERveTWdYRPK1zdKuf",
  "key17": "5mLH48XMa2TckH3sPdSF3ebBf6mDJ7eSFtqVwverHqMZgUVDQVa6tDT9X3Hs8aEMyhNXtCgJdkKBgRsRzEfQj6TW",
  "key18": "rj8XRqB2pZy74qwFxR1oLn5soiVtEL3KDcAWtZbyB1RoqbrudvsLgyVp53dkg6nPRTu6L7eySi9iMFXtTNvobT6",
  "key19": "4ZTDUYKK4krm6WFc7JYNXr7LpoqT3qfz9STMbZ67Wo8GXrzoDn8aWirbM8aE1m42CA48E2Em2rmJ9emKmKkoKWXY",
  "key20": "snzynbK1DRFeAENPwpPH51nf6RMC9Q7AVLJ3CS23aAfTjPRkCZ8NYvFhKP4Rpns4pBTpccDKFAdi32h8xmHWRKe",
  "key21": "4iXGxK38E6E2Z5LNWg8FYrLEpXvgigELuV32pwEc68kCU6qTAUdc5oh93RMjysR4EDCz2qbuvzxdLSYJ4kS6dxyS",
  "key22": "TSqpo9m6ddYXYpHbP7WkSLWJ9Cws1owLbd3eB3SxLx71dWL5QjUZmApYNNV8ApgU9Y4xyeyojDQXNgxZwD95e32",
  "key23": "5okULxqVuiEH7sJXVEf9xM3Kw8Yf6g4Bemv8u6sh9ivrNtcBHHY92EVYyc1W2NMxHgsVJg2c3NB6Lc5D5N9KxixU",
  "key24": "2UDi1jFnLLpQDkT8YK6UDv4wbd645WuwebTSZQ8VBzE9uvp6DGLo21cqySBZyBdnhPgg6xPMrDZW4S9YVWzpMt4w",
  "key25": "yxRDJK2myAjCcWGh8RwxEjXeTmY4vuoAGMVwv5MT7RUb5SBg9qsGSKtHESPe2kP6WCqKxGXteMV6z9nNmbXoW8E",
  "key26": "58c8BoV4NsiycVaaC6bnE1ECkr49ELQFjEYqs8DfHXUR92DSykzSbLeNjvQThDjkooPEwqr3VPEhLdzdZqNv2QW2",
  "key27": "3AysgS7wmZ9jEBfZr3FGUyyVw61oHxvK1CWq2RzjvLi6Eh5akVuEsMxn43VLuWwgStsPycuTWyXRzFAXzzxdS5c",
  "key28": "2BHesuH5N4z8qNCp9aXWFxX6VWnfy7oL5pKbQTaMBJ2RLWn1v8uvGJ4LLwWizQxJMPY7FJmD3vcn6qCP2AdKamgK",
  "key29": "5SnXavy3KMwQkFDivDMGFrkgbPVuMmx5TVooRUmKYH4S1PW6tsPf4Cp3AhxHBnVM3BhFxkEzwxrfYgcL8JsNgRus",
  "key30": "36tqCSQ8tUy37hfWRJcBE1FHMpP7VQFGekghjUoWNiAYSxJrahTPcPWBUxzM3tzcQEmpzG63GaCenQJwCgSzZGjv",
  "key31": "qwFB28kMwZ6Q9uR3SV1zwoPXNqveDroag6BGBBGpk4Hj37PUP9g56FJ7n552iZfbWwDjJPP7xRQPe2kbYwfpSdi",
  "key32": "5tVD8PxsjWSTiZNANXivQMUahtS4W82xJNtXxC9NWCh7gQN1bi3cgscKJc3NmfxjKtWLkWCFtYAjpdfhu7VNjn5t",
  "key33": "5U7D83uRYehgzXziQFUioqcHqgYBnMT9wJDdtQPR2Sern1E8yQZszWqDR8AfN2oPRd9SpNtLZYmFj2GSjzqdZ3u9",
  "key34": "2UhZwGTuyxLFh8zH3TBkVTRNYm34K954dYD9geVw4n8NiTvxMKbGaXPxhYq7v7iGXaX7LZqxthmXT4FBUYcPayar",
  "key35": "5p6aS2AcsWiaEKqQhZ9DxAELPvEgVxSJF8mfZeMNNC8aAxUu8v9X62C5A68ttjC32U15TMGMiSUWeV1e7XQwLczP"
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
