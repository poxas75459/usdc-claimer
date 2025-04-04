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
    "3frnHF257v9syjwxyfWPq69xXNV7NHz59bYShRvKGHPffTQkyiuuLWpBWK6DrhqbPEU178h4iqeBdLKw3R6XBHxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1U5Aj45dvFKmDYr6C6SFyadXL9JjDbV5d8PxWoLcDWpT7FtvrkMssZGscjEsvSgkBTcXayBUjC6NQDEHrDvkbq",
  "key1": "2aTiKLgXAvLGkNxTKTpCkWesa6U3Gik2puHsWM27ahpxciHzbD4YXs5RrfynwBUMz59iNcs3tgx3MRZTchZhy2si",
  "key2": "4MHrTqPgfRB7WtK1tPAh4H3ybp1PakCTLAyS6LSwztmKYdQSQCKUJhtGVkQvZ3VyYweRXuFsC3zNmSkk2xmNm3vr",
  "key3": "2HxMzJAu1LD74SxpU3yfSGHhX2Y4AuznCPqHqWHEry2BkLaPY6Xm2eKoknBc3weYWA9xizF5iVJ1GiQ7RwiseZ3E",
  "key4": "3z4s17CJ7uykTSQCNG6EVq1pCVjcLWfDLyDTpd9a2FpN5XqMcT7ioGjjXHcTwWKc53azT1JPtLYfMnxVKFKotkoS",
  "key5": "4Ep7R2HDzDM7qL42oHir86hSEC9EmZgwQmHcFCseGzcXR1oSUybn8HmjcCBNZCFZMqurEhyAoUvaej3Yecqmezpi",
  "key6": "3PWqeeB8GaLiaBdochQzx5bktgpfJr2YDaZRvvJwZtsxP5K19bhCKX5VwkxwBWaL5yT88PkJ1CSAppnMBPPET4Cd",
  "key7": "27dkPq9Comv8shHKdC1rWnRHfSCckrfV1qhjdHMBeZTm7MLCMSXnbZHL3xqXAtF1pLihVypeHA8WkPcvdM5VhZMA",
  "key8": "2hZgVcqBb5LsQhLXpB8gCKAohZYnR75LrPQe9vGppdCJEtF6K8LtK9Kg3SYHeTFiyxwJmwJ6MaXi1ww9N84crwxT",
  "key9": "4o31DA7x2E3cXmFaDhzMW9TQcK8YAPRCEvdJszSNsxbLxizfAbvN4H5wFQ3ua3AvgPytbwppCvpafEVTU6F9sDga",
  "key10": "zYVR5Rn2jV74KUeWquFnZXJg581C3hzeVeNCoZWmP1YnCGVuCdEKSaUvMdfPJ4FTXTzHoSE8HGzBuQwa4diFPNg",
  "key11": "dZBCGyEHfcrD7Duy16yMECGneogTLiarr8Yx95avQvecEHdeLKcPF8DyQ9q6895TV2aWtfLkmxzXJQsaZuhcNW4",
  "key12": "5auPZKNtMD6nUJpAPM5GwaiRbGVQX8Cvn9LcAocwSAwHmRkpJmrxtNSZ9JHdRPJcz3XvWFoCwNmiKqCdHi1B1To",
  "key13": "3hMfUe2hzpRye29hjvtsW7LXx241MSyi9mpWtX8tuejYR4Bya4CFeqgub1ofCKjp6xoNDFpxJ4pwcsUvYdrUSrG4",
  "key14": "5Wxo6FnNMBFxDJ8G2phsT949oNiQLdxWWUZN3Mz1cW97bepR9NQ1qPH7ibvqHiKcuaFycKJqvK3rAN6WwVehvCKD",
  "key15": "3w8gPoG3rNPeo73ZVsF71uDZdsGHmYSfpziu3Z6qTMqbY6MEJFE9zEtGHHg94HkGGEj2cUPtWg8mkCxwYVKvCehY",
  "key16": "2UnjZa7LqpY5SA9aG4P2LUSxt61Vi7iWnkPH8yGw87VFe8Mu1HoVcm36BAaRxbgGEH75ACpbh7WxQCrQCTVYeRY1",
  "key17": "51LEvdGm53BUqd3HWh6D6KTYHh1cJdoDtGuqSt7VPNSofyuYqmUB37Gzdjyx4Qa5uxzQ5ccay19hBXQwSGyko6ng",
  "key18": "5aF3sSvL9hmFnBhAfq9TKoQ62MkM1MrJASHq1g5gDDz6J8wj4C5q5p2H9mMBJSQDSS23zADt8Gbhw7ZBTHvhxGB6",
  "key19": "2iqtCuNK8mYxVga8HHKKsCyVby4V3rKUpqZrUYrjvmJDKnVuJJfLGZBfG91nJ9zXZg5L9UmDroRPB6sYZ5D1H5nk",
  "key20": "5KeFtz9cr7WGbM4dkqhrYWaonDhJiDGNDuQfYLGaefx2TFrnkETRhxgRJbUMrJ46PfhXk4U23bj8UxZZbXKJjSkX",
  "key21": "2bYDoc6iKbysRr7Yc2mdoH4DiUtSTNr1zfCe6NcmzHNDbXGSNBp7NvHRTzKfeTQZFqY1rKdYsDgQvNmUWVH2T59i",
  "key22": "MwMmMsSYxKda2W4P8sgTyQd7HEjgPSau2CjKGTT2GaNSCzNYV1y8XrX1uHWcZ36LGBERwiamEVXPR8tUYxQnRRK",
  "key23": "5e3XTLxa57zXiwhFm2YteNccLgJvtw2HAMjfKsem7UiyJxESyRz8pFGxFZmxDFcKgA5PcCL7uHczZfo5UyqLAtHR",
  "key24": "saPrX3tiZ3vtzDLMBfx8McVBpFmjTYtYQJSqTPFAAzuSdy97t27c6esbtxh8mqQhFZjV8yi1CYkCoM15bNMadbC",
  "key25": "4UHj9swZRnK9Y88YzW1u98pDBu2wayUv9QRtx3AXdcJB4N457msMHyeLggNCcZzwed2Vuag8tvb4E2hJLNq9uwWJ",
  "key26": "5KoyESnZm8VGYCK6TrHrEzAVaDcuGd2qsEPzYkfqnq9UYGPLJJRSgXncyWFxPoi8ER1tP3yPYEZ6wMuhWE1gnDfX",
  "key27": "2SypgLBuFsHgTWbqYKt9jVH7uk89gEQ49WMnvE2LbtjT8CLNpht5NwSNrWMcmEkUSHZ8MV3s6CtXUBuTgcKKcATy",
  "key28": "2qAC1rM9g9VvBEKg9kqzdrdfHF8DCtbLfC8L9zZoWm5KAZ8GFnGjoUkFGM8jHrM7M45jkq9FGygM6cDudAt4PLAb",
  "key29": "31bQBdp5unW4Jg4MzFULkmBXBXDfStAx4eHuqvLAGKKU7bZRq43g55LtAsMFARSUo7s7YZDz2ap1Ltth5JSJGz7T",
  "key30": "4HcdfkmdPc7eUUwRB4PQve7BteHDXKjDdQVeRpKVy9MxgRmZ3Vu1UMTq4bvFjVLYuNVB21NpF6nDA9yejcCjCUwC",
  "key31": "5a23m8xSUSxRWPea6V6NTjg7Q4jdaA756fNeL3Ze7frKT6zgcH2eTLJyj5yyCa4P44RUsjzzN5U9uQ6REogUujUx",
  "key32": "4epoBSJLvGWHVLnnoWJYdxaEcyVhcu5UezTRjBKASDU2RQ4kVcJnccppiR33cwYdWgpMWy1ZaiRQG573ZNzPHi38",
  "key33": "eSMSXWiWW1oJDkxiBBQkpercSunJtYtmVp1s4jBre7MnMUXtnRJE8xCoVeWC7UjSXWtRtzWHqEbpWwFVjHKM5sW"
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
