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
    "2W94B4fc2gGLWQvmJ2y9a4RtvY41MDFf3yDmGWU4p622NRbMDEc9adXc6LAf8ThQMf5Pbn71h4ttmosxonVsvccY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFTH7JG4wBPVpNX94JyFS8zicUxkp3G6rxEMg9G1YD9qfJSJ9SqqUvC5MUww3kVRg43SfmguvJ8AT95btjyNGMj",
  "key1": "21uEiQDwUyREwamqFEQoa3sdvCKZM9NGyuUDtdiKTFfdhTgNkDMgX5qn918jyB576TwMns6RDsFVrEkNR25VP7mg",
  "key2": "4i75UACNqJ2CbotaSP6L6GZ1Eg1D5tFhgoRvKnK3GGBCNzXyPYhQnr6uDCZ5Dh8avw1YxEPqspKnatQCZVq7CpyY",
  "key3": "2nGzXqKhwVqLrVYcq7ZagNKKSzhcvcDwoj9ATeoYoZJiD5R1zeQ8PgWhPKfFRr1juHWD7woxP5e8Xv564CR9FqB9",
  "key4": "3JqUbsDJ1RCB5pgGp3oa9UD2qRHFzpi8nZuuXeZmiVX93TRezkkEiryAaZjCaQswMzpEFt3T5r6T4n7mPLKn22mQ",
  "key5": "3Srim93tf2m988WhVgQAUqpq59t3RhFiJhoYpB5ndfQS7MDbwfGkN7hsjmH1Ad7wmrCYAz3VAJVmDLCqaTSebBok",
  "key6": "xkzgwP2TqPJUkHzgS4W11yxZhBQWd1fi9wpqD2LqdTFdeLXS3Pq1xUbTnjRHqSDspt6VPWXJVgZ8T3hJARtuBs6",
  "key7": "q3AVrPUCavYLay4XpoXJy7hBaFuVnYKTSEpizeTYUvegECitHvrXGw4vcaCM61HNUEJZnhAmm73vr4m9iQP9Pw6",
  "key8": "sjYr58bTniSWHMx3FWowFD8zuiHZiH3uXiAP98giHeU1dVbnPA7rhBWV7BADGUPyXo7gB4ZZNRtSqQbFTyEG5VE",
  "key9": "YAYpiLGL7wMWHnXEb1ciQ5GCWHtru68iqwKW2H7hkPF4jVVBGnmJSojnqt4JBeWYEHFTC8xz8ZFiTzzR8gnRNQz",
  "key10": "3ARnRaabhERjGcrioHgo4VrqaTeWWtyA8Q8sDdRWDcyiNXeCqKebe5H9m5H3Gzd7JBh6oRoD1Dzyb3YemKK18QTq",
  "key11": "4zK6CraTGk3UAT2ysu3Epkt17VBH7Bu4HJf2K1DEzc3xsMA9tE5gsCZrqJcsAkR2ZFECYRxpo9sNqsEBuea9z2sy",
  "key12": "2cunRMx6XnQ67qNPKVcjfZmQKtoTvjchsD7wT2VqSn1te51qHpk32hAkzhUyBNarqryztRkooNTfPFizgeFA5hue",
  "key13": "4J2YU9WUZwMkgcToWeMU8Rktwe77QhYvqdQ5ZdsL3WMi2wigo3TrErxPNBomTGsTB8xRzqgYyqK6o7YsFrP4vdPN",
  "key14": "3XCdRFJF5rnDto51xTeS6c3kNgGHtdNbB7yeFxWm2pUZDESCkPLnXAZy5huEoHUyMCXp1WzT22Co1bmXp1phprjp",
  "key15": "EdnhyFn5j2nZLnd6bDU6L6E2mkk69DVP9hzZeLV2TqAM5NpMsojqZ7Xm8AS3Jrgx1wtXFAamWWCEgo8MATdNzN9",
  "key16": "2n4ye99SDDLZBwWnFyGQianhcJbLXzijwnQGDfUVwNvLYvPwAFhDrVGn5kT6NsDhz5ejrEkJWs5G3UqdqjwdvNgK",
  "key17": "4VRkMksAw9xWEiZf52TeFh5ZD8UYSgjywYgdufgJzuZxzS7R18eqNG113ZxxXkAPuQeWc6z6mSQMPY4pvQfaSktg",
  "key18": "4bKnTWEyWMjzsTFB1rTCzckGCzLcLdLgVQQ7JZ235TsMQ8QLAzQdBBR7Rs3nwLqKynEE8bubCYeC91heMAxZ3Ar3",
  "key19": "4ZJZ6VCCjfidJSRFaLVE8v7bB5pp4V3iQ4dFs4CnhzcLQtxHtqUJtBwJsgXtsKYJEevQgJ7Loku9UW1oNNMY5zDk",
  "key20": "3VRGPZKzWCDPhjhdchWZwQwYwK7wwA5p6fYS8cMwQpmL9CybMEB8tQywBpfbE3TwkMTP7FrTi2drUiZCL2Lq3TGb",
  "key21": "5KUJ7qNJsydqWVjg8Rpk77rQnBLiG2aGngknXdst6mDTaXXYckyXucJa4iYMzXvgp74oQDhvTsa1D3nt4zf6c4ci",
  "key22": "2WJmGusRrzbckWiXhEFVdXGjuW12xDeVGBpV75y3JZH1BkstBJVjnWtJsN7SEpY1PcD5xDW9uz49w41ETbSkLD1D",
  "key23": "5PW4Drxe1rQwgigQTZLsshoZKGTjBYpaZoFBwkfG2LBg3tCcRyjGUwEPYHVqDF3iGygQZd8hgFNxVpXTpHmKM8UA",
  "key24": "5P4Jjbn5Jqj9BRWoqo95bNVDr4WQRSpTn4po7HC6BXURUoMRrW4JyZDne8GuaYpeZ8FJ2iv4EDVPsEEN8QQkb1d9",
  "key25": "5JbUEL7kQr4ANaMWWbmGT9ptHm5ZQyac3MBvMDeaG5nRBiPMzzLmSkdG8bQUL4nHiQMQmVpjBJiZWcxGr13UAwxJ",
  "key26": "3z1mnsxt5a96EQmvDZ4Xz7MYfJkyeet7eR8hLccg8VWNZkya5naBRpkvqqdRT4o8PrLLFHzErEiM229fmT6v6YLf",
  "key27": "rQmCoXPtLLgdb75HeFfNWNCJY9Rh5Sj2pCYiAHT4WowuGPUgzVTsSuUicea57gmHau5jhvgiw5Gbjh9sj7vQy2Z",
  "key28": "3CW3L48eWB4oUDDHUoSnWKK1v7MVgpFJyWFzqn9hWwqccrWa1rHp6CrV6TyBWiPxVX1kjEhEdLPGVxNYLWHarXfW",
  "key29": "3hF9PvbKB8dJuUw99f8RjnU7DvhnC1pot8upLCCxcQh1FvEPZ8bGAasAPxyc3G6T4BgBM1wzBdaAh4pmcC218cDV",
  "key30": "4DPXR8qXdfdfXMB3xTPitGMyi36WkDHcu4SCoz9CS3tYQSGu5QtWBCDuMi9dPYmNKAGTg3Yvr72kzu64vVapHw5N",
  "key31": "3hrdbRdx9cYiLXdZ5LR2uoFbe3qvFS73gzv1Vbv9VEp5A2FmN3VKBe48fKWjHwoasGq23uLg2PA9aakN2BZSaKA7",
  "key32": "5yFx2h9iUBTzxD3g15AmSQtGMrWxiAZE5zRDGe6aJGuab8fQJUVYaWfCmGgNjsYyihLPr6Q6s4hwZp9LZXBf6Zws",
  "key33": "2g5Ao39oBB59bghKqDyaoHE47BabwyiEnz96pzRuwWNSAoZSXKeHt6anGgWhGtMYkFRGHnEeCTgJ8Ky71LtvJ5MV"
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
