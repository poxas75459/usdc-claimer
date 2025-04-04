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
    "4nbL2WZAMMxfyxfF6rKvgaQDPqAyaYAHL7dbdUJuo8xG5m7WScnizYFX11ZnqVQLzXt6TCVCir1XoTWhp6mQiFYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eRJZWzzBnPtBNNogzrAmsY2GXmrDWWmnWXyiyTRFLPDQv69ZwoEEgDPRGMXuGt3ws1At4ZdpK1ErxEkL3zWFY49",
  "key1": "9GzBGYVQyjWTRGQSdn3rgyyvRxFtPTRu3PPBoNwwaB4bSz77FPKBtKoqHuTed1LJYCD2BSHzv2GSXDcsmeZCjob",
  "key2": "Vj39pyjbMcfG6r1RRhJ1nj7etsBMkbj16WnjpgraDk2T9iiekZRkBQq5SWZjmKu7SMoKADDSAzG3jUGceA8nsWU",
  "key3": "3gU6vZ8YQadZ15HkGQnJ7GKtNdSQofjYk5TVtffXGN7fKzoKAtH2pH4UyYjkwMoA4wyUVcHU1B68GH4oZ3rdHDtJ",
  "key4": "2CudA2d1n4CbjSXLeh2VT1MfTDX1JVS53dHKikmFP1jMZHryG59Ys8qvy2nFJujkp5m4vU3Qmc5ohCzPwyKz16wZ",
  "key5": "3DpJXMFiKJRd8ccUNNmF7PWwMMWVEqukMjxZzHr93GY3SWKzNdG8TyU9BnqNVQbwrTRVneZ9EP9HHvr6F6TgvFcp",
  "key6": "3YRFfZ7tQ2EqgBYTAfyBYqJFyd7r2uuR6oZdNitQ3ryaqG1HsMcQpwsZ5DUvd8TCEPUpF7JtangTMjsUh3HhQ8sx",
  "key7": "53KuGwzAAZ2D29Vg98KEZcfFq2kHWH64G5WGx5wAqy4cY2fLxKQjYgBRFL8srhA5txyauDR6fPKVBk6LowBm53BH",
  "key8": "2qiZZ2n9hQzaV7XicQc9gi8KBimVDLLJ12dHdsvPhZkwZoZYgTHUm23xE2qvd3rdEmq3hNz1aYoFseQ4T1dZYksw",
  "key9": "3kaFx75qBQEFTP4FnYxf6YYhTCRwVCdjU6RbAHHfv3m8tBdcX5CsvNujszx3Kco1u3nJwCQkXzqQoajSyiHw4FnC",
  "key10": "259wP1ywG4cjh6fjcuMuXovjFdWhSSAq7TRFu9CnekQyQW6uCtQy5kcHmQ6KXz7Rr5VjXUBiqJXNg9j5TLxj7uWN",
  "key11": "5La2gWAhZuN7eXs5eKmbbqcwfBpzn4eeCV9VFF2E6peP3hTNjbCw7vV5FwjnryHRt1aaSjuyXAfmoVyuZ5ghucT",
  "key12": "3cpa2ckdo8hg7bj14zGAe8p8LUvQVo8dDJFYhDvvjGL8hqcYpsTzCYMAjXaGRgsXtXuHAAW9hJhFMj7wAFAqQeFf",
  "key13": "5VEfuZPiGRweXFbBRJyoyuYi2oR8bX4x9p9ujjMqkYwhFY53tUzme7itHzYV9ZHzPy8jYuyQkHJGfaodwtC3kkik",
  "key14": "2wodvWRcHqXLSH9UiJAxDaX4csYN2Z8fBYaGEffRAFykdvyzooio38uvvJqDGhAtyGAyGePaspFcC2uVPYoe2RoT",
  "key15": "3eoxs88CdKarvECteqtrUPzS4Ab8v29GGgyL2cQdrq5qdLp9rz4AnQ1TWG9rnXEXBQgoDN6PM7tbqzLdGNLZnK9G",
  "key16": "22e35VmNhCisUGNuFeLcFDkreewqVBGhLZJr7VCpaSnqEnafQhAaPjnHdZuLEDazbphWfXg4SfunkmfBT5Mysbsp",
  "key17": "2WMMmoc5qEepzBbb9gYrwFc7PDVcEe1Wbx83XUStjvgbQ5CErKcqEmHjDihNhDP5fRvSuqabpc1DK78TDHYo39Ch",
  "key18": "N81JkJn7PASz9NWEfvHu9xRkS2DPqMRwBNCqCT7NM5LdfgXsPiNEQ138Z47HK3tsVwAUwfKxJEAmBJzUwQ2VU3D",
  "key19": "412JUA4FpSQh3cp47Q8xFmyz8eeMnUUfiK9ZBWxw4W9NiqptEyHAgzV7goq51rdT4hZcX5dQ3jpMWu33Nx44Lh8N",
  "key20": "2ggHpsCpk1C74K5NQ9xoPohodDQXEEYiFwmER1tMjmYUsfc2RXouDL1N4iRekP77n5B7CDXEzsRHdw8GJmaqrFiS",
  "key21": "3HNqeiJ4tuCCRenVBxfp1AdXeGaDSb5pzHmVEvstd9DcmKuSG9auZfGMJYjrPrfsRC5GPq5vr15wCKrxQEr7Um8J",
  "key22": "4typY4pdNpyV4dKiXiabd6XFvNEeg9acwigYfkUrfQVYP1kMLWy3wBFrh7tA4rah43fc47jDDnedmoPd22TP4Vku",
  "key23": "5EbQWRi9fcZfLf8zGU8HasEaAh7uJd9r8LFiyebhZVcCSB5MZTUDZUfJGLNitrmYkZRbjxaMtzy7m7TCBNHCveuf",
  "key24": "4Uzdq6WHydK6UM7Xvrbg6PPyR6Wme3sSJ14rMDZNmZHfX1yokMqkTx1BbkpTtZ9iCwkCTwMf9sRYupJDWYTiwjwW",
  "key25": "jBNCpa1vUFcCfH9zm3whPGoJJALc7kSG17dw7omPmTiegHfiRMZs2Nk4YBNtV2oTpuscFRC8UVAm5wV4r9c5NGh",
  "key26": "2NfJ4acpgp9Cic4uJwVsqLCLc5empXJsnzpqPDgfqnW3pNSTtTZzkztKbRGCQnsZKnTLPsjUu6rTkariibzcepZy",
  "key27": "4d63gJp4THteRpm3KspqaSBLtKyi5fTPNfKgi8wHpJeedvLsir5it53kh8yEUsmUv2TKLuXi1gMQaAPuiMwdcqtm",
  "key28": "4MUx2FrLS9SZ7yEtULotVV1HRGMJSCx6SJUuetndwAkNbcu8YUsPNhmeAStp2hyJLQJ9EHaoWnJE7M1yXXpRD2L",
  "key29": "2gLxMWPsmyzGJcBgPa2bmzLzr14Mf687m5i2Wwq9xnXgKyfTWBN5L3LmRaTisHG7UEoAkjzfLXNJrpMvU1fGGZHx",
  "key30": "4ZV5Yv8xERxFGohn41txFUWhecx4MVSJBLNpVTXN9fGawG1rfSGjGyTo5k6mLj77A5UsB9TDrXanrfsp8XZdxcXK",
  "key31": "ZJF5iKmZnWYPKpE73dqE2NGi7yJByz6eP1PmieKkgXrTndEPgbDdkTC58XV9BNvwTGp1Wv5eXU2dyo5q9tPwAEt",
  "key32": "Z47qbdjWpEagiRMofAtpfE2XQcfmgK4hBzAxhZ8eg7LzuNkuU1B2JUD6rbvaGzEmfURoQgVrtLNe4DG7HSorvzw",
  "key33": "W3NNNYHArSnDuNDUUPd6NW2TjZLrqR3Zikro2zJdHyEeAkt1o4wQUZw5hZVZfjJ9Ghgb9paCa1VLezQmVRXseP2",
  "key34": "nhQBJNxdzaXLkBmRk3Qeb3ZxGqmWn5YpGaxGUsqdJQSfzuuxoJsPTtDX1CPZwXRJ2UR6MoE9BD8zY8atHagpc6y"
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
