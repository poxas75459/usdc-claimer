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
    "5hw6t9469mCRNcrc6TjdezpndFT2aX12ZLtBRwdFNhTjcgdD41mE9oJ7UCGaytFLaDmrThytGxpJ5n5CQF4VgXuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Gu3z4JRyg74VFv6abnrEYWoenGpzFA8syTwpHuva2dmG6mByVM3yEPvK1AutkE3NKNJkFT7Q8BVjoK2sdso2jR",
  "key1": "5XBvyS4hDWxevtRLFoKcYPzz9QwqCk6RNkszn4n6dbLyHeMyHqC6h1bT17FeQ7fNLWzPf8GxQuTewmanWdRHBbYC",
  "key2": "nxfKGT4ZL3BnJC7xMs1fwZr5dAq2S2jUD5i49qf9MwvzEBu1nTVFfjLbSQSihwCP7NpRC4Jc5FHwZPufCV6C6bq",
  "key3": "4Mn5PDaQbfe3E4FAhcRqQKDMHp1AQ8F9Nm4NFRLLF5KS2SEeekSZqMQikjwXzuTZoyXeHQxabZP7sZJZKdNHXyuK",
  "key4": "brBo2chrBuw91FhujcUTrGPBN6LSEyXiUp6L3FzrR1SJAKcT68eUcBsnaVH9Jgf19KBZu51d3yLKmUSfJsmvrDn",
  "key5": "5jZ9Q5BqCKx6gmEojYJGsSAeJ4Jh8QjVTECSwbQa2mFi3TbMDbihxjw76ywDVBZ3VRtoSsn6WEewvAhGA4dh9hrq",
  "key6": "tKQhRJr15Pv6JWvQmpm72rFfZufjkor86hohEqv1VQhXWSWrYv75ftDxtgb9K5ThGY35pVC4Dc3bwRcjQdeskR5",
  "key7": "5n1YqeBmiYsy2kJygdd2nJXym8Jct1V7RgzdgPoV6s3ufHDsxgZ4seSWFQs4HDJ25ZpyzXB6ybZfUDtyTzDJ5zCK",
  "key8": "4RE8B8cbt6bGCMmFqyDpUnjrsToV9uSuQ7KpfVMZjN3NaoPp7RqbKFx5y89TvxMJJKWkZJix7QGez7wHwBMYYA8e",
  "key9": "3P3HkpmwcddDam66c5g1NiHMhNFTKMr7JM6dZCtiM8u2dbnXQeQz6fjcSi4QNQ5ewZLE4zrxBAQZaHvfHbRdqPBM",
  "key10": "PkTw2xcK2amZ9NYdvcZAg23kST78wgTUsrm5jDsEuPDA2F2YGGeuWemFZ6SjJKgX9MdrurQLG9vabbbGC2Cdtn2",
  "key11": "53F4pfnfUNZPtkFJ28FjsfGAe5BL236xJ5VghJjD87jDS6ejGXFdpGM8yUPLi6AcTF4dmPby6yGDUVmMeZhw1QqS",
  "key12": "UcYcoQ79L8RM6Nf8cicYXgUcX14DoNyjkYRBnG87DmJWwnFcWTHVNHDiiYaawDQsoxvx7eEgjv9cArSYtT8NZho",
  "key13": "5b97i81cT3Hk9AHT67RnWqTynPxtMtwLnbQwS8W4HAqdsHTMyAtokMtuVuFAqvkBki5iiEzduUnQyuqF82SZnjr5",
  "key14": "3zsvWsSDZpq7E85asxsC7C68VSB22Caqt9TitepRhieybNgJNqz37K6W23QHPBSTJ7TcFiPTAWfpe2qDp9EJ1sdp",
  "key15": "3pEj8tu3m8rZBeyFe9GZzVijceumvc8RJuyxP4CenCR1y1hr8RKJLkSWQAouVWNwK8oJBQNzRpC5K4sdyEWLjF1a",
  "key16": "3K2XjgWPjpHTAa3kCCNAWLkNm6JLo1i6Gnir4XXRDdbhQi7PY7CyEvAPwSxoT21Fm95jzjSdLFfCLinpzPJA4Jsm",
  "key17": "3FuSbJAvop4sfGB1x7rhyAJMT5qy1mrEFZxFaiBBRQZ9jbWGbKxbpgitCNziHrYxRSXCmRM1395x48u2k9n4axqV",
  "key18": "34tJEPY4DfERMdrVAe4pCZfPN3yFBx1gNXP5N7vG5rAzrQrAzWdHgLf8dY8bUvqpQPTnjQMTTvPCD9fB9oApMzhr",
  "key19": "44FWH4n2PB39RGdEMP2vuqE1PjBKWu3cHixQBbxvEq2s5zEdVhnzirKrbqLHh8oL5a5Diw2cefiEEiebiKxWysLU",
  "key20": "3i7hc3PSgfn84TErF6mHEf7Uy59HxvEgVsHquhsLoA19HzNhgjyMJE31zSecXtt1RxfK1xd8HKT65eu4ZWTAiDBQ",
  "key21": "Avi4GCiJR7THNrj5R5E3MQzgHjBvNrFdGUYKkYJtqRX3hE1C63DJsdo8og79nrnqtdQQD7sPrshUZqLMqdWjV2X",
  "key22": "4V5ib4mQoQ4vtkjKRMktyH2YwvA3hHYbuEFcsx8nNDt2xi5sVGX7JDfojFAco64kNAkkPqm68mjnwcXDtEd93sPD",
  "key23": "5r9A4mjauBbZHiqZXvgG2YYC7a8PMUEPYoeWBEAsJVfGu1R315yJdjfxtaTAuDbVQU8QHBHpKaNeynVmk1unRW8P",
  "key24": "5TmbmssmN7SFrqLRfoqbW3X7NRH97P3Eo2U96FY2h32nkoZ9VW7csTiJKFQnue9uB7pjcNp63BScujh2Lknm9NbL",
  "key25": "nyC9npWdSSW84r2MZTRHsUf3bidFCSzeVqpPehHGmaoLJMBDEyiTidwyWm3EdqRMUc3tVkizLmJtdQXbk37k1KW",
  "key26": "4WCgfLB3m1Q5eEmZkVYPAPcboeSKCDepDnxN1Au1AUjX23nrqpEqbP5HuZ53UDLHSkn4gX1rduhUmZ38pezpMj7W",
  "key27": "5eVMWtg7tfYVreRD58iDvEVuCGnJQBbie8whWFp4QkBYb8Tjd5YTWQ8KTUQasD7i34dW8Y8VvVmpQ6astuzyyQhW",
  "key28": "4qgFUNJ9k8WhxCtCVQpDe3DrNosvzTZgD8FUznvBLrZNYVbvD6g1UEEXwGpEBu9RiFKAouCTWX3wJXkTa8ziU9kc",
  "key29": "4xarRFDUxdq4kYy6ZJ2F6cKroa2r2Nv31Q5Fm2i5Go8nQyQsy72RsBkBRAKNJK71Tp5AGBz5sFNc8uQvXFAwVkhb",
  "key30": "4JGVNB1VwcqGjzBDZyfAVhvLQByC6Gt8V5CZdXr9jGJ2Q2TDmL5EQ4djyirXk21433pkYAoWpHEykaXNCYk58LGh",
  "key31": "67WT2Qq2nbMX2RgQ9Zrv2npwLrRTHYqFKGrVC6gE7GKg3iThRnEhYCj3rBygYBwAEyujGwibf2dyDCUbybkZztov",
  "key32": "46PLQQuoNknGwzf9h4oVbVtzNxmmeamkRcY6G5vAPnqKhVy89s5RBCwxyfQNt66KCecsQT8fykXu8oywjByge6jA",
  "key33": "42KdJjh9iPgFmNTCS7EFXgfo7t1wpQudkCkSFPCXLqS68M85mbapnJbn9mjeRVnEp9dTDYmrBnnazSF3urccSN6K",
  "key34": "2FM7JpYJKHiEwY7s2ysPXX9KPFpUZDB7ofcyTMS2a7VdiFaGgaAhT2jWtH7tVECYGnXLGQqRjYUnpAR1utwiDE8W"
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
