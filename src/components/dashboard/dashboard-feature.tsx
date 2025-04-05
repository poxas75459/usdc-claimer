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
    "5FfdJrp62hyn44h6qjw924NEEd2E3T1jpuKFrpfdSYMwxn3NLg9rJHQFzx9pLYnkpcHNVwE4W6t2UhaZkhDHcB1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbzBdva2w8szdSqgPn9QABEyLeLAs1z19tjXusvgam3cXeDS6z9Jh9pifjt37dZTbfU7g19n7R2me76iGc1zDyA",
  "key1": "3ub7N8ggTEDEAK4HFMTNkvNNL3m4VXoryNcYqXDFkesSfYzGNJmWpow3E3T37CwToTJgkBVHUhuWNpEzQig9XLK2",
  "key2": "5YKj9o6EdqyWA6VxkhRAEReqqeZXs5tPfSxmPSfEGbus6nhrxFsEd8v5gQpUSUZqcMoE3XknRFtj43PxdMix6YSD",
  "key3": "4iDBsfY9f7pvPi9FfiTGfYs7e7FgCAVQdfk9ePEycQxWiUrnFTv4dNYRAYGvE8fYXxUXgPeuP3n7qLD6FvozHZ2j",
  "key4": "QLkzEypZBgvt7eSS1ErjBtQmTkV2BanVM8b6vqpW9V34BXxwQfxApoDywBAMmyfvcJAyyn4CxZhu5RB38taawMv",
  "key5": "4xuqPqt5sQjbFLiCUc4XwmXdN4V1HX4ZXXBvBqyQxzwBuwAhUEumnunXcsFmbuQQbjT5qs3bSsFJ5rAqAZswzmJC",
  "key6": "3P2HRuzdxgAG4VRnKgARe9gYEtVFiwgw7J3o3rLBvfQQokBzEQMMJZFkDFTFmpdaS8FimYeDiXahvsEWEd3pP8Sq",
  "key7": "63XvLsG79uvSbXWhaoTRcWsP5eaFbbNFXjBphWEKryp7EpJ3brgGNuMNkshrvvSw2uoUu7tYqutRaaU7WVk1yvcU",
  "key8": "3BavbPBncDSETbBEuvbDdw8QpLC7vfRHENMDPvjA8etgw2DoyTmKxxMtDK73YNfu8Tktw4EZZSWvQXZqY3ibBHrE",
  "key9": "3UUozhYEsa8KUu3tigm9GpDicQbhuzAFBPCdcdhyJ6ryZrnd1HYNxpp9SgbPPLA4UmPWn2nc9nJacjPdhU5TTr4G",
  "key10": "vS9H4RYpuJFsFKYDLKZAcgNcpBmhPfvLEysMorz8kyhkPy3e229xoSQra247qChCBmjFmzVTMwN1qiR8GQ99bhj",
  "key11": "3yCB2ERVxpPCGFamZh87YbsRHKExPnVwTjmzP9JHfruw14yoVTYku27cGsfhwAabJY14ENAKKRPVoGsHdYWmi4Qx",
  "key12": "2Wh1K2xvFhp91yaMteZne48L8Qfcmx9zwZMWQJ6x2VmV4HVE9u9LRWZCnYax9YwC9YCqQPtnaTJKBZoW5CNYcBR1",
  "key13": "2m4oJLPLJ6MJUJXvznyy5XXdkS7yyZBW1ompAs9T5yya15YR2cqfB7sdvxxaCTQDykGYxZRe1hCpM6cNZaaPNSi2",
  "key14": "4EU7JNsijb4qqGcHbbeTBHfWgEoYx74MDNSRJPPEAdxTrUKTu4tvKrBzLePDHZqZKqkvB2tRoFioQhMV8j3zLuCF",
  "key15": "4SxTRiRoJj8pTKLmXW5CZeuaDYs9Eb4n5Y5qp7Em8fNMHMY29Xap7H8U4QnecF8HVMPWgEab1kcSG6fsNiJ8APQ6",
  "key16": "436ytnbePQgJj8YFMtakPmeqhW16pRHkFStCRpJ31EZMpKANyzgBJyzJcoXSoe6yac6PWeoPukhG2xoCvASUm472",
  "key17": "37Vu79rP2S7Hx7JteDdJTyYE2dWp5jPdKmJpP2SuM7acmbwfDcqFJemehFVN36EcdLRKbvvpp6x2FhBPeJATMqi6",
  "key18": "2qGCrbywMfVVA6Csc8BPt8fFgRgDgPxQxHipuCQ4iJTHm7bu3vnZUPYMZShANLMFARQNuFq1v9UeYgsnCPsUrGw4",
  "key19": "35ttGpdNvG4mwu4HP8f8uuzBTEcLnCedV6YebDLo14EfCZ46LQ26T7Ecvy9DFnjQw2ybCgMn5TMxAw3dJ1WrpCWC",
  "key20": "3fssVPpT6dnwYtgncKWnJxtzVNhNWUAT57tJk5G5C5LDP4C1MLEmxZusZ4ArQF4ViH8ZZEFQcybwQ8jvHBN5DDWN",
  "key21": "28Eesidx4NHXwwnKMuXUtSX5g67DXbXd4BSfBpX9yHHEq6z5EVJthhRSZMYnbSWjJw2s2mSkmKhxXpDZT2h97xMi",
  "key22": "XdrRiMszieRhMbWdkmSM5k7mhvjRbL5de2VcxMSNB7UboowfngXGGiiZVrutd4t6kj2bA9mMMuNjZ9TSJJwQttB",
  "key23": "4q5JYpckacXn6rRzgSkpDofbD3vNU9g8ZZsrDTWAoSVrFNfesjFBQX4MeFJ5PNSew1Hp3KMP7WmqAo4yVjmUiT6N",
  "key24": "2GPZeUijjDFnAuk2zNqhuRtd9ZLjFaZYFGNFkkKyeFK4PXSeN9N79RjhbEGCwcMamkeC4F5SoAjLRMkFt6p4kHf1",
  "key25": "4vAvJMoYekeeorcyvrdvXaJgyBkwPbsf24qCdzJUsDgtEsppETsSVWY3uaqkr4H14V9muYaGptdfEyN6TNPqDb5f",
  "key26": "55YEpTUVnMGUCkT7zzmEgLc3HfKVimtT6Y1K2rdhcM8A1VxmBpGgcKzRdrN2TQ5jhpsYMmfDCLqMqFtydQv9RoyC",
  "key27": "4i5U3b7JSf8UmukKvj8cSx2p897FrGKa8yrKyGQfjQGjS18pRhszWmxHAAvKdkqd6ZnuRqK2hiAMvdECSSp3GfPL",
  "key28": "4ncnKjzLoS284ezZYvf7snKumnpMaYBNiwAPBsmjYfzntDAKsSe8bdNHX2rX6Zc8MVWNaFEJSZtfU4swDfwcbFvb",
  "key29": "4wZR9c7tBZt2odeVSTqyHJARpfetBSu7aKqCuuECPoEe8TxBCnaT8fNJSdDg8C9GQTTUy45ZkTTEd5HWKVdVXSFE",
  "key30": "5cj4rZ7qK1ESiifG6rMu9Et1RoALVPT4tqBbAV62yvyazxUCvgaNrqa6MroM7nf1f8CF41VzJaAiupG3m9CqC7vx",
  "key31": "4rGrY1SDFh4nVsmRJgUHphmf5ohzGqTqaUVEJSoczPh6b2RkzeN1sqAdFVx9dTf5rWt4iPRsRrFR1Ng234PFPRVN",
  "key32": "4ixvxvS3JtQCG8NHTx4Phie5zTw18BxMArdoFWXJDuBLTAJyByBRJRF4ALexz5MrXVH9E7vmpjqZWHGF5G5dhEXA",
  "key33": "q5GoW7Q9e9hLxcJ3NwasADhNw4oaFS3xBRnJytpdPBDetxnaYkoqdvwzp2PU4rSM8emPeHX9eBhPVNF6bPMAmSQ",
  "key34": "21SbvUpUfHrLceFQgxfpfQPfumtqHVjVdkybvqSeAbbTMjmFnwX7HReUyvkdseogvzPD8Egy7AbVzHFbjKZAb9qy",
  "key35": "5DSidCQCrdChmNH8RN6hTYsDHbpJGMrNMQ3KM9uCgVBVkXvN1dNpRpQpDmCxYKR5VA59Yjg85a8bPM8tTnnyD8fB",
  "key36": "5KA3b7Jh99cxZR7VU9HqpwVXBs7Vg3147YoZzbNEXManKAcDjzELVDUWLGqthgMdbuXcJYnPLQrhf81tXirhJuzF",
  "key37": "5n5yxRG5j8u7Xn4qdQFU4zRAiaK8m2M3xURhFWLNM2ivigBYLxG9jf8p7pQC5UbiaQcAq7b2CLqK8RrQgP9LBF3V",
  "key38": "44sGSuWiKr9uWsEVTkaSY4c5fnu7hhZ9ZNyXLX2DjqGthp6wvdNQDQ3xdGuPde9BXhK1UVkCwN9ZsXhPjKU1EtBk",
  "key39": "5Bur2HPHSDYBMaL1Jvw1CjZCfp3jpcHgbd1VUcizk5VP3v1Fsc9Brg3rkGNbwa54Z4RU96nCkKB38UT3bM4scnTi",
  "key40": "5YZpGcTchj3exq1eyHbE6ciMoKAF4nNWcMr9xFWwngDFesiUp55widWpY1RxvchRrqMrT4KhZE5Qc6roqQ3Mdpf3",
  "key41": "4dnujLN3FhAM4VukreKL8zZmyFtTrAkNDh7zRrG7hE2V1mLFhYUmrTRce4H8PA91XBEk8ZvWN7wDuT3NntcgXBtn"
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
