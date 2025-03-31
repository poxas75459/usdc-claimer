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
    "E7RytRdsF8mjRVodCcir84xJaY92ftBfRikFn9RGAorUS7vHUWoxE6hgwKvsSQjFbuE2ZNyjVRhyfAUnAdY1Xou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38r2iNKcGBWxKRfxTEowKYQEp4Cf4S48LUC6bEKzFSToDLwa9eJTJuMuk4RLyf5EWjfEeTUqJdU953iRhXsMbXt5",
  "key1": "3Fp8pZSvEvk1ykRtkpM5tervsK99YrM1TNdcbWgqGPukHNCNmHk1K7xwm58DdkMvy3J7M8Fs3dEhGKDgkDw2MH2X",
  "key2": "5MunJbzP9B32tAuHM7sQ6exdmgKngc4C7Q3aVGXeYYtYkzJdkNciLBQ9oynDgLXetLhrzkAzL6TD2ndazNrKSrs1",
  "key3": "2Ebgj3u5QZty3cirWmQU5f8E7uPNJoNhamiJrQ4bvmXHv5Acc4UVFMH1PEqpUZZT5DueU4Byk6mMS2oRziULEQmr",
  "key4": "3bCYmJXUQyLcZ5ND6wwrKcLTxjcorZEUwgGTGZKB3eigfjz6eez9Ky7EFUwJj2RQKbjDEKJdMKUCHadu3LFJk1oi",
  "key5": "5ktac4k5xcNrnNs48FJrL6SFMNeB7rDv3Wjg2rS4NMjXmNHZEmqHmeZzknQAyUHGgSvfxNKyeAztoNHVR8aSvebx",
  "key6": "5nTviSJNyLqGPngjiJFMPi6FF2jawbtQDJ16uK3QK7r3qz4Je8QfZDy5EEQNtGiCexQrFbwyTfrCZmrWD6RcEYtt",
  "key7": "4mbfiG793G7K7akbmB3QQunwsX7zhpi5TxP4aGQud2woSHsHJb3w1WDjGT8TSbTctJTeE56wS7j6c8iha1sz14Ms",
  "key8": "3kLJJuwJ6Qpsz3c8x2VVvnqe7zJCY2eH9ZzQbJXfDHPpBHGfS9TYHLhRyNN66v9xBy1hz7gJZeNEYy8mnKVVJMJi",
  "key9": "3Ma3MC2AWa8iSeEy3FfgV9qFejTWuqSV26bqoWTJ4gYrfMg3xYwb2nW3yYLDMWxT4tWbQGfGqirySe1oMt23Dwzg",
  "key10": "321EMnHjLgBZA5Kk45KwqsbSFRNy25MnEbx4HUvpP3vJacx7Z18KnuMmqBCVqakFJv5ZgJdeLMLcWSsmv4NypokV",
  "key11": "e8TxgCchszCDzMpwLvgu4LV3KabQyBK3EHhYPea8Uf5hffqYY5tzobpFSFgZBPzRuha3j8rq5G5GpopMu61mRhw",
  "key12": "3ZbS4wyGqE6SJ6GCRTBiKo8bNFPYdbr57cePDTrVEFuEanG8ZfikndaDh9aLdiupZeTThwE3Nd9rBLyaeasnCiBv",
  "key13": "26dhPGFF64b37tuRuDEkCHd7a7tof3gPxBFdEoVg6jszqU8ZBZsV3Ltv3F92qDSQABZECj2Pw3xadvVMCRhNG6Ha",
  "key14": "3zGRjd7igGvcUdFZTLrGB7Zy33GyATUm9HavHQUSDDgxKwWffT6fGeRcbzq32F936s6rNSxqD51c4hmQhH9hn23x",
  "key15": "5L3yeVM8AzKNWf7Vi2pEAhTSbLuedUCqBoK5dZ8s8VWwsBxLTsnwcS7iowiRC6jQYR4LpVXBQAtETyjFvW1BqZg2",
  "key16": "5bGGChsXiBpyN9TZT5LVmKmYNHCWY1Ewnn1pxVi9JGBa3kbuurwkEtf2GGWLQeAXScZVRm2s4kxJ1jLiFSsxRGUX",
  "key17": "4r2gmajYevaA5je5ZXqFEGuUgXZeBWyZyAaDMZgG92bp7WhSesFwhUCbhRnijcyao2dXmpokRNayB8T72ETm97SS",
  "key18": "5JH3SdcHj6gg7NKXgVdeEDsNThPQvQJWS6Epkg2EnGVg8ZFBLN4avp81f9wmDUPqz7ur9y3Ch7W9hcz3D8yV3H1F",
  "key19": "2T3vubAJyD1tBMggoc49nGGUtuVKXMWZHgzuXyBaBw5gp3Z9Q7hcZUJmeBNJqcSGo5Tn8dL6NF7GPpkX5qLwFgZM",
  "key20": "5TaG5SqiAQWgtr5A92z1eAUs35F3goXboLcTmcxgRC5897QsTdhvHvxqGe5LgqcJdf6NH5nuYyho7fLZQFtc5kH1",
  "key21": "2Lmz8seu48cHszAHQ2Nzd4JeTSyPZKuVEE67FPaPAqwXmSiV527FMA7C5AC52FrnXvcTmH38ce2e475Ts83hJA5M",
  "key22": "23EyAHjrpFDNajJ9UX4WEafkuLbbFbgom5xQoGhaNvFkZ2ifERUjBrNjPbXc7oW5rY5JohhjUNQzbcyV5MjyWfvi",
  "key23": "2iBbSP7z4yhjzpwLJzyD2gHQHz6Pgn27iRX9frS34qH6a5TZ5GRws98cJnp5TCPiBR6DFnEvznMLtddsSxNWv9Ai",
  "key24": "3unXBaUZdvweQs52Sry4CuGzouHyAg2jW4EEcWSRvtmSwV3XmjPZPPk3GeJM4uG6KPqfiCBQG8ssbfS4rrbrY4XX",
  "key25": "5WT4xE3EraDSaRBMgnqCGTEZeW7goBJ2BJa8x57oBi2uCBVPwzRQ2VmxMZL2WDRa2NSRW56SH6xU7KcySk6cNHCi"
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
