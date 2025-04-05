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
    "Fovo5EfWQ9SP8hewjFJbBsCBcRstyTCCtPqCpMaVwbvEwSK1XdjoqmMpETMi5K7dzwrCQaJY8fGLNdf7VKZHdTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8t7FkeNiNLpM2VtEgK7XFzPZXsRSXVbSA9HUhTxazDzM5sLDNmBPhaVuj3sxtGxRV5Adaq83KcnHv4BcSNA2JCp",
  "key1": "66HpfHygwhNrzzFfoarAtqTjjYWg5NmDaDzha1xL6BPgcJwYiLwyvP6w551ojUUGJNwyY6Z8451WwYA3h1TbFvMA",
  "key2": "3GcB5Hr1wDmAn8JgZQwpUgh3fwRhCnhkUe6BdR18fzK4A6MQLXsbPvrHFd8r2xFJWnmtYByCpd5TuN49pXMjnhwo",
  "key3": "4d9ij5GLkoRLN8UYVnFwREWkzT8aZvE2ZMtjaBkV7rbUyJ7muQxuAzWWK3WER8KnNRTzTEdCD4ZbvhutWkF25VVw",
  "key4": "3gEBc4aJYJGCi5rjQtTVCNAWPSD8wgpeHwfkZSwdj6iYnCqyJAUTMcceoATJteRAvdttP6atjj9BQ7Ty76nFC3uc",
  "key5": "2LMFvNZkDDCTANbS1eX7ShrkEps3mK7qjc9xVeYataFHmM5Du57a25wEz7dj3qwvtuNAh8ikzX8TCDgThbCkTfmr",
  "key6": "59DwJn4WqF2s7c1HLLW5QdmaDDtYiPiy2dqF2iYcypZSmGLN51g6PdQcKZBtCKuJmqGWvuXXB5DHuC5wWq3ryciT",
  "key7": "2tgDwec3csNT4bRkuUdfDf1opA3ufJeCHKe6o4SDrwuadPREBB8vzwxX47v4qjr9B7whNQwM1adwk1cRQt7o42HD",
  "key8": "uTwsAyuieWxdvcNh83e5zMCvL2Yzk9BhwyB714DPu52tVC7f68Ym3MeVjiAbvjeZbty35BgN16XKaXZH62kRf8q",
  "key9": "5cie3VJaCspdgKWnAobXmykUxfBBAErf2mocbVnLkjXLePY5ac7j2EsW9TWwigMXA9Pa4LqFY3eu2JUqmSq5jAA8",
  "key10": "3SQAsZsf8KP4WEP4xNpyNSFFSvGBwvN5XXdetVqLwZp9HgVu5hFmyHKHwPV5pH7x6uBzEZBKEmw5QsULc7ox9XDD",
  "key11": "4eqykA9m8zRbf6XcDF2Sx593icBFjH1STyxDhoBE3bA4UBHZBH6uwS31qX7Czy99QBUMW7yhBVUdjdEw2scRRLEh",
  "key12": "KVsagvLhQFwBKm8MJiUuRDxHqCJW1G3GYaNog3JeXyzsJH4VmsBmB8aqos4cmviCEBzRwbi9MAyqqqWCnLZPRX8",
  "key13": "3cz5NmtuZJVejoqw2DL61hbKQTDi4DYzuthxiYCvPC9gRmxMdTVKBjABpabg7rkyYkEZkTXFHL5rYvdspHJqj9JF",
  "key14": "2QrxgEyPjw4z3fUDmM9Dy6Dmg5YUqocZLWoXEqJ58pj8dEXQEoEYYvzeTLDRUBFgxPbwZSWLiTR3Poa5VyrNcWi9",
  "key15": "51HSAgt4YQg3M9Tq7zjodTwQt86i96C6dMGmZMopnoEZGx6WbYwVmMnz41AyzW3tzr2zzrvVYt3rF8arMcXg8m8B",
  "key16": "4kSbdKsSbXoMHUFt1NrXqpVZRhqtSWzZHPSoFQscdxuo8Zz6oCpVPWtVHrswgm5ccmjhDUGsP5Baf4VyckzRQNLu",
  "key17": "57Xm9pj77tCnbd8bYDVoXzR17PJgXG1x8mczKJz77VsUqu59T8pyuaXPx1yjqK1iUu4pETaUvhLXTMSz5XR4PB9j",
  "key18": "54piEPjYQ3ZEy6pPKfcJ4XthvdjJwjcZrLFQTkN7LuyCe7eczsPuDgSBrRw3i9u9izTK3RYtb57nK7c1kckEmYQy",
  "key19": "u646bMZMrcHAYcGitfwDRtfuwAoEyL42LFHFPoDcqrxgNgU5cKwWDjqYCbvx9WEfoiGmqiNnv2NkN7kYqCCxVU6",
  "key20": "5zVa84RUA3o6k2wEzFE3jsXNfGJRMrbnnnnBGauMM7erMmguRLCjF5K4ErBRotbJ1fHDCccUMkvW6GNCqTPHN9mm",
  "key21": "5y6SMitzjHpi21W1TwrJDxnLeMwckWuZEGSTgF9dqT8JQFHp2ghGhGiMnuiXomLVmbSwGdBwrLMtJ13hYdQgmDej",
  "key22": "2GyN2pqJQogCxANT8wRARKhFPXvSUAdpS2ZFPLwiysy8MHjEYV1pG56gZPzUMde77ZcG1wLtLPUxtoLkvJ5KmfKt",
  "key23": "k1bBX9EAMCfLR2aP5Hihv6ATDt9H7AR4YR3gmBosJLbvhf8wbHLgrUZJq4NRsxFzhTFr9R6Z7wHCjCJjXCnqPmm",
  "key24": "5f7mMa4QrXnActpvpvWWeXuumerLkkh8oE6s1WA55JA3SNPRjuxpE9bi5pfAGEwMA6TAbPwQxrgAdbe51eWno2or",
  "key25": "M99zASpMWPjw2EA5iyjdsFXeX9J1cscuFRU2XvnJtySHPbNJPoJqpPr2QrQceD7FvagufJF3YyutooHoa244LKK",
  "key26": "5gbRtrnRk8AJc8dchBzMhXcqXZkXULfnkQaK6ChMtXEGKHZvKDwsEbdSbZv6SimMTDtvhUR6MT8yZXP37kEeLjWB"
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
