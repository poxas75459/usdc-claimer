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
    "46iXjyNjN3TZGQ4XLGY38JfL43C7tBHTbHyVn7rnQWTgtbn8kZvDDYCh76nbfURbCWG6Z8LygsHPBZy37zuMMFrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gEsAEQgPYJuWKryTixb7tAbf34GH6H5e3MHgfCEfMoQsGgABjhU2otBaEkGVq2ZjutJFGNpjbwoZbc6h7aW84ZA",
  "key1": "2EKHCeB8oYvsYen3p9HGoYikro5Xuj4YRaYy6EZKptZbtdUju5QKN7L1F5wTsTcvSqbzshVZumPWj5D5SUx6CDQw",
  "key2": "x3TPUkcN8JGy7NsVKGrDcV7Xqsq1uqktK3XzPrN7v8EoAxcpV6xxfb2veuUo4qjWLC5YaHyUUSR8DCMGbfJF3n5",
  "key3": "3BuivfKpijZTuonoX4Tv7ThdLvAnrCk4LoCeJaWdWW8HmbwGRFh51Tuj9TfqRbsyRNKBF1icd8MTaxmzLfLZPTek",
  "key4": "3GxuMUA9Q79jPTh9bGfrX55w98HGDGvczytUSMp8PKPK4ubZnsY9kwUgLhKPVu632grrHaqtVpd2kszAWkHfNxFz",
  "key5": "5a4PKStuZPGp2U1FzjgZA7HBvdqsNWpJ4zatWuA4TwSBNnj8oSaMTHMUZwzXCtTPSoqptUUJo6PCzAMr1twHx159",
  "key6": "4XnMSpSYhZ7Z6YCf5TH2Ldzeiv5AfYsB9hbNsJRJWSJgS2dwM9AECXVQa7tqU8jtR1B1ZKr4RxbJ1ZhPqBgLhnx7",
  "key7": "M18bSJJfis9C1fzMNKpuicUQ6fx58EPxBEHjmetpiWjeX5w9ys9oP2si1x3kxUdTvHnpmdvDT2BtiuWofTUKJCV",
  "key8": "2jqwAhWh2seP5DGFqBB1ArbffS9yq8CnikEe2AzwNtr3eFt6uEzHbXPEmvsbFbyAiUMQhkxi88dcdpEZZxnkfDAo",
  "key9": "52y8D32HiLrJNPiMKkz3FjdtpzX6nxVAbE1zLTK3YhKcEqrSaEX66t5A2ZLREyrtHdiBNmvFjhcrVoqJxsAmHFZD",
  "key10": "c5uAaySftVbUEdVEPwGHjNPkQ5DAK5TFSEfqZ9Hj6dyUFNDYXmws3JhosJJ1wG5w4FZhE4MC84FSp229oqgqHoN",
  "key11": "3Pn7N4KNAE2iCm8565kQBjWXHcGFaJQwm8w5zwSiaBHXL9FtUC1KUZ7tRcDPpa8wCuUgZm76FRf2g6bK51RaRBqn",
  "key12": "3cCPtu2wiBS6Ma6bKoLiCvzihHfDyi7bNNMchjAajN48iB6etYy9iQJ1oisJxCfz689boUJ6uZYXhvpa82PRGquT",
  "key13": "g5taL9TLi8Ut2R8iNpU2sSJYEfnJvDN1Kk7YiPD2QEBAhkPByTDRzcCojmK6Ym3vPcNRubxNvVtVoWFcWxHzqJW",
  "key14": "4RbuaKQqFU89SgBGeXeHDZNsjNgqoxgfYnJcB65ki5NDNLS8Cw4euDyvu3yt2gXfxhzjzvvPUMarfayV1TqxRshB",
  "key15": "35DSmpPyethT9mq3Yxu3J53s3jgtLSZhWhowwRaurna1Cgr7seGGkdC7WRRmjT7eJwBPah7uYdMQ18JQASrGBChG",
  "key16": "4apb35JF7FL1oraMPWGWPhgrNvTGEN6nLP6cF4sAMpDuvjWxTGKmbHSoQJJtMcYTL12xTqYoF32C3uKfCGb2kKe5",
  "key17": "4B5UgiSh48GJvGsVU6AS38jDQAUg31U1631xShnX9nDT3sNcDN6sF1KiH4aXMvfUrM93VZBH4qhgTFGWeYqk8y2i",
  "key18": "3q4cnGUrLzPd3Cs9e89ggzspTbAg4JFigvRUtApA3rZm1pEUA4FwWuwb6r2igExHTm7yyYt2YRzPZmhHMRXxmG6z",
  "key19": "35yHdFb2KqhoiFAUZ1ufAmvZst4rXqYissNX9eAwd8CW7BsQvr9CzRgMpKhAGiuNrmzgQfX8WqrG5JvkrNhnw7T4",
  "key20": "3ogGvK2Npasc5Lg7eZQEWchorDeZrfn5yGy9S7Zm72EA5UxtebRLqFExH8i2AKNiJtGJBMXEhrn7d99AXfGossG5",
  "key21": "3ZNMaguQtu3sdEKpehjqhHrakLRb7v9znf4ju7dbL5bCSy6LheMNpY9GQyzcAB5SFaAzfVpUuWTpRPwzjqJfYmuk",
  "key22": "H2JWJMr7m1rKPJ7NgHghcmQ1pTUMqV2RupURaGVXtx2ybyBEVgfp7iprvWHnjnFvZwW4e25ZWTC9VBCqdFsU2gi",
  "key23": "5MNpLHdDtKgJnJcdT9MKs93tDqdEGXciugEFcgKj42EEse5T61Ph937TmpdKVTxXvhDXHovKoUasE3VqDqQxzihq",
  "key24": "4is359iUbwdjtQQk9wNubAFXxf9g3k8HwypgESYi5d4Gsa7fbEsjEoYrngToCAXKv4AvKGny79LUD9wTdhk2i62i",
  "key25": "3NRZ13HCAhgKAEwYF7qTq3se3BNqULf28459zPQ9E5baQFRQg9BXQAMHnsUAm6Rfq4foykyZHShKMPN2m3EVLtFk",
  "key26": "2Fa25YZouKgQ4sjuW7c5hU5cs8FaxZS2nZberbGFv2gEMFGFo9iT7HXwKvsuwD4HBy98nqnsRLqXHfKUQKjzfzuy",
  "key27": "39giF8JKm3imq9FBqv4qapnibBUwfjBeFcyQTRWWCXm8j511hPFb5n4RmUM2HbDh4nUbsxdWD4A3SqdzDtzdypiZ",
  "key28": "4jcdumZ4NK9eYykWWoYRJxYyk1yWCLMnuXfNiVqzyi8whkv5JTziYuxoWStsvx3WSf1LZTYy8Kewg31hsS5DSiZ6",
  "key29": "2zNAjRsSXA4HDt5ppEJZtCSK7dSUnov9bAuYnJ4YuNtZyS925SPK9N2bDNxPtX4at1rW2icP1s2bKKnkgpccDMKT",
  "key30": "3bA8UwJj1cnx5KvjVNRPJQdrvpJVjkU9tH6AtXRDjh9N2QCA7WSsz47miZotpscEPbg1wUZXjyjL1w5rVCvxfNQS",
  "key31": "4cVZxsKLd59tP9nAQcYWBNGPBwqyBCXTn7wFi24acL54tWPHgQP1qfmMsG2u2sXsyXXiZiKqyEL4maqejjAqv3ax",
  "key32": "125UsUWLiQqBj4ztH1WXHEYB66GigmoJochpwWYwBRKjNtjiHmrfCMYsMzF5bS3LzrrAwZsq1maVxp58si1Sgbqp",
  "key33": "UPzKAWmerycNkLy2DEYBgMiTWoDzmts9x2yNh6WKeAGDwoHfq9abnZcWW1tG2Zo1P6nujYR7AVbXxNYriJQthkS",
  "key34": "3DxEN5McvMaot1TDUjzV5wiAN9opZTXFCzqitwUJsnZep6XbyGX19tJJ1MRv8fLEv2FFKqrTzS4UXw9uV4AVoaU5",
  "key35": "3qHtKPuGgYFLo59qYNCjjwP83uG4zXp1tVBLsBrLGgMCbHkAnZehtZK2QGCkuT9BfHyg75W9pootNpUAn8XFRfmU",
  "key36": "NtTrYE6RHSSvQH2RRscg39TAPHMBiq5L5rFgKYTxgYafqCyV6ww8TixwAuirSf3JKr9FNG6mtCkb2XuhFzesT9p",
  "key37": "2aeMVodqHtxoRxu7RbypHAmiFYfY9JMrYHPCPfbBHGX6hfKXWx7ANh4LkzDVbCX7w2LREBFCG4xFPSgureNDumfG",
  "key38": "4U3Jx6w7Se4mogHCrroyonWkBh8zDG991EdLnpomXHB4PSYAxZJJuuH5j82BEUK3LZAVRLJrWvekJCwpW1arQxH7",
  "key39": "2jHSVnAfeLJZUqrQamFuq9Qa4WqZAD6m3EH3sNrE3CMUeoQN7Uj55CpTZq9EzmWFnpgHaSU5xLmrMxQJmutyif62",
  "key40": "3VYEQog7TsoT2cRATedvGSErYWGE2RA1ENhpKgGbZYb4GiiWhKFTH4j9GeivvdMYoDMYBbqRe61mSwEXN9DHJ4TC",
  "key41": "Qj5m7pjfr7euECNeFdsLeuucd6oRxroYBxa9R2DrinoCKks6MxWPt9mFP1j2KH4y9J7JVX9yXxdQh77nHN6uYUL",
  "key42": "3m5LyQbZKj9ZV2nt1YXwFvrHXNfpDNZ9QUjMPxDrzRdvwRN635CQ9jNw4PpEGD2V8ptYLEcuxUQdjk9jcyq14siM",
  "key43": "5G4GDog2ND2eME2nS1WgZQvTHoW4guaNfhq4ZdWWbzwvo6gEUbzDCc9gUiLi94knvJJzqQJQXig5bpU4GR18HQy5",
  "key44": "4B6r6TJR7tDiPZbPn3PggqnBiYGcaNg6tH72r78pVU2UVZtBxN3t1oHeweXB7YHqo4MinPiRnfZWfiVTKX2fhDwx",
  "key45": "zZi89boZYd4xoqH7CKwtUh4ZPbCaP2HsbWLK6kJhZKPNsmcF1gpWzeEbxkcjXNKzrix8REjvQE6nwZSir48Fmg9"
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
