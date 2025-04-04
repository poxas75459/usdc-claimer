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
    "3pTzajkhENcvaAGF87H9KTmK7M9PaAiYf8K1KmaDopAjYpWFH8R46mtLTS3FtwVd4VbY44Kyf1uhqVugUtFj1kPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YNV4SxRHe8wt6FgvkV6mvNNDv2ioXWqDWMY7L6SytmxHR61RVs87DyTvuRwvEcV6eUjzFDeXjP3WTAN5zWTHjo8",
  "key1": "5ju6PapiwcPFGiPhmEvq2ZwB67Sw28i4tpSd1pACZUq4hWL3M1NdG7UBRSNSSf3EqbZsg1MBrPXmy6dRAyJJ25so",
  "key2": "SQD5fxiJ75UE23ZP2hipjSBCC2DMYtjmj5i9Gtc7CAcE8LFJYnh5qwtcJ5foC1fSFdZ9HzMcb91X9iTfdvYoWVk",
  "key3": "3SJ4J8XfEYeXEPCTPngMpPqcy7JCgDn45TS6w4uPwpZ7aTJrnxo4dbFNgwdY2Q7mRcuFFFHNGW4dJeGUTW8VXTUW",
  "key4": "4Z7HrHcbHNSYAnRKoHxjofrzMrUpYNp3GXcZiZpMFG3P2dmfNWD6asdt7Vjg3EhgBVxpGdDQAdk8BsmSrRm1KY9u",
  "key5": "5aPtbv4DBELYBDy6H6KeMgL9YXx4asFCsi3r8D2Tnkj729S1B9FK18fAMFZZrPHUiY6hbygGhB9rhqFFuQtjWepu",
  "key6": "3ZzhyijDW952vHTgXrys1yPxGff9ZQmSJeCC5jAQ9UvWxjZhdsNv1vbD5NBwasEgMjZxoN9TbAfucFBD3cJG1Pte",
  "key7": "4Ka5XgRLCv94k9rX5feEMwNAWXBPteB9ruAjV2bqcJuVUYCcYEnhP6P8KNz9syaoopEHiDqvLb4FXvXpZHoqkpVQ",
  "key8": "5hyoiF5Ujf4V4VkcGdXBHRtWrV22ivYTSAU8rEzUE4o8UmNYBAKmM2JUcjpbDH5tyViT67hS7jCDuqoUKzfqhekm",
  "key9": "4yctM1274Z8ngjzhuyAVUdBiMUJZmKJ3EZkX7nSnenqwv8PTQ3BRGjPDpwgx22ajakqagjqtqy2hNJf51tdZFAyf",
  "key10": "3vzW9nPCakxi877gtrRNcd1878k57y18vEhrELJ1XBQpDDebeyUV1kbJhUuwMWnsHeVcuCsSXjeHkKBX3MjCJcFw",
  "key11": "64DdWrM7rzyMaj8WypCC8KCCvpeWKM6eLGj516pvaHwypdUR1q8vdZLoZ2dMG2defXpuJGm7sKYL9Cxz8XjczypR",
  "key12": "5oQjXZaxActjn1Pfi1JcXym3kzvPbgfcpXmfxf2qJ32XZjeYwU3hjDHtj3A1ntYj4AhBcECixxqbC5H8MyQsKtuP",
  "key13": "akB4Us9sWkEba32Trb9kmFVPVa6W9NHVXvVCcdwNftVrgezB4akg9aCrbp4avRehsAQVCkYKiejPsJk7LGfiWVE",
  "key14": "4zhLp2ZCATP6vsBvXd8r8Yw9iNfvLNfkda2j8gb9V5iRYuSR3ypr48GZFAT8NU5oSW2gSUjV41ncFwqMn5C3xmm7",
  "key15": "4pzQDzoFGdkKm9nKCVkGLYHhU7WUVBEUHXmzA29WnMZYgsGm2o7Yh3FFLzB8csZjG87kxmfQmTiDRJSnN4WM7hoy",
  "key16": "5MCWJg6kJnR9dBBFNu4SUn6YzASoRJKVR7U21yDBFwo6KzYd4rwLcAK8TJyMFkkghbFDGCQbhMd3gYEZu3Q3ztxq",
  "key17": "2QuixFacBEPXDTfW3tfYHkxmnf94ignbwbJwTUw2kqQ1y8T9Fyh4DpVVvxibeJ5HTvrBc6wGCVijfuXVJ579R1Rn",
  "key18": "2Nr6LYMKfKsjPVuPqvT2HZdog53pQdhe5B5fxyjVTYrXrSpn5fSVCCNw6zHjmWbKdAf3KbrRGqmvxFe5zN3JwGUY",
  "key19": "4MHaRkSADNCZ1JgGaRSBz5UttG1qUinUfu2eLRKtASMowMFZYipgSvW5dvDbtnxhNUDGNpMP98oF31sNUZq4mRA7",
  "key20": "5GV1roSGyHD1eNAe5uBp9KHb132g2V4s61kkkixQzXmmmLvRMYhoZUnCYWnCdQQSXqSxzjLUChN4u16qpxGVTa3f",
  "key21": "tsFf4zGf1KjvJGSgjYfgeWNLqXTj8EWrTor3yVpagKBYD58UCtBqzstmWXV3ZrBmURFKD8NkYQxmb3SuNi2iwRs",
  "key22": "2y6FUx8etKDvhrcqg6iSDcGsSXHBFnLdN2Ce9nR18ZaryFkbwb3nAkHPsS34mPm4wcqqXvfneyN9PxCnkRQGNShb",
  "key23": "zoM6GN6vqiJgQsLEK6MJgQ9uUDVnKBZD33chUkLFBt6aYH8DVrHhcuRCuqkuB6tpNCQkawUBpybyfiDaUAEyiKj",
  "key24": "2WZu8AMZQ1nqXZDcMRsgdHppEi6PQGonXhec6jCHwFFeViwWPt99T8JHnLMV3U1JzgrFo1rU9rcexz6kmGMu1hmR",
  "key25": "56DbbPst3feJgAE9QUvB88uTPHMhGTVZ5pFP2GvLrBZZt9EcMrAn8VfYezQ1uPpa4UhDcRZ1RSUB4PCw8Yp79URh",
  "key26": "2i7tjHJCmsGqG3jNXtzvGPLsRg9J7UtqZxPxhprzSShPbRN3mjzF5Ze4LSZAg93C932BCo4hAVGrDfqcfvTV21Yz",
  "key27": "5R75EtPb99XeJvVu4sKY19D1ksnoDzCNf36Paggx6EwGV2z3EtcyaZd32vfdcBr1gUphyAfan8nXrvyQshgtrjmD",
  "key28": "3HLkG3hzee8fq9L6cudH6kyqKVCsBkJym8YWauePhb4RwJ4ryxgzVVamBRWoWnvf8Vs7mEQunT7qpLXSXLGwqUq3",
  "key29": "4uikwUeLyskvz5ebYPr2DkdPjSYnUBxdY9yzDueHUEaZ1pDBVY6yn9Y6YzV9jJu6HDvZNhX2hExMCCJuzqhohCCA",
  "key30": "3YudCBLV4dUnGMH75jZSfw2dxKSinUKYBSGDMwUBv5AakPHh9X2mycUrrToV7caNxXedyQt5wVKxpRscW3BTjQb5",
  "key31": "3YHe6G9zdY1RuHpnpCmibtnpSSiUMhCudiKuJo7B592RJuurEu775wePdKp3z2u7sAPK4ijzjwVpPCAm39wU6Xjj",
  "key32": "29ozrAmbNBpCtD4eUUTa5SR7p9S9a3FTgcdwqMCkfQhWKi4YTsApPWm7C5i51AhxDk1Lxo5UpnCSxqxJRWn2HVm3",
  "key33": "2V3W7g3WEaFdW9qxSjofEqJopRSNHKP1Gn3Xi4qFce1qsWBY5GM4c7j7fYhnW4AtwsnzJR3zAerBNpBCqv5op5rX",
  "key34": "2zn9SJPvcUCb9ZP3Z4LkQbtZb12FwnZYj9VtWhY649AzL4WGc1bpxDfR5dPjJepTkj9cLGXLqK2GuqMccnvBW8hE",
  "key35": "2xP6brFEd747M8xn4xu3TSGwLzVyavpDfJ5rVCSTpybQ5jo8TVKv8D4g48DdD2zVsDa1QaNYZEt15KyEjEDo5dSN",
  "key36": "45v9q26cj1aSnHnjDW1hZ5LDnwf6aiYyaebCJWMzmW13proWgLtZ1CcmocfAr133GhWB2Ka1w72rX7FTzhUyNkc1"
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
