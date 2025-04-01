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
    "4sj5RTmAN9sAujFgaFL4Y7cQtjKKKndeahoDkJ1n9a9mjKNxoKdD7fwr1e7CanuX988hiX7PwChSrbajxa8v4JXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y9fmyVdDXaNuzMgVbuHG29XQifogNMLSHkM9MKFVUR4tXGG6B7kKVA94NQckrZzQPFN4YaWoHsCb6BZWrEKYkx",
  "key1": "2m96ycQcW1barqGuokUKHyLkJGYz2WCFDPweony2orEWS39J8MctzrLu1N6hxkRmB2E2LF5m7y1S4cQced93aymH",
  "key2": "8pwViCtJcmpuPzaEp4rEsdhFdXW7MowWvaHHxLWLQsmTbRy5iKnU7PiUFbsKhfHBw1WaGAhU9uqvnPMcJw6C4PQ",
  "key3": "4GCShRbDWL6uaRh8rHjHfzkkBxm4p4XZMzQG25s8bGdL4aapXGFNo8QvDAj82DZMTsaoUh1PpW4hpsDg6fMpRNWo",
  "key4": "a77Jd8km64WiAmfz32M2HmMYRibq3NBnQBwP8Lz6UCj6xN7mNmDxf5cybxwaJquqwB4uRe5x31urzwnQSWQ22sv",
  "key5": "4y75UtNA9xrvf9BiScCfG9YfZT7eLXpC4QQAR5YXG89N3gv9RqgEXyn4TUKDJVF5NC8GHAiiRGkoQMbMGUU3j1Xv",
  "key6": "LzaZLLirGQ2y47DfoFxdiWgis22ZcBDzTf6iBCf62vbvr5GZJmxtXtMqrgvuuEc7vUYbzx8AkyEqNZGdzNq4fET",
  "key7": "5dCSxEWVJDXwR89UNdEuuw26nNZtaSyp6fdH28HoQ4U8aZeRGVWfctwCKGgnYgvc2RrPri2zvtw5NRrxjii8Za59",
  "key8": "5fAU7pFASyV9Dzbc1qTnvc2eRHVzR3C4r7Aj7Be3uxqzBe3fGueqEHFNqNiqgfqoAFz4dBLFjpMTQD4RPhtfNUQ2",
  "key9": "hCTwjeGjWVDcucaUEoiYGUdM9GV4fft418L52VadPbs62d7mLNWDxiLFgNHTUxFhG3QaaTtJhUJ7DjQf2md1v68",
  "key10": "2idZRx1qVjBz5vBmyPGb5oSSB1QPHyEXR6iqfUGJmbrSFq3eKCUVkvbj2rdEYEvpRtuzBvmoPQPsDzsaqvFGbUYo",
  "key11": "5vR9swJivELazeCiCAd98xarW1p98VPYwajLQhvoekCrhmvwmvkN18daF5DMZtubApYYsKGRioUwtajdV2eWKEVZ",
  "key12": "52hWnQoXCktnVmoifd9dr48g2eQoyb7HqHYENuJa1o8x2JbAZLD6orMavcJaMh7Q4wh2iLx71XhEyvVyKWHfSMxD",
  "key13": "3cjnh3991CAup4HDoJLqE2BwctL2YYVfNNmFUZFsyiYdcpQ6DXEG784gaemsf75PJ3JWto15C4EZyCbM4LE7AUk2",
  "key14": "5yPLT1UgE7pbYgg1fY1iYY4irVAYXYSoHg9QGaSbzcNV2Ps7vY7sda8tWihd6gDHSb6feBfjSsk2imBGzYtvz2MZ",
  "key15": "3jjDHkk8afd5zhoGqsjuizmgdg1Wg3MheiYz4EEiNG912K2VH7rNRSS5LsGKy63sJoqD9ga7Rm5FjXf5bUiekUne",
  "key16": "5EtKBJACUhdktWMUCbecC55EE2BvwHMWov2jsTEsScKTgF5WEQMhwtege3S97pkE3EYWNRzBaWGUoUrSgfSic89j",
  "key17": "3hQqUiqRWdgrYK2GhndT2VzfU5AUYd9MAgBptQjHL2vsCFWwUyRSPwQSeQJbyaMTW5jiduEZwnDbCHvZDLVr8uPs",
  "key18": "4w5DqfKhZ4XTxWHrC7YWoVoDKqKt8VpGz7bvyZAQ8sSbCbbfS99tpuQLp137sai21Tu9K7F5R9iWBS6xGtPjF4rX",
  "key19": "4ww5eVkZRe2Q8g1Dw4ahsyq1Nc4r7hicTmPDCc7RcGwrmefwc6mXr13ewYVSubmXdWDoLR7HBYBQ8qeyJ1KrW6Hr",
  "key20": "64YTemyBqgu42xhri1DRQ2AaqpxhxuhXJ1REGypt1wCekFoi7VX4TG5ifqPMwBvgMB1hoAS4Az1vzAgScfsUgJUy",
  "key21": "2eFAmNM3PcG4TRQwh6cQugUugzw2aQzah9VDy47fV5W2WCRnDxan5srxie3RTqbXwY4tMAKCeaBvWCHdMWmGPPjm",
  "key22": "4rEQfDoryyiWKcdAZdbYfJWiMYSXvAHKDbAMtcDMyU6JzBFvQTPNZwbJ48kS2VUxMkqewQECUuDpjrWuqFex3hAV",
  "key23": "4VC98YDMufmqex62WbhXJyqYJmhyqAMCiPPdsK1svHu2rvkVQBt4YGzF74wYrYwp65x7V5NfDKseXjmfF5UFn7R",
  "key24": "4GbRUd83ZM7k1SdygNDappTLU4s4pfyu1v7R2syaPYKq6VNJNKxrWkCMyr6zpuzGVWPWWgSo2JSRNhukjcmJR5qV",
  "key25": "4rkxWBUbzjv9VTG6vFyMa6h5RqwfjkiUrKYph3a5mfbTmVnzkKCkNh9eXFhPbg3NymzaxKucC9qqx2iFkFi26dU1",
  "key26": "2Py5qh7exaAz2Af2wfX4zKxqswXMpFV5rJsDjDRi7G1DZs8NvoMtKq1TotRiAs3p8y3AwgCLTonDs3HAaQpUaRNW",
  "key27": "2jhWmSa2vtpaSeumWukxaB4cV7yjvJFb4UWnboNyP1JVkRaYpE3FGSor6M6XcV1tRPU3wDRDL3cpeS4vqadBdWcn",
  "key28": "2YMvC54Uap25Fvnx5jnW9wu6GVv5ZAQzbgQyJ8zPdUMoRPEuBVy7xS3nPdVHzHzQDDDFxe12HQsgDmoegXVyvw4G",
  "key29": "47F4Q13xMbNTEV28En8wZeEHRFuMtU8LRVTXtEd6x1wwwWoWQJgqq81syEqauy1kRWwCCyYtQWUx2ahVHLkzxMfE",
  "key30": "5utPXhzs1pRaTUWCU9kP6W42VwT4qxDn8GA9S4htCvUxAGpEgxPg24yzmjAwaCMsCUmTbjX2KCAkC8sJ3uAG8yVb",
  "key31": "3nku2KWptC9tmvZtZdRfT3ZSHTGZsMEWjmn8yb7j7x2WhuXqHTA6gJeVXq7FZSbyoWUqh3bSsiECCEGc7QXgzQ8",
  "key32": "3edcQfnakk7qVHt3RbRoCeE1WTgbbDpBMfjYavK2tALbR6whh3M35LxjtdtuVBq6BZVgqEf9mNHvkJ3ZHj3zrAKE",
  "key33": "3UF2tsz1M2gLpAXMNBLWw3MSeVWsU6jv2rpXCDwdJWCi3DE459y5gmPTe7DFNWh177m7QdmiqZje4Xrsiccp5AyS",
  "key34": "3Seiie4uuUU4DckCrn6SLLCn4LcZXQ2VV11UydsaHsJMvdaudGxQUSd5EKXx1PXF2xVpxsVPnFYp8LF5BRQnfo7V",
  "key35": "4FZRd5Bf8tLMgwEkyjJ4DYC4P2idVsZjCbtEY8G7BrhwgaDhAwC7cb9EouaNEJFjeQHsVW5QJsg8BxjuBW7jcLrz",
  "key36": "riwtTLrtL1siT4eVeSPaDFuz7zqm6DKbzAEpb8XFjmfe8dy2Apsvv5v4SKbZthN52dWCR4ERmFdQfz3YVWTv2dq",
  "key37": "5o1rjP4WGsKmWqZFoizpSG8ZLBL8L76ZTpMgBQQyY8nhqk8vAvvcYVyJZ7MxMNtYP5yj6kE5FLGXXMrN7JRud2kX",
  "key38": "3WpDHej5m7YXFoKVnZszaPrEJ7km9pjCvVv9RPLgRA5WNEF9VG9zRKHkyzVQPUGJiKaTJW25rt7ho3ZDkH4Y2DAF",
  "key39": "2Miz1EwhivGG7qqU9MKNxFrqExX4n1ujDa5i4hFYs4jcQRio4yNwNpxUuQpkGGygQUDV5Kw64oQH2xp6Ywi3tkig",
  "key40": "4neMkmppJJEC9WEXndzv5ZK1aYztFTNAdpx4JtjnbFx7yqiA1mSM3ofchEXmKsQUtTXdnWq9aUzfPWsLz9fMNPBe",
  "key41": "2ZVfWtn14WXg9BFg3gWrmarFqUzrtTwbUiPdvnUUbwUb9vSZNaur3s3oKPNzZKFjoTqfRD6QmSHnHgKox9yEnUmE",
  "key42": "5FHjpguFZJDZFkEEWNtakVLRHX4bKYRudXZVH8GM5s5gaHQNWobeRyt2bwzGZNmYASM8TreLnwxXnXBAcWXRvYu6",
  "key43": "h8ALzbSPSKeke2XHaFgMEDBpK4E3znHRM4e9pNGeJKvEYMbx1AePvymG95RxXFP448JAjva1x6pVHKo3LjEVVYV",
  "key44": "44xy7aPvPCUAr5XfLBreCwzRUD2rHdPWeeoAMcuuGaqYUZMtdp3PeCCm8Wsc6NVRDhPfiNbPF4F31GGuSYufQR2T",
  "key45": "2SFGbPqitKr3yjDYd1sU2ZA23za71o8ctZjXPVsUoiFRr3NX8ueHQSP1zRvXsEidxaUTsLQ41konRTEkGSoKbfCX",
  "key46": "rKwRVgTtngmf2PY3BfTadZ8JkLncmYsBVCo6yoqzXTu86TGVJt5S8X8ftypXHGcGg62F229gfQo7Swuric11KA5"
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
